"use strict";(self["webpackChunkmeaty"]=self["webpackChunkmeaty"]||[]).push([[803],{6803:function(t,a,s){s.r(a),s.d(a,{default:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"header-detali"},[a("img",{staticClass:"header-detali",attrs:{src:t.detali.imgurl,width:"100%",height:"315px"}}),a("div",{staticClass:"column"},[a("router-link",{staticClass:"towardsleft",attrs:{to:"/"}},[a("img",{staticClass:"back",attrs:{src:s(6477)}})]),a("h1",{staticClass:"detalis"},[t._v("详情")])],1)]),a("div",{staticClass:"meatybody"},[a("div",{staticClass:"detaliname"},[t._v(" "+t._s(t.detali.name)+" ")]),a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),a("div",{staticClass:"container"},[t._v(" "+t._s(t.introduce)+" ")]),a("div",{staticClass:"detali-paragraph"},[a("p",{staticClass:"paragraph"},[t._v(" "+t._s(t.showAll?t.detali.paragraph:t.detali.paragraph.slice(0,20)+"...")+" ")])]),a("button",{staticClass:"botton",on:{click:t.shoemore}},[a("div",{staticClass:"bottoncontant",attrs:{id:"more"}},[t._v(t._s(t.moretext))]),a("img",{staticStyle:{"margin-bottom":"-5px"},attrs:{src:s(7739),width:" 20px",height:" 20px"}})]),a("div",{staticClass:"footer"},[a("div",{staticClass:"button-add"},[a("button",{staticClass:"less",attrs:{type:"button"},on:{click:t.sub}},[t._v("-")]),a("input",{staticClass:"textinput",attrs:{type:"text",placeholder:t.counter}}),a("button",{staticClass:"add",attrs:{type:"button"},on:{click:t.add}},[t._v("+")])]),a("div",[a("button",{staticClass:"settlement"},[t._v(t._s(t.indent))])])])],1)])},i=[],l={name:"MeatyDetali",data(){return{detali:{paragraph:" "},introduce:"商品介绍",moretext:"查看更多",indent:"结算订单",counter:1,value:5,showAll:!1,paragraph:"",lineHeight:1.2,lineClamp:5}},methods:{add(){this.counter++},sub(){this.counter--},shoemore(){if(this.showAll=!this.showAll,this.showAll)this.$refs.detali.paragraph.style.setProperty("max-height","none");else{let t=this.$refs.detali.paragraph.clientHeight,a=this.lineHeight*parseInt(getComputedStyle(this.$refs.detali.paragraph).fontSize),s=this.lineClamp,e=a*s;t>e&&this.$refs.detali.paragraph.style.setProperty("max-height",e+"px")}}},mounted(){this.detali=JSON.parse(this.$route.query.data),console.log(JSON.parse(this.$route.query.data))}},r=l,o=s(1001),n=(0,o.Z)(r,e,i,!1,null,null,null),c=n.exports},7739:function(t,a,s){t.exports=s.p+"img/down.cb6d208c.svg"},6477:function(t,a,s){t.exports=s.p+"img/left.214d5feb.svg"}}]);
//# sourceMappingURL=803.f89a32bd.js.map