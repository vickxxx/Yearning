// Copyright 2019 HenryYee.
//
// Licensed under the AGPL, Version 3.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.gnu.org/licenses/agpl-3.0.en.html
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// See the License for the specific language governing permissions and
// limitations under the License.

package lib

import (
	"Yearning-go/src/model"
	"crypto/tls"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"github.com/cookieY/sqlx"
	"github.com/cookieY/yee"
	_ "github.com/go-sql-driver/mysql"
	"gopkg.in/ldap.v3"
	"log"
	"math"
	"math/rand"
	"strconv"
	"strings"
	"time"
)

func ResearchDel(s []string, p string) []string {
	for in := 0; in < len(s); in++ {
		if s[in] == p {
			s = append(s[:in], s[in+1:]...)
			in--
		}
	}
	return s
}

func Paging(page interface{}, total int) (start int, end int) {
	var i int
	switch v := page.(type) {
	case string:
		i, _ = strconv.Atoi(v)
	case int:
		i = v
	}
	start = i*total - total
	end = total
	return
}

func LdapConnenct(c yee.Context, l *model.Ldap, user string, pass string, isTest bool) bool {

	var s string
	ld, err := ldap.Dial("tcp", l.Url)

	if l.Ldaps {
		if err := ld.StartTLS(&tls.Config{InsecureSkipVerify: true}); err != nil {
			log.Println(err.Error())
		}
	}

	if err != nil {
		c.Logger().Error(err.Error())
		return false
	}
	defer ld.Close()

	if ld != nil {
		if err := ld.Bind(l.User, l.Password); err != nil {
			return false
		}
		if isTest {
			return true
		}

	}

	if l.Type == 1 {
		s = fmt.Sprintf("(sAMAccountName=%s)", user)
	} else if l.Type == 2 {
		s = fmt.Sprintf("(uid=%s)", user)
	} else {
		s = fmt.Sprintf("(cn=%s)", user)
	}

	searchRequest := ldap.NewSearchRequest(
		l.Sc,
		ldap.ScopeWholeSubtree, ldap.NeverDerefAliases, 0, 0, false,
		fmt.Sprintf("(&(objectClass=organizationalPerson)%s)", s),
		[]string{"dn"},
		nil,
	)

	sr, err := ld.Search(searchRequest)

	if err != nil {
		log.Println(err.Error())
		return false
	}

	if len(sr.Entries) != 1 {
		log.Println("User does not exist or too many entries returned")
		return false
	}

	userdn := sr.Entries[0].DN

	if err := ld.Bind(userdn, pass); err != nil {
		c.Logger().Error(err.Error())
		return false
	}
	return true
}

func Axis() []string {
	var s []string
	currentTime := time.Now()
	for a := 0; a < 7; a++ {
		oldTime := currentTime.AddDate(0, 0, -a)
		s = append(s, oldTime.Format("2006-01-02"))
	}
	return s
}

func GenWorkid() string {
	rand.Seed(time.Now().UnixNano())
	a := rand.Intn(1000)
	c := strconv.Itoa(a)
	now := time.Now()
	return now.Format("20060102150405") + c
}

func Intersect(o, n []string) []string {
	m := make(map[string]int)
	var arr []string
	for _, v := range o {
		m[v]++
	}
	for _, v := range n {
		m[v]++
		if m[v] > 1 {
			arr = append(arr, v)
		}
	}
	return arr
}

func NonIntersect(o, n []string) []string {
	m := make(map[string]int)
	var arr []string
	for _, v := range o {
		m[v]++
	}
	for _, v := range n {
		m[v]++
		if m[v] == 1 {
			arr = append(arr, v)
		}
	}
	return arr
}

func Time2StrDiff(delay string) time.Duration {
	if delay != "none" {
		now := time.Now()
		dt, _ := time.ParseInLocation("2006-01-02 15:04 ", delay, time.Local)
		after := dt.Sub(now)
		if after+1 > 0 {
			return after
		}
	}
	return 0
}

