(this["webpackJsonpiiif-test"]=this["webpackJsonpiiif-test"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=15},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),r=n.n(i),s=(n(12),n(3)),o=n.n(s),u=n(6),f=n(4),d=(n(14),n(7)),p=n(0),j="https://xt5bkm0oee.execute-api.ap-northeast-1.amazonaws.com/dev/main",h=new URLSearchParams(window.location.search).get("id");var l=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(h),r=Object(f.a)(i,2),s=r[0],l=r[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.images);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var b=Object(c.useCallback)((function(e){return l(e.target.value)}),[]);return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("main",{className:"App-header",children:[Object(p.jsx)("select",{style:{marginBottom:"1em"},onChange:b,children:n.map((function(e){return Object(p.jsx)("option",{selected:h===e.id,children:e.id},e.id)}))}),Object(p.jsx)(d.Viewer,{iiifUrl:"https://so69jnd8td.execute-api.ap-northeast-1.amazonaws.com/latest/iiif/2/".concat(s,"/info.json")})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(l,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.a8ef2a02.chunk.js.map