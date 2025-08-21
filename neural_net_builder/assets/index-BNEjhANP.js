(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(c){if(c.ep)return;c.ep=!0;const h=r(c);fetch(c.href,h)}})();function Ib(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var _c={exports:{}},br={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function tv(){if(Nm)return br;Nm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,c,h){var f=null;if(h!==void 0&&(f=""+h),c.key!==void 0&&(f=""+c.key),"key"in c){h={};for(var g in c)g!=="key"&&(h[g]=c[g])}else h=c;return c=h.ref,{$$typeof:a,type:s,key:f,ref:c!==void 0?c:null,props:h}}return br.Fragment=i,br.jsx=r,br.jsxs=r,br}var km;function ev(){return km||(km=1,_c.exports=tv()),_c.exports}var T=ev(),Vc={exports:{}},Ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function nv(){if(jm)return Ot;jm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function x(A){return A===null||typeof A!="object"?null:(A=v&&A[v]||A["@@iterator"],typeof A=="function"?A:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function L(A,H,tt){this.props=A,this.context=H,this.refs=M,this.updater=tt||E}L.prototype.isReactComponent={},L.prototype.setState=function(A,H){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,H,"setState")},L.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function V(){}V.prototype=L.prototype;function B(A,H,tt){this.props=A,this.context=H,this.refs=M,this.updater=tt||E}var k=B.prototype=new V;k.constructor=B,w(k,L.prototype),k.isPureReactComponent=!0;var Z=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function J(A,H,tt,$,it,Tt){return tt=Tt.ref,{$$typeof:a,type:A,key:H,ref:tt!==void 0?tt:null,props:Tt}}function G(A,H){return J(A.type,H,void 0,void 0,void 0,A.props)}function et(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function ct(A){var H={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(tt){return H[tt]})}var wt=/\/+/g;function Ut(A,H){return typeof A=="object"&&A!==null&&A.key!=null?ct(""+A.key):H.toString(36)}function pe(){}function ie(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(pe,pe):(A.status="pending",A.then(function(H){A.status==="pending"&&(A.status="fulfilled",A.value=H)},function(H){A.status==="pending"&&(A.status="rejected",A.reason=H)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function qt(A,H,tt,$,it){var Tt=typeof A;(Tt==="undefined"||Tt==="boolean")&&(A=null);var ft=!1;if(A===null)ft=!0;else switch(Tt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(A.$$typeof){case a:case i:ft=!0;break;case y:return ft=A._init,qt(ft(A._payload),H,tt,$,it)}}if(ft)return it=it(A),ft=$===""?"."+Ut(A,0):$,Z(it)?(tt="",ft!=null&&(tt=ft.replace(wt,"$&/")+"/"),qt(it,H,tt,"",function(dt){return dt})):it!=null&&(et(it)&&(it=G(it,tt+(it.key==null||A&&A.key===it.key?"":(""+it.key).replace(wt,"$&/")+"/")+ft)),H.push(it)),1;ft=0;var Jt=$===""?".":$+":";if(Z(A))for(var St=0;St<A.length;St++)$=A[St],Tt=Jt+Ut($,St),ft+=qt($,H,tt,Tt,it);else if(St=x(A),typeof St=="function")for(A=St.call(A),St=0;!($=A.next()).done;)$=$.value,Tt=Jt+Ut($,St++),ft+=qt($,H,tt,Tt,it);else if(Tt==="object"){if(typeof A.then=="function")return qt(ie(A),H,tt,$,it);throw H=String(A),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ft}function _(A,H,tt){if(A==null)return A;var $=[],it=0;return qt(A,$,"","",function(Tt){return H.call(tt,Tt,it++)}),$}function F(A){if(A._status===-1){var H=A._result;H=H(),H.then(function(tt){(A._status===0||A._status===-1)&&(A._status=1,A._result=tt)},function(tt){(A._status===0||A._status===-1)&&(A._status=2,A._result=tt)}),A._status===-1&&(A._status=0,A._result=H)}if(A._status===1)return A._result.default;throw A._result}var I=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function yt(){}return Ot.Children={map:_,forEach:function(A,H,tt){_(A,function(){H.apply(this,arguments)},tt)},count:function(A){var H=0;return _(A,function(){H++}),H},toArray:function(A){return _(A,function(H){return H})||[]},only:function(A){if(!et(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ot.Component=L,Ot.Fragment=r,Ot.Profiler=c,Ot.PureComponent=B,Ot.StrictMode=s,Ot.Suspense=p,Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,Ot.__COMPILER_RUNTIME={__proto__:null,c:function(A){return j.H.useMemoCache(A)}},Ot.cache=function(A){return function(){return A.apply(null,arguments)}},Ot.cloneElement=function(A,H,tt){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var $=w({},A.props),it=A.key,Tt=void 0;if(H!=null)for(ft in H.ref!==void 0&&(Tt=void 0),H.key!==void 0&&(it=""+H.key),H)!K.call(H,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&H.ref===void 0||($[ft]=H[ft]);var ft=arguments.length-2;if(ft===1)$.children=tt;else if(1<ft){for(var Jt=Array(ft),St=0;St<ft;St++)Jt[St]=arguments[St+2];$.children=Jt}return J(A.type,it,void 0,void 0,Tt,$)},Ot.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:h,_context:A},A},Ot.createElement=function(A,H,tt){var $,it={},Tt=null;if(H!=null)for($ in H.key!==void 0&&(Tt=""+H.key),H)K.call(H,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(it[$]=H[$]);var ft=arguments.length-2;if(ft===1)it.children=tt;else if(1<ft){for(var Jt=Array(ft),St=0;St<ft;St++)Jt[St]=arguments[St+2];it.children=Jt}if(A&&A.defaultProps)for($ in ft=A.defaultProps,ft)it[$]===void 0&&(it[$]=ft[$]);return J(A,Tt,void 0,void 0,null,it)},Ot.createRef=function(){return{current:null}},Ot.forwardRef=function(A){return{$$typeof:g,render:A}},Ot.isValidElement=et,Ot.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:F}},Ot.memo=function(A,H){return{$$typeof:d,type:A,compare:H===void 0?null:H}},Ot.startTransition=function(A){var H=j.T,tt={};j.T=tt;try{var $=A(),it=j.S;it!==null&&it(tt,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(yt,I)}catch(Tt){I(Tt)}finally{j.T=H}},Ot.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},Ot.use=function(A){return j.H.use(A)},Ot.useActionState=function(A,H,tt){return j.H.useActionState(A,H,tt)},Ot.useCallback=function(A,H){return j.H.useCallback(A,H)},Ot.useContext=function(A){return j.H.useContext(A)},Ot.useDebugValue=function(){},Ot.useDeferredValue=function(A,H){return j.H.useDeferredValue(A,H)},Ot.useEffect=function(A,H,tt){var $=j.H;if(typeof tt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(A,H)},Ot.useId=function(){return j.H.useId()},Ot.useImperativeHandle=function(A,H,tt){return j.H.useImperativeHandle(A,H,tt)},Ot.useInsertionEffect=function(A,H){return j.H.useInsertionEffect(A,H)},Ot.useLayoutEffect=function(A,H){return j.H.useLayoutEffect(A,H)},Ot.useMemo=function(A,H){return j.H.useMemo(A,H)},Ot.useOptimistic=function(A,H){return j.H.useOptimistic(A,H)},Ot.useReducer=function(A,H,tt){return j.H.useReducer(A,H,tt)},Ot.useRef=function(A){return j.H.useRef(A)},Ot.useState=function(A){return j.H.useState(A)},Ot.useSyncExternalStore=function(A,H,tt){return j.H.useSyncExternalStore(A,H,tt)},Ot.useTransition=function(){return j.H.useTransition()},Ot.version="19.1.0",Ot}var zm;function Mf(){return zm||(zm=1,Vc.exports=nv()),Vc.exports}var P=Mf();const Ht=Ib(P);var Bc={exports:{}},vr={},Uc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function av(){return _m||(_m=1,function(a){function i(_,F){var I=_.length;_.push(F);t:for(;0<I;){var yt=I-1>>>1,A=_[yt];if(0<c(A,F))_[yt]=F,_[I]=A,I=yt;else break t}}function r(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var F=_[0],I=_.pop();if(I!==F){_[0]=I;t:for(var yt=0,A=_.length,H=A>>>1;yt<H;){var tt=2*(yt+1)-1,$=_[tt],it=tt+1,Tt=_[it];if(0>c($,I))it<A&&0>c(Tt,$)?(_[yt]=Tt,_[it]=I,yt=it):(_[yt]=$,_[tt]=I,yt=tt);else if(it<A&&0>c(Tt,I))_[yt]=Tt,_[it]=I,yt=it;else break t}}return F}function c(_,F){var I=_.sortIndex-F.sortIndex;return I!==0?I:_.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var p=[],d=[],y=1,v=null,x=3,E=!1,w=!1,M=!1,L=!1,V=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function Z(_){for(var F=r(d);F!==null;){if(F.callback===null)s(d);else if(F.startTime<=_)s(d),F.sortIndex=F.expirationTime,i(p,F);else break;F=r(d)}}function j(_){if(M=!1,Z(_),!w)if(r(p)!==null)w=!0,K||(K=!0,Ut());else{var F=r(d);F!==null&&qt(j,F.startTime-_)}}var K=!1,J=-1,G=5,et=-1;function ct(){return L?!0:!(a.unstable_now()-et<G)}function wt(){if(L=!1,K){var _=a.unstable_now();et=_;var F=!0;try{t:{w=!1,M&&(M=!1,B(J),J=-1),E=!0;var I=x;try{e:{for(Z(_),v=r(p);v!==null&&!(v.expirationTime>_&&ct());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var A=yt(v.expirationTime<=_);if(_=a.unstable_now(),typeof A=="function"){v.callback=A,Z(_),F=!0;break e}v===r(p)&&s(p),Z(_)}else s(p);v=r(p)}if(v!==null)F=!0;else{var H=r(d);H!==null&&qt(j,H.startTime-_),F=!1}}break t}finally{v=null,x=I,E=!1}F=void 0}}finally{F?Ut():K=!1}}}var Ut;if(typeof k=="function")Ut=function(){k(wt)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ie=pe.port2;pe.port1.onmessage=wt,Ut=function(){ie.postMessage(null)}}else Ut=function(){V(wt,0)};function qt(_,F){J=V(function(){_(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(_){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var I=x;x=F;try{return _()}finally{x=I}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(_,F){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=x;x=_;try{return F()}finally{x=I}},a.unstable_scheduleCallback=function(_,F,I){var yt=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?yt+I:yt):I=yt,_){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=I+A,_={id:y++,callback:F,priorityLevel:_,startTime:I,expirationTime:A,sortIndex:-1},I>yt?(_.sortIndex=I,i(d,_),r(p)===null&&_===r(d)&&(M?(B(J),J=-1):M=!0,qt(j,I-yt))):(_.sortIndex=A,i(p,_),w||E||(w=!0,K||(K=!0,Ut()))),_},a.unstable_shouldYield=ct,a.unstable_wrapCallback=function(_){var F=x;return function(){var I=x;x=F;try{return _.apply(this,arguments)}finally{x=I}}}}(Lc)),Lc}var Vm;function iv(){return Vm||(Vm=1,Uc.exports=av()),Uc.exports}var Hc={exports:{}},qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function ov(){if(Bm)return qe;Bm=1;var a=Mf();function i(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)d+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(p,d,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:p,containerInfo:d,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,qe.createPortal=function(p,d){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(i(299));return h(p,d,null,y)},qe.flushSync=function(p){var d=f.T,y=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=d,s.p=y,s.d.f()}},qe.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(p,d))},qe.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},qe.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var y=d.as,v=g(y,d.crossOrigin),x=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;y==="style"?s.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:E}):y==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},qe.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var y=g(d.as,d.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(p)},qe.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var y=d.as,v=g(y,d.crossOrigin);s.d.L(p,y,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},qe.preloadModule=function(p,d){if(typeof p=="string")if(d){var y=g(d.as,d.crossOrigin);s.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(p)},qe.requestFormReset=function(p){s.d.r(p)},qe.unstable_batchedUpdates=function(p,d){return p(d)},qe.useFormState=function(p,d,y){return f.H.useFormState(p,d,y)},qe.useFormStatus=function(){return f.H.useHostTransitionStatus()},qe.version="19.1.0",qe}var Um;function rv(){if(Um)return Hc.exports;Um=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Hc.exports=ov(),Hc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function lv(){if(Lm)return vr;Lm=1;var a=iv(),i=Mf(),r=rv();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(h(t)!==t)throw Error(s(188))}function p(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,o=e;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return g(l),t;if(u===o)return g(l),e;u=u.sibling}throw Error(s(188))}if(n.return!==o.return)n=l,o=u;else{for(var m=!1,b=l.child;b;){if(b===n){m=!0,n=l,o=u;break}if(b===o){m=!0,o=l,n=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===n){m=!0,n=u,o=l;break}if(b===o){m=!0,o=u,n=l;break}b=b.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function d(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=d(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),k=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),et=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),wt=Symbol.iterator;function Ut(t){return t===null||typeof t!="object"?null:(t=wt&&t[wt]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function ie(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case L:return"Profiler";case M:return"StrictMode";case j:return"Suspense";case K:return"SuspenseList";case et:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case k:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case Z:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:ie(t.type)||"Memo";case G:e=t._payload,t=t._init;try{return ie(t(e))}catch{}}return null}var qt=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},yt=[],A=-1;function H(t){return{current:t}}function tt(t){0>A||(t.current=yt[A],yt[A]=null,A--)}function $(t,e){A++,yt[A]=t.current,t.current=e}var it=H(null),Tt=H(null),ft=H(null),Jt=H(null);function St(t,e){switch($(ft,e),$(Tt,t),$(it,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?rm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=rm(e),t=lm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(it),$(it,t)}function dt(){tt(it),tt(Tt),tt(ft)}function At(t){t.memoizedState!==null&&$(Jt,t);var e=it.current,n=lm(e,t.type);e!==n&&($(Tt,t),$(it,n))}function ht(t){Tt.current===t&&(tt(it),tt(Tt)),Jt.current===t&&(tt(Jt),dr._currentValue=I)}var Xt=Object.prototype.hasOwnProperty,kt=a.unstable_scheduleCallback,Ct=a.unstable_cancelCallback,ce=a.unstable_shouldYield,st=a.unstable_requestPaint,Dt=a.unstable_now,_t=a.unstable_getCurrentPriorityLevel,Wt=a.unstable_ImmediatePriority,Ye=a.unstable_UserBlockingPriority,ge=a.unstable_NormalPriority,sa=a.unstable_LowPriority,Rn=a.unstable_IdlePriority,ua=a.log,yo=a.unstable_setDisableYieldValue,Hn=null,Ee=null;function Re(t){if(typeof ua=="function"&&yo(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Hn,t)}catch{}}var Ne=Math.clz32?Math.clz32:Cs,Xs=Math.log,Hr=Math.LN2;function Cs(t){return t>>>=0,t===0?32:31-(Xs(t)/Hr|0)|0}var Pa=256,Ya=4194304;function qn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pi(t,e,n){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~u,o!==0?l=qn(o):(m&=b,m!==0?l=qn(m):n||(n=b&~t,n!==0&&(l=qn(n))))):(b=o&~u,b!==0?l=qn(b):m!==0?l=qn(m):n||(n=o&~t,n!==0&&(l=qn(n)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:l}function Pn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function jt(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function an(){var t=Pa;return Pa<<=1,(Pa&4194048)===0&&(Pa=256),t}function Dn(){var t=Ya;return Ya<<=1,(Ya&62914560)===0&&(Ya=4194304),t}function gi(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ge(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Rs(t,e,n,o,l,u){var m=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,C=t.hiddenUpdates;for(n=m&~n;0<n;){var U=31-Ne(n),Y=1<<U;b[U]=0,S[U]=-1;var R=C[U];if(R!==null)for(C[U]=null,U=0;U<R.length;U++){var N=R[U];N!==null&&(N.lane&=-536870913)}n&=~Y}o!==0&&yi(t,o,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(m&~e))}function yi(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-Ne(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|n&4194090}function qr(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-Ne(n),l=1<<o;l&e|t[o]&e&&(t[o]|=e),n&=~l}}function ca(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ye(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Em(t.type))}function vi(t,e){var n=F.p;try{return F.p=t,e()}finally{F.p=n}}var be=Math.random().toString(36).slice(2),Me="__reactFiber$"+be,ke="__reactProps$"+be,fa="__reactContainer$"+be,xi="__reactEvents$"+be,Ns="__reactListeners$"+be,bo="__reactHandles$"+be,Pr="__reactResources$"+be,Ga="__reactMarker$"+be;function vo(t){delete t[Me],delete t[ke],delete t[xi],delete t[Ns],delete t[bo]}function ha(t){var e=t[Me];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fa]||n[Me]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fm(t);t!==null;){if(n=t[Me])return n;t=fm(t)}return e}t=n,n=t.parentNode}return null}function da(t){if(t=t[Me]||t[fa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Za(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function ma(t){var e=t[Pr];return e||(e=t[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ve(t){t[Ga]=!0}var Yr=new Set,Gr={};function Nn(t,e){Yn(t,e),Yn(t+"Capture",e)}function Yn(t,e){for(Gr[t]=e,t=0;t<e.length;t++)Yr.add(e[t])}var Zr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ti={},Fe={};function Ze(t){return Xt.call(Fe,t)?!0:Xt.call(Ti,t)?!1:Zr.test(t)?Fe[t]=!0:(Ti[t]=!0,!1)}function Be(t,e,n){if(Ze(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Si(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function dn(t,e,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+o)}}var xo,To;function pa(t){if(xo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xo=e&&e[1]||"",To=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xo+t+To}var So=!1;function Ao(t,e){if(!t||So)return"";So=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(N){var R=N}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(N){R=N}t.call(Y.prototype)}}else{try{throw Error()}catch(N){R=N}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var S=m.split(`
`),C=b.split(`
`);for(l=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(o===S.length||l===C.length)for(o=S.length-1,l=C.length-1;1<=o&&0<=l&&S[o]!==C[l];)l--;for(;1<=o&&0<=l;o--,l--)if(S[o]!==C[l]){if(o!==1||l!==1)do if(o--,l--,0>l||S[o]!==C[l]){var U=`
`+S[o].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=o&&0<=l);break}}}finally{So=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?pa(n):""}function ks(t){switch(t.tag){case 26:case 27:case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 15:return Ao(t.type,!1);case 11:return Ao(t.type.render,!1);case 1:return Ao(t.type,!0);case 31:return pa("Activity");default:return""}}function Qr(t){try{var e="";do e+=ks(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Do(t){var e=Kr(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(m){o=""+m,u.call(this,m)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function z(t){t._valueTracker||(t._valueTracker=Do(t))}function Q(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Kr(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function W(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xt=/[\n"\\]/g;function ut(t){return t.replace(xt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function nt(t,e,n,o,l,u,m,b){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Je(e)):t.value!==""+Je(e)&&(t.value=""+Je(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?gt(t,m,Je(e)):n!=null?gt(t,m,Je(n)):o!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Je(b):t.removeAttribute("name")}function ot(t,e,n,o,l,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+Je(n):"",e=e!=null?""+Je(e):n,b||e===t.value||(t.value=e),t.defaultValue=e}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m)}function gt(t,e,n){e==="number"&&W(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Vt(t,e,n,o){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&o&&(t[n].defaultSelected=!0)}else{for(n=""+Je(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,o&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function fe(t,e,n){if(e!=null&&(e=""+Je(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Je(n):""}function Ue(t,e,n,o){if(e==null){if(o!=null){if(n!=null)throw Error(s(92));if(qt(o)){if(1<o.length)throw Error(s(93));o=o[0]}n=o}n==null&&(n=""),e=n}n=Je(e),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o)}function Le(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fr(t,e,n){var o=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,n):typeof n!="number"||n===0||js.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function te(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var l in e)o=e[l],e.hasOwnProperty(l)&&n[l]!==o&&Fr(t,l,o)}else for(var u in e)e.hasOwnProperty(u)&&Fr(t,u,e[u])}function Oo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zs=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wr(t){return Jr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var _s=null;function Vs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ai=null,Di=null;function sh(t){var e=da(t);if(e&&(t=e.stateNode)){var n=t[ke]||null;t:switch(t=e.stateNode,e.type){case"input":if(nt(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ut(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var l=o[ke]||null;if(!l)throw Error(s(90));nt(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)o=n[e],o.form===t.form&&Q(o)}break t;case"textarea":fe(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Vt(t,!!n.multiple,e,!1)}}}var Bs=!1;function uh(t,e,n){if(Bs)return t(e,n);Bs=!0;try{var o=t(e);return o}finally{if(Bs=!1,(Ai!==null||Di!==null)&&(_l(),Ai&&(e=Ai,t=Di,Di=Ai=null,sh(e),t)))for(e=0;e<t.length;e++)sh(t[e])}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var o=n[ke]||null;if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Us=!1;if(Gn)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Us=!1}var ga=null,Ls=null,$r=null;function ch(){if($r)return $r;var t,e=Ls,n=e.length,o,l="value"in ga?ga.value:ga.textContent,u=l.length;for(t=0;t<n&&e[t]===l[t];t++);var m=n-t;for(o=1;o<=m&&e[n-o]===l[u-o];o++);return $r=l.slice(t,1<o?1-o:void 0)}function Ir(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function fh(){return!1}function We(t){function e(n,o,l,u,m){this._reactName=n,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(n=t[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?tl:fh,this.isPropagationStopped=fh,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=We(Qa),wo=y({},Qa,{view:0,detail:0}),I1=We(wo),Hs,qs,Xo,nl=y({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ys,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(Hs=t.screenX-Xo.screenX,qs=t.screenY-Xo.screenY):qs=Hs=0,Xo=t),Hs)},movementY:function(t){return"movementY"in t?t.movementY:qs}}),hh=We(nl),ty=y({},nl,{dataTransfer:0}),ey=We(ty),ny=y({},wo,{relatedTarget:0}),Ps=We(ny),ay=y({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=We(ay),oy=y({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ry=We(oy),ly=y({},Qa,{data:0}),dh=We(ly),sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cy[t])?!!e[t]:!1}function Ys(){return fy}var hy=y({},wo,{key:function(t){if(t.key){var e=sy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ir(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ys,charCode:function(t){return t.type==="keypress"?Ir(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ir(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dy=We(hy),my=y({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=We(my),py=y({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ys}),gy=We(py),yy=y({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),by=We(yy),vy=y({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xy=We(vy),Ty=y({},Qa,{newState:0,oldState:0}),Sy=We(Ty),Ay=[9,13,27,32],Gs=Gn&&"CompositionEvent"in window,Co=null;Gn&&"documentMode"in document&&(Co=document.documentMode);var Dy=Gn&&"TextEvent"in window&&!Co,ph=Gn&&(!Gs||Co&&8<Co&&11>=Co),gh=" ",yh=!1;function bh(t,e){switch(t){case"keyup":return Ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function Oy(t,e){switch(t){case"compositionend":return vh(e);case"keypress":return e.which!==32?null:(yh=!0,gh);case"textInput":return t=e.data,t===gh&&yh?null:t;default:return null}}function Ey(t,e){if(Oi)return t==="compositionend"||!Gs&&bh(t,e)?(t=ch(),$r=Ls=ga=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ph&&e.locale!=="ko"?null:e.data;default:return null}}var My={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!My[t.type]:e==="textarea"}function Th(t,e,n,o){Ai?Di?Di.push(o):Di=[o]:Ai=o,e=ql(e,"onChange"),0<e.length&&(n=new el("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var Ro=null,No=null;function wy(t){em(t,0)}function al(t){var e=Za(t);if(Q(e))return t}function Sh(t,e){if(t==="change")return e}var Ah=!1;if(Gn){var Zs;if(Gn){var Qs="oninput"in document;if(!Qs){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),Qs=typeof Dh.oninput=="function"}Zs=Qs}else Zs=!1;Ah=Zs&&(!document.documentMode||9<document.documentMode)}function Oh(){Ro&&(Ro.detachEvent("onpropertychange",Eh),No=Ro=null)}function Eh(t){if(t.propertyName==="value"&&al(No)){var e=[];Th(e,No,t,Vs(t)),uh(wy,e)}}function Xy(t,e,n){t==="focusin"?(Oh(),Ro=e,No=n,Ro.attachEvent("onpropertychange",Eh)):t==="focusout"&&Oh()}function Cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(No)}function Ry(t,e){if(t==="click")return al(e)}function Ny(t,e){if(t==="input"||t==="change")return al(e)}function ky(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:ky;function ko(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var l=n[o];if(!Xt.call(e,l)||!on(t[l],e[l]))return!1}return!0}function Mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wh(t,e){var n=Mh(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Mh(n)}}function Xh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ch(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=W(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=W(t.document)}return e}function Ks(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var jy=Gn&&"documentMode"in document&&11>=document.documentMode,Ei=null,Fs=null,jo=null,Js=!1;function Rh(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Js||Ei==null||Ei!==W(o)||(o=Ei,"selectionStart"in o&&Ks(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jo&&ko(jo,o)||(jo=o,o=ql(Fs,"onSelect"),0<o.length&&(e=new el("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=Ei)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mi={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Ws={},Nh={};Gn&&(Nh=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function Fa(t){if(Ws[t])return Ws[t];if(!Mi[t])return t;var e=Mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nh)return Ws[t]=e[n];return t}var kh=Fa("animationend"),jh=Fa("animationiteration"),zh=Fa("animationstart"),zy=Fa("transitionrun"),_y=Fa("transitionstart"),Vy=Fa("transitioncancel"),_h=Fa("transitionend"),Vh=new Map,$s="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$s.push("scrollEnd");function On(t,e){Vh.set(t,e),Nn(e,[t])}var Bh=new WeakMap;function mn(t,e){if(typeof t=="object"&&t!==null){var n=Bh.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Qr(e)},Bh.set(t,e),e)}return{value:t,source:e,stack:Qr(e)}}var pn=[],wi=0,Is=0;function il(){for(var t=wi,e=Is=wi=0;e<t;){var n=pn[e];pn[e++]=null;var o=pn[e];pn[e++]=null;var l=pn[e];pn[e++]=null;var u=pn[e];if(pn[e++]=null,o!==null&&l!==null){var m=o.pending;m===null?l.next=l:(l.next=m.next,m.next=l),o.pending=l}u!==0&&Uh(n,l,u)}}function ol(t,e,n,o){pn[wi++]=t,pn[wi++]=e,pn[wi++]=n,pn[wi++]=o,Is|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function tu(t,e,n,o){return ol(t,e,n,o),rl(t)}function Xi(t,e){return ol(t,null,null,e),rl(t)}function Uh(t,e,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var l=!1,u=t.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-Ne(n),t=u.hiddenUpdates,o=t[l],o===null?t[l]=[e]:o.push(e),e.lane=n|536870912),u):null}function rl(t){if(50<or)throw or=0,rc=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ci={};function By(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,o){return new By(t,e,n,o)}function eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zn(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Lh(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ll(t,e,n,o,l,u){var m=0;if(o=t,typeof t=="function")eu(t)&&(m=1);else if(typeof t=="string")m=Lb(t,n,it.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case et:return t=rn(31,n,e,l),t.elementType=et,t.lanes=u,t;case w:return Ja(n.children,l,u,e);case M:m=8,l|=24;break;case L:return t=rn(12,n,e,l|2),t.elementType=L,t.lanes=u,t;case j:return t=rn(13,n,e,l),t.elementType=j,t.lanes=u,t;case K:return t=rn(19,n,e,l),t.elementType=K,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V:case k:m=10;break t;case B:m=9;break t;case Z:m=11;break t;case J:m=14;break t;case G:m=16,o=null;break t}m=29,n=Error(s(130,t===null?"null":typeof t,"")),o=null}return e=rn(m,n,e,l),e.elementType=t,e.type=o,e.lanes=u,e}function Ja(t,e,n,o){return t=rn(7,t,o,e),t.lanes=n,t}function nu(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function au(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ri=[],Ni=0,sl=null,ul=0,gn=[],yn=0,Wa=null,Qn=1,Kn="";function $a(t,e){Ri[Ni++]=ul,Ri[Ni++]=sl,sl=t,ul=e}function Hh(t,e,n){gn[yn++]=Qn,gn[yn++]=Kn,gn[yn++]=Wa,Wa=t;var o=Qn;t=Kn;var l=32-Ne(o)-1;o&=~(1<<l),n+=1;var u=32-Ne(e)+l;if(30<u){var m=l-l%5;u=(o&(1<<m)-1).toString(32),o>>=m,l-=m,Qn=1<<32-Ne(e)+l|n<<l|o,Kn=u+t}else Qn=1<<u|n<<l|o,Kn=t}function iu(t){t.return!==null&&($a(t,1),Hh(t,1,0))}function ou(t){for(;t===sl;)sl=Ri[--Ni],Ri[Ni]=null,ul=Ri[--Ni],Ri[Ni]=null;for(;t===Wa;)Wa=gn[--yn],gn[yn]=null,Kn=gn[--yn],gn[yn]=null,Qn=gn[--yn],gn[yn]=null}var Qe=null,le=null,Lt=!1,Ia=null,kn=!1,ru=Error(s(519));function ti(t){var e=Error(s(418,""));throw Vo(mn(e,t)),ru}function qh(t){var e=t.stateNode,n=t.type,o=t.memoizedProps;switch(e[Me]=t,e[ke]=o,n){case"dialog":Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":case"embed":Nt("load",e);break;case"video":case"audio":for(n=0;n<lr.length;n++)Nt(lr[n],e);break;case"source":Nt("error",e);break;case"img":case"image":case"link":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"input":Nt("invalid",e),ot(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),z(e);break;case"select":Nt("invalid",e);break;case"textarea":Nt("invalid",e),Ue(e,o.value,o.defaultValue,o.children),z(e)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||o.suppressHydrationWarning===!0||om(e.textContent,n)?(o.popover!=null&&(Nt("beforetoggle",e),Nt("toggle",e)),o.onScroll!=null&&Nt("scroll",e),o.onScrollEnd!=null&&Nt("scrollend",e),o.onClick!=null&&(e.onclick=Pl),e=!0):e=!1,e||ti(t)}function Ph(t){for(Qe=t.return;Qe;)switch(Qe.tag){case 5:case 13:kn=!1;return;case 27:case 3:kn=!0;return;default:Qe=Qe.return}}function zo(t){if(t!==Qe)return!1;if(!Lt)return Ph(t),Lt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Sc(t.type,t.memoizedProps)),n=!n),n&&le&&ti(t),Ph(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){le=Mn(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}le=null}}else e===27?(e=le,Na(t.type)?(t=Ec,Ec=null,le=t):le=e):le=Qe?Mn(t.stateNode.nextSibling):null;return!0}function _o(){le=Qe=null,Lt=!1}function Yh(){var t=Ia;return t!==null&&(tn===null?tn=t:tn.push.apply(tn,t),Ia=null),t}function Vo(t){Ia===null?Ia=[t]:Ia.push(t)}var lu=H(null),ei=null,Fn=null;function ya(t,e,n){$(lu,e._currentValue),e._currentValue=n}function Jn(t){t._currentValue=lu.current,tt(lu)}function su(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function uu(t,e,n,o){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var m=l.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=l;for(var S=0;S<e.length;S++)if(b.context===e[S]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),su(u.return,n,t),o||(m=null);break t}u=b.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),su(m,n,t),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Bo(t,e,n,o){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=l.type;on(l.pendingProps.value,m.value)||(t!==null?t.push(b):t=[b])}}else if(l===Jt.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(dr):t=[dr])}l=l.return}t!==null&&uu(e,t,n,o),e.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!on(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ni(t){ei=t,Fn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function He(t){return Gh(ei,t)}function fl(t,e){return ei===null&&ni(t),Gh(t,e)}function Gh(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Fn===null){if(t===null)throw Error(s(308));Fn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Fn=Fn.next=e;return n}var Uy=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Ly=a.unstable_scheduleCallback,Hy=a.unstable_NormalPriority,Ae={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new Uy,data:new Map,refCount:0}}function Uo(t){t.refCount--,t.refCount===0&&Ly(Hy,function(){t.controller.abort()})}var Lo=null,fu=0,ki=0,ji=null;function qy(t,e){if(Lo===null){var n=Lo=[];fu=0,ki=dc(),ji={status:"pending",value:void 0,then:function(o){n.push(o)}}}return fu++,e.then(Zh,Zh),e}function Zh(){if(--fu===0&&Lo!==null){ji!==null&&(ji.status="fulfilled");var t=Lo;Lo=null,ki=0,ji=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Py(t,e){var n=[],o={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(o.status="rejected",o.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),o}var Qh=_.S;_.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&qy(t,e),Qh!==null&&Qh(t,e)};var ai=H(null);function hu(){var t=ai.current;return t!==null?t:It.pooledCache}function hl(t,e){e===null?$(ai,ai.current):$(ai,e.pool)}function Kh(){var t=hu();return t===null?null:{parent:Ae._currentValue,pool:t}}var Ho=Error(s(460)),Fh=Error(s(474)),dl=Error(s(542)),du={then:function(){}};function Jh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ml(){}function Wh(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ml,ml),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ih(t),t;default:if(typeof e.status=="string")e.then(ml,ml);else{if(t=It,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=o}},function(o){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ih(t),t}throw qo=e,Ho}}var qo=null;function $h(){if(qo===null)throw Error(s(459));var t=qo;return qo=null,t}function Ih(t){if(t===Ho||t===dl)throw Error(s(483))}var ba=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var l=o.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),o.pending=e,e=rl(t),Uh(t,null,n),e}return ol(t,o,e,n),rl(t)}function Po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,qr(t,n)}}function gu(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?l=u=e:u=u.next=e}else l=u=e;n={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var yu=!1;function Yo(){if(yu){var t=ji;if(t!==null)throw t}}function Go(t,e,n,o){yu=!1;var l=t.updateQueue;ba=!1;var u=l.firstBaseUpdate,m=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var S=b,C=S.next;S.next=null,m===null?u=C:m.next=C,m=S;var U=t.alternate;U!==null&&(U=U.updateQueue,b=U.lastBaseUpdate,b!==m&&(b===null?U.firstBaseUpdate=C:b.next=C,U.lastBaseUpdate=S))}if(u!==null){var Y=l.baseState;m=0,U=C=S=null,b=u;do{var R=b.lane&-536870913,N=R!==b.lane;if(N?(zt&R)===R:(o&R)===R){R!==0&&R===ki&&(yu=!0),U!==null&&(U=U.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var bt=t,mt=b;R=e;var Ft=n;switch(mt.tag){case 1:if(bt=mt.payload,typeof bt=="function"){Y=bt.call(Ft,Y,R);break t}Y=bt;break t;case 3:bt.flags=bt.flags&-65537|128;case 0:if(bt=mt.payload,R=typeof bt=="function"?bt.call(Ft,Y,R):bt,R==null)break t;Y=y({},Y,R);break t;case 2:ba=!0}}R=b.callback,R!==null&&(t.flags|=64,N&&(t.flags|=8192),N=l.callbacks,N===null?l.callbacks=[R]:N.push(R))}else N={lane:R,tag:b.tag,payload:b.payload,callback:b.callback,next:null},U===null?(C=U=N,S=Y):U=U.next=N,m|=R;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;N=b,b=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);U===null&&(S=Y),l.baseState=S,l.firstBaseUpdate=C,l.lastBaseUpdate=U,u===null&&(l.shared.lanes=0),wa|=m,t.lanes=m,t.memoizedState=Y}}function td(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function ed(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)td(n[t],e)}var zi=H(null),pl=H(0);function nd(t,e){t=aa,$(pl,t),$(zi,e),aa=t|e.baseLanes}function bu(){$(pl,aa),$(zi,zi.current)}function vu(){aa=pl.current,tt(zi),tt(pl)}var Ta=0,Et=null,Qt=null,xe=null,gl=!1,_i=!1,ii=!1,yl=0,Zo=0,Vi=null,Yy=0;function he(){throw Error(s(321))}function xu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function Tu(t,e,n,o,l,u){return Ta=u,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=t===null||t.memoizedState===null?Ud:Ld,ii=!1,u=n(o,l),ii=!1,_i&&(u=id(e,n,o,l)),ad(t),u}function ad(t){_.H=Al;var e=Qt!==null&&Qt.next!==null;if(Ta=0,xe=Qt=Et=null,gl=!1,Zo=0,Vi=null,e)throw Error(s(300));t===null||we||(t=t.dependencies,t!==null&&cl(t)&&(we=!0))}function id(t,e,n,o){Et=t;var l=0;do{if(_i&&(Vi=null),Zo=0,_i=!1,25<=l)throw Error(s(301));if(l+=1,xe=Qt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}_.H=Wy,u=e(n,o)}while(_i);return u}function Gy(){var t=_.H,e=t.useState()[0];return e=typeof e.then=="function"?Qo(e):e,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(Et.flags|=1024),e}function Su(){var t=yl!==0;return yl=0,t}function Au(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Du(t){if(gl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}gl=!1}Ta=0,xe=Qt=Et=null,_i=!1,Zo=yl=0,Vi=null}function $e(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?Et.memoizedState=xe=t:xe=xe.next=t,xe}function Te(){if(Qt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var e=xe===null?Et.memoizedState:xe.next;if(e!==null)xe=e,Qt=t;else{if(t===null)throw Et.alternate===null?Error(s(467)):Error(s(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},xe===null?Et.memoizedState=xe=t:xe=xe.next=t}return xe}function Ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(t){var e=Zo;return Zo+=1,Vi===null&&(Vi=[]),t=Wh(Vi,t,e),e=Et,(xe===null?e.memoizedState:xe.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?Ud:Ld),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qo(t);if(t.$$typeof===k)return He(t)}throw Error(s(438,String(t)))}function Eu(t){var e=null,n=Et.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var o=Et.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ou(),Et.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),o=0;o<t;o++)n[o]=ct;return e.index++,n}function Wn(t,e){return typeof e=="function"?e(t):e}function vl(t){var e=Te();return Mu(e,Qt,t)}function Mu(t,e,n){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var l=t.baseQueue,u=o.pending;if(u!==null){if(l!==null){var m=l.next;l.next=u.next,u.next=m}e.baseQueue=l=u,o.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var b=m=null,S=null,C=e,U=!1;do{var Y=C.lane&-536870913;if(Y!==C.lane?(zt&Y)===Y:(Ta&Y)===Y){var R=C.revertLane;if(R===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),Y===ki&&(U=!0);else if((Ta&R)===R){C=C.next,R===ki&&(U=!0);continue}else Y={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(b=S=Y,m=u):S=S.next=Y,Et.lanes|=R,wa|=R;Y=C.action,ii&&n(u,Y),u=C.hasEagerState?C.eagerState:n(u,Y)}else R={lane:Y,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(b=S=R,m=u):S=S.next=R,Et.lanes|=Y,wa|=Y;C=C.next}while(C!==null&&C!==e);if(S===null?m=u:S.next=b,!on(u,t.memoizedState)&&(we=!0,U&&(n=ji,n!==null)))throw n;t.memoizedState=u,t.baseState=m,t.baseQueue=S,o.lastRenderedState=u}return l===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function wu(t){var e=Te(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var o=n.dispatch,l=n.pending,u=e.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do u=t(u,m.action),m=m.next;while(m!==l);on(u,e.memoizedState)||(we=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,o]}function od(t,e,n){var o=Et,l=Te(),u=Lt;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var m=!on((Qt||l).memoizedState,n);m&&(l.memoizedState=n,we=!0),l=l.queue;var b=sd.bind(null,o,l,t);if(Ko(2048,8,b,[t]),l.getSnapshot!==e||m||xe!==null&&xe.memoizedState.tag&1){if(o.flags|=2048,Bi(9,xl(),ld.bind(null,o,l,n,e),null),It===null)throw Error(s(349));u||(Ta&124)!==0||rd(o,e,n)}return n}function rd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e=Ou(),Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ld(t,e,n,o){e.value=n,e.getSnapshot=o,ud(e)&&cd(t)}function sd(t,e,n){return n(function(){ud(e)&&cd(t)})}function ud(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function cd(t){var e=Xi(t,2);e!==null&&fn(e,t,2)}function Xu(t){var e=$e();if(typeof t=="function"){var n=t;if(t=n(),ii){Re(!0);try{n()}finally{Re(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:t},e}function fd(t,e,n,o){return t.baseState=n,Mu(t,Qt,typeof o=="function"?o:Wn)}function Zy(t,e,n,o,l){if(Sl(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};_.T!==null?n(!0):u.isTransition=!1,o(u),n=e.pending,n===null?(u.next=e.pending=u,hd(e,u)):(u.next=n.next,e.pending=n.next=u)}}function hd(t,e){var n=e.action,o=e.payload,l=t.state;if(e.isTransition){var u=_.T,m={};_.T=m;try{var b=n(l,o),S=_.S;S!==null&&S(m,b),dd(t,e,b)}catch(C){Cu(t,e,C)}finally{_.T=u}}else try{u=n(l,o),dd(t,e,u)}catch(C){Cu(t,e,C)}}function dd(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){md(t,e,o)},function(o){return Cu(t,e,o)}):md(t,e,n)}function md(t,e,n){e.status="fulfilled",e.value=n,pd(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,hd(t,n)))}function Cu(t,e,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=n,pd(e),e=e.next;while(e!==o)}t.action=null}function pd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function gd(t,e){return e}function yd(t,e){if(Lt){var n=It.formState;if(n!==null){t:{var o=Et;if(Lt){if(le){e:{for(var l=le,u=kn;l.nodeType!==8;){if(!u){l=null;break e}if(l=Mn(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){le=Mn(l.nextSibling),o=l.data==="F!";break t}}ti(o)}o=!1}o&&(e=n[0])}}return n=$e(),n.memoizedState=n.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gd,lastRenderedState:e},n.queue=o,n=_d.bind(null,Et,o),o.dispatch=n,o=Xu(!1),u=zu.bind(null,Et,!1,o.queue),o=$e(),l={state:e,dispatch:null,action:t,pending:null},o.queue=l,n=Zy.bind(null,Et,l,u,n),l.dispatch=n,o.memoizedState=t,[e,n,!1]}function bd(t){var e=Te();return vd(e,Qt,t)}function vd(t,e,n){if(e=Mu(t,e,gd)[0],t=vl(Wn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Qo(e)}catch(m){throw m===Ho?dl:m}else o=e;e=Te();var l=e.queue,u=l.dispatch;return n!==e.memoizedState&&(Et.flags|=2048,Bi(9,xl(),Qy.bind(null,l,n),null)),[o,u,t]}function Qy(t,e){t.action=e}function xd(t){var e=Te(),n=Qt;if(n!==null)return vd(e,n,t);Te(),e=e.memoizedState,n=Te();var o=n.queue.dispatch;return n.memoizedState=t,[e,o,!1]}function Bi(t,e,n,o){return t={tag:t,create:n,deps:o,inst:e,next:null},e=Et.updateQueue,e===null&&(e=Ou(),Et.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t),t}function xl(){return{destroy:void 0,resource:void 0}}function Td(){return Te().memoizedState}function Tl(t,e,n,o){var l=$e();o=o===void 0?null:o,Et.flags|=t,l.memoizedState=Bi(1|e,xl(),n,o)}function Ko(t,e,n,o){var l=Te();o=o===void 0?null:o;var u=l.memoizedState.inst;Qt!==null&&o!==null&&xu(o,Qt.memoizedState.deps)?l.memoizedState=Bi(e,u,n,o):(Et.flags|=t,l.memoizedState=Bi(1|e,u,n,o))}function Sd(t,e){Tl(8390656,8,t,e)}function Ad(t,e){Ko(2048,8,t,e)}function Dd(t,e){return Ko(4,2,t,e)}function Od(t,e){return Ko(4,4,t,e)}function Ed(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Md(t,e,n){n=n!=null?n.concat([t]):null,Ko(4,4,Ed.bind(null,e,t),n)}function Ru(){}function wd(t,e){var n=Te();e=e===void 0?null:e;var o=n.memoizedState;return e!==null&&xu(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function Xd(t,e){var n=Te();e=e===void 0?null:e;var o=n.memoizedState;if(e!==null&&xu(e,o[1]))return o[0];if(o=t(),ii){Re(!0);try{t()}finally{Re(!1)}}return n.memoizedState=[o,e],o}function Nu(t,e,n){return n===void 0||(Ta&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=N0(),Et.lanes|=t,wa|=t,n)}function Cd(t,e,n,o){return on(n,e)?n:zi.current!==null?(t=Nu(t,n,o),on(t,e)||(we=!0),t):(Ta&42)===0?(we=!0,t.memoizedState=n):(t=N0(),Et.lanes|=t,wa|=t,e)}function Rd(t,e,n,o,l){var u=F.p;F.p=u!==0&&8>u?u:8;var m=_.T,b={};_.T=b,zu(t,!1,e,n);try{var S=l(),C=_.S;if(C!==null&&C(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var U=Py(S,o);Fo(t,e,U,cn(t))}else Fo(t,e,o,cn(t))}catch(Y){Fo(t,e,{then:function(){},status:"rejected",reason:Y},cn())}finally{F.p=u,_.T=m}}function Ky(){}function ku(t,e,n,o){if(t.tag!==5)throw Error(s(476));var l=Nd(t).queue;Rd(t,l,e,I,n===null?Ky:function(){return kd(t),n(o)})}function Nd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:I},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function kd(t){var e=Nd(t).next.queue;Fo(t,e,{},cn())}function ju(){return He(dr)}function jd(){return Te().memoizedState}function zd(){return Te().memoizedState}function Fy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=cn();t=va(n);var o=xa(e,t,n);o!==null&&(fn(o,e,n),Po(o,e,n)),e={cache:cu()},t.payload=e;return}e=e.return}}function Jy(t,e,n){var o=cn();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Sl(t)?Vd(e,n):(n=tu(t,e,n,o),n!==null&&(fn(n,t,o),Bd(n,e,o)))}function _d(t,e,n){var o=cn();Fo(t,e,n,o)}function Fo(t,e,n,o){var l={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sl(t))Vd(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var m=e.lastRenderedState,b=u(m,n);if(l.hasEagerState=!0,l.eagerState=b,on(b,m))return ol(t,e,l,0),It===null&&il(),!1}catch{}finally{}if(n=tu(t,e,l,o),n!==null)return fn(n,t,o),Bd(n,e,o),!0}return!1}function zu(t,e,n,o){if(o={lane:2,revertLane:dc(),action:o,hasEagerState:!1,eagerState:null,next:null},Sl(t)){if(e)throw Error(s(479))}else e=tu(t,n,o,2),e!==null&&fn(e,t,2)}function Sl(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Vd(t,e){_i=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bd(t,e,n){if((n&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,qr(t,n)}}var Al={readContext:He,use:bl,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he},Ud={readContext:He,use:bl,useCallback:function(t,e){return $e().memoizedState=[t,e===void 0?null:e],t},useContext:He,useEffect:Sd,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Tl(4194308,4,Ed.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tl(4194308,4,t,e)},useInsertionEffect:function(t,e){Tl(4,2,t,e)},useMemo:function(t,e){var n=$e();e=e===void 0?null:e;var o=t();if(ii){Re(!0);try{t()}finally{Re(!1)}}return n.memoizedState=[o,e],o},useReducer:function(t,e,n){var o=$e();if(n!==void 0){var l=n(e);if(ii){Re(!0);try{n(e)}finally{Re(!1)}}}else l=e;return o.memoizedState=o.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},o.queue=t,t=t.dispatch=Jy.bind(null,Et,t),[o.memoizedState,t]},useRef:function(t){var e=$e();return t={current:t},e.memoizedState=t},useState:function(t){t=Xu(t);var e=t.queue,n=_d.bind(null,Et,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Ru,useDeferredValue:function(t,e){var n=$e();return Nu(n,t,e)},useTransition:function(){var t=Xu(!1);return t=Rd.bind(null,Et,t.queue,!0,!1),$e().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var o=Et,l=$e();if(Lt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),It===null)throw Error(s(349));(zt&124)!==0||rd(o,e,n)}l.memoizedState=n;var u={value:n,getSnapshot:e};return l.queue=u,Sd(sd.bind(null,o,u,t),[t]),o.flags|=2048,Bi(9,xl(),ld.bind(null,o,u,n,e),null),n},useId:function(){var t=$e(),e=It.identifierPrefix;if(Lt){var n=Kn,o=Qn;n=(o&~(1<<32-Ne(o)-1)).toString(32)+n,e="«"+e+"R"+n,n=yl++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Yy++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ju,useFormState:yd,useActionState:yd,useOptimistic:function(t){var e=$e();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=zu.bind(null,Et,!0,n),n.dispatch=e,[t,e]},useMemoCache:Eu,useCacheRefresh:function(){return $e().memoizedState=Fy.bind(null,Et)}},Ld={readContext:He,use:bl,useCallback:wd,useContext:He,useEffect:Ad,useImperativeHandle:Md,useInsertionEffect:Dd,useLayoutEffect:Od,useMemo:Xd,useReducer:vl,useRef:Td,useState:function(){return vl(Wn)},useDebugValue:Ru,useDeferredValue:function(t,e){var n=Te();return Cd(n,Qt.memoizedState,t,e)},useTransition:function(){var t=vl(Wn)[0],e=Te().memoizedState;return[typeof t=="boolean"?t:Qo(t),e]},useSyncExternalStore:od,useId:jd,useHostTransitionStatus:ju,useFormState:bd,useActionState:bd,useOptimistic:function(t,e){var n=Te();return fd(n,Qt,t,e)},useMemoCache:Eu,useCacheRefresh:zd},Wy={readContext:He,use:bl,useCallback:wd,useContext:He,useEffect:Ad,useImperativeHandle:Md,useInsertionEffect:Dd,useLayoutEffect:Od,useMemo:Xd,useReducer:wu,useRef:Td,useState:function(){return wu(Wn)},useDebugValue:Ru,useDeferredValue:function(t,e){var n=Te();return Qt===null?Nu(n,t,e):Cd(n,Qt.memoizedState,t,e)},useTransition:function(){var t=wu(Wn)[0],e=Te().memoizedState;return[typeof t=="boolean"?t:Qo(t),e]},useSyncExternalStore:od,useId:jd,useHostTransitionStatus:ju,useFormState:xd,useActionState:xd,useOptimistic:function(t,e){var n=Te();return Qt!==null?fd(n,Qt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Eu,useCacheRefresh:zd},Ui=null,Jo=0;function Dl(t){var e=Jo;return Jo+=1,Ui===null&&(Ui=[]),Wh(Ui,t,e)}function Wo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ol(t,e){throw e.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Hd(t){var e=t._init;return e(t._payload)}function qd(t){function e(O,D){if(t){var X=O.deletions;X===null?(O.deletions=[D],O.flags|=16):X.push(D)}}function n(O,D){if(!t)return null;for(;D!==null;)e(O,D),D=D.sibling;return null}function o(O){for(var D=new Map;O!==null;)O.key!==null?D.set(O.key,O):D.set(O.index,O),O=O.sibling;return D}function l(O,D){return O=Zn(O,D),O.index=0,O.sibling=null,O}function u(O,D,X){return O.index=X,t?(X=O.alternate,X!==null?(X=X.index,X<D?(O.flags|=67108866,D):X):(O.flags|=67108866,D)):(O.flags|=1048576,D)}function m(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function b(O,D,X,q){return D===null||D.tag!==6?(D=nu(X,O.mode,q),D.return=O,D):(D=l(D,X),D.return=O,D)}function S(O,D,X,q){var at=X.type;return at===w?U(O,D,X.props.children,q,X.key):D!==null&&(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===G&&Hd(at)===D.type)?(D=l(D,X.props),Wo(D,X),D.return=O,D):(D=ll(X.type,X.key,X.props,null,O.mode,q),Wo(D,X),D.return=O,D)}function C(O,D,X,q){return D===null||D.tag!==4||D.stateNode.containerInfo!==X.containerInfo||D.stateNode.implementation!==X.implementation?(D=au(X,O.mode,q),D.return=O,D):(D=l(D,X.children||[]),D.return=O,D)}function U(O,D,X,q,at){return D===null||D.tag!==7?(D=Ja(X,O.mode,q,at),D.return=O,D):(D=l(D,X),D.return=O,D)}function Y(O,D,X){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=nu(""+D,O.mode,X),D.return=O,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case x:return X=ll(D.type,D.key,D.props,null,O.mode,X),Wo(X,D),X.return=O,X;case E:return D=au(D,O.mode,X),D.return=O,D;case G:var q=D._init;return D=q(D._payload),Y(O,D,X)}if(qt(D)||Ut(D))return D=Ja(D,O.mode,X,null),D.return=O,D;if(typeof D.then=="function")return Y(O,Dl(D),X);if(D.$$typeof===k)return Y(O,fl(O,D),X);Ol(O,D)}return null}function R(O,D,X,q){var at=D!==null?D.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return at!==null?null:b(O,D,""+X,q);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return X.key===at?S(O,D,X,q):null;case E:return X.key===at?C(O,D,X,q):null;case G:return at=X._init,X=at(X._payload),R(O,D,X,q)}if(qt(X)||Ut(X))return at!==null?null:U(O,D,X,q,null);if(typeof X.then=="function")return R(O,D,Dl(X),q);if(X.$$typeof===k)return R(O,D,fl(O,X),q);Ol(O,X)}return null}function N(O,D,X,q,at){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return O=O.get(X)||null,b(D,O,""+q,at);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return O=O.get(q.key===null?X:q.key)||null,S(D,O,q,at);case E:return O=O.get(q.key===null?X:q.key)||null,C(D,O,q,at);case G:var Mt=q._init;return q=Mt(q._payload),N(O,D,X,q,at)}if(qt(q)||Ut(q))return O=O.get(X)||null,U(D,O,q,at,null);if(typeof q.then=="function")return N(O,D,X,Dl(q),at);if(q.$$typeof===k)return N(O,D,X,fl(D,q),at);Ol(D,q)}return null}function bt(O,D,X,q){for(var at=null,Mt=null,rt=D,pt=D=0,Ce=null;rt!==null&&pt<X.length;pt++){rt.index>pt?(Ce=rt,rt=null):Ce=rt.sibling;var Bt=R(O,rt,X[pt],q);if(Bt===null){rt===null&&(rt=Ce);break}t&&rt&&Bt.alternate===null&&e(O,rt),D=u(Bt,D,pt),Mt===null?at=Bt:Mt.sibling=Bt,Mt=Bt,rt=Ce}if(pt===X.length)return n(O,rt),Lt&&$a(O,pt),at;if(rt===null){for(;pt<X.length;pt++)rt=Y(O,X[pt],q),rt!==null&&(D=u(rt,D,pt),Mt===null?at=rt:Mt.sibling=rt,Mt=rt);return Lt&&$a(O,pt),at}for(rt=o(rt);pt<X.length;pt++)Ce=N(rt,O,pt,X[pt],q),Ce!==null&&(t&&Ce.alternate!==null&&rt.delete(Ce.key===null?pt:Ce.key),D=u(Ce,D,pt),Mt===null?at=Ce:Mt.sibling=Ce,Mt=Ce);return t&&rt.forEach(function(Va){return e(O,Va)}),Lt&&$a(O,pt),at}function mt(O,D,X,q){if(X==null)throw Error(s(151));for(var at=null,Mt=null,rt=D,pt=D=0,Ce=null,Bt=X.next();rt!==null&&!Bt.done;pt++,Bt=X.next()){rt.index>pt?(Ce=rt,rt=null):Ce=rt.sibling;var Va=R(O,rt,Bt.value,q);if(Va===null){rt===null&&(rt=Ce);break}t&&rt&&Va.alternate===null&&e(O,rt),D=u(Va,D,pt),Mt===null?at=Va:Mt.sibling=Va,Mt=Va,rt=Ce}if(Bt.done)return n(O,rt),Lt&&$a(O,pt),at;if(rt===null){for(;!Bt.done;pt++,Bt=X.next())Bt=Y(O,Bt.value,q),Bt!==null&&(D=u(Bt,D,pt),Mt===null?at=Bt:Mt.sibling=Bt,Mt=Bt);return Lt&&$a(O,pt),at}for(rt=o(rt);!Bt.done;pt++,Bt=X.next())Bt=N(rt,O,pt,Bt.value,q),Bt!==null&&(t&&Bt.alternate!==null&&rt.delete(Bt.key===null?pt:Bt.key),D=u(Bt,D,pt),Mt===null?at=Bt:Mt.sibling=Bt,Mt=Bt);return t&&rt.forEach(function($b){return e(O,$b)}),Lt&&$a(O,pt),at}function Ft(O,D,X,q){if(typeof X=="object"&&X!==null&&X.type===w&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case x:t:{for(var at=X.key;D!==null;){if(D.key===at){if(at=X.type,at===w){if(D.tag===7){n(O,D.sibling),q=l(D,X.props.children),q.return=O,O=q;break t}}else if(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===G&&Hd(at)===D.type){n(O,D.sibling),q=l(D,X.props),Wo(q,X),q.return=O,O=q;break t}n(O,D);break}else e(O,D);D=D.sibling}X.type===w?(q=Ja(X.props.children,O.mode,q,X.key),q.return=O,O=q):(q=ll(X.type,X.key,X.props,null,O.mode,q),Wo(q,X),q.return=O,O=q)}return m(O);case E:t:{for(at=X.key;D!==null;){if(D.key===at)if(D.tag===4&&D.stateNode.containerInfo===X.containerInfo&&D.stateNode.implementation===X.implementation){n(O,D.sibling),q=l(D,X.children||[]),q.return=O,O=q;break t}else{n(O,D);break}else e(O,D);D=D.sibling}q=au(X,O.mode,q),q.return=O,O=q}return m(O);case G:return at=X._init,X=at(X._payload),Ft(O,D,X,q)}if(qt(X))return bt(O,D,X,q);if(Ut(X)){if(at=Ut(X),typeof at!="function")throw Error(s(150));return X=at.call(X),mt(O,D,X,q)}if(typeof X.then=="function")return Ft(O,D,Dl(X),q);if(X.$$typeof===k)return Ft(O,D,fl(O,X),q);Ol(O,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,D!==null&&D.tag===6?(n(O,D.sibling),q=l(D,X),q.return=O,O=q):(n(O,D),q=nu(X,O.mode,q),q.return=O,O=q),m(O)):n(O,D)}return function(O,D,X,q){try{Jo=0;var at=Ft(O,D,X,q);return Ui=null,at}catch(rt){if(rt===Ho||rt===dl)throw rt;var Mt=rn(29,rt,null,O.mode);return Mt.lanes=q,Mt.return=O,Mt}finally{}}}var Li=qd(!0),Pd=qd(!1),bn=H(null),jn=null;function Sa(t){var e=t.alternate;$(De,De.current&1),$(bn,t),jn===null&&(e===null||zi.current!==null||e.memoizedState!==null)&&(jn=t)}function Yd(t){if(t.tag===22){if($(De,De.current),$(bn,t),jn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(jn=t)}}else Aa()}function Aa(){$(De,De.current),$(bn,bn.current)}function $n(t){tt(bn),jn===t&&(jn=null),tt(De)}var De=H(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Oc(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function _u(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:y({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vu={enqueueSetState:function(t,e,n){t=t._reactInternals;var o=cn(),l=va(o);l.payload=e,n!=null&&(l.callback=n),e=xa(t,l,o),e!==null&&(fn(e,t,o),Po(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=cn(),l=va(o);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=xa(t,l,o),e!==null&&(fn(e,t,o),Po(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),o=va(n);o.tag=2,e!=null&&(o.callback=e),e=xa(t,o,n),e!==null&&(fn(e,t,n),Po(e,t,n))}};function Gd(t,e,n,o,l,u,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,m):e.prototype&&e.prototype.isPureReactComponent?!ko(n,o)||!ko(l,u):!0}function Zd(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&Vu.enqueueReplaceState(e,e.state,null)}function oi(t,e){var n=e;if("ref"in e){n={};for(var o in e)o!=="ref"&&(n[o]=e[o])}if(t=t.defaultProps){n===e&&(n=y({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qd(t){Ml(t)}function Kd(t){console.error(t)}function Fd(t){Ml(t)}function wl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Jd(t,e,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Bu(t,e,n){return n=va(n),n.tag=3,n.payload={element:null},n.callback=function(){wl(t,e)},n}function Wd(t){return t=va(t),t.tag=3,t}function $d(t,e,n,o){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;t.payload=function(){return l(u)},t.callback=function(){Jd(e,n,o)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Jd(e,n,o),typeof l!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function $y(t,e,n,o,l){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=n.alternate,e!==null&&Bo(e,n,l,!0),n=bn.current,n!==null){switch(n.tag){case 13:return jn===null?sc():n.alternate===null&&se===0&&(se=3),n.flags&=-257,n.flags|=65536,n.lanes=l,o===du?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([o]):e.add(o),cc(t,o,l)),!1;case 22:return n.flags|=65536,o===du?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([o]):n.add(o)),cc(t,o,l)),!1}throw Error(s(435,n.tag))}return cc(t,o,l),sc(),!1}if(Lt)return e=bn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,o!==ru&&(t=Error(s(422),{cause:o}),Vo(mn(t,n)))):(o!==ru&&(e=Error(s(423),{cause:o}),Vo(mn(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,o=mn(o,n),l=Bu(t.stateNode,o,l),gu(t,l),se!==4&&(se=2)),!1;var u=Error(s(520),{cause:o});if(u=mn(u,n),ir===null?ir=[u]:ir.push(u),se!==4&&(se=2),e===null)return!0;o=mn(o,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=Bu(n.stateNode,o,t),gu(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Xa===null||!Xa.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Wd(l),$d(l,t,n,o),gu(n,l),!1}n=n.return}while(n!==null);return!1}var Id=Error(s(461)),we=!1;function je(t,e,n,o){e.child=t===null?Pd(e,null,n,o):Li(e,t.child,n,o)}function t0(t,e,n,o,l){n=n.render;var u=e.ref;if("ref"in o){var m={};for(var b in o)b!=="ref"&&(m[b]=o[b])}else m=o;return ni(e),o=Tu(t,e,n,m,u,l),b=Su(),t!==null&&!we?(Au(t,e,l),In(t,e,l)):(Lt&&b&&iu(e),e.flags|=1,je(t,e,o,l),e.child)}function e0(t,e,n,o,l){if(t===null){var u=n.type;return typeof u=="function"&&!eu(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,n0(t,e,u,o,l)):(t=ll(n.type,null,o,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Zu(t,l)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(m,o)&&t.ref===e.ref)return In(t,e,l)}return e.flags|=1,t=Zn(u,o),t.ref=e.ref,t.return=e,e.child=t}function n0(t,e,n,o,l){if(t!==null){var u=t.memoizedProps;if(ko(u,o)&&t.ref===e.ref)if(we=!1,e.pendingProps=o=u,Zu(t,l))(t.flags&131072)!==0&&(we=!0);else return e.lanes=t.lanes,In(t,e,l)}return Uu(t,e,n,o,l)}function a0(t,e,n){var o=e.pendingProps,l=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((e.flags&128)!==0){if(o=u!==null?u.baseLanes|n:n,t!==null){for(l=e.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;e.childLanes=u&~o}else e.childLanes=0,e.child=null;return i0(t,e,o,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&hl(e,u!==null?u.cachePool:null),u!==null?nd(e,u):bu(),Yd(e);else return e.lanes=e.childLanes=536870912,i0(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(hl(e,u.cachePool),nd(e,u),Aa(),e.memoizedState=null):(t!==null&&hl(e,null),bu(),Aa());return je(t,e,l,n),e.child}function i0(t,e,n,o){var l=hu();return l=l===null?null:{parent:Ae._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&hl(e,null),bu(),Yd(e),t!==null&&Bo(t,e,o,!0),null}function Xl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Uu(t,e,n,o,l){return ni(e),n=Tu(t,e,n,o,void 0,l),o=Su(),t!==null&&!we?(Au(t,e,l),In(t,e,l)):(Lt&&o&&iu(e),e.flags|=1,je(t,e,n,l),e.child)}function o0(t,e,n,o,l,u){return ni(e),e.updateQueue=null,n=id(e,o,n,l),ad(t),o=Su(),t!==null&&!we?(Au(t,e,u),In(t,e,u)):(Lt&&o&&iu(e),e.flags|=1,je(t,e,n,u),e.child)}function r0(t,e,n,o,l){if(ni(e),e.stateNode===null){var u=Ci,m=n.contextType;typeof m=="object"&&m!==null&&(u=He(m)),u=new n(o,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Vu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=o,u.state=e.memoizedState,u.refs={},mu(e),m=n.contextType,u.context=typeof m=="object"&&m!==null?He(m):Ci,u.state=e.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(_u(e,n,m,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Vu.enqueueReplaceState(u,u.state,null),Go(e,o,u,l),Yo(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,S=oi(n,b);u.props=S;var C=u.context,U=n.contextType;m=Ci,typeof U=="object"&&U!==null&&(m=He(U));var Y=n.getDerivedStateFromProps;U=typeof Y=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||C!==m)&&Zd(e,u,o,m),ba=!1;var R=e.memoizedState;u.state=R,Go(e,o,u,l),Yo(),C=e.memoizedState,b||R!==C||ba?(typeof Y=="function"&&(_u(e,n,Y,o),C=e.memoizedState),(S=ba||Gd(e,n,S,o,R,C,m))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=C),u.props=o,u.state=C,u.context=m,o=S):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{u=e.stateNode,pu(t,e),m=e.memoizedProps,U=oi(n,m),u.props=U,Y=e.pendingProps,R=u.context,C=n.contextType,S=Ci,typeof C=="object"&&C!==null&&(S=He(C)),b=n.getDerivedStateFromProps,(C=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==Y||R!==S)&&Zd(e,u,o,S),ba=!1,R=e.memoizedState,u.state=R,Go(e,o,u,l),Yo();var N=e.memoizedState;m!==Y||R!==N||ba||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof b=="function"&&(_u(e,n,b,o),N=e.memoizedState),(U=ba||Gd(e,n,U,o,R,N,S)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,N,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,N,S)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=N),u.props=o,u.state=N,u.context=S,o=U):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),o=!1)}return u=o,Xl(t,e),o=(e.flags&128)!==0,u||o?(u=e.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&o?(e.child=Li(e,t.child,null,l),e.child=Li(e,null,n,l)):je(t,e,n,l),e.memoizedState=u.state,t=e.child):t=In(t,e,l),t}function l0(t,e,n,o){return _o(),e.flags|=256,je(t,e,n,o),e.child}var Lu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hu(t){return{baseLanes:t,cachePool:Kh()}}function qu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=vn),t}function s0(t,e,n){var o=e.pendingProps,l=!1,u=(e.flags&128)!==0,m;if((m=u)||(m=t!==null&&t.memoizedState===null?!1:(De.current&2)!==0),m&&(l=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(Lt){if(l?Sa(e):Aa(),Lt){var b=le,S;if(S=b){t:{for(S=b,b=kn;S.nodeType!==8;){if(!b){b=null;break t}if(S=Mn(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(e.memoizedState={dehydrated:b,treeContext:Wa!==null?{id:Qn,overflow:Kn}:null,retryLane:536870912,hydrationErrors:null},S=rn(18,null,null,0),S.stateNode=b,S.return=e,e.child=S,Qe=e,le=null,S=!0):S=!1}S||ti(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Oc(b)?e.lanes=32:e.lanes=536870912,null;$n(e)}return b=o.children,o=o.fallback,l?(Aa(),l=e.mode,b=Cl({mode:"hidden",children:b},l),o=Ja(o,l,n,null),b.return=e,o.return=e,b.sibling=o,e.child=b,l=e.child,l.memoizedState=Hu(n),l.childLanes=qu(t,m,n),e.memoizedState=Lu,o):(Sa(e),Pu(e,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(u)e.flags&256?(Sa(e),e.flags&=-257,e=Yu(t,e,n)):e.memoizedState!==null?(Aa(),e.child=t.child,e.flags|=128,e=null):(Aa(),l=o.fallback,b=e.mode,o=Cl({mode:"visible",children:o.children},b),l=Ja(l,b,n,null),l.flags|=2,o.return=e,l.return=e,o.sibling=l,e.child=o,Li(e,t.child,null,n),o=e.child,o.memoizedState=Hu(n),o.childLanes=qu(t,m,n),e.memoizedState=Lu,e=l);else if(Sa(e),Oc(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var C=m.dgst;m=C,o=Error(s(419)),o.stack="",o.digest=m,Vo({value:o,source:null,stack:null}),e=Yu(t,e,n)}else if(we||Bo(t,e,n,!1),m=(n&t.childLanes)!==0,we||m){if(m=It,m!==null&&(o=n&-n,o=(o&42)!==0?1:ca(o),o=(o&(m.suspendedLanes|n))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,Xi(t,o),fn(m,t,o),Id;b.data==="$?"||sc(),e=Yu(t,e,n)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,le=Mn(b.nextSibling),Qe=e,Lt=!0,Ia=null,kn=!1,t!==null&&(gn[yn++]=Qn,gn[yn++]=Kn,gn[yn++]=Wa,Qn=t.id,Kn=t.overflow,Wa=e),e=Pu(e,o.children),e.flags|=4096);return e}return l?(Aa(),l=o.fallback,b=e.mode,S=t.child,C=S.sibling,o=Zn(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,C!==null?l=Zn(C,l):(l=Ja(l,b,n,null),l.flags|=2),l.return=e,o.return=e,o.sibling=l,e.child=o,o=l,l=e.child,b=t.child.memoizedState,b===null?b=Hu(n):(S=b.cachePool,S!==null?(C=Ae._currentValue,S=S.parent!==C?{parent:C,pool:C}:S):S=Kh(),b={baseLanes:b.baseLanes|n,cachePool:S}),l.memoizedState=b,l.childLanes=qu(t,m,n),e.memoizedState=Lu,o):(Sa(e),n=t.child,t=n.sibling,n=Zn(n,{mode:"visible",children:o.children}),n.return=e,n.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=n,e.memoizedState=null,n)}function Pu(t,e){return e=Cl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Cl(t,e){return t=rn(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Yu(t,e,n){return Li(e,t.child,null,n),t=Pu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u0(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),su(t.return,e,n)}function Gu(t,e,n,o,l){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:l}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=l)}function c0(t,e,n){var o=e.pendingProps,l=o.revealOrder,u=o.tail;if(je(t,e,o.children,n),o=De.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,n,e);else if(t.tag===19)u0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch($(De,o),l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),Gu(e,!1,l,n,u);break;case"backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&El(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Gu(e,!0,n,null,u);break;case"together":Gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wa|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Bo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function Iy(t,e,n){switch(e.tag){case 3:St(e,e.stateNode.containerInfo),ya(e,Ae,t.memoizedState.cache),_o();break;case 27:case 5:At(e);break;case 4:St(e,e.stateNode.containerInfo);break;case 10:ya(e,e.type,e.memoizedProps.value);break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(e),e.flags|=128,null):(n&e.child.childLanes)!==0?s0(t,e,n):(Sa(e),t=In(t,e,n),t!==null?t.sibling:null);Sa(e);break;case 19:var l=(t.flags&128)!==0;if(o=(n&e.childLanes)!==0,o||(Bo(t,e,n,!1),o=(n&e.childLanes)!==0),l){if(o)return c0(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(De,De.current),o)break;return null;case 22:case 23:return e.lanes=0,a0(t,e,n);case 24:ya(e,Ae,t.memoizedState.cache)}return In(t,e,n)}function f0(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)we=!0;else{if(!Zu(t,n)&&(e.flags&128)===0)return we=!1,Iy(t,e,n);we=(t.flags&131072)!==0}else we=!1,Lt&&(e.flags&1048576)!==0&&Hh(e,ul,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var o=e.elementType,l=o._init;if(o=l(o._payload),e.type=o,typeof o=="function")eu(o)?(t=oi(o,t),e.tag=1,e=r0(null,e,o,t,n)):(e.tag=0,e=Uu(null,e,o,t,n));else{if(o!=null){if(l=o.$$typeof,l===Z){e.tag=11,e=t0(null,e,o,t,n);break t}else if(l===J){e.tag=14,e=e0(null,e,o,t,n);break t}}throw e=ie(o)||o,Error(s(306,e,""))}}return e;case 0:return Uu(t,e,e.type,e.pendingProps,n);case 1:return o=e.type,l=oi(o,e.pendingProps),r0(t,e,o,l,n);case 3:t:{if(St(e,e.stateNode.containerInfo),t===null)throw Error(s(387));o=e.pendingProps;var u=e.memoizedState;l=u.element,pu(t,e),Go(e,o,null,n);var m=e.memoizedState;if(o=m.cache,ya(e,Ae,o),o!==u.cache&&uu(e,[Ae],n,!0),Yo(),o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=l0(t,e,o,n);break t}else if(o!==l){l=mn(Error(s(424)),e),Vo(l),e=l0(t,e,o,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(le=Mn(t.firstChild),Qe=e,Lt=!0,Ia=null,kn=!0,n=Pd(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(_o(),o===l){e=In(t,e,n);break t}je(t,e,o,n)}e=e.child}return e;case 26:return Xl(t,e),t===null?(n=pm(e.type,null,e.pendingProps,null))?e.memoizedState=n:Lt||(n=e.type,t=e.pendingProps,o=Yl(ft.current).createElement(n),o[Me]=e,o[ke]=t,_e(o,n,t),ve(o),e.stateNode=o):e.memoizedState=pm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return At(e),t===null&&Lt&&(o=e.stateNode=hm(e.type,e.pendingProps,ft.current),Qe=e,kn=!0,l=le,Na(e.type)?(Ec=l,le=Mn(o.firstChild)):le=l),je(t,e,e.pendingProps.children,n),Xl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Lt&&((l=o=le)&&(o=Mb(o,e.type,e.pendingProps,kn),o!==null?(e.stateNode=o,Qe=e,le=Mn(o.firstChild),kn=!1,l=!0):l=!1),l||ti(e)),At(e),l=e.type,u=e.pendingProps,m=t!==null?t.memoizedProps:null,o=u.children,Sc(l,u)?o=null:m!==null&&Sc(l,m)&&(e.flags|=32),e.memoizedState!==null&&(l=Tu(t,e,Gy,null,null,n),dr._currentValue=l),Xl(t,e),je(t,e,o,n),e.child;case 6:return t===null&&Lt&&((t=n=le)&&(n=wb(n,e.pendingProps,kn),n!==null?(e.stateNode=n,Qe=e,le=null,t=!0):t=!1),t||ti(e)),null;case 13:return s0(t,e,n);case 4:return St(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Li(e,null,o,n):je(t,e,o,n),e.child;case 11:return t0(t,e,e.type,e.pendingProps,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:return o=e.pendingProps,ya(e,e.type,o.value),je(t,e,o.children,n),e.child;case 9:return l=e.type._context,o=e.pendingProps.children,ni(e),l=He(l),o=o(l),e.flags|=1,je(t,e,o,n),e.child;case 14:return e0(t,e,e.type,e.pendingProps,n);case 15:return n0(t,e,e.type,e.pendingProps,n);case 19:return c0(t,e,n);case 31:return o=e.pendingProps,n=e.mode,o={mode:o.mode,children:o.children},t===null?(n=Cl(o,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Zn(t.child,o),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return a0(t,e,n);case 24:return ni(e),o=He(Ae),t===null?(l=hu(),l===null&&(l=It,u=cu(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),e.memoizedState={parent:o,cache:l},mu(e),ya(e,Ae,l)):((t.lanes&n)!==0&&(pu(t,e),Go(e,null,null,n),Yo()),l=t.memoizedState,u=e.memoizedState,l.parent!==o?(l={parent:o,cache:o},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),ya(e,Ae,o)):(o=u.cache,ya(e,Ae,o),o!==l.cache&&uu(e,[Ae],n,!0))),je(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function ta(t){t.flags|=4}function h0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xm(e)){if(e=bn.current,e!==null&&((zt&4194048)===zt?jn!==null:(zt&62914560)!==zt&&(zt&536870912)===0||e!==jn))throw qo=du,Fh;t.flags|=8192}}function Rl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Dn():536870912,t.lanes|=e,Yi|=e)}function $o(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function tb(t,e,n){var o=e.pendingProps;switch(ou(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(e),null;case 1:return oe(e),null;case 3:return n=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Jn(Ae),dt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(zo(e)?ta(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Yh())),oe(e),null;case 26:return n=e.memoizedState,t===null?(ta(e),n!==null?(oe(e),h0(e,n)):(oe(e),e.flags&=-16777217)):n?n!==t.memoizedState?(ta(e),oe(e),h0(e,n)):(oe(e),e.flags&=-16777217):(t.memoizedProps!==o&&ta(e),oe(e),e.flags&=-16777217),null;case 27:ht(e),n=ft.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ta(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return oe(e),null}t=it.current,zo(e)?qh(e):(t=hm(l,o,n),e.stateNode=t,ta(e))}return oe(e),null;case 5:if(ht(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ta(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return oe(e),null}if(t=it.current,zo(e))qh(e);else{switch(l=Yl(ft.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?l.createElement(n,{is:o.is}):l.createElement(n)}}t[Me]=e,t[ke]=o;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(_e(t,n,o),n){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ta(e)}}return oe(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&ta(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(s(166));if(t=ft.current,zo(e)){if(t=e.stateNode,n=e.memoizedProps,o=null,l=Qe,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}t[Me]=e,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||om(t.nodeValue,n)),t||ti(e)}else t=Yl(t).createTextNode(o),t[Me]=e,e.stateNode=t}return oe(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=zo(e),o!==null&&o.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Me]=e}else _o(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;oe(e),l=!1}else l=Yh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?($n(e),e):($n(e),null)}if($n(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=o!==null,t=t!==null&&t.memoizedState!==null,n){o=e.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Rl(e,e.updateQueue),oe(e),null;case 4:return dt(),t===null&&yc(e.stateNode.containerInfo),oe(e),null;case 10:return Jn(e.type),oe(e),null;case 19:if(tt(De),l=e.memoizedState,l===null)return oe(e),null;if(o=(e.flags&128)!==0,u=l.rendering,u===null)if(o)$o(l,!1);else{if(se!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=El(t),u!==null){for(e.flags|=128,$o(l,!1),t=u.updateQueue,e.updateQueue=t,Rl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Lh(n,t),n=n.sibling;return $(De,De.current&1|2),e.child}t=t.sibling}l.tail!==null&&Dt()>jl&&(e.flags|=128,o=!0,$o(l,!1),e.lanes=4194304)}else{if(!o)if(t=El(u),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,Rl(e,t),$o(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Lt)return oe(e),null}else 2*Dt()-l.renderingStartTime>jl&&n!==536870912&&(e.flags|=128,o=!0,$o(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Dt(),e.sibling=null,t=De.current,$(De,o?t&1|2:t&1),e):(oe(e),null);case 22:case 23:return $n(e),vu(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(n&536870912)!==0&&(e.flags&128)===0&&(oe(e),e.subtreeFlags&6&&(e.flags|=8192)):oe(e),n=e.updateQueue,n!==null&&Rl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==n&&(e.flags|=2048),t!==null&&tt(ai),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Jn(Ae),oe(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function eb(t,e){switch(ou(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jn(Ae),dt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ht(e),null;case 13:if($n(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));_o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(De),null;case 4:return dt(),null;case 10:return Jn(e.type),null;case 22:case 23:return $n(e),vu(),t!==null&&tt(ai),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Jn(Ae),null;case 25:return null;default:return null}}function d0(t,e){switch(ou(e),e.tag){case 3:Jn(Ae),dt();break;case 26:case 27:case 5:ht(e);break;case 4:dt();break;case 13:$n(e);break;case 19:tt(De);break;case 10:Jn(e.type);break;case 22:case 23:$n(e),vu(),t!==null&&tt(ai);break;case 24:Jn(Ae)}}function Io(t,e){try{var n=e.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var l=o.next;n=l;do{if((n.tag&t)===t){o=void 0;var u=n.create,m=n.inst;o=u(),m.destroy=o}n=n.next}while(n!==l)}}catch(b){$t(e,e.return,b)}}function Da(t,e,n){try{var o=e.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&t)===t){var m=o.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,l=e;var S=n,C=b;try{C()}catch(U){$t(l,S,U)}}}o=o.next}while(o!==u)}}catch(U){$t(e,e.return,U)}}function m0(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{ed(e,n)}catch(o){$t(t,t.return,o)}}}function p0(t,e,n){n.props=oi(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){$t(t,e,o)}}function tr(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof n=="function"?t.refCleanup=n(o):n.current=o}}catch(l){$t(t,e,l)}}function zn(t,e){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(l){$t(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){$t(t,e,l)}else n.current=null}function g0(t){var e=t.type,n=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break t;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(l){$t(t,t.return,l)}}function Qu(t,e,n){try{var o=t.stateNode;Sb(o,t.type,n,e),o[ke]=e}catch(l){$t(t,t.return,l)}}function y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function Ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pl));else if(o!==4&&(o===27&&Na(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}function Nl(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(o===27&&Na(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Nl(t,e,n),t=t.sibling;t!==null;)Nl(t,e,n),t=t.sibling}function b0(t){var e=t.stateNode,n=t.memoizedProps;try{for(var o=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);_e(e,o,n),e[Me]=t,e[ke]=n}catch(u){$t(t,t.return,u)}}var ea=!1,de=!1,Ju=!1,v0=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function nb(t,e){if(t=t.containerInfo,xc=Jl,t=Ch(t),Ks(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var m=0,b=-1,S=-1,C=0,U=0,Y=t,R=null;e:for(;;){for(var N;Y!==n||l!==0&&Y.nodeType!==3||(b=m+l),Y!==u||o!==0&&Y.nodeType!==3||(S=m+o),Y.nodeType===3&&(m+=Y.nodeValue.length),(N=Y.firstChild)!==null;)R=Y,Y=N;for(;;){if(Y===t)break e;if(R===n&&++C===l&&(b=m),R===u&&++U===o&&(S=m),(N=Y.nextSibling)!==null)break;Y=R,R=Y.parentNode}Y=N}n=b===-1||S===-1?null:{start:b,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tc={focusedElem:t,selectionRange:n},Jl=!1,Xe=e;Xe!==null;)if(e=Xe,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Xe=t;else for(;Xe!==null;){switch(e=Xe,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,l=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var bt=oi(n.type,l,n.elementType===n.type);t=o.getSnapshotBeforeUpdate(bt,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(mt){$t(n,n.return,mt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Dc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Dc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Xe=t;break}Xe=e.return}}function x0(t,e,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Oa(t,n),o&4&&Io(5,n);break;case 1:if(Oa(t,n),o&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(m){$t(n,n.return,m)}else{var l=oi(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){$t(n,n.return,m)}}o&64&&m0(n),o&512&&tr(n,n.return);break;case 3:if(Oa(t,n),o&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{ed(t,e)}catch(m){$t(n,n.return,m)}}break;case 27:e===null&&o&4&&b0(n);case 26:case 5:Oa(t,n),e===null&&o&4&&g0(n),o&512&&tr(n,n.return);break;case 12:Oa(t,n);break;case 13:Oa(t,n),o&4&&A0(t,n),o&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=fb.bind(null,n),Xb(t,n))));break;case 22:if(o=n.memoizedState!==null||ea,!o){e=e!==null&&e.memoizedState!==null||de,l=ea;var u=de;ea=o,(de=e)&&!u?Ea(t,n,(n.subtreeFlags&8772)!==0):Oa(t,n),ea=l,de=u}break;case 30:break;default:Oa(t,n)}}function T0(t){var e=t.alternate;e!==null&&(t.alternate=null,T0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&vo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ee=null,Ie=!1;function na(t,e,n){for(n=n.child;n!==null;)S0(t,e,n),n=n.sibling}function S0(t,e,n){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Hn,n)}catch{}switch(n.tag){case 26:de||zn(n,e),na(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:de||zn(n,e);var o=ee,l=Ie;Na(n.type)&&(ee=n.stateNode,Ie=!1),na(t,e,n),ur(n.stateNode),ee=o,Ie=l;break;case 5:de||zn(n,e);case 6:if(o=ee,l=Ie,ee=null,na(t,e,n),ee=o,Ie=l,ee!==null)if(Ie)try{(ee.nodeType===9?ee.body:ee.nodeName==="HTML"?ee.ownerDocument.body:ee).removeChild(n.stateNode)}catch(u){$t(n,e,u)}else try{ee.removeChild(n.stateNode)}catch(u){$t(n,e,u)}break;case 18:ee!==null&&(Ie?(t=ee,cm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),yr(t)):cm(ee,n.stateNode));break;case 4:o=ee,l=Ie,ee=n.stateNode.containerInfo,Ie=!0,na(t,e,n),ee=o,Ie=l;break;case 0:case 11:case 14:case 15:de||Da(2,n,e),de||Da(4,n,e),na(t,e,n);break;case 1:de||(zn(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"&&p0(n,e,o)),na(t,e,n);break;case 21:na(t,e,n);break;case 22:de=(o=de)||n.memoizedState!==null,na(t,e,n),de=o;break;default:na(t,e,n)}}function A0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yr(t)}catch(n){$t(e,e.return,n)}}function ab(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new v0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new v0),e;default:throw Error(s(435,t.tag))}}function Wu(t,e){var n=ab(t);e.forEach(function(o){var l=hb.bind(null,t,o);n.has(o)||(n.add(o),o.then(l,l))})}function ln(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o],u=t,m=e,b=m;t:for(;b!==null;){switch(b.tag){case 27:if(Na(b.type)){ee=b.stateNode,Ie=!1;break t}break;case 5:ee=b.stateNode,Ie=!1;break t;case 3:case 4:ee=b.stateNode.containerInfo,Ie=!0;break t}b=b.return}if(ee===null)throw Error(s(160));S0(u,m,l),ee=null,Ie=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)D0(e,t),e=e.sibling}var En=null;function D0(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ln(e,t),sn(t),o&4&&(Da(3,t,t.return),Io(3,t),Da(5,t,t.return));break;case 1:ln(e,t),sn(t),o&512&&(de||n===null||zn(n,n.return)),o&64&&ea&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var l=En;if(ln(e,t),sn(t),o&512&&(de||n===null||zn(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){t:{o=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Ga]||u[Me]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),_e(u,o,n),u[Me]=t,ve(u),o=u;break t;case"link":var m=bm("link","href",l).get(o+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(u=m[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break e}}u=l.createElement(o),_e(u,o,n),l.head.appendChild(u);break;case"meta":if(m=bm("meta","content",l).get(o+(n.content||""))){for(b=0;b<m.length;b++)if(u=m[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break e}}u=l.createElement(o),_e(u,o,n),l.head.appendChild(u);break;default:throw Error(s(468,o))}u[Me]=t,ve(u),o=u}t.stateNode=o}else vm(l,t.type,t.stateNode);else t.stateNode=ym(l,o,t.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?vm(l,t.type,t.stateNode):ym(l,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Qu(t,t.memoizedProps,n.memoizedProps)}break;case 27:ln(e,t),sn(t),o&512&&(de||n===null||zn(n,n.return)),n!==null&&o&4&&Qu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ln(e,t),sn(t),o&512&&(de||n===null||zn(n,n.return)),t.flags&32){l=t.stateNode;try{Le(l,"")}catch(N){$t(t,t.return,N)}}o&4&&t.stateNode!=null&&(l=t.memoizedProps,Qu(t,l,n!==null?n.memoizedProps:l)),o&1024&&(Ju=!0);break;case 6:if(ln(e,t),sn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(N){$t(t,t.return,N)}}break;case 3:if(Ql=null,l=En,En=Gl(e.containerInfo),ln(e,t),En=l,sn(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(e.containerInfo)}catch(N){$t(t,t.return,N)}Ju&&(Ju=!1,O0(t));break;case 4:o=En,En=Gl(t.stateNode.containerInfo),ln(e,t),sn(t),En=o;break;case 12:ln(e,t),sn(t);break;case 13:ln(e,t),sn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ac=Dt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wu(t,o)));break;case 22:l=t.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,C=ea,U=de;if(ea=C||l,de=U||S,ln(e,t),de=U,ea=C,sn(t),o&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||S||ea||de||ri(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){S=n=e;try{if(u=S.stateNode,l)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=S.stateNode;var Y=S.memoizedProps.style,R=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;b.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){$t(S,S.return,N)}}}else if(e.tag===6){if(n===null){S=e;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(N){$t(S,S.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Wu(t,n))));break;case 19:ln(e,t),sn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wu(t,o)));break;case 30:break;case 21:break;default:ln(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{for(var n,o=t.return;o!==null;){if(y0(o)){n=o;break}o=o.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,u=Ku(t);Nl(t,u,l);break;case 5:var m=n.stateNode;n.flags&32&&(Le(m,""),n.flags&=-33);var b=Ku(t);Nl(t,b,m);break;case 3:case 4:var S=n.stateNode.containerInfo,C=Ku(t);Fu(t,C,S);break;default:throw Error(s(161))}}catch(U){$t(t,t.return,U)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function O0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;O0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Oa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)x0(t,e.alternate,e),e=e.sibling}function ri(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Da(4,e,e.return),ri(e);break;case 1:zn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&p0(e,e.return,n),ri(e);break;case 27:ur(e.stateNode);case 26:case 5:zn(e,e.return),ri(e);break;case 22:e.memoizedState===null&&ri(e);break;case 30:ri(e);break;default:ri(e)}t=t.sibling}}function Ea(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,l=t,u=e,m=u.flags;switch(u.tag){case 0:case 11:case 15:Ea(l,u,n),Io(4,u);break;case 1:if(Ea(l,u,n),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){$t(o,o.return,C)}if(o=u,l=o.updateQueue,l!==null){var b=o.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)td(S[l],b)}catch(C){$t(o,o.return,C)}}n&&m&64&&m0(u),tr(u,u.return);break;case 27:b0(u);case 26:case 5:Ea(l,u,n),n&&o===null&&m&4&&g0(u),tr(u,u.return);break;case 12:Ea(l,u,n);break;case 13:Ea(l,u,n),n&&m&4&&A0(l,u);break;case 22:u.memoizedState===null&&Ea(l,u,n),tr(u,u.return);break;case 30:break;default:Ea(l,u,n)}e=e.sibling}}function $u(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Uo(n))}function Iu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Uo(t))}function _n(t,e,n,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)E0(t,e,n,o),e=e.sibling}function E0(t,e,n,o){var l=e.flags;switch(e.tag){case 0:case 11:case 15:_n(t,e,n,o),l&2048&&Io(9,e);break;case 1:_n(t,e,n,o);break;case 3:_n(t,e,n,o),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Uo(t)));break;case 12:if(l&2048){_n(t,e,n,o),t=e.stateNode;try{var u=e.memoizedProps,m=u.id,b=u.onPostCommit;typeof b=="function"&&b(m,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){$t(e,e.return,S)}}else _n(t,e,n,o);break;case 13:_n(t,e,n,o);break;case 23:break;case 22:u=e.stateNode,m=e.alternate,e.memoizedState!==null?u._visibility&2?_n(t,e,n,o):er(t,e):u._visibility&2?_n(t,e,n,o):(u._visibility|=2,Hi(t,e,n,o,(e.subtreeFlags&10256)!==0)),l&2048&&$u(m,e);break;case 24:_n(t,e,n,o),l&2048&&Iu(e.alternate,e);break;default:_n(t,e,n,o)}}function Hi(t,e,n,o,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,m=e,b=n,S=o,C=m.flags;switch(m.tag){case 0:case 11:case 15:Hi(u,m,b,S,l),Io(8,m);break;case 23:break;case 22:var U=m.stateNode;m.memoizedState!==null?U._visibility&2?Hi(u,m,b,S,l):er(u,m):(U._visibility|=2,Hi(u,m,b,S,l)),l&&C&2048&&$u(m.alternate,m);break;case 24:Hi(u,m,b,S,l),l&&C&2048&&Iu(m.alternate,m);break;default:Hi(u,m,b,S,l)}e=e.sibling}}function er(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,o=e,l=o.flags;switch(o.tag){case 22:er(n,o),l&2048&&$u(o.alternate,o);break;case 24:er(n,o),l&2048&&Iu(o.alternate,o);break;default:er(n,o)}e=e.sibling}}var nr=8192;function qi(t){if(t.subtreeFlags&nr)for(t=t.child;t!==null;)M0(t),t=t.sibling}function M0(t){switch(t.tag){case 26:qi(t),t.flags&nr&&t.memoizedState!==null&&qb(En,t.memoizedState,t.memoizedProps);break;case 5:qi(t);break;case 3:case 4:var e=En;En=Gl(t.stateNode.containerInfo),qi(t),En=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=nr,nr=16777216,qi(t),nr=e):qi(t));break;default:qi(t)}}function w0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ar(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Xe=o,C0(o,t)}w0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X0(t),t=t.sibling}function X0(t){switch(t.tag){case 0:case 11:case 15:ar(t),t.flags&2048&&Da(9,t,t.return);break;case 3:ar(t);break;case 12:ar(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,kl(t)):ar(t);break;default:ar(t)}}function kl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Xe=o,C0(o,t)}w0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Da(8,e,e.return),kl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,kl(e));break;default:kl(e)}t=t.sibling}}function C0(t,e){for(;Xe!==null;){var n=Xe;switch(n.tag){case 0:case 11:case 15:Da(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Uo(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Xe=o;else t:for(n=t;Xe!==null;){o=Xe;var l=o.sibling,u=o.return;if(T0(o),o===n){Xe=null;break t}if(l!==null){l.return=u,Xe=l;break t}Xe=u}}}var ib={getCacheForType:function(t){var e=He(Ae),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},ob=typeof WeakMap=="function"?WeakMap:Map,Pt=0,It=null,Rt=null,zt=0,Yt=0,un=null,Ma=!1,Pi=!1,tc=!1,aa=0,se=0,wa=0,li=0,ec=0,vn=0,Yi=0,ir=null,tn=null,nc=!1,ac=0,jl=1/0,zl=null,Xa=null,ze=0,Ca=null,Gi=null,Zi=0,ic=0,oc=null,R0=null,or=0,rc=null;function cn(){if((Pt&2)!==0&&zt!==0)return zt&-zt;if(_.T!==null){var t=ki;return t!==0?t:dc()}return ye()}function N0(){vn===0&&(vn=(zt&536870912)===0||Lt?an():536870912);var t=bn.current;return t!==null&&(t.flags|=32),vn}function fn(t,e,n){(t===It&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(Qi(t,0),Ra(t,zt,vn,!1)),Ge(t,n),((Pt&2)===0||t!==It)&&(t===It&&((Pt&2)===0&&(li|=n),se===4&&Ra(t,zt,vn,!1)),Vn(t))}function k0(t,e,n){if((Pt&6)!==0)throw Error(s(327));var o=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Pn(t,e),l=o?sb(t,e):uc(t,e,!0),u=o;do{if(l===0){Pi&&!o&&Ra(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!rb(n)){l=uc(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var b=t;l=ir;var S=b.current.memoizedState.isDehydrated;if(S&&(Qi(b,m).flags|=256),m=uc(b,m,!1),m!==2){if(tc&&!S){b.errorRecoveryDisabledLanes|=u,li|=u,l=4;break t}u=tn,tn=l,u!==null&&(tn===null?tn=u:tn.push.apply(tn,u))}l=m}if(u=!1,l!==2)continue}}if(l===1){Qi(t,0),Ra(t,e,0,!0);break}t:{switch(o=t,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Ra(o,e,vn,!Ma);break t;case 2:tn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=ac+300-Dt(),10<l)){if(Ra(o,e,vn,!Ma),pi(o,0,!0)!==0)break t;o.timeoutHandle=sm(j0.bind(null,o,n,tn,zl,nc,e,vn,li,Yi,Ma,u,2,-0,0),l);break t}j0(o,n,tn,zl,nc,e,vn,li,Yi,Ma,u,0,-0,0)}}break}while(!0);Vn(t)}function j0(t,e,n,o,l,u,m,b,S,C,U,Y,R,N){if(t.timeoutHandle=-1,Y=e.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(hr={stylesheets:null,count:0,unsuspend:Hb},M0(e),Y=Pb(),Y!==null)){t.cancelPendingCommit=Y(H0.bind(null,t,e,u,n,o,l,m,b,S,U,1,R,N)),Ra(t,u,m,!C);return}H0(t,e,u,n,o,l,m,b,S)}function rb(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var l=n[o],u=l.getSnapshot;l=l.value;try{if(!on(u(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ra(t,e,n,o){e&=~ec,e&=~li,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var l=e;0<l;){var u=31-Ne(l),m=1<<u;o[u]=-1,l&=~m}n!==0&&yi(t,n,e)}function _l(){return(Pt&6)===0?(rr(0),!1):!0}function lc(){if(Rt!==null){if(Yt===0)var t=Rt.return;else t=Rt,Fn=ei=null,Du(t),Ui=null,Jo=0,t=Rt;for(;t!==null;)d0(t.alternate,t),t=t.return;Rt=null}}function Qi(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Db(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),lc(),It=t,Rt=n=Zn(t.current,null),zt=e,Yt=0,un=null,Ma=!1,Pi=Pn(t,e),tc=!1,Yi=vn=ec=li=wa=se=0,tn=ir=null,nc=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var l=31-Ne(o),u=1<<l;e|=t[l],o&=~u}return aa=e,il(),n}function z0(t,e){Et=null,_.H=Al,e===Ho||e===dl?(e=$h(),Yt=3):e===Fh?(e=$h(),Yt=4):Yt=e===Id?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,un=e,Rt===null&&(se=1,wl(t,mn(e,t.current)))}function _0(){var t=_.H;return _.H=Al,t===null?Al:t}function V0(){var t=_.A;return _.A=ib,t}function sc(){se=4,Ma||(zt&4194048)!==zt&&bn.current!==null||(Pi=!0),(wa&134217727)===0&&(li&134217727)===0||It===null||Ra(It,zt,vn,!1)}function uc(t,e,n){var o=Pt;Pt|=2;var l=_0(),u=V0();(It!==t||zt!==e)&&(zl=null,Qi(t,e)),e=!1;var m=se;t:do try{if(Yt!==0&&Rt!==null){var b=Rt,S=un;switch(Yt){case 8:lc(),m=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(e=!0);var C=Yt;if(Yt=0,un=null,Ki(t,b,S,C),n&&Pi){m=0;break t}break;default:C=Yt,Yt=0,un=null,Ki(t,b,S,C)}}lb(),m=se;break}catch(U){z0(t,U)}while(!0);return e&&t.shellSuspendCounter++,Fn=ei=null,Pt=o,_.H=l,_.A=u,Rt===null&&(It=null,zt=0,il()),m}function lb(){for(;Rt!==null;)B0(Rt)}function sb(t,e){var n=Pt;Pt|=2;var o=_0(),l=V0();It!==t||zt!==e?(zl=null,jl=Dt()+500,Qi(t,e)):Pi=Pn(t,e);t:do try{if(Yt!==0&&Rt!==null){e=Rt;var u=un;e:switch(Yt){case 1:Yt=0,un=null,Ki(t,e,u,1);break;case 2:case 9:if(Jh(u)){Yt=0,un=null,U0(e);break}e=function(){Yt!==2&&Yt!==9||It!==t||(Yt=7),Vn(t)},u.then(e,e);break t;case 3:Yt=7;break t;case 4:Yt=5;break t;case 7:Jh(u)?(Yt=0,un=null,U0(e)):(Yt=0,un=null,Ki(t,e,u,7));break;case 5:var m=null;switch(Rt.tag){case 26:m=Rt.memoizedState;case 5:case 27:var b=Rt;if(!m||xm(m)){Yt=0,un=null;var S=b.sibling;if(S!==null)Rt=S;else{var C=b.return;C!==null?(Rt=C,Vl(C)):Rt=null}break e}}Yt=0,un=null,Ki(t,e,u,5);break;case 6:Yt=0,un=null,Ki(t,e,u,6);break;case 8:lc(),se=6;break t;default:throw Error(s(462))}}ub();break}catch(U){z0(t,U)}while(!0);return Fn=ei=null,_.H=o,_.A=l,Pt=n,Rt!==null?0:(It=null,zt=0,il(),se)}function ub(){for(;Rt!==null&&!ce();)B0(Rt)}function B0(t){var e=f0(t.alternate,t,aa);t.memoizedProps=t.pendingProps,e===null?Vl(t):Rt=e}function U0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=o0(n,e,e.pendingProps,e.type,void 0,zt);break;case 11:e=o0(n,e,e.pendingProps,e.type.render,e.ref,zt);break;case 5:Du(e);default:d0(n,e),e=Rt=Lh(e,aa),e=f0(n,e,aa)}t.memoizedProps=t.pendingProps,e===null?Vl(t):Rt=e}function Ki(t,e,n,o){Fn=ei=null,Du(e),Ui=null,Jo=0;var l=e.return;try{if($y(t,l,e,n,zt)){se=1,wl(t,mn(n,t.current)),Rt=null;return}}catch(u){if(l!==null)throw Rt=l,u;se=1,wl(t,mn(n,t.current)),Rt=null;return}e.flags&32768?(Lt||o===1?t=!0:Pi||(zt&536870912)!==0?t=!1:(Ma=t=!0,(o===2||o===9||o===3||o===6)&&(o=bn.current,o!==null&&o.tag===13&&(o.flags|=16384))),L0(e,t)):Vl(e)}function Vl(t){var e=t;do{if((e.flags&32768)!==0){L0(e,Ma);return}t=e.return;var n=tb(e.alternate,e,aa);if(n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);se===0&&(se=5)}function L0(t,e){do{var n=eb(t.alternate,t);if(n!==null){n.flags&=32767,Rt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Rt=t;return}Rt=t=n}while(t!==null);se=6,Rt=null}function H0(t,e,n,o,l,u,m,b,S){t.cancelPendingCommit=null;do Bl();while(ze!==0);if((Pt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Is,Rs(t,n,u,m,b,S),t===It&&(Rt=It=null,zt=0),Gi=e,Ca=t,Zi=n,ic=u,oc=l,R0=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,db(ge,function(){return Z0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=_.T,_.T=null,l=F.p,F.p=2,m=Pt,Pt|=4;try{nb(t,e,n)}finally{Pt=m,F.p=l,_.T=o}}ze=1,q0(),P0(),Y0()}}function q0(){if(ze===1){ze=0;var t=Ca,e=Gi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var o=F.p;F.p=2;var l=Pt;Pt|=4;try{D0(e,t);var u=Tc,m=Ch(t.containerInfo),b=u.focusedElem,S=u.selectionRange;if(m!==b&&b&&b.ownerDocument&&Xh(b.ownerDocument.documentElement,b)){if(S!==null&&Ks(b)){var C=S.start,U=S.end;if(U===void 0&&(U=C),"selectionStart"in b)b.selectionStart=C,b.selectionEnd=Math.min(U,b.value.length);else{var Y=b.ownerDocument||document,R=Y&&Y.defaultView||window;if(R.getSelection){var N=R.getSelection(),bt=b.textContent.length,mt=Math.min(S.start,bt),Ft=S.end===void 0?mt:Math.min(S.end,bt);!N.extend&&mt>Ft&&(m=Ft,Ft=mt,mt=m);var O=wh(b,mt),D=wh(b,Ft);if(O&&D&&(N.rangeCount!==1||N.anchorNode!==O.node||N.anchorOffset!==O.offset||N.focusNode!==D.node||N.focusOffset!==D.offset)){var X=Y.createRange();X.setStart(O.node,O.offset),N.removeAllRanges(),mt>Ft?(N.addRange(X),N.extend(D.node,D.offset)):(X.setEnd(D.node,D.offset),N.addRange(X))}}}}for(Y=[],N=b;N=N.parentNode;)N.nodeType===1&&Y.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Y.length;b++){var q=Y[b];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Jl=!!xc,Tc=xc=null}finally{Pt=l,F.p=o,_.T=n}}t.current=e,ze=2}}function P0(){if(ze===2){ze=0;var t=Ca,e=Gi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var o=F.p;F.p=2;var l=Pt;Pt|=4;try{x0(t,e.alternate,e)}finally{Pt=l,F.p=o,_.T=n}}ze=3}}function Y0(){if(ze===4||ze===3){ze=0,st();var t=Ca,e=Gi,n=Zi,o=R0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ze=5:(ze=0,Gi=Ca=null,G0(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Xa=null),bi(n),e=e.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Hn,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=_.T,l=F.p,F.p=2,_.T=null;try{for(var u=t.onRecoverableError,m=0;m<o.length;m++){var b=o[m];u(b.value,{componentStack:b.stack})}}finally{_.T=e,F.p=l}}(Zi&3)!==0&&Bl(),Vn(t),l=t.pendingLanes,(n&4194090)!==0&&(l&42)!==0?t===rc?or++:(or=0,rc=t):or=0,rr(0)}}function G0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Uo(e)))}function Bl(t){return q0(),P0(),Y0(),Z0()}function Z0(){if(ze!==5)return!1;var t=Ca,e=ic;ic=0;var n=bi(Zi),o=_.T,l=F.p;try{F.p=32>n?32:n,_.T=null,n=oc,oc=null;var u=Ca,m=Zi;if(ze=0,Gi=Ca=null,Zi=0,(Pt&6)!==0)throw Error(s(331));var b=Pt;if(Pt|=4,X0(u.current),E0(u,u.current,m,n),Pt=b,rr(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Hn,u)}catch{}return!0}finally{F.p=l,_.T=o,G0(t,e)}}function Q0(t,e,n){e=mn(n,e),e=Bu(t.stateNode,e,2),t=xa(t,e,2),t!==null&&(Ge(t,2),Vn(t))}function $t(t,e,n){if(t.tag===3)Q0(t,t,n);else for(;e!==null;){if(e.tag===3){Q0(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=mn(n,t),n=Wd(2),o=xa(e,n,2),o!==null&&($d(n,o,e,t),Ge(o,2),Vn(o));break}}e=e.return}}function cc(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new ob;var l=new Set;o.set(e,l)}else l=o.get(e),l===void 0&&(l=new Set,o.set(e,l));l.has(n)||(tc=!0,l.add(n),t=cb.bind(null,t,e,n),e.then(t,t))}function cb(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,It===t&&(zt&n)===n&&(se===4||se===3&&(zt&62914560)===zt&&300>Dt()-ac?(Pt&2)===0&&Qi(t,0):ec|=n,Yi===zt&&(Yi=0)),Vn(t)}function K0(t,e){e===0&&(e=Dn()),t=Xi(t,e),t!==null&&(Ge(t,e),Vn(t))}function fb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K0(t,n)}function hb(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(e),K0(t,n)}function db(t,e){return kt(t,e)}var Ul=null,Fi=null,fc=!1,Ll=!1,hc=!1,si=0;function Vn(t){t!==Fi&&t.next===null&&(Fi===null?Ul=Fi=t:Fi=Fi.next=t),Ll=!0,fc||(fc=!0,pb())}function rr(t,e){if(!hc&&Ll){hc=!0;do for(var n=!1,o=Ul;o!==null;){if(t!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var m=o.suspendedLanes,b=o.pingedLanes;u=(1<<31-Ne(42|t)+1)-1,u&=l&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,$0(o,u))}else u=zt,u=pi(o,o===It?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Pn(o,u)||(n=!0,$0(o,u));o=o.next}while(n);hc=!1}}function mb(){F0()}function F0(){Ll=fc=!1;var t=0;si!==0&&(Ab()&&(t=si),si=0);for(var e=Dt(),n=null,o=Ul;o!==null;){var l=o.next,u=J0(o,e);u===0?(o.next=null,n===null?Ul=l:n.next=l,l===null&&(Fi=n)):(n=o,(t!==0||(u&3)!==0)&&(Ll=!0)),o=l}rr(t)}function J0(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var m=31-Ne(u),b=1<<m,S=l[m];S===-1?((b&n)===0||(b&o)!==0)&&(l[m]=jt(b,e)):S<=e&&(t.expiredLanes|=b),u&=~b}if(e=It,n=zt,n=pi(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,n===0||t===e&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ct(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Pn(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(o!==null&&Ct(o),bi(n)){case 2:case 8:n=Ye;break;case 32:n=ge;break;case 268435456:n=Rn;break;default:n=ge}return o=W0.bind(null,t),n=kt(n,o),t.callbackPriority=e,t.callbackNode=n,e}return o!==null&&o!==null&&Ct(o),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,e){if(ze!==0&&ze!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Bl()&&t.callbackNode!==n)return null;var o=zt;return o=pi(t,t===It?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(k0(t,o,e),J0(t,Dt()),t.callbackNode!=null&&t.callbackNode===n?W0.bind(null,t):null)}function $0(t,e){if(Bl())return null;k0(t,e,!0)}function pb(){Ob(function(){(Pt&6)!==0?kt(Wt,mb):F0()})}function dc(){return si===0&&(si=an()),si}function I0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wr(""+t)}function tm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function gb(t,e,n,o,l){if(e==="submit"&&n&&n.stateNode===l){var u=I0((l[ke]||null).action),m=o.submitter;m&&(e=(e=m[ke]||null)?I0(e.formAction):m.getAttribute("formAction"),e!==null&&(u=e,m=null));var b=new el("action","action",null,o,l);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(si!==0){var S=m?tm(l,m):new FormData(l);ku(n,{pending:!0,data:S,method:l.method,action:u},null,S)}}else typeof u=="function"&&(b.preventDefault(),S=m?tm(l,m):new FormData(l),ku(n,{pending:!0,data:S,method:l.method,action:u},u,S))},currentTarget:l}]})}}for(var mc=0;mc<$s.length;mc++){var pc=$s[mc],yb=pc.toLowerCase(),bb=pc[0].toUpperCase()+pc.slice(1);On(yb,"on"+bb)}On(kh,"onAnimationEnd"),On(jh,"onAnimationIteration"),On(zh,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(zy,"onTransitionRun"),On(_y,"onTransitionStart"),On(Vy,"onTransitionCancel"),On(_h,"onTransitionEnd"),Yn("onMouseEnter",["mouseout","mouseover"]),Yn("onMouseLeave",["mouseout","mouseover"]),Yn("onPointerEnter",["pointerout","pointerover"]),Yn("onPointerLeave",["pointerout","pointerover"]),Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lr));function em(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],l=o.event;o=o.listeners;t:{var u=void 0;if(e)for(var m=o.length-1;0<=m;m--){var b=o[m],S=b.instance,C=b.currentTarget;if(b=b.listener,S!==u&&l.isPropagationStopped())break t;u=b,l.currentTarget=C;try{u(l)}catch(U){Ml(U)}l.currentTarget=null,u=S}else for(m=0;m<o.length;m++){if(b=o[m],S=b.instance,C=b.currentTarget,b=b.listener,S!==u&&l.isPropagationStopped())break t;u=b,l.currentTarget=C;try{u(l)}catch(U){Ml(U)}l.currentTarget=null,u=S}}}}function Nt(t,e){var n=e[xi];n===void 0&&(n=e[xi]=new Set);var o=t+"__bubble";n.has(o)||(nm(e,t,2,!1),n.add(o))}function gc(t,e,n){var o=0;e&&(o|=4),nm(n,t,o,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function yc(t){if(!t[Hl]){t[Hl]=!0,Yr.forEach(function(n){n!=="selectionchange"&&(vb.has(n)||gc(n,!1,t),gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,gc("selectionchange",!1,e))}}function nm(t,e,n,o){switch(Em(e)){case 2:var l=Zb;break;case 8:l=Qb;break;default:l=Rc}n=l.bind(null,e,n,t),l=void 0,!Us||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),o?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function bc(t,e,n,o,l){var u=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var b=o.stateNode.containerInfo;if(b===l)break;if(m===4)for(m=o.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;b!==null;){if(m=ha(b),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){o=u=m;continue t}b=b.parentNode}}o=o.return}uh(function(){var C=u,U=Vs(n),Y=[];t:{var R=Vh.get(t);if(R!==void 0){var N=el,bt=t;switch(t){case"keypress":if(Ir(n)===0)break t;case"keydown":case"keyup":N=dy;break;case"focusin":bt="focus",N=Ps;break;case"focusout":bt="blur",N=Ps;break;case"beforeblur":case"afterblur":N=Ps;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=gy;break;case kh:case jh:case zh:N=iy;break;case _h:N=by;break;case"scroll":case"scrollend":N=I1;break;case"wheel":N=xy;break;case"copy":case"cut":case"paste":N=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=mh;break;case"toggle":case"beforetoggle":N=Sy}var mt=(e&4)!==0,Ft=!mt&&(t==="scroll"||t==="scrollend"),O=mt?R!==null?R+"Capture":null:R;mt=[];for(var D=C,X;D!==null;){var q=D;if(X=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||X===null||O===null||(q=Eo(D,O),q!=null&&mt.push(sr(D,q,X))),Ft)break;D=D.return}0<mt.length&&(R=new N(R,bt,null,n,U),Y.push({event:R,listeners:mt}))}}if((e&7)===0){t:{if(R=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",R&&n!==_s&&(bt=n.relatedTarget||n.fromElement)&&(ha(bt)||bt[fa]))break t;if((N||R)&&(R=U.window===U?U:(R=U.ownerDocument)?R.defaultView||R.parentWindow:window,N?(bt=n.relatedTarget||n.toElement,N=C,bt=bt?ha(bt):null,bt!==null&&(Ft=h(bt),mt=bt.tag,bt!==Ft||mt!==5&&mt!==27&&mt!==6)&&(bt=null)):(N=null,bt=C),N!==bt)){if(mt=hh,q="onMouseLeave",O="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(mt=mh,q="onPointerLeave",O="onPointerEnter",D="pointer"),Ft=N==null?R:Za(N),X=bt==null?R:Za(bt),R=new mt(q,D+"leave",N,n,U),R.target=Ft,R.relatedTarget=X,q=null,ha(U)===C&&(mt=new mt(O,D+"enter",bt,n,U),mt.target=X,mt.relatedTarget=Ft,q=mt),Ft=q,N&&bt)e:{for(mt=N,O=bt,D=0,X=mt;X;X=Ji(X))D++;for(X=0,q=O;q;q=Ji(q))X++;for(;0<D-X;)mt=Ji(mt),D--;for(;0<X-D;)O=Ji(O),X--;for(;D--;){if(mt===O||O!==null&&mt===O.alternate)break e;mt=Ji(mt),O=Ji(O)}mt=null}else mt=null;N!==null&&am(Y,R,N,mt,!1),bt!==null&&Ft!==null&&am(Y,Ft,bt,mt,!0)}}t:{if(R=C?Za(C):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var at=Sh;else if(xh(R))if(Ah)at=Ny;else{at=Cy;var Mt=Xy}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?C&&Oo(C.elementType)&&(at=Sh):at=Ry;if(at&&(at=at(t,C))){Th(Y,at,n,U);break t}Mt&&Mt(t,R,C),t==="focusout"&&C&&R.type==="number"&&C.memoizedProps.value!=null&&gt(R,"number",R.value)}switch(Mt=C?Za(C):window,t){case"focusin":(xh(Mt)||Mt.contentEditable==="true")&&(Ei=Mt,Fs=C,jo=null);break;case"focusout":jo=Fs=Ei=null;break;case"mousedown":Js=!0;break;case"contextmenu":case"mouseup":case"dragend":Js=!1,Rh(Y,n,U);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":Rh(Y,n,U)}var rt;if(Gs)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Oi?bh(t,n)&&(pt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(pt="onCompositionStart");pt&&(ph&&n.locale!=="ko"&&(Oi||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Oi&&(rt=ch()):(ga=U,Ls="value"in ga?ga.value:ga.textContent,Oi=!0)),Mt=ql(C,pt),0<Mt.length&&(pt=new dh(pt,t,null,n,U),Y.push({event:pt,listeners:Mt}),rt?pt.data=rt:(rt=vh(n),rt!==null&&(pt.data=rt)))),(rt=Dy?Oy(t,n):Ey(t,n))&&(pt=ql(C,"onBeforeInput"),0<pt.length&&(Mt=new dh("onBeforeInput","beforeinput",null,n,U),Y.push({event:Mt,listeners:pt}),Mt.data=rt)),gb(Y,t,C,n,U)}em(Y,e)})}function sr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ql(t,e){for(var n=e+"Capture",o=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Eo(t,n),l!=null&&o.unshift(sr(t,l,u)),l=Eo(t,e),l!=null&&o.push(sr(t,l,u))),t.tag===3)return o;t=t.return}return[]}function Ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function am(t,e,n,o,l){for(var u=e._reactName,m=[];n!==null&&n!==o;){var b=n,S=b.alternate,C=b.stateNode;if(b=b.tag,S!==null&&S===o)break;b!==5&&b!==26&&b!==27||C===null||(S=C,l?(C=Eo(n,u),C!=null&&m.unshift(sr(n,C,S))):l||(C=Eo(n,u),C!=null&&m.push(sr(n,C,S)))),n=n.return}m.length!==0&&t.push({event:e,listeners:m})}var xb=/\r\n?/g,Tb=/\u0000|\uFFFD/g;function im(t){return(typeof t=="string"?t:""+t).replace(xb,`
`).replace(Tb,"")}function om(t,e){return e=im(e),im(t)===e}function Pl(){}function Kt(t,e,n,o,l,u){switch(n){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||Le(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&Le(t,""+o);break;case"className":Si(t,"class",o);break;case"tabIndex":Si(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Si(t,n,o);break;case"style":te(t,o,u);break;case"data":if(e!=="object"){Si(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Wr(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Kt(t,e,"name",l.name,l,null),Kt(t,e,"formEncType",l.formEncType,l,null),Kt(t,e,"formMethod",l.formMethod,l,null),Kt(t,e,"formTarget",l.formTarget,l,null)):(Kt(t,e,"encType",l.encType,l,null),Kt(t,e,"method",l.method,l,null),Kt(t,e,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Wr(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=Pl);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=Wr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":Nt("beforetoggle",t),Nt("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":dn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":dn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":dn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":dn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":dn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":dn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":dn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":dn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":dn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=zs.get(n)||n,Be(t,n,o))}}function vc(t,e,n,o,l,u){switch(n){case"style":te(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof o=="string"?Le(t,o):(typeof o=="number"||typeof o=="bigint")&&Le(t,""+o);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gr.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),u=t[ke]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,o,l);break t}n in t?t[n]=o:o===!0?t.setAttribute(n,""):Be(t,n,o)}}}function _e(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",t),Nt("load",t);var o=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Kt(t,e,u,m,n,null)}}l&&Kt(t,e,"srcSet",n.srcSet,n,null),o&&Kt(t,e,"src",n.src,n,null);return;case"input":Nt("invalid",t);var b=u=m=l=null,S=null,C=null;for(o in n)if(n.hasOwnProperty(o)){var U=n[o];if(U!=null)switch(o){case"name":l=U;break;case"type":m=U;break;case"checked":S=U;break;case"defaultChecked":C=U;break;case"value":u=U;break;case"defaultValue":b=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,e));break;default:Kt(t,e,o,U,n,null)}}ot(t,u,b,S,C,m,l,!1),z(t);return;case"select":Nt("invalid",t),o=m=u=null;for(l in n)if(n.hasOwnProperty(l)&&(b=n[l],b!=null))switch(l){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":o=b;default:Kt(t,e,l,b,n,null)}e=u,n=m,t.multiple=!!o,e!=null?Vt(t,!!o,e,!1):n!=null&&Vt(t,!!o,n,!0);return;case"textarea":Nt("invalid",t),u=l=o=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":o=b;break;case"defaultValue":l=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Kt(t,e,m,b,n,null)}Ue(t,o,l,u),z(t);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(o=n[S],o!=null))switch(S){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Kt(t,e,S,o,n,null)}return;case"dialog":Nt("beforetoggle",t),Nt("toggle",t),Nt("cancel",t),Nt("close",t);break;case"iframe":case"object":Nt("load",t);break;case"video":case"audio":for(o=0;o<lr.length;o++)Nt(lr[o],t);break;case"image":Nt("error",t),Nt("load",t);break;case"details":Nt("toggle",t);break;case"embed":case"source":case"link":Nt("error",t),Nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(o=n[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Kt(t,e,C,o,n,null)}return;default:if(Oo(e)){for(U in n)n.hasOwnProperty(U)&&(o=n[U],o!==void 0&&vc(t,e,U,o,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(o=n[b],o!=null&&Kt(t,e,b,o,n,null))}function Sb(t,e,n,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,m=null,b=null,S=null,C=null,U=null;for(N in n){var Y=n[N];if(n.hasOwnProperty(N)&&Y!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":S=Y;default:o.hasOwnProperty(N)||Kt(t,e,N,null,o,Y)}}for(var R in o){var N=o[R];if(Y=n[R],o.hasOwnProperty(R)&&(N!=null||Y!=null))switch(R){case"type":u=N;break;case"name":l=N;break;case"checked":C=N;break;case"defaultChecked":U=N;break;case"value":m=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:N!==Y&&Kt(t,e,R,N,o,Y)}}nt(t,m,b,S,C,U,u,l);return;case"select":N=m=b=R=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":N=S;default:o.hasOwnProperty(u)||Kt(t,e,u,null,o,S)}for(l in o)if(u=o[l],S=n[l],o.hasOwnProperty(l)&&(u!=null||S!=null))switch(l){case"value":R=u;break;case"defaultValue":b=u;break;case"multiple":m=u;default:u!==S&&Kt(t,e,l,u,o,S)}e=b,n=m,o=N,R!=null?Vt(t,!!n,R,!1):!!o!=!!n&&(e!=null?Vt(t,!!n,e,!0):Vt(t,!!n,n?[]:"",!1));return;case"textarea":N=R=null;for(b in n)if(l=n[b],n.hasOwnProperty(b)&&l!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Kt(t,e,b,null,o,l)}for(m in o)if(l=o[m],u=n[m],o.hasOwnProperty(m)&&(l!=null||u!=null))switch(m){case"value":R=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Kt(t,e,m,l,o,u)}fe(t,R,N);return;case"option":for(var bt in n)if(R=n[bt],n.hasOwnProperty(bt)&&R!=null&&!o.hasOwnProperty(bt))switch(bt){case"selected":t.selected=!1;break;default:Kt(t,e,bt,null,o,R)}for(S in o)if(R=o[S],N=n[S],o.hasOwnProperty(S)&&R!==N&&(R!=null||N!=null))switch(S){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Kt(t,e,S,R,o,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in n)R=n[mt],n.hasOwnProperty(mt)&&R!=null&&!o.hasOwnProperty(mt)&&Kt(t,e,mt,null,o,R);for(C in o)if(R=o[C],N=n[C],o.hasOwnProperty(C)&&R!==N&&(R!=null||N!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,e));break;default:Kt(t,e,C,R,o,N)}return;default:if(Oo(e)){for(var Ft in n)R=n[Ft],n.hasOwnProperty(Ft)&&R!==void 0&&!o.hasOwnProperty(Ft)&&vc(t,e,Ft,void 0,o,R);for(U in o)R=o[U],N=n[U],!o.hasOwnProperty(U)||R===N||R===void 0&&N===void 0||vc(t,e,U,R,o,N);return}}for(var O in n)R=n[O],n.hasOwnProperty(O)&&R!=null&&!o.hasOwnProperty(O)&&Kt(t,e,O,null,o,R);for(Y in o)R=o[Y],N=n[Y],!o.hasOwnProperty(Y)||R===N||R==null&&N==null||Kt(t,e,Y,R,o,N)}var xc=null,Tc=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function rm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Sc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ac=null;function Ab(){var t=window.event;return t&&t.type==="popstate"?t===Ac?!1:(Ac=t,!0):(Ac=null,!1)}var sm=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,Ob=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(t){return um.resolve(null).then(t).catch(Eb)}:sm;function Eb(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function cm(t,e){var n=e,o=0,l=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<o&&8>o){n=o;var m=t.ownerDocument;if(n&1&&ur(m.documentElement),n&2&&ur(m.body),n&4)for(n=m.head,ur(n),m=n.firstChild;m;){var b=m.nextSibling,S=m.nodeName;m[Ga]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(l===0){t.removeChild(u),yr(e);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:o=n.charCodeAt(0)-48;else o=0;n=u}while(n);yr(e)}function Dc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Dc(n),vo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Mb(t,e,n,o){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ga])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Mn(t.nextSibling),t===null)break}return null}function wb(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mn(t.nextSibling),t===null))return null;return t}function Oc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Xb(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var o=function(){e(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Ec=null;function fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function hm(t,e,n){switch(e=Yl(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ur(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);vo(t)}var xn=new Map,dm=new Set;function Gl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ia=F.d;F.d={f:Cb,r:Rb,D:Nb,C:kb,L:jb,m:zb,X:Vb,S:_b,M:Bb};function Cb(){var t=ia.f(),e=_l();return t||e}function Rb(t){var e=da(t);e!==null&&e.tag===5&&e.type==="form"?kd(e):ia.r(t)}var Wi=typeof document>"u"?null:document;function mm(t,e,n){var o=Wi;if(o&&typeof e=="string"&&e){var l=ut(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),dm.has(l)||(dm.add(l),t={rel:t,crossOrigin:n,href:e},o.querySelector(l)===null&&(e=o.createElement("link"),_e(e,"link",t),ve(e),o.head.appendChild(e)))}}function Nb(t){ia.D(t),mm("dns-prefetch",t,null)}function kb(t,e){ia.C(t,e),mm("preconnect",t,e)}function jb(t,e,n){ia.L(t,e,n);var o=Wi;if(o&&t&&e){var l='link[rel="preload"][as="'+ut(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+ut(n.imageSizes)+'"]')):l+='[href="'+ut(t)+'"]';var u=l;switch(e){case"style":u=$i(t);break;case"script":u=Ii(t)}xn.has(u)||(t=y({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),xn.set(u,t),o.querySelector(l)!==null||e==="style"&&o.querySelector(cr(u))||e==="script"&&o.querySelector(fr(u))||(e=o.createElement("link"),_e(e,"link",t),ve(e),o.head.appendChild(e)))}}function zb(t,e){ia.m(t,e);var n=Wi;if(n&&t){var o=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+ut(o)+'"][href="'+ut(t)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ii(t)}if(!xn.has(u)&&(t=y({rel:"modulepreload",href:t},e),xn.set(u,t),n.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fr(u)))return}o=n.createElement("link"),_e(o,"link",t),ve(o),n.head.appendChild(o)}}}function _b(t,e,n){ia.S(t,e,n);var o=Wi;if(o&&t){var l=ma(o).hoistableStyles,u=$i(t);e=e||"default";var m=l.get(u);if(!m){var b={loading:0,preload:null};if(m=o.querySelector(cr(u)))b.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},n),(n=xn.get(u))&&Mc(t,n);var S=m=o.createElement("link");ve(S),_e(S,"link",t),S._p=new Promise(function(C,U){S.onload=C,S.onerror=U}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Zl(m,e,o)}m={type:"stylesheet",instance:m,count:1,state:b},l.set(u,m)}}}function Vb(t,e){ia.X(t,e);var n=Wi;if(n&&t){var o=ma(n).hoistableScripts,l=Ii(t),u=o.get(l);u||(u=n.querySelector(fr(l)),u||(t=y({src:t,async:!0},e),(e=xn.get(l))&&wc(t,e),u=n.createElement("script"),ve(u),_e(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function Bb(t,e){ia.M(t,e);var n=Wi;if(n&&t){var o=ma(n).hoistableScripts,l=Ii(t),u=o.get(l);u||(u=n.querySelector(fr(l)),u||(t=y({src:t,async:!0,type:"module"},e),(e=xn.get(l))&&wc(t,e),u=n.createElement("script"),ve(u),_e(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function pm(t,e,n,o){var l=(l=ft.current)?Gl(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=$i(n.href),n=ma(l).hoistableStyles,o=n.get(e),o||(o={type:"style",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=$i(n.href);var u=ma(l).hoistableStyles,m=u.get(t);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,m),(u=l.querySelector(cr(t)))&&!u._p&&(m.instance=u,m.state.loading=5),xn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xn.set(t,n),u||Ub(l,t,n,m.state))),e&&o===null)throw Error(s(528,""));return m}if(e&&o!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ii(n),n=ma(l).hoistableScripts,o=n.get(e),o||(o={type:"script",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function $i(t){return'href="'+ut(t)+'"'}function cr(t){return'link[rel="stylesheet"]['+t+"]"}function gm(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function Ub(t,e,n,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),_e(e,"link",n),ve(e),t.head.appendChild(e))}function Ii(t){return'[src="'+ut(t)+'"]'}function fr(t){return"script[async]"+t}function ym(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+ut(n.href)+'"]');if(o)return e.instance=o,ve(o),o;var l=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ve(o),_e(o,"style",l),Zl(o,n.precedence,t),e.instance=o;case"stylesheet":l=$i(n.href);var u=t.querySelector(cr(l));if(u)return e.state.loading|=4,e.instance=u,ve(u),u;o=gm(n),(l=xn.get(l))&&Mc(o,l),u=(t.ownerDocument||t).createElement("link"),ve(u);var m=u;return m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),_e(u,"link",o),e.state.loading|=4,Zl(u,n.precedence,t),e.instance=u;case"script":return u=Ii(n.src),(l=t.querySelector(fr(u)))?(e.instance=l,ve(l),l):(o=n,(l=xn.get(u))&&(o=y({},n),wc(o,l)),t=t.ownerDocument||t,l=t.createElement("script"),ve(l),_e(l,"link",o),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,Zl(o,n.precedence,t));return e.instance}function Zl(t,e,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,m=0;m<o.length;m++){var b=o[m];if(b.dataset.precedence===e)u=b;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Mc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function wc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ql=null;function bm(t,e,n){if(Ql===null){var o=new Map,l=Ql=new Map;l.set(n,o)}else l=Ql,o=l.get(n),o||(o=new Map,l.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var u=n[l];if(!(u[Ga]||u[Me]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(e)||"";m=t+m;var b=o.get(m);b?b.push(u):o.set(m,[u])}}return o}function vm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Lb(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function xm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var hr=null;function Hb(){}function qb(t,e,n){if(hr===null)throw Error(s(475));var o=hr;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=$i(n.href),u=t.querySelector(cr(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Kl.bind(o),t.then(o,o)),e.state.loading|=4,e.instance=u,ve(u);return}u=t.ownerDocument||t,n=gm(n),(l=xn.get(l))&&Mc(n,l),u=u.createElement("link"),ve(u);var m=u;m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),_e(u,"link",n),e.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(o.count++,e=Kl.bind(o),t.addEventListener("load",e),t.addEventListener("error",e))}}function Pb(){if(hr===null)throw Error(s(475));var t=hr;return t.stylesheets&&t.count===0&&Xc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fl=null;function Xc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fl=new Map,e.forEach(Yb,t),Fl=null,Kl.call(t))}function Yb(t,e){if(!(e.state.loading&4)){var n=Fl.get(t);if(n)var o=n.get(null);else{n=new Map,Fl.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var m=l[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),o=m)}o&&n.set(null,o)}l=e.instance,m=l.getAttribute("data-precedence"),u=n.get(m)||o,u===o&&n.set(null,l),n.set(m,l),this.count++,o=Kl.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var dr={$$typeof:k,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Gb(t,e,n,o,l,u,m,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.hiddenUpdates=gi(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Tm(t,e,n,o,l,u,m,b,S,C,U,Y){return t=new Gb(t,e,n,m,b,S,C,Y),e=1,u===!0&&(e|=24),u=rn(3,null,null,e),t.current=u,u.stateNode=t,e=cu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:e},mu(u),t}function Sm(t){return t?(t=Ci,t):Ci}function Am(t,e,n,o,l,u){l=Sm(l),o.context===null?o.context=l:o.pendingContext=l,o=va(e),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=xa(t,o,e),n!==null&&(fn(n,t,e),Po(n,t,e))}function Dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cc(t,e){Dm(t,e),(t=t.alternate)&&Dm(t,e)}function Om(t){if(t.tag===13){var e=Xi(t,67108864);e!==null&&fn(e,t,67108864),Cc(t,67108864)}}var Jl=!0;function Zb(t,e,n,o){var l=_.T;_.T=null;var u=F.p;try{F.p=2,Rc(t,e,n,o)}finally{F.p=u,_.T=l}}function Qb(t,e,n,o){var l=_.T;_.T=null;var u=F.p;try{F.p=8,Rc(t,e,n,o)}finally{F.p=u,_.T=l}}function Rc(t,e,n,o){if(Jl){var l=Nc(o);if(l===null)bc(t,e,o,Wl,n),Mm(t,o);else if(Fb(l,t,e,n,o))o.stopPropagation();else if(Mm(t,o),e&4&&-1<Kb.indexOf(t)){for(;l!==null;){var u=da(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=qn(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var S=1<<31-Ne(m);b.entanglements[1]|=S,m&=~S}Vn(u),(Pt&6)===0&&(jl=Dt()+500,rr(0))}}break;case 13:b=Xi(u,2),b!==null&&fn(b,u,2),_l(),Cc(u,2)}if(u=Nc(o),u===null&&bc(t,e,o,Wl,n),u===l)break;l=u}l!==null&&o.stopPropagation()}else bc(t,e,o,null,n)}}function Nc(t){return t=Vs(t),kc(t)}var Wl=null;function kc(t){if(Wl=null,t=ha(t),t!==null){var e=h(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Wl=t,null}function Em(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_t()){case Wt:return 2;case Ye:return 8;case ge:case sa:return 32;case Rn:return 268435456;default:return 32}default:return 32}}var jc=!1,ka=null,ja=null,za=null,mr=new Map,pr=new Map,_a=[],Kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mm(t,e){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":mr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(e.pointerId)}}function gr(t,e,n,o,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},e!==null&&(e=da(e),e!==null&&Om(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Fb(t,e,n,o,l){switch(e){case"focusin":return ka=gr(ka,t,e,n,o,l),!0;case"dragenter":return ja=gr(ja,t,e,n,o,l),!0;case"mouseover":return za=gr(za,t,e,n,o,l),!0;case"pointerover":var u=l.pointerId;return mr.set(u,gr(mr.get(u)||null,t,e,n,o,l)),!0;case"gotpointercapture":return u=l.pointerId,pr.set(u,gr(pr.get(u)||null,t,e,n,o,l)),!0}return!1}function wm(t){var e=ha(t.target);if(e!==null){var n=h(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,vi(t.priority,function(){if(n.tag===13){var o=cn();o=ca(o);var l=Xi(n,o);l!==null&&fn(l,n,o),Cc(n,o)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nc(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);_s=o,n.target.dispatchEvent(o),_s=null}else return e=da(n),e!==null&&Om(e),t.blockedOn=n,!1;e.shift()}return!0}function Xm(t,e,n){$l(t)&&n.delete(e)}function Jb(){jc=!1,ka!==null&&$l(ka)&&(ka=null),ja!==null&&$l(ja)&&(ja=null),za!==null&&$l(za)&&(za=null),mr.forEach(Xm),pr.forEach(Xm)}function Il(t,e){t.blockedOn===e&&(t.blockedOn=null,jc||(jc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Jb)))}var ts=null;function Cm(t){ts!==t&&(ts=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ts===t&&(ts=null);for(var e=0;e<t.length;e+=3){var n=t[e],o=t[e+1],l=t[e+2];if(typeof o!="function"){if(kc(o||n)===null)continue;break}var u=da(n);u!==null&&(t.splice(e,3),e-=3,ku(u,{pending:!0,data:l,method:n.method,action:o},o,l))}}))}function yr(t){function e(S){return Il(S,t)}ka!==null&&Il(ka,t),ja!==null&&Il(ja,t),za!==null&&Il(za,t),mr.forEach(e),pr.forEach(e);for(var n=0;n<_a.length;n++){var o=_a[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<_a.length&&(n=_a[0],n.blockedOn===null);)wm(n),n.blockedOn===null&&_a.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var l=n[o],u=n[o+1],m=l[ke]||null;if(typeof u=="function")m||Cm(n);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(l=u,m=u[ke]||null)b=m.formAction;else if(kc(l)!==null)continue}else b=m.action;typeof b=="function"?n[o+1]=b:(n.splice(o,3),o-=3),Cm(n)}}}function zc(t){this._internalRoot=t}es.prototype.render=zc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,o=cn();Am(n,o,t,e,null,null)},es.prototype.unmount=zc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Am(t.current,2,null,t,null,null),_l(),e[fa]=null}};function es(t){this._internalRoot=t}es.prototype.unstable_scheduleHydration=function(t){if(t){var e=ye();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_a.length&&e!==0&&e<_a[n].priority;n++);_a.splice(n,0,t),n===0&&wm(t)}};var Rm=i.version;if(Rm!=="19.1.0")throw Error(s(527,Rm,"19.1.0"));F.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(e),t=t!==null?d(t):null,t=t===null?null:t.stateNode,t};var Wb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{Hn=ns.inject(Wb),Ee=ns}catch{}}return vr.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,o="",l=Qd,u=Kd,m=Fd,b=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=Tm(t,1,!1,null,null,n,o,l,u,m,b,null),t[fa]=e.current,yc(t),new zc(e)},vr.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var o=!1,l="",u=Qd,m=Kd,b=Fd,S=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),e=Tm(t,1,!0,e,n??null,o,l,u,m,b,S,C),e.context=Sm(null),n=e.current,o=cn(),o=ca(o),l=va(o),l.callback=null,xa(n,l,o),n=o,e.current.lanes=n,Ge(e,n),Vn(e),t[fa]=e.current,yc(t),new es(e)},vr.version="19.1.0",vr}var Hm;function sv(){if(Hm)return Bc.exports;Hm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Bc.exports=lv(),Bc.exports}var uv=sv();const wf=P.createContext({});function Xf(a){const i=P.useRef(null);return i.current===null&&(i.current=a()),i.current}const Cf=typeof window<"u",bg=Cf?P.useLayoutEffect:P.useEffect,xs=P.createContext(null);function Rf(a,i){a.indexOf(i)===-1&&a.push(i)}function Nf(a,i){const r=a.indexOf(i);r>-1&&a.splice(r,1)}const ra=(a,i,r)=>r>i?i:r<a?a:r;let kf=()=>{};const la={},vg=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function xg(a){return typeof a=="object"&&a!==null}const Tg=a=>/^0[^.\s]+$/u.test(a);function jf(a){let i;return()=>(i===void 0&&(i=a()),i)}const An=a=>a,cv=(a,i)=>r=>i(a(r)),_r=(...a)=>a.reduce(cv),Xr=(a,i,r)=>{const s=i-a;return s===0?1:(r-a)/s};class zf{constructor(){this.subscriptions=[]}add(i){return Rf(this.subscriptions,i),()=>Nf(this.subscriptions,i)}notify(i,r,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,r,s);else for(let h=0;h<c;h++){const f=this.subscriptions[h];f&&f(i,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Bn=a=>a*1e3,Un=a=>a/1e3;function Sg(a,i){return i?a*(1e3/i):0}const Ag=(a,i,r)=>(((1-3*r+3*i)*a+(3*r-6*i))*a+3*i)*a,fv=1e-7,hv=12;function dv(a,i,r,s,c){let h,f,g=0;do f=i+(r-i)/2,h=Ag(f,s,c)-a,h>0?r=f:i=f;while(Math.abs(h)>fv&&++g<hv);return f}function Vr(a,i,r,s){if(a===i&&r===s)return An;const c=h=>dv(h,0,1,a,r);return h=>h===0||h===1?h:Ag(c(h),i,s)}const Dg=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,Og=a=>i=>1-a(1-i),Eg=Vr(.33,1.53,.69,.99),_f=Og(Eg),Mg=Dg(_f),wg=a=>(a*=2)<1?.5*_f(a):.5*(2-Math.pow(2,-10*(a-1))),Vf=a=>1-Math.sin(Math.acos(a)),Xg=Og(Vf),Cg=Dg(Vf),mv=Vr(.42,0,1,1),pv=Vr(0,0,.58,1),Rg=Vr(.42,0,.58,1),gv=a=>Array.isArray(a)&&typeof a[0]!="number",Ng=a=>Array.isArray(a)&&typeof a[0]=="number",yv={linear:An,easeIn:mv,easeInOut:Rg,easeOut:pv,circIn:Vf,circInOut:Cg,circOut:Xg,backIn:_f,backInOut:Mg,backOut:Eg,anticipate:wg},bv=a=>typeof a=="string",qm=a=>{if(Ng(a)){kf(a.length===4);const[i,r,s,c]=a;return Vr(i,r,s,c)}else if(bv(a))return yv[a];return a},as=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function vv(a,i){let r=new Set,s=new Set,c=!1,h=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(d.schedule(y),a()),y(g)}const d={schedule:(y,v=!1,x=!1)=>{const w=x&&c?r:s;return v&&f.add(y),w.has(y)||w.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,c){h=!0;return}c=!0,[r,s]=[s,r],r.forEach(p),r.clear(),c=!1,h&&(h=!1,d.process(y))}};return d}const xv=40;function kg(a,i){let r=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=()=>r=!0,f=as.reduce((k,Z)=>(k[Z]=vv(h),k),{}),{setup:g,read:p,resolveKeyframes:d,preUpdate:y,update:v,preRender:x,render:E,postRender:w}=f,M=()=>{const k=la.useManualTiming?c.timestamp:performance.now();r=!1,la.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(k-c.timestamp,xv),1)),c.timestamp=k,c.isProcessing=!0,g.process(c),p.process(c),d.process(c),y.process(c),v.process(c),x.process(c),E.process(c),w.process(c),c.isProcessing=!1,r&&i&&(s=!1,a(M))},L=()=>{r=!0,s=!0,c.isProcessing||a(M)};return{schedule:as.reduce((k,Z)=>{const j=f[Z];return k[Z]=(K,J=!1,G=!1)=>(r||L(),j.schedule(K,J,G)),k},{}),cancel:k=>{for(let Z=0;Z<as.length;Z++)f[as[Z]].cancel(k)},state:c,steps:f}}const{schedule:ae,cancel:La,state:Ve,steps:qc}=kg(typeof requestAnimationFrame<"u"?requestAnimationFrame:An,!0);let us;function Tv(){us=void 0}const nn={now:()=>(us===void 0&&nn.set(Ve.isProcessing||la.useManualTiming?Ve.timestamp:performance.now()),us),set:a=>{us=a,queueMicrotask(Tv)}},jg=a=>i=>typeof i=="string"&&i.startsWith(a),Bf=jg("--"),Sv=jg("var(--"),Uf=a=>Sv(a)?Av.test(a.split("/*")[0].trim()):!1,Av=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,mo={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Cr={...mo,transform:a=>ra(0,1,a)},is={...mo,default:1},Ar=a=>Math.round(a*1e5)/1e5,Lf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Dv(a){return a==null}const Ov=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Hf=(a,i)=>r=>!!(typeof r=="string"&&Ov.test(r)&&r.startsWith(a)||i&&!Dv(r)&&Object.prototype.hasOwnProperty.call(r,i)),zg=(a,i,r)=>s=>{if(typeof s!="string")return s;const[c,h,f,g]=s.match(Lf);return{[a]:parseFloat(c),[i]:parseFloat(h),[r]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},Ev=a=>ra(0,255,a),Pc={...mo,transform:a=>Math.round(Ev(a))},fi={test:Hf("rgb","red"),parse:zg("red","green","blue"),transform:({red:a,green:i,blue:r,alpha:s=1})=>"rgba("+Pc.transform(a)+", "+Pc.transform(i)+", "+Pc.transform(r)+", "+Ar(Cr.transform(s))+")"};function Mv(a){let i="",r="",s="",c="";return a.length>5?(i=a.substring(1,3),r=a.substring(3,5),s=a.substring(5,7),c=a.substring(7,9)):(i=a.substring(1,2),r=a.substring(2,3),s=a.substring(3,4),c=a.substring(4,5),i+=i,r+=r,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const of={test:Hf("#"),parse:Mv,transform:fi.transform},Br=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),Ua=Br("deg"),Ln=Br("%"),vt=Br("px"),wv=Br("vh"),Xv=Br("vw"),Pm={...Ln,parse:a=>Ln.parse(a)/100,transform:a=>Ln.transform(a*100)},ro={test:Hf("hsl","hue"),parse:zg("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:r,alpha:s=1})=>"hsla("+Math.round(a)+", "+Ln.transform(Ar(i))+", "+Ln.transform(Ar(r))+", "+Ar(Cr.transform(s))+")"},Se={test:a=>fi.test(a)||of.test(a)||ro.test(a),parse:a=>fi.test(a)?fi.parse(a):ro.test(a)?ro.parse(a):of.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?fi.transform(a):ro.transform(a),getAnimatableNone:a=>{const i=Se.parse(a);return i.alpha=0,Se.transform(i)}},Cv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Rv(a){return isNaN(a)&&typeof a=="string"&&(a.match(Lf)?.length||0)+(a.match(Cv)?.length||0)>0}const _g="number",Vg="color",Nv="var",kv="var(",Ym="${}",jv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Rr(a){const i=a.toString(),r=[],s={color:[],number:[],var:[]},c=[];let h=0;const g=i.replace(jv,p=>(Se.test(p)?(s.color.push(h),c.push(Vg),r.push(Se.parse(p))):p.startsWith(kv)?(s.var.push(h),c.push(Nv),r.push(p)):(s.number.push(h),c.push(_g),r.push(parseFloat(p))),++h,Ym)).split(Ym);return{values:r,split:g,indexes:s,types:c}}function Bg(a){return Rr(a).values}function Ug(a){const{split:i,types:r}=Rr(a),s=i.length;return c=>{let h="";for(let f=0;f<s;f++)if(h+=i[f],c[f]!==void 0){const g=r[f];g===_g?h+=Ar(c[f]):g===Vg?h+=Se.transform(c[f]):h+=c[f]}return h}}const zv=a=>typeof a=="number"?0:Se.test(a)?Se.getAnimatableNone(a):a;function _v(a){const i=Bg(a);return Ug(a)(i.map(zv))}const Ha={test:Rv,parse:Bg,createTransformer:Ug,getAnimatableNone:_v};function Yc(a,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?a+(i-a)*6*r:r<1/2?i:r<2/3?a+(i-a)*(2/3-r)*6:a}function Vv({hue:a,saturation:i,lightness:r,alpha:s}){a/=360,i/=100,r/=100;let c=0,h=0,f=0;if(!i)c=h=f=r;else{const g=r<.5?r*(1+i):r+i-r*i,p=2*r-g;c=Yc(p,g,a+1/3),h=Yc(p,g,a),f=Yc(p,g,a-1/3)}return{red:Math.round(c*255),green:Math.round(h*255),blue:Math.round(f*255),alpha:s}}function ms(a,i){return r=>r>0?i:a}const re=(a,i,r)=>a+(i-a)*r,Gc=(a,i,r)=>{const s=a*a,c=r*(i*i-s)+s;return c<0?0:Math.sqrt(c)},Bv=[of,fi,ro],Uv=a=>Bv.find(i=>i.test(a));function Gm(a){const i=Uv(a);if(!i)return!1;let r=i.parse(a);return i===ro&&(r=Vv(r)),r}const Zm=(a,i)=>{const r=Gm(a),s=Gm(i);if(!r||!s)return ms(a,i);const c={...r};return h=>(c.red=Gc(r.red,s.red,h),c.green=Gc(r.green,s.green,h),c.blue=Gc(r.blue,s.blue,h),c.alpha=re(r.alpha,s.alpha,h),fi.transform(c))},rf=new Set(["none","hidden"]);function Lv(a,i){return rf.has(a)?r=>r<=0?a:i:r=>r>=1?i:a}function Hv(a,i){return r=>re(a,i,r)}function qf(a){return typeof a=="number"?Hv:typeof a=="string"?Uf(a)?ms:Se.test(a)?Zm:Yv:Array.isArray(a)?Lg:typeof a=="object"?Se.test(a)?Zm:qv:ms}function Lg(a,i){const r=[...a],s=r.length,c=a.map((h,f)=>qf(h)(h,i[f]));return h=>{for(let f=0;f<s;f++)r[f]=c[f](h);return r}}function qv(a,i){const r={...a,...i},s={};for(const c in r)a[c]!==void 0&&i[c]!==void 0&&(s[c]=qf(a[c])(a[c],i[c]));return c=>{for(const h in s)r[h]=s[h](c);return r}}function Pv(a,i){const r=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const h=i.types[c],f=a.indexes[h][s[h]],g=a.values[f]??0;r[c]=g,s[h]++}return r}const Yv=(a,i)=>{const r=Ha.createTransformer(i),s=Rr(a),c=Rr(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?rf.has(a)&&!c.values.length||rf.has(i)&&!s.values.length?Lv(a,i):_r(Lg(Pv(s,c),c.values),r):ms(a,i)};function Hg(a,i,r){return typeof a=="number"&&typeof i=="number"&&typeof r=="number"?re(a,i,r):qf(a)(a,i)}const Gv=a=>{const i=({timestamp:r})=>a(r);return{start:(r=!0)=>ae.update(i,r),stop:()=>La(i),now:()=>Ve.isProcessing?Ve.timestamp:nn.now()}},qg=(a,i,r=10)=>{let s="";const c=Math.max(Math.round(i/r),2);for(let h=0;h<c;h++)s+=Math.round(a(h/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},ps=2e4;function Pf(a){let i=0;const r=50;let s=a.next(i);for(;!s.done&&i<ps;)i+=r,s=a.next(i);return i>=ps?1/0:i}function Zv(a,i=100,r){const s=r({...a,keyframes:[0,i]}),c=Math.min(Pf(s),ps);return{type:"keyframes",ease:h=>s.next(c*h).value/i,duration:Un(c)}}const Qv=5;function Pg(a,i,r){const s=Math.max(i-Qv,0);return Sg(r-a(s),i-s)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Zc=.001;function Kv({duration:a=ue.duration,bounce:i=ue.bounce,velocity:r=ue.velocity,mass:s=ue.mass}){let c,h,f=1-i;f=ra(ue.minDamping,ue.maxDamping,f),a=ra(ue.minDuration,ue.maxDuration,Un(a)),f<1?(c=d=>{const y=d*f,v=y*a,x=y-r,E=lf(d,f),w=Math.exp(-v);return Zc-x/E*w},h=d=>{const v=d*f*a,x=v*r+r,E=Math.pow(f,2)*Math.pow(d,2)*a,w=Math.exp(-v),M=lf(Math.pow(d,2),f);return(-c(d)+Zc>0?-1:1)*((x-E)*w)/M}):(c=d=>{const y=Math.exp(-d*a),v=(d-r)*a+1;return-Zc+y*v},h=d=>{const y=Math.exp(-d*a),v=(r-d)*(a*a);return y*v});const g=5/a,p=Jv(c,h,g);if(a=Bn(a),isNaN(p))return{stiffness:ue.stiffness,damping:ue.damping,duration:a};{const d=Math.pow(p,2)*s;return{stiffness:d,damping:f*2*Math.sqrt(s*d),duration:a}}}const Fv=12;function Jv(a,i,r){let s=r;for(let c=1;c<Fv;c++)s=s-a(s)/i(s);return s}function lf(a,i){return a*Math.sqrt(1-i*i)}const Wv=["duration","bounce"],$v=["stiffness","damping","mass"];function Qm(a,i){return i.some(r=>a[r]!==void 0)}function Iv(a){let i={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...a};if(!Qm(a,$v)&&Qm(a,Wv))if(a.visualDuration){const r=a.visualDuration,s=2*Math.PI/(r*1.2),c=s*s,h=2*ra(.05,1,1-(a.bounce||0))*Math.sqrt(c);i={...i,mass:ue.mass,stiffness:c,damping:h}}else{const r=Kv(a);i={...i,...r,mass:ue.mass},i.isResolvedFromDuration=!0}return i}function gs(a=ue.visualDuration,i=ue.bounce){const r=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:s,restDelta:c}=r;const h=r.keyframes[0],f=r.keyframes[r.keyframes.length-1],g={done:!1,value:h},{stiffness:p,damping:d,mass:y,duration:v,velocity:x,isResolvedFromDuration:E}=Iv({...r,velocity:-Un(r.velocity||0)}),w=x||0,M=d/(2*Math.sqrt(p*y)),L=f-h,V=Un(Math.sqrt(p/y)),B=Math.abs(L)<5;s||(s=B?ue.restSpeed.granular:ue.restSpeed.default),c||(c=B?ue.restDelta.granular:ue.restDelta.default);let k;if(M<1){const j=lf(V,M);k=K=>{const J=Math.exp(-M*V*K);return f-J*((w+M*V*L)/j*Math.sin(j*K)+L*Math.cos(j*K))}}else if(M===1)k=j=>f-Math.exp(-V*j)*(L+(w+V*L)*j);else{const j=V*Math.sqrt(M*M-1);k=K=>{const J=Math.exp(-M*V*K),G=Math.min(j*K,300);return f-J*((w+M*V*L)*Math.sinh(G)+j*L*Math.cosh(G))/j}}const Z={calculatedDuration:E&&v||null,next:j=>{const K=k(j);if(E)g.done=j>=v;else{let J=j===0?w:0;M<1&&(J=j===0?Bn(w):Pg(k,j,K));const G=Math.abs(J)<=s,et=Math.abs(f-K)<=c;g.done=G&&et}return g.value=g.done?f:K,g},toString:()=>{const j=Math.min(Pf(Z),ps),K=qg(J=>Z.next(j*J).value,j,30);return j+"ms "+K},toTransition:()=>{}};return Z}gs.applyToOptions=a=>{const i=Zv(a,100,gs);return a.ease=i.ease,a.duration=Bn(i.duration),a.type="keyframes",a};function sf({keyframes:a,velocity:i=0,power:r=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:h=500,modifyTarget:f,min:g,max:p,restDelta:d=.5,restSpeed:y}){const v=a[0],x={done:!1,value:v},E=G=>g!==void 0&&G<g||p!==void 0&&G>p,w=G=>g===void 0?p:p===void 0||Math.abs(g-G)<Math.abs(p-G)?g:p;let M=r*i;const L=v+M,V=f===void 0?L:f(L);V!==L&&(M=V-v);const B=G=>-M*Math.exp(-G/s),k=G=>V+B(G),Z=G=>{const et=B(G),ct=k(G);x.done=Math.abs(et)<=d,x.value=x.done?V:ct};let j,K;const J=G=>{E(x.value)&&(j=G,K=gs({keyframes:[x.value,w(x.value)],velocity:Pg(k,G,x.value),damping:c,stiffness:h,restDelta:d,restSpeed:y}))};return J(0),{calculatedDuration:null,next:G=>{let et=!1;return!K&&j===void 0&&(et=!0,Z(G),J(G)),j!==void 0&&G>=j?K.next(G-j):(!et&&Z(G),x)}}}function t2(a,i,r){const s=[],c=r||la.mix||Hg,h=a.length-1;for(let f=0;f<h;f++){let g=c(a[f],a[f+1]);if(i){const p=Array.isArray(i)?i[f]||An:i;g=_r(p,g)}s.push(g)}return s}function e2(a,i,{clamp:r=!0,ease:s,mixer:c}={}){const h=a.length;if(kf(h===i.length),h===1)return()=>i[0];if(h===2&&i[0]===i[1])return()=>i[1];const f=a[0]===a[1];a[0]>a[h-1]&&(a=[...a].reverse(),i=[...i].reverse());const g=t2(i,s,c),p=g.length,d=y=>{if(f&&y<a[0])return i[0];let v=0;if(p>1)for(;v<a.length-2&&!(y<a[v+1]);v++);const x=Xr(a[v],a[v+1],y);return g[v](x)};return r?y=>d(ra(a[0],a[h-1],y)):d}function n2(a,i){const r=a[a.length-1];for(let s=1;s<=i;s++){const c=Xr(0,i,s);a.push(re(r,1,c))}}function a2(a){const i=[0];return n2(i,a.length-1),i}function i2(a,i){return a.map(r=>r*i)}function o2(a,i){return a.map(()=>i||Rg).splice(0,a.length-1)}function Dr({duration:a=300,keyframes:i,times:r,ease:s="easeInOut"}){const c=gv(s)?s.map(qm):qm(s),h={done:!1,value:i[0]},f=i2(r&&r.length===i.length?r:a2(i),a),g=e2(f,i,{ease:Array.isArray(c)?c:o2(i,c)});return{calculatedDuration:a,next:p=>(h.value=g(p),h.done=p>=a,h)}}const r2=a=>a!==null;function Yf(a,{repeat:i,repeatType:r="loop"},s,c=1){const h=a.filter(r2),g=c<0||i&&r!=="loop"&&i%2===1?0:h.length-1;return!g||s===void 0?h[g]:s}const l2={decay:sf,inertia:sf,tween:Dr,keyframes:Dr,spring:gs};function Yg(a){typeof a.type=="string"&&(a.type=l2[a.type])}class Gf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,r){return this.finished.then(i,r)}}const s2=a=>a/100;class Zf extends Gf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==nn.now()&&this.tick(nn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Yg(i);const{type:r=Dr,repeat:s=0,repeatDelay:c=0,repeatType:h,velocity:f=0}=i;let{keyframes:g}=i;const p=r||Dr;p!==Dr&&typeof g[0]!="number"&&(this.mixKeyframes=_r(s2,Hg(g[0],g[1])),g=[0,100]);const d=p({...i,keyframes:g});h==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...g].reverse(),velocity:-f})),d.calculatedDuration===null&&(d.calculatedDuration=Pf(d));const{calculatedDuration:y}=d;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=d}updateTime(i){const r=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(i,r=!1){const{generator:s,totalDuration:c,mixKeyframes:h,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:d=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:E,type:w,onUpdate:M,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),r?this.currentTime=i:this.updateTime(i);const V=this.currentTime-d*(this.playbackSpeed>=0?1:-1),B=this.playbackSpeed>=0?V<0:V>c;this.currentTime=Math.max(V,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let k=this.currentTime,Z=s;if(v){const G=Math.min(this.currentTime,c)/g;let et=Math.floor(G),ct=G%1;!ct&&G>=1&&(ct=1),ct===1&&et--,et=Math.min(et,v+1),!!(et%2)&&(x==="reverse"?(ct=1-ct,E&&(ct-=E/g)):x==="mirror"&&(Z=f)),k=ra(0,1,ct)*g}const j=B?{done:!1,value:y[0]}:Z.next(k);h&&(j.value=h(j.value));let{done:K}=j;!B&&p!==null&&(K=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const J=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return J&&w!==sf&&(j.value=Yf(y,this.options,L,this.speed)),M&&M(j.value),J&&this.finish(),j}then(i,r){return this.finished.then(i,r)}get duration(){return Un(this.calculatedDuration)}get time(){return Un(this.currentTime)}set time(i){i=Bn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(nn.now());const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=Un(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=Gv,startTime:r}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(nn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function u2(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const hi=a=>a*180/Math.PI,uf=a=>{const i=hi(Math.atan2(a[1],a[0]));return cf(i)},c2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:uf,rotateZ:uf,skewX:a=>hi(Math.atan(a[1])),skewY:a=>hi(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},cf=a=>(a=a%360,a<0&&(a+=360),a),Km=uf,Fm=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Jm=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),f2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Fm,scaleY:Jm,scale:a=>(Fm(a)+Jm(a))/2,rotateX:a=>cf(hi(Math.atan2(a[6],a[5]))),rotateY:a=>cf(hi(Math.atan2(-a[2],a[0]))),rotateZ:Km,rotate:Km,skewX:a=>hi(Math.atan(a[4])),skewY:a=>hi(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function ff(a){return a.includes("scale")?1:0}function hf(a,i){if(!a||a==="none")return ff(i);const r=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(r)s=f2,c=r;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=c2,c=g}if(!c)return ff(i);const h=s[i],f=c[1].split(",").map(d2);return typeof h=="function"?h(f):f[h]}const h2=(a,i)=>{const{transform:r="none"}=getComputedStyle(a);return hf(r,i)};function d2(a){return parseFloat(a.trim())}const po=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],go=new Set(po),Wm=a=>a===mo||a===vt,m2=new Set(["x","y","z"]),p2=po.filter(a=>!m2.has(a));function g2(a){const i=[];return p2.forEach(r=>{const s=a.getValue(r);s!==void 0&&(i.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),i}const di={width:({x:a},{paddingLeft:i="0",paddingRight:r="0"})=>a.max-a.min-parseFloat(i)-parseFloat(r),height:({y:a},{paddingTop:i="0",paddingBottom:r="0"})=>a.max-a.min-parseFloat(i)-parseFloat(r),top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>hf(i,"x"),y:(a,{transform:i})=>hf(i,"y")};di.translateX=di.x;di.translateY=di.y;const mi=new Set;let df=!1,mf=!1,pf=!1;function Gg(){if(mf){const a=Array.from(mi).filter(s=>s.needsMeasurement),i=new Set(a.map(s=>s.element)),r=new Map;i.forEach(s=>{const c=g2(s);c.length&&(r.set(s,c),s.render())}),a.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=r.get(s);c&&c.forEach(([h,f])=>{s.getValue(h)?.set(f)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}mf=!1,df=!1,mi.forEach(a=>a.complete(pf)),mi.clear()}function Zg(){mi.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(mf=!0)})}function y2(){pf=!0,Zg(),Gg(),pf=!1}class Qf{constructor(i,r,s,c,h,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=s,this.motionValue=c,this.element=h,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(mi.add(this),df||(df=!0,ae.read(Zg),ae.resolveKeyframes(Gg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:s,motionValue:c}=this;if(i[0]===null){const h=c?.get(),f=i[i.length-1];if(h!==void 0)i[0]=h;else if(s&&r){const g=s.readValue(r,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),c&&h===void 0&&c.set(i[0])}u2(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),mi.delete(this)}cancel(){this.state==="scheduled"&&(mi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const b2=a=>a.startsWith("--");function v2(a,i,r){b2(i)?a.style.setProperty(i,r):a.style[i]=r}const x2=jf(()=>window.ScrollTimeline!==void 0),T2={};function S2(a,i){const r=jf(a);return()=>T2[i]??r()}const Qg=S2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Tr=([a,i,r,s])=>`cubic-bezier(${a}, ${i}, ${r}, ${s})`,$m={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Tr([0,.65,.55,1]),circOut:Tr([.55,0,1,.45]),backIn:Tr([.31,.01,.66,-.59]),backOut:Tr([.33,1.53,.69,.99])};function Kg(a,i){if(a)return typeof a=="function"?Qg()?qg(a,i):"ease-out":Ng(a)?Tr(a):Array.isArray(a)?a.map(r=>Kg(r,i)||$m.easeOut):$m[a]}function A2(a,i,r,{delay:s=0,duration:c=300,repeat:h=0,repeatType:f="loop",ease:g="easeOut",times:p}={},d=void 0){const y={[i]:r};p&&(y.offset=p);const v=Kg(g,c);Array.isArray(v)&&(y.easing=v);const x={delay:s,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:h+1,direction:f==="reverse"?"alternate":"normal"};return d&&(x.pseudoElement=d),a.animate(y,x)}function Fg(a){return typeof a=="function"&&"applyToOptions"in a}function D2({type:a,...i}){return Fg(a)&&Qg()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class O2 extends Gf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:r,name:s,keyframes:c,pseudoElement:h,allowFlatten:f=!1,finalKeyframe:g,onComplete:p}=i;this.isPseudoElement=!!h,this.allowFlatten=f,this.options=i,kf(typeof i.type!="string");const d=D2(i);this.animation=A2(r,s,c,d,h),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const y=Yf(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):v2(r,s,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Un(Number(i))}get time(){return Un(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=Bn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&x2()?(this.animation.timeline=i,An):r(this)}}const Jg={anticipate:wg,backInOut:Mg,circInOut:Cg};function E2(a){return a in Jg}function M2(a){typeof a.ease=="string"&&E2(a.ease)&&(a.ease=Jg[a.ease])}const Im=10;class w2 extends O2{constructor(i){M2(i),Yg(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:r,onUpdate:s,onComplete:c,element:h,...f}=this.options;if(!r)return;if(i!==void 0){r.set(i);return}const g=new Zf({...f,autoplay:!1}),p=Bn(this.finishedTime??this.time);r.setWithVelocity(g.sample(p-Im).value,g.sample(p).value,Im),g.stop()}}const tp=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Ha.test(a)||a==="0")&&!a.startsWith("url("));function X2(a){const i=a[0];if(a.length===1)return!0;for(let r=0;r<a.length;r++)if(a[r]!==i)return!0}function C2(a,i,r,s){const c=a[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const h=a[a.length-1],f=tp(c,i),g=tp(h,i);return!f||!g?!1:X2(a)||(r==="spring"||Fg(r))&&s}const R2=new Set(["opacity","clipPath","filter","transform"]),N2=jf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function k2(a){const{motionValue:i,name:r,repeatDelay:s,repeatType:c,damping:h,type:f}=a;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:d}=i.owner.getProps();return N2()&&r&&R2.has(r)&&(r!=="transform"||!d)&&!p&&!s&&c!=="mirror"&&h!==0&&f!=="inertia"}const j2=40;class z2 extends Gf{constructor({autoplay:i=!0,delay:r=0,type:s="keyframes",repeat:c=0,repeatDelay:h=0,repeatType:f="loop",keyframes:g,name:p,motionValue:d,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=nn.now();const x={autoplay:i,delay:r,type:s,repeat:c,repeatDelay:h,repeatType:f,name:p,motionValue:d,element:y,...v},E=y?.KeyframeResolver||Qf;this.keyframeResolver=new E(g,(w,M,L)=>this.onKeyframesResolved(w,M,x,!L),p,d,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,r,s,c){this.keyframeResolver=void 0;const{name:h,type:f,velocity:g,delay:p,isHandoff:d,onUpdate:y}=s;this.resolvedAt=nn.now(),C2(i,h,f,g)||((la.instantAnimations||!p)&&y?.(Yf(i,s,r)),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>j2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...s,keyframes:i},E=!d&&k2(x)?new w2({...x,element:x.motionValue.owner.current}):new Zf(x);E.finished.then(()=>this.notifyFinished()).catch(An),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(i,r){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),y2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const _2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function V2(a){const i=_2.exec(a);if(!i)return[,];const[,r,s,c]=i;return[`--${r??s}`,c]}function Wg(a,i,r=1){const[s,c]=V2(a);if(!s)return;const h=window.getComputedStyle(i).getPropertyValue(s);if(h){const f=h.trim();return vg(f)?parseFloat(f):f}return Uf(c)?Wg(c,i,r+1):c}function Kf(a,i){return a?.[i]??a?.default??a}const $g=new Set(["width","height","top","left","right","bottom",...po]),B2={test:a=>a==="auto",parse:a=>a},Ig=a=>i=>i.test(a),t1=[mo,vt,Ln,Ua,Xv,wv,B2],ep=a=>t1.find(Ig(a));function U2(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Tg(a):!0}const L2=new Set(["brightness","contrast","saturate","opacity"]);function H2(a){const[i,r]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[s]=r.match(Lf)||[];if(!s)return a;const c=r.replace(s,"");let h=L2.has(i)?1:0;return s!==r&&(h*=100),i+"("+h+c+")"}const q2=/\b([a-z-]*)\(.*?\)/gu,gf={...Ha,getAnimatableNone:a=>{const i=a.match(q2);return i?i.map(H2).join(" "):a}},np={...mo,transform:Math.round},P2={rotate:Ua,rotateX:Ua,rotateY:Ua,rotateZ:Ua,scale:is,scaleX:is,scaleY:is,scaleZ:is,skew:Ua,skewX:Ua,skewY:Ua,distance:vt,translateX:vt,translateY:vt,translateZ:vt,x:vt,y:vt,z:vt,perspective:vt,transformPerspective:vt,opacity:Cr,originX:Pm,originY:Pm,originZ:vt},Ff={borderWidth:vt,borderTopWidth:vt,borderRightWidth:vt,borderBottomWidth:vt,borderLeftWidth:vt,borderRadius:vt,radius:vt,borderTopLeftRadius:vt,borderTopRightRadius:vt,borderBottomRightRadius:vt,borderBottomLeftRadius:vt,width:vt,maxWidth:vt,height:vt,maxHeight:vt,top:vt,right:vt,bottom:vt,left:vt,padding:vt,paddingTop:vt,paddingRight:vt,paddingBottom:vt,paddingLeft:vt,margin:vt,marginTop:vt,marginRight:vt,marginBottom:vt,marginLeft:vt,backgroundPositionX:vt,backgroundPositionY:vt,...P2,zIndex:np,fillOpacity:Cr,strokeOpacity:Cr,numOctaves:np},Y2={...Ff,color:Se,backgroundColor:Se,outlineColor:Se,fill:Se,stroke:Se,borderColor:Se,borderTopColor:Se,borderRightColor:Se,borderBottomColor:Se,borderLeftColor:Se,filter:gf,WebkitFilter:gf},e1=a=>Y2[a];function n1(a,i){let r=e1(a);return r!==gf&&(r=Ha),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const G2=new Set(["auto","none","0"]);function Z2(a,i,r){let s=0,c;for(;s<a.length&&!c;){const h=a[s];typeof h=="string"&&!G2.has(h)&&Rr(h).values.length&&(c=a[s]),s++}if(c&&r)for(const h of i)a[h]=n1(r,c)}class Q2 extends Qf{constructor(i,r,s,c,h){super(i,r,s,c,h,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let d=i[p];if(typeof d=="string"&&(d=d.trim(),Uf(d))){const y=Wg(d,r.current);y!==void 0&&(i[p]=y),p===i.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!$g.has(s)||i.length!==2)return;const[c,h]=i,f=ep(c),g=ep(h);if(f!==g)if(Wm(f)&&Wm(g))for(let p=0;p<i.length;p++){const d=i[p];typeof d=="string"&&(i[p]=parseFloat(d))}else di[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||U2(i[c]))&&s.push(c);s.length&&Z2(i,s,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=di[s](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){const{element:i,name:r,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(r);c&&c.jump(this.measuredOrigin,!1);const h=s.length-1,f=s[h];s[h]=di[r](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,p])=>{i.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function K2(a,i,r){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const c=r?.[a]??s.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a)}const a1=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function i1(a){return xg(a)&&"offsetHeight"in a}const ap=30,F2=a=>!isNaN(parseFloat(a));class J2{constructor(i,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const h=nn.now();if(this.updatedAt!==h&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty();c&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=nn.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=F2(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new zf);const s=this.events[i].add(r);return i==="change"?()=>{s(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i,r=!0){!r||!this.passiveEffect?this.updateAndNotify(i,r):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=nn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>ap)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,ap);return Sg(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fo(a,i){return new J2(a,i)}const{schedule:Jf}=kg(queueMicrotask,!1),Xn={x:!1,y:!1};function o1(){return Xn.x||Xn.y}function W2(a){return a==="x"||a==="y"?Xn[a]?null:(Xn[a]=!0,()=>{Xn[a]=!1}):Xn.x||Xn.y?null:(Xn.x=Xn.y=!0,()=>{Xn.x=Xn.y=!1})}function r1(a,i){const r=K2(a),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[r,c,()=>s.abort()]}function ip(a){return!(a.pointerType==="touch"||o1())}function $2(a,i,r={}){const[s,c,h]=r1(a,r),f=g=>{if(!ip(g))return;const{target:p}=g,d=i(p,g);if(typeof d!="function"||!p)return;const y=v=>{ip(v)&&(d(v),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,c)};return s.forEach(g=>{g.addEventListener("pointerenter",f,c)}),h}const l1=(a,i)=>i?a===i?!0:l1(a,i.parentElement):!1,Wf=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,I2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function tx(a){return I2.has(a.tagName)||a.tabIndex!==-1}const cs=new WeakSet;function op(a){return i=>{i.key==="Enter"&&a(i)}}function Qc(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const ex=(a,i)=>{const r=a.currentTarget;if(!r)return;const s=op(()=>{if(cs.has(r))return;Qc(r,"down");const c=op(()=>{Qc(r,"up")}),h=()=>Qc(r,"cancel");r.addEventListener("keyup",c,i),r.addEventListener("blur",h,i)});r.addEventListener("keydown",s,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),i)};function rp(a){return Wf(a)&&!o1()}function nx(a,i,r={}){const[s,c,h]=r1(a,r),f=g=>{const p=g.currentTarget;if(!rp(g))return;cs.add(p);const d=i(p,g),y=(E,w)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),cs.has(p)&&cs.delete(p),rp(E)&&typeof d=="function"&&d(E,{success:w})},v=E=>{y(E,p===window||p===document||r.useGlobalTarget||l1(p,E.target))},x=E=>{y(E,!1)};window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",x,c)};return s.forEach(g=>{(r.useGlobalTarget?window:g).addEventListener("pointerdown",f,c),i1(g)&&(g.addEventListener("focus",d=>ex(d,c)),!tx(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),h}function s1(a){return xg(a)&&"ownerSVGElement"in a}function ax(a){return s1(a)&&a.tagName==="svg"}const Pe=a=>!!(a&&a.getVelocity),ix=[...t1,Se,Ha],ox=a=>ix.find(Ig(a)),$f=P.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});class rx extends P.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent){const s=r.offsetParent,c=i1(s)&&s.offsetWidth||0,h=this.props.sizeRef.current;h.height=r.offsetHeight||0,h.width=r.offsetWidth||0,h.top=r.offsetTop,h.left=r.offsetLeft,h.right=c-h.width-h.left}return null}componentDidUpdate(){}render(){return this.props.children}}function lx({children:a,isPresent:i,anchorX:r,root:s}){const c=P.useId(),h=P.useRef(null),f=P.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:g}=P.useContext($f);return P.useInsertionEffect(()=>{const{width:p,height:d,top:y,left:v,right:x}=f.current;if(i||!h.current||!p||!d)return;const E=r==="left"?`left: ${v}`:`right: ${x}`;h.current.dataset.motionPopId=c;const w=document.createElement("style");g&&(w.nonce=g);const M=s??document.head;return M.appendChild(w),w.sheet&&w.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${d}px !important;
            ${E}px !important;
            top: ${y}px !important;
          }
        `),()=>{M.removeChild(w),M.contains(w)&&M.removeChild(w)}},[i]),T.jsx(rx,{isPresent:i,childRef:h,sizeRef:f,children:P.cloneElement(a,{ref:h})})}const sx=({children:a,initial:i,isPresent:r,onExitComplete:s,custom:c,presenceAffectsLayout:h,mode:f,anchorX:g,root:p})=>{const d=Xf(ux),y=P.useId();let v=!0,x=P.useMemo(()=>(v=!1,{id:y,initial:i,isPresent:r,custom:c,onExitComplete:E=>{d.set(E,!0);for(const w of d.values())if(!w)return;s&&s()},register:E=>(d.set(E,!1),()=>d.delete(E))}),[r,d,s]);return h&&v&&(x={...x}),P.useMemo(()=>{d.forEach((E,w)=>d.set(w,!1))},[r]),P.useEffect(()=>{!r&&!d.size&&s&&s()},[r]),f==="popLayout"&&(a=T.jsx(lx,{isPresent:r,anchorX:g,root:p,children:a})),T.jsx(xs.Provider,{value:x,children:a})};function ux(){return new Map}function u1(a=!0){const i=P.useContext(xs);if(i===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:c}=i,h=P.useId();P.useEffect(()=>{if(a)return c(h)},[a]);const f=P.useCallback(()=>a&&s&&s(h),[h,s,a]);return!r&&s?[!1,f]:[!0]}const os=a=>a.key||"";function lp(a){const i=[];return P.Children.forEach(a,r=>{P.isValidElement(r)&&i.push(r)}),i}const fs=({children:a,custom:i,initial:r=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:h="sync",propagate:f=!1,anchorX:g="left",root:p})=>{const[d,y]=u1(f),v=P.useMemo(()=>lp(a),[a]),x=f&&!d?[]:v.map(os),E=P.useRef(!0),w=P.useRef(v),M=Xf(()=>new Map),[L,V]=P.useState(v),[B,k]=P.useState(v);bg(()=>{E.current=!1,w.current=v;for(let K=0;K<B.length;K++){const J=os(B[K]);x.includes(J)?M.delete(J):M.get(J)!==!0&&M.set(J,!1)}},[B,x.length,x.join("-")]);const Z=[];if(v!==L){let K=[...v];for(let J=0;J<B.length;J++){const G=B[J],et=os(G);x.includes(et)||(K.splice(J,0,G),Z.push(G))}return h==="wait"&&Z.length&&(K=Z),k(lp(K)),V(v),null}const{forceRender:j}=P.useContext(wf);return T.jsx(T.Fragment,{children:B.map(K=>{const J=os(K),G=f&&!d?!1:v===B||x.includes(J),et=()=>{if(M.has(J))M.set(J,!0);else return;let ct=!0;M.forEach(wt=>{wt||(ct=!1)}),ct&&(j?.(),k(w.current),f&&y?.(),s&&s())};return T.jsx(sx,{isPresent:G,initial:!E.current||r?void 0:!1,custom:i,presenceAffectsLayout:c,mode:h,root:p,onExitComplete:G?void 0:et,anchorX:g,children:K},J)})})},c1=P.createContext({strict:!1}),sp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ho={};for(const a in sp)ho[a]={isEnabled:i=>sp[a].some(r=>!!i[r])};function cx(a){for(const i in a)ho[i]={...ho[i],...a[i]}}const fx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ys(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||fx.has(a)}let f1=a=>!ys(a);function hx(a){typeof a=="function"&&(f1=i=>i.startsWith("on")?!ys(i):a(i))}try{hx(require("@emotion/is-prop-valid").default)}catch{}function dx(a,i,r){const s={};for(const c in a)c==="values"&&typeof a.values=="object"||(f1(c)||r===!0&&ys(c)||!i&&!ys(c)||a.draggable&&c.startsWith("onDrag"))&&(s[c]=a[c]);return s}const Ts=P.createContext({});function Ss(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Nr(a){return typeof a=="string"||Array.isArray(a)}const If=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],th=["initial",...If];function As(a){return Ss(a.animate)||th.some(i=>Nr(a[i]))}function h1(a){return!!(As(a)||a.variants)}function mx(a,i){if(As(a)){const{initial:r,animate:s}=a;return{initial:r===!1||Nr(r)?r:void 0,animate:Nr(s)?s:void 0}}return a.inherit!==!1?i:{}}function px(a){const{initial:i,animate:r}=mx(a,P.useContext(Ts));return P.useMemo(()=>({initial:i,animate:r}),[up(i),up(r)])}function up(a){return Array.isArray(a)?a.join(" "):a}const kr={};function gx(a){for(const i in a)kr[i]=a[i],Bf(i)&&(kr[i].isCSSVariable=!0)}function d1(a,{layout:i,layoutId:r}){return go.has(a)||a.startsWith("origin")||(i||r!==void 0)&&(!!kr[a]||a==="opacity")}const yx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bx=po.length;function vx(a,i,r){let s="",c=!0;for(let h=0;h<bx;h++){const f=po[h],g=a[f];if(g===void 0)continue;let p=!0;if(typeof g=="number"?p=g===(f.startsWith("scale")?1:0):p=parseFloat(g)===0,!p||r){const d=a1(g,Ff[f]);if(!p){c=!1;const y=yx[f]||f;s+=`${y}(${d}) `}r&&(i[f]=d)}}return s=s.trim(),r?s=r(i,c?"":s):c&&(s="none"),s}function eh(a,i,r){const{style:s,vars:c,transformOrigin:h}=a;let f=!1,g=!1;for(const p in i){const d=i[p];if(go.has(p)){f=!0;continue}else if(Bf(p)){c[p]=d;continue}else{const y=a1(d,Ff[p]);p.startsWith("origin")?(g=!0,h[p]=y):s[p]=y}}if(i.transform||(f||r?s.transform=vx(i,a.transform,r):s.transform&&(s.transform="none")),g){const{originX:p="50%",originY:d="50%",originZ:y=0}=h;s.transformOrigin=`${p} ${d} ${y}`}}const nh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function m1(a,i,r){for(const s in i)!Pe(i[s])&&!d1(s,r)&&(a[s]=i[s])}function xx({transformTemplate:a},i){return P.useMemo(()=>{const r=nh();return eh(r,i,a),Object.assign({},r.vars,r.style)},[i])}function Tx(a,i){const r=a.style||{},s={};return m1(s,r,a),Object.assign(s,xx(a,i)),s}function Sx(a,i){const r={},s=Tx(a,i);return a.drag&&a.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(r.tabIndex=0),r.style=s,r}const Ax={offset:"stroke-dashoffset",array:"stroke-dasharray"},Dx={offset:"strokeDashoffset",array:"strokeDasharray"};function Ox(a,i,r=1,s=0,c=!0){a.pathLength=1;const h=c?Ax:Dx;a[h.offset]=vt.transform(-s);const f=vt.transform(i),g=vt.transform(r);a[h.array]=`${f} ${g}`}function p1(a,{attrX:i,attrY:r,attrScale:s,pathLength:c,pathSpacing:h=1,pathOffset:f=0,...g},p,d,y){if(eh(a,g,d),p){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:v,style:x}=a;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=y?.transformBox??"fill-box",delete v.transformBox),i!==void 0&&(v.x=i),r!==void 0&&(v.y=r),s!==void 0&&(v.scale=s),c!==void 0&&Ox(v,c,h,f,!1)}const g1=()=>({...nh(),attrs:{}}),y1=a=>typeof a=="string"&&a.toLowerCase()==="svg";function Ex(a,i,r,s){const c=P.useMemo(()=>{const h=g1();return p1(h,i,y1(s),a.transformTemplate,a.style),{...h.attrs,style:{...h.style}}},[i]);if(a.style){const h={};m1(h,a.style,a),c.style={...h,...c.style}}return c}const Mx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ah(a){return typeof a!="string"||a.includes("-")?!1:!!(Mx.indexOf(a)>-1||/[A-Z]/u.test(a))}function wx(a,i,r,{latestValues:s},c,h=!1){const g=(ah(a)?Ex:Sx)(i,s,c,a),p=dx(i,typeof a=="string",h),d=a!==P.Fragment?{...p,...g,ref:r}:{},{children:y}=i,v=P.useMemo(()=>Pe(y)?y.get():y,[y]);return P.createElement(a,{...d,children:v})}function cp(a){const i=[{},{}];return a?.values.forEach((r,s)=>{i[0][s]=r.get(),i[1][s]=r.getVelocity()}),i}function ih(a,i,r,s){if(typeof i=="function"){const[c,h]=cp(s);i=i(r!==void 0?r:a.custom,c,h)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[c,h]=cp(s);i=i(r!==void 0?r:a.custom,c,h)}return i}function hs(a){return Pe(a)?a.get():a}function Xx({scrapeMotionValuesFromProps:a,createRenderState:i},r,s,c){return{latestValues:Cx(r,s,c,a),renderState:i()}}function Cx(a,i,r,s){const c={},h=s(a,{});for(const x in h)c[x]=hs(h[x]);let{initial:f,animate:g}=a;const p=As(a),d=h1(a);i&&d&&!p&&a.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=r?r.initial===!1:!1;y=y||f===!1;const v=y?g:f;if(v&&typeof v!="boolean"&&!Ss(v)){const x=Array.isArray(v)?v:[v];for(let E=0;E<x.length;E++){const w=ih(a,x[E]);if(w){const{transitionEnd:M,transition:L,...V}=w;for(const B in V){let k=V[B];if(Array.isArray(k)){const Z=y?k.length-1:0;k=k[Z]}k!==null&&(c[B]=k)}for(const B in M)c[B]=M[B]}}}return c}const b1=a=>(i,r)=>{const s=P.useContext(Ts),c=P.useContext(xs),h=()=>Xx(a,i,s,c);return r?h():Xf(h)};function oh(a,i,r){const{style:s}=a,c={};for(const h in s)(Pe(s[h])||i.style&&Pe(i.style[h])||d1(h,a)||r?.getValue(h)?.liveStyle!==void 0)&&(c[h]=s[h]);return c}const Rx=b1({scrapeMotionValuesFromProps:oh,createRenderState:nh});function v1(a,i,r){const s=oh(a,i,r);for(const c in a)if(Pe(a[c])||Pe(i[c])){const h=po.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[h]=a[c]}return s}const Nx=b1({scrapeMotionValuesFromProps:v1,createRenderState:g1}),kx=Symbol.for("motionComponentSymbol");function lo(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function jx(a,i,r){return P.useCallback(s=>{s&&a.onMount&&a.onMount(s),i&&(s?i.mount(s):i.unmount()),r&&(typeof r=="function"?r(s):lo(r)&&(r.current=s))},[i])}const rh=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),zx="framerAppearId",x1="data-"+rh(zx),T1=P.createContext({});function _x(a,i,r,s,c){const{visualElement:h}=P.useContext(Ts),f=P.useContext(c1),g=P.useContext(xs),p=P.useContext($f).reducedMotion,d=P.useRef(null);s=s||f.renderer,!d.current&&s&&(d.current=s(a,{visualState:i,parent:h,props:r,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:p}));const y=d.current,v=P.useContext(T1);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&Vx(d.current,r,c,v);const x=P.useRef(!1);P.useInsertionEffect(()=>{y&&x.current&&y.update(r,g)});const E=r[x1],w=P.useRef(!!E&&!window.MotionHandoffIsComplete?.(E)&&window.MotionHasOptimisedAnimation?.(E));return bg(()=>{y&&(x.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),w.current&&y.animationState&&y.animationState.animateChanges())}),P.useEffect(()=>{y&&(!w.current&&y.animationState&&y.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(E)}),w.current=!1))}),y}function Vx(a,i,r,s){const{layoutId:c,layout:h,drag:f,dragConstraints:g,layoutScroll:p,layoutRoot:d,layoutCrossfade:y}=i;a.projection=new r(a.latestValues,i["data-framer-portal-id"]?void 0:S1(a.parent)),a.projection.setOptions({layoutId:c,layout:h,alwaysMeasureLayout:!!f||g&&lo(g),visualElement:a,animationType:typeof h=="string"?h:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:d})}function S1(a){if(a)return a.options.allowProjection!==!1?a.projection:S1(a.parent)}function Kc(a,{forwardMotionProps:i=!1}={},r,s){r&&cx(r);const c=ah(a)?Nx:Rx;function h(g,p){let d;const y={...P.useContext($f),...g,layoutId:Bx(g)},{isStatic:v}=y,x=px(g),E=c(g,v);if(!v&&Cf){Ux();const w=Lx(y);d=w.MeasureLayout,x.visualElement=_x(a,E,y,s,w.ProjectionNode)}return T.jsxs(Ts.Provider,{value:x,children:[d&&x.visualElement?T.jsx(d,{visualElement:x.visualElement,...y}):null,wx(a,g,jx(E,x.visualElement,p),E,v,i)]})}h.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=P.forwardRef(h);return f[kx]=a,f}function Bx({layoutId:a}){const i=P.useContext(wf).id;return i&&a!==void 0?i+"-"+a:a}function Ux(a,i){P.useContext(c1).strict}function Lx(a){const{drag:i,layout:r}=ho;if(!i&&!r)return{};const s={...i,...r};return{MeasureLayout:i?.isEnabled(a)||r?.isEnabled(a)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function Hx(a,i){if(typeof Proxy>"u")return Kc;const r=new Map,s=(h,f)=>Kc(h,f,a,i),c=(h,f)=>s(h,f);return new Proxy(c,{get:(h,f)=>f==="create"?s:(r.has(f)||r.set(f,Kc(f,void 0,a,i)),r.get(f))})}function A1({top:a,left:i,right:r,bottom:s}){return{x:{min:i,max:r},y:{min:a,max:s}}}function qx({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function Px(a,i){if(!i)return a;const r=i({x:a.left,y:a.top}),s=i({x:a.right,y:a.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function Fc(a){return a===void 0||a===1}function yf({scale:a,scaleX:i,scaleY:r}){return!Fc(a)||!Fc(i)||!Fc(r)}function ci(a){return yf(a)||D1(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function D1(a){return fp(a.x)||fp(a.y)}function fp(a){return a&&a!=="0%"}function bs(a,i,r){const s=a-r,c=i*s;return r+c}function hp(a,i,r,s,c){return c!==void 0&&(a=bs(a,c,s)),bs(a,r,s)+i}function bf(a,i=0,r=1,s,c){a.min=hp(a.min,i,r,s,c),a.max=hp(a.max,i,r,s,c)}function O1(a,{x:i,y:r}){bf(a.x,i.translate,i.scale,i.originPoint),bf(a.y,r.translate,r.scale,r.originPoint)}const dp=.999999999999,mp=1.0000000000001;function Yx(a,i,r,s=!1){const c=r.length;if(!c)return;i.x=i.y=1;let h,f;for(let g=0;g<c;g++){h=r[g],f=h.projectionDelta;const{visualElement:p}=h.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&h.options.layoutScroll&&h.scroll&&h!==h.root&&uo(a,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,O1(a,f)),s&&ci(h.latestValues)&&uo(a,h.latestValues))}i.x<mp&&i.x>dp&&(i.x=1),i.y<mp&&i.y>dp&&(i.y=1)}function so(a,i){a.min=a.min+i,a.max=a.max+i}function pp(a,i,r,s,c=.5){const h=re(a.min,a.max,c);bf(a,i,r,h,s)}function uo(a,i){pp(a.x,i.x,i.scaleX,i.scale,i.originX),pp(a.y,i.y,i.scaleY,i.scale,i.originY)}function E1(a,i){return A1(Px(a.getBoundingClientRect(),i))}function Gx(a,i,r){const s=E1(a,r),{scroll:c}=i;return c&&(so(s.x,c.offset.x),so(s.y,c.offset.y)),s}const gp=()=>({translate:0,scale:1,origin:0,originPoint:0}),co=()=>({x:gp(),y:gp()}),yp=()=>({min:0,max:0}),me=()=>({x:yp(),y:yp()}),vf={current:null},M1={current:!1};function Zx(){if(M1.current=!0,!!Cf)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>vf.current=a.matches;a.addEventListener("change",i),i()}else vf.current=!1}const Qx=new WeakMap;function Kx(a,i,r){for(const s in i){const c=i[s],h=r[s];if(Pe(c))a.addValue(s,c);else if(Pe(h))a.addValue(s,fo(c,{owner:a}));else if(h!==c)if(a.hasValue(s)){const f=a.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=a.getStaticValue(s);a.addValue(s,fo(f!==void 0?f:c,{owner:a}))}}for(const s in r)i[s]===void 0&&a.removeValue(s);return i}const bp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Fx{scrapeMotionValuesFromProps(i,r,s){return{}}constructor({parent:i,props:r,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:h,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Qf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=nn.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,ae.render(this.render,!1,!0))};const{latestValues:p,renderState:d}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=r.initial?{...p}:{},this.renderState=d,this.parent=i,this.props=r,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!h,this.isControllingVariants=As(r),this.isVariantNode=h1(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(r,{},this);for(const x in v){const E=v[x];p[x]!==void 0&&Pe(E)&&E.set(p[x],!1)}}mount(i){this.current=i,Qx.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),M1.current||Zx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:vf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),La(this.notifyUpdate),La(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(i,r){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=go.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=r.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&ae.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),h=r.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{c(),h(),f&&f(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ho){const r=ho[i];if(!r)continue;const{isEnabled:s,Feature:c}=r;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const h=this.features[i];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):me()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<bp.length;s++){const c=bp[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const h="on"+c,f=i[h];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=Kx(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const s=this.values.get(i);r!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&r!==void 0&&(s=fo(r===null?void 0:r,{owner:this}),this.addValue(i,s)),s}readValue(i,r){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(vg(s)||Tg(s))?s=parseFloat(s):!ox(s)&&Ha.test(r)&&(s=n1(i,r)),this.setBaseTarget(i,Pe(s)?s.get():s)),Pe(s)?s.get():s}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const h=ih(this.props,r,this.presenceContext?.custom);h&&(s=h[i])}if(r&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!Pe(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new zf),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}scheduleRenderMicrotask(){Jf.render(this.render)}}class w1 extends Fx{constructor(){super(...arguments),this.KeyframeResolver=Q2}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){return i.style?i.style[r]:void 0}removeValueFromRenderState(i,{vars:r,style:s}){delete r[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Pe(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function X1(a,{style:i,vars:r},s,c){const h=a.style;let f;for(f in i)h[f]=i[f];c?.applyProjectionStyles(h,s);for(f in r)h.setProperty(f,r[f])}function Jx(a){return window.getComputedStyle(a)}class Wx extends w1{constructor(){super(...arguments),this.type="html",this.renderInstance=X1}readValueFromInstance(i,r){if(go.has(r))return this.projection?.isProjecting?ff(r):h2(i,r);{const s=Jx(i),c=(Bf(r)?s.getPropertyValue(r):s[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:r}){return E1(i,r)}build(i,r,s){eh(i,r,s.transformTemplate)}scrapeMotionValuesFromProps(i,r,s){return oh(i,r,s)}}const C1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $x(a,i,r,s){X1(a,i,void 0,s);for(const c in i.attrs)a.setAttribute(C1.has(c)?c:rh(c),i.attrs[c])}class Ix extends w1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=me}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(go.has(r)){const s=e1(r);return s&&s.default||0}return r=C1.has(r)?r:rh(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,s){return v1(i,r,s)}build(i,r,s){p1(i,r,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,r,s,c){$x(i,r,s,c)}mount(i){this.isSVGTag=y1(i.tagName),super.mount(i)}}const t5=(a,i)=>ah(a)?new Ix(i):new Wx(i,{allowProjection:a!==P.Fragment});function jr(a,i,r){const s=a.getProps();return ih(s,i,r!==void 0?r:s.custom,a)}const xf=a=>Array.isArray(a);function e5(a,i,r){a.hasValue(i)?a.getValue(i).set(r):a.addValue(i,fo(r))}function n5(a){return xf(a)?a[a.length-1]||0:a}function a5(a,i){const r=jr(a,i);let{transitionEnd:s={},transition:c={},...h}=r||{};h={...h,...s};for(const f in h){const g=n5(h[f]);e5(a,f,g)}}function i5(a){return!!(Pe(a)&&a.add)}function Tf(a,i){const r=a.getValue("willChange");if(i5(r))return r.add(i);if(!r&&la.WillChange){const s=new la.WillChange("auto");a.addValue("willChange",s),s.add(i)}}function R1(a){return a.props[x1]}const o5=a=>a!==null;function r5(a,{repeat:i,repeatType:r="loop"},s){const c=a.filter(o5),h=i&&r!=="loop"&&i%2===1?0:c.length-1;return c[h]}const l5={type:"spring",stiffness:500,damping:25,restSpeed:10},s5=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),u5={type:"keyframes",duration:.8},c5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},f5=(a,{keyframes:i})=>i.length>2?u5:go.has(a)?a.startsWith("scale")?s5(i[1]):l5:c5;function h5({when:a,delay:i,delayChildren:r,staggerChildren:s,staggerDirection:c,repeat:h,repeatType:f,repeatDelay:g,from:p,elapsed:d,...y}){return!!Object.keys(y).length}const lh=(a,i,r,s={},c,h)=>f=>{const g=Kf(s,a)||{},p=g.delay||s.delay||0;let{elapsed:d=0}=s;d=d-Bn(p);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-d,onUpdate:x=>{i.set(x),g.onUpdate&&g.onUpdate(x)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:a,motionValue:i,element:h?void 0:c};h5(g)||Object.assign(y,f5(a,y)),y.duration&&(y.duration=Bn(y.duration)),y.repeatDelay&&(y.repeatDelay=Bn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(v=!0)),(la.instantAnimations||la.skipAnimations)&&(v=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,v&&!h&&i.get()!==void 0){const x=r5(y.keyframes,g);if(x!==void 0){ae.update(()=>{y.onUpdate(x),y.onComplete()});return}}return g.isSync?new Zf(y):new z2(y)};function d5({protectedKeys:a,needsAnimating:i},r){const s=a.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,s}function N1(a,i,{delay:r=0,transitionOverride:s,type:c}={}){let{transition:h=a.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(h=s);const p=[],d=c&&a.animationState&&a.animationState.getState()[c];for(const y in g){const v=a.getValue(y,a.latestValues[y]??null),x=g[y];if(x===void 0||d&&d5(d,y))continue;const E={delay:r,...Kf(h||{},y)},w=v.get();if(w!==void 0&&!v.isAnimating&&!Array.isArray(x)&&x===w&&!E.velocity)continue;let M=!1;if(window.MotionHandoffAnimation){const V=R1(a);if(V){const B=window.MotionHandoffAnimation(V,y,ae);B!==null&&(E.startTime=B,M=!0)}}Tf(a,y),v.start(lh(y,v,x,a.shouldReduceMotion&&$g.has(y)?{type:!1}:E,a,M));const L=v.animation;L&&p.push(L)}return f&&Promise.all(p).then(()=>{ae.update(()=>{f&&a5(a,f)})}),p}function Sf(a,i,r={}){const s=jr(a,i,r.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(c=r.transitionOverride);const h=s?()=>Promise.all(N1(a,s,r)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(p=0)=>{const{delayChildren:d=0,staggerChildren:y,staggerDirection:v}=c;return m5(a,i,p,d,y,v,r)}:()=>Promise.resolve(),{when:g}=c;if(g){const[p,d]=g==="beforeChildren"?[h,f]:[f,h];return p().then(()=>d())}else return Promise.all([h(),f(r.delay)])}function m5(a,i,r=0,s=0,c=0,h=1,f){const g=[],p=a.variantChildren.size,d=(p-1)*c,y=typeof s=="function",v=y?x=>s(x,p):h===1?(x=0)=>x*c:(x=0)=>d-x*c;return Array.from(a.variantChildren).sort(p5).forEach((x,E)=>{x.notify("AnimationStart",i),g.push(Sf(x,i,{...f,delay:r+(y?0:s)+v(E)}).then(()=>x.notify("AnimationComplete",i)))}),Promise.all(g)}function p5(a,i){return a.sortNodePosition(i)}function g5(a,i,r={}){a.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(h=>Sf(a,h,r));s=Promise.all(c)}else if(typeof i=="string")s=Sf(a,i,r);else{const c=typeof i=="function"?jr(a,i,r.custom):i;s=Promise.all(N1(a,c,r))}return s.then(()=>{a.notify("AnimationComplete",i)})}function k1(a,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==a.length)return!1;for(let s=0;s<r;s++)if(i[s]!==a[s])return!1;return!0}const y5=th.length;function j1(a){if(!a)return;if(!a.isControllingVariants){const r=a.parent?j1(a.parent)||{}:{};return a.props.initial!==void 0&&(r.initial=a.props.initial),r}const i={};for(let r=0;r<y5;r++){const s=th[r],c=a.props[s];(Nr(c)||c===!1)&&(i[s]=c)}return i}const b5=[...If].reverse(),v5=If.length;function x5(a){return i=>Promise.all(i.map(({animation:r,options:s})=>g5(a,r,s)))}function T5(a){let i=x5(a),r=vp(),s=!0;const c=p=>(d,y)=>{const v=jr(a,y,p==="exit"?a.presenceContext?.custom:void 0);if(v){const{transition:x,transitionEnd:E,...w}=v;d={...d,...w,...E}}return d};function h(p){i=p(a)}function f(p){const{props:d}=a,y=j1(a.parent)||{},v=[],x=new Set;let E={},w=1/0;for(let L=0;L<v5;L++){const V=b5[L],B=r[V],k=d[V]!==void 0?d[V]:y[V],Z=Nr(k),j=V===p?B.isActive:null;j===!1&&(w=L);let K=k===y[V]&&k!==d[V]&&Z;if(K&&s&&a.manuallyAnimateOnMount&&(K=!1),B.protectedKeys={...E},!B.isActive&&j===null||!k&&!B.prevProp||Ss(k)||typeof k=="boolean")continue;const J=S5(B.prevProp,k);let G=J||V===p&&B.isActive&&!K&&Z||L>w&&Z,et=!1;const ct=Array.isArray(k)?k:[k];let wt=ct.reduce(c(V),{});j===!1&&(wt={});const{prevResolvedValues:Ut={}}=B,pe={...Ut,...wt},ie=F=>{G=!0,x.has(F)&&(et=!0,x.delete(F)),B.needsAnimating[F]=!0;const I=a.getValue(F);I&&(I.liveStyle=!1)};for(const F in pe){const I=wt[F],yt=Ut[F];if(E.hasOwnProperty(F))continue;let A=!1;xf(I)&&xf(yt)?A=!k1(I,yt):A=I!==yt,A?I!=null?ie(F):x.add(F):I!==void 0&&x.has(F)?ie(F):B.protectedKeys[F]=!0}B.prevProp=k,B.prevResolvedValues=wt,B.isActive&&(E={...E,...wt}),s&&a.blockInitialAnimation&&(G=!1),G&&(!(K&&J)||et)&&v.push(...ct.map(F=>({animation:F,options:{type:V}})))}if(x.size){const L={};if(typeof d.initial!="boolean"){const V=jr(a,Array.isArray(d.initial)?d.initial[0]:d.initial);V&&V.transition&&(L.transition=V.transition)}x.forEach(V=>{const B=a.getBaseTarget(V),k=a.getValue(V);k&&(k.liveStyle=!0),L[V]=B??null}),v.push({animation:L})}let M=!!v.length;return s&&(d.initial===!1||d.initial===d.animate)&&!a.manuallyAnimateOnMount&&(M=!1),s=!1,M?i(v):Promise.resolve()}function g(p,d){if(r[p].isActive===d)return Promise.resolve();a.variantChildren?.forEach(v=>v.animationState?.setActive(p,d)),r[p].isActive=d;const y=f(p);for(const v in r)r[v].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:h,getState:()=>r,reset:()=>{r=vp(),s=!0}}}function S5(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!k1(i,a):!1}function ui(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vp(){return{animate:ui(!0),whileInView:ui(),whileHover:ui(),whileTap:ui(),whileDrag:ui(),whileFocus:ui(),exit:ui()}}class qa{constructor(i){this.isMounted=!1,this.node=i}update(){}}class A5 extends qa{constructor(i){super(i),i.animationState||(i.animationState=T5(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Ss(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let D5=0;class O5 extends qa{constructor(){super(...arguments),this.id=D5++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);r&&!i&&c.then(()=>{r(this.id)})}mount(){const{register:i,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const E5={animation:{Feature:A5},exit:{Feature:O5}};function zr(a,i,r,s={passive:!0}){return a.addEventListener(i,r,s),()=>a.removeEventListener(i,r)}function Ur(a){return{point:{x:a.pageX,y:a.pageY}}}const M5=a=>i=>Wf(i)&&a(i,Ur(i));function Or(a,i,r,s){return zr(a,i,M5(r),s)}const z1=1e-4,w5=1-z1,X5=1+z1,_1=.01,C5=0-_1,R5=0+_1;function Ke(a){return a.max-a.min}function N5(a,i,r){return Math.abs(a-i)<=r}function xp(a,i,r,s=.5){a.origin=s,a.originPoint=re(i.min,i.max,a.origin),a.scale=Ke(r)/Ke(i),a.translate=re(r.min,r.max,a.origin)-a.originPoint,(a.scale>=w5&&a.scale<=X5||isNaN(a.scale))&&(a.scale=1),(a.translate>=C5&&a.translate<=R5||isNaN(a.translate))&&(a.translate=0)}function Er(a,i,r,s){xp(a.x,i.x,r.x,s?s.originX:void 0),xp(a.y,i.y,r.y,s?s.originY:void 0)}function Tp(a,i,r){a.min=r.min+i.min,a.max=a.min+Ke(i)}function k5(a,i,r){Tp(a.x,i.x,r.x),Tp(a.y,i.y,r.y)}function Sp(a,i,r){a.min=i.min-r.min,a.max=a.min+Ke(i)}function Mr(a,i,r){Sp(a.x,i.x,r.x),Sp(a.y,i.y,r.y)}function Sn(a){return[a("x"),a("y")]}const V1=({current:a})=>a?a.ownerDocument.defaultView:null,Ap=(a,i)=>Math.abs(a-i);function j5(a,i){const r=Ap(a.x,i.x),s=Ap(a.y,i.y);return Math.sqrt(r**2+s**2)}class B1{constructor(i,r,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:h=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Wc(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,w=j5(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!w)return;const{point:M}=x,{timestamp:L}=Ve;this.history.push({...M,timestamp:L});const{onStart:V,onMove:B}=this.handlers;E||(V&&V(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),B&&B(this.lastMoveEvent,x)},this.handlePointerMove=(x,E)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Jc(E,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(x,E)=>{this.end();const{onEnd:w,onSessionEnd:M,resumeAnimation:L}=this.handlers;if(this.dragSnapToOrigin&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const V=Wc(x.type==="pointercancel"?this.lastMoveEventInfo:Jc(E,this.transformPagePoint),this.history);this.startEvent&&w&&w(x,V),M&&M(x,V)},!Wf(i))return;this.dragSnapToOrigin=h,this.handlers=r,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=c||window;const g=Ur(i),p=Jc(g,this.transformPagePoint),{point:d}=p,{timestamp:y}=Ve;this.history=[{...d,timestamp:y}];const{onSessionStart:v}=r;v&&v(i,Wc(p,this.history)),this.removeListeners=_r(Or(this.contextWindow,"pointermove",this.handlePointerMove),Or(this.contextWindow,"pointerup",this.handlePointerUp),Or(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),La(this.updatePoint)}}function Jc(a,i){return i?{point:i(a.point)}:a}function Dp(a,i){return{x:a.x-i.x,y:a.y-i.y}}function Wc({point:a},i){return{point:a,delta:Dp(a,U1(i)),offset:Dp(a,z5(i)),velocity:_5(i,.1)}}function z5(a){return a[0]}function U1(a){return a[a.length-1]}function _5(a,i){if(a.length<2)return{x:0,y:0};let r=a.length-1,s=null;const c=U1(a);for(;r>=0&&(s=a[r],!(c.timestamp-s.timestamp>Bn(i)));)r--;if(!s)return{x:0,y:0};const h=Un(c.timestamp-s.timestamp);if(h===0)return{x:0,y:0};const f={x:(c.x-s.x)/h,y:(c.y-s.y)/h};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function V5(a,{min:i,max:r},s){return i!==void 0&&a<i?a=s?re(i,a,s.min):Math.max(a,i):r!==void 0&&a>r&&(a=s?re(r,a,s.max):Math.min(a,r)),a}function Op(a,i,r){return{min:i!==void 0?a.min+i:void 0,max:r!==void 0?a.max+r-(a.max-a.min):void 0}}function B5(a,{top:i,left:r,bottom:s,right:c}){return{x:Op(a.x,r,c),y:Op(a.y,i,s)}}function Ep(a,i){let r=i.min-a.min,s=i.max-a.max;return i.max-i.min<a.max-a.min&&([r,s]=[s,r]),{min:r,max:s}}function U5(a,i){return{x:Ep(a.x,i.x),y:Ep(a.y,i.y)}}function L5(a,i){let r=.5;const s=Ke(a),c=Ke(i);return c>s?r=Xr(i.min,i.max-s,a.min):s>c&&(r=Xr(a.min,a.max-c,i.min)),ra(0,1,r)}function H5(a,i){const r={};return i.min!==void 0&&(r.min=i.min-a.min),i.max!==void 0&&(r.max=i.max-a.min),r}const Af=.35;function q5(a=Af){return a===!1?a=0:a===!0&&(a=Af),{x:Mp(a,"left","right"),y:Mp(a,"top","bottom")}}function Mp(a,i,r){return{min:wp(a,i),max:wp(a,r)}}function wp(a,i){return typeof a=="number"?a:a[i]||0}const P5=new WeakMap;class Y5{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:r=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const h=v=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Ur(v).point)},f=(v,x)=>{const{drag:E,dragPropagation:w,onDragStart:M}=this.getProps();if(E&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=W2(E),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Sn(V=>{let B=this.getAxisMotionValue(V).get()||0;if(Ln.test(B)){const{projection:k}=this.visualElement;if(k&&k.layout){const Z=k.layout.layoutBox[V];Z&&(B=Ke(Z)*(parseFloat(B)/100))}}this.originPoint[V]=B}),M&&ae.postRender(()=>M(v,x)),Tf(this.visualElement,"transform");const{animationState:L}=this.visualElement;L&&L.setActive("whileDrag",!0)},g=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:E,dragDirectionLock:w,onDirectionLock:M,onDrag:L}=this.getProps();if(!E&&!this.openDragLock)return;const{offset:V}=x;if(w&&this.currentDirection===null){this.currentDirection=G5(V),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",x.point,V),this.updateAxis("y",x.point,V),this.visualElement.render(),L&&L(v,x)},p=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>Sn(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new B1(i,{onSessionStart:h,onStart:f,onMove:g,onSessionEnd:p,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:V1(this.visualElement)})}stop(i,r){const s=i||this.latestPointerEvent,c=r||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!c||!s)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:g}=this.getProps();g&&ae.postRender(()=>g(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(i,r,s){const{drag:c}=this.getProps();if(!s||!rs(i,c,this.currentDirection))return;const h=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=V5(f,this.constraints[i],this.elastic[i])),h.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&lo(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=B5(s.layoutBox,i):this.constraints=!1,this.elastic=q5(r),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Sn(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=H5(s.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!lo(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const h=Gx(s,c.root,this.visualElement.getTransformPagePoint());let f=U5(c.layout.layoutBox,h);if(r){const g=r(qx(f));this.hasMutatedConstraints=!!g,g&&(f=A1(g))}return f}startAnimation(i){const{drag:r,dragMomentum:s,dragElastic:c,dragTransition:h,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),p=this.constraints||{},d=Sn(y=>{if(!rs(y,r,this.currentDirection))return;let v=p&&p[y]||{};f&&(v={min:0,max:0});const x=c?200:1e6,E=c?40:1e7,w={type:"inertia",velocity:s?i[y]:0,bounceStiffness:x,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...h,...v};return this.startAxisValueAnimation(y,w)});return Promise.all(d).then(g)}startAxisValueAnimation(i,r){const s=this.getAxisMotionValue(i);return Tf(this.visualElement,i),s.start(lh(i,s,0,r,this.visualElement,!1))}stopAnimation(){Sn(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Sn(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[r];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){Sn(r=>{const{drag:s}=this.getProps();if(!rs(r,s,this.currentDirection))return;const{projection:c}=this.visualElement,h=this.getAxisMotionValue(r);if(c&&c.layout){const{min:f,max:g}=c.layout.layoutBox[r];h.set(i[r]-re(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!lo(r)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Sn(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const p=g.get();c[f]=L5({min:p,max:p},this.constraints[f])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Sn(f=>{if(!rs(f,i,null))return;const g=this.getAxisMotionValue(f),{min:p,max:d}=this.constraints[f];g.set(re(p,d,c[f]))})}addListeners(){if(!this.visualElement.current)return;P5.set(this.visualElement,this);const i=this.visualElement.current,r=Or(i,"pointerdown",p=>{const{drag:d,dragListener:y=!0}=this.getProps();d&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();lo(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,h=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),ae.read(s);const f=zr(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",({delta:p,hasLayoutChanged:d})=>{this.isDragging&&d&&(Sn(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=p[y].translate,v.set(v.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),r(),h(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:h=!1,dragElastic:f=Af,dragMomentum:g=!0}=i;return{...i,drag:r,dragDirectionLock:s,dragPropagation:c,dragConstraints:h,dragElastic:f,dragMomentum:g}}}function rs(a,i,r){return(i===!0||i===a)&&(r===null||r===a)}function G5(a,i=10){let r=null;return Math.abs(a.y)>i?r="y":Math.abs(a.x)>i&&(r="x"),r}class Z5 extends qa{constructor(i){super(i),this.removeGroupControls=An,this.removeListeners=An,this.controls=new Y5(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||An}unmount(){this.removeGroupControls(),this.removeListeners()}}const Xp=a=>(i,r)=>{a&&ae.postRender(()=>a(i,r))};class Q5 extends qa{constructor(){super(...arguments),this.removePointerDownListener=An}onPointerDown(i){this.session=new B1(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:V1(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:Xp(i),onStart:Xp(r),onMove:s,onEnd:(h,f)=>{delete this.session,c&&ae.postRender(()=>c(h,f))}}}mount(){this.removePointerDownListener=Or(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ds={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Cp(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const xr={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(vt.test(a))a=parseFloat(a);else return a;const r=Cp(a,i.target.x),s=Cp(a,i.target.y);return`${r}% ${s}%`}},K5={correct:(a,{treeScale:i,projectionDelta:r})=>{const s=a,c=Ha.parse(a);if(c.length>5)return s;const h=Ha.createTransformer(a),f=typeof c[0]!="number"?1:0,g=r.x.scale*i.x,p=r.y.scale*i.y;c[0+f]/=g,c[1+f]/=p;const d=re(g,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=d),typeof c[3+f]=="number"&&(c[3+f]/=d),h(c)}};let Rp=!1;class F5 extends P.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s,layoutId:c}=this.props,{projection:h}=i;gx(J5),h&&(r.group&&r.group.add(h),s&&s.register&&c&&s.register(h),Rp&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),ds.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:s,drag:c,isPresent:h}=this.props,{projection:f}=s;return f&&(f.isPresent=h,Rp=!0,c||i.layoutDependency!==r||r===void 0||i.isPresent!==h?f.willUpdate():this.safeToRemove(),i.isPresent!==h&&(h?f.promote():f.relegate()||ae.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Jf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function L1(a){const[i,r]=u1(),s=P.useContext(wf);return T.jsx(F5,{...a,layoutGroup:s,switchLayoutGroup:P.useContext(T1),isPresent:i,safeToRemove:r})}const J5={borderRadius:{...xr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xr,borderTopRightRadius:xr,borderBottomLeftRadius:xr,borderBottomRightRadius:xr,boxShadow:K5};function W5(a,i,r){const s=Pe(a)?a:fo(a);return s.start(lh("",s,i,r)),s.animation}const $5=(a,i)=>a.depth-i.depth;class I5{constructor(){this.children=[],this.isDirty=!1}add(i){Rf(this.children,i),this.isDirty=!0}remove(i){Nf(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort($5),this.isDirty=!1,this.children.forEach(i)}}function tT(a,i){const r=nn.now(),s=({timestamp:c})=>{const h=c-r;h>=i&&(La(s),a(h-i))};return ae.setup(s,!0),()=>La(s)}const H1=["TopLeft","TopRight","BottomLeft","BottomRight"],eT=H1.length,Np=a=>typeof a=="string"?parseFloat(a):a,kp=a=>typeof a=="number"||vt.test(a);function nT(a,i,r,s,c,h){c?(a.opacity=re(0,r.opacity??1,aT(s)),a.opacityExit=re(i.opacity??1,0,iT(s))):h&&(a.opacity=re(i.opacity??1,r.opacity??1,s));for(let f=0;f<eT;f++){const g=`border${H1[f]}Radius`;let p=jp(i,g),d=jp(r,g);if(p===void 0&&d===void 0)continue;p||(p=0),d||(d=0),p===0||d===0||kp(p)===kp(d)?(a[g]=Math.max(re(Np(p),Np(d),s),0),(Ln.test(d)||Ln.test(p))&&(a[g]+="%")):a[g]=d}(i.rotate||r.rotate)&&(a.rotate=re(i.rotate||0,r.rotate||0,s))}function jp(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const aT=q1(0,.5,Xg),iT=q1(.5,.95,An);function q1(a,i,r){return s=>s<a?0:s>i?1:r(Xr(a,i,s))}function zp(a,i){a.min=i.min,a.max=i.max}function Tn(a,i){zp(a.x,i.x),zp(a.y,i.y)}function _p(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}function Vp(a,i,r,s,c){return a-=i,a=bs(a,1/r,s),c!==void 0&&(a=bs(a,1/c,s)),a}function oT(a,i=0,r=1,s=.5,c,h=a,f=a){if(Ln.test(i)&&(i=parseFloat(i),i=re(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=re(h.min,h.max,s);a===h&&(g-=i),a.min=Vp(a.min,i,r,g,c),a.max=Vp(a.max,i,r,g,c)}function Bp(a,i,[r,s,c],h,f){oT(a,i[r],i[s],i[c],i.scale,h,f)}const rT=["x","scaleX","originX"],lT=["y","scaleY","originY"];function Up(a,i,r,s){Bp(a.x,i,rT,r?r.x:void 0,s?s.x:void 0),Bp(a.y,i,lT,r?r.y:void 0,s?s.y:void 0)}function Lp(a){return a.translate===0&&a.scale===1}function P1(a){return Lp(a.x)&&Lp(a.y)}function Hp(a,i){return a.min===i.min&&a.max===i.max}function sT(a,i){return Hp(a.x,i.x)&&Hp(a.y,i.y)}function qp(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function Y1(a,i){return qp(a.x,i.x)&&qp(a.y,i.y)}function Pp(a){return Ke(a.x)/Ke(a.y)}function Yp(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}class uT{constructor(){this.members=[]}add(i){Rf(this.members,i),i.scheduleRender()}remove(i){if(Nf(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(c=>i===c);if(r===0)return!1;let s;for(let c=r;c>=0;c--){const h=this.members[c];if(h.isPresent!==!1){s=h;break}}return s?(this.promote(s),!0):!1}promote(i,r){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,r&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:s}=i;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function cT(a,i,r){let s="";const c=a.x.translate/i.x,h=a.y.translate/i.y,f=r?.z||0;if((c||h||f)&&(s=`translate3d(${c}px, ${h}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:d,rotate:y,rotateX:v,rotateY:x,skewX:E,skewY:w}=r;d&&(s=`perspective(${d}px) ${s}`),y&&(s+=`rotate(${y}deg) `),v&&(s+=`rotateX(${v}deg) `),x&&(s+=`rotateY(${x}deg) `),E&&(s+=`skewX(${E}deg) `),w&&(s+=`skewY(${w}deg) `)}const g=a.x.scale*i.x,p=a.y.scale*i.y;return(g!==1||p!==1)&&(s+=`scale(${g}, ${p})`),s||"none"}const $c=["","X","Y","Z"],fT=1e3;let hT=0;function Ic(a,i,r,s){const{latestValues:c}=i;c[a]&&(r[a]=c[a],i.setStaticValue(a,0),s&&(s[a]=0))}function G1(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const r=R1(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:h}=a.options;window.MotionCancelOptimisedAnimation(r,"transform",ae,!(c||h))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&G1(s)}function Z1({attachResizeListener:a,defaultParent:i,measureScroll:r,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},g=i?.()){this.id=hT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(pT),this.nodes.forEach(vT),this.nodes.forEach(xT),this.nodes.forEach(gT)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new I5)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new zf),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const p=this.eventHandlers.get(f);p&&p.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=s1(f)&&!ax(f),this.instance=f;const{layoutId:g,layout:p,visualElement:d}=this.options;if(d&&!d.current&&d.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||g)&&(this.isLayoutDirty=!0),a){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;ae.read(()=>{v=window.innerWidth}),a(f,()=>{const E=window.innerWidth;E!==v&&(v=E,this.root.updateBlockedByResize=!0,y&&y(),y=tT(x,250),ds.hasAnimatedSinceResize&&(ds.hasAnimatedSinceResize=!1,this.nodes.forEach(Qp)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&d&&(g||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||OT,{onLayoutAnimationStart:M,onLayoutAnimationComplete:L}=d.getProps(),V=!this.targetLayout||!Y1(this.targetLayout,E),B=!v&&x;if(this.options.layoutRoot||this.resumeFrom||B||v&&(V||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const k={...Kf(w,"layout"),onPlay:M,onComplete:L};(d.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k),this.setAnimationOrigin(y,B)}else v||Qp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),La(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(TT),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&G1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:g,layout:p}=this.options;if(g===void 0&&!p)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Gp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Zp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bT),this.nodes.forEach(dT),this.nodes.forEach(mT)):this.nodes.forEach(Zp),this.clearAllSnapshots();const g=nn.now();Ve.delta=ra(0,1e3/60,g-Ve.timestamp),Ve.timestamp=g,Ve.isProcessing=!0,qc.update.process(Ve),qc.preRender.process(Ve),qc.render.process(Ve),Ve.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yT),this.sharedNodes.forEach(ST)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ke(this.snapshot.measuredBox.x)&&!Ke(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!P1(this.projectionDelta),p=this.getTransformTemplate(),d=p?p(this.latestValues,""):void 0,y=d!==this.prevTransformTemplateValue;f&&this.instance&&(g||ci(this.latestValues)||y)&&(c(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let p=this.removeElementScroll(g);return f&&(p=this.removeTransform(p)),ET(p),{animationId:this.root.animationId,measuredBox:g,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return me();const g=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(MT))){const{scroll:d}=this.root;d&&(so(g.x,d.offset.x),so(g.y,d.offset.y))}return g}removeElementScroll(f){const g=me();if(Tn(g,f),this.scroll?.wasRoot)return g;for(let p=0;p<this.path.length;p++){const d=this.path[p],{scroll:y,options:v}=d;d!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&Tn(g,f),so(g.x,y.offset.x),so(g.y,y.offset.y))}return g}applyTransform(f,g=!1){const p=me();Tn(p,f);for(let d=0;d<this.path.length;d++){const y=this.path[d];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&uo(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),ci(y.latestValues)&&uo(p,y.latestValues)}return ci(this.latestValues)&&uo(p,this.latestValues),p}removeTransform(f){const g=me();Tn(g,f);for(let p=0;p<this.path.length;p++){const d=this.path[p];if(!d.instance||!ci(d.latestValues))continue;yf(d.latestValues)&&d.updateSnapshot();const y=me(),v=d.measurePageBox();Tn(y,v),Up(g,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,y)}return ci(this.latestValues)&&Up(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ve.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==g;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=Ve.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),Mr(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=me(),this.targetWithTransforms=me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),k5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tn(this.target,this.layout.layoutBox),O1(this.target,this.targetDelta)):Tn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),Mr(this.relativeTargetOrigin,this.target,x.target),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||yf(this.parent.latestValues)||D1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),g=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ve.timestamp&&(p=!1),p)return;const{layout:d,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||y))return;Tn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;Yx(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=me());const{target:E}=f;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_p(this.prevProjectionDelta.x,this.projectionDelta.x),_p(this.prevProjectionDelta.y,this.projectionDelta.y)),Er(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!Yp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Yp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=co(),this.projectionDelta=co(),this.projectionDeltaWithTransform=co()}setAnimationOrigin(f,g=!1){const p=this.snapshot,d=p?p.latestValues:{},y={...this.latestValues},v=co();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const x=me(),E=p?p.source:void 0,w=this.layout?this.layout.source:void 0,M=E!==w,L=this.getStack(),V=!L||L.members.length<=1,B=!!(M&&!V&&this.options.crossfade===!0&&!this.path.some(DT));this.animationProgress=0;let k;this.mixTargetDelta=Z=>{const j=Z/1e3;Kp(v.x,f.x,j),Kp(v.y,f.y,j),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Mr(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),AT(this.relativeTarget,this.relativeTargetOrigin,x,j),k&&sT(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=me()),Tn(k,this.relativeTarget)),M&&(this.animationValues=y,nT(y,d,this.latestValues,j,B,V)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(La(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{ds.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fo(0)),this.currentAnimation=W5(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:p,layout:d,latestValues:y}=f;if(!(!g||!p||!d)){if(this!==f&&this.layout&&d&&Q1(this.options.animationType,this.layout.layoutBox,d.layoutBox)){p=this.target||me();const v=Ke(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+v;const x=Ke(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+x}Tn(g,p),uo(g,y),Er(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new uT),this.sharedNodes.get(f).add(g);const d=g.options.initialPromotionConfig;g.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:p}={}){const d=this.getStack();d&&d.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(g=!0),!g)return;const d={};p.z&&Ic("z",f,d,this.animationValues);for(let y=0;y<$c.length;y++)Ic(`rotate${$c[y]}`,f,d,this.animationValues),Ic(`skew${$c[y]}`,f,d,this.animationValues);f.render();for(const y in d)f.setStaticValue(y,d[y]),this.animationValues&&(this.animationValues[y]=d[y]);f.scheduleRender()}applyProjectionStyles(f,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=hs(g?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=hs(g?.pointerEvents)||""),this.hasProjected&&!ci(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=d.animationValues||d.latestValues;this.applyTransformsToTarget();let v=cT(this.projectionDeltaWithTransform,this.treeScale,y);p&&(v=p(y,v)),f.transform=v;const{x,y:E}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${E.origin*100}% 0`,d.animationValues?f.opacity=d===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=d===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const w in kr){if(y[w]===void 0)continue;const{correct:M,applyTo:L,isCSSVariable:V}=kr[w],B=v==="none"?y[w]:M(y[w],d);if(L){const k=L.length;for(let Z=0;Z<k;Z++)f[L[Z]]=B}else V?this.options.visualElement.renderState.vars[w]=B:f[w]=B}this.options.layoutId&&(f.pointerEvents=d===this?hs(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Gp),this.root.sharedNodes.clear()}}}function dT(a){a.updateLayout()}function mT(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=a.layout,{animationType:c}=a.options,h=i.source!==a.layout.source;c==="size"?Sn(y=>{const v=h?i.measuredBox[y]:i.layoutBox[y],x=Ke(v);v.min=r[y].min,v.max=v.min+x}):Q1(c,i.layoutBox,r)&&Sn(y=>{const v=h?i.measuredBox[y]:i.layoutBox[y],x=Ke(r[y]);v.max=v.min+x,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[y].max=a.relativeTarget[y].min+x)});const f=co();Er(f,r,i.layoutBox);const g=co();h?Er(g,a.applyTransform(s,!0),i.measuredBox):Er(g,r,i.layoutBox);const p=!P1(f);let d=!1;if(!a.resumeFrom){const y=a.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:x}=y;if(v&&x){const E=me();Mr(E,i.layoutBox,v.layoutBox);const w=me();Mr(w,r,x.layoutBox),Y1(E,w)||(d=!0),y.options.layoutRoot&&(a.relativeTarget=w,a.relativeTargetOrigin=E,a.relativeParent=y)}}}a.notifyListeners("didUpdate",{layout:r,snapshot:i,delta:g,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:d})}else if(a.isLead()){const{onExitComplete:r}=a.options;r&&r()}a.options.transition=void 0}function pT(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function gT(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function yT(a){a.clearSnapshot()}function Gp(a){a.clearMeasurements()}function Zp(a){a.isLayoutDirty=!1}function bT(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function Qp(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function vT(a){a.resolveTargetDelta()}function xT(a){a.calcProjection()}function TT(a){a.resetSkewAndRotation()}function ST(a){a.removeLeadSnapshot()}function Kp(a,i,r){a.translate=re(i.translate,0,r),a.scale=re(i.scale,1,r),a.origin=i.origin,a.originPoint=i.originPoint}function Fp(a,i,r,s){a.min=re(i.min,r.min,s),a.max=re(i.max,r.max,s)}function AT(a,i,r,s){Fp(a.x,i.x,r.x,s),Fp(a.y,i.y,r.y,s)}function DT(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const OT={duration:.45,ease:[.4,0,.1,1]},Jp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Wp=Jp("applewebkit/")&&!Jp("chrome/")?Math.round:An;function $p(a){a.min=Wp(a.min),a.max=Wp(a.max)}function ET(a){$p(a.x),$p(a.y)}function Q1(a,i,r){return a==="position"||a==="preserve-aspect"&&!N5(Pp(i),Pp(r),.2)}function MT(a){return a!==a.root&&a.scroll?.wasRoot}const wT=Z1({attachResizeListener:(a,i)=>zr(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),tf={current:void 0},K1=Z1({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!tf.current){const a=new wT({});a.mount(window),a.setOptions({layoutScroll:!0}),tf.current=a}return tf.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),XT={pan:{Feature:Q5},drag:{Feature:Z5,ProjectionNode:K1,MeasureLayout:L1}};function Ip(a,i,r){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,h=s[c];h&&ae.postRender(()=>h(i,Ur(i)))}class CT extends qa{mount(){const{current:i}=this.node;i&&(this.unmount=$2(i,(r,s)=>(Ip(this.node,s,"Start"),c=>Ip(this.node,c,"End"))))}unmount(){}}class RT extends qa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=_r(zr(this.node.current,"focus",()=>this.onFocus()),zr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function tg(a,i,r){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),h=s[c];h&&ae.postRender(()=>h(i,Ur(i)))}class NT extends qa{mount(){const{current:i}=this.node;i&&(this.unmount=nx(i,(r,s)=>(tg(this.node,s,"Start"),(c,{success:h})=>tg(this.node,c,h?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Df=new WeakMap,ef=new WeakMap,kT=a=>{const i=Df.get(a.target);i&&i(a)},jT=a=>{a.forEach(kT)};function zT({root:a,...i}){const r=a||document;ef.has(r)||ef.set(r,{});const s=ef.get(r),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(jT,{root:a,...i})),s[c]}function _T(a,i,r){const s=zT(i);return Df.set(a,r),s.observe(a),()=>{Df.delete(a),s.unobserve(a)}}const VT={some:0,all:1};class BT extends qa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:s,amount:c="some",once:h}=i,f={root:r?r.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:VT[c]},g=p=>{const{isIntersecting:d}=p;if(this.isInView===d||(this.isInView=d,h&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),x=d?y:v;x&&x(p)};return _T(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(UT(i,r))&&this.startObserver()}unmount(){}}function UT({viewport:a={}},{viewport:i={}}={}){return r=>a[r]!==i[r]}const LT={inView:{Feature:BT},tap:{Feature:NT},focus:{Feature:RT},hover:{Feature:CT}},HT={layout:{ProjectionNode:K1,MeasureLayout:L1}},qT={...E5,...LT,...XT,...HT},Gt=Hx(qT,t5),PT="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='100pt'%20height='100pt'%20version='1.1'%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m18.914%2081.398h-7.1992c0.97266%200.91016%201.5977%202.2266%201.5977%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.3125%200.46094-2.5703%201.4297-3.5977h-4.5703v-1.8281h4.5703v-7.4883h67.082v-21.371h25.086v2.6328h-13.086v11.426h7.8281v12.633l-15.484-0.003906c-1.1406%200.17187-1.0273%201.6562%200.058594%201.7695h23.945v2.2305h-9.4297c0.91406%200.91016%201.543%202.2266%201.543%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.4297%200.62891-2.7383%201.543-3.5977h-7.6016c0.058594%200.22656%200.10938%200.45703%200.10938%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.058593-0.45703%200.058593-0.68359h-3.8281c0%200.28125%200.058593%200.51562%200.058593%200.68359%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2305-3.7109-8.2305-8.3438%200-0.11328%200.058594-0.28516%200.11328-0.625h-4.1133c0%200.28516%200.058594%200.45703%200.058594%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.054688-0.34375%200.11328-0.625'%20fill='%23010101'/%3e%3cpath%20d='m25.316%2053.566c-1.3711-0.16797-2.3984-1.1445-2.1719-2.2812l2.0547-6.1719-0.34375-4.2305h-7.8867l-0.34375%204.2305%202.0586%206.1719c0.23047%201.1406-0.80078%202.1172-2.0586%202.2812h-6.4531l-5.5977%208.3984%205.5977%208.4023h59.828l-0.003906-16.852c-3.9961%200.16797-3.7109-1.4883-3.9961-2.6914h-24.914c-0.11328%200.91406%200%202.7422-3.1406%202.7422z'%20fill='%23010101'/%3e%3cpath%20d='m23.312%2039.113h-4.6289c0.62891-6.3984%202.457-11.027%207.5977-15.543%201.3164-2.1133%200.28516-12.172%209.1406-13.715%208.6914-1.4844%208.5781%204.9141%2015.32%205.5977%202.9141%200.28906%205.6016-2.3398%208.5703-2.2812%204.0547%200.11328%205.7734%203.8242%209.1992%203.9961%203.4297%200.17188%204.1133-2.0547%207.4297-2.1719%203.3125-0.11328%207.8281%203.6562%207.8281%207.2031%200%204.0547-0.34375%208.3398-7.0859%2010.055-3.1992%200.80078-6-2.5703-9.1992-2.457-2.8555%200.054687-5.7148%202.6875-8.5156%202.6875-6.7383%200-6.3984-4.0586-10.168-4.0586-3.9414%200-4.8008%203.9414-10.801%204.2852-4.1758%200.23047-6.2852-2.6289-9.1445-1.7148-4.5117%201.4883-5.2539%208.1172-5.543%208.1172'%20fill='%23010101'/%3e%3c/svg%3e";function Oe(a,i){i===void 0&&(i={});var r=i.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",r==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}Oe(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Zt=function(){return Zt=Object.assign||function(a){for(var i,r=1,s=arguments.length;r<s;r++)for(var c in i=arguments[r])Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c]);return a},Zt.apply(this,arguments)};function vs(a){return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},vs(a)}var YT=/^\s+/,GT=/\s+$/;function lt(a,i){if(i=i||{},(a=a||"")instanceof lt)return a;if(!(this instanceof lt))return new lt(a,i);var r=function(s){var c={r:0,g:0,b:0},h=1,f=null,g=null,p=null,d=!1,y=!1;typeof s=="string"&&(s=function(w){w=w.replace(YT,"").replace(GT,"").toLowerCase();var M,L=!1;if(Of[w])w=Of[w],L=!0;else if(w=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(M=wn.rgb.exec(w))?{r:M[1],g:M[2],b:M[3]}:(M=wn.rgba.exec(w))?{r:M[1],g:M[2],b:M[3],a:M[4]}:(M=wn.hsl.exec(w))?{h:M[1],s:M[2],l:M[3]}:(M=wn.hsla.exec(w))?{h:M[1],s:M[2],l:M[3],a:M[4]}:(M=wn.hsv.exec(w))?{h:M[1],s:M[2],v:M[3]}:(M=wn.hsva.exec(w))?{h:M[1],s:M[2],v:M[3],a:M[4]}:(M=wn.hex8.exec(w))?{r:hn(M[1]),g:hn(M[2]),b:hn(M[3]),a:rg(M[4]),format:L?"name":"hex8"}:(M=wn.hex6.exec(w))?{r:hn(M[1]),g:hn(M[2]),b:hn(M[3]),format:L?"name":"hex"}:(M=wn.hex4.exec(w))?{r:hn(M[1]+""+M[1]),g:hn(M[2]+""+M[2]),b:hn(M[3]+""+M[3]),a:rg(M[4]+""+M[4]),format:L?"name":"hex8"}:(M=wn.hex3.exec(w))?{r:hn(M[1]+""+M[1]),g:hn(M[2]+""+M[2]),b:hn(M[3]+""+M[3]),format:L?"name":"hex"}:!1}(s)),vs(s)=="object"&&(oa(s.r)&&oa(s.g)&&oa(s.b)?(v=s.r,x=s.g,E=s.b,c={r:255*ne(v,255),g:255*ne(x,255),b:255*ne(E,255)},d=!0,y=String(s.r).substr(-1)==="%"?"prgb":"rgb"):oa(s.h)&&oa(s.s)&&oa(s.v)?(f=Sr(s.s),g=Sr(s.v),c=function(w,M,L){w=6*ne(w,360),M=ne(M,100),L=ne(L,100);var V=Math.floor(w),B=w-V,k=L*(1-M),Z=L*(1-B*M),j=L*(1-(1-B)*M),K=V%6,J=[L,Z,k,k,j,L][K],G=[j,L,L,Z,k,k][K],et=[k,k,j,L,L,Z][K];return{r:255*J,g:255*G,b:255*et}}(s.h,f,g),d=!0,y="hsv"):oa(s.h)&&oa(s.s)&&oa(s.l)&&(f=Sr(s.s),p=Sr(s.l),c=function(w,M,L){var V,B,k;function Z(J,G,et){return et<0&&(et+=1),et>1&&(et-=1),et<1/6?J+6*(G-J)*et:et<.5?G:et<2/3?J+(G-J)*(2/3-et)*6:J}if(w=ne(w,360),M=ne(M,100),L=ne(L,100),M===0)V=B=k=L;else{var j=L<.5?L*(1+M):L+M-L*M,K=2*L-j;V=Z(K,j,w+1/3),B=Z(K,j,w),k=Z(K,j,w-1/3)}return{r:255*V,g:255*B,b:255*k}}(s.h,f,p),d=!0,y="hsl"),s.hasOwnProperty("a")&&(h=s.a));var v,x,E;return h=F1(h),{ok:d,format:s.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:h}}(a);this._originalInput=a,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||r.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function eg(a,i,r){a=ne(a,255),i=ne(i,255),r=ne(r,255);var s,c,h=Math.max(a,i,r),f=Math.min(a,i,r),g=(h+f)/2;if(h==f)s=c=0;else{var p=h-f;switch(c=g>.5?p/(2-h-f):p/(h+f),h){case a:s=(i-r)/p+(i<r?6:0);break;case i:s=(r-a)/p+2;break;case r:s=(a-i)/p+4}s/=6}return{h:s,s:c,l:g}}function ng(a,i,r){a=ne(a,255),i=ne(i,255),r=ne(r,255);var s,c,h=Math.max(a,i,r),f=Math.min(a,i,r),g=h,p=h-f;if(c=h===0?0:p/h,h==f)s=0;else{switch(h){case a:s=(i-r)/p+(i<r?6:0);break;case i:s=(r-a)/p+2;break;case r:s=(a-i)/p+4}s/=6}return{h:s,s:c,v:g}}function ag(a,i,r,s){var c=[Cn(Math.round(a).toString(16)),Cn(Math.round(i).toString(16)),Cn(Math.round(r).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function ig(a,i,r,s){return[Cn(J1(s)),Cn(Math.round(a).toString(16)),Cn(Math.round(i).toString(16)),Cn(Math.round(r).toString(16))].join("")}function ZT(a,i){i=i===0?0:i||10;var r=lt(a).toHsl();return r.s-=i/100,r.s=Ds(r.s),lt(r)}function QT(a,i){i=i===0?0:i||10;var r=lt(a).toHsl();return r.s+=i/100,r.s=Ds(r.s),lt(r)}function KT(a){return lt(a).desaturate(100)}function FT(a,i){i=i===0?0:i||10;var r=lt(a).toHsl();return r.l+=i/100,r.l=Ds(r.l),lt(r)}function JT(a,i){i=i===0?0:i||10;var r=lt(a).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-i/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-i/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-i/100*255))),lt(r)}function WT(a,i){i=i===0?0:i||10;var r=lt(a).toHsl();return r.l-=i/100,r.l=Ds(r.l),lt(r)}function $T(a,i){var r=lt(a).toHsl(),s=(r.h+i)%360;return r.h=s<0?360+s:s,lt(r)}function IT(a){var i=lt(a).toHsl();return i.h=(i.h+180)%360,lt(i)}function og(a,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var r=lt(a).toHsl(),s=[lt(a)],c=360/i,h=1;h<i;h++)s.push(lt({h:(r.h+h*c)%360,s:r.s,l:r.l}));return s}function tS(a){var i=lt(a).toHsl(),r=i.h;return[lt(a),lt({h:(r+72)%360,s:i.s,l:i.l}),lt({h:(r+216)%360,s:i.s,l:i.l})]}function eS(a,i,r){i=i||6,r=r||30;var s=lt(a).toHsl(),c=360/r,h=[lt(a)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,h.push(lt(s));return h}function nS(a,i){i=i||6;for(var r=lt(a).toHsv(),s=r.h,c=r.s,h=r.v,f=[],g=1/i;i--;)f.push(lt({h:s,s:c,v:h})),h=(h+g)%1;return f}lt.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,i,r,s=this.toRgb();return a=s.r/255,i=s.g/255,r=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(a){return this._a=F1(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=ng(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=ng(this._r,this._g,this._b),i=Math.round(360*a.h),r=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+i+", "+r+"%, "+s+"%)":"hsva("+i+", "+r+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=eg(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=eg(this._r,this._g,this._b),i=Math.round(360*a.h),r=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+i+", "+r+"%, "+s+"%)":"hsla("+i+", "+r+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return ag(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(i,r,s,c,h){var f=[Cn(Math.round(i).toString(16)),Cn(Math.round(r).toString(16)),Cn(Math.round(s).toString(16)),Cn(J1(c))];return h&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ne(this._r,255))+"%",g:Math.round(100*ne(this._g,255))+"%",b:Math.round(100*ne(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ne(this._r,255))+"%, "+Math.round(100*ne(this._g,255))+"%, "+Math.round(100*ne(this._b,255))+"%)":"rgba("+Math.round(100*ne(this._r,255))+"%, "+Math.round(100*ne(this._g,255))+"%, "+Math.round(100*ne(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(aS[ag(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var i="#"+ig(this._r,this._g,this._b,this._a),r=i,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=lt(a);r="#"+ig(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+r+")"},toString:function(a){var i=!!a;a=a||this._format;var r=!1,s=this._a<1&&this._a>=0;return i||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(r=this.toRgbString()),a==="prgb"&&(r=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(r=this.toHexString()),a==="hex3"&&(r=this.toHexString(!0)),a==="hex4"&&(r=this.toHex8String(!0)),a==="hex8"&&(r=this.toHex8String()),a==="name"&&(r=this.toName()),a==="hsl"&&(r=this.toHslString()),a==="hsv"&&(r=this.toHsvString()),r||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return lt(this.toString())},_applyModification:function(a,i){var r=a.apply(null,[this].concat([].slice.call(i)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(FT,arguments)},brighten:function(){return this._applyModification(JT,arguments)},darken:function(){return this._applyModification(WT,arguments)},desaturate:function(){return this._applyModification(ZT,arguments)},saturate:function(){return this._applyModification(QT,arguments)},greyscale:function(){return this._applyModification(KT,arguments)},spin:function(){return this._applyModification($T,arguments)},_applyCombination:function(a,i){return a.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(eS,arguments)},complement:function(){return this._applyCombination(IT,arguments)},monochromatic:function(){return this._applyCombination(nS,arguments)},splitcomplement:function(){return this._applyCombination(tS,arguments)},triad:function(){return this._applyCombination(og,[3])},tetrad:function(){return this._applyCombination(og,[4])}},lt.fromRatio=function(a,i){if(vs(a)=="object"){var r={};for(var s in a)a.hasOwnProperty(s)&&(r[s]=s==="a"?a[s]:Sr(a[s]));a=r}return lt(a,i)},lt.equals=function(a,i){return!(!a||!i)&&lt(a).toRgbString()==lt(i).toRgbString()},lt.random=function(){return lt.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},lt.mix=function(a,i,r){r=r===0?0:r||50;var s=lt(a).toRgb(),c=lt(i).toRgb(),h=r/100;return lt({r:(c.r-s.r)*h+s.r,g:(c.g-s.g)*h+s.g,b:(c.b-s.b)*h+s.b,a:(c.a-s.a)*h+s.a})},lt.readability=function(a,i){var r=lt(a),s=lt(i);return(Math.max(r.getLuminance(),s.getLuminance())+.05)/(Math.min(r.getLuminance(),s.getLuminance())+.05)},lt.isReadable=function(a,i,r){var s,c,h=lt.readability(a,i);switch(c=!1,(s=function(f){var g,p;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:g,size:p}}(r)).level+s.size){case"AAsmall":case"AAAlarge":c=h>=4.5;break;case"AAlarge":c=h>=3;break;case"AAAsmall":c=h>=7}return c},lt.mostReadable=function(a,i,r){var s,c,h,f,g=null,p=0;c=(r=r||{}).includeFallbackColors,h=r.level,f=r.size;for(var d=0;d<i.length;d++)(s=lt.readability(a,i[d]))>p&&(p=s,g=lt(i[d]));return lt.isReadable(a,g,{level:h,size:f})||!c?g:(r.includeFallbackColors=!1,lt.mostReadable(a,["#fff","#000"],r))};var Of=lt.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},aS=lt.hexNames=function(a){var i={};for(var r in a)a.hasOwnProperty(r)&&(i[a[r]]=r);return i}(Of);function F1(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function ne(a,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var r=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(a);return a=Math.min(i,Math.max(0,parseFloat(a))),r&&(a=parseInt(a*i,10)/100),Math.abs(a-i)<1e-6?1:a%i/parseFloat(i)}function Ds(a){return Math.min(1,Math.max(0,a))}function hn(a){return parseInt(a,16)}function Cn(a){return a.length==1?"0"+a:""+a}function Sr(a){return a<=1&&(a=100*a+"%"),a}function J1(a){return Math.round(255*parseFloat(a)).toString(16)}function rg(a){return hn(a)/255}var Ba,ls,ss,wn=(ls="[\\s|\\(]+("+(Ba="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ba+")[,|\\s]+("+Ba+")\\s*\\)?",ss="[\\s|\\(]+("+Ba+")[,|\\s]+("+Ba+")[,|\\s]+("+Ba+")[,|\\s]+("+Ba+")\\s*\\)?",{CSS_UNIT:new RegExp(Ba),rgb:new RegExp("rgb"+ls),rgba:new RegExp("rgba"+ss),hsl:new RegExp("hsl"+ls),hsla:new RegExp("hsla"+ss),hsv:new RegExp("hsv"+ls),hsva:new RegExp("hsva"+ss),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function oa(a){return!!wn.CSS_UNIT.exec(a)}var Os=function(a,i){var r=(typeof a=="string"?parseInt(a):a)||0;if(r>=-5&&r<=5){var s=r,c=parseFloat(i),h=c+s*(c/5)*-1;return(h==0||h<=Number.EPSILON)&&(h=.1),{animationPeriod:h+"s"}}return{animationPeriod:i}},Es=function(a,i){var r=a||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(r.fontSize){var h=r.fontSize;c=function(f,g){var p={};for(var d in f)Object.prototype.hasOwnProperty.call(f,d)&&g.indexOf(d)<0&&(p[d]=f[d]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(d=Object.getOwnPropertySymbols(f);y<d.length;y++)g.indexOf(d[y])<0&&Object.prototype.propertyIsEnumerable.call(f,d[y])&&(p[d[y]]=f[d[y]])}return p}(r,["fontSize"]),s=h}return{fontSize:s,styles:c}},iS={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ms=function(a){var i=a.className,r=a.text,s=a.textColor,c=a.staticText,h=a.style;return r?Ht.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:Zt(Zt(Zt({},c&&iS),s&&{color:s,mixBlendMode:"unset"}),h&&h)},typeof r=="string"&&r.length?r:"loading"):null},Lr="rgb(50, 205, 50)";function ws(a,i){if(i===void 0&&(i=0),a.length===0)throw new Error("Input array cannot be empty!");var r=[];return function s(c,h){return h===void 0&&(h=0),r.push.apply(r,c),r.length<h&&s(r,h),r.slice(0,h)}(a,i)}Oe(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);lt(Lr).toRgb();Array.from({length:4},function(a,i){return"--atom-phase".concat(i+1,"-rgb")});Oe(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--commet-phase".concat(i+1,"-color")});Oe(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--OP-annulus-phase".concat(i+1,"-color")});function nf(a){return a&&a.Math===Math&&a}Oe(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);nf(typeof window=="object"&&window)||nf(typeof self=="object"&&self)||nf(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,i){return"--OP-dotted-phase".concat(i+1,"-color")});Oe(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--OP-spokes-phase".concat(i+1,"-color")});Oe(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(a,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")});Oe(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]});Oe(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--four-square-phase".concat(i+1,"-color")});Oe(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--mosaic-phase".concat(i+1,"-color")});Oe(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--riple-phase".concat(i+1,"-color")});Oe(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var to=Array.from({length:4},function(a,i){return"--TD-pulsate-phase".concat(i+1,"-color")}),oS=function(a){var i,r=Es(a?.style,a?.size),s=r.styles,c=r.fontSize,h=a?.easing,f=Os(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var d={};if(p instanceof Array){for(var y=ws(p,to.length),v=0;v<y.length&&!(v>=4);v++)d[to[v]]=y[v];return d}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<to.length;x++)d[to[x]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),x=0;x<to.length;x++)d[to[x]]=Lr}return d}((i=a?.color)!==null&&i!==void 0?i:"");return Ht.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Zt(Zt(Zt(Zt(Zt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),h&&{"--rli-animation-function":h}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ht.createElement("span",{className:"rli-d-i-b pulsate-indicator"},Ht.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Ht.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Ht.createElement("span",{className:"rli-d-i-b pulsate-dot"})),Ht.createElement(Ms,{staticText:!0,text:a?.text,textColor:a?.textColor}))};Oe(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var eo=Array.from({length:4},function(a,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}),rS=function(a){var i,r=Es(a?.style,a?.size),s=r.styles,c=r.fontSize,h=a?.easing,f=Os(a?.speedPlus,"1s").animationPeriod,g=function(p){var d={};if(p instanceof Array){for(var y=ws(p,eo.length),v=0;v<y.length&&!(v>=4);v++)d[eo[v]]=y[v];return d}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<eo.length;x++)d[eo[x]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),x=0;x<eo.length;x++)d[eo[x]]=Lr}return d}((i=a?.color)!==null&&i!==void 0?i:"");return Ht.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Zt(Zt(Zt(Zt(Zt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),h&&{"--rli-animation-function":h}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ht.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},Ht.createElement("span",{className:"rli-d-i-b brick-stack"})),Ht.createElement(Ms,{staticText:!0,text:a?.text,textColor:a?.textColor}))};Oe(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var no=Array.from({length:4},function(a,i){return"--TD-bob-phase".concat(i+1,"-color")}),lS=function(a){var i,r=Es(a?.style,a?.size),s=r.styles,c=r.fontSize,h=a?.easing,f=Os(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var d={};if(p instanceof Array){for(var y=ws(p,no.length),v=0;v<y.length&&!(v>=4);v++)d[no[v]]=y[v];return d}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<no.length;x++)d[no[x]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),x=0;x<no.length;x++)d[no[x]]=Lr}return d}((i=a?.color)!==null&&i!==void 0?i:"");return Ht.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Zt(Zt(Zt(Zt(Zt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),h&&{"--rli-animation-function":h}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ht.createElement("span",{className:"bob-indicator"},Ht.createElement("span",{className:"bobbing"})),Ht.createElement(Ms,{staticText:!0,text:a?.text,textColor:a?.textColor}))};Oe(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var ao=Array.from({length:4},function(a,i){return"--TD-bounce-phase".concat(i+1,"-color")}),sS=function(a){var i,r=Es(a?.style,a?.size),s=r.styles,c=r.fontSize,h=a?.easing,f=Os(a?.speedPlus,"0.5s").animationPeriod,g=function(p){var d={};if(p instanceof Array){for(var y=ws(p,ao.length),v=0;v<y.length&&!(v>=4);v++)d[ao[v]]=y[v];return d}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<ao.length;x++)d[ao[x]]=p}catch{for(x=0;x<ao.length;x++)d[ao[x]]=Lr}return d}((i=a?.color)!==null&&i!==void 0?i:"");return Ht.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Zt(Zt(Zt(Zt(Zt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),h&&{"--rli-animation-function":h}),g),s)},Ht.createElement("span",{className:"wrapper"},Ht.createElement("span",{className:"group"},Ht.createElement("span",{className:"rli-d-i-b dot"}),Ht.createElement("span",{className:"rli-d-i-b dot"}),Ht.createElement("span",{className:"rli-d-i-b dot"})),Ht.createElement("span",{className:"group"},Ht.createElement("span",{className:"rli-d-i-b shadow"}),Ht.createElement("span",{className:"rli-d-i-b shadow"}),Ht.createElement("span",{className:"rli-d-i-b shadow"}))),Ht.createElement(Ms,{staticText:!0,text:a?.text,textColor:a?.textColor,style:{marginTop:"2px"}}))},lg=function(a){var i=Object(a).variant,r=i===void 0?"pulsate":i;return r==="pulsate"?Ht.createElement(oS,Zt({},a)):r==="brick-stack"?Ht.createElement(rS,Zt({},a)):r==="bob"?Ht.createElement(lS,Zt({},a)):r==="bounce"?Ht.createElement(sS,Zt({},a)):null};Oe(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--shape-phase".concat(i+1,"-color")});Oe(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--trophySpin-phase".concat(i+1,"-color")});Oe(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--slab-phase".concat(i+1,"-color")});Oe(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(a,i){return"--life-line-phase".concat(i+1,"-color")});const sg="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20width='124'%20height='346'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3c!--%20Created%20with%20SVG-edit%20-%20https://github.com/SVG-Edit/svgedit--%3e%3cg%20class='layer'%3e%3ctitle%3eLayer%201%3c/title%3e%3cpath%20d='m5,79.76l57,-74.77l57,74.77l-28.5,0l0,75.13l-57,0l0,-75.13z'%20fill='%23000000'%20fill-opacity='0'%20id='svg_4'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='13'%20transform='rotate(180%2062.0005%2079.9424)'/%3e%3cpath%20d='m5,265.76l57,-74.77l57,74.77l-28.5,0l0,75.13l-57,0l0,-75.13z'%20fill='%23000000'%20fill-opacity='0'%20id='svg_6'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='13'/%3e%3c/g%3e%3c/svg%3e",uS=({startX:a,startY:i,endX:r,endY:s})=>T.jsx(Gt.line,{x1:a,y1:i,x2:r,y2:s,className:"active-connection",markerEnd:"url(#arrowhead)",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2}}),W1=({x:a,y:i,sumText:r})=>T.jsxs("g",{children:[T.jsx("line",{x1:a-25,y1:i-5,x2:a+25,y2:i-5,stroke:"#ffffff",strokeWidth:"1"}),T.jsx("text",{x:a,y:i-10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1"}),T.jsx("text",{x:a-10,y:i+10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1 + e"}),T.jsxs("text",{x:a+8,y:i+5,fill:"#ffffff",fontSize:"8px",textAnchor:"start",children:["-",r]})]}),cS=({connection:a,neurons:i,neuronRadius:r,neuronTransforms:s,isGlowing:c,emphasizedConnections:h,showForwardPassVisuals:f,inputData:g,currentSampleIndex:p,neuronHeaders:d,hiddenWeights:y,inputNeurons:v,hiddenNeurons:x,hiddenBiases:E,outputWeights:w,outputBiases:M,showSigmoidPhase:L,outputNeurons:V,isEraserMode:B,onEraseConnection:k,eraserHoveredConnection:Z,setEraserHoveredConnection:j})=>{const K=i.find(ht=>ht.id===a.fromNeuronId),J=i.find(ht=>ht.id===a.toNeuronId);if(!K||!J)return null;const G=Z===a.id,et=h.includes(a.id),ct=f?et?1:.3:1,wt=s[a.fromNeuronId]||{x:0,y:0},Ut=s[a.toNeuronId]||{x:0,y:0},pe=K.x+wt.x,ie=K.y+wt.y,qt=J.x+Ut.x,_=J.y+Ut.y,F=(ht,Xt,kt,Ct)=>{switch(Xt){case"top":return{x:kt,y:Ct-r};case"right":return{x:kt+r,y:Ct};case"bottom":return{x:kt,y:Ct+r};case"left":return{x:kt-r,y:Ct};default:return{x:kt,y:Ct}}},I=F(K,a.fromDirection,pe,ie),yt=F(J,a.toDirection,qt,_),A=(I.x+yt.x)/2;let H=(I.y+yt.y)/2;const tt=Math.atan2(yt.y-I.y,yt.x-I.x)*(180/Math.PI),$=()=>{if(!f||!g[p]||!h.includes(a.id))return null;const ht=d[K.label]||K.label,Xt=d[J.label]||J.label;if(K.type==="input"&&J.type==="hidden"){const kt=parseFloat(g[p][ht])||0,Ct=y[`${ht}-${Xt}`]||0,ce=E[Xt]||0,st=kt*Ct+ce;return`${kt} × ${Ct.toFixed(1)} + ${ce.toFixed(1)} = ${st.toFixed(1)}`}if(K.type==="hidden"&&J.type==="output"){const[kt,Ct]=it(ht,Xt),ce=(kt*Ct).toFixed(1);return`${kt.toFixed(0)} × ${Ct.toFixed(1)} = ${ce}`}return K.type==="output"&&J.type==="display"&&a.isSigmoidConnection,null},it=(ht,Xt)=>{let kt=0;v.forEach(_t=>{const Wt=d[_t.label]||_t.label,Ye=parseFloat(g[p][Wt])||0,ge=y[`${Wt}-${ht}`]||0;kt+=Ye*ge});const Ct=E[ht]||0,ce=kt+Ct,st=Math.max(0,ce),Dt=w[`${ht}-${Xt}`]||0;return[st,Dt]},Tt=()=>{if(!(K.type==="output"&&J.type==="display"&&a.isSigmoidConnection))return null;H-=20;const ht=d[K.label]||K.label;let Xt=0;x.forEach(ce=>{const[st,Dt]=it(ht,ce);Xt+=st*Dt});const kt=M[ht]||0;Xt+=kt;const Ct=Xt.toFixed(1);return T.jsx(W1,{x:A,y:H,sumText:Ct})},ft=(ht,Xt,kt)=>{let Ct=-1;for(let Dt=0;Dt<ht&&(Ct=kt.indexOf(" ",Ct+1),Ct!==-1);Dt++);const ce=kt.slice(0,Ct),st=kt.slice(Ct);return T.jsxs(T.Fragment,{children:[ce,T.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:Xt}),st]})};function Jt(ht,Xt="11px Segoe UI"){const Ct=document.createElement("canvas").getContext("2d");return Ct.font=Xt,Ct.measureText(ht).width+16}let St=$(),dt="11px";if(St){const ht=Math.sqrt(Math.pow(yt.x-I.x,2)+Math.pow(yt.y-I.y,2));Jt(St)>ht&&(dt="9px",console.log("too big")),St=ft(3,J.label.toLowerCase(),St)}const At=a.isAnimating?"active-connection":c?"completed-connection glowing-connection":"completed-connection";return T.jsxs("g",{children:[T.jsx(Gt.line,{x1:I.x,y1:I.y,x2:yt.x,y2:yt.y,className:At,markerEnd:a.isAnimating?void 0:"url(#arrowhead)",initial:a.isAnimating?{pathLength:0}:{pathLength:1,opacity:ct},animate:a.isAnimating?{pathLength:1,opacity:ct}:{opacity:ct,stroke:B&&G?"#ef4444":"#ffffff"},transition:a.isAnimating?{duration:.6,ease:"easeInOut"}:{duration:.2},style:{cursor:B?"crosshair":"default"},onMouseEnter:()=>{B&&j(a.id)},onMouseLeave:()=>{B&&j(null)},onClick:ht=>{B&&(ht.stopPropagation(),k(a.id))}}),St&&T.jsx(Gt.text,{x:A,y:H-8,className:"formula-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{fontSize:dt,fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},transform:`rotate(${tt}, ${A}, ${H-8})`,children:St}),h.includes(a.id)&&T.jsx(Gt.g,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:Tt()})]})},fS=({x:a,y:i,neuronId:r,direction:s,onStartConnection:c,isHighlighted:h=!1})=>T.jsx(Gt.circle,{cx:a,cy:i,r:4,className:`connection-dot ${h?"connection-dot-highlighted":""}`,onClick:f=>{f.stopPropagation(),c(r,s,a,i,f)},whileHover:{scale:1.2},initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2},style:{cursor:"pointer"}}),hS=({id:a,x:i,y:r,radius:s,label:c,type:h,onDragEnd:f,onStartConnection:g,highlightedDots:p=[],onDragUpdate:d,isGlowing:y,neurons:v,showForwardPassVisuals:x,emphasizedConnections:E,hiddenNeurons:w,inputNeurons:M,outputNeurons:L,neuronHeaders:V,hiddenWeights:B,outputWeights:k,inputData:Z,currentSampleIndex:j,hiddenBiases:K,connections:J,showSigmoidPhase:G,outputBiases:et,isEraserMode:ct,onEraseNeuron:wt,eraserHoveredNeuron:Ut,setEraserHoveredNeuron:pe})=>{const[ie,qt]=P.useState(!1),[_,F]=P.useState(!1),I=Ut===a,yt=ct&&I?.5:1,A=h==="hidden"&&x&&Z[j],H=v.find(st=>st.id===a),tt=x&&(H?.type==="input"||H?.type==="hidden"&&J.some(st=>E.includes(st.id)&&(st.fromNeuronId===a||st.toNeuronId===a))||H?.type==="output"&&(E.some(st=>{const Dt=J.find(_t=>_t.id===st);return Dt&&Dt.toNeuronId===a})||G)||H?.type==="display"),$=x&&!tt?.3:1,it=st=>{const Dt="neuron",_t=st==="input"?"neuron-input":st==="hidden"?"neuron-hidden":st==="output"?"neuron-output":st.startsWith("hidden")?"neuron-hidden":"neuron";return y?`${Dt} ${_t} glowing-neuron`:`${Dt} ${_t}`},ft=(st=>{const Dt=V[st.label]||st.label,_t=[];return st.type==="hidden"?M.forEach(Wt=>{const Ye=V[Wt.label]||Wt.label,ge=B[`${Ye}-${Dt}`]||0;_t.push(ge)}):st.type==="output"&&w.forEach(Wt=>{const Ye=V[Wt.label]||Wt.label,ge=k[`${Ye}-${Dt}`]||0;_t.push(ge)}),_t})(H||{type:h,label:c}),Jt=ft.length>0?`[${ft.map(st=>st.toFixed(1)).join(", ")}]`:"",St=()=>{if(h==="input"&&x&&Z[j]){const st=V[c]||c;return Z[j][st]||""}return""},dt=()=>{if(A){const st=V[c]||c;if(J.some(_t=>E.includes(_t.id)&&_t.toNeuronId===a&&M.some(Wt=>Wt.id===_t.fromNeuronId))){let _t=0;M.forEach(ge=>{const sa=V[ge.label]||ge.label,Rn=parseFloat(Z[j][sa])||0,ua=B[`${sa}-${st}`]||0;_t+=Rn*ua});const Wt=K[st]||0;return(_t+Wt).toFixed(1)}}return""},At=st=>{const Dt=[];return w.forEach(_t=>{const Wt=V[_t.label]||_t.label;let Ye=0;M.forEach(Hn=>{const Ee=V[Hn.label]||Hn.label,Re=parseFloat(Z[j][Ee])||0,Ne=B[`${Ee}-${Wt}`]||0;Ye+=Re*Ne});const ge=K[Wt]||0,sa=Ye+ge,Rn=Math.max(0,sa),ua=k[`${Wt}-${st}`]||0,yo=Rn*ua;Dt.push(yo.toFixed(1))}),Dt},ht=()=>{if(h==="output"&&x&&G&&Z[j]){const st=V[c]||c,Dt=At(st),_t=et[st]||0;return`${Dt.join(" + ")} + ${_t.toFixed(1)}`}return""},Xt=()=>{if(h==="output"&&x&&G&&Z[j]){const st=V[c]||c;let _t=At(st).reduce((Ye,ge)=>Ye+parseFloat(ge),0);const Wt=et[st]||0;return _t+=Wt,_t.toFixed(1)}return""},kt=[{direction:"top",x:0,y:-s},{direction:"right",x:s,y:0},{direction:"bottom",x:0,y:s},{direction:"left",x:-s,y:0}],Ct=()=>{ie||(F(!0),ct&&pe(a))},ce=()=>{F(!1),ct&&pe(null)};return T.jsxs(Gt.g,{drag:!0,dragMomentum:!1,dragElastic:.1,initial:{x:i,y:r},animate:{x:i,y:r,opacity:$},onDragStart:()=>{qt(!0),F(!1)},onDrag:(st,Dt)=>{d(a,Dt.offset.x,Dt.offset.y)},onDragEnd:(st,Dt)=>{qt(!1);const _t=i+Dt.offset.x,Wt=r+Dt.offset.y;f(a,_t,Wt),d(a,0,0)},whileDrag:{scale:1.1},onMouseEnter:Ct,onMouseLeave:ce,style:{cursor:ie?"grabbing":"default"},children:[T.jsx("circle",{cx:0,cy:0,r:s+20,fill:"transparent",style:{pointerEvents:"all",cursor:"default"}}),T.jsx(Gt.circle,{cx:0,cy:0,r:s,className:it(h),initial:{scale:0,opacity:0},animate:{scale:1,opacity:yt,stroke:ct&&I?"#ef4444":void 0,strokeWidth:ct&&I?3:void 0},transition:{duration:.6,type:"spring"},style:{cursor:ct?"crosshair":ie?"grabbing":"grab"},onClick:st=>{st.button===0&&ct&&(st.stopPropagation(),wt(a))}}),(A||h==="output"&&G)&&T.jsx("rect",{x:-23,y:-9,width:46,height:18,rx:3,fill:"rgb(6, 129, 0)",stroke:"#22c55e",strokeWidth:2}),T.jsx(Gt.text,{x:0,y:5,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},children:A?"ReLU":h==="output"&&G?"Sig":c}),Jt&&!(h==="output"&&G)&&T.jsx(Gt.text,{x:0,y:-s-10,className:dt()?"neuron-text":"neuron-weights-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:dt()||Jt}),h==="output"&&G&&ht()&&T.jsxs(Gt.text,{x:0,y:-s-25,className:"formula-text",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[ht(),T.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:"b2"})]}),h==="output"&&G&&Xt()&&T.jsx(Gt.text,{x:0,y:-s-10,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.5},children:Xt()}),h==="input"&&x&&St()&&T.jsx(Gt.text,{x:0,y:-s*1.3,className:"input-value-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},children:St()}),T.jsx(fs,{children:_&&!ie&&kt.map(st=>T.jsx(fS,{x:st.x,y:st.y,neuronId:a,direction:st.direction,onStartConnection:g,isHighlighted:p.includes(st.direction)},st.direction))})]})},wr=(a,i)=>{const r=a.length,s=a[0].length,c=i[0].length,h=Array(r).fill().map(()=>Array(c).fill(0));for(let f=0;f<r;f++)for(let g=0;g<c;g++)for(let p=0;p<s;p++)h[f][g]+=a[f][p]*i[p][g];return h},ug=(a,i)=>a.map(r=>r.map((s,c)=>s+(i[c]||0))),dS=a=>a.map(i=>i.map(r=>Math.max(0,r))),mS=a=>a.map(i=>i.map(r=>1/(1+Math.exp(-r)))),pS=(a,i)=>a.map((s,c)=>{const h=Math.max(1e-15,Math.min(.999999999999999,i[c]));return-(s*Math.log(h)+(1-s)*Math.log(1-h))}),af=a=>!a||!a[0]?[]:a[0].map((i,r)=>a.map(s=>s[r])),Ef=(a,i,r,s,c,h,f,g,p)=>{const d=a.filter(y=>{const v=i.some(E=>y[E.label]&&y[E.label].trim()!==""),x=y.Truth!==void 0&&y.Truth!=="";return v&&x});if(d.length===0){alert("Please add input data with truth values");return}if(r.length===0||s.length===0){alert("Please add hidden and output neurons");return}try{const y=d.map(G=>i.map(et=>parseFloat(G[et.label])||0)),v=d.map(G=>parseFloat(G.Truth)||0),x=i.map(G=>r.map(et=>{const ct=c[G.label]||G.label,wt=c[et.label]||et.label;return h[`${ct}-${wt}`]||0})),E=r.map(G=>{const et=c[G.label]||G.label;return f[et]||0}),w=r.map(G=>s.map(et=>{const ct=c[G.label]||G.label,wt=c[et.label]||et.label;return g[`${ct}-${wt}`]||0})),M=s.map(G=>{const et=c[G.label]||G.label;return p[et]||0}),L=wr(y,x),V=ug(L,E),B=dS(V),k=wr(B,w),Z=ug(k,M),j=mS(Z),K=j.map(G=>G[0]),J=pS(v,K);return{predictions:K,truthValues:v,losses:J,matrices:[y,x,E,w,M,L,V,B,k,Z,j]}}catch(y){console.error("Error in forward pass:",y),console.error("Error stack:",y.stack),alert("Error in calculation. Please check your inputs and weights.")}},cg=(a,i,r,s,c,h,f,g,p,d=.01)=>{const y=a.filter(v=>{const x=i.some(w=>v[w.label]&&v[w.label].trim()!==""),E=v.Truth!==void 0&&v.Truth!=="";return x&&E});if(y.length===0)return alert("Please add input data with truth values"),null;try{const v=Ef(a,i,r,s,c,h,f,g,p),[x,E,w,M,L,V,B,k,Z,j,K]=v.matrices,J=v.truthValues,G=v.predictions,et=y.length,ct=K.map((dt,At)=>[G[At]-J[At]]),wt=K.map((dt,At)=>[ct[At][0]*G[At]*(1-G[At])]),Ut=af(k),pe=wr(Ut,wt).map(dt=>dt.map(At=>At/et)),ie=[wt.reduce((dt,At)=>dt+At[0],0)/et],qt=af(M),_=wr(wt,qt),F=B.map((dt,At)=>dt.map((ht,Xt)=>ht>0?_[At][Xt]:0)),I=af(x),yt=wr(I,F).map(dt=>dt.map(At=>At/et)),A=F[0].map((dt,At)=>F.reduce((ht,Xt)=>ht+Xt[At],0)/et),H=E.map((dt,At)=>dt.map((ht,Xt)=>ht-d*yt[At][Xt])),tt=w.map((dt,At)=>dt-d*A[At]),$=M.map((dt,At)=>dt.map((ht,Xt)=>ht-d*pe[At][Xt])),it=L.map((dt,At)=>dt-d*ie[At]),Tt={},ft={},Jt={},St={};return i.forEach((dt,At)=>{r.forEach((ht,Xt)=>{const kt=c[dt.label]||dt.label,Ct=c[ht.label]||ht.label;Tt[`${kt}-${Ct}`]=H[At][Xt]})}),r.forEach((dt,At)=>{const ht=c[dt.label]||dt.label;ft[ht]=tt[At]}),r.forEach((dt,At)=>{s.forEach((ht,Xt)=>{const kt=c[dt.label]||dt.label,Ct=c[ht.label]||ht.label;Jt[`${kt}-${Ct}`]=$[At][Xt]})}),s.forEach((dt,At)=>{const ht=c[dt.label]||dt.label;St[ht]=it[At]}),{newHiddenWeights:Tt,newHiddenBiases:ft,newOutputWeights:Jt,newOutputBiases:St,gradients:{dW1:yt,db1:A,dW2:pe,db2:ie,dA2:ct,dZ2:wt,dA1:_,dZ1:F}}}catch(v){return console.error("Error in backpropagation:",v),alert("Error in backpropagation calculation. Please check your inputs."),null}},fg=({title:a,neurons:i,data:r,setData:s,onHeaderChange:c,onCellHover:h,isOutput:f=!1,truthValues:g=[],predictions:p=[],losses:d=[],normalizeInputs:y,setNormalizeInputs:v})=>{const x=()=>{f||s(V=>[...V,{}])},E=(V,B,k)=>{f||(s(Z=>{const j=[...Z];return j[V]||(j[V]={}),j[V][B]=k,j}),V===r.length-1&&k.trim()!==""&&x())},w=(V,B,k)=>{B===k||f||(s(Z=>Z.map(j=>{if(j[B]!==void 0){const K={...j};return K[k]=j[B],delete K[B],K}return j})),c(B,k))},M=V=>V<.3?"#22c55e":V<.7?"#eab308":"#ef4444";if(!f&&i.length===0)return null;const L=d.length?(d.reduce((V,B)=>V+(parseFloat(B)||0),0)/d.length).toFixed(4):"";return T.jsxs("div",{className:"input-table-container",children:[T.jsxs("div",{style:{position:"relative"},children:[T.jsx("h3",{className:"table-title",style:{display:"inline-block"},children:a}),f&&T.jsx("span",{style:{color:L<1?"#000":"#fff",background:L?M(L):"transparent",marginLeft:"10px"},className:"cell-input",title:"Average Loss",children:L}),!f&&T.jsxs("label",{className:"button-border",style:{padding:"0.2rem 0.5rem",alignItems:"center",gap:"0.5rem",marginLeft:"10px",cursor:"pointer"},children:[T.jsx("input",{type:"checkbox",checked:y,onChange:V=>v(V.target.checked),className:"eraser-checkbox",style:{width:"12px",height:"12px",accentColor:"#52ef44"}}),T.jsx("span",{className:"eraser-label",style:{marginLeft:"5px",fontSize:"1rem"},children:"Normalize"})]})]}),T.jsx("div",{className:"table-scroll-wrapper",style:{maxHeight:"14.7rem",maxWidth:"350px"},children:T.jsxs("table",{className:"neural-table input-table",children:[T.jsx("thead",{children:T.jsxs("tr",{children:[T.jsx("th",{className:"sample-column",style:{},children:T.jsx("input",{type:"text",className:"header-input",value:"#",readOnly:!0})}),T.jsx("th",{className:"truth-column-narrow",style:{},children:T.jsx("input",{type:"text",className:"header-input",value:"T",readOnly:!0})}),!f&&i.map(V=>T.jsx("th",{children:T.jsx("input",{type:"text",className:"header-input",value:V.label,onChange:B=>w(V.id,V.label,B.target.value||V.label),onKeyDown:B=>{B.key==="Enter"&&B.target.blur()}})},V.id)),f&&T.jsxs(T.Fragment,{children:[T.jsx("th",{children:T.jsx("input",{type:"text",className:"header-input",value:"ŷ",readOnly:!0})}),T.jsx("th",{children:T.jsx("input",{type:"text",className:"header-input",value:"Loss",readOnly:!0})})]})]})}),T.jsx("tbody",{children:(f?g:r).map((V,B)=>T.jsxs("tr",{children:[T.jsx("td",{className:"sample-column",children:T.jsx("input",{type:"text",className:"cell-input",value:B+1,readOnly:!0})}),T.jsx("td",{className:"truth-column-narrow",children:T.jsx("input",{type:"text",className:"cell-input",value:f?g[B]:V.Truth||"",onChange:f?void 0:k=>{const Z=k.target.value;(Z===""||Z==="0"||Z==="1")&&E(B,"Truth",Z)},placeholder:"0",min:"0",max:"1",step:"1",readOnly:f})}),!f&&i.map(k=>T.jsx("td",{children:T.jsx("input",{type:"text",className:"cell-input",value:V[k.label]||"",onChange:Z=>E(B,k.label,Z.target.value),onMouseEnter:()=>h("neuron",k.label),onMouseLeave:()=>h(null),onFocus:()=>h("neuron",k.label),onBlur:()=>h(null),placeholder:"0",step:"0.1"})},k.id)),f&&T.jsxs(T.Fragment,{children:[T.jsx("td",{children:T.jsx("input",{type:"text",className:"cell-input",value:p[B]||"",readOnly:!0})}),T.jsx("td",{children:T.jsx("input",{type:"text",className:"cell-input",value:d[B]||"",style:{backgroundColor:d[B]?M(d[B]):"transparent",color:d[B]&&d[B]<1?"#000":"#fff"},readOnly:!0})})]})]},B))})]})})]})},hg=({change:a,style:i={},xOffset:r="10px"})=>{if(!a||Math.abs(a)<1e-16)return null;const c=a>0?"change-arrow-up":"change-arrow-down";return T.jsx("div",{className:c,style:{position:"absolute",right:r,top:"50%",transform:"translateY(-50%)"}})},dg=({title:a,inputLabels:i,neuronLabels:r,weights:s,biases:c,onWeightChange:h,onBiasChange:f,onHeaderChange:g,showSaveLoad:p,onSave:d,onLoad:y,onCellHover:v,biasLabel:x="b"})=>{const E=P.useRef({}),w=P.useRef({}),[M,L]=P.useState(!1);P.useEffect(()=>{const k=Object.keys(s).some(j=>{const K=parseFloat(s[j])||0,J=parseFloat(E.current[j])||0;return Math.abs(K-J)>1e-16}),Z=Object.keys(c).some(j=>{const K=parseFloat(c[j])||0,J=parseFloat(w.current[j])||0;return Math.abs(K-J)>1e-16});(k||Z)&&(L(!0),E.current={...s},w.current={...c})},[s,c]),P.useEffect(()=>{E.current={...s},w.current={...c}});const V=(k,Z)=>{const j=`${k}-${Z}`,K=parseFloat(s[j])||0,J=parseFloat(E.current[j])||0;return K-J},B=k=>{const Z=parseFloat(c[k])||0,j=parseFloat(w.current[k])||0;return Z-j};return r.length===0?null:T.jsxs("div",{className:"weights-table-container",children:[T.jsx("h3",{className:"table-title",style:{marginRight:"30px"},children:a}),T.jsx("div",{className:"table-scroll-wrapper",style:{maxHeight:"235px",maxWidth:"350px"},children:T.jsxs("table",{className:"neural-table weights-table",children:[T.jsxs("thead",{children:[T.jsxs("tr",{children:[T.jsx("th",{className:"bias-label",children:x}),r.map((k,Z)=>T.jsxs("th",{style:{position:"relative"},children:[T.jsx("input",{type:"number",className:"bias-input",value:c[k]||"",onChange:j=>f(k,j.target.value),onMouseEnter:()=>v("neuron",k),onMouseLeave:()=>v(null),onFocus:()=>v("neuron",k),onBlur:()=>v(null),placeholder:"0.5",step:"0.1"}),M&&T.jsx(hg,{change:B(k),xOffset:"17px"})]},Z))]}),T.jsxs("tr",{children:[T.jsx("th",{}),r.map((k,Z)=>T.jsx("th",{children:T.jsx("input",{type:"text",className:"header-input",defaultValue:k,onBlur:j=>g(k,j.target.value||k),onKeyDown:j=>{j.key==="Enter"&&j.target.blur()}})},Z))]})]}),T.jsx("tbody",{children:i.map((k,Z)=>T.jsxs("tr",{children:[T.jsx("td",{className:"row-header",children:k}),r.map((j,K)=>T.jsxs("td",{style:{position:"relative"},children:[T.jsx("input",{type:"number",className:"cell-input",value:s[`${k}-${j}`]||"",onChange:J=>h(k,j,J.target.value),onMouseEnter:()=>v("connection",k,j),onMouseLeave:()=>v(null),onFocus:()=>v("connection",k,j),onBlur:()=>v(null),placeholder:"0.1",step:"0.1"}),M&&T.jsx(hg,{change:V(k,j)})]},K))]},Z))})]})})]})},$1=(a,i)=>a==="input"?`X${i}`:a==="hidden"?`H${i}`:a.startsWith("hidden")?`H${parseInt(a.replace("hidden",""))}${i}`:`Y${i}`,gS=(a,i,r,s,c)=>{let h;a==="input"?h=200:a==="hidden"?h=400:a.startsWith("hidden")?h=400+((parseInt(a.replace("hidden",""))||1)-1)*100:h=400+r*100+100;const f=s-100-90*(i-1);return{x:h,y:f}},yS=(a,i,r,s,c)=>{const{x:h,y:f}=gS(a,i,r,s);return{id:`${a}-${Date.now()}`,x:h,y:f,radius:c,label:$1(a,i),type:a}},bS=(a,i,r,s,c,h,f)=>{const g=i[a]+1,p=yS(a,g,c,h,f);r(d=>{const y=[...d,p],v=y.filter(x=>x.type===a).sort((x,E)=>x.y-E.y);return y.map(x=>{if(x.type===a){const E=v.findIndex(w=>w.id===x.id);return{...x,label:$1(a,E+1)}}return x})}),s(d=>({...d,[a]:g}))},vS=async(a,i,r)=>{r(!0);const s=a.filter(d=>d.type==="input").sort((d,y)=>d.y-y.y),c=a.filter(d=>d.type==="hidden"||d.type.startsWith("hidden")).sort((d,y)=>d.x-y.x||d.y-y.y),h=a.filter(d=>d.type==="output").sort((d,y)=>d.y-y.y);if(s.length===0||c.length===0)return;const f={};c.forEach(d=>{const y=d.x;f[y]||(f[y]=[]),f[y].push(d)});const g=Object.keys(f).map(Number).sort(),p=[];if(g.length>0){const d=f[g[0]],y=[];for(const v of s)for(const x of d)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}for(let d=0;d<g.length-1;d++){const y=f[g[d]],v=f[g[d+1]],x=[];for(const E of y)for(const w of v)x.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:E.id,toNeuronId:w.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(x)}if(h.length>0&&g.length>0){const d=f[g[g.length-1]],y=[];for(const v of d)for(const x of h)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}p.forEach((d,y)=>{setTimeout(()=>{i(v=>[...v,...d]),setTimeout(()=>{i(v=>v.map(x=>d.some(E=>E.id===x.id)?{...x,isAnimating:!1}:x))},600)},100+y*700)})},mg=`
{
  "inputData": [
    {"X1": "58", "X2": "69", "Truth": "0"},
    {"X1": "78", "X2": "71", "Truth": "1"},
    {"X1": "68", "X2": "71", "Truth": "0"},
    {"X1": "83", "X2": "75", "Truth": "1"},
    {"X1": "75", "X2": "66", "Truth": "0"},
    {"X1": "81", "X2": "83", "Truth": "1"},
    {"X1": "82", "X2": "57", "Truth": "0"},
    {"X1": "93", "X2": "75", "Truth": "1"},
    {"X1": "99", "X2": "77", "Truth": "1"},
    {"X1": "79", "X2": "85", "Truth": "1"},
    {"X1": "75", "X2": "72", "Truth": "1"},
    {"X1": "92", "X2": "69", "Truth": "1"},
    {"X1": "74", "X2": "80", "Truth": "1"},
    {"X1": "60", "X2": "73", "Truth": "0"},
    {"X1": "75", "X2": "77", "Truth": "1"},
    {"X1": "56", "X2": "78", "Truth": "0"},
    {"X1": "90", "X2": "55", "Truth": "0"},
    {"X1": "74", "X2": "80", "Truth": "1"},
    {"X1": "78", "X2": "72", "Truth": "1"},
    {"X1": "71", "X2": "47", "Truth": "0"},
    {"X1": "88", "X2": "81", "Truth": "1"},
    {"X1": "93", "X2": "61", "Truth": "1"},
    {"X1": "74", "X2": "69", "Truth": "0"},
    {"X1": "64", "X2": "73", "Truth": "0"},
    {"X1": "69", "X2": "75", "Truth": "1"},
    {"X1": "63", "X2": "71", "Truth": "0"},
    {"X1": "54", "X2": "63", "Truth": "0"},
    {"X1": "75", "X2": "70", "Truth": "1"},
    {"X1": "81", "X2": "78", "Truth": "1"},
    {"X1": "78", "X2": "65", "Truth": "0"},
    {"X1": "68", "X2": "76", "Truth": "1"},
    {"X1": "76", "X2": "69", "Truth": "1"},
    {"X1": "80", "X2": "59", "Truth": "0"},
    {"X1": "76", "X2": "54", "Truth": "0"},
    {"X1": "72", "X2": "74", "Truth": "1"},
    {"X1": "86", "X2": "73", "Truth": "1"},
    {"X1": "98", "X2": "69", "Truth": "1"},
    {"X1": "70", "X2": "72", "Truth": "0"},
    {"X1": "50", "X2": "62", "Truth": "0"},
    {"X1": "91", "X2": "67", "Truth": "1"},
    {"X1": "74", "X2": "74", "Truth": "1"},
    {"X1": "73", "X2": "74", "Truth": "1"},
    {"X1": "70", "X2": "47", "Truth": "0"},
    {"X1": "73", "X2": "77", "Truth": "1"},
    {"X1": "65", "X2": "80", "Truth": "1"},
    {"X1": "70", "X2": "56", "Truth": "0"},
    {"X1": "82", "X2": "79", "Truth": "1"},
    {"X1": "66", "X2": "77", "Truth": "0"},
    {"X1": "69", "X2": "78", "Truth": "1"},
    {"X1": "77", "X2": "60", "Truth": "0"},
    {"X1": "68", "X2": "76", "Truth": "1"},
    {"X1": "77", "X2": "86", "Truth": "1"},
    {"X1": "84", "X2": "80", "Truth": "1"},
    {"X1": "74", "X2": "68", "Truth": "0"},
    {"X1": "54", "X2": "71", "Truth": "0"},
    {"X1": "85", "X2": "70", "Truth": "1"},
    {"X1": "78", "X2": "50", "Truth": "0"},
    {"X1": "82", "X2": "80", "Truth": "1"},
    {"X1": "78", "X2": "70", "Truth": "1"},
    {"X1": "79", "X2": "59", "Truth": "0"},
    {"X1": "95", "X2": "58", "Truth": "0"},
    {"X1": "84", "X2": "72", "Truth": "1"},
    {"X1": "79", "X2": "62", "Truth": "0"},
    {"X1": "68", "X2": "63", "Truth": "0"},
    {"X1": "73", "X2": "64", "Truth": "0"},
    {"X1": "64", "X2": "60", "Truth": "0"},
    {"X1": "80", "X2": "69", "Truth": "1"},
    {"X1": "73", "X2": "46", "Truth": "0"},
    {"X1": "69", "X2": "58", "Truth": "0"},
    {"X1": "59", "X2": "63", "Truth": "0"},
    {"X1": "83", "X2": "67", "Truth": "1"},
    {"X1": "68", "X2": "53", "Truth": "0"},
    {"X1": "70", "X2": "49", "Truth": "0"},
    {"X1": "61", "X2": "84", "Truth": "1"},
    {"X1": "54", "X2": "77", "Truth": "0"},
    {"X1": "64", "X2": "71", "Truth": "0"},
    {"X1": "73", "X2": "77", "Truth": "1"},
    {"X1": "80", "X2": "61", "Truth": "0"},
    {"X1": "87", "X2": "78", "Truth": "1"},
    {"X1": "95", "X2": "64", "Truth": "1"},
    {"X1": "72", "X2": "75", "Truth": "1"},
    {"X1": "94", "X2": "76", "Truth": "1"},
    {"X1": "90", "X2": "61", "Truth": "1"},
    {"X1": "80", "X2": "68", "Truth": "1"},
    {"X1": "78", "X2": "74", "Truth": "1"},
    {"X1": "79", "X2": "60", "Truth": "0"},
    {"X1": "74", "X2": "62", "Truth": "0"},
    {"X1": "85", "X2": "56", "Truth": "0"},
    {"X1": "76", "X2": "80", "Truth": "1"},
    {"X1": "61", "X2": "53", "Truth": "0"},
    {"X1": "52", "X2": "69", "Truth": "0"},
    {"X1": "68", "X2": "64", "Truth": "0"},
    {"X1": "78", "X2": "78", "Truth": "1"},
    {"X1": "77", "X2": "72", "Truth": "1"},
    {"X1": "81", "X2": "32", "Truth": "0"},
    {"X1": "68", "X2": "55", "Truth": "0"},
    {"X1": "77", "X2": "59", "Truth": "0"},
    {"X1": "86", "X2": "79", "Truth": "1"},
    {"X1": "78", "X2": "69", "Truth": "1"},
    {"X1": "85", "X2": "65", "Truth": "1"},
    {"X1": "94", "X2": "65", "Truth": "1"},
    {"X1": "80", "X2": "69", "Truth": "1"},
    {"X1": "64", "X2": "57", "Truth": "0"},
    {"X1": "56", "X2": "69", "Truth": "0"},
    {"X1": "81", "X2": "76", "Truth": "1"},
    {"X1": "56", "X2": "82", "Truth": "0"},
    {"X1": "66", "X2": "67", "Truth": "0"},
    {"X1": "71", "X2": "81", "Truth": "1"},
    {"X1": "87", "X2": "66", "Truth": "1"},
    {"X1": "82", "X2": "49", "Truth": "0"},
    {"X1": "80", "X2": "66", "Truth": "1"},
    {"X1": "69", "X2": "84", "Truth": "1"},
    {"X1": "74", "X2": "72", "Truth": "1"},
    {"X1": "92", "X2": "73", "Truth": "1"},
    {"X1": "87", "X2": "68", "Truth": "1"},
    {"X1": "82", "X2": "90", "Truth": "1"},
    {"X1": "85", "X2": "67", "Truth": "1"},
    {"X1": "89", "X2": "77", "Truth": "1"},
    {"X1": "73", "X2": "75", "Truth": "1"},
    {"X1": "65", "X2": "76", "Truth": "0"},
    {"X1": "74", "X2": "84", "Truth": "1"},
    {"X1": "60", "X2": "65", "Truth": "0"},
    {"X1": "75", "X2": "68", "Truth": "0"},
    {"X1": "80", "X2": "89", "Truth": "1"},
    {"X1": "68", "X2": "80", "Truth": "1"},
    {"X1": "90", "X2": "70", "Truth": "1"},
    {"X1": "85", "X2": "65", "Truth": "1"},
    {"X1": "83", "X2": "65", "Truth": "1"},
    {"X1": "76", "X2": "72", "Truth": "1"},
    {"X1": "62", "X2": "76", "Truth": "0"},
    {"X1": "64", "X2": "77", "Truth": "0"},
    {"X1": "77", "X2": "70", "Truth": "1"},
    {"X1": "76", "X2": "57", "Truth": "0"},
    {"X1": "82", "X2": "67", "Truth": "1"},
    {"X1": "61", "X2": "73", "Truth": "0"},
    {"X1": "67", "X2": "75", "Truth": "0"},
    {"X1": "63", "X2": "65", "Truth": "0"},
    {"X1": "64", "X2": "87", "Truth": "1"},
    {"X1": "72", "X2": "79", "Truth": "1"},
    {"X1": "74", "X2": "68", "Truth": "0"},
    {"X1": "62", "X2": "73", "Truth": "0"},
    {"X1": "63", "X2": "69", "Truth": "0"},
    {"X1": "97", "X2": "53", "Truth": "0"},
    {"X1": "58", "X2": "52", "Truth": "0"},
    {"X1": "70", "X2": "75", "Truth": "1"},
    {"X1": "81", "X2": "72", "Truth": "1"},
    {"X1": "79", "X2": "84", "Truth": "1"},
    {"X1": "56", "X2": "66", "Truth": "0"},
    {"X1": "65", "X2": "85", "Truth": "1"},
    {"X1": "91", "X2": "67", "Truth": "1"},
    {"X1": "81", "X2": "56", "Truth": "0"},
    {"X1": "54", "X2": "48", "Truth": "0"},
    {"X1": "76", "X2": "73", "Truth": "1"},
    {"X1": "73", "X2": "67", "Truth": "0"},
    {"X1": "74", "X2": "61", "Truth": "0"},
    {"X1": "71", "X2": "55", "Truth": "0"},
    {"X1": "52", "X2": "77", "Truth": "0"},
    {"X1": "69", "X2": "61", "Truth": "0"},
    {"X1": "76", "X2": "71", "Truth": "1"},
    {"X1": "54", "X2": "79", "Truth": "0"},
    {"X1": "75", "X2": "61", "Truth": "0"},
    {"X1": "84", "X2": "72", "Truth": "1"},
    {"X1": "86", "X2": "75", "Truth": "1"},
    {"X1": "66", "X2": "66", "Truth": "0"},
    {"X1": "66", "X2": "78", "Truth": "1"},
    {"X1": "83", "X2": "70", "Truth": "1"},
    {"X1": "74", "X2": "75", "Truth": "1"},
    {"X1": "69", "X2": "73", "Truth": "0"},
    {"X1": "91", "X2": "60", "Truth": "0"},
    {"X1": "62", "X2": "56", "Truth": "0"},
    {"X1": "74", "X2": "59", "Truth": "0"},
    {"X1": "77", "X2": "73", "Truth": "1"},
    {"X1": "76", "X2": "65", "Truth": "0"},
    {"X1": "59", "X2": "72", "Truth": "0"},
    {"X1": "91", "X2": "73", "Truth": "1"},
    {"X1": "81", "X2": "66", "Truth": "1"},
    {"X1": "74", "X2": "85", "Truth": "1"},
    {"X1": "71", "X2": "86", "Truth": "1"},
    {"X1": "76", "X2": "55", "Truth": "0"},
    {"X1": "87", "X2": "72", "Truth": "1"},
    {"X1": "88", "X2": "81", "Truth": "1"},
    {"X1": "56", "X2": "74", "Truth": "0"},
    {"X1": "61", "X2": "68", "Truth": "0"},
    {"X1": "65", "X2": "60", "Truth": "0"},
    {"X1": "81", "X2": "89", "Truth": "1"},
    {"X1": "84", "X2": "67", "Truth": "1"},
    {"X1": "53", "X2": "63", "Truth": "0"},
    {"X1": "72", "X2": "78", "Truth": "1"},
    {"X1": "80", "X2": "68", "Truth": "1"},
    {"X1": "74", "X2": "69", "Truth": "0"},
    {"X1": "62", "X2": "69", "Truth": "0"},
    {"X1": "71", "X2": "71", "Truth": "0"},
    {"X1": "60", "X2": "56", "Truth": "0"},
    {"X1": "90", "X2": "78", "Truth": "1"},
    {"X1": "62", "X2": "74", "Truth": "0"},
    {"X1": "88", "X2": "69", "Truth": "1"},
    {"X1": "70", "X2": "68", "Truth": "0"},
    {"X1": "77", "X2": "66", "Truth": "0"},
    {"X1": "74", "X2": "80", "Truth": "1"}
  ],
  "hiddenWeights": {
    "X1-H1": 0.87,
    "X2-H1": -0.55,
    "X1-H2": -0.24,
    "X2-H2": 1.12,
    "X1-H3": -1.05,
    "X2-H3": 0.41
  },
  "hiddenBiases": {
    "H1": 0,
    "H2": 0,
    "H3": 0
  },
  "outputWeights": {
    "H1-Y1": -0.4,
    "H2-Y1": 0.6,
    "H3-Y1": 0.1
  },
  "outputBiases": {
    "Y1": 0
  },
  "neuronHeaders": {},
  "neurons": [
    {
      "id": "input-1755010721062",
      "x": 207.5,
      "y": 250,
      "radius": 30,
      "label": "X2",
      "type": "input"
    },
    {
      "id": "input-1755010722513",
      "x": 203.33331298828125,
      "y": 152.5,
      "radius": 30,
      "label": "X1",
      "type": "input"
    },
    {
      "id": "hidden-1755010723195",
      "x": 400,
      "y": 300,
      "radius": 30,
      "label": "H3",
      "type": "hidden"
    },
    {
      "id": "hidden-1755010723752",
      "x": 400,
      "y": 210,
      "radius": 30,
      "label": "H2",
      "type": "hidden"
    },
    {
      "id": "hidden-1755010724277",
      "x": 400,
      "y": 120,
      "radius": 30,
      "label": "H1",
      "type": "hidden"
    },
    {
      "id": "output-1755010726191",
      "x": 586.6666870117188,
      "y": 201.66668701171875,
      "radius": 30,
      "label": "Y1",
      "type": "output"
    }
  ],
  "connections": [
    {
      "id": "connection-1755010727626-0.026190471381372538",
      "fromNeuronId": "input-1755010722513",
      "toNeuronId": "hidden-1755010724277",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1755010727626-0.4242213240406879",
      "fromNeuronId": "input-1755010722513",
      "toNeuronId": "hidden-1755010723752",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1755010727626-0.6848009551804884",
      "fromNeuronId": "input-1755010722513",
      "toNeuronId": "hidden-1755010723195",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1755010727626-0.6210421757607933",
      "fromNeuronId": "input-1755010721062",
      "toNeuronId": "hidden-1755010724277",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1755010727626-0.2638146217118529",
      "fromNeuronId": "input-1755010721062",
      "toNeuronId": "hidden-1755010723752",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1755010727626-0.008348211338111478",
      "fromNeuronId": "input-1755010721062",
      "toNeuronId": "hidden-1755010723195",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1755010727626-0.882721975592068",
      "fromNeuronId": "hidden-1755010724277",
      "toNeuronId": "output-1755010726191",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1755010727626-0.9760085465437179",
      "fromNeuronId": "hidden-1755010723752",
      "toNeuronId": "output-1755010726191",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1755010727626-0.24365558021526879",
      "fromNeuronId": "hidden-1755010723195",
      "toNeuronId": "output-1755010726191",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    }
  ],
  "counters": {
    "input": 2,
    "hidden": 3,
    "output": 1,
    "hidden2": 0,
    "hidden3": 0,
    "hidden4": 0,
    "hidden5": 0,
    "hidden6": 0,
    "hidden7": 0,
    "hidden8": 0,
    "hidden9": 0,
    "hidden10": 0,
    "hidden11": 0
  },
  "timestamp": "2025-08-14T08:47:35.511Z"
}`,xS="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='18'%20viewBox='0%200%2022%2018'%3e%3cg%3e%3cpolygon%20points='15.828%206%2018%206%2018%208%2022%204%2018%200%2018%202%2014.172%202%204.172%2012%200%2012%200%2016%205.828%2016%2015.828%206'/%3e%3cpolygon%20points='18%2010%2018%2012%2015.828%2012%2014.242%2010.414%2011.414%2013.242%2014.172%2016%2018%2016%2018%2018%2022%2014%2018%2010'/%3e%3cpolygon%20points='5.758%207.586%208.586%204.758%205.828%202%200%202%200%206%204.172%206%205.758%207.586'/%3e%3c/g%3e%3c/svg%3e",en=({matrix:a,label:i,image:r,x:s=0,y:c=0})=>{if(!a||a.length===0)return null;const h=a.length,f=a[0]?.length||0,g=40,p=4,d=h*(g+p)-p;return T.jsxs("div",{className:"matrix-display",children:[i&&T.jsx("div",{className:"matrix-label",children:T.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[T.jsx("span",{children:i}),r]})}),T.jsxs("div",{className:"matrix-container",style:{position:"relative"},children:[T.jsx("div",{className:"matrix-bracket-left",style:{height:`${d}px`}}),T.jsx("div",{className:"matrix-bracket-right",style:{height:`${d}px`}}),T.jsx("div",{className:"matrix-content",children:a.map((y,v)=>T.jsx("div",{className:"matrix-row",style:{display:"flex",marginBottom:v<h-1?`${p}px`:"0"},children:y.map((x,E)=>T.jsx("div",{className:"matrix-cell",style:{width:`${g}px`,height:`${g}px`,marginRight:E<f-1?`${p}px`:"0"},children:typeof x=="number"?x.toFixed(1):x},E))},v))})]})]})},io=({children:a,delay:i=0,isVisible:r=!0})=>T.jsx(Gt.div,{initial:{opacity:0},animate:{opacity:r?1:0},transition:{delay:i,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"40px"},children:a}),oo=({symbol:a})=>T.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:a}),pg=({label:a,label2:i,children:r})=>T.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},children:[T.jsx("div",{className:"activation-rect",children:a}),T.jsx("img",{src:xS,alt:"Activation Arrow",style:{width:"24px",height:"24px",filter:"invert(1)"}}),T.jsxs("div",{style:{fontSize:"16px",color:"white"},children:[" ",i," "]}),r]}),TS=({matrixSteps:a})=>T.jsx(Gt.div,{initial:{opacity:0,scaleY:0},animate:{opacity:a.showDivider?1:0,scaleY:a.showDivider?1:0},transition:{duration:.8},className:"vertical-divider"}),gg=({text:a,padding:i="12px 12px"})=>T.jsxs(Gt.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:"easeOut"},className:"helper-card",style:{padding:i},children:[T.jsx(Gt.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.1,duration:.15},style:{lineHeight:"1.4"},children:a}),T.jsx("div",{className:"helper-card-arrow"})]}),yg=!0;function SS(){const[a,i]=P.useState([]),[r,s]=P.useState([]),[c,h]=P.useState(!1),[f,g]=P.useState(1),[p,d]=P.useState(null),[y,v]=P.useState(null),[x,E]=P.useState({input:0,hidden:0,output:0,...Array.from({length:10},(z,Q)=>({[`hidden${Q+2}`]:0})).reduce((z,Q)=>({...z,...Q}),{})}),[w,M]=P.useState([{}]),[L,V]=P.useState({}),[B,k]=P.useState({}),[Z,j]=P.useState({}),[K,J]=P.useState({}),[G,et]=P.useState({}),[ct,wt]=P.useState(null),[Ut,pe]=P.useState({x:0,y:0}),[ie,qt]=P.useState(null),[_,F]=P.useState({}),[I,yt]=P.useState([]),[A,H]=P.useState([]),[tt,$]=P.useState([]),[it,Tt]=P.useState(!1),[ft,Jt]=P.useState(!1),[St,dt]=P.useState(!1),[At,ht]=P.useState(!1),[Xt,kt]=P.useState(!1),[Ct,ce]=P.useState([]),[st,Dt]=P.useState(0),[_t,Wt]=P.useState(!1),[Ye,ge]=P.useState(null),[sa,Rn]=P.useState(!1),[ua,yo]=P.useState(20),[Hn,Ee]=P.useState(!1),[Re,Ne]=P.useState(!1),[Xs,Hr]=P.useState(null),[Cs,Pa]=P.useState(null),[Ya,qn]=P.useState(!0),[pi,Pn]=P.useState(!1),[jt,an]=P.useState({}),[Dn,gi]=P.useState(100),[Ge,Rs]=P.useState(!1),[yi,qr]=P.useState(!1),[ca,bi]=P.useState(null);function ye(z,Q){let xt=-1*(ua-5)/10*z;return Q&&xt<0&&(xt=Math.max(0,xt)),new Promise(ut=>setTimeout(ut,z+xt))}P.useEffect(()=>{if(!localStorage.getItem("neuralNetworkData")){Rn(!0);const z=setTimeout(()=>Rn(!1),6e3);return()=>clearTimeout(z)}},[]),P.useEffect(()=>{const z=Q=>{Q.key==="`"&&Ee(W=>!W)};return window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}},[]);const vi=P.useRef(null),be=30,Me=400;function ke({children:z}){const[Q,W]=P.useState(!1);return T.jsx("div",{onMouseEnter:()=>W(!0),onMouseLeave:()=>W(!1),style:{position:"relative"},children:z(Q)})}const fa=(z,Q)=>{if(!z||z.length===0||Q.length===0)return z;const W=z.filter(nt=>Q.some(ot=>nt[ot.label]&&nt[ot.label].trim()!==""));if(W.length===0)return z;const xt={};return Q.forEach(nt=>{const ot=W.map(gt=>parseFloat(gt[nt.label])).filter(gt=>!isNaN(gt));if(ot.length>0){const gt=ot.reduce((Ue,Le)=>Ue+Le,0)/ot.length,Vt=ot.reduce((Ue,Le)=>Ue+Math.pow(Le-gt,2),0)/ot.length,fe=Math.sqrt(Vt);console.log("mean",gt,"std",fe),xt[nt.label]={mean:gt,std:fe===0?1:fe}}}),z.map(nt=>{const ot={...nt};return Q.forEach(gt=>{if(nt[gt.label]&&nt[gt.label].trim()!==""&&xt[gt.label]){const Vt=parseFloat(nt[gt.label]);if(!isNaN(Vt)){const{mean:fe,std:Ue}=xt[gt.label],Le=(Vt-fe)/Ue;ot[gt.label]=Le.toFixed(4)}}}),ot})},xi=()=>{const z=Ef(w,Fe,Ze,Be,G,L,B,Z,K);return yt(z.predictions),H(z.truthValues),$(z.losses),Tt(!0),Ge||Jt(!0),z.matrices},Ns=()=>{const z=cg(w,Fe,Ze,Be,G,L,B,Z,K,1e-5);z&&(V(z.newHiddenWeights),k(z.newHiddenBiases),j(z.newOutputWeights),J(z.newOutputBiases),Jt(!1),console.log("Weights and biases updated successfully"))},bo=()=>{dt(!0),Tt(!1),Jt(!1)},Pr=async()=>{if(Ze.length===0)return;if(bo(),await ye(500),Pn(!0),w.filter(te=>{const Oo=Fe.some(Jr=>te[Jr.label]&&te[Jr.label].trim()!==""),zs=te.Truth!==void 0&&te.Truth!=="";return Oo&&zs}).length===0){alert("Please add input data with truth values"),dt(!1),Pn(!1);return}const[Q,W,xt,ut,nt,ot,gt,Vt,fe,Ue,Le]=xi(),js=Array(Q.length).fill(xt),Fr=Array(Vt.length).fill(nt);an({step:1,X:Q,W1:W,b1:xt,XW1:ot,B1:js,Z1:gt,A1:Vt,W2:ut,b2:nt,B2:Fr,A1W2:fe,Z2:Ue,A2:Le,hasOutputLayer:!0,showFormula:!1,showXW1:!1,showZ1:!1,showReLU:!1,showDivider:!1,showLayer2Formula:!1,showA1W2:!1,showZ2:!1,showSigmoid:!1}),await ye(1e3),an(te=>({...te,showFormula:!0})),await ye(1500),an(te=>({...te,showXW1:!0})),await ye(1500),an(te=>({...te,showZ1:!0})),await ye(1e3),an(te=>({...te,showReLU:!0})),await ye(1500),an(te=>({...te,showDivider:!0})),await ye(1e3),an(te=>({...te,showLayer2Formula:!0})),await ye(1500),an(te=>({...te,showA1W2:!0})),await ye(1500),an(te=>({...te,showZ2:!0})),await ye(1e3),an(te=>({...te,showSigmoid:!0}))},Ga=z=>{Re&&(i(Q=>Q.filter(W=>W.id!==z)),s(Q=>Q.filter(W=>W.fromNeuronId!==z&&W.toNeuronId!==z)),v(null),Hr(null))},vo=z=>{Re&&(s(Q=>Q.filter(W=>W.id!==z)),d(null),Pa(null))},ha=async()=>{if(!Ge&&Dn>0){if(Ze.length===0)return;bo(),dt(!1);let z={...L},Q={...B},W={...Z},xt={...K};for(let ut=1;ut<=Dn;ut++){const nt=Ef(w,Fe,Ze,Be,G,z,Q,W,xt);if(!nt)continue;yt(nt.predictions),H(nt.truthValues),$(nt.losses),Tt(!0);const ot=cg(w,Fe,Ze,Be,G,z,Q,W,xt,.1);ot&&(z=ot.newHiddenWeights,Q=ot.newHiddenBiases,W=ot.newOutputWeights,xt=ot.newOutputBiases,V(z),k(Q),j(W),J(xt),console.log(`Epoch ${ut}/${Dn} completed`)),ut<Dn&&await ye(250)}dt(!1),Jt(!1)}else if(Ya){if(Ze.length===0)return;bo(),kt(!0),Dt(0),Wt(!1),ge(null);const z=async Q=>{const W=Ze[Q];if(!W)return;const xt=r.filter(nt=>nt.toNeuronId===W.id&&Fe.some(ot=>ot.id===nt.fromNeuronId)).map(nt=>nt.id);ce(nt=>Array.from(new Set([...nt,...xt]))),await ye(3e3);const ut=r.filter(nt=>nt.fromNeuronId===W.id&&Be.some(ot=>ot.id===nt.toNeuronId)).map(nt=>nt.id);ce(nt=>Array.from(new Set([...nt,...ut]))),await ye(2e3),ce(nt=>nt.filter(ot=>!xt.includes(ot)))};for(let Q=0;Q<Ze.length;Q++)await z(Q);if(Wt(!0),await ye(3e3),xi(),Be.length>0&&I.length>0){const Q=Be[0],W=I[0].toFixed(4),xt={id:`display-${Date.now()}`,x:Q.x+150,y:Q.y,radius:30,label:W,type:"display"};ge(xt),i(nt=>[...nt,xt]);const ut={id:`sigmoid-connection-${Date.now()}`,fromNeuronId:Q.id,toNeuronId:xt.id,fromDirection:"right",toDirection:"left",isSigmoidConnection:!0};s(nt=>[...nt,ut]),ce(nt=>[...nt,ut.id])}await ye(2e3),dt(!1),await ye(4e3,yg),Wt(!1),i(Q=>Q.filter(W=>W.type!=="display")),s(Q=>Q.filter(W=>!W.isSigmoidConnection)),ce([]),await ye(700,yg),kt(!1)}else await Pr()},da=z=>{const{setNeuronHeaders:Q,setHiddenWeights:W,setHiddenBiases:xt,setOutputWeights:ut,setOutputBiases:nt}=z;return{handleInputHeaderChange:(ot,gt)=>{Q(Vt=>({...Vt,[ot]:gt}))},handleWeightChange:(ot,gt,Vt)=>{W(fe=>({...fe,[`${ot}-${gt}`]:parseFloat(Vt)||0}))},handleBiasChange:(ot,gt)=>{xt(Vt=>({...Vt,[ot]:parseFloat(gt)||0}))},handleOutputWeightChange:(ot,gt,Vt)=>{ut(fe=>({...fe,[`${ot}-${gt}`]:parseFloat(Vt)||0}))},handleOutputBiasChange:(ot,gt)=>{nt(Vt=>({...Vt,[ot]:parseFloat(gt)||0}))},handleNeuronHeaderChange:(ot,gt)=>{Q(Vt=>({...Vt,[ot]:gt}))}}},{handleInputHeaderChange:Za,handleWeightChange:ma,handleBiasChange:ve,handleOutputWeightChange:Yr,handleOutputBiasChange:Gr,handleNeuronHeaderChange:Nn}=da({setNeuronHeaders:et,setHiddenWeights:V,setHiddenBiases:k,setOutputWeights:j,setOutputBiases:J}),Yn=()=>{const z=a.filter(ut=>ut.type!=="display"),Q=r.filter(ut=>!ut.isSigmoidConnection),W={inputData:w,hiddenWeights:L,hiddenBiases:B,outputWeights:Z,outputBiases:K,neuronHeaders:G,neurons:z,connections:Q,counters:x,timestamp:new Date().toISOString()};if(window.confirm("Download the Neural Network as a JSON file? Pressing 'cancel' will save it in your cookies")){const ut=JSON.stringify(W,null,2),nt=new Blob([ut],{type:"application/json"}),ot=URL.createObjectURL(nt),gt=document.createElement("a");gt.href=ot,gt.download=`neural-network-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(gt),gt.click(),document.body.removeChild(gt),URL.revokeObjectURL(ot)}else localStorage.setItem("neuralNetworkData",JSON.stringify(W))},Zr=()=>{if(Rn(!1),Tt(!1),Jt(!1),window.confirm("Load from computer? Pressing 'cancel' will load from cookies.")){const Q=document.createElement("input");Q.type="file",Q.accept=".json",Q.style.display="none";let W;Q.onchange=xt=>{const ut=xt.target.files[0];if(!ut)return;const nt=new FileReader;nt.onload=ot=>{try{W=JSON.parse(ot.target.result),M(W.inputData||[{}]),V(W.hiddenWeights||{}),k(W.hiddenBiases||{}),j(W.outputWeights||{}),J(W.outputBiases||{}),et(W.neuronHeaders||{}),W.neurons&&i(W.neurons),W.connections&&(s(W.connections),ht(!0)),W.counters&&E(W.counters)}catch{alert("Invalid file format")}},nt.readAsText(ut),document.body.removeChild(Q)},document.body.appendChild(Q),Q.click()}else{let Q=localStorage.getItem("neuralNetworkData");Q||(Q=mg,localStorage.setItem("neuralNetworkData",mg));try{const W=JSON.parse(Q);M(W.inputData||[{}]),V(W.hiddenWeights||{}),k(W.hiddenBiases||{}),j(W.outputWeights||{}),J(W.outputBiases||{}),et(W.neuronHeaders||{}),W.neurons&&i(W.neurons),W.connections&&(s(W.connections),ht(!0)),W.counters&&E(W.counters)}catch(W){console.error("Error loading network data:",W)}}},Ti=(z,Q,W)=>{if(z==="connection"&&Q&&W){const xt=a.find(nt=>(G[nt.label]||nt.label)===Q),ut=a.find(nt=>(G[nt.label]||nt.label)===W);if(xt&&ut){const nt=r.find(ot=>ot.fromNeuronId===xt.id&&ot.toNeuronId===ut.id);d(nt?.id||null)}v(null)}else if(z==="neuron"&&Q){const xt=a.find(ut=>(G[ut.label]||ut.label)===Q);v(xt?.id||null),d(null)}else d(null),v(null)},Fe=a.filter(z=>z.type==="input").sort((z,Q)=>z.y-Q.y),Ze=a.filter(z=>z.type==="hidden").sort((z,Q)=>z.y-Q.y),Be=a.filter(z=>z.type==="output").sort((z,Q)=>z.y-Q.y),Si=Fe.map(z=>G[z.label]||z.label),dn=Ze.map(z=>G[z.label]||z.label),xo=Be.map(z=>G[z.label]||z.label);P.useEffect(()=>{if(yi){ca||bi([...w]);const z=fa(ca||w,Fe);M(z)}else ca&&(M([...ca]),bi(null))},[yi]);const To=z=>{if(!vi.current)return{x:0,y:0};const Q=vi.current.getBoundingClientRect(),W=(z.clientX-Q.left)/Q.width*800,xt=(z.clientY-Q.top)/Q.height*400;return{x:W,y:xt}},pa=(z,Q,W)=>{F(xt=>({...xt,[z]:{x:Q,y:W}}))},So=P.useCallback(z=>{if(ct&&vi.current){const Q=To(z);pe(Q);let W=null,xt=1/0;a.forEach(ut=>{if(ut.id!==ct.fromNeuronId){const nt=_[ut.id]||{x:0,y:0},ot=ut.x+nt.x,gt=ut.y+nt.y;[{direction:"top",x:ot,y:gt-be},{direction:"right",x:ot+be,y:gt},{direction:"bottom",x:ot,y:gt+be},{direction:"left",x:ot-be,y:gt}].forEach(fe=>{const Ue=Math.sqrt(Math.pow(Q.x-fe.x,2)+Math.pow(Q.y-fe.y,2));Ue<15&&Ue<xt&&(xt=Ue,W={neuronId:ut.id,direction:fe.direction})})}}),qt(W)}},[ct,a,_,be]),Ao=z=>{bS(z,x,i,E,f,Me,be)},ks=(z,Q,W)=>{i(xt=>xt.map(ut=>ut.id===z?{...ut,x:Q,y:W}:ut))},Qr=(z,Q,W,xt,ut)=>{if(ct)if(z!==ct.fromNeuronId){const nt={id:`connection-${Date.now()}`,fromNeuronId:ct.fromNeuronId,toNeuronId:z,fromDirection:ct.fromDirection,toDirection:Q};s(ot=>[...ot,nt]),wt(null),qt(null)}else wt(null),qt(null);else{const nt=a.find(Le=>Le.id===z),ot=_[z]||{x:0,y:0},gt=nt.x+ot.x,Vt=nt.y+ot.y,fe={top:{x:gt,y:Vt-be},right:{x:gt+be,y:Vt},bottom:{x:gt,y:Vt+be},left:{x:gt-be,y:Vt}},Ue=To(ut);wt({fromNeuronId:z,fromDirection:Q,startX:fe[Q].x,startY:fe[Q].y}),pe(Ue)}},Je=()=>{vS(a,s,ht)},Kr=z=>{z.target.classList.contains("network-svg")&&ct&&(wt(null),qt(null))},Do=({type:z,label:Q,onClickFunc:W=()=>Ao(z),style:xt={padding:"0.7rem 1.5rem"}})=>T.jsx(Gt.button,{onClick:W,className:"spawn-btn",whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:-25},transition:{delay:.1,duration:.1},style:xt,children:Q},z);return T.jsxs("div",{className:"app-container",children:[T.jsxs("div",{className:"nav-bar",children:[T.jsx("a",{href:"https://www.datvis.site/matrix_tool/",className:"nav-link",children:"Home"}),T.jsx("a",{href:"https://www.linkedin.com/in/laish-glenberg/",className:"nav-link",children:"About"}),T.jsx("a",{href:"https://ko-fi.com/weadsy",className:"nav-link",children:"Donate"})]}),T.jsxs(Gt.div,{className:"content-wrapper-with-tables",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,ease:"easeOut"},children:[T.jsxs("div",{className:"left-panel",children:[T.jsx(fg,{title:"Input Samples",neurons:Fe,data:w,setData:M,onHeaderChange:Za,onCellHover:Ti,isOutput:!1,normalizeInputs:yi,setNormalizeInputs:qr}),St&&T.jsx("div",{className:"loading-bar",children:T.jsx(lg,{color:["#7e7e7e","#979797","#b1b1b1","#cacaca"]})}),it&&!St&&T.jsx(Gt.div,{initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.7,ease:"easeOut"},children:T.jsx(fg,{title:"Final Predictions",neurons:[],data:[],setData:()=>{},onHeaderChange:()=>{},onCellHover:()=>{},isOutput:!0,truthValues:A,predictions:I,losses:tt})})]}),T.jsxs("div",{className:"center-panel",children:[T.jsxs("div",{className:"main-title-row",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"5px",position:"relative"},children:[T.jsx(Gt.h1,{className:"main-title",initial:{opacity:0,y:-30},animate:{opacity:1,y:10},transition:{delay:.3,duration:.8},children:"Neural Network Builder"}),T.jsxs("div",{className:"save-load-buttons",children:[T.jsx("button",{className:"save-load-btn",title:"Save your neural network and tables",onClick:Yn,children:"Save"}),T.jsx("button",{className:`save-load-btn${sa?" flash":""}`,title:"load a neural network and tables",onClick:Zr,children:"Load"})]})]}),a.some(z=>z.type==="output")&&a.some(z=>z.type==="input")&&a.some(z=>z.type==="hidden")&&T.jsxs("div",{className:"start-btn-row",children:[T.jsx(ke,{children:z=>T.jsxs(T.Fragment,{children:[T.jsxs("label",{className:"checkbox-container-large",children:[T.jsx("input",{type:"checkbox",checked:Ge,onChange:Q=>{Rs(Q.target.checked),gi(0)},style:{transform:"scale(1.2)",accentColor:"#ffffff"}}),"Test Mode"]}),T.jsx(fs,{children:z&&T.jsx(gg,{text:"Disable back propagation and epochs"})})]})}),T.jsx(ke,{children:z=>T.jsxs(T.Fragment,{children:[T.jsxs("label",{className:"checkbox-container-large",style:{opacity:Ge||Dn>0?.5:1,cursor:Ge||Dn>0?"not-allowed":"pointer"},children:[T.jsx("input",{type:"checkbox",checked:Ya,onChange:Q=>qn(Q.target.checked),style:{transform:"scale(1.2)",accentColor:"#ffffff"},disabled:Ge||Dn>0}),"Deep Solve"]}),T.jsx(fs,{children:z&&T.jsx(gg,{text:"Turn off to see the full matrix calculations"})})]})}),T.jsx(Gt.button,{onClick:ft?Ns:ha,className:`spawn-btn${At?"":" btn-disabled"}`,style:{fontSize:"16px",padding:"0.7rem 1.2rem",display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",backgroundColor:"rgba(157, 159, 218, 0.2)",opacity:St?.5:1,cursor:St?"not-allowed":"pointer"},disabled:!At||St,whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1,duration:.1},children:St?T.jsx(lg,{color:"#ffffff",size:"small"}):T.jsxs(T.Fragment,{children:[ft?"ADJUST":"START",T.jsx("img",{src:PT,alt:"Train",style:{marginLeft:"10px",width:22,height:22,filter:"invert(1)",transform:"scaleX(-1)"}})]})}),T.jsxs("label",{className:"checkbox-container-large",children:[T.jsx("input",{type:"number",min:0,max:99,step:1,value:ua,onChange:z=>yo(Number(z.target.value)),className:"number-box-input",style:{width:"50px"}}),T.jsx("span",{className:"eraser-label",children:"Speed"})]}),T.jsxs("label",{className:"checkbox-container-large",style:{opacity:Ge?.5:1,cursor:Ge?"not-allowed":"pointer"},children:[T.jsx("input",{type:"number",min:0,max:1e3,step:1,value:Dn,onChange:z=>gi(Number(z.target.value)),className:"number-box-input",style:{width:"60px"},disabled:Ge}),T.jsx("span",{className:"eraser-label",children:"Epochs"})]})]}),T.jsx(fs,{children:pi&&T.jsx(Gt.div,{className:"matrix-calculations-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.1,duration:1},children:jt.step>=1&&T.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"20px",justifyContent:"space-around",alignItems:"center"},children:[T.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[T.jsx("div",{style:{display:"flex",flexDirection:"column",maxWidth:"auto",alignItems:"center",justifyContent:"center"},children:T.jsx("div",{className:"matrix-layer-title",children:"HIDDEN WEIGHTED SUMS"})}),T.jsxs(io,{delay:0,isVisible:jt.showFormula,children:[T.jsx("div",{className:"matrix-formula-text",children:" Z1 = "}),T.jsx(en,{matrix:jt.X,label:"X"}),T.jsx(oo,{symbol:"×"}),T.jsx(en,{matrix:jt.W1,label:"W1"}),T.jsx(oo,{symbol:"+"}),T.jsx(en,{matrix:[jt.b1],label:"b1",image:T.jsx("img",{src:sg,alt:"Activation Arrow",style:{transform:"scaleX(1.27)",height:"20px",filter:"invert(1)"}})})]}),T.jsxs(io,{delay:0,isVisible:jt.showXW1,children:[T.jsx("div",{className:"matrix-formula-text",children:" Z1 = "}),T.jsx(en,{matrix:jt.XW1,label:"X * W1"}),T.jsx(oo,{symbol:"+"}),T.jsx(en,{matrix:jt.B1,label:"B1"})]}),T.jsxs(io,{delay:0,isVisible:jt.showZ1,children:[T.jsxs(Gt.div,{initial:{x:jt.showReLU?-25:0},animate:{x:jt.showReLU?-25:0},transition:{duration:.5},className:"maxtrix-flex-row",children:[T.jsx("div",{className:"matrix-formula-text",children:" Z1 = "}),T.jsx(en,{matrix:jt.Z1,label:"X * W1 + b1"})]}),T.jsxs(Gt.div,{initial:{opacity:0,x:50},animate:{opacity:jt.showReLU?1:0,x:0},transition:{delay:.5,duration:.5},className:"maxtrix-flex-row",children:[T.jsx(pg,{label:"ReLU",label2:"max(0,Z1)"}),T.jsx("div",{className:"matrix-formula-text",children:" A1 = "}),T.jsx(en,{matrix:jt.A1,label:"ReLU(Z1)"})]})]})]}),T.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",opacity:jt.showDivider&&jt.hasOutputLayer?1:0,transition:"opacity 0.5s ease"},children:[T.jsx(TS,{matrixSteps:jt}),T.jsx(Gt.div,{initial:{opacity:0,y:20},animate:{opacity:jt.showSigmoid?1:0,y:0},transition:{delay:1,duration:.5},style:{marginTop:"40px",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:Do({type:"continue",label:"Continue",onClickFunc:()=>{dt(!1),Pn(!1),Tt(!0)}})})]}),T.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",opacity:jt.hasOutputLayer?1:0,transition:"opacity 0.5s ease"},children:[T.jsx("div",{style:{display:"flex",flexDirection:"column",maxWidth:"auto",alignItems:"center",justifyContent:"center"},children:T.jsx(Gt.div,{initial:{opacity:0},animate:{opacity:jt.showDivider?1:0},transition:{delay:.5,duration:.5},className:"matrix-layer-title",children:"OUTPUT WEIGHTED SUMS"})}),T.jsxs(io,{delay:0,isVisible:jt.showLayer2Formula,children:[T.jsx("div",{className:"matrix-formula-text",children:" Z2 = "}),T.jsx(en,{matrix:jt.A1,label:"A1"}),T.jsx(oo,{symbol:"×"}),T.jsx(en,{matrix:jt.W2,label:"W2"}),T.jsx(oo,{symbol:"+"}),T.jsx(en,{matrix:[jt.b2],label:"b2",image:T.jsx("img",{src:sg,alt:"Activation Arrow",style:{transform:"scaleX(1.27)",height:"20px",filter:"invert(1)"}})})]}),T.jsxs(io,{delay:0,isVisible:jt.showA1W2,children:[T.jsx("div",{className:"matrix-formula-text",children:" Z2 = "}),T.jsx(en,{matrix:jt.A1W2,label:"A1 * W2"}),T.jsx(oo,{symbol:"+"}),T.jsx(en,{matrix:jt.B2,label:"B2"})]}),T.jsxs(io,{delay:0,isVisible:jt.showZ2,children:[T.jsxs(Gt.div,{animate:{x:jt.showSigmoid?-25:0},transition:{duration:.5},className:"maxtrix-flex-row",children:[T.jsx("div",{className:"matrix-formula-text",children:" Z2 = "}),T.jsx(en,{matrix:jt.Z2,label:"A1 * W2 + b2"})]}),T.jsxs(Gt.div,{initial:{opacity:0,x:50},animate:{opacity:jt.showSigmoid?1:0,x:0},transition:{delay:.5,duration:.5},className:"maxtrix-flex-row",children:[T.jsx(pg,{label:"Sigmoid",children:T.jsx("svg",{width:"80",height:"40",style:{display:"block"},children:T.jsx(W1,{x:40,y:20,sumText:"x"})})}),T.jsx("div",{className:"matrix-formula-text",children:" ŷ = "}),T.jsx(en,{matrix:jt.A2,label:"σ(Z2)"})]})]})]})]})})}),T.jsxs("div",{style:{position:"relative",width:"100%"},children:[T.jsxs(Gt.svg,{ref:vi,viewBox:"0 0 800 400",className:"network-svg",initial:{opacity:0},animate:{opacity:1,cursor:Re?"crosshair":"default"},transition:{delay:.6,duration:1},onMouseMove:So,onClick:Kr,children:[T.jsx("defs",{children:T.jsx("marker",{id:"arrowhead",markerWidth:"5",markerHeight:"5",refX:"5",refY:"2.5",orient:"auto",children:T.jsx("polygon",{points:"0 0, 5 2.5, 0 5",className:"arrow-marker"})})}),r.map(z=>T.jsx(cS,{connection:z,neurons:a,neuronRadius:be,neuronTransforms:_,isGlowing:p===z.id,emphasizedConnections:Ct,showForwardPassVisuals:Xt,inputData:w,currentSampleIndex:st,neuronHeaders:G,hiddenWeights:L,inputNeurons:Fe,hiddenNeurons:Ze,hiddenBiases:B,outputWeights:Z,outputBiases:K,showSigmoidPhase:_t,outputNeurons:Be,isEraserMode:Re,onEraseConnection:vo,eraserHoveredConnection:Cs,setEraserHoveredConnection:Pa},z.id)),ct&&T.jsx(uS,{startX:ct.startX,startY:ct.startY,endX:Ut.x,endY:Ut.y}),a.map(z=>T.jsx(hS,{id:z.id,x:z.x,y:z.y,radius:z.radius,label:z.label,type:z.type,onDragEnd:ks,onDragUpdate:pa,onStartConnection:Qr,highlightedDots:ie?.neuronId===z.id?[ie.direction]:[],isGlowing:y===z.id,neurons:a,showForwardPassVisuals:Xt,emphasizedConnections:Ct,hiddenNeurons:Ze,inputNeurons:Fe,outputNeurons:Be,neuronHeaders:G,hiddenWeights:L,outputWeights:Z,inputData:w,currentSampleIndex:st,hiddenBiases:B,connections:r,showSigmoidPhase:_t,outputBiases:K,isEraserMode:Re,onEraseNeuron:Ga,eraserHoveredNeuron:Xs,setEraserHoveredNeuron:Hr},z.id))]}),T.jsx("div",{style:{position:"absolute",top:16,right:-5,zIndex:10},children:T.jsxs("label",{className:"eraser-checkbox-container button-border",children:[T.jsx("input",{type:"checkbox",checked:Re,onChange:z=>Ne(z.target.checked),className:"eraser-checkbox"}),T.jsx("span",{className:"eraser-label",children:"Eraser"})]})})]}),T.jsxs("div",{className:"button-stack",children:[T.jsx("div",{className:"button-container",children:[{type:"input",label:"Add Input"},{type:"hidden",label:"Add Hidden"},...c?Array.from({length:f-1},(z,Q)=>({type:`hidden${Q+2}`,label:`Add Hidden ${Q+2}`})):[],{type:"output",label:"Add Output"}].map(({type:z,label:Q})=>Do({type:z,label:Q}))}),T.jsx("div",{className:"button-dense",children:a.some(z=>z.type==="input")&&a.some(z=>z.type==="hidden")&&Do({type:"dense",label:"Dense Connect",onClickFunc:Je,style:{padding:"0.5rem 0.7rem",background:"rgba(255, 255, 255, 0.1)"}})})]})]}),T.jsxs("div",{className:"right-panel",children:[T.jsx(dg,{title:"Hidden Layer Weights",inputLabels:Si,neuronLabels:dn,weights:L,biases:B,onWeightChange:ma,onBiasChange:ve,onHeaderChange:Nn,showSaveLoad:!0,onSave:Yn,onLoad:Zr,onCellHover:Ti,biasLabel:"b1"}),Ze.length>0&&Be.length>0&&T.jsxs(T.Fragment,{children:[T.jsx(dg,{title:"Output Layer Weights",inputLabels:dn,neuronLabels:xo,weights:Z,biases:K,onWeightChange:Yr,onBiasChange:Gr,onHeaderChange:Nn,showSaveLoad:!1,onCellHover:Ti,biasLabel:"b2"}),T.jsx("div",{style:{marginTop:"-22px",color:"#fff",fontWeight:300,fontSize:"14px"}})]})]})]})]})}uv.createRoot(document.getElementById("root")).render(T.jsx(P.StrictMode,{children:T.jsx(SS,{})}));
