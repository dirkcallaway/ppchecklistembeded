(function(e){function t(t){for(var r,i,s=t[0],l=t[1],u=t[2],f=0,p=[];f<s.length;f++)i=s[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("549d")},1438:function(e,t,n){"use strict";var r=n("cf4b"),o=n.n(r);o.a},"549d":function(e,t,n){"use strict";n.r(t);var r=n("b1ce"),o=n("6e7f"),a=n.n(o),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("OnboardList")],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-toolbar",{attrs:{color:"blue",dark:""}},[n("v-toolbar-title",[e._v("Onboarding Checklist")]),n("v-spacer"),n("v-progress-circular",{attrs:{value:e.remainingValue}}),n("v-spacer")],1),e.isOpen?n("v-container",[n("v-list",e._l(e.todos,function(t){return n("v-list-tile",{key:t.name,attrs:{avatar:""}},[n("v-list-tile-action",["true"===t.value?n("v-icon",{attrs:{size:30,color:e.green}},[e._v("done")]):e._e()],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"checklistName",class:{checkedOff:"true"===t.value},domProps:{textContent:e._s(t.name)}})],1),n("v-list-item-avatar",["true"!=t.value?n("v-btn",{attrs:{id:t.propertyName,small:"",ripple:"",color:e.blue},on:{click:function(t){return e.completeTask(t)}}},[e._v("Complete")]):e._e()],1)],1)}),1)],1):e._e()],1)],1)],1)},u=[],c=n("8400"),f={data:function(){return{todos:null,info:null,isOpen:!1,green:"#008000",blue:"blue",remainingValue:0,checkbox1:null,testMessage:"TEST"}},created:function(){window.addEventListener("message",this.receiveMessage)},mounted:function(){var e=this;this.$root.$on("loadChecklist",function(){c.get("/onboard").then(function(t){e.todos=t.data,e.isOpen=!0})})},methods:{receiveMessage:function(e){"https://dirkcallaway.github.io/embeddedHost/#"==e.origin&&(this.testMessage=e.data,this.loadChecklist(e.data))},loadChecklist:function(e){var t=this;c.get("/onboard/",{params:{userVID:e}}).then(function(e){t.todos=e.data,t.isOpen=!0})},minimizeChecklist:function(){this.isOpen?this.isOpen=!1:this.isOpen=!0},completeTask:function(e){var t=e.currentTarget.id;c.get("/update",{params:{updateProperty:t,value:!0}}).then(this.loadChecklist())}}},p=f,d=n("42da"),v=Object(d["a"])(p,l,u,!1,null,null,null),h=v.exports,b={name:"app",components:{OnboardList:h}},m=b,g=(n("f8ec"),n("1438"),Object(d["a"])(m,i,s,!1,null,null,null)),O=g.exports;n("db81");r["default"].use(a.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(O)}}).$mount("#app")},"8a44":function(e,t,n){},cf4b:function(e,t,n){},f8ec:function(e,t,n){"use strict";var r=n("8a44"),o=n.n(r);o.a}});
//# sourceMappingURL=app.89891579.js.map