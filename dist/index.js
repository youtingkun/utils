!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(self,(function(){return(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(){for(var t={},e=(window.location.search.split("?")[1]||window.location.hash.split("?")[1]||"").split("&"),r=0;r<e.length;r++){var n=e[r].split("=");2===n.length&&(t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]))}return t}function n(t){var e=[];if(!Array.isArray(t))return e;t.forEach((function(t){delete t.children}));var r={};return t.forEach((function(t){r[t.id]=t})),t.forEach((function(t){var n=r[t.parentId];n?(n.children||(n.children=[])).push(t):e.push(t)})),e}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){for(var e in t)t[e]&&"object"===o(t[e])&&(console.log(e,t[e]),i(t[e]))}function c(t){var e=[];return function t(r){r.forEach((function(r){r.children&&(t(r.children),delete r.children),e.push(r)}))}(t),e}function u(t){if(t&&"object"===o(t)){var e=Array.isArray(t)?[]:{};for(var r in t)t.hasOwnProperty(r)&&(e[r]="object"===o(t[r])?u(t[r]):t[r]);return e}}t.r(e),t.d(e,{countDown:()=>w,createEnum:()=>Y,deepCopy:()=>u,getQueryString:()=>r,getRecentDayHours:()=>T,getRecentMonthDays:()=>E,getRecentWeekDays:()=>D,getRecentYearMonths:()=>N,injectScript:()=>x,isArray:()=>b,isBoolean:()=>s,isCardID:()=>$,isDate:()=>d,isEmail:()=>P,isError:()=>m,isFunction:()=>f,isInteger:()=>I,isMobile:()=>A,isNegativeInteger:()=>U,isNull:()=>p,isNumber:()=>a,isObject:()=>g,isPhone:()=>M,isPositive:()=>_,isPositiveInteger:()=>F,isPromise:()=>S,isRegExp:()=>v,isSet:()=>j,isString:()=>l,isSymbol:()=>h,isURL:()=>R,isUndefined:()=>y,listToTree:()=>n,scrollToTop:()=>O,traverseObj:()=>i,treeToList:()=>c});var l=function(t){return"String"===Object.prototype.toString.call(t).slice(8,-1)},a=function(t){return"Number"===Object.prototype.toString.call(t).slice(8,-1)},s=function(t){return"Boolean"===Object.prototype.toString.call(t).slice(8,-1)},f=function(t){return"Function"===Object.prototype.toString.call(t).slice(8,-1)},p=function(t){return"Null"===Object.prototype.toString.call(t).slice(8,-1)},y=function(t){return"Undefined"===Object.prototype.toString.call(t).slice(8,-1)},g=function(t){return"Object"===Object.prototype.toString.call(t).slice(8,-1)},b=function(t){return"Array"===Object.prototype.toString.call(t).slice(8,-1)},d=function(t){return"Date"===Object.prototype.toString.call(t).slice(8,-1)},v=function(t){return"RegExp"===Object.prototype.toString.call(t).slice(8,-1)},m=function(t){return"Error"===Object.prototype.toString.call(t).slice(8,-1)},h=function(t){return"Symbol"===Object.prototype.toString.call(t).slice(8,-1)},S=function(t){return"Promise"===Object.prototype.toString.call(t).slice(8,-1)},j=function(t){return"Set"===Object.prototype.toString.call(t).slice(8,-1)};function O(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(O),window.scrollTo(0,t-t/8))}var w=function(t,e){var r=e-t;return{day:Number(r/864e5),hour:Number(r/36e5%24),minute:Number(r/6e4%60),second:Number(r/1e3%60)}};function D(){for(var t=[],e=new Date,r={0:"星期天",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"},n=0;n<7;n++){var o=r[new Date(e.getTime()-24*n*60*60*1e3).getDay()];t.unshift(o)}return console.log("最近七天日期：",t),t}function T(){for(var t,e=[],r=new Date,n=0;n<24;n++){var o=new Date(r.getTime()-60*n*60*1e3).getHours();1==(t=o).toString().length&&(t="0"+t.toString());var i=(o=t)+":00";e.unshift(i)}return console.log("最近24小时：",e),e}function E(){for(var t=[],e=new Date,r=function(t){return 1==t.toString().length&&(t="0"+t.toString()),t},n=1;n<=30;n++){var o=new Date(e.getTime()-24*n*60*60*1e3),i=o.getFullYear(),c=o.getMonth()+1,u=o.getDate(),l=i+"-"+(c=r(c))+"-"+(u=r(u));t.unshift(l)}return console.log("最近30天日期：",t),t}function N(){for(var t=[],e=new Date,r=0;r<12;r++){e.setMonth(e.getMonth()-1,1);var n=e.getFullYear()+"-"+(e.getMonth()+1);t.unshift(n)}return console.log("最近12个月：",t),t}var x=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=t;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r)};function P(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t)}function A(t){return/^1[0-9]{10}$/.test(t)}function M(t){return/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(t)}function R(t){return/^http[s]?:\/\/.*/.test(t)}function $(t){if(!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(t))return console.log("你输入的身份证长度或格式错误"),!1;if(!{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[parseInt(t.substr(0,2))])return console.log("你的身份证地区非法"),!1;var e=(t.substr(6,4)+"-"+Number(t.substr(10,2))+"-"+Number(t.substr(12,2))).replace(/-/g,"/"),r=new Date(e);if(e!=r.getFullYear()+"/"+(r.getMonth()+1)+"/"+r.getDate())return console.log("身份证上的出生日期非法"),!1;for(var n=0,o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=0;i<t.length-1;i++)n+=t[i]*o[i];var c="10X98765432"[n%11];return t[t.length-1]==c||(console.log("你输入的身份证号非法"),!1)}function I(t){return/^-?[1-9]\d*$/.test(t)}function F(t){return/^[1-9]\d*$/.test(t)}function U(t){return/^-[1-9]\d*$/.test(t)}function _(t){return/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(t)}var B=function(){return(B=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function C(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)c.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return c}function Y(t){var e,r,n={},o={};try{for(var i=function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(Object.keys(t)),c=i.next();!c.done;c=i.next()){var u=c.value,l=C(t[u],2),a=l[0],s=l[1];n[u]=a,o[a]=s}}catch(t){e={error:t}}finally{try{c&&!c.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return B(B({},n),{getDesc:function(e){return t[e]&&t[e][1]||""},getDescFromValue:function(t){return o[t]||""}})}return Object.create,Object.create,e})()}));