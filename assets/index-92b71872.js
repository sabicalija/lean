(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Zs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ne={},Zt=[],Me=()=>{},iu=()=>!1,ou=/^on[^a-z]/,Nr=t=>ou.test(t),ei=t=>t.startsWith("onUpdate:"),fe=Object.assign,ti=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},au=Object.prototype.hasOwnProperty,K=(t,e)=>au.call(t,e),F=Array.isArray,en=t=>Mr(t)==="[object Map]",Aa=t=>Mr(t)==="[object Set]",B=t=>typeof t=="function",ue=t=>typeof t=="string",ni=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",Ca=t=>(se(t)||B(t))&&B(t.then)&&B(t.catch),Pa=Object.prototype.toString,Mr=t=>Pa.call(t),cu=t=>Mr(t).slice(8,-1),Oa=t=>Mr(t)==="[object Object]",ri=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cr=Zs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lu=/-(\w)/g,ze=Lr(t=>t.replace(lu,(e,n)=>n?n.toUpperCase():"")),uu=/\B([A-Z])/g,fn=Lr(t=>t.replace(uu,"-$1").toLowerCase()),xr=Lr(t=>t.charAt(0).toUpperCase()+t.slice(1)),es=Lr(t=>t?`on${xr(t)}`:""),xt=(t,e)=>!Object.is(t,e),lr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_r=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ss=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ki;const Rs=()=>Ki||(Ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function si(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?pu(r):si(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ue(t)||se(t))return t}const fu=/;(?![^(]*\))/g,du=/:([^]+)/,hu=/\/\*[^]*?\*\//g;function pu(t){const e={};return t.replace(hu,"").split(fu).forEach(n=>{if(n){const r=n.split(du);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ii(t){let e="";if(ue(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=ii(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mu=Zs(gu);function ka(t){return!!t||t===""}const pv=t=>ue(t)?t:t==null?"":F(t)||se(t)&&(t.toString===Pa||!B(t.toString))?JSON.stringify(t,Da,2):String(t),Da=(t,e)=>e&&e.__v_isRef?Da(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Aa(e)?{[`Set(${e.size})`]:[...e.values()]}:se(e)&&!F(e)&&!Oa(e)?String(e):e;let Te;class Na{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!e&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Te;try{return Te=this,e()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ma(t){return new Na(t)}function _u(t,e=Te){e&&e.active&&e.effects.push(t)}function La(){return Te}function yu(t){Te&&Te.cleanups.push(t)}const oi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xa=t=>(t.w&Et)>0,Ua=t=>(t.n&Et)>0,vu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Et},wu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];xa(s)&&!Ua(s)?s.delete(t):e[n++]=s,s.w&=~Et,s.n&=~Et}e.length=n}},yr=new WeakMap;let vn=0,Et=1;const As=30;let De;const Nt=Symbol(""),Cs=Symbol("");class ai{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_u(this,r)}run(){if(!this.active)return this.fn();let e=De,n=_t;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=De,De=this,_t=!0,Et=1<<++vn,vn<=As?vu(this):zi(this),this.fn()}finally{vn<=As&&wu(this),Et=1<<--vn,De=this.parent,_t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(zi(this),this.onStop&&this.onStop(),this.active=!1)}}function zi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _t=!0;const Fa=[];function dn(){Fa.push(_t),_t=!1}function hn(){const t=Fa.pop();_t=t===void 0?!0:t}function be(t,e,n){if(_t&&De){let r=yr.get(t);r||yr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=oi()),$a(s)}}function $a(t,e){let n=!1;vn<=As?Ua(t)||(t.n|=Et,n=!xa(t)):n=!t.has(De),n&&(t.add(De),De.deps.push(t))}function tt(t,e,n,r,s,i){const o=yr.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?ri(n)&&c.push(o.get("length")):(c.push(o.get(Nt)),en(t)&&c.push(o.get(Cs)));break;case"delete":F(t)||(c.push(o.get(Nt)),en(t)&&c.push(o.get(Cs)));break;case"set":en(t)&&c.push(o.get(Nt));break}if(c.length===1)c[0]&&Ps(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);Ps(oi(a))}}function Ps(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&qi(r);for(const r of n)r.computed||qi(r)}function qi(t,e){(t!==De||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function bu(t,e){var n;return(n=yr.get(t))==null?void 0:n.get(e)}const Iu=Zs("__proto__,__v_isRef,__isVue"),Ba=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ni)),Gi=Eu();function Eu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=z(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){dn();const r=z(this)[e].apply(this,n);return hn(),r}}),t}function Tu(t){const e=z(this);return be(e,"has",t),e.hasOwnProperty(t)}class ja{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?Uu:Ka:i?Wa:Va).get(e))return e;const o=F(e);if(!s){if(o&&K(Gi,n))return Reflect.get(Gi,n,r);if(n==="hasOwnProperty")return Tu}const c=Reflect.get(e,n,r);return(ni(n)?Ba.has(n):Iu(n))||(s||be(e,"get",n),i)?c:ie(c)?o&&ri(n)?c:c.value:se(c)?s?qa(c):zn(c):c}}class Ha extends ja{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(on(i)&&ie(i)&&!ie(r))return!1;if(!this._shallow&&(!vr(r)&&!on(r)&&(i=z(i),r=z(r)),!F(e)&&ie(i)&&!ie(r)))return i.value=r,!0;const o=F(e)&&ri(n)?Number(n)<e.length:K(e,n),c=Reflect.set(e,n,r,s);return e===z(s)&&(o?xt(r,i)&&tt(e,"set",n,r):tt(e,"add",n,r)),c}deleteProperty(e,n){const r=K(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ni(n)||!Ba.has(n))&&be(e,"has",n),r}ownKeys(e){return be(e,"iterate",F(e)?"length":Nt),Reflect.ownKeys(e)}}class Su extends ja{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ru=new Ha,Au=new Su,Cu=new Ha(!0),ci=t=>t,Ur=t=>Reflect.getPrototypeOf(t);function er(t,e,n=!1,r=!1){t=t.__v_raw;const s=z(t),i=z(e);n||(xt(e,i)&&be(s,"get",e),be(s,"get",i));const{has:o}=Ur(s),c=r?ci:n?fi:Nn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function tr(t,e=!1){const n=this.__v_raw,r=z(n),s=z(t);return e||(xt(t,s)&&be(r,"has",t),be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function nr(t,e=!1){return t=t.__v_raw,!e&&be(z(t),"iterate",Nt),Reflect.get(t,"size",t)}function Ji(t){t=z(t);const e=z(this);return Ur(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function Yi(t,e){e=z(e);const n=z(this),{has:r,get:s}=Ur(n);let i=r.call(n,t);i||(t=z(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?xt(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function Xi(t){const e=z(this),{has:n,get:r}=Ur(e);let s=n.call(e,t);s||(t=z(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&tt(e,"delete",t,void 0),i}function Qi(){const t=z(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function rr(t,e){return function(r,s){const i=this,o=i.__v_raw,c=z(o),a=e?ci:t?fi:Nn;return!t&&be(c,"iterate",Nt),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function sr(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=en(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?ci:e?fi:Nn;return!e&&be(i,"iterate",a?Cs:Nt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return t==="delete"?!1:this}}function Pu(){const t={get(i){return er(this,i)},get size(){return nr(this)},has:tr,add:Ji,set:Yi,delete:Xi,clear:Qi,forEach:rr(!1,!1)},e={get(i){return er(this,i,!1,!0)},get size(){return nr(this)},has:tr,add:Ji,set:Yi,delete:Xi,clear:Qi,forEach:rr(!1,!0)},n={get(i){return er(this,i,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:rr(!0,!1)},r={get(i){return er(this,i,!0,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),e[i]=sr(i,!1,!0),r[i]=sr(i,!0,!0)}),[t,n,e,r]}const[Ou,ku,Du,Nu]=Pu();function li(t,e){const n=e?t?Nu:Du:t?ku:Ou;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Mu={get:li(!1,!1)},Lu={get:li(!1,!0)},xu={get:li(!0,!1)},Va=new WeakMap,Wa=new WeakMap,Ka=new WeakMap,Uu=new WeakMap;function Fu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $u(t){return t.__v_skip||!Object.isExtensible(t)?0:Fu(cu(t))}function zn(t){return on(t)?t:ui(t,!1,Ru,Mu,Va)}function za(t){return ui(t,!1,Cu,Lu,Wa)}function qa(t){return ui(t,!0,Au,xu,Ka)}function ui(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$u(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function yt(t){return on(t)?yt(t.__v_raw):!!(t&&t.__v_isReactive)}function on(t){return!!(t&&t.__v_isReadonly)}function vr(t){return!!(t&&t.__v_isShallow)}function Ga(t){return yt(t)||on(t)}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Fr(t){return _r(t,"__v_skip",!0),t}const Nn=t=>se(t)?zn(t):t,fi=t=>se(t)?qa(t):t;function Ja(t){_t&&De&&(t=z(t),$a(t.dep||(t.dep=oi())))}function Ya(t,e){t=z(t);const n=t.dep;n&&Ps(n)}function ie(t){return!!(t&&t.__v_isRef===!0)}function di(t){return Xa(t,!1)}function Bu(t){return Xa(t,!0)}function Xa(t,e){return ie(t)?t:new ju(t,e)}class ju{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:z(e),this._value=n?e:Nn(e)}get value(){return Ja(this),this._value}set value(e){const n=this.__v_isShallow||vr(e)||on(e);e=n?e:z(e),xt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Nn(e),Ya(this))}}function tn(t){return ie(t)?t.value:t}const Hu={get:(t,e,n)=>tn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ie(s)&&!ie(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qa(t){return yt(t)?t:new Proxy(t,Hu)}function Vu(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=Ku(t,n);return e}class Wu{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return bu(z(this._object),this._key)}}function Ku(t,e,n){const r=t[e];return ie(r)?r:new Wu(t,e,n)}class zu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ai(e,()=>{this._dirty||(this._dirty=!0,Ya(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=z(this);return Ja(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qu(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=Me):(r=t.get,s=t.set),new zu(r,s,i||!s,n)}function vt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){$r(i,e,n)}return s}function Le(t,e,n,r){if(B(t)){const i=vt(t,e,n,r);return i&&Ca(i)&&i.catch(o=>{$r(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Le(t[i],e,n,r));return s}function $r(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){vt(a,null,10,[t,o,c]);return}}Gu(t,n,s,r)}function Gu(t,e,n,r=!0){console.error(t)}let Mn=!1,Os=!1;const pe=[];let He=0;const nn=[];let Xe=null,Pt=0;const Za=Promise.resolve();let hi=null;function pi(t){const e=hi||Za;return t?e.then(this?t.bind(this):t):e}function Ju(t){let e=He+1,n=pe.length;for(;e<n;){const r=e+n>>>1;Ln(pe[r])<t?e=r+1:n=r}return e}function gi(t){(!pe.length||!pe.includes(t,Mn&&t.allowRecurse?He+1:He))&&(t.id==null?pe.push(t):pe.splice(Ju(t.id),0,t),ec())}function ec(){!Mn&&!Os&&(Os=!0,hi=Za.then(nc))}function Yu(t){const e=pe.indexOf(t);e>He&&pe.splice(e,1)}function Xu(t){F(t)?nn.push(...t):(!Xe||!Xe.includes(t,t.allowRecurse?Pt+1:Pt))&&nn.push(t),ec()}function Zi(t,e=Mn?He+1:0){for(;e<pe.length;e++){const n=pe[e];n&&n.pre&&(pe.splice(e,1),e--,n())}}function tc(t){if(nn.length){const e=[...new Set(nn)];if(nn.length=0,Xe){Xe.push(...e);return}for(Xe=e,Xe.sort((n,r)=>Ln(n)-Ln(r)),Pt=0;Pt<Xe.length;Pt++)Xe[Pt]();Xe=null,Pt=0}}const Ln=t=>t.id==null?1/0:t.id,Qu=(t,e)=>{const n=Ln(t)-Ln(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nc(t){Os=!1,Mn=!0,pe.sort(Qu);const e=Me;try{for(He=0;He<pe.length;He++){const n=pe[He];n&&n.active!==!1&&vt(n,null,14)}}finally{He=0,pe.length=0,tc(),Mn=!1,hi=null,(pe.length||nn.length)&&nc()}}function Zu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ne;p&&(s=n.map(_=>ue(_)?_.trim():_)),h&&(s=n.map(Ss))}let c,a=r[c=es(e)]||r[c=es(ze(e))];!a&&i&&(a=r[c=es(fn(e))]),a&&Le(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Le(l,t,6,s)}}function rc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=l=>{const u=rc(l,e,!0);u&&(c=!0,fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(se(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):fe(o,i),se(t)&&r.set(t,o),o)}function Br(t,e){return!t||!Nr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,fn(e))||K(t,e))}let Se=null,jr=null;function wr(t){const e=Se;return Se=t,jr=t&&t.type.__scopeId||null,e}function gv(t){jr=t}function mv(){jr=null}function wn(t,e=Se,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fo(-1);const i=wr(e);let o;try{o=t(...s)}finally{wr(i),r._d&&fo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ts(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:h,data:p,setupState:_,ctx:S,inheritAttrs:C}=t;let x,O;const D=wr(t);try{if(n.shapeFlag&4){const N=s||r;x=je(u.call(N,N,h,i,_,p,S)),O=a}else{const N=e;x=je(N.length>1?N(i,{attrs:a,slots:c,emit:l}):N(i,null)),O=e.props?a:ef(a)}}catch(N){An.length=0,$r(N,t,1),x=ge(Un)}let j=x;if(O&&C!==!1){const N=Object.keys(O),{shapeFlag:G}=j;N.length&&G&7&&(o&&N.some(ei)&&(O=tf(O,o)),j=an(j,O))}return n.dirs&&(j=an(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),x=j,wr(D),x}const ef=t=>{let e;for(const n in t)(n==="class"||n==="style"||Nr(n))&&((e||(e={}))[n]=t[n]);return e},tf=(t,e)=>{const n={};for(const r in t)(!ei(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?eo(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Br(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?eo(r,o,l):!0:!!o;return!1}function eo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Br(n,i))return!0}return!1}function rf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sf=t=>t.__isSuspense;function of(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Xu(t)}const ir={};function Sn(t,e,n){return sc(t,e,n)}function sc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ne){var c;const a=La()===((c=le)==null?void 0:c.scope)?le:null;let l,u=!1,h=!1;if(ie(t)?(l=()=>t.value,u=vr(t)):yt(t)?(l=()=>t,r=!0):F(t)?(h=!0,u=t.some(N=>yt(N)||vr(N)),l=()=>t.map(N=>{if(ie(N))return N.value;if(yt(N))return kt(N);if(B(N))return vt(N,a,2)})):B(t)?e?l=()=>vt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return p&&p(),Le(t,a,3,[_])}:l=Me,e&&r){const N=l;l=()=>kt(N())}let p,_=N=>{p=D.onStop=()=>{vt(N,a,4)}},S;if($n)if(_=Me,e?n&&Le(e,a,3,[l(),h?[]:void 0,_]):l(),s==="sync"){const N=rd();S=N.__watcherHandles||(N.__watcherHandles=[])}else return Me;let C=h?new Array(t.length).fill(ir):ir;const x=()=>{if(D.active)if(e){const N=D.run();(r||u||(h?N.some((G,oe)=>xt(G,C[oe])):xt(N,C)))&&(p&&p(),Le(e,a,3,[N,C===ir?void 0:h&&C[0]===ir?[]:C,_]),C=N)}else D.run()};x.allowRecurse=!!e;let O;s==="sync"?O=x:s==="post"?O=()=>ve(x,a&&a.suspense):(x.pre=!0,a&&(x.id=a.uid),O=()=>gi(x));const D=new ai(l,O);e?n?x():C=D.run():s==="post"?ve(D.run.bind(D),a&&a.suspense):D.run();const j=()=>{D.stop(),a&&a.scope&&ti(a.scope.effects,D)};return S&&S.push(j),j}function af(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?ic(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=le;cn(this);const c=sc(s,i.bind(r),n);return o?cn(o):Mt(),c}function ic(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function kt(t,e){if(!se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ie(t))kt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)kt(t[n],e);else if(Aa(t)||en(t))t.forEach(n=>{kt(n,e)});else if(Oa(t))for(const n in t)kt(t[n],e);return t}function _v(t,e){const n=Se;if(n===null)return t;const r=Kr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,c,a,l=ne]=e[i];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&kt(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return t}function Rt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(dn(),Le(a,n,8,[t.el,c,t,e]),hn())}}/*! #__NO_SIDE_EFFECTS__ */function mi(t,e){return B(t)?(()=>fe({name:t.name},e,{setup:t}))():t}const ur=t=>!!t.type.__asyncLoader,oc=t=>t.type.__isKeepAlive;function cf(t,e){ac(t,"a",e)}function lf(t,e){ac(t,"da",e)}function ac(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Hr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)oc(s.parent.vnode)&&uf(r,e,n,s),s=s.parent}}function uf(t,e,n,r){const s=Hr(e,t,r,!0);cc(()=>{ti(r[e],s)},n)}function Hr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;dn(),cn(n);const c=Le(e,n,t,o);return Mt(),hn(),c});return r?s.unshift(i):s.push(i),i}}const st=t=>(e,n=le)=>(!$n||t==="sp")&&Hr(t,(...r)=>e(...r),n),ff=st("bm"),df=st("m"),hf=st("bu"),pf=st("u"),gf=st("bum"),cc=st("um"),mf=st("sp"),_f=st("rtg"),yf=st("rtc");function vf(t,e=le){Hr("ec",t,e)}const lc="components";function to(t,e){return bf(lc,t,!0,e)||t}const wf=Symbol.for("v-ndc");function bf(t,e,n=!0,r=!1){const s=Se||le;if(s){const i=s.type;if(t===lc){const c=ed(i,!1);if(c&&(c===e||c===ze(e)||c===xr(ze(e))))return i}const o=no(s[t]||i[t],e)||no(s.appContext[t],e);return!o&&r?i:o}}function no(t,e){return t&&(t[e]||t[ze(e)]||t[xr(ze(e))])}const ks=t=>t?vc(t)?Kr(t)||t.proxy:ks(t.parent):null,Rn=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ks(t.parent),$root:t=>ks(t.root),$emit:t=>t.emit,$options:t=>_i(t),$forceUpdate:t=>t.f||(t.f=()=>gi(t.update)),$nextTick:t=>t.n||(t.n=pi.bind(t.proxy)),$watch:t=>af.bind(t)}),ns=(t,e)=>t!==ne&&!t.__isScriptSetup&&K(t,e),If={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ns(r,e))return o[e]=1,r[e];if(s!==ne&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==ne&&K(n,e))return o[e]=4,n[e];Ds&&(o[e]=0)}}const u=Rn[e];let h,p;if(u)return e==="$attrs"&&be(t,"get",e),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==ne&&K(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ns(s,e)?(s[e]=n,!0):r!==ne&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ne&&K(t,o)||ns(e,o)||(c=i[0])&&K(c,o)||K(r,o)||K(Rn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ro(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ds=!0;function Ef(t){const e=_i(t),n=t.proxy,r=t.ctx;Ds=!1,e.beforeCreate&&so(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:_,updated:S,activated:C,deactivated:x,beforeDestroy:O,beforeUnmount:D,destroyed:j,unmounted:N,render:G,renderTracked:oe,renderTriggered:ce,errorCaptured:W,serverPrefetch:H,expose:re,inheritAttrs:de,components:Ie,directives:Ae,filters:St}=e;if(l&&Tf(l,r,null),o)for(const Z in o){const J=o[Z];B(J)&&(r[Z]=J.bind(n))}if(s){const Z=s.call(n,n);se(Z)&&(t.data=zn(Z))}if(Ds=!0,i)for(const Z in i){const J=i[Z],Je=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):Me,ot=!B(J)&&B(J.set)?J.set.bind(n):Me,Fe=Pe({get:Je,set:ot});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:ye=>Fe.value=ye})}if(c)for(const Z in c)uc(c[Z],r,n,Z);if(a){const Z=B(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(J=>{fr(J,Z[J])})}u&&so(u,t,"c");function q(Z,J){F(J)?J.forEach(Je=>Z(Je.bind(n))):J&&Z(J.bind(n))}if(q(ff,h),q(df,p),q(hf,_),q(pf,S),q(cf,C),q(lf,x),q(vf,W),q(yf,oe),q(_f,ce),q(gf,D),q(cc,N),q(mf,H),F(re))if(re.length){const Z=t.exposed||(t.exposed={});re.forEach(J=>{Object.defineProperty(Z,J,{get:()=>n[J],set:Je=>n[J]=Je})})}else t.exposed||(t.exposed={});G&&t.render===Me&&(t.render=G),de!=null&&(t.inheritAttrs=de),Ie&&(t.components=Ie),Ae&&(t.directives=Ae)}function Tf(t,e,n=Me){F(t)&&(t=Ns(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=xe(s.from||r,s.default,!0):i=xe(s.from||r):i=xe(s),ie(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function so(t,e,n){Le(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function uc(t,e,n,r){const s=r.includes(".")?ic(n,r):()=>n[r];if(ue(t)){const i=e[t];B(i)&&Sn(s,i)}else if(B(t))Sn(s,t.bind(n));else if(se(t))if(F(t))t.forEach(i=>uc(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Sn(s,i,t)}}function _i(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>br(a,l,o,!0)),br(a,e,o)),se(e)&&i.set(e,a),a}function br(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&br(t,i,n,!0),s&&s.forEach(o=>br(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Sf[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Sf={data:io,props:oo,emits:oo,methods:bn,computed:bn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:bn,directives:bn,watch:Af,provide:io,inject:Rf};function io(t,e){return e?t?function(){return fe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Rf(t,e){return bn(Ns(t),Ns(e))}function Ns(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?fe(Object.create(null),t,e):e}function oo(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:fe(Object.create(null),ro(t),ro(e??{})):e}function Af(t,e){if(!t)return e;if(!e)return t;const n=fe(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function fc(){return{app:null,config:{isNativeTag:iu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cf=0;function Pf(t,e){return function(r,s=null){B(r)||(r=fe({},r)),s!=null&&!se(s)&&(s=null);const i=fc(),o=new WeakSet;let c=!1;const a=i.app={_uid:Cf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(a,...u)):B(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const p=ge(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,Kr(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){xn=a;try{return l()}finally{xn=null}}};return a}}let xn=null;function fr(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function xe(t,e,n=!1){const r=le||Se;if(r||xn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function Of(){return!!(le||Se||xn)}function kf(t,e,n,r=!1){const s={},i={};_r(i,Wr,1),t.propsDefaults=Object.create(null),dc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:za(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Df(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=z(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Br(t.emitsOptions,p))continue;const _=e[p];if(a)if(K(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const S=ze(p);s[S]=Ms(a,c,S,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{dc(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!K(e,h)&&((u=fn(h))===h||!K(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ms(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!K(e,h))&&(delete i[h],l=!0)}l&&tt(t,"set","$attrs")}function dc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(cr(a))continue;const l=e[a];let u;s&&K(s,u=ze(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Br(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=z(n),l=c||ne;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ms(s,a,h,l[h],t,!K(l,h))}}return o}function Ms(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=K(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(cn(s),r=l[n]=a.call(null,e),Mt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===fn(n))&&(r=!0))}return r}function hc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const u=h=>{a=!0;const[p,_]=hc(h,e,!0);fe(o,p),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return se(t)&&r.set(t,Zt),Zt;if(F(i))for(let u=0;u<i.length;u++){const h=ze(i[u]);ao(h)&&(o[h]=ne)}else if(i)for(const u in i){const h=ze(u);if(ao(h)){const p=i[u],_=o[h]=F(p)||B(p)?{type:p}:fe({},p);if(_){const S=uo(Boolean,_.type),C=uo(String,_.type);_[0]=S>-1,_[1]=C<0||S<C,(S>-1||K(_,"default"))&&c.push(h)}}}const l=[o,c];return se(t)&&r.set(t,l),l}function ao(t){return t[0]!=="$"}function co(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function lo(t,e){return co(t)===co(e)}function uo(t,e){return F(e)?e.findIndex(n=>lo(n,t)):B(e)&&lo(e,t)?0:-1}const pc=t=>t[0]==="_"||t==="$stable",yi=t=>F(t)?t.map(je):[je(t)],Nf=(t,e,n)=>{if(e._n)return e;const r=wn((...s)=>yi(e(...s)),n);return r._c=!1,r},gc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(pc(s))continue;const i=t[s];if(B(i))e[s]=Nf(s,i,r);else if(i!=null){const o=yi(i);e[s]=()=>o}}},mc=(t,e)=>{const n=yi(e);t.slots.default=()=>n},Mf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=z(e),_r(e,"_",n)):gc(e,t.slots={})}else t.slots={},e&&mc(t,e);_r(t.slots,Wr,1)},Lf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(fe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,gc(e,s)),o=e}else e&&(mc(t,e),o={default:1});if(i)for(const c in s)!pc(c)&&o[c]==null&&delete s[c]};function Ls(t,e,n,r,s=!1){if(F(t)){t.forEach((p,_)=>Ls(p,e&&(F(e)?e[_]:e),n,r,s));return}if(ur(r)&&!s)return;const i=r.shapeFlag&4?Kr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===ne?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(ue(l)?(u[l]=null,K(h,l)&&(h[l]=null)):ie(l)&&(l.value=null)),B(a))vt(a,c,12,[o,u]);else{const p=ue(a),_=ie(a);if(p||_){const S=()=>{if(t.f){const C=p?K(h,a)?h[a]:u[a]:a.value;s?F(C)&&ti(C,i):F(C)?C.includes(i)||C.push(i):p?(u[a]=[i],K(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else p?(u[a]=o,K(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,ve(S,n)):S()}}}const ve=of;function xf(t){return Uf(t)}function Uf(t,e){const n=Rs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:_=Me,insertStaticContent:S}=t,C=(f,d,g,m=null,v=null,w=null,R=!1,I=null,E=!!d.dynamicChildren)=>{if(f===d)return;f&&!_n(f,d)&&(m=y(f),ye(f,v,w,!0),f=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:b,ref:M,shapeFlag:P}=d;switch(b){case Vr:x(f,d,g,m);break;case Un:O(f,d,g,m);break;case rs:f==null&&D(d,g,m,R);break;case Qe:Ie(f,d,g,m,v,w,R,I,E);break;default:P&1?G(f,d,g,m,v,w,R,I,E):P&6?Ae(f,d,g,m,v,w,R,I,E):(P&64||P&128)&&b.process(f,d,g,m,v,w,R,I,E,T)}M!=null&&v&&Ls(M,f&&f.ref,w,d||f,!d)},x=(f,d,g,m)=>{if(f==null)r(d.el=c(d.children),g,m);else{const v=d.el=f.el;d.children!==f.children&&l(v,d.children)}},O=(f,d,g,m)=>{f==null?r(d.el=a(d.children||""),g,m):d.el=f.el},D=(f,d,g,m)=>{[f.el,f.anchor]=S(f.children,d,g,m,f.el,f.anchor)},j=({el:f,anchor:d},g,m)=>{let v;for(;f&&f!==d;)v=p(f),r(f,g,m),f=v;r(d,g,m)},N=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},G=(f,d,g,m,v,w,R,I,E)=>{R=R||d.type==="svg",f==null?oe(d,g,m,v,w,R,I,E):H(f,d,v,w,R,I,E)},oe=(f,d,g,m,v,w,R,I)=>{let E,b;const{type:M,props:P,shapeFlag:L,transition:$,dirs:V}=f;if(E=f.el=o(f.type,w,P&&P.is,P),L&8?u(E,f.children):L&16&&W(f.children,E,null,m,v,w&&M!=="foreignObject",R,I),V&&Rt(f,null,m,"created"),ce(E,f,f.scopeId,R,m),P){for(const Q in P)Q!=="value"&&!cr(Q)&&i(E,Q,null,P[Q],w,f.children,m,v,he);"value"in P&&i(E,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Be(b,m,f)}V&&Rt(f,null,m,"beforeMount");const te=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;te&&$.beforeEnter(E),r(E,d,g),((b=P&&P.onVnodeMounted)||te||V)&&ve(()=>{b&&Be(b,m,f),te&&$.enter(E),V&&Rt(f,null,m,"mounted")},v)},ce=(f,d,g,m,v)=>{if(g&&_(f,g),m)for(let w=0;w<m.length;w++)_(f,m[w]);if(v){let w=v.subTree;if(d===w){const R=v.vnode;ce(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},W=(f,d,g,m,v,w,R,I,E=0)=>{for(let b=E;b<f.length;b++){const M=f[b]=I?ft(f[b]):je(f[b]);C(null,M,d,g,m,v,w,R,I)}},H=(f,d,g,m,v,w,R)=>{const I=d.el=f.el;let{patchFlag:E,dynamicChildren:b,dirs:M}=d;E|=f.patchFlag&16;const P=f.props||ne,L=d.props||ne;let $;g&&At(g,!1),($=L.onVnodeBeforeUpdate)&&Be($,g,d,f),M&&Rt(d,f,g,"beforeUpdate"),g&&At(g,!0);const V=v&&d.type!=="foreignObject";if(b?re(f.dynamicChildren,b,I,g,m,V,w):R||J(f,d,I,null,g,m,V,w,!1),E>0){if(E&16)de(I,d,P,L,g,m,v);else if(E&2&&P.class!==L.class&&i(I,"class",null,L.class,v),E&4&&i(I,"style",P.style,L.style,v),E&8){const te=d.dynamicProps;for(let Q=0;Q<te.length;Q++){const ae=te[Q],ke=P[ae],qt=L[ae];(qt!==ke||ae==="value")&&i(I,ae,ke,qt,v,f.children,g,m,he)}}E&1&&f.children!==d.children&&u(I,d.children)}else!R&&b==null&&de(I,d,P,L,g,m,v);(($=L.onVnodeUpdated)||M)&&ve(()=>{$&&Be($,g,d,f),M&&Rt(d,f,g,"updated")},m)},re=(f,d,g,m,v,w,R)=>{for(let I=0;I<d.length;I++){const E=f[I],b=d[I],M=E.el&&(E.type===Qe||!_n(E,b)||E.shapeFlag&70)?h(E.el):g;C(E,b,M,null,m,v,w,R,!0)}},de=(f,d,g,m,v,w,R)=>{if(g!==m){if(g!==ne)for(const I in g)!cr(I)&&!(I in m)&&i(f,I,g[I],null,R,d.children,v,w,he);for(const I in m){if(cr(I))continue;const E=m[I],b=g[I];E!==b&&I!=="value"&&i(f,I,b,E,R,d.children,v,w,he)}"value"in m&&i(f,"value",g.value,m.value)}},Ie=(f,d,g,m,v,w,R,I,E)=>{const b=d.el=f?f.el:c(""),M=d.anchor=f?f.anchor:c("");let{patchFlag:P,dynamicChildren:L,slotScopeIds:$}=d;$&&(I=I?I.concat($):$),f==null?(r(b,g,m),r(M,g,m),W(d.children,g,M,v,w,R,I,E)):P>0&&P&64&&L&&f.dynamicChildren?(re(f.dynamicChildren,L,g,v,w,R,I),(d.key!=null||v&&d===v.subTree)&&_c(f,d,!0)):J(f,d,g,M,v,w,R,I,E)},Ae=(f,d,g,m,v,w,R,I,E)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?v.ctx.activate(d,g,m,R,E):St(d,g,m,v,w,R,E):Ce(f,d,E)},St=(f,d,g,m,v,w,R)=>{const I=f.component=Jf(f,m,v);if(oc(f)&&(I.ctx.renderer=T),Yf(I),I.asyncDep){if(v&&v.registerDep(I,q),!f.el){const E=I.subTree=ge(Un);O(null,E,d,g)}return}q(I,f,d,g,v,w,R)},Ce=(f,d,g)=>{const m=d.component=f.component;if(nf(f,d,g))if(m.asyncDep&&!m.asyncResolved){Z(m,d,g);return}else m.next=d,Yu(m.update),m.update();else d.el=f.el,m.vnode=d},q=(f,d,g,m,v,w,R)=>{const I=()=>{if(f.isMounted){let{next:M,bu:P,u:L,parent:$,vnode:V}=f,te=M,Q;At(f,!1),M?(M.el=V.el,Z(f,M,R)):M=V,P&&lr(P),(Q=M.props&&M.props.onVnodeBeforeUpdate)&&Be(Q,$,M,V),At(f,!0);const ae=ts(f),ke=f.subTree;f.subTree=ae,C(ke,ae,h(ke.el),y(ke),f,v,w),M.el=ae.el,te===null&&rf(f,ae.el),L&&ve(L,v),(Q=M.props&&M.props.onVnodeUpdated)&&ve(()=>Be(Q,$,M,V),v)}else{let M;const{el:P,props:L}=d,{bm:$,m:V,parent:te}=f,Q=ur(d);if(At(f,!1),$&&lr($),!Q&&(M=L&&L.onVnodeBeforeMount)&&Be(M,te,d),At(f,!0),P&&Y){const ae=()=>{f.subTree=ts(f),Y(P,f.subTree,f,v,null)};Q?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ae()):ae()}else{const ae=f.subTree=ts(f);C(null,ae,g,m,f,v,w),d.el=ae.el}if(V&&ve(V,v),!Q&&(M=L&&L.onVnodeMounted)){const ae=d;ve(()=>Be(M,te,ae),v)}(d.shapeFlag&256||te&&ur(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&ve(f.a,v),f.isMounted=!0,d=g=m=null}},E=f.effect=new ai(I,()=>gi(b),f.scope),b=f.update=()=>E.run();b.id=f.uid,At(f,!0),b()},Z=(f,d,g)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,Df(f,d.props,m,g),Lf(f,d.children,g),dn(),Zi(),hn()},J=(f,d,g,m,v,w,R,I,E=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,P=d.children,{patchFlag:L,shapeFlag:$}=d;if(L>0){if(L&128){ot(b,P,g,m,v,w,R,I,E);return}else if(L&256){Je(b,P,g,m,v,w,R,I,E);return}}$&8?(M&16&&he(b,v,w),P!==b&&u(g,P)):M&16?$&16?ot(b,P,g,m,v,w,R,I,E):he(b,v,w,!0):(M&8&&u(g,""),$&16&&W(P,g,m,v,w,R,I,E))},Je=(f,d,g,m,v,w,R,I,E)=>{f=f||Zt,d=d||Zt;const b=f.length,M=d.length,P=Math.min(b,M);let L;for(L=0;L<P;L++){const $=d[L]=E?ft(d[L]):je(d[L]);C(f[L],$,g,null,v,w,R,I,E)}b>M?he(f,v,w,!0,!1,P):W(d,g,m,v,w,R,I,E,P)},ot=(f,d,g,m,v,w,R,I,E)=>{let b=0;const M=d.length;let P=f.length-1,L=M-1;for(;b<=P&&b<=L;){const $=f[b],V=d[b]=E?ft(d[b]):je(d[b]);if(_n($,V))C($,V,g,null,v,w,R,I,E);else break;b++}for(;b<=P&&b<=L;){const $=f[P],V=d[L]=E?ft(d[L]):je(d[L]);if(_n($,V))C($,V,g,null,v,w,R,I,E);else break;P--,L--}if(b>P){if(b<=L){const $=L+1,V=$<M?d[$].el:m;for(;b<=L;)C(null,d[b]=E?ft(d[b]):je(d[b]),g,V,v,w,R,I,E),b++}}else if(b>L)for(;b<=P;)ye(f[b],v,w,!0),b++;else{const $=b,V=b,te=new Map;for(b=V;b<=L;b++){const Ee=d[b]=E?ft(d[b]):je(d[b]);Ee.key!=null&&te.set(Ee.key,b)}let Q,ae=0;const ke=L-V+1;let qt=!1,Hi=0;const mn=new Array(ke);for(b=0;b<ke;b++)mn[b]=0;for(b=$;b<=P;b++){const Ee=f[b];if(ae>=ke){ye(Ee,v,w,!0);continue}let $e;if(Ee.key!=null)$e=te.get(Ee.key);else for(Q=V;Q<=L;Q++)if(mn[Q-V]===0&&_n(Ee,d[Q])){$e=Q;break}$e===void 0?ye(Ee,v,w,!0):(mn[$e-V]=b+1,$e>=Hi?Hi=$e:qt=!0,C(Ee,d[$e],g,null,v,w,R,I,E),ae++)}const Vi=qt?Ff(mn):Zt;for(Q=Vi.length-1,b=ke-1;b>=0;b--){const Ee=V+b,$e=d[Ee],Wi=Ee+1<M?d[Ee+1].el:m;mn[b]===0?C(null,$e,g,Wi,v,w,R,I,E):qt&&(Q<0||b!==Vi[Q]?Fe($e,g,Wi,2):Q--)}}},Fe=(f,d,g,m,v=null)=>{const{el:w,type:R,transition:I,children:E,shapeFlag:b}=f;if(b&6){Fe(f.component.subTree,d,g,m);return}if(b&128){f.suspense.move(d,g,m);return}if(b&64){R.move(f,d,g,T);return}if(R===Qe){r(w,d,g);for(let P=0;P<E.length;P++)Fe(E[P],d,g,m);r(f.anchor,d,g);return}if(R===rs){j(f,d,g);return}if(m!==2&&b&1&&I)if(m===0)I.beforeEnter(w),r(w,d,g),ve(()=>I.enter(w),v);else{const{leave:P,delayLeave:L,afterLeave:$}=I,V=()=>r(w,d,g),te=()=>{P(w,()=>{V(),$&&$()})};L?L(w,V,te):te()}else r(w,d,g)},ye=(f,d,g,m=!1,v=!1)=>{const{type:w,props:R,ref:I,children:E,dynamicChildren:b,shapeFlag:M,patchFlag:P,dirs:L}=f;if(I!=null&&Ls(I,null,g,f,!0),M&256){d.ctx.deactivate(f);return}const $=M&1&&L,V=!ur(f);let te;if(V&&(te=R&&R.onVnodeBeforeUnmount)&&Be(te,d,f),M&6)Zn(f.component,g,m);else{if(M&128){f.suspense.unmount(g,m);return}$&&Rt(f,null,d,"beforeUnmount"),M&64?f.type.remove(f,d,g,v,T,m):b&&(w!==Qe||P>0&&P&64)?he(b,d,g,!1,!0):(w===Qe&&P&384||!v&&M&16)&&he(E,d,g),m&&Kt(f)}(V&&(te=R&&R.onVnodeUnmounted)||$)&&ve(()=>{te&&Be(te,d,f),$&&Rt(f,null,d,"unmounted")},g)},Kt=f=>{const{type:d,el:g,anchor:m,transition:v}=f;if(d===Qe){zt(g,m);return}if(d===rs){N(f);return}const w=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,E=()=>R(g,w);I?I(f.el,w,E):E()}else w()},zt=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},Zn=(f,d,g)=>{const{bum:m,scope:v,update:w,subTree:R,um:I}=f;m&&lr(m),v.stop(),w&&(w.active=!1,ye(R,f,d,g)),I&&ve(I,d),ve(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},he=(f,d,g,m=!1,v=!1,w=0)=>{for(let R=w;R<f.length;R++)ye(f[R],d,g,m,v)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),A=(f,d,g)=>{f==null?d._vnode&&ye(d._vnode,null,null,!0):C(d._vnode||null,f,d,null,null,null,g),Zi(),tc(),d._vnode=f},T={p:C,um:ye,m:Fe,r:Kt,mt:St,mc:W,pc:J,pbc:re,n:y,o:t};let k,Y;return e&&([k,Y]=e(T)),{render:A,hydrate:k,createApp:Pf(A,k)}}function At({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _c(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ft(s[i]),c.el=o.el),n||_c(o,c)),c.type===Vr&&(c.el=o.el)}}function Ff(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $f=t=>t.__isTeleport,Qe=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),Un=Symbol.for("v-cmt"),rs=Symbol.for("v-stc"),An=[];let Ne=null;function Bf(t=!1){An.push(Ne=t?null:[])}function jf(){An.pop(),Ne=An[An.length-1]||null}let Fn=1;function fo(t){Fn+=t}function Hf(t){return t.dynamicChildren=Fn>0?Ne||Zt:null,jf(),Fn>0&&Ne&&Ne.push(t),t}function Vf(t,e,n,r,s,i){return Hf(Ir(t,e,n,r,s,i,!0))}function xs(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const Wr="__vInternal",yc=({key:t})=>t??null,dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||ie(t)||B(t)?{i:Se,r:t,k:e,f:!!n}:t:null);function Ir(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yc(e),ref:e&&dr(e),scopeId:jr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return c?(vi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),Fn>0&&!o&&Ne&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ne.push(a),a}const ge=Wf;function Wf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wf)&&(t=Un),xs(t)){const c=an(t,e,!0);return n&&vi(c,n),Fn>0&&!i&&Ne&&(c.shapeFlag&6?Ne[Ne.indexOf(t)]=c:Ne.push(c)),c.patchFlag|=-2,c}if(td(t)&&(t=t.__vccOpts),e){e=Kf(e);let{class:c,style:a}=e;c&&!ue(c)&&(e.class=ii(c)),se(a)&&(Ga(a)&&!F(a)&&(a=fe({},a)),e.style=si(a))}const o=ue(t)?1:sf(t)?128:$f(t)?64:se(t)?4:B(t)?2:0;return Ir(t,e,n,r,s,o,i,!0)}function Kf(t){return t?Ga(t)||Wr in t?fe({},t):t:null}function an(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?zf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&yc(c),ref:e&&e.ref?n&&s?F(s)?s.concat(dr(e)):[s,dr(e)]:dr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function In(t=" ",e=0){return ge(Vr,null,t,e)}function je(t){return t==null||typeof t=="boolean"?ge(Un):F(t)?ge(Qe,null,t.slice()):typeof t=="object"?ft(t):ge(Vr,null,String(t))}function ft(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:an(t)}function vi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Wr in e)?e._ctx=Se:s===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[In(e)]):n=8);t.children=e,t.shapeFlag|=n}function zf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ii([e.class,r.class]));else if(s==="style")e.style=si([e.style,r.style]);else if(Nr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Be(t,e,n,r=null){Le(t,e,7,[n,r])}const qf=fc();let Gf=0;function Jf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qf,i={uid:Gf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Na(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hc(r,s),emitsOptions:rc(r,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zu.bind(null,i),t.ce&&t.ce(i),i}let le=null,wi,Gt,ho="__VUE_INSTANCE_SETTERS__";(Gt=Rs()[ho])||(Gt=Rs()[ho]=[]),Gt.push(t=>le=t),wi=t=>{Gt.length>1?Gt.forEach(e=>e(t)):Gt[0](t)};const cn=t=>{wi(t),t.scope.on()},Mt=()=>{le&&le.scope.off(),wi(null)};function vc(t){return t.vnode.shapeFlag&4}let $n=!1;function Yf(t,e=!1){$n=e;const{props:n,children:r}=t.vnode,s=vc(t);kf(t,n,s,e),Mf(t,r);const i=s?Xf(t,e):void 0;return $n=!1,i}function Xf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fr(new Proxy(t.ctx,If));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Zf(t):null;cn(t),dn();const i=vt(r,t,0,[t.props,s]);if(hn(),Mt(),Ca(i)){if(i.then(Mt,Mt),e)return i.then(o=>{po(t,o,e)}).catch(o=>{$r(o,t,0)});t.asyncDep=i}else po(t,i,e)}else wc(t,e)}function po(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=Qa(e)),wc(t,n)}let go;function wc(t,e,n){const r=t.type;if(!t.render){if(!e&&go&&!r.render){const s=r.template||_i(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=fe(fe({isCustomElement:i,delimiters:c},o),a);r.render=go(s,l)}}t.render=r.render||Me}{cn(t),dn();try{Ef(t)}finally{hn(),Mt()}}}function Qf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return be(t,"get","$attrs"),e[n]}}))}function Zf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Qf(t)},slots:t.slots,emit:t.emit,expose:e}}function Kr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qa(Fr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}}))}function ed(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function td(t){return B(t)&&"__vccOpts"in t}const Pe=(t,e)=>qu(t,e,$n);function bc(t,e,n){const r=arguments.length;return r===2?se(e)&&!F(e)?xs(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xs(n)&&(n=[n]),ge(t,e,n))}const nd=Symbol.for("v-scx"),rd=()=>xe(nd),sd="3.3.6",id="http://www.w3.org/2000/svg",Ot=typeof document<"u"?document:null,mo=Ot&&Ot.createElement("template"),od={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ot.createElementNS(id,t):Ot.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mo.innerHTML=r?`<svg>${t}</svg>`:t;const c=mo.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ad=Symbol("_vtc");function cd(t,e,n){const r=t[ad];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ld=Symbol("_vod");function ud(t,e,n){const r=t.style,s=ue(n);if(n&&!s){if(e&&!ue(e))for(const i in e)n[i]==null&&Us(r,i,"");for(const i in n)Us(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),ld in t&&(r.display=i)}}const _o=/\s*!important$/;function Us(t,e,n){if(F(n))n.forEach(r=>Us(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fd(t,e);_o.test(n)?t.setProperty(fn(r),n.replace(_o,""),"important"):t[r]=n}}const yo=["Webkit","Moz","ms"],ss={};function fd(t,e){const n=ss[e];if(n)return n;let r=ze(e);if(r!=="filter"&&r in t)return ss[e]=r;r=xr(r);for(let s=0;s<yo.length;s++){const i=yo[s]+r;if(i in t)return ss[e]=i}return e}const vo="http://www.w3.org/1999/xlink";function dd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vo,e.slice(6,e.length)):t.setAttributeNS(vo,e,n);else{const i=mu(e);n==null||i&&!ka(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ka(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Yt(t,e,n,r){t.addEventListener(e,n,r)}function pd(t,e,n,r){t.removeEventListener(e,n,r)}const wo=Symbol("_vei");function gd(t,e,n,r,s=null){const i=t[wo]||(t[wo]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=md(e);if(r){const l=i[e]=vd(r,s);Yt(t,c,l,a)}else o&&(pd(t,c,o,a),i[e]=void 0)}}const bo=/(?:Once|Passive|Capture)$/;function md(t){let e;if(bo.test(t)){e={};let r;for(;r=t.match(bo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fn(t.slice(2)),e]}let is=0;const _d=Promise.resolve(),yd=()=>is||(_d.then(()=>is=0),is=Date.now());function vd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(wd(r,n.value),e,5,[r])};return n.value=t,n.attached=yd(),n}function wd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Io=/^on[a-z]/,bd=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?cd(t,r,s):e==="style"?ud(t,n,r):Nr(e)?ei(e)||gd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Id(t,e,r,s))?hd(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),dd(t,e,r,s))};function Id(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Io.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Io.test(e)&&ue(n)?!1:e in t}const Eo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>lr(e,n):e};function Ed(t){t.target.composing=!0}function To(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const os=Symbol("_assign"),yv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[os]=Eo(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ss(c)),t[os](c)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",Ed),Yt(t,"compositionend",To),Yt(t,"change",To))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[os]=Eo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ss(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Td=fe({patchProp:bd},od);let So;function Sd(){return So||(So=xf(Td))}const Rd=(...t)=>{const e=Sd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ad(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ad(t){return ue(t)?document.querySelector(t):t}const Cd=mi({name:"App"});const Pd=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Od={id:"app"};function kd(t,e,n,r,s,i){const o=to("router-link"),c=to("router-view");return Bf(),Vf("div",Od,[Ir("header",null,[Ir("nav",null,[ge(o,{to:"/"},{default:wn(()=>[In("Home")]),_:1}),ge(o,{to:"/profile"},{default:wn(()=>[In("Profile")]),_:1}),ge(o,{to:"/login"},{default:wn(()=>[In("Login")]),_:1}),ge(o,{to:"/register"},{default:wn(()=>[In("Register")]),_:1})])]),ge(c)])}const Dd=Pd(Cd,[["render",kd]]),Nd="modulepreload",Md=function(t){return"/tracker/"+t},Ro={},or=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Md(i),i in Ro)return;Ro[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Nd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof window<"u";function Ld(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function as(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ue(s)?s.map(t):t(s)}return n}const Cn=()=>{},Ue=Array.isArray,xd=/\/$/,Ud=t=>t.replace(xd,"");function cs(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=jd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Fd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ao(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $d(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ln(e.matched[r],n.matched[s])&&Ic(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ic(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bd(t[n],e[n]))return!1;return!0}function Bd(t,e){return Ue(t)?Co(t,e):Ue(e)?Co(e,t):t===e}function Co(t,e){return Ue(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Bn;(function(t){t.pop="pop",t.push="push"})(Bn||(Bn={}));var Pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pn||(Pn={}));function Hd(t){if(!t)if(Xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ud(t)}const Vd=/^[^#]+#/;function Wd(t,e){return t.replace(Vd,"#")+e}function Kd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zr=()=>({left:window.pageXOffset,top:window.pageYOffset});function zd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Kd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Po(t,e){return(history.state?history.state.position-e:-1)+t}const Fs=new Map;function qd(t,e){Fs.set(t,e)}function Gd(t){const e=Fs.get(t);return Fs.delete(t),e}let Jd=()=>location.protocol+"//"+location.host;function Ec(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Ao(a,"")}return Ao(n,t)+r+s}function Yd(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const _=Ec(t,location),S=n.value,C=e.value;let x=0;if(p){if(n.value=_,e.value=p,o&&o===S){o=null;return}x=C?p.position-C.position:0}else r(_);s.forEach(O=>{O(n.value,S,{delta:x,type:Bn.pop,direction:x?x>0?Pn.forward:Pn.back:Pn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const _=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:zr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function Oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zr():null}}function Xd(t){const{history:e,location:n}=window,r={value:Ec(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Jd()+t+a;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(a,l){const u=X({},e.state,Oo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=X({},s.value,e.state,{forward:a,scroll:zr()});i(u.current,u,!0);const h=X({},Oo(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Qd(t){t=Hd(t);const e=Xd(t),n=Yd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:Wd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Zd(t){return typeof t=="string"||t&&typeof t=="object"}function Tc(t){return typeof t=="string"||typeof t=="symbol"}const ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sc=Symbol("");var ko;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ko||(ko={}));function un(t,e){return X(new Error,{type:t,[Sc]:!0},e)}function Ye(t,e){return t instanceof Error&&Sc in t&&(e==null||!!(t.type&e))}const Do="[^/]+?",eh={sensitive:!1,strict:!1,start:!0,end:!0},th=/[.+*?^${}()[\]/\\]/g;function nh(t,e){const n=X({},eh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(th,"\\$&"),_+=40;else if(p.type===1){const{value:S,repeatable:C,optional:x,regexp:O}=p;i.push({name:S,repeatable:C,optional:x});const D=O||Do;if(D!==Do){_+=10;try{new RegExp(`(${D})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${S}" (${D}): `+N.message)}}let j=C?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(j=x&&l.length<2?`(?:/${j})`:"/"+j),x&&(j+="?"),s+=j,_+=20,x&&(_+=-8),C&&(_+=-20),D===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",S=i[p-1];h[S.name]=_&&S.repeatable?_.split("/"):_}return h}function a(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:S,repeatable:C,optional:x}=_,O=S in l?l[S]:"";if(Ue(O)&&!C)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const D=Ue(O)?O.join("/"):O;if(!D)if(x)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function rh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(No(r))return 1;if(No(s))return-1}return s.length-r.length}function No(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ih={type:0,value:""},oh=/[a-zA-Z0-9_]/;function ah(t){if(!t)return[[]];if(t==="/")return[[ih]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:oh.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function ch(t,e,n){const r=nh(ah(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lh(t,e){const n=[],r=new Map;e=xo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const _=!p,S=uh(u);S.aliasOf=p&&p.record;const C=xo(e,u),x=[S];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of j)x.push(X({},S,{components:p?p.record.components:S.components,path:N,aliasOf:p?p.record:S}))}let O,D;for(const j of x){const{path:N}=j;if(h&&N[0]!=="/"){const G=h.record.path,oe=G[G.length-1]==="/"?"":"/";j.path=h.record.path+(N&&oe+N)}if(O=ch(j,h,C),p?p.alias.push(O):(D=D||O,D!==O&&D.alias.push(O),_&&u.name&&!Lo(O)&&o(u.name)),S.children){const G=S.children;for(let oe=0;oe<G.length;oe++)i(G[oe],O,p&&p.children[oe])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&a(O)}return D?()=>{o(D)}:Cn}function o(u){if(Tc(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&sh(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Rc(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Lo(u)&&r.set(u.record.name,u)}function l(u,h){let p,_={},S,C;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw un(1,{location:u});C=p.record.name,_=X(Mo(h.params,p.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&Mo(u.params,p.keys.map(D=>D.name))),S=p.stringify(_)}else if("path"in u)S=u.path,p=n.find(D=>D.re.test(S)),p&&(_=p.parse(S),C=p.record.name);else{if(p=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!p)throw un(1,{location:u,currentLocation:h});C=p.record.name,_=X({},h.params,u.params),S=p.stringify(_)}const x=[];let O=p;for(;O;)x.unshift(O.record),O=O.parent;return{name:C,path:S,params:_,matched:x,meta:dh(x)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Mo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dh(t){return t.reduce((e,n)=>X(e,n.meta),{})}function xo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Rc(t,e){return e.children.some(n=>n===t||Rc(t,n))}const Ac=/#/g,hh=/&/g,ph=/\//g,gh=/=/g,mh=/\?/g,Cc=/\+/g,_h=/%5B/g,yh=/%5D/g,Pc=/%5E/g,vh=/%60/g,Oc=/%7B/g,wh=/%7C/g,kc=/%7D/g,bh=/%20/g;function bi(t){return encodeURI(""+t).replace(wh,"|").replace(_h,"[").replace(yh,"]")}function Ih(t){return bi(t).replace(Oc,"{").replace(kc,"}").replace(Pc,"^")}function $s(t){return bi(t).replace(Cc,"%2B").replace(bh,"+").replace(Ac,"%23").replace(hh,"%26").replace(vh,"`").replace(Oc,"{").replace(kc,"}").replace(Pc,"^")}function Eh(t){return $s(t).replace(gh,"%3D")}function Th(t){return bi(t).replace(Ac,"%23").replace(mh,"%3F")}function Sh(t){return t==null?"":Th(t).replace(ph,"%2F")}function Er(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Rh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Cc," "),o=i.indexOf("="),c=Er(o<0?i:i.slice(0,o)),a=o<0?null:Er(i.slice(o+1));if(c in e){let l=e[c];Ue(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Uo(t){let e="";for(let n in t){const r=t[n];if(n=Eh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ue(r)?r.map(i=>i&&$s(i)):[r&&$s(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ah(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ue(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ch=Symbol(""),Fo=Symbol(""),qr=Symbol(""),Dc=Symbol(""),Bs=Symbol("");function yn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function dt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(un(4,{from:n,to:e})):h instanceof Error?c(h):Zd(h)?c(un(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(h=>c(h))})}function ls(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Ph(c)){const l=(c.__vccOpts||c)[e];l&&s.push(dt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Ld(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&dt(p,n,r,i,o)()}))}}return s}function Ph(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $o(t){const e=xe(qr),n=xe(Dc),r=Pe(()=>e.resolve(tn(t.to))),s=Pe(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(ln.bind(null,u));if(p>-1)return p;const _=Bo(a[l-2]);return l>1&&Bo(u)===_&&h[h.length-1].path!==_?h.findIndex(ln.bind(null,a[l-2])):p}),i=Pe(()=>s.value>-1&&Nh(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&Ic(n.params,r.value.params));function c(a={}){return Dh(a)?e[tn(t.replace)?"replace":"push"](tn(t.to)).catch(Cn):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Oh=mi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$o,setup(t,{slots:e}){const n=zn($o(t)),{options:r}=xe(qr),s=Pe(()=>({[jo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:bc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kh=Oh;function Dh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ue(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jo=(t,e,n)=>t??e??n,Mh=mi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xe(Bs),s=Pe(()=>t.route||r.value),i=xe(Fo,0),o=Pe(()=>{let l=tn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=Pe(()=>s.value.matched[o.value]);fr(Fo,Pe(()=>o.value+1)),fr(Ch,c),fr(Bs,s);const a=di();return Sn(()=>[a.value,c.value,t.name],([l,u,h],[p,_,S])=>{u&&(u.instances[h]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!ln(u,_)||!p)&&(u.enterCallbacks[h]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,p=h&&h.components[u];if(!p)return Ho(n.default,{Component:p,route:l});const _=h.props[u],S=_?_===!0?l.params:typeof _=="function"?_(l):_:null,x=bc(p,X({},S,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Ho(n.default,{Component:x,route:l})||x}}});function Ho(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lh=Mh;function xh(t){const e=lh(t.routes,t),n=t.parseQuery||Rh,r=t.stringifyQuery||Uo,s=t.history,i=yn(),o=yn(),c=yn(),a=Bu(ct);let l=ct;Xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=as.bind(null,y=>""+y),h=as.bind(null,Sh),p=as.bind(null,Er);function _(y,A){let T,k;return Tc(y)?(T=e.getRecordMatcher(y),k=A):k=y,e.addRoute(k,T)}function S(y){const A=e.getRecordMatcher(y);A&&e.removeRoute(A)}function C(){return e.getRoutes().map(y=>y.record)}function x(y){return!!e.getRecordMatcher(y)}function O(y,A){if(A=X({},A||a.value),typeof y=="string"){const g=cs(n,y,A.path),m=e.resolve({path:g.path},A),v=s.createHref(g.fullPath);return X(g,m,{params:p(m.params),hash:Er(g.hash),redirectedFrom:void 0,href:v})}let T;if("path"in y)T=X({},y,{path:cs(n,y.path,A.path).path});else{const g=X({},y.params);for(const m in g)g[m]==null&&delete g[m];T=X({},y,{params:h(g)}),A.params=h(A.params)}const k=e.resolve(T,A),Y=y.hash||"";k.params=u(p(k.params));const f=Fd(r,X({},y,{hash:Ih(Y),path:k.path})),d=s.createHref(f);return X({fullPath:f,hash:Y,query:r===Uo?Ah(y.query):y.query||{}},k,{redirectedFrom:void 0,href:d})}function D(y){return typeof y=="string"?cs(n,y,a.value.path):X({},y)}function j(y,A){if(l!==y)return un(8,{from:A,to:y})}function N(y){return ce(y)}function G(y){return N(X(D(y),{replace:!0}))}function oe(y){const A=y.matched[y.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let k=typeof T=="function"?T(y):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=D(k):{path:k},k.params={}),X({query:y.query,hash:y.hash,params:"path"in k?{}:y.params},k)}}function ce(y,A){const T=l=O(y),k=a.value,Y=y.state,f=y.force,d=y.replace===!0,g=oe(T);if(g)return ce(X(D(g),{state:typeof g=="object"?X({},Y,g.state):Y,force:f,replace:d}),A||T);const m=T;m.redirectedFrom=A;let v;return!f&&$d(r,k,T)&&(v=un(16,{to:m,from:k}),Fe(k,k,!0,!1)),(v?Promise.resolve(v):re(m,k)).catch(w=>Ye(w)?Ye(w,2)?w:ot(w):J(w,m,k)).then(w=>{if(w){if(Ye(w,2))return ce(X({replace:d},D(w.to),{state:typeof w.to=="object"?X({},Y,w.to.state):Y,force:f}),A||m)}else w=Ie(m,k,!0,d,Y);return de(m,k,w),w})}function W(y,A){const T=j(y,A);return T?Promise.reject(T):Promise.resolve()}function H(y){const A=zt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(y):y()}function re(y,A){let T;const[k,Y,f]=Uh(y,A);T=ls(k.reverse(),"beforeRouteLeave",y,A);for(const g of k)g.leaveGuards.forEach(m=>{T.push(dt(m,y,A))});const d=W.bind(null,y,A);return T.push(d),he(T).then(()=>{T=[];for(const g of i.list())T.push(dt(g,y,A));return T.push(d),he(T)}).then(()=>{T=ls(Y,"beforeRouteUpdate",y,A);for(const g of Y)g.updateGuards.forEach(m=>{T.push(dt(m,y,A))});return T.push(d),he(T)}).then(()=>{T=[];for(const g of f)if(g.beforeEnter)if(Ue(g.beforeEnter))for(const m of g.beforeEnter)T.push(dt(m,y,A));else T.push(dt(g.beforeEnter,y,A));return T.push(d),he(T)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),T=ls(f,"beforeRouteEnter",y,A),T.push(d),he(T))).then(()=>{T=[];for(const g of o.list())T.push(dt(g,y,A));return T.push(d),he(T)}).catch(g=>Ye(g,8)?g:Promise.reject(g))}function de(y,A,T){c.list().forEach(k=>H(()=>k(y,A,T)))}function Ie(y,A,T,k,Y){const f=j(y,A);if(f)return f;const d=A===ct,g=Xt?history.state:{};T&&(k||d?s.replace(y.fullPath,X({scroll:d&&g&&g.scroll},Y)):s.push(y.fullPath,Y)),a.value=y,Fe(y,A,T,d),ot()}let Ae;function St(){Ae||(Ae=s.listen((y,A,T)=>{if(!Zn.listening)return;const k=O(y),Y=oe(k);if(Y){ce(X(Y,{replace:!0}),k).catch(Cn);return}l=k;const f=a.value;Xt&&qd(Po(f.fullPath,T.delta),zr()),re(k,f).catch(d=>Ye(d,12)?d:Ye(d,2)?(ce(d.to,k).then(g=>{Ye(g,20)&&!T.delta&&T.type===Bn.pop&&s.go(-1,!1)}).catch(Cn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),J(d,k,f))).then(d=>{d=d||Ie(k,f,!1),d&&(T.delta&&!Ye(d,8)?s.go(-T.delta,!1):T.type===Bn.pop&&Ye(d,20)&&s.go(-1,!1)),de(k,f,d)}).catch(Cn)}))}let Ce=yn(),q=yn(),Z;function J(y,A,T){ot(y);const k=q.list();return k.length?k.forEach(Y=>Y(y,A,T)):console.error(y),Promise.reject(y)}function Je(){return Z&&a.value!==ct?Promise.resolve():new Promise((y,A)=>{Ce.add([y,A])})}function ot(y){return Z||(Z=!y,St(),Ce.list().forEach(([A,T])=>y?T(y):A()),Ce.reset()),y}function Fe(y,A,T,k){const{scrollBehavior:Y}=t;if(!Xt||!Y)return Promise.resolve();const f=!T&&Gd(Po(y.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return pi().then(()=>Y(y,A,f)).then(d=>d&&zd(d)).catch(d=>J(d,y,A))}const ye=y=>s.go(y);let Kt;const zt=new Set,Zn={currentRoute:a,listening:!0,addRoute:_,removeRoute:S,hasRoute:x,getRoutes:C,resolve:O,options:t,push:N,replace:G,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:q.add,isReady:Je,install(y){const A=this;y.component("RouterLink",kh),y.component("RouterView",Lh),y.config.globalProperties.$router=A,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>tn(a)}),Xt&&!Kt&&a.value===ct&&(Kt=!0,N(s.location).catch(Y=>{}));const T={};for(const Y in ct)Object.defineProperty(T,Y,{get:()=>a.value[Y],enumerable:!0});y.provide(qr,A),y.provide(Dc,za(T)),y.provide(Bs,a);const k=y.unmount;zt.add(y),y.unmount=function(){zt.delete(y),zt.size<1&&(l=ct,Ae&&Ae(),Ae=null,a.value=ct,Kt=!1,Z=!1),k()}}};function he(y){return y.reduce((A,T)=>A.then(()=>H(T)),Promise.resolve())}return Zn}function Uh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>ln(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>ln(l,a))||s.push(a))}return[n,r,s]}function vv(){return xe(qr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,_=l&63;a||(_=64,o||(p=64)),r.push(n[u],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new $h;const p=i<<2|c>>4;if(r.push(p),l!==64){const _=c<<4&240|l>>2;if(r.push(_),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bh=function(t){const e=Nc(t);return Mc.encodeByteArray(e,!0)},Lc=function(t){return Bh(t).replace(/\./g,"")},xc=function(t){try{return Mc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=()=>jh().__FIREBASE_DEFAULTS__,Vh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xc(t[1]);return e&&JSON.parse(e)},Ii=()=>{try{return Hh()||Vh()||Wh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kh=t=>{var e,n;return(n=(e=Ii())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Uc=()=>{var t;return(t=Ii())===null||t===void 0?void 0:t.config},Fc=t=>{var e;return(e=Ii())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function $c(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jh(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bc(){try{return typeof indexedDB=="object"}catch{return!1}}function jc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Yh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="FirebaseError";class Ge extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xh,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ht.prototype.create)}}class Ht{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Qh(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ge(s,c,r)}}function Qh(t,e){return t.replace(Zh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Zh=/\{\$([^}]+)}/g;function ep(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vo(i)&&Vo(o)){if(!jn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function En(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Tn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tp(t,e){const n=new np(t,e);return n.subscribe.bind(n)}class np{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=us),s.error===void 0&&(s.error=us),s.complete===void 0&&(s.complete=us);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function us(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=1e3,ip=2,op=4*60*60*1e3,ap=.5;function Wo(t,e=sp,n=ip){const r=e*Math.pow(n,t),s=Math.round(ap*r*(Math.random()-.5)*2);return Math.min(op,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class qe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lp(t){return t===Ct?void 0:t}function up(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const dp={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},hp=ee.INFO,pp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},gp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ei{constructor(e){this.name=e,this._logLevel=hp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const mp=(t,e)=>e.some(n=>t instanceof n);let Ko,zo;function _p(){return Ko||(Ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yp(){return zo||(zo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hc=new WeakMap,js=new WeakMap,Vc=new WeakMap,fs=new WeakMap,Ti=new WeakMap;function vp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hc.set(n,t)}).catch(()=>{}),Ti.set(e,t),e}function wp(t){if(js.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});js.set(t,e)}let Hs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return js.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bp(t){Hs=t(Hs)}function Ip(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ds(this),e,...n);return Vc.set(r,e.sort?e.sort():[e]),wt(r)}:yp().includes(t)?function(...e){return t.apply(ds(this),e),wt(Hc.get(this))}:function(...e){return wt(t.apply(ds(this),e))}}function Ep(t){return typeof t=="function"?Ip(t):(t instanceof IDBTransaction&&wp(t),mp(t,_p())?new Proxy(t,Hs):t)}function wt(t){if(t instanceof IDBRequest)return vp(t);if(fs.has(t))return fs.get(t);const e=Ep(t);return e!==t&&(fs.set(t,e),Ti.set(e,t)),e}const ds=t=>Ti.get(t);function Tp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=wt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(wt(o.result),a.oldVersion,a.newVersion,wt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Sp=["get","getKey","getAll","getAllKeys","count"],Rp=["put","add","delete","clear"],hs=new Map;function qo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hs.get(e))return hs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Rp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sp.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return hs.set(e,i),i}bp(t=>({...t,get:(e,n,r)=>qo(e,n)||t.get(e,n,r),has:(e,n)=>!!qo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vs="@firebase/app",Go="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Ei("@firebase/app"),Pp="@firebase/app-compat",Op="@firebase/analytics-compat",kp="@firebase/analytics",Dp="@firebase/app-check-compat",Np="@firebase/app-check",Mp="@firebase/auth",Lp="@firebase/auth-compat",xp="@firebase/database",Up="@firebase/database-compat",Fp="@firebase/functions",$p="@firebase/functions-compat",Bp="@firebase/installations",jp="@firebase/installations-compat",Hp="@firebase/messaging",Vp="@firebase/messaging-compat",Wp="@firebase/performance",Kp="@firebase/performance-compat",zp="@firebase/remote-config",qp="@firebase/remote-config-compat",Gp="@firebase/storage",Jp="@firebase/storage-compat",Yp="@firebase/firestore",Xp="@firebase/firestore-compat",Qp="firebase",Zp="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="[DEFAULT]",eg={[Vs]:"fire-core",[Pp]:"fire-core-compat",[kp]:"fire-analytics",[Op]:"fire-analytics-compat",[Np]:"fire-app-check",[Dp]:"fire-app-check-compat",[Mp]:"fire-auth",[Lp]:"fire-auth-compat",[xp]:"fire-rtdb",[Up]:"fire-rtdb-compat",[Fp]:"fire-fn",[$p]:"fire-fn-compat",[Bp]:"fire-iid",[jp]:"fire-iid-compat",[Hp]:"fire-fcm",[Vp]:"fire-fcm-compat",[Wp]:"fire-perf",[Kp]:"fire-perf-compat",[zp]:"fire-rc",[qp]:"fire-rc-compat",[Gp]:"fire-gcs",[Jp]:"fire-gcs-compat",[Yp]:"fire-fst",[Xp]:"fire-fst-compat","fire-js":"fire-js",[Qp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,Ks=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nt(t){const e=t.name;if(Ks.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Ks.set(e,t);for(const n of Tr.values())tg(n,t);return!0}function pn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new Ht("app","Firebase",ng);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=Zp;function Wc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ws,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(n||(n=Uc()),!n)throw bt.create("no-options");const i=Tr.get(s);if(i){if(jn(n,i.options)&&jn(r,i.config))return i;throw bt.create("duplicate-app",{appName:s})}const o=new fp(s);for(const a of Ks.values())o.addComponent(a);const c=new rg(n,r,o);return Tr.set(s,c),c}function Kc(t=Ws){const e=Tr.get(t);if(!e&&t===Ws&&Uc())return Wc();if(!e)throw bt.create("no-app",{appName:t});return e}function Ve(t,e,n){var r;let s=(r=eg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}nt(new qe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="firebase-heartbeat-database",ig=1,Hn="firebase-heartbeat-store";let ps=null;function zc(){return ps||(ps=Tp(sg,ig,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hn)}}}).catch(t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})})),ps}async function og(t){try{return await(await zc()).transaction(Hn).objectStore(Hn).get(qc(t))}catch(e){if(e instanceof Ge)Ut.warn(e.message);else{const n=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function Jo(t,e){try{const r=(await zc()).transaction(Hn,"readwrite");await r.objectStore(Hn).put(e,qc(t)),await r.done}catch(n){if(n instanceof Ge)Ut.warn(n.message);else{const r=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function qc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=1024,cg=30*24*60*60*1e3;class lg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=cg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yo(),{heartbeatsToSend:n,unsentEntries:r}=ug(this._heartbeatsCache.heartbeats),s=Lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Yo(){return new Date().toISOString().substring(0,10)}function ug(t,e=ag){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bc()?jc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await og(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xo(t){return Lc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){nt(new qe("platform-logger",e=>new Ap(e),"PRIVATE")),nt(new qe("heartbeat",e=>new lg(e),"PRIVATE")),Ve(Vs,Go,t),Ve(Vs,Go,"esm2017"),Ve("fire-js","")}dg("");var hg="firebase",pg="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve(hg,pg,"app");const gg=(t,e)=>e.some(n=>t instanceof n);let Qo,Zo;function mg(){return Qo||(Qo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _g(){return Zo||(Zo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gc=new WeakMap,zs=new WeakMap,Jc=new WeakMap,gs=new WeakMap,Si=new WeakMap;function yg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gc.set(n,t)}).catch(()=>{}),Si.set(e,t),e}function vg(t){if(zs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zs.set(t,e)}let qs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wg(t){qs=t(qs)}function bg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ms(this),e,...n);return Jc.set(r,e.sort?e.sort():[e]),It(r)}:_g().includes(t)?function(...e){return t.apply(ms(this),e),It(Gc.get(this))}:function(...e){return It(t.apply(ms(this),e))}}function Ig(t){return typeof t=="function"?bg(t):(t instanceof IDBTransaction&&vg(t),gg(t,mg())?new Proxy(t,qs):t)}function It(t){if(t instanceof IDBRequest)return yg(t);if(gs.has(t))return gs.get(t);const e=Ig(t);return e!==t&&(gs.set(t,e),Si.set(e,t)),e}const ms=t=>Si.get(t);function Eg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=It(o);return r&&o.addEventListener("upgradeneeded",a=>{r(It(o.result),a.oldVersion,a.newVersion,It(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const Tg=["get","getKey","getAll","getAllKeys","count"],Sg=["put","add","delete","clear"],_s=new Map;function ea(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_s.get(e))return _s.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Sg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tg.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return _s.set(e,i),i}wg(t=>({...t,get:(e,n,r)=>ea(e,n)||t.get(e,n,r),has:(e,n)=>!!ea(e,n)||t.has(e,n)}));const Yc="@firebase/installations",Ri="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=1e4,Qc=`w:${Ri}`,Zc="FIS_v2",Rg="https://firebaseinstallations.googleapis.com/v1",Ag=60*60*1e3,Cg="installations",Pg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ft=new Ht(Cg,Pg,Og);function el(t){return t instanceof Ge&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl({projectId:t}){return`${Rg}/projects/${t}/installations`}function nl(t){return{token:t.token,requestStatus:2,expiresIn:Dg(t.expiresIn),creationTime:Date.now()}}async function rl(t,e){const r=(await e.json()).error;return Ft.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sl({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kg(t,{refreshToken:e}){const n=sl(t);return n.append("Authorization",Ng(e)),n}async function il(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Dg(t){return Number(t.replace("s","000"))}function Ng(t){return`${Zc} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=tl(t),s=sl(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Zc,appId:t.appId,sdkVersion:Qc},c={method:"POST",headers:s,body:JSON.stringify(o)},a=await il(()=>fetch(r,c));if(a.ok){const l=await a.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:nl(l.authToken)}}else throw await rl("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=/^[cdef][\w-]{21}$/,Gs="";function Ug(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Fg(t);return xg.test(n)?n:Gs}catch{return Gs}}function Fg(t){return Lg(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map;function cl(t,e){const n=Gr(t);ll(n,e),$g(n,e)}function ll(t,e){const n=al.get(t);if(n)for(const r of n)r(e)}function $g(t,e){const n=Bg();n&&n.postMessage({key:t,fid:e}),jg()}let Dt=null;function Bg(){return!Dt&&"BroadcastChannel"in self&&(Dt=new BroadcastChannel("[Firebase] FID Change"),Dt.onmessage=t=>{ll(t.data.key,t.data.fid)}),Dt}function jg(){al.size===0&&Dt&&(Dt.close(),Dt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="firebase-installations-database",Vg=1,$t="firebase-installations-store";let ys=null;function Ai(){return ys||(ys=Eg(Hg,Vg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($t)}}})),ys}async function Sr(t,e){const n=Gr(t),s=(await Ai()).transaction($t,"readwrite"),i=s.objectStore($t),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&cl(t,e.fid),e}async function ul(t){const e=Gr(t),r=(await Ai()).transaction($t,"readwrite");await r.objectStore($t).delete(e),await r.done}async function Jr(t,e){const n=Gr(t),s=(await Ai()).transaction($t,"readwrite"),i=s.objectStore($t),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&cl(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t){let e;const n=await Jr(t.appConfig,r=>{const s=Wg(r),i=Kg(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Gs?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Wg(t){const e=t||{fid:Ug(),registrationStatus:0};return fl(e)}function Kg(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ft.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=zg(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qg(t)}:{installationEntry:e}}async function zg(t,e){try{const n=await Mg(t,e);return Sr(t.appConfig,n)}catch(n){throw el(n)&&n.customData.serverCode===409?await ul(t.appConfig):await Sr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function qg(t){let e=await ta(t.appConfig);for(;e.registrationStatus===1;)await ol(100),e=await ta(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ci(t);return r||n}return e}function ta(t){return Jr(t,e=>{if(!e)throw Ft.create("installation-not-found");return fl(e)})}function fl(t){return Gg(t)?{fid:t.fid,registrationStatus:0}:t}function Gg(t){return t.registrationStatus===1&&t.registrationTime+Xc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg({appConfig:t,heartbeatServiceProvider:e},n){const r=Yg(t,n),s=kg(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Qc,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},a=await il(()=>fetch(r,c));if(a.ok){const l=await a.json();return nl(l)}else throw await rl("Generate Auth Token",a)}function Yg(t,{fid:e}){return`${tl(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e=!1){let n;const r=await Jr(t.appConfig,i=>{if(!dl(i))throw Ft.create("not-registered");const o=i.authToken;if(!e&&Zg(o))return i;if(o.requestStatus===1)return n=Xg(t,e),i;{if(!navigator.onLine)throw Ft.create("app-offline");const c=tm(i);return n=Qg(t,c),c}});return n?await n:r.authToken}async function Xg(t,e){let n=await na(t.appConfig);for(;n.authToken.requestStatus===1;)await ol(100),n=await na(t.appConfig);const r=n.authToken;return r.requestStatus===0?Pi(t,e):r}function na(t){return Jr(t,e=>{if(!dl(e))throw Ft.create("not-registered");const n=e.authToken;return nm(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Qg(t,e){try{const n=await Jg(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Sr(t.appConfig,r),n}catch(n){if(el(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ul(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Sr(t.appConfig,r)}throw n}}function dl(t){return t!==void 0&&t.registrationStatus===2}function Zg(t){return t.requestStatus===2&&!em(t)}function em(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ag}function tm(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nm(t){return t.requestStatus===1&&t.requestTime+Xc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ci(e);return r?r.catch(console.error):Pi(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t,e=!1){const n=t;return await im(n),(await Pi(n,e)).token}async function im(t){const{registrationPromise:e}=await Ci(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t){if(!t||!t.options)throw vs("App Configuration");if(!t.name)throw vs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw vs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function vs(t){return Ft.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="installations",am="installations-internal",cm=t=>{const e=t.getProvider("app").getImmediate(),n=om(e),r=pn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lm=t=>{const e=t.getProvider("app").getImmediate(),n=pn(e,hl).getImmediate();return{getId:()=>rm(n),getToken:s=>sm(n,s)}};function um(){nt(new qe(hl,cm,"PUBLIC")),nt(new qe(am,lm,"PRIVATE"))}um();Ve(Yc,Ri);Ve(Yc,Ri,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="analytics",fm="firebase_id",dm="origin",hm=60*1e3,pm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Ei("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Re=new Ht("analytics","Analytics",gm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t){if(!t.startsWith(Oi)){const e=Re.create("invalid-gtag-resource",{gtagURL:t});return we.warn(e.message),""}return t}function pl(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _m(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ym(t,e){const n=_m("firebase-js-sdk-policy",{createScriptURL:mm}),r=document.createElement("script"),s=`${Oi}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function vm(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wm(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const a=(await pl(n)).find(l=>l.measurementId===s);a&&await e[a.appId]}}catch(c){we.error(c)}t("config",s,i)}async function bm(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await pl(n);for(const a of o){const l=c.find(h=>h.measurementId===a),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){we.error(i)}}function Im(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,a]=o;await bm(t,e,n,c,a)}else if(i==="config"){const[c,a]=o;await wm(t,e,n,r,c,a)}else if(i==="consent"){const[c]=o;t("consent","update",c)}else if(i==="get"){const[c,a,l]=o;t("get",c,a,l)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){we.error(c)}}return s}function Em(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Im(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Tm(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Oi)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=30,Rm=1e3;class Am{constructor(e={},n=Rm){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gl=new Am;function Cm(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Pm(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Cm(r)},i=pm.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(c=a.error.message)}catch{}throw Re.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function Om(t,e=gl,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Re.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Re.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Nm;return setTimeout(async()=>{c.abort()},n!==void 0?n:hm),ml({appId:r,apiKey:s,measurementId:i},o,c,e)}async function ml(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=gl){var i;const{appId:o,measurementId:c}=t;try{await km(r,e)}catch(a){if(c)return we.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:c};throw a}try{const a=await Pm(t);return s.deleteThrottleMetadata(o),a}catch(a){const l=a;if(!Dm(l)){if(s.deleteThrottleMetadata(o),c)return we.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw a}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Wo(n,s.intervalMillis,Sm):Wo(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),we.debug(`Calling attemptFetch again in ${u} millis`),ml(t,h,r,s)}}function km(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Dm(t){if(!(t instanceof Ge)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Nm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Mm(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(){if(Bc())try{await jc()}catch(t){return we.warn(Re.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return we.warn(Re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xm(t,e,n,r,s,i,o){var c;const a=Om(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&we.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>we.error(_)),e.push(a);const l=Lm().then(_=>{if(_)return r.getId()}),[u,h]=await Promise.all([a,l]);Tm(i)||ym(i,u.measurementId),s("js",new Date);const p=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return p[dm]="firebase",p.update=!0,h!=null&&(p[fm]=h),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.app=e}_delete(){return delete On[this.app.options.appId],Promise.resolve()}}let On={},ra=[];const sa={};let ws="dataLayer",Fm="gtag",ia,_l,oa=!1;function $m(){const t=[];if($c()&&t.push("This is a browser extension environment."),Yh()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Re.create("invalid-analytics-context",{errorInfo:e});we.warn(n.message)}}function Bm(t,e,n){$m();const r=t.options.appId;if(!r)throw Re.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)we.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Re.create("no-api-key");if(On[r]!=null)throw Re.create("already-exists",{id:r});if(!oa){vm(ws);const{wrappedGtag:i,gtagCore:o}=Em(On,ra,sa,ws,Fm);_l=i,ia=o,oa=!0}return On[r]=xm(t,ra,sa,e,ia,ws,n),new Um(t)}function jm(t=Kc()){t=it(t);const e=pn(t,Rr);return e.isInitialized()?e.getImmediate():Hm(t)}function Hm(t,e={}){const n=pn(t,Rr);if(n.isInitialized()){const s=n.getImmediate();if(jn(e,n.getOptions()))return s;throw Re.create("already-initialized")}return n.initialize({options:e})}function Vm(t,e,n,r){t=it(t),Mm(_l,On[t.app.options.appId],e,n,r).catch(s=>we.error(s))}const aa="@firebase/analytics",ca="0.10.0";function Wm(){nt(new qe(Rr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Bm(r,s,n)},"PUBLIC")),nt(new qe("analytics-internal",t,"PRIVATE")),Ve(aa,ca),Ve(aa,ca,"esm2017");function t(e){try{const n=e.getProvider(Rr).getImmediate();return{logEvent:(r,s,i)=>Vm(n,r,s,i)}}catch(n){throw Re.create("interop-component-reg-failed",{reason:n})}}}Wm();function ki(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function la(t){return t!==void 0&&t.enterprise!==void 0}class Km{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function yl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zm=yl,vl=new Ht("auth","Firebase",yl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Ei("@firebase/auth");function qm(t,...e){Ar.logLevel<=ee.WARN&&Ar.warn(`Auth (${Gn}): ${t}`,...e)}function hr(t,...e){Ar.logLevel<=ee.ERROR&&Ar.error(`Auth (${Gn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,...e){throw Di(t,...e)}function We(t,...e){return Di(t,...e)}function wl(t,e,n){const r=Object.assign(Object.assign({},zm()),{[e]:n});return new Ht("auth","Firebase",r).create(e,{appName:t.name})}function Gm(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Oe(t,"argument-error"),wl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Di(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vl.create(t,...e)}function U(t,e,...n){if(!t)throw Di(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hr(e),new Error(e)}function rt(t,e){t||Ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jm(){return ua()==="http:"||ua()==="https:"}function ua(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jm()||$c()||"connection"in navigator)?navigator.onLine:!0}function Xm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,rt(n>e,"Short delay should be less than long delay!"),this.isMobile=qh()||Gh()}get(){return Ym()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t,e){rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new Jn(3e4,6e4);function Vt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wt(t,e,n,r,s={}){return Il(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=qn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),bl.fetch()(El(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Il(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qm),e);try{const s=new e_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ar(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ar(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ar(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ar(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wl(t,u,l);Oe(t,u)}}catch(s){if(s instanceof Ge)throw s;Oe(t,"network-request-failed",{message:String(s)})}}async function Yn(t,e,n,r,s={}){const i=await Wt(t,e,n,r,s);return"mfaPendingCredential"in i&&Oe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function El(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ni(t.config,s):`${t.config.apiScheme}://${s}`}class e_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),Zm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ar(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=We(t,e,r);return s.customData._tokenResponse=n,s}async function t_(t,e){return Wt(t,"GET","/v2/recaptchaConfig",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e){return Wt(t,"POST","/v1/accounts:delete",e)}async function r_(t,e){return Wt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function s_(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=Mi(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:kn(bs(s.auth_time)),issuedAtTime:kn(bs(s.iat)),expirationTime:kn(bs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bs(t){return Number(t)*1e3}function Mi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=xc(n);return s?JSON.parse(s):(hr("Failed to decode base64 JWT payload"),null)}catch(s){return hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function i_(t){const e=Mi(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ge&&o_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function o_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kn(this.lastLoginAt),this.creationTime=kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Vn(t,r_(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?u_(i.providerUserInfo):[],c=l_(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Tl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function c_(t){const e=it(t);await Cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function u_(t){return t.map(e=>{var{providerId:n}=e,r=ki(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(t,e){const n=await Il(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=El(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",bl.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):i_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await f_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Wn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ki(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return s_(this,e)}reload(){return c_(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vn(this,n_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(c=n.tenantId)!==null&&c!==void 0?c:void 0,x=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:N,isAnonymous:G,providerData:oe,stsTokenManager:ce}=n;U(j&&ce,e,"internal-error");const W=Wn.fromJSON(this.name,ce);U(typeof j=="string",e,"internal-error"),lt(h,e.name),lt(p,e.name),U(typeof N=="boolean",e,"internal-error"),U(typeof G=="boolean",e,"internal-error"),lt(_,e.name),lt(S,e.name),lt(C,e.name),lt(x,e.name),lt(O,e.name),lt(D,e.name);const H=new Lt({uid:j,auth:e,email:p,emailVerified:N,displayName:h,isAnonymous:G,photoURL:S,phoneNumber:_,tenantId:C,stsTokenManager:W,createdAt:O,lastLoginAt:D});return oe&&Array.isArray(oe)&&(H.providerData=oe.map(re=>Object.assign({},re))),x&&(H._redirectEventId=x),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new Wn;s.updateFromServerResponse(n);const i=new Lt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Cr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Map;function et(t){rt(t instanceof Function,"Expected a class definition");let e=fa.get(t);return e?(rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sl.type="NONE";const da=Sl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e,n){return`firebase:${t}:${e}:${n}`}class rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rn(et(da),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||et(da);const o=pr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Lt._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new rn(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new rn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ol(e))return"Blackberry";if(kl(e))return"Webos";if(Li(e))return"Safari";if((e.includes("chrome/")||Al(e))&&!e.includes("edge/"))return"Chrome";if(Pl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rl(t=me()){return/firefox\//i.test(t)}function Li(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Al(t=me()){return/crios\//i.test(t)}function Cl(t=me()){return/iemobile/i.test(t)}function Pl(t=me()){return/android/i.test(t)}function Ol(t=me()){return/blackberry/i.test(t)}function kl(t=me()){return/webos/i.test(t)}function Yr(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function d_(t=me()){var e;return Yr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h_(){return Jh()&&document.documentMode===10}function Dl(t=me()){return Yr(t)||Pl(t)||kl(t)||Ol(t)||/windows phone/i.test(t)||Cl(t)}function p_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e=[]){let n;switch(t){case"Browser":n=ha(me());break;case"Worker":n=`${ha(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(t,e={}){return Wt(t,"GET","/v2/passwordPolicy",Vt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=6;class y_{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:__,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pa(this),this.idTokenSubscription=new pa(this),this.beforeStateQueue=new g_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?it(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await m_(this),n=new y_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ht("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tt(t){return it(t)}class pa{constructor(e){this.auth=e,this.observer=null,this.addObserver=tp(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ml(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=We("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",w_().appendChild(r)})}function b_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const I_="https://www.google.com/recaptcha/enterprise.js?render=",E_="recaptcha-enterprise",T_="NO_RECAPTCHA";class S_{constructor(e){this.type=E_,this.auth=Tt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{t_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Km(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;la(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(T_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&la(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ml(I_+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function Pr(t,e,n,r=!1){const s=new S_(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t,e){const n=pn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jn(i,e??{}))return s;Oe(s,"already-initialized")}return n.initialize({options:e})}function A_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function C_(t,e,n){const r=Tt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ll(e),{host:o,port:c}=P_(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||O_()}function Ll(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function P_(t){const e=Ll(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ga(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ga(o)}}}function ga(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function O_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function k_(t,e){return Wt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}async function N_(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends xi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Kn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Kn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Pr(e,r,"signInWithPassword");return Is(e,s)}else return Is(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Pr(e,r,"signInWithPassword");return Is(e,i)}else return Promise.reject(s)});case"emailLink":return D_(e,{email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return k_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return N_(e,{idToken:n,email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="http://localhost";class Bt extends xi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Oe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ki(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Bt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:M_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x_(t){const e=En(Tn(t)).link,n=e?En(Tn(e)).deep_link_id:null,r=En(Tn(t)).deep_link_id;return(r?En(Tn(r)).link:null)||r||n||e||t}class Ui{constructor(e){var n,r,s,i,o,c;const a=En(Tn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=L_((s=a.mode)!==null&&s!==void 0?s:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=x_(e);try{return new Ui(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.providerId=gn.PROVIDER_ID}static credential(e,n){return Kn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ui.parseLink(n);return U(r,"argument-error"),Kn._fromEmailAndCode(e,r.code,r.tenantId)}}gn.PROVIDER_ID="password";gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Xn{constructor(){super("facebook.com")}static credential(e){return Bt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Xn{constructor(){super("github.com")}static credential(e){return Bt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Bt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return Yn(t,"POST","/v1/accounts:signUp",Vt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Lt._fromIdTokenResponse(e,r,s),o=ma(r);return new jt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ma(r);return new jt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ma(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Ge{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Or.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Or(e,n,r,s)}}function xl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Or._fromErrorAndOperation(t,i,e,r):i})}async function U_(t,e,n=!1){const r=await Vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Vn(t,xl(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=Mi(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),jt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Oe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(t,e,n=!1){const r="signIn",s=await xl(t,r,e),i=await jt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $_(t,e){return Ul(Tt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t){const e=Tt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wv(t,e,n){var r;const s=Tt(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Pr(s,i,"signUpPassword");o=Es(s,l)}else o=Es(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Pr(s,i,"signUpPassword");return Es(s,u)}throw l});const c=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Fl(t),l}),a=await jt._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(a.user),a}function bv(t,e,n){return $_(it(t),gn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fl(t),r})}function B_(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function j_(t,e,n){return it(t).beforeAuthStateChanged(e,n)}const kr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kr,"1"),this.storage.removeItem(kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){const t=me();return Li(t)||Yr(t)}const V_=1e3,W_=10;class Bl extends $l{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H_()&&p_(),this.fallbackToPolling=Dl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);h_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,W_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},V_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bl.type="LOCAL";const K_=Bl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends $l{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jl.type="SESSION";const Hl=jl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await z_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=$i("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function G_(t){Ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function J_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function X_(){return Vl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="firebaseLocalStorageDb",Q_=1,Dr="firebaseLocalStorage",Kl="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qr(t,e){return t.transaction([Dr],e?"readwrite":"readonly").objectStore(Dr)}function Z_(){const t=indexedDB.deleteDatabase(Wl);return new Qn(t).toPromise()}function Ys(){const t=indexedDB.open(Wl,Q_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dr,{keyPath:Kl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dr)?e(r):(r.close(),await Z_(),e(await Ys()))})})}async function _a(t,e,n){const r=Qr(t,!0).put({[Kl]:e,value:n});return new Qn(r).toPromise()}async function ey(t,e){const n=Qr(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function ya(t,e){const n=Qr(t,!0).delete(e);return new Qn(n).toPromise()}const ty=800,ny=3;class zl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ys(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ny)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xr._getInstance(X_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await J_(),!this.activeServiceWorker)return;this.sender=new q_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Y_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ys();return await _a(e,kr,"1"),await ya(e,kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_a(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ey(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ya(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qr(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ty)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zl.type="LOCAL";const ry=zl;new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t,e){return e?et(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends xi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sy(t){return Ul(t.auth,new Bi(t),t.bypassAuthState)}function iy(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),F_(n,new Bi(t),t.bypassAuthState)}async function oy(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),U_(n,new Bi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sy;case"linkViaPopup":case"linkViaRedirect":return oy;case"reauthViaPopup":case"reauthViaRedirect":return iy;default:Oe(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Jn(2e3,1e4);class Qt extends Gl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qt.currentPopupAction&&Qt.currentPopupAction.cancel(),Qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=$i();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ay.get())};e()}}Qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="pendingRedirect",gr=new Map;class ly extends Gl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gr.get(this.auth._key());if(!e){try{const r=await uy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gr.set(this.auth._key(),e)}return this.bypassAuthState||gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uy(t,e){const n=Yl(e),r=Jl(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function fy(t,e){return Jl(t)._set(Yl(e),"true")}function dy(t,e){gr.set(t._key(),e)}function Jl(t){return et(t._redirectPersistence)}function Yl(t){return pr(cy,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t,e,n){return hy(t,e,n)}async function hy(t,e,n){const r=Tt(t);Gm(t,e,Fi),await r._initializationPromise;const s=ql(r,n);return await fy(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function py(t,e,n=!1){const r=Tt(t),s=ql(r,e),o=await new ly(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=10*60*1e3;class my{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_y(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gy&&this.cachedEventUids.clear(),this.cachedEventUids.has(va(e))}saveEventToCache(e){this.cachedEventUids.add(va(e)),this.lastProcessedEventTime=Date.now()}}function va(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _y(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(t,e={}){return Wt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wy=/^https?/;async function by(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yy(t);for(const n of e)try{if(Iy(n))return}catch{}Oe(t,"unauthorized-domain")}function Iy(t){const e=Js(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wy.test(n))return!1;if(vy.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=new Jn(3e4,6e4);function wa(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ty(t){return new Promise((e,n)=>{var r,s,i;function o(){wa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wa(),n(We(t,"network-request-failed"))},timeout:Ey.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)o();else{const c=b_("iframefcb");return Ke()[c]=()=>{gapi.load?o():n(We(t,"network-request-failed"))},Ml(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw mr=null,e})}let mr=null;function Sy(t){return mr=mr||Ty(t),mr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new Jn(5e3,15e3),Ay="__/auth/iframe",Cy="emulator/auth/iframe",Py={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Oy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ky(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ni(e,Cy):`https://${t.config.authDomain}/${Ay}`,r={apiKey:e.apiKey,appName:t.name,v:Gn},s=Oy.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function Dy(t){const e=await Sy(t),n=Ke().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:ky(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Py,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=We(t,"network-request-failed"),c=Ke().setTimeout(()=>{i(o)},Ry.get());function a(){Ke().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},My=500,Ly=600,xy="_blank",Uy="http://localhost";class ba{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fy(t,e,n,r=My,s=Ly){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Ny),{width:r.toString(),height:s.toString(),top:i,left:o}),l=me().toLowerCase();n&&(c=Al(l)?xy:n),Rl(l)&&(e=e||Uy,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[_,S])=>`${p}${_}=${S},`,"");if(d_(l)&&c!=="_self")return $y(e||"",c),new ba(null);const h=window.open(e||"",c,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new ba(h)}function $y(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="__/auth/handler",jy="emulator/auth/handler",Hy=encodeURIComponent("fac");async function Ia(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gn,eventId:s};if(e instanceof Fi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ep(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Xn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Hy}=${encodeURIComponent(a)}`:"";return`${Vy(t)}?${qn(c).slice(1)}${l}`}function Vy({config:t}){return t.emulator?Ni(t,jy):`https://${t.authDomain}/${By}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="webStorageSupport";class Wy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hl,this._completeRedirectFn=py,this._overrideRedirectResult=dy}async _openPopup(e,n,r,s){var i;rt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ia(e,n,r,Js(),s);return Fy(e,o,$i())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ia(e,n,r,Js(),s);return G_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Dy(e),r=new my(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ts,{type:Ts},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ts];o!==void 0&&n(!!o),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=by(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dl()||Li()||Yr()}}const Ky=Wy;var Ea="@firebase/auth",Ta="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gy(t){nt(new qe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nl(t)},l=new v_(r,s,i,a);return A_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nt(new qe("auth-internal",e=>{const n=Tt(e.getProvider("auth").getImmediate());return(r=>new zy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(Ea,Ta,qy(t)),Ve(Ea,Ta,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=5*60,Yy=Fc("authIdTokenMaxAge")||Jy;let Sa=null;const Xy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yy)return;const s=n==null?void 0:n.token;Sa!==s&&(Sa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qy(t=Kc()){const e=pn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=R_(t,{popupRedirectResolver:Ky,persistence:[ry,K_,Hl]}),r=Fc("authTokenSyncURL");if(r){const i=Xy(r);j_(n,i,()=>i(n.currentUser)),B_(n,o=>i(o))}const s=Kh("auth");return s&&C_(n,`http://${s}`),n}Gy("Browser");const Zy={apiKey:"AIzaSyCaFEOlw1_MW6jkKwLM7Wi4DALoTmfx01k",authDomain:"tracker-97bfa.firebaseapp.com",projectId:"tracker-97bfa",storageBucket:"tracker-97bfa.appspot.com",messagingSenderId:"658292198263",appId:"1:658292198263:web:245b2a87dcee09087e6f72",measurementId:"G-EN15KQD2LD"},Ql=Wc(Zy);jm(Ql);const Zl=Qy(Ql),ev="/tracker/",tv={BASE_PATH:ev},nv=[{path:"/",name:"Home",component:()=>or(()=>import("./Home-140ebaad.js"),["assets/Home-140ebaad.js","assets/Home-03057eba.css"]),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>or(()=>import("./Login-fc027199.js"),["assets/Login-fc027199.js","assets/OAuthButtons.vue_vue_type_script_setup_true_lang-5571543a.js"]),meta:{requiresUnauth:!0}},{path:"/register",name:"Register",component:()=>or(()=>import("./Register-4311aee1.js"),["assets/Register-4311aee1.js","assets/OAuthButtons.vue_vue_type_script_setup_true_lang-5571543a.js"]),meta:{requiresUnauth:!0}},{path:"/profile",name:"Profile",component:()=>or(()=>import("./Profile-1c61cdb0.js"),[]),meta:{requiresAuth:!0}}],eu=xh({history:Qd(tv.BASE_PATH),routes:nv});eu.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=t.matched.some(i=>i.meta.requiresUnauth);return new Promise(i=>{Zl.onAuthStateChanged(o=>{r&&!o?n("/login"):s&&o?n("/"):n(),i()})})});var rv=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let tu;const Zr=t=>tu=t,nu=Symbol();function Xs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Dn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Dn||(Dn={}));function sv(){const t=Ma(!0),e=t.run(()=>di({}));let n=[],r=[];const s=Fr({install(i){Zr(s),s._a=i,i.provide(nu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!rv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ru=()=>{};function Ra(t,e,n,r=ru){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&La()&&yu(s),s}function Jt(t,...e){t.slice().forEach(n=>{n(...e)})}const iv=t=>t();function Qs(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Xs(s)&&Xs(r)&&t.hasOwnProperty(n)&&!ie(r)&&!yt(r)?t[n]=Qs(s,r):t[n]=r}return t}const ov=Symbol();function av(t){return!Xs(t)||!t.hasOwnProperty(ov)}const{assign:ut}=Object;function cv(t){return!!(ie(t)&&t.effect)}function lv(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const u=Vu(n.state.value[t]);return ut(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Fr(Pe(()=>{Zr(n);const _=n._s.get(t);return o[p].call(_,_)})),h),{}))}return a=su(t,l,e,n,r,!0),a}function su(t,e,n={},r,s,i){let o;const c=ut({actions:{}},n),a={deep:!0};let l,u,h=[],p=[],_;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),di({});let C;function x(W){let H;l=u=!1,typeof W=="function"?(W(r.state.value[t]),H={type:Dn.patchFunction,storeId:t,events:_}):(Qs(r.state.value[t],W),H={type:Dn.patchObject,payload:W,storeId:t,events:_});const re=C=Symbol();pi().then(()=>{C===re&&(l=!0)}),u=!0,Jt(h,H,r.state.value[t])}const O=i?function(){const{state:H}=n,re=H?H():{};this.$patch(de=>{ut(de,re)})}:ru;function D(){o.stop(),h=[],p=[],r._s.delete(t)}function j(W,H){return function(){Zr(r);const re=Array.from(arguments),de=[],Ie=[];function Ae(q){de.push(q)}function St(q){Ie.push(q)}Jt(p,{args:re,name:W,store:G,after:Ae,onError:St});let Ce;try{Ce=H.apply(this&&this.$id===t?this:G,re)}catch(q){throw Jt(Ie,q),q}return Ce instanceof Promise?Ce.then(q=>(Jt(de,q),q)).catch(q=>(Jt(Ie,q),Promise.reject(q))):(Jt(de,Ce),Ce)}}const N={_p:r,$id:t,$onAction:Ra.bind(null,p),$patch:x,$reset:O,$subscribe(W,H={}){const re=Ra(h,W,H.detached,()=>de()),de=o.run(()=>Sn(()=>r.state.value[t],Ie=>{(H.flush==="sync"?u:l)&&W({storeId:t,type:Dn.direct,events:_},Ie)},ut({},a,H)));return re},$dispose:D},G=zn(N);r._s.set(t,G);const ce=(r._a&&r._a.runWithContext||iv)(()=>r._e.run(()=>(o=Ma()).run(e)));for(const W in ce){const H=ce[W];if(ie(H)&&!cv(H)||yt(H))i||(S&&av(H)&&(ie(H)?H.value=S[W]:Qs(H,S[W])),r.state.value[t][W]=H);else if(typeof H=="function"){const re=j(W,H);ce[W]=re,c.actions[W]=H}}return ut(G,ce),ut(z(G),ce),Object.defineProperty(G,"$state",{get:()=>r.state.value[t],set:W=>{x(H=>{ut(H,W)})}}),r._p.forEach(W=>{ut(G,o.run(()=>W({store:G,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(G.$state,S),l=!0,u=!0,G}function uv(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,a){const l=Of();return c=c||(l?xe(nu,null):null),c&&Zr(c),c=tu,c._s.has(r)||(i?su(r,e,s,c):lv(r,s,c)),c._s.get(r)}return o.$id=r,o}const fv=t=>{const e=sv();t.use(e)},dv=uv({id:"user",state:()=>({user:null}),actions:{setUser(t){this.user=t}}});const ji=Rd(Dd);ji.use(eu);fv(ji);const hv=dv();Zl.onAuthStateChanged(t=>{hv.setUser(t)});ji.mount("#app");export{pt as G,Pd as _,mv as a,Ir as b,Vf as c,mi as d,ge as e,wv as f,Qy as g,Iv as h,gt as i,Zl as j,df as k,to as l,Bf as o,gv as p,di as r,bv as s,pv as t,vv as u,yv as v,_v as w};
