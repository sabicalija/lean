(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Na(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ce={},Ln=[],qe=()=>{},fh=()=>!1,dh=/^on[^a-z]/,Ki=e=>dh.test(e),Ma=e=>e.startsWith("onUpdate:"),_e=Object.assign,Da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hh=Object.prototype.hasOwnProperty,X=(e,t)=>hh.call(e,t),W=Array.isArray,Fn=e=>qi(e)==="[object Map]",Zl=e=>qi(e)==="[object Set]",K=e=>typeof e=="function",be=e=>typeof e=="string",La=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",eu=e=>(fe(e)||K(e))&&K(e.then)&&K(e.catch),tu=Object.prototype.toString,qi=e=>tu.call(e),ph=e=>qi(e).slice(8,-1),nu=e=>qi(e)==="[object Object]",Fa=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mi=Na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},mh=/-(\w)/g,at=Gi(e=>e.replace(mh,(t,n)=>n?n.toUpperCase():"")),gh=/\B([A-Z])/g,Gn=Gi(e=>e.replace(gh,"-$1").toLowerCase()),Yi=Gi(e=>e.charAt(0).toUpperCase()+e.slice(1)),bs=Gi(e=>e?`on${Yi(e)}`:""),pn=(e,t)=>!Object.is(e,t),gi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ti=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Gs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Wo;const Ys=()=>Wo||(Wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $a(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=be(r)?_h(r):$a(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(be(e)||fe(e))return e}const vh=/;(?![^(]*\))/g,yh=/:([^]+)/,bh=/\/\*[^]*?\*\//g;function _h(e){const t={};return e.replace(bh,"").split(vh).forEach(n=>{if(n){const r=n.split(yh);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ua(e){let t="";if(be(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=Ua(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const wh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ih=Na(wh);function ru(e){return!!e||e===""}const _1=e=>be(e)?e:e==null?"":W(e)||fe(e)&&(e.toString===tu||!K(e.toString))?JSON.stringify(e,iu,2):String(e),iu=(e,t)=>t&&t.__v_isRef?iu(e,t.value):Fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Zl(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!W(t)&&!nu(t)?String(t):t;let Le;class su{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function au(e){return new su(e)}function Eh(e,t=Le){t&&t.active&&t.effects.push(e)}function ja(){return Le}function ou(e){Le&&Le.cleanups.push(e)}const Ba=e=>{const t=new Set(e);return t.w=0,t.n=0,t},cu=e=>(e.w&qt)>0,lu=e=>(e.n&qt)>0,Sh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qt},Ah=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];cu(i)&&!lu(i)?i.delete(e):t[n++]=i,i.w&=~qt,i.n&=~qt}t.length=n}},ki=new WeakMap;let ir=0,qt=1;const Js=30;let We;const un=Symbol(""),Xs=Symbol("");class Ha{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Eh(this,r)}run(){if(!this.active)return this.fn();let t=We,n=Ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=We,We=this,Ut=!0,qt=1<<++ir,ir<=Js?Sh(this):Vo(this),this.fn()}finally{ir<=Js&&Ah(this),qt=1<<--ir,We=this.parent,Ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(Vo(this),this.onStop&&this.onStop(),this.active=!1)}}function Vo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ut=!0;const uu=[];function Yn(){uu.push(Ut),Ut=!1}function Jn(){const e=uu.pop();Ut=e===void 0?!0:e}function xe(e,t,n){if(Ut&&We){let r=ki.get(e);r||ki.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ba()),fu(i)}}function fu(e,t){let n=!1;ir<=Js?lu(e)||(e.n|=qt,n=!cu(e)):n=!e.has(We),n&&(e.add(We),We.deps.push(e))}function vt(e,t,n,r,i,s){const a=ki.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&W(e)){const c=Number(r);a.forEach((l,u)=>{(u==="length"||u>=c)&&o.push(l)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":W(e)?Fa(n)&&o.push(a.get("length")):(o.push(a.get(un)),Fn(e)&&o.push(a.get(Xs)));break;case"delete":W(e)||(o.push(a.get(un)),Fn(e)&&o.push(a.get(Xs)));break;case"set":Fn(e)&&o.push(a.get(un));break}if(o.length===1)o[0]&&Qs(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);Qs(Ba(c))}}function Qs(e,t){const n=W(e)?e:[...e];for(const r of n)r.computed&&Ko(r);for(const r of n)r.computed||Ko(r)}function Ko(e,t){(e!==We||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Th(e,t){var n;return(n=ki.get(e))==null?void 0:n.get(t)}const kh=Na("__proto__,__v_isRef,__isVue"),du=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(La)),qo=Ch();function Ch(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Z(this);for(let s=0,a=this.length;s<a;s++)xe(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Yn();const r=Z(this)[t].apply(this,n);return Jn(),r}}),e}function Ph(e){const t=Z(this);return xe(t,"has",e),t.hasOwnProperty(e)}class hu{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&r===(i?s?Hh:vu:s?gu:mu).get(t))return t;const a=W(t);if(!i){if(a&&X(qo,n))return Reflect.get(qo,n,r);if(n==="hasOwnProperty")return Ph}const o=Reflect.get(t,n,r);return(La(n)?du.has(n):kh(n))||(i||xe(t,"get",n),s)?o:pe(o)?a&&Fa(n)?o:o.value:fe(o)?i?Xi(o):$r(o):o}}class pu extends hu{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(Hn(s)&&pe(s)&&!pe(r))return!1;if(!this._shallow&&(!Ci(r)&&!Hn(r)&&(s=Z(s),r=Z(r)),!W(t)&&pe(s)&&!pe(r)))return s.value=r,!0;const a=W(t)&&Fa(n)?Number(n)<t.length:X(t,n),o=Reflect.set(t,n,r,i);return t===Z(i)&&(a?pn(r,s)&&vt(t,"set",n,r):vt(t,"add",n,r)),o}deleteProperty(t,n){const r=X(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&vt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!La(n)||!du.has(n))&&xe(t,"has",n),r}ownKeys(t){return xe(t,"iterate",W(t)?"length":un),Reflect.ownKeys(t)}}class Oh extends hu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Rh=new pu,xh=new Oh,Nh=new pu(!0),za=e=>e,Ji=e=>Reflect.getPrototypeOf(e);function Xr(e,t,n=!1,r=!1){e=e.__v_raw;const i=Z(e),s=Z(t);n||(pn(t,s)&&xe(i,"get",t),xe(i,"get",s));const{has:a}=Ji(i),o=r?za:n?Ka:br;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function Qr(e,t=!1){const n=this.__v_raw,r=Z(n),i=Z(e);return t||(pn(e,i)&&xe(r,"has",e),xe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Zr(e,t=!1){return e=e.__v_raw,!t&&xe(Z(e),"iterate",un),Reflect.get(e,"size",e)}function Go(e){e=Z(e);const t=Z(this);return Ji(t).has.call(t,e)||(t.add(e),vt(t,"add",e,e)),this}function Yo(e,t){t=Z(t);const n=Z(this),{has:r,get:i}=Ji(n);let s=r.call(n,e);s||(e=Z(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?pn(t,a)&&vt(n,"set",e,t):vt(n,"add",e,t),this}function Jo(e){const t=Z(this),{has:n,get:r}=Ji(t);let i=n.call(t,e);i||(e=Z(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&vt(t,"delete",e,void 0),s}function Xo(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&vt(e,"clear",void 0,void 0),n}function ei(e,t){return function(r,i){const s=this,a=s.__v_raw,o=Z(a),c=t?za:e?Ka:br;return!e&&xe(o,"iterate",un),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function ti(e,t,n){return function(...r){const i=this.__v_raw,s=Z(i),a=Fn(s),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=i[e](...r),u=n?za:t?Ka:br;return!t&&xe(s,"iterate",c?Xs:un),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:o?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ct(e){return function(...t){return e==="delete"?!1:this}}function Mh(){const e={get(s){return Xr(this,s)},get size(){return Zr(this)},has:Qr,add:Go,set:Yo,delete:Jo,clear:Xo,forEach:ei(!1,!1)},t={get(s){return Xr(this,s,!1,!0)},get size(){return Zr(this)},has:Qr,add:Go,set:Yo,delete:Jo,clear:Xo,forEach:ei(!1,!0)},n={get(s){return Xr(this,s,!0)},get size(){return Zr(this,!0)},has(s){return Qr.call(this,s,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:ei(!0,!1)},r={get(s){return Xr(this,s,!0,!0)},get size(){return Zr(this,!0)},has(s){return Qr.call(this,s,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:ei(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ti(s,!1,!1),n[s]=ti(s,!0,!1),t[s]=ti(s,!1,!0),r[s]=ti(s,!0,!0)}),[e,n,t,r]}const[Dh,Lh,Fh,$h]=Mh();function Wa(e,t){const n=t?e?$h:Fh:e?Lh:Dh;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(X(n,i)&&i in r?n:r,i,s)}const Uh={get:Wa(!1,!1)},jh={get:Wa(!1,!0)},Bh={get:Wa(!0,!1)},mu=new WeakMap,gu=new WeakMap,vu=new WeakMap,Hh=new WeakMap;function zh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wh(e){return e.__v_skip||!Object.isExtensible(e)?0:zh(ph(e))}function $r(e){return Hn(e)?e:Va(e,!1,Rh,Uh,mu)}function yu(e){return Va(e,!1,Nh,jh,gu)}function Xi(e){return Va(e,!0,xh,Bh,vu)}function Va(e,t,n,r,i){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=Wh(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function jt(e){return Hn(e)?jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Hn(e){return!!(e&&e.__v_isReadonly)}function Ci(e){return!!(e&&e.__v_isShallow)}function bu(e){return jt(e)||Hn(e)}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Qi(e){return Ti(e,"__v_skip",!0),e}const br=e=>fe(e)?$r(e):e,Ka=e=>fe(e)?Xi(e):e;function qa(e){Ut&&We&&(e=Z(e),fu(e.dep||(e.dep=Ba())))}function Ga(e,t){e=Z(e);const n=e.dep;n&&Qs(n)}function pe(e){return!!(e&&e.__v_isRef===!0)}function ct(e){return wu(e,!1)}function _u(e){return wu(e,!0)}function wu(e,t){return pe(e)?e:new Vh(e,t)}class Vh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Z(t),this._value=n?t:br(t)}get value(){return qa(this),this._value}set value(t){const n=this.__v_isShallow||Ci(t)||Hn(t);t=n?t:Z(t),pn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:br(t),Ga(this))}}function Be(e){return pe(e)?e.value:e}const Kh={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Iu(e){return jt(e)?e:new Proxy(e,Kh)}class qh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>qa(this),()=>Ga(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Gh(e){return new qh(e)}function Yh(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=Eu(e,n);return t}class Jh{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Th(Z(this._object),this._key)}}class Xh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Qh(e,t,n){return pe(e)?e:K(e)?new Xh(e):fe(e)&&arguments.length>1?Eu(e,t,n):ct(e)}function Eu(e,t,n){const r=e[t];return pe(r)?r:new Jh(e,t,n)}class Zh{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ha(t,()=>{this._dirty||(this._dirty=!0,Ga(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Z(this);return qa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ep(e,t,n=!1){let r,i;const s=K(e);return s?(r=e,i=qe):(r=e.get,i=e.set),new Zh(r,i,s||!i,n)}function Bt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Zi(s,t,n)}return i}function Ge(e,t,n,r){if(K(e)){const s=Bt(e,t,n,r);return s&&eu(s)&&s.catch(a=>{Zi(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Ge(e[s],t,n,r));return i}function Zi(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,o)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Bt(c,null,10,[e,a,o]);return}}tp(e,n,i,r)}function tp(e,t,n,r=!0){console.error(e)}let _r=!1,Zs=!1;const Ee=[];let tt=0;const $n=[];let ht=null,rn=0;const Su=Promise.resolve();let Ya=null;function Ur(e){const t=Ya||Su;return e?t.then(this?e.bind(this):e):t}function np(e){let t=tt+1,n=Ee.length;for(;t<n;){const r=t+n>>>1;wr(Ee[r])<e?t=r+1:n=r}return t}function Ja(e){(!Ee.length||!Ee.includes(e,_r&&e.allowRecurse?tt+1:tt))&&(e.id==null?Ee.push(e):Ee.splice(np(e.id),0,e),Au())}function Au(){!_r&&!Zs&&(Zs=!0,Ya=Su.then(ku))}function rp(e){const t=Ee.indexOf(e);t>tt&&Ee.splice(t,1)}function ip(e){W(e)?$n.push(...e):(!ht||!ht.includes(e,e.allowRecurse?rn+1:rn))&&$n.push(e),Au()}function Qo(e,t=_r?tt+1:0){for(;t<Ee.length;t++){const n=Ee[t];n&&n.pre&&(Ee.splice(t,1),t--,n())}}function Tu(e){if($n.length){const t=[...new Set($n)];if($n.length=0,ht){ht.push(...t);return}for(ht=t,ht.sort((n,r)=>wr(n)-wr(r)),rn=0;rn<ht.length;rn++)ht[rn]();ht=null,rn=0}}const wr=e=>e.id==null?1/0:e.id,sp=(e,t)=>{const n=wr(e)-wr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ku(e){Zs=!1,_r=!0,Ee.sort(sp);const t=qe;try{for(tt=0;tt<Ee.length;tt++){const n=Ee[tt];n&&n.active!==!1&&Bt(n,null,14)}}finally{tt=0,Ee.length=0,Tu(),_r=!1,Ya=null,(Ee.length||$n.length)&&ku()}}function ap(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ce;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:p}=r[u]||ce;p&&(i=n.map(m=>be(m)?m.trim():m)),f&&(i=n.map(Gs))}let o,c=r[o=bs(t)]||r[o=bs(at(t))];!c&&s&&(c=r[o=bs(Gn(t))]),c&&Ge(c,e,6,i);const l=r[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ge(l,e,6,i)}}function Cu(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!K(e)){const c=l=>{const u=Cu(l,t,!0);u&&(o=!0,_e(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(fe(e)&&r.set(e,null),null):(W(s)?s.forEach(c=>a[c]=null):_e(a,s),fe(e)&&r.set(e,a),a)}function es(e,t){return!e||!Ki(t)?!1:(t=t.slice(2).replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,Gn(t))||X(e,t))}let ye=null,ts=null;function Pi(e){const t=ye;return ye=e,ts=e&&e.type.__scopeId||null,t}function w1(e){ts=e}function I1(){ts=null}function Ht(e,t=ye,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&lc(-1);const s=Pi(t);let a;try{a=e(...i)}finally{Pi(s),r._d&&lc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function _s(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:m,ctx:I,inheritAttrs:A}=e;let N,v;const b=Pi(e);try{if(n.shapeFlag&4){const T=i||r;N=et(u.call(T,T,f,s,m,p,I)),v=c}else{const T=t;N=et(T.length>1?T(s,{attrs:c,slots:o,emit:l}):T(s,null)),v=t.props?c:op(c)}}catch(T){fr.length=0,Zi(T,e,1),N=Q(Gt)}let O=N;if(v&&A!==!1){const T=Object.keys(v),{shapeFlag:U}=O;T.length&&U&7&&(a&&T.some(Ma)&&(v=cp(v,a)),O=zn(O,v))}return n.dirs&&(O=zn(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),N=O,Pi(b),N}const op=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ki(n))&&((t||(t={}))[n]=e[n]);return t},cp=(e,t)=>{const n={};for(const r in e)(!Ma(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function lp(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zo(r,a,l):!!a;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(a[p]!==r[p]&&!es(l,p))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?Zo(r,a,l):!0:!!a;return!1}function Zo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!es(n,s))return!0}return!1}function up({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const fp=e=>e.__isSuspense;function dp(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):ip(e)}function hp(e,t){return Xa(e,null,t)}const ni={};function yt(e,t,n){return Xa(e,t,n)}function Xa(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ce){var o;const c=ja()===((o=ge)==null?void 0:o.scope)?ge:null;let l,u=!1,f=!1;if(pe(e)?(l=()=>e.value,u=Ci(e)):jt(e)?(l=()=>e,r=!0):W(e)?(f=!0,u=e.some(T=>jt(T)||Ci(T)),l=()=>e.map(T=>{if(pe(T))return T.value;if(jt(T))return an(T);if(K(T))return Bt(T,c,2)})):K(e)?t?l=()=>Bt(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Ge(e,c,3,[m])}:l=qe,t&&r){const T=l;l=()=>an(T())}let p,m=T=>{p=b.onStop=()=>{Bt(T,c,4)}},I;if(Ar)if(m=qe,t?n&&Ge(t,c,3,[l(),f?[]:void 0,m]):l(),i==="sync"){const T=lm();I=T.__watcherHandles||(T.__watcherHandles=[])}else return qe;let A=f?new Array(e.length).fill(ni):ni;const N=()=>{if(b.active)if(t){const T=b.run();(r||u||(f?T.some((U,Y)=>pn(U,A[Y])):pn(T,A)))&&(p&&p(),Ge(t,c,3,[T,A===ni?void 0:f&&A[0]===ni?[]:A,m]),A=T)}else b.run()};N.allowRecurse=!!t;let v;i==="sync"?v=N:i==="post"?v=()=>Ce(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),v=()=>Ja(N));const b=new Ha(l,v);t?n?N():A=b.run():i==="post"?Ce(b.run.bind(b),c&&c.suspense):b.run();const O=()=>{b.stop(),c&&c.scope&&Da(c.scope.effects,b)};return I&&I.push(O),O}function pp(e,t,n){const r=this.proxy,i=be(e)?e.includes(".")?Pu(r,e):()=>r[e]:e.bind(r,r);let s;K(t)?s=t:(s=t.handler,n=t);const a=ge;Wn(this);const o=Xa(i,s.bind(r),n);return a?Wn(a):dn(),o}function Pu(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function an(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))an(e.value,t);else if(W(e))for(let n=0;n<e.length;n++)an(e[n],t);else if(Zl(e)||Fn(e))e.forEach(n=>{an(n,t)});else if(nu(e))for(const n in e)an(e[n],t);return e}function E1(e,t){const n=ye;if(n===null)return e;const r=ss(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,o,c,l=ce]=t[s];a&&(K(a)&&(a={mounted:a,updated:a}),a.deep&&an(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:c,modifiers:l}))}return e}function en(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(Yn(),Ge(c,n,8,[e.el,o,e,t]),Jn())}}/*! #__NO_SIDE_EFFECTS__ */function St(e,t){return K(e)?(()=>_e({name:e.name},t,{setup:e}))():e}const lr=e=>!!e.type.__asyncLoader,Ou=e=>e.type.__isKeepAlive;function mp(e,t){Ru(e,"a",t)}function gp(e,t){Ru(e,"da",t)}function Ru(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ns(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ou(i.parent.vnode)&&vp(r,t,n,i),i=i.parent}}function vp(e,t,n,r){const i=ns(t,e,r,!0);xu(()=>{Da(r[t],i)},n)}function ns(e,t,n=ge,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Yn(),Wn(n);const o=Ge(t,n,e,a);return dn(),Jn(),o});return r?i.unshift(s):i.push(s),s}}const At=e=>(t,n=ge)=>(!Ar||e==="sp")&&ns(e,(...r)=>t(...r),n),yp=At("bm"),Qa=At("m"),bp=At("bu"),_p=At("u"),wp=At("bum"),xu=At("um"),Ip=At("sp"),Ep=At("rtg"),Sp=At("rtc");function Ap(e,t=ge){ns("ec",e,t)}const Nu="components";function Ir(e,t){return kp(Nu,e,!0,t)||e}const Tp=Symbol.for("v-ndc");function kp(e,t,n=!0,r=!1){const i=ye||ge;if(i){const s=i.type;if(e===Nu){const o=am(s,!1);if(o&&(o===t||o===at(t)||o===Yi(at(t))))return s}const a=ec(i[e]||s[e],t)||ec(i.appContext[e],t);return!a&&r?s:a}}function ec(e,t){return e&&(e[t]||e[at(t)]||e[Yi(at(t))])}function Cp(e,t,n={},r,i){if(ye.isCE||ye.parent&&lr(ye.parent)&&ye.parent.isCE)return t!=="default"&&(n.name=t),Q("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),Ne();const a=s&&Mu(s(n)),o=to(Pe,{key:n.key||a&&a.key||`_${t}`},a||(r?r():[]),a&&e._===1?64:-2);return!i&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function Mu(e){return e.some(t=>Ri(t)?!(t.type===Gt||t.type===Pe&&!Mu(t.children)):!0)?e:null}const ea=e=>e?Vu(e)?ss(e)||e.proxy:ea(e.parent):null,ur=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ea(e.parent),$root:e=>ea(e.root),$emit:e=>e.emit,$options:e=>Za(e),$forceUpdate:e=>e.f||(e.f=()=>Ja(e.update)),$nextTick:e=>e.n||(e.n=Ur.bind(e.proxy)),$watch:e=>pp.bind(e)}),ws=(e,t)=>e!==ce&&!e.__isScriptSetup&&X(e,t),Pp={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=e;let l;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(ws(r,t))return a[t]=1,r[t];if(i!==ce&&X(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&X(l,t))return a[t]=3,s[t];if(n!==ce&&X(n,t))return a[t]=4,n[t];ta&&(a[t]=0)}}const u=ur[t];let f,p;if(u)return t==="$attrs"&&xe(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==ce&&X(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,X(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return ws(i,t)?(i[t]=n,!0):r!==ce&&X(r,t)?(r[t]=n,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==ce&&X(e,a)||ws(t,a)||(o=s[0])&&X(o,a)||X(r,a)||X(ur,a)||X(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:X(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function tc(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ta=!0;function Op(e){const t=Za(e),n=e.proxy,r=e.ctx;ta=!1,t.beforeCreate&&nc(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:I,activated:A,deactivated:N,beforeDestroy:v,beforeUnmount:b,destroyed:O,unmounted:T,render:U,renderTracked:Y,renderTriggered:q,errorCaptured:R,serverPrefetch:L,expose:G,inheritAttrs:we,components:Me,directives:Ue,filters:Zt}=t;if(l&&Rp(l,r,null),a)for(const se in a){const te=a[se];K(te)&&(r[se]=te.bind(n))}if(i){const se=i.call(n,n);fe(se)&&(e.data=$r(se))}if(ta=!0,s)for(const se in s){const te=s[se],ft=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):qe,kt=!K(te)&&K(te.set)?te.set.bind(n):qe,Xe=de({get:ft,set:kt});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Te=>Xe.value=Te})}if(o)for(const se in o)Du(o[se],r,n,se);if(c){const se=K(c)?c.call(n):c;Reflect.ownKeys(se).forEach(te=>{vi(te,se[te])})}u&&nc(u,e,"c");function ee(se,te){W(te)?te.forEach(ft=>se(ft.bind(n))):te&&se(te.bind(n))}if(ee(yp,f),ee(Qa,p),ee(bp,m),ee(_p,I),ee(mp,A),ee(gp,N),ee(Ap,R),ee(Sp,Y),ee(Ep,q),ee(wp,b),ee(xu,T),ee(Ip,L),W(G))if(G.length){const se=e.exposed||(e.exposed={});G.forEach(te=>{Object.defineProperty(se,te,{get:()=>n[te],set:ft=>n[te]=ft})})}else e.exposed||(e.exposed={});U&&e.render===qe&&(e.render=U),we!=null&&(e.inheritAttrs=we),Me&&(e.components=Me),Ue&&(e.directives=Ue)}function Rp(e,t,n=qe){W(e)&&(e=na(e));for(const r in e){const i=e[r];let s;fe(i)?"default"in i?s=Oe(i.from||r,i.default,!0):s=Oe(i.from||r):s=Oe(i),pe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function nc(e,t,n){Ge(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Du(e,t,n,r){const i=r.includes(".")?Pu(n,r):()=>n[r];if(be(e)){const s=t[e];K(s)&&yt(i,s)}else if(K(e))yt(i,e.bind(n));else if(fe(e))if(W(e))e.forEach(s=>Du(s,t,n,r));else{const s=K(e.handler)?e.handler.bind(n):t[e.handler];K(s)&&yt(i,s,e)}}function Za(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>Oi(c,l,a,!0)),Oi(c,t,a)),fe(t)&&s.set(t,c),c}function Oi(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Oi(e,s,n,!0),i&&i.forEach(a=>Oi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=xp[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const xp={data:rc,props:ic,emits:ic,methods:sr,computed:sr,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:sr,directives:sr,watch:Mp,provide:rc,inject:Np};function rc(e,t){return t?e?function(){return _e(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Np(e,t){return sr(na(e),na(t))}function na(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function sr(e,t){return e?_e(Object.create(null),e,t):t}function ic(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:_e(Object.create(null),tc(e),tc(t??{})):t}function Mp(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=Ae(e[r],t[r]);return n}function Lu(){return{app:null,config:{isNativeTag:fh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dp=0;function Lp(e,t){return function(r,i=null){K(r)||(r=_e({},r)),i!=null&&!fe(i)&&(i=null);const s=Lu(),a=new WeakSet;let o=!1;const c=s.app={_uid:Dp++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:um,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&K(l.install)?(a.add(l),l.install(c,...u)):K(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!o){const p=Q(r,i);return p.appContext=s,u&&t?t(p,l):e(p,l,f),o=!0,c._container=l,l.__vue_app__=c,ss(p.component)||p.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){Er=c;try{return l()}finally{Er=null}}};return c}}let Er=null;function vi(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function Oe(e,t,n=!1){const r=ge||ye;if(r||Er){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Er._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}function Fp(){return!!(ge||ye||Er)}function $p(e,t,n,r=!1){const i={},s={};Ti(s,is,1),e.propsDefaults=Object.create(null),Fu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:yu(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Up(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=Z(i),[c]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(es(e.emitsOptions,p))continue;const m=t[p];if(c)if(X(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const I=at(p);i[I]=ra(c,o,I,m,e,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{Fu(e,t,i,s)&&(l=!0);let u;for(const f in o)(!t||!X(t,f)&&((u=Gn(f))===f||!X(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=ra(c,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!X(t,f))&&(delete s[f],l=!0)}l&&vt(e,"set","$attrs")}function Fu(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let c in t){if(mi(c))continue;const l=t[c];let u;i&&X(i,u=at(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:es(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=Z(n),l=o||ce;for(let u=0;u<s.length;u++){const f=s[u];n[f]=ra(i,c,f,l[f],e,!X(l,f))}}return a}function ra(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=X(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&K(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Wn(i),r=l[n]=c.call(null,t),dn())}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===Gn(n))&&(r=!0))}return r}function $u(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let c=!1;if(!K(e)){const u=f=>{c=!0;const[p,m]=$u(f,t,!0);_e(a,p),m&&o.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return fe(e)&&r.set(e,Ln),Ln;if(W(s))for(let u=0;u<s.length;u++){const f=at(s[u]);sc(f)&&(a[f]=ce)}else if(s)for(const u in s){const f=at(u);if(sc(f)){const p=s[u],m=a[f]=W(p)||K(p)?{type:p}:_e({},p);if(m){const I=cc(Boolean,m.type),A=cc(String,m.type);m[0]=I>-1,m[1]=A<0||I<A,(I>-1||X(m,"default"))&&o.push(f)}}}const l=[a,o];return fe(e)&&r.set(e,l),l}function sc(e){return e[0]!=="$"}function ac(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function oc(e,t){return ac(e)===ac(t)}function cc(e,t){return W(t)?t.findIndex(n=>oc(n,e)):K(t)&&oc(t,e)?0:-1}const Uu=e=>e[0]==="_"||e==="$stable",eo=e=>W(e)?e.map(et):[et(e)],jp=(e,t,n)=>{if(t._n)return t;const r=Ht((...i)=>eo(t(...i)),n);return r._c=!1,r},ju=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Uu(i))continue;const s=e[i];if(K(s))t[i]=jp(i,s,r);else if(s!=null){const a=eo(s);t[i]=()=>a}}},Bu=(e,t)=>{const n=eo(t);e.slots.default=()=>n},Bp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Z(t),Ti(t,"_",n)):ju(t,e.slots={})}else e.slots={},t&&Bu(e,t);Ti(e.slots,is,1)},Hp=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ce;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(_e(i,t),!n&&o===1&&delete i._):(s=!t.$stable,ju(t,i)),a=t}else t&&(Bu(e,t),a={default:1});if(s)for(const o in i)!Uu(o)&&a[o]==null&&delete i[o]};function ia(e,t,n,r,i=!1){if(W(e)){e.forEach((p,m)=>ia(p,t&&(W(t)?t[m]:t),n,r,i));return}if(lr(r)&&!i)return;const s=r.shapeFlag&4?ss(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=e,l=t&&t.r,u=o.refs===ce?o.refs={}:o.refs,f=o.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,X(f,l)&&(f[l]=null)):pe(l)&&(l.value=null)),K(c))Bt(c,o,12,[a,u]);else{const p=be(c),m=pe(c);if(p||m){const I=()=>{if(e.f){const A=p?X(f,c)?f[c]:u[c]:c.value;i?W(A)&&Da(A,s):W(A)?A.includes(s)||A.push(s):p?(u[c]=[s],X(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else p?(u[c]=a,X(f,c)&&(f[c]=a)):m&&(c.value=a,e.k&&(u[e.k]=a))};a?(I.id=-1,Ce(I,n)):I()}}}const Ce=dp;function zp(e){return Wp(e)}function Wp(e,t){const n=Ys();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=qe,insertStaticContent:I}=e,A=(d,h,g,y=null,w=null,E=null,x=!1,k=null,C=!!h.dynamicChildren)=>{if(d===h)return;d&&!nr(d,h)&&(y=_(d),Te(d,w,E,!0),d=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:S,ref:B,shapeFlag:F}=h;switch(S){case rs:N(d,h,g,y);break;case Gt:v(d,h,g,y);break;case yi:d==null&&b(h,g,y,x);break;case Pe:Me(d,h,g,y,w,E,x,k,C);break;default:F&1?U(d,h,g,y,w,E,x,k,C):F&6?Ue(d,h,g,y,w,E,x,k,C):(F&64||F&128)&&S.process(d,h,g,y,w,E,x,k,C,P)}B!=null&&w&&ia(B,d&&d.ref,E,h||d,!h)},N=(d,h,g,y)=>{if(d==null)r(h.el=o(h.children),g,y);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},v=(d,h,g,y)=>{d==null?r(h.el=c(h.children||""),g,y):h.el=d.el},b=(d,h,g,y)=>{[d.el,d.anchor]=I(d.children,h,g,y,d.el,d.anchor)},O=({el:d,anchor:h},g,y)=>{let w;for(;d&&d!==h;)w=p(d),r(d,g,y),d=w;r(h,g,y)},T=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),i(d),d=g;i(h)},U=(d,h,g,y,w,E,x,k,C)=>{x=x||h.type==="svg",d==null?Y(h,g,y,w,E,x,k,C):L(d,h,w,E,x,k,C)},Y=(d,h,g,y,w,E,x,k)=>{let C,S;const{type:B,props:F,shapeFlag:H,transition:V,dirs:J}=d;if(C=d.el=a(d.type,E,F&&F.is,F),H&8?u(C,d.children):H&16&&R(d.children,C,null,y,w,E&&B!=="foreignObject",x,k),J&&en(d,null,y,"created"),q(C,d,d.scopeId,x,y),F){for(const ie in F)ie!=="value"&&!mi(ie)&&s(C,ie,null,F[ie],E,d.children,y,w,Ie);"value"in F&&s(C,"value",null,F.value),(S=F.onVnodeBeforeMount)&&Ze(S,y,d)}J&&en(d,null,y,"beforeMount");const oe=(!w||w&&!w.pendingBranch)&&V&&!V.persisted;oe&&V.beforeEnter(C),r(C,h,g),((S=F&&F.onVnodeMounted)||oe||J)&&Ce(()=>{S&&Ze(S,y,d),oe&&V.enter(C),J&&en(d,null,y,"mounted")},w)},q=(d,h,g,y,w)=>{if(g&&m(d,g),y)for(let E=0;E<y.length;E++)m(d,y[E]);if(w){let E=w.subTree;if(h===E){const x=w.vnode;q(d,x,x.scopeId,x.slotScopeIds,w.parent)}}},R=(d,h,g,y,w,E,x,k,C=0)=>{for(let S=C;S<d.length;S++){const B=d[S]=k?Nt(d[S]):et(d[S]);A(null,B,h,g,y,w,E,x,k)}},L=(d,h,g,y,w,E,x)=>{const k=h.el=d.el;let{patchFlag:C,dynamicChildren:S,dirs:B}=h;C|=d.patchFlag&16;const F=d.props||ce,H=h.props||ce;let V;g&&tn(g,!1),(V=H.onVnodeBeforeUpdate)&&Ze(V,g,h,d),B&&en(h,d,g,"beforeUpdate"),g&&tn(g,!0);const J=w&&h.type!=="foreignObject";if(S?G(d.dynamicChildren,S,k,g,y,J,E):x||te(d,h,k,null,g,y,J,E,!1),C>0){if(C&16)we(k,h,F,H,g,y,w);else if(C&2&&F.class!==H.class&&s(k,"class",null,H.class,w),C&4&&s(k,"style",F.style,H.style,w),C&8){const oe=h.dynamicProps;for(let ie=0;ie<oe.length;ie++){const me=oe[ie],ze=F[me],kn=H[me];(kn!==ze||me==="value")&&s(k,me,ze,kn,w,d.children,g,y,Ie)}}C&1&&d.children!==h.children&&u(k,h.children)}else!x&&S==null&&we(k,h,F,H,g,y,w);((V=H.onVnodeUpdated)||B)&&Ce(()=>{V&&Ze(V,g,h,d),B&&en(h,d,g,"updated")},y)},G=(d,h,g,y,w,E,x)=>{for(let k=0;k<h.length;k++){const C=d[k],S=h[k],B=C.el&&(C.type===Pe||!nr(C,S)||C.shapeFlag&70)?f(C.el):g;A(C,S,B,null,y,w,E,x,!0)}},we=(d,h,g,y,w,E,x)=>{if(g!==y){if(g!==ce)for(const k in g)!mi(k)&&!(k in y)&&s(d,k,g[k],null,x,h.children,w,E,Ie);for(const k in y){if(mi(k))continue;const C=y[k],S=g[k];C!==S&&k!=="value"&&s(d,k,S,C,x,h.children,w,E,Ie)}"value"in y&&s(d,"value",g.value,y.value)}},Me=(d,h,g,y,w,E,x,k,C)=>{const S=h.el=d?d.el:o(""),B=h.anchor=d?d.anchor:o("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:V}=h;V&&(k=k?k.concat(V):V),d==null?(r(S,g,y),r(B,g,y),R(h.children,g,B,w,E,x,k,C)):F>0&&F&64&&H&&d.dynamicChildren?(G(d.dynamicChildren,H,g,w,E,x,k),(h.key!=null||w&&h===w.subTree)&&Hu(d,h,!0)):te(d,h,g,B,w,E,x,k,C)},Ue=(d,h,g,y,w,E,x,k,C)=>{h.slotScopeIds=k,d==null?h.shapeFlag&512?w.ctx.activate(h,g,y,x,C):Zt(h,g,y,w,E,x,C):je(d,h,C)},Zt=(d,h,g,y,w,E,x)=>{const k=d.component=tm(d,y,w);if(Ou(d)&&(k.ctx.renderer=P),nm(k),k.asyncDep){if(w&&w.registerDep(k,ee),!d.el){const C=k.subTree=Q(Gt);v(null,C,h,g)}return}ee(k,d,h,g,w,E,x)},je=(d,h,g)=>{const y=h.component=d.component;if(lp(d,h,g))if(y.asyncDep&&!y.asyncResolved){se(y,h,g);return}else y.next=h,rp(y.update),y.update();else h.el=d.el,y.vnode=h},ee=(d,h,g,y,w,E,x)=>{const k=()=>{if(d.isMounted){let{next:B,bu:F,u:H,parent:V,vnode:J}=d,oe=B,ie;tn(d,!1),B?(B.el=J.el,se(d,B,x)):B=J,F&&gi(F),(ie=B.props&&B.props.onVnodeBeforeUpdate)&&Ze(ie,V,B,J),tn(d,!0);const me=_s(d),ze=d.subTree;d.subTree=me,A(ze,me,f(ze.el),_(ze),d,w,E),B.el=me.el,oe===null&&up(d,me.el),H&&Ce(H,w),(ie=B.props&&B.props.onVnodeUpdated)&&Ce(()=>Ze(ie,V,B,J),w)}else{let B;const{el:F,props:H}=h,{bm:V,m:J,parent:oe}=d,ie=lr(h);if(tn(d,!1),V&&gi(V),!ie&&(B=H&&H.onVnodeBeforeMount)&&Ze(B,oe,h),tn(d,!0),F&&ne){const me=()=>{d.subTree=_s(d),ne(F,d.subTree,d,w,null)};ie?h.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=_s(d);A(null,me,g,y,d,w,E),h.el=me.el}if(J&&Ce(J,w),!ie&&(B=H&&H.onVnodeMounted)){const me=h;Ce(()=>Ze(B,oe,me),w)}(h.shapeFlag&256||oe&&lr(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&Ce(d.a,w),d.isMounted=!0,h=g=y=null}},C=d.effect=new Ha(k,()=>Ja(S),d.scope),S=d.update=()=>C.run();S.id=d.uid,tn(d,!0),S()},se=(d,h,g)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,Up(d,h.props,y,g),Hp(d,h.children,g),Yn(),Qo(),Jn()},te=(d,h,g,y,w,E,x,k,C=!1)=>{const S=d&&d.children,B=d?d.shapeFlag:0,F=h.children,{patchFlag:H,shapeFlag:V}=h;if(H>0){if(H&128){kt(S,F,g,y,w,E,x,k,C);return}else if(H&256){ft(S,F,g,y,w,E,x,k,C);return}}V&8?(B&16&&Ie(S,w,E),F!==S&&u(g,F)):B&16?V&16?kt(S,F,g,y,w,E,x,k,C):Ie(S,w,E,!0):(B&8&&u(g,""),V&16&&R(F,g,y,w,E,x,k,C))},ft=(d,h,g,y,w,E,x,k,C)=>{d=d||Ln,h=h||Ln;const S=d.length,B=h.length,F=Math.min(S,B);let H;for(H=0;H<F;H++){const V=h[H]=C?Nt(h[H]):et(h[H]);A(d[H],V,g,null,w,E,x,k,C)}S>B?Ie(d,w,E,!0,!1,F):R(h,g,y,w,E,x,k,C,F)},kt=(d,h,g,y,w,E,x,k,C)=>{let S=0;const B=h.length;let F=d.length-1,H=B-1;for(;S<=F&&S<=H;){const V=d[S],J=h[S]=C?Nt(h[S]):et(h[S]);if(nr(V,J))A(V,J,g,null,w,E,x,k,C);else break;S++}for(;S<=F&&S<=H;){const V=d[F],J=h[H]=C?Nt(h[H]):et(h[H]);if(nr(V,J))A(V,J,g,null,w,E,x,k,C);else break;F--,H--}if(S>F){if(S<=H){const V=H+1,J=V<B?h[V].el:y;for(;S<=H;)A(null,h[S]=C?Nt(h[S]):et(h[S]),g,J,w,E,x,k,C),S++}}else if(S>H)for(;S<=F;)Te(d[S],w,E,!0),S++;else{const V=S,J=S,oe=new Map;for(S=J;S<=H;S++){const De=h[S]=C?Nt(h[S]):et(h[S]);De.key!=null&&oe.set(De.key,S)}let ie,me=0;const ze=H-J+1;let kn=!1,Bo=0;const tr=new Array(ze);for(S=0;S<ze;S++)tr[S]=0;for(S=V;S<=F;S++){const De=d[S];if(me>=ze){Te(De,w,E,!0);continue}let Qe;if(De.key!=null)Qe=oe.get(De.key);else for(ie=J;ie<=H;ie++)if(tr[ie-J]===0&&nr(De,h[ie])){Qe=ie;break}Qe===void 0?Te(De,w,E,!0):(tr[Qe-J]=S+1,Qe>=Bo?Bo=Qe:kn=!0,A(De,h[Qe],g,null,w,E,x,k,C),me++)}const Ho=kn?Vp(tr):Ln;for(ie=Ho.length-1,S=ze-1;S>=0;S--){const De=J+S,Qe=h[De],zo=De+1<B?h[De+1].el:y;tr[S]===0?A(null,Qe,g,zo,w,E,x,k,C):kn&&(ie<0||S!==Ho[ie]?Xe(Qe,g,zo,2):ie--)}}},Xe=(d,h,g,y,w=null)=>{const{el:E,type:x,transition:k,children:C,shapeFlag:S}=d;if(S&6){Xe(d.component.subTree,h,g,y);return}if(S&128){d.suspense.move(h,g,y);return}if(S&64){x.move(d,h,g,P);return}if(x===Pe){r(E,h,g);for(let F=0;F<C.length;F++)Xe(C[F],h,g,y);r(d.anchor,h,g);return}if(x===yi){O(d,h,g);return}if(y!==2&&S&1&&k)if(y===0)k.beforeEnter(E),r(E,h,g),Ce(()=>k.enter(E),w);else{const{leave:F,delayLeave:H,afterLeave:V}=k,J=()=>r(E,h,g),oe=()=>{F(E,()=>{J(),V&&V()})};H?H(E,J,oe):oe()}else r(E,h,g)},Te=(d,h,g,y=!1,w=!1)=>{const{type:E,props:x,ref:k,children:C,dynamicChildren:S,shapeFlag:B,patchFlag:F,dirs:H}=d;if(k!=null&&ia(k,null,g,d,!0),B&256){h.ctx.deactivate(d);return}const V=B&1&&H,J=!lr(d);let oe;if(J&&(oe=x&&x.onVnodeBeforeUnmount)&&Ze(oe,h,d),B&6)Jr(d.component,g,y);else{if(B&128){d.suspense.unmount(g,y);return}V&&en(d,null,h,"beforeUnmount"),B&64?d.type.remove(d,h,g,w,P,y):S&&(E!==Pe||F>0&&F&64)?Ie(S,h,g,!1,!0):(E===Pe&&F&384||!w&&B&16)&&Ie(C,h,g),y&&An(d)}(J&&(oe=x&&x.onVnodeUnmounted)||V)&&Ce(()=>{oe&&Ze(oe,h,d),V&&en(d,null,h,"unmounted")},g)},An=d=>{const{type:h,el:g,anchor:y,transition:w}=d;if(h===Pe){Tn(g,y);return}if(h===yi){T(d);return}const E=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:k}=w,C=()=>x(g,E);k?k(d.el,E,C):C()}else E()},Tn=(d,h)=>{let g;for(;d!==h;)g=p(d),i(d),d=g;i(h)},Jr=(d,h,g)=>{const{bum:y,scope:w,update:E,subTree:x,um:k}=d;y&&gi(y),w.stop(),E&&(E.active=!1,Te(x,d,h,g)),k&&Ce(k,h),Ce(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ie=(d,h,g,y=!1,w=!1,E=0)=>{for(let x=E;x<d.length;x++)Te(d[x],h,g,y,w)},_=d=>d.shapeFlag&6?_(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),D=(d,h,g)=>{d==null?h._vnode&&Te(h._vnode,null,null,!0):A(h._vnode||null,d,h,null,null,null,g),Qo(),Tu(),h._vnode=d},P={p:A,um:Te,m:Xe,r:An,mt:Zt,mc:R,pc:te,pbc:G,n:_,o:e};let j,ne;return t&&([j,ne]=t(P)),{render:D,hydrate:j,createApp:Lp(D,j)}}function tn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Hu(e,t,n=!1){const r=e.children,i=t.children;if(W(r)&&W(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Nt(i[s]),o.el=a.el),n||Hu(a,o)),o.type===rs&&(o.el=a.el)}}function Vp(e){const t=e.slice(),n=[0];let r,i,s,a,o;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const Kp=e=>e.__isTeleport,Pe=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),yi=Symbol.for("v-stc"),fr=[];let Ve=null;function Ne(e=!1){fr.push(Ve=e?null:[])}function qp(){fr.pop(),Ve=fr[fr.length-1]||null}let Sr=1;function lc(e){Sr+=e}function zu(e){return e.dynamicChildren=Sr>0?Ve||Ln:null,qp(),Sr>0&&Ve&&Ve.push(e),e}function Je(e,t,n,r,i,s){return zu(zt(e,t,n,r,i,s,!0))}function to(e,t,n,r,i){return zu(Q(e,t,n,r,i,!0))}function Ri(e){return e?e.__v_isVNode===!0:!1}function nr(e,t){return e.type===t.type&&e.key===t.key}const is="__vInternal",Wu=({key:e})=>e??null,bi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||pe(e)||K(e)?{i:ye,r:e,k:t,f:!!n}:e:null);function zt(e,t=null,n=null,r=0,i=null,s=e===Pe?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wu(t),ref:t&&bi(t),scopeId:ts,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ye};return o?(no(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),Sr>0&&!a&&Ve&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Ve.push(c),c}const Q=Gp;function Gp(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Tp)&&(e=Gt),Ri(e)){const o=zn(e,t,!0);return n&&no(o,n),Sr>0&&!s&&Ve&&(o.shapeFlag&6?Ve[Ve.indexOf(e)]=o:Ve.push(o)),o.patchFlag|=-2,o}if(om(e)&&(e=e.__vccOpts),t){t=Yp(t);let{class:o,style:c}=t;o&&!be(o)&&(t.class=Ua(o)),fe(c)&&(bu(c)&&!W(c)&&(c=_e({},c)),t.style=$a(c))}const a=be(e)?1:fp(e)?128:Kp(e)?64:fe(e)?4:K(e)?2:0;return zt(e,t,n,r,i,a,s,!0)}function Yp(e){return e?bu(e)||is in e?_e({},e):e:null}function zn(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?Qp(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Wu(o),ref:t&&t.ref?n&&i?W(i)?i.concat(bi(t)):[i,bi(t)]:bi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zn(e.ssContent),ssFallback:e.ssFallback&&zn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function fn(e=" ",t=0){return Q(rs,null,e,t)}function Jp(e,t){const n=Q(yi,null,e);return n.staticCount=t,n}function Xp(e="",t=!1){return t?(Ne(),to(Gt,null,e)):Q(Gt,null,e)}function et(e){return e==null||typeof e=="boolean"?Q(Gt):W(e)?Q(Pe,null,e.slice()):typeof e=="object"?Nt(e):Q(rs,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zn(e)}function no(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),no(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(is in t)?t._ctx=ye:i===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[fn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ua([t.class,r.class]));else if(i==="style")t.style=$a([t.style,r.style]);else if(Ki(i)){const s=t[i],a=r[i];a&&s!==a&&!(W(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function Ze(e,t,n,r=null){Ge(e,t,7,[n,r])}const Zp=Lu();let em=0;function tm(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Zp,s={uid:em++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new su(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$u(r,i),emitsOptions:Cu(r,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=ap.bind(null,s),e.ce&&e.ce(s),s}let ge=null;const ro=()=>ge||ye;let io,Cn,uc="__VUE_INSTANCE_SETTERS__";(Cn=Ys()[uc])||(Cn=Ys()[uc]=[]),Cn.push(e=>ge=e),io=e=>{Cn.length>1?Cn.forEach(t=>t(e)):Cn[0](e)};const Wn=e=>{io(e),e.scope.on()},dn=()=>{ge&&ge.scope.off(),io(null)};function Vu(e){return e.vnode.shapeFlag&4}let Ar=!1;function nm(e,t=!1){Ar=t;const{props:n,children:r}=e.vnode,i=Vu(e);$p(e,n,i,t),Bp(e,r);const s=i?rm(e,t):void 0;return Ar=!1,s}function rm(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qi(new Proxy(e.ctx,Pp));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?sm(e):null;Wn(e),Yn();const s=Bt(r,e,0,[e.props,i]);if(Jn(),dn(),eu(s)){if(s.then(dn,dn),t)return s.then(a=>{fc(e,a,t)}).catch(a=>{Zi(a,e,0)});e.asyncDep=s}else fc(e,s,t)}else Ku(e,t)}function fc(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Iu(t)),Ku(e,n)}let dc;function Ku(e,t,n){const r=e.type;if(!e.render){if(!t&&dc&&!r.render){const i=r.template||Za(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,l=_e(_e({isCustomElement:s,delimiters:o},a),c);r.render=dc(i,l)}}e.render=r.render||qe}{Wn(e),Yn();try{Op(e)}finally{Jn(),dn()}}}function im(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return xe(e,"get","$attrs"),t[n]}}))}function sm(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return im(e)},slots:e.slots,emit:e.emit,expose:t}}function ss(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Iu(Qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ur)return ur[n](e)},has(t,n){return n in t||n in ur}}))}function am(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function om(e){return K(e)&&"__vccOpts"in e}const de=(e,t)=>ep(e,t,Ar);function so(e,t,n){const r=arguments.length;return r===2?fe(t)&&!W(t)?Ri(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ri(n)&&(n=[n]),Q(e,t,n))}const cm=Symbol.for("v-scx"),lm=()=>Oe(cm),um="3.3.6",fm="http://www.w3.org/2000/svg",sn=typeof document<"u"?document:null,hc=sn&&sn.createElement("template"),dm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?sn.createElementNS(fm,e):sn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>sn.createTextNode(e),createComment:e=>sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{hc.innerHTML=r?`<svg>${e}</svg>`:e;const o=hc.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},hm=Symbol("_vtc");function pm(e,t,n){const r=e[hm];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mm=Symbol("_vod");function gm(e,t,n){const r=e.style,i=be(n);if(n&&!i){if(t&&!be(t))for(const s in t)n[s]==null&&sa(r,s,"");for(const s in n)sa(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),mm in e&&(r.display=s)}}const pc=/\s*!important$/;function sa(e,t,n){if(W(n))n.forEach(r=>sa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vm(e,t);pc.test(n)?e.setProperty(Gn(r),n.replace(pc,""),"important"):e[r]=n}}const mc=["Webkit","Moz","ms"],Is={};function vm(e,t){const n=Is[t];if(n)return n;let r=at(t);if(r!=="filter"&&r in e)return Is[t]=r;r=Yi(r);for(let i=0;i<mc.length;i++){const s=mc[i]+r;if(s in e)return Is[t]=s}return t}const gc="http://www.w3.org/1999/xlink";function ym(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(gc,t.slice(6,t.length)):e.setAttributeNS(gc,t,n);else{const s=Ih(t);n==null||s&&!ru(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function bm(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const l=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ru(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Rn(e,t,n,r){e.addEventListener(t,n,r)}function _m(e,t,n,r){e.removeEventListener(t,n,r)}const vc=Symbol("_vei");function wm(e,t,n,r,i=null){const s=e[vc]||(e[vc]={}),a=s[t];if(r&&a)a.value=r;else{const[o,c]=Im(t);if(r){const l=s[t]=Am(r,i);Rn(e,o,l,c)}else a&&(_m(e,o,a,c),s[t]=void 0)}}const yc=/(?:Once|Passive|Capture)$/;function Im(e){let t;if(yc.test(e)){t={};let r;for(;r=e.match(yc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gn(e.slice(2)),t]}let Es=0;const Em=Promise.resolve(),Sm=()=>Es||(Em.then(()=>Es=0),Es=Date.now());function Am(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ge(Tm(r,n.value),t,5,[r])};return n.value=e,n.attached=Sm(),n}function Tm(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const bc=/^on[a-z]/,km=(e,t,n,r,i=!1,s,a,o,c)=>{t==="class"?pm(e,r,i):t==="style"?gm(e,n,r):Ki(t)?Ma(t)||wm(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cm(e,t,r,i))?bm(e,t,r,s,a,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ym(e,t,r,i))};function Cm(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&bc.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||bc.test(t)&&be(n)?!1:t in e}const _c=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>gi(t,n):t};function Pm(e){e.target.composing=!0}function wc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ss=Symbol("_assign"),S1={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Ss]=_c(i);const s=r||i.props&&i.props.type==="number";Rn(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=Gs(o)),e[Ss](o)}),n&&Rn(e,"change",()=>{e.value=e.value.trim()}),t||(Rn(e,"compositionstart",Pm),Rn(e,"compositionend",wc),Rn(e,"change",wc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e[Ss]=_c(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Gs(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},Om=_e({patchProp:km},dm);let Ic;function Rm(){return Ic||(Ic=zp(Om))}const xm=(...e)=>{const t=Rm().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Nm(r);if(!i)return;const s=t._component;!K(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function Nm(e){return be(e)?document.querySelector(e):e}function Mm(){const e=ct(!1);function t(){e.value=!0,window.addEventListener("resize",i)}function n(){e.value=!1,window.removeEventListener("resize",i)}function r(){e.value?n():t()}function i(){window.outerWidth>=768&&n()}return{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:r}}const Xn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Dm={},Lm={class:"navbar-title"};function Fm(e,t){const n=Ir("font-awesome-icon"),r=Ir("router-link");return Ne(),Je("div",Lm,[Q(r,{to:"/",class:"title"},{default:Ht(()=>[Q(n,{icon:"location-arrow",class:"icon"}),fn(" Lean ")]),_:1})])}const $m=Xn(Dm,[["render",Fm]]),Um={};function jm(e,t){const n=Ir("router-link");return Ne(),Je(Pe,null,[Q(n,{to:"/log"},{default:Ht(()=>[fn("Log")]),_:1}),Q(n,{to:"/analysis"},{default:Ht(()=>[fn("Analysis")]),_:1}),Q(n,{to:"/profile"},{default:Ht(()=>[fn("Profile")]),_:1})],64)}const Bm=Xn(Um,[["render",jm]]);var Hm=!1;function qu(e){return ja()?(ou(e),!0):!1}function as(e){return typeof e=="function"?e():Be(e)}const zm=typeof window<"u"&&typeof document<"u",Wm=Object.prototype.toString,Vm=e=>Wm.call(e)==="[object Object]",Gu=()=>{};function Km(e,t){function n(...r){return new Promise((i,s)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(i).catch(s)})}return n}const Yu=e=>e();function qm(e=Yu){const t=ct(!0);function n(){t.value=!1}function r(){t.value=!0}const i=(...s)=>{t.value&&e(...s)};return{isActive:Xi(t),pause:n,resume:r,eventFilter:i}}function Gm(...e){if(e.length!==1)return Qh(...e);const t=e[0];return typeof t=="function"?Xi(Gh(()=>({get:t,set:Gu}))):ct(t)}function Ym(e,t,n={}){const{eventFilter:r=Yu,...i}=n;return yt(e,Km(r,t),i)}function Jm(e,t,n={}){const{eventFilter:r,...i}=n,{eventFilter:s,pause:a,resume:o,isActive:c}=qm(r);return{stop:Ym(e,t,{...i,eventFilter:s}),pause:a,resume:o,isActive:c}}function Xm(e,t=!0){ro()?Qa(e):t?e():Ur(e)}function Ju(e){var t;const n=as(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Tr=zm?window:void 0;function Ec(...e){let t,n,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,i]=e,t=Tr):[t,n,r,i]=e,!t)return Gu;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],a=()=>{s.forEach(u=>u()),s.length=0},o=(u,f,p,m)=>(u.addEventListener(f,p,m),()=>u.removeEventListener(f,p,m)),c=yt(()=>[Ju(t),as(i)],([u,f])=>{if(a(),!u)return;const p=Vm(f)?{...f}:f;s.push(...n.flatMap(m=>r.map(I=>o(u,m,I,p))))},{immediate:!0,flush:"post"}),l=()=>{c(),a()};return qu(l),l}function Qm(){const e=ct(!1);return ro()&&Qa(()=>{e.value=!0}),e}function Zm(e){const t=Qm();return de(()=>(t.value,!!e()))}function eg(e,t={}){const{window:n=Tr}=t,r=Zm(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const s=ct(!1),a=l=>{s.value=l.matches},o=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",a):i.removeListener(a))},c=hp(()=>{r.value&&(o(),i=n.matchMedia(as(e)),"addEventListener"in i?i.addEventListener("change",a):i.addListener(a),s.value=i.matches)});return qu(()=>{c(),o(),i=void 0}),s}const ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ii="__vueuse_ssr_handlers__",tg=ng();function ng(){return ii in ri||(ri[ii]=ri[ii]||{}),ri[ii]}function Xu(e,t){return tg[e]||t}function rg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ig={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Sc="vueuse-storage";function sg(e,t,n,r={}){var i;const{flush:s="pre",deep:a=!0,listenToStorageChanges:o=!0,writeDefaults:c=!0,mergeDefaults:l=!1,shallow:u,window:f=Tr,eventFilter:p,onError:m=R=>{console.error(R)}}=r,I=(u?_u:ct)(t);if(!n)try{n=Xu("getDefaultStorage",()=>{var R;return(R=Tr)==null?void 0:R.localStorage})()}catch(R){m(R)}if(!n)return I;const A=as(t),N=rg(A),v=(i=r.serializer)!=null?i:ig[N],{pause:b,resume:O}=Jm(I,()=>T(I.value),{flush:s,deep:a,eventFilter:p});return f&&o&&(Ec(f,"storage",q),Ec(f,Sc,Y)),q(),I;function T(R){try{if(R==null)n.removeItem(e);else{const L=v.write(R),G=n.getItem(e);G!==L&&(n.setItem(e,L),f&&f.dispatchEvent(new CustomEvent(Sc,{detail:{key:e,oldValue:G,newValue:L,storageArea:n}})))}}catch(L){m(L)}}function U(R){const L=R?R.newValue:n.getItem(e);if(L==null)return c&&A!==null&&n.setItem(e,v.write(A)),A;if(!R&&l){const G=v.read(L);return typeof l=="function"?l(G,A):N==="object"&&!Array.isArray(G)?{...A,...G}:G}else return typeof L!="string"?L:v.read(L)}function Y(R){q(R.detail)}function q(R){if(!(R&&R.storageArea!==n)){if(R&&R.key==null){I.value=A;return}if(!(R&&R.key!==e)){b();try{(R==null?void 0:R.newValue)!==v.write(I.value)&&(I.value=U(R))}catch(L){m(L)}finally{R?Ur(O):O()}}}}}function ag(e){return eg("(prefers-color-scheme: dark)",e)}function og(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:i=Tr,storage:s,storageKey:a="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:c,emitAuto:l,disableTransition:u=!0}=e,f={auto:"",light:"light",dark:"dark",...e.modes||{}},p=ag({window:i}),m=de(()=>p.value?"dark":"light"),I=c||(a==null?Gm(r):sg(a,r,s,{window:i,listenToStorageChanges:o})),A=de(()=>I.value==="auto"?m.value:I.value),N=Xu("updateHTMLAttrs",(T,U,Y)=>{const q=typeof T=="string"?i==null?void 0:i.document.querySelector(T):Ju(T);if(!q)return;let R;if(u){R=i.document.createElement("style");const L="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";R.appendChild(document.createTextNode(L)),i.document.head.appendChild(R)}if(U==="class"){const L=Y.split(/\s/g);Object.values(f).flatMap(G=>(G||"").split(/\s/g)).filter(Boolean).forEach(G=>{L.includes(G)?q.classList.add(G):q.classList.remove(G)})}else q.setAttribute(U,Y);u&&(i.getComputedStyle(R).opacity,document.head.removeChild(R))});function v(T){var U;N(t,n,(U=f[T])!=null?U:T)}function b(T){e.onChanged?e.onChanged(T,v):v(T)}yt(A,b,{flush:"post",immediate:!0}),Xm(()=>b(A.value));const O=de({get(){return l?I.value:A.value},set(T){I.value=T}});try{return Object.assign(O,{store:I,system:m,state:A})}catch{return O}}function cg(e={}){const{valueDark:t="dark",valueLight:n=""}=e,r=og({...e,onChanged:(s,a)=>{var o;e.onChanged?(o=e.onChanged)==null||o.call(e,s==="dark",a,s):a(s)},modes:{dark:t,light:n}});return de({get(){return r.value==="dark"},set(s){const a=s?"dark":"light";r.system.value===a?r.value="auto":r.value=a}})}const lg={},ug={class:"switch",type:"button",role:"switch"},fg={class:"check"},dg={class:"icon"};function hg(e,t){return Ne(),Je("button",ug,[zt("span",fg,[zt("span",dg,[Cp(e.$slots,"default",{},void 0,!0)])])])}const pg=Xn(lg,[["render",hg],["__scopeId","data-v-fd0bf0d3"]]),mg={},gg={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},vg=Jp('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),yg=[vg];function bg(e,t){return Ne(),Je("svg",gg,yg)}const _g=Xn(mg,[["render",bg]]),wg={},Ig={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Eg=zt("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),Sg=[Eg];function Ag(e,t){return Ne(),Je("svg",Ig,Sg)}const Tg=Xn(wg,[["render",Ag]]),kg=St({__name:"SwitchAppearance",setup(e){const t=cg(),n=Oe("toggle-appearance",()=>{t.value=!t.value});return(r,i)=>(Ne(),to(pg,{title:"toggle dark mode",class:"switch-appearance","aria-checked":Be(t),onClick:Be(n)},{default:Ht(()=>[Q(_g,{class:"sun"}),Q(Tg,{class:"moon"})]),_:1},8,["aria-checked","onClick"]))}});const Cg={class:"appearance"},Pg=St({__name:"NavBarAppearance",setup(e){return(t,n)=>(Ne(),Je("div",Cg,[Q(kg)]))}}),Og={};function Rg(e,t){const n=Ir("router-link");return Ne(),Je(Pe,null,[Q(n,{to:"/login"},{default:Ht(()=>[fn("Login")]),_:1}),Q(n,{class:"register",to:"/register"},{default:Ht(()=>[fn("Register")]),_:1})],64)}const xg=Xn(Og,[["render",Rg]]),Ng={class:"navbar"},Mg={class:"container"},Dg={class:"title"},Lg={class:"content"},Fg=St({__name:"NavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){return(t,n)=>(Ne(),Je("div",Ng,[zt("div",Mg,[zt("div",Dg,[Q($m)]),zt("div",Lg,[Q(Bm),Q(Pg),Q(xg)])])]))}});const $g={key:0},Ug=St({__name:"NavScreen",props:{open:{type:Boolean}},setup(e){return(t,n)=>t.open?(Ne(),Je("div",$g)):Xp("",!0)}}),jg={class:"menu"},Bg=St({__name:"NavMenu",setup(e){const{isScreenOpen:t,toggleScreen:n}=Mm();return(r,i)=>(Ne(),Je("header",jg,[Q(Fg,{"is-screen-open":Be(t),onToggleScreen:Be(n)},null,8,["is-screen-open","onToggleScreen"]),Q(Ug,{open:Be(t)},null,8,["open"])]))}}),Hg=St({__name:"App",setup(e){return(t,n)=>{const r=Ir("router-view");return Ne(),Je(Pe,null,[Q(Bg),Q(r)],64)}}}),zg="modulepreload",Wg=function(e){return"/lean/"+e},Ac={},Pn=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Wg(s),s in Ac)return;Ac[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":zg,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xn=typeof window<"u";function Vg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function As(e,t){const n={};for(const r in t){const i=t[r];n[r]=Ye(i)?i.map(e):e(i)}return n}const dr=()=>{},Ye=Array.isArray,Kg=/\/$/,qg=e=>e.replace(Kg,"");function Ts(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let c=t.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=Xg(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function Gg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Tc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yg(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Vn(t.matched[r],n.matched[i])&&Qu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Jg(e[n],t[n]))return!1;return!0}function Jg(e,t){return Ye(e)?kc(e,t):Ye(t)?kc(t,e):e===t}function kc(e,t){return Ye(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Xg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var kr;(function(e){e.pop="pop",e.push="push"})(kr||(kr={}));var hr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hr||(hr={}));function Qg(e){if(!e)if(xn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qg(e)}const Zg=/^[^#]+#/;function ev(e,t){return e.replace(Zg,"#")+t}function tv(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const os=()=>({left:window.pageXOffset,top:window.pageYOffset});function nv(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=tv(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Cc(e,t){return(history.state?history.state.position-t:-1)+e}const aa=new Map;function rv(e,t){aa.set(e,t)}function iv(e){const t=aa.get(e);return aa.delete(e),t}let sv=()=>location.protocol+"//"+location.host;function Zu(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(o);return c[0]!=="/"&&(c="/"+c),Tc(c,"")}return Tc(n,e)+r+i}function av(e,t,n,r){let i=[],s=[],a=null;const o=({state:p})=>{const m=Zu(e,location),I=n.value,A=t.value;let N=0;if(p){if(n.value=m,t.value=p,a&&a===I){a=null;return}N=A?p.position-A.position:0}else r(m);i.forEach(v=>{v(n.value,I,{delta:N,type:kr.pop,direction:N?N>0?hr.forward:hr.back:hr.unknown})})};function c(){a=n.value}function l(p){i.push(p);const m=()=>{const I=i.indexOf(p);I>-1&&i.splice(I,1)};return s.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:os()}),"")}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Pc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?os():null}}function ov(e){const{history:t,location:n}=window,r={value:Zu(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:sv()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function a(c,l){const u=re({},t.state,Pc(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function o(c,l){const u=re({},i.value,t.state,{forward:c,scroll:os()});s(u.current,u,!0);const f=re({},Pc(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:o,replace:a}}function cv(e){e=Qg(e);const t=ov(e),n=av(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=re({location:"",base:e,go:r,createHref:ev.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function lv(e){return typeof e=="string"||e&&typeof e=="object"}function ef(e){return typeof e=="string"||typeof e=="symbol"}const Pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tf=Symbol("");var Oc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Oc||(Oc={}));function Kn(e,t){return re(new Error,{type:e,[tf]:!0},t)}function dt(e,t){return e instanceof Error&&tf in e&&(t==null||!!(e.type&t))}const Rc="[^/]+?",uv={sensitive:!1,strict:!1,start:!0,end:!0},fv=/[.+*?^${}()[\]/\\]/g;function dv(e,t){const n=re({},uv,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(fv,"\\$&"),m+=40;else if(p.type===1){const{value:I,repeatable:A,optional:N,regexp:v}=p;s.push({name:I,repeatable:A,optional:N});const b=v||Rc;if(b!==Rc){m+=10;try{new RegExp(`(${b})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${I}" (${b}): `+T.message)}}let O=A?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(O=N&&l.length<2?`(?:/${O})`:"/"+O),N&&(O+="?"),i+=O,m+=20,N&&(m+=-8),A&&(m+=-20),b===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(l){const u=l.match(a),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",I=s[p-1];f[I.name]=m&&I.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:A,optional:N}=m,v=I in l?l[I]:"";if(Ye(v)&&!A)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const b=Ye(v)?v.join("/"):v;if(!b)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=b}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:c}}function hv(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function pv(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=hv(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(xc(r))return 1;if(xc(i))return-1}return i.length-r.length}function xc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mv={type:0,value:""},gv=/[a-zA-Z0-9_]/;function vv(e){if(!e)return[[]];if(e==="/")return[[mv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),a()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:gv.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),i}function yv(e,t,n){const r=dv(vv(e.path),n),i=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function bv(e,t){const n=[],r=new Map;t=Dc({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,p){const m=!p,I=_v(u);I.aliasOf=p&&p.record;const A=Dc(t,u),N=[I];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of O)N.push(re({},I,{components:p?p.record.components:I.components,path:T,aliasOf:p?p.record:I}))}let v,b;for(const O of N){const{path:T}=O;if(f&&T[0]!=="/"){const U=f.record.path,Y=U[U.length-1]==="/"?"":"/";O.path=f.record.path+(T&&Y+T)}if(v=yv(O,f,A),p?p.alias.push(v):(b=b||v,b!==v&&b.alias.push(v),m&&u.name&&!Mc(v)&&a(u.name)),I.children){const U=I.children;for(let Y=0;Y<U.length;Y++)s(U[Y],v,p&&p.children[Y])}p=p||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return b?()=>{a(b)}:dr}function a(u){if(ef(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function c(u){let f=0;for(;f<n.length&&pv(u,n[f])>=0&&(u.record.path!==n[f].record.path||!nf(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Mc(u)&&r.set(u.record.name,u)}function l(u,f){let p,m={},I,A;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Kn(1,{location:u});A=p.record.name,m=re(Nc(f.params,p.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Nc(u.params,p.keys.map(b=>b.name))),I=p.stringify(m)}else if("path"in u)I=u.path,p=n.find(b=>b.re.test(I)),p&&(m=p.parse(I),A=p.record.name);else{if(p=f.name?r.get(f.name):n.find(b=>b.re.test(f.path)),!p)throw Kn(1,{location:u,currentLocation:f});A=p.record.name,m=re({},f.params,u.params),I=p.stringify(m)}const N=[];let v=p;for(;v;)N.unshift(v.record),v=v.parent;return{name:A,path:I,params:m,matched:N,meta:Iv(N)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function Nc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function _v(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function wv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Mc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Iv(e){return e.reduce((t,n)=>re(t,n.meta),{})}function Dc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function nf(e,t){return t.children.some(n=>n===e||nf(e,n))}const rf=/#/g,Ev=/&/g,Sv=/\//g,Av=/=/g,Tv=/\?/g,sf=/\+/g,kv=/%5B/g,Cv=/%5D/g,af=/%5E/g,Pv=/%60/g,of=/%7B/g,Ov=/%7C/g,cf=/%7D/g,Rv=/%20/g;function ao(e){return encodeURI(""+e).replace(Ov,"|").replace(kv,"[").replace(Cv,"]")}function xv(e){return ao(e).replace(of,"{").replace(cf,"}").replace(af,"^")}function oa(e){return ao(e).replace(sf,"%2B").replace(Rv,"+").replace(rf,"%23").replace(Ev,"%26").replace(Pv,"`").replace(of,"{").replace(cf,"}").replace(af,"^")}function Nv(e){return oa(e).replace(Av,"%3D")}function Mv(e){return ao(e).replace(rf,"%23").replace(Tv,"%3F")}function Dv(e){return e==null?"":Mv(e).replace(Sv,"%2F")}function xi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Lv(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(sf," "),a=s.indexOf("="),o=xi(a<0?s:s.slice(0,a)),c=a<0?null:xi(s.slice(a+1));if(o in t){let l=t[o];Ye(l)||(l=t[o]=[l]),l.push(c)}else t[o]=c}return t}function Lc(e){let t="";for(let n in e){const r=e[n];if(n=Nv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ye(r)?r.map(s=>s&&oa(s)):[r&&oa(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Fv(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ye(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const $v=Symbol(""),Fc=Symbol(""),cs=Symbol(""),lf=Symbol(""),ca=Symbol("");function rr(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Mt(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const c=f=>{f===!1?o(Kn(4,{from:n,to:t})):f instanceof Error?o(f):lv(f)?o(Kn(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>o(f))})}function ks(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(Uv(o)){const l=(o.__vccOpts||o)[t];l&&i.push(Mt(l,n,r,s,a))}else{let c=o();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Vg(l)?l.default:l;s.components[a]=u;const p=(u.__vccOpts||u)[t];return p&&Mt(p,n,r,s,a)()}))}}return i}function Uv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $c(e){const t=Oe(cs),n=Oe(lf),r=de(()=>t.resolve(Be(e.to))),i=de(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Vn.bind(null,u));if(p>-1)return p;const m=Uc(c[l-2]);return l>1&&Uc(u)===m&&f[f.length-1].path!==m?f.findIndex(Vn.bind(null,c[l-2])):p}),s=de(()=>i.value>-1&&zv(n.params,r.value.params)),a=de(()=>i.value>-1&&i.value===n.matched.length-1&&Qu(n.params,r.value.params));function o(c={}){return Hv(c)?t[Be(e.replace)?"replace":"push"](Be(e.to)).catch(dr):Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const jv=St({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$c,setup(e,{slots:t}){const n=$r($c(e)),{options:r}=Oe(cs),i=de(()=>({[jc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:so("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Bv=jv;function Hv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function zv(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ye(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Uc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jc=(e,t,n)=>e??t??n,Wv=St({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Oe(ca),i=de(()=>e.route||r.value),s=Oe(Fc,0),a=de(()=>{let l=Be(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),o=de(()=>i.value.matched[a.value]);vi(Fc,de(()=>a.value+1)),vi($v,o),vi(ca,i);const c=ct();return yt(()=>[c.value,o.value,e.name],([l,u,f],[p,m,I])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Vn(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=o.value,p=f&&f.components[u];if(!p)return Bc(n.default,{Component:p,route:l});const m=f.props[u],I=m?m===!0?l.params:typeof m=="function"?m(l):m:null,N=so(p,re({},I,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Bc(n.default,{Component:N,route:l})||N}}});function Bc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Vv=Wv;function Kv(e){const t=bv(e.routes,e),n=e.parseQuery||Lv,r=e.stringifyQuery||Lc,i=e.history,s=rr(),a=rr(),o=rr(),c=_u(Pt);let l=Pt;xn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=As.bind(null,_=>""+_),f=As.bind(null,Dv),p=As.bind(null,xi);function m(_,D){let P,j;return ef(_)?(P=t.getRecordMatcher(_),j=D):j=_,t.addRoute(j,P)}function I(_){const D=t.getRecordMatcher(_);D&&t.removeRoute(D)}function A(){return t.getRoutes().map(_=>_.record)}function N(_){return!!t.getRecordMatcher(_)}function v(_,D){if(D=re({},D||c.value),typeof _=="string"){const g=Ts(n,_,D.path),y=t.resolve({path:g.path},D),w=i.createHref(g.fullPath);return re(g,y,{params:p(y.params),hash:xi(g.hash),redirectedFrom:void 0,href:w})}let P;if("path"in _)P=re({},_,{path:Ts(n,_.path,D.path).path});else{const g=re({},_.params);for(const y in g)g[y]==null&&delete g[y];P=re({},_,{params:f(g)}),D.params=f(D.params)}const j=t.resolve(P,D),ne=_.hash||"";j.params=u(p(j.params));const d=Gg(r,re({},_,{hash:xv(ne),path:j.path})),h=i.createHref(d);return re({fullPath:d,hash:ne,query:r===Lc?Fv(_.query):_.query||{}},j,{redirectedFrom:void 0,href:h})}function b(_){return typeof _=="string"?Ts(n,_,c.value.path):re({},_)}function O(_,D){if(l!==_)return Kn(8,{from:D,to:_})}function T(_){return q(_)}function U(_){return T(re(b(_),{replace:!0}))}function Y(_){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:P}=D;let j=typeof P=="function"?P(_):P;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=b(j):{path:j},j.params={}),re({query:_.query,hash:_.hash,params:"path"in j?{}:_.params},j)}}function q(_,D){const P=l=v(_),j=c.value,ne=_.state,d=_.force,h=_.replace===!0,g=Y(P);if(g)return q(re(b(g),{state:typeof g=="object"?re({},ne,g.state):ne,force:d,replace:h}),D||P);const y=P;y.redirectedFrom=D;let w;return!d&&Yg(r,j,P)&&(w=Kn(16,{to:y,from:j}),Xe(j,j,!0,!1)),(w?Promise.resolve(w):G(y,j)).catch(E=>dt(E)?dt(E,2)?E:kt(E):te(E,y,j)).then(E=>{if(E){if(dt(E,2))return q(re({replace:h},b(E.to),{state:typeof E.to=="object"?re({},ne,E.to.state):ne,force:d}),D||y)}else E=Me(y,j,!0,h,ne);return we(y,j,E),E})}function R(_,D){const P=O(_,D);return P?Promise.reject(P):Promise.resolve()}function L(_){const D=Tn.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(_):_()}function G(_,D){let P;const[j,ne,d]=qv(_,D);P=ks(j.reverse(),"beforeRouteLeave",_,D);for(const g of j)g.leaveGuards.forEach(y=>{P.push(Mt(y,_,D))});const h=R.bind(null,_,D);return P.push(h),Ie(P).then(()=>{P=[];for(const g of s.list())P.push(Mt(g,_,D));return P.push(h),Ie(P)}).then(()=>{P=ks(ne,"beforeRouteUpdate",_,D);for(const g of ne)g.updateGuards.forEach(y=>{P.push(Mt(y,_,D))});return P.push(h),Ie(P)}).then(()=>{P=[];for(const g of d)if(g.beforeEnter)if(Ye(g.beforeEnter))for(const y of g.beforeEnter)P.push(Mt(y,_,D));else P.push(Mt(g.beforeEnter,_,D));return P.push(h),Ie(P)}).then(()=>(_.matched.forEach(g=>g.enterCallbacks={}),P=ks(d,"beforeRouteEnter",_,D),P.push(h),Ie(P))).then(()=>{P=[];for(const g of a.list())P.push(Mt(g,_,D));return P.push(h),Ie(P)}).catch(g=>dt(g,8)?g:Promise.reject(g))}function we(_,D,P){o.list().forEach(j=>L(()=>j(_,D,P)))}function Me(_,D,P,j,ne){const d=O(_,D);if(d)return d;const h=D===Pt,g=xn?history.state:{};P&&(j||h?i.replace(_.fullPath,re({scroll:h&&g&&g.scroll},ne)):i.push(_.fullPath,ne)),c.value=_,Xe(_,D,P,h),kt()}let Ue;function Zt(){Ue||(Ue=i.listen((_,D,P)=>{if(!Jr.listening)return;const j=v(_),ne=Y(j);if(ne){q(re(ne,{replace:!0}),j).catch(dr);return}l=j;const d=c.value;xn&&rv(Cc(d.fullPath,P.delta),os()),G(j,d).catch(h=>dt(h,12)?h:dt(h,2)?(q(h.to,j).then(g=>{dt(g,20)&&!P.delta&&P.type===kr.pop&&i.go(-1,!1)}).catch(dr),Promise.reject()):(P.delta&&i.go(-P.delta,!1),te(h,j,d))).then(h=>{h=h||Me(j,d,!1),h&&(P.delta&&!dt(h,8)?i.go(-P.delta,!1):P.type===kr.pop&&dt(h,20)&&i.go(-1,!1)),we(j,d,h)}).catch(dr)}))}let je=rr(),ee=rr(),se;function te(_,D,P){kt(_);const j=ee.list();return j.length?j.forEach(ne=>ne(_,D,P)):console.error(_),Promise.reject(_)}function ft(){return se&&c.value!==Pt?Promise.resolve():new Promise((_,D)=>{je.add([_,D])})}function kt(_){return se||(se=!_,Zt(),je.list().forEach(([D,P])=>_?P(_):D()),je.reset()),_}function Xe(_,D,P,j){const{scrollBehavior:ne}=e;if(!xn||!ne)return Promise.resolve();const d=!P&&iv(Cc(_.fullPath,0))||(j||!P)&&history.state&&history.state.scroll||null;return Ur().then(()=>ne(_,D,d)).then(h=>h&&nv(h)).catch(h=>te(h,_,D))}const Te=_=>i.go(_);let An;const Tn=new Set,Jr={currentRoute:c,listening:!0,addRoute:m,removeRoute:I,hasRoute:N,getRoutes:A,resolve:v,options:e,push:T,replace:U,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:ee.add,isReady:ft,install(_){const D=this;_.component("RouterLink",Bv),_.component("RouterView",Vv),_.config.globalProperties.$router=D,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(c)}),xn&&!An&&c.value===Pt&&(An=!0,T(i.location).catch(ne=>{}));const P={};for(const ne in Pt)Object.defineProperty(P,ne,{get:()=>c.value[ne],enumerable:!0});_.provide(cs,D),_.provide(lf,yu(P)),_.provide(ca,c);const j=_.unmount;Tn.add(_),_.unmount=function(){Tn.delete(_),Tn.size<1&&(l=Pt,Ue&&Ue(),Ue=null,c.value=Pt,An=!1,se=!1),j()}}};function Ie(_){return _.reduce((D,P)=>D.then(()=>L(P)),Promise.resolve())}return Jr}function qv(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(l=>Vn(l,o))?r.push(o):n.push(o));const c=e.matched[a];c&&(t.matched.find(l=>Vn(l,c))||i.push(c))}return[n,r,i]}function A1(){return Oe(cs)}const Gv="/lean/",Yv={BASE_PATH:Gv},Jv=[{path:"/",name:"Home",component:()=>Pn(()=>import("./Home-fe80bf87.js"),["assets/Home-fe80bf87.js","assets/Home-94776037.css"])},{path:"/log",name:"Log",component:()=>Pn(()=>import("./Log-32fb0a04.js"),["assets/Log-32fb0a04.js","assets/Log-a8abc7b9.css"]),meta:{requiresAuth:!0}},{path:"/analysis",name:"Analysis",component:()=>Pn(()=>import("./Analysis-6cf387bf.js"),["assets/Analysis-6cf387bf.js","assets/Analysis-ca995139.css"]),meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:()=>Pn(()=>import("./Profile-07923570.js"),[]),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>Pn(()=>import("./Login-2eef99cb.js"),["assets/Login-2eef99cb.js","assets/OAuthButtons.vue_vue_type_script_setup_true_lang-4022280b.js"]),meta:{requiresUnauth:!0}},{path:"/register",name:"Register",component:()=>Pn(()=>import("./Register-67412dd0.js"),["assets/Register-67412dd0.js","assets/OAuthButtons.vue_vue_type_script_setup_true_lang-4022280b.js"]),meta:{requiresUnauth:!0}}],uf=Kv({history:cv(Yv.BASE_PATH),routes:Jv});uf.beforeEach((e,t,n)=>{const r=Oe("auth");if(!r)throw new Error("Firebase Auth is not provided");const i=e.matched.some(a=>a.meta.requiresAuth),s=e.matched.some(a=>a.meta.requiresUnauth);return new Promise(a=>{r.onAuthStateChanged(o=>{i&&!o?n("/login"):s&&o?n("/"):n(),a()})})});/**
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
 */const ff=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Xv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},df={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|l>>6,m=l&63;c||(m=64,a||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ff(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||f==null)throw new Qv;const p=s<<2|o>>4;if(r.push(p),l!==64){const m=o<<4&240|l>>2;if(r.push(m),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Qv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zv=function(e){const t=ff(e);return df.encodeByteArray(t,!0)},hf=function(e){return Zv(e).replace(/\./g,"")},pf=function(e){try{return df.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ey(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ty=()=>ey().__FIREBASE_DEFAULTS__,ny=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ry=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&pf(e[1]);return t&&JSON.parse(t)},oo=()=>{try{return ty()||ny()||ry()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},iy=e=>{var t,n;return(n=(t=oo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},mf=()=>{var e;return(e=oo())===null||e===void 0?void 0:e.config},gf=e=>{var t;return(t=oo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class sy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function vf(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function oy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cy(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function yf(){try{return typeof indexedDB=="object"}catch{return!1}}function bf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function ly(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const uy="FirebaseError";class lt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=uy,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,In.prototype.create)}}class In{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?fy(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new lt(i,o,r)}}function fy(e,t){return e.replace(dy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const dy=/\{\$([^}]+)}/g;function hy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Cr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Hc(s)&&Hc(a)){if(!Cr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hc(e){return e!==null&&typeof e=="object"}/**
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
 */function jr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ar(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function or(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function py(e,t){const n=new my(e,t);return n.subscribe.bind(n)}class my{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Cs),i.error===void 0&&(i.error=Cs),i.complete===void 0&&(i.complete=Cs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Cs(){}/**
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
 */const vy=1e3,yy=2,by=4*60*60*1e3,_y=.5;function zc(e,t=vy,n=yy){const r=t*Math.pow(n,e),i=Math.round(_y*r*(Math.random()-.5)*2);return Math.min(by,r+i)}/**
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
 */function ut(e){return e&&e._delegate?e._delegate:e}class ot{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const nn="[DEFAULT]";/**
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
 */class wy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new sy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ey(t))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=nn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nn){return this.instances.has(t)}getOptions(t=nn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Iy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=nn){return this.component?this.component.multipleInstances?t:nn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iy(e){return e===nn?void 0:e}function Ey(e){return e.instantiationMode==="EAGER"}/**
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
 */class Sy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new wy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const Ay={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Ty=ae.INFO,ky={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Cy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ky[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class co{constructor(t){this.name=t,this._logLevel=Ty,this._logHandler=Cy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ay[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const Py=(e,t)=>t.some(n=>e instanceof n);let Wc,Vc;function Oy(){return Wc||(Wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ry(){return Vc||(Vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _f=new WeakMap,la=new WeakMap,wf=new WeakMap,Ps=new WeakMap,lo=new WeakMap;function xy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Wt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&_f.set(n,e)}).catch(()=>{}),lo.set(t,e),t}function Ny(e){if(la.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});la.set(e,t)}let ua={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return la.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function My(e){ua=e(ua)}function Dy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Os(this),t,...n);return wf.set(r,t.sort?t.sort():[t]),Wt(r)}:Ry().includes(e)?function(...t){return e.apply(Os(this),t),Wt(_f.get(this))}:function(...t){return Wt(e.apply(Os(this),t))}}function Ly(e){return typeof e=="function"?Dy(e):(e instanceof IDBTransaction&&Ny(e),Py(e,Oy())?new Proxy(e,ua):e)}function Wt(e){if(e instanceof IDBRequest)return xy(e);if(Ps.has(e))return Ps.get(e);const t=Ly(e);return t!==e&&(Ps.set(e,t),lo.set(t,e)),t}const Os=e=>lo.get(e);function Fy(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Wt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Wt(a.result),c.oldVersion,c.newVersion,Wt(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const $y=["get","getKey","getAll","getAllKeys","count"],Uy=["put","add","delete","clear"],Rs=new Map;function Kc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rs.get(t))return Rs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Uy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$y.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return Rs.set(t,s),s}My(e=>({...e,get:(t,n,r)=>Kc(t,n)||e.get(t,n,r),has:(t,n)=>!!Kc(t,n)||e.has(t,n)}));/**
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
 */class jy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(By(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function By(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fa="@firebase/app",qc="0.9.20";/**
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
 */const mn=new co("@firebase/app"),Hy="@firebase/app-compat",zy="@firebase/analytics-compat",Wy="@firebase/analytics",Vy="@firebase/app-check-compat",Ky="@firebase/app-check",qy="@firebase/auth",Gy="@firebase/auth-compat",Yy="@firebase/database",Jy="@firebase/database-compat",Xy="@firebase/functions",Qy="@firebase/functions-compat",Zy="@firebase/installations",eb="@firebase/installations-compat",tb="@firebase/messaging",nb="@firebase/messaging-compat",rb="@firebase/performance",ib="@firebase/performance-compat",sb="@firebase/remote-config",ab="@firebase/remote-config-compat",ob="@firebase/storage",cb="@firebase/storage-compat",lb="@firebase/firestore",ub="@firebase/firestore-compat",fb="firebase",db="10.5.0";/**
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
 */const da="[DEFAULT]",hb={[fa]:"fire-core",[Hy]:"fire-core-compat",[Wy]:"fire-analytics",[zy]:"fire-analytics-compat",[Ky]:"fire-app-check",[Vy]:"fire-app-check-compat",[qy]:"fire-auth",[Gy]:"fire-auth-compat",[Yy]:"fire-rtdb",[Jy]:"fire-rtdb-compat",[Xy]:"fire-fn",[Qy]:"fire-fn-compat",[Zy]:"fire-iid",[eb]:"fire-iid-compat",[tb]:"fire-fcm",[nb]:"fire-fcm-compat",[rb]:"fire-perf",[ib]:"fire-perf-compat",[sb]:"fire-rc",[ab]:"fire-rc-compat",[ob]:"fire-gcs",[cb]:"fire-gcs-compat",[lb]:"fire-fst",[ub]:"fire-fst-compat","fire-js":"fire-js",[fb]:"fire-js-all"};/**
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
 */const Ni=new Map,ha=new Map;function pb(e,t){try{e.container.addComponent(t)}catch(n){mn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function bt(e){const t=e.name;if(ha.has(t))return mn.debug(`There were multiple attempts to register component ${t}.`),!1;ha.set(t,e);for(const n of Ni.values())pb(n,e);return!0}function Qn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const mb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new In("app","Firebase",mb);/**
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
 */class gb{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=db;function If(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:da,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(n||(n=mf()),!n)throw Vt.create("no-options");const s=Ni.get(i);if(s){if(Cr(n,s.options)&&Cr(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const a=new Sy(i);for(const c of ha.values())a.addComponent(c);const o=new gb(n,r,a);return Ni.set(i,o),o}function Ef(e=da){const t=Ni.get(e);if(!t&&e===da&&mf())return If();if(!t)throw Vt.create("no-app",{appName:e});return t}function rt(e,t,n){var r;let i=(r=hb[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mn.warn(o.join(" "));return}bt(new ot(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const vb="firebase-heartbeat-database",yb=1,Pr="firebase-heartbeat-store";let xs=null;function Sf(){return xs||(xs=Fy(vb,yb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Pr)}}}).catch(e=>{throw Vt.create("idb-open",{originalErrorMessage:e.message})})),xs}async function bb(e){try{return await(await Sf()).transaction(Pr).objectStore(Pr).get(Af(e))}catch(t){if(t instanceof lt)mn.warn(t.message);else{const n=Vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mn.warn(n.message)}}}async function Gc(e,t){try{const r=(await Sf()).transaction(Pr,"readwrite");await r.objectStore(Pr).put(t,Af(e)),await r.done}catch(n){if(n instanceof lt)mn.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function Af(e){return`${e.name}!${e.options.appId}`}/**
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
 */const _b=1024,wb=30*24*60*60*1e3;class Ib{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=wb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yc(),{heartbeatsToSend:n,unsentEntries:r}=Eb(this._heartbeatsCache.heartbeats),i=hf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yc(){return new Date().toISOString().substring(0,10)}function Eb(e,t=_b){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Jc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yf()?bf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Jc(e){return hf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Ab(e){bt(new ot("platform-logger",t=>new jy(t),"PRIVATE")),bt(new ot("heartbeat",t=>new Ib(t),"PRIVATE")),rt(fa,qc,e),rt(fa,qc,"esm2017"),rt("fire-js","")}Ab("");function uo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Xc(e){return e!==void 0&&e.enterprise!==void 0}class Tb{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Tf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kb=Tf,kf=new In("auth","Firebase",Tf());/**
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
 */const Mi=new co("@firebase/auth");function Cb(e,...t){Mi.logLevel<=ae.WARN&&Mi.warn(`Auth (${Br}): ${e}`,...t)}function _i(e,...t){Mi.logLevel<=ae.ERROR&&Mi.error(`Auth (${Br}): ${e}`,...t)}/**
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
 */function He(e,...t){throw fo(e,...t)}function it(e,...t){return fo(e,...t)}function Cf(e,t,n){const r=Object.assign(Object.assign({},kb()),{[t]:n});return new In("auth","Firebase",r).create(t,{appName:e.name})}function Pb(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&He(e,"argument-error"),Cf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kf.create(e,...t)}function z(e,t,...n){if(!e)throw fo(t,...n)}function mt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _i(t),new Error(t)}function _t(e,t){e||mt(t)}/**
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
 */function pa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Ob(){return Qc()==="http:"||Qc()==="https:"}function Qc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Rb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ob()||vf()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Hr{constructor(t,n){this.shortDelay=t,this.longDelay=n,_t(n>t,"Short delay should be less than long delay!"),this.isMobile=ay()||oy()}get(){return Rb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ho(e,t){_t(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Pf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mb=new Hr(3e4,6e4);function En(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Sn(e,t,n,r,i={}){return Of(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=jr(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Pf.fetch()(Rf(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Of(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nb),t);try{const i=new Db(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw si(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw si(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw si(e,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Cf(e,u,l);He(e,u)}}catch(i){if(i instanceof lt)throw i;He(e,"network-request-failed",{message:String(i)})}}async function zr(e,t,n,r,i={}){const s=await Sn(e,t,n,r,i);return"mfaPendingCredential"in s&&He(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Rf(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ho(e.config,i):`${e.config.apiScheme}://${i}`}class Db{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),Mb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(e,t,r);return i.customData._tokenResponse=n,i}async function Lb(e,t){return Sn(e,"GET","/v2/recaptchaConfig",En(e,t))}/**
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
 */async function Fb(e,t){return Sn(e,"POST","/v1/accounts:delete",t)}async function $b(e,t){return Sn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function pr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Ub(e,t=!1){const n=ut(e),r=await n.getIdToken(t),i=po(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pr(Ns(i.auth_time)),issuedAtTime:pr(Ns(i.iat)),expirationTime:pr(Ns(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ns(e){return Number(e)*1e3}function po(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return _i("JWT malformed, contained fewer than 3 sections"),null;try{const i=pf(n);return i?JSON.parse(i):(_i("Failed to decode base64 JWT payload"),null)}catch(i){return _i("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jb(e){const t=po(e);return z(t,"internal-error"),z(typeof t.exp<"u","internal-error"),z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Or(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof lt&&Bb(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Bb({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Hb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Di(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Or(e,$b(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Vb(s.providerUserInfo):[],o=Wb(e.providerData,a),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new xf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function zb(e){const t=ut(e);await Di(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Wb(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Vb(e){return e.map(t=>{var{providerId:n}=t,r=uo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Kb(e,t){const n=await Of(e,{},async()=>{const r=jr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=Rf(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Pf.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken<"u","internal-error"),z(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):jb(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return z(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Kb(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Rr;return r&&(z(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
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
 */function Ot(e,t){z(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=uo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Or(this,this.stsTokenManager.getToken(this.auth,t));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Ub(this,t)}reload(){return zb(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Di(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Or(this,Fb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(a=n.photoURL)!==null&&a!==void 0?a:void 0,A=(o=n.tenantId)!==null&&o!==void 0?o:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:T,isAnonymous:U,providerData:Y,stsTokenManager:q}=n;z(O&&q,t,"internal-error");const R=Rr.fromJSON(this.name,q);z(typeof O=="string",t,"internal-error"),Ot(f,t.name),Ot(p,t.name),z(typeof T=="boolean",t,"internal-error"),z(typeof U=="boolean",t,"internal-error"),Ot(m,t.name),Ot(I,t.name),Ot(A,t.name),Ot(N,t.name),Ot(v,t.name),Ot(b,t.name);const L=new hn({uid:O,auth:t,email:p,emailVerified:T,displayName:f,isAnonymous:U,photoURL:I,phoneNumber:m,tenantId:A,stsTokenManager:R,createdAt:v,lastLoginAt:b});return Y&&Array.isArray(Y)&&(L.providerData=Y.map(G=>Object.assign({},G))),N&&(L._redirectEventId=N),L}static async _fromIdTokenResponse(t,n,r=!1){const i=new Rr;i.updateFromServerResponse(n);const s=new hn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Di(s),s}}/**
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
 */const Zc=new Map;function gt(e){_t(e instanceof Function,"Expected a class definition");let t=Zc.get(e);return t?(_t(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Zc.set(e,t),t)}/**
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
 */class Nf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Nf.type="NONE";const el=Nf;/**
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
 */function wi(e,t,n){return`firebase:${e}:${t}:${n}`}class Un{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=wi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?hn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Un(gt(el),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||gt(el);const a=wi(r,t.config.apiKey,t.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const f=hn._fromJSON(t,u);l!==s&&(o=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Un(s,t,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new Un(s,t,r))}}/**
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
 */function tl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($f(t))return"Blackberry";if(Uf(t))return"Webos";if(mo(t))return"Safari";if((t.includes("chrome/")||Df(t))&&!t.includes("edge/"))return"Chrome";if(Ff(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mf(e=Se()){return/firefox\//i.test(e)}function mo(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Df(e=Se()){return/crios\//i.test(e)}function Lf(e=Se()){return/iemobile/i.test(e)}function Ff(e=Se()){return/android/i.test(e)}function $f(e=Se()){return/blackberry/i.test(e)}function Uf(e=Se()){return/webos/i.test(e)}function ls(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function qb(e=Se()){var t;return ls(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Gb(){return cy()&&document.documentMode===10}function jf(e=Se()){return ls(e)||Ff(e)||Uf(e)||$f(e)||/windows phone/i.test(e)||Lf(e)}function Yb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Bf(e,t=[]){let n;switch(e){case"Browser":n=tl(Se());break;case"Worker":n=`${tl(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
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
 */class Jb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const c=t(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Xb(e,t={}){return Sn(e,"GET","/v2/passwordPolicy",En(e,t))}/**
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
 */const Qb=6;class Zb{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Qb,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class e_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nl(this),this.idTokenSubscription=new nl(this),this.beforeStateQueue=new Jb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=gt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Un.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Di(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ut(t):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Xb(this),n=new Zb(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new In("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&gt(t)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Bf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Cb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qt(e){return ut(e)}class nl{constructor(t){this.auth=t,this.observer=null,this.addObserver=py(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function t_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Hf(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=it("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",t_().appendChild(r)})}function n_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const r_="https://www.google.com/recaptcha/enterprise.js?render=",i_="recaptcha-enterprise",s_="NO_RECAPTCHA";class a_{constructor(t){this.type=i_,this.auth=Qt(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{Lb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new Tb(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;Xc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{a(l)}).catch(()=>{a(s_)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&Xc(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Hf(r_+o).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function Li(e,t,n,r=!1){const i=new a_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
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
 */function o_(e,t){const n=Qn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cr(s,t??{}))return i;He(i,"already-initialized")}return n.initialize({options:t})}function c_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function l_(e,t,n){const r=Qt(e);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=zf(t),{host:a,port:o}=u_(t),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||f_()}function zf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function u_(e){const t=zf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:rl(a)}}}function rl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function f_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class go{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return mt("not implemented")}_getIdTokenResponse(t){return mt("not implemented")}_linkToIdToken(t,n){return mt("not implemented")}_getReauthenticationResolver(t){return mt("not implemented")}}async function d_(e,t){return Sn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Ms(e,t){return zr(e,"POST","/v1/accounts:signInWithPassword",En(e,t))}/**
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
 */async function h_(e,t){return zr(e,"POST","/v1/accounts:signInWithEmailLink",En(e,t))}async function p_(e,t){return zr(e,"POST","/v1/accounts:signInWithEmailLink",En(e,t))}/**
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
 */class xr extends go{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new xr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new xr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Li(t,r,"signInWithPassword");return Ms(t,i)}else return Ms(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Li(t,r,"signInWithPassword");return Ms(t,s)}else return Promise.reject(i)});case"emailLink":return h_(t,{email:this._email,oobCode:this._password});default:He(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return d_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return p_(t,{idToken:n,email:this._email,oobCode:this._password});default:He(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function jn(e,t){return zr(e,"POST","/v1/accounts:signInWithIdp",En(e,t))}/**
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
 */const m_="http://localhost";class gn extends go{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new gn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=uo(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new gn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return jn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,jn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,jn(t,n)}buildRequest(){const t={requestUri:m_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=jr(n)}return t}}/**
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
 */function g_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function v_(e){const t=ar(or(e)).link,n=t?ar(or(t)).deep_link_id:null,r=ar(or(e)).deep_link_id;return(r?ar(or(r)).link:null)||r||n||t||e}class vo{constructor(t){var n,r,i,s,a,o;const c=ar(or(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=g_((i=c.mode)!==null&&i!==void 0?i:null);z(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=v_(t);try{return new vo(n)}catch{return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(t,n){return xr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=vo.parseLink(n);return z(r,"argument-error"),xr._fromEmailAndCode(t,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wr extends yo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dt extends Wr{constructor(){super("facebook.com")}static credential(t){return gn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
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
 */class Lt extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return gn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
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
 */class Ft extends Wr{constructor(){super("github.com")}static credential(t){return gn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
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
 */class $t extends Wr{constructor(){super("twitter.com")}static credential(t,n){return gn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
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
 */async function Ds(e,t){return zr(e,"POST","/v1/accounts:signUp",En(e,t))}/**
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
 */class vn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await hn._fromIdTokenResponse(t,r,i),a=il(r);return new vn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=il(r);return new vn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function il(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Fi extends lt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Fi(t,n,r,i)}}function Wf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fi._fromErrorAndOperation(e,s,t,r):s})}async function y_(e,t,n=!1){const r=await Or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return vn._forOperation(e,"link",r)}/**
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
 */async function b_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Or(e,Wf(r,i,t,e),n);z(s.idToken,r,"internal-error");const a=po(s.idToken);z(a,r,"internal-error");const{sub:o}=a;return z(e.uid===o,r,"user-mismatch"),vn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&He(r,"user-mismatch"),s}}/**
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
 */async function Vf(e,t,n=!1){const r="signIn",i=await Wf(e,r,t),s=await vn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function __(e,t){return Vf(Qt(e),t)}/**
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
 */async function Kf(e){const t=Qt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function T1(e,t,n){var r;const i=Qt(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Li(i,s,"signUpPassword");a=Ds(i,l)}else a=Ds(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Li(i,s,"signUpPassword");return Ds(i,u)}throw l});const o=await a.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Kf(e),l}),c=await vn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function k1(e,t,n){return __(ut(e),Zn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kf(e),r})}function w_(e,t,n,r){return ut(e).onIdTokenChanged(t,n,r)}function I_(e,t,n){return ut(e).beforeAuthStateChanged(t,n)}function E_(e,t,n,r){return ut(e).onAuthStateChanged(t,n,r)}const $i="__sak";/**
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
 */class qf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($i,"1"),this.storage.removeItem($i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function S_(){const e=Se();return mo(e)||ls(e)}const A_=1e3,T_=10;class Gf extends qf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S_()&&Yb(),this.fallbackToPolling=jf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Gb()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,T_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},A_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Gf.type="LOCAL";const k_=Gf;/**
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
 */class Yf extends qf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Yf.type="SESSION";const Jf=Yf;/**
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
 */function C_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class us{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new us(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await C_(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}us.receivers=[];/**
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
 */function bo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class P_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=bo("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function st(){return window}function O_(e){st().location.href=e}/**
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
 */function Xf(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function R_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function N_(){return Xf()?self:null}/**
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
 */const Qf="firebaseLocalStorageDb",M_=1,Ui="firebaseLocalStorage",Zf="fbase_key";class Vr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fs(e,t){return e.transaction([Ui],t?"readwrite":"readonly").objectStore(Ui)}function D_(){const e=indexedDB.deleteDatabase(Qf);return new Vr(e).toPromise()}function ma(){const e=indexedDB.open(Qf,M_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ui,{keyPath:Zf})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ui)?t(r):(r.close(),await D_(),t(await ma()))})})}async function sl(e,t,n){const r=fs(e,!0).put({[Zf]:t,value:n});return new Vr(r).toPromise()}async function L_(e,t){const n=fs(e,!1).get(t),r=await new Vr(n).toPromise();return r===void 0?null:r.value}function al(e,t){const n=fs(e,!0).delete(t);return new Vr(n).toPromise()}const F_=800,$_=3;class ed{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>$_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=us._getInstance(N_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await R_(),!this.activeServiceWorker)return;this.sender=new P_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||x_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ma();return await sl(t,$i,"1"),await al(t,$i),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>L_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>al(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=fs(i,!1).getAll();return new Vr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ed.type="LOCAL";const U_=ed;new Hr(3e4,6e4);/**
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
 */function td(e,t){return t?gt(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class _o extends go{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return jn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return jn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function j_(e){return Vf(e.auth,new _o(e),e.bypassAuthState)}function B_(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),b_(n,new _o(e),e.bypassAuthState)}async function H_(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),y_(n,new _o(e),e.bypassAuthState)}/**
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
 */class nd{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return j_;case"linkViaPopup":case"linkViaRedirect":return H_;case"reauthViaPopup":case"reauthViaRedirect":return B_;default:He(this.auth,"internal-error")}}resolve(t){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const z_=new Hr(2e3,1e4);class Nn extends nd{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const t=bo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,z_.get())};t()}}Nn.currentPopupAction=null;/**
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
 */const W_="pendingRedirect",Ii=new Map;class V_ extends nd{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ii.get(this.auth._key());if(!t){try{const r=await K_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ii.set(this.auth._key(),t)}return this.bypassAuthState||Ii.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K_(e,t){const n=id(t),r=rd(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function q_(e,t){return rd(e)._set(id(t),"true")}function G_(e,t){Ii.set(e._key(),t)}function rd(e){return gt(e._redirectPersistence)}function id(e){return wi(W_,e.config.apiKey,e.name)}/**
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
 */function C1(e,t,n){return Y_(e,t,n)}async function Y_(e,t,n){const r=Qt(e);Pb(e,t,yo),await r._initializationPromise;const i=td(r,n);return await q_(i,r),i._openRedirect(r,t,"signInViaRedirect")}async function J_(e,t,n=!1){const r=Qt(e),i=td(r,t),a=await new V_(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const X_=10*60*1e3;class Q_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Z_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!sd(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=X_&&this.cachedEventUids.clear(),this.cachedEventUids.has(ol(t))}saveEventToCache(t){this.cachedEventUids.add(ol(t)),this.lastProcessedEventTime=Date.now()}}function ol(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function sd({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Z_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sd(e);default:return!1}}/**
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
 */async function e0(e,t={}){return Sn(e,"GET","/v1/projects",t)}/**
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
 */const t0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n0=/^https?/;async function r0(e){if(e.config.emulator)return;const{authorizedDomains:t}=await e0(e);for(const n of t)try{if(i0(n))return}catch{}He(e,"unauthorized-domain")}function i0(e){const t=pa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!n0.test(n))return!1;if(t0.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const s0=new Hr(3e4,6e4);function cl(){const e=st().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function a0(e){return new Promise((t,n)=>{var r,i,s;function a(){cl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{cl(),n(it(e,"network-request-failed"))},timeout:s0.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)a();else{const o=n_("iframefcb");return st()[o]=()=>{gapi.load?a():n(it(e,"network-request-failed"))},Hf(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw Ei=null,t})}let Ei=null;function o0(e){return Ei=Ei||a0(e),Ei}/**
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
 */const c0=new Hr(5e3,15e3),l0="__/auth/iframe",u0="emulator/auth/iframe",f0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h0(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ho(t,u0):`https://${e.config.authDomain}/${l0}`,r={apiKey:t.apiKey,appName:e.name,v:Br},i=d0.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jr(r).slice(1)}`}async function p0(e){const t=await o0(e),n=st().gapi;return z(n,e,"internal-error"),t.open({where:document.body,url:h0(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=it(e,"network-request-failed"),o=st().setTimeout(()=>{s(a)},c0.get());function c(){st().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const m0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g0=500,v0=600,y0="_blank",b0="http://localhost";class ll{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _0(e,t,n,r=g0,i=v0){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},m0),{width:r.toString(),height:i.toString(),top:s,left:a}),l=Se().toLowerCase();n&&(o=Df(l)?y0:n),Mf(l)&&(t=t||b0,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,I])=>`${p}${m}=${I},`,"");if(qb(l)&&o!=="_self")return w0(t||"",o),new ll(null);const f=window.open(t||"",o,u);z(f,e,"popup-blocked");try{f.focus()}catch{}return new ll(f)}function w0(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const I0="__/auth/handler",E0="emulator/auth/handler",S0=encodeURIComponent("fac");async function ul(e,t,n,r,i,s){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Br,eventId:i};if(t instanceof yo){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",hy(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))a[u]=f}if(t instanceof Wr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${S0}=${encodeURIComponent(c)}`:"";return`${A0(e)}?${jr(o).slice(1)}${l}`}function A0({config:e}){return e.emulator?ho(e,E0):`https://${e.authDomain}/${I0}`}/**
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
 */const Ls="webStorageSupport";class T0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jf,this._completeRedirectFn=J_,this._overrideRedirectResult=G_}async _openPopup(t,n,r,i){var s;_t((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ul(t,n,r,pa(),i);return _0(t,a,bo())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await ul(t,n,r,pa(),i);return O_(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_t(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await p0(t),r=new Q_(t);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ls,{type:Ls},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ls];a!==void 0&&n(!!a),He(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=r0(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return jf()||mo()||ls()}}const k0=T0;var fl="@firebase/auth",dl="1.3.0";/**
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
 */class C0{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function P0(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function O0(e){bt(new ot("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bf(e)},l=new e_(r,i,s,c);return c_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),bt(new ot("auth-internal",t=>{const n=Qt(t.getProvider("auth").getImmediate());return(r=>new C0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(fl,dl,P0(e)),rt(fl,dl,"esm2017")}/**
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
 */const R0=5*60,x0=gf("authIdTokenMaxAge")||R0;let hl=null;const N0=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>x0)return;const i=n==null?void 0:n.token;hl!==i&&(hl=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function M0(e=Ef()){const t=Qn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=o_(e,{popupRedirectResolver:k0,persistence:[U_,k_,Jf]}),r=gf("authTokenSyncURL");if(r){const s=N0(r);I_(n,s,()=>s(n.currentUser)),w_(n,a=>s(a))}const i=iy("auth");return i&&l_(n,`http://${i}`),n}O0("Browser");/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ad;const ds=e=>ad=e,od=Symbol();function ga(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var mr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(mr||(mr={}));function D0(){const e=au(!0),t=e.run(()=>ct({}));let n=[],r=[];const i=Qi({install(s){ds(i),i._a=s,s.provide(od,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!Hm?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const cd=()=>{};function pl(e,t,n,r=cd){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&ja()&&ou(i),i}function On(e,...t){e.slice().forEach(n=>{n(...t)})}const L0=e=>e();function va(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];ga(i)&&ga(r)&&e.hasOwnProperty(n)&&!pe(r)&&!jt(r)?e[n]=va(i,r):e[n]=r}return e}const F0=Symbol();function $0(e){return!ga(e)||!e.hasOwnProperty(F0)}const{assign:xt}=Object;function U0(e){return!!(pe(e)&&e.effect)}function j0(e,t,n,r){const{state:i,actions:s,getters:a}=t,o=n.state.value[e];let c;function l(){o||(n.state.value[e]=i?i():{});const u=Yh(n.state.value[e]);return xt(u,s,Object.keys(a||{}).reduce((f,p)=>(f[p]=Qi(de(()=>{ds(n);const m=n._s.get(e);return a[p].call(m,m)})),f),{}))}return c=ld(e,l,t,n,r,!0),c}function ld(e,t,n={},r,i,s){let a;const o=xt({actions:{}},n),c={deep:!0};let l,u,f=[],p=[],m;const I=r.state.value[e];!s&&!I&&(r.state.value[e]={}),ct({});let A;function N(R){let L;l=u=!1,typeof R=="function"?(R(r.state.value[e]),L={type:mr.patchFunction,storeId:e,events:m}):(va(r.state.value[e],R),L={type:mr.patchObject,payload:R,storeId:e,events:m});const G=A=Symbol();Ur().then(()=>{A===G&&(l=!0)}),u=!0,On(f,L,r.state.value[e])}const v=s?function(){const{state:L}=n,G=L?L():{};this.$patch(we=>{xt(we,G)})}:cd;function b(){a.stop(),f=[],p=[],r._s.delete(e)}function O(R,L){return function(){ds(r);const G=Array.from(arguments),we=[],Me=[];function Ue(ee){we.push(ee)}function Zt(ee){Me.push(ee)}On(p,{args:G,name:R,store:U,after:Ue,onError:Zt});let je;try{je=L.apply(this&&this.$id===e?this:U,G)}catch(ee){throw On(Me,ee),ee}return je instanceof Promise?je.then(ee=>(On(we,ee),ee)).catch(ee=>(On(Me,ee),Promise.reject(ee))):(On(we,je),je)}}const T={_p:r,$id:e,$onAction:pl.bind(null,p),$patch:N,$reset:v,$subscribe(R,L={}){const G=pl(f,R,L.detached,()=>we()),we=a.run(()=>yt(()=>r.state.value[e],Me=>{(L.flush==="sync"?u:l)&&R({storeId:e,type:mr.direct,events:m},Me)},xt({},c,L)));return G},$dispose:b},U=$r(T);r._s.set(e,U);const q=(r._a&&r._a.runWithContext||L0)(()=>r._e.run(()=>(a=au()).run(t)));for(const R in q){const L=q[R];if(pe(L)&&!U0(L)||jt(L))s||(I&&$0(L)&&(pe(L)?L.value=I[R]:va(L,I[R])),r.state.value[e][R]=L);else if(typeof L=="function"){const G=O(R,L);q[R]=G,o.actions[R]=L}}return xt(U,q),xt(Z(U),q),Object.defineProperty(U,"$state",{get:()=>r.state.value[e],set:R=>{N(L=>{xt(L,R)})}}),r._p.forEach(R=>{xt(U,a.run(()=>R({store:U,app:r._a,pinia:r,options:o})))}),I&&s&&n.hydrate&&n.hydrate(U.$state,I),l=!0,u=!0,U}function B0(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function a(o,c){const l=Fp();return o=o||(l?Oe(od,null):null),o&&ds(o),o=ad,o._s.has(r)||(s?ld(r,t,i,o):j0(r,i,o)),o._s.get(r)}return a.$id=r,a}const H0=e=>{const t=D0();e.use(t)},ud=B0({id:"user",state:()=>({user:null}),actions:{setUser(e){this.user=e}}}),z0=()=>{const e=Oe("auth");if(!e)throw new Error("Firebase Auth is not provided");E_(e,t=>{ud().setUser(t)})},W0={useUserStore:ud,install:e=>{H0(e),ro()&&z0()}};var V0="firebase",K0="10.5.0";/**
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
 */rt(V0,K0,"app");const q0=(e,t)=>t.some(n=>e instanceof n);let ml,gl;function G0(){return ml||(ml=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y0(){return gl||(gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fd=new WeakMap,ya=new WeakMap,dd=new WeakMap,Fs=new WeakMap,wo=new WeakMap;function J0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Kt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&fd.set(n,e)}).catch(()=>{}),wo.set(t,e),t}function X0(e){if(ya.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});ya.set(e,t)}let ba={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ya.get(e);if(t==="objectStoreNames")return e.objectStoreNames||dd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Q0(e){ba=e(ba)}function Z0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call($s(this),t,...n);return dd.set(r,t.sort?t.sort():[t]),Kt(r)}:Y0().includes(e)?function(...t){return e.apply($s(this),t),Kt(fd.get(this))}:function(...t){return Kt(e.apply($s(this),t))}}function ew(e){return typeof e=="function"?Z0(e):(e instanceof IDBTransaction&&X0(e),q0(e,G0())?new Proxy(e,ba):e)}function Kt(e){if(e instanceof IDBRequest)return J0(e);if(Fs.has(e))return Fs.get(e);const t=ew(e);return t!==e&&(Fs.set(e,t),wo.set(t,e)),t}const $s=e=>wo.get(e);function tw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Kt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Kt(a.result),c.oldVersion,c.newVersion,Kt(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const nw=["get","getKey","getAll","getAllKeys","count"],rw=["put","add","delete","clear"],Us=new Map;function vl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Us.get(t))return Us.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=rw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nw.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return Us.set(t,s),s}Q0(e=>({...e,get:(t,n,r)=>vl(t,n)||e.get(t,n,r),has:(t,n)=>!!vl(t,n)||e.has(t,n)}));const hd="@firebase/installations",Io="0.6.4";/**
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
 */const pd=1e4,md=`w:${Io}`,gd="FIS_v2",iw="https://firebaseinstallations.googleapis.com/v1",sw=60*60*1e3,aw="installations",ow="Installations";/**
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
 */const cw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yn=new In(aw,ow,cw);function vd(e){return e instanceof lt&&e.code.includes("request-failed")}/**
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
 */function yd({projectId:e}){return`${iw}/projects/${e}/installations`}function bd(e){return{token:e.token,requestStatus:2,expiresIn:uw(e.expiresIn),creationTime:Date.now()}}async function _d(e,t){const r=(await t.json()).error;return yn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function lw(e,{refreshToken:t}){const n=wd(e);return n.append("Authorization",fw(t)),n}async function Id(e){const t=await e();return t.status>=500&&t.status<600?e():t}function uw(e){return Number(e.replace("s","000"))}function fw(e){return`${gd} ${e}`}/**
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
 */async function dw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=yd(e),i=wd(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={fid:n,authVersion:gd,appId:e.appId,sdkVersion:md},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Id(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:bd(l.authToken)}}else throw await _d("Create Installation",c)}/**
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
 */function Ed(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function hw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pw=/^[cdef][\w-]{21}$/,_a="";function mw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=gw(e);return pw.test(n)?n:_a}catch{return _a}}function gw(e){return hw(e).substr(0,22)}/**
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
 */function hs(e){return`${e.appName}!${e.appId}`}/**
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
 */const Sd=new Map;function Ad(e,t){const n=hs(e);Td(n,t),vw(n,t)}function Td(e,t){const n=Sd.get(e);if(n)for(const r of n)r(t)}function vw(e,t){const n=yw();n&&n.postMessage({key:e,fid:t}),bw()}let on=null;function yw(){return!on&&"BroadcastChannel"in self&&(on=new BroadcastChannel("[Firebase] FID Change"),on.onmessage=e=>{Td(e.data.key,e.data.fid)}),on}function bw(){Sd.size===0&&on&&(on.close(),on=null)}/**
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
 */const _w="firebase-installations-database",ww=1,bn="firebase-installations-store";let js=null;function Eo(){return js||(js=tw(_w,ww,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(bn)}}})),js}async function ji(e,t){const n=hs(e),i=(await Eo()).transaction(bn,"readwrite"),s=i.objectStore(bn),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&Ad(e,t.fid),t}async function kd(e){const t=hs(e),r=(await Eo()).transaction(bn,"readwrite");await r.objectStore(bn).delete(t),await r.done}async function ps(e,t){const n=hs(e),i=(await Eo()).transaction(bn,"readwrite"),s=i.objectStore(bn),a=await s.get(n),o=t(a);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!a||a.fid!==o.fid)&&Ad(e,o.fid),o}/**
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
 */async function So(e){let t;const n=await ps(e.appConfig,r=>{const i=Iw(r),s=Ew(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===_a?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Iw(e){const t=e||{fid:mw(),registrationStatus:0};return Cd(t)}function Ew(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(yn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Sw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Aw(e)}:{installationEntry:t}}async function Sw(e,t){try{const n=await dw(e,t);return ji(e.appConfig,n)}catch(n){throw vd(n)&&n.customData.serverCode===409?await kd(e.appConfig):await ji(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Aw(e){let t=await yl(e.appConfig);for(;t.registrationStatus===1;)await Ed(100),t=await yl(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await So(e);return r||n}return t}function yl(e){return ps(e,t=>{if(!t)throw yn.create("installation-not-found");return Cd(t)})}function Cd(e){return Tw(e)?{fid:e.fid,registrationStatus:0}:e}function Tw(e){return e.registrationStatus===1&&e.registrationTime+pd<Date.now()}/**
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
 */async function kw({appConfig:e,heartbeatServiceProvider:t},n){const r=Cw(e,n),i=lw(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={installation:{sdkVersion:md,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Id(()=>fetch(r,o));if(c.ok){const l=await c.json();return bd(l)}else throw await _d("Generate Auth Token",c)}function Cw(e,{fid:t}){return`${yd(e)}/${t}/authTokens:generate`}/**
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
 */async function Ao(e,t=!1){let n;const r=await ps(e.appConfig,s=>{if(!Pd(s))throw yn.create("not-registered");const a=s.authToken;if(!t&&Rw(a))return s;if(a.requestStatus===1)return n=Pw(e,t),s;{if(!navigator.onLine)throw yn.create("app-offline");const o=Nw(s);return n=Ow(e,o),o}});return n?await n:r.authToken}async function Pw(e,t){let n=await bl(e.appConfig);for(;n.authToken.requestStatus===1;)await Ed(100),n=await bl(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ao(e,t):r}function bl(e){return ps(e,t=>{if(!Pd(t))throw yn.create("not-registered");const n=t.authToken;return Mw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ow(e,t){try{const n=await kw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ji(e.appConfig,r),n}catch(n){if(vd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ji(e.appConfig,r)}throw n}}function Pd(e){return e!==void 0&&e.registrationStatus===2}function Rw(e){return e.requestStatus===2&&!xw(e)}function xw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+sw}function Nw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Mw(e){return e.requestStatus===1&&e.requestTime+pd<Date.now()}/**
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
 */async function Dw(e){const t=e,{installationEntry:n,registrationPromise:r}=await So(t);return r?r.catch(console.error):Ao(t).catch(console.error),n.fid}/**
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
 */async function Lw(e,t=!1){const n=e;return await Fw(n),(await Ao(n,t)).token}async function Fw(e){const{registrationPromise:t}=await So(e);t&&await t}/**
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
 */function $w(e){if(!e||!e.options)throw Bs("App Configuration");if(!e.name)throw Bs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Bs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Bs(e){return yn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Od="installations",Uw="installations-internal",jw=e=>{const t=e.getProvider("app").getImmediate(),n=$w(t),r=Qn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Bw=e=>{const t=e.getProvider("app").getImmediate(),n=Qn(t,Od).getImmediate();return{getId:()=>Dw(n),getToken:i=>Lw(n,i)}};function Hw(){bt(new ot(Od,jw,"PUBLIC")),bt(new ot(Uw,Bw,"PRIVATE"))}Hw();rt(hd,Io);rt(hd,Io,"esm2017");/**
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
 */const Bi="analytics",zw="firebase_id",Ww="origin",Vw=60*1e3,Kw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",To="https://www.googletagmanager.com/gtag/js";/**
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
 */const Re=new co("@firebase/analytics");/**
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
 */const qw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fe=new In("analytics","Analytics",qw);/**
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
 */function Gw(e){if(!e.startsWith(To)){const t=Fe.create("invalid-gtag-resource",{gtagURL:e});return Re.warn(t.message),""}return e}function Rd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Yw(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Jw(e,t){const n=Yw("firebase-js-sdk-policy",{createScriptURL:Gw}),r=document.createElement("script"),i=`${To}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Xw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Qw(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const c=(await Rd(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){Re.error(o)}e("config",i,s)}async function Zw(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const o=await Rd(n);for(const c of a){const l=o.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Re.error(s)}}function eI(e,t,n,r){async function i(s,...a){try{if(s==="event"){const[o,c]=a;await Zw(e,t,n,o,c)}else if(s==="config"){const[o,c]=a;await Qw(e,t,n,r,o,c)}else if(s==="consent"){const[o]=a;e("consent","update",o)}else if(s==="get"){const[o,c,l]=a;e("get",o,c,l)}else if(s==="set"){const[o]=a;e("set",o)}else e(s,...a)}catch(o){Re.error(o)}}return i}function tI(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=eI(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function nI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(To)&&n.src.includes(e))return n;return null}/**
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
 */const rI=30,iI=1e3;class sI{constructor(t={},n=iI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const xd=new sI;function aI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function oI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:aI(r)},s=Kw.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw Fe.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function cI(e,t=xd,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Fe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Fe.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new fI;return setTimeout(async()=>{o.abort()},n!==void 0?n:Vw),Nd({appId:r,apiKey:i,measurementId:s},a,o,t)}async function Nd(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=xd){var s;const{appId:a,measurementId:o}=e;try{await lI(r,t)}catch(c){if(o)return Re.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await oI(e);return i.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!uI(l)){if(i.deleteThrottleMetadata(a),o)return Re.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:o};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?zc(n,i.intervalMillis,rI):zc(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,f),Re.debug(`Calling attemptFetch again in ${u} millis`),Nd(e,f,r,i)}}function lI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Fe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function uI(e){if(!(e instanceof lt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class fI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function dI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
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
 */async function hI(){if(yf())try{await bf()}catch(e){return Re.warn(Fe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Re.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pI(e,t,n,r,i,s,a){var o;const c=cI(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Re.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Re.error(m)),t.push(c);const l=hI().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);nI(s)||Jw(s,u.measurementId),i("js",new Date);const p=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return p[Ww]="firebase",p.update=!0,f!=null&&(p[zw]=f),i("config",u.measurementId,p),u.measurementId}/**
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
 */class mI{constructor(t){this.app=t}_delete(){return delete gr[this.app.options.appId],Promise.resolve()}}let gr={},_l=[];const wl={};let Hs="dataLayer",gI="gtag",Il,Md,El=!1;function vI(){const e=[];if(vf()&&e.push("This is a browser extension environment."),ly()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Fe.create("invalid-analytics-context",{errorInfo:t});Re.warn(n.message)}}function yI(e,t,n){vI();const r=e.options.appId;if(!r)throw Fe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Re.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fe.create("no-api-key");if(gr[r]!=null)throw Fe.create("already-exists",{id:r});if(!El){Xw(Hs);const{wrappedGtag:s,gtagCore:a}=tI(gr,_l,wl,Hs,gI);Md=s,Il=a,El=!0}return gr[r]=pI(e,_l,wl,t,Il,Hs,n),new mI(e)}function bI(e=Ef()){e=ut(e);const t=Qn(e,Bi);return t.isInitialized()?t.getImmediate():_I(e)}function _I(e,t={}){const n=Qn(e,Bi);if(n.isInitialized()){const i=n.getImmediate();if(Cr(t,n.getOptions()))return i;throw Fe.create("already-initialized")}return n.initialize({options:t})}function wI(e,t,n,r){e=ut(e),dI(Md,gr[e.app.options.appId],t,n,r).catch(i=>Re.error(i))}const Sl="@firebase/analytics",Al="0.10.0";function II(){bt(new ot(Bi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return yI(r,i,n)},"PUBLIC")),bt(new ot("analytics-internal",e,"PRIVATE")),rt(Sl,Al),rt(Sl,Al,"esm2017");function e(t){try{const n=t.getProvider(Bi).getImmediate();return{logEvent:(r,i,s)=>wI(n,r,i,s)}}catch(n){throw Fe.create("interop-component-reg-failed",{reason:n})}}}II();const EI={apiKey:"AIzaSyCaFEOlw1_MW6jkKwLM7Wi4DALoTmfx01k",authDomain:"tracker-97bfa.firebaseapp.com",projectId:"tracker-97bfa",storageBucket:"tracker-97bfa.appspot.com",messagingSenderId:"658292198263",appId:"1:658292198263:web:245b2a87dcee09087e6f72",measurementId:"G-EN15KQD2LD"},ko=If(EI),SI=bI(ko),AI=M0(ko),TI={install:e=>{e.provide("firebase",ko),e.provide("analytics",SI),e.provide("auth",AI)}};function Tl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tl(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hi(e)}function kI(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function CI(e,t,n){return t&&kl(e.prototype,t),n&&kl(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Co(e,t){return OI(e)||xI(e,t)||Dd(e,t)||MI()}function Kr(e){return PI(e)||RI(e)||Dd(e)||NI()}function PI(e){if(Array.isArray(e))return wa(e)}function OI(e){if(Array.isArray(e))return e}function RI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xI(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function Dd(e,t){if(e){if(typeof e=="string")return wa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wa(e,t)}}function wa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function NI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cl=function(){},Po={},Ld={},Fd=null,$d={mark:Cl,measure:Cl};try{typeof window<"u"&&(Po=window),typeof document<"u"&&(Ld=document),typeof MutationObserver<"u"&&(Fd=MutationObserver),typeof performance<"u"&&($d=performance)}catch{}var DI=Po.navigator||{},Pl=DI.userAgent,Ol=Pl===void 0?"":Pl,Yt=Po,ue=Ld,Rl=Fd,ai=$d;Yt.document;var Tt=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",Ud=~Ol.indexOf("MSIE")||~Ol.indexOf("Trident/"),oi,ci,li,ui,fi,wt="___FONT_AWESOME___",Ia=16,jd="fa",Bd="svg-inline--fa",_n="data-fa-i2svg",Ea="data-fa-pseudo-element",LI="data-fa-pseudo-element-pending",Oo="data-prefix",Ro="data-icon",xl="fontawesome-i2svg",FI="async",$I=["HTML","HEAD","STYLE","SCRIPT"],Hd=function(){try{return!0}catch{return!1}}(),le="classic",he="sharp",xo=[le,he];function qr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[le]}})}var Nr=qr((oi={},ve(oi,le,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ve(oi,he,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),oi)),Mr=qr((ci={},ve(ci,le,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ve(ci,he,{solid:"fass",regular:"fasr",light:"fasl"}),ci)),Dr=qr((li={},ve(li,le,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ve(li,he,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),li)),UI=qr((ui={},ve(ui,le,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ve(ui,he,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ui)),jI=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,zd="fa-layers-text",BI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,HI=qr((fi={},ve(fi,le,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ve(fi,he,{900:"fass",400:"fasr",300:"fasl"}),fi)),Wd=[1,2,3,4,5,6,7,8,9,10],zI=Wd.concat([11,12,13,14,15,16,17,18,19,20]),WI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Lr=new Set;Object.keys(Mr[le]).map(Lr.add.bind(Lr));Object.keys(Mr[he]).map(Lr.add.bind(Lr));var VI=[].concat(xo,Kr(Lr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",cn.GROUP,cn.SWAP_OPACITY,cn.PRIMARY,cn.SECONDARY]).concat(Wd.map(function(e){return"".concat(e,"x")})).concat(zI.map(function(e){return"w-".concat(e)})),vr=Yt.FontAwesomeConfig||{};function KI(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qI(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var GI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];GI.forEach(function(e){var t=Co(e,2),n=t[0],r=t[1],i=qI(KI(n));i!=null&&(vr[r]=i)})}var Vd={styleDefault:"solid",familyDefault:"classic",cssPrefix:jd,replacementClass:Bd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vr.familyPrefix&&(vr.cssPrefix=vr.familyPrefix);var qn=M(M({},Vd),vr);qn.autoReplaceSvg||(qn.observeMutations=!1);var $={};Object.keys(Vd).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){qn[e]=n,yr.forEach(function(r){return r($)})},get:function(){return qn[e]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(t){qn.cssPrefix=t,yr.forEach(function(n){return n($)})},get:function(){return qn.cssPrefix}});Yt.FontAwesomeConfig=$;var yr=[];function YI(e){return yr.push(e),function(){yr.splice(yr.indexOf(e),1)}}var Rt=Ia,nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function JI(e){if(!(!e||!Tt)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return ue.head.insertBefore(t,r),e}}var XI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fr(){for(var e=12,t="";e-- >0;)t+=XI[Math.random()*62|0];return t}function er(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function No(e){return e.classList?er(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Kd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function QI(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Kd(e[n]),'" ')},"").trim()}function ms(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Mo(e){return e.size!==nt.size||e.x!==nt.x||e.y!==nt.y||e.rotate!==nt.rotate||e.flipX||e.flipY}function ZI(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function eE(e){var t=e.transform,n=e.width,r=n===void 0?Ia:n,i=e.height,s=i===void 0?Ia:i,a=e.startCentered,o=a===void 0?!1:a,c="";return o&&Ud?c+="translate(".concat(t.x/Rt-r/2,"em, ").concat(t.y/Rt-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Rt,"em), calc(-50% + ").concat(t.y/Rt,"em)) "):c+="translate(".concat(t.x/Rt,"em, ").concat(t.y/Rt,"em) "),c+="scale(".concat(t.size/Rt*(t.flipX?-1:1),", ").concat(t.size/Rt*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var tE=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qd(){var e=jd,t=Bd,n=$.cssPrefix,r=$.replacementClass,i=tE;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Nl=!1;function zs(){$.autoAddCss&&!Nl&&(JI(qd()),Nl=!0)}var nE={mixout:function(){return{dom:{css:qd,insertCss:zs}}},hooks:function(){return{beforeDOMElementCreation:function(){zs()},beforeI2svg:function(){zs()}}}},It=Yt||{};It[wt]||(It[wt]={});It[wt].styles||(It[wt].styles={});It[wt].hooks||(It[wt].hooks={});It[wt].shims||(It[wt].shims=[]);var Ke=It[wt],Gd=[],rE=function e(){ue.removeEventListener("DOMContentLoaded",e),zi=1,Gd.map(function(t){return t()})},zi=!1;Tt&&(zi=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),zi||ue.addEventListener("DOMContentLoaded",rE));function iE(e){Tt&&(zi?setTimeout(e,0):Gd.push(e))}function Gr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Kd(e):"<".concat(t," ").concat(QI(r),">").concat(s.map(Gr).join(""),"</").concat(t,">")}function Ml(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var sE=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},Ws=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?sE(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<a;c++)l=s[c],u=o(u,t[l],l,t);return u};function aE(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Sa(e){var t=aE(e);return t.length===1?t[0].toString(16):null}function oE(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Dl(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Aa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Dl(t);typeof Ke.hooks.addPack=="function"&&!i?Ke.hooks.addPack(e,Dl(t)):Ke.styles[e]=M(M({},Ke.styles[e]||{}),s),e==="fas"&&Aa("fa",t)}var di,hi,pi,Mn=Ke.styles,cE=Ke.shims,lE=(di={},ve(di,le,Object.values(Dr[le])),ve(di,he,Object.values(Dr[he])),di),Do=null,Yd={},Jd={},Xd={},Qd={},Zd={},uE=(hi={},ve(hi,le,Object.keys(Nr[le])),ve(hi,he,Object.keys(Nr[he])),hi);function fE(e){return~VI.indexOf(e)}function dE(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!fE(i)?i:null}var eh=function(){var t=function(s){return Ws(Mn,function(a,o,c){return a[c]=Ws(o,s,{}),a},{})};Yd=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=a})}return i}),Jd=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=a})}return i}),Zd=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(c){i[c]=a}),i});var n="far"in Mn||$.autoFetchSvg,r=Ws(cE,function(i,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Xd=r.names,Qd=r.unicodes,Do=gs($.styleDefault,{family:$.familyDefault})};YI(function(e){Do=gs(e.styleDefault,{family:$.familyDefault})});eh();function Lo(e,t){return(Yd[e]||{})[t]}function hE(e,t){return(Jd[e]||{})[t]}function ln(e,t){return(Zd[e]||{})[t]}function th(e){return Xd[e]||{prefix:null,iconName:null}}function pE(e){var t=Qd[e],n=Lo("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jt(){return Do}var Fo=function(){return{prefix:null,iconName:null,rest:[]}};function gs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?le:n,i=Nr[r][e],s=Mr[r][e]||Mr[r][i],a=e in Ke.styles?e:null;return s||a||null}var Ll=(pi={},ve(pi,le,Object.keys(Dr[le])),ve(pi,he,Object.keys(Dr[he])),pi);function vs(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},ve(t,le,"".concat($.cssPrefix,"-").concat(le)),ve(t,he,"".concat($.cssPrefix,"-").concat(he)),t),a=null,o=le;(e.includes(s[le])||e.some(function(l){return Ll[le].includes(l)}))&&(o=le),(e.includes(s[he])||e.some(function(l){return Ll[he].includes(l)}))&&(o=he);var c=e.reduce(function(l,u){var f=dE($.cssPrefix,u);if(Mn[u]?(u=lE[o].includes(u)?UI[o][u]:u,a=u,l.prefix=u):uE[o].indexOf(u)>-1?(a=u,l.prefix=gs(u,{family:o})):f?l.iconName=f:u!==$.replacementClass&&u!==s[le]&&u!==s[he]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var p=a==="fa"?th(l.iconName):{},m=ln(l.prefix,l.iconName);p.prefix&&(a=null),l.iconName=p.iconName||m||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!Mn.far&&Mn.fas&&!$.autoFetchSvg&&(l.prefix="fas")}return l},Fo());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===he&&(Mn.fass||$.autoFetchSvg)&&(c.prefix="fass",c.iconName=ln(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Jt()||"fas"),c}var mE=function(){function e(){kI(this,e),this.definitions={}}return CI(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=M(M({},n.definitions[o]||{}),a[o]),Aa(o,a[o]);var c=Dr[le][o];c&&Aa(c,a[o]),eh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=l)}),n[o][c]=l}),n}}]),e}(),Fl=[],Dn={},Bn={},gE=Object.keys(Bn);function vE(e,t){var n=t.mixoutsTo;return Fl=e,Dn={},Object.keys(Bn).forEach(function(r){gE.indexOf(r)===-1&&delete Bn[r]}),Fl.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Hi(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Dn[a]||(Dn[a]=[]),Dn[a].push(s[a])})}r.provides&&r.provides(Bn)}),n}function Ta(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Dn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function wn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Dn[e]||[];i.forEach(function(s){s.apply(null,n)})}function Et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bn[e]?Bn[e].apply(null,t):void 0}function ka(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Jt();if(t)return t=ln(n,t)||t,Ml(nh.definitions,n,t)||Ml(Ke.styles,n,t)}var nh=new mE,yE=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,wn("noAuto")},bE={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tt?(wn("beforeI2svg",t),Et("pseudoElements2svg",t),Et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,iE(function(){wE({autoReplaceSvgRoot:n}),wn("watch",t)})}},_E={icon:function(t){if(t===null)return null;if(Hi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ln(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=gs(t[0]);return{prefix:r,iconName:ln(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.cssPrefix,"-"))>-1||t.match(jI))){var i=vs(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Jt(),iconName:ln(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Jt();return{prefix:s,iconName:ln(s,t)||t}}}},$e={noAuto:yE,config:$,dom:bE,parse:_E,library:nh,findIconDefinition:ka,toHtml:Gr},wE=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Ke.styles).length>0||$.autoFetchSvg)&&Tt&&$.autoReplaceSvg&&$e.dom.i2svg({node:r})};function ys(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Gr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Tt){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function IE(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(Mo(a)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=ms(M(M({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function EE(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat($.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:a}),children:r}]}]}function $o(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,p=e.watchable,m=p===void 0?!1:p,I=r.found?r:n,A=I.width,N=I.height,v=i==="fak",b=[$.replacementClass,s?"".concat($.cssPrefix,"-").concat(s):""].filter(function(L){return f.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(f.classes).join(" "),O={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:b,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(N)})},T=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(A/N*16*.0625,"em")}:{};m&&(O.attributes[_n]=""),c&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||Fr())},children:[c]}),delete O.attributes.title);var U=M(M({},O),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:M(M({},T),f.styles)}),Y=r.found&&n.found?Et("generateAbstractMask",U)||{children:[],attributes:{}}:Et("generateAbstractIcon",U)||{children:[],attributes:{}},q=Y.children,R=Y.attributes;return U.children=q,U.attributes=R,o?EE(U):IE(U)}function $l(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,c=o===void 0?!1:o,l=M(M(M({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[_n]="");var u=M({},a.styles);Mo(i)&&(u.transform=eE({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=ms(u);f.length>0&&(l.style=f);var p=[];return p.push({tag:"span",attributes:l,children:[t]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function SE(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ms(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Vs=Ke.styles;function Ca(e){var t=e[0],n=e[1],r=e.slice(4),i=Co(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(cn.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(cn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(cn.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var AE={found:!1,width:512,height:512};function TE(e,t){!Hd&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Pa(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=Jt()),new Promise(function(r,i){if(Et("missingIconAbstract"),n==="fa"){var s=th(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Vs[t]&&Vs[t][e]){var a=Vs[t][e];return r(Ca(a))}TE(e,t),r(M(M({},AE),{},{icon:$.showMissingIcons&&e?Et("missingIconAbstract")||{}:{}}))})}var Ul=function(){},Oa=$.measurePerformance&&ai&&ai.mark&&ai.measure?ai:{mark:Ul,measure:Ul},cr='FA "6.4.2"',kE=function(t){return Oa.mark("".concat(cr," ").concat(t," begins")),function(){return rh(t)}},rh=function(t){Oa.mark("".concat(cr," ").concat(t," ends")),Oa.measure("".concat(cr," ").concat(t),"".concat(cr," ").concat(t," begins"),"".concat(cr," ").concat(t," ends"))},Uo={begin:kE,end:rh},Si=function(){};function jl(e){var t=e.getAttribute?e.getAttribute(_n):null;return typeof t=="string"}function CE(e){var t=e.getAttribute?e.getAttribute(Oo):null,n=e.getAttribute?e.getAttribute(Ro):null;return t&&n}function PE(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function OE(){if($.autoReplaceSvg===!0)return Ai.replace;var e=Ai[$.autoReplaceSvg];return e||Ai.replace}function RE(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function xE(e){return ue.createElement(e)}function ih(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?RE:xE:n;if(typeof e=="string")return ue.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(ih(a,{ceFn:r}))}),i}function NE(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ai={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(ih(i),n)}),n.getAttribute(_n)===null&&$.keepOriginalSource){var r=ue.createComment(NE(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~No(n).indexOf($.replacementClass))return Ai.replace(t);var i=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,c){return c===$.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Gr(o)}).join(`
`);n.setAttribute(_n,""),n.innerHTML=a}};function Bl(e){e()}function sh(e,t){var n=typeof t=="function"?t:Si;if(e.length===0)n();else{var r=Bl;$.mutateApproach===FI&&(r=Yt.requestAnimationFrame||Bl),r(function(){var i=OE(),s=Uo.begin("mutate");e.map(i),s(),n()})}}var jo=!1;function ah(){jo=!0}function Ra(){jo=!1}var Wi=null;function Hl(e){if(Rl&&$.observeMutations){var t=e.treeCallback,n=t===void 0?Si:t,r=e.nodeCallback,i=r===void 0?Si:r,s=e.pseudoElementsCallback,a=s===void 0?Si:s,o=e.observeMutationsRoot,c=o===void 0?ue:o;Wi=new Rl(function(l){if(!jo){var u=Jt();er(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!jl(f.addedNodes[0])&&($.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&$.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&jl(f.target)&&~WI.indexOf(f.attributeName))if(f.attributeName==="class"&&CE(f.target)){var p=vs(No(f.target)),m=p.prefix,I=p.iconName;f.target.setAttribute(Oo,m||u),I&&f.target.setAttribute(Ro,I)}else PE(f.target)&&i(f.target)})}}),Tt&&Wi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ME(){Wi&&Wi.disconnect()}function DE(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function LE(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=vs(No(e));return i.prefix||(i.prefix=Jt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=hE(i.prefix,e.innerText)||Lo(i.prefix,Sa(e.innerText))),!i.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function FE(e){var t=er(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||Fr()):(t["aria-hidden"]="true",t.focusable="false")),t}function $E(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=LE(e),r=n.iconName,i=n.prefix,s=n.rest,a=FE(e),o=Ta("parseNodeAttributes",{},e),c=t.styleParser?DE(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var UE=Ke.styles;function oh(e){var t=$.autoReplaceSvg==="nest"?zl(e,{styleParser:!1}):zl(e);return~t.extra.classes.indexOf(zd)?Et("generateLayersText",e,t):Et("generateSvgReplacementMutation",e,t)}var Xt=new Set;xo.map(function(e){Xt.add("fa-".concat(e))});Object.keys(Nr[le]).map(Xt.add.bind(Xt));Object.keys(Nr[he]).map(Xt.add.bind(Xt));Xt=Kr(Xt);function Wl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tt)return Promise.resolve();var n=ue.documentElement.classList,r=function(f){return n.add("".concat(xl,"-").concat(f))},i=function(f){return n.remove("".concat(xl,"-").concat(f))},s=$.autoFetchSvg?Xt:xo.map(function(u){return"fa-".concat(u)}).concat(Object.keys(UE));s.includes("fa")||s.push("fa");var a=[".".concat(zd,":not([").concat(_n,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(_n,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=er(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Uo.begin("onTree"),l=o.reduce(function(u,f){try{var p=oh(f);p&&u.push(p)}catch(m){Hd||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(p){sh(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(p){c(),f(p)})})}function jE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oh(e).then(function(n){n&&sh([n],t)})}function BE(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ka(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ka(i||{})),e(r,M(M({},n),{},{mask:i}))}}var HE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?nt:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,u=l===void 0?null:l,f=n.title,p=f===void 0?null:f,m=n.titleId,I=m===void 0?null:m,A=n.classes,N=A===void 0?[]:A,v=n.attributes,b=v===void 0?{}:v,O=n.styles,T=O===void 0?{}:O;if(t){var U=t.prefix,Y=t.iconName,q=t.icon;return ys(M({type:"icon"},t),function(){return wn("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(p?b["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(I||Fr()):(b["aria-hidden"]="true",b.focusable="false")),$o({icons:{main:Ca(q),mask:c?Ca(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:Y,transform:M(M({},nt),i),symbol:a,title:p,maskId:u,titleId:I,extra:{attributes:b,styles:T,classes:N}})})}},zE={mixout:function(){return{icon:BE(HE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wl,n.nodeCallback=jE,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,s=n.callback,a=s===void 0?function(){}:s;return Wl(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,p=r.extra;return new Promise(function(m,I){Promise.all([Pa(i,o),u.iconName?Pa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var N=Co(A,2),v=N[0],b=N[1];m([n,$o({icons:{main:v,mask:b},prefix:o,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:a,extra:p,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,c=ms(o);c.length>0&&(i.style=c);var l;return Mo(a)&&(l=Et("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},WE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return ys({type:"layer"},function(){wn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(Kr(s)).join(" ")},children:a}]})}}}},VE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return ys({type:"counter",content:n},function(){return wn("beforeDOMElementCreation",{content:n,params:r}),SE({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat($.cssPrefix,"-layers-counter")].concat(Kr(o))}})})}}}},KE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?nt:i,a=r.title,o=a===void 0?null:a,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,p=r.styles,m=p===void 0?{}:p;return ys({type:"text",content:n},function(){return wn("beforeDOMElementCreation",{content:n,params:r}),$l({content:n,transform:M(M({},nt),s),title:o,extra:{attributes:f,styles:m,classes:["".concat($.cssPrefix,"-layers-text")].concat(Kr(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,c=null;if(Ud){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,c=u.height/l}return $.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,$l({content:n.innerHTML,width:o,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},qE=new RegExp('"',"ug"),Vl=[1105920,1112319];function GE(e){var t=e.replace(qE,""),n=oE(t,0),r=n>=Vl[0]&&n<=Vl[1],i=t.length===2?t[0]===t[1]:!1;return{value:Sa(i?t[0]:t),isSecondary:r||i}}function Kl(e,t){var n="".concat(LI).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=er(e.children),a=s.filter(function(q){return q.getAttribute(Ea)===t})[0],o=Yt.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(BI),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),p=~["Sharp"].indexOf(c[2])?he:le,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Mr[p][c[2].toLowerCase()]:HI[p][l],I=GE(f),A=I.value,N=I.isSecondary,v=c[0].startsWith("FontAwesome"),b=Lo(m,A),O=b;if(v){var T=pE(A);T.iconName&&T.prefix&&(b=T.iconName,m=T.prefix)}if(b&&!N&&(!a||a.getAttribute(Oo)!==m||a.getAttribute(Ro)!==O)){e.setAttribute(n,O),a&&e.removeChild(a);var U=$E(),Y=U.extra;Y.attributes[Ea]=t,Pa(b,m).then(function(q){var R=$o(M(M({},U),{},{icons:{main:q,mask:Fo()},prefix:m,iconName:O,extra:Y,watchable:!0})),L=ue.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=R.map(function(G){return Gr(G)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function YE(e){return Promise.all([Kl(e,"::before"),Kl(e,"::after")])}function JE(e){return e.parentNode!==document.head&&!~$I.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ea)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ql(e){if(Tt)return new Promise(function(t,n){var r=er(e.querySelectorAll("*")).filter(JE).map(YE),i=Uo.begin("searchPseudoElements");ah(),Promise.all(r).then(function(){i(),Ra(),t()}).catch(function(){i(),Ra(),n()})})}var XE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ql,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;$.searchPseudoElements&&ql(i)}}},Gl=!1,QE={mixout:function(){return{dom:{unwatch:function(){ah(),Gl=!0}}}},hooks:function(){return{bootstrap:function(){Hl(Ta("mutationObserverCallbacks",{}))},noAuto:function(){ME()},watch:function(n){var r=n.observeMutationsRoot;Gl?Ra():Hl(Ta("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Yl=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},ZE={mixout:function(){return{parse:{transform:function(n){return Yl(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Yl(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},p={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:M({},m.outer),children:[{tag:"g",attributes:M({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),m.path)}]}]}}}},Ks={x:0,y:0,width:"100%",height:"100%"};function Jl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function e1(e){return e.tag==="g"?e.children:[e]}var t1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?vs(i.split(" ").map(function(a){return a.trim()})):Fo();return s.prefix||(s.prefix=Jt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,u=s.icon,f=a.width,p=a.icon,m=ZI({transform:c,containerWidth:f,iconWidth:l}),I={tag:"rect",attributes:M(M({},Ks),{},{fill:"white"})},A=u.children?{children:u.children.map(Jl)}:{},N={tag:"g",attributes:M({},m.inner),children:[Jl(M({tag:u.tag,attributes:M(M({},u.attributes),m.path)},A))]},v={tag:"g",attributes:M({},m.outer),children:[N]},b="mask-".concat(o||Fr()),O="clip-".concat(o||Fr()),T={tag:"mask",attributes:M(M({},Ks),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,v]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:e1(p)},T]};return r.push(U,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(b,")")},Ks)}),{children:r,attributes:i}}}},n1={provides:function(t){var n=!1;Yt.matchMedia&&(n=Yt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=M(M({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},r1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},i1=[nE,zE,WE,VE,KE,XE,QE,ZE,t1,n1,r1];vE(i1,{mixoutsTo:$e});$e.noAuto;$e.config;var s1=$e.library;$e.dom;var xa=$e.parse;$e.findIconDefinition;$e.toHtml;var a1=$e.icon;$e.layer;$e.text;$e.counter;var o1={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},c1={prefix:"fas",iconName:"location-arrow",icon:[448,512,[],"f124","M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"]};function Xl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xl(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vi(e){"@babel/helpers - typeof";return Vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vi(e)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function u1(e,t){if(e==null)return{};var n=l1(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ch={exports:{}};(function(e){(function(t){var n=function(v,b,O){if(!l(b)||f(b)||p(b)||m(b)||c(b))return b;var T,U=0,Y=0;if(u(b))for(T=[],Y=b.length;U<Y;U++)T.push(n(v,b[U],O));else{T={};for(var q in b)Object.prototype.hasOwnProperty.call(b,q)&&(T[v(q,O)]=n(v,b[q],O))}return T},r=function(v,b){b=b||{};var O=b.separator||"_",T=b.split||/(?=[A-Z])/;return v.split(T).join(O)},i=function(v){return I(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(b,O){return O?O.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var b=i(v);return b.substr(0,1).toUpperCase()+b.substr(1)},a=function(v,b){return r(v,b).toLowerCase()},o=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return o.call(v)=="[object Array]"},f=function(v){return o.call(v)=="[object Date]"},p=function(v){return o.call(v)=="[object RegExp]"},m=function(v){return o.call(v)=="[object Boolean]"},I=function(v){return v=v-0,v===v},A=function(v,b){var O=b&&"process"in b?b.process:b;return typeof O!="function"?v:function(T,U){return O(T,v,U)}},N={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(v,b){return n(A(i,b),v)},decamelizeKeys:function(v,b){return n(A(a,b),v,b)},pascalizeKeys:function(v,b){return n(A(s,b),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(f1)})(ch);var d1=ch.exports,h1=["class","style"];function p1(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=d1.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function m1(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function lh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return lh(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=m1(u);break;case"style":c.style=p1(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=u1(n,h1);return so(e.tag,pt(pt(pt({},t),{},{class:i.class,style:pt(pt({},i.style),a)},i.attrs),o),r)}var uh=!1;try{uh=!0}catch{}function g1(){if(!uh&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ke({},e,t):{}}function v1(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ke(t,"fa-".concat(e.size),e.size!==null),ke(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ke(t,"fa-pull-".concat(e.pull),e.pull!==null),ke(t,"fa-swap-opacity",e.swapOpacity),ke(t,"fa-bounce",e.bounce),ke(t,"fa-shake",e.shake),ke(t,"fa-beat",e.beat),ke(t,"fa-fade",e.fade),ke(t,"fa-beat-fade",e.beatFade),ke(t,"fa-flash",e.flash),ke(t,"fa-spin-pulse",e.spinPulse),ke(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ql(e){if(e&&Vi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(xa.icon)return xa.icon(e);if(e===null)return null;if(Vi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var y1=St({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=de(function(){return Ql(t.icon)}),s=de(function(){return qs("classes",v1(t))}),a=de(function(){return qs("transform",typeof t.transform=="string"?xa.transform(t.transform):t.transform)}),o=de(function(){return qs("mask",Ql(t.mask))}),c=de(function(){return a1(i.value,pt(pt(pt(pt({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title}))});yt(c,function(u){if(!u)return g1("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var l=de(function(){return c.value?lh(c.value.abstract[0],{},r):null});return function(){return l.value}}});const b1={install:e=>{s1.add(o1,c1),e.component("font-awesome-icon",y1)}};const Yr=xm(Hg);Yr.use(uf);Yr.use(TI);Yr.use(W0);Yr.use(b1);Yr.mount("#app");export{Lt as G,Xn as _,I1 as a,zt as b,Je as c,St as d,Qa as e,Q as f,M0 as g,T1 as h,Oe as i,C1 as j,Ft as k,Ne as o,w1 as p,ct as r,k1 as s,_1 as t,A1 as u,S1 as v,E1 as w};
