(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();function Lv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var cc={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Hv(){if(ym)return Xo;ym=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:s,key:f,ref:c!==void 0?c:null,props:d}}return Xo.Fragment=i,Xo.jsx=l,Xo.jsxs=l,Xo}var bm;function qv(){return bm||(bm=1,cc.exports=Hv()),cc.exports}var P=qv(),fc={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Pv(){if(vm)return ht;vm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,D={};function _(T,H,Q){this.props=T,this.context=H,this.refs=D,this.updater=Q||M}_.prototype.isReactComponent={},_.prototype.setState=function(T,H){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,H,"setState")},_.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function j(){}j.prototype=_.prototype;function L(T,H,Q){this.props=T,this.context=H,this.refs=D,this.updater=Q||M}var V=L.prototype=new j;V.constructor=L,O(V,_.prototype),V.isPureReactComponent=!0;var $=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function J(T,H,Q,K,tt,st){return Q=st.ref,{$$typeof:a,type:T,key:H,ref:Q!==void 0?Q:null,props:st}}function X(T,H){return J(T.type,H,void 0,void 0,void 0,T.props)}function lt(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function dt(T){var H={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(Q){return H[Q]})}var Mt=/\/+/g;function jt(T,H){return typeof T=="object"&&T!==null&&T.key!=null?dt(""+T.key):H.toString(36)}function Kt(){}function qt(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(Kt,Kt):(T.status="pending",T.then(function(H){T.status==="pending"&&(T.status="fulfilled",T.value=H)},function(H){T.status==="pending"&&(T.status="rejected",T.reason=H)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Tt(T,H,Q,K,tt){var st=typeof T;(st==="undefined"||st==="boolean")&&(T=null);var at=!1;if(T===null)at=!0;else switch(st){case"bigint":case"string":case"number":at=!0;break;case"object":switch(T.$$typeof){case a:case i:at=!0;break;case y:return at=T._init,Tt(at(T._payload),H,Q,K,tt)}}if(at)return tt=tt(T),at=K===""?"."+jt(T,0):K,$(tt)?(Q="",at!=null&&(Q=at.replace(Mt,"$&/")+"/"),Tt(tt,H,Q,"",function(mt){return mt})):tt!=null&&(lt(tt)&&(tt=X(tt,Q+(tt.key==null||T&&T.key===tt.key?"":(""+tt.key).replace(Mt,"$&/")+"/")+at)),H.push(tt)),1;at=0;var Bt=K===""?".":K+":";if($(T))for(var I=0;I<T.length;I++)K=T[I],st=Bt+jt(K,I),at+=Tt(K,H,Q,st,tt);else if(I=v(T),typeof I=="function")for(T=I.call(T),I=0;!(K=T.next()).done;)K=K.value,st=Bt+jt(K,I++),at+=Tt(K,H,Q,st,tt);else if(st==="object"){if(typeof T.then=="function")return Tt(qt(T),H,Q,K,tt);throw H=String(T),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return at}function N(T,H,Q){if(T==null)return T;var K=[],tt=0;return Tt(T,K,"","",function(st){return H.call(Q,st,tt++)}),K}function Z(T){if(T._status===-1){var H=T._result;H=H(),H.then(function(Q){(T._status===0||T._status===-1)&&(T._status=1,T._result=Q)},function(Q){(T._status===0||T._status===-1)&&(T._status=2,T._result=Q)}),T._status===-1&&(T._status=0,T._result=H)}if(T._status===1)return T._result.default;throw T._result}var et=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function gt(){}return ht.Children={map:N,forEach:function(T,H,Q){N(T,function(){H.apply(this,arguments)},Q)},count:function(T){var H=0;return N(T,function(){H++}),H},toArray:function(T){return N(T,function(H){return H})||[]},only:function(T){if(!lt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ht.Component=_,ht.Fragment=l,ht.Profiler=c,ht.PureComponent=L,ht.StrictMode=s,ht.Suspense=p,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ht.__COMPILER_RUNTIME={__proto__:null,c:function(T){return q.H.useMemoCache(T)}},ht.cache=function(T){return function(){return T.apply(null,arguments)}},ht.cloneElement=function(T,H,Q){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var K=O({},T.props),tt=T.key,st=void 0;if(H!=null)for(at in H.ref!==void 0&&(st=void 0),H.key!==void 0&&(tt=""+H.key),H)!W.call(H,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&H.ref===void 0||(K[at]=H[at]);var at=arguments.length-2;if(at===1)K.children=Q;else if(1<at){for(var Bt=Array(at),I=0;I<at;I++)Bt[I]=arguments[I+2];K.children=Bt}return J(T.type,tt,void 0,void 0,st,K)},ht.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},ht.createElement=function(T,H,Q){var K,tt={},st=null;if(H!=null)for(K in H.key!==void 0&&(st=""+H.key),H)W.call(H,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(tt[K]=H[K]);var at=arguments.length-2;if(at===1)tt.children=Q;else if(1<at){for(var Bt=Array(at),I=0;I<at;I++)Bt[I]=arguments[I+2];tt.children=Bt}if(T&&T.defaultProps)for(K in at=T.defaultProps,at)tt[K]===void 0&&(tt[K]=at[K]);return J(T,st,void 0,void 0,null,tt)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(T){return{$$typeof:g,render:T}},ht.isValidElement=lt,ht.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:Z}},ht.memo=function(T,H){return{$$typeof:h,type:T,compare:H===void 0?null:H}},ht.startTransition=function(T){var H=q.T,Q={};q.T=Q;try{var K=T(),tt=q.S;tt!==null&&tt(Q,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(gt,et)}catch(st){et(st)}finally{q.T=H}},ht.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ht.use=function(T){return q.H.use(T)},ht.useActionState=function(T,H,Q){return q.H.useActionState(T,H,Q)},ht.useCallback=function(T,H){return q.H.useCallback(T,H)},ht.useContext=function(T){return q.H.useContext(T)},ht.useDebugValue=function(){},ht.useDeferredValue=function(T,H){return q.H.useDeferredValue(T,H)},ht.useEffect=function(T,H,Q){var K=q.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return K.useEffect(T,H)},ht.useId=function(){return q.H.useId()},ht.useImperativeHandle=function(T,H,Q){return q.H.useImperativeHandle(T,H,Q)},ht.useInsertionEffect=function(T,H){return q.H.useInsertionEffect(T,H)},ht.useLayoutEffect=function(T,H){return q.H.useLayoutEffect(T,H)},ht.useMemo=function(T,H){return q.H.useMemo(T,H)},ht.useOptimistic=function(T,H){return q.H.useOptimistic(T,H)},ht.useReducer=function(T,H,Q){return q.H.useReducer(T,H,Q)},ht.useRef=function(T){return q.H.useRef(T)},ht.useState=function(T){return q.H.useState(T)},ht.useSyncExternalStore=function(T,H,Q){return q.H.useSyncExternalStore(T,H,Q)},ht.useTransition=function(){return q.H.useTransition()},ht.version="19.1.0",ht}var xm;function Wc(){return xm||(xm=1,fc.exports=Pv()),fc.exports}var G=Wc();const wt=Lv(G);var dc={exports:{}},Go={},hc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Yv(){return Sm||(Sm=1,function(a){function i(N,Z){var et=N.length;N.push(Z);t:for(;0<et;){var gt=et-1>>>1,T=N[gt];if(0<c(T,Z))N[gt]=Z,N[et]=T,et=gt;else break t}}function l(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var Z=N[0],et=N.pop();if(et!==Z){N[0]=et;t:for(var gt=0,T=N.length,H=T>>>1;gt<H;){var Q=2*(gt+1)-1,K=N[Q],tt=Q+1,st=N[tt];if(0>c(K,et))tt<T&&0>c(st,K)?(N[gt]=st,N[tt]=et,gt=tt):(N[gt]=K,N[Q]=et,gt=Q);else if(tt<T&&0>c(st,et))N[gt]=st,N[tt]=et,gt=tt;else break t}}return Z}function c(N,Z){var et=N.sortIndex-Z.sortIndex;return et!==0?et:N.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var p=[],h=[],y=1,x=null,v=3,M=!1,O=!1,D=!1,_=!1,j=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function $(N){for(var Z=l(h);Z!==null;){if(Z.callback===null)s(h);else if(Z.startTime<=N)s(h),Z.sortIndex=Z.expirationTime,i(p,Z);else break;Z=l(h)}}function q(N){if(D=!1,$(N),!O)if(l(p)!==null)O=!0,W||(W=!0,jt());else{var Z=l(h);Z!==null&&Tt(q,Z.startTime-N)}}var W=!1,J=-1,X=5,lt=-1;function dt(){return _?!0:!(a.unstable_now()-lt<X)}function Mt(){if(_=!1,W){var N=a.unstable_now();lt=N;var Z=!0;try{t:{O=!1,D&&(D=!1,L(J),J=-1),M=!0;var et=v;try{e:{for($(N),x=l(p);x!==null&&!(x.expirationTime>N&&dt());){var gt=x.callback;if(typeof gt=="function"){x.callback=null,v=x.priorityLevel;var T=gt(x.expirationTime<=N);if(N=a.unstable_now(),typeof T=="function"){x.callback=T,$(N),Z=!0;break e}x===l(p)&&s(p),$(N)}else s(p);x=l(p)}if(x!==null)Z=!0;else{var H=l(h);H!==null&&Tt(q,H.startTime-N),Z=!1}}break t}finally{x=null,v=et,M=!1}Z=void 0}}finally{Z?jt():W=!1}}}var jt;if(typeof V=="function")jt=function(){V(Mt)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,qt=Kt.port2;Kt.port1.onmessage=Mt,jt=function(){qt.postMessage(null)}}else jt=function(){j(Mt,0)};function Tt(N,Z){J=j(function(){N(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(N){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var et=v;v=Z;try{return N()}finally{v=et}},a.unstable_requestPaint=function(){_=!0},a.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var et=v;v=N;try{return Z()}finally{v=et}},a.unstable_scheduleCallback=function(N,Z,et){var gt=a.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?gt+et:gt):et=gt,N){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=et+T,N={id:y++,callback:Z,priorityLevel:N,startTime:et,expirationTime:T,sortIndex:-1},et>gt?(N.sortIndex=et,i(h,N),l(p)===null&&N===l(h)&&(D?(L(J),J=-1):D=!0,Tt(q,et-gt))):(N.sortIndex=T,i(p,N),O||M||(O=!0,W||(W=!0,jt()))),N},a.unstable_shouldYield=dt,a.unstable_wrapCallback=function(N){var Z=v;return function(){var et=v;v=Z;try{return N.apply(this,arguments)}finally{v=et}}}}(mc)),mc}var Tm;function Xv(){return Tm||(Tm=1,hc.exports=Yv()),hc.exports}var pc={exports:{}},Te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Gv(){if(Am)return Te;Am=1;var a=Wc();function i(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,h,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:h,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Te.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return d(p,h,null,y)},Te.flushSync=function(p){var h=f.T,y=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=h,s.p=y,s.d.f()}},Te.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(p,h))},Te.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Te.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,x=g(y,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?s.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):y==="script"&&s.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Te.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=g(h.as,h.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(p)},Te.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,x=g(y,h.crossOrigin);s.d.L(p,y,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Te.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=g(h.as,h.crossOrigin);s.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(p)},Te.requestFormReset=function(p){s.d.r(p)},Te.unstable_batchedUpdates=function(p,h){return p(h)},Te.useFormState=function(p,h,y){return f.H.useFormState(p,h,y)},Te.useFormStatus=function(){return f.H.useHostTransitionStatus()},Te.version="19.1.0",Te}var Om;function Zv(){if(Om)return pc.exports;Om=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),pc.exports=Gv(),pc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function Qv(){if(Dm)return Go;Dm=1;var a=Xv(),i=Wc(),l=Zv();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(s(188))}function p(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,o=e;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return g(r),t;if(u===o)return g(r),e;u=u.sibling}throw Error(s(188))}if(n.return!==o.return)n=r,o=u;else{for(var m=!1,b=r.child;b;){if(b===n){m=!0,n=r,o=u;break}if(b===o){m=!0,o=r,n=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===n){m=!0,n=u,o=r;break}if(b===o){m=!0,o=u,n=r;break}b=b.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),V=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function jt(t){return t===null||typeof t!="object"?null:(t=Mt&&t[Mt]||t["@@iterator"],typeof t=="function"?t:null)}var Kt=Symbol.for("react.client.reference");function qt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Kt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case _:return"Profiler";case D:return"StrictMode";case q:return"Suspense";case W:return"SuspenseList";case lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case V:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case $:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:qt(t.type)||"Memo";case X:e=t._payload,t=t._init;try{return qt(t(e))}catch{}}return null}var Tt=Array.isArray,N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},gt=[],T=-1;function H(t){return{current:t}}function Q(t){0>T||(t.current=gt[T],gt[T]=null,T--)}function K(t,e){T++,gt[T]=t.current,t.current=e}var tt=H(null),st=H(null),at=H(null),Bt=H(null);function I(t,e){switch(K(at,e),K(st,t),K(tt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?G0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=G0(e),t=Z0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(tt),K(tt,t)}function mt(){Q(tt),Q(st),Q(at)}function At(t){t.memoizedState!==null&&K(Bt,t);var e=tt.current,n=Z0(e,t.type);e!==n&&(K(st,t),K(tt,n))}function Ct(t){st.current===t&&(Q(tt),Q(st)),Bt.current===t&&(Q(Bt),Lo._currentValue=et)}var Xt=Object.prototype.hasOwnProperty,Pt=a.unstable_scheduleCallback,ce=a.unstable_cancelCallback,rn=a.unstable_shouldYield,Ge=a.unstable_requestPaint,ge=a.unstable_now,Aa=a.unstable_getCurrentPriorityLevel,sn=a.unstable_ImmediatePriority,Rn=a.unstable_UserBlockingPriority,Ze=a.unstable_NormalPriority,Kn=a.unstable_LowPriority,we=a.unstable_IdlePriority,Wr=a.log,Ir=a.unstable_setDisableYieldValue,Oa=null,Oe=null;function bn(t){if(typeof Wr=="function"&&Ir(t),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(Oa,t)}catch{}}var De=Math.clz32?Math.clz32:dl,ts=Math.log,es=Math.LN2;function dl(t){return t>>>=0,t===0?32:31-(ts(t)/es|0)|0}var Da=256,Ea=4194304;function un(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function cn(t,e,n){var o=t.pendingLanes;if(o===0)return 0;var r=0,u=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~u,o!==0?r=un(o):(m&=b,m!==0?r=un(m):n||(n=b&~t,n!==0&&(r=un(n))))):(b=o&~u,b!==0?r=un(b):m!==0?r=un(m):n||(n=o&~t,n!==0&&(r=un(n)))),r===0?0:e!==0&&e!==r&&(e&u)===0&&(u=r&-r,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:r}function Ce(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function vn(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hl(){var t=Da;return Da<<=1,(Da&4194048)===0&&(Da=256),t}function Qi(){var t=Ea;return Ea<<=1,(Ea&62914560)===0&&(Ea=4194304),t}function Ki(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ns(t,e,n,o,r,u){var m=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,w=t.hiddenUpdates;for(n=m&~n;0<n;){var k=31-De(n),B=1<<k;b[k]=0,S[k]=-1;var C=w[k];if(C!==null)for(w[k]=null,k=0;k<C.length;k++){var z=C[k];z!==null&&(z.lane&=-536870913)}n&=~B}o!==0&&ml(t,o,0),u!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=u&~(m&~e))}function ml(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-De(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|n&4194090}function pl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-De(n),r=1<<o;r&e|t[o]&e&&(t[o]|=e),n&=~r}}function Ji(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function gl(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:fm(t.type))}function as(t,e){var n=Z.p;try{return Z.p=t,e()}finally{Z.p=n}}var fn=Math.random().toString(36).slice(2),Y="__reactFiber$"+fn,F="__reactProps$"+fn,Dt="__reactContainer$"+fn,Rt="__reactEvents$"+fn,Lt="__reactListeners$"+fn,bt="__reactHandles$"+fn,te="__reactResources$"+fn,Ee="__reactMarker$"+fn;function wn(t){delete t[Y],delete t[F],delete t[Rt],delete t[Lt],delete t[bt]}function Ue(t){var e=t[Y];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dt]||n[Y]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=F0(t);t!==null;){if(n=t[Y])return n;t=F0(t)}return e}t=n,n=t.parentNode}return null}function Qe(t){if(t=t[Y]||t[Dt]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ma(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function $a(t){var e=t[te];return e||(e=t[te]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function fe(t){t[Ee]=!0}var kf=new Set,Vf={};function Ra(t,e){Wa(t,e),Wa(t+"Capture",e)}function Wa(t,e){for(Vf[t]=e,t=0;t<e.length;t++)kf.add(e[t])}var zy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uf={},jf={};function Ny(t){return Xt.call(jf,t)?!0:Xt.call(Uf,t)?!1:zy.test(t)?jf[t]=!0:(Uf[t]=!0,!1)}function yl(t,e,n){if(Ny(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function bl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Cn(t,e,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+o)}}var is,Bf;function Ia(t){if(is===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);is=e&&e[1]||"",Bf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+is+t+Bf}var os=!1;function ls(t,e){if(!t||os)return"";os=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(z){var C=z}Reflect.construct(t,[],B)}else{try{B.call()}catch(z){C=z}t.call(B.prototype)}}else{try{throw Error()}catch(z){C=z}(B=t())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(z){if(z&&C&&typeof z.stack=="string")return[z.stack,C.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var S=m.split(`
`),w=b.split(`
`);for(r=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;if(o===S.length||r===w.length)for(o=S.length-1,r=w.length-1;1<=o&&0<=r&&S[o]!==w[r];)r--;for(;1<=o&&0<=r;o--,r--)if(S[o]!==w[r]){if(o!==1||r!==1)do if(o--,r--,0>r||S[o]!==w[r]){var k=`
`+S[o].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=o&&0<=r);break}}}finally{os=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ia(n):""}function _y(t){switch(t.tag){case 26:case 27:case 5:return Ia(t.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 15:return ls(t.type,!1);case 11:return ls(t.type.render,!1);case 1:return ls(t.type,!0);case 31:return Ia("Activity");default:return""}}function Lf(t){try{var e="";do e+=_y(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ky(t){var e=Hf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(m){o=""+m,u.call(this,m)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vl(t){t._valueTracker||(t._valueTracker=ky(t))}function qf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Hf(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vy=/[\n"\\]/g;function Je(t){return t.replace(Vy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function rs(t,e,n,o,r,u,m,b){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ke(e)):t.value!==""+Ke(e)&&(t.value=""+Ke(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?ss(t,m,Ke(e)):n!=null?ss(t,m,Ke(n)):o!=null&&t.removeAttribute("value"),r==null&&u!=null&&(t.defaultChecked=!!u),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Ke(b):t.removeAttribute("name")}function Pf(t,e,n,o,r,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+Ke(n):"",e=e!=null?""+Ke(e):n,b||e===t.value||(t.value=e),t.defaultValue=e}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m)}function ss(t,e,n){e==="number"&&xl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ti(t,e,n,o){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&o&&(t[n].defaultSelected=!0)}else{for(n=""+Ke(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yf(t,e,n){if(e!=null&&(e=""+Ke(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ke(n):""}function Xf(t,e,n,o){if(e==null){if(o!=null){if(n!=null)throw Error(s(92));if(Tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}n=o}n==null&&(n=""),e=n}n=Ke(e),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o)}function ei(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Uy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gf(t,e,n){var o=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,n):typeof n!="number"||n===0||Uy.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Zf(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var r in e)o=e[r],e.hasOwnProperty(r)&&n[r]!==o&&Gf(t,r,o)}else for(var u in e)e.hasOwnProperty(u)&&Gf(t,u,e[u])}function us(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),By=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(t){return By.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var cs=null;function fs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ni=null,ai=null;function Qf(t){var e=Qe(t);if(e&&(t=e.stateNode)){var n=t[F]||null;t:switch(t=e.stateNode,e.type){case"input":if(rs(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Je(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var r=o[F]||null;if(!r)throw Error(s(90));rs(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)o=n[e],o.form===t.form&&qf(o)}break t;case"textarea":Yf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}}}var ds=!1;function Kf(t,e,n){if(ds)return t(e,n);ds=!0;try{var o=t(e);return o}finally{if(ds=!1,(ni!==null||ai!==null)&&(lr(),ni&&(e=ni,t=ai,ai=ni=null,Qf(e),t)))for(e=0;e<t.length;e++)Qf(t[e])}}function $i(t,e){var n=t.stateNode;if(n===null)return null;var o=n[F]||null;if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=!1;if(zn)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{hs=!1}var Fn=null,ms=null,Tl=null;function Jf(){if(Tl)return Tl;var t,e=ms,n=e.length,o,r="value"in Fn?Fn.value:Fn.textContent,u=r.length;for(t=0;t<n&&e[t]===r[t];t++);var m=n-t;for(o=1;o<=m&&e[n-o]===r[u-o];o++);return Tl=r.slice(t,1<o?1-o:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function Ff(){return!1}function ze(t){function e(n,o,r,u,m){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(n=t[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ol:Ff,this.isPropagationStopped=Ff,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),e}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=ze(wa),Ii=y({},wa,{view:0,detail:0}),Ly=ze(Ii),ps,gs,to,El=y({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(ps=t.screenX-to.screenX,gs=t.screenY-to.screenY):gs=ps=0,to=t),ps)},movementY:function(t){return"movementY"in t?t.movementY:gs}}),$f=ze(El),Hy=y({},El,{dataTransfer:0}),qy=ze(Hy),Py=y({},Ii,{relatedTarget:0}),ys=ze(Py),Yy=y({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Xy=ze(Yy),Gy=y({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zy=ze(Gy),Qy=y({},wa,{data:0}),Wf=ze(Qy),Ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $y(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fy[t])?!!e[t]:!1}function bs(){return $y}var Wy=y({},Ii,{key:function(t){if(t.key){var e=Ky[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iy=ze(Wy),tb=y({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=ze(tb),eb=y({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),nb=ze(eb),ab=y({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ib=ze(ab),ob=y({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lb=ze(ob),rb=y({},wa,{newState:0,oldState:0}),sb=ze(rb),ub=[9,13,27,32],vs=zn&&"CompositionEvent"in window,eo=null;zn&&"documentMode"in document&&(eo=document.documentMode);var cb=zn&&"TextEvent"in window&&!eo,td=zn&&(!vs||eo&&8<eo&&11>=eo),ed=" ",nd=!1;function ad(t,e){switch(t){case"keyup":return ub.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ii=!1;function fb(t,e){switch(t){case"compositionend":return id(e);case"keypress":return e.which!==32?null:(nd=!0,ed);case"textInput":return t=e.data,t===ed&&nd?null:t;default:return null}}function db(t,e){if(ii)return t==="compositionend"||!vs&&ad(t,e)?(t=Jf(),Tl=ms=Fn=null,ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return td&&e.locale!=="ko"?null:e.data;default:return null}}var hb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hb[t.type]:e==="textarea"}function ld(t,e,n,o){ni?ai?ai.push(o):ai=[o]:ni=o,e=dr(e,"onChange"),0<e.length&&(n=new Dl("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var no=null,ao=null;function mb(t){H0(t,0)}function Ml(t){var e=Ma(t);if(qf(e))return t}function rd(t,e){if(t==="change")return e}var sd=!1;if(zn){var xs;if(zn){var Ss="oninput"in document;if(!Ss){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),Ss=typeof ud.oninput=="function"}xs=Ss}else xs=!1;sd=xs&&(!document.documentMode||9<document.documentMode)}function cd(){no&&(no.detachEvent("onpropertychange",fd),ao=no=null)}function fd(t){if(t.propertyName==="value"&&Ml(ao)){var e=[];ld(e,ao,t,fs(t)),Kf(mb,e)}}function pb(t,e,n){t==="focusin"?(cd(),no=e,ao=n,no.attachEvent("onpropertychange",fd)):t==="focusout"&&cd()}function gb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(ao)}function yb(t,e){if(t==="click")return Ml(e)}function bb(t,e){if(t==="input"||t==="change")return Ml(e)}function vb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var je=typeof Object.is=="function"?Object.is:vb;function io(t,e){if(je(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Xt.call(e,r)||!je(t[r],e[r]))return!1}return!0}function dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hd(t,e){var n=dd(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=dd(n)}}function md(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?md(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=xl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function Ts(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var xb=zn&&"documentMode"in document&&11>=document.documentMode,oi=null,As=null,oo=null,Os=!1;function gd(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Os||oi==null||oi!==xl(o)||(o=oi,"selectionStart"in o&&Ts(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&io(oo,o)||(oo=o,o=dr(As,"onSelect"),0<o.length&&(e=new Dl("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=oi)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var li={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Ds={},yd={};zn&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function za(t){if(Ds[t])return Ds[t];if(!li[t])return t;var e=li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yd)return Ds[t]=e[n];return t}var bd=za("animationend"),vd=za("animationiteration"),xd=za("animationstart"),Sb=za("transitionrun"),Tb=za("transitionstart"),Ab=za("transitioncancel"),Sd=za("transitionend"),Td=new Map,Es="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Es.push("scrollEnd");function dn(t,e){Td.set(t,e),Ra(e,[t])}var Ad=new WeakMap;function Fe(t,e){if(typeof t=="object"&&t!==null){var n=Ad.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Lf(e)},Ad.set(t,e),e)}return{value:t,source:e,stack:Lf(e)}}var $e=[],ri=0,Ms=0;function Rl(){for(var t=ri,e=Ms=ri=0;e<t;){var n=$e[e];$e[e++]=null;var o=$e[e];$e[e++]=null;var r=$e[e];$e[e++]=null;var u=$e[e];if($e[e++]=null,o!==null&&r!==null){var m=o.pending;m===null?r.next=r:(r.next=m.next,m.next=r),o.pending=r}u!==0&&Od(n,r,u)}}function wl(t,e,n,o){$e[ri++]=t,$e[ri++]=e,$e[ri++]=n,$e[ri++]=o,Ms|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Rs(t,e,n,o){return wl(t,e,n,o),Cl(t)}function si(t,e){return wl(t,null,null,e),Cl(t)}function Od(t,e,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var r=!1,u=t.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(r=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,r&&e!==null&&(r=31-De(n),t=u.hiddenUpdates,o=t[r],o===null?t[r]=[e]:o.push(e),e.lane=n|536870912),u):null}function Cl(t){if(50<zo)throw zo=0,ku=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ui={};function Ob(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(t,e,n,o){return new Ob(t,e,n,o)}function ws(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nn(t,e){var n=t.alternate;return n===null?(n=Be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Dd(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function zl(t,e,n,o,r,u){var m=0;if(o=t,typeof t=="function")ws(t)&&(m=1);else if(typeof t=="string")m=Ev(t,n,tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case lt:return t=Be(31,n,e,r),t.elementType=lt,t.lanes=u,t;case O:return Na(n.children,r,u,e);case D:m=8,r|=24;break;case _:return t=Be(12,n,e,r|2),t.elementType=_,t.lanes=u,t;case q:return t=Be(13,n,e,r),t.elementType=q,t.lanes=u,t;case W:return t=Be(19,n,e,r),t.elementType=W,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j:case V:m=10;break t;case L:m=9;break t;case $:m=11;break t;case J:m=14;break t;case X:m=16,o=null;break t}m=29,n=Error(s(130,t===null?"null":typeof t,"")),o=null}return e=Be(m,n,e,r),e.elementType=t,e.type=o,e.lanes=u,e}function Na(t,e,n,o){return t=Be(7,t,o,e),t.lanes=n,t}function Cs(t,e,n){return t=Be(6,t,null,e),t.lanes=n,t}function zs(t,e,n){return e=Be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ci=[],fi=0,Nl=null,_l=0,We=[],Ie=0,_a=null,_n=1,kn="";function ka(t,e){ci[fi++]=_l,ci[fi++]=Nl,Nl=t,_l=e}function Ed(t,e,n){We[Ie++]=_n,We[Ie++]=kn,We[Ie++]=_a,_a=t;var o=_n;t=kn;var r=32-De(o)-1;o&=~(1<<r),n+=1;var u=32-De(e)+r;if(30<u){var m=r-r%5;u=(o&(1<<m)-1).toString(32),o>>=m,r-=m,_n=1<<32-De(e)+r|n<<r|o,kn=u+t}else _n=1<<u|n<<r|o,kn=t}function Ns(t){t.return!==null&&(ka(t,1),Ed(t,1,0))}function _s(t){for(;t===Nl;)Nl=ci[--fi],ci[fi]=null,_l=ci[--fi],ci[fi]=null;for(;t===_a;)_a=We[--Ie],We[Ie]=null,kn=We[--Ie],We[Ie]=null,_n=We[--Ie],We[Ie]=null}var Me=null,$t=null,Et=!1,Va=null,xn=!1,ks=Error(s(519));function Ua(t){var e=Error(s(418,""));throw so(Fe(e,t)),ks}function Md(t){var e=t.stateNode,n=t.type,o=t.memoizedProps;switch(e[Y]=t,e[F]=o,n){case"dialog":xt("cancel",e),xt("close",e);break;case"iframe":case"object":case"embed":xt("load",e);break;case"video":case"audio":for(n=0;n<_o.length;n++)xt(_o[n],e);break;case"source":xt("error",e);break;case"img":case"image":case"link":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"input":xt("invalid",e),Pf(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),vl(e);break;case"select":xt("invalid",e);break;case"textarea":xt("invalid",e),Xf(e,o.value,o.defaultValue,o.children),vl(e)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||o.suppressHydrationWarning===!0||X0(e.textContent,n)?(o.popover!=null&&(xt("beforetoggle",e),xt("toggle",e)),o.onScroll!=null&&xt("scroll",e),o.onScrollEnd!=null&&xt("scrollend",e),o.onClick!=null&&(e.onclick=hr),e=!0):e=!1,e||Ua(t)}function Rd(t){for(Me=t.return;Me;)switch(Me.tag){case 5:case 13:xn=!1;return;case 27:case 3:xn=!0;return;default:Me=Me.return}}function lo(t){if(t!==Me)return!1;if(!Et)return Rd(t),Et=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Fu(t.type,t.memoizedProps)),n=!n),n&&$t&&Ua(t),Rd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){$t=mn(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}$t=null}}else e===27?(e=$t,da(t.type)?(t=tc,tc=null,$t=t):$t=e):$t=Me?mn(t.stateNode.nextSibling):null;return!0}function ro(){$t=Me=null,Et=!1}function wd(){var t=Va;return t!==null&&(ke===null?ke=t:ke.push.apply(ke,t),Va=null),t}function so(t){Va===null?Va=[t]:Va.push(t)}var Vs=H(null),ja=null,Vn=null;function $n(t,e,n){K(Vs,e._currentValue),e._currentValue=n}function Un(t){t._currentValue=Vs.current,Q(Vs)}function Us(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function js(t,e,n,o){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var u=r.dependencies;if(u!==null){var m=r.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=r;for(var S=0;S<e.length;S++)if(b.context===e[S]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),Us(u.return,n,t),o||(m=null);break t}u=b.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(s(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),Us(m,n,t),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===t){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function uo(t,e,n,o){t=null;for(var r=e,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=r.type;je(r.pendingProps.value,m.value)||(t!==null?t.push(b):t=[b])}}else if(r===Bt.current){if(m=r.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}r=r.return}t!==null&&js(e,t,n,o),e.flags|=262144}function kl(t){for(t=t.firstContext;t!==null;){if(!je(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ba(t){ja=t,Vn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Se(t){return Cd(ja,t)}function Vl(t,e){return ja===null&&Ba(t),Cd(t,e)}function Cd(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Vn===null){if(t===null)throw Error(s(308));Vn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Vn=Vn.next=e;return n}var Db=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Eb=a.unstable_scheduleCallback,Mb=a.unstable_NormalPriority,re={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bs(){return{controller:new Db,data:new Map,refCount:0}}function co(t){t.refCount--,t.refCount===0&&Eb(Mb,function(){t.controller.abort()})}var fo=null,Ls=0,di=0,hi=null;function Rb(t,e){if(fo===null){var n=fo=[];Ls=0,di=qu(),hi={status:"pending",value:void 0,then:function(o){n.push(o)}}}return Ls++,e.then(zd,zd),e}function zd(){if(--Ls===0&&fo!==null){hi!==null&&(hi.status="fulfilled");var t=fo;fo=null,di=0,hi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function wb(t,e){var n=[],o={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(o.status="rejected",o.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),o}var Nd=N.S;N.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Rb(t,e),Nd!==null&&Nd(t,e)};var La=H(null);function Hs(){var t=La.current;return t!==null?t:Yt.pooledCache}function Ul(t,e){e===null?K(La,La.current):K(La,e.pool)}function _d(){var t=Hs();return t===null?null:{parent:re._currentValue,pool:t}}var ho=Error(s(460)),kd=Error(s(474)),jl=Error(s(542)),qs={then:function(){}};function Vd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bl(){}function Ud(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Bl,Bl),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bd(t),t;default:if(typeof e.status=="string")e.then(Bl,Bl);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=o}},function(o){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Bd(t),t}throw mo=e,ho}}var mo=null;function jd(){if(mo===null)throw Error(s(459));var t=mo;return mo=null,t}function Bd(t){if(t===ho||t===jl)throw Error(s(483))}var Wn=!1;function Ps(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ys(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function In(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ta(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,e=Cl(t),Od(t,null,n),e}return wl(t,o,e,n),Cl(t)}function po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,pl(t,n)}}function Xs(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?r=u=e:u=u.next=e}else r=u=e;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Gs=!1;function go(){if(Gs){var t=hi;if(t!==null)throw t}}function yo(t,e,n,o){Gs=!1;var r=t.updateQueue;Wn=!1;var u=r.firstBaseUpdate,m=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var S=b,w=S.next;S.next=null,m===null?u=w:m.next=w,m=S;var k=t.alternate;k!==null&&(k=k.updateQueue,b=k.lastBaseUpdate,b!==m&&(b===null?k.firstBaseUpdate=w:b.next=w,k.lastBaseUpdate=S))}if(u!==null){var B=r.baseState;m=0,k=w=S=null,b=u;do{var C=b.lane&-536870913,z=C!==b.lane;if(z?(St&C)===C:(o&C)===C){C!==0&&C===di&&(Gs=!0),k!==null&&(k=k.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ct=t,rt=b;C=e;var Ut=n;switch(rt.tag){case 1:if(ct=rt.payload,typeof ct=="function"){B=ct.call(Ut,B,C);break t}B=ct;break t;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=rt.payload,C=typeof ct=="function"?ct.call(Ut,B,C):ct,C==null)break t;B=y({},B,C);break t;case 2:Wn=!0}}C=b.callback,C!==null&&(t.flags|=64,z&&(t.flags|=8192),z=r.callbacks,z===null?r.callbacks=[C]:z.push(C))}else z={lane:C,tag:b.tag,payload:b.payload,callback:b.callback,next:null},k===null?(w=k=z,S=B):k=k.next=z,m|=C;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;z=b,b=z.next,z.next=null,r.lastBaseUpdate=z,r.shared.pending=null}}while(!0);k===null&&(S=B),r.baseState=S,r.firstBaseUpdate=w,r.lastBaseUpdate=k,u===null&&(r.shared.lanes=0),sa|=m,t.lanes=m,t.memoizedState=B}}function Ld(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Hd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Ld(n[t],e)}var mi=H(null),Ll=H(0);function qd(t,e){t=Yn,K(Ll,t),K(mi,e),Yn=t|e.baseLanes}function Zs(){K(Ll,Yn),K(mi,mi.current)}function Qs(){Yn=Ll.current,Q(mi),Q(Ll)}var ea=0,pt=null,kt=null,ie=null,Hl=!1,pi=!1,Ha=!1,ql=0,bo=0,gi=null,Cb=0;function ee(){throw Error(s(321))}function Ks(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!je(t[n],e[n]))return!1;return!0}function Js(t,e,n,o,r,u){return ea=u,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?Oh:Dh,Ha=!1,u=n(o,r),Ha=!1,pi&&(u=Yd(e,n,o,r)),Pd(t),u}function Pd(t){N.H=Ql;var e=kt!==null&&kt.next!==null;if(ea=0,ie=kt=pt=null,Hl=!1,bo=0,gi=null,e)throw Error(s(300));t===null||de||(t=t.dependencies,t!==null&&kl(t)&&(de=!0))}function Yd(t,e,n,o){pt=t;var r=0;do{if(pi&&(gi=null),bo=0,pi=!1,25<=r)throw Error(s(301));if(r+=1,ie=kt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}N.H=jb,u=e(n,o)}while(pi);return u}function zb(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?vo(e):e,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(pt.flags|=1024),e}function Fs(){var t=ql!==0;return ql=0,t}function $s(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ws(t){if(Hl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Hl=!1}ea=0,ie=kt=pt=null,pi=!1,bo=ql=0,gi=null}function Ne(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?pt.memoizedState=ie=t:ie=ie.next=t,ie}function oe(){if(kt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=ie===null?pt.memoizedState:ie.next;if(e!==null)ie=e,kt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},ie===null?pt.memoizedState=ie=t:ie=ie.next=t}return ie}function Is(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var e=bo;return bo+=1,gi===null&&(gi=[]),t=Ud(gi,t,e),e=pt,(ie===null?e.memoizedState:ie.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?Oh:Dh),t}function Pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===V)return Se(t)}throw Error(s(438,String(t)))}function tu(t){var e=null,n=pt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Is(),pt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),o=0;o<t;o++)n[o]=dt;return e.index++,n}function jn(t,e){return typeof e=="function"?e(t):e}function Yl(t){var e=oe();return eu(e,kt,t)}function eu(t,e,n){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var r=t.baseQueue,u=o.pending;if(u!==null){if(r!==null){var m=r.next;r.next=u.next,u.next=m}e.baseQueue=r=u,o.pending=null}if(u=t.baseState,r===null)t.memoizedState=u;else{e=r.next;var b=m=null,S=null,w=e,k=!1;do{var B=w.lane&-536870913;if(B!==w.lane?(St&B)===B:(ea&B)===B){var C=w.revertLane;if(C===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),B===di&&(k=!0);else if((ea&C)===C){w=w.next,C===di&&(k=!0);continue}else B={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},S===null?(b=S=B,m=u):S=S.next=B,pt.lanes|=C,sa|=C;B=w.action,Ha&&n(u,B),u=w.hasEagerState?w.eagerState:n(u,B)}else C={lane:B,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},S===null?(b=S=C,m=u):S=S.next=C,pt.lanes|=B,sa|=B;w=w.next}while(w!==null&&w!==e);if(S===null?m=u:S.next=b,!je(u,t.memoizedState)&&(de=!0,k&&(n=hi,n!==null)))throw n;t.memoizedState=u,t.baseState=m,t.baseQueue=S,o.lastRenderedState=u}return r===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function nu(t){var e=oe(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var o=n.dispatch,r=n.pending,u=e.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do u=t(u,m.action),m=m.next;while(m!==r);je(u,e.memoizedState)||(de=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,o]}function Xd(t,e,n){var o=pt,r=oe(),u=Et;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var m=!je((kt||r).memoizedState,n);m&&(r.memoizedState=n,de=!0),r=r.queue;var b=Qd.bind(null,o,r,t);if(xo(2048,8,b,[t]),r.getSnapshot!==e||m||ie!==null&&ie.memoizedState.tag&1){if(o.flags|=2048,yi(9,Xl(),Zd.bind(null,o,r,n,e),null),Yt===null)throw Error(s(349));u||(ea&124)!==0||Gd(o,e,n)}return n}function Gd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e=Is(),pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zd(t,e,n,o){e.value=n,e.getSnapshot=o,Kd(e)&&Jd(t)}function Qd(t,e,n){return n(function(){Kd(e)&&Jd(t)})}function Kd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!je(t,n)}catch{return!0}}function Jd(t){var e=si(t,2);e!==null&&Ye(e,t,2)}function au(t){var e=Ne();if(typeof t=="function"){var n=t;if(t=n(),Ha){bn(!0);try{n()}finally{bn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:t},e}function Fd(t,e,n,o){return t.baseState=n,eu(t,kt,typeof o=="function"?o:jn)}function Nb(t,e,n,o,r){if(Zl(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};N.T!==null?n(!0):u.isTransition=!1,o(u),n=e.pending,n===null?(u.next=e.pending=u,$d(e,u)):(u.next=n.next,e.pending=n.next=u)}}function $d(t,e){var n=e.action,o=e.payload,r=t.state;if(e.isTransition){var u=N.T,m={};N.T=m;try{var b=n(r,o),S=N.S;S!==null&&S(m,b),Wd(t,e,b)}catch(w){iu(t,e,w)}finally{N.T=u}}else try{u=n(r,o),Wd(t,e,u)}catch(w){iu(t,e,w)}}function Wd(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){Id(t,e,o)},function(o){return iu(t,e,o)}):Id(t,e,n)}function Id(t,e,n){e.status="fulfilled",e.value=n,th(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,$d(t,n)))}function iu(t,e,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=n,th(e),e=e.next;while(e!==o)}t.action=null}function th(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function eh(t,e){return e}function nh(t,e){if(Et){var n=Yt.formState;if(n!==null){t:{var o=pt;if(Et){if($t){e:{for(var r=$t,u=xn;r.nodeType!==8;){if(!u){r=null;break e}if(r=mn(r.nextSibling),r===null){r=null;break e}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){$t=mn(r.nextSibling),o=r.data==="F!";break t}}Ua(o)}o=!1}o&&(e=n[0])}}return n=Ne(),n.memoizedState=n.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eh,lastRenderedState:e},n.queue=o,n=Sh.bind(null,pt,o),o.dispatch=n,o=au(!1),u=uu.bind(null,pt,!1,o.queue),o=Ne(),r={state:e,dispatch:null,action:t,pending:null},o.queue=r,n=Nb.bind(null,pt,r,u,n),r.dispatch=n,o.memoizedState=t,[e,n,!1]}function ah(t){var e=oe();return ih(e,kt,t)}function ih(t,e,n){if(e=eu(t,e,eh)[0],t=Yl(jn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=vo(e)}catch(m){throw m===ho?jl:m}else o=e;e=oe();var r=e.queue,u=r.dispatch;return n!==e.memoizedState&&(pt.flags|=2048,yi(9,Xl(),_b.bind(null,r,n),null)),[o,u,t]}function _b(t,e){t.action=e}function oh(t){var e=oe(),n=kt;if(n!==null)return ih(e,n,t);oe(),e=e.memoizedState,n=oe();var o=n.queue.dispatch;return n.memoizedState=t,[e,o,!1]}function yi(t,e,n,o){return t={tag:t,create:n,deps:o,inst:e,next:null},e=pt.updateQueue,e===null&&(e=Is(),pt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t),t}function Xl(){return{destroy:void 0,resource:void 0}}function lh(){return oe().memoizedState}function Gl(t,e,n,o){var r=Ne();o=o===void 0?null:o,pt.flags|=t,r.memoizedState=yi(1|e,Xl(),n,o)}function xo(t,e,n,o){var r=oe();o=o===void 0?null:o;var u=r.memoizedState.inst;kt!==null&&o!==null&&Ks(o,kt.memoizedState.deps)?r.memoizedState=yi(e,u,n,o):(pt.flags|=t,r.memoizedState=yi(1|e,u,n,o))}function rh(t,e){Gl(8390656,8,t,e)}function sh(t,e){xo(2048,8,t,e)}function uh(t,e){return xo(4,2,t,e)}function ch(t,e){return xo(4,4,t,e)}function fh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dh(t,e,n){n=n!=null?n.concat([t]):null,xo(4,4,fh.bind(null,e,t),n)}function ou(){}function hh(t,e){var n=oe();e=e===void 0?null:e;var o=n.memoizedState;return e!==null&&Ks(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function mh(t,e){var n=oe();e=e===void 0?null:e;var o=n.memoizedState;if(e!==null&&Ks(e,o[1]))return o[0];if(o=t(),Ha){bn(!0);try{t()}finally{bn(!1)}}return n.memoizedState=[o,e],o}function lu(t,e,n){return n===void 0||(ea&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=y0(),pt.lanes|=t,sa|=t,n)}function ph(t,e,n,o){return je(n,e)?n:mi.current!==null?(t=lu(t,n,o),je(t,e)||(de=!0),t):(ea&42)===0?(de=!0,t.memoizedState=n):(t=y0(),pt.lanes|=t,sa|=t,e)}function gh(t,e,n,o,r){var u=Z.p;Z.p=u!==0&&8>u?u:8;var m=N.T,b={};N.T=b,uu(t,!1,e,n);try{var S=r(),w=N.S;if(w!==null&&w(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var k=wb(S,o);So(t,e,k,Pe(t))}else So(t,e,o,Pe(t))}catch(B){So(t,e,{then:function(){},status:"rejected",reason:B},Pe())}finally{Z.p=u,N.T=m}}function kb(){}function ru(t,e,n,o){if(t.tag!==5)throw Error(s(476));var r=yh(t).queue;gh(t,r,e,et,n===null?kb:function(){return bh(t),n(o)})}function yh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:et},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function bh(t){var e=yh(t).next.queue;So(t,e,{},Pe())}function su(){return Se(Lo)}function vh(){return oe().memoizedState}function xh(){return oe().memoizedState}function Vb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Pe();t=In(n);var o=ta(e,t,n);o!==null&&(Ye(o,e,n),po(o,e,n)),e={cache:Bs()},t.payload=e;return}e=e.return}}function Ub(t,e,n){var o=Pe();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Zl(t)?Th(e,n):(n=Rs(t,e,n,o),n!==null&&(Ye(n,t,o),Ah(n,e,o)))}function Sh(t,e,n){var o=Pe();So(t,e,n,o)}function So(t,e,n,o){var r={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))Th(e,r);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var m=e.lastRenderedState,b=u(m,n);if(r.hasEagerState=!0,r.eagerState=b,je(b,m))return wl(t,e,r,0),Yt===null&&Rl(),!1}catch{}finally{}if(n=Rs(t,e,r,o),n!==null)return Ye(n,t,o),Ah(n,e,o),!0}return!1}function uu(t,e,n,o){if(o={lane:2,revertLane:qu(),action:o,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(e)throw Error(s(479))}else e=Rs(t,n,o,2),e!==null&&Ye(e,t,2)}function Zl(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Th(t,e){pi=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ah(t,e,n){if((n&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,pl(t,n)}}var Ql={readContext:Se,use:Pl,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useLayoutEffect:ee,useInsertionEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useSyncExternalStore:ee,useId:ee,useHostTransitionStatus:ee,useFormState:ee,useActionState:ee,useOptimistic:ee,useMemoCache:ee,useCacheRefresh:ee},Oh={readContext:Se,use:Pl,useCallback:function(t,e){return Ne().memoizedState=[t,e===void 0?null:e],t},useContext:Se,useEffect:rh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Gl(4194308,4,fh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){Gl(4,2,t,e)},useMemo:function(t,e){var n=Ne();e=e===void 0?null:e;var o=t();if(Ha){bn(!0);try{t()}finally{bn(!1)}}return n.memoizedState=[o,e],o},useReducer:function(t,e,n){var o=Ne();if(n!==void 0){var r=n(e);if(Ha){bn(!0);try{n(e)}finally{bn(!1)}}}else r=e;return o.memoizedState=o.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},o.queue=t,t=t.dispatch=Ub.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var e=Ne();return t={current:t},e.memoizedState=t},useState:function(t){t=au(t);var e=t.queue,n=Sh.bind(null,pt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ou,useDeferredValue:function(t,e){var n=Ne();return lu(n,t,e)},useTransition:function(){var t=au(!1);return t=gh.bind(null,pt,t.queue,!0,!1),Ne().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var o=pt,r=Ne();if(Et){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Yt===null)throw Error(s(349));(St&124)!==0||Gd(o,e,n)}r.memoizedState=n;var u={value:n,getSnapshot:e};return r.queue=u,rh(Qd.bind(null,o,u,t),[t]),o.flags|=2048,yi(9,Xl(),Zd.bind(null,o,u,n,e),null),n},useId:function(){var t=Ne(),e=Yt.identifierPrefix;if(Et){var n=kn,o=_n;n=(o&~(1<<32-De(o)-1)).toString(32)+n,e="«"+e+"R"+n,n=ql++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Cb++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:su,useFormState:nh,useActionState:nh,useOptimistic:function(t){var e=Ne();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=uu.bind(null,pt,!0,n),n.dispatch=e,[t,e]},useMemoCache:tu,useCacheRefresh:function(){return Ne().memoizedState=Vb.bind(null,pt)}},Dh={readContext:Se,use:Pl,useCallback:hh,useContext:Se,useEffect:sh,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:mh,useReducer:Yl,useRef:lh,useState:function(){return Yl(jn)},useDebugValue:ou,useDeferredValue:function(t,e){var n=oe();return ph(n,kt.memoizedState,t,e)},useTransition:function(){var t=Yl(jn)[0],e=oe().memoizedState;return[typeof t=="boolean"?t:vo(t),e]},useSyncExternalStore:Xd,useId:vh,useHostTransitionStatus:su,useFormState:ah,useActionState:ah,useOptimistic:function(t,e){var n=oe();return Fd(n,kt,t,e)},useMemoCache:tu,useCacheRefresh:xh},jb={readContext:Se,use:Pl,useCallback:hh,useContext:Se,useEffect:sh,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:mh,useReducer:nu,useRef:lh,useState:function(){return nu(jn)},useDebugValue:ou,useDeferredValue:function(t,e){var n=oe();return kt===null?lu(n,t,e):ph(n,kt.memoizedState,t,e)},useTransition:function(){var t=nu(jn)[0],e=oe().memoizedState;return[typeof t=="boolean"?t:vo(t),e]},useSyncExternalStore:Xd,useId:vh,useHostTransitionStatus:su,useFormState:oh,useActionState:oh,useOptimistic:function(t,e){var n=oe();return kt!==null?Fd(n,kt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:tu,useCacheRefresh:xh},bi=null,To=0;function Kl(t){var e=To;return To+=1,bi===null&&(bi=[]),Ud(bi,t,e)}function Ao(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Jl(t,e){throw e.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Eh(t){var e=t._init;return e(t._payload)}function Mh(t){function e(E,A){if(t){var R=E.deletions;R===null?(E.deletions=[A],E.flags|=16):R.push(A)}}function n(E,A){if(!t)return null;for(;A!==null;)e(E,A),A=A.sibling;return null}function o(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function r(E,A){return E=Nn(E,A),E.index=0,E.sibling=null,E}function u(E,A,R){return E.index=R,t?(R=E.alternate,R!==null?(R=R.index,R<A?(E.flags|=67108866,A):R):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function m(E){return t&&E.alternate===null&&(E.flags|=67108866),E}function b(E,A,R,U){return A===null||A.tag!==6?(A=Cs(R,E.mode,U),A.return=E,A):(A=r(A,R),A.return=E,A)}function S(E,A,R,U){var nt=R.type;return nt===O?k(E,A,R.props.children,U,R.key):A!==null&&(A.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===X&&Eh(nt)===A.type)?(A=r(A,R.props),Ao(A,R),A.return=E,A):(A=zl(R.type,R.key,R.props,null,E.mode,U),Ao(A,R),A.return=E,A)}function w(E,A,R,U){return A===null||A.tag!==4||A.stateNode.containerInfo!==R.containerInfo||A.stateNode.implementation!==R.implementation?(A=zs(R,E.mode,U),A.return=E,A):(A=r(A,R.children||[]),A.return=E,A)}function k(E,A,R,U,nt){return A===null||A.tag!==7?(A=Na(R,E.mode,U,nt),A.return=E,A):(A=r(A,R),A.return=E,A)}function B(E,A,R){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Cs(""+A,E.mode,R),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case v:return R=zl(A.type,A.key,A.props,null,E.mode,R),Ao(R,A),R.return=E,R;case M:return A=zs(A,E.mode,R),A.return=E,A;case X:var U=A._init;return A=U(A._payload),B(E,A,R)}if(Tt(A)||jt(A))return A=Na(A,E.mode,R,null),A.return=E,A;if(typeof A.then=="function")return B(E,Kl(A),R);if(A.$$typeof===V)return B(E,Vl(E,A),R);Jl(E,A)}return null}function C(E,A,R,U){var nt=A!==null?A.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return nt!==null?null:b(E,A,""+R,U);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case v:return R.key===nt?S(E,A,R,U):null;case M:return R.key===nt?w(E,A,R,U):null;case X:return nt=R._init,R=nt(R._payload),C(E,A,R,U)}if(Tt(R)||jt(R))return nt!==null?null:k(E,A,R,U,null);if(typeof R.then=="function")return C(E,A,Kl(R),U);if(R.$$typeof===V)return C(E,A,Vl(E,R),U);Jl(E,R)}return null}function z(E,A,R,U,nt){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return E=E.get(R)||null,b(A,E,""+U,nt);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case v:return E=E.get(U.key===null?R:U.key)||null,S(A,E,U,nt);case M:return E=E.get(U.key===null?R:U.key)||null,w(A,E,U,nt);case X:var yt=U._init;return U=yt(U._payload),z(E,A,R,U,nt)}if(Tt(U)||jt(U))return E=E.get(R)||null,k(A,E,U,nt,null);if(typeof U.then=="function")return z(E,A,R,Kl(U),nt);if(U.$$typeof===V)return z(E,A,R,Vl(A,U),nt);Jl(A,U)}return null}function ct(E,A,R,U){for(var nt=null,yt=null,it=A,ut=A=0,me=null;it!==null&&ut<R.length;ut++){it.index>ut?(me=it,it=null):me=it.sibling;var Ot=C(E,it,R[ut],U);if(Ot===null){it===null&&(it=me);break}t&&it&&Ot.alternate===null&&e(E,it),A=u(Ot,A,ut),yt===null?nt=Ot:yt.sibling=Ot,yt=Ot,it=me}if(ut===R.length)return n(E,it),Et&&ka(E,ut),nt;if(it===null){for(;ut<R.length;ut++)it=B(E,R[ut],U),it!==null&&(A=u(it,A,ut),yt===null?nt=it:yt.sibling=it,yt=it);return Et&&ka(E,ut),nt}for(it=o(it);ut<R.length;ut++)me=z(it,E,ut,R[ut],U),me!==null&&(t&&me.alternate!==null&&it.delete(me.key===null?ut:me.key),A=u(me,A,ut),yt===null?nt=me:yt.sibling=me,yt=me);return t&&it.forEach(function(ya){return e(E,ya)}),Et&&ka(E,ut),nt}function rt(E,A,R,U){if(R==null)throw Error(s(151));for(var nt=null,yt=null,it=A,ut=A=0,me=null,Ot=R.next();it!==null&&!Ot.done;ut++,Ot=R.next()){it.index>ut?(me=it,it=null):me=it.sibling;var ya=C(E,it,Ot.value,U);if(ya===null){it===null&&(it=me);break}t&&it&&ya.alternate===null&&e(E,it),A=u(ya,A,ut),yt===null?nt=ya:yt.sibling=ya,yt=ya,it=me}if(Ot.done)return n(E,it),Et&&ka(E,ut),nt;if(it===null){for(;!Ot.done;ut++,Ot=R.next())Ot=B(E,Ot.value,U),Ot!==null&&(A=u(Ot,A,ut),yt===null?nt=Ot:yt.sibling=Ot,yt=Ot);return Et&&ka(E,ut),nt}for(it=o(it);!Ot.done;ut++,Ot=R.next())Ot=z(it,E,ut,Ot.value,U),Ot!==null&&(t&&Ot.alternate!==null&&it.delete(Ot.key===null?ut:Ot.key),A=u(Ot,A,ut),yt===null?nt=Ot:yt.sibling=Ot,yt=Ot);return t&&it.forEach(function(Bv){return e(E,Bv)}),Et&&ka(E,ut),nt}function Ut(E,A,R,U){if(typeof R=="object"&&R!==null&&R.type===O&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case v:t:{for(var nt=R.key;A!==null;){if(A.key===nt){if(nt=R.type,nt===O){if(A.tag===7){n(E,A.sibling),U=r(A,R.props.children),U.return=E,E=U;break t}}else if(A.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===X&&Eh(nt)===A.type){n(E,A.sibling),U=r(A,R.props),Ao(U,R),U.return=E,E=U;break t}n(E,A);break}else e(E,A);A=A.sibling}R.type===O?(U=Na(R.props.children,E.mode,U,R.key),U.return=E,E=U):(U=zl(R.type,R.key,R.props,null,E.mode,U),Ao(U,R),U.return=E,E=U)}return m(E);case M:t:{for(nt=R.key;A!==null;){if(A.key===nt)if(A.tag===4&&A.stateNode.containerInfo===R.containerInfo&&A.stateNode.implementation===R.implementation){n(E,A.sibling),U=r(A,R.children||[]),U.return=E,E=U;break t}else{n(E,A);break}else e(E,A);A=A.sibling}U=zs(R,E.mode,U),U.return=E,E=U}return m(E);case X:return nt=R._init,R=nt(R._payload),Ut(E,A,R,U)}if(Tt(R))return ct(E,A,R,U);if(jt(R)){if(nt=jt(R),typeof nt!="function")throw Error(s(150));return R=nt.call(R),rt(E,A,R,U)}if(typeof R.then=="function")return Ut(E,A,Kl(R),U);if(R.$$typeof===V)return Ut(E,A,Vl(E,R),U);Jl(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,A!==null&&A.tag===6?(n(E,A.sibling),U=r(A,R),U.return=E,E=U):(n(E,A),U=Cs(R,E.mode,U),U.return=E,E=U),m(E)):n(E,A)}return function(E,A,R,U){try{To=0;var nt=Ut(E,A,R,U);return bi=null,nt}catch(it){if(it===ho||it===jl)throw it;var yt=Be(29,it,null,E.mode);return yt.lanes=U,yt.return=E,yt}finally{}}}var vi=Mh(!0),Rh=Mh(!1),tn=H(null),Sn=null;function na(t){var e=t.alternate;K(se,se.current&1),K(tn,t),Sn===null&&(e===null||mi.current!==null||e.memoizedState!==null)&&(Sn=t)}function wh(t){if(t.tag===22){if(K(se,se.current),K(tn,t),Sn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Sn=t)}}else aa()}function aa(){K(se,se.current),K(tn,tn.current)}function Bn(t){Q(tn),Sn===t&&(Sn=null),Q(se)}var se=H(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Iu(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function cu(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:y({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={enqueueSetState:function(t,e,n){t=t._reactInternals;var o=Pe(),r=In(o);r.payload=e,n!=null&&(r.callback=n),e=ta(t,r,o),e!==null&&(Ye(e,t,o),po(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=Pe(),r=In(o);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=ta(t,r,o),e!==null&&(Ye(e,t,o),po(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pe(),o=In(n);o.tag=2,e!=null&&(o.callback=e),e=ta(t,o,n),e!==null&&(Ye(e,t,n),po(e,t,n))}};function Ch(t,e,n,o,r,u,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,m):e.prototype&&e.prototype.isPureReactComponent?!io(n,o)||!io(r,u):!0}function zh(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function qa(t,e){var n=e;if("ref"in e){n={};for(var o in e)o!=="ref"&&(n[o]=e[o])}if(t=t.defaultProps){n===e&&(n=y({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Nh(t){$l(t)}function _h(t){console.error(t)}function kh(t){$l(t)}function Wl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Vh(t,e,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function du(t,e,n){return n=In(n),n.tag=3,n.payload={element:null},n.callback=function(){Wl(t,e)},n}function Uh(t){return t=In(t),t.tag=3,t}function jh(t,e,n,o){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=o.value;t.payload=function(){return r(u)},t.callback=function(){Vh(e,n,o)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Vh(e,n,o),typeof r!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Bb(t,e,n,o,r){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=n.alternate,e!==null&&uo(e,n,r,!0),n=tn.current,n!==null){switch(n.tag){case 13:return Sn===null?Uu():n.alternate===null&&Wt===0&&(Wt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,o===qs?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([o]):e.add(o),Bu(t,o,r)),!1;case 22:return n.flags|=65536,o===qs?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([o]):n.add(o)),Bu(t,o,r)),!1}throw Error(s(435,n.tag))}return Bu(t,o,r),Uu(),!1}if(Et)return e=tn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,o!==ks&&(t=Error(s(422),{cause:o}),so(Fe(t,n)))):(o!==ks&&(e=Error(s(423),{cause:o}),so(Fe(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,o=Fe(o,n),r=du(t.stateNode,o,r),Xs(t,r),Wt!==4&&(Wt=2)),!1;var u=Error(s(520),{cause:o});if(u=Fe(u,n),Co===null?Co=[u]:Co.push(u),Wt!==4&&(Wt=2),e===null)return!0;o=Fe(o,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=du(n.stateNode,o,t),Xs(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ua===null||!ua.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Uh(r),jh(r,t,n,o),Xs(n,r),!1}n=n.return}while(n!==null);return!1}var Bh=Error(s(461)),de=!1;function ye(t,e,n,o){e.child=t===null?Rh(e,null,n,o):vi(e,t.child,n,o)}function Lh(t,e,n,o,r){n=n.render;var u=e.ref;if("ref"in o){var m={};for(var b in o)b!=="ref"&&(m[b]=o[b])}else m=o;return Ba(e),o=Js(t,e,n,m,u,r),b=Fs(),t!==null&&!de?($s(t,e,r),Ln(t,e,r)):(Et&&b&&Ns(e),e.flags|=1,ye(t,e,o,r),e.child)}function Hh(t,e,n,o,r){if(t===null){var u=n.type;return typeof u=="function"&&!ws(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,qh(t,e,u,o,r)):(t=zl(n.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!xu(t,r)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(m,o)&&t.ref===e.ref)return Ln(t,e,r)}return e.flags|=1,t=Nn(u,o),t.ref=e.ref,t.return=e,e.child=t}function qh(t,e,n,o,r){if(t!==null){var u=t.memoizedProps;if(io(u,o)&&t.ref===e.ref)if(de=!1,e.pendingProps=o=u,xu(t,r))(t.flags&131072)!==0&&(de=!0);else return e.lanes=t.lanes,Ln(t,e,r)}return hu(t,e,n,o,r)}function Ph(t,e,n){var o=e.pendingProps,r=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((e.flags&128)!==0){if(o=u!==null?u.baseLanes|n:n,t!==null){for(r=e.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;e.childLanes=u&~o}else e.childLanes=0,e.child=null;return Yh(t,e,o,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ul(e,u!==null?u.cachePool:null),u!==null?qd(e,u):Zs(),wh(e);else return e.lanes=e.childLanes=536870912,Yh(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(Ul(e,u.cachePool),qd(e,u),aa(),e.memoizedState=null):(t!==null&&Ul(e,null),Zs(),aa());return ye(t,e,r,n),e.child}function Yh(t,e,n,o){var r=Hs();return r=r===null?null:{parent:re._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Ul(e,null),Zs(),wh(e),t!==null&&uo(t,e,o,!0),null}function Il(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function hu(t,e,n,o,r){return Ba(e),n=Js(t,e,n,o,void 0,r),o=Fs(),t!==null&&!de?($s(t,e,r),Ln(t,e,r)):(Et&&o&&Ns(e),e.flags|=1,ye(t,e,n,r),e.child)}function Xh(t,e,n,o,r,u){return Ba(e),e.updateQueue=null,n=Yd(e,o,n,r),Pd(t),o=Fs(),t!==null&&!de?($s(t,e,u),Ln(t,e,u)):(Et&&o&&Ns(e),e.flags|=1,ye(t,e,n,u),e.child)}function Gh(t,e,n,o,r){if(Ba(e),e.stateNode===null){var u=ui,m=n.contextType;typeof m=="object"&&m!==null&&(u=Se(m)),u=new n(o,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=fu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=o,u.state=e.memoizedState,u.refs={},Ps(e),m=n.contextType,u.context=typeof m=="object"&&m!==null?Se(m):ui,u.state=e.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(cu(e,n,m,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&fu.enqueueReplaceState(u,u.state,null),yo(e,o,u,r),go(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,S=qa(n,b);u.props=S;var w=u.context,k=n.contextType;m=ui,typeof k=="object"&&k!==null&&(m=Se(k));var B=n.getDerivedStateFromProps;k=typeof B=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,k||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||w!==m)&&zh(e,u,o,m),Wn=!1;var C=e.memoizedState;u.state=C,yo(e,o,u,r),go(),w=e.memoizedState,b||C!==w||Wn?(typeof B=="function"&&(cu(e,n,B,o),w=e.memoizedState),(S=Wn||Ch(e,n,S,o,C,w,m))?(k||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=w),u.props=o,u.state=w,u.context=m,o=S):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{u=e.stateNode,Ys(t,e),m=e.memoizedProps,k=qa(n,m),u.props=k,B=e.pendingProps,C=u.context,w=n.contextType,S=ui,typeof w=="object"&&w!==null&&(S=Se(w)),b=n.getDerivedStateFromProps,(w=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==B||C!==S)&&zh(e,u,o,S),Wn=!1,C=e.memoizedState,u.state=C,yo(e,o,u,r),go();var z=e.memoizedState;m!==B||C!==z||Wn||t!==null&&t.dependencies!==null&&kl(t.dependencies)?(typeof b=="function"&&(cu(e,n,b,o),z=e.memoizedState),(k=Wn||Ch(e,n,k,o,C,z,S)||t!==null&&t.dependencies!==null&&kl(t.dependencies))?(w||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,z,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,z,S)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=z),u.props=o,u.state=z,u.context=S,o=k):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),o=!1)}return u=o,Il(t,e),o=(e.flags&128)!==0,u||o?(u=e.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&o?(e.child=vi(e,t.child,null,r),e.child=vi(e,null,n,r)):ye(t,e,n,r),e.memoizedState=u.state,t=e.child):t=Ln(t,e,r),t}function Zh(t,e,n,o){return ro(),e.flags|=256,ye(t,e,n,o),e.child}var mu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pu(t){return{baseLanes:t,cachePool:_d()}}function gu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=en),t}function Qh(t,e,n){var o=e.pendingProps,r=!1,u=(e.flags&128)!==0,m;if((m=u)||(m=t!==null&&t.memoizedState===null?!1:(se.current&2)!==0),m&&(r=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(Et){if(r?na(e):aa(),Et){var b=$t,S;if(S=b){t:{for(S=b,b=xn;S.nodeType!==8;){if(!b){b=null;break t}if(S=mn(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(e.memoizedState={dehydrated:b,treeContext:_a!==null?{id:_n,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},S=Be(18,null,null,0),S.stateNode=b,S.return=e,e.child=S,Me=e,$t=null,S=!0):S=!1}S||Ua(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Iu(b)?e.lanes=32:e.lanes=536870912,null;Bn(e)}return b=o.children,o=o.fallback,r?(aa(),r=e.mode,b=tr({mode:"hidden",children:b},r),o=Na(o,r,n,null),b.return=e,o.return=e,b.sibling=o,e.child=b,r=e.child,r.memoizedState=pu(n),r.childLanes=gu(t,m,n),e.memoizedState=mu,o):(na(e),yu(e,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(u)e.flags&256?(na(e),e.flags&=-257,e=bu(t,e,n)):e.memoizedState!==null?(aa(),e.child=t.child,e.flags|=128,e=null):(aa(),r=o.fallback,b=e.mode,o=tr({mode:"visible",children:o.children},b),r=Na(r,b,n,null),r.flags|=2,o.return=e,r.return=e,o.sibling=r,e.child=o,vi(e,t.child,null,n),o=e.child,o.memoizedState=pu(n),o.childLanes=gu(t,m,n),e.memoizedState=mu,e=r);else if(na(e),Iu(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var w=m.dgst;m=w,o=Error(s(419)),o.stack="",o.digest=m,so({value:o,source:null,stack:null}),e=bu(t,e,n)}else if(de||uo(t,e,n,!1),m=(n&t.childLanes)!==0,de||m){if(m=Yt,m!==null&&(o=n&-n,o=(o&42)!==0?1:Ji(o),o=(o&(m.suspendedLanes|n))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,si(t,o),Ye(m,t,o),Bh;b.data==="$?"||Uu(),e=bu(t,e,n)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,$t=mn(b.nextSibling),Me=e,Et=!0,Va=null,xn=!1,t!==null&&(We[Ie++]=_n,We[Ie++]=kn,We[Ie++]=_a,_n=t.id,kn=t.overflow,_a=e),e=yu(e,o.children),e.flags|=4096);return e}return r?(aa(),r=o.fallback,b=e.mode,S=t.child,w=S.sibling,o=Nn(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,w!==null?r=Nn(w,r):(r=Na(r,b,n,null),r.flags|=2),r.return=e,o.return=e,o.sibling=r,e.child=o,o=r,r=e.child,b=t.child.memoizedState,b===null?b=pu(n):(S=b.cachePool,S!==null?(w=re._currentValue,S=S.parent!==w?{parent:w,pool:w}:S):S=_d(),b={baseLanes:b.baseLanes|n,cachePool:S}),r.memoizedState=b,r.childLanes=gu(t,m,n),e.memoizedState=mu,o):(na(e),n=t.child,t=n.sibling,n=Nn(n,{mode:"visible",children:o.children}),n.return=e,n.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=n,e.memoizedState=null,n)}function yu(t,e){return e=tr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function tr(t,e){return t=Be(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function bu(t,e,n){return vi(e,t.child,null,n),t=yu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kh(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Us(t.return,e,n)}function vu(t,e,n,o,r){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=r)}function Jh(t,e,n){var o=e.pendingProps,r=o.revealOrder,u=o.tail;if(ye(t,e,o.children,n),o=se.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,n,e);else if(t.tag===19)Kh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(K(se,o),r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vu(e,!1,r,n,u);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vu(e,!0,n,null,u);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sa|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(uo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&kl(t)))}function Lb(t,e,n){switch(e.tag){case 3:I(e,e.stateNode.containerInfo),$n(e,re,t.memoizedState.cache),ro();break;case 27:case 5:At(e);break;case 4:I(e,e.stateNode.containerInfo);break;case 10:$n(e,e.type,e.memoizedProps.value);break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(na(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Qh(t,e,n):(na(e),t=Ln(t,e,n),t!==null?t.sibling:null);na(e);break;case 19:var r=(t.flags&128)!==0;if(o=(n&e.childLanes)!==0,o||(uo(t,e,n,!1),o=(n&e.childLanes)!==0),r){if(o)return Jh(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(se,se.current),o)break;return null;case 22:case 23:return e.lanes=0,Ph(t,e,n);case 24:$n(e,re,t.memoizedState.cache)}return Ln(t,e,n)}function Fh(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)de=!0;else{if(!xu(t,n)&&(e.flags&128)===0)return de=!1,Lb(t,e,n);de=(t.flags&131072)!==0}else de=!1,Et&&(e.flags&1048576)!==0&&Ed(e,_l,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var o=e.elementType,r=o._init;if(o=r(o._payload),e.type=o,typeof o=="function")ws(o)?(t=qa(o,t),e.tag=1,e=Gh(null,e,o,t,n)):(e.tag=0,e=hu(null,e,o,t,n));else{if(o!=null){if(r=o.$$typeof,r===$){e.tag=11,e=Lh(null,e,o,t,n);break t}else if(r===J){e.tag=14,e=Hh(null,e,o,t,n);break t}}throw e=qt(o)||o,Error(s(306,e,""))}}return e;case 0:return hu(t,e,e.type,e.pendingProps,n);case 1:return o=e.type,r=qa(o,e.pendingProps),Gh(t,e,o,r,n);case 3:t:{if(I(e,e.stateNode.containerInfo),t===null)throw Error(s(387));o=e.pendingProps;var u=e.memoizedState;r=u.element,Ys(t,e),yo(e,o,null,n);var m=e.memoizedState;if(o=m.cache,$n(e,re,o),o!==u.cache&&js(e,[re],n,!0),go(),o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Zh(t,e,o,n);break t}else if(o!==r){r=Fe(Error(s(424)),e),so(r),e=Zh(t,e,o,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=mn(t.firstChild),Me=e,Et=!0,Va=null,xn=!0,n=Rh(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ro(),o===r){e=Ln(t,e,n);break t}ye(t,e,o,n)}e=e.child}return e;case 26:return Il(t,e),t===null?(n=tm(e.type,null,e.pendingProps,null))?e.memoizedState=n:Et||(n=e.type,t=e.pendingProps,o=mr(at.current).createElement(n),o[Y]=e,o[F]=t,ve(o,n,t),fe(o),e.stateNode=o):e.memoizedState=tm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return At(e),t===null&&Et&&(o=e.stateNode=$0(e.type,e.pendingProps,at.current),Me=e,xn=!0,r=$t,da(e.type)?(tc=r,$t=mn(o.firstChild)):$t=r),ye(t,e,e.pendingProps.children,n),Il(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Et&&((r=o=$t)&&(o=hv(o,e.type,e.pendingProps,xn),o!==null?(e.stateNode=o,Me=e,$t=mn(o.firstChild),xn=!1,r=!0):r=!1),r||Ua(e)),At(e),r=e.type,u=e.pendingProps,m=t!==null?t.memoizedProps:null,o=u.children,Fu(r,u)?o=null:m!==null&&Fu(r,m)&&(e.flags|=32),e.memoizedState!==null&&(r=Js(t,e,zb,null,null,n),Lo._currentValue=r),Il(t,e),ye(t,e,o,n),e.child;case 6:return t===null&&Et&&((t=n=$t)&&(n=mv(n,e.pendingProps,xn),n!==null?(e.stateNode=n,Me=e,$t=null,t=!0):t=!1),t||Ua(e)),null;case 13:return Qh(t,e,n);case 4:return I(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=vi(e,null,o,n):ye(t,e,o,n),e.child;case 11:return Lh(t,e,e.type,e.pendingProps,n);case 7:return ye(t,e,e.pendingProps,n),e.child;case 8:return ye(t,e,e.pendingProps.children,n),e.child;case 12:return ye(t,e,e.pendingProps.children,n),e.child;case 10:return o=e.pendingProps,$n(e,e.type,o.value),ye(t,e,o.children,n),e.child;case 9:return r=e.type._context,o=e.pendingProps.children,Ba(e),r=Se(r),o=o(r),e.flags|=1,ye(t,e,o,n),e.child;case 14:return Hh(t,e,e.type,e.pendingProps,n);case 15:return qh(t,e,e.type,e.pendingProps,n);case 19:return Jh(t,e,n);case 31:return o=e.pendingProps,n=e.mode,o={mode:o.mode,children:o.children},t===null?(n=tr(o,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Nn(t.child,o),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Ph(t,e,n);case 24:return Ba(e),o=Se(re),t===null?(r=Hs(),r===null&&(r=Yt,u=Bs(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),e.memoizedState={parent:o,cache:r},Ps(e),$n(e,re,r)):((t.lanes&n)!==0&&(Ys(t,e),yo(e,null,null,n),go()),r=t.memoizedState,u=e.memoizedState,r.parent!==o?(r={parent:o,cache:o},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),$n(e,re,o)):(o=u.cache,$n(e,re,o),o!==r.cache&&js(e,[re],n,!0))),ye(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function Hn(t){t.flags|=4}function $h(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!om(e)){if(e=tn.current,e!==null&&((St&4194048)===St?Sn!==null:(St&62914560)!==St&&(St&536870912)===0||e!==Sn))throw mo=qs,kd;t.flags|=8192}}function er(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Qi():536870912,t.lanes|=e,Ai|=e)}function Oo(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function Hb(t,e,n){var o=e.pendingProps;switch(_s(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return Jt(e),null;case 3:return n=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Un(re),mt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(lo(e)?Hn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,wd())),Jt(e),null;case 26:return n=e.memoizedState,t===null?(Hn(e),n!==null?(Jt(e),$h(e,n)):(Jt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Hn(e),Jt(e),$h(e,n)):(Jt(e),e.flags&=-16777217):(t.memoizedProps!==o&&Hn(e),Jt(e),e.flags&=-16777217),null;case 27:Ct(e),n=at.current;var r=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==o&&Hn(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return Jt(e),null}t=tt.current,lo(e)?Md(e):(t=$0(r,o,n),e.stateNode=t,Hn(e))}return Jt(e),null;case 5:if(Ct(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&Hn(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return Jt(e),null}if(t=tt.current,lo(e))Md(e);else{switch(r=mr(at.current),t){case 1:t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=r.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?r.createElement("select",{is:o.is}):r.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?r.createElement(n,{is:o.is}):r.createElement(n)}}t[Y]=e,t[F]=o;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=t;t:switch(ve(t,n,o),n){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Hn(e)}}return Jt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&Hn(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(s(166));if(t=at.current,lo(e)){if(t=e.stateNode,n=e.memoizedProps,o=null,r=Me,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}t[Y]=e,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||X0(t.nodeValue,n)),t||Ua(e)}else t=mr(t).createTextNode(o),t[Y]=e,e.stateNode=t}return Jt(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=lo(e),o!==null&&o.dehydrated!==null){if(t===null){if(!r)throw Error(s(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[Y]=e}else ro(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Jt(e),r=!1}else r=wd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(Bn(e),e):(Bn(e),null)}if(Bn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=o!==null,t=t!==null&&t.memoizedState!==null,n){o=e.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==r&&(o.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),er(e,e.updateQueue),Jt(e),null;case 4:return mt(),t===null&&Gu(e.stateNode.containerInfo),Jt(e),null;case 10:return Un(e.type),Jt(e),null;case 19:if(Q(se),r=e.memoizedState,r===null)return Jt(e),null;if(o=(e.flags&128)!==0,u=r.rendering,u===null)if(o)Oo(r,!1);else{if(Wt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Fl(t),u!==null){for(e.flags|=128,Oo(r,!1),t=u.updateQueue,e.updateQueue=t,er(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Dd(n,t),n=n.sibling;return K(se,se.current&1|2),e.child}t=t.sibling}r.tail!==null&&ge()>ir&&(e.flags|=128,o=!0,Oo(r,!1),e.lanes=4194304)}else{if(!o)if(t=Fl(u),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,er(e,t),Oo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Et)return Jt(e),null}else 2*ge()-r.renderingStartTime>ir&&n!==536870912&&(e.flags|=128,o=!0,Oo(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ge(),e.sibling=null,t=se.current,K(se,o?t&1|2:t&1),e):(Jt(e),null);case 22:case 23:return Bn(e),Qs(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(n&536870912)!==0&&(e.flags&128)===0&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),n=e.updateQueue,n!==null&&er(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==n&&(e.flags|=2048),t!==null&&Q(La),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Un(re),Jt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function qb(t,e){switch(_s(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Un(re),mt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ct(e),null;case 13:if(Bn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(se),null;case 4:return mt(),null;case 10:return Un(e.type),null;case 22:case 23:return Bn(e),Qs(),t!==null&&Q(La),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Un(re),null;case 25:return null;default:return null}}function Wh(t,e){switch(_s(e),e.tag){case 3:Un(re),mt();break;case 26:case 27:case 5:Ct(e);break;case 4:mt();break;case 13:Bn(e);break;case 19:Q(se);break;case 10:Un(e.type);break;case 22:case 23:Bn(e),Qs(),t!==null&&Q(La);break;case 24:Un(re)}}function Do(t,e){try{var n=e.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var r=o.next;n=r;do{if((n.tag&t)===t){o=void 0;var u=n.create,m=n.inst;o=u(),m.destroy=o}n=n.next}while(n!==r)}}catch(b){Ht(e,e.return,b)}}function ia(t,e,n){try{var o=e.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var u=r.next;o=u;do{if((o.tag&t)===t){var m=o.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,r=e;var S=n,w=b;try{w()}catch(k){Ht(r,S,k)}}}o=o.next}while(o!==u)}}catch(k){Ht(e,e.return,k)}}function Ih(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Hd(e,n)}catch(o){Ht(t,t.return,o)}}}function t0(t,e,n){n.props=qa(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){Ht(t,e,o)}}function Eo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof n=="function"?t.refCleanup=n(o):n.current=o}}catch(r){Ht(t,e,r)}}function Tn(t,e){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(r){Ht(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ht(t,e,r)}else n.current=null}function e0(t){var e=t.type,n=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break t;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(r){Ht(t,t.return,r)}}function Su(t,e,n){try{var o=t.stateNode;sv(o,t.type,n,e),o[F]=e}catch(r){Ht(t,t.return,r)}}function n0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&da(t.type)||t.tag===4}function Tu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||n0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&da(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hr));else if(o!==4&&(o===27&&da(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function nr(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(o===27&&da(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(nr(t,e,n),t=t.sibling;t!==null;)nr(t,e,n),t=t.sibling}function a0(t){var e=t.stateNode,n=t.memoizedProps;try{for(var o=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);ve(e,o,n),e[Y]=t,e[F]=n}catch(u){Ht(t,t.return,u)}}var qn=!1,ne=!1,Ou=!1,i0=typeof WeakSet=="function"?WeakSet:Set,he=null;function Pb(t,e){if(t=t.containerInfo,Ku=xr,t=pd(t),Ts(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var m=0,b=-1,S=-1,w=0,k=0,B=t,C=null;e:for(;;){for(var z;B!==n||r!==0&&B.nodeType!==3||(b=m+r),B!==u||o!==0&&B.nodeType!==3||(S=m+o),B.nodeType===3&&(m+=B.nodeValue.length),(z=B.firstChild)!==null;)C=B,B=z;for(;;){if(B===t)break e;if(C===n&&++w===r&&(b=m),C===u&&++k===o&&(S=m),(z=B.nextSibling)!==null)break;B=C,C=B.parentNode}B=z}n=b===-1||S===-1?null:{start:b,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ju={focusedElem:t,selectionRange:n},xr=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){switch(e=he,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,r=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var ct=qa(n.type,r,n.elementType===n.type);t=o.getSnapshotBeforeUpdate(ct,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Ht(n,n.return,rt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Wu(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}}function o0(t,e,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:oa(t,n),o&4&&Do(5,n);break;case 1:if(oa(t,n),o&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(m){Ht(n,n.return,m)}else{var r=qa(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Ht(n,n.return,m)}}o&64&&Ih(n),o&512&&Eo(n,n.return);break;case 3:if(oa(t,n),o&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Hd(t,e)}catch(m){Ht(n,n.return,m)}}break;case 27:e===null&&o&4&&a0(n);case 26:case 5:oa(t,n),e===null&&o&4&&e0(n),o&512&&Eo(n,n.return);break;case 12:oa(t,n);break;case 13:oa(t,n),o&4&&s0(t,n),o&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=$b.bind(null,n),pv(t,n))));break;case 22:if(o=n.memoizedState!==null||qn,!o){e=e!==null&&e.memoizedState!==null||ne,r=qn;var u=ne;qn=o,(ne=e)&&!u?la(t,n,(n.subtreeFlags&8772)!==0):oa(t,n),qn=r,ne=u}break;case 30:break;default:oa(t,n)}}function l0(t){var e=t.alternate;e!==null&&(t.alternate=null,l0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&wn(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Gt=null,_e=!1;function Pn(t,e,n){for(n=n.child;n!==null;)r0(t,e,n),n=n.sibling}function r0(t,e,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Oa,n)}catch{}switch(n.tag){case 26:ne||Tn(n,e),Pn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ne||Tn(n,e);var o=Gt,r=_e;da(n.type)&&(Gt=n.stateNode,_e=!1),Pn(t,e,n),Vo(n.stateNode),Gt=o,_e=r;break;case 5:ne||Tn(n,e);case 6:if(o=Gt,r=_e,Gt=null,Pn(t,e,n),Gt=o,_e=r,Gt!==null)if(_e)try{(Gt.nodeType===9?Gt.body:Gt.nodeName==="HTML"?Gt.ownerDocument.body:Gt).removeChild(n.stateNode)}catch(u){Ht(n,e,u)}else try{Gt.removeChild(n.stateNode)}catch(u){Ht(n,e,u)}break;case 18:Gt!==null&&(_e?(t=Gt,J0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Yo(t)):J0(Gt,n.stateNode));break;case 4:o=Gt,r=_e,Gt=n.stateNode.containerInfo,_e=!0,Pn(t,e,n),Gt=o,_e=r;break;case 0:case 11:case 14:case 15:ne||ia(2,n,e),ne||ia(4,n,e),Pn(t,e,n);break;case 1:ne||(Tn(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"&&t0(n,e,o)),Pn(t,e,n);break;case 21:Pn(t,e,n);break;case 22:ne=(o=ne)||n.memoizedState!==null,Pn(t,e,n),ne=o;break;default:Pn(t,e,n)}}function s0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Yo(t)}catch(n){Ht(e,e.return,n)}}function Yb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new i0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new i0),e;default:throw Error(s(435,t.tag))}}function Du(t,e){var n=Yb(t);e.forEach(function(o){var r=Wb.bind(null,t,o);n.has(o)||(n.add(o),o.then(r,r))})}function Le(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o],u=t,m=e,b=m;t:for(;b!==null;){switch(b.tag){case 27:if(da(b.type)){Gt=b.stateNode,_e=!1;break t}break;case 5:Gt=b.stateNode,_e=!1;break t;case 3:case 4:Gt=b.stateNode.containerInfo,_e=!0;break t}b=b.return}if(Gt===null)throw Error(s(160));r0(u,m,r),Gt=null,_e=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)u0(e,t),e=e.sibling}var hn=null;function u0(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Le(e,t),He(t),o&4&&(ia(3,t,t.return),Do(3,t),ia(5,t,t.return));break;case 1:Le(e,t),He(t),o&512&&(ne||n===null||Tn(n,n.return)),o&64&&qn&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var r=hn;if(Le(e,t),He(t),o&512&&(ne||n===null||Tn(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){t:{o=t.type,n=t.memoizedProps,r=r.ownerDocument||r;e:switch(o){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Ee]||u[Y]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(o),r.head.insertBefore(u,r.querySelector("head > title"))),ve(u,o,n),u[Y]=t,fe(u),o=u;break t;case"link":var m=am("link","href",r).get(o+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(u=m[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break e}}u=r.createElement(o),ve(u,o,n),r.head.appendChild(u);break;case"meta":if(m=am("meta","content",r).get(o+(n.content||""))){for(b=0;b<m.length;b++)if(u=m[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break e}}u=r.createElement(o),ve(u,o,n),r.head.appendChild(u);break;default:throw Error(s(468,o))}u[Y]=t,fe(u),o=u}t.stateNode=o}else im(r,t.type,t.stateNode);else t.stateNode=nm(r,o,t.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?im(r,t.type,t.stateNode):nm(r,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Su(t,t.memoizedProps,n.memoizedProps)}break;case 27:Le(e,t),He(t),o&512&&(ne||n===null||Tn(n,n.return)),n!==null&&o&4&&Su(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Le(e,t),He(t),o&512&&(ne||n===null||Tn(n,n.return)),t.flags&32){r=t.stateNode;try{ei(r,"")}catch(z){Ht(t,t.return,z)}}o&4&&t.stateNode!=null&&(r=t.memoizedProps,Su(t,r,n!==null?n.memoizedProps:r)),o&1024&&(Ou=!0);break;case 6:if(Le(e,t),He(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(z){Ht(t,t.return,z)}}break;case 3:if(yr=null,r=hn,hn=pr(e.containerInfo),Le(e,t),hn=r,He(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(z){Ht(t,t.return,z)}Ou&&(Ou=!1,c0(t));break;case 4:o=hn,hn=pr(t.stateNode.containerInfo),Le(e,t),He(t),hn=o;break;case 12:Le(e,t),He(t);break;case 13:Le(e,t),He(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zu=ge()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Du(t,o)));break;case 22:r=t.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,w=qn,k=ne;if(qn=w||r,ne=k||S,Le(e,t),ne=k,qn=w,He(t),o&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||S||qn||ne||Pa(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){S=n=e;try{if(u=S.stateNode,r)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=S.stateNode;var B=S.memoizedProps.style,C=B!=null&&B.hasOwnProperty("display")?B.display:null;b.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(z){Ht(S,S.return,z)}}}else if(e.tag===6){if(n===null){S=e;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(z){Ht(S,S.return,z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Du(t,n))));break;case 19:Le(e,t),He(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Du(t,o)));break;case 30:break;case 21:break;default:Le(e,t),He(t)}}function He(t){var e=t.flags;if(e&2){try{for(var n,o=t.return;o!==null;){if(n0(o)){n=o;break}o=o.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,u=Tu(t);nr(t,u,r);break;case 5:var m=n.stateNode;n.flags&32&&(ei(m,""),n.flags&=-33);var b=Tu(t);nr(t,b,m);break;case 3:case 4:var S=n.stateNode.containerInfo,w=Tu(t);Au(t,w,S);break;default:throw Error(s(161))}}catch(k){Ht(t,t.return,k)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function c0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;c0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function oa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)o0(t,e.alternate,e),e=e.sibling}function Pa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ia(4,e,e.return),Pa(e);break;case 1:Tn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&t0(e,e.return,n),Pa(e);break;case 27:Vo(e.stateNode);case 26:case 5:Tn(e,e.return),Pa(e);break;case 22:e.memoizedState===null&&Pa(e);break;case 30:Pa(e);break;default:Pa(e)}t=t.sibling}}function la(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,r=t,u=e,m=u.flags;switch(u.tag){case 0:case 11:case 15:la(r,u,n),Do(4,u);break;case 1:if(la(r,u,n),o=u,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(w){Ht(o,o.return,w)}if(o=u,r=o.updateQueue,r!==null){var b=o.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)Ld(S[r],b)}catch(w){Ht(o,o.return,w)}}n&&m&64&&Ih(u),Eo(u,u.return);break;case 27:a0(u);case 26:case 5:la(r,u,n),n&&o===null&&m&4&&e0(u),Eo(u,u.return);break;case 12:la(r,u,n);break;case 13:la(r,u,n),n&&m&4&&s0(r,u);break;case 22:u.memoizedState===null&&la(r,u,n),Eo(u,u.return);break;case 30:break;default:la(r,u,n)}e=e.sibling}}function Eu(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&co(n))}function Mu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&co(t))}function An(t,e,n,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)f0(t,e,n,o),e=e.sibling}function f0(t,e,n,o){var r=e.flags;switch(e.tag){case 0:case 11:case 15:An(t,e,n,o),r&2048&&Do(9,e);break;case 1:An(t,e,n,o);break;case 3:An(t,e,n,o),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&co(t)));break;case 12:if(r&2048){An(t,e,n,o),t=e.stateNode;try{var u=e.memoizedProps,m=u.id,b=u.onPostCommit;typeof b=="function"&&b(m,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Ht(e,e.return,S)}}else An(t,e,n,o);break;case 13:An(t,e,n,o);break;case 23:break;case 22:u=e.stateNode,m=e.alternate,e.memoizedState!==null?u._visibility&2?An(t,e,n,o):Mo(t,e):u._visibility&2?An(t,e,n,o):(u._visibility|=2,xi(t,e,n,o,(e.subtreeFlags&10256)!==0)),r&2048&&Eu(m,e);break;case 24:An(t,e,n,o),r&2048&&Mu(e.alternate,e);break;default:An(t,e,n,o)}}function xi(t,e,n,o,r){for(r=r&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,m=e,b=n,S=o,w=m.flags;switch(m.tag){case 0:case 11:case 15:xi(u,m,b,S,r),Do(8,m);break;case 23:break;case 22:var k=m.stateNode;m.memoizedState!==null?k._visibility&2?xi(u,m,b,S,r):Mo(u,m):(k._visibility|=2,xi(u,m,b,S,r)),r&&w&2048&&Eu(m.alternate,m);break;case 24:xi(u,m,b,S,r),r&&w&2048&&Mu(m.alternate,m);break;default:xi(u,m,b,S,r)}e=e.sibling}}function Mo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,o=e,r=o.flags;switch(o.tag){case 22:Mo(n,o),r&2048&&Eu(o.alternate,o);break;case 24:Mo(n,o),r&2048&&Mu(o.alternate,o);break;default:Mo(n,o)}e=e.sibling}}var Ro=8192;function Si(t){if(t.subtreeFlags&Ro)for(t=t.child;t!==null;)d0(t),t=t.sibling}function d0(t){switch(t.tag){case 26:Si(t),t.flags&Ro&&t.memoizedState!==null&&Rv(hn,t.memoizedState,t.memoizedProps);break;case 5:Si(t);break;case 3:case 4:var e=hn;hn=pr(t.stateNode.containerInfo),Si(t),hn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ro,Ro=16777216,Si(t),Ro=e):Si(t));break;default:Si(t)}}function h0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function wo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];he=o,p0(o,t)}h0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)m0(t),t=t.sibling}function m0(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&ia(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ar(t)):wo(t);break;default:wo(t)}}function ar(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];he=o,p0(o,t)}h0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ia(8,e,e.return),ar(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ar(e));break;default:ar(e)}t=t.sibling}}function p0(t,e){for(;he!==null;){var n=he;switch(n.tag){case 0:case 11:case 15:ia(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,he=o;else t:for(n=t;he!==null;){o=he;var r=o.sibling,u=o.return;if(l0(o),o===n){he=null;break t}if(r!==null){r.return=u,he=r;break t}he=u}}}var Xb={getCacheForType:function(t){var e=Se(re),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Gb=typeof WeakMap=="function"?WeakMap:Map,zt=0,Yt=null,vt=null,St=0,Nt=0,qe=null,ra=!1,Ti=!1,Ru=!1,Yn=0,Wt=0,sa=0,Ya=0,wu=0,en=0,Ai=0,Co=null,ke=null,Cu=!1,zu=0,ir=1/0,or=null,ua=null,be=0,ca=null,Oi=null,Di=0,Nu=0,_u=null,g0=null,zo=0,ku=null;function Pe(){if((zt&2)!==0&&St!==0)return St&-St;if(N.T!==null){var t=di;return t!==0?t:qu()}return gl()}function y0(){en===0&&(en=(St&536870912)===0||Et?hl():536870912);var t=tn.current;return t!==null&&(t.flags|=32),en}function Ye(t,e,n){(t===Yt&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)&&(Ei(t,0),fa(t,St,en,!1)),Jn(t,n),((zt&2)===0||t!==Yt)&&(t===Yt&&((zt&2)===0&&(Ya|=n),Wt===4&&fa(t,St,en,!1)),On(t))}function b0(t,e,n){if((zt&6)!==0)throw Error(s(327));var o=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Ce(t,e),r=o?Kb(t,e):ju(t,e,!0),u=o;do{if(r===0){Ti&&!o&&fa(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!Zb(n)){r=ju(t,e,!1),u=!1;continue}if(r===2){if(u=e,t.errorRecoveryDisabledLanes&u)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var b=t;r=Co;var S=b.current.memoizedState.isDehydrated;if(S&&(Ei(b,m).flags|=256),m=ju(b,m,!1),m!==2){if(Ru&&!S){b.errorRecoveryDisabledLanes|=u,Ya|=u,r=4;break t}u=ke,ke=r,u!==null&&(ke===null?ke=u:ke.push.apply(ke,u))}r=m}if(u=!1,r!==2)continue}}if(r===1){Ei(t,0),fa(t,e,0,!0);break}t:{switch(o=t,u=r,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:fa(o,e,en,!ra);break t;case 2:ke=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(r=zu+300-ge(),10<r)){if(fa(o,e,en,!ra),cn(o,0,!0)!==0)break t;o.timeoutHandle=Q0(v0.bind(null,o,n,ke,or,Cu,e,en,Ya,Ai,ra,u,2,-0,0),r);break t}v0(o,n,ke,or,Cu,e,en,Ya,Ai,ra,u,0,-0,0)}}break}while(!0);On(t)}function v0(t,e,n,o,r,u,m,b,S,w,k,B,C,z){if(t.timeoutHandle=-1,B=e.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:Mv},d0(e),B=wv(),B!==null)){t.cancelPendingCommit=B(E0.bind(null,t,e,u,n,o,r,m,b,S,k,1,C,z)),fa(t,u,m,!w);return}E0(t,e,u,n,o,r,m,b,S)}function Zb(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var r=n[o],u=r.getSnapshot;r=r.value;try{if(!je(u(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fa(t,e,n,o){e&=~wu,e&=~Ya,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var r=e;0<r;){var u=31-De(r),m=1<<u;o[u]=-1,r&=~m}n!==0&&ml(t,n,e)}function lr(){return(zt&6)===0?(No(0),!1):!0}function Vu(){if(vt!==null){if(Nt===0)var t=vt.return;else t=vt,Vn=ja=null,Ws(t),bi=null,To=0,t=vt;for(;t!==null;)Wh(t.alternate,t),t=t.return;vt=null}}function Ei(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,cv(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Vu(),Yt=t,vt=n=Nn(t.current,null),St=e,Nt=0,qe=null,ra=!1,Ti=Ce(t,e),Ru=!1,Ai=en=wu=Ya=sa=Wt=0,ke=Co=null,Cu=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var r=31-De(o),u=1<<r;e|=t[r],o&=~u}return Yn=e,Rl(),n}function x0(t,e){pt=null,N.H=Ql,e===ho||e===jl?(e=jd(),Nt=3):e===kd?(e=jd(),Nt=4):Nt=e===Bh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,qe=e,vt===null&&(Wt=1,Wl(t,Fe(e,t.current)))}function S0(){var t=N.H;return N.H=Ql,t===null?Ql:t}function T0(){var t=N.A;return N.A=Xb,t}function Uu(){Wt=4,ra||(St&4194048)!==St&&tn.current!==null||(Ti=!0),(sa&134217727)===0&&(Ya&134217727)===0||Yt===null||fa(Yt,St,en,!1)}function ju(t,e,n){var o=zt;zt|=2;var r=S0(),u=T0();(Yt!==t||St!==e)&&(or=null,Ei(t,e)),e=!1;var m=Wt;t:do try{if(Nt!==0&&vt!==null){var b=vt,S=qe;switch(Nt){case 8:Vu(),m=6;break t;case 3:case 2:case 9:case 6:tn.current===null&&(e=!0);var w=Nt;if(Nt=0,qe=null,Mi(t,b,S,w),n&&Ti){m=0;break t}break;default:w=Nt,Nt=0,qe=null,Mi(t,b,S,w)}}Qb(),m=Wt;break}catch(k){x0(t,k)}while(!0);return e&&t.shellSuspendCounter++,Vn=ja=null,zt=o,N.H=r,N.A=u,vt===null&&(Yt=null,St=0,Rl()),m}function Qb(){for(;vt!==null;)A0(vt)}function Kb(t,e){var n=zt;zt|=2;var o=S0(),r=T0();Yt!==t||St!==e?(or=null,ir=ge()+500,Ei(t,e)):Ti=Ce(t,e);t:do try{if(Nt!==0&&vt!==null){e=vt;var u=qe;e:switch(Nt){case 1:Nt=0,qe=null,Mi(t,e,u,1);break;case 2:case 9:if(Vd(u)){Nt=0,qe=null,O0(e);break}e=function(){Nt!==2&&Nt!==9||Yt!==t||(Nt=7),On(t)},u.then(e,e);break t;case 3:Nt=7;break t;case 4:Nt=5;break t;case 7:Vd(u)?(Nt=0,qe=null,O0(e)):(Nt=0,qe=null,Mi(t,e,u,7));break;case 5:var m=null;switch(vt.tag){case 26:m=vt.memoizedState;case 5:case 27:var b=vt;if(!m||om(m)){Nt=0,qe=null;var S=b.sibling;if(S!==null)vt=S;else{var w=b.return;w!==null?(vt=w,rr(w)):vt=null}break e}}Nt=0,qe=null,Mi(t,e,u,5);break;case 6:Nt=0,qe=null,Mi(t,e,u,6);break;case 8:Vu(),Wt=6;break t;default:throw Error(s(462))}}Jb();break}catch(k){x0(t,k)}while(!0);return Vn=ja=null,N.H=o,N.A=r,zt=n,vt!==null?0:(Yt=null,St=0,Rl(),Wt)}function Jb(){for(;vt!==null&&!rn();)A0(vt)}function A0(t){var e=Fh(t.alternate,t,Yn);t.memoizedProps=t.pendingProps,e===null?rr(t):vt=e}function O0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Xh(n,e,e.pendingProps,e.type,void 0,St);break;case 11:e=Xh(n,e,e.pendingProps,e.type.render,e.ref,St);break;case 5:Ws(e);default:Wh(n,e),e=vt=Dd(e,Yn),e=Fh(n,e,Yn)}t.memoizedProps=t.pendingProps,e===null?rr(t):vt=e}function Mi(t,e,n,o){Vn=ja=null,Ws(e),bi=null,To=0;var r=e.return;try{if(Bb(t,r,e,n,St)){Wt=1,Wl(t,Fe(n,t.current)),vt=null;return}}catch(u){if(r!==null)throw vt=r,u;Wt=1,Wl(t,Fe(n,t.current)),vt=null;return}e.flags&32768?(Et||o===1?t=!0:Ti||(St&536870912)!==0?t=!1:(ra=t=!0,(o===2||o===9||o===3||o===6)&&(o=tn.current,o!==null&&o.tag===13&&(o.flags|=16384))),D0(e,t)):rr(e)}function rr(t){var e=t;do{if((e.flags&32768)!==0){D0(e,ra);return}t=e.return;var n=Hb(e.alternate,e,Yn);if(n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);Wt===0&&(Wt=5)}function D0(t,e){do{var n=qb(t.alternate,t);if(n!==null){n.flags&=32767,vt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){vt=t;return}vt=t=n}while(t!==null);Wt=6,vt=null}function E0(t,e,n,o,r,u,m,b,S){t.cancelPendingCommit=null;do sr();while(be!==0);if((zt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Ms,ns(t,n,u,m,b,S),t===Yt&&(vt=Yt=null,St=0),Oi=e,ca=t,Di=n,Nu=u,_u=r,g0=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ib(Ze,function(){return z0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,r=Z.p,Z.p=2,m=zt,zt|=4;try{Pb(t,e,n)}finally{zt=m,Z.p=r,N.T=o}}be=1,M0(),R0(),w0()}}function M0(){if(be===1){be=0;var t=ca,e=Oi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var o=Z.p;Z.p=2;var r=zt;zt|=4;try{u0(e,t);var u=Ju,m=pd(t.containerInfo),b=u.focusedElem,S=u.selectionRange;if(m!==b&&b&&b.ownerDocument&&md(b.ownerDocument.documentElement,b)){if(S!==null&&Ts(b)){var w=S.start,k=S.end;if(k===void 0&&(k=w),"selectionStart"in b)b.selectionStart=w,b.selectionEnd=Math.min(k,b.value.length);else{var B=b.ownerDocument||document,C=B&&B.defaultView||window;if(C.getSelection){var z=C.getSelection(),ct=b.textContent.length,rt=Math.min(S.start,ct),Ut=S.end===void 0?rt:Math.min(S.end,ct);!z.extend&&rt>Ut&&(m=Ut,Ut=rt,rt=m);var E=hd(b,rt),A=hd(b,Ut);if(E&&A&&(z.rangeCount!==1||z.anchorNode!==E.node||z.anchorOffset!==E.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var R=B.createRange();R.setStart(E.node,E.offset),z.removeAllRanges(),rt>Ut?(z.addRange(R),z.extend(A.node,A.offset)):(R.setEnd(A.node,A.offset),z.addRange(R))}}}}for(B=[],z=b;z=z.parentNode;)z.nodeType===1&&B.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<B.length;b++){var U=B[b];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}xr=!!Ku,Ju=Ku=null}finally{zt=r,Z.p=o,N.T=n}}t.current=e,be=2}}function R0(){if(be===2){be=0;var t=ca,e=Oi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var o=Z.p;Z.p=2;var r=zt;zt|=4;try{o0(t,e.alternate,e)}finally{zt=r,Z.p=o,N.T=n}}be=3}}function w0(){if(be===4||be===3){be=0,Ge();var t=ca,e=Oi,n=Di,o=g0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?be=5:(be=0,Oi=ca=null,C0(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(ua=null),Fi(n),e=e.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Oa,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=N.T,r=Z.p,Z.p=2,N.T=null;try{for(var u=t.onRecoverableError,m=0;m<o.length;m++){var b=o[m];u(b.value,{componentStack:b.stack})}}finally{N.T=e,Z.p=r}}(Di&3)!==0&&sr(),On(t),r=t.pendingLanes,(n&4194090)!==0&&(r&42)!==0?t===ku?zo++:(zo=0,ku=t):zo=0,No(0)}}function C0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,co(e)))}function sr(t){return M0(),R0(),w0(),z0()}function z0(){if(be!==5)return!1;var t=ca,e=Nu;Nu=0;var n=Fi(Di),o=N.T,r=Z.p;try{Z.p=32>n?32:n,N.T=null,n=_u,_u=null;var u=ca,m=Di;if(be=0,Oi=ca=null,Di=0,(zt&6)!==0)throw Error(s(331));var b=zt;if(zt|=4,m0(u.current),f0(u,u.current,m,n),zt=b,No(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Oa,u)}catch{}return!0}finally{Z.p=r,N.T=o,C0(t,e)}}function N0(t,e,n){e=Fe(n,e),e=du(t.stateNode,e,2),t=ta(t,e,2),t!==null&&(Jn(t,2),On(t))}function Ht(t,e,n){if(t.tag===3)N0(t,t,n);else for(;e!==null;){if(e.tag===3){N0(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ua===null||!ua.has(o))){t=Fe(n,t),n=Uh(2),o=ta(e,n,2),o!==null&&(jh(n,o,e,t),Jn(o,2),On(o));break}}e=e.return}}function Bu(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new Gb;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(n)||(Ru=!0,r.add(n),t=Fb.bind(null,t,e,n),e.then(t,t))}function Fb(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Yt===t&&(St&n)===n&&(Wt===4||Wt===3&&(St&62914560)===St&&300>ge()-zu?(zt&2)===0&&Ei(t,0):wu|=n,Ai===St&&(Ai=0)),On(t)}function _0(t,e){e===0&&(e=Qi()),t=si(t,e),t!==null&&(Jn(t,e),On(t))}function $b(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_0(t,n)}function Wb(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(e),_0(t,n)}function Ib(t,e){return Pt(t,e)}var ur=null,Ri=null,Lu=!1,cr=!1,Hu=!1,Xa=0;function On(t){t!==Ri&&t.next===null&&(Ri===null?ur=Ri=t:Ri=Ri.next=t),cr=!0,Lu||(Lu=!0,ev())}function No(t,e){if(!Hu&&cr){Hu=!0;do for(var n=!1,o=ur;o!==null;){if(t!==0){var r=o.pendingLanes;if(r===0)var u=0;else{var m=o.suspendedLanes,b=o.pingedLanes;u=(1<<31-De(42|t)+1)-1,u&=r&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,j0(o,u))}else u=St,u=cn(o,o===Yt?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Ce(o,u)||(n=!0,j0(o,u));o=o.next}while(n);Hu=!1}}function tv(){k0()}function k0(){cr=Lu=!1;var t=0;Xa!==0&&(uv()&&(t=Xa),Xa=0);for(var e=ge(),n=null,o=ur;o!==null;){var r=o.next,u=V0(o,e);u===0?(o.next=null,n===null?ur=r:n.next=r,r===null&&(Ri=n)):(n=o,(t!==0||(u&3)!==0)&&(cr=!0)),o=r}No(t)}function V0(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var m=31-De(u),b=1<<m,S=r[m];S===-1?((b&n)===0||(b&o)!==0)&&(r[m]=vn(b,e)):S<=e&&(t.expiredLanes|=b),u&=~b}if(e=Yt,n=St,n=cn(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,n===0||t===e&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&ce(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ce(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(o!==null&&ce(o),Fi(n)){case 2:case 8:n=Rn;break;case 32:n=Ze;break;case 268435456:n=we;break;default:n=Ze}return o=U0.bind(null,t),n=Pt(n,o),t.callbackPriority=e,t.callbackNode=n,e}return o!==null&&o!==null&&ce(o),t.callbackPriority=2,t.callbackNode=null,2}function U0(t,e){if(be!==0&&be!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(sr()&&t.callbackNode!==n)return null;var o=St;return o=cn(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(b0(t,o,e),V0(t,ge()),t.callbackNode!=null&&t.callbackNode===n?U0.bind(null,t):null)}function j0(t,e){if(sr())return null;b0(t,e,!0)}function ev(){fv(function(){(zt&6)!==0?Pt(sn,tv):k0()})}function qu(){return Xa===0&&(Xa=hl()),Xa}function B0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sl(""+t)}function L0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function nv(t,e,n,o,r){if(e==="submit"&&n&&n.stateNode===r){var u=B0((r[F]||null).action),m=o.submitter;m&&(e=(e=m[F]||null)?B0(e.formAction):m.getAttribute("formAction"),e!==null&&(u=e,m=null));var b=new Dl("action","action",null,o,r);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var S=m?L0(r,m):new FormData(r);ru(n,{pending:!0,data:S,method:r.method,action:u},null,S)}}else typeof u=="function"&&(b.preventDefault(),S=m?L0(r,m):new FormData(r),ru(n,{pending:!0,data:S,method:r.method,action:u},u,S))},currentTarget:r}]})}}for(var Pu=0;Pu<Es.length;Pu++){var Yu=Es[Pu],av=Yu.toLowerCase(),iv=Yu[0].toUpperCase()+Yu.slice(1);dn(av,"on"+iv)}dn(bd,"onAnimationEnd"),dn(vd,"onAnimationIteration"),dn(xd,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(Sb,"onTransitionRun"),dn(Tb,"onTransitionStart"),dn(Ab,"onTransitionCancel"),dn(Sd,"onTransitionEnd"),Wa("onMouseEnter",["mouseout","mouseover"]),Wa("onMouseLeave",["mouseout","mouseover"]),Wa("onPointerEnter",["pointerout","pointerover"]),Wa("onPointerLeave",["pointerout","pointerover"]),Ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ra("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ov=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function H0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],r=o.event;o=o.listeners;t:{var u=void 0;if(e)for(var m=o.length-1;0<=m;m--){var b=o[m],S=b.instance,w=b.currentTarget;if(b=b.listener,S!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=w;try{u(r)}catch(k){$l(k)}r.currentTarget=null,u=S}else for(m=0;m<o.length;m++){if(b=o[m],S=b.instance,w=b.currentTarget,b=b.listener,S!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=w;try{u(r)}catch(k){$l(k)}r.currentTarget=null,u=S}}}}function xt(t,e){var n=e[Rt];n===void 0&&(n=e[Rt]=new Set);var o=t+"__bubble";n.has(o)||(q0(e,t,2,!1),n.add(o))}function Xu(t,e,n){var o=0;e&&(o|=4),q0(n,t,o,e)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Gu(t){if(!t[fr]){t[fr]=!0,kf.forEach(function(n){n!=="selectionchange"&&(ov.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fr]||(e[fr]=!0,Xu("selectionchange",!1,e))}}function q0(t,e,n,o){switch(fm(e)){case 2:var r=Nv;break;case 8:r=_v;break;default:r=oc}n=r.bind(null,e,n,t),r=void 0,!hs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zu(t,e,n,o,r){var u=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var b=o.stateNode.containerInfo;if(b===r)break;if(m===4)for(m=o.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;b!==null;){if(m=Ue(b),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){o=u=m;continue t}b=b.parentNode}}o=o.return}Kf(function(){var w=u,k=fs(n),B=[];t:{var C=Td.get(t);if(C!==void 0){var z=Dl,ct=t;switch(t){case"keypress":if(Al(n)===0)break t;case"keydown":case"keyup":z=Iy;break;case"focusin":ct="focus",z=ys;break;case"focusout":ct="blur",z=ys;break;case"beforeblur":case"afterblur":z=ys;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=nb;break;case bd:case vd:case xd:z=Xy;break;case Sd:z=ib;break;case"scroll":case"scrollend":z=Ly;break;case"wheel":z=lb;break;case"copy":case"cut":case"paste":z=Zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=If;break;case"toggle":case"beforetoggle":z=sb}var rt=(e&4)!==0,Ut=!rt&&(t==="scroll"||t==="scrollend"),E=rt?C!==null?C+"Capture":null:C;rt=[];for(var A=w,R;A!==null;){var U=A;if(R=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||R===null||E===null||(U=$i(A,E),U!=null&&rt.push(ko(A,U,R))),Ut)break;A=A.return}0<rt.length&&(C=new z(C,ct,null,n,k),B.push({event:C,listeners:rt}))}}if((e&7)===0){t:{if(C=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",C&&n!==cs&&(ct=n.relatedTarget||n.fromElement)&&(Ue(ct)||ct[Dt]))break t;if((z||C)&&(C=k.window===k?k:(C=k.ownerDocument)?C.defaultView||C.parentWindow:window,z?(ct=n.relatedTarget||n.toElement,z=w,ct=ct?Ue(ct):null,ct!==null&&(Ut=d(ct),rt=ct.tag,ct!==Ut||rt!==5&&rt!==27&&rt!==6)&&(ct=null)):(z=null,ct=w),z!==ct)){if(rt=$f,U="onMouseLeave",E="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(rt=If,U="onPointerLeave",E="onPointerEnter",A="pointer"),Ut=z==null?C:Ma(z),R=ct==null?C:Ma(ct),C=new rt(U,A+"leave",z,n,k),C.target=Ut,C.relatedTarget=R,U=null,Ue(k)===w&&(rt=new rt(E,A+"enter",ct,n,k),rt.target=R,rt.relatedTarget=Ut,U=rt),Ut=U,z&&ct)e:{for(rt=z,E=ct,A=0,R=rt;R;R=wi(R))A++;for(R=0,U=E;U;U=wi(U))R++;for(;0<A-R;)rt=wi(rt),A--;for(;0<R-A;)E=wi(E),R--;for(;A--;){if(rt===E||E!==null&&rt===E.alternate)break e;rt=wi(rt),E=wi(E)}rt=null}else rt=null;z!==null&&P0(B,C,z,rt,!1),ct!==null&&Ut!==null&&P0(B,Ut,ct,rt,!0)}}t:{if(C=w?Ma(w):window,z=C.nodeName&&C.nodeName.toLowerCase(),z==="select"||z==="input"&&C.type==="file")var nt=rd;else if(od(C))if(sd)nt=bb;else{nt=gb;var yt=pb}else z=C.nodeName,!z||z.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?w&&us(w.elementType)&&(nt=rd):nt=yb;if(nt&&(nt=nt(t,w))){ld(B,nt,n,k);break t}yt&&yt(t,C,w),t==="focusout"&&w&&C.type==="number"&&w.memoizedProps.value!=null&&ss(C,"number",C.value)}switch(yt=w?Ma(w):window,t){case"focusin":(od(yt)||yt.contentEditable==="true")&&(oi=yt,As=w,oo=null);break;case"focusout":oo=As=oi=null;break;case"mousedown":Os=!0;break;case"contextmenu":case"mouseup":case"dragend":Os=!1,gd(B,n,k);break;case"selectionchange":if(xb)break;case"keydown":case"keyup":gd(B,n,k)}var it;if(vs)t:{switch(t){case"compositionstart":var ut="onCompositionStart";break t;case"compositionend":ut="onCompositionEnd";break t;case"compositionupdate":ut="onCompositionUpdate";break t}ut=void 0}else ii?ad(t,n)&&(ut="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ut="onCompositionStart");ut&&(td&&n.locale!=="ko"&&(ii||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&ii&&(it=Jf()):(Fn=k,ms="value"in Fn?Fn.value:Fn.textContent,ii=!0)),yt=dr(w,ut),0<yt.length&&(ut=new Wf(ut,t,null,n,k),B.push({event:ut,listeners:yt}),it?ut.data=it:(it=id(n),it!==null&&(ut.data=it)))),(it=cb?fb(t,n):db(t,n))&&(ut=dr(w,"onBeforeInput"),0<ut.length&&(yt=new Wf("onBeforeInput","beforeinput",null,n,k),B.push({event:yt,listeners:ut}),yt.data=it)),nv(B,t,w,n,k)}H0(B,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dr(t,e){for(var n=e+"Capture",o=[];t!==null;){var r=t,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=$i(t,n),r!=null&&o.unshift(ko(t,r,u)),r=$i(t,e),r!=null&&o.push(ko(t,r,u))),t.tag===3)return o;t=t.return}return[]}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function P0(t,e,n,o,r){for(var u=e._reactName,m=[];n!==null&&n!==o;){var b=n,S=b.alternate,w=b.stateNode;if(b=b.tag,S!==null&&S===o)break;b!==5&&b!==26&&b!==27||w===null||(S=w,r?(w=$i(n,u),w!=null&&m.unshift(ko(n,w,S))):r||(w=$i(n,u),w!=null&&m.push(ko(n,w,S)))),n=n.return}m.length!==0&&t.push({event:e,listeners:m})}var lv=/\r\n?/g,rv=/\u0000|\uFFFD/g;function Y0(t){return(typeof t=="string"?t:""+t).replace(lv,`
`).replace(rv,"")}function X0(t,e){return e=Y0(e),Y0(t)===e}function hr(){}function Vt(t,e,n,o,r,u){switch(n){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||ei(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&ei(t,""+o);break;case"className":bl(t,"class",o);break;case"tabIndex":bl(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(t,n,o);break;case"style":Zf(t,o,u);break;case"data":if(e!=="object"){bl(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Sl(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Vt(t,e,"name",r.name,r,null),Vt(t,e,"formEncType",r.formEncType,r,null),Vt(t,e,"formMethod",r.formMethod,r,null),Vt(t,e,"formTarget",r.formTarget,r,null)):(Vt(t,e,"encType",r.encType,r,null),Vt(t,e,"method",r.method,r,null),Vt(t,e,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Sl(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=hr);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=Sl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),yl(t,"popover",o);break;case"xlinkActuate":Cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Cn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Cn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Cn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Cn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":yl(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=jy.get(n)||n,yl(t,n,o))}}function Qu(t,e,n,o,r,u){switch(n){case"style":Zf(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof o=="string"?ei(t,o):(typeof o=="number"||typeof o=="bigint")&&ei(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=hr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vf.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),u=t[F]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,r),typeof o=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,o,r);break t}n in t?t[n]=o:o===!0?t.setAttribute(n,""):yl(t,n,o)}}}function ve(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Vt(t,e,u,m,n,null)}}r&&Vt(t,e,"srcSet",n.srcSet,n,null),o&&Vt(t,e,"src",n.src,n,null);return;case"input":xt("invalid",t);var b=u=m=r=null,S=null,w=null;for(o in n)if(n.hasOwnProperty(o)){var k=n[o];if(k!=null)switch(o){case"name":r=k;break;case"type":m=k;break;case"checked":S=k;break;case"defaultChecked":w=k;break;case"value":u=k;break;case"defaultValue":b=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,e));break;default:Vt(t,e,o,k,n,null)}}Pf(t,u,b,S,w,m,r,!1),vl(t);return;case"select":xt("invalid",t),o=m=u=null;for(r in n)if(n.hasOwnProperty(r)&&(b=n[r],b!=null))switch(r){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":o=b;default:Vt(t,e,r,b,n,null)}e=u,n=m,t.multiple=!!o,e!=null?ti(t,!!o,e,!1):n!=null&&ti(t,!!o,n,!0);return;case"textarea":xt("invalid",t),u=r=o=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":o=b;break;case"defaultValue":r=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Vt(t,e,m,b,n,null)}Xf(t,o,r,u),vl(t);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(o=n[S],o!=null))switch(S){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Vt(t,e,S,o,n,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<_o.length;o++)xt(_o[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in n)if(n.hasOwnProperty(w)&&(o=n[w],o!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Vt(t,e,w,o,n,null)}return;default:if(us(e)){for(k in n)n.hasOwnProperty(k)&&(o=n[k],o!==void 0&&Qu(t,e,k,o,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(o=n[b],o!=null&&Vt(t,e,b,o,n,null))}function sv(t,e,n,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,m=null,b=null,S=null,w=null,k=null;for(z in n){var B=n[z];if(n.hasOwnProperty(z)&&B!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":S=B;default:o.hasOwnProperty(z)||Vt(t,e,z,null,o,B)}}for(var C in o){var z=o[C];if(B=n[C],o.hasOwnProperty(C)&&(z!=null||B!=null))switch(C){case"type":u=z;break;case"name":r=z;break;case"checked":w=z;break;case"defaultChecked":k=z;break;case"value":m=z;break;case"defaultValue":b=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:z!==B&&Vt(t,e,C,z,o,B)}}rs(t,m,b,S,w,k,u,r);return;case"select":z=m=b=C=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":z=S;default:o.hasOwnProperty(u)||Vt(t,e,u,null,o,S)}for(r in o)if(u=o[r],S=n[r],o.hasOwnProperty(r)&&(u!=null||S!=null))switch(r){case"value":C=u;break;case"defaultValue":b=u;break;case"multiple":m=u;default:u!==S&&Vt(t,e,r,u,o,S)}e=b,n=m,o=z,C!=null?ti(t,!!n,C,!1):!!o!=!!n&&(e!=null?ti(t,!!n,e,!0):ti(t,!!n,n?[]:"",!1));return;case"textarea":z=C=null;for(b in n)if(r=n[b],n.hasOwnProperty(b)&&r!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Vt(t,e,b,null,o,r)}for(m in o)if(r=o[m],u=n[m],o.hasOwnProperty(m)&&(r!=null||u!=null))switch(m){case"value":C=r;break;case"defaultValue":z=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==u&&Vt(t,e,m,r,o,u)}Yf(t,C,z);return;case"option":for(var ct in n)if(C=n[ct],n.hasOwnProperty(ct)&&C!=null&&!o.hasOwnProperty(ct))switch(ct){case"selected":t.selected=!1;break;default:Vt(t,e,ct,null,o,C)}for(S in o)if(C=o[S],z=n[S],o.hasOwnProperty(S)&&C!==z&&(C!=null||z!=null))switch(S){case"selected":t.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Vt(t,e,S,C,o,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in n)C=n[rt],n.hasOwnProperty(rt)&&C!=null&&!o.hasOwnProperty(rt)&&Vt(t,e,rt,null,o,C);for(w in o)if(C=o[w],z=n[w],o.hasOwnProperty(w)&&C!==z&&(C!=null||z!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,e));break;default:Vt(t,e,w,C,o,z)}return;default:if(us(e)){for(var Ut in n)C=n[Ut],n.hasOwnProperty(Ut)&&C!==void 0&&!o.hasOwnProperty(Ut)&&Qu(t,e,Ut,void 0,o,C);for(k in o)C=o[k],z=n[k],!o.hasOwnProperty(k)||C===z||C===void 0&&z===void 0||Qu(t,e,k,C,o,z);return}}for(var E in n)C=n[E],n.hasOwnProperty(E)&&C!=null&&!o.hasOwnProperty(E)&&Vt(t,e,E,null,o,C);for(B in o)C=o[B],z=n[B],!o.hasOwnProperty(B)||C===z||C==null&&z==null||Vt(t,e,B,C,o,z)}var Ku=null,Ju=null;function mr(t){return t.nodeType===9?t:t.ownerDocument}function G0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=null;function uv(){var t=window.event;return t&&t.type==="popstate"?t===$u?!1:($u=t,!0):($u=null,!1)}var Q0=typeof setTimeout=="function"?setTimeout:void 0,cv=typeof clearTimeout=="function"?clearTimeout:void 0,K0=typeof Promise=="function"?Promise:void 0,fv=typeof queueMicrotask=="function"?queueMicrotask:typeof K0<"u"?function(t){return K0.resolve(null).then(t).catch(dv)}:Q0;function dv(t){setTimeout(function(){throw t})}function da(t){return t==="head"}function J0(t,e){var n=e,o=0,r=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<o&&8>o){n=o;var m=t.ownerDocument;if(n&1&&Vo(m.documentElement),n&2&&Vo(m.body),n&4)for(n=m.head,Vo(n),m=n.firstChild;m;){var b=m.nextSibling,S=m.nodeName;m[Ee]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(r===0){t.removeChild(u),Yo(e);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:o=n.charCodeAt(0)-48;else o=0;n=u}while(n);Yo(e)}function Wu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Wu(n),wn(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function hv(t,e,n,o){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ee])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=mn(t.nextSibling),t===null)break}return null}function mv(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mn(t.nextSibling),t===null))return null;return t}function Iu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function pv(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var o=function(){e(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var tc=null;function F0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function $0(t,e,n){switch(e=mr(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Vo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);wn(t)}var nn=new Map,W0=new Set;function pr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xn=Z.d;Z.d={f:gv,r:yv,D:bv,C:vv,L:xv,m:Sv,X:Av,S:Tv,M:Ov};function gv(){var t=Xn.f(),e=lr();return t||e}function yv(t){var e=Qe(t);e!==null&&e.tag===5&&e.type==="form"?bh(e):Xn.r(t)}var Ci=typeof document>"u"?null:document;function I0(t,e,n){var o=Ci;if(o&&typeof e=="string"&&e){var r=Je(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),W0.has(r)||(W0.add(r),t={rel:t,crossOrigin:n,href:e},o.querySelector(r)===null&&(e=o.createElement("link"),ve(e,"link",t),fe(e),o.head.appendChild(e)))}}function bv(t){Xn.D(t),I0("dns-prefetch",t,null)}function vv(t,e){Xn.C(t,e),I0("preconnect",t,e)}function xv(t,e,n){Xn.L(t,e,n);var o=Ci;if(o&&t&&e){var r='link[rel="preload"][as="'+Je(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Je(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Je(n.imageSizes)+'"]')):r+='[href="'+Je(t)+'"]';var u=r;switch(e){case"style":u=zi(t);break;case"script":u=Ni(t)}nn.has(u)||(t=y({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),nn.set(u,t),o.querySelector(r)!==null||e==="style"&&o.querySelector(Uo(u))||e==="script"&&o.querySelector(jo(u))||(e=o.createElement("link"),ve(e,"link",t),fe(e),o.head.appendChild(e)))}}function Sv(t,e){Xn.m(t,e);var n=Ci;if(n&&t){var o=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Je(o)+'"][href="'+Je(t)+'"]',u=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ni(t)}if(!nn.has(u)&&(t=y({rel:"modulepreload",href:t},e),nn.set(u,t),n.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(jo(u)))return}o=n.createElement("link"),ve(o,"link",t),fe(o),n.head.appendChild(o)}}}function Tv(t,e,n){Xn.S(t,e,n);var o=Ci;if(o&&t){var r=$a(o).hoistableStyles,u=zi(t);e=e||"default";var m=r.get(u);if(!m){var b={loading:0,preload:null};if(m=o.querySelector(Uo(u)))b.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},n),(n=nn.get(u))&&ec(t,n);var S=m=o.createElement("link");fe(S),ve(S,"link",t),S._p=new Promise(function(w,k){S.onload=w,S.onerror=k}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,gr(m,e,o)}m={type:"stylesheet",instance:m,count:1,state:b},r.set(u,m)}}}function Av(t,e){Xn.X(t,e);var n=Ci;if(n&&t){var o=$a(n).hoistableScripts,r=Ni(t),u=o.get(r);u||(u=n.querySelector(jo(r)),u||(t=y({src:t,async:!0},e),(e=nn.get(r))&&nc(t,e),u=n.createElement("script"),fe(u),ve(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function Ov(t,e){Xn.M(t,e);var n=Ci;if(n&&t){var o=$a(n).hoistableScripts,r=Ni(t),u=o.get(r);u||(u=n.querySelector(jo(r)),u||(t=y({src:t,async:!0,type:"module"},e),(e=nn.get(r))&&nc(t,e),u=n.createElement("script"),fe(u),ve(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function tm(t,e,n,o){var r=(r=at.current)?pr(r):null;if(!r)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=zi(n.href),n=$a(r).hoistableStyles,o=n.get(e),o||(o={type:"style",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=zi(n.href);var u=$a(r).hoistableStyles,m=u.get(t);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,m),(u=r.querySelector(Uo(t)))&&!u._p&&(m.instance=u,m.state.loading=5),nn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nn.set(t,n),u||Dv(r,t,n,m.state))),e&&o===null)throw Error(s(528,""));return m}if(e&&o!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ni(n),n=$a(r).hoistableScripts,o=n.get(e),o||(o={type:"script",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function zi(t){return'href="'+Je(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function em(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function Dv(t,e,n,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),ve(e,"link",n),fe(e),t.head.appendChild(e))}function Ni(t){return'[src="'+Je(t)+'"]'}function jo(t){return"script[async]"+t}function nm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+Je(n.href)+'"]');if(o)return e.instance=o,fe(o),o;var r=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),fe(o),ve(o,"style",r),gr(o,n.precedence,t),e.instance=o;case"stylesheet":r=zi(n.href);var u=t.querySelector(Uo(r));if(u)return e.state.loading|=4,e.instance=u,fe(u),u;o=em(n),(r=nn.get(r))&&ec(o,r),u=(t.ownerDocument||t).createElement("link"),fe(u);var m=u;return m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),ve(u,"link",o),e.state.loading|=4,gr(u,n.precedence,t),e.instance=u;case"script":return u=Ni(n.src),(r=t.querySelector(jo(u)))?(e.instance=r,fe(r),r):(o=n,(r=nn.get(u))&&(o=y({},n),nc(o,r)),t=t.ownerDocument||t,r=t.createElement("script"),fe(r),ve(r,"link",o),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,gr(o,n.precedence,t));return e.instance}function gr(t,e,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,u=r,m=0;m<o.length;m++){var b=o[m];if(b.dataset.precedence===e)u=b;else if(u!==r)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function ec(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function nc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var yr=null;function am(t,e,n){if(yr===null){var o=new Map,r=yr=new Map;r.set(n,o)}else r=yr,o=r.get(n),o||(o=new Map,r.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var u=n[r];if(!(u[Ee]||u[Y]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(e)||"";m=t+m;var b=o.get(m);b?b.push(u):o.set(m,[u])}}return o}function im(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Ev(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function om(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Bo=null;function Mv(){}function Rv(t,e,n){if(Bo===null)throw Error(s(475));var o=Bo;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var r=zi(n.href),u=t.querySelector(Uo(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=br.bind(o),t.then(o,o)),e.state.loading|=4,e.instance=u,fe(u);return}u=t.ownerDocument||t,n=em(n),(r=nn.get(r))&&ec(n,r),u=u.createElement("link"),fe(u);var m=u;m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),ve(u,"link",n),e.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(o.count++,e=br.bind(o),t.addEventListener("load",e),t.addEventListener("error",e))}}function wv(){if(Bo===null)throw Error(s(475));var t=Bo;return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function br(){if(this.count--,this.count===0){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vr=null;function ac(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vr=new Map,e.forEach(Cv,t),vr=null,br.call(t))}function Cv(t,e){if(!(e.state.loading&4)){var n=vr.get(t);if(n)var o=n.get(null);else{n=new Map,vr.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var m=r[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),o=m)}o&&n.set(null,o)}r=e.instance,m=r.getAttribute("data-precedence"),u=n.get(m)||o,u===o&&n.set(null,r),n.set(m,r),this.count++,o=br.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),u?u.parentNode.insertBefore(r,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var Lo={$$typeof:V,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function zv(t,e,n,o,r,u,m,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function lm(t,e,n,o,r,u,m,b,S,w,k,B){return t=new zv(t,e,n,m,b,S,w,B),e=1,u===!0&&(e|=24),u=Be(3,null,null,e),t.current=u,u.stateNode=t,e=Bs(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:e},Ps(u),t}function rm(t){return t?(t=ui,t):ui}function sm(t,e,n,o,r,u){r=rm(r),o.context===null?o.context=r:o.pendingContext=r,o=In(e),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=ta(t,o,e),n!==null&&(Ye(n,t,e),po(n,t,e))}function um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ic(t,e){um(t,e),(t=t.alternate)&&um(t,e)}function cm(t){if(t.tag===13){var e=si(t,67108864);e!==null&&Ye(e,t,67108864),ic(t,67108864)}}var xr=!0;function Nv(t,e,n,o){var r=N.T;N.T=null;var u=Z.p;try{Z.p=2,oc(t,e,n,o)}finally{Z.p=u,N.T=r}}function _v(t,e,n,o){var r=N.T;N.T=null;var u=Z.p;try{Z.p=8,oc(t,e,n,o)}finally{Z.p=u,N.T=r}}function oc(t,e,n,o){if(xr){var r=lc(o);if(r===null)Zu(t,e,o,Sr,n),dm(t,o);else if(Vv(r,t,e,n,o))o.stopPropagation();else if(dm(t,o),e&4&&-1<kv.indexOf(t)){for(;r!==null;){var u=Qe(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=un(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var S=1<<31-De(m);b.entanglements[1]|=S,m&=~S}On(u),(zt&6)===0&&(ir=ge()+500,No(0))}}break;case 13:b=si(u,2),b!==null&&Ye(b,u,2),lr(),ic(u,2)}if(u=lc(o),u===null&&Zu(t,e,o,Sr,n),u===r)break;r=u}r!==null&&o.stopPropagation()}else Zu(t,e,o,null,n)}}function lc(t){return t=fs(t),rc(t)}var Sr=null;function rc(t){if(Sr=null,t=Ue(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Sr=t,null}function fm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Aa()){case sn:return 2;case Rn:return 8;case Ze:case Kn:return 32;case we:return 268435456;default:return 32}default:return 32}}var sc=!1,ha=null,ma=null,pa=null,Ho=new Map,qo=new Map,ga=[],kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dm(t,e){switch(t){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ma=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":Ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function Po(t,e,n,o,r,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[r]},e!==null&&(e=Qe(e),e!==null&&cm(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Vv(t,e,n,o,r){switch(e){case"focusin":return ha=Po(ha,t,e,n,o,r),!0;case"dragenter":return ma=Po(ma,t,e,n,o,r),!0;case"mouseover":return pa=Po(pa,t,e,n,o,r),!0;case"pointerover":var u=r.pointerId;return Ho.set(u,Po(Ho.get(u)||null,t,e,n,o,r)),!0;case"gotpointercapture":return u=r.pointerId,qo.set(u,Po(qo.get(u)||null,t,e,n,o,r)),!0}return!1}function hm(t){var e=Ue(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,as(t.priority,function(){if(n.tag===13){var o=Pe();o=Ji(o);var r=si(n,o);r!==null&&Ye(r,n,o),ic(n,o)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lc(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);cs=o,n.target.dispatchEvent(o),cs=null}else return e=Qe(n),e!==null&&cm(e),t.blockedOn=n,!1;e.shift()}return!0}function mm(t,e,n){Tr(t)&&n.delete(e)}function Uv(){sc=!1,ha!==null&&Tr(ha)&&(ha=null),ma!==null&&Tr(ma)&&(ma=null),pa!==null&&Tr(pa)&&(pa=null),Ho.forEach(mm),qo.forEach(mm)}function Ar(t,e){t.blockedOn===e&&(t.blockedOn=null,sc||(sc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Uv)))}var Or=null;function pm(t){Or!==t&&(Or=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Or===t&&(Or=null);for(var e=0;e<t.length;e+=3){var n=t[e],o=t[e+1],r=t[e+2];if(typeof o!="function"){if(rc(o||n)===null)continue;break}var u=Qe(n);u!==null&&(t.splice(e,3),e-=3,ru(u,{pending:!0,data:r,method:n.method,action:o},o,r))}}))}function Yo(t){function e(S){return Ar(S,t)}ha!==null&&Ar(ha,t),ma!==null&&Ar(ma,t),pa!==null&&Ar(pa,t),Ho.forEach(e),qo.forEach(e);for(var n=0;n<ga.length;n++){var o=ga[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ga.length&&(n=ga[0],n.blockedOn===null);)hm(n),n.blockedOn===null&&ga.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var r=n[o],u=n[o+1],m=r[F]||null;if(typeof u=="function")m||pm(n);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(r=u,m=u[F]||null)b=m.formAction;else if(rc(r)!==null)continue}else b=m.action;typeof b=="function"?n[o+1]=b:(n.splice(o,3),o-=3),pm(n)}}}function uc(t){this._internalRoot=t}Dr.prototype.render=uc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,o=Pe();sm(n,o,t,e,null,null)},Dr.prototype.unmount=uc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;sm(t.current,2,null,t,null,null),lr(),e[Dt]=null}};function Dr(t){this._internalRoot=t}Dr.prototype.unstable_scheduleHydration=function(t){if(t){var e=gl();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ga.length&&e!==0&&e<ga[n].priority;n++);ga.splice(n,0,t),n===0&&hm(t)}};var gm=i.version;if(gm!=="19.1.0")throw Error(s(527,gm,"19.1.0"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var jv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{Oa=Er.inject(jv),Oe=Er}catch{}}return Go.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,o="",r=Nh,u=_h,m=kh,b=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=lm(t,1,!1,null,null,n,o,r,u,m,b,null),t[Dt]=e.current,Gu(t),new uc(e)},Go.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var o=!1,r="",u=Nh,m=_h,b=kh,S=null,w=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(w=n.formState)),e=lm(t,1,!0,e,n??null,o,r,u,m,b,S,w),e.context=rm(null),n=e.current,o=Pe(),o=Ji(o),r=In(o),r.callback=null,ta(n,r,o),n=o,e.current.lanes=n,Jn(e,n),On(e),t[Dt]=e.current,Gu(t),new Dr(e)},Go.version="19.1.0",Go}var Em;function Kv(){if(Em)return dc.exports;Em=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),dc.exports=Qv(),dc.exports}var Jv=Kv();const Ic=G.createContext({});function tf(a){const i=G.useRef(null);return i.current===null&&(i.current=a()),i.current}const ef=typeof window<"u",$p=ef?G.useLayoutEffect:G.useEffect,Yr=G.createContext(null);function nf(a,i){a.indexOf(i)===-1&&a.push(i)}function af(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const Zn=(a,i,l)=>l>i?i:l<a?a:l;let of=()=>{};const Qn={},Wp=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function Ip(a){return typeof a=="object"&&a!==null}const tg=a=>/^0[^.\s]+$/u.test(a);function lf(a){let i;return()=>(i===void 0&&(i=a()),i)}const ln=a=>a,Fv=(a,i)=>l=>i(a(l)),rl=(...a)=>a.reduce(Fv),tl=(a,i,l)=>{const s=i-a;return s===0?1:(l-a)/s};class rf{constructor(){this.subscriptions=[]}add(i){return nf(this.subscriptions,i),()=>af(this.subscriptions,i)}notify(i,l,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,l,s);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(i,l,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Dn=a=>a*1e3,En=a=>a/1e3;function eg(a,i){return i?a*(1e3/i):0}const ng=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,$v=1e-7,Wv=12;function Iv(a,i,l,s,c){let d,f,g=0;do f=i+(l-i)/2,d=ng(f,s,c)-a,d>0?l=f:i=f;while(Math.abs(d)>$v&&++g<Wv);return f}function sl(a,i,l,s){if(a===i&&l===s)return ln;const c=d=>Iv(d,0,1,a,l);return d=>d===0||d===1?d:ng(c(d),i,s)}const ag=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,ig=a=>i=>1-a(1-i),og=sl(.33,1.53,.69,.99),sf=ig(og),lg=ag(sf),rg=a=>(a*=2)<1?.5*sf(a):.5*(2-Math.pow(2,-10*(a-1))),uf=a=>1-Math.sin(Math.acos(a)),sg=ig(uf),ug=ag(uf),t1=sl(.42,0,1,1),e1=sl(0,0,.58,1),cg=sl(.42,0,.58,1),n1=a=>Array.isArray(a)&&typeof a[0]!="number",fg=a=>Array.isArray(a)&&typeof a[0]=="number",a1={linear:ln,easeIn:t1,easeInOut:cg,easeOut:e1,circIn:uf,circInOut:ug,circOut:sg,backIn:sf,backInOut:lg,backOut:og,anticipate:rg},i1=a=>typeof a=="string",Mm=a=>{if(fg(a)){of(a.length===4);const[i,l,s,c]=a;return sl(i,l,s,c)}else if(i1(a))return a1[a];return a},Mr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function o1(a,i){let l=new Set,s=new Set,c=!1,d=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(h.schedule(y),a()),y(g)}const h={schedule:(y,x=!1,v=!1)=>{const O=v&&c?l:s;return x&&f.add(y),O.has(y)||O.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,c){d=!0;return}c=!0,[l,s]=[s,l],l.forEach(p),l.clear(),c=!1,d&&(d=!1,h.process(y))}};return h}const l1=40;function dg(a,i){let l=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>l=!0,f=Mr.reduce((V,$)=>(V[$]=o1(d),V),{}),{setup:g,read:p,resolveKeyframes:h,preUpdate:y,update:x,preRender:v,render:M,postRender:O}=f,D=()=>{const V=Qn.useManualTiming?c.timestamp:performance.now();l=!1,Qn.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(V-c.timestamp,l1),1)),c.timestamp=V,c.isProcessing=!0,g.process(c),p.process(c),h.process(c),y.process(c),x.process(c),v.process(c),M.process(c),O.process(c),c.isProcessing=!1,l&&i&&(s=!1,a(D))},_=()=>{l=!0,s=!0,c.isProcessing||a(D)};return{schedule:Mr.reduce((V,$)=>{const q=f[$];return V[$]=(W,J=!1,X=!1)=>(l||_(),q.schedule(W,J,X)),V},{}),cancel:V=>{for(let $=0;$<Mr.length;$++)f[Mr[$]].cancel(V)},state:c,steps:f}}const{schedule:Qt,cancel:xa,state:xe,steps:gc}=dg(typeof requestAnimationFrame<"u"?requestAnimationFrame:ln,!0);let _r;function r1(){_r=void 0}const Ve={now:()=>(_r===void 0&&Ve.set(xe.isProcessing||Qn.useManualTiming?xe.timestamp:performance.now()),_r),set:a=>{_r=a,queueMicrotask(r1)}},hg=a=>i=>typeof i=="string"&&i.startsWith(a),cf=hg("--"),s1=hg("var(--"),ff=a=>s1(a)?u1.test(a.split("/*")[0].trim()):!1,u1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Xi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},el={...Xi,transform:a=>Zn(0,1,a)},Rr={...Xi,default:1},Jo=a=>Math.round(a*1e5)/1e5,df=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function c1(a){return a==null}const f1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hf=(a,i)=>l=>!!(typeof l=="string"&&f1.test(l)&&l.startsWith(a)||i&&!c1(l)&&Object.prototype.hasOwnProperty.call(l,i)),mg=(a,i,l)=>s=>{if(typeof s!="string")return s;const[c,d,f,g]=s.match(df);return{[a]:parseFloat(c),[i]:parseFloat(d),[l]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},d1=a=>Zn(0,255,a),yc={...Xi,transform:a=>Math.round(d1(a))},Qa={test:hf("rgb","red"),parse:mg("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:s=1})=>"rgba("+yc.transform(a)+", "+yc.transform(i)+", "+yc.transform(l)+", "+Jo(el.transform(s))+")"};function h1(a){let i="",l="",s="",c="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),s=a.substring(5,7),c=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),s=a.substring(3,4),c=a.substring(4,5),i+=i,l+=l,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const zc={test:hf("#"),parse:h1,transform:Qa.transform},ul=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),va=ul("deg"),Mn=ul("%"),ft=ul("px"),m1=ul("vh"),p1=ul("vw"),Rm={...Mn,parse:a=>Mn.parse(a)/100,transform:a=>Mn.transform(a*100)},ji={test:hf("hsl","hue"),parse:mg("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:s=1})=>"hsla("+Math.round(a)+", "+Mn.transform(Jo(i))+", "+Mn.transform(Jo(l))+", "+Jo(el.transform(s))+")"},le={test:a=>Qa.test(a)||zc.test(a)||ji.test(a),parse:a=>Qa.test(a)?Qa.parse(a):ji.test(a)?ji.parse(a):zc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?Qa.transform(a):ji.transform(a),getAnimatableNone:a=>{const i=le.parse(a);return i.alpha=0,le.transform(i)}},g1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function y1(a){return isNaN(a)&&typeof a=="string"&&(a.match(df)?.length||0)+(a.match(g1)?.length||0)>0}const pg="number",gg="color",b1="var",v1="var(",wm="${}",x1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function nl(a){const i=a.toString(),l=[],s={color:[],number:[],var:[]},c=[];let d=0;const g=i.replace(x1,p=>(le.test(p)?(s.color.push(d),c.push(gg),l.push(le.parse(p))):p.startsWith(v1)?(s.var.push(d),c.push(b1),l.push(p)):(s.number.push(d),c.push(pg),l.push(parseFloat(p))),++d,wm)).split(wm);return{values:l,split:g,indexes:s,types:c}}function yg(a){return nl(a).values}function bg(a){const{split:i,types:l}=nl(a),s=i.length;return c=>{let d="";for(let f=0;f<s;f++)if(d+=i[f],c[f]!==void 0){const g=l[f];g===pg?d+=Jo(c[f]):g===gg?d+=le.transform(c[f]):d+=c[f]}return d}}const S1=a=>typeof a=="number"?0:le.test(a)?le.getAnimatableNone(a):a;function T1(a){const i=yg(a);return bg(a)(i.map(S1))}const Sa={test:y1,parse:yg,createTransformer:bg,getAnimatableNone:T1};function bc(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function A1({hue:a,saturation:i,lightness:l,alpha:s}){a/=360,i/=100,l/=100;let c=0,d=0,f=0;if(!i)c=d=f=l;else{const g=l<.5?l*(1+i):l+i-l*i,p=2*l-g;c=bc(p,g,a+1/3),d=bc(p,g,a),f=bc(p,g,a-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:s}}function jr(a,i){return l=>l>0?i:a}const Ft=(a,i,l)=>a+(i-a)*l,vc=(a,i,l)=>{const s=a*a,c=l*(i*i-s)+s;return c<0?0:Math.sqrt(c)},O1=[zc,Qa,ji],D1=a=>O1.find(i=>i.test(a));function Cm(a){const i=D1(a);if(!i)return!1;let l=i.parse(a);return i===ji&&(l=A1(l)),l}const zm=(a,i)=>{const l=Cm(a),s=Cm(i);if(!l||!s)return jr(a,i);const c={...l};return d=>(c.red=vc(l.red,s.red,d),c.green=vc(l.green,s.green,d),c.blue=vc(l.blue,s.blue,d),c.alpha=Ft(l.alpha,s.alpha,d),Qa.transform(c))},Nc=new Set(["none","hidden"]);function E1(a,i){return Nc.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function M1(a,i){return l=>Ft(a,i,l)}function mf(a){return typeof a=="number"?M1:typeof a=="string"?ff(a)?jr:le.test(a)?zm:C1:Array.isArray(a)?vg:typeof a=="object"?le.test(a)?zm:R1:jr}function vg(a,i){const l=[...a],s=l.length,c=a.map((d,f)=>mf(d)(d,i[f]));return d=>{for(let f=0;f<s;f++)l[f]=c[f](d);return l}}function R1(a,i){const l={...a,...i},s={};for(const c in l)a[c]!==void 0&&i[c]!==void 0&&(s[c]=mf(a[c])(a[c],i[c]));return c=>{for(const d in s)l[d]=s[d](c);return l}}function w1(a,i){const l=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const d=i.types[c],f=a.indexes[d][s[d]],g=a.values[f]??0;l[c]=g,s[d]++}return l}const C1=(a,i)=>{const l=Sa.createTransformer(i),s=nl(a),c=nl(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?Nc.has(a)&&!c.values.length||Nc.has(i)&&!s.values.length?E1(a,i):rl(vg(w1(s,c),c.values),l):jr(a,i)};function xg(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?Ft(a,i,l):mf(a)(a,i)}const z1=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>Qt.update(i,l),stop:()=>xa(i),now:()=>xe.isProcessing?xe.timestamp:Ve.now()}},Sg=(a,i,l=10)=>{let s="";const c=Math.max(Math.round(i/l),2);for(let d=0;d<c;d++)s+=Math.round(a(d/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Br=2e4;function pf(a){let i=0;const l=50;let s=a.next(i);for(;!s.done&&i<Br;)i+=l,s=a.next(i);return i>=Br?1/0:i}function N1(a,i=100,l){const s=l({...a,keyframes:[0,i]}),c=Math.min(pf(s),Br);return{type:"keyframes",ease:d=>s.next(c*d).value/i,duration:En(c)}}const _1=5;function Tg(a,i,l){const s=Math.max(i-_1,0);return eg(l-a(s),i-s)}const It={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xc=.001;function k1({duration:a=It.duration,bounce:i=It.bounce,velocity:l=It.velocity,mass:s=It.mass}){let c,d,f=1-i;f=Zn(It.minDamping,It.maxDamping,f),a=Zn(It.minDuration,It.maxDuration,En(a)),f<1?(c=h=>{const y=h*f,x=y*a,v=y-l,M=_c(h,f),O=Math.exp(-x);return xc-v/M*O},d=h=>{const x=h*f*a,v=x*l+l,M=Math.pow(f,2)*Math.pow(h,2)*a,O=Math.exp(-x),D=_c(Math.pow(h,2),f);return(-c(h)+xc>0?-1:1)*((v-M)*O)/D}):(c=h=>{const y=Math.exp(-h*a),x=(h-l)*a+1;return-xc+y*x},d=h=>{const y=Math.exp(-h*a),x=(l-h)*(a*a);return y*x});const g=5/a,p=U1(c,d,g);if(a=Dn(a),isNaN(p))return{stiffness:It.stiffness,damping:It.damping,duration:a};{const h=Math.pow(p,2)*s;return{stiffness:h,damping:f*2*Math.sqrt(s*h),duration:a}}}const V1=12;function U1(a,i,l){let s=l;for(let c=1;c<V1;c++)s=s-a(s)/i(s);return s}function _c(a,i){return a*Math.sqrt(1-i*i)}const j1=["duration","bounce"],B1=["stiffness","damping","mass"];function Nm(a,i){return i.some(l=>a[l]!==void 0)}function L1(a){let i={velocity:It.velocity,stiffness:It.stiffness,damping:It.damping,mass:It.mass,isResolvedFromDuration:!1,...a};if(!Nm(a,B1)&&Nm(a,j1))if(a.visualDuration){const l=a.visualDuration,s=2*Math.PI/(l*1.2),c=s*s,d=2*Zn(.05,1,1-(a.bounce||0))*Math.sqrt(c);i={...i,mass:It.mass,stiffness:c,damping:d}}else{const l=k1(a);i={...i,...l,mass:It.mass},i.isResolvedFromDuration=!0}return i}function Lr(a=It.visualDuration,i=It.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:s,restDelta:c}=l;const d=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],g={done:!1,value:d},{stiffness:p,damping:h,mass:y,duration:x,velocity:v,isResolvedFromDuration:M}=L1({...l,velocity:-En(l.velocity||0)}),O=v||0,D=h/(2*Math.sqrt(p*y)),_=f-d,j=En(Math.sqrt(p/y)),L=Math.abs(_)<5;s||(s=L?It.restSpeed.granular:It.restSpeed.default),c||(c=L?It.restDelta.granular:It.restDelta.default);let V;if(D<1){const q=_c(j,D);V=W=>{const J=Math.exp(-D*j*W);return f-J*((O+D*j*_)/q*Math.sin(q*W)+_*Math.cos(q*W))}}else if(D===1)V=q=>f-Math.exp(-j*q)*(_+(O+j*_)*q);else{const q=j*Math.sqrt(D*D-1);V=W=>{const J=Math.exp(-D*j*W),X=Math.min(q*W,300);return f-J*((O+D*j*_)*Math.sinh(X)+q*_*Math.cosh(X))/q}}const $={calculatedDuration:M&&x||null,next:q=>{const W=V(q);if(M)g.done=q>=x;else{let J=q===0?O:0;D<1&&(J=q===0?Dn(O):Tg(V,q,W));const X=Math.abs(J)<=s,lt=Math.abs(f-W)<=c;g.done=X&&lt}return g.value=g.done?f:W,g},toString:()=>{const q=Math.min(pf($),Br),W=Sg(J=>$.next(q*J).value,q,30);return q+"ms "+W},toTransition:()=>{}};return $}Lr.applyToOptions=a=>{const i=N1(a,100,Lr);return a.ease=i.ease,a.duration=Dn(i.duration),a.type="keyframes",a};function kc({keyframes:a,velocity:i=0,power:l=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:g,max:p,restDelta:h=.5,restSpeed:y}){const x=a[0],v={done:!1,value:x},M=X=>g!==void 0&&X<g||p!==void 0&&X>p,O=X=>g===void 0?p:p===void 0||Math.abs(g-X)<Math.abs(p-X)?g:p;let D=l*i;const _=x+D,j=f===void 0?_:f(_);j!==_&&(D=j-x);const L=X=>-D*Math.exp(-X/s),V=X=>j+L(X),$=X=>{const lt=L(X),dt=V(X);v.done=Math.abs(lt)<=h,v.value=v.done?j:dt};let q,W;const J=X=>{M(v.value)&&(q=X,W=Lr({keyframes:[v.value,O(v.value)],velocity:Tg(V,X,v.value),damping:c,stiffness:d,restDelta:h,restSpeed:y}))};return J(0),{calculatedDuration:null,next:X=>{let lt=!1;return!W&&q===void 0&&(lt=!0,$(X),J(X)),q!==void 0&&X>=q?W.next(X-q):(!lt&&$(X),v)}}}function H1(a,i,l){const s=[],c=l||Qn.mix||xg,d=a.length-1;for(let f=0;f<d;f++){let g=c(a[f],a[f+1]);if(i){const p=Array.isArray(i)?i[f]||ln:i;g=rl(p,g)}s.push(g)}return s}function q1(a,i,{clamp:l=!0,ease:s,mixer:c}={}){const d=a.length;if(of(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=a[0]===a[1];a[0]>a[d-1]&&(a=[...a].reverse(),i=[...i].reverse());const g=H1(i,s,c),p=g.length,h=y=>{if(f&&y<a[0])return i[0];let x=0;if(p>1)for(;x<a.length-2&&!(y<a[x+1]);x++);const v=tl(a[x],a[x+1],y);return g[x](v)};return l?y=>h(Zn(a[0],a[d-1],y)):h}function P1(a,i){const l=a[a.length-1];for(let s=1;s<=i;s++){const c=tl(0,i,s);a.push(Ft(l,1,c))}}function Y1(a){const i=[0];return P1(i,a.length-1),i}function X1(a,i){return a.map(l=>l*i)}function G1(a,i){return a.map(()=>i||cg).splice(0,a.length-1)}function Fo({duration:a=300,keyframes:i,times:l,ease:s="easeInOut"}){const c=n1(s)?s.map(Mm):Mm(s),d={done:!1,value:i[0]},f=X1(l&&l.length===i.length?l:Y1(i),a),g=q1(f,i,{ease:Array.isArray(c)?c:G1(i,c)});return{calculatedDuration:a,next:p=>(d.value=g(p),d.done=p>=a,d)}}const Z1=a=>a!==null;function gf(a,{repeat:i,repeatType:l="loop"},s,c=1){const d=a.filter(Z1),g=c<0||i&&l!=="loop"&&i%2===1?0:d.length-1;return!g||s===void 0?d[g]:s}const Q1={decay:kc,inertia:kc,tween:Fo,keyframes:Fo,spring:Lr};function Ag(a){typeof a.type=="string"&&(a.type=Q1[a.type])}class yf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const K1=a=>a/100;class bf extends yf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==Ve.now()&&this.tick(Ve.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Ag(i);const{type:l=Fo,repeat:s=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=i;let{keyframes:g}=i;const p=l||Fo;p!==Fo&&typeof g[0]!="number"&&(this.mixKeyframes=rl(K1,xg(g[0],g[1])),g=[0,100]);const h=p({...i,keyframes:g});d==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...g].reverse(),velocity:-f})),h.calculatedDuration===null&&(h.calculatedDuration=pf(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=h}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:s,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:y,repeat:x,repeatType:v,repeatDelay:M,type:O,onUpdate:D,finalKeyframe:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const j=this.currentTime-h*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?j<0:j>c;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let V=this.currentTime,$=s;if(x){const X=Math.min(this.currentTime,c)/g;let lt=Math.floor(X),dt=X%1;!dt&&X>=1&&(dt=1),dt===1&&lt--,lt=Math.min(lt,x+1),!!(lt%2)&&(v==="reverse"?(dt=1-dt,M&&(dt-=M/g)):v==="mirror"&&($=f)),V=Zn(0,1,dt)*g}const q=L?{done:!1,value:y[0]}:$.next(V);d&&(q.value=d(q.value));let{done:W}=q;!L&&p!==null&&(W=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const J=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return J&&O!==kc&&(q.value=gf(y,this.options,_,this.speed)),D&&D(q.value),J&&this.finish(),q}then(i,l){return this.finished.then(i,l)}get duration(){return En(this.calculatedDuration)}get time(){return En(this.currentTime)}set time(i){i=Dn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(Ve.now());const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=En(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=z1,startTime:l}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=l??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ve.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function J1(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const Ka=a=>a*180/Math.PI,Vc=a=>{const i=Ka(Math.atan2(a[1],a[0]));return Uc(i)},F1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Vc,rotateZ:Vc,skewX:a=>Ka(Math.atan(a[1])),skewY:a=>Ka(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Uc=a=>(a=a%360,a<0&&(a+=360),a),_m=Vc,km=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Vm=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),$1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:km,scaleY:Vm,scale:a=>(km(a)+Vm(a))/2,rotateX:a=>Uc(Ka(Math.atan2(a[6],a[5]))),rotateY:a=>Uc(Ka(Math.atan2(-a[2],a[0]))),rotateZ:_m,rotate:_m,skewX:a=>Ka(Math.atan(a[4])),skewY:a=>Ka(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function jc(a){return a.includes("scale")?1:0}function Bc(a,i){if(!a||a==="none")return jc(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(l)s=$1,c=l;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=F1,c=g}if(!c)return jc(i);const d=s[i],f=c[1].split(",").map(I1);return typeof d=="function"?d(f):f[d]}const W1=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return Bc(l,i)};function I1(a){return parseFloat(a.trim())}const Gi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zi=new Set(Gi),Um=a=>a===Xi||a===ft,t2=new Set(["x","y","z"]),e2=Gi.filter(a=>!t2.has(a));function n2(a){const i=[];return e2.forEach(l=>{const s=a.getValue(l);s!==void 0&&(i.push([l,s.get()]),s.set(l.startsWith("scale")?1:0))}),i}const Ja={width:({x:a},{paddingLeft:i="0",paddingRight:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),height:({y:a},{paddingTop:i="0",paddingBottom:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>Bc(i,"x"),y:(a,{transform:i})=>Bc(i,"y")};Ja.translateX=Ja.x;Ja.translateY=Ja.y;const Fa=new Set;let Lc=!1,Hc=!1,qc=!1;function Og(){if(Hc){const a=Array.from(Fa).filter(s=>s.needsMeasurement),i=new Set(a.map(s=>s.element)),l=new Map;i.forEach(s=>{const c=n2(s);c.length&&(l.set(s,c),s.render())}),a.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=l.get(s);c&&c.forEach(([d,f])=>{s.getValue(d)?.set(f)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Hc=!1,Lc=!1,Fa.forEach(a=>a.complete(qc)),Fa.clear()}function Dg(){Fa.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Hc=!0)})}function a2(){qc=!0,Dg(),Og(),qc=!1}class vf{constructor(i,l,s,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=s,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Fa.add(this),Lc||(Lc=!0,Qt.read(Dg),Qt.resolveKeyframes(Og))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:s,motionValue:c}=this;if(i[0]===null){const d=c?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&l){const g=s.readValue(l,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),c&&d===void 0&&c.set(i[0])}J1(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Fa.delete(this)}cancel(){this.state==="scheduled"&&(Fa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const i2=a=>a.startsWith("--");function o2(a,i,l){i2(i)?a.style.setProperty(i,l):a.style[i]=l}const l2=lf(()=>window.ScrollTimeline!==void 0),r2={};function s2(a,i){const l=lf(a);return()=>r2[i]??l()}const Eg=s2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Qo=([a,i,l,s])=>`cubic-bezier(${a}, ${i}, ${l}, ${s})`,jm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qo([0,.65,.55,1]),circOut:Qo([.55,0,1,.45]),backIn:Qo([.31,.01,.66,-.59]),backOut:Qo([.33,1.53,.69,.99])};function Mg(a,i){if(a)return typeof a=="function"?Eg()?Sg(a,i):"ease-out":fg(a)?Qo(a):Array.isArray(a)?a.map(l=>Mg(l,i)||jm.easeOut):jm[a]}function u2(a,i,l,{delay:s=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:g="easeOut",times:p}={},h=void 0){const y={[i]:l};p&&(y.offset=p);const x=Mg(g,c);Array.isArray(x)&&(y.easing=x);const v={delay:s,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),a.animate(y,v)}function Rg(a){return typeof a=="function"&&"applyToOptions"in a}function c2({type:a,...i}){return Rg(a)&&Eg()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class f2 extends yf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:l,name:s,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:g,onComplete:p}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,of(typeof i.type!="string");const h=c2(i);this.animation=u2(l,s,c,h,d),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=gf(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):o2(l,s,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return En(Number(i))}get time(){return En(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=Dn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&l2()?(this.animation.timeline=i,ln):l(this)}}const wg={anticipate:rg,backInOut:lg,circInOut:ug};function d2(a){return a in wg}function h2(a){typeof a.ease=="string"&&d2(a.ease)&&(a.ease=wg[a.ease])}const Bm=10;class m2 extends f2{constructor(i){h2(i),Ag(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:s,onComplete:c,element:d,...f}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const g=new bf({...f,autoplay:!1}),p=Dn(this.finishedTime??this.time);l.setWithVelocity(g.sample(p-Bm).value,g.sample(p).value,Bm),g.stop()}}const Lm=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Sa.test(a)||a==="0")&&!a.startsWith("url("));function p2(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function g2(a,i,l,s){const c=a[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const d=a[a.length-1],f=Lm(c,i),g=Lm(d,i);return!f||!g?!1:p2(a)||(l==="spring"||Rg(l))&&s}const y2=new Set(["opacity","clipPath","filter","transform"]),b2=lf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function v2(a){const{motionValue:i,name:l,repeatDelay:s,repeatType:c,damping:d,type:f}=a;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:h}=i.owner.getProps();return b2()&&l&&y2.has(l)&&(l!=="transform"||!h)&&!p&&!s&&c!=="mirror"&&d!==0&&f!=="inertia"}const x2=40;class S2 extends yf{constructor({autoplay:i=!0,delay:l=0,type:s="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:g,name:p,motionValue:h,element:y,...x}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ve.now();const v={autoplay:i,delay:l,type:s,repeat:c,repeatDelay:d,repeatType:f,name:p,motionValue:h,element:y,...x},M=y?.KeyframeResolver||vf;this.keyframeResolver=new M(g,(O,D,_)=>this.onKeyframesResolved(O,D,v,!_),p,h,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,s,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:g,delay:p,isHandoff:h,onUpdate:y}=s;this.resolvedAt=Ve.now(),g2(i,d,f,g)||((Qn.instantAnimations||!p)&&y?.(gf(i,s,l)),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const v={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>x2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...s,keyframes:i},M=!h&&v2(v)?new m2({...v,element:v.motionValue.owner.current}):new bf(v);M.finished.then(()=>this.notifyFinished()).catch(ln),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),a2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const T2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function A2(a){const i=T2.exec(a);if(!i)return[,];const[,l,s,c]=i;return[`--${l??s}`,c]}function Cg(a,i,l=1){const[s,c]=A2(a);if(!s)return;const d=window.getComputedStyle(i).getPropertyValue(s);if(d){const f=d.trim();return Wp(f)?parseFloat(f):f}return ff(c)?Cg(c,i,l+1):c}function xf(a,i){return a?.[i]??a?.default??a}const zg=new Set(["width","height","top","left","right","bottom",...Gi]),O2={test:a=>a==="auto",parse:a=>a},Ng=a=>i=>i.test(a),_g=[Xi,ft,Mn,va,p1,m1,O2],Hm=a=>_g.find(Ng(a));function D2(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||tg(a):!0}const E2=new Set(["brightness","contrast","saturate","opacity"]);function M2(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[s]=l.match(df)||[];if(!s)return a;const c=l.replace(s,"");let d=E2.has(i)?1:0;return s!==l&&(d*=100),i+"("+d+c+")"}const R2=/\b([a-z-]*)\(.*?\)/gu,Pc={...Sa,getAnimatableNone:a=>{const i=a.match(R2);return i?i.map(M2).join(" "):a}},qm={...Xi,transform:Math.round},w2={rotate:va,rotateX:va,rotateY:va,rotateZ:va,scale:Rr,scaleX:Rr,scaleY:Rr,scaleZ:Rr,skew:va,skewX:va,skewY:va,distance:ft,translateX:ft,translateY:ft,translateZ:ft,x:ft,y:ft,z:ft,perspective:ft,transformPerspective:ft,opacity:el,originX:Rm,originY:Rm,originZ:ft},Sf={borderWidth:ft,borderTopWidth:ft,borderRightWidth:ft,borderBottomWidth:ft,borderLeftWidth:ft,borderRadius:ft,radius:ft,borderTopLeftRadius:ft,borderTopRightRadius:ft,borderBottomRightRadius:ft,borderBottomLeftRadius:ft,width:ft,maxWidth:ft,height:ft,maxHeight:ft,top:ft,right:ft,bottom:ft,left:ft,padding:ft,paddingTop:ft,paddingRight:ft,paddingBottom:ft,paddingLeft:ft,margin:ft,marginTop:ft,marginRight:ft,marginBottom:ft,marginLeft:ft,backgroundPositionX:ft,backgroundPositionY:ft,...w2,zIndex:qm,fillOpacity:el,strokeOpacity:el,numOctaves:qm},C2={...Sf,color:le,backgroundColor:le,outlineColor:le,fill:le,stroke:le,borderColor:le,borderTopColor:le,borderRightColor:le,borderBottomColor:le,borderLeftColor:le,filter:Pc,WebkitFilter:Pc},kg=a=>C2[a];function Vg(a,i){let l=kg(a);return l!==Pc&&(l=Sa),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const z2=new Set(["auto","none","0"]);function N2(a,i,l){let s=0,c;for(;s<a.length&&!c;){const d=a[s];typeof d=="string"&&!z2.has(d)&&nl(d).values.length&&(c=a[s]),s++}if(c&&l)for(const d of i)a[d]=Vg(l,c)}class _2 extends vf{constructor(i,l,s,c,d){super(i,l,s,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:s}=this;if(!l||!l.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let h=i[p];if(typeof h=="string"&&(h=h.trim(),ff(h))){const y=Cg(h,l.current);y!==void 0&&(i[p]=y),p===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!zg.has(s)||i.length!==2)return;const[c,d]=i,f=Hm(c),g=Hm(d);if(f!==g)if(Um(f)&&Um(g))for(let p=0;p<i.length;p++){const h=i[p];typeof h=="string"&&(i[p]=parseFloat(h))}else Ja[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||D2(i[c]))&&s.push(c);s.length&&N2(i,s,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ja[s](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const c=l[l.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(l);c&&c.jump(this.measuredOrigin,!1);const d=s.length-1,f=s[d];s[d]=Ja[l](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,p])=>{i.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function k2(a,i,l){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const c=l?.[a]??s.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a)}const Ug=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function jg(a){return Ip(a)&&"offsetHeight"in a}const Pm=30,V2=a=>!isNaN(parseFloat(a));class U2{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const d=Ve.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty();c&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=Ve.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=V2(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new rf);const s=this.events[i].add(l);return i==="change"?()=>{s(),Qt.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i,l=!0){!l||!this.passiveEffect?this.updateAndNotify(i,l):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,l,s){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Ve.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Pm)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,Pm);return eg(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Pi(a,i){return new U2(a,i)}const{schedule:Tf}=dg(queueMicrotask,!1),gn={x:!1,y:!1};function Bg(){return gn.x||gn.y}function j2(a){return a==="x"||a==="y"?gn[a]?null:(gn[a]=!0,()=>{gn[a]=!1}):gn.x||gn.y?null:(gn.x=gn.y=!0,()=>{gn.x=gn.y=!1})}function Lg(a,i){const l=k2(a),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[l,c,()=>s.abort()]}function Ym(a){return!(a.pointerType==="touch"||Bg())}function B2(a,i,l={}){const[s,c,d]=Lg(a,l),f=g=>{if(!Ym(g))return;const{target:p}=g,h=i(p,g);if(typeof h!="function"||!p)return;const y=x=>{Ym(x)&&(h(x),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,c)};return s.forEach(g=>{g.addEventListener("pointerenter",f,c)}),d}const Hg=(a,i)=>i?a===i?!0:Hg(a,i.parentElement):!1,Af=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,L2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function H2(a){return L2.has(a.tagName)||a.tabIndex!==-1}const kr=new WeakSet;function Xm(a){return i=>{i.key==="Enter"&&a(i)}}function Sc(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const q2=(a,i)=>{const l=a.currentTarget;if(!l)return;const s=Xm(()=>{if(kr.has(l))return;Sc(l,"down");const c=Xm(()=>{Sc(l,"up")}),d=()=>Sc(l,"cancel");l.addEventListener("keyup",c,i),l.addEventListener("blur",d,i)});l.addEventListener("keydown",s,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",s),i)};function Gm(a){return Af(a)&&!Bg()}function P2(a,i,l={}){const[s,c,d]=Lg(a,l),f=g=>{const p=g.currentTarget;if(!Gm(g))return;kr.add(p);const h=i(p,g),y=(M,O)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",v),kr.has(p)&&kr.delete(p),Gm(M)&&typeof h=="function"&&h(M,{success:O})},x=M=>{y(M,p===window||p===document||l.useGlobalTarget||Hg(p,M.target))},v=M=>{y(M,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",v,c)};return s.forEach(g=>{(l.useGlobalTarget?window:g).addEventListener("pointerdown",f,c),jg(g)&&(g.addEventListener("focus",h=>q2(h,c)),!H2(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),d}function qg(a){return Ip(a)&&"ownerSVGElement"in a}function Y2(a){return qg(a)&&a.tagName==="svg"}const Ae=a=>!!(a&&a.getVelocity),X2=[..._g,le,Sa],G2=a=>X2.find(Ng(a)),Of=G.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});class Z2 extends G.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(l&&i.isPresent&&!this.props.isPresent){const s=l.offsetParent,c=jg(s)&&s.offsetWidth||0,d=this.props.sizeRef.current;d.height=l.offsetHeight||0,d.width=l.offsetWidth||0,d.top=l.offsetTop,d.left=l.offsetLeft,d.right=c-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Q2({children:a,isPresent:i,anchorX:l,root:s}){const c=G.useId(),d=G.useRef(null),f=G.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:g}=G.useContext(Of);return G.useInsertionEffect(()=>{const{width:p,height:h,top:y,left:x,right:v}=f.current;if(i||!d.current||!p||!h)return;const M=l==="left"?`left: ${x}`:`right: ${v}`;d.current.dataset.motionPopId=c;const O=document.createElement("style");g&&(O.nonce=g);const D=s??document.head;return D.appendChild(O),O.sheet&&O.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${M}px !important;
            top: ${y}px !important;
          }
        `),()=>{D.removeChild(O),D.contains(O)&&D.removeChild(O)}},[i]),P.jsx(Z2,{isPresent:i,childRef:d,sizeRef:f,children:G.cloneElement(a,{ref:d})})}const K2=({children:a,initial:i,isPresent:l,onExitComplete:s,custom:c,presenceAffectsLayout:d,mode:f,anchorX:g,root:p})=>{const h=tf(J2),y=G.useId();let x=!0,v=G.useMemo(()=>(x=!1,{id:y,initial:i,isPresent:l,custom:c,onExitComplete:M=>{h.set(M,!0);for(const O of h.values())if(!O)return;s&&s()},register:M=>(h.set(M,!1),()=>h.delete(M))}),[l,h,s]);return d&&x&&(v={...v}),G.useMemo(()=>{h.forEach((M,O)=>h.set(O,!1))},[l]),G.useEffect(()=>{!l&&!h.size&&s&&s()},[l]),f==="popLayout"&&(a=P.jsx(Q2,{isPresent:l,anchorX:g,root:p,children:a})),P.jsx(Yr.Provider,{value:v,children:a})};function J2(){return new Map}function Pg(a=!0){const i=G.useContext(Yr);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:s,register:c}=i,d=G.useId();G.useEffect(()=>{if(a)return c(d)},[a]);const f=G.useCallback(()=>a&&s&&s(d),[d,s,a]);return!l&&s?[!1,f]:[!0]}const wr=a=>a.key||"";function Zm(a){const i=[];return G.Children.forEach(a,l=>{G.isValidElement(l)&&i.push(l)}),i}const F2=({children:a,custom:i,initial:l=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:d="sync",propagate:f=!1,anchorX:g="left",root:p})=>{const[h,y]=Pg(f),x=G.useMemo(()=>Zm(a),[a]),v=f&&!h?[]:x.map(wr),M=G.useRef(!0),O=G.useRef(x),D=tf(()=>new Map),[_,j]=G.useState(x),[L,V]=G.useState(x);$p(()=>{M.current=!1,O.current=x;for(let W=0;W<L.length;W++){const J=wr(L[W]);v.includes(J)?D.delete(J):D.get(J)!==!0&&D.set(J,!1)}},[L,v.length,v.join("-")]);const $=[];if(x!==_){let W=[...x];for(let J=0;J<L.length;J++){const X=L[J],lt=wr(X);v.includes(lt)||(W.splice(J,0,X),$.push(X))}return d==="wait"&&$.length&&(W=$),V(Zm(W)),j(x),null}const{forceRender:q}=G.useContext(Ic);return P.jsx(P.Fragment,{children:L.map(W=>{const J=wr(W),X=f&&!h?!1:x===L||v.includes(J),lt=()=>{if(D.has(J))D.set(J,!0);else return;let dt=!0;D.forEach(Mt=>{Mt||(dt=!1)}),dt&&(q?.(),V(O.current),f&&y?.(),s&&s())};return P.jsx(K2,{isPresent:X,initial:!M.current||l?void 0:!1,custom:i,presenceAffectsLayout:c,mode:d,root:p,onExitComplete:X?void 0:lt,anchorX:g,children:W},J)})})},Yg=G.createContext({strict:!1}),Qm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yi={};for(const a in Qm)Yi[a]={isEnabled:i=>Qm[a].some(l=>!!i[l])};function $2(a){for(const i in a)Yi[i]={...Yi[i],...a[i]}}const W2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hr(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||W2.has(a)}let Xg=a=>!Hr(a);function I2(a){typeof a=="function"&&(Xg=i=>i.startsWith("on")?!Hr(i):a(i))}try{I2(require("@emotion/is-prop-valid").default)}catch{}function tx(a,i,l){const s={};for(const c in a)c==="values"&&typeof a.values=="object"||(Xg(c)||l===!0&&Hr(c)||!i&&!Hr(c)||a.draggable&&c.startsWith("onDrag"))&&(s[c]=a[c]);return s}const Xr=G.createContext({});function Gr(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function al(a){return typeof a=="string"||Array.isArray(a)}const Df=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ef=["initial",...Df];function Zr(a){return Gr(a.animate)||Ef.some(i=>al(a[i]))}function Gg(a){return!!(Zr(a)||a.variants)}function ex(a,i){if(Zr(a)){const{initial:l,animate:s}=a;return{initial:l===!1||al(l)?l:void 0,animate:al(s)?s:void 0}}return a.inherit!==!1?i:{}}function nx(a){const{initial:i,animate:l}=ex(a,G.useContext(Xr));return G.useMemo(()=>({initial:i,animate:l}),[Km(i),Km(l)])}function Km(a){return Array.isArray(a)?a.join(" "):a}const il={};function ax(a){for(const i in a)il[i]=a[i],cf(i)&&(il[i].isCSSVariable=!0)}function Zg(a,{layout:i,layoutId:l}){return Zi.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!il[a]||a==="opacity")}const ix={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ox=Gi.length;function lx(a,i,l){let s="",c=!0;for(let d=0;d<ox;d++){const f=Gi[d],g=a[f];if(g===void 0)continue;let p=!0;if(typeof g=="number"?p=g===(f.startsWith("scale")?1:0):p=parseFloat(g)===0,!p||l){const h=Ug(g,Sf[f]);if(!p){c=!1;const y=ix[f]||f;s+=`${y}(${h}) `}l&&(i[f]=h)}}return s=s.trim(),l?s=l(i,c?"":s):c&&(s="none"),s}function Mf(a,i,l){const{style:s,vars:c,transformOrigin:d}=a;let f=!1,g=!1;for(const p in i){const h=i[p];if(Zi.has(p)){f=!0;continue}else if(cf(p)){c[p]=h;continue}else{const y=Ug(h,Sf[p]);p.startsWith("origin")?(g=!0,d[p]=y):s[p]=y}}if(i.transform||(f||l?s.transform=lx(i,a.transform,l):s.transform&&(s.transform="none")),g){const{originX:p="50%",originY:h="50%",originZ:y=0}=d;s.transformOrigin=`${p} ${h} ${y}`}}const Rf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Qg(a,i,l){for(const s in i)!Ae(i[s])&&!Zg(s,l)&&(a[s]=i[s])}function rx({transformTemplate:a},i){return G.useMemo(()=>{const l=Rf();return Mf(l,i,a),Object.assign({},l.vars,l.style)},[i])}function sx(a,i){const l=a.style||{},s={};return Qg(s,l,a),Object.assign(s,rx(a,i)),s}function ux(a,i){const l={},s=sx(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=s,l}const cx={offset:"stroke-dashoffset",array:"stroke-dasharray"},fx={offset:"strokeDashoffset",array:"strokeDasharray"};function dx(a,i,l=1,s=0,c=!0){a.pathLength=1;const d=c?cx:fx;a[d.offset]=ft.transform(-s);const f=ft.transform(i),g=ft.transform(l);a[d.array]=`${f} ${g}`}function Kg(a,{attrX:i,attrY:l,attrScale:s,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...g},p,h,y){if(Mf(a,g,h),p){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:x,style:v}=a;x.transform&&(v.transform=x.transform,delete x.transform),(v.transform||x.transformOrigin)&&(v.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),v.transform&&(v.transformBox=y?.transformBox??"fill-box",delete x.transformBox),i!==void 0&&(x.x=i),l!==void 0&&(x.y=l),s!==void 0&&(x.scale=s),c!==void 0&&dx(x,c,d,f,!1)}const Jg=()=>({...Rf(),attrs:{}}),Fg=a=>typeof a=="string"&&a.toLowerCase()==="svg";function hx(a,i,l,s){const c=G.useMemo(()=>{const d=Jg();return Kg(d,i,Fg(s),a.transformTemplate,a.style),{...d.attrs,style:{...d.style}}},[i]);if(a.style){const d={};Qg(d,a.style,a),c.style={...d,...c.style}}return c}const mx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function wf(a){return typeof a!="string"||a.includes("-")?!1:!!(mx.indexOf(a)>-1||/[A-Z]/u.test(a))}function px(a,i,l,{latestValues:s},c,d=!1){const g=(wf(a)?hx:ux)(i,s,c,a),p=tx(i,typeof a=="string",d),h=a!==G.Fragment?{...p,...g,ref:l}:{},{children:y}=i,x=G.useMemo(()=>Ae(y)?y.get():y,[y]);return G.createElement(a,{...h,children:x})}function Jm(a){const i=[{},{}];return a?.values.forEach((l,s)=>{i[0][s]=l.get(),i[1][s]=l.getVelocity()}),i}function Cf(a,i,l,s){if(typeof i=="function"){const[c,d]=Jm(s);i=i(l!==void 0?l:a.custom,c,d)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[c,d]=Jm(s);i=i(l!==void 0?l:a.custom,c,d)}return i}function Vr(a){return Ae(a)?a.get():a}function gx({scrapeMotionValuesFromProps:a,createRenderState:i},l,s,c){return{latestValues:yx(l,s,c,a),renderState:i()}}function yx(a,i,l,s){const c={},d=s(a,{});for(const v in d)c[v]=Vr(d[v]);let{initial:f,animate:g}=a;const p=Zr(a),h=Gg(a);i&&h&&!p&&a.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=l?l.initial===!1:!1;y=y||f===!1;const x=y?g:f;if(x&&typeof x!="boolean"&&!Gr(x)){const v=Array.isArray(x)?x:[x];for(let M=0;M<v.length;M++){const O=Cf(a,v[M]);if(O){const{transitionEnd:D,transition:_,...j}=O;for(const L in j){let V=j[L];if(Array.isArray(V)){const $=y?V.length-1:0;V=V[$]}V!==null&&(c[L]=V)}for(const L in D)c[L]=D[L]}}}return c}const $g=a=>(i,l)=>{const s=G.useContext(Xr),c=G.useContext(Yr),d=()=>gx(a,i,s,c);return l?d():tf(d)};function zf(a,i,l){const{style:s}=a,c={};for(const d in s)(Ae(s[d])||i.style&&Ae(i.style[d])||Zg(d,a)||l?.getValue(d)?.liveStyle!==void 0)&&(c[d]=s[d]);return c}const bx=$g({scrapeMotionValuesFromProps:zf,createRenderState:Rf});function Wg(a,i,l){const s=zf(a,i,l);for(const c in a)if(Ae(a[c])||Ae(i[c])){const d=Gi.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[d]=a[c]}return s}const vx=$g({scrapeMotionValuesFromProps:Wg,createRenderState:Jg}),xx=Symbol.for("motionComponentSymbol");function Bi(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function Sx(a,i,l){return G.useCallback(s=>{s&&a.onMount&&a.onMount(s),i&&(s?i.mount(s):i.unmount()),l&&(typeof l=="function"?l(s):Bi(l)&&(l.current=s))},[i])}const Nf=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Tx="framerAppearId",Ig="data-"+Nf(Tx),ty=G.createContext({});function Ax(a,i,l,s,c){const{visualElement:d}=G.useContext(Xr),f=G.useContext(Yg),g=G.useContext(Yr),p=G.useContext(Of).reducedMotion,h=G.useRef(null);s=s||f.renderer,!h.current&&s&&(h.current=s(a,{visualState:i,parent:d,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:p}));const y=h.current,x=G.useContext(ty);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&Ox(h.current,l,c,x);const v=G.useRef(!1);G.useInsertionEffect(()=>{y&&v.current&&y.update(l,g)});const M=l[Ig],O=G.useRef(!!M&&!window.MotionHandoffIsComplete?.(M)&&window.MotionHasOptimisedAnimation?.(M));return $p(()=>{y&&(v.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),O.current&&y.animationState&&y.animationState.animateChanges())}),G.useEffect(()=>{y&&(!O.current&&y.animationState&&y.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(M)}),O.current=!1))}),y}function Ox(a,i,l,s){const{layoutId:c,layout:d,drag:f,dragConstraints:g,layoutScroll:p,layoutRoot:h,layoutCrossfade:y}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:ey(a.parent)),a.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||g&&Bi(g),visualElement:a,animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:h})}function ey(a){if(a)return a.options.allowProjection!==!1?a.projection:ey(a.parent)}function Tc(a,{forwardMotionProps:i=!1}={},l,s){l&&$2(l);const c=wf(a)?vx:bx;function d(g,p){let h;const y={...G.useContext(Of),...g,layoutId:Dx(g)},{isStatic:x}=y,v=nx(g),M=c(g,x);if(!x&&ef){Ex();const O=Mx(y);h=O.MeasureLayout,v.visualElement=Ax(a,M,y,s,O.ProjectionNode)}return P.jsxs(Xr.Provider,{value:v,children:[h&&v.visualElement?P.jsx(h,{visualElement:v.visualElement,...y}):null,px(a,g,Sx(M,v.visualElement,p),M,x,i)]})}d.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=G.forwardRef(d);return f[xx]=a,f}function Dx({layoutId:a}){const i=G.useContext(Ic).id;return i&&a!==void 0?i+"-"+a:a}function Ex(a,i){G.useContext(Yg).strict}function Mx(a){const{drag:i,layout:l}=Yi;if(!i&&!l)return{};const s={...i,...l};return{MeasureLayout:i?.isEnabled(a)||l?.isEnabled(a)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function Rx(a,i){if(typeof Proxy>"u")return Tc;const l=new Map,s=(d,f)=>Tc(d,f,a,i),c=(d,f)=>s(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?s:(l.has(f)||l.set(f,Tc(f,void 0,a,i)),l.get(f))})}function ny({top:a,left:i,right:l,bottom:s}){return{x:{min:i,max:l},y:{min:a,max:s}}}function wx({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function Cx(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),s=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:s.y,right:s.x}}function Ac(a){return a===void 0||a===1}function Yc({scale:a,scaleX:i,scaleY:l}){return!Ac(a)||!Ac(i)||!Ac(l)}function Za(a){return Yc(a)||ay(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function ay(a){return Fm(a.x)||Fm(a.y)}function Fm(a){return a&&a!=="0%"}function qr(a,i,l){const s=a-l,c=i*s;return l+c}function $m(a,i,l,s,c){return c!==void 0&&(a=qr(a,c,s)),qr(a,l,s)+i}function Xc(a,i=0,l=1,s,c){a.min=$m(a.min,i,l,s,c),a.max=$m(a.max,i,l,s,c)}function iy(a,{x:i,y:l}){Xc(a.x,i.translate,i.scale,i.originPoint),Xc(a.y,l.translate,l.scale,l.originPoint)}const Wm=.999999999999,Im=1.0000000000001;function zx(a,i,l,s=!1){const c=l.length;if(!c)return;i.x=i.y=1;let d,f;for(let g=0;g<c;g++){d=l[g],f=d.projectionDelta;const{visualElement:p}=d.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Hi(a,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,iy(a,f)),s&&Za(d.latestValues)&&Hi(a,d.latestValues))}i.x<Im&&i.x>Wm&&(i.x=1),i.y<Im&&i.y>Wm&&(i.y=1)}function Li(a,i){a.min=a.min+i,a.max=a.max+i}function tp(a,i,l,s,c=.5){const d=Ft(a.min,a.max,c);Xc(a,i,l,d,s)}function Hi(a,i){tp(a.x,i.x,i.scaleX,i.scale,i.originX),tp(a.y,i.y,i.scaleY,i.scale,i.originY)}function oy(a,i){return ny(Cx(a.getBoundingClientRect(),i))}function Nx(a,i,l){const s=oy(a,l),{scroll:c}=i;return c&&(Li(s.x,c.offset.x),Li(s.y,c.offset.y)),s}const ep=()=>({translate:0,scale:1,origin:0,originPoint:0}),qi=()=>({x:ep(),y:ep()}),np=()=>({min:0,max:0}),ae=()=>({x:np(),y:np()}),Gc={current:null},ly={current:!1};function _x(){if(ly.current=!0,!!ef)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>Gc.current=a.matches;a.addEventListener("change",i),i()}else Gc.current=!1}const kx=new WeakMap;function Vx(a,i,l){for(const s in i){const c=i[s],d=l[s];if(Ae(c))a.addValue(s,c);else if(Ae(d))a.addValue(s,Pi(c,{owner:a}));else if(d!==c)if(a.hasValue(s)){const f=a.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=a.getStaticValue(s);a.addValue(s,Pi(f!==void 0?f:c,{owner:a}))}}for(const s in l)i[s]===void 0&&a.removeValue(s);return i}const ap=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Ux{scrapeMotionValuesFromProps(i,l,s){return{}}constructor({parent:i,props:l,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=vf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Ve.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Qt.render(this.render,!1,!0))};const{latestValues:p,renderState:h}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=l.initial?{...p}:{},this.renderState=h,this.parent=i,this.props=l,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!d,this.isControllingVariants=Zr(l),this.isVariantNode=Gg(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(l,{},this);for(const v in x){const M=x[v];p[v]!==void 0&&Ae(M)&&M.set(p[v],!1)}}mount(i){this.current=i,kx.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,s)=>this.bindToMotionValue(s,l)),ly.current||_x(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),xa(this.notifyUpdate),xa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=Zi.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=l.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&Qt.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),d=l.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{c(),d(),f&&f(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Yi){const l=Yi[i];if(!l)continue;const{isEnabled:s,Feature:c}=l;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ae()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let s=0;s<ap.length;s++){const c=ap[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=i[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=Vx(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const s=this.values.get(i);l!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&l!==void 0&&(s=Pi(l===null?void 0:l,{owner:this}),this.addValue(i,s)),s}readValue(i,l){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(Wp(s)||tg(s))?s=parseFloat(s):!G2(s)&&Sa.test(l)&&(s=Vg(i,l)),this.setBaseTarget(i,Ae(s)?s.get():s)),Ae(s)?s.get():s}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let s;if(typeof l=="string"||typeof l=="object"){const d=Cf(this.props,l,this.presenceContext?.custom);d&&(s=d[i])}if(l&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!Ae(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new rf),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){Tf.render(this.render)}}class ry extends Ux{constructor(){super(...arguments),this.KeyframeResolver=_2}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:s}){delete l[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Ae(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function sy(a,{style:i,vars:l},s,c){const d=a.style;let f;for(f in i)d[f]=i[f];c?.applyProjectionStyles(d,s);for(f in l)d.setProperty(f,l[f])}function jx(a){return window.getComputedStyle(a)}class Bx extends ry{constructor(){super(...arguments),this.type="html",this.renderInstance=sy}readValueFromInstance(i,l){if(Zi.has(l))return this.projection?.isProjecting?jc(l):W1(i,l);{const s=jx(i),c=(cf(l)?s.getPropertyValue(l):s[l])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:l}){return oy(i,l)}build(i,l,s){Mf(i,l,s.transformTemplate)}scrapeMotionValuesFromProps(i,l,s){return zf(i,l,s)}}const uy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Lx(a,i,l,s){sy(a,i,void 0,s);for(const c in i.attrs)a.setAttribute(uy.has(c)?c:Nf(c),i.attrs[c])}class Hx extends ry{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ae}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(Zi.has(l)){const s=kg(l);return s&&s.default||0}return l=uy.has(l)?l:Nf(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,s){return Wg(i,l,s)}build(i,l,s){Kg(i,l,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,l,s,c){Lx(i,l,s,c)}mount(i){this.isSVGTag=Fg(i.tagName),super.mount(i)}}const qx=(a,i)=>wf(a)?new Hx(i):new Bx(i,{allowProjection:a!==G.Fragment});function ol(a,i,l){const s=a.getProps();return Cf(s,i,l!==void 0?l:s.custom,a)}const Zc=a=>Array.isArray(a);function Px(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,Pi(l))}function Yx(a){return Zc(a)?a[a.length-1]||0:a}function Xx(a,i){const l=ol(a,i);let{transitionEnd:s={},transition:c={},...d}=l||{};d={...d,...s};for(const f in d){const g=Yx(d[f]);Px(a,f,g)}}function Gx(a){return!!(Ae(a)&&a.add)}function Qc(a,i){const l=a.getValue("willChange");if(Gx(l))return l.add(i);if(!l&&Qn.WillChange){const s=new Qn.WillChange("auto");a.addValue("willChange",s),s.add(i)}}function cy(a){return a.props[Ig]}const Zx=a=>a!==null;function Qx(a,{repeat:i,repeatType:l="loop"},s){const c=a.filter(Zx),d=i&&l!=="loop"&&i%2===1?0:c.length-1;return c[d]}const Kx={type:"spring",stiffness:500,damping:25,restSpeed:10},Jx=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),Fx={type:"keyframes",duration:.8},$x={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Wx=(a,{keyframes:i})=>i.length>2?Fx:Zi.has(a)?a.startsWith("scale")?Jx(i[1]):Kx:$x;function Ix({when:a,delay:i,delayChildren:l,staggerChildren:s,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:g,from:p,elapsed:h,...y}){return!!Object.keys(y).length}const _f=(a,i,l,s={},c,d)=>f=>{const g=xf(s,a)||{},p=g.delay||s.delay||0;let{elapsed:h=0}=s;h=h-Dn(p);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-h,onUpdate:v=>{i.set(v),g.onUpdate&&g.onUpdate(v)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:a,motionValue:i,element:d?void 0:c};Ix(g)||Object.assign(y,Wx(a,y)),y.duration&&(y.duration=Dn(y.duration)),y.repeatDelay&&(y.repeatDelay=Dn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let x=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(x=!0)),(Qn.instantAnimations||Qn.skipAnimations)&&(x=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,x&&!d&&i.get()!==void 0){const v=Qx(y.keyframes,g);if(v!==void 0){Qt.update(()=>{y.onUpdate(v),y.onComplete()});return}}return g.isSync?new bf(y):new S2(y)};function t5({protectedKeys:a,needsAnimating:i},l){const s=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,s}function fy(a,i,{delay:l=0,transitionOverride:s,type:c}={}){let{transition:d=a.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(d=s);const p=[],h=c&&a.animationState&&a.animationState.getState()[c];for(const y in g){const x=a.getValue(y,a.latestValues[y]??null),v=g[y];if(v===void 0||h&&t5(h,y))continue;const M={delay:l,...xf(d||{},y)},O=x.get();if(O!==void 0&&!x.isAnimating&&!Array.isArray(v)&&v===O&&!M.velocity)continue;let D=!1;if(window.MotionHandoffAnimation){const j=cy(a);if(j){const L=window.MotionHandoffAnimation(j,y,Qt);L!==null&&(M.startTime=L,D=!0)}}Qc(a,y),x.start(_f(y,x,v,a.shouldReduceMotion&&zg.has(y)?{type:!1}:M,a,D));const _=x.animation;_&&p.push(_)}return f&&Promise.all(p).then(()=>{Qt.update(()=>{f&&Xx(a,f)})}),p}function Kc(a,i,l={}){const s=ol(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=s||{};l.transitionOverride&&(c=l.transitionOverride);const d=s?()=>Promise.all(fy(a,s,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(p=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:x}=c;return e5(a,i,p,h,y,x,l)}:()=>Promise.resolve(),{when:g}=c;if(g){const[p,h]=g==="beforeChildren"?[d,f]:[f,d];return p().then(()=>h())}else return Promise.all([d(),f(l.delay)])}function e5(a,i,l=0,s=0,c=0,d=1,f){const g=[],p=a.variantChildren.size,h=(p-1)*c,y=typeof s=="function",x=y?v=>s(v,p):d===1?(v=0)=>v*c:(v=0)=>h-v*c;return Array.from(a.variantChildren).sort(n5).forEach((v,M)=>{v.notify("AnimationStart",i),g.push(Kc(v,i,{...f,delay:l+(y?0:s)+x(M)}).then(()=>v.notify("AnimationComplete",i)))}),Promise.all(g)}function n5(a,i){return a.sortNodePosition(i)}function a5(a,i,l={}){a.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(d=>Kc(a,d,l));s=Promise.all(c)}else if(typeof i=="string")s=Kc(a,i,l);else{const c=typeof i=="function"?ol(a,i,l.custom):i;s=Promise.all(fy(a,c,l))}return s.then(()=>{a.notify("AnimationComplete",i)})}function dy(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let s=0;s<l;s++)if(i[s]!==a[s])return!1;return!0}const i5=Ef.length;function hy(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?hy(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<i5;l++){const s=Ef[l],c=a.props[s];(al(c)||c===!1)&&(i[s]=c)}return i}const o5=[...Df].reverse(),l5=Df.length;function r5(a){return i=>Promise.all(i.map(({animation:l,options:s})=>a5(a,l,s)))}function s5(a){let i=r5(a),l=ip(),s=!0;const c=p=>(h,y)=>{const x=ol(a,y,p==="exit"?a.presenceContext?.custom:void 0);if(x){const{transition:v,transitionEnd:M,...O}=x;h={...h,...O,...M}}return h};function d(p){i=p(a)}function f(p){const{props:h}=a,y=hy(a.parent)||{},x=[],v=new Set;let M={},O=1/0;for(let _=0;_<l5;_++){const j=o5[_],L=l[j],V=h[j]!==void 0?h[j]:y[j],$=al(V),q=j===p?L.isActive:null;q===!1&&(O=_);let W=V===y[j]&&V!==h[j]&&$;if(W&&s&&a.manuallyAnimateOnMount&&(W=!1),L.protectedKeys={...M},!L.isActive&&q===null||!V&&!L.prevProp||Gr(V)||typeof V=="boolean")continue;const J=u5(L.prevProp,V);let X=J||j===p&&L.isActive&&!W&&$||_>O&&$,lt=!1;const dt=Array.isArray(V)?V:[V];let Mt=dt.reduce(c(j),{});q===!1&&(Mt={});const{prevResolvedValues:jt={}}=L,Kt={...jt,...Mt},qt=Z=>{X=!0,v.has(Z)&&(lt=!0,v.delete(Z)),L.needsAnimating[Z]=!0;const et=a.getValue(Z);et&&(et.liveStyle=!1)};for(const Z in Kt){const et=Mt[Z],gt=jt[Z];if(M.hasOwnProperty(Z))continue;let T=!1;Zc(et)&&Zc(gt)?T=!dy(et,gt):T=et!==gt,T?et!=null?qt(Z):v.add(Z):et!==void 0&&v.has(Z)?qt(Z):L.protectedKeys[Z]=!0}L.prevProp=V,L.prevResolvedValues=Mt,L.isActive&&(M={...M,...Mt}),s&&a.blockInitialAnimation&&(X=!1),X&&(!(W&&J)||lt)&&x.push(...dt.map(Z=>({animation:Z,options:{type:j}})))}if(v.size){const _={};if(typeof h.initial!="boolean"){const j=ol(a,Array.isArray(h.initial)?h.initial[0]:h.initial);j&&j.transition&&(_.transition=j.transition)}v.forEach(j=>{const L=a.getBaseTarget(j),V=a.getValue(j);V&&(V.liveStyle=!0),_[j]=L??null}),x.push({animation:_})}let D=!!x.length;return s&&(h.initial===!1||h.initial===h.animate)&&!a.manuallyAnimateOnMount&&(D=!1),s=!1,D?i(x):Promise.resolve()}function g(p,h){if(l[p].isActive===h)return Promise.resolve();a.variantChildren?.forEach(x=>x.animationState?.setActive(p,h)),l[p].isActive=h;const y=f(p);for(const x in l)l[x].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:d,getState:()=>l,reset:()=>{l=ip(),s=!0}}}function u5(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!dy(i,a):!1}function Ga(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ip(){return{animate:Ga(!0),whileInView:Ga(),whileHover:Ga(),whileTap:Ga(),whileDrag:Ga(),whileFocus:Ga(),exit:Ga()}}class Ta{constructor(i){this.isMounted=!1,this.node=i}update(){}}class c5 extends Ta{constructor(i){super(i),i.animationState||(i.animationState=s5(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Gr(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let f5=0;class d5 extends Ta{constructor(){super(...arguments),this.id=f5++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);l&&!i&&c.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const h5={animation:{Feature:c5},exit:{Feature:d5}};function ll(a,i,l,s={passive:!0}){return a.addEventListener(i,l,s),()=>a.removeEventListener(i,l)}function cl(a){return{point:{x:a.pageX,y:a.pageY}}}const m5=a=>i=>Af(i)&&a(i,cl(i));function $o(a,i,l,s){return ll(a,i,m5(l),s)}const my=1e-4,p5=1-my,g5=1+my,py=.01,y5=0-py,b5=0+py;function Re(a){return a.max-a.min}function v5(a,i,l){return Math.abs(a-i)<=l}function op(a,i,l,s=.5){a.origin=s,a.originPoint=Ft(i.min,i.max,a.origin),a.scale=Re(l)/Re(i),a.translate=Ft(l.min,l.max,a.origin)-a.originPoint,(a.scale>=p5&&a.scale<=g5||isNaN(a.scale))&&(a.scale=1),(a.translate>=y5&&a.translate<=b5||isNaN(a.translate))&&(a.translate=0)}function Wo(a,i,l,s){op(a.x,i.x,l.x,s?s.originX:void 0),op(a.y,i.y,l.y,s?s.originY:void 0)}function lp(a,i,l){a.min=l.min+i.min,a.max=a.min+Re(i)}function x5(a,i,l){lp(a.x,i.x,l.x),lp(a.y,i.y,l.y)}function rp(a,i,l){a.min=i.min-l.min,a.max=a.min+Re(i)}function Io(a,i,l){rp(a.x,i.x,l.x),rp(a.y,i.y,l.y)}function on(a){return[a("x"),a("y")]}const gy=({current:a})=>a?a.ownerDocument.defaultView:null,sp=(a,i)=>Math.abs(a-i);function S5(a,i){const l=sp(a.x,i.x),s=sp(a.y,i.y);return Math.sqrt(l**2+s**2)}class yy{constructor(i,l,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Dc(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,O=S5(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!O)return;const{point:D}=v,{timestamp:_}=xe;this.history.push({...D,timestamp:_});const{onStart:j,onMove:L}=this.handlers;M||(j&&j(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,v)},this.handlePointerMove=(v,M)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Oc(M,this.transformPagePoint),Qt.update(this.updatePoint,!0)},this.handlePointerUp=(v,M)=>{this.end();const{onEnd:O,onSessionEnd:D,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Dc(v.type==="pointercancel"?this.lastMoveEventInfo:Oc(M,this.transformPagePoint),this.history);this.startEvent&&O&&O(v,j),D&&D(v,j)},!Af(i))return;this.dragSnapToOrigin=d,this.handlers=l,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=c||window;const g=cl(i),p=Oc(g,this.transformPagePoint),{point:h}=p,{timestamp:y}=xe;this.history=[{...h,timestamp:y}];const{onSessionStart:x}=l;x&&x(i,Dc(p,this.history)),this.removeListeners=rl($o(this.contextWindow,"pointermove",this.handlePointerMove),$o(this.contextWindow,"pointerup",this.handlePointerUp),$o(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),xa(this.updatePoint)}}function Oc(a,i){return i?{point:i(a.point)}:a}function up(a,i){return{x:a.x-i.x,y:a.y-i.y}}function Dc({point:a},i){return{point:a,delta:up(a,by(i)),offset:up(a,T5(i)),velocity:A5(i,.1)}}function T5(a){return a[0]}function by(a){return a[a.length-1]}function A5(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,s=null;const c=by(a);for(;l>=0&&(s=a[l],!(c.timestamp-s.timestamp>Dn(i)));)l--;if(!s)return{x:0,y:0};const d=En(c.timestamp-s.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-s.x)/d,y:(c.y-s.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function O5(a,{min:i,max:l},s){return i!==void 0&&a<i?a=s?Ft(i,a,s.min):Math.max(a,i):l!==void 0&&a>l&&(a=s?Ft(l,a,s.max):Math.min(a,l)),a}function cp(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function D5(a,{top:i,left:l,bottom:s,right:c}){return{x:cp(a.x,l,c),y:cp(a.y,i,s)}}function fp(a,i){let l=i.min-a.min,s=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,s]=[s,l]),{min:l,max:s}}function E5(a,i){return{x:fp(a.x,i.x),y:fp(a.y,i.y)}}function M5(a,i){let l=.5;const s=Re(a),c=Re(i);return c>s?l=tl(i.min,i.max-s,a.min):s>c&&(l=tl(a.min,a.max-c,i.min)),Zn(0,1,l)}function R5(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const Jc=.35;function w5(a=Jc){return a===!1?a=0:a===!0&&(a=Jc),{x:dp(a,"left","right"),y:dp(a,"top","bottom")}}function dp(a,i,l){return{min:hp(a,i),max:hp(a,l)}}function hp(a,i){return typeof a=="number"?a:a[i]||0}const C5=new WeakMap;class z5{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ae(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=x=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(cl(x).point)},f=(x,v)=>{const{drag:M,dragPropagation:O,onDragStart:D}=this.getProps();if(M&&!O&&(this.openDragLock&&this.openDragLock(),this.openDragLock=j2(M),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),on(j=>{let L=this.getAxisMotionValue(j).get()||0;if(Mn.test(L)){const{projection:V}=this.visualElement;if(V&&V.layout){const $=V.layout.layoutBox[j];$&&(L=Re($)*(parseFloat(L)/100))}}this.originPoint[j]=L}),D&&Qt.postRender(()=>D(x,v)),Qc(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},g=(x,v)=>{this.latestPointerEvent=x,this.latestPanInfo=v;const{dragPropagation:M,dragDirectionLock:O,onDirectionLock:D,onDrag:_}=this.getProps();if(!M&&!this.openDragLock)return;const{offset:j}=v;if(O&&this.currentDirection===null){this.currentDirection=N5(j),this.currentDirection!==null&&D&&D(this.currentDirection);return}this.updateAxis("x",v.point,j),this.updateAxis("y",v.point,j),this.visualElement.render(),_&&_(x,v)},p=(x,v)=>{this.latestPointerEvent=x,this.latestPanInfo=v,this.stop(x,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>on(x=>this.getAnimationState(x)==="paused"&&this.getAxisMotionValue(x).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new yy(i,{onSessionStart:d,onStart:f,onMove:g,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:gy(this.visualElement)})}stop(i,l){const s=i||this.latestPointerEvent,c=l||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!s)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:g}=this.getProps();g&&Qt.postRender(()=>g(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,s){const{drag:c}=this.getProps();if(!s||!Cr(i,c,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=O5(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&Bi(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=D5(s.layoutBox,i):this.constraints=!1,this.elastic=w5(l),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&on(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=R5(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!Bi(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=Nx(s,c.root,this.visualElement.getTransformPagePoint());let f=E5(c.layout.layoutBox,d);if(l){const g=l(wx(f));this.hasMutatedConstraints=!!g,g&&(f=ny(g))}return f}startAnimation(i){const{drag:l,dragMomentum:s,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),p=this.constraints||{},h=on(y=>{if(!Cr(y,l,this.currentDirection))return;let x=p&&p[y]||{};f&&(x={min:0,max:0});const v=c?200:1e6,M=c?40:1e7,O={type:"inertia",velocity:s?i[y]:0,bounceStiffness:v,bounceDamping:M,timeConstant:750,restDelta:1,restSpeed:10,...d,...x};return this.startAxisValueAnimation(y,O)});return Promise.all(h).then(g)}startAxisValueAnimation(i,l){const s=this.getAxisMotionValue(i);return Qc(this.visualElement,i),s.start(_f(i,s,0,l,this.visualElement,!1))}stopAnimation(){on(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){on(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[l];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){on(l=>{const{drag:s}=this.getProps();if(!Cr(l,s,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(l);if(c&&c.layout){const{min:f,max:g}=c.layout.layoutBox[l];d.set(i[l]-Ft(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:s}=this.visualElement;if(!Bi(l)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};on(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const p=g.get();c[f]=M5({min:p,max:p},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),on(f=>{if(!Cr(f,i,null))return;const g=this.getAxisMotionValue(f),{min:p,max:h}=this.constraints[f];g.set(Ft(p,h,c[f]))})}addListeners(){if(!this.visualElement.current)return;C5.set(this.visualElement,this);const i=this.visualElement.current,l=$o(i,"pointerdown",p=>{const{drag:h,dragListener:y=!0}=this.getProps();h&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();Bi(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Qt.read(s);const f=ll(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h})=>{this.isDragging&&h&&(on(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=p[y].translate,x.set(x.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),l(),d(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=Jc,dragMomentum:g=!0}=i;return{...i,drag:l,dragDirectionLock:s,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:g}}}function Cr(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function N5(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class _5 extends Ta{constructor(i){super(i),this.removeGroupControls=ln,this.removeListeners=ln,this.controls=new z5(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ln}unmount(){this.removeGroupControls(),this.removeListeners()}}const mp=a=>(i,l)=>{a&&Qt.postRender(()=>a(i,l))};class k5 extends Ta{constructor(){super(...arguments),this.removePointerDownListener=ln}onPointerDown(i){this.session=new yy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:gy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:mp(i),onStart:mp(l),onMove:s,onEnd:(d,f)=>{delete this.session,c&&Qt.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=$o(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ur={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function pp(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const Zo={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(ft.test(a))a=parseFloat(a);else return a;const l=pp(a,i.target.x),s=pp(a,i.target.y);return`${l}% ${s}%`}},V5={correct:(a,{treeScale:i,projectionDelta:l})=>{const s=a,c=Sa.parse(a);if(c.length>5)return s;const d=Sa.createTransformer(a),f=typeof c[0]!="number"?1:0,g=l.x.scale*i.x,p=l.y.scale*i.y;c[0+f]/=g,c[1+f]/=p;const h=Ft(g,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=h),typeof c[3+f]=="number"&&(c[3+f]/=h),d(c)}};let gp=!1;class U5 extends G.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s,layoutId:c}=this.props,{projection:d}=i;ax(j5),d&&(l.group&&l.group.add(d),s&&s.register&&c&&s.register(d),gp&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),Ur.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:s,drag:c,isPresent:d}=this.props,{projection:f}=s;return f&&(f.isPresent=d,gp=!0,c||i.layoutDependency!==l||l===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||Qt.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Tf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function vy(a){const[i,l]=Pg(),s=G.useContext(Ic);return P.jsx(U5,{...a,layoutGroup:s,switchLayoutGroup:G.useContext(ty),isPresent:i,safeToRemove:l})}const j5={borderRadius:{...Zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zo,borderTopRightRadius:Zo,borderBottomLeftRadius:Zo,borderBottomRightRadius:Zo,boxShadow:V5};function B5(a,i,l){const s=Ae(a)?a:Pi(a);return s.start(_f("",s,i,l)),s.animation}const L5=(a,i)=>a.depth-i.depth;class H5{constructor(){this.children=[],this.isDirty=!1}add(i){nf(this.children,i),this.isDirty=!0}remove(i){af(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(L5),this.isDirty=!1,this.children.forEach(i)}}function q5(a,i){const l=Ve.now(),s=({timestamp:c})=>{const d=c-l;d>=i&&(xa(s),a(d-i))};return Qt.setup(s,!0),()=>xa(s)}const xy=["TopLeft","TopRight","BottomLeft","BottomRight"],P5=xy.length,yp=a=>typeof a=="string"?parseFloat(a):a,bp=a=>typeof a=="number"||ft.test(a);function Y5(a,i,l,s,c,d){c?(a.opacity=Ft(0,l.opacity??1,X5(s)),a.opacityExit=Ft(i.opacity??1,0,G5(s))):d&&(a.opacity=Ft(i.opacity??1,l.opacity??1,s));for(let f=0;f<P5;f++){const g=`border${xy[f]}Radius`;let p=vp(i,g),h=vp(l,g);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||bp(p)===bp(h)?(a[g]=Math.max(Ft(yp(p),yp(h),s),0),(Mn.test(h)||Mn.test(p))&&(a[g]+="%")):a[g]=h}(i.rotate||l.rotate)&&(a.rotate=Ft(i.rotate||0,l.rotate||0,s))}function vp(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const X5=Sy(0,.5,sg),G5=Sy(.5,.95,ln);function Sy(a,i,l){return s=>s<a?0:s>i?1:l(tl(a,i,s))}function xp(a,i){a.min=i.min,a.max=i.max}function an(a,i){xp(a.x,i.x),xp(a.y,i.y)}function Sp(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}function Tp(a,i,l,s,c){return a-=i,a=qr(a,1/l,s),c!==void 0&&(a=qr(a,1/c,s)),a}function Z5(a,i=0,l=1,s=.5,c,d=a,f=a){if(Mn.test(i)&&(i=parseFloat(i),i=Ft(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=Ft(d.min,d.max,s);a===d&&(g-=i),a.min=Tp(a.min,i,l,g,c),a.max=Tp(a.max,i,l,g,c)}function Ap(a,i,[l,s,c],d,f){Z5(a,i[l],i[s],i[c],i.scale,d,f)}const Q5=["x","scaleX","originX"],K5=["y","scaleY","originY"];function Op(a,i,l,s){Ap(a.x,i,Q5,l?l.x:void 0,s?s.x:void 0),Ap(a.y,i,K5,l?l.y:void 0,s?s.y:void 0)}function Dp(a){return a.translate===0&&a.scale===1}function Ty(a){return Dp(a.x)&&Dp(a.y)}function Ep(a,i){return a.min===i.min&&a.max===i.max}function J5(a,i){return Ep(a.x,i.x)&&Ep(a.y,i.y)}function Mp(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function Ay(a,i){return Mp(a.x,i.x)&&Mp(a.y,i.y)}function Rp(a){return Re(a.x)/Re(a.y)}function wp(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}class F5{constructor(){this.members=[]}add(i){nf(this.members,i),i.scheduleRender()}remove(i){if(af(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(c=>i===c);if(l===0)return!1;let s;for(let c=l;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){s=d;break}}return s?(this.promote(s),!0):!1}promote(i,l){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,l&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:s}=i;l.onExitComplete&&l.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $5(a,i,l){let s="";const c=a.x.translate/i.x,d=a.y.translate/i.y,f=l?.z||0;if((c||d||f)&&(s=`translate3d(${c}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:h,rotate:y,rotateX:x,rotateY:v,skewX:M,skewY:O}=l;h&&(s=`perspective(${h}px) ${s}`),y&&(s+=`rotate(${y}deg) `),x&&(s+=`rotateX(${x}deg) `),v&&(s+=`rotateY(${v}deg) `),M&&(s+=`skewX(${M}deg) `),O&&(s+=`skewY(${O}deg) `)}const g=a.x.scale*i.x,p=a.y.scale*i.y;return(g!==1||p!==1)&&(s+=`scale(${g}, ${p})`),s||"none"}const Ec=["","X","Y","Z"],W5=1e3;let I5=0;function Mc(a,i,l,s){const{latestValues:c}=i;c[a]&&(l[a]=c[a],i.setStaticValue(a,0),s&&(s[a]=0))}function Oy(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=cy(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:c,layoutId:d}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",Qt,!(c||d))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&Oy(s)}function Dy({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},g=i?.()){this.id=I5++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(nS),this.nodes.forEach(lS),this.nodes.forEach(rS),this.nodes.forEach(aS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new H5)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new rf),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const p=this.eventHandlers.get(f);p&&p.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=qg(f)&&!Y2(f),this.instance=f;const{layoutId:g,layout:p,visualElement:h}=this.options;if(h&&!h.current&&h.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||g)&&(this.isLayoutDirty=!0),a){let y,x=0;const v=()=>this.root.updateBlockedByResize=!1;Qt.read(()=>{x=window.innerWidth}),a(f,()=>{const M=window.innerWidth;M!==x&&(x=M,this.root.updateBlockedByResize=!0,y&&y(),y=q5(v,250),Ur.hasAnimatedSinceResize&&(Ur.hasAnimatedSinceResize=!1,this.nodes.forEach(Np)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&h&&(g||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:v,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const O=this.options.transition||h.getDefaultTransition()||dS,{onLayoutAnimationStart:D,onLayoutAnimationComplete:_}=h.getProps(),j=!this.targetLayout||!Ay(this.targetLayout,M),L=!x&&v;if(this.options.layoutRoot||this.resumeFrom||L||x&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const V={...xf(O,"layout"),onPlay:D,onComplete:_};(h.shouldReduceMotion||this.options.layoutRoot)&&(V.delay=0,V.type=!1),this.startAnimation(V),this.setAnimationOrigin(y,L)}else x||Np(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),xa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sS),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Oy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const x=this.path[y];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:g,layout:p}=this.options;if(g===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(zp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(oS),this.nodes.forEach(tS),this.nodes.forEach(eS)):this.nodes.forEach(zp),this.clearAllSnapshots();const g=Ve.now();xe.delta=Zn(0,1e3/60,g-xe.timestamp),xe.timestamp=g,xe.isProcessing=!0,gc.update.process(xe),gc.preRender.process(xe),gc.render.process(xe),xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(iS),this.sharedNodes.forEach(uS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Qt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Qt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Re(this.snapshot.measuredBox.x)&&!Re(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!Ty(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;f&&this.instance&&(g||Za(this.latestValues)||y)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let p=this.removeElementScroll(g);return f&&(p=this.removeTransform(p)),hS(p),{animationId:this.root.animationId,measuredBox:g,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return ae();const g=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(mS))){const{scroll:h}=this.root;h&&(Li(g.x,h.offset.x),Li(g.y,h.offset.y))}return g}removeElementScroll(f){const g=ae();if(an(g,f),this.scroll?.wasRoot)return g;for(let p=0;p<this.path.length;p++){const h=this.path[p],{scroll:y,options:x}=h;h!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&an(g,f),Li(g.x,y.offset.x),Li(g.y,y.offset.y))}return g}applyTransform(f,g=!1){const p=ae();an(p,f);for(let h=0;h<this.path.length;h++){const y=this.path[h];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Hi(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Za(y.latestValues)&&Hi(p,y.latestValues)}return Za(this.latestValues)&&Hi(p,this.latestValues),p}removeTransform(f){const g=ae();an(g,f);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!Za(h.latestValues))continue;Yc(h.latestValues)&&h.updateSnapshot();const y=ae(),x=h.measurePageBox();an(y,x),Op(g,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,y)}return Za(this.latestValues)&&Op(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==g;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=xe.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),Io(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),an(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ae(),this.targetWithTransforms=ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),x5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):an(this.target,this.layout.layoutBox),iy(this.target,this.targetDelta)):an(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),Io(this.relativeTargetOrigin,this.target,v.target),an(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Yc(this.parent.latestValues)||ay(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),g=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===xe.timestamp&&(p=!1),p)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;an(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,v=this.treeScale.y;zx(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=ae());const{target:M}=f;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Sp(this.prevProjectionDelta.x,this.projectionDelta.x),Sp(this.prevProjectionDelta.y,this.projectionDelta.y)),Wo(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==v||!wp(this.projectionDelta.x,this.prevProjectionDelta.x)||!wp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=qi(),this.projectionDelta=qi(),this.projectionDeltaWithTransform=qi()}setAnimationOrigin(f,g=!1){const p=this.snapshot,h=p?p.latestValues:{},y={...this.latestValues},x=qi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const v=ae(),M=p?p.source:void 0,O=this.layout?this.layout.source:void 0,D=M!==O,_=this.getStack(),j=!_||_.members.length<=1,L=!!(D&&!j&&this.options.crossfade===!0&&!this.path.some(fS));this.animationProgress=0;let V;this.mixTargetDelta=$=>{const q=$/1e3;_p(x.x,f.x,q),_p(x.y,f.y,q),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Io(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),cS(this.relativeTarget,this.relativeTargetOrigin,v,q),V&&J5(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=ae()),an(V,this.relativeTarget)),D&&(this.animationValues=y,Y5(y,h,this.latestValues,q,L,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(xa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Qt.update(()=>{Ur.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Pi(0)),this.currentAnimation=B5(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(W5),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:p,layout:h,latestValues:y}=f;if(!(!g||!p||!h)){if(this!==f&&this.layout&&h&&Ey(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||ae();const x=Re(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+x;const v=Re(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+v}an(g,p),Hi(g,y),Wo(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new F5),this.sharedNodes.get(f).add(g);const h=g.options.initialPromotionConfig;g.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(g=!0),!g)return;const h={};p.z&&Mc("z",f,h,this.animationValues);for(let y=0;y<Ec.length;y++)Mc(`rotate${Ec[y]}`,f,h,this.animationValues),Mc(`skew${Ec[y]}`,f,h,this.animationValues);f.render();for(const y in h)f.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);f.scheduleRender()}applyProjectionStyles(f,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Vr(g?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Vr(g?.pointerEvents)||""),this.hasProjected&&!Za(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let x=$5(this.projectionDeltaWithTransform,this.treeScale,y);p&&(x=p(y,x)),f.transform=x;const{x:v,y:M}=this.projectionDelta;f.transformOrigin=`${v.origin*100}% ${M.origin*100}% 0`,h.animationValues?f.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const O in il){if(y[O]===void 0)continue;const{correct:D,applyTo:_,isCSSVariable:j}=il[O],L=x==="none"?y[O]:D(y[O],h);if(_){const V=_.length;for(let $=0;$<V;$++)f[_[$]]=L}else j?this.options.visualElement.renderState.vars[O]=L:f[O]=L}this.options.layoutId&&(f.pointerEvents=h===this?Vr(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Cp),this.root.sharedNodes.clear()}}}function tS(a){a.updateLayout()}function eS(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:s}=a.layout,{animationType:c}=a.options,d=i.source!==a.layout.source;c==="size"?on(y=>{const x=d?i.measuredBox[y]:i.layoutBox[y],v=Re(x);x.min=l[y].min,x.max=x.min+v}):Ey(c,i.layoutBox,l)&&on(y=>{const x=d?i.measuredBox[y]:i.layoutBox[y],v=Re(l[y]);x.max=x.min+v,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[y].max=a.relativeTarget[y].min+v)});const f=qi();Wo(f,l,i.layoutBox);const g=qi();d?Wo(g,a.applyTransform(s,!0),i.measuredBox):Wo(g,l,i.layoutBox);const p=!Ty(f);let h=!1;if(!a.resumeFrom){const y=a.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:v}=y;if(x&&v){const M=ae();Io(M,i.layoutBox,x.layoutBox);const O=ae();Io(O,l,v.layoutBox),Ay(M,O)||(h=!0),y.options.layoutRoot&&(a.relativeTarget=O,a.relativeTargetOrigin=M,a.relativeParent=y)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:g,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:h})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function nS(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function aS(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function iS(a){a.clearSnapshot()}function Cp(a){a.clearMeasurements()}function zp(a){a.isLayoutDirty=!1}function oS(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function Np(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function lS(a){a.resolveTargetDelta()}function rS(a){a.calcProjection()}function sS(a){a.resetSkewAndRotation()}function uS(a){a.removeLeadSnapshot()}function _p(a,i,l){a.translate=Ft(i.translate,0,l),a.scale=Ft(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function kp(a,i,l,s){a.min=Ft(i.min,l.min,s),a.max=Ft(i.max,l.max,s)}function cS(a,i,l,s){kp(a.x,i.x,l.x,s),kp(a.y,i.y,l.y,s)}function fS(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const dS={duration:.45,ease:[.4,0,.1,1]},Vp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Up=Vp("applewebkit/")&&!Vp("chrome/")?Math.round:ln;function jp(a){a.min=Up(a.min),a.max=Up(a.max)}function hS(a){jp(a.x),jp(a.y)}function Ey(a,i,l){return a==="position"||a==="preserve-aspect"&&!v5(Rp(i),Rp(l),.2)}function mS(a){return a!==a.root&&a.scroll?.wasRoot}const pS=Dy({attachResizeListener:(a,i)=>ll(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Rc={current:void 0},My=Dy({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Rc.current){const a=new pS({});a.mount(window),a.setOptions({layoutScroll:!0}),Rc.current=a}return Rc.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),gS={pan:{Feature:k5},drag:{Feature:_5,ProjectionNode:My,MeasureLayout:vy}};function Bp(a,i,l){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",l==="Start");const c="onHover"+l,d=s[c];d&&Qt.postRender(()=>d(i,cl(i)))}class yS extends Ta{mount(){const{current:i}=this.node;i&&(this.unmount=B2(i,(l,s)=>(Bp(this.node,s,"Start"),c=>Bp(this.node,c,"End"))))}unmount(){}}class bS extends Ta{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=rl(ll(this.node.current,"focus",()=>this.onFocus()),ll(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Lp(a,i,l){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",l==="Start");const c="onTap"+(l==="End"?"":l),d=s[c];d&&Qt.postRender(()=>d(i,cl(i)))}class vS extends Ta{mount(){const{current:i}=this.node;i&&(this.unmount=P2(i,(l,s)=>(Lp(this.node,s,"Start"),(c,{success:d})=>Lp(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Fc=new WeakMap,wc=new WeakMap,xS=a=>{const i=Fc.get(a.target);i&&i(a)},SS=a=>{a.forEach(xS)};function TS({root:a,...i}){const l=a||document;wc.has(l)||wc.set(l,{});const s=wc.get(l),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(SS,{root:a,...i})),s[c]}function AS(a,i,l){const s=TS(i);return Fc.set(a,l),s.observe(a),()=>{Fc.delete(a),s.unobserve(a)}}const OS={some:0,all:1};class DS extends Ta{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:c="some",once:d}=i,f={root:l?l.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:OS[c]},g=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,d&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:x}=this.node.getProps(),v=h?y:x;v&&v(p)};return AS(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(ES(i,l))&&this.startObserver()}unmount(){}}function ES({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const MS={inView:{Feature:DS},tap:{Feature:vS},focus:{Feature:bS},hover:{Feature:yS}},RS={layout:{ProjectionNode:My,MeasureLayout:vy}},wS={...h5,...MS,...gS,...RS},pe=Rx(wS,qx),CS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='100pt'%20height='100pt'%20version='1.1'%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m18.914%2081.398h-7.1992c0.97266%200.91016%201.5977%202.2266%201.5977%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.3125%200.46094-2.5703%201.4297-3.5977h-4.5703v-1.8281h4.5703v-7.4883h67.082v-21.371h25.086v2.6328h-13.086v11.426h7.8281v12.633l-15.484-0.003906c-1.1406%200.17187-1.0273%201.6562%200.058594%201.7695h23.945v2.2305h-9.4297c0.91406%200.91016%201.543%202.2266%201.543%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.4297%200.62891-2.7383%201.543-3.5977h-7.6016c0.058594%200.22656%200.10938%200.45703%200.10938%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.058593-0.45703%200.058593-0.68359h-3.8281c0%200.28125%200.058593%200.51562%200.058593%200.68359%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2305-3.7109-8.2305-8.3438%200-0.11328%200.058594-0.28516%200.11328-0.625h-4.1133c0%200.28516%200.058594%200.45703%200.058594%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.054688-0.34375%200.11328-0.625'%20fill='%23010101'/%3e%3cpath%20d='m25.316%2053.566c-1.3711-0.16797-2.3984-1.1445-2.1719-2.2812l2.0547-6.1719-0.34375-4.2305h-7.8867l-0.34375%204.2305%202.0586%206.1719c0.23047%201.1406-0.80078%202.1172-2.0586%202.2812h-6.4531l-5.5977%208.3984%205.5977%208.4023h59.828l-0.003906-16.852c-3.9961%200.16797-3.7109-1.4883-3.9961-2.6914h-24.914c-0.11328%200.91406%200%202.7422-3.1406%202.7422z'%20fill='%23010101'/%3e%3cpath%20d='m23.312%2039.113h-4.6289c0.62891-6.3984%202.457-11.027%207.5977-15.543%201.3164-2.1133%200.28516-12.172%209.1406-13.715%208.6914-1.4844%208.5781%204.9141%2015.32%205.5977%202.9141%200.28906%205.6016-2.3398%208.5703-2.2812%204.0547%200.11328%205.7734%203.8242%209.1992%203.9961%203.4297%200.17188%204.1133-2.0547%207.4297-2.1719%203.3125-0.11328%207.8281%203.6562%207.8281%207.2031%200%204.0547-0.34375%208.3398-7.0859%2010.055-3.1992%200.80078-6-2.5703-9.1992-2.457-2.8555%200.054687-5.7148%202.6875-8.5156%202.6875-6.7383%200-6.3984-4.0586-10.168-4.0586-3.9414%200-4.8008%203.9414-10.801%204.2852-4.1758%200.23047-6.2852-2.6289-9.1445-1.7148-4.5117%201.4883-5.2539%208.1172-5.543%208.1172'%20fill='%23010101'/%3e%3c/svg%3e";function ue(a,i){i===void 0&&(i={});var l=i.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}ue(`.react-loading-indicator-normalize,
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
}`);var _t=function(){return _t=Object.assign||function(a){for(var i,l=1,s=arguments.length;l<s;l++)for(var c in i=arguments[l])Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c]);return a},_t.apply(this,arguments)};function Pr(a){return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Pr(a)}var zS=/^\s+/,NS=/\s+$/;function ot(a,i){if(i=i||{},(a=a||"")instanceof ot)return a;if(!(this instanceof ot))return new ot(a,i);var l=function(s){var c={r:0,g:0,b:0},d=1,f=null,g=null,p=null,h=!1,y=!1;typeof s=="string"&&(s=function(O){O=O.replace(zS,"").replace(NS,"").toLowerCase();var D,_=!1;if($c[O])O=$c[O],_=!0;else if(O=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(D=pn.rgb.exec(O))?{r:D[1],g:D[2],b:D[3]}:(D=pn.rgba.exec(O))?{r:D[1],g:D[2],b:D[3],a:D[4]}:(D=pn.hsl.exec(O))?{h:D[1],s:D[2],l:D[3]}:(D=pn.hsla.exec(O))?{h:D[1],s:D[2],l:D[3],a:D[4]}:(D=pn.hsv.exec(O))?{h:D[1],s:D[2],v:D[3]}:(D=pn.hsva.exec(O))?{h:D[1],s:D[2],v:D[3],a:D[4]}:(D=pn.hex8.exec(O))?{r:Xe(D[1]),g:Xe(D[2]),b:Xe(D[3]),a:Gp(D[4]),format:_?"name":"hex8"}:(D=pn.hex6.exec(O))?{r:Xe(D[1]),g:Xe(D[2]),b:Xe(D[3]),format:_?"name":"hex"}:(D=pn.hex4.exec(O))?{r:Xe(D[1]+""+D[1]),g:Xe(D[2]+""+D[2]),b:Xe(D[3]+""+D[3]),a:Gp(D[4]+""+D[4]),format:_?"name":"hex8"}:(D=pn.hex3.exec(O))?{r:Xe(D[1]+""+D[1]),g:Xe(D[2]+""+D[2]),b:Xe(D[3]+""+D[3]),format:_?"name":"hex"}:!1}(s)),Pr(s)=="object"&&(Gn(s.r)&&Gn(s.g)&&Gn(s.b)?(x=s.r,v=s.g,M=s.b,c={r:255*Zt(x,255),g:255*Zt(v,255),b:255*Zt(M,255)},h=!0,y=String(s.r).substr(-1)==="%"?"prgb":"rgb"):Gn(s.h)&&Gn(s.s)&&Gn(s.v)?(f=Ko(s.s),g=Ko(s.v),c=function(O,D,_){O=6*Zt(O,360),D=Zt(D,100),_=Zt(_,100);var j=Math.floor(O),L=O-j,V=_*(1-D),$=_*(1-L*D),q=_*(1-(1-L)*D),W=j%6,J=[_,$,V,V,q,_][W],X=[q,_,_,$,V,V][W],lt=[V,V,q,_,_,$][W];return{r:255*J,g:255*X,b:255*lt}}(s.h,f,g),h=!0,y="hsv"):Gn(s.h)&&Gn(s.s)&&Gn(s.l)&&(f=Ko(s.s),p=Ko(s.l),c=function(O,D,_){var j,L,V;function $(J,X,lt){return lt<0&&(lt+=1),lt>1&&(lt-=1),lt<1/6?J+6*(X-J)*lt:lt<.5?X:lt<2/3?J+(X-J)*(2/3-lt)*6:J}if(O=Zt(O,360),D=Zt(D,100),_=Zt(_,100),D===0)j=L=V=_;else{var q=_<.5?_*(1+D):_+D-_*D,W=2*_-q;j=$(W,q,O+1/3),L=$(W,q,O),V=$(W,q,O-1/3)}return{r:255*j,g:255*L,b:255*V}}(s.h,f,p),h=!0,y="hsl"),s.hasOwnProperty("a")&&(d=s.a));var x,v,M;return d=Ry(d),{ok:h,format:s.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}}(a);this._originalInput=a,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||l.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function Hp(a,i,l){a=Zt(a,255),i=Zt(i,255),l=Zt(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=(d+f)/2;if(d==f)s=c=0;else{var p=d-f;switch(c=g>.5?p/(2-d-f):p/(d+f),d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,l:g}}function qp(a,i,l){a=Zt(a,255),i=Zt(i,255),l=Zt(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=d,p=d-f;if(c=d===0?0:p/d,d==f)s=0;else{switch(d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,v:g}}function Pp(a,i,l,s){var c=[yn(Math.round(a).toString(16)),yn(Math.round(i).toString(16)),yn(Math.round(l).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function Yp(a,i,l,s){return[yn(wy(s)),yn(Math.round(a).toString(16)),yn(Math.round(i).toString(16)),yn(Math.round(l).toString(16))].join("")}function _S(a,i){i=i===0?0:i||10;var l=ot(a).toHsl();return l.s-=i/100,l.s=Qr(l.s),ot(l)}function kS(a,i){i=i===0?0:i||10;var l=ot(a).toHsl();return l.s+=i/100,l.s=Qr(l.s),ot(l)}function VS(a){return ot(a).desaturate(100)}function US(a,i){i=i===0?0:i||10;var l=ot(a).toHsl();return l.l+=i/100,l.l=Qr(l.l),ot(l)}function jS(a,i){i=i===0?0:i||10;var l=ot(a).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-i/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-i/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-i/100*255))),ot(l)}function BS(a,i){i=i===0?0:i||10;var l=ot(a).toHsl();return l.l-=i/100,l.l=Qr(l.l),ot(l)}function LS(a,i){var l=ot(a).toHsl(),s=(l.h+i)%360;return l.h=s<0?360+s:s,ot(l)}function HS(a){var i=ot(a).toHsl();return i.h=(i.h+180)%360,ot(i)}function Xp(a,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var l=ot(a).toHsl(),s=[ot(a)],c=360/i,d=1;d<i;d++)s.push(ot({h:(l.h+d*c)%360,s:l.s,l:l.l}));return s}function qS(a){var i=ot(a).toHsl(),l=i.h;return[ot(a),ot({h:(l+72)%360,s:i.s,l:i.l}),ot({h:(l+216)%360,s:i.s,l:i.l})]}function PS(a,i,l){i=i||6,l=l||30;var s=ot(a).toHsl(),c=360/l,d=[ot(a)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,d.push(ot(s));return d}function YS(a,i){i=i||6;for(var l=ot(a).toHsv(),s=l.h,c=l.s,d=l.v,f=[],g=1/i;i--;)f.push(ot({h:s,s:c,v:d})),d=(d+g)%1;return f}ot.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,i,l,s=this.toRgb();return a=s.r/255,i=s.g/255,l=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Ry(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=qp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=qp(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+i+", "+l+"%, "+s+"%)":"hsva("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=Hp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Hp(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+i+", "+l+"%, "+s+"%)":"hsla("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return Pp(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(i,l,s,c,d){var f=[yn(Math.round(i).toString(16)),yn(Math.round(l).toString(16)),yn(Math.round(s).toString(16)),yn(wy(c))];return d&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Zt(this._r,255))+"%",g:Math.round(100*Zt(this._g,255))+"%",b:Math.round(100*Zt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Zt(this._r,255))+"%, "+Math.round(100*Zt(this._g,255))+"%, "+Math.round(100*Zt(this._b,255))+"%)":"rgba("+Math.round(100*Zt(this._r,255))+"%, "+Math.round(100*Zt(this._g,255))+"%, "+Math.round(100*Zt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(XS[Pp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var i="#"+Yp(this._r,this._g,this._b,this._a),l=i,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=ot(a);l="#"+Yp(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+l+")"},toString:function(a){var i=!!a;a=a||this._format;var l=!1,s=this._a<1&&this._a>=0;return i||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(l=this.toRgbString()),a==="prgb"&&(l=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(l=this.toHexString()),a==="hex3"&&(l=this.toHexString(!0)),a==="hex4"&&(l=this.toHex8String(!0)),a==="hex8"&&(l=this.toHex8String()),a==="name"&&(l=this.toName()),a==="hsl"&&(l=this.toHslString()),a==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ot(this.toString())},_applyModification:function(a,i){var l=a.apply(null,[this].concat([].slice.call(i)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(US,arguments)},brighten:function(){return this._applyModification(jS,arguments)},darken:function(){return this._applyModification(BS,arguments)},desaturate:function(){return this._applyModification(_S,arguments)},saturate:function(){return this._applyModification(kS,arguments)},greyscale:function(){return this._applyModification(VS,arguments)},spin:function(){return this._applyModification(LS,arguments)},_applyCombination:function(a,i){return a.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(PS,arguments)},complement:function(){return this._applyCombination(HS,arguments)},monochromatic:function(){return this._applyCombination(YS,arguments)},splitcomplement:function(){return this._applyCombination(qS,arguments)},triad:function(){return this._applyCombination(Xp,[3])},tetrad:function(){return this._applyCombination(Xp,[4])}},ot.fromRatio=function(a,i){if(Pr(a)=="object"){var l={};for(var s in a)a.hasOwnProperty(s)&&(l[s]=s==="a"?a[s]:Ko(a[s]));a=l}return ot(a,i)},ot.equals=function(a,i){return!(!a||!i)&&ot(a).toRgbString()==ot(i).toRgbString()},ot.random=function(){return ot.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ot.mix=function(a,i,l){l=l===0?0:l||50;var s=ot(a).toRgb(),c=ot(i).toRgb(),d=l/100;return ot({r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a})},ot.readability=function(a,i){var l=ot(a),s=ot(i);return(Math.max(l.getLuminance(),s.getLuminance())+.05)/(Math.min(l.getLuminance(),s.getLuminance())+.05)},ot.isReadable=function(a,i,l){var s,c,d=ot.readability(a,i);switch(c=!1,(s=function(f){var g,p;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:g,size:p}}(l)).level+s.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},ot.mostReadable=function(a,i,l){var s,c,d,f,g=null,p=0;c=(l=l||{}).includeFallbackColors,d=l.level,f=l.size;for(var h=0;h<i.length;h++)(s=ot.readability(a,i[h]))>p&&(p=s,g=ot(i[h]));return ot.isReadable(a,g,{level:d,size:f})||!c?g:(l.includeFallbackColors=!1,ot.mostReadable(a,["#fff","#000"],l))};var $c=ot.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},XS=ot.hexNames=function(a){var i={};for(var l in a)a.hasOwnProperty(l)&&(i[a[l]]=l);return i}($c);function Ry(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function Zt(a,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var l=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(a);return a=Math.min(i,Math.max(0,parseFloat(a))),l&&(a=parseInt(a*i,10)/100),Math.abs(a-i)<1e-6?1:a%i/parseFloat(i)}function Qr(a){return Math.min(1,Math.max(0,a))}function Xe(a){return parseInt(a,16)}function yn(a){return a.length==1?"0"+a:""+a}function Ko(a){return a<=1&&(a=100*a+"%"),a}function wy(a){return Math.round(255*parseFloat(a)).toString(16)}function Gp(a){return Xe(a)/255}var ba,zr,Nr,pn=(zr="[\\s|\\(]+("+(ba="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ba+")[,|\\s]+("+ba+")\\s*\\)?",Nr="[\\s|\\(]+("+ba+")[,|\\s]+("+ba+")[,|\\s]+("+ba+")[,|\\s]+("+ba+")\\s*\\)?",{CSS_UNIT:new RegExp(ba),rgb:new RegExp("rgb"+zr),rgba:new RegExp("rgba"+Nr),hsl:new RegExp("hsl"+zr),hsla:new RegExp("hsla"+Nr),hsv:new RegExp("hsv"+zr),hsva:new RegExp("hsva"+Nr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Gn(a){return!!pn.CSS_UNIT.exec(a)}var Kr=function(a,i){var l=(typeof a=="string"?parseInt(a):a)||0;if(l>=-5&&l<=5){var s=l,c=parseFloat(i),d=c+s*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},Jr=function(a,i){var l=a||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(l.fontSize){var d=l.fontSize;c=function(f,g){var p={};for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&g.indexOf(h)<0&&(p[h]=f[h]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(f);y<h.length;y++)g.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(f,h[y])&&(p[h[y]]=f[h[y]])}return p}(l,["fontSize"]),s=d}return{fontSize:s,styles:c}},GS={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Fr=function(a){var i=a.className,l=a.text,s=a.textColor,c=a.staticText,d=a.style;return l?wt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:_t(_t(_t({},c&&GS),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof l=="string"&&l.length?l:"loading"):null},fl="rgb(50, 205, 50)";function $r(a,i){if(i===void 0&&(i=0),a.length===0)throw new Error("Input array cannot be empty!");var l=[];return function s(c,d){return d===void 0&&(d=0),l.push.apply(l,c),l.length<d&&s(l,d),l.slice(0,d)}(a,i)}ue(`.atom-rli-bounding-box {
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
}`);ot(fl).toRgb();Array.from({length:4},function(a,i){return"--atom-phase".concat(i+1,"-rgb")});ue(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--commet-phase".concat(i+1,"-color")});ue(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-annulus-phase".concat(i+1,"-color")});function Cc(a){return a&&a.Math===Math&&a}ue(`.OP-dotted-rli-bounding-box {
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
}`);Cc(typeof window=="object"&&window)||Cc(typeof self=="object"&&self)||Cc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,i){return"--OP-dotted-phase".concat(i+1,"-color")});ue(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-spokes-phase".concat(i+1,"-color")});ue(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")});ue(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]});ue(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--four-square-phase".concat(i+1,"-color")});ue(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--mosaic-phase".concat(i+1,"-color")});ue(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--riple-phase".concat(i+1,"-color")});ue(`.pulsate-rli-bounding-box {
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
}`);var _i=Array.from({length:4},function(a,i){return"--TD-pulsate-phase".concat(i+1,"-color")}),ZS=function(a){var i,l=Jr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Kr(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=$r(p,_i.length),x=0;x<y.length&&!(x>=4);x++)h[_i[x]]=y[x];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<_i.length;v++)h[_i[v]]=p}catch(M){for(M instanceof Error?console.warn("[".concat(M.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),v=0;v<_i.length;v++)h[_i[v]]=fl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return wt.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:_t(_t(_t(_t(_t({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"rli-d-i-b pulsate-indicator"},wt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),wt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),wt.createElement("span",{className:"rli-d-i-b pulsate-dot"})),wt.createElement(Fr,{staticText:!0,text:a?.text,textColor:a?.textColor}))};ue(`.brick-stack-rli-bounding-box {
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
}`);var ki=Array.from({length:4},function(a,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}),QS=function(a){var i,l=Jr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Kr(a?.speedPlus,"1s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=$r(p,ki.length),x=0;x<y.length&&!(x>=4);x++)h[ki[x]]=y[x];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<ki.length;v++)h[ki[v]]=p}catch(M){for(M instanceof Error?console.warn("[".concat(M.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),v=0;v<ki.length;v++)h[ki[v]]=fl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return wt.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:_t(_t(_t(_t(_t({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},wt.createElement("span",{className:"rli-d-i-b brick-stack"})),wt.createElement(Fr,{staticText:!0,text:a?.text,textColor:a?.textColor}))};ue(`.bob-rli-bounding-box {
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
}`);var Vi=Array.from({length:4},function(a,i){return"--TD-bob-phase".concat(i+1,"-color")}),KS=function(a){var i,l=Jr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Kr(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=$r(p,Vi.length),x=0;x<y.length&&!(x>=4);x++)h[Vi[x]]=y[x];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<Vi.length;v++)h[Vi[v]]=p}catch(M){for(M instanceof Error?console.warn("[".concat(M.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),v=0;v<Vi.length;v++)h[Vi[v]]=fl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return wt.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:_t(_t(_t(_t(_t({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"bob-indicator"},wt.createElement("span",{className:"bobbing"})),wt.createElement(Fr,{staticText:!0,text:a?.text,textColor:a?.textColor}))};ue(`.bounce-rli-bounding-box {
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
}`);var Ui=Array.from({length:4},function(a,i){return"--TD-bounce-phase".concat(i+1,"-color")}),JS=function(a){var i,l=Jr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Kr(a?.speedPlus,"0.5s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=$r(p,Ui.length),x=0;x<y.length&&!(x>=4);x++)h[Ui[x]]=y[x];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<Ui.length;v++)h[Ui[v]]=p}catch{for(v=0;v<Ui.length;v++)h[Ui[v]]=fl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return wt.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:_t(_t(_t(_t(_t({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s)},wt.createElement("span",{className:"wrapper"},wt.createElement("span",{className:"group"},wt.createElement("span",{className:"rli-d-i-b dot"}),wt.createElement("span",{className:"rli-d-i-b dot"}),wt.createElement("span",{className:"rli-d-i-b dot"})),wt.createElement("span",{className:"group"},wt.createElement("span",{className:"rli-d-i-b shadow"}),wt.createElement("span",{className:"rli-d-i-b shadow"}),wt.createElement("span",{className:"rli-d-i-b shadow"}))),wt.createElement(Fr,{staticText:!0,text:a?.text,textColor:a?.textColor,style:{marginTop:"2px"}}))},FS=function(a){var i=Object(a).variant,l=i===void 0?"pulsate":i;return l==="pulsate"?wt.createElement(ZS,_t({},a)):l==="brick-stack"?wt.createElement(QS,_t({},a)):l==="bob"?wt.createElement(KS,_t({},a)):l==="bounce"?wt.createElement(JS,_t({},a)):null};ue(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--shape-phase".concat(i+1,"-color")});ue(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--trophySpin-phase".concat(i+1,"-color")});ue(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--slab-phase".concat(i+1,"-color")});ue(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--life-line-phase".concat(i+1,"-color")});const $S=({startX:a,startY:i,endX:l,endY:s})=>P.jsx(pe.line,{x1:a,y1:i,x2:l,y2:s,className:"active-connection",markerEnd:"url(#arrowhead)",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2}}),WS=({connection:a,neurons:i,neuronRadius:l,neuronTransforms:s,isGlowing:c,emphasizedConnections:d,showForwardPassVisuals:f,inputData:g,currentSampleIndex:p,neuronHeaders:h,hiddenWeights:y,inputNeurons:x,hiddenNeurons:v,hiddenBiases:M,outputWeights:O,outputBiases:D,showSigmoidPhase:_,outputNeurons:j})=>{const L=i.find(Q=>Q.id===a.fromNeuronId),V=i.find(Q=>Q.id===a.toNeuronId);if(!L||!V)return null;const $=d.includes(a.id),q=f?$?1:.3:1,W=s[a.fromNeuronId]||{x:0,y:0},J=s[a.toNeuronId]||{x:0,y:0},X=L.x+W.x,lt=L.y+W.y,dt=V.x+J.x,Mt=V.y+J.y,jt=(Q,K,tt,st)=>{switch(K){case"top":return{x:tt,y:st-l};case"right":return{x:tt+l,y:st};case"bottom":return{x:tt,y:st+l};case"left":return{x:tt-l,y:st};default:return{x:tt,y:st}}},Kt=jt(L,a.fromDirection,X,lt),qt=jt(V,a.toDirection,dt,Mt),Tt=(Kt.x+qt.x)/2;let N=(Kt.y+qt.y)/2;const Z=Math.atan2(qt.y-Kt.y,qt.x-Kt.x)*(180/Math.PI),et=()=>{if(!f||!g[p]||!d.includes(a.id))return null;const Q=h[L.label]||L.label,K=h[V.label]||V.label;if(L.type==="input"&&V.type==="hidden"){const tt=parseFloat(g[p][Q])||0,st=y[`${Q}-${K}`]||0,at=M[K]||0,Bt=tt*st+at;return`${tt} × ${st.toFixed(1)} + ${at.toFixed(1)} = ${Bt.toFixed(1)}`}if(L.type==="hidden"&&V.type==="output"){let tt=0;x.forEach(Ct=>{const Xt=h[Ct.label]||Ct.label,Pt=parseFloat(g[p][Xt])||0,ce=y[`${Xt}-${Q}`]||0;tt+=Pt*ce});const st=M[Q]||0,at=tt+st,Bt=Math.max(0,at),I=O[`${Q}-${K}`]||0,mt=D[K]||0,At=(Bt*I+mt).toFixed(1);return`${Bt.toFixed(0)} × ${I.toFixed(1)} + ${mt.toFixed(1)} = ${At}`}return L.type==="output"&&V.type==="display"&&a.isSigmoidConnection,null},gt=()=>{if(!(L.type==="output"&&V.type==="display"&&a.isSigmoidConnection))return null;N-=20;const Q=h[L.label]||L.label;let K=0;v.forEach(at=>{const Bt=h[at.label]||at.label;let I=0;x.forEach(Pt=>{const ce=h[Pt.label]||Pt.label,rn=parseFloat(g[p][ce])||0,Ge=y[`${ce}-${Bt}`]||0;I+=rn*Ge});const mt=M[Bt]||0,At=I+mt,Ct=Math.max(0,At),Xt=O[`${Bt}-${Q}`]||0;K+=Ct*Xt});const tt=D[Q]||0;K+=tt;const st=K.toFixed(1);return P.jsxs("g",{children:[P.jsx("line",{x1:Tt-25,y1:N-5,x2:Tt+25,y2:N-5,stroke:"#ffffff",strokeWidth:"1"}),P.jsx("text",{x:Tt,y:N-10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1"}),P.jsx("text",{x:Tt-10,y:N+10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1 + e"}),P.jsxs("text",{x:Tt+8,y:N+5,fill:"#ffffff",fontSize:"8px",textAnchor:"start",children:["-",st]})]})},T=et(),H=a.isAnimating?"active-connection":c?"completed-connection glowing-connection":"completed-connection";return P.jsxs("g",{children:[P.jsx(pe.line,{x1:Kt.x,y1:Kt.y,x2:qt.x,y2:qt.y,className:H,markerEnd:a.isAnimating?void 0:"url(#arrowhead)",initial:a.isAnimating?{pathLength:0}:{pathLength:1,opacity:q},animate:a.isAnimating?{pathLength:1}:{pathLength:1,opacity:q},transition:a.isAnimating?{duration:.6,ease:"easeInOut"}:{duration:.2}}),T&&P.jsx(pe.text,{x:Tt,y:N-8,className:"formula-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{fontSize:"11px",fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},transform:`rotate(${Z}, ${Tt}, ${N-8})`,children:T}),d.includes(a.id)&&P.jsx(pe.g,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:gt()})]})},IS=({x:a,y:i,neuronId:l,direction:s,onStartConnection:c,isHighlighted:d=!1})=>P.jsx(pe.circle,{cx:a,cy:i,r:4,className:`connection-dot ${d?"connection-dot-highlighted":""}`,onClick:f=>{f.stopPropagation(),c(l,s,a,i,f)},whileHover:{scale:1.2},initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2},style:{cursor:"pointer"}}),tT=({id:a,x:i,y:l,radius:s,label:c,type:d,onDragEnd:f,onStartConnection:g,highlightedDots:p=[],onDragUpdate:h,isGlowing:y,neurons:x,showForwardPassVisuals:v,emphasizedConnections:M,hiddenNeurons:O,inputNeurons:D,outputNeurons:_,neuronHeaders:j,hiddenWeights:L,outputWeights:V,inputData:$,currentSampleIndex:q,hiddenBiases:W,connections:J,showSigmoidPhase:X,outputBiases:lt})=>{const[dt,Mt]=G.useState(!1),[jt,Kt]=G.useState(!1),qt=x.find(I=>I.id===a),Tt=v&&(qt?.type==="input"||qt?.type==="hidden"&&J.some(I=>M.includes(I.id)&&(I.fromNeuronId===a||I.toNeuronId===a))||qt?.type==="output"&&(M.some(I=>{const mt=J.find(At=>At.id===I);return mt&&mt.toNeuronId===a})||X)||qt?.type==="display"),N=v&&!Tt?.3:1,Z=I=>{const mt="neuron",At=I==="input"?"neuron-input":I==="hidden"?"neuron-hidden":I==="output"?"neuron-output":I.startsWith("hidden")?"neuron-hidden":"neuron";return y?`${mt} ${At} glowing-neuron`:`${mt} ${At}`},gt=(I=>{const mt=j[I.label]||I.label,At=[];return I.type==="hidden"?D.forEach(Ct=>{const Xt=j[Ct.label]||Ct.label,Pt=L[`${Xt}-${mt}`]||0;At.push(Pt)}):I.type==="output"&&O.forEach(Ct=>{const Xt=j[Ct.label]||Ct.label,Pt=V[`${Xt}-${mt}`]||0;At.push(Pt)}),At})(qt||{type:d,label:c}),T=gt.length>0?`[${gt.map(I=>I.toFixed(1)).join(", ")}]`:"",H=()=>{if(d==="input"&&v&&$[q]){const I=j[c]||c;return $[q][I]||""}return""},Q=()=>{if(d==="hidden"&&v&&$[q]){const I=j[c]||c;if(J.some(At=>M.includes(At.id)&&At.toNeuronId===a&&D.some(Ct=>Ct.id===At.fromNeuronId))){let At=0;D.forEach(Pt=>{const ce=j[Pt.label]||Pt.label,rn=parseFloat($[q][ce])||0,Ge=L[`${ce}-${I}`]||0;At+=rn*Ge});const Ct=W[I]||0;return(At+Ct).toFixed(1)}}return""},K=()=>{if(d==="output"&&v&&X&&$[q]){const I=j[c]||c,mt=[];O.forEach(Ct=>{const Xt=j[Ct.label]||Ct.label;let Pt=0;D.forEach(sn=>{const Rn=j[sn.label]||sn.label,Ze=parseFloat($[q][Rn])||0,Kn=L[`${Rn}-${Xt}`]||0;Pt+=Ze*Kn});const ce=W[Xt]||0,rn=Pt+ce,Ge=Math.max(0,rn),ge=V[`${Xt}-${I}`]||0,Aa=Ge*ge;mt.push(Aa.toFixed(1))});const At=lt[I]||0;return`${mt.join(" + ")} + ${At.toFixed(1)}`}return""},tt=()=>{if(d==="output"&&v&&X&&$[q]){const I=j[c]||c;let mt=0;O.forEach(Ct=>{const Xt=j[Ct.label]||Ct.label;let Pt=0;D.forEach(Aa=>{const sn=j[Aa.label]||Aa.label,Rn=parseFloat($[q][sn])||0,Ze=L[`${sn}-${Xt}`]||0;Pt+=Rn*Ze});const ce=W[Xt]||0,rn=Pt+ce,Ge=Math.max(0,rn),ge=V[`${Xt}-${I}`]||0;mt+=Ge*ge});const At=lt[I]||0;return mt+=At,mt.toFixed(1)}return""},st=[{direction:"top",x:0,y:-s},{direction:"right",x:s,y:0},{direction:"bottom",x:0,y:s},{direction:"left",x:-s,y:0}],at=()=>{dt||Kt(!0)},Bt=()=>{Kt(!1)};return P.jsxs(pe.g,{drag:!0,dragMomentum:!1,dragElastic:.1,initial:{x:i,y:l},animate:{x:i,y:l,opacity:N},onDragStart:()=>{Mt(!0),Kt(!1)},onDrag:(I,mt)=>{h(a,mt.offset.x,mt.offset.y)},onDragEnd:(I,mt)=>{Mt(!1);const At=i+mt.offset.x,Ct=l+mt.offset.y;f(a,At,Ct),h(a,0,0)},whileDrag:{scale:1.1},onMouseEnter:at,onMouseLeave:Bt,style:{cursor:dt?"grabbing":"default"},children:[P.jsx("circle",{cx:0,cy:0,r:s+20,fill:"transparent",style:{pointerEvents:"all",cursor:"default"}}),P.jsx(pe.circle,{cx:0,cy:0,r:s,className:Z(d),initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.6,type:"spring"},style:{cursor:dt?"grabbing":"grab"},onClick:I=>{I.button}}),(Q()||d==="output"&&X)&&P.jsx("rect",{x:-23,y:-9,width:46,height:18,rx:3,fill:"rgb(6, 129, 0)",stroke:"#22c55e",strokeWidth:2}),P.jsx(pe.text,{x:0,y:5,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},style:{pointerEvents:"none"},children:Q()?"ReLU":d==="output"&&X?"Sig":c}),T&&!(d==="output"&&X)&&P.jsx(pe.text,{x:0,y:-s-10,className:Q()?"neuron-text":"neuron-weights-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{},children:Q()||T}),d==="output"&&X&&K()&&P.jsx(pe.text,{x:0,y:-s-25,className:"formula-text",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{fontSize:"11px",fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},children:K()}),d==="output"&&X&&tt()&&P.jsx(pe.text,{x:0,y:-s-10,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:3.5,duration:.5},style:{pointerEvents:"none"},children:tt()}),d==="input"&&v&&H()&&P.jsx(pe.text,{x:0,y:-s*1.3,className:"input-value-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},style:{pointerEvents:"none",fontSize:"14px",fill:"#ffffff",textAnchor:"middle"},children:H()}),P.jsx(F2,{children:jt&&!dt&&st.map(I=>P.jsx(IS,{x:I.x,y:I.y,neuronId:a,direction:I.direction,onStartConnection:g,isHighlighted:p.includes(I.direction)},I.direction))})]})},Zp=(a,i)=>{const l=a.length,s=a[0].length,c=i[0].length,d=Array(l).fill().map(()=>Array(c).fill(0));for(let f=0;f<l;f++)for(let g=0;g<c;g++)for(let p=0;p<s;p++)d[f][g]+=a[f][p]*i[p][g];return d},Qp=(a,i)=>a.map(l=>l.map((s,c)=>s+(i[c]||0))),eT=a=>a.map(i=>i.map(l=>Math.max(0,l))),nT=a=>a.map(i=>i.map(l=>1/(1+Math.exp(-l)))),aT=(a,i)=>a.map((s,c)=>{const d=Math.max(1e-15,Math.min(.999999999999999,i[c]));return-(s*Math.log(d)+(1-s)*Math.log(1-d))}),iT=(a,i,l,s,c,d,f,g,p,h)=>{const y=a.filter(x=>{const v=i.some(O=>x[O.label]&&x[O.label].trim()!==""),M=x.Truth!==void 0&&x.Truth!=="";return v&&M});if(y.length===0){alert("Please add input data with truth values");return}if(l.length===0||s.length===0){alert("Please add hidden and output neurons");return}try{const x=y.map(J=>i.map(X=>parseFloat(J[X.label])||0)),v=y.map(J=>parseFloat(J.Truth)||0),M=i.map(J=>l.map(X=>{const lt=c[J.label]||J.label,dt=c[X.label]||X.label;return d[`${lt}-${dt}`]||0})),O=l.map(J=>{const X=c[J.label]||J.label;return f[X]||0}),D=l.map(J=>s.map(X=>{const lt=c[J.label]||J.label,dt=c[X.label]||X.label;return g[`${lt}-${dt}`]||0})),_=s.map(J=>{const X=c[J.label]||J.label;return p[X]||0});let j=Zp(x,M);j=Qp(j,O);const L=eT(j);let V=Zp(L,D);V=Qp(V,_);const q=nT(V).map(J=>J[0]),W=aT(v,q);h({predictions:q,truthValues:v,losses:W,showResults:!0})}catch(x){console.error("Error in forward pass:",x),console.error("Error stack:",x.stack),alert("Error in calculation. Please check your inputs and weights.")}},Kp=({title:a,neurons:i,data:l,setData:s,onHeaderChange:c,onCellHover:d,isOutput:f=!1,truthValues:g=[],predictions:p=[],losses:h=[]})=>{const y=()=>{f||s(O=>[...O,{}])},x=(O,D,_)=>{f||(s(j=>{const L=[...j];return L[O]||(L[O]={}),L[O][D]=_,L}),O===l.length-1&&_.trim()!==""&&y())},v=(O,D,_)=>{D===_||f||(s(j=>j.map(L=>{if(L[D]!==void 0){const V={...L};return V[_]=L[D],delete V[D],V}return L})),c(D,_))},M=O=>O<.1?"#22c55e":O<1?"#eab308":"#ef4444";return!f&&i.length===0?null:P.jsxs("div",{className:"input-table-container",children:[P.jsx("h3",{className:"table-title",children:a}),P.jsxs("table",{className:"neural-table input-table",children:[P.jsx("thead",{children:P.jsxs("tr",{children:[P.jsx("th",{children:P.jsx("input",{type:"text",className:"header-input",value:"Truth",readOnly:!0})}),!f&&i.map(O=>P.jsx("th",{children:P.jsx("input",{type:"text",className:"header-input",value:O.label,onChange:D=>v(O.id,O.label,D.target.value||O.label),onKeyDown:D=>{D.key==="Enter"&&D.target.blur()}})},O.id)),f&&P.jsxs(P.Fragment,{children:[P.jsx("th",{children:P.jsx("input",{type:"text",className:"header-input",value:"ŷ",readOnly:!0})}),P.jsx("th",{children:P.jsx("input",{type:"text",className:"header-input",value:"Loss",readOnly:!0})})]})]})}),P.jsx("tbody",{children:(f?g:l).map((O,D)=>P.jsxs("tr",{children:[P.jsx("td",{children:P.jsx("input",{type:"number",className:"cell-input",value:f?g[D]:O.Truth||"",onChange:f?void 0:_=>{const j=_.target.value;(j===""||j==="0"||j==="1")&&x(D,"Truth",j)},placeholder:"0",min:"0",max:"1",step:"1",readOnly:f})}),!f&&i.map(_=>P.jsx("td",{children:P.jsx("input",{type:"number",className:"cell-input",value:O[_.label]||"",onChange:j=>x(D,_.label,j.target.value),onMouseEnter:()=>d("neuron",_.label),onMouseLeave:()=>d(null),onFocus:()=>d("neuron",_.label),onBlur:()=>d(null),placeholder:"0",step:"0.1"})},_.id)),f&&P.jsxs(P.Fragment,{children:[P.jsx("td",{children:P.jsx("input",{type:"number",className:"cell-input",value:p[D]?.toFixed(4)||"",readOnly:!0})}),P.jsx("td",{children:P.jsx("input",{type:"number",className:"cell-input",value:h[D]?.toFixed(4)||"",style:{backgroundColor:h[D]?M(h[D]):"transparent",color:h[D]&&h[D]<1?"#000":"#fff"},readOnly:!0})})]})]},D))})]})]})},Jp=({title:a,inputLabels:i,neuronLabels:l,weights:s,biases:c,onWeightChange:d,onBiasChange:f,onHeaderChange:g,showSaveLoad:p,onSave:h,onLoad:y,onCellHover:x})=>l.length===0?null:P.jsxs("div",{className:"weights-table-container",children:[P.jsxs("div",{className:"table-header",children:[P.jsx("h3",{className:"table-title",children:a}),p]}),P.jsxs("table",{className:"neural-table weights-table",children:[P.jsxs("thead",{children:[P.jsxs("tr",{children:[P.jsx("th",{className:"bias-label",children:"b1"}),l.map((v,M)=>P.jsx("th",{children:P.jsx("input",{type:"number",className:"bias-input",value:c[v]||"",onChange:O=>f(v,O.target.value),onMouseEnter:()=>x("neuron",v),onMouseLeave:()=>x(null),onFocus:()=>x("neuron",v),onBlur:()=>x(null),placeholder:"0.5",step:"0.1"})},M))]}),P.jsxs("tr",{children:[P.jsx("th",{}),l.map((v,M)=>P.jsx("th",{children:P.jsx("input",{type:"text",className:"header-input",defaultValue:v,onBlur:O=>g(v,O.target.value||v),onKeyDown:O=>{O.key==="Enter"&&O.target.blur()}})},M))]})]}),P.jsx("tbody",{children:i.map((v,M)=>P.jsxs("tr",{children:[P.jsx("td",{className:"row-header",children:v}),l.map((O,D)=>P.jsx("td",{children:P.jsx("input",{type:"number",className:"cell-input",value:s[`${v}-${O}`]||"",onChange:_=>d(v,O,_.target.value),onMouseEnter:()=>x("connection",v,O),onMouseLeave:()=>x(null),onFocus:()=>x("connection",v,O),onBlur:()=>x(null),placeholder:"0.1",step:"0.1"})},D))]},M))})]})]}),oT=a=>{const{setNeuronHeaders:i,setHiddenWeights:l,setHiddenBiases:s,setOutputWeights:c,setOutputBiases:d}=a;return{handleInputHeaderChange:(f,g)=>{i(p=>({...p,[f]:g}))},handleWeightChange:(f,g,p)=>{l(h=>({...h,[`${f}-${g}`]:parseFloat(p)||0}))},handleBiasChange:(f,g)=>{s(p=>({...p,[f]:parseFloat(g)||0}))},handleOutputWeightChange:(f,g,p)=>{c(h=>({...h,[`${f}-${g}`]:parseFloat(p)||0}))},handleOutputBiasChange:(f,g)=>{d(p=>({...p,[f]:parseFloat(g)||0}))},handleNeuronHeaderChange:(f,g)=>{i(p=>({...p,[f]:g}))}}},Cy=(a,i)=>a==="input"?`X${i}`:a==="hidden"?`H${i}`:a.startsWith("hidden")?`H${parseInt(a.replace("hidden",""))}${i}`:`Y${i}`,lT=(a,i,l,s,c)=>{let d;a==="input"?d=200:a==="hidden"?d=400:a.startsWith("hidden")?d=400+((parseInt(a.replace("hidden",""))||1)-1)*100:d=400+l*100+100;const f=s-100-90*(i-1);return{x:d,y:f}},rT=(a,i,l,s,c)=>{const{x:d,y:f}=lT(a,i,l,s);return{id:`${a}-${Date.now()}`,x:d,y:f,radius:c,label:Cy(a,i),type:a}},sT=(a,i,l,s,c,d,f)=>{const g=i[a]+1,p=rT(a,g,c,d,f);l(h=>{const y=[...h,p],x=y.filter(v=>v.type===a).sort((v,M)=>v.y-M.y);return y.map(v=>{if(v.type===a){const M=x.findIndex(O=>O.id===v.id);return{...v,label:Cy(a,M+1)}}return v})}),s(h=>({...h,[a]:g}))},uT=async(a,i,l)=>{l(!0);const s=a.filter(h=>h.type==="input").sort((h,y)=>h.y-y.y),c=a.filter(h=>h.type==="hidden"||h.type.startsWith("hidden")).sort((h,y)=>h.x-y.x||h.y-y.y),d=a.filter(h=>h.type==="output").sort((h,y)=>h.y-y.y);if(s.length===0||c.length===0)return;const f={};c.forEach(h=>{const y=h.x;f[y]||(f[y]=[]),f[y].push(h)});const g=Object.keys(f).map(Number).sort(),p=[];if(g.length>0){const h=f[g[0]],y=[];for(const x of s)for(const v of h)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:x.id,toNeuronId:v.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}for(let h=0;h<g.length-1;h++){const y=f[g[h]],x=f[g[h+1]],v=[];for(const M of y)for(const O of x)v.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:M.id,toNeuronId:O.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(v)}if(d.length>0&&g.length>0){const h=f[g[g.length-1]],y=[];for(const x of h)for(const v of d)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:x.id,toNeuronId:v.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}p.forEach((h,y)=>{setTimeout(()=>{i(x=>[...x,...h]),setTimeout(()=>{i(x=>x.map(v=>h.some(M=>M.id===v.id)?{...v,isAnimating:!1}:v))},600)},100+y*700)})},Fp=`
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
}`;function cT(){const[a,i]=G.useState([]),[l,s]=G.useState([]),[c,d]=G.useState(!1),[f,g]=G.useState(1),[p,h]=G.useState(null),[y,x]=G.useState(null),[v,M]=G.useState({input:0,hidden:0,output:0,...Array.from({length:10},(Y,F)=>({[`hidden${F+2}`]:0})).reduce((Y,F)=>({...Y,...F}),{})}),[O,D]=G.useState([{}]),[_,j]=G.useState({}),[L,V]=G.useState({}),[$,q]=G.useState({}),[W,J]=G.useState({}),[X,lt]=G.useState({}),[dt,Mt]=G.useState(null),[jt,Kt]=G.useState({x:0,y:0}),[qt,Tt]=G.useState(null),[N,Z]=G.useState({}),[et,gt]=G.useState([]),[T,H]=G.useState([]),[Q,K]=G.useState([]),[tt,st]=G.useState(!1),[at,Bt]=G.useState(!1),[I,mt]=G.useState(!1),[At,Ct]=G.useState(!1),[Xt,Pt]=G.useState([]),[ce,rn]=G.useState(0),[Ge,ge]=G.useState(!1),[Aa,sn]=G.useState(null),[Rn,Ze]=G.useState(!1);G.useEffect(()=>{if(!localStorage.getItem("neuralNetworkData")){Ze(!0);const Y=setTimeout(()=>Ze(!1),6e3);return()=>clearTimeout(Y)}},[]);const Kn=G.useRef(null),we=30,Wr=400,Ir=async()=>{if(Ce.length===0)return;Bt(!0),st(!1),Ct(!0),rn(0),ge(!1),sn(null);const Y=async F=>{const Dt=Ce[F];if(!Dt)return;const Rt=l.filter(bt=>bt.toNeuronId===Dt.id&&cn.some(te=>te.id===bt.fromNeuronId)).map(bt=>bt.id);Pt(bt=>Array.from(new Set([...bt,...Rt]))),await new Promise(bt=>setTimeout(bt,3e3)),Pt(bt=>bt.filter(te=>!Rt.includes(te)));const Lt=l.filter(bt=>bt.fromNeuronId===Dt.id&&vn.some(te=>te.id===bt.toNeuronId)).map(bt=>bt.id);Pt(bt=>Array.from(new Set([...bt,...Lt]))),await new Promise(bt=>setTimeout(bt,2e3))};for(let F=0;F<Ce.length;F++)await Y(F);if(ge(!0),await new Promise(F=>setTimeout(F,3e3)),vn.length>0){const F=vn[0],Dt={id:`display-${Date.now()}`,x:F.x+150,y:F.y,radius:30,label:"0.9970",type:"display"};sn(Dt),i(Lt=>[...Lt,Dt]);const Rt={id:`sigmoid-connection-${Date.now()}`,fromNeuronId:F.id,toNeuronId:Dt.id,fromDirection:"right",toDirection:"left",isSigmoidConnection:!0};s(Lt=>[...Lt,Rt]),Pt(Lt=>[...Lt,Rt.id])}setTimeout(()=>{Bt(!1),Oa()},2e3)},Oa=()=>{iT(O,cn,Ce,vn,X,_,L,$,W,Y=>{gt(Y.predictions),H(Y.truthValues),K(Y.losses),st(Y.showResults)})},{handleInputHeaderChange:Oe,handleWeightChange:bn,handleBiasChange:De,handleOutputWeightChange:ts,handleOutputBiasChange:es,handleNeuronHeaderChange:dl}=oT({setNeuronHeaders:lt,setHiddenWeights:j,setHiddenBiases:V,setOutputWeights:q,setOutputBiases:J}),Da=()=>{const Y=a.filter(Rt=>Rt.type!=="display"),F=l.filter(Rt=>!Rt.isSigmoidConnection),Dt={inputData:O,hiddenWeights:_,hiddenBiases:L,outputWeights:$,outputBiases:W,neuronHeaders:X,neurons:Y,connections:F,counters:v,timestamp:new Date().toISOString()};localStorage.setItem("neuralNetworkData",JSON.stringify(Dt))},Ea=()=>{Ze(!1);let Y=localStorage.getItem("neuralNetworkData");Y||(Y=Fp,localStorage.setItem("neuralNetworkData",Fp));try{const F=JSON.parse(Y);D(F.inputData||[{}]),j(F.hiddenWeights||{}),V(F.hiddenBiases||{}),q(F.outputWeights||{}),J(F.outputBiases||{}),lt(F.neuronHeaders||{}),F.neurons&&i(F.neurons),F.connections&&(s(F.connections),mt(!0)),F.counters&&M(F.counters)}catch(F){console.error("Error loading network data:",F)}},un=(Y,F,Dt)=>{if(Y==="connection"&&F&&Dt){const Rt=a.find(bt=>(X[bt.label]||bt.label)===F),Lt=a.find(bt=>(X[bt.label]||bt.label)===Dt);if(Rt&&Lt){const bt=l.find(te=>te.fromNeuronId===Rt.id&&te.toNeuronId===Lt.id);h(bt?.id||null)}x(null)}else if(Y==="neuron"&&F){const Rt=a.find(Lt=>(X[Lt.label]||Lt.label)===F);x(Rt?.id||null),h(null)}else h(null),x(null)},cn=a.filter(Y=>Y.type==="input").sort((Y,F)=>Y.y-F.y),Ce=a.filter(Y=>Y.type==="hidden").sort((Y,F)=>Y.y-F.y),vn=a.filter(Y=>Y.type==="output").sort((Y,F)=>Y.y-F.y),hl=cn.map(Y=>X[Y.label]||Y.label),Qi=Ce.map(Y=>X[Y.label]||Y.label),Ki=vn.map(Y=>X[Y.label]||Y.label),Jn=Y=>{if(!Kn.current)return{x:0,y:0};const F=Kn.current.getBoundingClientRect(),Dt=(Y.clientX-F.left)/F.width*800,Rt=(Y.clientY-F.top)/F.height*400;return{x:Dt,y:Rt}},ns=(Y,F,Dt)=>{Z(Rt=>({...Rt,[Y]:{x:F,y:Dt}}))},ml=G.useCallback(Y=>{if(dt&&Kn.current){const F=Jn(Y);Kt(F);let Dt=null,Rt=1/0;a.forEach(Lt=>{if(Lt.id!==dt.fromNeuronId){const bt=N[Lt.id]||{x:0,y:0},te=Lt.x+bt.x,Ee=Lt.y+bt.y;[{direction:"top",x:te,y:Ee-we},{direction:"right",x:te+we,y:Ee},{direction:"bottom",x:te,y:Ee+we},{direction:"left",x:te-we,y:Ee}].forEach(Ue=>{const Qe=Math.sqrt(Math.pow(F.x-Ue.x,2)+Math.pow(F.y-Ue.y,2));Qe<15&&Qe<Rt&&(Rt=Qe,Dt={neuronId:Lt.id,direction:Ue.direction})})}}),Tt(Dt)}},[dt,a,N,we]),pl=Y=>{sT(Y,v,i,M,f,Wr,we)},Ji=(Y,F,Dt)=>{i(Rt=>Rt.map(Lt=>Lt.id===Y?{...Lt,x:F,y:Dt}:Lt))},Fi=(Y,F,Dt,Rt,Lt)=>{if(dt)if(Y!==dt.fromNeuronId){const bt={id:`connection-${Date.now()}`,fromNeuronId:dt.fromNeuronId,toNeuronId:Y,fromDirection:dt.fromDirection,toDirection:F};s(te=>[...te,bt]),Mt(null),Tt(null)}else Mt(null),Tt(null);else{const bt=a.find(Ma=>Ma.id===Y),te=N[Y]||{x:0,y:0},Ee=bt.x+te.x,wn=bt.y+te.y,Ue={top:{x:Ee,y:wn-we},right:{x:Ee+we,y:wn},bottom:{x:Ee,y:wn+we},left:{x:Ee-we,y:wn}},Qe=Jn(Lt);Mt({fromNeuronId:Y,fromDirection:F,startX:Ue[F].x,startY:Ue[F].y}),Kt(Qe)}},gl=()=>{uT(a,s,mt)},as=Y=>{Y.target.classList.contains("network-svg")&&dt&&(Mt(null),Tt(null))},fn=(Y,F,Dt=()=>pl(Y),Rt=0)=>P.jsx(pe.button,{onClick:Dt,className:"spawn-btn",whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20-Rt},animate:{opacity:1,y:-25},transition:{delay:.1,duration:.1},children:F},Y);return P.jsx("div",{className:"app-container",children:P.jsxs(pe.div,{className:"content-wrapper-with-tables",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,ease:"easeOut"},children:[P.jsxs("div",{className:"left-panel",children:[P.jsx(Kp,{title:"Input Col Vectors",neurons:cn,data:O,setData:D,onHeaderChange:Oe,onCellHover:un,isOutput:!1}),at&&P.jsx("div",{style:{minHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:P.jsx(FS,{color:["#7e7e7e","#979797","#b1b1b1","#cacaca"]})}),tt&&!at&&P.jsx(pe.div,{initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.7,ease:"easeOut"},children:P.jsx(Kp,{title:"Final Predictions",neurons:[],data:[],setData:()=>{},onHeaderChange:()=>{},onCellHover:()=>{},isOutput:!0,truthValues:T,predictions:et,losses:Q})})]}),P.jsxs("div",{className:"center-panel",children:[P.jsxs("div",{className:"main-title-row",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"5px",position:"relative"},children:[P.jsx(pe.h1,{className:"main-title",initial:{opacity:0,y:-30},animate:{opacity:1,y:10},transition:{delay:.3,duration:.8},style:{margin:0},children:"Neural Network Builder"}),P.jsxs("div",{className:"save-load-buttons",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},children:[P.jsx("button",{className:"save-load-btn",title:"Save all table values in cookies",onClick:Da,style:{marginRight:"8px"},children:"Save"}),P.jsx("button",{className:`save-load-btn${Rn?" flash":""}`,title:"Load tables from cookies",onClick:Ea,children:"Load"})]})]}),a.some(Y=>Y.type==="output")&&a.some(Y=>Y.type==="input")&&a.some(Y=>Y.type==="hidden")&&P.jsxs(pe.button,{onClick:Ir,className:`spawn-btn${I?"":" btn-disabled"}`,style:{marginTop:"10px",marginBottom:"0px",fontSize:"16px",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap"},disabled:!I,whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1,duration:.1},children:["START",P.jsx("img",{src:CS,alt:"Train",style:{marginLeft:"10px",width:22,height:22,filter:"invert(1)",transform:"scaleX(-1)"}})]}),P.jsxs(pe.svg,{ref:Kn,width:"100%",height:"400",viewBox:"0 0 800 400",className:"network-svg",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:1},onMouseMove:ml,onClick:as,children:[P.jsx("defs",{children:P.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:P.jsx("polygon",{points:"0 0, 10 3.5, 0 7",className:"arrow-marker"})})}),l.map(Y=>P.jsx(WS,{connection:Y,neurons:a,neuronRadius:we,neuronTransforms:N,isGlowing:p===Y.id,emphasizedConnections:Xt,showForwardPassVisuals:At,inputData:O,currentSampleIndex:ce,neuronHeaders:X,hiddenWeights:_,inputNeurons:cn,hiddenNeurons:Ce,hiddenBiases:L,outputWeights:$,outputBiases:W,showSigmoidPhase:Ge,outputNeurons:vn},Y.id)),dt&&P.jsx($S,{startX:dt.startX,startY:dt.startY,endX:jt.x,endY:jt.y}),a.map(Y=>P.jsx(tT,{id:Y.id,x:Y.x,y:Y.y,radius:Y.radius,label:Y.label,type:Y.type,onDragEnd:Ji,onDragUpdate:ns,onStartConnection:Fi,highlightedDots:qt?.neuronId===Y.id?[qt.direction]:[],isGlowing:y===Y.id,neurons:a,showForwardPassVisuals:At,emphasizedConnections:Xt,hiddenNeurons:Ce,inputNeurons:cn,outputNeurons:vn,neuronHeaders:X,hiddenWeights:_,outputWeights:$,inputData:O,currentSampleIndex:ce,hiddenBiases:L,connections:l,showSigmoidPhase:Ge,outputBiases:W},Y.id))]}),P.jsxs("div",{className:"button-stack",children:[P.jsx("div",{className:"button-dense",children:a.some(Y=>Y.type==="input")&&a.some(Y=>Y.type==="hidden")&&fn("dense","Dense Connect",gl)}),P.jsx("div",{className:"button-container",children:[{type:"input",label:"Add Input"},{type:"hidden",label:"Add Hidden"},...c?Array.from({length:f-1},(Y,F)=>({type:`hidden${F+2}`,label:`Add Hidden ${F+2}`})):[],{type:"output",label:"Add Output"}].map(({type:Y,label:F})=>fn(Y,F))})]})]}),P.jsxs("div",{className:"right-panel",children:[P.jsx(Jp,{title:"Hidden Layer Weights",inputLabels:hl,neuronLabels:Qi,weights:_,biases:L,onWeightChange:bn,onBiasChange:De,onHeaderChange:dl,showSaveLoad:!0,onSave:Da,onLoad:Ea,onCellHover:un}),Ce.length>0&&vn.length>0&&P.jsx(Jp,{title:"Output Layer Weights",inputLabels:Qi,neuronLabels:Ki,weights:$,biases:W,onWeightChange:ts,onBiasChange:es,onHeaderChange:dl,showSaveLoad:!1,onCellHover:un})]})]})})}Jv.createRoot(document.getElementById("root")).render(P.jsx(G.StrictMode,{children:P.jsx(cT,{})}));
