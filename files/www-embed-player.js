(function(){var g,aa=aa||{},m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ba(a){a.getInstance=function(){return a.W?a.W:a.W=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){return"array"==ca(a)}
function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ga(a){return"function"==ca(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ka]||(a[ka]=++la)}
var ka="closure_uid_"+(1E9*Math.random()>>>0),la=0;function ma(a,b,c){return a.call.apply(a.bind,arguments)}
function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return v.apply(null,arguments)}
function oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;function pa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,pa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(pa,Error);pa.prototype.name="CustomError";var qa;var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ta(a){return decodeURIComponent(a.replace(/\+/g," "))}
var ua=/&/g,va=/</g,wa=/>/g,xa=/"/g,ya=/'/g,za=/\x00/g,Aa=/[\x00&<>"']/;function Ba(a){return-1!=a.indexOf("&")?"document"in m?Ca(a):Da(a):a}
function Ca(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Ea,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Da(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Ea=/&([^;\s<&]+);?/g,Fa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ga={"'":"\\'"};
function Ha(a,b){for(var c=0,d=ra(String(a)).split("."),e=ra(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",l=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),F=RegExp("(\\d*)(\\D*)","g");do{var w=n.exec(k)||["","",""],A=F.exec(l)||["","",""];if(0==w[0].length&&0==A[0].length)break;c=Ia(0==w[1].length?0:parseInt(w[1],10),0==A[1].length?0:parseInt(A[1],10))||Ia(0==w[2].length,0==A[2].length)||Ia(w[2],A[2])}while(0==c)}return c}
function Ia(a,b){return a<b?-1:a>b?1:0}
function Ja(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ka=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},La=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=u(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},B=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Ma=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Na=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Oa(a,b,c){b=Pa(a,b,c);return 0>b?null:u(a)?a.charAt(b):a[b]}
function Pa(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function Qa(a,b){return 0<=Ka(a,b)}
function Ra(){var a=Sa;if(!da(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}
function Ta(a,b){Qa(a,b)||a.push(b)}
function Ua(a,b){var c=Ka(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Va(a,b){var c=Pa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Wa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ya(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Za(a,b,c,d){return Array.prototype.splice.apply(a,$a(arguments,1))}
function $a(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function ab(a,b,c){if(!ea(a)||!ea(b)||a.length!=b.length)return!1;var d=a.length;c=c||bb;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0}
function cb(a,b){return a>b?1:a<b?-1:0}
function bb(a,b){return a===b}
;function db(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function eb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function fb(a){var b=0,c;for(c in a)b++;return b}
function gb(a,b){return ib(a,b)}
function jb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function kb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function lb(a){return null!==a&&"withCredentials"in a}
function ib(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function sb(a){var b=ca(a);if("object"==b||"array"==b){if(ga(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=sb(a[c]);return b}return a}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;a:{var wb=m.navigator;if(wb){var xb=wb.userAgent;if(xb){vb=xb;break a}}vb=""}function C(a){return-1!=vb.indexOf(a)}
;function yb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
;function zb(){this.f=""}
zb.prototype.Xb=!0;zb.prototype.Sb=function(){return this.f};
zb.prototype.toString=function(){return"Const{"+this.f+"}"};
function Ab(a){var b=new zb;b.f=a;return b}
;function Bb(){this.f="";this.h=Cb}
Bb.prototype.Xb=!0;Bb.prototype.Sb=function(){return this.f};
function Db(a){if(a instanceof Bb&&a.constructor===Bb&&a.h===Cb)return a.f;ca(a);return"type_error:SafeUrl"}
var Eb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Fb(a){if(a instanceof Bb)return a;a=a.Xb?a.Sb():String(a);Eb.test(a)||(a="about:invalid#zClosurez");return Gb(a)}
var Cb={};function Gb(a){var b=new Bb;b.f=a;return b}
Gb("about:blank");function Hb(){this.f="";this.h=Ib;this.j=null}
Hb.prototype.Xb=!0;Hb.prototype.Sb=function(){return this.f};
function Jb(a){if(a instanceof Hb&&a.constructor===Hb&&a.h===Ib)return a.f;ca(a);return"type_error:SafeHtml"}
var Ib={};function Kb(a,b){var c=new Hb;c.f=a;c.j=b;return c}
Kb("<!DOCTYPE html>",0);Kb("",0);Kb("<br>",0);function Lb(a,b){var c;c=b instanceof Bb?b:Fb(b);a.href=Db(c)}
;function Mb(a,b,c){a&&(a.dataset?a.dataset[Nb(b)]=c:a.setAttribute("data-"+b,c))}
function D(a,b){return a?a.dataset?a.dataset[Nb(b)]:a.getAttribute("data-"+b):null}
function Ob(a,b){a&&(a.dataset?delete a.dataset[Nb(b)]:a.removeAttribute("data-"+b))}
var Pb={};function Nb(a){return Pb[a]||(Pb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Qb(a){m.setTimeout(function(){throw a;},0)}
var Rb;
function Sb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.nc;c.nc=null;a()}};
return function(a){d.next={nc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Tb(a,b,c){this.l=c;this.j=a;this.o=b;this.h=0;this.f=null}
Tb.prototype.get=function(){var a;0<this.h?(this.h--,a=this.f,this.f=a.next,a.next=null):a=this.j();return a};
function Ub(a,b){a.o(b);a.h<a.l&&(a.h++,b.next=a.f,a.f=b)}
;function Vb(){this.h=this.f=null}
var Xb=new Tb(function(){return new Wb},function(a){a.reset()},100);
Vb.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Wb(){this.next=this.scope=this.f=null}
Wb.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Wb.prototype.reset=function(){this.next=this.scope=this.f=null};function Yb(a,b){Zb||$b();ac||(Zb(),ac=!0);var c=bc,d=Xb.get();d.set(a,b);c.h?c.h.next=d:c.f=d;c.h=d}
var Zb;function $b(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);Zb=function(){a.then(cc)}}else Zb=function(){var a=cc;
!ga(m.setImmediate)||m.Window&&m.Window.prototype&&!C("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Rb||(Rb=Sb()),Rb(a)):m.setImmediate(a)}}
var ac=!1,bc=new Vb;function cc(){for(var a=null;a=bc.remove();){try{a.f.call(a.scope)}catch(b){Qb(b)}Ub(Xb,a)}ac=!1}
;function E(){this.ra=this.ra;this.S=this.S}
E.prototype.ra=!1;E.prototype.isDisposed=function(){return this.ra};
E.prototype.dispose=function(){this.ra||(this.ra=!0,this.F())};
function dc(a,b){a.ra?b.call(void 0):(a.S||(a.S=[]),a.S.push(p(void 0)?v(b,void 0):b))}
E.prototype.F=function(){if(this.S)for(;this.S.length;)this.S.shift()()};
function ec(a){a&&"function"==typeof a.dispose&&a.dispose()}
function fc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?fc.apply(null,d):ec(d)}}
;function H(a){E.call(this);this.l=1;this.h=[];this.j=0;this.f=[];this.fa={};this.o=!!a}
y(H,E);g=H.prototype;g.subscribe=function(a,b,c){var d=this.fa[a];d||(d=this.fa[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.fa[a]){var d=this.f;if(a=Oa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.na(a)}return!1};
g.na=function(a){var b=this.f[a];if(b){var c=this.fa[b];0!=this.j?(this.h.push(a),this.f[a+1]=t):(c&&Ua(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
g.C=function(a,b){var c=this.fa[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var h=c[e];gc(this.f[h+1],this.f[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.j--,0<this.h.length&&0==this.j)for(;c=this.h.pop();)this.na(c)}}return 0!=e}return!1};
function gc(a,b,c){Yb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.fa[a];b&&(z(b,this.na,this),delete this.fa[a])}else this.f.length=0,this.fa={}};
g.U=function(a){if(a){var b=this.fa[a];return b?b.length:0}a=0;for(b in this.fa)a+=this.U(b);return a};
g.F=function(){H.H.F.call(this);this.clear();this.h.length=0};var hc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",hc,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var ic=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",ic,void 0);function jc(a){kc(hc,arguments)}
function I(a,b){return a in hc?hc[a]:b}
function J(a,b){ga(a)&&(a=lc(a));return window.setTimeout(a,b)}
function mc(a,b){ga(a)&&(a=lc(a));window.setInterval(a,b)}
function K(a){window.clearTimeout(a)}
function lc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw nc(b),b;}}:a}
function nc(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=I("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),jc("ERRORS",c))}
function oc(){var a={},b="FLASH_UPGRADE"in ic?ic.FLASH_UPGRADE:'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';if(b)for(var c in a)b=b.replace(new RegExp("\\$"+c,"gi"),function(){return a[c]});
return b}
function kc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var pc=window.performance&&window.performance.timing&&window.performance.now&&window.__yt_experimental_now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},qc="Microsoft Internet Explorer"==navigator.appName;var rc=r("yt.pubsub.instance_")||new H;H.prototype.subscribe=H.prototype.subscribe;H.prototype.unsubscribeByKey=H.prototype.na;H.prototype.publish=H.prototype.C;H.prototype.clear=H.prototype.clear;q("yt.pubsub.instance_",rc,void 0);var sc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",sc,void 0);var tc=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",tc,void 0);var uc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",uc,void 0);
var vc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",vc,void 0);function wc(a,b,c){var d=xc();if(d){var e=d.subscribe(a,function(){if(!vc||vc!=e){var d=arguments,h;h=function(){sc[e]&&b.apply(c||window,d)};
try{uc[a]?h():J(h,0)}catch(k){nc(k)}}},c);
sc[e]=!0;tc[a]||(tc[a]=[]);tc[a].push(e);return e}return 0}
function yc(a){var b=xc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete sc[a]}))}
function L(a,b){var c=xc();return c?c.publish.apply(c,arguments):!1}
function zc(a,b){uc[a]=!0;var c=xc();c&&c.publish.apply(c,arguments);uc[a]=!1}
function Ac(a){tc[a]&&(a=tc[a],z(a,function(a){sc[a]&&delete sc[a]}),a.length=0)}
function Bc(a){var b=xc();if(b)if(b.clear(a),a)Ac(a);else for(var c in tc)Ac(c)}
function xc(){return r("yt.pubsub.instance_")}
;function Cc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Dc,""),c=c.replace(Ec,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Fc(a,b)}
function Fc(a,b){var c=Gc(a),d=document.getElementById(c),e=d&&D(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=wc(c,b),h=""+ia(b);Hc[h]=e}f||(d=Ic(a,c,function(){D(d,"loaded")||(Mb(d,"loaded","true"),L(c),J(oa(Bc,c),0))}))}}
function Ic(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Jc(a,b){if(a&&b){var c=""+ia(b);(c=Hc[c])&&yc(c)}}
function Gc(a){var b=document.createElement("a");Lb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ja(a)}
var Dc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ec=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Hc={};var Kc=null;function Lc(){var a=I("BG_I",null),b=I("BG_IU",null),c=I("BG_P",void 0);b?Cc(b,function(){Kc=new botguard.bg(c)}):a&&(eval(a),Kc=new botguard.bg(c))}
function Mc(){return null!=Kc}
function Nc(){return Kc?Kc.invoke():null}
;function Oc(a,b){return Kb(b,null)}
;var Pc="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Qc(){}
Qc.prototype.next=function(){throw Pc;};
Qc.prototype.va=function(){return this};
function Rc(a){if(a instanceof Qc)return a;if("function"==typeof a.va)return a.va(!1);if(ea(a)){var b=0,c=new Qc;c.next=function(){for(;;){if(b>=a.length)throw Pc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Sc(a,b,c){if(ea(a))try{z(a,b,c)}catch(d){if(d!==Pc)throw d;}else{a=Rc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Pc)throw d;}}}
function Tc(a){if(ea(a))return Xa(a);a=Rc(a);var b=[];Sc(a,function(a){b.push(a)});
return b}
;function Uc(a,b){this.h={};this.f=[];this.Ea=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Uc?(c=a.qa(),d=a.V()):(c=kb(a),d=jb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Uc.prototype;g.U=function(){return this.j};
g.V=function(){Vc(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.h[this.f[b]]);return a};
g.qa=function(){Vc(this);return this.f.concat()};
g.$a=function(a){for(var b=0;b<this.f.length;b++){var c=this.f[b];if(Wc(this.h,c)&&this.h[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.j!=a.U())return!1;var c=b||Xc;Vc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Xc(a,b){return a===b}
g.isEmpty=function(){return 0==this.j};
g.clear=function(){this.h={};this.Ea=this.j=this.f.length=0};
g.remove=function(a){return Wc(this.h,a)?(delete this.h[a],this.j--,this.Ea++,this.f.length>2*this.j&&Vc(this),!0):!1};
function Vc(a){if(a.j!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Wc(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.j!=a.f.length){for(var e={},c=b=0;b<a.f.length;)d=a.f[b],Wc(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
g.get=function(a,b){return Wc(this.h,a)?this.h[a]:b};
g.set=function(a,b){Wc(this.h,a)||(this.j++,this.f.push(a),this.Ea++);this.h[a]=b};
g.forEach=function(a,b){for(var c=this.qa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Uc(this)};
g.va=function(a){Vc(this);var b=0,c=this.Ea,d=this,e=new Qc;e.next=function(){if(c!=d.Ea)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Pc;var e=d.f[b++];return a?e:d.h[e]};
return e};
function Wc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Yc(a){return a.U&&"function"==typeof a.U?a.U():ea(a)||u(a)?a.length:fb(a)}
function Zc(a){if(a.V&&"function"==typeof a.V)return a.V();if(u(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return jb(a)}
function $c(a){if(a.qa&&"function"==typeof a.qa)return a.qa();if(!a.V||"function"!=typeof a.V){if(ea(a)||u(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return kb(a)}}
function ad(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ea(a)||u(a))z(a,b,c);else for(var d=$c(a),e=Zc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function bd(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(ea(a)||u(a))return Na(a,b,void 0);for(var c=$c(a),d=Zc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function cd(a){this.f=new Uc;a&&dd(this,a)}
function ed(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ia(a):b.substr(0,1)+a}
g=cd.prototype;g.U=function(){return this.f.U()};
function dd(a,b){for(var c=Zc(b),d=c.length,e=0;e<d;e++){var f=c[e];a.f.set(ed(f),f)}}
g.removeAll=function(a){a=Zc(a);for(var b=a.length,c=0;c<b;c++)this.remove(a[c])};
g.remove=function(a){return this.f.remove(ed(a))};
g.clear=function(){this.f.clear()};
g.isEmpty=function(){return this.f.isEmpty()};
g.contains=function(a){a=ed(a);return Wc(this.f.h,a)};
g.V=function(){return this.f.V()};
g.clone=function(){return new cd(this)};
g.equals=function(a){return this.U()==Yc(a)&&fd(this,a)};
function fd(a,b){var c=Yc(b);if(a.U()>c)return!1;!(b instanceof cd)&&5<c&&(b=new cd(b));return bd(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.$a&&"function"==typeof c.$a?c.$a(a):ea(c)||u(c)?Qa(c,a):ib(c,a)})}
g.va=function(){return this.f.va(!1)};function gd(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;var hd=C("Opera"),M=C("Trident")||C("MSIE"),id=C("Edge"),jd=C("Gecko")&&!(-1!=vb.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),kd=-1!=vb.toLowerCase().indexOf("webkit")&&!C("Edge"),ld=C("Macintosh"),md=C("Windows");function nd(){var a=m.document;return a?a.documentMode:void 0}
var od;a:{var pd="",qd=function(){var a=vb;if(jd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(id)return/Edge\/([\d\.]+)/.exec(a);if(M)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(kd)return/WebKit\/(\S+)/.exec(a);if(hd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
qd&&(pd=qd?qd[1]:"");if(M){var rd=nd();if(null!=rd&&rd>parseFloat(pd)){od=String(rd);break a}}od=pd}var sd=od,td={};function ud(a){return td[a]||(td[a]=0<=Ha(sd,a))}
function vd(a){return Number(wd)>=a}
var xd=m.document,wd=xd&&M?nd()||("CSS1Compat"==xd.compatMode?parseInt(sd,10):5):void 0;function yd(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function zd(a){return eval("("+a+")")}
function N(a){return Ad(new Bd(void 0),a)}
function Bd(a){this.f=a}
function Ad(a,b){var c=[];Cd(a,b,c);return c.join("")}
function Cd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Cd(a,a.f?a.f.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Dd(d,c),c.push(":"),Cd(a,a.f?a.f.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Dd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ed={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Fd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Dd(a,b){b.push('"',a.replace(Fd,function(a){var b=Ed[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ed[a]=b);return b}),'"')}
;var Gd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Hd(a){return(a=a.match(Gd)[3]||null)?decodeURI(a):a}
function Id(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?ta(h):"")}}
function Jd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Kd(a,b,c){if(da(b))for(var d=0;d<b.length;d++)Kd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ld(a,b,c){for(c=c||0;c<b.length;c+=2)Kd(b[c],b[c+1],a);return a}
function Md(a,b){for(var c in b)Kd(c,b[c],a);return a}
function Nd(a){a=Md([],a);a[0]="";return a.join("")}
function Od(a,b){return Jd(2==arguments.length?Ld([a],arguments[1],0):Ld([a],arguments,1))}
function Pd(a,b){return Jd(Md([a],b))}
;function Qd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ta(e[0]||""),e=ta(e[1]||"");f in b?da(b[f])?Ya(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Rd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Qd(d[1]||""),e;for(e in b)d[e]=b[e];return Pd(a,d)+c}
function Sd(a){a=Hd(a);a=null===a?null:a.split(".").reverse();return(null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1)||(null===a?!1:"google"==a[1]?!0:"google"==a[2]?"au"==a[0]&&"com"==a[1]?!0:"uk"==a[0]&&"co"==a[1]?!0:!1:!1)}
;var Td=null;"undefined"!=typeof XMLHttpRequest?Td=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Td=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Ud(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Vd(a,b,c,d,e,f,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&lc(b)(l)}
var l=Td&&Td();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);h&&(l.withCredentials=!0);f="POST"==c;if(e=Wd(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Wd(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(Gd)[1]||null,e=Hd(a);d&&e?(d=c,c=a.match(Gd),d=d.match(Gd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Hd(c)==e&&(Number(c.match(Gd)[4]||null)||null)==(Number(a.match(Gd)[4]||null)||null):!0;for(var f in Xd){if((e=d=I(Xd[f]))&&!(e=c)){var e=f,h=I("CORS_HEADER_WHITELIST")||{},k=Hd(a);e=k?(h=h[k])?Qa(h,e):!1:!0}e&&(b[f]=d)}return b}
function Yd(a,b){var c=I("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.jf&&(!Hd(a)||b.withCredentials||Hd(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.L&&b.L[c])}
function Zd(a,b){var c=b.format||"JSON";b.kf&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=I("XSRF_FIELD_NAME",void 0),e=I("XSRF_TOKEN",void 0),f=b.dc;f&&(f[d]&&delete f[d],a=Rd(a,f||{}));var h=b.postBody||"",f=b.L;Yd(a,b)&&(f||(f={}),f[d]=e);f&&u(h)&&(d=Qd(h),ub(d,f),h=b.Nc&&"JSON"==b.Nc?JSON.stringify(d):Nd(d));var k=!1,l,n=Vd(a,function(a){if(!k){k=!0;l&&K(l);var d=Ud(a),e=null;if(d||400<=a.status&&500>a.status)e=
$d(c,a,b.hf);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.X&&b.X.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.$b&&b.$b.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.Ma&&0<b.timeout&&(l=J(function(){k||(k=!0,n.abort(),K(l),b.Ma.call(b.context||m,n))},b.timeout));
return n}
function $d(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=zd(a));break;case "XML":if(b=(b=b.responseXML)?ae(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=be(a)})}c&&ce(d);
return d}
function ce(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Oc(Ab("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):ce(a[b])}}
function ae(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function be(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Xd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"XSRF_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var de={},ee=0;function fe(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,0,b):void 0===b?(a(),NaN):J(a,b||0)}
;var ge=[],he=!1;function ie(){function a(){he=!0;"google_ad_status"in window?jc("DCLKSTAT",1):jc("DCLKSTAT",2)}
Cc("//static.doubleclick.net/instream/ad_status.js",a);ge.push(fe(function(){he||"google_ad_status"in window||(Jc("//static.doubleclick.net/instream/ad_status.js",a),jc("DCLKSTAT",3))},5E3))}
function je(){return parseInt(I("DCLKSTAT",0),10)}
;function ke(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function le(a,b){return a.classList?a.classList.contains(b):Qa(ke(a),b)}
function me(a,b){a.classList?a.classList.add(b):le(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ne(a,b){a.classList?a.classList.remove(b):le(a,b)&&(a.className=La(ke(a),function(a){return a!=b}).join(" "))}
function oe(a,b,c){c?me(a,b):ne(a,b)}
;function pe(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
pe.prototype.clone=function(){return new pe(this.x,this.y)};
pe.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
pe.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
pe.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function qe(a,b){this.width=a;this.height=b}
g=qe.prototype;g.clone=function(){return new qe(this.width,this.height)};
g.area=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.area()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!jd&&!M||M&&vd(9)||jd&&ud("1.9.1");var re=M&&!ud("9");function se(a){return a?new te(ue(a)):qa||(qa=new te)}
function ve(a){return u(a)?document.getElementById(a):a}
function we(a){var b=document;return u(a)?b.getElementById(a):a}
function xe(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):ye(a,void 0)}
function ye(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var k=c.className;"function"==typeof k.split&&Qa(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return h}
function ze(a){a=a.document;a=Ae(a)?a.documentElement:a.body;return new qe(a.clientWidth,a.clientHeight)}
function Be(a){var b=a.scrollingElement?a.scrollingElement:!kd&&Ae(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return M&&ud("10")&&a.pageYOffset!=b.scrollTop?new pe(b.scrollLeft,b.scrollTop):new pe(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Ae(a){return"CSS1Compat"==a.compatMode}
function Ce(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function De(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Ee(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function ue(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Fe(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{Ce(a);var c=ue(a);a.appendChild(c.createTextNode(String(b)))}}
var Ge={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},He={IMG:" ",BR:"\n"};function Ie(a){if(re&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Je(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");re||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Je(a,b,c){if(!(a.nodeName in Ge))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in He)b.push(He[a.nodeName]);else for(a=a.firstChild;a;)Je(a,b,c),a=a.nextSibling}
function Ke(a){var b=Le.gd;return b?Ne(a,function(a){return!b||u(a.className)&&Qa(a.className.split(/\s+/),b)},!0,void 0):null}
function Ne(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function te(a){this.f=a||m.document||document}
te.prototype.createElement=function(a){return this.f.createElement(a)};
te.prototype.appendChild=function(a,b){a.appendChild(b)};
te.prototype.isElement=function(a){return ha(a)&&1==a.nodeType};
te.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Oe=kd?"webkit":jd?"moz":M?"ms":hd?"o":"",Pe=r("yt.dom.getNextId_");if(!Pe){Pe=function(){return++Qe};
q("yt.dom.getNextId_",Pe,void 0);var Qe=0}function Re(){var a=document,b;Ma(["fullscreenElement","fullScreenElement"],function(c){c in a?b=a[c]:(c=Oe+c.charAt(0).toUpperCase()+c.substr(1),b=c in a?a[c]:void 0);return!!b});
return b}
;function Se(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Te||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Se.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Se.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Se.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Te={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var ob=r("yt.events.listeners_")||{};q("yt.events.listeners_",ob,void 0);var Ue=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Ue,void 0);function Ve(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function O(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Ve(a,b,c,d);if(e)return e;var e=++Ue.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Se(d);if(!Ne(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Se(b);
b.currentTarget=a;return c.call(a,b)};
h=lc(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);ob[e]=[a,b,c,h,d];return e}
function We(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in ob){var c=ob[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[a]}}))}
;function Xe(){if(null==r("_lact",window)){var a=parseInt(I("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Ye();O(document,"keydown",Ye);O(document,"keyup",Ye);O(document,"mousedown",Ye);O(document,"mouseup",Ye);wc("page-mouse",Ye);wc("page-scroll",Ye);wc("page-resize",Ye)}}
function Ye(){null==r("_lact",window)&&(Xe(),r("_lact",window));var a=x();q("_lact",a,window);L("USER_ACTIVE")}
function Ze(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function $e(){}
;function af(a){this.f=a||{cookie:""}}
var bf=/\s*;\s*/;g=af.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(bf),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.qa=function(){return cf(this).keys};
g.V=function(){return cf(this).values};
g.isEmpty=function(){return!this.f.cookie};
g.U=function(){return this.f.cookie?(this.f.cookie||"").split(bf).length:0};
g.$a=function(a){for(var b=cf(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=cf(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function cf(a){a=(a.f.cookie||"").split(bf);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var df=new af("undefined"==typeof document?null:document);df.h=3950;function ef(a,b,c){df.set(""+a,b,c,"/","youtube.com")}
;function ff(a,b,c){var d=I("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=I("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Hd(window.location.href);e&&d.push(e);e=Hd(a);if(Qa(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(Gd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))e=I("ST_BASE36",!0),f=I("ST_SHORT",!0)?"ST-":"s_tempdata-",d=f=e?f+Ja(d).toString(36):f+Ja(d),e=b?Nd(b):"",ef(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),
b&&d&&d(new $e))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Pd(a,{})+"",a=a instanceof Bb?a:Fb(a),c.href=Db(a));return!0}
;function gf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||rb(hf);this.assets=a.assets||{};this.attrs=a.attrs||rb(jf);this.params=a.params||rb(kf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var hf={enablejsapi:1},jf={},kf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function lf(a){a instanceof gf||(a=new gf(a));return a}
gf.prototype.clone=function(){var a=new gf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ca(c)?a[b]=rb(c):a[b]=c}return a};function mf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=mf.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new mf(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof mf?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function nf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=nf.prototype;g.clone=function(){return new nf(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof nf?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function of(a){of[" "](a);return a}
of[" "]=t;function pf(a,b){var c=ue(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function qf(a,b){return pf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function rf(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}M&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function sf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function tf(a){var b=uf;if("none"!=qf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function uf(a){var b=a.offsetWidth,c=a.offsetHeight,d=kd&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new qe(b,c):(a=rf(a),new qe(a.right-a.left,a.bottom-a.top))}
function vf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function wf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?vf(a,c):0}
var xf={thin:2,medium:4,thick:6};function yf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in xf?xf[c]:vf(a,c)}
;var zf=C("Firefox"),Af=gd()||C("iPod"),Bf=C("iPad"),Cf=C("Android")&&!(yb()||C("Firefox")||C("Opera")||C("Silk")),Df=yb(),Ef=C("Safari")&&!(yb()||C("Coast")||C("Opera")||C("Edge")||C("Silk")||C("Android"))&&!(gd()||C("iPad")||C("iPod"));function Ff(){var a;if(a=df.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Gf[d]=c.toString())}}}
ba(Ff);var Gf=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Gf,void 0);function Hf(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function If(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function Jf(a){a=void 0!==Gf[a]?Gf[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ff.prototype.get=function(a,b){If(a);Hf(a);var c=void 0!==Gf[a]?Gf[a].toString():null;return null!=c?c:b?b:""};
Ff.prototype.set=function(a,b){If(a);Hf(a);if(null==b)throw"ExpectedNotNull";Gf[a]=b.toString()};
function Kf(a,b){return!!((Jf("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
Ff.prototype.remove=function(a){If(a);Hf(a);delete Gf[a]};
Ff.prototype.clear=function(){Gf={}};function Lf(a,b){(a=ve(a))&&a.style&&(a.style.display=b?"":"none",oe(a,"hid",!b))}
function Mf(a){z(arguments,function(a){!ea(a)||a instanceof Element?Lf(a,!0):z(a,function(a){Mf(a)})})}
function Nf(a){z(arguments,function(a){!ea(a)||a instanceof Element?Lf(a,!1):z(a,function(a){Nf(a)})})}
;function Of(){this.j=this.h=this.f=0;this.l="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.l=b;b=a;this.f=b[0];this.h=b[1];this.j=b[2];if(0>=this.f){var h,k,l,n;if(qc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(F){h=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=l.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(F){k=""}l&&n&&l.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.f=h[0];this.h=h[1];this.j=h[2]}}
ba(Of);Of.prototype.getVersion=function(){return[this.f,this.h,this.j]};
function Pf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.f>b[0]||a.f==b[0]&&a.h>b[1]||a.f==b[0]&&a.h==b[1]&&a.j>=b[2]}
function Qf(a){return-1<a.l.indexOf("Gnash")&&-1==a.l.indexOf("AVM2")||9==a.f&&1==a.h||9==a.f&&0==a.h&&1==a.j?!1:9<=a.f}
function Rf(a){return md?!Pf(a,11,2):ld?!Pf(a,11,3):!Qf(a)}
;function Sf(a,b,c){if(b){a=u(a)?we(a):a;var d=rb(c.attrs);d.tabindex=0;var e=rb(c.params);e.flashvars=Nd(c.args);if(qc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=document.createElement("embed");b.setAttribute("name",d.id);for(f in d)b.setAttribute(f,
d[f]);for(f in e)b.setAttribute(f,e[f])}e=document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}}
function Tf(a,b,c){if(a&&a.attrs&&a.attrs.id){a=lf(a);var d=!!b,e=ve(a.attrs.id),f=e?e.parentNode:null;if(e&&f){if(window!=window.top){var h=null;if(document.referrer){var k=document.referrer.substring(0,128);Sd(k)||(h=k)}else h="unknown";h&&(d=!0,a.args.framer=h)}h=Of.getInstance();if(Pf(h,a.minVersion)){var k=Uf(a,h),l="";-1<navigator.userAgent.indexOf("Sony/COM2")||(l=e.getAttribute("src")||e.movie);(l!=k||d)&&Sf(f,k,a);Rf(h)&&Vf()}else Wf(f,a,h);c&&c()}else J(function(){Tf(a,b,c)},50)}}
function Wf(a,b,c){0==c.f&&b.fallback?b.fallback():0==c.f&&b.fallbackMessage?b.fallbackMessage():a.innerHTML='<div id="flash-upgrade">'+oc()+"</div>"}
function Uf(a,b){return Qf(b)&&a.url||(-1<navigator.userAgent.indexOf("Sony/COM2")&&!Pf(b,9,1,58)?!1:!0)&&a.urlV9As2||a.url}
function Vf(){var a=ve("flash10-promo-div"),b=Kf(Ff.getInstance(),107);a&&!b&&Mf(a)}
;function Xf(a){if(window.spf){var b=a.match(Yf);spf.style.load(a,b?b[1]:"",void 0)}else Zf(a)}
function Zf(a){var b=$f(a),c=document.getElementById(b),d=c&&D(c,"loaded");d||c&&!d||(c=ag(a,b,function(){D(c,"loaded")||(Mb(c,"loaded","true"),L(b),J(oa(Bc,b),0))}))}
function ag(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
Lb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function $f(a){var b=document.createElement("a");Lb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ja(a)}
var Yf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var bg;var cg=vb,cg=cg.toLowerCase();if(-1!=cg.indexOf("android")){var dg=cg.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(dg)bg=Number(dg[1]);else{var eg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},fg=cg.match("("+kb(eg).join("|")+")");bg=fg?eg[fg[0]]:0}}else bg=void 0;var gg=Af||Bf;var hg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],ig=['audio/mp4; codecs="mp4a.40.2"'];function jg(a){E.call(this);this.f=[];this.h=a||this}
y(jg,E);function kg(a,b,c,d){d=lc(v(d,a.h));b.addEventListener(c,d);a.f.push({target:b,name:c,Lb:d})}
jg.prototype.Db=function(a){for(var b=0;b<this.f.length;b++)if(this.f[b]==a){this.f.splice(b,1);a.target.removeEventListener(a.name,a.Lb);break}};
function lg(a){for(;a.f.length;){var b=a.f.pop();b.target.removeEventListener(b.name,b.Lb)}}
jg.prototype.F=function(){lg(this);jg.H.F.call(this)};function mg(a){return I("EXPERIMENT_FLAGS",{})[a]}
;function ng(){this.f={apiaryHost:I("APIARY_HOST",void 0),gf:I("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:I("GAPI_HINT_OVERRIDE"),gapiHintParams:I("GAPI_HINT_PARAMS",void 0),innertubeApiKey:I("INNERTUBE_API_KEY",void 0),innertubeApiVersion:I("INNERTUBE_API_VERSION",void 0),Gd:I("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:I("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Jd:I("INNERTUBE_CONTEXT_HL",void 0),Hd:I("INNERTUBE_CONTEXT_GL",void 0)}}
;var og={log_event:"events",log_interaction:"interactions"},pg={},qg={},rg=0,sg=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",sg,void 0);
function tg(){K(rg);if(!pb(sg))for(var a in sg){var b=pg[a];b||(b=new qg[a],pg[a]=b);var c=b.f,c={client:{hl:c.Jd,gl:c.Hd,clientName:c.Gd,clientVersion:c.innertubeContextClientVersion}};I("DELEGATED_SESSION_ID")&&(c.user={onBehalfOfUser:I("DELEGATED_SESSION_ID")});c={context:c};c.requestTimeMs=Math.round(pc());c[og[a]]=sg[a];var d=b,b={},d="//"+d.f.apiaryHost+("/youtubei/"+d.f.innertubeApiVersion+"/"+a)+"?alt=json&key="+d.f.innertubeApiKey,c={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":I("VISITOR_DATA")},
L:c,Nc:"JSON",Ma:b.Ma,X:b.X,onError:b.onError,timeout:b.timeout,method:"POST"};c.L||(c.L={});Zd(d,c);delete sg[a]}}
;function ug(a,b){var c={};c.eventTimeMs=Math.round(pc());c[a]=b;sg.log_event=sg.log_event||[];var d=sg.log_event;d.push(c);qg.log_event=ng;20<=d.length?tg():(K(rg),rg=J(tg,I("VISIBILITY_TIMEOUT",1E4)))}
;function vg(a,b){this.h=this.D=this.l="";this.A=null;this.o=this.f="";this.w=!1;var c;a instanceof vg?(this.w=p(b)?b:a.w,wg(this,a.l),this.D=a.D,xg(this,a.h),yg(this,a.A),this.f=a.f,zg(this,a.j.clone()),this.o=a.o):a&&(c=String(a).match(Gd))?(this.w=!!b,wg(this,c[1]||"",!0),this.D=Ag(c[2]||""),xg(this,c[3]||"",!0),yg(this,c[4]),this.f=Ag(c[5]||"",!0),zg(this,c[6]||"",!0),this.o=Ag(c[7]||"")):(this.w=!!b,this.j=new Bg(null,0,this.w))}
vg.prototype.toString=function(){var a=[],b=this.l;b&&a.push(Cg(b,Dg,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.D)&&a.push(Cg(b,Dg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.A,null!=c&&a.push(":",String(c));if(c=this.f)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(Cg(c,"/"==c.charAt(0)?Eg:Fg,!0));(c=this.j.toString())&&a.push("?",c);(c=this.o)&&a.push("#",Cg(c,Gg));return a.join("")};
vg.prototype.resolve=function(a){var b=this.clone(),c=!!a.l;c?wg(b,a.l):c=!!a.D;c?b.D=a.D:c=!!a.h;c?xg(b,a.h):c=null!=a.A;var d=a.f;if(c)yg(b,a.A);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.h&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.j.toString();c?zg(b,Ag(a.j.toString())):c=!!a.o;c&&(b.o=a.o);return b};
vg.prototype.clone=function(){return new vg(this)};
function wg(a,b,c){a.l=c?Ag(b,!0):b;a.l&&(a.l=a.l.replace(/:$/,""))}
function xg(a,b,c){a.h=c?Ag(b,!0):b}
function yg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.A=b}else a.A=null}
function zg(a,b,c){b instanceof Bg?(a.j=b,Hg(a.j,a.w)):(c||(b=Cg(b,Ig)),a.j=new Bg(b,0,a.w))}
function P(a,b,c){a.j.set(b,c)}
function Jg(a,b,c){da(c)||(c=[String(c)]);Kg(a.j,b,c)}
function Lg(a){P(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function Mg(a){return a instanceof vg?a.clone():new vg(a,void 0)}
function Ng(a,b,c,d){var e=new vg(null,void 0);a&&wg(e,a);b&&xg(e,b);c&&yg(e,c);d&&(e.f=d);return e}
function Ag(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Cg(a,b,c){return u(a)?(a=encodeURI(a).replace(b,Og),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Og(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Dg=/[#\/\?@]/g,Fg=/[\#\?:]/g,Eg=/[\#\?]/g,Ig=/[\#\?@]/g,Gg=/#/g;function Bg(a,b,c){this.h=this.f=null;this.j=a||null;this.l=!!c}
function Pg(a){a.f||(a.f=new Uc,a.h=0,a.j&&Id(a.j,function(b,c){Qg(a,ta(b),c)}))}
g=Bg.prototype;g.U=function(){Pg(this);return this.h};
function Qg(a,b,c){Pg(a);a.j=null;b=Rg(a,b);var d=a.f.get(b);d||a.f.set(b,d=[]);d.push(c);a.h=a.h+1}
g.remove=function(a){Pg(this);a=Rg(this,a);return Wc(this.f.h,a)?(this.j=null,this.h=this.h-this.f.get(a).length,this.f.remove(a)):!1};
g.clear=function(){this.f=this.j=null;this.h=0};
g.isEmpty=function(){Pg(this);return 0==this.h};
function Sg(a,b){Pg(a);b=Rg(a,b);return Wc(a.f.h,b)}
g.$a=function(a){var b=this.V();return Qa(b,a)};
g.qa=function(){Pg(this);for(var a=this.f.V(),b=this.f.qa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.V=function(a){Pg(this);var b=[];if(u(a))Sg(this,a)&&(b=Wa(b,this.f.get(Rg(this,a))));else{a=this.f.V();for(var c=0;c<a.length;c++)b=Wa(b,a[c])}return b};
g.set=function(a,b){Pg(this);this.j=null;a=Rg(this,a);Sg(this,a)&&(this.h=this.h-this.f.get(a).length);this.f.set(a,[b]);this.h=this.h+1;return this};
g.get=function(a,b){var c=a?this.V(a):[];return 0<c.length?String(c[0]):b};
function Kg(a,b,c){a.remove(b);0<c.length&&(a.j=null,a.f.set(Rg(a,b),Xa(c)),a.h=a.h+c.length)}
g.toString=function(){if(this.j)return this.j;if(!this.f)return"";for(var a=[],b=this.f.qa(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.V(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.j=a.join("&")};
g.clone=function(){var a=new Bg;a.j=this.j;this.f&&(a.f=this.f.clone(),a.h=this.h);return a};
function Rg(a,b){var c=String(b);a.l&&(c=c.toLowerCase());return c}
function Hg(a,b){b&&!a.l&&(Pg(a),a.j=null,a.f.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),Kg(this,e,a))},a));
a.l=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)ad(arguments[b],function(a,b){Qg(this,b,a)},this)};var Tg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Ug="";
function Vg(a){return a&&a==Ug?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Tg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Ug=a,!0):!1}
;var Wg={},Xg=0,Yg=r("yt.net.ping.workerUrl_")||null;q("yt.net.ping.workerUrl_",Yg,void 0);function Zg(a){try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&$g(a)}catch(b){a&&$g(a)}}
function $g(a){var b=new Image,c=""+Xg++;Wg[c]=b;b.onload=b.onerror=function(){delete Wg[c]};
b.src=a}
;function Q(a,b){this.version=a;this.args=b}
function ah(a){if(!a.Ea){var b={};a.call(b);a.Ea=b.version}return a.Ea}
function bh(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=ah(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function R(a,b){this.topic=a;this.f=b}
R.prototype.toString=function(){return this.topic};var ch=r("yt.pubsub2.instance_")||new H;H.prototype.subscribe=H.prototype.subscribe;H.prototype.unsubscribeByKey=H.prototype.na;H.prototype.publish=H.prototype.C;H.prototype.clear=H.prototype.clear;q("yt.pubsub2.instance_",ch,void 0);var dh=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",dh,void 0);var eh=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",eh,void 0);var fh=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",fh,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function S(a,b){var c=gh();c&&c.publish.call(c,a.toString(),a,b)}
function hh(a,b,c){var d=gh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(dh[e])try{if(h&&a instanceof R&&a!=d)try{h=bh(a.f,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){nc(k)}};
fh[a.toString()]?r("yt.scheduler.instance")?fe(k,void 0):J(k,0):k()}});
dh[e]=!0;eh[a.toString()]||(eh[a.toString()]=[]);eh[a.toString()].push(e);return e}
function ih(a){var b=gh();b&&(fa(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete dh[a]}))}
function gh(){return r("yt.pubsub2.instance_")}
;var jh=x().toString();function kh(a){Q.call(this,1,arguments)}
y(kh,Q);var lh=new R("timing-sent",kh);function mh(a){var b=a||window;if(!(b.performance&&b.performance.timing&&b.performance.getEntriesByType))return{Bb:0,Wc:0};a=ze(b||window);for(var c=[],d=b.document.getElementsByTagName("*"),e=0,f=d.length;e<f;e++){var h=d[e];if("IMG"==h.tagName||"IFRAME"==h.tagName){var k=nh(h,h.src,a);if(k){if("IFRAME"==h.tagName){var l;try{l=mh(h.contentWindow).Bb}catch(n){l=0}0<l&&(k.timing=l)}c.push(k)}}(k=b.getComputedStyle(h)["background-image"])&&(k=oh.exec(k))&&1<k.length&&(k=nh(h,k[1],a))&&c.push(k)}l=b.performance.getEntriesByType("resource");
h=b.performance.getEntriesByType("mark");d={};e=0;for(f=l.length;e<f;e++)k=l[e],d[k.name]=k.responseEnd;e=0;for(f=h.length;e<f;e++)k=h[e],"mark_iframe_loaded: "==k.name.slice(0,20)&&(d[k.name.slice(20)]=k.startTime);e=0;for(f=c.length;e<f;e++)h=c[e],h.timing||(h.timing=d[h.url]||0);b=ph(b,l);a=qh(b,a,c);h=c=0;if(a.length)for(d=l=0,e=a.length;d<e;d++)f=a[d],h=f.timing-h,0<h&&1>l&&(c+=(1-l)*h),h=f.timing,l=f.progress;return{Bb:Math.round(c||b),Wc:h}}
function nh(a,b,c){if(b&&a.getBoundingClientRect){var d=a.getBoundingClientRect();a=Math.max(d.top,0);var e=Math.min(d.right,c.width);c=Math.min(d.bottom,c.height);d=Math.max(d.left,0);if(c>a&&e>d)return new rh(a,e,c,d,b)}return null}
function ph(a,b){var c,d=a.performance.timing.navigationStart;if("msFirstPaint"in a.performance.timing)c=a.performance.timing.f-d;else if("chrome"in a&&"loadTimes"in a.chrome){var e=a.chrome.loadTimes(),f=e.firstPaintTime;if(0<f){var h=e.startLoadTime;"requestTime"in e&&(h=e.requestTime);f>=h&&(c=1E3*(f-h))}}if(void 0===c||0>c||12E4<c){c=a.performance.timing.responseStart-d;for(var k={},d=a.document.getElementsByTagName("head")[0].children,e=0,f=d.length;e<f;e++)h=d[e],"SCRIPT"==h.tagName&&h.src&&
!h.async?k[h.src]=!0:"LINK"==h.tagName&&"stylesheet"==h.rel&&h.href&&(k[h.href]=!0);b.some(function(a){if(!k[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===c||a>c)c=a})}return Math.max(c,0)||0}
function qh(a,b,c){for(var d={0:0},e=0,f=0,h=c.length;f<h;f++){var k=c[f],l=a;k.timing>a&&(l=k.timing);d[l]||(d[l]=0);k=(k.f-k.l)*(k.j-k.h);d[l]+=k;e+=k}f=b.width*b.height;0<f&&(f=.1*Math.max(f-e,0),a in d||(d[a]=0),d[a]+=f,e+=f);a=[];if(e){for(var n in d)b=new sh(parseFloat(n),d[n]),a.push(b);a.sort(function(a,b){return a.timing-b.timing});
f=d=0;for(h=a.length;f<h;f++)b=a[f],d+=b.area,b.progress=d/e}return a}
function rh(a,b,c,d,e){this.f=c;this.h=d;this.j=b;this.l=a;this.url=e}
function sh(a,b){this.area=b;this.timing=a}
var oh=/url\(["']?(http[^'"\)]+)['"]?\)/i;var th={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile_polymer/mobile_polymer"]':"mpj",'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="mobile-polymer-player/mobile-polymer-player"]':"mppj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc"},T=window.performance||window.mozPerformance||
window.msPerformance||window.webkitPerformance||{},uh=v(T.clearResourceTimings||T.webkitClearResourceTimings||T.mozClearResourceTimings||T.msClearResourceTimings||T.oClearResourceTimings||t,T),vh=T.mark?function(a){T.mark(a)}:t;
function wh(a){vh(a);xh()[a]=pc();if(mg("csi_on_gel")){var b;b=yh().nonce;if(!b){var c;a:{if(window.crypto&&window.crypto.getRandomValues)try{var d=Array(16),e=new Uint8Array(16);window.crypto.getRandomValues(e);for(b=0;b<d.length;b++)d[b]=e[b];c=d;break a}catch(Sr){}b=Array(16);for(var f=0;16>f;f++){var h=x();for(c=0;c<h%23;c++)b[f]=Math.random();b[f]=Math.floor(256*Math.random())}if(jh)for(f=1,h=0;h<jh.length;h++)b[f%16]=b[f%16]^b[(f-1)%16]/4^jh.charCodeAt(h),f++;c=b}b=[];for(f=0;f<c.length;f++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(c[f]&
63));b=b.join("");yh().nonce=b}"_start"==a?ug("latencyActionBaselined",{clientActionNonce:b}):ug("latencyActionTicked",{tickName:a,clientActionNonce:b})}else if(c=I("TIMING_ACTION",void 0),a=xh(),r("yt.timing.ready_")&&c&&a._start&&zh()){c=!0;d=I("TIMING_WAIT",[]);if(d.length)for(var e=0,k=d.length;e<k;++e)if(!(d[e]in a)){c=!1;break}if(c)if(d=xh(),a=yh().span,e=yh().info,c=r("yt.timing.reportbuilder_")){if(c=c(d,a,e,void 0))Ah(c),Bh()}else{var l=I("TIMING_ACTION",void 0),k=I("CSI_SERVICE_NAME","youtube");
c={v:2,s:k,action:l};if(T.now&&T.timing){var n=T.timing.navigationStart+T.now(),n=Math.round(x()-n);e.yt_hrd=n}var n=I("TIMING_INFO",{}),F;for(F in n)e[F]=n[F];F=e.srt;delete e.srt;var w;void 0===d.srt&&(F||0===F||(w=T.timing||{},F=Math.max(0,w.responseStart-w.navigationStart),isNaN(F)&&e.pt&&(F=e.pt)),F||0===F)&&(e.srt=Math.round(F));e.h5jse&&(n=window.location.protocol+r("ytplayer.config.assets.js"),(n=T.getEntriesByName?T.getEntriesByName(n)[0]:null)?e.h5jse=Math.round(e.h5jse-n.responseEnd):delete e.h5jse);
d.aft=zh();n=d._start;if("cold"==e.yt_lt){w||(w=T.timing||{});var A;a:if(A=w,A.msFirstPaint)A=Math.max(0,A.msFirstPaint);else{var G=window.chrome;if(G&&(G=G.loadTimes,ga(G))){var G=G(),Me=1E3*Math.min(G.requestTime||Infinity,G.startLoadTime||Infinity),Me=Infinity===Me?0:A.navigationStart-Me;A=Math.max(0,Math.round(1E3*G.firstPaintTime+Me)||0);break a}A=0}0<A&&A>n&&(d.fpt=A);A=a||yh().span;G=w.redirectEnd-w.redirectStart;0<G&&(A.rtime_=G);G=w.domainLookupEnd-w.domainLookupStart;0<G&&(A.dns_=G);G=w.connectEnd-
w.connectStart;0<G&&(A.tcp_=G);G=w.connectEnd-w.secureConnectionStart;w.secureConnectionStart>=w.navigationStart&&0<G&&(A.stcp_=G);G=w.responseStart-w.requestStart;0<G&&(A.req_=G);G=w.responseEnd-w.responseStart;0<G&&(A.rcv_=G);T.getEntriesByType&&Ch(d);(w=I("SPEEDINDEX_FOR_ACTIONS",void 0))&&-1<w.indexOf(l)&&(w=pc(),l=mh(),A=pc(),0<l.Bb&&(e.si=l.Bb,d.vsc=Dh(l.Wc),d.sics=w,d.sice=A));w=[];if(document.querySelector&&T&&T.getEntriesByName)for(var sa in th)if(l=document.querySelector(sa))A="",G=l.nodeName,
"SCRIPT"==G?A=l.src:"LINK"==G&&(A=l.href),A&&(l=T.getEntriesByName(A))&&l[0]&&w.push(th[sa]+"."+Math.round(l[0].duration));w.length&&(e.rs=w.join(","))}l=xh();sa=l.pbr;w=l.vc;l=l.pbs;sa&&w&&l&&sa<w&&w<l&&1==yh().info.yt_vis&&"youtube"==k&&(yh().info.yt_lt="hot_bg",sa=d.vc,k=d.pbs,delete d.aft,e.aft=Math.round(k-sa));(sa=I("PREVIOUS_ACTION"))&&(e.pa=sa);e.p=I("CLIENT_PROTOCOL")||"unknown";e.t=I("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&(e.ba=1);for(h in e)"_"!=h.charAt(0)&&
(c[h]=e[h]);d.ps=pc();h={};sa=[];for(f in d)"_"!=f.charAt(0)&&(A=Math.round(d[f]-n),mg("enable_negative_ticks")||(A=Math.max(A,0)),h[f]=A,sa.push(f+"."+A));c.rt=sa.join(",");f=c;sa=[];for(b in a)"_"!=b.charAt(0)&&sa.push(b+"."+Math.round(a[b]));f.it=sa.join(",");(b=r("ytdebug.logTiming"))&&b(c,h,a);Bh();I("EXP_DEFER_CSI_PING")?(Eh(),q("yt.timing.deferredPingArgs_",c,void 0),b=J(Eh,0),q("yt.timing.deferredPingTimer_",b,void 0)):Ah(c);S(lh,new kh(h.aft+(F||0)))}}}
function Bh(){Fh();uh();q("yt.timing.pingSent_",!1,void 0)}
function zh(){var a=xh();if(a.aft)return a.aft;for(var b=I("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Dh(a){return Math.round(T.timing.navigationStart+a)}
function Ch(a){var b=window.location.protocol,c=T.getEntriesByType("resource"),d=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.googleapis.com/css?family=")})[0],c=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});
d&&0<d.startTime&&0<d.responseEnd&&(a.wfcs=Dh(d.startTime),a.wfce=Dh(d.responseEnd));c&&0<c.startTime&&0<c.responseEnd&&(a.wffs=Dh(c.startTime),a.wffe=Dh(c.responseEnd))}
function Ah(a){if(I("DEBUG_CSI_DATA")){var b=r("yt.timing.csiData");b||(b=[],q("yt.timing.csiData",b,void 0));b.push({page:location.href,time:new Date,args:a})}I("EXP_DEFER_CSI_PING")&&(K(r("yt.timing.deferredPingTimer_")),q("yt.timing.deferredPingArgs_",null,void 0));var c="https:"==window.location.protocol?"https://gg.google.com/csi":"http://csi.gstatic.com/csi",c=I("CSI_LOG_WITH_YT")?"/csi_204":c,b="",d;for(d in a)b+="&"+d+"="+a[d];a=c+"?"+b.substring(1);b=I("DOUBLE_LOG_CSI")?"/csi_204?"+b.substring(1):
null;window.navigator&&window.navigator.sendBeacon?(Zg(a),b&&Zg(b)):(a&&$g(a),b&&b&&$g(b));q("yt.timing.pingSent_",!0,void 0)}
function Eh(a){if(I("EXP_DEFER_CSI_PING")){var b=r("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),Ah(b))}}
function xh(){return yh().tick}
function yh(){return r("ytcsi.data_")||Fh()}
function Fh(){var a={tick:{},span:{},info:{}};q("ytcsi.data_",a,void 0);return a}
;var Gh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function Hh(a,b){E.call(this);this.o=this.l=a;this.Z=b;this.D=!1;this.api={};this.ua=this.R=null;this.ga=new H;dc(this,oa(ec,this.ga));this.j={};this.w=this.za=this.h=this.Jb=this.f=null;this.oa=!1;this.I=this.A=this.O=this.P=null;this.Oa={};this.nd=["onReady"];this.sa=new jg(this);dc(this,oa(ec,this.sa));this.Kb=null;this.jc=NaN;this.ta={};Ih(this);this.wa("onDetailedError",v(this.Yd,this));this.wa("onTabOrderChange",v(this.qd,this));this.wa("onTabAnnounce",v(this.kc,this));this.wa("WATCH_LATER_VIDEO_ADDED",
v(this.Zd,this));this.wa("WATCH_LATER_VIDEO_REMOVED",v(this.$d,this));zf||(this.wa("onMouseWheelCapture",v(this.Vd,this)),this.wa("onMouseWheelRelease",v(this.Wd,this)));this.wa("onAdAnnounce",v(this.kc,this));this.J=new jg(this);dc(this,oa(ec,this.J));this.Ib=!1;this.Ya=null}
y(Hh,E);var Jh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=Hh.prototype;g.fc=function(a,b){this.isDisposed()||(Kh(this,a),Lh(this,b),this.D&&Mh(this))};
function Kh(a,b){a.Jb=b;a.f=b.clone();a.h=a.f.attrs.id||a.h;"video-player"==a.h&&(a.h=a.Z,a.f.attrs.id=a.Z);a.o.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h);a.f.args.enablejsapi="1";a.f.args.playerapiid=a.Z;a.za||(a.za=Nh(a,a.f.args.jsapicallback||"onYouTubePlayerReady"));a.f.args.jsapicallback=null;var c=a.f.attrs.width;c&&(a.o.style.width=sf(Number(c)||c,!0));if(c=a.f.attrs.height)a.o.style.height=sf(Number(c)||c,!0)}
g.yd=function(){return this.Jb};
function Mh(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Oh(a){if(!p(a.f.disable.flash)){var b=a.f.disable,c;c=Pf(Of.getInstance(),a.f.minVersion);b.flash=!c}return!a.f.disable.flash}
function Ph(a,b){if((!b||(5!=(Gh[b.errorCode]||5)?0:-1!=Jh.indexOf(b.errorCode)))&&Oh(a)){var c=Qh(a);c&&c.stopVideo&&c.stopVideo();var d=a.f;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=lf(c));d.args.autoplay=1;d.args.html5_unavailable="1";Kh(a,d);Lh(a,"flash")}}
function Lh(a,b){if(!a.isDisposed()){if(!b){var c;if(!(c=!a.f.html5&&Oh(a))){if(!p(a.f.disable.html5)){var d;c=!0;void 0!=a.f.args.deviceHasDisplay&&(c=a.f.args.deviceHasDisplay);if(2.2==bg)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?hg:ig,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=Rh(a)||a.f.assets.js);
a.f.disable.html5=!d;d||(a.f.args.html5_unavailable="1")}c=!!a.f.disable.html5}b=c?Oh(a)?"flash":"unsupported":"html5"}("flash"==b?a.Ie:"html5"==b?a.Je:a.Ke).call(a)}}
function Rh(a){var b=!0,c=Qh(a);c&&a.f&&(a=a.f,b=D(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.Je=function(){if(!this.oa){var a=Rh(this);a&&"html5"==Sh(this)?(this.w="html5",this.D||this.Ta()):(Th(this),this.w="html5",a&&this.O?(this.l.appendChild(this.O),this.Ta()):(this.f.loaded=!0,this.P=v(function(){var a=this.l,c=this.f.clone();r("yt.player.Application.create")(a,c);this.Ta()},this),this.oa=!0,a?this.P():(Cc(this.f.assets.js,this.P),Xf(this.f.assets.css))))}};
g.Ie=function(){var a=this.f.clone();if(!this.A){var b=Qh(this);b&&(this.A=document.createElement("span"),this.A.tabIndex=0,kg(this.sa,this.A,"focus",this.Ac),this.I=document.createElement("span"),this.I.tabIndex=0,kg(this.sa,this.I,"focus",this.Ac),b.parentNode&&b.parentNode.insertBefore(this.A,b),b.parentNode&&b.parentNode.insertBefore(this.I,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Sh(this))this.w="flash",this.D||Tf(a,!1,v(this.Ta,this));
else{Th(this);this.w="flash";this.f.loaded=!0;b=this.l;b=u(b)?we(b):b;a=lf(a);if(window!=window.top){var c=null;document.referrer&&(c=document.referrer.substring(0,128));a.args.framer=c}c=Of.getInstance();Pf(c,a.minVersion)?(c=Uf(a,c),Sf(b,c,a)):Wf(b,a,c);this.Ta()}};
g.Ac=function(){Qh(this).focus()};
function Qh(a){var b=ve(a.h);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.h));return b}
g.Ta=function(){if(!this.isDisposed()){var a=Qh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.oa=!1,a.isNotServable&&a.isNotServable(this.f.args.video_id))Ph(this);else{Ih(this);this.D=!0;a=Qh(this);a.addEventListener&&(this.R=Uh(this,a,"addEventListener"));a.removeEventListener&&(this.ua=Uh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=Uh(this,
a,d))}for(var e in this.j)this.R(e,this.j[e]);Mh(this);this.za&&this.za(this.api);this.ga.C("onReady",this.api)}else this.jc=J(v(this.Ta,this),50)}};
function Uh(a,b,c){var d=b[c];return function(){try{return a.Kb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Kb=e,nc(e,"WARNING"))}}}
function Ih(a){a.D=!1;if(a.ua)for(var b in a.j)a.ua(b,a.j[b]);for(var c in a.ta)K(parseInt(c,10));a.ta={};a.R=null;a.ua=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=v(a.wa,a);a.api.removeEventListener=v(a.ue,a);a.api.destroy=v(a.dispose,a);a.api.getLastError=v(a.zd,a);a.api.getPlayerType=v(a.Ad,a);a.api.getCurrentVideoConfig=v(a.yd,a);a.api.loadNewVideoConfig=v(a.fc,a);a.api.isReady=v(a.Ve,a)}
g.Ve=function(){return this.D};
g.wa=function(a,b){if(!this.isDisposed()){var c=Nh(this,b);if(c){if(!Qa(this.nd,a)&&!this.j[a]){var d=Vh(this,a);this.R&&this.R(a,d)}this.ga.subscribe(a,c);"onReady"==a&&this.D&&J(oa(c,this.api),0)}}};
g.ue=function(a,b){if(!this.isDisposed()){var c=Nh(this,b);c&&this.ga.unsubscribe(a,c)}};
function Nh(a,b){var c=b;if("string"==typeof b){if(a.Oa[b])return a.Oa[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.Oa[b]=c}return c?c:null}
function Vh(a,b){var c="ytPlayer"+b+a.Z;a.j[b]=c;m[c]=function(c){var e=J(function(){if(!a.isDisposed()){a.ga.C(b,c);var f=a.ta,h=String(e);h in f&&delete f[h]}},0);
qb(a.ta,String(e))};
return c}
g.qd=function(a){a=a?Ee:De;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.A||b==this.I||(b.focus(),b!=document.activeElement));)b=a(b)};
g.kc=function(a){L("a11y-announce",a)};
g.Yd=function(a){Ph(this,a)};
g.Zd=function(a){L("WATCH_LATER_VIDEO_ADDED",a)};
g.$d=function(a){L("WATCH_LATER_VIDEO_REMOVED",a)};
g.Vd=function(){this.Ib||(Df?(this.Ya=Be(document),kg(this.J,window,"scroll",this.pe),kg(this.J,this.l,"touchmove",this.je)):(kg(this.J,this.l,"mousewheel",this.Dc),kg(this.J,this.l,"wheel",this.Dc)),this.Ib=!0)};
g.Wd=function(){lg(this.J);this.Ib=!1};
g.Dc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.pe=function(){window.scrollTo(this.Ya.x,this.Ya.y)};
g.je=function(a){a.preventDefault()};
g.Ke=function(){Th(this);this.w="unsupported";var a='Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>',b=navigator.userAgent.match(/Version\/(\d).*Safari/);b&&5<=parseInt(b[1],10)&&(a='Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
b=this.f.messages.player_fallback||a;a=ve("player-unavailable");if(ve("unavailable-submessage")&&a){ve("unavailable-submessage").innerHTML=b;var b=a||document,c=null;b.getElementsByClassName?c=b.getElementsByClassName("icon")[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector(".icon"):c=ye("icon",a)[0];if(c=b=c||null)c=b?b.dataset?Nb("icon")in b.dataset:b.hasAttribute?!!b.hasAttribute("data-icon"):!!b.getAttribute("data-icon"):!1;c&&(b.src=D(b,"icon"));a.style.display="";me(ve("player"),"off-screen-trigger")}};
g.Ad=function(){return this.w||Sh(this)};
g.zd=function(){return this.Kb};
function Sh(a){return(a=Qh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Th(a){wh("dcp");a.cancel();Ih(a);a.w=null;a.f&&(a.f.loaded=!1);var b=Qh(a);"html5"==Sh(a)?a.O=b:b&&b.destroy&&b.destroy();Ce(a.l);lg(a.sa);a.A=null;a.I=null}
g.cancel=function(){this.P&&Jc(this.f.assets.js,this.P);K(this.jc);this.oa=!1};
g.F=function(){Th(this);if(this.O&&this.f)try{this.O.destroy()}catch(b){nc(b)}this.Oa=null;for(var a in this.j)m[this.j[a]]=null;this.Jb=this.f=this.api=null;delete this.l;delete this.o;Hh.H.F.call(this)};var Wh={},Xh="player_uid_"+(1E9*Math.random()>>>0);function Yh(a,b){a=u(a)?we(a):a;b=lf(b);var c=Xh+"_"+ia(a),d=Wh[c];if(d)return d.fc(b),d.api;d=new Hh(a,c);Wh[c]=d;L("player-added",d.api);dc(d,oa(Zh,d));J(function(){d.fc(b)},0);
return d.api}
function Zh(a){Wh[a.Z]=null}
function $h(a){a=ve(a);if(!a)return null;var b=Xh+"_"+ia(a),c=Wh[b];c||(c=new Hh(a,b),Wh[b]=c);return c.api}
;var ai=r("yt.abuse.botguardInitialized")||Mc;q("yt.abuse.botguardInitialized",ai,void 0);var bi=r("yt.abuse.invokeBotguard")||Nc;q("yt.abuse.invokeBotguard",bi,void 0);var ci=r("yt.abuse.dclkstatus.checkDclkStatus")||je;q("yt.abuse.dclkstatus.checkDclkStatus",ci,void 0);var di=r("yt.player.exports.navigate")||ff;q("yt.player.exports.navigate",di,void 0);var ei=r("yt.player.embed")||Yh;q("yt.player.embed",ei,void 0);var fi=r("yt.player.getPlayerByElement")||$h;q("yt.player.getPlayerByElement",fi,void 0);
var gi=r("yt.util.activity.init")||Xe;q("yt.util.activity.init",gi,void 0);var hi=r("yt.util.activity.getTimeSinceActive")||Ze;q("yt.util.activity.getTimeSinceActive",hi,void 0);var ii=r("yt.util.activity.setTimestamp")||Ye;q("yt.util.activity.setTimestamp",ii,void 0);function ji(a){Q.call(this,1,arguments);this.f=a}
y(ji,Q);function ki(a){Q.call(this,1,arguments);this.f=a}
y(ki,Q);function li(a,b){Q.call(this,1,arguments);this.f=a;this.isEnabled=b}
y(li,Q);function mi(a,b,c,d,e){Q.call(this,2,arguments);this.h=a;this.f=b;this.l=c||null;this.j=d||null;this.source=e||null}
y(mi,Q);function ni(a,b,c){Q.call(this,1,arguments);this.f=a;this.subscriptionId=b}
y(ni,Q);function oi(a,b,c,d,e,f,h){Q.call(this,1,arguments);this.h=a;this.subscriptionId=b;this.f=c;this.o=d||null;this.l=e||null;this.j=f||null;this.source=h||null}
y(oi,Q);
var pi=new R("subscription-batch-subscribe",ji),qi=new R("subscription-batch-unsubscribe",ji),ri=new R("subscription-pref-email",li),si=new R("subscription-subscribe",mi),ti=new R("subscription-subscribe-loading",ki),ui=new R("subscription-subscribe-loaded",ki),vi=new R("subscription-subscribe-success",ni),wi=new R("subscription-subscribe-external",mi),xi=new R("subscription-unsubscribe",oi),yi=new R("subscription-unsubscirbe-loading",ki),zi=new R("subscription-unsubscribe-loaded",ki),Ai=new R("subscription-unsubscribe-success",
ki),Bi=new R("subscription-external-unsubscribe",oi),Ci=new R("subscription-enable-ypc",ki),Di=new R("subscription-disable-ypc",ki);function Ei(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Od(c,"mode",b));c=Od("/signin?context=popup","next",c);c=Od(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=wc("LOGGED_IN",function(b){yc(I("LOGGED_IN_PUBSUB_KEY",void 0));jc("LOGGED_IN",!0);a(b)});
jc("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",L,void 0);function Fi(){var a=I("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!I("SESSION_INDEX")&&!I("LOGGED_IN"))}
;var Gi={},Hi="ontouchstart"in document;function Ii(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Ne(c,function(a){return le(a,b)},!0,d)}
function Ji(a){var b="mouseover"==a.type&&"mouseenter"in Gi||"mouseout"==a.type&&"mouseleave"in Gi,c=a.type in Gi||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Gi[b],d;for(d in c.fa){var e=Ii(b,d,a.target);e&&!Ne(a.relatedTarget,function(a){return a==e},!0)&&c.C(d,e,b,a)}}if(b=Gi[a.type])for(d in b.fa)(e=Ii(a.type,d,a.target))&&b.C(d,e,a.type,a)}}
O(document,"blur",Ji,!0);O(document,"change",Ji,!0);O(document,"click",Ji);O(document,"focus",Ji,!0);O(document,"mouseover",Ji);O(document,"mouseout",Ji);O(document,"mousedown",Ji);O(document,"keydown",Ji);O(document,"keyup",Ji);O(document,"keypress",Ji);O(document,"cut",Ji);O(document,"paste",Ji);Hi&&(O(document,"touchstart",Ji),O(document,"touchend",Ji),O(document,"touchcancel",Ji));function Ki(a){this.o=a;this.j={};this.yb=[];this.l=[]}
function Li(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
Ki.prototype.unregister=function(){yc(this.yb);this.yb.length=0;ih(this.l);this.l.length=0};
Ki.prototype.init=t;Ki.prototype.dispose=t;function Mi(a,b,c){a.l.push(hh(b,c,a))}
function Ni(a,b,c){var d=Li(a,void 0),e=v(c,a);b in Gi||(Gi[b]=new H);Gi[b].subscribe(d,e);a.j[c]=e}
function Oi(a,b,c){if(b in Gi){var d=Gi[b];d.unsubscribe(Li(a,void 0),a.j[c]);0>=d.U()&&(d.dispose(),delete Gi[b])}delete a.j[c]}
function Pi(a,b){Mb(a,"tooltip-text",b)}
;function Qi(){Ki.call(this,"tooltip");this.f=0;this.h={}}
y(Qi,Ki);ba(Qi);g=Qi.prototype;g.register=function(){Ni(this,"mouseover",this.ub);Ni(this,"mouseout",this.La);Ni(this,"focus",this.sc);Ni(this,"blur",this.mc);Ni(this,"click",this.La);Ni(this,"touchstart",this.Vc);Ni(this,"touchend",this.Cb);Ni(this,"touchcancel",this.Cb)};
g.unregister=function(){Oi(this,"mouseover",this.ub);Oi(this,"mouseout",this.La);Oi(this,"focus",this.sc);Oi(this,"blur",this.mc);Oi(this,"click",this.La);Oi(this,"touchstart",this.Vc);Oi(this,"touchend",this.Cb);Oi(this,"touchcancel",this.Cb);this.dispose();Qi.H.unregister.call(this)};
g.dispose=function(){for(var a in this.h)this.La(this.h[a]);this.h={}};
g.ub=function(a){if(!(this.f&&1E3>x()-this.f)){var b=parseInt(D(a,"tooltip-hide-timer"),10);b&&(Ob(a,"tooltip-hide-timer"),K(b));var b=v(function(){Ri(this,a);Ob(a,"tooltip-show-timer")},this),c=parseInt(D(a,"tooltip-show-delay"),10)||0,b=J(b,c);
Mb(a,"tooltip-show-timer",b.toString());a.title&&(Pi(a,Si(a)),a.title="");b=ia(a).toString();this.h[b]=a}};
g.La=function(a){var b=parseInt(D(a,"tooltip-show-timer"),10);b&&(K(b),Ob(a,"tooltip-show-timer"));b=v(function(){if(a){var b=ve(Ti(this,a));b&&(Ui(b),b&&b.parentNode&&b.parentNode.removeChild(b),Ob(a,"content-id"));(b=ve(Ti(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Ob(a,"tooltip-hide-timer")},this);
b=J(b,50);Mb(a,"tooltip-hide-timer",b.toString());if(b=D(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.h[b]};
g.sc=function(a){this.f=0;this.ub(a)};
g.mc=function(a){this.f=0;this.La(a)};
g.Vc=function(a,b,c){c.changedTouches&&(this.f=0,a=Ii(b,Li(this),c.changedTouches[0].target),this.ub(a))};
g.Cb=function(a,b,c){c.changedTouches&&(this.f=x(),a=Ii(b,Li(this),c.changedTouches[0].target),this.La(a))};
function Vi(a,b){Pi(a,b);var c=D(a,"content-id");(c=ve(c))&&Fe(c,b)}
function Si(a){return D(a,"tooltip-text")||a.title}
function Ri(a,b){if(b){var c=Si(b);if(c){var d=ve(Ti(a,b));if(!d){d=document.createElement("div");d.id=Ti(a,b);d.className=Li(a,"tip");var e=document.createElement("div");e.className=Li(a,"tip-body");var f=document.createElement("div");f.className=Li(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=Li(a,"tip-content");var k=Wi(a,b),l=Ti(a,b,"content");h.id=l;Mb(b,"content-id",l);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var l=Ie(b),n=Ti(a,b,"arialabel"),f=document.createElement("div");me(f,Li(a,"arialabel"));f.id=n;"rtl"==document.body.getAttribute("dir")?Fe(f,c+" "+l):Fe(f,l+" "+c);b.setAttribute("aria-labelledby",n);l=Re()||document.body;l.appendChild(f);l.appendChild(d);Vi(b,c);(c=parseInt(D(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",me(h,Li(a,"normal-wrap")));h=le(b,Li(a,"reverse"));Xi(a,b,d,e,k,h)||Xi(a,b,d,e,k,!h);var F=Li(a,"tip-visible");J(function(){me(d,F)},0)}}}}
function Xi(a,b,c,d,e,f){oe(c,Li(a,"tip-reverse"),f);var h=0;f&&(h=1);a=tf(b);f=new pe((a.width-10)/2,f?a.height:0);var k=ue(b),l=new pe(0,0),n;n=k?ue(k):document;n=!M||vd(9)||Ae(se(n).f)?n.documentElement:n.body;b!=n&&(n=rf(b),k=Be(se(k).f),l.x=n.left+k.x,l.y=n.top+k.y);f=new pe(l.x+f.x,l.y+f.y);f=f.clone();l=(h&8&&"rtl"==qf(c,"direction")?h^4:h)&-9;h=tf(c);k=h.clone();n=f.clone();k=k.clone();0!=l&&(l&4?n.x-=k.width+0:l&2&&(n.x-=k.width/2),l&1&&(n.y-=k.height+0));f=new nf(0,0,0,0);f.left=n.x;f.top=
n.y;f.width=k.width;f.height=k.height;k=new pe(f.left,f.top);k instanceof pe?(l=k.x,k=k.y):(l=k,k=void 0);c.style.left=sf(l,!1);c.style.top=sf(k,!1);k=new qe(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,f=ue(c),l=Ae(se(f).f),!M||ud("10")||l&&ud("8"))f=c.style,jd?f.MozBoxSizing="border-box":kd?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,l){if(M){l=wf(c,"paddingLeft");
k=wf(c,"paddingRight");n=wf(c,"paddingTop");var F=wf(c,"paddingBottom"),l=new mf(n,k,F,l)}else l=pf(c,"paddingLeft"),k=pf(c,"paddingRight"),n=pf(c,"paddingTop"),F=pf(c,"paddingBottom"),l=new mf(parseFloat(n),parseFloat(k),parseFloat(F),parseFloat(l));if(M&&!vd(9)){k=yf(c,"borderLeft");n=yf(c,"borderRight");var F=yf(c,"borderTop"),w=yf(c,"borderBottom"),k=new mf(F,n,w,k)}else k=pf(c,"borderLeftWidth"),n=pf(c,"borderRightWidth"),F=pf(c,"borderTopWidth"),w=pf(c,"borderBottomWidth"),k=new mf(parseFloat(F),
parseFloat(n),parseFloat(w),parseFloat(k));f.pixelWidth=h.width-k.left-l.left-l.right-k.right;f.pixelHeight=h.height-k.top-l.top-l.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;f=ze(window);1==c.nodeType?(c=rf(c),k=new pe(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new pe(c.clientX,c.clientY));c=tf(d);n=Math.floor(c.width/2);h=!!(f.height<k.y+a.height);a=!!(k.y<a.height);l=!!(k.x<n);f=!!(f.width<k.x+n);k=(c.width+3)/-2- -5;b=D(b,"force-tooltip-direction");if("left"==
b||l)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function Ti(a,b,c){a=Li(a);var d=b.__yt_uid_key;d||(d=Pe(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Wi(a,b){var c=null;md&&le(b,Li(a,"masked"))&&((c=ve("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Mf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=Li(a,"tip-mask")));return c}
function Ui(a){var b=ve("yt-uix-tooltip-shared-mask"),c=b&&Ne(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Nf(b),document.body.appendChild(b))}
;function Yi(){Ki.call(this,"subscription-button")}
y(Yi,Ki);ba(Yi);Yi.prototype.register=function(){Ni(this,"click",this.Nb);Mi(this,ti,this.Cc);Mi(this,ui,this.Bc);Mi(this,vi,this.he);Mi(this,yi,this.Cc);Mi(this,zi,this.Bc);Mi(this,Ai,this.ne);Mi(this,Ci,this.Ud);Mi(this,Di,this.Td)};
Yi.prototype.unregister=function(){Oi(this,"click",this.Nb);Yi.H.unregister.call(this)};
var Le={gc:"hover-enabled",ed:"yt-uix-button-subscribe",fd:"yt-uix-button-subscribed",Xe:"ypc-enabled",gd:"yt-uix-button-subscription-container",hd:"yt-subscription-button-disabled-mask-container"},Zi={Ye:"channel-external-id",jd:"subscriber-count-show-when-subscribed",kd:"subscriber-count-tooltip",ld:"subscriber-count-title",Ze:"href",hc:"is-subscribed",af:"parent-url",cf:"clicktracking",md:"style-type",ic:"subscription-id",ff:"target",od:"ypc-enabled"};g=Yi.prototype;
g.Nb=function(a){var b=D(a,"href"),c=Fi();if(b)a=D(a,"target")||"_self",window.open(b,a);else if(c){var b=D(a,"channel-external-id"),c=D(a,"clicktracking"),d;if(D(a,"ypc-enabled")){d=D(a,"ypc-item-type");var e=D(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=D(a,"parent-url");if(D(a,"is-subscribed")){var f=D(a,"subscription-id");S(xi,new oi(b,f,d,a,c,e))}else S(si,new mi(b,d,c,e))}else $i(this,a)};
g.Cc=function(a){this.Pa(a.f,this.Sc,!0)};
g.Bc=function(a){this.Pa(a.f,this.Sc,!1)};
g.he=function(a){this.Pa(a.f,this.Tc,!0,a.subscriptionId)};
g.ne=function(a){this.Pa(a.f,this.Tc,!1)};
g.Ud=function(a){this.Pa(a.f,this.ud)};
g.Td=function(a){this.Pa(a.f,this.sd)};
g.Tc=function(a,b,c){b?(Mb(a,Zi.hc,"true"),c&&Mb(a,Zi.ic,c)):(Ob(a,Zi.hc),Ob(a,Zi.ic));aj(a)};
g.Sc=function(a,b){var c;c=Ke(a);oe(c,Le.hd,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function aj(a){var b=D(a,Zi.md),c=!!D(a,"is-subscribed"),b="-"+b,d=Le.fd+b;oe(a,Le.ed+b,!c);oe(a,d,c);D(a,Zi.kd)&&!D(a,Zi.jd)&&(b=Li(Qi.getInstance()),oe(a,b,!c),a.title=c?"":D(a,Zi.ld));c?J(function(){me(a,Le.gc)},1E3):ne(a,Le.gc)}
g.ud=function(a){var b=!!D(a,"ypc-item-type"),c=!!D(a,"ypc-item-id");!D(a,"ypc-enabled")&&b&&c&&(me(a,"ypc-enabled"),Mb(a,Zi.od,"true"))};
g.sd=function(a){D(a,"ypc-enabled")&&(ne(a,"ypc-enabled"),Ob(a,"ypc-enabled"))};
function bj(a,b){var c=xe(Li(a));return La(c,function(a){return b==D(a,"channel-external-id")},a)}
g.pd=function(a,b,c){var d=$a(arguments,2);z(a,function(a){b.apply(this,Wa(a,d))},this)};
g.Pa=function(a,b,c){var d=bj(this,a),d=Wa([d],$a(arguments,1));this.pd.apply(this,d)};
function $i(a,b){var c=v(function(a){a.discoverable_subscriptions&&jc("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Nb(b)},a);
Ei(c,"subscribe")}
;var cj=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",cj,void 0);function dj(a,b){this.source=null;this.l=a||null;this.origin="*";this.D=window.document.location.protocol+"//"+window.document.location.hostname;this.w=b;this.j=this.f=this.h=this.o=null;O(window,"message",v(this.A,this))}
dj.prototype.A=function(a){var b=this.w||I("POST_MESSAGE_ORIGIN",void 0)||this.D;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.l||a.source==this.l)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,u(a)){try{a=yd(a)}catch(c){return}this.o=a.id;switch(a.event){case "listening":this.f&&(this.f(),this.f=null);break;case "command":this.h&&(this.j&&!Qa(this.j,a.func)||this.h(a.func,a.args))}}};
dj.prototype.sendMessage=function(a){this.source&&(a.id=this.o,a=N(a),this.source.postMessage(a,this.origin))};function ej(){}
;function fj(){}
y(fj,ej);fj.prototype.U=function(){var a=0;Sc(this.va(!0),function(){a++});
return a};
fj.prototype.clear=function(){var a=Tc(this.va(!0)),b=this;z(a,function(a){b.remove(a)})};function gj(a){this.f=a}
y(gj,fj);g=gj.prototype;g.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.f.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.f.removeItem(a)};
g.U=function(){return this.f.length};
g.va=function(a){var b=0,c=this.f,d=new Qc;d.next=function(){if(b>=c.length)throw Pc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.f.clear()};
g.key=function(a){return this.f.key(a)};function hj(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
y(hj,gj);function ij(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
y(ij,gj);function jj(a){this.f=a}
jj.prototype.set=function(a,b){p(b)?this.f.set(a,N(b)):this.f.remove(a)};
jj.prototype.get=function(a){var b;try{b=this.f.get(a)}catch(c){return}if(null!==b)try{return yd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
jj.prototype.remove=function(a){this.f.remove(a)};function kj(a){this.f=a}
y(kj,jj);function lj(a){this.data=a}
function mj(a){return!p(a)||a instanceof lj?a:new lj(a)}
kj.prototype.set=function(a,b){kj.H.set.call(this,a,mj(b))};
kj.prototype.h=function(a){a=kj.H.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
kj.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function nj(a){this.f=a}
y(nj,kj);function oj(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
nj.prototype.set=function(a,b,c){if(b=mj(b)){if(c){if(c<x()){nj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}nj.H.set.call(this,a,b)};
nj.prototype.h=function(a,b){var c=nj.H.h.call(this,a);if(c)if(!b&&oj(c))nj.prototype.remove.call(this,a);else return c};function pj(a){this.f=a}
y(pj,nj);function qj(a,b){var c=[];Sc(b,function(a){var b;try{b=pj.prototype.h.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?oj(b)&&c.push(a):c.push(a)},a);
return c}
function rj(a,b){var c=qj(a,b);z(c,function(a){pj.prototype.remove.call(this,a)},a)}
function sj(){var a=tj;rj(a,a.f.va(!0))}
;function U(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?tj:uj)&&window.JSON){u(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function vj(a){if(!uj&&!tj||!window.JSON)return null;var b;try{b=uj.get(a)}catch(c){}if(!u(b))try{b=tj.get(a)}catch(c){}if(!u(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function wj(a){uj&&uj.remove(a);tj&&tj.remove(a)}
var tj,xj=new hj;tj=xj.isAvailable()?new pj(xj):null;var uj,yj=new ij;uj=yj.isAvailable()?new pj(yj):null;function zj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Aj(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=a;c=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);b.videoId=c&&c[2]?c[2]:null;return Bj(a)}
function Bj(a,b,c){if(ha(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Cj(a,b,c,d){if(ha(a)&&!da(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function Dj(a){var b=a.video_id||a.videoId;if(u(b)){var c=vj("yt-player-two-stage-token")||{},d=vj("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];U("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function Ej(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
var Fj=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Gj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],Hj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],Ij=Ej()?Hj.concat(Gj):Gj.concat(Hj);function Jj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function Kj(a){if(a>=Ij.length)Lj();else{var b=Ij[a],c="chrome-extension://"+b+Fj;0<=Gj.indexOf(b)?Jj(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Mj(c,Lj)):Kj(a+1)}):Mj(c,function(){Kj(a+1)})}}
function Mj(a,b){var c=document.createElement("script");c.onerror=b;c.src=a;(document.head||document.documentElement).appendChild(c)}
function Lj(){var a=window.__onGCastApiAvailable;a&&"function"==typeof a&&a(!1,"No cast extension found")}
function Nj(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){a({command:"cast.sender.init"});return}}window.chrome?(a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=Ej()?"50":"",Mj("//www.gstatic.com/eureka/clank"+a+Fj,Lj)):Kj(0)):Lj()}
;var Oj=x(),Pj=null,Qj=Array(50),Rj=-1,Sj=!1;function Tj(a){Uj();Pj.push(a);Vj(Pj)}
function Wj(a){var b=r("yt.mdx.remote.debug.handlers_");Ua(b||[],a)}
function Xj(a,b){Uj();var c=Pj,d=Yj(a,String(b));0==c.length?Zj(d):(Vj(c),z(c,function(a){a(d)}))}
function Uj(){Pj||(Pj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",Pj,void 0))}
function Zj(a){var b=(Rj+1)%50;Rj=b;Qj[b]=a;Sj||(Sj=49==b)}
function Vj(a){var b=Qj;if(b[0]){var c=Rj,d=Sj?c:-1;do{var d=(d+1)%50,e=b[d];z(a,function(a){a(e)})}while(d!=c);
Qj=Array(50);Rj=-1;Sj=!1}}
function Yj(a,b){var c=(x()-Oj)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function ak(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function bk(a,b){return!!b&&(a.id==b||a.uuid==b)}
function ck(a,b){return a||b?!a!=!b?!1:a.id==b.id:!0}
function dk(a,b){return a||b?!a!=!b?!1:a.id==b.id&&a.token==b.token&&a.name==b.name&&a.uuid==b.uuid:!0}
function ek(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function fk(a){return new ak(a)}
function gk(a){return da(a)?B(a,fk):[]}
function hk(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function ik(a){return da(a)?"["+B(a,hk).join(",")+"]":"null"}
;var jk={We:"atp",ef:"ska",bf:"que",$e:"mus",df:"sus"};function kk(a){this.l=this.j="";this.f="/api/lounge";this.h=!0;a=a||document.location.href;var b=Number(a.match(Gd)[4]||null)||null||"";b&&(this.l=":"+b);this.j=Hd(a)||"";a=vb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ha(a,"10.0")&&(this.h=!1))}
function lk(a,b,c,d){var e=a.f;if(p(d)?d:a.h)e="https://"+a.j+a.l+a.f;return Pd(e+b,c||{})}
function mk(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,X:oa(a.w,d,!0),onError:oa(a.o,e),Ma:oa(a.A,e)};c&&(a.L=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Zd(b,a)}
kk.prototype.w=function(a,b,c,d){b?a(d):a({text:c.responseText})};
kk.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
kk.prototype.A=function(a){a(Error("request timed out"))};function nk(a){this.f=this.name=this.id="";this.status="UNKNOWN";a&&(this.id=a.id||"",this.name=a.name||"",this.f=a.activityId||"",this.status=a.status||"UNKNOWN")}
function ok(a){return{id:a.id,name:a.name,activityId:a.f,status:a.status}}
nk.prototype.toString=function(){return"{id:"+this.id+",name:"+this.name+",activityId:"+this.f+",status:"+this.status+"}"};
function pk(a){a=a||[];return"["+B(a,function(a){return a?a.toString():"null"}).join(",")+"]"}
;function qk(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function rk(a,b){return Oa(a,function(a){return a.key==b})}
function sk(a){return B(a,function(a){return{key:a.id,name:a.name}})}
function tk(a){return B(a,function(a){return ok(a)})}
function uk(a){return B(a,function(a){return new nk(a)})}
function vk(a,b){return a||b?a&&b?a.id==b.id&&a.name==b.name:!1:!0}
function wk(a,b){return Oa(a,function(a){return a.id==b})}
function xk(a,b){return Oa(a,function(a){return ck(a,b)})}
function yk(a,b){return Oa(a,function(a){return bk(a,b)})}
;function V(){E.call(this);this.l=new H;dc(this,oa(ec,this.l))}
y(V,E);V.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.l.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.l.unsubscribe(a,b,c)};
V.prototype.na=function(a){return this.isDisposed()?!1:this.l.na(a)};
V.prototype.C=function(a,b){return this.isDisposed()?!1:this.l.C.apply(this.l,arguments)};function zk(a){V.call(this);this.A=a;this.screens=[]}
y(zk,V);zk.prototype.$=function(){return this.screens};
zk.prototype.contains=function(a){return!!xk(this.screens,a)};
zk.prototype.get=function(a){return a?yk(this.screens,a):null};
function Ak(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function Bk(a,b){var c=a.screens.length!=b.length;a.screens=La(a.screens,function(a){return!!xk(b,a)});
for(var d=0,e=b.length;d<e;d++)c=Ak(a,b[d])||c;return c}
function Ck(a,b){var c=a.screens.length;a.screens=La(a.screens,function(a){return!ck(a,b)});
return a.screens.length<c}
zk.prototype.info=function(a){Xj(this.A,a)};function Dk(a,b,c,d){V.call(this);this.D=a;this.A=b;this.o=c;this.w=d;this.j=0;this.f=null;this.h=NaN}
y(Dk,V);var Ek=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=Dk.prototype;g.start=function(){!this.f&&isNaN(this.h)&&this.Mc()};
g.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.h)||(K(this.h),this.h=NaN)};
g.F=function(){this.stop();Dk.H.F.call(this)};
g.Mc=function(){this.h=NaN;this.f=Zd(lk(this.D,"/pairing/get_screen"),{method:"POST",L:{pairing_code:this.A},timeout:5E3,X:v(this.Ne,this),onError:v(this.Me,this),Ma:v(this.Oe,this)})};
g.Ne=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.o;c.name=this.w;this.C("pairingComplete",new ak(c))};
g.Me=function(a){this.f=null;a.status&&404==a.status?this.j>=Ek.length?this.C("pairingFailed",Error("DIAL polling timed out")):(a=Ek[this.j],this.h=J(v(this.Mc,this),a),this.j++):this.C("pairingFailed",Error("Server error "+a.status))};
g.Oe=function(){this.f=null;this.C("pairingFailed",Error("Server not responding"))};function Fk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new cd;this.experiments=new cd;this.theme="u";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();dd(this.capabilities,La(b.split(","),oa(gb,jk)));a=a.experiments||"";this.experiments.clear();dd(this.experiments,
a.split(","))}}
Fk.prototype.equals=function(a){return a?this.id==a.id:!1};var Gk;function Hk(){var a=Ik(),b=Jk();Qa(a,b);if(Kk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=cb(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Za(c,-(d+1),0,b)}a=Lk(a);if(0==a.length)try{df.remove("remote_sid","/","youtube.com")}catch(l){}else try{ef("remote_sid",a.join(","),-1)}catch(l){}}
function Ik(){var a=vj("yt-remote-connected-devices")||[];a.sort(cb);return a}
function Lk(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return B(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function Mk(a){U("yt-remote-connected-devices",a,86400)}
function Jk(){if(Nk)return Nk;var a=vj("yt-remote-device-id");a||(a=qk(),U("yt-remote-device-id",a,31536E3));for(var b=Ik(),c=1,d=a;Qa(b,d);)c++,d=a+"#"+c;return Nk=d}
function Ok(){return vj("yt-remote-session-browser-channel")}
function Kk(){return vj("yt-remote-session-screen-id")}
function Pk(a){5<a.length&&(a=a.slice(a.length-5));var b=B(Qk(),function(a){return a.loungeToken}),c=B(a,function(a){return a.loungeToken});
Na(c,function(a){return!Qa(b,a)})&&Rk();
U("yt-remote-local-screens",a,31536E3)}
function Qk(){return vj("yt-remote-local-screens")||[]}
function Rk(){U("yt-remote-lounge-token-expiration",!0,86400)}
function Sk(){return!vj("yt-remote-lounge-token-expiration")}
function Tk(a){U("yt-remote-online-screens",a,60)}
function Uk(){return vj("yt-remote-online-screens")||[]}
function Vk(a){U("yt-remote-online-dial-devices",a,30)}
function Wk(){return vj("yt-remote-online-dial-devices")||[]}
function Xk(a,b){U("yt-remote-session-browser-channel",a);U("yt-remote-session-screen-id",b);var c=Ik(),d=Jk();Qa(c,d)||c.push(d);Mk(c);Hk()}
function Yk(a){a||(wj("yt-remote-session-screen-id"),wj("yt-remote-session-video-id"));Hk();a=Ik();Ua(a,Jk());Mk(a)}
function Zk(){if(!Gk){var a;a=new hj;(a=a.isAvailable()?a:null)&&(Gk=new jj(a))}return Gk?!!Gk.get("yt-remote-use-staging-server"):!1}
var Nk="";function $k(a){zk.call(this,"LocalScreenService");this.h=a;this.f=NaN;al(this);this.info("Initializing with "+ik(this.screens))}
y($k,zk);g=$k.prototype;g.start=function(){al(this)&&this.C("screenChange");Sk()&&bl(this);K(this.f);this.f=J(v(this.start,this),1E4)};
g.Hb=function(a,b){al(this);Ak(this,a);cl(this,!1);this.C("screenChange");b(a);a.token||bl(this)};
g.remove=function(a,b){var c=al(this);Ck(this,a)&&(cl(this,!1),c=!0);b(a);c&&this.C("screenChange")};
g.Eb=function(a,b,c,d){var e=al(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,cl(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.C("screenChange")};
g.F=function(){K(this.f);$k.H.F.call(this)};
function bl(a){if(a.screens.length){var b=B(a.screens,function(a){return a.id}),c=lk(a.h,"/pairing/get_lounge_token_batch");
mk(a.h,c,{screen_ids:b.join(",")},v(a.Dd,a),v(a.Cd,a))}}
g.Dd=function(a){al(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}cl(this,!b);b&&Xj(this.A,"Missed "+b+" lounge tokens.")};
g.Cd=function(a){Xj(this.A,"Requesting lounge tokens failed: "+a)};
function al(a){var b=gk(Qk()),b=La(b,function(a){return!a.uuid});
return Bk(a,b)}
function cl(a,b){Pk(B(a.screens,ek));b&&Rk()}
;function dl(a,b){V.call(this);this.w=b;for(var c=vj("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.w(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=Qa(c,k)}this.f=d;this.A=a;this.j=this.o=NaN;this.h=null;el("Initialized with "+N(this.f))}
y(dl,V);g=dl.prototype;g.start=function(){var a=parseInt(vj("yt-remote-fast-check-period")||"0",10);(this.o=x()-144E5<a?0:a)?fl(this):(this.o=x()+3E5,U("yt-remote-fast-check-period",this.o),this.ac())};
g.isEmpty=function(){return pb(this.f)};
g.update=function(){el("Updating availability on schedule.");var a=this.w(),b=eb(this.f,function(b,d){return b&&!!yk(a,d)},this);
gl(this,b)};
function hl(a,b,c){var d=lk(a.A,"/pairing/get_screen_availability");mk(a.A,d,{lounge_token:b.token},v(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),v(function(){c(!1)},a))}
g.F=function(){K(this.j);this.j=NaN;this.h&&(this.h.abort(),this.h=null);dl.H.F.call(this)};
function gl(a,b){var c;a:if(fb(b)!=fb(a.f))c=!1;else{c=kb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(el("Updated online screens: "+N(a.f)),a.f=b,a.C("screenChange"));il(a)}
function fl(a){isNaN(a.j)||K(a.j);a.j=J(v(a.ac,a),0<a.o&&a.o<x()?2E4:1E4)}
g.ac=function(){K(this.j);this.j=NaN;this.h&&this.h.abort();var a=jl(this);if(fb(a)){var b=lk(this.A,"/pairing/get_screen_availability"),c={lounge_token:kb(a).join(",")};this.h=mk(this.A,b,c,v(this.fe,this,a),v(this.ee,this))}else gl(this,{}),fl(this)};
g.fe=function(a,b){this.h=null;var c=kb(jl(this));if(ab(c,kb(a))){for(var c=b.screens||[],d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;gl(this,d);fl(this)}else this.M("Changing Screen set during request."),this.ac()};
g.ee=function(a){this.M("Screen availability failed: "+a);this.h=null;fl(this)};
function el(a){Xj("OnlineScreenService",a)}
g.M=function(a){Xj("OnlineScreenService",a)};
function jl(a){var b={};z(a.w(),function(a){a.token?b[a.token]=a.id:this.M("Requesting availability of screen w/o lounge token.")});
return b}
function il(a){var b=kb(eb(a.f,function(a){return a}));
b.sort(cb);b.length?U("yt-remote-online-screen-ids",b.join(","),60):wj("yt-remote-online-screen-ids");a=La(a.w(),function(a){return!!this.f[a.id]},a);
Tk(B(a,ek))}
;function W(a){zk.call(this,"ScreenService");this.w=a;this.f=this.h=null;this.j=[];this.o={};kl(this)}
y(W,zk);g=W.prototype;g.start=function(){this.h.start();this.f.start();this.screens.length&&(this.C("screenChange"),this.f.isEmpty()||this.C("onlineScreenChange"))};
g.Hb=function(a,b,c){this.h.Hb(a,b,c)};
g.remove=function(a,b,c){this.h.remove(a,b,c);this.f.update()};
g.Eb=function(a,b,c,d){this.h.contains(a)?this.h.Eb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Xj(this.A,a),d(Error(a)))};
g.$=function(a){return a?this.screens:Wa(this.screens,La(this.j,function(a){return!this.contains(a)},this))};
g.Yc=function(){return La(this.$(!0),function(a){return!!this.f.f[a.id]},this)};
function ll(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.o[b]);var h=a.$();if(h=(c?yk(h,c):null)||yk(h,b)){h.uuid=b;var k=ml(a,h);hl(a.f,k,function(a){e(a?k:null)})}else c?nl(a,c,v(function(a){var f=ml(this,new ak({name:d,
screenId:c,loungeToken:a,dialId:b||""}));hl(this.f,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Zc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new Dk(this.w,a,b,c);f.subscribe("pairingComplete",v(function(a){ec(f);d(ml(this,a))},this));
f.subscribe("pairingFailed",function(a){ec(f);e(a)});
f.start();return v(f.stop,f)};
function ol(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.wc=function(a,b){for(var c=2,d=b(a,c);ol(this,d);){c++;if(20<c)return a;d=b(a,c)}return d};
g.Qe=function(a,b,c,d){Zd(lk(this.w,"/pairing/get_screen"),{method:"POST",L:{pairing_code:a},timeout:5E3,X:v(function(a,d){var h=new ak(d.screen||{});if(!h.name||ol(this,h.name))h.name=this.wc(h.name,b);c(ml(this,h))},this),
onError:v(function(a){d(Error("pairing request failed: "+a.status))},this),
Ma:v(function(){d(Error("pairing request timed out."))},this)})};
g.F=function(){ec(this.h);ec(this.f);W.H.F.call(this)};
function nl(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={L:{screen_ids:b},method:"POST",context:a,X:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Zd(lk(a.w,"/pairing/get_lounge_token_batch"),e)}
function pl(a){a.screens=a.h.$();var b=a.o,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+ik(a.screens))}
g.Ed=function(){pl(this);this.C("screenChange");this.f.update()};
function kl(a){ql(a);a.h=new $k(a.w);a.h.subscribe("screenChange",v(a.Ed,a));pl(a);a.j=gk(vj("yt-remote-automatic-screen-cache")||[]);ql(a);a.info("Initializing automatic screens: "+ik(a.j));a.f=new dl(a.w,v(a.$,a,!0));a.f.subscribe("screenChange",v(function(){this.C("onlineScreenChange")},a))}
function ml(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=yk(a.j,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.j.push(b),U("yt-remote-automatic-screen-cache",B(a.j,ek)));ql(a);a.o[b.uuid]=b.id;U("yt-remote-device-id-map",a.o,31536E3);return b}
function ql(a){a.o=vj("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function rl(a,b,c){V.call(this);this.R=c;this.J=a;this.h=b;this.j=null}
y(rl,V);g=rl.prototype;g.wb=function(a){this.j=a;this.C("sessionScreen",this.j)};
g.aa=function(a){this.isDisposed()||(a&&sl(this,""+a),this.j=null,this.C("sessionScreen",null))};
g.info=function(a){Xj(this.R,a)};
function sl(a,b){Xj(a.R,b)}
g.ad=function(){return null};
g.cc=function(a){var b=this.h;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,v(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),v(function(){sl(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.F=function(){this.cc("");rl.H.F.call(this)};function tl(a,b){rl.call(this,a,b,"CastSession");this.f=null;this.w=0;this.o=null;this.D=v(this.Re,this);this.A=v(this.qe,this);this.w=J(v(function(){ul(this,null)},this),12E4)}
y(tl,rl);g=tl.prototype;g.bc=function(a){if(this.f){if(this.f==a)return;sl(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.D);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.A)}this.f=a;this.f.addUpdateListener(this.D);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.A);this.o&&vl(this);wl(this,"getMdxSessionStatus")};
g.Sa=function(a){this.info("launchWithParams: "+N(a));this.o=a;this.f&&vl(this)};
g.stop=function(){this.f?this.f.stop(v(function(){this.aa()},this),v(function(){this.aa(Error("Failed to stop receiver app."))},this)):this.aa(Error("Stopping cast device witout session."))};
g.cc=t;g.F=function(){this.info("disposeInternal");K(this.w);this.w=0;this.f&&(this.f.removeUpdateListener(this.D),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.A));this.f=null;tl.H.F.call(this)};
function vl(a){var b=a.o.videoId||a.o.videoIds[a.o.index];b&&wl(a,"flingVideo",{videoId:b,currentTime:a.o.currentTime||0});a.o=null}
function wl(a,b,c){a.info("sendYoutubeMessage_: "+b+" "+N(c));var d={};d.type=b;c&&(d.data=c);a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",d,t,v(function(){sl(this,"Failed to send message: "+b+".")},a)):sl(a,"Sending yt message without session: "+N(d))}
g.qe=function(a,b){if(!this.isDisposed())if(b){var c=zd(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+N(c));switch(d){case "mdxSessionStatus":ul(this,c.screenId);break;default:sl(this,"Unknown youtube message: "+d)}}else sl(this,"Unable to parse message.")}else sl(this,"No data in message.")};
function ul(a,b){K(a.w);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.j||a.j.id!=b){var c=v(a.wb,a),d=v(a.aa,a);a.uc(b,c,d,5)}}else a.aa(Error("Waiting for session status timed out."))}
g.uc=function(a,b,c,d){ll(this.J,this.h.label,a,this.h.friendlyName,v(function(e){e?b(e):0<=d?(sl(this,"Screen "+a+" appears to be offline. "+d+" retries left."),J(v(this.uc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.ad=function(){return this.f};
g.Re=function(a){this.isDisposed()||a||(sl(this,"Cast session died."),this.aa())};function xl(a,b){rl.call(this,a,b,"DialSession");this.w=this.I=null;this.O="";this.o=null;this.D=t;this.A=NaN;this.P=v(this.Ue,this);this.f=t}
y(xl,rl);g=xl.prototype;g.bc=function(a){this.w=a;this.w.addUpdateListener(this.P)};
g.Sa=function(a){this.o=a;this.D()};
g.stop=function(){this.f();this.f=t;K(this.A);this.w?this.w.stop(v(this.aa,this,null),v(this.aa,this,"Failed to stop DIAL device.")):this.aa()};
g.F=function(){this.f();this.f=t;K(this.A);this.w&&this.w.removeUpdateListener(this.P);this.w=null;xl.H.F.call(this)};
function yl(a){a.f=a.J.Zc(a.O,a.h.label,a.h.friendlyName,v(function(a){this.f=t;this.wb(a)},a),v(function(a){this.f=t;
this.aa(a)},a))}
g.Ue=function(a){this.isDisposed()||a||(sl(this,"DIAL session died."),this.f(),this.f=t,this.aa())};
function zl(a){var b={};b.pairingCode=a.O;if(a.o){var c=a.o.index||0,d=a.o.currentTime||0;b.v=a.o.videoId||a.o.videoIds[c];b.t=d}Zk()&&(b.env_useStageMdx=1);return Nd(b)}
g.Yb=function(a){this.O=qk();if(this.o){var b=new chrome.cast.DialLaunchResponse(!0,zl(this));a(b);yl(this)}else this.D=v(function(){K(this.A);this.D=t;this.A=NaN;var b=new chrome.cast.DialLaunchResponse(!0,zl(this));a(b);yl(this)},this),this.A=J(v(function(){this.D()},this),100)};
g.Fd=function(a,b){ll(this.J,this.I.receiver.label,a,this.h.friendlyName,v(function(a){a&&a.token?(this.wb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Yb(b)},this),v(function(a){sl(this,"Failed to get DIAL screen: "+a);
this.Yb(b)},this))};function Al(a,b){rl.call(this,a,b,"ManualSession");this.f=J(v(this.Sa,this,null),150)}
y(Al,rl);Al.prototype.stop=function(){this.aa()};
Al.prototype.bc=t;Al.prototype.Sa=function(){K(this.f);this.f=NaN;var a=yk(this.J.$(),this.h.label);a?this.wb(a):this.aa(Error("No such screen"))};
Al.prototype.F=function(){K(this.f);this.f=NaN;Al.H.F.call(this)};function Bl(a){V.call(this);this.h=a;this.f=null;this.w=!1;this.j=[];this.o=v(this.ce,this)}
y(Bl,V);g=Bl.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,v(this.Gc,this),v(this.de,this),d,e);c.customDialLaunchCallback=v(this.Sd,this);chrome.cast.initialize(c,v(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.o),
Tj(Cl),this.h.subscribe("onlineScreenChange",v(this.$c,this)),this.j=Dl(this),chrome.cast.setCustomReceivers(this.j,t,v(function(a){this.M("Failed to set initial custom receivers: "+N(a))},this)),this.C("yt-remote-cast2-availability-change",El(this)),b(!0))},this),v(function(a){this.M("Failed to initialize API: "+N(a));
b(!1)},this))};
g.De=function(a,b){Fl("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.j;if(!a||c&&c.id!=a)Fl("Unsetting old screen status: "+this.f.h.friendlyName),ec(this.f),this.f=null}if(a&&b){if(!this.f){c=yk(this.h.$(),a);if(!c){Fl("setConnectedScreenStatus: Unknown screen.");return}var d=Gl(this,c);d||(Fl("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.j.push(d),chrome.cast.setCustomReceivers(this.j,
t,v(function(a){this.M("Failed to set initial custom receivers: "+N(a))},this)));
Fl("setConnectedScreenStatus: new active receiver: "+d.friendlyName);Hl(this,new Al(this.h,d),!0)}this.f.cc(b)}else Fl("setConnectedScreenStatus: no screen.")};
function Gl(a,b){return b?Oa(a.j,function(a){return bk(b,a.label)},a):null}
g.Ee=function(a){this.isDisposed()?this.M("Setting connection data on disposed cast v2"):this.f?this.f.Sa(a):this.M("Setting connection data without a session")};
g.Te=function(){this.isDisposed()?this.M("Stopping session on disposed cast v2"):this.f?(this.f.stop(),ec(this.f),this.f=null):Fl("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(v(this.Gc,this),v(this.ge,this))};
g.F=function(){this.h.unsubscribe("onlineScreenChange",v(this.$c,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.o);Wj(Cl);ec(this.f);Bl.H.F.call(this)};
function Fl(a){Xj("Controller",a)}
g.M=function(a){Xj("Controller",a)};
function Cl(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function El(a){return a.w||!!a.j.length||!!a.f}
function Hl(a,b,c){ec(a.f);(a.f=b)?(c?a.C("yt-remote-cast2-receiver-resumed",b.h):a.C("yt-remote-cast2-receiver-selected",b.h),b.subscribe("sessionScreen",v(a.Hc,a,b)),b.j?a.C("yt-remote-cast2-session-change",b.j):c&&a.f.Sa(null)):a.C("yt-remote-cast2-session-change",null)}
g.Hc=function(a,b){this.f==a&&(b||Hl(this,null),this.C("yt-remote-cast2-session-change",b))};
g.ce=function(a,b){if(!this.isDisposed())if(a)switch(Fl("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.h.label!=a.label)Fl("onReceiverAction_: Stopping active receiver: "+this.f.h.friendlyName),this.f.stop();else{Fl("onReceiverAction_: Casting to active receiver.");this.f.j&&this.C("yt-remote-cast2-session-change",this.f.j);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:Hl(this,new Al(this.h,a));break;case chrome.cast.ReceiverType.DIAL:Hl(this,
new xl(this.h,a));break;case chrome.cast.ReceiverType.CAST:Hl(this,new tl(this.h,a));break;default:this.M("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.h.label==a.label?this.f.stop():this.M("Stopping receiver w/o session: "+a.friendlyName)}else this.M("onReceiverAction_ called without receiver.")};
g.Sd=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.M("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.h:null;if(!c||c.label!=b.label)return this.M("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.j)return Fl("Reselecting dial screen."),
this.C("yt-remote-cast2-session-change",this.f.j),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.M('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);Hl(this,new xl(this.h,b))}b=this.f;b.I=a;return b.I.appState==chrome.cast.DialAppState.RUNNING?new Promise(v(b.Fd,b,(b.I.extraData||{}).screenId||null)):new Promise(v(b.Yb,b))};
g.Gc=function(a){if(!this.isDisposed()){Fl("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)Fl("Got resumed cast session before resumed mdx connection."),Hl(this,new tl(this.h,b),!0);else{this.M("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.h,d=yk(this.h.$(),c.label);d&&bk(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(Fl("onSessionEstablished_: manual to cast session change "+b.friendlyName),ec(this.f),this.f=new tl(this.h,b),this.f.subscribe("sessionScreen",v(this.Hc,this,this.f)),this.f.Sa(null));this.f.bc(a)}}};
g.Se=function(){return this.f?this.f.ad():null};
g.ge=function(a){this.isDisposed()||(this.M("Failed to estabilish a session: "+N(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&Hl(this,null))};
g.de=function(a){Fl("Receiver availability updated: "+a);if(!this.isDisposed()){var b=El(this);this.w=a==chrome.cast.ReceiverAvailability.AVAILABLE;El(this)!=b&&this.C("yt-remote-cast2-availability-change",El(this))}};
function Dl(a){var b=a.h.Yc(),c=a.f&&a.f.h;a=B(b,function(a){c&&bk(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,f=Gl(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.$c=function(){if(!this.isDisposed()){var a=El(this);this.j=Dl(this);Fl("Updating custom receivers: "+N(this.j));chrome.cast.setCustomReceivers(this.j,t,v(function(){this.M("Failed to set custom receivers.")},this));
var b=El(this);b!=a&&this.C("yt-remote-cast2-availability-change",b)}};
Bl.prototype.setLaunchParams=Bl.prototype.Ee;Bl.prototype.setConnectedScreenStatus=Bl.prototype.De;Bl.prototype.stopSession=Bl.prototype.Te;Bl.prototype.getCastSession=Bl.prototype.Se;Bl.prototype.requestSession=Bl.prototype.requestSession;Bl.prototype.init=Bl.prototype.init;Bl.prototype.dispose=Bl.prototype.dispose;function Il(a,b,c){Jl()?Ll(a)&&(Ml(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Nl(b):(window.__onGCastApiAvailable=function(a,c){a?Nl(b):(Ol("Failed to load cast API: "+c),Pl(!1),Ml(!1),wj("yt-remote-cast-available"),wj("yt-remote-cast-receiver"),Ql(),b(!1))},c?Cc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Nj())):Kl("Cannot initialize because not running Chrome")}
function Ql(){Kl("dispose");var a=Rl();a&&a.dispose();Sl=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);Tl(!1);yc(Ul);Ul.length=0}
function Vl(){return!!vj("yt-remote-cast-installed")}
function Wl(){var a=vj("yt-remote-cast-receiver");return a?Ba(a.friendlyName):null}
function Xl(){Kl("clearCurrentReciever");wj("yt-remote-cast-receiver")}
function Yl(){Vl()?Rl()?Zl()?(Kl("Requesting cast selector."),Sl.requestSession()):(Kl("Wait for cast API to be ready to request the session."),Ul.push(wc("yt-remote-cast2-api-ready",Yl))):Ol("requestCastSelector: Cast is not initialized."):Ol("requestCastSelector: Cast API is not installed!")}
function $l(a){Zl()?Rl().setLaunchParams(a):Ol("setLaunchParams called before ready.")}
function am(a,b){Zl()?Rl().setConnectedScreenStatus(a,b):Ol("setConnectedScreenStatus called before ready.")}
var Sl=null;function Jl(){var a;a=0<=vb.search(/\ (CrMo|Chrome|CriOS)\//);return Df||a}
function Ll(a){var b=!1;if(!Sl){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new Bl(a),c.subscribe("yt-remote-cast2-availability-change",function(a){U("yt-remote-cast-available",a);L("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){Kl("onReceiverSelected: "+a.friendlyName);
U("yt-remote-cast-receiver",a);L("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){Kl("onReceiverResumed: "+a.friendlyName);
U("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){Kl("onSessionChange: "+hk(a));
a||wj("yt-remote-cast-receiver");L("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
Sl=c}Kl("cloudview.createSingleton_: "+b);return b}
function Rl(){Sl||(Sl=r("yt.mdx.remote.cloudview.instance_"));return Sl}
function Nl(a){Pl(!0);Ml(!1);Sl.init(!0,function(b){b?(Tl(!0),L("yt-remote-cast2-api-ready")):(Ol("Failed to initialize cast API."),Pl(!1),wj("yt-remote-cast-available"),wj("yt-remote-cast-receiver"),Ql());a(b)})}
function Kl(a){Xj("cloudview",a)}
function Ol(a){Xj("cloudview",a)}
function Pl(a){Kl("setCastInstalled_ "+a);U("yt-remote-cast-installed",a)}
function Zl(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function Tl(a){Kl("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function Ml(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var Ul=[];function bm(){if(!("cast"in window))return!1;var a=window.cast||{};return"ActivityStatus"in a&&"Api"in a&&"LaunchRequest"in a&&"Receiver"in a}
function cm(a){Xj("CAST",a)}
function dm(a){var b=em();b&&b.logMessage&&b.logMessage(a)}
function fm(a){if(a.event.source==window&&a.event.data&&"CastApi"==a.event.data.source&&"Hello"==a.event.data.event)for(;gm.length;)gm.shift()()}
function hm(){if(!r("yt.mdx.remote.castv2_")&&!im&&(0==Sa.length&&Ya(Sa,Wk()),bm())){var a=em();a?(a.removeReceiverListener("YouTube",jm),a.addReceiverListener("YouTube",jm),cm("API initialized in the other binary")):(a=new cast.Api,km(a),a.addReceiverListener("YouTube",jm),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(function(){J(function(){window.location.reload(!0)},1E3)}),Tj(dm),cm("API initialized"));
im=!0}}
function lm(){var a=em();a&&(cm("API disposed"),Wj(dm),a.setReloadTabRequestHandler&&a.setReloadTabRequestHandler(t),a.removeReceiverListener("YouTube",jm),km(null));im=!1;gm=null;(a=Ve(window,"message",fm,!1))&&We(a)}
function mm(a){var b=Pa(Sa,function(b){return b.id==a.id});
0<=b&&(Sa[b]=ok(a))}
function jm(a){a.length&&cm("Updating receivers: "+N(a));nm(a);L("yt-remote-cast-device-list-update");z(om(),function(a){pm(a.id)});
z(a,function(a){if(a.isTabProjected){var c=qm(a.id);cm("Detected device: "+c.id+" is tab projected. Firing DEVICE_TAB_PROJECTED event.");J(function(){L("yt-remote-cast-device-tab-projected",c.id)},1E3)}})}
function rm(a,b){cm("Updating "+a+" activity status: "+N(b));var c=qm(a);c?(b.activityId&&(c.f=b.activityId),c.status="running"==b.status?"RUNNING":"stopped"==b.status?"STOPPED":"error"==b.status?"ERROR":"UNKNOWN","RUNNING"!=c.status&&(c.f=""),mm(c),L("yt-remote-cast-device-status-update",c)):cm("Device not found")}
function om(){hm();return uk(Sa)}
function nm(a){a=B(a,function(a){var c={id:a.id,name:Ba(a.name)};if(a=qm(a.id))c.activityId=a.f,c.status=a.status;return c});
Ra();Ya(Sa,a)}
function qm(a){var b=om();return Oa(b,function(b){return b.id==a})||null}
function pm(a){var b=qm(a),c=em();c&&b&&b.f&&c.getActivityStatus(b.f,function(b){"error"==b.status&&(b.status="stopped");rm(a,b)})}
function sm(a){hm();var b=qm(a),c=em();c&&b&&b.f?(cm("Stopping cast activity"),c.stopActivity(b.f,oa(rm,a))):cm("Dropping cast activity stop")}
function em(){return r("yt.mdx.remote.castapi.api_")}
function km(a){q("yt.mdx.remote.castapi.api_",a,void 0)}
var im=!1,gm=null,Sa=r("yt.mdx.remote.castapi.devices_")||[];q("yt.mdx.remote.castapi.devices_",Sa,void 0);function tm(a,b){this.action=a;this.params=b||null}
;function um(){}
;function vm(){this.f=x()}
new vm;vm.prototype.set=function(a){this.f=a};
vm.prototype.reset=function(){this.set(x())};
vm.prototype.get=function(){return this.f};function wm(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1;this.Qc=!0}
wm.prototype.stopPropagation=function(){this.f=!0};
wm.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Qc=!1};var xm=!M||vd(9),ym=M&&!ud("9");!kd||ud("528");jd&&ud("1.9b")||M&&ud("8")||hd&&ud("9.5")||kd&&ud("528");jd&&!ud("8")||M&&ud("9");function zm(a,b){wm.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.h=this.state=null;a&&this.init(a,b)}
y(zm,wm);
zm.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(jd){var f;a:{try{of(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.h=a;a.defaultPrevented&&this.preventDefault()};
zm.prototype.stopPropagation=function(){zm.H.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
zm.prototype.preventDefault=function(){zm.H.preventDefault.call(this);var a=this.h;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ym)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Am="closure_listenable_"+(1E6*Math.random()|0),Bm=0;function Cm(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.ob=!!d;this.sb=e;this.key=++Bm;this.Ua=this.nb=!1}
function Dm(a){a.Ua=!0;a.listener=null;a.f=null;a.src=null;a.sb=null}
;function Em(a){this.src=a;this.f={};this.h=0}
function Fm(a,b,c,d,e){var f=b.toString();b=a.f[f];b||(b=a.f[f]=[],a.h++);var h=Gm(b,c,d,e);-1<h?(a=b[h],a.nb=!1):(a=new Cm(c,a.src,f,!!d,e),a.nb=!1,b.push(a));return a}
Em.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.f))return!1;var e=this.f[a];b=Gm(e,b,c,d);return-1<b?(Dm(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.f[a],this.h--),!0):!1};
function Hm(a,b){var c=b.type;c in a.f&&Ua(a.f[c],b)&&(Dm(b),0==a.f[c].length&&(delete a.f[c],a.h--))}
Em.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.f)if(!a||c==a){for(var d=this.f[c],e=0;e<d.length;e++)++b,Dm(d[e]);delete this.f[c];this.h--}return b};
function Im(a,b,c,d,e){a=a.f[b.toString()];b=-1;a&&(b=Gm(a,c,d,e));return-1<b?a[b]:null}
function Gm(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ua&&f.listener==b&&f.ob==!!c&&f.sb==d)return e}return-1}
;var Jm="closure_lm_"+(1E6*Math.random()|0),Km={},Lm=0;
function Mm(a,b,c,d,e){if(da(b)){for(var f=0;f<b.length;f++)Mm(a,b[f],c,d,e);return null}c=Nm(c);if(a&&a[Am])a=a.tb(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=Om(a);h||(a[Jm]=h=new Em(a));c=Fm(h,b,c,d,e);if(!c.f){d=Pm();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Qm(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Lm++}a=c}return a}
function Pm(){var a=Rm,b=xm?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Sm(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)Sm(a,b[f],c,d,e);else c=Nm(c),a&&a[Am]?a.Db(b,c,d,e):a&&(a=Om(a))&&(b=Im(a,b,c,!!d,e))&&Tm(b)}
function Tm(a){if(!fa(a)&&a&&!a.Ua){var b=a.src;if(b&&b[Am])Hm(b.j,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.ob):b.detachEvent&&b.detachEvent(Qm(c),d);Lm--;(c=Om(b))?(Hm(c,a),0==c.h&&(c.src=null,b[Jm]=null)):Dm(a)}}}
function Qm(a){return a in Km?Km[a]:Km[a]="on"+a}
function Um(a,b,c,d){var e=!0;if(a=Om(a))if(b=a.f[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.ob==c&&!f.Ua&&(f=Vm(f,d),e=e&&!1!==f)}return e}
function Vm(a,b){var c=a.listener,d=a.sb||a.src;a.nb&&Tm(a);return c.call(d,b)}
function Rm(a,b){if(a.Ua)return!0;if(!xm){var c=b||r("window.event"),d=new zm(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.f&&0<=h;h--){d.currentTarget=c[h];var k=Um(c[h],f,!0,d),e=e&&k}for(h=0;!d.f&&h<c.length;h++)d.currentTarget=c[h],k=Um(c[h],f,!1,d),e=e&&k}return e}return Vm(a,new zm(b,this))}
function Om(a){a=a[Jm];return a instanceof Em?a:null}
var Wm="__closure_events_fn_"+(1E9*Math.random()>>>0);function Nm(a){if(ga(a))return a;a[Wm]||(a[Wm]=function(b){return a.handleEvent(b)});
return a[Wm]}
;function Xm(){E.call(this);this.j=new Em(this);this.za=this;this.oa=null}
y(Xm,E);Xm.prototype[Am]=!0;g=Xm.prototype;g.addEventListener=function(a,b,c,d){Mm(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){Sm(this,a,b,c,d)};
function Ym(a,b){var c,d=a.oa;if(d){c=[];for(var e=1;d;d=d.oa)c.push(d),++e}var d=a.za,e=b,f=e.type||e;if(u(e))e=new wm(e,d);else if(e instanceof wm)e.target=e.target||d;else{var h=e,e=new wm(f,d);ub(e,h)}var h=!0,k;if(c)for(var l=c.length-1;!e.f&&0<=l;l--)k=e.currentTarget=c[l],h=Zm(k,f,!0,e)&&h;e.f||(k=e.currentTarget=d,h=Zm(k,f,!0,e)&&h,e.f||(h=Zm(k,f,!1,e)&&h));if(c)for(l=0;!e.f&&l<c.length;l++)k=e.currentTarget=c[l],h=Zm(k,f,!1,e)&&h}
g.F=function(){Xm.H.F.call(this);this.removeAllListeners();this.oa=null};
g.tb=function(a,b,c,d){return Fm(this.j,String(a),b,c,d)};
g.Db=function(a,b,c,d){return this.j.remove(String(a),b,c,d)};
g.removeAllListeners=function(a){return this.j?this.j.removeAll(a):0};
function Zm(a,b,c,d){b=a.j.f[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Ua&&h.ob==c){var k=h.listener,l=h.sb||h.src;h.nb&&Hm(a.j,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Qc}
;function $m(a,b){this.h=new Bd(a);this.f=b?zd:yd}
$m.prototype.stringify=function(a){return Ad(this.h,a)};
$m.prototype.parse=function(a){return this.f(a)};function an(a,b){this.f=0;this.A=void 0;this.l=this.h=this.j=null;this.o=this.w=!1;if(a!=t)try{var c=this;a.call(b,function(a){bn(c,2,a)},function(a){bn(c,3,a)})}catch(d){bn(this,3,d)}}
function cn(){this.next=this.context=this.h=this.l=this.f=null;this.j=!1}
cn.prototype.reset=function(){this.context=this.h=this.l=this.f=null;this.j=!1};
var dn=new Tb(function(){return new cn},function(a){a.reset()},100);
function en(a,b,c){var d=dn.get();d.l=a;d.h=b;d.context=c;return d}
function fn(a){return new an(function(b,c){c(a)})}
an.prototype.then=function(a,b,c){return gn(this,ga(a)?a:null,ga(b)?b:null,c)};
an.prototype.then=an.prototype.then;an.prototype.$goog_Thenable=!0;an.prototype.cancel=function(a){0==this.f&&Yb(function(){var b=new hn(a);jn(this,b)},this)};
function jn(a,b){if(0==a.f)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,h=c.h;h&&(h.j||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?jn(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):kn(c),ln(c,e,3,b)))}a.j=null}else bn(a,3,b)}
function mn(a,b){a.h||2!=a.f&&3!=a.f||nn(a);a.l?a.l.next=b:a.h=b;a.l=b}
function gn(a,b,c,d){var e=en(null,null,null);e.f=new an(function(a,h){e.l=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.h=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof hn?h(b):a(e)}catch(n){h(n)}}:h});
e.f.j=a;mn(a,e);return e.f}
an.prototype.S=function(a){this.f=0;bn(this,2,a)};
an.prototype.I=function(a){this.f=0;bn(this,3,a)};
function bn(a,b,c){if(0==a.f){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;var d;a:{var e=c,f=a.S,h=a.I;if(e instanceof an)mn(e,en(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ha(e))try{var l=e.then;if(ga(l)){on(e,l,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.A=c,a.f=b,a.j=null,nn(a),3!=b||c instanceof hn||pn(a,c))}}
function on(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(l){f(l)}}
function nn(a){a.w||(a.w=!0,Yb(a.D,a))}
function kn(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
an.prototype.D=function(){for(var a=null;a=kn(this);)ln(this,a,this.f,this.A);this.w=!1};
function ln(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.f)b.f.j=null,qn(b,c,d);else try{b.j?b.l.call(b.context):qn(b,c,d)}catch(e){rn.call(null,e)}Ub(dn,b)}
function qn(a,b,c){2==b?a.l.call(a.context,c):a.h&&a.h.call(a.context,c)}
function pn(a,b){a.o=!0;Yb(function(){a.o&&rn.call(null,b)})}
var rn=Qb;function hn(a){pa.call(this,a)}
y(hn,pa);hn.prototype.name="cancel";function sn(a,b){Xm.call(this);this.f=a||1;this.h=b||m;this.l=v(this.Ge,this);this.o=x()}
y(sn,Xm);g=sn.prototype;g.enabled=!1;g.da=null;function tn(a,b){a.f=b;a.da&&a.enabled?(a.stop(),a.start()):a.da&&a.stop()}
g.Ge=function(){if(this.enabled){var a=x()-this.o;0<a&&a<.8*this.f?this.da=this.h.setTimeout(this.l,this.f-a):(this.da&&(this.h.clearTimeout(this.da),this.da=null),Ym(this,"tick"),this.enabled&&(this.da=this.h.setTimeout(this.l,this.f),this.o=x()))}};
g.start=function(){this.enabled=!0;this.da||(this.da=this.h.setTimeout(this.l,this.f),this.o=x())};
g.stop=function(){this.enabled=!1;this.da&&(this.h.clearTimeout(this.da),this.da=null)};
g.F=function(){sn.H.F.call(this);this.stop();delete this.h};
function un(a,b,c){if(ga(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)}
;function vn(a,b,c){E.call(this);this.l=null!=c?v(a,c):a;this.j=b;this.h=v(this.ie,this);this.f=[]}
y(vn,E);g=vn.prototype;g.Va=!1;g.ib=0;g.Ia=null;g.wd=function(a){this.f=arguments;this.Ia||this.ib?this.Va=!0:wn(this)};
g.stop=function(){this.Ia&&(m.clearTimeout(this.Ia),this.Ia=null,this.Va=!1,this.f=[])};
g.pause=function(){this.ib++};
g.resume=function(){this.ib--;this.ib||!this.Va||this.Ia||(this.Va=!1,wn(this))};
g.F=function(){vn.H.F.call(this);this.stop()};
g.ie=function(){this.Ia=null;this.Va&&!this.ib&&(this.Va=!1,wn(this))};
function wn(a){a.Ia=un(a.h,a.j);a.l.apply(null,a.f)}
;function xn(a){E.call(this);this.h=a;this.f={}}
y(xn,E);var yn=[];g=xn.prototype;g.tb=function(a,b,c,d){da(b)||(b&&(yn[0]=b.toString()),b=yn);for(var e=0;e<b.length;e++){var f=Mm(a,b[e],c||this.handleEvent,d||!1,this.h||this);if(!f)break;this.f[f.key]=f}return this};
g.Db=function(a,b,c,d,e){if(da(b))for(var f=0;f<b.length;f++)this.Db(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.h||this,c=Nm(c),d=!!d,b=a&&a[Am]?Im(a.j,String(b),c,d,e):a?(a=Om(a))?Im(a,b,c,d,e):null:null,b&&(Tm(b),delete this.f[b.key]);return this};
g.removeAll=function(){db(this.f,function(a,b){this.f.hasOwnProperty(b)&&Tm(a)},this);
this.f={}};
g.F=function(){xn.H.F.call(this);this.removeAll()};
g.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function zn(){}
zn.prototype.f=null;function An(a){var b;(b=a.f)||(b={},Bn(a)&&(b[0]=!0,b[1]=!0),b=a.f=b);return b}
;var Cn;function Dn(){}
y(Dn,zn);function En(a){return(a=Bn(a))?new ActiveXObject(a):new XMLHttpRequest}
function Bn(a){if(!a.h&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.h=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.h}
Cn=new Dn;function Fn(a,b,c,d,e){this.f=a;this.j=c;this.D=d;this.A=e||1;this.o=45E3;this.l=new xn(this);this.h=new sn;tn(this.h,250)}
g=Fn.prototype;g.Ja=null;g.la=!1;g.Xa=null;g.ec=null;g.jb=null;g.Wa=null;g.Aa=null;g.Da=null;g.Na=null;g.N=null;g.lb=0;g.ma=null;g.Gb=null;g.Ka=null;g.fb=-1;g.Rc=!0;g.Fa=!1;g.Wb=0;g.zb=null;var Gn={},Hn={};g=Fn.prototype;g.setTimeout=function(a){this.o=a};
function In(a,b,c){a.Wa=1;a.Aa=Lg(b.clone());a.Na=c;a.w=!0;Jn(a,null)}
function Kn(a,b,c,d,e){a.Wa=1;a.Aa=Lg(b.clone());a.Na=null;a.w=c;e&&(a.Rc=!1);Jn(a,d)}
function Jn(a,b){a.jb=x();Ln(a);a.Da=a.Aa.clone();Jg(a.Da,"t",a.A);a.lb=0;a.N=a.f.Pb(a.f.kb()?b:null);0<a.Wb&&(a.zb=new vn(v(a.Xc,a,a.N),a.Wb));a.l.tb(a.N,"readystatechange",a.se);var c=a.Ja?rb(a.Ja):{};a.Na?(a.Gb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.N.send(a.Da,a.Gb,a.Na,c)):(a.Gb="GET",a.Rc&&!kd&&(c.Connection="close"),a.N.send(a.Da,a.Gb,null,c));a.f.ka(1)}
g.se=function(a){a=a.target;var b=this.zb;b&&3==Mn(a)?b.wd():this.Xc(a)};
g.Xc=function(a){try{if(a==this.N)a:{var b=Mn(this.N),c=this.N.o,d=this.N.getStatus();if(M&&!vd(10)||kd&&!ud("420+")){if(4>b)break a}else if(3>b||3==b&&!hd&&!Nn(this.N))break a;this.Fa||4!=b||7==c||(8==c||0>=d?this.f.ka(3):this.f.ka(2));On(this);var e=this.N.getStatus();this.fb=e;var f=Nn(this.N);(this.la=200==e)?(4==b&&Pn(this),this.w?(Qn(this,b,f),hd&&this.la&&3==b&&(this.l.tb(this.h,"tick",this.re),this.h.start())):Rn(this,f),this.la&&!this.Fa&&(4==b?this.f.vb(this):(this.la=!1,Ln(this)))):(this.Ka=
400==e&&0<f.indexOf("Unknown SID")?3:0,X(),Pn(this),Sn(this))}}catch(h){this.N&&Nn(this.N)}finally{}};
function Qn(a,b,c){for(var d=!0;!a.Fa&&a.lb<c.length;){var e=Tn(a,c);if(e==Hn){4==b&&(a.Ka=4,X(),d=!1);break}else if(e==Gn){a.Ka=4;X();d=!1;break}else Rn(a,e)}4==b&&0==c.length&&(a.Ka=1,X(),d=!1);a.la=a.la&&d;d||(Pn(a),Sn(a))}
g.re=function(){var a=Mn(this.N),b=Nn(this.N);this.lb<b.length&&(On(this),Qn(this,a,b),this.la&&4!=a&&Ln(this))};
function Tn(a,b){var c=a.lb,d=b.indexOf("\n",c);if(-1==d)return Hn;c=Number(b.substring(c,d));if(isNaN(c))return Gn;d+=1;if(d+c>b.length)return Hn;var e=b.substr(d,c);a.lb=d+c;return e}
function Un(a,b){a.jb=x();Ln(a);var c=b?window.location.hostname:"";a.Da=a.Aa.clone();P(a.Da,"DOMAIN",c);P(a.Da,"t",a.A);try{a.ma=new ActiveXObject("htmlfile")}catch(n){Pn(a);a.Ka=7;X();Sn(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Ga)h=Ga[h];else if(h in Fa)h=Ga[h]=Fa[h];else{var k=h,l=h.charCodeAt(0);if(31<l&&127>l)k=h;else{if(256>l){if(k="\\x",16>l||256<l)k+="0"}else k="\\u",4096>l&&(k+="0");
k+=l.toString(16).toUpperCase()}h=Ga[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Oc(Ab("b/12014412"),d);a.ma.open();a.ma.write(Jb(c));a.ma.close();a.ma.parentWindow.m=v(a.me,a);a.ma.parentWindow.d=v(a.Kc,a,!0);a.ma.parentWindow.rpcClose=v(a.Kc,a,!1);c=a.ma.createElement("DIV");a.ma.parentWindow.document.body.appendChild(c);d=Fb(a.Da.toString());d=Db(d);Aa.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(ua,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(va,"&lt;")),-1!=
d.indexOf(">")&&(d=d.replace(wa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(xa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(ya,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(za,"&#0;")));d=Oc(Ab("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=Jb(d);a.f.ka(1)}
g.me=function(a){Vn(v(this.le,this,a),0)};
g.le=function(a){this.Fa||(On(this),Rn(this,a),Ln(this))};
g.Kc=function(a){Vn(v(this.ke,this,a),0)};
g.ke=function(a){this.Fa||(Pn(this),this.la=a,this.f.vb(this),this.f.ka(4))};
g.cancel=function(){this.Fa=!0;Pn(this)};
function Ln(a){a.ec=x()+a.o;Wn(a,a.o)}
function Wn(a,b){if(null!=a.Xa)throw Error("WatchDog timer not null");a.Xa=Vn(v(a.oe,a),b)}
function On(a){a.Xa&&(m.clearTimeout(a.Xa),a.Xa=null)}
g.oe=function(){this.Xa=null;var a=x();0<=a-this.ec?(2!=this.Wa&&this.f.ka(3),Pn(this),this.Ka=2,X(),Sn(this)):Wn(this,this.ec-a)};
function Sn(a){a.f.yc()||a.Fa||a.f.vb(a)}
function Pn(a){On(a);ec(a.zb);a.zb=null;a.h.stop();a.l.removeAll();if(a.N){var b=a.N;a.N=null;Xn(b);b.dispose()}a.ma&&(a.ma=null)}
function Rn(a,b){try{a.f.Fc(a,b),a.f.ka(4)}catch(c){}}
;function Yn(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Zn(a,b,function(e){e?c(!0):m.setTimeout(function(){Yn(a,b,c,d,f)},f)})}}
function Zn(a,b,c){var d=new Image;d.onload=function(){try{$n(d),c(!0)}catch(a){}};
d.onerror=function(){try{$n(d),c(!1)}catch(a){}};
d.onabort=function(){try{$n(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{$n(d),c(!1)}catch(a){}};
m.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function $n(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function ao(a){this.f=a;this.h=new $m(null,!0)}
g=ao.prototype;g.Ub=null;g.ca=null;g.Ab=!1;g.Uc=null;g.pb=null;g.Zb=null;g.Vb=null;g.ea=null;g.ya=-1;g.eb=null;g.Za=null;g.connect=function(a){this.Vb=a;a=bo(this.f,null,this.Vb);X();this.Uc=x();var b=this.f.D;null!=b?(this.eb=b[0],(this.Za=b[1])?(this.ea=1,co(this)):(this.ea=2,eo(this))):(Jg(a,"MODE","init"),this.ca=new Fn(this,0,void 0,void 0,void 0),this.ca.Ja=this.Ub,Kn(this.ca,a,!1,null,!0),this.ea=0)};
function co(a){var b=bo(a.f,a.Za,"/mail/images/cleardot.gif");Lg(b);Yn(b.toString(),5E3,v(a.rd,a),3,2E3);a.ka(1)}
g.rd=function(a){if(a)this.ea=2,eo(this);else{X();var b=this.f;b.ha=b.Ba.ya;fo(b,9)}a&&this.ka(2)};
function eo(a){var b=a.f.S;if(null!=b)X(),b?(X(),go(a.f,a,!1)):(X(),go(a.f,a,!0));else if(a.ca=new Fn(a,0,void 0,void 0,void 0),a.ca.Ja=a.Ub,b=a.f,b=bo(b,b.kb()?a.eb:null,a.Vb),X(),!M||vd(10))Jg(b,"TYPE","xmlhttp"),Kn(a.ca,b,!1,a.eb,!1);else{Jg(b,"TYPE","html");var c=a.ca;a=!!a.eb;c.Wa=3;c.Aa=Lg(b.clone());Un(c,a)}}
g.Pb=function(a){return this.f.Pb(a)};
g.yc=function(){return!1};
g.Fc=function(a,b){this.ya=a.fb;if(0==this.ea)if(b){try{var c=this.h.parse(b)}catch(d){c=this.f;c.ha=this.ya;fo(c,2);return}this.eb=c[0];this.Za=c[1]}else c=this.f,c.ha=this.ya,fo(c,2);else if(2==this.ea)if(this.Ab)X(),this.Zb=x();else if("11111"==b){if(X(),this.Ab=!0,this.pb=x(),c=this.pb-this.Uc,!M||vd(10)||500>c)this.ya=200,this.ca.cancel(),X(),go(this.f,this,!0)}else X(),this.pb=this.Zb=x(),this.Ab=!1};
g.vb=function(){this.ya=this.ca.fb;if(this.ca.la)0==this.ea?this.Za?(this.ea=1,co(this)):(this.ea=2,eo(this)):2==this.ea&&(a=!1,(a=!M||vd(10)?this.Ab:200>this.Zb-this.pb?!1:!0)?(X(),go(this.f,this,!0)):(X(),go(this.f,this,!1)));else{0==this.ea?X():2==this.ea&&X();var a=this.f;a.ha=this.ya;fo(a,2)}};
g.kb=function(){return this.f.kb()};
g.isActive=function(){return this.f.isActive()};
g.ka=function(a){this.f.ka(a)};function ho(a){Xm.call(this);this.headers=new Uc;this.R=a||null;this.h=!1;this.P=this.f=null;this.sa=this.I="";this.o=0;this.w="";this.l=this.ga=this.D=this.Z=!1;this.A=0;this.J=null;this.ta="";this.O=this.ua=!1}
y(ho,Xm);var io=/^https?$/i,jo=["POST","PUT"];g=ho.prototype;
g.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+a);b=b?b.toUpperCase():"GET";this.I=a;this.w="";this.o=0;this.sa=b;this.Z=!1;this.h=!0;this.f=this.R?En(this.R):En(Cn);this.P=this.R?An(this.R):An(Cn);this.f.onreadystatechange=v(this.Ec,this);try{um(ko(this,"Opening Xhr")),this.ga=!0,this.f.open(b,String(a),!0),this.ga=!1}catch(f){um(ko(this,"Error opening Xhr: "+f.message));lo(this,f);return}a=c||"";var e=this.headers.clone();
d&&ad(d,function(a,b){e.set(b,a)});
d=Oa(e.qa(),mo);c=m.FormData&&a instanceof m.FormData;!Qa(jo,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.f.setRequestHeader(b,a)},this);
this.ta&&(this.f.responseType=this.ta);lb(this.f)&&(this.f.withCredentials=this.ua);try{no(this),0<this.A&&(this.O=oo(this.f),um(ko(this,"Will abort after "+this.A+"ms if incomplete, xhr2 "+this.O)),this.O?(this.f.timeout=this.A,this.f.ontimeout=v(this.xc,this)):this.J=un(this.xc,this.A,this)),um(ko(this,"Sending request")),this.D=!0,this.f.send(a),this.D=!1}catch(f){um(ko(this,"Send error: "+f.message)),lo(this,f)}};
function oo(a){return M&&ud(9)&&fa(a.timeout)&&p(a.ontimeout)}
function mo(a){return"content-type"==a.toLowerCase()}
g.xc=function(){"undefined"!=typeof aa&&this.f&&(this.w="Timed out after "+this.A+"ms, aborting",this.o=8,ko(this,this.w),Ym(this,"timeout"),Xn(this,8))};
function lo(a,b){a.h=!1;a.f&&(a.l=!0,a.f.abort(),a.l=!1);a.w=b;a.o=5;po(a);qo(a)}
function po(a){a.Z||(a.Z=!0,Ym(a,"complete"),Ym(a,"error"))}
function Xn(a,b){a.f&&a.h&&(ko(a,"Aborting"),a.h=!1,a.l=!0,a.f.abort(),a.l=!1,a.o=b||7,Ym(a,"complete"),Ym(a,"abort"),qo(a))}
g.F=function(){this.f&&(this.h&&(this.h=!1,this.l=!0,this.f.abort(),this.l=!1),qo(this,!0));ho.H.F.call(this)};
g.Ec=function(){this.isDisposed()||(this.ga||this.D||this.l?ro(this):this.ae())};
g.ae=function(){ro(this)};
function ro(a){if(a.h&&"undefined"!=typeof aa)if(a.P[1]&&4==Mn(a)&&2==a.getStatus())ko(a,"Local request error detected and ignored");else if(a.D&&4==Mn(a))un(a.Ec,0,a);else if(Ym(a,"readystatechange"),4==Mn(a)){ko(a,"Request complete");a.h=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.I).match(Gd)[1]||null;if(!f&&m.self&&m.self.location)var h=m.self.location.protocol,
f=h.substr(0,h.length-1);e=!io.test(f?f.toLowerCase():"")}d=e}if(d)Ym(a,"complete"),Ym(a,"success");else{a.o=6;var k;try{k=2<Mn(a)?a.f.statusText:""}catch(l){k=""}a.w=k+" ["+a.getStatus()+"]";po(a)}}finally{qo(a)}}}
function qo(a,b){if(a.f){no(a);var c=a.f,d=a.P[0]?t:null;a.f=null;a.P=null;b||Ym(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function no(a){a.f&&a.O&&(a.f.ontimeout=null);fa(a.J)&&(m.clearTimeout(a.J),a.J=null)}
g.isActive=function(){return!!this.f};
function Mn(a){return a.f?a.f.readyState:0}
g.getStatus=function(){try{return 2<Mn(this)?this.f.status:-1}catch(a){return-1}};
function Nn(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
function ko(a,b){return b+" ["+a.sa+" "+a.I+" "+a.getStatus()+"]"}
;function so(a,b,c){this.A=a||null;this.f=1;this.h=[];this.l=[];this.o=new $m(null,!0);this.D=b||null;this.S=null!=c?c:null}
function to(a,b){this.f=a;this.map=b;this.context=null}
g=so.prototype;g.bb=null;g.Y=null;g.K=null;g.Tb=null;g.qb=null;g.lc=null;g.rb=null;g.gb=0;g.Ld=0;g.T=null;g.Ca=null;g.xa=null;g.Ha=null;g.Ba=null;g.Fb=null;g.Ra=-1;g.zc=-1;g.ha=-1;g.cb=0;g.Qa=0;g.Ga=8;var uo=new Xm;function vo(a){wm.call(this,"statevent",a)}
y(vo,wm);function wo(a,b){wm.call(this,"timingevent",a);this.size=b}
y(wo,wm);function xo(a){wm.call(this,"serverreachability",a)}
y(xo,wm);g=so.prototype;g.connect=function(a,b,c,d,e){X();this.Tb=b;this.bb=c||{};d&&p(e)&&(this.bb.OSID=d,this.bb.OAID=e);this.Ba=new ao(this);this.Ba.Ub=null;this.Ba.h=this.o;this.Ba.connect(a)};
function yo(a){zo(a);if(3==a.f){var b=a.gb++,c=a.qb.clone();P(c,"SID",a.j);P(c,"RID",b);P(c,"TYPE","terminate");Ao(a,c);b=new Fn(a,0,a.j,b,void 0);b.Wa=2;b.Aa=Lg(c.clone());(new Image).src=b.Aa;b.jb=x();Ln(b)}Bo(a)}
function zo(a){if(a.Ba){var b=a.Ba;b.ca&&(b.ca.cancel(),b.ca=null);b.ya=-1;a.Ba=null}a.K&&(a.K.cancel(),a.K=null);a.xa&&(m.clearTimeout(a.xa),a.xa=null);Co(a);a.Y&&(a.Y.cancel(),a.Y=null);a.Ca&&(m.clearTimeout(a.Ca),a.Ca=null)}
function Do(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.h.push(new to(a.Ld++,b));2!=a.f&&3!=a.f||Eo(a)}
g.yc=function(){return 0==this.f};
function Eo(a){a.Y||a.Ca||(a.Ca=Vn(v(a.Jc,a),0),a.cb=0)}
g.Jc=function(a){this.Ca=null;Fo(this,a)};
function Fo(a,b){if(1==a.f){if(!b){a.gb=Math.floor(1E5*Math.random());var c=a.gb++,d=new Fn(a,0,"",c,void 0);d.Ja=null;var e=Go(a),f=a.qb.clone();P(f,"RID",c);a.A&&P(f,"CVER",a.A);Ao(a,f);In(d,f,e);a.Y=d;a.f=2}}else 3==a.f&&(b?Ho(a,b):0!=a.h.length&&(a.Y||Ho(a)))}
function Ho(a,b){var c,d;b?6<a.Ga?(a.h=a.l.concat(a.h),a.l.length=0,c=a.gb-1,d=Go(a)):(c=b.D,d=b.Na):(c=a.gb++,d=Go(a));var e=a.qb.clone();P(e,"SID",a.j);P(e,"RID",c);P(e,"AID",a.Ra);Ao(a,e);c=new Fn(a,0,a.j,c,a.cb+1);c.Ja=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Y=c;In(c,e,d)}
function Ao(a,b){if(a.T){var c=a.T.tc(a);c&&db(c,function(a,c){P(b,c,a)})}}
function Go(a){var b=Math.min(a.h.length,1E3),c=["count="+b],d;6<a.Ga&&0<b?(d=a.h[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.h[e].f,h=a.h[e].map,f=6>=a.Ga?e:f-d;try{ad(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.l=a.l.concat(a.h.splice(0,b));
return c.join("&")}
function Io(a){a.K||a.xa||(a.w=1,a.xa=Vn(v(a.Ic,a),0),a.Qa=0)}
function Jo(a){if(a.K||a.xa||3<=a.Qa)return!1;a.w++;a.xa=Vn(v(a.Ic,a),Ko(a,a.Qa));a.Qa++;return!0}
g.Ic=function(){this.xa=null;this.K=new Fn(this,0,this.j,"rpc",this.w);this.K.Ja=null;this.K.Wb=0;var a=this.lc.clone();P(a,"RID","rpc");P(a,"SID",this.j);P(a,"CI",this.Fb?"0":"1");P(a,"AID",this.Ra);Ao(this,a);if(!M||vd(10))P(a,"TYPE","xmlhttp"),Kn(this.K,a,!0,this.rb,!1);else{P(a,"TYPE","html");var b=this.K,c=!!this.rb;b.Wa=3;b.Aa=Lg(a.clone());Un(b,c)}};
function go(a,b,c){a.Fb=c;a.ha=b.ya;a.vd(1,0);a.qb=bo(a,null,a.Tb);Eo(a)}
g.Fc=function(a,b){if(0!=this.f&&(this.K==a||this.Y==a))if(this.ha=a.fb,this.Y==a&&3==this.f)if(7<this.Ga){var c;try{c=this.o.parse(b)}catch(f){c=null}if(da(c)&&3==c.length)if(0==c[0])a:{if(!this.xa){if(this.K)if(this.K.jb+3E3<this.Y.jb)Co(this),this.K.cancel(),this.K=null;else break a;Jo(this);X()}}else this.zc=c[1],0<this.zc-this.Ra&&37500>c[2]&&this.Fb&&0==this.Qa&&!this.Ha&&(this.Ha=Vn(v(this.Md,this),6E3));else fo(this,11)}else"y2f%"!=b&&fo(this,11);else if(this.K==a&&Co(this),!/^[\s\xa0]*$/.test(b)){c=
this.o.parse(b);da(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ra=e[0];e=e[1];2==this.f?"c"==e[0]?(this.j=e[1],this.rb=e[2],e=e[3],null!=e?this.Ga=e:this.Ga=6,this.f=3,this.T&&this.T.qc(this),this.lc=bo(this,this.kb()?this.rb:null,this.Tb),Io(this)):"stop"==e[0]&&fo(this,7):3==this.f&&("stop"==e[0]?fo(this,7):"noop"!=e[0]&&this.T&&this.T.pc(this,e),this.Qa=0)}}};
g.Md=function(){null!=this.Ha&&(this.Ha=null,this.K.cancel(),this.K=null,Jo(this),X())};
function Co(a){null!=a.Ha&&(m.clearTimeout(a.Ha),a.Ha=null)}
g.vb=function(a){var b;if(this.K==a)Co(this),this.K=null,b=2;else if(this.Y==a)this.Y=null,b=1;else return;this.ha=a.fb;if(0!=this.f)if(a.la)1==b?(x(),Ym(uo,new wo(uo,a.Na?a.Na.length:0)),Eo(this),this.l.length=0):Io(this);else{var c=a.Ka,d;if(!(d=3==c||7==c||0==c&&0<this.ha)){if(d=1==b)this.Y||this.Ca||1==this.f||2<=this.cb?d=!1:(this.Ca=Vn(v(this.Jc,this,a),Ko(this,this.cb)),this.cb++,d=!0);d=!(d||2==b&&Jo(this))}if(d)switch(c){case 1:fo(this,5);break;case 4:fo(this,10);break;case 3:fo(this,6);
break;case 7:fo(this,12);break;default:fo(this,2)}}};
function Ko(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.vd=function(a){if(!Qa(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function fo(a,b){if(2==b||9==b){var c=null;a.T&&(c=null);var d=v(a.Fe,a);c||(c=new vg("//www.google.com/images/cleardot.gif"),Lg(c));Zn(c.toString(),1E4,d)}else X();Lo(a,b)}
g.Fe=function(a){a?X():(X(),Lo(this,8))};
function Lo(a,b){a.f=0;a.T&&a.T.oc(a,b);Bo(a);zo(a)}
function Bo(a){a.f=0;a.ha=-1;if(a.T)if(0==a.l.length&&0==a.h.length)a.T.Mb(a);else{var b=Xa(a.l),c=Xa(a.h);a.l.length=0;a.h.length=0;a.T.Mb(a,b,c)}}
function bo(a,b,c){var d=Mg(c);if(""!=d.h)b&&xg(d,b+"."+d.h),yg(d,d.A);else var e=window.location,d=Ng(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.bb&&db(a.bb,function(a,b){P(d,b,a)});
P(d,"VER",a.Ga);Ao(a,d);return d}
g.Pb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new ho;a.ua=!1;return a};
g.isActive=function(){return!!this.T&&this.T.isActive(this)};
function Vn(a,b){if(!ga(a))throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},b)}
g.ka=function(){Ym(uo,new xo(uo))};
function X(){Ym(uo,new vo(uo))}
g.kb=function(){return!(!M||vd(10))};
function Mo(){}
g=Mo.prototype;g.qc=function(){};
g.pc=function(){};
g.oc=function(){};
g.Mb=function(){};
g.tc=function(){return{}};
g.isActive=function(){return!0};function No(a,b){sn.call(this);this.w=0;if(ga(a))b&&(a=v(a,b));else if(a&&ga(a.handleEvent))a=v(a.handleEvent,a);else throw Error("Invalid listener argument");this.D=a;Mm(this,"tick",v(this.A,this));Oo(this)}
y(No,sn);No.prototype.A=function(){if(500<this.f){var a=this.f;24E4>2*a&&(a*=2);tn(this,a)}this.D()};
No.prototype.start=function(){No.H.start.call(this);this.w=x()+this.f};
No.prototype.stop=function(){this.w=0;No.H.stop.call(this)};
function Oo(a){a.stop();tn(a,5E3+2E4*Math.random())}
;function Po(a,b){this.ra=a;this.l=b;this.j=new H;this.h=new No(this.Le,this);this.f=null;this.I=!1;this.w=null;this.S="";this.D=this.o=0;this.A=[]}
y(Po,Mo);g=Po.prototype;g.subscribe=function(a,b,c){return this.j.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.j.unsubscribe(a,b,c)};
g.na=function(a){return this.j.na(a)};
g.C=function(a,b){return this.j.C.apply(this.j,arguments)};
g.dispose=function(){this.I||(this.I=!0,this.j.clear(),Qo(this),ec(this.j))};
g.isDisposed=function(){return this.I};
function Ro(a){return{firstTestResults:[""],secondTestResults:!a.f.Fb,sessionId:a.f.j,arrayId:a.f.Ra}}
g.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.S="";this.h.stop();this.w=a||null;this.o=b||0;a=this.ra+"/test";b=this.ra+"/bind";var d=new so("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.f;e&&(e.T=null);d.T=this;this.f=d;e?this.f.connect(a,b,this.l,e.j,e.Ra):c?this.f.connect(a,b,this.l,c.sessionId,c.arrayId):this.f.connect(a,b,this.l)}};
function Qo(a,b){a.D=b||0;a.h.stop();a.f&&(3==a.f.f&&Fo(a.f),yo(a.f));a.D=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&ub(c,b);this.h.enabled||2==(this.f?this.f.f:0)?this.A.push(c):this.f&&3==this.f.f&&Do(this.f,c)};
g.qc=function(){Oo(this.h);this.w=null;this.o=0;if(this.A.length){var a=this.A;this.A=[];for(var b=0,c=a.length;b<c;++b)Do(this.f,a[b])}this.C("handlerOpened")};
g.oc=function(a,b){var c=2==b&&401==this.f.ha;if(4!=b&&!c){if(6==b||410==this.f.ha)c=this.h,c.stop(),tn(c,500);this.h.start()}this.C("handlerError",b)};
g.Mb=function(a,b,c){if(!this.h.enabled)this.C("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.A.push(d)}};
g.tc=function(){var a={v:2};this.S&&(a.gsessionid=this.S);0!=this.o&&(a.ui=""+this.o);0!=this.D&&(a.ui=""+this.D);this.w&&ub(a,this.w);return a};
g.pc=function(a,b){"S"==b[0]?this.S=b[1]:"gracefulReconnect"==b[0]?(Oo(this.h),this.h.start(),yo(this.f)):this.C("handlerMessage",new tm(b[0],b[1]))};
function So(a,b){(a.l.loungeIdToken=b)||a.h.stop()}
g.Le=function(){this.h.stop();var a=this.f,b=0;a.K&&b++;a.Y&&b++;0!=b?this.h.start():this.connect(this.w,this.o)};function To(a){this.videoIds=null;this.index=-1;this.videoId=this.f="";this.volume=this.h=-1;this.o=!1;this.audioTrackId=null;this.w=this.l=0;this.j=null;this.reset(a)}
function Uo(a,b){if(a.f)throw Error(b+" is not allowed in V3.");}
function Vo(a){a.audioTrackId=null;a.j=null;a.h=-1;a.l=0;a.w=x()}
To.prototype.reset=function(a){this.videoIds=[];this.f="";this.index=-1;this.videoId="";Vo(this);this.volume=-1;this.o=!1;a&&(this.videoIds=a.videoIds,this.index=a.index,this.f=a.listId,this.videoId=a.videoId,this.h=a.playerState,this.volume=a.volume,this.o=a.muted,this.audioTrackId=a.audioTrackId,this.j=a.trackData,this.l=a.playerTime,this.w=a.playerTimeAt)};
function Wo(a){return a.f?a.videoId:a.videoIds[a.index]}
function Xo(a){switch(a.h){case 1:return(x()-a.w)/1E3+a.l;case -1E3:return 0}return a.l}
To.prototype.setVideoId=function(a){Uo(this,"setVideoId");var b=this.index;this.index=Ka(this.videoIds,a);b!=this.index&&Vo(this);return-1!=b};
function Yo(a,b,c){Uo(a,"setPlaylist");c=c||Wo(a);ab(a.videoIds,b)&&c==Wo(a)||(a.videoIds=Xa(b),a.setVideoId(c))}
To.prototype.remove=function(a){Uo(this,"remove");var b=Wo(this);return Ua(this.videoIds,a)?(this.index=Ka(this.videoIds,b),!0):!1};
function Zo(a){var b={};b.videoIds=Xa(a.videoIds);b.index=a.index;b.listId=a.f;b.videoId=a.videoId;b.playerState=a.h;b.volume=a.volume;b.muted=a.o;b.audioTrackId=a.audioTrackId;b.trackData=sb(a.j);b.playerTime=a.l;b.playerTimeAt=a.w;return b}
To.prototype.clone=function(){return new To(Zo(this))};function Y(a,b,c){V.call(this);this.w=NaN;this.R=!1;this.I=this.D=this.P=this.J=NaN;this.Z=[];this.j=this.B=this.f=null;this.Oa=a;this.Z.push(O(window,"beforeunload",v(this.Bd,this)));this.h=[];this.B=new To;3==c["mdx-version"]&&(this.B.f="RQ"+b.token);this.ga=b.id;this.f=$o(this,c);this.f.subscribe("handlerOpened",this.Rd,this);this.f.subscribe("handlerClosed",this.Nd,this);this.f.subscribe("handlerError",this.Od,this);this.B.f?this.f.subscribe("handlerMessage",this.Pd,this):this.f.subscribe("handlerMessage",
this.Qd,this);So(this.f,b.token);this.subscribe("remoteQueueChange",function(){var a=this.B.videoId;Kk()&&U("yt-remote-session-video-id",a)},this)}
y(Y,V);g=Y.prototype;
g.connect=function(a,b){if(b){if(this.B.f){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.B.f=c);this.B.videoId=d;this.B.index=e||0}else{var d=b.videoIds[b.index],f=b.currentTime||0;5>=f&&(f=0);var h={videoIds:d,videoId:d,currentTime:f};this.B.videoIds=[d];this.B.index=0}this.B.state=3;c=this.B;c.l=f;c.w=x();this.G("Connecting with setPlaylist and params: "+N(h));this.f.connect({method:"setPlaylist",params:N(h)},
a,Ok())}else this.G("Connecting without params"),this.f.connect({},a,Ok());ap(this)};
g.dispose=function(){this.isDisposed()||(this.C("beforeDispose"),bp(this,3));Y.H.dispose.call(this)};
g.F=function(){cp(this);dp(this);ep(this);K(this.D);this.D=NaN;K(this.I);this.I=NaN;this.j=null;We(this.Z);this.Z.length=0;this.f.dispose();Y.H.F.call(this);this.h=this.B=this.f=null};
g.G=function(a){Xj("conn",a)};
g.Bd=function(){this.o(2)};
function $o(a,b){return new Po(lk(a.Oa,"/bc",void 0,!1),b)}
function bp(a,b){a.C("proxyStateChange",b)}
function ap(a){a.w=J(v(function(){this.G("Connecting timeout");this.o(1)},a),2E4)}
function cp(a){K(a.w);a.w=NaN}
function ep(a){K(a.J);a.J=NaN}
function fp(a){dp(a);a.P=J(v(function(){gp(this,"getNowPlaying")},a),2E4)}
function dp(a){K(a.P);a.P=NaN}
function hp(a){var b=a.f;return!!b.f&&3==b.f.f&&isNaN(a.w)}
g.Rd=function(){this.G("Channel opened");this.R&&(this.R=!1,ep(this),this.J=J(v(function(){this.G("Timing out waiting for a screen.");this.o(1)},this),15E3));
Xk(Ro(this.f),this.ga)};
g.Nd=function(){this.G("Channel closed");isNaN(this.w)?Yk(!0):Yk();this.dispose()};
g.Od=function(a){Yk();isNaN(this.A())?(this.G("Channel error: "+a+" without reconnection"),this.dispose()):(this.R=!0,this.G("Channel error: "+a+" with reconnection in "+this.A()+" ms"),bp(this,2))};
function ip(a,b){b&&(cp(a),ep(a));b==hp(a)?b&&(bp(a,1),gp(a,"getSubtitlesTrack")):b?(a.O()&&a.B.reset(),bp(a,1),gp(a,"getNowPlaying"),jp(a)):a.o(1)}
function kp(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.B.videoId&&(pb(b.params)?a.B.j=null:a.B.j=b.params,a.C("remotePlayerChange"))}
function lp(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.B.f=b.params.listId||a.B.f;var e=a.B,f=e.videoId;e.videoId=c;e.index=d;c!=f&&Vo(e);a.C("remoteQueueChange")}
function mp(a,b){b.params=b.params||{};lp(a,b);np(a,b)}
function np(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.B;d.l=isNaN(c)?0:c;d.w=x();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.B.h&&(c=-1E3);a.B.h=c;1==a.B.h?fp(a):dp(a);a.C("remotePlayerChange")}
function op(a,b){var c="true"==b.params.muted;a.B.volume=parseInt(b.params.volume,10);a.B.o=c;a.C("remotePlayerChange")}
g.Pd=function(a){a.params?this.G("Received: action="+a.action+", params="+N(a.params)):this.G("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=yd(a.params.devices);this.h=B(a,function(a){return new Fk(a)});
a=!!Oa(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
ip(this,a);break;case "loungeScreenConnected":ip(this,!0);break;case "loungeScreenDisconnected":Va(this.h,function(a){return"LOUNGE_SCREEN"==a.type});
ip(this,!1);break;case "remoteConnected":var b=new Fk(yd(a.params.device));Oa(this.h,function(a){return a.equals(b)})||Ta(this.h,b);
break;case "remoteDisconnected":b=new Fk(yd(a.params.device));Va(this.h,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":lp(this,a);break;case "nowPlaying":mp(this,a);break;case "onStateChange":np(this,a);break;case "onVolumeChanged":op(this,a);break;case "onSubtitlesTrackChanged":kp(this,a);break;default:this.G("Unrecognized action: "+a.action)}};
g.Qd=function(a){a.params?this.G("Received: action="+a.action+", params="+N(a.params)):this.G("Received: action="+a.action);pp(this,a);qp(this,a);if(hp(this)){var b=this.B.clone(),c=!1,d,e,f,h,k,l;a.params&&(d=a.params.videoId||a.params.video_id,e=a.params.videoIds||a.params.video_ids,f=a.params.state,h=a.params.currentTime||a.params.current_time,k=a.params.volume,l=a.params.muted,p(a.params.currentError)&&yd(a.params.currentError));if("onSubtitlesTrackChanged"==a.action)d==Wo(this.B)&&(delete a.params.videoId,
pb(a.params)?this.B.j=null:this.B.j=a.params,this.C("remotePlayerChange"));else if(Wo(this.B)||"onStateChange"!=a.action){"playlistModified"!=a.action&&"nowPlayingPlaylist"!=a.action||e?(d||"nowPlaying"!=a.action&&"nowPlayingPlaylist"!=a.action?d||(d=Wo(this.B)):this.B.setVideoId(""),e&&(e=e.split(","),Yo(this.B,e,d))):Yo(this.B,[]);e=this.B;var n=d;Uo(e,"add");n&&!Qa(e.videoIds,n)?(e.videoIds.push(n),e=!0):e=!1;e&&gp(this,"getPlaylist");d&&this.B.setVideoId(d);b.index==this.B.index&&ab(b.videoIds,
this.B.videoIds)?"playlistModified"!=a.action&&"nowPlayingPlaylist"!=a.action||this.C("remoteQueueChange"):this.C("remoteQueueChange");p(f)&&(a=parseInt(f,10),a=isNaN(a)?-1:a,-1==a&&-1E3==this.B.h&&(a=-1E3),0==a&&"0"==h&&(a=-1),c=c||a!=this.B.h,this.B.h=a,1==this.B.h?fp(this):dp(this));h&&(a=parseInt(h,10),c=this.B,c.l=isNaN(a)?0:a,c.w=x(),c=!0);p(k)&&(a=parseInt(k,10),isNaN(a)||(c=c||this.B.volume!=a,this.B.volume=a),p(l)&&(l="true"==l,c=c||this.B.o!=l,this.B.o=l));c&&this.C("remotePlayerChange")}}};
function pp(a,b){switch(b.action){case "loungeStatus":var c=yd(b.params.devices);a.h=B(c,function(a){return new Fk(a)});
break;case "loungeScreenDisconnected":Va(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
break;case "remoteConnected":var d=new Fk(yd(b.params.device));Oa(a.h,function(a){return a.equals(d)})||Ta(a.h,d);
break;case "remoteDisconnected":d=new Fk(yd(b.params.device)),Va(a.h,function(a){return a.equals(d)})}}
function qp(a,b){var c=!1;if("loungeStatus"==b.action)c=!!Oa(a.h,function(a){return"LOUNGE_SCREEN"==a.type});
else if("loungeScreenConnected"==b.action)c=!0;else if("loungeScreenDisconnected"==b.action)c=!1;else return;if(!isNaN(a.J))if(c)ep(a);else return;c==hp(a)?c&&bp(a,1):c?(cp(a),a.O()&&a.B.reset(),bp(a,1),gp(a,"getNowPlaying"),jp(a)):a.o(1)}
g.ve=function(){if(this.j){var a=this.j;this.j=null;this.B.videoId!=a&&gp(this,"getNowPlaying")}};
Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.na;Y.prototype.ta=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.A())?hp(this)&&(a=1):a=2);return a};
Y.prototype.getProxyState=Y.prototype.ta;Y.prototype.o=function(a){this.G("Disconnecting with "+a);cp(this);this.C("beforeDisconnect",a);1==a&&Yk();Qo(this.f,a);this.dispose()};
Y.prototype.disconnect=Y.prototype.o;Y.prototype.sa=function(){var a=this.B;if(this.j){var b=a=this.B.clone(),c=this.j,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&Vo(b)}return Zo(a)};
Y.prototype.getPlayerContextData=Y.prototype.sa;Y.prototype.za=function(a){var b=new To(a);b.videoId&&b.videoId!=this.B.videoId&&(this.j=b.videoId,K(this.D),this.D=J(v(this.ve,this),5E3));var c=[];this.B.f==b.f&&this.B.videoId==b.videoId&&this.B.index==b.index&&ab(this.B.videoIds,b.videoIds)||c.push("remoteQueueChange");this.B.h==b.h&&this.B.volume==b.volume&&this.B.o==b.o&&Xo(this.B)==Xo(b)&&N(this.B.j)==N(b.j)||c.push("remotePlayerChange");this.B.reset(a);z(c,function(a){this.C(a)},this)};
Y.prototype.setPlayerContextData=Y.prototype.za;Y.prototype.oa=function(){return this.f.l.loungeIdToken};
Y.prototype.getLoungeToken=Y.prototype.oa;Y.prototype.O=function(){var a=this.f.l.id,b=Oa(this.h,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Y.prototype.getOtherConnectedRemoteId=Y.prototype.O;Y.prototype.A=function(){var a=this.f;return a.h.enabled?a.h.w-x():NaN};
Y.prototype.getReconnectTimeout=Y.prototype.A;Y.prototype.Ya=function(){if(!isNaN(this.A())){var a=this.f.h;a.enabled&&(a.stop(),a.start(),a.A())}};
Y.prototype.reconnect=Y.prototype.Ya;function jp(a){K(a.I);a.I=J(v(a.o,a,1),864E5)}
function gp(a,b,c){c?a.G("Sending: action="+b+", params="+N(c)):a.G("Sending: action="+b);a.f.sendMessage(b,c)}
Y.prototype.ua=function(a,b){gp(this,a,b);jp(this)};
Y.prototype.sendMessage=Y.prototype.ua;function rp(a){V.call(this);this.o=0;this.ia=sp();this.ab=NaN;this.xb="";this.w=a;this.G("Initializing local screens: "+ik(this.ia));this.j=tp();this.G("Initializing account screens: "+ik(this.j));this.Ob=null;this.f=[];this.h=[];up(this,om()||[]);this.G("Initializing DIAL devices: "+pk(this.h));a=gk(Uk());vp(this,a);this.G("Initializing online screens: "+ik(this.f));this.o=x()+3E5;wp(this)}
y(rp,V);var xp=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=rp.prototype;g.G=function(a){Xj("RM",a)};
g.M=function(a){Xj("RM",a)};
function tp(){var a=sp(),b=gk(Uk());return La(b,function(b){return!xk(a,b)})}
function sp(){var a=gk(Qk());return La(a,function(a){return!a.uuid})}
function wp(a){wc("yt-remote-cast-device-list-update",function(){var a=om();up(this,a||[])},a);
wc("yt-remote-cast-device-status-update",a.He,a);a.Pc();var b=x()>a.o?2E4:1E4;mc(v(a.Pc,a),b)}
g.C=function(a,b){if(this.isDisposed())return!1;this.G("Firing "+a);return this.l.C.apply(this.l,arguments)};
g.Pc=function(){var a=om()||[];0==a.length||up(this,a);a=yp(this);0==a.length||(Ma(a,function(a){return!xk(this.j,a)},this)&&Sk()?zp(this):Ap(this,a))};
function Bp(a,b){var c=yp(a);return La(b,function(a){return a.uuid?(a=wk(this.h,a.uuid),!!a&&"RUNNING"==a.status):!!xk(c,a)},a)}
function up(a,b){var c=!1;z(b,function(a){var b=yk(this.ia,a.id);b&&b.name!=a.name&&(this.G("Renaming screen id "+b.id+" from "+b.name+" to "+a.name),b.name=a.name,c=!0)},a);
c&&(a.G("Renaming due to DIAL."),Cp(a));Vk(tk(b));var d=!ab(a.h,b,vk);d&&a.G("Updating DIAL devices: "+pk(a.h)+" to "+pk(b));a.h=b;vp(a,a.f);d&&a.C("onlineReceiverChange")}
g.He=function(a){var b=wk(this.h,a.id);b&&(this.G("Updating DIAL device: "+b.id+"("+b.name+") from status: "+b.status+" to status: "+a.status+" and from activityId: "+b.f+" to activityId: "+a.f),b.f=a.f,b.status=a.status,Vk(tk(this.h)));vp(this,this.f)};
function vp(a,b,c){var d=Bp(a,b),e=!ab(a.f,d,dk);if(e||c)0==b.length||Tk(B(d,ek));e&&(a.G("Updating online screens: "+ik(a.f)+" -> "+ik(d)),a.f=d,a.C("onlineReceiverChange"))}
function Ap(a,b){var c=[],d={};z(b,function(a){a.token&&(d[a.token]=a,c.push(a.token))});
var e={method:"POST",L:{lounge_token:c.join(",")},context:a,X:function(a,b){var c=[];z(b.screens||[],function(a){"online"==a.status&&c.push(d[a.loungeToken])});
var e=this.Ob?Dp(this,this.Ob):null;e&&!xk(c,e)&&c.push(e);vp(this,c,!0)}};
Zd(lk(a.w,"/pairing/get_screen_availability"),e)}
function zp(a){var b=yp(a),c=B(b,function(a){return a.id});
0!=c.length&&(a.G("Updating lounge tokens for: "+N(c)),Zd(lk(a.w,"/pairing/get_lounge_token_batch"),{L:{screen_ids:c.join(",")},method:"POST",context:a,X:function(a,c){Ep(this,c.screens||[]);this.ia=La(this.ia,function(a){return!!a.token});
Cp(this);Ap(this,b)}}))}
function Ep(a,b){z(Wa(a.ia,a.j),function(a){var d=Oa(b,function(b){return a.id==b.screenId});
d&&(a.token=d.loungeToken)})}
function Cp(a){var b=sp();ab(a.ia,b,dk)||(a.G("Saving local screens: "+ik(b)+" to "+ik(a.ia)),Pk(B(a.ia,ek)),vp(a,a.f,!0),up(a,om()||[]),a.C("managedScreenChange",yp(a)))}
function Fp(a,b,c){var d=Pa(b,function(a){return ck(c,a)}),e=0>d;
0>d?b.push(c):b[d]=c;xk(a.f,c)||a.f.push(c);return e}
g.wc=function(a,b){for(var c=yp(this),c=B(c,function(a){return a.name}),d=a,e=2;Qa(c,d);)d=b.call(m,e),e++;
return d};
g.Lc=function(a,b,c){var d=!1;b>=xp.length&&(this.G("Pairing DIAL device "+a+" with "+c+" timed out."),d=!0);var e=wk(this.h,a);if(!e)this.G("Pairing DIAL device "+a+" with "+c+" failed: no device for "+a),d=!0;else if("ERROR"==e.status||"STOPPED"==e.status)this.G("Pairing DIAL device "+a+" with "+c+" failed: launch error on "+a),d=!0;d?(Gp(this),this.C("screenPair",null)):Zd(lk(this.w,"/pairing/get_screen"),{method:"POST",L:{pairing_code:c},context:this,X:function(a,b){if(c==this.xb){Gp(this);var d=
new ak(b.screen);d.name=e.name;d.uuid=e.id;this.G("Pairing "+c+" succeeded.");var l=Fp(this,this.ia,d);this.G("Paired with "+(l?"a new":"an old")+" local screen:"+hk(d));Cp(this);this.C("screenPair",d)}},
onError:function(){c==this.xb&&(this.G("Polling pairing code: "+c),K(this.ab),this.ab=J(v(this.Lc,this,a,b+1,c),xp[b]))}})};
function Hp(a,b,c){var d=Z,e="";Gp(d);if(wk(d.h,a)){if(!e){var f=e=qk();hm();var h=qm(a),k=em();if(k&&h){var l=new cast.Receiver(h.id,h.name),l=new cast.LaunchRequest("YouTube",l);l.parameters="pairingCode="+f;l.description=new cast.LaunchDescription;l.description.text=document.title;b&&(l.parameters+="&v="+b,c&&(l.parameters+="&t="+Math.round(c)),l.description.url="http://i.ytimg.com/vi/"+b+"/default.jpg");"UNKNOWN"!=h.status&&(h.status="UNKNOWN",mm(h),L("yt-remote-cast-device-status-update",h));
cm("Sending a cast launch request with params: "+l.parameters);k.launch(l,oa(rm,a))}else cm("No cast API or no cast device. Dropping cast launch.")}d.xb=e;d.ab=J(v(d.Lc,d,a,0,e),xp[0])}else d.G("No DIAL device with id: "+a)}
function Gp(a){K(a.ab);a.ab=NaN;a.xb=""}
function Dp(a,b){var c=yk(yp(a),b);a.G("Found screen: "+hk(c)+" with key: "+b);return c}
function Ip(a){var b=Z,c=yk(b.f,a);b.G("Found online screen: "+hk(c)+" with key: "+a);return c}
function Jp(a){var b=Z,c=wk(b.h,a);if(!c){var d=yk(b.ia,a);d&&(c=wk(b.h,d.uuid))}b.G("Found DIAL: "+(c?c.toString():"null")+" with key: "+a);return c}
function yp(a){return Wa(a.j,La(a.ia,function(a){return!xk(this.j,a)},a))}
;function Kp(a){zk.call(this,"ScreenServiceProxy");this.W=a;this.f=[];this.f.push(this.W.$_s("screenChange",v(this.Pe,this)));this.f.push(this.W.$_s("onlineScreenChange",v(this.Xd,this)))}
y(Kp,zk);g=Kp.prototype;g.$=function(a){return this.W.$_gs(a)};
g.contains=function(a){return!!this.W.$_c(a)};
g.get=function(a){return this.W.$_g(a)};
g.start=function(){this.W.$_st()};
g.Hb=function(a,b,c){this.W.$_a(a,b,c)};
g.remove=function(a,b,c){this.W.$_r(a,b,c)};
g.Eb=function(a,b,c,d){this.W.$_un(a,b,c,d)};
g.F=function(){for(var a=0,b=this.f.length;a<b;++a)this.W.$_ubk(this.f[a]);this.f.length=0;this.W=null;Kp.H.F.call(this)};
g.Pe=function(){this.C("screenChange")};
g.Xd=function(){this.C("onlineScreenChange")};
W.prototype.$_st=W.prototype.start;W.prototype.$_gspc=W.prototype.Qe;W.prototype.$_gsppc=W.prototype.Zc;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.Hb;W.prototype.$_un=W.prototype.Eb;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.$;W.prototype.$_gos=W.prototype.Yc;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.na;function Lp(){var a=!!I("MDX_ENABLE_CASTV2"),b=!!I("MDX_ENABLE_QUEUE"),c={device:"Desktop",app:"youtube-desktop"};a?q("yt.mdx.remote.castv2_",!0,void 0):hm();tj&&sj();Hk();Mp||(Mp=new kk,Zk()&&(Mp.f="/api/loungedev"));Z||a||(Z=new rp(Mp),Z.subscribe("screenPair",Np),Z.subscribe("managedScreenChange",Op),Z.subscribe("onlineReceiverChange",function(){L("yt-remote-receiver-availability-change")}));
Pp||(Pp=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",Pp,void 0));Qp(b);b=Rp();if(a&&!b){var d=new W(Mp);q("yt.mdx.remote.screenService_",d,void 0);b=Rp();Il(d,function(a){a?Sp()&&am(Sp(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){L("yt-remote-receiver-availability-change")})},!(!c||!c.loadCastApiSetupScript))}if(c&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",!0,void 0);
Tp("Initializing: "+N(c));Up.push(wc("yt-remote-cast2-availability-change",function(){L("yt-remote-receiver-availability-change")}));
Up.push(wc("yt-remote-cast2-receiver-selected",function(){Vp(null);L("yt-remote-auto-connect","cast-selector-receiver")}));
Up.push(wc("yt-remote-cast2-session-change",Wp));Up.push(wc("yt-remote-connection-change",function(a){a?am(Sp(),"YouTube TV"):Xp()||(am(null,null),Xl())}));
var e=Yp();c.isAuto&&(e.id+="#dial");e.name=c.device;e.app=c.app;Tp(" -- with channel params: "+N(e));Zp(e);a&&b.start();Sp()||$p()}}
function aq(){yc(Up);Up.length=0;ec(bq);bq=null;Pp&&(z(Pp,function(a){a(null)}),Pp.length=0,Pp=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
Z&&(ec(Z),Z=null);Mp=null;lm()}
function cq(){if(dq()&&Vl()){var a=[];if(vj("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||eq())a.push({key:"cast-selector-receiver",name:fq()}),q("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:gq()}
function gq(){var a=[],a=hq()?Rp().W.$_gos():gk(Uk()),b=iq();b&&eq()&&(xk(a,b)||a.push(b));hq()||(b=uk(Wk()),b=La(b,function(b){return!yk(a,b.id)}),a=Wa(a,b));
return sk(a)}
function jq(){if(dq()&&Vl()){var a=Wl();return a?{key:"cast-selector-receiver",name:a}:null}return kq()}
function kq(){var a=gq(),b=lq(),c=iq();c||(c=Xp());return Oa(a,function(a){return c&&bk(c,a.key)||b&&(a=Jp(a.key))&&a.id==b?!0:!1})}
function fq(){if(dq()&&Vl())return Wl();var a=iq();return a?a.name:null}
function iq(){var a=Sp();if(!a)return null;if(!Z){var b=Rp().$();return yk(b,a)}return Dp(Z,a)}
function Wp(a){Tp("remote.onCastSessionChange_: "+hk(a));if(a){var b=iq();b&&b.id==a.id?am(b.id,"YouTube TV"):(b&&mq(),nq(a,1))}else mq()}
function oq(a,b){Tp("Connecting to: "+N(a));if("cast-selector-receiver"==a.key)Vp(b||null),$l(b||null);else{mq();Vp(b||null);var c=null;Z?c=Ip(a.key):(c=Rp().$(),c=yk(c,a.key));if(c)nq(c,1);else{if(Z&&(c=Jp(a.key))){pq(c);return}J(function(){qq(null)},0)}}}
function mq(){Z&&Gp(Z);a:{var a=eq();if(a&&(a=a.getOtherConnectedRemoteId())){Tp("Do not stop DIAL due to "+a);rq("");break a}(a=lq())?(Tp("Stopping DIAL: "+a),sm(a),rq("")):(a=iq())&&a.uuid&&(Tp("Stopping DIAL: "+a.uuid),sm(a.uuid))}Zl()?Rl().stopSession():Ol("stopSession called before API ready.");(a=eq())?a.disconnect(1):(zc("yt-remote-before-disconnect",1),zc("yt-remote-connection-change",!1));qq(null)}
function Tp(a){Xj("remote",a)}
function dq(){return!!r("yt.mdx.remote.castv2_")}
function hq(){return r("yt.mdx.remote.screenService_")}
function Rp(){if(!bq){var a=hq();bq=a?new Kp(a):null}return bq}
function Sp(){return r("yt.mdx.remote.currentScreenId_")}
function sq(a){q("yt.mdx.remote.currentScreenId_",a,void 0);if(Z){var b=Z;b.o=x()+3E5;if((b.Ob=a)&&(a=Dp(b,a))&&!xk(b.f,a)){var c=Xa(b.f);c.push(a);vp(b,c,!0)}}}
function lq(){return r("yt.mdx.remote.currentDialId_")}
function rq(a){q("yt.mdx.remote.currentDialId_",a,void 0)}
function tq(){return r("yt.mdx.remote.connectData_")}
function Vp(a){q("yt.mdx.remote.connectData_",a,void 0)}
function eq(){return r("yt.mdx.remote.connection_")}
function qq(a){var b=eq();Vp(null);a?eq():(sq(""),rq(""));q("yt.mdx.remote.connection_",a,void 0);Pp&&(z(Pp,function(b){b(a)}),Pp.length=0);
b&&!a?zc("yt-remote-connection-change",!1):!b&&a&&L("yt-remote-connection-change",!0)}
function Xp(){var a=Kk();if(!a)return null;if(hq()){var b=Rp().$();return yk(b,a)}return Z?Dp(Z,a):null}
function nq(a,b){Sp();sq(a.id);var c=new Y(Mp,a,Yp());c.connect(b,tq());c.subscribe("beforeDisconnect",function(a){zc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){eq()&&(eq(),qq(null))});
qq(c)}
function pq(a){lq();Tp("Connecting to: "+(a?a.toString():"null"));rq(a.id);var b=tq();b?Hp(a.id,b.videoIds[b.index],b.currentTime):Hp(a.id)}
function $p(){var a=Xp();a?(Tp("Resume connection to: "+hk(a)),nq(a,0)):(Yk(),Xl(),Tp("Skipping connecting because no session screen found."))}
function Np(a){Tp("Paired with: "+hk(a));a?nq(a,1):qq(null)}
function Op(){var a=Sp();a&&!iq()&&(Tp("Dropping current screen with id: "+a),mq());Xp()||Yk()}
var Mp=null,Pp=null,bq=null,Z=null;function Qp(a){var b=Yp();if(pb(b)){var b=Jk(),c=vj("yt-remote-session-name")||"",d=vj("yt-remote-session-app")||"",b={device:"REMOTE_CONTROL",id:b,name:c,app:d};a&&(b["mdx-version"]=3);q("yt.mdx.remote.channelParams_",b,void 0)}}
function Yp(){return r("yt.mdx.remote.channelParams_")||{}}
function Zp(a){a?(U("yt-remote-session-app",a.app),U("yt-remote-session-name",a.name)):(wj("yt-remote-session-app"),wj("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var Up=[];var uq=null,vq=[];function wq(){xq();if(jq()){var a=uq;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function yq(a){"cast-selector-receiver"==a?Yl():zq(a)}
function zq(a){var b=cq();if(a=rk(b,a)){var c=uq,d=c.getVideoData().video_id;oq(a,{videoIds:[d],listId:c.getVideoData().list,videoId:d,index:0,currentTime:c.getCurrentTime()});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function xq(){var a=uq;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(cq(),jq())}
;var Aq=null,Bq=[];function Cq(a){return{externalChannelId:a.externalChannelId,Kd:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Dq(a){Eq(Cq(a))}
function Eq(a){Fi()?(S(si,new mi(a.externalChannelId,a.Kd?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Nd({event:"subscribe",source:a.source}))&&$g(a)):Fq(a)}
function Fq(a){Ei(function(b){b.subscription_ajax&&Eq(a)},null)}
function Gq(a){a=Cq(a);S(xi,new oi(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Nd({event:"unsubscribe",source:a.source}))&&$g(a)}
function Hq(a){Aq&&Aq.channelSubscribed(a.f,a.subscriptionId)}
function Iq(a){Aq&&Aq.channelUnsubscribed(a.f)}
;function Jq(a){E.call(this);this.h=a;this.h.subscribe("command",this.Oc,this);this.j={};this.l=!1}
y(Jq,E);g=Jq.prototype;g.start=function(){this.l||this.isDisposed()||(this.l=!0,Kq(this.h,"RECEIVING"))};
g.Oc=function(a,b){if(this.l&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.j))){var d=v(this.xe,this,c);this.j[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&Lq(this,c.event);break;default:this.f.isReady()&&this.f[a]&&(c=Mq(a,b||{}),c=this.f[a].apply(this.f,c),(c=Nq(a,c))&&this.l&&!this.isDisposed()&&Kq(this.h,a,c))}}};
g.xe=function(a,b){this.l&&!this.isDisposed()&&Kq(this.h,a,this.Qb(a,b))};
g.Qb=function(a,b){if(null!=b)return{value:b}};
function Lq(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
g.F=function(){this.h.unsubscribe("command",this.Oc,this);this.h=null;for(var a in this.j)Lq(this,a);Jq.H.F.call(this)};function Oq(a,b){Jq.call(this,b);this.f=a;this.start()}
y(Oq,Jq);Oq.prototype.addEventListener=function(a,b){this.f.addEventListener(a,b)};
Oq.prototype.removeEventListener=function(a,b){this.f.removeEventListener(a,b)};
function Mq(a,b){switch(a){case "loadVideoById":return b=Bj(b),Dj(b),[b];case "cueVideoById":return b=Bj(b),Dj(b),[b];case "loadVideoByPlayerVars":return Dj(b),[b];case "cueVideoByPlayerVars":return Dj(b),[b];case "loadPlaylist":return b=Cj(b),Dj(b),[b];case "cuePlaylist":return b=Cj(b),Dj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Nq(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Oq.prototype.Qb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Oq.H.Qb.call(this,a,b)};
Oq.prototype.F=function(){Oq.H.F.call(this);delete this.f};function Pq(){var a=this.h=new dj,b=v(this.te,this);a.h=b;a.j=null;this.l=[];this.w=!1;this.o={}}
g=Pq.prototype;g.te=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.o[c]||"onReady"==c||(this.addEventListener(c,Qq(this,c)),this.o[c]=!0)}else this.bd(a,b)};
g.bd=function(){};
function Qq(a,b){return v(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.xd=function(){this.w=!0;this.sendMessage("initialDelivery",this.Rb());this.sendMessage("onReady");z(this.l,this.cd,this);this.l=[]};
g.Rb=function(){return null};
function Rq(a,b){a.sendMessage("infoDelivery",b)}
g.cd=function(a){this.w?this.h.sendMessage(a):this.l.push(a)};
g.sendMessage=function(a,b){this.cd({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.h=null};function Sq(a){Pq.call(this);this.f=a;this.j=[];this.addEventListener("onReady",v(this.be,this));this.addEventListener("onVideoProgress",v(this.Be,this));this.addEventListener("onVolumeChange",v(this.Ce,this));this.addEventListener("onApiChange",v(this.we,this));this.addEventListener("onPlaybackQualityChange",v(this.ye,this));this.addEventListener("onPlaybackRateChange",v(this.ze,this));this.addEventListener("onStateChange",v(this.Ae,this))}
y(Sq,Pq);g=Sq.prototype;g.bd=function(a,b){if(this.f[a]){b=b||[];if(0<b.length&&zj(a)){var c;c=b;if(ha(c[0])&&!da(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Bj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Aj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Cj.apply(window,c)}c=d}Dj(c);b.length=1;b[0]=c}this.f[a].apply(this.f,b);zj(a)&&Rq(this,this.Rb())}};
g.be=function(){var a=v(this.xd,this);this.h.f=a};
g.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
g.Rb=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ua(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.f[e]();b[f]=k}catch(l){}}}b.videoData=this.f.getVideoData();return b};
g.Ae=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),videoUrl:this.f.getVideoUrl(),playlist:this.f.getPlaylist(),playlistIndex:this.f.getPlaylistIndex()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());
this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Rq(this,a)};
g.ye=function(a){Rq(this,{playbackQuality:a})};
g.ze=function(a){Rq(this,{playbackRate:a})};
g.we=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var l=f[h],n=this.f.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
g.Ce=function(){Rq(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
g.Be=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Rq(this,a)};
g.dispose=function(){Sq.H.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.f.removeEventListener(b.eventType,b.listener)}this.j=[]};function Tq(a,b,c){V.call(this);this.f=a;this.h=b;this.j=c}
y(Tq,V);function Kq(a,b,c){if(!a.isDisposed()){var d=a.f,e=a.h;a=a.j;d.isDisposed()||e!=d.f||(b={id:a,command:b},c&&(b.data=c),d.f.postMessage(N(b),d.j))}}
Tq.prototype.F=function(){this.h=this.f=null;Tq.H.F.call(this)};function Uq(a,b,c){E.call(this);this.f=a;this.j=c;this.l=O(window,"message",v(this.o,this));this.h=new Tq(this,a,b);dc(this,oa(ec,this.h))}
y(Uq,E);Uq.prototype.o=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.j)a:{b=this.f;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,u(c))){try{c=yd(c)}catch(d){return}c.command&&(a=this.h,b=c.command,c=c.data,a.isDisposed()||a.C("command",b,c))}};
Uq.prototype.F=function(){We(this.l);this.f=null;Uq.H.F.call(this)};var Vq=!1;function Wq(a){if(a=a.match(/[\d]+/g))a.length=3,a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Vq=!0,a.description)){Wq(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Vq=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Vq=!!a&&a.enabledPlugin)){Wq(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Vq=!0;Wq(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Vq=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Vq=!0,Wq(b.GetVariable("$version"))}catch(c){}})();function Xq(a){return(a=a.exec(vb))?a[1]:""}
(function(){if(zf)return Xq(/Firefox\/([0-9.]+)/);if(M||id||hd)return sd;if(Df)return Xq(/Chrome\/([0-9.]+)/);if(Ef&&!(gd()||C("iPad")||C("iPod")))return Xq(/Version\/([0-9.]+)/);if(Af||Bf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(vb);if(a)return a[1]+"."+a[2]}else if(Cf)return(a=Xq(/Android\s+([0-9.]+)/))?a:Xq(/Version\/([0-9.]+)/);return""})();function Yq(){var a={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};return new an(function(b,c){a.X=function(a){Ud(a)?b(a):c(a)};
a.onError=c;a.Ma=c;Zd("//googleads.g.doubleclick.net/pagead/id",a)})}
;var Zq=null;function $q(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return ar(""),"";a=JSON.parse(a.substr(4)).id;ar(a);return a}
function br(){J(function(){Zq=null},3E5)}
function ar(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function cr(){}
;function dr(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&$g(c)}}
;function er(a){Q.call(this,1,arguments);this.Lb=a}
y(er,Q);function fr(a,b){Q.call(this,2,arguments);this.h=a;this.f=b}
y(fr,Q);function gr(a,b,c,d){Q.call(this,1,arguments);this.f=b;this.j=c||null;this.h=d||null}
y(gr,Q);function hr(a,b){Q.call(this,1,arguments);this.h=a;this.f=b||null}
y(hr,Q);function ir(a){Q.call(this,1,arguments)}
y(ir,Q);var jr=new R("ypc-core-load",er),kr=new R("ypc-guide-sync-success",fr),lr=new R("ypc-purchase-success",gr),mr=new R("ypc-subscription-cancel",ir),nr=new R("ypc-subscription-cancel-success",hr),or=new R("ypc-init-subscription",ir);var pr=!1,qr=[],rr=[];function sr(a){a.f?pr?S(wi,a):S(jr,new er(function(){S(or,new ir(a.f))})):tr(a.h,a.l,a.j,a.source)}
function ur(a){a.f?pr?S(Bi,a):S(jr,new er(function(){S(mr,new ir(a.f))})):vr(a.h,a.subscriptionId,a.l,a.j,a.source)}
function wr(a){xr(Xa(a.f))}
function yr(a){zr(Xa(a.f))}
function Ar(a){Br(a.f,a.isEnabled,null)}
function Cr(a,b,c,d){Br(a,b,c,d)}
function Dr(a){var b=a.h,c=a.f.subscriptionId;b&&c&&S(vi,new ni(b,c,a.f.channelInfo))}
function Er(a){var b=a.f;db(a.h,function(a,d){S(vi,new ni(d,a,b[d]))})}
function Fr(a){S(Ai,new ki(a.h.itemId));a.f&&a.f.length&&(Gr(a.f,Ai),Gr(a.f,Ci))}
function tr(a,b,c,d){var e=new ki(a);S(ti,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=I("PLAYBACK_ID"))&&(c.plid=d);(d=I("EVENT_ID"))&&(c.ei=d);b&&Hr(b,c);Zd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",dc:f,L:c,X:function(b,c){var d=c.response;S(vi,new ni(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&L("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&dr(d.actions)},
$b:function(){S(ui,e)}})}
function vr(a,b,c,d,e){var f=new ki(a);S(yi,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=I("PLAYBACK_ID"))&&(d.plid=a);(a=I("EVENT_ID"))&&(d.ei=a);c&&Hr(c,d);Zd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",dc:h,L:d,X:function(a,b){var c=b.response;S(Ai,f);c.actions&&dr(c.actions)},
$b:function(){S(zi,f)}})}
function Br(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Zd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",L:e,onError:function(){d&&d()}})}}
function xr(a){if(a.length){var b=Za(a,0,40);S("subscription-batch-subscribe-loading");Gr(b,ti);var c={};c.a=b.join(",");var d=function(){S("subscription-batch-subscribe-loaded");Gr(b,ui)};
Zd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",L:c,X:function(c,f){d();var h=f.response,k=h.id;if(da(k)&&k.length==b.length){var l=h.channel_info_map;z(k,function(a,c){var d=b[c];S(vi,new ni(d,a,l[d]))});
a.length?xr(a):S("subscription-batch-subscribe-finished")}},
onError:function(){d();S("subscription-batch-subscribe-failure")}})}}
function zr(a){if(a.length){var b=Za(a,0,40);S("subscription-batch-unsubscribe-loading");Gr(b,yi);var c={};c.c=b.join(",");var d=function(){S("subscription-batch-unsubscribe-loaded");Gr(b,zi)};
Zd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",L:c,X:function(){d();Gr(b,Ai);a.length&&zr(a)},
onError:function(){d()}})}}
function Gr(a,b){z(a,function(a){S(b,new ki(a))})}
function Hr(a,b){var c=Qd(a),d;for(d in c)b[d]=c[d]}
;var Ir,Jr=null,Kr=null,Lr=null,Mr=!1;
function Nr(){var a=I("PLAYER_CONFIG",void 0),b=I("REVERSE_MOBIUS_PERCENT",void 0);if("1"!=a.privembed&&gg&&100*Math.random()<b||mg("enable_server_side_ad_request_for_embeds"))try{var c;try{var d=r("yt.www.ads.biscotti.getId_"),e;if(d)e=d();else{if(!Zq){var f=Yq().then($q),h=en(br,br,void 0);h.j=!0;mn(f,h);Zq=f}e=Zq}c=e}catch(k){c=fn(k)}gn(c,null,cr,void 0)}catch(k){nc(k)}if(I("REQUEST_POST_MESSAGE_ORIGIN")){if(!Ir){Ir=new dj;Ir.f=Nr;return}Ir.origin&&"*"!=Ir.origin&&(a.args.post_message_origin=Ir.origin)}d=
document.referrer;b=I("POST_MESSAGE_ORIGIN");c=!1;mg("legacy_cast")&&u(d)&&u(b)&&-1<d.indexOf(b)&&Vg(b)&&Vg(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=d);I("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Dj(a.args);Jr=Yh("player",a);d=I("POST_MESSAGE_ID","player");I("ENABLE_JS_API")?Lr=new Sq(Jr):I("ENABLE_POST_API")&&u(d)&&u(b)&&(Kr=new Uq(window.parent,d,b),Lr=new Oq(Jr,Kr.h));mg("legacy_cast")&&((Mr=c&&!I("ENABLE_CAST_API"))?a.args.disableCast="1":(a=Jr,
Lp(),uq=a,uq.addEventListener("onReady",wq),uq.addEventListener("onRemoteReceiverSelected",yq),vq.push(wc("yt-remote-receiver-availability-change",xq)),vq.push(wc("yt-remote-auto-connect",zq))));I("BG_P")&&(I("BG_I")||I("BG_IU"))&&Lc();ie();Aq=Jr;Aq.addEventListener("SUBSCRIBE",Dq);Aq.addEventListener("UNSUBSCRIBE",Gq);Bq.push(hh(vi,Hq),hh(Ai,Iq))}
;q("yt.setConfig",jc,void 0);q("yt.setMsg",function(a){kc(ic,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||"WEB",version:d||I("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e;if(a&&e&&!(5<=ee)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,l=!1;try{h=a.lineNumber||a.line||"Not available"}catch(w){h="Not available",l=!0}try{k=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||f}catch(w){k=
"Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(de[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={dc:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},L:{url:I("PAGE_NAME",window.location.href),file:a.fileName},
method:"POST"};e&&(b.L.stack=e);for(var n in c)b.L["client."+n]=c[n];if(n=I("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var F in n)b.L[F]=n[F];Zd("/error_204",b);de[a.message]=!0;ee++}}},void 0);
q("writeEmbed",Nr,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&$g(a);return!0},void 0);
var Or=lc(function(){wh("ol");pr=!0;rr.push(hh(si,sr),hh(xi,ur));pr||(rr.push(hh(wi,sr),hh(Bi,ur),hh(pi,wr),hh(qi,yr),hh(ri,Ar)),qr.push(wc("subscription-prefs",Cr)),rr.push(hh(lr,Dr),hh(nr,Fr),hh(kr,Er)));Ff.getInstance();var a=1<window.devicePixelRatio;if(Kf(0,119)!=a){var b="f"+(Math.floor(119/31)+1),c=Jf(b)||0,c=a?c|67108864:c&-67108865;0==c?delete Gf[b]:(a=c.toString(16),Gf[b]=a.toString());var d,b=[];for(d in Gf)b.push(d+"="+escape(Gf[d]));d=b.join("&");ef("PREF",d,63072E3)}}),Pr=lc(function(){var a=
Jr;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();I("PL_ATT")&&(Kc=null);for(var a=0,b=ge.length;a<b;a++){var c=ge[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):K(c)}}ge.length=0;a=Gc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Bc(a),b.parentNode.removeChild(b);he=!1;jc("DCLKSTAT",0);yc(qr);qr.length=0;ih(rr);rr.length=0;pr=!1;Aq&&(Aq.removeEventListener("SUBSCRIBE",Eq),Aq.removeEventListener("UNSUBSCRIBE",Gq));Aq=null;ih(Bq);Bq.length=0;
mg("legacy_cast")&&!Mr&&(yc(vq),vq.length=0,uq&&(uq.removeEventListener("onRemoteReceiverSelected",yq),uq.removeEventListener("onReady",wq),uq=null),aq());fc(Lr,Kr);Jr&&Jr.destroy()});
window.addEventListener?(window.addEventListener("load",Or),window.addEventListener("unload",Pr)):window.attachEvent&&(window.attachEvent("onload",Or),window.attachEvent("onunload",Pr));var Qr=Yi.getInstance(),Rr=Li(Qr);Rr in cj||(Qr.register(),Qr.yb.push(wc("yt-uix-init-"+Rr,Qr.init,Qr)),Qr.yb.push(wc("yt-uix-dispose-"+Rr,Qr.dispose,Qr)),cj[Rr]=Qr);})();
