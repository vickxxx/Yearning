(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71a319c0"],{5893:function(t,e,r){"use strict";r("ce2e")},ce2e:function(t,e,r){},e54e:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Row",[r("Card",{attrs:{"dis-hover":""}},[r("Row",[r("Col",{attrs:{span:"5"}},[r("h2",[t._v("工单编号:"+t._s(this.order.work_id))])]),r("Col",{attrs:{span:"5",offset:"14"}},[1===t.order.status?r("Button",{attrs:{type:"warning"},nativeOn:{click:function(e){return t.open_form()}}},[t._v("\n                        查看回滚语句\n                    ")]):t._e(),0===t.order.status||4===t.order.status||0===t.order.status?r("Button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.open_form()}}},[t._v("重新提交\n                    ")]):t._e(),r("Poptip",{attrs:{confirm:"",title:"确定要撤销工单吗？",transfer:""},on:{"on-ok":function(e){return t.delOrder(t.order.work_id)}}},[2===t.order.status?r("Button",{attrs:{type:"primary",ghost:""}},[t._v("工单撤销\n                        ")]):t._e()],1),r("Button",{staticStyle:{"margin-left":"2%"},attrs:{type:"info"},nativeOn:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])],1)],1),r("br"),r("basic")],1),r("br"),r("Row",{attrs:{type:"flex",justify:"center"}},[r("Card",{staticStyle:{width:"98%"},attrs:{"dis-hover":""}},[r("p",{attrs:{slot:"title"},slot:"title"},[t._v("执行进度")]),r("Tabs",{attrs:{name:"step"}},[r("TabPane",{attrs:{label:"流程步骤",name:"step"}},[r("Steps",{attrs:{current:t.order.current_step,size:"small"}},t._l(t.order_step,(function(t){return r("Step",{key:t.title,attrs:{title:t.desc,content:"相关人员:"+t.auditor}})})),1)],1),r("TabPane",{attrs:{label:"阶段详情"}},[r("StepDetail")],1)],1),r("br"),r("br"),r("h3",[t._v("SQL审核")]),r("collapse"),r("br"),t.order.assigned===t.user?[r("Testing")]:t._e()],2)],1)],1),r("BackTop",{attrs:{height:100,bottom:200}},[r("div",{staticClass:"top"},[t._v("返回顶端")])]),r("post-form",{model:{value:t.is_open,callback:function(e){t.is_open=e},expression:"is_open"}})],1)},n=[],o=(r("6b54"),r("2397"),r("d225")),s=r("b0b4"),c=r("4e2b"),l=r("308d"),i=r("6bb5"),u=r("9ab4"),f=r("64f3"),p=r("60a3"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Collapse",{attrs:{simple:""},model:{value:t.collapse,callback:function(e){t.collapse=e},expression:"collapse"}},[r("Panel",{attrs:{name:"sql"}},[t._v("\n        提交的SQL语句\n        "),r("div",{attrs:{slot:"content"},slot:"content"},[r("RadioGroup",{on:{"on-change":t.fetch_post_sql},model:{value:t.switch_args.is_more,callback:function(e){t.$set(t.switch_args,"is_more",e)},expression:"switch_args.is_more"}},[r("Radio",{attrs:{label:"10"}},[t._v("\n                    仅显示10条以内的SQL\n                ")]),r("Radio",{attrs:{label:"0"}},[t._v("\n                    显示全部SQL\n                ")])],1),r("br"),r("br"),r("editor",{attrs:{is_read:!0},on:{init:t.editorInit},model:{value:t.sqls,callback:function(e){t.sqls=e},expression:"sqls"}})],1)]),1===t.order.status||4===t.order.status?r("Panel",{attrs:{name:"results"}},[t._v("\n        执行结果\n        "),r("div",{attrs:{slot:"content"},slot:"content"},[r("Row",[r("Col",{attrs:{span:"24"}},[r("Table",{staticClass:"tabletop",staticStyle:{background:"#5cadff"},attrs:{border:"",columns:t.columns,data:t.results,size:"large"}}),r("br"),r("Page",{ref:"page",attrs:{total:t.page_number,"show-elevator":"","page-size":10},on:{"on-change":t.current_page}})],1)],1)],1)]):t._e()],1)},b=[],_=r("a897");function v(t){var e=h();return function(){var r,a=Object(i["a"])(t);if(e){var n=Object(i["a"])(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(l["a"])(this,r)}}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){Object(c["a"])(r,t);var e=v(r);function r(){return Object(o["a"])(this,r),e.apply(this,arguments)}return Object(s["a"])(r,[{key:"mounted",value:function(){this.current_page()}}]),r}(Object(p["b"])(f["a"]));m=Object(u["a"])([Object(p["a"])({components:{Editor:_["a"]}})],m);var y=m,g=y,O=r("2877"),j=Object(O["a"])(g,d,b,!1,null,"4ee1e0c1",null),k=j.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Form",{attrs:{"label-width":80,model:t.order}},[r("Row",[r("Col",{attrs:{span:"8"}},[r("FormItem",{attrs:{label:"环境"}},[r("span",[t._v(t._s(t.order.idc))])]),r("FormItem",{attrs:{label:"数据源"}},[r("span",[t._v(t._s(t.order.source))])]),r("FormItem",{attrs:{label:"数据库"}},[r("span",[t._v(t._s(t.order.data_base))])])],1),r("Col",{attrs:{span:"8"}},[r("FormItem",{attrs:{label:"数据表"}},[r("span",[t._v(t._s(t.order.table))])]),r("FormItem",{attrs:{label:"当前状态"}},[2===t.order.status?r("Tag",{attrs:{color:"primary"}},[t._v("审核中")]):0===t.order.status?r("Tag",{attrs:{color:"error"}},[t._v("驳回")]):1===t.order.status?r("Tag",{attrs:{color:"success"}},[t._v("已执行")]):4===t.order.status?r("Tag",{attrs:{color:"error"}},[t._v("执行失败")]):5===t.order.status?r("Tag",{attrs:{color:"primary"}},[t._v("待执行")]):2===t.order.status?r("Tag",{attrs:{color:"warning"}},[t._v("执行中")]):t._e()],1),r("FormItem",{attrs:{label:"提交时间"}},[r("span",[t._v(t._s(t.order.date))])])],1),r("Col",{attrs:{span:"8"}},[r("FormItem",{attrs:{label:"提交人"}},[r("span",[t._v(t._s(t.order.username))])]),r("FormItem",{attrs:{label:"工单说明"}},[r("span",[t._v(t._s(t.order.text))])]),r("FormItem",{attrs:{label:"工单类型"}},[0===t.order.type?r("Tag",{attrs:{color:"success"}},[t._v("ddl")]):1===t.order.type?r("Tag",{attrs:{color:"magenta"}},[t._v("dml")]):t._e()],1)],1)],1)],1)},w=[];function x(t){var e=$();return function(){var r,a=Object(i["a"])(t);if(e){var n=Object(i["a"])(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(l["a"])(this,r)}}function $(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var I=function(t){Object(c["a"])(r,t);var e=x(r);function r(){return Object(o["a"])(this,r),e.apply(this,arguments)}return r}(p["d"]);I=Object(u["a"])([Object(p["a"])({components:{},mixins:[f["a"]]})],I);var T=I,F=T,S=Object(O["a"])(F,R,w,!1,null,"1e067815",null),q=S.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Modal",{attrs:{"ok-text":"提交工单",width:"800"},on:{"on-ok":t.referOrder,"on-cancel":t.cancel},model:{value:t.is_open,callback:function(e){t.is_open=e},expression:"is_open"}},[r("div",{staticClass:"step-header-con"},[r("h3",[t._v("Yearning SQL平台审核工单")])]),r("p",{staticClass:"step-content"}),r("Form",{staticClass:"step-form"},[r("FormItem",{attrs:{label:"用户名:"}},[r("p",[t._v(t._s(t.order.username))])]),r("FormItem",{attrs:{label:"环境:"}},[r("p",[t._v(t._s(t.order.idc))])]),r("FormItem",{attrs:{label:"连接名:"}},[r("p",[t._v(t._s(t.order.source))])]),r("FormItem",{attrs:{label:"数据库库名:"}},[r("p",[t._v(t._s(t.order.data_base))])]),r("FormItem",{attrs:{label:"定时执行:"}},[r("p",[t._v(t._s(t.order.delay))])]),r("FormItem",[0===this.order.status||4===this.order.status?r("Input",{attrs:{type:"textarea"},model:{value:t.sqls,callback:function(e){t.sqls=e},expression:"sqls"}}):t._e(),1===this.order.status?[r("Table",{attrs:{columns:t.roll_column,data:t.roll_data,height:"300"}}),r("br"),r("Page",{attrs:{total:t.page_number,"show-elevator":"","page-size":5,current:t.current},on:{"on-change":t.rollback,"update:current":function(e){t.current=e}}})]:t._e()],2),r("FormItem",{attrs:{label:"工单提交说明:"}},[r("Input",{attrs:{placeholder:"最多不超过20个字"},model:{value:t.order.text,callback:function(e){t.$set(t.order,"text",e)},expression:"order.text"}})],1),r("FormItem",{attrs:{label:"是否备份"}},[r("RadioGroup",{model:{value:t.order.backup,callback:function(e){t.$set(t.order,"backup",e)},expression:"order.backup"}},[r("Radio",{attrs:{label:1}},[t._v("是")]),r("Radio",{attrs:{label:0}},[t._v("否")])],1)],1)],1)],1)],1)},D=[],P=r("6d8f");function B(t){var e=E();return function(){var r,a=Object(i["a"])(t);if(e){var n=Object(i["a"])(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(l["a"])(this,r)}}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var L=function(t){Object(c["a"])(r,t);var e=B(r);function r(){var t;return Object(o["a"])(this,r),t=e.apply(this,arguments),t.roll_data=[],t.roll_column=[{type:"expand",width:50,render:P["a"].expand},{title:"当前检查的sql",key:"sql",render:P["a"].sub_sql}],t}return Object(s["a"])(r,[{key:"get_visible",value:function(t){t&&1===this.order.backup&&this.rollback(),this.is_open=t}},{key:"cancel",value:function(){this.is_open=!1,this.current=1,this.$emit("input",!1)}},{key:"referOrder",value:function(){var t=this,e=Object.assign({},this.order);e.assigned=e.relevant[0],this.$http.post("".concat(this.$config.url,"/fetch/roll_order"),{data:e,sqls:this.sqls,tp:this.order.status}).then((function(){t.$router.go(-1),t.$config.notice("工单已提交成功")})).catch((function(e){t.$config.err_notice(t,e)}))}},{key:"rollback",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("".concat(this.$config.url,"/fetch/roll?workid=").concat(this.order.work_id,"&page=").concat(e)).then((function(e){t.roll_data=e.data.sql,t.page_number=e.data.count})).catch((function(e){t.$config.err_notice(t,e)}))}}]),r}(Object(p["b"])(f["a"]));Object(u["a"])([Object(p["c"])({type:Boolean,required:!0,default:!1})],L.prototype,"value",void 0),Object(u["a"])([Object(p["e"])("value")],L.prototype,"get_visible",null),L=Object(u["a"])([Object(p["a"])({components:{}})],L);var Q=L,z=Q,G=Object(O["a"])(z,C,D,!1,null,"62f6f5bf",null),J=G.exports,M=r("119b"),Y=r("476e"),A=r("a334"),H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Table",{attrs:{columns:t.col,data:t.table_data,"max-height":"200"},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.row;return["已提交"===a.action?r("Tag",{attrs:{color:"blue"}},[t._v(t._s(a.action))]):"驳回"===a.action?r("Tag",{attrs:{color:"error"}},[t._v(t._s(a.action))]):"审核通过并执行"===a.action?r("Tag",{attrs:{color:"success"}},[t._v(t._s(a.action))]):r("Tag",{attrs:{color:"primary"}},[t._v(t._s(a.action))])]}}])})],1)},K=[];function N(t){var e=U();return function(){var r,a=Object(i["a"])(t);if(e){var n=Object(i["a"])(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(l["a"])(this,r)}}function U(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var V=function(t){Object(c["a"])(r,t);var e=N(r);function r(){var t;return Object(o["a"])(this,r),t=e.apply(this,arguments),t.col=[{title:"相关人",key:"username"},{title:"操作",key:"action",slot:"action"},{title:"操作时间",key:"time"},{title:"驳回信息",key:"rejected"}],t}return Object(s["a"])(r,[{key:"mounted",value:function(){var t=this;this.$http.get("".concat(this.$config.url,"/steps?work_id=").concat(this.order.work_id)).then((function(e){return t.table_data=e.data})).catch((function(e){return t.$config.err_notice(t,e)}))}}]),r}(Object(p["b"])(f["a"]));V=Object(u["a"])([Object(p["a"])({components:{}})],V);var W=V,X=W,Z=Object(O["a"])(X,H,K,!1,null,"5aedf736",null),tt=Z.exports;function et(t){var e=rt();return function(){var r,a=Object(i["a"])(t);if(e){var n=Object(i["a"])(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(l["a"])(this,r)}}function rt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var at=function(t){Object(c["a"])(r,t);var e=et(r);function r(){var t;return Object(o["a"])(this,r),t=e.apply(this,arguments),t.user=sessionStorage.getItem("user"),t}return Object(s["a"])(r,[{key:"created",value:function(){this.$http.put("".concat(this.$config.url,"/tpl"),{source:this.order.source}).then((function(t){A["a"].fetch_order_step(t.data.steps)}))}},{key:"mounted",value:function(){this.fetch_post_sql()}},{key:"order_step",get:function(){return A["a"].order_step}}]),r}(Object(p["b"])(f["a"]));at=Object(u["a"])([Object(p["a"])({components:{collapse:k,basic:q,postForm:J,Testing:M["a"],reject:Y["a"],StepDetail:tt}})],at);var nt=at,ot=nt,st=(r("5893"),Object(O["a"])(ot,a,n,!1,null,null,null));e["default"]=st.exports}}]);
//# sourceMappingURL=chunk-71a319c0.104ab664.js.map