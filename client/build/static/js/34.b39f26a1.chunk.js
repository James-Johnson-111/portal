(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[34],{655:function(e,t,n){"use strict";n.r(t);var s=n(8),a=n(1),i=n(27),c=n(83),o=n(79),r=n(25),l=n(10),d=n(23),u=n.n(d),p=n(3),f=n(77),h=(n(76),n(0)),m=Object(a.lazy)((function(){return n.e(43).then(n.bind(null,753))}));t.default=function(){var e=Object(p.g)(),t=Object(a.useState)([]),n=Object(s.a)(t,2),d=n[0],j=n[1],b=Object(a.useState)([]),v=Object(s.a)(b,2),x=v[0],O=v[1],g=Object(a.useState)(Object(h.jsx)(h.Fragment,{})),w=Object(s.a)(g,2),q=w[0],D=w[1],R=Object(a.useState)(!1),S=Object(s.a)(R,2),_=S[0],k=S[1],I=Object(a.useState)([]),y=Object(s.a)(I,2),N=y[0],C=y[1],P=Object(a.useState)({info:[],specifications:[],quotations:[]}),F=Object(s.a)(P,2),V=F[0],A=F[1],B=Object(r.c)((function(e){return e.EmpAuth.EmployeeData}));Object(a.useEffect)((function(){C([{icon:"las la-search",txt:"Search",link:!1,func:function(){return T()}}]);var t=window.location.href,n="",s="";t.includes("employee=")&&!t.includes("&&request")?(n=t.split("employee=").pop().split("&&").shift(),setTimeout((function(){E(parseInt(n)),e.replace("/view_invtry_requests/employee="+n)}),50)):t.includes("&&request")&&(s=t.split("&&").pop().split("=").pop(),n=t.split("employee=").pop().split("&&").shift(),setTimeout((function(){E(parseInt(n)),L(parseInt(s)),e.replace("/view_invtry_requests/employee="+n+"&&request="+s)}),50)),M()}),[]);var M=function(){var e={emp_id:B.emp_id,access:B.access};l.a.post("/getallpr",{myData:JSON.stringify(e)}).then((function(e){j(e.data)})).catch((function(e){console.log(e)}))},E=function(e){var t=new FormData;t.append("empID",e),l.a.post("/getthatempinvtryrequests",t).then((function(e){O(e.data),u()(".ViewPRRequests .Left h4").first().show(0),u()(".ViewPRRequests .Left .la-redo-alt").first().show(0),u()(".ViewPRRequests .Left").css("width","100%"),u()(".ViewPRRequests .InvoPrev").removeClass("d-none"),C([{icon:"las la-search",txt:"Search",link:!1,func:function(){return T()}},{icon:"las la-list",txt:"All Requests",link:!1,func:function(){return G()}}])})).catch((function(e){console.log(e)}))},L=function(e){var t=new FormData;t.append("prID",e),l.a.post("/getthatrequestfulldetails",t).then((function(n){l.a.post("/getrequestspecifications",t).then((function(s){l.a.post("/getrequestquotations",t).then((function(t){if("Sent"===n.data[0].status){var a=new FormData;a.append("eventID",3),a.append("receiverID",n.data[0].request_for),a.append("senderID",sessionStorage.getItem("EmpID")),a.append("Title",sessionStorage.getItem("name")),a.append("NotificationBody",sessionStorage.getItem("name")+" has viewed your purchase request with id#"+n.data[0].pr_id),l.a.post("/newnotification",a).then((function(){l.a.post("/sendmail",a).then((function(){}))}))}var i=new FormData;i.append("prID",e),i.append("empID",B.emp_id),l.a.post("/setprtoviewed",i).then((function(e){"success"===e.data&&(A({info:n.data,specifications:s.data,quotations:t.data}),u()(".ViewPRRequests .Left h4").first().hide(0),u()(".ViewPRRequests .Left .la-redo-alt").first().hide(0),u()("#viewMore").slideUp(400),u()("#viewMoreBtn").slideDown(400),"Viewed"!==n.data[0].status&&"Sent"!==n.data[0].status||u()(".ViewPRRequests .InvoPrev").addClass("d-none"),C([{icon:"las la-long-arrow-alt-left",txt:"Back",link:!1,func:function(){return H()}},{icon:"las la-search",txt:"Search",link:!1,func:function(){return T()}},{icon:"las la-list",txt:"All Requests",link:!1,func:function(){return G()}}]))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},T=function(){},G=function(){O([]),A({info:[],specifications:[],quotations:[]}),u()(".ViewPRRequests .Left").css("width","30%"),C([{icon:"las la-search",txt:"Search",link:!1,func:function(){return T()}}])},H=function(){A({info:[],specifications:[],quotations:[]}),C([{icon:"las la-search",txt:"Search",link:!1,func:function(){return T()}},{icon:"las la-list",txt:"All Requests",link:!1,func:function(){return G()}}]),u()(".ViewPRRequests .Left h4").first().show(0),u()(".ViewPRRequests .Left .la-redo-alt").first().show(0),u()(".ViewPRRequests .Left").css("width","100%"),u()(".ViewPRRequests .InvoPrev").removeClass("d-none")},J=function(e,t){u()("."+t).slideUp(500),u()("."+e).slideDown(500)},Y=function(e,t){e.preventDefault();var n=new FormData;n.append("prID",t),n.append("empID",B.emp_id),n.append("remarks",u()(".down textarea[name=remarks]").val()),l.a.post("/setprtoapprove",n).then((function(){G(),k(!1),f.b.dark("Request has been approved".toString(),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});var e=new FormData;e.append("eventID",3),e.append("receiverID",V.info[0].request_for),e.append("senderID",sessionStorage.getItem("EmpID")),e.append("Title",sessionStorage.getItem("name")),e.append("NotificationBody",sessionStorage.getItem("name")+" has approved your purchase request with id#"+t),l.a.post("/newnotification",e).then((function(){l.a.post("/sendmail",e).then((function(){}))}))})).catch((function(e){console.log(e)}))},U=function(e,t){t.preventDefault();var n=new FormData;n.append("prID",e),n.append("empID",B.emp_id),n.append("remarks",t.target.remarks.value),l.a.post("/setprtodiscard",n).then((function(){var n=new FormData;n.append("eventID",3),n.append("receiverID",V.info[0].request_for),n.append("senderID",sessionStorage.getItem("EmpID")),n.append("Title",sessionStorage.getItem("name")),n.append("NotificationBody",sessionStorage.getItem("name")+" has discard your purchase request with id#"+e+" under this reason '"+t.target.remarks.value+"'"),l.a.post("/newnotification",n).then((function(){l.a.post("/sendmail",n).then((function(){}))})),f.b.dark("Request has been Discard",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),G(),k(!1)})).catch((function(e){console.log(e)}))};return Object(h.jsxs)(a.Suspense,{fallback:Object(h.jsx)(i.a,{display:!0}),children:[Object(h.jsx)(c.a,{data:N}),Object(h.jsx)(o.a,{show:_,Hide:function(){k(!_)},content:q}),Object(h.jsx)(m,{Requests:d,EmployeeRequests:x,RequestDetails:V,EmpData:B,ViewThatEmpRequests:E,OpenRequestDetails:L,ShowAllRequests:G,onApprove:function(e){D(Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Do You Want To Approve This Request?"}),Object(h.jsx)("div",{className:"up py-2 text-right",children:Object(h.jsx)("button",{className:"px-3 btn btn-sm btn-primary",onClick:function(){return J("down","up")},children:"Yes"})}),Object(h.jsx)("div",{className:"down py-2 text-right",children:Object(h.jsxs)("form",{onSubmit:function(t){return Y(t,e)},children:[Object(h.jsx)("textarea",{required:!0,className:"form-control",name:"remarks",placeholder:"Add Remarks"}),Object(h.jsx)("button",{type:"submit",className:"px-3 btn btn-sm btn-primary",children:"Send"})]})})]})),k(!0)},onDiscard:function(e){D(Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Do you want to discard this request?"}),Object(h.jsxs)("form",{onSubmit:function(t){return U(e,t)},children:[Object(h.jsx)("textarea",{name:"remarks",className:"form-control mb-3",placeholder:"Add Remarks",required:!0,minLength:"10"}),Object(h.jsx)("button",{className:"btn btn-sm btn-danger d-block ml-auto px-3",children:"Yes"})]})]})),k(!0)}})]})}},79:function(e,t,n){"use strict";n(1),n(80);var s=n(0);t.a=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"Attandence_Request_Div",style:{display:e.show?"flex":"none"},children:[Object(s.jsx)("div",{className:"dark",onClick:e.Hide}),Object(s.jsx)("div",{style:{animationDelay:"0.1".toString()+"s"},className:e.show?"Attandence_Request_Div_Content Attandence_Request_Div_Content2":"Attandence_Request_Div_Content",children:e.content})]})})}},80:function(e,t,n){},83:function(e,t,n){"use strict";var s=n(1),a=(n(84),n(23)),i=n.n(a),c=n(17),o=n(0);t.a=function(e){Object(s.useEffect)((function(){i()(".Speeddail_Grid").slideToggle(0)}),[]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"Menu",children:e.data.length>0?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"Menu_Grid",children:e.data.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:e.txt?e.link?Object(o.jsx)(c.b,{to:e.href,children:Object(o.jsx)("button",{children:Object(o.jsx)("p",{className:"font-weight-bolder mb-0",children:e.txt})})}):Object(o.jsx)("button",{onClick:function(){return e.func()},children:Object(o.jsx)("p",{className:"font-weight-bolder mb-0",children:e.txt})}):null})}))}),Object(o.jsxs)("div",{className:"Menu_Speeddail",children:[Object(o.jsx)("div",{className:" ",onClick:function(){i()(".Menu_Speeddail .Speeddail_Grid").slideToggle(200),i()(".Menu_Speeddail .Button .las").hasClass("la-bars")?(i()(".Menu_Speeddail .Button .las").removeClass("la-bars"),i()(".Menu_Speeddail .Button .las").addClass("la-times")):(i()(".Menu_Speeddail .Button .las").removeClass("la-times"),i()(".Menu_Speeddail .Button .las").addClass("la-bars"))},children:Object(o.jsx)("i",{class:"las la-times"})}),Object(o.jsx)("div",{className:"Speeddail_Grid",children:e.data.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:e.txt?e.link?Object(o.jsx)(c.b,{to:e.href,children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"mb-1 Speeddail_Grid1 divs"+t,children:Object(o.jsx)("i",{className:e.icon})}),Object(o.jsx)("p",{children:e.txt})]},t)}):Object(o.jsxs)("div",{className:"clicks",onClick:function(){return e.func()},children:[Object(o.jsx)("div",{className:"mb-1 Speeddail_Grid1 divs"+t,children:Object(o.jsx)("i",{className:e.icon})}),Object(o.jsx)("p",{children:e.txt})]},t):null})}))})]})]}):null})})}},84:function(e,t,n){}}]);
//# sourceMappingURL=34.b39f26a1.chunk.js.map