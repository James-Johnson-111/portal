(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[45],{633:function(e,t,n){"use strict";n.r(t);var a=n(24),o=n(11),s=n(8),r=n(1),l=n.n(r),c=(n(634),n(10)),i=n(25),d=n(77),u=(n(76),n(635)),m=n.n(u),h=n(0);t.default=function(){var e=Object(i.c)((function(e){return e.EmpAuth.EmployeeData})),t=l.a.createRef(),n=Object(i.c)((function(e){return e.EmpAuth.EmployeeData})),u=Object(r.useState)([]),b=Object(s.a)(u,2),p=b[0],j=b[1],x=Object(r.useState)([]),f=Object(s.a)(x,2),O=f[0],g=f[1],y=Object(r.useState)({dateFrom:"",dateTo:"",company:null}),k=Object(s.a)(y,2),v=k[0],_=k[1];Object(r.useEffect)((function(){c.a.get("/getcompaniescodes").then((function(e){g(e.data)})).catch((function(e){d.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}),[]);var w=function(t){var n=new FormData,s=t.target,r=s.name,l=s.value,i=Object(o.a)(Object(o.a)({},v),{},Object(a.a)({},r,l));_(i),"dateFrom"===r&&""!==l&&""!==v.dateTo&&(v.dateTo>l?(n.append("DateFrom",l),n.append("DateTo",v.dateTo),n.append("CompanyCode",null===v.company?e.company_code:v.company),c.a.post("/allemployeesattcompanywiseaccordingtodate",n).then((function(e){j(e.data)})).catch((function(e){d.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))):d.b.dark("Date From should be less than Date To",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})),"dateTo"===r&&""!==l&&""!==v.dateFrom&&(v.dateFrom<l?(n.append("DateFrom",v.dateFrom),n.append("DateTo",l),n.append("CompanyCode",null===v.company?e.company_code:v.company),c.a.post("/allemployeesattcompanywiseaccordingtodate",n).then((function(e){j(e.data)})).catch((function(e){d.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))):d.b.dark("Date To should be greater than Date From",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})),"company"===r&&""!==v.dateFrom&&""!==v.dateTo&&(v.dateTo>v.dateFrom?(n.append("DateFrom",v.dateFrom),n.append("DateTo",v.dateTo),n.append("CompanyCode",l),c.a.post("/allemployeesattcompanywiseaccordingtodate",n).then((function(e){j(e.data)})).catch((function(e){d.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))):d.b.dark("Date From should be less than Date To",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{}),Object(h.jsxs)("div",{className:"View_Employee_Attendance",children:[Object(h.jsx)("div",{className:"DivFirst",children:Object(h.jsxs)("div",{className:"Filters",children:[Object(h.jsx)("h3",{className:"mb-4",children:"Filters"}),n.access&&(JSON.parse(n.access).includes(502)||JSON.parse(n.access).includes(1))?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{className:"mb-0",children:"Company"}),Object(h.jsxs)("select",{className:"form-control bg-light",variant:"standard",style:{width:"100%",fontSize:"12px",fontFamily:"Quicksand"},onChange:w,name:"company",children:[Object(h.jsx)("option",{value:"",children:"Select the Option"}),O.map((function(e,t){return Object(h.jsx)("option",{value:e.company_code,children:e.company_name},t)}))]})]}):null,Object(h.jsx)("label",{className:"mb-0",children:"Date From"}),Object(h.jsx)("input",{className:"form-control form-control-sm bg-light",name:"dateFrom",onChange:w,type:"date",variant:"standard",style:{marginBottom:"10px"},fullWidth:!0}),Object(h.jsx)("label",{className:"mb-0",children:"Date To"}),Object(h.jsx)("input",{className:"form-control form-control-sm bg-light",name:"dateTo",onChange:w,type:"date",variant:"standard",style:{marginBottom:"10px"},fullWidth:!0})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"Attendance",children:[Object(h.jsx)("h5",{className:"mb-4 font-weight-bolder",children:"Daily Attendance"}),Object(h.jsx)("div",{className:"attendance-content",children:0===p.length?Object(h.jsx)("h5",{className:"text-center font-weight-bolder",children:"No Record Found"}):Object(h.jsxs)("table",{className:"table",id:"table-to-xls",ref:t,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"d-none",children:"IDs"}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Date"}),Object(h.jsx)("th",{className:"d-none",children:"Day"}),Object(h.jsx)("th",{children:"Time In"}),Object(h.jsx)("th",{children:"Time Out"}),Object(h.jsx)("th",{children:"Break In"}),Object(h.jsx)("th",{children:"Break Out"}),Object(h.jsx)("th",{className:"d-none",children:"Status"})]})}),Object(h.jsx)("tbody",{children:p.map((function(e,t){var n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(e.emp_date.toString().substring(0,10)).getDay()];return console.log(e.status),Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{className:"d-none",children:[" ",e.emp_id," "]}),Object(h.jsxs)("td",{children:[" ",e.name," "]}),Object(h.jsxs)("td",{children:[" ",e.emp_date.toString().substring(0,10)," "]}),Object(h.jsxs)("td",{className:"d-none",children:[" ",n," "]}),"leave"===e.status&&null===e.time_in&&null===e.time_out&&null===e.break_in&&null===e.break_out?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("td",{children:" leave "}),Object(h.jsx)("td",{children:" leave "}),Object(h.jsx)("td",{children:" leave "}),Object(h.jsx)("td",{children:" leave "})]}):("leave"!==e.status||null===e.time_in&&null===e.time_out&&null===e.break_in&&e.break_out,Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("td",{children:[" ",null===e.time_in?Object(h.jsx)("span",{children:"No Time In"}):e.time_in," "]}),Object(h.jsxs)("td",{children:[" ",null===e.time_out?Object(h.jsx)("span",{children:"No Time Out"}):e.time_out," "]}),Object(h.jsxs)("td",{children:[" ",null===e.break_in?Object(h.jsx)("span",{children:"No Break In"}):e.break_in," "]}),Object(h.jsxs)("td",{children:[" ",null===e.break_out?Object(h.jsx)("span",{children:"No Break Out"}):e.break_out," "]})]})),Object(h.jsx)("td",{className:"d-none",children:"leave"===e.status&&null===e.time_in&&null===e.time_out&&null===e.break_in&&null===e.break_out||"leave"!==e.status||null===e.time_in&&null===e.time_out&&null===e.break_in&&null===e.break_out?Object(h.jsx)(h.Fragment,{children:e.status}):Object(h.jsx)(h.Fragment,{children:"Short Leave"})})]},t)}))})]})}),Object(h.jsx)("div",{className:"text-right",children:Object(h.jsx)(m.a,{id:"test-table-xls-button",className:"download-table-xls-button btn btn-success ml-2",table:"table-to-xls",filename:e.company_name+"_Employees_Attendance_From_"+v.dateFrom+"_To_"+v.dateTo,sheet:["Employees","Employees","Employees","Employees"],buttonText:"Export in excel"})})]})})]})]})}},634:function(e,t,n){},635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),s=l(o),r=l(n(12));function l(e){return e&&e.__esModule?e:{default:e}}var c={table:r.default.string.isRequired,filename:r.default.string.isRequired,sheet:r.default.string.isRequired,id:r.default.string,className:r.default.string,buttonText:r.default.string},i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleDownload=n.handleDownload.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"handleDownload",value:function(){if(!document)return null;if(1!==document.getElementById(this.props.table).nodeType||"TABLE"!==document.getElementById(this.props.table).nodeName)return null;var e=document.getElementById(this.props.table).outerHTML,n=String(this.props.sheet),a=String(this.props.filename)+".xls",o={worksheet:n||"Worksheet",table:e};if(window.navigator.msSaveOrOpenBlob){var s=new Blob(['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>'+e+"</body></html>"]);return document.getElementById("react-html-table-to-excel").click()((function(){window.navigator.msSaveOrOpenBlob(s,a)})),!0}var r=window.document.createElement("a");return r.href="data:application/vnd.ms-excel;base64,"+t.base64(t.format('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>{table}</body></html>',o)),r.download=a,document.body.appendChild(r),r.click(),document.body.removeChild(r),!0}},{key:"render",value:function(){return s.default.createElement("button",{id:this.props.id,className:this.props.className,type:"button",onClick:this.handleDownload},this.props.buttonText)}}],[{key:"base64",value:function(e){return window.btoa(unescape(encodeURIComponent(e)))}},{key:"format",value:function(e,t){return e.replace(/{(\w+)}/g,(function(e,n){return t[n]}))}}]),t}(o.Component);i.propTypes=c,i.defaultProps={id:"button-download-as-xls",className:"button-download",buttonText:"Download"},t.default=i}}]);
//# sourceMappingURL=45.55ec1e2d.chunk.js.map