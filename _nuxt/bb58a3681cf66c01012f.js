(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{480:function(t,n,e){},484:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAYAAACX8hZLAAAA90lEQVQ4jbWTvUrEQBSFjyCCECv3Adx2yTOkESzsLeysfATrfYA8wb5AmnR2Fmm2XZBtbLVZkLS2q99yw1WCmZghxAPDvTNzfmB+BFTANaB/GOZbWfONRyCbKChzvwbtEMMeKIBkpHni+n3b9KhJ6mIu6S2wPoQLSa+/Occ9ok9JC0m3ks4krSS9BHjGuZf0Ianw2gVhrIH31o71OTAHTr3mAc465NYX0odn4NJrNGJDdsASSP0eU5/vYsRDIVvgAZj1vKaZ72/HhGyAO+A88ukaz/im+zPkC3gCboCTkf/EdKY3H/P7CamBErjy857ix5uP+ZVAfQCeO3LwmFiKZgAAAABJRU5ErkJggg=="},485:function(t,n,e){var map={"./about.png":486,"./icon.png":484,"./joinus.png":487,"./pagesBannerCustody.png":488,"./pagesBannerEco.png":489,"./pagesBannerIndex.png":490,"./pagesBannerMine.png":491,"./pagesBannerWallet.png":492};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=485},486:function(t,n,e){t.exports=e.p+"img/dc90303.png"},487:function(t,n,e){t.exports=e.p+"img/1bc52f8.png"},488:function(t,n,e){t.exports=e.p+"img/e1de455.png"},489:function(t,n,e){t.exports=e.p+"img/d0abb24.png"},490:function(t,n,e){t.exports=e.p+"img/d17d630.png"},491:function(t,n,e){t.exports=e.p+"img/03112c2.png"},492:function(t,n,e){t.exports=e.p+"img/d135792.png"},493:function(t,n,e){"use strict";var o=e(480);e.n(o).a},494:function(t,n,e){},498:function(t,n,e){"use strict";var o=e(484),r=e.n(o),c={name:"pubulicBanner",props:{options:{type:Object,default:function(){return{title:"",slogan:"",bg:""}}}},data:function(){return{Icon:r.a}}},l=(e(493),e(4)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"public-banner"},[o("div",{staticClass:"wrapper"},[o("img",{staticClass:"banner-bg",style:{opacity:t.options.opacity||1},attrs:{src:e(485)("./"+t.options.bg+".png"),alt:"banner-bg"}}),t._v(" "),o("div",{staticClass:"banner-content"},[o("div",{staticClass:"icon"},[o("img",{attrs:{src:t.Icon,alt:""}})]),t._v(" "),o("h2",[t._v(t._s(t.options.title))]),t._v(" "),o("div",{staticClass:"slogan"},[t._v(t._s(t.options.slogan))])])])])}),[],!1,null,"35f26a78",null);n.a=component.exports},499:function(t,n,e){t.exports=e.p+"img/ca3c650.png"},500:function(t,n,e){t.exports=e.p+"img/3db97cd.png"},501:function(t,n,e){t.exports=e.p+"img/6252753.png"},502:function(t,n,e){t.exports=e.p+"img/044fe13.png"},503:function(t,n,e){"use strict";var o=e(494);e.n(o).a},520:function(t,n,e){"use strict";e.r(n);var o=e(498),r=e(499),c=e.n(r),l=e(500),m=e.n(l),d=e(501),v=e.n(d),f=e(502),C=e.n(f),A={components:{WebBanner:o.a},data:function(){return{Icon:c.a,CenterImg:m.a,RightTop:v.a,LeftBottom:C.a,content:[{mainText:"EXWORTH HOLDINGS PTE. LTD.",secondText:"60 Paya Lebar Road，#05-15 Paya Lebar Square，Singapore."},{mainText:"Exworth Global（USA）",secondText:"1312 17th Street Suite 692 Denver CO 80202 United States.<br />MSB Registration Number:31000168221856"},{mainText:"Exworth（Taiwan branch）",secondText:"No.2 Lane 258, Ruiguang Road, Neihu, Taipei，Taiwan."}]}},head:function(){return{title:this.$t("about.headerTitle"),meta:[{hid:"keywords",name:"keywords",content:this.metaKeywordsContent},{hid:"description",name:"description",content:this.metaDescriptionContent}]}}},x=(e(503),e(4)),component=Object(x.a)(A,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{class:"home_main "+("zh-cn"!==t.$store.state.locale?"home_main_en":"")},[e("WebBanner",{attrs:{options:{title:t.$t("about.title"),slogan:t.$t("joinus.slogan"),bg:"about"}}}),t._v(" "),e("div",{staticClass:"about-content-box"},[e("img",{staticClass:"right-top-bg",attrs:{src:t.RightTop,alt:""}}),t._v(" "),e("img",{staticClass:"left-bottom-bg",attrs:{src:t.LeftBottom,alt:""}}),t._v(" "),e("div",{staticClass:"about-content"},[e("div",{staticClass:"about-content-top"},[e("div",[e("img",{attrs:{src:t.Icon,alt:""}})]),t._v(" "),e("div",{staticClass:"about-content-top-img"},[e("div",{staticClass:"about-content-top-img-text"},[t._v(t._s(t.$t("about.groupStructure")))]),t._v(" "),e("img",{attrs:{src:t.CenterImg,alt:""}})])]),t._v(" "),e("div",{staticClass:"about-content-bottom"},[e("div",{staticClass:"about-content-bottom-title"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("about.companyInfo"))+"\n\t\t\t\t")]),t._v(" "),t._l(t.content,(function(n,o){return e("div",{key:"aboutContent"+o,staticClass:"about-content-item"},[e("div",{staticClass:"main-text"},[t._v("\n\t\t\t\t\t\t"+t._s(n.mainText)+"\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"second-text",domProps:{innerHTML:t._s(n.secondText)}})])}))],2)])])],1)}),[],!1,null,"4801c760",null);n.default=component.exports}}]);