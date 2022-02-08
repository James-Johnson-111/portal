/*! For license information please see 39.6ec203ef.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[39],{581:function(e,t,n){},582:function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,c){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,c],f=0;(l=new Error(t.replace(/%s/g,(function(){return u[f++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,c=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))o.call(n,u)&&(c[u]=n[u]);if(r){a=r(n);for(var f=0;f<a.length;f++)i.call(n,a[f])&&(c[a[f]]=n[a[f]])}}return c}},function(e,t,n){"use strict";var r=n(3),o=n(2),i=n(1),a=n(0),c="function"==typeof Symbol&&Symbol.for,l=c?Symbol.for("react.element"):60103,u=c?Symbol.for("react.portal"):60106,f=c?Symbol.for("react.fragment"):60107,s=c?Symbol.for("react.strict_mode"):60108,p=c?Symbol.for("react.profiler"):60114,d=c?Symbol.for("react.provider"):60109,m=c?Symbol.for("react.context"):60110,y=c?Symbol.for("react.async_mode"):60111,v=c?Symbol.for("react.forward_ref"):60112;c&&Symbol.for("react.timeout");var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function j(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||b}function O(){}function S(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||b}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var _=S.prototype=new O;_.constructor=S,r(_,j.prototype),_.isPureReactComponent=!0;var w={current:null},x=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r=void 0,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!I.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var u=Array(c),f=0;f<c;f++)u[f]=arguments[f+2];o.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:l,type:e,key:i,ref:a,props:o,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var D=/\/+/g,E=[];function C(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case u:i=!0}}if(i)return n(r,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var c=t+T(o=e[a],a);i+=$(o,c,n,r)}else if("function"==typeof(c=null===e||void 0===e?null:"function"==typeof(c=h&&e[h]||e["@@iterator"])?c:null))for(e=c.call(e),a=0;!(o=e.next()).done;)i+=$(o=o.value,c=t+T(o,a++),n,r);else"object"===o&&g("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return i}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,a.thatReturnsArgument):null!=e&&(P(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n,e={$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function L(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(D,"$&/")+"/"),t=C(t,i,r,o),null==e||$(e,"",N,t),R(t)}var M={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=C(null,null,t,n),null==e||$(e,"",A,t),R(t)},count:function(e){return null==e?0:$(e,"",a.thatReturnsNull,null)},toArray:function(e){var t=[];return L(e,t,null,a.thatReturnsArgument),t},only:function(e){return P(e)||g("143"),e}},createRef:function(){return{current:null}},Component:j,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:m,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:v,render:e}},Fragment:f,StrictMode:s,unstable_AsyncMode:y,unstable_Profiler:p,createElement:k,cloneElement:function(e,t,n){(null===e||void 0===e)&&g("267",e);var o=void 0,i=r({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,u=w.current),void 0!==t.key&&(a=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)x.call(t,o)&&!I.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];i.children=f}return{$$typeof:l,type:e.type,key:a,ref:c,props:i,_owner:u}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.4.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:w,assign:r}},F={default:M},U=F&&M||F;e.exports=U.default?U.default:U},function(e,t,n){"use strict";e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),a=(r=i)&&r.__esModule?r:{default:r},c={color:"white",textAlign:"center"},l={padding:"4px"},u=void 0,f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getCurrentTime=function(){var e=n.props.locale?n.props.locale:[],t=0!=n.props.hour12,r=void 0,o=void 0,i=void 0;if(n.props.format)switch(n.props.format.toLowerCase()){case"hh":r="2-digit";break;case"hh-mm":r="2-digit",o="2-digit";break;case"hh-mm-ss":r="2-digit",o="2-digit",i="2-digit";break;default:r="2-digit",o="2-digit",i="2-digit"}return(new Date).toLocaleTimeString(e,{hour12:t,hour:r,minute:o,second:i})},n.state={time:n.getCurrentTime()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;u=setInterval((function(){e.setState({time:e.getCurrentTime()})}),1e3)}},{key:"componentWillUnmount",value:function(){u&&clearInterval(u)}},{key:"render",value:function(){return a.default.createElement("div",{style:c},a.default.createElement("span",{style:l},this.state.time))}}]),t}();t.default=f}])},774:function(e,t,n){"use strict";n.r(t);var r=n(8),o=n(1),i=(n(581),n(3)),a=n(582),c=n.n(a),l=n(10),u=n(27),f=n(77),s=(n(76),n(89),n(0));t.default=function(){var e=Object(i.g)(),t=Object(o.useState)(!0),n=Object(r.a)(t,2),a=n[0],p=n[1];Object(o.useEffect)((function(){if(p(!1),localStorage.getItem("empID")&&e.replace("/operations?id="+localStorage.getItem("empID")+"&time="+localStorage.getItem("empinouttime")),void 0===localStorage.getItem("DeviceID")||null===localStorage.getItem("DeviceID"))e.replace("/attdevicesetup");else{var t=new FormData;t.append("DevLocation",localStorage.getItem("DeviceID")),l.a.post("/getattdevicebycode",t).then((function(e){setInterval((function(){window.location.reload()}),6e4),p(!1),localStorage.setItem("DeviceID",e.data[0].device_code)})).catch((function(e){f.b.dark(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}}),[e]),Object(o.useEffect)((function(){p(!1),localStorage.getItem("empID")&&e.replace("/operations?id="+localStorage.getItem("empID")+"&time="+localStorage.getItem("empinouttime")),void 0===localStorage.getItem("DeviceID")||null===localStorage.getItem("DeviceID")?e.replace("/attdevicesetup"):(localStorage.getItem("LocationEmployees")||m(localStorage.getItem("DeviceLocation")),setInterval((function(){m(localStorage.getItem("DeviceLocation"))}),864e5),d())}),[]);var d=function t(){var n=new FormData;n.append("location",localStorage.getItem("DeviceLocation")),l.a.post("/getempinout",n).then((function(n){if(void 0!==n.data[0]){p(!0);var r=y(n.data[0].emp_id);localStorage.setItem("empID",n.data[0].emp_id),localStorage.setItem("empImg",r.emp_image),e.replace("/operations?id="+n.data[0].emp_id+"&time="+n.data[0].time)}else t()})).catch((function(e){console.log(e)}))},m=function(e){l.a.post("/getemployeesforattendance",{location:e}).then((function(e){localStorage.setItem("LocationEmployees",JSON.stringify(e.data))})).catch((function(e){console.log(e)}))},y=function(e){for(var t=JSON.parse(localStorage.getItem("LocationEmployees")),n=0;n<t.length;n++)if(t[n].emp_id===parseInt(e))return t[n]};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u.a,{show:a}),Object(s.jsx)("div",{className:"Home",onDoubleClick:function(){e.replace("/attdashboard")},children:Object(s.jsxs)("div",{className:"Home_content text-center",children:[Object(s.jsx)("h1",{className:"mb-0",children:"Seaboard"}),Object(s.jsxs)("div",{className:"d-flex justify-content-between align-items-center px-4 font-weight-bold",style:{fontFamily:"JosefinSans",fontSize:"22px"},children:[Object(s.jsx)("div",{children:"G"}),Object(s.jsx)("div",{children:"R"}),Object(s.jsx)("div",{children:"O"}),Object(s.jsx)("div",{children:"U"}),Object(s.jsx)("div",{children:"P"})]}),Object(s.jsx)(c.a,{format:"hh-mm"})]})})]})}},89:function(e,t,n){"use strict";var r=n(168).a.connect("https://192.168.10.116:8888",{autoConnect:!0});t.a=r}}]);
//# sourceMappingURL=39.6ec203ef.chunk.js.map