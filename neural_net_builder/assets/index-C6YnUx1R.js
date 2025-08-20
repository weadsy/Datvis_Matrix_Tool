(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();function Iv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Vc={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function t1(){if(km)return bl;km=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:s,key:f,ref:c!==void 0?c:null,props:d}}return bl.Fragment=i,bl.jsx=l,bl.jsxs=l,bl}var jm;function e1(){return jm||(jm=1,Vc.exports=t1()),Vc.exports}var S=e1(),Bc={exports:{}},Ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function n1(){if(zm)return Ot;zm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function x(A){return A===null||typeof A!="object"?null:(A=v&&A[v]||A["@@iterator"],typeof A=="function"?A:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function H(A,q,tt){this.props=A,this.context=q,this.refs=w,this.updater=tt||E}H.prototype.isReactComponent={},H.prototype.setState=function(A,q){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,q,"setState")},H.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function B(){}B.prototype=H.prototype;function U(A,q,tt){this.props=A,this.context=q,this.refs=w,this.updater=tt||E}var j=U.prototype=new B;j.constructor=U,M(j,H.prototype),j.isPureReactComponent=!0;var Z=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function J(A,q,tt,$,it,St){return tt=St.ref,{$$typeof:a,type:A,key:q,ref:tt!==void 0?tt:null,props:St}}function G(A,q){return J(A.type,q,void 0,void 0,void 0,A.props)}function et(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function ct(A){var q={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(tt){return q[tt]})}var wt=/\/+/g;function Lt(A,q){return typeof A=="object"&&A!==null&&A.key!=null?ct(""+A.key):q.toString(36)}function pe(){}function ie(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(pe,pe):(A.status="pending",A.then(function(q){A.status==="pending"&&(A.status="fulfilled",A.value=q)},function(q){A.status==="pending"&&(A.status="rejected",A.reason=q)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Pt(A,q,tt,$,it){var St=typeof A;(St==="undefined"||St==="boolean")&&(A=null);var ft=!1;if(A===null)ft=!0;else switch(St){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(A.$$typeof){case a:case i:ft=!0;break;case y:return ft=A._init,Pt(ft(A._payload),q,tt,$,it)}}if(ft)return it=it(A),ft=$===""?"."+Lt(A,0):$,Z(it)?(tt="",ft!=null&&(tt=ft.replace(wt,"$&/")+"/"),Pt(it,q,tt,"",function(ht){return ht})):it!=null&&(et(it)&&(it=G(it,tt+(it.key==null||A&&A.key===it.key?"":(""+it.key).replace(wt,"$&/")+"/")+ft)),q.push(it)),1;ft=0;var Jt=$===""?".":$+":";if(Z(A))for(var Tt=0;Tt<A.length;Tt++)$=A[Tt],St=Jt+Lt($,Tt),ft+=Pt($,q,tt,St,it);else if(Tt=x(A),typeof Tt=="function")for(A=Tt.call(A),Tt=0;!($=A.next()).done;)$=$.value,St=Jt+Lt($,Tt++),ft+=Pt($,q,tt,St,it);else if(St==="object"){if(typeof A.then=="function")return Pt(ie(A),q,tt,$,it);throw q=String(A),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ft}function V(A,q,tt){if(A==null)return A;var $=[],it=0;return Pt(A,$,"","",function(St){return q.call(tt,St,it++)}),$}function F(A){if(A._status===-1){var q=A._result;q=q(),q.then(function(tt){(A._status===0||A._status===-1)&&(A._status=1,A._result=tt)},function(tt){(A._status===0||A._status===-1)&&(A._status=2,A._result=tt)}),A._status===-1&&(A._status=0,A._result=q)}if(A._status===1)return A._result.default;throw A._result}var I=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function yt(){}return Ot.Children={map:V,forEach:function(A,q,tt){V(A,function(){q.apply(this,arguments)},tt)},count:function(A){var q=0;return V(A,function(){q++}),q},toArray:function(A){return V(A,function(q){return q})||[]},only:function(A){if(!et(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ot.Component=H,Ot.Fragment=l,Ot.Profiler=c,Ot.PureComponent=U,Ot.StrictMode=s,Ot.Suspense=p,Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Ot.__COMPILER_RUNTIME={__proto__:null,c:function(A){return z.H.useMemoCache(A)}},Ot.cache=function(A){return function(){return A.apply(null,arguments)}},Ot.cloneElement=function(A,q,tt){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var $=M({},A.props),it=A.key,St=void 0;if(q!=null)for(ft in q.ref!==void 0&&(St=void 0),q.key!==void 0&&(it=""+q.key),q)!K.call(q,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&q.ref===void 0||($[ft]=q[ft]);var ft=arguments.length-2;if(ft===1)$.children=tt;else if(1<ft){for(var Jt=Array(ft),Tt=0;Tt<ft;Tt++)Jt[Tt]=arguments[Tt+2];$.children=Jt}return J(A.type,it,void 0,void 0,St,$)},Ot.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:d,_context:A},A},Ot.createElement=function(A,q,tt){var $,it={},St=null;if(q!=null)for($ in q.key!==void 0&&(St=""+q.key),q)K.call(q,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(it[$]=q[$]);var ft=arguments.length-2;if(ft===1)it.children=tt;else if(1<ft){for(var Jt=Array(ft),Tt=0;Tt<ft;Tt++)Jt[Tt]=arguments[Tt+2];it.children=Jt}if(A&&A.defaultProps)for($ in ft=A.defaultProps,ft)it[$]===void 0&&(it[$]=ft[$]);return J(A,St,void 0,void 0,null,it)},Ot.createRef=function(){return{current:null}},Ot.forwardRef=function(A){return{$$typeof:g,render:A}},Ot.isValidElement=et,Ot.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:F}},Ot.memo=function(A,q){return{$$typeof:h,type:A,compare:q===void 0?null:q}},Ot.startTransition=function(A){var q=z.T,tt={};z.T=tt;try{var $=A(),it=z.S;it!==null&&it(tt,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(yt,I)}catch(St){I(St)}finally{z.T=q}},Ot.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Ot.use=function(A){return z.H.use(A)},Ot.useActionState=function(A,q,tt){return z.H.useActionState(A,q,tt)},Ot.useCallback=function(A,q){return z.H.useCallback(A,q)},Ot.useContext=function(A){return z.H.useContext(A)},Ot.useDebugValue=function(){},Ot.useDeferredValue=function(A,q){return z.H.useDeferredValue(A,q)},Ot.useEffect=function(A,q,tt){var $=z.H;if(typeof tt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(A,q)},Ot.useId=function(){return z.H.useId()},Ot.useImperativeHandle=function(A,q,tt){return z.H.useImperativeHandle(A,q,tt)},Ot.useInsertionEffect=function(A,q){return z.H.useInsertionEffect(A,q)},Ot.useLayoutEffect=function(A,q){return z.H.useLayoutEffect(A,q)},Ot.useMemo=function(A,q){return z.H.useMemo(A,q)},Ot.useOptimistic=function(A,q){return z.H.useOptimistic(A,q)},Ot.useReducer=function(A,q,tt){return z.H.useReducer(A,q,tt)},Ot.useRef=function(A){return z.H.useRef(A)},Ot.useState=function(A){return z.H.useState(A)},Ot.useSyncExternalStore=function(A,q,tt){return z.H.useSyncExternalStore(A,q,tt)},Ot.useTransition=function(){return z.H.useTransition()},Ot.version="19.1.0",Ot}var _m;function Mf(){return _m||(_m=1,Bc.exports=n1()),Bc.exports}var X=Mf();const qt=Iv(X);var Uc={exports:{}},vl={},Lc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function a1(){return Vm||(Vm=1,function(a){function i(V,F){var I=V.length;V.push(F);t:for(;0<I;){var yt=I-1>>>1,A=V[yt];if(0<c(A,F))V[yt]=F,V[I]=A,I=yt;else break t}}function l(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var F=V[0],I=V.pop();if(I!==F){V[0]=I;t:for(var yt=0,A=V.length,q=A>>>1;yt<q;){var tt=2*(yt+1)-1,$=V[tt],it=tt+1,St=V[it];if(0>c($,I))it<A&&0>c(St,$)?(V[yt]=St,V[it]=I,yt=it):(V[yt]=$,V[tt]=I,yt=tt);else if(it<A&&0>c(St,I))V[yt]=St,V[it]=I,yt=it;else break t}}return F}function c(V,F){var I=V.sortIndex-F.sortIndex;return I!==0?I:V.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var p=[],h=[],y=1,v=null,x=3,E=!1,M=!1,w=!1,H=!1,B=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function Z(V){for(var F=l(h);F!==null;){if(F.callback===null)s(h);else if(F.startTime<=V)s(h),F.sortIndex=F.expirationTime,i(p,F);else break;F=l(h)}}function z(V){if(w=!1,Z(V),!M)if(l(p)!==null)M=!0,K||(K=!0,Lt());else{var F=l(h);F!==null&&Pt(z,F.startTime-V)}}var K=!1,J=-1,G=5,et=-1;function ct(){return H?!0:!(a.unstable_now()-et<G)}function wt(){if(H=!1,K){var V=a.unstable_now();et=V;var F=!0;try{t:{M=!1,w&&(w=!1,U(J),J=-1),E=!0;var I=x;try{e:{for(Z(V),v=l(p);v!==null&&!(v.expirationTime>V&&ct());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var A=yt(v.expirationTime<=V);if(V=a.unstable_now(),typeof A=="function"){v.callback=A,Z(V),F=!0;break e}v===l(p)&&s(p),Z(V)}else s(p);v=l(p)}if(v!==null)F=!0;else{var q=l(h);q!==null&&Pt(z,q.startTime-V),F=!1}}break t}finally{v=null,x=I,E=!1}F=void 0}}finally{F?Lt():K=!1}}}var Lt;if(typeof j=="function")Lt=function(){j(wt)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ie=pe.port2;pe.port1.onmessage=wt,Lt=function(){ie.postMessage(null)}}else Lt=function(){B(wt,0)};function Pt(V,F){J=B(function(){V(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){V.callback=null},a.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<V?Math.floor(1e3/V):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(V){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var I=x;x=F;try{return V()}finally{x=I}},a.unstable_requestPaint=function(){H=!0},a.unstable_runWithPriority=function(V,F){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var I=x;x=V;try{return F()}finally{x=I}},a.unstable_scheduleCallback=function(V,F,I){var yt=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?yt+I:yt):I=yt,V){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=I+A,V={id:y++,callback:F,priorityLevel:V,startTime:I,expirationTime:A,sortIndex:-1},I>yt?(V.sortIndex=I,i(h,V),l(p)===null&&V===l(h)&&(w?(U(J),J=-1):w=!0,Pt(z,I-yt))):(V.sortIndex=A,i(p,V),M||E||(M=!0,K||(K=!0,Lt()))),V},a.unstable_shouldYield=ct,a.unstable_wrapCallback=function(V){var F=x;return function(){var I=x;x=F;try{return V.apply(this,arguments)}finally{x=I}}}}(Hc)),Hc}var Bm;function i1(){return Bm||(Bm=1,Lc.exports=a1()),Lc.exports}var qc={exports:{}},Pe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function o1(){if(Um)return Pe;Um=1;var a=Mf();function i(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,h,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:p,containerInfo:h,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pe.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return d(p,h,null,y)},Pe.flushSync=function(p){var h=f.T,y=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=h,s.p=y,s.d.f()}},Pe.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(p,h))},Pe.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Pe.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,v=g(y,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?s.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:E}):y==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Pe.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=g(h.as,h.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(p)},Pe.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,v=g(y,h.crossOrigin);s.d.L(p,y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Pe.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=g(h.as,h.crossOrigin);s.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(p)},Pe.requestFormReset=function(p){s.d.r(p)},Pe.unstable_batchedUpdates=function(p,h){return p(h)},Pe.useFormState=function(p,h,y){return f.H.useFormState(p,h,y)},Pe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pe.version="19.1.0",Pe}var Lm;function l1(){if(Lm)return qc.exports;Lm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),qc.exports=o1(),qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function r1(){if(Hm)return vl;Hm=1;var a=i1(),i=Mf(),l=l1();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(s(188))}function p(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,o=e;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return g(r),t;if(u===o)return g(r),e;u=u.sibling}throw Error(s(188))}if(n.return!==o.return)n=r,o=u;else{for(var m=!1,b=r.child;b;){if(b===n){m=!0,n=r,o=u;break}if(b===o){m=!0,o=r,n=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===n){m=!0,n=u,o=r;break}if(b===o){m=!0,o=u,n=r;break}b=b.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),j=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),et=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),wt=Symbol.iterator;function Lt(t){return t===null||typeof t!="object"?null:(t=wt&&t[wt]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function ie(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case H:return"Profiler";case w:return"StrictMode";case z:return"Suspense";case K:return"SuspenseList";case et:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case j:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case Z:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:ie(t.type)||"Memo";case G:e=t._payload,t=t._init;try{return ie(t(e))}catch{}}return null}var Pt=Array.isArray,V=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},yt=[],A=-1;function q(t){return{current:t}}function tt(t){0>A||(t.current=yt[A],yt[A]=null,A--)}function $(t,e){A++,yt[A]=t.current,t.current=e}var it=q(null),St=q(null),ft=q(null),Jt=q(null);function Tt(t,e){switch($(ft,e),$(St,t),$(it,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?lm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=lm(e),t=rm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(it),$(it,t)}function ht(){tt(it),tt(St),tt(ft)}function At(t){t.memoizedState!==null&&$(Jt,t);var e=it.current,n=rm(e,t.type);e!==n&&($(St,t),$(it,n))}function dt(t){St.current===t&&(tt(it),tt(St)),Jt.current===t&&(tt(Jt),hl._currentValue=I)}var Ct=Object.prototype.hasOwnProperty,jt=a.unstable_scheduleCallback,Rt=a.unstable_cancelCallback,ce=a.unstable_shouldYield,st=a.unstable_requestPaint,Dt=a.unstable_now,Vt=a.unstable_getCurrentPriorityLevel,Wt=a.unstable_ImmediatePriority,Ye=a.unstable_UserBlockingPriority,ge=a.unstable_NormalPriority,sa=a.unstable_LowPriority,Cn=a.unstable_IdlePriority,ua=a.log,yo=a.unstable_setDisableYieldValue,Ln=null,Ee=null;function Ne(t){if(typeof ua=="function"&&yo(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Ln,t)}catch{}}var ke=Math.clz32?Math.clz32:Rs,Cs=Math.log,ql=Math.LN2;function Rs(t){return t>>>=0,t===0?32:31-(Cs(t)/ql|0)|0}var Xa=256,Ya=4194304;function Hn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pi(t,e,n){var o=t.pendingLanes;if(o===0)return 0;var r=0,u=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~u,o!==0?r=Hn(o):(m&=b,m!==0?r=Hn(m):n||(n=b&~t,n!==0&&(r=Hn(n))))):(b=o&~u,b!==0?r=Hn(b):m!==0?r=Hn(m):n||(n=o&~t,n!==0&&(r=Hn(n)))),r===0?0:e!==0&&e!==r&&(e&u)===0&&(u=r&-r,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:r}function qn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function zt(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(){var t=Xa;return Xa<<=1,(Xa&4194048)===0&&(Xa=256),t}function ca(){var t=Ya;return Ya<<=1,(Ya&62914560)===0&&(Ya=4194304),t}function gi(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ns(t,e,n,o,r,u){var m=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var b=t.entanglements,T=t.expirationTimes,R=t.hiddenUpdates;for(n=m&~n;0<n;){var L=31-ke(n),Y=1<<L;b[L]=0,T[L]=-1;var N=R[L];if(N!==null)for(R[L]=null,L=0;L<N.length;L++){var k=N[L];k!==null&&(k.lane&=-536870913)}n&=~Y}o!==0&&yi(t,o,0),u!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=u&~(m&~e))}function yi(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-ke(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|n&4194090}function Pl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-ke(n),r=1<<o;r&e|t[o]&e&&(t[o]|=e),n&=~r}}function Xn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ye(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Em(t.type))}function vi(t,e){var n=F.p;try{return F.p=t,e()}finally{F.p=n}}var be=Math.random().toString(36).slice(2),Me="__reactFiber$"+be,je="__reactProps$"+be,fa="__reactContainer$"+be,xi="__reactEvents$"+be,ks="__reactListeners$"+be,bo="__reactHandles$"+be,Xl="__reactResources$"+be,Ga="__reactMarker$"+be;function vo(t){delete t[Me],delete t[je],delete t[xi],delete t[ks],delete t[bo]}function da(t){var e=t[Me];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fa]||n[Me]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fm(t);t!==null;){if(n=t[Me])return n;t=fm(t)}return e}t=n,n=t.parentNode}return null}function ha(t){if(t=t[Me]||t[fa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Za(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function ma(t){var e=t[Xl];return e||(e=t[Xl]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ve(t){t[Ga]=!0}var Yl=new Set,Gl={};function Rn(t,e){Yn(t,e),Yn(t+"Capture",e)}function Yn(t,e){for(Gl[t]=e,t=0;t<e.length;t++)Yl.add(e[t])}var Zl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Si={},Ge={};function Ze(t){return Ct.call(Ge,t)?!0:Ct.call(Si,t)?!1:Zl.test(t)?Ge[t]=!0:(Si[t]=!0,!1)}function Ue(t,e,n){if(Ze(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Ti(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function dn(t,e,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+o)}}var xo,So;function pa(t){if(xo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xo=e&&e[1]||"",So=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xo+t+So}var To=!1;function Ao(t,e){if(!t||To)return"";To=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(k){var N=k}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(k){N=k}t.call(Y.prototype)}}else{try{throw Error()}catch(k){N=k}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(k){if(k&&N&&typeof k.stack=="string")return[k.stack,N.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var T=m.split(`
`),R=b.split(`
`);for(r=o=0;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;for(;r<R.length&&!R[r].includes("DetermineComponentFrameRoot");)r++;if(o===T.length||r===R.length)for(o=T.length-1,r=R.length-1;1<=o&&0<=r&&T[o]!==R[r];)r--;for(;1<=o&&0<=r;o--,r--)if(T[o]!==R[r]){if(o!==1||r!==1)do if(o--,r--,0>r||T[o]!==R[r]){var L=`
`+T[o].replace(" at new "," at ");return t.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",t.displayName)),L}while(1<=o&&0<=r);break}}}finally{To=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?pa(n):""}function js(t){switch(t.tag){case 26:case 27:case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 15:return Ao(t.type,!1);case 11:return Ao(t.type.render,!1);case 1:return Ao(t.type,!0);case 31:return pa("Activity");default:return""}}function Ql(t){try{var e="";do e+=js(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kl(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Do(t){var e=Kl(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(m){o=""+m,u.call(this,m)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _(t){t._valueTracker||(t._valueTracker=Do(t))}function Q(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Kl(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function W(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xt=/[\n"\\]/g;function ut(t){return t.replace(xt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function nt(t,e,n,o,r,u,m,b){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Fe(e)):t.value!==""+Fe(e)&&(t.value=""+Fe(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?gt(t,m,Fe(e)):n!=null?gt(t,m,Fe(n)):o!=null&&t.removeAttribute("value"),r==null&&u!=null&&(t.defaultChecked=!!u),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Fe(b):t.removeAttribute("name")}function ot(t,e,n,o,r,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+Fe(n):"",e=e!=null?""+Fe(e):n,b||e===t.value||(t.value=e),t.defaultValue=e}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m)}function gt(t,e,n){e==="number"&&W(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Bt(t,e,n,o){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&o&&(t[n].defaultSelected=!0)}else{for(n=""+Fe(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function fe(t,e,n){if(e!=null&&(e=""+Fe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Fe(n):""}function Le(t,e,n,o){if(e==null){if(o!=null){if(n!=null)throw Error(s(92));if(Pt(o)){if(1<o.length)throw Error(s(93));o=o[0]}n=o}n==null&&(n=""),e=n}n=Fe(e),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o)}function He(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fl(t,e,n){var o=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,n):typeof n!="number"||n===0||zs.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function te(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var r in e)o=e[r],e.hasOwnProperty(r)&&n[r]!==o&&Fl(t,r,o)}else for(var u in e)e.hasOwnProperty(u)&&Fl(t,u,e[u])}function Oo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wl(t){return Jl.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Vs=null;function Bs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ai=null,Di=null;function sd(t){var e=ha(t);if(e&&(t=e.stateNode)){var n=t[je]||null;t:switch(t=e.stateNode,e.type){case"input":if(nt(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ut(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var r=o[je]||null;if(!r)throw Error(s(90));nt(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)o=n[e],o.form===t.form&&Q(o)}break t;case"textarea":fe(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Bt(t,!!n.multiple,e,!1)}}}var Us=!1;function ud(t,e,n){if(Us)return t(e,n);Us=!0;try{var o=t(e);return o}finally{if(Us=!1,(Ai!==null||Di!==null)&&(Vr(),Ai&&(e=Ai,t=Di,Di=Ai=null,sd(e),t)))for(e=0;e<t.length;e++)sd(t[e])}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var o=n[je]||null;if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ls=!1;if(Gn)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Ls=!1}var ga=null,Hs=null,$l=null;function cd(){if($l)return $l;var t,e=Hs,n=e.length,o,r="value"in ga?ga.value:ga.textContent,u=r.length;for(t=0;t<n&&e[t]===r[t];t++);var m=n-t;for(o=1;o<=m&&e[n-o]===r[u-o];o++);return $l=r.slice(t,1<o?1-o:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tr(){return!0}function fd(){return!1}function Je(t){function e(n,o,r,u,m){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(n=t[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?tr:fd,this.isPropagationStopped=fd,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),e}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},er=Je(Qa),wo=y({},Qa,{view:0,detail:0}),Iy=Je(wo),qs,Ps,Co,nr=y({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ys,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(qs=t.screenX-Co.screenX,Ps=t.screenY-Co.screenY):Ps=qs=0,Co=t),qs)},movementY:function(t){return"movementY"in t?t.movementY:Ps}}),dd=Je(nr),tb=y({},nr,{dataTransfer:0}),eb=Je(tb),nb=y({},wo,{relatedTarget:0}),Xs=Je(nb),ab=y({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),ib=Je(ab),ob=y({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lb=Je(ob),rb=y({},Qa,{data:0}),hd=Je(rb),sb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cb[t])?!!e[t]:!1}function Ys(){return fb}var db=y({},wo,{key:function(t){if(t.key){var e=sb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ub[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ys,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hb=Je(db),mb=y({},nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=Je(mb),pb=y({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ys}),gb=Je(pb),yb=y({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),bb=Je(yb),vb=y({},nr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xb=Je(vb),Sb=y({},Qa,{newState:0,oldState:0}),Tb=Je(Sb),Ab=[9,13,27,32],Gs=Gn&&"CompositionEvent"in window,Ro=null;Gn&&"documentMode"in document&&(Ro=document.documentMode);var Db=Gn&&"TextEvent"in window&&!Ro,pd=Gn&&(!Gs||Ro&&8<Ro&&11>=Ro),gd=" ",yd=!1;function bd(t,e){switch(t){case"keyup":return Ab.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function Ob(t,e){switch(t){case"compositionend":return vd(e);case"keypress":return e.which!==32?null:(yd=!0,gd);case"textInput":return t=e.data,t===gd&&yd?null:t;default:return null}}function Eb(t,e){if(Oi)return t==="compositionend"||!Gs&&bd(t,e)?(t=cd(),$l=Hs=ga=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pd&&e.locale!=="ko"?null:e.data;default:return null}}var Mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mb[t.type]:e==="textarea"}function Sd(t,e,n,o){Ai?Di?Di.push(o):Di=[o]:Ai=o,e=Pr(e,"onChange"),0<e.length&&(n=new er("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var No=null,ko=null;function wb(t){em(t,0)}function ar(t){var e=Za(t);if(Q(e))return t}function Td(t,e){if(t==="change")return e}var Ad=!1;if(Gn){var Zs;if(Gn){var Qs="oninput"in document;if(!Qs){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Qs=typeof Dd.oninput=="function"}Zs=Qs}else Zs=!1;Ad=Zs&&(!document.documentMode||9<document.documentMode)}function Od(){No&&(No.detachEvent("onpropertychange",Ed),ko=No=null)}function Ed(t){if(t.propertyName==="value"&&ar(ko)){var e=[];Sd(e,ko,t,Bs(t)),ud(wb,e)}}function Cb(t,e,n){t==="focusin"?(Od(),No=e,ko=n,No.attachEvent("onpropertychange",Ed)):t==="focusout"&&Od()}function Rb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ar(ko)}function Nb(t,e){if(t==="click")return ar(e)}function kb(t,e){if(t==="input"||t==="change")return ar(e)}function jb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:jb;function jo(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Ct.call(e,r)||!an(t[r],e[r]))return!1}return!0}function Md(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,e){var n=Md(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Md(n)}}function Cd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=W(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=W(t.document)}return e}function Ks(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var zb=Gn&&"documentMode"in document&&11>=document.documentMode,Ei=null,Fs=null,zo=null,Js=!1;function Nd(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Js||Ei==null||Ei!==W(o)||(o=Ei,"selectionStart"in o&&Ks(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),zo&&jo(zo,o)||(zo=o,o=Pr(Fs,"onSelect"),0<o.length&&(e=new er("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=Ei)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mi={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Ws={},kd={};Gn&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function Fa(t){if(Ws[t])return Ws[t];if(!Mi[t])return t;var e=Mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kd)return Ws[t]=e[n];return t}var jd=Fa("animationend"),zd=Fa("animationiteration"),_d=Fa("animationstart"),_b=Fa("transitionrun"),Vb=Fa("transitionstart"),Bb=Fa("transitioncancel"),Vd=Fa("transitionend"),Bd=new Map,$s="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$s.push("scrollEnd");function An(t,e){Bd.set(t,e),Rn(e,[t])}var Ud=new WeakMap;function hn(t,e){if(typeof t=="object"&&t!==null){var n=Ud.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Ql(e)},Ud.set(t,e),e)}return{value:t,source:e,stack:Ql(e)}}var mn=[],wi=0,Is=0;function ir(){for(var t=wi,e=Is=wi=0;e<t;){var n=mn[e];mn[e++]=null;var o=mn[e];mn[e++]=null;var r=mn[e];mn[e++]=null;var u=mn[e];if(mn[e++]=null,o!==null&&r!==null){var m=o.pending;m===null?r.next=r:(r.next=m.next,m.next=r),o.pending=r}u!==0&&Ld(n,r,u)}}function or(t,e,n,o){mn[wi++]=t,mn[wi++]=e,mn[wi++]=n,mn[wi++]=o,Is|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function tu(t,e,n,o){return or(t,e,n,o),lr(t)}function Ci(t,e){return or(t,null,null,e),lr(t)}function Ld(t,e,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var r=!1,u=t.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(r=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,r&&e!==null&&(r=31-ke(n),t=u.hiddenUpdates,o=t[r],o===null?t[r]=[e]:o.push(e),e.lane=n|536870912),u):null}function lr(t){if(50<ol)throw ol=0,lc=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ri={};function Ub(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,o){return new Ub(t,e,n,o)}function eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zn(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Hd(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function rr(t,e,n,o,r,u){var m=0;if(o=t,typeof t=="function")eu(t)&&(m=1);else if(typeof t=="string")m=Hv(t,n,it.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case et:return t=on(31,n,e,r),t.elementType=et,t.lanes=u,t;case M:return Ja(n.children,r,u,e);case w:m=8,r|=24;break;case H:return t=on(12,n,e,r|2),t.elementType=H,t.lanes=u,t;case z:return t=on(13,n,e,r),t.elementType=z,t.lanes=u,t;case K:return t=on(19,n,e,r),t.elementType=K,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:case j:m=10;break t;case U:m=9;break t;case Z:m=11;break t;case J:m=14;break t;case G:m=16,o=null;break t}m=29,n=Error(s(130,t===null?"null":typeof t,"")),o=null}return e=on(m,n,e,r),e.elementType=t,e.type=o,e.lanes=u,e}function Ja(t,e,n,o){return t=on(7,t,o,e),t.lanes=n,t}function nu(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function au(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ni=[],ki=0,sr=null,ur=0,pn=[],gn=0,Wa=null,Qn=1,Kn="";function $a(t,e){Ni[ki++]=ur,Ni[ki++]=sr,sr=t,ur=e}function qd(t,e,n){pn[gn++]=Qn,pn[gn++]=Kn,pn[gn++]=Wa,Wa=t;var o=Qn;t=Kn;var r=32-ke(o)-1;o&=~(1<<r),n+=1;var u=32-ke(e)+r;if(30<u){var m=r-r%5;u=(o&(1<<m)-1).toString(32),o>>=m,r-=m,Qn=1<<32-ke(e)+r|n<<r|o,Kn=u+t}else Qn=1<<u|n<<r|o,Kn=t}function iu(t){t.return!==null&&($a(t,1),qd(t,1,0))}function ou(t){for(;t===sr;)sr=Ni[--ki],Ni[ki]=null,ur=Ni[--ki],Ni[ki]=null;for(;t===Wa;)Wa=pn[--gn],pn[gn]=null,Kn=pn[--gn],pn[gn]=null,Qn=pn[--gn],pn[gn]=null}var Qe=null,re=null,Ht=!1,Ia=null,Nn=!1,lu=Error(s(519));function ti(t){var e=Error(s(418,""));throw Bo(hn(e,t)),lu}function Pd(t){var e=t.stateNode,n=t.type,o=t.memoizedProps;switch(e[Me]=t,e[je]=o,n){case"dialog":kt("cancel",e),kt("close",e);break;case"iframe":case"object":case"embed":kt("load",e);break;case"video":case"audio":for(n=0;n<rl.length;n++)kt(rl[n],e);break;case"source":kt("error",e);break;case"img":case"image":case"link":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"input":kt("invalid",e),ot(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_(e);break;case"select":kt("invalid",e);break;case"textarea":kt("invalid",e),Le(e,o.value,o.defaultValue,o.children),_(e)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||o.suppressHydrationWarning===!0||om(e.textContent,n)?(o.popover!=null&&(kt("beforetoggle",e),kt("toggle",e)),o.onScroll!=null&&kt("scroll",e),o.onScrollEnd!=null&&kt("scrollend",e),o.onClick!=null&&(e.onclick=Xr),e=!0):e=!1,e||ti(t)}function Xd(t){for(Qe=t.return;Qe;)switch(Qe.tag){case 5:case 13:Nn=!1;return;case 27:case 3:Nn=!0;return;default:Qe=Qe.return}}function _o(t){if(t!==Qe)return!1;if(!Ht)return Xd(t),Ht=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Tc(t.type,t.memoizedProps)),n=!n),n&&re&&ti(t),Xd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){re=On(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}re=null}}else e===27?(e=re,ka(t.type)?(t=Ec,Ec=null,re=t):re=e):re=Qe?On(t.stateNode.nextSibling):null;return!0}function Vo(){re=Qe=null,Ht=!1}function Yd(){var t=Ia;return t!==null&&(Ie===null?Ie=t:Ie.push.apply(Ie,t),Ia=null),t}function Bo(t){Ia===null?Ia=[t]:Ia.push(t)}var ru=q(null),ei=null,Fn=null;function ya(t,e,n){$(ru,e._currentValue),e._currentValue=n}function Jn(t){t._currentValue=ru.current,tt(ru)}function su(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function uu(t,e,n,o){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var u=r.dependencies;if(u!==null){var m=r.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=r;for(var T=0;T<e.length;T++)if(b.context===e[T]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),su(u.return,n,t),o||(m=null);break t}u=b.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(s(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),su(m,n,t),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===t){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Uo(t,e,n,o){t=null;for(var r=e,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=r.type;an(r.pendingProps.value,m.value)||(t!==null?t.push(b):t=[b])}}else if(r===Jt.current){if(m=r.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(hl):t=[hl])}r=r.return}t!==null&&uu(e,t,n,o),e.flags|=262144}function cr(t){for(t=t.firstContext;t!==null;){if(!an(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ni(t){ei=t,Fn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qe(t){return Gd(ei,t)}function fr(t,e){return ei===null&&ni(t),Gd(t,e)}function Gd(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Fn===null){if(t===null)throw Error(s(308));Fn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Fn=Fn.next=e;return n}var Lb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Hb=a.unstable_scheduleCallback,qb=a.unstable_NormalPriority,Ae={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new Lb,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&Hb(qb,function(){t.controller.abort()})}var Ho=null,fu=0,ji=0,zi=null;function Pb(t,e){if(Ho===null){var n=Ho=[];fu=0,ji=hc(),zi={status:"pending",value:void 0,then:function(o){n.push(o)}}}return fu++,e.then(Zd,Zd),e}function Zd(){if(--fu===0&&Ho!==null){zi!==null&&(zi.status="fulfilled");var t=Ho;Ho=null,ji=0,zi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Xb(t,e){var n=[],o={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(o.status="rejected",o.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),o}var Qd=V.S;V.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Pb(t,e),Qd!==null&&Qd(t,e)};var ai=q(null);function du(){var t=ai.current;return t!==null?t:It.pooledCache}function dr(t,e){e===null?$(ai,ai.current):$(ai,e.pool)}function Kd(){var t=du();return t===null?null:{parent:Ae._currentValue,pool:t}}var qo=Error(s(460)),Fd=Error(s(474)),hr=Error(s(542)),hu={then:function(){}};function Jd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function mr(){}function Wd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(mr,mr),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Id(t),t;default:if(typeof e.status=="string")e.then(mr,mr);else{if(t=It,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=o}},function(o){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Id(t),t}throw Po=e,qo}}var Po=null;function $d(){if(Po===null)throw Error(s(459));var t=Po;return Po=null,t}function Id(t){if(t===qo||t===hr)throw Error(s(483))}var ba=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Xt&2)!==0){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,e=lr(t),Ld(t,null,n),e}return or(t,o,e,n),lr(t)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Pl(t,n)}}function gu(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?r=u=e:u=u.next=e}else r=u=e;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var yu=!1;function Yo(){if(yu){var t=zi;if(t!==null)throw t}}function Go(t,e,n,o){yu=!1;var r=t.updateQueue;ba=!1;var u=r.firstBaseUpdate,m=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var T=b,R=T.next;T.next=null,m===null?u=R:m.next=R,m=T;var L=t.alternate;L!==null&&(L=L.updateQueue,b=L.lastBaseUpdate,b!==m&&(b===null?L.firstBaseUpdate=R:b.next=R,L.lastBaseUpdate=T))}if(u!==null){var Y=r.baseState;m=0,L=R=T=null,b=u;do{var N=b.lane&-536870913,k=N!==b.lane;if(k?(_t&N)===N:(o&N)===N){N!==0&&N===ji&&(yu=!0),L!==null&&(L=L.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var bt=t,mt=b;N=e;var Ft=n;switch(mt.tag){case 1:if(bt=mt.payload,typeof bt=="function"){Y=bt.call(Ft,Y,N);break t}Y=bt;break t;case 3:bt.flags=bt.flags&-65537|128;case 0:if(bt=mt.payload,N=typeof bt=="function"?bt.call(Ft,Y,N):bt,N==null)break t;Y=y({},Y,N);break t;case 2:ba=!0}}N=b.callback,N!==null&&(t.flags|=64,k&&(t.flags|=8192),k=r.callbacks,k===null?r.callbacks=[N]:k.push(N))}else k={lane:N,tag:b.tag,payload:b.payload,callback:b.callback,next:null},L===null?(R=L=k,T=Y):L=L.next=k,m|=N;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;k=b,b=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);L===null&&(T=Y),r.baseState=T,r.firstBaseUpdate=R,r.lastBaseUpdate=L,u===null&&(r.shared.lanes=0),wa|=m,t.lanes=m,t.memoizedState=Y}}function th(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function eh(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)th(n[t],e)}var _i=q(null),pr=q(0);function nh(t,e){t=aa,$(pr,t),$(_i,e),aa=t|e.baseLanes}function bu(){$(pr,aa),$(_i,_i.current)}function vu(){aa=pr.current,tt(_i),tt(pr)}var Sa=0,Et=null,Qt=null,xe=null,gr=!1,Vi=!1,ii=!1,yr=0,Zo=0,Bi=null,Yb=0;function de(){throw Error(s(321))}function xu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function Su(t,e,n,o,r,u){return Sa=u,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,V.H=t===null||t.memoizedState===null?Lh:Hh,ii=!1,u=n(o,r),ii=!1,Vi&&(u=ih(e,n,o,r)),ah(t),u}function ah(t){V.H=Ar;var e=Qt!==null&&Qt.next!==null;if(Sa=0,xe=Qt=Et=null,gr=!1,Zo=0,Bi=null,e)throw Error(s(300));t===null||we||(t=t.dependencies,t!==null&&cr(t)&&(we=!0))}function ih(t,e,n,o){Et=t;var r=0;do{if(Vi&&(Bi=null),Zo=0,Vi=!1,25<=r)throw Error(s(301));if(r+=1,xe=Qt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}V.H=Wb,u=e(n,o)}while(Vi);return u}function Gb(){var t=V.H,e=t.useState()[0];return e=typeof e.then=="function"?Qo(e):e,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(Et.flags|=1024),e}function Tu(){var t=yr!==0;return yr=0,t}function Au(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Du(t){if(gr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}gr=!1}Sa=0,xe=Qt=Et=null,Vi=!1,Zo=yr=0,Bi=null}function We(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?Et.memoizedState=xe=t:xe=xe.next=t,xe}function Se(){if(Qt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var e=xe===null?Et.memoizedState:xe.next;if(e!==null)xe=e,Qt=t;else{if(t===null)throw Et.alternate===null?Error(s(467)):Error(s(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},xe===null?Et.memoizedState=xe=t:xe=xe.next=t}return xe}function Ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(t){var e=Zo;return Zo+=1,Bi===null&&(Bi=[]),t=Wd(Bi,t,e),e=Et,(xe===null?e.memoizedState:xe.next)===null&&(e=e.alternate,V.H=e===null||e.memoizedState===null?Lh:Hh),t}function br(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qo(t);if(t.$$typeof===j)return qe(t)}throw Error(s(438,String(t)))}function Eu(t){var e=null,n=Et.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var o=Et.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ou(),Et.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),o=0;o<t;o++)n[o]=ct;return e.index++,n}function Wn(t,e){return typeof e=="function"?e(t):e}function vr(t){var e=Se();return Mu(e,Qt,t)}function Mu(t,e,n){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var r=t.baseQueue,u=o.pending;if(u!==null){if(r!==null){var m=r.next;r.next=u.next,u.next=m}e.baseQueue=r=u,o.pending=null}if(u=t.baseState,r===null)t.memoizedState=u;else{e=r.next;var b=m=null,T=null,R=e,L=!1;do{var Y=R.lane&-536870913;if(Y!==R.lane?(_t&Y)===Y:(Sa&Y)===Y){var N=R.revertLane;if(N===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),Y===ji&&(L=!0);else if((Sa&N)===N){R=R.next,N===ji&&(L=!0);continue}else Y={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},T===null?(b=T=Y,m=u):T=T.next=Y,Et.lanes|=N,wa|=N;Y=R.action,ii&&n(u,Y),u=R.hasEagerState?R.eagerState:n(u,Y)}else N={lane:Y,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},T===null?(b=T=N,m=u):T=T.next=N,Et.lanes|=Y,wa|=Y;R=R.next}while(R!==null&&R!==e);if(T===null?m=u:T.next=b,!an(u,t.memoizedState)&&(we=!0,L&&(n=zi,n!==null)))throw n;t.memoizedState=u,t.baseState=m,t.baseQueue=T,o.lastRenderedState=u}return r===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function wu(t){var e=Se(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var o=n.dispatch,r=n.pending,u=e.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do u=t(u,m.action),m=m.next;while(m!==r);an(u,e.memoizedState)||(we=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,o]}function oh(t,e,n){var o=Et,r=Se(),u=Ht;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var m=!an((Qt||r).memoizedState,n);m&&(r.memoizedState=n,we=!0),r=r.queue;var b=sh.bind(null,o,r,t);if(Ko(2048,8,b,[t]),r.getSnapshot!==e||m||xe!==null&&xe.memoizedState.tag&1){if(o.flags|=2048,Ui(9,xr(),rh.bind(null,o,r,n,e),null),It===null)throw Error(s(349));u||(Sa&124)!==0||lh(o,e,n)}return n}function lh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e=Ou(),Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rh(t,e,n,o){e.value=n,e.getSnapshot=o,uh(e)&&ch(t)}function sh(t,e,n){return n(function(){uh(e)&&ch(t)})}function uh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function ch(t){var e=Ci(t,2);e!==null&&cn(e,t,2)}function Cu(t){var e=We();if(typeof t=="function"){var n=t;if(t=n(),ii){Ne(!0);try{n()}finally{Ne(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:t},e}function fh(t,e,n,o){return t.baseState=n,Mu(t,Qt,typeof o=="function"?o:Wn)}function Zb(t,e,n,o,r){if(Tr(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};V.T!==null?n(!0):u.isTransition=!1,o(u),n=e.pending,n===null?(u.next=e.pending=u,dh(e,u)):(u.next=n.next,e.pending=n.next=u)}}function dh(t,e){var n=e.action,o=e.payload,r=t.state;if(e.isTransition){var u=V.T,m={};V.T=m;try{var b=n(r,o),T=V.S;T!==null&&T(m,b),hh(t,e,b)}catch(R){Ru(t,e,R)}finally{V.T=u}}else try{u=n(r,o),hh(t,e,u)}catch(R){Ru(t,e,R)}}function hh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){mh(t,e,o)},function(o){return Ru(t,e,o)}):mh(t,e,n)}function mh(t,e,n){e.status="fulfilled",e.value=n,ph(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,dh(t,n)))}function Ru(t,e,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=n,ph(e),e=e.next;while(e!==o)}t.action=null}function ph(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function gh(t,e){return e}function yh(t,e){if(Ht){var n=It.formState;if(n!==null){t:{var o=Et;if(Ht){if(re){e:{for(var r=re,u=Nn;r.nodeType!==8;){if(!u){r=null;break e}if(r=On(r.nextSibling),r===null){r=null;break e}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){re=On(r.nextSibling),o=r.data==="F!";break t}}ti(o)}o=!1}o&&(e=n[0])}}return n=We(),n.memoizedState=n.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gh,lastRenderedState:e},n.queue=o,n=Vh.bind(null,Et,o),o.dispatch=n,o=Cu(!1),u=_u.bind(null,Et,!1,o.queue),o=We(),r={state:e,dispatch:null,action:t,pending:null},o.queue=r,n=Zb.bind(null,Et,r,u,n),r.dispatch=n,o.memoizedState=t,[e,n,!1]}function bh(t){var e=Se();return vh(e,Qt,t)}function vh(t,e,n){if(e=Mu(t,e,gh)[0],t=vr(Wn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Qo(e)}catch(m){throw m===qo?hr:m}else o=e;e=Se();var r=e.queue,u=r.dispatch;return n!==e.memoizedState&&(Et.flags|=2048,Ui(9,xr(),Qb.bind(null,r,n),null)),[o,u,t]}function Qb(t,e){t.action=e}function xh(t){var e=Se(),n=Qt;if(n!==null)return vh(e,n,t);Se(),e=e.memoizedState,n=Se();var o=n.queue.dispatch;return n.memoizedState=t,[e,o,!1]}function Ui(t,e,n,o){return t={tag:t,create:n,deps:o,inst:e,next:null},e=Et.updateQueue,e===null&&(e=Ou(),Et.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t),t}function xr(){return{destroy:void 0,resource:void 0}}function Sh(){return Se().memoizedState}function Sr(t,e,n,o){var r=We();o=o===void 0?null:o,Et.flags|=t,r.memoizedState=Ui(1|e,xr(),n,o)}function Ko(t,e,n,o){var r=Se();o=o===void 0?null:o;var u=r.memoizedState.inst;Qt!==null&&o!==null&&xu(o,Qt.memoizedState.deps)?r.memoizedState=Ui(e,u,n,o):(Et.flags|=t,r.memoizedState=Ui(1|e,u,n,o))}function Th(t,e){Sr(8390656,8,t,e)}function Ah(t,e){Ko(2048,8,t,e)}function Dh(t,e){return Ko(4,2,t,e)}function Oh(t,e){return Ko(4,4,t,e)}function Eh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mh(t,e,n){n=n!=null?n.concat([t]):null,Ko(4,4,Eh.bind(null,e,t),n)}function Nu(){}function wh(t,e){var n=Se();e=e===void 0?null:e;var o=n.memoizedState;return e!==null&&xu(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function Ch(t,e){var n=Se();e=e===void 0?null:e;var o=n.memoizedState;if(e!==null&&xu(e,o[1]))return o[0];if(o=t(),ii){Ne(!0);try{t()}finally{Ne(!1)}}return n.memoizedState=[o,e],o}function ku(t,e,n){return n===void 0||(Sa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=k0(),Et.lanes|=t,wa|=t,n)}function Rh(t,e,n,o){return an(n,e)?n:_i.current!==null?(t=ku(t,n,o),an(t,e)||(we=!0),t):(Sa&42)===0?(we=!0,t.memoizedState=n):(t=k0(),Et.lanes|=t,wa|=t,e)}function Nh(t,e,n,o,r){var u=F.p;F.p=u!==0&&8>u?u:8;var m=V.T,b={};V.T=b,_u(t,!1,e,n);try{var T=r(),R=V.S;if(R!==null&&R(b,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var L=Xb(T,o);Fo(t,e,L,un(t))}else Fo(t,e,o,un(t))}catch(Y){Fo(t,e,{then:function(){},status:"rejected",reason:Y},un())}finally{F.p=u,V.T=m}}function Kb(){}function ju(t,e,n,o){if(t.tag!==5)throw Error(s(476));var r=kh(t).queue;Nh(t,r,e,I,n===null?Kb:function(){return jh(t),n(o)})}function kh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:I},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function jh(t){var e=kh(t).next.queue;Fo(t,e,{},un())}function zu(){return qe(hl)}function zh(){return Se().memoizedState}function _h(){return Se().memoizedState}function Fb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=un();t=va(n);var o=xa(e,t,n);o!==null&&(cn(o,e,n),Xo(o,e,n)),e={cache:cu()},t.payload=e;return}e=e.return}}function Jb(t,e,n){var o=un();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Tr(t)?Bh(e,n):(n=tu(t,e,n,o),n!==null&&(cn(n,t,o),Uh(n,e,o)))}function Vh(t,e,n){var o=un();Fo(t,e,n,o)}function Fo(t,e,n,o){var r={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tr(t))Bh(e,r);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var m=e.lastRenderedState,b=u(m,n);if(r.hasEagerState=!0,r.eagerState=b,an(b,m))return or(t,e,r,0),It===null&&ir(),!1}catch{}finally{}if(n=tu(t,e,r,o),n!==null)return cn(n,t,o),Uh(n,e,o),!0}return!1}function _u(t,e,n,o){if(o={lane:2,revertLane:hc(),action:o,hasEagerState:!1,eagerState:null,next:null},Tr(t)){if(e)throw Error(s(479))}else e=tu(t,n,o,2),e!==null&&cn(e,t,2)}function Tr(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Bh(t,e){Vi=gr=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Uh(t,e,n){if((n&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Pl(t,n)}}var Ar={readContext:qe,use:br,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de},Lh={readContext:qe,use:br,useCallback:function(t,e){return We().memoizedState=[t,e===void 0?null:e],t},useContext:qe,useEffect:Th,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Sr(4194308,4,Eh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sr(4194308,4,t,e)},useInsertionEffect:function(t,e){Sr(4,2,t,e)},useMemo:function(t,e){var n=We();e=e===void 0?null:e;var o=t();if(ii){Ne(!0);try{t()}finally{Ne(!1)}}return n.memoizedState=[o,e],o},useReducer:function(t,e,n){var o=We();if(n!==void 0){var r=n(e);if(ii){Ne(!0);try{n(e)}finally{Ne(!1)}}}else r=e;return o.memoizedState=o.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},o.queue=t,t=t.dispatch=Jb.bind(null,Et,t),[o.memoizedState,t]},useRef:function(t){var e=We();return t={current:t},e.memoizedState=t},useState:function(t){t=Cu(t);var e=t.queue,n=Vh.bind(null,Et,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Nu,useDeferredValue:function(t,e){var n=We();return ku(n,t,e)},useTransition:function(){var t=Cu(!1);return t=Nh.bind(null,Et,t.queue,!0,!1),We().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var o=Et,r=We();if(Ht){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),It===null)throw Error(s(349));(_t&124)!==0||lh(o,e,n)}r.memoizedState=n;var u={value:n,getSnapshot:e};return r.queue=u,Th(sh.bind(null,o,u,t),[t]),o.flags|=2048,Ui(9,xr(),rh.bind(null,o,u,n,e),null),n},useId:function(){var t=We(),e=It.identifierPrefix;if(Ht){var n=Kn,o=Qn;n=(o&~(1<<32-ke(o)-1)).toString(32)+n,e="«"+e+"R"+n,n=yr++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Yb++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:zu,useFormState:yh,useActionState:yh,useOptimistic:function(t){var e=We();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=_u.bind(null,Et,!0,n),n.dispatch=e,[t,e]},useMemoCache:Eu,useCacheRefresh:function(){return We().memoizedState=Fb.bind(null,Et)}},Hh={readContext:qe,use:br,useCallback:wh,useContext:qe,useEffect:Ah,useImperativeHandle:Mh,useInsertionEffect:Dh,useLayoutEffect:Oh,useMemo:Ch,useReducer:vr,useRef:Sh,useState:function(){return vr(Wn)},useDebugValue:Nu,useDeferredValue:function(t,e){var n=Se();return Rh(n,Qt.memoizedState,t,e)},useTransition:function(){var t=vr(Wn)[0],e=Se().memoizedState;return[typeof t=="boolean"?t:Qo(t),e]},useSyncExternalStore:oh,useId:zh,useHostTransitionStatus:zu,useFormState:bh,useActionState:bh,useOptimistic:function(t,e){var n=Se();return fh(n,Qt,t,e)},useMemoCache:Eu,useCacheRefresh:_h},Wb={readContext:qe,use:br,useCallback:wh,useContext:qe,useEffect:Ah,useImperativeHandle:Mh,useInsertionEffect:Dh,useLayoutEffect:Oh,useMemo:Ch,useReducer:wu,useRef:Sh,useState:function(){return wu(Wn)},useDebugValue:Nu,useDeferredValue:function(t,e){var n=Se();return Qt===null?ku(n,t,e):Rh(n,Qt.memoizedState,t,e)},useTransition:function(){var t=wu(Wn)[0],e=Se().memoizedState;return[typeof t=="boolean"?t:Qo(t),e]},useSyncExternalStore:oh,useId:zh,useHostTransitionStatus:zu,useFormState:xh,useActionState:xh,useOptimistic:function(t,e){var n=Se();return Qt!==null?fh(n,Qt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Eu,useCacheRefresh:_h},Li=null,Jo=0;function Dr(t){var e=Jo;return Jo+=1,Li===null&&(Li=[]),Wd(Li,t,e)}function Wo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Or(t,e){throw e.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function qh(t){var e=t._init;return e(t._payload)}function Ph(t){function e(O,D){if(t){var C=O.deletions;C===null?(O.deletions=[D],O.flags|=16):C.push(D)}}function n(O,D){if(!t)return null;for(;D!==null;)e(O,D),D=D.sibling;return null}function o(O){for(var D=new Map;O!==null;)O.key!==null?D.set(O.key,O):D.set(O.index,O),O=O.sibling;return D}function r(O,D){return O=Zn(O,D),O.index=0,O.sibling=null,O}function u(O,D,C){return O.index=C,t?(C=O.alternate,C!==null?(C=C.index,C<D?(O.flags|=67108866,D):C):(O.flags|=67108866,D)):(O.flags|=1048576,D)}function m(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function b(O,D,C,P){return D===null||D.tag!==6?(D=nu(C,O.mode,P),D.return=O,D):(D=r(D,C),D.return=O,D)}function T(O,D,C,P){var at=C.type;return at===M?L(O,D,C.props.children,P,C.key):D!==null&&(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===G&&qh(at)===D.type)?(D=r(D,C.props),Wo(D,C),D.return=O,D):(D=rr(C.type,C.key,C.props,null,O.mode,P),Wo(D,C),D.return=O,D)}function R(O,D,C,P){return D===null||D.tag!==4||D.stateNode.containerInfo!==C.containerInfo||D.stateNode.implementation!==C.implementation?(D=au(C,O.mode,P),D.return=O,D):(D=r(D,C.children||[]),D.return=O,D)}function L(O,D,C,P,at){return D===null||D.tag!==7?(D=Ja(C,O.mode,P,at),D.return=O,D):(D=r(D,C),D.return=O,D)}function Y(O,D,C){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=nu(""+D,O.mode,C),D.return=O,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case x:return C=rr(D.type,D.key,D.props,null,O.mode,C),Wo(C,D),C.return=O,C;case E:return D=au(D,O.mode,C),D.return=O,D;case G:var P=D._init;return D=P(D._payload),Y(O,D,C)}if(Pt(D)||Lt(D))return D=Ja(D,O.mode,C,null),D.return=O,D;if(typeof D.then=="function")return Y(O,Dr(D),C);if(D.$$typeof===j)return Y(O,fr(O,D),C);Or(O,D)}return null}function N(O,D,C,P){var at=D!==null?D.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return at!==null?null:b(O,D,""+C,P);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case x:return C.key===at?T(O,D,C,P):null;case E:return C.key===at?R(O,D,C,P):null;case G:return at=C._init,C=at(C._payload),N(O,D,C,P)}if(Pt(C)||Lt(C))return at!==null?null:L(O,D,C,P,null);if(typeof C.then=="function")return N(O,D,Dr(C),P);if(C.$$typeof===j)return N(O,D,fr(O,C),P);Or(O,C)}return null}function k(O,D,C,P,at){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return O=O.get(C)||null,b(D,O,""+P,at);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case x:return O=O.get(P.key===null?C:P.key)||null,T(D,O,P,at);case E:return O=O.get(P.key===null?C:P.key)||null,R(D,O,P,at);case G:var Mt=P._init;return P=Mt(P._payload),k(O,D,C,P,at)}if(Pt(P)||Lt(P))return O=O.get(C)||null,L(D,O,P,at,null);if(typeof P.then=="function")return k(O,D,C,Dr(P),at);if(P.$$typeof===j)return k(O,D,C,fr(D,P),at);Or(D,P)}return null}function bt(O,D,C,P){for(var at=null,Mt=null,lt=D,pt=D=0,Re=null;lt!==null&&pt<C.length;pt++){lt.index>pt?(Re=lt,lt=null):Re=lt.sibling;var Ut=N(O,lt,C[pt],P);if(Ut===null){lt===null&&(lt=Re);break}t&&lt&&Ut.alternate===null&&e(O,lt),D=u(Ut,D,pt),Mt===null?at=Ut:Mt.sibling=Ut,Mt=Ut,lt=Re}if(pt===C.length)return n(O,lt),Ht&&$a(O,pt),at;if(lt===null){for(;pt<C.length;pt++)lt=Y(O,C[pt],P),lt!==null&&(D=u(lt,D,pt),Mt===null?at=lt:Mt.sibling=lt,Mt=lt);return Ht&&$a(O,pt),at}for(lt=o(lt);pt<C.length;pt++)Re=k(lt,O,pt,C[pt],P),Re!==null&&(t&&Re.alternate!==null&&lt.delete(Re.key===null?pt:Re.key),D=u(Re,D,pt),Mt===null?at=Re:Mt.sibling=Re,Mt=Re);return t&&lt.forEach(function(Ba){return e(O,Ba)}),Ht&&$a(O,pt),at}function mt(O,D,C,P){if(C==null)throw Error(s(151));for(var at=null,Mt=null,lt=D,pt=D=0,Re=null,Ut=C.next();lt!==null&&!Ut.done;pt++,Ut=C.next()){lt.index>pt?(Re=lt,lt=null):Re=lt.sibling;var Ba=N(O,lt,Ut.value,P);if(Ba===null){lt===null&&(lt=Re);break}t&&lt&&Ba.alternate===null&&e(O,lt),D=u(Ba,D,pt),Mt===null?at=Ba:Mt.sibling=Ba,Mt=Ba,lt=Re}if(Ut.done)return n(O,lt),Ht&&$a(O,pt),at;if(lt===null){for(;!Ut.done;pt++,Ut=C.next())Ut=Y(O,Ut.value,P),Ut!==null&&(D=u(Ut,D,pt),Mt===null?at=Ut:Mt.sibling=Ut,Mt=Ut);return Ht&&$a(O,pt),at}for(lt=o(lt);!Ut.done;pt++,Ut=C.next())Ut=k(lt,O,pt,Ut.value,P),Ut!==null&&(t&&Ut.alternate!==null&&lt.delete(Ut.key===null?pt:Ut.key),D=u(Ut,D,pt),Mt===null?at=Ut:Mt.sibling=Ut,Mt=Ut);return t&&lt.forEach(function($v){return e(O,$v)}),Ht&&$a(O,pt),at}function Ft(O,D,C,P){if(typeof C=="object"&&C!==null&&C.type===M&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case x:t:{for(var at=C.key;D!==null;){if(D.key===at){if(at=C.type,at===M){if(D.tag===7){n(O,D.sibling),P=r(D,C.props.children),P.return=O,O=P;break t}}else if(D.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===G&&qh(at)===D.type){n(O,D.sibling),P=r(D,C.props),Wo(P,C),P.return=O,O=P;break t}n(O,D);break}else e(O,D);D=D.sibling}C.type===M?(P=Ja(C.props.children,O.mode,P,C.key),P.return=O,O=P):(P=rr(C.type,C.key,C.props,null,O.mode,P),Wo(P,C),P.return=O,O=P)}return m(O);case E:t:{for(at=C.key;D!==null;){if(D.key===at)if(D.tag===4&&D.stateNode.containerInfo===C.containerInfo&&D.stateNode.implementation===C.implementation){n(O,D.sibling),P=r(D,C.children||[]),P.return=O,O=P;break t}else{n(O,D);break}else e(O,D);D=D.sibling}P=au(C,O.mode,P),P.return=O,O=P}return m(O);case G:return at=C._init,C=at(C._payload),Ft(O,D,C,P)}if(Pt(C))return bt(O,D,C,P);if(Lt(C)){if(at=Lt(C),typeof at!="function")throw Error(s(150));return C=at.call(C),mt(O,D,C,P)}if(typeof C.then=="function")return Ft(O,D,Dr(C),P);if(C.$$typeof===j)return Ft(O,D,fr(O,C),P);Or(O,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,D!==null&&D.tag===6?(n(O,D.sibling),P=r(D,C),P.return=O,O=P):(n(O,D),P=nu(C,O.mode,P),P.return=O,O=P),m(O)):n(O,D)}return function(O,D,C,P){try{Jo=0;var at=Ft(O,D,C,P);return Li=null,at}catch(lt){if(lt===qo||lt===hr)throw lt;var Mt=on(29,lt,null,O.mode);return Mt.lanes=P,Mt.return=O,Mt}finally{}}}var Hi=Ph(!0),Xh=Ph(!1),yn=q(null),kn=null;function Ta(t){var e=t.alternate;$(De,De.current&1),$(yn,t),kn===null&&(e===null||_i.current!==null||e.memoizedState!==null)&&(kn=t)}function Yh(t){if(t.tag===22){if($(De,De.current),$(yn,t),kn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(kn=t)}}else Aa()}function Aa(){$(De,De.current),$(yn,yn.current)}function $n(t){tt(yn),kn===t&&(kn=null),tt(De)}var De=q(0);function Er(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Oc(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Vu(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:y({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={enqueueSetState:function(t,e,n){t=t._reactInternals;var o=un(),r=va(o);r.payload=e,n!=null&&(r.callback=n),e=xa(t,r,o),e!==null&&(cn(e,t,o),Xo(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=un(),r=va(o);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=xa(t,r,o),e!==null&&(cn(e,t,o),Xo(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),o=va(n);o.tag=2,e!=null&&(o.callback=e),e=xa(t,o,n),e!==null&&(cn(e,t,n),Xo(e,t,n))}};function Gh(t,e,n,o,r,u,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,m):e.prototype&&e.prototype.isPureReactComponent?!jo(n,o)||!jo(r,u):!0}function Zh(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function oi(t,e){var n=e;if("ref"in e){n={};for(var o in e)o!=="ref"&&(n[o]=e[o])}if(t=t.defaultProps){n===e&&(n=y({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}var Mr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qh(t){Mr(t)}function Kh(t){console.error(t)}function Fh(t){Mr(t)}function wr(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Jh(t,e,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Uu(t,e,n){return n=va(n),n.tag=3,n.payload={element:null},n.callback=function(){wr(t,e)},n}function Wh(t){return t=va(t),t.tag=3,t}function $h(t,e,n,o){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=o.value;t.payload=function(){return r(u)},t.callback=function(){Jh(e,n,o)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Jh(e,n,o),typeof r!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function $b(t,e,n,o,r){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=n.alternate,e!==null&&Uo(e,n,r,!0),n=yn.current,n!==null){switch(n.tag){case 13:return kn===null?sc():n.alternate===null&&se===0&&(se=3),n.flags&=-257,n.flags|=65536,n.lanes=r,o===hu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([o]):e.add(o),cc(t,o,r)),!1;case 22:return n.flags|=65536,o===hu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([o]):n.add(o)),cc(t,o,r)),!1}throw Error(s(435,n.tag))}return cc(t,o,r),sc(),!1}if(Ht)return e=yn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,o!==lu&&(t=Error(s(422),{cause:o}),Bo(hn(t,n)))):(o!==lu&&(e=Error(s(423),{cause:o}),Bo(hn(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,o=hn(o,n),r=Uu(t.stateNode,o,r),gu(t,r),se!==4&&(se=2)),!1;var u=Error(s(520),{cause:o});if(u=hn(u,n),il===null?il=[u]:il.push(u),se!==4&&(se=2),e===null)return!0;o=hn(o,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=Uu(n.stateNode,o,t),gu(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ca===null||!Ca.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Wh(r),$h(r,t,n,o),gu(n,r),!1}n=n.return}while(n!==null);return!1}var Ih=Error(s(461)),we=!1;function ze(t,e,n,o){e.child=t===null?Xh(e,null,n,o):Hi(e,t.child,n,o)}function t0(t,e,n,o,r){n=n.render;var u=e.ref;if("ref"in o){var m={};for(var b in o)b!=="ref"&&(m[b]=o[b])}else m=o;return ni(e),o=Su(t,e,n,m,u,r),b=Tu(),t!==null&&!we?(Au(t,e,r),In(t,e,r)):(Ht&&b&&iu(e),e.flags|=1,ze(t,e,o,r),e.child)}function e0(t,e,n,o,r){if(t===null){var u=n.type;return typeof u=="function"&&!eu(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,n0(t,e,u,o,r)):(t=rr(n.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Zu(t,r)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(m,o)&&t.ref===e.ref)return In(t,e,r)}return e.flags|=1,t=Zn(u,o),t.ref=e.ref,t.return=e,e.child=t}function n0(t,e,n,o,r){if(t!==null){var u=t.memoizedProps;if(jo(u,o)&&t.ref===e.ref)if(we=!1,e.pendingProps=o=u,Zu(t,r))(t.flags&131072)!==0&&(we=!0);else return e.lanes=t.lanes,In(t,e,r)}return Lu(t,e,n,o,r)}function a0(t,e,n){var o=e.pendingProps,r=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((e.flags&128)!==0){if(o=u!==null?u.baseLanes|n:n,t!==null){for(r=e.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;e.childLanes=u&~o}else e.childLanes=0,e.child=null;return i0(t,e,o,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&dr(e,u!==null?u.cachePool:null),u!==null?nh(e,u):bu(),Yh(e);else return e.lanes=e.childLanes=536870912,i0(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(dr(e,u.cachePool),nh(e,u),Aa(),e.memoizedState=null):(t!==null&&dr(e,null),bu(),Aa());return ze(t,e,r,n),e.child}function i0(t,e,n,o){var r=du();return r=r===null?null:{parent:Ae._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&dr(e,null),bu(),Yh(e),t!==null&&Uo(t,e,o,!0),null}function Cr(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Lu(t,e,n,o,r){return ni(e),n=Su(t,e,n,o,void 0,r),o=Tu(),t!==null&&!we?(Au(t,e,r),In(t,e,r)):(Ht&&o&&iu(e),e.flags|=1,ze(t,e,n,r),e.child)}function o0(t,e,n,o,r,u){return ni(e),e.updateQueue=null,n=ih(e,o,n,r),ah(t),o=Tu(),t!==null&&!we?(Au(t,e,u),In(t,e,u)):(Ht&&o&&iu(e),e.flags|=1,ze(t,e,n,u),e.child)}function l0(t,e,n,o,r){if(ni(e),e.stateNode===null){var u=Ri,m=n.contextType;typeof m=="object"&&m!==null&&(u=qe(m)),u=new n(o,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Bu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=o,u.state=e.memoizedState,u.refs={},mu(e),m=n.contextType,u.context=typeof m=="object"&&m!==null?qe(m):Ri,u.state=e.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Vu(e,n,m,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Bu.enqueueReplaceState(u,u.state,null),Go(e,o,u,r),Yo(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,T=oi(n,b);u.props=T;var R=u.context,L=n.contextType;m=Ri,typeof L=="object"&&L!==null&&(m=qe(L));var Y=n.getDerivedStateFromProps;L=typeof Y=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,L||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||R!==m)&&Zh(e,u,o,m),ba=!1;var N=e.memoizedState;u.state=N,Go(e,o,u,r),Yo(),R=e.memoizedState,b||N!==R||ba?(typeof Y=="function"&&(Vu(e,n,Y,o),R=e.memoizedState),(T=ba||Gh(e,n,T,o,N,R,m))?(L||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=R),u.props=o,u.state=R,u.context=m,o=T):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{u=e.stateNode,pu(t,e),m=e.memoizedProps,L=oi(n,m),u.props=L,Y=e.pendingProps,N=u.context,R=n.contextType,T=Ri,typeof R=="object"&&R!==null&&(T=qe(R)),b=n.getDerivedStateFromProps,(R=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==Y||N!==T)&&Zh(e,u,o,T),ba=!1,N=e.memoizedState,u.state=N,Go(e,o,u,r),Yo();var k=e.memoizedState;m!==Y||N!==k||ba||t!==null&&t.dependencies!==null&&cr(t.dependencies)?(typeof b=="function"&&(Vu(e,n,b,o),k=e.memoizedState),(L=ba||Gh(e,n,L,o,N,k,T)||t!==null&&t.dependencies!==null&&cr(t.dependencies))?(R||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,k,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,k,T)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&N===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&N===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=k),u.props=o,u.state=k,u.context=T,o=L):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&N===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&N===t.memoizedState||(e.flags|=1024),o=!1)}return u=o,Cr(t,e),o=(e.flags&128)!==0,u||o?(u=e.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&o?(e.child=Hi(e,t.child,null,r),e.child=Hi(e,null,n,r)):ze(t,e,n,r),e.memoizedState=u.state,t=e.child):t=In(t,e,r),t}function r0(t,e,n,o){return Vo(),e.flags|=256,ze(t,e,n,o),e.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(t){return{baseLanes:t,cachePool:Kd()}}function Pu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=bn),t}function s0(t,e,n){var o=e.pendingProps,r=!1,u=(e.flags&128)!==0,m;if((m=u)||(m=t!==null&&t.memoizedState===null?!1:(De.current&2)!==0),m&&(r=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ht){if(r?Ta(e):Aa(),Ht){var b=re,T;if(T=b){t:{for(T=b,b=Nn;T.nodeType!==8;){if(!b){b=null;break t}if(T=On(T.nextSibling),T===null){b=null;break t}}b=T}b!==null?(e.memoizedState={dehydrated:b,treeContext:Wa!==null?{id:Qn,overflow:Kn}:null,retryLane:536870912,hydrationErrors:null},T=on(18,null,null,0),T.stateNode=b,T.return=e,e.child=T,Qe=e,re=null,T=!0):T=!1}T||ti(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Oc(b)?e.lanes=32:e.lanes=536870912,null;$n(e)}return b=o.children,o=o.fallback,r?(Aa(),r=e.mode,b=Rr({mode:"hidden",children:b},r),o=Ja(o,r,n,null),b.return=e,o.return=e,b.sibling=o,e.child=b,r=e.child,r.memoizedState=qu(n),r.childLanes=Pu(t,m,n),e.memoizedState=Hu,o):(Ta(e),Xu(e,b))}if(T=t.memoizedState,T!==null&&(b=T.dehydrated,b!==null)){if(u)e.flags&256?(Ta(e),e.flags&=-257,e=Yu(t,e,n)):e.memoizedState!==null?(Aa(),e.child=t.child,e.flags|=128,e=null):(Aa(),r=o.fallback,b=e.mode,o=Rr({mode:"visible",children:o.children},b),r=Ja(r,b,n,null),r.flags|=2,o.return=e,r.return=e,o.sibling=r,e.child=o,Hi(e,t.child,null,n),o=e.child,o.memoizedState=qu(n),o.childLanes=Pu(t,m,n),e.memoizedState=Hu,e=r);else if(Ta(e),Oc(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var R=m.dgst;m=R,o=Error(s(419)),o.stack="",o.digest=m,Bo({value:o,source:null,stack:null}),e=Yu(t,e,n)}else if(we||Uo(t,e,n,!1),m=(n&t.childLanes)!==0,we||m){if(m=It,m!==null&&(o=n&-n,o=(o&42)!==0?1:Xn(o),o=(o&(m.suspendedLanes|n))!==0?0:o,o!==0&&o!==T.retryLane))throw T.retryLane=o,Ci(t,o),cn(m,t,o),Ih;b.data==="$?"||sc(),e=Yu(t,e,n)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=T.treeContext,re=On(b.nextSibling),Qe=e,Ht=!0,Ia=null,Nn=!1,t!==null&&(pn[gn++]=Qn,pn[gn++]=Kn,pn[gn++]=Wa,Qn=t.id,Kn=t.overflow,Wa=e),e=Xu(e,o.children),e.flags|=4096);return e}return r?(Aa(),r=o.fallback,b=e.mode,T=t.child,R=T.sibling,o=Zn(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&65011712,R!==null?r=Zn(R,r):(r=Ja(r,b,n,null),r.flags|=2),r.return=e,o.return=e,o.sibling=r,e.child=o,o=r,r=e.child,b=t.child.memoizedState,b===null?b=qu(n):(T=b.cachePool,T!==null?(R=Ae._currentValue,T=T.parent!==R?{parent:R,pool:R}:T):T=Kd(),b={baseLanes:b.baseLanes|n,cachePool:T}),r.memoizedState=b,r.childLanes=Pu(t,m,n),e.memoizedState=Hu,o):(Ta(e),n=t.child,t=n.sibling,n=Zn(n,{mode:"visible",children:o.children}),n.return=e,n.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=n,e.memoizedState=null,n)}function Xu(t,e){return e=Rr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Rr(t,e){return t=on(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Yu(t,e,n){return Hi(e,t.child,null,n),t=Xu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u0(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),su(t.return,e,n)}function Gu(t,e,n,o,r){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=r)}function c0(t,e,n){var o=e.pendingProps,r=o.revealOrder,u=o.tail;if(ze(t,e,o.children,n),o=De.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,n,e);else if(t.tag===19)u0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch($(De,o),r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Er(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gu(e,!1,r,n,u);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Er(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gu(e,!0,n,null,u);break;case"together":Gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wa|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Uo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&cr(t)))}function Ib(t,e,n){switch(e.tag){case 3:Tt(e,e.stateNode.containerInfo),ya(e,Ae,t.memoizedState.cache),Vo();break;case 27:case 5:At(e);break;case 4:Tt(e,e.stateNode.containerInfo);break;case 10:ya(e,e.type,e.memoizedProps.value);break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(e),e.flags|=128,null):(n&e.child.childLanes)!==0?s0(t,e,n):(Ta(e),t=In(t,e,n),t!==null?t.sibling:null);Ta(e);break;case 19:var r=(t.flags&128)!==0;if(o=(n&e.childLanes)!==0,o||(Uo(t,e,n,!1),o=(n&e.childLanes)!==0),r){if(o)return c0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$(De,De.current),o)break;return null;case 22:case 23:return e.lanes=0,a0(t,e,n);case 24:ya(e,Ae,t.memoizedState.cache)}return In(t,e,n)}function f0(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)we=!0;else{if(!Zu(t,n)&&(e.flags&128)===0)return we=!1,Ib(t,e,n);we=(t.flags&131072)!==0}else we=!1,Ht&&(e.flags&1048576)!==0&&qd(e,ur,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var o=e.elementType,r=o._init;if(o=r(o._payload),e.type=o,typeof o=="function")eu(o)?(t=oi(o,t),e.tag=1,e=l0(null,e,o,t,n)):(e.tag=0,e=Lu(null,e,o,t,n));else{if(o!=null){if(r=o.$$typeof,r===Z){e.tag=11,e=t0(null,e,o,t,n);break t}else if(r===J){e.tag=14,e=e0(null,e,o,t,n);break t}}throw e=ie(o)||o,Error(s(306,e,""))}}return e;case 0:return Lu(t,e,e.type,e.pendingProps,n);case 1:return o=e.type,r=oi(o,e.pendingProps),l0(t,e,o,r,n);case 3:t:{if(Tt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));o=e.pendingProps;var u=e.memoizedState;r=u.element,pu(t,e),Go(e,o,null,n);var m=e.memoizedState;if(o=m.cache,ya(e,Ae,o),o!==u.cache&&uu(e,[Ae],n,!0),Yo(),o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=r0(t,e,o,n);break t}else if(o!==r){r=hn(Error(s(424)),e),Bo(r),e=r0(t,e,o,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(re=On(t.firstChild),Qe=e,Ht=!0,Ia=null,Nn=!0,n=Xh(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vo(),o===r){e=In(t,e,n);break t}ze(t,e,o,n)}e=e.child}return e;case 26:return Cr(t,e),t===null?(n=pm(e.type,null,e.pendingProps,null))?e.memoizedState=n:Ht||(n=e.type,t=e.pendingProps,o=Yr(ft.current).createElement(n),o[Me]=e,o[je]=t,Ve(o,n,t),ve(o),e.stateNode=o):e.memoizedState=pm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return At(e),t===null&&Ht&&(o=e.stateNode=dm(e.type,e.pendingProps,ft.current),Qe=e,Nn=!0,r=re,ka(e.type)?(Ec=r,re=On(o.firstChild)):re=r),ze(t,e,e.pendingProps.children,n),Cr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ht&&((r=o=re)&&(o=Mv(o,e.type,e.pendingProps,Nn),o!==null?(e.stateNode=o,Qe=e,re=On(o.firstChild),Nn=!1,r=!0):r=!1),r||ti(e)),At(e),r=e.type,u=e.pendingProps,m=t!==null?t.memoizedProps:null,o=u.children,Tc(r,u)?o=null:m!==null&&Tc(r,m)&&(e.flags|=32),e.memoizedState!==null&&(r=Su(t,e,Gb,null,null,n),hl._currentValue=r),Cr(t,e),ze(t,e,o,n),e.child;case 6:return t===null&&Ht&&((t=n=re)&&(n=wv(n,e.pendingProps,Nn),n!==null?(e.stateNode=n,Qe=e,re=null,t=!0):t=!1),t||ti(e)),null;case 13:return s0(t,e,n);case 4:return Tt(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Hi(e,null,o,n):ze(t,e,o,n),e.child;case 11:return t0(t,e,e.type,e.pendingProps,n);case 7:return ze(t,e,e.pendingProps,n),e.child;case 8:return ze(t,e,e.pendingProps.children,n),e.child;case 12:return ze(t,e,e.pendingProps.children,n),e.child;case 10:return o=e.pendingProps,ya(e,e.type,o.value),ze(t,e,o.children,n),e.child;case 9:return r=e.type._context,o=e.pendingProps.children,ni(e),r=qe(r),o=o(r),e.flags|=1,ze(t,e,o,n),e.child;case 14:return e0(t,e,e.type,e.pendingProps,n);case 15:return n0(t,e,e.type,e.pendingProps,n);case 19:return c0(t,e,n);case 31:return o=e.pendingProps,n=e.mode,o={mode:o.mode,children:o.children},t===null?(n=Rr(o,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Zn(t.child,o),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return a0(t,e,n);case 24:return ni(e),o=qe(Ae),t===null?(r=du(),r===null&&(r=It,u=cu(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),e.memoizedState={parent:o,cache:r},mu(e),ya(e,Ae,r)):((t.lanes&n)!==0&&(pu(t,e),Go(e,null,null,n),Yo()),r=t.memoizedState,u=e.memoizedState,r.parent!==o?(r={parent:o,cache:o},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),ya(e,Ae,o)):(o=u.cache,ya(e,Ae,o),o!==r.cache&&uu(e,[Ae],n,!0))),ze(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function ta(t){t.flags|=4}function d0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xm(e)){if(e=yn.current,e!==null&&((_t&4194048)===_t?kn!==null:(_t&62914560)!==_t&&(_t&536870912)===0||e!==kn))throw Po=hu,Fd;t.flags|=8192}}function Nr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ca():536870912,t.lanes|=e,Yi|=e)}function $o(t,e){if(!Ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function tv(t,e,n){var o=e.pendingProps;switch(ou(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(e),null;case 1:return oe(e),null;case 3:return n=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Jn(Ae),ht(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(_o(e)?ta(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Yd())),oe(e),null;case 26:return n=e.memoizedState,t===null?(ta(e),n!==null?(oe(e),d0(e,n)):(oe(e),e.flags&=-16777217)):n?n!==t.memoizedState?(ta(e),oe(e),d0(e,n)):(oe(e),e.flags&=-16777217):(t.memoizedProps!==o&&ta(e),oe(e),e.flags&=-16777217),null;case 27:dt(e),n=ft.current;var r=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ta(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return oe(e),null}t=it.current,_o(e)?Pd(e):(t=dm(r,o,n),e.stateNode=t,ta(e))}return oe(e),null;case 5:if(dt(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ta(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return oe(e),null}if(t=it.current,_o(e))Pd(e);else{switch(r=Yr(ft.current),t){case 1:t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=r.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?r.createElement("select",{is:o.is}):r.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?r.createElement(n,{is:o.is}):r.createElement(n)}}t[Me]=e,t[je]=o;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=t;t:switch(Ve(t,n,o),n){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ta(e)}}return oe(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&ta(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(s(166));if(t=ft.current,_o(e)){if(t=e.stateNode,n=e.memoizedProps,o=null,r=Qe,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}t[Me]=e,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||om(t.nodeValue,n)),t||ti(e)}else t=Yr(t).createTextNode(o),t[Me]=e,e.stateNode=t}return oe(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=_o(e),o!==null&&o.dehydrated!==null){if(t===null){if(!r)throw Error(s(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[Me]=e}else Vo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;oe(e),r=!1}else r=Yd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?($n(e),e):($n(e),null)}if($n(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=o!==null,t=t!==null&&t.memoizedState!==null,n){o=e.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==r&&(o.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Nr(e,e.updateQueue),oe(e),null;case 4:return ht(),t===null&&yc(e.stateNode.containerInfo),oe(e),null;case 10:return Jn(e.type),oe(e),null;case 19:if(tt(De),r=e.memoizedState,r===null)return oe(e),null;if(o=(e.flags&128)!==0,u=r.rendering,u===null)if(o)$o(r,!1);else{if(se!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Er(t),u!==null){for(e.flags|=128,$o(r,!1),t=u.updateQueue,e.updateQueue=t,Nr(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Hd(n,t),n=n.sibling;return $(De,De.current&1|2),e.child}t=t.sibling}r.tail!==null&&Dt()>zr&&(e.flags|=128,o=!0,$o(r,!1),e.lanes=4194304)}else{if(!o)if(t=Er(u),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,Nr(e,t),$o(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Ht)return oe(e),null}else 2*Dt()-r.renderingStartTime>zr&&n!==536870912&&(e.flags|=128,o=!0,$o(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Dt(),e.sibling=null,t=De.current,$(De,o?t&1|2:t&1),e):(oe(e),null);case 22:case 23:return $n(e),vu(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(n&536870912)!==0&&(e.flags&128)===0&&(oe(e),e.subtreeFlags&6&&(e.flags|=8192)):oe(e),n=e.updateQueue,n!==null&&Nr(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==n&&(e.flags|=2048),t!==null&&tt(ai),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Jn(Ae),oe(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function ev(t,e){switch(ou(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jn(Ae),ht(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dt(e),null;case 13:if($n(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(De),null;case 4:return ht(),null;case 10:return Jn(e.type),null;case 22:case 23:return $n(e),vu(),t!==null&&tt(ai),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Jn(Ae),null;case 25:return null;default:return null}}function h0(t,e){switch(ou(e),e.tag){case 3:Jn(Ae),ht();break;case 26:case 27:case 5:dt(e);break;case 4:ht();break;case 13:$n(e);break;case 19:tt(De);break;case 10:Jn(e.type);break;case 22:case 23:$n(e),vu(),t!==null&&tt(ai);break;case 24:Jn(Ae)}}function Io(t,e){try{var n=e.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var r=o.next;n=r;do{if((n.tag&t)===t){o=void 0;var u=n.create,m=n.inst;o=u(),m.destroy=o}n=n.next}while(n!==r)}}catch(b){$t(e,e.return,b)}}function Da(t,e,n){try{var o=e.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var u=r.next;o=u;do{if((o.tag&t)===t){var m=o.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,r=e;var T=n,R=b;try{R()}catch(L){$t(r,T,L)}}}o=o.next}while(o!==u)}}catch(L){$t(e,e.return,L)}}function m0(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{eh(e,n)}catch(o){$t(t,t.return,o)}}}function p0(t,e,n){n.props=oi(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){$t(t,e,o)}}function tl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof n=="function"?t.refCleanup=n(o):n.current=o}}catch(r){$t(t,e,r)}}function jn(t,e){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(r){$t(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){$t(t,e,r)}else n.current=null}function g0(t){var e=t.type,n=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break t;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(r){$t(t,t.return,r)}}function Qu(t,e,n){try{var o=t.stateNode;Tv(o,t.type,n,e),o[je]=e}catch(r){$t(t,t.return,r)}}function y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ka(t.type)||t.tag===4}function Ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xr));else if(o!==4&&(o===27&&ka(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}function kr(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(o===27&&ka(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(kr(t,e,n),t=t.sibling;t!==null;)kr(t,e,n),t=t.sibling}function b0(t){var e=t.stateNode,n=t.memoizedProps;try{for(var o=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);Ve(e,o,n),e[Me]=t,e[je]=n}catch(u){$t(t,t.return,u)}}var ea=!1,he=!1,Ju=!1,v0=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function nv(t,e){if(t=t.containerInfo,xc=Jr,t=Rd(t),Ks(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var m=0,b=-1,T=-1,R=0,L=0,Y=t,N=null;e:for(;;){for(var k;Y!==n||r!==0&&Y.nodeType!==3||(b=m+r),Y!==u||o!==0&&Y.nodeType!==3||(T=m+o),Y.nodeType===3&&(m+=Y.nodeValue.length),(k=Y.firstChild)!==null;)N=Y,Y=k;for(;;){if(Y===t)break e;if(N===n&&++R===r&&(b=m),N===u&&++L===o&&(T=m),(k=Y.nextSibling)!==null)break;Y=N,N=Y.parentNode}Y=k}n=b===-1||T===-1?null:{start:b,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:t,selectionRange:n},Jr=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){switch(e=Ce,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,r=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var bt=oi(n.type,r,n.elementType===n.type);t=o.getSnapshotBeforeUpdate(bt,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(mt){$t(n,n.return,mt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Dc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Dc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function x0(t,e,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Oa(t,n),o&4&&Io(5,n);break;case 1:if(Oa(t,n),o&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(m){$t(n,n.return,m)}else{var r=oi(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){$t(n,n.return,m)}}o&64&&m0(n),o&512&&tl(n,n.return);break;case 3:if(Oa(t,n),o&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{eh(t,e)}catch(m){$t(n,n.return,m)}}break;case 27:e===null&&o&4&&b0(n);case 26:case 5:Oa(t,n),e===null&&o&4&&g0(n),o&512&&tl(n,n.return);break;case 12:Oa(t,n);break;case 13:Oa(t,n),o&4&&A0(t,n),o&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=fv.bind(null,n),Cv(t,n))));break;case 22:if(o=n.memoizedState!==null||ea,!o){e=e!==null&&e.memoizedState!==null||he,r=ea;var u=he;ea=o,(he=e)&&!u?Ea(t,n,(n.subtreeFlags&8772)!==0):Oa(t,n),ea=r,he=u}break;case 30:break;default:Oa(t,n)}}function S0(t){var e=t.alternate;e!==null&&(t.alternate=null,S0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&vo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ee=null,$e=!1;function na(t,e,n){for(n=n.child;n!==null;)T0(t,e,n),n=n.sibling}function T0(t,e,n){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Ln,n)}catch{}switch(n.tag){case 26:he||jn(n,e),na(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:he||jn(n,e);var o=ee,r=$e;ka(n.type)&&(ee=n.stateNode,$e=!1),na(t,e,n),ul(n.stateNode),ee=o,$e=r;break;case 5:he||jn(n,e);case 6:if(o=ee,r=$e,ee=null,na(t,e,n),ee=o,$e=r,ee!==null)if($e)try{(ee.nodeType===9?ee.body:ee.nodeName==="HTML"?ee.ownerDocument.body:ee).removeChild(n.stateNode)}catch(u){$t(n,e,u)}else try{ee.removeChild(n.stateNode)}catch(u){$t(n,e,u)}break;case 18:ee!==null&&($e?(t=ee,cm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),yl(t)):cm(ee,n.stateNode));break;case 4:o=ee,r=$e,ee=n.stateNode.containerInfo,$e=!0,na(t,e,n),ee=o,$e=r;break;case 0:case 11:case 14:case 15:he||Da(2,n,e),he||Da(4,n,e),na(t,e,n);break;case 1:he||(jn(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"&&p0(n,e,o)),na(t,e,n);break;case 21:na(t,e,n);break;case 22:he=(o=he)||n.memoizedState!==null,na(t,e,n),he=o;break;default:na(t,e,n)}}function A0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yl(t)}catch(n){$t(e,e.return,n)}}function av(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new v0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new v0),e;default:throw Error(s(435,t.tag))}}function Wu(t,e){var n=av(t);e.forEach(function(o){var r=dv.bind(null,t,o);n.has(o)||(n.add(o),o.then(r,r))})}function ln(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o],u=t,m=e,b=m;t:for(;b!==null;){switch(b.tag){case 27:if(ka(b.type)){ee=b.stateNode,$e=!1;break t}break;case 5:ee=b.stateNode,$e=!1;break t;case 3:case 4:ee=b.stateNode.containerInfo,$e=!0;break t}b=b.return}if(ee===null)throw Error(s(160));T0(u,m,r),ee=null,$e=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)D0(e,t),e=e.sibling}var Dn=null;function D0(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ln(e,t),rn(t),o&4&&(Da(3,t,t.return),Io(3,t),Da(5,t,t.return));break;case 1:ln(e,t),rn(t),o&512&&(he||n===null||jn(n,n.return)),o&64&&ea&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var r=Dn;if(ln(e,t),rn(t),o&512&&(he||n===null||jn(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){t:{o=t.type,n=t.memoizedProps,r=r.ownerDocument||r;e:switch(o){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Ga]||u[Me]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(o),r.head.insertBefore(u,r.querySelector("head > title"))),Ve(u,o,n),u[Me]=t,ve(u),o=u;break t;case"link":var m=bm("link","href",r).get(o+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(u=m[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break e}}u=r.createElement(o),Ve(u,o,n),r.head.appendChild(u);break;case"meta":if(m=bm("meta","content",r).get(o+(n.content||""))){for(b=0;b<m.length;b++)if(u=m[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break e}}u=r.createElement(o),Ve(u,o,n),r.head.appendChild(u);break;default:throw Error(s(468,o))}u[Me]=t,ve(u),o=u}t.stateNode=o}else vm(r,t.type,t.stateNode);else t.stateNode=ym(r,o,t.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?vm(r,t.type,t.stateNode):ym(r,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Qu(t,t.memoizedProps,n.memoizedProps)}break;case 27:ln(e,t),rn(t),o&512&&(he||n===null||jn(n,n.return)),n!==null&&o&4&&Qu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ln(e,t),rn(t),o&512&&(he||n===null||jn(n,n.return)),t.flags&32){r=t.stateNode;try{He(r,"")}catch(k){$t(t,t.return,k)}}o&4&&t.stateNode!=null&&(r=t.memoizedProps,Qu(t,r,n!==null?n.memoizedProps:r)),o&1024&&(Ju=!0);break;case 6:if(ln(e,t),rn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(k){$t(t,t.return,k)}}break;case 3:if(Qr=null,r=Dn,Dn=Gr(e.containerInfo),ln(e,t),Dn=r,rn(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{yl(e.containerInfo)}catch(k){$t(t,t.return,k)}Ju&&(Ju=!1,O0(t));break;case 4:o=Dn,Dn=Gr(t.stateNode.containerInfo),ln(e,t),rn(t),Dn=o;break;case 12:ln(e,t),rn(t);break;case 13:ln(e,t),rn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ac=Dt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wu(t,o)));break;case 22:r=t.memoizedState!==null;var T=n!==null&&n.memoizedState!==null,R=ea,L=he;if(ea=R||r,he=L||T,ln(e,t),he=L,ea=R,rn(t),o&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||T||ea||he||li(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){T=n=e;try{if(u=T.stateNode,r)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=T.stateNode;var Y=T.memoizedProps.style,N=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;b.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(k){$t(T,T.return,k)}}}else if(e.tag===6){if(n===null){T=e;try{T.stateNode.nodeValue=r?"":T.memoizedProps}catch(k){$t(T,T.return,k)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Wu(t,n))));break;case 19:ln(e,t),rn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wu(t,o)));break;case 30:break;case 21:break;default:ln(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{for(var n,o=t.return;o!==null;){if(y0(o)){n=o;break}o=o.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,u=Ku(t);kr(t,u,r);break;case 5:var m=n.stateNode;n.flags&32&&(He(m,""),n.flags&=-33);var b=Ku(t);kr(t,b,m);break;case 3:case 4:var T=n.stateNode.containerInfo,R=Ku(t);Fu(t,R,T);break;default:throw Error(s(161))}}catch(L){$t(t,t.return,L)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function O0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;O0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Oa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)x0(t,e.alternate,e),e=e.sibling}function li(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Da(4,e,e.return),li(e);break;case 1:jn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&p0(e,e.return,n),li(e);break;case 27:ul(e.stateNode);case 26:case 5:jn(e,e.return),li(e);break;case 22:e.memoizedState===null&&li(e);break;case 30:li(e);break;default:li(e)}t=t.sibling}}function Ea(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,r=t,u=e,m=u.flags;switch(u.tag){case 0:case 11:case 15:Ea(r,u,n),Io(4,u);break;case 1:if(Ea(r,u,n),o=u,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(R){$t(o,o.return,R)}if(o=u,r=o.updateQueue,r!==null){var b=o.stateNode;try{var T=r.shared.hiddenCallbacks;if(T!==null)for(r.shared.hiddenCallbacks=null,r=0;r<T.length;r++)th(T[r],b)}catch(R){$t(o,o.return,R)}}n&&m&64&&m0(u),tl(u,u.return);break;case 27:b0(u);case 26:case 5:Ea(r,u,n),n&&o===null&&m&4&&g0(u),tl(u,u.return);break;case 12:Ea(r,u,n);break;case 13:Ea(r,u,n),n&&m&4&&A0(r,u);break;case 22:u.memoizedState===null&&Ea(r,u,n),tl(u,u.return);break;case 30:break;default:Ea(r,u,n)}e=e.sibling}}function $u(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Lo(n))}function Iu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Lo(t))}function zn(t,e,n,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)E0(t,e,n,o),e=e.sibling}function E0(t,e,n,o){var r=e.flags;switch(e.tag){case 0:case 11:case 15:zn(t,e,n,o),r&2048&&Io(9,e);break;case 1:zn(t,e,n,o);break;case 3:zn(t,e,n,o),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Lo(t)));break;case 12:if(r&2048){zn(t,e,n,o),t=e.stateNode;try{var u=e.memoizedProps,m=u.id,b=u.onPostCommit;typeof b=="function"&&b(m,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){$t(e,e.return,T)}}else zn(t,e,n,o);break;case 13:zn(t,e,n,o);break;case 23:break;case 22:u=e.stateNode,m=e.alternate,e.memoizedState!==null?u._visibility&2?zn(t,e,n,o):el(t,e):u._visibility&2?zn(t,e,n,o):(u._visibility|=2,qi(t,e,n,o,(e.subtreeFlags&10256)!==0)),r&2048&&$u(m,e);break;case 24:zn(t,e,n,o),r&2048&&Iu(e.alternate,e);break;default:zn(t,e,n,o)}}function qi(t,e,n,o,r){for(r=r&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,m=e,b=n,T=o,R=m.flags;switch(m.tag){case 0:case 11:case 15:qi(u,m,b,T,r),Io(8,m);break;case 23:break;case 22:var L=m.stateNode;m.memoizedState!==null?L._visibility&2?qi(u,m,b,T,r):el(u,m):(L._visibility|=2,qi(u,m,b,T,r)),r&&R&2048&&$u(m.alternate,m);break;case 24:qi(u,m,b,T,r),r&&R&2048&&Iu(m.alternate,m);break;default:qi(u,m,b,T,r)}e=e.sibling}}function el(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,o=e,r=o.flags;switch(o.tag){case 22:el(n,o),r&2048&&$u(o.alternate,o);break;case 24:el(n,o),r&2048&&Iu(o.alternate,o);break;default:el(n,o)}e=e.sibling}}var nl=8192;function Pi(t){if(t.subtreeFlags&nl)for(t=t.child;t!==null;)M0(t),t=t.sibling}function M0(t){switch(t.tag){case 26:Pi(t),t.flags&nl&&t.memoizedState!==null&&Pv(Dn,t.memoizedState,t.memoizedProps);break;case 5:Pi(t);break;case 3:case 4:var e=Dn;Dn=Gr(t.stateNode.containerInfo),Pi(t),Dn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=nl,nl=16777216,Pi(t),nl=e):Pi(t));break;default:Pi(t)}}function w0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function al(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Ce=o,R0(o,t)}w0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)C0(t),t=t.sibling}function C0(t){switch(t.tag){case 0:case 11:case 15:al(t),t.flags&2048&&Da(9,t,t.return);break;case 3:al(t);break;case 12:al(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,jr(t)):al(t);break;default:al(t)}}function jr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Ce=o,R0(o,t)}w0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Da(8,e,e.return),jr(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,jr(e));break;default:jr(e)}t=t.sibling}}function R0(t,e){for(;Ce!==null;){var n=Ce;switch(n.tag){case 0:case 11:case 15:Da(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Lo(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Ce=o;else t:for(n=t;Ce!==null;){o=Ce;var r=o.sibling,u=o.return;if(S0(o),o===n){Ce=null;break t}if(r!==null){r.return=u,Ce=r;break t}Ce=u}}}var iv={getCacheForType:function(t){var e=qe(Ae),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},ov=typeof WeakMap=="function"?WeakMap:Map,Xt=0,It=null,Nt=null,_t=0,Yt=0,sn=null,Ma=!1,Xi=!1,tc=!1,aa=0,se=0,wa=0,ri=0,ec=0,bn=0,Yi=0,il=null,Ie=null,nc=!1,ac=0,zr=1/0,_r=null,Ca=null,_e=0,Ra=null,Gi=null,Zi=0,ic=0,oc=null,N0=null,ol=0,lc=null;function un(){if((Xt&2)!==0&&_t!==0)return _t&-_t;if(V.T!==null){var t=ji;return t!==0?t:hc()}return ye()}function k0(){bn===0&&(bn=(_t&536870912)===0||Ht?nn():536870912);var t=yn.current;return t!==null&&(t.flags|=32),bn}function cn(t,e,n){(t===It&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(Qi(t,0),Na(t,_t,bn,!1)),Pn(t,n),((Xt&2)===0||t!==It)&&(t===It&&((Xt&2)===0&&(ri|=n),se===4&&Na(t,_t,bn,!1)),_n(t))}function j0(t,e,n){if((Xt&6)!==0)throw Error(s(327));var o=!n&&(e&124)===0&&(e&t.expiredLanes)===0||qn(t,e),r=o?sv(t,e):uc(t,e,!0),u=o;do{if(r===0){Xi&&!o&&Na(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!lv(n)){r=uc(t,e,!1),u=!1;continue}if(r===2){if(u=e,t.errorRecoveryDisabledLanes&u)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var b=t;r=il;var T=b.current.memoizedState.isDehydrated;if(T&&(Qi(b,m).flags|=256),m=uc(b,m,!1),m!==2){if(tc&&!T){b.errorRecoveryDisabledLanes|=u,ri|=u,r=4;break t}u=Ie,Ie=r,u!==null&&(Ie===null?Ie=u:Ie.push.apply(Ie,u))}r=m}if(u=!1,r!==2)continue}}if(r===1){Qi(t,0),Na(t,e,0,!0);break}t:{switch(o=t,u=r,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Na(o,e,bn,!Ma);break t;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(r=ac+300-Dt(),10<r)){if(Na(o,e,bn,!Ma),pi(o,0,!0)!==0)break t;o.timeoutHandle=sm(z0.bind(null,o,n,Ie,_r,nc,e,bn,ri,Yi,Ma,u,2,-0,0),r);break t}z0(o,n,Ie,_r,nc,e,bn,ri,Yi,Ma,u,0,-0,0)}}break}while(!0);_n(t)}function z0(t,e,n,o,r,u,m,b,T,R,L,Y,N,k){if(t.timeoutHandle=-1,Y=e.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(dl={stylesheets:null,count:0,unsuspend:qv},M0(e),Y=Xv(),Y!==null)){t.cancelPendingCommit=Y(q0.bind(null,t,e,u,n,o,r,m,b,T,L,1,N,k)),Na(t,u,m,!R);return}q0(t,e,u,n,o,r,m,b,T)}function lv(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var r=n[o],u=r.getSnapshot;r=r.value;try{if(!an(u(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Na(t,e,n,o){e&=~ec,e&=~ri,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var r=e;0<r;){var u=31-ke(r),m=1<<u;o[u]=-1,r&=~m}n!==0&&yi(t,n,e)}function Vr(){return(Xt&6)===0?(ll(0),!1):!0}function rc(){if(Nt!==null){if(Yt===0)var t=Nt.return;else t=Nt,Fn=ei=null,Du(t),Li=null,Jo=0,t=Nt;for(;t!==null;)h0(t.alternate,t),t=t.return;Nt=null}}function Qi(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Dv(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),rc(),It=t,Nt=n=Zn(t.current,null),_t=e,Yt=0,sn=null,Ma=!1,Xi=qn(t,e),tc=!1,Yi=bn=ec=ri=wa=se=0,Ie=il=null,nc=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var r=31-ke(o),u=1<<r;e|=t[r],o&=~u}return aa=e,ir(),n}function _0(t,e){Et=null,V.H=Ar,e===qo||e===hr?(e=$d(),Yt=3):e===Fd?(e=$d(),Yt=4):Yt=e===Ih?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,sn=e,Nt===null&&(se=1,wr(t,hn(e,t.current)))}function V0(){var t=V.H;return V.H=Ar,t===null?Ar:t}function B0(){var t=V.A;return V.A=iv,t}function sc(){se=4,Ma||(_t&4194048)!==_t&&yn.current!==null||(Xi=!0),(wa&134217727)===0&&(ri&134217727)===0||It===null||Na(It,_t,bn,!1)}function uc(t,e,n){var o=Xt;Xt|=2;var r=V0(),u=B0();(It!==t||_t!==e)&&(_r=null,Qi(t,e)),e=!1;var m=se;t:do try{if(Yt!==0&&Nt!==null){var b=Nt,T=sn;switch(Yt){case 8:rc(),m=6;break t;case 3:case 2:case 9:case 6:yn.current===null&&(e=!0);var R=Yt;if(Yt=0,sn=null,Ki(t,b,T,R),n&&Xi){m=0;break t}break;default:R=Yt,Yt=0,sn=null,Ki(t,b,T,R)}}rv(),m=se;break}catch(L){_0(t,L)}while(!0);return e&&t.shellSuspendCounter++,Fn=ei=null,Xt=o,V.H=r,V.A=u,Nt===null&&(It=null,_t=0,ir()),m}function rv(){for(;Nt!==null;)U0(Nt)}function sv(t,e){var n=Xt;Xt|=2;var o=V0(),r=B0();It!==t||_t!==e?(_r=null,zr=Dt()+500,Qi(t,e)):Xi=qn(t,e);t:do try{if(Yt!==0&&Nt!==null){e=Nt;var u=sn;e:switch(Yt){case 1:Yt=0,sn=null,Ki(t,e,u,1);break;case 2:case 9:if(Jd(u)){Yt=0,sn=null,L0(e);break}e=function(){Yt!==2&&Yt!==9||It!==t||(Yt=7),_n(t)},u.then(e,e);break t;case 3:Yt=7;break t;case 4:Yt=5;break t;case 7:Jd(u)?(Yt=0,sn=null,L0(e)):(Yt=0,sn=null,Ki(t,e,u,7));break;case 5:var m=null;switch(Nt.tag){case 26:m=Nt.memoizedState;case 5:case 27:var b=Nt;if(!m||xm(m)){Yt=0,sn=null;var T=b.sibling;if(T!==null)Nt=T;else{var R=b.return;R!==null?(Nt=R,Br(R)):Nt=null}break e}}Yt=0,sn=null,Ki(t,e,u,5);break;case 6:Yt=0,sn=null,Ki(t,e,u,6);break;case 8:rc(),se=6;break t;default:throw Error(s(462))}}uv();break}catch(L){_0(t,L)}while(!0);return Fn=ei=null,V.H=o,V.A=r,Xt=n,Nt!==null?0:(It=null,_t=0,ir(),se)}function uv(){for(;Nt!==null&&!ce();)U0(Nt)}function U0(t){var e=f0(t.alternate,t,aa);t.memoizedProps=t.pendingProps,e===null?Br(t):Nt=e}function L0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=o0(n,e,e.pendingProps,e.type,void 0,_t);break;case 11:e=o0(n,e,e.pendingProps,e.type.render,e.ref,_t);break;case 5:Du(e);default:h0(n,e),e=Nt=Hd(e,aa),e=f0(n,e,aa)}t.memoizedProps=t.pendingProps,e===null?Br(t):Nt=e}function Ki(t,e,n,o){Fn=ei=null,Du(e),Li=null,Jo=0;var r=e.return;try{if($b(t,r,e,n,_t)){se=1,wr(t,hn(n,t.current)),Nt=null;return}}catch(u){if(r!==null)throw Nt=r,u;se=1,wr(t,hn(n,t.current)),Nt=null;return}e.flags&32768?(Ht||o===1?t=!0:Xi||(_t&536870912)!==0?t=!1:(Ma=t=!0,(o===2||o===9||o===3||o===6)&&(o=yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),H0(e,t)):Br(e)}function Br(t){var e=t;do{if((e.flags&32768)!==0){H0(e,Ma);return}t=e.return;var n=tv(e.alternate,e,aa);if(n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);se===0&&(se=5)}function H0(t,e){do{var n=ev(t.alternate,t);if(n!==null){n.flags&=32767,Nt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Nt=t;return}Nt=t=n}while(t!==null);se=6,Nt=null}function q0(t,e,n,o,r,u,m,b,T){t.cancelPendingCommit=null;do Ur();while(_e!==0);if((Xt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Is,Ns(t,n,u,m,b,T),t===It&&(Nt=It=null,_t=0),Gi=e,Ra=t,Zi=n,ic=u,oc=r,N0=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,hv(ge,function(){return Z0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=V.T,V.T=null,r=F.p,F.p=2,m=Xt,Xt|=4;try{nv(t,e,n)}finally{Xt=m,F.p=r,V.T=o}}_e=1,P0(),X0(),Y0()}}function P0(){if(_e===1){_e=0;var t=Ra,e=Gi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=V.T,V.T=null;var o=F.p;F.p=2;var r=Xt;Xt|=4;try{D0(e,t);var u=Sc,m=Rd(t.containerInfo),b=u.focusedElem,T=u.selectionRange;if(m!==b&&b&&b.ownerDocument&&Cd(b.ownerDocument.documentElement,b)){if(T!==null&&Ks(b)){var R=T.start,L=T.end;if(L===void 0&&(L=R),"selectionStart"in b)b.selectionStart=R,b.selectionEnd=Math.min(L,b.value.length);else{var Y=b.ownerDocument||document,N=Y&&Y.defaultView||window;if(N.getSelection){var k=N.getSelection(),bt=b.textContent.length,mt=Math.min(T.start,bt),Ft=T.end===void 0?mt:Math.min(T.end,bt);!k.extend&&mt>Ft&&(m=Ft,Ft=mt,mt=m);var O=wd(b,mt),D=wd(b,Ft);if(O&&D&&(k.rangeCount!==1||k.anchorNode!==O.node||k.anchorOffset!==O.offset||k.focusNode!==D.node||k.focusOffset!==D.offset)){var C=Y.createRange();C.setStart(O.node,O.offset),k.removeAllRanges(),mt>Ft?(k.addRange(C),k.extend(D.node,D.offset)):(C.setEnd(D.node,D.offset),k.addRange(C))}}}}for(Y=[],k=b;k=k.parentNode;)k.nodeType===1&&Y.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Y.length;b++){var P=Y[b];P.element.scrollLeft=P.left,P.element.scrollTop=P.top}}Jr=!!xc,Sc=xc=null}finally{Xt=r,F.p=o,V.T=n}}t.current=e,_e=2}}function X0(){if(_e===2){_e=0;var t=Ra,e=Gi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=V.T,V.T=null;var o=F.p;F.p=2;var r=Xt;Xt|=4;try{x0(t,e.alternate,e)}finally{Xt=r,F.p=o,V.T=n}}_e=3}}function Y0(){if(_e===4||_e===3){_e=0,st();var t=Ra,e=Gi,n=Zi,o=N0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?_e=5:(_e=0,Gi=Ra=null,G0(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(Ca=null),bi(n),e=e.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Ln,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=V.T,r=F.p,F.p=2,V.T=null;try{for(var u=t.onRecoverableError,m=0;m<o.length;m++){var b=o[m];u(b.value,{componentStack:b.stack})}}finally{V.T=e,F.p=r}}(Zi&3)!==0&&Ur(),_n(t),r=t.pendingLanes,(n&4194090)!==0&&(r&42)!==0?t===lc?ol++:(ol=0,lc=t):ol=0,ll(0)}}function G0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Lo(e)))}function Ur(t){return P0(),X0(),Y0(),Z0()}function Z0(){if(_e!==5)return!1;var t=Ra,e=ic;ic=0;var n=bi(Zi),o=V.T,r=F.p;try{F.p=32>n?32:n,V.T=null,n=oc,oc=null;var u=Ra,m=Zi;if(_e=0,Gi=Ra=null,Zi=0,(Xt&6)!==0)throw Error(s(331));var b=Xt;if(Xt|=4,C0(u.current),E0(u,u.current,m,n),Xt=b,ll(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Ln,u)}catch{}return!0}finally{F.p=r,V.T=o,G0(t,e)}}function Q0(t,e,n){e=hn(n,e),e=Uu(t.stateNode,e,2),t=xa(t,e,2),t!==null&&(Pn(t,2),_n(t))}function $t(t,e,n){if(t.tag===3)Q0(t,t,n);else for(;e!==null;){if(e.tag===3){Q0(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){t=hn(n,t),n=Wh(2),o=xa(e,n,2),o!==null&&($h(n,o,e,t),Pn(o,2),_n(o));break}}e=e.return}}function cc(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new ov;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(n)||(tc=!0,r.add(n),t=cv.bind(null,t,e,n),e.then(t,t))}function cv(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,It===t&&(_t&n)===n&&(se===4||se===3&&(_t&62914560)===_t&&300>Dt()-ac?(Xt&2)===0&&Qi(t,0):ec|=n,Yi===_t&&(Yi=0)),_n(t)}function K0(t,e){e===0&&(e=ca()),t=Ci(t,e),t!==null&&(Pn(t,e),_n(t))}function fv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K0(t,n)}function dv(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(e),K0(t,n)}function hv(t,e){return jt(t,e)}var Lr=null,Fi=null,fc=!1,Hr=!1,dc=!1,si=0;function _n(t){t!==Fi&&t.next===null&&(Fi===null?Lr=Fi=t:Fi=Fi.next=t),Hr=!0,fc||(fc=!0,pv())}function ll(t,e){if(!dc&&Hr){dc=!0;do for(var n=!1,o=Lr;o!==null;){if(t!==0){var r=o.pendingLanes;if(r===0)var u=0;else{var m=o.suspendedLanes,b=o.pingedLanes;u=(1<<31-ke(42|t)+1)-1,u&=r&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,$0(o,u))}else u=_t,u=pi(o,o===It?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||qn(o,u)||(n=!0,$0(o,u));o=o.next}while(n);dc=!1}}function mv(){F0()}function F0(){Hr=fc=!1;var t=0;si!==0&&(Av()&&(t=si),si=0);for(var e=Dt(),n=null,o=Lr;o!==null;){var r=o.next,u=J0(o,e);u===0?(o.next=null,n===null?Lr=r:n.next=r,r===null&&(Fi=n)):(n=o,(t!==0||(u&3)!==0)&&(Hr=!0)),o=r}ll(t)}function J0(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var m=31-ke(u),b=1<<m,T=r[m];T===-1?((b&n)===0||(b&o)!==0)&&(r[m]=zt(b,e)):T<=e&&(t.expiredLanes|=b),u&=~b}if(e=It,n=_t,n=pi(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,n===0||t===e&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Rt(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||qn(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(o!==null&&Rt(o),bi(n)){case 2:case 8:n=Ye;break;case 32:n=ge;break;case 268435456:n=Cn;break;default:n=ge}return o=W0.bind(null,t),n=jt(n,o),t.callbackPriority=e,t.callbackNode=n,e}return o!==null&&o!==null&&Rt(o),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,e){if(_e!==0&&_e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Ur()&&t.callbackNode!==n)return null;var o=_t;return o=pi(t,t===It?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(j0(t,o,e),J0(t,Dt()),t.callbackNode!=null&&t.callbackNode===n?W0.bind(null,t):null)}function $0(t,e){if(Ur())return null;j0(t,e,!0)}function pv(){Ov(function(){(Xt&6)!==0?jt(Wt,mv):F0()})}function hc(){return si===0&&(si=nn()),si}function I0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wl(""+t)}function tm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function gv(t,e,n,o,r){if(e==="submit"&&n&&n.stateNode===r){var u=I0((r[je]||null).action),m=o.submitter;m&&(e=(e=m[je]||null)?I0(e.formAction):m.getAttribute("formAction"),e!==null&&(u=e,m=null));var b=new er("action","action",null,o,r);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(si!==0){var T=m?tm(r,m):new FormData(r);ju(n,{pending:!0,data:T,method:r.method,action:u},null,T)}}else typeof u=="function"&&(b.preventDefault(),T=m?tm(r,m):new FormData(r),ju(n,{pending:!0,data:T,method:r.method,action:u},u,T))},currentTarget:r}]})}}for(var mc=0;mc<$s.length;mc++){var pc=$s[mc],yv=pc.toLowerCase(),bv=pc[0].toUpperCase()+pc.slice(1);An(yv,"on"+bv)}An(jd,"onAnimationEnd"),An(zd,"onAnimationIteration"),An(_d,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(_b,"onTransitionRun"),An(Vb,"onTransitionStart"),An(Bb,"onTransitionCancel"),An(Vd,"onTransitionEnd"),Yn("onMouseEnter",["mouseout","mouseover"]),Yn("onMouseLeave",["mouseout","mouseover"]),Yn("onPointerEnter",["pointerout","pointerover"]),Yn("onPointerLeave",["pointerout","pointerover"]),Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function em(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],r=o.event;o=o.listeners;t:{var u=void 0;if(e)for(var m=o.length-1;0<=m;m--){var b=o[m],T=b.instance,R=b.currentTarget;if(b=b.listener,T!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=R;try{u(r)}catch(L){Mr(L)}r.currentTarget=null,u=T}else for(m=0;m<o.length;m++){if(b=o[m],T=b.instance,R=b.currentTarget,b=b.listener,T!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=R;try{u(r)}catch(L){Mr(L)}r.currentTarget=null,u=T}}}}function kt(t,e){var n=e[xi];n===void 0&&(n=e[xi]=new Set);var o=t+"__bubble";n.has(o)||(nm(e,t,2,!1),n.add(o))}function gc(t,e,n){var o=0;e&&(o|=4),nm(n,t,o,e)}var qr="_reactListening"+Math.random().toString(36).slice(2);function yc(t){if(!t[qr]){t[qr]=!0,Yl.forEach(function(n){n!=="selectionchange"&&(vv.has(n)||gc(n,!1,t),gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qr]||(e[qr]=!0,gc("selectionchange",!1,e))}}function nm(t,e,n,o){switch(Em(e)){case 2:var r=Zv;break;case 8:r=Qv;break;default:r=Nc}n=r.bind(null,e,n,t),r=void 0,!Ls||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bc(t,e,n,o,r){var u=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var b=o.stateNode.containerInfo;if(b===r)break;if(m===4)for(m=o.return;m!==null;){var T=m.tag;if((T===3||T===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;b!==null;){if(m=da(b),m===null)return;if(T=m.tag,T===5||T===6||T===26||T===27){o=u=m;continue t}b=b.parentNode}}o=o.return}ud(function(){var R=u,L=Bs(n),Y=[];t:{var N=Bd.get(t);if(N!==void 0){var k=er,bt=t;switch(t){case"keypress":if(Il(n)===0)break t;case"keydown":case"keyup":k=hb;break;case"focusin":bt="focus",k=Xs;break;case"focusout":bt="blur",k=Xs;break;case"beforeblur":case"afterblur":k=Xs;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=eb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=gb;break;case jd:case zd:case _d:k=ib;break;case Vd:k=bb;break;case"scroll":case"scrollend":k=Iy;break;case"wheel":k=xb;break;case"copy":case"cut":case"paste":k=lb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=md;break;case"toggle":case"beforetoggle":k=Tb}var mt=(e&4)!==0,Ft=!mt&&(t==="scroll"||t==="scrollend"),O=mt?N!==null?N+"Capture":null:N;mt=[];for(var D=R,C;D!==null;){var P=D;if(C=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||C===null||O===null||(P=Eo(D,O),P!=null&&mt.push(sl(D,P,C))),Ft)break;D=D.return}0<mt.length&&(N=new k(N,bt,null,n,L),Y.push({event:N,listeners:mt}))}}if((e&7)===0){t:{if(N=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",N&&n!==Vs&&(bt=n.relatedTarget||n.fromElement)&&(da(bt)||bt[fa]))break t;if((k||N)&&(N=L.window===L?L:(N=L.ownerDocument)?N.defaultView||N.parentWindow:window,k?(bt=n.relatedTarget||n.toElement,k=R,bt=bt?da(bt):null,bt!==null&&(Ft=d(bt),mt=bt.tag,bt!==Ft||mt!==5&&mt!==27&&mt!==6)&&(bt=null)):(k=null,bt=R),k!==bt)){if(mt=dd,P="onMouseLeave",O="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(mt=md,P="onPointerLeave",O="onPointerEnter",D="pointer"),Ft=k==null?N:Za(k),C=bt==null?N:Za(bt),N=new mt(P,D+"leave",k,n,L),N.target=Ft,N.relatedTarget=C,P=null,da(L)===R&&(mt=new mt(O,D+"enter",bt,n,L),mt.target=C,mt.relatedTarget=Ft,P=mt),Ft=P,k&&bt)e:{for(mt=k,O=bt,D=0,C=mt;C;C=Ji(C))D++;for(C=0,P=O;P;P=Ji(P))C++;for(;0<D-C;)mt=Ji(mt),D--;for(;0<C-D;)O=Ji(O),C--;for(;D--;){if(mt===O||O!==null&&mt===O.alternate)break e;mt=Ji(mt),O=Ji(O)}mt=null}else mt=null;k!==null&&am(Y,N,k,mt,!1),bt!==null&&Ft!==null&&am(Y,Ft,bt,mt,!0)}}t:{if(N=R?Za(R):window,k=N.nodeName&&N.nodeName.toLowerCase(),k==="select"||k==="input"&&N.type==="file")var at=Td;else if(xd(N))if(Ad)at=kb;else{at=Rb;var Mt=Cb}else k=N.nodeName,!k||k.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?R&&Oo(R.elementType)&&(at=Td):at=Nb;if(at&&(at=at(t,R))){Sd(Y,at,n,L);break t}Mt&&Mt(t,N,R),t==="focusout"&&R&&N.type==="number"&&R.memoizedProps.value!=null&&gt(N,"number",N.value)}switch(Mt=R?Za(R):window,t){case"focusin":(xd(Mt)||Mt.contentEditable==="true")&&(Ei=Mt,Fs=R,zo=null);break;case"focusout":zo=Fs=Ei=null;break;case"mousedown":Js=!0;break;case"contextmenu":case"mouseup":case"dragend":Js=!1,Nd(Y,n,L);break;case"selectionchange":if(zb)break;case"keydown":case"keyup":Nd(Y,n,L)}var lt;if(Gs)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Oi?bd(t,n)&&(pt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(pt="onCompositionStart");pt&&(pd&&n.locale!=="ko"&&(Oi||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Oi&&(lt=cd()):(ga=L,Hs="value"in ga?ga.value:ga.textContent,Oi=!0)),Mt=Pr(R,pt),0<Mt.length&&(pt=new hd(pt,t,null,n,L),Y.push({event:pt,listeners:Mt}),lt?pt.data=lt:(lt=vd(n),lt!==null&&(pt.data=lt)))),(lt=Db?Ob(t,n):Eb(t,n))&&(pt=Pr(R,"onBeforeInput"),0<pt.length&&(Mt=new hd("onBeforeInput","beforeinput",null,n,L),Y.push({event:Mt,listeners:pt}),Mt.data=lt)),gv(Y,t,R,n,L)}em(Y,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pr(t,e){for(var n=e+"Capture",o=[];t!==null;){var r=t,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=Eo(t,n),r!=null&&o.unshift(sl(t,r,u)),r=Eo(t,e),r!=null&&o.push(sl(t,r,u))),t.tag===3)return o;t=t.return}return[]}function Ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function am(t,e,n,o,r){for(var u=e._reactName,m=[];n!==null&&n!==o;){var b=n,T=b.alternate,R=b.stateNode;if(b=b.tag,T!==null&&T===o)break;b!==5&&b!==26&&b!==27||R===null||(T=R,r?(R=Eo(n,u),R!=null&&m.unshift(sl(n,R,T))):r||(R=Eo(n,u),R!=null&&m.push(sl(n,R,T)))),n=n.return}m.length!==0&&t.push({event:e,listeners:m})}var xv=/\r\n?/g,Sv=/\u0000|\uFFFD/g;function im(t){return(typeof t=="string"?t:""+t).replace(xv,`
`).replace(Sv,"")}function om(t,e){return e=im(e),im(t)===e}function Xr(){}function Kt(t,e,n,o,r,u){switch(n){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||He(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&He(t,""+o);break;case"className":Ti(t,"class",o);break;case"tabIndex":Ti(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(t,n,o);break;case"style":te(t,o,u);break;case"data":if(e!=="object"){Ti(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Wl(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Kt(t,e,"name",r.name,r,null),Kt(t,e,"formEncType",r.formEncType,r,null),Kt(t,e,"formMethod",r.formMethod,r,null),Kt(t,e,"formTarget",r.formTarget,r,null)):(Kt(t,e,"encType",r.encType,r,null),Kt(t,e,"method",r.method,r,null),Kt(t,e,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Wl(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=Xr);break;case"onScroll":o!=null&&kt("scroll",t);break;case"onScrollEnd":o!=null&&kt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=Wl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":kt("beforetoggle",t),kt("toggle",t),Ue(t,"popover",o);break;case"xlinkActuate":dn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":dn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":dn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":dn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":dn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":dn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":dn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":dn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":dn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ue(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=_s.get(n)||n,Ue(t,n,o))}}function vc(t,e,n,o,r,u){switch(n){case"style":te(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof o=="string"?He(t,o):(typeof o=="number"||typeof o=="bigint")&&He(t,""+o);break;case"onScroll":o!=null&&kt("scroll",t);break;case"onScrollEnd":o!=null&&kt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Xr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gl.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),u=t[je]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,r),typeof o=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,o,r);break t}n in t?t[n]=o:o===!0?t.setAttribute(n,""):Ue(t,n,o)}}}function Ve(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",t),kt("load",t);var o=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Kt(t,e,u,m,n,null)}}r&&Kt(t,e,"srcSet",n.srcSet,n,null),o&&Kt(t,e,"src",n.src,n,null);return;case"input":kt("invalid",t);var b=u=m=r=null,T=null,R=null;for(o in n)if(n.hasOwnProperty(o)){var L=n[o];if(L!=null)switch(o){case"name":r=L;break;case"type":m=L;break;case"checked":T=L;break;case"defaultChecked":R=L;break;case"value":u=L;break;case"defaultValue":b=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,e));break;default:Kt(t,e,o,L,n,null)}}ot(t,u,b,T,R,m,r,!1),_(t);return;case"select":kt("invalid",t),o=m=u=null;for(r in n)if(n.hasOwnProperty(r)&&(b=n[r],b!=null))switch(r){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":o=b;default:Kt(t,e,r,b,n,null)}e=u,n=m,t.multiple=!!o,e!=null?Bt(t,!!o,e,!1):n!=null&&Bt(t,!!o,n,!0);return;case"textarea":kt("invalid",t),u=r=o=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":o=b;break;case"defaultValue":r=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Kt(t,e,m,b,n,null)}Le(t,o,r,u),_(t);return;case"option":for(T in n)if(n.hasOwnProperty(T)&&(o=n[T],o!=null))switch(T){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Kt(t,e,T,o,n,null)}return;case"dialog":kt("beforetoggle",t),kt("toggle",t),kt("cancel",t),kt("close",t);break;case"iframe":case"object":kt("load",t);break;case"video":case"audio":for(o=0;o<rl.length;o++)kt(rl[o],t);break;case"image":kt("error",t),kt("load",t);break;case"details":kt("toggle",t);break;case"embed":case"source":case"link":kt("error",t),kt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(o=n[R],o!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Kt(t,e,R,o,n,null)}return;default:if(Oo(e)){for(L in n)n.hasOwnProperty(L)&&(o=n[L],o!==void 0&&vc(t,e,L,o,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(o=n[b],o!=null&&Kt(t,e,b,o,n,null))}function Tv(t,e,n,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,m=null,b=null,T=null,R=null,L=null;for(k in n){var Y=n[k];if(n.hasOwnProperty(k)&&Y!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":T=Y;default:o.hasOwnProperty(k)||Kt(t,e,k,null,o,Y)}}for(var N in o){var k=o[N];if(Y=n[N],o.hasOwnProperty(N)&&(k!=null||Y!=null))switch(N){case"type":u=k;break;case"name":r=k;break;case"checked":R=k;break;case"defaultChecked":L=k;break;case"value":m=k;break;case"defaultValue":b=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,e));break;default:k!==Y&&Kt(t,e,N,k,o,Y)}}nt(t,m,b,T,R,L,u,r);return;case"select":k=m=b=N=null;for(u in n)if(T=n[u],n.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":k=T;default:o.hasOwnProperty(u)||Kt(t,e,u,null,o,T)}for(r in o)if(u=o[r],T=n[r],o.hasOwnProperty(r)&&(u!=null||T!=null))switch(r){case"value":N=u;break;case"defaultValue":b=u;break;case"multiple":m=u;default:u!==T&&Kt(t,e,r,u,o,T)}e=b,n=m,o=k,N!=null?Bt(t,!!n,N,!1):!!o!=!!n&&(e!=null?Bt(t,!!n,e,!0):Bt(t,!!n,n?[]:"",!1));return;case"textarea":k=N=null;for(b in n)if(r=n[b],n.hasOwnProperty(b)&&r!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Kt(t,e,b,null,o,r)}for(m in o)if(r=o[m],u=n[m],o.hasOwnProperty(m)&&(r!=null||u!=null))switch(m){case"value":N=r;break;case"defaultValue":k=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==u&&Kt(t,e,m,r,o,u)}fe(t,N,k);return;case"option":for(var bt in n)if(N=n[bt],n.hasOwnProperty(bt)&&N!=null&&!o.hasOwnProperty(bt))switch(bt){case"selected":t.selected=!1;break;default:Kt(t,e,bt,null,o,N)}for(T in o)if(N=o[T],k=n[T],o.hasOwnProperty(T)&&N!==k&&(N!=null||k!=null))switch(T){case"selected":t.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Kt(t,e,T,N,o,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in n)N=n[mt],n.hasOwnProperty(mt)&&N!=null&&!o.hasOwnProperty(mt)&&Kt(t,e,mt,null,o,N);for(R in o)if(N=o[R],k=n[R],o.hasOwnProperty(R)&&N!==k&&(N!=null||k!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:Kt(t,e,R,N,o,k)}return;default:if(Oo(e)){for(var Ft in n)N=n[Ft],n.hasOwnProperty(Ft)&&N!==void 0&&!o.hasOwnProperty(Ft)&&vc(t,e,Ft,void 0,o,N);for(L in o)N=o[L],k=n[L],!o.hasOwnProperty(L)||N===k||N===void 0&&k===void 0||vc(t,e,L,N,o,k);return}}for(var O in n)N=n[O],n.hasOwnProperty(O)&&N!=null&&!o.hasOwnProperty(O)&&Kt(t,e,O,null,o,N);for(Y in o)N=o[Y],k=n[Y],!o.hasOwnProperty(Y)||N===k||N==null&&k==null||Kt(t,e,Y,N,o,k)}var xc=null,Sc=null;function Yr(t){return t.nodeType===9?t:t.ownerDocument}function lm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Tc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ac=null;function Av(){var t=window.event;return t&&t.type==="popstate"?t===Ac?!1:(Ac=t,!0):(Ac=null,!1)}var sm=typeof setTimeout=="function"?setTimeout:void 0,Dv=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(t){return um.resolve(null).then(t).catch(Ev)}:sm;function Ev(t){setTimeout(function(){throw t})}function ka(t){return t==="head"}function cm(t,e){var n=e,o=0,r=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<o&&8>o){n=o;var m=t.ownerDocument;if(n&1&&ul(m.documentElement),n&2&&ul(m.body),n&4)for(n=m.head,ul(n),m=n.firstChild;m;){var b=m.nextSibling,T=m.nodeName;m[Ga]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(r===0){t.removeChild(u),yl(e);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:o=n.charCodeAt(0)-48;else o=0;n=u}while(n);yl(e)}function Dc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Dc(n),vo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Mv(t,e,n,o){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ga])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=On(t.nextSibling),t===null)break}return null}function wv(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=On(t.nextSibling),t===null))return null;return t}function Oc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Cv(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var o=function(){e(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function On(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Ec=null;function fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function dm(t,e,n){switch(e=Yr(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ul(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);vo(t)}var vn=new Map,hm=new Set;function Gr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ia=F.d;F.d={f:Rv,r:Nv,D:kv,C:jv,L:zv,m:_v,X:Bv,S:Vv,M:Uv};function Rv(){var t=ia.f(),e=Vr();return t||e}function Nv(t){var e=ha(t);e!==null&&e.tag===5&&e.type==="form"?jh(e):ia.r(t)}var Wi=typeof document>"u"?null:document;function mm(t,e,n){var o=Wi;if(o&&typeof e=="string"&&e){var r=ut(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),hm.has(r)||(hm.add(r),t={rel:t,crossOrigin:n,href:e},o.querySelector(r)===null&&(e=o.createElement("link"),Ve(e,"link",t),ve(e),o.head.appendChild(e)))}}function kv(t){ia.D(t),mm("dns-prefetch",t,null)}function jv(t,e){ia.C(t,e),mm("preconnect",t,e)}function zv(t,e,n){ia.L(t,e,n);var o=Wi;if(o&&t&&e){var r='link[rel="preload"][as="'+ut(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+ut(n.imageSizes)+'"]')):r+='[href="'+ut(t)+'"]';var u=r;switch(e){case"style":u=$i(t);break;case"script":u=Ii(t)}vn.has(u)||(t=y({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),vn.set(u,t),o.querySelector(r)!==null||e==="style"&&o.querySelector(cl(u))||e==="script"&&o.querySelector(fl(u))||(e=o.createElement("link"),Ve(e,"link",t),ve(e),o.head.appendChild(e)))}}function _v(t,e){ia.m(t,e);var n=Wi;if(n&&t){var o=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+ut(o)+'"][href="'+ut(t)+'"]',u=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ii(t)}if(!vn.has(u)&&(t=y({rel:"modulepreload",href:t},e),vn.set(u,t),n.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fl(u)))return}o=n.createElement("link"),Ve(o,"link",t),ve(o),n.head.appendChild(o)}}}function Vv(t,e,n){ia.S(t,e,n);var o=Wi;if(o&&t){var r=ma(o).hoistableStyles,u=$i(t);e=e||"default";var m=r.get(u);if(!m){var b={loading:0,preload:null};if(m=o.querySelector(cl(u)))b.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},n),(n=vn.get(u))&&Mc(t,n);var T=m=o.createElement("link");ve(T),Ve(T,"link",t),T._p=new Promise(function(R,L){T.onload=R,T.onerror=L}),T.addEventListener("load",function(){b.loading|=1}),T.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Zr(m,e,o)}m={type:"stylesheet",instance:m,count:1,state:b},r.set(u,m)}}}function Bv(t,e){ia.X(t,e);var n=Wi;if(n&&t){var o=ma(n).hoistableScripts,r=Ii(t),u=o.get(r);u||(u=n.querySelector(fl(r)),u||(t=y({src:t,async:!0},e),(e=vn.get(r))&&wc(t,e),u=n.createElement("script"),ve(u),Ve(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function Uv(t,e){ia.M(t,e);var n=Wi;if(n&&t){var o=ma(n).hoistableScripts,r=Ii(t),u=o.get(r);u||(u=n.querySelector(fl(r)),u||(t=y({src:t,async:!0,type:"module"},e),(e=vn.get(r))&&wc(t,e),u=n.createElement("script"),ve(u),Ve(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function pm(t,e,n,o){var r=(r=ft.current)?Gr(r):null;if(!r)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=$i(n.href),n=ma(r).hoistableStyles,o=n.get(e),o||(o={type:"style",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=$i(n.href);var u=ma(r).hoistableStyles,m=u.get(t);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,m),(u=r.querySelector(cl(t)))&&!u._p&&(m.instance=u,m.state.loading=5),vn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vn.set(t,n),u||Lv(r,t,n,m.state))),e&&o===null)throw Error(s(528,""));return m}if(e&&o!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ii(n),n=ma(r).hoistableScripts,o=n.get(e),o||(o={type:"script",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function $i(t){return'href="'+ut(t)+'"'}function cl(t){return'link[rel="stylesheet"]['+t+"]"}function gm(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function Lv(t,e,n,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),Ve(e,"link",n),ve(e),t.head.appendChild(e))}function Ii(t){return'[src="'+ut(t)+'"]'}function fl(t){return"script[async]"+t}function ym(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+ut(n.href)+'"]');if(o)return e.instance=o,ve(o),o;var r=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ve(o),Ve(o,"style",r),Zr(o,n.precedence,t),e.instance=o;case"stylesheet":r=$i(n.href);var u=t.querySelector(cl(r));if(u)return e.state.loading|=4,e.instance=u,ve(u),u;o=gm(n),(r=vn.get(r))&&Mc(o,r),u=(t.ownerDocument||t).createElement("link"),ve(u);var m=u;return m._p=new Promise(function(b,T){m.onload=b,m.onerror=T}),Ve(u,"link",o),e.state.loading|=4,Zr(u,n.precedence,t),e.instance=u;case"script":return u=Ii(n.src),(r=t.querySelector(fl(u)))?(e.instance=r,ve(r),r):(o=n,(r=vn.get(u))&&(o=y({},n),wc(o,r)),t=t.ownerDocument||t,r=t.createElement("script"),ve(r),Ve(r,"link",o),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,Zr(o,n.precedence,t));return e.instance}function Zr(t,e,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,u=r,m=0;m<o.length;m++){var b=o[m];if(b.dataset.precedence===e)u=b;else if(u!==r)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Mc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function wc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Qr=null;function bm(t,e,n){if(Qr===null){var o=new Map,r=Qr=new Map;r.set(n,o)}else r=Qr,o=r.get(n),o||(o=new Map,r.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var u=n[r];if(!(u[Ga]||u[Me]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(e)||"";m=t+m;var b=o.get(m);b?b.push(u):o.set(m,[u])}}return o}function vm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Hv(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function xm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var dl=null;function qv(){}function Pv(t,e,n){if(dl===null)throw Error(s(475));var o=dl;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var r=$i(n.href),u=t.querySelector(cl(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Kr.bind(o),t.then(o,o)),e.state.loading|=4,e.instance=u,ve(u);return}u=t.ownerDocument||t,n=gm(n),(r=vn.get(r))&&Mc(n,r),u=u.createElement("link"),ve(u);var m=u;m._p=new Promise(function(b,T){m.onload=b,m.onerror=T}),Ve(u,"link",n),e.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(o.count++,e=Kr.bind(o),t.addEventListener("load",e),t.addEventListener("error",e))}}function Xv(){if(dl===null)throw Error(s(475));var t=dl;return t.stylesheets&&t.count===0&&Cc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Kr(){if(this.count--,this.count===0){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fr=null;function Cc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fr=new Map,e.forEach(Yv,t),Fr=null,Kr.call(t))}function Yv(t,e){if(!(e.state.loading&4)){var n=Fr.get(t);if(n)var o=n.get(null);else{n=new Map,Fr.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var m=r[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),o=m)}o&&n.set(null,o)}r=e.instance,m=r.getAttribute("data-precedence"),u=n.get(m)||o,u===o&&n.set(null,r),n.set(m,r),this.count++,o=Kr.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),u?u.parentNode.insertBefore(r,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var hl={$$typeof:j,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Gv(t,e,n,o,r,u,m,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.hiddenUpdates=gi(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Sm(t,e,n,o,r,u,m,b,T,R,L,Y){return t=new Gv(t,e,n,m,b,T,R,Y),e=1,u===!0&&(e|=24),u=on(3,null,null,e),t.current=u,u.stateNode=t,e=cu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:e},mu(u),t}function Tm(t){return t?(t=Ri,t):Ri}function Am(t,e,n,o,r,u){r=Tm(r),o.context===null?o.context=r:o.pendingContext=r,o=va(e),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=xa(t,o,e),n!==null&&(cn(n,t,e),Xo(n,t,e))}function Dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rc(t,e){Dm(t,e),(t=t.alternate)&&Dm(t,e)}function Om(t){if(t.tag===13){var e=Ci(t,67108864);e!==null&&cn(e,t,67108864),Rc(t,67108864)}}var Jr=!0;function Zv(t,e,n,o){var r=V.T;V.T=null;var u=F.p;try{F.p=2,Nc(t,e,n,o)}finally{F.p=u,V.T=r}}function Qv(t,e,n,o){var r=V.T;V.T=null;var u=F.p;try{F.p=8,Nc(t,e,n,o)}finally{F.p=u,V.T=r}}function Nc(t,e,n,o){if(Jr){var r=kc(o);if(r===null)bc(t,e,o,Wr,n),Mm(t,o);else if(Fv(r,t,e,n,o))o.stopPropagation();else if(Mm(t,o),e&4&&-1<Kv.indexOf(t)){for(;r!==null;){var u=ha(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Hn(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var T=1<<31-ke(m);b.entanglements[1]|=T,m&=~T}_n(u),(Xt&6)===0&&(zr=Dt()+500,ll(0))}}break;case 13:b=Ci(u,2),b!==null&&cn(b,u,2),Vr(),Rc(u,2)}if(u=kc(o),u===null&&bc(t,e,o,Wr,n),u===r)break;r=u}r!==null&&o.stopPropagation()}else bc(t,e,o,null,n)}}function kc(t){return t=Bs(t),jc(t)}var Wr=null;function jc(t){if(Wr=null,t=da(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Wr=t,null}function Em(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case Wt:return 2;case Ye:return 8;case ge:case sa:return 32;case Cn:return 268435456;default:return 32}default:return 32}}var zc=!1,ja=null,za=null,_a=null,ml=new Map,pl=new Map,Va=[],Kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mm(t,e){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":ml.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(e.pointerId)}}function gl(t,e,n,o,r,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&Om(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Fv(t,e,n,o,r){switch(e){case"focusin":return ja=gl(ja,t,e,n,o,r),!0;case"dragenter":return za=gl(za,t,e,n,o,r),!0;case"mouseover":return _a=gl(_a,t,e,n,o,r),!0;case"pointerover":var u=r.pointerId;return ml.set(u,gl(ml.get(u)||null,t,e,n,o,r)),!0;case"gotpointercapture":return u=r.pointerId,pl.set(u,gl(pl.get(u)||null,t,e,n,o,r)),!0}return!1}function wm(t){var e=da(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,vi(t.priority,function(){if(n.tag===13){var o=un();o=Xn(o);var r=Ci(n,o);r!==null&&cn(r,n,o),Rc(n,o)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $r(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kc(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);Vs=o,n.target.dispatchEvent(o),Vs=null}else return e=ha(n),e!==null&&Om(e),t.blockedOn=n,!1;e.shift()}return!0}function Cm(t,e,n){$r(t)&&n.delete(e)}function Jv(){zc=!1,ja!==null&&$r(ja)&&(ja=null),za!==null&&$r(za)&&(za=null),_a!==null&&$r(_a)&&(_a=null),ml.forEach(Cm),pl.forEach(Cm)}function Ir(t,e){t.blockedOn===e&&(t.blockedOn=null,zc||(zc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Jv)))}var ts=null;function Rm(t){ts!==t&&(ts=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ts===t&&(ts=null);for(var e=0;e<t.length;e+=3){var n=t[e],o=t[e+1],r=t[e+2];if(typeof o!="function"){if(jc(o||n)===null)continue;break}var u=ha(n);u!==null&&(t.splice(e,3),e-=3,ju(u,{pending:!0,data:r,method:n.method,action:o},o,r))}}))}function yl(t){function e(T){return Ir(T,t)}ja!==null&&Ir(ja,t),za!==null&&Ir(za,t),_a!==null&&Ir(_a,t),ml.forEach(e),pl.forEach(e);for(var n=0;n<Va.length;n++){var o=Va[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Va.length&&(n=Va[0],n.blockedOn===null);)wm(n),n.blockedOn===null&&Va.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var r=n[o],u=n[o+1],m=r[je]||null;if(typeof u=="function")m||Rm(n);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(r=u,m=u[je]||null)b=m.formAction;else if(jc(r)!==null)continue}else b=m.action;typeof b=="function"?n[o+1]=b:(n.splice(o,3),o-=3),Rm(n)}}}function _c(t){this._internalRoot=t}es.prototype.render=_c.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,o=un();Am(n,o,t,e,null,null)},es.prototype.unmount=_c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Am(t.current,2,null,t,null,null),Vr(),e[fa]=null}};function es(t){this._internalRoot=t}es.prototype.unstable_scheduleHydration=function(t){if(t){var e=ye();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Va.length&&e!==0&&e<Va[n].priority;n++);Va.splice(n,0,t),n===0&&wm(t)}};var Nm=i.version;if(Nm!=="19.1.0")throw Error(s(527,Nm,"19.1.0"));F.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var Wv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{Ln=ns.inject(Wv),Ee=ns}catch{}}return vl.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,o="",r=Qh,u=Kh,m=Fh,b=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=Sm(t,1,!1,null,null,n,o,r,u,m,b,null),t[fa]=e.current,yc(t),new _c(e)},vl.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var o=!1,r="",u=Qh,m=Kh,b=Fh,T=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),e=Sm(t,1,!0,e,n??null,o,r,u,m,b,T,R),e.context=Tm(null),n=e.current,o=un(),o=Xn(o),r=va(o),r.callback=null,xa(n,r,o),n=o,e.current.lanes=n,Pn(e,n),_n(e),t[fa]=e.current,yc(t),new es(e)},vl.version="19.1.0",vl}var qm;function s1(){if(qm)return Uc.exports;qm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Uc.exports=r1(),Uc.exports}var u1=s1();const wf=X.createContext({});function Cf(a){const i=X.useRef(null);return i.current===null&&(i.current=a()),i.current}const Rf=typeof window<"u",bg=Rf?X.useLayoutEffect:X.useEffect,xs=X.createContext(null);function Nf(a,i){a.indexOf(i)===-1&&a.push(i)}function kf(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const la=(a,i,l)=>l>i?i:l<a?a:l;let jf=()=>{};const ra={},vg=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function xg(a){return typeof a=="object"&&a!==null}const Sg=a=>/^0[^.\s]+$/u.test(a);function zf(a){let i;return()=>(i===void 0&&(i=a()),i)}const Tn=a=>a,c1=(a,i)=>l=>i(a(l)),Vl=(...a)=>a.reduce(c1),Cl=(a,i,l)=>{const s=i-a;return s===0?1:(l-a)/s};class _f{constructor(){this.subscriptions=[]}add(i){return Nf(this.subscriptions,i),()=>kf(this.subscriptions,i)}notify(i,l,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,l,s);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(i,l,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Vn=a=>a*1e3,Bn=a=>a/1e3;function Tg(a,i){return i?a*(1e3/i):0}const Ag=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,f1=1e-7,d1=12;function h1(a,i,l,s,c){let d,f,g=0;do f=i+(l-i)/2,d=Ag(f,s,c)-a,d>0?l=f:i=f;while(Math.abs(d)>f1&&++g<d1);return f}function Bl(a,i,l,s){if(a===i&&l===s)return Tn;const c=d=>h1(d,0,1,a,l);return d=>d===0||d===1?d:Ag(c(d),i,s)}const Dg=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,Og=a=>i=>1-a(1-i),Eg=Bl(.33,1.53,.69,.99),Vf=Og(Eg),Mg=Dg(Vf),wg=a=>(a*=2)<1?.5*Vf(a):.5*(2-Math.pow(2,-10*(a-1))),Bf=a=>1-Math.sin(Math.acos(a)),Cg=Og(Bf),Rg=Dg(Bf),m1=Bl(.42,0,1,1),p1=Bl(0,0,.58,1),Ng=Bl(.42,0,.58,1),g1=a=>Array.isArray(a)&&typeof a[0]!="number",kg=a=>Array.isArray(a)&&typeof a[0]=="number",y1={linear:Tn,easeIn:m1,easeInOut:Ng,easeOut:p1,circIn:Bf,circInOut:Rg,circOut:Cg,backIn:Vf,backInOut:Mg,backOut:Eg,anticipate:wg},b1=a=>typeof a=="string",Pm=a=>{if(kg(a)){jf(a.length===4);const[i,l,s,c]=a;return Bl(i,l,s,c)}else if(b1(a))return y1[a];return a},as=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function v1(a,i){let l=new Set,s=new Set,c=!1,d=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(h.schedule(y),a()),y(g)}const h={schedule:(y,v=!1,x=!1)=>{const M=x&&c?l:s;return v&&f.add(y),M.has(y)||M.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,c){d=!0;return}c=!0,[l,s]=[s,l],l.forEach(p),l.clear(),c=!1,d&&(d=!1,h.process(y))}};return h}const x1=40;function jg(a,i){let l=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>l=!0,f=as.reduce((j,Z)=>(j[Z]=v1(d),j),{}),{setup:g,read:p,resolveKeyframes:h,preUpdate:y,update:v,preRender:x,render:E,postRender:M}=f,w=()=>{const j=ra.useManualTiming?c.timestamp:performance.now();l=!1,ra.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(j-c.timestamp,x1),1)),c.timestamp=j,c.isProcessing=!0,g.process(c),p.process(c),h.process(c),y.process(c),v.process(c),x.process(c),E.process(c),M.process(c),c.isProcessing=!1,l&&i&&(s=!1,a(w))},H=()=>{l=!0,s=!0,c.isProcessing||a(w)};return{schedule:as.reduce((j,Z)=>{const z=f[Z];return j[Z]=(K,J=!1,G=!1)=>(l||H(),z.schedule(K,J,G)),j},{}),cancel:j=>{for(let Z=0;Z<as.length;Z++)f[as[Z]].cancel(j)},state:c,steps:f}}const{schedule:ae,cancel:Ha,state:Be,steps:Pc}=jg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Tn,!0);let us;function S1(){us=void 0}const en={now:()=>(us===void 0&&en.set(Be.isProcessing||ra.useManualTiming?Be.timestamp:performance.now()),us),set:a=>{us=a,queueMicrotask(S1)}},zg=a=>i=>typeof i=="string"&&i.startsWith(a),Uf=zg("--"),T1=zg("var(--"),Lf=a=>T1(a)?A1.test(a.split("/*")[0].trim()):!1,A1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,mo={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Rl={...mo,transform:a=>la(0,1,a)},is={...mo,default:1},Al=a=>Math.round(a*1e5)/1e5,Hf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function D1(a){return a==null}const O1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,qf=(a,i)=>l=>!!(typeof l=="string"&&O1.test(l)&&l.startsWith(a)||i&&!D1(l)&&Object.prototype.hasOwnProperty.call(l,i)),_g=(a,i,l)=>s=>{if(typeof s!="string")return s;const[c,d,f,g]=s.match(Hf);return{[a]:parseFloat(c),[i]:parseFloat(d),[l]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},E1=a=>la(0,255,a),Xc={...mo,transform:a=>Math.round(E1(a))},fi={test:qf("rgb","red"),parse:_g("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:s=1})=>"rgba("+Xc.transform(a)+", "+Xc.transform(i)+", "+Xc.transform(l)+", "+Al(Rl.transform(s))+")"};function M1(a){let i="",l="",s="",c="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),s=a.substring(5,7),c=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),s=a.substring(3,4),c=a.substring(4,5),i+=i,l+=l,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const of={test:qf("#"),parse:M1,transform:fi.transform},Ul=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),La=Ul("deg"),Un=Ul("%"),vt=Ul("px"),w1=Ul("vh"),C1=Ul("vw"),Xm={...Un,parse:a=>Un.parse(a)/100,transform:a=>Un.transform(a*100)},lo={test:qf("hsl","hue"),parse:_g("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:s=1})=>"hsla("+Math.round(a)+", "+Un.transform(Al(i))+", "+Un.transform(Al(l))+", "+Al(Rl.transform(s))+")"},Te={test:a=>fi.test(a)||of.test(a)||lo.test(a),parse:a=>fi.test(a)?fi.parse(a):lo.test(a)?lo.parse(a):of.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?fi.transform(a):lo.transform(a),getAnimatableNone:a=>{const i=Te.parse(a);return i.alpha=0,Te.transform(i)}},R1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function N1(a){return isNaN(a)&&typeof a=="string"&&(a.match(Hf)?.length||0)+(a.match(R1)?.length||0)>0}const Vg="number",Bg="color",k1="var",j1="var(",Ym="${}",z1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Nl(a){const i=a.toString(),l=[],s={color:[],number:[],var:[]},c=[];let d=0;const g=i.replace(z1,p=>(Te.test(p)?(s.color.push(d),c.push(Bg),l.push(Te.parse(p))):p.startsWith(j1)?(s.var.push(d),c.push(k1),l.push(p)):(s.number.push(d),c.push(Vg),l.push(parseFloat(p))),++d,Ym)).split(Ym);return{values:l,split:g,indexes:s,types:c}}function Ug(a){return Nl(a).values}function Lg(a){const{split:i,types:l}=Nl(a),s=i.length;return c=>{let d="";for(let f=0;f<s;f++)if(d+=i[f],c[f]!==void 0){const g=l[f];g===Vg?d+=Al(c[f]):g===Bg?d+=Te.transform(c[f]):d+=c[f]}return d}}const _1=a=>typeof a=="number"?0:Te.test(a)?Te.getAnimatableNone(a):a;function V1(a){const i=Ug(a);return Lg(a)(i.map(_1))}const qa={test:N1,parse:Ug,createTransformer:Lg,getAnimatableNone:V1};function Yc(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function B1({hue:a,saturation:i,lightness:l,alpha:s}){a/=360,i/=100,l/=100;let c=0,d=0,f=0;if(!i)c=d=f=l;else{const g=l<.5?l*(1+i):l+i-l*i,p=2*l-g;c=Yc(p,g,a+1/3),d=Yc(p,g,a),f=Yc(p,g,a-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:s}}function ms(a,i){return l=>l>0?i:a}const le=(a,i,l)=>a+(i-a)*l,Gc=(a,i,l)=>{const s=a*a,c=l*(i*i-s)+s;return c<0?0:Math.sqrt(c)},U1=[of,fi,lo],L1=a=>U1.find(i=>i.test(a));function Gm(a){const i=L1(a);if(!i)return!1;let l=i.parse(a);return i===lo&&(l=B1(l)),l}const Zm=(a,i)=>{const l=Gm(a),s=Gm(i);if(!l||!s)return ms(a,i);const c={...l};return d=>(c.red=Gc(l.red,s.red,d),c.green=Gc(l.green,s.green,d),c.blue=Gc(l.blue,s.blue,d),c.alpha=le(l.alpha,s.alpha,d),fi.transform(c))},lf=new Set(["none","hidden"]);function H1(a,i){return lf.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function q1(a,i){return l=>le(a,i,l)}function Pf(a){return typeof a=="number"?q1:typeof a=="string"?Lf(a)?ms:Te.test(a)?Zm:Y1:Array.isArray(a)?Hg:typeof a=="object"?Te.test(a)?Zm:P1:ms}function Hg(a,i){const l=[...a],s=l.length,c=a.map((d,f)=>Pf(d)(d,i[f]));return d=>{for(let f=0;f<s;f++)l[f]=c[f](d);return l}}function P1(a,i){const l={...a,...i},s={};for(const c in l)a[c]!==void 0&&i[c]!==void 0&&(s[c]=Pf(a[c])(a[c],i[c]));return c=>{for(const d in s)l[d]=s[d](c);return l}}function X1(a,i){const l=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const d=i.types[c],f=a.indexes[d][s[d]],g=a.values[f]??0;l[c]=g,s[d]++}return l}const Y1=(a,i)=>{const l=qa.createTransformer(i),s=Nl(a),c=Nl(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?lf.has(a)&&!c.values.length||lf.has(i)&&!s.values.length?H1(a,i):Vl(Hg(X1(s,c),c.values),l):ms(a,i)};function qg(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?le(a,i,l):Pf(a)(a,i)}const G1=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>ae.update(i,l),stop:()=>Ha(i),now:()=>Be.isProcessing?Be.timestamp:en.now()}},Pg=(a,i,l=10)=>{let s="";const c=Math.max(Math.round(i/l),2);for(let d=0;d<c;d++)s+=Math.round(a(d/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},ps=2e4;function Xf(a){let i=0;const l=50;let s=a.next(i);for(;!s.done&&i<ps;)i+=l,s=a.next(i);return i>=ps?1/0:i}function Z1(a,i=100,l){const s=l({...a,keyframes:[0,i]}),c=Math.min(Xf(s),ps);return{type:"keyframes",ease:d=>s.next(c*d).value/i,duration:Bn(c)}}const Q1=5;function Xg(a,i,l){const s=Math.max(i-Q1,0);return Tg(l-a(s),i-s)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Zc=.001;function K1({duration:a=ue.duration,bounce:i=ue.bounce,velocity:l=ue.velocity,mass:s=ue.mass}){let c,d,f=1-i;f=la(ue.minDamping,ue.maxDamping,f),a=la(ue.minDuration,ue.maxDuration,Bn(a)),f<1?(c=h=>{const y=h*f,v=y*a,x=y-l,E=rf(h,f),M=Math.exp(-v);return Zc-x/E*M},d=h=>{const v=h*f*a,x=v*l+l,E=Math.pow(f,2)*Math.pow(h,2)*a,M=Math.exp(-v),w=rf(Math.pow(h,2),f);return(-c(h)+Zc>0?-1:1)*((x-E)*M)/w}):(c=h=>{const y=Math.exp(-h*a),v=(h-l)*a+1;return-Zc+y*v},d=h=>{const y=Math.exp(-h*a),v=(l-h)*(a*a);return y*v});const g=5/a,p=J1(c,d,g);if(a=Vn(a),isNaN(p))return{stiffness:ue.stiffness,damping:ue.damping,duration:a};{const h=Math.pow(p,2)*s;return{stiffness:h,damping:f*2*Math.sqrt(s*h),duration:a}}}const F1=12;function J1(a,i,l){let s=l;for(let c=1;c<F1;c++)s=s-a(s)/i(s);return s}function rf(a,i){return a*Math.sqrt(1-i*i)}const W1=["duration","bounce"],$1=["stiffness","damping","mass"];function Qm(a,i){return i.some(l=>a[l]!==void 0)}function I1(a){let i={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...a};if(!Qm(a,$1)&&Qm(a,W1))if(a.visualDuration){const l=a.visualDuration,s=2*Math.PI/(l*1.2),c=s*s,d=2*la(.05,1,1-(a.bounce||0))*Math.sqrt(c);i={...i,mass:ue.mass,stiffness:c,damping:d}}else{const l=K1(a);i={...i,...l,mass:ue.mass},i.isResolvedFromDuration=!0}return i}function gs(a=ue.visualDuration,i=ue.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:s,restDelta:c}=l;const d=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],g={done:!1,value:d},{stiffness:p,damping:h,mass:y,duration:v,velocity:x,isResolvedFromDuration:E}=I1({...l,velocity:-Bn(l.velocity||0)}),M=x||0,w=h/(2*Math.sqrt(p*y)),H=f-d,B=Bn(Math.sqrt(p/y)),U=Math.abs(H)<5;s||(s=U?ue.restSpeed.granular:ue.restSpeed.default),c||(c=U?ue.restDelta.granular:ue.restDelta.default);let j;if(w<1){const z=rf(B,w);j=K=>{const J=Math.exp(-w*B*K);return f-J*((M+w*B*H)/z*Math.sin(z*K)+H*Math.cos(z*K))}}else if(w===1)j=z=>f-Math.exp(-B*z)*(H+(M+B*H)*z);else{const z=B*Math.sqrt(w*w-1);j=K=>{const J=Math.exp(-w*B*K),G=Math.min(z*K,300);return f-J*((M+w*B*H)*Math.sinh(G)+z*H*Math.cosh(G))/z}}const Z={calculatedDuration:E&&v||null,next:z=>{const K=j(z);if(E)g.done=z>=v;else{let J=z===0?M:0;w<1&&(J=z===0?Vn(M):Xg(j,z,K));const G=Math.abs(J)<=s,et=Math.abs(f-K)<=c;g.done=G&&et}return g.value=g.done?f:K,g},toString:()=>{const z=Math.min(Xf(Z),ps),K=Pg(J=>Z.next(z*J).value,z,30);return z+"ms "+K},toTransition:()=>{}};return Z}gs.applyToOptions=a=>{const i=Z1(a,100,gs);return a.ease=i.ease,a.duration=Vn(i.duration),a.type="keyframes",a};function sf({keyframes:a,velocity:i=0,power:l=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:g,max:p,restDelta:h=.5,restSpeed:y}){const v=a[0],x={done:!1,value:v},E=G=>g!==void 0&&G<g||p!==void 0&&G>p,M=G=>g===void 0?p:p===void 0||Math.abs(g-G)<Math.abs(p-G)?g:p;let w=l*i;const H=v+w,B=f===void 0?H:f(H);B!==H&&(w=B-v);const U=G=>-w*Math.exp(-G/s),j=G=>B+U(G),Z=G=>{const et=U(G),ct=j(G);x.done=Math.abs(et)<=h,x.value=x.done?B:ct};let z,K;const J=G=>{E(x.value)&&(z=G,K=gs({keyframes:[x.value,M(x.value)],velocity:Xg(j,G,x.value),damping:c,stiffness:d,restDelta:h,restSpeed:y}))};return J(0),{calculatedDuration:null,next:G=>{let et=!1;return!K&&z===void 0&&(et=!0,Z(G),J(G)),z!==void 0&&G>=z?K.next(G-z):(!et&&Z(G),x)}}}function t2(a,i,l){const s=[],c=l||ra.mix||qg,d=a.length-1;for(let f=0;f<d;f++){let g=c(a[f],a[f+1]);if(i){const p=Array.isArray(i)?i[f]||Tn:i;g=Vl(p,g)}s.push(g)}return s}function e2(a,i,{clamp:l=!0,ease:s,mixer:c}={}){const d=a.length;if(jf(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=a[0]===a[1];a[0]>a[d-1]&&(a=[...a].reverse(),i=[...i].reverse());const g=t2(i,s,c),p=g.length,h=y=>{if(f&&y<a[0])return i[0];let v=0;if(p>1)for(;v<a.length-2&&!(y<a[v+1]);v++);const x=Cl(a[v],a[v+1],y);return g[v](x)};return l?y=>h(la(a[0],a[d-1],y)):h}function n2(a,i){const l=a[a.length-1];for(let s=1;s<=i;s++){const c=Cl(0,i,s);a.push(le(l,1,c))}}function a2(a){const i=[0];return n2(i,a.length-1),i}function i2(a,i){return a.map(l=>l*i)}function o2(a,i){return a.map(()=>i||Ng).splice(0,a.length-1)}function Dl({duration:a=300,keyframes:i,times:l,ease:s="easeInOut"}){const c=g1(s)?s.map(Pm):Pm(s),d={done:!1,value:i[0]},f=i2(l&&l.length===i.length?l:a2(i),a),g=e2(f,i,{ease:Array.isArray(c)?c:o2(i,c)});return{calculatedDuration:a,next:p=>(d.value=g(p),d.done=p>=a,d)}}const l2=a=>a!==null;function Yf(a,{repeat:i,repeatType:l="loop"},s,c=1){const d=a.filter(l2),g=c<0||i&&l!=="loop"&&i%2===1?0:d.length-1;return!g||s===void 0?d[g]:s}const r2={decay:sf,inertia:sf,tween:Dl,keyframes:Dl,spring:gs};function Yg(a){typeof a.type=="string"&&(a.type=r2[a.type])}class Gf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const s2=a=>a/100;class Zf extends Gf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==en.now()&&this.tick(en.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Yg(i);const{type:l=Dl,repeat:s=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=i;let{keyframes:g}=i;const p=l||Dl;p!==Dl&&typeof g[0]!="number"&&(this.mixKeyframes=Vl(s2,qg(g[0],g[1])),g=[0,100]);const h=p({...i,keyframes:g});d==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...g].reverse(),velocity:-f})),h.calculatedDuration===null&&(h.calculatedDuration=Xf(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=h}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:s,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:E,type:M,onUpdate:w,finalKeyframe:H}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const B=this.currentTime-h*(this.playbackSpeed>=0?1:-1),U=this.playbackSpeed>=0?B<0:B>c;this.currentTime=Math.max(B,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let j=this.currentTime,Z=s;if(v){const G=Math.min(this.currentTime,c)/g;let et=Math.floor(G),ct=G%1;!ct&&G>=1&&(ct=1),ct===1&&et--,et=Math.min(et,v+1),!!(et%2)&&(x==="reverse"?(ct=1-ct,E&&(ct-=E/g)):x==="mirror"&&(Z=f)),j=la(0,1,ct)*g}const z=U?{done:!1,value:y[0]}:Z.next(j);d&&(z.value=d(z.value));let{done:K}=z;!U&&p!==null&&(K=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const J=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return J&&M!==sf&&(z.value=Yf(y,this.options,H,this.speed)),w&&w(z.value),J&&this.finish(),z}then(i,l){return this.finished.then(i,l)}get duration(){return Bn(this.calculatedDuration)}get time(){return Bn(this.currentTime)}set time(i){i=Vn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(en.now());const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=Bn(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=G1,startTime:l}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=l??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(en.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function u2(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const di=a=>a*180/Math.PI,uf=a=>{const i=di(Math.atan2(a[1],a[0]));return cf(i)},c2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:uf,rotateZ:uf,skewX:a=>di(Math.atan(a[1])),skewY:a=>di(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},cf=a=>(a=a%360,a<0&&(a+=360),a),Km=uf,Fm=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Jm=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),f2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Fm,scaleY:Jm,scale:a=>(Fm(a)+Jm(a))/2,rotateX:a=>cf(di(Math.atan2(a[6],a[5]))),rotateY:a=>cf(di(Math.atan2(-a[2],a[0]))),rotateZ:Km,rotate:Km,skewX:a=>di(Math.atan(a[4])),skewY:a=>di(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function ff(a){return a.includes("scale")?1:0}function df(a,i){if(!a||a==="none")return ff(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(l)s=f2,c=l;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=c2,c=g}if(!c)return ff(i);const d=s[i],f=c[1].split(",").map(h2);return typeof d=="function"?d(f):f[d]}const d2=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return df(l,i)};function h2(a){return parseFloat(a.trim())}const po=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],go=new Set(po),Wm=a=>a===mo||a===vt,m2=new Set(["x","y","z"]),p2=po.filter(a=>!m2.has(a));function g2(a){const i=[];return p2.forEach(l=>{const s=a.getValue(l);s!==void 0&&(i.push([l,s.get()]),s.set(l.startsWith("scale")?1:0))}),i}const hi={width:({x:a},{paddingLeft:i="0",paddingRight:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),height:({y:a},{paddingTop:i="0",paddingBottom:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>df(i,"x"),y:(a,{transform:i})=>df(i,"y")};hi.translateX=hi.x;hi.translateY=hi.y;const mi=new Set;let hf=!1,mf=!1,pf=!1;function Gg(){if(mf){const a=Array.from(mi).filter(s=>s.needsMeasurement),i=new Set(a.map(s=>s.element)),l=new Map;i.forEach(s=>{const c=g2(s);c.length&&(l.set(s,c),s.render())}),a.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=l.get(s);c&&c.forEach(([d,f])=>{s.getValue(d)?.set(f)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}mf=!1,hf=!1,mi.forEach(a=>a.complete(pf)),mi.clear()}function Zg(){mi.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(mf=!0)})}function y2(){pf=!0,Zg(),Gg(),pf=!1}class Qf{constructor(i,l,s,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=s,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(mi.add(this),hf||(hf=!0,ae.read(Zg),ae.resolveKeyframes(Gg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:s,motionValue:c}=this;if(i[0]===null){const d=c?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&l){const g=s.readValue(l,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),c&&d===void 0&&c.set(i[0])}u2(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),mi.delete(this)}cancel(){this.state==="scheduled"&&(mi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const b2=a=>a.startsWith("--");function v2(a,i,l){b2(i)?a.style.setProperty(i,l):a.style[i]=l}const x2=zf(()=>window.ScrollTimeline!==void 0),S2={};function T2(a,i){const l=zf(a);return()=>S2[i]??l()}const Qg=T2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Sl=([a,i,l,s])=>`cubic-bezier(${a}, ${i}, ${l}, ${s})`,$m={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Sl([0,.65,.55,1]),circOut:Sl([.55,0,1,.45]),backIn:Sl([.31,.01,.66,-.59]),backOut:Sl([.33,1.53,.69,.99])};function Kg(a,i){if(a)return typeof a=="function"?Qg()?Pg(a,i):"ease-out":kg(a)?Sl(a):Array.isArray(a)?a.map(l=>Kg(l,i)||$m.easeOut):$m[a]}function A2(a,i,l,{delay:s=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:g="easeOut",times:p}={},h=void 0){const y={[i]:l};p&&(y.offset=p);const v=Kg(g,c);Array.isArray(v)&&(y.easing=v);const x={delay:s,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return h&&(x.pseudoElement=h),a.animate(y,x)}function Fg(a){return typeof a=="function"&&"applyToOptions"in a}function D2({type:a,...i}){return Fg(a)&&Qg()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class O2 extends Gf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:l,name:s,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:g,onComplete:p}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,jf(typeof i.type!="string");const h=D2(i);this.animation=A2(l,s,c,h,d),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=Yf(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):v2(l,s,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Bn(Number(i))}get time(){return Bn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=Vn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&x2()?(this.animation.timeline=i,Tn):l(this)}}const Jg={anticipate:wg,backInOut:Mg,circInOut:Rg};function E2(a){return a in Jg}function M2(a){typeof a.ease=="string"&&E2(a.ease)&&(a.ease=Jg[a.ease])}const Im=10;class w2 extends O2{constructor(i){M2(i),Yg(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:s,onComplete:c,element:d,...f}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const g=new Zf({...f,autoplay:!1}),p=Vn(this.finishedTime??this.time);l.setWithVelocity(g.sample(p-Im).value,g.sample(p).value,Im),g.stop()}}const tp=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(qa.test(a)||a==="0")&&!a.startsWith("url("));function C2(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function R2(a,i,l,s){const c=a[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const d=a[a.length-1],f=tp(c,i),g=tp(d,i);return!f||!g?!1:C2(a)||(l==="spring"||Fg(l))&&s}const N2=new Set(["opacity","clipPath","filter","transform"]),k2=zf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function j2(a){const{motionValue:i,name:l,repeatDelay:s,repeatType:c,damping:d,type:f}=a;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:h}=i.owner.getProps();return k2()&&l&&N2.has(l)&&(l!=="transform"||!h)&&!p&&!s&&c!=="mirror"&&d!==0&&f!=="inertia"}const z2=40;class _2 extends Gf{constructor({autoplay:i=!0,delay:l=0,type:s="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:g,name:p,motionValue:h,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=en.now();const x={autoplay:i,delay:l,type:s,repeat:c,repeatDelay:d,repeatType:f,name:p,motionValue:h,element:y,...v},E=y?.KeyframeResolver||Qf;this.keyframeResolver=new E(g,(M,w,H)=>this.onKeyframesResolved(M,w,x,!H),p,h,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,s,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:g,delay:p,isHandoff:h,onUpdate:y}=s;this.resolvedAt=en.now(),R2(i,d,f,g)||((ra.instantAnimations||!p)&&y?.(Yf(i,s,l)),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>z2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...s,keyframes:i},E=!h&&j2(x)?new w2({...x,element:x.motionValue.owner.current}):new Zf(x);E.finished.then(()=>this.notifyFinished()).catch(Tn),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),y2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const V2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function B2(a){const i=V2.exec(a);if(!i)return[,];const[,l,s,c]=i;return[`--${l??s}`,c]}function Wg(a,i,l=1){const[s,c]=B2(a);if(!s)return;const d=window.getComputedStyle(i).getPropertyValue(s);if(d){const f=d.trim();return vg(f)?parseFloat(f):f}return Lf(c)?Wg(c,i,l+1):c}function Kf(a,i){return a?.[i]??a?.default??a}const $g=new Set(["width","height","top","left","right","bottom",...po]),U2={test:a=>a==="auto",parse:a=>a},Ig=a=>i=>i.test(a),ty=[mo,vt,Un,La,C1,w1,U2],ep=a=>ty.find(Ig(a));function L2(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Sg(a):!0}const H2=new Set(["brightness","contrast","saturate","opacity"]);function q2(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[s]=l.match(Hf)||[];if(!s)return a;const c=l.replace(s,"");let d=H2.has(i)?1:0;return s!==l&&(d*=100),i+"("+d+c+")"}const P2=/\b([a-z-]*)\(.*?\)/gu,gf={...qa,getAnimatableNone:a=>{const i=a.match(P2);return i?i.map(q2).join(" "):a}},np={...mo,transform:Math.round},X2={rotate:La,rotateX:La,rotateY:La,rotateZ:La,scale:is,scaleX:is,scaleY:is,scaleZ:is,skew:La,skewX:La,skewY:La,distance:vt,translateX:vt,translateY:vt,translateZ:vt,x:vt,y:vt,z:vt,perspective:vt,transformPerspective:vt,opacity:Rl,originX:Xm,originY:Xm,originZ:vt},Ff={borderWidth:vt,borderTopWidth:vt,borderRightWidth:vt,borderBottomWidth:vt,borderLeftWidth:vt,borderRadius:vt,radius:vt,borderTopLeftRadius:vt,borderTopRightRadius:vt,borderBottomRightRadius:vt,borderBottomLeftRadius:vt,width:vt,maxWidth:vt,height:vt,maxHeight:vt,top:vt,right:vt,bottom:vt,left:vt,padding:vt,paddingTop:vt,paddingRight:vt,paddingBottom:vt,paddingLeft:vt,margin:vt,marginTop:vt,marginRight:vt,marginBottom:vt,marginLeft:vt,backgroundPositionX:vt,backgroundPositionY:vt,...X2,zIndex:np,fillOpacity:Rl,strokeOpacity:Rl,numOctaves:np},Y2={...Ff,color:Te,backgroundColor:Te,outlineColor:Te,fill:Te,stroke:Te,borderColor:Te,borderTopColor:Te,borderRightColor:Te,borderBottomColor:Te,borderLeftColor:Te,filter:gf,WebkitFilter:gf},ey=a=>Y2[a];function ny(a,i){let l=ey(a);return l!==gf&&(l=qa),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const G2=new Set(["auto","none","0"]);function Z2(a,i,l){let s=0,c;for(;s<a.length&&!c;){const d=a[s];typeof d=="string"&&!G2.has(d)&&Nl(d).values.length&&(c=a[s]),s++}if(c&&l)for(const d of i)a[d]=ny(l,c)}class Q2 extends Qf{constructor(i,l,s,c,d){super(i,l,s,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:s}=this;if(!l||!l.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let h=i[p];if(typeof h=="string"&&(h=h.trim(),Lf(h))){const y=Wg(h,l.current);y!==void 0&&(i[p]=y),p===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!$g.has(s)||i.length!==2)return;const[c,d]=i,f=ep(c),g=ep(d);if(f!==g)if(Wm(f)&&Wm(g))for(let p=0;p<i.length;p++){const h=i[p];typeof h=="string"&&(i[p]=parseFloat(h))}else hi[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||L2(i[c]))&&s.push(c);s.length&&Z2(i,s,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=hi[s](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const c=l[l.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(l);c&&c.jump(this.measuredOrigin,!1);const d=s.length-1,f=s[d];s[d]=hi[l](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,p])=>{i.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function K2(a,i,l){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const c=l?.[a]??s.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a)}const ay=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function iy(a){return xg(a)&&"offsetHeight"in a}const ap=30,F2=a=>!isNaN(parseFloat(a));class J2{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const d=en.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty();c&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=en.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=F2(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new _f);const s=this.events[i].add(l);return i==="change"?()=>{s(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i,l=!0){!l||!this.passiveEffect?this.updateAndNotify(i,l):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,l,s){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=en.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>ap)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,ap);return Tg(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fo(a,i){return new J2(a,i)}const{schedule:Jf}=jg(queueMicrotask,!1),Mn={x:!1,y:!1};function oy(){return Mn.x||Mn.y}function W2(a){return a==="x"||a==="y"?Mn[a]?null:(Mn[a]=!0,()=>{Mn[a]=!1}):Mn.x||Mn.y?null:(Mn.x=Mn.y=!0,()=>{Mn.x=Mn.y=!1})}function ly(a,i){const l=K2(a),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[l,c,()=>s.abort()]}function ip(a){return!(a.pointerType==="touch"||oy())}function $2(a,i,l={}){const[s,c,d]=ly(a,l),f=g=>{if(!ip(g))return;const{target:p}=g,h=i(p,g);if(typeof h!="function"||!p)return;const y=v=>{ip(v)&&(h(v),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,c)};return s.forEach(g=>{g.addEventListener("pointerenter",f,c)}),d}const ry=(a,i)=>i?a===i?!0:ry(a,i.parentElement):!1,Wf=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,I2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function tx(a){return I2.has(a.tagName)||a.tabIndex!==-1}const cs=new WeakSet;function op(a){return i=>{i.key==="Enter"&&a(i)}}function Qc(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const ex=(a,i)=>{const l=a.currentTarget;if(!l)return;const s=op(()=>{if(cs.has(l))return;Qc(l,"down");const c=op(()=>{Qc(l,"up")}),d=()=>Qc(l,"cancel");l.addEventListener("keyup",c,i),l.addEventListener("blur",d,i)});l.addEventListener("keydown",s,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",s),i)};function lp(a){return Wf(a)&&!oy()}function nx(a,i,l={}){const[s,c,d]=ly(a,l),f=g=>{const p=g.currentTarget;if(!lp(g))return;cs.add(p);const h=i(p,g),y=(E,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),cs.has(p)&&cs.delete(p),lp(E)&&typeof h=="function"&&h(E,{success:M})},v=E=>{y(E,p===window||p===document||l.useGlobalTarget||ry(p,E.target))},x=E=>{y(E,!1)};window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",x,c)};return s.forEach(g=>{(l.useGlobalTarget?window:g).addEventListener("pointerdown",f,c),iy(g)&&(g.addEventListener("focus",h=>ex(h,c)),!tx(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),d}function sy(a){return xg(a)&&"ownerSVGElement"in a}function ax(a){return sy(a)&&a.tagName==="svg"}const Xe=a=>!!(a&&a.getVelocity),ix=[...ty,Te,qa],ox=a=>ix.find(Ig(a)),$f=X.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});class lx extends X.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(l&&i.isPresent&&!this.props.isPresent){const s=l.offsetParent,c=iy(s)&&s.offsetWidth||0,d=this.props.sizeRef.current;d.height=l.offsetHeight||0,d.width=l.offsetWidth||0,d.top=l.offsetTop,d.left=l.offsetLeft,d.right=c-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function rx({children:a,isPresent:i,anchorX:l,root:s}){const c=X.useId(),d=X.useRef(null),f=X.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:g}=X.useContext($f);return X.useInsertionEffect(()=>{const{width:p,height:h,top:y,left:v,right:x}=f.current;if(i||!d.current||!p||!h)return;const E=l==="left"?`left: ${v}`:`right: ${x}`;d.current.dataset.motionPopId=c;const M=document.createElement("style");g&&(M.nonce=g);const w=s??document.head;return w.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${E}px !important;
            top: ${y}px !important;
          }
        `),()=>{w.removeChild(M),w.contains(M)&&w.removeChild(M)}},[i]),S.jsx(lx,{isPresent:i,childRef:d,sizeRef:f,children:X.cloneElement(a,{ref:d})})}const sx=({children:a,initial:i,isPresent:l,onExitComplete:s,custom:c,presenceAffectsLayout:d,mode:f,anchorX:g,root:p})=>{const h=Cf(ux),y=X.useId();let v=!0,x=X.useMemo(()=>(v=!1,{id:y,initial:i,isPresent:l,custom:c,onExitComplete:E=>{h.set(E,!0);for(const M of h.values())if(!M)return;s&&s()},register:E=>(h.set(E,!1),()=>h.delete(E))}),[l,h,s]);return d&&v&&(x={...x}),X.useMemo(()=>{h.forEach((E,M)=>h.set(M,!1))},[l]),X.useEffect(()=>{!l&&!h.size&&s&&s()},[l]),f==="popLayout"&&(a=S.jsx(rx,{isPresent:l,anchorX:g,root:p,children:a})),S.jsx(xs.Provider,{value:x,children:a})};function ux(){return new Map}function uy(a=!0){const i=X.useContext(xs);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:s,register:c}=i,d=X.useId();X.useEffect(()=>{if(a)return c(d)},[a]);const f=X.useCallback(()=>a&&s&&s(d),[d,s,a]);return!l&&s?[!1,f]:[!0]}const os=a=>a.key||"";function rp(a){const i=[];return X.Children.forEach(a,l=>{X.isValidElement(l)&&i.push(l)}),i}const fs=({children:a,custom:i,initial:l=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:d="sync",propagate:f=!1,anchorX:g="left",root:p})=>{const[h,y]=uy(f),v=X.useMemo(()=>rp(a),[a]),x=f&&!h?[]:v.map(os),E=X.useRef(!0),M=X.useRef(v),w=Cf(()=>new Map),[H,B]=X.useState(v),[U,j]=X.useState(v);bg(()=>{E.current=!1,M.current=v;for(let K=0;K<U.length;K++){const J=os(U[K]);x.includes(J)?w.delete(J):w.get(J)!==!0&&w.set(J,!1)}},[U,x.length,x.join("-")]);const Z=[];if(v!==H){let K=[...v];for(let J=0;J<U.length;J++){const G=U[J],et=os(G);x.includes(et)||(K.splice(J,0,G),Z.push(G))}return d==="wait"&&Z.length&&(K=Z),j(rp(K)),B(v),null}const{forceRender:z}=X.useContext(wf);return S.jsx(S.Fragment,{children:U.map(K=>{const J=os(K),G=f&&!h?!1:v===U||x.includes(J),et=()=>{if(w.has(J))w.set(J,!0);else return;let ct=!0;w.forEach(wt=>{wt||(ct=!1)}),ct&&(z?.(),j(M.current),f&&y?.(),s&&s())};return S.jsx(sx,{isPresent:G,initial:!E.current||l?void 0:!1,custom:i,presenceAffectsLayout:c,mode:d,root:p,onExitComplete:G?void 0:et,anchorX:g,children:K},J)})})},cy=X.createContext({strict:!1}),sp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ho={};for(const a in sp)ho[a]={isEnabled:i=>sp[a].some(l=>!!i[l])};function cx(a){for(const i in a)ho[i]={...ho[i],...a[i]}}const fx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ys(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||fx.has(a)}let fy=a=>!ys(a);function dx(a){typeof a=="function"&&(fy=i=>i.startsWith("on")?!ys(i):a(i))}try{dx(require("@emotion/is-prop-valid").default)}catch{}function hx(a,i,l){const s={};for(const c in a)c==="values"&&typeof a.values=="object"||(fy(c)||l===!0&&ys(c)||!i&&!ys(c)||a.draggable&&c.startsWith("onDrag"))&&(s[c]=a[c]);return s}const Ss=X.createContext({});function Ts(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function kl(a){return typeof a=="string"||Array.isArray(a)}const If=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],td=["initial",...If];function As(a){return Ts(a.animate)||td.some(i=>kl(a[i]))}function dy(a){return!!(As(a)||a.variants)}function mx(a,i){if(As(a)){const{initial:l,animate:s}=a;return{initial:l===!1||kl(l)?l:void 0,animate:kl(s)?s:void 0}}return a.inherit!==!1?i:{}}function px(a){const{initial:i,animate:l}=mx(a,X.useContext(Ss));return X.useMemo(()=>({initial:i,animate:l}),[up(i),up(l)])}function up(a){return Array.isArray(a)?a.join(" "):a}const jl={};function gx(a){for(const i in a)jl[i]=a[i],Uf(i)&&(jl[i].isCSSVariable=!0)}function hy(a,{layout:i,layoutId:l}){return go.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!jl[a]||a==="opacity")}const yx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bx=po.length;function vx(a,i,l){let s="",c=!0;for(let d=0;d<bx;d++){const f=po[d],g=a[f];if(g===void 0)continue;let p=!0;if(typeof g=="number"?p=g===(f.startsWith("scale")?1:0):p=parseFloat(g)===0,!p||l){const h=ay(g,Ff[f]);if(!p){c=!1;const y=yx[f]||f;s+=`${y}(${h}) `}l&&(i[f]=h)}}return s=s.trim(),l?s=l(i,c?"":s):c&&(s="none"),s}function ed(a,i,l){const{style:s,vars:c,transformOrigin:d}=a;let f=!1,g=!1;for(const p in i){const h=i[p];if(go.has(p)){f=!0;continue}else if(Uf(p)){c[p]=h;continue}else{const y=ay(h,Ff[p]);p.startsWith("origin")?(g=!0,d[p]=y):s[p]=y}}if(i.transform||(f||l?s.transform=vx(i,a.transform,l):s.transform&&(s.transform="none")),g){const{originX:p="50%",originY:h="50%",originZ:y=0}=d;s.transformOrigin=`${p} ${h} ${y}`}}const nd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function my(a,i,l){for(const s in i)!Xe(i[s])&&!hy(s,l)&&(a[s]=i[s])}function xx({transformTemplate:a},i){return X.useMemo(()=>{const l=nd();return ed(l,i,a),Object.assign({},l.vars,l.style)},[i])}function Sx(a,i){const l=a.style||{},s={};return my(s,l,a),Object.assign(s,xx(a,i)),s}function Tx(a,i){const l={},s=Sx(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=s,l}const Ax={offset:"stroke-dashoffset",array:"stroke-dasharray"},Dx={offset:"strokeDashoffset",array:"strokeDasharray"};function Ox(a,i,l=1,s=0,c=!0){a.pathLength=1;const d=c?Ax:Dx;a[d.offset]=vt.transform(-s);const f=vt.transform(i),g=vt.transform(l);a[d.array]=`${f} ${g}`}function py(a,{attrX:i,attrY:l,attrScale:s,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...g},p,h,y){if(ed(a,g,h),p){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:v,style:x}=a;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=y?.transformBox??"fill-box",delete v.transformBox),i!==void 0&&(v.x=i),l!==void 0&&(v.y=l),s!==void 0&&(v.scale=s),c!==void 0&&Ox(v,c,d,f,!1)}const gy=()=>({...nd(),attrs:{}}),yy=a=>typeof a=="string"&&a.toLowerCase()==="svg";function Ex(a,i,l,s){const c=X.useMemo(()=>{const d=gy();return py(d,i,yy(s),a.transformTemplate,a.style),{...d.attrs,style:{...d.style}}},[i]);if(a.style){const d={};my(d,a.style,a),c.style={...d,...c.style}}return c}const Mx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ad(a){return typeof a!="string"||a.includes("-")?!1:!!(Mx.indexOf(a)>-1||/[A-Z]/u.test(a))}function wx(a,i,l,{latestValues:s},c,d=!1){const g=(ad(a)?Ex:Tx)(i,s,c,a),p=hx(i,typeof a=="string",d),h=a!==X.Fragment?{...p,...g,ref:l}:{},{children:y}=i,v=X.useMemo(()=>Xe(y)?y.get():y,[y]);return X.createElement(a,{...h,children:v})}function cp(a){const i=[{},{}];return a?.values.forEach((l,s)=>{i[0][s]=l.get(),i[1][s]=l.getVelocity()}),i}function id(a,i,l,s){if(typeof i=="function"){const[c,d]=cp(s);i=i(l!==void 0?l:a.custom,c,d)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[c,d]=cp(s);i=i(l!==void 0?l:a.custom,c,d)}return i}function ds(a){return Xe(a)?a.get():a}function Cx({scrapeMotionValuesFromProps:a,createRenderState:i},l,s,c){return{latestValues:Rx(l,s,c,a),renderState:i()}}function Rx(a,i,l,s){const c={},d=s(a,{});for(const x in d)c[x]=ds(d[x]);let{initial:f,animate:g}=a;const p=As(a),h=dy(a);i&&h&&!p&&a.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=l?l.initial===!1:!1;y=y||f===!1;const v=y?g:f;if(v&&typeof v!="boolean"&&!Ts(v)){const x=Array.isArray(v)?v:[v];for(let E=0;E<x.length;E++){const M=id(a,x[E]);if(M){const{transitionEnd:w,transition:H,...B}=M;for(const U in B){let j=B[U];if(Array.isArray(j)){const Z=y?j.length-1:0;j=j[Z]}j!==null&&(c[U]=j)}for(const U in w)c[U]=w[U]}}}return c}const by=a=>(i,l)=>{const s=X.useContext(Ss),c=X.useContext(xs),d=()=>Cx(a,i,s,c);return l?d():Cf(d)};function od(a,i,l){const{style:s}=a,c={};for(const d in s)(Xe(s[d])||i.style&&Xe(i.style[d])||hy(d,a)||l?.getValue(d)?.liveStyle!==void 0)&&(c[d]=s[d]);return c}const Nx=by({scrapeMotionValuesFromProps:od,createRenderState:nd});function vy(a,i,l){const s=od(a,i,l);for(const c in a)if(Xe(a[c])||Xe(i[c])){const d=po.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[d]=a[c]}return s}const kx=by({scrapeMotionValuesFromProps:vy,createRenderState:gy}),jx=Symbol.for("motionComponentSymbol");function ro(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function zx(a,i,l){return X.useCallback(s=>{s&&a.onMount&&a.onMount(s),i&&(s?i.mount(s):i.unmount()),l&&(typeof l=="function"?l(s):ro(l)&&(l.current=s))},[i])}const ld=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),_x="framerAppearId",xy="data-"+ld(_x),Sy=X.createContext({});function Vx(a,i,l,s,c){const{visualElement:d}=X.useContext(Ss),f=X.useContext(cy),g=X.useContext(xs),p=X.useContext($f).reducedMotion,h=X.useRef(null);s=s||f.renderer,!h.current&&s&&(h.current=s(a,{visualState:i,parent:d,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:p}));const y=h.current,v=X.useContext(Sy);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&Bx(h.current,l,c,v);const x=X.useRef(!1);X.useInsertionEffect(()=>{y&&x.current&&y.update(l,g)});const E=l[xy],M=X.useRef(!!E&&!window.MotionHandoffIsComplete?.(E)&&window.MotionHasOptimisedAnimation?.(E));return bg(()=>{y&&(x.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),M.current&&y.animationState&&y.animationState.animateChanges())}),X.useEffect(()=>{y&&(!M.current&&y.animationState&&y.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(E)}),M.current=!1))}),y}function Bx(a,i,l,s){const{layoutId:c,layout:d,drag:f,dragConstraints:g,layoutScroll:p,layoutRoot:h,layoutCrossfade:y}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:Ty(a.parent)),a.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||g&&ro(g),visualElement:a,animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:h})}function Ty(a){if(a)return a.options.allowProjection!==!1?a.projection:Ty(a.parent)}function Kc(a,{forwardMotionProps:i=!1}={},l,s){l&&cx(l);const c=ad(a)?kx:Nx;function d(g,p){let h;const y={...X.useContext($f),...g,layoutId:Ux(g)},{isStatic:v}=y,x=px(g),E=c(g,v);if(!v&&Rf){Lx();const M=Hx(y);h=M.MeasureLayout,x.visualElement=Vx(a,E,y,s,M.ProjectionNode)}return S.jsxs(Ss.Provider,{value:x,children:[h&&x.visualElement?S.jsx(h,{visualElement:x.visualElement,...y}):null,wx(a,g,zx(E,x.visualElement,p),E,v,i)]})}d.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=X.forwardRef(d);return f[jx]=a,f}function Ux({layoutId:a}){const i=X.useContext(wf).id;return i&&a!==void 0?i+"-"+a:a}function Lx(a,i){X.useContext(cy).strict}function Hx(a){const{drag:i,layout:l}=ho;if(!i&&!l)return{};const s={...i,...l};return{MeasureLayout:i?.isEnabled(a)||l?.isEnabled(a)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function qx(a,i){if(typeof Proxy>"u")return Kc;const l=new Map,s=(d,f)=>Kc(d,f,a,i),c=(d,f)=>s(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?s:(l.has(f)||l.set(f,Kc(f,void 0,a,i)),l.get(f))})}function Ay({top:a,left:i,right:l,bottom:s}){return{x:{min:i,max:l},y:{min:a,max:s}}}function Px({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function Xx(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),s=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:s.y,right:s.x}}function Fc(a){return a===void 0||a===1}function yf({scale:a,scaleX:i,scaleY:l}){return!Fc(a)||!Fc(i)||!Fc(l)}function ci(a){return yf(a)||Dy(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function Dy(a){return fp(a.x)||fp(a.y)}function fp(a){return a&&a!=="0%"}function bs(a,i,l){const s=a-l,c=i*s;return l+c}function dp(a,i,l,s,c){return c!==void 0&&(a=bs(a,c,s)),bs(a,l,s)+i}function bf(a,i=0,l=1,s,c){a.min=dp(a.min,i,l,s,c),a.max=dp(a.max,i,l,s,c)}function Oy(a,{x:i,y:l}){bf(a.x,i.translate,i.scale,i.originPoint),bf(a.y,l.translate,l.scale,l.originPoint)}const hp=.999999999999,mp=1.0000000000001;function Yx(a,i,l,s=!1){const c=l.length;if(!c)return;i.x=i.y=1;let d,f;for(let g=0;g<c;g++){d=l[g],f=d.projectionDelta;const{visualElement:p}=d.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&uo(a,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,Oy(a,f)),s&&ci(d.latestValues)&&uo(a,d.latestValues))}i.x<mp&&i.x>hp&&(i.x=1),i.y<mp&&i.y>hp&&(i.y=1)}function so(a,i){a.min=a.min+i,a.max=a.max+i}function pp(a,i,l,s,c=.5){const d=le(a.min,a.max,c);bf(a,i,l,d,s)}function uo(a,i){pp(a.x,i.x,i.scaleX,i.scale,i.originX),pp(a.y,i.y,i.scaleY,i.scale,i.originY)}function Ey(a,i){return Ay(Xx(a.getBoundingClientRect(),i))}function Gx(a,i,l){const s=Ey(a,l),{scroll:c}=i;return c&&(so(s.x,c.offset.x),so(s.y,c.offset.y)),s}const gp=()=>({translate:0,scale:1,origin:0,originPoint:0}),co=()=>({x:gp(),y:gp()}),yp=()=>({min:0,max:0}),me=()=>({x:yp(),y:yp()}),vf={current:null},My={current:!1};function Zx(){if(My.current=!0,!!Rf)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>vf.current=a.matches;a.addEventListener("change",i),i()}else vf.current=!1}const Qx=new WeakMap;function Kx(a,i,l){for(const s in i){const c=i[s],d=l[s];if(Xe(c))a.addValue(s,c);else if(Xe(d))a.addValue(s,fo(c,{owner:a}));else if(d!==c)if(a.hasValue(s)){const f=a.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=a.getStaticValue(s);a.addValue(s,fo(f!==void 0?f:c,{owner:a}))}}for(const s in l)i[s]===void 0&&a.removeValue(s);return i}const bp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Fx{scrapeMotionValuesFromProps(i,l,s){return{}}constructor({parent:i,props:l,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Qf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=en.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,ae.render(this.render,!1,!0))};const{latestValues:p,renderState:h}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=l.initial?{...p}:{},this.renderState=h,this.parent=i,this.props=l,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!d,this.isControllingVariants=As(l),this.isVariantNode=dy(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(l,{},this);for(const x in v){const E=v[x];p[x]!==void 0&&Xe(E)&&E.set(p[x],!1)}}mount(i){this.current=i,Qx.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,s)=>this.bindToMotionValue(s,l)),My.current||Zx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:vf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ha(this.notifyUpdate),Ha(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=go.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=l.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&ae.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),d=l.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{c(),d(),f&&f(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ho){const l=ho[i];if(!l)continue;const{isEnabled:s,Feature:c}=l;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):me()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let s=0;s<bp.length;s++){const c=bp[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=i[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=Kx(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const s=this.values.get(i);l!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&l!==void 0&&(s=fo(l===null?void 0:l,{owner:this}),this.addValue(i,s)),s}readValue(i,l){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(vg(s)||Sg(s))?s=parseFloat(s):!ox(s)&&qa.test(l)&&(s=ny(i,l)),this.setBaseTarget(i,Xe(s)?s.get():s)),Xe(s)?s.get():s}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let s;if(typeof l=="string"||typeof l=="object"){const d=id(this.props,l,this.presenceContext?.custom);d&&(s=d[i])}if(l&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!Xe(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new _f),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){Jf.render(this.render)}}class wy extends Fx{constructor(){super(...arguments),this.KeyframeResolver=Q2}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:s}){delete l[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Xe(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function Cy(a,{style:i,vars:l},s,c){const d=a.style;let f;for(f in i)d[f]=i[f];c?.applyProjectionStyles(d,s);for(f in l)d.setProperty(f,l[f])}function Jx(a){return window.getComputedStyle(a)}class Wx extends wy{constructor(){super(...arguments),this.type="html",this.renderInstance=Cy}readValueFromInstance(i,l){if(go.has(l))return this.projection?.isProjecting?ff(l):d2(i,l);{const s=Jx(i),c=(Uf(l)?s.getPropertyValue(l):s[l])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:l}){return Ey(i,l)}build(i,l,s){ed(i,l,s.transformTemplate)}scrapeMotionValuesFromProps(i,l,s){return od(i,l,s)}}const Ry=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $x(a,i,l,s){Cy(a,i,void 0,s);for(const c in i.attrs)a.setAttribute(Ry.has(c)?c:ld(c),i.attrs[c])}class Ix extends wy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=me}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(go.has(l)){const s=ey(l);return s&&s.default||0}return l=Ry.has(l)?l:ld(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,s){return vy(i,l,s)}build(i,l,s){py(i,l,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,l,s,c){$x(i,l,s,c)}mount(i){this.isSVGTag=yy(i.tagName),super.mount(i)}}const t5=(a,i)=>ad(a)?new Ix(i):new Wx(i,{allowProjection:a!==X.Fragment});function zl(a,i,l){const s=a.getProps();return id(s,i,l!==void 0?l:s.custom,a)}const xf=a=>Array.isArray(a);function e5(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,fo(l))}function n5(a){return xf(a)?a[a.length-1]||0:a}function a5(a,i){const l=zl(a,i);let{transitionEnd:s={},transition:c={},...d}=l||{};d={...d,...s};for(const f in d){const g=n5(d[f]);e5(a,f,g)}}function i5(a){return!!(Xe(a)&&a.add)}function Sf(a,i){const l=a.getValue("willChange");if(i5(l))return l.add(i);if(!l&&ra.WillChange){const s=new ra.WillChange("auto");a.addValue("willChange",s),s.add(i)}}function Ny(a){return a.props[xy]}const o5=a=>a!==null;function l5(a,{repeat:i,repeatType:l="loop"},s){const c=a.filter(o5),d=i&&l!=="loop"&&i%2===1?0:c.length-1;return c[d]}const r5={type:"spring",stiffness:500,damping:25,restSpeed:10},s5=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),u5={type:"keyframes",duration:.8},c5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},f5=(a,{keyframes:i})=>i.length>2?u5:go.has(a)?a.startsWith("scale")?s5(i[1]):r5:c5;function d5({when:a,delay:i,delayChildren:l,staggerChildren:s,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:g,from:p,elapsed:h,...y}){return!!Object.keys(y).length}const rd=(a,i,l,s={},c,d)=>f=>{const g=Kf(s,a)||{},p=g.delay||s.delay||0;let{elapsed:h=0}=s;h=h-Vn(p);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-h,onUpdate:x=>{i.set(x),g.onUpdate&&g.onUpdate(x)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:a,motionValue:i,element:d?void 0:c};d5(g)||Object.assign(y,f5(a,y)),y.duration&&(y.duration=Vn(y.duration)),y.repeatDelay&&(y.repeatDelay=Vn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(v=!0)),(ra.instantAnimations||ra.skipAnimations)&&(v=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,v&&!d&&i.get()!==void 0){const x=l5(y.keyframes,g);if(x!==void 0){ae.update(()=>{y.onUpdate(x),y.onComplete()});return}}return g.isSync?new Zf(y):new _2(y)};function h5({protectedKeys:a,needsAnimating:i},l){const s=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,s}function ky(a,i,{delay:l=0,transitionOverride:s,type:c}={}){let{transition:d=a.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(d=s);const p=[],h=c&&a.animationState&&a.animationState.getState()[c];for(const y in g){const v=a.getValue(y,a.latestValues[y]??null),x=g[y];if(x===void 0||h&&h5(h,y))continue;const E={delay:l,...Kf(d||{},y)},M=v.get();if(M!==void 0&&!v.isAnimating&&!Array.isArray(x)&&x===M&&!E.velocity)continue;let w=!1;if(window.MotionHandoffAnimation){const B=Ny(a);if(B){const U=window.MotionHandoffAnimation(B,y,ae);U!==null&&(E.startTime=U,w=!0)}}Sf(a,y),v.start(rd(y,v,x,a.shouldReduceMotion&&$g.has(y)?{type:!1}:E,a,w));const H=v.animation;H&&p.push(H)}return f&&Promise.all(p).then(()=>{ae.update(()=>{f&&a5(a,f)})}),p}function Tf(a,i,l={}){const s=zl(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=s||{};l.transitionOverride&&(c=l.transitionOverride);const d=s?()=>Promise.all(ky(a,s,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(p=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:v}=c;return m5(a,i,p,h,y,v,l)}:()=>Promise.resolve(),{when:g}=c;if(g){const[p,h]=g==="beforeChildren"?[d,f]:[f,d];return p().then(()=>h())}else return Promise.all([d(),f(l.delay)])}function m5(a,i,l=0,s=0,c=0,d=1,f){const g=[],p=a.variantChildren.size,h=(p-1)*c,y=typeof s=="function",v=y?x=>s(x,p):d===1?(x=0)=>x*c:(x=0)=>h-x*c;return Array.from(a.variantChildren).sort(p5).forEach((x,E)=>{x.notify("AnimationStart",i),g.push(Tf(x,i,{...f,delay:l+(y?0:s)+v(E)}).then(()=>x.notify("AnimationComplete",i)))}),Promise.all(g)}function p5(a,i){return a.sortNodePosition(i)}function g5(a,i,l={}){a.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(d=>Tf(a,d,l));s=Promise.all(c)}else if(typeof i=="string")s=Tf(a,i,l);else{const c=typeof i=="function"?zl(a,i,l.custom):i;s=Promise.all(ky(a,c,l))}return s.then(()=>{a.notify("AnimationComplete",i)})}function jy(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let s=0;s<l;s++)if(i[s]!==a[s])return!1;return!0}const y5=td.length;function zy(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?zy(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<y5;l++){const s=td[l],c=a.props[s];(kl(c)||c===!1)&&(i[s]=c)}return i}const b5=[...If].reverse(),v5=If.length;function x5(a){return i=>Promise.all(i.map(({animation:l,options:s})=>g5(a,l,s)))}function S5(a){let i=x5(a),l=vp(),s=!0;const c=p=>(h,y)=>{const v=zl(a,y,p==="exit"?a.presenceContext?.custom:void 0);if(v){const{transition:x,transitionEnd:E,...M}=v;h={...h,...M,...E}}return h};function d(p){i=p(a)}function f(p){const{props:h}=a,y=zy(a.parent)||{},v=[],x=new Set;let E={},M=1/0;for(let H=0;H<v5;H++){const B=b5[H],U=l[B],j=h[B]!==void 0?h[B]:y[B],Z=kl(j),z=B===p?U.isActive:null;z===!1&&(M=H);let K=j===y[B]&&j!==h[B]&&Z;if(K&&s&&a.manuallyAnimateOnMount&&(K=!1),U.protectedKeys={...E},!U.isActive&&z===null||!j&&!U.prevProp||Ts(j)||typeof j=="boolean")continue;const J=T5(U.prevProp,j);let G=J||B===p&&U.isActive&&!K&&Z||H>M&&Z,et=!1;const ct=Array.isArray(j)?j:[j];let wt=ct.reduce(c(B),{});z===!1&&(wt={});const{prevResolvedValues:Lt={}}=U,pe={...Lt,...wt},ie=F=>{G=!0,x.has(F)&&(et=!0,x.delete(F)),U.needsAnimating[F]=!0;const I=a.getValue(F);I&&(I.liveStyle=!1)};for(const F in pe){const I=wt[F],yt=Lt[F];if(E.hasOwnProperty(F))continue;let A=!1;xf(I)&&xf(yt)?A=!jy(I,yt):A=I!==yt,A?I!=null?ie(F):x.add(F):I!==void 0&&x.has(F)?ie(F):U.protectedKeys[F]=!0}U.prevProp=j,U.prevResolvedValues=wt,U.isActive&&(E={...E,...wt}),s&&a.blockInitialAnimation&&(G=!1),G&&(!(K&&J)||et)&&v.push(...ct.map(F=>({animation:F,options:{type:B}})))}if(x.size){const H={};if(typeof h.initial!="boolean"){const B=zl(a,Array.isArray(h.initial)?h.initial[0]:h.initial);B&&B.transition&&(H.transition=B.transition)}x.forEach(B=>{const U=a.getBaseTarget(B),j=a.getValue(B);j&&(j.liveStyle=!0),H[B]=U??null}),v.push({animation:H})}let w=!!v.length;return s&&(h.initial===!1||h.initial===h.animate)&&!a.manuallyAnimateOnMount&&(w=!1),s=!1,w?i(v):Promise.resolve()}function g(p,h){if(l[p].isActive===h)return Promise.resolve();a.variantChildren?.forEach(v=>v.animationState?.setActive(p,h)),l[p].isActive=h;const y=f(p);for(const v in l)l[v].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:d,getState:()=>l,reset:()=>{l=vp(),s=!0}}}function T5(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!jy(i,a):!1}function ui(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vp(){return{animate:ui(!0),whileInView:ui(),whileHover:ui(),whileTap:ui(),whileDrag:ui(),whileFocus:ui(),exit:ui()}}class Pa{constructor(i){this.isMounted=!1,this.node=i}update(){}}class A5 extends Pa{constructor(i){super(i),i.animationState||(i.animationState=S5(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Ts(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let D5=0;class O5 extends Pa{constructor(){super(...arguments),this.id=D5++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);l&&!i&&c.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const E5={animation:{Feature:A5},exit:{Feature:O5}};function _l(a,i,l,s={passive:!0}){return a.addEventListener(i,l,s),()=>a.removeEventListener(i,l)}function Ll(a){return{point:{x:a.pageX,y:a.pageY}}}const M5=a=>i=>Wf(i)&&a(i,Ll(i));function Ol(a,i,l,s){return _l(a,i,M5(l),s)}const _y=1e-4,w5=1-_y,C5=1+_y,Vy=.01,R5=0-Vy,N5=0+Vy;function Ke(a){return a.max-a.min}function k5(a,i,l){return Math.abs(a-i)<=l}function xp(a,i,l,s=.5){a.origin=s,a.originPoint=le(i.min,i.max,a.origin),a.scale=Ke(l)/Ke(i),a.translate=le(l.min,l.max,a.origin)-a.originPoint,(a.scale>=w5&&a.scale<=C5||isNaN(a.scale))&&(a.scale=1),(a.translate>=R5&&a.translate<=N5||isNaN(a.translate))&&(a.translate=0)}function El(a,i,l,s){xp(a.x,i.x,l.x,s?s.originX:void 0),xp(a.y,i.y,l.y,s?s.originY:void 0)}function Sp(a,i,l){a.min=l.min+i.min,a.max=a.min+Ke(i)}function j5(a,i,l){Sp(a.x,i.x,l.x),Sp(a.y,i.y,l.y)}function Tp(a,i,l){a.min=i.min-l.min,a.max=a.min+Ke(i)}function Ml(a,i,l){Tp(a.x,i.x,l.x),Tp(a.y,i.y,l.y)}function Sn(a){return[a("x"),a("y")]}const By=({current:a})=>a?a.ownerDocument.defaultView:null,Ap=(a,i)=>Math.abs(a-i);function z5(a,i){const l=Ap(a.x,i.x),s=Ap(a.y,i.y);return Math.sqrt(l**2+s**2)}class Uy{constructor(i,l,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Wc(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,M=z5(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!M)return;const{point:w}=x,{timestamp:H}=Be;this.history.push({...w,timestamp:H});const{onStart:B,onMove:U}=this.handlers;E||(B&&B(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),U&&U(this.lastMoveEvent,x)},this.handlePointerMove=(x,E)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Jc(E,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(x,E)=>{this.end();const{onEnd:M,onSessionEnd:w,resumeAnimation:H}=this.handlers;if(this.dragSnapToOrigin&&H&&H(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const B=Wc(x.type==="pointercancel"?this.lastMoveEventInfo:Jc(E,this.transformPagePoint),this.history);this.startEvent&&M&&M(x,B),w&&w(x,B)},!Wf(i))return;this.dragSnapToOrigin=d,this.handlers=l,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=c||window;const g=Ll(i),p=Jc(g,this.transformPagePoint),{point:h}=p,{timestamp:y}=Be;this.history=[{...h,timestamp:y}];const{onSessionStart:v}=l;v&&v(i,Wc(p,this.history)),this.removeListeners=Vl(Ol(this.contextWindow,"pointermove",this.handlePointerMove),Ol(this.contextWindow,"pointerup",this.handlePointerUp),Ol(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Ha(this.updatePoint)}}function Jc(a,i){return i?{point:i(a.point)}:a}function Dp(a,i){return{x:a.x-i.x,y:a.y-i.y}}function Wc({point:a},i){return{point:a,delta:Dp(a,Ly(i)),offset:Dp(a,_5(i)),velocity:V5(i,.1)}}function _5(a){return a[0]}function Ly(a){return a[a.length-1]}function V5(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,s=null;const c=Ly(a);for(;l>=0&&(s=a[l],!(c.timestamp-s.timestamp>Vn(i)));)l--;if(!s)return{x:0,y:0};const d=Bn(c.timestamp-s.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-s.x)/d,y:(c.y-s.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function B5(a,{min:i,max:l},s){return i!==void 0&&a<i?a=s?le(i,a,s.min):Math.max(a,i):l!==void 0&&a>l&&(a=s?le(l,a,s.max):Math.min(a,l)),a}function Op(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function U5(a,{top:i,left:l,bottom:s,right:c}){return{x:Op(a.x,l,c),y:Op(a.y,i,s)}}function Ep(a,i){let l=i.min-a.min,s=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,s]=[s,l]),{min:l,max:s}}function L5(a,i){return{x:Ep(a.x,i.x),y:Ep(a.y,i.y)}}function H5(a,i){let l=.5;const s=Ke(a),c=Ke(i);return c>s?l=Cl(i.min,i.max-s,a.min):s>c&&(l=Cl(a.min,a.max-c,i.min)),la(0,1,l)}function q5(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const Af=.35;function P5(a=Af){return a===!1?a=0:a===!0&&(a=Af),{x:Mp(a,"left","right"),y:Mp(a,"top","bottom")}}function Mp(a,i,l){return{min:wp(a,i),max:wp(a,l)}}function wp(a,i){return typeof a=="number"?a:a[i]||0}const X5=new WeakMap;class Y5{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=v=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(Ll(v).point)},f=(v,x)=>{const{drag:E,dragPropagation:M,onDragStart:w}=this.getProps();if(E&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=W2(E),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Sn(B=>{let U=this.getAxisMotionValue(B).get()||0;if(Un.test(U)){const{projection:j}=this.visualElement;if(j&&j.layout){const Z=j.layout.layoutBox[B];Z&&(U=Ke(Z)*(parseFloat(U)/100))}}this.originPoint[B]=U}),w&&ae.postRender(()=>w(v,x)),Sf(this.visualElement,"transform");const{animationState:H}=this.visualElement;H&&H.setActive("whileDrag",!0)},g=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:E,dragDirectionLock:M,onDirectionLock:w,onDrag:H}=this.getProps();if(!E&&!this.openDragLock)return;const{offset:B}=x;if(M&&this.currentDirection===null){this.currentDirection=G5(B),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",x.point,B),this.updateAxis("y",x.point,B),this.visualElement.render(),H&&H(v,x)},p=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>Sn(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Uy(i,{onSessionStart:d,onStart:f,onMove:g,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:By(this.visualElement)})}stop(i,l){const s=i||this.latestPointerEvent,c=l||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!s)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:g}=this.getProps();g&&ae.postRender(()=>g(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,s){const{drag:c}=this.getProps();if(!s||!ls(i,c,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=B5(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&ro(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=U5(s.layoutBox,i):this.constraints=!1,this.elastic=P5(l),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Sn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=q5(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!ro(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=Gx(s,c.root,this.visualElement.getTransformPagePoint());let f=L5(c.layout.layoutBox,d);if(l){const g=l(Px(f));this.hasMutatedConstraints=!!g,g&&(f=Ay(g))}return f}startAnimation(i){const{drag:l,dragMomentum:s,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),p=this.constraints||{},h=Sn(y=>{if(!ls(y,l,this.currentDirection))return;let v=p&&p[y]||{};f&&(v={min:0,max:0});const x=c?200:1e6,E=c?40:1e7,M={type:"inertia",velocity:s?i[y]:0,bounceStiffness:x,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...d,...v};return this.startAxisValueAnimation(y,M)});return Promise.all(h).then(g)}startAxisValueAnimation(i,l){const s=this.getAxisMotionValue(i);return Sf(this.visualElement,i),s.start(rd(i,s,0,l,this.visualElement,!1))}stopAnimation(){Sn(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Sn(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[l];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){Sn(l=>{const{drag:s}=this.getProps();if(!ls(l,s,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(l);if(c&&c.layout){const{min:f,max:g}=c.layout.layoutBox[l];d.set(i[l]-le(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:s}=this.visualElement;if(!ro(l)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Sn(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const p=g.get();c[f]=H5({min:p,max:p},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Sn(f=>{if(!ls(f,i,null))return;const g=this.getAxisMotionValue(f),{min:p,max:h}=this.constraints[f];g.set(le(p,h,c[f]))})}addListeners(){if(!this.visualElement.current)return;X5.set(this.visualElement,this);const i=this.visualElement.current,l=Ol(i,"pointerdown",p=>{const{drag:h,dragListener:y=!0}=this.getProps();h&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();ro(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),ae.read(s);const f=_l(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h})=>{this.isDragging&&h&&(Sn(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=p[y].translate,v.set(v.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),l(),d(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=Af,dragMomentum:g=!0}=i;return{...i,drag:l,dragDirectionLock:s,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:g}}}function ls(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function G5(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class Z5 extends Pa{constructor(i){super(i),this.removeGroupControls=Tn,this.removeListeners=Tn,this.controls=new Y5(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Tn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Cp=a=>(i,l)=>{a&&ae.postRender(()=>a(i,l))};class Q5 extends Pa{constructor(){super(...arguments),this.removePointerDownListener=Tn}onPointerDown(i){this.session=new Uy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:By(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:Cp(i),onStart:Cp(l),onMove:s,onEnd:(d,f)=>{delete this.session,c&&ae.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=Ol(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const hs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Rp(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const xl={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(vt.test(a))a=parseFloat(a);else return a;const l=Rp(a,i.target.x),s=Rp(a,i.target.y);return`${l}% ${s}%`}},K5={correct:(a,{treeScale:i,projectionDelta:l})=>{const s=a,c=qa.parse(a);if(c.length>5)return s;const d=qa.createTransformer(a),f=typeof c[0]!="number"?1:0,g=l.x.scale*i.x,p=l.y.scale*i.y;c[0+f]/=g,c[1+f]/=p;const h=le(g,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=h),typeof c[3+f]=="number"&&(c[3+f]/=h),d(c)}};let Np=!1;class F5 extends X.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s,layoutId:c}=this.props,{projection:d}=i;gx(J5),d&&(l.group&&l.group.add(d),s&&s.register&&c&&s.register(d),Np&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),hs.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:s,drag:c,isPresent:d}=this.props,{projection:f}=s;return f&&(f.isPresent=d,Np=!0,c||i.layoutDependency!==l||l===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||ae.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Jf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Hy(a){const[i,l]=uy(),s=X.useContext(wf);return S.jsx(F5,{...a,layoutGroup:s,switchLayoutGroup:X.useContext(Sy),isPresent:i,safeToRemove:l})}const J5={borderRadius:{...xl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xl,borderTopRightRadius:xl,borderBottomLeftRadius:xl,borderBottomRightRadius:xl,boxShadow:K5};function W5(a,i,l){const s=Xe(a)?a:fo(a);return s.start(rd("",s,i,l)),s.animation}const $5=(a,i)=>a.depth-i.depth;class I5{constructor(){this.children=[],this.isDirty=!1}add(i){Nf(this.children,i),this.isDirty=!0}remove(i){kf(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort($5),this.isDirty=!1,this.children.forEach(i)}}function tS(a,i){const l=en.now(),s=({timestamp:c})=>{const d=c-l;d>=i&&(Ha(s),a(d-i))};return ae.setup(s,!0),()=>Ha(s)}const qy=["TopLeft","TopRight","BottomLeft","BottomRight"],eS=qy.length,kp=a=>typeof a=="string"?parseFloat(a):a,jp=a=>typeof a=="number"||vt.test(a);function nS(a,i,l,s,c,d){c?(a.opacity=le(0,l.opacity??1,aS(s)),a.opacityExit=le(i.opacity??1,0,iS(s))):d&&(a.opacity=le(i.opacity??1,l.opacity??1,s));for(let f=0;f<eS;f++){const g=`border${qy[f]}Radius`;let p=zp(i,g),h=zp(l,g);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||jp(p)===jp(h)?(a[g]=Math.max(le(kp(p),kp(h),s),0),(Un.test(h)||Un.test(p))&&(a[g]+="%")):a[g]=h}(i.rotate||l.rotate)&&(a.rotate=le(i.rotate||0,l.rotate||0,s))}function zp(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const aS=Py(0,.5,Cg),iS=Py(.5,.95,Tn);function Py(a,i,l){return s=>s<a?0:s>i?1:l(Cl(a,i,s))}function _p(a,i){a.min=i.min,a.max=i.max}function xn(a,i){_p(a.x,i.x),_p(a.y,i.y)}function Vp(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}function Bp(a,i,l,s,c){return a-=i,a=bs(a,1/l,s),c!==void 0&&(a=bs(a,1/c,s)),a}function oS(a,i=0,l=1,s=.5,c,d=a,f=a){if(Un.test(i)&&(i=parseFloat(i),i=le(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=le(d.min,d.max,s);a===d&&(g-=i),a.min=Bp(a.min,i,l,g,c),a.max=Bp(a.max,i,l,g,c)}function Up(a,i,[l,s,c],d,f){oS(a,i[l],i[s],i[c],i.scale,d,f)}const lS=["x","scaleX","originX"],rS=["y","scaleY","originY"];function Lp(a,i,l,s){Up(a.x,i,lS,l?l.x:void 0,s?s.x:void 0),Up(a.y,i,rS,l?l.y:void 0,s?s.y:void 0)}function Hp(a){return a.translate===0&&a.scale===1}function Xy(a){return Hp(a.x)&&Hp(a.y)}function qp(a,i){return a.min===i.min&&a.max===i.max}function sS(a,i){return qp(a.x,i.x)&&qp(a.y,i.y)}function Pp(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function Yy(a,i){return Pp(a.x,i.x)&&Pp(a.y,i.y)}function Xp(a){return Ke(a.x)/Ke(a.y)}function Yp(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}class uS{constructor(){this.members=[]}add(i){Nf(this.members,i),i.scheduleRender()}remove(i){if(kf(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(c=>i===c);if(l===0)return!1;let s;for(let c=l;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){s=d;break}}return s?(this.promote(s),!0):!1}promote(i,l){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,l&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:s}=i;l.onExitComplete&&l.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function cS(a,i,l){let s="";const c=a.x.translate/i.x,d=a.y.translate/i.y,f=l?.z||0;if((c||d||f)&&(s=`translate3d(${c}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:h,rotate:y,rotateX:v,rotateY:x,skewX:E,skewY:M}=l;h&&(s=`perspective(${h}px) ${s}`),y&&(s+=`rotate(${y}deg) `),v&&(s+=`rotateX(${v}deg) `),x&&(s+=`rotateY(${x}deg) `),E&&(s+=`skewX(${E}deg) `),M&&(s+=`skewY(${M}deg) `)}const g=a.x.scale*i.x,p=a.y.scale*i.y;return(g!==1||p!==1)&&(s+=`scale(${g}, ${p})`),s||"none"}const $c=["","X","Y","Z"],fS=1e3;let dS=0;function Ic(a,i,l,s){const{latestValues:c}=i;c[a]&&(l[a]=c[a],i.setStaticValue(a,0),s&&(s[a]=0))}function Gy(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=Ny(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:c,layoutId:d}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",ae,!(c||d))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&Gy(s)}function Zy({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},g=i?.()){this.id=dS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(pS),this.nodes.forEach(vS),this.nodes.forEach(xS),this.nodes.forEach(gS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new I5)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new _f),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const p=this.eventHandlers.get(f);p&&p.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=sy(f)&&!ax(f),this.instance=f;const{layoutId:g,layout:p,visualElement:h}=this.options;if(h&&!h.current&&h.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||g)&&(this.isLayoutDirty=!0),a){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;ae.read(()=>{v=window.innerWidth}),a(f,()=>{const E=window.innerWidth;E!==v&&(v=E,this.root.updateBlockedByResize=!0,y&&y(),y=tS(x,250),hs.hasAnimatedSinceResize&&(hs.hasAnimatedSinceResize=!1,this.nodes.forEach(Qp)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&h&&(g||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||OS,{onLayoutAnimationStart:w,onLayoutAnimationComplete:H}=h.getProps(),B=!this.targetLayout||!Yy(this.targetLayout,E),U=!v&&x;if(this.options.layoutRoot||this.resumeFrom||U||v&&(B||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const j={...Kf(M,"layout"),onPlay:w,onComplete:H};(h.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j),this.setAnimationOrigin(y,U)}else v||Qp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ha(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SS),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Gy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:g,layout:p}=this.options;if(g===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Gp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Zp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bS),this.nodes.forEach(hS),this.nodes.forEach(mS)):this.nodes.forEach(Zp),this.clearAllSnapshots();const g=en.now();Be.delta=la(0,1e3/60,g-Be.timestamp),Be.timestamp=g,Be.isProcessing=!0,Pc.update.process(Be),Pc.preRender.process(Be),Pc.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yS),this.sharedNodes.forEach(TS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ke(this.snapshot.measuredBox.x)&&!Ke(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!Xy(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;f&&this.instance&&(g||ci(this.latestValues)||y)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let p=this.removeElementScroll(g);return f&&(p=this.removeTransform(p)),ES(p),{animationId:this.root.animationId,measuredBox:g,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return me();const g=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(MS))){const{scroll:h}=this.root;h&&(so(g.x,h.offset.x),so(g.y,h.offset.y))}return g}removeElementScroll(f){const g=me();if(xn(g,f),this.scroll?.wasRoot)return g;for(let p=0;p<this.path.length;p++){const h=this.path[p],{scroll:y,options:v}=h;h!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&xn(g,f),so(g.x,y.offset.x),so(g.y,y.offset.y))}return g}applyTransform(f,g=!1){const p=me();xn(p,f);for(let h=0;h<this.path.length;h++){const y=this.path[h];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&uo(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),ci(y.latestValues)&&uo(p,y.latestValues)}return ci(this.latestValues)&&uo(p,this.latestValues),p}removeTransform(f){const g=me();xn(g,f);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!ci(h.latestValues))continue;yf(h.latestValues)&&h.updateSnapshot();const y=me(),v=h.measurePageBox();xn(y,v),Lp(g,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,y)}return ci(this.latestValues)&&Lp(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==g;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),Ml(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),xn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=me(),this.targetWithTransforms=me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),j5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):xn(this.target,this.layout.layoutBox),Oy(this.target,this.targetDelta)):xn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),Ml(this.relativeTargetOrigin,this.target,x.target),xn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||yf(this.parent.latestValues)||Dy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),g=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(p=!1),p)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;xn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;Yx(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=me());const{target:E}=f;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Vp(this.prevProjectionDelta.x,this.projectionDelta.x),Vp(this.prevProjectionDelta.y,this.projectionDelta.y)),El(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!Yp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Yp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=co(),this.projectionDelta=co(),this.projectionDeltaWithTransform=co()}setAnimationOrigin(f,g=!1){const p=this.snapshot,h=p?p.latestValues:{},y={...this.latestValues},v=co();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const x=me(),E=p?p.source:void 0,M=this.layout?this.layout.source:void 0,w=E!==M,H=this.getStack(),B=!H||H.members.length<=1,U=!!(w&&!B&&this.options.crossfade===!0&&!this.path.some(DS));this.animationProgress=0;let j;this.mixTargetDelta=Z=>{const z=Z/1e3;Kp(v.x,f.x,z),Kp(v.y,f.y,z),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ml(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),AS(this.relativeTarget,this.relativeTargetOrigin,x,z),j&&sS(this.relativeTarget,j)&&(this.isProjectionDirty=!1),j||(j=me()),xn(j,this.relativeTarget)),w&&(this.animationValues=y,nS(y,h,this.latestValues,z,U,B)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Ha(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{hs.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fo(0)),this.currentAnimation=W5(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:p,layout:h,latestValues:y}=f;if(!(!g||!p||!h)){if(this!==f&&this.layout&&h&&Qy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||me();const v=Ke(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+v;const x=Ke(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+x}xn(g,p),uo(g,y),El(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new uS),this.sharedNodes.get(f).add(g);const h=g.options.initialPromotionConfig;g.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(g=!0),!g)return;const h={};p.z&&Ic("z",f,h,this.animationValues);for(let y=0;y<$c.length;y++)Ic(`rotate${$c[y]}`,f,h,this.animationValues),Ic(`skew${$c[y]}`,f,h,this.animationValues);f.render();for(const y in h)f.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);f.scheduleRender()}applyProjectionStyles(f,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=ds(g?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=ds(g?.pointerEvents)||""),this.hasProjected&&!ci(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=cS(this.projectionDeltaWithTransform,this.treeScale,y);p&&(v=p(y,v)),f.transform=v;const{x,y:E}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${E.origin*100}% 0`,h.animationValues?f.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const M in jl){if(y[M]===void 0)continue;const{correct:w,applyTo:H,isCSSVariable:B}=jl[M],U=v==="none"?y[M]:w(y[M],h);if(H){const j=H.length;for(let Z=0;Z<j;Z++)f[H[Z]]=U}else B?this.options.visualElement.renderState.vars[M]=U:f[M]=U}this.options.layoutId&&(f.pointerEvents=h===this?ds(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Gp),this.root.sharedNodes.clear()}}}function hS(a){a.updateLayout()}function mS(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:s}=a.layout,{animationType:c}=a.options,d=i.source!==a.layout.source;c==="size"?Sn(y=>{const v=d?i.measuredBox[y]:i.layoutBox[y],x=Ke(v);v.min=l[y].min,v.max=v.min+x}):Qy(c,i.layoutBox,l)&&Sn(y=>{const v=d?i.measuredBox[y]:i.layoutBox[y],x=Ke(l[y]);v.max=v.min+x,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[y].max=a.relativeTarget[y].min+x)});const f=co();El(f,l,i.layoutBox);const g=co();d?El(g,a.applyTransform(s,!0),i.measuredBox):El(g,l,i.layoutBox);const p=!Xy(f);let h=!1;if(!a.resumeFrom){const y=a.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:x}=y;if(v&&x){const E=me();Ml(E,i.layoutBox,v.layoutBox);const M=me();Ml(M,l,x.layoutBox),Yy(E,M)||(h=!0),y.options.layoutRoot&&(a.relativeTarget=M,a.relativeTargetOrigin=E,a.relativeParent=y)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:g,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:h})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function pS(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function gS(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function yS(a){a.clearSnapshot()}function Gp(a){a.clearMeasurements()}function Zp(a){a.isLayoutDirty=!1}function bS(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function Qp(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function vS(a){a.resolveTargetDelta()}function xS(a){a.calcProjection()}function SS(a){a.resetSkewAndRotation()}function TS(a){a.removeLeadSnapshot()}function Kp(a,i,l){a.translate=le(i.translate,0,l),a.scale=le(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function Fp(a,i,l,s){a.min=le(i.min,l.min,s),a.max=le(i.max,l.max,s)}function AS(a,i,l,s){Fp(a.x,i.x,l.x,s),Fp(a.y,i.y,l.y,s)}function DS(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const OS={duration:.45,ease:[.4,0,.1,1]},Jp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Wp=Jp("applewebkit/")&&!Jp("chrome/")?Math.round:Tn;function $p(a){a.min=Wp(a.min),a.max=Wp(a.max)}function ES(a){$p(a.x),$p(a.y)}function Qy(a,i,l){return a==="position"||a==="preserve-aspect"&&!k5(Xp(i),Xp(l),.2)}function MS(a){return a!==a.root&&a.scroll?.wasRoot}const wS=Zy({attachResizeListener:(a,i)=>_l(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),tf={current:void 0},Ky=Zy({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!tf.current){const a=new wS({});a.mount(window),a.setOptions({layoutScroll:!0}),tf.current=a}return tf.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),CS={pan:{Feature:Q5},drag:{Feature:Z5,ProjectionNode:Ky,MeasureLayout:Hy}};function Ip(a,i,l){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",l==="Start");const c="onHover"+l,d=s[c];d&&ae.postRender(()=>d(i,Ll(i)))}class RS extends Pa{mount(){const{current:i}=this.node;i&&(this.unmount=$2(i,(l,s)=>(Ip(this.node,s,"Start"),c=>Ip(this.node,c,"End"))))}unmount(){}}class NS extends Pa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vl(_l(this.node.current,"focus",()=>this.onFocus()),_l(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function tg(a,i,l){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",l==="Start");const c="onTap"+(l==="End"?"":l),d=s[c];d&&ae.postRender(()=>d(i,Ll(i)))}class kS extends Pa{mount(){const{current:i}=this.node;i&&(this.unmount=nx(i,(l,s)=>(tg(this.node,s,"Start"),(c,{success:d})=>tg(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Df=new WeakMap,ef=new WeakMap,jS=a=>{const i=Df.get(a.target);i&&i(a)},zS=a=>{a.forEach(jS)};function _S({root:a,...i}){const l=a||document;ef.has(l)||ef.set(l,{});const s=ef.get(l),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(zS,{root:a,...i})),s[c]}function VS(a,i,l){const s=_S(i);return Df.set(a,l),s.observe(a),()=>{Df.delete(a),s.unobserve(a)}}const BS={some:0,all:1};class US extends Pa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:c="some",once:d}=i,f={root:l?l.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:BS[c]},g=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,d&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),x=h?y:v;x&&x(p)};return VS(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(LS(i,l))&&this.startObserver()}unmount(){}}function LS({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const HS={inView:{Feature:US},tap:{Feature:kS},focus:{Feature:NS},hover:{Feature:RS}},qS={layout:{ProjectionNode:Ky,MeasureLayout:Hy}},PS={...E5,...HS,...CS,...qS},Gt=qx(PS,t5),XS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='100pt'%20height='100pt'%20version='1.1'%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m18.914%2081.398h-7.1992c0.97266%200.91016%201.5977%202.2266%201.5977%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.3125%200.46094-2.5703%201.4297-3.5977h-4.5703v-1.8281h4.5703v-7.4883h67.082v-21.371h25.086v2.6328h-13.086v11.426h7.8281v12.633l-15.484-0.003906c-1.1406%200.17187-1.0273%201.6562%200.058594%201.7695h23.945v2.2305h-9.4297c0.91406%200.91016%201.543%202.2266%201.543%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.4297%200.62891-2.7383%201.543-3.5977h-7.6016c0.058594%200.22656%200.10938%200.45703%200.10938%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.058593-0.45703%200.058593-0.68359h-3.8281c0%200.28125%200.058593%200.51562%200.058593%200.68359%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2305-3.7109-8.2305-8.3438%200-0.11328%200.058594-0.28516%200.11328-0.625h-4.1133c0%200.28516%200.058594%200.45703%200.058594%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.054688-0.34375%200.11328-0.625'%20fill='%23010101'/%3e%3cpath%20d='m25.316%2053.566c-1.3711-0.16797-2.3984-1.1445-2.1719-2.2812l2.0547-6.1719-0.34375-4.2305h-7.8867l-0.34375%204.2305%202.0586%206.1719c0.23047%201.1406-0.80078%202.1172-2.0586%202.2812h-6.4531l-5.5977%208.3984%205.5977%208.4023h59.828l-0.003906-16.852c-3.9961%200.16797-3.7109-1.4883-3.9961-2.6914h-24.914c-0.11328%200.91406%200%202.7422-3.1406%202.7422z'%20fill='%23010101'/%3e%3cpath%20d='m23.312%2039.113h-4.6289c0.62891-6.3984%202.457-11.027%207.5977-15.543%201.3164-2.1133%200.28516-12.172%209.1406-13.715%208.6914-1.4844%208.5781%204.9141%2015.32%205.5977%202.9141%200.28906%205.6016-2.3398%208.5703-2.2812%204.0547%200.11328%205.7734%203.8242%209.1992%203.9961%203.4297%200.17188%204.1133-2.0547%207.4297-2.1719%203.3125-0.11328%207.8281%203.6562%207.8281%207.2031%200%204.0547-0.34375%208.3398-7.0859%2010.055-3.1992%200.80078-6-2.5703-9.1992-2.457-2.8555%200.054687-5.7148%202.6875-8.5156%202.6875-6.7383%200-6.3984-4.0586-10.168-4.0586-3.9414%200-4.8008%203.9414-10.801%204.2852-4.1758%200.23047-6.2852-2.6289-9.1445-1.7148-4.5117%201.4883-5.2539%208.1172-5.543%208.1172'%20fill='%23010101'/%3e%3c/svg%3e";function Oe(a,i){i===void 0&&(i={});var l=i.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}Oe(`.react-loading-indicator-normalize,
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
}`);var Zt=function(){return Zt=Object.assign||function(a){for(var i,l=1,s=arguments.length;l<s;l++)for(var c in i=arguments[l])Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c]);return a},Zt.apply(this,arguments)};function vs(a){return vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},vs(a)}var YS=/^\s+/,GS=/\s+$/;function rt(a,i){if(i=i||{},(a=a||"")instanceof rt)return a;if(!(this instanceof rt))return new rt(a,i);var l=function(s){var c={r:0,g:0,b:0},d=1,f=null,g=null,p=null,h=!1,y=!1;typeof s=="string"&&(s=function(M){M=M.replace(YS,"").replace(GS,"").toLowerCase();var w,H=!1;if(Of[M])M=Of[M],H=!0;else if(M=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=En.rgb.exec(M))?{r:w[1],g:w[2],b:w[3]}:(w=En.rgba.exec(M))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=En.hsl.exec(M))?{h:w[1],s:w[2],l:w[3]}:(w=En.hsla.exec(M))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=En.hsv.exec(M))?{h:w[1],s:w[2],v:w[3]}:(w=En.hsva.exec(M))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=En.hex8.exec(M))?{r:fn(w[1]),g:fn(w[2]),b:fn(w[3]),a:lg(w[4]),format:H?"name":"hex8"}:(w=En.hex6.exec(M))?{r:fn(w[1]),g:fn(w[2]),b:fn(w[3]),format:H?"name":"hex"}:(w=En.hex4.exec(M))?{r:fn(w[1]+""+w[1]),g:fn(w[2]+""+w[2]),b:fn(w[3]+""+w[3]),a:lg(w[4]+""+w[4]),format:H?"name":"hex8"}:(w=En.hex3.exec(M))?{r:fn(w[1]+""+w[1]),g:fn(w[2]+""+w[2]),b:fn(w[3]+""+w[3]),format:H?"name":"hex"}:!1}(s)),vs(s)=="object"&&(oa(s.r)&&oa(s.g)&&oa(s.b)?(v=s.r,x=s.g,E=s.b,c={r:255*ne(v,255),g:255*ne(x,255),b:255*ne(E,255)},h=!0,y=String(s.r).substr(-1)==="%"?"prgb":"rgb"):oa(s.h)&&oa(s.s)&&oa(s.v)?(f=Tl(s.s),g=Tl(s.v),c=function(M,w,H){M=6*ne(M,360),w=ne(w,100),H=ne(H,100);var B=Math.floor(M),U=M-B,j=H*(1-w),Z=H*(1-U*w),z=H*(1-(1-U)*w),K=B%6,J=[H,Z,j,j,z,H][K],G=[z,H,H,Z,j,j][K],et=[j,j,z,H,H,Z][K];return{r:255*J,g:255*G,b:255*et}}(s.h,f,g),h=!0,y="hsv"):oa(s.h)&&oa(s.s)&&oa(s.l)&&(f=Tl(s.s),p=Tl(s.l),c=function(M,w,H){var B,U,j;function Z(J,G,et){return et<0&&(et+=1),et>1&&(et-=1),et<1/6?J+6*(G-J)*et:et<.5?G:et<2/3?J+(G-J)*(2/3-et)*6:J}if(M=ne(M,360),w=ne(w,100),H=ne(H,100),w===0)B=U=j=H;else{var z=H<.5?H*(1+w):H+w-H*w,K=2*H-z;B=Z(K,z,M+1/3),U=Z(K,z,M),j=Z(K,z,M-1/3)}return{r:255*B,g:255*U,b:255*j}}(s.h,f,p),h=!0,y="hsl"),s.hasOwnProperty("a")&&(d=s.a));var v,x,E;return d=Fy(d),{ok:h,format:s.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}}(a);this._originalInput=a,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||l.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function eg(a,i,l){a=ne(a,255),i=ne(i,255),l=ne(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=(d+f)/2;if(d==f)s=c=0;else{var p=d-f;switch(c=g>.5?p/(2-d-f):p/(d+f),d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,l:g}}function ng(a,i,l){a=ne(a,255),i=ne(i,255),l=ne(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=d,p=d-f;if(c=d===0?0:p/d,d==f)s=0;else{switch(d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,v:g}}function ag(a,i,l,s){var c=[wn(Math.round(a).toString(16)),wn(Math.round(i).toString(16)),wn(Math.round(l).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function ig(a,i,l,s){return[wn(Jy(s)),wn(Math.round(a).toString(16)),wn(Math.round(i).toString(16)),wn(Math.round(l).toString(16))].join("")}function ZS(a,i){i=i===0?0:i||10;var l=rt(a).toHsl();return l.s-=i/100,l.s=Ds(l.s),rt(l)}function QS(a,i){i=i===0?0:i||10;var l=rt(a).toHsl();return l.s+=i/100,l.s=Ds(l.s),rt(l)}function KS(a){return rt(a).desaturate(100)}function FS(a,i){i=i===0?0:i||10;var l=rt(a).toHsl();return l.l+=i/100,l.l=Ds(l.l),rt(l)}function JS(a,i){i=i===0?0:i||10;var l=rt(a).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-i/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-i/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-i/100*255))),rt(l)}function WS(a,i){i=i===0?0:i||10;var l=rt(a).toHsl();return l.l-=i/100,l.l=Ds(l.l),rt(l)}function $S(a,i){var l=rt(a).toHsl(),s=(l.h+i)%360;return l.h=s<0?360+s:s,rt(l)}function IS(a){var i=rt(a).toHsl();return i.h=(i.h+180)%360,rt(i)}function og(a,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var l=rt(a).toHsl(),s=[rt(a)],c=360/i,d=1;d<i;d++)s.push(rt({h:(l.h+d*c)%360,s:l.s,l:l.l}));return s}function tT(a){var i=rt(a).toHsl(),l=i.h;return[rt(a),rt({h:(l+72)%360,s:i.s,l:i.l}),rt({h:(l+216)%360,s:i.s,l:i.l})]}function eT(a,i,l){i=i||6,l=l||30;var s=rt(a).toHsl(),c=360/l,d=[rt(a)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,d.push(rt(s));return d}function nT(a,i){i=i||6;for(var l=rt(a).toHsv(),s=l.h,c=l.s,d=l.v,f=[],g=1/i;i--;)f.push(rt({h:s,s:c,v:d})),d=(d+g)%1;return f}rt.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,i,l,s=this.toRgb();return a=s.r/255,i=s.g/255,l=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Fy(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=ng(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=ng(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+i+", "+l+"%, "+s+"%)":"hsva("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=eg(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=eg(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+i+", "+l+"%, "+s+"%)":"hsla("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return ag(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(i,l,s,c,d){var f=[wn(Math.round(i).toString(16)),wn(Math.round(l).toString(16)),wn(Math.round(s).toString(16)),wn(Jy(c))];return d&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ne(this._r,255))+"%",g:Math.round(100*ne(this._g,255))+"%",b:Math.round(100*ne(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ne(this._r,255))+"%, "+Math.round(100*ne(this._g,255))+"%, "+Math.round(100*ne(this._b,255))+"%)":"rgba("+Math.round(100*ne(this._r,255))+"%, "+Math.round(100*ne(this._g,255))+"%, "+Math.round(100*ne(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(aT[ag(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var i="#"+ig(this._r,this._g,this._b,this._a),l=i,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=rt(a);l="#"+ig(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+l+")"},toString:function(a){var i=!!a;a=a||this._format;var l=!1,s=this._a<1&&this._a>=0;return i||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(l=this.toRgbString()),a==="prgb"&&(l=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(l=this.toHexString()),a==="hex3"&&(l=this.toHexString(!0)),a==="hex4"&&(l=this.toHex8String(!0)),a==="hex8"&&(l=this.toHex8String()),a==="name"&&(l=this.toName()),a==="hsl"&&(l=this.toHslString()),a==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return rt(this.toString())},_applyModification:function(a,i){var l=a.apply(null,[this].concat([].slice.call(i)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(FS,arguments)},brighten:function(){return this._applyModification(JS,arguments)},darken:function(){return this._applyModification(WS,arguments)},desaturate:function(){return this._applyModification(ZS,arguments)},saturate:function(){return this._applyModification(QS,arguments)},greyscale:function(){return this._applyModification(KS,arguments)},spin:function(){return this._applyModification($S,arguments)},_applyCombination:function(a,i){return a.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(eT,arguments)},complement:function(){return this._applyCombination(IS,arguments)},monochromatic:function(){return this._applyCombination(nT,arguments)},splitcomplement:function(){return this._applyCombination(tT,arguments)},triad:function(){return this._applyCombination(og,[3])},tetrad:function(){return this._applyCombination(og,[4])}},rt.fromRatio=function(a,i){if(vs(a)=="object"){var l={};for(var s in a)a.hasOwnProperty(s)&&(l[s]=s==="a"?a[s]:Tl(a[s]));a=l}return rt(a,i)},rt.equals=function(a,i){return!(!a||!i)&&rt(a).toRgbString()==rt(i).toRgbString()},rt.random=function(){return rt.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},rt.mix=function(a,i,l){l=l===0?0:l||50;var s=rt(a).toRgb(),c=rt(i).toRgb(),d=l/100;return rt({r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a})},rt.readability=function(a,i){var l=rt(a),s=rt(i);return(Math.max(l.getLuminance(),s.getLuminance())+.05)/(Math.min(l.getLuminance(),s.getLuminance())+.05)},rt.isReadable=function(a,i,l){var s,c,d=rt.readability(a,i);switch(c=!1,(s=function(f){var g,p;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:g,size:p}}(l)).level+s.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},rt.mostReadable=function(a,i,l){var s,c,d,f,g=null,p=0;c=(l=l||{}).includeFallbackColors,d=l.level,f=l.size;for(var h=0;h<i.length;h++)(s=rt.readability(a,i[h]))>p&&(p=s,g=rt(i[h]));return rt.isReadable(a,g,{level:d,size:f})||!c?g:(l.includeFallbackColors=!1,rt.mostReadable(a,["#fff","#000"],l))};var Of=rt.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},aT=rt.hexNames=function(a){var i={};for(var l in a)a.hasOwnProperty(l)&&(i[a[l]]=l);return i}(Of);function Fy(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function ne(a,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var l=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(a);return a=Math.min(i,Math.max(0,parseFloat(a))),l&&(a=parseInt(a*i,10)/100),Math.abs(a-i)<1e-6?1:a%i/parseFloat(i)}function Ds(a){return Math.min(1,Math.max(0,a))}function fn(a){return parseInt(a,16)}function wn(a){return a.length==1?"0"+a:""+a}function Tl(a){return a<=1&&(a=100*a+"%"),a}function Jy(a){return Math.round(255*parseFloat(a)).toString(16)}function lg(a){return fn(a)/255}var Ua,rs,ss,En=(rs="[\\s|\\(]+("+(Ua="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ua+")[,|\\s]+("+Ua+")\\s*\\)?",ss="[\\s|\\(]+("+Ua+")[,|\\s]+("+Ua+")[,|\\s]+("+Ua+")[,|\\s]+("+Ua+")\\s*\\)?",{CSS_UNIT:new RegExp(Ua),rgb:new RegExp("rgb"+rs),rgba:new RegExp("rgba"+ss),hsl:new RegExp("hsl"+rs),hsla:new RegExp("hsla"+ss),hsv:new RegExp("hsv"+rs),hsva:new RegExp("hsva"+ss),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function oa(a){return!!En.CSS_UNIT.exec(a)}var Os=function(a,i){var l=(typeof a=="string"?parseInt(a):a)||0;if(l>=-5&&l<=5){var s=l,c=parseFloat(i),d=c+s*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},Es=function(a,i){var l=a||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(l.fontSize){var d=l.fontSize;c=function(f,g){var p={};for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&g.indexOf(h)<0&&(p[h]=f[h]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(f);y<h.length;y++)g.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(f,h[y])&&(p[h[y]]=f[h[y]])}return p}(l,["fontSize"]),s=d}return{fontSize:s,styles:c}},iT={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ms=function(a){var i=a.className,l=a.text,s=a.textColor,c=a.staticText,d=a.style;return l?qt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:Zt(Zt(Zt({},c&&iT),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof l=="string"&&l.length?l:"loading"):null},Hl="rgb(50, 205, 50)";function ws(a,i){if(i===void 0&&(i=0),a.length===0)throw new Error("Input array cannot be empty!");var l=[];return function s(c,d){return d===void 0&&(d=0),l.push.apply(l,c),l.length<d&&s(l,d),l.slice(0,d)}(a,i)}Oe(`.atom-rli-bounding-box {
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
}`);rt(Hl).toRgb();Array.from({length:4},function(a,i){return"--atom-phase".concat(i+1,"-rgb")});Oe(`.commet-rli-bounding-box {
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
}`);var to=Array.from({length:4},function(a,i){return"--TD-pulsate-phase".concat(i+1,"-color")}),oT=function(a){var i,l=Es(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Os(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=ws(p,to.length),v=0;v<y.length&&!(v>=4);v++)h[to[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<to.length;x++)h[to[x]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),x=0;x<to.length;x++)h[to[x]]=Hl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return qt.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Zt(Zt(Zt(Zt(Zt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},qt.createElement("span",{className:"rli-d-i-b pulsate-indicator"},qt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),qt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),qt.createElement("span",{className:"rli-d-i-b pulsate-dot"})),qt.createElement(Ms,{staticText:!0,text:a?.text,textColor:a?.textColor}))};Oe(`.brick-stack-rli-bounding-box {
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
}`);var eo=Array.from({length:4},function(a,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}),lT=function(a){var i,l=Es(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Os(a?.speedPlus,"1s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=ws(p,eo.length),v=0;v<y.length&&!(v>=4);v++)h[eo[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<eo.length;x++)h[eo[x]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),x=0;x<eo.length;x++)h[eo[x]]=Hl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return qt.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Zt(Zt(Zt(Zt(Zt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},qt.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},qt.createElement("span",{className:"rli-d-i-b brick-stack"})),qt.createElement(Ms,{staticText:!0,text:a?.text,textColor:a?.textColor}))};Oe(`.bob-rli-bounding-box {
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
}`);var no=Array.from({length:4},function(a,i){return"--TD-bob-phase".concat(i+1,"-color")}),rT=function(a){var i,l=Es(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Os(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=ws(p,no.length),v=0;v<y.length&&!(v>=4);v++)h[no[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<no.length;x++)h[no[x]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),x=0;x<no.length;x++)h[no[x]]=Hl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return qt.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Zt(Zt(Zt(Zt(Zt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},qt.createElement("span",{className:"bob-indicator"},qt.createElement("span",{className:"bobbing"})),qt.createElement(Ms,{staticText:!0,text:a?.text,textColor:a?.textColor}))};Oe(`.bounce-rli-bounding-box {
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
}`);var ao=Array.from({length:4},function(a,i){return"--TD-bounce-phase".concat(i+1,"-color")}),sT=function(a){var i,l=Es(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Os(a?.speedPlus,"0.5s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=ws(p,ao.length),v=0;v<y.length&&!(v>=4);v++)h[ao[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<ao.length;x++)h[ao[x]]=p}catch{for(x=0;x<ao.length;x++)h[ao[x]]=Hl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return qt.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Zt(Zt(Zt(Zt(Zt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s)},qt.createElement("span",{className:"wrapper"},qt.createElement("span",{className:"group"},qt.createElement("span",{className:"rli-d-i-b dot"}),qt.createElement("span",{className:"rli-d-i-b dot"}),qt.createElement("span",{className:"rli-d-i-b dot"})),qt.createElement("span",{className:"group"},qt.createElement("span",{className:"rli-d-i-b shadow"}),qt.createElement("span",{className:"rli-d-i-b shadow"}),qt.createElement("span",{className:"rli-d-i-b shadow"}))),qt.createElement(Ms,{staticText:!0,text:a?.text,textColor:a?.textColor,style:{marginTop:"2px"}}))},rg=function(a){var i=Object(a).variant,l=i===void 0?"pulsate":i;return l==="pulsate"?qt.createElement(oT,Zt({},a)):l==="brick-stack"?qt.createElement(lT,Zt({},a)):l==="bob"?qt.createElement(rT,Zt({},a)):l==="bounce"?qt.createElement(sT,Zt({},a)):null};Oe(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--life-line-phase".concat(i+1,"-color")});const sg="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20width='124'%20height='346'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3c!--%20Created%20with%20SVG-edit%20-%20https://github.com/SVG-Edit/svgedit--%3e%3cg%20class='layer'%3e%3ctitle%3eLayer%201%3c/title%3e%3cpath%20d='m5,79.76l57,-74.77l57,74.77l-28.5,0l0,75.13l-57,0l0,-75.13z'%20fill='%23000000'%20fill-opacity='0'%20id='svg_4'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='13'%20transform='rotate(180%2062.0005%2079.9424)'/%3e%3cpath%20d='m5,265.76l57,-74.77l57,74.77l-28.5,0l0,75.13l-57,0l0,-75.13z'%20fill='%23000000'%20fill-opacity='0'%20id='svg_6'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='13'/%3e%3c/g%3e%3c/svg%3e",uT=({startX:a,startY:i,endX:l,endY:s})=>S.jsx(Gt.line,{x1:a,y1:i,x2:l,y2:s,className:"active-connection",markerEnd:"url(#arrowhead)",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2}}),Wy=({x:a,y:i,sumText:l})=>S.jsxs("g",{children:[S.jsx("line",{x1:a-25,y1:i-5,x2:a+25,y2:i-5,stroke:"#ffffff",strokeWidth:"1"}),S.jsx("text",{x:a,y:i-10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1"}),S.jsx("text",{x:a-10,y:i+10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1 + e"}),S.jsxs("text",{x:a+8,y:i+5,fill:"#ffffff",fontSize:"8px",textAnchor:"start",children:["-",l]})]}),cT=({connection:a,neurons:i,neuronRadius:l,neuronTransforms:s,isGlowing:c,emphasizedConnections:d,showForwardPassVisuals:f,inputData:g,currentSampleIndex:p,neuronHeaders:h,hiddenWeights:y,inputNeurons:v,hiddenNeurons:x,hiddenBiases:E,outputWeights:M,outputBiases:w,showSigmoidPhase:H,outputNeurons:B,isEraserMode:U,onEraseConnection:j,eraserHoveredConnection:Z,setEraserHoveredConnection:z})=>{const K=i.find(dt=>dt.id===a.fromNeuronId),J=i.find(dt=>dt.id===a.toNeuronId);if(!K||!J)return null;const G=Z===a.id,et=d.includes(a.id),ct=f?et?1:.3:1,wt=s[a.fromNeuronId]||{x:0,y:0},Lt=s[a.toNeuronId]||{x:0,y:0},pe=K.x+wt.x,ie=K.y+wt.y,Pt=J.x+Lt.x,V=J.y+Lt.y,F=(dt,Ct,jt,Rt)=>{switch(Ct){case"top":return{x:jt,y:Rt-l};case"right":return{x:jt+l,y:Rt};case"bottom":return{x:jt,y:Rt+l};case"left":return{x:jt-l,y:Rt};default:return{x:jt,y:Rt}}},I=F(K,a.fromDirection,pe,ie),yt=F(J,a.toDirection,Pt,V),A=(I.x+yt.x)/2;let q=(I.y+yt.y)/2;const tt=Math.atan2(yt.y-I.y,yt.x-I.x)*(180/Math.PI),$=()=>{if(!f||!g[p]||!d.includes(a.id))return null;const dt=h[K.label]||K.label,Ct=h[J.label]||J.label;if(K.type==="input"&&J.type==="hidden"){const jt=parseFloat(g[p][dt])||0,Rt=y[`${dt}-${Ct}`]||0,ce=E[Ct]||0,st=jt*Rt+ce;return`${jt} × ${Rt.toFixed(1)} + ${ce.toFixed(1)} = ${st.toFixed(1)}`}if(K.type==="hidden"&&J.type==="output"){const[jt,Rt]=it(dt,Ct),ce=(jt*Rt).toFixed(1);return`${jt.toFixed(0)} × ${Rt.toFixed(1)} = ${ce}`}return K.type==="output"&&J.type==="display"&&a.isSigmoidConnection,null},it=(dt,Ct)=>{let jt=0;v.forEach(Vt=>{const Wt=h[Vt.label]||Vt.label,Ye=parseFloat(g[p][Wt])||0,ge=y[`${Wt}-${dt}`]||0;jt+=Ye*ge});const Rt=E[dt]||0,ce=jt+Rt,st=Math.max(0,ce),Dt=M[`${dt}-${Ct}`]||0;return[st,Dt]},St=()=>{if(!(K.type==="output"&&J.type==="display"&&a.isSigmoidConnection))return null;q-=20;const dt=h[K.label]||K.label;let Ct=0;x.forEach(ce=>{const[st,Dt]=it(dt,ce);Ct+=st*Dt});const jt=w[dt]||0;Ct+=jt;const Rt=Ct.toFixed(1);return S.jsx(Wy,{x:A,y:q,sumText:Rt})},ft=(dt,Ct,jt)=>{let Rt=-1;for(let Dt=0;Dt<dt&&(Rt=jt.indexOf(" ",Rt+1),Rt!==-1);Dt++);const ce=jt.slice(0,Rt),st=jt.slice(Rt);return S.jsxs(S.Fragment,{children:[ce,S.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:Ct}),st]})};function Jt(dt,Ct="11px Segoe UI"){const Rt=document.createElement("canvas").getContext("2d");return Rt.font=Ct,Rt.measureText(dt).width+16}let Tt=$(),ht="11px";if(Tt){const dt=Math.sqrt(Math.pow(yt.x-I.x,2)+Math.pow(yt.y-I.y,2));Jt(Tt)>dt&&(ht="9px",console.log("too big")),Tt=ft(3,J.label.toLowerCase(),Tt)}const At=a.isAnimating?"active-connection":c?"completed-connection glowing-connection":"completed-connection";return S.jsxs("g",{children:[S.jsx(Gt.line,{x1:I.x,y1:I.y,x2:yt.x,y2:yt.y,className:At,markerEnd:a.isAnimating?void 0:"url(#arrowhead)",initial:a.isAnimating?{pathLength:0}:{pathLength:1,opacity:ct},animate:a.isAnimating?{pathLength:1,opacity:ct}:{opacity:ct,stroke:U&&G?"#ef4444":"#ffffff"},transition:a.isAnimating?{duration:.6,ease:"easeInOut"}:{duration:.2},style:{cursor:U?"crosshair":"default"},onMouseEnter:()=>{U&&z(a.id)},onMouseLeave:()=>{U&&z(null)},onClick:dt=>{U&&(dt.stopPropagation(),j(a.id))}}),Tt&&S.jsx(Gt.text,{x:A,y:q-8,className:"formula-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{fontSize:ht,fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},transform:`rotate(${tt}, ${A}, ${q-8})`,children:Tt}),d.includes(a.id)&&S.jsx(Gt.g,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:St()})]})},fT=({x:a,y:i,neuronId:l,direction:s,onStartConnection:c,isHighlighted:d=!1})=>S.jsx(Gt.circle,{cx:a,cy:i,r:4,className:`connection-dot ${d?"connection-dot-highlighted":""}`,onClick:f=>{f.stopPropagation(),c(l,s,a,i,f)},whileHover:{scale:1.2},initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2},style:{cursor:"pointer"}}),dT=({id:a,x:i,y:l,radius:s,label:c,type:d,onDragEnd:f,onStartConnection:g,highlightedDots:p=[],onDragUpdate:h,isGlowing:y,neurons:v,showForwardPassVisuals:x,emphasizedConnections:E,hiddenNeurons:M,inputNeurons:w,outputNeurons:H,neuronHeaders:B,hiddenWeights:U,outputWeights:j,inputData:Z,currentSampleIndex:z,hiddenBiases:K,connections:J,showSigmoidPhase:G,outputBiases:et,isEraserMode:ct,onEraseNeuron:wt,eraserHoveredNeuron:Lt,setEraserHoveredNeuron:pe})=>{const[ie,Pt]=X.useState(!1),[V,F]=X.useState(!1),I=Lt===a,yt=ct&&I?.5:1,A=d==="hidden"&&x&&Z[z],q=v.find(st=>st.id===a),tt=x&&(q?.type==="input"||q?.type==="hidden"&&J.some(st=>E.includes(st.id)&&(st.fromNeuronId===a||st.toNeuronId===a))||q?.type==="output"&&(E.some(st=>{const Dt=J.find(Vt=>Vt.id===st);return Dt&&Dt.toNeuronId===a})||G)||q?.type==="display"),$=x&&!tt?.3:1,it=st=>{const Dt="neuron",Vt=st==="input"?"neuron-input":st==="hidden"?"neuron-hidden":st==="output"?"neuron-output":st.startsWith("hidden")?"neuron-hidden":"neuron";return y?`${Dt} ${Vt} glowing-neuron`:`${Dt} ${Vt}`},ft=(st=>{const Dt=B[st.label]||st.label,Vt=[];return st.type==="hidden"?w.forEach(Wt=>{const Ye=B[Wt.label]||Wt.label,ge=U[`${Ye}-${Dt}`]||0;Vt.push(ge)}):st.type==="output"&&M.forEach(Wt=>{const Ye=B[Wt.label]||Wt.label,ge=j[`${Ye}-${Dt}`]||0;Vt.push(ge)}),Vt})(q||{type:d,label:c}),Jt=ft.length>0?`[${ft.map(st=>st.toFixed(1)).join(", ")}]`:"",Tt=()=>{if(d==="input"&&x&&Z[z]){const st=B[c]||c;return Z[z][st]||""}return""},ht=()=>{if(A){const st=B[c]||c;if(J.some(Vt=>E.includes(Vt.id)&&Vt.toNeuronId===a&&w.some(Wt=>Wt.id===Vt.fromNeuronId))){let Vt=0;w.forEach(ge=>{const sa=B[ge.label]||ge.label,Cn=parseFloat(Z[z][sa])||0,ua=U[`${sa}-${st}`]||0;Vt+=Cn*ua});const Wt=K[st]||0;return(Vt+Wt).toFixed(1)}}return""},At=st=>{const Dt=[];return M.forEach(Vt=>{const Wt=B[Vt.label]||Vt.label;let Ye=0;w.forEach(Ln=>{const Ee=B[Ln.label]||Ln.label,Ne=parseFloat(Z[z][Ee])||0,ke=U[`${Ee}-${Wt}`]||0;Ye+=Ne*ke});const ge=K[Wt]||0,sa=Ye+ge,Cn=Math.max(0,sa),ua=j[`${Wt}-${st}`]||0,yo=Cn*ua;Dt.push(yo.toFixed(1))}),Dt},dt=()=>{if(d==="output"&&x&&G&&Z[z]){const st=B[c]||c,Dt=At(st),Vt=et[st]||0;return`${Dt.join(" + ")} + ${Vt.toFixed(1)}`}return""},Ct=()=>{if(d==="output"&&x&&G&&Z[z]){const st=B[c]||c;let Vt=At(st).reduce((Ye,ge)=>Ye+parseFloat(ge),0);const Wt=et[st]||0;return Vt+=Wt,Vt.toFixed(1)}return""},jt=[{direction:"top",x:0,y:-s},{direction:"right",x:s,y:0},{direction:"bottom",x:0,y:s},{direction:"left",x:-s,y:0}],Rt=()=>{ie||(F(!0),ct&&pe(a))},ce=()=>{F(!1),ct&&pe(null)};return S.jsxs(Gt.g,{drag:!0,dragMomentum:!1,dragElastic:.1,initial:{x:i,y:l},animate:{x:i,y:l,opacity:$},onDragStart:()=>{Pt(!0),F(!1)},onDrag:(st,Dt)=>{h(a,Dt.offset.x,Dt.offset.y)},onDragEnd:(st,Dt)=>{Pt(!1);const Vt=i+Dt.offset.x,Wt=l+Dt.offset.y;f(a,Vt,Wt),h(a,0,0)},whileDrag:{scale:1.1},onMouseEnter:Rt,onMouseLeave:ce,style:{cursor:ie?"grabbing":"default"},children:[S.jsx("circle",{cx:0,cy:0,r:s+20,fill:"transparent",style:{pointerEvents:"all",cursor:"default"}}),S.jsx(Gt.circle,{cx:0,cy:0,r:s,className:it(d),initial:{scale:0,opacity:0},animate:{scale:1,opacity:yt,stroke:ct&&I?"#ef4444":void 0,strokeWidth:ct&&I?3:void 0},transition:{duration:.6,type:"spring"},style:{cursor:ct?"crosshair":ie?"grabbing":"grab"},onClick:st=>{st.button===0&&ct&&(st.stopPropagation(),wt(a))}}),(A||d==="output"&&G)&&S.jsx("rect",{x:-23,y:-9,width:46,height:18,rx:3,fill:"rgb(6, 129, 0)",stroke:"#22c55e",strokeWidth:2}),S.jsx(Gt.text,{x:0,y:5,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},children:A?"ReLU":d==="output"&&G?"Sig":c}),Jt&&!(d==="output"&&G)&&S.jsx(Gt.text,{x:0,y:-s-10,className:ht()?"neuron-text":"neuron-weights-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:ht()||Jt}),d==="output"&&G&&dt()&&S.jsxs(Gt.text,{x:0,y:-s-25,className:"formula-text",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[dt(),S.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:"b2"})]}),d==="output"&&G&&Ct()&&S.jsx(Gt.text,{x:0,y:-s-10,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.5},children:Ct()}),d==="input"&&x&&Tt()&&S.jsx(Gt.text,{x:0,y:-s*1.3,className:"input-value-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},children:Tt()}),S.jsx(fs,{children:V&&!ie&&jt.map(st=>S.jsx(fT,{x:st.x,y:st.y,neuronId:a,direction:st.direction,onStartConnection:g,isHighlighted:p.includes(st.direction)},st.direction))})]})},wl=(a,i)=>{const l=a.length,s=a[0].length,c=i[0].length,d=Array(l).fill().map(()=>Array(c).fill(0));for(let f=0;f<l;f++)for(let g=0;g<c;g++)for(let p=0;p<s;p++)d[f][g]+=a[f][p]*i[p][g];return d},ug=(a,i)=>a.map(l=>l.map((s,c)=>s+(i[c]||0))),hT=a=>a.map(i=>i.map(l=>Math.max(0,l))),mT=a=>a.map(i=>i.map(l=>1/(1+Math.exp(-l)))),pT=(a,i)=>a.map((s,c)=>{const d=Math.max(1e-15,Math.min(.999999999999999,i[c]));return-(s*Math.log(d)+(1-s)*Math.log(1-d))}),af=a=>!a||!a[0]?[]:a[0].map((i,l)=>a.map(s=>s[l])),Ef=(a,i,l,s,c,d,f,g,p)=>{const h=a.filter(y=>{const v=i.some(E=>y[E.label]&&y[E.label].trim()!==""),x=y.Truth!==void 0&&y.Truth!=="";return v&&x});if(h.length===0){alert("Please add input data with truth values");return}if(l.length===0||s.length===0){alert("Please add hidden and output neurons");return}try{const y=h.map(G=>i.map(et=>parseFloat(G[et.label])||0)),v=h.map(G=>parseFloat(G.Truth)||0),x=i.map(G=>l.map(et=>{const ct=c[G.label]||G.label,wt=c[et.label]||et.label;return d[`${ct}-${wt}`]||0})),E=l.map(G=>{const et=c[G.label]||G.label;return f[et]||0}),M=l.map(G=>s.map(et=>{const ct=c[G.label]||G.label,wt=c[et.label]||et.label;return g[`${ct}-${wt}`]||0})),w=s.map(G=>{const et=c[G.label]||G.label;return p[et]||0}),H=wl(y,x),B=ug(H,E),U=hT(B),j=wl(U,M),Z=ug(j,w),z=mT(Z),K=z.map(G=>G[0]),J=pT(v,K);return{predictions:K,truthValues:v,losses:J,matrices:[y,x,E,M,w,H,B,U,j,Z,z]}}catch(y){console.error("Error in forward pass:",y),console.error("Error stack:",y.stack),alert("Error in calculation. Please check your inputs and weights.")}},cg=(a,i,l,s,c,d,f,g,p,h=.01)=>{const y=a.filter(v=>{const x=i.some(M=>v[M.label]&&v[M.label].trim()!==""),E=v.Truth!==void 0&&v.Truth!=="";return x&&E});if(y.length===0)return alert("Please add input data with truth values"),null;try{const v=Ef(a,i,l,s,c,d,f,g,p),[x,E,M,w,H,B,U,j,Z,z,K]=v.matrices,J=v.truthValues,G=v.predictions,et=y.length,ct=K.map((ht,At)=>[G[At]-J[At]]),wt=K.map((ht,At)=>[ct[At][0]*G[At]*(1-G[At])]),Lt=af(j),pe=wl(Lt,wt).map(ht=>ht.map(At=>At/et)),ie=[wt.reduce((ht,At)=>ht+At[0],0)/et],Pt=af(w),V=wl(wt,Pt),F=U.map((ht,At)=>ht.map((dt,Ct)=>dt>0?V[At][Ct]:0)),I=af(x),yt=wl(I,F).map(ht=>ht.map(At=>At/et)),A=F[0].map((ht,At)=>F.reduce((dt,Ct)=>dt+Ct[At],0)/et),q=E.map((ht,At)=>ht.map((dt,Ct)=>dt-h*yt[At][Ct])),tt=M.map((ht,At)=>ht-h*A[At]),$=w.map((ht,At)=>ht.map((dt,Ct)=>dt-h*pe[At][Ct])),it=H.map((ht,At)=>ht-h*ie[At]),St={},ft={},Jt={},Tt={};return i.forEach((ht,At)=>{l.forEach((dt,Ct)=>{const jt=c[ht.label]||ht.label,Rt=c[dt.label]||dt.label;St[`${jt}-${Rt}`]=q[At][Ct]})}),l.forEach((ht,At)=>{const dt=c[ht.label]||ht.label;ft[dt]=tt[At]}),l.forEach((ht,At)=>{s.forEach((dt,Ct)=>{const jt=c[ht.label]||ht.label,Rt=c[dt.label]||dt.label;Jt[`${jt}-${Rt}`]=$[At][Ct]})}),s.forEach((ht,At)=>{const dt=c[ht.label]||ht.label;Tt[dt]=it[At]}),{newHiddenWeights:St,newHiddenBiases:ft,newOutputWeights:Jt,newOutputBiases:Tt,gradients:{dW1:yt,db1:A,dW2:pe,db2:ie,dA2:ct,dZ2:wt,dA1:V,dZ1:F}}}catch(v){return console.error("Error in backpropagation:",v),alert("Error in backpropagation calculation. Please check your inputs."),null}},fg=({title:a,neurons:i,data:l,setData:s,onHeaderChange:c,onCellHover:d,isOutput:f=!1,truthValues:g=[],predictions:p=[],losses:h=[],normalizeInputs:y,setNormalizeInputs:v})=>{const x=()=>{f||s(B=>[...B,{}])},E=(B,U,j)=>{f||(s(Z=>{const z=[...Z];return z[B]||(z[B]={}),z[B][U]=j,z}),B===l.length-1&&j.trim()!==""&&x())},M=(B,U,j)=>{U===j||f||(s(Z=>Z.map(z=>{if(z[U]!==void 0){const K={...z};return K[j]=z[U],delete K[U],K}return z})),c(U,j))},w=B=>B<.3?"#22c55e":B<.7?"#eab308":"#ef4444";if(!f&&i.length===0)return null;const H=h.length?(h.reduce((B,U)=>B+(parseFloat(U)||0),0)/h.length).toFixed(4):"";return S.jsxs("div",{className:"input-table-container",children:[S.jsxs("div",{style:{position:"relative"},children:[S.jsx("h3",{className:"table-title",style:{display:"inline-block"},children:a}),f&&S.jsx("span",{style:{color:H<1?"#000":"#fff",background:H?w(H):"transparent",marginLeft:"10px"},className:"cell-input",title:"Average Loss",children:H}),!f&&S.jsxs("label",{className:"button-border",style:{padding:"0.2rem 0.5rem",alignItems:"center",gap:"0.5rem",marginLeft:"10px"},children:[S.jsx("input",{type:"checkbox",checked:y,onChange:B=>v(B.target.checked),className:"eraser-checkbox",style:{width:"12px",height:"12px",cursor:"pointer",accentColor:"#52ef44"}}),S.jsx("span",{className:"eraser-label",style:{marginLeft:"5px",fontSize:"1rem"},children:"Normalize"})]})]}),S.jsx("div",{className:"table-scroll-wrapper",style:{maxHeight:"14.7rem",maxWidth:"350px"},children:S.jsxs("table",{className:"neural-table input-table",children:[S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx("th",{className:"sample-column",style:{},children:S.jsx("input",{type:"text",className:"header-input",value:"#",readOnly:!0})}),S.jsx("th",{className:"truth-column-narrow",style:{},children:S.jsx("input",{type:"text",className:"header-input",value:"T",readOnly:!0})}),!f&&i.map(B=>S.jsx("th",{children:S.jsx("input",{type:"text",className:"header-input",value:B.label,onChange:U=>M(B.id,B.label,U.target.value||B.label),onKeyDown:U=>{U.key==="Enter"&&U.target.blur()}})},B.id)),f&&S.jsxs(S.Fragment,{children:[S.jsx("th",{children:S.jsx("input",{type:"text",className:"header-input",value:"ŷ",readOnly:!0})}),S.jsx("th",{children:S.jsx("input",{type:"text",className:"header-input",value:"Loss",readOnly:!0})})]})]})}),S.jsx("tbody",{children:(f?g:l).map((B,U)=>S.jsxs("tr",{children:[S.jsx("td",{className:"sample-column",children:S.jsx("input",{type:"text",className:"cell-input",value:U+1,readOnly:!0})}),S.jsx("td",{className:"truth-column-narrow",children:S.jsx("input",{type:"text",className:"cell-input",value:f?g[U]:B.Truth||"",onChange:f?void 0:j=>{const Z=j.target.value;(Z===""||Z==="0"||Z==="1")&&E(U,"Truth",Z)},placeholder:"0",min:"0",max:"1",step:"1",readOnly:f})}),!f&&i.map(j=>S.jsx("td",{children:S.jsx("input",{type:"text",className:"cell-input",value:B[j.label]||"",onChange:Z=>E(U,j.label,Z.target.value),onMouseEnter:()=>d("neuron",j.label),onMouseLeave:()=>d(null),onFocus:()=>d("neuron",j.label),onBlur:()=>d(null),placeholder:"0",step:"0.1"})},j.id)),f&&S.jsxs(S.Fragment,{children:[S.jsx("td",{children:S.jsx("input",{type:"text",className:"cell-input",value:p[U]||"",readOnly:!0})}),S.jsx("td",{children:S.jsx("input",{type:"text",className:"cell-input",value:h[U]||"",style:{backgroundColor:h[U]?w(h[U]):"transparent",color:h[U]&&h[U]<1?"#000":"#fff"},readOnly:!0})})]})]},U))})]})})]})},dg=({change:a,style:i={},xOffset:l="10px"})=>{if(!a||Math.abs(a)<1e-16)return null;const c=a>0?"change-arrow-up":"change-arrow-down";return S.jsx("div",{className:c,style:{position:"absolute",right:l,top:"50%",transform:"translateY(-50%)"}})},hg=({title:a,inputLabels:i,neuronLabels:l,weights:s,biases:c,onWeightChange:d,onBiasChange:f,onHeaderChange:g,showSaveLoad:p,onSave:h,onLoad:y,onCellHover:v,biasLabel:x="b"})=>{const E=X.useRef({}),M=X.useRef({}),[w,H]=X.useState(!1);X.useEffect(()=>{const j=Object.keys(s).some(z=>{const K=parseFloat(s[z])||0,J=parseFloat(E.current[z])||0;return Math.abs(K-J)>1e-16}),Z=Object.keys(c).some(z=>{const K=parseFloat(c[z])||0,J=parseFloat(M.current[z])||0;return Math.abs(K-J)>1e-16});(j||Z)&&(H(!0),E.current={...s},M.current={...c})},[s,c]),X.useEffect(()=>{E.current={...s},M.current={...c}});const B=(j,Z)=>{const z=`${j}-${Z}`,K=parseFloat(s[z])||0,J=parseFloat(E.current[z])||0;return K-J},U=j=>{const Z=parseFloat(c[j])||0,z=parseFloat(M.current[j])||0;return Z-z};return l.length===0?null:S.jsxs("div",{className:"weights-table-container",children:[S.jsx("h3",{className:"table-title",style:{marginRight:"30px"},children:a}),S.jsx("div",{className:"table-scroll-wrapper",style:{maxHeight:"235px",maxWidth:"350px"},children:S.jsxs("table",{className:"neural-table weights-table",children:[S.jsxs("thead",{children:[S.jsxs("tr",{children:[S.jsx("th",{className:"bias-label",children:x}),l.map((j,Z)=>S.jsxs("th",{style:{position:"relative"},children:[S.jsx("input",{type:"number",className:"bias-input",value:c[j]||"",onChange:z=>f(j,z.target.value),onMouseEnter:()=>v("neuron",j),onMouseLeave:()=>v(null),onFocus:()=>v("neuron",j),onBlur:()=>v(null),placeholder:"0.5",step:"0.1"}),w&&S.jsx(dg,{change:U(j),xOffset:"17px"})]},Z))]}),S.jsxs("tr",{children:[S.jsx("th",{}),l.map((j,Z)=>S.jsx("th",{children:S.jsx("input",{type:"text",className:"header-input",defaultValue:j,onBlur:z=>g(j,z.target.value||j),onKeyDown:z=>{z.key==="Enter"&&z.target.blur()}})},Z))]})]}),S.jsx("tbody",{children:i.map((j,Z)=>S.jsxs("tr",{children:[S.jsx("td",{className:"row-header",children:j}),l.map((z,K)=>S.jsxs("td",{style:{position:"relative"},children:[S.jsx("input",{type:"number",className:"cell-input",value:s[`${j}-${z}`]||"",onChange:J=>d(j,z,J.target.value),onMouseEnter:()=>v("connection",j,z),onMouseLeave:()=>v(null),onFocus:()=>v("connection",j,z),onBlur:()=>v(null),placeholder:"0.1",step:"0.1"}),w&&S.jsx(dg,{change:B(j,z)})]},K))]},Z))})]})})]})},$y=(a,i)=>a==="input"?`X${i}`:a==="hidden"?`H${i}`:a.startsWith("hidden")?`H${parseInt(a.replace("hidden",""))}${i}`:`Y${i}`,gT=(a,i,l,s,c)=>{let d;a==="input"?d=200:a==="hidden"?d=400:a.startsWith("hidden")?d=400+((parseInt(a.replace("hidden",""))||1)-1)*100:d=400+l*100+100;const f=s-100-90*(i-1);return{x:d,y:f}},yT=(a,i,l,s,c)=>{const{x:d,y:f}=gT(a,i,l,s);return{id:`${a}-${Date.now()}`,x:d,y:f,radius:c,label:$y(a,i),type:a}},bT=(a,i,l,s,c,d,f)=>{const g=i[a]+1,p=yT(a,g,c,d,f);l(h=>{const y=[...h,p],v=y.filter(x=>x.type===a).sort((x,E)=>x.y-E.y);return y.map(x=>{if(x.type===a){const E=v.findIndex(M=>M.id===x.id);return{...x,label:$y(a,E+1)}}return x})}),s(h=>({...h,[a]:g}))},vT=async(a,i,l)=>{l(!0);const s=a.filter(h=>h.type==="input").sort((h,y)=>h.y-y.y),c=a.filter(h=>h.type==="hidden"||h.type.startsWith("hidden")).sort((h,y)=>h.x-y.x||h.y-y.y),d=a.filter(h=>h.type==="output").sort((h,y)=>h.y-y.y);if(s.length===0||c.length===0)return;const f={};c.forEach(h=>{const y=h.x;f[y]||(f[y]=[]),f[y].push(h)});const g=Object.keys(f).map(Number).sort(),p=[];if(g.length>0){const h=f[g[0]],y=[];for(const v of s)for(const x of h)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}for(let h=0;h<g.length-1;h++){const y=f[g[h]],v=f[g[h+1]],x=[];for(const E of y)for(const M of v)x.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:E.id,toNeuronId:M.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(x)}if(d.length>0&&g.length>0){const h=f[g[g.length-1]],y=[];for(const v of h)for(const x of d)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}p.forEach((h,y)=>{setTimeout(()=>{i(v=>[...v,...h]),setTimeout(()=>{i(v=>v.map(x=>h.some(E=>E.id===x.id)?{...x,isAnimating:!1}:x))},600)},100+y*700)})},mg=`
{
  "inputData": [
    {
      "X1": "60",
      "X2": "70",
      "Truth": "1"
    },
    {
      "X1": "40",
      "X2": "50",
      "Truth": "0"
    },
    {
      "X1": "80",
      "X2": "90",
      "Truth": "1"
    },
    {}
  ],
  "hiddenWeights": {
    "X1-H1": 0.1,
    "X2-H1": 0.4,
    "X1-H2": -0.2,
    "X2-H2": 0.5,
    "X1-H3": 0.3,
    "X2-H3": -0.6
  },
  "hiddenBiases": {
    "H1": 0.1,
    "H2": 0.2,
    "H3": 0.3
  },
  "outputWeights": {
    "H1-Y1": 0.7,
    "H2-Y1": -0.8,
    "H3-Y1": 0.9
  },
  "outputBiases": {
    "Y1": 0.5
  },
  "neuronHeaders": {},
  "neurons": [
    {
      "id": "input-1753996084194",
      "x": 104.16668701171875,
      "y": 250.66668701171875,
      "radius": 30,
      "label": "X2",
      "type": "input"
    },
    {
      "id": "input-1753996084987",
      "x": 101.5,
      "y": 146.33334350585938,
      "radius": 30,
      "label": "X1",
      "type": "input"
    },
    {
      "id": "hidden-1753996085697",
      "x": 317,
      "y": 321,
      "radius": 30,
      "label": "H3",
      "type": "hidden"
    },
    {
      "id": "hidden-1753996086164",
      "x": 317,
      "y": 207.00003051757812,
      "radius": 30,
      "label": "H2",
      "type": "hidden"
    },
    {
      "id": "hidden-1753996086646",
      "x": 320.99993896484375,
      "y": 102,
      "radius": 30,
      "label": "H1",
      "type": "hidden"
    },
    {
      "id": "output-1753996087594",
      "x": 558,
      "y": 206.66668701171875,
      "radius": 30,
      "label": "Y1",
      "type": "output"
    }
  ],
  "connections": [
    {
      "id": "connection-1754127675495-0.16008923476811665",
      "fromNeuronId": "input-1753996084987",
      "toNeuronId": "hidden-1753996086646",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1754127675495-0.38085814653286365",
      "fromNeuronId": "input-1753996084987",
      "toNeuronId": "hidden-1753996086164",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1754127675495-0.4813083646355555",
      "fromNeuronId": "input-1753996084987",
      "toNeuronId": "hidden-1753996085697",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1754127675495-0.5001955750707412",
      "fromNeuronId": "input-1753996084194",
      "toNeuronId": "hidden-1753996086646",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1754127675495-0.6513276535674942",
      "fromNeuronId": "input-1753996084194",
      "toNeuronId": "hidden-1753996086164",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1754127675495-0.6341368578857921",
      "fromNeuronId": "input-1753996084194",
      "toNeuronId": "hidden-1753996085697",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1754127675495-0.38852124270761923",
      "fromNeuronId": "hidden-1753996086646",
      "toNeuronId": "output-1753996087594",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1754127675495-0.7992894713510689",
      "fromNeuronId": "hidden-1753996086164",
      "toNeuronId": "output-1753996087594",
      "fromDirection": "right",
      "toDirection": "left",
      "isAnimating": false
    },
    {
      "id": "connection-1754127675495-0.709567916722258",
      "fromNeuronId": "hidden-1753996085697",
      "toNeuronId": "output-1753996087594",
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
  "timestamp": "2025-08-02T11:56:45.953Z"
}`,xT="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='18'%20viewBox='0%200%2022%2018'%3e%3cg%3e%3cpolygon%20points='15.828%206%2018%206%2018%208%2022%204%2018%200%2018%202%2014.172%202%204.172%2012%200%2012%200%2016%205.828%2016%2015.828%206'/%3e%3cpolygon%20points='18%2010%2018%2012%2015.828%2012%2014.242%2010.414%2011.414%2013.242%2014.172%2016%2018%2016%2018%2018%2022%2014%2018%2010'/%3e%3cpolygon%20points='5.758%207.586%208.586%204.758%205.828%202%200%202%200%206%204.172%206%205.758%207.586'/%3e%3c/g%3e%3c/svg%3e",tn=({matrix:a,label:i,image:l,x:s=0,y:c=0})=>{if(!a||a.length===0)return null;const d=a.length,f=a[0]?.length||0,g=40,p=4,h=d*(g+p)-p;return S.jsxs("div",{className:"matrix-display",children:[i&&S.jsx("div",{className:"matrix-label",children:S.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[S.jsx("span",{children:i}),l]})}),S.jsxs("div",{className:"matrix-container",style:{position:"relative"},children:[S.jsx("div",{className:"matrix-bracket-left",style:{height:`${h}px`}}),S.jsx("div",{className:"matrix-bracket-right",style:{height:`${h}px`}}),S.jsx("div",{className:"matrix-content",children:a.map((y,v)=>S.jsx("div",{className:"matrix-row",style:{display:"flex",marginBottom:v<d-1?`${p}px`:"0"},children:y.map((x,E)=>S.jsx("div",{className:"matrix-cell",style:{width:`${g}px`,height:`${g}px`,marginRight:E<f-1?`${p}px`:"0"},children:typeof x=="number"?x.toFixed(1):x},E))},v))})]})]})},io=({children:a,delay:i=0,isVisible:l=!0})=>S.jsx(Gt.div,{initial:{opacity:0},animate:{opacity:l?1:0},transition:{delay:i,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"40px"},children:a}),oo=({symbol:a})=>S.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:a}),pg=({label:a,label2:i,children:l})=>S.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},children:[S.jsx("div",{className:"activation-rect",children:a}),S.jsx("img",{src:xT,alt:"Activation Arrow",style:{width:"24px",height:"24px",filter:"invert(1)"}}),S.jsxs("div",{style:{fontSize:"16px",color:"white"},children:[" ",i," "]}),l]}),ST=({matrixSteps:a})=>S.jsx(Gt.div,{initial:{opacity:0,scaleY:0},animate:{opacity:a.showDivider?1:0,scaleY:a.showDivider?1:0},transition:{duration:.8},className:"vertical-divider"}),gg=({text:a,padding:i="12px 12px"})=>S.jsxs(Gt.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:"easeOut"},className:"helper-card",style:{padding:i},children:[S.jsx(Gt.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.1,duration:.15},style:{lineHeight:"1.4"},children:a}),S.jsx("div",{className:"helper-card-arrow"})]}),yg=!0;function TT(){const[a,i]=X.useState([]),[l,s]=X.useState([]),[c,d]=X.useState(!1),[f,g]=X.useState(1),[p,h]=X.useState(null),[y,v]=X.useState(null),[x,E]=X.useState({input:0,hidden:0,output:0,...Array.from({length:10},(_,Q)=>({[`hidden${Q+2}`]:0})).reduce((_,Q)=>({..._,...Q}),{})}),[M,w]=X.useState([{}]),[H,B]=X.useState({}),[U,j]=X.useState({}),[Z,z]=X.useState({}),[K,J]=X.useState({}),[G,et]=X.useState({}),[ct,wt]=X.useState(null),[Lt,pe]=X.useState({x:0,y:0}),[ie,Pt]=X.useState(null),[V,F]=X.useState({}),[I,yt]=X.useState([]),[A,q]=X.useState([]),[tt,$]=X.useState([]),[it,St]=X.useState(!1),[ft,Jt]=X.useState(!1),[Tt,ht]=X.useState(!1),[At,dt]=X.useState(!1),[Ct,jt]=X.useState(!1),[Rt,ce]=X.useState([]),[st,Dt]=X.useState(0),[Vt,Wt]=X.useState(!1),[Ye,ge]=X.useState(null),[sa,Cn]=X.useState(!1),[ua,yo]=X.useState(20),[Ln,Ee]=X.useState(!1),[Ne,ke]=X.useState(!1),[Cs,ql]=X.useState(null),[Rs,Xa]=X.useState(null),[Ya,Hn]=X.useState(!0),[pi,qn]=X.useState(!1),[zt,nn]=X.useState({}),[ca,gi]=X.useState(100),[Pn,Ns]=X.useState(!1),[yi,Pl]=X.useState(!1),[Xn,bi]=X.useState(null);function ye(_,Q){let xt=-1*(ua-5)/10*_;return Q&&xt<0&&(xt=Math.max(0,xt)),new Promise(ut=>setTimeout(ut,_+xt))}X.useEffect(()=>{if(!localStorage.getItem("neuralNetworkData")){Cn(!0);const _=setTimeout(()=>Cn(!1),6e3);return()=>clearTimeout(_)}},[]),X.useEffect(()=>{const _=Q=>{Q.key==="`"&&Ee(W=>!W)};return window.addEventListener("keydown",_),()=>{window.removeEventListener("keydown",_)}},[]);const vi=X.useRef(null),be=30,Me=400;function je({children:_}){const[Q,W]=X.useState(!1);return S.jsx("div",{onMouseEnter:()=>W(!0),onMouseLeave:()=>W(!1),style:{position:"relative"},children:_(Q)})}const fa=(_,Q)=>{if(!_||_.length===0||Q.length===0)return _;const W=_.filter(nt=>Q.some(ot=>nt[ot.label]&&nt[ot.label].trim()!==""));if(W.length===0)return _;const xt={};return Q.forEach(nt=>{const ot=W.map(gt=>parseFloat(gt[nt.label])).filter(gt=>!isNaN(gt));if(ot.length>0){const gt=ot.reduce((Le,He)=>Le+He,0)/ot.length,Bt=ot.reduce((Le,He)=>Le+Math.pow(He-gt,2),0)/ot.length,fe=Math.sqrt(Bt);console.log("mean",gt,"std",fe),xt[nt.label]={mean:gt,std:fe===0?1:fe}}}),_.map(nt=>{const ot={...nt};return Q.forEach(gt=>{if(nt[gt.label]&&nt[gt.label].trim()!==""&&xt[gt.label]){const Bt=parseFloat(nt[gt.label]);if(!isNaN(Bt)){const{mean:fe,std:Le}=xt[gt.label],He=(Bt-fe)/Le;ot[gt.label]=He.toFixed(4)}}}),ot})},xi=()=>{const _=Ef(M,Ge,Ze,Ue,G,H,U,Z,K);return yt(_.predictions),q(_.truthValues),$(_.losses),St(!0),Pn||Jt(!0),_.matrices},ks=()=>{const _=cg(M,Ge,Ze,Ue,G,H,U,Z,K,1e-5);_&&(B(_.newHiddenWeights),j(_.newHiddenBiases),z(_.newOutputWeights),J(_.newOutputBiases),Jt(!1),console.log("Weights and biases updated successfully"))},bo=()=>{ht(!0),St(!1),Jt(!1)},Xl=async()=>{if(Ze.length===0)return;if(bo(),await ye(500),qn(!0),M.filter(te=>{const Oo=Ge.some(Jl=>te[Jl.label]&&te[Jl.label].trim()!==""),_s=te.Truth!==void 0&&te.Truth!=="";return Oo&&_s}).length===0){alert("Please add input data with truth values"),ht(!1),qn(!1);return}const[Q,W,xt,ut,nt,ot,gt,Bt,fe,Le,He]=xi(),zs=Array(Q.length).fill(xt),Fl=Array(Bt.length).fill(nt);nn({step:1,X:Q,W1:W,b1:xt,XW1:ot,B1:zs,Z1:gt,A1:Bt,W2:ut,b2:nt,B2:Fl,A1W2:fe,Z2:Le,A2:He,hasOutputLayer:!0,showFormula:!1,showXW1:!1,showZ1:!1,showReLU:!1,showDivider:!1,showLayer2Formula:!1,showA1W2:!1,showZ2:!1,showSigmoid:!1}),await ye(1e3),nn(te=>({...te,showFormula:!0})),await ye(1500),nn(te=>({...te,showXW1:!0})),await ye(1500),nn(te=>({...te,showZ1:!0})),await ye(1e3),nn(te=>({...te,showReLU:!0})),await ye(1500),nn(te=>({...te,showDivider:!0})),await ye(1e3),nn(te=>({...te,showLayer2Formula:!0})),await ye(1500),nn(te=>({...te,showA1W2:!0})),await ye(1500),nn(te=>({...te,showZ2:!0})),await ye(1e3),nn(te=>({...te,showSigmoid:!0}))},Ga=_=>{Ne&&(i(Q=>Q.filter(W=>W.id!==_)),s(Q=>Q.filter(W=>W.fromNeuronId!==_&&W.toNeuronId!==_)),v(null),ql(null))},vo=_=>{Ne&&(s(Q=>Q.filter(W=>W.id!==_)),h(null),Xa(null))},da=async()=>{if(!Pn&&ca>0){if(Ze.length===0)return;bo(),ht(!1);let _={...H},Q={...U},W={...Z},xt={...K};for(let ut=1;ut<=ca;ut++){const nt=Ef(M,Ge,Ze,Ue,G,_,Q,W,xt);if(!nt)continue;yt(nt.predictions),q(nt.truthValues),$(nt.losses),St(!0);const ot=cg(M,Ge,Ze,Ue,G,_,Q,W,xt,.1);ot&&(_=ot.newHiddenWeights,Q=ot.newHiddenBiases,W=ot.newOutputWeights,xt=ot.newOutputBiases,B(_),j(Q),z(W),J(xt),console.log(`Epoch ${ut}/${ca} completed`)),ut<ca&&await ye(250)}ht(!1),Jt(!1)}else if(Ya){if(Ze.length===0)return;bo(),jt(!0),Dt(0),Wt(!1),ge(null);const _=async Q=>{const W=Ze[Q];if(!W)return;const xt=l.filter(nt=>nt.toNeuronId===W.id&&Ge.some(ot=>ot.id===nt.fromNeuronId)).map(nt=>nt.id);ce(nt=>Array.from(new Set([...nt,...xt]))),await ye(3e3);const ut=l.filter(nt=>nt.fromNeuronId===W.id&&Ue.some(ot=>ot.id===nt.toNeuronId)).map(nt=>nt.id);ce(nt=>Array.from(new Set([...nt,...ut]))),await ye(2e3),ce(nt=>nt.filter(ot=>!xt.includes(ot)))};for(let Q=0;Q<Ze.length;Q++)await _(Q);if(Wt(!0),await ye(3e3),xi(),Ue.length>0&&I.length>0){const Q=Ue[0],W=I[0].toFixed(4),xt={id:`display-${Date.now()}`,x:Q.x+150,y:Q.y,radius:30,label:W,type:"display"};ge(xt),i(nt=>[...nt,xt]);const ut={id:`sigmoid-connection-${Date.now()}`,fromNeuronId:Q.id,toNeuronId:xt.id,fromDirection:"right",toDirection:"left",isSigmoidConnection:!0};s(nt=>[...nt,ut]),ce(nt=>[...nt,ut.id])}await ye(2e3),ht(!1),await ye(4e3,yg),Wt(!1),i(Q=>Q.filter(W=>W.type!=="display")),s(Q=>Q.filter(W=>!W.isSigmoidConnection)),ce([]),await ye(700,yg),jt(!1)}else await Xl()},ha=_=>{const{setNeuronHeaders:Q,setHiddenWeights:W,setHiddenBiases:xt,setOutputWeights:ut,setOutputBiases:nt}=_;return{handleInputHeaderChange:(ot,gt)=>{Q(Bt=>({...Bt,[ot]:gt}))},handleWeightChange:(ot,gt,Bt)=>{W(fe=>({...fe,[`${ot}-${gt}`]:parseFloat(Bt)||0}))},handleBiasChange:(ot,gt)=>{xt(Bt=>({...Bt,[ot]:parseFloat(gt)||0}))},handleOutputWeightChange:(ot,gt,Bt)=>{ut(fe=>({...fe,[`${ot}-${gt}`]:parseFloat(Bt)||0}))},handleOutputBiasChange:(ot,gt)=>{nt(Bt=>({...Bt,[ot]:parseFloat(gt)||0}))},handleNeuronHeaderChange:(ot,gt)=>{Q(Bt=>({...Bt,[ot]:gt}))}}},{handleInputHeaderChange:Za,handleWeightChange:ma,handleBiasChange:ve,handleOutputWeightChange:Yl,handleOutputBiasChange:Gl,handleNeuronHeaderChange:Rn}=ha({setNeuronHeaders:et,setHiddenWeights:B,setHiddenBiases:j,setOutputWeights:z,setOutputBiases:J}),Yn=()=>{const _=a.filter(ut=>ut.type!=="display"),Q=l.filter(ut=>!ut.isSigmoidConnection),W={inputData:M,hiddenWeights:H,hiddenBiases:U,outputWeights:Z,outputBiases:K,neuronHeaders:G,neurons:_,connections:Q,counters:x,timestamp:new Date().toISOString()};if(window.confirm("Download the Neural Network as a JSON file? Pressing 'cancel' will save it in your cookies")){const ut=JSON.stringify(W,null,2),nt=new Blob([ut],{type:"application/json"}),ot=URL.createObjectURL(nt),gt=document.createElement("a");gt.href=ot,gt.download=`neural-network-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(gt),gt.click(),document.body.removeChild(gt),URL.revokeObjectURL(ot)}else localStorage.setItem("neuralNetworkData",JSON.stringify(W))},Zl=()=>{if(Cn(!1),St(!1),Jt(!1),window.confirm("Load from computer? Pressing 'cancel' will load from cookies.")){const Q=document.createElement("input");Q.type="file",Q.accept=".json",Q.style.display="none";let W;Q.onchange=xt=>{const ut=xt.target.files[0];if(!ut)return;const nt=new FileReader;nt.onload=ot=>{try{W=JSON.parse(ot.target.result),w(W.inputData||[{}]),B(W.hiddenWeights||{}),j(W.hiddenBiases||{}),z(W.outputWeights||{}),J(W.outputBiases||{}),et(W.neuronHeaders||{}),W.neurons&&i(W.neurons),W.connections&&(s(W.connections),dt(!0)),W.counters&&E(W.counters)}catch{alert("Invalid file format")}},nt.readAsText(ut),document.body.removeChild(Q)},document.body.appendChild(Q),Q.click()}else{let Q=localStorage.getItem("neuralNetworkData");Q||(Q=mg,localStorage.setItem("neuralNetworkData",mg));try{const W=JSON.parse(Q);w(W.inputData||[{}]),B(W.hiddenWeights||{}),j(W.hiddenBiases||{}),z(W.outputWeights||{}),J(W.outputBiases||{}),et(W.neuronHeaders||{}),W.neurons&&i(W.neurons),W.connections&&(s(W.connections),dt(!0)),W.counters&&E(W.counters)}catch(W){console.error("Error loading network data:",W)}}},Si=(_,Q,W)=>{if(_==="connection"&&Q&&W){const xt=a.find(nt=>(G[nt.label]||nt.label)===Q),ut=a.find(nt=>(G[nt.label]||nt.label)===W);if(xt&&ut){const nt=l.find(ot=>ot.fromNeuronId===xt.id&&ot.toNeuronId===ut.id);h(nt?.id||null)}v(null)}else if(_==="neuron"&&Q){const xt=a.find(ut=>(G[ut.label]||ut.label)===Q);v(xt?.id||null),h(null)}else h(null),v(null)},Ge=a.filter(_=>_.type==="input").sort((_,Q)=>_.y-Q.y),Ze=a.filter(_=>_.type==="hidden").sort((_,Q)=>_.y-Q.y),Ue=a.filter(_=>_.type==="output").sort((_,Q)=>_.y-Q.y),Ti=Ge.map(_=>G[_.label]||_.label),dn=Ze.map(_=>G[_.label]||_.label),xo=Ue.map(_=>G[_.label]||_.label);X.useEffect(()=>{if(yi){Xn||bi([...M]);const _=fa(Xn||M,Ge);w(_)}else Xn&&(w([...Xn]),bi(null))},[yi,Xn,M,Ge]);const So=_=>{if(!vi.current)return{x:0,y:0};const Q=vi.current.getBoundingClientRect(),W=(_.clientX-Q.left)/Q.width*800,xt=(_.clientY-Q.top)/Q.height*400;return{x:W,y:xt}},pa=(_,Q,W)=>{F(xt=>({...xt,[_]:{x:Q,y:W}}))},To=X.useCallback(_=>{if(ct&&vi.current){const Q=So(_);pe(Q);let W=null,xt=1/0;a.forEach(ut=>{if(ut.id!==ct.fromNeuronId){const nt=V[ut.id]||{x:0,y:0},ot=ut.x+nt.x,gt=ut.y+nt.y;[{direction:"top",x:ot,y:gt-be},{direction:"right",x:ot+be,y:gt},{direction:"bottom",x:ot,y:gt+be},{direction:"left",x:ot-be,y:gt}].forEach(fe=>{const Le=Math.sqrt(Math.pow(Q.x-fe.x,2)+Math.pow(Q.y-fe.y,2));Le<15&&Le<xt&&(xt=Le,W={neuronId:ut.id,direction:fe.direction})})}}),Pt(W)}},[ct,a,V,be]),Ao=_=>{bT(_,x,i,E,f,Me,be)},js=(_,Q,W)=>{i(xt=>xt.map(ut=>ut.id===_?{...ut,x:Q,y:W}:ut))},Ql=(_,Q,W,xt,ut)=>{if(ct)if(_!==ct.fromNeuronId){const nt={id:`connection-${Date.now()}`,fromNeuronId:ct.fromNeuronId,toNeuronId:_,fromDirection:ct.fromDirection,toDirection:Q};s(ot=>[...ot,nt]),wt(null),Pt(null)}else wt(null),Pt(null);else{const nt=a.find(He=>He.id===_),ot=V[_]||{x:0,y:0},gt=nt.x+ot.x,Bt=nt.y+ot.y,fe={top:{x:gt,y:Bt-be},right:{x:gt+be,y:Bt},bottom:{x:gt,y:Bt+be},left:{x:gt-be,y:Bt}},Le=So(ut);wt({fromNeuronId:_,fromDirection:Q,startX:fe[Q].x,startY:fe[Q].y}),pe(Le)}},Fe=()=>{vT(a,s,dt)},Kl=_=>{_.target.classList.contains("network-svg")&&ct&&(wt(null),Pt(null))},Do=({type:_,label:Q,onClickFunc:W=()=>Ao(_),style:xt={padding:"0.7rem 1.5rem"}})=>S.jsx(Gt.button,{onClick:W,className:"spawn-btn",whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:-25},transition:{delay:.1,duration:.1},style:xt,children:Q},_);return S.jsxs("div",{className:"app-container",children:[S.jsxs("div",{className:"nav-bar",children:[S.jsx("a",{href:"https://www.datvis.site/matrix_tool/",className:"nav-link",children:"Home"}),S.jsx("a",{href:"https://www.linkedin.com/in/laish-glenberg/",className:"nav-link",children:"About"}),S.jsx("a",{href:"https://ko-fi.com/weadsy",className:"nav-link",children:"Donate"})]}),S.jsxs(Gt.div,{className:"content-wrapper-with-tables",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,ease:"easeOut"},children:[S.jsxs("div",{className:"left-panel",children:[S.jsx(fg,{title:"Input Samples",neurons:Ge,data:M,setData:w,onHeaderChange:Za,onCellHover:Si,isOutput:!1,normalizeInputs:yi,setNormalizeInputs:Pl}),Tt&&S.jsx("div",{className:"loading-bar",children:S.jsx(rg,{color:["#7e7e7e","#979797","#b1b1b1","#cacaca"]})}),it&&!Tt&&S.jsx(Gt.div,{initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.7,ease:"easeOut"},children:S.jsx(fg,{title:"Final Predictions",neurons:[],data:[],setData:()=>{},onHeaderChange:()=>{},onCellHover:()=>{},isOutput:!0,truthValues:A,predictions:I,losses:tt})})]}),S.jsxs("div",{className:"center-panel",children:[S.jsxs("div",{className:"main-title-row",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"5px",position:"relative"},children:[S.jsx(Gt.h1,{className:"main-title",initial:{opacity:0,y:-30},animate:{opacity:1,y:10},transition:{delay:.3,duration:.8},children:"Neural Network Builder"}),S.jsxs("div",{className:"save-load-buttons",children:[S.jsx("button",{className:"save-load-btn",title:"Save your neural network and tables",onClick:Yn,children:"Save"}),S.jsx("button",{className:`save-load-btn${sa?" flash":""}`,title:"load a neural network and tables",onClick:Zl,children:"Load"})]})]}),a.some(_=>_.type==="output")&&a.some(_=>_.type==="input")&&a.some(_=>_.type==="hidden")&&S.jsxs("div",{className:"start-btn-row",children:[S.jsx(je,{children:_=>S.jsxs(S.Fragment,{children:[S.jsxs("label",{className:"checkbox-container-large",children:[S.jsx("input",{type:"checkbox",checked:Pn,onChange:Q=>{Ns(Q.target.checked),gi(0)},style:{transform:"scale(1.2)",accentColor:"#ffffff"}}),"Test Mode"]}),S.jsx(fs,{children:_&&S.jsx(gg,{text:"Disable back propagation and epochs"})})]})}),S.jsx(je,{children:_=>S.jsxs(S.Fragment,{children:[S.jsxs("label",{className:"checkbox-container-large",children:[S.jsx("input",{type:"checkbox",checked:Ya,onChange:Q=>Hn(Q.target.checked),style:{transform:"scale(1.2)",accentColor:"#ffffff"}}),"Deep Solve"]}),S.jsx(fs,{children:_&&S.jsx(gg,{text:"Turn off to see the full matrix calculations"})})]})}),S.jsx(Gt.button,{onClick:ft?ks:da,className:`spawn-btn${At?"":" btn-disabled"}`,style:{fontSize:"16px",padding:"0.7rem 1.2rem",display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",backgroundColor:"rgba(157, 159, 218, 0.2)",opacity:Tt?.5:1,cursor:Tt?"not-allowed":"pointer"},disabled:!At||Tt,whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1,duration:.1},children:Tt?S.jsx(rg,{color:"#ffffff",size:"small"}):S.jsxs(S.Fragment,{children:[ft?"ADJUST":"START",S.jsx("img",{src:XS,alt:"Train",style:{marginLeft:"10px",width:22,height:22,filter:"invert(1)",transform:"scaleX(-1)"}})]})}),S.jsxs("label",{className:"checkbox-container-large",children:[S.jsx("input",{type:"number",min:0,max:99,step:1,value:ua,onChange:_=>yo(Number(_.target.value)),className:"number-box-input",style:{width:"50px"}}),S.jsx("span",{className:"eraser-label",children:"Speed"})]}),S.jsxs("label",{className:"checkbox-container-large",children:[S.jsx("input",{type:"number",min:1,max:1e3,step:1,value:ca,onChange:_=>gi(Number(_.target.value)),className:"number-box-input",style:{width:"60px"}}),S.jsx("span",{className:"eraser-label",children:"Epochs"})]})]}),S.jsx(fs,{children:pi&&S.jsx(Gt.div,{className:"matrix-calculations-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.1,duration:1},children:zt.step>=1&&S.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"20px",justifyContent:"space-around",alignItems:"center"},children:[S.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[S.jsx("div",{style:{display:"flex",flexDirection:"column",maxWidth:"auto",alignItems:"center",justifyContent:"center"},children:S.jsx("div",{className:"matrix-layer-title",children:"HIDDEN WEIGHTED SUMS"})}),S.jsxs(io,{delay:0,isVisible:zt.showFormula,children:[S.jsx("div",{className:"matrix-formula-text",children:" Z1 = "}),S.jsx(tn,{matrix:zt.X,label:"X"}),S.jsx(oo,{symbol:"×"}),S.jsx(tn,{matrix:zt.W1,label:"W1"}),S.jsx(oo,{symbol:"+"}),S.jsx(tn,{matrix:[zt.b1],label:"b1",image:S.jsx("img",{src:sg,alt:"Activation Arrow",style:{transform:"scaleX(1.27)",height:"20px",filter:"invert(1)"}})})]}),S.jsxs(io,{delay:0,isVisible:zt.showXW1,children:[S.jsx("div",{className:"matrix-formula-text",children:" Z1 = "}),S.jsx(tn,{matrix:zt.XW1,label:"X * W1"}),S.jsx(oo,{symbol:"+"}),S.jsx(tn,{matrix:zt.B1,label:"B1"})]}),S.jsxs(io,{delay:0,isVisible:zt.showZ1,children:[S.jsxs(Gt.div,{initial:{x:zt.showReLU?-25:0},animate:{x:zt.showReLU?-25:0},transition:{duration:.5},className:"maxtrix-flex-row",children:[S.jsx("div",{className:"matrix-formula-text",children:" Z1 = "}),S.jsx(tn,{matrix:zt.Z1,label:"X * W1 + b1"})]}),S.jsxs(Gt.div,{initial:{opacity:0,x:50},animate:{opacity:zt.showReLU?1:0,x:0},transition:{delay:.5,duration:.5},className:"maxtrix-flex-row",children:[S.jsx(pg,{label:"ReLU",label2:"max(0,Z1)"}),S.jsx("div",{className:"matrix-formula-text",children:" A1 = "}),S.jsx(tn,{matrix:zt.A1,label:"ReLU(Z1)"})]})]})]}),S.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",opacity:zt.showDivider&&zt.hasOutputLayer?1:0,transition:"opacity 0.5s ease"},children:[S.jsx(ST,{matrixSteps:zt}),S.jsx(Gt.div,{initial:{opacity:0,y:20},animate:{opacity:zt.showSigmoid?1:0,y:0},transition:{delay:1,duration:.5},style:{marginTop:"40px",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:Do({type:"continue",label:"Continue",onClickFunc:()=>{ht(!1),qn(!1),St(!0)}})})]}),S.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",opacity:zt.hasOutputLayer?1:0,transition:"opacity 0.5s ease"},children:[S.jsx("div",{style:{display:"flex",flexDirection:"column",maxWidth:"auto",alignItems:"center",justifyContent:"center"},children:S.jsx(Gt.div,{initial:{opacity:0},animate:{opacity:zt.showDivider?1:0},transition:{delay:.5,duration:.5},className:"matrix-layer-title",children:"OUTPUT WEIGHTED SUMS"})}),S.jsxs(io,{delay:0,isVisible:zt.showLayer2Formula,children:[S.jsx("div",{className:"matrix-formula-text",children:" Z2 = "}),S.jsx(tn,{matrix:zt.A1,label:"A1"}),S.jsx(oo,{symbol:"×"}),S.jsx(tn,{matrix:zt.W2,label:"W2"}),S.jsx(oo,{symbol:"+"}),S.jsx(tn,{matrix:[zt.b2],label:"b2",image:S.jsx("img",{src:sg,alt:"Activation Arrow",style:{transform:"scaleX(1.27)",height:"20px",filter:"invert(1)"}})})]}),S.jsxs(io,{delay:0,isVisible:zt.showA1W2,children:[S.jsx("div",{className:"matrix-formula-text",children:" Z2 = "}),S.jsx(tn,{matrix:zt.A1W2,label:"A1 * W2"}),S.jsx(oo,{symbol:"+"}),S.jsx(tn,{matrix:zt.B2,label:"B2"})]}),S.jsxs(io,{delay:0,isVisible:zt.showZ2,children:[S.jsxs(Gt.div,{animate:{x:zt.showSigmoid?-25:0},transition:{duration:.5},className:"maxtrix-flex-row",children:[S.jsx("div",{className:"matrix-formula-text",children:" Z2 = "}),S.jsx(tn,{matrix:zt.Z2,label:"A1 * W2 + b2"})]}),S.jsxs(Gt.div,{initial:{opacity:0,x:50},animate:{opacity:zt.showSigmoid?1:0,x:0},transition:{delay:.5,duration:.5},className:"maxtrix-flex-row",children:[S.jsx(pg,{label:"Sigmoid",children:S.jsx("svg",{width:"80",height:"40",style:{display:"block"},children:S.jsx(Wy,{x:40,y:20,sumText:"x"})})}),S.jsx("div",{className:"matrix-formula-text",children:" ŷ = "}),S.jsx(tn,{matrix:zt.A2,label:"σ(Z2)"})]})]})]})]})})}),S.jsxs("div",{style:{position:"relative",width:"100%"},children:[S.jsxs(Gt.svg,{ref:vi,viewBox:"0 0 800 400",className:"network-svg",initial:{opacity:0},animate:{opacity:1,cursor:Ne?"crosshair":"default"},transition:{delay:.6,duration:1},onMouseMove:To,onClick:Kl,children:[S.jsx("defs",{children:S.jsx("marker",{id:"arrowhead",markerWidth:"5",markerHeight:"5",refX:"5",refY:"2.5",orient:"auto",children:S.jsx("polygon",{points:"0 0, 5 2.5, 0 5",className:"arrow-marker"})})}),l.map(_=>S.jsx(cT,{connection:_,neurons:a,neuronRadius:be,neuronTransforms:V,isGlowing:p===_.id,emphasizedConnections:Rt,showForwardPassVisuals:Ct,inputData:M,currentSampleIndex:st,neuronHeaders:G,hiddenWeights:H,inputNeurons:Ge,hiddenNeurons:Ze,hiddenBiases:U,outputWeights:Z,outputBiases:K,showSigmoidPhase:Vt,outputNeurons:Ue,isEraserMode:Ne,onEraseConnection:vo,eraserHoveredConnection:Rs,setEraserHoveredConnection:Xa},_.id)),ct&&S.jsx(uT,{startX:ct.startX,startY:ct.startY,endX:Lt.x,endY:Lt.y}),a.map(_=>S.jsx(dT,{id:_.id,x:_.x,y:_.y,radius:_.radius,label:_.label,type:_.type,onDragEnd:js,onDragUpdate:pa,onStartConnection:Ql,highlightedDots:ie?.neuronId===_.id?[ie.direction]:[],isGlowing:y===_.id,neurons:a,showForwardPassVisuals:Ct,emphasizedConnections:Rt,hiddenNeurons:Ze,inputNeurons:Ge,outputNeurons:Ue,neuronHeaders:G,hiddenWeights:H,outputWeights:Z,inputData:M,currentSampleIndex:st,hiddenBiases:U,connections:l,showSigmoidPhase:Vt,outputBiases:K,isEraserMode:Ne,onEraseNeuron:Ga,eraserHoveredNeuron:Cs,setEraserHoveredNeuron:ql},_.id))]}),S.jsx("div",{style:{position:"absolute",top:16,right:-5,zIndex:10},children:S.jsxs("label",{className:"eraser-checkbox-container button-border",children:[S.jsx("input",{type:"checkbox",checked:Ne,onChange:_=>ke(_.target.checked),className:"eraser-checkbox"}),S.jsx("span",{className:"eraser-label",children:"Eraser"})]})})]}),S.jsxs("div",{className:"button-stack",children:[S.jsx("div",{className:"button-container",children:[{type:"input",label:"Add Input"},{type:"hidden",label:"Add Hidden"},...c?Array.from({length:f-1},(_,Q)=>({type:`hidden${Q+2}`,label:`Add Hidden ${Q+2}`})):[],{type:"output",label:"Add Output"}].map(({type:_,label:Q})=>Do({type:_,label:Q}))}),S.jsx("div",{className:"button-dense",children:a.some(_=>_.type==="input")&&a.some(_=>_.type==="hidden")&&Do({type:"dense",label:"Dense Connect",onClickFunc:Fe,style:{padding:"0.5rem 0.7rem",background:"rgba(255, 255, 255, 0.1)"}})})]})]}),S.jsxs("div",{className:"right-panel",children:[S.jsx(hg,{title:"Hidden Layer Weights",inputLabels:Ti,neuronLabels:dn,weights:H,biases:U,onWeightChange:ma,onBiasChange:ve,onHeaderChange:Rn,showSaveLoad:!0,onSave:Yn,onLoad:Zl,onCellHover:Si,biasLabel:"b1"}),Ze.length>0&&Ue.length>0&&S.jsxs(S.Fragment,{children:[S.jsx(hg,{title:"Output Layer Weights",inputLabels:dn,neuronLabels:xo,weights:Z,biases:K,onWeightChange:Yl,onBiasChange:Gl,onHeaderChange:Rn,showSaveLoad:!1,onCellHover:Si,biasLabel:"b2"}),S.jsx("div",{style:{marginTop:"-22px",color:"#fff",fontWeight:300,fontSize:"14px"}})]})]})]})]})}u1.createRoot(document.getElementById("root")).render(S.jsx(X.StrictMode,{children:S.jsx(TT,{})}));
