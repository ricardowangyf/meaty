"use strict";(self["webpackChunkmeaty"]=self["webpackChunkmeaty"]||[]).push([[858,634],{4321:function(t,a,e){e.d(a,{Z:function(){return u}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"button-link"},[a("ul",{staticClass:"buttonstyle"},[t._l(t.tabList,(function(e,s){return a("li",{key:s,staticClass:"plant-name",on:{click:function(a){return t.clickTab(s)}}},[t._v(t._s(e.name)+" ")])})),a("div",[t._v(" "+t._s(t.content))])],2)])},n=[],i=e(3861),l={name:"FilterButton",data(){return{tabList:[{id:1,name:"全部"},{id:2,name:"向日葵"},{id:3,name:"仙人掌"},{id:4,name:"绿萝"}],tableData:[],content:"fdgfdgffdgfd",name:""}},mounted(){(0,i.i)().then((t=>{this.tableData=t.data;const a=this.$route.params.type||"all";this.filterDatas(a,t.data)}))},watch:{$route:{handler(t,a){const e=t.params.type,s=a.params.type;this.name=t.params.name,e&&e!==s&&this.filterDatas(e,this.tableData),console.log("tableData",this.tableData)}}},methods:{filterDatas(){},clickTab(t,a){t==a?this.content="aefwergeqrgheqhrgqethqahrt":(this.content="swergewrg egr erg",console.log(t))}}},r=l,o=e(1001),c=(0,o.Z)(r,s,n,!1,null,null,null),u=c.exports},5476:function(t,a,e){e.d(a,{Z:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"navigation-bar"},[a("router-link",{staticClass:"backgroundd",attrs:{to:"/"}},[a("div",{staticClass:"padding"},[a("li",[a("img",{attrs:{src:e(194)}})]),a("li",{staticClass:"home"},[t._v("主页")])])]),a("router-link",{staticClass:"backgroundd",attrs:{to:"/community"}},[a("div",{staticClass:"padding"},[a("li",[a("img",{attrs:{src:e(4694)}})]),a("li",{staticClass:"home"},[t._v("社区")])])]),a("router-link",{staticClass:"backgroundd",attrs:{to:"/shopcenter"}},[a("div",{staticClass:"padding"},[a("li",[a("img",{attrs:{src:e(9664)}})]),a("li",{staticClass:"home"},[t._v("商城")])])])],1)},n=[],i={name:"FooterPage"},l=i,r=e(1001),o=(0,r.Z)(l,s,n,!1,null,null,null),c=o.exports},3634:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"detali-plant"},[a("div",{staticClass:"paragraphcontent"},[a("div",{staticClass:"picture"},[a("img",{staticClass:"imgsize",attrs:{src:t.des}})]),a("div",{staticClass:"textspacing"},[a("h1",{staticClass:"header"},[t._v(t._s(t.title))]),a("h2",{staticClass:"paragraph"},[t._v(t._s(t.eal))]),a("el-rate",{attrs:{disabled:"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)]),t._m(0)])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"shopping-cart"},[a("button",{staticClass:"shopping-text"},[t._v("加入购物车")])])}],i={props:{title:{type:String,default:""},des:{type:String,default:""},eal:{type:String,default:""}},data(){return{value:5}}},l=i,r=e(1001),o=(0,r.Z)(l,s,n,!1,null,null,null),c=o.exports},6858:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"set-center"},[a("div",{staticClass:"margin"},[a("Filterbutton"),t._l(t.tableData,(function(t){return a("li",{key:t.name,staticClass:"plant-details"},[a("router-link",{attrs:{to:`/${t.name}/detalis`}},[a("HomeAll",{attrs:{title:t.name,des:t.imgurl,eal:t.paragraph}})],1)],1)}))],2),a("FooterPage")],1)},n=[],i=e(4321),l=e(5476),r=e(3634),o=e(3861),c={name:"ShopCenter",props:["type"],data(){return{tableData:[],item:[],name:" "}},components:{Filterbutton:i.Z,HomeAll:r["default"],FooterPage:l.Z},mounted(){(0,o.i)().then((t=>{this.tableData=t.data,console.log("---\x3e ",this.tableData)}))}},u=c,d=e(1001),p=(0,d.Z)(u,s,n,!1,null,null,null),m=p.exports},4694:function(t,a,e){t.exports=e.p+"img/community.2f4875ca.svg"},194:function(t,a,e){t.exports=e.p+"img/home.edf78cb9.svg"},9664:function(t,a,e){t.exports=e.p+"img/shop.a1329161.svg"}}]);
//# sourceMappingURL=858.6a211362.js.map