(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();function Bb(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var uc={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function jb(){if(y0)return Go;y0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var g in c)g!=="key"&&(d[g]=c[g])}else d=c;return c=d.ref,{$$typeof:a,type:s,key:f,ref:c!==void 0?c:null,props:d}}return Go.Fragment=i,Go.jsx=l,Go.jsxs=l,Go}var v0;function Hb(){return v0||(v0=1,uc.exports=jb()),uc.exports}var Y=Hb(),cc={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function Lb(){if(b0)return pt;b0=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=b&&T[b]||T["@@iterator"],typeof T=="function"?T:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,D={};function V(T,H,F){this.props=T,this.context=H,this.refs=D,this.updater=F||w}V.prototype.isReactComponent={},V.prototype.setState=function(T,H){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,H,"setState")},V.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function L(){}L.prototype=V.prototype;function X(T,H,F){this.props=T,this.context=H,this.refs=D,this.updater=F||w}var U=X.prototype=new L;U.constructor=X,M(U,V.prototype),U.isPureReactComponent=!0;var K=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function tt(T,H,F,J,it,xt){return F=xt.ref,{$$typeof:a,type:T,key:H,ref:F!==void 0?F:null,props:xt}}function Q(T,H){return tt(T.type,H,void 0,void 0,void 0,T.props)}function dt(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function St(T){var H={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(F){return H[F]})}var Xt=/\/+/g;function Qt(T,H){return typeof T=="object"&&T!==null&&T.key!=null?St(""+T.key):H.toString(36)}function Pe(){}function Ne(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(Pe,Pe):(T.status="pending",T.then(function(H){T.status==="pending"&&(T.status="fulfilled",T.value=H)},function(H){T.status==="pending"&&(T.status="rejected",T.reason=H)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Kt(T,H,F,J,it){var xt=typeof T;(xt==="undefined"||xt==="boolean")&&(T=null);var ft=!1;if(T===null)ft=!0;else switch(xt){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(T.$$typeof){case a:case i:ft=!0;break;case y:return ft=T._init,Kt(ft(T._payload),H,F,J,it)}}if(ft)return it=it(T),ft=J===""?"."+Qt(T,0):J,K(it)?(F="",ft!=null&&(F=ft.replace(Xt,"$&/")+"/"),Kt(it,H,F,"",function(ee){return ee})):it!=null&&(dt(it)&&(it=Q(it,F+(it.key==null||T&&T.key===it.key?"":(""+it.key).replace(Xt,"$&/")+"/")+ft)),H.push(it)),1;ft=0;var ve=J===""?".":J+":";if(K(T))for(var zt=0;zt<T.length;zt++)J=T[zt],xt=ve+Qt(J,zt),ft+=Kt(J,H,F,xt,it);else if(zt=x(T),typeof zt=="function")for(T=zt.call(T),zt=0;!(J=T.next()).done;)J=J.value,xt=ve+Qt(J,zt++),ft+=Kt(J,H,F,xt,it);else if(xt==="object"){if(typeof T.then=="function")return Kt(Ne(T),H,F,J,it);throw H=String(T),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ft}function _(T,H,F){if(T==null)return T;var J=[],it=0;return Kt(T,J,"","",function(xt){return H.call(F,xt,it++)}),J}function G(T){if(T._status===-1){var H=T._result;H=H(),H.then(function(F){(T._status===0||T._status===-1)&&(T._status=1,T._result=F)},function(F){(T._status===0||T._status===-1)&&(T._status=2,T._result=F)}),T._status===-1&&(T._status=0,T._result=H)}if(T._status===1)return T._result.default;throw T._result}var I=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function Ot(){}return pt.Children={map:_,forEach:function(T,H,F){_(T,function(){H.apply(this,arguments)},F)},count:function(T){var H=0;return _(T,function(){H++}),H},toArray:function(T){return _(T,function(H){return H})||[]},only:function(T){if(!dt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},pt.Component=V,pt.Fragment=l,pt.Profiler=c,pt.PureComponent=X,pt.StrictMode=s,pt.Suspense=p,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,pt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return q.H.useMemoCache(T)}},pt.cache=function(T){return function(){return T.apply(null,arguments)}},pt.cloneElement=function(T,H,F){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var J=M({},T.props),it=T.key,xt=void 0;if(H!=null)for(ft in H.ref!==void 0&&(xt=void 0),H.key!==void 0&&(it=""+H.key),H)!W.call(H,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&H.ref===void 0||(J[ft]=H[ft]);var ft=arguments.length-2;if(ft===1)J.children=F;else if(1<ft){for(var ve=Array(ft),zt=0;zt<ft;zt++)ve[zt]=arguments[zt+2];J.children=ve}return tt(T.type,it,void 0,void 0,xt,J)},pt.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:d,_context:T},T},pt.createElement=function(T,H,F){var J,it={},xt=null;if(H!=null)for(J in H.key!==void 0&&(xt=""+H.key),H)W.call(H,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(it[J]=H[J]);var ft=arguments.length-2;if(ft===1)it.children=F;else if(1<ft){for(var ve=Array(ft),zt=0;zt<ft;zt++)ve[zt]=arguments[zt+2];it.children=ve}if(T&&T.defaultProps)for(J in ft=T.defaultProps,ft)it[J]===void 0&&(it[J]=ft[J]);return tt(T,xt,void 0,void 0,null,it)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(T){return{$$typeof:g,render:T}},pt.isValidElement=dt,pt.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:G}},pt.memo=function(T,H){return{$$typeof:m,type:T,compare:H===void 0?null:H}},pt.startTransition=function(T){var H=q.T,F={};q.T=F;try{var J=T(),it=q.S;it!==null&&it(F,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Ot,I)}catch(xt){I(xt)}finally{q.T=H}},pt.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},pt.use=function(T){return q.H.use(T)},pt.useActionState=function(T,H,F){return q.H.useActionState(T,H,F)},pt.useCallback=function(T,H){return q.H.useCallback(T,H)},pt.useContext=function(T){return q.H.useContext(T)},pt.useDebugValue=function(){},pt.useDeferredValue=function(T,H){return q.H.useDeferredValue(T,H)},pt.useEffect=function(T,H,F){var J=q.H;if(typeof F=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(T,H)},pt.useId=function(){return q.H.useId()},pt.useImperativeHandle=function(T,H,F){return q.H.useImperativeHandle(T,H,F)},pt.useInsertionEffect=function(T,H){return q.H.useInsertionEffect(T,H)},pt.useLayoutEffect=function(T,H){return q.H.useLayoutEffect(T,H)},pt.useMemo=function(T,H){return q.H.useMemo(T,H)},pt.useOptimistic=function(T,H){return q.H.useOptimistic(T,H)},pt.useReducer=function(T,H,F){return q.H.useReducer(T,H,F)},pt.useRef=function(T){return q.H.useRef(T)},pt.useState=function(T){return q.H.useState(T)},pt.useSyncExternalStore=function(T,H,F){return q.H.useSyncExternalStore(T,H,F)},pt.useTransition=function(){return q.H.useTransition()},pt.version="19.1.0",pt}var x0;function Wc(){return x0||(x0=1,cc.exports=Lb()),cc.exports}var Z=Wc();const wt=Bb(Z);var fc={exports:{}},Zo={},dc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function qb(){return S0||(S0=1,function(a){function i(_,G){var I=_.length;_.push(G);t:for(;0<I;){var Ot=I-1>>>1,T=_[Ot];if(0<c(T,G))_[Ot]=G,_[I]=T,I=Ot;else break t}}function l(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var G=_[0],I=_.pop();if(I!==G){_[0]=I;t:for(var Ot=0,T=_.length,H=T>>>1;Ot<H;){var F=2*(Ot+1)-1,J=_[F],it=F+1,xt=_[it];if(0>c(J,I))it<T&&0>c(xt,J)?(_[Ot]=xt,_[it]=I,Ot=it):(_[Ot]=J,_[F]=I,Ot=F);else if(it<T&&0>c(xt,I))_[Ot]=xt,_[it]=I,Ot=it;else break t}}return G}function c(_,G){var I=_.sortIndex-G.sortIndex;return I!==0?I:_.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var p=[],m=[],y=1,b=null,x=3,w=!1,M=!1,D=!1,V=!1,L=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function K(_){for(var G=l(m);G!==null;){if(G.callback===null)s(m);else if(G.startTime<=_)s(m),G.sortIndex=G.expirationTime,i(p,G);else break;G=l(m)}}function q(_){if(D=!1,K(_),!M)if(l(p)!==null)M=!0,W||(W=!0,Qt());else{var G=l(m);G!==null&&Kt(q,G.startTime-_)}}var W=!1,tt=-1,Q=5,dt=-1;function St(){return V?!0:!(a.unstable_now()-dt<Q)}function Xt(){if(V=!1,W){var _=a.unstable_now();dt=_;var G=!0;try{t:{M=!1,D&&(D=!1,X(tt),tt=-1),w=!0;var I=x;try{e:{for(K(_),b=l(p);b!==null&&!(b.expirationTime>_&&St());){var Ot=b.callback;if(typeof Ot=="function"){b.callback=null,x=b.priorityLevel;var T=Ot(b.expirationTime<=_);if(_=a.unstable_now(),typeof T=="function"){b.callback=T,K(_),G=!0;break e}b===l(p)&&s(p),K(_)}else s(p);b=l(p)}if(b!==null)G=!0;else{var H=l(m);H!==null&&Kt(q,H.startTime-_),G=!1}}break t}finally{b=null,x=I,w=!1}G=void 0}}finally{G?Qt():W=!1}}}var Qt;if(typeof U=="function")Qt=function(){U(Xt)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ne=Pe.port2;Pe.port1.onmessage=Xt,Qt=function(){Ne.postMessage(null)}}else Qt=function(){L(Xt,0)};function Kt(_,G){tt=L(function(){_(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(_){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var I=x;x=G;try{return _()}finally{x=I}},a.unstable_requestPaint=function(){V=!0},a.unstable_runWithPriority=function(_,G){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=x;x=_;try{return G()}finally{x=I}},a.unstable_scheduleCallback=function(_,G,I){var Ot=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Ot+I:Ot):I=Ot,_){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=I+T,_={id:y++,callback:G,priorityLevel:_,startTime:I,expirationTime:T,sortIndex:-1},I>Ot?(_.sortIndex=I,i(m,_),l(p)===null&&_===l(m)&&(D?(X(tt),tt=-1):D=!0,Kt(q,I-Ot))):(_.sortIndex=T,i(p,_),M||w||(M=!0,W||(W=!0,Qt()))),_},a.unstable_shouldYield=St,a.unstable_wrapCallback=function(_){var G=x;return function(){var I=x;x=G;try{return _.apply(this,arguments)}finally{x=I}}}}(hc)),hc}var T0;function Pb(){return T0||(T0=1,dc.exports=qb()),dc.exports}var mc={exports:{}},Ae={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function Yb(){if(A0)return Ae;A0=1;var a=Wc();function i(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(p,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:p,containerInfo:m,implementation:y}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ae.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return d(p,m,null,y)},Ae.flushSync=function(p){var m=f.T,y=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=y,s.d.f()}},Ae.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Ae.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ae.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,b=g(y,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:w}):y==="script"&&s.d.X(p,{crossOrigin:b,integrity:x,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ae.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=g(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Ae.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=g(y,m.crossOrigin);s.d.L(p,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ae.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=g(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Ae.requestFormReset=function(p){s.d.r(p)},Ae.unstable_batchedUpdates=function(p,m){return p(m)},Ae.useFormState=function(p,m,y){return f.H.useFormState(p,m,y)},Ae.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ae.version="19.1.0",Ae}var O0;function Xb(){if(O0)return mc.exports;O0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),mc.exports=Yb(),mc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function Gb(){if(D0)return Zo;D0=1;var a=Pb(),i=Wc(),l=Xb();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(s(188))}function p(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,o=e;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(o=r.return,o!==null){n=o;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return g(r),t;if(u===o)return g(r),e;u=u.sibling}throw Error(s(188))}if(n.return!==o.return)n=r,o=u;else{for(var h=!1,v=r.child;v;){if(v===n){h=!0,n=r,o=u;break}if(v===o){h=!0,o=r,n=u;break}v=v.sibling}if(!h){for(v=u.child;v;){if(v===n){h=!0,n=u,o=r;break}if(v===o){h=!0,o=u,n=r;break}v=v.sibling}if(!h)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),U=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),dt=Symbol.for("react.activity"),St=Symbol.for("react.memo_cache_sentinel"),Xt=Symbol.iterator;function Qt(t){return t===null||typeof t!="object"?null:(t=Xt&&t[Xt]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Symbol.for("react.client.reference");function Ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case V:return"Profiler";case D:return"StrictMode";case q:return"Suspense";case W:return"SuspenseList";case dt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case U:return(t.displayName||"Context")+".Provider";case X:return(t._context.displayName||"Context")+".Consumer";case K:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tt:return e=t.displayName||null,e!==null?e:Ne(t.type)||"Memo";case Q:e=t._payload,t=t._init;try{return Ne(t(e))}catch{}}return null}var Kt=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Ot=[],T=-1;function H(t){return{current:t}}function F(t){0>T||(t.current=Ot[T],Ot[T]=null,T--)}function J(t,e){T++,Ot[T]=t.current,t.current=e}var it=H(null),xt=H(null),ft=H(null),ve=H(null);function zt(t,e){switch(J(ft,e),J(xt,t),J(it,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Gm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Gm(e),t=Zm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}F(it),J(it,t)}function ee(){F(it),F(xt),F(ft)}function Xi(t){t.memoizedState!==null&&J(ve,t);var e=it.current,n=Zm(e,t.type);e!==n&&(J(xt,t),J(it,n))}function Pa(t){xt.current===t&&(F(it),F(xt)),ve.current===t&&(F(ve),Lo._currentValue=I)}var Gi=Object.prototype.hasOwnProperty,Zi=a.unstable_scheduleCallback,Qi=a.unstable_cancelCallback,Fr=a.unstable_shouldYield,Wr=a.unstable_requestPaint,Ye=a.unstable_now,$r=a.unstable_getCurrentPriorityLevel,Ki=a.unstable_ImmediatePriority,hl=a.unstable_UserBlockingPriority,Ya=a.unstable_NormalPriority,Ji=a.unstable_LowPriority,bn=a.unstable_IdlePriority,xn=a.log,Ln=a.unstable_setDisableYieldValue,ma=null,be=null;function cn(t){if(typeof xn=="function"&&Ln(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(ma,t)}catch{}}var xe=Math.clz32?Math.clz32:es,Ir=Math.log,ts=Math.LN2;function es(t){return t>>>=0,t===0?32:31-(Ir(t)/ts|0)|0}var pa=256,Xa=4194304;function Sn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ga(t,e,n){var o=t.pendingLanes;if(o===0)return 0;var r=0,u=t.suspendedLanes,h=t.pingedLanes;t=t.warmLanes;var v=o&134217727;return v!==0?(o=v&~u,o!==0?r=Sn(o):(h&=v,h!==0?r=Sn(h):n||(n=v&~t,n!==0&&(r=Sn(n))))):(v=o&~u,v!==0?r=Sn(v):h!==0?r=Sn(h):n||(n=o&~t,n!==0&&(r=Sn(n)))),r===0?0:e!==0&&e!==r&&(e&u)===0&&(u=r&-r,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:r}function ga(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ml(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N(){var t=pa;return pa<<=1,(pa&4194048)===0&&(pa=256),t}function P(){var t=Xa;return Xa<<=1,(Xa&62914560)===0&&(Xa=4194304),t}function at(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ot(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ht(t,e,n,o,r,u){var h=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var v=t.entanglements,S=t.expirationTimes,R=t.hiddenUpdates;for(n=h&~n;0<n;){var k=31-xe(n),j=1<<k;v[k]=0,S[k]=-1;var C=R[k];if(C!==null)for(R[k]=null,k=0;k<C.length;k++){var z=C[k];z!==null&&(z.lane&=-536870913)}n&=~j}o!==0&&Dt(t,o,0),u!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=u&~(h&~e))}function Dt(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-xe(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|n&4194090}function rt(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-xe(n),r=1<<o;r&e|t[o]&e&&(t[o]|=e),n&=~r}}function mt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Et(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ct(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:f0(t.type))}function Se(t,e){var n=G.p;try{return G.p=t,e()}finally{G.p=n}}var he=Math.random().toString(36).slice(2),ne="__reactFiber$"+he,Tt="__reactProps$"+he,Lt="__reactContainer$"+he,De="__reactEvents$"+he,ya="__reactListeners$"+he,va="__reactHandles$"+he,Nf="__reactResources$"+he,Fi="__reactMarker$"+he;function ns(t){delete t[ne],delete t[Tt],delete t[De],delete t[ya],delete t[va]}function Za(t){var e=t[ne];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lt]||n[ne]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fm(t);t!==null;){if(n=t[ne])return n;t=Fm(t)}return e}t=n,n=t.parentNode}return null}function Qa(t){if(t=t[ne]||t[Lt]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Wi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Ka(t){var e=t[Nf];return e||(e=t[Nf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ue(t){t[Fi]=!0}var kf=new Set,Vf={};function ba(t,e){Ja(t,e),Ja(t+"Capture",e)}function Ja(t,e){for(Vf[t]=e,t=0;t<e.length;t++)kf.add(e[t])}var Cy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uf={},Bf={};function wy(t){return Gi.call(Bf,t)?!0:Gi.call(Uf,t)?!1:Cy.test(t)?Bf[t]=!0:(Uf[t]=!0,!1)}function pl(t,e,n){if(wy(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function gl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Tn(t,e,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+o)}}var as,jf;function Fa(t){if(as===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);as=e&&e[1]||"",jf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+as+t+jf}var is=!1;function os(t,e){if(!t||is)return"";is=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(z){var C=z}Reflect.construct(t,[],j)}else{try{j.call()}catch(z){C=z}t.call(j.prototype)}}else{try{throw Error()}catch(z){C=z}(j=t())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(z){if(z&&C&&typeof z.stack=="string")return[z.stack,C.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),h=u[0],v=u[1];if(h&&v){var S=h.split(`
`),R=v.split(`
`);for(r=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;r<R.length&&!R[r].includes("DetermineComponentFrameRoot");)r++;if(o===S.length||r===R.length)for(o=S.length-1,r=R.length-1;1<=o&&0<=r&&S[o]!==R[r];)r--;for(;1<=o&&0<=r;o--,r--)if(S[o]!==R[r]){if(o!==1||r!==1)do if(o--,r--,0>r||S[o]!==R[r]){var k=`
`+S[o].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=o&&0<=r);break}}}finally{is=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Fa(n):""}function zy(t){switch(t.tag){case 26:case 27:case 5:return Fa(t.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 15:return os(t.type,!1);case 11:return os(t.type.render,!1);case 1:return os(t.type,!0);case 31:return Fa("Activity");default:return""}}function Hf(t){try{var e="";do e+=zy(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Xe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _y(t){var e=Lf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(h){o=""+h,u.call(this,h)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(h){o=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yl(t){t._valueTracker||(t._valueTracker=_y(t))}function qf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Lf(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ny=/[\n"\\]/g;function Ge(t){return t.replace(Ny,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ls(t,e,n,o,r,u,h,v){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Xe(e)):t.value!==""+Xe(e)&&(t.value=""+Xe(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?rs(t,h,Xe(e)):n!=null?rs(t,h,Xe(n)):o!=null&&t.removeAttribute("value"),r==null&&u!=null&&(t.defaultChecked=!!u),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+Xe(v):t.removeAttribute("name")}function Pf(t,e,n,o,r,u,h,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+Xe(n):"",e=e!=null?""+Xe(e):n,v||e===t.value||(t.value=e),t.defaultValue=e}o=o??r,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=v?t.checked:!!o,t.defaultChecked=!!o,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function rs(t,e,n){e==="number"&&vl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Wa(t,e,n,o){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&o&&(t[n].defaultSelected=!0)}else{for(n=""+Xe(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,o&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yf(t,e,n){if(e!=null&&(e=""+Xe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Xe(n):""}function Xf(t,e,n,o){if(e==null){if(o!=null){if(n!=null)throw Error(s(92));if(Kt(o)){if(1<o.length)throw Error(s(93));o=o[0]}n=o}n==null&&(n=""),e=n}n=Xe(e),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o)}function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ky=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gf(t,e,n){var o=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,n):typeof n!="number"||n===0||ky.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Zf(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var r in e)o=e[r],e.hasOwnProperty(r)&&n[r]!==o&&Gf(t,r,o)}else for(var u in e)e.hasOwnProperty(u)&&Gf(t,u,e[u])}function ss(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(t){return Uy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var us=null;function cs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ia=null,ti=null;function Qf(t){var e=Qa(t);if(e&&(t=e.stateNode)){var n=t[Tt]||null;t:switch(t=e.stateNode,e.type){case"input":if(ls(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ge(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var r=o[Tt]||null;if(!r)throw Error(s(90));ls(o,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)o=n[e],o.form===t.form&&qf(o)}break t;case"textarea":Yf(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Wa(t,!!n.multiple,e,!1)}}}var fs=!1;function Kf(t,e,n){if(fs)return t(e,n);fs=!0;try{var o=t(e);return o}finally{if(fs=!1,(Ia!==null||ti!==null)&&(ir(),Ia&&(e=Ia,t=ti,ti=Ia=null,Qf(e),t)))for(e=0;e<t.length;e++)Qf(t[e])}}function $i(t,e){var n=t.stateNode;if(n===null)return null;var o=n[Tt]||null;if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ds=!1;if(An)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{ds=!1}var qn=null,hs=null,xl=null;function Jf(){if(xl)return xl;var t,e=hs,n=e.length,o,r="value"in qn?qn.value:qn.textContent,u=r.length;for(t=0;t<n&&e[t]===r[t];t++);var h=n-t;for(o=1;o<=h&&e[n-o]===r[u-o];o++);return xl=r.slice(t,1<o?1-o:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function Ff(){return!1}function Re(t){function e(n,o,r,u,h){this._reactName=n,this._targetInst=r,this.type=o,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(n=t[v],this[v]=n?n(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Tl:Ff,this.isPropagationStopped=Ff,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Re(xa),to=y({},xa,{view:0,detail:0}),By=Re(to),ms,ps,eo,Ol=y({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(ms=t.screenX-eo.screenX,ps=t.screenY-eo.screenY):ps=ms=0,eo=t),ms)},movementY:function(t){return"movementY"in t?t.movementY:ps}}),Wf=Re(Ol),jy=y({},Ol,{dataTransfer:0}),Hy=Re(jy),Ly=y({},to,{relatedTarget:0}),gs=Re(Ly),qy=y({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=Re(qy),Yy=y({},xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xy=Re(Yy),Gy=y({},xa,{data:0}),$f=Re(Gy),Zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ky[t])?!!e[t]:!1}function ys(){return Jy}var Fy=y({},to,{key:function(t){if(t.key){var e=Zy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wy=Re(Fy),$y=y({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Re($y),Iy=y({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),tv=Re(Iy),ev=y({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),nv=Re(ev),av=y({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=Re(av),ov=y({},xa,{newState:0,oldState:0}),lv=Re(ov),rv=[9,13,27,32],vs=An&&"CompositionEvent"in window,no=null;An&&"documentMode"in document&&(no=document.documentMode);var sv=An&&"TextEvent"in window&&!no,td=An&&(!vs||no&&8<no&&11>=no),ed=" ",nd=!1;function ad(t,e){switch(t){case"keyup":return rv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function uv(t,e){switch(t){case"compositionend":return id(e);case"keypress":return e.which!==32?null:(nd=!0,ed);case"textInput":return t=e.data,t===ed&&nd?null:t;default:return null}}function cv(t,e){if(ei)return t==="compositionend"||!vs&&ad(t,e)?(t=Jf(),xl=hs=qn=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return td&&e.locale!=="ko"?null:e.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fv[t.type]:e==="textarea"}function ld(t,e,n,o){Ia?ti?ti.push(o):ti=[o]:Ia=o,e=cr(e,"onChange"),0<e.length&&(n=new Al("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var ao=null,io=null;function dv(t){Lm(t,0)}function Dl(t){var e=Wi(t);if(qf(e))return t}function rd(t,e){if(t==="change")return e}var sd=!1;if(An){var bs;if(An){var xs="oninput"in document;if(!xs){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),xs=typeof ud.oninput=="function"}bs=xs}else bs=!1;sd=bs&&(!document.documentMode||9<document.documentMode)}function cd(){ao&&(ao.detachEvent("onpropertychange",fd),io=ao=null)}function fd(t){if(t.propertyName==="value"&&Dl(io)){var e=[];ld(e,io,t,cs(t)),Kf(dv,e)}}function hv(t,e,n){t==="focusin"?(cd(),ao=e,io=n,ao.attachEvent("onpropertychange",fd)):t==="focusout"&&cd()}function mv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(io)}function pv(t,e){if(t==="click")return Dl(e)}function gv(t,e){if(t==="input"||t==="change")return Dl(e)}function yv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ke=typeof Object.is=="function"?Object.is:yv;function oo(t,e){if(ke(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var r=n[o];if(!Gi.call(e,r)||!ke(t[r],e[r]))return!1}return!0}function dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hd(t,e){var n=dd(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=dd(n)}}function md(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?md(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=vl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function Ss(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var vv=An&&"documentMode"in document&&11>=document.documentMode,ni=null,Ts=null,lo=null,As=!1;function gd(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;As||ni==null||ni!==vl(o)||(o=ni,"selectionStart"in o&&Ss(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=cr(Ts,"onSelect"),0<o.length&&(e=new Al("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=ni)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ai={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},Os={},yd={};An&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function Ta(t){if(Os[t])return Os[t];if(!ai[t])return t;var e=ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yd)return Os[t]=e[n];return t}var vd=Ta("animationend"),bd=Ta("animationiteration"),xd=Ta("animationstart"),bv=Ta("transitionrun"),xv=Ta("transitionstart"),Sv=Ta("transitioncancel"),Sd=Ta("transitionend"),Td=new Map,Ds="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ds.push("scrollEnd");function an(t,e){Td.set(t,e),ba(e,[t])}var Ad=new WeakMap;function Ze(t,e){if(typeof t=="object"&&t!==null){var n=Ad.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Hf(e)},Ad.set(t,e),e)}return{value:t,source:e,stack:Hf(e)}}var Qe=[],ii=0,Ms=0;function Ml(){for(var t=ii,e=Ms=ii=0;e<t;){var n=Qe[e];Qe[e++]=null;var o=Qe[e];Qe[e++]=null;var r=Qe[e];Qe[e++]=null;var u=Qe[e];if(Qe[e++]=null,o!==null&&r!==null){var h=o.pending;h===null?r.next=r:(r.next=h.next,h.next=r),o.pending=r}u!==0&&Od(n,r,u)}}function El(t,e,n,o){Qe[ii++]=t,Qe[ii++]=e,Qe[ii++]=n,Qe[ii++]=o,Ms|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Es(t,e,n,o){return El(t,e,n,o),Rl(t)}function oi(t,e){return El(t,null,null,e),Rl(t)}function Od(t,e,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var r=!1,u=t.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(r=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,r&&e!==null&&(r=31-xe(n),t=u.hiddenUpdates,o=t[r],o===null?t[r]=[e]:o.push(e),e.lane=n|536870912),u):null}function Rl(t){if(50<_o)throw _o=0,Nu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var li={};function Tv(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(t,e,n,o){return new Tv(t,e,n,o)}function Rs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function On(t,e){var n=t.alternate;return n===null?(n=Ve(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Dd(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Cl(t,e,n,o,r,u){var h=0;if(o=t,typeof t=="function")Rs(t)&&(h=1);else if(typeof t=="string")h=Ob(t,n,it.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case dt:return t=Ve(31,n,e,r),t.elementType=dt,t.lanes=u,t;case M:return Aa(n.children,r,u,e);case D:h=8,r|=24;break;case V:return t=Ve(12,n,e,r|2),t.elementType=V,t.lanes=u,t;case q:return t=Ve(13,n,e,r),t.elementType=q,t.lanes=u,t;case W:return t=Ve(19,n,e,r),t.elementType=W,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:case U:h=10;break t;case X:h=9;break t;case K:h=11;break t;case tt:h=14;break t;case Q:h=16,o=null;break t}h=29,n=Error(s(130,t===null?"null":typeof t,"")),o=null}return e=Ve(h,n,e,r),e.elementType=t,e.type=o,e.lanes=u,e}function Aa(t,e,n,o){return t=Ve(7,t,o,e),t.lanes=n,t}function Cs(t,e,n){return t=Ve(6,t,null,e),t.lanes=n,t}function ws(t,e,n){return e=Ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ri=[],si=0,wl=null,zl=0,Ke=[],Je=0,Oa=null,Dn=1,Mn="";function Da(t,e){ri[si++]=zl,ri[si++]=wl,wl=t,zl=e}function Md(t,e,n){Ke[Je++]=Dn,Ke[Je++]=Mn,Ke[Je++]=Oa,Oa=t;var o=Dn;t=Mn;var r=32-xe(o)-1;o&=~(1<<r),n+=1;var u=32-xe(e)+r;if(30<u){var h=r-r%5;u=(o&(1<<h)-1).toString(32),o>>=h,r-=h,Dn=1<<32-xe(e)+r|n<<r|o,Mn=u+t}else Dn=1<<u|n<<r|o,Mn=t}function zs(t){t.return!==null&&(Da(t,1),Md(t,1,0))}function _s(t){for(;t===wl;)wl=ri[--si],ri[si]=null,zl=ri[--si],ri[si]=null;for(;t===Oa;)Oa=Ke[--Je],Ke[Je]=null,Mn=Ke[--Je],Ke[Je]=null,Dn=Ke[--Je],Ke[Je]=null}var Me=null,Jt=null,Rt=!1,Ma=null,fn=!1,Ns=Error(s(519));function Ea(t){var e=Error(s(418,""));throw uo(Ze(e,t)),Ns}function Ed(t){var e=t.stateNode,n=t.type,o=t.memoizedProps;switch(e[ne]=t,e[Tt]=o,n){case"dialog":bt("cancel",e),bt("close",e);break;case"iframe":case"object":case"embed":bt("load",e);break;case"video":case"audio":for(n=0;n<ko.length;n++)bt(ko[n],e);break;case"source":bt("error",e);break;case"img":case"image":case"link":bt("error",e),bt("load",e);break;case"details":bt("toggle",e);break;case"input":bt("invalid",e),Pf(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),yl(e);break;case"select":bt("invalid",e);break;case"textarea":bt("invalid",e),Xf(e,o.value,o.defaultValue,o.children),yl(e)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||o.suppressHydrationWarning===!0||Xm(e.textContent,n)?(o.popover!=null&&(bt("beforetoggle",e),bt("toggle",e)),o.onScroll!=null&&bt("scroll",e),o.onScrollEnd!=null&&bt("scrollend",e),o.onClick!=null&&(e.onclick=fr),e=!0):e=!1,e||Ea(t)}function Rd(t){for(Me=t.return;Me;)switch(Me.tag){case 5:case 13:fn=!1;return;case 27:case 3:fn=!0;return;default:Me=Me.return}}function ro(t){if(t!==Me)return!1;if(!Rt)return Rd(t),Rt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Ju(t.type,t.memoizedProps)),n=!n),n&&Jt&&Ea(t),Rd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Jt=ln(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Jt=null}}else e===27?(e=Jt,aa(t.type)?(t=Iu,Iu=null,Jt=t):Jt=e):Jt=Me?ln(t.stateNode.nextSibling):null;return!0}function so(){Jt=Me=null,Rt=!1}function Cd(){var t=Ma;return t!==null&&(ze===null?ze=t:ze.push.apply(ze,t),Ma=null),t}function uo(t){Ma===null?Ma=[t]:Ma.push(t)}var ks=H(null),Ra=null,En=null;function Pn(t,e,n){J(ks,e._currentValue),e._currentValue=n}function Rn(t){t._currentValue=ks.current,F(ks)}function Vs(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function Us(t,e,n,o){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var u=r.dependencies;if(u!==null){var h=r.child;u=u.firstContext;t:for(;u!==null;){var v=u;u=r;for(var S=0;S<e.length;S++)if(v.context===e[S]){u.lanes|=n,v=u.alternate,v!==null&&(v.lanes|=n),Vs(u.return,n,t),o||(h=null);break t}u=v.next}}else if(r.tag===18){if(h=r.return,h===null)throw Error(s(341));h.lanes|=n,u=h.alternate,u!==null&&(u.lanes|=n),Vs(h,n,t),h=null}else h=r.child;if(h!==null)h.return=r;else for(h=r;h!==null;){if(h===t){h=null;break}if(r=h.sibling,r!==null){r.return=h.return,h=r;break}h=h.return}r=h}}function co(t,e,n,o){t=null;for(var r=e,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var h=r.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var v=r.type;ke(r.pendingProps.value,h.value)||(t!==null?t.push(v):t=[v])}}else if(r===ve.current){if(h=r.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}r=r.return}t!==null&&Us(e,t,n,o),e.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!ke(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ca(t){Ra=t,En=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Te(t){return wd(Ra,t)}function Nl(t,e){return Ra===null&&Ca(t),wd(t,e)}function wd(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},En===null){if(t===null)throw Error(s(308));En=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else En=En.next=e;return n}var Av=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Ov=a.unstable_scheduleCallback,Dv=a.unstable_NormalPriority,le={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bs(){return{controller:new Av,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&Ov(Dv,function(){t.controller.abort()})}var ho=null,js=0,ui=0,ci=null;function Mv(t,e){if(ho===null){var n=ho=[];js=0,ui=Lu(),ci={status:"pending",value:void 0,then:function(o){n.push(o)}}}return js++,e.then(zd,zd),e}function zd(){if(--js===0&&ho!==null){ci!==null&&(ci.status="fulfilled");var t=ho;ho=null,ui=0,ci=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ev(t,e){var n=[],o={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(o.status="rejected",o.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),o}var _d=_.S;_.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Mv(t,e),_d!==null&&_d(t,e)};var wa=H(null);function Hs(){var t=wa.current;return t!==null?t:Ht.pooledCache}function kl(t,e){e===null?J(wa,wa.current):J(wa,e.pool)}function Nd(){var t=Hs();return t===null?null:{parent:le._currentValue,pool:t}}var mo=Error(s(460)),kd=Error(s(474)),Vl=Error(s(542)),Ls={then:function(){}};function Vd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ul(){}function Ud(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ul,Ul),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,jd(t),t;default:if(typeof e.status=="string")e.then(Ul,Ul);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=o}},function(o){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,jd(t),t}throw po=e,mo}}var po=null;function Bd(){if(po===null)throw Error(s(459));var t=po;return po=null,t}function jd(t){if(t===mo||t===Vl)throw Error(s(483))}var Yn=!1;function qs(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ps(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(_t&2)!==0){var r=o.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),o.pending=e,e=Rl(t),Od(t,null,n),e}return El(t,o,e,n),Rl(t)}function go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,rt(t,n)}}function Ys(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=h:u=u.next=h,n=n.next}while(n!==null);u===null?r=u=e:u=u.next=e}else r=u=e;n={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Xs=!1;function yo(){if(Xs){var t=ci;if(t!==null)throw t}}function vo(t,e,n,o){Xs=!1;var r=t.updateQueue;Yn=!1;var u=r.firstBaseUpdate,h=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var S=v,R=S.next;S.next=null,h===null?u=R:h.next=R,h=S;var k=t.alternate;k!==null&&(k=k.updateQueue,v=k.lastBaseUpdate,v!==h&&(v===null?k.firstBaseUpdate=R:v.next=R,k.lastBaseUpdate=S))}if(u!==null){var j=r.baseState;h=0,k=R=S=null,v=u;do{var C=v.lane&-536870913,z=C!==v.lane;if(z?(At&C)===C:(o&C)===C){C!==0&&C===ui&&(Xs=!0),k!==null&&(k=k.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var ut=t,lt=v;C=e;var Bt=n;switch(lt.tag){case 1:if(ut=lt.payload,typeof ut=="function"){j=ut.call(Bt,j,C);break t}j=ut;break t;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=lt.payload,C=typeof ut=="function"?ut.call(Bt,j,C):ut,C==null)break t;j=y({},j,C);break t;case 2:Yn=!0}}C=v.callback,C!==null&&(t.flags|=64,z&&(t.flags|=8192),z=r.callbacks,z===null?r.callbacks=[C]:z.push(C))}else z={lane:C,tag:v.tag,payload:v.payload,callback:v.callback,next:null},k===null?(R=k=z,S=j):k=k.next=z,h|=C;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;z=v,v=z.next,z.next=null,r.lastBaseUpdate=z,r.shared.pending=null}}while(!0);k===null&&(S=j),r.baseState=S,r.firstBaseUpdate=R,r.lastBaseUpdate=k,u===null&&(r.shared.lanes=0),In|=h,t.lanes=h,t.memoizedState=j}}function Hd(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Ld(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Hd(n[t],e)}var fi=H(null),Bl=H(0);function qd(t,e){t=Vn,J(Bl,t),J(fi,e),Vn=t|e.baseLanes}function Gs(){J(Bl,Vn),J(fi,fi.current)}function Zs(){Vn=Bl.current,F(fi),F(Bl)}var Zn=0,gt=null,Vt=null,ae=null,jl=!1,di=!1,za=!1,Hl=0,bo=0,hi=null,Rv=0;function $t(){throw Error(s(321))}function Qs(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ke(t[n],e[n]))return!1;return!0}function Ks(t,e,n,o,r,u){return Zn=u,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=t===null||t.memoizedState===null?Oh:Dh,za=!1,u=n(o,r),za=!1,di&&(u=Yd(e,n,o,r)),Pd(t),u}function Pd(t){_.H=Gl;var e=Vt!==null&&Vt.next!==null;if(Zn=0,ae=Vt=gt=null,jl=!1,bo=0,hi=null,e)throw Error(s(300));t===null||ce||(t=t.dependencies,t!==null&&_l(t)&&(ce=!0))}function Yd(t,e,n,o){gt=t;var r=0;do{if(di&&(hi=null),bo=0,di=!1,25<=r)throw Error(s(301));if(r+=1,ae=Vt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}_.H=Vv,u=e(n,o)}while(di);return u}function Cv(){var t=_.H,e=t.useState()[0];return e=typeof e.then=="function"?xo(e):e,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(gt.flags|=1024),e}function Js(){var t=Hl!==0;return Hl=0,t}function Fs(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ws(t){if(jl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}jl=!1}Zn=0,ae=Vt=gt=null,di=!1,bo=Hl=0,hi=null}function Ce(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?gt.memoizedState=ae=t:ae=ae.next=t,ae}function ie(){if(Vt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=ae===null?gt.memoizedState:ae.next;if(e!==null)ae=e,Vt=t;else{if(t===null)throw gt.alternate===null?Error(s(467)):Error(s(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},ae===null?gt.memoizedState=ae=t:ae=ae.next=t}return ae}function $s(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var e=bo;return bo+=1,hi===null&&(hi=[]),t=Ud(hi,t,e),e=gt,(ae===null?e.memoizedState:ae.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?Oh:Dh),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===U)return Te(t)}throw Error(s(438,String(t)))}function Is(t){var e=null,n=gt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=$s(),gt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),o=0;o<t;o++)n[o]=St;return e.index++,n}function Cn(t,e){return typeof e=="function"?e(t):e}function ql(t){var e=ie();return tu(e,Vt,t)}function tu(t,e,n){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var r=t.baseQueue,u=o.pending;if(u!==null){if(r!==null){var h=r.next;r.next=u.next,u.next=h}e.baseQueue=r=u,o.pending=null}if(u=t.baseState,r===null)t.memoizedState=u;else{e=r.next;var v=h=null,S=null,R=e,k=!1;do{var j=R.lane&-536870913;if(j!==R.lane?(At&j)===j:(Zn&j)===j){var C=R.revertLane;if(C===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),j===ui&&(k=!0);else if((Zn&C)===C){R=R.next,C===ui&&(k=!0);continue}else j={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},S===null?(v=S=j,h=u):S=S.next=j,gt.lanes|=C,In|=C;j=R.action,za&&n(u,j),u=R.hasEagerState?R.eagerState:n(u,j)}else C={lane:j,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},S===null?(v=S=C,h=u):S=S.next=C,gt.lanes|=j,In|=j;R=R.next}while(R!==null&&R!==e);if(S===null?h=u:S.next=v,!ke(u,t.memoizedState)&&(ce=!0,k&&(n=ci,n!==null)))throw n;t.memoizedState=u,t.baseState=h,t.baseQueue=S,o.lastRenderedState=u}return r===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function eu(t){var e=ie(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var o=n.dispatch,r=n.pending,u=e.memoizedState;if(r!==null){n.pending=null;var h=r=r.next;do u=t(u,h.action),h=h.next;while(h!==r);ke(u,e.memoizedState)||(ce=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,o]}function Xd(t,e,n){var o=gt,r=ie(),u=Rt;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var h=!ke((Vt||r).memoizedState,n);h&&(r.memoizedState=n,ce=!0),r=r.queue;var v=Qd.bind(null,o,r,t);if(So(2048,8,v,[t]),r.getSnapshot!==e||h||ae!==null&&ae.memoizedState.tag&1){if(o.flags|=2048,mi(9,Pl(),Zd.bind(null,o,r,n,e),null),Ht===null)throw Error(s(349));u||(Zn&124)!==0||Gd(o,e,n)}return n}function Gd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e=$s(),gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zd(t,e,n,o){e.value=n,e.getSnapshot=o,Kd(e)&&Jd(t)}function Qd(t,e,n){return n(function(){Kd(e)&&Jd(t)})}function Kd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ke(t,n)}catch{return!0}}function Jd(t){var e=oi(t,2);e!==null&&Le(e,t,2)}function nu(t){var e=Ce();if(typeof t=="function"){var n=t;if(t=n(),za){cn(!0);try{n()}finally{cn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:t},e}function Fd(t,e,n,o){return t.baseState=n,tu(t,Vt,typeof o=="function"?o:Cn)}function wv(t,e,n,o,r){if(Xl(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};_.T!==null?n(!0):u.isTransition=!1,o(u),n=e.pending,n===null?(u.next=e.pending=u,Wd(e,u)):(u.next=n.next,e.pending=n.next=u)}}function Wd(t,e){var n=e.action,o=e.payload,r=t.state;if(e.isTransition){var u=_.T,h={};_.T=h;try{var v=n(r,o),S=_.S;S!==null&&S(h,v),$d(t,e,v)}catch(R){au(t,e,R)}finally{_.T=u}}else try{u=n(r,o),$d(t,e,u)}catch(R){au(t,e,R)}}function $d(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){Id(t,e,o)},function(o){return au(t,e,o)}):Id(t,e,n)}function Id(t,e,n){e.status="fulfilled",e.value=n,th(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Wd(t,n)))}function au(t,e,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=n,th(e),e=e.next;while(e!==o)}t.action=null}function th(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function eh(t,e){return e}function nh(t,e){if(Rt){var n=Ht.formState;if(n!==null){t:{var o=gt;if(Rt){if(Jt){e:{for(var r=Jt,u=fn;r.nodeType!==8;){if(!u){r=null;break e}if(r=ln(r.nextSibling),r===null){r=null;break e}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){Jt=ln(r.nextSibling),o=r.data==="F!";break t}}Ea(o)}o=!1}o&&(e=n[0])}}return n=Ce(),n.memoizedState=n.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eh,lastRenderedState:e},n.queue=o,n=Sh.bind(null,gt,o),o.dispatch=n,o=nu(!1),u=su.bind(null,gt,!1,o.queue),o=Ce(),r={state:e,dispatch:null,action:t,pending:null},o.queue=r,n=wv.bind(null,gt,r,u,n),r.dispatch=n,o.memoizedState=t,[e,n,!1]}function ah(t){var e=ie();return ih(e,Vt,t)}function ih(t,e,n){if(e=tu(t,e,eh)[0],t=ql(Cn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=xo(e)}catch(h){throw h===mo?Vl:h}else o=e;e=ie();var r=e.queue,u=r.dispatch;return n!==e.memoizedState&&(gt.flags|=2048,mi(9,Pl(),zv.bind(null,r,n),null)),[o,u,t]}function zv(t,e){t.action=e}function oh(t){var e=ie(),n=Vt;if(n!==null)return ih(e,n,t);ie(),e=e.memoizedState,n=ie();var o=n.queue.dispatch;return n.memoizedState=t,[e,o,!1]}function mi(t,e,n,o){return t={tag:t,create:n,deps:o,inst:e,next:null},e=gt.updateQueue,e===null&&(e=$s(),gt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t),t}function Pl(){return{destroy:void 0,resource:void 0}}function lh(){return ie().memoizedState}function Yl(t,e,n,o){var r=Ce();o=o===void 0?null:o,gt.flags|=t,r.memoizedState=mi(1|e,Pl(),n,o)}function So(t,e,n,o){var r=ie();o=o===void 0?null:o;var u=r.memoizedState.inst;Vt!==null&&o!==null&&Qs(o,Vt.memoizedState.deps)?r.memoizedState=mi(e,u,n,o):(gt.flags|=t,r.memoizedState=mi(1|e,u,n,o))}function rh(t,e){Yl(8390656,8,t,e)}function sh(t,e){So(2048,8,t,e)}function uh(t,e){return So(4,2,t,e)}function ch(t,e){return So(4,4,t,e)}function fh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dh(t,e,n){n=n!=null?n.concat([t]):null,So(4,4,fh.bind(null,e,t),n)}function iu(){}function hh(t,e){var n=ie();e=e===void 0?null:e;var o=n.memoizedState;return e!==null&&Qs(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function mh(t,e){var n=ie();e=e===void 0?null:e;var o=n.memoizedState;if(e!==null&&Qs(e,o[1]))return o[0];if(o=t(),za){cn(!0);try{t()}finally{cn(!1)}}return n.memoizedState=[o,e],o}function ou(t,e,n){return n===void 0||(Zn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=ym(),gt.lanes|=t,In|=t,n)}function ph(t,e,n,o){return ke(n,e)?n:fi.current!==null?(t=ou(t,n,o),ke(t,e)||(ce=!0),t):(Zn&42)===0?(ce=!0,t.memoizedState=n):(t=ym(),gt.lanes|=t,In|=t,e)}function gh(t,e,n,o,r){var u=G.p;G.p=u!==0&&8>u?u:8;var h=_.T,v={};_.T=v,su(t,!1,e,n);try{var S=r(),R=_.S;if(R!==null&&R(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var k=Ev(S,o);To(t,e,k,He(t))}else To(t,e,o,He(t))}catch(j){To(t,e,{then:function(){},status:"rejected",reason:j},He())}finally{G.p=u,_.T=h}}function _v(){}function lu(t,e,n,o){if(t.tag!==5)throw Error(s(476));var r=yh(t).queue;gh(t,r,e,I,n===null?_v:function(){return vh(t),n(o)})}function yh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:I},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function vh(t){var e=yh(t).next.queue;To(t,e,{},He())}function ru(){return Te(Lo)}function bh(){return ie().memoizedState}function xh(){return ie().memoizedState}function Nv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=He();t=Xn(n);var o=Gn(e,t,n);o!==null&&(Le(o,e,n),go(o,e,n)),e={cache:Bs()},t.payload=e;return}e=e.return}}function kv(t,e,n){var o=He();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Xl(t)?Th(e,n):(n=Es(t,e,n,o),n!==null&&(Le(n,t,o),Ah(n,e,o)))}function Sh(t,e,n){var o=He();To(t,e,n,o)}function To(t,e,n,o){var r={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))Th(e,r);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var h=e.lastRenderedState,v=u(h,n);if(r.hasEagerState=!0,r.eagerState=v,ke(v,h))return El(t,e,r,0),Ht===null&&Ml(),!1}catch{}finally{}if(n=Es(t,e,r,o),n!==null)return Le(n,t,o),Ah(n,e,o),!0}return!1}function su(t,e,n,o){if(o={lane:2,revertLane:Lu(),action:o,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(e)throw Error(s(479))}else e=Es(t,n,o,2),e!==null&&Le(e,t,2)}function Xl(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Th(t,e){di=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ah(t,e,n){if((n&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,rt(t,n)}}var Gl={readContext:Te,use:Ll,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},Oh={readContext:Te,use:Ll,useCallback:function(t,e){return Ce().memoizedState=[t,e===void 0?null:e],t},useContext:Te,useEffect:rh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Yl(4194308,4,fh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){Yl(4,2,t,e)},useMemo:function(t,e){var n=Ce();e=e===void 0?null:e;var o=t();if(za){cn(!0);try{t()}finally{cn(!1)}}return n.memoizedState=[o,e],o},useReducer:function(t,e,n){var o=Ce();if(n!==void 0){var r=n(e);if(za){cn(!0);try{n(e)}finally{cn(!1)}}}else r=e;return o.memoizedState=o.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},o.queue=t,t=t.dispatch=kv.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var e=Ce();return t={current:t},e.memoizedState=t},useState:function(t){t=nu(t);var e=t.queue,n=Sh.bind(null,gt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:iu,useDeferredValue:function(t,e){var n=Ce();return ou(n,t,e)},useTransition:function(){var t=nu(!1);return t=gh.bind(null,gt,t.queue,!0,!1),Ce().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var o=gt,r=Ce();if(Rt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Ht===null)throw Error(s(349));(At&124)!==0||Gd(o,e,n)}r.memoizedState=n;var u={value:n,getSnapshot:e};return r.queue=u,rh(Qd.bind(null,o,u,t),[t]),o.flags|=2048,mi(9,Pl(),Zd.bind(null,o,u,n,e),null),n},useId:function(){var t=Ce(),e=Ht.identifierPrefix;if(Rt){var n=Mn,o=Dn;n=(o&~(1<<32-xe(o)-1)).toString(32)+n,e="«"+e+"R"+n,n=Hl++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=Rv++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ru,useFormState:nh,useActionState:nh,useOptimistic:function(t){var e=Ce();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=su.bind(null,gt,!0,n),n.dispatch=e,[t,e]},useMemoCache:Is,useCacheRefresh:function(){return Ce().memoizedState=Nv.bind(null,gt)}},Dh={readContext:Te,use:Ll,useCallback:hh,useContext:Te,useEffect:sh,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:mh,useReducer:ql,useRef:lh,useState:function(){return ql(Cn)},useDebugValue:iu,useDeferredValue:function(t,e){var n=ie();return ph(n,Vt.memoizedState,t,e)},useTransition:function(){var t=ql(Cn)[0],e=ie().memoizedState;return[typeof t=="boolean"?t:xo(t),e]},useSyncExternalStore:Xd,useId:bh,useHostTransitionStatus:ru,useFormState:ah,useActionState:ah,useOptimistic:function(t,e){var n=ie();return Fd(n,Vt,t,e)},useMemoCache:Is,useCacheRefresh:xh},Vv={readContext:Te,use:Ll,useCallback:hh,useContext:Te,useEffect:sh,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:mh,useReducer:eu,useRef:lh,useState:function(){return eu(Cn)},useDebugValue:iu,useDeferredValue:function(t,e){var n=ie();return Vt===null?ou(n,t,e):ph(n,Vt.memoizedState,t,e)},useTransition:function(){var t=eu(Cn)[0],e=ie().memoizedState;return[typeof t=="boolean"?t:xo(t),e]},useSyncExternalStore:Xd,useId:bh,useHostTransitionStatus:ru,useFormState:oh,useActionState:oh,useOptimistic:function(t,e){var n=ie();return Vt!==null?Fd(n,Vt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Is,useCacheRefresh:xh},pi=null,Ao=0;function Zl(t){var e=Ao;return Ao+=1,pi===null&&(pi=[]),Ud(pi,t,e)}function Oo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ql(t,e){throw e.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Mh(t){var e=t._init;return e(t._payload)}function Eh(t){function e(O,A){if(t){var E=O.deletions;E===null?(O.deletions=[A],O.flags|=16):E.push(A)}}function n(O,A){if(!t)return null;for(;A!==null;)e(O,A),A=A.sibling;return null}function o(O){for(var A=new Map;O!==null;)O.key!==null?A.set(O.key,O):A.set(O.index,O),O=O.sibling;return A}function r(O,A){return O=On(O,A),O.index=0,O.sibling=null,O}function u(O,A,E){return O.index=E,t?(E=O.alternate,E!==null?(E=E.index,E<A?(O.flags|=67108866,A):E):(O.flags|=67108866,A)):(O.flags|=1048576,A)}function h(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function v(O,A,E,B){return A===null||A.tag!==6?(A=Cs(E,O.mode,B),A.return=O,A):(A=r(A,E),A.return=O,A)}function S(O,A,E,B){var $=E.type;return $===M?k(O,A,E.props.children,B,E.key):A!==null&&(A.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Q&&Mh($)===A.type)?(A=r(A,E.props),Oo(A,E),A.return=O,A):(A=Cl(E.type,E.key,E.props,null,O.mode,B),Oo(A,E),A.return=O,A)}function R(O,A,E,B){return A===null||A.tag!==4||A.stateNode.containerInfo!==E.containerInfo||A.stateNode.implementation!==E.implementation?(A=ws(E,O.mode,B),A.return=O,A):(A=r(A,E.children||[]),A.return=O,A)}function k(O,A,E,B,$){return A===null||A.tag!==7?(A=Aa(E,O.mode,B,$),A.return=O,A):(A=r(A,E),A.return=O,A)}function j(O,A,E){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Cs(""+A,O.mode,E),A.return=O,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return E=Cl(A.type,A.key,A.props,null,O.mode,E),Oo(E,A),E.return=O,E;case w:return A=ws(A,O.mode,E),A.return=O,A;case Q:var B=A._init;return A=B(A._payload),j(O,A,E)}if(Kt(A)||Qt(A))return A=Aa(A,O.mode,E,null),A.return=O,A;if(typeof A.then=="function")return j(O,Zl(A),E);if(A.$$typeof===U)return j(O,Nl(O,A),E);Ql(O,A)}return null}function C(O,A,E,B){var $=A!==null?A.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return $!==null?null:v(O,A,""+E,B);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case x:return E.key===$?S(O,A,E,B):null;case w:return E.key===$?R(O,A,E,B):null;case Q:return $=E._init,E=$(E._payload),C(O,A,E,B)}if(Kt(E)||Qt(E))return $!==null?null:k(O,A,E,B,null);if(typeof E.then=="function")return C(O,A,Zl(E),B);if(E.$$typeof===U)return C(O,A,Nl(O,E),B);Ql(O,E)}return null}function z(O,A,E,B,$){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return O=O.get(E)||null,v(A,O,""+B,$);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case x:return O=O.get(B.key===null?E:B.key)||null,S(A,O,B,$);case w:return O=O.get(B.key===null?E:B.key)||null,R(A,O,B,$);case Q:var yt=B._init;return B=yt(B._payload),z(O,A,E,B,$)}if(Kt(B)||Qt(B))return O=O.get(E)||null,k(A,O,B,$,null);if(typeof B.then=="function")return z(O,A,E,Zl(B),$);if(B.$$typeof===U)return z(O,A,E,Nl(A,B),$);Ql(A,B)}return null}function ut(O,A,E,B){for(var $=null,yt=null,et=A,st=A=0,de=null;et!==null&&st<E.length;st++){et.index>st?(de=et,et=null):de=et.sibling;var Mt=C(O,et,E[st],B);if(Mt===null){et===null&&(et=de);break}t&&et&&Mt.alternate===null&&e(O,et),A=u(Mt,A,st),yt===null?$=Mt:yt.sibling=Mt,yt=Mt,et=de}if(st===E.length)return n(O,et),Rt&&Da(O,st),$;if(et===null){for(;st<E.length;st++)et=j(O,E[st],B),et!==null&&(A=u(et,A,st),yt===null?$=et:yt.sibling=et,yt=et);return Rt&&Da(O,st),$}for(et=o(et);st<E.length;st++)de=z(et,O,st,E[st],B),de!==null&&(t&&de.alternate!==null&&et.delete(de.key===null?st:de.key),A=u(de,A,st),yt===null?$=de:yt.sibling=de,yt=de);return t&&et.forEach(function(sa){return e(O,sa)}),Rt&&Da(O,st),$}function lt(O,A,E,B){if(E==null)throw Error(s(151));for(var $=null,yt=null,et=A,st=A=0,de=null,Mt=E.next();et!==null&&!Mt.done;st++,Mt=E.next()){et.index>st?(de=et,et=null):de=et.sibling;var sa=C(O,et,Mt.value,B);if(sa===null){et===null&&(et=de);break}t&&et&&sa.alternate===null&&e(O,et),A=u(sa,A,st),yt===null?$=sa:yt.sibling=sa,yt=sa,et=de}if(Mt.done)return n(O,et),Rt&&Da(O,st),$;if(et===null){for(;!Mt.done;st++,Mt=E.next())Mt=j(O,Mt.value,B),Mt!==null&&(A=u(Mt,A,st),yt===null?$=Mt:yt.sibling=Mt,yt=Mt);return Rt&&Da(O,st),$}for(et=o(et);!Mt.done;st++,Mt=E.next())Mt=z(et,O,st,Mt.value,B),Mt!==null&&(t&&Mt.alternate!==null&&et.delete(Mt.key===null?st:Mt.key),A=u(Mt,A,st),yt===null?$=Mt:yt.sibling=Mt,yt=Mt);return t&&et.forEach(function(Ub){return e(O,Ub)}),Rt&&Da(O,st),$}function Bt(O,A,E,B){if(typeof E=="object"&&E!==null&&E.type===M&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case x:t:{for(var $=E.key;A!==null;){if(A.key===$){if($=E.type,$===M){if(A.tag===7){n(O,A.sibling),B=r(A,E.props.children),B.return=O,O=B;break t}}else if(A.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Q&&Mh($)===A.type){n(O,A.sibling),B=r(A,E.props),Oo(B,E),B.return=O,O=B;break t}n(O,A);break}else e(O,A);A=A.sibling}E.type===M?(B=Aa(E.props.children,O.mode,B,E.key),B.return=O,O=B):(B=Cl(E.type,E.key,E.props,null,O.mode,B),Oo(B,E),B.return=O,O=B)}return h(O);case w:t:{for($=E.key;A!==null;){if(A.key===$)if(A.tag===4&&A.stateNode.containerInfo===E.containerInfo&&A.stateNode.implementation===E.implementation){n(O,A.sibling),B=r(A,E.children||[]),B.return=O,O=B;break t}else{n(O,A);break}else e(O,A);A=A.sibling}B=ws(E,O.mode,B),B.return=O,O=B}return h(O);case Q:return $=E._init,E=$(E._payload),Bt(O,A,E,B)}if(Kt(E))return ut(O,A,E,B);if(Qt(E)){if($=Qt(E),typeof $!="function")throw Error(s(150));return E=$.call(E),lt(O,A,E,B)}if(typeof E.then=="function")return Bt(O,A,Zl(E),B);if(E.$$typeof===U)return Bt(O,A,Nl(O,E),B);Ql(O,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,A!==null&&A.tag===6?(n(O,A.sibling),B=r(A,E),B.return=O,O=B):(n(O,A),B=Cs(E,O.mode,B),B.return=O,O=B),h(O)):n(O,A)}return function(O,A,E,B){try{Ao=0;var $=Bt(O,A,E,B);return pi=null,$}catch(et){if(et===mo||et===Vl)throw et;var yt=Ve(29,et,null,O.mode);return yt.lanes=B,yt.return=O,yt}finally{}}}var gi=Eh(!0),Rh=Eh(!1),Fe=H(null),dn=null;function Qn(t){var e=t.alternate;J(re,re.current&1),J(Fe,t),dn===null&&(e===null||fi.current!==null||e.memoizedState!==null)&&(dn=t)}function Ch(t){if(t.tag===22){if(J(re,re.current),J(Fe,t),dn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(dn=t)}}else Kn()}function Kn(){J(re,re.current),J(Fe,Fe.current)}function wn(t){F(Fe),dn===t&&(dn=null),F(re)}var re=H(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||$u(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function uu(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:y({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={enqueueSetState:function(t,e,n){t=t._reactInternals;var o=He(),r=Xn(o);r.payload=e,n!=null&&(r.callback=n),e=Gn(t,r,o),e!==null&&(Le(e,t,o),go(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=He(),r=Xn(o);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Gn(t,r,o),e!==null&&(Le(e,t,o),go(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=He(),o=Xn(n);o.tag=2,e!=null&&(o.callback=e),e=Gn(t,o,n),e!==null&&(Le(e,t,n),go(e,t,n))}};function wh(t,e,n,o,r,u,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,h):e.prototype&&e.prototype.isPureReactComponent?!oo(n,o)||!oo(r,u):!0}function zh(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function _a(t,e){var n=e;if("ref"in e){n={};for(var o in e)o!=="ref"&&(n[o]=e[o])}if(t=t.defaultProps){n===e&&(n=y({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}var Jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _h(t){Jl(t)}function Nh(t){console.error(t)}function kh(t){Jl(t)}function Fl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function Vh(t,e,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function fu(t,e,n){return n=Xn(n),n.tag=3,n.payload={element:null},n.callback=function(){Fl(t,e)},n}function Uh(t){return t=Xn(t),t.tag=3,t}function Bh(t,e,n,o){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=o.value;t.payload=function(){return r(u)},t.callback=function(){Vh(e,n,o)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){Vh(e,n,o),typeof r!="function"&&(ta===null?ta=new Set([this]):ta.add(this));var v=o.stack;this.componentDidCatch(o.value,{componentStack:v!==null?v:""})})}function Uv(t,e,n,o,r){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=n.alternate,e!==null&&co(e,n,r,!0),n=Fe.current,n!==null){switch(n.tag){case 13:return dn===null?Vu():n.alternate===null&&Ft===0&&(Ft=3),n.flags&=-257,n.flags|=65536,n.lanes=r,o===Ls?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([o]):e.add(o),Bu(t,o,r)),!1;case 22:return n.flags|=65536,o===Ls?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([o]):n.add(o)),Bu(t,o,r)),!1}throw Error(s(435,n.tag))}return Bu(t,o,r),Vu(),!1}if(Rt)return e=Fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,o!==Ns&&(t=Error(s(422),{cause:o}),uo(Ze(t,n)))):(o!==Ns&&(e=Error(s(423),{cause:o}),uo(Ze(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,o=Ze(o,n),r=fu(t.stateNode,o,r),Ys(t,r),Ft!==4&&(Ft=2)),!1;var u=Error(s(520),{cause:o});if(u=Ze(u,n),zo===null?zo=[u]:zo.push(u),Ft!==4&&(Ft=2),e===null)return!0;o=Ze(o,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=fu(n.stateNode,o,t),Ys(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ta===null||!ta.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Uh(r),Bh(r,t,n,o),Ys(n,r),!1}n=n.return}while(n!==null);return!1}var jh=Error(s(461)),ce=!1;function me(t,e,n,o){e.child=t===null?Rh(e,null,n,o):gi(e,t.child,n,o)}function Hh(t,e,n,o,r){n=n.render;var u=e.ref;if("ref"in o){var h={};for(var v in o)v!=="ref"&&(h[v]=o[v])}else h=o;return Ca(e),o=Ks(t,e,n,h,u,r),v=Js(),t!==null&&!ce?(Fs(t,e,r),zn(t,e,r)):(Rt&&v&&zs(e),e.flags|=1,me(t,e,o,r),e.child)}function Lh(t,e,n,o,r){if(t===null){var u=n.type;return typeof u=="function"&&!Rs(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,qh(t,e,u,o,r)):(t=Cl(n.type,null,o,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!bu(t,r)){var h=u.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(h,o)&&t.ref===e.ref)return zn(t,e,r)}return e.flags|=1,t=On(u,o),t.ref=e.ref,t.return=e,e.child=t}function qh(t,e,n,o,r){if(t!==null){var u=t.memoizedProps;if(oo(u,o)&&t.ref===e.ref)if(ce=!1,e.pendingProps=o=u,bu(t,r))(t.flags&131072)!==0&&(ce=!0);else return e.lanes=t.lanes,zn(t,e,r)}return du(t,e,n,o,r)}function Ph(t,e,n){var o=e.pendingProps,r=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((e.flags&128)!==0){if(o=u!==null?u.baseLanes|n:n,t!==null){for(r=e.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;e.childLanes=u&~o}else e.childLanes=0,e.child=null;return Yh(t,e,o,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&kl(e,u!==null?u.cachePool:null),u!==null?qd(e,u):Gs(),Ch(e);else return e.lanes=e.childLanes=536870912,Yh(t,e,u!==null?u.baseLanes|n:n,n)}else u!==null?(kl(e,u.cachePool),qd(e,u),Kn(),e.memoizedState=null):(t!==null&&kl(e,null),Gs(),Kn());return me(t,e,r,n),e.child}function Yh(t,e,n,o){var r=Hs();return r=r===null?null:{parent:le._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&kl(e,null),Gs(),Ch(e),t!==null&&co(t,e,o,!0),null}function Wl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function du(t,e,n,o,r){return Ca(e),n=Ks(t,e,n,o,void 0,r),o=Js(),t!==null&&!ce?(Fs(t,e,r),zn(t,e,r)):(Rt&&o&&zs(e),e.flags|=1,me(t,e,n,r),e.child)}function Xh(t,e,n,o,r,u){return Ca(e),e.updateQueue=null,n=Yd(e,o,n,r),Pd(t),o=Js(),t!==null&&!ce?(Fs(t,e,u),zn(t,e,u)):(Rt&&o&&zs(e),e.flags|=1,me(t,e,n,u),e.child)}function Gh(t,e,n,o,r){if(Ca(e),e.stateNode===null){var u=li,h=n.contextType;typeof h=="object"&&h!==null&&(u=Te(h)),u=new n(o,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=cu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=o,u.state=e.memoizedState,u.refs={},qs(e),h=n.contextType,u.context=typeof h=="object"&&h!==null?Te(h):li,u.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(uu(e,n,h,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&cu.enqueueReplaceState(u,u.state,null),vo(e,o,u,r),yo(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){u=e.stateNode;var v=e.memoizedProps,S=_a(n,v);u.props=S;var R=u.context,k=n.contextType;h=li,typeof k=="object"&&k!==null&&(h=Te(k));var j=n.getDerivedStateFromProps;k=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,k||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||R!==h)&&zh(e,u,o,h),Yn=!1;var C=e.memoizedState;u.state=C,vo(e,o,u,r),yo(),R=e.memoizedState,v||C!==R||Yn?(typeof j=="function"&&(uu(e,n,j,o),R=e.memoizedState),(S=Yn||wh(e,n,S,o,C,R,h))?(k||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=R),u.props=o,u.state=R,u.context=h,o=S):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{u=e.stateNode,Ps(t,e),h=e.memoizedProps,k=_a(n,h),u.props=k,j=e.pendingProps,C=u.context,R=n.contextType,S=li,typeof R=="object"&&R!==null&&(S=Te(R)),v=n.getDerivedStateFromProps,(R=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==j||C!==S)&&zh(e,u,o,S),Yn=!1,C=e.memoizedState,u.state=C,vo(e,o,u,r),yo();var z=e.memoizedState;h!==j||C!==z||Yn||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof v=="function"&&(uu(e,n,v,o),z=e.memoizedState),(k=Yn||wh(e,n,k,o,C,z,S)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(R||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,z,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,z,S)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=z),u.props=o,u.state=z,u.context=S,o=k):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),o=!1)}return u=o,Wl(t,e),o=(e.flags&128)!==0,u||o?(u=e.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&o?(e.child=gi(e,t.child,null,r),e.child=gi(e,null,n,r)):me(t,e,n,r),e.memoizedState=u.state,t=e.child):t=zn(t,e,r),t}function Zh(t,e,n,o){return so(),e.flags|=256,me(t,e,n,o),e.child}var hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mu(t){return{baseLanes:t,cachePool:Nd()}}function pu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=We),t}function Qh(t,e,n){var o=e.pendingProps,r=!1,u=(e.flags&128)!==0,h;if((h=u)||(h=t!==null&&t.memoizedState===null?!1:(re.current&2)!==0),h&&(r=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(Rt){if(r?Qn(e):Kn(),Rt){var v=Jt,S;if(S=v){t:{for(S=v,v=fn;S.nodeType!==8;){if(!v){v=null;break t}if(S=ln(S.nextSibling),S===null){v=null;break t}}v=S}v!==null?(e.memoizedState={dehydrated:v,treeContext:Oa!==null?{id:Dn,overflow:Mn}:null,retryLane:536870912,hydrationErrors:null},S=Ve(18,null,null,0),S.stateNode=v,S.return=e,e.child=S,Me=e,Jt=null,S=!0):S=!1}S||Ea(e)}if(v=e.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return $u(v)?e.lanes=32:e.lanes=536870912,null;wn(e)}return v=o.children,o=o.fallback,r?(Kn(),r=e.mode,v=$l({mode:"hidden",children:v},r),o=Aa(o,r,n,null),v.return=e,o.return=e,v.sibling=o,e.child=v,r=e.child,r.memoizedState=mu(n),r.childLanes=pu(t,h,n),e.memoizedState=hu,o):(Qn(e),gu(e,v))}if(S=t.memoizedState,S!==null&&(v=S.dehydrated,v!==null)){if(u)e.flags&256?(Qn(e),e.flags&=-257,e=yu(t,e,n)):e.memoizedState!==null?(Kn(),e.child=t.child,e.flags|=128,e=null):(Kn(),r=o.fallback,v=e.mode,o=$l({mode:"visible",children:o.children},v),r=Aa(r,v,n,null),r.flags|=2,o.return=e,r.return=e,o.sibling=r,e.child=o,gi(e,t.child,null,n),o=e.child,o.memoizedState=mu(n),o.childLanes=pu(t,h,n),e.memoizedState=hu,e=r);else if(Qn(e),$u(v)){if(h=v.nextSibling&&v.nextSibling.dataset,h)var R=h.dgst;h=R,o=Error(s(419)),o.stack="",o.digest=h,uo({value:o,source:null,stack:null}),e=yu(t,e,n)}else if(ce||co(t,e,n,!1),h=(n&t.childLanes)!==0,ce||h){if(h=Ht,h!==null&&(o=n&-n,o=(o&42)!==0?1:mt(o),o=(o&(h.suspendedLanes|n))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,oi(t,o),Le(h,t,o),jh;v.data==="$?"||Vu(),e=yu(t,e,n)}else v.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Jt=ln(v.nextSibling),Me=e,Rt=!0,Ma=null,fn=!1,t!==null&&(Ke[Je++]=Dn,Ke[Je++]=Mn,Ke[Je++]=Oa,Dn=t.id,Mn=t.overflow,Oa=e),e=gu(e,o.children),e.flags|=4096);return e}return r?(Kn(),r=o.fallback,v=e.mode,S=t.child,R=S.sibling,o=On(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,R!==null?r=On(R,r):(r=Aa(r,v,n,null),r.flags|=2),r.return=e,o.return=e,o.sibling=r,e.child=o,o=r,r=e.child,v=t.child.memoizedState,v===null?v=mu(n):(S=v.cachePool,S!==null?(R=le._currentValue,S=S.parent!==R?{parent:R,pool:R}:S):S=Nd(),v={baseLanes:v.baseLanes|n,cachePool:S}),r.memoizedState=v,r.childLanes=pu(t,h,n),e.memoizedState=hu,o):(Qn(e),n=t.child,t=n.sibling,n=On(n,{mode:"visible",children:o.children}),n.return=e,n.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=n,e.memoizedState=null,n)}function gu(t,e){return e=$l({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function $l(t,e){return t=Ve(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function yu(t,e,n){return gi(e,t.child,null,n),t=gu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kh(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Vs(t.return,e,n)}function vu(t,e,n,o,r){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:r}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=r)}function Jh(t,e,n){var o=e.pendingProps,r=o.revealOrder,u=o.tail;if(me(t,e,o.children,n),o=re.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,n,e);else if(t.tag===19)Kh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(J(re,o),r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vu(e,!1,r,n,u);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vu(e,!0,n,null,u);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),In|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(co(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=On(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=On(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function Bv(t,e,n){switch(e.tag){case 3:zt(e,e.stateNode.containerInfo),Pn(e,le,t.memoizedState.cache),so();break;case 27:case 5:Xi(e);break;case 4:zt(e,e.stateNode.containerInfo);break;case 10:Pn(e,e.type,e.memoizedProps.value);break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(Qn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Qh(t,e,n):(Qn(e),t=zn(t,e,n),t!==null?t.sibling:null);Qn(e);break;case 19:var r=(t.flags&128)!==0;if(o=(n&e.childLanes)!==0,o||(co(t,e,n,!1),o=(n&e.childLanes)!==0),r){if(o)return Jh(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(re,re.current),o)break;return null;case 22:case 23:return e.lanes=0,Ph(t,e,n);case 24:Pn(e,le,t.memoizedState.cache)}return zn(t,e,n)}function Fh(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)ce=!0;else{if(!bu(t,n)&&(e.flags&128)===0)return ce=!1,Bv(t,e,n);ce=(t.flags&131072)!==0}else ce=!1,Rt&&(e.flags&1048576)!==0&&Md(e,zl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var o=e.elementType,r=o._init;if(o=r(o._payload),e.type=o,typeof o=="function")Rs(o)?(t=_a(o,t),e.tag=1,e=Gh(null,e,o,t,n)):(e.tag=0,e=du(null,e,o,t,n));else{if(o!=null){if(r=o.$$typeof,r===K){e.tag=11,e=Hh(null,e,o,t,n);break t}else if(r===tt){e.tag=14,e=Lh(null,e,o,t,n);break t}}throw e=Ne(o)||o,Error(s(306,e,""))}}return e;case 0:return du(t,e,e.type,e.pendingProps,n);case 1:return o=e.type,r=_a(o,e.pendingProps),Gh(t,e,o,r,n);case 3:t:{if(zt(e,e.stateNode.containerInfo),t===null)throw Error(s(387));o=e.pendingProps;var u=e.memoizedState;r=u.element,Ps(t,e),vo(e,o,null,n);var h=e.memoizedState;if(o=h.cache,Pn(e,le,o),o!==u.cache&&Us(e,[le],n,!0),yo(),o=h.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Zh(t,e,o,n);break t}else if(o!==r){r=Ze(Error(s(424)),e),uo(r),e=Zh(t,e,o,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=ln(t.firstChild),Me=e,Rt=!0,Ma=null,fn=!0,n=Rh(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(so(),o===r){e=zn(t,e,n);break t}me(t,e,o,n)}e=e.child}return e;case 26:return Wl(t,e),t===null?(n=t0(e.type,null,e.pendingProps,null))?e.memoizedState=n:Rt||(n=e.type,t=e.pendingProps,o=dr(ft.current).createElement(n),o[ne]=e,o[Tt]=t,ge(o,n,t),ue(o),e.stateNode=o):e.memoizedState=t0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Xi(e),t===null&&Rt&&(o=e.stateNode=Wm(e.type,e.pendingProps,ft.current),Me=e,fn=!0,r=Jt,aa(e.type)?(Iu=r,Jt=ln(o.firstChild)):Jt=r),me(t,e,e.pendingProps.children,n),Wl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Rt&&((r=o=Jt)&&(o=fb(o,e.type,e.pendingProps,fn),o!==null?(e.stateNode=o,Me=e,Jt=ln(o.firstChild),fn=!1,r=!0):r=!1),r||Ea(e)),Xi(e),r=e.type,u=e.pendingProps,h=t!==null?t.memoizedProps:null,o=u.children,Ju(r,u)?o=null:h!==null&&Ju(r,h)&&(e.flags|=32),e.memoizedState!==null&&(r=Ks(t,e,Cv,null,null,n),Lo._currentValue=r),Wl(t,e),me(t,e,o,n),e.child;case 6:return t===null&&Rt&&((t=n=Jt)&&(n=db(n,e.pendingProps,fn),n!==null?(e.stateNode=n,Me=e,Jt=null,t=!0):t=!1),t||Ea(e)),null;case 13:return Qh(t,e,n);case 4:return zt(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=gi(e,null,o,n):me(t,e,o,n),e.child;case 11:return Hh(t,e,e.type,e.pendingProps,n);case 7:return me(t,e,e.pendingProps,n),e.child;case 8:return me(t,e,e.pendingProps.children,n),e.child;case 12:return me(t,e,e.pendingProps.children,n),e.child;case 10:return o=e.pendingProps,Pn(e,e.type,o.value),me(t,e,o.children,n),e.child;case 9:return r=e.type._context,o=e.pendingProps.children,Ca(e),r=Te(r),o=o(r),e.flags|=1,me(t,e,o,n),e.child;case 14:return Lh(t,e,e.type,e.pendingProps,n);case 15:return qh(t,e,e.type,e.pendingProps,n);case 19:return Jh(t,e,n);case 31:return o=e.pendingProps,n=e.mode,o={mode:o.mode,children:o.children},t===null?(n=$l(o,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=On(t.child,o),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Ph(t,e,n);case 24:return Ca(e),o=Te(le),t===null?(r=Hs(),r===null&&(r=Ht,u=Bs(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),e.memoizedState={parent:o,cache:r},qs(e),Pn(e,le,r)):((t.lanes&n)!==0&&(Ps(t,e),vo(e,null,null,n),yo()),r=t.memoizedState,u=e.memoizedState,r.parent!==o?(r={parent:o,cache:o},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Pn(e,le,o)):(o=u.cache,Pn(e,le,o),o!==r.cache&&Us(e,[le],n,!0))),me(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function _n(t){t.flags|=4}function Wh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o0(e)){if(e=Fe.current,e!==null&&((At&4194048)===At?dn!==null:(At&62914560)!==At&&(At&536870912)===0||e!==dn))throw po=Ls,kd;t.flags|=8192}}function Il(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?P():536870912,t.lanes|=e,xi|=e)}function Do(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags&65011712,o|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function jv(t,e,n){var o=e.pendingProps;switch(_s(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return Gt(e),null;case 3:return n=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Rn(le),ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ro(e)?_n(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Cd())),Gt(e),null;case 26:return n=e.memoizedState,t===null?(_n(e),n!==null?(Gt(e),Wh(e,n)):(Gt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(_n(e),Gt(e),Wh(e,n)):(Gt(e),e.flags&=-16777217):(t.memoizedProps!==o&&_n(e),Gt(e),e.flags&=-16777217),null;case 27:Pa(e),n=ft.current;var r=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==o&&_n(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return Gt(e),null}t=it.current,ro(e)?Ed(e):(t=Wm(r,o,n),e.stateNode=t,_n(e))}return Gt(e),null;case 5:if(Pa(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&_n(e);else{if(!o){if(e.stateNode===null)throw Error(s(166));return Gt(e),null}if(t=it.current,ro(e))Ed(e);else{switch(r=dr(ft.current),t){case 1:t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=r.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?r.createElement("select",{is:o.is}):r.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?r.createElement(n,{is:o.is}):r.createElement(n)}}t[ne]=e,t[Tt]=o;t:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=t;t:switch(ge(t,n,o),n){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&_n(e)}}return Gt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&_n(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(s(166));if(t=ft.current,ro(e)){if(t=e.stateNode,n=e.memoizedProps,o=null,r=Me,r!==null)switch(r.tag){case 27:case 5:o=r.memoizedProps}t[ne]=e,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||Xm(t.nodeValue,n)),t||Ea(e)}else t=dr(t).createTextNode(o),t[ne]=e,e.stateNode=t}return Gt(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=ro(e),o!==null&&o.dehydrated!==null){if(t===null){if(!r)throw Error(s(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[ne]=e}else so(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Gt(e),r=!1}else r=Cd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(wn(e),e):(wn(e),null)}if(wn(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=o!==null,t=t!==null&&t.memoizedState!==null,n){o=e.child,r=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(r=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==r&&(o.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Il(e,e.updateQueue),Gt(e),null;case 4:return ee(),t===null&&Xu(e.stateNode.containerInfo),Gt(e),null;case 10:return Rn(e.type),Gt(e),null;case 19:if(F(re),r=e.memoizedState,r===null)return Gt(e),null;if(o=(e.flags&128)!==0,u=r.rendering,u===null)if(o)Do(r,!1);else{if(Ft!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Kl(t),u!==null){for(e.flags|=128,Do(r,!1),t=u.updateQueue,e.updateQueue=t,Il(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Dd(n,t),n=n.sibling;return J(re,re.current&1|2),e.child}t=t.sibling}r.tail!==null&&Ye()>nr&&(e.flags|=128,o=!0,Do(r,!1),e.lanes=4194304)}else{if(!o)if(t=Kl(u),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,Il(e,t),Do(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Rt)return Gt(e),null}else 2*Ye()-r.renderingStartTime>nr&&n!==536870912&&(e.flags|=128,o=!0,Do(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ye(),e.sibling=null,t=re.current,J(re,o?t&1|2:t&1),e):(Gt(e),null);case 22:case 23:return wn(e),Zs(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(n&536870912)!==0&&(e.flags&128)===0&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),n=e.updateQueue,n!==null&&Il(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==n&&(e.flags|=2048),t!==null&&F(wa),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Rn(le),Gt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Hv(t,e){switch(_s(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rn(le),ee(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Pa(e),null;case 13:if(wn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return F(re),null;case 4:return ee(),null;case 10:return Rn(e.type),null;case 22:case 23:return wn(e),Zs(),t!==null&&F(wa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Rn(le),null;case 25:return null;default:return null}}function $h(t,e){switch(_s(e),e.tag){case 3:Rn(le),ee();break;case 26:case 27:case 5:Pa(e);break;case 4:ee();break;case 13:wn(e);break;case 19:F(re);break;case 10:Rn(e.type);break;case 22:case 23:wn(e),Zs(),t!==null&&F(wa);break;case 24:Rn(le)}}function Mo(t,e){try{var n=e.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var r=o.next;n=r;do{if((n.tag&t)===t){o=void 0;var u=n.create,h=n.inst;o=u(),h.destroy=o}n=n.next}while(n!==r)}}catch(v){jt(e,e.return,v)}}function Jn(t,e,n){try{var o=e.updateQueue,r=o!==null?o.lastEffect:null;if(r!==null){var u=r.next;o=u;do{if((o.tag&t)===t){var h=o.inst,v=h.destroy;if(v!==void 0){h.destroy=void 0,r=e;var S=n,R=v;try{R()}catch(k){jt(r,S,k)}}}o=o.next}while(o!==u)}}catch(k){jt(e,e.return,k)}}function Ih(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Ld(e,n)}catch(o){jt(t,t.return,o)}}}function tm(t,e,n){n.props=_a(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){jt(t,e,o)}}function Eo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof n=="function"?t.refCleanup=n(o):n.current=o}}catch(r){jt(t,e,r)}}function hn(t,e){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(r){jt(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){jt(t,e,r)}else n.current=null}function em(t){var e=t.type,n=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break t;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(r){jt(t,t.return,r)}}function xu(t,e,n){try{var o=t.stateNode;lb(o,t.type,n,e),o[Tt]=e}catch(r){jt(t,t.return,r)}}function nm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&aa(t.type)||t.tag===4}function Su(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||nm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tu(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fr));else if(o!==4&&(o===27&&aa(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Tu(t,e,n),t=t.sibling;t!==null;)Tu(t,e,n),t=t.sibling}function tr(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(o===27&&aa(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(tr(t,e,n),t=t.sibling;t!==null;)tr(t,e,n),t=t.sibling}function am(t){var e=t.stateNode,n=t.memoizedProps;try{for(var o=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);ge(e,o,n),e[ne]=t,e[Tt]=n}catch(u){jt(t,t.return,u)}}var Nn=!1,It=!1,Au=!1,im=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Lv(t,e){if(t=t.containerInfo,Qu=vr,t=pd(t),Ss(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var r=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var h=0,v=-1,S=-1,R=0,k=0,j=t,C=null;e:for(;;){for(var z;j!==n||r!==0&&j.nodeType!==3||(v=h+r),j!==u||o!==0&&j.nodeType!==3||(S=h+o),j.nodeType===3&&(h+=j.nodeValue.length),(z=j.firstChild)!==null;)C=j,j=z;for(;;){if(j===t)break e;if(C===n&&++R===r&&(v=h),C===u&&++k===o&&(S=h),(z=j.nextSibling)!==null)break;j=C,C=j.parentNode}j=z}n=v===-1||S===-1?null:{start:v,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:t,selectionRange:n},vr=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){switch(e=fe,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,r=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var ut=_a(n.type,r,n.elementType===n.type);t=o.getSnapshotBeforeUpdate(ut,u),o.__reactInternalSnapshotBeforeUpdate=t}catch(lt){jt(n,n.return,lt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Wu(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function om(t,e,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Fn(t,n),o&4&&Mo(5,n);break;case 1:if(Fn(t,n),o&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(h){jt(n,n.return,h)}else{var r=_a(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(h){jt(n,n.return,h)}}o&64&&Ih(n),o&512&&Eo(n,n.return);break;case 3:if(Fn(t,n),o&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Ld(t,e)}catch(h){jt(n,n.return,h)}}break;case 27:e===null&&o&4&&am(n);case 26:case 5:Fn(t,n),e===null&&o&4&&em(n),o&512&&Eo(n,n.return);break;case 12:Fn(t,n);break;case 13:Fn(t,n),o&4&&sm(t,n),o&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Jv.bind(null,n),hb(t,n))));break;case 22:if(o=n.memoizedState!==null||Nn,!o){e=e!==null&&e.memoizedState!==null||It,r=Nn;var u=It;Nn=o,(It=e)&&!u?Wn(t,n,(n.subtreeFlags&8772)!==0):Fn(t,n),Nn=r,It=u}break;case 30:break;default:Fn(t,n)}}function lm(t){var e=t.alternate;e!==null&&(t.alternate=null,lm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ns(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,we=!1;function kn(t,e,n){for(n=n.child;n!==null;)rm(t,e,n),n=n.sibling}function rm(t,e,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ma,n)}catch{}switch(n.tag){case 26:It||hn(n,e),kn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:It||hn(n,e);var o=qt,r=we;aa(n.type)&&(qt=n.stateNode,we=!1),kn(t,e,n),Uo(n.stateNode),qt=o,we=r;break;case 5:It||hn(n,e);case 6:if(o=qt,r=we,qt=null,kn(t,e,n),qt=o,we=r,qt!==null)if(we)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(n.stateNode)}catch(u){jt(n,e,u)}else try{qt.removeChild(n.stateNode)}catch(u){jt(n,e,u)}break;case 18:qt!==null&&(we?(t=qt,Jm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Xo(t)):Jm(qt,n.stateNode));break;case 4:o=qt,r=we,qt=n.stateNode.containerInfo,we=!0,kn(t,e,n),qt=o,we=r;break;case 0:case 11:case 14:case 15:It||Jn(2,n,e),It||Jn(4,n,e),kn(t,e,n);break;case 1:It||(hn(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"&&tm(n,e,o)),kn(t,e,n);break;case 21:kn(t,e,n);break;case 22:It=(o=It)||n.memoizedState!==null,kn(t,e,n),It=o;break;default:kn(t,e,n)}}function sm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xo(t)}catch(n){jt(e,e.return,n)}}function qv(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new im),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new im),e;default:throw Error(s(435,t.tag))}}function Ou(t,e){var n=qv(t);e.forEach(function(o){var r=Fv.bind(null,t,o);n.has(o)||(n.add(o),o.then(r,r))})}function Ue(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var r=n[o],u=t,h=e,v=h;t:for(;v!==null;){switch(v.tag){case 27:if(aa(v.type)){qt=v.stateNode,we=!1;break t}break;case 5:qt=v.stateNode,we=!1;break t;case 3:case 4:qt=v.stateNode.containerInfo,we=!0;break t}v=v.return}if(qt===null)throw Error(s(160));rm(u,h,r),qt=null,we=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)um(e,t),e=e.sibling}var on=null;function um(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ue(e,t),Be(t),o&4&&(Jn(3,t,t.return),Mo(3,t),Jn(5,t,t.return));break;case 1:Ue(e,t),Be(t),o&512&&(It||n===null||hn(n,n.return)),o&64&&Nn&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var r=on;if(Ue(e,t),Be(t),o&512&&(It||n===null||hn(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){t:{o=t.type,n=t.memoizedProps,r=r.ownerDocument||r;e:switch(o){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Fi]||u[ne]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(o),r.head.insertBefore(u,r.querySelector("head > title"))),ge(u,o,n),u[ne]=t,ue(u),o=u;break t;case"link":var h=a0("link","href",r).get(o+(n.href||""));if(h){for(var v=0;v<h.length;v++)if(u=h[v],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(v,1);break e}}u=r.createElement(o),ge(u,o,n),r.head.appendChild(u);break;case"meta":if(h=a0("meta","content",r).get(o+(n.content||""))){for(v=0;v<h.length;v++)if(u=h[v],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(v,1);break e}}u=r.createElement(o),ge(u,o,n),r.head.appendChild(u);break;default:throw Error(s(468,o))}u[ne]=t,ue(u),o=u}t.stateNode=o}else i0(r,t.type,t.stateNode);else t.stateNode=n0(r,o,t.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?i0(r,t.type,t.stateNode):n0(r,o,t.memoizedProps)):o===null&&t.stateNode!==null&&xu(t,t.memoizedProps,n.memoizedProps)}break;case 27:Ue(e,t),Be(t),o&512&&(It||n===null||hn(n,n.return)),n!==null&&o&4&&xu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Ue(e,t),Be(t),o&512&&(It||n===null||hn(n,n.return)),t.flags&32){r=t.stateNode;try{$a(r,"")}catch(z){jt(t,t.return,z)}}o&4&&t.stateNode!=null&&(r=t.memoizedProps,xu(t,r,n!==null?n.memoizedProps:r)),o&1024&&(Au=!0);break;case 6:if(Ue(e,t),Be(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(z){jt(t,t.return,z)}}break;case 3:if(pr=null,r=on,on=hr(e.containerInfo),Ue(e,t),on=r,Be(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(z){jt(t,t.return,z)}Au&&(Au=!1,cm(t));break;case 4:o=on,on=hr(t.stateNode.containerInfo),Ue(e,t),Be(t),on=o;break;case 12:Ue(e,t),Be(t);break;case 13:Ue(e,t),Be(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(wu=Ye()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ou(t,o)));break;case 22:r=t.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,R=Nn,k=It;if(Nn=R||r,It=k||S,Ue(e,t),It=k,Nn=R,Be(t),o&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||S||Nn||It||Na(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){S=n=e;try{if(u=S.stateNode,r)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{v=S.stateNode;var j=S.memoizedProps.style,C=j!=null&&j.hasOwnProperty("display")?j.display:null;v.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(z){jt(S,S.return,z)}}}else if(e.tag===6){if(n===null){S=e;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(z){jt(S,S.return,z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Ou(t,n))));break;case 19:Ue(e,t),Be(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ou(t,o)));break;case 30:break;case 21:break;default:Ue(e,t),Be(t)}}function Be(t){var e=t.flags;if(e&2){try{for(var n,o=t.return;o!==null;){if(nm(o)){n=o;break}o=o.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,u=Su(t);tr(t,u,r);break;case 5:var h=n.stateNode;n.flags&32&&($a(h,""),n.flags&=-33);var v=Su(t);tr(t,v,h);break;case 3:case 4:var S=n.stateNode.containerInfo,R=Su(t);Tu(t,R,S);break;default:throw Error(s(161))}}catch(k){jt(t,t.return,k)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;cm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Fn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)om(t,e.alternate,e),e=e.sibling}function Na(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Jn(4,e,e.return),Na(e);break;case 1:hn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&tm(e,e.return,n),Na(e);break;case 27:Uo(e.stateNode);case 26:case 5:hn(e,e.return),Na(e);break;case 22:e.memoizedState===null&&Na(e);break;case 30:Na(e);break;default:Na(e)}t=t.sibling}}function Wn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,r=t,u=e,h=u.flags;switch(u.tag){case 0:case 11:case 15:Wn(r,u,n),Mo(4,u);break;case 1:if(Wn(r,u,n),o=u,r=o.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(R){jt(o,o.return,R)}if(o=u,r=o.updateQueue,r!==null){var v=o.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)Hd(S[r],v)}catch(R){jt(o,o.return,R)}}n&&h&64&&Ih(u),Eo(u,u.return);break;case 27:am(u);case 26:case 5:Wn(r,u,n),n&&o===null&&h&4&&em(u),Eo(u,u.return);break;case 12:Wn(r,u,n);break;case 13:Wn(r,u,n),n&&h&4&&sm(r,u);break;case 22:u.memoizedState===null&&Wn(r,u,n),Eo(u,u.return);break;case 30:break;default:Wn(r,u,n)}e=e.sibling}}function Du(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&fo(n))}function Mu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&fo(t))}function mn(t,e,n,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fm(t,e,n,o),e=e.sibling}function fm(t,e,n,o){var r=e.flags;switch(e.tag){case 0:case 11:case 15:mn(t,e,n,o),r&2048&&Mo(9,e);break;case 1:mn(t,e,n,o);break;case 3:mn(t,e,n,o),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&fo(t)));break;case 12:if(r&2048){mn(t,e,n,o),t=e.stateNode;try{var u=e.memoizedProps,h=u.id,v=u.onPostCommit;typeof v=="function"&&v(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){jt(e,e.return,S)}}else mn(t,e,n,o);break;case 13:mn(t,e,n,o);break;case 23:break;case 22:u=e.stateNode,h=e.alternate,e.memoizedState!==null?u._visibility&2?mn(t,e,n,o):Ro(t,e):u._visibility&2?mn(t,e,n,o):(u._visibility|=2,yi(t,e,n,o,(e.subtreeFlags&10256)!==0)),r&2048&&Du(h,e);break;case 24:mn(t,e,n,o),r&2048&&Mu(e.alternate,e);break;default:mn(t,e,n,o)}}function yi(t,e,n,o,r){for(r=r&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,h=e,v=n,S=o,R=h.flags;switch(h.tag){case 0:case 11:case 15:yi(u,h,v,S,r),Mo(8,h);break;case 23:break;case 22:var k=h.stateNode;h.memoizedState!==null?k._visibility&2?yi(u,h,v,S,r):Ro(u,h):(k._visibility|=2,yi(u,h,v,S,r)),r&&R&2048&&Du(h.alternate,h);break;case 24:yi(u,h,v,S,r),r&&R&2048&&Mu(h.alternate,h);break;default:yi(u,h,v,S,r)}e=e.sibling}}function Ro(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,o=e,r=o.flags;switch(o.tag){case 22:Ro(n,o),r&2048&&Du(o.alternate,o);break;case 24:Ro(n,o),r&2048&&Mu(o.alternate,o);break;default:Ro(n,o)}e=e.sibling}}var Co=8192;function vi(t){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)dm(t),t=t.sibling}function dm(t){switch(t.tag){case 26:vi(t),t.flags&Co&&t.memoizedState!==null&&Mb(on,t.memoizedState,t.memoizedProps);break;case 5:vi(t);break;case 3:case 4:var e=on;on=hr(t.stateNode.containerInfo),vi(t),on=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Co,Co=16777216,vi(t),Co=e):vi(t));break;default:vi(t)}}function hm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function wo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];fe=o,pm(o,t)}hm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mm(t),t=t.sibling}function mm(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&Jn(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,er(t)):wo(t);break;default:wo(t)}}function er(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];fe=o,pm(o,t)}hm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Jn(8,e,e.return),er(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,er(e));break;default:er(e)}t=t.sibling}}function pm(t,e){for(;fe!==null;){var n=fe;switch(n.tag){case 0:case 11:case 15:Jn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,fe=o;else t:for(n=t;fe!==null;){o=fe;var r=o.sibling,u=o.return;if(lm(o),o===n){fe=null;break t}if(r!==null){r.return=u,fe=r;break t}fe=u}}}var Pv={getCacheForType:function(t){var e=Te(le),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Yv=typeof WeakMap=="function"?WeakMap:Map,_t=0,Ht=null,vt=null,At=0,Nt=0,je=null,$n=!1,bi=!1,Eu=!1,Vn=0,Ft=0,In=0,ka=0,Ru=0,We=0,xi=0,zo=null,ze=null,Cu=!1,wu=0,nr=1/0,ar=null,ta=null,pe=0,ea=null,Si=null,Ti=0,zu=0,_u=null,gm=null,_o=0,Nu=null;function He(){if((_t&2)!==0&&At!==0)return At&-At;if(_.T!==null){var t=ui;return t!==0?t:Lu()}return Ct()}function ym(){We===0&&(We=(At&536870912)===0||Rt?N():536870912);var t=Fe.current;return t!==null&&(t.flags|=32),We}function Le(t,e,n){(t===Ht&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)&&(Ai(t,0),na(t,At,We,!1)),ot(t,n),((_t&2)===0||t!==Ht)&&(t===Ht&&((_t&2)===0&&(ka|=n),Ft===4&&na(t,At,We,!1)),pn(t))}function vm(t,e,n){if((_t&6)!==0)throw Error(s(327));var o=!n&&(e&124)===0&&(e&t.expiredLanes)===0||ga(t,e),r=o?Zv(t,e):Uu(t,e,!0),u=o;do{if(r===0){bi&&!o&&na(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!Xv(n)){r=Uu(t,e,!1),u=!1;continue}if(r===2){if(u=e,t.errorRecoveryDisabledLanes&u)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var v=t;r=zo;var S=v.current.memoizedState.isDehydrated;if(S&&(Ai(v,h).flags|=256),h=Uu(v,h,!1),h!==2){if(Eu&&!S){v.errorRecoveryDisabledLanes|=u,ka|=u,r=4;break t}u=ze,ze=r,u!==null&&(ze===null?ze=u:ze.push.apply(ze,u))}r=h}if(u=!1,r!==2)continue}}if(r===1){Ai(t,0),na(t,e,0,!0);break}t:{switch(o=t,u=r,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:na(o,e,We,!$n);break t;case 2:ze=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(r=wu+300-Ye(),10<r)){if(na(o,e,We,!$n),Ga(o,0,!0)!==0)break t;o.timeoutHandle=Qm(bm.bind(null,o,n,ze,ar,Cu,e,We,ka,xi,$n,u,2,-0,0),r);break t}bm(o,n,ze,ar,Cu,e,We,ka,xi,$n,u,0,-0,0)}}break}while(!0);pn(t)}function bm(t,e,n,o,r,u,h,v,S,R,k,j,C,z){if(t.timeoutHandle=-1,j=e.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(Ho={stylesheets:null,count:0,unsuspend:Db},dm(e),j=Eb(),j!==null)){t.cancelPendingCommit=j(Mm.bind(null,t,e,u,n,o,r,h,v,S,k,1,C,z)),na(t,u,h,!R);return}Mm(t,e,u,n,o,r,h,v,S)}function Xv(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var r=n[o],u=r.getSnapshot;r=r.value;try{if(!ke(u(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function na(t,e,n,o){e&=~Ru,e&=~ka,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var r=e;0<r;){var u=31-xe(r),h=1<<u;o[u]=-1,r&=~h}n!==0&&Dt(t,n,e)}function ir(){return(_t&6)===0?(No(0),!1):!0}function ku(){if(vt!==null){if(Nt===0)var t=vt.return;else t=vt,En=Ra=null,Ws(t),pi=null,Ao=0,t=vt;for(;t!==null;)$h(t.alternate,t),t=t.return;vt=null}}function Ai(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,sb(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ku(),Ht=t,vt=n=On(t.current,null),At=e,Nt=0,je=null,$n=!1,bi=ga(t,e),Eu=!1,xi=We=Ru=ka=In=Ft=0,ze=zo=null,Cu=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var r=31-xe(o),u=1<<r;e|=t[r],o&=~u}return Vn=e,Ml(),n}function xm(t,e){gt=null,_.H=Gl,e===mo||e===Vl?(e=Bd(),Nt=3):e===kd?(e=Bd(),Nt=4):Nt=e===jh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,je=e,vt===null&&(Ft=1,Fl(t,Ze(e,t.current)))}function Sm(){var t=_.H;return _.H=Gl,t===null?Gl:t}function Tm(){var t=_.A;return _.A=Pv,t}function Vu(){Ft=4,$n||(At&4194048)!==At&&Fe.current!==null||(bi=!0),(In&134217727)===0&&(ka&134217727)===0||Ht===null||na(Ht,At,We,!1)}function Uu(t,e,n){var o=_t;_t|=2;var r=Sm(),u=Tm();(Ht!==t||At!==e)&&(ar=null,Ai(t,e)),e=!1;var h=Ft;t:do try{if(Nt!==0&&vt!==null){var v=vt,S=je;switch(Nt){case 8:ku(),h=6;break t;case 3:case 2:case 9:case 6:Fe.current===null&&(e=!0);var R=Nt;if(Nt=0,je=null,Oi(t,v,S,R),n&&bi){h=0;break t}break;default:R=Nt,Nt=0,je=null,Oi(t,v,S,R)}}Gv(),h=Ft;break}catch(k){xm(t,k)}while(!0);return e&&t.shellSuspendCounter++,En=Ra=null,_t=o,_.H=r,_.A=u,vt===null&&(Ht=null,At=0,Ml()),h}function Gv(){for(;vt!==null;)Am(vt)}function Zv(t,e){var n=_t;_t|=2;var o=Sm(),r=Tm();Ht!==t||At!==e?(ar=null,nr=Ye()+500,Ai(t,e)):bi=ga(t,e);t:do try{if(Nt!==0&&vt!==null){e=vt;var u=je;e:switch(Nt){case 1:Nt=0,je=null,Oi(t,e,u,1);break;case 2:case 9:if(Vd(u)){Nt=0,je=null,Om(e);break}e=function(){Nt!==2&&Nt!==9||Ht!==t||(Nt=7),pn(t)},u.then(e,e);break t;case 3:Nt=7;break t;case 4:Nt=5;break t;case 7:Vd(u)?(Nt=0,je=null,Om(e)):(Nt=0,je=null,Oi(t,e,u,7));break;case 5:var h=null;switch(vt.tag){case 26:h=vt.memoizedState;case 5:case 27:var v=vt;if(!h||o0(h)){Nt=0,je=null;var S=v.sibling;if(S!==null)vt=S;else{var R=v.return;R!==null?(vt=R,or(R)):vt=null}break e}}Nt=0,je=null,Oi(t,e,u,5);break;case 6:Nt=0,je=null,Oi(t,e,u,6);break;case 8:ku(),Ft=6;break t;default:throw Error(s(462))}}Qv();break}catch(k){xm(t,k)}while(!0);return En=Ra=null,_.H=o,_.A=r,_t=n,vt!==null?0:(Ht=null,At=0,Ml(),Ft)}function Qv(){for(;vt!==null&&!Fr();)Am(vt)}function Am(t){var e=Fh(t.alternate,t,Vn);t.memoizedProps=t.pendingProps,e===null?or(t):vt=e}function Om(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Xh(n,e,e.pendingProps,e.type,void 0,At);break;case 11:e=Xh(n,e,e.pendingProps,e.type.render,e.ref,At);break;case 5:Ws(e);default:$h(n,e),e=vt=Dd(e,Vn),e=Fh(n,e,Vn)}t.memoizedProps=t.pendingProps,e===null?or(t):vt=e}function Oi(t,e,n,o){En=Ra=null,Ws(e),pi=null,Ao=0;var r=e.return;try{if(Uv(t,r,e,n,At)){Ft=1,Fl(t,Ze(n,t.current)),vt=null;return}}catch(u){if(r!==null)throw vt=r,u;Ft=1,Fl(t,Ze(n,t.current)),vt=null;return}e.flags&32768?(Rt||o===1?t=!0:bi||(At&536870912)!==0?t=!1:($n=t=!0,(o===2||o===9||o===3||o===6)&&(o=Fe.current,o!==null&&o.tag===13&&(o.flags|=16384))),Dm(e,t)):or(e)}function or(t){var e=t;do{if((e.flags&32768)!==0){Dm(e,$n);return}t=e.return;var n=jv(e.alternate,e,Vn);if(n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Dm(t,e){do{var n=Hv(t.alternate,t);if(n!==null){n.flags&=32767,vt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){vt=t;return}vt=t=n}while(t!==null);Ft=6,vt=null}function Mm(t,e,n,o,r,u,h,v,S){t.cancelPendingCommit=null;do lr();while(pe!==0);if((_t&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=Ms,ht(t,n,u,h,v,S),t===Ht&&(vt=Ht=null,At=0),Si=e,ea=t,Ti=n,zu=u,_u=r,gm=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Wv(Ya,function(){return zm(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=_.T,_.T=null,r=G.p,G.p=2,h=_t,_t|=4;try{Lv(t,e,n)}finally{_t=h,G.p=r,_.T=o}}pe=1,Em(),Rm(),Cm()}}function Em(){if(pe===1){pe=0;var t=ea,e=Si,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var o=G.p;G.p=2;var r=_t;_t|=4;try{um(e,t);var u=Ku,h=pd(t.containerInfo),v=u.focusedElem,S=u.selectionRange;if(h!==v&&v&&v.ownerDocument&&md(v.ownerDocument.documentElement,v)){if(S!==null&&Ss(v)){var R=S.start,k=S.end;if(k===void 0&&(k=R),"selectionStart"in v)v.selectionStart=R,v.selectionEnd=Math.min(k,v.value.length);else{var j=v.ownerDocument||document,C=j&&j.defaultView||window;if(C.getSelection){var z=C.getSelection(),ut=v.textContent.length,lt=Math.min(S.start,ut),Bt=S.end===void 0?lt:Math.min(S.end,ut);!z.extend&&lt>Bt&&(h=Bt,Bt=lt,lt=h);var O=hd(v,lt),A=hd(v,Bt);if(O&&A&&(z.rangeCount!==1||z.anchorNode!==O.node||z.anchorOffset!==O.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var E=j.createRange();E.setStart(O.node,O.offset),z.removeAllRanges(),lt>Bt?(z.addRange(E),z.extend(A.node,A.offset)):(E.setEnd(A.node,A.offset),z.addRange(E))}}}}for(j=[],z=v;z=z.parentNode;)z.nodeType===1&&j.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<j.length;v++){var B=j[v];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}vr=!!Qu,Ku=Qu=null}finally{_t=r,G.p=o,_.T=n}}t.current=e,pe=2}}function Rm(){if(pe===2){pe=0;var t=ea,e=Si,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var o=G.p;G.p=2;var r=_t;_t|=4;try{om(t,e.alternate,e)}finally{_t=r,G.p=o,_.T=n}}pe=3}}function Cm(){if(pe===4||pe===3){pe=0,Wr();var t=ea,e=Si,n=Ti,o=gm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?pe=5:(pe=0,Si=ea=null,wm(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(ta=null),Et(n),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ma,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=_.T,r=G.p,G.p=2,_.T=null;try{for(var u=t.onRecoverableError,h=0;h<o.length;h++){var v=o[h];u(v.value,{componentStack:v.stack})}}finally{_.T=e,G.p=r}}(Ti&3)!==0&&lr(),pn(t),r=t.pendingLanes,(n&4194090)!==0&&(r&42)!==0?t===Nu?_o++:(_o=0,Nu=t):_o=0,No(0)}}function wm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,fo(e)))}function lr(t){return Em(),Rm(),Cm(),zm()}function zm(){if(pe!==5)return!1;var t=ea,e=zu;zu=0;var n=Et(Ti),o=_.T,r=G.p;try{G.p=32>n?32:n,_.T=null,n=_u,_u=null;var u=ea,h=Ti;if(pe=0,Si=ea=null,Ti=0,(_t&6)!==0)throw Error(s(331));var v=_t;if(_t|=4,mm(u.current),fm(u,u.current,h,n),_t=v,No(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ma,u)}catch{}return!0}finally{G.p=r,_.T=o,wm(t,e)}}function _m(t,e,n){e=Ze(n,e),e=fu(t.stateNode,e,2),t=Gn(t,e,2),t!==null&&(ot(t,2),pn(t))}function jt(t,e,n){if(t.tag===3)_m(t,t,n);else for(;e!==null;){if(e.tag===3){_m(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ta===null||!ta.has(o))){t=Ze(n,t),n=Uh(2),o=Gn(e,n,2),o!==null&&(Bh(n,o,e,t),ot(o,2),pn(o));break}}e=e.return}}function Bu(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new Yv;var r=new Set;o.set(e,r)}else r=o.get(e),r===void 0&&(r=new Set,o.set(e,r));r.has(n)||(Eu=!0,r.add(n),t=Kv.bind(null,t,e,n),e.then(t,t))}function Kv(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ht===t&&(At&n)===n&&(Ft===4||Ft===3&&(At&62914560)===At&&300>Ye()-wu?(_t&2)===0&&Ai(t,0):Ru|=n,xi===At&&(xi=0)),pn(t)}function Nm(t,e){e===0&&(e=P()),t=oi(t,e),t!==null&&(ot(t,e),pn(t))}function Jv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nm(t,n)}function Fv(t,e){var n=0;switch(t.tag){case 13:var o=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(e),Nm(t,n)}function Wv(t,e){return Zi(t,e)}var rr=null,Di=null,ju=!1,sr=!1,Hu=!1,Va=0;function pn(t){t!==Di&&t.next===null&&(Di===null?rr=Di=t:Di=Di.next=t),sr=!0,ju||(ju=!0,Iv())}function No(t,e){if(!Hu&&sr){Hu=!0;do for(var n=!1,o=rr;o!==null;){if(t!==0){var r=o.pendingLanes;if(r===0)var u=0;else{var h=o.suspendedLanes,v=o.pingedLanes;u=(1<<31-xe(42|t)+1)-1,u&=r&~(h&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Bm(o,u))}else u=At,u=Ga(o,o===Ht?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||ga(o,u)||(n=!0,Bm(o,u));o=o.next}while(n);Hu=!1}}function $v(){km()}function km(){sr=ju=!1;var t=0;Va!==0&&(rb()&&(t=Va),Va=0);for(var e=Ye(),n=null,o=rr;o!==null;){var r=o.next,u=Vm(o,e);u===0?(o.next=null,n===null?rr=r:n.next=r,r===null&&(Di=n)):(n=o,(t!==0||(u&3)!==0)&&(sr=!0)),o=r}No(t)}function Vm(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var h=31-xe(u),v=1<<h,S=r[h];S===-1?((v&n)===0||(v&o)!==0)&&(r[h]=ml(v,e)):S<=e&&(t.expiredLanes|=v),u&=~v}if(e=Ht,n=At,n=Ga(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,n===0||t===e&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Qi(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||ga(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(o!==null&&Qi(o),Et(n)){case 2:case 8:n=hl;break;case 32:n=Ya;break;case 268435456:n=bn;break;default:n=Ya}return o=Um.bind(null,t),n=Zi(n,o),t.callbackPriority=e,t.callbackNode=n,e}return o!==null&&o!==null&&Qi(o),t.callbackPriority=2,t.callbackNode=null,2}function Um(t,e){if(pe!==0&&pe!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(lr()&&t.callbackNode!==n)return null;var o=At;return o=Ga(t,t===Ht?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(vm(t,o,e),Vm(t,Ye()),t.callbackNode!=null&&t.callbackNode===n?Um.bind(null,t):null)}function Bm(t,e){if(lr())return null;vm(t,e,!0)}function Iv(){ub(function(){(_t&6)!==0?Zi(Ki,$v):km()})}function Lu(){return Va===0&&(Va=N()),Va}function jm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bl(""+t)}function Hm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function tb(t,e,n,o,r){if(e==="submit"&&n&&n.stateNode===r){var u=jm((r[Tt]||null).action),h=o.submitter;h&&(e=(e=h[Tt]||null)?jm(e.formAction):h.getAttribute("formAction"),e!==null&&(u=e,h=null));var v=new Al("action","action",null,o,r);t.push({event:v,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Va!==0){var S=h?Hm(r,h):new FormData(r);lu(n,{pending:!0,data:S,method:r.method,action:u},null,S)}}else typeof u=="function"&&(v.preventDefault(),S=h?Hm(r,h):new FormData(r),lu(n,{pending:!0,data:S,method:r.method,action:u},u,S))},currentTarget:r}]})}}for(var qu=0;qu<Ds.length;qu++){var Pu=Ds[qu],eb=Pu.toLowerCase(),nb=Pu[0].toUpperCase()+Pu.slice(1);an(eb,"on"+nb)}an(vd,"onAnimationEnd"),an(bd,"onAnimationIteration"),an(xd,"onAnimationStart"),an("dblclick","onDoubleClick"),an("focusin","onFocus"),an("focusout","onBlur"),an(bv,"onTransitionRun"),an(xv,"onTransitionStart"),an(Sv,"onTransitionCancel"),an(Sd,"onTransitionEnd"),Ja("onMouseEnter",["mouseout","mouseover"]),Ja("onMouseLeave",["mouseout","mouseover"]),Ja("onPointerEnter",["pointerout","pointerover"]),Ja("onPointerLeave",["pointerout","pointerover"]),ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function Lm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],r=o.event;o=o.listeners;t:{var u=void 0;if(e)for(var h=o.length-1;0<=h;h--){var v=o[h],S=v.instance,R=v.currentTarget;if(v=v.listener,S!==u&&r.isPropagationStopped())break t;u=v,r.currentTarget=R;try{u(r)}catch(k){Jl(k)}r.currentTarget=null,u=S}else for(h=0;h<o.length;h++){if(v=o[h],S=v.instance,R=v.currentTarget,v=v.listener,S!==u&&r.isPropagationStopped())break t;u=v,r.currentTarget=R;try{u(r)}catch(k){Jl(k)}r.currentTarget=null,u=S}}}}function bt(t,e){var n=e[De];n===void 0&&(n=e[De]=new Set);var o=t+"__bubble";n.has(o)||(qm(e,t,2,!1),n.add(o))}function Yu(t,e,n){var o=0;e&&(o|=4),qm(n,t,o,e)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Xu(t){if(!t[ur]){t[ur]=!0,kf.forEach(function(n){n!=="selectionchange"&&(ab.has(n)||Yu(n,!1,t),Yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ur]||(e[ur]=!0,Yu("selectionchange",!1,e))}}function qm(t,e,n,o){switch(f0(e)){case 2:var r=wb;break;case 8:r=zb;break;default:r=ic}n=r.bind(null,e,n,t),r=void 0,!ds||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),o?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Gu(t,e,n,o,r){var u=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var h=o.tag;if(h===3||h===4){var v=o.stateNode.containerInfo;if(v===r)break;if(h===4)for(h=o.return;h!==null;){var S=h.tag;if((S===3||S===4)&&h.stateNode.containerInfo===r)return;h=h.return}for(;v!==null;){if(h=Za(v),h===null)return;if(S=h.tag,S===5||S===6||S===26||S===27){o=u=h;continue t}v=v.parentNode}}o=o.return}Kf(function(){var R=u,k=cs(n),j=[];t:{var C=Td.get(t);if(C!==void 0){var z=Al,ut=t;switch(t){case"keypress":if(Sl(n)===0)break t;case"keydown":case"keyup":z=Wy;break;case"focusin":ut="focus",z=gs;break;case"focusout":ut="blur",z=gs;break;case"beforeblur":case"afterblur":z=gs;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=tv;break;case vd:case bd:case xd:z=Py;break;case Sd:z=nv;break;case"scroll":case"scrollend":z=By;break;case"wheel":z=iv;break;case"copy":case"cut":case"paste":z=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=If;break;case"toggle":case"beforetoggle":z=lv}var lt=(e&4)!==0,Bt=!lt&&(t==="scroll"||t==="scrollend"),O=lt?C!==null?C+"Capture":null:C;lt=[];for(var A=R,E;A!==null;){var B=A;if(E=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||E===null||O===null||(B=$i(A,O),B!=null&&lt.push(Vo(A,B,E))),Bt)break;A=A.return}0<lt.length&&(C=new z(C,ut,null,n,k),j.push({event:C,listeners:lt}))}}if((e&7)===0){t:{if(C=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",C&&n!==us&&(ut=n.relatedTarget||n.fromElement)&&(Za(ut)||ut[Lt]))break t;if((z||C)&&(C=k.window===k?k:(C=k.ownerDocument)?C.defaultView||C.parentWindow:window,z?(ut=n.relatedTarget||n.toElement,z=R,ut=ut?Za(ut):null,ut!==null&&(Bt=d(ut),lt=ut.tag,ut!==Bt||lt!==5&&lt!==27&&lt!==6)&&(ut=null)):(z=null,ut=R),z!==ut)){if(lt=Wf,B="onMouseLeave",O="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(lt=If,B="onPointerLeave",O="onPointerEnter",A="pointer"),Bt=z==null?C:Wi(z),E=ut==null?C:Wi(ut),C=new lt(B,A+"leave",z,n,k),C.target=Bt,C.relatedTarget=E,B=null,Za(k)===R&&(lt=new lt(O,A+"enter",ut,n,k),lt.target=E,lt.relatedTarget=Bt,B=lt),Bt=B,z&&ut)e:{for(lt=z,O=ut,A=0,E=lt;E;E=Mi(E))A++;for(E=0,B=O;B;B=Mi(B))E++;for(;0<A-E;)lt=Mi(lt),A--;for(;0<E-A;)O=Mi(O),E--;for(;A--;){if(lt===O||O!==null&&lt===O.alternate)break e;lt=Mi(lt),O=Mi(O)}lt=null}else lt=null;z!==null&&Pm(j,C,z,lt,!1),ut!==null&&Bt!==null&&Pm(j,Bt,ut,lt,!0)}}t:{if(C=R?Wi(R):window,z=C.nodeName&&C.nodeName.toLowerCase(),z==="select"||z==="input"&&C.type==="file")var $=rd;else if(od(C))if(sd)$=gv;else{$=mv;var yt=hv}else z=C.nodeName,!z||z.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?R&&ss(R.elementType)&&($=rd):$=pv;if($&&($=$(t,R))){ld(j,$,n,k);break t}yt&&yt(t,C,R),t==="focusout"&&R&&C.type==="number"&&R.memoizedProps.value!=null&&rs(C,"number",C.value)}switch(yt=R?Wi(R):window,t){case"focusin":(od(yt)||yt.contentEditable==="true")&&(ni=yt,Ts=R,lo=null);break;case"focusout":lo=Ts=ni=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,gd(j,n,k);break;case"selectionchange":if(vv)break;case"keydown":case"keyup":gd(j,n,k)}var et;if(vs)t:{switch(t){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else ei?ad(t,n)&&(st="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(st="onCompositionStart");st&&(td&&n.locale!=="ko"&&(ei||st!=="onCompositionStart"?st==="onCompositionEnd"&&ei&&(et=Jf()):(qn=k,hs="value"in qn?qn.value:qn.textContent,ei=!0)),yt=cr(R,st),0<yt.length&&(st=new $f(st,t,null,n,k),j.push({event:st,listeners:yt}),et?st.data=et:(et=id(n),et!==null&&(st.data=et)))),(et=sv?uv(t,n):cv(t,n))&&(st=cr(R,"onBeforeInput"),0<st.length&&(yt=new $f("onBeforeInput","beforeinput",null,n,k),j.push({event:yt,listeners:st}),yt.data=et)),tb(j,t,R,n,k)}Lm(j,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cr(t,e){for(var n=e+"Capture",o=[];t!==null;){var r=t,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=$i(t,n),r!=null&&o.unshift(Vo(t,r,u)),r=$i(t,e),r!=null&&o.push(Vo(t,r,u))),t.tag===3)return o;t=t.return}return[]}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pm(t,e,n,o,r){for(var u=e._reactName,h=[];n!==null&&n!==o;){var v=n,S=v.alternate,R=v.stateNode;if(v=v.tag,S!==null&&S===o)break;v!==5&&v!==26&&v!==27||R===null||(S=R,r?(R=$i(n,u),R!=null&&h.unshift(Vo(n,R,S))):r||(R=$i(n,u),R!=null&&h.push(Vo(n,R,S)))),n=n.return}h.length!==0&&t.push({event:e,listeners:h})}var ib=/\r\n?/g,ob=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(ib,`
`).replace(ob,"")}function Xm(t,e){return e=Ym(e),Ym(t)===e}function fr(){}function Ut(t,e,n,o,r,u){switch(n){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||$a(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&$a(t,""+o);break;case"className":gl(t,"class",o);break;case"tabIndex":gl(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(t,n,o);break;case"style":Zf(t,o,u);break;case"data":if(e!=="object"){gl(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=bl(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Ut(t,e,"name",r.name,r,null),Ut(t,e,"formEncType",r.formEncType,r,null),Ut(t,e,"formMethod",r.formMethod,r,null),Ut(t,e,"formTarget",r.formTarget,r,null)):(Ut(t,e,"encType",r.encType,r,null),Ut(t,e,"method",r.method,r,null),Ut(t,e,"target",r.target,r,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=bl(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=fr);break;case"onScroll":o!=null&&bt("scroll",t);break;case"onScrollEnd":o!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=bl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":bt("beforetoggle",t),bt("toggle",t),pl(t,"popover",o);break;case"xlinkActuate":Tn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Tn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Tn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Tn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Tn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Tn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Tn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":pl(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Vy.get(n)||n,pl(t,n,o))}}function Zu(t,e,n,o,r,u){switch(n){case"style":Zf(t,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof o=="string"?$a(t,o):(typeof o=="number"||typeof o=="bigint")&&$a(t,""+o);break;case"onScroll":o!=null&&bt("scroll",t);break;case"onScrollEnd":o!=null&&bt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=fr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vf.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),u=t[Tt]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,r),typeof o=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,o,r);break t}n in t?t[n]=o:o===!0?t.setAttribute(n,""):pl(t,n,o)}}}function ge(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var o=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var h=n[u];if(h!=null)switch(u){case"src":o=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ut(t,e,u,h,n,null)}}r&&Ut(t,e,"srcSet",n.srcSet,n,null),o&&Ut(t,e,"src",n.src,n,null);return;case"input":bt("invalid",t);var v=u=h=r=null,S=null,R=null;for(o in n)if(n.hasOwnProperty(o)){var k=n[o];if(k!=null)switch(o){case"name":r=k;break;case"type":h=k;break;case"checked":S=k;break;case"defaultChecked":R=k;break;case"value":u=k;break;case"defaultValue":v=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,e));break;default:Ut(t,e,o,k,n,null)}}Pf(t,u,v,S,R,h,r,!1),yl(t);return;case"select":bt("invalid",t),o=h=u=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":u=v;break;case"defaultValue":h=v;break;case"multiple":o=v;default:Ut(t,e,r,v,n,null)}e=u,n=h,t.multiple=!!o,e!=null?Wa(t,!!o,e,!1):n!=null&&Wa(t,!!o,n,!0);return;case"textarea":bt("invalid",t),u=r=o=null;for(h in n)if(n.hasOwnProperty(h)&&(v=n[h],v!=null))switch(h){case"value":o=v;break;case"defaultValue":r=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(91));break;default:Ut(t,e,h,v,n,null)}Xf(t,o,r,u),yl(t);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(o=n[S],o!=null))switch(S){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ut(t,e,S,o,n,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(o=0;o<ko.length;o++)bt(ko[o],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(o=n[R],o!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ut(t,e,R,o,n,null)}return;default:if(ss(e)){for(k in n)n.hasOwnProperty(k)&&(o=n[k],o!==void 0&&Zu(t,e,k,o,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(o=n[v],o!=null&&Ut(t,e,v,o,n,null))}function lb(t,e,n,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,h=null,v=null,S=null,R=null,k=null;for(z in n){var j=n[z];if(n.hasOwnProperty(z)&&j!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":S=j;default:o.hasOwnProperty(z)||Ut(t,e,z,null,o,j)}}for(var C in o){var z=o[C];if(j=n[C],o.hasOwnProperty(C)&&(z!=null||j!=null))switch(C){case"type":u=z;break;case"name":r=z;break;case"checked":R=z;break;case"defaultChecked":k=z;break;case"value":h=z;break;case"defaultValue":v=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:z!==j&&Ut(t,e,C,z,o,j)}}ls(t,h,v,S,R,k,u,r);return;case"select":z=h=v=C=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":z=S;default:o.hasOwnProperty(u)||Ut(t,e,u,null,o,S)}for(r in o)if(u=o[r],S=n[r],o.hasOwnProperty(r)&&(u!=null||S!=null))switch(r){case"value":C=u;break;case"defaultValue":v=u;break;case"multiple":h=u;default:u!==S&&Ut(t,e,r,u,o,S)}e=v,n=h,o=z,C!=null?Wa(t,!!n,C,!1):!!o!=!!n&&(e!=null?Wa(t,!!n,e,!0):Wa(t,!!n,n?[]:"",!1));return;case"textarea":z=C=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!o.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ut(t,e,v,null,o,r)}for(h in o)if(r=o[h],u=n[h],o.hasOwnProperty(h)&&(r!=null||u!=null))switch(h){case"value":C=r;break;case"defaultValue":z=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==u&&Ut(t,e,h,r,o,u)}Yf(t,C,z);return;case"option":for(var ut in n)if(C=n[ut],n.hasOwnProperty(ut)&&C!=null&&!o.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:Ut(t,e,ut,null,o,C)}for(S in o)if(C=o[S],z=n[S],o.hasOwnProperty(S)&&C!==z&&(C!=null||z!=null))switch(S){case"selected":t.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ut(t,e,S,C,o,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in n)C=n[lt],n.hasOwnProperty(lt)&&C!=null&&!o.hasOwnProperty(lt)&&Ut(t,e,lt,null,o,C);for(R in o)if(C=o[R],z=n[R],o.hasOwnProperty(R)&&C!==z&&(C!=null||z!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,e));break;default:Ut(t,e,R,C,o,z)}return;default:if(ss(e)){for(var Bt in n)C=n[Bt],n.hasOwnProperty(Bt)&&C!==void 0&&!o.hasOwnProperty(Bt)&&Zu(t,e,Bt,void 0,o,C);for(k in o)C=o[k],z=n[k],!o.hasOwnProperty(k)||C===z||C===void 0&&z===void 0||Zu(t,e,k,C,o,z);return}}for(var O in n)C=n[O],n.hasOwnProperty(O)&&C!=null&&!o.hasOwnProperty(O)&&Ut(t,e,O,null,o,C);for(j in o)C=o[j],z=n[j],!o.hasOwnProperty(j)||C===z||C==null&&z==null||Ut(t,e,j,C,o,z)}var Qu=null,Ku=null;function dr(t){return t.nodeType===9?t:t.ownerDocument}function Gm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fu=null;function rb(){var t=window.event;return t&&t.type==="popstate"?t===Fu?!1:(Fu=t,!0):(Fu=null,!1)}var Qm=typeof setTimeout=="function"?setTimeout:void 0,sb=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,ub=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(cb)}:Qm;function cb(t){setTimeout(function(){throw t})}function aa(t){return t==="head"}function Jm(t,e){var n=e,o=0,r=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<o&&8>o){n=o;var h=t.ownerDocument;if(n&1&&Uo(h.documentElement),n&2&&Uo(h.body),n&4)for(n=h.head,Uo(n),h=n.firstChild;h;){var v=h.nextSibling,S=h.nodeName;h[Fi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=v}}if(r===0){t.removeChild(u),Xo(e);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:o=n.charCodeAt(0)-48;else o=0;n=u}while(n);Xo(e)}function Wu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Wu(n),ns(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function fb(t,e,n,o){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Fi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=ln(t.nextSibling),t===null)break}return null}function db(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ln(t.nextSibling),t===null))return null;return t}function $u(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function hb(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var o=function(){e(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ln(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Iu=null;function Fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function Wm(t,e,n){switch(e=dr(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Uo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ns(t)}var $e=new Map,$m=new Set;function hr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Un=G.d;G.d={f:mb,r:pb,D:gb,C:yb,L:vb,m:bb,X:Sb,S:xb,M:Tb};function mb(){var t=Un.f(),e=ir();return t||e}function pb(t){var e=Qa(t);e!==null&&e.tag===5&&e.type==="form"?vh(e):Un.r(t)}var Ei=typeof document>"u"?null:document;function Im(t,e,n){var o=Ei;if(o&&typeof e=="string"&&e){var r=Ge(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),$m.has(r)||($m.add(r),t={rel:t,crossOrigin:n,href:e},o.querySelector(r)===null&&(e=o.createElement("link"),ge(e,"link",t),ue(e),o.head.appendChild(e)))}}function gb(t){Un.D(t),Im("dns-prefetch",t,null)}function yb(t,e){Un.C(t,e),Im("preconnect",t,e)}function vb(t,e,n){Un.L(t,e,n);var o=Ei;if(o&&t&&e){var r='link[rel="preload"][as="'+Ge(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ge(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ge(n.imageSizes)+'"]')):r+='[href="'+Ge(t)+'"]';var u=r;switch(e){case"style":u=Ri(t);break;case"script":u=Ci(t)}$e.has(u)||(t=y({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),$e.set(u,t),o.querySelector(r)!==null||e==="style"&&o.querySelector(Bo(u))||e==="script"&&o.querySelector(jo(u))||(e=o.createElement("link"),ge(e,"link",t),ue(e),o.head.appendChild(e)))}}function bb(t,e){Un.m(t,e);var n=Ei;if(n&&t){var o=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Ge(o)+'"][href="'+Ge(t)+'"]',u=r;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ci(t)}if(!$e.has(u)&&(t=y({rel:"modulepreload",href:t},e),$e.set(u,t),n.querySelector(r)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(jo(u)))return}o=n.createElement("link"),ge(o,"link",t),ue(o),n.head.appendChild(o)}}}function xb(t,e,n){Un.S(t,e,n);var o=Ei;if(o&&t){var r=Ka(o).hoistableStyles,u=Ri(t);e=e||"default";var h=r.get(u);if(!h){var v={loading:0,preload:null};if(h=o.querySelector(Bo(u)))v.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},n),(n=$e.get(u))&&tc(t,n);var S=h=o.createElement("link");ue(S),ge(S,"link",t),S._p=new Promise(function(R,k){S.onload=R,S.onerror=k}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,mr(h,e,o)}h={type:"stylesheet",instance:h,count:1,state:v},r.set(u,h)}}}function Sb(t,e){Un.X(t,e);var n=Ei;if(n&&t){var o=Ka(n).hoistableScripts,r=Ci(t),u=o.get(r);u||(u=n.querySelector(jo(r)),u||(t=y({src:t,async:!0},e),(e=$e.get(r))&&ec(t,e),u=n.createElement("script"),ue(u),ge(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function Tb(t,e){Un.M(t,e);var n=Ei;if(n&&t){var o=Ka(n).hoistableScripts,r=Ci(t),u=o.get(r);u||(u=n.querySelector(jo(r)),u||(t=y({src:t,async:!0,type:"module"},e),(e=$e.get(r))&&ec(t,e),u=n.createElement("script"),ue(u),ge(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(r,u))}}function t0(t,e,n,o){var r=(r=ft.current)?hr(r):null;if(!r)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ri(n.href),n=Ka(r).hoistableStyles,o=n.get(e),o||(o={type:"style",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ri(n.href);var u=Ka(r).hoistableStyles,h=u.get(t);if(h||(r=r.ownerDocument||r,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,h),(u=r.querySelector(Bo(t)))&&!u._p&&(h.instance=u,h.state.loading=5),$e.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$e.set(t,n),u||Ab(r,t,n,h.state))),e&&o===null)throw Error(s(528,""));return h}if(e&&o!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ci(n),n=Ka(r).hoistableScripts,o=n.get(e),o||(o={type:"script",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ri(t){return'href="'+Ge(t)+'"'}function Bo(t){return'link[rel="stylesheet"]['+t+"]"}function e0(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function Ab(t,e,n,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),ge(e,"link",n),ue(e),t.head.appendChild(e))}function Ci(t){return'[src="'+Ge(t)+'"]'}function jo(t){return"script[async]"+t}function n0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+Ge(n.href)+'"]');if(o)return e.instance=o,ue(o),o;var r=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ue(o),ge(o,"style",r),mr(o,n.precedence,t),e.instance=o;case"stylesheet":r=Ri(n.href);var u=t.querySelector(Bo(r));if(u)return e.state.loading|=4,e.instance=u,ue(u),u;o=e0(n),(r=$e.get(r))&&tc(o,r),u=(t.ownerDocument||t).createElement("link"),ue(u);var h=u;return h._p=new Promise(function(v,S){h.onload=v,h.onerror=S}),ge(u,"link",o),e.state.loading|=4,mr(u,n.precedence,t),e.instance=u;case"script":return u=Ci(n.src),(r=t.querySelector(jo(u)))?(e.instance=r,ue(r),r):(o=n,(r=$e.get(u))&&(o=y({},n),ec(o,r)),t=t.ownerDocument||t,r=t.createElement("script"),ue(r),ge(r,"link",o),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,mr(o,n.precedence,t));return e.instance}function mr(t,e,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=o.length?o[o.length-1]:null,u=r,h=0;h<o.length;h++){var v=o[h];if(v.dataset.precedence===e)u=v;else if(u!==r)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function tc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ec(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var pr=null;function a0(t,e,n){if(pr===null){var o=new Map,r=pr=new Map;r.set(n,o)}else r=pr,o=r.get(n),o||(o=new Map,r.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var u=n[r];if(!(u[Fi]||u[ne]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(e)||"";h=t+h;var v=o.get(h);v?v.push(u):o.set(h,[u])}}return o}function i0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Ob(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function o0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ho=null;function Db(){}function Mb(t,e,n){if(Ho===null)throw Error(s(475));var o=Ho;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var r=Ri(n.href),u=t.querySelector(Bo(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=gr.bind(o),t.then(o,o)),e.state.loading|=4,e.instance=u,ue(u);return}u=t.ownerDocument||t,n=e0(n),(r=$e.get(r))&&tc(n,r),u=u.createElement("link"),ue(u);var h=u;h._p=new Promise(function(v,S){h.onload=v,h.onerror=S}),ge(u,"link",n),e.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(o.count++,e=gr.bind(o),t.addEventListener("load",e),t.addEventListener("error",e))}}function Eb(){if(Ho===null)throw Error(s(475));var t=Ho;return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function gr(){if(this.count--,this.count===0){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yr=null;function nc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yr=new Map,e.forEach(Rb,t),yr=null,gr.call(t))}function Rb(t,e){if(!(e.state.loading&4)){var n=yr.get(t);if(n)var o=n.get(null);else{n=new Map,yr.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var h=r[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),o=h)}o&&n.set(null,o)}r=e.instance,h=r.getAttribute("data-precedence"),u=n.get(h)||o,u===o&&n.set(null,r),n.set(h,r),this.count++,o=gr.bind(this),r.addEventListener("load",o),r.addEventListener("error",o),u?u.parentNode.insertBefore(r,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var Lo={$$typeof:U,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Cb(t,e,n,o,r,u,h,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=o,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function l0(t,e,n,o,r,u,h,v,S,R,k,j){return t=new Cb(t,e,n,h,v,S,R,j),e=1,u===!0&&(e|=24),u=Ve(3,null,null,e),t.current=u,u.stateNode=t,e=Bs(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:e},qs(u),t}function r0(t){return t?(t=li,t):li}function s0(t,e,n,o,r,u){r=r0(r),o.context===null?o.context=r:o.pendingContext=r,o=Xn(e),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=Gn(t,o,e),n!==null&&(Le(n,t,e),go(n,t,e))}function u0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ac(t,e){u0(t,e),(t=t.alternate)&&u0(t,e)}function c0(t){if(t.tag===13){var e=oi(t,67108864);e!==null&&Le(e,t,67108864),ac(t,67108864)}}var vr=!0;function wb(t,e,n,o){var r=_.T;_.T=null;var u=G.p;try{G.p=2,ic(t,e,n,o)}finally{G.p=u,_.T=r}}function zb(t,e,n,o){var r=_.T;_.T=null;var u=G.p;try{G.p=8,ic(t,e,n,o)}finally{G.p=u,_.T=r}}function ic(t,e,n,o){if(vr){var r=oc(o);if(r===null)Gu(t,e,o,br,n),d0(t,o);else if(Nb(r,t,e,n,o))o.stopPropagation();else if(d0(t,o),e&4&&-1<_b.indexOf(t)){for(;r!==null;){var u=Qa(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=Sn(u.pendingLanes);if(h!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;h;){var S=1<<31-xe(h);v.entanglements[1]|=S,h&=~S}pn(u),(_t&6)===0&&(nr=Ye()+500,No(0))}}break;case 13:v=oi(u,2),v!==null&&Le(v,u,2),ir(),ac(u,2)}if(u=oc(o),u===null&&Gu(t,e,o,br,n),u===r)break;r=u}r!==null&&o.stopPropagation()}else Gu(t,e,o,null,n)}}function oc(t){return t=cs(t),lc(t)}var br=null;function lc(t){if(br=null,t=Za(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return br=t,null}function f0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($r()){case Ki:return 2;case hl:return 8;case Ya:case Ji:return 32;case bn:return 268435456;default:return 32}default:return 32}}var rc=!1,ia=null,oa=null,la=null,qo=new Map,Po=new Map,ra=[],_b="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function d0(t,e){switch(t){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Yo(t,e,n,o,r,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[r]},e!==null&&(e=Qa(e),e!==null&&c0(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Nb(t,e,n,o,r){switch(e){case"focusin":return ia=Yo(ia,t,e,n,o,r),!0;case"dragenter":return oa=Yo(oa,t,e,n,o,r),!0;case"mouseover":return la=Yo(la,t,e,n,o,r),!0;case"pointerover":var u=r.pointerId;return qo.set(u,Yo(qo.get(u)||null,t,e,n,o,r)),!0;case"gotpointercapture":return u=r.pointerId,Po.set(u,Yo(Po.get(u)||null,t,e,n,o,r)),!0}return!1}function h0(t){var e=Za(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,Se(t.priority,function(){if(n.tag===13){var o=He();o=mt(o);var r=oi(n,o);r!==null&&Le(r,n,o),ac(n,o)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oc(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);us=o,n.target.dispatchEvent(o),us=null}else return e=Qa(n),e!==null&&c0(e),t.blockedOn=n,!1;e.shift()}return!0}function m0(t,e,n){xr(t)&&n.delete(e)}function kb(){rc=!1,ia!==null&&xr(ia)&&(ia=null),oa!==null&&xr(oa)&&(oa=null),la!==null&&xr(la)&&(la=null),qo.forEach(m0),Po.forEach(m0)}function Sr(t,e){t.blockedOn===e&&(t.blockedOn=null,rc||(rc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,kb)))}var Tr=null;function p0(t){Tr!==t&&(Tr=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Tr===t&&(Tr=null);for(var e=0;e<t.length;e+=3){var n=t[e],o=t[e+1],r=t[e+2];if(typeof o!="function"){if(lc(o||n)===null)continue;break}var u=Qa(n);u!==null&&(t.splice(e,3),e-=3,lu(u,{pending:!0,data:r,method:n.method,action:o},o,r))}}))}function Xo(t){function e(S){return Sr(S,t)}ia!==null&&Sr(ia,t),oa!==null&&Sr(oa,t),la!==null&&Sr(la,t),qo.forEach(e),Po.forEach(e);for(var n=0;n<ra.length;n++){var o=ra[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ra.length&&(n=ra[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&ra.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var r=n[o],u=n[o+1],h=r[Tt]||null;if(typeof u=="function")h||p0(n);else if(h){var v=null;if(u&&u.hasAttribute("formAction")){if(r=u,h=u[Tt]||null)v=h.formAction;else if(lc(r)!==null)continue}else v=h.action;typeof v=="function"?n[o+1]=v:(n.splice(o,3),o-=3),p0(n)}}}function sc(t){this._internalRoot=t}Ar.prototype.render=sc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,o=He();s0(n,o,t,e,null,null)},Ar.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;s0(t.current,2,null,t,null,null),ir(),e[Lt]=null}};function Ar(t){this._internalRoot=t}Ar.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ct();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ra.length&&e!==0&&e<ra[n].priority;n++);ra.splice(n,0,t),n===0&&h0(t)}};var g0=i.version;if(g0!=="19.1.0")throw Error(s(527,g0,"19.1.0"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Vb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{ma=Or.inject(Vb),be=Or}catch{}}return Zo.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,o="",r=_h,u=Nh,h=kh,v=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(v=e.unstable_transitionCallbacks)),e=l0(t,1,!1,null,null,n,o,r,u,h,v,null),t[Lt]=e.current,Xu(t),new sc(e)},Zo.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var o=!1,r="",u=_h,h=Nh,v=kh,S=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),e=l0(t,1,!0,e,n??null,o,r,u,h,v,S,R),e.context=r0(null),n=e.current,o=He(),o=mt(o),r=Xn(o),r.callback=null,Gn(n,r,o),n=o,e.current.lanes=n,ot(e,n),pn(e),t[Lt]=e.current,Xu(t),new Ar(e)},Zo.version="19.1.0",Zo}var M0;function Zb(){if(M0)return fc.exports;M0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),fc.exports=Gb(),fc.exports}var Qb=Zb();const $c=Z.createContext({});function Ic(a){const i=Z.useRef(null);return i.current===null&&(i.current=a()),i.current}const tf=typeof window<"u",Fp=tf?Z.useLayoutEffect:Z.useEffect,qr=Z.createContext(null);function ef(a,i){a.indexOf(i)===-1&&a.push(i)}function nf(a,i){const l=a.indexOf(i);l>-1&&a.splice(l,1)}const jn=(a,i,l)=>l>i?i:l<a?a:l;let af=()=>{};const Hn={},Wp=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function $p(a){return typeof a=="object"&&a!==null}const Ip=a=>/^0[^.\s]+$/u.test(a);function of(a){let i;return()=>(i===void 0&&(i=a()),i)}const nn=a=>a,Kb=(a,i)=>l=>i(a(l)),sl=(...a)=>a.reduce(Kb),el=(a,i,l)=>{const s=i-a;return s===0?1:(l-a)/s};class lf{constructor(){this.subscriptions=[]}add(i){return ef(this.subscriptions,i),()=>nf(this.subscriptions,i)}notify(i,l,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,l,s);else for(let d=0;d<c;d++){const f=this.subscriptions[d];f&&f(i,l,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const gn=a=>a*1e3,yn=a=>a/1e3;function tg(a,i){return i?a*(1e3/i):0}const eg=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,Jb=1e-7,Fb=12;function Wb(a,i,l,s,c){let d,f,g=0;do f=i+(l-i)/2,d=eg(f,s,c)-a,d>0?l=f:i=f;while(Math.abs(d)>Jb&&++g<Fb);return f}function ul(a,i,l,s){if(a===i&&l===s)return nn;const c=d=>Wb(d,0,1,a,l);return d=>d===0||d===1?d:eg(c(d),i,s)}const ng=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,ag=a=>i=>1-a(1-i),ig=ul(.33,1.53,.69,.99),rf=ag(ig),og=ng(rf),lg=a=>(a*=2)<1?.5*rf(a):.5*(2-Math.pow(2,-10*(a-1))),sf=a=>1-Math.sin(Math.acos(a)),rg=ag(sf),sg=ng(sf),$b=ul(.42,0,1,1),Ib=ul(0,0,.58,1),ug=ul(.42,0,.58,1),t1=a=>Array.isArray(a)&&typeof a[0]!="number",cg=a=>Array.isArray(a)&&typeof a[0]=="number",e1={linear:nn,easeIn:$b,easeInOut:ug,easeOut:Ib,circIn:sf,circInOut:sg,circOut:rg,backIn:rf,backInOut:og,backOut:ig,anticipate:lg},n1=a=>typeof a=="string",E0=a=>{if(cg(a)){af(a.length===4);const[i,l,s,c]=a;return ul(i,l,s,c)}else if(n1(a))return e1[a];return a},Dr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function a1(a,i){let l=new Set,s=new Set,c=!1,d=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(m.schedule(y),a()),y(g)}const m={schedule:(y,b=!1,x=!1)=>{const M=x&&c?l:s;return b&&f.add(y),M.has(y)||M.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,c){d=!0;return}c=!0,[l,s]=[s,l],l.forEach(p),l.clear(),c=!1,d&&(d=!1,m.process(y))}};return m}const i1=40;function fg(a,i){let l=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},d=()=>l=!0,f=Dr.reduce((U,K)=>(U[K]=a1(d),U),{}),{setup:g,read:p,resolveKeyframes:m,preUpdate:y,update:b,preRender:x,render:w,postRender:M}=f,D=()=>{const U=Hn.useManualTiming?c.timestamp:performance.now();l=!1,Hn.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(U-c.timestamp,i1),1)),c.timestamp=U,c.isProcessing=!0,g.process(c),p.process(c),m.process(c),y.process(c),b.process(c),x.process(c),w.process(c),M.process(c),c.isProcessing=!1,l&&i&&(s=!1,a(D))},V=()=>{l=!0,s=!0,c.isProcessing||a(D)};return{schedule:Dr.reduce((U,K)=>{const q=f[K];return U[K]=(W,tt=!1,Q=!1)=>(l||V(),q.schedule(W,tt,Q)),U},{}),cancel:U=>{for(let K=0;K<Dr.length;K++)f[Dr[K]].cancel(U)},state:c,steps:f}}const{schedule:Yt,cancel:fa,state:ye,steps:pc}=fg(typeof requestAnimationFrame<"u"?requestAnimationFrame:nn,!0);let zr;function o1(){zr=void 0}const _e={now:()=>(zr===void 0&&_e.set(ye.isProcessing||Hn.useManualTiming?ye.timestamp:performance.now()),zr),set:a=>{zr=a,queueMicrotask(o1)}},dg=a=>i=>typeof i=="string"&&i.startsWith(a),uf=dg("--"),l1=dg("var(--"),cf=a=>l1(a)?r1.test(a.split("/*")[0].trim()):!1,r1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,qi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},nl={...qi,transform:a=>jn(0,1,a)},Mr={...qi,default:1},Fo=a=>Math.round(a*1e5)/1e5,ff=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function s1(a){return a==null}const u1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,df=(a,i)=>l=>!!(typeof l=="string"&&u1.test(l)&&l.startsWith(a)||i&&!s1(l)&&Object.prototype.hasOwnProperty.call(l,i)),hg=(a,i,l)=>s=>{if(typeof s!="string")return s;const[c,d,f,g]=s.match(ff);return{[a]:parseFloat(c),[i]:parseFloat(d),[l]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},c1=a=>jn(0,255,a),gc={...qi,transform:a=>Math.round(c1(a))},ja={test:df("rgb","red"),parse:hg("red","green","blue"),transform:({red:a,green:i,blue:l,alpha:s=1})=>"rgba("+gc.transform(a)+", "+gc.transform(i)+", "+gc.transform(l)+", "+Fo(nl.transform(s))+")"};function f1(a){let i="",l="",s="",c="";return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),s=a.substring(5,7),c=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),s=a.substring(3,4),c=a.substring(4,5),i+=i,l+=l,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const wc={test:df("#"),parse:f1,transform:ja.transform},cl=a=>({test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${a}`}),ca=cl("deg"),vn=cl("%"),ct=cl("px"),d1=cl("vh"),h1=cl("vw"),R0={...vn,parse:a=>vn.parse(a)/100,transform:a=>vn.transform(a*100)},ki={test:df("hsl","hue"),parse:hg("hue","saturation","lightness"),transform:({hue:a,saturation:i,lightness:l,alpha:s=1})=>"hsla("+Math.round(a)+", "+vn.transform(Fo(i))+", "+vn.transform(Fo(l))+", "+Fo(nl.transform(s))+")"},oe={test:a=>ja.test(a)||wc.test(a)||ki.test(a),parse:a=>ja.test(a)?ja.parse(a):ki.test(a)?ki.parse(a):wc.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ja.transform(a):ki.transform(a),getAnimatableNone:a=>{const i=oe.parse(a);return i.alpha=0,oe.transform(i)}},m1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function p1(a){return isNaN(a)&&typeof a=="string"&&(a.match(ff)?.length||0)+(a.match(m1)?.length||0)>0}const mg="number",pg="color",g1="var",y1="var(",C0="${}",v1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function al(a){const i=a.toString(),l=[],s={color:[],number:[],var:[]},c=[];let d=0;const g=i.replace(v1,p=>(oe.test(p)?(s.color.push(d),c.push(pg),l.push(oe.parse(p))):p.startsWith(y1)?(s.var.push(d),c.push(g1),l.push(p)):(s.number.push(d),c.push(mg),l.push(parseFloat(p))),++d,C0)).split(C0);return{values:l,split:g,indexes:s,types:c}}function gg(a){return al(a).values}function yg(a){const{split:i,types:l}=al(a),s=i.length;return c=>{let d="";for(let f=0;f<s;f++)if(d+=i[f],c[f]!==void 0){const g=l[f];g===mg?d+=Fo(c[f]):g===pg?d+=oe.transform(c[f]):d+=c[f]}return d}}const b1=a=>typeof a=="number"?0:oe.test(a)?oe.getAnimatableNone(a):a;function x1(a){const i=gg(a);return yg(a)(i.map(b1))}const da={test:p1,parse:gg,createTransformer:yg,getAnimatableNone:x1};function yc(a,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a}function S1({hue:a,saturation:i,lightness:l,alpha:s}){a/=360,i/=100,l/=100;let c=0,d=0,f=0;if(!i)c=d=f=l;else{const g=l<.5?l*(1+i):l+i-l*i,p=2*l-g;c=yc(p,g,a+1/3),d=yc(p,g,a),f=yc(p,g,a-1/3)}return{red:Math.round(c*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:s}}function Vr(a,i){return l=>l>0?i:a}const Zt=(a,i,l)=>a+(i-a)*l,vc=(a,i,l)=>{const s=a*a,c=l*(i*i-s)+s;return c<0?0:Math.sqrt(c)},T1=[wc,ja,ki],A1=a=>T1.find(i=>i.test(a));function w0(a){const i=A1(a);if(!i)return!1;let l=i.parse(a);return i===ki&&(l=S1(l)),l}const z0=(a,i)=>{const l=w0(a),s=w0(i);if(!l||!s)return Vr(a,i);const c={...l};return d=>(c.red=vc(l.red,s.red,d),c.green=vc(l.green,s.green,d),c.blue=vc(l.blue,s.blue,d),c.alpha=Zt(l.alpha,s.alpha,d),ja.transform(c))},zc=new Set(["none","hidden"]);function O1(a,i){return zc.has(a)?l=>l<=0?a:i:l=>l>=1?i:a}function D1(a,i){return l=>Zt(a,i,l)}function hf(a){return typeof a=="number"?D1:typeof a=="string"?cf(a)?Vr:oe.test(a)?z0:R1:Array.isArray(a)?vg:typeof a=="object"?oe.test(a)?z0:M1:Vr}function vg(a,i){const l=[...a],s=l.length,c=a.map((d,f)=>hf(d)(d,i[f]));return d=>{for(let f=0;f<s;f++)l[f]=c[f](d);return l}}function M1(a,i){const l={...a,...i},s={};for(const c in l)a[c]!==void 0&&i[c]!==void 0&&(s[c]=hf(a[c])(a[c],i[c]));return c=>{for(const d in s)l[d]=s[d](c);return l}}function E1(a,i){const l=[],s={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const d=i.types[c],f=a.indexes[d][s[d]],g=a.values[f]??0;l[c]=g,s[d]++}return l}const R1=(a,i)=>{const l=da.createTransformer(i),s=al(a),c=al(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?zc.has(a)&&!c.values.length||zc.has(i)&&!s.values.length?O1(a,i):sl(vg(E1(s,c),c.values),l):Vr(a,i)};function bg(a,i,l){return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?Zt(a,i,l):hf(a)(a,i)}const C1=a=>{const i=({timestamp:l})=>a(l);return{start:(l=!0)=>Yt.update(i,l),stop:()=>fa(i),now:()=>ye.isProcessing?ye.timestamp:_e.now()}},xg=(a,i,l=10)=>{let s="";const c=Math.max(Math.round(i/l),2);for(let d=0;d<c;d++)s+=Math.round(a(d/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Ur=2e4;function mf(a){let i=0;const l=50;let s=a.next(i);for(;!s.done&&i<Ur;)i+=l,s=a.next(i);return i>=Ur?1/0:i}function w1(a,i=100,l){const s=l({...a,keyframes:[0,i]}),c=Math.min(mf(s),Ur);return{type:"keyframes",ease:d=>s.next(c*d).value/i,duration:yn(c)}}const z1=5;function Sg(a,i,l){const s=Math.max(i-z1,0);return tg(l-a(s),i-s)}const Wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},bc=.001;function _1({duration:a=Wt.duration,bounce:i=Wt.bounce,velocity:l=Wt.velocity,mass:s=Wt.mass}){let c,d,f=1-i;f=jn(Wt.minDamping,Wt.maxDamping,f),a=jn(Wt.minDuration,Wt.maxDuration,yn(a)),f<1?(c=m=>{const y=m*f,b=y*a,x=y-l,w=_c(m,f),M=Math.exp(-b);return bc-x/w*M},d=m=>{const b=m*f*a,x=b*l+l,w=Math.pow(f,2)*Math.pow(m,2)*a,M=Math.exp(-b),D=_c(Math.pow(m,2),f);return(-c(m)+bc>0?-1:1)*((x-w)*M)/D}):(c=m=>{const y=Math.exp(-m*a),b=(m-l)*a+1;return-bc+y*b},d=m=>{const y=Math.exp(-m*a),b=(l-m)*(a*a);return y*b});const g=5/a,p=k1(c,d,g);if(a=gn(a),isNaN(p))return{stiffness:Wt.stiffness,damping:Wt.damping,duration:a};{const m=Math.pow(p,2)*s;return{stiffness:m,damping:f*2*Math.sqrt(s*m),duration:a}}}const N1=12;function k1(a,i,l){let s=l;for(let c=1;c<N1;c++)s=s-a(s)/i(s);return s}function _c(a,i){return a*Math.sqrt(1-i*i)}const V1=["duration","bounce"],U1=["stiffness","damping","mass"];function _0(a,i){return i.some(l=>a[l]!==void 0)}function B1(a){let i={velocity:Wt.velocity,stiffness:Wt.stiffness,damping:Wt.damping,mass:Wt.mass,isResolvedFromDuration:!1,...a};if(!_0(a,U1)&&_0(a,V1))if(a.visualDuration){const l=a.visualDuration,s=2*Math.PI/(l*1.2),c=s*s,d=2*jn(.05,1,1-(a.bounce||0))*Math.sqrt(c);i={...i,mass:Wt.mass,stiffness:c,damping:d}}else{const l=_1(a);i={...i,...l,mass:Wt.mass},i.isResolvedFromDuration=!0}return i}function Br(a=Wt.visualDuration,i=Wt.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:i}:a;let{restSpeed:s,restDelta:c}=l;const d=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],g={done:!1,value:d},{stiffness:p,damping:m,mass:y,duration:b,velocity:x,isResolvedFromDuration:w}=B1({...l,velocity:-yn(l.velocity||0)}),M=x||0,D=m/(2*Math.sqrt(p*y)),V=f-d,L=yn(Math.sqrt(p/y)),X=Math.abs(V)<5;s||(s=X?Wt.restSpeed.granular:Wt.restSpeed.default),c||(c=X?Wt.restDelta.granular:Wt.restDelta.default);let U;if(D<1){const q=_c(L,D);U=W=>{const tt=Math.exp(-D*L*W);return f-tt*((M+D*L*V)/q*Math.sin(q*W)+V*Math.cos(q*W))}}else if(D===1)U=q=>f-Math.exp(-L*q)*(V+(M+L*V)*q);else{const q=L*Math.sqrt(D*D-1);U=W=>{const tt=Math.exp(-D*L*W),Q=Math.min(q*W,300);return f-tt*((M+D*L*V)*Math.sinh(Q)+q*V*Math.cosh(Q))/q}}const K={calculatedDuration:w&&b||null,next:q=>{const W=U(q);if(w)g.done=q>=b;else{let tt=q===0?M:0;D<1&&(tt=q===0?gn(M):Sg(U,q,W));const Q=Math.abs(tt)<=s,dt=Math.abs(f-W)<=c;g.done=Q&&dt}return g.value=g.done?f:W,g},toString:()=>{const q=Math.min(mf(K),Ur),W=xg(tt=>K.next(q*tt).value,q,30);return q+"ms "+W},toTransition:()=>{}};return K}Br.applyToOptions=a=>{const i=w1(a,100,Br);return a.ease=i.ease,a.duration=gn(i.duration),a.type="keyframes",a};function Nc({keyframes:a,velocity:i=0,power:l=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:d=500,modifyTarget:f,min:g,max:p,restDelta:m=.5,restSpeed:y}){const b=a[0],x={done:!1,value:b},w=Q=>g!==void 0&&Q<g||p!==void 0&&Q>p,M=Q=>g===void 0?p:p===void 0||Math.abs(g-Q)<Math.abs(p-Q)?g:p;let D=l*i;const V=b+D,L=f===void 0?V:f(V);L!==V&&(D=L-b);const X=Q=>-D*Math.exp(-Q/s),U=Q=>L+X(Q),K=Q=>{const dt=X(Q),St=U(Q);x.done=Math.abs(dt)<=m,x.value=x.done?L:St};let q,W;const tt=Q=>{w(x.value)&&(q=Q,W=Br({keyframes:[x.value,M(x.value)],velocity:Sg(U,Q,x.value),damping:c,stiffness:d,restDelta:m,restSpeed:y}))};return tt(0),{calculatedDuration:null,next:Q=>{let dt=!1;return!W&&q===void 0&&(dt=!0,K(Q),tt(Q)),q!==void 0&&Q>=q?W.next(Q-q):(!dt&&K(Q),x)}}}function j1(a,i,l){const s=[],c=l||Hn.mix||bg,d=a.length-1;for(let f=0;f<d;f++){let g=c(a[f],a[f+1]);if(i){const p=Array.isArray(i)?i[f]||nn:i;g=sl(p,g)}s.push(g)}return s}function H1(a,i,{clamp:l=!0,ease:s,mixer:c}={}){const d=a.length;if(af(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=a[0]===a[1];a[0]>a[d-1]&&(a=[...a].reverse(),i=[...i].reverse());const g=j1(i,s,c),p=g.length,m=y=>{if(f&&y<a[0])return i[0];let b=0;if(p>1)for(;b<a.length-2&&!(y<a[b+1]);b++);const x=el(a[b],a[b+1],y);return g[b](x)};return l?y=>m(jn(a[0],a[d-1],y)):m}function L1(a,i){const l=a[a.length-1];for(let s=1;s<=i;s++){const c=el(0,i,s);a.push(Zt(l,1,c))}}function q1(a){const i=[0];return L1(i,a.length-1),i}function P1(a,i){return a.map(l=>l*i)}function Y1(a,i){return a.map(()=>i||ug).splice(0,a.length-1)}function Wo({duration:a=300,keyframes:i,times:l,ease:s="easeInOut"}){const c=t1(s)?s.map(E0):E0(s),d={done:!1,value:i[0]},f=P1(l&&l.length===i.length?l:q1(i),a),g=H1(f,i,{ease:Array.isArray(c)?c:Y1(i,c)});return{calculatedDuration:a,next:p=>(d.value=g(p),d.done=p>=a,d)}}const X1=a=>a!==null;function pf(a,{repeat:i,repeatType:l="loop"},s,c=1){const d=a.filter(X1),g=c<0||i&&l!=="loop"&&i%2===1?0:d.length-1;return!g||s===void 0?d[g]:s}const G1={decay:Nc,inertia:Nc,tween:Wo,keyframes:Wo,spring:Br};function Tg(a){typeof a.type=="string"&&(a.type=G1[a.type])}class gf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const Z1=a=>a/100;class yf extends gf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==_e.now()&&this.tick(_e.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Tg(i);const{type:l=Wo,repeat:s=0,repeatDelay:c=0,repeatType:d,velocity:f=0}=i;let{keyframes:g}=i;const p=l||Wo;p!==Wo&&typeof g[0]!="number"&&(this.mixKeyframes=sl(Z1,bg(g[0],g[1])),g=[0,100]);const m=p({...i,keyframes:g});d==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...g].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=mf(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=m}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:s,totalDuration:c,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:m=0,keyframes:y,repeat:b,repeatType:x,repeatDelay:w,type:M,onUpdate:D,finalKeyframe:V}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const L=this.currentTime-m*(this.playbackSpeed>=0?1:-1),X=this.playbackSpeed>=0?L<0:L>c;this.currentTime=Math.max(L,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let U=this.currentTime,K=s;if(b){const Q=Math.min(this.currentTime,c)/g;let dt=Math.floor(Q),St=Q%1;!St&&Q>=1&&(St=1),St===1&&dt--,dt=Math.min(dt,b+1),!!(dt%2)&&(x==="reverse"?(St=1-St,w&&(St-=w/g)):x==="mirror"&&(K=f)),U=jn(0,1,St)*g}const q=X?{done:!1,value:y[0]}:K.next(U);d&&(q.value=d(q.value));let{done:W}=q;!X&&p!==null&&(W=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const tt=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return tt&&M!==Nc&&(q.value=pf(y,this.options,V,this.speed)),D&&D(q.value),tt&&this.finish(),q}then(i,l){return this.finished.then(i,l)}get duration(){return yn(this.calculatedDuration)}get time(){return yn(this.currentTime)}set time(i){i=gn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(_e.now());const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=yn(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=C1,startTime:l}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=l??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(_e.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function Q1(a){for(let i=1;i<a.length;i++)a[i]??(a[i]=a[i-1])}const Ha=a=>a*180/Math.PI,kc=a=>{const i=Ha(Math.atan2(a[1],a[0]));return Vc(i)},K1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:kc,rotateZ:kc,skewX:a=>Ha(Math.atan(a[1])),skewY:a=>Ha(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Vc=a=>(a=a%360,a<0&&(a+=360),a),N0=kc,k0=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),V0=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),J1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:k0,scaleY:V0,scale:a=>(k0(a)+V0(a))/2,rotateX:a=>Vc(Ha(Math.atan2(a[6],a[5]))),rotateY:a=>Vc(Ha(Math.atan2(-a[2],a[0]))),rotateZ:N0,rotate:N0,skewX:a=>Ha(Math.atan(a[4])),skewY:a=>Ha(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Uc(a){return a.includes("scale")?1:0}function Bc(a,i){if(!a||a==="none")return Uc(i);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(l)s=J1,c=l;else{const g=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=K1,c=g}if(!c)return Uc(i);const d=s[i],f=c[1].split(",").map(W1);return typeof d=="function"?d(f):f[d]}const F1=(a,i)=>{const{transform:l="none"}=getComputedStyle(a);return Bc(l,i)};function W1(a){return parseFloat(a.trim())}const Pi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yi=new Set(Pi),U0=a=>a===qi||a===ct,$1=new Set(["x","y","z"]),I1=Pi.filter(a=>!$1.has(a));function t2(a){const i=[];return I1.forEach(l=>{const s=a.getValue(l);s!==void 0&&(i.push([l,s.get()]),s.set(l.startsWith("scale")?1:0))}),i}const La={width:({x:a},{paddingLeft:i="0",paddingRight:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),height:({y:a},{paddingTop:i="0",paddingBottom:l="0"})=>a.max-a.min-parseFloat(i)-parseFloat(l),top:(a,{top:i})=>parseFloat(i),left:(a,{left:i})=>parseFloat(i),bottom:({y:a},{top:i})=>parseFloat(i)+(a.max-a.min),right:({x:a},{left:i})=>parseFloat(i)+(a.max-a.min),x:(a,{transform:i})=>Bc(i,"x"),y:(a,{transform:i})=>Bc(i,"y")};La.translateX=La.x;La.translateY=La.y;const qa=new Set;let jc=!1,Hc=!1,Lc=!1;function Ag(){if(Hc){const a=Array.from(qa).filter(s=>s.needsMeasurement),i=new Set(a.map(s=>s.element)),l=new Map;i.forEach(s=>{const c=t2(s);c.length&&(l.set(s,c),s.render())}),a.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=l.get(s);c&&c.forEach(([d,f])=>{s.getValue(d)?.set(f)})}),a.forEach(s=>s.measureEndState()),a.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Hc=!1,jc=!1,qa.forEach(a=>a.complete(Lc)),qa.clear()}function Og(){qa.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Hc=!0)})}function e2(){Lc=!0,Og(),Ag(),Lc=!1}class vf{constructor(i,l,s,c,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=s,this.motionValue=c,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(qa.add(this),jc||(jc=!0,Yt.read(Og),Yt.resolveKeyframes(Ag))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:s,motionValue:c}=this;if(i[0]===null){const d=c?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&l){const g=s.readValue(l,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),c&&d===void 0&&c.set(i[0])}Q1(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),qa.delete(this)}cancel(){this.state==="scheduled"&&(qa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const n2=a=>a.startsWith("--");function a2(a,i,l){n2(i)?a.style.setProperty(i,l):a.style[i]=l}const i2=of(()=>window.ScrollTimeline!==void 0),o2={};function l2(a,i){const l=of(a);return()=>o2[i]??l()}const Dg=l2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ko=([a,i,l,s])=>`cubic-bezier(${a}, ${i}, ${l}, ${s})`,B0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ko([0,.65,.55,1]),circOut:Ko([.55,0,1,.45]),backIn:Ko([.31,.01,.66,-.59]),backOut:Ko([.33,1.53,.69,.99])};function Mg(a,i){if(a)return typeof a=="function"?Dg()?xg(a,i):"ease-out":cg(a)?Ko(a):Array.isArray(a)?a.map(l=>Mg(l,i)||B0.easeOut):B0[a]}function r2(a,i,l,{delay:s=0,duration:c=300,repeat:d=0,repeatType:f="loop",ease:g="easeOut",times:p}={},m=void 0){const y={[i]:l};p&&(y.offset=p);const b=Mg(g,c);Array.isArray(b)&&(y.easing=b);const x={delay:s,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return m&&(x.pseudoElement=m),a.animate(y,x)}function Eg(a){return typeof a=="function"&&"applyToOptions"in a}function s2({type:a,...i}){return Eg(a)&&Dg()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class u2 extends gf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:l,name:s,keyframes:c,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:g,onComplete:p}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,af(typeof i.type!="string");const m=s2(i);this.animation=r2(l,s,c,m,d),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=pf(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):a2(l,s,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return yn(Number(i))}get time(){return yn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=gn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&i2()?(this.animation.timeline=i,nn):l(this)}}const Rg={anticipate:lg,backInOut:og,circInOut:sg};function c2(a){return a in Rg}function f2(a){typeof a.ease=="string"&&c2(a.ease)&&(a.ease=Rg[a.ease])}const j0=10;class d2 extends u2{constructor(i){f2(i),Tg(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:s,onComplete:c,element:d,...f}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const g=new yf({...f,autoplay:!1}),p=gn(this.finishedTime??this.time);l.setWithVelocity(g.sample(p-j0).value,g.sample(p).value,j0),g.stop()}}const H0=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(da.test(a)||a==="0")&&!a.startsWith("url("));function h2(a){const i=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==i)return!0}function m2(a,i,l,s){const c=a[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const d=a[a.length-1],f=H0(c,i),g=H0(d,i);return!f||!g?!1:h2(a)||(l==="spring"||Eg(l))&&s}const p2=new Set(["opacity","clipPath","filter","transform"]),g2=of(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function y2(a){const{motionValue:i,name:l,repeatDelay:s,repeatType:c,damping:d,type:f}=a;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=i.owner.getProps();return g2()&&l&&p2.has(l)&&(l!=="transform"||!m)&&!p&&!s&&c!=="mirror"&&d!==0&&f!=="inertia"}const v2=40;class b2 extends gf{constructor({autoplay:i=!0,delay:l=0,type:s="keyframes",repeat:c=0,repeatDelay:d=0,repeatType:f="loop",keyframes:g,name:p,motionValue:m,element:y,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=_e.now();const x={autoplay:i,delay:l,type:s,repeat:c,repeatDelay:d,repeatType:f,name:p,motionValue:m,element:y,...b},w=y?.KeyframeResolver||vf;this.keyframeResolver=new w(g,(M,D,V)=>this.onKeyframesResolved(M,D,x,!V),p,m,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,s,c){this.keyframeResolver=void 0;const{name:d,type:f,velocity:g,delay:p,isHandoff:m,onUpdate:y}=s;this.resolvedAt=_e.now(),m2(i,d,f,g)||((Hn.instantAnimations||!p)&&y?.(pf(i,s,l)),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>v2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...s,keyframes:i},w=!m&&y2(x)?new d2({...x,element:x.motionValue.owner.current}):new yf(x);w.finished.then(()=>this.notifyFinished()).catch(nn),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),e2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const x2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function S2(a){const i=x2.exec(a);if(!i)return[,];const[,l,s,c]=i;return[`--${l??s}`,c]}function Cg(a,i,l=1){const[s,c]=S2(a);if(!s)return;const d=window.getComputedStyle(i).getPropertyValue(s);if(d){const f=d.trim();return Wp(f)?parseFloat(f):f}return cf(c)?Cg(c,i,l+1):c}function bf(a,i){return a?.[i]??a?.default??a}const wg=new Set(["width","height","top","left","right","bottom",...Pi]),T2={test:a=>a==="auto",parse:a=>a},zg=a=>i=>i.test(a),_g=[qi,ct,vn,ca,h1,d1,T2],L0=a=>_g.find(zg(a));function A2(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||Ip(a):!0}const O2=new Set(["brightness","contrast","saturate","opacity"]);function D2(a){const[i,l]=a.slice(0,-1).split("(");if(i==="drop-shadow")return a;const[s]=l.match(ff)||[];if(!s)return a;const c=l.replace(s,"");let d=O2.has(i)?1:0;return s!==l&&(d*=100),i+"("+d+c+")"}const M2=/\b([a-z-]*)\(.*?\)/gu,qc={...da,getAnimatableNone:a=>{const i=a.match(M2);return i?i.map(D2).join(" "):a}},q0={...qi,transform:Math.round},E2={rotate:ca,rotateX:ca,rotateY:ca,rotateZ:ca,scale:Mr,scaleX:Mr,scaleY:Mr,scaleZ:Mr,skew:ca,skewX:ca,skewY:ca,distance:ct,translateX:ct,translateY:ct,translateZ:ct,x:ct,y:ct,z:ct,perspective:ct,transformPerspective:ct,opacity:nl,originX:R0,originY:R0,originZ:ct},xf={borderWidth:ct,borderTopWidth:ct,borderRightWidth:ct,borderBottomWidth:ct,borderLeftWidth:ct,borderRadius:ct,radius:ct,borderTopLeftRadius:ct,borderTopRightRadius:ct,borderBottomRightRadius:ct,borderBottomLeftRadius:ct,width:ct,maxWidth:ct,height:ct,maxHeight:ct,top:ct,right:ct,bottom:ct,left:ct,padding:ct,paddingTop:ct,paddingRight:ct,paddingBottom:ct,paddingLeft:ct,margin:ct,marginTop:ct,marginRight:ct,marginBottom:ct,marginLeft:ct,backgroundPositionX:ct,backgroundPositionY:ct,...E2,zIndex:q0,fillOpacity:nl,strokeOpacity:nl,numOctaves:q0},R2={...xf,color:oe,backgroundColor:oe,outlineColor:oe,fill:oe,stroke:oe,borderColor:oe,borderTopColor:oe,borderRightColor:oe,borderBottomColor:oe,borderLeftColor:oe,filter:qc,WebkitFilter:qc},Ng=a=>R2[a];function kg(a,i){let l=Ng(a);return l!==qc&&(l=da),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const C2=new Set(["auto","none","0"]);function w2(a,i,l){let s=0,c;for(;s<a.length&&!c;){const d=a[s];typeof d=="string"&&!C2.has(d)&&al(d).values.length&&(c=a[s]),s++}if(c&&l)for(const d of i)a[d]=kg(l,c)}class z2 extends vf{constructor(i,l,s,c,d){super(i,l,s,c,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:s}=this;if(!l||!l.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let m=i[p];if(typeof m=="string"&&(m=m.trim(),cf(m))){const y=Cg(m,l.current);y!==void 0&&(i[p]=y),p===i.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!wg.has(s)||i.length!==2)return;const[c,d]=i,f=L0(c),g=L0(d);if(f!==g)if(U0(f)&&U0(g))for(let p=0;p<i.length;p++){const m=i[p];typeof m=="string"&&(i[p]=parseFloat(m))}else La[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,s=[];for(let c=0;c<i.length;c++)(i[c]===null||A2(i[c]))&&s.push(c);s.length&&w2(i,s,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=La[s](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const c=l[l.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const c=i.getValue(l);c&&c.jump(this.measuredOrigin,!1);const d=s.length-1,f=s[d];s[d]=La[l](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,p])=>{i.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function _2(a,i,l){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let s=document;const c=l?.[a]??s.querySelectorAll(a);return c?Array.from(c):[]}return Array.from(a)}const Vg=(a,i)=>i&&typeof a=="number"?i.transform(a):a;function Ug(a){return $p(a)&&"offsetHeight"in a}const P0=30,N2=a=>!isNaN(parseFloat(a));class k2{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const d=_e.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty();c&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=_e.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=N2(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new lf);const s=this.events[i].add(l);return i==="change"?()=>{s(),Yt.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i,l=!0){!l||!this.passiveEffect?this.updateAndNotify(i,l):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,l,s){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=_e.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>P0)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,P0);return tg(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Hi(a,i){return new k2(a,i)}const{schedule:Sf}=fg(queueMicrotask,!1),sn={x:!1,y:!1};function Bg(){return sn.x||sn.y}function V2(a){return a==="x"||a==="y"?sn[a]?null:(sn[a]=!0,()=>{sn[a]=!1}):sn.x||sn.y?null:(sn.x=sn.y=!0,()=>{sn.x=sn.y=!1})}function jg(a,i){const l=_2(a),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[l,c,()=>s.abort()]}function Y0(a){return!(a.pointerType==="touch"||Bg())}function U2(a,i,l={}){const[s,c,d]=jg(a,l),f=g=>{if(!Y0(g))return;const{target:p}=g,m=i(p,g);if(typeof m!="function"||!p)return;const y=b=>{Y0(b)&&(m(b),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,c)};return s.forEach(g=>{g.addEventListener("pointerenter",f,c)}),d}const Hg=(a,i)=>i?a===i?!0:Hg(a,i.parentElement):!1,Tf=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,B2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function j2(a){return B2.has(a.tagName)||a.tabIndex!==-1}const _r=new WeakSet;function X0(a){return i=>{i.key==="Enter"&&a(i)}}function xc(a,i){a.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const H2=(a,i)=>{const l=a.currentTarget;if(!l)return;const s=X0(()=>{if(_r.has(l))return;xc(l,"down");const c=X0(()=>{xc(l,"up")}),d=()=>xc(l,"cancel");l.addEventListener("keyup",c,i),l.addEventListener("blur",d,i)});l.addEventListener("keydown",s,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",s),i)};function G0(a){return Tf(a)&&!Bg()}function L2(a,i,l={}){const[s,c,d]=jg(a,l),f=g=>{const p=g.currentTarget;if(!G0(g))return;_r.add(p);const m=i(p,g),y=(w,M)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",x),_r.has(p)&&_r.delete(p),G0(w)&&typeof m=="function"&&m(w,{success:M})},b=w=>{y(w,p===window||p===document||l.useGlobalTarget||Hg(p,w.target))},x=w=>{y(w,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",x,c)};return s.forEach(g=>{(l.useGlobalTarget?window:g).addEventListener("pointerdown",f,c),Ug(g)&&(g.addEventListener("focus",m=>H2(m,c)),!j2(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),d}function Lg(a){return $p(a)&&"ownerSVGElement"in a}function q2(a){return Lg(a)&&a.tagName==="svg"}const Oe=a=>!!(a&&a.getVelocity),P2=[..._g,oe,da],Y2=a=>P2.find(zg(a)),Af=Z.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});class X2 extends Z.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(l&&i.isPresent&&!this.props.isPresent){const s=l.offsetParent,c=Ug(s)&&s.offsetWidth||0,d=this.props.sizeRef.current;d.height=l.offsetHeight||0,d.width=l.offsetWidth||0,d.top=l.offsetTop,d.left=l.offsetLeft,d.right=c-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function G2({children:a,isPresent:i,anchorX:l,root:s}){const c=Z.useId(),d=Z.useRef(null),f=Z.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:g}=Z.useContext(Af);return Z.useInsertionEffect(()=>{const{width:p,height:m,top:y,left:b,right:x}=f.current;if(i||!d.current||!p||!m)return;const w=l==="left"?`left: ${b}`:`right: ${x}`;d.current.dataset.motionPopId=c;const M=document.createElement("style");g&&(M.nonce=g);const D=s??document.head;return D.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${w}px !important;
            top: ${y}px !important;
          }
        `),()=>{D.removeChild(M),D.contains(M)&&D.removeChild(M)}},[i]),Y.jsx(X2,{isPresent:i,childRef:d,sizeRef:f,children:Z.cloneElement(a,{ref:d})})}const Z2=({children:a,initial:i,isPresent:l,onExitComplete:s,custom:c,presenceAffectsLayout:d,mode:f,anchorX:g,root:p})=>{const m=Ic(Q2),y=Z.useId();let b=!0,x=Z.useMemo(()=>(b=!1,{id:y,initial:i,isPresent:l,custom:c,onExitComplete:w=>{m.set(w,!0);for(const M of m.values())if(!M)return;s&&s()},register:w=>(m.set(w,!1),()=>m.delete(w))}),[l,m,s]);return d&&b&&(x={...x}),Z.useMemo(()=>{m.forEach((w,M)=>m.set(M,!1))},[l]),Z.useEffect(()=>{!l&&!m.size&&s&&s()},[l]),f==="popLayout"&&(a=Y.jsx(G2,{isPresent:l,anchorX:g,root:p,children:a})),Y.jsx(qr.Provider,{value:x,children:a})};function Q2(){return new Map}function qg(a=!0){const i=Z.useContext(qr);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:s,register:c}=i,d=Z.useId();Z.useEffect(()=>{if(a)return c(d)},[a]);const f=Z.useCallback(()=>a&&s&&s(d),[d,s,a]);return!l&&s?[!1,f]:[!0]}const Er=a=>a.key||"";function Z0(a){const i=[];return Z.Children.forEach(a,l=>{Z.isValidElement(l)&&i.push(l)}),i}const K2=({children:a,custom:i,initial:l=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:d="sync",propagate:f=!1,anchorX:g="left",root:p})=>{const[m,y]=qg(f),b=Z.useMemo(()=>Z0(a),[a]),x=f&&!m?[]:b.map(Er),w=Z.useRef(!0),M=Z.useRef(b),D=Ic(()=>new Map),[V,L]=Z.useState(b),[X,U]=Z.useState(b);Fp(()=>{w.current=!1,M.current=b;for(let W=0;W<X.length;W++){const tt=Er(X[W]);x.includes(tt)?D.delete(tt):D.get(tt)!==!0&&D.set(tt,!1)}},[X,x.length,x.join("-")]);const K=[];if(b!==V){let W=[...b];for(let tt=0;tt<X.length;tt++){const Q=X[tt],dt=Er(Q);x.includes(dt)||(W.splice(tt,0,Q),K.push(Q))}return d==="wait"&&K.length&&(W=K),U(Z0(W)),L(b),null}const{forceRender:q}=Z.useContext($c);return Y.jsx(Y.Fragment,{children:X.map(W=>{const tt=Er(W),Q=f&&!m?!1:b===X||x.includes(tt),dt=()=>{if(D.has(tt))D.set(tt,!0);else return;let St=!0;D.forEach(Xt=>{Xt||(St=!1)}),St&&(q?.(),U(M.current),f&&y?.(),s&&s())};return Y.jsx(Z2,{isPresent:Q,initial:!w.current||l?void 0:!1,custom:i,presenceAffectsLayout:c,mode:d,root:p,onExitComplete:Q?void 0:dt,anchorX:g,children:W},tt)})})},Pg=Z.createContext({strict:!1}),Q0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Li={};for(const a in Q0)Li[a]={isEnabled:i=>Q0[a].some(l=>!!i[l])};function J2(a){for(const i in a)Li[i]={...Li[i],...a[i]}}const F2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function jr(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||F2.has(a)}let Yg=a=>!jr(a);function W2(a){typeof a=="function"&&(Yg=i=>i.startsWith("on")?!jr(i):a(i))}try{W2(require("@emotion/is-prop-valid").default)}catch{}function $2(a,i,l){const s={};for(const c in a)c==="values"&&typeof a.values=="object"||(Yg(c)||l===!0&&jr(c)||!i&&!jr(c)||a.draggable&&c.startsWith("onDrag"))&&(s[c]=a[c]);return s}const Pr=Z.createContext({});function Yr(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function il(a){return typeof a=="string"||Array.isArray(a)}const Of=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Df=["initial",...Of];function Xr(a){return Yr(a.animate)||Df.some(i=>il(a[i]))}function Xg(a){return!!(Xr(a)||a.variants)}function I2(a,i){if(Xr(a)){const{initial:l,animate:s}=a;return{initial:l===!1||il(l)?l:void 0,animate:il(s)?s:void 0}}return a.inherit!==!1?i:{}}function tx(a){const{initial:i,animate:l}=I2(a,Z.useContext(Pr));return Z.useMemo(()=>({initial:i,animate:l}),[K0(i),K0(l)])}function K0(a){return Array.isArray(a)?a.join(" "):a}const ol={};function ex(a){for(const i in a)ol[i]=a[i],uf(i)&&(ol[i].isCSSVariable=!0)}function Gg(a,{layout:i,layoutId:l}){return Yi.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!ol[a]||a==="opacity")}const nx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ax=Pi.length;function ix(a,i,l){let s="",c=!0;for(let d=0;d<ax;d++){const f=Pi[d],g=a[f];if(g===void 0)continue;let p=!0;if(typeof g=="number"?p=g===(f.startsWith("scale")?1:0):p=parseFloat(g)===0,!p||l){const m=Vg(g,xf[f]);if(!p){c=!1;const y=nx[f]||f;s+=`${y}(${m}) `}l&&(i[f]=m)}}return s=s.trim(),l?s=l(i,c?"":s):c&&(s="none"),s}function Mf(a,i,l){const{style:s,vars:c,transformOrigin:d}=a;let f=!1,g=!1;for(const p in i){const m=i[p];if(Yi.has(p)){f=!0;continue}else if(uf(p)){c[p]=m;continue}else{const y=Vg(m,xf[p]);p.startsWith("origin")?(g=!0,d[p]=y):s[p]=y}}if(i.transform||(f||l?s.transform=ix(i,a.transform,l):s.transform&&(s.transform="none")),g){const{originX:p="50%",originY:m="50%",originZ:y=0}=d;s.transformOrigin=`${p} ${m} ${y}`}}const Ef=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Zg(a,i,l){for(const s in i)!Oe(i[s])&&!Gg(s,l)&&(a[s]=i[s])}function ox({transformTemplate:a},i){return Z.useMemo(()=>{const l=Ef();return Mf(l,i,a),Object.assign({},l.vars,l.style)},[i])}function lx(a,i){const l=a.style||{},s={};return Zg(s,l,a),Object.assign(s,ox(a,i)),s}function rx(a,i){const l={},s=lx(a,i);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=s,l}const sx={offset:"stroke-dashoffset",array:"stroke-dasharray"},ux={offset:"strokeDashoffset",array:"strokeDasharray"};function cx(a,i,l=1,s=0,c=!0){a.pathLength=1;const d=c?sx:ux;a[d.offset]=ct.transform(-s);const f=ct.transform(i),g=ct.transform(l);a[d.array]=`${f} ${g}`}function Qg(a,{attrX:i,attrY:l,attrScale:s,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...g},p,m,y){if(Mf(a,g,m),p){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:b,style:x}=a;b.transform&&(x.transform=b.transform,delete b.transform),(x.transform||b.transformOrigin)&&(x.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),x.transform&&(x.transformBox=y?.transformBox??"fill-box",delete b.transformBox),i!==void 0&&(b.x=i),l!==void 0&&(b.y=l),s!==void 0&&(b.scale=s),c!==void 0&&cx(b,c,d,f,!1)}const Kg=()=>({...Ef(),attrs:{}}),Jg=a=>typeof a=="string"&&a.toLowerCase()==="svg";function fx(a,i,l,s){const c=Z.useMemo(()=>{const d=Kg();return Qg(d,i,Jg(s),a.transformTemplate,a.style),{...d.attrs,style:{...d.style}}},[i]);if(a.style){const d={};Zg(d,a.style,a),c.style={...d,...c.style}}return c}const dx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rf(a){return typeof a!="string"||a.includes("-")?!1:!!(dx.indexOf(a)>-1||/[A-Z]/u.test(a))}function hx(a,i,l,{latestValues:s},c,d=!1){const g=(Rf(a)?fx:rx)(i,s,c,a),p=$2(i,typeof a=="string",d),m=a!==Z.Fragment?{...p,...g,ref:l}:{},{children:y}=i,b=Z.useMemo(()=>Oe(y)?y.get():y,[y]);return Z.createElement(a,{...m,children:b})}function J0(a){const i=[{},{}];return a?.values.forEach((l,s)=>{i[0][s]=l.get(),i[1][s]=l.getVelocity()}),i}function Cf(a,i,l,s){if(typeof i=="function"){const[c,d]=J0(s);i=i(l!==void 0?l:a.custom,c,d)}if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){const[c,d]=J0(s);i=i(l!==void 0?l:a.custom,c,d)}return i}function Nr(a){return Oe(a)?a.get():a}function mx({scrapeMotionValuesFromProps:a,createRenderState:i},l,s,c){return{latestValues:px(l,s,c,a),renderState:i()}}function px(a,i,l,s){const c={},d=s(a,{});for(const x in d)c[x]=Nr(d[x]);let{initial:f,animate:g}=a;const p=Xr(a),m=Xg(a);i&&m&&!p&&a.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=l?l.initial===!1:!1;y=y||f===!1;const b=y?g:f;if(b&&typeof b!="boolean"&&!Yr(b)){const x=Array.isArray(b)?b:[b];for(let w=0;w<x.length;w++){const M=Cf(a,x[w]);if(M){const{transitionEnd:D,transition:V,...L}=M;for(const X in L){let U=L[X];if(Array.isArray(U)){const K=y?U.length-1:0;U=U[K]}U!==null&&(c[X]=U)}for(const X in D)c[X]=D[X]}}}return c}const Fg=a=>(i,l)=>{const s=Z.useContext(Pr),c=Z.useContext(qr),d=()=>mx(a,i,s,c);return l?d():Ic(d)};function wf(a,i,l){const{style:s}=a,c={};for(const d in s)(Oe(s[d])||i.style&&Oe(i.style[d])||Gg(d,a)||l?.getValue(d)?.liveStyle!==void 0)&&(c[d]=s[d]);return c}const gx=Fg({scrapeMotionValuesFromProps:wf,createRenderState:Ef});function Wg(a,i,l){const s=wf(a,i,l);for(const c in a)if(Oe(a[c])||Oe(i[c])){const d=Pi.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[d]=a[c]}return s}const yx=Fg({scrapeMotionValuesFromProps:Wg,createRenderState:Kg}),vx=Symbol.for("motionComponentSymbol");function Vi(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function bx(a,i,l){return Z.useCallback(s=>{s&&a.onMount&&a.onMount(s),i&&(s?i.mount(s):i.unmount()),l&&(typeof l=="function"?l(s):Vi(l)&&(l.current=s))},[i])}const zf=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),xx="framerAppearId",$g="data-"+zf(xx),Ig=Z.createContext({});function Sx(a,i,l,s,c){const{visualElement:d}=Z.useContext(Pr),f=Z.useContext(Pg),g=Z.useContext(qr),p=Z.useContext(Af).reducedMotion,m=Z.useRef(null);s=s||f.renderer,!m.current&&s&&(m.current=s(a,{visualState:i,parent:d,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:p}));const y=m.current,b=Z.useContext(Ig);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&Tx(m.current,l,c,b);const x=Z.useRef(!1);Z.useInsertionEffect(()=>{y&&x.current&&y.update(l,g)});const w=l[$g],M=Z.useRef(!!w&&!window.MotionHandoffIsComplete?.(w)&&window.MotionHasOptimisedAnimation?.(w));return Fp(()=>{y&&(x.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),M.current&&y.animationState&&y.animationState.animateChanges())}),Z.useEffect(()=>{y&&(!M.current&&y.animationState&&y.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(w)}),M.current=!1))}),y}function Tx(a,i,l,s){const{layoutId:c,layout:d,drag:f,dragConstraints:g,layoutScroll:p,layoutRoot:m,layoutCrossfade:y}=i;a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:ty(a.parent)),a.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!f||g&&Vi(g),visualElement:a,animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:p,layoutRoot:m})}function ty(a){if(a)return a.options.allowProjection!==!1?a.projection:ty(a.parent)}function Sc(a,{forwardMotionProps:i=!1}={},l,s){l&&J2(l);const c=Rf(a)?yx:gx;function d(g,p){let m;const y={...Z.useContext(Af),...g,layoutId:Ax(g)},{isStatic:b}=y,x=tx(g),w=c(g,b);if(!b&&tf){Ox();const M=Dx(y);m=M.MeasureLayout,x.visualElement=Sx(a,w,y,s,M.ProjectionNode)}return Y.jsxs(Pr.Provider,{value:x,children:[m&&x.visualElement?Y.jsx(m,{visualElement:x.visualElement,...y}):null,hx(a,g,bx(w,x.visualElement,p),w,b,i)]})}d.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const f=Z.forwardRef(d);return f[vx]=a,f}function Ax({layoutId:a}){const i=Z.useContext($c).id;return i&&a!==void 0?i+"-"+a:a}function Ox(a,i){Z.useContext(Pg).strict}function Dx(a){const{drag:i,layout:l}=Li;if(!i&&!l)return{};const s={...i,...l};return{MeasureLayout:i?.isEnabled(a)||l?.isEnabled(a)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function Mx(a,i){if(typeof Proxy>"u")return Sc;const l=new Map,s=(d,f)=>Sc(d,f,a,i),c=(d,f)=>s(d,f);return new Proxy(c,{get:(d,f)=>f==="create"?s:(l.has(f)||l.set(f,Sc(f,void 0,a,i)),l.get(f))})}function ey({top:a,left:i,right:l,bottom:s}){return{x:{min:i,max:l},y:{min:a,max:s}}}function Ex({x:a,y:i}){return{top:i.min,right:a.max,bottom:i.max,left:a.min}}function Rx(a,i){if(!i)return a;const l=i({x:a.left,y:a.top}),s=i({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:s.y,right:s.x}}function Tc(a){return a===void 0||a===1}function Pc({scale:a,scaleX:i,scaleY:l}){return!Tc(a)||!Tc(i)||!Tc(l)}function Ba(a){return Pc(a)||ny(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function ny(a){return F0(a.x)||F0(a.y)}function F0(a){return a&&a!=="0%"}function Hr(a,i,l){const s=a-l,c=i*s;return l+c}function W0(a,i,l,s,c){return c!==void 0&&(a=Hr(a,c,s)),Hr(a,l,s)+i}function Yc(a,i=0,l=1,s,c){a.min=W0(a.min,i,l,s,c),a.max=W0(a.max,i,l,s,c)}function ay(a,{x:i,y:l}){Yc(a.x,i.translate,i.scale,i.originPoint),Yc(a.y,l.translate,l.scale,l.originPoint)}const $0=.999999999999,I0=1.0000000000001;function Cx(a,i,l,s=!1){const c=l.length;if(!c)return;i.x=i.y=1;let d,f;for(let g=0;g<c;g++){d=l[g],f=d.projectionDelta;const{visualElement:p}=d.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Bi(a,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,ay(a,f)),s&&Ba(d.latestValues)&&Bi(a,d.latestValues))}i.x<I0&&i.x>$0&&(i.x=1),i.y<I0&&i.y>$0&&(i.y=1)}function Ui(a,i){a.min=a.min+i,a.max=a.max+i}function tp(a,i,l,s,c=.5){const d=Zt(a.min,a.max,c);Yc(a,i,l,d,s)}function Bi(a,i){tp(a.x,i.x,i.scaleX,i.scale,i.originX),tp(a.y,i.y,i.scaleY,i.scale,i.originY)}function iy(a,i){return ey(Rx(a.getBoundingClientRect(),i))}function wx(a,i,l){const s=iy(a,l),{scroll:c}=i;return c&&(Ui(s.x,c.offset.x),Ui(s.y,c.offset.y)),s}const ep=()=>({translate:0,scale:1,origin:0,originPoint:0}),ji=()=>({x:ep(),y:ep()}),np=()=>({min:0,max:0}),te=()=>({x:np(),y:np()}),Xc={current:null},oy={current:!1};function zx(){if(oy.current=!0,!!tf)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>Xc.current=a.matches;a.addEventListener("change",i),i()}else Xc.current=!1}const _x=new WeakMap;function Nx(a,i,l){for(const s in i){const c=i[s],d=l[s];if(Oe(c))a.addValue(s,c);else if(Oe(d))a.addValue(s,Hi(c,{owner:a}));else if(d!==c)if(a.hasValue(s)){const f=a.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=a.getStaticValue(s);a.addValue(s,Hi(f!==void 0?f:c,{owner:a}))}}for(const s in l)i[s]===void 0&&a.removeValue(s);return i}const ap=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class kx{scrapeMotionValuesFromProps(i,l,s){return{}}constructor({parent:i,props:l,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:d,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=vf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=_e.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Yt.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=f;this.latestValues=p,this.baseTarget={...p},this.initialValues=l.initial?{...p}:{},this.renderState=m,this.parent=i,this.props=l,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!d,this.isControllingVariants=Xr(l),this.isVariantNode=Xg(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(l,{},this);for(const x in b){const w=b[x];p[x]!==void 0&&Oe(w)&&w.set(p[x],!1)}}mount(i){this.current=i,_x.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,s)=>this.bindToMotionValue(s,l)),oy.current||zx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),fa(this.notifyUpdate),fa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=Yi.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=l.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&Yt.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),d=l.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{c(),d(),f&&f(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Li){const l=Li[i];if(!l)continue;const{isEnabled:s,Feature:c}=l;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):te()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let s=0;s<ap.length;s++){const c=ap[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const d="on"+c,f=i[d];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=Nx(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const s=this.values.get(i);l!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&l!==void 0&&(s=Hi(l===null?void 0:l,{owner:this}),this.addValue(i,s)),s}readValue(i,l){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(Wp(s)||Ip(s))?s=parseFloat(s):!Y2(s)&&da.test(l)&&(s=kg(i,l)),this.setBaseTarget(i,Oe(s)?s.get():s)),Oe(s)?s.get():s}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let s;if(typeof l=="string"||typeof l=="object"){const d=Cf(this.props,l,this.presenceContext?.custom);d&&(s=d[i])}if(l&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!Oe(c)?c:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new lf),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){Sf.render(this.render)}}class ly extends kx{constructor(){super(...arguments),this.KeyframeResolver=z2}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:s}){delete l[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Oe(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function ry(a,{style:i,vars:l},s,c){const d=a.style;let f;for(f in i)d[f]=i[f];c?.applyProjectionStyles(d,s);for(f in l)d.setProperty(f,l[f])}function Vx(a){return window.getComputedStyle(a)}class Ux extends ly{constructor(){super(...arguments),this.type="html",this.renderInstance=ry}readValueFromInstance(i,l){if(Yi.has(l))return this.projection?.isProjecting?Uc(l):F1(i,l);{const s=Vx(i),c=(uf(l)?s.getPropertyValue(l):s[l])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:l}){return iy(i,l)}build(i,l,s){Mf(i,l,s.transformTemplate)}scrapeMotionValuesFromProps(i,l,s){return wf(i,l,s)}}const sy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bx(a,i,l,s){ry(a,i,void 0,s);for(const c in i.attrs)a.setAttribute(sy.has(c)?c:zf(c),i.attrs[c])}class jx extends ly{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=te}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(Yi.has(l)){const s=Ng(l);return s&&s.default||0}return l=sy.has(l)?l:zf(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,s){return Wg(i,l,s)}build(i,l,s){Qg(i,l,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,l,s,c){Bx(i,l,s,c)}mount(i){this.isSVGTag=Jg(i.tagName),super.mount(i)}}const Hx=(a,i)=>Rf(a)?new jx(i):new Ux(i,{allowProjection:a!==Z.Fragment});function ll(a,i,l){const s=a.getProps();return Cf(s,i,l!==void 0?l:s.custom,a)}const Gc=a=>Array.isArray(a);function Lx(a,i,l){a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,Hi(l))}function qx(a){return Gc(a)?a[a.length-1]||0:a}function Px(a,i){const l=ll(a,i);let{transitionEnd:s={},transition:c={},...d}=l||{};d={...d,...s};for(const f in d){const g=qx(d[f]);Lx(a,f,g)}}function Yx(a){return!!(Oe(a)&&a.add)}function Zc(a,i){const l=a.getValue("willChange");if(Yx(l))return l.add(i);if(!l&&Hn.WillChange){const s=new Hn.WillChange("auto");a.addValue("willChange",s),s.add(i)}}function uy(a){return a.props[$g]}const Xx=a=>a!==null;function Gx(a,{repeat:i,repeatType:l="loop"},s){const c=a.filter(Xx),d=i&&l!=="loop"&&i%2===1?0:c.length-1;return c[d]}const Zx={type:"spring",stiffness:500,damping:25,restSpeed:10},Qx=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),Kx={type:"keyframes",duration:.8},Jx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Fx=(a,{keyframes:i})=>i.length>2?Kx:Yi.has(a)?a.startsWith("scale")?Qx(i[1]):Zx:Jx;function Wx({when:a,delay:i,delayChildren:l,staggerChildren:s,staggerDirection:c,repeat:d,repeatType:f,repeatDelay:g,from:p,elapsed:m,...y}){return!!Object.keys(y).length}const _f=(a,i,l,s={},c,d)=>f=>{const g=bf(s,a)||{},p=g.delay||s.delay||0;let{elapsed:m=0}=s;m=m-gn(p);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-m,onUpdate:x=>{i.set(x),g.onUpdate&&g.onUpdate(x)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:a,motionValue:i,element:d?void 0:c};Wx(g)||Object.assign(y,Fx(a,y)),y.duration&&(y.duration=gn(y.duration)),y.repeatDelay&&(y.repeatDelay=gn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),(Hn.instantAnimations||Hn.skipAnimations)&&(b=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,b&&!d&&i.get()!==void 0){const x=Gx(y.keyframes,g);if(x!==void 0){Yt.update(()=>{y.onUpdate(x),y.onComplete()});return}}return g.isSync?new yf(y):new b2(y)};function $x({protectedKeys:a,needsAnimating:i},l){const s=a.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,s}function cy(a,i,{delay:l=0,transitionOverride:s,type:c}={}){let{transition:d=a.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(d=s);const p=[],m=c&&a.animationState&&a.animationState.getState()[c];for(const y in g){const b=a.getValue(y,a.latestValues[y]??null),x=g[y];if(x===void 0||m&&$x(m,y))continue;const w={delay:l,...bf(d||{},y)},M=b.get();if(M!==void 0&&!b.isAnimating&&!Array.isArray(x)&&x===M&&!w.velocity)continue;let D=!1;if(window.MotionHandoffAnimation){const L=uy(a);if(L){const X=window.MotionHandoffAnimation(L,y,Yt);X!==null&&(w.startTime=X,D=!0)}}Zc(a,y),b.start(_f(y,b,x,a.shouldReduceMotion&&wg.has(y)?{type:!1}:w,a,D));const V=b.animation;V&&p.push(V)}return f&&Promise.all(p).then(()=>{Yt.update(()=>{f&&Px(a,f)})}),p}function Qc(a,i,l={}){const s=ll(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:c=a.getDefaultTransition()||{}}=s||{};l.transitionOverride&&(c=l.transitionOverride);const d=s?()=>Promise.all(cy(a,s,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:b}=c;return Ix(a,i,p,m,y,b,l)}:()=>Promise.resolve(),{when:g}=c;if(g){const[p,m]=g==="beforeChildren"?[d,f]:[f,d];return p().then(()=>m())}else return Promise.all([d(),f(l.delay)])}function Ix(a,i,l=0,s=0,c=0,d=1,f){const g=[],p=a.variantChildren.size,m=(p-1)*c,y=typeof s=="function",b=y?x=>s(x,p):d===1?(x=0)=>x*c:(x=0)=>m-x*c;return Array.from(a.variantChildren).sort(t5).forEach((x,w)=>{x.notify("AnimationStart",i),g.push(Qc(x,i,{...f,delay:l+(y?0:s)+b(w)}).then(()=>x.notify("AnimationComplete",i)))}),Promise.all(g)}function t5(a,i){return a.sortNodePosition(i)}function e5(a,i,l={}){a.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(d=>Qc(a,d,l));s=Promise.all(c)}else if(typeof i=="string")s=Qc(a,i,l);else{const c=typeof i=="function"?ll(a,i,l.custom):i;s=Promise.all(cy(a,c,l))}return s.then(()=>{a.notify("AnimationComplete",i)})}function fy(a,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==a.length)return!1;for(let s=0;s<l;s++)if(i[s]!==a[s])return!1;return!0}const n5=Df.length;function dy(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?dy(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const i={};for(let l=0;l<n5;l++){const s=Df[l],c=a.props[s];(il(c)||c===!1)&&(i[s]=c)}return i}const a5=[...Of].reverse(),i5=Of.length;function o5(a){return i=>Promise.all(i.map(({animation:l,options:s})=>e5(a,l,s)))}function l5(a){let i=o5(a),l=ip(),s=!0;const c=p=>(m,y)=>{const b=ll(a,y,p==="exit"?a.presenceContext?.custom:void 0);if(b){const{transition:x,transitionEnd:w,...M}=b;m={...m,...M,...w}}return m};function d(p){i=p(a)}function f(p){const{props:m}=a,y=dy(a.parent)||{},b=[],x=new Set;let w={},M=1/0;for(let V=0;V<i5;V++){const L=a5[V],X=l[L],U=m[L]!==void 0?m[L]:y[L],K=il(U),q=L===p?X.isActive:null;q===!1&&(M=V);let W=U===y[L]&&U!==m[L]&&K;if(W&&s&&a.manuallyAnimateOnMount&&(W=!1),X.protectedKeys={...w},!X.isActive&&q===null||!U&&!X.prevProp||Yr(U)||typeof U=="boolean")continue;const tt=r5(X.prevProp,U);let Q=tt||L===p&&X.isActive&&!W&&K||V>M&&K,dt=!1;const St=Array.isArray(U)?U:[U];let Xt=St.reduce(c(L),{});q===!1&&(Xt={});const{prevResolvedValues:Qt={}}=X,Pe={...Qt,...Xt},Ne=G=>{Q=!0,x.has(G)&&(dt=!0,x.delete(G)),X.needsAnimating[G]=!0;const I=a.getValue(G);I&&(I.liveStyle=!1)};for(const G in Pe){const I=Xt[G],Ot=Qt[G];if(w.hasOwnProperty(G))continue;let T=!1;Gc(I)&&Gc(Ot)?T=!fy(I,Ot):T=I!==Ot,T?I!=null?Ne(G):x.add(G):I!==void 0&&x.has(G)?Ne(G):X.protectedKeys[G]=!0}X.prevProp=U,X.prevResolvedValues=Xt,X.isActive&&(w={...w,...Xt}),s&&a.blockInitialAnimation&&(Q=!1),Q&&(!(W&&tt)||dt)&&b.push(...St.map(G=>({animation:G,options:{type:L}})))}if(x.size){const V={};if(typeof m.initial!="boolean"){const L=ll(a,Array.isArray(m.initial)?m.initial[0]:m.initial);L&&L.transition&&(V.transition=L.transition)}x.forEach(L=>{const X=a.getBaseTarget(L),U=a.getValue(L);U&&(U.liveStyle=!0),V[L]=X??null}),b.push({animation:V})}let D=!!b.length;return s&&(m.initial===!1||m.initial===m.animate)&&!a.manuallyAnimateOnMount&&(D=!1),s=!1,D?i(b):Promise.resolve()}function g(p,m){if(l[p].isActive===m)return Promise.resolve();a.variantChildren?.forEach(b=>b.animationState?.setActive(p,m)),l[p].isActive=m;const y=f(p);for(const b in l)l[b].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:d,getState:()=>l,reset:()=>{l=ip(),s=!0}}}function r5(a,i){return typeof i=="string"?i!==a:Array.isArray(i)?!fy(i,a):!1}function Ua(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ip(){return{animate:Ua(!0),whileInView:Ua(),whileHover:Ua(),whileTap:Ua(),whileDrag:Ua(),whileFocus:Ua(),exit:Ua()}}class ha{constructor(i){this.isMounted=!1,this.node=i}update(){}}class s5 extends ha{constructor(i){super(i),i.animationState||(i.animationState=l5(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Yr(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let u5=0;class c5 extends ha{constructor(){super(...arguments),this.id=u5++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);l&&!i&&c.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const f5={animation:{Feature:s5},exit:{Feature:c5}};function rl(a,i,l,s={passive:!0}){return a.addEventListener(i,l,s),()=>a.removeEventListener(i,l)}function fl(a){return{point:{x:a.pageX,y:a.pageY}}}const d5=a=>i=>Tf(i)&&a(i,fl(i));function $o(a,i,l,s){return rl(a,i,d5(l),s)}const hy=1e-4,h5=1-hy,m5=1+hy,my=.01,p5=0-my,g5=0+my;function Ee(a){return a.max-a.min}function y5(a,i,l){return Math.abs(a-i)<=l}function op(a,i,l,s=.5){a.origin=s,a.originPoint=Zt(i.min,i.max,a.origin),a.scale=Ee(l)/Ee(i),a.translate=Zt(l.min,l.max,a.origin)-a.originPoint,(a.scale>=h5&&a.scale<=m5||isNaN(a.scale))&&(a.scale=1),(a.translate>=p5&&a.translate<=g5||isNaN(a.translate))&&(a.translate=0)}function Io(a,i,l,s){op(a.x,i.x,l.x,s?s.originX:void 0),op(a.y,i.y,l.y,s?s.originY:void 0)}function lp(a,i,l){a.min=l.min+i.min,a.max=a.min+Ee(i)}function v5(a,i,l){lp(a.x,i.x,l.x),lp(a.y,i.y,l.y)}function rp(a,i,l){a.min=i.min-l.min,a.max=a.min+Ee(i)}function tl(a,i,l){rp(a.x,i.x,l.x),rp(a.y,i.y,l.y)}function tn(a){return[a("x"),a("y")]}const py=({current:a})=>a?a.ownerDocument.defaultView:null,sp=(a,i)=>Math.abs(a-i);function b5(a,i){const l=sp(a.x,i.x),s=sp(a.y,i.y);return Math.sqrt(l**2+s**2)}class gy{constructor(i,l,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Oc(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,M=b5(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!M)return;const{point:D}=x,{timestamp:V}=ye;this.history.push({...D,timestamp:V});const{onStart:L,onMove:X}=this.handlers;w||(L&&L(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),X&&X(this.lastMoveEvent,x)},this.handlePointerMove=(x,w)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Ac(w,this.transformPagePoint),Yt.update(this.updatePoint,!0)},this.handlePointerUp=(x,w)=>{this.end();const{onEnd:M,onSessionEnd:D,resumeAnimation:V}=this.handlers;if(this.dragSnapToOrigin&&V&&V(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=Oc(x.type==="pointercancel"?this.lastMoveEventInfo:Ac(w,this.transformPagePoint),this.history);this.startEvent&&M&&M(x,L),D&&D(x,L)},!Tf(i))return;this.dragSnapToOrigin=d,this.handlers=l,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=c||window;const g=fl(i),p=Ac(g,this.transformPagePoint),{point:m}=p,{timestamp:y}=ye;this.history=[{...m,timestamp:y}];const{onSessionStart:b}=l;b&&b(i,Oc(p,this.history)),this.removeListeners=sl($o(this.contextWindow,"pointermove",this.handlePointerMove),$o(this.contextWindow,"pointerup",this.handlePointerUp),$o(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),fa(this.updatePoint)}}function Ac(a,i){return i?{point:i(a.point)}:a}function up(a,i){return{x:a.x-i.x,y:a.y-i.y}}function Oc({point:a},i){return{point:a,delta:up(a,yy(i)),offset:up(a,x5(i)),velocity:S5(i,.1)}}function x5(a){return a[0]}function yy(a){return a[a.length-1]}function S5(a,i){if(a.length<2)return{x:0,y:0};let l=a.length-1,s=null;const c=yy(a);for(;l>=0&&(s=a[l],!(c.timestamp-s.timestamp>gn(i)));)l--;if(!s)return{x:0,y:0};const d=yn(c.timestamp-s.timestamp);if(d===0)return{x:0,y:0};const f={x:(c.x-s.x)/d,y:(c.y-s.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function T5(a,{min:i,max:l},s){return i!==void 0&&a<i?a=s?Zt(i,a,s.min):Math.max(a,i):l!==void 0&&a>l&&(a=s?Zt(l,a,s.max):Math.min(a,l)),a}function cp(a,i,l){return{min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function A5(a,{top:i,left:l,bottom:s,right:c}){return{x:cp(a.x,l,c),y:cp(a.y,i,s)}}function fp(a,i){let l=i.min-a.min,s=i.max-a.max;return i.max-i.min<a.max-a.min&&([l,s]=[s,l]),{min:l,max:s}}function O5(a,i){return{x:fp(a.x,i.x),y:fp(a.y,i.y)}}function D5(a,i){let l=.5;const s=Ee(a),c=Ee(i);return c>s?l=el(i.min,i.max-s,a.min):s>c&&(l=el(a.min,a.max-c,i.min)),jn(0,1,l)}function M5(a,i){const l={};return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l}const Kc=.35;function E5(a=Kc){return a===!1?a=0:a===!0&&(a=Kc),{x:dp(a,"left","right"),y:dp(a,"top","bottom")}}function dp(a,i,l){return{min:hp(a,i),max:hp(a,l)}}function hp(a,i){return typeof a=="number"?a:a[i]||0}const R5=new WeakMap;class C5{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=te(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const d=b=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(fl(b).point)},f=(b,x)=>{const{drag:w,dragPropagation:M,onDragStart:D}=this.getProps();if(w&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=V2(w),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tn(L=>{let X=this.getAxisMotionValue(L).get()||0;if(vn.test(X)){const{projection:U}=this.visualElement;if(U&&U.layout){const K=U.layout.layoutBox[L];K&&(X=Ee(K)*(parseFloat(X)/100))}}this.originPoint[L]=X}),D&&Yt.postRender(()=>D(b,x)),Zc(this.visualElement,"transform");const{animationState:V}=this.visualElement;V&&V.setActive("whileDrag",!0)},g=(b,x)=>{this.latestPointerEvent=b,this.latestPanInfo=x;const{dragPropagation:w,dragDirectionLock:M,onDirectionLock:D,onDrag:V}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:L}=x;if(M&&this.currentDirection===null){this.currentDirection=w5(L),this.currentDirection!==null&&D&&D(this.currentDirection);return}this.updateAxis("x",x.point,L),this.updateAxis("y",x.point,L),this.visualElement.render(),V&&V(b,x)},p=(b,x)=>{this.latestPointerEvent=b,this.latestPanInfo=x,this.stop(b,x),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>tn(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new gy(i,{onSessionStart:d,onStart:f,onMove:g,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:py(this.visualElement)})}stop(i,l){const s=i||this.latestPointerEvent,c=l||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!c||!s)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:g}=this.getProps();g&&Yt.postRender(()=>g(s,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,s){const{drag:c}=this.getProps();if(!s||!Rr(i,c,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=T5(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&Vi(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=A5(s.layoutBox,i):this.constraints=!1,this.elastic=E5(l),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&tn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=M5(s.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!Vi(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const d=wx(s,c.root,this.visualElement.getTransformPagePoint());let f=O5(c.layout.layoutBox,d);if(l){const g=l(Ex(f));this.hasMutatedConstraints=!!g,g&&(f=ey(g))}return f}startAnimation(i){const{drag:l,dragMomentum:s,dragElastic:c,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),p=this.constraints||{},m=tn(y=>{if(!Rr(y,l,this.currentDirection))return;let b=p&&p[y]||{};f&&(b={min:0,max:0});const x=c?200:1e6,w=c?40:1e7,M={type:"inertia",velocity:s?i[y]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...d,...b};return this.startAxisValueAnimation(y,M)});return Promise.all(m).then(g)}startAxisValueAnimation(i,l){const s=this.getAxisMotionValue(i);return Zc(this.visualElement,i),s.start(_f(i,s,0,l,this.visualElement,!1))}stopAnimation(){tn(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){tn(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[l];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){tn(l=>{const{drag:s}=this.getProps();if(!Rr(l,s,this.currentDirection))return;const{projection:c}=this.visualElement,d=this.getAxisMotionValue(l);if(c&&c.layout){const{min:f,max:g}=c.layout.layoutBox[l];d.set(i[l]-Zt(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:s}=this.visualElement;if(!Vi(l)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};tn(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const p=g.get();c[f]=D5({min:p,max:p},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),tn(f=>{if(!Rr(f,i,null))return;const g=this.getAxisMotionValue(f),{min:p,max:m}=this.constraints[f];g.set(Zt(p,m,c[f]))})}addListeners(){if(!this.visualElement.current)return;R5.set(this.visualElement,this);const i=this.visualElement.current,l=$o(i,"pointerdown",p=>{const{drag:m,dragListener:y=!0}=this.getProps();m&&y&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();Vi(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,d=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Yt.read(s);const f=rl(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(tn(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=p[y].translate,b.set(b.get()+p[y].translate))}),this.visualElement.render())});return()=>{f(),l(),d(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:d=!1,dragElastic:f=Kc,dragMomentum:g=!0}=i;return{...i,drag:l,dragDirectionLock:s,dragPropagation:c,dragConstraints:d,dragElastic:f,dragMomentum:g}}}function Rr(a,i,l){return(i===!0||i===a)&&(l===null||l===a)}function w5(a,i=10){let l=null;return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l}class z5 extends ha{constructor(i){super(i),this.removeGroupControls=nn,this.removeListeners=nn,this.controls=new C5(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||nn}unmount(){this.removeGroupControls(),this.removeListeners()}}const mp=a=>(i,l)=>{a&&Yt.postRender(()=>a(i,l))};class _5 extends ha{constructor(){super(...arguments),this.removePointerDownListener=nn}onPointerDown(i){this.session=new gy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:py(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:mp(i),onStart:mp(l),onMove:s,onEnd:(d,f)=>{delete this.session,c&&Yt.postRender(()=>c(d,f))}}}mount(){this.removePointerDownListener=$o(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const kr={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function pp(a,i){return i.max===i.min?0:a/(i.max-i.min)*100}const Qo={correct:(a,i)=>{if(!i.target)return a;if(typeof a=="string")if(ct.test(a))a=parseFloat(a);else return a;const l=pp(a,i.target.x),s=pp(a,i.target.y);return`${l}% ${s}%`}},N5={correct:(a,{treeScale:i,projectionDelta:l})=>{const s=a,c=da.parse(a);if(c.length>5)return s;const d=da.createTransformer(a),f=typeof c[0]!="number"?1:0,g=l.x.scale*i.x,p=l.y.scale*i.y;c[0+f]/=g,c[1+f]/=p;const m=Zt(g,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=m),typeof c[3+f]=="number"&&(c[3+f]/=m),d(c)}};let gp=!1;class k5 extends Z.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s,layoutId:c}=this.props,{projection:d}=i;ex(V5),d&&(l.group&&l.group.add(d),s&&s.register&&c&&s.register(d),gp&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),kr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:s,drag:c,isPresent:d}=this.props,{projection:f}=s;return f&&(f.isPresent=d,gp=!0,c||i.layoutDependency!==l||l===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||Yt.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Sf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function vy(a){const[i,l]=qg(),s=Z.useContext($c);return Y.jsx(k5,{...a,layoutGroup:s,switchLayoutGroup:Z.useContext(Ig),isPresent:i,safeToRemove:l})}const V5={borderRadius:{...Qo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qo,borderTopRightRadius:Qo,borderBottomLeftRadius:Qo,borderBottomRightRadius:Qo,boxShadow:N5};function U5(a,i,l){const s=Oe(a)?a:Hi(a);return s.start(_f("",s,i,l)),s.animation}const B5=(a,i)=>a.depth-i.depth;class j5{constructor(){this.children=[],this.isDirty=!1}add(i){ef(this.children,i),this.isDirty=!0}remove(i){nf(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(B5),this.isDirty=!1,this.children.forEach(i)}}function H5(a,i){const l=_e.now(),s=({timestamp:c})=>{const d=c-l;d>=i&&(fa(s),a(d-i))};return Yt.setup(s,!0),()=>fa(s)}const by=["TopLeft","TopRight","BottomLeft","BottomRight"],L5=by.length,yp=a=>typeof a=="string"?parseFloat(a):a,vp=a=>typeof a=="number"||ct.test(a);function q5(a,i,l,s,c,d){c?(a.opacity=Zt(0,l.opacity??1,P5(s)),a.opacityExit=Zt(i.opacity??1,0,Y5(s))):d&&(a.opacity=Zt(i.opacity??1,l.opacity??1,s));for(let f=0;f<L5;f++){const g=`border${by[f]}Radius`;let p=bp(i,g),m=bp(l,g);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||vp(p)===vp(m)?(a[g]=Math.max(Zt(yp(p),yp(m),s),0),(vn.test(m)||vn.test(p))&&(a[g]+="%")):a[g]=m}(i.rotate||l.rotate)&&(a.rotate=Zt(i.rotate||0,l.rotate||0,s))}function bp(a,i){return a[i]!==void 0?a[i]:a.borderRadius}const P5=xy(0,.5,rg),Y5=xy(.5,.95,nn);function xy(a,i,l){return s=>s<a?0:s>i?1:l(el(a,i,s))}function xp(a,i){a.min=i.min,a.max=i.max}function Ie(a,i){xp(a.x,i.x),xp(a.y,i.y)}function Sp(a,i){a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin}function Tp(a,i,l,s,c){return a-=i,a=Hr(a,1/l,s),c!==void 0&&(a=Hr(a,1/c,s)),a}function X5(a,i=0,l=1,s=.5,c,d=a,f=a){if(vn.test(i)&&(i=parseFloat(i),i=Zt(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=Zt(d.min,d.max,s);a===d&&(g-=i),a.min=Tp(a.min,i,l,g,c),a.max=Tp(a.max,i,l,g,c)}function Ap(a,i,[l,s,c],d,f){X5(a,i[l],i[s],i[c],i.scale,d,f)}const G5=["x","scaleX","originX"],Z5=["y","scaleY","originY"];function Op(a,i,l,s){Ap(a.x,i,G5,l?l.x:void 0,s?s.x:void 0),Ap(a.y,i,Z5,l?l.y:void 0,s?s.y:void 0)}function Dp(a){return a.translate===0&&a.scale===1}function Sy(a){return Dp(a.x)&&Dp(a.y)}function Mp(a,i){return a.min===i.min&&a.max===i.max}function Q5(a,i){return Mp(a.x,i.x)&&Mp(a.y,i.y)}function Ep(a,i){return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)}function Ty(a,i){return Ep(a.x,i.x)&&Ep(a.y,i.y)}function Rp(a){return Ee(a.x)/Ee(a.y)}function Cp(a,i){return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint}class K5{constructor(){this.members=[]}add(i){ef(this.members,i),i.scheduleRender()}remove(i){if(nf(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(c=>i===c);if(l===0)return!1;let s;for(let c=l;c>=0;c--){const d=this.members[c];if(d.isPresent!==!1){s=d;break}}return s?(this.promote(s),!0):!1}promote(i,l){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,l&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:s}=i;l.onExitComplete&&l.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function J5(a,i,l){let s="";const c=a.x.translate/i.x,d=a.y.translate/i.y,f=l?.z||0;if((c||d||f)&&(s=`translate3d(${c}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:m,rotate:y,rotateX:b,rotateY:x,skewX:w,skewY:M}=l;m&&(s=`perspective(${m}px) ${s}`),y&&(s+=`rotate(${y}deg) `),b&&(s+=`rotateX(${b}deg) `),x&&(s+=`rotateY(${x}deg) `),w&&(s+=`skewX(${w}deg) `),M&&(s+=`skewY(${M}deg) `)}const g=a.x.scale*i.x,p=a.y.scale*i.y;return(g!==1||p!==1)&&(s+=`scale(${g}, ${p})`),s||"none"}const Dc=["","X","Y","Z"],F5=1e3;let W5=0;function Mc(a,i,l,s){const{latestValues:c}=i;c[a]&&(l[a]=c[a],i.setStaticValue(a,0),s&&(s[a]=0))}function Ay(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:i}=a.options;if(!i)return;const l=uy(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:c,layoutId:d}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",Yt,!(c||d))}const{parent:s}=a;s&&!s.hasCheckedOptimisedAppear&&Ay(s)}function Oy({attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},g=i?.()){this.id=W5++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(tS),this.nodes.forEach(iS),this.nodes.forEach(oS),this.nodes.forEach(eS)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new j5)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new lf),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const p=this.eventHandlers.get(f);p&&p.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Lg(f)&&!q2(f),this.instance=f;const{layoutId:g,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||g)&&(this.isLayoutDirty=!0),a){let y,b=0;const x=()=>this.root.updateBlockedByResize=!1;Yt.read(()=>{b=window.innerWidth}),a(f,()=>{const w=window.innerWidth;w!==b&&(b=w,this.root.updateBlockedByResize=!0,y&&y(),y=H5(x,250),kr.hasAnimatedSinceResize&&(kr.hasAnimatedSinceResize=!1,this.nodes.forEach(_p)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&m&&(g||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||m.getDefaultTransition()||cS,{onLayoutAnimationStart:D,onLayoutAnimationComplete:V}=m.getProps(),L=!this.targetLayout||!Ty(this.targetLayout,w),X=!b&&x;if(this.options.layoutRoot||this.resumeFrom||X||b&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...bf(M,"layout"),onPlay:D,onComplete:V};(m.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(y,X)}else b||_p(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),fa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lS),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ay(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:g,layout:p}=this.options;if(g===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(wp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(zp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(aS),this.nodes.forEach($5),this.nodes.forEach(I5)):this.nodes.forEach(zp),this.clearAllSnapshots();const g=_e.now();ye.delta=jn(0,1e3/60,g-ye.timestamp),ye.timestamp=g,ye.isProcessing=!0,pc.update.process(ye),pc.preRender.process(ye),pc.render.process(ye),ye.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Sf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nS),this.sharedNodes.forEach(rS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Yt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Yt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ee(this.snapshot.measuredBox.x)&&!Ee(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=te(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!Sy(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;f&&this.instance&&(g||Ba(this.latestValues)||y)&&(c(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let p=this.removeElementScroll(g);return f&&(p=this.removeTransform(p)),fS(p),{animationId:this.root.animationId,measuredBox:g,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return te();const g=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(dS))){const{scroll:m}=this.root;m&&(Ui(g.x,m.offset.x),Ui(g.y,m.offset.y))}return g}removeElementScroll(f){const g=te();if(Ie(g,f),this.scroll?.wasRoot)return g;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:y,options:b}=m;m!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&Ie(g,f),Ui(g.x,y.offset.x),Ui(g.y,y.offset.y))}return g}applyTransform(f,g=!1){const p=te();Ie(p,f);for(let m=0;m<this.path.length;m++){const y=this.path[m];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Bi(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Ba(y.latestValues)&&Bi(p,y.latestValues)}return Ba(this.latestValues)&&Bi(p,this.latestValues),p}removeTransform(f){const g=te();Ie(g,f);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!Ba(m.latestValues))continue;Pc(m.latestValues)&&m.updateSnapshot();const y=te(),b=m.measurePageBox();Ie(y,b),Op(g,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return Ba(this.latestValues)&&Op(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ye.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==g;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=ye.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=te(),this.relativeTargetOrigin=te(),tl(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Ie(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=te(),this.targetWithTransforms=te()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),v5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ie(this.target,this.layout.layoutBox),ay(this.target,this.targetDelta)):Ie(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=te(),this.relativeTargetOrigin=te(),tl(this.relativeTargetOrigin,this.target,x.target),Ie(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Pc(this.parent.latestValues)||ny(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const f=this.getLead(),g=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===ye.timestamp&&(p=!1),p)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;Ie(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,x=this.treeScale.y;Cx(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=te());const{target:w}=f;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Sp(this.prevProjectionDelta.x,this.projectionDelta.x),Sp(this.prevProjectionDelta.y,this.projectionDelta.y)),Io(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==x||!Cp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Cp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ji(),this.projectionDelta=ji(),this.projectionDeltaWithTransform=ji()}setAnimationOrigin(f,g=!1){const p=this.snapshot,m=p?p.latestValues:{},y={...this.latestValues},b=ji();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const x=te(),w=p?p.source:void 0,M=this.layout?this.layout.source:void 0,D=w!==M,V=this.getStack(),L=!V||V.members.length<=1,X=!!(D&&!L&&this.options.crossfade===!0&&!this.path.some(uS));this.animationProgress=0;let U;this.mixTargetDelta=K=>{const q=K/1e3;Np(b.x,f.x,q),Np(b.y,f.y,q),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(tl(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),sS(this.relativeTarget,this.relativeTargetOrigin,x,q),U&&Q5(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=te()),Ie(U,this.relativeTarget)),D&&(this.animationValues=y,q5(y,m,this.latestValues,q,X,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(fa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Yt.update(()=>{kr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Hi(0)),this.currentAnimation=U5(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),f.onUpdate&&f.onUpdate(g)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(F5),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:p,layout:m,latestValues:y}=f;if(!(!g||!p||!m)){if(this!==f&&this.layout&&m&&Dy(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||te();const b=Ee(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+b;const x=Ee(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+x}Ie(g,p),Bi(g,y),Io(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new K5),this.sharedNodes.get(f).add(g);const m=g.options.initialPromotionConfig;g.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(g=!0),!g)return;const m={};p.z&&Mc("z",f,m,this.animationValues);for(let y=0;y<Dc.length;y++)Mc(`rotate${Dc[y]}`,f,m,this.animationValues),Mc(`skew${Dc[y]}`,f,m,this.animationValues);f.render();for(const y in m)f.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);f.scheduleRender()}applyProjectionStyles(f,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Nr(g?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Nr(g?.pointerEvents)||""),this.hasProjected&&!Ba(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=m.animationValues||m.latestValues;this.applyTransformsToTarget();let b=J5(this.projectionDeltaWithTransform,this.treeScale,y);p&&(b=p(y,b)),f.transform=b;const{x,y:w}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,m.animationValues?f.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const M in ol){if(y[M]===void 0)continue;const{correct:D,applyTo:V,isCSSVariable:L}=ol[M],X=b==="none"?y[M]:D(y[M],m);if(V){const U=V.length;for(let K=0;K<U;K++)f[V[K]]=X}else L?this.options.visualElement.renderState.vars[M]=X:f[M]=X}this.options.layoutId&&(f.pointerEvents=m===this?Nr(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(wp),this.root.sharedNodes.clear()}}}function $5(a){a.updateLayout()}function I5(a){const i=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:s}=a.layout,{animationType:c}=a.options,d=i.source!==a.layout.source;c==="size"?tn(y=>{const b=d?i.measuredBox[y]:i.layoutBox[y],x=Ee(b);b.min=l[y].min,b.max=b.min+x}):Dy(c,i.layoutBox,l)&&tn(y=>{const b=d?i.measuredBox[y]:i.layoutBox[y],x=Ee(l[y]);b.max=b.min+x,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[y].max=a.relativeTarget[y].min+x)});const f=ji();Io(f,l,i.layoutBox);const g=ji();d?Io(g,a.applyTransform(s,!0),i.measuredBox):Io(g,l,i.layoutBox);const p=!Sy(f);let m=!1;if(!a.resumeFrom){const y=a.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:x}=y;if(b&&x){const w=te();tl(w,i.layoutBox,b.layoutBox);const M=te();tl(M,l,x.layoutBox),Ty(w,M)||(m=!0),y.options.layoutRoot&&(a.relativeTarget=M,a.relativeTargetOrigin=w,a.relativeParent=y)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:g,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function tS(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function eS(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function nS(a){a.clearSnapshot()}function wp(a){a.clearMeasurements()}function zp(a){a.isLayoutDirty=!1}function aS(a){const{visualElement:i}=a.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()}function _p(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function iS(a){a.resolveTargetDelta()}function oS(a){a.calcProjection()}function lS(a){a.resetSkewAndRotation()}function rS(a){a.removeLeadSnapshot()}function Np(a,i,l){a.translate=Zt(i.translate,0,l),a.scale=Zt(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint}function kp(a,i,l,s){a.min=Zt(i.min,l.min,s),a.max=Zt(i.max,l.max,s)}function sS(a,i,l,s){kp(a.x,i.x,l.x,s),kp(a.y,i.y,l.y,s)}function uS(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const cS={duration:.45,ease:[.4,0,.1,1]},Vp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Up=Vp("applewebkit/")&&!Vp("chrome/")?Math.round:nn;function Bp(a){a.min=Up(a.min),a.max=Up(a.max)}function fS(a){Bp(a.x),Bp(a.y)}function Dy(a,i,l){return a==="position"||a==="preserve-aspect"&&!y5(Rp(i),Rp(l),.2)}function dS(a){return a!==a.root&&a.scroll?.wasRoot}const hS=Oy({attachResizeListener:(a,i)=>rl(a,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ec={current:void 0},My=Oy({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Ec.current){const a=new hS({});a.mount(window),a.setOptions({layoutScroll:!0}),Ec.current=a}return Ec.current},resetTransform:(a,i)=>{a.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),mS={pan:{Feature:_5},drag:{Feature:z5,ProjectionNode:My,MeasureLayout:vy}};function jp(a,i,l){const{props:s}=a;a.animationState&&s.whileHover&&a.animationState.setActive("whileHover",l==="Start");const c="onHover"+l,d=s[c];d&&Yt.postRender(()=>d(i,fl(i)))}class pS extends ha{mount(){const{current:i}=this.node;i&&(this.unmount=U2(i,(l,s)=>(jp(this.node,s,"Start"),c=>jp(this.node,c,"End"))))}unmount(){}}class gS extends ha{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=sl(rl(this.node.current,"focus",()=>this.onFocus()),rl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Hp(a,i,l){const{props:s}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&s.whileTap&&a.animationState.setActive("whileTap",l==="Start");const c="onTap"+(l==="End"?"":l),d=s[c];d&&Yt.postRender(()=>d(i,fl(i)))}class yS extends ha{mount(){const{current:i}=this.node;i&&(this.unmount=L2(i,(l,s)=>(Hp(this.node,s,"Start"),(c,{success:d})=>Hp(this.node,c,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Jc=new WeakMap,Rc=new WeakMap,vS=a=>{const i=Jc.get(a.target);i&&i(a)},bS=a=>{a.forEach(vS)};function xS({root:a,...i}){const l=a||document;Rc.has(l)||Rc.set(l,{});const s=Rc.get(l),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(bS,{root:a,...i})),s[c]}function SS(a,i,l){const s=xS(i);return Jc.set(a,l),s.observe(a),()=>{Jc.delete(a),s.unobserve(a)}}const TS={some:0,all:1};class AS extends ha{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:c="some",once:d}=i,f={root:l?l.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:TS[c]},g=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,d&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),x=m?y:b;x&&x(p)};return SS(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(OS(i,l))&&this.startObserver()}unmount(){}}function OS({viewport:a={}},{viewport:i={}}={}){return l=>a[l]!==i[l]}const DS={inView:{Feature:AS},tap:{Feature:yS},focus:{Feature:gS},hover:{Feature:pS}},MS={layout:{ProjectionNode:My,MeasureLayout:vy}},ES={...f5,...DS,...mS,...MS},en=Mx(ES,Hx),RS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='100pt'%20height='100pt'%20version='1.1'%20viewBox='0%200%20100%20100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m18.914%2081.398h-7.1992c0.97266%200.91016%201.5977%202.2266%201.5977%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.3125%200.46094-2.5703%201.4297-3.5977h-4.5703v-1.8281h4.5703v-7.4883h67.082v-21.371h25.086v2.6328h-13.086v11.426h7.8281v12.633l-15.484-0.003906c-1.1406%200.17187-1.0273%201.6562%200.058594%201.7695h23.945v2.2305h-9.4297c0.91406%200.91016%201.543%202.2266%201.543%203.5977%200%202.8008-2.2852%205.082-5.0859%205.082-2.8008%200-5.0859-2.2812-5.0859-5.082%200-1.4297%200.62891-2.7383%201.543-3.5977h-7.6016c0.058594%200.22656%200.10938%200.45703%200.10938%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.058593-0.45703%200.058593-0.68359h-3.8281c0%200.28125%200.058593%200.51562%200.058593%200.68359%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2305-3.7109-8.2305-8.3438%200-0.11328%200.058594-0.28516%200.11328-0.625h-4.1133c0%200.28516%200.058594%200.45703%200.058594%200.625%200%204.5742-3.7695%208.3438-8.2852%208.3438-4.5117%200-8.2266-3.7109-8.2266-8.3438%200-0.16797%200.054688-0.34375%200.11328-0.625'%20fill='%23010101'/%3e%3cpath%20d='m25.316%2053.566c-1.3711-0.16797-2.3984-1.1445-2.1719-2.2812l2.0547-6.1719-0.34375-4.2305h-7.8867l-0.34375%204.2305%202.0586%206.1719c0.23047%201.1406-0.80078%202.1172-2.0586%202.2812h-6.4531l-5.5977%208.3984%205.5977%208.4023h59.828l-0.003906-16.852c-3.9961%200.16797-3.7109-1.4883-3.9961-2.6914h-24.914c-0.11328%200.91406%200%202.7422-3.1406%202.7422z'%20fill='%23010101'/%3e%3cpath%20d='m23.312%2039.113h-4.6289c0.62891-6.3984%202.457-11.027%207.5977-15.543%201.3164-2.1133%200.28516-12.172%209.1406-13.715%208.6914-1.4844%208.5781%204.9141%2015.32%205.5977%202.9141%200.28906%205.6016-2.3398%208.5703-2.2812%204.0547%200.11328%205.7734%203.8242%209.1992%203.9961%203.4297%200.17188%204.1133-2.0547%207.4297-2.1719%203.3125-0.11328%207.8281%203.6562%207.8281%207.2031%200%204.0547-0.34375%208.3398-7.0859%2010.055-3.1992%200.80078-6-2.5703-9.1992-2.457-2.8555%200.054687-5.7148%202.6875-8.5156%202.6875-6.7383%200-6.3984-4.0586-10.168-4.0586-3.9414%200-4.8008%203.9414-10.801%204.2852-4.1758%200.23047-6.2852-2.6289-9.1445-1.7148-4.5117%201.4883-5.2539%208.1172-5.543%208.1172'%20fill='%23010101'/%3e%3c/svg%3e";function se(a,i){i===void 0&&(i={});var l=i.insertAt;if(a&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a))}}se(`.react-loading-indicator-normalize,
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
}`);var kt=function(){return kt=Object.assign||function(a){for(var i,l=1,s=arguments.length;l<s;l++)for(var c in i=arguments[l])Object.prototype.hasOwnProperty.call(i,c)&&(a[c]=i[c]);return a},kt.apply(this,arguments)};function Lr(a){return Lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Lr(a)}var CS=/^\s+/,wS=/\s+$/;function nt(a,i){if(i=i||{},(a=a||"")instanceof nt)return a;if(!(this instanceof nt))return new nt(a,i);var l=function(s){var c={r:0,g:0,b:0},d=1,f=null,g=null,p=null,m=!1,y=!1;typeof s=="string"&&(s=function(M){M=M.replace(CS,"").replace(wS,"").toLowerCase();var D,V=!1;if(Fc[M])M=Fc[M],V=!0;else if(M=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(D=rn.rgb.exec(M))?{r:D[1],g:D[2],b:D[3]}:(D=rn.rgba.exec(M))?{r:D[1],g:D[2],b:D[3],a:D[4]}:(D=rn.hsl.exec(M))?{h:D[1],s:D[2],l:D[3]}:(D=rn.hsla.exec(M))?{h:D[1],s:D[2],l:D[3],a:D[4]}:(D=rn.hsv.exec(M))?{h:D[1],s:D[2],v:D[3]}:(D=rn.hsva.exec(M))?{h:D[1],s:D[2],v:D[3],a:D[4]}:(D=rn.hex8.exec(M))?{r:qe(D[1]),g:qe(D[2]),b:qe(D[3]),a:Gp(D[4]),format:V?"name":"hex8"}:(D=rn.hex6.exec(M))?{r:qe(D[1]),g:qe(D[2]),b:qe(D[3]),format:V?"name":"hex"}:(D=rn.hex4.exec(M))?{r:qe(D[1]+""+D[1]),g:qe(D[2]+""+D[2]),b:qe(D[3]+""+D[3]),a:Gp(D[4]+""+D[4]),format:V?"name":"hex8"}:(D=rn.hex3.exec(M))?{r:qe(D[1]+""+D[1]),g:qe(D[2]+""+D[2]),b:qe(D[3]+""+D[3]),format:V?"name":"hex"}:!1}(s)),Lr(s)=="object"&&(Bn(s.r)&&Bn(s.g)&&Bn(s.b)?(b=s.r,x=s.g,w=s.b,c={r:255*Pt(b,255),g:255*Pt(x,255),b:255*Pt(w,255)},m=!0,y=String(s.r).substr(-1)==="%"?"prgb":"rgb"):Bn(s.h)&&Bn(s.s)&&Bn(s.v)?(f=Jo(s.s),g=Jo(s.v),c=function(M,D,V){M=6*Pt(M,360),D=Pt(D,100),V=Pt(V,100);var L=Math.floor(M),X=M-L,U=V*(1-D),K=V*(1-X*D),q=V*(1-(1-X)*D),W=L%6,tt=[V,K,U,U,q,V][W],Q=[q,V,V,K,U,U][W],dt=[U,U,q,V,V,K][W];return{r:255*tt,g:255*Q,b:255*dt}}(s.h,f,g),m=!0,y="hsv"):Bn(s.h)&&Bn(s.s)&&Bn(s.l)&&(f=Jo(s.s),p=Jo(s.l),c=function(M,D,V){var L,X,U;function K(tt,Q,dt){return dt<0&&(dt+=1),dt>1&&(dt-=1),dt<1/6?tt+6*(Q-tt)*dt:dt<.5?Q:dt<2/3?tt+(Q-tt)*(2/3-dt)*6:tt}if(M=Pt(M,360),D=Pt(D,100),V=Pt(V,100),D===0)L=X=U=V;else{var q=V<.5?V*(1+D):V+D-V*D,W=2*V-q;L=K(W,q,M+1/3),X=K(W,q,M),U=K(W,q,M-1/3)}return{r:255*L,g:255*X,b:255*U}}(s.h,f,p),m=!0,y="hsl"),s.hasOwnProperty("a")&&(d=s.a));var b,x,w;return d=Ey(d),{ok:m,format:s.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:d}}(a);this._originalInput=a,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||l.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function Lp(a,i,l){a=Pt(a,255),i=Pt(i,255),l=Pt(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=(d+f)/2;if(d==f)s=c=0;else{var p=d-f;switch(c=g>.5?p/(2-d-f):p/(d+f),d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,l:g}}function qp(a,i,l){a=Pt(a,255),i=Pt(i,255),l=Pt(l,255);var s,c,d=Math.max(a,i,l),f=Math.min(a,i,l),g=d,p=d-f;if(c=d===0?0:p/d,d==f)s=0;else{switch(d){case a:s=(i-l)/p+(i<l?6:0);break;case i:s=(l-a)/p+2;break;case l:s=(a-i)/p+4}s/=6}return{h:s,s:c,v:g}}function Pp(a,i,l,s){var c=[un(Math.round(a).toString(16)),un(Math.round(i).toString(16)),un(Math.round(l).toString(16))];return s&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function Yp(a,i,l,s){return[un(Ry(s)),un(Math.round(a).toString(16)),un(Math.round(i).toString(16)),un(Math.round(l).toString(16))].join("")}function zS(a,i){i=i===0?0:i||10;var l=nt(a).toHsl();return l.s-=i/100,l.s=Gr(l.s),nt(l)}function _S(a,i){i=i===0?0:i||10;var l=nt(a).toHsl();return l.s+=i/100,l.s=Gr(l.s),nt(l)}function NS(a){return nt(a).desaturate(100)}function kS(a,i){i=i===0?0:i||10;var l=nt(a).toHsl();return l.l+=i/100,l.l=Gr(l.l),nt(l)}function VS(a,i){i=i===0?0:i||10;var l=nt(a).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-i/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-i/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-i/100*255))),nt(l)}function US(a,i){i=i===0?0:i||10;var l=nt(a).toHsl();return l.l-=i/100,l.l=Gr(l.l),nt(l)}function BS(a,i){var l=nt(a).toHsl(),s=(l.h+i)%360;return l.h=s<0?360+s:s,nt(l)}function jS(a){var i=nt(a).toHsl();return i.h=(i.h+180)%360,nt(i)}function Xp(a,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var l=nt(a).toHsl(),s=[nt(a)],c=360/i,d=1;d<i;d++)s.push(nt({h:(l.h+d*c)%360,s:l.s,l:l.l}));return s}function HS(a){var i=nt(a).toHsl(),l=i.h;return[nt(a),nt({h:(l+72)%360,s:i.s,l:i.l}),nt({h:(l+216)%360,s:i.s,l:i.l})]}function LS(a,i,l){i=i||6,l=l||30;var s=nt(a).toHsl(),c=360/l,d=[nt(a)];for(s.h=(s.h-(c*i>>1)+720)%360;--i;)s.h=(s.h+c)%360,d.push(nt(s));return d}function qS(a,i){i=i||6;for(var l=nt(a).toHsv(),s=l.h,c=l.s,d=l.v,f=[],g=1/i;i--;)f.push(nt({h:s,s:c,v:d})),d=(d+g)%1;return f}nt.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var a,i,l,s=this.toRgb();return a=s.r/255,i=s.g/255,l=s.b/255,.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(a){return this._a=Ey(a),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var a=qp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=qp(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.v);return this._a==1?"hsv("+i+", "+l+"%, "+s+"%)":"hsva("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var a=Lp(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=Lp(this._r,this._g,this._b),i=Math.round(360*a.h),l=Math.round(100*a.s),s=Math.round(100*a.l);return this._a==1?"hsl("+i+", "+l+"%, "+s+"%)":"hsla("+i+", "+l+"%, "+s+"%, "+this._roundA+")"},toHex:function(a){return Pp(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return function(i,l,s,c,d){var f=[un(Math.round(i).toString(16)),un(Math.round(l).toString(16)),un(Math.round(s).toString(16)),un(Ry(c))];return d&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Pt(this._r,255))+"%",g:Math.round(100*Pt(this._g,255))+"%",b:Math.round(100*Pt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Pt(this._r,255))+"%, "+Math.round(100*Pt(this._g,255))+"%, "+Math.round(100*Pt(this._b,255))+"%)":"rgba("+Math.round(100*Pt(this._r,255))+"%, "+Math.round(100*Pt(this._g,255))+"%, "+Math.round(100*Pt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(PS[Pp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(a){var i="#"+Yp(this._r,this._g,this._b,this._a),l=i,s=this._gradientType?"GradientType = 1, ":"";if(a){var c=nt(a);l="#"+Yp(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+i+",endColorstr="+l+")"},toString:function(a){var i=!!a;a=a||this._format;var l=!1,s=this._a<1&&this._a>=0;return i||!s||a!=="hex"&&a!=="hex6"&&a!=="hex3"&&a!=="hex4"&&a!=="hex8"&&a!=="name"?(a==="rgb"&&(l=this.toRgbString()),a==="prgb"&&(l=this.toPercentageRgbString()),a!=="hex"&&a!=="hex6"||(l=this.toHexString()),a==="hex3"&&(l=this.toHexString(!0)),a==="hex4"&&(l=this.toHex8String(!0)),a==="hex8"&&(l=this.toHex8String()),a==="name"&&(l=this.toName()),a==="hsl"&&(l=this.toHslString()),a==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):a==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return nt(this.toString())},_applyModification:function(a,i){var l=a.apply(null,[this].concat([].slice.call(i)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(kS,arguments)},brighten:function(){return this._applyModification(VS,arguments)},darken:function(){return this._applyModification(US,arguments)},desaturate:function(){return this._applyModification(zS,arguments)},saturate:function(){return this._applyModification(_S,arguments)},greyscale:function(){return this._applyModification(NS,arguments)},spin:function(){return this._applyModification(BS,arguments)},_applyCombination:function(a,i){return a.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(LS,arguments)},complement:function(){return this._applyCombination(jS,arguments)},monochromatic:function(){return this._applyCombination(qS,arguments)},splitcomplement:function(){return this._applyCombination(HS,arguments)},triad:function(){return this._applyCombination(Xp,[3])},tetrad:function(){return this._applyCombination(Xp,[4])}},nt.fromRatio=function(a,i){if(Lr(a)=="object"){var l={};for(var s in a)a.hasOwnProperty(s)&&(l[s]=s==="a"?a[s]:Jo(a[s]));a=l}return nt(a,i)},nt.equals=function(a,i){return!(!a||!i)&&nt(a).toRgbString()==nt(i).toRgbString()},nt.random=function(){return nt.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},nt.mix=function(a,i,l){l=l===0?0:l||50;var s=nt(a).toRgb(),c=nt(i).toRgb(),d=l/100;return nt({r:(c.r-s.r)*d+s.r,g:(c.g-s.g)*d+s.g,b:(c.b-s.b)*d+s.b,a:(c.a-s.a)*d+s.a})},nt.readability=function(a,i){var l=nt(a),s=nt(i);return(Math.max(l.getLuminance(),s.getLuminance())+.05)/(Math.min(l.getLuminance(),s.getLuminance())+.05)},nt.isReadable=function(a,i,l){var s,c,d=nt.readability(a,i);switch(c=!1,(s=function(f){var g,p;return g=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(f.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:g,size:p}}(l)).level+s.size){case"AAsmall":case"AAAlarge":c=d>=4.5;break;case"AAlarge":c=d>=3;break;case"AAAsmall":c=d>=7}return c},nt.mostReadable=function(a,i,l){var s,c,d,f,g=null,p=0;c=(l=l||{}).includeFallbackColors,d=l.level,f=l.size;for(var m=0;m<i.length;m++)(s=nt.readability(a,i[m]))>p&&(p=s,g=nt(i[m]));return nt.isReadable(a,g,{level:d,size:f})||!c?g:(l.includeFallbackColors=!1,nt.mostReadable(a,["#fff","#000"],l))};var Fc=nt.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},PS=nt.hexNames=function(a){var i={};for(var l in a)a.hasOwnProperty(l)&&(i[a[l]]=l);return i}(Fc);function Ey(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function Pt(a,i){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(a)&&(a="100%");var l=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(a);return a=Math.min(i,Math.max(0,parseFloat(a))),l&&(a=parseInt(a*i,10)/100),Math.abs(a-i)<1e-6?1:a%i/parseFloat(i)}function Gr(a){return Math.min(1,Math.max(0,a))}function qe(a){return parseInt(a,16)}function un(a){return a.length==1?"0"+a:""+a}function Jo(a){return a<=1&&(a=100*a+"%"),a}function Ry(a){return Math.round(255*parseFloat(a)).toString(16)}function Gp(a){return qe(a)/255}var ua,Cr,wr,rn=(Cr="[\\s|\\(]+("+(ua="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ua+")[,|\\s]+("+ua+")\\s*\\)?",wr="[\\s|\\(]+("+ua+")[,|\\s]+("+ua+")[,|\\s]+("+ua+")[,|\\s]+("+ua+")\\s*\\)?",{CSS_UNIT:new RegExp(ua),rgb:new RegExp("rgb"+Cr),rgba:new RegExp("rgba"+wr),hsl:new RegExp("hsl"+Cr),hsla:new RegExp("hsla"+wr),hsv:new RegExp("hsv"+Cr),hsva:new RegExp("hsva"+wr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Bn(a){return!!rn.CSS_UNIT.exec(a)}var Zr=function(a,i){var l=(typeof a=="string"?parseInt(a):a)||0;if(l>=-5&&l<=5){var s=l,c=parseFloat(i),d=c+s*(c/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:i}},Qr=function(a,i){var l=a||{},s="";switch(i){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var c={};if(l.fontSize){var d=l.fontSize;c=function(f,g){var p={};for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&g.indexOf(m)<0&&(p[m]=f[m]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(m=Object.getOwnPropertySymbols(f);y<m.length;y++)g.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(f,m[y])&&(p[m[y]]=f[m[y]])}return p}(l,["fontSize"]),s=d}return{fontSize:s,styles:c}},YS={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Kr=function(a){var i=a.className,l=a.text,s=a.textColor,c=a.staticText,d=a.style;return l?wt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:kt(kt(kt({},c&&YS),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof l=="string"&&l.length?l:"loading"):null},dl="rgb(50, 205, 50)";function Jr(a,i){if(i===void 0&&(i=0),a.length===0)throw new Error("Input array cannot be empty!");var l=[];return function s(c,d){return d===void 0&&(d=0),l.push.apply(l,c),l.length<d&&s(l,d),l.slice(0,d)}(a,i)}se(`.atom-rli-bounding-box {
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
}`);nt(dl).toRgb();Array.from({length:4},function(a,i){return"--atom-phase".concat(i+1,"-rgb")});se(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--commet-phase".concat(i+1,"-color")});se(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-annulus-phase".concat(i+1,"-color")});function Cc(a){return a&&a.Math===Math&&a}se(`.OP-dotted-rli-bounding-box {
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
}`);Cc(typeof window=="object"&&window)||Cc(typeof self=="object"&&self)||Cc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(a,i){return"--OP-dotted-phase".concat(i+1,"-color")});se(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-spokes-phase".concat(i+1,"-color")});se(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")});se(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]});se(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--four-square-phase".concat(i+1,"-color")});se(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--mosaic-phase".concat(i+1,"-color")});se(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--riple-phase".concat(i+1,"-color")});se(`.pulsate-rli-bounding-box {
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
}`);var wi=Array.from({length:4},function(a,i){return"--TD-pulsate-phase".concat(i+1,"-color")}),XS=function(a){var i,l=Qr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Zr(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var m={};if(p instanceof Array){for(var y=Jr(p,wi.length),b=0;b<y.length&&!(b>=4);b++)m[wi[b]]=y[b];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<wi.length;x++)m[wi[x]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),x=0;x<wi.length;x++)m[wi[x]]=dl}return m}((i=a?.color)!==null&&i!==void 0?i:"");return wt.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:kt(kt(kt(kt(kt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"rli-d-i-b pulsate-indicator"},wt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),wt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),wt.createElement("span",{className:"rli-d-i-b pulsate-dot"})),wt.createElement(Kr,{staticText:!0,text:a?.text,textColor:a?.textColor}))};se(`.brick-stack-rli-bounding-box {
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
}`);var zi=Array.from({length:4},function(a,i){return"--TD-brick-stack-phase".concat(i+1,"-color")}),GS=function(a){var i,l=Qr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Zr(a?.speedPlus,"1s").animationPeriod,g=function(p){var m={};if(p instanceof Array){for(var y=Jr(p,zi.length),b=0;b<y.length&&!(b>=4);b++)m[zi[b]]=y[b];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<zi.length;x++)m[zi[x]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),x=0;x<zi.length;x++)m[zi[x]]=dl}return m}((i=a?.color)!==null&&i!==void 0?i:"");return wt.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:kt(kt(kt(kt(kt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},wt.createElement("span",{className:"rli-d-i-b brick-stack"})),wt.createElement(Kr,{staticText:!0,text:a?.text,textColor:a?.textColor}))};se(`.bob-rli-bounding-box {
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
}`);var _i=Array.from({length:4},function(a,i){return"--TD-bob-phase".concat(i+1,"-color")}),ZS=function(a){var i,l=Qr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Zr(a?.speedPlus,"1.2s").animationPeriod,g=function(p){var m={};if(p instanceof Array){for(var y=Jr(p,_i.length),b=0;b<y.length&&!(b>=4);b++)m[_i[b]]=y[b];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<_i.length;x++)m[_i[x]]=p}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),x=0;x<_i.length;x++)m[_i[x]]=dl}return m}((i=a?.color)!==null&&i!==void 0?i:"");return wt.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:kt(kt(kt(kt(kt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"bob-indicator"},wt.createElement("span",{className:"bobbing"})),wt.createElement(Kr,{staticText:!0,text:a?.text,textColor:a?.textColor}))};se(`.bounce-rli-bounding-box {
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
}`);var Ni=Array.from({length:4},function(a,i){return"--TD-bounce-phase".concat(i+1,"-color")}),QS=function(a){var i,l=Qr(a?.style,a?.size),s=l.styles,c=l.fontSize,d=a?.easing,f=Zr(a?.speedPlus,"0.5s").animationPeriod,g=function(p){var m={};if(p instanceof Array){for(var y=Jr(p,Ni.length),b=0;b<y.length&&!(b>=4);b++)m[Ni[b]]=y[b];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var x=0;x<Ni.length;x++)m[Ni[x]]=p}catch{for(x=0;x<Ni.length;x++)m[Ni[x]]=dl}return m}((i=a?.color)!==null&&i!==void 0?i:"");return wt.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:kt(kt(kt(kt(kt({},c&&{fontSize:c}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),g),s)},wt.createElement("span",{className:"wrapper"},wt.createElement("span",{className:"group"},wt.createElement("span",{className:"rli-d-i-b dot"}),wt.createElement("span",{className:"rli-d-i-b dot"}),wt.createElement("span",{className:"rli-d-i-b dot"})),wt.createElement("span",{className:"group"},wt.createElement("span",{className:"rli-d-i-b shadow"}),wt.createElement("span",{className:"rli-d-i-b shadow"}),wt.createElement("span",{className:"rli-d-i-b shadow"}))),wt.createElement(Kr,{staticText:!0,text:a?.text,textColor:a?.textColor,style:{marginTop:"2px"}}))},KS=function(a){var i=Object(a).variant,l=i===void 0?"pulsate":i;return l==="pulsate"?wt.createElement(XS,kt({},a)):l==="brick-stack"?wt.createElement(GS,kt({},a)):l==="bob"?wt.createElement(ZS,kt({},a)):l==="bounce"?wt.createElement(QS,kt({},a)):null};se(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--shape-phase".concat(i+1,"-color")});se(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--trophySpin-phase".concat(i+1,"-color")});se(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--slab-phase".concat(i+1,"-color")});se(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(a,i){return"--life-line-phase".concat(i+1,"-color")});const JS=({x:a,y:i,neuronId:l,direction:s,onStartConnection:c,isHighlighted:d=!1})=>Y.jsx(en.circle,{cx:a,cy:i,r:4,className:`connection-dot ${d?"connection-dot-highlighted":""}`,onClick:f=>{f.stopPropagation(),c(l,s,a,i,f)},whileHover:{scale:1.2},initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2},style:{cursor:"pointer"}}),FS=({startX:a,startY:i,endX:l,endY:s})=>Y.jsx(en.line,{x1:a,y1:i,x2:l,y2:s,className:"active-connection",markerEnd:"url(#arrowhead)",initial:{opacity:0},animate:{opacity:1},transition:{duration:.2}}),WS=({connection:a,neurons:i,neuronRadius:l,neuronTransforms:s,isGlowing:c})=>{const d=i.find(L=>L.id===a.fromNeuronId),f=i.find(L=>L.id===a.toNeuronId);if(!d||!f)return null;const g=s[a.fromNeuronId]||{x:0,y:0},p=s[a.toNeuronId]||{x:0,y:0},m=d.x+g.x,y=d.y+g.y,b=f.x+p.x,x=f.y+p.y,w=(L,X,U,K)=>{switch(X){case"top":return{x:U,y:K-l};case"right":return{x:U+l,y:K};case"bottom":return{x:U,y:K+l};case"left":return{x:U-l,y:K};default:return{x:U,y:K}}},M=w(d,a.fromDirection,m,y),D=w(f,a.toDirection,b,x),V=a.isAnimating?"active-connection":c?"completed-connection glowing-connection":"completed-connection";return Y.jsx(en.line,{x1:M.x,y1:M.y,x2:D.x,y2:D.y,className:V,markerEnd:a.isAnimating?void 0:"url(#arrowhead)",initial:a.isAnimating?{pathLength:0,opacity:.7}:{pathLength:1,opacity:.8},animate:a.isAnimating?{pathLength:1,opacity:.8}:{pathLength:1,opacity:.8},transition:a.isAnimating?{duration:.6,ease:"easeInOut"}:{duration:0}})},$S=({id:a,x:i,y:l,radius:s,label:c,type:d,onDragEnd:f,onStartConnection:g,highlightedDots:p=[],onDragUpdate:m,isGlowing:y})=>{const[b,x]=Z.useState(!1),[w,M]=Z.useState(!1),D=U=>{const K="neuron",q=U==="input"?"neuron-input":U==="hidden"?"neuron-hidden":U==="output"?"neuron-output":U.startsWith("hidden")?"neuron-hidden":"neuron";return y?`${K} ${q} glowing-neuron`:`${K} ${q}`},V=[{direction:"top",x:0,y:-s},{direction:"right",x:s,y:0},{direction:"bottom",x:0,y:s},{direction:"left",x:-s,y:0}],L=()=>{b||M(!0)},X=()=>{M(!1)};return Y.jsxs(en.g,{drag:!0,dragMomentum:!1,dragElastic:.1,initial:{x:i,y:l},animate:{x:i,y:l},onDragStart:()=>{x(!0),M(!1)},onDrag:(U,K)=>{m(a,K.offset.x,K.offset.y)},onDragEnd:(U,K)=>{x(!1);const q=i+K.offset.x,W=l+K.offset.y;f(a,q,W),m(a,0,0)},whileDrag:{scale:1.1},onMouseEnter:L,onMouseLeave:X,style:{cursor:b?"grabbing":"default"},children:[Y.jsx("circle",{cx:0,cy:0,r:s+20,fill:"transparent",style:{pointerEvents:"all",cursor:"default"}}),Y.jsx(en.circle,{cx:0,cy:0,r:s,className:D(d),initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.6,type:"spring"},style:{cursor:b?"grabbing":"grab"},onClick:U=>{U.button===0&&console.log(c)}}),Y.jsx(en.text,{x:0,y:5,className:"neuron-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},style:{pointerEvents:"none"},children:c}),Y.jsx(K2,{children:w&&!b&&V.map(U=>Y.jsx(JS,{x:U.x,y:U.y,neuronId:a,direction:U.direction,onStartConnection:g,isHighlighted:p.includes(U.direction)},U.direction))})]})},Zp=(a,i)=>{const l=a.length,s=a[0].length,c=i[0].length,d=Array(l).fill().map(()=>Array(c).fill(0));for(let f=0;f<l;f++)for(let g=0;g<c;g++)for(let p=0;p<s;p++)d[f][g]+=a[f][p]*i[p][g];return d},Qp=(a,i)=>a.map(l=>l.map((s,c)=>s+(i[c]||0))),IS=a=>a.map(i=>i.map(l=>Math.max(0,l))),tT=a=>a.map(i=>i.map(l=>1/(1+Math.exp(-l)))),eT=(a,i)=>a.map((s,c)=>{const d=Math.max(1e-15,Math.min(.999999999999999,i[c]));return-(s*Math.log(d)+(1-s)*Math.log(1-d))}),Kp=({title:a,neurons:i,data:l,setData:s,onHeaderChange:c,onCellHover:d,isOutput:f=!1,truthValues:g=[],predictions:p=[],losses:m=[]})=>{const y=()=>{f||s(M=>[...M,{}])},b=(M,D,V)=>{f||(s(L=>{const X=[...L];return X[M]||(X[M]={}),X[M][D]=V,X}),M===l.length-1&&V.trim()!==""&&y())},x=(M,D,V)=>{D===V||f||(s(L=>L.map(X=>{if(X[D]!==void 0){const U={...X};return U[V]=X[D],delete U[D],U}return X})),c(D,V))},w=M=>M<.1?"#22c55e":M<1?"#eab308":"#ef4444";return!f&&i.length===0?null:Y.jsxs("div",{className:"input-table-container",children:[Y.jsx("h3",{className:"table-title",children:a}),Y.jsxs("table",{className:"neural-table input-table",children:[Y.jsx("thead",{children:Y.jsxs("tr",{children:[Y.jsx("th",{children:Y.jsx("input",{type:"text",className:"header-input",value:"Truth",readOnly:!0})}),!f&&i.map(M=>Y.jsx("th",{children:Y.jsx("input",{type:"text",className:"header-input",value:M.label,onChange:D=>x(M.id,M.label,D.target.value||M.label),onKeyDown:D=>{D.key==="Enter"&&D.target.blur()}})},M.id)),f&&Y.jsxs(Y.Fragment,{children:[Y.jsx("th",{children:Y.jsx("input",{type:"text",className:"header-input",value:"ŷ",readOnly:!0})}),Y.jsx("th",{children:Y.jsx("input",{type:"text",className:"header-input",value:"Loss",readOnly:!0})})]})]})}),Y.jsx("tbody",{children:(f?g:l).map((M,D)=>Y.jsxs("tr",{children:[Y.jsx("td",{children:Y.jsx("input",{type:"number",className:"cell-input",value:f?g[D]:M.Truth||"",onChange:f?void 0:V=>{const L=V.target.value;(L===""||L==="0"||L==="1")&&b(D,"Truth",L)},placeholder:"0",min:"0",max:"1",step:"1",readOnly:f})}),!f&&i.map(V=>Y.jsx("td",{children:Y.jsx("input",{type:"number",className:"cell-input",value:M[V.label]||"",onChange:L=>b(D,V.label,L.target.value),onMouseEnter:()=>d("neuron",V.label),onMouseLeave:()=>d(null),onFocus:()=>d("neuron",V.label),onBlur:()=>d(null),placeholder:"0",step:"0.1"})},V.id)),f&&Y.jsxs(Y.Fragment,{children:[Y.jsx("td",{children:Y.jsx("input",{type:"number",className:"cell-input",value:p[D]?.toFixed(4)||"",readOnly:!0})}),Y.jsx("td",{children:Y.jsx("input",{type:"number",className:"cell-input",value:m[D]?.toFixed(4)||"",style:{backgroundColor:m[D]?w(m[D]):"transparent",color:m[D]&&m[D]<1?"#000":"#fff"},readOnly:!0})})]})]},D))})]})]})},Jp=({title:a,inputLabels:i,neuronLabels:l,weights:s,biases:c,onWeightChange:d,onBiasChange:f,onHeaderChange:g,showSaveLoad:p,onSave:m,onLoad:y,onCellHover:b})=>l.length===0?null:Y.jsxs("div",{className:"weights-table-container",children:[Y.jsxs("div",{className:"table-header",children:[Y.jsx("h3",{className:"table-title",children:a}),p&&Y.jsxs("div",{className:"save-load-buttons",children:[Y.jsx("button",{className:"save-load-btn",title:"Save all table values in cookies",onClick:m,children:"Save"}),Y.jsx("button",{className:"save-load-btn",title:"Load tables from cookies",onClick:y,children:"Load"})]})]}),Y.jsxs("table",{className:"neural-table weights-table",children:[Y.jsxs("thead",{children:[Y.jsxs("tr",{children:[Y.jsx("th",{className:"bias-label",children:"b1"}),l.map((x,w)=>Y.jsx("th",{children:Y.jsx("input",{type:"number",className:"bias-input",value:c[x]||"",onChange:M=>f(x,M.target.value),onMouseEnter:()=>b("neuron",x),onMouseLeave:()=>b(null),onFocus:()=>b("neuron",x),onBlur:()=>b(null),placeholder:"0.5",step:"0.1"})},w))]}),Y.jsxs("tr",{children:[Y.jsx("th",{}),l.map((x,w)=>Y.jsx("th",{children:Y.jsx("input",{type:"text",className:"header-input",defaultValue:x,onBlur:M=>g(x,M.target.value||x),onKeyDown:M=>{M.key==="Enter"&&M.target.blur()}})},w))]})]}),Y.jsx("tbody",{children:i.map((x,w)=>Y.jsxs("tr",{children:[Y.jsx("td",{className:"row-header",children:x}),l.map((M,D)=>Y.jsx("td",{children:Y.jsx("input",{type:"number",className:"cell-input",value:s[`${x}-${M}`]||"",onChange:V=>d(x,M,V.target.value),onMouseEnter:()=>b("connection",x,M),onMouseLeave:()=>b(null),onFocus:()=>b("connection",x,M),onBlur:()=>b(null),placeholder:"0.1",step:"0.1"})},D))]},w))})]})]});function nT(){const[a,i]=Z.useState([]),[l,s]=Z.useState([]),[c,d]=Z.useState(!1),[f,g]=Z.useState(1),[p,m]=Z.useState(null),[y,b]=Z.useState(null),[x,w]=Z.useState({input:0,hidden:0,output:0,...Array.from({length:10},(N,P)=>({[`hidden${P+2}`]:0})).reduce((N,P)=>({...N,...P}),{})}),[M,D]=Z.useState([{}]),[V,L]=Z.useState({}),[X,U]=Z.useState({}),[K,q]=Z.useState({}),[W,tt]=Z.useState({}),[Q,dt]=Z.useState({}),[St,Xt]=Z.useState(null),[Qt,Pe]=Z.useState({x:0,y:0}),[Ne,Kt]=Z.useState(null),[_,G]=Z.useState({}),[I,Ot]=Z.useState([]),[T,H]=Z.useState([]),[F,J]=Z.useState([]),[it,xt]=Z.useState(!1),[ft,ve]=Z.useState(!1),zt=Z.useRef(null),ee=30,Xi=400,Pa=()=>{Gi(),ve(!0),xt(!1),setTimeout(()=>{ve(!1),Zi()},1e3)},Gi=async()=>{const N={};l.forEach(at=>{const ot=a.find(ht=>ht.id===at.fromNeuronId);ot&&(N[ot.x]||(N[ot.x]=[]),N[ot.x].push(at))});const P=Object.keys(N).map(Number).sort((at,ot)=>at-ot);for(const at of P){const ot=N[at];for(const ht of ot)m(ht.id),await new Promise(Dt=>setTimeout(Dt,130));m(null),await new Promise(ht=>setTimeout(ht,100))}},Zi=()=>{console.log("=== STARTING FORWARD PASS DEBUG ===");const N=M.filter(P=>{const at=bn.some(ht=>P[ht.label]&&P[ht.label].trim()!==""),ot=P.Truth!==void 0&&P.Truth!=="";return at&&ot});if(console.log("Valid input rows:",N),console.log("Input neurons:",bn.map(P=>({id:P.id,label:P.label}))),console.log("Hidden neurons:",xn.map(P=>({id:P.id,label:P.label}))),console.log("Output neurons:",Ln.map(P=>({id:P.id,label:P.label}))),N.length===0){alert("Please add input data with truth values");return}if(xn.length===0||Ln.length===0){alert("Please add hidden and output neurons");return}try{const P=N.map(Tt=>bn.map(Lt=>parseFloat(Tt[Lt.label])||0));console.log("Input matrix X:",P);const at=N.map(Tt=>parseFloat(Tt.Truth)||0);console.log("Truth values Y:",at);const ot=bn.map(Tt=>xn.map(Lt=>{const De=Q[Tt.label]||Tt.label,ya=Q[Lt.label]||Lt.label,va=V[`${De}-${ya}`]||0;return console.log(`W1[${De}-${ya}] = ${va}`),va}));console.log("Hidden weights matrix W1:",ot);const ht=xn.map(Tt=>{const Lt=Q[Tt.label]||Tt.label,De=X[Lt]||0;return console.log(`B1[${Lt}] = ${De}`),De});console.log("Hidden biases B1:",ht);const Dt=xn.map(Tt=>Ln.map(Lt=>{const De=Q[Tt.label]||Tt.label,ya=Q[Lt.label]||Lt.label,va=K[`${De}-${ya}`]||0;return console.log(`W2[${De}-${ya}] = ${va}`),va}));console.log("Output weights matrix W2:",Dt);const rt=Ln.map(Tt=>{const Lt=Q[Tt.label]||Tt.label,De=W[Lt]||0;return console.log(`B2[${Lt}] = ${De}`),De});console.log("Output biases B2:",rt),console.log("=== FORWARD PASS CALCULATIONS ==="),console.log("Computing Z1 = X * W1 + B1...");let mt=Zp(P,ot);console.log("Z1 after matrix multiply:",mt),mt=Qp(mt,ht),console.log("Z1 after adding bias:",mt),console.log("Computing A1 = ReLU(Z1)...");const Et=IS(mt);console.log("A1 after ReLU:",Et),console.log("Computing Z2 = A1 * W2 + B2...");let Ct=Zp(Et,Dt);console.log("Z2 after matrix multiply:",Ct),Ct=Qp(Ct,rt),console.log("Z2 after adding bias:",Ct),console.log("Computing A2 = Sigmoid(Z2)...");const Se=tT(Ct);console.log("A2 after sigmoid:",Se);const he=Se.map(Tt=>Tt[0]);console.log("Final predictions:",he),console.log("Computing cross-entropy losses...");const ne=eT(at,he);console.log("Calculated losses:",ne),Ot(he),H(at),J(ne),xt(!0),console.log("=== FORWARD PASS COMPLETED ==="),console.log("Final results:"),at.forEach((Tt,Lt)=>{console.log(`Row ${Lt}: Truth=${Tt}, Prediction=${he[Lt]?.toFixed(4)}, Loss=${ne[Lt]?.toFixed(3)}`)})}catch(P){console.error("Error in forward pass:",P),console.error("Error stack:",P.stack),alert("Error in calculation. Please check your inputs and weights.")}},Qi=(N,P)=>{dt(at=>({...at,[N]:P}))},Fr=(N,P,at)=>{L(ot=>({...ot,[`${N}-${P}`]:parseFloat(at)||0}))},Wr=(N,P)=>{U(at=>({...at,[N]:parseFloat(P)||0}))},Ye=(N,P,at)=>{q(ot=>({...ot,[`${N}-${P}`]:parseFloat(at)||0}))},$r=(N,P)=>{tt(at=>({...at,[N]:parseFloat(P)||0}))},Ki=(N,P)=>{dt(at=>({...at,[N]:P}))},hl=()=>{const N={inputData:M,hiddenWeights:V,hiddenBiases:X,outputWeights:K,outputBiases:W,neuronHeaders:Q,timestamp:new Date().toISOString()};localStorage.setItem("neuralNetworkData",JSON.stringify(N)),console.log("Network data saved successfully")},Ya=()=>{const N=localStorage.getItem("neuralNetworkData");if(N)try{const P=JSON.parse(N);D(P.inputData||[{}]),L(P.hiddenWeights||{}),U(P.hiddenBiases||{}),q(P.outputWeights||{}),tt(P.outputBiases||{}),dt(P.neuronHeaders||{}),console.log("Network data loaded successfully")}catch(P){console.error("Error loading network data:",P)}else console.log("No saved network data found")},Ji=(N,P,at)=>{if(N==="connection"&&P&&at){const ot=a.find(Dt=>(Q[Dt.label]||Dt.label)===P),ht=a.find(Dt=>(Q[Dt.label]||Dt.label)===at);if(ot&&ht){const Dt=l.find(rt=>rt.fromNeuronId===ot.id&&rt.toNeuronId===ht.id);m(Dt?.id||null)}b(null)}else if(N==="neuron"&&P){const ot=a.find(ht=>(Q[ht.label]||ht.label)===P);b(ot?.id||null),m(null)}else m(null),b(null)},bn=a.filter(N=>N.type==="input").sort((N,P)=>N.y-P.y),xn=a.filter(N=>N.type==="hidden").sort((N,P)=>N.y-P.y),Ln=a.filter(N=>N.type==="output").sort((N,P)=>N.y-P.y),ma=bn.map(N=>Q[N.label]||N.label),be=xn.map(N=>Q[N.label]||N.label),cn=Ln.map(N=>Q[N.label]||N.label),xe=N=>{if(!zt.current)return{x:0,y:0};const P=zt.current.getBoundingClientRect(),at=(N.clientX-P.left)/P.width*800,ot=(N.clientY-P.top)/P.height*400;return{x:at,y:ot}},Ir=(N,P,at)=>{G(ot=>({...ot,[N]:{x:P,y:at}}))},ts=Z.useCallback(N=>{if(St&&zt.current){const P=xe(N);Pe(P);let at=null,ot=1/0;a.forEach(ht=>{if(ht.id!==St.fromNeuronId){const Dt=_[ht.id]||{x:0,y:0},rt=ht.x+Dt.x,mt=ht.y+Dt.y;[{direction:"top",x:rt,y:mt-ee},{direction:"right",x:rt+ee,y:mt},{direction:"bottom",x:rt,y:mt+ee},{direction:"left",x:rt-ee,y:mt}].forEach(Ct=>{const Se=Math.sqrt(Math.pow(P.x-Ct.x,2)+Math.pow(P.y-Ct.y,2));Se<15&&Se<ot&&(ot=Se,at={neuronId:ht.id,direction:Ct.direction})})}}),Kt(at)}},[St,a,_,ee]),es=N=>{const P=x[N]+1;let at;N==="input"?at=200:N==="hidden"?at=400:N.startsWith("hidden")?at=400+((parseInt(N.replace("hidden",""))||1)-1)*100:at=400+f*100+100;const ot=Xi-100-90*(P-1),ht={id:`${N}-${Date.now()}`,x:at,y:ot,radius:ee,label:pa(N,P),type:N};i(Dt=>{const rt=[...Dt,ht],mt=rt.filter(Et=>Et.type===N).sort((Et,Ct)=>Et.y-Ct.y);return rt.map(Et=>{if(Et.type===N){const Ct=mt.findIndex(Se=>Se.id===Et.id);return{...Et,label:pa(N,Ct+1)}}return Et})}),w(Dt=>({...Dt,[N]:P}))},pa=(N,P)=>N==="input"?`X${P}`:N==="hidden"?`H${P}`:N.startsWith("hidden")?`H${parseInt(N.replace("hidden",""))}${P}`:`Y${P}`,Xa=(N,P,at)=>{i(ot=>ot.map(ht=>ht.id===N?{...ht,x:P,y:at}:ht))},Sn=(N,P,at,ot,ht)=>{if(St)if(N!==St.fromNeuronId){const Dt={id:`connection-${Date.now()}`,fromNeuronId:St.fromNeuronId,toNeuronId:N,fromDirection:St.fromDirection,toDirection:P};s(rt=>[...rt,Dt]),Xt(null),Kt(null)}else Xt(null),Kt(null);else{const Dt=a.find(he=>he.id===N),rt=_[N]||{x:0,y:0},mt=Dt.x+rt.x,Et=Dt.y+rt.y,Ct={top:{x:mt,y:Et-ee},right:{x:mt+ee,y:Et},bottom:{x:mt,y:Et+ee},left:{x:mt-ee,y:Et}},Se=xe(ht);Xt({fromNeuronId:N,fromDirection:P,startX:Ct[P].x,startY:Ct[P].y}),Pe(Se)}},Ga=async()=>{const N=a.filter(rt=>rt.type==="input").sort((rt,mt)=>rt.y-mt.y),P=a.filter(rt=>rt.type==="hidden"||rt.type.startsWith("hidden")).sort((rt,mt)=>rt.x-mt.x||rt.y-mt.y),at=a.filter(rt=>rt.type==="output").sort((rt,mt)=>rt.y-mt.y);if(N.length===0||P.length===0)return;const ot={};P.forEach(rt=>{const mt=rt.x;ot[mt]||(ot[mt]=[]),ot[mt].push(rt)});const ht=Object.keys(ot).map(Number).sort(),Dt=[];if(ht.length>0){const rt=ot[ht[0]],mt=[];for(const Et of N)for(const Ct of rt)mt.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:Et.id,toNeuronId:Ct.id,fromDirection:"right",toDirection:"left",isAnimating:!0});Dt.push(mt)}for(let rt=0;rt<ht.length-1;rt++){const mt=ot[ht[rt]],Et=ot[ht[rt+1]],Ct=[];for(const Se of mt)for(const he of Et)Ct.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:Se.id,toNeuronId:he.id,fromDirection:"right",toDirection:"left",isAnimating:!0});Dt.push(Ct)}if(at.length>0&&ht.length>0){const rt=ot[ht[ht.length-1]],mt=[];for(const Et of rt)for(const Ct of at)mt.push({id:`connection-${Date.now()}-${Math.random()}`,fromNeuronId:Et.id,toNeuronId:Ct.id,fromDirection:"right",toDirection:"left",isAnimating:!0});Dt.push(mt)}Dt.forEach((rt,mt)=>{setTimeout(()=>{s(Et=>[...Et,...rt]),setTimeout(()=>{s(Et=>Et.map(Ct=>rt.some(Se=>Se.id===Ct.id)?{...Ct,isAnimating:!1}:Ct))},600)},100+mt*700)})},ga=N=>{N.target.classList.contains("network-svg")&&St&&(Xt(null),Kt(null))},ml=(N,P,at=()=>es(N),ot=0)=>Y.jsx(en.button,{onClick:at,className:"spawn-btn",whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20-ot},animate:{opacity:1,y:-25},transition:{delay:.1,duration:.1},children:P},N);return Y.jsx("div",{className:"app-container",children:Y.jsxs(en.div,{className:"content-wrapper-with-tables",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,ease:"easeOut"},children:[Y.jsxs("div",{className:"left-panel",children:[Y.jsx(Kp,{title:"Input Col Vectors",neurons:bn,data:M,setData:D,onHeaderChange:Qi,onCellHover:Ji,isOutput:!1}),ft&&Y.jsx("div",{style:{minHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:Y.jsx(KS,{color:["#7e7e7e","#979797","#b1b1b1","#cacaca"]})}),it&&!ft&&Y.jsx(en.div,{initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.7,ease:"easeOut"},children:Y.jsx(Kp,{title:"Final Predictions",neurons:[],data:[],setData:()=>{},onHeaderChange:()=>{},onCellHover:()=>{},isOutput:!0,truthValues:T,predictions:I,losses:F})})]}),Y.jsxs("div",{className:"center-panel",children:[Y.jsx(en.h1,{className:"main-title",initial:{opacity:0,y:-30},animate:{opacity:1,y:10},transition:{delay:.3,duration:.8},children:"Neural Network Builder"}),a.some(N=>N.type==="output")&&a.some(N=>N.type==="input")&&a.some(N=>N.type==="hidden")&&Y.jsxs(en.button,{onClick:Pa,className:"spawn-btn",style:{marginTop:"10px",marginBottom:"0px",fontSize:"16px",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap"},whileHover:{scale:1.05,borderColor:"#ffffff"},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1,duration:.1},children:["START",Y.jsx("img",{src:RS,alt:"Train",style:{marginLeft:"10px",width:22,height:22,filter:"invert(1)",transform:"scaleX(-1)"}})]}),Y.jsxs(en.svg,{ref:zt,width:"100%",height:"400",viewBox:"0 0 800 400",className:"network-svg",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:1},onMouseMove:ts,onClick:ga,children:[Y.jsx("defs",{children:Y.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:Y.jsx("polygon",{points:"0 0, 10 3.5, 0 7",className:"arrow-marker"})})}),l.map(N=>Y.jsx(WS,{connection:N,neurons:a,neuronRadius:ee,neuronTransforms:_,isGlowing:p===N.id},N.id)),St&&Y.jsx(FS,{startX:St.startX,startY:St.startY,endX:Qt.x,endY:Qt.y}),a.map(N=>Y.jsx($S,{id:N.id,x:N.x,y:N.y,radius:N.radius,label:N.label,type:N.type,onDragEnd:Xa,onDragUpdate:Ir,onStartConnection:Sn,highlightedDots:Ne?.neuronId===N.id?[Ne.direction]:[],isGlowing:y===N.id},N.id))]}),Y.jsxs("div",{className:"button-stack",children:[Y.jsx("div",{className:"button-dense",children:a.some(N=>N.type==="input")&&a.some(N=>N.type==="hidden")&&ml("dense","Dense Connect",Ga)}),Y.jsx("div",{className:"button-container",children:[{type:"input",label:"Add Input"},{type:"hidden",label:"Add Hidden"},...c?Array.from({length:f-1},(N,P)=>({type:`hidden${P+2}`,label:`Add Hidden ${P+2}`})):[],{type:"output",label:"Add Output"}].map(({type:N,label:P})=>ml(N,P))})]})]}),Y.jsxs("div",{className:"right-panel",children:[Y.jsx(Jp,{title:"Hidden Layer Weights",inputLabels:ma,neuronLabels:be,weights:V,biases:X,onWeightChange:Fr,onBiasChange:Wr,onHeaderChange:Ki,showSaveLoad:!0,onSave:hl,onLoad:Ya,onCellHover:Ji}),xn.length>0&&Ln.length>0&&Y.jsx(Jp,{title:"Output Layer Weights",inputLabels:be,neuronLabels:cn,weights:K,biases:W,onWeightChange:Ye,onBiasChange:$r,onHeaderChange:Ki,showSaveLoad:!1,onCellHover:Ji})]})]})})}Qb.createRoot(document.getElementById("root")).render(Y.jsx(Z.StrictMode,{children:Y.jsx(nT,{})}));
