(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11],{479:function(t,n,e){},481:function(t,n,e){"use strict";var o=e(479);e.n(o).a},482:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAtklEQVQoke3SMWoCYRDF8Z+LlaQWcoacwEYSIU3EMqDtHsAb5BIeI5aKbURS2QePkBxALBcZWGX9WJQt0vnvZt68+b6B18rzXA1djMv2J/7SkXZSd/CGl4r2gS+scEiNGfoY4aFm+St6WGCDIppPeMdj3Z8rxMIJnjEP4/SGISUemGYNTWfuxv8yzvDbwBOzswjAD3ZXIndin0YuKLDGFkMMKveHFiFf1oX8RAhzfJf5DaK+PAVHk8IgpzvcKCQAAAAASUVORK5CYII="},483:function(t,n,e){"use strict";var o={name:"pages-banner",props:{name:{type:String,default:"custody"},center:{type:Boolean,default:!1}},data:function(){return{}}},r=(e(481),e(4)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:"banner-wrap "+(t.center?"banner-wrap-center":"")+" banner-wrap-"+t.name},[e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("banner."+t.name+".title")))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.$t("banner."+t.name+".description")))])])])}),[],!1,null,"43846212",null);n.a=component.exports},497:function(t,n,e){},510:function(t,n,e){var map={"./index0.png":511,"./index1.png":512,"./index2.png":513,"./index3.png":514};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=510},511:function(t,n,e){t.exports=e.p+"img/c180656.png"},512:function(t,n,e){t.exports=e.p+"img/1738493.png"},513:function(t,n,e){t.exports=e.p+"img/011fb23.png"},514:function(t,n,e){t.exports=e.p+"img/8d614fb.png"},515:function(t,n,e){"use strict";var o=e(497);e.n(o).a},519:function(t,n,e){"use strict";e.r(n);e(100),e(38),e(24),e(15),e(69),e(48);Boolean;var o={methods:{openModal:function(t,n){var data=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.modal[t]={name:n,state:e,data:data,visible:!0}},closeModal:function(t){this.modal[t].visible=!1}}},r=e(483),c=e(482),l=e.n(c),d={name:"web-home",components:{PagesBanner:r.a},mixins:[o],head:function(){return{title:this.$t("index.headerTitle"),meta:[{hid:"keywords",name:"keywords",content:this.metaKeywordsContent},{hid:"description",name:"description",content:this.metaDescriptionContent}]}},data:function(){return{Hexagon:l.a}}},v=(e(515),e(4)),component=Object(v.a)(d,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("main",{staticClass:"index"},[o("PagesBanner",{attrs:{name:"index",center:""}}),t._v(" "),o("div",{staticClass:"bussiness-content"},[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"wrapper-content-top"},[o("div",{staticClass:"wrapper-content-top-title"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("index.industry"))),o("span",{staticClass:"strong"},[t._v(t._s(t.$t("index.layout")))])]),t._v(" "),o("div",{staticClass:"wrapper-content-top-second-title"},[t._v("\n\t\t\t\t\t\tIndustrial Distribution\n\t\t\t\t\t")])]),t._v(" "),o("div",{staticClass:"wrapper-content-bottom"},t._l(t.$t("index.productList"),(function(n,r){return o("div",{key:"productList"+r,staticClass:"wrapper-content-bottom-item",class:{"flex-reverse":r%2!=0}},[o("div",{staticClass:"wrapper-content-bottom-left"},[o("div",{staticClass:"right-index"},[t._v("0"+t._s(r+1))]),t._v(" "),o("div",{staticClass:"wrapper-content-bottom-left-title-en primary"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(n.enTitle)+"\n\t\t\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"wrapper-content-bottom-left-title primary"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"wrapper-content-bottom-left-content"},t._l(n.content,(function(n,e){return o("div",{key:"itemConent"+e,staticClass:"wrapper-content-bottom-left-content-item"},[o("div",{staticClass:"wrapper-content-bottom-left-content-item-img"},[o("img",{attrs:{src:t.Hexagon,alt:"Hexagon"}})]),t._v(" "),o("div",{staticClass:"wrapper-content-bottom-left-content-item-context"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t\t\t\t\t")])])})),0),t._v(" "),o("div",[o("elButton",{attrs:{type:"text"},on:{click:function(e){return t.$router.push("/"+t.$store.state.locale+"/groupBusiness/"+n.path)}}},[t._v(t._s(t.$t("index.learnMore"))),o("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)]),t._v(" "),o("div",{staticClass:"wrapper-content-bottom-right",style:{paddingRight:3===r?"20px":""}},[o("img",{attrs:{src:e(510)("./index"+r+".png"),alt:n.title}})])])})),0)])])],1)}),[],!1,null,"7d8f60b0",null);n.default=component.exports},547:function(t,n,e){"use strict";e.r(n);var o=e(519).default,r=e(4),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);