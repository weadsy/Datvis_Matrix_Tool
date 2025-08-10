(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();function Zv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ec={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function Qv(){if(Mm)return fl;Mm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:s,key:f,ref:c!==void 0?c:null,props:d}}return fl.Fragment=i,fl.jsx=l,fl.jsxs=l,fl}var Em;function Kv(){return Em||(Em=1,Ec.exports=Qv()),Ec.exports}var O=Kv(),wc={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function Fv(){if(wm)return bt;wm=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=v&&T[v]||T["@@iterator"],typeof T=="function"?T:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,D={};function _(T,L,I){this.props=T,this.context=L,this.refs=D,this.updater=I||w}_.prototype.isReactComponent={},_.prototype.setState=function(T,L){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,L,"setState")},_.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function B(){}B.prototype=_.prototype;function Y(T,L,I){this.props=T,this.context=L,this.refs=D,this.updater=I||w}var q=Y.prototype=new B;q.constructor=Y,M(q,_.prototype),q.isPureReactComponent=!0;var W=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function Q(T,L,I,J,it,yt){return I=yt.ref,{$$typeof:a,type:T,key:L,ref:I!==void 0?I:null,props:yt}}function G(T,L){return Q(T.type,L,void 0,void 0,void 0,T.props)}function lt(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function ct(T){var L={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(I){return L[I]})}var jt=/\/+/g;function Gt(T,L){return typeof T=="object"&&T!==null&&T.key!=null?ct(""+T.key):L.toString(36)}function Ne(){}function pe(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(Ne,Ne):(T.status="pending",T.then(function(L){T.status==="pending"&&(T.status="fulfilled",T.value=L)},function(L){T.status==="pending"&&(T.status="rejected",T.reason=L)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Zt(T,L,I,J,it){var yt=typeof T;(yt==="undefined"||yt==="boolean")&&(T=null);var ot=!1;if(T===null)ot=!0;else switch(yt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(T.$$typeof){case a:case i:ot=!0;break;case y:return ot=T._init,Zt(ot(T._payload),L,I,J,it)}}if(ot)return it=it(T),ot=J===""?"."+Gt(T,0):J,W(it)?(I="",ot!=null&&(I=ot.replace(jt,"$&/")+"/"),Zt(it,L,I,"",function(Be){return Be})):it!=null&&(lt(it)&&(it=G(it,I+(it.key==null||T&&T.key===it.key?"":(""+it.key).replace(jt,"$&/")+"/")+ot)),L.push(it)),1;ot=0;var Ut=J===""?".":J+":";if(W(T))for(var Mt=0;Mt<T.length;Mt++)J=T[Mt],yt=Ut+Gt(J,Mt),ot+=Zt(J,L,I,yt,it);else if(Mt=x(T),typeof Mt=="function")for(T=Mt.call(T),Mt=0;!(J=T.next()).done;)J=J.value,yt=Ut+Gt(J,Mt++),ot+=Zt(J,L,I,yt,it);else if(yt==="object"){if(typeof T.then=="function")return Zt(pe(T),L,I,J,it);throw L=String(T),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ot}function k(T,L,I){if(T==null)return T;var J=[],it=0;return Zt(T,J,"","",function(yt){return L.call(I,yt,it++)}),J}function Z(T){if(T._status===-1){var L=T._result;L=L(),L.then(function(I){(T._status===0||T._status===-1)&&(T._status=1,T._result=I)},function(I){(T._status===0||T._status===-1)&&(T._status=2,T._result=I)}),T._status===-1&&(T._status=0,T._result=L)}if(T._status===1)return T._result.default;throw T._result}var $=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function pt(){}return bt.Children={map:k,forEach:function(T,L,I){k(T,function(){L.apply(this,arguments)},I)},count:function(T){var L=0;return k(T,function(){L++}),L},toArray:function(T){return k(T,function(L){return L})||[]},only:function(T){if(!lt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},bt.Component=_,bt.Fragment=l,bt.Profiler=c,bt.PureComponent=Y,bt.StrictMode=s,bt.Suspense=p,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,bt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return P.H.useMemoCache(T)}},bt.cache=function(T){return function(){return T.apply(null,arguments)}},bt.cloneElement=function(T,L,I){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var J=M({},T.props),it=T.key,yt=void 0;if(L!=null)for(ot in L.ref!==void 0&&(yt=void 0),L.key!==void 0&&(it=""+L.key),L)!F.call(L,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&L.ref===void 0||(J[ot]=L[ot]);var ot=arguments.length-2;if(ot===1)J.children=I;else if(1<ot){for(var Ut=Array(ot),Mt=0;Mt<ot;Mt++)Ut[Mt]=arguments[Mt+2];J.children=Ut}return Q(T.type,it,void 0,void 0,yt,J)},bt.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},bt.createElement=function(T,L,I){var J,it={},yt=null;if(L!=null)for(J in L.key!==void 0&&(yt=""+L.key),L)F.call(L,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(it[J]=L[J]);var ot=arguments.length-2;if(ot===1)it.children=I;else if(1<ot){for(var Ut=Array(ot),Mt=0;Mt<ot;Mt++)Ut[Mt]=arguments[Mt+2];it.children=Ut}if(T&&T.defaultProps)for(J in ot=T.defaultProps,ot)it[J]===void 0&&(it[J]=ot[J]);return Q(T,yt,void 0,void 0,null,it)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(T){return{$$typeof:g,render:T}},bt.isValidElement=lt,bt.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:Z}},bt.memo=function(T,L){return{$$typeof:h,type:T,compare:L===void 0?null:L}},bt.startTransition=function(T){var L=P.T,I={};P.T=I;try{var J=T(),it=P.S;it!==null&&it(I,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(pt,$)}catch(yt){$(yt)}finally{P.T=L}},bt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},bt.use=function(T){return P.H.use(T)},bt.useActionState=function(T,L,I){return P.H.useActionState(T,L,I)},bt.useCallback=function(T,L){return P.H.useCallback(T,L)},bt.useContext=function(T){return P.H.useContext(T)},bt.useDebugValue=function(){},bt.useDeferredValue=function(T,L){return P.H.useDeferredValue(T,L)},bt.useEffect=function(T,L,I){var J=P.H;if(typeof I=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(T,L)},bt.useId=function(){return P.H.useId()},bt.useImperativeHandle=function(T,L,I){return P.H.useImperativeHandle(T,L,I)},bt.useInsertionEffect=function(T,L){return P.H.useInsertionEffect(T,L)},bt.useLayoutEffect=function(T,L){return P.H.useLayoutEffect(T,L)},bt.useMemo=function(T,L){return P.H.useMemo(T,L)},bt.useOptimistic=function(T,L){return P.H.useOptimistic(T,L)},bt.useReducer=function(T,L,I){return P.H.useReducer(T,L,I)},bt.useRef=function(T){return P.H.useRef(T)},bt.useState=function(T){return P.H.useState(T)},bt.useSyncExternalStore=function(T,L,I){return P.H.useSyncExternalStore(T,L,I)},bt.useTransition=function(){return P.H.useTransition()},bt.version="19.1.0",bt}var Rm;function yf(){return Rm||(Rm=1,wc.exports=Fv()),wc.exports}var X=yf();const Vt=Zv(X);var Rc={exports:{}},dl={},Cc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function Jv(){return Cm||(Cm=1,function(a){function i(k,Z){var $=k.length;k.push(Z);t:for(;0<$;){var pt=$-1>>>1,T=k[pt];if(0<c(T,Z))k[pt]=Z,k[$]=T,$=pt;else break t}}function l(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var Z=k[0],$=k.pop();if($!==Z){k[0]=$;t:for(var pt=0,T=k.length,L=T>>>1;pt<L;){var I=2*(pt+1)-1,J=k[I],it=I+1,yt=k[it];if(0>c(J,$))it<T&&0>c(yt,J)?(k[pt]=yt,k[it]=$,pt=it):(k[pt]=J,k[I]=$,pt=I);else if(it<T&&0>c(yt,$))k[pt]=yt,k[it]=$,pt=it;else break t}}return Z}function c(k,Z){var $=k.sortIndex-Z.sortIndex;return $!==0?$:k.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var p=[],h=[],y=1,v=null,x=3,w=!1,M=!1,D=!1,_=!1,B=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function W(k){for(var Z=l(h);Z!==null;){if(Z.callback===null)s(h);else if(Z.startTime<=k)s(h),Z.sortIndex=Z.expirationTime,i(p,Z);else break;Z=l(h)}}function P(k){if(D=!1,W(k),!M)if(l(p)!==null)M=!0,F||(F=!0,Gt());else{var Z=l(h);Z!==null&&Zt(P,Z.startTime-k)}}var F=!1,Q=-1,G=5,lt=-1;function ct(){return _?!0:!(a.unstable_now()-lt<G)}function jt(){if(_=!1,F){var k=a.unstable_now();lt=k;var Z=!0;try{t:{M=!1,D&&(D=!1,Y(Q),Q=-1),w=!0;var $=x;try{e:{for(W(k),v=l(p);v!==null&&!(v.expirationTime>k&&ct());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,x=v.priorityLevel;var T=pt(v.expirationTime<=k);if(k=a.unstable_now(),typeof T=="function"){v.callback=T,W(k),Z=!0;break e}v===l(p)&&s(p),W(k)}else s(p);v=l(p)}if(v!==null)Z=!0;else{var L=l(h);L!==null&&Zt(P,L.startTime-k),Z=!1}}break t}finally{v=null,x=$,w=!1}Z=void 0}}finally{Z?Gt():F=!1}}}var Gt;if(typeof q=="function")Gt=function(){q(jt)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,pe=Ne.port2;Ne.port1.onmessage=jt,Gt=function(){pe.postMessage(null)}}else Gt=function(){B(jt,0)};function Zt(k,Z){Q=B(function(){k(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(k){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var $=x;x=Z;try{return k()}finally{x=$}},a.unstable_requestPaint=function(){_=!0},a.unstable_runWithPriority=function(k,Z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var $=x;x=k;try{return Z()}finally{x=$}},a.unstable_scheduleCallback=function(k,Z,$){var pt=a.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?pt+$:pt):$=pt,k){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=$+T,k={id:y++,callback:Z,priorityLevel:k,startTime:$,expirationTime:T,sortIndex:-1},$>pt?(k.sortIndex=$,i(h,k),l(p)===null&&k===l(h)&&(D?(Y(Q),Q=-1):D=!0,Zt(P,$-pt))):(k.sortIndex=T,i(p,k),M||w||(M=!0,F||(F=!0,Gt()))),k},a.unstable_shouldYield=ct,a.unstable_wrapCallback=function(k){var Z=x;return function(){var $=x;x=Z;try{return k.apply(this,arguments)}finally{x=$}}}}(zc)),zc}var zm;function Wv(){return zm||(zm=1,Cc.exports=Jv()),Cc.exports}var Nc={exports:{}},Xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function $v(){if(Nm)return Xe;Nm=1;var a=yf();function i(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,h,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:p,containerInfo:h,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xe.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return d(p,h,null,y)},Xe.flushSync=function(p){var h=f.T,y=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=h,s.p=y,s.d.f()}},Xe.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(p,h))},Xe.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Xe.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,v=g(y,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,w=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?s.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:w}):y==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:w,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Xe.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=g(h.as,h.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(p)},Xe.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,v=g(y,h.crossOrigin);s.d.L(p,y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Xe.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=g(h.as,h.crossOrigin);s.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(p)},Xe.requestFormReset=function(p){s.d.r(p)},Xe.unstable_batchedUpdates=function(p,h){return p(h)},Xe.useFormState=function(p,h,y){return f.H.useFormState(p,h,y)},Xe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Xe.version="19.1.0",Xe}var km;function Iv(){if(km)return Nc.exports;km=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Nc.exports=$v(),Nc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function t1(){if(_m)return dl;_m=1;var a=Wv(),i=yf(),l=Iv();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(s(188))}function p(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,o=e;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return g(r),t;if(u===o)return g(r),e;u=u.sibling}throw Error(s(188))}if(n.return!==o.return)n=r,o=u;else{for(var m=!1,b=r.child;b;){if(b===n){m=!0,n=r,o=u;break}if(b===o){m=!0,o=r,n=u;break}b=b.sibling}if(!m){for(b=u.child;b;){if(b===n){m=!0,n=u,o=r;break}if(b===o){m=!0,o=u,n=r;break}b=b.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),q=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),jt=Symbol.iterator;function Gt(t){return t===null||typeof t!="object"?null:(t=jt&&t[jt]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ne?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case _:return"Profiler";case D:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case q:return(t.displayName||"Context")+".Provider";case Y:return(t._context.displayName||"Context")+".Consumer";case W:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return e=t.displayName||null,e!==null?e:pe(t.type)||"Memo";case G:e=t._payload,t=t._init;try{return pe(t(e))}catch{}}return null}var Zt=Array.isArray,k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},pt=[],T=-1;function L(t){return{current:t}}function I(t){0>T||(t.current=pt[T],pt[T]=null,T--)}function J(t,e){T++,pt[T]=t.current,t.current=e}var it=L(null),yt=L(null),ot=L(null),Ut=L(null);function Mt(t,e){switch(J(ot,e),J(yt,t),J(it,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?tm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=tm(e),t=em(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}I(it),J(it,t)}function Be(){I(it),I(yt),I(ot)}function Nt(t){t.memoizedState!==null&&J(Ut,t);var e=it.current,n=em(e,t.type);e!==n&&(J(yt,t),J(it,n))}function It(t){yt.current===t&&(I(it),I(yt)),Ut.current===t&&(I(Ut),ll._currentValue=$)}var Qt=Object.prototype.hasOwnProperty,Ct=a.unstable_scheduleCallback,et=a.unstable_cancelCallback,St=a.unstable_shouldYield,Et=a.unstable_requestPaint,Dt=a.unstable_now,ge=a.unstable_getCurrentPriorityLevel,ie=a.unstable_ImmediatePriority,Ze=a.unstable_UserBlockingPriority,xe=a.unstable_NormalPriority,on=a.unstable_LowPriority,zn=a.unstable_IdlePriority,Nn=a.log,Yn=a.unstable_setDisableYieldValue,ke=null,Se=null;function mn(t){if(typeof Nn=="function"&&Yn(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(ke,t)}catch{}}var Le=Math.clz32?Math.clz32:_l,As=Math.log,kl=Math.LN2;function _l(t){return t>>>=0,t===0?32:31-(As(t)/kl|0)|0}var mi=256,pi=4194304;function kn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function wt(t,e,n){var o=t.pendingLanes;if(o===0)return 0;var r=0,u=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~u,o!==0?r=kn(o):(m&=b,m!==0?r=kn(m):n||(n=b&~t,n!==0&&(r=kn(n))))):(b=o&~u,b!==0?r=kn(b):m!==0?r=kn(m):n||(n=o&~t,n!==0&&(r=kn(n)))),r===0?0:e!==0&&e!==r&&(e&u)===0&&(u=r&-r,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:r}function He(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Te(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ya(){var t=mi;return mi<<=1,(mi&4194048)===0&&(mi=256),t}function Je(){var t=pi;return pi<<=1,(pi&62914560)===0&&(pi=4194304),t}function po(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jl(t,e,n,o,r,u){var m=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,C=t.hiddenUpdates;for(n=m&~n;0<n;){var j=31-Le(n),H=1<<j;b[j]=0,S[j]=-1;var z=C[j];if(z!==null)for(C[j]=null,j=0;j<z.length;j++){var N=z[j];N!==null&&(N.lane&=-536870913)}n&=~H}o!==0&&Vl(t,o,0),u!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=u&~(m&~e))}function Vl(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-Le(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|n&4194090}function Ul(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-Le(n),r=1<<o;r&e|t[o]&e&&(t[o]|=e),n&=~r}}function go(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Bl(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:xm(t.type))}function Os(t,e){var n=Z.p;try{return Z.p=t,e()}finally{Z.p=n}}var _n=Math.random().toString(36).slice(2),Me="__reactFiber$"+_n,qe="__reactProps$"+_n,ua="__reactContainer$"+_n,gi="__reactEvents$"+_n,Ll="__reactListeners$"+_n,Hl="__reactHandles$"+_n,yi="__reactResources$"+_n,Qe="__reactMarker$"+_n;function Pe(t){delete t[Me],delete t[qe],delete t[gi],delete t[Ll],delete t[Hl]}function Ee(t){var e=t[Me];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ua]||n[Me]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=om(t);t!==null;){if(n=t[Me])return n;t=om(t)}return e}t=n,n=t.parentNode}return null}function ca(t){if(t=t[Me]||t[ua]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function fa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function da(t){var e=t[yi];return e||(e=t[yi]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ce(t){t[Qe]=!0}var ql=new Set,Pl={};function Gn(t,e){ha(t,e),ha(t+"Capture",e)}function ha(t,e){for(Pl[t]=e,t=0;t<e.length;t++)ql.add(e[t])}var Ds=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yl={},Xl={};function Gl(t){return Qt.call(Xl,t)?!0:Qt.call(Yl,t)?!1:Ds.test(t)?Xl[t]=!0:(Yl[t]=!0,!1)}function V(t,e,n){if(Gl(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function K(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function st(t,e,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+o)}}var gt,kt;function dt(t){if(gt===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gt=e&&e[1]||"",kt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gt+t+kt}var Tt=!1;function Bt(t,e){if(!t||Tt)return"";Tt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(N){var z=N}Reflect.construct(t,[],H)}else{try{H.call()}catch(N){z=N}t.call(H.prototype)}}else{try{throw Error()}catch(N){z=N}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(N){if(N&&z&&typeof N.stack=="string")return[N.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),m=u[0],b=u[1];if(m&&b){var S=m.split(`
`),C=b.split(`
`);for(r=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;r<C.length&&!C[r].includes("DetermineComponentFrameRoot");)r++;if(o===S.length||r===C.length)for(o=S.length-1,r=C.length-1;1<=o&&0<=r&&S[o]!==C[r];)r--;for(;1<=o&&0<=r;o--,r--)if(S[o]!==C[r]){if(o!==1||r!==1)do if(o--,r--,0>r||S[o]!==C[r]){var j=`
`+S[o].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=o&&0<=r);break}}}finally{Tt=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?dt(n):""}function te(t){switch(t.tag){case 26:case 27:case 5:return dt(t.type);case 16:return dt("Lazy");case 13:return dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return Bt(t.type,!1);case 11:return Bt(t.type.render,!1);case 1:return Bt(t.type,!0);case 31:return dt("Activity");default:return""}}function we(t){try{var e="";do e+=te(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ma(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bo(t){var e=ma(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(m){o=""+m,u.call(this,m)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(m){o=""+m},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=bo(t))}function bi(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=ma(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function rt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wt=/[\n"\\]/g;function Ft(t){return t.replace(Wt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function We(t,e,n,o,r,u,m,b){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),e!=null?m==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+fe(e)):t.value!==""+fe(e)&&(t.value=""+fe(e)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),e!=null?Ga(t,m,fe(e)):n!=null?Ga(t,m,fe(n)):o!=null&&t.removeAttribute("value"),r==null&&u!=null&&(t.defaultChecked=!!u),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+fe(b):t.removeAttribute("name")}function pa(t,e,n,o,r,u,m,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+fe(n):"",e=e!=null?""+fe(e):n,b||e===t.value||(t.value=e),t.defaultValue=e}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m)}function Ga(t,e,n){e==="number"&&rt(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function vi(t,e,n,o){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&o&&(t[n].defaultSelected=!0)}else{for(n=""+fe(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $f(t,e,n){if(e!=null&&(e=""+fe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+fe(n):""}function If(t,e,n,o){if(e==null){if(o!=null){if(n!=null)throw Error(s(92));if(Zt(o)){if(1<o.length)throw Error(s(93));o=o[0]}n=o}n==null&&(n=""),e=n}n=fe(e),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o)}function xi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function td(t,e,n){var o=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,n):typeof n!="number"||n===0||Yy.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function ed(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var r in e)o=e[r],e.hasOwnProperty(r)&&n[r]!==o&&td(t,r,o)}else for(var u in e)e.hasOwnProperty(u)&&td(t,u,e[u])}function Ms(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zl(t){return Gy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Es=null;function ws(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Si=null,Ti=null;function nd(t){var e=ca(t);if(e&&(t=e.stateNode)){var n=t[qe]||null;t:switch(t=e.stateNode,e.type){case"input":if(We(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ft(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var r=o[qe]||null;if(!r)throw Error(s(90));We(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)o=n[e],o.form===t.form&&bi(o)}break t;case"textarea":$f(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&vi(t,!!n.multiple,e,!1)}}}var Rs=!1;function ad(t,e,n){if(Rs)return t(e,n);Rs=!0;try{var o=t(e);return o}finally{if(Rs=!1,(Si!==null||Ti!==null)&&(zr(),Si&&(e=Si,t=Ti,Ti=Si=null,nd(e),t)))for(e=0;e<t.length;e++)nd(t[e])}}function vo(t,e){var n=t.stateNode;if(n===null)return null;var o=n[qe]||null;if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cs=!1;if(Zn)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Cs=!1}var ga=null,zs=null,Ql=null;function id(){if(Ql)return Ql;var t,e=zs,n=e.length,o,r="value"in ga?ga.value:ga.textContent,u=r.length;for(t=0;t<n&&e[t]===r[t];t++);var m=n-t;for(o=1;o<=m&&e[n-o]===r[u-o];o++);return Ql=r.slice(t,1<o?1-o:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function od(){return!1}function $e(t){function e(n,o,r,u,m){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(n=t[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Fl:od,this.isPropagationStopped=od,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),e}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=$e(Za),So=y({},Za,{view:0,detail:0}),Zy=$e(So),Ns,ks,To,Wl=y({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(Ns=t.screenX-To.screenX,ks=t.screenY-To.screenY):ks=Ns=0,To=t),Ns)},movementY:function(t){return"movementY"in t?t.movementY:ks}}),ld=$e(Wl),Qy=y({},Wl,{dataTransfer:0}),Ky=$e(Qy),Fy=y({},So,{relatedTarget:0}),_s=$e(Fy),Jy=y({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Wy=$e(Jy),$y=y({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Iy=$e($y),tb=y({},Za,{data:0}),rd=$e(tb),eb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ab={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ib(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ab[t])?!!e[t]:!1}function js(){return ib}var ob=y({},So,{key:function(t){if(t.key){var e=eb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lb=$e(ob),rb=y({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=$e(rb),sb=y({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),ub=$e(sb),cb=y({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),fb=$e(cb),db=y({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hb=$e(db),mb=y({},Za,{newState:0,oldState:0}),pb=$e(mb),gb=[9,13,27,32],Vs=Zn&&"CompositionEvent"in window,Ao=null;Zn&&"documentMode"in document&&(Ao=document.documentMode);var yb=Zn&&"TextEvent"in window&&!Ao,ud=Zn&&(!Vs||Ao&&8<Ao&&11>=Ao),cd=" ",fd=!1;function dd(t,e){switch(t){case"keyup":return gb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function bb(t,e){switch(t){case"compositionend":return hd(e);case"keypress":return e.which!==32?null:(fd=!0,cd);case"textInput":return t=e.data,t===cd&&fd?null:t;default:return null}}function vb(t,e){if(Ai)return t==="compositionend"||!Vs&&dd(t,e)?(t=id(),Ql=zs=ga=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ud&&e.locale!=="ko"?null:e.data;default:return null}}var xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xb[t.type]:e==="textarea"}function pd(t,e,n,o){Si?Ti?Ti.push(o):Ti=[o]:Si=o,e=Ur(e,"onChange"),0<e.length&&(n=new Jl("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var Oo=null,Do=null;function Sb(t){F0(t,0)}function $l(t){var e=fa(t);if(bi(e))return t}function gd(t,e){if(t==="change")return e}var yd=!1;if(Zn){var Us;if(Zn){var Bs="oninput"in document;if(!Bs){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Bs=typeof bd.oninput=="function"}Us=Bs}else Us=!1;yd=Us&&(!document.documentMode||9<document.documentMode)}function vd(){Oo&&(Oo.detachEvent("onpropertychange",xd),Do=Oo=null)}function xd(t){if(t.propertyName==="value"&&$l(Do)){var e=[];pd(e,Do,t,ws(t)),ad(Sb,e)}}function Tb(t,e,n){t==="focusin"?(vd(),Oo=e,Do=n,Oo.attachEvent("onpropertychange",xd)):t==="focusout"&&vd()}function Ab(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(Do)}function Ob(t,e){if(t==="click")return $l(e)}function Db(t,e){if(t==="input"||t==="change")return $l(e)}function Mb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:Mb;function Mo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Qt.call(e,r)||!ln(t[r],e[r]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,e){var n=Sd(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Sd(n)}}function Ad(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ad(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Od(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=rt(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rt(t.document)}return e}function Ls(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Eb=Zn&&"documentMode"in document&&11>=document.documentMode,Oi=null,Hs=null,Eo=null,qs=!1;function Dd(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qs||Oi==null||Oi!==rt(o)||(o=Oi,"selectionStart"in o&&Ls(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Eo&&Mo(Eo,o)||(Eo=o,o=Ur(Hs,"onSelect"),0<o.length&&(e=new Jl("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=Oi)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},Ps={},Md={};Zn&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Ka(t){if(Ps[t])return Ps[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Md)return Ps[t]=e[n];return t}var Ed=Ka("animationend"),wd=Ka("animationiteration"),Rd=Ka("animationstart"),wb=Ka("transitionrun"),Rb=Ka("transitionstart"),Cb=Ka("transitioncancel"),Cd=Ka("transitionend"),zd=new Map,Ys="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ys.push("scrollEnd");function Dn(t,e){zd.set(t,e),Gn(e,[t])}var Nd=new WeakMap;function pn(t,e){if(typeof t=="object"&&t!==null){var n=Nd.get(t);return n!==void 0?n:(e={value:t,source:e,stack:we(e)},Nd.set(t,e),e)}return{value:t,source:e,stack:we(e)}}var gn=[],Mi=0,Xs=0;function Il(){for(var t=Mi,e=Xs=Mi=0;e<t;){var n=gn[e];gn[e++]=null;var o=gn[e];gn[e++]=null;var r=gn[e];gn[e++]=null;var u=gn[e];if(gn[e++]=null,o!==null&&r!==null){var m=o.pending;m===null?r.next=r:(r.next=m.next,m.next=r),o.pending=r}u!==0&&kd(n,r,u)}}function tr(t,e,n,o){gn[Mi++]=t,gn[Mi++]=e,gn[Mi++]=n,gn[Mi++]=o,Xs|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Gs(t,e,n,o){return tr(t,e,n,o),er(t)}function Ei(t,e){return tr(t,null,null,e),er(t)}function kd(t,e,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var r=!1,u=t.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(r=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,r&&e!==null&&(r=31-Le(n),t=u.hiddenUpdates,o=t[r],o===null?t[r]=[e]:o.push(e),e.lane=n|536870912),u):null}function er(t){if(50<$o)throw $o=0,Wu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var wi={};function zb(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,o){return new zb(t,e,n,o)}function Zs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qn(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function _d(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function nr(t,e,n,o,r,u){var m=0;if(o=t,typeof t=="function")Zs(t)&&(m=1);else if(typeof t=="string")m=kv(t,n,it.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case lt:return t=rn(31,n,e,r),t.elementType=lt,t.lanes=u,t;case M:return Fa(n.children,r,u,e);case D:m=8,r|=24;break;case _:return t=rn(12,n,e,r|2),t.elementType=_,t.lanes=u,t;case P:return t=rn(13,n,e,r),t.elementType=P,t.lanes=u,t;case F:return t=rn(19,n,e,r),t.elementType=F,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:case q:m=10;break t;case Y:m=9;break t;case W:m=11;break t;case Q:m=14;break t;case G:m=16,o=null;break t}m=29,n=Error(s(130,t===null?"null":typeof t,"")),o=null}return e=rn(m,n,e,r),e.elementType=t,e.type=o,e.lanes=u,e}function Fa(t,e,n,o){return t=rn(7,t,o,e),t.lanes=n,t}function Qs(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function Ks(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ri=[],Ci=0,ar=null,ir=0,yn=[],bn=0,Ja=null,Kn=1,Fn="";function Wa(t,e){Ri[Ci++]=ir,Ri[Ci++]=ar,ar=t,ir=e}function jd(t,e,n){yn[bn++]=Kn,yn[bn++]=Fn,yn[bn++]=Ja,Ja=t;var o=Kn;t=Fn;var r=32-Le(o)-1;o&=~(1<<r),n+=1;var u=32-Le(e)+r;if(30<u){var m=r-r%5;u=(o&(1<<m)-1).toString(32),o>>=m,r-=m,Kn=1<<32-Le(e)+r|n<<r|o,Fn=u+t}else Kn=1<<u|n<<r|o,Fn=t}function Fs(t){t.return!==null&&(Wa(t,1),jd(t,1,0))}function Js(t){for(;t===ar;)ar=Ri[--Ci],Ri[Ci]=null,ir=Ri[--Ci],Ri[Ci]=null;for(;t===Ja;)Ja=yn[--bn],yn[bn]=null,Fn=yn[--bn],yn[bn]=null,Kn=yn[--bn],yn[bn]=null}var Ke=null,re=null,_t=!1,$a=null,jn=!1,Ws=Error(s(519));function Ia(t){var e=Error(s(418,""));throw Co(pn(e,t)),Ws}function Vd(t){var e=t.stateNode,n=t.type,o=t.memoizedProps;switch(e[Me]=t,e[qe]=o,n){case"dialog":Ot("cancel",e),Ot("close",e);break;case"iframe":case"object":case"embed":Ot("load",e);break;case"video":case"audio":for(n=0;n<tl.length;n++)Ot(tl[n],e);break;case"source":Ot("error",e);break;case"img":case"image":case"link":Ot("error",e),Ot("load",e);break;case"details":Ot("toggle",e);break;case"input":Ot("invalid",e),pa(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Xa(e);break;case"select":Ot("invalid",e);break;case"textarea":Ot("invalid",e),If(e,o.value,o.defaultValue,o.children),Xa(e)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||o.suppressHydrationWarning===!0||I0(e.textContent,n)?(o.popover!=null&&(Ot("beforetoggle",e),Ot("toggle",e)),o.onScroll!=null&&Ot("scroll",e),o.onScrollEnd!=null&&Ot("scrollend",e),o.onClick!=null&&(e.onclick=Br),e=!0):e=!1,e||Ia(t)}function Ud(t){for(Ke=t.return;Ke;)switch(Ke.tag){case 5:case 13:jn=!1;return;case 27:case 3:jn=!0;return;default:Ke=Ke.return}}function wo(t){if(t!==Ke)return!1;if(!_t)return Ud(t),_t=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||hc(t.type,t.memoizedProps)),n=!n),n&&re&&Ia(t),Ud(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){re=En(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}re=null}}else e===27?(e=re,Na(t.type)?(t=yc,yc=null,re=t):re=e):re=Ke?En(t.stateNode.nextSibling):null;return!0}function Ro(){re=Ke=null,_t=!1}function Bd(){var t=$a;return t!==null&&(en===null?en=t:en.push.apply(en,t),$a=null),t}function Co(t){$a===null?$a=[t]:$a.push(t)}var $s=L(null),ti=null,Jn=null;function ya(t,e,n){J($s,e._currentValue),e._currentValue=n}function Wn(t){t._currentValue=$s.current,I($s)}function Is(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function tu(t,e,n,o){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var u=r.dependencies;if(u!==null){var m=r.child;u=u.firstContext;t:for(;u!==null;){var b=u;u=r;for(var S=0;S<e.length;S++)if(b.context===e[S]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),Is(u.return,n,t),o||(m=null);break t}u=b.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(s(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),Is(m,n,t),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===t){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function zo(t,e,n,o){t=null;for(var r=e,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=r.type;ln(r.pendingProps.value,m.value)||(t!==null?t.push(b):t=[b])}}else if(r===Ut.current){if(m=r.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(ll):t=[ll])}r=r.return}t!==null&&tu(e,t,n,o),e.flags|=262144}function or(t){for(t=t.firstContext;t!==null;){if(!ln(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ei(t){ti=t,Jn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ye(t){return Ld(ti,t)}function lr(t,e){return ti===null&&ei(t),Ld(t,e)}function Ld(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Jn===null){if(t===null)throw Error(s(308));Jn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Jn=Jn.next=e;return n}var Nb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},kb=a.unstable_scheduleCallback,_b=a.unstable_NormalPriority,Ae={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new Nb,data:new Map,refCount:0}}function No(t){t.refCount--,t.refCount===0&&kb(_b,function(){t.controller.abort()})}var ko=null,nu=0,zi=0,Ni=null;function jb(t,e){if(ko===null){var n=ko=[];nu=0,zi=ic(),Ni={status:"pending",value:void 0,then:function(o){n.push(o)}}}return nu++,e.then(Hd,Hd),e}function Hd(){if(--nu===0&&ko!==null){Ni!==null&&(Ni.status="fulfilled");var t=ko;ko=null,zi=0,Ni=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Vb(t,e){var n=[],o={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(o.status="rejected",o.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),o}var qd=k.S;k.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&jb(t,e),qd!==null&&qd(t,e)};var ni=L(null);function au(){var t=ni.current;return t!==null?t:Jt.pooledCache}function rr(t,e){e===null?J(ni,ni.current):J(ni,e.pool)}function Pd(){var t=au();return t===null?null:{parent:Ae._currentValue,pool:t}}var _o=Error(s(460)),Yd=Error(s(474)),sr=Error(s(542)),iu={then:function(){}};function Xd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ur(){}function Gd(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ur,ur),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Qd(t),t;default:if(typeof e.status=="string")e.then(ur,ur);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=o}},function(o){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Qd(t),t}throw jo=e,_o}}var jo=null;function Zd(){if(jo===null)throw Error(s(459));var t=jo;return jo=null,t}function Qd(t){if(t===_o||t===sr)throw Error(s(483))}var ba=!1;function ou(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,e=er(t),kd(t,null,n),e}return tr(t,o,e,n),er(t)}function Vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Ul(t,n)}}function ru(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?r=u=e:u=u.next=e}else r=u=e;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var su=!1;function Uo(){if(su){var t=Ni;if(t!==null)throw t}}function Bo(t,e,n,o){su=!1;var r=t.updateQueue;ba=!1;var u=r.firstBaseUpdate,m=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var S=b,C=S.next;S.next=null,m===null?u=C:m.next=C,m=S;var j=t.alternate;j!==null&&(j=j.updateQueue,b=j.lastBaseUpdate,b!==m&&(b===null?j.firstBaseUpdate=C:b.next=C,j.lastBaseUpdate=S))}if(u!==null){var H=r.baseState;m=0,j=C=S=null,b=u;do{var z=b.lane&-536870913,N=z!==b.lane;if(N?(Rt&z)===z:(o&z)===z){z!==0&&z===zi&&(su=!0),j!==null&&(j=j.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ht=t,ut=b;z=e;var Xt=n;switch(ut.tag){case 1:if(ht=ut.payload,typeof ht=="function"){H=ht.call(Xt,H,z);break t}H=ht;break t;case 3:ht.flags=ht.flags&-65537|128;case 0:if(ht=ut.payload,z=typeof ht=="function"?ht.call(Xt,H,z):ht,z==null)break t;H=y({},H,z);break t;case 2:ba=!0}}z=b.callback,z!==null&&(t.flags|=64,N&&(t.flags|=8192),N=r.callbacks,N===null?r.callbacks=[z]:N.push(z))}else N={lane:z,tag:b.tag,payload:b.payload,callback:b.callback,next:null},j===null?(C=j=N,S=H):j=j.next=N,m|=z;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;N=b,b=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);j===null&&(S=H),r.baseState=S,r.firstBaseUpdate=C,r.lastBaseUpdate=j,u===null&&(r.shared.lanes=0),wa|=m,t.lanes=m,t.memoizedState=H}}function Kd(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Fd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Kd(n[t],e)}var ki=L(null),cr=L(0);function Jd(t,e){t=ia,J(cr,t),J(ki,e),ia=t|e.baseLanes}function uu(){J(cr,ia),J(ki,ki.current)}function cu(){ia=cr.current,I(ki),I(cr)}var Sa=0,vt=null,Pt=null,ye=null,fr=!1,_i=!1,ai=!1,dr=0,Lo=0,ji=null,Ub=0;function de(){throw Error(s(321))}function fu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function du(t,e,n,o,r,u){return Sa=u,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,k.H=t===null||t.memoizedState===null?kh:_h,ai=!1,u=n(o,r),ai=!1,_i&&(u=$d(e,n,o,r)),Wd(t),u}function Wd(t){k.H=br;var e=Pt!==null&&Pt.next!==null;if(Sa=0,ye=Pt=vt=null,fr=!1,Lo=0,ji=null,e)throw Error(s(300));t===null||Re||(t=t.dependencies,t!==null&&or(t)&&(Re=!0))}function $d(t,e,n,o){vt=t;var r=0;do{if(_i&&(ji=null),Lo=0,_i=!1,25<=r)throw Error(s(301));if(r+=1,ye=Pt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}k.H=Xb,u=e(n,o)}while(_i);return u}function Bb(){var t=k.H,e=t.useState()[0];return e=typeof e.then=="function"?Ho(e):e,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(vt.flags|=1024),e}function hu(){var t=dr!==0;return dr=0,t}function mu(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function pu(t){if(fr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}fr=!1}Sa=0,ye=Pt=vt=null,_i=!1,Lo=dr=0,ji=null}function Ie(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?vt.memoizedState=ye=t:ye=ye.next=t,ye}function be(){if(Pt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=ye===null?vt.memoizedState:ye.next;if(e!==null)ye=e,Pt=t;else{if(t===null)throw vt.alternate===null?Error(s(467)):Error(s(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},ye===null?vt.memoizedState=ye=t:ye=ye.next=t}return ye}function gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(t){var e=Lo;return Lo+=1,ji===null&&(ji=[]),t=Gd(ji,t,e),e=vt,(ye===null?e.memoizedState:ye.next)===null&&(e=e.alternate,k.H=e===null||e.memoizedState===null?kh:_h),t}function hr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ho(t);if(t.$$typeof===q)return Ye(t)}throw Error(s(438,String(t)))}function yu(t){var e=null,n=vt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=gu(),vt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),o=0;o<t;o++)n[o]=ct;return e.index++,n}function $n(t,e){return typeof e=="function"?e(t):e}function mr(t){var e=be();return bu(e,Pt,t)}function bu(t,e,n){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var r=t.baseQueue,u=o.pending;if(u!==null){if(r!==null){var m=r.next;r.next=u.next,u.next=m}e.baseQueue=r=u,o.pending=null}if(u=t.baseState,r===null)t.memoizedState=u;else{e=r.next;var b=m=null,S=null,C=e,j=!1;do{var H=C.lane&-536870913;if(H!==C.lane?(Rt&H)===H:(Sa&H)===H){var z=C.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),H===zi&&(j=!0);else if((Sa&z)===z){C=C.next,z===zi&&(j=!0);continue}else H={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(b=S=H,m=u):S=S.next=H,vt.lanes|=z,wa|=z;H=C.action,ai&&n(u,H),u=C.hasEagerState?C.eagerState:n(u,H)}else z={lane:H,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(b=S=z,m=u):S=S.next=z,vt.lanes|=H,wa|=H;C=C.next}while(C!==null&&C!==e);if(S===null?m=u:S.next=b,!ln(u,t.memoizedState)&&(Re=!0,j&&(n=Ni,n!==null)))throw n;t.memoizedState=u,t.baseState=m,t.baseQueue=S,o.lastRenderedState=u}return r===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function vu(t){var e=be(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var o=n.dispatch,r=n.pending,u=e.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do u=t(u,m.action),m=m.next;while(m!==r);ln(u,e.memoizedState)||(Re=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,o]}function Id(t,e,n){var o=vt,r=be(),u=_t;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var m=!ln((Pt||r).memoizedState,n);m&&(r.memoizedState=n,Re=!0),r=r.queue;var b=nh.bind(null,o,r,t);if(qo(2048,8,b,[t]),r.getSnapshot!==e||m||ye!==null&&ye.memoizedState.tag&1){if(o.flags|=2048,Vi(9,pr(),eh.bind(null,o,r,n,e),null),Jt===null)throw Error(s(349));u||(Sa&124)!==0||th(o,e,n)}return n}function th(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e=gu(),vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eh(t,e,n,o){e.value=n,e.getSnapshot=o,ah(e)&&ih(t)}function nh(t,e,n){return n(function(){ah(e)&&ih(t)})}function ah(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function ih(t){var e=Ei(t,2);e!==null&&dn(e,t,2)}function xu(t){var e=Ie();if(typeof t=="function"){var n=t;if(t=n(),ai){mn(!0);try{n()}finally{mn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:t},e}function oh(t,e,n,o){return t.baseState=n,bu(t,Pt,typeof o=="function"?o:$n)}function Lb(t,e,n,o,r){if(yr(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};k.T!==null?n(!0):u.isTransition=!1,o(u),n=e.pending,n===null?(u.next=e.pending=u,lh(e,u)):(u.next=n.next,e.pending=n.next=u)}}function lh(t,e){var n=e.action,o=e.payload,r=t.state;if(e.isTransition){var u=k.T,m={};k.T=m;try{var b=n(r,o),S=k.S;S!==null&&S(m,b),rh(t,e,b)}catch(C){Su(t,e,C)}finally{k.T=u}}else try{u=n(r,o),rh(t,e,u)}catch(C){Su(t,e,C)}}function rh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){sh(t,e,o)},function(o){return Su(t,e,o)}):sh(t,e,n)}function sh(t,e,n){e.status="fulfilled",e.value=n,uh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,lh(t,n)))}function Su(t,e,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=n,uh(e),e=e.next;while(e!==o)}t.action=null}function uh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ch(t,e){return e}function fh(t,e){if(_t){var n=Jt.formState;if(n!==null){t:{var o=vt;if(_t){if(re){e:{for(var r=re,u=jn;r.nodeType!==8;){if(!u){r=null;break e}if(r=En(r.nextSibling),r===null){r=null;break e}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){re=En(r.nextSibling),o=r.data==="F!";break t}}Ia(o)}o=!1}o&&(e=n[0])}}return n=Ie(),n.memoizedState=n.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ch,lastRenderedState:e},n.queue=o,n=Ch.bind(null,vt,o),o.dispatch=n,o=xu(!1),u=Mu.bind(null,vt,!1,o.queue),o=Ie(),r={state:e,dispatch:null,action:t,pending:null},o.queue=r,n=Lb.bind(null,vt,r,u,n),r.dispatch=n,o.memoizedState=t,[e,n,!1]}function dh(t){var e=be();return hh(e,Pt,t)}function hh(t,e,n){if(e=bu(t,e,ch)[0],t=mr($n)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Ho(e)}catch(m){throw m===_o?sr:m}else o=e;e=be();var r=e.queue,u=r.dispatch;return n!==e.memoizedState&&(vt.flags|=2048,Vi(9,pr(),Hb.bind(null,r,n),null)),[o,u,t]}function Hb(t,e){t.action=e}function mh(t){var e=be(),n=Pt;if(n!==null)return hh(e,n,t);be(),e=e.memoizedState,n=be();var o=n.queue.dispatch;return n.memoizedState=t,[e,o,!1]}function Vi(t,e,n,o){return t={tag:t,create:n,deps:o,inst:e,next:null},e=vt.updateQueue,e===null&&(e=gu(),vt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t),t}function pr(){return{destroy:void 0,resource:void 0}}function ph(){return be().memoizedState}function gr(t,e,n,o){var r=Ie();o=o===void 0?null:o,vt.flags|=t,r.memoizedState=Vi(1|e,pr(),n,o)}function qo(t,e,n,o){var r=be();o=o===void 0?null:o;var u=r.memoizedState.inst;Pt!==null&&o!==null&&fu(o,Pt.memoizedState.deps)?r.memoizedState=Vi(e,u,n,o):(vt.flags|=t,r.memoizedState=Vi(1|e,u,n,o))}function gh(t,e){gr(8390656,8,t,e)}function yh(t,e){qo(2048,8,t,e)}function bh(t,e){return qo(4,2,t,e)}function vh(t,e){return qo(4,4,t,e)}function xh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sh(t,e,n){n=n!=null?n.concat([t]):null,qo(4,4,xh.bind(null,e,t),n)}function Tu(){}function Th(t,e){var n=be();e=e===void 0?null:e;var o=n.memoizedState;return e!==null&&fu(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function Ah(t,e){var n=be();e=e===void 0?null:e;var o=n.memoizedState;if(e!==null&&fu(e,o[1]))return o[0];if(o=t(),ai){mn(!0);try{t()}finally{mn(!1)}}return n.memoizedState=[o,e],o}function Au(t,e,n){return n===void 0||(Sa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=M0(),vt.lanes|=t,wa|=t,n)}function Oh(t,e,n,o){return ln(n,e)?n:ki.current!==null?(t=Au(t,n,o),ln(t,e)||(Re=!0),t):(Sa&42)===0?(Re=!0,t.memoizedState=n):(t=M0(),vt.lanes|=t,wa|=t,e)}function Dh(t,e,n,o,r){var u=Z.p;Z.p=u!==0&&8>u?u:8;var m=k.T,b={};k.T=b,Mu(t,!1,e,n);try{var S=r(),C=k.S;if(C!==null&&C(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var j=Vb(S,o);Po(t,e,j,fn(t))}else Po(t,e,o,fn(t))}catch(H){Po(t,e,{then:function(){},status:"rejected",reason:H},fn())}finally{Z.p=u,k.T=m}}function qb(){}function Ou(t,e,n,o){if(t.tag!==5)throw Error(s(476));var r=Mh(t).queue;Dh(t,r,e,$,n===null?qb:function(){return Eh(t),n(o)})}function Mh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:$},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Eh(t){var e=Mh(t).next.queue;Po(t,e,{},fn())}function Du(){return Ye(ll)}function wh(){return be().memoizedState}function Rh(){return be().memoizedState}function Pb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=fn();t=va(n);var o=xa(e,t,n);o!==null&&(dn(o,e,n),Vo(o,e,n)),e={cache:eu()},t.payload=e;return}e=e.return}}function Yb(t,e,n){var o=fn();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},yr(t)?zh(e,n):(n=Gs(t,e,n,o),n!==null&&(dn(n,t,o),Nh(n,e,o)))}function Ch(t,e,n){var o=fn();Po(t,e,n,o)}function Po(t,e,n,o){var r={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(yr(t))zh(e,r);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var m=e.lastRenderedState,b=u(m,n);if(r.hasEagerState=!0,r.eagerState=b,ln(b,m))return tr(t,e,r,0),Jt===null&&Il(),!1}catch{}finally{}if(n=Gs(t,e,r,o),n!==null)return dn(n,t,o),Nh(n,e,o),!0}return!1}function Mu(t,e,n,o){if(o={lane:2,revertLane:ic(),action:o,hasEagerState:!1,eagerState:null,next:null},yr(t)){if(e)throw Error(s(479))}else e=Gs(t,n,o,2),e!==null&&dn(e,t,2)}function yr(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function zh(t,e){_i=fr=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nh(t,e,n){if((n&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,Ul(t,n)}}var br={readContext:Ye,use:hr,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de},kh={readContext:Ye,use:hr,useCallback:function(t,e){return Ie().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:gh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,gr(4194308,4,xh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gr(4194308,4,t,e)},useInsertionEffect:function(t,e){gr(4,2,t,e)},useMemo:function(t,e){var n=Ie();e=e===void 0?null:e;var o=t();if(ai){mn(!0);try{t()}finally{mn(!1)}}return n.memoizedState=[o,e],o},useReducer:function(t,e,n){var o=Ie();if(n!==void 0){var r=n(e);if(ai){mn(!0);try{n(e)}finally{mn(!1)}}}else r=e;return o.memoizedState=o.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},o.queue=t,t=t.dispatch=Yb.bind(null,vt,t),[o.memoizedState,t]},useRef:function(t){var e=Ie();return t={current:t},e.memoizedState=t},useState:function(t){t=xu(t);var e=t.queue,n=Ch.bind(null,vt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Tu,useDeferredValue:function(t,e){var n=Ie();return Au(n,t,e)},useTransition:function(){var t=xu(!1);return t=Dh.bind(null,vt,t.queue,!0,!1),Ie().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var o=vt,r=Ie();if(_t){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Jt===null)throw Error(s(349));(Rt&124)!==0||th(o,e,n)}r.memoizedState=n;var u={value:n,getSnapshot:e};return r.queue=u,gh(nh.bind(null,o,u,t),[t]),o.flags|=2048,Vi(9,pr(),eh.bind(null,o,u,n,e),null),n},useId:function(){var t=Ie(),e=Jt.identifierPrefix;if(_t){var n=Fn,o=Kn;n=(o&~(1<<32-Le(o)-1)).toString(32)+n,e="«"+e+"R"+n,n=dr++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Ub++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Du,useFormState:fh,useActionState:fh,useOptimistic:function(t){var e=Ie();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Mu.bind(null,vt,!0,n),n.dispatch=e,[t,e]},useMemoCache:yu,useCacheRefresh:function(){return Ie().memoizedState=Pb.bind(null,vt)}},_h={readContext:Ye,use:hr,useCallback:Th,useContext:Ye,useEffect:yh,useImperativeHandle:Sh,useInsertionEffect:bh,useLayoutEffect:vh,useMemo:Ah,useReducer:mr,useRef:ph,useState:function(){return mr($n)},useDebugValue:Tu,useDeferredValue:function(t,e){var n=be();return Oh(n,Pt.memoizedState,t,e)},useTransition:function(){var t=mr($n)[0],e=be().memoizedState;return[typeof t=="boolean"?t:Ho(t),e]},useSyncExternalStore:Id,useId:wh,useHostTransitionStatus:Du,useFormState:dh,useActionState:dh,useOptimistic:function(t,e){var n=be();return oh(n,Pt,t,e)},useMemoCache:yu,useCacheRefresh:Rh},Xb={readContext:Ye,use:hr,useCallback:Th,useContext:Ye,useEffect:yh,useImperativeHandle:Sh,useInsertionEffect:bh,useLayoutEffect:vh,useMemo:Ah,useReducer:vu,useRef:ph,useState:function(){return vu($n)},useDebugValue:Tu,useDeferredValue:function(t,e){var n=be();return Pt===null?Au(n,t,e):Oh(n,Pt.memoizedState,t,e)},useTransition:function(){var t=vu($n)[0],e=be().memoizedState;return[typeof t=="boolean"?t:Ho(t),e]},useSyncExternalStore:Id,useId:wh,useHostTransitionStatus:Du,useFormState:mh,useActionState:mh,useOptimistic:function(t,e){var n=be();return Pt!==null?oh(n,Pt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:yu,useCacheRefresh:Rh},Ui=null,Yo=0;function vr(t){var e=Yo;return Yo+=1,Ui===null&&(Ui=[]),Gd(Ui,t,e)}function Xo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function xr(t,e){throw e.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function jh(t){var e=t._init;return e(t._payload)}function Vh(t){function e(E,A){if(t){var R=E.deletions;R===null?(E.deletions=[A],E.flags|=16):R.push(A)}}function n(E,A){if(!t)return null;for(;A!==null;)e(E,A),A=A.sibling;return null}function o(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function r(E,A){return E=Qn(E,A),E.index=0,E.sibling=null,E}function u(E,A,R){return E.index=R,t?(R=E.alternate,R!==null?(R=R.index,R<A?(E.flags|=67108866,A):R):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function m(E){return t&&E.alternate===null&&(E.flags|=67108866),E}function b(E,A,R,U){return A===null||A.tag!==6?(A=Qs(R,E.mode,U),A.return=E,A):(A=r(A,R),A.return=E,A)}function S(E,A,R,U){var tt=R.type;return tt===M?j(E,A,R.props.children,U,R.key):A!==null&&(A.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===G&&jh(tt)===A.type)?(A=r(A,R.props),Xo(A,R),A.return=E,A):(A=nr(R.type,R.key,R.props,null,E.mode,U),Xo(A,R),A.return=E,A)}function C(E,A,R,U){return A===null||A.tag!==4||A.stateNode.containerInfo!==R.containerInfo||A.stateNode.implementation!==R.implementation?(A=Ks(R,E.mode,U),A.return=E,A):(A=r(A,R.children||[]),A.return=E,A)}function j(E,A,R,U,tt){return A===null||A.tag!==7?(A=Fa(R,E.mode,U,tt),A.return=E,A):(A=r(A,R),A.return=E,A)}function H(E,A,R){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Qs(""+A,E.mode,R),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return R=nr(A.type,A.key,A.props,null,E.mode,R),Xo(R,A),R.return=E,R;case w:return A=Ks(A,E.mode,R),A.return=E,A;case G:var U=A._init;return A=U(A._payload),H(E,A,R)}if(Zt(A)||Gt(A))return A=Fa(A,E.mode,R,null),A.return=E,A;if(typeof A.then=="function")return H(E,vr(A),R);if(A.$$typeof===q)return H(E,lr(E,A),R);xr(E,A)}return null}function z(E,A,R,U){var tt=A!==null?A.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return tt!==null?null:b(E,A,""+R,U);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return R.key===tt?S(E,A,R,U):null;case w:return R.key===tt?C(E,A,R,U):null;case G:return tt=R._init,R=tt(R._payload),z(E,A,R,U)}if(Zt(R)||Gt(R))return tt!==null?null:j(E,A,R,U,null);if(typeof R.then=="function")return z(E,A,vr(R),U);if(R.$$typeof===q)return z(E,A,lr(E,R),U);xr(E,R)}return null}function N(E,A,R,U,tt){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return E=E.get(R)||null,b(A,E,""+U,tt);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case x:return E=E.get(U.key===null?R:U.key)||null,S(A,E,U,tt);case w:return E=E.get(U.key===null?R:U.key)||null,C(A,E,U,tt);case G:var xt=U._init;return U=xt(U._payload),N(E,A,R,U,tt)}if(Zt(U)||Gt(U))return E=E.get(R)||null,j(A,E,U,tt,null);if(typeof U.then=="function")return N(E,A,R,vr(U),tt);if(U.$$typeof===q)return N(E,A,R,lr(A,U),tt);xr(A,U)}return null}function ht(E,A,R,U){for(var tt=null,xt=null,nt=A,ft=A=0,ze=null;nt!==null&&ft<R.length;ft++){nt.index>ft?(ze=nt,nt=null):ze=nt.sibling;var zt=z(E,nt,R[ft],U);if(zt===null){nt===null&&(nt=ze);break}t&&nt&&zt.alternate===null&&e(E,nt),A=u(zt,A,ft),xt===null?tt=zt:xt.sibling=zt,xt=zt,nt=ze}if(ft===R.length)return n(E,nt),_t&&Wa(E,ft),tt;if(nt===null){for(;ft<R.length;ft++)nt=H(E,R[ft],U),nt!==null&&(A=u(nt,A,ft),xt===null?tt=nt:xt.sibling=nt,xt=nt);return _t&&Wa(E,ft),tt}for(nt=o(nt);ft<R.length;ft++)ze=N(nt,E,ft,R[ft],U),ze!==null&&(t&&ze.alternate!==null&&nt.delete(ze.key===null?ft:ze.key),A=u(ze,A,ft),xt===null?tt=ze:xt.sibling=ze,xt=ze);return t&&nt.forEach(function(Ua){return e(E,Ua)}),_t&&Wa(E,ft),tt}function ut(E,A,R,U){if(R==null)throw Error(s(151));for(var tt=null,xt=null,nt=A,ft=A=0,ze=null,zt=R.next();nt!==null&&!zt.done;ft++,zt=R.next()){nt.index>ft?(ze=nt,nt=null):ze=nt.sibling;var Ua=z(E,nt,zt.value,U);if(Ua===null){nt===null&&(nt=ze);break}t&&nt&&Ua.alternate===null&&e(E,nt),A=u(Ua,A,ft),xt===null?tt=Ua:xt.sibling=Ua,xt=Ua,nt=ze}if(zt.done)return n(E,nt),_t&&Wa(E,ft),tt;if(nt===null){for(;!zt.done;ft++,zt=R.next())zt=H(E,zt.value,U),zt!==null&&(A=u(zt,A,ft),xt===null?tt=zt:xt.sibling=zt,xt=zt);return _t&&Wa(E,ft),tt}for(nt=o(nt);!zt.done;ft++,zt=R.next())zt=N(nt,E,ft,zt.value,U),zt!==null&&(t&&zt.alternate!==null&&nt.delete(zt.key===null?ft:zt.key),A=u(zt,A,ft),xt===null?tt=zt:xt.sibling=zt,xt=zt);return t&&nt.forEach(function(Gv){return e(E,Gv)}),_t&&Wa(E,ft),tt}function Xt(E,A,R,U){if(typeof R=="object"&&R!==null&&R.type===M&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case x:t:{for(var tt=R.key;A!==null;){if(A.key===tt){if(tt=R.type,tt===M){if(A.tag===7){n(E,A.sibling),U=r(A,R.props.children),U.return=E,E=U;break t}}else if(A.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===G&&jh(tt)===A.type){n(E,A.sibling),U=r(A,R.props),Xo(U,R),U.return=E,E=U;break t}n(E,A);break}else e(E,A);A=A.sibling}R.type===M?(U=Fa(R.props.children,E.mode,U,R.key),U.return=E,E=U):(U=nr(R.type,R.key,R.props,null,E.mode,U),Xo(U,R),U.return=E,E=U)}return m(E);case w:t:{for(tt=R.key;A!==null;){if(A.key===tt)if(A.tag===4&&A.stateNode.containerInfo===R.containerInfo&&A.stateNode.implementation===R.implementation){n(E,A.sibling),U=r(A,R.children||[]),U.return=E,E=U;break t}else{n(E,A);break}else e(E,A);A=A.sibling}U=Ks(R,E.mode,U),U.return=E,E=U}return m(E);case G:return tt=R._init,R=tt(R._payload),Xt(E,A,R,U)}if(Zt(R))return ht(E,A,R,U);if(Gt(R)){if(tt=Gt(R),typeof tt!="function")throw Error(s(150));return R=tt.call(R),ut(E,A,R,U)}if(typeof R.then=="function")return Xt(E,A,vr(R),U);if(R.$$typeof===q)return Xt(E,A,lr(E,R),U);xr(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,A!==null&&A.tag===6?(n(E,A.sibling),U=r(A,R),U.return=E,E=U):(n(E,A),U=Qs(R,E.mode,U),U.return=E,E=U),m(E)):n(E,A)}return function(E,A,R,U){try{Yo=0;var tt=Xt(E,A,R,U);return Ui=null,tt}catch(nt){if(nt===_o||nt===sr)throw nt;var xt=rn(29,nt,null,E.mode);return xt.lanes=U,xt.return=E,xt}finally{}}}var Bi=Vh(!0),Uh=Vh(!1),vn=L(null),Vn=null;function Ta(t){var e=t.alternate;J(Oe,Oe.current&1),J(vn,t),Vn===null&&(e===null||ki.current!==null||e.memoizedState!==null)&&(Vn=t)}function Bh(t){if(t.tag===22){if(J(Oe,Oe.current),J(vn,t),Vn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Vn=t)}}else Aa()}function Aa(){J(Oe,Oe.current),J(vn,vn.current)}function In(t){I(vn),Vn===t&&(Vn=null),I(Oe)}var Oe=L(0);function Sr(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||gc(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Eu(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:y({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={enqueueSetState:function(t,e,n){t=t._reactInternals;var o=fn(),r=va(o);r.payload=e,n!=null&&(r.callback=n),e=xa(t,r,o),e!==null&&(dn(e,t,o),Vo(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=fn(),r=va(o);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=xa(t,r,o),e!==null&&(dn(e,t,o),Vo(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),o=va(n);o.tag=2,e!=null&&(o.callback=e),e=xa(t,o,n),e!==null&&(dn(e,t,n),Vo(e,t,n))}};function Lh(t,e,n,o,r,u,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,m):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,o)||!Mo(r,u):!0}function Hh(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function ii(t,e){var n=e;if("ref"in e){n={};for(var o in e)o!=="ref"&&(n[o]=e[o])}if(t=t.defaultProps){n===e&&(n=y({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}var Tr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function qh(t){Tr(t)}function Ph(t){console.error(t)}function Yh(t){Tr(t)}function Ar(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Xh(t,e,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ru(t,e,n){return n=va(n),n.tag=3,n.payload={element:null},n.callback=function(){Ar(t,e)},n}function Gh(t){return t=va(t),t.tag=3,t}function Zh(t,e,n,o){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=o.value;t.payload=function(){return r(u)},t.callback=function(){Xh(e,n,o)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Xh(e,n,o),typeof r!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Gb(t,e,n,o,r){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=n.alternate,e!==null&&zo(e,n,r,!0),n=vn.current,n!==null){switch(n.tag){case 13:return Vn===null?Iu():n.alternate===null&&se===0&&(se=3),n.flags&=-257,n.flags|=65536,n.lanes=r,o===iu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([o]):e.add(o),ec(t,o,r)),!1;case 22:return n.flags|=65536,o===iu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([o]):n.add(o)),ec(t,o,r)),!1}throw Error(s(435,n.tag))}return ec(t,o,r),Iu(),!1}if(_t)return e=vn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,o!==Ws&&(t=Error(s(422),{cause:o}),Co(pn(t,n)))):(o!==Ws&&(e=Error(s(423),{cause:o}),Co(pn(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,o=pn(o,n),r=Ru(t.stateNode,o,r),ru(t,r),se!==4&&(se=2)),!1;var u=Error(s(520),{cause:o});if(u=pn(u,n),Wo===null?Wo=[u]:Wo.push(u),se!==4&&(se=2),e===null)return!0;o=pn(o,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=Ru(n.stateNode,o,t),ru(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ra===null||!Ra.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Gh(r),Zh(r,t,n,o),ru(n,r),!1}n=n.return}while(n!==null);return!1}var Qh=Error(s(461)),Re=!1;function _e(t,e,n,o){e.child=t===null?Uh(e,null,n,o):Bi(e,t.child,n,o)}function Kh(t,e,n,o,r){n=n.render;var u=e.ref;if("ref"in o){var m={};for(var b in o)b!=="ref"&&(m[b]=o[b])}else m=o;return ei(e),o=du(t,e,n,m,u,r),b=hu(),t!==null&&!Re?(mu(t,e,r),ta(t,e,r)):(_t&&b&&Fs(e),e.flags|=1,_e(t,e,o,r),e.child)}function Fh(t,e,n,o,r){if(t===null){var u=n.type;return typeof u=="function"&&!Zs(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Jh(t,e,u,o,r)):(t=nr(n.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Uu(t,r)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(m,o)&&t.ref===e.ref)return ta(t,e,r)}return e.flags|=1,t=Qn(u,o),t.ref=e.ref,t.return=e,e.child=t}function Jh(t,e,n,o,r){if(t!==null){var u=t.memoizedProps;if(Mo(u,o)&&t.ref===e.ref)if(Re=!1,e.pendingProps=o=u,Uu(t,r))(t.flags&131072)!==0&&(Re=!0);else return e.lanes=t.lanes,ta(t,e,r)}return Cu(t,e,n,o,r)}function Wh(t,e,n){var o=e.pendingProps,r=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((e.flags&128)!==0){if(o=u!==null?u.baseLanes|n:n,t!==null){for(r=e.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;e.childLanes=u&~o}else e.childLanes=0,e.child=null;return $h(t,e,o,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&rr(e,u!==null?u.cachePool:null),u!==null?Jd(e,u):uu(),Bh(e);else return e.lanes=e.childLanes=536870912,$h(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(rr(e,u.cachePool),Jd(e,u),Aa(),e.memoizedState=null):(t!==null&&rr(e,null),uu(),Aa());return _e(t,e,r,n),e.child}function $h(t,e,n,o){var r=au();return r=r===null?null:{parent:Ae._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&rr(e,null),uu(),Bh(e),t!==null&&zo(t,e,o,!0),null}function Or(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Cu(t,e,n,o,r){return ei(e),n=du(t,e,n,o,void 0,r),o=hu(),t!==null&&!Re?(mu(t,e,r),ta(t,e,r)):(_t&&o&&Fs(e),e.flags|=1,_e(t,e,n,r),e.child)}function Ih(t,e,n,o,r,u){return ei(e),e.updateQueue=null,n=$d(e,o,n,r),Wd(t),o=hu(),t!==null&&!Re?(mu(t,e,u),ta(t,e,u)):(_t&&o&&Fs(e),e.flags|=1,_e(t,e,n,u),e.child)}function t0(t,e,n,o,r){if(ei(e),e.stateNode===null){var u=wi,m=n.contextType;typeof m=="object"&&m!==null&&(u=Ye(m)),u=new n(o,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=wu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=o,u.state=e.memoizedState,u.refs={},ou(e),m=n.contextType,u.context=typeof m=="object"&&m!==null?Ye(m):wi,u.state=e.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Eu(e,n,m,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&wu.enqueueReplaceState(u,u.state,null),Bo(e,o,u,r),Uo(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){u=e.stateNode;var b=e.memoizedProps,S=ii(n,b);u.props=S;var C=u.context,j=n.contextType;m=wi,typeof j=="object"&&j!==null&&(m=Ye(j));var H=n.getDerivedStateFromProps;j=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||C!==m)&&Hh(e,u,o,m),ba=!1;var z=e.memoizedState;u.state=z,Bo(e,o,u,r),Uo(),C=e.memoizedState,b||z!==C||ba?(typeof H=="function"&&(Eu(e,n,H,o),C=e.memoizedState),(S=ba||Lh(e,n,S,o,z,C,m))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=C),u.props=o,u.state=C,u.context=m,o=S):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{u=e.stateNode,lu(t,e),m=e.memoizedProps,j=ii(n,m),u.props=j,H=e.pendingProps,z=u.context,C=n.contextType,S=wi,typeof C=="object"&&C!==null&&(S=Ye(C)),b=n.getDerivedStateFromProps,(C=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==H||z!==S)&&Hh(e,u,o,S),ba=!1,z=e.memoizedState,u.state=z,Bo(e,o,u,r),Uo();var N=e.memoizedState;m!==H||z!==N||ba||t!==null&&t.dependencies!==null&&or(t.dependencies)?(typeof b=="function"&&(Eu(e,n,b,o),N=e.memoizedState),(j=ba||Lh(e,n,j,o,z,N,S)||t!==null&&t.dependencies!==null&&or(t.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,N,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,N,S)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=N),u.props=o,u.state=N,u.context=S,o=j):(typeof u.componentDidUpdate!="function"||m===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),o=!1)}return u=o,Or(t,e),o=(e.flags&128)!==0,u||o?(u=e.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,r),e.child=Bi(e,null,n,r)):_e(t,e,n,r),e.memoizedState=u.state,t=e.child):t=ta(t,e,r),t}function e0(t,e,n,o){return Ro(),e.flags|=256,_e(t,e,n,o),e.child}var zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nu(t){return{baseLanes:t,cachePool:Pd()}}function ku(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=xn),t}function n0(t,e,n){var o=e.pendingProps,r=!1,u=(e.flags&128)!==0,m;if((m=u)||(m=t!==null&&t.memoizedState===null?!1:(Oe.current&2)!==0),m&&(r=!0,e.flags&=-129),m=(e.flags&32)!==0,e.flags&=-33,t===null){if(_t){if(r?Ta(e):Aa(),_t){var b=re,S;if(S=b){t:{for(S=b,b=jn;S.nodeType!==8;){if(!b){b=null;break t}if(S=En(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(e.memoizedState={dehydrated:b,treeContext:Ja!==null?{id:Kn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},S=rn(18,null,null,0),S.stateNode=b,S.return=e,e.child=S,Ke=e,re=null,S=!0):S=!1}S||Ia(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return gc(b)?e.lanes=32:e.lanes=536870912,null;In(e)}return b=o.children,o=o.fallback,r?(Aa(),r=e.mode,b=Dr({mode:"hidden",children:b},r),o=Fa(o,r,n,null),b.return=e,o.return=e,b.sibling=o,e.child=b,r=e.child,r.memoizedState=Nu(n),r.childLanes=ku(t,m,n),e.memoizedState=zu,o):(Ta(e),_u(e,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(u)e.flags&256?(Ta(e),e.flags&=-257,e=ju(t,e,n)):e.memoizedState!==null?(Aa(),e.child=t.child,e.flags|=128,e=null):(Aa(),r=o.fallback,b=e.mode,o=Dr({mode:"visible",children:o.children},b),r=Fa(r,b,n,null),r.flags|=2,o.return=e,r.return=e,o.sibling=r,e.child=o,Bi(e,t.child,null,n),o=e.child,o.memoizedState=Nu(n),o.childLanes=ku(t,m,n),e.memoizedState=zu,e=r);else if(Ta(e),gc(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var C=m.dgst;m=C,o=Error(s(419)),o.stack="",o.digest=m,Co({value:o,source:null,stack:null}),e=ju(t,e,n)}else if(Re||zo(t,e,n,!1),m=(n&t.childLanes)!==0,Re||m){if(m=Jt,m!==null&&(o=n&-n,o=(o&42)!==0?1:go(o),o=(o&(m.suspendedLanes|n))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,Ei(t,o),dn(m,t,o),Qh;b.data==="$?"||Iu(),e=ju(t,e,n)}else b.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,re=En(b.nextSibling),Ke=e,_t=!0,$a=null,jn=!1,t!==null&&(yn[bn++]=Kn,yn[bn++]=Fn,yn[bn++]=Ja,Kn=t.id,Fn=t.overflow,Ja=e),e=_u(e,o.children),e.flags|=4096);return e}return r?(Aa(),r=o.fallback,b=e.mode,S=t.child,C=S.sibling,o=Qn(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,C!==null?r=Qn(C,r):(r=Fa(r,b,n,null),r.flags|=2),r.return=e,o.return=e,o.sibling=r,e.child=o,o=r,r=e.child,b=t.child.memoizedState,b===null?b=Nu(n):(S=b.cachePool,S!==null?(C=Ae._currentValue,S=S.parent!==C?{parent:C,pool:C}:S):S=Pd(),b={baseLanes:b.baseLanes|n,cachePool:S}),r.memoizedState=b,r.childLanes=ku(t,m,n),e.memoizedState=zu,o):(Ta(e),n=t.child,t=n.sibling,n=Qn(n,{mode:"visible",children:o.children}),n.return=e,n.sibling=null,t!==null&&(m=e.deletions,m===null?(e.deletions=[t],e.flags|=16):m.push(t)),e.child=n,e.memoizedState=null,n)}function _u(t,e){return e=Dr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Dr(t,e){return t=rn(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ju(t,e,n){return Bi(e,t.child,null,n),t=_u(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function a0(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Is(t.return,e,n)}function Vu(t,e,n,o,r){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=r)}function i0(t,e,n){var o=e.pendingProps,r=o.revealOrder,u=o.tail;if(_e(t,e,o.children,n),o=Oe.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a0(t,n,e);else if(t.tag===19)a0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(J(Oe,o),r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Sr(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vu(e,!1,r,n,u);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Sr(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vu(e,!0,n,null,u);break;case"together":Vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ta(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wa|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(zo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=Qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&or(t)))}function Zb(t,e,n){switch(e.tag){case 3:Mt(e,e.stateNode.containerInfo),ya(e,Ae,t.memoizedState.cache),Ro();break;case 27:case 5:Nt(e);break;case 4:Mt(e,e.stateNode.containerInfo);break;case 10:ya(e,e.type,e.memoizedProps.value);break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(e),e.flags|=128,null):(n&e.child.childLanes)!==0?n0(t,e,n):(Ta(e),t=ta(t,e,n),t!==null?t.sibling:null);Ta(e);break;case 19:var r=(t.flags&128)!==0;if(o=(n&e.childLanes)!==0,o||(zo(t,e,n,!1),o=(n&e.childLanes)!==0),r){if(o)return i0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(Oe,Oe.current),o)break;return null;case 22:case 23:return e.lanes=0,Wh(t,e,n);case 24:ya(e,Ae,t.memoizedState.cache)}return ta(t,e,n)}function o0(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Re=!0;else{if(!Uu(t,n)&&(e.flags&128)===0)return Re=!1,Zb(t,e,n);Re=(t.flags&131072)!==0}else Re=!1,_t&&(e.flags&1048576)!==0&&jd(e,ir,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var o=e.elementType,r=o._init;if(o=r(o._payload),e.type=o,typeof o=="function")Zs(o)?(t=ii(o,t),e.tag=1,e=t0(null,e,o,t,n)):(e.tag=0,e=Cu(null,e,o,t,n));else{if(o!=null){if(r=o.$$typeof,r===W){e.tag=11,e=Kh(null,e,o,t,n);break t}else if(r===Q){e.tag=14,e=Fh(null,e,o,t,n);break t}}throw e=pe(o)||o,Error(s(306,e,""))}}return e;case 0:return Cu(t,e,e.type,e.pendingProps,n);case 1:return o=e.type,r=ii(o,e.pendingProps),t0(t,e,o,r,n);case 3:t:{if(Mt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));o=e.pendingProps;var u=e.memoizedState;r=u.element,lu(t,e),Bo(e,o,null,n);var m=e.memoizedState;if(o=m.cache,ya(e,Ae,o),o!==u.cache&&tu(e,[Ae],n,!0),Uo(),o=m.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:m.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=e0(t,e,o,n);break t}else if(o!==r){r=pn(Error(s(424)),e),Co(r),e=e0(t,e,o,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(re=En(t.firstChild),Ke=e,_t=!0,$a=null,jn=!0,n=Uh(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ro(),o===r){e=ta(t,e,n);break t}_e(t,e,o,n)}e=e.child}return e;case 26:return Or(t,e),t===null?(n=um(e.type,null,e.pendingProps,null))?e.memoizedState=n:_t||(n=e.type,t=e.pendingProps,o=Lr(ot.current).createElement(n),o[Me]=e,o[qe]=t,Ve(o,n,t),ce(o),e.stateNode=o):e.memoizedState=um(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Nt(e),t===null&&_t&&(o=e.stateNode=lm(e.type,e.pendingProps,ot.current),Ke=e,jn=!0,r=re,Na(e.type)?(yc=r,re=En(o.firstChild)):re=r),_e(t,e,e.pendingProps.children,n),Or(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&_t&&((r=o=re)&&(o=xv(o,e.type,e.pendingProps,jn),o!==null?(e.stateNode=o,Ke=e,re=En(o.firstChild),jn=!1,r=!0):r=!1),r||Ia(e)),Nt(e),r=e.type,u=e.pendingProps,m=t!==null?t.memoizedProps:null,o=u.children,hc(r,u)?o=null:m!==null&&hc(r,m)&&(e.flags|=32),e.memoizedState!==null&&(r=du(t,e,Bb,null,null,n),ll._currentValue=r),Or(t,e),_e(t,e,o,n),e.child;case 6:return t===null&&_t&&((t=n=re)&&(n=Sv(n,e.pendingProps,jn),n!==null?(e.stateNode=n,Ke=e,re=null,t=!0):t=!1),t||Ia(e)),null;case 13:return n0(t,e,n);case 4:return Mt(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=Bi(e,null,o,n):_e(t,e,o,n),e.child;case 11:return Kh(t,e,e.type,e.pendingProps,n);case 7:return _e(t,e,e.pendingProps,n),e.child;case 8:return _e(t,e,e.pendingProps.children,n),e.child;case 12:return _e(t,e,e.pendingProps.children,n),e.child;case 10:return o=e.pendingProps,ya(e,e.type,o.value),_e(t,e,o.children,n),e.child;case 9:return r=e.type._context,o=e.pendingProps.children,ei(e),r=Ye(r),o=o(r),e.flags|=1,_e(t,e,o,n),e.child;case 14:return Fh(t,e,e.type,e.pendingProps,n);case 15:return Jh(t,e,e.type,e.pendingProps,n);case 19:return i0(t,e,n);case 31:return o=e.pendingProps,n=e.mode,o={mode:o.mode,children:o.children},t===null?(n=Dr(o,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Qn(t.child,o),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Wh(t,e,n);case 24:return ei(e),o=Ye(Ae),t===null?(r=au(),r===null&&(r=Jt,u=eu(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),e.memoizedState={parent:o,cache:r},ou(e),ya(e,Ae,r)):((t.lanes&n)!==0&&(lu(t,e),Bo(e,null,null,n),Uo()),r=t.memoizedState,u=e.memoizedState,r.parent!==o?(r={parent:o,cache:o},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),ya(e,Ae,o)):(o=u.cache,ya(e,Ae,o),o!==r.cache&&tu(e,[Ae],n,!0))),_e(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function ea(t){t.flags|=4}function l0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mm(e)){if(e=vn.current,e!==null&&((Rt&4194048)===Rt?Vn!==null:(Rt&62914560)!==Rt&&(Rt&536870912)===0||e!==Vn))throw jo=iu,Yd;t.flags|=8192}}function Mr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Je():536870912,t.lanes|=e,Pi|=e)}function Go(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function Qb(t,e,n){var o=e.pendingProps;switch(Js(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(e),null;case 1:return oe(e),null;case 3:return n=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Wn(Ae),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(wo(e)?ea(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Bd())),oe(e),null;case 26:return n=e.memoizedState,t===null?(ea(e),n!==null?(oe(e),l0(e,n)):(oe(e),e.flags&=-16777217)):n?n!==t.memoizedState?(ea(e),oe(e),l0(e,n)):(oe(e),e.flags&=-16777217):(t.memoizedProps!==o&&ea(e),oe(e),e.flags&=-16777217),null;case 27:It(e),n=ot.current;var r=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ea(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return oe(e),null}t=it.current,wo(e)?Vd(e):(t=lm(r,o,n),e.stateNode=t,ea(e))}return oe(e),null;case 5:if(It(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&ea(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return oe(e),null}if(t=it.current,wo(e))Vd(e);else{switch(r=Lr(ot.current),t){case 1:t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=r.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?r.createElement("select",{is:o.is}):r.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?r.createElement(n,{is:o.is}):r.createElement(n)}}t[Me]=e,t[qe]=o;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=t;t:switch(Ve(t,n,o),n){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ea(e)}}return oe(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&ea(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(s(166));if(t=ot.current,wo(e)){if(t=e.stateNode,n=e.memoizedProps,o=null,r=Ke,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}t[Me]=e,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||I0(t.nodeValue,n)),t||Ia(e)}else t=Lr(t).createTextNode(o),t[Me]=e,e.stateNode=t}return oe(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=wo(e),o!==null&&o.dehydrated!==null){if(t===null){if(!r)throw Error(s(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[Me]=e}else Ro(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;oe(e),r=!1}else r=Bd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(In(e),e):(In(e),null)}if(In(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=o!==null,t=t!==null&&t.memoizedState!==null,n){o=e.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==r&&(o.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Mr(e,e.updateQueue),oe(e),null;case 4:return Be(),t===null&&sc(e.stateNode.containerInfo),oe(e),null;case 10:return Wn(e.type),oe(e),null;case 19:if(I(Oe),r=e.memoizedState,r===null)return oe(e),null;if(o=(e.flags&128)!==0,u=r.rendering,u===null)if(o)Go(r,!1);else{if(se!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Sr(t),u!==null){for(e.flags|=128,Go(r,!1),t=u.updateQueue,e.updateQueue=t,Mr(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)_d(n,t),n=n.sibling;return J(Oe,Oe.current&1|2),e.child}t=t.sibling}r.tail!==null&&Dt()>Rr&&(e.flags|=128,o=!0,Go(r,!1),e.lanes=4194304)}else{if(!o)if(t=Sr(u),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,Mr(e,t),Go(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!_t)return oe(e),null}else 2*Dt()-r.renderingStartTime>Rr&&n!==536870912&&(e.flags|=128,o=!0,Go(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Dt(),e.sibling=null,t=Oe.current,J(Oe,o?t&1|2:t&1),e):(oe(e),null);case 22:case 23:return In(e),cu(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(n&536870912)!==0&&(e.flags&128)===0&&(oe(e),e.subtreeFlags&6&&(e.flags|=8192)):oe(e),n=e.updateQueue,n!==null&&Mr(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==n&&(e.flags|=2048),t!==null&&I(ni),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Wn(Ae),oe(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Kb(t,e){switch(Js(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wn(Ae),Be(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return It(e),null;case 13:if(In(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return I(Oe),null;case 4:return Be(),null;case 10:return Wn(e.type),null;case 22:case 23:return In(e),cu(),t!==null&&I(ni),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Wn(Ae),null;case 25:return null;default:return null}}function r0(t,e){switch(Js(e),e.tag){case 3:Wn(Ae),Be();break;case 26:case 27:case 5:It(e);break;case 4:Be();break;case 13:In(e);break;case 19:I(Oe);break;case 10:Wn(e.type);break;case 22:case 23:In(e),cu(),t!==null&&I(ni);break;case 24:Wn(Ae)}}function Zo(t,e){try{var n=e.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var r=o.next;n=r;do{if((n.tag&t)===t){o=void 0;var u=n.create,m=n.inst;o=u(),m.destroy=o}n=n.next}while(n!==r)}}catch(b){Kt(e,e.return,b)}}function Oa(t,e,n){try{var o=e.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var u=r.next;o=u;do{if((o.tag&t)===t){var m=o.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,r=e;var S=n,C=b;try{C()}catch(j){Kt(r,S,j)}}}o=o.next}while(o!==u)}}catch(j){Kt(e,e.return,j)}}function s0(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Fd(e,n)}catch(o){Kt(t,t.return,o)}}}function u0(t,e,n){n.props=ii(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){Kt(t,e,o)}}function Qo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof n=="function"?t.refCleanup=n(o):n.current=o}}catch(r){Kt(t,e,r)}}function Un(t,e){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(r){Kt(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Kt(t,e,r)}else n.current=null}function c0(t){var e=t.type,n=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break t;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(r){Kt(t,t.return,r)}}function Bu(t,e,n){try{var o=t.stateNode;pv(o,t.type,n,e),o[qe]=e}catch(r){Kt(t,t.return,r)}}function f0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function Lu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Br));else if(o!==4&&(o===27&&Na(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Hu(t,e,n),t=t.sibling;t!==null;)Hu(t,e,n),t=t.sibling}function Er(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(o===27&&Na(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Er(t,e,n),t=t.sibling;t!==null;)Er(t,e,n),t=t.sibling}function d0(t){var e=t.stateNode,n=t.memoizedProps;try{for(var o=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);Ve(e,o,n),e[Me]=t,e[qe]=n}catch(u){Kt(t,t.return,u)}}var na=!1,he=!1,qu=!1,h0=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Fb(t,e){if(t=t.containerInfo,fc=Gr,t=Od(t),Ls(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var m=0,b=-1,S=-1,C=0,j=0,H=t,z=null;e:for(;;){for(var N;H!==n||r!==0&&H.nodeType!==3||(b=m+r),H!==u||o!==0&&H.nodeType!==3||(S=m+o),H.nodeType===3&&(m+=H.nodeValue.length),(N=H.firstChild)!==null;)z=H,H=N;for(;;){if(H===t)break e;if(z===n&&++C===r&&(b=m),z===u&&++j===o&&(S=m),(N=H.nextSibling)!==null)break;H=z,z=H.parentNode}H=N}n=b===-1||S===-1?null:{start:b,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(dc={focusedElem:t,selectionRange:n},Gr=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){switch(e=Ce,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,r=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var ht=ii(n.type,r,n.elementType===n.type);t=o.getSnapshotBeforeUpdate(ht,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(ut){Kt(n,n.return,ut)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)pc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}}function m0(t,e,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Da(t,n),o&4&&Zo(5,n);break;case 1:if(Da(t,n),o&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(m){Kt(n,n.return,m)}else{var r=ii(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Kt(n,n.return,m)}}o&64&&s0(n),o&512&&Qo(n,n.return);break;case 3:if(Da(t,n),o&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Fd(t,e)}catch(m){Kt(n,n.return,m)}}break;case 27:e===null&&o&4&&d0(n);case 26:case 5:Da(t,n),e===null&&o&4&&c0(n),o&512&&Qo(n,n.return);break;case 12:Da(t,n);break;case 13:Da(t,n),o&4&&y0(t,n),o&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=iv.bind(null,n),Tv(t,n))));break;case 22:if(o=n.memoizedState!==null||na,!o){e=e!==null&&e.memoizedState!==null||he,r=na;var u=he;na=o,(he=e)&&!u?Ma(t,n,(n.subtreeFlags&8772)!==0):Da(t,n),na=r,he=u}break;case 30:break;default:Da(t,n)}}function p0(t){var e=t.alternate;e!==null&&(t.alternate=null,p0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Pe(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ee=null,tn=!1;function aa(t,e,n){for(n=n.child;n!==null;)g0(t,e,n),n=n.sibling}function g0(t,e,n){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(ke,n)}catch{}switch(n.tag){case 26:he||Un(n,e),aa(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:he||Un(n,e);var o=ee,r=tn;Na(n.type)&&(ee=n.stateNode,tn=!1),aa(t,e,n),nl(n.stateNode),ee=o,tn=r;break;case 5:he||Un(n,e);case 6:if(o=ee,r=tn,ee=null,aa(t,e,n),ee=o,tn=r,ee!==null)if(tn)try{(ee.nodeType===9?ee.body:ee.nodeName==="HTML"?ee.ownerDocument.body:ee).removeChild(n.stateNode)}catch(u){Kt(n,e,u)}else try{ee.removeChild(n.stateNode)}catch(u){Kt(n,e,u)}break;case 18:ee!==null&&(tn?(t=ee,im(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),cl(t)):im(ee,n.stateNode));break;case 4:o=ee,r=tn,ee=n.stateNode.containerInfo,tn=!0,aa(t,e,n),ee=o,tn=r;break;case 0:case 11:case 14:case 15:he||Oa(2,n,e),he||Oa(4,n,e),aa(t,e,n);break;case 1:he||(Un(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"&&u0(n,e,o)),aa(t,e,n);break;case 21:aa(t,e,n);break;case 22:he=(o=he)||n.memoizedState!==null,aa(t,e,n),he=o;break;default:aa(t,e,n)}}function y0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{cl(t)}catch(n){Kt(e,e.return,n)}}function Jb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new h0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new h0),e;default:throw Error(s(435,t.tag))}}function Pu(t,e){var n=Jb(t);e.forEach(function(o){var r=ov.bind(null,t,o);n.has(o)||(n.add(o),o.then(r,r))})}function sn(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o],u=t,m=e,b=m;t:for(;b!==null;){switch(b.tag){case 27:if(Na(b.type)){ee=b.stateNode,tn=!1;break t}break;case 5:ee=b.stateNode,tn=!1;break t;case 3:case 4:ee=b.stateNode.containerInfo,tn=!0;break t}b=b.return}if(ee===null)throw Error(s(160));g0(u,m,r),ee=null,tn=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}var Mn=null;function b0(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:sn(e,t),un(t),o&4&&(Oa(3,t,t.return),Zo(3,t),Oa(5,t,t.return));break;case 1:sn(e,t),un(t),o&512&&(he||n===null||Un(n,n.return)),o&64&&na&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var r=Mn;if(sn(e,t),un(t),o&512&&(he||n===null||Un(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){t:{o=t.type,n=t.memoizedProps,r=r.ownerDocument||r;e:switch(o){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Qe]||u[Me]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(o),r.head.insertBefore(u,r.querySelector("head > title"))),Ve(u,o,n),u[Me]=t,ce(u),o=u;break t;case"link":var m=dm("link","href",r).get(o+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(u=m[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break e}}u=r.createElement(o),Ve(u,o,n),r.head.appendChild(u);break;case"meta":if(m=dm("meta","content",r).get(o+(n.content||""))){for(b=0;b<m.length;b++)if(u=m[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break e}}u=r.createElement(o),Ve(u,o,n),r.head.appendChild(u);break;default:throw Error(s(468,o))}u[Me]=t,ce(u),o=u}t.stateNode=o}else hm(r,t.type,t.stateNode);else t.stateNode=fm(r,o,t.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?hm(r,t.type,t.stateNode):fm(r,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Bu(t,t.memoizedProps,n.memoizedProps)}break;case 27:sn(e,t),un(t),o&512&&(he||n===null||Un(n,n.return)),n!==null&&o&4&&Bu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(sn(e,t),un(t),o&512&&(he||n===null||Un(n,n.return)),t.flags&32){r=t.stateNode;try{xi(r,"")}catch(N){Kt(t,t.return,N)}}o&4&&t.stateNode!=null&&(r=t.memoizedProps,Bu(t,r,n!==null?n.memoizedProps:r)),o&1024&&(qu=!0);break;case 6:if(sn(e,t),un(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(N){Kt(t,t.return,N)}}break;case 3:if(Pr=null,r=Mn,Mn=Hr(e.containerInfo),sn(e,t),Mn=r,un(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(e.containerInfo)}catch(N){Kt(t,t.return,N)}qu&&(qu=!1,v0(t));break;case 4:o=Mn,Mn=Hr(t.stateNode.containerInfo),sn(e,t),un(t),Mn=o;break;case 12:sn(e,t),un(t);break;case 13:sn(e,t),un(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ku=Dt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pu(t,o)));break;case 22:r=t.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,C=na,j=he;if(na=C||r,he=j||S,sn(e,t),he=j,na=C,un(t),o&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||S||na||he||oi(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){S=n=e;try{if(u=S.stateNode,r)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=S.stateNode;var H=S.memoizedProps.style,z=H!=null&&H.hasOwnProperty("display")?H.display:null;b.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(N){Kt(S,S.return,N)}}}else if(e.tag===6){if(n===null){S=e;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(N){Kt(S,S.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Pu(t,n))));break;case 19:sn(e,t),un(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Pu(t,o)));break;case 30:break;case 21:break;default:sn(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{for(var n,o=t.return;o!==null;){if(f0(o)){n=o;break}o=o.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,u=Lu(t);Er(t,u,r);break;case 5:var m=n.stateNode;n.flags&32&&(xi(m,""),n.flags&=-33);var b=Lu(t);Er(t,b,m);break;case 3:case 4:var S=n.stateNode.containerInfo,C=Lu(t);Hu(t,C,S);break;default:throw Error(s(161))}}catch(j){Kt(t,t.return,j)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;v0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Da(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)m0(t,e.alternate,e),e=e.sibling}function oi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Oa(4,e,e.return),oi(e);break;case 1:Un(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&u0(e,e.return,n),oi(e);break;case 27:nl(e.stateNode);case 26:case 5:Un(e,e.return),oi(e);break;case 22:e.memoizedState===null&&oi(e);break;case 30:oi(e);break;default:oi(e)}t=t.sibling}}function Ma(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,r=t,u=e,m=u.flags;switch(u.tag){case 0:case 11:case 15:Ma(r,u,n),Zo(4,u);break;case 1:if(Ma(r,u,n),o=u,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(C){Kt(o,o.return,C)}if(o=u,r=o.updateQueue,r!==null){var b=o.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)Kd(S[r],b)}catch(C){Kt(o,o.return,C)}}n&&m&64&&s0(u),Qo(u,u.return);break;case 27:d0(u);case 26:case 5:Ma(r,u,n),n&&o===null&&m&4&&c0(u),Qo(u,u.return);break;case 12:Ma(r,u,n);break;case 13:Ma(r,u,n),n&&m&4&&y0(r,u);break;case 22:u.memoizedState===null&&Ma(r,u,n),Qo(u,u.return);break;case 30:break;default:Ma(r,u,n)}e=e.sibling}}function Yu(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&No(n))}function Xu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&No(t))}function Bn(t,e,n,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)x0(t,e,n,o),e=e.sibling}function x0(t,e,n,o){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Bn(t,e,n,o),r&2048&&Zo(9,e);break;case 1:Bn(t,e,n,o);break;case 3:Bn(t,e,n,o),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&No(t)));break;case 12:if(r&2048){Bn(t,e,n,o),t=e.stateNode;try{var u=e.memoizedProps,m=u.id,b=u.onPostCommit;typeof b=="function"&&b(m,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Kt(e,e.return,S)}}else Bn(t,e,n,o);break;case 13:Bn(t,e,n,o);break;case 23:break;case 22:u=e.stateNode,m=e.alternate,e.memoizedState!==null?u._visibility&2?Bn(t,e,n,o):Ko(t,e):u._visibility&2?Bn(t,e,n,o):(u._visibility|=2,Li(t,e,n,o,(e.subtreeFlags&10256)!==0)),r&2048&&Yu(m,e);break;case 24:Bn(t,e,n,o),r&2048&&Xu(e.alternate,e);break;default:Bn(t,e,n,o)}}function Li(t,e,n,o,r){for(r=r&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,m=e,b=n,S=o,C=m.flags;switch(m.tag){case 0:case 11:case 15:Li(u,m,b,S,r),Zo(8,m);break;case 23:break;case 22:var j=m.stateNode;m.memoizedState!==null?j._visibility&2?Li(u,m,b,S,r):Ko(u,m):(j._visibility|=2,Li(u,m,b,S,r)),r&&C&2048&&Yu(m.alternate,m);break;case 24:Li(u,m,b,S,r),r&&C&2048&&Xu(m.alternate,m);break;default:Li(u,m,b,S,r)}e=e.sibling}}function Ko(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,o=e,r=o.flags;switch(o.tag){case 22:Ko(n,o),r&2048&&Yu(o.alternate,o);break;case 24:Ko(n,o),r&2048&&Xu(o.alternate,o);break;default:Ko(n,o)}e=e.sibling}}var Fo=8192;function Hi(t){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)S0(t),t=t.sibling}function S0(t){switch(t.tag){case 26:Hi(t),t.flags&Fo&&t.memoizedState!==null&&jv(Mn,t.memoizedState,t.memoizedProps);break;case 5:Hi(t);break;case 3:case 4:var e=Mn;Mn=Hr(t.stateNode.containerInfo),Hi(t),Mn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Fo,Fo=16777216,Hi(t),Fo=e):Hi(t));break;default:Hi(t)}}function T0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Jo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Ce=o,O0(o,t)}T0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)A0(t),t=t.sibling}function A0(t){switch(t.tag){case 0:case 11:case 15:Jo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:Jo(t);break;case 12:Jo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,wr(t)):Jo(t);break;default:Jo(t)}}function wr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Ce=o,O0(o,t)}T0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Oa(8,e,e.return),wr(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,wr(e));break;default:wr(e)}t=t.sibling}}function O0(t,e){for(;Ce!==null;){var n=Ce;switch(n.tag){case 0:case 11:case 15:Oa(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:No(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Ce=o;else t:for(n=t;Ce!==null;){o=Ce;var r=o.sibling,u=o.return;if(p0(o),o===n){Ce=null;break t}if(r!==null){r.return=u,Ce=r;break t}Ce=u}}}var Wb={getCacheForType:function(t){var e=Ye(Ae),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},$b=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Jt=null,At=null,Rt=0,Ht=0,cn=null,Ea=!1,qi=!1,Gu=!1,ia=0,se=0,wa=0,li=0,Zu=0,xn=0,Pi=0,Wo=null,en=null,Qu=!1,Ku=0,Rr=1/0,Cr=null,Ra=null,je=0,Ca=null,Yi=null,Xi=0,Fu=0,Ju=null,D0=null,$o=0,Wu=null;function fn(){if((Lt&2)!==0&&Rt!==0)return Rt&-Rt;if(k.T!==null){var t=zi;return t!==0?t:ic()}return Bl()}function M0(){xn===0&&(xn=(Rt&536870912)===0||_t?Ya():536870912);var t=vn.current;return t!==null&&(t.flags|=32),xn}function dn(t,e,n){(t===Jt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(Gi(t,0),za(t,Rt,xn,!1)),Xn(t,n),((Lt&2)===0||t!==Jt)&&(t===Jt&&((Lt&2)===0&&(li|=n),se===4&&za(t,Rt,xn,!1)),Ln(t))}function E0(t,e,n){if((Lt&6)!==0)throw Error(s(327));var o=!n&&(e&124)===0&&(e&t.expiredLanes)===0||He(t,e),r=o?ev(t,e):tc(t,e,!0),u=o;do{if(r===0){qi&&!o&&za(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!Ib(n)){r=tc(t,e,!1),u=!1;continue}if(r===2){if(u=e,t.errorRecoveryDisabledLanes&u)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){e=m;t:{var b=t;r=Wo;var S=b.current.memoizedState.isDehydrated;if(S&&(Gi(b,m).flags|=256),m=tc(b,m,!1),m!==2){if(Gu&&!S){b.errorRecoveryDisabledLanes|=u,li|=u,r=4;break t}u=en,en=r,u!==null&&(en===null?en=u:en.push.apply(en,u))}r=m}if(u=!1,r!==2)continue}}if(r===1){Gi(t,0),za(t,e,0,!0);break}t:{switch(o=t,u=r,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:za(o,e,xn,!Ea);break t;case 2:en=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(r=Ku+300-Dt(),10<r)){if(za(o,e,xn,!Ea),wt(o,0,!0)!==0)break t;o.timeoutHandle=nm(w0.bind(null,o,n,en,Cr,Qu,e,xn,li,Pi,Ea,u,2,-0,0),r);break t}w0(o,n,en,Cr,Qu,e,xn,li,Pi,Ea,u,0,-0,0)}}break}while(!0);Ln(t)}function w0(t,e,n,o,r,u,m,b,S,C,j,H,z,N){if(t.timeoutHandle=-1,H=e.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(ol={stylesheets:null,count:0,unsuspend:_v},S0(e),H=Vv(),H!==null)){t.cancelPendingCommit=H(j0.bind(null,t,e,u,n,o,r,m,b,S,j,1,z,N)),za(t,u,m,!C);return}j0(t,e,u,n,o,r,m,b,S)}function Ib(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var r=n[o],u=r.getSnapshot;r=r.value;try{if(!ln(u(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function za(t,e,n,o){e&=~Zu,e&=~li,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var r=e;0<r;){var u=31-Le(r),m=1<<u;o[u]=-1,r&=~m}n!==0&&Vl(t,n,e)}function zr(){return(Lt&6)===0?(Io(0),!1):!0}function $u(){if(At!==null){if(Ht===0)var t=At.return;else t=At,Jn=ti=null,pu(t),Ui=null,Yo=0,t=At;for(;t!==null;)r0(t.alternate,t),t=t.return;At=null}}function Gi(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,yv(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),$u(),Jt=t,At=n=Qn(t.current,null),Rt=e,Ht=0,cn=null,Ea=!1,qi=He(t,e),Gu=!1,Pi=xn=Zu=li=wa=se=0,en=Wo=null,Qu=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var r=31-Le(o),u=1<<r;e|=t[r],o&=~u}return ia=e,Il(),n}function R0(t,e){vt=null,k.H=br,e===_o||e===sr?(e=Zd(),Ht=3):e===Yd?(e=Zd(),Ht=4):Ht=e===Qh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,cn=e,At===null&&(se=1,Ar(t,pn(e,t.current)))}function C0(){var t=k.H;return k.H=br,t===null?br:t}function z0(){var t=k.A;return k.A=Wb,t}function Iu(){se=4,Ea||(Rt&4194048)!==Rt&&vn.current!==null||(qi=!0),(wa&134217727)===0&&(li&134217727)===0||Jt===null||za(Jt,Rt,xn,!1)}function tc(t,e,n){var o=Lt;Lt|=2;var r=C0(),u=z0();(Jt!==t||Rt!==e)&&(Cr=null,Gi(t,e)),e=!1;var m=se;t:do try{if(Ht!==0&&At!==null){var b=At,S=cn;switch(Ht){case 8:$u(),m=6;break t;case 3:case 2:case 9:case 6:vn.current===null&&(e=!0);var C=Ht;if(Ht=0,cn=null,Zi(t,b,S,C),n&&qi){m=0;break t}break;default:C=Ht,Ht=0,cn=null,Zi(t,b,S,C)}}tv(),m=se;break}catch(j){R0(t,j)}while(!0);return e&&t.shellSuspendCounter++,Jn=ti=null,Lt=o,k.H=r,k.A=u,At===null&&(Jt=null,Rt=0,Il()),m}function tv(){for(;At!==null;)N0(At)}function ev(t,e){var n=Lt;Lt|=2;var o=C0(),r=z0();Jt!==t||Rt!==e?(Cr=null,Rr=Dt()+500,Gi(t,e)):qi=He(t,e);t:do try{if(Ht!==0&&At!==null){e=At;var u=cn;e:switch(Ht){case 1:Ht=0,cn=null,Zi(t,e,u,1);break;case 2:case 9:if(Xd(u)){Ht=0,cn=null,k0(e);break}e=function(){Ht!==2&&Ht!==9||Jt!==t||(Ht=7),Ln(t)},u.then(e,e);break t;case 3:Ht=7;break t;case 4:Ht=5;break t;case 7:Xd(u)?(Ht=0,cn=null,k0(e)):(Ht=0,cn=null,Zi(t,e,u,7));break;case 5:var m=null;switch(At.tag){case 26:m=At.memoizedState;case 5:case 27:var b=At;if(!m||mm(m)){Ht=0,cn=null;var S=b.sibling;if(S!==null)At=S;else{var C=b.return;C!==null?(At=C,Nr(C)):At=null}break e}}Ht=0,cn=null,Zi(t,e,u,5);break;case 6:Ht=0,cn=null,Zi(t,e,u,6);break;case 8:$u(),se=6;break t;default:throw Error(s(462))}}nv();break}catch(j){R0(t,j)}while(!0);return Jn=ti=null,k.H=o,k.A=r,Lt=n,At!==null?0:(Jt=null,Rt=0,Il(),se)}function nv(){for(;At!==null&&!St();)N0(At)}function N0(t){var e=o0(t.alternate,t,ia);t.memoizedProps=t.pendingProps,e===null?Nr(t):At=e}function k0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ih(n,e,e.pendingProps,e.type,void 0,Rt);break;case 11:e=Ih(n,e,e.pendingProps,e.type.render,e.ref,Rt);break;case 5:pu(e);default:r0(n,e),e=At=_d(e,ia),e=o0(n,e,ia)}t.memoizedProps=t.pendingProps,e===null?Nr(t):At=e}function Zi(t,e,n,o){Jn=ti=null,pu(e),Ui=null,Yo=0;var r=e.return;try{if(Gb(t,r,e,n,Rt)){se=1,Ar(t,pn(n,t.current)),At=null;return}}catch(u){if(r!==null)throw At=r,u;se=1,Ar(t,pn(n,t.current)),At=null;return}e.flags&32768?(_t||o===1?t=!0:qi||(Rt&536870912)!==0?t=!1:(Ea=t=!0,(o===2||o===9||o===3||o===6)&&(o=vn.current,o!==null&&o.tag===13&&(o.flags|=16384))),_0(e,t)):Nr(e)}function Nr(t){var e=t;do{if((e.flags&32768)!==0){_0(e,Ea);return}t=e.return;var n=Qb(e.alternate,e,ia);if(n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);se===0&&(se=5)}function _0(t,e){do{var n=Kb(t.alternate,t);if(n!==null){n.flags&=32767,At=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){At=t;return}At=t=n}while(t!==null);se=6,At=null}function j0(t,e,n,o,r,u,m,b,S){t.cancelPendingCommit=null;do kr();while(je!==0);if((Lt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Xs,jl(t,n,u,m,b,S),t===Jt&&(At=Jt=null,Rt=0),Yi=e,Ca=t,Xi=n,Fu=u,Ju=r,D0=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lv(xe,function(){return H0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=k.T,k.T=null,r=Z.p,Z.p=2,m=Lt,Lt|=4;try{Fb(t,e,n)}finally{Lt=m,Z.p=r,k.T=o}}je=1,V0(),U0(),B0()}}function V0(){if(je===1){je=0;var t=Ca,e=Yi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var o=Z.p;Z.p=2;var r=Lt;Lt|=4;try{b0(e,t);var u=dc,m=Od(t.containerInfo),b=u.focusedElem,S=u.selectionRange;if(m!==b&&b&&b.ownerDocument&&Ad(b.ownerDocument.documentElement,b)){if(S!==null&&Ls(b)){var C=S.start,j=S.end;if(j===void 0&&(j=C),"selectionStart"in b)b.selectionStart=C,b.selectionEnd=Math.min(j,b.value.length);else{var H=b.ownerDocument||document,z=H&&H.defaultView||window;if(z.getSelection){var N=z.getSelection(),ht=b.textContent.length,ut=Math.min(S.start,ht),Xt=S.end===void 0?ut:Math.min(S.end,ht);!N.extend&&ut>Xt&&(m=Xt,Xt=ut,ut=m);var E=Td(b,ut),A=Td(b,Xt);if(E&&A&&(N.rangeCount!==1||N.anchorNode!==E.node||N.anchorOffset!==E.offset||N.focusNode!==A.node||N.focusOffset!==A.offset)){var R=H.createRange();R.setStart(E.node,E.offset),N.removeAllRanges(),ut>Xt?(N.addRange(R),N.extend(A.node,A.offset)):(R.setEnd(A.node,A.offset),N.addRange(R))}}}}for(H=[],N=b;N=N.parentNode;)N.nodeType===1&&H.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<H.length;b++){var U=H[b];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Gr=!!fc,dc=fc=null}finally{Lt=r,Z.p=o,k.T=n}}t.current=e,je=2}}function U0(){if(je===2){je=0;var t=Ca,e=Yi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var o=Z.p;Z.p=2;var r=Lt;Lt|=4;try{m0(t,e.alternate,e)}finally{Lt=r,Z.p=o,k.T=n}}je=3}}function B0(){if(je===4||je===3){je=0,Et();var t=Ca,e=Yi,n=Xi,o=D0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?je=5:(je=0,Yi=Ca=null,L0(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(Ra=null),yo(n),e=e.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(ke,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=k.T,r=Z.p,Z.p=2,k.T=null;try{for(var u=t.onRecoverableError,m=0;m<o.length;m++){var b=o[m];u(b.value,{componentStack:b.stack})}}finally{k.T=e,Z.p=r}}(Xi&3)!==0&&kr(),Ln(t),r=t.pendingLanes,(n&4194090)!==0&&(r&42)!==0?t===Wu?$o++:($o=0,Wu=t):$o=0,Io(0)}}function L0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,No(e)))}function kr(t){return V0(),U0(),B0(),H0()}function H0(){if(je!==5)return!1;var t=Ca,e=Fu;Fu=0;var n=yo(Xi),o=k.T,r=Z.p;try{Z.p=32>n?32:n,k.T=null,n=Ju,Ju=null;var u=Ca,m=Xi;if(je=0,Yi=Ca=null,Xi=0,(Lt&6)!==0)throw Error(s(331));var b=Lt;if(Lt|=4,A0(u.current),x0(u,u.current,m,n),Lt=b,Io(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(ke,u)}catch{}return!0}finally{Z.p=r,k.T=o,L0(t,e)}}function q0(t,e,n){e=pn(n,e),e=Ru(t.stateNode,e,2),t=xa(t,e,2),t!==null&&(Xn(t,2),Ln(t))}function Kt(t,e,n){if(t.tag===3)q0(t,t,n);else for(;e!==null;){if(e.tag===3){q0(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){t=pn(n,t),n=Gh(2),o=xa(e,n,2),o!==null&&(Zh(n,o,e,t),Xn(o,2),Ln(o));break}}e=e.return}}function ec(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new $b;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(n)||(Gu=!0,r.add(n),t=av.bind(null,t,e,n),e.then(t,t))}function av(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Jt===t&&(Rt&n)===n&&(se===4||se===3&&(Rt&62914560)===Rt&&300>Dt()-Ku?(Lt&2)===0&&Gi(t,0):Zu|=n,Pi===Rt&&(Pi=0)),Ln(t)}function P0(t,e){e===0&&(e=Je()),t=Ei(t,e),t!==null&&(Xn(t,e),Ln(t))}function iv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),P0(t,n)}function ov(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(e),P0(t,n)}function lv(t,e){return Ct(t,e)}var _r=null,Qi=null,nc=!1,jr=!1,ac=!1,ri=0;function Ln(t){t!==Qi&&t.next===null&&(Qi===null?_r=Qi=t:Qi=Qi.next=t),jr=!0,nc||(nc=!0,sv())}function Io(t,e){if(!ac&&jr){ac=!0;do for(var n=!1,o=_r;o!==null;){if(t!==0){var r=o.pendingLanes;if(r===0)var u=0;else{var m=o.suspendedLanes,b=o.pingedLanes;u=(1<<31-Le(42|t)+1)-1,u&=r&~(m&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Z0(o,u))}else u=Rt,u=wt(o,o===Jt?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||He(o,u)||(n=!0,Z0(o,u));o=o.next}while(n);ac=!1}}function rv(){Y0()}function Y0(){jr=nc=!1;var t=0;ri!==0&&(gv()&&(t=ri),ri=0);for(var e=Dt(),n=null,o=_r;o!==null;){var r=o.next,u=X0(o,e);u===0?(o.next=null,n===null?_r=r:n.next=r,r===null&&(Qi=n)):(n=o,(t!==0||(u&3)!==0)&&(jr=!0)),o=r}Io(t)}function X0(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var m=31-Le(u),b=1<<m,S=r[m];S===-1?((b&n)===0||(b&o)!==0)&&(r[m]=Te(b,e)):S<=e&&(t.expiredLanes|=b),u&=~b}if(e=Jt,n=Rt,n=wt(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,n===0||t===e&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&et(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||He(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(o!==null&&et(o),yo(n)){case 2:case 8:n=Ze;break;case 32:n=xe;break;case 268435456:n=zn;break;default:n=xe}return o=G0.bind(null,t),n=Ct(n,o),t.callbackPriority=e,t.callbackNode=n,e}return o!==null&&o!==null&&et(o),t.callbackPriority=2,t.callbackNode=null,2}function G0(t,e){if(je!==0&&je!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(kr()&&t.callbackNode!==n)return null;var o=Rt;return o=wt(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(E0(t,o,e),X0(t,Dt()),t.callbackNode!=null&&t.callbackNode===n?G0.bind(null,t):null)}function Z0(t,e){if(kr())return null;E0(t,e,!0)}function sv(){bv(function(){(Lt&6)!==0?Ct(ie,rv):Y0()})}function ic(){return ri===0&&(ri=Ya()),ri}function Q0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zl(""+t)}function K0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function uv(t,e,n,o,r){if(e==="submit"&&n&&n.stateNode===r){var u=Q0((r[qe]||null).action),m=o.submitter;m&&(e=(e=m[qe]||null)?Q0(e.formAction):m.getAttribute("formAction"),e!==null&&(u=e,m=null));var b=new Jl("action","action",null,o,r);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ri!==0){var S=m?K0(r,m):new FormData(r);Ou(n,{pending:!0,data:S,method:r.method,action:u},null,S)}}else typeof u=="function"&&(b.preventDefault(),S=m?K0(r,m):new FormData(r),Ou(n,{pending:!0,data:S,method:r.method,action:u},u,S))},currentTarget:r}]})}}for(var oc=0;oc<Ys.length;oc++){var lc=Ys[oc],cv=lc.toLowerCase(),fv=lc[0].toUpperCase()+lc.slice(1);Dn(cv,"on"+fv)}Dn(Ed,"onAnimationEnd"),Dn(wd,"onAnimationIteration"),Dn(Rd,"onAnimationStart"),Dn("dblclick","onDoubleClick"),Dn("focusin","onFocus"),Dn("focusout","onBlur"),Dn(wb,"onTransitionRun"),Dn(Rb,"onTransitionStart"),Dn(Cb,"onTransitionCancel"),Dn(Cd,"onTransitionEnd"),ha("onMouseEnter",["mouseout","mouseover"]),ha("onMouseLeave",["mouseout","mouseover"]),ha("onPointerEnter",["pointerout","pointerover"]),ha("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function F0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],r=o.event;o=o.listeners;t:{var u=void 0;if(e)for(var m=o.length-1;0<=m;m--){var b=o[m],S=b.instance,C=b.currentTarget;if(b=b.listener,S!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=C;try{u(r)}catch(j){Tr(j)}r.currentTarget=null,u=S}else for(m=0;m<o.length;m++){if(b=o[m],S=b.instance,C=b.currentTarget,b=b.listener,S!==u&&r.isPropagationStopped())break t;u=b,r.currentTarget=C;try{u(r)}catch(j){Tr(j)}r.currentTarget=null,u=S}}}}function Ot(t,e){var n=e[gi];n===void 0&&(n=e[gi]=new Set);var o=t+"__bubble";n.has(o)||(J0(e,t,2,!1),n.add(o))}function rc(t,e,n){var o=0;e&&(o|=4),J0(n,t,o,e)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function sc(t){if(!t[Vr]){t[Vr]=!0,ql.forEach(function(n){n!=="selectionchange"&&(dv.has(n)||rc(n,!1,t),rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vr]||(e[Vr]=!0,rc("selectionchange",!1,e))}}function J0(t,e,n,o){switch(xm(e)){case 2:var r=Lv;break;case 8:r=Hv;break;default:r=Tc}n=r.bind(null,e,n,t),r=void 0,!Cs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uc(t,e,n,o,r){var u=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var m=o.tag;if(m===3||m===4){var b=o.stateNode.containerInfo;if(b===r)break;if(m===4)for(m=o.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;b!==null;){if(m=Ee(b),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){o=u=m;continue t}b=b.parentNode}}o=o.return}ad(function(){var C=u,j=ws(n),H=[];t:{var z=zd.get(t);if(z!==void 0){var N=Jl,ht=t;switch(t){case"keypress":if(Kl(n)===0)break t;case"keydown":case"keyup":N=lb;break;case"focusin":ht="focus",N=_s;break;case"focusout":ht="blur",N=_s;break;case"beforeblur":case"afterblur":N=_s;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=ub;break;case Ed:case wd:case Rd:N=Wy;break;case Cd:N=fb;break;case"scroll":case"scrollend":N=Zy;break;case"wheel":N=hb;break;case"copy":case"cut":case"paste":N=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=sd;break;case"toggle":case"beforetoggle":N=pb}var ut=(e&4)!==0,Xt=!ut&&(t==="scroll"||t==="scrollend"),E=ut?z!==null?z+"Capture":null:z;ut=[];for(var A=C,R;A!==null;){var U=A;if(R=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||R===null||E===null||(U=vo(A,E),U!=null&&ut.push(el(A,U,R))),Xt)break;A=A.return}0<ut.length&&(z=new N(z,ht,null,n,j),H.push({event:z,listeners:ut}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",z&&n!==Es&&(ht=n.relatedTarget||n.fromElement)&&(Ee(ht)||ht[ua]))break t;if((N||z)&&(z=j.window===j?j:(z=j.ownerDocument)?z.defaultView||z.parentWindow:window,N?(ht=n.relatedTarget||n.toElement,N=C,ht=ht?Ee(ht):null,ht!==null&&(Xt=d(ht),ut=ht.tag,ht!==Xt||ut!==5&&ut!==27&&ut!==6)&&(ht=null)):(N=null,ht=C),N!==ht)){if(ut=ld,U="onMouseLeave",E="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(ut=sd,U="onPointerLeave",E="onPointerEnter",A="pointer"),Xt=N==null?z:fa(N),R=ht==null?z:fa(ht),z=new ut(U,A+"leave",N,n,j),z.target=Xt,z.relatedTarget=R,U=null,Ee(j)===C&&(ut=new ut(E,A+"enter",ht,n,j),ut.target=R,ut.relatedTarget=Xt,U=ut),Xt=U,N&&ht)e:{for(ut=N,E=ht,A=0,R=ut;R;R=Ki(R))A++;for(R=0,U=E;U;U=Ki(U))R++;for(;0<A-R;)ut=Ki(ut),A--;for(;0<R-A;)E=Ki(E),R--;for(;A--;){if(ut===E||E!==null&&ut===E.alternate)break e;ut=Ki(ut),E=Ki(E)}ut=null}else ut=null;N!==null&&W0(H,z,N,ut,!1),ht!==null&&Xt!==null&&W0(H,Xt,ht,ut,!0)}}t:{if(z=C?fa(C):window,N=z.nodeName&&z.nodeName.toLowerCase(),N==="select"||N==="input"&&z.type==="file")var tt=gd;else if(md(z))if(yd)tt=Db;else{tt=Ab;var xt=Tb}else N=z.nodeName,!N||N.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?C&&Ms(C.elementType)&&(tt=gd):tt=Ob;if(tt&&(tt=tt(t,C))){pd(H,tt,n,j);break t}xt&&xt(t,z,C),t==="focusout"&&C&&z.type==="number"&&C.memoizedProps.value!=null&&Ga(z,"number",z.value)}switch(xt=C?fa(C):window,t){case"focusin":(md(xt)||xt.contentEditable==="true")&&(Oi=xt,Hs=C,Eo=null);break;case"focusout":Eo=Hs=Oi=null;break;case"mousedown":qs=!0;break;case"contextmenu":case"mouseup":case"dragend":qs=!1,Dd(H,n,j);break;case"selectionchange":if(Eb)break;case"keydown":case"keyup":Dd(H,n,j)}var nt;if(Vs)t:{switch(t){case"compositionstart":var ft="onCompositionStart";break t;case"compositionend":ft="onCompositionEnd";break t;case"compositionupdate":ft="onCompositionUpdate";break t}ft=void 0}else Ai?dd(t,n)&&(ft="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ft="onCompositionStart");ft&&(ud&&n.locale!=="ko"&&(Ai||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ai&&(nt=id()):(ga=j,zs="value"in ga?ga.value:ga.textContent,Ai=!0)),xt=Ur(C,ft),0<xt.length&&(ft=new rd(ft,t,null,n,j),H.push({event:ft,listeners:xt}),nt?ft.data=nt:(nt=hd(n),nt!==null&&(ft.data=nt)))),(nt=yb?bb(t,n):vb(t,n))&&(ft=Ur(C,"onBeforeInput"),0<ft.length&&(xt=new rd("onBeforeInput","beforeinput",null,n,j),H.push({event:xt,listeners:ft}),xt.data=nt)),uv(H,t,C,n,j)}F0(H,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ur(t,e){for(var n=e+"Capture",o=[];t!==null;){var r=t,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=vo(t,n),r!=null&&o.unshift(el(t,r,u)),r=vo(t,e),r!=null&&o.push(el(t,r,u))),t.tag===3)return o;t=t.return}return[]}function Ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function W0(t,e,n,o,r){for(var u=e._reactName,m=[];n!==null&&n!==o;){var b=n,S=b.alternate,C=b.stateNode;if(b=b.tag,S!==null&&S===o)break;b!==5&&b!==26&&b!==27||C===null||(S=C,r?(C=vo(n,u),C!=null&&m.unshift(el(n,C,S))):r||(C=vo(n,u),C!=null&&m.push(el(n,C,S)))),n=n.return}m.length!==0&&t.push({event:e,listeners:m})}var hv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function $0(t){return(typeof t=="string"?t:""+t).replace(hv,`
`).replace(mv,"")}function I0(t,e){return e=$0(e),$0(t)===e}function Br(){}function Yt(t,e,n,o,r,u){switch(n){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||xi(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&xi(t,""+o);break;case"className":K(t,"class",o);break;case"tabIndex":K(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":K(t,n,o);break;case"style":ed(t,o,u);break;case"data":if(e!=="object"){K(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Zl(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Yt(t,e,"name",r.name,r,null),Yt(t,e,"formEncType",r.formEncType,r,null),Yt(t,e,"formMethod",r.formMethod,r,null),Yt(t,e,"formTarget",r.formTarget,r,null)):(Yt(t,e,"encType",r.encType,r,null),Yt(t,e,"method",r.method,r,null),Yt(t,e,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Zl(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=Br);break;case"onScroll":o!=null&&Ot("scroll",t);break;case"onScrollEnd":o!=null&&Ot("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=Zl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":Ot("beforetoggle",t),Ot("toggle",t),V(t,"popover",o);break;case"xlinkActuate":st(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":st(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":st(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":st(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":st(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":st(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":st(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":st(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":st(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":V(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Xy.get(n)||n,V(t,n,o))}}function cc(t,e,n,o,r,u){switch(n){case"style":ed(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof o=="string"?xi(t,o):(typeof o=="number"||typeof o=="bigint")&&xi(t,""+o);break;case"onScroll":o!=null&&Ot("scroll",t);break;case"onScrollEnd":o!=null&&Ot("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Br);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pl.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),u=t[qe]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,r),typeof o=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,o,r);break t}n in t?t[n]=o:o===!0?t.setAttribute(n,""):V(t,n,o)}}}function Ve(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ot("error",t),Ot("load",t);var o=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Yt(t,e,u,m,n,null)}}r&&Yt(t,e,"srcSet",n.srcSet,n,null),o&&Yt(t,e,"src",n.src,n,null);return;case"input":Ot("invalid",t);var b=u=m=r=null,S=null,C=null;for(o in n)if(n.hasOwnProperty(o)){var j=n[o];if(j!=null)switch(o){case"name":r=j;break;case"type":m=j;break;case"checked":S=j;break;case"defaultChecked":C=j;break;case"value":u=j;break;case"defaultValue":b=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,e));break;default:Yt(t,e,o,j,n,null)}}pa(t,u,b,S,C,m,r,!1),Xa(t);return;case"select":Ot("invalid",t),o=m=u=null;for(r in n)if(n.hasOwnProperty(r)&&(b=n[r],b!=null))switch(r){case"value":u=b;break;case"defaultValue":m=b;break;case"multiple":o=b;default:Yt(t,e,r,b,n,null)}e=u,n=m,t.multiple=!!o,e!=null?vi(t,!!o,e,!1):n!=null&&vi(t,!!o,n,!0);return;case"textarea":Ot("invalid",t),u=r=o=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":o=b;break;case"defaultValue":r=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Yt(t,e,m,b,n,null)}If(t,o,r,u),Xa(t);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(o=n[S],o!=null))switch(S){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Yt(t,e,S,o,n,null)}return;case"dialog":Ot("beforetoggle",t),Ot("toggle",t),Ot("cancel",t),Ot("close",t);break;case"iframe":case"object":Ot("load",t);break;case"video":case"audio":for(o=0;o<tl.length;o++)Ot(tl[o],t);break;case"image":Ot("error",t),Ot("load",t);break;case"details":Ot("toggle",t);break;case"embed":case"source":case"link":Ot("error",t),Ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(o=n[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Yt(t,e,C,o,n,null)}return;default:if(Ms(e)){for(j in n)n.hasOwnProperty(j)&&(o=n[j],o!==void 0&&cc(t,e,j,o,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(o=n[b],o!=null&&Yt(t,e,b,o,n,null))}function pv(t,e,n,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,m=null,b=null,S=null,C=null,j=null;for(N in n){var H=n[N];if(n.hasOwnProperty(N)&&H!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":S=H;default:o.hasOwnProperty(N)||Yt(t,e,N,null,o,H)}}for(var z in o){var N=o[z];if(H=n[z],o.hasOwnProperty(z)&&(N!=null||H!=null))switch(z){case"type":u=N;break;case"name":r=N;break;case"checked":C=N;break;case"defaultChecked":j=N;break;case"value":m=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:N!==H&&Yt(t,e,z,N,o,H)}}We(t,m,b,S,C,j,u,r);return;case"select":N=m=b=z=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":N=S;default:o.hasOwnProperty(u)||Yt(t,e,u,null,o,S)}for(r in o)if(u=o[r],S=n[r],o.hasOwnProperty(r)&&(u!=null||S!=null))switch(r){case"value":z=u;break;case"defaultValue":b=u;break;case"multiple":m=u;default:u!==S&&Yt(t,e,r,u,o,S)}e=b,n=m,o=N,z!=null?vi(t,!!n,z,!1):!!o!=!!n&&(e!=null?vi(t,!!n,e,!0):vi(t,!!n,n?[]:"",!1));return;case"textarea":N=z=null;for(b in n)if(r=n[b],n.hasOwnProperty(b)&&r!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Yt(t,e,b,null,o,r)}for(m in o)if(r=o[m],u=n[m],o.hasOwnProperty(m)&&(r!=null||u!=null))switch(m){case"value":z=r;break;case"defaultValue":N=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==u&&Yt(t,e,m,r,o,u)}$f(t,z,N);return;case"option":for(var ht in n)if(z=n[ht],n.hasOwnProperty(ht)&&z!=null&&!o.hasOwnProperty(ht))switch(ht){case"selected":t.selected=!1;break;default:Yt(t,e,ht,null,o,z)}for(S in o)if(z=o[S],N=n[S],o.hasOwnProperty(S)&&z!==N&&(z!=null||N!=null))switch(S){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Yt(t,e,S,z,o,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in n)z=n[ut],n.hasOwnProperty(ut)&&z!=null&&!o.hasOwnProperty(ut)&&Yt(t,e,ut,null,o,z);for(C in o)if(z=o[C],N=n[C],o.hasOwnProperty(C)&&z!==N&&(z!=null||N!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:Yt(t,e,C,z,o,N)}return;default:if(Ms(e)){for(var Xt in n)z=n[Xt],n.hasOwnProperty(Xt)&&z!==void 0&&!o.hasOwnProperty(Xt)&&cc(t,e,Xt,void 0,o,z);for(j in o)z=o[j],N=n[j],!o.hasOwnProperty(j)||z===N||z===void 0&&N===void 0||cc(t,e,j,z,o,N);return}}for(var E in n)z=n[E],n.hasOwnProperty(E)&&z!=null&&!o.hasOwnProperty(E)&&Yt(t,e,E,null,o,z);for(H in o)z=o[H],N=n[H],!o.hasOwnProperty(H)||z===N||z==null&&N==null||Yt(t,e,H,z,o,N)}var fc=null,dc=null;function Lr(t){return t.nodeType===9?t:t.ownerDocument}function tm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function em(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mc=null;function gv(){var t=window.event;return t&&t.type==="popstate"?t===mc?!1:(mc=t,!0):(mc=null,!1)}var nm=typeof setTimeout=="function"?setTimeout:void 0,yv=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(vv)}:nm;function vv(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function im(t,e){var n=e,o=0,r=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<o&&8>o){n=o;var m=t.ownerDocument;if(n&1&&nl(m.documentElement),n&2&&nl(m.body),n&4)for(n=m.head,nl(n),m=n.firstChild;m;){var b=m.nextSibling,S=m.nodeName;m[Qe]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(r===0){t.removeChild(u),cl(e);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:o=n.charCodeAt(0)-48;else o=0;n=u}while(n);cl(e)}function pc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":pc(n),Pe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function xv(t,e,n,o){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Qe])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=En(t.nextSibling),t===null)break}return null}function Sv(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=En(t.nextSibling),t===null))return null;return t}function gc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Tv(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var o=function(){e(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var yc=null;function om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function lm(t,e,n){switch(e=Lr(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function nl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Pe(t)}var Sn=new Map,rm=new Set;function Hr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=Z.d;Z.d={f:Av,r:Ov,D:Dv,C:Mv,L:Ev,m:wv,X:Cv,S:Rv,M:zv};function Av(){var t=oa.f(),e=zr();return t||e}function Ov(t){var e=ca(t);e!==null&&e.tag===5&&e.type==="form"?Eh(e):oa.r(t)}var Fi=typeof document>"u"?null:document;function sm(t,e,n){var o=Fi;if(o&&typeof e=="string"&&e){var r=Ft(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),rm.has(r)||(rm.add(r),t={rel:t,crossOrigin:n,href:e},o.querySelector(r)===null&&(e=o.createElement("link"),Ve(e,"link",t),ce(e),o.head.appendChild(e)))}}function Dv(t){oa.D(t),sm("dns-prefetch",t,null)}function Mv(t,e){oa.C(t,e),sm("preconnect",t,e)}function Ev(t,e,n){oa.L(t,e,n);var o=Fi;if(o&&t&&e){var r='link[rel="preload"][as="'+Ft(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ft(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ft(n.imageSizes)+'"]')):r+='[href="'+Ft(t)+'"]';var u=r;switch(e){case"style":u=Ji(t);break;case"script":u=Wi(t)}Sn.has(u)||(t=y({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Sn.set(u,t),o.querySelector(r)!==null||e==="style"&&o.querySelector(al(u))||e==="script"&&o.querySelector(il(u))||(e=o.createElement("link"),Ve(e,"link",t),ce(e),o.head.appendChild(e)))}}function wv(t,e){oa.m(t,e);var n=Fi;if(n&&t){var o=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Ft(o)+'"][href="'+Ft(t)+'"]',u=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Wi(t)}if(!Sn.has(u)&&(t=y({rel:"modulepreload",href:t},e),Sn.set(u,t),n.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(il(u)))return}o=n.createElement("link"),Ve(o,"link",t),ce(o),n.head.appendChild(o)}}}function Rv(t,e,n){oa.S(t,e,n);var o=Fi;if(o&&t){var r=da(o).hoistableStyles,u=Ji(t);e=e||"default";var m=r.get(u);if(!m){var b={loading:0,preload:null};if(m=o.querySelector(al(u)))b.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Sn.get(u))&&bc(t,n);var S=m=o.createElement("link");ce(S),Ve(S,"link",t),S._p=new Promise(function(C,j){S.onload=C,S.onerror=j}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,qr(m,e,o)}m={type:"stylesheet",instance:m,count:1,state:b},r.set(u,m)}}}function Cv(t,e){oa.X(t,e);var n=Fi;if(n&&t){var o=da(n).hoistableScripts,r=Wi(t),u=o.get(r);u||(u=n.querySelector(il(r)),u||(t=y({src:t,async:!0},e),(e=Sn.get(r))&&vc(t,e),u=n.createElement("script"),ce(u),Ve(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function zv(t,e){oa.M(t,e);var n=Fi;if(n&&t){var o=da(n).hoistableScripts,r=Wi(t),u=o.get(r);u||(u=n.querySelector(il(r)),u||(t=y({src:t,async:!0,type:"module"},e),(e=Sn.get(r))&&vc(t,e),u=n.createElement("script"),ce(u),Ve(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function um(t,e,n,o){var r=(r=ot.current)?Hr(r):null;if(!r)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ji(n.href),n=da(r).hoistableStyles,o=n.get(e),o||(o={type:"style",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ji(n.href);var u=da(r).hoistableStyles,m=u.get(t);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,m),(u=r.querySelector(al(t)))&&!u._p&&(m.instance=u,m.state.loading=5),Sn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sn.set(t,n),u||Nv(r,t,n,m.state))),e&&o===null)throw Error(s(528,""));return m}if(e&&o!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Wi(n),n=da(r).hoistableScripts,o=n.get(e),o||(o={type:"script",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ji(t){return'href="'+Ft(t)+'"'}function al(t){return'link[rel="stylesheet"]['+t+"]"}function cm(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function Nv(t,e,n,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),Ve(e,"link",n),ce(e),t.head.appendChild(e))}function Wi(t){return'[src="'+Ft(t)+'"]'}function il(t){return"script[async]"+t}function fm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+Ft(n.href)+'"]');if(o)return e.instance=o,ce(o),o;var r=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ce(o),Ve(o,"style",r),qr(o,n.precedence,t),e.instance=o;case"stylesheet":r=Ji(n.href);var u=t.querySelector(al(r));if(u)return e.state.loading|=4,e.instance=u,ce(u),u;o=cm(n),(r=Sn.get(r))&&bc(o,r),u=(t.ownerDocument||t).createElement("link"),ce(u);var m=u;return m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),Ve(u,"link",o),e.state.loading|=4,qr(u,n.precedence,t),e.instance=u;case"script":return u=Wi(n.src),(r=t.querySelector(il(u)))?(e.instance=r,ce(r),r):(o=n,(r=Sn.get(u))&&(o=y({},n),vc(o,r)),t=t.ownerDocument||t,r=t.createElement("script"),ce(r),Ve(r,"link",o),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,qr(o,n.precedence,t));return e.instance}function qr(t,e,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,u=r,m=0;m<o.length;m++){var b=o[m];if(b.dataset.precedence===e)u=b;else if(u!==r)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function bc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function vc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Pr=null;function dm(t,e,n){if(Pr===null){var o=new Map,r=Pr=new Map;r.set(n,o)}else r=Pr,o=r.get(n),o||(o=new Map,r.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var u=n[r];if(!(u[Qe]||u[Me]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(e)||"";m=t+m;var b=o.get(m);b?b.push(u):o.set(m,[u])}}return o}function hm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function kv(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function mm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ol=null;function _v(){}function jv(t,e,n){if(ol===null)throw Error(s(475));var o=ol;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var r=Ji(n.href),u=t.querySelector(al(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Yr.bind(o),t.then(o,o)),e.state.loading|=4,e.instance=u,ce(u);return}u=t.ownerDocument||t,n=cm(n),(r=Sn.get(r))&&bc(n,r),u=u.createElement("link"),ce(u);var m=u;m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),Ve(u,"link",n),e.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(o.count++,e=Yr.bind(o),t.addEventListener("load",e),t.addEventListener("error",e))}}function Vv(){if(ol===null)throw Error(s(475));var t=ol;return t.stylesheets&&t.count===0&&xc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Yr(){if(this.count--,this.count===0){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xr=null;function xc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xr=new Map,e.forEach(Uv,t),Xr=null,Yr.call(t))}function Uv(t,e){if(!(e.state.loading&4)){var n=Xr.get(t);if(n)var o=n.get(null);else{n=new Map,Xr.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var m=r[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),o=m)}o&&n.set(null,o)}r=e.instance,m=r.getAttribute("data-precedence"),u=n.get(m)||o,u===o&&n.set(null,r),n.set(m,r),this.count++,o=Yr.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),u?u.parentNode.insertBefore(r,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var ll={$$typeof:q,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Bv(t,e,n,o,r,u,m,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=po(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=po(0),this.hiddenUpdates=po(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function pm(t,e,n,o,r,u,m,b,S,C,j,H){return t=new Bv(t,e,n,m,b,S,C,H),e=1,u===!0&&(e|=24),u=rn(3,null,null,e),t.current=u,u.stateNode=t,e=eu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:e},ou(u),t}function gm(t){return t?(t=wi,t):wi}function ym(t,e,n,o,r,u){r=gm(r),o.context===null?o.context=r:o.pendingContext=r,o=va(e),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=xa(t,o,e),n!==null&&(dn(n,t,e),Vo(n,t,e))}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sc(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function vm(t){if(t.tag===13){var e=Ei(t,67108864);e!==null&&dn(e,t,67108864),Sc(t,67108864)}}var Gr=!0;function Lv(t,e,n,o){var r=k.T;k.T=null;var u=Z.p;try{Z.p=2,Tc(t,e,n,o)}finally{Z.p=u,k.T=r}}function Hv(t,e,n,o){var r=k.T;k.T=null;var u=Z.p;try{Z.p=8,Tc(t,e,n,o)}finally{Z.p=u,k.T=r}}function Tc(t,e,n,o){if(Gr){var r=Ac(o);if(r===null)uc(t,e,o,Zr,n),Sm(t,o);else if(Pv(r,t,e,n,o))o.stopPropagation();else if(Sm(t,o),e&4&&-1<qv.indexOf(t)){for(;r!==null;){var u=ca(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=kn(u.pendingLanes);if(m!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var S=1<<31-Le(m);b.entanglements[1]|=S,m&=~S}Ln(u),(Lt&6)===0&&(Rr=Dt()+500,Io(0))}}break;case 13:b=Ei(u,2),b!==null&&dn(b,u,2),zr(),Sc(u,2)}if(u=Ac(o),u===null&&uc(t,e,o,Zr,n),u===r)break;r=u}r!==null&&o.stopPropagation()}else uc(t,e,o,null,n)}}function Ac(t){return t=ws(t),Oc(t)}var Zr=null;function Oc(t){if(Zr=null,t=Ee(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Zr=t,null}function xm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ge()){case ie:return 2;case Ze:return 8;case xe:case on:return 32;case zn:return 268435456;default:return 32}default:return 32}}var Dc=!1,ka=null,_a=null,ja=null,rl=new Map,sl=new Map,Va=[],qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sm(t,e){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(e.pointerId)}}function ul(t,e,n,o,r,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[r]},e!==null&&(e=ca(e),e!==null&&vm(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Pv(t,e,n,o,r){switch(e){case"focusin":return ka=ul(ka,t,e,n,o,r),!0;case"dragenter":return _a=ul(_a,t,e,n,o,r),!0;case"mouseover":return ja=ul(ja,t,e,n,o,r),!0;case"pointerover":var u=r.pointerId;return rl.set(u,ul(rl.get(u)||null,t,e,n,o,r)),!0;case"gotpointercapture":return u=r.pointerId,sl.set(u,ul(sl.get(u)||null,t,e,n,o,r)),!0}return!1}function Tm(t){var e=Ee(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,Os(t.priority,function(){if(n.tag===13){var o=fn();o=go(o);var r=Ei(n,o);r!==null&&dn(r,n,o),Sc(n,o)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ac(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);Es=o,n.target.dispatchEvent(o),Es=null}else return e=ca(n),e!==null&&vm(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){Qr(t)&&n.delete(e)}function Yv(){Dc=!1,ka!==null&&Qr(ka)&&(ka=null),_a!==null&&Qr(_a)&&(_a=null),ja!==null&&Qr(ja)&&(ja=null),rl.forEach(Am),sl.forEach(Am)}function Kr(t,e){t.blockedOn===e&&(t.blockedOn=null,Dc||(Dc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Yv)))}var Fr=null;function Om(t){Fr!==t&&(Fr=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Fr===t&&(Fr=null);for(var e=0;e<t.length;e+=3){var n=t[e],o=t[e+1],r=t[e+2];if(typeof o!="function"){if(Oc(o||n)===null)continue;break}var u=ca(n);u!==null&&(t.splice(e,3),e-=3,Ou(u,{pending:!0,data:r,method:n.method,action:o},o,r))}}))}function cl(t){function e(S){return Kr(S,t)}ka!==null&&Kr(ka,t),_a!==null&&Kr(_a,t),ja!==null&&Kr(ja,t),rl.forEach(e),sl.forEach(e);for(var n=0;n<Va.length;n++){var o=Va[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Va.length&&(n=Va[0],n.blockedOn===null);)Tm(n),n.blockedOn===null&&Va.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var r=n[o],u=n[o+1],m=r[qe]||null;if(typeof u=="function")m||Om(n);else if(m){var b=null;if(u&&u.hasAttribute("formAction")){if(r=u,m=u[qe]||null)b=m.formAction;else if(Oc(r)!==null)continue}else b=m.action;typeof b=="function"?n[o+1]=b:(n.splice(o,3),o-=3),Om(n)}}}function Mc(t){this._internalRoot=t}Jr.prototype.render=Mc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,o=fn();ym(n,o,t,e,null,null)},Jr.prototype.unmount=Mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ym(t.current,2,null,t,null,null),zr(),e[ua]=null}};function Jr(t){this._internalRoot=t}Jr.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bl();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Va.length&&e!==0&&e<Va[n].priority;n++);Va.splice(n,0,t),n===0&&Tm(t)}};var Dm=i.version;if(Dm!=="19.1.0")throw Error(s(527,Dm,"19.1.0"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var Xv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{ke=Wr.inject(Xv),Se=Wr}catch{}}return dl.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,o="",r=qh,u=Ph,m=Yh,b=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(m=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=pm(t,1,!1,null,null,n,o,r,u,m,b,null),t[ua]=e.current,sc(t),new Mc(e)},dl.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var o=!1,r="",u=qh,m=Ph,b=Yh,S=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),e=pm(t,1,!0,e,n??null,o,r,u,m,b,S,C),e.context=gm(null),n=e.current,o=fn(),o=go(o),r=va(o),r.callback=null,xa(n,r,o),n=o,e.current.lanes=n,Xn(e,n),Ln(e),t[ua]=e.current,sc(t),new Jr(e)},dl.version="19.1.0",dl}var jm;function e1(){if(jm)return Rc.exports;jm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Rc.exports=t1(),Rc.exports}var n1=e1();const bf=X.createContext({});function vf(a){const i=X.useRef(null);return i.current===null&&(i.current=a()),i.current}const xf=typeof window<"u",sg=xf?X.useLayoutEffect:X.useEffect,ms=X.createContext(null);function Sf(a,i){a.indexOf(i)===-1&&a.push(i)}function Tf(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const ra=(a,i,l)=>l>i?i:l<a?a:l;let Af=()=>{};const sa={},ug=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function cg(a){return typeof a=="object"&&a!==null}const fg=a=>/^0[^.\s]+$/u.test(a);function Of(a){let i;return()=>(i===void 0&&(i=a()),i)}const On=a=>a,a1=(a,i)=>l=>i(a(l)),wl=(...a)=>a.reduce(a1),Sl=(a,i,l)=>{const s=i-a;return s===0?1:(l-a)/s};class Df{constructor(){this.subscriptions=[]}add(i){return Sf(this.subscriptions,i),()=>Tf(this.subscriptions,i)}notify(i,l,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,l,s);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(i,l,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Hn=a=>a*1e3,qn=a=>a/1e3;function dg(a,i){return i?a*(1e3/i):0}const hg=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,i1=1e-7,o1=12;function l1(a,i,l,s,c){let d,f,g=0;do f=i+(l-i)/2,d=hg(f,s,c)-a,d>0?l=f:i=f;while(Math.abs(d)>i1&&++g<o1);return f}function Rl(a,i,l,s){if(a===i&&l===s)return On;const c=d=>l1(d,0,1,a,l);return d=>d===0||d===1?d:hg(c(d),i,s)}const mg=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,pg=a=>i=>1-a(1-i),gg=Rl(.33,1.53,.69,.99),Mf=pg(gg),yg=mg(Mf),bg=a=>(a*=2)<1?.5*Mf(a):.5*(2-Math.pow(2,-10*(a-1))),Ef=a=>1-Math.sin(Math.acos(a)),vg=pg(Ef),xg=mg(Ef),r1=Rl(.42,0,1,1),s1=Rl(0,0,.58,1),Sg=Rl(.42,0,.58,1),u1=a=>Array.isArray(a)&&typeof a[0]!="number",Tg=a=>Array.isArray(a)&&typeof a[0]=="number",c1={linear:On,easeIn:r1,easeInOut:Sg,easeOut:s1,circIn:Ef,circInOut:xg,circOut:vg,backIn:Mf,backInOut:yg,backOut:gg,anticipate:bg},f1=a=>typeof a=="string",Vm=a=>{if(Tg(a)){Af(a.length===4);const[i,l,s,c]=a;return Rl(i,l,s,c)}else if(f1(a))return c1[a];return a},$r=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function d1(a,i){let l=new Set,s=new Set,c=!1,d=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(h.schedule(y),a()),y(g)}const h={schedule:(y,v=!1,x=!1)=>{const M=x&&c?l:s;return v&&f.add(y),M.has(y)||M.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,c){d=!0;return}c=!0,[l,s]=[s,l],l.forEach(p),l.clear(),c=!1,d&&(d=!1,h.process(y))}};return h}const h1=40;function Ag(a,i){let l=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>l=!0,f=$r.reduce((q,W)=>(q[W]=d1(d),q),{}),{setup:g,read:p,resolveKeyframes:h,preUpdate:y,update:v,preRender:x,render:w,postRender:M}=f,D=()=>{const q=sa.useManualTiming?c.timestamp:performance.now();l=!1,sa.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(q-c.timestamp,h1),1)),c.timestamp=q,c.isProcessing=!0,g.process(c),p.process(c),h.process(c),y.process(c),v.process(c),x.process(c),w.process(c),M.process(c),c.isProcessing=!1,l&&i&&(s=!1,a(D))},_=()=>{l=!0,s=!0,c.isProcessing||a(D)};return{schedule:$r.reduce((q,W)=>{const P=f[W];return q[W]=(F,Q=!1,G=!1)=>(l||_(),P.schedule(F,Q,G)),q},{}),cancel:q=>{for(let W=0;W<$r.length;W++)f[$r[W]].cancel(q)},state:c,steps:f}}const{schedule:ae,cancel:Ha,state:Ue,steps:kc}=Ag(typeof requestAnimationFrame<"u"?requestAnimationFrame:On,!0);let is;function m1(){is=void 0}const an={now:()=>(is===void 0&&an.set(Ue.isProcessing||sa.useManualTiming?Ue.timestamp:performance.now()),is),set:a=>{is=a,queueMicrotask(m1)}},Og=a=>i=>typeof i=="string"&&i.startsWith(a),wf=Og("--"),p1=Og("var(--"),Rf=a=>p1(a)?g1.test(a.split("/*")[0].trim()):!1,g1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,fo={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Tl={...fo,transform:a=>ra(0,1,a)},Ir={...fo,default:1},gl=a=>Math.round(a*1e5)/1e5,Cf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function y1(a){return a==null}const b1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,zf=(a,i)=>l=>!!(typeof l=="string"&&b1.test(l)&&l.startsWith(a)||i&&!y1(l)&&Object.prototype.hasOwnProperty.call(l,i)),Dg=(a,i,l)=>s=>{if(typeof s!="string")return s;const[c,d,f,g]=s.match(Cf);return{[a]:parseFloat(c),[i]:parseFloat(d),[l]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},v1=a=>ra(0,255,a),_c={...fo,transform:a=>Math.round(v1(a))},ci={test:zf("rgb","red"),parse:Dg("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:s=1})=>"rgba("+_c.transform(a)+", "+_c.transform(i)+", "+_c.transform(l)+", "+gl(Tl.transform(s))+")"};function x1(a){let i="",l="",s="",c="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),s=a.substring(5,7),c=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),s=a.substring(3,4),c=a.substring(4,5),i+=i,l+=l,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const Fc={test:zf("#"),parse:x1,transform:ci.transform},Cl=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),La=Cl("deg"),Pn=Cl("%"),mt=Cl("px"),S1=Cl("vh"),T1=Cl("vw"),Um={...Pn,parse:a=>Pn.parse(a)/100,transform:a=>Pn.transform(a*100)},io={test:zf("hsl","hue"),parse:Dg("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:s=1})=>"hsla("+Math.round(a)+", "+Pn.transform(gl(i))+", "+Pn.transform(gl(l))+", "+gl(Tl.transform(s))+")"},ve={test:a=>ci.test(a)||Fc.test(a)||io.test(a),parse:a=>ci.test(a)?ci.parse(a):io.test(a)?io.parse(a):Fc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ci.transform(a):io.transform(a),getAnimatableNone:a=>{const i=ve.parse(a);return i.alpha=0,ve.transform(i)}},A1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function O1(a){return isNaN(a)&&typeof a=="string"&&(a.match(Cf)?.length||0)+(a.match(A1)?.length||0)>0}const Mg="number",Eg="color",D1="var",M1="var(",Bm="${}",E1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Al(a){const i=a.toString(),l=[],s={color:[],number:[],var:[]},c=[];let d=0;const g=i.replace(E1,p=>(ve.test(p)?(s.color.push(d),c.push(Eg),l.push(ve.parse(p))):p.startsWith(M1)?(s.var.push(d),c.push(D1),l.push(p)):(s.number.push(d),c.push(Mg),l.push(parseFloat(p))),++d,Bm)).split(Bm);return{values:l,split:g,indexes:s,types:c}}function wg(a){return Al(a).values}function Rg(a){const{split:i,types:l}=Al(a),s=i.length;return c=>{let d="";for(let f=0;f<s;f++)if(d+=i[f],c[f]!==void 0){const g=l[f];g===Mg?d+=gl(c[f]):g===Eg?d+=ve.transform(c[f]):d+=c[f]}return d}}const w1=a=>typeof a=="number"?0:ve.test(a)?ve.getAnimatableNone(a):a;function R1(a){const i=wg(a);return Rg(a)(i.map(w1))}const qa={test:O1,parse:wg,createTransformer:Rg,getAnimatableNone:R1};function jc(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function C1({hue:a,saturation:i,lightness:l,alpha:s}){a/=360,i/=100,l/=100;let c=0,d=0,f=0;if(!i)c=d=f=l;else{const g=l<.5?l*(1+i):l+i-l*i,p=2*l-g;c=jc(p,g,a+1/3),d=jc(p,g,a),f=jc(p,g,a-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:s}}function ss(a,i){return l=>l>0?i:a}const le=(a,i,l)=>a+(i-a)*l,Vc=(a,i,l)=>{const s=a*a,c=l*(i*i-s)+s;return c<0?0:Math.sqrt(c)},z1=[Fc,ci,io],N1=a=>z1.find(i=>i.test(a));function Lm(a){const i=N1(a);if(!i)return!1;let l=i.parse(a);return i===io&&(l=C1(l)),l}const Hm=(a,i)=>{const l=Lm(a),s=Lm(i);if(!l||!s)return ss(a,i);const c={...l};return d=>(c.red=Vc(l.red,s.red,d),c.green=Vc(l.green,s.green,d),c.blue=Vc(l.blue,s.blue,d),c.alpha=le(l.alpha,s.alpha,d),ci.transform(c))},Jc=new Set(["none","hidden"]);function k1(a,i){return Jc.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function _1(a,i){return l=>le(a,i,l)}function Nf(a){return typeof a=="number"?_1:typeof a=="string"?Rf(a)?ss:ve.test(a)?Hm:U1:Array.isArray(a)?Cg:typeof a=="object"?ve.test(a)?Hm:j1:ss}function Cg(a,i){const l=[...a],s=l.length,c=a.map((d,f)=>Nf(d)(d,i[f]));return d=>{for(let f=0;f<s;f++)l[f]=c[f](d);return l}}function j1(a,i){const l={...a,...i},s={};for(const c in l)a[c]!==void 0&&i[c]!==void 0&&(s[c]=Nf(a[c])(a[c],i[c]));return c=>{for(const d in s)l[d]=s[d](c);return l}}function V1(a,i){const l=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const d=i.types[c],f=a.indexes[d][s[d]],g=a.values[f]??0;l[c]=g,s[d]++}return l}const U1=(a,i)=>{const l=qa.createTransformer(i),s=Al(a),c=Al(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?Jc.has(a)&&!c.values.length||Jc.has(i)&&!s.values.length?k1(a,i):wl(Cg(V1(s,c),c.values),l):ss(a,i)};function zg(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?le(a,i,l):Nf(a)(a,i)}const B1=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>ae.update(i,l),stop:()=>Ha(i),now:()=>Ue.isProcessing?Ue.timestamp:an.now()}},Ng=(a,i,l=10)=>{let s="";const c=Math.max(Math.round(i/l),2);for(let d=0;d<c;d++)s+=Math.round(a(d/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},us=2e4;function kf(a){let i=0;const l=50;let s=a.next(i);for(;!s.done&&i<us;)i+=l,s=a.next(i);return i>=us?1/0:i}function L1(a,i=100,l){const s=l({...a,keyframes:[0,i]}),c=Math.min(kf(s),us);return{type:"keyframes",ease:d=>s.next(c*d).value/i,duration:qn(c)}}const H1=5;function kg(a,i,l){const s=Math.max(i-H1,0);return dg(l-a(s),i-s)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Uc=.001;function q1({duration:a=ue.duration,bounce:i=ue.bounce,velocity:l=ue.velocity,mass:s=ue.mass}){let c,d,f=1-i;f=ra(ue.minDamping,ue.maxDamping,f),a=ra(ue.minDuration,ue.maxDuration,qn(a)),f<1?(c=h=>{const y=h*f,v=y*a,x=y-l,w=Wc(h,f),M=Math.exp(-v);return Uc-x/w*M},d=h=>{const v=h*f*a,x=v*l+l,w=Math.pow(f,2)*Math.pow(h,2)*a,M=Math.exp(-v),D=Wc(Math.pow(h,2),f);return(-c(h)+Uc>0?-1:1)*((x-w)*M)/D}):(c=h=>{const y=Math.exp(-h*a),v=(h-l)*a+1;return-Uc+y*v},d=h=>{const y=Math.exp(-h*a),v=(l-h)*(a*a);return y*v});const g=5/a,p=Y1(c,d,g);if(a=Hn(a),isNaN(p))return{stiffness:ue.stiffness,damping:ue.damping,duration:a};{const h=Math.pow(p,2)*s;return{stiffness:h,damping:f*2*Math.sqrt(s*h),duration:a}}}const P1=12;function Y1(a,i,l){let s=l;for(let c=1;c<P1;c++)s=s-a(s)/i(s);return s}function Wc(a,i){return a*Math.sqrt(1-i*i)}const X1=["duration","bounce"],G1=["stiffness","damping","mass"];function qm(a,i){return i.some(l=>a[l]!==void 0)}function Z1(a){let i={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...a};if(!qm(a,G1)&&qm(a,X1))if(a.visualDuration){const l=a.visualDuration,s=2*Math.PI/(l*1.2),c=s*s,d=2*ra(.05,1,1-(a.bounce||0))*Math.sqrt(c);i={...i,mass:ue.mass,stiffness:c,damping:d}}else{const l=q1(a);i={...i,...l,mass:ue.mass},i.isResolvedFromDuration=!0}return i}function cs(a=ue.visualDuration,i=ue.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:s,restDelta:c}=l;const d=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],g={done:!1,value:d},{stiffness:p,damping:h,mass:y,duration:v,velocity:x,isResolvedFromDuration:w}=Z1({...l,velocity:-qn(l.velocity||0)}),M=x||0,D=h/(2*Math.sqrt(p*y)),_=f-d,B=qn(Math.sqrt(p/y)),Y=Math.abs(_)<5;s||(s=Y?ue.restSpeed.granular:ue.restSpeed.default),c||(c=Y?ue.restDelta.granular:ue.restDelta.default);let q;if(D<1){const P=Wc(B,D);q=F=>{const Q=Math.exp(-D*B*F);return f-Q*((M+D*B*_)/P*Math.sin(P*F)+_*Math.cos(P*F))}}else if(D===1)q=P=>f-Math.exp(-B*P)*(_+(M+B*_)*P);else{const P=B*Math.sqrt(D*D-1);q=F=>{const Q=Math.exp(-D*B*F),G=Math.min(P*F,300);return f-Q*((M+D*B*_)*Math.sinh(G)+P*_*Math.cosh(G))/P}}const W={calculatedDuration:w&&v||null,next:P=>{const F=q(P);if(w)g.done=P>=v;else{let Q=P===0?M:0;D<1&&(Q=P===0?Hn(M):kg(q,P,F));const G=Math.abs(Q)<=s,lt=Math.abs(f-F)<=c;g.done=G&&lt}return g.value=g.done?f:F,g},toString:()=>{const P=Math.min(kf(W),us),F=Ng(Q=>W.next(P*Q).value,P,30);return P+"ms "+F},toTransition:()=>{}};return W}cs.applyToOptions=a=>{const i=L1(a,100,cs);return a.ease=i.ease,a.duration=Hn(i.duration),a.type="keyframes",a};function $c({keyframes:a,velocity:i=0,power:l=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:g,max:p,restDelta:h=.5,restSpeed:y}){const v=a[0],x={done:!1,value:v},w=G=>g!==void 0&&G<g||p!==void 0&&G>p,M=G=>g===void 0?p:p===void 0||Math.abs(g-G)<Math.abs(p-G)?g:p;let D=l*i;const _=v+D,B=f===void 0?_:f(_);B!==_&&(D=B-v);const Y=G=>-D*Math.exp(-G/s),q=G=>B+Y(G),W=G=>{const lt=Y(G),ct=q(G);x.done=Math.abs(lt)<=h,x.value=x.done?B:ct};let P,F;const Q=G=>{w(x.value)&&(P=G,F=cs({keyframes:[x.value,M(x.value)],velocity:kg(q,G,x.value),damping:c,stiffness:d,restDelta:h,restSpeed:y}))};return Q(0),{calculatedDuration:null,next:G=>{let lt=!1;return!F&&P===void 0&&(lt=!0,W(G),Q(G)),P!==void 0&&G>=P?F.next(G-P):(!lt&&W(G),x)}}}function Q1(a,i,l){const s=[],c=l||sa.mix||zg,d=a.length-1;for(let f=0;f<d;f++){let g=c(a[f],a[f+1]);if(i){const p=Array.isArray(i)?i[f]||On:i;g=wl(p,g)}s.push(g)}return s}function K1(a,i,{clamp:l=!0,ease:s,mixer:c}={}){const d=a.length;if(Af(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=a[0]===a[1];a[0]>a[d-1]&&(a=[...a].reverse(),i=[...i].reverse());const g=Q1(i,s,c),p=g.length,h=y=>{if(f&&y<a[0])return i[0];let v=0;if(p>1)for(;v<a.length-2&&!(y<a[v+1]);v++);const x=Sl(a[v],a[v+1],y);return g[v](x)};return l?y=>h(ra(a[0],a[d-1],y)):h}function F1(a,i){const l=a[a.length-1];for(let s=1;s<=i;s++){const c=Sl(0,i,s);a.push(le(l,1,c))}}function J1(a){const i=[0];return F1(i,a.length-1),i}function W1(a,i){return a.map(l=>l*i)}function $1(a,i){return a.map(()=>i||Sg).splice(0,a.length-1)}function yl({duration:a=300,keyframes:i,times:l,ease:s="easeInOut"}){const c=u1(s)?s.map(Vm):Vm(s),d={done:!1,value:i[0]},f=W1(l&&l.length===i.length?l:J1(i),a),g=K1(f,i,{ease:Array.isArray(c)?c:$1(i,c)});return{calculatedDuration:a,next:p=>(d.value=g(p),d.done=p>=a,d)}}const I1=a=>a!==null;function _f(a,{repeat:i,repeatType:l="loop"},s,c=1){const d=a.filter(I1),g=c<0||i&&l!=="loop"&&i%2===1?0:d.length-1;return!g||s===void 0?d[g]:s}const t2={decay:$c,inertia:$c,tween:yl,keyframes:yl,spring:cs};function _g(a){typeof a.type=="string"&&(a.type=t2[a.type])}class jf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const e2=a=>a/100;class Vf extends jf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==an.now()&&this.tick(an.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;_g(i);const{type:l=yl,repeat:s=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=i;let{keyframes:g}=i;const p=l||yl;p!==yl&&typeof g[0]!="number"&&(this.mixKeyframes=wl(e2,zg(g[0],g[1])),g=[0,100]);const h=p({...i,keyframes:g});d==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...g].reverse(),velocity:-f})),h.calculatedDuration===null&&(h.calculatedDuration=kf(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=h}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:s,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:w,type:M,onUpdate:D,finalKeyframe:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const B=this.currentTime-h*(this.playbackSpeed>=0?1:-1),Y=this.playbackSpeed>=0?B<0:B>c;this.currentTime=Math.max(B,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let q=this.currentTime,W=s;if(v){const G=Math.min(this.currentTime,c)/g;let lt=Math.floor(G),ct=G%1;!ct&&G>=1&&(ct=1),ct===1&&lt--,lt=Math.min(lt,v+1),!!(lt%2)&&(x==="reverse"?(ct=1-ct,w&&(ct-=w/g)):x==="mirror"&&(W=f)),q=ra(0,1,ct)*g}const P=Y?{done:!1,value:y[0]}:W.next(q);d&&(P.value=d(P.value));let{done:F}=P;!Y&&p!==null&&(F=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return Q&&M!==$c&&(P.value=_f(y,this.options,_,this.speed)),D&&D(P.value),Q&&this.finish(),P}then(i,l){return this.finished.then(i,l)}get duration(){return qn(this.calculatedDuration)}get time(){return qn(this.currentTime)}set time(i){i=Hn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(an.now());const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=qn(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=B1,startTime:l}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=l??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(an.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function n2(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const fi=a=>a*180/Math.PI,Ic=a=>{const i=fi(Math.atan2(a[1],a[0]));return tf(i)},a2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Ic,rotateZ:Ic,skewX:a=>fi(Math.atan(a[1])),skewY:a=>fi(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},tf=a=>(a=a%360,a<0&&(a+=360),a),Pm=Ic,Ym=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Xm=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),i2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ym,scaleY:Xm,scale:a=>(Ym(a)+Xm(a))/2,rotateX:a=>tf(fi(Math.atan2(a[6],a[5]))),rotateY:a=>tf(fi(Math.atan2(-a[2],a[0]))),rotateZ:Pm,rotate:Pm,skewX:a=>fi(Math.atan(a[4])),skewY:a=>fi(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function ef(a){return a.includes("scale")?1:0}function nf(a,i){if(!a||a==="none")return ef(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(l)s=i2,c=l;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=a2,c=g}if(!c)return ef(i);const d=s[i],f=c[1].split(",").map(l2);return typeof d=="function"?d(f):f[d]}const o2=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return nf(l,i)};function l2(a){return parseFloat(a.trim())}const ho=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mo=new Set(ho),Gm=a=>a===fo||a===mt,r2=new Set(["x","y","z"]),s2=ho.filter(a=>!r2.has(a));function u2(a){const i=[];return s2.forEach(l=>{const s=a.getValue(l);s!==void 0&&(i.push([l,s.get()]),s.set(l.startsWith("scale")?1:0))}),i}const di={width:({x:a},{paddingLeft:i="0",paddingRight:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),height:({y:a},{paddingTop:i="0",paddingBottom:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>nf(i,"x"),y:(a,{transform:i})=>nf(i,"y")};di.translateX=di.x;di.translateY=di.y;const hi=new Set;let af=!1,of=!1,lf=!1;function jg(){if(of){const a=Array.from(hi).filter(s=>s.needsMeasurement),i=new Set(a.map(s=>s.element)),l=new Map;i.forEach(s=>{const c=u2(s);c.length&&(l.set(s,c),s.render())}),a.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=l.get(s);c&&c.forEach(([d,f])=>{s.getValue(d)?.set(f)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}of=!1,af=!1,hi.forEach(a=>a.complete(lf)),hi.clear()}function Vg(){hi.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(of=!0)})}function c2(){lf=!0,Vg(),jg(),lf=!1}class Uf{constructor(i,l,s,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=s,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(hi.add(this),af||(af=!0,ae.read(Vg),ae.resolveKeyframes(jg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:s,motionValue:c}=this;if(i[0]===null){const d=c?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&l){const g=s.readValue(l,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),c&&d===void 0&&c.set(i[0])}n2(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),hi.delete(this)}cancel(){this.state==="scheduled"&&(hi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const f2=a=>a.startsWith("--");function d2(a,i,l){f2(i)?a.style.setProperty(i,l):a.style[i]=l}const h2=Of(()=>window.ScrollTimeline!==void 0),m2={};function p2(a,i){const l=Of(a);return()=>m2[i]??l()}const Ug=p2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ml=([a,i,l,s])=>`cubic-bezier(${a}, ${i}, ${l}, ${s})`,Zm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ml([0,.65,.55,1]),circOut:ml([.55,0,1,.45]),backIn:ml([.31,.01,.66,-.59]),backOut:ml([.33,1.53,.69,.99])};function Bg(a,i){if(a)return typeof a=="function"?Ug()?Ng(a,i):"ease-out":Tg(a)?ml(a):Array.isArray(a)?a.map(l=>Bg(l,i)||Zm.easeOut):Zm[a]}function g2(a,i,l,{delay:s=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:g="easeOut",times:p}={},h=void 0){const y={[i]:l};p&&(y.offset=p);const v=Bg(g,c);Array.isArray(v)&&(y.easing=v);const x={delay:s,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return h&&(x.pseudoElement=h),a.animate(y,x)}function Lg(a){return typeof a=="function"&&"applyToOptions"in a}function y2({type:a,...i}){return Lg(a)&&Ug()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class b2 extends jf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:l,name:s,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:g,onComplete:p}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,Af(typeof i.type!="string");const h=y2(i);this.animation=g2(l,s,c,h,d),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=_f(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):d2(l,s,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return qn(Number(i))}get time(){return qn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=Hn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&h2()?(this.animation.timeline=i,On):l(this)}}const Hg={anticipate:bg,backInOut:yg,circInOut:xg};function v2(a){return a in Hg}function x2(a){typeof a.ease=="string"&&v2(a.ease)&&(a.ease=Hg[a.ease])}const Qm=10;class S2 extends b2{constructor(i){x2(i),_g(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:s,onComplete:c,element:d,...f}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const g=new Vf({...f,autoplay:!1}),p=Hn(this.finishedTime??this.time);l.setWithVelocity(g.sample(p-Qm).value,g.sample(p).value,Qm),g.stop()}}const Km=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(qa.test(a)||a==="0")&&!a.startsWith("url("));function T2(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function A2(a,i,l,s){const c=a[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const d=a[a.length-1],f=Km(c,i),g=Km(d,i);return!f||!g?!1:T2(a)||(l==="spring"||Lg(l))&&s}const O2=new Set(["opacity","clipPath","filter","transform"]),D2=Of(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function M2(a){const{motionValue:i,name:l,repeatDelay:s,repeatType:c,damping:d,type:f}=a;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:h}=i.owner.getProps();return D2()&&l&&O2.has(l)&&(l!=="transform"||!h)&&!p&&!s&&c!=="mirror"&&d!==0&&f!=="inertia"}const E2=40;class w2 extends jf{constructor({autoplay:i=!0,delay:l=0,type:s="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:g,name:p,motionValue:h,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=an.now();const x={autoplay:i,delay:l,type:s,repeat:c,repeatDelay:d,repeatType:f,name:p,motionValue:h,element:y,...v},w=y?.KeyframeResolver||Uf;this.keyframeResolver=new w(g,(M,D,_)=>this.onKeyframesResolved(M,D,x,!_),p,h,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,s,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:g,delay:p,isHandoff:h,onUpdate:y}=s;this.resolvedAt=an.now(),A2(i,d,f,g)||((sa.instantAnimations||!p)&&y?.(_f(i,s,l)),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>E2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...s,keyframes:i},w=!h&&M2(x)?new S2({...x,element:x.motionValue.owner.current}):new Vf(x);w.finished.then(()=>this.notifyFinished()).catch(On),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),c2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const R2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function C2(a){const i=R2.exec(a);if(!i)return[,];const[,l,s,c]=i;return[`--${l??s}`,c]}function qg(a,i,l=1){const[s,c]=C2(a);if(!s)return;const d=window.getComputedStyle(i).getPropertyValue(s);if(d){const f=d.trim();return ug(f)?parseFloat(f):f}return Rf(c)?qg(c,i,l+1):c}function Bf(a,i){return a?.[i]??a?.default??a}const Pg=new Set(["width","height","top","left","right","bottom",...ho]),z2={test:a=>a==="auto",parse:a=>a},Yg=a=>i=>i.test(a),Xg=[fo,mt,Pn,La,T1,S1,z2],Fm=a=>Xg.find(Yg(a));function N2(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||fg(a):!0}const k2=new Set(["brightness","contrast","saturate","opacity"]);function _2(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[s]=l.match(Cf)||[];if(!s)return a;const c=l.replace(s,"");let d=k2.has(i)?1:0;return s!==l&&(d*=100),i+"("+d+c+")"}const j2=/\b([a-z-]*)\(.*?\)/gu,rf={...qa,getAnimatableNone:a=>{const i=a.match(j2);return i?i.map(_2).join(" "):a}},Jm={...fo,transform:Math.round},V2={rotate:La,rotateX:La,rotateY:La,rotateZ:La,scale:Ir,scaleX:Ir,scaleY:Ir,scaleZ:Ir,skew:La,skewX:La,skewY:La,distance:mt,translateX:mt,translateY:mt,translateZ:mt,x:mt,y:mt,z:mt,perspective:mt,transformPerspective:mt,opacity:Tl,originX:Um,originY:Um,originZ:mt},Lf={borderWidth:mt,borderTopWidth:mt,borderRightWidth:mt,borderBottomWidth:mt,borderLeftWidth:mt,borderRadius:mt,radius:mt,borderTopLeftRadius:mt,borderTopRightRadius:mt,borderBottomRightRadius:mt,borderBottomLeftRadius:mt,width:mt,maxWidth:mt,height:mt,maxHeight:mt,top:mt,right:mt,bottom:mt,left:mt,padding:mt,paddingTop:mt,paddingRight:mt,paddingBottom:mt,paddingLeft:mt,margin:mt,marginTop:mt,marginRight:mt,marginBottom:mt,marginLeft:mt,backgroundPositionX:mt,backgroundPositionY:mt,...V2,zIndex:Jm,fillOpacity:Tl,strokeOpacity:Tl,numOctaves:Jm},U2={...Lf,color:ve,backgroundColor:ve,outlineColor:ve,fill:ve,stroke:ve,borderColor:ve,borderTopColor:ve,borderRightColor:ve,borderBottomColor:ve,borderLeftColor:ve,filter:rf,WebkitFilter:rf},Gg=a=>U2[a];function Zg(a,i){let l=Gg(a);return l!==rf&&(l=qa),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const B2=new Set(["auto","none","0"]);function L2(a,i,l){let s=0,c;for(;s<a.length&&!c;){const d=a[s];typeof d=="string"&&!B2.has(d)&&Al(d).values.length&&(c=a[s]),s++}if(c&&l)for(const d of i)a[d]=Zg(l,c)}class H2 extends Uf{constructor(i,l,s,c,d){super(i,l,s,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:s}=this;if(!l||!l.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let h=i[p];if(typeof h=="string"&&(h=h.trim(),Rf(h))){const y=qg(h,l.current);y!==void 0&&(i[p]=y),p===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Pg.has(s)||i.length!==2)return;const[c,d]=i,f=Fm(c),g=Fm(d);if(f!==g)if(Gm(f)&&Gm(g))for(let p=0;p<i.length;p++){const h=i[p];typeof h=="string"&&(i[p]=parseFloat(h))}else di[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||N2(i[c]))&&s.push(c);s.length&&L2(i,s,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=di[s](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const c=l[l.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(l);c&&c.jump(this.measuredOrigin,!1);const d=s.length-1,f=s[d];s[d]=di[l](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,p])=>{i.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function q2(a,i,l){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const c=l?.[a]??s.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a)}const Qg=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function Kg(a){return cg(a)&&"offsetHeight"in a}const Wm=30,P2=a=>!isNaN(parseFloat(a));class Y2{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const d=an.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty();c&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=an.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=P2(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new Df);const s=this.events[i].add(l);return i==="change"?()=>{s(),ae.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i,l=!0){!l||!this.passiveEffect?this.updateAndNotify(i,l):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,l,s){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=an.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Wm)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,Wm);return dg(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function uo(a,i){return new Y2(a,i)}const{schedule:Hf}=Ag(queueMicrotask,!1),Rn={x:!1,y:!1};function Fg(){return Rn.x||Rn.y}function X2(a){return a==="x"||a==="y"?Rn[a]?null:(Rn[a]=!0,()=>{Rn[a]=!1}):Rn.x||Rn.y?null:(Rn.x=Rn.y=!0,()=>{Rn.x=Rn.y=!1})}function Jg(a,i){const l=q2(a),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[l,c,()=>s.abort()]}function $m(a){return!(a.pointerType==="touch"||Fg())}function G2(a,i,l={}){const[s,c,d]=Jg(a,l),f=g=>{if(!$m(g))return;const{target:p}=g,h=i(p,g);if(typeof h!="function"||!p)return;const y=v=>{$m(v)&&(h(v),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,c)};return s.forEach(g=>{g.addEventListener("pointerenter",f,c)}),d}const Wg=(a,i)=>i?a===i?!0:Wg(a,i.parentElement):!1,qf=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,Z2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Q2(a){return Z2.has(a.tagName)||a.tabIndex!==-1}const os=new WeakSet;function Im(a){return i=>{i.key==="Enter"&&a(i)}}function Bc(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const K2=(a,i)=>{const l=a.currentTarget;if(!l)return;const s=Im(()=>{if(os.has(l))return;Bc(l,"down");const c=Im(()=>{Bc(l,"up")}),d=()=>Bc(l,"cancel");l.addEventListener("keyup",c,i),l.addEventListener("blur",d,i)});l.addEventListener("keydown",s,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",s),i)};function tp(a){return qf(a)&&!Fg()}function F2(a,i,l={}){const[s,c,d]=Jg(a,l),f=g=>{const p=g.currentTarget;if(!tp(g))return;os.add(p);const h=i(p,g),y=(w,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),os.has(p)&&os.delete(p),tp(w)&&typeof h=="function"&&h(w,{success:M})},v=w=>{y(w,p===window||p===document||l.useGlobalTarget||Wg(p,w.target))},x=w=>{y(w,!1)};window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",x,c)};return s.forEach(g=>{(l.useGlobalTarget?window:g).addEventListener("pointerdown",f,c),Kg(g)&&(g.addEventListener("focus",h=>K2(h,c)),!Q2(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),d}function $g(a){return cg(a)&&"ownerSVGElement"in a}function J2(a){return $g(a)&&a.tagName==="svg"}const Ge=a=>!!(a&&a.getVelocity),W2=[...Xg,ve,qa],$2=a=>W2.find(Yg(a)),Pf=X.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});class I2 extends X.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(l&&i.isPresent&&!this.props.isPresent){const s=l.offsetParent,c=Kg(s)&&s.offsetWidth||0,d=this.props.sizeRef.current;d.height=l.offsetHeight||0,d.width=l.offsetWidth||0,d.top=l.offsetTop,d.left=l.offsetLeft,d.right=c-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function tx({children:a,isPresent:i,anchorX:l,root:s}){const c=X.useId(),d=X.useRef(null),f=X.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:g}=X.useContext(Pf);return X.useInsertionEffect(()=>{const{width:p,height:h,top:y,left:v,right:x}=f.current;if(i||!d.current||!p||!h)return;const w=l==="left"?`left: ${v}`:`right: ${x}`;d.current.dataset.motionPopId=c;const M=document.createElement("style");g&&(M.nonce=g);const D=s??document.head;return D.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${w}px !important;
            top: ${y}px !important;
          }
        `),()=>{D.removeChild(M),D.contains(M)&&D.removeChild(M)}},[i]),O.jsx(I2,{isPresent:i,childRef:d,sizeRef:f,children:X.cloneElement(a,{ref:d})})}const ex=({children:a,initial:i,isPresent:l,onExitComplete:s,custom:c,presenceAffectsLayout:d,mode:f,anchorX:g,root:p})=>{const h=vf(nx),y=X.useId();let v=!0,x=X.useMemo(()=>(v=!1,{id:y,initial:i,isPresent:l,custom:c,onExitComplete:w=>{h.set(w,!0);for(const M of h.values())if(!M)return;s&&s()},register:w=>(h.set(w,!1),()=>h.delete(w))}),[l,h,s]);return d&&v&&(x={...x}),X.useMemo(()=>{h.forEach((w,M)=>h.set(M,!1))},[l]),X.useEffect(()=>{!l&&!h.size&&s&&s()},[l]),f==="popLayout"&&(a=O.jsx(tx,{isPresent:l,anchorX:g,root:p,children:a})),O.jsx(ms.Provider,{value:x,children:a})};function nx(){return new Map}function Ig(a=!0){const i=X.useContext(ms);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:s,register:c}=i,d=X.useId();X.useEffect(()=>{if(a)return c(d)},[a]);const f=X.useCallback(()=>a&&s&&s(d),[d,s,a]);return!l&&s?[!1,f]:[!0]}const ts=a=>a.key||"";function ep(a){const i=[];return X.Children.forEach(a,l=>{X.isValidElement(l)&&i.push(l)}),i}const ty=({children:a,custom:i,initial:l=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:d="sync",propagate:f=!1,anchorX:g="left",root:p})=>{const[h,y]=Ig(f),v=X.useMemo(()=>ep(a),[a]),x=f&&!h?[]:v.map(ts),w=X.useRef(!0),M=X.useRef(v),D=vf(()=>new Map),[_,B]=X.useState(v),[Y,q]=X.useState(v);sg(()=>{w.current=!1,M.current=v;for(let F=0;F<Y.length;F++){const Q=ts(Y[F]);x.includes(Q)?D.delete(Q):D.get(Q)!==!0&&D.set(Q,!1)}},[Y,x.length,x.join("-")]);const W=[];if(v!==_){let F=[...v];for(let Q=0;Q<Y.length;Q++){const G=Y[Q],lt=ts(G);x.includes(lt)||(F.splice(Q,0,G),W.push(G))}return d==="wait"&&W.length&&(F=W),q(ep(F)),B(v),null}const{forceRender:P}=X.useContext(bf);return O.jsx(O.Fragment,{children:Y.map(F=>{const Q=ts(F),G=f&&!h?!1:v===Y||x.includes(Q),lt=()=>{if(D.has(Q))D.set(Q,!0);else return;let ct=!0;D.forEach(jt=>{jt||(ct=!1)}),ct&&(P?.(),q(M.current),f&&y?.(),s&&s())};return O.jsx(ex,{isPresent:G,initial:!w.current||l?void 0:!1,custom:i,presenceAffectsLayout:c,mode:d,root:p,onExitComplete:G?void 0:lt,anchorX:g,children:F},Q)})})},ey=X.createContext({strict:!1}),np={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},co={};for(const a in np)co[a]={isEnabled:i=>np[a].some(l=>!!i[l])};function ax(a){for(const i in a)co[i]={...co[i],...a[i]}}const ix=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fs(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||ix.has(a)}let ny=a=>!fs(a);function ox(a){typeof a=="function"&&(ny=i=>i.startsWith("on")?!fs(i):a(i))}try{ox(require("@emotion/is-prop-valid").default)}catch{}function lx(a,i,l){const s={};for(const c in a)c==="values"&&typeof a.values=="object"||(ny(c)||l===!0&&fs(c)||!i&&!fs(c)||a.draggable&&c.startsWith("onDrag"))&&(s[c]=a[c]);return s}const ps=X.createContext({});function gs(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Ol(a){return typeof a=="string"||Array.isArray(a)}const Yf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xf=["initial",...Yf];function ys(a){return gs(a.animate)||Xf.some(i=>Ol(a[i]))}function ay(a){return!!(ys(a)||a.variants)}function rx(a,i){if(ys(a)){const{initial:l,animate:s}=a;return{initial:l===!1||Ol(l)?l:void 0,animate:Ol(s)?s:void 0}}return a.inherit!==!1?i:{}}function sx(a){const{initial:i,animate:l}=rx(a,X.useContext(ps));return X.useMemo(()=>({initial:i,animate:l}),[ap(i),ap(l)])}function ap(a){return Array.isArray(a)?a.join(" "):a}const Dl={};function ux(a){for(const i in a)Dl[i]=a[i],wf(i)&&(Dl[i].isCSSVariable=!0)}function iy(a,{layout:i,layoutId:l}){return mo.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!Dl[a]||a==="opacity")}const cx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},fx=ho.length;function dx(a,i,l){let s="",c=!0;for(let d=0;d<fx;d++){const f=ho[d],g=a[f];if(g===void 0)continue;let p=!0;if(typeof g=="number"?p=g===(f.startsWith("scale")?1:0):p=parseFloat(g)===0,!p||l){const h=Qg(g,Lf[f]);if(!p){c=!1;const y=cx[f]||f;s+=`${y}(${h}) `}l&&(i[f]=h)}}return s=s.trim(),l?s=l(i,c?"":s):c&&(s="none"),s}function Gf(a,i,l){const{style:s,vars:c,transformOrigin:d}=a;let f=!1,g=!1;for(const p in i){const h=i[p];if(mo.has(p)){f=!0;continue}else if(wf(p)){c[p]=h;continue}else{const y=Qg(h,Lf[p]);p.startsWith("origin")?(g=!0,d[p]=y):s[p]=y}}if(i.transform||(f||l?s.transform=dx(i,a.transform,l):s.transform&&(s.transform="none")),g){const{originX:p="50%",originY:h="50%",originZ:y=0}=d;s.transformOrigin=`${p} ${h} ${y}`}}const Zf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function oy(a,i,l){for(const s in i)!Ge(i[s])&&!iy(s,l)&&(a[s]=i[s])}function hx({transformTemplate:a},i){return X.useMemo(()=>{const l=Zf();return Gf(l,i,a),Object.assign({},l.vars,l.style)},[i])}function mx(a,i){const l=a.style||{},s={};return oy(s,l,a),Object.assign(s,hx(a,i)),s}function px(a,i){const l={},s=mx(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=s,l}const gx={offset:"stroke-dashoffset",array:"stroke-dasharray"},yx={offset:"strokeDashoffset",array:"strokeDasharray"};function bx(a,i,l=1,s=0,c=!0){a.pathLength=1;const d=c?gx:yx;a[d.offset]=mt.transform(-s);const f=mt.transform(i),g=mt.transform(l);a[d.array]=`${f} ${g}`}function ly(a,{attrX:i,attrY:l,attrScale:s,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...g},p,h,y){if(Gf(a,g,h),p){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:v,style:x}=a;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=y?.transformBox??"fill-box",delete v.transformBox),i!==void 0&&(v.x=i),l!==void 0&&(v.y=l),s!==void 0&&(v.scale=s),c!==void 0&&bx(v,c,d,f,!1)}const ry=()=>({...Zf(),attrs:{}}),sy=a=>typeof a=="string"&&a.toLowerCase()==="svg";function vx(a,i,l,s){const c=X.useMemo(()=>{const d=ry();return ly(d,i,sy(s),a.transformTemplate,a.style),{...d.attrs,style:{...d.style}}},[i]);if(a.style){const d={};oy(d,a.style,a),c.style={...d,...c.style}}return c}const xx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qf(a){return typeof a!="string"||a.includes("-")?!1:!!(xx.indexOf(a)>-1||/[A-Z]/u.test(a))}function Sx(a,i,l,{latestValues:s},c,d=!1){const g=(Qf(a)?vx:px)(i,s,c,a),p=lx(i,typeof a=="string",d),h=a!==X.Fragment?{...p,...g,ref:l}:{},{children:y}=i,v=X.useMemo(()=>Ge(y)?y.get():y,[y]);return X.createElement(a,{...h,children:v})}function ip(a){const i=[{},{}];return a?.values.forEach((l,s)=>{i[0][s]=l.get(),i[1][s]=l.getVelocity()}),i}function Kf(a,i,l,s){if(typeof i=="function"){const[c,d]=ip(s);i=i(l!==void 0?l:a.custom,c,d)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[c,d]=ip(s);i=i(l!==void 0?l:a.custom,c,d)}return i}function ls(a){return Ge(a)?a.get():a}function Tx({scrapeMotionValuesFromProps:a,createRenderState:i},l,s,c){return{latestValues:Ax(l,s,c,a),renderState:i()}}function Ax(a,i,l,s){const c={},d=s(a,{});for(const x in d)c[x]=ls(d[x]);let{initial:f,animate:g}=a;const p=ys(a),h=ay(a);i&&h&&!p&&a.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=l?l.initial===!1:!1;y=y||f===!1;const v=y?g:f;if(v&&typeof v!="boolean"&&!gs(v)){const x=Array.isArray(v)?v:[v];for(let w=0;w<x.length;w++){const M=Kf(a,x[w]);if(M){const{transitionEnd:D,transition:_,...B}=M;for(const Y in B){let q=B[Y];if(Array.isArray(q)){const W=y?q.length-1:0;q=q[W]}q!==null&&(c[Y]=q)}for(const Y in D)c[Y]=D[Y]}}}return c}const uy=a=>(i,l)=>{const s=X.useContext(ps),c=X.useContext(ms),d=()=>Tx(a,i,s,c);return l?d():vf(d)};function Ff(a,i,l){const{style:s}=a,c={};for(const d in s)(Ge(s[d])||i.style&&Ge(i.style[d])||iy(d,a)||l?.getValue(d)?.liveStyle!==void 0)&&(c[d]=s[d]);return c}const Ox=uy({scrapeMotionValuesFromProps:Ff,createRenderState:Zf});function cy(a,i,l){const s=Ff(a,i,l);for(const c in a)if(Ge(a[c])||Ge(i[c])){const d=ho.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[d]=a[c]}return s}const Dx=uy({scrapeMotionValuesFromProps:cy,createRenderState:ry}),Mx=Symbol.for("motionComponentSymbol");function oo(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function Ex(a,i,l){return X.useCallback(s=>{s&&a.onMount&&a.onMount(s),i&&(s?i.mount(s):i.unmount()),l&&(typeof l=="function"?l(s):oo(l)&&(l.current=s))},[i])}const Jf=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),wx="framerAppearId",fy="data-"+Jf(wx),dy=X.createContext({});function Rx(a,i,l,s,c){const{visualElement:d}=X.useContext(ps),f=X.useContext(ey),g=X.useContext(ms),p=X.useContext(Pf).reducedMotion,h=X.useRef(null);s=s||f.renderer,!h.current&&s&&(h.current=s(a,{visualState:i,parent:d,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:p}));const y=h.current,v=X.useContext(dy);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&Cx(h.current,l,c,v);const x=X.useRef(!1);X.useInsertionEffect(()=>{y&&x.current&&y.update(l,g)});const w=l[fy],M=X.useRef(!!w&&!window.MotionHandoffIsComplete?.(w)&&window.MotionHasOptimisedAnimation?.(w));return sg(()=>{y&&(x.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),M.current&&y.animationState&&y.animationState.animateChanges())}),X.useEffect(()=>{y&&(!M.current&&y.animationState&&y.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(w)}),M.current=!1))}),y}function Cx(a,i,l,s){const{layoutId:c,layout:d,drag:f,dragConstraints:g,layoutScroll:p,layoutRoot:h,layoutCrossfade:y}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:hy(a.parent)),a.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||g&&oo(g),visualElement:a,animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:h})}function hy(a){if(a)return a.options.allowProjection!==!1?a.projection:hy(a.parent)}function Lc(a,{forwardMotionProps:i=!1}={},l,s){l&&ax(l);const c=Qf(a)?Dx:Ox;function d(g,p){let h;const y={...X.useContext(Pf),...g,layoutId:zx(g)},{isStatic:v}=y,x=sx(g),w=c(g,v);if(!v&&xf){Nx();const M=kx(y);h=M.MeasureLayout,x.visualElement=Rx(a,w,y,s,M.ProjectionNode)}return O.jsxs(ps.Provider,{value:x,children:[h&&x.visualElement?O.jsx(h,{visualElement:x.visualElement,...y}):null,Sx(a,g,Ex(w,x.visualElement,p),w,v,i)]})}d.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=X.forwardRef(d);return f[Mx]=a,f}function zx({layoutId:a}){const i=X.useContext(bf).id;return i&&a!==void 0?i+"-"+a:a}function Nx(a,i){X.useContext(ey).strict}function kx(a){const{drag:i,layout:l}=co;if(!i&&!l)return{};const s={...i,...l};return{MeasureLayout:i?.isEnabled(a)||l?.isEnabled(a)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function _x(a,i){if(typeof Proxy>"u")return Lc;const l=new Map,s=(d,f)=>Lc(d,f,a,i),c=(d,f)=>s(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?s:(l.has(f)||l.set(f,Lc(f,void 0,a,i)),l.get(f))})}function my({top:a,left:i,right:l,bottom:s}){return{x:{min:i,max:l},y:{min:a,max:s}}}function jx({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function Vx(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),s=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:s.y,right:s.x}}function Hc(a){return a===void 0||a===1}function sf({scale:a,scaleX:i,scaleY:l}){return!Hc(a)||!Hc(i)||!Hc(l)}function ui(a){return sf(a)||py(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function py(a){return op(a.x)||op(a.y)}function op(a){return a&&a!=="0%"}function ds(a,i,l){const s=a-l,c=i*s;return l+c}function lp(a,i,l,s,c){return c!==void 0&&(a=ds(a,c,s)),ds(a,l,s)+i}function uf(a,i=0,l=1,s,c){a.min=lp(a.min,i,l,s,c),a.max=lp(a.max,i,l,s,c)}function gy(a,{x:i,y:l}){uf(a.x,i.translate,i.scale,i.originPoint),uf(a.y,l.translate,l.scale,l.originPoint)}const rp=.999999999999,sp=1.0000000000001;function Ux(a,i,l,s=!1){const c=l.length;if(!c)return;i.x=i.y=1;let d,f;for(let g=0;g<c;g++){d=l[g],f=d.projectionDelta;const{visualElement:p}=d.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ro(a,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,gy(a,f)),s&&ui(d.latestValues)&&ro(a,d.latestValues))}i.x<sp&&i.x>rp&&(i.x=1),i.y<sp&&i.y>rp&&(i.y=1)}function lo(a,i){a.min=a.min+i,a.max=a.max+i}function up(a,i,l,s,c=.5){const d=le(a.min,a.max,c);uf(a,i,l,d,s)}function ro(a,i){up(a.x,i.x,i.scaleX,i.scale,i.originX),up(a.y,i.y,i.scaleY,i.scale,i.originY)}function yy(a,i){return my(Vx(a.getBoundingClientRect(),i))}function Bx(a,i,l){const s=yy(a,l),{scroll:c}=i;return c&&(lo(s.x,c.offset.x),lo(s.y,c.offset.y)),s}const cp=()=>({translate:0,scale:1,origin:0,originPoint:0}),so=()=>({x:cp(),y:cp()}),fp=()=>({min:0,max:0}),me=()=>({x:fp(),y:fp()}),cf={current:null},by={current:!1};function Lx(){if(by.current=!0,!!xf)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>cf.current=a.matches;a.addEventListener("change",i),i()}else cf.current=!1}const Hx=new WeakMap;function qx(a,i,l){for(const s in i){const c=i[s],d=l[s];if(Ge(c))a.addValue(s,c);else if(Ge(d))a.addValue(s,uo(c,{owner:a}));else if(d!==c)if(a.hasValue(s)){const f=a.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=a.getStaticValue(s);a.addValue(s,uo(f!==void 0?f:c,{owner:a}))}}for(const s in l)i[s]===void 0&&a.removeValue(s);return i}const dp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Px{scrapeMotionValuesFromProps(i,l,s){return{}}constructor({parent:i,props:l,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Uf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=an.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,ae.render(this.render,!1,!0))};const{latestValues:p,renderState:h}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=l.initial?{...p}:{},this.renderState=h,this.parent=i,this.props=l,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!d,this.isControllingVariants=ys(l),this.isVariantNode=ay(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(l,{},this);for(const x in v){const w=v[x];p[x]!==void 0&&Ge(w)&&w.set(p[x],!1)}}mount(i){this.current=i,Hx.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,s)=>this.bindToMotionValue(s,l)),by.current||Lx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:cf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ha(this.notifyUpdate),Ha(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=mo.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=l.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&ae.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),d=l.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{c(),d(),f&&f(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in co){const l=co[i];if(!l)continue;const{isEnabled:s,Feature:c}=l;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):me()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let s=0;s<dp.length;s++){const c=dp[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=i[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=qx(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const s=this.values.get(i);l!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&l!==void 0&&(s=uo(l===null?void 0:l,{owner:this}),this.addValue(i,s)),s}readValue(i,l){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(ug(s)||fg(s))?s=parseFloat(s):!$2(s)&&qa.test(l)&&(s=Zg(i,l)),this.setBaseTarget(i,Ge(s)?s.get():s)),Ge(s)?s.get():s}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let s;if(typeof l=="string"||typeof l=="object"){const d=Kf(this.props,l,this.presenceContext?.custom);d&&(s=d[i])}if(l&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!Ge(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new Df),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){Hf.render(this.render)}}class vy extends Px{constructor(){super(...arguments),this.KeyframeResolver=H2}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:s}){delete l[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Ge(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function xy(a,{style:i,vars:l},s,c){const d=a.style;let f;for(f in i)d[f]=i[f];c?.applyProjectionStyles(d,s);for(f in l)d.setProperty(f,l[f])}function Yx(a){return window.getComputedStyle(a)}class Xx extends vy{constructor(){super(...arguments),this.type="html",this.renderInstance=xy}readValueFromInstance(i,l){if(mo.has(l))return this.projection?.isProjecting?ef(l):o2(i,l);{const s=Yx(i),c=(wf(l)?s.getPropertyValue(l):s[l])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:l}){return yy(i,l)}build(i,l,s){Gf(i,l,s.transformTemplate)}scrapeMotionValuesFromProps(i,l,s){return Ff(i,l,s)}}const Sy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Gx(a,i,l,s){xy(a,i,void 0,s);for(const c in i.attrs)a.setAttribute(Sy.has(c)?c:Jf(c),i.attrs[c])}class Zx extends vy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=me}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(mo.has(l)){const s=Gg(l);return s&&s.default||0}return l=Sy.has(l)?l:Jf(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,s){return cy(i,l,s)}build(i,l,s){ly(i,l,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,l,s,c){Gx(i,l,s,c)}mount(i){this.isSVGTag=sy(i.tagName),super.mount(i)}}const Qx=(a,i)=>Qf(a)?new Zx(i):new Xx(i,{allowProjection:a!==X.Fragment});function Ml(a,i,l){const s=a.getProps();return Kf(s,i,l!==void 0?l:s.custom,a)}const ff=a=>Array.isArray(a);function Kx(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,uo(l))}function Fx(a){return ff(a)?a[a.length-1]||0:a}function Jx(a,i){const l=Ml(a,i);let{transitionEnd:s={},transition:c={},...d}=l||{};d={...d,...s};for(const f in d){const g=Fx(d[f]);Kx(a,f,g)}}function Wx(a){return!!(Ge(a)&&a.add)}function df(a,i){const l=a.getValue("willChange");if(Wx(l))return l.add(i);if(!l&&sa.WillChange){const s=new sa.WillChange("auto");a.addValue("willChange",s),s.add(i)}}function Ty(a){return a.props[fy]}const $x=a=>a!==null;function Ix(a,{repeat:i,repeatType:l="loop"},s){const c=a.filter($x),d=i&&l!=="loop"&&i%2===1?0:c.length-1;return c[d]}const t5={type:"spring",stiffness:500,damping:25,restSpeed:10},e5=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),n5={type:"keyframes",duration:.8},a5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},i5=(a,{keyframes:i})=>i.length>2?n5:mo.has(a)?a.startsWith("scale")?e5(i[1]):t5:a5;function o5({when:a,delay:i,delayChildren:l,staggerChildren:s,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:g,from:p,elapsed:h,...y}){return!!Object.keys(y).length}const Wf=(a,i,l,s={},c,d)=>f=>{const g=Bf(s,a)||{},p=g.delay||s.delay||0;let{elapsed:h=0}=s;h=h-Hn(p);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-h,onUpdate:x=>{i.set(x),g.onUpdate&&g.onUpdate(x)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:a,motionValue:i,element:d?void 0:c};o5(g)||Object.assign(y,i5(a,y)),y.duration&&(y.duration=Hn(y.duration)),y.repeatDelay&&(y.repeatDelay=Hn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(v=!0)),(sa.instantAnimations||sa.skipAnimations)&&(v=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,v&&!d&&i.get()!==void 0){const x=Ix(y.keyframes,g);if(x!==void 0){ae.update(()=>{y.onUpdate(x),y.onComplete()});return}}return g.isSync?new Vf(y):new w2(y)};function l5({protectedKeys:a,needsAnimating:i},l){const s=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,s}function Ay(a,i,{delay:l=0,transitionOverride:s,type:c}={}){let{transition:d=a.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(d=s);const p=[],h=c&&a.animationState&&a.animationState.getState()[c];for(const y in g){const v=a.getValue(y,a.latestValues[y]??null),x=g[y];if(x===void 0||h&&l5(h,y))continue;const w={delay:l,...Bf(d||{},y)},M=v.get();if(M!==void 0&&!v.isAnimating&&!Array.isArray(x)&&x===M&&!w.velocity)continue;let D=!1;if(window.MotionHandoffAnimation){const B=Ty(a);if(B){const Y=window.MotionHandoffAnimation(B,y,ae);Y!==null&&(w.startTime=Y,D=!0)}}df(a,y),v.start(Wf(y,v,x,a.shouldReduceMotion&&Pg.has(y)?{type:!1}:w,a,D));const _=v.animation;_&&p.push(_)}return f&&Promise.all(p).then(()=>{ae.update(()=>{f&&Jx(a,f)})}),p}function hf(a,i,l={}){const s=Ml(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=s||{};l.transitionOverride&&(c=l.transitionOverride);const d=s?()=>Promise.all(Ay(a,s,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(p=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:v}=c;return r5(a,i,p,h,y,v,l)}:()=>Promise.resolve(),{when:g}=c;if(g){const[p,h]=g==="beforeChildren"?[d,f]:[f,d];return p().then(()=>h())}else return Promise.all([d(),f(l.delay)])}function r5(a,i,l=0,s=0,c=0,d=1,f){const g=[],p=a.variantChildren.size,h=(p-1)*c,y=typeof s=="function",v=y?x=>s(x,p):d===1?(x=0)=>x*c:(x=0)=>h-x*c;return Array.from(a.variantChildren).sort(s5).forEach((x,w)=>{x.notify("AnimationStart",i),g.push(hf(x,i,{...f,delay:l+(y?0:s)+v(w)}).then(()=>x.notify("AnimationComplete",i)))}),Promise.all(g)}function s5(a,i){return a.sortNodePosition(i)}function u5(a,i,l={}){a.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(d=>hf(a,d,l));s=Promise.all(c)}else if(typeof i=="string")s=hf(a,i,l);else{const c=typeof i=="function"?Ml(a,i,l.custom):i;s=Promise.all(Ay(a,c,l))}return s.then(()=>{a.notify("AnimationComplete",i)})}function Oy(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let s=0;s<l;s++)if(i[s]!==a[s])return!1;return!0}const c5=Xf.length;function Dy(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?Dy(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<c5;l++){const s=Xf[l],c=a.props[s];(Ol(c)||c===!1)&&(i[s]=c)}return i}const f5=[...Yf].reverse(),d5=Yf.length;function h5(a){return i=>Promise.all(i.map(({animation:l,options:s})=>u5(a,l,s)))}function m5(a){let i=h5(a),l=hp(),s=!0;const c=p=>(h,y)=>{const v=Ml(a,y,p==="exit"?a.presenceContext?.custom:void 0);if(v){const{transition:x,transitionEnd:w,...M}=v;h={...h,...M,...w}}return h};function d(p){i=p(a)}function f(p){const{props:h}=a,y=Dy(a.parent)||{},v=[],x=new Set;let w={},M=1/0;for(let _=0;_<d5;_++){const B=f5[_],Y=l[B],q=h[B]!==void 0?h[B]:y[B],W=Ol(q),P=B===p?Y.isActive:null;P===!1&&(M=_);let F=q===y[B]&&q!==h[B]&&W;if(F&&s&&a.manuallyAnimateOnMount&&(F=!1),Y.protectedKeys={...w},!Y.isActive&&P===null||!q&&!Y.prevProp||gs(q)||typeof q=="boolean")continue;const Q=p5(Y.prevProp,q);let G=Q||B===p&&Y.isActive&&!F&&W||_>M&&W,lt=!1;const ct=Array.isArray(q)?q:[q];let jt=ct.reduce(c(B),{});P===!1&&(jt={});const{prevResolvedValues:Gt={}}=Y,Ne={...Gt,...jt},pe=Z=>{G=!0,x.has(Z)&&(lt=!0,x.delete(Z)),Y.needsAnimating[Z]=!0;const $=a.getValue(Z);$&&($.liveStyle=!1)};for(const Z in Ne){const $=jt[Z],pt=Gt[Z];if(w.hasOwnProperty(Z))continue;let T=!1;ff($)&&ff(pt)?T=!Oy($,pt):T=$!==pt,T?$!=null?pe(Z):x.add(Z):$!==void 0&&x.has(Z)?pe(Z):Y.protectedKeys[Z]=!0}Y.prevProp=q,Y.prevResolvedValues=jt,Y.isActive&&(w={...w,...jt}),s&&a.blockInitialAnimation&&(G=!1),G&&(!(F&&Q)||lt)&&v.push(...ct.map(Z=>({animation:Z,options:{type:B}})))}if(x.size){const _={};if(typeof h.initial!="boolean"){const B=Ml(a,Array.isArray(h.initial)?h.initial[0]:h.initial);B&&B.transition&&(_.transition=B.transition)}x.forEach(B=>{const Y=a.getBaseTarget(B),q=a.getValue(B);q&&(q.liveStyle=!0),_[B]=Y??null}),v.push({animation:_})}let D=!!v.length;return s&&(h.initial===!1||h.initial===h.animate)&&!a.manuallyAnimateOnMount&&(D=!1),s=!1,D?i(v):Promise.resolve()}function g(p,h){if(l[p].isActive===h)return Promise.resolve();a.variantChildren?.forEach(v=>v.animationState?.setActive(p,h)),l[p].isActive=h;const y=f(p);for(const v in l)l[v].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:d,getState:()=>l,reset:()=>{l=hp(),s=!0}}}function p5(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!Oy(i,a):!1}function si(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function hp(){return{animate:si(!0),whileInView:si(),whileHover:si(),whileTap:si(),whileDrag:si(),whileFocus:si(),exit:si()}}class Pa{constructor(i){this.isMounted=!1,this.node=i}update(){}}class g5 extends Pa{constructor(i){super(i),i.animationState||(i.animationState=m5(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();gs(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let y5=0;class b5 extends Pa{constructor(){super(...arguments),this.id=y5++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);l&&!i&&c.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const v5={animation:{Feature:g5},exit:{Feature:b5}};function El(a,i,l,s={passive:!0}){return a.addEventListener(i,l,s),()=>a.removeEventListener(i,l)}function zl(a){return{point:{x:a.pageX,y:a.pageY}}}const x5=a=>i=>qf(i)&&a(i,zl(i));function bl(a,i,l,s){return El(a,i,x5(l),s)}const My=1e-4,S5=1-My,T5=1+My,Ey=.01,A5=0-Ey,O5=0+Ey;function Fe(a){return a.max-a.min}function D5(a,i,l){return Math.abs(a-i)<=l}function mp(a,i,l,s=.5){a.origin=s,a.originPoint=le(i.min,i.max,a.origin),a.scale=Fe(l)/Fe(i),a.translate=le(l.min,l.max,a.origin)-a.originPoint,(a.scale>=S5&&a.scale<=T5||isNaN(a.scale))&&(a.scale=1),(a.translate>=A5&&a.translate<=O5||isNaN(a.translate))&&(a.translate=0)}function vl(a,i,l,s){mp(a.x,i.x,l.x,s?s.originX:void 0),mp(a.y,i.y,l.y,s?s.originY:void 0)}function pp(a,i,l){a.min=l.min+i.min,a.max=a.min+Fe(i)}function M5(a,i,l){pp(a.x,i.x,l.x),pp(a.y,i.y,l.y)}function gp(a,i,l){a.min=i.min-l.min,a.max=a.min+Fe(i)}function xl(a,i,l){gp(a.x,i.x,l.x),gp(a.y,i.y,l.y)}function An(a){return[a("x"),a("y")]}const wy=({current:a})=>a?a.ownerDocument.defaultView:null,yp=(a,i)=>Math.abs(a-i);function E5(a,i){const l=yp(a.x,i.x),s=yp(a.y,i.y);return Math.sqrt(l**2+s**2)}class Ry{constructor(i,l,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Pc(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,M=E5(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!M)return;const{point:D}=x,{timestamp:_}=Ue;this.history.push({...D,timestamp:_});const{onStart:B,onMove:Y}=this.handlers;w||(B&&B(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),Y&&Y(this.lastMoveEvent,x)},this.handlePointerMove=(x,w)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=qc(w,this.transformPagePoint),ae.update(this.updatePoint,!0)},this.handlePointerUp=(x,w)=>{this.end();const{onEnd:M,onSessionEnd:D,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const B=Pc(x.type==="pointercancel"?this.lastMoveEventInfo:qc(w,this.transformPagePoint),this.history);this.startEvent&&M&&M(x,B),D&&D(x,B)},!qf(i))return;this.dragSnapToOrigin=d,this.handlers=l,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=c||window;const g=zl(i),p=qc(g,this.transformPagePoint),{point:h}=p,{timestamp:y}=Ue;this.history=[{...h,timestamp:y}];const{onSessionStart:v}=l;v&&v(i,Pc(p,this.history)),this.removeListeners=wl(bl(this.contextWindow,"pointermove",this.handlePointerMove),bl(this.contextWindow,"pointerup",this.handlePointerUp),bl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Ha(this.updatePoint)}}function qc(a,i){return i?{point:i(a.point)}:a}function bp(a,i){return{x:a.x-i.x,y:a.y-i.y}}function Pc({point:a},i){return{point:a,delta:bp(a,Cy(i)),offset:bp(a,w5(i)),velocity:R5(i,.1)}}function w5(a){return a[0]}function Cy(a){return a[a.length-1]}function R5(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,s=null;const c=Cy(a);for(;l>=0&&(s=a[l],!(c.timestamp-s.timestamp>Hn(i)));)l--;if(!s)return{x:0,y:0};const d=qn(c.timestamp-s.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-s.x)/d,y:(c.y-s.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function C5(a,{min:i,max:l},s){return i!==void 0&&a<i?a=s?le(i,a,s.min):Math.max(a,i):l!==void 0&&a>l&&(a=s?le(l,a,s.max):Math.min(a,l)),a}function vp(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function z5(a,{top:i,left:l,bottom:s,right:c}){return{x:vp(a.x,l,c),y:vp(a.y,i,s)}}function xp(a,i){let l=i.min-a.min,s=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,s]=[s,l]),{min:l,max:s}}function N5(a,i){return{x:xp(a.x,i.x),y:xp(a.y,i.y)}}function k5(a,i){let l=.5;const s=Fe(a),c=Fe(i);return c>s?l=Sl(i.min,i.max-s,a.min):s>c&&(l=Sl(a.min,a.max-c,i.min)),ra(0,1,l)}function _5(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const mf=.35;function j5(a=mf){return a===!1?a=0:a===!0&&(a=mf),{x:Sp(a,"left","right"),y:Sp(a,"top","bottom")}}function Sp(a,i,l){return{min:Tp(a,i),max:Tp(a,l)}}function Tp(a,i){return typeof a=="number"?a:a[i]||0}const V5=new WeakMap;class U5{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=v=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(zl(v).point)},f=(v,x)=>{const{drag:w,dragPropagation:M,onDragStart:D}=this.getProps();if(w&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=X2(w),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),An(B=>{let Y=this.getAxisMotionValue(B).get()||0;if(Pn.test(Y)){const{projection:q}=this.visualElement;if(q&&q.layout){const W=q.layout.layoutBox[B];W&&(Y=Fe(W)*(parseFloat(Y)/100))}}this.originPoint[B]=Y}),D&&ae.postRender(()=>D(v,x)),df(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},g=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:w,dragDirectionLock:M,onDirectionLock:D,onDrag:_}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:B}=x;if(M&&this.currentDirection===null){this.currentDirection=B5(B),this.currentDirection!==null&&D&&D(this.currentDirection);return}this.updateAxis("x",x.point,B),this.updateAxis("y",x.point,B),this.visualElement.render(),_&&_(v,x)},p=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>An(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Ry(i,{onSessionStart:d,onStart:f,onMove:g,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:wy(this.visualElement)})}stop(i,l){const s=i||this.latestPointerEvent,c=l||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!s)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:g}=this.getProps();g&&ae.postRender(()=>g(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,s){const{drag:c}=this.getProps();if(!s||!es(i,c,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=C5(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&oo(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=z5(s.layoutBox,i):this.constraints=!1,this.elastic=j5(l),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&An(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=_5(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!oo(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=Bx(s,c.root,this.visualElement.getTransformPagePoint());let f=N5(c.layout.layoutBox,d);if(l){const g=l(jx(f));this.hasMutatedConstraints=!!g,g&&(f=my(g))}return f}startAnimation(i){const{drag:l,dragMomentum:s,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),p=this.constraints||{},h=An(y=>{if(!es(y,l,this.currentDirection))return;let v=p&&p[y]||{};f&&(v={min:0,max:0});const x=c?200:1e6,w=c?40:1e7,M={type:"inertia",velocity:s?i[y]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...d,...v};return this.startAxisValueAnimation(y,M)});return Promise.all(h).then(g)}startAxisValueAnimation(i,l){const s=this.getAxisMotionValue(i);return df(this.visualElement,i),s.start(Wf(i,s,0,l,this.visualElement,!1))}stopAnimation(){An(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){An(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[l];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){An(l=>{const{drag:s}=this.getProps();if(!es(l,s,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(l);if(c&&c.layout){const{min:f,max:g}=c.layout.layoutBox[l];d.set(i[l]-le(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:s}=this.visualElement;if(!oo(l)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};An(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const p=g.get();c[f]=k5({min:p,max:p},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),An(f=>{if(!es(f,i,null))return;const g=this.getAxisMotionValue(f),{min:p,max:h}=this.constraints[f];g.set(le(p,h,c[f]))})}addListeners(){if(!this.visualElement.current)return;V5.set(this.visualElement,this);const i=this.visualElement.current,l=bl(i,"pointerdown",p=>{const{drag:h,dragListener:y=!0}=this.getProps();h&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();oo(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),ae.read(s);const f=El(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h})=>{this.isDragging&&h&&(An(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=p[y].translate,v.set(v.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),l(),d(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=mf,dragMomentum:g=!0}=i;return{...i,drag:l,dragDirectionLock:s,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:g}}}function es(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function B5(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class L5 extends Pa{constructor(i){super(i),this.removeGroupControls=On,this.removeListeners=On,this.controls=new U5(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||On}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ap=a=>(i,l)=>{a&&ae.postRender(()=>a(i,l))};class H5 extends Pa{constructor(){super(...arguments),this.removePointerDownListener=On}onPointerDown(i){this.session=new Ry(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:wy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:Ap(i),onStart:Ap(l),onMove:s,onEnd:(d,f)=>{delete this.session,c&&ae.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=bl(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const rs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Op(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const hl={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(mt.test(a))a=parseFloat(a);else return a;const l=Op(a,i.target.x),s=Op(a,i.target.y);return`${l}% ${s}%`}},q5={correct:(a,{treeScale:i,projectionDelta:l})=>{const s=a,c=qa.parse(a);if(c.length>5)return s;const d=qa.createTransformer(a),f=typeof c[0]!="number"?1:0,g=l.x.scale*i.x,p=l.y.scale*i.y;c[0+f]/=g,c[1+f]/=p;const h=le(g,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=h),typeof c[3+f]=="number"&&(c[3+f]/=h),d(c)}};let Dp=!1;class P5 extends X.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s,layoutId:c}=this.props,{projection:d}=i;ux(Y5),d&&(l.group&&l.group.add(d),s&&s.register&&c&&s.register(d),Dp&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),rs.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:s,drag:c,isPresent:d}=this.props,{projection:f}=s;return f&&(f.isPresent=d,Dp=!0,c||i.layoutDependency!==l||l===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||ae.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Hf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function zy(a){const[i,l]=Ig(),s=X.useContext(bf);return O.jsx(P5,{...a,layoutGroup:s,switchLayoutGroup:X.useContext(dy),isPresent:i,safeToRemove:l})}const Y5={borderRadius:{...hl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hl,borderTopRightRadius:hl,borderBottomLeftRadius:hl,borderBottomRightRadius:hl,boxShadow:q5};function X5(a,i,l){const s=Ge(a)?a:uo(a);return s.start(Wf("",s,i,l)),s.animation}const G5=(a,i)=>a.depth-i.depth;class Z5{constructor(){this.children=[],this.isDirty=!1}add(i){Sf(this.children,i),this.isDirty=!0}remove(i){Tf(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(G5),this.isDirty=!1,this.children.forEach(i)}}function Q5(a,i){const l=an.now(),s=({timestamp:c})=>{const d=c-l;d>=i&&(Ha(s),a(d-i))};return ae.setup(s,!0),()=>Ha(s)}const Ny=["TopLeft","TopRight","BottomLeft","BottomRight"],K5=Ny.length,Mp=a=>typeof a=="string"?parseFloat(a):a,Ep=a=>typeof a=="number"||mt.test(a);function F5(a,i,l,s,c,d){c?(a.opacity=le(0,l.opacity??1,J5(s)),a.opacityExit=le(i.opacity??1,0,W5(s))):d&&(a.opacity=le(i.opacity??1,l.opacity??1,s));for(let f=0;f<K5;f++){const g=`border${Ny[f]}Radius`;let p=wp(i,g),h=wp(l,g);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||Ep(p)===Ep(h)?(a[g]=Math.max(le(Mp(p),Mp(h),s),0),(Pn.test(h)||Pn.test(p))&&(a[g]+="%")):a[g]=h}(i.rotate||l.rotate)&&(a.rotate=le(i.rotate||0,l.rotate||0,s))}function wp(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const J5=ky(0,.5,vg),W5=ky(.5,.95,On);function ky(a,i,l){return s=>s<a?0:s>i?1:l(Sl(a,i,s))}function Rp(a,i){a.min=i.min,a.max=i.max}function Tn(a,i){Rp(a.x,i.x),Rp(a.y,i.y)}function Cp(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}function zp(a,i,l,s,c){return a-=i,a=ds(a,1/l,s),c!==void 0&&(a=ds(a,1/c,s)),a}function $5(a,i=0,l=1,s=.5,c,d=a,f=a){if(Pn.test(i)&&(i=parseFloat(i),i=le(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=le(d.min,d.max,s);a===d&&(g-=i),a.min=zp(a.min,i,l,g,c),a.max=zp(a.max,i,l,g,c)}function Np(a,i,[l,s,c],d,f){$5(a,i[l],i[s],i[c],i.scale,d,f)}const I5=["x","scaleX","originX"],tS=["y","scaleY","originY"];function kp(a,i,l,s){Np(a.x,i,I5,l?l.x:void 0,s?s.x:void 0),Np(a.y,i,tS,l?l.y:void 0,s?s.y:void 0)}function _p(a){return a.translate===0&&a.scale===1}function _y(a){return _p(a.x)&&_p(a.y)}function jp(a,i){return a.min===i.min&&a.max===i.max}function eS(a,i){return jp(a.x,i.x)&&jp(a.y,i.y)}function Vp(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function jy(a,i){return Vp(a.x,i.x)&&Vp(a.y,i.y)}function Up(a){return Fe(a.x)/Fe(a.y)}function Bp(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}class nS{constructor(){this.members=[]}add(i){Sf(this.members,i),i.scheduleRender()}remove(i){if(Tf(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(c=>i===c);if(l===0)return!1;let s;for(let c=l;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){s=d;break}}return s?(this.promote(s),!0):!1}promote(i,l){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,l&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:s}=i;l.onExitComplete&&l.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function aS(a,i,l){let s="";const c=a.x.translate/i.x,d=a.y.translate/i.y,f=l?.z||0;if((c||d||f)&&(s=`translate3d(${c}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:h,rotate:y,rotateX:v,rotateY:x,skewX:w,skewY:M}=l;h&&(s=`perspective(${h}px) ${s}`),y&&(s+=`rotate(${y}deg) `),v&&(s+=`rotateX(${v}deg) `),x&&(s+=`rotateY(${x}deg) `),w&&(s+=`skewX(${w}deg) `),M&&(s+=`skewY(${M}deg) `)}const g=a.x.scale*i.x,p=a.y.scale*i.y;return(g!==1||p!==1)&&(s+=`scale(${g}, ${p})`),s||"none"}const Yc=["","X","Y","Z"],iS=1e3;let oS=0;function Xc(a,i,l,s){const{latestValues:c}=i;c[a]&&(l[a]=c[a],i.setStaticValue(a,0),s&&(s[a]=0))}function Vy(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=Ty(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:c,layoutId:d}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",ae,!(c||d))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&Vy(s)}function Uy({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},g=i?.()){this.id=oS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(sS),this.nodes.forEach(dS),this.nodes.forEach(hS),this.nodes.forEach(uS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new Z5)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Df),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const p=this.eventHandlers.get(f);p&&p.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=$g(f)&&!J2(f),this.instance=f;const{layoutId:g,layout:p,visualElement:h}=this.options;if(h&&!h.current&&h.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||g)&&(this.isLayoutDirty=!0),a){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;ae.read(()=>{v=window.innerWidth}),a(f,()=>{const w=window.innerWidth;w!==v&&(v=w,this.root.updateBlockedByResize=!0,y&&y(),y=Q5(x,250),rs.hasAnimatedSinceResize&&(rs.hasAnimatedSinceResize=!1,this.nodes.forEach(qp)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&h&&(g||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||bS,{onLayoutAnimationStart:D,onLayoutAnimationComplete:_}=h.getProps(),B=!this.targetLayout||!jy(this.targetLayout,w),Y=!v&&x;if(this.options.layoutRoot||this.resumeFrom||Y||v&&(B||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const q={...Bf(M,"layout"),onPlay:D,onComplete:_};(h.shouldReduceMotion||this.options.layoutRoot)&&(q.delay=0,q.type=!1),this.startAnimation(q),this.setAnimationOrigin(y,Y)}else v||qp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ha(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mS),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Vy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:g,layout:p}=this.options;if(g===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Lp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Hp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(fS),this.nodes.forEach(lS),this.nodes.forEach(rS)):this.nodes.forEach(Hp),this.clearAllSnapshots();const g=an.now();Ue.delta=ra(0,1e3/60,g-Ue.timestamp),Ue.timestamp=g,Ue.isProcessing=!0,kc.update.process(Ue),kc.preRender.process(Ue),kc.render.process(Ue),Ue.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Hf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cS),this.sharedNodes.forEach(pS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ae.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ae.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Fe(this.snapshot.measuredBox.x)&&!Fe(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!_y(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;f&&this.instance&&(g||ui(this.latestValues)||y)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let p=this.removeElementScroll(g);return f&&(p=this.removeTransform(p)),vS(p),{animationId:this.root.animationId,measuredBox:g,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return me();const g=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(xS))){const{scroll:h}=this.root;h&&(lo(g.x,h.offset.x),lo(g.y,h.offset.y))}return g}removeElementScroll(f){const g=me();if(Tn(g,f),this.scroll?.wasRoot)return g;for(let p=0;p<this.path.length;p++){const h=this.path[p],{scroll:y,options:v}=h;h!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&Tn(g,f),lo(g.x,y.offset.x),lo(g.y,y.offset.y))}return g}applyTransform(f,g=!1){const p=me();Tn(p,f);for(let h=0;h<this.path.length;h++){const y=this.path[h];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&ro(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),ui(y.latestValues)&&ro(p,y.latestValues)}return ui(this.latestValues)&&ro(p,this.latestValues),p}removeTransform(f){const g=me();Tn(g,f);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!ui(h.latestValues))continue;sf(h.latestValues)&&h.updateSnapshot();const y=me(),v=h.measurePageBox();Tn(y,v),kp(g,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,y)}return ui(this.latestValues)&&kp(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ue.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==g;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=Ue.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),xl(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=me(),this.targetWithTransforms=me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),M5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tn(this.target,this.layout.layoutBox),gy(this.target,this.targetDelta)):Tn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),xl(this.relativeTargetOrigin,this.target,x.target),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||sf(this.parent.latestValues)||py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),g=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Ue.timestamp&&(p=!1),p)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;Tn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;Ux(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=me());const{target:w}=f;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Cp(this.prevProjectionDelta.x,this.projectionDelta.x),Cp(this.prevProjectionDelta.y,this.projectionDelta.y)),vl(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!Bp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Bp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=so(),this.projectionDelta=so(),this.projectionDeltaWithTransform=so()}setAnimationOrigin(f,g=!1){const p=this.snapshot,h=p?p.latestValues:{},y={...this.latestValues},v=so();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const x=me(),w=p?p.source:void 0,M=this.layout?this.layout.source:void 0,D=w!==M,_=this.getStack(),B=!_||_.members.length<=1,Y=!!(D&&!B&&this.options.crossfade===!0&&!this.path.some(yS));this.animationProgress=0;let q;this.mixTargetDelta=W=>{const P=W/1e3;Pp(v.x,f.x,P),Pp(v.y,f.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xl(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),gS(this.relativeTarget,this.relativeTargetOrigin,x,P),q&&eS(this.relativeTarget,q)&&(this.isProjectionDirty=!1),q||(q=me()),Tn(q,this.relativeTarget)),D&&(this.animationValues=y,F5(y,h,this.latestValues,P,Y,B)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Ha(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ae.update(()=>{rs.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=uo(0)),this.currentAnimation=X5(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(iS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:p,layout:h,latestValues:y}=f;if(!(!g||!p||!h)){if(this!==f&&this.layout&&h&&By(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||me();const v=Fe(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+v;const x=Fe(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+x}Tn(g,p),ro(g,y),vl(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new nS),this.sharedNodes.get(f).add(g);const h=g.options.initialPromotionConfig;g.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(g=!0),!g)return;const h={};p.z&&Xc("z",f,h,this.animationValues);for(let y=0;y<Yc.length;y++)Xc(`rotate${Yc[y]}`,f,h,this.animationValues),Xc(`skew${Yc[y]}`,f,h,this.animationValues);f.render();for(const y in h)f.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);f.scheduleRender()}applyProjectionStyles(f,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=ls(g?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=ls(g?.pointerEvents)||""),this.hasProjected&&!ui(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=aS(this.projectionDeltaWithTransform,this.treeScale,y);p&&(v=p(y,v)),f.transform=v;const{x,y:w}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,h.animationValues?f.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const M in Dl){if(y[M]===void 0)continue;const{correct:D,applyTo:_,isCSSVariable:B}=Dl[M],Y=v==="none"?y[M]:D(y[M],h);if(_){const q=_.length;for(let W=0;W<q;W++)f[_[W]]=Y}else B?this.options.visualElement.renderState.vars[M]=Y:f[M]=Y}this.options.layoutId&&(f.pointerEvents=h===this?ls(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Lp),this.root.sharedNodes.clear()}}}function lS(a){a.updateLayout()}function rS(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:s}=a.layout,{animationType:c}=a.options,d=i.source!==a.layout.source;c==="size"?An(y=>{const v=d?i.measuredBox[y]:i.layoutBox[y],x=Fe(v);v.min=l[y].min,v.max=v.min+x}):By(c,i.layoutBox,l)&&An(y=>{const v=d?i.measuredBox[y]:i.layoutBox[y],x=Fe(l[y]);v.max=v.min+x,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[y].max=a.relativeTarget[y].min+x)});const f=so();vl(f,l,i.layoutBox);const g=so();d?vl(g,a.applyTransform(s,!0),i.measuredBox):vl(g,l,i.layoutBox);const p=!_y(f);let h=!1;if(!a.resumeFrom){const y=a.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:x}=y;if(v&&x){const w=me();xl(w,i.layoutBox,v.layoutBox);const M=me();xl(M,l,x.layoutBox),jy(w,M)||(h=!0),y.options.layoutRoot&&(a.relativeTarget=M,a.relativeTargetOrigin=w,a.relativeParent=y)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:g,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:h})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function sS(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function uS(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function cS(a){a.clearSnapshot()}function Lp(a){a.clearMeasurements()}function Hp(a){a.isLayoutDirty=!1}function fS(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function qp(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function dS(a){a.resolveTargetDelta()}function hS(a){a.calcProjection()}function mS(a){a.resetSkewAndRotation()}function pS(a){a.removeLeadSnapshot()}function Pp(a,i,l){a.translate=le(i.translate,0,l),a.scale=le(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function Yp(a,i,l,s){a.min=le(i.min,l.min,s),a.max=le(i.max,l.max,s)}function gS(a,i,l,s){Yp(a.x,i.x,l.x,s),Yp(a.y,i.y,l.y,s)}function yS(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const bS={duration:.45,ease:[.4,0,.1,1]},Xp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Gp=Xp("applewebkit/")&&!Xp("chrome/")?Math.round:On;function Zp(a){a.min=Gp(a.min),a.max=Gp(a.max)}function vS(a){Zp(a.x),Zp(a.y)}function By(a,i,l){return a==="position"||a==="preserve-aspect"&&!D5(Up(i),Up(l),.2)}function xS(a){return a!==a.root&&a.scroll?.wasRoot}const SS=Uy({attachResizeListener:(a,i)=>El(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Gc={current:void 0},Ly=Uy({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Gc.current){const a=new SS({});a.mount(window),a.setOptions({layoutScroll:!0}),Gc.current=a}return Gc.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),TS={pan:{Feature:H5},drag:{Feature:L5,ProjectionNode:Ly,MeasureLayout:zy}};function Qp(a,i,l){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",l==="Start");const c="onHover"+l,d=s[c];d&&ae.postRender(()=>d(i,zl(i)))}class AS extends Pa{mount(){const{current:i}=this.node;i&&(this.unmount=G2(i,(l,s)=>(Qp(this.node,s,"Start"),c=>Qp(this.node,c,"End"))))}unmount(){}}class OS extends Pa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wl(El(this.node.current,"focus",()=>this.onFocus()),El(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Kp(a,i,l){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",l==="Start");const c="onTap"+(l==="End"?"":l),d=s[c];d&&ae.postRender(()=>d(i,zl(i)))}class DS extends Pa{mount(){const{current:i}=this.node;i&&(this.unmount=F2(i,(l,s)=>(Kp(this.node,s,"Start"),(c,{success:d})=>Kp(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const pf=new WeakMap,Zc=new WeakMap,MS=a=>{const i=pf.get(a.target);i&&i(a)},ES=a=>{a.forEach(MS)};function wS({root:a,...i}){const l=a||document;Zc.has(l)||Zc.set(l,{});const s=Zc.get(l),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(ES,{root:a,...i})),s[c]}function RS(a,i,l){const s=wS(i);return pf.set(a,l),s.observe(a),()=>{pf.delete(a),s.unobserve(a)}}const CS={some:0,all:1};class zS extends Pa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:c="some",once:d}=i,f={root:l?l.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:CS[c]},g=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,d&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),x=h?y:v;x&&x(p)};return RS(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(NS(i,l))&&this.startObserver()}unmount(){}}function NS({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const kS={inView:{Feature:zS},tap:{Feature:DS},focus:{Feature:OS},hover:{Feature:AS}},_S={layout:{ProjectionNode:Ly,MeasureLayout:zy}},jS={...v5,...kS,...TS,..._S},$t=_x(jS,Qx),VS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='100pt'%20height='100pt'%20version='1.1'%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m18.914%2081.398h-7.1992c0.97266%200.91016%201.5977%202.2266%201.5977%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.3125%200.46094-2.5703%201.4297-3.5977h-4.5703v-1.8281h4.5703v-7.4883h67.082v-21.371h25.086v2.6328h-13.086v11.426h7.8281v12.633l-15.484-0.003906c-1.1406%200.17187-1.0273%201.6562%200.058594%201.7695h23.945v2.2305h-9.4297c0.91406%200.91016%201.543%202.2266%201.543%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.4297%200.62891-2.7383%201.543-3.5977h-7.6016c0.058594%200.22656%200.10938%200.45703%200.10938%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.058593-0.45703%200.058593-0.68359h-3.8281c0%200.28125%200.058593%200.51562%200.058593%200.68359%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2305-3.7109-8.2305-8.3438%200-0.11328%200.058594-0.28516%200.11328-0.625h-4.1133c0%200.28516%200.058594%200.45703%200.058594%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.054688-0.34375%200.11328-0.625'%20fill='%23010101'/%3e%3cpath%20d='m25.316%2053.566c-1.3711-0.16797-2.3984-1.1445-2.1719-2.2812l2.0547-6.1719-0.34375-4.2305h-7.8867l-0.34375%204.2305%202.0586%206.1719c0.23047%201.1406-0.80078%202.1172-2.0586%202.2812h-6.4531l-5.5977%208.3984%205.5977%208.4023h59.828l-0.003906-16.852c-3.9961%200.16797-3.7109-1.4883-3.9961-2.6914h-24.914c-0.11328%200.91406%200%202.7422-3.1406%202.7422z'%20fill='%23010101'/%3e%3cpath%20d='m23.312%2039.113h-4.6289c0.62891-6.3984%202.457-11.027%207.5977-15.543%201.3164-2.1133%200.28516-12.172%209.1406-13.715%208.6914-1.4844%208.5781%204.9141%2015.32%205.5977%202.9141%200.28906%205.6016-2.3398%208.5703-2.2812%204.0547%200.11328%205.7734%203.8242%209.1992%203.9961%203.4297%200.17188%204.1133-2.0547%207.4297-2.1719%203.3125-0.11328%207.8281%203.6562%207.8281%207.2031%200%204.0547-0.34375%208.3398-7.0859%2010.055-3.1992%200.80078-6-2.5703-9.1992-2.457-2.8555%200.054687-5.7148%202.6875-8.5156%202.6875-6.7383%200-6.3984-4.0586-10.168-4.0586-3.9414%200-4.8008%203.9414-10.801%204.2852-4.1758%200.23047-6.2852-2.6289-9.1445-1.7148-4.5117%201.4883-5.2539%208.1172-5.543%208.1172'%20fill='%23010101'/%3e%3c/svg%3e";function De(a,i){i===void 0&&(i={});var l=i.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}De(`.react-loading-indicator-normalize,
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
}`);var qt=function(){return qt=Object.assign||function(a){for(var i,l=1,s=arguments.length;l<s;l++)for(var c in i=arguments[l])Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c]);return a},qt.apply(this,arguments)};function hs(a){return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},hs(a)}var US=/^\s+/,BS=/\s+$/;function at(a,i){if(i=i||{},(a=a||"")instanceof at)return a;if(!(this instanceof at))return new at(a,i);var l=function(s){var c={r:0,g:0,b:0},d=1,f=null,g=null,p=null,h=!1,y=!1;typeof s=="string"&&(s=function(M){M=M.replace(US,"").replace(BS,"").toLowerCase();var D,_=!1;if(gf[M])M=gf[M],_=!0;else if(M=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(D=wn.rgb.exec(M))?{r:D[1],g:D[2],b:D[3]}:(D=wn.rgba.exec(M))?{r:D[1],g:D[2],b:D[3],a:D[4]}:(D=wn.hsl.exec(M))?{h:D[1],s:D[2],l:D[3]}:(D=wn.hsla.exec(M))?{h:D[1],s:D[2],l:D[3],a:D[4]}:(D=wn.hsv.exec(M))?{h:D[1],s:D[2],v:D[3]}:(D=wn.hsva.exec(M))?{h:D[1],s:D[2],v:D[3],a:D[4]}:(D=wn.hex8.exec(M))?{r:hn(D[1]),g:hn(D[2]),b:hn(D[3]),a:tg(D[4]),format:_?"name":"hex8"}:(D=wn.hex6.exec(M))?{r:hn(D[1]),g:hn(D[2]),b:hn(D[3]),format:_?"name":"hex"}:(D=wn.hex4.exec(M))?{r:hn(D[1]+""+D[1]),g:hn(D[2]+""+D[2]),b:hn(D[3]+""+D[3]),a:tg(D[4]+""+D[4]),format:_?"name":"hex8"}:(D=wn.hex3.exec(M))?{r:hn(D[1]+""+D[1]),g:hn(D[2]+""+D[2]),b:hn(D[3]+""+D[3]),format:_?"name":"hex"}:!1}(s)),hs(s)=="object"&&(la(s.r)&&la(s.g)&&la(s.b)?(v=s.r,x=s.g,w=s.b,c={r:255*ne(v,255),g:255*ne(x,255),b:255*ne(w,255)},h=!0,y=String(s.r).substr(-1)==="%"?"prgb":"rgb"):la(s.h)&&la(s.s)&&la(s.v)?(f=pl(s.s),g=pl(s.v),c=function(M,D,_){M=6*ne(M,360),D=ne(D,100),_=ne(_,100);var B=Math.floor(M),Y=M-B,q=_*(1-D),W=_*(1-Y*D),P=_*(1-(1-Y)*D),F=B%6,Q=[_,W,q,q,P,_][F],G=[P,_,_,W,q,q][F],lt=[q,q,P,_,_,W][F];return{r:255*Q,g:255*G,b:255*lt}}(s.h,f,g),h=!0,y="hsv"):la(s.h)&&la(s.s)&&la(s.l)&&(f=pl(s.s),p=pl(s.l),c=function(M,D,_){var B,Y,q;function W(Q,G,lt){return lt<0&&(lt+=1),lt>1&&(lt-=1),lt<1/6?Q+6*(G-Q)*lt:lt<.5?G:lt<2/3?Q+(G-Q)*(2/3-lt)*6:Q}if(M=ne(M,360),D=ne(D,100),_=ne(_,100),D===0)B=Y=q=_;else{var P=_<.5?_*(1+D):_+D-_*D,F=2*_-P;B=W(F,P,M+1/3),Y=W(F,P,M),q=W(F,P,M-1/3)}return{r:255*B,g:255*Y,b:255*q}}(s.h,f,p),h=!0,y="hsl"),s.hasOwnProperty("a")&&(d=s.a));var v,x,w;return d=Hy(d),{ok:h,format:s.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}}(a);this._originalInput=a,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||l.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function Fp(a,i,l){a=ne(a,255),i=ne(i,255),l=ne(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=(d+f)/2;if(d==f)s=c=0;else{var p=d-f;switch(c=g>.5?p/(2-d-f):p/(d+f),d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,l:g}}function Jp(a,i,l){a=ne(a,255),i=ne(i,255),l=ne(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=d,p=d-f;if(c=d===0?0:p/d,d==f)s=0;else{switch(d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,v:g}}function Wp(a,i,l,s){var c=[Cn(Math.round(a).toString(16)),Cn(Math.round(i).toString(16)),Cn(Math.round(l).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function $p(a,i,l,s){return[Cn(qy(s)),Cn(Math.round(a).toString(16)),Cn(Math.round(i).toString(16)),Cn(Math.round(l).toString(16))].join("")}function LS(a,i){i=i===0?0:i||10;var l=at(a).toHsl();return l.s-=i/100,l.s=bs(l.s),at(l)}function HS(a,i){i=i===0?0:i||10;var l=at(a).toHsl();return l.s+=i/100,l.s=bs(l.s),at(l)}function qS(a){return at(a).desaturate(100)}function PS(a,i){i=i===0?0:i||10;var l=at(a).toHsl();return l.l+=i/100,l.l=bs(l.l),at(l)}function YS(a,i){i=i===0?0:i||10;var l=at(a).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-i/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-i/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-i/100*255))),at(l)}function XS(a,i){i=i===0?0:i||10;var l=at(a).toHsl();return l.l-=i/100,l.l=bs(l.l),at(l)}function GS(a,i){var l=at(a).toHsl(),s=(l.h+i)%360;return l.h=s<0?360+s:s,at(l)}function ZS(a){var i=at(a).toHsl();return i.h=(i.h+180)%360,at(i)}function Ip(a,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var l=at(a).toHsl(),s=[at(a)],c=360/i,d=1;d<i;d++)s.push(at({h:(l.h+d*c)%360,s:l.s,l:l.l}));return s}function QS(a){var i=at(a).toHsl(),l=i.h;return[at(a),at({h:(l+72)%360,s:i.s,l:i.l}),at({h:(l+216)%360,s:i.s,l:i.l})]}function KS(a,i,l){i=i||6,l=l||30;var s=at(a).toHsl(),c=360/l,d=[at(a)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,d.push(at(s));return d}function FS(a,i){i=i||6;for(var l=at(a).toHsv(),s=l.h,c=l.s,d=l.v,f=[],g=1/i;i--;)f.push(at({h:s,s:c,v:d})),d=(d+g)%1;return f}at.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,i,l,s=this.toRgb();return a=s.r/255,i=s.g/255,l=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Hy(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=Jp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=Jp(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+i+", "+l+"%, "+s+"%)":"hsva("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=Fp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Fp(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+i+", "+l+"%, "+s+"%)":"hsla("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return Wp(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(i,l,s,c,d){var f=[Cn(Math.round(i).toString(16)),Cn(Math.round(l).toString(16)),Cn(Math.round(s).toString(16)),Cn(qy(c))];return d&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ne(this._r,255))+"%",g:Math.round(100*ne(this._g,255))+"%",b:Math.round(100*ne(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ne(this._r,255))+"%, "+Math.round(100*ne(this._g,255))+"%, "+Math.round(100*ne(this._b,255))+"%)":"rgba("+Math.round(100*ne(this._r,255))+"%, "+Math.round(100*ne(this._g,255))+"%, "+Math.round(100*ne(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(JS[Wp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var i="#"+$p(this._r,this._g,this._b,this._a),l=i,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=at(a);l="#"+$p(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+l+")"},toString:function(a){var i=!!a;a=a||this._format;var l=!1,s=this._a<1&&this._a>=0;return i||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(l=this.toRgbString()),a==="prgb"&&(l=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(l=this.toHexString()),a==="hex3"&&(l=this.toHexString(!0)),a==="hex4"&&(l=this.toHex8String(!0)),a==="hex8"&&(l=this.toHex8String()),a==="name"&&(l=this.toName()),a==="hsl"&&(l=this.toHslString()),a==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return at(this.toString())},_applyModification:function(a,i){var l=a.apply(null,[this].concat([].slice.call(i)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(PS,arguments)},brighten:function(){return this._applyModification(YS,arguments)},darken:function(){return this._applyModification(XS,arguments)},desaturate:function(){return this._applyModification(LS,arguments)},saturate:function(){return this._applyModification(HS,arguments)},greyscale:function(){return this._applyModification(qS,arguments)},spin:function(){return this._applyModification(GS,arguments)},_applyCombination:function(a,i){return a.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(KS,arguments)},complement:function(){return this._applyCombination(ZS,arguments)},monochromatic:function(){return this._applyCombination(FS,arguments)},splitcomplement:function(){return this._applyCombination(QS,arguments)},triad:function(){return this._applyCombination(Ip,[3])},tetrad:function(){return this._applyCombination(Ip,[4])}},at.fromRatio=function(a,i){if(hs(a)=="object"){var l={};for(var s in a)a.hasOwnProperty(s)&&(l[s]=s==="a"?a[s]:pl(a[s]));a=l}return at(a,i)},at.equals=function(a,i){return!(!a||!i)&&at(a).toRgbString()==at(i).toRgbString()},at.random=function(){return at.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},at.mix=function(a,i,l){l=l===0?0:l||50;var s=at(a).toRgb(),c=at(i).toRgb(),d=l/100;return at({r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a})},at.readability=function(a,i){var l=at(a),s=at(i);return(Math.max(l.getLuminance(),s.getLuminance())+.05)/(Math.min(l.getLuminance(),s.getLuminance())+.05)},at.isReadable=function(a,i,l){var s,c,d=at.readability(a,i);switch(c=!1,(s=function(f){var g,p;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:g,size:p}}(l)).level+s.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},at.mostReadable=function(a,i,l){var s,c,d,f,g=null,p=0;c=(l=l||{}).includeFallbackColors,d=l.level,f=l.size;for(var h=0;h<i.length;h++)(s=at.readability(a,i[h]))>p&&(p=s,g=at(i[h]));return at.isReadable(a,g,{level:d,size:f})||!c?g:(l.includeFallbackColors=!1,at.mostReadable(a,["#fff","#000"],l))};var gf=at.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},JS=at.hexNames=function(a){var i={};for(var l in a)a.hasOwnProperty(l)&&(i[a[l]]=l);return i}(gf);function Hy(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function ne(a,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var l=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(a);return a=Math.min(i,Math.max(0,parseFloat(a))),l&&(a=parseInt(a*i,10)/100),Math.abs(a-i)<1e-6?1:a%i/parseFloat(i)}function bs(a){return Math.min(1,Math.max(0,a))}function hn(a){return parseInt(a,16)}function Cn(a){return a.length==1?"0"+a:""+a}function pl(a){return a<=1&&(a=100*a+"%"),a}function qy(a){return Math.round(255*parseFloat(a)).toString(16)}function tg(a){return hn(a)/255}var Ba,ns,as,wn=(ns="[\\s|\\(]+("+(Ba="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ba+")[,|\\s]+("+Ba+")\\s*\\)?",as="[\\s|\\(]+("+Ba+")[,|\\s]+("+Ba+")[,|\\s]+("+Ba+")[,|\\s]+("+Ba+")\\s*\\)?",{CSS_UNIT:new RegExp(Ba),rgb:new RegExp("rgb"+ns),rgba:new RegExp("rgba"+as),hsl:new RegExp("hsl"+ns),hsla:new RegExp("hsla"+as),hsv:new RegExp("hsv"+ns),hsva:new RegExp("hsva"+as),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function la(a){return!!wn.CSS_UNIT.exec(a)}var vs=function(a,i){var l=(typeof a=="string"?parseInt(a):a)||0;if(l>=-5&&l<=5){var s=l,c=parseFloat(i),d=c+s*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},xs=function(a,i){var l=a||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(l.fontSize){var d=l.fontSize;c=function(f,g){var p={};for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&g.indexOf(h)<0&&(p[h]=f[h]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(f);y<h.length;y++)g.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(f,h[y])&&(p[h[y]]=f[h[y]])}return p}(l,["fontSize"]),s=d}return{fontSize:s,styles:c}},WS={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ss=function(a){var i=a.className,l=a.text,s=a.textColor,c=a.staticText,d=a.style;return l?Vt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:qt(qt(qt({},c&&WS),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof l=="string"&&l.length?l:"loading"):null},Nl="rgb(50, 205, 50)";function Ts(a,i){if(i===void 0&&(i=0),a.length===0)throw new Error("Input array cannot be empty!");var l=[];return function s(c,d){return d===void 0&&(d=0),l.push.apply(l,c),l.length<d&&s(l,d),l.slice(0,d)}(a,i)}De(`.atom-rli-bounding-box {
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
}`);at(Nl).toRgb();Array.from({length:4},function(a,i){return"--atom-phase".concat(i+1,"-rgb")});De(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-annulus-phase".concat(i+1,"-color")});function Qc(a){return a&&a.Math===Math&&a}De(`.OP-dotted-rli-bounding-box {
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
}`);Qc(typeof window=="object"&&window)||Qc(typeof self=="object"&&self)||Qc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,i){return"--OP-dotted-phase".concat(i+1,"-color")});De(`.OP-spokes-rli-bounding-box {
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
}`);var $i=Array.from({length:4},function(a,i){return"--TD-pulsate-phase".concat(i+1,"-color")}),$S=function(a){var i,l=xs(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=vs(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=Ts(p,$i.length),v=0;v<y.length&&!(v>=4);v++)h[$i[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<$i.length;x++)h[$i[x]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),x=0;x<$i.length;x++)h[$i[x]]=Nl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Vt.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:qt(qt(qt(qt(qt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Vt.createElement("span",{className:"rli-d-i-b pulsate-indicator"},Vt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Vt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Vt.createElement("span",{className:"rli-d-i-b pulsate-dot"})),Vt.createElement(Ss,{staticText:!0,text:a?.text,textColor:a?.textColor}))};De(`.brick-stack-rli-bounding-box {
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
}`);var Ii=Array.from({length:4},function(a,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}),IS=function(a){var i,l=xs(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=vs(a?.speedPlus,"1s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=Ts(p,Ii.length),v=0;v<y.length&&!(v>=4);v++)h[Ii[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<Ii.length;x++)h[Ii[x]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),x=0;x<Ii.length;x++)h[Ii[x]]=Nl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Vt.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:qt(qt(qt(qt(qt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Vt.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},Vt.createElement("span",{className:"rli-d-i-b brick-stack"})),Vt.createElement(Ss,{staticText:!0,text:a?.text,textColor:a?.textColor}))};De(`.bob-rli-bounding-box {
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
}`);var to=Array.from({length:4},function(a,i){return"--TD-bob-phase".concat(i+1,"-color")}),tT=function(a){var i,l=xs(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=vs(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=Ts(p,to.length),v=0;v<y.length&&!(v>=4);v++)h[to[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<to.length;x++)h[to[x]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),x=0;x<to.length;x++)h[to[x]]=Nl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Vt.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:qt(qt(qt(qt(qt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},Vt.createElement("span",{className:"bob-indicator"},Vt.createElement("span",{className:"bobbing"})),Vt.createElement(Ss,{staticText:!0,text:a?.text,textColor:a?.textColor}))};De(`.bounce-rli-bounding-box {
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
}`);var eo=Array.from({length:4},function(a,i){return"--TD-bounce-phase".concat(i+1,"-color")}),eT=function(a){var i,l=xs(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=vs(a?.speedPlus,"0.5s").animationPeriod,g=function(p){var h={};if(p instanceof Array){for(var y=Ts(p,eo.length),v=0;v<y.length&&!(v>=4);v++)h[eo[v]]=y[v];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<eo.length;x++)h[eo[x]]=p}catch{for(x=0;x<eo.length;x++)h[eo[x]]=Nl}return h}((i=a?.color)!==null&&i!==void 0?i:"");return Vt.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:qt(qt(qt(qt(qt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s)},Vt.createElement("span",{className:"wrapper"},Vt.createElement("span",{className:"group"},Vt.createElement("span",{className:"rli-d-i-b dot"}),Vt.createElement("span",{className:"rli-d-i-b dot"}),Vt.createElement("span",{className:"rli-d-i-b dot"})),Vt.createElement("span",{className:"group"},Vt.createElement("span",{className:"rli-d-i-b shadow"}),Vt.createElement("span",{className:"rli-d-i-b shadow"}),Vt.createElement("span",{className:"rli-d-i-b shadow"}))),Vt.createElement(Ss,{staticText:!0,text:a?.text,textColor:a?.textColor,style:{marginTop:"2px"}}))},eg=function(a){var i=Object(a).variant,l=i===void 0?"pulsate":i;return l==="pulsate"?Vt.createElement($S,qt({},a)):l==="brick-stack"?Vt.createElement(IS,qt({},a)):l==="bob"?Vt.createElement(tT,qt({},a)):l==="bounce"?Vt.createElement(eT,qt({},a)):null};De(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--life-line-phase".concat(i+1,"-color")});const nT="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20width='124'%20height='346'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3c!--%20Created%20with%20SVG-edit%20-%20https://github.com/SVG-Edit/svgedit--%3e%3cg%20class='layer'%3e%3ctitle%3eLayer%201%3c/title%3e%3cpath%20d='m5,79.76l57,-74.77l57,74.77l-28.5,0l0,75.13l-57,0l0,-75.13z'%20fill='%23000000'%20fill-opacity='0'%20id='svg_4'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='13'%20transform='rotate(180%2062.0005%2079.9424)'/%3e%3cpath%20d='m5,265.76l57,-74.77l57,74.77l-28.5,0l0,75.13l-57,0l0,-75.13z'%20fill='%23000000'%20fill-opacity='0'%20id='svg_6'%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='13'/%3e%3c/g%3e%3c/svg%3e",aT=({startX:a,startY:i,endX:l,endY:s})=>O.jsx($t.line,{x1:a,y1:i,x2:l,y2:s,className:"active-connection",markerEnd:"url(#arrowhead)",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2}}),iT=({connection:a,neurons:i,neuronRadius:l,neuronTransforms:s,isGlowing:c,emphasizedConnections:d,showForwardPassVisuals:f,inputData:g,currentSampleIndex:p,neuronHeaders:h,hiddenWeights:y,inputNeurons:v,hiddenNeurons:x,hiddenBiases:w,outputWeights:M,outputBiases:D,showSigmoidPhase:_,outputNeurons:B,isEraserMode:Y,onEraseConnection:q,eraserHoveredConnection:W,setEraserHoveredConnection:P})=>{const F=i.find(Nt=>Nt.id===a.fromNeuronId),Q=i.find(Nt=>Nt.id===a.toNeuronId);if(!F||!Q)return null;const G=W===a.id,lt=d.includes(a.id),ct=f?lt?1:.3:1,jt=s[a.fromNeuronId]||{x:0,y:0},Gt=s[a.toNeuronId]||{x:0,y:0},Ne=F.x+jt.x,pe=F.y+jt.y,Zt=Q.x+Gt.x,k=Q.y+Gt.y,Z=(Nt,It,Qt,Ct)=>{switch(It){case"top":return{x:Qt,y:Ct-l};case"right":return{x:Qt+l,y:Ct};case"bottom":return{x:Qt,y:Ct+l};case"left":return{x:Qt-l,y:Ct};default:return{x:Qt,y:Ct}}},$=Z(F,a.fromDirection,Ne,pe),pt=Z(Q,a.toDirection,Zt,k),T=($.x+pt.x)/2;let L=($.y+pt.y)/2;const I=Math.atan2(pt.y-$.y,pt.x-$.x)*(180/Math.PI),J=()=>{if(!f||!g[p]||!d.includes(a.id))return null;const Nt=h[F.label]||F.label,It=h[Q.label]||Q.label;if(F.type==="input"&&Q.type==="hidden"){const Qt=parseFloat(g[p][Nt])||0,Ct=y[`${Nt}-${It}`]||0,et=w[It]||0,St=Qt*Ct+et;return`${Qt} × ${Ct.toFixed(1)} + ${et.toFixed(1)} = ${St.toFixed(1)}`}if(F.type==="hidden"&&Q.type==="output"){let Qt=0;v.forEach(ge=>{const ie=h[ge.label]||ge.label,Ze=parseFloat(g[p][ie])||0,xe=y[`${ie}-${Nt}`]||0;Qt+=Ze*xe});const Ct=w[Nt]||0,et=Qt+Ct,St=Math.max(0,et),Et=M[`${Nt}-${It}`]||0;D[It];const Dt=(St*Et).toFixed(1);return`${St.toFixed(0)} × ${Et.toFixed(1)} = ${Dt}`}return F.type==="output"&&Q.type==="display"&&a.isSigmoidConnection,null},it=()=>{if(!(F.type==="output"&&Q.type==="display"&&a.isSigmoidConnection))return null;L-=20;const Nt=h[F.label]||F.label;let It=0;x.forEach(et=>{const St=h[et.label]||et.label;let Et=0;v.forEach(xe=>{const on=h[xe.label]||xe.label,zn=parseFloat(g[p][on])||0,Nn=y[`${on}-${St}`]||0;Et+=zn*Nn});const Dt=w[St]||0,ge=Et+Dt,ie=Math.max(0,ge),Ze=M[`${St}-${Nt}`]||0;It+=ie*Ze});const Qt=D[Nt]||0;It+=Qt;const Ct=It.toFixed(1);return O.jsxs("g",{children:[O.jsx("line",{x1:T-25,y1:L-5,x2:T+25,y2:L-5,stroke:"#ffffff",strokeWidth:"1"}),O.jsx("text",{x:T,y:L-10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1"}),O.jsx("text",{x:T-10,y:L+10,fill:"#ffffff",fontSize:"12px",textAnchor:"middle",children:"1 + e"}),O.jsxs("text",{x:T+8,y:L+5,fill:"#ffffff",fontSize:"8px",textAnchor:"start",children:["-",Ct]})]})},yt=(Nt,It,Qt)=>{let Ct=-1;for(let Et=0;Et<Nt&&(Ct=Qt.indexOf(" ",Ct+1),Ct!==-1);Et++);const et=Qt.slice(0,Ct),St=Qt.slice(Ct);return O.jsxs(O.Fragment,{children:[et,O.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:It}),St]})};function ot(Nt,It="11px Segoe UI"){const Ct=document.createElement("canvas").getContext("2d");return Ct.font=It,Ct.measureText(Nt).width+16}let Ut=J(),Mt="11px";if(Ut){const Nt=Math.sqrt(Math.pow(pt.x-$.x,2)+Math.pow(pt.y-$.y,2));ot(Ut)>Nt&&(Mt="9px",console.log("too big")),Ut=yt(3,Q.label.toLowerCase(),Ut)}const Be=a.isAnimating?"active-connection":c?"completed-connection glowing-connection":"completed-connection";return O.jsxs("g",{children:[O.jsx($t.line,{x1:$.x,y1:$.y,x2:pt.x,y2:pt.y,className:Be,markerEnd:a.isAnimating?void 0:"url(#arrowhead)",initial:a.isAnimating?{pathLength:0}:{pathLength:1,opacity:ct},animate:a.isAnimating?{pathLength:1,opacity:ct}:{opacity:ct,stroke:Y&&G?"#ef4444":"#ffffff"},transition:a.isAnimating?{duration:.6,ease:"easeInOut"}:{duration:.2},style:{cursor:Y?"crosshair":"default"},onMouseEnter:()=>{Y&&P(a.id)},onMouseLeave:()=>{Y&&P(null)},onClick:Nt=>{Y&&(Nt.stopPropagation(),q(a.id))}}),Ut&&O.jsx($t.text,{x:T,y:L-8,className:"formula-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{fontSize:Mt,fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},transform:`rotate(${I}, ${T}, ${L-8})`,children:Ut}),d.includes(a.id)&&O.jsx($t.g,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:it()})]})},oT=({x:a,y:i,neuronId:l,direction:s,onStartConnection:c,isHighlighted:d=!1})=>O.jsx($t.circle,{cx:a,cy:i,r:4,className:`connection-dot ${d?"connection-dot-highlighted":""}`,onClick:f=>{f.stopPropagation(),c(l,s,a,i,f)},whileHover:{scale:1.2},initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2},style:{cursor:"pointer"}}),lT=({id:a,x:i,y:l,radius:s,label:c,type:d,onDragEnd:f,onStartConnection:g,highlightedDots:p=[],onDragUpdate:h,isGlowing:y,neurons:v,showForwardPassVisuals:x,emphasizedConnections:w,hiddenNeurons:M,inputNeurons:D,outputNeurons:_,neuronHeaders:B,hiddenWeights:Y,outputWeights:q,inputData:W,currentSampleIndex:P,hiddenBiases:F,connections:Q,showSigmoidPhase:G,outputBiases:lt,isEraserMode:ct,onEraseNeuron:jt,eraserHoveredNeuron:Gt,setEraserHoveredNeuron:Ne})=>{const[pe,Zt]=X.useState(!1),[k,Z]=X.useState(!1),$=Gt===a,pt=ct&&$?.5:1,T=v.find(et=>et.id===a),L=x&&(T?.type==="input"||T?.type==="hidden"&&Q.some(et=>w.includes(et.id)&&(et.fromNeuronId===a||et.toNeuronId===a))||T?.type==="output"&&(w.some(et=>{const St=Q.find(Et=>Et.id===et);return St&&St.toNeuronId===a})||G)||T?.type==="display"),I=x&&!L?.3:1,J=et=>{const St="neuron",Et=et==="input"?"neuron-input":et==="hidden"?"neuron-hidden":et==="output"?"neuron-output":et.startsWith("hidden")?"neuron-hidden":"neuron";return y?`${St} ${Et} glowing-neuron`:`${St} ${Et}`},yt=(et=>{const St=B[et.label]||et.label,Et=[];return et.type==="hidden"?D.forEach(Dt=>{const ge=B[Dt.label]||Dt.label,ie=Y[`${ge}-${St}`]||0;Et.push(ie)}):et.type==="output"&&M.forEach(Dt=>{const ge=B[Dt.label]||Dt.label,ie=q[`${ge}-${St}`]||0;Et.push(ie)}),Et})(T||{type:d,label:c}),ot=yt.length>0?`[${yt.map(et=>et.toFixed(1)).join(", ")}]`:"",Ut=()=>{if(d==="input"&&x&&W[P]){const et=B[c]||c;return W[P][et]||""}return""},Mt=()=>{if(d==="hidden"&&x&&W[P]){const et=B[c]||c;if(Q.some(Et=>w.includes(Et.id)&&Et.toNeuronId===a&&D.some(Dt=>Dt.id===Et.fromNeuronId))){let Et=0;D.forEach(ie=>{const Ze=B[ie.label]||ie.label,xe=parseFloat(W[P][Ze])||0,on=Y[`${Ze}-${et}`]||0;Et+=xe*on});const Dt=F[et]||0;return(Et+Dt).toFixed(1)}}return""},Be=()=>{if(d==="output"&&x&&G&&W[P]){const et=B[c]||c,St=[];M.forEach(Dt=>{const ge=B[Dt.label]||Dt.label;let ie=0;D.forEach(Yn=>{const ke=B[Yn.label]||Yn.label,Se=parseFloat(W[P][ke])||0,mn=Y[`${ke}-${ge}`]||0;ie+=Se*mn});const Ze=F[ge]||0,xe=ie+Ze,on=Math.max(0,xe),zn=q[`${ge}-${et}`]||0,Nn=on*zn;St.push(Nn.toFixed(1))});const Et=lt[et]||0;return`${St.join(" + ")} + ${Et.toFixed(1)}`}return""},Nt=()=>{if(d==="output"&&x&&G&&W[P]){const et=B[c]||c;let St=0;M.forEach(Dt=>{const ge=B[Dt.label]||Dt.label;let ie=0;D.forEach(Nn=>{const Yn=B[Nn.label]||Nn.label,ke=parseFloat(W[P][Yn])||0,Se=Y[`${Yn}-${ge}`]||0;ie+=ke*Se});const Ze=F[ge]||0,xe=ie+Ze,on=Math.max(0,xe),zn=q[`${ge}-${et}`]||0;St+=on*zn});const Et=lt[et]||0;return St+=Et,St.toFixed(1)}return""},It=[{direction:"top",x:0,y:-s},{direction:"right",x:s,y:0},{direction:"bottom",x:0,y:s},{direction:"left",x:-s,y:0}],Qt=()=>{pe||(Z(!0),ct&&Ne(a))},Ct=()=>{Z(!1),ct&&Ne(null)};return O.jsxs($t.g,{drag:!0,dragMomentum:!1,dragElastic:.1,initial:{x:i,y:l},animate:{x:i,y:l,opacity:I},onDragStart:()=>{Zt(!0),Z(!1)},onDrag:(et,St)=>{h(a,St.offset.x,St.offset.y)},onDragEnd:(et,St)=>{Zt(!1);const Et=i+St.offset.x,Dt=l+St.offset.y;f(a,Et,Dt),h(a,0,0)},whileDrag:{scale:1.1},onMouseEnter:Qt,onMouseLeave:Ct,style:{cursor:pe?"grabbing":"default"},children:[O.jsx("circle",{cx:0,cy:0,r:s+20,fill:"transparent",style:{pointerEvents:"all",cursor:"default"}}),O.jsx($t.circle,{cx:0,cy:0,r:s,className:J(d),initial:{scale:0,opacity:0},animate:{scale:1,opacity:pt,stroke:ct&&$?"#ef4444":void 0,strokeWidth:ct&&$?3:void 0},transition:{duration:.6,type:"spring"},style:{cursor:ct?"crosshair":pe?"grabbing":"grab"},onClick:et=>{et.button===0&&ct&&(et.stopPropagation(),jt(a))}}),(Mt()||d==="output"&&G)&&O.jsx("rect",{x:-23,y:-9,width:46,height:18,rx:3,fill:"rgb(6, 129, 0)",stroke:"#22c55e",strokeWidth:2}),O.jsx($t.text,{x:0,y:5,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},style:{pointerEvents:"none"},children:Mt()?"ReLU":d==="output"&&G?"Sig":c}),ot&&!(d==="output"&&G)&&O.jsx($t.text,{x:0,y:-s-10,className:Mt()?"neuron-text":"neuron-weights-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},style:{},children:Mt()||ot}),d==="output"&&G&&Be()&&O.jsxs($t.text,{x:0,y:-s-25,className:"formula-text",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{fontSize:"11px",fill:"#ffffff",textAnchor:"middle",pointerEvents:"none"},children:[Be(),O.jsx("tspan",{fontSize:"8px",dy:"2",dx:"1",children:"b2"})]}),d==="output"&&G&&Nt()&&O.jsx($t.text,{x:0,y:-s-10,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},style:{pointerEvents:"none"},children:Nt()}),d==="input"&&x&&Ut()&&O.jsx($t.text,{x:0,y:-s*1.3,className:"input-value-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},style:{pointerEvents:"none",fontSize:"14px",fill:"#ffffff",textAnchor:"middle"},children:Ut()}),O.jsx(ty,{children:k&&!pe&&It.map(et=>O.jsx(oT,{x:et.x,y:et.y,neuronId:a,direction:et.direction,onStartConnection:g,isHighlighted:p.includes(et.direction)},et.direction))})]})},ng=(a,i)=>{const l=a.length,s=a[0].length,c=i[0].length,d=Array(l).fill().map(()=>Array(c).fill(0));for(let f=0;f<l;f++)for(let g=0;g<c;g++)for(let p=0;p<s;p++)d[f][g]+=a[f][p]*i[p][g];return d},ag=(a,i)=>a.map(l=>l.map((s,c)=>s+(i[c]||0))),rT=a=>a.map(i=>i.map(l=>Math.max(0,l))),sT=a=>a.map(i=>i.map(l=>1/(1+Math.exp(-l)))),uT=(a,i)=>a.map((s,c)=>{const d=Math.max(1e-15,Math.min(.999999999999999,i[c]));return-(s*Math.log(d)+(1-s)*Math.log(1-d))}),cT=(a,i,l,s,c,d,f,g,p,h)=>{const y=a.filter(v=>{const x=i.some(M=>v[M.label]&&v[M.label].trim()!==""),w=v.Truth!==void 0&&v.Truth!=="";return x&&w});if(y.length===0){alert("Please add input data with truth values");return}if(l.length===0||s.length===0){alert("Please add hidden and output neurons");return}try{const v=y.map(Q=>i.map(G=>parseFloat(Q[G.label])||0)),x=y.map(Q=>parseFloat(Q.Truth)||0),w=i.map(Q=>l.map(G=>{const lt=c[Q.label]||Q.label,ct=c[G.label]||G.label;return d[`${lt}-${ct}`]||0})),M=l.map(Q=>{const G=c[Q.label]||Q.label;return f[G]||0}),D=l.map(Q=>s.map(G=>{const lt=c[Q.label]||Q.label,ct=c[G.label]||G.label;return g[`${lt}-${ct}`]||0})),_=s.map(Q=>{const G=c[Q.label]||Q.label;return p[G]||0});let B=ng(v,w);B=ag(B,M);const Y=rT(B);let q=ng(Y,D);q=ag(q,_);const P=sT(q).map(Q=>Q[0]),F=uT(x,P);h({predictions:P,truthValues:x,losses:F,showResults:!0})}catch(v){console.error("Error in forward pass:",v),console.error("Error stack:",v.stack),alert("Error in calculation. Please check your inputs and weights.")}},ig=({title:a,neurons:i,data:l,setData:s,onHeaderChange:c,onCellHover:d,isOutput:f=!1,truthValues:g=[],predictions:p=[],losses:h=[]})=>{const y=()=>{f||s(M=>[...M,{}])},v=(M,D,_)=>{f||(s(B=>{const Y=[...B];return Y[M]||(Y[M]={}),Y[M][D]=_,Y}),M===l.length-1&&_.trim()!==""&&y())},x=(M,D,_)=>{D===_||f||(s(B=>B.map(Y=>{if(Y[D]!==void 0){const q={...Y};return q[_]=Y[D],delete q[D],q}return Y})),c(D,_))},w=M=>M<.3?"#22c55e":M<.7?"#eab308":"#ef4444";return!f&&i.length===0?null:O.jsxs("div",{className:"input-table-container",children:[O.jsx("h3",{className:"table-title",children:a}),O.jsxs("table",{className:"neural-table input-table",children:[O.jsx("thead",{children:O.jsxs("tr",{children:[O.jsx("th",{children:O.jsx("input",{type:"text",className:"header-input",value:"Truth",readOnly:!0})}),!f&&i.map(M=>O.jsx("th",{children:O.jsx("input",{type:"text",className:"header-input",value:M.label,onChange:D=>x(M.id,M.label,D.target.value||M.label),onKeyDown:D=>{D.key==="Enter"&&D.target.blur()}})},M.id)),f&&O.jsxs(O.Fragment,{children:[O.jsx("th",{children:O.jsx("input",{type:"text",className:"header-input",value:"ŷ",readOnly:!0})}),O.jsx("th",{children:O.jsx("input",{type:"text",className:"header-input",value:"Loss",readOnly:!0})})]})]})}),O.jsx("tbody",{children:(f?g:l).map((M,D)=>O.jsxs("tr",{children:[O.jsx("td",{children:O.jsx("input",{type:"number",className:"cell-input",value:f?g[D]:M.Truth||"",onChange:f?void 0:_=>{const B=_.target.value;(B===""||B==="0"||B==="1")&&v(D,"Truth",B)},placeholder:"0",min:"0",max:"1",step:"1",readOnly:f})}),!f&&i.map(_=>O.jsx("td",{children:O.jsx("input",{type:"number",className:"cell-input",value:M[_.label]||"",onChange:B=>v(D,_.label,B.target.value),onMouseEnter:()=>d("neuron",_.label),onMouseLeave:()=>d(null),onFocus:()=>d("neuron",_.label),onBlur:()=>d(null),placeholder:"0",step:"0.1"})},_.id)),f&&O.jsxs(O.Fragment,{children:[O.jsx("td",{children:O.jsx("input",{type:"number",className:"cell-input",value:p[D]?.toFixed(4)||"",readOnly:!0})}),O.jsx("td",{children:O.jsx("input",{type:"number",className:"cell-input",value:h[D]?.toFixed(4)||"",style:{backgroundColor:h[D]?w(h[D]):"transparent",color:h[D]&&h[D]<1?"#000":"#fff"},readOnly:!0})})]})]},D))})]})]})},og=({title:a,inputLabels:i,neuronLabels:l,weights:s,biases:c,onWeightChange:d,onBiasChange:f,onHeaderChange:g,showSaveLoad:p,onSave:h,onLoad:y,onCellHover:v,biasLabel:x="b"})=>l.length===0?null:O.jsxs("div",{className:"weights-table-container",children:[O.jsxs("div",{className:"table-header",children:[O.jsx("h3",{className:"table-title",children:a}),p]}),O.jsxs("table",{className:"neural-table weights-table",children:[O.jsxs("thead",{children:[O.jsxs("tr",{children:[O.jsx("th",{className:"bias-label",children:x}),l.map((w,M)=>O.jsx("th",{children:O.jsx("input",{type:"number",className:"bias-input",value:c[w]||"",onChange:D=>f(w,D.target.value),onMouseEnter:()=>v("neuron",w),onMouseLeave:()=>v(null),onFocus:()=>v("neuron",w),onBlur:()=>v(null),placeholder:"0.5",step:"0.1"})},M))]}),O.jsxs("tr",{children:[O.jsx("th",{}),l.map((w,M)=>O.jsx("th",{children:O.jsx("input",{type:"text",className:"header-input",defaultValue:w,onBlur:D=>g(w,D.target.value||w),onKeyDown:D=>{D.key==="Enter"&&D.target.blur()}})},M))]})]}),O.jsx("tbody",{children:i.map((w,M)=>O.jsxs("tr",{children:[O.jsx("td",{className:"row-header",children:w}),l.map((D,_)=>O.jsx("td",{children:O.jsx("input",{type:"number",className:"cell-input",value:s[`${w}-${D}`]||"",onChange:B=>d(w,D,B.target.value),onMouseEnter:()=>v("connection",w,D),onMouseLeave:()=>v(null),onFocus:()=>v("connection",w,D),onBlur:()=>v(null),placeholder:"0.1",step:"0.1"})},_))]},M))})]})]}),Py=(a,i)=>a==="input"?`X${i}`:a==="hidden"?`H${i}`:a.startsWith("hidden")?`H${parseInt(a.replace("hidden",""))}${i}`:`Y${i}`,fT=(a,i,l,s,c)=>{let d;a==="input"?d=200:a==="hidden"?d=400:a.startsWith("hidden")?d=400+((parseInt(a.replace("hidden",""))||1)-1)*100:d=400+l*100+100;const f=s-100-90*(i-1);return{x:d,y:f}},dT=(a,i,l,s,c)=>{const{x:d,y:f}=fT(a,i,l,s);return{id:`${a}-${Date.now()}`,x:d,y:f,radius:c,label:Py(a,i),type:a}},hT=(a,i,l,s,c,d,f)=>{const g=i[a]+1,p=dT(a,g,c,d,f);l(h=>{const y=[...h,p],v=y.filter(x=>x.type===a).sort((x,w)=>x.y-w.y);return y.map(x=>{if(x.type===a){const w=v.findIndex(M=>M.id===x.id);return{...x,label:Py(a,w+1)}}return x})}),s(h=>({...h,[a]:g}))},mT=async(a,i,l)=>{l(!0);const s=a.filter(h=>h.type==="input").sort((h,y)=>h.y-y.y),c=a.filter(h=>h.type==="hidden"||h.type.startsWith("hidden")).sort((h,y)=>h.x-y.x||h.y-y.y),d=a.filter(h=>h.type==="output").sort((h,y)=>h.y-y.y);if(s.length===0||c.length===0)return;const f={};c.forEach(h=>{const y=h.x;f[y]||(f[y]=[]),f[y].push(h)});const g=Object.keys(f).map(Number).sort(),p=[];if(g.length>0){const h=f[g[0]],y=[];for(const v of s)for(const x of h)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}for(let h=0;h<g.length-1;h++){const y=f[g[h]],v=f[g[h+1]],x=[];for(const w of y)for(const M of v)x.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:w.id,toNeuronId:M.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(x)}if(d.length>0&&g.length>0){const h=f[g[g.length-1]],y=[];for(const v of h)for(const x of d)y.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:v.id,toNeuronId:x.id,fromDirection:"right",toDirection:"left",isAnimating:!0});p.push(y)}p.forEach((h,y)=>{setTimeout(()=>{i(v=>[...v,...h]),setTimeout(()=>{i(v=>v.map(x=>h.some(w=>w.id===x.id)?{...x,isAnimating:!1}:x))},600)},100+y*700)})},lg=`
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
}`,pT="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='18'%20viewBox='0%200%2022%2018'%3e%3cg%3e%3cpolygon%20points='15.828%206%2018%206%2018%208%2022%204%2018%200%2018%202%2014.172%202%204.172%2012%200%2012%200%2016%205.828%2016%2015.828%206'/%3e%3cpolygon%20points='18%2010%2018%2012%2015.828%2012%2014.242%2010.414%2011.414%2013.242%2014.172%2016%2018%2016%2018%2018%2022%2014%2018%2010'/%3e%3cpolygon%20points='5.758%207.586%208.586%204.758%205.828%202%200%202%200%206%204.172%206%205.758%207.586'/%3e%3c/g%3e%3c/svg%3e",nn=({matrix:a,label:i,image:l,x:s=0,y:c=0})=>{if(!a||a.length===0)return null;const d=a.length,f=a[0]?.length||0,g=40,p=4;return O.jsxs("div",{className:"matrix-display",style:{position:"relative",fontFamily:"monospace",color:"white"},children:[i&&O.jsx("div",{className:"matrix-label",style:{position:"absolute",top:"-2.2rem",left:"50%",transform:"translateX(-50%)",fontSize:"18px",fontWeight:"bold",whiteSpace:"nowrap"},children:O.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[O.jsx("span",{children:i}),l]})}),O.jsxs("div",{className:"matrix-container",style:{position:"relative"},children:[O.jsx("div",{className:"matrix-bracket-left",style:{position:"absolute",left:"-8px",top:"0",height:`${d*(g+p)-p}px`,width:"6px",borderLeft:"2px solid white",borderTop:"2px solid white",borderBottom:"2px solid white"}}),O.jsx("div",{className:"matrix-bracket-right",style:{position:"absolute",right:"-8px",top:"0",height:`${d*(g+p)-p}px`,width:"6px",borderRight:"2px solid white",borderTop:"2px solid white",borderBottom:"2px solid white"}}),O.jsx("div",{className:"matrix-content",children:a.map((h,y)=>O.jsx("div",{className:"matrix-row",style:{display:"flex",marginBottom:y<d-1?`${p}px`:"0"},children:h.map((v,x)=>O.jsx("div",{className:"matrix-cell",style:{width:`${g}px`,height:`${g}px`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",marginRight:x<f-1?`${p}px`:"0"},children:typeof v=="number"?v.toFixed(1):v},x))},y))})]})]})},no=({children:a,delay:i=0,isVisible:l=!0})=>O.jsx($t.div,{initial:{opacity:0},animate:{opacity:l?1:0},transition:{delay:i,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"40px"},children:a}),ao=({symbol:a})=>O.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:a}),rg=({label:a,label2:i})=>O.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"5px"},children:[O.jsx("div",{style:{fontSize:"16px",color:"white",fontWeight:"bold",backgroundColor:"rgb(6, 129, 0)",border:"2px solid #22c55e",borderRadius:"8px",padding:"2px 8px"},children:a}),O.jsx("img",{src:pT,alt:"Activation Arrow",style:{width:"24px",height:"24px",filter:"invert(1)"}}),O.jsx("div",{style:{fontSize:"16px",color:"white"},children:i})]}),gT=()=>O.jsx($t.div,{initial:{opacity:0,scaleY:0},animate:{opacity:1,scaleY:1},transition:{duration:.8},style:{width:"5px",height:"35rem",backgroundColor:"white",margin:"0 60px",transformOrigin:"top"}}),Kc=!0;function yT(){const[a,i]=X.useState([]),[l,s]=X.useState([]),[c,d]=X.useState(!1),[f,g]=X.useState(1),[p,h]=X.useState(null),[y,v]=X.useState(null),[x,w]=X.useState({input:0,hidden:0,output:0,...Array.from({length:10},(V,K)=>({[`hidden${K+2}`]:0})).reduce((V,K)=>({...V,...K}),{})}),[M,D]=X.useState([{}]),[_,B]=X.useState({}),[Y,q]=X.useState({}),[W,P]=X.useState({}),[F,Q]=X.useState({}),[G,lt]=X.useState({}),[ct,jt]=X.useState(null),[Gt,Ne]=X.useState({x:0,y:0}),[pe,Zt]=X.useState(null),[k,Z]=X.useState({}),[$,pt]=X.useState([]),[T,L]=X.useState([]),[I,J]=X.useState([]),[it,yt]=X.useState(!1),[ot,Ut]=X.useState(!1),[Mt,Be]=X.useState(!1),[Nt,It]=X.useState(!1),[Qt,Ct]=X.useState([]),[et,St]=X.useState(0),[Et,Dt]=X.useState(!1),[ge,ie]=X.useState(null),[Ze,xe]=X.useState(!1),[on,zn]=X.useState(5),[Nn,Yn]=X.useState(!1),[ke,Se]=X.useState(!1),[mn,Le]=X.useState(null),[As,kl]=X.useState(null),[_l,mi]=X.useState(!0),[pi,kn]=X.useState(!1),[wt,He]=X.useState({});function Te(V,K){let gt=-1*(on-5)/10*V;return K&&gt<0&&(gt=Math.max(0,gt)),new Promise(kt=>setTimeout(kt,V+gt))}X.useEffect(()=>{if(!localStorage.getItem("neuralNetworkData")){xe(!0);const V=setTimeout(()=>xe(!1),6e3);return()=>clearTimeout(V)}},[]),X.useEffect(()=>{const V=K=>{K.key==="`"&&Yn(st=>!st)};return window.addEventListener("keydown",V),()=>{window.removeEventListener("keydown",V)}},[]);const Ya=X.useRef(null),Je=30,po=400;let Xn=[];const jl=()=>{cT(M,Qe,Pe,Ee,G,_,Y,W,F,V=>{Xn=V.predictions,pt(V.predictions),L(V.truthValues),J(V.losses),yt(V.showResults)})},Vl=async()=>{if(Pe.length===0)return;Ut(!0),yt(!1),await Te(500),kn(!0);const V=M.filter(rt=>{const Wt=Qe.some(We=>rt[We.label]&&rt[We.label].trim()!==""),Ft=rt.Truth!==void 0&&rt.Truth!=="";return Wt&&Ft});if(V.length===0){alert("Please add input data with truth values"),Ut(!1),kn(!1);return}const K=V.map(rt=>Qe.map(Wt=>parseFloat(rt[Wt.label])||0)),st=Qe.map(rt=>Pe.map(Wt=>{const Ft=G[rt.label]||rt.label,We=G[Wt.label]||Wt.label;return _[`${Ft}-${We}`]||0})),gt=Pe.map(rt=>{const Wt=G[rt.label]||rt.label;return Y[Wt]||0}),kt=Array(K.length).fill(gt),dt=K.map(rt=>st[0].map((Wt,Ft)=>rt.reduce((We,pa,Ga)=>We+pa*st[Ga][Ft],0))),Tt=dt.map(rt=>rt.map((Wt,Ft)=>Wt+gt[Ft])),Bt=Tt.map(rt=>rt.map(Wt=>Math.max(0,Wt)));let te,we,fe,ma,bo,Xa;const bi=Ee.length>0;bi&&(te=Pe.map(rt=>Ee.map(Wt=>{const Ft=G[rt.label]||rt.label,We=G[Wt.label]||Wt.label;return W[`${Ft}-${We}`]||0})),we=Ee.map(rt=>{const Wt=G[rt.label]||rt.label;return F[Wt]||0}),fe=Array(Bt.length).fill(we),ma=Bt.map(rt=>te[0].map((Wt,Ft)=>rt.reduce((We,pa,Ga)=>We+pa*te[Ga][Ft],0))),bo=ma.map(rt=>rt.map((Wt,Ft)=>Wt+we[Ft])),Xa=bo.map(rt=>rt.map(Wt=>1/(1+Math.exp(-Wt))))),He({step:1,X:K,W1:st,b1:gt,XW1:dt,b1Matrix:kt,Z1:Tt,A1:Bt,W2:te,b2:we,b2Matrix:fe,A1W2:ma,Z2:bo,A2:Xa,hasOutputLayer:bi,showFormula:!1,showXW1:!1,showZ1:!1,showReLU:!1,showDivider:!1,showLayer2Formula:!1,showA1W2:!1,showZ2:!1,showSigmoid:!1}),await Te(1e3),He(rt=>({...rt,showFormula:!0})),await Te(1500),He(rt=>({...rt,showXW1:!0})),await Te(1500),He(rt=>({...rt,showZ1:!0})),await Te(1e3),He(rt=>({...rt,showReLU:!0})),bi&&(await Te(1500),He(rt=>({...rt,showDivider:!0})),await Te(1e3),He(rt=>({...rt,showLayer2Formula:!0})),await Te(1500),He(rt=>({...rt,showA1W2:!0})),await Te(1500),He(rt=>({...rt,showZ2:!0})),await Te(1e3),He(rt=>({...rt,showSigmoid:!0}))),Ut(!1),await Te(4e3,Kc)},Ul=V=>{ke&&(i(K=>K.filter(st=>st.id!==V)),s(K=>K.filter(st=>st.fromNeuronId!==V&&st.toNeuronId!==V)),v(null),Le(null))},go=V=>{ke&&(s(K=>K.filter(st=>st.id!==V)),h(null),kl(null))},yo=async()=>{if(_l){if(Pe.length===0)return;Ut(!0),yt(!1),It(!0),St(0),Dt(!1),ie(null);const V=async K=>{const st=Pe[K];if(!st)return;const gt=l.filter(dt=>dt.toNeuronId===st.id&&Qe.some(Tt=>Tt.id===dt.fromNeuronId)).map(dt=>dt.id);Ct(dt=>Array.from(new Set([...dt,...gt]))),await Te(3e3),Ct(dt=>dt.filter(Tt=>!gt.includes(Tt)));const kt=l.filter(dt=>dt.fromNeuronId===st.id&&Ee.some(Tt=>Tt.id===dt.toNeuronId)).map(dt=>dt.id);Ct(dt=>Array.from(new Set([...dt,...kt]))),await Te(2e3)};for(let K=0;K<Pe.length;K++)await V(K);if(Dt(!0),await Te(3e3),jl(),Ee.length>0&&Xn.length>0){const K=Ee[0],st=Xn[0].toFixed(4),gt={id:`display-${Date.now()}`,x:K.x+150,y:K.y,radius:30,label:st,type:"display"};ie(gt),i(dt=>[...dt,gt]);const kt={id:`sigmoid-connection-${Date.now()}`,fromNeuronId:K.id,toNeuronId:gt.id,fromDirection:"right",toDirection:"left",isSigmoidConnection:!0};s(dt=>[...dt,kt]),Ct(dt=>[...dt,kt.id])}await Te(2e3),Ut(!1),await Te(4e3,Kc),Dt(!1),i(K=>K.filter(st=>st.type!=="display")),s(K=>K.filter(st=>!st.isSigmoidConnection)),Ct([]),await Te(700,Kc),It(!1)}else await Vl(),jl()},Bl=V=>{const{setNeuronHeaders:K,setHiddenWeights:st,setHiddenBiases:gt,setOutputWeights:kt,setOutputBiases:dt}=V;return{handleInputHeaderChange:(Tt,Bt)=>{K(te=>({...te,[Tt]:Bt}))},handleWeightChange:(Tt,Bt,te)=>{st(we=>({...we,[`${Tt}-${Bt}`]:parseFloat(te)||0}))},handleBiasChange:(Tt,Bt)=>{gt(te=>({...te,[Tt]:parseFloat(Bt)||0}))},handleOutputWeightChange:(Tt,Bt,te)=>{kt(we=>({...we,[`${Tt}-${Bt}`]:parseFloat(te)||0}))},handleOutputBiasChange:(Tt,Bt)=>{dt(te=>({...te,[Tt]:parseFloat(Bt)||0}))},handleNeuronHeaderChange:(Tt,Bt)=>{K(te=>({...te,[Tt]:Bt}))}}},{handleInputHeaderChange:Os,handleWeightChange:_n,handleBiasChange:Me,handleOutputWeightChange:qe,handleOutputBiasChange:ua,handleNeuronHeaderChange:gi}=Bl({setNeuronHeaders:lt,setHiddenWeights:B,setHiddenBiases:q,setOutputWeights:P,setOutputBiases:Q}),Ll=()=>{const V=a.filter(gt=>gt.type!=="display"),K=l.filter(gt=>!gt.isSigmoidConnection),st={inputData:M,hiddenWeights:_,hiddenBiases:Y,outputWeights:W,outputBiases:F,neuronHeaders:G,neurons:V,connections:K,counters:x,timestamp:new Date().toISOString()};localStorage.setItem("neuralNetworkData",JSON.stringify(st))},Hl=()=>{xe(!1);let V=localStorage.getItem("neuralNetworkData");V||(V=lg,localStorage.setItem("neuralNetworkData",lg));try{const K=JSON.parse(V);D(K.inputData||[{}]),B(K.hiddenWeights||{}),q(K.hiddenBiases||{}),P(K.outputWeights||{}),Q(K.outputBiases||{}),lt(K.neuronHeaders||{}),K.neurons&&i(K.neurons),K.connections&&(s(K.connections),Be(!0)),K.counters&&w(K.counters)}catch(K){console.error("Error loading network data:",K)}},yi=(V,K,st)=>{if(V==="connection"&&K&&st){const gt=a.find(dt=>(G[dt.label]||dt.label)===K),kt=a.find(dt=>(G[dt.label]||dt.label)===st);if(gt&&kt){const dt=l.find(Tt=>Tt.fromNeuronId===gt.id&&Tt.toNeuronId===kt.id);h(dt?.id||null)}v(null)}else if(V==="neuron"&&K){const gt=a.find(kt=>(G[kt.label]||kt.label)===K);v(gt?.id||null),h(null)}else h(null),v(null)},Qe=a.filter(V=>V.type==="input").sort((V,K)=>V.y-K.y),Pe=a.filter(V=>V.type==="hidden").sort((V,K)=>V.y-K.y),Ee=a.filter(V=>V.type==="output").sort((V,K)=>V.y-K.y),ca=Qe.map(V=>G[V.label]||V.label),fa=Pe.map(V=>G[V.label]||V.label),da=Ee.map(V=>G[V.label]||V.label),ce=V=>{if(!Ya.current)return{x:0,y:0};const K=Ya.current.getBoundingClientRect(),st=(V.clientX-K.left)/K.width*800,gt=(V.clientY-K.top)/K.height*400;return{x:st,y:gt}},ql=(V,K,st)=>{Z(gt=>({...gt,[V]:{x:K,y:st}}))},Pl=X.useCallback(V=>{if(ct&&Ya.current){const K=ce(V);Ne(K);let st=null,gt=1/0;a.forEach(kt=>{if(kt.id!==ct.fromNeuronId){const dt=k[kt.id]||{x:0,y:0},Tt=kt.x+dt.x,Bt=kt.y+dt.y;[{direction:"top",x:Tt,y:Bt-Je},{direction:"right",x:Tt+Je,y:Bt},{direction:"bottom",x:Tt,y:Bt+Je},{direction:"left",x:Tt-Je,y:Bt}].forEach(we=>{const fe=Math.sqrt(Math.pow(K.x-we.x,2)+Math.pow(K.y-we.y,2));fe<15&&fe<gt&&(gt=fe,st={neuronId:kt.id,direction:we.direction})})}}),Zt(st)}},[ct,a,k,Je]),Gn=V=>{hT(V,x,i,w,f,po,Je)},ha=(V,K,st)=>{i(gt=>gt.map(kt=>kt.id===V?{...kt,x:K,y:st}:kt))},Ds=(V,K,st,gt,kt)=>{if(ct)if(V!==ct.fromNeuronId){const dt={id:`connection-${Date.now()}`,fromNeuronId:ct.fromNeuronId,toNeuronId:V,fromDirection:ct.fromDirection,toDirection:K};s(Tt=>[...Tt,dt]),jt(null),Zt(null)}else jt(null),Zt(null);else{const dt=a.find(ma=>ma.id===V),Tt=k[V]||{x:0,y:0},Bt=dt.x+Tt.x,te=dt.y+Tt.y,we={top:{x:Bt,y:te-Je},right:{x:Bt+Je,y:te},bottom:{x:Bt,y:te+Je},left:{x:Bt-Je,y:te}},fe=ce(kt);jt({fromNeuronId:V,fromDirection:K,startX:we[K].x,startY:we[K].y}),Ne(fe)}},Yl=()=>{mT(a,s,Be)},Xl=V=>{V.target.classList.contains("network-svg")&&ct&&(jt(null),Zt(null))},Gl=(V,K,st=()=>Gn(V),gt=0)=>O.jsx($t.button,{onClick:st,className:"spawn-btn",whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20-gt},animate:{opacity:1,y:-25},transition:{delay:.1,duration:.1},children:K},V);return O.jsxs("div",{className:"app-container",children:[O.jsxs("div",{style:{position:"fixed",top:0,left:10,zIndex:100,background:"transparent",padding:"18px 24px 0 24px",color:"white",fontSize:"1rem",letterSpacing:"0.04em"},children:[O.jsx("a",{href:"../matrix_tool/",style:{color:"white",fontWeight:300,marginRight:"24px"},children:"Home"}),O.jsx("a",{href:"https://www.linkedin.com/in/laish-glenberg/",style:{color:"white",fontWeight:300,marginRight:"24px"},children:"About"}),O.jsx("a",{href:"https://ko-fi.com/weadsy",style:{color:"white",fontWeight:300,marginRight:"24px"},children:"Donate"})]}),O.jsxs($t.div,{className:"content-wrapper-with-tables",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,ease:"easeOut"},children:[O.jsxs("div",{className:"left-panel",children:[O.jsx(ig,{title:"Input Col Vectors",neurons:Qe,data:M,setData:D,onHeaderChange:Os,onCellHover:yi,isOutput:!1}),ot&&O.jsx("div",{style:{minHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:O.jsx(eg,{color:["#7e7e7e","#979797","#b1b1b1","#cacaca"]})}),it&&!ot&&O.jsx($t.div,{initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.7,ease:"easeOut"},children:O.jsx(ig,{title:"Final Predictions",neurons:[],data:[],setData:()=>{},onHeaderChange:()=>{},onCellHover:()=>{},isOutput:!0,truthValues:T,predictions:$,losses:I})})]}),O.jsxs("div",{className:"center-panel",children:[O.jsxs("div",{className:"main-title-row",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"5px",position:"relative"},children:[O.jsx($t.h1,{className:"main-title",initial:{opacity:0,y:-30},animate:{opacity:1,y:10},transition:{delay:.3,duration:.8},style:{margin:0},children:"Neural Network Builder"}),O.jsxs("div",{className:"save-load-buttons",style:{position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},children:[O.jsx("button",{className:"save-load-btn",title:"Save all table values in cookies",onClick:Ll,style:{marginRight:"8px"},children:"Save"}),O.jsx("button",{className:`save-load-btn${Ze?" flash":""}`,title:"Load tables from cookies",onClick:Hl,children:"Load"})]})]}),O.jsx("div",{className:"eraser-checkbox-wrapper",style:{position:"absolute",right:"420px",top:"110px",zIndex:10},children:O.jsxs("label",{className:"eraser-checkbox-container",style:{border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",padding:"0.5rem"},children:[O.jsx("input",{type:"checkbox",checked:ke,onChange:V=>Se(V.target.checked),className:"eraser-checkbox"}),O.jsx("span",{className:"eraser-label",children:"Eraser"})]})}),O.jsx("div",{className:"eraser-checkbox-wrapper",style:{position:"absolute",right:"420px",top:"170px",zIndex:10},children:O.jsxs("label",{className:"speedbox-container",style:{border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",padding:"0.7rem 0.5rem",display:"flex",alignItems:"center",gap:"0.5rem",marginRight:"12px"},children:[O.jsx("input",{type:"number",min:0,max:Nn?20:9,step:1,value:on,onChange:V=>zn(Number(V.target.value)),className:"eraser-checkbox ishovered",style:{width:"38px",background:"transparent",color:"white",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"4px",fontSize:"1rem",padding:"2px 6px",minHeight:"25px"}}),O.jsx("span",{className:"eraser-label",children:"Speed"})]})}),a.some(V=>V.type==="output")&&a.some(V=>V.type==="input")&&a.some(V=>V.type==="hidden")&&O.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",marginTop:"10px"},children:[O.jsxs("label",{className:"checkbox-container",style:{display:"flex",alignItems:"center",gap:"8px",color:"white",fontSize:"14px"},children:[O.jsx("input",{type:"checkbox",checked:_l,onChange:V=>mi(V.target.checked),style:{transform:"scale(1.2)",accentColor:"#ffffff"}}),"Learning Mode"]}),O.jsx($t.button,{onClick:yo,className:`spawn-btn${Mt?"":" btn-disabled"}`,style:{fontSize:"16px",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",opacity:ot?.5:1,cursor:ot?"not-allowed":"pointer"},disabled:!Mt||ot,whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1,duration:.1},children:ot?O.jsx(eg,{color:"#ffffff",size:"small"}):O.jsxs(O.Fragment,{children:["START",O.jsx("img",{src:VS,alt:"Train",style:{marginLeft:"10px",width:22,height:22,filter:"invert(1)",transform:"scaleX(-1)"}})]})})]}),O.jsx(ty,{children:pi&&O.jsx($t.div,{className:"matrix-calculations-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.1,duration:1},style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.95)",zIndex:1e3,overflow:"hidden",padding:"50px",fontFamily:"monospace"},children:wt.step>=1&&O.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"20px",marginLeft:"80px"},children:[O.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[wt.showFormula&&O.jsxs(no,{delay:0,isVisible:!0,children:[O.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z1 ="}),O.jsx(nn,{matrix:wt.X,label:"X"}),O.jsx(ao,{symbol:"×"}),O.jsx(nn,{matrix:wt.W1,label:"W1"}),O.jsx(ao,{symbol:"+"}),O.jsx(nn,{matrix:[wt.b1],label:"b1"})]}),wt.showXW1&&O.jsxs(no,{delay:0,isVisible:!0,children:[O.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z1 ="}),O.jsx(nn,{matrix:wt.XW1,label:"X * W1"}),O.jsx(ao,{symbol:"+"}),O.jsx(nn,{matrix:wt.b1Matrix,label:"b1",image:O.jsx("img",{src:nT,alt:"Activation Arrow",style:{width:"10px",height:"20px",filter:"invert(1)"}})})]}),wt.showZ1&&O.jsxs(no,{delay:0,isVisible:!0,children:[O.jsxs($t.div,{initial:{x:wt.showReLU?-25:0},animate:{x:wt.showReLU?-25:0},transition:{duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[O.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z1 ="}),O.jsx(nn,{matrix:wt.Z1,label:"X * W1 + b1"})]}),wt.showReLU&&O.jsxs($t.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.5,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[O.jsx(rg,{label:"ReLU",label2:"max(0,Z1)"}),O.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"A1 ="}),O.jsx(nn,{matrix:wt.A1,label:"ReLU(Z1)"})]})]})]}),wt.showDivider&&wt.hasOutputLayer&&O.jsx(gT,{}),wt.hasOutputLayer&&O.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[wt.showLayer2Formula&&O.jsxs(no,{delay:0,isVisible:!0,children:[O.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z2 ="}),O.jsx(nn,{matrix:wt.A1,label:"A1"}),O.jsx(ao,{symbol:"×"}),O.jsx(nn,{matrix:wt.W2,label:"W2"}),O.jsx(ao,{symbol:"+"}),O.jsx(nn,{matrix:[wt.b2],label:"b2"})]}),wt.showA1W2&&O.jsxs(no,{delay:0,isVisible:!0,children:[O.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z2 ="}),O.jsx(nn,{matrix:wt.A1W2,label:"A1 * W2"}),O.jsx(ao,{symbol:"+"}),O.jsx(nn,{matrix:wt.b2Matrix,label:"b2"})]}),wt.showZ2&&O.jsxs(no,{delay:0,isVisible:!0,children:[O.jsxs($t.div,{initial:{x:wt.showSigmoid?-25:0},animate:{x:wt.showSigmoid?-25:0},transition:{duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[O.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"Z2 ="}),O.jsx(nn,{matrix:wt.Z2,label:"A1 * W2 + b2"})]}),wt.showSigmoid&&O.jsxs($t.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.5,duration:.5},style:{display:"flex",alignItems:"center",gap:"20px"},children:[O.jsx(rg,{label:"Sigmoid"}),O.jsx("div",{style:{fontSize:"24px",color:"white",fontWeight:"bold"},children:"ŷ ="}),O.jsx(nn,{matrix:wt.A2,label:"σ(Z2)"})]})]})]})]})})}),O.jsxs($t.svg,{ref:Ya,width:"100%",height:"400",viewBox:"0 0 800 400",className:"network-svg",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:1},onMouseMove:Pl,onClick:Xl,style:{cursor:ke?"crosshair":"default"},children:[O.jsx("defs",{children:O.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:O.jsx("polygon",{points:"0 0, 10 3.5, 0 7",className:"arrow-marker"})})}),l.map(V=>O.jsx(iT,{connection:V,neurons:a,neuronRadius:Je,neuronTransforms:k,isGlowing:p===V.id,emphasizedConnections:Qt,showForwardPassVisuals:Nt,inputData:M,currentSampleIndex:et,neuronHeaders:G,hiddenWeights:_,inputNeurons:Qe,hiddenNeurons:Pe,hiddenBiases:Y,outputWeights:W,outputBiases:F,showSigmoidPhase:Et,outputNeurons:Ee,isEraserMode:ke,onEraseConnection:go,eraserHoveredConnection:As,setEraserHoveredConnection:kl},V.id)),ct&&O.jsx(aT,{startX:ct.startX,startY:ct.startY,endX:Gt.x,endY:Gt.y}),a.map(V=>O.jsx(lT,{id:V.id,x:V.x,y:V.y,radius:V.radius,label:V.label,type:V.type,onDragEnd:ha,onDragUpdate:ql,onStartConnection:Ds,highlightedDots:pe?.neuronId===V.id?[pe.direction]:[],isGlowing:y===V.id,neurons:a,showForwardPassVisuals:Nt,emphasizedConnections:Qt,hiddenNeurons:Pe,inputNeurons:Qe,outputNeurons:Ee,neuronHeaders:G,hiddenWeights:_,outputWeights:W,inputData:M,currentSampleIndex:et,hiddenBiases:Y,connections:l,showSigmoidPhase:Et,outputBiases:F,isEraserMode:ke,onEraseNeuron:Ul,eraserHoveredNeuron:mn,setEraserHoveredNeuron:Le},V.id))]}),O.jsxs("div",{className:"button-stack",children:[O.jsx("div",{className:"button-dense",children:a.some(V=>V.type==="input")&&a.some(V=>V.type==="hidden")&&Gl("dense","Dense Connect",Yl)}),O.jsx("div",{className:"button-container",children:[{type:"input",label:"Add Input"},{type:"hidden",label:"Add Hidden"},...c?Array.from({length:f-1},(V,K)=>({type:`hidden${K+2}`,label:`Add Hidden ${K+2}`})):[],{type:"output",label:"Add Output"}].map(({type:V,label:K})=>Gl(V,K))})]})]}),O.jsxs("div",{className:"right-panel",children:[O.jsx(og,{title:"Hidden Layer Weights",inputLabels:ca,neuronLabels:fa,weights:_,biases:Y,onWeightChange:_n,onBiasChange:Me,onHeaderChange:gi,showSaveLoad:!0,onSave:Ll,onLoad:Hl,onCellHover:yi,biasLabel:"b1"}),Pe.length>0&&Ee.length>0&&O.jsx(og,{title:"Output Layer Weights",inputLabels:fa,neuronLabels:da,weights:W,biases:F,onWeightChange:qe,onBiasChange:ua,onHeaderChange:gi,showSaveLoad:!1,onCellHover:yi,biasLabel:"b2"})]})]})]})}n1.createRoot(document.getElementById("root")).render(O.jsx(X.StrictMode,{children:O.jsx(yT,{})}));
