(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();function Gv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Sc={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function Zv(){if(Om)return al;Om=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:s,key:f,ref:c!==void 0?c:null,props:d}}return al.Fragment=i,al.jsx=l,al.jsxs=l,al}var Dm;function Qv(){return Dm||(Dm=1,Sc.exports=Zv()),Sc.exports}var w=Qv(),Tc={exports:{}},yt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function Kv(){if(Mm)return yt;Mm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=v&&T[v]||T["@@iterator"],typeof T=="function"?T:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,O={};function _(T,B,I){this.props=T,this.context=B,this.refs=O,this.updater=I||E}_.prototype.isReactComponent={},_.prototype.setState=function(T,B){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,B,"setState")},_.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function U(){}U.prototype=_.prototype;function Y(T,B,I){this.props=T,this.context=B,this.refs=O,this.updater=I||E}var q=Y.prototype=new U;q.constructor=Y,D(q,_.prototype),q.isPureReactComponent=!0;var $=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function Q(T,B,I,J,it,gt){return I=gt.ref,{$$typeof:a,type:T,key:B,ref:I!==void 0?I:null,props:gt}}function G(T,B){return Q(T.type,B,void 0,void 0,void 0,T.props)}function lt(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function st(T){var B={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(I){return B[I]})}var kt=/\/+/g;function Pt(T,B){return typeof T=="object"&&T!==null&&T.key!=null?st(""+T.key):B.toString(36)}function De(){}function ue(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(De,De):(T.status="pending",T.then(function(B){T.status==="pending"&&(T.status="fulfilled",T.value=B)},function(B){T.status==="pending"&&(T.status="rejected",T.reason=B)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Yt(T,B,I,J,it){var gt=typeof T;(gt==="undefined"||gt==="boolean")&&(T=null);var ot=!1;if(T===null)ot=!0;else switch(gt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(T.$$typeof){case a:case i:ot=!0;break;case y:return ot=T._init,Yt(ot(T._payload),B,I,J,it)}}if(ot)return it=it(T),ot=J===""?"."+Pt(T,0):J,$(it)?(I="",ot!=null&&(I=ot.replace(kt,"$&/")+"/"),Yt(it,B,I,"",function(ke){return ke})):it!=null&&(lt(it)&&(it=G(it,I+(it.key==null||T&&T.key===it.key?"":(""+it.key).replace(kt,"$&/")+"/")+ot)),B.push(it)),1;ot=0;var _t=J===""?".":J+":";if($(T))for(var Dt=0;Dt<T.length;Dt++)J=T[Dt],gt=_t+Pt(J,Dt),ot+=Yt(J,B,I,gt,it);else if(Dt=x(T),typeof Dt=="function")for(T=Dt.call(T),Dt=0;!(J=T.next()).done;)J=J.value,gt=_t+Pt(J,Dt++),ot+=Yt(J,B,I,gt,it);else if(gt==="object"){if(typeof T.then=="function")return Yt(ue(T),B,I,J,it);throw B=String(T),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ot}function k(T,B,I){if(T==null)return T;var J=[],it=0;return Yt(T,J,"","",function(gt){return B.call(I,gt,it++)}),J}function Z(T){if(T._status===-1){var B=T._result;B=B(),B.then(function(I){(T._status===0||T._status===-1)&&(T._status=1,T._result=I)},function(I){(T._status===0||T._status===-1)&&(T._status=2,T._result=I)}),T._status===-1&&(T._status=0,T._result=B)}if(T._status===1)return T._result.default;throw T._result}var W=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function mt(){}return yt.Children={map:k,forEach:function(T,B,I){k(T,function(){B.apply(this,arguments)},I)},count:function(T){var B=0;return k(T,function(){B++}),B},toArray:function(T){return k(T,function(B){return B})||[]},only:function(T){if(!lt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},yt.Component=_,yt.Fragment=l,yt.Profiler=c,yt.PureComponent=Y,yt.StrictMode=s,yt.Suspense=p,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,yt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return P.H.useMemoCache(T)}},yt.cache=function(T){return function(){return T.apply(null,arguments)}},yt.cloneElement=function(T,B,I){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var J=D({},T.props),it=T.key,gt=void 0;if(B!=null)for(ot in B.ref!==void 0&&(gt=void 0),B.key!==void 0&&(it=""+B.key),B)!F.call(B,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&B.ref===void 0||(J[ot]=B[ot]);var ot=arguments.length-2;if(ot===1)J.children=I;else if(1<ot){for(var _t=Array(ot),Dt=0;Dt<ot;Dt++)_t[Dt]=arguments[Dt+2];J.children=_t}return Q(T.type,it,void 0,void 0,gt,J)},yt.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},yt.createElement=function(T,B,I){var J,it={},gt=null;if(B!=null)for(J in B.key!==void 0&&(gt=""+B.key),B)F.call(B,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(it[J]=B[J]);var ot=arguments.length-2;if(ot===1)it.children=I;else if(1<ot){for(var _t=Array(ot),Dt=0;Dt<ot;Dt++)_t[Dt]=arguments[Dt+2];it.children=_t}if(T&&T.defaultProps)for(J in ot=T.defaultProps,ot)it[J]===void 0&&(it[J]=ot[J]);return Q(T,gt,void 0,void 0,null,it)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(T){return{$$typeof:g,render:T}},yt.isValidElement=lt,yt.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:Z}},yt.memo=function(T,B){return{$$typeof:h,type:T,compare:B===void 0?null:B}},yt.startTransition=function(T){var B=P.T,I={};P.T=I;try{var J=T(),it=P.S;it!==null&&it(I,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(mt,W)}catch(gt){W(gt)}finally{P.T=B}},yt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},yt.use=function(T){return P.H.use(T)},yt.useActionState=function(T,B,I){return P.H.useActionState(T,B,I)},yt.useCallback=function(T,B){return P.H.useCallback(T,B)},yt.useContext=function(T){return P.H.useContext(T)},yt.useDebugValue=function(){},yt.useDeferredValue=function(T,B){return P.H.useDeferredValue(T,B)},yt.useEffect=function(T,B,I){var J=P.H;if(typeof I=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(T,B)},yt.useId=function(){return P.H.useId()},yt.useImperativeHandle=function(T,B,I){return P.H.useImperativeHandle(T,B,I)},yt.useInsertionEffect=function(T,B){return P.H.useInsertionEffect(T,B)},yt.useLayoutEffect=function(T,B){return P.H.useLayoutEffect(T,B)},yt.useMemo=function(T,B){return P.H.useMemo(T,B)},yt.useOptimistic=function(T,B){return P.H.useOptimistic(T,B)},yt.useReducer=function(T,B,I){return P.H.useReducer(T,B,I)},yt.useRef=function(T){return P.H.useRef(T)},yt.useState=function(T){return P.H.useState(T)},yt.useSyncExternalStore=function(T,B,I){return P.H.useSyncExternalStore(T,B,I)},yt.useTransition=function(){return P.H.useTransition()},yt.version="19.1.0",yt}var Em;function hf(){return Em||(Em=1,Tc.exports=Kv()),Tc.exports}var X=hf();const Vt=Gv(X);var Ac={exports:{}},il={},Oc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function Fv(){return wm||(wm=1,function(a){function i(k,Z){var W=k.length;k.push(Z);t:for(;0<W;){var mt=W-1>>>1,T=k[mt];if(0<c(T,Z))k[mt]=Z,k[W]=T,W=mt;else break t}}function l(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var Z=k[0],W=k.pop();if(W!==Z){k[0]=W;t:for(var mt=0,T=k.length,B=T>>>1;mt<B;){var I=2*(mt+1)-1,J=k[I],it=I+1,gt=k[it];if(0>c(J,W))it<T&&0>c(gt,J)?(k[mt]=gt,k[it]=W,mt=it):(k[mt]=J,k[I]=W,mt=I);else if(it<T&&0>c(gt,W))k[mt]=gt,k[it]=W,mt=it;else break t}}return Z}function c(k,Z){var W=k.sortIndex-Z.sortIndex;return W!==0?W:k.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var p=[],h=[],y=1,v=null,x=3,E=!1,D=!1,O=!1,_=!1,U=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function $(k){for(var Z=l(h);Z!==null;){if(Z.callback===null)s(h);else if(Z.startTime<=k)s(h),Z.sortIndex=Z.expirationTime,i(p,Z);else break;Z=l(h)}}function P(k){if(O=!1,$(k),!D)if(l(p)!==null)D=!0,F||(F=!0,Pt());else{var Z=l(h);Z!==null&&Yt(P,Z.startTime-k)}}var F=!1,Q=-1,G=5,lt=-1;function st(){return _?!0:!(a.unstable_now()-lt<G)}function kt(){if(_=!1,F){var k=a.unstable_now();lt=k;var Z=!0;try{t:{D=!1,O&&(O=!1,Y(Q),Q=-1),E=!0;var W=x;try{e:{for($(k),v=l(p);v!==null&&!(v.expirationTime>k&&st());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,x=v.priorityLevel;var T=mt(v.expirationTime<=k);if(k=a.unstable_now(),typeof T=="function"){v.callback=T,$(k),Z=!0;break e}v===l(p)&&s(p),$(k)}else s(p);v=l(p)}if(v!==null)Z=!0;else{var B=l(h);B!==null&&Yt(P,B.startTime-k),Z=!1}}break t}finally{v=null,x=W,E=!1}Z=void 0}}finally{Z?Pt():F=!1}}}var Pt;if(typeof q=="function")Pt=function(){q(kt)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,ue=De.port2;De.port1.onmessage=kt,Pt=function(){ue.postMessage(null)}}else Pt=function(){U(kt,0)};function Yt(k,Z){Q=U(function(){k(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(k){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var W=x;x=Z;try{return k()}finally{x=W}},a.unstable_requestPaint=function(){_=!0},a.unstable_runWithPriority=function(k,Z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var W=x;x=k;try{return Z()}finally{x=W}},a.unstable_scheduleCallback=function(k,Z,W){var mt=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?mt+W:mt):W=mt,k){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=W+T,k={id:y++,callback:Z,priorityLevel:k,startTime:W,expirationTime:T,sortIndex:-1},W>mt?(k.sortIndex=W,i(h,k),l(p)===null&&k===l(h)&&(O?(Y(Q),Q=-1):O=!0,Yt(P,W-mt))):(k.sortIndex=T,i(p,k),D||E||(D=!0,F||(F=!0,Pt()))),k},a.unstable_shouldYield=st,a.unstable_wrapCallback=function(k){var Z=x;return function(){var W=x;x=Z;try{return k.apply(this,arguments)}finally{x=W}}}}(Dc)),Dc}var Rm;function Jv(){return Rm||(Rm=1,Oc.exports=Fv()),Oc.exports}var Mc={exports:{}},Be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function $v(){if(Cm)return Be;Cm=1;var a=hf();function i(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,h,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:p,containerInfo:h,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Be.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return d(p,h,null,y)},Be.flushSync=function(p){var h=f.T,y=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=h,s.p=y,s.d.f()}},Be.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(p,h))},Be.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Be.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,v=g(y,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?s.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:E}):y==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Be.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=g(h.as,h.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(p)},Be.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,v=g(y,h.crossOrigin);s.d.L(p,y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Be.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=g(h.as,h.crossOrigin);s.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(p)},Be.requestFormReset=function(p){s.d.r(p)},Be.unstable_batchedUpdates=function(p,h){return p(h)},Be.useFormState=function(p,h,y){return f.H.useFormState(p,h,y)},Be.useFormStatus=function(){return f.H.useHostTransitionStatus()},Be.version="19.1.0",Be}var zm;function Wv(){if(zm)return Mc.exports;zm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Mc.exports=$v(),Mc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function Iv(){if(Nm)return il;Nm=1;var a=Jv(),i=hf(),l=Wv();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(s(188))}function p(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,o=e;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return g(r),t;if(u===o)return g(r),e;u=u.sibling}throw Error(s(188))}if(n.return!==o.return)n=r,o=u;else{for(var m=!1,b=r.child;b;){if(b===n){m=!0,n=r,o=u;break}if(b===o){m=!0,o=r,n=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===n){m=!0,n=u,o=r;break}if(b===o){m=!0,o=u,n=r;break}b=b.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),q=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),kt=Symbol.iterator;function Pt(t){return t===null||typeof t!="object"?null:(t=kt&&t[kt]||t["@@iterator"],typeof t=="function"?t:null)}var De=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===De?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case _:return"Profiler";case O:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case q:return(t.displayName||"Context")+".Provider";case Y:return(t._context.displayName||"Context")+".Consumer";case $:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return e=t.displayName||null,e!==null?e:ue(t.type)||"Memo";case G:e=t._payload,t=t._init;try{return ue(t(e))}catch{}}return null}var Yt=Array.isArray,k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},mt=[],T=-1;function B(t){return{current:t}}function I(t){0>T||(t.current=mt[T],mt[T]=null,T--)}function J(t,e){T++,mt[T]=t.current,t.current=e}var it=B(null),gt=B(null),ot=B(null),_t=B(null);function Dt(t,e){switch(J(ot,e),J(gt,t),J(it,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?W0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=W0(e),t=I0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}I(it),J(it,t)}function ke(){I(it),I(gt),I(ot)}function Ct(t){t.memoizedState!==null&&J(_t,t);var e=it.current,n=I0(e,t.type);e!==n&&(J(gt,t),J(it,n))}function Kt(t){gt.current===t&&(I(it),I(gt)),_t.current===t&&(I(_t),Wo._currentValue=W)}var Xt=Object.prototype.hasOwnProperty,wt=a.unstable_scheduleCallback,et=a.unstable_cancelCallback,St=a.unstable_shouldYield,Mt=a.unstable_requestPaint,Ot=a.unstable_now,ce=a.unstable_getCurrentPriorityLevel,Wt=a.unstable_ImmediatePriority,He=a.unstable_UserBlockingPriority,pe=a.unstable_NormalPriority,$e=a.unstable_LowPriority,wn=a.unstable_IdlePriority,Rn=a.log,Hn=a.unstable_setDisableYieldValue,Me=null,ge=null;function rn(t){if(typeof Rn=="function"&&Hn(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(Me,t)}catch{}}var _e=Math.clz32?Math.clz32:Ml,ps=Math.log,Dl=Math.LN2;function Ml(t){return t>>>=0,t===0?32:31-(ps(t)/Dl|0)|0}var ui=256,ci=4194304;function Cn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,e,n){var o=t.pendingLanes;if(o===0)return 0;var r=0,u=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~u,o!==0?r=Cn(o):(m&=b,m!==0?r=Cn(m):n||(n=b&~t,n!==0&&(r=Cn(n))))):(b=o&~u,b!==0?r=Cn(b):m!==0?r=Cn(m):n||(n=o&~t,n!==0&&(r=Cn(n)))),r===0?0:e!==0&&e!==r&&(e&u)===0&&(u=r&-r,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:r}function Sn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Xe(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ba(){var t=ui;return ui<<=1,(ui&4194048)===0&&(ui=256),t}function Ge(){var t=ci;return ci<<=1,(ci&62914560)===0&&(ci=4194304),t}function oo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function El(t,e,n,o,r,u){var m=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,C=t.hiddenUpdates;for(n=m&~n;0<n;){var V=31-_e(n),H=1<<V;b[V]=0,S[V]=-1;var z=C[V];if(z!==null)for(C[V]=null,V=0;V<z.length;V++){var N=z[V];N!==null&&(N.lane&=-536870913)}n&=~H}o!==0&&wl(t,o,0),u!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=u&~(m&~e))}function wl(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-_e(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|n&4194090}function Rl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-_e(n),r=1<<o;r&e|t[o]&e&&(t[o]|=e),n&=~r}}function lo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ro(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cl(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:bm(t.type))}function gs(t,e){var n=Z.p;try{return Z.p=t,e()}finally{Z.p=n}}var zn=Math.random().toString(36).slice(2),Se="__reactFiber$"+zn,Ve="__reactProps$"+zn,Pn="__reactContainer$"+zn,fi="__reactEvents$"+zn,zl="__reactListeners$"+zn,so="__reactHandles$"+zn,sn="__reactResources$"+zn,Ee="__reactMarker$"+zn;function un(t){delete t[Se],delete t[Ve],delete t[fi],delete t[zl],delete t[so]}function ua(t){var e=t[Se];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[Se]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[Se])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function Yn(t){if(t=t[Se]||t[Pn]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function La(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Xn(t){var e=t[sn];return e||(e=t[sn]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function fe(t){t[Ee]=!0}var Nl=new Set,kl={};function Gn(t,e){ca(t,e),ca(t+"Capture",e)}function ca(t,e){for(kl[t]=e,t=0;t<e.length;t++)Nl.add(e[t])}var ys=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_l={},uo={};function L(t){return Xt.call(uo,t)?!0:Xt.call(_l,t)?!1:ys.test(t)?uo[t]=!0:(_l[t]=!0,!1)}function K(t,e,n){if(L(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function dt(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function ht(t,e,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+o)}}var zt,pt;function Gt(t){if(zt===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zt=e&&e[1]||"",pt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+t+pt}var bt=!1;function It(t,e){if(!t||bt)return"";bt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(N){var z=N}Reflect.construct(t,[],H)}else{try{H.call()}catch(N){z=N}t.call(H.prototype)}}else{try{throw Error()}catch(N){z=N}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(N){if(N&&z&&typeof N.stack=="string")return[N.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var S=m.split(`
`),C=b.split(`
`);for(r=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;r<C.length&&!C[r].includes("DetermineComponentFrameRoot");)r++;if(o===S.length||r===C.length)for(o=S.length-1,r=C.length-1;1<=o&&0<=r&&S[o]!==C[r];)r--;for(;1<=o&&0<=r;o--,r--)if(S[o]!==C[r]){if(o!==1||r!==1)do if(o--,r--,0>r||S[o]!==C[r]){var V=`
`+S[o].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=o&&0<=r);break}}}finally{bt=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Gt(n):""}function je(t){switch(t.tag){case 26:case 27:case 5:return Gt(t.type);case 16:return Gt("Lazy");case 13:return Gt("Suspense");case 19:return Gt("SuspenseList");case 0:case 15:return It(t.type,!1);case 11:return It(t.type.render,!1);case 1:return It(t.type,!0);case 31:return Gt("Activity");default:return""}}function qe(t){try{var e="";do e+=je(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function we(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vl(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hy(t){var e=Vl(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(m){o=""+m,u.call(this,m)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jl(t){t._valueTracker||(t._valueTracker=Hy(t))}function Kf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Vl(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qy=/[\n"\\]/g;function cn(t){return t.replace(qy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bs(t,e,n,o,r,u,m,b){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+we(e)):t.value!==""+we(e)&&(t.value=""+we(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?vs(t,m,we(e)):n!=null?vs(t,m,we(n)):o!=null&&t.removeAttribute("value"),r==null&&u!=null&&(t.defaultChecked=!!u),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+we(b):t.removeAttribute("name")}function Ff(t,e,n,o,r,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+we(n):"",e=e!=null?""+we(e):n,b||e===t.value||(t.value=e),t.defaultValue=e}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m)}function vs(t,e,n){e==="number"&&Ul(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function di(t,e,n,o){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&o&&(t[n].defaultSelected=!0)}else{for(n=""+we(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Jf(t,e,n){if(e!=null&&(e=""+we(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+we(n):""}function $f(t,e,n,o){if(e==null){if(o!=null){if(n!=null)throw Error(s(92));if(Yt(o)){if(1<o.length)throw Error(s(93));o=o[0]}n=o}n==null&&(n=""),e=n}n=we(e),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o)}function hi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Py=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wf(t,e,n){var o=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,n):typeof n!="number"||n===0||Py.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function If(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var r in e)o=e[r],e.hasOwnProperty(r)&&n[r]!==o&&Wf(t,r,o)}else for(var u in e)e.hasOwnProperty(u)&&Wf(t,u,e[u])}function xs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bl(t){return Xy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ss=null;function Ts(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mi=null,pi=null;function td(t){var e=Yn(t);if(e&&(t=e.stateNode)){var n=t[Ve]||null;t:switch(t=e.stateNode,e.type){case"input":if(bs(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+cn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var r=o[Ve]||null;if(!r)throw Error(s(90));bs(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)o=n[e],o.form===t.form&&Kf(o)}break t;case"textarea":Jf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&di(t,!!n.multiple,e,!1)}}}var As=!1;function ed(t,e,n){if(As)return t(e,n);As=!0;try{var o=t(e);return o}finally{if(As=!1,(mi!==null||pi!==null)&&(Ar(),mi&&(e=mi,t=pi,pi=mi=null,td(e),t)))for(e=0;e<t.length;e++)td(t[e])}}function co(t,e){var n=t.stateNode;if(n===null)return null;var o=n[Ve]||null;if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=!1;if(Zn)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Os=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Os=!1}var fa=null,Ds=null,Ll=null;function nd(){if(Ll)return Ll;var t,e=Ds,n=e.length,o,r="value"in fa?fa.value:fa.textContent,u=r.length;for(t=0;t<n&&e[t]===r[t];t++);var m=n-t;for(o=1;o<=m&&e[n-o]===r[u-o];o++);return Ll=r.slice(t,1<o?1-o:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function ad(){return!1}function Ze(t){function e(n,o,r,u,m){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(n=t[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ql:ad,this.isPropagationStopped=ad,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),e}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Ze(Ha),ho=y({},Ha,{view:0,detail:0}),Gy=Ze(ho),Ms,Es,mo,Yl=y({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Ms=t.screenX-mo.screenX,Es=t.screenY-mo.screenY):Es=Ms=0,mo=t),Ms)},movementY:function(t){return"movementY"in t?t.movementY:Es}}),id=Ze(Yl),Zy=y({},Yl,{dataTransfer:0}),Qy=Ze(Zy),Ky=y({},ho,{relatedTarget:0}),ws=Ze(Ky),Fy=y({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Jy=Ze(Fy),$y=y({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wy=Ze($y),Iy=y({},Ha,{data:0}),od=Ze(Iy),tb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ab(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nb[t])?!!e[t]:!1}function Rs(){return ab}var ib=y({},ho,{key:function(t){if(t.key){var e=tb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ob=Ze(ib),lb=y({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=Ze(lb),rb=y({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),sb=Ze(rb),ub=y({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),cb=Ze(ub),fb=y({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),db=Ze(fb),hb=y({},Ha,{newState:0,oldState:0}),mb=Ze(hb),pb=[9,13,27,32],Cs=Zn&&"CompositionEvent"in window,po=null;Zn&&"documentMode"in document&&(po=document.documentMode);var gb=Zn&&"TextEvent"in window&&!po,rd=Zn&&(!Cs||po&&8<po&&11>=po),sd=" ",ud=!1;function cd(t,e){switch(t){case"keyup":return pb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function yb(t,e){switch(t){case"compositionend":return fd(e);case"keypress":return e.which!==32?null:(ud=!0,sd);case"textInput":return t=e.data,t===sd&&ud?null:t;default:return null}}function bb(t,e){if(gi)return t==="compositionend"||!Cs&&cd(t,e)?(t=nd(),Ll=Ds=fa=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rd&&e.locale!=="ko"?null:e.data;default:return null}}var vb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vb[t.type]:e==="textarea"}function hd(t,e,n,o){mi?pi?pi.push(o):pi=[o]:mi=o,e=Rr(e,"onChange"),0<e.length&&(n=new Pl("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var go=null,yo=null;function xb(t){Q0(t,0)}function Xl(t){var e=La(t);if(Kf(e))return t}function md(t,e){if(t==="change")return e}var pd=!1;if(Zn){var zs;if(Zn){var Ns="oninput"in document;if(!Ns){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),Ns=typeof gd.oninput=="function"}zs=Ns}else zs=!1;pd=zs&&(!document.documentMode||9<document.documentMode)}function yd(){go&&(go.detachEvent("onpropertychange",bd),yo=go=null)}function bd(t){if(t.propertyName==="value"&&Xl(yo)){var e=[];hd(e,yo,t,Ts(t)),ed(xb,e)}}function Sb(t,e,n){t==="focusin"?(yd(),go=e,yo=n,go.attachEvent("onpropertychange",bd)):t==="focusout"&&yd()}function Tb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(yo)}function Ab(t,e){if(t==="click")return Xl(e)}function Ob(t,e){if(t==="input"||t==="change")return Xl(e)}function Db(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var We=typeof Object.is=="function"?Object.is:Db;function bo(t,e){if(We(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Xt.call(e,r)||!We(t[r],e[r]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,e){var n=vd(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=vd(n)}}function Sd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Td(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ul(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function ks(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Mb=Zn&&"documentMode"in document&&11>=document.documentMode,yi=null,_s=null,vo=null,Vs=!1;function Ad(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vs||yi==null||yi!==Ul(o)||(o=yi,"selectionStart"in o&&ks(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&bo(vo,o)||(vo=o,o=Rr(_s,"onSelect"),0<o.length&&(e=new Pl("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=yi)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bi={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},js={},Od={};Zn&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);function Pa(t){if(js[t])return js[t];if(!bi[t])return t;var e=bi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Od)return js[t]=e[n];return t}var Dd=Pa("animationend"),Md=Pa("animationiteration"),Ed=Pa("animationstart"),Eb=Pa("transitionrun"),wb=Pa("transitionstart"),Rb=Pa("transitioncancel"),wd=Pa("transitionend"),Rd=new Map,Us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Us.push("scrollEnd");function Tn(t,e){Rd.set(t,e),Gn(e,[t])}var Cd=new WeakMap;function fn(t,e){if(typeof t=="object"&&t!==null){var n=Cd.get(t);return n!==void 0?n:(e={value:t,source:e,stack:qe(e)},Cd.set(t,e),e)}return{value:t,source:e,stack:qe(e)}}var dn=[],vi=0,Bs=0;function Gl(){for(var t=vi,e=Bs=vi=0;e<t;){var n=dn[e];dn[e++]=null;var o=dn[e];dn[e++]=null;var r=dn[e];dn[e++]=null;var u=dn[e];if(dn[e++]=null,o!==null&&r!==null){var m=o.pending;m===null?r.next=r:(r.next=m.next,m.next=r),o.pending=r}u!==0&&zd(n,r,u)}}function Zl(t,e,n,o){dn[vi++]=t,dn[vi++]=e,dn[vi++]=n,dn[vi++]=o,Bs|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ls(t,e,n,o){return Zl(t,e,n,o),Ql(t)}function xi(t,e){return Zl(t,null,null,e),Ql(t)}function zd(t,e,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var r=!1,u=t.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(r=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,r&&e!==null&&(r=31-_e(n),t=u.hiddenUpdates,o=t[r],o===null?t[r]=[e]:o.push(e),e.lane=n|536870912),u):null}function Ql(t){if(50<Xo)throw Xo=0,Gu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Si={};function Cb(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(t,e,n,o){return new Cb(t,e,n,o)}function Hs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qn(t,e){var n=t.alternate;return n===null?(n=Ie(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Nd(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Kl(t,e,n,o,r,u){var m=0;if(o=t,typeof t=="function")Hs(t)&&(m=1);else if(typeof t=="string")m=Nv(t,n,it.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case lt:return t=Ie(31,n,e,r),t.elementType=lt,t.lanes=u,t;case D:return Ya(n.children,r,u,e);case O:m=8,r|=24;break;case _:return t=Ie(12,n,e,r|2),t.elementType=_,t.lanes=u,t;case P:return t=Ie(13,n,e,r),t.elementType=P,t.lanes=u,t;case F:return t=Ie(19,n,e,r),t.elementType=F,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:case q:m=10;break t;case Y:m=9;break t;case $:m=11;break t;case Q:m=14;break t;case G:m=16,o=null;break t}m=29,n=Error(s(130,t===null?"null":typeof t,"")),o=null}return e=Ie(m,n,e,r),e.elementType=t,e.type=o,e.lanes=u,e}function Ya(t,e,n,o){return t=Ie(7,t,o,e),t.lanes=n,t}function qs(t,e,n){return t=Ie(6,t,null,e),t.lanes=n,t}function Ps(t,e,n){return e=Ie(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ti=[],Ai=0,Fl=null,Jl=0,hn=[],mn=0,Xa=null,Kn=1,Fn="";function Ga(t,e){Ti[Ai++]=Jl,Ti[Ai++]=Fl,Fl=t,Jl=e}function kd(t,e,n){hn[mn++]=Kn,hn[mn++]=Fn,hn[mn++]=Xa,Xa=t;var o=Kn;t=Fn;var r=32-_e(o)-1;o&=~(1<<r),n+=1;var u=32-_e(e)+r;if(30<u){var m=r-r%5;u=(o&(1<<m)-1).toString(32),o>>=m,r-=m,Kn=1<<32-_e(e)+r|n<<r|o,Fn=u+t}else Kn=1<<u|n<<r|o,Fn=t}function Ys(t){t.return!==null&&(Ga(t,1),kd(t,1,0))}function Xs(t){for(;t===Fl;)Fl=Ti[--Ai],Ti[Ai]=null,Jl=Ti[--Ai],Ti[Ai]=null;for(;t===Xa;)Xa=hn[--mn],hn[mn]=null,Fn=hn[--mn],hn[mn]=null,Kn=hn[--mn],hn[mn]=null}var Pe=null,ne=null,Nt=!1,Za=null,Nn=!1,Gs=Error(s(519));function Qa(t){var e=Error(s(418,""));throw To(fn(e,t)),Gs}function _d(t){var e=t.stateNode,n=t.type,o=t.memoizedProps;switch(e[Se]=t,e[Ve]=o,n){case"dialog":At("cancel",e),At("close",e);break;case"iframe":case"object":case"embed":At("load",e);break;case"video":case"audio":for(n=0;n<Zo.length;n++)At(Zo[n],e);break;case"source":At("error",e);break;case"img":case"image":case"link":At("error",e),At("load",e);break;case"details":At("toggle",e);break;case"input":At("invalid",e),Ff(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),jl(e);break;case"select":At("invalid",e);break;case"textarea":At("invalid",e),$f(e,o.value,o.defaultValue,o.children),jl(e)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||o.suppressHydrationWarning===!0||$0(e.textContent,n)?(o.popover!=null&&(At("beforetoggle",e),At("toggle",e)),o.onScroll!=null&&At("scroll",e),o.onScrollEnd!=null&&At("scrollend",e),o.onClick!=null&&(e.onclick=Cr),e=!0):e=!1,e||Qa(t)}function Vd(t){for(Pe=t.return;Pe;)switch(Pe.tag){case 5:case 13:Nn=!1;return;case 27:case 3:Nn=!0;return;default:Pe=Pe.return}}function xo(t){if(t!==Pe)return!1;if(!Nt)return Vd(t),Nt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||rc(t.type,t.memoizedProps)),n=!n),n&&ne&&Qa(t),Vd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){ne=On(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}ne=null}}else e===27?(e=ne,Ea(t.type)?(t=fc,fc=null,ne=t):ne=e):ne=Pe?On(t.stateNode.nextSibling):null;return!0}function So(){ne=Pe=null,Nt=!1}function jd(){var t=Za;return t!==null&&(Fe===null?Fe=t:Fe.push.apply(Fe,t),Za=null),t}function To(t){Za===null?Za=[t]:Za.push(t)}var Zs=B(null),Ka=null,Jn=null;function da(t,e,n){J(Zs,e._currentValue),e._currentValue=n}function $n(t){t._currentValue=Zs.current,I(Zs)}function Qs(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e,n,o){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var u=r.dependencies;if(u!==null){var m=r.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=r;for(var S=0;S<e.length;S++)if(b.context===e[S]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),Qs(u.return,n,t),o||(m=null);break t}u=b.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(s(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),Qs(m,n,t),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===t){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Ao(t,e,n,o){t=null;for(var r=e,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=r.type;We(r.pendingProps.value,m.value)||(t!==null?t.push(b):t=[b])}}else if(r===_t.current){if(m=r.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}r=r.return}t!==null&&Ks(e,t,n,o),e.flags|=262144}function $l(t){for(t=t.firstContext;t!==null;){if(!We(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fa(t){Ka=t,Jn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ue(t){return Ud(Ka,t)}function Wl(t,e){return Ka===null&&Fa(t),Ud(t,e)}function Ud(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Jn===null){if(t===null)throw Error(s(308));Jn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Jn=Jn.next=e;return n}var zb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Nb=a.unstable_scheduleCallback,kb=a.unstable_NormalPriority,be={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fs(){return{controller:new zb,data:new Map,refCount:0}}function Oo(t){t.refCount--,t.refCount===0&&Nb(kb,function(){t.controller.abort()})}var Do=null,Js=0,Oi=0,Di=null;function _b(t,e){if(Do===null){var n=Do=[];Js=0,Oi=Wu(),Di={status:"pending",value:void 0,then:function(o){n.push(o)}}}return Js++,e.then(Bd,Bd),e}function Bd(){if(--Js===0&&Do!==null){Di!==null&&(Di.status="fulfilled");var t=Do;Do=null,Oi=0,Di=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Vb(t,e){var n=[],o={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(o.status="rejected",o.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),o}var Ld=k.S;k.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&_b(t,e),Ld!==null&&Ld(t,e)};var Ja=B(null);function $s(){var t=Ja.current;return t!==null?t:Qt.pooledCache}function Il(t,e){e===null?J(Ja,Ja.current):J(Ja,e.pool)}function Hd(){var t=$s();return t===null?null:{parent:be._currentValue,pool:t}}var Mo=Error(s(460)),qd=Error(s(474)),tr=Error(s(542)),Ws={then:function(){}};function Pd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function er(){}function Yd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(er,er),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Gd(t),t;default:if(typeof e.status=="string")e.then(er,er);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=o}},function(o){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Gd(t),t}throw Eo=e,Mo}}var Eo=null;function Xd(){if(Eo===null)throw Error(s(459));var t=Eo;return Eo=null,t}function Gd(t){if(t===Mo||t===tr)throw Error(s(483))}var ha=!1;function Is(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(jt&2)!==0){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,e=Ql(t),zd(t,null,n),e}return Zl(t,o,e,n),Ql(t)}function wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Rl(t,n)}}function eu(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?r=u=e:u=u.next=e}else r=u=e;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var nu=!1;function Ro(){if(nu){var t=Di;if(t!==null)throw t}}function Co(t,e,n,o){nu=!1;var r=t.updateQueue;ha=!1;var u=r.firstBaseUpdate,m=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var S=b,C=S.next;S.next=null,m===null?u=C:m.next=C,m=S;var V=t.alternate;V!==null&&(V=V.updateQueue,b=V.lastBaseUpdate,b!==m&&(b===null?V.firstBaseUpdate=C:b.next=C,V.lastBaseUpdate=S))}if(u!==null){var H=r.baseState;m=0,V=C=S=null,b=u;do{var z=b.lane&-536870913,N=z!==b.lane;if(N?(Et&z)===z:(o&z)===z){z!==0&&z===Oi&&(nu=!0),V!==null&&(V=V.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ct=t,rt=b;z=e;var qt=n;switch(rt.tag){case 1:if(ct=rt.payload,typeof ct=="function"){H=ct.call(qt,H,z);break t}H=ct;break t;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=rt.payload,z=typeof ct=="function"?ct.call(qt,H,z):ct,z==null)break t;H=y({},H,z);break t;case 2:ha=!0}}z=b.callback,z!==null&&(t.flags|=64,N&&(t.flags|=8192),N=r.callbacks,N===null?r.callbacks=[z]:N.push(z))}else N={lane:z,tag:b.tag,payload:b.payload,callback:b.callback,next:null},V===null?(C=V=N,S=H):V=V.next=N,m|=z;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;N=b,b=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);V===null&&(S=H),r.baseState=S,r.firstBaseUpdate=C,r.lastBaseUpdate=V,u===null&&(r.shared.lanes=0),Aa|=m,t.lanes=m,t.memoizedState=H}}function Zd(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Qd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Zd(n[t],e)}var Mi=B(null),nr=B(0);function Kd(t,e){t=ia,J(nr,t),J(Mi,e),ia=t|e.baseLanes}function au(){J(nr,ia),J(Mi,Mi.current)}function iu(){ia=nr.current,I(Mi),I(nr)}var ga=0,vt=null,Lt=null,de=null,ar=!1,Ei=!1,$a=!1,ir=0,zo=0,wi=null,jb=0;function le(){throw Error(s(321))}function ou(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!We(t[n],e[n]))return!1;return!0}function lu(t,e,n,o,r,u){return ga=u,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,k.H=t===null||t.memoizedState===null?zh:Nh,$a=!1,u=n(o,r),$a=!1,Ei&&(u=Jd(e,n,o,r)),Fd(t),u}function Fd(t){k.H=cr;var e=Lt!==null&&Lt.next!==null;if(ga=0,de=Lt=vt=null,ar=!1,zo=0,wi=null,e)throw Error(s(300));t===null||Te||(t=t.dependencies,t!==null&&$l(t)&&(Te=!0))}function Jd(t,e,n,o){vt=t;var r=0;do{if(Ei&&(wi=null),zo=0,Ei=!1,25<=r)throw Error(s(301));if(r+=1,de=Lt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}k.H=Yb,u=e(n,o)}while(Ei);return u}function Ub(){var t=k.H,e=t.useState()[0];return e=typeof e.then=="function"?No(e):e,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(vt.flags|=1024),e}function ru(){var t=ir!==0;return ir=0,t}function su(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function uu(t){if(ar){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ar=!1}ga=0,de=Lt=vt=null,Ei=!1,zo=ir=0,wi=null}function Qe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?vt.memoizedState=de=t:de=de.next=t,de}function he(){if(Lt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=de===null?vt.memoizedState:de.next;if(e!==null)de=e,Lt=t;else{if(t===null)throw vt.alternate===null?Error(s(467)):Error(s(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},de===null?vt.memoizedState=de=t:de=de.next=t}return de}function cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var e=zo;return zo+=1,wi===null&&(wi=[]),t=Yd(wi,t,e),e=vt,(de===null?e.memoizedState:de.next)===null&&(e=e.alternate,k.H=e===null||e.memoizedState===null?zh:Nh),t}function or(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===q)return Ue(t)}throw Error(s(438,String(t)))}function fu(t){var e=null,n=vt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=cu(),vt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),o=0;o<t;o++)n[o]=st;return e.index++,n}function Wn(t,e){return typeof e=="function"?e(t):e}function lr(t){var e=he();return du(e,Lt,t)}function du(t,e,n){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var r=t.baseQueue,u=o.pending;if(u!==null){if(r!==null){var m=r.next;r.next=u.next,u.next=m}e.baseQueue=r=u,o.pending=null}if(u=t.baseState,r===null)t.memoizedState=u;else{e=r.next;var b=m=null,S=null,C=e,V=!1;do{var H=C.lane&-536870913;if(H!==C.lane?(Et&H)===H:(ga&H)===H){var z=C.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),H===Oi&&(V=!0);else if((ga&z)===z){C=C.next,z===Oi&&(V=!0);continue}else H={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(b=S=H,m=u):S=S.next=H,vt.lanes|=z,Aa|=z;H=C.action,$a&&n(u,H),u=C.hasEagerState?C.eagerState:n(u,H)}else z={lane:H,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(b=S=z,m=u):S=S.next=z,vt.lanes|=H,Aa|=H;C=C.next}while(C!==null&&C!==e);if(S===null?m=u:S.next=b,!We(u,t.memoizedState)&&(Te=!0,V&&(n=Di,n!==null)))throw n;t.memoizedState=u,t.baseState=m,t.baseQueue=S,o.lastRenderedState=u}return r===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hu(t){var e=he(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var o=n.dispatch,r=n.pending,u=e.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do u=t(u,m.action),m=m.next;while(m!==r);We(u,e.memoizedState)||(Te=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,o]}function $d(t,e,n){var o=vt,r=he(),u=Nt;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var m=!We((Lt||r).memoizedState,n);m&&(r.memoizedState=n,Te=!0),r=r.queue;var b=th.bind(null,o,r,t);if(ko(2048,8,b,[t]),r.getSnapshot!==e||m||de!==null&&de.memoizedState.tag&1){if(o.flags|=2048,Ri(9,rr(),Id.bind(null,o,r,n,e),null),Qt===null)throw Error(s(349));u||(ga&124)!==0||Wd(o,e,n)}return n}function Wd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e=cu(),vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Id(t,e,n,o){e.value=n,e.getSnapshot=o,eh(e)&&nh(t)}function th(t,e,n){return n(function(){eh(e)&&nh(t)})}function eh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!We(t,n)}catch{return!0}}function nh(t){var e=xi(t,2);e!==null&&on(e,t,2)}function mu(t){var e=Qe();if(typeof t=="function"){var n=t;if(t=n(),$a){rn(!0);try{n()}finally{rn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:t},e}function ah(t,e,n,o){return t.baseState=n,du(t,Lt,typeof o=="function"?o:Wn)}function Bb(t,e,n,o,r){if(ur(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};k.T!==null?n(!0):u.isTransition=!1,o(u),n=e.pending,n===null?(u.next=e.pending=u,ih(e,u)):(u.next=n.next,e.pending=n.next=u)}}function ih(t,e){var n=e.action,o=e.payload,r=t.state;if(e.isTransition){var u=k.T,m={};k.T=m;try{var b=n(r,o),S=k.S;S!==null&&S(m,b),oh(t,e,b)}catch(C){pu(t,e,C)}finally{k.T=u}}else try{u=n(r,o),oh(t,e,u)}catch(C){pu(t,e,C)}}function oh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){lh(t,e,o)},function(o){return pu(t,e,o)}):lh(t,e,n)}function lh(t,e,n){e.status="fulfilled",e.value=n,rh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,ih(t,n)))}function pu(t,e,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=n,rh(e),e=e.next;while(e!==o)}t.action=null}function rh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function sh(t,e){return e}function uh(t,e){if(Nt){var n=Qt.formState;if(n!==null){t:{var o=vt;if(Nt){if(ne){e:{for(var r=ne,u=Nn;r.nodeType!==8;){if(!u){r=null;break e}if(r=On(r.nextSibling),r===null){r=null;break e}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){ne=On(r.nextSibling),o=r.data==="F!";break t}}Qa(o)}o=!1}o&&(e=n[0])}}return n=Qe(),n.memoizedState=n.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sh,lastRenderedState:e},n.queue=o,n=wh.bind(null,vt,o),o.dispatch=n,o=mu(!1),u=xu.bind(null,vt,!1,o.queue),o=Qe(),r={state:e,dispatch:null,action:t,pending:null},o.queue=r,n=Bb.bind(null,vt,r,u,n),r.dispatch=n,o.memoizedState=t,[e,n,!1]}function ch(t){var e=he();return fh(e,Lt,t)}function fh(t,e,n){if(e=du(t,e,sh)[0],t=lr(Wn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=No(e)}catch(m){throw m===Mo?tr:m}else o=e;e=he();var r=e.queue,u=r.dispatch;return n!==e.memoizedState&&(vt.flags|=2048,Ri(9,rr(),Lb.bind(null,r,n),null)),[o,u,t]}function Lb(t,e){t.action=e}function dh(t){var e=he(),n=Lt;if(n!==null)return fh(e,n,t);he(),e=e.memoizedState,n=he();var o=n.queue.dispatch;return n.memoizedState=t,[e,o,!1]}function Ri(t,e,n,o){return t={tag:t,create:n,deps:o,inst:e,next:null},e=vt.updateQueue,e===null&&(e=cu(),vt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t),t}function rr(){return{destroy:void 0,resource:void 0}}function hh(){return he().memoizedState}function sr(t,e,n,o){var r=Qe();o=o===void 0?null:o,vt.flags|=t,r.memoizedState=Ri(1|e,rr(),n,o)}function ko(t,e,n,o){var r=he();o=o===void 0?null:o;var u=r.memoizedState.inst;Lt!==null&&o!==null&&ou(o,Lt.memoizedState.deps)?r.memoizedState=Ri(e,u,n,o):(vt.flags|=t,r.memoizedState=Ri(1|e,u,n,o))}function mh(t,e){sr(8390656,8,t,e)}function ph(t,e){ko(2048,8,t,e)}function gh(t,e){return ko(4,2,t,e)}function yh(t,e){return ko(4,4,t,e)}function bh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vh(t,e,n){n=n!=null?n.concat([t]):null,ko(4,4,bh.bind(null,e,t),n)}function gu(){}function xh(t,e){var n=he();e=e===void 0?null:e;var o=n.memoizedState;return e!==null&&ou(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function Sh(t,e){var n=he();e=e===void 0?null:e;var o=n.memoizedState;if(e!==null&&ou(e,o[1]))return o[0];if(o=t(),$a){rn(!0);try{t()}finally{rn(!1)}}return n.memoizedState=[o,e],o}function yu(t,e,n){return n===void 0||(ga&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=O0(),vt.lanes|=t,Aa|=t,n)}function Th(t,e,n,o){return We(n,e)?n:Mi.current!==null?(t=yu(t,n,o),We(t,e)||(Te=!0),t):(ga&42)===0?(Te=!0,t.memoizedState=n):(t=O0(),vt.lanes|=t,Aa|=t,e)}function Ah(t,e,n,o,r){var u=Z.p;Z.p=u!==0&&8>u?u:8;var m=k.T,b={};k.T=b,xu(t,!1,e,n);try{var S=r(),C=k.S;if(C!==null&&C(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var V=Vb(S,o);_o(t,e,V,an(t))}else _o(t,e,o,an(t))}catch(H){_o(t,e,{then:function(){},status:"rejected",reason:H},an())}finally{Z.p=u,k.T=m}}function Hb(){}function bu(t,e,n,o){if(t.tag!==5)throw Error(s(476));var r=Oh(t).queue;Ah(t,r,e,W,n===null?Hb:function(){return Dh(t),n(o)})}function Oh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:W},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Dh(t){var e=Oh(t).next.queue;_o(t,e,{},an())}function vu(){return Ue(Wo)}function Mh(){return he().memoizedState}function Eh(){return he().memoizedState}function qb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=an();t=ma(n);var o=pa(e,t,n);o!==null&&(on(o,e,n),wo(o,e,n)),e={cache:Fs()},t.payload=e;return}e=e.return}}function Pb(t,e,n){var o=an();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ur(t)?Rh(e,n):(n=Ls(t,e,n,o),n!==null&&(on(n,t,o),Ch(n,e,o)))}function wh(t,e,n){var o=an();_o(t,e,n,o)}function _o(t,e,n,o){var r={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ur(t))Rh(e,r);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var m=e.lastRenderedState,b=u(m,n);if(r.hasEagerState=!0,r.eagerState=b,We(b,m))return Zl(t,e,r,0),Qt===null&&Gl(),!1}catch{}finally{}if(n=Ls(t,e,r,o),n!==null)return on(n,t,o),Ch(n,e,o),!0}return!1}function xu(t,e,n,o){if(o={lane:2,revertLane:Wu(),action:o,hasEagerState:!1,eagerState:null,next:null},ur(t)){if(e)throw Error(s(479))}else e=Ls(t,n,o,2),e!==null&&on(e,t,2)}function ur(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function Rh(t,e){Ei=ar=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ch(t,e,n){if((n&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Rl(t,n)}}var cr={readContext:Ue,use:or,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le,useHostTransitionStatus:le,useFormState:le,useActionState:le,useOptimistic:le,useMemoCache:le,useCacheRefresh:le},zh={readContext:Ue,use:or,useCallback:function(t,e){return Qe().memoizedState=[t,e===void 0?null:e],t},useContext:Ue,useEffect:mh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,sr(4194308,4,bh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sr(4194308,4,t,e)},useInsertionEffect:function(t,e){sr(4,2,t,e)},useMemo:function(t,e){var n=Qe();e=e===void 0?null:e;var o=t();if($a){rn(!0);try{t()}finally{rn(!1)}}return n.memoizedState=[o,e],o},useReducer:function(t,e,n){var o=Qe();if(n!==void 0){var r=n(e);if($a){rn(!0);try{n(e)}finally{rn(!1)}}}else r=e;return o.memoizedState=o.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},o.queue=t,t=t.dispatch=Pb.bind(null,vt,t),[o.memoizedState,t]},useRef:function(t){var e=Qe();return t={current:t},e.memoizedState=t},useState:function(t){t=mu(t);var e=t.queue,n=wh.bind(null,vt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:gu,useDeferredValue:function(t,e){var n=Qe();return yu(n,t,e)},useTransition:function(){var t=mu(!1);return t=Ah.bind(null,vt,t.queue,!0,!1),Qe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var o=vt,r=Qe();if(Nt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Qt===null)throw Error(s(349));(Et&124)!==0||Wd(o,e,n)}r.memoizedState=n;var u={value:n,getSnapshot:e};return r.queue=u,mh(th.bind(null,o,u,t),[t]),o.flags|=2048,Ri(9,rr(),Id.bind(null,o,u,n,e),null),n},useId:function(){var t=Qe(),e=Qt.identifierPrefix;if(Nt){var n=Fn,o=Kn;n=(o&~(1<<32-_e(o)-1)).toString(32)+n,e="«"+e+"R"+n,n=ir++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=jb++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:vu,useFormState:uh,useActionState:uh,useOptimistic:function(t){var e=Qe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=xu.bind(null,vt,!0,n),n.dispatch=e,[t,e]},useMemoCache:fu,useCacheRefresh:function(){return Qe().memoizedState=qb.bind(null,vt)}},Nh={readContext:Ue,use:or,useCallback:xh,useContext:Ue,useEffect:ph,useImperativeHandle:vh,useInsertionEffect:gh,useLayoutEffect:yh,useMemo:Sh,useReducer:lr,useRef:hh,useState:function(){return lr(Wn)},useDebugValue:gu,useDeferredValue:function(t,e){var n=he();return Th(n,Lt.memoizedState,t,e)},useTransition:function(){var t=lr(Wn)[0],e=he().memoizedState;return[typeof t=="boolean"?t:No(t),e]},useSyncExternalStore:$d,useId:Mh,useHostTransitionStatus:vu,useFormState:ch,useActionState:ch,useOptimistic:function(t,e){var n=he();return ah(n,Lt,t,e)},useMemoCache:fu,useCacheRefresh:Eh},Yb={readContext:Ue,use:or,useCallback:xh,useContext:Ue,useEffect:ph,useImperativeHandle:vh,useInsertionEffect:gh,useLayoutEffect:yh,useMemo:Sh,useReducer:hu,useRef:hh,useState:function(){return hu(Wn)},useDebugValue:gu,useDeferredValue:function(t,e){var n=he();return Lt===null?yu(n,t,e):Th(n,Lt.memoizedState,t,e)},useTransition:function(){var t=hu(Wn)[0],e=he().memoizedState;return[typeof t=="boolean"?t:No(t),e]},useSyncExternalStore:$d,useId:Mh,useHostTransitionStatus:vu,useFormState:dh,useActionState:dh,useOptimistic:function(t,e){var n=he();return Lt!==null?ah(n,Lt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:fu,useCacheRefresh:Eh},Ci=null,Vo=0;function fr(t){var e=Vo;return Vo+=1,Ci===null&&(Ci=[]),Yd(Ci,t,e)}function jo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function dr(t,e){throw e.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function kh(t){var e=t._init;return e(t._payload)}function _h(t){function e(M,A){if(t){var R=M.deletions;R===null?(M.deletions=[A],M.flags|=16):R.push(A)}}function n(M,A){if(!t)return null;for(;A!==null;)e(M,A),A=A.sibling;return null}function o(M){for(var A=new Map;M!==null;)M.key!==null?A.set(M.key,M):A.set(M.index,M),M=M.sibling;return A}function r(M,A){return M=Qn(M,A),M.index=0,M.sibling=null,M}function u(M,A,R){return M.index=R,t?(R=M.alternate,R!==null?(R=R.index,R<A?(M.flags|=67108866,A):R):(M.flags|=67108866,A)):(M.flags|=1048576,A)}function m(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function b(M,A,R,j){return A===null||A.tag!==6?(A=qs(R,M.mode,j),A.return=M,A):(A=r(A,R),A.return=M,A)}function S(M,A,R,j){var tt=R.type;return tt===D?V(M,A,R.props.children,j,R.key):A!==null&&(A.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===G&&kh(tt)===A.type)?(A=r(A,R.props),jo(A,R),A.return=M,A):(A=Kl(R.type,R.key,R.props,null,M.mode,j),jo(A,R),A.return=M,A)}function C(M,A,R,j){return A===null||A.tag!==4||A.stateNode.containerInfo!==R.containerInfo||A.stateNode.implementation!==R.implementation?(A=Ps(R,M.mode,j),A.return=M,A):(A=r(A,R.children||[]),A.return=M,A)}function V(M,A,R,j,tt){return A===null||A.tag!==7?(A=Ya(R,M.mode,j,tt),A.return=M,A):(A=r(A,R),A.return=M,A)}function H(M,A,R){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=qs(""+A,M.mode,R),A.return=M,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return R=Kl(A.type,A.key,A.props,null,M.mode,R),jo(R,A),R.return=M,R;case E:return A=Ps(A,M.mode,R),A.return=M,A;case G:var j=A._init;return A=j(A._payload),H(M,A,R)}if(Yt(A)||Pt(A))return A=Ya(A,M.mode,R,null),A.return=M,A;if(typeof A.then=="function")return H(M,fr(A),R);if(A.$$typeof===q)return H(M,Wl(M,A),R);dr(M,A)}return null}function z(M,A,R,j){var tt=A!==null?A.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return tt!==null?null:b(M,A,""+R,j);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return R.key===tt?S(M,A,R,j):null;case E:return R.key===tt?C(M,A,R,j):null;case G:return tt=R._init,R=tt(R._payload),z(M,A,R,j)}if(Yt(R)||Pt(R))return tt!==null?null:V(M,A,R,j,null);if(typeof R.then=="function")return z(M,A,fr(R),j);if(R.$$typeof===q)return z(M,A,Wl(M,R),j);dr(M,R)}return null}function N(M,A,R,j,tt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return M=M.get(R)||null,b(A,M,""+j,tt);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return M=M.get(j.key===null?R:j.key)||null,S(A,M,j,tt);case E:return M=M.get(j.key===null?R:j.key)||null,C(A,M,j,tt);case G:var xt=j._init;return j=xt(j._payload),N(M,A,R,j,tt)}if(Yt(j)||Pt(j))return M=M.get(R)||null,V(A,M,j,tt,null);if(typeof j.then=="function")return N(M,A,R,fr(j),tt);if(j.$$typeof===q)return N(M,A,R,Wl(A,j),tt);dr(A,j)}return null}function ct(M,A,R,j){for(var tt=null,xt=null,nt=A,ut=A=0,Oe=null;nt!==null&&ut<R.length;ut++){nt.index>ut?(Oe=nt,nt=null):Oe=nt.sibling;var Rt=z(M,nt,R[ut],j);if(Rt===null){nt===null&&(nt=Oe);break}t&&nt&&Rt.alternate===null&&e(M,nt),A=u(Rt,A,ut),xt===null?tt=Rt:xt.sibling=Rt,xt=Rt,nt=Oe}if(ut===R.length)return n(M,nt),Nt&&Ga(M,ut),tt;if(nt===null){for(;ut<R.length;ut++)nt=H(M,R[ut],j),nt!==null&&(A=u(nt,A,ut),xt===null?tt=nt:xt.sibling=nt,xt=nt);return Nt&&Ga(M,ut),tt}for(nt=o(nt);ut<R.length;ut++)Oe=N(nt,M,ut,R[ut],j),Oe!==null&&(t&&Oe.alternate!==null&&nt.delete(Oe.key===null?ut:Oe.key),A=u(Oe,A,ut),xt===null?tt=Oe:xt.sibling=Oe,xt=Oe);return t&&nt.forEach(function(Na){return e(M,Na)}),Nt&&Ga(M,ut),tt}function rt(M,A,R,j){if(R==null)throw Error(s(151));for(var tt=null,xt=null,nt=A,ut=A=0,Oe=null,Rt=R.next();nt!==null&&!Rt.done;ut++,Rt=R.next()){nt.index>ut?(Oe=nt,nt=null):Oe=nt.sibling;var Na=z(M,nt,Rt.value,j);if(Na===null){nt===null&&(nt=Oe);break}t&&nt&&Na.alternate===null&&e(M,nt),A=u(Na,A,ut),xt===null?tt=Na:xt.sibling=Na,xt=Na,nt=Oe}if(Rt.done)return n(M,nt),Nt&&Ga(M,ut),tt;if(nt===null){for(;!Rt.done;ut++,Rt=R.next())Rt=H(M,Rt.value,j),Rt!==null&&(A=u(Rt,A,ut),xt===null?tt=Rt:xt.sibling=Rt,xt=Rt);return Nt&&Ga(M,ut),tt}for(nt=o(nt);!Rt.done;ut++,Rt=R.next())Rt=N(nt,M,ut,Rt.value,j),Rt!==null&&(t&&Rt.alternate!==null&&nt.delete(Rt.key===null?ut:Rt.key),A=u(Rt,A,ut),xt===null?tt=Rt:xt.sibling=Rt,xt=Rt);return t&&nt.forEach(function(Xv){return e(M,Xv)}),Nt&&Ga(M,ut),tt}function qt(M,A,R,j){if(typeof R=="object"&&R!==null&&R.type===D&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case x:t:{for(var tt=R.key;A!==null;){if(A.key===tt){if(tt=R.type,tt===D){if(A.tag===7){n(M,A.sibling),j=r(A,R.props.children),j.return=M,M=j;break t}}else if(A.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===G&&kh(tt)===A.type){n(M,A.sibling),j=r(A,R.props),jo(j,R),j.return=M,M=j;break t}n(M,A);break}else e(M,A);A=A.sibling}R.type===D?(j=Ya(R.props.children,M.mode,j,R.key),j.return=M,M=j):(j=Kl(R.type,R.key,R.props,null,M.mode,j),jo(j,R),j.return=M,M=j)}return m(M);case E:t:{for(tt=R.key;A!==null;){if(A.key===tt)if(A.tag===4&&A.stateNode.containerInfo===R.containerInfo&&A.stateNode.implementation===R.implementation){n(M,A.sibling),j=r(A,R.children||[]),j.return=M,M=j;break t}else{n(M,A);break}else e(M,A);A=A.sibling}j=Ps(R,M.mode,j),j.return=M,M=j}return m(M);case G:return tt=R._init,R=tt(R._payload),qt(M,A,R,j)}if(Yt(R))return ct(M,A,R,j);if(Pt(R)){if(tt=Pt(R),typeof tt!="function")throw Error(s(150));return R=tt.call(R),rt(M,A,R,j)}if(typeof R.then=="function")return qt(M,A,fr(R),j);if(R.$$typeof===q)return qt(M,A,Wl(M,R),j);dr(M,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,A!==null&&A.tag===6?(n(M,A.sibling),j=r(A,R),j.return=M,M=j):(n(M,A),j=qs(R,M.mode,j),j.return=M,M=j),m(M)):n(M,A)}return function(M,A,R,j){try{Vo=0;var tt=qt(M,A,R,j);return Ci=null,tt}catch(nt){if(nt===Mo||nt===tr)throw nt;var xt=Ie(29,nt,null,M.mode);return xt.lanes=j,xt.return=M,xt}finally{}}}var zi=_h(!0),Vh=_h(!1),pn=B(null),kn=null;function ya(t){var e=t.alternate;J(ve,ve.current&1),J(pn,t),kn===null&&(e===null||Mi.current!==null||e.memoizedState!==null)&&(kn=t)}function jh(t){if(t.tag===22){if(J(ve,ve.current),J(pn,t),kn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(kn=t)}}else ba()}function ba(){J(ve,ve.current),J(pn,pn.current)}function In(t){I(pn),kn===t&&(kn=null),I(ve)}var ve=B(0);function hr(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||cc(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Su(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:y({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={enqueueSetState:function(t,e,n){t=t._reactInternals;var o=an(),r=ma(o);r.payload=e,n!=null&&(r.callback=n),e=pa(t,r,o),e!==null&&(on(e,t,o),wo(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=an(),r=ma(o);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=pa(t,r,o),e!==null&&(on(e,t,o),wo(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),o=ma(n);o.tag=2,e!=null&&(o.callback=e),e=pa(t,o,n),e!==null&&(on(e,t,n),wo(e,t,n))}};function Uh(t,e,n,o,r,u,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,m):e.prototype&&e.prototype.isPureReactComponent?!bo(n,o)||!bo(r,u):!0}function Bh(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function Wa(t,e){var n=e;if("ref"in e){n={};for(var o in e)o!=="ref"&&(n[o]=e[o])}if(t=t.defaultProps){n===e&&(n=y({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}var mr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Lh(t){mr(t)}function Hh(t){console.error(t)}function qh(t){mr(t)}function pr(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Ph(t,e,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Au(t,e,n){return n=ma(n),n.tag=3,n.payload={element:null},n.callback=function(){pr(t,e)},n}function Yh(t){return t=ma(t),t.tag=3,t}function Xh(t,e,n,o){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=o.value;t.payload=function(){return r(u)},t.callback=function(){Ph(e,n,o)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Ph(e,n,o),typeof r!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Xb(t,e,n,o,r){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=n.alternate,e!==null&&Ao(e,n,r,!0),n=pn.current,n!==null){switch(n.tag){case 13:return kn===null?Qu():n.alternate===null&&ae===0&&(ae=3),n.flags&=-257,n.flags|=65536,n.lanes=r,o===Ws?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([o]):e.add(o),Fu(t,o,r)),!1;case 22:return n.flags|=65536,o===Ws?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([o]):n.add(o)),Fu(t,o,r)),!1}throw Error(s(435,n.tag))}return Fu(t,o,r),Qu(),!1}if(Nt)return e=pn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,o!==Gs&&(t=Error(s(422),{cause:o}),To(fn(t,n)))):(o!==Gs&&(e=Error(s(423),{cause:o}),To(fn(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,o=fn(o,n),r=Au(t.stateNode,o,r),eu(t,r),ae!==4&&(ae=2)),!1;var u=Error(s(520),{cause:o});if(u=fn(u,n),Yo===null?Yo=[u]:Yo.push(u),ae!==4&&(ae=2),e===null)return!0;o=fn(o,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=Au(n.stateNode,o,t),eu(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Oa===null||!Oa.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Yh(r),Xh(r,t,n,o),eu(n,r),!1}n=n.return}while(n!==null);return!1}var Gh=Error(s(461)),Te=!1;function Re(t,e,n,o){e.child=t===null?Vh(e,null,n,o):zi(e,t.child,n,o)}function Zh(t,e,n,o,r){n=n.render;var u=e.ref;if("ref"in o){var m={};for(var b in o)b!=="ref"&&(m[b]=o[b])}else m=o;return Fa(e),o=lu(t,e,n,m,u,r),b=ru(),t!==null&&!Te?(su(t,e,r),ta(t,e,r)):(Nt&&b&&Ys(e),e.flags|=1,Re(t,e,o,r),e.child)}function Qh(t,e,n,o,r){if(t===null){var u=n.type;return typeof u=="function"&&!Hs(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Kh(t,e,u,o,r)):(t=Kl(n.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!zu(t,r)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(m,o)&&t.ref===e.ref)return ta(t,e,r)}return e.flags|=1,t=Qn(u,o),t.ref=e.ref,t.return=e,e.child=t}function Kh(t,e,n,o,r){if(t!==null){var u=t.memoizedProps;if(bo(u,o)&&t.ref===e.ref)if(Te=!1,e.pendingProps=o=u,zu(t,r))(t.flags&131072)!==0&&(Te=!0);else return e.lanes=t.lanes,ta(t,e,r)}return Ou(t,e,n,o,r)}function Fh(t,e,n){var o=e.pendingProps,r=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((e.flags&128)!==0){if(o=u!==null?u.baseLanes|n:n,t!==null){for(r=e.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;e.childLanes=u&~o}else e.childLanes=0,e.child=null;return Jh(t,e,o,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Il(e,u!==null?u.cachePool:null),u!==null?Kd(e,u):au(),jh(e);else return e.lanes=e.childLanes=536870912,Jh(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(Il(e,u.cachePool),Kd(e,u),ba(),e.memoizedState=null):(t!==null&&Il(e,null),au(),ba());return Re(t,e,r,n),e.child}function Jh(t,e,n,o){var r=$s();return r=r===null?null:{parent:be._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Il(e,null),au(),jh(e),t!==null&&Ao(t,e,o,!0),null}function gr(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Ou(t,e,n,o,r){return Fa(e),n=lu(t,e,n,o,void 0,r),o=ru(),t!==null&&!Te?(su(t,e,r),ta(t,e,r)):(Nt&&o&&Ys(e),e.flags|=1,Re(t,e,n,r),e.child)}function $h(t,e,n,o,r,u){return Fa(e),e.updateQueue=null,n=Jd(e,o,n,r),Fd(t),o=ru(),t!==null&&!Te?(su(t,e,u),ta(t,e,u)):(Nt&&o&&Ys(e),e.flags|=1,Re(t,e,n,u),e.child)}function Wh(t,e,n,o,r){if(Fa(e),e.stateNode===null){var u=Si,m=n.contextType;typeof m=="object"&&m!==null&&(u=Ue(m)),u=new n(o,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Tu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=o,u.state=e.memoizedState,u.refs={},Is(e),m=n.contextType,u.context=typeof m=="object"&&m!==null?Ue(m):Si,u.state=e.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Su(e,n,m,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Tu.enqueueReplaceState(u,u.state,null),Co(e,o,u,r),Ro(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,S=Wa(n,b);u.props=S;var C=u.context,V=n.contextType;m=Si,typeof V=="object"&&V!==null&&(m=Ue(V));var H=n.getDerivedStateFromProps;V=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||C!==m)&&Bh(e,u,o,m),ha=!1;var z=e.memoizedState;u.state=z,Co(e,o,u,r),Ro(),C=e.memoizedState,b||z!==C||ha?(typeof H=="function"&&(Su(e,n,H,o),C=e.memoizedState),(S=ha||Uh(e,n,S,o,z,C,m))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=C),u.props=o,u.state=C,u.context=m,o=S):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{u=e.stateNode,tu(t,e),m=e.memoizedProps,V=Wa(n,m),u.props=V,H=e.pendingProps,z=u.context,C=n.contextType,S=Si,typeof C=="object"&&C!==null&&(S=Ue(C)),b=n.getDerivedStateFromProps,(C=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==H||z!==S)&&Bh(e,u,o,S),ha=!1,z=e.memoizedState,u.state=z,Co(e,o,u,r),Ro();var N=e.memoizedState;m!==H||z!==N||ha||t!==null&&t.dependencies!==null&&$l(t.dependencies)?(typeof b=="function"&&(Su(e,n,b,o),N=e.memoizedState),(V=ha||Uh(e,n,V,o,z,N,S)||t!==null&&t.dependencies!==null&&$l(t.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,N,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,N,S)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=N),u.props=o,u.state=N,u.context=S,o=V):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),o=!1)}return u=o,gr(t,e),o=(e.flags&128)!==0,u||o?(u=e.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,r),e.child=zi(e,null,n,r)):Re(t,e,n,r),e.memoizedState=u.state,t=e.child):t=ta(t,e,r),t}function Ih(t,e,n,o){return So(),e.flags|=256,Re(t,e,n,o),e.child}var Du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mu(t){return{baseLanes:t,cachePool:Hd()}}function Eu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=gn),t}function t0(t,e,n){var o=e.pendingProps,r=!1,u=(e.flags&128)!==0,m;if((m=u)||(m=t!==null&&t.memoizedState===null?!1:(ve.current&2)!==0),m&&(r=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(Nt){if(r?ya(e):ba(),Nt){var b=ne,S;if(S=b){t:{for(S=b,b=Nn;S.nodeType!==8;){if(!b){b=null;break t}if(S=On(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(e.memoizedState={dehydrated:b,treeContext:Xa!==null?{id:Kn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},S=Ie(18,null,null,0),S.stateNode=b,S.return=e,e.child=S,Pe=e,ne=null,S=!0):S=!1}S||Qa(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return cc(b)?e.lanes=32:e.lanes=536870912,null;In(e)}return b=o.children,o=o.fallback,r?(ba(),r=e.mode,b=yr({mode:"hidden",children:b},r),o=Ya(o,r,n,null),b.return=e,o.return=e,b.sibling=o,e.child=b,r=e.child,r.memoizedState=Mu(n),r.childLanes=Eu(t,m,n),e.memoizedState=Du,o):(ya(e),wu(e,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(u)e.flags&256?(ya(e),e.flags&=-257,e=Ru(t,e,n)):e.memoizedState!==null?(ba(),e.child=t.child,e.flags|=128,e=null):(ba(),r=o.fallback,b=e.mode,o=yr({mode:"visible",children:o.children},b),r=Ya(r,b,n,null),r.flags|=2,o.return=e,r.return=e,o.sibling=r,e.child=o,zi(e,t.child,null,n),o=e.child,o.memoizedState=Mu(n),o.childLanes=Eu(t,m,n),e.memoizedState=Du,e=r);else if(ya(e),cc(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var C=m.dgst;m=C,o=Error(s(419)),o.stack="",o.digest=m,To({value:o,source:null,stack:null}),e=Ru(t,e,n)}else if(Te||Ao(t,e,n,!1),m=(n&t.childLanes)!==0,Te||m){if(m=Qt,m!==null&&(o=n&-n,o=(o&42)!==0?1:lo(o),o=(o&(m.suspendedLanes|n))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,xi(t,o),on(m,t,o),Gh;b.data==="$?"||Qu(),e=Ru(t,e,n)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,ne=On(b.nextSibling),Pe=e,Nt=!0,Za=null,Nn=!1,t!==null&&(hn[mn++]=Kn,hn[mn++]=Fn,hn[mn++]=Xa,Kn=t.id,Fn=t.overflow,Xa=e),e=wu(e,o.children),e.flags|=4096);return e}return r?(ba(),r=o.fallback,b=e.mode,S=t.child,C=S.sibling,o=Qn(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,C!==null?r=Qn(C,r):(r=Ya(r,b,n,null),r.flags|=2),r.return=e,o.return=e,o.sibling=r,e.child=o,o=r,r=e.child,b=t.child.memoizedState,b===null?b=Mu(n):(S=b.cachePool,S!==null?(C=be._currentValue,S=S.parent!==C?{parent:C,pool:C}:S):S=Hd(),b={baseLanes:b.baseLanes|n,cachePool:S}),r.memoizedState=b,r.childLanes=Eu(t,m,n),e.memoizedState=Du,o):(ya(e),n=t.child,t=n.sibling,n=Qn(n,{mode:"visible",children:o.children}),n.return=e,n.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=n,e.memoizedState=null,n)}function wu(t,e){return e=yr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function yr(t,e){return t=Ie(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ru(t,e,n){return zi(e,t.child,null,n),t=wu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function e0(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Qs(t.return,e,n)}function Cu(t,e,n,o,r){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=r)}function n0(t,e,n){var o=e.pendingProps,r=o.revealOrder,u=o.tail;if(Re(t,e,o.children,n),o=ve.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,n,e);else if(t.tag===19)e0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(J(ve,o),r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hr(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cu(e,!1,r,n,u);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hr(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cu(e,!0,n,null,u);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ta(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Aa|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Ao(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&$l(t)))}function Gb(t,e,n){switch(e.tag){case 3:Dt(e,e.stateNode.containerInfo),da(e,be,t.memoizedState.cache),So();break;case 27:case 5:Ct(e);break;case 4:Dt(e,e.stateNode.containerInfo);break;case 10:da(e,e.type,e.memoizedProps.value);break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(e),e.flags|=128,null):(n&e.child.childLanes)!==0?t0(t,e,n):(ya(e),t=ta(t,e,n),t!==null?t.sibling:null);ya(e);break;case 19:var r=(t.flags&128)!==0;if(o=(n&e.childLanes)!==0,o||(Ao(t,e,n,!1),o=(n&e.childLanes)!==0),r){if(o)return n0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(ve,ve.current),o)break;return null;case 22:case 23:return e.lanes=0,Fh(t,e,n);case 24:da(e,be,t.memoizedState.cache)}return ta(t,e,n)}function a0(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Te=!0;else{if(!zu(t,n)&&(e.flags&128)===0)return Te=!1,Gb(t,e,n);Te=(t.flags&131072)!==0}else Te=!1,Nt&&(e.flags&1048576)!==0&&kd(e,Jl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var o=e.elementType,r=o._init;if(o=r(o._payload),e.type=o,typeof o=="function")Hs(o)?(t=Wa(o,t),e.tag=1,e=Wh(null,e,o,t,n)):(e.tag=0,e=Ou(null,e,o,t,n));else{if(o!=null){if(r=o.$$typeof,r===$){e.tag=11,e=Zh(null,e,o,t,n);break t}else if(r===Q){e.tag=14,e=Qh(null,e,o,t,n);break t}}throw e=ue(o)||o,Error(s(306,e,""))}}return e;case 0:return Ou(t,e,e.type,e.pendingProps,n);case 1:return o=e.type,r=Wa(o,e.pendingProps),Wh(t,e,o,r,n);case 3:t:{if(Dt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));o=e.pendingProps;var u=e.memoizedState;r=u.element,tu(t,e),Co(e,o,null,n);var m=e.memoizedState;if(o=m.cache,da(e,be,o),o!==u.cache&&Ks(e,[be],n,!0),Ro(),o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Ih(t,e,o,n);break t}else if(o!==r){r=fn(Error(s(424)),e),To(r),e=Ih(t,e,o,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ne=On(t.firstChild),Pe=e,Nt=!0,Za=null,Nn=!0,n=Vh(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(So(),o===r){e=ta(t,e,n);break t}Re(t,e,o,n)}e=e.child}return e;case 26:return gr(t,e),t===null?(n=rm(e.type,null,e.pendingProps,null))?e.memoizedState=n:Nt||(n=e.type,t=e.pendingProps,o=zr(ot.current).createElement(n),o[Se]=e,o[Ve]=t,ze(o,n,t),fe(o),e.stateNode=o):e.memoizedState=rm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ct(e),t===null&&Nt&&(o=e.stateNode=im(e.type,e.pendingProps,ot.current),Pe=e,Nn=!0,r=ne,Ea(e.type)?(fc=r,ne=On(o.firstChild)):ne=r),Re(t,e,e.pendingProps.children,n),gr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Nt&&((r=o=ne)&&(o=vv(o,e.type,e.pendingProps,Nn),o!==null?(e.stateNode=o,Pe=e,ne=On(o.firstChild),Nn=!1,r=!0):r=!1),r||Qa(e)),Ct(e),r=e.type,u=e.pendingProps,m=t!==null?t.memoizedProps:null,o=u.children,rc(r,u)?o=null:m!==null&&rc(r,m)&&(e.flags|=32),e.memoizedState!==null&&(r=lu(t,e,Ub,null,null,n),Wo._currentValue=r),gr(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&Nt&&((t=n=ne)&&(n=xv(n,e.pendingProps,Nn),n!==null?(e.stateNode=n,Pe=e,ne=null,t=!0):t=!1),t||Qa(e)),null;case 13:return t0(t,e,n);case 4:return Dt(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=zi(e,null,o,n):Re(t,e,o,n),e.child;case 11:return Zh(t,e,e.type,e.pendingProps,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:return o=e.pendingProps,da(e,e.type,o.value),Re(t,e,o.children,n),e.child;case 9:return r=e.type._context,o=e.pendingProps.children,Fa(e),r=Ue(r),o=o(r),e.flags|=1,Re(t,e,o,n),e.child;case 14:return Qh(t,e,e.type,e.pendingProps,n);case 15:return Kh(t,e,e.type,e.pendingProps,n);case 19:return n0(t,e,n);case 31:return o=e.pendingProps,n=e.mode,o={mode:o.mode,children:o.children},t===null?(n=yr(o,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Qn(t.child,o),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Fh(t,e,n);case 24:return Fa(e),o=Ue(be),t===null?(r=$s(),r===null&&(r=Qt,u=Fs(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),e.memoizedState={parent:o,cache:r},Is(e),da(e,be,r)):((t.lanes&n)!==0&&(tu(t,e),Co(e,null,null,n),Ro()),r=t.memoizedState,u=e.memoizedState,r.parent!==o?(r={parent:o,cache:o},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),da(e,be,o)):(o=u.cache,da(e,be,o),o!==r.cache&&Ks(e,[be],n,!0))),Re(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function ea(t){t.flags|=4}function i0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!dm(e)){if(e=pn.current,e!==null&&((Et&4194048)===Et?kn!==null:(Et&62914560)!==Et&&(Et&536870912)===0||e!==kn))throw Eo=Ws,qd;t.flags|=8192}}function br(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ge():536870912,t.lanes|=e,Vi|=e)}function Uo(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function Zb(t,e,n){var o=e.pendingProps;switch(Xs(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(e),null;case 1:return te(e),null;case 3:return n=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),$n(be),ke(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(xo(e)?ea(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,jd())),te(e),null;case 26:return n=e.memoizedState,t===null?(ea(e),n!==null?(te(e),i0(e,n)):(te(e),e.flags&=-16777217)):n?n!==t.memoizedState?(ea(e),te(e),i0(e,n)):(te(e),e.flags&=-16777217):(t.memoizedProps!==o&&ea(e),te(e),e.flags&=-16777217),null;case 27:Kt(e),n=ot.current;var r=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ea(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return te(e),null}t=it.current,xo(e)?_d(e):(t=im(r,o,n),e.stateNode=t,ea(e))}return te(e),null;case 5:if(Kt(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ea(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return te(e),null}if(t=it.current,xo(e))_d(e);else{switch(r=zr(ot.current),t){case 1:t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=r.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?r.createElement("select",{is:o.is}):r.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?r.createElement(n,{is:o.is}):r.createElement(n)}}t[Se]=e,t[Ve]=o;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=t;t:switch(ze(t,n,o),n){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ea(e)}}return te(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&ea(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(s(166));if(t=ot.current,xo(e)){if(t=e.stateNode,n=e.memoizedProps,o=null,r=Pe,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}t[Se]=e,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||$0(t.nodeValue,n)),t||Qa(e)}else t=zr(t).createTextNode(o),t[Se]=e,e.stateNode=t}return te(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=xo(e),o!==null&&o.dehydrated!==null){if(t===null){if(!r)throw Error(s(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[Se]=e}else So(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;te(e),r=!1}else r=jd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(In(e),e):(In(e),null)}if(In(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=o!==null,t=t!==null&&t.memoizedState!==null,n){o=e.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==r&&(o.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),br(e,e.updateQueue),te(e),null;case 4:return ke(),t===null&&nc(e.stateNode.containerInfo),te(e),null;case 10:return $n(e.type),te(e),null;case 19:if(I(ve),r=e.memoizedState,r===null)return te(e),null;if(o=(e.flags&128)!==0,u=r.rendering,u===null)if(o)Uo(r,!1);else{if(ae!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=hr(t),u!==null){for(e.flags|=128,Uo(r,!1),t=u.updateQueue,e.updateQueue=t,br(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Nd(n,t),n=n.sibling;return J(ve,ve.current&1|2),e.child}t=t.sibling}r.tail!==null&&Ot()>Sr&&(e.flags|=128,o=!0,Uo(r,!1),e.lanes=4194304)}else{if(!o)if(t=hr(u),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,br(e,t),Uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Nt)return te(e),null}else 2*Ot()-r.renderingStartTime>Sr&&n!==536870912&&(e.flags|=128,o=!0,Uo(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ot(),e.sibling=null,t=ve.current,J(ve,o?t&1|2:t&1),e):(te(e),null);case 22:case 23:return In(e),iu(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(n&536870912)!==0&&(e.flags&128)===0&&(te(e),e.subtreeFlags&6&&(e.flags|=8192)):te(e),n=e.updateQueue,n!==null&&br(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==n&&(e.flags|=2048),t!==null&&I(Ja),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),$n(be),te(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Qb(t,e){switch(Xs(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $n(be),ke(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Kt(e),null;case 13:if(In(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));So()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return I(ve),null;case 4:return ke(),null;case 10:return $n(e.type),null;case 22:case 23:return In(e),iu(),t!==null&&I(Ja),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return $n(be),null;case 25:return null;default:return null}}function o0(t,e){switch(Xs(e),e.tag){case 3:$n(be),ke();break;case 26:case 27:case 5:Kt(e);break;case 4:ke();break;case 13:In(e);break;case 19:I(ve);break;case 10:$n(e.type);break;case 22:case 23:In(e),iu(),t!==null&&I(Ja);break;case 24:$n(be)}}function Bo(t,e){try{var n=e.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var r=o.next;n=r;do{if((n.tag&t)===t){o=void 0;var u=n.create,m=n.inst;o=u(),m.destroy=o}n=n.next}while(n!==r)}}catch(b){Zt(e,e.return,b)}}function va(t,e,n){try{var o=e.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var u=r.next;o=u;do{if((o.tag&t)===t){var m=o.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,r=e;var S=n,C=b;try{C()}catch(V){Zt(r,S,V)}}}o=o.next}while(o!==u)}}catch(V){Zt(e,e.return,V)}}function l0(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Qd(e,n)}catch(o){Zt(t,t.return,o)}}}function r0(t,e,n){n.props=Wa(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){Zt(t,e,o)}}function Lo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof n=="function"?t.refCleanup=n(o):n.current=o}}catch(r){Zt(t,e,r)}}function _n(t,e){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(r){Zt(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Zt(t,e,r)}else n.current=null}function s0(t){var e=t.type,n=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break t;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(r){Zt(t,t.return,r)}}function Nu(t,e,n){try{var o=t.stateNode;mv(o,t.type,n,e),o[Ve]=e}catch(r){Zt(t,t.return,r)}}function u0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _u(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cr));else if(o!==4&&(o===27&&Ea(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(_u(t,e,n),t=t.sibling;t!==null;)_u(t,e,n),t=t.sibling}function vr(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(o===27&&Ea(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(vr(t,e,n),t=t.sibling;t!==null;)vr(t,e,n),t=t.sibling}function c0(t){var e=t.stateNode,n=t.memoizedProps;try{for(var o=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);ze(e,o,n),e[Se]=t,e[Ve]=n}catch(u){Zt(t,t.return,u)}}var na=!1,re=!1,Vu=!1,f0=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Kb(t,e){if(t=t.containerInfo,oc=Ur,t=Td(t),ks(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var m=0,b=-1,S=-1,C=0,V=0,H=t,z=null;e:for(;;){for(var N;H!==n||r!==0&&H.nodeType!==3||(b=m+r),H!==u||o!==0&&H.nodeType!==3||(S=m+o),H.nodeType===3&&(m+=H.nodeValue.length),(N=H.firstChild)!==null;)z=H,H=N;for(;;){if(H===t)break e;if(z===n&&++C===r&&(b=m),z===u&&++V===o&&(S=m),(N=H.nextSibling)!==null)break;H=z,z=H.parentNode}H=N}n=b===-1||S===-1?null:{start:b,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:t,selectionRange:n},Ur=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){switch(e=Ae,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,r=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var ct=Wa(n.type,r,n.elementType===n.type);t=o.getSnapshotBeforeUpdate(ct,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Zt(n,n.return,rt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)uc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":uc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function d0(t,e,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:xa(t,n),o&4&&Bo(5,n);break;case 1:if(xa(t,n),o&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(m){Zt(n,n.return,m)}else{var r=Wa(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Zt(n,n.return,m)}}o&64&&l0(n),o&512&&Lo(n,n.return);break;case 3:if(xa(t,n),o&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Qd(t,e)}catch(m){Zt(n,n.return,m)}}break;case 27:e===null&&o&4&&c0(n);case 26:case 5:xa(t,n),e===null&&o&4&&s0(n),o&512&&Lo(n,n.return);break;case 12:xa(t,n);break;case 13:xa(t,n),o&4&&p0(t,n),o&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=av.bind(null,n),Sv(t,n))));break;case 22:if(o=n.memoizedState!==null||na,!o){e=e!==null&&e.memoizedState!==null||re,r=na;var u=re;na=o,(re=e)&&!u?Sa(t,n,(n.subtreeFlags&8772)!==0):xa(t,n),na=r,re=u}break;case 30:break;default:xa(t,n)}}function h0(t){var e=t.alternate;e!==null&&(t.alternate=null,h0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&un(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ft=null,Ke=!1;function aa(t,e,n){for(n=n.child;n!==null;)m0(t,e,n),n=n.sibling}function m0(t,e,n){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(Me,n)}catch{}switch(n.tag){case 26:re||_n(n,e),aa(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:re||_n(n,e);var o=Ft,r=Ke;Ea(n.type)&&(Ft=n.stateNode,Ke=!1),aa(t,e,n),Ko(n.stateNode),Ft=o,Ke=r;break;case 5:re||_n(n,e);case 6:if(o=Ft,r=Ke,Ft=null,aa(t,e,n),Ft=o,Ke=r,Ft!==null)if(Ke)try{(Ft.nodeType===9?Ft.body:Ft.nodeName==="HTML"?Ft.ownerDocument.body:Ft).removeChild(n.stateNode)}catch(u){Zt(n,e,u)}else try{Ft.removeChild(n.stateNode)}catch(u){Zt(n,e,u)}break;case 18:Ft!==null&&(Ke?(t=Ft,nm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),nl(t)):nm(Ft,n.stateNode));break;case 4:o=Ft,r=Ke,Ft=n.stateNode.containerInfo,Ke=!0,aa(t,e,n),Ft=o,Ke=r;break;case 0:case 11:case 14:case 15:re||va(2,n,e),re||va(4,n,e),aa(t,e,n);break;case 1:re||(_n(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"&&r0(n,e,o)),aa(t,e,n);break;case 21:aa(t,e,n);break;case 22:re=(o=re)||n.memoizedState!==null,aa(t,e,n),re=o;break;default:aa(t,e,n)}}function p0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nl(t)}catch(n){Zt(e,e.return,n)}}function Fb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new f0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new f0),e;default:throw Error(s(435,t.tag))}}function ju(t,e){var n=Fb(t);e.forEach(function(o){var r=iv.bind(null,t,o);n.has(o)||(n.add(o),o.then(r,r))})}function tn(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o],u=t,m=e,b=m;t:for(;b!==null;){switch(b.tag){case 27:if(Ea(b.type)){Ft=b.stateNode,Ke=!1;break t}break;case 5:Ft=b.stateNode,Ke=!1;break t;case 3:case 4:Ft=b.stateNode.containerInfo,Ke=!0;break t}b=b.return}if(Ft===null)throw Error(s(160));m0(u,m,r),Ft=null,Ke=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)g0(e,t),e=e.sibling}var An=null;function g0(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:tn(e,t),en(t),o&4&&(va(3,t,t.return),Bo(3,t),va(5,t,t.return));break;case 1:tn(e,t),en(t),o&512&&(re||n===null||_n(n,n.return)),o&64&&na&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var r=An;if(tn(e,t),en(t),o&512&&(re||n===null||_n(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){t:{o=t.type,n=t.memoizedProps,r=r.ownerDocument||r;e:switch(o){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Ee]||u[Se]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(o),r.head.insertBefore(u,r.querySelector("head > title"))),ze(u,o,n),u[Se]=t,fe(u),o=u;break t;case"link":var m=cm("link","href",r).get(o+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(u=m[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break e}}u=r.createElement(o),ze(u,o,n),r.head.appendChild(u);break;case"meta":if(m=cm("meta","content",r).get(o+(n.content||""))){for(b=0;b<m.length;b++)if(u=m[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break e}}u=r.createElement(o),ze(u,o,n),r.head.appendChild(u);break;default:throw Error(s(468,o))}u[Se]=t,fe(u),o=u}t.stateNode=o}else fm(r,t.type,t.stateNode);else t.stateNode=um(r,o,t.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?fm(r,t.type,t.stateNode):um(r,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nu(t,t.memoizedProps,n.memoizedProps)}break;case 27:tn(e,t),en(t),o&512&&(re||n===null||_n(n,n.return)),n!==null&&o&4&&Nu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(tn(e,t),en(t),o&512&&(re||n===null||_n(n,n.return)),t.flags&32){r=t.stateNode;try{hi(r,"")}catch(N){Zt(t,t.return,N)}}o&4&&t.stateNode!=null&&(r=t.memoizedProps,Nu(t,r,n!==null?n.memoizedProps:r)),o&1024&&(Vu=!0);break;case 6:if(tn(e,t),en(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(N){Zt(t,t.return,N)}}break;case 3:if(_r=null,r=An,An=Nr(e.containerInfo),tn(e,t),An=r,en(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{nl(e.containerInfo)}catch(N){Zt(t,t.return,N)}Vu&&(Vu=!1,y0(t));break;case 4:o=An,An=Nr(t.stateNode.containerInfo),tn(e,t),en(t),An=o;break;case 12:tn(e,t),en(t);break;case 13:tn(e,t),en(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Pu=Ot()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ju(t,o)));break;case 22:r=t.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,C=na,V=re;if(na=C||r,re=V||S,tn(e,t),re=V,na=C,en(t),o&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||S||na||re||Ia(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){S=n=e;try{if(u=S.stateNode,r)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=S.stateNode;var H=S.memoizedProps.style,z=H!=null&&H.hasOwnProperty("display")?H.display:null;b.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(N){Zt(S,S.return,N)}}}else if(e.tag===6){if(n===null){S=e;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(N){Zt(S,S.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,ju(t,n))));break;case 19:tn(e,t),en(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ju(t,o)));break;case 30:break;case 21:break;default:tn(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{for(var n,o=t.return;o!==null;){if(u0(o)){n=o;break}o=o.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,u=ku(t);vr(t,u,r);break;case 5:var m=n.stateNode;n.flags&32&&(hi(m,""),n.flags&=-33);var b=ku(t);vr(t,b,m);break;case 3:case 4:var S=n.stateNode.containerInfo,C=ku(t);_u(t,C,S);break;default:throw Error(s(161))}}catch(V){Zt(t,t.return,V)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function y0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;y0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function xa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)d0(t,e.alternate,e),e=e.sibling}function Ia(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:va(4,e,e.return),Ia(e);break;case 1:_n(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&r0(e,e.return,n),Ia(e);break;case 27:Ko(e.stateNode);case 26:case 5:_n(e,e.return),Ia(e);break;case 22:e.memoizedState===null&&Ia(e);break;case 30:Ia(e);break;default:Ia(e)}t=t.sibling}}function Sa(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,r=t,u=e,m=u.flags;switch(u.tag){case 0:case 11:case 15:Sa(r,u,n),Bo(4,u);break;case 1:if(Sa(r,u,n),o=u,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(C){Zt(o,o.return,C)}if(o=u,r=o.updateQueue,r!==null){var b=o.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)Zd(S[r],b)}catch(C){Zt(o,o.return,C)}}n&&m&64&&l0(u),Lo(u,u.return);break;case 27:c0(u);case 26:case 5:Sa(r,u,n),n&&o===null&&m&4&&s0(u),Lo(u,u.return);break;case 12:Sa(r,u,n);break;case 13:Sa(r,u,n),n&&m&4&&p0(r,u);break;case 22:u.memoizedState===null&&Sa(r,u,n),Lo(u,u.return);break;case 30:break;default:Sa(r,u,n)}e=e.sibling}}function Uu(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Oo(n))}function Bu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Oo(t))}function Vn(t,e,n,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)b0(t,e,n,o),e=e.sibling}function b0(t,e,n,o){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Vn(t,e,n,o),r&2048&&Bo(9,e);break;case 1:Vn(t,e,n,o);break;case 3:Vn(t,e,n,o),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Oo(t)));break;case 12:if(r&2048){Vn(t,e,n,o),t=e.stateNode;try{var u=e.memoizedProps,m=u.id,b=u.onPostCommit;typeof b=="function"&&b(m,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Zt(e,e.return,S)}}else Vn(t,e,n,o);break;case 13:Vn(t,e,n,o);break;case 23:break;case 22:u=e.stateNode,m=e.alternate,e.memoizedState!==null?u._visibility&2?Vn(t,e,n,o):Ho(t,e):u._visibility&2?Vn(t,e,n,o):(u._visibility|=2,Ni(t,e,n,o,(e.subtreeFlags&10256)!==0)),r&2048&&Uu(m,e);break;case 24:Vn(t,e,n,o),r&2048&&Bu(e.alternate,e);break;default:Vn(t,e,n,o)}}function Ni(t,e,n,o,r){for(r=r&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,m=e,b=n,S=o,C=m.flags;switch(m.tag){case 0:case 11:case 15:Ni(u,m,b,S,r),Bo(8,m);break;case 23:break;case 22:var V=m.stateNode;m.memoizedState!==null?V._visibility&2?Ni(u,m,b,S,r):Ho(u,m):(V._visibility|=2,Ni(u,m,b,S,r)),r&&C&2048&&Uu(m.alternate,m);break;case 24:Ni(u,m,b,S,r),r&&C&2048&&Bu(m.alternate,m);break;default:Ni(u,m,b,S,r)}e=e.sibling}}function Ho(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,o=e,r=o.flags;switch(o.tag){case 22:Ho(n,o),r&2048&&Uu(o.alternate,o);break;case 24:Ho(n,o),r&2048&&Bu(o.alternate,o);break;default:Ho(n,o)}e=e.sibling}}var qo=8192;function ki(t){if(t.subtreeFlags&qo)for(t=t.child;t!==null;)v0(t),t=t.sibling}function v0(t){switch(t.tag){case 26:ki(t),t.flags&qo&&t.memoizedState!==null&&_v(An,t.memoizedState,t.memoizedProps);break;case 5:ki(t);break;case 3:case 4:var e=An;An=Nr(t.stateNode.containerInfo),ki(t),An=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=qo,qo=16777216,ki(t),qo=e):ki(t));break;default:ki(t)}}function x0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Po(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Ae=o,T0(o,t)}x0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)S0(t),t=t.sibling}function S0(t){switch(t.tag){case 0:case 11:case 15:Po(t),t.flags&2048&&va(9,t,t.return);break;case 3:Po(t);break;case 12:Po(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xr(t)):Po(t);break;default:Po(t)}}function xr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Ae=o,T0(o,t)}x0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:va(8,e,e.return),xr(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,xr(e));break;default:xr(e)}t=t.sibling}}function T0(t,e){for(;Ae!==null;){var n=Ae;switch(n.tag){case 0:case 11:case 15:va(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Oo(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Ae=o;else t:for(n=t;Ae!==null;){o=Ae;var r=o.sibling,u=o.return;if(h0(o),o===n){Ae=null;break t}if(r!==null){r.return=u,Ae=r;break t}Ae=u}}}var Jb={getCacheForType:function(t){var e=Ue(be),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},$b=typeof WeakMap=="function"?WeakMap:Map,jt=0,Qt=null,Tt=null,Et=0,Ut=0,nn=null,Ta=!1,_i=!1,Lu=!1,ia=0,ae=0,Aa=0,ti=0,Hu=0,gn=0,Vi=0,Yo=null,Fe=null,qu=!1,Pu=0,Sr=1/0,Tr=null,Oa=null,Ce=0,Da=null,ji=null,Ui=0,Yu=0,Xu=null,A0=null,Xo=0,Gu=null;function an(){if((jt&2)!==0&&Et!==0)return Et&-Et;if(k.T!==null){var t=Oi;return t!==0?t:Wu()}return Cl()}function O0(){gn===0&&(gn=(Et&536870912)===0||Nt?Ba():536870912);var t=pn.current;return t!==null&&(t.flags|=32),gn}function on(t,e,n){(t===Qt&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)&&(Bi(t,0),Ma(t,Et,gn,!1)),qn(t,n),((jt&2)===0||t!==Qt)&&(t===Qt&&((jt&2)===0&&(ti|=n),ae===4&&Ma(t,Et,gn,!1)),jn(t))}function D0(t,e,n){if((jt&6)!==0)throw Error(s(327));var o=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Sn(t,e),r=o?tv(t,e):Ku(t,e,!0),u=o;do{if(r===0){_i&&!o&&Ma(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!Wb(n)){r=Ku(t,e,!1),u=!1;continue}if(r===2){if(u=e,t.errorRecoveryDisabledLanes&u)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var b=t;r=Yo;var S=b.current.memoizedState.isDehydrated;if(S&&(Bi(b,m).flags|=256),m=Ku(b,m,!1),m!==2){if(Lu&&!S){b.errorRecoveryDisabledLanes|=u,ti|=u,r=4;break t}u=Fe,Fe=r,u!==null&&(Fe===null?Fe=u:Fe.push.apply(Fe,u))}r=m}if(u=!1,r!==2)continue}}if(r===1){Bi(t,0),Ma(t,e,0,!0);break}t:{switch(o=t,u=r,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Ma(o,e,gn,!Ta);break t;case 2:Fe=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(r=Pu+300-Ot(),10<r)){if(Ma(o,e,gn,!Ta),ye(o,0,!0)!==0)break t;o.timeoutHandle=tm(M0.bind(null,o,n,Fe,Tr,qu,e,gn,ti,Vi,Ta,u,2,-0,0),r);break t}M0(o,n,Fe,Tr,qu,e,gn,ti,Vi,Ta,u,0,-0,0)}}break}while(!0);jn(t)}function M0(t,e,n,o,r,u,m,b,S,C,V,H,z,N){if(t.timeoutHandle=-1,H=e.subtreeFlags,(H&8192||(H&16785408)===16785408)&&($o={stylesheets:null,count:0,unsuspend:kv},v0(e),H=Vv(),H!==null)){t.cancelPendingCommit=H(k0.bind(null,t,e,u,n,o,r,m,b,S,V,1,z,N)),Ma(t,u,m,!C);return}k0(t,e,u,n,o,r,m,b,S)}function Wb(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var r=n[o],u=r.getSnapshot;r=r.value;try{if(!We(u(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ma(t,e,n,o){e&=~Hu,e&=~ti,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var r=e;0<r;){var u=31-_e(r),m=1<<u;o[u]=-1,r&=~m}n!==0&&wl(t,n,e)}function Ar(){return(jt&6)===0?(Go(0),!1):!0}function Zu(){if(Tt!==null){if(Ut===0)var t=Tt.return;else t=Tt,Jn=Ka=null,uu(t),Ci=null,Vo=0,t=Tt;for(;t!==null;)o0(t.alternate,t),t=t.return;Tt=null}}function Bi(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,gv(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Zu(),Qt=t,Tt=n=Qn(t.current,null),Et=e,Ut=0,nn=null,Ta=!1,_i=Sn(t,e),Lu=!1,Vi=gn=Hu=ti=Aa=ae=0,Fe=Yo=null,qu=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var r=31-_e(o),u=1<<r;e|=t[r],o&=~u}return ia=e,Gl(),n}function E0(t,e){vt=null,k.H=cr,e===Mo||e===tr?(e=Xd(),Ut=3):e===qd?(e=Xd(),Ut=4):Ut=e===Gh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,nn=e,Tt===null&&(ae=1,pr(t,fn(e,t.current)))}function w0(){var t=k.H;return k.H=cr,t===null?cr:t}function R0(){var t=k.A;return k.A=Jb,t}function Qu(){ae=4,Ta||(Et&4194048)!==Et&&pn.current!==null||(_i=!0),(Aa&134217727)===0&&(ti&134217727)===0||Qt===null||Ma(Qt,Et,gn,!1)}function Ku(t,e,n){var o=jt;jt|=2;var r=w0(),u=R0();(Qt!==t||Et!==e)&&(Tr=null,Bi(t,e)),e=!1;var m=ae;t:do try{if(Ut!==0&&Tt!==null){var b=Tt,S=nn;switch(Ut){case 8:Zu(),m=6;break t;case 3:case 2:case 9:case 6:pn.current===null&&(e=!0);var C=Ut;if(Ut=0,nn=null,Li(t,b,S,C),n&&_i){m=0;break t}break;default:C=Ut,Ut=0,nn=null,Li(t,b,S,C)}}Ib(),m=ae;break}catch(V){E0(t,V)}while(!0);return e&&t.shellSuspendCounter++,Jn=Ka=null,jt=o,k.H=r,k.A=u,Tt===null&&(Qt=null,Et=0,Gl()),m}function Ib(){for(;Tt!==null;)C0(Tt)}function tv(t,e){var n=jt;jt|=2;var o=w0(),r=R0();Qt!==t||Et!==e?(Tr=null,Sr=Ot()+500,Bi(t,e)):_i=Sn(t,e);t:do try{if(Ut!==0&&Tt!==null){e=Tt;var u=nn;e:switch(Ut){case 1:Ut=0,nn=null,Li(t,e,u,1);break;case 2:case 9:if(Pd(u)){Ut=0,nn=null,z0(e);break}e=function(){Ut!==2&&Ut!==9||Qt!==t||(Ut=7),jn(t)},u.then(e,e);break t;case 3:Ut=7;break t;case 4:Ut=5;break t;case 7:Pd(u)?(Ut=0,nn=null,z0(e)):(Ut=0,nn=null,Li(t,e,u,7));break;case 5:var m=null;switch(Tt.tag){case 26:m=Tt.memoizedState;case 5:case 27:var b=Tt;if(!m||dm(m)){Ut=0,nn=null;var S=b.sibling;if(S!==null)Tt=S;else{var C=b.return;C!==null?(Tt=C,Or(C)):Tt=null}break e}}Ut=0,nn=null,Li(t,e,u,5);break;case 6:Ut=0,nn=null,Li(t,e,u,6);break;case 8:Zu(),ae=6;break t;default:throw Error(s(462))}}ev();break}catch(V){E0(t,V)}while(!0);return Jn=Ka=null,k.H=o,k.A=r,jt=n,Tt!==null?0:(Qt=null,Et=0,Gl(),ae)}function ev(){for(;Tt!==null&&!St();)C0(Tt)}function C0(t){var e=a0(t.alternate,t,ia);t.memoizedProps=t.pendingProps,e===null?Or(t):Tt=e}function z0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=$h(n,e,e.pendingProps,e.type,void 0,Et);break;case 11:e=$h(n,e,e.pendingProps,e.type.render,e.ref,Et);break;case 5:uu(e);default:o0(n,e),e=Tt=Nd(e,ia),e=a0(n,e,ia)}t.memoizedProps=t.pendingProps,e===null?Or(t):Tt=e}function Li(t,e,n,o){Jn=Ka=null,uu(e),Ci=null,Vo=0;var r=e.return;try{if(Xb(t,r,e,n,Et)){ae=1,pr(t,fn(n,t.current)),Tt=null;return}}catch(u){if(r!==null)throw Tt=r,u;ae=1,pr(t,fn(n,t.current)),Tt=null;return}e.flags&32768?(Nt||o===1?t=!0:_i||(Et&536870912)!==0?t=!1:(Ta=t=!0,(o===2||o===9||o===3||o===6)&&(o=pn.current,o!==null&&o.tag===13&&(o.flags|=16384))),N0(e,t)):Or(e)}function Or(t){var e=t;do{if((e.flags&32768)!==0){N0(e,Ta);return}t=e.return;var n=Zb(e.alternate,e,ia);if(n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);ae===0&&(ae=5)}function N0(t,e){do{var n=Qb(t.alternate,t);if(n!==null){n.flags&=32767,Tt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=n}while(t!==null);ae=6,Tt=null}function k0(t,e,n,o,r,u,m,b,S){t.cancelPendingCommit=null;do Dr();while(Ce!==0);if((jt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Bs,El(t,n,u,m,b,S),t===Qt&&(Tt=Qt=null,Et=0),ji=e,Da=t,Ui=n,Yu=u,Xu=r,A0=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ov(pe,function(){return B0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=k.T,k.T=null,r=Z.p,Z.p=2,m=jt,jt|=4;try{Kb(t,e,n)}finally{jt=m,Z.p=r,k.T=o}}Ce=1,_0(),V0(),j0()}}function _0(){if(Ce===1){Ce=0;var t=Da,e=ji,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var o=Z.p;Z.p=2;var r=jt;jt|=4;try{g0(e,t);var u=lc,m=Td(t.containerInfo),b=u.focusedElem,S=u.selectionRange;if(m!==b&&b&&b.ownerDocument&&Sd(b.ownerDocument.documentElement,b)){if(S!==null&&ks(b)){var C=S.start,V=S.end;if(V===void 0&&(V=C),"selectionStart"in b)b.selectionStart=C,b.selectionEnd=Math.min(V,b.value.length);else{var H=b.ownerDocument||document,z=H&&H.defaultView||window;if(z.getSelection){var N=z.getSelection(),ct=b.textContent.length,rt=Math.min(S.start,ct),qt=S.end===void 0?rt:Math.min(S.end,ct);!N.extend&&rt>qt&&(m=qt,qt=rt,rt=m);var M=xd(b,rt),A=xd(b,qt);if(M&&A&&(N.rangeCount!==1||N.anchorNode!==M.node||N.anchorOffset!==M.offset||N.focusNode!==A.node||N.focusOffset!==A.offset)){var R=H.createRange();R.setStart(M.node,M.offset),N.removeAllRanges(),rt>qt?(N.addRange(R),N.extend(A.node,A.offset)):(R.setEnd(A.node,A.offset),N.addRange(R))}}}}for(H=[],N=b;N=N.parentNode;)N.nodeType===1&&H.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<H.length;b++){var j=H[b];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Ur=!!oc,lc=oc=null}finally{jt=r,Z.p=o,k.T=n}}t.current=e,Ce=2}}function V0(){if(Ce===2){Ce=0;var t=Da,e=ji,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var o=Z.p;Z.p=2;var r=jt;jt|=4;try{d0(t,e.alternate,e)}finally{jt=r,Z.p=o,k.T=n}}Ce=3}}function j0(){if(Ce===4||Ce===3){Ce=0,Mt();var t=Da,e=ji,n=Ui,o=A0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ce=5:(Ce=0,ji=Da=null,U0(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(Oa=null),ro(n),e=e.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(Me,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=k.T,r=Z.p,Z.p=2,k.T=null;try{for(var u=t.onRecoverableError,m=0;m<o.length;m++){var b=o[m];u(b.value,{componentStack:b.stack})}}finally{k.T=e,Z.p=r}}(Ui&3)!==0&&Dr(),jn(t),r=t.pendingLanes,(n&4194090)!==0&&(r&42)!==0?t===Gu?Xo++:(Xo=0,Gu=t):Xo=0,Go(0)}}function U0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Oo(e)))}function Dr(t){return _0(),V0(),j0(),B0()}function B0(){if(Ce!==5)return!1;var t=Da,e=Yu;Yu=0;var n=ro(Ui),o=k.T,r=Z.p;try{Z.p=32>n?32:n,k.T=null,n=Xu,Xu=null;var u=Da,m=Ui;if(Ce=0,ji=Da=null,Ui=0,(jt&6)!==0)throw Error(s(331));var b=jt;if(jt|=4,S0(u.current),b0(u,u.current,m,n),jt=b,Go(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(Me,u)}catch{}return!0}finally{Z.p=r,k.T=o,U0(t,e)}}function L0(t,e,n){e=fn(n,e),e=Au(t.stateNode,e,2),t=pa(t,e,2),t!==null&&(qn(t,2),jn(t))}function Zt(t,e,n){if(t.tag===3)L0(t,t,n);else for(;e!==null;){if(e.tag===3){L0(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){t=fn(n,t),n=Yh(2),o=pa(e,n,2),o!==null&&(Xh(n,o,e,t),qn(o,2),jn(o));break}}e=e.return}}function Fu(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new $b;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(n)||(Lu=!0,r.add(n),t=nv.bind(null,t,e,n),e.then(t,t))}function nv(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Qt===t&&(Et&n)===n&&(ae===4||ae===3&&(Et&62914560)===Et&&300>Ot()-Pu?(jt&2)===0&&Bi(t,0):Hu|=n,Vi===Et&&(Vi=0)),jn(t)}function H0(t,e){e===0&&(e=Ge()),t=xi(t,e),t!==null&&(qn(t,e),jn(t))}function av(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H0(t,n)}function iv(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(e),H0(t,n)}function ov(t,e){return wt(t,e)}var Mr=null,Hi=null,Ju=!1,Er=!1,$u=!1,ei=0;function jn(t){t!==Hi&&t.next===null&&(Hi===null?Mr=Hi=t:Hi=Hi.next=t),Er=!0,Ju||(Ju=!0,rv())}function Go(t,e){if(!$u&&Er){$u=!0;do for(var n=!1,o=Mr;o!==null;){if(t!==0){var r=o.pendingLanes;if(r===0)var u=0;else{var m=o.suspendedLanes,b=o.pingedLanes;u=(1<<31-_e(42|t)+1)-1,u&=r&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,X0(o,u))}else u=Et,u=ye(o,o===Qt?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Sn(o,u)||(n=!0,X0(o,u));o=o.next}while(n);$u=!1}}function lv(){q0()}function q0(){Er=Ju=!1;var t=0;ei!==0&&(pv()&&(t=ei),ei=0);for(var e=Ot(),n=null,o=Mr;o!==null;){var r=o.next,u=P0(o,e);u===0?(o.next=null,n===null?Mr=r:n.next=r,r===null&&(Hi=n)):(n=o,(t!==0||(u&3)!==0)&&(Er=!0)),o=r}Go(t)}function P0(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var m=31-_e(u),b=1<<m,S=r[m];S===-1?((b&n)===0||(b&o)!==0)&&(r[m]=Xe(b,e)):S<=e&&(t.expiredLanes|=b),u&=~b}if(e=Qt,n=Et,n=ye(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,n===0||t===e&&(Ut===2||Ut===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&et(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Sn(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(o!==null&&et(o),ro(n)){case 2:case 8:n=He;break;case 32:n=pe;break;case 268435456:n=wn;break;default:n=pe}return o=Y0.bind(null,t),n=wt(n,o),t.callbackPriority=e,t.callbackNode=n,e}return o!==null&&o!==null&&et(o),t.callbackPriority=2,t.callbackNode=null,2}function Y0(t,e){if(Ce!==0&&Ce!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Dr()&&t.callbackNode!==n)return null;var o=Et;return o=ye(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(D0(t,o,e),P0(t,Ot()),t.callbackNode!=null&&t.callbackNode===n?Y0.bind(null,t):null)}function X0(t,e){if(Dr())return null;D0(t,e,!0)}function rv(){yv(function(){(jt&6)!==0?wt(Wt,lv):q0()})}function Wu(){return ei===0&&(ei=Ba()),ei}function G0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bl(""+t)}function Z0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function sv(t,e,n,o,r){if(e==="submit"&&n&&n.stateNode===r){var u=G0((r[Ve]||null).action),m=o.submitter;m&&(e=(e=m[Ve]||null)?G0(e.formAction):m.getAttribute("formAction"),e!==null&&(u=e,m=null));var b=new Pl("action","action",null,o,r);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ei!==0){var S=m?Z0(r,m):new FormData(r);bu(n,{pending:!0,data:S,method:r.method,action:u},null,S)}}else typeof u=="function"&&(b.preventDefault(),S=m?Z0(r,m):new FormData(r),bu(n,{pending:!0,data:S,method:r.method,action:u},u,S))},currentTarget:r}]})}}for(var Iu=0;Iu<Us.length;Iu++){var tc=Us[Iu],uv=tc.toLowerCase(),cv=tc[0].toUpperCase()+tc.slice(1);Tn(uv,"on"+cv)}Tn(Dd,"onAnimationEnd"),Tn(Md,"onAnimationIteration"),Tn(Ed,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(Eb,"onTransitionRun"),Tn(wb,"onTransitionStart"),Tn(Rb,"onTransitionCancel"),Tn(wd,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function Q0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],r=o.event;o=o.listeners;t:{var u=void 0;if(e)for(var m=o.length-1;0<=m;m--){var b=o[m],S=b.instance,C=b.currentTarget;if(b=b.listener,S!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=C;try{u(r)}catch(V){mr(V)}r.currentTarget=null,u=S}else for(m=0;m<o.length;m++){if(b=o[m],S=b.instance,C=b.currentTarget,b=b.listener,S!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=C;try{u(r)}catch(V){mr(V)}r.currentTarget=null,u=S}}}}function At(t,e){var n=e[fi];n===void 0&&(n=e[fi]=new Set);var o=t+"__bubble";n.has(o)||(K0(e,t,2,!1),n.add(o))}function ec(t,e,n){var o=0;e&&(o|=4),K0(n,t,o,e)}var wr="_reactListening"+Math.random().toString(36).slice(2);function nc(t){if(!t[wr]){t[wr]=!0,Nl.forEach(function(n){n!=="selectionchange"&&(fv.has(n)||ec(n,!1,t),ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wr]||(e[wr]=!0,ec("selectionchange",!1,e))}}function K0(t,e,n,o){switch(bm(e)){case 2:var r=Bv;break;case 8:r=Lv;break;default:r=gc}n=r.bind(null,e,n,t),r=void 0,!Os||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ac(t,e,n,o,r){var u=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var b=o.stateNode.containerInfo;if(b===r)break;if(m===4)for(m=o.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;b!==null;){if(m=ua(b),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){o=u=m;continue t}b=b.parentNode}}o=o.return}ed(function(){var C=u,V=Ts(n),H=[];t:{var z=Rd.get(t);if(z!==void 0){var N=Pl,ct=t;switch(t){case"keypress":if(Hl(n)===0)break t;case"keydown":case"keyup":N=ob;break;case"focusin":ct="focus",N=ws;break;case"focusout":ct="blur",N=ws;break;case"beforeblur":case"afterblur":N=ws;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=sb;break;case Dd:case Md:case Ed:N=Jy;break;case wd:N=cb;break;case"scroll":case"scrollend":N=Gy;break;case"wheel":N=db;break;case"copy":case"cut":case"paste":N=Wy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ld;break;case"toggle":case"beforetoggle":N=mb}var rt=(e&4)!==0,qt=!rt&&(t==="scroll"||t==="scrollend"),M=rt?z!==null?z+"Capture":null:z;rt=[];for(var A=C,R;A!==null;){var j=A;if(R=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||R===null||M===null||(j=co(A,M),j!=null&&rt.push(Qo(A,j,R))),qt)break;A=A.return}0<rt.length&&(z=new N(z,ct,null,n,V),H.push({event:z,listeners:rt}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",z&&n!==Ss&&(ct=n.relatedTarget||n.fromElement)&&(ua(ct)||ct[Pn]))break t;if((N||z)&&(z=V.window===V?V:(z=V.ownerDocument)?z.defaultView||z.parentWindow:window,N?(ct=n.relatedTarget||n.toElement,N=C,ct=ct?ua(ct):null,ct!==null&&(qt=d(ct),rt=ct.tag,ct!==qt||rt!==5&&rt!==27&&rt!==6)&&(ct=null)):(N=null,ct=C),N!==ct)){if(rt=id,j="onMouseLeave",M="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(rt=ld,j="onPointerLeave",M="onPointerEnter",A="pointer"),qt=N==null?z:La(N),R=ct==null?z:La(ct),z=new rt(j,A+"leave",N,n,V),z.target=qt,z.relatedTarget=R,j=null,ua(V)===C&&(rt=new rt(M,A+"enter",ct,n,V),rt.target=R,rt.relatedTarget=qt,j=rt),qt=j,N&&ct)e:{for(rt=N,M=ct,A=0,R=rt;R;R=qi(R))A++;for(R=0,j=M;j;j=qi(j))R++;for(;0<A-R;)rt=qi(rt),A--;for(;0<R-A;)M=qi(M),R--;for(;A--;){if(rt===M||M!==null&&rt===M.alternate)break e;rt=qi(rt),M=qi(M)}rt=null}else rt=null;N!==null&&F0(H,z,N,rt,!1),ct!==null&&qt!==null&&F0(H,qt,ct,rt,!0)}}t:{if(z=C?La(C):window,N=z.nodeName&&z.nodeName.toLowerCase(),N==="select"||N==="input"&&z.type==="file")var tt=md;else if(dd(z))if(pd)tt=Ob;else{tt=Tb;var xt=Sb}else N=z.nodeName,!N||N.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?C&&xs(C.elementType)&&(tt=md):tt=Ab;if(tt&&(tt=tt(t,C))){hd(H,tt,n,V);break t}xt&&xt(t,z,C),t==="focusout"&&C&&z.type==="number"&&C.memoizedProps.value!=null&&vs(z,"number",z.value)}switch(xt=C?La(C):window,t){case"focusin":(dd(xt)||xt.contentEditable==="true")&&(yi=xt,_s=C,vo=null);break;case"focusout":vo=_s=yi=null;break;case"mousedown":Vs=!0;break;case"contextmenu":case"mouseup":case"dragend":Vs=!1,Ad(H,n,V);break;case"selectionchange":if(Mb)break;case"keydown":case"keyup":Ad(H,n,V)}var nt;if(Cs)t:{switch(t){case"compositionstart":var ut="onCompositionStart";break t;case"compositionend":ut="onCompositionEnd";break t;case"compositionupdate":ut="onCompositionUpdate";break t}ut=void 0}else gi?cd(t,n)&&(ut="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ut="onCompositionStart");ut&&(rd&&n.locale!=="ko"&&(gi||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&gi&&(nt=nd()):(fa=V,Ds="value"in fa?fa.value:fa.textContent,gi=!0)),xt=Rr(C,ut),0<xt.length&&(ut=new od(ut,t,null,n,V),H.push({event:ut,listeners:xt}),nt?ut.data=nt:(nt=fd(n),nt!==null&&(ut.data=nt)))),(nt=gb?yb(t,n):bb(t,n))&&(ut=Rr(C,"onBeforeInput"),0<ut.length&&(xt=new od("onBeforeInput","beforeinput",null,n,V),H.push({event:xt,listeners:ut}),xt.data=nt)),sv(H,t,C,n,V)}Q0(H,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rr(t,e){for(var n=e+"Capture",o=[];t!==null;){var r=t,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=co(t,n),r!=null&&o.unshift(Qo(t,r,u)),r=co(t,e),r!=null&&o.push(Qo(t,r,u))),t.tag===3)return o;t=t.return}return[]}function qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function F0(t,e,n,o,r){for(var u=e._reactName,m=[];n!==null&&n!==o;){var b=n,S=b.alternate,C=b.stateNode;if(b=b.tag,S!==null&&S===o)break;b!==5&&b!==26&&b!==27||C===null||(S=C,r?(C=co(n,u),C!=null&&m.unshift(Qo(n,C,S))):r||(C=co(n,u),C!=null&&m.push(Qo(n,C,S)))),n=n.return}m.length!==0&&t.push({event:e,listeners:m})}var dv=/\r\n?/g,hv=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(dv,`
`).replace(hv,"")}function $0(t,e){return e=J0(e),J0(t)===e}function Cr(){}function Ht(t,e,n,o,r,u){switch(n){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||hi(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&hi(t,""+o);break;case"className":dt(t,"class",o);break;case"tabIndex":dt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":dt(t,n,o);break;case"style":If(t,o,u);break;case"data":if(e!=="object"){dt(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Bl(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Ht(t,e,"name",r.name,r,null),Ht(t,e,"formEncType",r.formEncType,r,null),Ht(t,e,"formMethod",r.formMethod,r,null),Ht(t,e,"formTarget",r.formTarget,r,null)):(Ht(t,e,"encType",r.encType,r,null),Ht(t,e,"method",r.method,r,null),Ht(t,e,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Bl(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=Cr);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=Bl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":At("beforetoggle",t),At("toggle",t),K(t,"popover",o);break;case"xlinkActuate":ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ht(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ht(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ht(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ht(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":K(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Yy.get(n)||n,K(t,n,o))}}function ic(t,e,n,o,r,u){switch(n){case"style":If(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof o=="string"?hi(t,o):(typeof o=="number"||typeof o=="bigint")&&hi(t,""+o);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Cr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kl.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),u=t[Ve]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,r),typeof o=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,o,r);break t}n in t?t[n]=o:o===!0?t.setAttribute(n,""):K(t,n,o)}}}function ze(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var o=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ht(t,e,u,m,n,null)}}r&&Ht(t,e,"srcSet",n.srcSet,n,null),o&&Ht(t,e,"src",n.src,n,null);return;case"input":At("invalid",t);var b=u=m=r=null,S=null,C=null;for(o in n)if(n.hasOwnProperty(o)){var V=n[o];if(V!=null)switch(o){case"name":r=V;break;case"type":m=V;break;case"checked":S=V;break;case"defaultChecked":C=V;break;case"value":u=V;break;case"defaultValue":b=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,e));break;default:Ht(t,e,o,V,n,null)}}Ff(t,u,b,S,C,m,r,!1),jl(t);return;case"select":At("invalid",t),o=m=u=null;for(r in n)if(n.hasOwnProperty(r)&&(b=n[r],b!=null))switch(r){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":o=b;default:Ht(t,e,r,b,n,null)}e=u,n=m,t.multiple=!!o,e!=null?di(t,!!o,e,!1):n!=null&&di(t,!!o,n,!0);return;case"textarea":At("invalid",t),u=r=o=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":o=b;break;case"defaultValue":r=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ht(t,e,m,b,n,null)}$f(t,o,r,u),jl(t);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(o=n[S],o!=null))switch(S){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(t,e,S,o,n,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(o=0;o<Zo.length;o++)At(Zo[o],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(o=n[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ht(t,e,C,o,n,null)}return;default:if(xs(e)){for(V in n)n.hasOwnProperty(V)&&(o=n[V],o!==void 0&&ic(t,e,V,o,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(o=n[b],o!=null&&Ht(t,e,b,o,n,null))}function mv(t,e,n,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,m=null,b=null,S=null,C=null,V=null;for(N in n){var H=n[N];if(n.hasOwnProperty(N)&&H!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":S=H;default:o.hasOwnProperty(N)||Ht(t,e,N,null,o,H)}}for(var z in o){var N=o[z];if(H=n[z],o.hasOwnProperty(z)&&(N!=null||H!=null))switch(z){case"type":u=N;break;case"name":r=N;break;case"checked":C=N;break;case"defaultChecked":V=N;break;case"value":m=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:N!==H&&Ht(t,e,z,N,o,H)}}bs(t,m,b,S,C,V,u,r);return;case"select":N=m=b=z=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":N=S;default:o.hasOwnProperty(u)||Ht(t,e,u,null,o,S)}for(r in o)if(u=o[r],S=n[r],o.hasOwnProperty(r)&&(u!=null||S!=null))switch(r){case"value":z=u;break;case"defaultValue":b=u;break;case"multiple":m=u;default:u!==S&&Ht(t,e,r,u,o,S)}e=b,n=m,o=N,z!=null?di(t,!!n,z,!1):!!o!=!!n&&(e!=null?di(t,!!n,e,!0):di(t,!!n,n?[]:"",!1));return;case"textarea":N=z=null;for(b in n)if(r=n[b],n.hasOwnProperty(b)&&r!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ht(t,e,b,null,o,r)}for(m in o)if(r=o[m],u=n[m],o.hasOwnProperty(m)&&(r!=null||u!=null))switch(m){case"value":z=r;break;case"defaultValue":N=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==u&&Ht(t,e,m,r,o,u)}Jf(t,z,N);return;case"option":for(var ct in n)if(z=n[ct],n.hasOwnProperty(ct)&&z!=null&&!o.hasOwnProperty(ct))switch(ct){case"selected":t.selected=!1;break;default:Ht(t,e,ct,null,o,z)}for(S in o)if(z=o[S],N=n[S],o.hasOwnProperty(S)&&z!==N&&(z!=null||N!=null))switch(S){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Ht(t,e,S,z,o,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in n)z=n[rt],n.hasOwnProperty(rt)&&z!=null&&!o.hasOwnProperty(rt)&&Ht(t,e,rt,null,o,z);for(C in o)if(z=o[C],N=n[C],o.hasOwnProperty(C)&&z!==N&&(z!=null||N!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:Ht(t,e,C,z,o,N)}return;default:if(xs(e)){for(var qt in n)z=n[qt],n.hasOwnProperty(qt)&&z!==void 0&&!o.hasOwnProperty(qt)&&ic(t,e,qt,void 0,o,z);for(V in o)z=o[V],N=n[V],!o.hasOwnProperty(V)||z===N||z===void 0&&N===void 0||ic(t,e,V,z,o,N);return}}for(var M in n)z=n[M],n.hasOwnProperty(M)&&z!=null&&!o.hasOwnProperty(M)&&Ht(t,e,M,null,o,z);for(H in o)z=o[H],N=n[H],!o.hasOwnProperty(H)||z===N||z==null&&N==null||Ht(t,e,H,z,o,N)}var oc=null,lc=null;function zr(t){return t.nodeType===9?t:t.ownerDocument}function W0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sc=null;function pv(){var t=window.event;return t&&t.type==="popstate"?t===sc?!1:(sc=t,!0):(sc=null,!1)}var tm=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(bv)}:tm;function bv(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function nm(t,e){var n=e,o=0,r=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<o&&8>o){n=o;var m=t.ownerDocument;if(n&1&&Ko(m.documentElement),n&2&&Ko(m.body),n&4)for(n=m.head,Ko(n),m=n.firstChild;m;){var b=m.nextSibling,S=m.nodeName;m[Ee]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(r===0){t.removeChild(u),nl(e);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:o=n.charCodeAt(0)-48;else o=0;n=u}while(n);nl(e)}function uc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":uc(n),un(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function vv(t,e,n,o){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ee])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=On(t.nextSibling),t===null)break}return null}function xv(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=On(t.nextSibling),t===null))return null;return t}function cc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Sv(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var o=function(){e(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function On(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var fc=null;function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function im(t,e,n){switch(e=zr(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ko(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);un(t)}var yn=new Map,om=new Set;function Nr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=Z.d;Z.d={f:Tv,r:Av,D:Ov,C:Dv,L:Mv,m:Ev,X:Rv,S:wv,M:Cv};function Tv(){var t=oa.f(),e=Ar();return t||e}function Av(t){var e=Yn(t);e!==null&&e.tag===5&&e.type==="form"?Dh(e):oa.r(t)}var Pi=typeof document>"u"?null:document;function lm(t,e,n){var o=Pi;if(o&&typeof e=="string"&&e){var r=cn(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),om.has(r)||(om.add(r),t={rel:t,crossOrigin:n,href:e},o.querySelector(r)===null&&(e=o.createElement("link"),ze(e,"link",t),fe(e),o.head.appendChild(e)))}}function Ov(t){oa.D(t),lm("dns-prefetch",t,null)}function Dv(t,e){oa.C(t,e),lm("preconnect",t,e)}function Mv(t,e,n){oa.L(t,e,n);var o=Pi;if(o&&t&&e){var r='link[rel="preload"][as="'+cn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+cn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+cn(n.imageSizes)+'"]')):r+='[href="'+cn(t)+'"]';var u=r;switch(e){case"style":u=Yi(t);break;case"script":u=Xi(t)}yn.has(u)||(t=y({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),yn.set(u,t),o.querySelector(r)!==null||e==="style"&&o.querySelector(Fo(u))||e==="script"&&o.querySelector(Jo(u))||(e=o.createElement("link"),ze(e,"link",t),fe(e),o.head.appendChild(e)))}}function Ev(t,e){oa.m(t,e);var n=Pi;if(n&&t){var o=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+cn(o)+'"][href="'+cn(t)+'"]',u=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Xi(t)}if(!yn.has(u)&&(t=y({rel:"modulepreload",href:t},e),yn.set(u,t),n.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jo(u)))return}o=n.createElement("link"),ze(o,"link",t),fe(o),n.head.appendChild(o)}}}function wv(t,e,n){oa.S(t,e,n);var o=Pi;if(o&&t){var r=Xn(o).hoistableStyles,u=Yi(t);e=e||"default";var m=r.get(u);if(!m){var b={loading:0,preload:null};if(m=o.querySelector(Fo(u)))b.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},n),(n=yn.get(u))&&dc(t,n);var S=m=o.createElement("link");fe(S),ze(S,"link",t),S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,kr(m,e,o)}m={type:"stylesheet",instance:m,count:1,state:b},r.set(u,m)}}}function Rv(t,e){oa.X(t,e);var n=Pi;if(n&&t){var o=Xn(n).hoistableScripts,r=Xi(t),u=o.get(r);u||(u=n.querySelector(Jo(r)),u||(t=y({src:t,async:!0},e),(e=yn.get(r))&&hc(t,e),u=n.createElement("script"),fe(u),ze(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function Cv(t,e){oa.M(t,e);var n=Pi;if(n&&t){var o=Xn(n).hoistableScripts,r=Xi(t),u=o.get(r);u||(u=n.querySelector(Jo(r)),u||(t=y({src:t,async:!0,type:"module"},e),(e=yn.get(r))&&hc(t,e),u=n.createElement("script"),fe(u),ze(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function rm(t,e,n,o){var r=(r=ot.current)?Nr(r):null;if(!r)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Yi(n.href),n=Xn(r).hoistableStyles,o=n.get(e),o||(o={type:"style",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Yi(n.href);var u=Xn(r).hoistableStyles,m=u.get(t);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,m),(u=r.querySelector(Fo(t)))&&!u._p&&(m.instance=u,m.state.loading=5),yn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},yn.set(t,n),u||zv(r,t,n,m.state))),e&&o===null)throw Error(s(528,""));return m}if(e&&o!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Xi(n),n=Xn(r).hoistableScripts,o=n.get(e),o||(o={type:"script",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Yi(t){return'href="'+cn(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function sm(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function zv(t,e,n,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),ze(e,"link",n),fe(e),t.head.appendChild(e))}function Xi(t){return'[src="'+cn(t)+'"]'}function Jo(t){return"script[async]"+t}function um(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+cn(n.href)+'"]');if(o)return e.instance=o,fe(o),o;var r=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),fe(o),ze(o,"style",r),kr(o,n.precedence,t),e.instance=o;case"stylesheet":r=Yi(n.href);var u=t.querySelector(Fo(r));if(u)return e.state.loading|=4,e.instance=u,fe(u),u;o=sm(n),(r=yn.get(r))&&dc(o,r),u=(t.ownerDocument||t).createElement("link"),fe(u);var m=u;return m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),ze(u,"link",o),e.state.loading|=4,kr(u,n.precedence,t),e.instance=u;case"script":return u=Xi(n.src),(r=t.querySelector(Jo(u)))?(e.instance=r,fe(r),r):(o=n,(r=yn.get(u))&&(o=y({},n),hc(o,r)),t=t.ownerDocument||t,r=t.createElement("script"),fe(r),ze(r,"link",o),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,kr(o,n.precedence,t));return e.instance}function kr(t,e,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,u=r,m=0;m<o.length;m++){var b=o[m];if(b.dataset.precedence===e)u=b;else if(u!==r)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function dc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function hc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var _r=null;function cm(t,e,n){if(_r===null){var o=new Map,r=_r=new Map;r.set(n,o)}else r=_r,o=r.get(n),o||(o=new Map,r.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var u=n[r];if(!(u[Ee]||u[Se]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(e)||"";m=t+m;var b=o.get(m);b?b.push(u):o.set(m,[u])}}return o}function fm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Nv(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function dm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var $o=null;function kv(){}function _v(t,e,n){if($o===null)throw Error(s(475));var o=$o;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var r=Yi(n.href),u=t.querySelector(Fo(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Vr.bind(o),t.then(o,o)),e.state.loading|=4,e.instance=u,fe(u);return}u=t.ownerDocument||t,n=sm(n),(r=yn.get(r))&&dc(n,r),u=u.createElement("link"),fe(u);var m=u;m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),ze(u,"link",n),e.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(o.count++,e=Vr.bind(o),t.addEventListener("load",e),t.addEventListener("error",e))}}function Vv(){if($o===null)throw Error(s(475));var t=$o;return t.stylesheets&&t.count===0&&mc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Vr(){if(this.count--,this.count===0){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var jr=null;function mc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,jr=new Map,e.forEach(jv,t),jr=null,Vr.call(t))}function jv(t,e){if(!(e.state.loading&4)){var n=jr.get(t);if(n)var o=n.get(null);else{n=new Map,jr.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var m=r[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),o=m)}o&&n.set(null,o)}r=e.instance,m=r.getAttribute("data-precedence"),u=n.get(m)||o,u===o&&n.set(null,r),n.set(m,r),this.count++,o=Vr.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),u?u.parentNode.insertBefore(r,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var Wo={$$typeof:q,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Uv(t,e,n,o,r,u,m,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oo(0),this.hiddenUpdates=oo(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function hm(t,e,n,o,r,u,m,b,S,C,V,H){return t=new Uv(t,e,n,m,b,S,C,H),e=1,u===!0&&(e|=24),u=Ie(3,null,null,e),t.current=u,u.stateNode=t,e=Fs(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:e},Is(u),t}function mm(t){return t?(t=Si,t):Si}function pm(t,e,n,o,r,u){r=mm(r),o.context===null?o.context=r:o.pendingContext=r,o=ma(e),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=pa(t,o,e),n!==null&&(on(n,t,e),wo(n,t,e))}function gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pc(t,e){gm(t,e),(t=t.alternate)&&gm(t,e)}function ym(t){if(t.tag===13){var e=xi(t,67108864);e!==null&&on(e,t,67108864),pc(t,67108864)}}var Ur=!0;function Bv(t,e,n,o){var r=k.T;k.T=null;var u=Z.p;try{Z.p=2,gc(t,e,n,o)}finally{Z.p=u,k.T=r}}function Lv(t,e,n,o){var r=k.T;k.T=null;var u=Z.p;try{Z.p=8,gc(t,e,n,o)}finally{Z.p=u,k.T=r}}function gc(t,e,n,o){if(Ur){var r=yc(o);if(r===null)ac(t,e,o,Br,n),vm(t,o);else if(qv(r,t,e,n,o))o.stopPropagation();else if(vm(t,o),e&4&&-1<Hv.indexOf(t)){for(;r!==null;){var u=Yn(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Cn(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var S=1<<31-_e(m);b.entanglements[1]|=S,m&=~S}jn(u),(jt&6)===0&&(Sr=Ot()+500,Go(0))}}break;case 13:b=xi(u,2),b!==null&&on(b,u,2),Ar(),pc(u,2)}if(u=yc(o),u===null&&ac(t,e,o,Br,n),u===r)break;r=u}r!==null&&o.stopPropagation()}else ac(t,e,o,null,n)}}function yc(t){return t=Ts(t),bc(t)}var Br=null;function bc(t){if(Br=null,t=ua(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Br=t,null}function bm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case Wt:return 2;case He:return 8;case pe:case $e:return 32;case wn:return 268435456;default:return 32}default:return 32}}var vc=!1,wa=null,Ra=null,Ca=null,Io=new Map,tl=new Map,za=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vm(t,e){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(e.pointerId)}}function el(t,e,n,o,r,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[r]},e!==null&&(e=Yn(e),e!==null&&ym(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function qv(t,e,n,o,r){switch(e){case"focusin":return wa=el(wa,t,e,n,o,r),!0;case"dragenter":return Ra=el(Ra,t,e,n,o,r),!0;case"mouseover":return Ca=el(Ca,t,e,n,o,r),!0;case"pointerover":var u=r.pointerId;return Io.set(u,el(Io.get(u)||null,t,e,n,o,r)),!0;case"gotpointercapture":return u=r.pointerId,tl.set(u,el(tl.get(u)||null,t,e,n,o,r)),!0}return!1}function xm(t){var e=ua(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,gs(t.priority,function(){if(n.tag===13){var o=an();o=lo(o);var r=xi(n,o);r!==null&&on(r,n,o),pc(n,o)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yc(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);Ss=o,n.target.dispatchEvent(o),Ss=null}else return e=Yn(n),e!==null&&ym(e),t.blockedOn=n,!1;e.shift()}return!0}function Sm(t,e,n){Lr(t)&&n.delete(e)}function Pv(){vc=!1,wa!==null&&Lr(wa)&&(wa=null),Ra!==null&&Lr(Ra)&&(Ra=null),Ca!==null&&Lr(Ca)&&(Ca=null),Io.forEach(Sm),tl.forEach(Sm)}function Hr(t,e){t.blockedOn===e&&(t.blockedOn=null,vc||(vc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Pv)))}var qr=null;function Tm(t){qr!==t&&(qr=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){qr===t&&(qr=null);for(var e=0;e<t.length;e+=3){var n=t[e],o=t[e+1],r=t[e+2];if(typeof o!="function"){if(bc(o||n)===null)continue;break}var u=Yn(n);u!==null&&(t.splice(e,3),e-=3,bu(u,{pending:!0,data:r,method:n.method,action:o},o,r))}}))}function nl(t){function e(S){return Hr(S,t)}wa!==null&&Hr(wa,t),Ra!==null&&Hr(Ra,t),Ca!==null&&Hr(Ca,t),Io.forEach(e),tl.forEach(e);for(var n=0;n<za.length;n++){var o=za[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<za.length&&(n=za[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&za.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var r=n[o],u=n[o+1],m=r[Ve]||null;if(typeof u=="function")m||Tm(n);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(r=u,m=u[Ve]||null)b=m.formAction;else if(bc(r)!==null)continue}else b=m.action;typeof b=="function"?n[o+1]=b:(n.splice(o,3),o-=3),Tm(n)}}}function xc(t){this._internalRoot=t}Pr.prototype.render=xc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,o=an();pm(n,o,t,e,null,null)},Pr.prototype.unmount=xc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pm(t.current,2,null,t,null,null),Ar(),e[Pn]=null}};function Pr(t){this._internalRoot=t}Pr.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cl();t={blockedOn:null,target:t,priority:e};for(var n=0;n<za.length&&e!==0&&e<za[n].priority;n++);za.splice(n,0,t),n===0&&xm(t)}};var Am=i.version;if(Am!=="19.1.0")throw Error(s(527,Am,"19.1.0"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var Yv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Me=Yr.inject(Yv),ge=Yr}catch{}}return il.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,o="",r=Lh,u=Hh,m=qh,b=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=hm(t,1,!1,null,null,n,o,r,u,m,b,null),t[Pn]=e.current,nc(t),new xc(e)},il.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var o=!1,r="",u=Lh,m=Hh,b=qh,S=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),e=hm(t,1,!0,e,n??null,o,r,u,m,b,S,C),e.context=mm(null),n=e.current,o=an(),o=lo(o),r=ma(o),r.callback=null,pa(n,r,o),n=o,e.current.lanes=n,qn(e,n),jn(e),t[Pn]=e.current,nc(t),new Pr(e)},il.version="19.1.0",il}var km;function t1(){if(km)return Ac.exports;km=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Ac.exports=Iv(),Ac.exports}var e1=t1();const mf=X.createContext({});function pf(a){const i=X.useRef(null);return i.current===null&&(i.current=a()),i.current}const gf=typeof window<"u",og=gf?X.useLayoutEffect:X.useEffect,ls=X.createContext(null);function yf(a,i){a.indexOf(i)===-1&&a.push(i)}function bf(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const ra=(a,i,l)=>l>i?i:l<a?a:l;let vf=()=>{};const sa={},lg=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function rg(a){return typeof a=="object"&&a!==null}const sg=a=>/^0[^.\s]+$/u.test(a);function xf(a){let i;return()=>(i===void 0&&(i=a()),i)}const xn=a=>a,n1=(a,i)=>l=>i(a(l)),xl=(...a)=>a.reduce(n1),hl=(a,i,l)=>{const s=i-a;return s===0?1:(l-a)/s};class Sf{constructor(){this.subscriptions=[]}add(i){return yf(this.subscriptions,i),()=>bf(this.subscriptions,i)}notify(i,l,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,l,s);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(i,l,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Un=a=>a*1e3,Bn=a=>a/1e3;function ug(a,i){return i?a*(1e3/i):0}const cg=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,a1=1e-7,i1=12;function o1(a,i,l,s,c){let d,f,g=0;do f=i+(l-i)/2,d=cg(f,s,c)-a,d>0?l=f:i=f;while(Math.abs(d)>a1&&++g<i1);return f}function Sl(a,i,l,s){if(a===i&&l===s)return xn;const c=d=>o1(d,0,1,a,l);return d=>d===0||d===1?d:cg(c(d),i,s)}const fg=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,dg=a=>i=>1-a(1-i),hg=Sl(.33,1.53,.69,.99),Tf=dg(hg),mg=fg(Tf),pg=a=>(a*=2)<1?.5*Tf(a):.5*(2-Math.pow(2,-10*(a-1))),Af=a=>1-Math.sin(Math.acos(a)),gg=dg(Af),yg=fg(Af),l1=Sl(.42,0,1,1),r1=Sl(0,0,.58,1),bg=Sl(.42,0,.58,1),s1=a=>Array.isArray(a)&&typeof a[0]!="number",vg=a=>Array.isArray(a)&&typeof a[0]=="number",u1={linear:xn,easeIn:l1,easeInOut:bg,easeOut:r1,circIn:Af,circInOut:yg,circOut:gg,backIn:Tf,backInOut:mg,backOut:hg,anticipate:pg},c1=a=>typeof a=="string",_m=a=>{if(vg(a)){vf(a.length===4);const[i,l,s,c]=a;return Sl(i,l,s,c)}else if(c1(a))return u1[a];return a},Xr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function f1(a,i){let l=new Set,s=new Set,c=!1,d=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(h.schedule(y),a()),y(g)}const h={schedule:(y,v=!1,x=!1)=>{const D=x&&c?l:s;return v&&f.add(y),D.has(y)||D.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,c){d=!0;return}c=!0,[l,s]=[s,l],l.forEach(p),l.clear(),c=!1,d&&(d=!1,h.process(y))}};return h}const d1=40;function xg(a,i){let l=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>l=!0,f=Xr.reduce((q,$)=>(q[$]=f1(d),q),{}),{setup:g,read:p,resolveKeyframes:h,preUpdate:y,update:v,preRender:x,render:E,postRender:D}=f,O=()=>{const q=sa.useManualTiming?c.timestamp:performance.now();l=!1,sa.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(q-c.timestamp,d1),1)),c.timestamp=q,c.isProcessing=!0,g.process(c),p.process(c),h.process(c),y.process(c),v.process(c),x.process(c),E.process(c),D.process(c),c.isProcessing=!1,l&&i&&(s=!1,a(O))},_=()=>{l=!0,s=!0,c.isProcessing||a(O)};return{schedule:Xr.reduce((q,$)=>{const P=f[$];return q[$]=(F,Q=!1,G=!1)=>(l||_(),P.schedule(F,Q,G)),q},{}),cancel:q=>{for(let $=0;$<Xr.length;$++)f[Xr[$]].cancel(q)},state:c,steps:f}}const{schedule:$t,cancel:Va,state:Ne,steps:Ec}=xg(typeof requestAnimationFrame<"u"?requestAnimationFrame:xn,!0);let Jr;function h1(){Jr=void 0}const Je={now:()=>(Jr===void 0&&Je.set(Ne.isProcessing||sa.useManualTiming?Ne.timestamp:performance.now()),Jr),set:a=>{Jr=a,queueMicrotask(h1)}},Sg=a=>i=>typeof i=="string"&&i.startsWith(a),Of=Sg("--"),m1=Sg("var(--"),Df=a=>m1(a)?p1.test(a.split("/*")[0].trim()):!1,p1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,no={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},ml={...no,transform:a=>ra(0,1,a)},Gr={...no,default:1},sl=a=>Math.round(a*1e5)/1e5,Mf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function g1(a){return a==null}const y1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ef=(a,i)=>l=>!!(typeof l=="string"&&y1.test(l)&&l.startsWith(a)||i&&!g1(l)&&Object.prototype.hasOwnProperty.call(l,i)),Tg=(a,i,l)=>s=>{if(typeof s!="string")return s;const[c,d,f,g]=s.match(Mf);return{[a]:parseFloat(c),[i]:parseFloat(d),[l]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},b1=a=>ra(0,255,a),wc={...no,transform:a=>Math.round(b1(a))},oi={test:Ef("rgb","red"),parse:Tg("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:s=1})=>"rgba("+wc.transform(a)+", "+wc.transform(i)+", "+wc.transform(l)+", "+sl(ml.transform(s))+")"};function v1(a){let i="",l="",s="",c="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),s=a.substring(5,7),c=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),s=a.substring(3,4),c=a.substring(4,5),i+=i,l+=l,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const Gc={test:Ef("#"),parse:v1,transform:oi.transform},Tl=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),_a=Tl("deg"),Ln=Tl("%"),ft=Tl("px"),x1=Tl("vh"),S1=Tl("vw"),Vm={...Ln,parse:a=>Ln.parse(a)/100,transform:a=>Ln.transform(a*100)},Fi={test:Ef("hsl","hue"),parse:Tg("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:s=1})=>"hsla("+Math.round(a)+", "+Ln.transform(sl(i))+", "+Ln.transform(sl(l))+", "+sl(ml.transform(s))+")"},me={test:a=>oi.test(a)||Gc.test(a)||Fi.test(a),parse:a=>oi.test(a)?oi.parse(a):Fi.test(a)?Fi.parse(a):Gc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?oi.transform(a):Fi.transform(a),getAnimatableNone:a=>{const i=me.parse(a);return i.alpha=0,me.transform(i)}},T1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function A1(a){return isNaN(a)&&typeof a=="string"&&(a.match(Mf)?.length||0)+(a.match(T1)?.length||0)>0}const Ag="number",Og="color",O1="var",D1="var(",jm="${}",M1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function pl(a){const i=a.toString(),l=[],s={color:[],number:[],var:[]},c=[];let d=0;const g=i.replace(M1,p=>(me.test(p)?(s.color.push(d),c.push(Og),l.push(me.parse(p))):p.startsWith(D1)?(s.var.push(d),c.push(O1),l.push(p)):(s.number.push(d),c.push(Ag),l.push(parseFloat(p))),++d,jm)).split(jm);return{values:l,split:g,indexes:s,types:c}}function Dg(a){return pl(a).values}function Mg(a){const{split:i,types:l}=pl(a),s=i.length;return c=>{let d="";for(let f=0;f<s;f++)if(d+=i[f],c[f]!==void 0){const g=l[f];g===Ag?d+=sl(c[f]):g===Og?d+=me.transform(c[f]):d+=c[f]}return d}}const E1=a=>typeof a=="number"?0:me.test(a)?me.getAnimatableNone(a):a;function w1(a){const i=Dg(a);return Mg(a)(i.map(E1))}const ja={test:A1,parse:Dg,createTransformer:Mg,getAnimatableNone:w1};function Rc(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function R1({hue:a,saturation:i,lightness:l,alpha:s}){a/=360,i/=100,l/=100;let c=0,d=0,f=0;if(!i)c=d=f=l;else{const g=l<.5?l*(1+i):l+i-l*i,p=2*l-g;c=Rc(p,g,a+1/3),d=Rc(p,g,a),f=Rc(p,g,a-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:s}}function ts(a,i){return l=>l>0?i:a}const ee=(a,i,l)=>a+(i-a)*l,Cc=(a,i,l)=>{const s=a*a,c=l*(i*i-s)+s;return c<0?0:Math.sqrt(c)},C1=[Gc,oi,Fi],z1=a=>C1.find(i=>i.test(a));function Um(a){const i=z1(a);if(!i)return!1;let l=i.parse(a);return i===Fi&&(l=R1(l)),l}const Bm=(a,i)=>{const l=Um(a),s=Um(i);if(!l||!s)return ts(a,i);const c={...l};return d=>(c.red=Cc(l.red,s.red,d),c.green=Cc(l.green,s.green,d),c.blue=Cc(l.blue,s.blue,d),c.alpha=ee(l.alpha,s.alpha,d),oi.transform(c))},Zc=new Set(["none","hidden"]);function N1(a,i){return Zc.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function k1(a,i){return l=>ee(a,i,l)}function wf(a){return typeof a=="number"?k1:typeof a=="string"?Df(a)?ts:me.test(a)?Bm:j1:Array.isArray(a)?Eg:typeof a=="object"?me.test(a)?Bm:_1:ts}function Eg(a,i){const l=[...a],s=l.length,c=a.map((d,f)=>wf(d)(d,i[f]));return d=>{for(let f=0;f<s;f++)l[f]=c[f](d);return l}}function _1(a,i){const l={...a,...i},s={};for(const c in l)a[c]!==void 0&&i[c]!==void 0&&(s[c]=wf(a[c])(a[c],i[c]));return c=>{for(const d in s)l[d]=s[d](c);return l}}function V1(a,i){const l=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const d=i.types[c],f=a.indexes[d][s[d]],g=a.values[f]??0;l[c]=g,s[d]++}return l}const j1=(a,i)=>{const l=ja.createTransformer(i),s=pl(a),c=pl(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?Zc.has(a)&&!c.values.length||Zc.has(i)&&!s.values.length?N1(a,i):xl(Eg(V1(s,c),c.values),l):ts(a,i)};function wg(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?ee(a,i,l):wf(a)(a,i)}const U1=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>$t.update(i,l),stop:()=>Va(i),now:()=>Ne.isProcessing?Ne.timestamp:Je.now()}},Rg=(a,i,l=10)=>{let s="";const c=Math.max(Math.round(i/l),2);for(let d=0;d<c;d++)s+=Math.round(a(d/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},es=2e4;function Rf(a){let i=0;const l=50;let s=a.next(i);for(;!s.done&&i<es;)i+=l,s=a.next(i);return i>=es?1/0:i}function B1(a,i=100,l){const s=l({...a,keyframes:[0,i]}),c=Math.min(Rf(s),es);return{type:"keyframes",ease:d=>s.next(c*d).value/i,duration:Bn(c)}}const L1=5;function Cg(a,i,l){const s=Math.max(i-L1,0);return ug(l-a(s),i-s)}const ie={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zc=.001;function H1({duration:a=ie.duration,bounce:i=ie.bounce,velocity:l=ie.velocity,mass:s=ie.mass}){let c,d,f=1-i;f=ra(ie.minDamping,ie.maxDamping,f),a=ra(ie.minDuration,ie.maxDuration,Bn(a)),f<1?(c=h=>{const y=h*f,v=y*a,x=y-l,E=Qc(h,f),D=Math.exp(-v);return zc-x/E*D},d=h=>{const v=h*f*a,x=v*l+l,E=Math.pow(f,2)*Math.pow(h,2)*a,D=Math.exp(-v),O=Qc(Math.pow(h,2),f);return(-c(h)+zc>0?-1:1)*((x-E)*D)/O}):(c=h=>{const y=Math.exp(-h*a),v=(h-l)*a+1;return-zc+y*v},d=h=>{const y=Math.exp(-h*a),v=(l-h)*(a*a);return y*v});const g=5/a,p=P1(c,d,g);if(a=Un(a),isNaN(p))return{stiffness:ie.stiffness,damping:ie.damping,duration:a};{const h=Math.pow(p,2)*s;return{stiffness:h,damping:f*2*Math.sqrt(s*h),duration:a}}}const q1=12;function P1(a,i,l){let s=l;for(let c=1;c<q1;c++)s=s-a(s)/i(s);return s}function Qc(a,i){return a*Math.sqrt(1-i*i)}const Y1=["duration","bounce"],X1=["stiffness","damping","mass"];function Lm(a,i){return i.some(l=>a[l]!==void 0)}function G1(a){let i={velocity:ie.velocity,stiffness:ie.stiffness,damping:ie.damping,mass:ie.mass,isResolvedFromDuration:!1,...a};if(!Lm(a,X1)&&Lm(a,Y1))if(a.visualDuration){const l=a.visualDuration,s=2*Math.PI/(l*1.2),c=s*s,d=2*ra(.05,1,1-(a.bounce||0))*Math.sqrt(c);i={...i,mass:ie.mass,stiffness:c,damping:d}}else{const l=H1(a);i={...i,...l,mass:ie.mass},i.isResolvedFromDuration=!0}return i}function ns(a=ie.visualDuration,i=ie.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:s,restDelta:c}=l;const d=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],g={done:!1,value:d},{stiffness:p,damping:h,mass:y,duration:v,velocity:x,isResolvedFromDuration:E}=G1({...l,velocity:-Bn(l.velocity||0)}),D=x||0,O=h/(2*Math.sqrt(p*y)),_=f-d,U=Bn(Math.sqrt(p/y)),Y=Math.abs(_)<5;s||(s=Y?ie.restSpeed.granular:ie.restSpeed.default),c||(c=Y?ie.restDelta.granular:ie.restDelta.default);let q;if(O<1){const P=Qc(U,O);q=F=>{const Q=Math.exp(-O*U*F);return f-Q*((D+O*U*_)/P*Math.sin(P*F)+_*Math.cos(P*F))}}else if(O===1)q=P=>f-Math.exp(-U*P)*(_+(D+U*_)*P);else{const P=U*Math.sqrt(O*O-1);q=F=>{const Q=Math.exp(-O*U*F),G=Math.min(P*F,300);return f-Q*((D+O*U*_)*Math.sinh(G)+P*_*Math.cosh(G))/P}}const $={calculatedDuration:E&&v||null,next:P=>{const F=q(P);if(E)g.done=P>=v;else{let Q=P===0?D:0;O<1&&(Q=P===0?Un(D):Cg(q,P,F));const G=Math.abs(Q)<=s,lt=Math.abs(f-F)<=c;g.done=G&&lt}return g.value=g.done?f:F,g},toString:()=>{const P=Math.min(Rf($),es),F=Rg(Q=>$.next(P*Q).value,P,30);return P+"ms "+F},toTransition:()=>{}};return $}ns.applyToOptions=a=>{const i=B1(a,100,ns);return a.ease=i.ease,a.duration=Un(i.duration),a.type="keyframes",a};function Kc({keyframes:a,velocity:i=0,power:l=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:g,max:p,restDelta:h=.5,restSpeed:y}){const v=a[0],x={done:!1,value:v},E=G=>g!==void 0&&G<g||p!==void 0&&G>p,D=G=>g===void 0?p:p===void 0||Math.abs(g-G)<Math.abs(p-G)?g:p;let O=l*i;const _=v+O,U=f===void 0?_:f(_);U!==_&&(O=U-v);const Y=G=>-O*Math.exp(-G/s),q=G=>U+Y(G),$=G=>{const lt=Y(G),st=q(G);x.done=Math.abs(lt)<=h,x.value=x.done?U:st};let P,F;const Q=G=>{E(x.value)&&(P=G,F=ns({keyframes:[x.value,D(x.value)],velocity:Cg(q,G,x.value),damping:c,stiffness:d,restDelta:h,restSpeed:y}))};return Q(0),{calculatedDuration:null,next:G=>{let lt=!1;return!F&&P===void 0&&(lt=!0,$(G),Q(G)),P!==void 0&&G>=P?F.next(G-P):(!lt&&$(G),x)}}}function Z1(a,i,l){const s=[],c=l||sa.mix||wg,d=a.length-1;for(let f=0;f<d;f++){let g=c(a[f],a[f+1]);if(i){const p=Array.isArray(i)?i[f]||xn:i;g=xl(p,g)}s.push(g)}return s}function Q1(a,i,{clamp:l=!0,ease:s,mixer:c}={}){const d=a.length;if(vf(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=a[0]===a[1];a[0]>a[d-1]&&(a=[...a].reverse(),i=[...i].reverse());const g=Z1(i,s,c),p=g.length,h=y=>{if(f&&y<a[0])return i[0];let v=0;if(p>1)for(;v<a.length-2&&!(y<a[v+1]);v++);const x=hl(a[v],a[v+1],y);return g[v](x)};return l?y=>h(ra(a[0],a[d-1],y)):h}function K1(a,i){const l=a[a.length-1];for(let s=1;s<=i;s++){const c=hl(0,i,s);a.push(ee(l,1,c))}}function F1(a){const i=[0];return K1(i,a.length-1),i}function J1(a,i){return a.map(l=>l*i)}function $1(a,i){return a.map(()=>i||bg).splice(0,a.length-1)}function ul({duration:a=300,keyframes:i,times:l,ease:s="easeInOut"}){const c=s1(s)?s.map(_m):_m(s),d={done:!1,value:i[0]},f=J1(l&&l.length===i.length?l:F1(i),a),g=Q1(f,i,{ease:Array.isArray(c)?c:$1(i,c)});return{calculatedDuration:a,next:p=>(d.value=g(p),d.done=p>=a,d)}}const W1=a=>a!==null;function Cf(a,{repeat:i,repeatType:l="loop"},s,c=1){const d=a.filter(W1),g=c<0||i&&l!=="loop"&&i%2===1?0:d.length-1;return!g||s===void 0?d[g]:s}const I1={decay:Kc,inertia:Kc,tween:ul,keyframes:ul,spring:ns};function zg(a){typeof a.type=="string"&&(a.type=I1[a.type])}class zf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const t2=a=>a/100;class Nf extends zf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==Je.now()&&this.tick(Je.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;zg(i);const{type:l=ul,repeat:s=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=i;let{keyframes:g}=i;const p=l||ul;p!==ul&&typeof g[0]!="number"&&(this.mixKeyframes=xl(t2,wg(g[0],g[1])),g=[0,100]);const h=p({...i,keyframes:g});d==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...g].reverse(),velocity:-f})),h.calculatedDuration===null&&(h.calculatedDuration=Rf(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=h}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:s,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:E,type:D,onUpdate:O,finalKeyframe:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const U=this.currentTime-h*(this.playbackSpeed>=0?1:-1),Y=this.playbackSpeed>=0?U<0:U>c;this.currentTime=Math.max(U,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let q=this.currentTime,$=s;if(v){const G=Math.min(this.currentTime,c)/g;let lt=Math.floor(G),st=G%1;!st&&G>=1&&(st=1),st===1&&lt--,lt=Math.min(lt,v+1),!!(lt%2)&&(x==="reverse"?(st=1-st,E&&(st-=E/g)):x==="mirror"&&($=f)),q=ra(0,1,st)*g}const P=Y?{done:!1,value:y[0]}:$.next(q);d&&(P.value=d(P.value));let{done:F}=P;!Y&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return Q&&D!==Kc&&(P.value=Cf(y,this.options,_,this.speed)),O&&O(P.value),Q&&this.finish(),P}then(i,l){return this.finished.then(i,l)}get duration(){return Bn(this.calculatedDuration)}get time(){return Bn(this.currentTime)}set time(i){i=Un(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(Je.now());const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=Bn(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=U1,startTime:l}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=l??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Je.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function e2(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const li=a=>a*180/Math.PI,Fc=a=>{const i=li(Math.atan2(a[1],a[0]));return Jc(i)},n2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Fc,rotateZ:Fc,skewX:a=>li(Math.atan(a[1])),skewY:a=>li(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Jc=a=>(a=a%360,a<0&&(a+=360),a),Hm=Fc,qm=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Pm=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),a2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:qm,scaleY:Pm,scale:a=>(qm(a)+Pm(a))/2,rotateX:a=>Jc(li(Math.atan2(a[6],a[5]))),rotateY:a=>Jc(li(Math.atan2(-a[2],a[0]))),rotateZ:Hm,rotate:Hm,skewX:a=>li(Math.atan(a[4])),skewY:a=>li(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function $c(a){return a.includes("scale")?1:0}function Wc(a,i){if(!a||a==="none")return $c(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(l)s=a2,c=l;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=n2,c=g}if(!c)return $c(i);const d=s[i],f=c[1].split(",").map(o2);return typeof d=="function"?d(f):f[d]}const i2=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return Wc(l,i)};function o2(a){return parseFloat(a.trim())}const ao=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],io=new Set(ao),Ym=a=>a===no||a===ft,l2=new Set(["x","y","z"]),r2=ao.filter(a=>!l2.has(a));function s2(a){const i=[];return r2.forEach(l=>{const s=a.getValue(l);s!==void 0&&(i.push([l,s.get()]),s.set(l.startsWith("scale")?1:0))}),i}const ri={width:({x:a},{paddingLeft:i="0",paddingRight:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),height:({y:a},{paddingTop:i="0",paddingBottom:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>Wc(i,"x"),y:(a,{transform:i})=>Wc(i,"y")};ri.translateX=ri.x;ri.translateY=ri.y;const si=new Set;let Ic=!1,tf=!1,ef=!1;function Ng(){if(tf){const a=Array.from(si).filter(s=>s.needsMeasurement),i=new Set(a.map(s=>s.element)),l=new Map;i.forEach(s=>{const c=s2(s);c.length&&(l.set(s,c),s.render())}),a.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=l.get(s);c&&c.forEach(([d,f])=>{s.getValue(d)?.set(f)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}tf=!1,Ic=!1,si.forEach(a=>a.complete(ef)),si.clear()}function kg(){si.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(tf=!0)})}function u2(){ef=!0,kg(),Ng(),ef=!1}class kf{constructor(i,l,s,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=s,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(si.add(this),Ic||(Ic=!0,$t.read(kg),$t.resolveKeyframes(Ng))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:s,motionValue:c}=this;if(i[0]===null){const d=c?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&l){const g=s.readValue(l,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),c&&d===void 0&&c.set(i[0])}e2(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),si.delete(this)}cancel(){this.state==="scheduled"&&(si.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const c2=a=>a.startsWith("--");function f2(a,i,l){c2(i)?a.style.setProperty(i,l):a.style[i]=l}const d2=xf(()=>window.ScrollTimeline!==void 0),h2={};function m2(a,i){const l=xf(a);return()=>h2[i]??l()}const _g=m2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ll=([a,i,l,s])=>`cubic-bezier(${a}, ${i}, ${l}, ${s})`,Xm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ll([0,.65,.55,1]),circOut:ll([.55,0,1,.45]),backIn:ll([.31,.01,.66,-.59]),backOut:ll([.33,1.53,.69,.99])};function Vg(a,i){if(a)return typeof a=="function"?_g()?Rg(a,i):"ease-out":vg(a)?ll(a):Array.isArray(a)?a.map(l=>Vg(l,i)||Xm.easeOut):Xm[a]}function p2(a,i,l,{delay:s=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:g="easeOut",times:p}={},h=void 0){const y={[i]:l};p&&(y.offset=p);const v=Vg(g,c);Array.isArray(v)&&(y.easing=v);const x={delay:s,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return h&&(x.pseudoElement=h),a.animate(y,x)}function jg(a){return typeof a=="function"&&"applyToOptions"in a}function g2({type:a,...i}){return jg(a)&&_g()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class y2 extends zf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:l,name:s,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:g,onComplete:p}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,vf(typeof i.type!="string");const h=g2(i);this.animation=p2(l,s,c,h,d),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=Cf(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):f2(l,s,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Bn(Number(i))}get time(){return Bn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=Un(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&d2()?(this.animation.timeline=i,xn):l(this)}}const Ug={anticipate:pg,backInOut:mg,circInOut:yg};function b2(a){return a in Ug}function v2(a){typeof a.ease=="string"&&b2(a.ease)&&(a.ease=Ug[a.ease])}const Gm=10;class x2 extends y2{constructor(i){v2(i),zg(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:s,onComplete:c,element:d,...f}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const g=new Nf({...f,autoplay:!1}),p=Un(this.finishedTime??this.time);l.setWithVelocity(g.sample(p-Gm).value,g.sample(p).value,Gm),g.stop()}}const Zm=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(ja.test(a)||a==="0")&&!a.startsWith("url("));function S2(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function T2(a,i,l,s){const c=a[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const d=a[a.length-1],f=Zm(c,i),g=Zm(d,i);return!f||!g?!1:S2(a)||(l==="spring"||jg(l))&&s}const A2=new Set(["opacity","clipPath","filter","transform"]),O2=xf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function D2(a){const{motionValue:i,name:l,repeatDelay:s,repeatType:c,damping:d,type:f}=a;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:h}=i.owner.getProps();return O2()&&l&&A2.has(l)&&(l!=="transform"||!h)&&!p&&!s&&c!=="mirror"&&d!==0&&f!=="inertia"}const M2=40;class E2 extends zf{constructor({autoplay:i=!0,delay:l=0,type:s="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:g,name:p,motionValue:h,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Je.now();const x={autoplay:i,delay:l,type:s,repeat:c,repeatDelay:d,repeatType:f,name:p,motionValue:h,element:y,...v},E=y?.KeyframeResolver||kf;this.keyframeResolver=new E(g,(D,O,_)=>this.onKeyframesResolved(D,O,x,!_),p,h,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,s,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:g,delay:p,isHandoff:h,onUpdate:y}=s;this.resolvedAt=Je.now(),T2(i,d,f,g)||((sa.instantAnimations||!p)&&y?.(Cf(i,s,l)),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>M2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...s,keyframes:i},E=!h&&D2(x)?new x2({...x,element:x.motionValue.owner.current}):new Nf(x);E.finished.then(()=>this.notifyFinished()).catch(xn),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),u2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const w2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function R2(a){const i=w2.exec(a);if(!i)return[,];const[,l,s,c]=i;return[`--${l??s}`,c]}function Bg(a,i,l=1){const[s,c]=R2(a);if(!s)return;const d=window.getComputedStyle(i).getPropertyValue(s);if(d){const f=d.trim();return lg(f)?parseFloat(f):f}return Df(c)?Bg(c,i,l+1):c}function _f(a,i){return a?.[i]??a?.default??a}const Lg=new Set(["width","height","top","left","right","bottom",...ao]),C2={test:a=>a==="auto",parse:a=>a},Hg=a=>i=>i.test(a),qg=[no,ft,Ln,_a,S1,x1,C2],Qm=a=>qg.find(Hg(a));function z2(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||sg(a):!0}const N2=new Set(["brightness","contrast","saturate","opacity"]);function k2(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[s]=l.match(Mf)||[];if(!s)return a;const c=l.replace(s,"");let d=N2.has(i)?1:0;return s!==l&&(d*=100),i+"("+d+c+")"}const _2=/\b([a-z-]*)\(.*?\)/gu,nf={...ja,getAnimatableNone:a=>{const i=a.match(_2);return i?i.map(k2).join(" "):a}},Km={...no,transform:Math.round},V2={rotate:_a,rotateX:_a,rotateY:_a,rotateZ:_a,scale:Gr,scaleX:Gr,scaleY:Gr,scaleZ:Gr,skew:_a,skewX:_a,skewY:_a,distance:ft,translateX:ft,translateY:ft,translateZ:ft,x:ft,y:ft,z:ft,perspective:ft,transformPerspective:ft,opacity:ml,originX:Vm,originY:Vm,originZ:ft},Vf={borderWidth:ft,borderTopWidth:ft,borderRightWidth:ft,borderBottomWidth:ft,borderLeftWidth:ft,borderRadius:ft,radius:ft,borderTopLeftRadius:ft,borderTopRightRadius:ft,borderBottomRightRadius:ft,borderBottomLeftRadius:ft,width:ft,maxWidth:ft,height:ft,maxHeight:ft,top:ft,right:ft,bottom:ft,left:ft,padding:ft,paddingTop:ft,paddingRight:ft,paddingBottom:ft,paddingLeft:ft,margin:ft,marginTop:ft,marginRight:ft,marginBottom:ft,marginLeft:ft,backgroundPositionX:ft,backgroundPositionY:ft,...V2,zIndex:Km,fillOpacity:ml,strokeOpacity:ml,numOctaves:Km},j2={...Vf,color:me,backgroundColor:me,outlineColor:me,fill:me,stroke:me,borderColor:me,borderTopColor:me,borderRightColor:me,borderBottomColor:me,borderLeftColor:me,filter:nf,WebkitFilter:nf},Pg=a=>j2[a];function Yg(a,i){let l=Pg(a);return l!==nf&&(l=ja),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const U2=new Set(["auto","none","0"]);function B2(a,i,l){let s=0,c;for(;s<a.length&&!c;){const d=a[s];typeof d=="string"&&!U2.has(d)&&pl(d).values.length&&(c=a[s]),s++}if(c&&l)for(const d of i)a[d]=Yg(l,c)}class L2 extends kf{constructor(i,l,s,c,d){super(i,l,s,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:s}=this;if(!l||!l.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let h=i[p];if(typeof h=="string"&&(h=h.trim(),Df(h))){const y=Bg(h,l.current);y!==void 0&&(i[p]=y),p===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Lg.has(s)||i.length!==2)return;const[c,d]=i,f=Qm(c),g=Qm(d);if(f!==g)if(Ym(f)&&Ym(g))for(let p=0;p<i.length;p++){const h=i[p];typeof h=="string"&&(i[p]=parseFloat(h))}else ri[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||z2(i[c]))&&s.push(c);s.length&&B2(i,s,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ri[s](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const c=l[l.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(l);c&&c.jump(this.measuredOrigin,!1);const d=s.length-1,f=s[d];s[d]=ri[l](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,p])=>{i.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function H2(a,i,l){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const c=l?.[a]??s.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a)}const Xg=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function Gg(a){return rg(a)&&"offsetHeight"in a}const Fm=30,q2=a=>!isNaN(parseFloat(a));class P2{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const d=Je.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty();c&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=Je.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=q2(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new Sf);const s=this.events[i].add(l);return i==="change"?()=>{s(),$t.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i,l=!0){!l||!this.passiveEffect?this.updateAndNotify(i,l):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,l,s){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Je.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Fm)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,Fm);return ug(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function to(a,i){return new P2(a,i)}const{schedule:jf}=xg(queueMicrotask,!1),Mn={x:!1,y:!1};function Zg(){return Mn.x||Mn.y}function Y2(a){return a==="x"||a==="y"?Mn[a]?null:(Mn[a]=!0,()=>{Mn[a]=!1}):Mn.x||Mn.y?null:(Mn.x=Mn.y=!0,()=>{Mn.x=Mn.y=!1})}function Qg(a,i){const l=H2(a),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[l,c,()=>s.abort()]}function Jm(a){return!(a.pointerType==="touch"||Zg())}function X2(a,i,l={}){const[s,c,d]=Qg(a,l),f=g=>{if(!Jm(g))return;const{target:p}=g,h=i(p,g);if(typeof h!="function"||!p)return;const y=v=>{Jm(v)&&(h(v),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,c)};return s.forEach(g=>{g.addEventListener("pointerenter",f,c)}),d}const Kg=(a,i)=>i?a===i?!0:Kg(a,i.parentElement):!1,Uf=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,G2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Z2(a){return G2.has(a.tagName)||a.tabIndex!==-1}const $r=new WeakSet;function $m(a){return i=>{i.key==="Enter"&&a(i)}}function Nc(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Q2=(a,i)=>{const l=a.currentTarget;if(!l)return;const s=$m(()=>{if($r.has(l))return;Nc(l,"down");const c=$m(()=>{Nc(l,"up")}),d=()=>Nc(l,"cancel");l.addEventListener("keyup",c,i),l.addEventListener("blur",d,i)});l.addEventListener("keydown",s,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",s),i)};function Wm(a){return Uf(a)&&!Zg()}function K2(a,i,l={}){const[s,c,d]=Qg(a,l),f=g=>{const p=g.currentTarget;if(!Wm(g))return;$r.add(p);const h=i(p,g),y=(E,D)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),$r.has(p)&&$r.delete(p),Wm(E)&&typeof h=="function"&&h(E,{success:D})},v=E=>{y(E,p===window||p===document||l.useGlobalTarget||Kg(p,E.target))},x=E=>{y(E,!1)};window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",x,c)};return s.forEach(g=>{(l.useGlobalTarget?window:g).addEventListener("pointerdown",f,c),Gg(g)&&(g.addEventListener("focus",h=>Q2(h,c)),!Z2(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),d}function Fg(a){return rg(a)&&"ownerSVGElement"in a}function F2(a){return Fg(a)&&a.tagName==="svg"}const Le=a=>!!(a&&a.getVelocity),J2=[...qg,me,ja],$2=a=>J2.find(Hg(a)),Bf=X.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});class W2 extends X.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(l&&i.isPresent&&!this.props.isPresent){const s=l.offsetParent,c=Gg(s)&&s.offsetWidth||0,d=this.props.sizeRef.current;d.height=l.offsetHeight||0,d.width=l.offsetWidth||0,d.top=l.offsetTop,d.left=l.offsetLeft,d.right=c-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function I2({children:a,isPresent:i,anchorX:l,root:s}){const c=X.useId(),d=X.useRef(null),f=X.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:g}=X.useContext(Bf);return X.useInsertionEffect(()=>{const{width:p,height:h,top:y,left:v,right:x}=f.current;if(i||!d.current||!p||!h)return;const E=l==="left"?`left: ${v}`:`right: ${x}`;d.current.dataset.motionPopId=c;const D=document.createElement("style");g&&(D.nonce=g);const O=s??document.head;return O.appendChild(D),D.sheet&&D.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${E}px !important;
            top: ${y}px !important;
          }
        `),()=>{O.removeChild(D),O.contains(D)&&O.removeChild(D)}},[i]),w.jsx(W2,{isPresent:i,childRef:d,sizeRef:f,children:X.cloneElement(a,{ref:d})})}const tx=({children:a,initial:i,isPresent:l,onExitComplete:s,custom:c,presenceAffectsLayout:d,mode:f,anchorX:g,root:p})=>{const h=pf(ex),y=X.useId();let v=!0,x=X.useMemo(()=>(v=!1,{id:y,initial:i,isPresent:l,custom:c,onExitComplete:E=>{h.set(E,!0);for(const D of h.values())if(!D)return;s&&s()},register:E=>(h.set(E,!1),()=>h.delete(E))}),[l,h,s]);return d&&v&&(x={...x}),X.useMemo(()=>{h.forEach((E,D)=>h.set(D,!1))},[l]),X.useEffect(()=>{!l&&!h.size&&s&&s()},[l]),f==="popLayout"&&(a=w.jsx(I2,{isPresent:l,anchorX:g,root:p,children:a})),w.jsx(ls.Provider,{value:x,children:a})};function ex(){return new Map}function Jg(a=!0){const i=X.useContext(ls);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:s,register:c}=i,d=X.useId();X.useEffect(()=>{if(a)return c(d)},[a]);const f=X.useCallback(()=>a&&s&&s(d),[d,s,a]);return!l&&s?[!1,f]:[!0]}const Zr=a=>a.key||"";function Im(a){const i=[];return X.Children.forEach(a,l=>{X.isValidElement(l)&&i.push(l)}),i}const $g=({children:a,custom:i,initial:l=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:d="sync",propagate:f=!1,anchorX:g="left",root:p})=>{const[h,y]=Jg(f),v=X.useMemo(()=>Im(a),[a]),x=f&&!h?[]:v.map(Zr),E=X.useRef(!0),D=X.useRef(v),O=pf(()=>new Map),[_,U]=X.useState(v),[Y,q]=X.useState(v);og(()=>{E.current=!1,D.current=v;for(let F=0;F<Y.length;F++){const Q=Zr(Y[F]);x.includes(Q)?O.delete(Q):O.get(Q)!==!0&&O.set(Q,!1)}},[Y,x.length,x.join("-")]);const $=[];if(v!==_){let F=[...v];for(let Q=0;Q<Y.length;Q++){const G=Y[Q],lt=Zr(G);x.includes(lt)||(F.splice(Q,0,G),$.push(G))}return d==="wait"&&$.length&&(F=$),q(Im(F)),U(v),null}const{forceRender:P}=X.useContext(mf);return w.jsx(w.Fragment,{children:Y.map(F=>{const Q=Zr(F),G=f&&!h?!1:v===Y||x.includes(Q),lt=()=>{if(O.has(Q))O.set(Q,!0);else return;let st=!0;O.forEach(kt=>{kt||(st=!1)}),st&&(P?.(),q(D.current),f&&y?.(),s&&s())};return w.jsx(tx,{isPresent:G,initial:!E.current||l?void 0:!1,custom:i,presenceAffectsLayout:c,mode:d,root:p,onExitComplete:G?void 0:lt,anchorX:g,children:F},Q)})})},Wg=X.createContext({strict:!1}),tp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},eo={};for(const a in tp)eo[a]={isEnabled:i=>tp[a].some(l=>!!i[l])};function nx(a){for(const i in a)eo[i]={...eo[i],...a[i]}}const ax=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function as(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||ax.has(a)}let Ig=a=>!as(a);function ix(a){typeof a=="function"&&(Ig=i=>i.startsWith("on")?!as(i):a(i))}try{ix(require("@emotion/is-prop-valid").default)}catch{}function ox(a,i,l){const s={};for(const c in a)c==="values"&&typeof a.values=="object"||(Ig(c)||l===!0&&as(c)||!i&&!as(c)||a.draggable&&c.startsWith("onDrag"))&&(s[c]=a[c]);return s}const rs=X.createContext({});function ss(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function gl(a){return typeof a=="string"||Array.isArray(a)}const Lf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hf=["initial",...Lf];function us(a){return ss(a.animate)||Hf.some(i=>gl(a[i]))}function ty(a){return!!(us(a)||a.variants)}function lx(a,i){if(us(a)){const{initial:l,animate:s}=a;return{initial:l===!1||gl(l)?l:void 0,animate:gl(s)?s:void 0}}return a.inherit!==!1?i:{}}function rx(a){const{initial:i,animate:l}=lx(a,X.useContext(rs));return X.useMemo(()=>({initial:i,animate:l}),[ep(i),ep(l)])}function ep(a){return Array.isArray(a)?a.join(" "):a}const yl={};function sx(a){for(const i in a)yl[i]=a[i],Of(i)&&(yl[i].isCSSVariable=!0)}function ey(a,{layout:i,layoutId:l}){return io.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!yl[a]||a==="opacity")}const ux={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cx=ao.length;function fx(a,i,l){let s="",c=!0;for(let d=0;d<cx;d++){const f=ao[d],g=a[f];if(g===void 0)continue;let p=!0;if(typeof g=="number"?p=g===(f.startsWith("scale")?1:0):p=parseFloat(g)===0,!p||l){const h=Xg(g,Vf[f]);if(!p){c=!1;const y=ux[f]||f;s+=`${y}(${h}) `}l&&(i[f]=h)}}return s=s.trim(),l?s=l(i,c?"":s):c&&(s="none"),s}function qf(a,i,l){const{style:s,vars:c,transformOrigin:d}=a;let f=!1,g=!1;for(const p in i){const h=i[p];if(io.has(p)){f=!0;continue}else if(Of(p)){c[p]=h;continue}else{const y=Xg(h,Vf[p]);p.startsWith("origin")?(g=!0,d[p]=y):s[p]=y}}if(i.transform||(f||l?s.transform=fx(i,a.transform,l):s.transform&&(s.transform="none")),g){const{originX:p="50%",originY:h="50%",originZ:y=0}=d;s.transformOrigin=`${p} ${h} ${y}`}}const Pf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ny(a,i,l){for(const s in i)!Le(i[s])&&!ey(s,l)&&(a[s]=i[s])}function dx({transformTemplate:a},i){return X.useMemo(()=>{const l=Pf();return qf(l,i,a),Object.assign({},l.vars,l.style)},[i])}function hx(a,i){const l=a.style||{},s={};return ny(s,l,a),Object.assign(s,dx(a,i)),s}function mx(a,i){const l={},s=hx(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=s,l}const px={offset:"stroke-dashoffset",array:"stroke-dasharray"},gx={offset:"strokeDashoffset",array:"strokeDasharray"};function yx(a,i,l=1,s=0,c=!0){a.pathLength=1;const d=c?px:gx;a[d.offset]=ft.transform(-s);const f=ft.transform(i),g=ft.transform(l);a[d.array]=`${f} ${g}`}function ay(a,{attrX:i,attrY:l,attrScale:s,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...g},p,h,y){if(qf(a,g,h),p){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:v,style:x}=a;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=y?.transformBox??"fill-box",delete v.transformBox),i!==void 0&&(v.x=i),l!==void 0&&(v.y=l),s!==void 0&&(v.scale=s),c!==void 0&&yx(v,c,d,f,!1)}const iy=()=>({...Pf(),attrs:{}}),oy=a=>typeof a=="string"&&a.toLowerCase()==="svg";function bx(a,i,l,s){const c=X.useMemo(()=>{const d=iy();return ay(d,i,oy(s),a.transformTemplate,a.style),{...d.attrs,style:{...d.style}}},[i]);if(a.style){const d={};ny(d,a.style,a),c.style={...d,...c.style}}return c}const vx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yf(a){return typeof a!="string"||a.includes("-")?!1:!!(vx.indexOf(a)>-1||/[A-Z]/u.test(a))}function xx(a,i,l,{latestValues:s},c,d=!1){const g=(Yf(a)?bx:mx)(i,s,c,a),p=ox(i,typeof a=="string",d),h=a!==X.Fragment?{...p,...g,ref:l}:{},{children:y}=i,v=X.useMemo(()=>Le(y)?y.get():y,[y]);return X.createElement(a,{...h,children:v})}function np(a){const i=[{},{}];return a?.values.forEach((l,s)=>{i[0][s]=l.get(),i[1][s]=l.getVelocity()}),i}function Xf(a,i,l,s){if(typeof i=="function"){const[c,d]=np(s);i=i(l!==void 0?l:a.custom,c,d)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[c,d]=np(s);i=i(l!==void 0?l:a.custom,c,d)}return i}function Wr(a){return Le(a)?a.get():a}function Sx({scrapeMotionValuesFromProps:a,createRenderState:i},l,s,c){return{latestValues:Tx(l,s,c,a),renderState:i()}}function Tx(a,i,l,s){const c={},d=s(a,{});for(const x in d)c[x]=Wr(d[x]);let{initial:f,animate:g}=a;const p=us(a),h=ty(a);i&&h&&!p&&a.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=l?l.initial===!1:!1;y=y||f===!1;const v=y?g:f;if(v&&typeof v!="boolean"&&!ss(v)){const x=Array.isArray(v)?v:[v];for(let E=0;E<x.length;E++){const D=Xf(a,x[E]);if(D){const{transitionEnd:O,transition:_,...U}=D;for(const Y in U){let q=U[Y];if(Array.isArray(q)){const $=y?q.length-1:0;q=q[$]}q!==null&&(c[Y]=q)}for(const Y in O)c[Y]=O[Y]}}}return c}const ly=a=>(i,l)=>{const s=X.useContext(rs),c=X.useContext(ls),d=()=>Sx(a,i,s,c);return l?d():pf(d)};function Gf(a,i,l){const{style:s}=a,c={};for(const d in s)(Le(s[d])||i.style&&Le(i.style[d])||ey(d,a)||l?.getValue(d)?.liveStyle!==void 0)&&(c[d]=s[d]);return c}const Ax=ly({scrapeMotionValuesFromProps:Gf,createRenderState:Pf});function ry(a,i,l){const s=Gf(a,i,l);for(const c in a)if(Le(a[c])||Le(i[c])){const d=ao.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[d]=a[c]}return s}const Ox=ly({scrapeMotionValuesFromProps:ry,createRenderState:iy}),Dx=Symbol.for("motionComponentSymbol");function Ji(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function Mx(a,i,l){return X.useCallback(s=>{s&&a.onMount&&a.onMount(s),i&&(s?i.mount(s):i.unmount()),l&&(typeof l=="function"?l(s):Ji(l)&&(l.current=s))},[i])}const Zf=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Ex="framerAppearId",sy="data-"+Zf(Ex),uy=X.createContext({});function wx(a,i,l,s,c){const{visualElement:d}=X.useContext(rs),f=X.useContext(Wg),g=X.useContext(ls),p=X.useContext(Bf).reducedMotion,h=X.useRef(null);s=s||f.renderer,!h.current&&s&&(h.current=s(a,{visualState:i,parent:d,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:p}));const y=h.current,v=X.useContext(uy);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&Rx(h.current,l,c,v);const x=X.useRef(!1);X.useInsertionEffect(()=>{y&&x.current&&y.update(l,g)});const E=l[sy],D=X.useRef(!!E&&!window.MotionHandoffIsComplete?.(E)&&window.MotionHasOptimisedAnimation?.(E));return og(()=>{y&&(x.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),D.current&&y.animationState&&y.animationState.animateChanges())}),X.useEffect(()=>{y&&(!D.current&&y.animationState&&y.animationState.animateChanges(),D.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(E)}),D.current=!1))}),y}function Rx(a,i,l,s){const{layoutId:c,layout:d,drag:f,dragConstraints:g,layoutScroll:p,layoutRoot:h,layoutCrossfade:y}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:cy(a.parent)),a.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||g&&Ji(g),visualElement:a,animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:h})}function cy(a){if(a)return a.options.allowProjection!==!1?a.projection:cy(a.parent)}function kc(a,{forwardMotionProps:i=!1}={},l,s){l&&nx(l);const c=Yf(a)?Ox:Ax;function d(g,p){let h;const y={...X.useContext(Bf),...g,layoutId:Cx(g)},{isStatic:v}=y,x=rx(g),E=c(g,v);if(!v&&gf){zx();const D=Nx(y);h=D.MeasureLayout,x.visualElement=wx(a,E,y,s,D.ProjectionNode)}return w.jsxs(rs.Provider,{value:x,children:[h&&x.visualElement?w.jsx(h,{visualElement:x.visualElement,...y}):null,xx(a,g,Mx(E,x.visualElement,p),E,v,i)]})}d.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=X.forwardRef(d);return f[Dx]=a,f}function Cx({layoutId:a}){const i=X.useContext(mf).id;return i&&a!==void 0?i+"-"+a:a}function zx(a,i){X.useContext(Wg).strict}function Nx(a){const{drag:i,layout:l}=eo;if(!i&&!l)return{};const s={...i,...l};return{MeasureLayout:i?.isEnabled(a)||l?.isEnabled(a)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function kx(a,i){if(typeof Proxy>"u")return kc;const l=new Map,s=(d,f)=>kc(d,f,a,i),c=(d,f)=>s(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?s:(l.has(f)||l.set(f,kc(f,void 0,a,i)),l.get(f))})}function fy({top:a,left:i,right:l,bottom:s}){return{x:{min:i,max:l},y:{min:a,max:s}}}function _x({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function Vx(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),s=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:s.y,right:s.x}}function _c(a){return a===void 0||a===1}function af({scale:a,scaleX:i,scaleY:l}){return!_c(a)||!_c(i)||!_c(l)}function ii(a){return af(a)||dy(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function dy(a){return ap(a.x)||ap(a.y)}function ap(a){return a&&a!=="0%"}function is(a,i,l){const s=a-l,c=i*s;return l+c}function ip(a,i,l,s,c){return c!==void 0&&(a=is(a,c,s)),is(a,l,s)+i}function of(a,i=0,l=1,s,c){a.min=ip(a.min,i,l,s,c),a.max=ip(a.max,i,l,s,c)}function hy(a,{x:i,y:l}){of(a.x,i.translate,i.scale,i.originPoint),of(a.y,l.translate,l.scale,l.originPoint)}const op=.999999999999,lp=1.0000000000001;function jx(a,i,l,s=!1){const c=l.length;if(!c)return;i.x=i.y=1;let d,f;for(let g=0;g<c;g++){d=l[g],f=d.projectionDelta;const{visualElement:p}=d.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Wi(a,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,hy(a,f)),s&&ii(d.latestValues)&&Wi(a,d.latestValues))}i.x<lp&&i.x>op&&(i.x=1),i.y<lp&&i.y>op&&(i.y=1)}function $i(a,i){a.min=a.min+i,a.max=a.max+i}function rp(a,i,l,s,c=.5){const d=ee(a.min,a.max,c);of(a,i,l,d,s)}function Wi(a,i){rp(a.x,i.x,i.scaleX,i.scale,i.originX),rp(a.y,i.y,i.scaleY,i.scale,i.originY)}function my(a,i){return fy(Vx(a.getBoundingClientRect(),i))}function Ux(a,i,l){const s=my(a,l),{scroll:c}=i;return c&&($i(s.x,c.offset.x),$i(s.y,c.offset.y)),s}const sp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ii=()=>({x:sp(),y:sp()}),up=()=>({min:0,max:0}),se=()=>({x:up(),y:up()}),lf={current:null},py={current:!1};function Bx(){if(py.current=!0,!!gf)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>lf.current=a.matches;a.addEventListener("change",i),i()}else lf.current=!1}const Lx=new WeakMap;function Hx(a,i,l){for(const s in i){const c=i[s],d=l[s];if(Le(c))a.addValue(s,c);else if(Le(d))a.addValue(s,to(c,{owner:a}));else if(d!==c)if(a.hasValue(s)){const f=a.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=a.getStaticValue(s);a.addValue(s,to(f!==void 0?f:c,{owner:a}))}}for(const s in l)i[s]===void 0&&a.removeValue(s);return i}const cp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class qx{scrapeMotionValuesFromProps(i,l,s){return{}}constructor({parent:i,props:l,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=kf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Je.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,$t.render(this.render,!1,!0))};const{latestValues:p,renderState:h}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=l.initial?{...p}:{},this.renderState=h,this.parent=i,this.props=l,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!d,this.isControllingVariants=us(l),this.isVariantNode=ty(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(l,{},this);for(const x in v){const E=v[x];p[x]!==void 0&&Le(E)&&E.set(p[x],!1)}}mount(i){this.current=i,Lx.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,s)=>this.bindToMotionValue(s,l)),py.current||Bx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:lf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Va(this.notifyUpdate),Va(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=io.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=l.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&$t.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),d=l.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{c(),d(),f&&f(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in eo){const l=eo[i];if(!l)continue;const{isEnabled:s,Feature:c}=l;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):se()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let s=0;s<cp.length;s++){const c=cp[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=i[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=Hx(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const s=this.values.get(i);l!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&l!==void 0&&(s=to(l===null?void 0:l,{owner:this}),this.addValue(i,s)),s}readValue(i,l){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(lg(s)||sg(s))?s=parseFloat(s):!$2(s)&&ja.test(l)&&(s=Yg(i,l)),this.setBaseTarget(i,Le(s)?s.get():s)),Le(s)?s.get():s}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let s;if(typeof l=="string"||typeof l=="object"){const d=Xf(this.props,l,this.presenceContext?.custom);d&&(s=d[i])}if(l&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!Le(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new Sf),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){jf.render(this.render)}}class gy extends qx{constructor(){super(...arguments),this.KeyframeResolver=L2}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:s}){delete l[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Le(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function yy(a,{style:i,vars:l},s,c){const d=a.style;let f;for(f in i)d[f]=i[f];c?.applyProjectionStyles(d,s);for(f in l)d.setProperty(f,l[f])}function Px(a){return window.getComputedStyle(a)}class Yx extends gy{constructor(){super(...arguments),this.type="html",this.renderInstance=yy}readValueFromInstance(i,l){if(io.has(l))return this.projection?.isProjecting?$c(l):i2(i,l);{const s=Px(i),c=(Of(l)?s.getPropertyValue(l):s[l])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:l}){return my(i,l)}build(i,l,s){qf(i,l,s.transformTemplate)}scrapeMotionValuesFromProps(i,l,s){return Gf(i,l,s)}}const by=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Xx(a,i,l,s){yy(a,i,void 0,s);for(const c in i.attrs)a.setAttribute(by.has(c)?c:Zf(c),i.attrs[c])}class Gx extends gy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=se}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(io.has(l)){const s=Pg(l);return s&&s.default||0}return l=by.has(l)?l:Zf(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,s){return ry(i,l,s)}build(i,l,s){ay(i,l,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,l,s,c){Xx(i,l,s,c)}mount(i){this.isSVGTag=oy(i.tagName),super.mount(i)}}const Zx=(a,i)=>Yf(a)?new Gx(i):new Yx(i,{allowProjection:a!==X.Fragment});function bl(a,i,l){const s=a.getProps();return Xf(s,i,l!==void 0?l:s.custom,a)}const rf=a=>Array.isArray(a);function Qx(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,to(l))}function Kx(a){return rf(a)?a[a.length-1]||0:a}function Fx(a,i){const l=bl(a,i);let{transitionEnd:s={},transition:c={},...d}=l||{};d={...d,...s};for(const f in d){const g=Kx(d[f]);Qx(a,f,g)}}function Jx(a){return!!(Le(a)&&a.add)}function sf(a,i){const l=a.getValue("willChange");if(Jx(l))return l.add(i);if(!l&&sa.WillChange){const s=new sa.WillChange("auto");a.addValue("willChange",s),s.add(i)}}function vy(a){return a.props[sy]}const $x=a=>a!==null;function Wx(a,{repeat:i,repeatType:l="loop"},s){const c=a.filter($x),d=i&&l!=="loop"&&i%2===1?0:c.length-1;return c[d]}const Ix={type:"spring",stiffness:500,damping:25,restSpeed:10},t5=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),e5={type:"keyframes",duration:.8},n5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},a5=(a,{keyframes:i})=>i.length>2?e5:io.has(a)?a.startsWith("scale")?t5(i[1]):Ix:n5;function i5({when:a,delay:i,delayChildren:l,staggerChildren:s,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:g,from:p,elapsed:h,...y}){return!!Object.keys(y).length}const Qf=(a,i,l,s={},c,d)=>f=>{const g=_f(s,a)||{},p=g.delay||s.delay||0;let{elapsed:h=0}=s;h=h-Un(p);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-h,onUpdate:x=>{i.set(x),g.onUpdate&&g.onUpdate(x)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:a,motionValue:i,element:d?void 0:c};i5(g)||Object.assign(y,a5(a,y)),y.duration&&(y.duration=Un(y.duration)),y.repeatDelay&&(y.repeatDelay=Un(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(v=!0)),(sa.instantAnimations||sa.skipAnimations)&&(v=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,v&&!d&&i.get()!==void 0){const x=Wx(y.keyframes,g);if(x!==void 0){$t.update(()=>{y.onUpdate(x),y.onComplete()});return}}return g.isSync?new Nf(y):new E2(y)};function o5({protectedKeys:a,needsAnimating:i},l){const s=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,s}function xy(a,i,{delay:l=0,transitionOverride:s,type:c}={}){let{transition:d=a.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(d=s);const p=[],h=c&&a.animationState&&a.animationState.getState()[c];for(const y in g){const v=a.getValue(y,a.latestValues[y]??null),x=g[y];if(x===void 0||h&&o5(h,y))continue;const E={delay:l,..._f(d||{},y)},D=v.get();if(D!==void 0&&!v.isAnimating&&!Array.isArray(x)&&x===D&&!E.velocity)continue;let O=!1;if(window.MotionHandoffAnimation){const U=vy(a);if(U){const Y=window.MotionHandoffAnimation(U,y,$t);Y!==null&&(E.startTime=Y,O=!0)}}sf(a,y),v.start(Qf(y,v,x,a.shouldReduceMotion&&Lg.has(y)?{type:!1}:E,a,O));const _=v.animation;_&&p.push(_)}return f&&Promise.all(p).then(()=>{$t.update(()=>{f&&Fx(a,f)})}),p}function uf(a,i,l={}){const s=bl(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=s||{};l.transitionOverride&&(c=l.transitionOverride);const d=s?()=>Promise.all(xy(a,s,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(p=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:v}=c;return l5(a,i,p,h,y,v,l)}:()=>Promise.resolve(),{when:g}=c;if(g){const[p,h]=g==="beforeChildren"?[d,f]:[f,d];return p().then(()=>h())}else return Promise.all([d(),f(l.delay)])}function l5(a,i,l=0,s=0,c=0,d=1,f){const g=[],p=a.variantChildren.size,h=(p-1)*c,y=typeof s=="function",v=y?x=>s(x,p):d===1?(x=0)=>x*c:(x=0)=>h-x*c;return Array.from(a.variantChildren).sort(r5).forEach((x,E)=>{x.notify("AnimationStart",i),g.push(uf(x,i,{...f,delay:l+(y?0:s)+v(E)}).then(()=>x.notify("AnimationComplete",i)))}),Promise.all(g)}function r5(a,i){return a.sortNodePosition(i)}function s5(a,i,l={}){a.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(d=>uf(a,d,l));s=Promise.all(c)}else if(typeof i=="string")s=uf(a,i,l);else{const c=typeof i=="function"?bl(a,i,l.custom):i;s=Promise.all(xy(a,c,l))}return s.then(()=>{a.notify("AnimationComplete",i)})}function Sy(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let s=0;s<l;s++)if(i[s]!==a[s])return!1;return!0}const u5=Hf.length;function Ty(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?Ty(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<u5;l++){const s=Hf[l],c=a.props[s];(gl(c)||c===!1)&&(i[s]=c)}return i}const c5=[...Lf].reverse(),f5=Lf.length;function d5(a){return i=>Promise.all(i.map(({animation:l,options:s})=>s5(a,l,s)))}function h5(a){let i=d5(a),l=fp(),s=!0;const c=p=>(h,y)=>{const v=bl(a,y,p==="exit"?a.presenceContext?.custom:void 0);if(v){const{transition:x,transitionEnd:E,...D}=v;h={...h,...D,...E}}return h};function d(p){i=p(a)}function f(p){const{props:h}=a,y=Ty(a.parent)||{},v=[],x=new Set;let E={},D=1/0;for(let _=0;_<f5;_++){const U=c5[_],Y=l[U],q=h[U]!==void 0?h[U]:y[U],$=gl(q),P=U===p?Y.isActive:null;P===!1&&(D=_);let F=q===y[U]&&q!==h[U]&&$;if(F&&s&&a.manuallyAnimateOnMount&&(F=!1),Y.protectedKeys={...E},!Y.isActive&&P===null||!q&&!Y.prevProp||ss(q)||typeof q=="boolean")continue;const Q=m5(Y.prevProp,q);let G=Q||U===p&&Y.isActive&&!F&&$||_>D&&$,lt=!1;const st=Array.isArray(q)?q:[q];let kt=st.reduce(c(U),{});P===!1&&(kt={});const{prevResolvedValues:Pt={}}=Y,De={...Pt,...kt},ue=Z=>{G=!0,x.has(Z)&&(lt=!0,x.delete(Z)),Y.needsAnimating[Z]=!0;const W=a.getValue(Z);W&&(W.liveStyle=!1)};for(const Z in De){const W=kt[Z],mt=Pt[Z];if(E.hasOwnProperty(Z))continue;let T=!1;rf(W)&&rf(mt)?T=!Sy(W,mt):T=W!==mt,T?W!=null?ue(Z):x.add(Z):W!==void 0&&x.has(Z)?ue(Z):Y.protectedKeys[Z]=!0}Y.prevProp=q,Y.prevResolvedValues=kt,Y.isActive&&(E={...E,...kt}),s&&a.blockInitialAnimation&&(G=!1),G&&(!(F&&Q)||lt)&&v.push(...st.map(Z=>({animation:Z,options:{type:U}})))}if(x.size){const _={};if(typeof h.initial!="boolean"){const U=bl(a,Array.isArray(h.initial)?h.initial[0]:h.initial);U&&U.transition&&(_.transition=U.transition)}x.forEach(U=>{const Y=a.getBaseTarget(U),q=a.getValue(U);q&&(q.liveStyle=!0),_[U]=Y??null}),v.push({animation:_})}let O=!!v.length;return s&&(h.initial===!1||h.initial===h.animate)&&!a.manuallyAnimateOnMount&&(O=!1),s=!1,O?i(v):Promise.resolve()}function g(p,h){if(l[p].isActive===h)return Promise.resolve();a.variantChildren?.forEach(v=>v.animationState?.setActive(p,h)),l[p].isActive=h;const y=f(p);for(const v in l)l[v].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:d,getState:()=>l,reset:()=>{l=fp(),s=!0}}}function m5(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!Sy(i,a):!1}function ni(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fp(){return{animate:ni(!0),whileInView:ni(),whileHover:ni(),whileTap:ni(),whileDrag:ni(),whileFocus:ni(),exit:ni()}}class Ua{constructor(i){this.isMounted=!1,this.node=i}update(){}}class p5 extends Ua{constructor(i){super(i),i.animationState||(i.animationState=h5(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();ss(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let g5=0;class y5 extends Ua{constructor(){super(...arguments),this.id=g5++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);l&&!i&&c.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const b5={animation:{Feature:p5},exit:{Feature:y5}};function vl(a,i,l,s={passive:!0}){return a.addEventListener(i,l,s),()=>a.removeEventListener(i,l)}function Al(a){return{point:{x:a.pageX,y:a.pageY}}}const v5=a=>i=>Uf(i)&&a(i,Al(i));function cl(a,i,l,s){return vl(a,i,v5(l),s)}const Ay=1e-4,x5=1-Ay,S5=1+Ay,Oy=.01,T5=0-Oy,A5=0+Oy;function Ye(a){return a.max-a.min}function O5(a,i,l){return Math.abs(a-i)<=l}function dp(a,i,l,s=.5){a.origin=s,a.originPoint=ee(i.min,i.max,a.origin),a.scale=Ye(l)/Ye(i),a.translate=ee(l.min,l.max,a.origin)-a.originPoint,(a.scale>=x5&&a.scale<=S5||isNaN(a.scale))&&(a.scale=1),(a.translate>=T5&&a.translate<=A5||isNaN(a.translate))&&(a.translate=0)}function fl(a,i,l,s){dp(a.x,i.x,l.x,s?s.originX:void 0),dp(a.y,i.y,l.y,s?s.originY:void 0)}function hp(a,i,l){a.min=l.min+i.min,a.max=a.min+Ye(i)}function D5(a,i,l){hp(a.x,i.x,l.x),hp(a.y,i.y,l.y)}function mp(a,i,l){a.min=i.min-l.min,a.max=a.min+Ye(i)}function dl(a,i,l){mp(a.x,i.x,l.x),mp(a.y,i.y,l.y)}function vn(a){return[a("x"),a("y")]}const Dy=({current:a})=>a?a.ownerDocument.defaultView:null,pp=(a,i)=>Math.abs(a-i);function M5(a,i){const l=pp(a.x,i.x),s=pp(a.y,i.y);return Math.sqrt(l**2+s**2)}class My{constructor(i,l,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=jc(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,D=M5(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!D)return;const{point:O}=x,{timestamp:_}=Ne;this.history.push({...O,timestamp:_});const{onStart:U,onMove:Y}=this.handlers;E||(U&&U(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),Y&&Y(this.lastMoveEvent,x)},this.handlePointerMove=(x,E)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Vc(E,this.transformPagePoint),$t.update(this.updatePoint,!0)},this.handlePointerUp=(x,E)=>{this.end();const{onEnd:D,onSessionEnd:O,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const U=jc(x.type==="pointercancel"?this.lastMoveEventInfo:Vc(E,this.transformPagePoint),this.history);this.startEvent&&D&&D(x,U),O&&O(x,U)},!Uf(i))return;this.dragSnapToOrigin=d,this.handlers=l,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=c||window;const g=Al(i),p=Vc(g,this.transformPagePoint),{point:h}=p,{timestamp:y}=Ne;this.history=[{...h,timestamp:y}];const{onSessionStart:v}=l;v&&v(i,jc(p,this.history)),this.removeListeners=xl(cl(this.contextWindow,"pointermove",this.handlePointerMove),cl(this.contextWindow,"pointerup",this.handlePointerUp),cl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Va(this.updatePoint)}}function Vc(a,i){return i?{point:i(a.point)}:a}function gp(a,i){return{x:a.x-i.x,y:a.y-i.y}}function jc({point:a},i){return{point:a,delta:gp(a,Ey(i)),offset:gp(a,E5(i)),velocity:w5(i,.1)}}function E5(a){return a[0]}function Ey(a){return a[a.length-1]}function w5(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,s=null;const c=Ey(a);for(;l>=0&&(s=a[l],!(c.timestamp-s.timestamp>Un(i)));)l--;if(!s)return{x:0,y:0};const d=Bn(c.timestamp-s.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-s.x)/d,y:(c.y-s.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function R5(a,{min:i,max:l},s){return i!==void 0&&a<i?a=s?ee(i,a,s.min):Math.max(a,i):l!==void 0&&a>l&&(a=s?ee(l,a,s.max):Math.min(a,l)),a}function yp(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function C5(a,{top:i,left:l,bottom:s,right:c}){return{x:yp(a.x,l,c),y:yp(a.y,i,s)}}function bp(a,i){let l=i.min-a.min,s=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,s]=[s,l]),{min:l,max:s}}function z5(a,i){return{x:bp(a.x,i.x),y:bp(a.y,i.y)}}function N5(a,i){let l=.5;const s=Ye(a),c=Ye(i);return c>s?l=hl(i.min,i.max-s,a.min):s>c&&(l=hl(a.min,a.max-c,i.min)),ra(0,1,l)}function k5(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const cf=.35;function _5(a=cf){return a===!1?a=0:a===!0&&(a=cf),{x:vp(a,"left","right"),y:vp(a,"top","bottom")}}function vp(a,i,l){return{min:xp(a,i),max:xp(a,l)}}function xp(a,i){return typeof a=="number"?a:a[i]||0}const V5=new WeakMap;class j5{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=se(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=v=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(Al(v).point)},f=(v,x)=>{const{drag:E,dragPropagation:D,onDragStart:O}=this.getProps();if(E&&!D&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Y2(E),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),vn(U=>{let Y=this.getAxisMotionValue(U).get()||0;if(Ln.test(Y)){const{projection:q}=this.visualElement;if(q&&q.layout){const $=q.layout.layoutBox[U];$&&(Y=Ye($)*(parseFloat(Y)/100))}}this.originPoint[U]=Y}),O&&$t.postRender(()=>O(v,x)),sf(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},g=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:E,dragDirectionLock:D,onDirectionLock:O,onDrag:_}=this.getProps();if(!E&&!this.openDragLock)return;const{offset:U}=x;if(D&&this.currentDirection===null){this.currentDirection=U5(U),this.currentDirection!==null&&O&&O(this.currentDirection);return}this.updateAxis("x",x.point,U),this.updateAxis("y",x.point,U),this.visualElement.render(),_&&_(v,x)},p=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>vn(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new My(i,{onSessionStart:d,onStart:f,onMove:g,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:Dy(this.visualElement)})}stop(i,l){const s=i||this.latestPointerEvent,c=l||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!s)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:g}=this.getProps();g&&$t.postRender(()=>g(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,s){const{drag:c}=this.getProps();if(!s||!Qr(i,c,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=R5(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&Ji(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=C5(s.layoutBox,i):this.constraints=!1,this.elastic=_5(l),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&vn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=k5(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!Ji(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=Ux(s,c.root,this.visualElement.getTransformPagePoint());let f=z5(c.layout.layoutBox,d);if(l){const g=l(_x(f));this.hasMutatedConstraints=!!g,g&&(f=fy(g))}return f}startAnimation(i){const{drag:l,dragMomentum:s,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),p=this.constraints||{},h=vn(y=>{if(!Qr(y,l,this.currentDirection))return;let v=p&&p[y]||{};f&&(v={min:0,max:0});const x=c?200:1e6,E=c?40:1e7,D={type:"inertia",velocity:s?i[y]:0,bounceStiffness:x,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...d,...v};return this.startAxisValueAnimation(y,D)});return Promise.all(h).then(g)}startAxisValueAnimation(i,l){const s=this.getAxisMotionValue(i);return sf(this.visualElement,i),s.start(Qf(i,s,0,l,this.visualElement,!1))}stopAnimation(){vn(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){vn(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[l];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){vn(l=>{const{drag:s}=this.getProps();if(!Qr(l,s,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(l);if(c&&c.layout){const{min:f,max:g}=c.layout.layoutBox[l];d.set(i[l]-ee(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:s}=this.visualElement;if(!Ji(l)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};vn(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const p=g.get();c[f]=N5({min:p,max:p},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),vn(f=>{if(!Qr(f,i,null))return;const g=this.getAxisMotionValue(f),{min:p,max:h}=this.constraints[f];g.set(ee(p,h,c[f]))})}addListeners(){if(!this.visualElement.current)return;V5.set(this.visualElement,this);const i=this.visualElement.current,l=cl(i,"pointerdown",p=>{const{drag:h,dragListener:y=!0}=this.getProps();h&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();Ji(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),$t.read(s);const f=vl(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h})=>{this.isDragging&&h&&(vn(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=p[y].translate,v.set(v.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),l(),d(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=cf,dragMomentum:g=!0}=i;return{...i,drag:l,dragDirectionLock:s,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:g}}}function Qr(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function U5(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class B5 extends Ua{constructor(i){super(i),this.removeGroupControls=xn,this.removeListeners=xn,this.controls=new j5(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Sp=a=>(i,l)=>{a&&$t.postRender(()=>a(i,l))};class L5 extends Ua{constructor(){super(...arguments),this.removePointerDownListener=xn}onPointerDown(i){this.session=new My(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Dy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:Sp(i),onStart:Sp(l),onMove:s,onEnd:(d,f)=>{delete this.session,c&&$t.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=cl(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ir={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Tp(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const ol={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(ft.test(a))a=parseFloat(a);else return a;const l=Tp(a,i.target.x),s=Tp(a,i.target.y);return`${l}% ${s}%`}},H5={correct:(a,{treeScale:i,projectionDelta:l})=>{const s=a,c=ja.parse(a);if(c.length>5)return s;const d=ja.createTransformer(a),f=typeof c[0]!="number"?1:0,g=l.x.scale*i.x,p=l.y.scale*i.y;c[0+f]/=g,c[1+f]/=p;const h=ee(g,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=h),typeof c[3+f]=="number"&&(c[3+f]/=h),d(c)}};let Ap=!1;class q5 extends X.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s,layoutId:c}=this.props,{projection:d}=i;sx(P5),d&&(l.group&&l.group.add(d),s&&s.register&&c&&s.register(d),Ap&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),Ir.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:s,drag:c,isPresent:d}=this.props,{projection:f}=s;return f&&(f.isPresent=d,Ap=!0,c||i.layoutDependency!==l||l===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||$t.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),jf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function wy(a){const[i,l]=Jg(),s=X.useContext(mf);return w.jsx(q5,{...a,layoutGroup:s,switchLayoutGroup:X.useContext(uy),isPresent:i,safeToRemove:l})}const P5={borderRadius:{...ol,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ol,borderTopRightRadius:ol,borderBottomLeftRadius:ol,borderBottomRightRadius:ol,boxShadow:H5};function Y5(a,i,l){const s=Le(a)?a:to(a);return s.start(Qf("",s,i,l)),s.animation}const X5=(a,i)=>a.depth-i.depth;class G5{constructor(){this.children=[],this.isDirty=!1}add(i){yf(this.children,i),this.isDirty=!0}remove(i){bf(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(X5),this.isDirty=!1,this.children.forEach(i)}}function Z5(a,i){const l=Je.now(),s=({timestamp:c})=>{const d=c-l;d>=i&&(Va(s),a(d-i))};return $t.setup(s,!0),()=>Va(s)}const Ry=["TopLeft","TopRight","BottomLeft","BottomRight"],Q5=Ry.length,Op=a=>typeof a=="string"?parseFloat(a):a,Dp=a=>typeof a=="number"||ft.test(a);function K5(a,i,l,s,c,d){c?(a.opacity=ee(0,l.opacity??1,F5(s)),a.opacityExit=ee(i.opacity??1,0,J5(s))):d&&(a.opacity=ee(i.opacity??1,l.opacity??1,s));for(let f=0;f<Q5;f++){const g=`border${Ry[f]}Radius`;let p=Mp(i,g),h=Mp(l,g);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||Dp(p)===Dp(h)?(a[g]=Math.max(ee(Op(p),Op(h),s),0),(Ln.test(h)||Ln.test(p))&&(a[g]+="%")):a[g]=h}(i.rotate||l.rotate)&&(a.rotate=ee(i.rotate||0,l.rotate||0,s))}function Mp(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const F5=Cy(0,.5,gg),J5=Cy(.5,.95,xn);function Cy(a,i,l){return s=>s<a?0:s>i?1:l(hl(a,i,s))}function Ep(a,i){a.min=i.min,a.max=i.max}function bn(a,i){Ep(a.x,i.x),Ep(a.y,i.y)}function wp(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}function Rp(a,i,l,s,c){return a-=i,a=is(a,1/l,s),c!==void 0&&(a=is(a,1/c,s)),a}function $5(a,i=0,l=1,s=.5,c,d=a,f=a){if(Ln.test(i)&&(i=parseFloat(i),i=ee(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=ee(d.min,d.max,s);a===d&&(g-=i),a.min=Rp(a.min,i,l,g,c),a.max=Rp(a.max,i,l,g,c)}function Cp(a,i,[l,s,c],d,f){$5(a,i[l],i[s],i[c],i.scale,d,f)}const W5=["x","scaleX","originX"],I5=["y","scaleY","originY"];function zp(a,i,l,s){Cp(a.x,i,W5,l?l.x:void 0,s?s.x:void 0),Cp(a.y,i,I5,l?l.y:void 0,s?s.y:void 0)}function Np(a){return a.translate===0&&a.scale===1}function zy(a){return Np(a.x)&&Np(a.y)}function kp(a,i){return a.min===i.min&&a.max===i.max}function tS(a,i){return kp(a.x,i.x)&&kp(a.y,i.y)}function _p(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function Ny(a,i){return _p(a.x,i.x)&&_p(a.y,i.y)}function Vp(a){return Ye(a.x)/Ye(a.y)}function jp(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}class eS{constructor(){this.members=[]}add(i){yf(this.members,i),i.scheduleRender()}remove(i){if(bf(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(c=>i===c);if(l===0)return!1;let s;for(let c=l;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){s=d;break}}return s?(this.promote(s),!0):!1}promote(i,l){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,l&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:s}=i;l.onExitComplete&&l.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function nS(a,i,l){let s="";const c=a.x.translate/i.x,d=a.y.translate/i.y,f=l?.z||0;if((c||d||f)&&(s=`translate3d(${c}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:h,rotate:y,rotateX:v,rotateY:x,skewX:E,skewY:D}=l;h&&(s=`perspective(${h}px) ${s}`),y&&(s+=`rotate(${y}deg) `),v&&(s+=`rotateX(${v}deg) `),x&&(s+=`rotateY(${x}deg) `),E&&(s+=`skewX(${E}deg) `),D&&(s+=`skewY(${D}deg) `)}const g=a.x.scale*i.x,p=a.y.scale*i.y;return(g!==1||p!==1)&&(s+=`scale(${g}, ${p})`),s||"none"}const Uc=["","X","Y","Z"],aS=1e3;let iS=0;function Bc(a,i,l,s){const{latestValues:c}=i;c[a]&&(l[a]=c[a],i.setStaticValue(a,0),s&&(s[a]=0))}function ky(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=vy(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:c,layoutId:d}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",$t,!(c||d))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&ky(s)}function _y({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},g=i?.()){this.id=iS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(rS),this.nodes.forEach(fS),this.nodes.forEach(dS),this.nodes.forEach(sS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new G5)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Sf),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const p=this.eventHandlers.get(f);p&&p.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Fg(f)&&!F2(f),this.instance=f;const{layoutId:g,layout:p,visualElement:h}=this.options;if(h&&!h.current&&h.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||g)&&(this.isLayoutDirty=!0),a){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;$t.read(()=>{v=window.innerWidth}),a(f,()=>{const E=window.innerWidth;E!==v&&(v=E,this.root.updateBlockedByResize=!0,y&&y(),y=Z5(x,250),Ir.hasAnimatedSinceResize&&(Ir.hasAnimatedSinceResize=!1,this.nodes.forEach(Lp)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&h&&(g||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const D=this.options.transition||h.getDefaultTransition()||yS,{onLayoutAnimationStart:O,onLayoutAnimationComplete:_}=h.getProps(),U=!this.targetLayout||!Ny(this.targetLayout,E),Y=!v&&x;if(this.options.layoutRoot||this.resumeFrom||Y||v&&(U||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const q={..._f(D,"layout"),onPlay:O,onComplete:_};(h.shouldReduceMotion||this.options.layoutRoot)&&(q.delay=0,q.type=!1),this.startAnimation(q),this.setAnimationOrigin(y,Y)}else v||Lp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Va(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(hS),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ky(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:g,layout:p}=this.options;if(g===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Up);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Bp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(cS),this.nodes.forEach(oS),this.nodes.forEach(lS)):this.nodes.forEach(Bp),this.clearAllSnapshots();const g=Je.now();Ne.delta=ra(0,1e3/60,g-Ne.timestamp),Ne.timestamp=g,Ne.isProcessing=!0,Ec.update.process(Ne),Ec.preRender.process(Ne),Ec.render.process(Ne),Ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,jf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(uS),this.sharedNodes.forEach(mS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$t.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$t.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ye(this.snapshot.measuredBox.x)&&!Ye(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!zy(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;f&&this.instance&&(g||ii(this.latestValues)||y)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let p=this.removeElementScroll(g);return f&&(p=this.removeTransform(p)),bS(p),{animationId:this.root.animationId,measuredBox:g,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return se();const g=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(vS))){const{scroll:h}=this.root;h&&($i(g.x,h.offset.x),$i(g.y,h.offset.y))}return g}removeElementScroll(f){const g=se();if(bn(g,f),this.scroll?.wasRoot)return g;for(let p=0;p<this.path.length;p++){const h=this.path[p],{scroll:y,options:v}=h;h!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&bn(g,f),$i(g.x,y.offset.x),$i(g.y,y.offset.y))}return g}applyTransform(f,g=!1){const p=se();bn(p,f);for(let h=0;h<this.path.length;h++){const y=this.path[h];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Wi(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),ii(y.latestValues)&&Wi(p,y.latestValues)}return ii(this.latestValues)&&Wi(p,this.latestValues),p}removeTransform(f){const g=se();bn(g,f);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!ii(h.latestValues))continue;af(h.latestValues)&&h.updateSnapshot();const y=se(),v=h.measurePageBox();bn(y,v),zp(g,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,y)}return ii(this.latestValues)&&zp(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==g;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=Ne.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=se(),this.relativeTargetOrigin=se(),dl(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),bn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=se(),this.targetWithTransforms=se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),D5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bn(this.target,this.layout.layoutBox),hy(this.target,this.targetDelta)):bn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=se(),this.relativeTargetOrigin=se(),dl(this.relativeTargetOrigin,this.target,x.target),bn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||af(this.parent.latestValues)||dy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),g=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ne.timestamp&&(p=!1),p)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;bn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;jx(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=se());const{target:E}=f;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(wp(this.prevProjectionDelta.x,this.projectionDelta.x),wp(this.prevProjectionDelta.y,this.projectionDelta.y)),fl(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!jp(this.projectionDelta.x,this.prevProjectionDelta.x)||!jp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ii(),this.projectionDelta=Ii(),this.projectionDeltaWithTransform=Ii()}setAnimationOrigin(f,g=!1){const p=this.snapshot,h=p?p.latestValues:{},y={...this.latestValues},v=Ii();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const x=se(),E=p?p.source:void 0,D=this.layout?this.layout.source:void 0,O=E!==D,_=this.getStack(),U=!_||_.members.length<=1,Y=!!(O&&!U&&this.options.crossfade===!0&&!this.path.some(gS));this.animationProgress=0;let q;this.mixTargetDelta=$=>{const P=$/1e3;Hp(v.x,f.x,P),Hp(v.y,f.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(dl(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),pS(this.relativeTarget,this.relativeTargetOrigin,x,P),q&&tS(this.relativeTarget,q)&&(this.isProjectionDirty=!1),q||(q=se()),bn(q,this.relativeTarget)),O&&(this.animationValues=y,K5(y,h,this.latestValues,P,Y,U)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Va(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$t.update(()=>{Ir.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=to(0)),this.currentAnimation=Y5(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(aS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:p,layout:h,latestValues:y}=f;if(!(!g||!p||!h)){if(this!==f&&this.layout&&h&&Vy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||se();const v=Ye(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+v;const x=Ye(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+x}bn(g,p),Wi(g,y),fl(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new eS),this.sharedNodes.get(f).add(g);const h=g.options.initialPromotionConfig;g.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(g=!0),!g)return;const h={};p.z&&Bc("z",f,h,this.animationValues);for(let y=0;y<Uc.length;y++)Bc(`rotate${Uc[y]}`,f,h,this.animationValues),Bc(`skew${Uc[y]}`,f,h,this.animationValues);f.render();for(const y in h)f.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);f.scheduleRender()}applyProjectionStyles(f,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Wr(g?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Wr(g?.pointerEvents)||""),this.hasProjected&&!ii(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=nS(this.projectionDeltaWithTransform,this.treeScale,y);p&&(v=p(y,v)),f.transform=v;const{x,y:E}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${E.origin*100}% 0`,h.animationValues?f.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const D in yl){if(y[D]===void 0)continue;const{correct:O,applyTo:_,isCSSVariable:U}=yl[D],Y=v==="none"?y[D]:O(y[D],h);if(_){const q=_.length;for(let $=0;$<q;$++)f[_[$]]=Y}else U?this.options.visualElement.renderState.vars[D]=Y:f[D]=Y}this.options.layoutId&&(f.pointerEvents=h===this?Wr(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Up),this.root.sharedNodes.clear()}}}function oS(a){a.updateLayout()}function lS(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:s}=a.layout,{animationType:c}=a.options,d=i.source!==a.layout.source;c==="size"?vn(y=>{const v=d?i.measuredBox[y]:i.layoutBox[y],x=Ye(v);v.min=l[y].min,v.max=v.min+x}):Vy(c,i.layoutBox,l)&&vn(y=>{const v=d?i.measuredBox[y]:i.layoutBox[y],x=Ye(l[y]);v.max=v.min+x,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[y].max=a.relativeTarget[y].min+x)});const f=Ii();fl(f,l,i.layoutBox);const g=Ii();d?fl(g,a.applyTransform(s,!0),i.measuredBox):fl(g,l,i.layoutBox);const p=!zy(f);let h=!1;if(!a.resumeFrom){const y=a.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:x}=y;if(v&&x){const E=se();dl(E,i.layoutBox,v.layoutBox);const D=se();dl(D,l,x.layoutBox),Ny(E,D)||(h=!0),y.options.layoutRoot&&(a.relativeTarget=D,a.relativeTargetOrigin=E,a.relativeParent=y)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:g,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:h})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function rS(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function sS(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function uS(a){a.clearSnapshot()}function Up(a){a.clearMeasurements()}function Bp(a){a.isLayoutDirty=!1}function cS(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function Lp(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function fS(a){a.resolveTargetDelta()}function dS(a){a.calcProjection()}function hS(a){a.resetSkewAndRotation()}function mS(a){a.removeLeadSnapshot()}function Hp(a,i,l){a.translate=ee(i.translate,0,l),a.scale=ee(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function qp(a,i,l,s){a.min=ee(i.min,l.min,s),a.max=ee(i.max,l.max,s)}function pS(a,i,l,s){qp(a.x,i.x,l.x,s),qp(a.y,i.y,l.y,s)}function gS(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const yS={duration:.45,ease:[.4,0,.1,1]},Pp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Yp=Pp("applewebkit/")&&!Pp("chrome/")?Math.round:xn;function Xp(a){a.min=Yp(a.min),a.max=Yp(a.max)}function bS(a){Xp(a.x),Xp(a.y)}function Vy(a,i,l){return a==="position"||a==="preserve-aspect"&&!O5(Vp(i),Vp(l),.2)}function vS(a){return a!==a.root&&a.scroll?.wasRoot}const xS=_y({attachResizeListener:(a,i)=>vl(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lc={current:void 0},jy=_y({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Lc.current){const a=new xS({});a.mount(window),a.setOptions({layoutScroll:!0}),Lc.current=a}return Lc.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),SS={pan:{Feature:L5},drag:{Feature:B5,ProjectionNode:jy,MeasureLayout:wy}};function Gp(a,i,l){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",l==="Start");const c="onHover"+l,d=s[c];d&&$t.postRender(()=>d(i,Al(i)))}class TS extends Ua{mount(){const{current:i}=this.node;i&&(this.unmount=X2(i,(l,s)=>(Gp(this.node,s,"Start"),c=>Gp(this.node,c,"End"))))}unmount(){}}class AS extends Ua{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xl(vl(this.node.current,"focus",()=>this.onFocus()),vl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Zp(a,i,l){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",l==="Start");const c="onTap"+(l==="End"?"":l),d=s[c];d&&$t.postRender(()=>d(i,Al(i)))}class OS extends Ua{mount(){const{current:i}=this.node;i&&(this.unmount=K2(i,(l,s)=>(Zp(this.node,s,"Start"),(c,{success:d})=>Zp(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ff=new WeakMap,Hc=new WeakMap,DS=a=>{const i=ff.get(a.target);i&&i(a)},MS=a=>{a.forEach(DS)};function ES({root:a,...i}){const l=a||document;Hc.has(l)||Hc.set(l,{});const s=Hc.get(l),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(MS,{root:a,...i})),s[c]}function wS(a,i,l){const s=ES(i);return ff.set(a,l),s.observe(a),()=>{ff.delete(a),s.unobserve(a)}}const RS={some:0,all:1};class CS extends Ua{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:c="some",once:d}=i,f={root:l?l.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:RS[c]},g=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,d&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),x=h?y:v;x&&x(p)};return wS(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(zS(i,l))&&this.startObserver()}unmount(){}}function zS({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const NS={inView:{Feature:CS},tap:{Feature:OS},focus:{Feature:AS},hover:{Feature:TS}},kS={layout:{ProjectionNode:jy,MeasureLayout:wy}},_S={...b5,...NS,...SS,...kS},oe=kx(_S,Zx),VS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='100pt'%20height='100pt'%20version='1.1'%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m18.914%2081.398h-7.1992c0.97266%200.91016%201.5977%202.2266%201.5977%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.3125%200.46094-2.5703%201.4297-3.5977h-4.5703v-1.8281h4.5703v-7.4883h67.082v-21.371h25.086v2.6328h-13.086v11.426h7.8281v12.633l-15.484-0.003906c-1.1406%200.17187-1.0273%201.6562%200.058594%201.7695h23.945v2.2305h-9.4297c0.91406%200.91016%201.543%202.2266%201.543%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.4297%200.62891-2.7383%201.543-3.5977h-7.6016c0.058594%200.22656%200.10938%200.45703%200.10938%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.058593-0.45703%200.058593-0.68359h-3.8281c0%200.28125%200.058593%200.51562%200.058593%200.68359%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2305-3.7109-8.2305-8.3438%200-0.11328%200.058594-0.28516%200.11328-0.625h-4.1133c0%200.28516%200.058594%200.45703%200.058594%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.054688-0.34375%200.11328-0.625'%20fill='%23010101'/%3e%3cpath%20d='m25.316%2053.566c-1.3711-0.16797-2.3984-1.1445-2.1719-2.2812l2.0547-6.1719-0.34375-4.2305h-7.8867l-0.34375%204.2305%202.0586%206.1719c0.23047%201.1406-0.80078%202.1172-2.0586%202.2812h-6.4531l-5.5977%208.3984%205.5977%208.4023h59.828l-0.003906-16.852c-3.9961%200.16797-3.7109-1.4883-3.9961-2.6914h-24.914c-0.11328%200.91406%200%202.7422-3.1406%202.7422z'%20fill='%23010101'/%3e%3cpath%20d='m23.312%2039.113h-4.6289c0.62891-6.3984%202.457-11.027%207.5977-15.543%201.3164-2.1133%200.28516-12.172%209.1406-13.715%208.6914-1.4844%208.5781%204.9141%2015.32%205.5977%202.9141%200.28906%205.6016-2.3398%208.5703-2.2812%204.0547%200.11328%205.7734%203.8242%209.1992%203.9961%203.4297%200.17188%204.1133-2.0547%207.4297-2.1719%203.3125-0.11328%207.8281%203.6562%207.8281%207.2031%200%204.0547-0.34375%208.3398-7.0859%2010.055-3.1992%200.80078-6-2.5703-9.1992-2.457-2.8555%200.054687-5.7148%202.6875-8.5156%202.6875-6.7383%200-6.3984-4.0586-10.168-4.0586-3.9414%200-4.8008%203.9414-10.801%204.2852-4.1758%200.23047-6.2852-2.6289-9.1445-1.7148-4.5117%201.4883-5.2539%208.1172-5.543%208.1172'%20fill='%23010101'/%3e%3c/svg%3e";function xe(a,i){i===void 0&&(i={});var l=i.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}xe(`.react-loading-indicator-normalize,
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
}`);var Bt=function(){return Bt=Object.assign||function(a){for(var i,l=1,s=arguments.length;l<s;l++)for(var c in i=arguments[l])Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c]);return a},Bt.apply(this,arguments)};function os(a){return os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},os(a)}var jS=/^\s+/,US=/\s+$/;function at(a,i){if(i=i||{},(a=a||"")instanceof at)return a;if(!(this instanceof at))return new at(a,i);var l=function(s){var c={r:0,g:0,b:0},d=1,f=null,g=null,p=null,h=!1,y=!1;typeof s=="string"&&(s=function(D){D=D.replace(jS,"").replace(US,"").toLowerCase();var O,_=!1;if(df[D])D=df[D],_=!0;else if(D=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(O=Dn.rgb.exec(D))?{r:O[1],g:O[2],b:O[3]}:(O=Dn.rgba.exec(D))?{r:O[1],g:O[2],b:O[3],a:O[4]}:(O=Dn.hsl.exec(D))?{h:O[1],s:O[2],l:O[3]}:(O=Dn.hsla.exec(D))?{h:O[1],s:O[2],l:O[3],a:O[4]}:(O=Dn.hsv.exec(D))?{h:O[1],s:O[2],v:O[3]}:(O=Dn.hsva.exec(D))?{h:O[1],s:O[2],v:O[3],a:O[4]}:(O=Dn.hex8.exec(D))?{r:ln(O[1]),g:ln(O[2]),b:ln(O[3]),a:Wp(O[4]),format:_?"name":"hex8"}:(O=Dn.hex6.exec(D))?{r:ln(O[1]),g:ln(O[2]),b:ln(O[3]),format:_?"name":"hex"}:(O=Dn.hex4.exec(D))?{r:ln(O[1]+""+O[1]),g:ln(O[2]+""+O[2]),b:ln(O[3]+""+O[3]),a:Wp(O[4]+""+O[4]),format:_?"name":"hex8"}:(O=Dn.hex3.exec(D))?{r:ln(O[1]+""+O[1]),g:ln(O[2]+""+O[2]),b:ln(O[3]+""+O[3]),format:_?"name":"hex"}:!1}(s)),os(s)=="object"&&(la(s.r)&&la(s.g)&&la(s.b)?(v=s.r,x=s.g,E=s.b,c={r:255*Jt(v,255),g:255*Jt(x,255),b:255*Jt(E,255)},h=!0,y=String(s.r).substr(-1)==="%"?"prgb":"rgb"):la(s.h)&&la(s.s)&&la(s.v)?(f=rl(s.s),g=rl(s.v),c=function(D,O,_){D=6*Jt(D,360),O=Jt(O,100),_=Jt(_,100);var U=Math.floor(D),Y=D-U,q=_*(1-O),$=_*(1-Y*O),P=_*(1-(1-Y)*O),F=U%6,Q=[_,$,q,q,P,_][F],G=[P,_,_,$,q,q][F],lt=[q,q,P,_,_,$][F];return{r:255*Q,g:255*G,b:255*lt}}(s.h,f,g),h=!0,y="hsv"):la(s.h)&&la(s.s)&&la(s.l)&&(f=rl(s.s),p=rl(s.l),c=function(D,O,_){var U,Y,q;function $(Q,G,lt){return lt<0&&(lt+=1),lt>1&&(lt-=1),lt<1/6?Q+6*(G-Q)*lt:lt<.5?G:lt<2/3?Q+(G-Q)*(2/3-lt)*6:Q}if(D=Jt(D,360),O=Jt(O,100),_=Jt(_,100),O===0)U=Y=q=_;else{var P=_<.5?_*(1+O):_+O-_*O,F=2*_-P;U=$(F,P,D+1/3),Y=$(F,P,D),q=$(F,P,D-1/3)}return{r:255*U,g:255*Y,b:255*q}}(s.h,f,p),h=!0,y="hsl"),s.hasOwnProperty("a")&&(d=s.a));var v,x,E;return d=Uy(d),{ok:h,format:s.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}}(a);this._originalInput=a,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||l.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function Qp(a,i,l){a=Jt(a,255),i=Jt(i,255),l=Jt(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=(d+f)/2;if(d==f)s=c=0;else{var p=d-f;switch(c=g>.5?p/(2-d-f):p/(d+f),d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,l:g}}function Kp(a,i,l){a=Jt(a,255),i=Jt(i,255),l=Jt(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=d,p=d-f;if(c=d===0?0:p/d,d==f)s=0;else{switch(d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,v:g}}function Fp(a,i,l,s){var c=[En(Math.round(a).toString(16)),En(Math.round(i).toString(16)),En(Math.round(l).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function Jp(a,i,l,s){return[En(By(s)),En(Math.round(a).toString(16)),En(Math.round(i).toString(16)),En(Math.round(l).toString(16))].join("")}function BS(a,i){i=i===0?0:i||10;var l=at(a).toHsl();return l.s-=i/100,l.s=cs(l.s),at(l)}function LS(a,i){i=i===0?0:i||10;var l=at(a).toHsl();return l.s+=i/100,l.s=cs(l.s),at(l)}function HS(a){return at(a).desaturate(100)}function qS(a,i){i=i===0?0:i||10;var l=at(a).toHsl();return l.l+=i/100,l.l=cs(l.l),at(l)}function PS(a,i){i=i===0?0:i||10;var l=at(a).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-i/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-i/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-i/100*255))),at(l)}function YS(a,i){i=i===0?0:i||10;var l=at(a).toHsl();return l.l-=i/100,l.l=cs(l.l),at(l)}function XS(a,i){var l=at(a).toHsl(),s=(l.h+i)%360;return l.h=s<0?360+s:s,at(l)}function GS(a){var i=at(a).toHsl();return i.h=(i.h+180)%360,at(i)}function $p(a,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var l=at(a).toHsl(),s=[at(a)],c=360/i,d=1;d<i;d++)s.push(at({h:(l.h+d*c)%360,s:l.s,l:l.l}));return s}function ZS(a){var i=at(a).toHsl(),l=i.h;return[at(a),at({h:(l+72)%360,s:i.s,l:i.l}),at({h:(l+216)%360,s:i.s,l:i.l})]}function QS(a,i,l){i=i||6,l=l||30;var s=at(a).toHsl(),c=360/l,d=[at(a)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,d.push(at(s));return d}function KS(a,i){i=i||6;for(var l=at(a).toHsv(),s=l.h,c=l.s,d=l.v,f=[],g=1/i;i--;)f.push(at({h:s,s:c,v:d})),d=(d+g)%1;return f}at.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,i,l,s=this.toRgb();return a=s.r/255,i=s.g/255,l=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Uy(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=Kp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=Kp(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+i+", "+l+"%, "+s+"%)":"hsva("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=Qp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Qp(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+i+", "+l+"%, "+s+"%)":"hsla("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return Fp(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(i,l,s,c,d){var f=[En(Math.round(i).toString(16)),En(Math.round(l).toString(16)),En(Math.round(s).toString(16)),En(By(c))];return d&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Jt(this._r,255))+"%",g:Math.round(100*Jt(this._g,255))+"%",b:Math.round(100*Jt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Jt(this._r,255))+"%, "+Math.round(100*Jt(this._g,255))+"%, "+Math.round(100*Jt(this._b,255))+"%)":"rgba("+Math.round(100*Jt(this._r,255))+"%, "+Math.round(100*Jt(this._g,255))+"%, "+Math.round(100*Jt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(FS[Fp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var i="#"+Jp(this._r,this._g,this._b,this._a),l=i,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=at(a);l="#"+Jp(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+l+")"},toString:function(a){var i=!!a;a=a||this._format;var l=!1,s=this._a<1&&this._a>=0;return i||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(l=this.toRgbString()),a==="prgb"&&(l=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(l=this.toHexString()),a==="hex3"&&(l=this.toHexString(!0)),a==="hex4"&&(l=this.toHex8String(!0)),a==="hex8"&&(l=this.toHex8String()),a==="name"&&(l=this.toName()),a==="hsl"&&(l=this.toHslString()),a==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return at(this.toString())},_applyModification:function(a,i){var l=a.apply(null,[this].concat([].slice.call(i)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(qS,arguments)},brighten:function(){return this._applyModification(PS,arguments)},darken:function(){return this._applyModification(YS,arguments)},desaturate:function(){return this._applyModification(BS,arguments)},saturate:function(){return this._applyModification(LS,arguments)},greyscale:function(){return this._applyModification(HS,arguments)},spin:function(){return this._applyModification(XS,arguments)},_applyCombination:function(a,i){return a.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(QS,arguments)},complement:function(){return this._applyCombination(GS,arguments)},monochromatic:function(){return this._applyCombination(KS,arguments)},splitcomplement:function(){return this._applyCombination(ZS,arguments)},triad:function(){return this._applyCombination($p,[3])},tetrad:function(){return this._applyCombination($p,[4])}},at.fromRatio=function(a,i){if(os(a)=="object"){var l={};for(var s in a)a.hasOwnProperty(s)&&(l[s]=s==="a"?a[s]:rl(a[s]));a=l}return at(a,i)},at.equals=function(a,i){return!(!a||!i)&&at(a).toRgbString()==at(i).toRgbString()},at.random=function(){return at.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},at.mix=function(a,i,l){l=l===0?0:l||50;var s=at(a).toRgb(),c=at(i).toRgb(),d=l/100;return at({r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a})},at.readability=function(a,i){var l=at(a),s=at(i);return(Math.max(l.getLuminance(),s.getLuminance())+.05)/(Math.min(l.getLuminance(),s.getLuminance())+.05)},at.isReadable=function(a,i,l){var s,c,d=at.readability(a,i);switch(c=!1,(s=function(f){var g,p;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:g,size:p}}(l)).level+s.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},at.mostReadable=function(a,i,l){var s,c,d,f,g=null,p=0;c=(l=l||{}).includeFallbackColors,d=l.level,f=l.size;for(var h=0;h<i.length;h++)(s=at.readability(a,i[h]))>p&&(p=s,g=at(i[h]));return at.isReadable(a,g,{level:d,size:f})||!c?g:(l.includeFallbackColors=!1,at.mostReadable(a,["#fff","#000"],l))};var df=at.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},FS=at.hexNames=function(a){var i={};for(var l in a)a.hasOwnProperty(l)&&(i[a[l]]=l);return i}(df);function Uy(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function Jt(a,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var l=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(a);return a=Math.min(i,Math.max(0,parseFloat(a))),l&&(a=parseInt(a*i,10)/100),Math.abs(a-i)<1e-6?1:a%i/parseFloat(i)}function cs(a){return Math.min(1,Math.max(0,a))}function ln(a){return parseInt(a,16)}function En(a){return a.length==1?"0"+a:""+a}function rl(a){return a<=1&&(a=100*a+"%"),a}function By(a){return Math.round(255*parseFloat(a)).toString(16)}function Wp(a){return ln(a)/255}var ka,Kr,Fr,Dn=(Kr="[\\s|\\(]+("+(ka="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ka+")[,|\\s]+("+ka+")\\s*\\)?",Fr="[\\s|\\(]+("+ka+")[,|\\s]+("+ka+")[,|\\s]+("+ka+")[,|\\s]+("+ka+")\\s*\\)?",{CSS_UNIT:new RegExp(ka),rgb:new RegExp("rgb"+Kr),rgba:new RegExp("rgba"+Fr),hsl:new RegExp("hsl"+Kr),hsla:new RegExp("hsla"+Fr),hsv:new RegExp("hsv"+Kr),hsva:new RegExp("hsva"+Fr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function la(a){return!!Dn.CSS_UNIT.exec(a)}var fs=function(a,i){var l=(typeof a=="string"?parseInt(a):a)||0;if(l>=-5&&l<=5){var s=l,c=parseFloat(i),d=c+s*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},ds=function(a,i){var l=a||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(l.fontSize){var d=l.fontSize;c=function(f,g){var p={};for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&g.indexOf(h)<0&&(p[h]=f[h]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(f);y<h.length;y++)g.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(f,h[y])&&(p[h[y]]=f[h[y]])}return p}(l,["fontSize"]),s=d}return{fontSize:s,styles:c}},JS={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},hs=function(a){var i=a.className,l=a.text,s=a.textColor,c=a.staticText,d=a.style;return l?Vt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:Bt(Bt(Bt({},c&&JS),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof l=="string"&&l.length?l:"loading"):null},Ol="rgb(50, 205, 50)";function ms(a,i){if(i===void 0&&(i=0),a.length===0)throw new Error("Input array cannot be empty!");var l=[];return function s(c,d){return d===void 0&&(d=0),l.push.apply(l,c),l.length<d&&s(l,d),l.slice(0,d)}(a,i)}xe(`.atom-rli-bounding-box {
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
}`);at(Ol).toRgb();Array.from({length:4},function(a,i){return"--atom-phase".concat(i+1,"-rgb")});xe(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--commet-phase".concat(i+1,"-color")});xe(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-annulus-phase".concat(i+1,"-color")});function qc(a){return a&&a.Math===Math&&a}xe(`.OP-dotted-rli-bounding-box {
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
}`);qc(typeof window=="object"&&window)||qc(typeof self=="object"&&self)||qc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,i){return"--OP-dotted-phase".concat(i+1,"-color")});xe(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-spokes-phase".concat(i+1,"-color")});xe(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")});xe(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]});xe(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--four-square-phase".concat(i+1,"-color")});xe(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--mosaic-phase".concat(i+1,"-color")});xe(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--riple-phase".concat(i+1,"-color")});xe(`.pulsate-rli-bounding-box {
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
}`);var Gi=Array.from({length:4},function(a,i){return"--TD-pulsate-phase".concat(i+1,"-color")}),$S=function(a){var i,l=ds(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=fs(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=ms(p,Gi.length),v=0;v<y.length&&!(v>=4);v++)h[Gi[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<Gi.length;x++)h[Gi[x]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),x=0;x<Gi.length;x++)h[Gi[x]]=Ol}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Vt.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Bt(Bt(Bt(Bt(Bt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Vt.createElement("span",{className:"rli-d-i-b pulsate-indicator"},Vt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Vt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Vt.createElement("span",{className:"rli-d-i-b pulsate-dot"})),Vt.createElement(hs,{staticText:!0,text:a?.text,textColor:a?.textColor}))};xe(`.brick-stack-rli-bounding-box {
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
}`);var Zi=Array.from({length:4},function(a,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}),WS=function(a){var i,l=ds(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=fs(a?.speedPlus,"1s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=ms(p,Zi.length),v=0;v<y.length&&!(v>=4);v++)h[Zi[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<Zi.length;x++)h[Zi[x]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),x=0;x<Zi.length;x++)h[Zi[x]]=Ol}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Vt.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Bt(Bt(Bt(Bt(Bt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Vt.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},Vt.createElement("span",{className:"rli-d-i-b brick-stack"})),Vt.createElement(hs,{staticText:!0,text:a?.text,textColor:a?.textColor}))};xe(`.bob-rli-bounding-box {
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
}`);var Qi=Array.from({length:4},function(a,i){return"--TD-bob-phase".concat(i+1,"-color")}),IS=function(a){var i,l=ds(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=fs(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=ms(p,Qi.length),v=0;v<y.length&&!(v>=4);v++)h[Qi[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<Qi.length;x++)h[Qi[x]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),x=0;x<Qi.length;x++)h[Qi[x]]=Ol}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Vt.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Bt(Bt(Bt(Bt(Bt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Vt.createElement("span",{className:"bob-indicator"},Vt.createElement("span",{className:"bobbing"})),Vt.createElement(hs,{staticText:!0,text:a?.text,textColor:a?.textColor}))};xe(`.bounce-rli-bounding-box {
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
}`);var Ki=Array.from({length:4},function(a,i){return"--TD-bounce-phase".concat(i+1,"-color")}),tT=function(a){var i,l=ds(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=fs(a?.speedPlus,"0.5s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=ms(p,Ki.length),v=0;v<y.length&&!(v>=4);v++)h[Ki[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<Ki.length;x++)h[Ki[x]]=p}catch{for(x=0;x<Ki.length;x++)h[Ki[x]]=Ol}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Vt.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Bt(Bt(Bt(Bt(Bt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s)},Vt.createElement("span",{className:"wrapper"},Vt.createElement("span",{className:"group"},Vt.createElement("span",{className:"rli-d-i-b dot"}),Vt.createElement("span",{className:"rli-d-i-b dot"}),Vt.createElement("span",{className:"rli-d-i-b dot"})),Vt.createElement("span",{className:"group"},Vt.createElement("span",{className:"rli-d-i-b shadow"}),Vt.createElement("span",{className:"rli-d-i-b shadow"}),Vt.createElement("span",{className:"rli-d-i-b shadow"}))),Vt.createElement(hs,{staticText:!0,text:a?.text,textColor:a?.textColor,style:{marginTop:"2px"}}))},Ip=function(a){var i=Object(a).variant,l=i===void 0?"pulsate":i;return l==="pulsate"?Vt.createElement($S,Bt({},a)):l==="brick-stack"?Vt.createElement(WS,Bt({},a)):l==="bob"?Vt.createElement(IS,Bt({},a)):l==="bounce"?Vt.createElement(tT,Bt({},a)):null};xe(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--shape-phase".concat(i+1,"-color")});xe(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--trophySpin-phase".concat(i+1,"-color")});xe(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--slab-phase".concat(i+1,"-color")});xe(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--life-line-phase".concat(i+1,"-color")});const eT=({startX:a,startY:i,endX:l,endY:s})=>w.jsx(oe.line,{x1:a,y1:i,x2:l,y2:s,className:"active-connection",markerEnd:"url(#arrowhead)",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2}}),nT=({connection:a,neurons:i,neuronRadius:l,neuronTransforms:s,isGlowing:c,emphasizedConnections:d,showForwardPassVisuals:f,inputData:g,currentSampleIndex:p,neuronHeaders:h,hiddenWeights:y,inputNeurons:v,hiddenNeurons:x,hiddenBiases:E,outputWeights:D,outputBiases:O,showSigmoidPhase:_,outputNeurons:U,isEraserMode:Y,onEraseConnection:q,eraserHoveredConnection:$,setEraserHoveredConnection:P})=>{const F=i.find(Ct=>Ct.id===a.fromNeuronId),Q=i.find(Ct=>Ct.id===a.toNeuronId);if(!F||!Q)return null;const G=$===a.id,lt=d.includes(a.id),st=f?lt?1:.3:1,kt=s[a.fromNeuronId]||{x:0,y:0},Pt=s[a.toNeuronId]||{x:0,y:0},De=F.x+kt.x,ue=F.y+kt.y,Yt=Q.x+Pt.x,k=Q.y+Pt.y,Z=(Ct,Kt,Xt,wt)=>{switch(Kt){case"top":return{x:Xt,y:wt-l};case"right":return{x:Xt+l,y:wt};case"bottom":return{x:Xt,y:wt+l};case"left":return{x:Xt-l,y:wt};default:return{x:Xt,y:wt}}},W=Z(F,a.fromDirection,De,ue),mt=Z(Q,a.toDirection,Yt,k),T=(W.x+mt.x)/2;let B=(W.y+mt.y)/2;const I=Math.atan2(mt.y-W.y,mt.x-W.x)*(180/Math.PI),J=()=>{if(!f||!g[p]||!d.includes(a.id))return null;const Ct=h[F.label]||F.label,Kt=h[Q.label]||Q.label;if(F.type==="input"&&Q.type==="hidden"){const Xt=parseFloat(g[p][Ct])||0,wt=y[`${Ct}-${Kt}`]||0,et=E[Kt]||0,St=Xt*wt+et;return`${Xt} × ${wt.toFixed(1)} + ${et.toFixed(1)} = ${St.toFixed(1)}`}if(F.type==="hidden"&&Q.type==="output"){let Xt=0;v.forEach(ce=>{const Wt=h[ce.label]||ce.label,He=parseFloat(g[p][Wt])||0,pe=y[`${Wt}-${Ct}`]||0;Xt+=He*pe});const wt=E[Ct]||0,et=Xt+wt,St=Math.max(0,et),Mt=D[`${Ct}-${Kt}`]||0;O[Kt];const Ot=(St*Mt).toFixed(1);return`${St.toFixed(0)} × ${Mt.toFixed(1)} = ${Ot}`}return F.type==="output"&&Q.type==="display"&&a.isSigmoidConnection,null},it=()=>{if(!(F.type==="output"&&Q.type==="display"&&a.isSigmoidConnection))return null;B-=20;const Ct=h[F.label]||F.label;let Kt=0;x.forEach(et=>{const St=h[et.label]||et.label;let Mt=0;v.forEach(pe=>{const $e=h[pe.label]||pe.label,wn=parseFloat(g[p][$e])||0,Rn=y[`${$e}-${St}`]||0;Mt+=wn*Rn});const Ot=E[St]||0,ce=Mt+Ot,Wt=Math.max(0,ce),He=D[`${St}-${Ct}`]||0;Kt+=Wt*He});const Xt=O[Ct]||0;Kt+=Xt;const wt=Kt.toFixed(1);return w.jsxs("g",{children:[w.jsx("line",{x1:T-25,y1:B-5,x2:T+25,y2:B-5,stroke:"#ffffff",strokeWidth:"1"}),w.jsx("text",{x:T,y:B-10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1"}),w.jsx("text",{x:T-10,y:B+10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1 + e"}),w.jsxs("text",{x:T+8,y:B+5,fill:"#ffffff",fontSize:"8px",textAnchor:"start",children:["-",wt]})]})},gt=(Ct,Kt,Xt)=>{let wt=-1;for(let Mt=0;Mt<Ct&&(wt=Xt.indexOf(" ",wt+1),wt!==-1);Mt++);const et=Xt.slice(0,wt),St=Xt.slice(wt);return w.jsxs(w.Fragment,{children:[et,w.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:Kt}),St]})};function ot(Ct,Kt="11px Segoe UI"){const wt=document.createElement("canvas").getContext("2d");return wt.font=Kt,wt.measureText(Ct).width+16}let _t=J(),Dt="11px";if(_t){const Ct=Math.sqrt(Math.pow(mt.x-W.x,2)+Math.pow(mt.y-W.y,2));ot(_t)>Ct&&(Dt="9px",console.log("too big")),_t=gt(3,Q.label.toLowerCase(),_t)}const ke=a.isAnimating?"active-connection":c?"completed-connection glowing-connection":"completed-connection";return w.jsxs("g",{children:[w.jsx(oe.line,{x1:W.x,y1:W.y,x2:mt.x,y2:mt.y,className:ke,markerEnd:a.isAnimating?void 0:"url(#arrowhead)",initial:a.isAnimating?{pathLength:0}:{pathLength:1,opacity:st},animate:a.isAnimating?{pathLength:1,opacity:st}:{opacity:st,stroke:Y&&G?"#ef4444":"#ffffff"},transition:a.isAnimating?{duration:.6,ease:"easeInOut"}:{duration:.2},style:{cursor:Y?"crosshair":"default"},onMouseEnter:()=>{Y&&P(a.id)},onMouseLeave:()=>{Y&&P(null)},onClick:Ct=>{Y&&(Ct.stopPropagation(),q(a.id))}}),_t&&w.jsx(oe.text,{x:T,y:B-8,className:"formula-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{fontSize:Dt,fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},transform:`rotate(${I}, ${T}, ${B-8})`,children:_t}),d.includes(a.id)&&w.jsx(oe.g,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:it()})]})},aT=({x:a,y:i,neuronId:l,direction:s,onStartConnection:c,isHighlighted:d=!1})=>w.jsx(oe.circle,{cx:a,cy:i,r:4,className:`connection-dot ${d?"connection-dot-highlighted":""}`,onClick:f=>{f.stopPropagation(),c(l,s,a,i,f)},whileHover:{scale:1.2},initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2},style:{cursor:"pointer"}}),iT=({id:a,x:i,y:l,radius:s,label:c,type:d,onDragEnd:f,onStartConnection:g,highlightedDots:p=[],onDragUpdate:h,isGlowing:y,neurons:v,showForwardPassVisuals:x,emphasizedConnections:E,hiddenNeurons:D,inputNeurons:O,outputNeurons:_,neuronHeaders:U,hiddenWeights:Y,outputWeights:q,inputData:$,currentSampleIndex:P,hiddenBiases:F,connections:Q,showSigmoidPhase:G,outputBiases:lt,isEraserMode:st,onEraseNeuron:kt,eraserHoveredNeuron:Pt,setEraserHoveredNeuron:De})=>{const[ue,Yt]=X.useState(!1),[k,Z]=X.useState(!1),W=Pt===a,mt=st&&W?.5:1,T=v.find(et=>et.id===a),B=x&&(T?.type==="input"||T?.type==="hidden"&&Q.some(et=>E.includes(et.id)&&(et.fromNeuronId===a||et.toNeuronId===a))||T?.type==="output"&&(E.some(et=>{const St=Q.find(Mt=>Mt.id===et);return St&&St.toNeuronId===a})||G)||T?.type==="display"),I=x&&!B?.3:1,J=et=>{const St="neuron",Mt=et==="input"?"neuron-input":et==="hidden"?"neuron-hidden":et==="output"?"neuron-output":et.startsWith("hidden")?"neuron-hidden":"neuron";return y?`${St} ${Mt} glowing-neuron`:`${St} ${Mt}`},gt=(et=>{const St=U[et.label]||et.label,Mt=[];return et.type==="hidden"?O.forEach(Ot=>{const ce=U[Ot.label]||Ot.label,Wt=Y[`${ce}-${St}`]||0;Mt.push(Wt)}):et.type==="output"&&D.forEach(Ot=>{const ce=U[Ot.label]||Ot.label,Wt=q[`${ce}-${St}`]||0;Mt.push(Wt)}),Mt})(T||{type:d,label:c}),ot=gt.length>0?`[${gt.map(et=>et.toFixed(1)).join(", ")}]`:"",_t=()=>{if(d==="input"&&x&&$[P]){const et=U[c]||c;return $[P][et]||""}return""},Dt=()=>{if(d==="hidden"&&x&&$[P]){const et=U[c]||c;if(Q.some(Mt=>E.includes(Mt.id)&&Mt.toNeuronId===a&&O.some(Ot=>Ot.id===Mt.fromNeuronId))){let Mt=0;O.forEach(Wt=>{const He=U[Wt.label]||Wt.label,pe=parseFloat($[P][He])||0,$e=Y[`${He}-${et}`]||0;Mt+=pe*$e});const Ot=F[et]||0;return(Mt+Ot).toFixed(1)}}return""},ke=()=>{if(d==="output"&&x&&G&&$[P]){const et=U[c]||c,St=[];D.forEach(Ot=>{const ce=U[Ot.label]||Ot.label;let Wt=0;O.forEach(Hn=>{const Me=U[Hn.label]||Hn.label,ge=parseFloat($[P][Me])||0,rn=Y[`${Me}-${ce}`]||0;Wt+=ge*rn});const He=F[ce]||0,pe=Wt+He,$e=Math.max(0,pe),wn=q[`${ce}-${et}`]||0,Rn=$e*wn;St.push(Rn.toFixed(1))});const Mt=lt[et]||0;return`${St.join(" + ")} + ${Mt.toFixed(1)}`}return""},Ct=()=>{if(d==="output"&&x&&G&&$[P]){const et=U[c]||c;let St=0;D.forEach(Ot=>{const ce=U[Ot.label]||Ot.label;let Wt=0;O.forEach(Rn=>{const Hn=U[Rn.label]||Rn.label,Me=parseFloat($[P][Hn])||0,ge=Y[`${Hn}-${ce}`]||0;Wt+=Me*ge});const He=F[ce]||0,pe=Wt+He,$e=Math.max(0,pe),wn=q[`${ce}-${et}`]||0;St+=$e*wn});const Mt=lt[et]||0;return St+=Mt,St.toFixed(1)}return""},Kt=[{direction:"top",x:0,y:-s},{direction:"right",x:s,y:0},{direction:"bottom",x:0,y:s},{direction:"left",x:-s,y:0}],Xt=()=>{ue||(Z(!0),st&&De(a))},wt=()=>{Z(!1),st&&De(null)};return w.jsxs(oe.g,{drag:!0,dragMomentum:!1,dragElastic:.1,initial:{x:i,y:l},animate:{x:i,y:l,opacity:I},onDragStart:()=>{Yt(!0),Z(!1)},onDrag:(et,St)=>{h(a,St.offset.x,St.offset.y)},onDragEnd:(et,St)=>{Yt(!1);const Mt=i+St.offset.x,Ot=l+St.offset.y;f(a,Mt,Ot),h(a,0,0)},whileDrag:{scale:1.1},onMouseEnter:Xt,onMouseLeave:wt,style:{cursor:ue?"grabbing":"default"},children:[w.jsx("circle",{cx:0,cy:0,r:s+20,fill:"transparent",style:{pointerEvents:"all",cursor:"default"}}),w.jsx(oe.circle,{cx:0,cy:0,r:s,className:J(d),initial:{scale:0,opacity:0},animate:{scale:1,opacity:mt,stroke:st&&W?"#ef4444":void 0,strokeWidth:st&&W?3:void 0},transition:{duration:.6,type:"spring"},style:{cursor:st?"crosshair":ue?"grabbing":"grab"},onClick:et=>{et.button===0&&st&&(et.stopPropagation(),kt(a))}}),(Dt()||d==="output"&&G)&&w.jsx("rect",{x:-23,y:-9,width:46,height:18,rx:3,fill:"rgb(6, 129, 0)",stroke:"#22c55e",strokeWidth:2}),w.jsx(oe.text,{x:0,y:5,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},style:{pointerEvents:"none"},children:Dt()?"ReLU":d==="output"&&G?"Sig":c}),ot&&!(d==="output"&&G)&&w.jsx(oe.text,{x:0,y:-s-10,className:Dt()?"neuron-text":"neuron-weights-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{},children:Dt()||ot}),d==="output"&&G&&ke()&&w.jsxs(oe.text,{x:0,y:-s-25,className:"formula-text",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{fontSize:"11px",fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},children:[ke(),w.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:"b2"})]}),d==="output"&&G&&Ct()&&w.jsx(oe.text,{x:0,y:-s-10,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},style:{pointerEvents:"none"},children:Ct()}),d==="input"&&x&&_t()&&w.jsx(oe.text,{x:0,y:-s*1.3,className:"input-value-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},style:{pointerEvents:"none",fontSize:"14px",fill:"#ffffff",textAnchor:"middle"},children:_t()}),w.jsx($g,{children:k&&!ue&&Kt.map(et=>w.jsx(aT,{x:et.x,y:et.y,neuronId:a,direction:et.direction,onStartConnection:g,isHighlighted:p.includes(et.direction)},et.direction))})]})},tg=(a,i)=>{const l=a.length,s=a[0].length,c=i[0].length,d=Array(l).fill().map(()=>Array(c).fill(0));for(let f=0;f<l;f++)for(let g=0;g<c;g++)for(let p=0;p<s;p++)d[f][g]+=a[f][p]*i[p][g];return d},eg=(a,i)=>a.map(l=>l.map((s,c)=>s+(i[c]||0))),oT=a=>a.map(i=>i.map(l=>Math.max(0,l))),lT=a=>a.map(i=>i.map(l=>1/(1+Math.exp(-l)))),rT=(a,i)=>a.map((s,c)=>{const d=Math.max(1e-15,Math.min(.999999999999999,i[c]));return-(s*Math.log(d)+(1-s)*Math.log(1-d))}),sT=(a,i,l,s,c,d,f,g,p,h)=>{const y=a.filter(v=>{const x=i.some(D=>v[D.label]&&v[D.label].trim()!==""),E=v.Truth!==void 0&&v.Truth!=="";return x&&E});if(y.length===0){alert("Please add input data with truth values");return}if(l.length===0||s.length===0){alert("Please add hidden and output neurons");return}try{const v=y.map(Q=>i.map(G=>parseFloat(Q[G.label])||0)),x=y.map(Q=>parseFloat(Q.Truth)||0),E=i.map(Q=>l.map(G=>{const lt=c[Q.label]||Q.label,st=c[G.label]||G.label;return d[`${lt}-${st}`]||0})),D=l.map(Q=>{const G=c[Q.label]||Q.label;return f[G]||0}),O=l.map(Q=>s.map(G=>{const lt=c[Q.label]||Q.label,st=c[G.label]||G.label;return g[`${lt}-${st}`]||0})),_=s.map(Q=>{const G=c[Q.label]||Q.label;return p[G]||0});let U=tg(v,E);U=eg(U,D);const Y=oT(U);let q=tg(Y,O);q=eg(q,_);const P=lT(q).map(Q=>Q[0]),F=rT(x,P);h({predictions:P,truthValues:x,losses:F,showResults:!0})}catch(v){console.error("Error in forward pass:",v),console.error("Error stack:",v.stack),alert("Error in calculation. Please check your inputs and weights.")}},ng=({title:a,neurons:i,data:l,setData:s,onHeaderChange:c,onCellHover:d,isOutput:f=!1,truthValues:g=[],predictions:p=[],losses:h=[]})=>{const y=()=>{f||s(D=>[...D,{}])},v=(D,O,_)=>{f||(s(U=>{const Y=[...U];return Y[D]||(Y[D]={}),Y[D][O]=_,Y}),D===l.length-1&&_.trim()!==""&&y())},x=(D,O,_)=>{O===_||f||(s(U=>U.map(Y=>{if(Y[O]!==void 0){const q={...Y};return q[_]=Y[O],delete q[O],q}return Y})),c(O,_))},E=D=>D<.3?"#22c55e":D<.7?"#eab308":"#ef4444";return!f&&i.length===0?null:w.jsxs("div",{className:"input-table-container",children:[w.jsx("h3",{className:"table-title",children:a}),w.jsxs("table",{className:"neural-table input-table",children:[w.jsx("thead",{children:w.jsxs("tr",{children:[w.jsx("th",{children:w.jsx("input",{type:"text",className:"header-input",value:"Truth",readOnly:!0})}),!f&&i.map(D=>w.jsx("th",{children:w.jsx("input",{type:"text",className:"header-input",value:D.label,onChange:O=>x(D.id,D.label,O.target.value||D.label),onKeyDown:O=>{O.key==="Enter"&&O.target.blur()}})},D.id)),f&&w.jsxs(w.Fragment,{children:[w.jsx("th",{children:w.jsx("input",{type:"text",className:"header-input",value:"ŷ",readOnly:!0})}),w.jsx("th",{children:w.jsx("input",{type:"text",className:"header-input",value:"Loss",readOnly:!0})})]})]})}),w.jsx("tbody",{children:(f?g:l).map((D,O)=>w.jsxs("tr",{children:[w.jsx("td",{children:w.jsx("input",{type:"number",className:"cell-input",value:f?g[O]:D.Truth||"",onChange:f?void 0:_=>{const U=_.target.value;(U===""||U==="0"||U==="1")&&v(O,"Truth",U)},placeholder:"0",min:"0",max:"1",step:"1",readOnly:f})}),!f&&i.map(_=>w.jsx("td",{children:w.jsx("input",{type:"number",className:"cell-input",value:D[_.label]||"",onChange:U=>v(O,_.label,U.target.value),onMouseEnter:()=>d("neuron",_.label),onMouseLeave:()=>d(null),onFocus:()=>d("neuron",_.label),onBlur:()=>d(null),placeholder:"0",step:"0.1"})},_.id)),f&&w.jsxs(w.Fragment,{children:[w.jsx("td",{children:w.jsx("input",{type:"number",className:"cell-input",value:p[O]?.toFixed(4)||"",readOnly:!0})}),w.jsx("td",{children:w.jsx("input",{type:"number",className:"cell-input",value:h[O]?.toFixed(4)||"",style:{backgroundColor:h[O]?E(h[O]):"transparent",color:h[O]&&h[O]<1?"#000":"#fff"},readOnly:!0})})]})]},O))})]})]})},ag=({title:a,inputLabels:i,neuronLabels:l,weights:s,biases:c,onWeightChange:d,onBiasChange:f,onHeaderChange:g,showSaveLoad:p,onSave:h,onLoad:y,onCellHover:v,biasLabel:x="b"})=>l.length===0?null:w.jsxs("div",{className:"weights-table-container",children:[w.jsxs("div",{className:"table-header",children:[w.jsx("h3",{className:"table-title",children:a}),p]}),w.jsxs("table",{className:"neural-table weights-table",children:[w.jsxs("thead",{children:[w.jsxs("tr",{children:[w.jsx("th",{className:"bias-label",children:x}),l.map((E,D)=>w.jsx("th",{children:w.jsx("input",{type:"number",className:"bias-input",value:c[E]||"",onChange:O=>f(E,O.target.value),onMouseEnter:()=>v("neuron",E),onMouseLeave:()=>v(null),onFocus:()=>v("neuron",E),onBlur:()=>v(null),placeholder:"0.5",step:"0.1"})},D))]}),w.jsxs("tr",{children:[w.jsx("th",{}),l.map((E,D)=>w.jsx("th",{children:w.jsx("input",{type:"text",className:"header-input",defaultValue:E,onBlur:O=>g(E,O.target.value||E),onKeyDown:O=>{O.key==="Enter"&&O.target.blur()}})},D))]})]}),w.jsx("tbody",{children:i.map((E,D)=>w.jsxs("tr",{children:[w.jsx("td",{className:"row-header",children:E}),l.map((O,_)=>w.jsx("td",{children:w.jsx("input",{type:"number",className:"cell-input",value:s[`${E}-${O}`]||"",onChange:U=>d(E,O,U.target.value),onMouseEnter:()=>v("connection",E,O),onMouseLeave:()=>v(null),onFocus:()=>v("connection",E,O),onBlur:()=>v(null),placeholder:"0.1",step:"0.1"})},_))]},D))})]})]}),uT=a=>{const{setNeuronHeaders:i,setHiddenWeights:l,setHiddenBiases:s,setOutputWeights:c,setOutputBiases:d}=a;return{handleInputHeaderChange:(f,g)=>{i(p=>({...p,[f]:g}))},handleWeightChange:(f,g,p)=>{l(h=>({...h,[`${f}-${g}`]:parseFloat(p)||0}))},handleBiasChange:(f,g)=>{s(p=>({...p,[f]:parseFloat(g)||0}))},handleOutputWeightChange:(f,g,p)=>{c(h=>({...h,[`${f}-${g}`]:parseFloat(p)||0}))},handleOutputBiasChange:(f,g)=>{d(p=>({...p,[f]:parseFloat(g)||0}))},handleNeuronHeaderChange:(f,g)=>{i(p=>({...p,[f]:g}))}}},Ly=(a,i)=>a==="input"?`X${i}`:a==="hidden"?`H${i}`:a.startsWith("hidden")?`H${parseInt(a.replace("hidden",""))}${i}`:`Y${i}`,cT=(a,i,l,s,c)=>{let d;a==="input"?d=200:a==="hidden"?d=400:a.startsWith("hidden")?d=400+((parseInt(a.replace("hidden",""))||1)-1)*100:d=400+l*100+100;const f=s-100-90*(i-1);return{x:d,y:f}},fT=(a,i,l,s,c)=>{const{x:d,y:f}=cT(a,i,l,s);return{id:`${a}-${Date.now()}`,x:d,y:f,radius:c,label:Ly(a,i),type:a}},dT=(a,i,l,s,c,d,f)=>{const g=i[a]+1,p=fT(a,g,c,d,f);l(h=>{const y=[...h,p],v=y.filter(x=>x.type===a).sort((x,E)=>x.y-E.y);return y.map(x=>{if(x.type===a){const E=v.findIndex(D=>D.id===x.id);return{...x,label:Ly(a,E+1)}}return x})}),s(h=>({...h,[a]:g}))},hT=async(a,i,l)=>{l(!0);const s=a.filter(h=>h.type==="input").sort((h,y)=>h.y-y.y),c=a.filter(h=>h.type==="hidden"||h.type.startsWith("hidden")).sort((h,y)=>h.x-y.x||h.y-y.y),d=a.filter(h=>h.type==="output").sort((h,y)=>h.y-y.y);if(s.length===0||c.length===0)return;const f={};c.forEach(h=>{const y=h.x;f[y]||(f[y]=[]),f[y].push(h)});const g=Object.keys(f).map(Number).sort(),p=[];if(g.length>0){const h=f[g[0]],y=[];for(const v of s)for(const x of h)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}for(let h=0;h<g.length-1;h++){const y=f[g[h]],v=f[g[h+1]],x=[];for(const E of y)for(const D of v)x.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:E.id,toNeuronId:D.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(x)}if(d.length>0&&g.length>0){const h=f[g[g.length-1]],y=[];for(const v of h)for(const x of d)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}p.forEach((h,y)=>{setTimeout(()=>{i(v=>[...v,...h]),setTimeout(()=>{i(v=>v.map(x=>h.some(E=>E.id===x.id)?{...x,isAnimating:!1}:x))},600)},100+y*700)})},ig=`
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
}`,mT="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='18'%20viewBox='0%200%2022%2018'%3e%3cg%3e%3cpolygon%20points='15.828%206%2018%206%2018%208%2022%204%2018%200%2018%202%2014.172%202%204.172%2012%200%2012%200%2016%205.828%2016%2015.828%206'/%3e%3cpolygon%20points='18%2010%2018%2012%2015.828%2012%2014.242%2010.414%2011.414%2013.242%2014.172%2016%2018%2016%2018%2018%2022%2014%2018%2010'/%3e%3cpolygon%20points='5.758%207.586%208.586%204.758%205.828%202%200%202%200%206%204.172%206%205.758%207.586'/%3e%3c/g%3e%3c/svg%3e",ai=({matrix:a,label:i,x:l=0,y:s=0})=>{if(!a||a.length===0)return null;const c=a.length,d=a[0]?.length||0,f=40,g=4;return w.jsxs("div",{className:"matrix-display",style:{position:"relative",fontFamily:"monospace",color:"white"},children:[i&&w.jsx("div",{className:"matrix-label",style:{marginBottom:"8px",textAlign:"center",fontSize:"18px",fontWeight:"bold"},children:i}),w.jsxs("div",{className:"matrix-container",style:{position:"relative"},children:[w.jsx("div",{className:"matrix-bracket-left",style:{position:"absolute",left:"-8px",top:"0",height:`${c*(f+g)-g}px`,width:"6px",borderLeft:"2px solid white",borderTop:"2px solid white",borderBottom:"2px solid white"}}),w.jsx("div",{className:"matrix-bracket-right",style:{position:"absolute",right:"-8px",top:"0",height:`${c*(f+g)-g}px`,width:"6px",borderRight:"2px solid white",borderTop:"2px solid white",borderBottom:"2px solid white"}}),w.jsx("div",{className:"matrix-content",children:a.map((p,h)=>w.jsx("div",{className:"matrix-row",style:{display:"flex",marginBottom:h<c-1?`${g}px`:"0"},children:p.map((y,v)=>w.jsx("div",{className:"matrix-cell",style:{width:`${f}px`,height:`${f}px`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",marginRight:v<d-1?`${g}px`:"0",backgroundColor:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"2px"},children:typeof y=="number"?y.toFixed(1):y},v))},h))})]})]})},Pc=({children:a,delay:i=0,isVisible:l=!0})=>w.jsx(oe.div,{initial:{opacity:0},animate:{opacity:l?1:0},transition:{delay:i,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"50px"},children:a}),Yc=({symbol:a})=>w.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:a}),pT=({label:a})=>w.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},children:[w.jsx("div",{style:{fontSize:"16px",color:"white",fontWeight:"bold",backgroundColor:"rgb(6, 129, 0)",border:"2px solid #22c55e",borderRadius:"8px",padding:"2px 8px"},children:a}),w.jsx("img",{src:mT,alt:"Activation Arrow",style:{width:"24px",height:"24px",filter:"invert(1)"}})]}),Xc=!0;function gT(){const[a,i]=X.useState([]),[l,s]=X.useState([]),[c,d]=X.useState(!1),[f,g]=X.useState(1),[p,h]=X.useState(null),[y,v]=X.useState(null),[x,E]=X.useState({input:0,hidden:0,output:0,...Array.from({length:10},(L,K)=>({[`hidden${K+2}`]:0})).reduce((L,K)=>({...L,...K}),{})}),[D,O]=X.useState([{}]),[_,U]=X.useState({}),[Y,q]=X.useState({}),[$,P]=X.useState({}),[F,Q]=X.useState({}),[G,lt]=X.useState({}),[st,kt]=X.useState(null),[Pt,De]=X.useState({x:0,y:0}),[ue,Yt]=X.useState(null),[k,Z]=X.useState({}),[W,mt]=X.useState([]),[T,B]=X.useState([]),[I,J]=X.useState([]),[it,gt]=X.useState(!1),[ot,_t]=X.useState(!1),[Dt,ke]=X.useState(!1),[Ct,Kt]=X.useState(!1),[Xt,wt]=X.useState([]),[et,St]=X.useState(0),[Mt,Ot]=X.useState(!1),[ce,Wt]=X.useState(null),[He,pe]=X.useState(!1),[$e,wn]=X.useState(5),[Rn,Hn]=X.useState(!1),[Me,ge]=X.useState(!1),[rn,_e]=X.useState(null),[ps,Dl]=X.useState(null),[Ml,ui]=X.useState(!0),[ci,Cn]=X.useState(!1),[ye,Sn]=X.useState({});function Xe(L,K){let ht=-1*($e-5)/10*L;return K&&ht<0&&(ht=Math.max(0,ht)),new Promise(zt=>setTimeout(zt,L+ht))}X.useEffect(()=>{if(!localStorage.getItem("neuralNetworkData")){pe(!0);const L=setTimeout(()=>pe(!1),6e3);return()=>clearTimeout(L)}},[]),X.useEffect(()=>{const L=K=>{K.key==="`"&&Hn(dt=>!dt)};return window.addEventListener("keydown",L),()=>{window.removeEventListener("keydown",L)}},[]);const Ba=X.useRef(null),Ge=30,oo=400;let qn=[];const El=()=>{sT(D,sn,Ee,un,G,_,Y,$,F,L=>{qn=L.predictions,mt(L.predictions),B(L.truthValues),J(L.losses),gt(L.showResults)})},wl=async()=>{if(Ee.length===0)return;_t(!0),gt(!1),await Xe(500),Cn(!0);const L=D.filter(bt=>{const It=sn.some(qe=>bt[qe.label]&&bt[qe.label].trim()!==""),je=bt.Truth!==void 0&&bt.Truth!=="";return It&&je});if(L.length===0){alert("Please add input data with truth values"),_t(!1),Cn(!1);return}const K=L.map(bt=>sn.map(It=>parseFloat(bt[It.label])||0)),dt=sn.map(bt=>Ee.map(It=>{const je=G[bt.label]||bt.label,qe=G[It.label]||It.label;return _[`${je}-${qe}`]||0})),ht=Ee.map(bt=>{const It=G[bt.label]||bt.label;return Y[It]||0}),zt=K.map(bt=>dt[0].map((It,je)=>bt.reduce((qe,we,Vl)=>qe+we*dt[Vl][je],0))),pt=zt.map(bt=>bt.map((It,je)=>It+ht[je])),Gt=pt.map(bt=>bt.map(It=>Math.max(0,It)));Sn({step:1,X:K,W1:dt,b1:ht,XW1:zt,Z1:pt,A1:Gt,showFormula:!1,showXW1:!1,showZ1:!1,showReLU:!1}),await Xe(1e3),Sn(bt=>({...bt,showFormula:!0})),await Xe(1500),Sn(bt=>({...bt,showXW1:!0})),await Xe(1500),Sn(bt=>({...bt,showZ1:!0})),await Xe(1e3),Sn(bt=>({...bt,showReLU:!0})),_t(!1),await Xe(4e3,Xc),_t(!1)},Rl=L=>{Me&&(i(K=>K.filter(dt=>dt.id!==L)),s(K=>K.filter(dt=>dt.fromNeuronId!==L&&dt.toNeuronId!==L)),v(null),_e(null))},lo=L=>{Me&&(s(K=>K.filter(dt=>dt.id!==L)),h(null),Dl(null))},ro=async()=>{if(Ml){if(Ee.length===0)return;_t(!0),gt(!1),Kt(!0),St(0),Ot(!1),Wt(null);const L=async K=>{const dt=Ee[K];if(!dt)return;const ht=l.filter(pt=>pt.toNeuronId===dt.id&&sn.some(Gt=>Gt.id===pt.fromNeuronId)).map(pt=>pt.id);wt(pt=>Array.from(new Set([...pt,...ht]))),await Xe(3e3),wt(pt=>pt.filter(Gt=>!ht.includes(Gt)));const zt=l.filter(pt=>pt.fromNeuronId===dt.id&&un.some(Gt=>Gt.id===pt.toNeuronId)).map(pt=>pt.id);wt(pt=>Array.from(new Set([...pt,...zt]))),await Xe(2e3)};for(let K=0;K<Ee.length;K++)await L(K);if(Ot(!0),await Xe(3e3),El(),un.length>0&&qn.length>0){const K=un[0],dt=qn[0].toFixed(4),ht={id:`display-${Date.now()}`,x:K.x+150,y:K.y,radius:30,label:dt,type:"display"};Wt(ht),i(pt=>[...pt,ht]);const zt={id:`sigmoid-connection-${Date.now()}`,fromNeuronId:K.id,toNeuronId:ht.id,fromDirection:"right",toDirection:"left",isSigmoidConnection:!0};s(pt=>[...pt,zt]),wt(pt=>[...pt,zt.id])}await Xe(2e3),_t(!1),await Xe(4e3,Xc),Ot(!1),i(K=>K.filter(dt=>dt.type!=="display")),s(K=>K.filter(dt=>!dt.isSigmoidConnection)),wt([]),await Xe(700,Xc),Kt(!1)}else await wl(),El()},{handleInputHeaderChange:Cl,handleWeightChange:gs,handleBiasChange:zn,handleOutputWeightChange:Se,handleOutputBiasChange:Ve,handleNeuronHeaderChange:Pn}=uT({setNeuronHeaders:lt,setHiddenWeights:U,setHiddenBiases:q,setOutputWeights:P,setOutputBiases:Q}),fi=()=>{const L=a.filter(ht=>ht.type!=="display"),K=l.filter(ht=>!ht.isSigmoidConnection),dt={inputData:D,hiddenWeights:_,hiddenBiases:Y,outputWeights:$,outputBiases:F,neuronHeaders:G,neurons:L,connections:K,counters:x,timestamp:new Date().toISOString()};localStorage.setItem("neuralNetworkData",JSON.stringify(dt))},zl=()=>{pe(!1);let L=localStorage.getItem("neuralNetworkData");L||(L=ig,localStorage.setItem("neuralNetworkData",ig));try{const K=JSON.parse(L);O(K.inputData||[{}]),U(K.hiddenWeights||{}),q(K.hiddenBiases||{}),P(K.outputWeights||{}),Q(K.outputBiases||{}),lt(K.neuronHeaders||{}),K.neurons&&i(K.neurons),K.connections&&(s(K.connections),ke(!0)),K.counters&&E(K.counters)}catch(K){console.error("Error loading network data:",K)}},so=(L,K,dt)=>{if(L==="connection"&&K&&dt){const ht=a.find(pt=>(G[pt.label]||pt.label)===K),zt=a.find(pt=>(G[pt.label]||pt.label)===dt);if(ht&&zt){const pt=l.find(Gt=>Gt.fromNeuronId===ht.id&&Gt.toNeuronId===zt.id);h(pt?.id||null)}v(null)}else if(L==="neuron"&&K){const ht=a.find(zt=>(G[zt.label]||zt.label)===K);v(ht?.id||null),h(null)}else h(null),v(null)},sn=a.filter(L=>L.type==="input").sort((L,K)=>L.y-K.y),Ee=a.filter(L=>L.type==="hidden").sort((L,K)=>L.y-K.y),un=a.filter(L=>L.type==="output").sort((L,K)=>L.y-K.y),ua=sn.map(L=>G[L.label]||L.label),Yn=Ee.map(L=>G[L.label]||L.label),La=un.map(L=>G[L.label]||L.label),Xn=L=>{if(!Ba.current)return{x:0,y:0};const K=Ba.current.getBoundingClientRect(),dt=(L.clientX-K.left)/K.width*800,ht=(L.clientY-K.top)/K.height*400;return{x:dt,y:ht}},fe=(L,K,dt)=>{Z(ht=>({...ht,[L]:{x:K,y:dt}}))},Nl=X.useCallback(L=>{if(st&&Ba.current){const K=Xn(L);De(K);let dt=null,ht=1/0;a.forEach(zt=>{if(zt.id!==st.fromNeuronId){const pt=k[zt.id]||{x:0,y:0},Gt=zt.x+pt.x,bt=zt.y+pt.y;[{direction:"top",x:Gt,y:bt-Ge},{direction:"right",x:Gt+Ge,y:bt},{direction:"bottom",x:Gt,y:bt+Ge},{direction:"left",x:Gt-Ge,y:bt}].forEach(je=>{const qe=Math.sqrt(Math.pow(K.x-je.x,2)+Math.pow(K.y-je.y,2));qe<15&&qe<ht&&(ht=qe,dt={neuronId:zt.id,direction:je.direction})})}}),Yt(dt)}},[st,a,k,Ge]),kl=L=>{dT(L,x,i,E,f,oo,Ge)},Gn=(L,K,dt)=>{i(ht=>ht.map(zt=>zt.id===L?{...zt,x:K,y:dt}:zt))},ca=(L,K,dt,ht,zt)=>{if(st)if(L!==st.fromNeuronId){const pt={id:`connection-${Date.now()}`,fromNeuronId:st.fromNeuronId,toNeuronId:L,fromDirection:st.fromDirection,toDirection:K};s(Gt=>[...Gt,pt]),kt(null),Yt(null)}else kt(null),Yt(null);else{const pt=a.find(we=>we.id===L),Gt=k[L]||{x:0,y:0},bt=pt.x+Gt.x,It=pt.y+Gt.y,je={top:{x:bt,y:It-Ge},right:{x:bt+Ge,y:It},bottom:{x:bt,y:It+Ge},left:{x:bt-Ge,y:It}},qe=Xn(zt);kt({fromNeuronId:L,fromDirection:K,startX:je[K].x,startY:je[K].y}),De(qe)}},ys=()=>{hT(a,s,ke)},_l=L=>{L.target.classList.contains("network-svg")&&st&&(kt(null),Yt(null))},uo=(L,K,dt=()=>kl(L),ht=0)=>w.jsx(oe.button,{onClick:dt,className:"spawn-btn",whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20-ht},animate:{opacity:1,y:-25},transition:{delay:.1,duration:.1},children:K},L);return w.jsxs("div",{className:"app-container",children:[w.jsxs("div",{style:{position:"fixed",top:0,left:10,zIndex:100,background:"transparent",padding:"18px 24px 0 24px",color:"white",fontSize:"1rem",letterSpacing:"0.04em"},children:[w.jsx("a",{href:"../matrix_tool/",style:{color:"white",fontWeight:300,marginRight:"24px"},children:"Home"}),w.jsx("a",{href:"https://www.linkedin.com/in/laish-glenberg/",style:{color:"white",fontWeight:300,marginRight:"24px"},children:"About"}),w.jsx("a",{href:"https://ko-fi.com/weadsy",style:{color:"white",fontWeight:300,marginRight:"24px"},children:"Donate"})]}),w.jsxs(oe.div,{className:"content-wrapper-with-tables",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,ease:"easeOut"},children:[w.jsxs("div",{className:"left-panel",children:[w.jsx(ng,{title:"Input Col Vectors",neurons:sn,data:D,setData:O,onHeaderChange:Cl,onCellHover:so,isOutput:!1}),ot&&w.jsx("div",{style:{minHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:w.jsx(Ip,{color:["#7e7e7e","#979797","#b1b1b1","#cacaca"]})}),it&&!ot&&w.jsx(oe.div,{initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.7,ease:"easeOut"},children:w.jsx(ng,{title:"Final Predictions",neurons:[],data:[],setData:()=>{},onHeaderChange:()=>{},onCellHover:()=>{},isOutput:!0,truthValues:T,predictions:W,losses:I})})]}),w.jsxs("div",{className:"center-panel",children:[w.jsxs("div",{className:"main-title-row",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"5px",position:"relative"},children:[w.jsx(oe.h1,{className:"main-title",initial:{opacity:0,y:-30},animate:{opacity:1,y:10},transition:{delay:.3,duration:.8},style:{margin:0},children:"Neural Network Builder"}),w.jsxs("div",{className:"save-load-buttons",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},children:[w.jsx("button",{className:"save-load-btn",title:"Save all table values in cookies",onClick:fi,style:{marginRight:"8px"},children:"Save"}),w.jsx("button",{className:`save-load-btn${He?" flash":""}`,title:"Load tables from cookies",onClick:zl,children:"Load"})]})]}),w.jsx("div",{className:"eraser-checkbox-wrapper",style:{position:"absolute",right:"420px",top:"110px",zIndex:10},children:w.jsxs("label",{className:"eraser-checkbox-container",style:{border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",padding:"0.5rem"},children:[w.jsx("input",{type:"checkbox",checked:Me,onChange:L=>ge(L.target.checked),className:"eraser-checkbox"}),w.jsx("span",{className:"eraser-label",children:"Eraser"})]})}),w.jsx("div",{className:"eraser-checkbox-wrapper",style:{position:"absolute",right:"420px",top:"170px",zIndex:10},children:w.jsxs("label",{className:"speedbox-container",style:{border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",padding:"0.7rem 0.5rem",display:"flex",alignItems:"center",gap:"0.5rem",marginRight:"12px"},children:[w.jsx("input",{type:"number",min:0,max:Rn?20:9,step:1,value:$e,onChange:L=>wn(Number(L.target.value)),className:"eraser-checkbox ishovered",style:{width:"38px",background:"transparent",color:"white",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"4px",fontSize:"1rem",padding:"2px 6px",minHeight:"25px"}}),w.jsx("span",{className:"eraser-label",children:"Speed"})]})}),a.some(L=>L.type==="output")&&a.some(L=>L.type==="input")&&a.some(L=>L.type==="hidden")&&w.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",marginTop:"10px"},children:[w.jsxs("label",{className:"checkbox-container",style:{display:"flex",alignItems:"center",gap:"8px",color:"white",fontSize:"14px"},children:[w.jsx("input",{type:"checkbox",checked:Ml,onChange:L=>ui(L.target.checked),style:{transform:"scale(1.2)",accentColor:"#ffffff"}}),"Learning Mode"]}),w.jsx(oe.button,{onClick:ro,className:`spawn-btn${Dt?"":" btn-disabled"}`,style:{fontSize:"16px",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",opacity:ot?.5:1,cursor:ot?"not-allowed":"pointer"},disabled:!Dt||ot,whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1,duration:.1},children:ot?w.jsx(Ip,{color:"#ffffff",size:"small"}):w.jsxs(w.Fragment,{children:["START",w.jsx("img",{src:VS,alt:"Train",style:{marginLeft:"10px",width:22,height:22,filter:"invert(1)",transform:"scaleX(-1)"}})]})})]}),w.jsx($g,{children:ci&&w.jsx(oe.div,{className:"matrix-calculations-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.1,duration:1},style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.95)",zIndex:1e3,overflow:"hidden",padding:"50px",fontFamily:"monospace"},children:ye.step>=1&&w.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[ye.showFormula&&w.jsxs(Pc,{delay:0,isVisible:!0,children:[w.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z1 ="}),w.jsx(ai,{matrix:ye.X,label:"X"}),w.jsx(Yc,{symbol:"×"}),w.jsx(ai,{matrix:ye.W1,label:"W1"}),w.jsx(Yc,{symbol:"+"}),w.jsx(ai,{matrix:[ye.b1],label:"b1"})]}),ye.showXW1&&w.jsxs(Pc,{delay:0,isVisible:!0,children:[w.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z1 ="}),w.jsx(ai,{matrix:ye.XW1}),w.jsx(Yc,{symbol:"+"}),w.jsx(ai,{matrix:[ye.b1]})]}),ye.showZ1&&w.jsxs(Pc,{delay:0,isVisible:!0,children:[w.jsxs(oe.div,{initial:{x:ye.showReLU?-25:0},animate:{x:ye.showReLU?-25:0},transition:{duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[w.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z1 ="}),w.jsx(ai,{matrix:ye.Z1})]}),ye.showReLU&&w.jsxs(oe.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.5,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[w.jsx(pT,{label:"ReLU"}),w.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"A1 ="}),w.jsx(ai,{matrix:ye.A1})]})]})]})})}),w.jsxs(oe.svg,{ref:Ba,width:"100%",height:"400",viewBox:"0 0 800 400",className:"network-svg",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:1},onMouseMove:Nl,onClick:_l,style:{cursor:Me?"crosshair":"default"},children:[w.jsx("defs",{children:w.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:w.jsx("polygon",{points:"0 0, 10 3.5, 0 7",className:"arrow-marker"})})}),l.map(L=>w.jsx(nT,{connection:L,neurons:a,neuronRadius:Ge,neuronTransforms:k,isGlowing:p===L.id,emphasizedConnections:Xt,showForwardPassVisuals:Ct,inputData:D,currentSampleIndex:et,neuronHeaders:G,hiddenWeights:_,inputNeurons:sn,hiddenNeurons:Ee,hiddenBiases:Y,outputWeights:$,outputBiases:F,showSigmoidPhase:Mt,outputNeurons:un,isEraserMode:Me,onEraseConnection:lo,eraserHoveredConnection:ps,setEraserHoveredConnection:Dl},L.id)),st&&w.jsx(eT,{startX:st.startX,startY:st.startY,endX:Pt.x,endY:Pt.y}),a.map(L=>w.jsx(iT,{id:L.id,x:L.x,y:L.y,radius:L.radius,label:L.label,type:L.type,onDragEnd:Gn,onDragUpdate:fe,onStartConnection:ca,highlightedDots:ue?.neuronId===L.id?[ue.direction]:[],isGlowing:y===L.id,neurons:a,showForwardPassVisuals:Ct,emphasizedConnections:Xt,hiddenNeurons:Ee,inputNeurons:sn,outputNeurons:un,neuronHeaders:G,hiddenWeights:_,outputWeights:$,inputData:D,currentSampleIndex:et,hiddenBiases:Y,connections:l,showSigmoidPhase:Mt,outputBiases:F,isEraserMode:Me,onEraseNeuron:Rl,eraserHoveredNeuron:rn,setEraserHoveredNeuron:_e},L.id))]}),w.jsxs("div",{className:"button-stack",children:[w.jsx("div",{className:"button-dense",children:a.some(L=>L.type==="input")&&a.some(L=>L.type==="hidden")&&uo("dense","Dense Connect",ys)}),w.jsx("div",{className:"button-container",children:[{type:"input",label:"Add Input"},{type:"hidden",label:"Add Hidden"},...c?Array.from({length:f-1},(L,K)=>({type:`hidden${K+2}`,label:`Add Hidden ${K+2}`})):[],{type:"output",label:"Add Output"}].map(({type:L,label:K})=>uo(L,K))})]})]}),w.jsxs("div",{className:"right-panel",children:[w.jsx(ag,{title:"Hidden Layer Weights",inputLabels:ua,neuronLabels:Yn,weights:_,biases:Y,onWeightChange:gs,onBiasChange:zn,onHeaderChange:Pn,showSaveLoad:!0,onSave:fi,onLoad:zl,onCellHover:so,biasLabel:"b1"}),Ee.length>0&&un.length>0&&w.jsx(ag,{title:"Output Layer Weights",inputLabels:Yn,neuronLabels:La,weights:$,biases:F,onWeightChange:Se,onBiasChange:Ve,onHeaderChange:Pn,showSaveLoad:!1,onCellHover:so,biasLabel:"b2"})]})]})]})}e1.createRoot(document.getElementById("root")).render(w.jsx(X.StrictMode,{children:w.jsx(gT,{})}));
