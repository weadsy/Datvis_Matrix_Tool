(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();function Kv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var wc={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function Fv(){if(Mp)return pl;Mp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:s,key:f,ref:c!==void 0?c:null,props:d}}return pl.Fragment=i,pl.jsx=l,pl.jsxs=l,pl}var Ep;function Jv(){return Ep||(Ep=1,wc.exports=Fv()),wc.exports}var A=Jv(),Rc={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function Wv(){if(wp)return xt;wp=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=v&&T[v]||T["@@iterator"],typeof T=="function"?T:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,O={};function j(T,H,I){this.props=T,this.context=H,this.refs=O,this.updater=I||w}j.prototype.isReactComponent={},j.prototype.setState=function(T,H){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,H,"setState")},j.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function B(){}B.prototype=j.prototype;function Y(T,H,I){this.props=T,this.context=H,this.refs=O,this.updater=I||w}var q=Y.prototype=new B;q.constructor=Y,M(q,j.prototype),q.isPureReactComponent=!0;var W=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function Q(T,H,I,J,rt,bt){return I=bt.ref,{$$typeof:a,type:T,key:H,ref:I!==void 0?I:null,props:bt}}function G(T,H){return Q(T.type,H,void 0,void 0,void 0,T.props)}function lt(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function ft(T){var H={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(I){return H[I]})}var Ut=/\/+/g;function Qt(T,H){return typeof T=="object"&&T!==null&&T.key!=null?ft(""+T.key):H.toString(36)}function Ce(){}function he(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(Ce,Ce):(T.status="pending",T.then(function(H){T.status==="pending"&&(T.status="fulfilled",T.value=H)},function(H){T.status==="pending"&&(T.status="rejected",T.reason=H)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Kt(T,H,I,J,rt){var bt=typeof T;(bt==="undefined"||bt==="boolean")&&(T=null);var st=!1;if(T===null)st=!0;else switch(bt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(T.$$typeof){case a:case i:st=!0;break;case y:return st=T._init,Kt(st(T._payload),H,I,J,rt)}}if(st)return rt=rt(T),st=J===""?"."+Qt(T,0):J,W(rt)?(I="",st!=null&&(I=st.replace(Ut,"$&/")+"/"),Kt(rt,H,I,"",function(ze){return ze})):rt!=null&&(lt(rt)&&(rt=G(rt,I+(rt.key==null||T&&T.key===rt.key?"":(""+rt.key).replace(Ut,"$&/")+"/")+st)),H.push(rt)),1;st=0;var Ht=J===""?".":J+":";if(W(T))for(var wt=0;wt<T.length;wt++)J=T[wt],bt=Ht+Qt(J,wt),st+=Kt(J,H,I,bt,rt);else if(wt=x(T),typeof wt=="function")for(T=wt.call(T),wt=0;!(J=T.next()).done;)J=J.value,bt=Ht+Qt(J,wt++),st+=Kt(J,H,I,bt,rt);else if(bt==="object"){if(typeof T.then=="function")return Kt(he(T),H,I,J,rt);throw H=String(T),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return st}function N(T,H,I){if(T==null)return T;var J=[],rt=0;return Kt(T,J,"","",function(bt){return H.call(I,bt,rt++)}),J}function Z(T){if(T._status===-1){var H=T._result;H=H(),H.then(function(I){(T._status===0||T._status===-1)&&(T._status=1,T._result=I)},function(I){(T._status===0||T._status===-1)&&(T._status=2,T._result=I)}),T._status===-1&&(T._status=0,T._result=H)}if(T._status===1)return T._result.default;throw T._result}var $=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function yt(){}return xt.Children={map:N,forEach:function(T,H,I){N(T,function(){H.apply(this,arguments)},I)},count:function(T){var H=0;return N(T,function(){H++}),H},toArray:function(T){return N(T,function(H){return H})||[]},only:function(T){if(!lt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},xt.Component=j,xt.Fragment=l,xt.Profiler=c,xt.PureComponent=Y,xt.StrictMode=s,xt.Suspense=m,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,xt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return P.H.useMemoCache(T)}},xt.cache=function(T){return function(){return T.apply(null,arguments)}},xt.cloneElement=function(T,H,I){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var J=M({},T.props),rt=T.key,bt=void 0;if(H!=null)for(st in H.ref!==void 0&&(bt=void 0),H.key!==void 0&&(rt=""+H.key),H)!F.call(H,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&H.ref===void 0||(J[st]=H[st]);var st=arguments.length-2;if(st===1)J.children=I;else if(1<st){for(var Ht=Array(st),wt=0;wt<st;wt++)Ht[wt]=arguments[wt+2];J.children=Ht}return Q(T.type,rt,void 0,void 0,bt,J)},xt.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},xt.createElement=function(T,H,I){var J,rt={},bt=null;if(H!=null)for(J in H.key!==void 0&&(bt=""+H.key),H)F.call(H,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(rt[J]=H[J]);var st=arguments.length-2;if(st===1)rt.children=I;else if(1<st){for(var Ht=Array(st),wt=0;wt<st;wt++)Ht[wt]=arguments[wt+2];rt.children=Ht}if(T&&T.defaultProps)for(J in st=T.defaultProps,st)rt[J]===void 0&&(rt[J]=st[J]);return Q(T,bt,void 0,void 0,null,rt)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(T){return{$$typeof:g,render:T}},xt.isValidElement=lt,xt.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:Z}},xt.memo=function(T,H){return{$$typeof:h,type:T,compare:H===void 0?null:H}},xt.startTransition=function(T){var H=P.T,I={};P.T=I;try{var J=T(),rt=P.S;rt!==null&&rt(I,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(yt,$)}catch(bt){$(bt)}finally{P.T=H}},xt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},xt.use=function(T){return P.H.use(T)},xt.useActionState=function(T,H,I){return P.H.useActionState(T,H,I)},xt.useCallback=function(T,H){return P.H.useCallback(T,H)},xt.useContext=function(T){return P.H.useContext(T)},xt.useDebugValue=function(){},xt.useDeferredValue=function(T,H){return P.H.useDeferredValue(T,H)},xt.useEffect=function(T,H,I){var J=P.H;if(typeof I=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(T,H)},xt.useId=function(){return P.H.useId()},xt.useImperativeHandle=function(T,H,I){return P.H.useImperativeHandle(T,H,I)},xt.useInsertionEffect=function(T,H){return P.H.useInsertionEffect(T,H)},xt.useLayoutEffect=function(T,H){return P.H.useLayoutEffect(T,H)},xt.useMemo=function(T,H){return P.H.useMemo(T,H)},xt.useOptimistic=function(T,H){return P.H.useOptimistic(T,H)},xt.useReducer=function(T,H,I){return P.H.useReducer(T,H,I)},xt.useRef=function(T){return P.H.useRef(T)},xt.useState=function(T){return P.H.useState(T)},xt.useSyncExternalStore=function(T,H,I){return P.H.useSyncExternalStore(T,H,I)},xt.useTransition=function(){return P.H.useTransition()},xt.version="19.1.0",xt}var Rp;function bf(){return Rp||(Rp=1,Rc.exports=Wv()),Rc.exports}var X=bf();const Lt=Kv(X);var Cc={exports:{}},ml={},zc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function $v(){return Cp||(Cp=1,function(a){function i(N,Z){var $=N.length;N.push(Z);t:for(;0<$;){var yt=$-1>>>1,T=N[yt];if(0<c(T,Z))N[yt]=Z,N[$]=T,$=yt;else break t}}function l(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var Z=N[0],$=N.pop();if($!==Z){N[0]=$;t:for(var yt=0,T=N.length,H=T>>>1;yt<H;){var I=2*(yt+1)-1,J=N[I],rt=I+1,bt=N[rt];if(0>c(J,$))rt<T&&0>c(bt,J)?(N[yt]=bt,N[rt]=$,yt=rt):(N[yt]=J,N[I]=$,yt=I);else if(rt<T&&0>c(bt,$))N[yt]=bt,N[rt]=$,yt=rt;else break t}}return Z}function c(N,Z){var $=N.sortIndex-Z.sortIndex;return $!==0?$:N.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var m=[],h=[],y=1,v=null,x=3,w=!1,M=!1,O=!1,j=!1,B=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function W(N){for(var Z=l(h);Z!==null;){if(Z.callback===null)s(h);else if(Z.startTime<=N)s(h),Z.sortIndex=Z.expirationTime,i(m,Z);else break;Z=l(h)}}function P(N){if(O=!1,W(N),!M)if(l(m)!==null)M=!0,F||(F=!0,Qt());else{var Z=l(h);Z!==null&&Kt(P,Z.startTime-N)}}var F=!1,Q=-1,G=5,lt=-1;function ft(){return j?!0:!(a.unstable_now()-lt<G)}function Ut(){if(j=!1,F){var N=a.unstable_now();lt=N;var Z=!0;try{t:{M=!1,O&&(O=!1,Y(Q),Q=-1),w=!0;var $=x;try{e:{for(W(N),v=l(m);v!==null&&!(v.expirationTime>N&&ft());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var T=yt(v.expirationTime<=N);if(N=a.unstable_now(),typeof T=="function"){v.callback=T,W(N),Z=!0;break e}v===l(m)&&s(m),W(N)}else s(m);v=l(m)}if(v!==null)Z=!0;else{var H=l(h);H!==null&&Kt(P,H.startTime-N),Z=!1}}break t}finally{v=null,x=$,w=!1}Z=void 0}}finally{Z?Qt():F=!1}}}var Qt;if(typeof q=="function")Qt=function(){q(Ut)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,he=Ce.port2;Ce.port1.onmessage=Ut,Qt=function(){he.postMessage(null)}}else Qt=function(){B(Ut,0)};function Kt(N,Z){Q=B(function(){N(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(N){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var $=x;x=Z;try{return N()}finally{x=$}},a.unstable_requestPaint=function(){j=!0},a.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var $=x;x=N;try{return Z()}finally{x=$}},a.unstable_scheduleCallback=function(N,Z,$){var yt=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?yt+$:yt):$=yt,N){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=$+T,N={id:y++,callback:Z,priorityLevel:N,startTime:$,expirationTime:T,sortIndex:-1},$>yt?(N.sortIndex=$,i(h,N),l(m)===null&&N===l(h)&&(O?(Y(Q),Q=-1):O=!0,Kt(P,$-yt))):(N.sortIndex=T,i(m,N),M||w||(M=!0,F||(F=!0,Qt()))),N},a.unstable_shouldYield=ft,a.unstable_wrapCallback=function(N){var Z=x;return function(){var $=x;x=Z;try{return N.apply(this,arguments)}finally{x=$}}}}(kc)),kc}var zp;function Iv(){return zp||(zp=1,zc.exports=$v()),zc.exports}var Nc={exports:{}},Ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function t1(){if(kp)return Ge;kp=1;var a=bf();function i(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(m,h,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:m,containerInfo:h,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ge.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return d(m,h,null,y)},Ge.flushSync=function(m){var h=f.T,y=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=y,s.d.f()}},Ge.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Ge.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ge.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,v=g(y,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,w=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:w}):y==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:w,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ge.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=g(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Ge.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,v=g(y,h.crossOrigin);s.d.L(m,y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ge.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=g(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Ge.requestFormReset=function(m){s.d.r(m)},Ge.unstable_batchedUpdates=function(m,h){return m(h)},Ge.useFormState=function(m,h,y){return f.H.useFormState(m,h,y)},Ge.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ge.version="19.1.0",Ge}var Np;function e1(){if(Np)return Nc.exports;Np=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Nc.exports=t1(),Nc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function n1(){if(jp)return ml;jp=1;var a=Iv(),i=bf(),l=e1();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(s(188))}function m(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,o=e;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return g(r),t;if(u===o)return g(r),e;u=u.sibling}throw Error(s(188))}if(n.return!==o.return)n=r,o=u;else{for(var p=!1,b=r.child;b;){if(b===n){p=!0,n=r,o=u;break}if(b===o){p=!0,o=r,n=u;break}b=b.sibling}if(!p){for(b=u.child;b;){if(b===n){p=!0,n=u,o=r;break}if(b===o){p=!0,o=u,n=r;break}b=b.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),q=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),ft=Symbol.for("react.memo_cache_sentinel"),Ut=Symbol.iterator;function Qt(t){return t===null||typeof t!="object"?null:(t=Ut&&t[Ut]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case j:return"Profiler";case O:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case q:return(t.displayName||"Context")+".Provider";case Y:return(t._context.displayName||"Context")+".Consumer";case W:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return e=t.displayName||null,e!==null?e:he(t.type)||"Memo";case G:e=t._payload,t=t._init;try{return he(t(e))}catch{}}return null}var Kt=Array.isArray,N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},yt=[],T=-1;function H(t){return{current:t}}function I(t){0>T||(t.current=yt[T],yt[T]=null,T--)}function J(t,e){T++,yt[T]=t.current,t.current=e}var rt=H(null),bt=H(null),st=H(null),Ht=H(null);function wt(t,e){switch(J(st,e),J(bt,t),J(rt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?tp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=tp(e),t=ep(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}I(rt),J(rt,t)}function ze(){I(rt),I(bt),I(st)}function _t(t){t.memoizedState!==null&&J(Ht,t);var e=rt.current,n=ep(e,t.type);e!==n&&(J(bt,t),J(rt,n))}function It(t){bt.current===t&&(I(rt),I(bt)),Ht.current===t&&(I(Ht),ul._currentValue=$)}var Ft=Object.prototype.hasOwnProperty,Nt=a.unstable_scheduleCallback,at=a.unstable_cancelCallback,Dt=a.unstable_shouldYield,Rt=a.unstable_requestPaint,Et=a.unstable_now,pe=a.unstable_getCurrentPriorityLevel,ae=a.unstable_ImmediatePriority,Qe=a.unstable_UserBlockingPriority,be=a.unstable_NormalPriority,an=a.unstable_LowPriority,kn=a.unstable_IdlePriority,Nn=a.log,Gn=a.unstable_setDisableYieldValue,ke=null,ve=null;function hn(t){if(typeof Nn=="function"&&Gn(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(ke,t)}catch{}}var Le=Math.clz32?Math.clz32:Ul,xs=Math.log,Vl=Math.LN2;function Ul(t){return t>>>=0,t===0?32:31-(xs(t)/Vl|0)|0}var hi=256,pi=4194304;function On(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Tt(t,e,n){var o=t.pendingLanes;if(o===0)return 0;var r=0,u=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~u,o!==0?r=On(o):(p&=b,p!==0?r=On(p):n||(n=b&~t,n!==0&&(r=On(n))))):(b=o&~u,b!==0?r=On(b):p!==0?r=On(p):n||(n=o&~t,n!==0&&(r=On(n)))),r===0?0:e!==0&&e!==r&&(e&u)===0&&(u=r&-r,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:r}function He(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Ss(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var t=hi;return hi<<=1,(hi&4194048)===0&&(hi=256),t}function xe(){var t=pi;return pi<<=1,(pi&62914560)===0&&(pi=4194304),t}function ca(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ne(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ts(t,e,n,o,r,u){var p=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,C=t.hiddenUpdates;for(n=p&~n;0<n;){var _=31-Le(n),L=1<<_;b[_]=0,S[_]=-1;var z=C[_];if(z!==null)for(C[_]=null,_=0;_<z.length;_++){var k=z[_];k!==null&&(k.lane&=-536870913)}n&=~L}o!==0&&mi(t,o,0),u!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=u&~(p&~e))}function mi(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-Le(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|n&4194090}function mo(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-Le(n),r=1<<o;r&e|t[o]&e&&(t[o]|=e),n&=~r}}function go(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Bl(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:xp(t.type))}function As(t,e){var n=Z.p;try{return Z.p=t,e()}finally{Z.p=n}}var jn=Math.random().toString(36).slice(2),Oe="__reactFiber$"+jn,qe="__reactProps$"+jn,fa="__reactContainer$"+jn,bo="__reactEvents$"+jn,Ds="__reactListeners$"+jn,Ll="__reactHandles$"+jn,vo="__reactResources$"+jn,da="__reactMarker$"+jn;function Pa(t){delete t[Oe],delete t[qe],delete t[bo],delete t[Ds],delete t[Ll]}function Pe(t){var e=t[Oe];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fa]||n[Oe]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=op(t);t!==null;){if(n=t[Oe])return n;t=op(t)}return e}t=n,n=t.parentNode}return null}function Se(t){if(t=t[Oe]||t[fa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function je(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function ha(t){var e=t[vo];return e||(e=t[vo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ue(t){t[da]=!0}var Hl=new Set,xo={};function Zn(t,e){pa(t,e),pa(t+"Capture",e)}function pa(t,e){for(xo[t]=e,t=0;t<e.length;t++)Hl.add(e[t])}var Os=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ql={},Pl={};function Ms(t){return Ft.call(Pl,t)?!0:Ft.call(ql,t)?!1:Os.test(t)?Pl[t]=!0:(ql[t]=!0,!1)}function gi(t,e,n){if(Ms(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Xa(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function V(t,e,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+o)}}var K,et;function gt(t){if(K===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);K=e&&e[1]||"",et=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+K+t+et}var vt=!1;function dt(t,e){if(!t||vt)return"";vt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(k){var z=k}Reflect.construct(t,[],L)}else{try{L.call()}catch(k){z=k}t.call(L.prototype)}}else{try{throw Error()}catch(k){z=k}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(k){if(k&&z&&typeof k.stack=="string")return[k.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),p=u[0],b=u[1];if(p&&b){var S=p.split(`
`),C=b.split(`
`);for(r=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;r<C.length&&!C[r].includes("DetermineComponentFrameRoot");)r++;if(o===S.length||r===C.length)for(o=S.length-1,r=C.length-1;1<=o&&0<=r&&S[o]!==C[r];)r--;for(;1<=o&&0<=r;o--,r--)if(S[o]!==C[r]){if(o!==1||r!==1)do if(o--,r--,0>r||S[o]!==C[r]){var _=`
`+S[o].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=o&&0<=r);break}}}finally{vt=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?gt(n):""}function ut(t){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return gt("Activity");default:return""}}function zt(t){try{var e="";do e+=ut(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ct(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Me(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _n(t){var e=Me(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(p){o=""+p,u.call(this,p)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vn(t){t._valueTracker||(t._valueTracker=_n(t))}function yi(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Me(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function Ya(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var So=/[\n"\\]/g;function nt(t){return t.replace(So,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Jt(t,e,n,o,r,u,p,b){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),e!=null?p==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ct(e)):t.value!==""+Ct(e)&&(t.value=""+Ct(e)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),e!=null?Je(t,p,Ct(e)):n!=null?Je(t,p,Ct(n)):o!=null&&t.removeAttribute("value"),r==null&&u!=null&&(t.defaultChecked=!!u),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Ct(b):t.removeAttribute("name")}function Xe(t,e,n,o,r,u,p,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+Ct(n):"",e=e!=null?""+Ct(e):n,b||e===t.value||(t.value=e),t.defaultValue=e}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p)}function Je(t,e,n){e==="number"&&Ya(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function pn(t,e,n,o){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&o&&(t[n].defaultSelected=!0)}else{for(n=""+Ct(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bi(t,e,n){if(e!=null&&(e=""+Ct(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ct(n):""}function If(t,e,n,o){if(e==null){if(o!=null){if(n!=null)throw Error(s(92));if(Kt(o)){if(1<o.length)throw Error(s(93));o=o[0]}n=o}n==null&&(n=""),e=n}n=Ct(e),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o)}function vi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function td(t,e,n){var o=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,n):typeof n!="number"||n===0||Gy.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function ed(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var r in e)o=e[r],e.hasOwnProperty(r)&&n[r]!==o&&td(t,r,o)}else for(var u in e)e.hasOwnProperty(u)&&td(t,u,e[u])}function Es(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xl(t){return Qy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ws=null;function Rs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xi=null,Si=null;function nd(t){var e=Se(t);if(e&&(t=e.stateNode)){var n=t[qe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Jt(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+nt(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var r=o[qe]||null;if(!r)throw Error(s(90));Jt(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)o=n[e],o.form===t.form&&yi(o)}break t;case"textarea":bi(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&pn(t,!!n.multiple,e,!1)}}}var Cs=!1;function ad(t,e,n){if(Cs)return t(e,n);Cs=!0;try{var o=t(e);return o}finally{if(Cs=!1,(xi!==null||Si!==null)&&(wr(),xi&&(e=xi,t=Si,Si=xi=null,nd(e),t)))for(e=0;e<t.length;e++)nd(t[e])}}function To(t,e){var n=t.stateNode;if(n===null)return null;var o=n[qe]||null;if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zs=!1;if(Qn)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{zs=!1}var ma=null,ks=null,Yl=null;function id(){if(Yl)return Yl;var t,e=ks,n=e.length,o,r="value"in ma?ma.value:ma.textContent,u=r.length;for(t=0;t<n&&e[t]===r[t];t++);var p=n-t;for(o=1;o<=p&&e[n-o]===r[u-o];o++);return Yl=r.slice(t,1<o?1-o:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function od(){return!1}function We(t){function e(n,o,r,u,p){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(n=t[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zl:od,this.isPropagationStopped=od,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),e}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=We(Ga),Do=y({},Ga,{view:0,detail:0}),Ky=We(Do),Ns,js,Oo,Kl=y({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(Ns=t.screenX-Oo.screenX,js=t.screenY-Oo.screenY):js=Ns=0,Oo=t),Ns)},movementY:function(t){return"movementY"in t?t.movementY:js}}),ld=We(Kl),Fy=y({},Kl,{dataTransfer:0}),Jy=We(Fy),Wy=y({},Do,{relatedTarget:0}),_s=We(Wy),$y=y({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Iy=We($y),tb=y({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eb=We(tb),nb=y({},Ga,{data:0}),rd=We(nb),ab={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ib={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ob[t])?!!e[t]:!1}function Vs(){return lb}var rb=y({},Do,{key:function(t){if(t.key){var e=ab[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ib[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vs,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sb=We(rb),ub=y({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=We(ub),cb=y({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vs}),fb=We(cb),db=y({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),hb=We(db),pb=y({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mb=We(pb),gb=y({},Ga,{newState:0,oldState:0}),yb=We(gb),bb=[9,13,27,32],Us=Qn&&"CompositionEvent"in window,Mo=null;Qn&&"documentMode"in document&&(Mo=document.documentMode);var vb=Qn&&"TextEvent"in window&&!Mo,ud=Qn&&(!Us||Mo&&8<Mo&&11>=Mo),cd=" ",fd=!1;function dd(t,e){switch(t){case"keyup":return bb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function xb(t,e){switch(t){case"compositionend":return hd(e);case"keypress":return e.which!==32?null:(fd=!0,cd);case"textInput":return t=e.data,t===cd&&fd?null:t;default:return null}}function Sb(t,e){if(Ti)return t==="compositionend"||!Us&&dd(t,e)?(t=id(),Yl=ks=ma=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ud&&e.locale!=="ko"?null:e.data;default:return null}}var Tb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tb[t.type]:e==="textarea"}function md(t,e,n,o){xi?Si?Si.push(o):Si=[o]:xi=o,e=jr(e,"onChange"),0<e.length&&(n=new Ql("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var Eo=null,wo=null;function Ab(t){F0(t,0)}function Fl(t){var e=je(t);if(yi(e))return t}function gd(t,e){if(t==="change")return e}var yd=!1;if(Qn){var Bs;if(Qn){var Ls="oninput"in document;if(!Ls){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Ls=typeof bd.oninput=="function"}Bs=Ls}else Bs=!1;yd=Bs&&(!document.documentMode||9<document.documentMode)}function vd(){Eo&&(Eo.detachEvent("onpropertychange",xd),wo=Eo=null)}function xd(t){if(t.propertyName==="value"&&Fl(wo)){var e=[];md(e,wo,t,Rs(t)),ad(Ab,e)}}function Db(t,e,n){t==="focusin"?(vd(),Eo=e,wo=n,Eo.attachEvent("onpropertychange",xd)):t==="focusout"&&vd()}function Ob(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(wo)}function Mb(t,e){if(t==="click")return Fl(e)}function Eb(t,e){if(t==="input"||t==="change")return Fl(e)}function wb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:wb;function Ro(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Ft.call(e,r)||!on(t[r],e[r]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,e){var n=Sd(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Sd(n)}}function Ad(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ad(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ya(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ya(t.document)}return e}function Hs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Rb=Qn&&"documentMode"in document&&11>=document.documentMode,Ai=null,qs=null,Co=null,Ps=!1;function Od(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ps||Ai==null||Ai!==Ya(o)||(o=Ai,"selectionStart"in o&&Hs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Co&&Ro(Co,o)||(Co=o,o=jr(qs,"onSelect"),0<o.length&&(e=new Ql("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=Ai)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},Xs={},Md={};Qn&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Qa(t){if(Xs[t])return Xs[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Md)return Xs[t]=e[n];return t}var Ed=Qa("animationend"),wd=Qa("animationiteration"),Rd=Qa("animationstart"),Cb=Qa("transitionrun"),zb=Qa("transitionstart"),kb=Qa("transitioncancel"),Cd=Qa("transitionend"),zd=new Map,Ys="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ys.push("scrollEnd");function Mn(t,e){zd.set(t,e),Zn(e,[t])}var kd=new WeakMap;function mn(t,e){if(typeof t=="object"&&t!==null){var n=kd.get(t);return n!==void 0?n:(e={value:t,source:e,stack:zt(e)},kd.set(t,e),e)}return{value:t,source:e,stack:zt(e)}}var gn=[],Oi=0,Gs=0;function Jl(){for(var t=Oi,e=Gs=Oi=0;e<t;){var n=gn[e];gn[e++]=null;var o=gn[e];gn[e++]=null;var r=gn[e];gn[e++]=null;var u=gn[e];if(gn[e++]=null,o!==null&&r!==null){var p=o.pending;p===null?r.next=r:(r.next=p.next,p.next=r),o.pending=r}u!==0&&Nd(n,r,u)}}function Wl(t,e,n,o){gn[Oi++]=t,gn[Oi++]=e,gn[Oi++]=n,gn[Oi++]=o,Gs|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Zs(t,e,n,o){return Wl(t,e,n,o),$l(t)}function Mi(t,e){return Wl(t,null,null,e),$l(t)}function Nd(t,e,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var r=!1,u=t.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(r=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,r&&e!==null&&(r=31-Le(n),t=u.hiddenUpdates,o=t[r],o===null?t[r]=[e]:o.push(e),e.lane=n|536870912),u):null}function $l(t){if(50<el)throw el=0,$u=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ei={};function Nb(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,o){return new Nb(t,e,n,o)}function Qs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Kn(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function jd(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Il(t,e,n,o,r,u){var p=0;if(o=t,typeof t=="function")Qs(t)&&(p=1);else if(typeof t=="string")p=_v(t,n,rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case lt:return t=ln(31,n,e,r),t.elementType=lt,t.lanes=u,t;case M:return Ka(n.children,r,u,e);case O:p=8,r|=24;break;case j:return t=ln(12,n,e,r|2),t.elementType=j,t.lanes=u,t;case P:return t=ln(13,n,e,r),t.elementType=P,t.lanes=u,t;case F:return t=ln(19,n,e,r),t.elementType=F,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:case q:p=10;break t;case Y:p=9;break t;case W:p=11;break t;case Q:p=14;break t;case G:p=16,o=null;break t}p=29,n=Error(s(130,t===null?"null":typeof t,"")),o=null}return e=ln(p,n,e,r),e.elementType=t,e.type=o,e.lanes=u,e}function Ka(t,e,n,o){return t=ln(7,t,o,e),t.lanes=n,t}function Ks(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function Fs(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var wi=[],Ri=0,tr=null,er=0,yn=[],bn=0,Fa=null,Fn=1,Jn="";function Ja(t,e){wi[Ri++]=er,wi[Ri++]=tr,tr=t,er=e}function _d(t,e,n){yn[bn++]=Fn,yn[bn++]=Jn,yn[bn++]=Fa,Fa=t;var o=Fn;t=Jn;var r=32-Le(o)-1;o&=~(1<<r),n+=1;var u=32-Le(e)+r;if(30<u){var p=r-r%5;u=(o&(1<<p)-1).toString(32),o>>=p,r-=p,Fn=1<<32-Le(e)+r|n<<r|o,Jn=u+t}else Fn=1<<u|n<<r|o,Jn=t}function Js(t){t.return!==null&&(Ja(t,1),_d(t,1,0))}function Ws(t){for(;t===tr;)tr=wi[--Ri],wi[Ri]=null,er=wi[--Ri],wi[Ri]=null;for(;t===Fa;)Fa=yn[--bn],yn[bn]=null,Jn=yn[--bn],yn[bn]=null,Fn=yn[--bn],yn[bn]=null}var Ke=null,le=null,Vt=!1,Wa=null,Un=!1,$s=Error(s(519));function $a(t){var e=Error(s(418,""));throw No(mn(e,t)),$s}function Vd(t){var e=t.stateNode,n=t.type,o=t.memoizedProps;switch(e[Oe]=t,e[qe]=o,n){case"dialog":Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":case"embed":Mt("load",e);break;case"video":case"audio":for(n=0;n<al.length;n++)Mt(al[n],e);break;case"source":Mt("error",e);break;case"img":case"image":case"link":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"input":Mt("invalid",e),Xe(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Vn(e);break;case"select":Mt("invalid",e);break;case"textarea":Mt("invalid",e),If(e,o.value,o.defaultValue,o.children),Vn(e)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||o.suppressHydrationWarning===!0||I0(e.textContent,n)?(o.popover!=null&&(Mt("beforetoggle",e),Mt("toggle",e)),o.onScroll!=null&&Mt("scroll",e),o.onScrollEnd!=null&&Mt("scrollend",e),o.onClick!=null&&(e.onclick=_r),e=!0):e=!1,e||$a(t)}function Ud(t){for(Ke=t.return;Ke;)switch(Ke.tag){case 5:case 13:Un=!1;return;case 27:case 3:Un=!0;return;default:Ke=Ke.return}}function zo(t){if(t!==Ke)return!1;if(!Vt)return Ud(t),Vt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||pc(t.type,t.memoizedProps)),n=!n),n&&le&&$a(t),Ud(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){le=wn(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}le=null}}else e===27?(e=le,za(t.type)?(t=bc,bc=null,le=t):le=e):le=Ke?wn(t.stateNode.nextSibling):null;return!0}function ko(){le=Ke=null,Vt=!1}function Bd(){var t=Wa;return t!==null&&(tn===null?tn=t:tn.push.apply(tn,t),Wa=null),t}function No(t){Wa===null?Wa=[t]:Wa.push(t)}var Is=H(null),Ia=null,Wn=null;function ga(t,e,n){J(Is,e._currentValue),e._currentValue=n}function $n(t){t._currentValue=Is.current,I(Is)}function tu(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function eu(t,e,n,o){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var u=r.dependencies;if(u!==null){var p=r.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=r;for(var S=0;S<e.length;S++)if(b.context===e[S]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),tu(u.return,n,t),o||(p=null);break t}u=b.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(s(341));p.lanes|=n,u=p.alternate,u!==null&&(u.lanes|=n),tu(p,n,t),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===t){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function jo(t,e,n,o){t=null;for(var r=e,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var b=r.type;on(r.pendingProps.value,p.value)||(t!==null?t.push(b):t=[b])}}else if(r===Ht.current){if(p=r.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}r=r.return}t!==null&&eu(e,t,n,o),e.flags|=262144}function nr(t){for(t=t.firstContext;t!==null;){if(!on(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ti(t){Ia=t,Wn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ye(t){return Ld(Ia,t)}function ar(t,e){return Ia===null&&ti(t),Ld(t,e)}function Ld(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Wn===null){if(t===null)throw Error(s(308));Wn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Wn=Wn.next=e;return n}var jb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},_b=a.unstable_scheduleCallback,Vb=a.unstable_NormalPriority,Te={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nu(){return{controller:new jb,data:new Map,refCount:0}}function _o(t){t.refCount--,t.refCount===0&&_b(Vb,function(){t.controller.abort()})}var Vo=null,au=0,Ci=0,zi=null;function Ub(t,e){if(Vo===null){var n=Vo=[];au=0,Ci=oc(),zi={status:"pending",value:void 0,then:function(o){n.push(o)}}}return au++,e.then(Hd,Hd),e}function Hd(){if(--au===0&&Vo!==null){zi!==null&&(zi.status="fulfilled");var t=Vo;Vo=null,Ci=0,zi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Bb(t,e){var n=[],o={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(o.status="rejected",o.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),o}var qd=N.S;N.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ub(t,e),qd!==null&&qd(t,e)};var ei=H(null);function iu(){var t=ei.current;return t!==null?t:$t.pooledCache}function ir(t,e){e===null?J(ei,ei.current):J(ei,e.pool)}function Pd(){var t=iu();return t===null?null:{parent:Te._currentValue,pool:t}}var Uo=Error(s(460)),Xd=Error(s(474)),or=Error(s(542)),ou={then:function(){}};function Yd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function lr(){}function Gd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(lr,lr),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Qd(t),t;default:if(typeof e.status=="string")e.then(lr,lr);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=o}},function(o){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Qd(t),t}throw Bo=e,Uo}}var Bo=null;function Zd(){if(Bo===null)throw Error(s(459));var t=Bo;return Bo=null,t}function Qd(t){if(t===Uo||t===or)throw Error(s(483))}var ya=!1;function lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ru(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(qt&2)!==0){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,e=$l(t),Nd(t,null,n),e}return Wl(t,o,e,n),$l(t)}function Lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,mo(t,n)}}function su(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=p:u=u.next=p,n=n.next}while(n!==null);u===null?r=u=e:u=u.next=e}else r=u=e;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var uu=!1;function Ho(){if(uu){var t=zi;if(t!==null)throw t}}function qo(t,e,n,o){uu=!1;var r=t.updateQueue;ya=!1;var u=r.firstBaseUpdate,p=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var S=b,C=S.next;S.next=null,p===null?u=C:p.next=C,p=S;var _=t.alternate;_!==null&&(_=_.updateQueue,b=_.lastBaseUpdate,b!==p&&(b===null?_.firstBaseUpdate=C:b.next=C,_.lastBaseUpdate=S))}if(u!==null){var L=r.baseState;p=0,_=C=S=null,b=u;do{var z=b.lane&-536870913,k=z!==b.lane;if(k?(kt&z)===z:(o&z)===z){z!==0&&z===Ci&&(uu=!0),_!==null&&(_=_.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var pt=t,ct=b;z=e;var Zt=n;switch(ct.tag){case 1:if(pt=ct.payload,typeof pt=="function"){L=pt.call(Zt,L,z);break t}L=pt;break t;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=ct.payload,z=typeof pt=="function"?pt.call(Zt,L,z):pt,z==null)break t;L=y({},L,z);break t;case 2:ya=!0}}z=b.callback,z!==null&&(t.flags|=64,k&&(t.flags|=8192),k=r.callbacks,k===null?r.callbacks=[z]:k.push(z))}else k={lane:z,tag:b.tag,payload:b.payload,callback:b.callback,next:null},_===null?(C=_=k,S=L):_=_.next=k,p|=z;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;k=b,b=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);_===null&&(S=L),r.baseState=S,r.firstBaseUpdate=C,r.lastBaseUpdate=_,u===null&&(r.shared.lanes=0),Ea|=p,t.lanes=p,t.memoizedState=L}}function Kd(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Fd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Kd(n[t],e)}var ki=H(null),rr=H(0);function Jd(t,e){t=oa,J(rr,t),J(ki,e),oa=t|e.baseLanes}function cu(){J(rr,oa),J(ki,ki.current)}function fu(){oa=rr.current,I(ki),I(rr)}var xa=0,St=null,Yt=null,me=null,sr=!1,Ni=!1,ni=!1,ur=0,Po=0,ji=null,Lb=0;function ce(){throw Error(s(321))}function du(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function hu(t,e,n,o,r,u){return xa=u,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?Nh:jh,ni=!1,u=n(o,r),ni=!1,Ni&&(u=$d(e,n,o,r)),Wd(t),u}function Wd(t){N.H=mr;var e=Yt!==null&&Yt.next!==null;if(xa=0,me=Yt=St=null,sr=!1,Po=0,ji=null,e)throw Error(s(300));t===null||Ee||(t=t.dependencies,t!==null&&nr(t)&&(Ee=!0))}function $d(t,e,n,o){St=t;var r=0;do{if(Ni&&(ji=null),Po=0,Ni=!1,25<=r)throw Error(s(301));if(r+=1,me=Yt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}N.H=Zb,u=e(n,o)}while(Ni);return u}function Hb(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?Xo(e):e,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(St.flags|=1024),e}function pu(){var t=ur!==0;return ur=0,t}function mu(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function gu(t){if(sr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}sr=!1}xa=0,me=Yt=St=null,Ni=!1,Po=ur=0,ji=null}function $e(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?St.memoizedState=me=t:me=me.next=t,me}function ge(){if(Yt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var e=me===null?St.memoizedState:me.next;if(e!==null)me=e,Yt=t;else{if(t===null)throw St.alternate===null?Error(s(467)):Error(s(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},me===null?St.memoizedState=me=t:me=me.next=t}return me}function yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var e=Po;return Po+=1,ji===null&&(ji=[]),t=Gd(ji,t,e),e=St,(me===null?e.memoizedState:me.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?Nh:jh),t}function cr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===q)return Ye(t)}throw Error(s(438,String(t)))}function bu(t){var e=null,n=St.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var o=St.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=yu(),St.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),o=0;o<t;o++)n[o]=ft;return e.index++,n}function In(t,e){return typeof e=="function"?e(t):e}function fr(t){var e=ge();return vu(e,Yt,t)}function vu(t,e,n){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var r=t.baseQueue,u=o.pending;if(u!==null){if(r!==null){var p=r.next;r.next=u.next,u.next=p}e.baseQueue=r=u,o.pending=null}if(u=t.baseState,r===null)t.memoizedState=u;else{e=r.next;var b=p=null,S=null,C=e,_=!1;do{var L=C.lane&-536870913;if(L!==C.lane?(kt&L)===L:(xa&L)===L){var z=C.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),L===Ci&&(_=!0);else if((xa&z)===z){C=C.next,z===Ci&&(_=!0);continue}else L={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(b=S=L,p=u):S=S.next=L,St.lanes|=z,Ea|=z;L=C.action,ni&&n(u,L),u=C.hasEagerState?C.eagerState:n(u,L)}else z={lane:L,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(b=S=z,p=u):S=S.next=z,St.lanes|=L,Ea|=L;C=C.next}while(C!==null&&C!==e);if(S===null?p=u:S.next=b,!on(u,t.memoizedState)&&(Ee=!0,_&&(n=zi,n!==null)))throw n;t.memoizedState=u,t.baseState=p,t.baseQueue=S,o.lastRenderedState=u}return r===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function xu(t){var e=ge(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var o=n.dispatch,r=n.pending,u=e.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do u=t(u,p.action),p=p.next;while(p!==r);on(u,e.memoizedState)||(Ee=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,o]}function Id(t,e,n){var o=St,r=ge(),u=Vt;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var p=!on((Yt||r).memoizedState,n);p&&(r.memoizedState=n,Ee=!0),r=r.queue;var b=nh.bind(null,o,r,t);if(Yo(2048,8,b,[t]),r.getSnapshot!==e||p||me!==null&&me.memoizedState.tag&1){if(o.flags|=2048,_i(9,dr(),eh.bind(null,o,r,n,e),null),$t===null)throw Error(s(349));u||(xa&124)!==0||th(o,e,n)}return n}function th(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e=yu(),St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eh(t,e,n,o){e.value=n,e.getSnapshot=o,ah(e)&&ih(t)}function nh(t,e,n){return n(function(){ah(e)&&ih(t)})}function ah(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function ih(t){var e=Mi(t,2);e!==null&&fn(e,t,2)}function Su(t){var e=$e();if(typeof t=="function"){var n=t;if(t=n(),ni){hn(!0);try{n()}finally{hn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:t},e}function oh(t,e,n,o){return t.baseState=n,vu(t,Yt,typeof o=="function"?o:In)}function qb(t,e,n,o,r){if(pr(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};N.T!==null?n(!0):u.isTransition=!1,o(u),n=e.pending,n===null?(u.next=e.pending=u,lh(e,u)):(u.next=n.next,e.pending=n.next=u)}}function lh(t,e){var n=e.action,o=e.payload,r=t.state;if(e.isTransition){var u=N.T,p={};N.T=p;try{var b=n(r,o),S=N.S;S!==null&&S(p,b),rh(t,e,b)}catch(C){Tu(t,e,C)}finally{N.T=u}}else try{u=n(r,o),rh(t,e,u)}catch(C){Tu(t,e,C)}}function rh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){sh(t,e,o)},function(o){return Tu(t,e,o)}):sh(t,e,n)}function sh(t,e,n){e.status="fulfilled",e.value=n,uh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,lh(t,n)))}function Tu(t,e,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=n,uh(e),e=e.next;while(e!==o)}t.action=null}function uh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ch(t,e){return e}function fh(t,e){if(Vt){var n=$t.formState;if(n!==null){t:{var o=St;if(Vt){if(le){e:{for(var r=le,u=Un;r.nodeType!==8;){if(!u){r=null;break e}if(r=wn(r.nextSibling),r===null){r=null;break e}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){le=wn(r.nextSibling),o=r.data==="F!";break t}}$a(o)}o=!1}o&&(e=n[0])}}return n=$e(),n.memoizedState=n.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ch,lastRenderedState:e},n.queue=o,n=Ch.bind(null,St,o),o.dispatch=n,o=Su(!1),u=Eu.bind(null,St,!1,o.queue),o=$e(),r={state:e,dispatch:null,action:t,pending:null},o.queue=r,n=qb.bind(null,St,r,u,n),r.dispatch=n,o.memoizedState=t,[e,n,!1]}function dh(t){var e=ge();return hh(e,Yt,t)}function hh(t,e,n){if(e=vu(t,e,ch)[0],t=fr(In)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Xo(e)}catch(p){throw p===Uo?or:p}else o=e;e=ge();var r=e.queue,u=r.dispatch;return n!==e.memoizedState&&(St.flags|=2048,_i(9,dr(),Pb.bind(null,r,n),null)),[o,u,t]}function Pb(t,e){t.action=e}function ph(t){var e=ge(),n=Yt;if(n!==null)return hh(e,n,t);ge(),e=e.memoizedState,n=ge();var o=n.queue.dispatch;return n.memoizedState=t,[e,o,!1]}function _i(t,e,n,o){return t={tag:t,create:n,deps:o,inst:e,next:null},e=St.updateQueue,e===null&&(e=yu(),St.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t),t}function dr(){return{destroy:void 0,resource:void 0}}function mh(){return ge().memoizedState}function hr(t,e,n,o){var r=$e();o=o===void 0?null:o,St.flags|=t,r.memoizedState=_i(1|e,dr(),n,o)}function Yo(t,e,n,o){var r=ge();o=o===void 0?null:o;var u=r.memoizedState.inst;Yt!==null&&o!==null&&du(o,Yt.memoizedState.deps)?r.memoizedState=_i(e,u,n,o):(St.flags|=t,r.memoizedState=_i(1|e,u,n,o))}function gh(t,e){hr(8390656,8,t,e)}function yh(t,e){Yo(2048,8,t,e)}function bh(t,e){return Yo(4,2,t,e)}function vh(t,e){return Yo(4,4,t,e)}function xh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sh(t,e,n){n=n!=null?n.concat([t]):null,Yo(4,4,xh.bind(null,e,t),n)}function Au(){}function Th(t,e){var n=ge();e=e===void 0?null:e;var o=n.memoizedState;return e!==null&&du(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function Ah(t,e){var n=ge();e=e===void 0?null:e;var o=n.memoizedState;if(e!==null&&du(e,o[1]))return o[0];if(o=t(),ni){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[o,e],o}function Du(t,e,n){return n===void 0||(xa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=M0(),St.lanes|=t,Ea|=t,n)}function Dh(t,e,n,o){return on(n,e)?n:ki.current!==null?(t=Du(t,n,o),on(t,e)||(Ee=!0),t):(xa&42)===0?(Ee=!0,t.memoizedState=n):(t=M0(),St.lanes|=t,Ea|=t,e)}function Oh(t,e,n,o,r){var u=Z.p;Z.p=u!==0&&8>u?u:8;var p=N.T,b={};N.T=b,Eu(t,!1,e,n);try{var S=r(),C=N.S;if(C!==null&&C(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var _=Bb(S,o);Go(t,e,_,cn(t))}else Go(t,e,o,cn(t))}catch(L){Go(t,e,{then:function(){},status:"rejected",reason:L},cn())}finally{Z.p=u,N.T=p}}function Xb(){}function Ou(t,e,n,o){if(t.tag!==5)throw Error(s(476));var r=Mh(t).queue;Oh(t,r,e,$,n===null?Xb:function(){return Eh(t),n(o)})}function Mh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:$},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Eh(t){var e=Mh(t).next.queue;Go(t,e,{},cn())}function Mu(){return Ye(ul)}function wh(){return ge().memoizedState}function Rh(){return ge().memoizedState}function Yb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=cn();t=ba(n);var o=va(e,t,n);o!==null&&(fn(o,e,n),Lo(o,e,n)),e={cache:nu()},t.payload=e;return}e=e.return}}function Gb(t,e,n){var o=cn();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},pr(t)?zh(e,n):(n=Zs(t,e,n,o),n!==null&&(fn(n,t,o),kh(n,e,o)))}function Ch(t,e,n){var o=cn();Go(t,e,n,o)}function Go(t,e,n,o){var r={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(pr(t))zh(e,r);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var p=e.lastRenderedState,b=u(p,n);if(r.hasEagerState=!0,r.eagerState=b,on(b,p))return Wl(t,e,r,0),$t===null&&Jl(),!1}catch{}finally{}if(n=Zs(t,e,r,o),n!==null)return fn(n,t,o),kh(n,e,o),!0}return!1}function Eu(t,e,n,o){if(o={lane:2,revertLane:oc(),action:o,hasEagerState:!1,eagerState:null,next:null},pr(t)){if(e)throw Error(s(479))}else e=Zs(t,n,o,2),e!==null&&fn(e,t,2)}function pr(t){var e=t.alternate;return t===St||e!==null&&e===St}function zh(t,e){Ni=sr=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kh(t,e,n){if((n&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,mo(t,n)}}var mr={readContext:Ye,use:cr,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce},Nh={readContext:Ye,use:cr,useCallback:function(t,e){return $e().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:gh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,hr(4194308,4,xh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hr(4194308,4,t,e)},useInsertionEffect:function(t,e){hr(4,2,t,e)},useMemo:function(t,e){var n=$e();e=e===void 0?null:e;var o=t();if(ni){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[o,e],o},useReducer:function(t,e,n){var o=$e();if(n!==void 0){var r=n(e);if(ni){hn(!0);try{n(e)}finally{hn(!1)}}}else r=e;return o.memoizedState=o.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},o.queue=t,t=t.dispatch=Gb.bind(null,St,t),[o.memoizedState,t]},useRef:function(t){var e=$e();return t={current:t},e.memoizedState=t},useState:function(t){t=Su(t);var e=t.queue,n=Ch.bind(null,St,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Au,useDeferredValue:function(t,e){var n=$e();return Du(n,t,e)},useTransition:function(){var t=Su(!1);return t=Oh.bind(null,St,t.queue,!0,!1),$e().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var o=St,r=$e();if(Vt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),$t===null)throw Error(s(349));(kt&124)!==0||th(o,e,n)}r.memoizedState=n;var u={value:n,getSnapshot:e};return r.queue=u,gh(nh.bind(null,o,u,t),[t]),o.flags|=2048,_i(9,dr(),eh.bind(null,o,u,n,e),null),n},useId:function(){var t=$e(),e=$t.identifierPrefix;if(Vt){var n=Jn,o=Fn;n=(o&~(1<<32-Le(o)-1)).toString(32)+n,e="«"+e+"R"+n,n=ur++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Lb++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Mu,useFormState:fh,useActionState:fh,useOptimistic:function(t){var e=$e();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Eu.bind(null,St,!0,n),n.dispatch=e,[t,e]},useMemoCache:bu,useCacheRefresh:function(){return $e().memoizedState=Yb.bind(null,St)}},jh={readContext:Ye,use:cr,useCallback:Th,useContext:Ye,useEffect:yh,useImperativeHandle:Sh,useInsertionEffect:bh,useLayoutEffect:vh,useMemo:Ah,useReducer:fr,useRef:mh,useState:function(){return fr(In)},useDebugValue:Au,useDeferredValue:function(t,e){var n=ge();return Dh(n,Yt.memoizedState,t,e)},useTransition:function(){var t=fr(In)[0],e=ge().memoizedState;return[typeof t=="boolean"?t:Xo(t),e]},useSyncExternalStore:Id,useId:wh,useHostTransitionStatus:Mu,useFormState:dh,useActionState:dh,useOptimistic:function(t,e){var n=ge();return oh(n,Yt,t,e)},useMemoCache:bu,useCacheRefresh:Rh},Zb={readContext:Ye,use:cr,useCallback:Th,useContext:Ye,useEffect:yh,useImperativeHandle:Sh,useInsertionEffect:bh,useLayoutEffect:vh,useMemo:Ah,useReducer:xu,useRef:mh,useState:function(){return xu(In)},useDebugValue:Au,useDeferredValue:function(t,e){var n=ge();return Yt===null?Du(n,t,e):Dh(n,Yt.memoizedState,t,e)},useTransition:function(){var t=xu(In)[0],e=ge().memoizedState;return[typeof t=="boolean"?t:Xo(t),e]},useSyncExternalStore:Id,useId:wh,useHostTransitionStatus:Mu,useFormState:ph,useActionState:ph,useOptimistic:function(t,e){var n=ge();return Yt!==null?oh(n,Yt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:bu,useCacheRefresh:Rh},Vi=null,Zo=0;function gr(t){var e=Zo;return Zo+=1,Vi===null&&(Vi=[]),Gd(Vi,t,e)}function Qo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function yr(t,e){throw e.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function _h(t){var e=t._init;return e(t._payload)}function Vh(t){function e(E,D){if(t){var R=E.deletions;R===null?(E.deletions=[D],E.flags|=16):R.push(D)}}function n(E,D){if(!t)return null;for(;D!==null;)e(E,D),D=D.sibling;return null}function o(E){for(var D=new Map;E!==null;)E.key!==null?D.set(E.key,E):D.set(E.index,E),E=E.sibling;return D}function r(E,D){return E=Kn(E,D),E.index=0,E.sibling=null,E}function u(E,D,R){return E.index=R,t?(R=E.alternate,R!==null?(R=R.index,R<D?(E.flags|=67108866,D):R):(E.flags|=67108866,D)):(E.flags|=1048576,D)}function p(E){return t&&E.alternate===null&&(E.flags|=67108866),E}function b(E,D,R,U){return D===null||D.tag!==6?(D=Ks(R,E.mode,U),D.return=E,D):(D=r(D,R),D.return=E,D)}function S(E,D,R,U){var tt=R.type;return tt===M?_(E,D,R.props.children,U,R.key):D!==null&&(D.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===G&&_h(tt)===D.type)?(D=r(D,R.props),Qo(D,R),D.return=E,D):(D=Il(R.type,R.key,R.props,null,E.mode,U),Qo(D,R),D.return=E,D)}function C(E,D,R,U){return D===null||D.tag!==4||D.stateNode.containerInfo!==R.containerInfo||D.stateNode.implementation!==R.implementation?(D=Fs(R,E.mode,U),D.return=E,D):(D=r(D,R.children||[]),D.return=E,D)}function _(E,D,R,U,tt){return D===null||D.tag!==7?(D=Ka(R,E.mode,U,tt),D.return=E,D):(D=r(D,R),D.return=E,D)}function L(E,D,R){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Ks(""+D,E.mode,R),D.return=E,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case x:return R=Il(D.type,D.key,D.props,null,E.mode,R),Qo(R,D),R.return=E,R;case w:return D=Fs(D,E.mode,R),D.return=E,D;case G:var U=D._init;return D=U(D._payload),L(E,D,R)}if(Kt(D)||Qt(D))return D=Ka(D,E.mode,R,null),D.return=E,D;if(typeof D.then=="function")return L(E,gr(D),R);if(D.$$typeof===q)return L(E,ar(E,D),R);yr(E,D)}return null}function z(E,D,R,U){var tt=D!==null?D.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return tt!==null?null:b(E,D,""+R,U);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return R.key===tt?S(E,D,R,U):null;case w:return R.key===tt?C(E,D,R,U):null;case G:return tt=R._init,R=tt(R._payload),z(E,D,R,U)}if(Kt(R)||Qt(R))return tt!==null?null:_(E,D,R,U,null);if(typeof R.then=="function")return z(E,D,gr(R),U);if(R.$$typeof===q)return z(E,D,ar(E,R),U);yr(E,R)}return null}function k(E,D,R,U,tt){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return E=E.get(R)||null,b(D,E,""+U,tt);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case x:return E=E.get(U.key===null?R:U.key)||null,S(D,E,U,tt);case w:return E=E.get(U.key===null?R:U.key)||null,C(D,E,U,tt);case G:var At=U._init;return U=At(U._payload),k(E,D,R,U,tt)}if(Kt(U)||Qt(U))return E=E.get(R)||null,_(D,E,U,tt,null);if(typeof U.then=="function")return k(E,D,R,gr(U),tt);if(U.$$typeof===q)return k(E,D,R,ar(D,U),tt);yr(D,U)}return null}function pt(E,D,R,U){for(var tt=null,At=null,it=D,ht=D=0,Re=null;it!==null&&ht<R.length;ht++){it.index>ht?(Re=it,it=null):Re=it.sibling;var jt=z(E,it,R[ht],U);if(jt===null){it===null&&(it=Re);break}t&&it&&jt.alternate===null&&e(E,it),D=u(jt,D,ht),At===null?tt=jt:At.sibling=jt,At=jt,it=Re}if(ht===R.length)return n(E,it),Vt&&Ja(E,ht),tt;if(it===null){for(;ht<R.length;ht++)it=L(E,R[ht],U),it!==null&&(D=u(it,D,ht),At===null?tt=it:At.sibling=it,At=it);return Vt&&Ja(E,ht),tt}for(it=o(it);ht<R.length;ht++)Re=k(it,E,ht,R[ht],U),Re!==null&&(t&&Re.alternate!==null&&it.delete(Re.key===null?ht:Re.key),D=u(Re,D,ht),At===null?tt=Re:At.sibling=Re,At=Re);return t&&it.forEach(function(Va){return e(E,Va)}),Vt&&Ja(E,ht),tt}function ct(E,D,R,U){if(R==null)throw Error(s(151));for(var tt=null,At=null,it=D,ht=D=0,Re=null,jt=R.next();it!==null&&!jt.done;ht++,jt=R.next()){it.index>ht?(Re=it,it=null):Re=it.sibling;var Va=z(E,it,jt.value,U);if(Va===null){it===null&&(it=Re);break}t&&it&&Va.alternate===null&&e(E,it),D=u(Va,D,ht),At===null?tt=Va:At.sibling=Va,At=Va,it=Re}if(jt.done)return n(E,it),Vt&&Ja(E,ht),tt;if(it===null){for(;!jt.done;ht++,jt=R.next())jt=L(E,jt.value,U),jt!==null&&(D=u(jt,D,ht),At===null?tt=jt:At.sibling=jt,At=jt);return Vt&&Ja(E,ht),tt}for(it=o(it);!jt.done;ht++,jt=R.next())jt=k(it,E,ht,jt.value,U),jt!==null&&(t&&jt.alternate!==null&&it.delete(jt.key===null?ht:jt.key),D=u(jt,D,ht),At===null?tt=jt:At.sibling=jt,At=jt);return t&&it.forEach(function(Qv){return e(E,Qv)}),Vt&&Ja(E,ht),tt}function Zt(E,D,R,U){if(typeof R=="object"&&R!==null&&R.type===M&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case x:t:{for(var tt=R.key;D!==null;){if(D.key===tt){if(tt=R.type,tt===M){if(D.tag===7){n(E,D.sibling),U=r(D,R.props.children),U.return=E,E=U;break t}}else if(D.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===G&&_h(tt)===D.type){n(E,D.sibling),U=r(D,R.props),Qo(U,R),U.return=E,E=U;break t}n(E,D);break}else e(E,D);D=D.sibling}R.type===M?(U=Ka(R.props.children,E.mode,U,R.key),U.return=E,E=U):(U=Il(R.type,R.key,R.props,null,E.mode,U),Qo(U,R),U.return=E,E=U)}return p(E);case w:t:{for(tt=R.key;D!==null;){if(D.key===tt)if(D.tag===4&&D.stateNode.containerInfo===R.containerInfo&&D.stateNode.implementation===R.implementation){n(E,D.sibling),U=r(D,R.children||[]),U.return=E,E=U;break t}else{n(E,D);break}else e(E,D);D=D.sibling}U=Fs(R,E.mode,U),U.return=E,E=U}return p(E);case G:return tt=R._init,R=tt(R._payload),Zt(E,D,R,U)}if(Kt(R))return pt(E,D,R,U);if(Qt(R)){if(tt=Qt(R),typeof tt!="function")throw Error(s(150));return R=tt.call(R),ct(E,D,R,U)}if(typeof R.then=="function")return Zt(E,D,gr(R),U);if(R.$$typeof===q)return Zt(E,D,ar(E,R),U);yr(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,D!==null&&D.tag===6?(n(E,D.sibling),U=r(D,R),U.return=E,E=U):(n(E,D),U=Ks(R,E.mode,U),U.return=E,E=U),p(E)):n(E,D)}return function(E,D,R,U){try{Zo=0;var tt=Zt(E,D,R,U);return Vi=null,tt}catch(it){if(it===Uo||it===or)throw it;var At=ln(29,it,null,E.mode);return At.lanes=U,At.return=E,At}finally{}}}var Ui=Vh(!0),Uh=Vh(!1),vn=H(null),Bn=null;function Sa(t){var e=t.alternate;J(Ae,Ae.current&1),J(vn,t),Bn===null&&(e===null||ki.current!==null||e.memoizedState!==null)&&(Bn=t)}function Bh(t){if(t.tag===22){if(J(Ae,Ae.current),J(vn,t),Bn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Bn=t)}}else Ta()}function Ta(){J(Ae,Ae.current),J(vn,vn.current)}function ta(t){I(vn),Bn===t&&(Bn=null),I(Ae)}var Ae=H(0);function br(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||yc(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function wu(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:y({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ru={enqueueSetState:function(t,e,n){t=t._reactInternals;var o=cn(),r=ba(o);r.payload=e,n!=null&&(r.callback=n),e=va(t,r,o),e!==null&&(fn(e,t,o),Lo(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=cn(),r=ba(o);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=va(t,r,o),e!==null&&(fn(e,t,o),Lo(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),o=ba(n);o.tag=2,e!=null&&(o.callback=e),e=va(t,o,n),e!==null&&(fn(e,t,n),Lo(e,t,n))}};function Lh(t,e,n,o,r,u,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,p):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,o)||!Ro(r,u):!0}function Hh(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&Ru.enqueueReplaceState(e,e.state,null)}function ai(t,e){var n=e;if("ref"in e){n={};for(var o in e)o!=="ref"&&(n[o]=e[o])}if(t=t.defaultProps){n===e&&(n=y({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}var vr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function qh(t){vr(t)}function Ph(t){console.error(t)}function Xh(t){vr(t)}function xr(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Yh(t,e,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Cu(t,e,n){return n=ba(n),n.tag=3,n.payload={element:null},n.callback=function(){xr(t,e)},n}function Gh(t){return t=ba(t),t.tag=3,t}function Zh(t,e,n,o){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=o.value;t.payload=function(){return r(u)},t.callback=function(){Yh(e,n,o)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Yh(e,n,o),typeof r!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Qb(t,e,n,o,r){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=n.alternate,e!==null&&jo(e,n,r,!0),n=vn.current,n!==null){switch(n.tag){case 13:return Bn===null?tc():n.alternate===null&&re===0&&(re=3),n.flags&=-257,n.flags|=65536,n.lanes=r,o===ou?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([o]):e.add(o),nc(t,o,r)),!1;case 22:return n.flags|=65536,o===ou?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([o]):n.add(o)),nc(t,o,r)),!1}throw Error(s(435,n.tag))}return nc(t,o,r),tc(),!1}if(Vt)return e=vn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,o!==$s&&(t=Error(s(422),{cause:o}),No(mn(t,n)))):(o!==$s&&(e=Error(s(423),{cause:o}),No(mn(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,o=mn(o,n),r=Cu(t.stateNode,o,r),su(t,r),re!==4&&(re=2)),!1;var u=Error(s(520),{cause:o});if(u=mn(u,n),tl===null?tl=[u]:tl.push(u),re!==4&&(re=2),e===null)return!0;o=mn(o,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=Cu(n.stateNode,o,t),su(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(wa===null||!wa.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Gh(r),Zh(r,t,n,o),su(n,r),!1}n=n.return}while(n!==null);return!1}var Qh=Error(s(461)),Ee=!1;function _e(t,e,n,o){e.child=t===null?Uh(e,null,n,o):Ui(e,t.child,n,o)}function Kh(t,e,n,o,r){n=n.render;var u=e.ref;if("ref"in o){var p={};for(var b in o)b!=="ref"&&(p[b]=o[b])}else p=o;return ti(e),o=hu(t,e,n,p,u,r),b=pu(),t!==null&&!Ee?(mu(t,e,r),ea(t,e,r)):(Vt&&b&&Js(e),e.flags|=1,_e(t,e,o,r),e.child)}function Fh(t,e,n,o,r){if(t===null){var u=n.type;return typeof u=="function"&&!Qs(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Jh(t,e,u,o,r)):(t=Il(n.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Bu(t,r)){var p=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(p,o)&&t.ref===e.ref)return ea(t,e,r)}return e.flags|=1,t=Kn(u,o),t.ref=e.ref,t.return=e,e.child=t}function Jh(t,e,n,o,r){if(t!==null){var u=t.memoizedProps;if(Ro(u,o)&&t.ref===e.ref)if(Ee=!1,e.pendingProps=o=u,Bu(t,r))(t.flags&131072)!==0&&(Ee=!0);else return e.lanes=t.lanes,ea(t,e,r)}return zu(t,e,n,o,r)}function Wh(t,e,n){var o=e.pendingProps,r=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((e.flags&128)!==0){if(o=u!==null?u.baseLanes|n:n,t!==null){for(r=e.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;e.childLanes=u&~o}else e.childLanes=0,e.child=null;return $h(t,e,o,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ir(e,u!==null?u.cachePool:null),u!==null?Jd(e,u):cu(),Bh(e);else return e.lanes=e.childLanes=536870912,$h(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(ir(e,u.cachePool),Jd(e,u),Ta(),e.memoizedState=null):(t!==null&&ir(e,null),cu(),Ta());return _e(t,e,r,n),e.child}function $h(t,e,n,o){var r=iu();return r=r===null?null:{parent:Te._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&ir(e,null),cu(),Bh(e),t!==null&&jo(t,e,o,!0),null}function Sr(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function zu(t,e,n,o,r){return ti(e),n=hu(t,e,n,o,void 0,r),o=pu(),t!==null&&!Ee?(mu(t,e,r),ea(t,e,r)):(Vt&&o&&Js(e),e.flags|=1,_e(t,e,n,r),e.child)}function Ih(t,e,n,o,r,u){return ti(e),e.updateQueue=null,n=$d(e,o,n,r),Wd(t),o=pu(),t!==null&&!Ee?(mu(t,e,u),ea(t,e,u)):(Vt&&o&&Js(e),e.flags|=1,_e(t,e,n,u),e.child)}function t0(t,e,n,o,r){if(ti(e),e.stateNode===null){var u=Ei,p=n.contextType;typeof p=="object"&&p!==null&&(u=Ye(p)),u=new n(o,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ru,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=o,u.state=e.memoizedState,u.refs={},lu(e),p=n.contextType,u.context=typeof p=="object"&&p!==null?Ye(p):Ei,u.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(wu(e,n,p,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Ru.enqueueReplaceState(u,u.state,null),qo(e,o,u,r),Ho(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,S=ai(n,b);u.props=S;var C=u.context,_=n.contextType;p=Ei,typeof _=="object"&&_!==null&&(p=Ye(_));var L=n.getDerivedStateFromProps;_=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,_||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||C!==p)&&Hh(e,u,o,p),ya=!1;var z=e.memoizedState;u.state=z,qo(e,o,u,r),Ho(),C=e.memoizedState,b||z!==C||ya?(typeof L=="function"&&(wu(e,n,L,o),C=e.memoizedState),(S=ya||Lh(e,n,S,o,z,C,p))?(_||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=C),u.props=o,u.state=C,u.context=p,o=S):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{u=e.stateNode,ru(t,e),p=e.memoizedProps,_=ai(n,p),u.props=_,L=e.pendingProps,z=u.context,C=n.contextType,S=Ei,typeof C=="object"&&C!==null&&(S=Ye(C)),b=n.getDerivedStateFromProps,(C=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==L||z!==S)&&Hh(e,u,o,S),ya=!1,z=e.memoizedState,u.state=z,qo(e,o,u,r),Ho();var k=e.memoizedState;p!==L||z!==k||ya||t!==null&&t.dependencies!==null&&nr(t.dependencies)?(typeof b=="function"&&(wu(e,n,b,o),k=e.memoizedState),(_=ya||Lh(e,n,_,o,z,k,S)||t!==null&&t.dependencies!==null&&nr(t.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,k,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,k,S)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=k),u.props=o,u.state=k,u.context=S,o=_):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),o=!1)}return u=o,Sr(t,e),o=(e.flags&128)!==0,u||o?(u=e.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&o?(e.child=Ui(e,t.child,null,r),e.child=Ui(e,null,n,r)):_e(t,e,n,r),e.memoizedState=u.state,t=e.child):t=ea(t,e,r),t}function e0(t,e,n,o){return ko(),e.flags|=256,_e(t,e,n,o),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nu(t){return{baseLanes:t,cachePool:Pd()}}function ju(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=xn),t}function n0(t,e,n){var o=e.pendingProps,r=!1,u=(e.flags&128)!==0,p;if((p=u)||(p=t!==null&&t.memoizedState===null?!1:(Ae.current&2)!==0),p&&(r=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,t===null){if(Vt){if(r?Sa(e):Ta(),Vt){var b=le,S;if(S=b){t:{for(S=b,b=Un;S.nodeType!==8;){if(!b){b=null;break t}if(S=wn(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(e.memoizedState={dehydrated:b,treeContext:Fa!==null?{id:Fn,overflow:Jn}:null,retryLane:536870912,hydrationErrors:null},S=ln(18,null,null,0),S.stateNode=b,S.return=e,e.child=S,Ke=e,le=null,S=!0):S=!1}S||$a(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return yc(b)?e.lanes=32:e.lanes=536870912,null;ta(e)}return b=o.children,o=o.fallback,r?(Ta(),r=e.mode,b=Tr({mode:"hidden",children:b},r),o=Ka(o,r,n,null),b.return=e,o.return=e,b.sibling=o,e.child=b,r=e.child,r.memoizedState=Nu(n),r.childLanes=ju(t,p,n),e.memoizedState=ku,o):(Sa(e),_u(e,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(u)e.flags&256?(Sa(e),e.flags&=-257,e=Vu(t,e,n)):e.memoizedState!==null?(Ta(),e.child=t.child,e.flags|=128,e=null):(Ta(),r=o.fallback,b=e.mode,o=Tr({mode:"visible",children:o.children},b),r=Ka(r,b,n,null),r.flags|=2,o.return=e,r.return=e,o.sibling=r,e.child=o,Ui(e,t.child,null,n),o=e.child,o.memoizedState=Nu(n),o.childLanes=ju(t,p,n),e.memoizedState=ku,e=r);else if(Sa(e),yc(b)){if(p=b.nextSibling&&b.nextSibling.dataset,p)var C=p.dgst;p=C,o=Error(s(419)),o.stack="",o.digest=p,No({value:o,source:null,stack:null}),e=Vu(t,e,n)}else if(Ee||jo(t,e,n,!1),p=(n&t.childLanes)!==0,Ee||p){if(p=$t,p!==null&&(o=n&-n,o=(o&42)!==0?1:go(o),o=(o&(p.suspendedLanes|n))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,Mi(t,o),fn(p,t,o),Qh;b.data==="$?"||tc(),e=Vu(t,e,n)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,le=wn(b.nextSibling),Ke=e,Vt=!0,Wa=null,Un=!1,t!==null&&(yn[bn++]=Fn,yn[bn++]=Jn,yn[bn++]=Fa,Fn=t.id,Jn=t.overflow,Fa=e),e=_u(e,o.children),e.flags|=4096);return e}return r?(Ta(),r=o.fallback,b=e.mode,S=t.child,C=S.sibling,o=Kn(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,C!==null?r=Kn(C,r):(r=Ka(r,b,n,null),r.flags|=2),r.return=e,o.return=e,o.sibling=r,e.child=o,o=r,r=e.child,b=t.child.memoizedState,b===null?b=Nu(n):(S=b.cachePool,S!==null?(C=Te._currentValue,S=S.parent!==C?{parent:C,pool:C}:S):S=Pd(),b={baseLanes:b.baseLanes|n,cachePool:S}),r.memoizedState=b,r.childLanes=ju(t,p,n),e.memoizedState=ku,o):(Sa(e),n=t.child,t=n.sibling,n=Kn(n,{mode:"visible",children:o.children}),n.return=e,n.sibling=null,t!==null&&(p=e.deletions,p===null?(e.deletions=[t],e.flags|=16):p.push(t)),e.child=n,e.memoizedState=null,n)}function _u(t,e){return e=Tr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Tr(t,e){return t=ln(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Vu(t,e,n){return Ui(e,t.child,null,n),t=_u(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function a0(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),tu(t.return,e,n)}function Uu(t,e,n,o,r){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=r)}function i0(t,e,n){var o=e.pendingProps,r=o.revealOrder,u=o.tail;if(_e(t,e,o.children,n),o=Ae.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a0(t,n,e);else if(t.tag===19)a0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(J(Ae,o),r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&br(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uu(e,!1,r,n,u);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&br(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uu(e,!0,n,null,u);break;case"together":Uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ea(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ea|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(jo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&nr(t)))}function Kb(t,e,n){switch(e.tag){case 3:wt(e,e.stateNode.containerInfo),ga(e,Te,t.memoizedState.cache),ko();break;case 27:case 5:_t(e);break;case 4:wt(e,e.stateNode.containerInfo);break;case 10:ga(e,e.type,e.memoizedProps.value);break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(e),e.flags|=128,null):(n&e.child.childLanes)!==0?n0(t,e,n):(Sa(e),t=ea(t,e,n),t!==null?t.sibling:null);Sa(e);break;case 19:var r=(t.flags&128)!==0;if(o=(n&e.childLanes)!==0,o||(jo(t,e,n,!1),o=(n&e.childLanes)!==0),r){if(o)return i0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(Ae,Ae.current),o)break;return null;case 22:case 23:return e.lanes=0,Wh(t,e,n);case 24:ga(e,Te,t.memoizedState.cache)}return ea(t,e,n)}function o0(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ee=!0;else{if(!Bu(t,n)&&(e.flags&128)===0)return Ee=!1,Kb(t,e,n);Ee=(t.flags&131072)!==0}else Ee=!1,Vt&&(e.flags&1048576)!==0&&_d(e,er,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var o=e.elementType,r=o._init;if(o=r(o._payload),e.type=o,typeof o=="function")Qs(o)?(t=ai(o,t),e.tag=1,e=t0(null,e,o,t,n)):(e.tag=0,e=zu(null,e,o,t,n));else{if(o!=null){if(r=o.$$typeof,r===W){e.tag=11,e=Kh(null,e,o,t,n);break t}else if(r===Q){e.tag=14,e=Fh(null,e,o,t,n);break t}}throw e=he(o)||o,Error(s(306,e,""))}}return e;case 0:return zu(t,e,e.type,e.pendingProps,n);case 1:return o=e.type,r=ai(o,e.pendingProps),t0(t,e,o,r,n);case 3:t:{if(wt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));o=e.pendingProps;var u=e.memoizedState;r=u.element,ru(t,e),qo(e,o,null,n);var p=e.memoizedState;if(o=p.cache,ga(e,Te,o),o!==u.cache&&eu(e,[Te],n,!0),Ho(),o=p.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=e0(t,e,o,n);break t}else if(o!==r){r=mn(Error(s(424)),e),No(r),e=e0(t,e,o,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(le=wn(t.firstChild),Ke=e,Vt=!0,Wa=null,Un=!0,n=Uh(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ko(),o===r){e=ea(t,e,n);break t}_e(t,e,o,n)}e=e.child}return e;case 26:return Sr(t,e),t===null?(n=up(e.type,null,e.pendingProps,null))?e.memoizedState=n:Vt||(n=e.type,t=e.pendingProps,o=Vr(st.current).createElement(n),o[Oe]=e,o[qe]=t,Ue(o,n,t),ue(o),e.stateNode=o):e.memoizedState=up(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return _t(e),t===null&&Vt&&(o=e.stateNode=lp(e.type,e.pendingProps,st.current),Ke=e,Un=!0,r=le,za(e.type)?(bc=r,le=wn(o.firstChild)):le=r),_e(t,e,e.pendingProps.children,n),Sr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Vt&&((r=o=le)&&(o=Tv(o,e.type,e.pendingProps,Un),o!==null?(e.stateNode=o,Ke=e,le=wn(o.firstChild),Un=!1,r=!0):r=!1),r||$a(e)),_t(e),r=e.type,u=e.pendingProps,p=t!==null?t.memoizedProps:null,o=u.children,pc(r,u)?o=null:p!==null&&pc(r,p)&&(e.flags|=32),e.memoizedState!==null&&(r=hu(t,e,Hb,null,null,n),ul._currentValue=r),Sr(t,e),_e(t,e,o,n),e.child;case 6:return t===null&&Vt&&((t=n=le)&&(n=Av(n,e.pendingProps,Un),n!==null?(e.stateNode=n,Ke=e,le=null,t=!0):t=!1),t||$a(e)),null;case 13:return n0(t,e,n);case 4:return wt(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Ui(e,null,o,n):_e(t,e,o,n),e.child;case 11:return Kh(t,e,e.type,e.pendingProps,n);case 7:return _e(t,e,e.pendingProps,n),e.child;case 8:return _e(t,e,e.pendingProps.children,n),e.child;case 12:return _e(t,e,e.pendingProps.children,n),e.child;case 10:return o=e.pendingProps,ga(e,e.type,o.value),_e(t,e,o.children,n),e.child;case 9:return r=e.type._context,o=e.pendingProps.children,ti(e),r=Ye(r),o=o(r),e.flags|=1,_e(t,e,o,n),e.child;case 14:return Fh(t,e,e.type,e.pendingProps,n);case 15:return Jh(t,e,e.type,e.pendingProps,n);case 19:return i0(t,e,n);case 31:return o=e.pendingProps,n=e.mode,o={mode:o.mode,children:o.children},t===null?(n=Tr(o,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Kn(t.child,o),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Wh(t,e,n);case 24:return ti(e),o=Ye(Te),t===null?(r=iu(),r===null&&(r=$t,u=nu(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),e.memoizedState={parent:o,cache:r},lu(e),ga(e,Te,r)):((t.lanes&n)!==0&&(ru(t,e),qo(e,null,null,n),Ho()),r=t.memoizedState,u=e.memoizedState,r.parent!==o?(r={parent:o,cache:o},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),ga(e,Te,o)):(o=u.cache,ga(e,Te,o),o!==r.cache&&eu(e,[Te],n,!0))),_e(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function na(t){t.flags|=4}function l0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!pp(e)){if(e=vn.current,e!==null&&((kt&4194048)===kt?Bn!==null:(kt&62914560)!==kt&&(kt&536870912)===0||e!==Bn))throw Bo=ou,Xd;t.flags|=8192}}function Ar(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?xe():536870912,t.lanes|=e,qi|=e)}function Ko(t,e){if(!Vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function Fb(t,e,n){var o=e.pendingProps;switch(Ws(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(e),null;case 1:return ie(e),null;case 3:return n=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),$n(Te),ze(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(zo(e)?na(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Bd())),ie(e),null;case 26:return n=e.memoizedState,t===null?(na(e),n!==null?(ie(e),l0(e,n)):(ie(e),e.flags&=-16777217)):n?n!==t.memoizedState?(na(e),ie(e),l0(e,n)):(ie(e),e.flags&=-16777217):(t.memoizedProps!==o&&na(e),ie(e),e.flags&=-16777217),null;case 27:It(e),n=st.current;var r=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==o&&na(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return ie(e),null}t=rt.current,zo(e)?Vd(e):(t=lp(r,o,n),e.stateNode=t,na(e))}return ie(e),null;case 5:if(It(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&na(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return ie(e),null}if(t=rt.current,zo(e))Vd(e);else{switch(r=Vr(st.current),t){case 1:t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=r.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?r.createElement("select",{is:o.is}):r.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?r.createElement(n,{is:o.is}):r.createElement(n)}}t[Oe]=e,t[qe]=o;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=t;t:switch(Ue(t,n,o),n){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&na(e)}}return ie(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&na(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(s(166));if(t=st.current,zo(e)){if(t=e.stateNode,n=e.memoizedProps,o=null,r=Ke,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}t[Oe]=e,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||I0(t.nodeValue,n)),t||$a(e)}else t=Vr(t).createTextNode(o),t[Oe]=e,e.stateNode=t}return ie(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=zo(e),o!==null&&o.dehydrated!==null){if(t===null){if(!r)throw Error(s(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[Oe]=e}else ko(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ie(e),r=!1}else r=Bd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(ta(e),e):(ta(e),null)}if(ta(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=o!==null,t=t!==null&&t.memoizedState!==null,n){o=e.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==r&&(o.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Ar(e,e.updateQueue),ie(e),null;case 4:return ze(),t===null&&uc(e.stateNode.containerInfo),ie(e),null;case 10:return $n(e.type),ie(e),null;case 19:if(I(Ae),r=e.memoizedState,r===null)return ie(e),null;if(o=(e.flags&128)!==0,u=r.rendering,u===null)if(o)Ko(r,!1);else{if(re!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=br(t),u!==null){for(e.flags|=128,Ko(r,!1),t=u.updateQueue,e.updateQueue=t,Ar(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)jd(n,t),n=n.sibling;return J(Ae,Ae.current&1|2),e.child}t=t.sibling}r.tail!==null&&Et()>Mr&&(e.flags|=128,o=!0,Ko(r,!1),e.lanes=4194304)}else{if(!o)if(t=br(u),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,Ar(e,t),Ko(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Vt)return ie(e),null}else 2*Et()-r.renderingStartTime>Mr&&n!==536870912&&(e.flags|=128,o=!0,Ko(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Et(),e.sibling=null,t=Ae.current,J(Ae,o?t&1|2:t&1),e):(ie(e),null);case 22:case 23:return ta(e),fu(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(n&536870912)!==0&&(e.flags&128)===0&&(ie(e),e.subtreeFlags&6&&(e.flags|=8192)):ie(e),n=e.updateQueue,n!==null&&Ar(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==n&&(e.flags|=2048),t!==null&&I(ei),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),$n(Te),ie(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Jb(t,e){switch(Ws(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $n(Te),ze(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return It(e),null;case 13:if(ta(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return I(Ae),null;case 4:return ze(),null;case 10:return $n(e.type),null;case 22:case 23:return ta(e),fu(),t!==null&&I(ei),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return $n(Te),null;case 25:return null;default:return null}}function r0(t,e){switch(Ws(e),e.tag){case 3:$n(Te),ze();break;case 26:case 27:case 5:It(e);break;case 4:ze();break;case 13:ta(e);break;case 19:I(Ae);break;case 10:$n(e.type);break;case 22:case 23:ta(e),fu(),t!==null&&I(ei);break;case 24:$n(Te)}}function Fo(t,e){try{var n=e.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var r=o.next;n=r;do{if((n.tag&t)===t){o=void 0;var u=n.create,p=n.inst;o=u(),p.destroy=o}n=n.next}while(n!==r)}}catch(b){Wt(e,e.return,b)}}function Aa(t,e,n){try{var o=e.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var u=r.next;o=u;do{if((o.tag&t)===t){var p=o.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,r=e;var S=n,C=b;try{C()}catch(_){Wt(r,S,_)}}}o=o.next}while(o!==u)}}catch(_){Wt(e,e.return,_)}}function s0(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Fd(e,n)}catch(o){Wt(t,t.return,o)}}}function u0(t,e,n){n.props=ai(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){Wt(t,e,o)}}function Jo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof n=="function"?t.refCleanup=n(o):n.current=o}}catch(r){Wt(t,e,r)}}function Ln(t,e){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(r){Wt(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Wt(t,e,r)}else n.current=null}function c0(t){var e=t.type,n=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break t;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(r){Wt(t,t.return,r)}}function Lu(t,e,n){try{var o=t.stateNode;yv(o,t.type,n,e),o[qe]=e}catch(r){Wt(t,t.return,r)}}function f0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&za(t.type)||t.tag===4}function Hu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_r));else if(o!==4&&(o===27&&za(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}function Dr(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(o===27&&za(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Dr(t,e,n),t=t.sibling;t!==null;)Dr(t,e,n),t=t.sibling}function d0(t){var e=t.stateNode,n=t.memoizedProps;try{for(var o=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);Ue(e,o,n),e[Oe]=t,e[qe]=n}catch(u){Wt(t,t.return,u)}}var aa=!1,fe=!1,Pu=!1,h0=typeof WeakSet=="function"?WeakSet:Set,we=null;function Wb(t,e){if(t=t.containerInfo,dc=Pr,t=Dd(t),Hs(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var p=0,b=-1,S=-1,C=0,_=0,L=t,z=null;e:for(;;){for(var k;L!==n||r!==0&&L.nodeType!==3||(b=p+r),L!==u||o!==0&&L.nodeType!==3||(S=p+o),L.nodeType===3&&(p+=L.nodeValue.length),(k=L.firstChild)!==null;)z=L,L=k;for(;;){if(L===t)break e;if(z===n&&++C===r&&(b=p),z===u&&++_===o&&(S=p),(k=L.nextSibling)!==null)break;L=z,z=L.parentNode}L=k}n=b===-1||S===-1?null:{start:b,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:t,selectionRange:n},Pr=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){switch(e=we,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,r=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var pt=ai(n.type,r,n.elementType===n.type);t=o.getSnapshotBeforeUpdate(pt,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Wt(n,n.return,ct)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)gc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}}function p0(t,e,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Da(t,n),o&4&&Fo(5,n);break;case 1:if(Da(t,n),o&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(p){Wt(n,n.return,p)}else{var r=ai(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Wt(n,n.return,p)}}o&64&&s0(n),o&512&&Jo(n,n.return);break;case 3:if(Da(t,n),o&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Fd(t,e)}catch(p){Wt(n,n.return,p)}}break;case 27:e===null&&o&4&&d0(n);case 26:case 5:Da(t,n),e===null&&o&4&&c0(n),o&512&&Jo(n,n.return);break;case 12:Da(t,n);break;case 13:Da(t,n),o&4&&y0(t,n),o&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=lv.bind(null,n),Dv(t,n))));break;case 22:if(o=n.memoizedState!==null||aa,!o){e=e!==null&&e.memoizedState!==null||fe,r=aa;var u=fe;aa=o,(fe=e)&&!u?Oa(t,n,(n.subtreeFlags&8772)!==0):Da(t,n),aa=r,fe=u}break;case 30:break;default:Da(t,n)}}function m0(t){var e=t.alternate;e!==null&&(t.alternate=null,m0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Pa(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var te=null,Ie=!1;function ia(t,e,n){for(n=n.child;n!==null;)g0(t,e,n),n=n.sibling}function g0(t,e,n){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(ke,n)}catch{}switch(n.tag){case 26:fe||Ln(n,e),ia(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:fe||Ln(n,e);var o=te,r=Ie;za(n.type)&&(te=n.stateNode,Ie=!1),ia(t,e,n),ol(n.stateNode),te=o,Ie=r;break;case 5:fe||Ln(n,e);case 6:if(o=te,r=Ie,te=null,ia(t,e,n),te=o,Ie=r,te!==null)if(Ie)try{(te.nodeType===9?te.body:te.nodeName==="HTML"?te.ownerDocument.body:te).removeChild(n.stateNode)}catch(u){Wt(n,e,u)}else try{te.removeChild(n.stateNode)}catch(u){Wt(n,e,u)}break;case 18:te!==null&&(Ie?(t=te,ip(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),hl(t)):ip(te,n.stateNode));break;case 4:o=te,r=Ie,te=n.stateNode.containerInfo,Ie=!0,ia(t,e,n),te=o,Ie=r;break;case 0:case 11:case 14:case 15:fe||Aa(2,n,e),fe||Aa(4,n,e),ia(t,e,n);break;case 1:fe||(Ln(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"&&u0(n,e,o)),ia(t,e,n);break;case 21:ia(t,e,n);break;case 22:fe=(o=fe)||n.memoizedState!==null,ia(t,e,n),fe=o;break;default:ia(t,e,n)}}function y0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hl(t)}catch(n){Wt(e,e.return,n)}}function $b(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new h0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new h0),e;default:throw Error(s(435,t.tag))}}function Xu(t,e){var n=$b(t);e.forEach(function(o){var r=rv.bind(null,t,o);n.has(o)||(n.add(o),o.then(r,r))})}function rn(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o],u=t,p=e,b=p;t:for(;b!==null;){switch(b.tag){case 27:if(za(b.type)){te=b.stateNode,Ie=!1;break t}break;case 5:te=b.stateNode,Ie=!1;break t;case 3:case 4:te=b.stateNode.containerInfo,Ie=!0;break t}b=b.return}if(te===null)throw Error(s(160));g0(u,p,r),te=null,Ie=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}var En=null;function b0(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:rn(e,t),sn(t),o&4&&(Aa(3,t,t.return),Fo(3,t),Aa(5,t,t.return));break;case 1:rn(e,t),sn(t),o&512&&(fe||n===null||Ln(n,n.return)),o&64&&aa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var r=En;if(rn(e,t),sn(t),o&512&&(fe||n===null||Ln(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){t:{o=t.type,n=t.memoizedProps,r=r.ownerDocument||r;e:switch(o){case"title":u=r.getElementsByTagName("title")[0],(!u||u[da]||u[Oe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(o),r.head.insertBefore(u,r.querySelector("head > title"))),Ue(u,o,n),u[Oe]=t,ue(u),o=u;break t;case"link":var p=dp("link","href",r).get(o+(n.href||""));if(p){for(var b=0;b<p.length;b++)if(u=p[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(b,1);break e}}u=r.createElement(o),Ue(u,o,n),r.head.appendChild(u);break;case"meta":if(p=dp("meta","content",r).get(o+(n.content||""))){for(b=0;b<p.length;b++)if(u=p[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(b,1);break e}}u=r.createElement(o),Ue(u,o,n),r.head.appendChild(u);break;default:throw Error(s(468,o))}u[Oe]=t,ue(u),o=u}t.stateNode=o}else hp(r,t.type,t.stateNode);else t.stateNode=fp(r,o,t.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?hp(r,t.type,t.stateNode):fp(r,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Lu(t,t.memoizedProps,n.memoizedProps)}break;case 27:rn(e,t),sn(t),o&512&&(fe||n===null||Ln(n,n.return)),n!==null&&o&4&&Lu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(rn(e,t),sn(t),o&512&&(fe||n===null||Ln(n,n.return)),t.flags&32){r=t.stateNode;try{vi(r,"")}catch(k){Wt(t,t.return,k)}}o&4&&t.stateNode!=null&&(r=t.memoizedProps,Lu(t,r,n!==null?n.memoizedProps:r)),o&1024&&(Pu=!0);break;case 6:if(rn(e,t),sn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(k){Wt(t,t.return,k)}}break;case 3:if(Lr=null,r=En,En=Ur(e.containerInfo),rn(e,t),En=r,sn(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{hl(e.containerInfo)}catch(k){Wt(t,t.return,k)}Pu&&(Pu=!1,v0(t));break;case 4:o=En,En=Ur(t.stateNode.containerInfo),rn(e,t),sn(t),En=o;break;case 12:rn(e,t),sn(t);break;case 13:rn(e,t),sn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fu=Et()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xu(t,o)));break;case 22:r=t.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,C=aa,_=fe;if(aa=C||r,fe=_||S,rn(e,t),fe=_,aa=C,sn(t),o&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||S||aa||fe||ii(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){S=n=e;try{if(u=S.stateNode,r)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{b=S.stateNode;var L=S.memoizedProps.style,z=L!=null&&L.hasOwnProperty("display")?L.display:null;b.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(k){Wt(S,S.return,k)}}}else if(e.tag===6){if(n===null){S=e;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(k){Wt(S,S.return,k)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Xu(t,n))));break;case 19:rn(e,t),sn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xu(t,o)));break;case 30:break;case 21:break;default:rn(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{for(var n,o=t.return;o!==null;){if(f0(o)){n=o;break}o=o.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,u=Hu(t);Dr(t,u,r);break;case 5:var p=n.stateNode;n.flags&32&&(vi(p,""),n.flags&=-33);var b=Hu(t);Dr(t,b,p);break;case 3:case 4:var S=n.stateNode.containerInfo,C=Hu(t);qu(t,C,S);break;default:throw Error(s(161))}}catch(_){Wt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;v0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Da(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)p0(t,e.alternate,e),e=e.sibling}function ii(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Aa(4,e,e.return),ii(e);break;case 1:Ln(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&u0(e,e.return,n),ii(e);break;case 27:ol(e.stateNode);case 26:case 5:Ln(e,e.return),ii(e);break;case 22:e.memoizedState===null&&ii(e);break;case 30:ii(e);break;default:ii(e)}t=t.sibling}}function Oa(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,r=t,u=e,p=u.flags;switch(u.tag){case 0:case 11:case 15:Oa(r,u,n),Fo(4,u);break;case 1:if(Oa(r,u,n),o=u,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(C){Wt(o,o.return,C)}if(o=u,r=o.updateQueue,r!==null){var b=o.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)Kd(S[r],b)}catch(C){Wt(o,o.return,C)}}n&&p&64&&s0(u),Jo(u,u.return);break;case 27:d0(u);case 26:case 5:Oa(r,u,n),n&&o===null&&p&4&&c0(u),Jo(u,u.return);break;case 12:Oa(r,u,n);break;case 13:Oa(r,u,n),n&&p&4&&y0(r,u);break;case 22:u.memoizedState===null&&Oa(r,u,n),Jo(u,u.return);break;case 30:break;default:Oa(r,u,n)}e=e.sibling}}function Yu(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&_o(n))}function Gu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_o(t))}function Hn(t,e,n,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)x0(t,e,n,o),e=e.sibling}function x0(t,e,n,o){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Hn(t,e,n,o),r&2048&&Fo(9,e);break;case 1:Hn(t,e,n,o);break;case 3:Hn(t,e,n,o),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_o(t)));break;case 12:if(r&2048){Hn(t,e,n,o),t=e.stateNode;try{var u=e.memoizedProps,p=u.id,b=u.onPostCommit;typeof b=="function"&&b(p,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Wt(e,e.return,S)}}else Hn(t,e,n,o);break;case 13:Hn(t,e,n,o);break;case 23:break;case 22:u=e.stateNode,p=e.alternate,e.memoizedState!==null?u._visibility&2?Hn(t,e,n,o):Wo(t,e):u._visibility&2?Hn(t,e,n,o):(u._visibility|=2,Bi(t,e,n,o,(e.subtreeFlags&10256)!==0)),r&2048&&Yu(p,e);break;case 24:Hn(t,e,n,o),r&2048&&Gu(e.alternate,e);break;default:Hn(t,e,n,o)}}function Bi(t,e,n,o,r){for(r=r&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,p=e,b=n,S=o,C=p.flags;switch(p.tag){case 0:case 11:case 15:Bi(u,p,b,S,r),Fo(8,p);break;case 23:break;case 22:var _=p.stateNode;p.memoizedState!==null?_._visibility&2?Bi(u,p,b,S,r):Wo(u,p):(_._visibility|=2,Bi(u,p,b,S,r)),r&&C&2048&&Yu(p.alternate,p);break;case 24:Bi(u,p,b,S,r),r&&C&2048&&Gu(p.alternate,p);break;default:Bi(u,p,b,S,r)}e=e.sibling}}function Wo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,o=e,r=o.flags;switch(o.tag){case 22:Wo(n,o),r&2048&&Yu(o.alternate,o);break;case 24:Wo(n,o),r&2048&&Gu(o.alternate,o);break;default:Wo(n,o)}e=e.sibling}}var $o=8192;function Li(t){if(t.subtreeFlags&$o)for(t=t.child;t!==null;)S0(t),t=t.sibling}function S0(t){switch(t.tag){case 26:Li(t),t.flags&$o&&t.memoizedState!==null&&Uv(En,t.memoizedState,t.memoizedProps);break;case 5:Li(t);break;case 3:case 4:var e=En;En=Ur(t.stateNode.containerInfo),Li(t),En=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=$o,$o=16777216,Li(t),$o=e):Li(t));break;default:Li(t)}}function T0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Io(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];we=o,D0(o,t)}T0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)A0(t),t=t.sibling}function A0(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Or(t)):Io(t);break;default:Io(t)}}function Or(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];we=o,D0(o,t)}T0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Aa(8,e,e.return),Or(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Or(e));break;default:Or(e)}t=t.sibling}}function D0(t,e){for(;we!==null;){var n=we;switch(n.tag){case 0:case 11:case 15:Aa(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:_o(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,we=o;else t:for(n=t;we!==null;){o=we;var r=o.sibling,u=o.return;if(m0(o),o===n){we=null;break t}if(r!==null){r.return=u,we=r;break t}we=u}}}var Ib={getCacheForType:function(t){var e=Ye(Te),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},tv=typeof WeakMap=="function"?WeakMap:Map,qt=0,$t=null,Ot=null,kt=0,Pt=0,un=null,Ma=!1,Hi=!1,Zu=!1,oa=0,re=0,Ea=0,oi=0,Qu=0,xn=0,qi=0,tl=null,tn=null,Ku=!1,Fu=0,Mr=1/0,Er=null,wa=null,Ve=0,Ra=null,Pi=null,Xi=0,Ju=0,Wu=null,O0=null,el=0,$u=null;function cn(){if((qt&2)!==0&&kt!==0)return kt&-kt;if(N.T!==null){var t=Ci;return t!==0?t:oc()}return Bl()}function M0(){xn===0&&(xn=(kt&536870912)===0||Vt?po():536870912);var t=vn.current;return t!==null&&(t.flags|=32),xn}function fn(t,e,n){(t===$t&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(Yi(t,0),Ca(t,kt,xn,!1)),Ne(t,n),((qt&2)===0||t!==$t)&&(t===$t&&((qt&2)===0&&(oi|=n),re===4&&Ca(t,kt,xn,!1)),qn(t))}function E0(t,e,n){if((qt&6)!==0)throw Error(s(327));var o=!n&&(e&124)===0&&(e&t.expiredLanes)===0||He(t,e),r=o?av(t,e):ec(t,e,!0),u=o;do{if(r===0){Hi&&!o&&Ca(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!ev(n)){r=ec(t,e,!1),u=!1;continue}if(r===2){if(u=e,t.errorRecoveryDisabledLanes&u)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;t:{var b=t;r=tl;var S=b.current.memoizedState.isDehydrated;if(S&&(Yi(b,p).flags|=256),p=ec(b,p,!1),p!==2){if(Zu&&!S){b.errorRecoveryDisabledLanes|=u,oi|=u,r=4;break t}u=tn,tn=r,u!==null&&(tn===null?tn=u:tn.push.apply(tn,u))}r=p}if(u=!1,r!==2)continue}}if(r===1){Yi(t,0),Ca(t,e,0,!0);break}t:{switch(o=t,u=r,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Ca(o,e,xn,!Ma);break t;case 2:tn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(r=Fu+300-Et(),10<r)){if(Ca(o,e,xn,!Ma),Tt(o,0,!0)!==0)break t;o.timeoutHandle=np(w0.bind(null,o,n,tn,Er,Ku,e,xn,oi,qi,Ma,u,2,-0,0),r);break t}w0(o,n,tn,Er,Ku,e,xn,oi,qi,Ma,u,0,-0,0)}}break}while(!0);qn(t)}function w0(t,e,n,o,r,u,p,b,S,C,_,L,z,k){if(t.timeoutHandle=-1,L=e.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(sl={stylesheets:null,count:0,unsuspend:Vv},S0(e),L=Bv(),L!==null)){t.cancelPendingCommit=L(_0.bind(null,t,e,u,n,o,r,p,b,S,_,1,z,k)),Ca(t,u,p,!C);return}_0(t,e,u,n,o,r,p,b,S)}function ev(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var r=n[o],u=r.getSnapshot;r=r.value;try{if(!on(u(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ca(t,e,n,o){e&=~Qu,e&=~oi,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var r=e;0<r;){var u=31-Le(r),p=1<<u;o[u]=-1,r&=~p}n!==0&&mi(t,n,e)}function wr(){return(qt&6)===0?(nl(0),!1):!0}function Iu(){if(Ot!==null){if(Pt===0)var t=Ot.return;else t=Ot,Wn=Ia=null,gu(t),Vi=null,Zo=0,t=Ot;for(;t!==null;)r0(t.alternate,t),t=t.return;Ot=null}}function Yi(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,vv(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Iu(),$t=t,Ot=n=Kn(t.current,null),kt=e,Pt=0,un=null,Ma=!1,Hi=He(t,e),Zu=!1,qi=xn=Qu=oi=Ea=re=0,tn=tl=null,Ku=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var r=31-Le(o),u=1<<r;e|=t[r],o&=~u}return oa=e,Jl(),n}function R0(t,e){St=null,N.H=mr,e===Uo||e===or?(e=Zd(),Pt=3):e===Xd?(e=Zd(),Pt=4):Pt=e===Qh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,un=e,Ot===null&&(re=1,xr(t,mn(e,t.current)))}function C0(){var t=N.H;return N.H=mr,t===null?mr:t}function z0(){var t=N.A;return N.A=Ib,t}function tc(){re=4,Ma||(kt&4194048)!==kt&&vn.current!==null||(Hi=!0),(Ea&134217727)===0&&(oi&134217727)===0||$t===null||Ca($t,kt,xn,!1)}function ec(t,e,n){var o=qt;qt|=2;var r=C0(),u=z0();($t!==t||kt!==e)&&(Er=null,Yi(t,e)),e=!1;var p=re;t:do try{if(Pt!==0&&Ot!==null){var b=Ot,S=un;switch(Pt){case 8:Iu(),p=6;break t;case 3:case 2:case 9:case 6:vn.current===null&&(e=!0);var C=Pt;if(Pt=0,un=null,Gi(t,b,S,C),n&&Hi){p=0;break t}break;default:C=Pt,Pt=0,un=null,Gi(t,b,S,C)}}nv(),p=re;break}catch(_){R0(t,_)}while(!0);return e&&t.shellSuspendCounter++,Wn=Ia=null,qt=o,N.H=r,N.A=u,Ot===null&&($t=null,kt=0,Jl()),p}function nv(){for(;Ot!==null;)k0(Ot)}function av(t,e){var n=qt;qt|=2;var o=C0(),r=z0();$t!==t||kt!==e?(Er=null,Mr=Et()+500,Yi(t,e)):Hi=He(t,e);t:do try{if(Pt!==0&&Ot!==null){e=Ot;var u=un;e:switch(Pt){case 1:Pt=0,un=null,Gi(t,e,u,1);break;case 2:case 9:if(Yd(u)){Pt=0,un=null,N0(e);break}e=function(){Pt!==2&&Pt!==9||$t!==t||(Pt=7),qn(t)},u.then(e,e);break t;case 3:Pt=7;break t;case 4:Pt=5;break t;case 7:Yd(u)?(Pt=0,un=null,N0(e)):(Pt=0,un=null,Gi(t,e,u,7));break;case 5:var p=null;switch(Ot.tag){case 26:p=Ot.memoizedState;case 5:case 27:var b=Ot;if(!p||pp(p)){Pt=0,un=null;var S=b.sibling;if(S!==null)Ot=S;else{var C=b.return;C!==null?(Ot=C,Rr(C)):Ot=null}break e}}Pt=0,un=null,Gi(t,e,u,5);break;case 6:Pt=0,un=null,Gi(t,e,u,6);break;case 8:Iu(),re=6;break t;default:throw Error(s(462))}}iv();break}catch(_){R0(t,_)}while(!0);return Wn=Ia=null,N.H=o,N.A=r,qt=n,Ot!==null?0:($t=null,kt=0,Jl(),re)}function iv(){for(;Ot!==null&&!Dt();)k0(Ot)}function k0(t){var e=o0(t.alternate,t,oa);t.memoizedProps=t.pendingProps,e===null?Rr(t):Ot=e}function N0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ih(n,e,e.pendingProps,e.type,void 0,kt);break;case 11:e=Ih(n,e,e.pendingProps,e.type.render,e.ref,kt);break;case 5:gu(e);default:r0(n,e),e=Ot=jd(e,oa),e=o0(n,e,oa)}t.memoizedProps=t.pendingProps,e===null?Rr(t):Ot=e}function Gi(t,e,n,o){Wn=Ia=null,gu(e),Vi=null,Zo=0;var r=e.return;try{if(Qb(t,r,e,n,kt)){re=1,xr(t,mn(n,t.current)),Ot=null;return}}catch(u){if(r!==null)throw Ot=r,u;re=1,xr(t,mn(n,t.current)),Ot=null;return}e.flags&32768?(Vt||o===1?t=!0:Hi||(kt&536870912)!==0?t=!1:(Ma=t=!0,(o===2||o===9||o===3||o===6)&&(o=vn.current,o!==null&&o.tag===13&&(o.flags|=16384))),j0(e,t)):Rr(e)}function Rr(t){var e=t;do{if((e.flags&32768)!==0){j0(e,Ma);return}t=e.return;var n=Fb(e.alternate,e,oa);if(n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);re===0&&(re=5)}function j0(t,e){do{var n=Jb(t.alternate,t);if(n!==null){n.flags&=32767,Ot=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Ot=t;return}Ot=t=n}while(t!==null);re=6,Ot=null}function _0(t,e,n,o,r,u,p,b,S){t.cancelPendingCommit=null;do Cr();while(Ve!==0);if((qt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Gs,Ts(t,n,u,p,b,S),t===$t&&(Ot=$t=null,kt=0),Pi=e,Ra=t,Xi=n,Ju=u,Wu=r,O0=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sv(be,function(){return H0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,r=Z.p,Z.p=2,p=qt,qt|=4;try{Wb(t,e,n)}finally{qt=p,Z.p=r,N.T=o}}Ve=1,V0(),U0(),B0()}}function V0(){if(Ve===1){Ve=0;var t=Ra,e=Pi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var o=Z.p;Z.p=2;var r=qt;qt|=4;try{b0(e,t);var u=hc,p=Dd(t.containerInfo),b=u.focusedElem,S=u.selectionRange;if(p!==b&&b&&b.ownerDocument&&Ad(b.ownerDocument.documentElement,b)){if(S!==null&&Hs(b)){var C=S.start,_=S.end;if(_===void 0&&(_=C),"selectionStart"in b)b.selectionStart=C,b.selectionEnd=Math.min(_,b.value.length);else{var L=b.ownerDocument||document,z=L&&L.defaultView||window;if(z.getSelection){var k=z.getSelection(),pt=b.textContent.length,ct=Math.min(S.start,pt),Zt=S.end===void 0?ct:Math.min(S.end,pt);!k.extend&&ct>Zt&&(p=Zt,Zt=ct,ct=p);var E=Td(b,ct),D=Td(b,Zt);if(E&&D&&(k.rangeCount!==1||k.anchorNode!==E.node||k.anchorOffset!==E.offset||k.focusNode!==D.node||k.focusOffset!==D.offset)){var R=L.createRange();R.setStart(E.node,E.offset),k.removeAllRanges(),ct>Zt?(k.addRange(R),k.extend(D.node,D.offset)):(R.setEnd(D.node,D.offset),k.addRange(R))}}}}for(L=[],k=b;k=k.parentNode;)k.nodeType===1&&L.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<L.length;b++){var U=L[b];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Pr=!!dc,hc=dc=null}finally{qt=r,Z.p=o,N.T=n}}t.current=e,Ve=2}}function U0(){if(Ve===2){Ve=0;var t=Ra,e=Pi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var o=Z.p;Z.p=2;var r=qt;qt|=4;try{p0(t,e.alternate,e)}finally{qt=r,Z.p=o,N.T=n}}Ve=3}}function B0(){if(Ve===4||Ve===3){Ve=0,Rt();var t=Ra,e=Pi,n=Xi,o=O0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ve=5:(Ve=0,Pi=Ra=null,L0(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(wa=null),yo(n),e=e.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(ke,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=N.T,r=Z.p,Z.p=2,N.T=null;try{for(var u=t.onRecoverableError,p=0;p<o.length;p++){var b=o[p];u(b.value,{componentStack:b.stack})}}finally{N.T=e,Z.p=r}}(Xi&3)!==0&&Cr(),qn(t),r=t.pendingLanes,(n&4194090)!==0&&(r&42)!==0?t===$u?el++:(el=0,$u=t):el=0,nl(0)}}function L0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,_o(e)))}function Cr(t){return V0(),U0(),B0(),H0()}function H0(){if(Ve!==5)return!1;var t=Ra,e=Ju;Ju=0;var n=yo(Xi),o=N.T,r=Z.p;try{Z.p=32>n?32:n,N.T=null,n=Wu,Wu=null;var u=Ra,p=Xi;if(Ve=0,Pi=Ra=null,Xi=0,(qt&6)!==0)throw Error(s(331));var b=qt;if(qt|=4,A0(u.current),x0(u,u.current,p,n),qt=b,nl(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(ke,u)}catch{}return!0}finally{Z.p=r,N.T=o,L0(t,e)}}function q0(t,e,n){e=mn(n,e),e=Cu(t.stateNode,e,2),t=va(t,e,2),t!==null&&(Ne(t,2),qn(t))}function Wt(t,e,n){if(t.tag===3)q0(t,t,n);else for(;e!==null;){if(e.tag===3){q0(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){t=mn(n,t),n=Gh(2),o=va(e,n,2),o!==null&&(Zh(n,o,e,t),Ne(o,2),qn(o));break}}e=e.return}}function nc(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new tv;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(n)||(Zu=!0,r.add(n),t=ov.bind(null,t,e,n),e.then(t,t))}function ov(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,$t===t&&(kt&n)===n&&(re===4||re===3&&(kt&62914560)===kt&&300>Et()-Fu?(qt&2)===0&&Yi(t,0):Qu|=n,qi===kt&&(qi=0)),qn(t)}function P0(t,e){e===0&&(e=xe()),t=Mi(t,e),t!==null&&(Ne(t,e),qn(t))}function lv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),P0(t,n)}function rv(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(e),P0(t,n)}function sv(t,e){return Nt(t,e)}var zr=null,Zi=null,ac=!1,kr=!1,ic=!1,li=0;function qn(t){t!==Zi&&t.next===null&&(Zi===null?zr=Zi=t:Zi=Zi.next=t),kr=!0,ac||(ac=!0,cv())}function nl(t,e){if(!ic&&kr){ic=!0;do for(var n=!1,o=zr;o!==null;){if(t!==0){var r=o.pendingLanes;if(r===0)var u=0;else{var p=o.suspendedLanes,b=o.pingedLanes;u=(1<<31-Le(42|t)+1)-1,u&=r&~(p&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Z0(o,u))}else u=kt,u=Tt(o,o===$t?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||He(o,u)||(n=!0,Z0(o,u));o=o.next}while(n);ic=!1}}function uv(){X0()}function X0(){kr=ac=!1;var t=0;li!==0&&(bv()&&(t=li),li=0);for(var e=Et(),n=null,o=zr;o!==null;){var r=o.next,u=Y0(o,e);u===0?(o.next=null,n===null?zr=r:n.next=r,r===null&&(Zi=n)):(n=o,(t!==0||(u&3)!==0)&&(kr=!0)),o=r}nl(t)}function Y0(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var p=31-Le(u),b=1<<p,S=r[p];S===-1?((b&n)===0||(b&o)!==0)&&(r[p]=Ss(b,e)):S<=e&&(t.expiredLanes|=b),u&=~b}if(e=$t,n=kt,n=Tt(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,n===0||t===e&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&at(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||He(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(o!==null&&at(o),yo(n)){case 2:case 8:n=Qe;break;case 32:n=be;break;case 268435456:n=kn;break;default:n=be}return o=G0.bind(null,t),n=Nt(n,o),t.callbackPriority=e,t.callbackNode=n,e}return o!==null&&o!==null&&at(o),t.callbackPriority=2,t.callbackNode=null,2}function G0(t,e){if(Ve!==0&&Ve!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Cr()&&t.callbackNode!==n)return null;var o=kt;return o=Tt(t,t===$t?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(E0(t,o,e),Y0(t,Et()),t.callbackNode!=null&&t.callbackNode===n?G0.bind(null,t):null)}function Z0(t,e){if(Cr())return null;E0(t,e,!0)}function cv(){xv(function(){(qt&6)!==0?Nt(ae,uv):X0()})}function oc(){return li===0&&(li=po()),li}function Q0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xl(""+t)}function K0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function fv(t,e,n,o,r){if(e==="submit"&&n&&n.stateNode===r){var u=Q0((r[qe]||null).action),p=o.submitter;p&&(e=(e=p[qe]||null)?Q0(e.formAction):p.getAttribute("formAction"),e!==null&&(u=e,p=null));var b=new Ql("action","action",null,o,r);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(li!==0){var S=p?K0(r,p):new FormData(r);Ou(n,{pending:!0,data:S,method:r.method,action:u},null,S)}}else typeof u=="function"&&(b.preventDefault(),S=p?K0(r,p):new FormData(r),Ou(n,{pending:!0,data:S,method:r.method,action:u},u,S))},currentTarget:r}]})}}for(var lc=0;lc<Ys.length;lc++){var rc=Ys[lc],dv=rc.toLowerCase(),hv=rc[0].toUpperCase()+rc.slice(1);Mn(dv,"on"+hv)}Mn(Ed,"onAnimationEnd"),Mn(wd,"onAnimationIteration"),Mn(Rd,"onAnimationStart"),Mn("dblclick","onDoubleClick"),Mn("focusin","onFocus"),Mn("focusout","onBlur"),Mn(Cb,"onTransitionRun"),Mn(zb,"onTransitionStart"),Mn(kb,"onTransitionCancel"),Mn(Cd,"onTransitionEnd"),pa("onMouseEnter",["mouseout","mouseover"]),pa("onMouseLeave",["mouseout","mouseover"]),pa("onPointerEnter",["pointerout","pointerover"]),pa("onPointerLeave",["pointerout","pointerover"]),Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function F0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],r=o.event;o=o.listeners;t:{var u=void 0;if(e)for(var p=o.length-1;0<=p;p--){var b=o[p],S=b.instance,C=b.currentTarget;if(b=b.listener,S!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=C;try{u(r)}catch(_){vr(_)}r.currentTarget=null,u=S}else for(p=0;p<o.length;p++){if(b=o[p],S=b.instance,C=b.currentTarget,b=b.listener,S!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=C;try{u(r)}catch(_){vr(_)}r.currentTarget=null,u=S}}}}function Mt(t,e){var n=e[bo];n===void 0&&(n=e[bo]=new Set);var o=t+"__bubble";n.has(o)||(J0(e,t,2,!1),n.add(o))}function sc(t,e,n){var o=0;e&&(o|=4),J0(n,t,o,e)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function uc(t){if(!t[Nr]){t[Nr]=!0,Hl.forEach(function(n){n!=="selectionchange"&&(pv.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nr]||(e[Nr]=!0,sc("selectionchange",!1,e))}}function J0(t,e,n,o){switch(xp(e)){case 2:var r=qv;break;case 8:r=Pv;break;default:r=Ac}n=r.bind(null,e,n,t),r=void 0,!zs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cc(t,e,n,o,r){var u=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var b=o.stateNode.containerInfo;if(b===r)break;if(p===4)for(p=o.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;b!==null;){if(p=Pe(b),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){o=u=p;continue t}b=b.parentNode}}o=o.return}ad(function(){var C=u,_=Rs(n),L=[];t:{var z=zd.get(t);if(z!==void 0){var k=Ql,pt=t;switch(t){case"keypress":if(Gl(n)===0)break t;case"keydown":case"keyup":k=sb;break;case"focusin":pt="focus",k=_s;break;case"focusout":pt="blur",k=_s;break;case"beforeblur":case"afterblur":k=_s;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=fb;break;case Ed:case wd:case Rd:k=Iy;break;case Cd:k=hb;break;case"scroll":case"scrollend":k=Ky;break;case"wheel":k=mb;break;case"copy":case"cut":case"paste":k=eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=sd;break;case"toggle":case"beforetoggle":k=yb}var ct=(e&4)!==0,Zt=!ct&&(t==="scroll"||t==="scrollend"),E=ct?z!==null?z+"Capture":null:z;ct=[];for(var D=C,R;D!==null;){var U=D;if(R=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||R===null||E===null||(U=To(D,E),U!=null&&ct.push(il(D,U,R))),Zt)break;D=D.return}0<ct.length&&(z=new k(z,pt,null,n,_),L.push({event:z,listeners:ct}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",z&&n!==ws&&(pt=n.relatedTarget||n.fromElement)&&(Pe(pt)||pt[fa]))break t;if((k||z)&&(z=_.window===_?_:(z=_.ownerDocument)?z.defaultView||z.parentWindow:window,k?(pt=n.relatedTarget||n.toElement,k=C,pt=pt?Pe(pt):null,pt!==null&&(Zt=d(pt),ct=pt.tag,pt!==Zt||ct!==5&&ct!==27&&ct!==6)&&(pt=null)):(k=null,pt=C),k!==pt)){if(ct=ld,U="onMouseLeave",E="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(ct=sd,U="onPointerLeave",E="onPointerEnter",D="pointer"),Zt=k==null?z:je(k),R=pt==null?z:je(pt),z=new ct(U,D+"leave",k,n,_),z.target=Zt,z.relatedTarget=R,U=null,Pe(_)===C&&(ct=new ct(E,D+"enter",pt,n,_),ct.target=R,ct.relatedTarget=Zt,U=ct),Zt=U,k&&pt)e:{for(ct=k,E=pt,D=0,R=ct;R;R=Qi(R))D++;for(R=0,U=E;U;U=Qi(U))R++;for(;0<D-R;)ct=Qi(ct),D--;for(;0<R-D;)E=Qi(E),R--;for(;D--;){if(ct===E||E!==null&&ct===E.alternate)break e;ct=Qi(ct),E=Qi(E)}ct=null}else ct=null;k!==null&&W0(L,z,k,ct,!1),pt!==null&&Zt!==null&&W0(L,Zt,pt,ct,!0)}}t:{if(z=C?je(C):window,k=z.nodeName&&z.nodeName.toLowerCase(),k==="select"||k==="input"&&z.type==="file")var tt=gd;else if(pd(z))if(yd)tt=Eb;else{tt=Ob;var At=Db}else k=z.nodeName,!k||k.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?C&&Es(C.elementType)&&(tt=gd):tt=Mb;if(tt&&(tt=tt(t,C))){md(L,tt,n,_);break t}At&&At(t,z,C),t==="focusout"&&C&&z.type==="number"&&C.memoizedProps.value!=null&&Je(z,"number",z.value)}switch(At=C?je(C):window,t){case"focusin":(pd(At)||At.contentEditable==="true")&&(Ai=At,qs=C,Co=null);break;case"focusout":Co=qs=Ai=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,Od(L,n,_);break;case"selectionchange":if(Rb)break;case"keydown":case"keyup":Od(L,n,_)}var it;if(Us)t:{switch(t){case"compositionstart":var ht="onCompositionStart";break t;case"compositionend":ht="onCompositionEnd";break t;case"compositionupdate":ht="onCompositionUpdate";break t}ht=void 0}else Ti?dd(t,n)&&(ht="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ht="onCompositionStart");ht&&(ud&&n.locale!=="ko"&&(Ti||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Ti&&(it=id()):(ma=_,ks="value"in ma?ma.value:ma.textContent,Ti=!0)),At=jr(C,ht),0<At.length&&(ht=new rd(ht,t,null,n,_),L.push({event:ht,listeners:At}),it?ht.data=it:(it=hd(n),it!==null&&(ht.data=it)))),(it=vb?xb(t,n):Sb(t,n))&&(ht=jr(C,"onBeforeInput"),0<ht.length&&(At=new rd("onBeforeInput","beforeinput",null,n,_),L.push({event:At,listeners:ht}),At.data=it)),fv(L,t,C,n,_)}F0(L,e)})}function il(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jr(t,e){for(var n=e+"Capture",o=[];t!==null;){var r=t,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=To(t,n),r!=null&&o.unshift(il(t,r,u)),r=To(t,e),r!=null&&o.push(il(t,r,u))),t.tag===3)return o;t=t.return}return[]}function Qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function W0(t,e,n,o,r){for(var u=e._reactName,p=[];n!==null&&n!==o;){var b=n,S=b.alternate,C=b.stateNode;if(b=b.tag,S!==null&&S===o)break;b!==5&&b!==26&&b!==27||C===null||(S=C,r?(C=To(n,u),C!=null&&p.unshift(il(n,C,S))):r||(C=To(n,u),C!=null&&p.push(il(n,C,S)))),n=n.return}p.length!==0&&t.push({event:e,listeners:p})}var mv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function $0(t){return(typeof t=="string"?t:""+t).replace(mv,`
`).replace(gv,"")}function I0(t,e){return e=$0(e),$0(t)===e}function _r(){}function Gt(t,e,n,o,r,u){switch(n){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||vi(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&vi(t,""+o);break;case"className":Xa(t,"class",o);break;case"tabIndex":Xa(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xa(t,n,o);break;case"style":ed(t,o,u);break;case"data":if(e!=="object"){Xa(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Xl(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Gt(t,e,"name",r.name,r,null),Gt(t,e,"formEncType",r.formEncType,r,null),Gt(t,e,"formMethod",r.formMethod,r,null),Gt(t,e,"formTarget",r.formTarget,r,null)):(Gt(t,e,"encType",r.encType,r,null),Gt(t,e,"method",r.method,r,null),Gt(t,e,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Xl(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=_r);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=Xl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),gi(t,"popover",o);break;case"xlinkActuate":V(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":V(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":V(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":V(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":V(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":V(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":V(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":V(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":V(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":gi(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Zy.get(n)||n,gi(t,n,o))}}function fc(t,e,n,o,r,u){switch(n){case"style":ed(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof o=="string"?vi(t,o):(typeof o=="number"||typeof o=="bigint")&&vi(t,""+o);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=_r);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xo.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),u=t[qe]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,r),typeof o=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,o,r);break t}n in t?t[n]=o:o===!0?t.setAttribute(n,""):gi(t,n,o)}}}function Ue(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var o=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var p=n[u];if(p!=null)switch(u){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Gt(t,e,u,p,n,null)}}r&&Gt(t,e,"srcSet",n.srcSet,n,null),o&&Gt(t,e,"src",n.src,n,null);return;case"input":Mt("invalid",t);var b=u=p=r=null,S=null,C=null;for(o in n)if(n.hasOwnProperty(o)){var _=n[o];if(_!=null)switch(o){case"name":r=_;break;case"type":p=_;break;case"checked":S=_;break;case"defaultChecked":C=_;break;case"value":u=_;break;case"defaultValue":b=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,e));break;default:Gt(t,e,o,_,n,null)}}Xe(t,u,b,S,C,p,r,!1),Vn(t);return;case"select":Mt("invalid",t),o=p=u=null;for(r in n)if(n.hasOwnProperty(r)&&(b=n[r],b!=null))switch(r){case"value":u=b;break;case"defaultValue":p=b;break;case"multiple":o=b;default:Gt(t,e,r,b,n,null)}e=u,n=p,t.multiple=!!o,e!=null?pn(t,!!o,e,!1):n!=null&&pn(t,!!o,n,!0);return;case"textarea":Mt("invalid",t),u=r=o=null;for(p in n)if(n.hasOwnProperty(p)&&(b=n[p],b!=null))switch(p){case"value":o=b;break;case"defaultValue":r=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Gt(t,e,p,b,n,null)}If(t,o,r,u),Vn(t);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(o=n[S],o!=null))switch(S){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,e,S,o,n,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(o=0;o<al.length;o++)Mt(al[o],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(o=n[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Gt(t,e,C,o,n,null)}return;default:if(Es(e)){for(_ in n)n.hasOwnProperty(_)&&(o=n[_],o!==void 0&&fc(t,e,_,o,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(o=n[b],o!=null&&Gt(t,e,b,o,n,null))}function yv(t,e,n,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,p=null,b=null,S=null,C=null,_=null;for(k in n){var L=n[k];if(n.hasOwnProperty(k)&&L!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":S=L;default:o.hasOwnProperty(k)||Gt(t,e,k,null,o,L)}}for(var z in o){var k=o[z];if(L=n[z],o.hasOwnProperty(z)&&(k!=null||L!=null))switch(z){case"type":u=k;break;case"name":r=k;break;case"checked":C=k;break;case"defaultChecked":_=k;break;case"value":p=k;break;case"defaultValue":b=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,e));break;default:k!==L&&Gt(t,e,z,k,o,L)}}Jt(t,p,b,S,C,_,u,r);return;case"select":k=p=b=z=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":k=S;default:o.hasOwnProperty(u)||Gt(t,e,u,null,o,S)}for(r in o)if(u=o[r],S=n[r],o.hasOwnProperty(r)&&(u!=null||S!=null))switch(r){case"value":z=u;break;case"defaultValue":b=u;break;case"multiple":p=u;default:u!==S&&Gt(t,e,r,u,o,S)}e=b,n=p,o=k,z!=null?pn(t,!!n,z,!1):!!o!=!!n&&(e!=null?pn(t,!!n,e,!0):pn(t,!!n,n?[]:"",!1));return;case"textarea":k=z=null;for(b in n)if(r=n[b],n.hasOwnProperty(b)&&r!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Gt(t,e,b,null,o,r)}for(p in o)if(r=o[p],u=n[p],o.hasOwnProperty(p)&&(r!=null||u!=null))switch(p){case"value":z=r;break;case"defaultValue":k=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==u&&Gt(t,e,p,r,o,u)}bi(t,z,k);return;case"option":for(var pt in n)if(z=n[pt],n.hasOwnProperty(pt)&&z!=null&&!o.hasOwnProperty(pt))switch(pt){case"selected":t.selected=!1;break;default:Gt(t,e,pt,null,o,z)}for(S in o)if(z=o[S],k=n[S],o.hasOwnProperty(S)&&z!==k&&(z!=null||k!=null))switch(S){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Gt(t,e,S,z,o,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in n)z=n[ct],n.hasOwnProperty(ct)&&z!=null&&!o.hasOwnProperty(ct)&&Gt(t,e,ct,null,o,z);for(C in o)if(z=o[C],k=n[C],o.hasOwnProperty(C)&&z!==k&&(z!=null||k!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:Gt(t,e,C,z,o,k)}return;default:if(Es(e)){for(var Zt in n)z=n[Zt],n.hasOwnProperty(Zt)&&z!==void 0&&!o.hasOwnProperty(Zt)&&fc(t,e,Zt,void 0,o,z);for(_ in o)z=o[_],k=n[_],!o.hasOwnProperty(_)||z===k||z===void 0&&k===void 0||fc(t,e,_,z,o,k);return}}for(var E in n)z=n[E],n.hasOwnProperty(E)&&z!=null&&!o.hasOwnProperty(E)&&Gt(t,e,E,null,o,z);for(L in o)z=o[L],k=n[L],!o.hasOwnProperty(L)||z===k||z==null&&k==null||Gt(t,e,L,z,o,k)}var dc=null,hc=null;function Vr(t){return t.nodeType===9?t:t.ownerDocument}function tp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ep(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function pc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mc=null;function bv(){var t=window.event;return t&&t.type==="popstate"?t===mc?!1:(mc=t,!0):(mc=null,!1)}var np=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(t){return ap.resolve(null).then(t).catch(Sv)}:np;function Sv(t){setTimeout(function(){throw t})}function za(t){return t==="head"}function ip(t,e){var n=e,o=0,r=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<o&&8>o){n=o;var p=t.ownerDocument;if(n&1&&ol(p.documentElement),n&2&&ol(p.body),n&4)for(n=p.head,ol(n),p=n.firstChild;p;){var b=p.nextSibling,S=p.nodeName;p[da]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&p.rel.toLowerCase()==="stylesheet"||n.removeChild(p),p=b}}if(r===0){t.removeChild(u),hl(e);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:o=n.charCodeAt(0)-48;else o=0;n=u}while(n);hl(e)}function gc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gc(n),Pa(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Tv(t,e,n,o){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[da])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=wn(t.nextSibling),t===null)break}return null}function Av(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=wn(t.nextSibling),t===null))return null;return t}function yc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Dv(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var o=function(){e(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var bc=null;function op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function lp(t,e,n){switch(e=Vr(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ol(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Pa(t)}var Sn=new Map,rp=new Set;function Ur(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=Z.d;Z.d={f:Ov,r:Mv,D:Ev,C:wv,L:Rv,m:Cv,X:kv,S:zv,M:Nv};function Ov(){var t=la.f(),e=wr();return t||e}function Mv(t){var e=Se(t);e!==null&&e.tag===5&&e.type==="form"?Eh(e):la.r(t)}var Ki=typeof document>"u"?null:document;function sp(t,e,n){var o=Ki;if(o&&typeof e=="string"&&e){var r=nt(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),rp.has(r)||(rp.add(r),t={rel:t,crossOrigin:n,href:e},o.querySelector(r)===null&&(e=o.createElement("link"),Ue(e,"link",t),ue(e),o.head.appendChild(e)))}}function Ev(t){la.D(t),sp("dns-prefetch",t,null)}function wv(t,e){la.C(t,e),sp("preconnect",t,e)}function Rv(t,e,n){la.L(t,e,n);var o=Ki;if(o&&t&&e){var r='link[rel="preload"][as="'+nt(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+nt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+nt(n.imageSizes)+'"]')):r+='[href="'+nt(t)+'"]';var u=r;switch(e){case"style":u=Fi(t);break;case"script":u=Ji(t)}Sn.has(u)||(t=y({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Sn.set(u,t),o.querySelector(r)!==null||e==="style"&&o.querySelector(ll(u))||e==="script"&&o.querySelector(rl(u))||(e=o.createElement("link"),Ue(e,"link",t),ue(e),o.head.appendChild(e)))}}function Cv(t,e){la.m(t,e);var n=Ki;if(n&&t){var o=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+nt(o)+'"][href="'+nt(t)+'"]',u=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ji(t)}if(!Sn.has(u)&&(t=y({rel:"modulepreload",href:t},e),Sn.set(u,t),n.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(rl(u)))return}o=n.createElement("link"),Ue(o,"link",t),ue(o),n.head.appendChild(o)}}}function zv(t,e,n){la.S(t,e,n);var o=Ki;if(o&&t){var r=ha(o).hoistableStyles,u=Fi(t);e=e||"default";var p=r.get(u);if(!p){var b={loading:0,preload:null};if(p=o.querySelector(ll(u)))b.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Sn.get(u))&&vc(t,n);var S=p=o.createElement("link");ue(S),Ue(S,"link",t),S._p=new Promise(function(C,_){S.onload=C,S.onerror=_}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Br(p,e,o)}p={type:"stylesheet",instance:p,count:1,state:b},r.set(u,p)}}}function kv(t,e){la.X(t,e);var n=Ki;if(n&&t){var o=ha(n).hoistableScripts,r=Ji(t),u=o.get(r);u||(u=n.querySelector(rl(r)),u||(t=y({src:t,async:!0},e),(e=Sn.get(r))&&xc(t,e),u=n.createElement("script"),ue(u),Ue(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function Nv(t,e){la.M(t,e);var n=Ki;if(n&&t){var o=ha(n).hoistableScripts,r=Ji(t),u=o.get(r);u||(u=n.querySelector(rl(r)),u||(t=y({src:t,async:!0,type:"module"},e),(e=Sn.get(r))&&xc(t,e),u=n.createElement("script"),ue(u),Ue(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function up(t,e,n,o){var r=(r=st.current)?Ur(r):null;if(!r)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Fi(n.href),n=ha(r).hoistableStyles,o=n.get(e),o||(o={type:"style",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Fi(n.href);var u=ha(r).hoistableStyles,p=u.get(t);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,p),(u=r.querySelector(ll(t)))&&!u._p&&(p.instance=u,p.state.loading=5),Sn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sn.set(t,n),u||jv(r,t,n,p.state))),e&&o===null)throw Error(s(528,""));return p}if(e&&o!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ji(n),n=ha(r).hoistableScripts,o=n.get(e),o||(o={type:"script",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fi(t){return'href="'+nt(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function cp(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function jv(t,e,n,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),Ue(e,"link",n),ue(e),t.head.appendChild(e))}function Ji(t){return'[src="'+nt(t)+'"]'}function rl(t){return"script[async]"+t}function fp(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+nt(n.href)+'"]');if(o)return e.instance=o,ue(o),o;var r=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ue(o),Ue(o,"style",r),Br(o,n.precedence,t),e.instance=o;case"stylesheet":r=Fi(n.href);var u=t.querySelector(ll(r));if(u)return e.state.loading|=4,e.instance=u,ue(u),u;o=cp(n),(r=Sn.get(r))&&vc(o,r),u=(t.ownerDocument||t).createElement("link"),ue(u);var p=u;return p._p=new Promise(function(b,S){p.onload=b,p.onerror=S}),Ue(u,"link",o),e.state.loading|=4,Br(u,n.precedence,t),e.instance=u;case"script":return u=Ji(n.src),(r=t.querySelector(rl(u)))?(e.instance=r,ue(r),r):(o=n,(r=Sn.get(u))&&(o=y({},n),xc(o,r)),t=t.ownerDocument||t,r=t.createElement("script"),ue(r),Ue(r,"link",o),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,Br(o,n.precedence,t));return e.instance}function Br(t,e,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,u=r,p=0;p<o.length;p++){var b=o[p];if(b.dataset.precedence===e)u=b;else if(u!==r)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function vc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function xc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Lr=null;function dp(t,e,n){if(Lr===null){var o=new Map,r=Lr=new Map;r.set(n,o)}else r=Lr,o=r.get(n),o||(o=new Map,r.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var u=n[r];if(!(u[da]||u[Oe]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(e)||"";p=t+p;var b=o.get(p);b?b.push(u):o.set(p,[u])}}return o}function hp(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function _v(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function pp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var sl=null;function Vv(){}function Uv(t,e,n){if(sl===null)throw Error(s(475));var o=sl;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var r=Fi(n.href),u=t.querySelector(ll(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Hr.bind(o),t.then(o,o)),e.state.loading|=4,e.instance=u,ue(u);return}u=t.ownerDocument||t,n=cp(n),(r=Sn.get(r))&&vc(n,r),u=u.createElement("link"),ue(u);var p=u;p._p=new Promise(function(b,S){p.onload=b,p.onerror=S}),Ue(u,"link",n),e.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(o.count++,e=Hr.bind(o),t.addEventListener("load",e),t.addEventListener("error",e))}}function Bv(){if(sl===null)throw Error(s(475));var t=sl;return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Hr(){if(this.count--,this.count===0){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var qr=null;function Sc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qr=new Map,e.forEach(Lv,t),qr=null,Hr.call(t))}function Lv(t,e){if(!(e.state.loading&4)){var n=qr.get(t);if(n)var o=n.get(null);else{n=new Map,qr.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var p=r[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),o=p)}o&&n.set(null,o)}r=e.instance,p=r.getAttribute("data-precedence"),u=n.get(p)||o,u===o&&n.set(null,r),n.set(p,r),this.count++,o=Hr.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),u?u.parentNode.insertBefore(r,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var ul={$$typeof:q,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Hv(t,e,n,o,r,u,p,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ca(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ca(0),this.hiddenUpdates=ca(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function mp(t,e,n,o,r,u,p,b,S,C,_,L){return t=new Hv(t,e,n,p,b,S,C,L),e=1,u===!0&&(e|=24),u=ln(3,null,null,e),t.current=u,u.stateNode=t,e=nu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:e},lu(u),t}function gp(t){return t?(t=Ei,t):Ei}function yp(t,e,n,o,r,u){r=gp(r),o.context===null?o.context=r:o.pendingContext=r,o=ba(e),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=va(t,o,e),n!==null&&(fn(n,t,e),Lo(n,t,e))}function bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tc(t,e){bp(t,e),(t=t.alternate)&&bp(t,e)}function vp(t){if(t.tag===13){var e=Mi(t,67108864);e!==null&&fn(e,t,67108864),Tc(t,67108864)}}var Pr=!0;function qv(t,e,n,o){var r=N.T;N.T=null;var u=Z.p;try{Z.p=2,Ac(t,e,n,o)}finally{Z.p=u,N.T=r}}function Pv(t,e,n,o){var r=N.T;N.T=null;var u=Z.p;try{Z.p=8,Ac(t,e,n,o)}finally{Z.p=u,N.T=r}}function Ac(t,e,n,o){if(Pr){var r=Dc(o);if(r===null)cc(t,e,o,Xr,n),Sp(t,o);else if(Yv(r,t,e,n,o))o.stopPropagation();else if(Sp(t,o),e&4&&-1<Xv.indexOf(t)){for(;r!==null;){var u=Se(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=On(u.pendingLanes);if(p!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var S=1<<31-Le(p);b.entanglements[1]|=S,p&=~S}qn(u),(qt&6)===0&&(Mr=Et()+500,nl(0))}}break;case 13:b=Mi(u,2),b!==null&&fn(b,u,2),wr(),Tc(u,2)}if(u=Dc(o),u===null&&cc(t,e,o,Xr,n),u===r)break;r=u}r!==null&&o.stopPropagation()}else cc(t,e,o,null,n)}}function Dc(t){return t=Rs(t),Oc(t)}var Xr=null;function Oc(t){if(Xr=null,t=Pe(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Xr=t,null}function xp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pe()){case ae:return 2;case Qe:return 8;case be:case an:return 32;case kn:return 268435456;default:return 32}default:return 32}}var Mc=!1,ka=null,Na=null,ja=null,cl=new Map,fl=new Map,_a=[],Xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sp(t,e){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":cl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(e.pointerId)}}function dl(t,e,n,o,r,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[r]},e!==null&&(e=Se(e),e!==null&&vp(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Yv(t,e,n,o,r){switch(e){case"focusin":return ka=dl(ka,t,e,n,o,r),!0;case"dragenter":return Na=dl(Na,t,e,n,o,r),!0;case"mouseover":return ja=dl(ja,t,e,n,o,r),!0;case"pointerover":var u=r.pointerId;return cl.set(u,dl(cl.get(u)||null,t,e,n,o,r)),!0;case"gotpointercapture":return u=r.pointerId,fl.set(u,dl(fl.get(u)||null,t,e,n,o,r)),!0}return!1}function Tp(t){var e=Pe(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,As(t.priority,function(){if(n.tag===13){var o=cn();o=go(o);var r=Mi(n,o);r!==null&&fn(r,n,o),Tc(n,o)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dc(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);ws=o,n.target.dispatchEvent(o),ws=null}else return e=Se(n),e!==null&&vp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ap(t,e,n){Yr(t)&&n.delete(e)}function Gv(){Mc=!1,ka!==null&&Yr(ka)&&(ka=null),Na!==null&&Yr(Na)&&(Na=null),ja!==null&&Yr(ja)&&(ja=null),cl.forEach(Ap),fl.forEach(Ap)}function Gr(t,e){t.blockedOn===e&&(t.blockedOn=null,Mc||(Mc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Gv)))}var Zr=null;function Dp(t){Zr!==t&&(Zr=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Zr===t&&(Zr=null);for(var e=0;e<t.length;e+=3){var n=t[e],o=t[e+1],r=t[e+2];if(typeof o!="function"){if(Oc(o||n)===null)continue;break}var u=Se(n);u!==null&&(t.splice(e,3),e-=3,Ou(u,{pending:!0,data:r,method:n.method,action:o},o,r))}}))}function hl(t){function e(S){return Gr(S,t)}ka!==null&&Gr(ka,t),Na!==null&&Gr(Na,t),ja!==null&&Gr(ja,t),cl.forEach(e),fl.forEach(e);for(var n=0;n<_a.length;n++){var o=_a[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<_a.length&&(n=_a[0],n.blockedOn===null);)Tp(n),n.blockedOn===null&&_a.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var r=n[o],u=n[o+1],p=r[qe]||null;if(typeof u=="function")p||Dp(n);else if(p){var b=null;if(u&&u.hasAttribute("formAction")){if(r=u,p=u[qe]||null)b=p.formAction;else if(Oc(r)!==null)continue}else b=p.action;typeof b=="function"?n[o+1]=b:(n.splice(o,3),o-=3),Dp(n)}}}function Ec(t){this._internalRoot=t}Qr.prototype.render=Ec.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,o=cn();yp(n,o,t,e,null,null)},Qr.prototype.unmount=Ec.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yp(t.current,2,null,t,null,null),wr(),e[fa]=null}};function Qr(t){this._internalRoot=t}Qr.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bl();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_a.length&&e!==0&&e<_a[n].priority;n++);_a.splice(n,0,t),n===0&&Tp(t)}};var Op=i.version;if(Op!=="19.1.0")throw Error(s(527,Op,"19.1.0"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var Zv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{ke=Kr.inject(Zv),ve=Kr}catch{}}return ml.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,o="",r=qh,u=Ph,p=Xh,b=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=mp(t,1,!1,null,null,n,o,r,u,p,b,null),t[fa]=e.current,uc(t),new Ec(e)},ml.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var o=!1,r="",u=qh,p=Ph,b=Xh,S=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),e=mp(t,1,!0,e,n??null,o,r,u,p,b,S,C),e.context=gp(null),n=e.current,o=cn(),o=go(o),r=ba(o),r.callback=null,va(n,r,o),n=o,e.current.lanes=n,Ne(e,n),qn(e),t[fa]=e.current,uc(t),new Qr(e)},ml.version="19.1.0",ml}var _p;function a1(){if(_p)return Cc.exports;_p=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Cc.exports=n1(),Cc.exports}var i1=a1();const vf=X.createContext({});function xf(a){const i=X.useRef(null);return i.current===null&&(i.current=a()),i.current}const Sf=typeof window<"u",cg=Sf?X.useLayoutEffect:X.useEffect,fs=X.createContext(null);function Tf(a,i){a.indexOf(i)===-1&&a.push(i)}function Af(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const sa=(a,i,l)=>l>i?i:l<a?a:l;let Df=()=>{};const ua={},fg=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function dg(a){return typeof a=="object"&&a!==null}const hg=a=>/^0[^.\s]+$/u.test(a);function Of(a){let i;return()=>(i===void 0&&(i=a()),i)}const Dn=a=>a,o1=(a,i)=>l=>i(a(l)),zl=(...a)=>a.reduce(o1),Dl=(a,i,l)=>{const s=i-a;return s===0?1:(l-a)/s};class Mf{constructor(){this.subscriptions=[]}add(i){return Tf(this.subscriptions,i),()=>Af(this.subscriptions,i)}notify(i,l,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,l,s);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(i,l,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Pn=a=>a*1e3,Xn=a=>a/1e3;function pg(a,i){return i?a*(1e3/i):0}const mg=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,l1=1e-7,r1=12;function s1(a,i,l,s,c){let d,f,g=0;do f=i+(l-i)/2,d=mg(f,s,c)-a,d>0?l=f:i=f;while(Math.abs(d)>l1&&++g<r1);return f}function kl(a,i,l,s){if(a===i&&l===s)return Dn;const c=d=>s1(d,0,1,a,l);return d=>d===0||d===1?d:mg(c(d),i,s)}const gg=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,yg=a=>i=>1-a(1-i),bg=kl(.33,1.53,.69,.99),Ef=yg(bg),vg=gg(Ef),xg=a=>(a*=2)<1?.5*Ef(a):.5*(2-Math.pow(2,-10*(a-1))),wf=a=>1-Math.sin(Math.acos(a)),Sg=yg(wf),Tg=gg(wf),u1=kl(.42,0,1,1),c1=kl(0,0,.58,1),Ag=kl(.42,0,.58,1),f1=a=>Array.isArray(a)&&typeof a[0]!="number",Dg=a=>Array.isArray(a)&&typeof a[0]=="number",d1={linear:Dn,easeIn:u1,easeInOut:Ag,easeOut:c1,circIn:wf,circInOut:Tg,circOut:Sg,backIn:Ef,backInOut:vg,backOut:bg,anticipate:xg},h1=a=>typeof a=="string",Vp=a=>{if(Dg(a)){Df(a.length===4);const[i,l,s,c]=a;return kl(i,l,s,c)}else if(h1(a))return d1[a];return a},Fr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function p1(a,i){let l=new Set,s=new Set,c=!1,d=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function m(y){f.has(y)&&(h.schedule(y),a()),y(g)}const h={schedule:(y,v=!1,x=!1)=>{const M=x&&c?l:s;return v&&f.add(y),M.has(y)||M.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,c){d=!0;return}c=!0,[l,s]=[s,l],l.forEach(m),l.clear(),c=!1,d&&(d=!1,h.process(y))}};return h}const m1=40;function Og(a,i){let l=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>l=!0,f=Fr.reduce((q,W)=>(q[W]=p1(d),q),{}),{setup:g,read:m,resolveKeyframes:h,preUpdate:y,update:v,preRender:x,render:w,postRender:M}=f,O=()=>{const q=ua.useManualTiming?c.timestamp:performance.now();l=!1,ua.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(q-c.timestamp,m1),1)),c.timestamp=q,c.isProcessing=!0,g.process(c),m.process(c),h.process(c),y.process(c),v.process(c),x.process(c),w.process(c),M.process(c),c.isProcessing=!1,l&&i&&(s=!1,a(O))},j=()=>{l=!0,s=!0,c.isProcessing||a(O)};return{schedule:Fr.reduce((q,W)=>{const P=f[W];return q[W]=(F,Q=!1,G=!1)=>(l||j(),P.schedule(F,Q,G)),q},{}),cancel:q=>{for(let W=0;W<Fr.length;W++)f[Fr[W]].cancel(q)},state:c,steps:f}}const{schedule:ne,cancel:La,state:Be,steps:jc}=Og(typeof requestAnimationFrame<"u"?requestAnimationFrame:Dn,!0);let es;function g1(){es=void 0}const nn={now:()=>(es===void 0&&nn.set(Be.isProcessing||ua.useManualTiming?Be.timestamp:performance.now()),es),set:a=>{es=a,queueMicrotask(g1)}},Mg=a=>i=>typeof i=="string"&&i.startsWith(a),Rf=Mg("--"),y1=Mg("var(--"),Cf=a=>y1(a)?b1.test(a.split("/*")[0].trim()):!1,b1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,co={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Ol={...co,transform:a=>sa(0,1,a)},Jr={...co,default:1},vl=a=>Math.round(a*1e5)/1e5,zf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function v1(a){return a==null}const x1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kf=(a,i)=>l=>!!(typeof l=="string"&&x1.test(l)&&l.startsWith(a)||i&&!v1(l)&&Object.prototype.hasOwnProperty.call(l,i)),Eg=(a,i,l)=>s=>{if(typeof s!="string")return s;const[c,d,f,g]=s.match(zf);return{[a]:parseFloat(c),[i]:parseFloat(d),[l]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},S1=a=>sa(0,255,a),_c={...co,transform:a=>Math.round(S1(a))},ui={test:kf("rgb","red"),parse:Eg("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:s=1})=>"rgba("+_c.transform(a)+", "+_c.transform(i)+", "+_c.transform(l)+", "+vl(Ol.transform(s))+")"};function T1(a){let i="",l="",s="",c="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),s=a.substring(5,7),c=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),s=a.substring(3,4),c=a.substring(4,5),i+=i,l+=l,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const Fc={test:kf("#"),parse:T1,transform:ui.transform},Nl=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),Ba=Nl("deg"),Yn=Nl("%"),mt=Nl("px"),A1=Nl("vh"),D1=Nl("vw"),Up={...Yn,parse:a=>Yn.parse(a)/100,transform:a=>Yn.transform(a*100)},ao={test:kf("hsl","hue"),parse:Eg("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:s=1})=>"hsla("+Math.round(a)+", "+Yn.transform(vl(i))+", "+Yn.transform(vl(l))+", "+vl(Ol.transform(s))+")"},ye={test:a=>ui.test(a)||Fc.test(a)||ao.test(a),parse:a=>ui.test(a)?ui.parse(a):ao.test(a)?ao.parse(a):Fc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ui.transform(a):ao.transform(a),getAnimatableNone:a=>{const i=ye.parse(a);return i.alpha=0,ye.transform(i)}},O1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function M1(a){return isNaN(a)&&typeof a=="string"&&(a.match(zf)?.length||0)+(a.match(O1)?.length||0)>0}const wg="number",Rg="color",E1="var",w1="var(",Bp="${}",R1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ml(a){const i=a.toString(),l=[],s={color:[],number:[],var:[]},c=[];let d=0;const g=i.replace(R1,m=>(ye.test(m)?(s.color.push(d),c.push(Rg),l.push(ye.parse(m))):m.startsWith(w1)?(s.var.push(d),c.push(E1),l.push(m)):(s.number.push(d),c.push(wg),l.push(parseFloat(m))),++d,Bp)).split(Bp);return{values:l,split:g,indexes:s,types:c}}function Cg(a){return Ml(a).values}function zg(a){const{split:i,types:l}=Ml(a),s=i.length;return c=>{let d="";for(let f=0;f<s;f++)if(d+=i[f],c[f]!==void 0){const g=l[f];g===wg?d+=vl(c[f]):g===Rg?d+=ye.transform(c[f]):d+=c[f]}return d}}const C1=a=>typeof a=="number"?0:ye.test(a)?ye.getAnimatableNone(a):a;function z1(a){const i=Cg(a);return zg(a)(i.map(C1))}const Ha={test:M1,parse:Cg,createTransformer:zg,getAnimatableNone:z1};function Vc(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function k1({hue:a,saturation:i,lightness:l,alpha:s}){a/=360,i/=100,l/=100;let c=0,d=0,f=0;if(!i)c=d=f=l;else{const g=l<.5?l*(1+i):l+i-l*i,m=2*l-g;c=Vc(m,g,a+1/3),d=Vc(m,g,a),f=Vc(m,g,a-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:s}}function os(a,i){return l=>l>0?i:a}const oe=(a,i,l)=>a+(i-a)*l,Uc=(a,i,l)=>{const s=a*a,c=l*(i*i-s)+s;return c<0?0:Math.sqrt(c)},N1=[Fc,ui,ao],j1=a=>N1.find(i=>i.test(a));function Lp(a){const i=j1(a);if(!i)return!1;let l=i.parse(a);return i===ao&&(l=k1(l)),l}const Hp=(a,i)=>{const l=Lp(a),s=Lp(i);if(!l||!s)return os(a,i);const c={...l};return d=>(c.red=Uc(l.red,s.red,d),c.green=Uc(l.green,s.green,d),c.blue=Uc(l.blue,s.blue,d),c.alpha=oe(l.alpha,s.alpha,d),ui.transform(c))},Jc=new Set(["none","hidden"]);function _1(a,i){return Jc.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function V1(a,i){return l=>oe(a,i,l)}function Nf(a){return typeof a=="number"?V1:typeof a=="string"?Cf(a)?os:ye.test(a)?Hp:L1:Array.isArray(a)?kg:typeof a=="object"?ye.test(a)?Hp:U1:os}function kg(a,i){const l=[...a],s=l.length,c=a.map((d,f)=>Nf(d)(d,i[f]));return d=>{for(let f=0;f<s;f++)l[f]=c[f](d);return l}}function U1(a,i){const l={...a,...i},s={};for(const c in l)a[c]!==void 0&&i[c]!==void 0&&(s[c]=Nf(a[c])(a[c],i[c]));return c=>{for(const d in s)l[d]=s[d](c);return l}}function B1(a,i){const l=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const d=i.types[c],f=a.indexes[d][s[d]],g=a.values[f]??0;l[c]=g,s[d]++}return l}const L1=(a,i)=>{const l=Ha.createTransformer(i),s=Ml(a),c=Ml(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?Jc.has(a)&&!c.values.length||Jc.has(i)&&!s.values.length?_1(a,i):zl(kg(B1(s,c),c.values),l):os(a,i)};function Ng(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?oe(a,i,l):Nf(a)(a,i)}const H1=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>ne.update(i,l),stop:()=>La(i),now:()=>Be.isProcessing?Be.timestamp:nn.now()}},jg=(a,i,l=10)=>{let s="";const c=Math.max(Math.round(i/l),2);for(let d=0;d<c;d++)s+=Math.round(a(d/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},ls=2e4;function jf(a){let i=0;const l=50;let s=a.next(i);for(;!s.done&&i<ls;)i+=l,s=a.next(i);return i>=ls?1/0:i}function q1(a,i=100,l){const s=l({...a,keyframes:[0,i]}),c=Math.min(jf(s),ls);return{type:"keyframes",ease:d=>s.next(c*d).value/i,duration:Xn(c)}}const P1=5;function _g(a,i,l){const s=Math.max(i-P1,0);return pg(l-a(s),i-s)}const se={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Bc=.001;function X1({duration:a=se.duration,bounce:i=se.bounce,velocity:l=se.velocity,mass:s=se.mass}){let c,d,f=1-i;f=sa(se.minDamping,se.maxDamping,f),a=sa(se.minDuration,se.maxDuration,Xn(a)),f<1?(c=h=>{const y=h*f,v=y*a,x=y-l,w=Wc(h,f),M=Math.exp(-v);return Bc-x/w*M},d=h=>{const v=h*f*a,x=v*l+l,w=Math.pow(f,2)*Math.pow(h,2)*a,M=Math.exp(-v),O=Wc(Math.pow(h,2),f);return(-c(h)+Bc>0?-1:1)*((x-w)*M)/O}):(c=h=>{const y=Math.exp(-h*a),v=(h-l)*a+1;return-Bc+y*v},d=h=>{const y=Math.exp(-h*a),v=(l-h)*(a*a);return y*v});const g=5/a,m=G1(c,d,g);if(a=Pn(a),isNaN(m))return{stiffness:se.stiffness,damping:se.damping,duration:a};{const h=Math.pow(m,2)*s;return{stiffness:h,damping:f*2*Math.sqrt(s*h),duration:a}}}const Y1=12;function G1(a,i,l){let s=l;for(let c=1;c<Y1;c++)s=s-a(s)/i(s);return s}function Wc(a,i){return a*Math.sqrt(1-i*i)}const Z1=["duration","bounce"],Q1=["stiffness","damping","mass"];function qp(a,i){return i.some(l=>a[l]!==void 0)}function K1(a){let i={velocity:se.velocity,stiffness:se.stiffness,damping:se.damping,mass:se.mass,isResolvedFromDuration:!1,...a};if(!qp(a,Q1)&&qp(a,Z1))if(a.visualDuration){const l=a.visualDuration,s=2*Math.PI/(l*1.2),c=s*s,d=2*sa(.05,1,1-(a.bounce||0))*Math.sqrt(c);i={...i,mass:se.mass,stiffness:c,damping:d}}else{const l=X1(a);i={...i,...l,mass:se.mass},i.isResolvedFromDuration=!0}return i}function rs(a=se.visualDuration,i=se.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:s,restDelta:c}=l;const d=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],g={done:!1,value:d},{stiffness:m,damping:h,mass:y,duration:v,velocity:x,isResolvedFromDuration:w}=K1({...l,velocity:-Xn(l.velocity||0)}),M=x||0,O=h/(2*Math.sqrt(m*y)),j=f-d,B=Xn(Math.sqrt(m/y)),Y=Math.abs(j)<5;s||(s=Y?se.restSpeed.granular:se.restSpeed.default),c||(c=Y?se.restDelta.granular:se.restDelta.default);let q;if(O<1){const P=Wc(B,O);q=F=>{const Q=Math.exp(-O*B*F);return f-Q*((M+O*B*j)/P*Math.sin(P*F)+j*Math.cos(P*F))}}else if(O===1)q=P=>f-Math.exp(-B*P)*(j+(M+B*j)*P);else{const P=B*Math.sqrt(O*O-1);q=F=>{const Q=Math.exp(-O*B*F),G=Math.min(P*F,300);return f-Q*((M+O*B*j)*Math.sinh(G)+P*j*Math.cosh(G))/P}}const W={calculatedDuration:w&&v||null,next:P=>{const F=q(P);if(w)g.done=P>=v;else{let Q=P===0?M:0;O<1&&(Q=P===0?Pn(M):_g(q,P,F));const G=Math.abs(Q)<=s,lt=Math.abs(f-F)<=c;g.done=G&&lt}return g.value=g.done?f:F,g},toString:()=>{const P=Math.min(jf(W),ls),F=jg(Q=>W.next(P*Q).value,P,30);return P+"ms "+F},toTransition:()=>{}};return W}rs.applyToOptions=a=>{const i=q1(a,100,rs);return a.ease=i.ease,a.duration=Pn(i.duration),a.type="keyframes",a};function $c({keyframes:a,velocity:i=0,power:l=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:g,max:m,restDelta:h=.5,restSpeed:y}){const v=a[0],x={done:!1,value:v},w=G=>g!==void 0&&G<g||m!==void 0&&G>m,M=G=>g===void 0?m:m===void 0||Math.abs(g-G)<Math.abs(m-G)?g:m;let O=l*i;const j=v+O,B=f===void 0?j:f(j);B!==j&&(O=B-v);const Y=G=>-O*Math.exp(-G/s),q=G=>B+Y(G),W=G=>{const lt=Y(G),ft=q(G);x.done=Math.abs(lt)<=h,x.value=x.done?B:ft};let P,F;const Q=G=>{w(x.value)&&(P=G,F=rs({keyframes:[x.value,M(x.value)],velocity:_g(q,G,x.value),damping:c,stiffness:d,restDelta:h,restSpeed:y}))};return Q(0),{calculatedDuration:null,next:G=>{let lt=!1;return!F&&P===void 0&&(lt=!0,W(G),Q(G)),P!==void 0&&G>=P?F.next(G-P):(!lt&&W(G),x)}}}function F1(a,i,l){const s=[],c=l||ua.mix||Ng,d=a.length-1;for(let f=0;f<d;f++){let g=c(a[f],a[f+1]);if(i){const m=Array.isArray(i)?i[f]||Dn:i;g=zl(m,g)}s.push(g)}return s}function J1(a,i,{clamp:l=!0,ease:s,mixer:c}={}){const d=a.length;if(Df(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=a[0]===a[1];a[0]>a[d-1]&&(a=[...a].reverse(),i=[...i].reverse());const g=F1(i,s,c),m=g.length,h=y=>{if(f&&y<a[0])return i[0];let v=0;if(m>1)for(;v<a.length-2&&!(y<a[v+1]);v++);const x=Dl(a[v],a[v+1],y);return g[v](x)};return l?y=>h(sa(a[0],a[d-1],y)):h}function W1(a,i){const l=a[a.length-1];for(let s=1;s<=i;s++){const c=Dl(0,i,s);a.push(oe(l,1,c))}}function $1(a){const i=[0];return W1(i,a.length-1),i}function I1(a,i){return a.map(l=>l*i)}function t2(a,i){return a.map(()=>i||Ag).splice(0,a.length-1)}function xl({duration:a=300,keyframes:i,times:l,ease:s="easeInOut"}){const c=f1(s)?s.map(Vp):Vp(s),d={done:!1,value:i[0]},f=I1(l&&l.length===i.length?l:$1(i),a),g=J1(f,i,{ease:Array.isArray(c)?c:t2(i,c)});return{calculatedDuration:a,next:m=>(d.value=g(m),d.done=m>=a,d)}}const e2=a=>a!==null;function _f(a,{repeat:i,repeatType:l="loop"},s,c=1){const d=a.filter(e2),g=c<0||i&&l!=="loop"&&i%2===1?0:d.length-1;return!g||s===void 0?d[g]:s}const n2={decay:$c,inertia:$c,tween:xl,keyframes:xl,spring:rs};function Vg(a){typeof a.type=="string"&&(a.type=n2[a.type])}class Vf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const a2=a=>a/100;class Uf extends Vf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==nn.now()&&this.tick(nn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Vg(i);const{type:l=xl,repeat:s=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=i;let{keyframes:g}=i;const m=l||xl;m!==xl&&typeof g[0]!="number"&&(this.mixKeyframes=zl(a2,Ng(g[0],g[1])),g=[0,100]);const h=m({...i,keyframes:g});d==="mirror"&&(this.mirroredGenerator=m({...i,keyframes:[...g].reverse(),velocity:-f})),h.calculatedDuration===null&&(h.calculatedDuration=jf(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=h}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:s,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:w,type:M,onUpdate:O,finalKeyframe:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const B=this.currentTime-h*(this.playbackSpeed>=0?1:-1),Y=this.playbackSpeed>=0?B<0:B>c;this.currentTime=Math.max(B,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let q=this.currentTime,W=s;if(v){const G=Math.min(this.currentTime,c)/g;let lt=Math.floor(G),ft=G%1;!ft&&G>=1&&(ft=1),ft===1&&lt--,lt=Math.min(lt,v+1),!!(lt%2)&&(x==="reverse"?(ft=1-ft,w&&(ft-=w/g)):x==="mirror"&&(W=f)),q=sa(0,1,ft)*g}const P=Y?{done:!1,value:y[0]}:W.next(q);d&&(P.value=d(P.value));let{done:F}=P;!Y&&m!==null&&(F=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return Q&&M!==$c&&(P.value=_f(y,this.options,j,this.speed)),O&&O(P.value),Q&&this.finish(),P}then(i,l){return this.finished.then(i,l)}get duration(){return Xn(this.calculatedDuration)}get time(){return Xn(this.currentTime)}set time(i){i=Pn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(nn.now());const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=Xn(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=H1,startTime:l}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=l??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(nn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function i2(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const ci=a=>a*180/Math.PI,Ic=a=>{const i=ci(Math.atan2(a[1],a[0]));return tf(i)},o2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Ic,rotateZ:Ic,skewX:a=>ci(Math.atan(a[1])),skewY:a=>ci(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},tf=a=>(a=a%360,a<0&&(a+=360),a),Pp=Ic,Xp=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Yp=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),l2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xp,scaleY:Yp,scale:a=>(Xp(a)+Yp(a))/2,rotateX:a=>tf(ci(Math.atan2(a[6],a[5]))),rotateY:a=>tf(ci(Math.atan2(-a[2],a[0]))),rotateZ:Pp,rotate:Pp,skewX:a=>ci(Math.atan(a[4])),skewY:a=>ci(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function ef(a){return a.includes("scale")?1:0}function nf(a,i){if(!a||a==="none")return ef(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(l)s=l2,c=l;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=o2,c=g}if(!c)return ef(i);const d=s[i],f=c[1].split(",").map(s2);return typeof d=="function"?d(f):f[d]}const r2=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return nf(l,i)};function s2(a){return parseFloat(a.trim())}const fo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ho=new Set(fo),Gp=a=>a===co||a===mt,u2=new Set(["x","y","z"]),c2=fo.filter(a=>!u2.has(a));function f2(a){const i=[];return c2.forEach(l=>{const s=a.getValue(l);s!==void 0&&(i.push([l,s.get()]),s.set(l.startsWith("scale")?1:0))}),i}const fi={width:({x:a},{paddingLeft:i="0",paddingRight:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),height:({y:a},{paddingTop:i="0",paddingBottom:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>nf(i,"x"),y:(a,{transform:i})=>nf(i,"y")};fi.translateX=fi.x;fi.translateY=fi.y;const di=new Set;let af=!1,of=!1,lf=!1;function Ug(){if(of){const a=Array.from(di).filter(s=>s.needsMeasurement),i=new Set(a.map(s=>s.element)),l=new Map;i.forEach(s=>{const c=f2(s);c.length&&(l.set(s,c),s.render())}),a.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=l.get(s);c&&c.forEach(([d,f])=>{s.getValue(d)?.set(f)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}of=!1,af=!1,di.forEach(a=>a.complete(lf)),di.clear()}function Bg(){di.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(of=!0)})}function d2(){lf=!0,Bg(),Ug(),lf=!1}class Bf{constructor(i,l,s,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=s,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(di.add(this),af||(af=!0,ne.read(Bg),ne.resolveKeyframes(Ug))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:s,motionValue:c}=this;if(i[0]===null){const d=c?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&l){const g=s.readValue(l,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),c&&d===void 0&&c.set(i[0])}i2(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),di.delete(this)}cancel(){this.state==="scheduled"&&(di.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const h2=a=>a.startsWith("--");function p2(a,i,l){h2(i)?a.style.setProperty(i,l):a.style[i]=l}const m2=Of(()=>window.ScrollTimeline!==void 0),g2={};function y2(a,i){const l=Of(a);return()=>g2[i]??l()}const Lg=y2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),yl=([a,i,l,s])=>`cubic-bezier(${a}, ${i}, ${l}, ${s})`,Zp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:yl([0,.65,.55,1]),circOut:yl([.55,0,1,.45]),backIn:yl([.31,.01,.66,-.59]),backOut:yl([.33,1.53,.69,.99])};function Hg(a,i){if(a)return typeof a=="function"?Lg()?jg(a,i):"ease-out":Dg(a)?yl(a):Array.isArray(a)?a.map(l=>Hg(l,i)||Zp.easeOut):Zp[a]}function b2(a,i,l,{delay:s=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:g="easeOut",times:m}={},h=void 0){const y={[i]:l};m&&(y.offset=m);const v=Hg(g,c);Array.isArray(v)&&(y.easing=v);const x={delay:s,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return h&&(x.pseudoElement=h),a.animate(y,x)}function qg(a){return typeof a=="function"&&"applyToOptions"in a}function v2({type:a,...i}){return qg(a)&&Lg()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class x2 extends Vf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:l,name:s,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:g,onComplete:m}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,Df(typeof i.type!="string");const h=v2(i);this.animation=b2(l,s,c,h,d),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=_f(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):p2(l,s,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Xn(Number(i))}get time(){return Xn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=Pn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&m2()?(this.animation.timeline=i,Dn):l(this)}}const Pg={anticipate:xg,backInOut:vg,circInOut:Tg};function S2(a){return a in Pg}function T2(a){typeof a.ease=="string"&&S2(a.ease)&&(a.ease=Pg[a.ease])}const Qp=10;class A2 extends x2{constructor(i){T2(i),Vg(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:s,onComplete:c,element:d,...f}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const g=new Uf({...f,autoplay:!1}),m=Pn(this.finishedTime??this.time);l.setWithVelocity(g.sample(m-Qp).value,g.sample(m).value,Qp),g.stop()}}const Kp=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Ha.test(a)||a==="0")&&!a.startsWith("url("));function D2(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function O2(a,i,l,s){const c=a[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const d=a[a.length-1],f=Kp(c,i),g=Kp(d,i);return!f||!g?!1:D2(a)||(l==="spring"||qg(l))&&s}const M2=new Set(["opacity","clipPath","filter","transform"]),E2=Of(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function w2(a){const{motionValue:i,name:l,repeatDelay:s,repeatType:c,damping:d,type:f}=a;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:h}=i.owner.getProps();return E2()&&l&&M2.has(l)&&(l!=="transform"||!h)&&!m&&!s&&c!=="mirror"&&d!==0&&f!=="inertia"}const R2=40;class C2 extends Vf{constructor({autoplay:i=!0,delay:l=0,type:s="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:g,name:m,motionValue:h,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=nn.now();const x={autoplay:i,delay:l,type:s,repeat:c,repeatDelay:d,repeatType:f,name:m,motionValue:h,element:y,...v},w=y?.KeyframeResolver||Bf;this.keyframeResolver=new w(g,(M,O,j)=>this.onKeyframesResolved(M,O,x,!j),m,h,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,s,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:g,delay:m,isHandoff:h,onUpdate:y}=s;this.resolvedAt=nn.now(),O2(i,d,f,g)||((ua.instantAnimations||!m)&&y?.(_f(i,s,l)),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>R2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...s,keyframes:i},w=!h&&w2(x)?new A2({...x,element:x.motionValue.owner.current}):new Uf(x);w.finished.then(()=>this.notifyFinished()).catch(Dn),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),d2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const z2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function k2(a){const i=z2.exec(a);if(!i)return[,];const[,l,s,c]=i;return[`--${l??s}`,c]}function Xg(a,i,l=1){const[s,c]=k2(a);if(!s)return;const d=window.getComputedStyle(i).getPropertyValue(s);if(d){const f=d.trim();return fg(f)?parseFloat(f):f}return Cf(c)?Xg(c,i,l+1):c}function Lf(a,i){return a?.[i]??a?.default??a}const Yg=new Set(["width","height","top","left","right","bottom",...fo]),N2={test:a=>a==="auto",parse:a=>a},Gg=a=>i=>i.test(a),Zg=[co,mt,Yn,Ba,D1,A1,N2],Fp=a=>Zg.find(Gg(a));function j2(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||hg(a):!0}const _2=new Set(["brightness","contrast","saturate","opacity"]);function V2(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[s]=l.match(zf)||[];if(!s)return a;const c=l.replace(s,"");let d=_2.has(i)?1:0;return s!==l&&(d*=100),i+"("+d+c+")"}const U2=/\b([a-z-]*)\(.*?\)/gu,rf={...Ha,getAnimatableNone:a=>{const i=a.match(U2);return i?i.map(V2).join(" "):a}},Jp={...co,transform:Math.round},B2={rotate:Ba,rotateX:Ba,rotateY:Ba,rotateZ:Ba,scale:Jr,scaleX:Jr,scaleY:Jr,scaleZ:Jr,skew:Ba,skewX:Ba,skewY:Ba,distance:mt,translateX:mt,translateY:mt,translateZ:mt,x:mt,y:mt,z:mt,perspective:mt,transformPerspective:mt,opacity:Ol,originX:Up,originY:Up,originZ:mt},Hf={borderWidth:mt,borderTopWidth:mt,borderRightWidth:mt,borderBottomWidth:mt,borderLeftWidth:mt,borderRadius:mt,radius:mt,borderTopLeftRadius:mt,borderTopRightRadius:mt,borderBottomRightRadius:mt,borderBottomLeftRadius:mt,width:mt,maxWidth:mt,height:mt,maxHeight:mt,top:mt,right:mt,bottom:mt,left:mt,padding:mt,paddingTop:mt,paddingRight:mt,paddingBottom:mt,paddingLeft:mt,margin:mt,marginTop:mt,marginRight:mt,marginBottom:mt,marginLeft:mt,backgroundPositionX:mt,backgroundPositionY:mt,...B2,zIndex:Jp,fillOpacity:Ol,strokeOpacity:Ol,numOctaves:Jp},L2={...Hf,color:ye,backgroundColor:ye,outlineColor:ye,fill:ye,stroke:ye,borderColor:ye,borderTopColor:ye,borderRightColor:ye,borderBottomColor:ye,borderLeftColor:ye,filter:rf,WebkitFilter:rf},Qg=a=>L2[a];function Kg(a,i){let l=Qg(a);return l!==rf&&(l=Ha),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const H2=new Set(["auto","none","0"]);function q2(a,i,l){let s=0,c;for(;s<a.length&&!c;){const d=a[s];typeof d=="string"&&!H2.has(d)&&Ml(d).values.length&&(c=a[s]),s++}if(c&&l)for(const d of i)a[d]=Kg(l,c)}class P2 extends Bf{constructor(i,l,s,c,d){super(i,l,s,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:s}=this;if(!l||!l.current)return;super.readKeyframes();for(let m=0;m<i.length;m++){let h=i[m];if(typeof h=="string"&&(h=h.trim(),Cf(h))){const y=Xg(h,l.current);y!==void 0&&(i[m]=y),m===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Yg.has(s)||i.length!==2)return;const[c,d]=i,f=Fp(c),g=Fp(d);if(f!==g)if(Gp(f)&&Gp(g))for(let m=0;m<i.length;m++){const h=i[m];typeof h=="string"&&(i[m]=parseFloat(h))}else fi[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||j2(i[c]))&&s.push(c);s.length&&q2(i,s,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=fi[s](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const c=l[l.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(l);c&&c.jump(this.measuredOrigin,!1);const d=s.length-1,f=s[d];s[d]=fi[l](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,m])=>{i.getValue(g).set(m)}),this.resolveNoneKeyframes()}}function X2(a,i,l){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const c=l?.[a]??s.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a)}const Fg=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function Jg(a){return dg(a)&&"offsetHeight"in a}const Wp=30,Y2=a=>!isNaN(parseFloat(a));class G2{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const d=nn.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty();c&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=nn.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=Y2(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new Mf);const s=this.events[i].add(l);return i==="change"?()=>{s(),ne.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i,l=!0){!l||!this.passiveEffect?this.updateAndNotify(i,l):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,l,s){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=nn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Wp)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,Wp);return pg(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function so(a,i){return new G2(a,i)}const{schedule:qf}=Og(queueMicrotask,!1),Cn={x:!1,y:!1};function Wg(){return Cn.x||Cn.y}function Z2(a){return a==="x"||a==="y"?Cn[a]?null:(Cn[a]=!0,()=>{Cn[a]=!1}):Cn.x||Cn.y?null:(Cn.x=Cn.y=!0,()=>{Cn.x=Cn.y=!1})}function $g(a,i){const l=X2(a),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[l,c,()=>s.abort()]}function $p(a){return!(a.pointerType==="touch"||Wg())}function Q2(a,i,l={}){const[s,c,d]=$g(a,l),f=g=>{if(!$p(g))return;const{target:m}=g,h=i(m,g);if(typeof h!="function"||!m)return;const y=v=>{$p(v)&&(h(v),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,c)};return s.forEach(g=>{g.addEventListener("pointerenter",f,c)}),d}const Ig=(a,i)=>i?a===i?!0:Ig(a,i.parentElement):!1,Pf=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,K2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function F2(a){return K2.has(a.tagName)||a.tabIndex!==-1}const ns=new WeakSet;function Ip(a){return i=>{i.key==="Enter"&&a(i)}}function Lc(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const J2=(a,i)=>{const l=a.currentTarget;if(!l)return;const s=Ip(()=>{if(ns.has(l))return;Lc(l,"down");const c=Ip(()=>{Lc(l,"up")}),d=()=>Lc(l,"cancel");l.addEventListener("keyup",c,i),l.addEventListener("blur",d,i)});l.addEventListener("keydown",s,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",s),i)};function tm(a){return Pf(a)&&!Wg()}function W2(a,i,l={}){const[s,c,d]=$g(a,l),f=g=>{const m=g.currentTarget;if(!tm(g))return;ns.add(m);const h=i(m,g),y=(w,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),ns.has(m)&&ns.delete(m),tm(w)&&typeof h=="function"&&h(w,{success:M})},v=w=>{y(w,m===window||m===document||l.useGlobalTarget||Ig(m,w.target))},x=w=>{y(w,!1)};window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",x,c)};return s.forEach(g=>{(l.useGlobalTarget?window:g).addEventListener("pointerdown",f,c),Jg(g)&&(g.addEventListener("focus",h=>J2(h,c)),!F2(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),d}function ty(a){return dg(a)&&"ownerSVGElement"in a}function $2(a){return ty(a)&&a.tagName==="svg"}const Ze=a=>!!(a&&a.getVelocity),I2=[...Zg,ye,Ha],tx=a=>I2.find(Gg(a)),Xf=X.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});class ex extends X.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(l&&i.isPresent&&!this.props.isPresent){const s=l.offsetParent,c=Jg(s)&&s.offsetWidth||0,d=this.props.sizeRef.current;d.height=l.offsetHeight||0,d.width=l.offsetWidth||0,d.top=l.offsetTop,d.left=l.offsetLeft,d.right=c-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function nx({children:a,isPresent:i,anchorX:l,root:s}){const c=X.useId(),d=X.useRef(null),f=X.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:g}=X.useContext(Xf);return X.useInsertionEffect(()=>{const{width:m,height:h,top:y,left:v,right:x}=f.current;if(i||!d.current||!m||!h)return;const w=l==="left"?`left: ${v}`:`right: ${x}`;d.current.dataset.motionPopId=c;const M=document.createElement("style");g&&(M.nonce=g);const O=s??document.head;return O.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${h}px !important;
            ${w}px !important;
            top: ${y}px !important;
          }
        `),()=>{O.removeChild(M),O.contains(M)&&O.removeChild(M)}},[i]),A.jsx(ex,{isPresent:i,childRef:d,sizeRef:f,children:X.cloneElement(a,{ref:d})})}const ax=({children:a,initial:i,isPresent:l,onExitComplete:s,custom:c,presenceAffectsLayout:d,mode:f,anchorX:g,root:m})=>{const h=xf(ix),y=X.useId();let v=!0,x=X.useMemo(()=>(v=!1,{id:y,initial:i,isPresent:l,custom:c,onExitComplete:w=>{h.set(w,!0);for(const M of h.values())if(!M)return;s&&s()},register:w=>(h.set(w,!1),()=>h.delete(w))}),[l,h,s]);return d&&v&&(x={...x}),X.useMemo(()=>{h.forEach((w,M)=>h.set(M,!1))},[l]),X.useEffect(()=>{!l&&!h.size&&s&&s()},[l]),f==="popLayout"&&(a=A.jsx(nx,{isPresent:l,anchorX:g,root:m,children:a})),A.jsx(fs.Provider,{value:x,children:a})};function ix(){return new Map}function ey(a=!0){const i=X.useContext(fs);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:s,register:c}=i,d=X.useId();X.useEffect(()=>{if(a)return c(d)},[a]);const f=X.useCallback(()=>a&&s&&s(d),[d,s,a]);return!l&&s?[!1,f]:[!0]}const Wr=a=>a.key||"";function em(a){const i=[];return X.Children.forEach(a,l=>{X.isValidElement(l)&&i.push(l)}),i}const sf=({children:a,custom:i,initial:l=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:d="sync",propagate:f=!1,anchorX:g="left",root:m})=>{const[h,y]=ey(f),v=X.useMemo(()=>em(a),[a]),x=f&&!h?[]:v.map(Wr),w=X.useRef(!0),M=X.useRef(v),O=xf(()=>new Map),[j,B]=X.useState(v),[Y,q]=X.useState(v);cg(()=>{w.current=!1,M.current=v;for(let F=0;F<Y.length;F++){const Q=Wr(Y[F]);x.includes(Q)?O.delete(Q):O.get(Q)!==!0&&O.set(Q,!1)}},[Y,x.length,x.join("-")]);const W=[];if(v!==j){let F=[...v];for(let Q=0;Q<Y.length;Q++){const G=Y[Q],lt=Wr(G);x.includes(lt)||(F.splice(Q,0,G),W.push(G))}return d==="wait"&&W.length&&(F=W),q(em(F)),B(v),null}const{forceRender:P}=X.useContext(vf);return A.jsx(A.Fragment,{children:Y.map(F=>{const Q=Wr(F),G=f&&!h?!1:v===Y||x.includes(Q),lt=()=>{if(O.has(Q))O.set(Q,!0);else return;let ft=!0;O.forEach(Ut=>{Ut||(ft=!1)}),ft&&(P?.(),q(M.current),f&&y?.(),s&&s())};return A.jsx(ax,{isPresent:G,initial:!w.current||l?void 0:!1,custom:i,presenceAffectsLayout:c,mode:d,root:m,onExitComplete:G?void 0:lt,anchorX:g,children:F},Q)})})},ny=X.createContext({strict:!1}),nm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},uo={};for(const a in nm)uo[a]={isEnabled:i=>nm[a].some(l=>!!i[l])};function ox(a){for(const i in a)uo[i]={...uo[i],...a[i]}}const lx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ss(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||lx.has(a)}let ay=a=>!ss(a);function rx(a){typeof a=="function"&&(ay=i=>i.startsWith("on")?!ss(i):a(i))}try{rx(require("@emotion/is-prop-valid").default)}catch{}function sx(a,i,l){const s={};for(const c in a)c==="values"&&typeof a.values=="object"||(ay(c)||l===!0&&ss(c)||!i&&!ss(c)||a.draggable&&c.startsWith("onDrag"))&&(s[c]=a[c]);return s}const ds=X.createContext({});function hs(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function El(a){return typeof a=="string"||Array.isArray(a)}const Yf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gf=["initial",...Yf];function ps(a){return hs(a.animate)||Gf.some(i=>El(a[i]))}function iy(a){return!!(ps(a)||a.variants)}function ux(a,i){if(ps(a)){const{initial:l,animate:s}=a;return{initial:l===!1||El(l)?l:void 0,animate:El(s)?s:void 0}}return a.inherit!==!1?i:{}}function cx(a){const{initial:i,animate:l}=ux(a,X.useContext(ds));return X.useMemo(()=>({initial:i,animate:l}),[am(i),am(l)])}function am(a){return Array.isArray(a)?a.join(" "):a}const wl={};function fx(a){for(const i in a)wl[i]=a[i],Rf(i)&&(wl[i].isCSSVariable=!0)}function oy(a,{layout:i,layoutId:l}){return ho.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!wl[a]||a==="opacity")}const dx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},hx=fo.length;function px(a,i,l){let s="",c=!0;for(let d=0;d<hx;d++){const f=fo[d],g=a[f];if(g===void 0)continue;let m=!0;if(typeof g=="number"?m=g===(f.startsWith("scale")?1:0):m=parseFloat(g)===0,!m||l){const h=Fg(g,Hf[f]);if(!m){c=!1;const y=dx[f]||f;s+=`${y}(${h}) `}l&&(i[f]=h)}}return s=s.trim(),l?s=l(i,c?"":s):c&&(s="none"),s}function Zf(a,i,l){const{style:s,vars:c,transformOrigin:d}=a;let f=!1,g=!1;for(const m in i){const h=i[m];if(ho.has(m)){f=!0;continue}else if(Rf(m)){c[m]=h;continue}else{const y=Fg(h,Hf[m]);m.startsWith("origin")?(g=!0,d[m]=y):s[m]=y}}if(i.transform||(f||l?s.transform=px(i,a.transform,l):s.transform&&(s.transform="none")),g){const{originX:m="50%",originY:h="50%",originZ:y=0}=d;s.transformOrigin=`${m} ${h} ${y}`}}const Qf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ly(a,i,l){for(const s in i)!Ze(i[s])&&!oy(s,l)&&(a[s]=i[s])}function mx({transformTemplate:a},i){return X.useMemo(()=>{const l=Qf();return Zf(l,i,a),Object.assign({},l.vars,l.style)},[i])}function gx(a,i){const l=a.style||{},s={};return ly(s,l,a),Object.assign(s,mx(a,i)),s}function yx(a,i){const l={},s=gx(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=s,l}const bx={offset:"stroke-dashoffset",array:"stroke-dasharray"},vx={offset:"strokeDashoffset",array:"strokeDasharray"};function xx(a,i,l=1,s=0,c=!0){a.pathLength=1;const d=c?bx:vx;a[d.offset]=mt.transform(-s);const f=mt.transform(i),g=mt.transform(l);a[d.array]=`${f} ${g}`}function ry(a,{attrX:i,attrY:l,attrScale:s,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...g},m,h,y){if(Zf(a,g,h),m){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:v,style:x}=a;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=y?.transformBox??"fill-box",delete v.transformBox),i!==void 0&&(v.x=i),l!==void 0&&(v.y=l),s!==void 0&&(v.scale=s),c!==void 0&&xx(v,c,d,f,!1)}const sy=()=>({...Qf(),attrs:{}}),uy=a=>typeof a=="string"&&a.toLowerCase()==="svg";function Sx(a,i,l,s){const c=X.useMemo(()=>{const d=sy();return ry(d,i,uy(s),a.transformTemplate,a.style),{...d.attrs,style:{...d.style}}},[i]);if(a.style){const d={};ly(d,a.style,a),c.style={...d,...c.style}}return c}const Tx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kf(a){return typeof a!="string"||a.includes("-")?!1:!!(Tx.indexOf(a)>-1||/[A-Z]/u.test(a))}function Ax(a,i,l,{latestValues:s},c,d=!1){const g=(Kf(a)?Sx:yx)(i,s,c,a),m=sx(i,typeof a=="string",d),h=a!==X.Fragment?{...m,...g,ref:l}:{},{children:y}=i,v=X.useMemo(()=>Ze(y)?y.get():y,[y]);return X.createElement(a,{...h,children:v})}function im(a){const i=[{},{}];return a?.values.forEach((l,s)=>{i[0][s]=l.get(),i[1][s]=l.getVelocity()}),i}function Ff(a,i,l,s){if(typeof i=="function"){const[c,d]=im(s);i=i(l!==void 0?l:a.custom,c,d)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[c,d]=im(s);i=i(l!==void 0?l:a.custom,c,d)}return i}function as(a){return Ze(a)?a.get():a}function Dx({scrapeMotionValuesFromProps:a,createRenderState:i},l,s,c){return{latestValues:Ox(l,s,c,a),renderState:i()}}function Ox(a,i,l,s){const c={},d=s(a,{});for(const x in d)c[x]=as(d[x]);let{initial:f,animate:g}=a;const m=ps(a),h=iy(a);i&&h&&!m&&a.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=l?l.initial===!1:!1;y=y||f===!1;const v=y?g:f;if(v&&typeof v!="boolean"&&!hs(v)){const x=Array.isArray(v)?v:[v];for(let w=0;w<x.length;w++){const M=Ff(a,x[w]);if(M){const{transitionEnd:O,transition:j,...B}=M;for(const Y in B){let q=B[Y];if(Array.isArray(q)){const W=y?q.length-1:0;q=q[W]}q!==null&&(c[Y]=q)}for(const Y in O)c[Y]=O[Y]}}}return c}const cy=a=>(i,l)=>{const s=X.useContext(ds),c=X.useContext(fs),d=()=>Dx(a,i,s,c);return l?d():xf(d)};function Jf(a,i,l){const{style:s}=a,c={};for(const d in s)(Ze(s[d])||i.style&&Ze(i.style[d])||oy(d,a)||l?.getValue(d)?.liveStyle!==void 0)&&(c[d]=s[d]);return c}const Mx=cy({scrapeMotionValuesFromProps:Jf,createRenderState:Qf});function fy(a,i,l){const s=Jf(a,i,l);for(const c in a)if(Ze(a[c])||Ze(i[c])){const d=fo.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[d]=a[c]}return s}const Ex=cy({scrapeMotionValuesFromProps:fy,createRenderState:sy}),wx=Symbol.for("motionComponentSymbol");function io(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function Rx(a,i,l){return X.useCallback(s=>{s&&a.onMount&&a.onMount(s),i&&(s?i.mount(s):i.unmount()),l&&(typeof l=="function"?l(s):io(l)&&(l.current=s))},[i])}const Wf=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Cx="framerAppearId",dy="data-"+Wf(Cx),hy=X.createContext({});function zx(a,i,l,s,c){const{visualElement:d}=X.useContext(ds),f=X.useContext(ny),g=X.useContext(fs),m=X.useContext(Xf).reducedMotion,h=X.useRef(null);s=s||f.renderer,!h.current&&s&&(h.current=s(a,{visualState:i,parent:d,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:m}));const y=h.current,v=X.useContext(hy);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&kx(h.current,l,c,v);const x=X.useRef(!1);X.useInsertionEffect(()=>{y&&x.current&&y.update(l,g)});const w=l[dy],M=X.useRef(!!w&&!window.MotionHandoffIsComplete?.(w)&&window.MotionHasOptimisedAnimation?.(w));return cg(()=>{y&&(x.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),M.current&&y.animationState&&y.animationState.animateChanges())}),X.useEffect(()=>{y&&(!M.current&&y.animationState&&y.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(w)}),M.current=!1))}),y}function kx(a,i,l,s){const{layoutId:c,layout:d,drag:f,dragConstraints:g,layoutScroll:m,layoutRoot:h,layoutCrossfade:y}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:py(a.parent)),a.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||g&&io(g),visualElement:a,animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:m,layoutRoot:h})}function py(a){if(a)return a.options.allowProjection!==!1?a.projection:py(a.parent)}function Hc(a,{forwardMotionProps:i=!1}={},l,s){l&&ox(l);const c=Kf(a)?Ex:Mx;function d(g,m){let h;const y={...X.useContext(Xf),...g,layoutId:Nx(g)},{isStatic:v}=y,x=cx(g),w=c(g,v);if(!v&&Sf){jx();const M=_x(y);h=M.MeasureLayout,x.visualElement=zx(a,w,y,s,M.ProjectionNode)}return A.jsxs(ds.Provider,{value:x,children:[h&&x.visualElement?A.jsx(h,{visualElement:x.visualElement,...y}):null,Ax(a,g,Rx(w,x.visualElement,m),w,v,i)]})}d.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=X.forwardRef(d);return f[wx]=a,f}function Nx({layoutId:a}){const i=X.useContext(vf).id;return i&&a!==void 0?i+"-"+a:a}function jx(a,i){X.useContext(ny).strict}function _x(a){const{drag:i,layout:l}=uo;if(!i&&!l)return{};const s={...i,...l};return{MeasureLayout:i?.isEnabled(a)||l?.isEnabled(a)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function Vx(a,i){if(typeof Proxy>"u")return Hc;const l=new Map,s=(d,f)=>Hc(d,f,a,i),c=(d,f)=>s(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?s:(l.has(f)||l.set(f,Hc(f,void 0,a,i)),l.get(f))})}function my({top:a,left:i,right:l,bottom:s}){return{x:{min:i,max:l},y:{min:a,max:s}}}function Ux({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function Bx(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),s=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:s.y,right:s.x}}function qc(a){return a===void 0||a===1}function uf({scale:a,scaleX:i,scaleY:l}){return!qc(a)||!qc(i)||!qc(l)}function si(a){return uf(a)||gy(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function gy(a){return om(a.x)||om(a.y)}function om(a){return a&&a!=="0%"}function us(a,i,l){const s=a-l,c=i*s;return l+c}function lm(a,i,l,s,c){return c!==void 0&&(a=us(a,c,s)),us(a,l,s)+i}function cf(a,i=0,l=1,s,c){a.min=lm(a.min,i,l,s,c),a.max=lm(a.max,i,l,s,c)}function yy(a,{x:i,y:l}){cf(a.x,i.translate,i.scale,i.originPoint),cf(a.y,l.translate,l.scale,l.originPoint)}const rm=.999999999999,sm=1.0000000000001;function Lx(a,i,l,s=!1){const c=l.length;if(!c)return;i.x=i.y=1;let d,f;for(let g=0;g<c;g++){d=l[g],f=d.projectionDelta;const{visualElement:m}=d.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&lo(a,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,yy(a,f)),s&&si(d.latestValues)&&lo(a,d.latestValues))}i.x<sm&&i.x>rm&&(i.x=1),i.y<sm&&i.y>rm&&(i.y=1)}function oo(a,i){a.min=a.min+i,a.max=a.max+i}function um(a,i,l,s,c=.5){const d=oe(a.min,a.max,c);cf(a,i,l,d,s)}function lo(a,i){um(a.x,i.x,i.scaleX,i.scale,i.originX),um(a.y,i.y,i.scaleY,i.scale,i.originY)}function by(a,i){return my(Bx(a.getBoundingClientRect(),i))}function Hx(a,i,l){const s=by(a,l),{scroll:c}=i;return c&&(oo(s.x,c.offset.x),oo(s.y,c.offset.y)),s}const cm=()=>({translate:0,scale:1,origin:0,originPoint:0}),ro=()=>({x:cm(),y:cm()}),fm=()=>({min:0,max:0}),de=()=>({x:fm(),y:fm()}),ff={current:null},vy={current:!1};function qx(){if(vy.current=!0,!!Sf)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>ff.current=a.matches;a.addEventListener("change",i),i()}else ff.current=!1}const Px=new WeakMap;function Xx(a,i,l){for(const s in i){const c=i[s],d=l[s];if(Ze(c))a.addValue(s,c);else if(Ze(d))a.addValue(s,so(c,{owner:a}));else if(d!==c)if(a.hasValue(s)){const f=a.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=a.getStaticValue(s);a.addValue(s,so(f!==void 0?f:c,{owner:a}))}}for(const s in l)i[s]===void 0&&a.removeValue(s);return i}const dm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Yx{scrapeMotionValuesFromProps(i,l,s){return{}}constructor({parent:i,props:l,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Bf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=nn.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,ne.render(this.render,!1,!0))};const{latestValues:m,renderState:h}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=l.initial?{...m}:{},this.renderState=h,this.parent=i,this.props=l,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!d,this.isControllingVariants=ps(l),this.isVariantNode=iy(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(l,{},this);for(const x in v){const w=v[x];m[x]!==void 0&&Ze(w)&&w.set(m[x],!1)}}mount(i){this.current=i,Px.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,s)=>this.bindToMotionValue(s,l)),vy.current||qx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ff.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),La(this.notifyUpdate),La(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=ho.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=l.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&ne.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),d=l.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{c(),d(),f&&f(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in uo){const l=uo[i];if(!l)continue;const{isEnabled:s,Feature:c}=l;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):de()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let s=0;s<dm.length;s++){const c=dm[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=i[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=Xx(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const s=this.values.get(i);l!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&l!==void 0&&(s=so(l===null?void 0:l,{owner:this}),this.addValue(i,s)),s}readValue(i,l){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(fg(s)||hg(s))?s=parseFloat(s):!tx(s)&&Ha.test(l)&&(s=Kg(i,l)),this.setBaseTarget(i,Ze(s)?s.get():s)),Ze(s)?s.get():s}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let s;if(typeof l=="string"||typeof l=="object"){const d=Ff(this.props,l,this.presenceContext?.custom);d&&(s=d[i])}if(l&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!Ze(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new Mf),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){qf.render(this.render)}}class xy extends Yx{constructor(){super(...arguments),this.KeyframeResolver=P2}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:s}){delete l[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Ze(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function Sy(a,{style:i,vars:l},s,c){const d=a.style;let f;for(f in i)d[f]=i[f];c?.applyProjectionStyles(d,s);for(f in l)d.setProperty(f,l[f])}function Gx(a){return window.getComputedStyle(a)}class Zx extends xy{constructor(){super(...arguments),this.type="html",this.renderInstance=Sy}readValueFromInstance(i,l){if(ho.has(l))return this.projection?.isProjecting?ef(l):r2(i,l);{const s=Gx(i),c=(Rf(l)?s.getPropertyValue(l):s[l])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:l}){return by(i,l)}build(i,l,s){Zf(i,l,s.transformTemplate)}scrapeMotionValuesFromProps(i,l,s){return Jf(i,l,s)}}const Ty=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Qx(a,i,l,s){Sy(a,i,void 0,s);for(const c in i.attrs)a.setAttribute(Ty.has(c)?c:Wf(c),i.attrs[c])}class Kx extends xy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=de}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(ho.has(l)){const s=Qg(l);return s&&s.default||0}return l=Ty.has(l)?l:Wf(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,s){return fy(i,l,s)}build(i,l,s){ry(i,l,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,l,s,c){Qx(i,l,s,c)}mount(i){this.isSVGTag=uy(i.tagName),super.mount(i)}}const Fx=(a,i)=>Kf(a)?new Kx(i):new Zx(i,{allowProjection:a!==X.Fragment});function Rl(a,i,l){const s=a.getProps();return Ff(s,i,l!==void 0?l:s.custom,a)}const df=a=>Array.isArray(a);function Jx(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,so(l))}function Wx(a){return df(a)?a[a.length-1]||0:a}function $x(a,i){const l=Rl(a,i);let{transitionEnd:s={},transition:c={},...d}=l||{};d={...d,...s};for(const f in d){const g=Wx(d[f]);Jx(a,f,g)}}function Ix(a){return!!(Ze(a)&&a.add)}function hf(a,i){const l=a.getValue("willChange");if(Ix(l))return l.add(i);if(!l&&ua.WillChange){const s=new ua.WillChange("auto");a.addValue("willChange",s),s.add(i)}}function Ay(a){return a.props[dy]}const t5=a=>a!==null;function e5(a,{repeat:i,repeatType:l="loop"},s){const c=a.filter(t5),d=i&&l!=="loop"&&i%2===1?0:c.length-1;return c[d]}const n5={type:"spring",stiffness:500,damping:25,restSpeed:10},a5=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),i5={type:"keyframes",duration:.8},o5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},l5=(a,{keyframes:i})=>i.length>2?i5:ho.has(a)?a.startsWith("scale")?a5(i[1]):n5:o5;function r5({when:a,delay:i,delayChildren:l,staggerChildren:s,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:g,from:m,elapsed:h,...y}){return!!Object.keys(y).length}const $f=(a,i,l,s={},c,d)=>f=>{const g=Lf(s,a)||{},m=g.delay||s.delay||0;let{elapsed:h=0}=s;h=h-Pn(m);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-h,onUpdate:x=>{i.set(x),g.onUpdate&&g.onUpdate(x)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:a,motionValue:i,element:d?void 0:c};r5(g)||Object.assign(y,l5(a,y)),y.duration&&(y.duration=Pn(y.duration)),y.repeatDelay&&(y.repeatDelay=Pn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(v=!0)),(ua.instantAnimations||ua.skipAnimations)&&(v=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,v&&!d&&i.get()!==void 0){const x=e5(y.keyframes,g);if(x!==void 0){ne.update(()=>{y.onUpdate(x),y.onComplete()});return}}return g.isSync?new Uf(y):new C2(y)};function s5({protectedKeys:a,needsAnimating:i},l){const s=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,s}function Dy(a,i,{delay:l=0,transitionOverride:s,type:c}={}){let{transition:d=a.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(d=s);const m=[],h=c&&a.animationState&&a.animationState.getState()[c];for(const y in g){const v=a.getValue(y,a.latestValues[y]??null),x=g[y];if(x===void 0||h&&s5(h,y))continue;const w={delay:l,...Lf(d||{},y)},M=v.get();if(M!==void 0&&!v.isAnimating&&!Array.isArray(x)&&x===M&&!w.velocity)continue;let O=!1;if(window.MotionHandoffAnimation){const B=Ay(a);if(B){const Y=window.MotionHandoffAnimation(B,y,ne);Y!==null&&(w.startTime=Y,O=!0)}}hf(a,y),v.start($f(y,v,x,a.shouldReduceMotion&&Yg.has(y)?{type:!1}:w,a,O));const j=v.animation;j&&m.push(j)}return f&&Promise.all(m).then(()=>{ne.update(()=>{f&&$x(a,f)})}),m}function pf(a,i,l={}){const s=Rl(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=s||{};l.transitionOverride&&(c=l.transitionOverride);const d=s?()=>Promise.all(Dy(a,s,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(m=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:v}=c;return u5(a,i,m,h,y,v,l)}:()=>Promise.resolve(),{when:g}=c;if(g){const[m,h]=g==="beforeChildren"?[d,f]:[f,d];return m().then(()=>h())}else return Promise.all([d(),f(l.delay)])}function u5(a,i,l=0,s=0,c=0,d=1,f){const g=[],m=a.variantChildren.size,h=(m-1)*c,y=typeof s=="function",v=y?x=>s(x,m):d===1?(x=0)=>x*c:(x=0)=>h-x*c;return Array.from(a.variantChildren).sort(c5).forEach((x,w)=>{x.notify("AnimationStart",i),g.push(pf(x,i,{...f,delay:l+(y?0:s)+v(w)}).then(()=>x.notify("AnimationComplete",i)))}),Promise.all(g)}function c5(a,i){return a.sortNodePosition(i)}function f5(a,i,l={}){a.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(d=>pf(a,d,l));s=Promise.all(c)}else if(typeof i=="string")s=pf(a,i,l);else{const c=typeof i=="function"?Rl(a,i,l.custom):i;s=Promise.all(Dy(a,c,l))}return s.then(()=>{a.notify("AnimationComplete",i)})}function Oy(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let s=0;s<l;s++)if(i[s]!==a[s])return!1;return!0}const d5=Gf.length;function My(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?My(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<d5;l++){const s=Gf[l],c=a.props[s];(El(c)||c===!1)&&(i[s]=c)}return i}const h5=[...Yf].reverse(),p5=Yf.length;function m5(a){return i=>Promise.all(i.map(({animation:l,options:s})=>f5(a,l,s)))}function g5(a){let i=m5(a),l=hm(),s=!0;const c=m=>(h,y)=>{const v=Rl(a,y,m==="exit"?a.presenceContext?.custom:void 0);if(v){const{transition:x,transitionEnd:w,...M}=v;h={...h,...M,...w}}return h};function d(m){i=m(a)}function f(m){const{props:h}=a,y=My(a.parent)||{},v=[],x=new Set;let w={},M=1/0;for(let j=0;j<p5;j++){const B=h5[j],Y=l[B],q=h[B]!==void 0?h[B]:y[B],W=El(q),P=B===m?Y.isActive:null;P===!1&&(M=j);let F=q===y[B]&&q!==h[B]&&W;if(F&&s&&a.manuallyAnimateOnMount&&(F=!1),Y.protectedKeys={...w},!Y.isActive&&P===null||!q&&!Y.prevProp||hs(q)||typeof q=="boolean")continue;const Q=y5(Y.prevProp,q);let G=Q||B===m&&Y.isActive&&!F&&W||j>M&&W,lt=!1;const ft=Array.isArray(q)?q:[q];let Ut=ft.reduce(c(B),{});P===!1&&(Ut={});const{prevResolvedValues:Qt={}}=Y,Ce={...Qt,...Ut},he=Z=>{G=!0,x.has(Z)&&(lt=!0,x.delete(Z)),Y.needsAnimating[Z]=!0;const $=a.getValue(Z);$&&($.liveStyle=!1)};for(const Z in Ce){const $=Ut[Z],yt=Qt[Z];if(w.hasOwnProperty(Z))continue;let T=!1;df($)&&df(yt)?T=!Oy($,yt):T=$!==yt,T?$!=null?he(Z):x.add(Z):$!==void 0&&x.has(Z)?he(Z):Y.protectedKeys[Z]=!0}Y.prevProp=q,Y.prevResolvedValues=Ut,Y.isActive&&(w={...w,...Ut}),s&&a.blockInitialAnimation&&(G=!1),G&&(!(F&&Q)||lt)&&v.push(...ft.map(Z=>({animation:Z,options:{type:B}})))}if(x.size){const j={};if(typeof h.initial!="boolean"){const B=Rl(a,Array.isArray(h.initial)?h.initial[0]:h.initial);B&&B.transition&&(j.transition=B.transition)}x.forEach(B=>{const Y=a.getBaseTarget(B),q=a.getValue(B);q&&(q.liveStyle=!0),j[B]=Y??null}),v.push({animation:j})}let O=!!v.length;return s&&(h.initial===!1||h.initial===h.animate)&&!a.manuallyAnimateOnMount&&(O=!1),s=!1,O?i(v):Promise.resolve()}function g(m,h){if(l[m].isActive===h)return Promise.resolve();a.variantChildren?.forEach(v=>v.animationState?.setActive(m,h)),l[m].isActive=h;const y=f(m);for(const v in l)l[v].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:d,getState:()=>l,reset:()=>{l=hm(),s=!0}}}function y5(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!Oy(i,a):!1}function ri(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hm(){return{animate:ri(!0),whileInView:ri(),whileHover:ri(),whileTap:ri(),whileDrag:ri(),whileFocus:ri(),exit:ri()}}class qa{constructor(i){this.isMounted=!1,this.node=i}update(){}}class b5 extends qa{constructor(i){super(i),i.animationState||(i.animationState=g5(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();hs(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let v5=0;class x5 extends qa{constructor(){super(...arguments),this.id=v5++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);l&&!i&&c.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const S5={animation:{Feature:b5},exit:{Feature:x5}};function Cl(a,i,l,s={passive:!0}){return a.addEventListener(i,l,s),()=>a.removeEventListener(i,l)}function jl(a){return{point:{x:a.pageX,y:a.pageY}}}const T5=a=>i=>Pf(i)&&a(i,jl(i));function Sl(a,i,l,s){return Cl(a,i,T5(l),s)}const Ey=1e-4,A5=1-Ey,D5=1+Ey,wy=.01,O5=0-wy,M5=0+wy;function Fe(a){return a.max-a.min}function E5(a,i,l){return Math.abs(a-i)<=l}function pm(a,i,l,s=.5){a.origin=s,a.originPoint=oe(i.min,i.max,a.origin),a.scale=Fe(l)/Fe(i),a.translate=oe(l.min,l.max,a.origin)-a.originPoint,(a.scale>=A5&&a.scale<=D5||isNaN(a.scale))&&(a.scale=1),(a.translate>=O5&&a.translate<=M5||isNaN(a.translate))&&(a.translate=0)}function Tl(a,i,l,s){pm(a.x,i.x,l.x,s?s.originX:void 0),pm(a.y,i.y,l.y,s?s.originY:void 0)}function mm(a,i,l){a.min=l.min+i.min,a.max=a.min+Fe(i)}function w5(a,i,l){mm(a.x,i.x,l.x),mm(a.y,i.y,l.y)}function gm(a,i,l){a.min=i.min-l.min,a.max=a.min+Fe(i)}function Al(a,i,l){gm(a.x,i.x,l.x),gm(a.y,i.y,l.y)}function An(a){return[a("x"),a("y")]}const Ry=({current:a})=>a?a.ownerDocument.defaultView:null,ym=(a,i)=>Math.abs(a-i);function R5(a,i){const l=ym(a.x,i.x),s=ym(a.y,i.y);return Math.sqrt(l**2+s**2)}class Cy{constructor(i,l,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Xc(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,M=R5(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!M)return;const{point:O}=x,{timestamp:j}=Be;this.history.push({...O,timestamp:j});const{onStart:B,onMove:Y}=this.handlers;w||(B&&B(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),Y&&Y(this.lastMoveEvent,x)},this.handlePointerMove=(x,w)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Pc(w,this.transformPagePoint),ne.update(this.updatePoint,!0)},this.handlePointerUp=(x,w)=>{this.end();const{onEnd:M,onSessionEnd:O,resumeAnimation:j}=this.handlers;if(this.dragSnapToOrigin&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const B=Xc(x.type==="pointercancel"?this.lastMoveEventInfo:Pc(w,this.transformPagePoint),this.history);this.startEvent&&M&&M(x,B),O&&O(x,B)},!Pf(i))return;this.dragSnapToOrigin=d,this.handlers=l,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=c||window;const g=jl(i),m=Pc(g,this.transformPagePoint),{point:h}=m,{timestamp:y}=Be;this.history=[{...h,timestamp:y}];const{onSessionStart:v}=l;v&&v(i,Xc(m,this.history)),this.removeListeners=zl(Sl(this.contextWindow,"pointermove",this.handlePointerMove),Sl(this.contextWindow,"pointerup",this.handlePointerUp),Sl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),La(this.updatePoint)}}function Pc(a,i){return i?{point:i(a.point)}:a}function bm(a,i){return{x:a.x-i.x,y:a.y-i.y}}function Xc({point:a},i){return{point:a,delta:bm(a,zy(i)),offset:bm(a,C5(i)),velocity:z5(i,.1)}}function C5(a){return a[0]}function zy(a){return a[a.length-1]}function z5(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,s=null;const c=zy(a);for(;l>=0&&(s=a[l],!(c.timestamp-s.timestamp>Pn(i)));)l--;if(!s)return{x:0,y:0};const d=Xn(c.timestamp-s.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-s.x)/d,y:(c.y-s.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function k5(a,{min:i,max:l},s){return i!==void 0&&a<i?a=s?oe(i,a,s.min):Math.max(a,i):l!==void 0&&a>l&&(a=s?oe(l,a,s.max):Math.min(a,l)),a}function vm(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function N5(a,{top:i,left:l,bottom:s,right:c}){return{x:vm(a.x,l,c),y:vm(a.y,i,s)}}function xm(a,i){let l=i.min-a.min,s=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,s]=[s,l]),{min:l,max:s}}function j5(a,i){return{x:xm(a.x,i.x),y:xm(a.y,i.y)}}function _5(a,i){let l=.5;const s=Fe(a),c=Fe(i);return c>s?l=Dl(i.min,i.max-s,a.min):s>c&&(l=Dl(a.min,a.max-c,i.min)),sa(0,1,l)}function V5(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const mf=.35;function U5(a=mf){return a===!1?a=0:a===!0&&(a=mf),{x:Sm(a,"left","right"),y:Sm(a,"top","bottom")}}function Sm(a,i,l){return{min:Tm(a,i),max:Tm(a,l)}}function Tm(a,i){return typeof a=="number"?a:a[i]||0}const B5=new WeakMap;class L5{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=de(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=v=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(jl(v).point)},f=(v,x)=>{const{drag:w,dragPropagation:M,onDragStart:O}=this.getProps();if(w&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Z2(w),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),An(B=>{let Y=this.getAxisMotionValue(B).get()||0;if(Yn.test(Y)){const{projection:q}=this.visualElement;if(q&&q.layout){const W=q.layout.layoutBox[B];W&&(Y=Fe(W)*(parseFloat(Y)/100))}}this.originPoint[B]=Y}),O&&ne.postRender(()=>O(v,x)),hf(this.visualElement,"transform");const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},g=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:w,dragDirectionLock:M,onDirectionLock:O,onDrag:j}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:B}=x;if(M&&this.currentDirection===null){this.currentDirection=H5(B),this.currentDirection!==null&&O&&O(this.currentDirection);return}this.updateAxis("x",x.point,B),this.updateAxis("y",x.point,B),this.visualElement.render(),j&&j(v,x)},m=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>An(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Cy(i,{onSessionStart:d,onStart:f,onMove:g,onSessionEnd:m,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:Ry(this.visualElement)})}stop(i,l){const s=i||this.latestPointerEvent,c=l||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!s)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:g}=this.getProps();g&&ne.postRender(()=>g(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,s){const{drag:c}=this.getProps();if(!s||!$r(i,c,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=k5(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&io(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=N5(s.layoutBox,i):this.constraints=!1,this.elastic=U5(l),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&An(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=V5(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!io(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=Hx(s,c.root,this.visualElement.getTransformPagePoint());let f=j5(c.layout.layoutBox,d);if(l){const g=l(Ux(f));this.hasMutatedConstraints=!!g,g&&(f=my(g))}return f}startAnimation(i){const{drag:l,dragMomentum:s,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),m=this.constraints||{},h=An(y=>{if(!$r(y,l,this.currentDirection))return;let v=m&&m[y]||{};f&&(v={min:0,max:0});const x=c?200:1e6,w=c?40:1e7,M={type:"inertia",velocity:s?i[y]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...d,...v};return this.startAxisValueAnimation(y,M)});return Promise.all(h).then(g)}startAxisValueAnimation(i,l){const s=this.getAxisMotionValue(i);return hf(this.visualElement,i),s.start($f(i,s,0,l,this.visualElement,!1))}stopAnimation(){An(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){An(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[l];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){An(l=>{const{drag:s}=this.getProps();if(!$r(l,s,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(l);if(c&&c.layout){const{min:f,max:g}=c.layout.layoutBox[l];d.set(i[l]-oe(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:s}=this.visualElement;if(!io(l)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};An(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const m=g.get();c[f]=_5({min:m,max:m},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),An(f=>{if(!$r(f,i,null))return;const g=this.getAxisMotionValue(f),{min:m,max:h}=this.constraints[f];g.set(oe(m,h,c[f]))})}addListeners(){if(!this.visualElement.current)return;B5.set(this.visualElement,this);const i=this.visualElement.current,l=Sl(i,"pointerdown",m=>{const{drag:h,dragListener:y=!0}=this.getProps();h&&y&&this.start(m)}),s=()=>{const{dragConstraints:m}=this.getProps();io(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),ne.read(s);const f=Cl(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",({delta:m,hasLayoutChanged:h})=>{this.isDragging&&h&&(An(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=m[y].translate,v.set(v.get()+m[y].translate))}),this.visualElement.render())});return()=>{f(),l(),d(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=mf,dragMomentum:g=!0}=i;return{...i,drag:l,dragDirectionLock:s,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:g}}}function $r(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function H5(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class q5 extends qa{constructor(i){super(i),this.removeGroupControls=Dn,this.removeListeners=Dn,this.controls=new L5(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Dn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Am=a=>(i,l)=>{a&&ne.postRender(()=>a(i,l))};class P5 extends qa{constructor(){super(...arguments),this.removePointerDownListener=Dn}onPointerDown(i){this.session=new Cy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ry(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:Am(i),onStart:Am(l),onMove:s,onEnd:(d,f)=>{delete this.session,c&&ne.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=Sl(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const is={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Dm(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const gl={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(mt.test(a))a=parseFloat(a);else return a;const l=Dm(a,i.target.x),s=Dm(a,i.target.y);return`${l}% ${s}%`}},X5={correct:(a,{treeScale:i,projectionDelta:l})=>{const s=a,c=Ha.parse(a);if(c.length>5)return s;const d=Ha.createTransformer(a),f=typeof c[0]!="number"?1:0,g=l.x.scale*i.x,m=l.y.scale*i.y;c[0+f]/=g,c[1+f]/=m;const h=oe(g,m,.5);return typeof c[2+f]=="number"&&(c[2+f]/=h),typeof c[3+f]=="number"&&(c[3+f]/=h),d(c)}};let Om=!1;class Y5 extends X.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s,layoutId:c}=this.props,{projection:d}=i;fx(G5),d&&(l.group&&l.group.add(d),s&&s.register&&c&&s.register(d),Om&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),is.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:s,drag:c,isPresent:d}=this.props,{projection:f}=s;return f&&(f.isPresent=d,Om=!0,c||i.layoutDependency!==l||l===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||ne.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),qf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function ky(a){const[i,l]=ey(),s=X.useContext(vf);return A.jsx(Y5,{...a,layoutGroup:s,switchLayoutGroup:X.useContext(hy),isPresent:i,safeToRemove:l})}const G5={borderRadius:{...gl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:gl,borderTopRightRadius:gl,borderBottomLeftRadius:gl,borderBottomRightRadius:gl,boxShadow:X5};function Z5(a,i,l){const s=Ze(a)?a:so(a);return s.start($f("",s,i,l)),s.animation}const Q5=(a,i)=>a.depth-i.depth;class K5{constructor(){this.children=[],this.isDirty=!1}add(i){Tf(this.children,i),this.isDirty=!0}remove(i){Af(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(Q5),this.isDirty=!1,this.children.forEach(i)}}function F5(a,i){const l=nn.now(),s=({timestamp:c})=>{const d=c-l;d>=i&&(La(s),a(d-i))};return ne.setup(s,!0),()=>La(s)}const Ny=["TopLeft","TopRight","BottomLeft","BottomRight"],J5=Ny.length,Mm=a=>typeof a=="string"?parseFloat(a):a,Em=a=>typeof a=="number"||mt.test(a);function W5(a,i,l,s,c,d){c?(a.opacity=oe(0,l.opacity??1,$5(s)),a.opacityExit=oe(i.opacity??1,0,I5(s))):d&&(a.opacity=oe(i.opacity??1,l.opacity??1,s));for(let f=0;f<J5;f++){const g=`border${Ny[f]}Radius`;let m=wm(i,g),h=wm(l,g);if(m===void 0&&h===void 0)continue;m||(m=0),h||(h=0),m===0||h===0||Em(m)===Em(h)?(a[g]=Math.max(oe(Mm(m),Mm(h),s),0),(Yn.test(h)||Yn.test(m))&&(a[g]+="%")):a[g]=h}(i.rotate||l.rotate)&&(a.rotate=oe(i.rotate||0,l.rotate||0,s))}function wm(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const $5=jy(0,.5,Sg),I5=jy(.5,.95,Dn);function jy(a,i,l){return s=>s<a?0:s>i?1:l(Dl(a,i,s))}function Rm(a,i){a.min=i.min,a.max=i.max}function Tn(a,i){Rm(a.x,i.x),Rm(a.y,i.y)}function Cm(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}function zm(a,i,l,s,c){return a-=i,a=us(a,1/l,s),c!==void 0&&(a=us(a,1/c,s)),a}function tS(a,i=0,l=1,s=.5,c,d=a,f=a){if(Yn.test(i)&&(i=parseFloat(i),i=oe(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=oe(d.min,d.max,s);a===d&&(g-=i),a.min=zm(a.min,i,l,g,c),a.max=zm(a.max,i,l,g,c)}function km(a,i,[l,s,c],d,f){tS(a,i[l],i[s],i[c],i.scale,d,f)}const eS=["x","scaleX","originX"],nS=["y","scaleY","originY"];function Nm(a,i,l,s){km(a.x,i,eS,l?l.x:void 0,s?s.x:void 0),km(a.y,i,nS,l?l.y:void 0,s?s.y:void 0)}function jm(a){return a.translate===0&&a.scale===1}function _y(a){return jm(a.x)&&jm(a.y)}function _m(a,i){return a.min===i.min&&a.max===i.max}function aS(a,i){return _m(a.x,i.x)&&_m(a.y,i.y)}function Vm(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function Vy(a,i){return Vm(a.x,i.x)&&Vm(a.y,i.y)}function Um(a){return Fe(a.x)/Fe(a.y)}function Bm(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}class iS{constructor(){this.members=[]}add(i){Tf(this.members,i),i.scheduleRender()}remove(i){if(Af(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(c=>i===c);if(l===0)return!1;let s;for(let c=l;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){s=d;break}}return s?(this.promote(s),!0):!1}promote(i,l){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,l&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:s}=i;l.onExitComplete&&l.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function oS(a,i,l){let s="";const c=a.x.translate/i.x,d=a.y.translate/i.y,f=l?.z||0;if((c||d||f)&&(s=`translate3d(${c}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:h,rotate:y,rotateX:v,rotateY:x,skewX:w,skewY:M}=l;h&&(s=`perspective(${h}px) ${s}`),y&&(s+=`rotate(${y}deg) `),v&&(s+=`rotateX(${v}deg) `),x&&(s+=`rotateY(${x}deg) `),w&&(s+=`skewX(${w}deg) `),M&&(s+=`skewY(${M}deg) `)}const g=a.x.scale*i.x,m=a.y.scale*i.y;return(g!==1||m!==1)&&(s+=`scale(${g}, ${m})`),s||"none"}const Yc=["","X","Y","Z"],lS=1e3;let rS=0;function Gc(a,i,l,s){const{latestValues:c}=i;c[a]&&(l[a]=c[a],i.setStaticValue(a,0),s&&(s[a]=0))}function Uy(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=Ay(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:c,layoutId:d}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",ne,!(c||d))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&Uy(s)}function By({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},g=i?.()){this.id=rS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(cS),this.nodes.forEach(pS),this.nodes.forEach(mS),this.nodes.forEach(fS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new K5)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Mf),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const m=this.eventHandlers.get(f);m&&m.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=ty(f)&&!$2(f),this.instance=f;const{layoutId:g,layout:m,visualElement:h}=this.options;if(h&&!h.current&&h.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||g)&&(this.isLayoutDirty=!0),a){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;ne.read(()=>{v=window.innerWidth}),a(f,()=>{const w=window.innerWidth;w!==v&&(v=w,this.root.updateBlockedByResize=!0,y&&y(),y=F5(x,250),is.hasAnimatedSinceResize&&(is.hasAnimatedSinceResize=!1,this.nodes.forEach(qm)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&h&&(g||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||xS,{onLayoutAnimationStart:O,onLayoutAnimationComplete:j}=h.getProps(),B=!this.targetLayout||!Vy(this.targetLayout,w),Y=!v&&x;if(this.options.layoutRoot||this.resumeFrom||Y||v&&(B||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const q={...Lf(M,"layout"),onPlay:O,onComplete:j};(h.shouldReduceMotion||this.options.layoutRoot)&&(q.delay=0,q.type=!1),this.startAnimation(q),this.setAnimationOrigin(y,Y)}else v||qm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),La(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gS),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Uy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:g,layout:m}=this.options;if(g===void 0&&!m)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Lm);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Hm);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(hS),this.nodes.forEach(sS),this.nodes.forEach(uS)):this.nodes.forEach(Hm),this.clearAllSnapshots();const g=nn.now();Be.delta=sa(0,1e3/60,g-Be.timestamp),Be.timestamp=g,Be.isProcessing=!0,jc.update.process(Be),jc.preRender.process(Be),jc.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(dS),this.sharedNodes.forEach(yS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Fe(this.snapshot.measuredBox.x)&&!Fe(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=de(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:m,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!_y(this.projectionDelta),m=this.getTransformTemplate(),h=m?m(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;f&&this.instance&&(g||si(this.latestValues)||y)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let m=this.removeElementScroll(g);return f&&(m=this.removeTransform(m)),SS(m),{animationId:this.root.animationId,measuredBox:g,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return de();const g=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(TS))){const{scroll:h}=this.root;h&&(oo(g.x,h.offset.x),oo(g.y,h.offset.y))}return g}removeElementScroll(f){const g=de();if(Tn(g,f),this.scroll?.wasRoot)return g;for(let m=0;m<this.path.length;m++){const h=this.path[m],{scroll:y,options:v}=h;h!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&Tn(g,f),oo(g.x,y.offset.x),oo(g.y,y.offset.y))}return g}applyTransform(f,g=!1){const m=de();Tn(m,f);for(let h=0;h<this.path.length;h++){const y=this.path[h];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&lo(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),si(y.latestValues)&&lo(m,y.latestValues)}return si(this.latestValues)&&lo(m,this.latestValues),m}removeTransform(f){const g=de();Tn(g,f);for(let m=0;m<this.path.length;m++){const h=this.path[m];if(!h.instance||!si(h.latestValues))continue;uf(h.latestValues)&&h.updateSnapshot();const y=de(),v=h.measurePageBox();Tn(y,v),Nm(g,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,y)}return si(this.latestValues)&&Nm(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==g;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),Al(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=de(),this.targetWithTransforms=de()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),w5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tn(this.target,this.layout.layoutBox),yy(this.target,this.targetDelta)):Tn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),Al(this.relativeTargetOrigin,this.target,x.target),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||uf(this.parent.latestValues)||gy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),g=!!this.resumingFrom||this!==f;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(m=!1),m)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;Tn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;Lx(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=de());const{target:w}=f;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Cm(this.prevProjectionDelta.x,this.projectionDelta.x),Cm(this.prevProjectionDelta.y,this.projectionDelta.y)),Tl(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!Bm(this.projectionDelta.x,this.prevProjectionDelta.x)||!Bm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ro(),this.projectionDelta=ro(),this.projectionDeltaWithTransform=ro()}setAnimationOrigin(f,g=!1){const m=this.snapshot,h=m?m.latestValues:{},y={...this.latestValues},v=ro();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const x=de(),w=m?m.source:void 0,M=this.layout?this.layout.source:void 0,O=w!==M,j=this.getStack(),B=!j||j.members.length<=1,Y=!!(O&&!B&&this.options.crossfade===!0&&!this.path.some(vS));this.animationProgress=0;let q;this.mixTargetDelta=W=>{const P=W/1e3;Pm(v.x,f.x,P),Pm(v.y,f.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Al(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),bS(this.relativeTarget,this.relativeTargetOrigin,x,P),q&&aS(this.relativeTarget,q)&&(this.isProjectionDirty=!1),q||(q=de()),Tn(q,this.relativeTarget)),O&&(this.animationValues=y,W5(y,h,this.latestValues,P,Y,B)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(La(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ne.update(()=>{is.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=so(0)),this.currentAnimation=Z5(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(lS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:m,layout:h,latestValues:y}=f;if(!(!g||!m||!h)){if(this!==f&&this.layout&&h&&Ly(this.options.animationType,this.layout.layoutBox,h.layoutBox)){m=this.target||de();const v=Fe(this.layout.layoutBox.x);m.x.min=f.target.x.min,m.x.max=m.x.min+v;const x=Fe(this.layout.layoutBox.y);m.y.min=f.target.y.min,m.y.max=m.y.min+x}Tn(g,m),lo(g,y),Tl(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new iS),this.sharedNodes.get(f).add(g);const h=g.options.initialPromotionConfig;g.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:m}={}){const h=this.getStack();h&&h.promote(this,m),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:m}=f;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(g=!0),!g)return;const h={};m.z&&Gc("z",f,h,this.animationValues);for(let y=0;y<Yc.length;y++)Gc(`rotate${Yc[y]}`,f,h,this.animationValues),Gc(`skew${Yc[y]}`,f,h,this.animationValues);f.render();for(const y in h)f.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);f.scheduleRender()}applyProjectionStyles(f,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=as(g?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=as(g?.pointerEvents)||""),this.hasProjected&&!si(this.latestValues)&&(f.transform=m?m({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=oS(this.projectionDeltaWithTransform,this.treeScale,y);m&&(v=m(y,v)),f.transform=v;const{x,y:w}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,h.animationValues?f.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const M in wl){if(y[M]===void 0)continue;const{correct:O,applyTo:j,isCSSVariable:B}=wl[M],Y=v==="none"?y[M]:O(y[M],h);if(j){const q=j.length;for(let W=0;W<q;W++)f[j[W]]=Y}else B?this.options.visualElement.renderState.vars[M]=Y:f[M]=Y}this.options.layoutId&&(f.pointerEvents=h===this?as(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Lm),this.root.sharedNodes.clear()}}}function sS(a){a.updateLayout()}function uS(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:s}=a.layout,{animationType:c}=a.options,d=i.source!==a.layout.source;c==="size"?An(y=>{const v=d?i.measuredBox[y]:i.layoutBox[y],x=Fe(v);v.min=l[y].min,v.max=v.min+x}):Ly(c,i.layoutBox,l)&&An(y=>{const v=d?i.measuredBox[y]:i.layoutBox[y],x=Fe(l[y]);v.max=v.min+x,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[y].max=a.relativeTarget[y].min+x)});const f=ro();Tl(f,l,i.layoutBox);const g=ro();d?Tl(g,a.applyTransform(s,!0),i.measuredBox):Tl(g,l,i.layoutBox);const m=!_y(f);let h=!1;if(!a.resumeFrom){const y=a.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:x}=y;if(v&&x){const w=de();Al(w,i.layoutBox,v.layoutBox);const M=de();Al(M,l,x.layoutBox),Vy(w,M)||(h=!0),y.options.layoutRoot&&(a.relativeTarget=M,a.relativeTargetOrigin=w,a.relativeParent=y)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:g,layoutDelta:f,hasLayoutChanged:m,hasRelativeLayoutChanged:h})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function cS(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function fS(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function dS(a){a.clearSnapshot()}function Lm(a){a.clearMeasurements()}function Hm(a){a.isLayoutDirty=!1}function hS(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function qm(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function pS(a){a.resolveTargetDelta()}function mS(a){a.calcProjection()}function gS(a){a.resetSkewAndRotation()}function yS(a){a.removeLeadSnapshot()}function Pm(a,i,l){a.translate=oe(i.translate,0,l),a.scale=oe(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function Xm(a,i,l,s){a.min=oe(i.min,l.min,s),a.max=oe(i.max,l.max,s)}function bS(a,i,l,s){Xm(a.x,i.x,l.x,s),Xm(a.y,i.y,l.y,s)}function vS(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const xS={duration:.45,ease:[.4,0,.1,1]},Ym=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Gm=Ym("applewebkit/")&&!Ym("chrome/")?Math.round:Dn;function Zm(a){a.min=Gm(a.min),a.max=Gm(a.max)}function SS(a){Zm(a.x),Zm(a.y)}function Ly(a,i,l){return a==="position"||a==="preserve-aspect"&&!E5(Um(i),Um(l),.2)}function TS(a){return a!==a.root&&a.scroll?.wasRoot}const AS=By({attachResizeListener:(a,i)=>Cl(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Zc={current:void 0},Hy=By({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Zc.current){const a=new AS({});a.mount(window),a.setOptions({layoutScroll:!0}),Zc.current=a}return Zc.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),DS={pan:{Feature:P5},drag:{Feature:q5,ProjectionNode:Hy,MeasureLayout:ky}};function Qm(a,i,l){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",l==="Start");const c="onHover"+l,d=s[c];d&&ne.postRender(()=>d(i,jl(i)))}class OS extends qa{mount(){const{current:i}=this.node;i&&(this.unmount=Q2(i,(l,s)=>(Qm(this.node,s,"Start"),c=>Qm(this.node,c,"End"))))}unmount(){}}class MS extends qa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zl(Cl(this.node.current,"focus",()=>this.onFocus()),Cl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Km(a,i,l){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",l==="Start");const c="onTap"+(l==="End"?"":l),d=s[c];d&&ne.postRender(()=>d(i,jl(i)))}class ES extends qa{mount(){const{current:i}=this.node;i&&(this.unmount=W2(i,(l,s)=>(Km(this.node,s,"Start"),(c,{success:d})=>Km(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const gf=new WeakMap,Qc=new WeakMap,wS=a=>{const i=gf.get(a.target);i&&i(a)},RS=a=>{a.forEach(wS)};function CS({root:a,...i}){const l=a||document;Qc.has(l)||Qc.set(l,{});const s=Qc.get(l),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(RS,{root:a,...i})),s[c]}function zS(a,i,l){const s=CS(i);return gf.set(a,l),s.observe(a),()=>{gf.delete(a),s.unobserve(a)}}const kS={some:0,all:1};class NS extends qa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:c="some",once:d}=i,f={root:l?l.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:kS[c]},g=m=>{const{isIntersecting:h}=m;if(this.isInView===h||(this.isInView=h,d&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),x=h?y:v;x&&x(m)};return zS(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(jS(i,l))&&this.startObserver()}unmount(){}}function jS({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const _S={inView:{Feature:NS},tap:{Feature:ES},focus:{Feature:MS},hover:{Feature:OS}},VS={layout:{ProjectionNode:Hy,MeasureLayout:ky}},US={...S5,..._S,...DS,...VS},Bt=Vx(US,Fx),BS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='100pt'%20height='100pt'%20version='1.1'%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m18.914%2081.398h-7.1992c0.97266%200.91016%201.5977%202.2266%201.5977%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.3125%200.46094-2.5703%201.4297-3.5977h-4.5703v-1.8281h4.5703v-7.4883h67.082v-21.371h25.086v2.6328h-13.086v11.426h7.8281v12.633l-15.484-0.003906c-1.1406%200.17187-1.0273%201.6562%200.058594%201.7695h23.945v2.2305h-9.4297c0.91406%200.91016%201.543%202.2266%201.543%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.4297%200.62891-2.7383%201.543-3.5977h-7.6016c0.058594%200.22656%200.10938%200.45703%200.10938%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.058593-0.45703%200.058593-0.68359h-3.8281c0%200.28125%200.058593%200.51562%200.058593%200.68359%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2305-3.7109-8.2305-8.3438%200-0.11328%200.058594-0.28516%200.11328-0.625h-4.1133c0%200.28516%200.058594%200.45703%200.058594%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.054688-0.34375%200.11328-0.625'%20fill='%23010101'/%3e%3cpath%20d='m25.316%2053.566c-1.3711-0.16797-2.3984-1.1445-2.1719-2.2812l2.0547-6.1719-0.34375-4.2305h-7.8867l-0.34375%204.2305%202.0586%206.1719c0.23047%201.1406-0.80078%202.1172-2.0586%202.2812h-6.4531l-5.5977%208.3984%205.5977%208.4023h59.828l-0.003906-16.852c-3.9961%200.16797-3.7109-1.4883-3.9961-2.6914h-24.914c-0.11328%200.91406%200%202.7422-3.1406%202.7422z'%20fill='%23010101'/%3e%3cpath%20d='m23.312%2039.113h-4.6289c0.62891-6.3984%202.457-11.027%207.5977-15.543%201.3164-2.1133%200.28516-12.172%209.1406-13.715%208.6914-1.4844%208.5781%204.9141%2015.32%205.5977%202.9141%200.28906%205.6016-2.3398%208.5703-2.2812%204.0547%200.11328%205.7734%203.8242%209.1992%203.9961%203.4297%200.17188%204.1133-2.0547%207.4297-2.1719%203.3125-0.11328%207.8281%203.6562%207.8281%207.2031%200%204.0547-0.34375%208.3398-7.0859%2010.055-3.1992%200.80078-6-2.5703-9.1992-2.457-2.8555%200.054687-5.7148%202.6875-8.5156%202.6875-6.7383%200-6.3984-4.0586-10.168-4.0586-3.9414%200-4.8008%203.9414-10.801%204.2852-4.1758%200.23047-6.2852-2.6289-9.1445-1.7148-4.5117%201.4883-5.2539%208.1172-5.543%208.1172'%20fill='%23010101'/%3e%3c/svg%3e";function De(a,i){i===void 0&&(i={});var l=i.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}De(`.react-loading-indicator-normalize,
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
}`);var Xt=function(){return Xt=Object.assign||function(a){for(var i,l=1,s=arguments.length;l<s;l++)for(var c in i=arguments[l])Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c]);return a},Xt.apply(this,arguments)};function cs(a){return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},cs(a)}var LS=/^\s+/,HS=/\s+$/;function ot(a,i){if(i=i||{},(a=a||"")instanceof ot)return a;if(!(this instanceof ot))return new ot(a,i);var l=function(s){var c={r:0,g:0,b:0},d=1,f=null,g=null,m=null,h=!1,y=!1;typeof s=="string"&&(s=function(M){M=M.replace(LS,"").replace(HS,"").toLowerCase();var O,j=!1;if(yf[M])M=yf[M],j=!0;else if(M=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(O=Rn.rgb.exec(M))?{r:O[1],g:O[2],b:O[3]}:(O=Rn.rgba.exec(M))?{r:O[1],g:O[2],b:O[3],a:O[4]}:(O=Rn.hsl.exec(M))?{h:O[1],s:O[2],l:O[3]}:(O=Rn.hsla.exec(M))?{h:O[1],s:O[2],l:O[3],a:O[4]}:(O=Rn.hsv.exec(M))?{h:O[1],s:O[2],v:O[3]}:(O=Rn.hsva.exec(M))?{h:O[1],s:O[2],v:O[3],a:O[4]}:(O=Rn.hex8.exec(M))?{r:dn(O[1]),g:dn(O[2]),b:dn(O[3]),a:tg(O[4]),format:j?"name":"hex8"}:(O=Rn.hex6.exec(M))?{r:dn(O[1]),g:dn(O[2]),b:dn(O[3]),format:j?"name":"hex"}:(O=Rn.hex4.exec(M))?{r:dn(O[1]+""+O[1]),g:dn(O[2]+""+O[2]),b:dn(O[3]+""+O[3]),a:tg(O[4]+""+O[4]),format:j?"name":"hex8"}:(O=Rn.hex3.exec(M))?{r:dn(O[1]+""+O[1]),g:dn(O[2]+""+O[2]),b:dn(O[3]+""+O[3]),format:j?"name":"hex"}:!1}(s)),cs(s)=="object"&&(ra(s.r)&&ra(s.g)&&ra(s.b)?(v=s.r,x=s.g,w=s.b,c={r:255*ee(v,255),g:255*ee(x,255),b:255*ee(w,255)},h=!0,y=String(s.r).substr(-1)==="%"?"prgb":"rgb"):ra(s.h)&&ra(s.s)&&ra(s.v)?(f=bl(s.s),g=bl(s.v),c=function(M,O,j){M=6*ee(M,360),O=ee(O,100),j=ee(j,100);var B=Math.floor(M),Y=M-B,q=j*(1-O),W=j*(1-Y*O),P=j*(1-(1-Y)*O),F=B%6,Q=[j,W,q,q,P,j][F],G=[P,j,j,W,q,q][F],lt=[q,q,P,j,j,W][F];return{r:255*Q,g:255*G,b:255*lt}}(s.h,f,g),h=!0,y="hsv"):ra(s.h)&&ra(s.s)&&ra(s.l)&&(f=bl(s.s),m=bl(s.l),c=function(M,O,j){var B,Y,q;function W(Q,G,lt){return lt<0&&(lt+=1),lt>1&&(lt-=1),lt<1/6?Q+6*(G-Q)*lt:lt<.5?G:lt<2/3?Q+(G-Q)*(2/3-lt)*6:Q}if(M=ee(M,360),O=ee(O,100),j=ee(j,100),O===0)B=Y=q=j;else{var P=j<.5?j*(1+O):j+O-j*O,F=2*j-P;B=W(F,P,M+1/3),Y=W(F,P,M),q=W(F,P,M-1/3)}return{r:255*B,g:255*Y,b:255*q}}(s.h,f,m),h=!0,y="hsl"),s.hasOwnProperty("a")&&(d=s.a));var v,x,w;return d=qy(d),{ok:h,format:s.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}}(a);this._originalInput=a,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||l.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function Fm(a,i,l){a=ee(a,255),i=ee(i,255),l=ee(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=(d+f)/2;if(d==f)s=c=0;else{var m=d-f;switch(c=g>.5?m/(2-d-f):m/(d+f),d){case a:s=(i-l)/m+(i<l?6:0);break;case i:s=(l-a)/m+2;break;case l:s=(a-i)/m+4}s/=6}return{h:s,s:c,l:g}}function Jm(a,i,l){a=ee(a,255),i=ee(i,255),l=ee(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=d,m=d-f;if(c=d===0?0:m/d,d==f)s=0;else{switch(d){case a:s=(i-l)/m+(i<l?6:0);break;case i:s=(l-a)/m+2;break;case l:s=(a-i)/m+4}s/=6}return{h:s,s:c,v:g}}function Wm(a,i,l,s){var c=[zn(Math.round(a).toString(16)),zn(Math.round(i).toString(16)),zn(Math.round(l).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function $m(a,i,l,s){return[zn(Py(s)),zn(Math.round(a).toString(16)),zn(Math.round(i).toString(16)),zn(Math.round(l).toString(16))].join("")}function qS(a,i){i=i===0?0:i||10;var l=ot(a).toHsl();return l.s-=i/100,l.s=ms(l.s),ot(l)}function PS(a,i){i=i===0?0:i||10;var l=ot(a).toHsl();return l.s+=i/100,l.s=ms(l.s),ot(l)}function XS(a){return ot(a).desaturate(100)}function YS(a,i){i=i===0?0:i||10;var l=ot(a).toHsl();return l.l+=i/100,l.l=ms(l.l),ot(l)}function GS(a,i){i=i===0?0:i||10;var l=ot(a).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-i/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-i/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-i/100*255))),ot(l)}function ZS(a,i){i=i===0?0:i||10;var l=ot(a).toHsl();return l.l-=i/100,l.l=ms(l.l),ot(l)}function QS(a,i){var l=ot(a).toHsl(),s=(l.h+i)%360;return l.h=s<0?360+s:s,ot(l)}function KS(a){var i=ot(a).toHsl();return i.h=(i.h+180)%360,ot(i)}function Im(a,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var l=ot(a).toHsl(),s=[ot(a)],c=360/i,d=1;d<i;d++)s.push(ot({h:(l.h+d*c)%360,s:l.s,l:l.l}));return s}function FS(a){var i=ot(a).toHsl(),l=i.h;return[ot(a),ot({h:(l+72)%360,s:i.s,l:i.l}),ot({h:(l+216)%360,s:i.s,l:i.l})]}function JS(a,i,l){i=i||6,l=l||30;var s=ot(a).toHsl(),c=360/l,d=[ot(a)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,d.push(ot(s));return d}function WS(a,i){i=i||6;for(var l=ot(a).toHsv(),s=l.h,c=l.s,d=l.v,f=[],g=1/i;i--;)f.push(ot({h:s,s:c,v:d})),d=(d+g)%1;return f}ot.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,i,l,s=this.toRgb();return a=s.r/255,i=s.g/255,l=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(a){return this._a=qy(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=Jm(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=Jm(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+i+", "+l+"%, "+s+"%)":"hsva("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=Fm(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Fm(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+i+", "+l+"%, "+s+"%)":"hsla("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return Wm(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(i,l,s,c,d){var f=[zn(Math.round(i).toString(16)),zn(Math.round(l).toString(16)),zn(Math.round(s).toString(16)),zn(Py(c))];return d&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ee(this._r,255))+"%",g:Math.round(100*ee(this._g,255))+"%",b:Math.round(100*ee(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ee(this._r,255))+"%, "+Math.round(100*ee(this._g,255))+"%, "+Math.round(100*ee(this._b,255))+"%)":"rgba("+Math.round(100*ee(this._r,255))+"%, "+Math.round(100*ee(this._g,255))+"%, "+Math.round(100*ee(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&($S[Wm(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var i="#"+$m(this._r,this._g,this._b,this._a),l=i,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=ot(a);l="#"+$m(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+l+")"},toString:function(a){var i=!!a;a=a||this._format;var l=!1,s=this._a<1&&this._a>=0;return i||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(l=this.toRgbString()),a==="prgb"&&(l=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(l=this.toHexString()),a==="hex3"&&(l=this.toHexString(!0)),a==="hex4"&&(l=this.toHex8String(!0)),a==="hex8"&&(l=this.toHex8String()),a==="name"&&(l=this.toName()),a==="hsl"&&(l=this.toHslString()),a==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ot(this.toString())},_applyModification:function(a,i){var l=a.apply(null,[this].concat([].slice.call(i)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(YS,arguments)},brighten:function(){return this._applyModification(GS,arguments)},darken:function(){return this._applyModification(ZS,arguments)},desaturate:function(){return this._applyModification(qS,arguments)},saturate:function(){return this._applyModification(PS,arguments)},greyscale:function(){return this._applyModification(XS,arguments)},spin:function(){return this._applyModification(QS,arguments)},_applyCombination:function(a,i){return a.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(JS,arguments)},complement:function(){return this._applyCombination(KS,arguments)},monochromatic:function(){return this._applyCombination(WS,arguments)},splitcomplement:function(){return this._applyCombination(FS,arguments)},triad:function(){return this._applyCombination(Im,[3])},tetrad:function(){return this._applyCombination(Im,[4])}},ot.fromRatio=function(a,i){if(cs(a)=="object"){var l={};for(var s in a)a.hasOwnProperty(s)&&(l[s]=s==="a"?a[s]:bl(a[s]));a=l}return ot(a,i)},ot.equals=function(a,i){return!(!a||!i)&&ot(a).toRgbString()==ot(i).toRgbString()},ot.random=function(){return ot.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ot.mix=function(a,i,l){l=l===0?0:l||50;var s=ot(a).toRgb(),c=ot(i).toRgb(),d=l/100;return ot({r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a})},ot.readability=function(a,i){var l=ot(a),s=ot(i);return(Math.max(l.getLuminance(),s.getLuminance())+.05)/(Math.min(l.getLuminance(),s.getLuminance())+.05)},ot.isReadable=function(a,i,l){var s,c,d=ot.readability(a,i);switch(c=!1,(s=function(f){var g,m;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),m=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),m!=="small"&&m!=="large"&&(m="small"),{level:g,size:m}}(l)).level+s.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},ot.mostReadable=function(a,i,l){var s,c,d,f,g=null,m=0;c=(l=l||{}).includeFallbackColors,d=l.level,f=l.size;for(var h=0;h<i.length;h++)(s=ot.readability(a,i[h]))>m&&(m=s,g=ot(i[h]));return ot.isReadable(a,g,{level:d,size:f})||!c?g:(l.includeFallbackColors=!1,ot.mostReadable(a,["#fff","#000"],l))};var yf=ot.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},$S=ot.hexNames=function(a){var i={};for(var l in a)a.hasOwnProperty(l)&&(i[a[l]]=l);return i}(yf);function qy(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function ee(a,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var l=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(a);return a=Math.min(i,Math.max(0,parseFloat(a))),l&&(a=parseInt(a*i,10)/100),Math.abs(a-i)<1e-6?1:a%i/parseFloat(i)}function ms(a){return Math.min(1,Math.max(0,a))}function dn(a){return parseInt(a,16)}function zn(a){return a.length==1?"0"+a:""+a}function bl(a){return a<=1&&(a=100*a+"%"),a}function Py(a){return Math.round(255*parseFloat(a)).toString(16)}function tg(a){return dn(a)/255}var Ua,Ir,ts,Rn=(Ir="[\\s|\\(]+("+(Ua="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ua+")[,|\\s]+("+Ua+")\\s*\\)?",ts="[\\s|\\(]+("+Ua+")[,|\\s]+("+Ua+")[,|\\s]+("+Ua+")[,|\\s]+("+Ua+")\\s*\\)?",{CSS_UNIT:new RegExp(Ua),rgb:new RegExp("rgb"+Ir),rgba:new RegExp("rgba"+ts),hsl:new RegExp("hsl"+Ir),hsla:new RegExp("hsla"+ts),hsv:new RegExp("hsv"+Ir),hsva:new RegExp("hsva"+ts),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ra(a){return!!Rn.CSS_UNIT.exec(a)}var gs=function(a,i){var l=(typeof a=="string"?parseInt(a):a)||0;if(l>=-5&&l<=5){var s=l,c=parseFloat(i),d=c+s*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},ys=function(a,i){var l=a||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(l.fontSize){var d=l.fontSize;c=function(f,g){var m={};for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&g.indexOf(h)<0&&(m[h]=f[h]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(f);y<h.length;y++)g.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(f,h[y])&&(m[h[y]]=f[h[y]])}return m}(l,["fontSize"]),s=d}return{fontSize:s,styles:c}},IS={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},bs=function(a){var i=a.className,l=a.text,s=a.textColor,c=a.staticText,d=a.style;return l?Lt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:Xt(Xt(Xt({},c&&IS),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof l=="string"&&l.length?l:"loading"):null},_l="rgb(50, 205, 50)";function vs(a,i){if(i===void 0&&(i=0),a.length===0)throw new Error("Input array cannot be empty!");var l=[];return function s(c,d){return d===void 0&&(d=0),l.push.apply(l,c),l.length<d&&s(l,d),l.slice(0,d)}(a,i)}De(`.atom-rli-bounding-box {
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
}`);ot(_l).toRgb();Array.from({length:4},function(a,i){return"--atom-phase".concat(i+1,"-rgb")});De(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--commet-phase".concat(i+1,"-color")});De(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-annulus-phase".concat(i+1,"-color")});function Kc(a){return a&&a.Math===Math&&a}De(`.OP-dotted-rli-bounding-box {
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
}`);Kc(typeof window=="object"&&window)||Kc(typeof self=="object"&&self)||Kc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,i){return"--OP-dotted-phase".concat(i+1,"-color")});De(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-spokes-phase".concat(i+1,"-color")});De(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")});De(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]});De(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--four-square-phase".concat(i+1,"-color")});De(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--mosaic-phase".concat(i+1,"-color")});De(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--riple-phase".concat(i+1,"-color")});De(`.pulsate-rli-bounding-box {
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
}`);var Wi=Array.from({length:4},function(a,i){return"--TD-pulsate-phase".concat(i+1,"-color")}),tT=function(a){var i,l=ys(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=gs(a?.speedPlus,"1.2s").animationPeriod,g=function(m){var h={};if(m instanceof Array){for(var y=vs(m,Wi.length),v=0;v<y.length&&!(v>=4);v++)h[Wi[v]]=y[v];return h}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<Wi.length;x++)h[Wi[x]]=m}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),x=0;x<Wi.length;x++)h[Wi[x]]=_l}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Lt.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Xt(Xt(Xt(Xt(Xt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Lt.createElement("span",{className:"rli-d-i-b pulsate-indicator"},Lt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Lt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Lt.createElement("span",{className:"rli-d-i-b pulsate-dot"})),Lt.createElement(bs,{staticText:!0,text:a?.text,textColor:a?.textColor}))};De(`.brick-stack-rli-bounding-box {
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
}`);var $i=Array.from({length:4},function(a,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}),eT=function(a){var i,l=ys(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=gs(a?.speedPlus,"1s").animationPeriod,g=function(m){var h={};if(m instanceof Array){for(var y=vs(m,$i.length),v=0;v<y.length&&!(v>=4);v++)h[$i[v]]=y[v];return h}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<$i.length;x++)h[$i[x]]=m}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),x=0;x<$i.length;x++)h[$i[x]]=_l}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Lt.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Xt(Xt(Xt(Xt(Xt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Lt.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},Lt.createElement("span",{className:"rli-d-i-b brick-stack"})),Lt.createElement(bs,{staticText:!0,text:a?.text,textColor:a?.textColor}))};De(`.bob-rli-bounding-box {
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
}`);var Ii=Array.from({length:4},function(a,i){return"--TD-bob-phase".concat(i+1,"-color")}),nT=function(a){var i,l=ys(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=gs(a?.speedPlus,"1.2s").animationPeriod,g=function(m){var h={};if(m instanceof Array){for(var y=vs(m,Ii.length),v=0;v<y.length&&!(v>=4);v++)h[Ii[v]]=y[v];return h}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<Ii.length;x++)h[Ii[x]]=m}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),x=0;x<Ii.length;x++)h[Ii[x]]=_l}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Lt.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Xt(Xt(Xt(Xt(Xt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Lt.createElement("span",{className:"bob-indicator"},Lt.createElement("span",{className:"bobbing"})),Lt.createElement(bs,{staticText:!0,text:a?.text,textColor:a?.textColor}))};De(`.bounce-rli-bounding-box {
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
}`);var to=Array.from({length:4},function(a,i){return"--TD-bounce-phase".concat(i+1,"-color")}),aT=function(a){var i,l=ys(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=gs(a?.speedPlus,"0.5s").animationPeriod,g=function(m){var h={};if(m instanceof Array){for(var y=vs(m,to.length),v=0;v<y.length&&!(v>=4);v++)h[to[v]]=y[v];return h}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<to.length;x++)h[to[x]]=m}catch{for(x=0;x<to.length;x++)h[to[x]]=_l}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Lt.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Xt(Xt(Xt(Xt(Xt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s)},Lt.createElement("span",{className:"wrapper"},Lt.createElement("span",{className:"group"},Lt.createElement("span",{className:"rli-d-i-b dot"}),Lt.createElement("span",{className:"rli-d-i-b dot"}),Lt.createElement("span",{className:"rli-d-i-b dot"})),Lt.createElement("span",{className:"group"},Lt.createElement("span",{className:"rli-d-i-b shadow"}),Lt.createElement("span",{className:"rli-d-i-b shadow"}),Lt.createElement("span",{className:"rli-d-i-b shadow"}))),Lt.createElement(bs,{staticText:!0,text:a?.text,textColor:a?.textColor,style:{marginTop:"2px"}}))},eg=function(a){var i=Object(a).variant,l=i===void 0?"pulsate":i;return l==="pulsate"?Lt.createElement(tT,Xt({},a)):l==="brick-stack"?Lt.createElement(eT,Xt({},a)):l==="bob"?Lt.createElement(nT,Xt({},a)):l==="bounce"?Lt.createElement(aT,Xt({},a)):null};De(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--shape-phase".concat(i+1,"-color")});De(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--trophySpin-phase".concat(i+1,"-color")});De(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--slab-phase".concat(i+1,"-color")});De(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--life-line-phase".concat(i+1,"-color")});const ng="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20width='124'%20height='346'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3c!--%20Created%20with%20SVG-edit%20-%20https://github.com/SVG-Edit/svgedit--%3e%3cg%20class='layer'%3e%3ctitle%3eLayer%201%3c/title%3e%3cpath%20d='m5,79.76l57,-74.77l57,74.77l-28.5,0l0,75.13l-57,0l0,-75.13z'%20fill='%23000000'%20fill-opacity='0'%20id='svg_4'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='13'%20transform='rotate(180%2062.0005%2079.9424)'/%3e%3cpath%20d='m5,265.76l57,-74.77l57,74.77l-28.5,0l0,75.13l-57,0l0,-75.13z'%20fill='%23000000'%20fill-opacity='0'%20id='svg_6'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='13'/%3e%3c/g%3e%3c/svg%3e",iT=({startX:a,startY:i,endX:l,endY:s})=>A.jsx(Bt.line,{x1:a,y1:i,x2:l,y2:s,className:"active-connection",markerEnd:"url(#arrowhead)",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2}}),Xy=({x:a,y:i,sumText:l})=>A.jsxs("g",{children:[A.jsx("line",{x1:a-25,y1:i-5,x2:a+25,y2:i-5,stroke:"#ffffff",strokeWidth:"1"}),A.jsx("text",{x:a,y:i-10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1"}),A.jsx("text",{x:a-10,y:i+10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1 + e"}),A.jsxs("text",{x:a+8,y:i+5,fill:"#ffffff",fontSize:"8px",textAnchor:"start",children:["-",l]})]}),oT=({connection:a,neurons:i,neuronRadius:l,neuronTransforms:s,isGlowing:c,emphasizedConnections:d,showForwardPassVisuals:f,inputData:g,currentSampleIndex:m,neuronHeaders:h,hiddenWeights:y,inputNeurons:v,hiddenNeurons:x,hiddenBiases:w,outputWeights:M,outputBiases:O,showSigmoidPhase:j,outputNeurons:B,isEraserMode:Y,onEraseConnection:q,eraserHoveredConnection:W,setEraserHoveredConnection:P})=>{const F=i.find(_t=>_t.id===a.fromNeuronId),Q=i.find(_t=>_t.id===a.toNeuronId);if(!F||!Q)return null;const G=W===a.id,lt=d.includes(a.id),ft=f?lt?1:.3:1,Ut=s[a.fromNeuronId]||{x:0,y:0},Qt=s[a.toNeuronId]||{x:0,y:0},Ce=F.x+Ut.x,he=F.y+Ut.y,Kt=Q.x+Qt.x,N=Q.y+Qt.y,Z=(_t,It,Ft,Nt)=>{switch(It){case"top":return{x:Ft,y:Nt-l};case"right":return{x:Ft+l,y:Nt};case"bottom":return{x:Ft,y:Nt+l};case"left":return{x:Ft-l,y:Nt};default:return{x:Ft,y:Nt}}},$=Z(F,a.fromDirection,Ce,he),yt=Z(Q,a.toDirection,Kt,N),T=($.x+yt.x)/2;let H=($.y+yt.y)/2;const I=Math.atan2(yt.y-$.y,yt.x-$.x)*(180/Math.PI),J=()=>{if(!f||!g[m]||!d.includes(a.id))return null;const _t=h[F.label]||F.label,It=h[Q.label]||Q.label;if(F.type==="input"&&Q.type==="hidden"){const Ft=parseFloat(g[m][_t])||0,Nt=y[`${_t}-${It}`]||0,at=w[It]||0,Dt=Ft*Nt+at;return`${Ft} × ${Nt.toFixed(1)} + ${at.toFixed(1)} = ${Dt.toFixed(1)}`}if(F.type==="hidden"&&Q.type==="output"){let Ft=0;v.forEach(pe=>{const ae=h[pe.label]||pe.label,Qe=parseFloat(g[m][ae])||0,be=y[`${ae}-${_t}`]||0;Ft+=Qe*be});const Nt=w[_t]||0,at=Ft+Nt,Dt=Math.max(0,at),Rt=M[`${_t}-${It}`]||0;O[It];const Et=(Dt*Rt).toFixed(1);return`${Dt.toFixed(0)} × ${Rt.toFixed(1)} = ${Et}`}return F.type==="output"&&Q.type==="display"&&a.isSigmoidConnection,null},rt=()=>{if(!(F.type==="output"&&Q.type==="display"&&a.isSigmoidConnection))return null;H-=20;const _t=h[F.label]||F.label;let It=0;x.forEach(at=>{const Dt=h[at.label]||at.label;let Rt=0;v.forEach(be=>{const an=h[be.label]||be.label,kn=parseFloat(g[m][an])||0,Nn=y[`${an}-${Dt}`]||0;Rt+=kn*Nn});const Et=w[Dt]||0,pe=Rt+Et,ae=Math.max(0,pe),Qe=M[`${Dt}-${_t}`]||0;It+=ae*Qe});const Ft=O[_t]||0;It+=Ft;const Nt=It.toFixed(1);return A.jsx(Xy,{x:T,y:H,sumText:Nt})},bt=(_t,It,Ft)=>{let Nt=-1;for(let Rt=0;Rt<_t&&(Nt=Ft.indexOf(" ",Nt+1),Nt!==-1);Rt++);const at=Ft.slice(0,Nt),Dt=Ft.slice(Nt);return A.jsxs(A.Fragment,{children:[at,A.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:It}),Dt]})};function st(_t,It="11px Segoe UI"){const Nt=document.createElement("canvas").getContext("2d");return Nt.font=It,Nt.measureText(_t).width+16}let Ht=J(),wt="11px";if(Ht){const _t=Math.sqrt(Math.pow(yt.x-$.x,2)+Math.pow(yt.y-$.y,2));st(Ht)>_t&&(wt="9px",console.log("too big")),Ht=bt(3,Q.label.toLowerCase(),Ht)}const ze=a.isAnimating?"active-connection":c?"completed-connection glowing-connection":"completed-connection";return A.jsxs("g",{children:[A.jsx(Bt.line,{x1:$.x,y1:$.y,x2:yt.x,y2:yt.y,className:ze,markerEnd:a.isAnimating?void 0:"url(#arrowhead)",initial:a.isAnimating?{pathLength:0}:{pathLength:1,opacity:ft},animate:a.isAnimating?{pathLength:1,opacity:ft}:{opacity:ft,stroke:Y&&G?"#ef4444":"#ffffff"},transition:a.isAnimating?{duration:.6,ease:"easeInOut"}:{duration:.2},style:{cursor:Y?"crosshair":"default"},onMouseEnter:()=>{Y&&P(a.id)},onMouseLeave:()=>{Y&&P(null)},onClick:_t=>{Y&&(_t.stopPropagation(),q(a.id))}}),Ht&&A.jsx(Bt.text,{x:T,y:H-8,className:"formula-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{fontSize:wt,fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},transform:`rotate(${I}, ${T}, ${H-8})`,children:Ht}),d.includes(a.id)&&A.jsx(Bt.g,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:rt()})]})},lT=({x:a,y:i,neuronId:l,direction:s,onStartConnection:c,isHighlighted:d=!1})=>A.jsx(Bt.circle,{cx:a,cy:i,r:4,className:`connection-dot ${d?"connection-dot-highlighted":""}`,onClick:f=>{f.stopPropagation(),c(l,s,a,i,f)},whileHover:{scale:1.2},initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2},style:{cursor:"pointer"}}),rT=({id:a,x:i,y:l,radius:s,label:c,type:d,onDragEnd:f,onStartConnection:g,highlightedDots:m=[],onDragUpdate:h,isGlowing:y,neurons:v,showForwardPassVisuals:x,emphasizedConnections:w,hiddenNeurons:M,inputNeurons:O,outputNeurons:j,neuronHeaders:B,hiddenWeights:Y,outputWeights:q,inputData:W,currentSampleIndex:P,hiddenBiases:F,connections:Q,showSigmoidPhase:G,outputBiases:lt,isEraserMode:ft,onEraseNeuron:Ut,eraserHoveredNeuron:Qt,setEraserHoveredNeuron:Ce})=>{const[he,Kt]=X.useState(!1),[N,Z]=X.useState(!1),$=Qt===a,yt=ft&&$?.5:1,T=v.find(at=>at.id===a),H=x&&(T?.type==="input"||T?.type==="hidden"&&Q.some(at=>w.includes(at.id)&&(at.fromNeuronId===a||at.toNeuronId===a))||T?.type==="output"&&(w.some(at=>{const Dt=Q.find(Rt=>Rt.id===at);return Dt&&Dt.toNeuronId===a})||G)||T?.type==="display"),I=x&&!H?.3:1,J=at=>{const Dt="neuron",Rt=at==="input"?"neuron-input":at==="hidden"?"neuron-hidden":at==="output"?"neuron-output":at.startsWith("hidden")?"neuron-hidden":"neuron";return y?`${Dt} ${Rt} glowing-neuron`:`${Dt} ${Rt}`},bt=(at=>{const Dt=B[at.label]||at.label,Rt=[];return at.type==="hidden"?O.forEach(Et=>{const pe=B[Et.label]||Et.label,ae=Y[`${pe}-${Dt}`]||0;Rt.push(ae)}):at.type==="output"&&M.forEach(Et=>{const pe=B[Et.label]||Et.label,ae=q[`${pe}-${Dt}`]||0;Rt.push(ae)}),Rt})(T||{type:d,label:c}),st=bt.length>0?`[${bt.map(at=>at.toFixed(1)).join(", ")}]`:"",Ht=()=>{if(d==="input"&&x&&W[P]){const at=B[c]||c;return W[P][at]||""}return""},wt=()=>{if(d==="hidden"&&x&&W[P]){const at=B[c]||c;if(Q.some(Rt=>w.includes(Rt.id)&&Rt.toNeuronId===a&&O.some(Et=>Et.id===Rt.fromNeuronId))){let Rt=0;O.forEach(ae=>{const Qe=B[ae.label]||ae.label,be=parseFloat(W[P][Qe])||0,an=Y[`${Qe}-${at}`]||0;Rt+=be*an});const Et=F[at]||0;return(Rt+Et).toFixed(1)}}return""},ze=()=>{if(d==="output"&&x&&G&&W[P]){const at=B[c]||c,Dt=[];M.forEach(Et=>{const pe=B[Et.label]||Et.label;let ae=0;O.forEach(Gn=>{const ke=B[Gn.label]||Gn.label,ve=parseFloat(W[P][ke])||0,hn=Y[`${ke}-${pe}`]||0;ae+=ve*hn});const Qe=F[pe]||0,be=ae+Qe,an=Math.max(0,be),kn=q[`${pe}-${at}`]||0,Nn=an*kn;Dt.push(Nn.toFixed(1))});const Rt=lt[at]||0;return`${Dt.join(" + ")} + ${Rt.toFixed(1)}`}return""},_t=()=>{if(d==="output"&&x&&G&&W[P]){const at=B[c]||c;let Dt=0;M.forEach(Et=>{const pe=B[Et.label]||Et.label;let ae=0;O.forEach(Nn=>{const Gn=B[Nn.label]||Nn.label,ke=parseFloat(W[P][Gn])||0,ve=Y[`${Gn}-${pe}`]||0;ae+=ke*ve});const Qe=F[pe]||0,be=ae+Qe,an=Math.max(0,be),kn=q[`${pe}-${at}`]||0;Dt+=an*kn});const Rt=lt[at]||0;return Dt+=Rt,Dt.toFixed(1)}return""},It=[{direction:"top",x:0,y:-s},{direction:"right",x:s,y:0},{direction:"bottom",x:0,y:s},{direction:"left",x:-s,y:0}],Ft=()=>{he||(Z(!0),ft&&Ce(a))},Nt=()=>{Z(!1),ft&&Ce(null)};return A.jsxs(Bt.g,{drag:!0,dragMomentum:!1,dragElastic:.1,initial:{x:i,y:l},animate:{x:i,y:l,opacity:I},onDragStart:()=>{Kt(!0),Z(!1)},onDrag:(at,Dt)=>{h(a,Dt.offset.x,Dt.offset.y)},onDragEnd:(at,Dt)=>{Kt(!1);const Rt=i+Dt.offset.x,Et=l+Dt.offset.y;f(a,Rt,Et),h(a,0,0)},whileDrag:{scale:1.1},onMouseEnter:Ft,onMouseLeave:Nt,style:{cursor:he?"grabbing":"default"},children:[A.jsx("circle",{cx:0,cy:0,r:s+20,fill:"transparent",style:{pointerEvents:"all",cursor:"default"}}),A.jsx(Bt.circle,{cx:0,cy:0,r:s,className:J(d),initial:{scale:0,opacity:0},animate:{scale:1,opacity:yt,stroke:ft&&$?"#ef4444":void 0,strokeWidth:ft&&$?3:void 0},transition:{duration:.6,type:"spring"},style:{cursor:ft?"crosshair":he?"grabbing":"grab"},onClick:at=>{at.button===0&&ft&&(at.stopPropagation(),Ut(a))}}),(wt()||d==="output"&&G)&&A.jsx("rect",{x:-23,y:-9,width:46,height:18,rx:3,fill:"rgb(6, 129, 0)",stroke:"#22c55e",strokeWidth:2}),A.jsx(Bt.text,{x:0,y:5,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},style:{pointerEvents:"none"},children:wt()?"ReLU":d==="output"&&G?"Sig":c}),st&&!(d==="output"&&G)&&A.jsx(Bt.text,{x:0,y:-s-10,className:wt()?"neuron-text":"neuron-weights-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{},children:wt()||st}),d==="output"&&G&&ze()&&A.jsxs(Bt.text,{x:0,y:-s-25,className:"formula-text",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{fontSize:"11px",fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},children:[ze(),A.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:"b2"})]}),d==="output"&&G&&_t()&&A.jsx(Bt.text,{x:0,y:-s-10,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},style:{pointerEvents:"none"},children:_t()}),d==="input"&&x&&Ht()&&A.jsx(Bt.text,{x:0,y:-s*1.3,className:"input-value-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},style:{pointerEvents:"none",fontSize:"14px",fill:"#ffffff",textAnchor:"middle"},children:Ht()}),A.jsx(sf,{children:N&&!he&&It.map(at=>A.jsx(lT,{x:at.x,y:at.y,neuronId:a,direction:at.direction,onStartConnection:g,isHighlighted:m.includes(at.direction)},at.direction))})]})},ag=(a,i)=>{const l=a.length,s=a[0].length,c=i[0].length,d=Array(l).fill().map(()=>Array(c).fill(0));for(let f=0;f<l;f++)for(let g=0;g<c;g++)for(let m=0;m<s;m++)d[f][g]+=a[f][m]*i[m][g];return d},ig=(a,i)=>a.map(l=>l.map((s,c)=>s+(i[c]||0))),sT=a=>a.map(i=>i.map(l=>Math.max(0,l))),uT=a=>a.map(i=>i.map(l=>1/(1+Math.exp(-l)))),cT=(a,i)=>a.map((s,c)=>{const d=Math.max(1e-15,Math.min(.999999999999999,i[c]));return-(s*Math.log(d)+(1-s)*Math.log(1-d))}),fT=(a,i,l,s,c,d,f,g,m,h)=>{const y=a.filter(v=>{const x=i.some(M=>v[M.label]&&v[M.label].trim()!==""),w=v.Truth!==void 0&&v.Truth!=="";return x&&w});if(y.length===0){alert("Please add input data with truth values");return}if(l.length===0||s.length===0){alert("Please add hidden and output neurons");return}try{const v=y.map(Q=>i.map(G=>parseFloat(Q[G.label])||0)),x=y.map(Q=>parseFloat(Q.Truth)||0),w=i.map(Q=>l.map(G=>{const lt=c[Q.label]||Q.label,ft=c[G.label]||G.label;return d[`${lt}-${ft}`]||0})),M=l.map(Q=>{const G=c[Q.label]||Q.label;return f[G]||0}),O=l.map(Q=>s.map(G=>{const lt=c[Q.label]||Q.label,ft=c[G.label]||G.label;return g[`${lt}-${ft}`]||0})),j=s.map(Q=>{const G=c[Q.label]||Q.label;return m[G]||0});let B=ag(v,w);B=ig(B,M);const Y=sT(B);let q=ag(Y,O);q=ig(q,j);const P=uT(q).map(Q=>Q[0]),F=cT(x,P);h({predictions:P,truthValues:x,losses:F,showResults:!0})}catch(v){console.error("Error in forward pass:",v),console.error("Error stack:",v.stack),alert("Error in calculation. Please check your inputs and weights.")}},og=({title:a,neurons:i,data:l,setData:s,onHeaderChange:c,onCellHover:d,isOutput:f=!1,truthValues:g=[],predictions:m=[],losses:h=[]})=>{const y=()=>{f||s(M=>[...M,{}])},v=(M,O,j)=>{f||(s(B=>{const Y=[...B];return Y[M]||(Y[M]={}),Y[M][O]=j,Y}),M===l.length-1&&j.trim()!==""&&y())},x=(M,O,j)=>{O===j||f||(s(B=>B.map(Y=>{if(Y[O]!==void 0){const q={...Y};return q[j]=Y[O],delete q[O],q}return Y})),c(O,j))},w=M=>M<.3?"#22c55e":M<.7?"#eab308":"#ef4444";return!f&&i.length===0?null:A.jsxs("div",{className:"input-table-container",children:[A.jsx("h3",{className:"table-title",children:a}),A.jsx("div",{className:"table-scroll-wrapper",style:{maxHeight:"15rem",maxWidth:"350px"},children:A.jsxs("table",{className:"neural-table input-table",children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{children:A.jsx("input",{type:"text",className:"header-input",value:"Truth",readOnly:!0})}),!f&&i.map(M=>A.jsx("th",{children:A.jsx("input",{type:"text",className:"header-input",value:M.label,onChange:O=>x(M.id,M.label,O.target.value||M.label),onKeyDown:O=>{O.key==="Enter"&&O.target.blur()}})},M.id)),f&&A.jsxs(A.Fragment,{children:[A.jsx("th",{children:A.jsx("input",{type:"text",className:"header-input",value:"ŷ",readOnly:!0})}),A.jsx("th",{children:A.jsx("input",{type:"text",className:"header-input",value:"Loss",readOnly:!0})})]})]})}),A.jsx("tbody",{children:(f?g:l).map((M,O)=>A.jsxs("tr",{children:[A.jsx("td",{children:A.jsx("input",{type:"number",className:"cell-input",value:f?g[O]:M.Truth||"",onChange:f?void 0:j=>{const B=j.target.value;(B===""||B==="0"||B==="1")&&v(O,"Truth",B)},placeholder:"0",min:"0",max:"1",step:"1",readOnly:f})}),!f&&i.map(j=>A.jsx("td",{children:A.jsx("input",{type:"number",className:"cell-input",value:M[j.label]||"",onChange:B=>v(O,j.label,B.target.value),onMouseEnter:()=>d("neuron",j.label),onMouseLeave:()=>d(null),onFocus:()=>d("neuron",j.label),onBlur:()=>d(null),placeholder:"0",step:"0.1"})},j.id)),f&&A.jsxs(A.Fragment,{children:[A.jsx("td",{children:A.jsx("input",{type:"number",className:"cell-input",value:m[O]?.toFixed(4)||"",readOnly:!0})}),A.jsx("td",{children:A.jsx("input",{type:"number",className:"cell-input",value:h[O]?.toFixed(4)||"",style:{backgroundColor:h[O]?w(h[O]):"transparent",color:h[O]&&h[O]<1?"#000":"#fff"},readOnly:!0})})]})]},O))})]})})]})},lg=({title:a,inputLabels:i,neuronLabels:l,weights:s,biases:c,onWeightChange:d,onBiasChange:f,onHeaderChange:g,showSaveLoad:m,onSave:h,onLoad:y,onCellHover:v,biasLabel:x="b"})=>l.length===0?null:A.jsxs("div",{className:"weights-table-container",children:[A.jsx("h3",{className:"table-title",style:{marginRight:"30px"},children:a}),A.jsx("div",{className:"table-scroll-wrapper",style:{maxHeight:"235px",maxWidth:"350px"},children:A.jsxs("table",{className:"neural-table weights-table",children:[A.jsxs("thead",{children:[A.jsxs("tr",{children:[A.jsx("th",{className:"bias-label",children:x}),l.map((w,M)=>A.jsx("th",{children:A.jsx("input",{type:"number",className:"bias-input",value:c[w]||"",onChange:O=>f(w,O.target.value),onMouseEnter:()=>v("neuron",w),onMouseLeave:()=>v(null),onFocus:()=>v("neuron",w),onBlur:()=>v(null),placeholder:"0.5",step:"0.1"})},M))]}),A.jsxs("tr",{children:[A.jsx("th",{}),l.map((w,M)=>A.jsx("th",{children:A.jsx("input",{type:"text",className:"header-input",defaultValue:w,onBlur:O=>g(w,O.target.value||w),onKeyDown:O=>{O.key==="Enter"&&O.target.blur()}})},M))]})]}),A.jsx("tbody",{children:i.map((w,M)=>A.jsxs("tr",{children:[A.jsx("td",{className:"row-header",children:w}),l.map((O,j)=>A.jsx("td",{children:A.jsx("input",{type:"number",className:"cell-input",value:s[`${w}-${O}`]||"",onChange:B=>d(w,O,B.target.value),onMouseEnter:()=>v("connection",w,O),onMouseLeave:()=>v(null),onFocus:()=>v("connection",w,O),onBlur:()=>v(null),placeholder:"0.1",step:"0.1"})},j))]},M))})]})})]}),Yy=(a,i)=>a==="input"?`X${i}`:a==="hidden"?`H${i}`:a.startsWith("hidden")?`H${parseInt(a.replace("hidden",""))}${i}`:`Y${i}`,dT=(a,i,l,s,c)=>{let d;a==="input"?d=200:a==="hidden"?d=400:a.startsWith("hidden")?d=400+((parseInt(a.replace("hidden",""))||1)-1)*100:d=400+l*100+100;const f=s-100-90*(i-1);return{x:d,y:f}},hT=(a,i,l,s,c)=>{const{x:d,y:f}=dT(a,i,l,s);return{id:`${a}-${Date.now()}`,x:d,y:f,radius:c,label:Yy(a,i),type:a}},pT=(a,i,l,s,c,d,f)=>{const g=i[a]+1,m=hT(a,g,c,d,f);l(h=>{const y=[...h,m],v=y.filter(x=>x.type===a).sort((x,w)=>x.y-w.y);return y.map(x=>{if(x.type===a){const w=v.findIndex(M=>M.id===x.id);return{...x,label:Yy(a,w+1)}}return x})}),s(h=>({...h,[a]:g}))},mT=async(a,i,l)=>{l(!0);const s=a.filter(h=>h.type==="input").sort((h,y)=>h.y-y.y),c=a.filter(h=>h.type==="hidden"||h.type.startsWith("hidden")).sort((h,y)=>h.x-y.x||h.y-y.y),d=a.filter(h=>h.type==="output").sort((h,y)=>h.y-y.y);if(s.length===0||c.length===0)return;const f={};c.forEach(h=>{const y=h.x;f[y]||(f[y]=[]),f[y].push(h)});const g=Object.keys(f).map(Number).sort(),m=[];if(g.length>0){const h=f[g[0]],y=[];for(const v of s)for(const x of h)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});m.push(y)}for(let h=0;h<g.length-1;h++){const y=f[g[h]],v=f[g[h+1]],x=[];for(const w of y)for(const M of v)x.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:w.id,toNeuronId:M.id,fromDirection:"right",toDirection:"left",isAnimating:!0});m.push(x)}if(d.length>0&&g.length>0){const h=f[g[g.length-1]],y=[];for(const v of h)for(const x of d)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});m.push(y)}m.forEach((h,y)=>{setTimeout(()=>{i(v=>[...v,...h]),setTimeout(()=>{i(v=>v.map(x=>h.some(w=>w.id===x.id)?{...x,isAnimating:!1}:x))},600)},100+y*700)})},rg=`
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
}`,gT="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='18'%20viewBox='0%200%2022%2018'%3e%3cg%3e%3cpolygon%20points='15.828%206%2018%206%2018%208%2022%204%2018%200%2018%202%2014.172%202%204.172%2012%200%2012%200%2016%205.828%2016%2015.828%206'/%3e%3cpolygon%20points='18%2010%2018%2012%2015.828%2012%2014.242%2010.414%2011.414%2013.242%2014.172%2016%2018%2016%2018%2018%2022%2014%2018%2010'/%3e%3cpolygon%20points='5.758%207.586%208.586%204.758%205.828%202%200%202%200%206%204.172%206%205.758%207.586'/%3e%3c/g%3e%3c/svg%3e",en=({matrix:a,label:i,image:l,x:s=0,y:c=0})=>{if(!a||a.length===0)return null;const d=a.length,f=a[0]?.length||0,g=40,m=4;return A.jsxs("div",{className:"matrix-display",style:{position:"relative",fontFamily:"monospace",color:"white"},children:[i&&A.jsx("div",{className:"matrix-label",style:{position:"absolute",top:"-2.2rem",left:"50%",transform:"translateX(-50%)",fontSize:"18px",fontWeight:"bold",whiteSpace:"nowrap"},children:A.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[A.jsx("span",{children:i}),l]})}),A.jsxs("div",{className:"matrix-container",style:{position:"relative"},children:[A.jsx("div",{className:"matrix-bracket-left",style:{position:"absolute",left:"-8px",top:"0",height:`${d*(g+m)-m}px`,width:"6px",borderLeft:"2px solid white",borderTop:"2px solid white",borderBottom:"2px solid white"}}),A.jsx("div",{className:"matrix-bracket-right",style:{position:"absolute",right:"-8px",top:"0",height:`${d*(g+m)-m}px`,width:"6px",borderRight:"2px solid white",borderTop:"2px solid white",borderBottom:"2px solid white"}}),A.jsx("div",{className:"matrix-content",children:a.map((h,y)=>A.jsx("div",{className:"matrix-row",style:{display:"flex",marginBottom:y<d-1?`${m}px`:"0"},children:h.map((v,x)=>A.jsx("div",{className:"matrix-cell",style:{width:`${g}px`,height:`${g}px`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",marginRight:x<f-1?`${m}px`:"0"},children:typeof v=="number"?v.toFixed(1):v},x))},y))})]})]})},eo=({children:a,delay:i=0,isVisible:l=!0})=>A.jsx(Bt.div,{initial:{opacity:0},animate:{opacity:l?1:0},transition:{delay:i,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"40px"},children:a}),no=({symbol:a})=>A.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:a}),sg=({label:a,label2:i,children:l})=>A.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},children:[A.jsx("div",{style:{fontSize:"16px",color:"white",fontWeight:"bold",backgroundColor:"rgb(6, 129, 0)",border:"2px solid #22c55e",borderRadius:"8px",padding:"2px 8px"},children:a}),A.jsx("img",{src:gT,alt:"Activation Arrow",style:{width:"24px",height:"24px",filter:"invert(1)"}}),A.jsxs("div",{style:{fontSize:"16px",color:"white"},children:[" ",i," "]}),l]}),yT=({matrixSteps:a})=>A.jsx(Bt.div,{initial:{opacity:0,scaleY:0},animate:{opacity:a.showDivider?1:0,scaleY:a.showDivider?1:0},transition:{duration:.8},style:{width:"5px",height:"30rem",backgroundColor:"white",margin:"0 60px",transformOrigin:"top"}}),ug=!0;function bT(){const[a,i]=X.useState([]),[l,s]=X.useState([]),[c,d]=X.useState(!1),[f,g]=X.useState(1),[m,h]=X.useState(null),[y,v]=X.useState(null),[x,w]=X.useState({input:0,hidden:0,output:0,...Array.from({length:10},(V,K)=>({[`hidden${K+2}`]:0})).reduce((V,K)=>({...V,...K}),{})}),[M,O]=X.useState([{}]),[j,B]=X.useState({}),[Y,q]=X.useState({}),[W,P]=X.useState({}),[F,Q]=X.useState({}),[G,lt]=X.useState({}),[ft,Ut]=X.useState(null),[Qt,Ce]=X.useState({x:0,y:0}),[he,Kt]=X.useState(null),[N,Z]=X.useState({}),[$,yt]=X.useState([]),[T,H]=X.useState([]),[I,J]=X.useState([]),[rt,bt]=X.useState(!1),[st,Ht]=X.useState(!1),[wt,ze]=X.useState(!1),[_t,It]=X.useState(!1),[Ft,Nt]=X.useState([]),[at,Dt]=X.useState(0),[Rt,Et]=X.useState(!1),[pe,ae]=X.useState(null),[Qe,be]=X.useState(!1),[an,kn]=X.useState(5),[Nn,Gn]=X.useState(!1),[ke,ve]=X.useState(!1),[hn,Le]=X.useState(null),[xs,Vl]=X.useState(null),[Ul,hi]=X.useState(!0),[pi,On]=X.useState(!1),[Tt,He]=X.useState({}),[Ss,po]=X.useState(!1);function xe(V,K){let gt=-1*(an-5)/10*V;return K&&gt<0&&(gt=Math.max(0,gt)),new Promise(vt=>setTimeout(vt,V+gt))}X.useEffect(()=>{if(!localStorage.getItem("neuralNetworkData")){be(!0);const V=setTimeout(()=>be(!1),6e3);return()=>clearTimeout(V)}},[]),X.useEffect(()=>{const V=K=>{K.key==="`"&&Gn(et=>!et)};return window.addEventListener("keydown",V),()=>{window.removeEventListener("keydown",V)}},[]);const ca=X.useRef(null),Ne=30,Ts=400;let mi=[];const mo=()=>{fT(M,Pe,Se,je,G,j,Y,W,F,V=>{mi=V.predictions,yt(V.predictions),H(V.truthValues),J(V.losses),bt(V.showResults)})},go=async()=>{if(Se.length===0)return;Ht(!0),bt(!1),await xe(500),On(!0);const V=M.filter(nt=>{const Jt=Pe.some(Je=>nt[Je.label]&&nt[Je.label].trim()!==""),Xe=nt.Truth!==void 0&&nt.Truth!=="";return Jt&&Xe});if(V.length===0){alert("Please add input data with truth values"),Ht(!1),On(!1);return}const K=V.map(nt=>Pe.map(Jt=>parseFloat(nt[Jt.label])||0)),et=Pe.map(nt=>Se.map(Jt=>{const Xe=G[nt.label]||nt.label,Je=G[Jt.label]||Jt.label;return j[`${Xe}-${Je}`]||0})),gt=Se.map(nt=>{const Jt=G[nt.label]||nt.label;return Y[Jt]||0}),vt=Array(K.length).fill(gt),dt=K.map(nt=>et[0].map((Jt,Xe)=>nt.reduce((Je,pn,bi)=>Je+pn*et[bi][Xe],0))),ut=dt.map(nt=>nt.map((Jt,Xe)=>Jt+gt[Xe])),zt=ut.map(nt=>nt.map(Jt=>Math.max(0,Jt)));let Ct,Me,_n,Vn,yi,Ya;const So=je.length>0;So&&(Ct=Se.map(nt=>je.map(Jt=>{const Xe=G[nt.label]||nt.label,Je=G[Jt.label]||Jt.label;return W[`${Xe}-${Je}`]||0})),Me=je.map(nt=>{const Jt=G[nt.label]||nt.label;return F[Jt]||0}),_n=Array(zt.length).fill(Me),Vn=zt.map(nt=>Ct[0].map((Jt,Xe)=>nt.reduce((Je,pn,bi)=>Je+pn*Ct[bi][Xe],0))),yi=Vn.map(nt=>nt.map((Jt,Xe)=>Jt+Me[Xe])),Ya=yi.map(nt=>nt.map(Jt=>1/(1+Math.exp(-Jt))))),He({step:1,X:K,W1:et,b1:gt,XW1:dt,b1Matrix:vt,Z1:ut,A1:zt,W2:Ct,b2:Me,b2Matrix:_n,A1W2:Vn,Z2:yi,A2:Ya,hasOutputLayer:So,showFormula:!1,showXW1:!1,showZ1:!1,showReLU:!1,showDivider:!1,showLayer2Formula:!1,showA1W2:!1,showZ2:!1,showSigmoid:!1}),await xe(1e3),He(nt=>({...nt,showFormula:!0})),await xe(1500),He(nt=>({...nt,showXW1:!0})),await xe(1500),He(nt=>({...nt,showZ1:!0})),await xe(1e3),He(nt=>({...nt,showReLU:!0})),So&&(await xe(1500),He(nt=>({...nt,showDivider:!0})),await xe(1e3),He(nt=>({...nt,showLayer2Formula:!0})),await xe(1500),He(nt=>({...nt,showA1W2:!0})),await xe(1500),He(nt=>({...nt,showZ2:!0})),await xe(1e3),He(nt=>({...nt,showSigmoid:!0})))},yo=V=>{ke&&(i(K=>K.filter(et=>et.id!==V)),s(K=>K.filter(et=>et.fromNeuronId!==V&&et.toNeuronId!==V)),v(null),Le(null))},Bl=V=>{ke&&(s(K=>K.filter(et=>et.id!==V)),h(null),Vl(null))},As=async()=>{if(Ul){if(Se.length===0)return;Ht(!0),bt(!1),It(!0),Dt(0),Et(!1),ae(null);const V=async K=>{const et=Se[K];if(!et)return;const gt=l.filter(dt=>dt.toNeuronId===et.id&&Pe.some(ut=>ut.id===dt.fromNeuronId)).map(dt=>dt.id);Nt(dt=>Array.from(new Set([...dt,...gt]))),await xe(3e3);const vt=l.filter(dt=>dt.fromNeuronId===et.id&&je.some(ut=>ut.id===dt.toNeuronId)).map(dt=>dt.id);Nt(dt=>Array.from(new Set([...dt,...vt]))),await xe(2e3),Nt(dt=>dt.filter(ut=>!gt.includes(ut)))};for(let K=0;K<Se.length;K++)await V(K);if(Et(!0),await xe(3e3),mo(),je.length>0&&mi.length>0){const K=je[0],et=mi[0].toFixed(4),gt={id:`display-${Date.now()}`,x:K.x+150,y:K.y,radius:30,label:et,type:"display"};ae(gt),i(dt=>[...dt,gt]);const vt={id:`sigmoid-connection-${Date.now()}`,fromNeuronId:K.id,toNeuronId:gt.id,fromDirection:"right",toDirection:"left",isSigmoidConnection:!0};s(dt=>[...dt,vt]),Nt(dt=>[...dt,vt.id])}await xe(2e3),Ht(!1),await xe(4e3,ug),Et(!1),i(K=>K.filter(et=>et.type!=="display")),s(K=>K.filter(et=>!et.isSigmoidConnection)),Nt([]),await xe(700,ug),It(!1)}else await go(),mo()},jn=V=>{const{setNeuronHeaders:K,setHiddenWeights:et,setHiddenBiases:gt,setOutputWeights:vt,setOutputBiases:dt}=V;return{handleInputHeaderChange:(ut,zt)=>{K(Ct=>({...Ct,[ut]:zt}))},handleWeightChange:(ut,zt,Ct)=>{et(Me=>({...Me,[`${ut}-${zt}`]:parseFloat(Ct)||0}))},handleBiasChange:(ut,zt)=>{gt(Ct=>({...Ct,[ut]:parseFloat(zt)||0}))},handleOutputWeightChange:(ut,zt,Ct)=>{vt(Me=>({...Me,[`${ut}-${zt}`]:parseFloat(Ct)||0}))},handleOutputBiasChange:(ut,zt)=>{dt(Ct=>({...Ct,[ut]:parseFloat(zt)||0}))},handleNeuronHeaderChange:(ut,zt)=>{K(Ct=>({...Ct,[ut]:zt}))}}},{handleInputHeaderChange:Oe,handleWeightChange:qe,handleBiasChange:fa,handleOutputWeightChange:bo,handleOutputBiasChange:Ds,handleNeuronHeaderChange:Ll}=jn({setNeuronHeaders:lt,setHiddenWeights:B,setHiddenBiases:q,setOutputWeights:P,setOutputBiases:Q}),vo=()=>{const V=a.filter(vt=>vt.type!=="display"),K=l.filter(vt=>!vt.isSigmoidConnection),et={inputData:M,hiddenWeights:j,hiddenBiases:Y,outputWeights:W,outputBiases:F,neuronHeaders:G,neurons:V,connections:K,counters:x,timestamp:new Date().toISOString()};if(window.confirm("Download the Neural Network as a JSON file? Pressing 'cancel' will save it in your cookies")){const vt=JSON.stringify(et,null,2),dt=new Blob([vt],{type:"application/json"}),ut=URL.createObjectURL(dt),zt=document.createElement("a");zt.href=ut,zt.download=`neural-network-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(zt),zt.click(),document.body.removeChild(zt),URL.revokeObjectURL(ut)}else localStorage.setItem("neuralNetworkData",JSON.stringify(et))},da=()=>{if(be(!1),window.confirm("Load from computer? Pressing 'cancel' will load from cookies.")){const K=document.createElement("input");K.type="file",K.accept=".json",K.style.display="none",K.onchange=et=>{const gt=et.target.files[0];if(!gt)return;const vt=new FileReader;vt.onload=dt=>{try{const ut=JSON.parse(dt.target.result);O(ut.inputData||[{}]),B(ut.hiddenWeights||{}),q(ut.hiddenBiases||{}),P(ut.outputWeights||{}),Q(ut.outputBiases||{}),lt(ut.neuronHeaders||{}),ut.neurons&&i(ut.neurons),ut.connections&&(s(ut.connections),ze(!0)),ut.counters&&w(ut.counters)}catch{alert("Invalid file format")}},vt.readAsText(gt),document.body.removeChild(K)},document.body.appendChild(K),K.click()}else{let K=localStorage.getItem("neuralNetworkData");K||(K=rg,localStorage.setItem("neuralNetworkData",rg));try{const et=JSON.parse(K);O(et.inputData||[{}]),B(et.hiddenWeights||{}),q(et.hiddenBiases||{}),P(et.outputWeights||{}),Q(et.outputBiases||{}),lt(et.neuronHeaders||{}),et.neurons&&i(et.neurons),et.connections&&(s(et.connections),ze(!0)),et.counters&&w(et.counters)}catch(et){console.error("Error loading network data:",et)}}},Pa=(V,K,et)=>{if(V==="connection"&&K&&et){const gt=a.find(dt=>(G[dt.label]||dt.label)===K),vt=a.find(dt=>(G[dt.label]||dt.label)===et);if(gt&&vt){const dt=l.find(ut=>ut.fromNeuronId===gt.id&&ut.toNeuronId===vt.id);h(dt?.id||null)}v(null)}else if(V==="neuron"&&K){const gt=a.find(vt=>(G[vt.label]||vt.label)===K);v(gt?.id||null),h(null)}else h(null),v(null)},Pe=a.filter(V=>V.type==="input").sort((V,K)=>V.y-K.y),Se=a.filter(V=>V.type==="hidden").sort((V,K)=>V.y-K.y),je=a.filter(V=>V.type==="output").sort((V,K)=>V.y-K.y),ha=Pe.map(V=>G[V.label]||V.label),ue=Se.map(V=>G[V.label]||V.label),Hl=je.map(V=>G[V.label]||V.label),xo=V=>{if(!ca.current)return{x:0,y:0};const K=ca.current.getBoundingClientRect(),et=(V.clientX-K.left)/K.width*800,gt=(V.clientY-K.top)/K.height*400;return{x:et,y:gt}},Zn=(V,K,et)=>{Z(gt=>({...gt,[V]:{x:K,y:et}}))},pa=X.useCallback(V=>{if(ft&&ca.current){const K=xo(V);Ce(K);let et=null,gt=1/0;a.forEach(vt=>{if(vt.id!==ft.fromNeuronId){const dt=N[vt.id]||{x:0,y:0},ut=vt.x+dt.x,zt=vt.y+dt.y;[{direction:"top",x:ut,y:zt-Ne},{direction:"right",x:ut+Ne,y:zt},{direction:"bottom",x:ut,y:zt+Ne},{direction:"left",x:ut-Ne,y:zt}].forEach(Me=>{const _n=Math.sqrt(Math.pow(K.x-Me.x,2)+Math.pow(K.y-Me.y,2));_n<15&&_n<gt&&(gt=_n,et={neuronId:vt.id,direction:Me.direction})})}}),Kt(et)}},[ft,a,N,Ne]),Os=V=>{pT(V,x,i,w,f,Ts,Ne)},ql=(V,K,et)=>{i(gt=>gt.map(vt=>vt.id===V?{...vt,x:K,y:et}:vt))},Pl=(V,K,et,gt,vt)=>{if(ft)if(V!==ft.fromNeuronId){const dt={id:`connection-${Date.now()}`,fromNeuronId:ft.fromNeuronId,toNeuronId:V,fromDirection:ft.fromDirection,toDirection:K};s(ut=>[...ut,dt]),Ut(null),Kt(null)}else Ut(null),Kt(null);else{const dt=a.find(Vn=>Vn.id===V),ut=N[V]||{x:0,y:0},zt=dt.x+ut.x,Ct=dt.y+ut.y,Me={top:{x:zt,y:Ct-Ne},right:{x:zt+Ne,y:Ct},bottom:{x:zt,y:Ct+Ne},left:{x:zt-Ne,y:Ct}},_n=xo(vt);Ut({fromNeuronId:V,fromDirection:K,startX:Me[K].x,startY:Me[K].y}),Ce(_n)}},Ms=()=>{mT(a,s,ze)},gi=V=>{V.target.classList.contains("network-svg")&&ft&&(Ut(null),Kt(null))},Xa=({type:V,label:K,onClickFunc:et=()=>Os(V),style:gt={padding:"0.7rem 1.5rem"}})=>A.jsx(Bt.button,{onClick:et,className:"spawn-btn",whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:-25},transition:{delay:.1,duration:.1},style:gt,children:K},V);return A.jsxs("div",{className:"app-container",children:[A.jsxs("div",{style:{position:"fixed",top:0,left:10,zIndex:100,background:"transparent",padding:"18px 24px 0 24px",color:"white",fontSize:"1rem",letterSpacing:"0.04em"},children:[A.jsx("a",{href:"https://www.datvis.site/matrix_tool/",style:{color:"white",fontWeight:300,marginRight:"24px"},children:"Home"}),A.jsx("a",{href:"https://www.linkedin.com/in/laish-glenberg/",style:{color:"white",fontWeight:300,marginRight:"24px"},children:"About"}),A.jsx("a",{href:"https://ko-fi.com/weadsy",style:{color:"white",fontWeight:300,marginRight:"24px"},children:"Donate"})]}),A.jsxs(Bt.div,{className:"content-wrapper-with-tables",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,ease:"easeOut"},children:[A.jsxs("div",{className:"left-panel",children:[A.jsx(og,{title:"Input Samples",neurons:Pe,data:M,setData:O,onHeaderChange:Oe,onCellHover:Pa,isOutput:!1}),st&&A.jsx("div",{style:{minHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:A.jsx(eg,{color:["#7e7e7e","#979797","#b1b1b1","#cacaca"]})}),rt&&!st&&A.jsx(Bt.div,{initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.7,ease:"easeOut"},children:A.jsx(og,{title:"Final Predictions",neurons:[],data:[],setData:()=>{},onHeaderChange:()=>{},onCellHover:()=>{},isOutput:!0,truthValues:T,predictions:$,losses:I})})]}),A.jsxs("div",{className:"center-panel",children:[A.jsxs("div",{className:"main-title-row",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"5px",position:"relative"},children:[A.jsx(Bt.h1,{className:"main-title",initial:{opacity:0,y:-30},animate:{opacity:1,y:10},transition:{delay:.3,duration:.8},style:{margin:0},children:"Neural Network Builder"}),A.jsxs("div",{className:"save-load-buttons",style:{position:"absolute",right:-5,top:"80%",transform:"translateY(-50%)"},children:[A.jsx("button",{className:"save-load-btn",title:"Save all table values in cookies",onClick:vo,children:"Save"}),A.jsx("button",{className:`save-load-btn${Qe?" flash":""}`,title:"Load tables from cookies",onClick:da,children:"Load"})]})]}),a.some(V=>V.type==="output")&&a.some(V=>V.type==="input")&&a.some(V=>V.type==="hidden")&&A.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",marginTop:"10px"},children:[A.jsxs("div",{style:{position:"relative"},children:[A.jsxs("label",{className:"checkbox-container",style:{display:"flex",alignItems:"center",gap:"8px",color:"white",fontSize:"1rem",border:"2px solid rgba(255,255,255,0.3)",borderRadius:"8px",padding:"0.7rem 0.5rem",cursor:"pointer"},onMouseEnter:()=>po(!0),onMouseLeave:()=>po(!1),children:[A.jsx("input",{type:"checkbox",checked:Ul,onChange:V=>hi(V.target.checked),style:{transform:"scale(1.2)",accentColor:"#ffffff"}}),"Deep Solve"]}),A.jsx(sf,{children:Ss&&A.jsxs(Bt.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:"easeOut"},style:{position:"absolute",marginTop:"8px",background:"rgba(40, 40, 40, 0.95)",border:"2px solid rgba(255, 255, 255, 0.2)",borderRadius:"8px",padding:"12px 12px",color:"white",fontSize:"0.9rem",zIndex:1e3,backdropFilter:"blur(10px)",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.3)",width:"120px",textAlign:"center"},children:[A.jsx(Bt.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.1,duration:.15},style:{lineHeight:"1.4"},children:"Turn off to see the full matrix calculations"}),A.jsx("div",{style:{position:"absolute",top:"-6px",left:"50%",transform:"translateX(-50%)",width:"0",height:"0",borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderBottom:"6px solid rgba(255, 255, 255, 0.2)"}})]})})]}),A.jsx(Bt.button,{onClick:As,className:`spawn-btn${wt?"":" btn-disabled"}`,style:{fontSize:"16px",padding:"0.7rem 1.2rem",display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",opacity:st?.5:1,cursor:st?"not-allowed":"pointer"},disabled:!wt||st,whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1,duration:.1},children:st?A.jsx(eg,{color:"#ffffff",size:"small"}):A.jsxs(A.Fragment,{children:["START",A.jsx("img",{src:BS,alt:"Train",style:{marginLeft:"10px",width:22,height:22,filter:"invert(1)",transform:"scaleX(-1)"}})]})}),A.jsxs("label",{className:"speedbox-container",style:{border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",padding:"0.7rem 0.5rem",display:"flex",alignItems:"center",gap:"0.5rem",marginRight:"12px"},children:[A.jsx("input",{type:"number",min:0,max:Nn?20:9,step:1,value:an,onChange:V=>kn(Number(V.target.value)),className:"eraser-checkbox ishovered",style:{width:"38px",background:"transparent",color:"white",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"4px",fontSize:"1rem",padding:"2px 6px",minHeight:"25px"}}),A.jsx("span",{className:"eraser-label",children:"Speed"})]})]}),A.jsx(sf,{children:pi&&A.jsx(Bt.div,{className:"matrix-calculations-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.1,duration:1},style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.95)",zIndex:1e3,overflow:"hidden",padding:"50px",fontFamily:"monospace"},children:Tt.step>=1&&A.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"20px",justifyContent:"space-around",alignItems:"center"},children:[A.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[A.jsx("div",{style:{display:"flex",flexDirection:"column",maxWidth:"auto",alignItems:"center",justifyContent:"center"},children:A.jsx("div",{style:{position:"relative",fontSize:"28px",color:"white",fontWeight:"bold",border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",marginBottom:"5px",top:"-20px",padding:"0px 20px"},children:"HIDDEN WEIGHTED SUMS"})}),A.jsxs(eo,{delay:0,isVisible:Tt.showFormula,children:[A.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z1 ="}),A.jsx(en,{matrix:Tt.X,label:"X"}),A.jsx(no,{symbol:"×"}),A.jsx(en,{matrix:Tt.W1,label:"W1"}),A.jsx(no,{symbol:"+"}),A.jsx(en,{matrix:[Tt.b1],label:"b1",image:A.jsx("img",{src:ng,alt:"Activation Arrow",style:{transform:"scaleX(1.27)",height:"20px",filter:"invert(1)"}})})]}),A.jsxs(eo,{delay:0,isVisible:Tt.showXW1,children:[A.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z1 ="}),A.jsx(en,{matrix:Tt.XW1,label:"X * W1"}),A.jsx(no,{symbol:"+"}),A.jsx(en,{matrix:Tt.b1Matrix,label:"b1"})]}),A.jsxs(eo,{delay:0,isVisible:Tt.showZ1,children:[A.jsxs(Bt.div,{initial:{x:Tt.showReLU?-25:0},animate:{x:Tt.showReLU?-25:0},transition:{duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[A.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z1 ="}),A.jsx(en,{matrix:Tt.Z1,label:"X * W1 + b1"})]}),A.jsxs(Bt.div,{initial:{opacity:0,x:50},animate:{opacity:Tt.showReLU?1:0,x:0},transition:{delay:.5,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[A.jsx(sg,{label:"ReLU",label2:"max(0,Z1)"}),A.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"A1 ="}),A.jsx(en,{matrix:Tt.A1,label:"ReLU(Z1)"})]})]})]}),A.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",opacity:Tt.showDivider&&Tt.hasOutputLayer?1:0,transition:"opacity 0.5s ease"},children:[A.jsx(yT,{matrixSteps:Tt}),A.jsx(Bt.div,{initial:{opacity:0,y:20},animate:{opacity:Tt.showSigmoid?1:0,y:0},transition:{delay:1,duration:.5},style:{marginTop:"40px",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:A.jsx(Bt.button,{onClick:()=>{Ht(!1),On(!1),bt(!0)},className:"spawn-btn",whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},style:{fontSize:"16px",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap"},children:"Continue"})})]}),A.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",opacity:Tt.hasOutputLayer?1:0,transition:"opacity 0.5s ease"},children:[A.jsx("div",{style:{display:"flex",flexDirection:"column",maxWidth:"auto",alignItems:"center",justifyContent:"center"},children:A.jsx(Bt.div,{initial:{opacity:0},animate:{opacity:Tt.showDivider?1:0},transition:{delay:.5,duration:.5},style:{position:"relative",fontSize:"28px",color:"white",fontWeight:"bold",border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",marginBottom:"5px",top:"-20px",padding:"0px 20px"},children:"OUTPUT WEIGHTED SUMS"})}),A.jsxs(eo,{delay:0,isVisible:Tt.showLayer2Formula,children:[A.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z2 ="}),A.jsx(en,{matrix:Tt.A1,label:"A1"}),A.jsx(no,{symbol:"×"}),A.jsx(en,{matrix:Tt.W2,label:"W2"}),A.jsx(no,{symbol:"+"}),A.jsx(en,{matrix:[Tt.b2],label:"b2",image:A.jsx("img",{src:ng,alt:"Activation Arrow",style:{transform:"scaleX(1.27)",height:"20px",filter:"invert(1)"}})})]}),A.jsxs(eo,{delay:0,isVisible:Tt.showA1W2,children:[A.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z2 ="}),A.jsx(en,{matrix:Tt.A1W2,label:"A1 * W2"}),A.jsx(no,{symbol:"+"}),A.jsx(en,{matrix:Tt.b2Matrix,label:"b2"})]}),A.jsxs(eo,{delay:0,isVisible:Tt.showZ2,children:[A.jsxs(Bt.div,{initial:{x:Tt.showSigmoid?-25:0},animate:{x:Tt.showSigmoid?-25:0},transition:{duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[A.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z2 ="}),A.jsx(en,{matrix:Tt.Z2,label:"A1 * W2 + b2"})]}),A.jsxs(Bt.div,{initial:{opacity:0,x:50},animate:{opacity:Tt.showSigmoid?1:0,x:0},transition:{delay:.5,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[A.jsx(sg,{label:"Sigmoid",children:A.jsx("svg",{width:"80",height:"40",style:{display:"block"},children:A.jsx(Xy,{x:40,y:20,sumText:"x"})})}),A.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"ŷ ="}),A.jsx(en,{matrix:Tt.A2,label:"σ(Z2)"})]})]})]})]})})}),A.jsxs("div",{style:{position:"relative",width:"100%"},children:[A.jsxs(Bt.svg,{ref:ca,width:"100%",height:"400",viewBox:"0 0 800 400",className:"network-svg",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:1},onMouseMove:pa,onClick:gi,style:{cursor:ke?"crosshair":"default"},children:[A.jsx("defs",{children:A.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:A.jsx("polygon",{points:"0 0, 10 3.5, 0 7",className:"arrow-marker"})})}),l.map(V=>A.jsx(oT,{connection:V,neurons:a,neuronRadius:Ne,neuronTransforms:N,isGlowing:m===V.id,emphasizedConnections:Ft,showForwardPassVisuals:_t,inputData:M,currentSampleIndex:at,neuronHeaders:G,hiddenWeights:j,inputNeurons:Pe,hiddenNeurons:Se,hiddenBiases:Y,outputWeights:W,outputBiases:F,showSigmoidPhase:Rt,outputNeurons:je,isEraserMode:ke,onEraseConnection:Bl,eraserHoveredConnection:xs,setEraserHoveredConnection:Vl},V.id)),ft&&A.jsx(iT,{startX:ft.startX,startY:ft.startY,endX:Qt.x,endY:Qt.y}),a.map(V=>A.jsx(rT,{id:V.id,x:V.x,y:V.y,radius:V.radius,label:V.label,type:V.type,onDragEnd:ql,onDragUpdate:Zn,onStartConnection:Pl,highlightedDots:he?.neuronId===V.id?[he.direction]:[],isGlowing:y===V.id,neurons:a,showForwardPassVisuals:_t,emphasizedConnections:Ft,hiddenNeurons:Se,inputNeurons:Pe,outputNeurons:je,neuronHeaders:G,hiddenWeights:j,outputWeights:W,inputData:M,currentSampleIndex:at,hiddenBiases:Y,connections:l,showSigmoidPhase:Rt,outputBiases:F,isEraserMode:ke,onEraseNeuron:yo,eraserHoveredNeuron:hn,setEraserHoveredNeuron:Le},V.id))]}),A.jsx("div",{style:{position:"absolute",top:16,right:-5,zIndex:10},children:A.jsxs("label",{className:"eraser-checkbox-container",style:{border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",padding:"0.5rem",background:"rgba(0,0,0,0.7)"},children:[A.jsx("input",{type:"checkbox",checked:ke,onChange:V=>ve(V.target.checked),className:"eraser-checkbox"}),A.jsx("span",{className:"eraser-label",children:"Eraser"})]})})]}),A.jsxs("div",{className:"button-stack",children:[A.jsx("div",{className:"button-container",children:[{type:"input",label:"Add Input"},{type:"hidden",label:"Add Hidden"},...c?Array.from({length:f-1},(V,K)=>({type:`hidden${K+2}`,label:`Add Hidden ${K+2}`})):[],{type:"output",label:"Add Output"}].map(({type:V,label:K})=>Xa({type:V,label:K}))}),A.jsx("div",{className:"button-dense",children:a.some(V=>V.type==="input")&&a.some(V=>V.type==="hidden")&&Xa({type:"dense",label:"Dense Connect",onClickFunc:Ms,style:{padding:"0.5rem 0.7rem",background:"rgba(255, 255, 255, 0.1)"}})})]})]}),A.jsxs("div",{className:"right-panel",children:[A.jsx(lg,{title:"Hidden Layer Weights",inputLabels:ha,neuronLabels:ue,weights:j,biases:Y,onWeightChange:qe,onBiasChange:fa,onHeaderChange:Ll,showSaveLoad:!0,onSave:vo,onLoad:da,onCellHover:Pa,biasLabel:"b1"}),Se.length>0&&je.length>0&&A.jsx(lg,{title:"Output Layer Weights",inputLabels:ue,neuronLabels:Hl,weights:W,biases:F,onWeightChange:bo,onBiasChange:Ds,onHeaderChange:Ll,showSaveLoad:!1,onCellHover:Pa,biasLabel:"b2"})]})]})]})}i1.createRoot(document.getElementById("root")).render(A.jsx(X.StrictMode,{children:A.jsx(bT,{})}));
