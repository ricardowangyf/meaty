"use strict";(self["webpackChunkmeaty"]=self["webpackChunkmeaty"]||[]).push([[214,134],{3134:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"detali-plant"},[e("div",{staticClass:"paragraphcontent"},[e("div",{staticClass:"picture"},[e("img",{staticClass:"imgsize",attrs:{src:t.des}})]),e("div",{staticClass:"textspacing"},[e("h1",{staticClass:"header"},[t._v(t._s(t.title))]),e("h2",{staticClass:"paragraph"},[t._v(t._s(t.eal))]),e("el-rate",{attrs:{disabled:"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),t._m(0)])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"shopping-cart"},[e("button",{staticClass:"shopping-text"},[t._v("加入购物车")])])}],l={props:{title:{type:String,default:""},des:{type:String,default:""},eal:{type:String,default:""}},data(){return{value:5}}},i=l,r=a(1001),u=(0,r.Z)(i,n,s,!1,null,null,null),c=u.exports},5551:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mall-page"},[e("div",{staticClass:"main-body"},[e("Filterbutton"),t._l(t.tableData,(function(a,n){return e("li",{key:n,staticClass:"plant-details",on:{click:function(e){return t.button(a)}}},[e("HomeAll",{attrs:{title:a.name,des:a.imgurl,eal:a.paragraph}})],1)}))],2),e("FooterPage")],1)])},s=[],l=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-link"},[e("ul",{staticClass:"buttonstyle"},t._l(t.tabList,(function(a,n){return e("li",{key:n,staticClass:"plant-name",class:{active:t.currentIndex===n},on:{click:function(e){return t.clickTab(n)}}},[t._v(" "+t._s(a.name)+" ")])})),0)])}),i=[],r={name:"FilterButton",data(){return{currentIndex:0,tabList:[{id:1,name:"全部"},{id:2,name:"向日葵"},{id:3,name:"仙人掌"},{id:4,name:"绿萝"}],tableData:[],content:"fdgfdgffdgfd",name:""}},mounted(){},methods:{clickTab(t,e){t==e?this.content="aefwergeqrgheqhrgqethqahrt":(this.content="swergewrg egr erg",console.log(t))}}},u=r,c=a(1001),o=(0,c.Z)(u,l,i,!1,null,null,null),d=o.exports,p=a(5476),f=a(3134),h=a(3861),m={name:"ShopCenter",props:["type"],data(){return{tableData:[],item:[],shopCart:[],name:" "}},components:{Filterbutton:d,HomeAll:f["default"],FooterPage:p.Z},mounted(){(0,h.i)().then((t=>{this.tableData=t.data,console.log("---\x3e ",this.tableData)}))},methods:{button(t){this.$router.push({path:"/detail",query:{data:JSON.stringify(t)}})},clickTab(t,e){this.currentIndex=t,this.getList(e.name)}}},g=m,v=(0,c.Z)(g,n,s,!1,null,null,null),b=v.exports}}]);
//# sourceMappingURL=214.2ae45319.js.map