"use strict";(self["webpackChunkmeaty"]=self["webpackChunkmeaty"]||[]).push([[660],{4660:function(t,s,a){a.r(s),a.d(s,{default:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"header-detali"},[s("img",{staticClass:"header-detali",attrs:{src:t.detali.imgurl,width:"100%",height:"315px"}}),s("div",{staticClass:"column"},[s("router-link",{staticClass:"towardsleft",attrs:{to:"/"}},[s("img",{staticClass:"back",attrs:{src:a(6477)}})]),s("h1",{staticClass:"detalis"},[t._v("详情")])],1)]),s("div",{staticClass:"meatybody"},[s("div",{staticClass:"detaliname"},[t._v(" "+t._s(t.detali.name)+" ")]),s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),s("div",{staticClass:"container"},[t._v(" "+t._s(t.introduce)+" ")]),s("div",{staticClass:"detali-paragraph"},[s("p",{staticClass:"paragraph"},[t._v(t._s(t.showAll?this.detali.paragraph:this.detali.paragraph.slice(0,20)+"..."))])]),s("button",{staticClass:"botton",on:{click:t.shoemore}},[s("div",{staticClass:"bottoncontant",attrs:{id:"more"}},[t._v(t._s(t.moretext))]),s("img",{staticStyle:{"margin-bottom":"-5px"},attrs:{src:a(7739),width:" 20px",height:" 20px"}})]),s("div",{staticClass:"footer"},[s("div",{staticClass:"button-add"},[s("button",{staticClass:"less",attrs:{type:"button"},on:{click:t.sub}},[t._v("-")]),t._v(" "),s("input",{staticClass:"textinput",attrs:{type:"text",placeholder:t.counter}}),s("button",{staticClass:"add",attrs:{type:"button"},on:{click:t.add}},[t._v("+")])]),s("div",[s("button",{staticClass:"settlement"},[t._v(t._s(t.indent))])])])],1)])},i=[],l={name:"MeatyDetali",data(){return{detali:{},introduce:"商品介绍",moretext:"查看更多",indent:"结算订单",counter:1,value:5,showAll:!1,lineHeight:1.2,lineClamp:3}},methods:{add(){this.counter++},sub(){this.counter--},shoemore(){if(this.showAll=!this.showAll,this.showAll)this.$refs.detali.paragraph.style.setProperty("max-height","none");else{let t=this.$refs.detali.paragraph.clientHeight,s=this.lineHeight*parseInt(getComputedStyle(this.$refs.detali.paragraph).fontSize),a=this.lineClamp,e=s*a;t>e&&this.$refs.detali.paragraph.style.setProperty("max-height",e+"px")}}},mounted(){this.detali=JSON.parse(this.$route.query.data),console.log(JSON.parse(this.$route.query.data))}},r=l,o=a(1001),n=(0,o.Z)(r,e,i,!1,null,null,null),c=n.exports},7739:function(t,s,a){t.exports=a.p+"img/down.cb6d208c.svg"},6477:function(t,s,a){t.exports=a.p+"img/left.214d5feb.svg"}}]);
//# sourceMappingURL=660.c03c13e0.js.map