func TimeDifference(t string) bool {
	dt, _ := time.ParseInLocation("2006-01-02 15:04 ", t, time.Local)
	f := dt.Sub(time.Now())
	if math.Abs(f.Minutes()) > float64(model.GloOther.ExQueryTime) && float64(model.GloOther.ExQueryTime) > 0 {
		return true
	}
	return false
}

type querydata struct {
	Field []map[string]string
	Data  []map[string]interface{}
}

func QueryMethod(source *model.CoreDataSource, req *model.Queryresults, wordList []string) (querydata, error) {

	var qd querydata

	ps := Decrypt(source.Password)

	db, err := sqlx.Connect("mysql", fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4", source.Username, ps, source.IP, source.Port, req.Basename))
	if err != nil {
		return qd, err
	}

	defer db.Close()

	rows, err := db.Queryx(req.Sql)

	if err != nil {
		return qd, err
	}

	cols, err := rows.Columns()

	if err != nil {
		return qd, err
	}
	defer rows.Close()
	for rows.Next() {
		results := make(map[string]interface{})
		_ = rows.MapScan(results)
		for idx := range results {
			switch r := results[idx].(type) {
			case []uint8:
				if len(r) > 10000 {
					results[idx] = "blob字段无法显示"
				} else {
					if hex.EncodeToString(r) == "01" {
						results[idx] = "true"
					} else if hex.EncodeToString(r) == "00" {
						results[idx] = "false"
					} else {
						results[idx] = string(r)
					}
				}
			}
		}
		if len(wordList) > 0 {
			for ok := range results {
				for _, exclude := range wordList {
					if strings.ToLower(ok) == exclude {
						results[ok] = "****脱敏字段"
					}
				}
			}
		}

		qd.Data = append(qd.Data, results)
	}

	ele := removeDuplicateElement(cols)

	for _, cv := range ele {
		qd.Field = append(qd.Field, map[string]string{"title": cv, "key": cv, "width": "200"})
	}
	qd.Field[0]["fixed"] = "left"

	return qd, nil
}

func removeDuplicateElement(addrs []string) []string {
	result := make([]string, 0, len(addrs))
	temp := map[string]struct{}{}
	idx := 0
	for _, item := range addrs {
		if _, ok := temp[item]; !ok {
			temp[item] = struct{}{}
			result = append(result, item)
		} else {
			idx++
			item += fmt.Sprintf("(%v)", idx)
			result = append(result, item)
		}
	}
	return result
}

func JsonStringify(i interface{}) []byte {
	o, _ := json.Marshal(i)
	return o
}



func removeDuplicateElementForRule(addrs []string) []string {
	result := make([]string, 0, len(addrs))
	temp := map[string]struct{}{}
	for _, item := range addrs {
		if _, ok := temp[item]; !ok {
			temp[item] = struct{}{}
			result = append(result, item)
		}
	}
	return result
}

func MulitUserRuleMarge(group []string) model.PermissionList {
	var u model.PermissionList
	for _, i := range group {
		var k model.CoreRoleGroup
		model.DB().Where("name =?", i).First(&k)
		var m1 model.PermissionList
		_ = json.Unmarshal(k.Permissions, &m1)
		u.DDLSource = append(u.DDLSource, m1.DDLSource...)
		u.DMLSource = append(u.DMLSource, m1.DMLSource...)
		u.QuerySource = append(u.QuerySource, m1.QuerySource...)
		u.Auditor = append(u.Auditor, m1.Auditor...)
	}
	u.DDLSource = removeDuplicateElementForRule(u.DDLSource)
	u.DMLSource = removeDuplicateElementForRule(u.DMLSource)
	u.Auditor = removeDuplicateElementForRule(u.Auditor)
	u.QuerySource = removeDuplicateElementForRule(u.QuerySource)

	return u
}