(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[32],{617:function(e,t,n){},618:function(e,t,n){},763:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(1),c=n.n(r),i=(n(617),n(149)),s=n(17),o=n(10),l=n(77),d=(n(76),n(0)),b=function(e){var t=Object(r.useState)([]),n=Object(a.a)(t,2),c=n[0],b=n[1];Object(r.useEffect)((function(){var e=new FormData;e.append("empID",sessionStorage.getItem("EmpID")),o.a.post("/gettodaysattendance",e).then((function(e){b([parseInt(e.data[0].time_in.split(":").shift()),parseInt(e.data[0].break_in.split(":").shift()),parseInt(e.data[0].break_out.split(":").shift()),parseInt(e.data[0].time_out.split(":").shift())])})).catch((function(e){l.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}),[]);var j={labels:["Time In","Take Break","Break Out","Time Out"],datasets:[{label:"Start From",data:c,backgroundColor:["#007BFF","#17A2B8","#343A40","#1A2226"]}]};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"Right text-center p-3 bg-white",children:[Object(d.jsx)("h4",{children:"Today's Attendance"}),Object(d.jsx)(i.a,{width:"100%",height:"100px",data:j}),Object(d.jsxs)(s.b,{to:e.btnHref,className:"btn btn-block btn-dark btn-sm mt-3",children:[" ",e.btnTxt," "]})]})})};n(618),t.default=function(){var e=c.a.createRef(),t=Object(r.useState)([]),n=Object(a.a)(t,2),i=n[0],s=n[1],j=Object(r.useState)([]),u=Object(a.a)(j,2),h=(u[0],u[1]);return Object(r.useEffect)((function(){var e=new FormData;e.append("empID",sessionStorage.getItem("EmpID")),o.a.post("/getempattdetails",e).then((function(t){s(t.data),o.a.post("/getempinoutsdetails",e).then((function(e){h(e.data)})).catch((function(e){l.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))})).catch((function(e){l.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"DailyAttendance",children:[Object(d.jsxs)("div",{className:"attendance",children:[Object(d.jsx)("h3",{className:"mb-4",children:"Daily Attendance"}),Object(d.jsx)("div",{className:"attendance-content",children:0===i.length?Object(d.jsx)("h3",{className:"w-100 text-center",children:"No Record Found"}):Object(d.jsxs)("table",{className:"table",id:"table-to-xls",ref:e,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Date"}),Object(d.jsx)("th",{children:"Time In"}),Object(d.jsx)("th",{children:"Time Out"}),Object(d.jsx)("th",{children:"Break In"}),Object(d.jsx)("th",{children:"Break Out"})]})}),Object(d.jsx)("tbody",{children:i.map((function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[" ",e.emp_date.toString().substring(0,10)," "]}),Object(d.jsxs)("td",{children:[" ",null===e.time_in?Object(d.jsx)("span",{children:"No Time In"}):e.time_in," "]}),Object(d.jsxs)("td",{children:[" ",null===e.time_out?Object(d.jsx)("span",{children:"No Time Out"}):e.time_out," "]}),Object(d.jsxs)("td",{children:[" ",null===e.break_in?Object(d.jsx)("span",{children:"No Break In"}):e.break_in," "]}),Object(d.jsxs)("td",{children:[" ",null===e.break_out?Object(d.jsx)("span",{children:"No Break Out"}):e.break_out," "]})]},t)})}))})]})})]}),Object(d.jsx)("div",{children:Object(d.jsx)(b,{btnTxt:"View Your Profile",btnHref:"/empprofile"})})]})})}},81:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(18);var r=n(26);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=32.b22ed916.chunk.js.map