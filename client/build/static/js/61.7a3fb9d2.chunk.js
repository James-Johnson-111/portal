(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[61],{627:function(e,t,n){"use strict";n.r(t);var a=n(8),s=n(1),c=(n(628),n(10)),r=n(77),i=(n(76),n(0));t.default=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(s.useEffect)((function(){var e=new FormData;e.append("id",window.location.href.split("/").pop()),c.a.post("/getnewspaper",e).then((function(e){o(e.data)})).catch((function(e){r.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"NewsPaper",children:n.map((function(e,t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:e.news_papers_name}),Object(i.jsx)("iframe",{src:e.news_paper_link},t)]})}))})})}},628:function(e,t,n){}}]);
//# sourceMappingURL=61.7a3fb9d2.chunk.js.map