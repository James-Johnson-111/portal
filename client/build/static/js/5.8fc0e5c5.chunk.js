(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{104:function(t,r,n){"use strict";var e=n(142),o=n.n(e),i=n(176);function a(){}r.a=a,function(t){"undefined"!==typeof window&&(window.spoken=a);var r=new(window.SpeechRecognition||window.webkitSpeechRecognition||Object);function n(t,r){for(var n=t.results,e=[],o=0;o<n.length;o++)e.push(n[o][0].transcript),n[o].isFinal&&r(n[o][0].transcript,t);a.listen.partialcb(e.join(""),t),e.length=0}r.interimResults=!0,r.lang=navigator.language||"en-US",a.recognition=r,a.voices=function(){var t=Object(i.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var r=speechSynthesis.getVoices();r.length&&t(r),speechSynthesis.onvoiceschanged=function(r){return t(speechSynthesis.getVoices())}})));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),a.say=function(){var t=Object(i.a)(o.a.mark((function t(n){var e,c,u,s,f=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.length>1&&void 0!==f[1]?f[1]:"Alex",c=new SpeechSynthesisUtterance(n),t.next=4,a.voices();case 4:return u=t.sent,s=r.lang,c.voice=e?(u.filter((function(t){return t.name==e}))||u)[0]:(u.filter((function(t){return t.lang==s}))||u)[0],t.abrupt("return",new Promise((function(t){c.onend=Object(i.a)(o.a.mark((function r(){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t(c));case 1:case"end":return r.stop()}}),r)}))),speechSynthesis.speak(c)})));case 8:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),a.listen=Object(i.a)(o.a.mark((function t(){var e,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:{},r.onstart=a.listen.startcb,r.onend=a.listen.endcb,r.onerror=a.listen.errorcb,r.continuous=e.continuous,t.abrupt("return",new Promise((function(t,e){r.onresult=function(){var r=Object(i.a)(o.a.mark((function r(e){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n(e,t));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}();try{r.start()}catch(a){e(a)}})));case 6:case"end":return t.stop()}}),t)}))),a.delay=function(t){return new Promise((function(r){return setTimeout(r,t)}))},a.listen.stop=function(){var t=Object(i.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.recognition.stop();case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),a.listen.on={partial:function(t){return a.listen.partialcb=t},start:function(t){return a.listen.startcb=t},end:function(t){return a.listen.endcb=t},error:function(t){return a.listen.errorcb=t}},a.listen.partialcb=function(t){return!0},a.listen.startcb=function(t){return!0},a.listen.endcb=function(t){return!0},a.listen.errorcb=function(t){return!0},a.listen.available=function(t){return!!r.start}}()},142:function(t,r,n){t.exports=n(158)},158:function(t,r,n){var e=function(t){"use strict";var r,n=Object.prototype,e=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(N){u=function(t,r,n){return t[r]=n}}function s(t,r,n,e){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new _(e||[]);return i._invoke=function(t,r,n){var e=h;return function(o,i){if(e===p)throw new Error("Generator is already running");if(e===v){if("throw"===o)throw i;return G()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===h)throw e=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=p;var u=f(t,r,n);if("normal"===u.type){if(e=n.done?v:l,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(e=v,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var h="suspendedStart",l="suspendedYield",p="executing",v="completed",y={};function d(){}function g(){}function w(){}var m={};m[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==n&&e.call(x,i)&&(m=x);var L=w.prototype=d.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}}function k(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,k(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}return g.prototype=L.constructor=w,w.constructor=g,g.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[a]=function(){return this},t.AsyncIterator=j,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var a=new j(s(r,n,e,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return c.type="throw",c.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:P(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=e}catch(o){Function("r","regeneratorRuntime = r")(e)}},176:function(t,r,n){"use strict";function e(t,r,n,e,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?r(u):Promise.resolve(u).then(e,o)}function o(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}n.d(r,"a",(function(){return o}))}}]);
//# sourceMappingURL=5.8fc0e5c5.chunk.js.map