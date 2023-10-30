(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ea(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const oe={},Cn=[],We=()=>{},Kd=()=>!1,qd=/^on[^a-z]/,Mi=e=>qd.test(e),Aa=e=>e.startsWith("onUpdate:"),ye=Object.assign,Ta=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Gd=Object.prototype.hasOwnProperty,G=(e,t)=>Gd.call(e,t),z=Array.isArray,Rn=e=>Di(e)==="[object Map]",Ll=e=>Di(e)==="[object Set]",V=e=>typeof e=="function",be=e=>typeof e=="string",Sa=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Fl=e=>(ue(e)||V(e))&&V(e.then)&&V(e.catch),Ul=Object.prototype.toString,Di=e=>Ul.call(e),Yd=e=>Di(e).slice(8,-1),$l=e=>Di(e)==="[object Object]",ka=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ii=Ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Li=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Jd=/-(\w)/g,rt=Li(e=>e.replace(Jd,(t,n)=>n?n.toUpperCase():"")),Xd=/\B([A-Z])/g,zn=Li(e=>e.replace(Xd,"-$1").toLowerCase()),Fi=Li(e=>e.charAt(0).toUpperCase()+e.slice(1)),as=Li(e=>e?`on${Fi(e)}`:""),an=(e,t)=>!Object.is(e,t),si=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},mi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ls=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Co;const Fs=()=>Co||(Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pa(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=be(r)?th(r):Pa(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(be(e)||ue(e))return e}const Qd=/;(?![^(]*\))/g,Zd=/:([^]+)/,eh=/\/\*[^]*?\*\//g;function th(e){const t={};return e.replace(eh,"").split(Qd).forEach(n=>{if(n){const r=n.split(Zd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ca(e){let t="";if(be(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Ca(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rh=Ea(nh);function jl(e){return!!e||e===""}const eE=e=>be(e)?e:e==null?"":z(e)||ue(e)&&(e.toString===Ul||!V(e.toString))?JSON.stringify(e,Bl,2):String(e),Bl=(e,t)=>t&&t.__v_isRef?Bl(e,t.value):Rn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Ll(t)?{[`Set(${t.size})`]:[...t.values()]}:ue(t)&&!z(t)&&!$l(t)?String(t):t;let Ne;class Hl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function zl(e){return new Hl(e)}function ih(e,t=Ne){t&&t.active&&t.effects.push(e)}function Wl(){return Ne}function sh(e){Ne&&Ne.cleanups.push(e)}const Ra=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Vl=e=>(e.w&$t)>0,Kl=e=>(e.n&$t)>0,ah=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=$t},oh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Vl(i)&&!Kl(i)?i.delete(e):t[n++]=i,i.w&=~$t,i.n&=~$t}t.length=n}},gi=new WeakMap;let Qn=0,$t=1;const Us=30;let Be;const nn=Symbol(""),$s=Symbol("");class Oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ih(this,r)}run(){if(!this.active)return this.fn();let t=Be,n=Nt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Be,Be=this,Nt=!0,$t=1<<++Qn,Qn<=Us?ah(this):Ro(this),this.fn()}finally{Qn<=Us&&oh(this),$t=1<<--Qn,Be=this.parent,Nt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(Ro(this),this.onStop&&this.onStop(),this.active=!1)}}function Ro(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Nt=!0;const ql=[];function Wn(){ql.push(Nt),Nt=!1}function Vn(){const e=ql.pop();Nt=e===void 0?!0:e}function Re(e,t,n){if(Nt&&Be){let r=gi.get(e);r||gi.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ra()),Gl(i)}}function Gl(e,t){let n=!1;Qn<=Us?Kl(e)||(e.n|=$t,n=!Vl(e)):n=!e.has(Be),n&&(e.add(Be),Be.deps.push(e))}function ht(e,t,n,r,i,s){const a=gi.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&z(e)){const c=Number(r);a.forEach((l,u)=>{(u==="length"||u>=c)&&o.push(l)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":z(e)?ka(n)&&o.push(a.get("length")):(o.push(a.get(nn)),Rn(e)&&o.push(a.get($s)));break;case"delete":z(e)||(o.push(a.get(nn)),Rn(e)&&o.push(a.get($s)));break;case"set":Rn(e)&&o.push(a.get(nn));break}if(o.length===1)o[0]&&js(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);js(Ra(c))}}function js(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&Oo(r);for(const r of n)r.computed||Oo(r)}function Oo(e,t){(e!==Be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function ch(e,t){var n;return(n=gi.get(e))==null?void 0:n.get(t)}const lh=Ea("__proto__,__v_isRef,__isVue"),Yl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sa)),xo=uh();function uh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let s=0,a=this.length;s<a;s++)Re(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Y)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wn();const r=Y(this)[t].apply(this,n);return Vn(),r}}),e}function fh(e){const t=Y(this);return Re(t,"has",e),t.hasOwnProperty(e)}class Jl{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&r===(i?s?Ah:eu:s?Zl:Ql).get(t))return t;const a=z(t);if(!i){if(a&&G(xo,n))return Reflect.get(xo,n,r);if(n==="hasOwnProperty")return fh}const o=Reflect.get(t,n,r);return(Sa(n)?Yl.has(n):lh(n))||(i||Re(t,"get",n),s)?o:de(o)?a&&ka(n)?o:o.value:ue(o)?i?nu(o):Rr(o):o}}class Xl extends Jl{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(Fn(s)&&de(s)&&!de(r))return!1;if(!this._shallow&&(!vi(r)&&!Fn(r)&&(s=Y(s),r=Y(r)),!z(t)&&de(s)&&!de(r)))return s.value=r,!0;const a=z(t)&&ka(n)?Number(n)<t.length:G(t,n),o=Reflect.set(t,n,r,i);return t===Y(i)&&(a?an(r,s)&&ht(t,"set",n,r):ht(t,"add",n,r)),o}deleteProperty(t,n){const r=G(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&ht(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Sa(n)||!Yl.has(n))&&Re(t,"has",n),r}ownKeys(t){return Re(t,"iterate",z(t)?"length":nn),Reflect.ownKeys(t)}}class dh extends Jl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const hh=new Xl,ph=new dh,mh=new Xl(!0),xa=e=>e,Ui=e=>Reflect.getPrototypeOf(e);function Hr(e,t,n=!1,r=!1){e=e.__v_raw;const i=Y(e),s=Y(t);n||(an(t,s)&&Re(i,"get",t),Re(i,"get",s));const{has:a}=Ui(i),o=r?xa:n?Da:dr;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function zr(e,t=!1){const n=this.__v_raw,r=Y(n),i=Y(e);return t||(an(e,i)&&Re(r,"has",e),Re(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Wr(e,t=!1){return e=e.__v_raw,!t&&Re(Y(e),"iterate",nn),Reflect.get(e,"size",e)}function No(e){e=Y(e);const t=Y(this);return Ui(t).has.call(t,e)||(t.add(e),ht(t,"add",e,e)),this}function Mo(e,t){t=Y(t);const n=Y(this),{has:r,get:i}=Ui(n);let s=r.call(n,e);s||(e=Y(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?an(t,a)&&ht(n,"set",e,t):ht(n,"add",e,t),this}function Do(e){const t=Y(this),{has:n,get:r}=Ui(t);let i=n.call(t,e);i||(e=Y(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&ht(t,"delete",e,void 0),s}function Lo(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&ht(e,"clear",void 0,void 0),n}function Vr(e,t){return function(r,i){const s=this,a=s.__v_raw,o=Y(a),c=t?xa:e?Da:dr;return!e&&Re(o,"iterate",nn),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Kr(e,t,n){return function(...r){const i=this.__v_raw,s=Y(i),a=Rn(s),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=i[e](...r),u=n?xa:t?Da:dr;return!t&&Re(s,"iterate",c?$s:nn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:o?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function It(e){return function(...t){return e==="delete"?!1:this}}function gh(){const e={get(s){return Hr(this,s)},get size(){return Wr(this)},has:zr,add:No,set:Mo,delete:Do,clear:Lo,forEach:Vr(!1,!1)},t={get(s){return Hr(this,s,!1,!0)},get size(){return Wr(this)},has:zr,add:No,set:Mo,delete:Do,clear:Lo,forEach:Vr(!1,!0)},n={get(s){return Hr(this,s,!0)},get size(){return Wr(this,!0)},has(s){return zr.call(this,s,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Vr(!0,!1)},r={get(s){return Hr(this,s,!0,!0)},get size(){return Wr(this,!0)},has(s){return zr.call(this,s,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Kr(s,!1,!1),n[s]=Kr(s,!0,!1),t[s]=Kr(s,!1,!0),r[s]=Kr(s,!0,!0)}),[e,n,t,r]}const[vh,bh,yh,_h]=gh();function Na(e,t){const n=t?e?_h:yh:e?bh:vh;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(G(n,i)&&i in r?n:r,i,s)}const wh={get:Na(!1,!1)},Ih={get:Na(!1,!0)},Eh={get:Na(!0,!1)},Ql=new WeakMap,Zl=new WeakMap,eu=new WeakMap,Ah=new WeakMap;function Th(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sh(e){return e.__v_skip||!Object.isExtensible(e)?0:Th(Yd(e))}function Rr(e){return Fn(e)?e:Ma(e,!1,hh,wh,Ql)}function tu(e){return Ma(e,!1,mh,Ih,Zl)}function nu(e){return Ma(e,!0,ph,Eh,eu)}function Ma(e,t,n,r,i){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=Sh(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function Mt(e){return Fn(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function Fn(e){return!!(e&&e.__v_isReadonly)}function vi(e){return!!(e&&e.__v_isShallow)}function ru(e){return Mt(e)||Fn(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function $i(e){return mi(e,"__v_skip",!0),e}const dr=e=>ue(e)?Rr(e):e,Da=e=>ue(e)?nu(e):e;function iu(e){Nt&&Be&&(e=Y(e),Gl(e.dep||(e.dep=Ra())))}function su(e,t){e=Y(e);const n=e.dep;n&&js(n)}function de(e){return!!(e&&e.__v_isRef===!0)}function La(e){return au(e,!1)}function kh(e){return au(e,!0)}function au(e,t){return de(e)?e:new Ph(e,t)}class Ph{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:dr(t)}get value(){return iu(this),this._value}set value(t){const n=this.__v_isShallow||vi(t)||Fn(t);t=n?t:Y(t),an(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:dr(t),su(this))}}function On(e){return de(e)?e.value:e}const Ch={get:(e,t,n)=>On(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return de(i)&&!de(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ou(e){return Mt(e)?e:new Proxy(e,Ch)}function Rh(e){const t=z(e)?new Array(e.length):{};for(const n in e)t[n]=xh(e,n);return t}class Oh{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ch(Y(this._object),this._key)}}function xh(e,t,n){const r=e[t];return de(r)?r:new Oh(e,t,n)}class Nh{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Oa(t,()=>{this._dirty||(this._dirty=!0,su(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Y(this);return iu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Mh(e,t,n=!1){let r,i;const s=V(e);return s?(r=e,i=We):(r=e.get,i=e.set),new Nh(r,i,s||!i,n)}function Dt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){ji(s,t,n)}return i}function Ve(e,t,n,r){if(V(e)){const s=Dt(e,t,n,r);return s&&Fl(s)&&s.catch(a=>{ji(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Ve(e[s],t,n,r));return i}function ji(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,o)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Dt(c,null,10,[e,a,o]);return}}Dh(e,n,i,r)}function Dh(e,t,n,r=!0){console.error(e)}let hr=!1,Bs=!1;const Ie=[];let Qe=0;const xn=[];let lt=null,Jt=0;const cu=Promise.resolve();let Fa=null;function Ua(e){const t=Fa||cu;return e?t.then(this?e.bind(this):e):t}function Lh(e){let t=Qe+1,n=Ie.length;for(;t<n;){const r=t+n>>>1;pr(Ie[r])<e?t=r+1:n=r}return t}function $a(e){(!Ie.length||!Ie.includes(e,hr&&e.allowRecurse?Qe+1:Qe))&&(e.id==null?Ie.push(e):Ie.splice(Lh(e.id),0,e),lu())}function lu(){!hr&&!Bs&&(Bs=!0,Fa=cu.then(fu))}function Fh(e){const t=Ie.indexOf(e);t>Qe&&Ie.splice(t,1)}function Uh(e){z(e)?xn.push(...e):(!lt||!lt.includes(e,e.allowRecurse?Jt+1:Jt))&&xn.push(e),lu()}function Fo(e,t=hr?Qe+1:0){for(;t<Ie.length;t++){const n=Ie[t];n&&n.pre&&(Ie.splice(t,1),t--,n())}}function uu(e){if(xn.length){const t=[...new Set(xn)];if(xn.length=0,lt){lt.push(...t);return}for(lt=t,lt.sort((n,r)=>pr(n)-pr(r)),Jt=0;Jt<lt.length;Jt++)lt[Jt]();lt=null,Jt=0}}const pr=e=>e.id==null?1/0:e.id,$h=(e,t)=>{const n=pr(e)-pr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function fu(e){Bs=!1,hr=!0,Ie.sort($h);const t=We;try{for(Qe=0;Qe<Ie.length;Qe++){const n=Ie[Qe];n&&n.active!==!1&&Dt(n,null,14)}}finally{Qe=0,Ie.length=0,uu(),hr=!1,Fa=null,(Ie.length||xn.length)&&fu()}}function jh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:p}=r[u]||oe;p&&(i=n.map(g=>be(g)?g.trim():g)),f&&(i=n.map(Ls))}let o,c=r[o=as(t)]||r[o=as(rt(t))];!c&&s&&(c=r[o=as(zn(t))]),c&&Ve(c,e,6,i);const l=r[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ve(l,e,6,i)}}function du(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!V(e)){const c=l=>{const u=du(l,t,!0);u&&(o=!0,ye(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(ue(e)&&r.set(e,null),null):(z(s)?s.forEach(c=>a[c]=null):ye(a,s),ue(e)&&r.set(e,a),a)}function Bi(e,t){return!e||!Mi(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,zn(t))||G(e,t))}let Pe=null,Hi=null;function bi(e){const t=Pe;return Pe=e,Hi=e&&e.type.__scopeId||null,t}function tE(e){Hi=e}function nE(){Hi=null}function qt(e,t=Pe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Go(-1);const s=bi(t);let a;try{a=e(...i)}finally{bi(s),r._d&&Go(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function os(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let M,b;const _=bi(e);try{if(n.shapeFlag&4){const C=i||r;M=Xe(u.call(C,C,f,s,g,p,A)),b=c}else{const C=t;M=Xe(C.length>1?C(s,{attrs:c,slots:o,emit:l}):C(s,null)),b=t.props?c:Bh(c)}}catch(C){ir.length=0,ji(C,e,1),M=pe(gr)}let x=M;if(b&&S!==!1){const C=Object.keys(b),{shapeFlag:j}=x;C.length&&j&7&&(a&&C.some(Aa)&&(b=Hh(b,a)),x=Un(x,b))}return n.dirs&&(x=Un(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),M=x,bi(_),M}const Bh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mi(n))&&((t||(t={}))[n]=e[n]);return t},Hh=(e,t)=>{const n={};for(const r in e)(!Aa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function zh(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Uo(r,a,l):!!a;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(a[p]!==r[p]&&!Bi(l,p))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?Uo(r,a,l):!0:!!a;return!1}function Uo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Bi(n,s))return!0}return!1}function Wh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Vh=e=>e.__isSuspense;function Kh(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Uh(e)}const qr={};function Nn(e,t,n){return hu(e,t,n)}function hu(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=oe){var o;const c=Wl()===((o=me)==null?void 0:o.scope)?me:null;let l,u=!1,f=!1;if(de(e)?(l=()=>e.value,u=vi(e)):Mt(e)?(l=()=>e,r=!0):z(e)?(f=!0,u=e.some(C=>Mt(C)||vi(C)),l=()=>e.map(C=>{if(de(C))return C.value;if(Mt(C))return Qt(C);if(V(C))return Dt(C,c,2)})):V(e)?t?l=()=>Dt(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Ve(e,c,3,[g])}:l=We,t&&r){const C=l;l=()=>Qt(C())}let p,g=C=>{p=_.onStop=()=>{Dt(C,c,4)}},A;if(br)if(g=We,t?n&&Ve(t,c,3,[l(),f?[]:void 0,g]):l(),i==="sync"){const C=Hp();A=C.__watcherHandles||(C.__watcherHandles=[])}else return We;let S=f?new Array(e.length).fill(qr):qr;const M=()=>{if(_.active)if(t){const C=_.run();(r||u||(f?C.some((j,J)=>an(j,S[J])):an(C,S)))&&(p&&p(),Ve(t,c,3,[C,S===qr?void 0:f&&S[0]===qr?[]:S,g]),S=C)}else _.run()};M.allowRecurse=!!t;let b;i==="sync"?b=M:i==="post"?b=()=>ke(M,c&&c.suspense):(M.pre=!0,c&&(M.id=c.uid),b=()=>$a(M));const _=new Oa(l,b);t?n?M():S=_.run():i==="post"?ke(_.run.bind(_),c&&c.suspense):_.run();const x=()=>{_.stop(),c&&c.scope&&Ta(c.scope.effects,_)};return A&&A.push(x),x}function qh(e,t,n){const r=this.proxy,i=be(e)?e.includes(".")?pu(r,e):()=>r[e]:e.bind(r,r);let s;V(t)?s=t:(s=t.handler,n=t);const a=me;$n(this);const o=hu(i,s.bind(r),n);return a?$n(a):rn(),o}function pu(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Qt(e,t){if(!ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))Qt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)Qt(e[n],t);else if(Ll(e)||Rn(e))e.forEach(n=>{Qt(n,t)});else if($l(e))for(const n in e)Qt(e[n],t);return e}function rE(e,t){const n=Pe;if(n===null)return e;const r=qi(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,o,c,l=oe]=t[s];a&&(V(a)&&(a={mounted:a,updated:a}),a.deep&&Qt(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:c,modifiers:l}))}return e}function Vt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(Wn(),Ve(c,n,8,[e.el,o,e,t]),Vn())}}/*! #__NO_SIDE_EFFECTS__ */function zi(e,t){return V(e)?(()=>ye({name:e.name},t,{setup:e}))():e}const ai=e=>!!e.type.__asyncLoader,mu=e=>e.type.__isKeepAlive;function Gh(e,t){gu(e,"a",t)}function Yh(e,t){gu(e,"da",t)}function gu(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Wi(t,r,n),n){let i=n.parent;for(;i&&i.parent;)mu(i.parent.vnode)&&Jh(r,t,n,i),i=i.parent}}function Jh(e,t,n,r){const i=Wi(t,e,r,!0);vu(()=>{Ta(r[t],i)},n)}function Wi(e,t,n=me,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Wn(),$n(n);const o=Ve(t,n,e,a);return rn(),Vn(),o});return r?i.unshift(s):i.push(s),s}}const yt=e=>(t,n=me)=>(!br||e==="sp")&&Wi(e,(...r)=>t(...r),n),Xh=yt("bm"),Qh=yt("m"),Zh=yt("bu"),ep=yt("u"),tp=yt("bum"),vu=yt("um"),np=yt("sp"),rp=yt("rtg"),ip=yt("rtc");function sp(e,t=me){Wi("ec",e,t)}const bu="components";function Hs(e,t){return op(bu,e,!0,t)||e}const ap=Symbol.for("v-ndc");function op(e,t,n=!0,r=!1){const i=Pe||me;if(i){const s=i.type;if(e===bu){const o=$p(s,!1);if(o&&(o===t||o===rt(t)||o===Fi(rt(t))))return s}const a=$o(i[e]||s[e],t)||$o(i.appContext[e],t);return!a&&r?s:a}}function $o(e,t){return e&&(e[t]||e[rt(t)]||e[Fi(rt(t))])}const zs=e=>e?Ru(e)?qi(e)||e.proxy:zs(e.parent):null,rr=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zs(e.parent),$root:e=>zs(e.root),$emit:e=>e.emit,$options:e=>ja(e),$forceUpdate:e=>e.f||(e.f=()=>$a(e.update)),$nextTick:e=>e.n||(e.n=Ua.bind(e.proxy)),$watch:e=>qh.bind(e)}),cs=(e,t)=>e!==oe&&!e.__isScriptSetup&&G(e,t),cp={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=e;let l;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(cs(r,t))return a[t]=1,r[t];if(i!==oe&&G(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&G(l,t))return a[t]=3,s[t];if(n!==oe&&G(n,t))return a[t]=4,n[t];Ws&&(a[t]=0)}}const u=rr[t];let f,p;if(u)return t==="$attrs"&&Re(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==oe&&G(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,G(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return cs(i,t)?(i[t]=n,!0):r!==oe&&G(r,t)?(r[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==oe&&G(e,a)||cs(t,a)||(o=s[0])&&G(o,a)||G(r,a)||G(rr,a)||G(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function jo(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ws=!0;function lp(e){const t=ja(e),n=e.proxy,r=e.ctx;Ws=!1,t.beforeCreate&&Bo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:M,beforeDestroy:b,beforeUnmount:_,destroyed:x,unmounted:C,render:j,renderTracked:J,renderTriggered:X,errorCaptured:K,serverPrefetch:B,expose:ae,inheritAttrs:_e,components:Oe,directives:Fe,filters:Wt}=t;if(l&&up(l,r,null),a)for(const re in a){const Z=a[re];V(Z)&&(r[re]=Z.bind(n))}if(i){const re=i.call(n,n);ue(re)&&(e.data=Rr(re))}if(Ws=!0,s)for(const re in s){const Z=s[re],ot=V(Z)?Z.bind(n,n):V(Z.get)?Z.get.bind(n,n):We,wt=!V(Z)&&V(Z.set)?Z.set.bind(n):We,qe=ve({get:ot,set:wt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Te=>qe.value=Te})}if(o)for(const re in o)yu(o[re],r,n,re);if(c){const re=V(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Z=>{oi(Z,re[Z])})}u&&Bo(u,e,"c");function Q(re,Z){z(Z)?Z.forEach(ot=>re(ot.bind(n))):Z&&re(Z.bind(n))}if(Q(Xh,f),Q(Qh,p),Q(Zh,g),Q(ep,A),Q(Gh,S),Q(Yh,M),Q(sp,K),Q(ip,J),Q(rp,X),Q(tp,_),Q(vu,C),Q(np,B),z(ae))if(ae.length){const re=e.exposed||(e.exposed={});ae.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>n[Z],set:ot=>n[Z]=ot})})}else e.exposed||(e.exposed={});j&&e.render===We&&(e.render=j),_e!=null&&(e.inheritAttrs=_e),Oe&&(e.components=Oe),Fe&&(e.directives=Fe)}function up(e,t,n=We){z(e)&&(e=Vs(e));for(const r in e){const i=e[r];let s;ue(i)?"default"in i?s=Me(i.from||r,i.default,!0):s=Me(i.from||r):s=Me(i),de(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Bo(e,t,n){Ve(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function yu(e,t,n,r){const i=r.includes(".")?pu(n,r):()=>n[r];if(be(e)){const s=t[e];V(s)&&Nn(i,s)}else if(V(e))Nn(i,e.bind(n));else if(ue(e))if(z(e))e.forEach(s=>yu(s,t,n,r));else{const s=V(e.handler)?e.handler.bind(n):t[e.handler];V(s)&&Nn(i,s,e)}}function ja(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>yi(c,l,a,!0)),yi(c,t,a)),ue(t)&&s.set(t,c),c}function yi(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&yi(e,s,n,!0),i&&i.forEach(a=>yi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=fp[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const fp={data:Ho,props:zo,emits:zo,methods:Zn,computed:Zn,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Zn,directives:Zn,watch:hp,provide:Ho,inject:dp};function Ho(e,t){return t?e?function(){return ye(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function dp(e,t){return Zn(Vs(e),Vs(t))}function Vs(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Zn(e,t){return e?ye(Object.create(null),e,t):t}function zo(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:ye(Object.create(null),jo(e),jo(t??{})):t}function hp(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=Ae(e[r],t[r]);return n}function _u(){return{app:null,config:{isNativeTag:Kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pp=0;function mp(e,t){return function(r,i=null){V(r)||(r=ye({},r)),i!=null&&!ue(i)&&(i=null);const s=_u(),a=new WeakSet;let o=!1;const c=s.app={_uid:pp++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:zp,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&V(l.install)?(a.add(l),l.install(c,...u)):V(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!o){const p=pe(r,i);return p.appContext=s,u&&t?t(p,l):e(p,l,f),o=!0,c._container=l,l.__vue_app__=c,qi(p.component)||p.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){mr=c;try{return l()}finally{mr=null}}};return c}}let mr=null;function oi(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Me(e,t,n=!1){const r=me||Pe;if(r||mr){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:mr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}function gp(){return!!(me||Pe||mr)}function vp(e,t,n,r=!1){const i={},s={};mi(s,Ki,1),e.propsDefaults=Object.create(null),wu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:tu(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function bp(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=Y(i),[c]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Bi(e.emitsOptions,p))continue;const g=t[p];if(c)if(G(s,p))g!==s[p]&&(s[p]=g,l=!0);else{const A=rt(p);i[A]=Ks(c,o,A,g,e,!1)}else g!==s[p]&&(s[p]=g,l=!0)}}}else{wu(e,t,i,s)&&(l=!0);let u;for(const f in o)(!t||!G(t,f)&&((u=zn(f))===f||!G(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ks(c,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!G(t,f))&&(delete s[f],l=!0)}l&&ht(e,"set","$attrs")}function wu(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let c in t){if(ii(c))continue;const l=t[c];let u;i&&G(i,u=rt(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:Bi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=Y(n),l=o||oe;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ks(i,c,f,l[f],e,!G(l,f))}}return a}function Ks(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=G(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&V(c)){const{propsDefaults:l}=i;n in l?r=l[n]:($n(i),r=l[n]=c.call(null,t),rn())}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===zn(n))&&(r=!0))}return r}function Iu(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let c=!1;if(!V(e)){const u=f=>{c=!0;const[p,g]=Iu(f,t,!0);ye(a,p),g&&o.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return ue(e)&&r.set(e,Cn),Cn;if(z(s))for(let u=0;u<s.length;u++){const f=rt(s[u]);Wo(f)&&(a[f]=oe)}else if(s)for(const u in s){const f=rt(u);if(Wo(f)){const p=s[u],g=a[f]=z(p)||V(p)?{type:p}:ye({},p);if(g){const A=qo(Boolean,g.type),S=qo(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||G(g,"default"))&&o.push(f)}}}const l=[a,o];return ue(e)&&r.set(e,l),l}function Wo(e){return e[0]!=="$"}function Vo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ko(e,t){return Vo(e)===Vo(t)}function qo(e,t){return z(t)?t.findIndex(n=>Ko(n,e)):V(t)&&Ko(t,e)?0:-1}const Eu=e=>e[0]==="_"||e==="$stable",Ba=e=>z(e)?e.map(Xe):[Xe(e)],yp=(e,t,n)=>{if(t._n)return t;const r=qt((...i)=>Ba(t(...i)),n);return r._c=!1,r},Au=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Eu(i))continue;const s=e[i];if(V(s))t[i]=yp(i,s,r);else if(s!=null){const a=Ba(s);t[i]=()=>a}}},Tu=(e,t)=>{const n=Ba(t);e.slots.default=()=>n},_p=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),mi(t,"_",n)):Au(t,e.slots={})}else e.slots={},t&&Tu(e,t);mi(e.slots,Ki,1)},wp=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=oe;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(ye(i,t),!n&&o===1&&delete i._):(s=!t.$stable,Au(t,i)),a=t}else t&&(Tu(e,t),a={default:1});if(s)for(const o in i)!Eu(o)&&a[o]==null&&delete i[o]};function qs(e,t,n,r,i=!1){if(z(e)){e.forEach((p,g)=>qs(p,t&&(z(t)?t[g]:t),n,r,i));return}if(ai(r)&&!i)return;const s=r.shapeFlag&4?qi(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=e,l=t&&t.r,u=o.refs===oe?o.refs={}:o.refs,f=o.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,G(f,l)&&(f[l]=null)):de(l)&&(l.value=null)),V(c))Dt(c,o,12,[a,u]);else{const p=be(c),g=de(c);if(p||g){const A=()=>{if(e.f){const S=p?G(f,c)?f[c]:u[c]:c.value;i?z(S)&&Ta(S,s):z(S)?S.includes(s)||S.push(s):p?(u[c]=[s],G(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else p?(u[c]=a,G(f,c)&&(f[c]=a)):g&&(c.value=a,e.k&&(u[e.k]=a))};a?(A.id=-1,ke(A,n)):A()}}}const ke=Kh;function Ip(e){return Ep(e)}function Ep(e,t){const n=Fs();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=We,insertStaticContent:A}=e,S=(d,h,m,v=null,w=null,I=null,R=!1,T=null,k=!!h.dynamicChildren)=>{if(d===h)return;d&&!Jn(d,h)&&(v=y(d),Te(d,w,I,!0),d=null),h.patchFlag===-2&&(k=!1,h.dynamicChildren=null);const{type:E,ref:U,shapeFlag:D}=h;switch(E){case Vi:M(d,h,m,v);break;case gr:b(d,h,m,v);break;case ls:d==null&&_(h,m,v,R);break;case Je:Oe(d,h,m,v,w,I,R,T,k);break;default:D&1?j(d,h,m,v,w,I,R,T,k):D&6?Fe(d,h,m,v,w,I,R,T,k):(D&64||D&128)&&E.process(d,h,m,v,w,I,R,T,k,P)}U!=null&&w&&qs(U,d&&d.ref,I,h||d,!h)},M=(d,h,m,v)=>{if(d==null)r(h.el=o(h.children),m,v);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},b=(d,h,m,v)=>{d==null?r(h.el=c(h.children||""),m,v):h.el=d.el},_=(d,h,m,v)=>{[d.el,d.anchor]=A(d.children,h,m,v,d.el,d.anchor)},x=({el:d,anchor:h},m,v)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,v),d=w;r(h,m,v)},C=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),i(d),d=m;i(h)},j=(d,h,m,v,w,I,R,T,k)=>{R=R||h.type==="svg",d==null?J(h,m,v,w,I,R,T,k):B(d,h,w,I,R,T,k)},J=(d,h,m,v,w,I,R,T)=>{let k,E;const{type:U,props:D,shapeFlag:$,transition:W,dirs:q}=d;if(k=d.el=a(d.type,I,D&&D.is,D),$&8?u(k,d.children):$&16&&K(d.children,k,null,v,w,I&&U!=="foreignObject",R,T),q&&Vt(d,null,v,"created"),X(k,d,d.scopeId,R,v),D){for(const ne in D)ne!=="value"&&!ii(ne)&&s(k,ne,null,D[ne],I,d.children,v,w,we);"value"in D&&s(k,"value",null,D.value),(E=D.onVnodeBeforeMount)&&Ye(E,v,d)}q&&Vt(d,null,v,"beforeMount");const se=(!w||w&&!w.pendingBranch)&&W&&!W.persisted;se&&W.beforeEnter(k),r(k,h,m),((E=D&&D.onVnodeMounted)||se||q)&&ke(()=>{E&&Ye(E,v,d),se&&W.enter(k),q&&Vt(d,null,v,"mounted")},w)},X=(d,h,m,v,w)=>{if(m&&g(d,m),v)for(let I=0;I<v.length;I++)g(d,v[I]);if(w){let I=w.subTree;if(h===I){const R=w.vnode;X(d,R,R.scopeId,R.slotScopeIds,w.parent)}}},K=(d,h,m,v,w,I,R,T,k=0)=>{for(let E=k;E<d.length;E++){const U=d[E]=T?kt(d[E]):Xe(d[E]);S(null,U,h,m,v,w,I,R,T)}},B=(d,h,m,v,w,I,R)=>{const T=h.el=d.el;let{patchFlag:k,dynamicChildren:E,dirs:U}=h;k|=d.patchFlag&16;const D=d.props||oe,$=h.props||oe;let W;m&&Kt(m,!1),(W=$.onVnodeBeforeUpdate)&&Ye(W,m,h,d),U&&Vt(h,d,m,"beforeUpdate"),m&&Kt(m,!0);const q=w&&h.type!=="foreignObject";if(E?ae(d.dynamicChildren,E,T,m,v,q,I):R||Z(d,h,T,null,m,v,q,I,!1),k>0){if(k&16)_e(T,h,D,$,m,v,w);else if(k&2&&D.class!==$.class&&s(T,"class",null,$.class,w),k&4&&s(T,"style",D.style,$.style,w),k&8){const se=h.dynamicProps;for(let ne=0;ne<se.length;ne++){const he=se[ne],je=D[he],yn=$[he];(yn!==je||he==="value")&&s(T,he,je,yn,w,d.children,m,v,we)}}k&1&&d.children!==h.children&&u(T,h.children)}else!R&&E==null&&_e(T,h,D,$,m,v,w);((W=$.onVnodeUpdated)||U)&&ke(()=>{W&&Ye(W,m,h,d),U&&Vt(h,d,m,"updated")},v)},ae=(d,h,m,v,w,I,R)=>{for(let T=0;T<h.length;T++){const k=d[T],E=h[T],U=k.el&&(k.type===Je||!Jn(k,E)||k.shapeFlag&70)?f(k.el):m;S(k,E,U,null,v,w,I,R,!0)}},_e=(d,h,m,v,w,I,R)=>{if(m!==v){if(m!==oe)for(const T in m)!ii(T)&&!(T in v)&&s(d,T,m[T],null,R,h.children,w,I,we);for(const T in v){if(ii(T))continue;const k=v[T],E=m[T];k!==E&&T!=="value"&&s(d,T,E,k,R,h.children,w,I,we)}"value"in v&&s(d,"value",m.value,v.value)}},Oe=(d,h,m,v,w,I,R,T,k)=>{const E=h.el=d?d.el:o(""),U=h.anchor=d?d.anchor:o("");let{patchFlag:D,dynamicChildren:$,slotScopeIds:W}=h;W&&(T=T?T.concat(W):W),d==null?(r(E,m,v),r(U,m,v),K(h.children,m,U,w,I,R,T,k)):D>0&&D&64&&$&&d.dynamicChildren?(ae(d.dynamicChildren,$,m,w,I,R,T),(h.key!=null||w&&h===w.subTree)&&Su(d,h,!0)):Z(d,h,m,U,w,I,R,T,k)},Fe=(d,h,m,v,w,I,R,T,k)=>{h.slotScopeIds=T,d==null?h.shapeFlag&512?w.ctx.activate(h,m,v,R,k):Wt(h,m,v,w,I,R,k):Ue(d,h,k)},Wt=(d,h,m,v,w,I,R)=>{const T=d.component=Np(d,v,w);if(mu(d)&&(T.ctx.renderer=P),Dp(T),T.asyncDep){if(w&&w.registerDep(T,Q),!d.el){const k=T.subTree=pe(gr);b(null,k,h,m)}return}Q(T,d,h,m,w,I,R)},Ue=(d,h,m)=>{const v=h.component=d.component;if(zh(d,h,m))if(v.asyncDep&&!v.asyncResolved){re(v,h,m);return}else v.next=h,Fh(v.update),v.update();else h.el=d.el,v.vnode=h},Q=(d,h,m,v,w,I,R)=>{const T=()=>{if(d.isMounted){let{next:U,bu:D,u:$,parent:W,vnode:q}=d,se=U,ne;Kt(d,!1),U?(U.el=q.el,re(d,U,R)):U=q,D&&si(D),(ne=U.props&&U.props.onVnodeBeforeUpdate)&&Ye(ne,W,U,q),Kt(d,!0);const he=os(d),je=d.subTree;d.subTree=he,S(je,he,f(je.el),y(je),d,w,I),U.el=he.el,se===null&&Wh(d,he.el),$&&ke($,w),(ne=U.props&&U.props.onVnodeUpdated)&&ke(()=>Ye(ne,W,U,q),w)}else{let U;const{el:D,props:$}=h,{bm:W,m:q,parent:se}=d,ne=ai(h);if(Kt(d,!1),W&&si(W),!ne&&(U=$&&$.onVnodeBeforeMount)&&Ye(U,se,h),Kt(d,!0),D&&ee){const he=()=>{d.subTree=os(d),ee(D,d.subTree,d,w,null)};ne?h.type.__asyncLoader().then(()=>!d.isUnmounted&&he()):he()}else{const he=d.subTree=os(d);S(null,he,m,v,d,w,I),h.el=he.el}if(q&&ke(q,w),!ne&&(U=$&&$.onVnodeMounted)){const he=h;ke(()=>Ye(U,se,he),w)}(h.shapeFlag&256||se&&ai(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&ke(d.a,w),d.isMounted=!0,h=m=v=null}},k=d.effect=new Oa(T,()=>$a(E),d.scope),E=d.update=()=>k.run();E.id=d.uid,Kt(d,!0),E()},re=(d,h,m)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,bp(d,h.props,v,m),wp(d,h.children,m),Wn(),Fo(),Vn()},Z=(d,h,m,v,w,I,R,T,k=!1)=>{const E=d&&d.children,U=d?d.shapeFlag:0,D=h.children,{patchFlag:$,shapeFlag:W}=h;if($>0){if($&128){wt(E,D,m,v,w,I,R,T,k);return}else if($&256){ot(E,D,m,v,w,I,R,T,k);return}}W&8?(U&16&&we(E,w,I),D!==E&&u(m,D)):U&16?W&16?wt(E,D,m,v,w,I,R,T,k):we(E,w,I,!0):(U&8&&u(m,""),W&16&&K(D,m,v,w,I,R,T,k))},ot=(d,h,m,v,w,I,R,T,k)=>{d=d||Cn,h=h||Cn;const E=d.length,U=h.length,D=Math.min(E,U);let $;for($=0;$<D;$++){const W=h[$]=k?kt(h[$]):Xe(h[$]);S(d[$],W,m,null,w,I,R,T,k)}E>U?we(d,w,I,!0,!1,D):K(h,m,v,w,I,R,T,k,D)},wt=(d,h,m,v,w,I,R,T,k)=>{let E=0;const U=h.length;let D=d.length-1,$=U-1;for(;E<=D&&E<=$;){const W=d[E],q=h[E]=k?kt(h[E]):Xe(h[E]);if(Jn(W,q))S(W,q,m,null,w,I,R,T,k);else break;E++}for(;E<=D&&E<=$;){const W=d[D],q=h[$]=k?kt(h[$]):Xe(h[$]);if(Jn(W,q))S(W,q,m,null,w,I,R,T,k);else break;D--,$--}if(E>D){if(E<=$){const W=$+1,q=W<U?h[W].el:v;for(;E<=$;)S(null,h[E]=k?kt(h[E]):Xe(h[E]),m,q,w,I,R,T,k),E++}}else if(E>$)for(;E<=D;)Te(d[E],w,I,!0),E++;else{const W=E,q=E,se=new Map;for(E=q;E<=$;E++){const xe=h[E]=k?kt(h[E]):Xe(h[E]);xe.key!=null&&se.set(xe.key,E)}let ne,he=0;const je=$-q+1;let yn=!1,So=0;const Yn=new Array(je);for(E=0;E<je;E++)Yn[E]=0;for(E=W;E<=D;E++){const xe=d[E];if(he>=je){Te(xe,w,I,!0);continue}let Ge;if(xe.key!=null)Ge=se.get(xe.key);else for(ne=q;ne<=$;ne++)if(Yn[ne-q]===0&&Jn(xe,h[ne])){Ge=ne;break}Ge===void 0?Te(xe,w,I,!0):(Yn[Ge-q]=E+1,Ge>=So?So=Ge:yn=!0,S(xe,h[Ge],m,null,w,I,R,T,k),he++)}const ko=yn?Ap(Yn):Cn;for(ne=ko.length-1,E=je-1;E>=0;E--){const xe=q+E,Ge=h[xe],Po=xe+1<U?h[xe+1].el:v;Yn[E]===0?S(null,Ge,m,Po,w,I,R,T,k):yn&&(ne<0||E!==ko[ne]?qe(Ge,m,Po,2):ne--)}}},qe=(d,h,m,v,w=null)=>{const{el:I,type:R,transition:T,children:k,shapeFlag:E}=d;if(E&6){qe(d.component.subTree,h,m,v);return}if(E&128){d.suspense.move(h,m,v);return}if(E&64){R.move(d,h,m,P);return}if(R===Je){r(I,h,m);for(let D=0;D<k.length;D++)qe(k[D],h,m,v);r(d.anchor,h,m);return}if(R===ls){x(d,h,m);return}if(v!==2&&E&1&&T)if(v===0)T.beforeEnter(I),r(I,h,m),ke(()=>T.enter(I),w);else{const{leave:D,delayLeave:$,afterLeave:W}=T,q=()=>r(I,h,m),se=()=>{D(I,()=>{q(),W&&W()})};$?$(I,q,se):se()}else r(I,h,m)},Te=(d,h,m,v=!1,w=!1)=>{const{type:I,props:R,ref:T,children:k,dynamicChildren:E,shapeFlag:U,patchFlag:D,dirs:$}=d;if(T!=null&&qs(T,null,m,d,!0),U&256){h.ctx.deactivate(d);return}const W=U&1&&$,q=!ai(d);let se;if(q&&(se=R&&R.onVnodeBeforeUnmount)&&Ye(se,h,d),U&6)Br(d.component,m,v);else{if(U&128){d.suspense.unmount(m,v);return}W&&Vt(d,null,h,"beforeUnmount"),U&64?d.type.remove(d,h,m,w,P,v):E&&(I!==Je||D>0&&D&64)?we(E,h,m,!1,!0):(I===Je&&D&384||!w&&U&16)&&we(k,h,m),v&&vn(d)}(q&&(se=R&&R.onVnodeUnmounted)||W)&&ke(()=>{se&&Ye(se,h,d),W&&Vt(d,null,h,"unmounted")},m)},vn=d=>{const{type:h,el:m,anchor:v,transition:w}=d;if(h===Je){bn(m,v);return}if(h===ls){C(d);return}const I=()=>{i(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:T}=w,k=()=>R(m,I);T?T(d.el,I,k):k()}else I()},bn=(d,h)=>{let m;for(;d!==h;)m=p(d),i(d),d=m;i(h)},Br=(d,h,m)=>{const{bum:v,scope:w,update:I,subTree:R,um:T}=d;v&&si(v),w.stop(),I&&(I.active=!1,Te(R,d,h,m)),T&&ke(T,h),ke(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},we=(d,h,m,v=!1,w=!1,I=0)=>{for(let R=I;R<d.length;R++)Te(d[R],h,m,v,w)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),N=(d,h,m)=>{d==null?h._vnode&&Te(h._vnode,null,null,!0):S(h._vnode||null,d,h,null,null,null,m),Fo(),uu(),h._vnode=d},P={p:S,um:Te,m:qe,r:vn,mt:Wt,mc:K,pc:Z,pbc:ae,n:y,o:e};let F,ee;return t&&([F,ee]=t(P)),{render:N,hydrate:F,createApp:mp(N,F)}}function Kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Su(e,t,n=!1){const r=e.children,i=t.children;if(z(r)&&z(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=kt(i[s]),o.el=a.el),n||Su(a,o)),o.type===Vi&&(o.el=a.el)}}function Ap(e){const t=e.slice(),n=[0];let r,i,s,a,o;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const Tp=e=>e.__isTeleport,Je=Symbol.for("v-fgt"),Vi=Symbol.for("v-txt"),gr=Symbol.for("v-cmt"),ls=Symbol.for("v-stc"),ir=[];let He=null;function ku(e=!1){ir.push(He=e?null:[])}function Sp(){ir.pop(),He=ir[ir.length-1]||null}let vr=1;function Go(e){vr+=e}function kp(e){return e.dynamicChildren=vr>0?He||Cn:null,Sp(),vr>0&&He&&He.push(e),e}function Pu(e,t,n,r,i,s){return kp(Tn(e,t,n,r,i,s,!0))}function Gs(e){return e?e.__v_isVNode===!0:!1}function Jn(e,t){return e.type===t.type&&e.key===t.key}const Ki="__vInternal",Cu=({key:e})=>e??null,ci=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||de(e)||V(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function Tn(e,t=null,n=null,r=0,i=null,s=e===Je?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Cu(t),ref:t&&ci(t),scopeId:Hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pe};return o?(Ha(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),vr>0&&!a&&He&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&He.push(c),c}const pe=Pp;function Pp(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===ap)&&(e=gr),Gs(e)){const o=Un(e,t,!0);return n&&Ha(o,n),vr>0&&!s&&He&&(o.shapeFlag&6?He[He.indexOf(e)]=o:He.push(o)),o.patchFlag|=-2,o}if(jp(e)&&(e=e.__vccOpts),t){t=Cp(t);let{class:o,style:c}=t;o&&!be(o)&&(t.class=Ca(o)),ue(c)&&(ru(c)&&!z(c)&&(c=ye({},c)),t.style=Pa(c))}const a=be(e)?1:Vh(e)?128:Tp(e)?64:ue(e)?4:V(e)?2:0;return Tn(e,t,n,r,i,a,s,!0)}function Cp(e){return e?ru(e)||Ki in e?ye({},e):e:null}function Un(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?Rp(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Cu(o),ref:t&&t.ref?n&&i?z(i)?i.concat(ci(t)):[i,ci(t)]:ci(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Je?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Un(e.ssContent),ssFallback:e.ssFallback&&Un(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Gt(e=" ",t=0){return pe(Vi,null,e,t)}function Xe(e){return e==null||typeof e=="boolean"?pe(gr):z(e)?pe(Je,null,e.slice()):typeof e=="object"?kt(e):pe(Vi,null,String(e))}function kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Un(e)}function Ha(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Ha(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ki in t)?t._ctx=Pe:i===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[Gt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ca([t.class,r.class]));else if(i==="style")t.style=Pa([t.style,r.style]);else if(Mi(i)){const s=t[i],a=r[i];a&&s!==a&&!(z(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function Ye(e,t,n,r=null){Ve(e,t,7,[n,r])}const Op=_u();let xp=0;function Np(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Op,s={uid:xp++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Iu(r,i),emitsOptions:du(r,i),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=jh.bind(null,s),e.ce&&e.ce(s),s}let me=null;const Mp=()=>me||Pe;let za,_n,Yo="__VUE_INSTANCE_SETTERS__";(_n=Fs()[Yo])||(_n=Fs()[Yo]=[]),_n.push(e=>me=e),za=e=>{_n.length>1?_n.forEach(t=>t(e)):_n[0](e)};const $n=e=>{za(e),e.scope.on()},rn=()=>{me&&me.scope.off(),za(null)};function Ru(e){return e.vnode.shapeFlag&4}let br=!1;function Dp(e,t=!1){br=t;const{props:n,children:r}=e.vnode,i=Ru(e);vp(e,n,i,t),_p(e,r);const s=i?Lp(e,t):void 0;return br=!1,s}function Lp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$i(new Proxy(e.ctx,cp));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Up(e):null;$n(e),Wn();const s=Dt(r,e,0,[e.props,i]);if(Vn(),rn(),Fl(s)){if(s.then(rn,rn),t)return s.then(a=>{Jo(e,a,t)}).catch(a=>{ji(a,e,0)});e.asyncDep=s}else Jo(e,s,t)}else Ou(e,t)}function Jo(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=ou(t)),Ou(e,n)}let Xo;function Ou(e,t,n){const r=e.type;if(!e.render){if(!t&&Xo&&!r.render){const i=r.template||ja(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,l=ye(ye({isCustomElement:s,delimiters:o},a),c);r.render=Xo(i,l)}}e.render=r.render||We}{$n(e),Wn();try{lp(e)}finally{Vn(),rn()}}}function Fp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Re(e,"get","$attrs"),t[n]}}))}function Up(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Fp(e)},slots:e.slots,emit:e.emit,expose:t}}function qi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ou($i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in rr)return rr[n](e)},has(t,n){return n in t||n in rr}}))}function $p(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function jp(e){return V(e)&&"__vccOpts"in e}const ve=(e,t)=>Mh(e,t,br);function Wa(e,t,n){const r=arguments.length;return r===2?ue(t)&&!z(t)?Gs(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gs(n)&&(n=[n]),pe(e,t,n))}const Bp=Symbol.for("v-scx"),Hp=()=>Me(Bp),zp="3.3.6",Wp="http://www.w3.org/2000/svg",Xt=typeof document<"u"?document:null,Qo=Xt&&Xt.createElement("template"),Vp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Xt.createElementNS(Wp,e):Xt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Xt.createTextNode(e),createComment:e=>Xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Qo.innerHTML=r?`<svg>${e}</svg>`:e;const o=Qo.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Kp=Symbol("_vtc");function qp(e,t,n){const r=e[Kp];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Gp=Symbol("_vod");function Yp(e,t,n){const r=e.style,i=be(n);if(n&&!i){if(t&&!be(t))for(const s in t)n[s]==null&&Ys(r,s,"");for(const s in n)Ys(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Gp in e&&(r.display=s)}}const Zo=/\s*!important$/;function Ys(e,t,n){if(z(n))n.forEach(r=>Ys(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Jp(e,t);Zo.test(n)?e.setProperty(zn(r),n.replace(Zo,""),"important"):e[r]=n}}const ec=["Webkit","Moz","ms"],us={};function Jp(e,t){const n=us[t];if(n)return n;let r=rt(t);if(r!=="filter"&&r in e)return us[t]=r;r=Fi(r);for(let i=0;i<ec.length;i++){const s=ec[i]+r;if(s in e)return us[t]=s}return t}const tc="http://www.w3.org/1999/xlink";function Xp(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(tc,t.slice(6,t.length)):e.setAttributeNS(tc,t,n);else{const s=rh(t);n==null||s&&!jl(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Qp(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const l=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=jl(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function En(e,t,n,r){e.addEventListener(t,n,r)}function Zp(e,t,n,r){e.removeEventListener(t,n,r)}const nc=Symbol("_vei");function em(e,t,n,r,i=null){const s=e[nc]||(e[nc]={}),a=s[t];if(r&&a)a.value=r;else{const[o,c]=tm(t);if(r){const l=s[t]=im(r,i);En(e,o,l,c)}else a&&(Zp(e,o,a,c),s[t]=void 0)}}const rc=/(?:Once|Passive|Capture)$/;function tm(e){let t;if(rc.test(e)){t={};let r;for(;r=e.match(rc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zn(e.slice(2)),t]}let fs=0;const nm=Promise.resolve(),rm=()=>fs||(nm.then(()=>fs=0),fs=Date.now());function im(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(sm(r,n.value),t,5,[r])};return n.value=e,n.attached=rm(),n}function sm(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const ic=/^on[a-z]/,am=(e,t,n,r,i=!1,s,a,o,c)=>{t==="class"?qp(e,r,i):t==="style"?Yp(e,n,r):Mi(t)?Aa(t)||em(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):om(e,t,r,i))?Qp(e,t,r,s,a,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xp(e,t,r,i))};function om(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ic.test(t)&&V(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ic.test(t)&&be(n)?!1:t in e}const sc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>si(t,n):t};function cm(e){e.target.composing=!0}function ac(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ds=Symbol("_assign"),iE={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ds]=sc(i);const s=r||i.props&&i.props.type==="number";En(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=Ls(o)),e[ds](o)}),n&&En(e,"change",()=>{e.value=e.value.trim()}),t||(En(e,"compositionstart",cm),En(e,"compositionend",ac),En(e,"change",ac))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e[ds]=sc(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Ls(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},lm=ye({patchProp:am},Vp);let oc;function um(){return oc||(oc=Ip(lm))}const fm=(...e)=>{const t=um().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=dm(r);if(!i)return;const s=t._component;!V(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function dm(e){return be(e)?document.querySelector(e):e}const xu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},hm={},pm={class:"left"},mm={class:"home"},gm={class:"features"},vm={class:"auth"};function bm(e,t){const n=Hs("router-link");return ku(),Pu("nav",null,[Tn("div",pm,[Tn("div",mm,[pe(n,{to:"/"},{default:qt(()=>[Gt("Home")]),_:1})]),Tn("div",gm,[pe(n,{to:"/log"},{default:qt(()=>[Gt("Log")]),_:1}),pe(n,{to:"/analysis"},{default:qt(()=>[Gt("Analysis")]),_:1}),pe(n,{to:"/profile"},{default:qt(()=>[Gt("Profile")]),_:1})])]),Tn("div",vm,[pe(n,{to:"/login"},{default:qt(()=>[Gt("Login")]),_:1}),pe(n,{class:"register",to:"/register"},{default:qt(()=>[Gt("Register")]),_:1})])])}const ym=xu(hm,[["render",bm],["__scopeId","data-v-8fadf38e"]]),_m=zi({name:"App",components:{Navbar:ym}});function wm(e,t,n,r,i,s){const a=Hs("Navbar"),o=Hs("router-view");return ku(),Pu(Je,null,[pe(a),pe(o)],64)}const Im=xu(_m,[["render",wm]]),Em="modulepreload",Am=function(e){return"/lean/"+e},cc={},wn=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Am(s),s in cc)return;cc[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Em,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const An=typeof window<"u";function Tm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const te=Object.assign;function hs(e,t){const n={};for(const r in t){const i=t[r];n[r]=Ke(i)?i.map(e):e(i)}return n}const sr=()=>{},Ke=Array.isArray,Sm=/\/$/,km=e=>e.replace(Sm,"");function ps(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let c=t.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=Om(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function Pm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function lc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Cm(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&jn(t.matched[r],n.matched[i])&&Nu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function jn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Nu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Rm(e[n],t[n]))return!1;return!0}function Rm(e,t){return Ke(e)?uc(e,t):Ke(t)?uc(t,e):e===t}function uc(e,t){return Ke(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Om(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var yr;(function(e){e.pop="pop",e.push="push"})(yr||(yr={}));var ar;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ar||(ar={}));function xm(e){if(!e)if(An){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),km(e)}const Nm=/^[^#]+#/;function Mm(e,t){return e.replace(Nm,"#")+t}function Dm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Gi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Lm(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Dm(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function fc(e,t){return(history.state?history.state.position-t:-1)+e}const Js=new Map;function Fm(e,t){Js.set(e,t)}function Um(e){const t=Js.get(e);return Js.delete(e),t}let $m=()=>location.protocol+"//"+location.host;function Mu(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(o);return c[0]!=="/"&&(c="/"+c),lc(c,"")}return lc(n,e)+r+i}function jm(e,t,n,r){let i=[],s=[],a=null;const o=({state:p})=>{const g=Mu(e,location),A=n.value,S=t.value;let M=0;if(p){if(n.value=g,t.value=p,a&&a===A){a=null;return}M=S?p.position-S.position:0}else r(g);i.forEach(b=>{b(n.value,A,{delta:M,type:yr.pop,direction:M?M>0?ar.forward:ar.back:ar.unknown})})};function c(){a=n.value}function l(p){i.push(p);const g=()=>{const A=i.indexOf(p);A>-1&&i.splice(A,1)};return s.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:Gi()}),"")}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function dc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Gi():null}}function Bm(e){const{history:t,location:n}=window,r={value:Mu(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:$m()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),i.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function a(c,l){const u=te({},t.state,dc(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function o(c,l){const u=te({},i.value,t.state,{forward:c,scroll:Gi()});s(u.current,u,!0);const f=te({},dc(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:o,replace:a}}function Hm(e){e=xm(e);const t=Bm(e),n=jm(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=te({location:"",base:e,go:r,createHref:Mm.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function zm(e){return typeof e=="string"||e&&typeof e=="object"}function Du(e){return typeof e=="string"||typeof e=="symbol"}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lu=Symbol("");var hc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(hc||(hc={}));function Bn(e,t){return te(new Error,{type:e,[Lu]:!0},t)}function ct(e,t){return e instanceof Error&&Lu in e&&(t==null||!!(e.type&t))}const pc="[^/]+?",Wm={sensitive:!1,strict:!1,start:!0,end:!0},Vm=/[.+*?^${}()[\]/\\]/g;function Km(e,t){const n=te({},Wm,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(Vm,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:M,regexp:b}=p;s.push({name:A,repeatable:S,optional:M});const _=b||pc;if(_!==pc){g+=10;try{new RegExp(`(${_})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${A}" (${_}): `+C.message)}}let x=S?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(x=M&&l.length<2?`(?:/${x})`:"/"+x),M&&(x+="?"),i+=x,g+=20,M&&(g+=-8),S&&(g+=-20),_===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(l){const u=l.match(a),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",A=s[p-1];f[A.name]=g&&A.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:M}=g,b=A in l?l[A]:"";if(Ke(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const _=Ke(b)?b.join("/"):b;if(!_)if(M)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${A}"`);u+=_}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:c}}function qm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Gm(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=qm(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(mc(r))return 1;if(mc(i))return-1}return i.length-r.length}function mc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ym={type:0,value:""},Jm=/[a-zA-Z0-9_]/;function Xm(e){if(!e)return[[]];if(e==="/")return[[Ym]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),a()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Jm.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),i}function Qm(e,t,n){const r=Km(Xm(e.path),n),i=te(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Zm(e,t){const n=[],r=new Map;t=bc({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,p){const g=!p,A=eg(u);A.aliasOf=p&&p.record;const S=bc(t,u),M=[A];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of x)M.push(te({},A,{components:p?p.record.components:A.components,path:C,aliasOf:p?p.record:A}))}let b,_;for(const x of M){const{path:C}=x;if(f&&C[0]!=="/"){const j=f.record.path,J=j[j.length-1]==="/"?"":"/";x.path=f.record.path+(C&&J+C)}if(b=Qm(x,f,S),p?p.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&u.name&&!vc(b)&&a(u.name)),A.children){const j=A.children;for(let J=0;J<j.length;J++)s(j[J],b,p&&p.children[J])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return _?()=>{a(_)}:sr}function a(u){if(Du(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function c(u){let f=0;for(;f<n.length&&Gm(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Fu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!vc(u)&&r.set(u.record.name,u)}function l(u,f){let p,g={},A,S;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Bn(1,{location:u});S=p.record.name,g=te(gc(f.params,p.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&gc(u.params,p.keys.map(_=>_.name))),A=p.stringify(g)}else if("path"in u)A=u.path,p=n.find(_=>_.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!p)throw Bn(1,{location:u,currentLocation:f});S=p.record.name,g=te({},f.params,u.params),A=p.stringify(g)}const M=[];let b=p;for(;b;)M.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:M,meta:ng(M)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function gc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function eg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:tg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function tg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function vc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ng(e){return e.reduce((t,n)=>te(t,n.meta),{})}function bc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Fu(e,t){return t.children.some(n=>n===e||Fu(e,n))}const Uu=/#/g,rg=/&/g,ig=/\//g,sg=/=/g,ag=/\?/g,$u=/\+/g,og=/%5B/g,cg=/%5D/g,ju=/%5E/g,lg=/%60/g,Bu=/%7B/g,ug=/%7C/g,Hu=/%7D/g,fg=/%20/g;function Va(e){return encodeURI(""+e).replace(ug,"|").replace(og,"[").replace(cg,"]")}function dg(e){return Va(e).replace(Bu,"{").replace(Hu,"}").replace(ju,"^")}function Xs(e){return Va(e).replace($u,"%2B").replace(fg,"+").replace(Uu,"%23").replace(rg,"%26").replace(lg,"`").replace(Bu,"{").replace(Hu,"}").replace(ju,"^")}function hg(e){return Xs(e).replace(sg,"%3D")}function pg(e){return Va(e).replace(Uu,"%23").replace(ag,"%3F")}function mg(e){return e==null?"":pg(e).replace(ig,"%2F")}function _i(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function gg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace($u," "),a=s.indexOf("="),o=_i(a<0?s:s.slice(0,a)),c=a<0?null:_i(s.slice(a+1));if(o in t){let l=t[o];Ke(l)||(l=t[o]=[l]),l.push(c)}else t[o]=c}return t}function yc(e){let t="";for(let n in e){const r=e[n];if(n=hg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ke(r)?r.map(s=>s&&Xs(s)):[r&&Xs(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function vg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ke(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const bg=Symbol(""),_c=Symbol(""),Yi=Symbol(""),zu=Symbol(""),Qs=Symbol("");function Xn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Pt(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const c=f=>{f===!1?o(Bn(4,{from:n,to:t})):f instanceof Error?o(f):zm(f)?o(Bn(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>o(f))})}function ms(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(yg(o)){const l=(o.__vccOpts||o)[t];l&&i.push(Pt(l,n,r,s,a))}else{let c=o();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Tm(l)?l.default:l;s.components[a]=u;const p=(u.__vccOpts||u)[t];return p&&Pt(p,n,r,s,a)()}))}}return i}function yg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wc(e){const t=Me(Yi),n=Me(zu),r=ve(()=>t.resolve(On(e.to))),i=ve(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(jn.bind(null,u));if(p>-1)return p;const g=Ic(c[l-2]);return l>1&&Ic(u)===g&&f[f.length-1].path!==g?f.findIndex(jn.bind(null,c[l-2])):p}),s=ve(()=>i.value>-1&&Eg(n.params,r.value.params)),a=ve(()=>i.value>-1&&i.value===n.matched.length-1&&Nu(n.params,r.value.params));function o(c={}){return Ig(c)?t[On(e.replace)?"replace":"push"](On(e.to)).catch(sr):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const _g=zi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wc,setup(e,{slots:t}){const n=Rr(wc(e)),{options:r}=Me(Yi),i=ve(()=>({[Ec(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ec(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Wa("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),wg=_g;function Ig(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Eg(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ke(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Ic(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ec=(e,t,n)=>e??t??n,Ag=zi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Me(Qs),i=ve(()=>e.route||r.value),s=Me(_c,0),a=ve(()=>{let l=On(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),o=ve(()=>i.value.matched[a.value]);oi(_c,ve(()=>a.value+1)),oi(bg,o),oi(Qs,i);const c=La();return Nn(()=>[c.value,o.value,e.name],([l,u,f],[p,g,A])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!jn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=o.value,p=f&&f.components[u];if(!p)return Ac(n.default,{Component:p,route:l});const g=f.props[u],A=g?g===!0?l.params:typeof g=="function"?g(l):g:null,M=Wa(p,te({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Ac(n.default,{Component:M,route:l})||M}}});function Ac(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Tg=Ag;function Sg(e){const t=Zm(e.routes,e),n=e.parseQuery||gg,r=e.stringifyQuery||yc,i=e.history,s=Xn(),a=Xn(),o=Xn(),c=kh(Et);let l=Et;An&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hs.bind(null,y=>""+y),f=hs.bind(null,mg),p=hs.bind(null,_i);function g(y,N){let P,F;return Du(y)?(P=t.getRecordMatcher(y),F=N):F=y,t.addRoute(F,P)}function A(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function S(){return t.getRoutes().map(y=>y.record)}function M(y){return!!t.getRecordMatcher(y)}function b(y,N){if(N=te({},N||c.value),typeof y=="string"){const m=ps(n,y,N.path),v=t.resolve({path:m.path},N),w=i.createHref(m.fullPath);return te(m,v,{params:p(v.params),hash:_i(m.hash),redirectedFrom:void 0,href:w})}let P;if("path"in y)P=te({},y,{path:ps(n,y.path,N.path).path});else{const m=te({},y.params);for(const v in m)m[v]==null&&delete m[v];P=te({},y,{params:f(m)}),N.params=f(N.params)}const F=t.resolve(P,N),ee=y.hash||"";F.params=u(p(F.params));const d=Pm(r,te({},y,{hash:dg(ee),path:F.path})),h=i.createHref(d);return te({fullPath:d,hash:ee,query:r===yc?vg(y.query):y.query||{}},F,{redirectedFrom:void 0,href:h})}function _(y){return typeof y=="string"?ps(n,y,c.value.path):te({},y)}function x(y,N){if(l!==y)return Bn(8,{from:N,to:y})}function C(y){return X(y)}function j(y){return C(te(_(y),{replace:!0}))}function J(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let F=typeof P=="function"?P(y):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=_(F):{path:F},F.params={}),te({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function X(y,N){const P=l=b(y),F=c.value,ee=y.state,d=y.force,h=y.replace===!0,m=J(P);if(m)return X(te(_(m),{state:typeof m=="object"?te({},ee,m.state):ee,force:d,replace:h}),N||P);const v=P;v.redirectedFrom=N;let w;return!d&&Cm(r,F,P)&&(w=Bn(16,{to:v,from:F}),qe(F,F,!0,!1)),(w?Promise.resolve(w):ae(v,F)).catch(I=>ct(I)?ct(I,2)?I:wt(I):Z(I,v,F)).then(I=>{if(I){if(ct(I,2))return X(te({replace:h},_(I.to),{state:typeof I.to=="object"?te({},ee,I.to.state):ee,force:d}),N||v)}else I=Oe(v,F,!0,h,ee);return _e(v,F,I),I})}function K(y,N){const P=x(y,N);return P?Promise.reject(P):Promise.resolve()}function B(y){const N=bn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function ae(y,N){let P;const[F,ee,d]=kg(y,N);P=ms(F.reverse(),"beforeRouteLeave",y,N);for(const m of F)m.leaveGuards.forEach(v=>{P.push(Pt(v,y,N))});const h=K.bind(null,y,N);return P.push(h),we(P).then(()=>{P=[];for(const m of s.list())P.push(Pt(m,y,N));return P.push(h),we(P)}).then(()=>{P=ms(ee,"beforeRouteUpdate",y,N);for(const m of ee)m.updateGuards.forEach(v=>{P.push(Pt(v,y,N))});return P.push(h),we(P)}).then(()=>{P=[];for(const m of d)if(m.beforeEnter)if(Ke(m.beforeEnter))for(const v of m.beforeEnter)P.push(Pt(v,y,N));else P.push(Pt(m.beforeEnter,y,N));return P.push(h),we(P)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),P=ms(d,"beforeRouteEnter",y,N),P.push(h),we(P))).then(()=>{P=[];for(const m of a.list())P.push(Pt(m,y,N));return P.push(h),we(P)}).catch(m=>ct(m,8)?m:Promise.reject(m))}function _e(y,N,P){o.list().forEach(F=>B(()=>F(y,N,P)))}function Oe(y,N,P,F,ee){const d=x(y,N);if(d)return d;const h=N===Et,m=An?history.state:{};P&&(F||h?i.replace(y.fullPath,te({scroll:h&&m&&m.scroll},ee)):i.push(y.fullPath,ee)),c.value=y,qe(y,N,P,h),wt()}let Fe;function Wt(){Fe||(Fe=i.listen((y,N,P)=>{if(!Br.listening)return;const F=b(y),ee=J(F);if(ee){X(te(ee,{replace:!0}),F).catch(sr);return}l=F;const d=c.value;An&&Fm(fc(d.fullPath,P.delta),Gi()),ae(F,d).catch(h=>ct(h,12)?h:ct(h,2)?(X(h.to,F).then(m=>{ct(m,20)&&!P.delta&&P.type===yr.pop&&i.go(-1,!1)}).catch(sr),Promise.reject()):(P.delta&&i.go(-P.delta,!1),Z(h,F,d))).then(h=>{h=h||Oe(F,d,!1),h&&(P.delta&&!ct(h,8)?i.go(-P.delta,!1):P.type===yr.pop&&ct(h,20)&&i.go(-1,!1)),_e(F,d,h)}).catch(sr)}))}let Ue=Xn(),Q=Xn(),re;function Z(y,N,P){wt(y);const F=Q.list();return F.length?F.forEach(ee=>ee(y,N,P)):console.error(y),Promise.reject(y)}function ot(){return re&&c.value!==Et?Promise.resolve():new Promise((y,N)=>{Ue.add([y,N])})}function wt(y){return re||(re=!y,Wt(),Ue.list().forEach(([N,P])=>y?P(y):N()),Ue.reset()),y}function qe(y,N,P,F){const{scrollBehavior:ee}=e;if(!An||!ee)return Promise.resolve();const d=!P&&Um(fc(y.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return Ua().then(()=>ee(y,N,d)).then(h=>h&&Lm(h)).catch(h=>Z(h,y,N))}const Te=y=>i.go(y);let vn;const bn=new Set,Br={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,hasRoute:M,getRoutes:S,resolve:b,options:e,push:C,replace:j,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Q.add,isReady:ot,install(y){const N=this;y.component("RouterLink",wg),y.component("RouterView",Tg),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>On(c)}),An&&!vn&&c.value===Et&&(vn=!0,C(i.location).catch(ee=>{}));const P={};for(const ee in Et)Object.defineProperty(P,ee,{get:()=>c.value[ee],enumerable:!0});y.provide(Yi,N),y.provide(zu,tu(P)),y.provide(Qs,c);const F=y.unmount;bn.add(y),y.unmount=function(){bn.delete(y),bn.size<1&&(l=Et,Fe&&Fe(),Fe=null,c.value=Et,vn=!1,re=!1),F()}}};function we(y){return y.reduce((N,P)=>N.then(()=>B(P)),Promise.resolve())}return Br}function kg(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(l=>jn(l,o))?r.push(o):n.push(o));const c=e.matched[a];c&&(t.matched.find(l=>jn(l,c))||i.push(c))}return[n,r,i]}function sE(){return Me(Yi)}const Pg="/lean/",Cg={BASE_PATH:Pg},Rg=[{path:"/",name:"Home",component:()=>wn(()=>import("./Home-502f89ee.js"),["assets/Home-502f89ee.js","assets/Home-d090841b.css"])},{path:"/log",name:"Log",component:()=>wn(()=>import("./Log-d550aa3d.js"),["assets/Log-d550aa3d.js","assets/Log-a8abc7b9.css"]),meta:{requiresAuth:!0}},{path:"/analysis",name:"Analysis",component:()=>wn(()=>import("./Analysis-c9e838e8.js"),["assets/Analysis-c9e838e8.js","assets/Analysis-ca995139.css"]),meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:()=>wn(()=>import("./Profile-3b7c00e3.js"),[]),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>wn(()=>import("./Login-0b9002e0.js"),["assets/Login-0b9002e0.js","assets/OAuthButtons.vue_vue_type_script_setup_true_lang-77c24dfc.js"]),meta:{requiresUnauth:!0}},{path:"/register",name:"Register",component:()=>wn(()=>import("./Register-5f4672a9.js"),["assets/Register-5f4672a9.js","assets/OAuthButtons.vue_vue_type_script_setup_true_lang-77c24dfc.js"]),meta:{requiresUnauth:!0}}],Wu=Sg({history:Hm(Cg.BASE_PATH),routes:Rg});Wu.beforeEach((e,t,n)=>{const r=Me("auth");if(!r)throw new Error("Firebase Auth is not provided");const i=e.matched.some(a=>a.meta.requiresAuth),s=e.matched.some(a=>a.meta.requiresUnauth);return new Promise(a=>{r.onAuthStateChanged(o=>{i&&!o?n("/login"):s&&o?n("/"):n(),a()})})});/**
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
 */const Vu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Og=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Ku={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|l>>6,g=l&63;c||(g=64,a||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Vu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Og(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||f==null)throw new xg;const p=s<<2|o>>4;if(r.push(p),l!==64){const g=o<<4&240|l>>2;if(r.push(g),f!==64){const A=l<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ng=function(e){const t=Vu(e);return Ku.encodeByteArray(t,!0)},qu=function(e){return Ng(e).replace(/\./g,"")},Gu=function(e){try{return Ku.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Mg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dg=()=>Mg().__FIREBASE_DEFAULTS__,Lg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Fg=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Gu(e[1]);return t&&JSON.parse(t)},Ka=()=>{try{return Dg()||Lg()||Fg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ug=e=>{var t,n;return(n=(t=Ka())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Yu=()=>{var e;return(e=Ka())===null||e===void 0?void 0:e.config},Ju=e=>{var t;return(t=Ka())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class $g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Xu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Bg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hg(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Qu(){try{return typeof indexedDB=="object"}catch{return!1}}function Zu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function zg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Wg="FirebaseError";class st extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Wg,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Vg(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new st(i,o,r)}}function Vg(e,t){return e.replace(Kg,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Kg=/\{\$([^}]+)}/g;function qg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _r(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Tc(s)&&Tc(a)){if(!_r(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tc(e){return e!==null&&typeof e=="object"}/**
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
 */function Or(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function er(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function tr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Gg(e,t){const n=new Yg(e,t);return n.subscribe.bind(n)}class Yg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jg(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=gs),i.error===void 0&&(i.error=gs),i.complete===void 0&&(i.complete=gs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function gs(){}/**
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
 */const Xg=1e3,Qg=2,Zg=4*60*60*1e3,ev=.5;function Sc(e,t=Xg,n=Qg){const r=t*Math.pow(n,e),i=Math.round(ev*r*(Math.random()-.5)*2);return Math.min(Zg,r+i)}/**
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
 */function at(e){return e&&e._delegate?e._delegate:e}class it{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class tv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new $g;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rv(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nv(e){return e===Yt?void 0:e}function rv(e){return e.instantiationMode==="EAGER"}/**
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
 */class iv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new tv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const sv={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},av=ie.INFO,ov={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},cv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ov[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qa{constructor(t){this.name=t,this._logLevel=av,this._logHandler=cv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const lv=(e,t)=>t.some(n=>e instanceof n);let kc,Pc;function uv(){return kc||(kc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fv(){return Pc||(Pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ef=new WeakMap,Zs=new WeakMap,tf=new WeakMap,vs=new WeakMap,Ga=new WeakMap;function dv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Lt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&ef.set(n,e)}).catch(()=>{}),Ga.set(t,e),t}function hv(e){if(Zs.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Zs.set(e,t)}let ea={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Zs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||tf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pv(e){ea=e(ea)}function mv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bs(this),t,...n);return tf.set(r,t.sort?t.sort():[t]),Lt(r)}:fv().includes(e)?function(...t){return e.apply(bs(this),t),Lt(ef.get(this))}:function(...t){return Lt(e.apply(bs(this),t))}}function gv(e){return typeof e=="function"?mv(e):(e instanceof IDBTransaction&&hv(e),lv(e,uv())?new Proxy(e,ea):e)}function Lt(e){if(e instanceof IDBRequest)return dv(e);if(vs.has(e))return vs.get(e);const t=gv(e);return t!==e&&(vs.set(e,t),Ga.set(t,e)),t}const bs=e=>Ga.get(e);function vv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Lt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Lt(a.result),c.oldVersion,c.newVersion,Lt(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const bv=["get","getKey","getAll","getAllKeys","count"],yv=["put","add","delete","clear"],ys=new Map;function Cc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ys.get(t))return ys.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=yv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bv.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return ys.set(t,s),s}pv(e=>({...e,get:(t,n,r)=>Cc(t,n)||e.get(t,n,r),has:(t,n)=>!!Cc(t,n)||e.has(t,n)}));/**
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
 */class _v{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ta="@firebase/app",Rc="0.9.20";/**
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
 */const on=new qa("@firebase/app"),Iv="@firebase/app-compat",Ev="@firebase/analytics-compat",Av="@firebase/analytics",Tv="@firebase/app-check-compat",Sv="@firebase/app-check",kv="@firebase/auth",Pv="@firebase/auth-compat",Cv="@firebase/database",Rv="@firebase/database-compat",Ov="@firebase/functions",xv="@firebase/functions-compat",Nv="@firebase/installations",Mv="@firebase/installations-compat",Dv="@firebase/messaging",Lv="@firebase/messaging-compat",Fv="@firebase/performance",Uv="@firebase/performance-compat",$v="@firebase/remote-config",jv="@firebase/remote-config-compat",Bv="@firebase/storage",Hv="@firebase/storage-compat",zv="@firebase/firestore",Wv="@firebase/firestore-compat",Vv="firebase",Kv="10.5.0";/**
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
 */const na="[DEFAULT]",qv={[ta]:"fire-core",[Iv]:"fire-core-compat",[Av]:"fire-analytics",[Ev]:"fire-analytics-compat",[Sv]:"fire-app-check",[Tv]:"fire-app-check-compat",[kv]:"fire-auth",[Pv]:"fire-auth-compat",[Cv]:"fire-rtdb",[Rv]:"fire-rtdb-compat",[Ov]:"fire-fn",[xv]:"fire-fn-compat",[Nv]:"fire-iid",[Mv]:"fire-iid-compat",[Dv]:"fire-fcm",[Lv]:"fire-fcm-compat",[Fv]:"fire-perf",[Uv]:"fire-perf-compat",[$v]:"fire-rc",[jv]:"fire-rc-compat",[Bv]:"fire-gcs",[Hv]:"fire-gcs-compat",[zv]:"fire-fst",[Wv]:"fire-fst-compat","fire-js":"fire-js",[Vv]:"fire-js-all"};/**
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
 */const wi=new Map,ra=new Map;function Gv(e,t){try{e.container.addComponent(t)}catch(n){on.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pt(e){const t=e.name;if(ra.has(t))return on.debug(`There were multiple attempts to register component ${t}.`),!1;ra.set(t,e);for(const n of wi.values())Gv(n,e);return!0}function Kn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Yv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new pn("app","Firebase",Yv);/**
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
 */class Jv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const xr=Kv;function nf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:na,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=Yu()),!n)throw Ft.create("no-options");const s=wi.get(i);if(s){if(_r(n,s.options)&&_r(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const a=new iv(i);for(const c of ra.values())a.addComponent(c);const o=new Jv(n,r,a);return wi.set(i,o),o}function rf(e=na){const t=wi.get(e);if(!t&&e===na&&Yu())return nf();if(!t)throw Ft.create("no-app",{appName:e});return t}function et(e,t,n){var r;let i=(r=qv[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),on.warn(o.join(" "));return}pt(new it(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Xv="firebase-heartbeat-database",Qv=1,wr="firebase-heartbeat-store";let _s=null;function sf(){return _s||(_s=vv(Xv,Qv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wr)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),_s}async function Zv(e){try{return await(await sf()).transaction(wr).objectStore(wr).get(af(e))}catch(t){if(t instanceof st)on.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});on.warn(n.message)}}}async function Oc(e,t){try{const r=(await sf()).transaction(wr,"readwrite");await r.objectStore(wr).put(t,af(e)),await r.done}catch(n){if(n instanceof st)on.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(r.message)}}}function af(e){return`${e.name}!${e.options.appId}`}/**
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
 */const eb=1024,tb=30*24*60*60*1e3;class nb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ib(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xc(),{heartbeatsToSend:n,unsentEntries:r}=rb(this._heartbeatsCache.heartbeats),i=qu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xc(){return new Date().toISOString().substring(0,10)}function rb(e,t=eb){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Nc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ib{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qu()?Zu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Nc(e){return qu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function sb(e){pt(new it("platform-logger",t=>new _v(t),"PRIVATE")),pt(new it("heartbeat",t=>new nb(t),"PRIVATE")),et(ta,Rc,e),et(ta,Rc,"esm2017"),et("fire-js","")}sb("");function Ya(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Mc(e){return e!==void 0&&e.enterprise!==void 0}class ab{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ob=of,cf=new pn("auth","Firebase",of());/**
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
 */const Ii=new qa("@firebase/auth");function cb(e,...t){Ii.logLevel<=ie.WARN&&Ii.warn(`Auth (${xr}): ${e}`,...t)}function li(e,...t){Ii.logLevel<=ie.ERROR&&Ii.error(`Auth (${xr}): ${e}`,...t)}/**
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
 */function $e(e,...t){throw Ja(e,...t)}function tt(e,...t){return Ja(e,...t)}function lf(e,t,n){const r=Object.assign(Object.assign({},ob()),{[t]:n});return new pn("auth","Firebase",r).create(t,{appName:e.name})}function lb(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&$e(e,"argument-error"),lf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ja(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return cf.create(e,...t)}function H(e,t,...n){if(!e)throw Ja(t,...n)}function ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw li(t),new Error(t)}function mt(e,t){e||ft(t)}/**
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
 */function ia(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ub(){return Dc()==="http:"||Dc()==="https:"}function Dc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function fb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ub()||Xu()||"connection"in navigator)?navigator.onLine:!0}function db(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Nr{constructor(t,n){this.shortDelay=t,this.longDelay=n,mt(n>t,"Short delay should be less than long delay!"),this.isMobile=jg()||Bg()}get(){return fb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xa(e,t){mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class uf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pb=new Nr(3e4,6e4);function mn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function gn(e,t,n,r,i={}){return ff(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=Or(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),uf.fetch()(df(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function ff(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},hb),t);try{const i=new mb(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Gr(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gr(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Gr(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw Gr(e,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw lf(e,u,l);$e(e,u)}}catch(i){if(i instanceof st)throw i;$e(e,"network-request-failed",{message:String(i)})}}async function Mr(e,t,n,r,i={}){const s=await gn(e,t,n,r,i);return"mfaPendingCredential"in s&&$e(e,"multi-factor-auth-required",{_serverResponse:s}),s}function df(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Xa(e.config,i):`${e.config.apiScheme}://${i}`}class mb{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),pb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tt(e,t,r);return i.customData._tokenResponse=n,i}async function gb(e,t){return gn(e,"GET","/v2/recaptchaConfig",mn(e,t))}/**
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
 */async function vb(e,t){return gn(e,"POST","/v1/accounts:delete",t)}async function bb(e,t){return gn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function or(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function yb(e,t=!1){const n=at(e),r=await n.getIdToken(t),i=Qa(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:or(ws(i.auth_time)),issuedAtTime:or(ws(i.iat)),expirationTime:or(ws(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ws(e){return Number(e)*1e3}function Qa(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return li("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gu(n);return i?JSON.parse(i):(li("Failed to decode base64 JWT payload"),null)}catch(i){return li("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _b(e){const t=Qa(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ir(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof st&&wb(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function wb({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Ib{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ei(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ir(e,bb(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Tb(s.providerUserInfo):[],o=Ab(e.providerData,a),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new hf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Eb(e){const t=at(e);await Ei(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ab(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Tb(e){return e.map(t=>{var{providerId:n}=t,r=Ya(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Sb(e,t){const n=await ff(e,{},async()=>{const r=Or({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=df(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",uf.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_b(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return H(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sb(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Er;return r&&(H(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
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
 */function At(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class sn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Ya(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ib(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ir(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return yb(this,t)}reload(){return Eb(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new sn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ei(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ir(this,vb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(a=n.photoURL)!==null&&a!==void 0?a:void 0,S=(o=n.tenantId)!==null&&o!==void 0?o:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:C,isAnonymous:j,providerData:J,stsTokenManager:X}=n;H(x&&X,t,"internal-error");const K=Er.fromJSON(this.name,X);H(typeof x=="string",t,"internal-error"),At(f,t.name),At(p,t.name),H(typeof C=="boolean",t,"internal-error"),H(typeof j=="boolean",t,"internal-error"),At(g,t.name),At(A,t.name),At(S,t.name),At(M,t.name),At(b,t.name),At(_,t.name);const B=new sn({uid:x,auth:t,email:p,emailVerified:C,displayName:f,isAnonymous:j,photoURL:A,phoneNumber:g,tenantId:S,stsTokenManager:K,createdAt:b,lastLoginAt:_});return J&&Array.isArray(J)&&(B.providerData=J.map(ae=>Object.assign({},ae))),M&&(B._redirectEventId=M),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new Er;i.updateFromServerResponse(n);const s=new sn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ei(s),s}}/**
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
 */const Lc=new Map;function dt(e){mt(e instanceof Function,"Expected a class definition");let t=Lc.get(e);return t?(mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lc.set(e,t),t)}/**
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
 */class pf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}pf.type="NONE";const Fc=pf;/**
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
 */function ui(e,t,n){return`firebase:${e}:${t}:${n}`}class Mn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ui(this.userKey,i.apiKey,s),this.fullPersistenceKey=ui("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?sn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Mn(dt(Fc),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||dt(Fc);const a=ui(r,t.config.apiKey,t.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const f=sn._fromJSON(t,u);l!==s&&(o=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Mn(s,t,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new Mn(s,t,r))}}/**
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
 */function Uc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yf(t))return"Blackberry";if(_f(t))return"Webos";if(Za(t))return"Safari";if((t.includes("chrome/")||gf(t))&&!t.includes("edge/"))return"Chrome";if(bf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mf(e=Ee()){return/firefox\//i.test(e)}function Za(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gf(e=Ee()){return/crios\//i.test(e)}function vf(e=Ee()){return/iemobile/i.test(e)}function bf(e=Ee()){return/android/i.test(e)}function yf(e=Ee()){return/blackberry/i.test(e)}function _f(e=Ee()){return/webos/i.test(e)}function Ji(e=Ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function kb(e=Ee()){var t;return Ji(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Pb(){return Hg()&&document.documentMode===10}function wf(e=Ee()){return Ji(e)||bf(e)||_f(e)||yf(e)||/windows phone/i.test(e)||vf(e)}function Cb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function If(e,t=[]){let n;switch(e){case"Browser":n=Uc(Ee());break;case"Worker":n=`${Uc(Ee())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
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
 */class Rb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const c=t(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ob(e,t={}){return gn(e,"GET","/v2/passwordPolicy",mn(e,t))}/**
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
 */const xb=6;class Nb{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:xb,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class Mb{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $c(this),this.idTokenSubscription=new $c(this),this.beforeStateQueue=new Rb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ei(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=db()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?at(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ob(this),n=new Nb(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new pn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&dt(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=If(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&cb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zt(e){return at(e)}class $c{constructor(t){this.auth=t,this.observer=null,this.addObserver=Gg(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Db(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Ef(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Db().appendChild(r)})}function Lb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Fb="https://www.google.com/recaptcha/enterprise.js?render=",Ub="recaptcha-enterprise",$b="NO_RECAPTCHA";class jb{constructor(t){this.type=Ub,this.auth=zt(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{gb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new ab(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;Mc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{a(l)}).catch(()=>{a($b)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&Mc(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Ef(Fb+o).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function Ai(e,t,n,r=!1){const i=new jb(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
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
 */function Bb(e,t){const n=Kn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_r(s,t??{}))return i;$e(i,"already-initialized")}return n.initialize({options:t})}function Hb(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function zb(e,t,n){const r=zt(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Af(t),{host:a,port:o}=Wb(t),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Vb()}function Af(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Wb(e){const t=Af(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:jc(a)}}}function jc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Vb(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class eo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(t){return ft("not implemented")}_linkToIdToken(t,n){return ft("not implemented")}_getReauthenticationResolver(t){return ft("not implemented")}}async function Kb(e,t){return gn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Is(e,t){return Mr(e,"POST","/v1/accounts:signInWithPassword",mn(e,t))}/**
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
 */async function qb(e,t){return Mr(e,"POST","/v1/accounts:signInWithEmailLink",mn(e,t))}async function Gb(e,t){return Mr(e,"POST","/v1/accounts:signInWithEmailLink",mn(e,t))}/**
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
 */class Ar extends eo{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ar(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ar(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ai(t,r,"signInWithPassword");return Is(t,i)}else return Is(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ai(t,r,"signInWithPassword");return Is(t,s)}else return Promise.reject(i)});case"emailLink":return qb(t,{email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Kb(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gb(t,{idToken:n,email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Dn(e,t){return Mr(e,"POST","/v1/accounts:signInWithIdp",mn(e,t))}/**
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
 */const Yb="http://localhost";class cn extends eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new cn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Ya(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new cn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Dn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Dn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Dn(t,n)}buildRequest(){const t={requestUri:Yb,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Or(n)}return t}}/**
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
 */function Jb(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xb(e){const t=er(tr(e)).link,n=t?er(tr(t)).deep_link_id:null,r=er(tr(e)).deep_link_id;return(r?er(tr(r)).link:null)||r||n||t||e}class to{constructor(t){var n,r,i,s,a,o;const c=er(tr(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Jb((i=c.mode)!==null&&i!==void 0?i:null);H(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=Xb(t);try{return new to(n)}catch{return null}}}/**
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
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(t,n){return Ar._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=to.parseLink(n);return H(r,"argument-error"),Ar._fromEmailAndCode(t,r.code,r.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class no{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dr extends no{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ct extends Dr{constructor(){super("facebook.com")}static credential(t){return cn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return cn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class Ot extends Dr{constructor(){super("github.com")}static credential(t){return cn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class xt extends Dr{constructor(){super("twitter.com")}static credential(t,n){return cn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
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
 */async function Es(e,t){return Mr(e,"POST","/v1/accounts:signUp",mn(e,t))}/**
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
 */class ln{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await sn._fromIdTokenResponse(t,r,i),a=Bc(r);return new ln({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Bc(r);return new ln({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Bc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Ti extends st{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ti.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ti(t,n,r,i)}}function Tf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ti._fromErrorAndOperation(e,s,t,r):s})}async function Qb(e,t,n=!1){const r=await Ir(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ln._forOperation(e,"link",r)}/**
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
 */async function Zb(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ir(e,Tf(r,i,t,e),n);H(s.idToken,r,"internal-error");const a=Qa(s.idToken);H(a,r,"internal-error");const{sub:o}=a;return H(e.uid===o,r,"user-mismatch"),ln._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),s}}/**
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
 */async function Sf(e,t,n=!1){const r="signIn",i=await Tf(e,r,t),s=await ln._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ey(e,t){return Sf(zt(e),t)}/**
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
 */async function kf(e){const t=zt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function aE(e,t,n){var r;const i=zt(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Ai(i,s,"signUpPassword");a=Es(i,l)}else a=Es(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ai(i,s,"signUpPassword");return Es(i,u)}throw l});const o=await a.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&kf(e),l}),c=await ln._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function oE(e,t,n){return ey(at(e),qn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kf(e),r})}function ty(e,t,n,r){return at(e).onIdTokenChanged(t,n,r)}function ny(e,t,n){return at(e).beforeAuthStateChanged(t,n)}function ry(e,t,n,r){return at(e).onAuthStateChanged(t,n,r)}const Si="__sak";/**
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
 */class Pf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Si,"1"),this.storage.removeItem(Si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function iy(){const e=Ee();return Za(e)||Ji(e)}const sy=1e3,ay=10;class Cf extends Pf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iy()&&Cb(),this.fallbackToPolling=wf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Pb()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ay):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Cf.type="LOCAL";const oy=Cf;/**
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
 */class Rf extends Pf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Rf.type="SESSION";const Of=Rf;/**
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
 */function cy(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Xi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await cy(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xi.receivers=[];/**
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
 */function ro(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class ly{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=ro("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function nt(){return window}function uy(e){nt().location.href=e}/**
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
 */function xf(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function fy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dy(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function hy(){return xf()?self:null}/**
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
 */const Nf="firebaseLocalStorageDb",py=1,ki="firebaseLocalStorage",Mf="fbase_key";class Lr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qi(e,t){return e.transaction([ki],t?"readwrite":"readonly").objectStore(ki)}function my(){const e=indexedDB.deleteDatabase(Nf);return new Lr(e).toPromise()}function sa(){const e=indexedDB.open(Nf,py);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ki,{keyPath:Mf})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ki)?t(r):(r.close(),await my(),t(await sa()))})})}async function Hc(e,t,n){const r=Qi(e,!0).put({[Mf]:t,value:n});return new Lr(r).toPromise()}async function gy(e,t){const n=Qi(e,!1).get(t),r=await new Lr(n).toPromise();return r===void 0?null:r.value}function zc(e,t){const n=Qi(e,!0).delete(t);return new Lr(n).toPromise()}const vy=800,by=3;class Df{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sa(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>by)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xi._getInstance(hy()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await fy(),!this.activeServiceWorker)return;this.sender=new ly(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||dy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sa();return await Hc(t,Si,"1"),await zc(t,Si),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>gy(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Qi(i,!1).getAll();return new Lr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Df.type="LOCAL";const yy=Df;new Nr(3e4,6e4);/**
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
 */function Lf(e,t){return t?dt(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class io extends eo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Dn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Dn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function _y(e){return Sf(e.auth,new io(e),e.bypassAuthState)}function wy(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),Zb(n,new io(e),e.bypassAuthState)}async function Iy(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),Qb(n,new io(e),e.bypassAuthState)}/**
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
 */class Ff{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _y;case"linkViaPopup":case"linkViaRedirect":return Iy;case"reauthViaPopup":case"reauthViaRedirect":return wy;default:$e(this.auth,"internal-error")}}resolve(t){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ey=new Nr(2e3,1e4);class Sn extends Ff{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const t=ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ey.get())};t()}}Sn.currentPopupAction=null;/**
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
 */const Ay="pendingRedirect",fi=new Map;class Ty extends Ff{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=fi.get(this.auth._key());if(!t){try{const r=await Sy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}fi.set(this.auth._key(),t)}return this.bypassAuthState||fi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sy(e,t){const n=$f(t),r=Uf(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ky(e,t){return Uf(e)._set($f(t),"true")}function Py(e,t){fi.set(e._key(),t)}function Uf(e){return dt(e._redirectPersistence)}function $f(e){return ui(Ay,e.config.apiKey,e.name)}/**
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
 */function cE(e,t,n){return Cy(e,t,n)}async function Cy(e,t,n){const r=zt(e);lb(e,t,no),await r._initializationPromise;const i=Lf(r,n);return await ky(i,r),i._openRedirect(r,t,"signInViaRedirect")}async function Ry(e,t,n=!1){const r=zt(e),i=Lf(r,t),a=await new Ty(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const Oy=10*60*1e3;class xy{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ny(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!jf(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Oy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wc(t))}saveEventToCache(t){this.cachedEventUids.add(Wc(t)),this.lastProcessedEventTime=Date.now()}}function Wc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function jf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ny(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jf(e);default:return!1}}/**
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
 */async function My(e,t={}){return gn(e,"GET","/v1/projects",t)}/**
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
 */const Dy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ly=/^https?/;async function Fy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await My(e);for(const n of t)try{if(Uy(n))return}catch{}$e(e,"unauthorized-domain")}function Uy(e){const t=ia(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Ly.test(n))return!1;if(Dy.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $y=new Nr(3e4,6e4);function Vc(){const e=nt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function jy(e){return new Promise((t,n)=>{var r,i,s;function a(){Vc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vc(),n(tt(e,"network-request-failed"))},timeout:$y.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)a();else{const o=Lb("iframefcb");return nt()[o]=()=>{gapi.load?a():n(tt(e,"network-request-failed"))},Ef(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw di=null,t})}let di=null;function By(e){return di=di||jy(e),di}/**
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
 */const Hy=new Nr(5e3,15e3),zy="__/auth/iframe",Wy="emulator/auth/iframe",Vy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ky=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qy(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xa(t,Wy):`https://${e.config.authDomain}/${zy}`,r={apiKey:t.apiKey,appName:e.name,v:xr},i=Ky.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Or(r).slice(1)}`}async function Gy(e){const t=await By(e),n=nt().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:qy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=tt(e,"network-request-failed"),o=nt().setTimeout(()=>{s(a)},Hy.get());function c(){nt().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const Yy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jy=500,Xy=600,Qy="_blank",Zy="http://localhost";class Kc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e_(e,t,n,r=Jy,i=Xy){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Yy),{width:r.toString(),height:i.toString(),top:s,left:a}),l=Ee().toLowerCase();n&&(o=gf(l)?Qy:n),mf(l)&&(t=t||Zy,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,A])=>`${p}${g}=${A},`,"");if(kb(l)&&o!=="_self")return t_(t||"",o),new Kc(null);const f=window.open(t||"",o,u);H(f,e,"popup-blocked");try{f.focus()}catch{}return new Kc(f)}function t_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const n_="__/auth/handler",r_="emulator/auth/handler",i_=encodeURIComponent("fac");async function qc(e,t,n,r,i,s){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:xr,eventId:i};if(t instanceof no){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",qg(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))a[u]=f}if(t instanceof Dr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${i_}=${encodeURIComponent(c)}`:"";return`${s_(e)}?${Or(o).slice(1)}${l}`}function s_({config:e}){return e.emulator?Xa(e,r_):`https://${e.authDomain}/${n_}`}/**
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
 */const As="webStorageSupport";class a_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Of,this._completeRedirectFn=Ry,this._overrideRedirectResult=Py}async _openPopup(t,n,r,i){var s;mt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await qc(t,n,r,ia(),i);return e_(t,a,ro())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await qc(t,n,r,ia(),i);return uy(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Gy(t),r=new xy(t);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(As,{type:As},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[As];a!==void 0&&n(!!a),$e(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return wf()||Za()||Ji()}}const o_=a_;var Gc="@firebase/auth",Yc="1.3.0";/**
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
 */class c_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function l_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function u_(e){pt(new it("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:If(e)},l=new Mb(r,i,s,c);return Hb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),pt(new it("auth-internal",t=>{const n=zt(t.getProvider("auth").getImmediate());return(r=>new c_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Gc,Yc,l_(e)),et(Gc,Yc,"esm2017")}/**
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
 */const f_=5*60,d_=Ju("authIdTokenMaxAge")||f_;let Jc=null;const h_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>d_)return;const i=n==null?void 0:n.token;Jc!==i&&(Jc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function p_(e=rf()){const t=Kn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Bb(e,{popupRedirectResolver:o_,persistence:[yy,oy,Of]}),r=Ju("authTokenSyncURL");if(r){const s=h_(r);ny(n,s,()=>s(n.currentUser)),ty(n,a=>s(a))}const i=Ug("auth");return i&&zb(n,`http://${i}`),n}u_("Browser");var m_=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Bf;const Zi=e=>Bf=e,Hf=Symbol();function aa(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var cr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(cr||(cr={}));function g_(){const e=zl(!0),t=e.run(()=>La({}));let n=[],r=[];const i=$i({install(s){Zi(i),i._a=s,s.provide(Hf,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!m_?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const zf=()=>{};function Xc(e,t,n,r=zf){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&Wl()&&sh(i),i}function In(e,...t){e.slice().forEach(n=>{n(...t)})}const v_=e=>e();function oa(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];aa(i)&&aa(r)&&e.hasOwnProperty(n)&&!de(r)&&!Mt(r)?e[n]=oa(i,r):e[n]=r}return e}const b_=Symbol();function y_(e){return!aa(e)||!e.hasOwnProperty(b_)}const{assign:St}=Object;function __(e){return!!(de(e)&&e.effect)}function w_(e,t,n,r){const{state:i,actions:s,getters:a}=t,o=n.state.value[e];let c;function l(){o||(n.state.value[e]=i?i():{});const u=Rh(n.state.value[e]);return St(u,s,Object.keys(a||{}).reduce((f,p)=>(f[p]=$i(ve(()=>{Zi(n);const g=n._s.get(e);return a[p].call(g,g)})),f),{}))}return c=Wf(e,l,t,n,r,!0),c}function Wf(e,t,n={},r,i,s){let a;const o=St({actions:{}},n),c={deep:!0};let l,u,f=[],p=[],g;const A=r.state.value[e];!s&&!A&&(r.state.value[e]={}),La({});let S;function M(K){let B;l=u=!1,typeof K=="function"?(K(r.state.value[e]),B={type:cr.patchFunction,storeId:e,events:g}):(oa(r.state.value[e],K),B={type:cr.patchObject,payload:K,storeId:e,events:g});const ae=S=Symbol();Ua().then(()=>{S===ae&&(l=!0)}),u=!0,In(f,B,r.state.value[e])}const b=s?function(){const{state:B}=n,ae=B?B():{};this.$patch(_e=>{St(_e,ae)})}:zf;function _(){a.stop(),f=[],p=[],r._s.delete(e)}function x(K,B){return function(){Zi(r);const ae=Array.from(arguments),_e=[],Oe=[];function Fe(Q){_e.push(Q)}function Wt(Q){Oe.push(Q)}In(p,{args:ae,name:K,store:j,after:Fe,onError:Wt});let Ue;try{Ue=B.apply(this&&this.$id===e?this:j,ae)}catch(Q){throw In(Oe,Q),Q}return Ue instanceof Promise?Ue.then(Q=>(In(_e,Q),Q)).catch(Q=>(In(Oe,Q),Promise.reject(Q))):(In(_e,Ue),Ue)}}const C={_p:r,$id:e,$onAction:Xc.bind(null,p),$patch:M,$reset:b,$subscribe(K,B={}){const ae=Xc(f,K,B.detached,()=>_e()),_e=a.run(()=>Nn(()=>r.state.value[e],Oe=>{(B.flush==="sync"?u:l)&&K({storeId:e,type:cr.direct,events:g},Oe)},St({},c,B)));return ae},$dispose:_},j=Rr(C);r._s.set(e,j);const X=(r._a&&r._a.runWithContext||v_)(()=>r._e.run(()=>(a=zl()).run(t)));for(const K in X){const B=X[K];if(de(B)&&!__(B)||Mt(B))s||(A&&y_(B)&&(de(B)?B.value=A[K]:oa(B,A[K])),r.state.value[e][K]=B);else if(typeof B=="function"){const ae=x(K,B);X[K]=ae,o.actions[K]=B}}return St(j,X),St(Y(j),X),Object.defineProperty(j,"$state",{get:()=>r.state.value[e],set:K=>{M(B=>{St(B,K)})}}),r._p.forEach(K=>{St(j,a.run(()=>K({store:j,app:r._a,pinia:r,options:o})))}),A&&s&&n.hydrate&&n.hydrate(j.$state,A),l=!0,u=!0,j}function I_(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function a(o,c){const l=gp();return o=o||(l?Me(Hf,null):null),o&&Zi(o),o=Bf,o._s.has(r)||(s?Wf(r,t,i,o):w_(r,i,o)),o._s.get(r)}return a.$id=r,a}const E_=e=>{const t=g_();e.use(t)},Vf=I_({id:"user",state:()=>({user:null}),actions:{setUser(e){this.user=e}}}),A_=()=>{const e=Me("auth");if(!e)throw new Error("Firebase Auth is not provided");ry(e,t=>{Vf().setUser(t)})},T_={useUserStore:Vf,install:e=>{E_(e),Mp()&&A_()}};var S_="firebase",k_="10.5.0";/**
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
 */et(S_,k_,"app");const P_=(e,t)=>t.some(n=>e instanceof n);let Qc,Zc;function C_(){return Qc||(Qc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R_(){return Zc||(Zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kf=new WeakMap,ca=new WeakMap,qf=new WeakMap,Ts=new WeakMap,so=new WeakMap;function O_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Ut(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Kf.set(n,e)}).catch(()=>{}),so.set(t,e),t}function x_(e){if(ca.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});ca.set(e,t)}let la={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ca.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function N_(e){la=e(la)}function M_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ss(this),t,...n);return qf.set(r,t.sort?t.sort():[t]),Ut(r)}:R_().includes(e)?function(...t){return e.apply(Ss(this),t),Ut(Kf.get(this))}:function(...t){return Ut(e.apply(Ss(this),t))}}function D_(e){return typeof e=="function"?M_(e):(e instanceof IDBTransaction&&x_(e),P_(e,C_())?new Proxy(e,la):e)}function Ut(e){if(e instanceof IDBRequest)return O_(e);if(Ts.has(e))return Ts.get(e);const t=D_(e);return t!==e&&(Ts.set(e,t),so.set(t,e)),t}const Ss=e=>so.get(e);function L_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Ut(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Ut(a.result),c.oldVersion,c.newVersion,Ut(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const F_=["get","getKey","getAll","getAllKeys","count"],U_=["put","add","delete","clear"],ks=new Map;function el(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ks.get(t))return ks.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=U_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||F_.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return ks.set(t,s),s}N_(e=>({...e,get:(t,n,r)=>el(t,n)||e.get(t,n,r),has:(t,n)=>!!el(t,n)||e.has(t,n)}));const Gf="@firebase/installations",ao="0.6.4";/**
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
 */const Yf=1e4,Jf=`w:${ao}`,Xf="FIS_v2",$_="https://firebaseinstallations.googleapis.com/v1",j_=60*60*1e3,B_="installations",H_="Installations";/**
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
 */const z_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},un=new pn(B_,H_,z_);function Qf(e){return e instanceof st&&e.code.includes("request-failed")}/**
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
 */function Zf({projectId:e}){return`${$_}/projects/${e}/installations`}function ed(e){return{token:e.token,requestStatus:2,expiresIn:V_(e.expiresIn),creationTime:Date.now()}}async function td(e,t){const r=(await t.json()).error;return un.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function W_(e,{refreshToken:t}){const n=nd(e);return n.append("Authorization",K_(t)),n}async function rd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function V_(e){return Number(e.replace("s","000"))}function K_(e){return`${Xf} ${e}`}/**
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
 */async function q_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Zf(e),i=nd(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={fid:n,authVersion:Xf,appId:e.appId,sdkVersion:Jf},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await rd(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ed(l.authToken)}}else throw await td("Create Installation",c)}/**
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
 */function id(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function G_(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Y_=/^[cdef][\w-]{21}$/,ua="";function J_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=X_(e);return Y_.test(n)?n:ua}catch{return ua}}function X_(e){return G_(e).substr(0,22)}/**
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
 */function es(e){return`${e.appName}!${e.appId}`}/**
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
 */const sd=new Map;function ad(e,t){const n=es(e);od(n,t),Q_(n,t)}function od(e,t){const n=sd.get(e);if(n)for(const r of n)r(t)}function Q_(e,t){const n=Z_();n&&n.postMessage({key:e,fid:t}),ew()}let Zt=null;function Z_(){return!Zt&&"BroadcastChannel"in self&&(Zt=new BroadcastChannel("[Firebase] FID Change"),Zt.onmessage=e=>{od(e.data.key,e.data.fid)}),Zt}function ew(){sd.size===0&&Zt&&(Zt.close(),Zt=null)}/**
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
 */const tw="firebase-installations-database",nw=1,fn="firebase-installations-store";let Ps=null;function oo(){return Ps||(Ps=L_(tw,nw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fn)}}})),Ps}async function Pi(e,t){const n=es(e),i=(await oo()).transaction(fn,"readwrite"),s=i.objectStore(fn),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&ad(e,t.fid),t}async function cd(e){const t=es(e),r=(await oo()).transaction(fn,"readwrite");await r.objectStore(fn).delete(t),await r.done}async function ts(e,t){const n=es(e),i=(await oo()).transaction(fn,"readwrite"),s=i.objectStore(fn),a=await s.get(n),o=t(a);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!a||a.fid!==o.fid)&&ad(e,o.fid),o}/**
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
 */async function co(e){let t;const n=await ts(e.appConfig,r=>{const i=rw(r),s=iw(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===ua?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function rw(e){const t=e||{fid:J_(),registrationStatus:0};return ld(t)}function iw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(un.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=sw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:aw(e)}:{installationEntry:t}}async function sw(e,t){try{const n=await q_(e,t);return Pi(e.appConfig,n)}catch(n){throw Qf(n)&&n.customData.serverCode===409?await cd(e.appConfig):await Pi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function aw(e){let t=await tl(e.appConfig);for(;t.registrationStatus===1;)await id(100),t=await tl(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await co(e);return r||n}return t}function tl(e){return ts(e,t=>{if(!t)throw un.create("installation-not-found");return ld(t)})}function ld(e){return ow(e)?{fid:e.fid,registrationStatus:0}:e}function ow(e){return e.registrationStatus===1&&e.registrationTime+Yf<Date.now()}/**
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
 */async function cw({appConfig:e,heartbeatServiceProvider:t},n){const r=lw(e,n),i=W_(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={installation:{sdkVersion:Jf,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await rd(()=>fetch(r,o));if(c.ok){const l=await c.json();return ed(l)}else throw await td("Generate Auth Token",c)}function lw(e,{fid:t}){return`${Zf(e)}/${t}/authTokens:generate`}/**
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
 */async function lo(e,t=!1){let n;const r=await ts(e.appConfig,s=>{if(!ud(s))throw un.create("not-registered");const a=s.authToken;if(!t&&dw(a))return s;if(a.requestStatus===1)return n=uw(e,t),s;{if(!navigator.onLine)throw un.create("app-offline");const o=pw(s);return n=fw(e,o),o}});return n?await n:r.authToken}async function uw(e,t){let n=await nl(e.appConfig);for(;n.authToken.requestStatus===1;)await id(100),n=await nl(e.appConfig);const r=n.authToken;return r.requestStatus===0?lo(e,t):r}function nl(e){return ts(e,t=>{if(!ud(t))throw un.create("not-registered");const n=t.authToken;return mw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function fw(e,t){try{const n=await cw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Pi(e.appConfig,r),n}catch(n){if(Qf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await cd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Pi(e.appConfig,r)}throw n}}function ud(e){return e!==void 0&&e.registrationStatus===2}function dw(e){return e.requestStatus===2&&!hw(e)}function hw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+j_}function pw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function mw(e){return e.requestStatus===1&&e.requestTime+Yf<Date.now()}/**
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
 */async function gw(e){const t=e,{installationEntry:n,registrationPromise:r}=await co(t);return r?r.catch(console.error):lo(t).catch(console.error),n.fid}/**
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
 */async function vw(e,t=!1){const n=e;return await bw(n),(await lo(n,t)).token}async function bw(e){const{registrationPromise:t}=await co(e);t&&await t}/**
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
 */function yw(e){if(!e||!e.options)throw Cs("App Configuration");if(!e.name)throw Cs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Cs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Cs(e){return un.create("missing-app-config-values",{valueName:e})}/**
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
 */const fd="installations",_w="installations-internal",ww=e=>{const t=e.getProvider("app").getImmediate(),n=yw(t),r=Kn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Iw=e=>{const t=e.getProvider("app").getImmediate(),n=Kn(t,fd).getImmediate();return{getId:()=>gw(n),getToken:i=>vw(n,i)}};function Ew(){pt(new it(fd,ww,"PUBLIC")),pt(new it(_w,Iw,"PRIVATE"))}Ew();et(Gf,ao);et(Gf,ao,"esm2017");/**
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
 */const Ci="analytics",Aw="firebase_id",Tw="origin",Sw=60*1e3,kw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",uo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ce=new qa("@firebase/analytics");/**
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
 */const Pw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},De=new pn("analytics","Analytics",Pw);/**
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
 */function Cw(e){if(!e.startsWith(uo)){const t=De.create("invalid-gtag-resource",{gtagURL:e});return Ce.warn(t.message),""}return e}function dd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Rw(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ow(e,t){const n=Rw("firebase-js-sdk-policy",{createScriptURL:Cw}),r=document.createElement("script"),i=`${uo}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function xw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Nw(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const c=(await dd(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){Ce.error(o)}e("config",i,s)}async function Mw(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const o=await dd(n);for(const c of a){const l=o.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ce.error(s)}}function Dw(e,t,n,r){async function i(s,...a){try{if(s==="event"){const[o,c]=a;await Mw(e,t,n,o,c)}else if(s==="config"){const[o,c]=a;await Nw(e,t,n,r,o,c)}else if(s==="consent"){const[o]=a;e("consent","update",o)}else if(s==="get"){const[o,c,l]=a;e("get",o,c,l)}else if(s==="set"){const[o]=a;e("set",o)}else e(s,...a)}catch(o){Ce.error(o)}}return i}function Lw(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Dw(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Fw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(uo)&&n.src.includes(e))return n;return null}/**
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
 */const Uw=30,$w=1e3;class jw{constructor(t={},n=$w){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const hd=new jw;function Bw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Hw(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Bw(r)},s=kw.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw De.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function zw(e,t=hd,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw De.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw De.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Kw;return setTimeout(async()=>{o.abort()},n!==void 0?n:Sw),pd({appId:r,apiKey:i,measurementId:s},a,o,t)}async function pd(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=hd){var s;const{appId:a,measurementId:o}=e;try{await Ww(r,t)}catch(c){if(o)return Ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await Hw(e);return i.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!Vw(l)){if(i.deleteThrottleMetadata(a),o)return Ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:o};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Sc(n,i.intervalMillis,Uw):Sc(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,f),Ce.debug(`Calling attemptFetch again in ${u} millis`),pd(e,f,r,i)}}function Ww(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(De.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Vw(e){if(!(e instanceof st)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Kw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function qw(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
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
 */async function Gw(){if(Qu())try{await Zu()}catch(e){return Ce.warn(De.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ce.warn(De.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Yw(e,t,n,r,i,s,a){var o;const c=zw(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ce.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ce.error(g)),t.push(c);const l=Gw().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([c,l]);Fw(s)||Ow(s,u.measurementId),i("js",new Date);const p=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return p[Tw]="firebase",p.update=!0,f!=null&&(p[Aw]=f),i("config",u.measurementId,p),u.measurementId}/**
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
 */class Jw{constructor(t){this.app=t}_delete(){return delete lr[this.app.options.appId],Promise.resolve()}}let lr={},rl=[];const il={};let Rs="dataLayer",Xw="gtag",sl,md,al=!1;function Qw(){const e=[];if(Xu()&&e.push("This is a browser extension environment."),zg()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=De.create("invalid-analytics-context",{errorInfo:t});Ce.warn(n.message)}}function Zw(e,t,n){Qw();const r=e.options.appId;if(!r)throw De.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw De.create("no-api-key");if(lr[r]!=null)throw De.create("already-exists",{id:r});if(!al){xw(Rs);const{wrappedGtag:s,gtagCore:a}=Lw(lr,rl,il,Rs,Xw);md=s,sl=a,al=!0}return lr[r]=Yw(e,rl,il,t,sl,Rs,n),new Jw(e)}function e0(e=rf()){e=at(e);const t=Kn(e,Ci);return t.isInitialized()?t.getImmediate():t0(e)}function t0(e,t={}){const n=Kn(e,Ci);if(n.isInitialized()){const i=n.getImmediate();if(_r(t,n.getOptions()))return i;throw De.create("already-initialized")}return n.initialize({options:t})}function n0(e,t,n,r){e=at(e),qw(md,lr[e.app.options.appId],t,n,r).catch(i=>Ce.error(i))}const ol="@firebase/analytics",cl="0.10.0";function r0(){pt(new it(Ci,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Zw(r,i,n)},"PUBLIC")),pt(new it("analytics-internal",e,"PRIVATE")),et(ol,cl),et(ol,cl,"esm2017");function e(t){try{const n=t.getProvider(Ci).getImmediate();return{logEvent:(r,i,s)=>n0(n,r,i,s)}}catch(n){throw De.create("interop-component-reg-failed",{reason:n})}}}r0();const i0={apiKey:"AIzaSyCaFEOlw1_MW6jkKwLM7Wi4DALoTmfx01k",authDomain:"tracker-97bfa.firebaseapp.com",projectId:"tracker-97bfa",storageBucket:"tracker-97bfa.appspot.com",messagingSenderId:"658292198263",appId:"1:658292198263:web:245b2a87dcee09087e6f72",measurementId:"G-EN15KQD2LD"},fo=nf(i0),s0=e0(fo),a0=p_(fo),o0={install:e=>{e.provide("firebase",fo),e.provide("analytics",s0),e.provide("auth",a0)}};function ll(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ll(Object(n),!0).forEach(function(r){ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ll(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ri(e){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ri(e)}function c0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ul(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l0(e,t,n){return t&&ul(e.prototype,t),n&&ul(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ho(e,t){return f0(e)||h0(e,t)||gd(e,t)||m0()}function Fr(e){return u0(e)||d0(e)||gd(e)||p0()}function u0(e){if(Array.isArray(e))return fa(e)}function f0(e){if(Array.isArray(e))return e}function d0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function h0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function gd(e,t){if(e){if(typeof e=="string")return fa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fa(e,t)}}function fa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fl=function(){},po={},vd={},bd=null,yd={mark:fl,measure:fl};try{typeof window<"u"&&(po=window),typeof document<"u"&&(vd=document),typeof MutationObserver<"u"&&(bd=MutationObserver),typeof performance<"u"&&(yd=performance)}catch{}var g0=po.navigator||{},dl=g0.userAgent,hl=dl===void 0?"":dl,jt=po,le=vd,pl=bd,Yr=yd;jt.document;var _t=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",_d=~hl.indexOf("MSIE")||~hl.indexOf("Trident/"),Jr,Xr,Qr,Zr,ei,gt="___FONT_AWESOME___",da=16,wd="fa",Id="svg-inline--fa",dn="data-fa-i2svg",ha="data-fa-pseudo-element",v0="data-fa-pseudo-element-pending",mo="data-prefix",go="data-icon",ml="fontawesome-i2svg",b0="async",y0=["HTML","HEAD","STYLE","SCRIPT"],Ed=function(){try{return!0}catch{return!1}}(),ce="classic",fe="sharp",vo=[ce,fe];function Ur(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ce]}})}var Tr=Ur((Jr={},ge(Jr,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ge(Jr,fe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Jr)),Sr=Ur((Xr={},ge(Xr,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ge(Xr,fe,{solid:"fass",regular:"fasr",light:"fasl"}),Xr)),kr=Ur((Qr={},ge(Qr,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ge(Qr,fe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Qr)),_0=Ur((Zr={},ge(Zr,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ge(Zr,fe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Zr)),w0=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ad="fa-layers-text",I0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,E0=Ur((ei={},ge(ei,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ge(ei,fe,{900:"fass",400:"fasr",300:"fasl"}),ei)),Td=[1,2,3,4,5,6,7,8,9,10],A0=Td.concat([11,12,13,14,15,16,17,18,19,20]),T0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],en={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pr=new Set;Object.keys(Sr[ce]).map(Pr.add.bind(Pr));Object.keys(Sr[fe]).map(Pr.add.bind(Pr));var S0=[].concat(vo,Fr(Pr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",en.GROUP,en.SWAP_OPACITY,en.PRIMARY,en.SECONDARY]).concat(Td.map(function(e){return"".concat(e,"x")})).concat(A0.map(function(e){return"w-".concat(e)})),ur=jt.FontAwesomeConfig||{};function k0(e){var t=le.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function P0(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(le&&typeof le.querySelector=="function"){var C0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];C0.forEach(function(e){var t=ho(e,2),n=t[0],r=t[1],i=P0(k0(n));i!=null&&(ur[r]=i)})}var Sd={styleDefault:"solid",familyDefault:"classic",cssPrefix:wd,replacementClass:Id,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ur.familyPrefix&&(ur.cssPrefix=ur.familyPrefix);var Hn=O(O({},Sd),ur);Hn.autoReplaceSvg||(Hn.observeMutations=!1);var L={};Object.keys(Sd).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){Hn[e]=n,fr.forEach(function(r){return r(L)})},get:function(){return Hn[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){Hn.cssPrefix=t,fr.forEach(function(n){return n(L)})},get:function(){return Hn.cssPrefix}});jt.FontAwesomeConfig=L;var fr=[];function R0(e){return fr.push(e),function(){fr.splice(fr.indexOf(e),1)}}var Tt=da,Ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function O0(e){if(!(!e||!_t)){var t=le.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=le.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return le.head.insertBefore(t,r),e}}var x0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cr(){for(var e=12,t="";e-- >0;)t+=x0[Math.random()*62|0];return t}function Gn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function bo(e){return e.classList?Gn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function kd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N0(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(kd(e[n]),'" ')},"").trim()}function ns(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function yo(e){return e.size!==Ze.size||e.x!==Ze.x||e.y!==Ze.y||e.rotate!==Ze.rotate||e.flipX||e.flipY}function M0(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function D0(e){var t=e.transform,n=e.width,r=n===void 0?da:n,i=e.height,s=i===void 0?da:i,a=e.startCentered,o=a===void 0?!1:a,c="";return o&&_d?c+="translate(".concat(t.x/Tt-r/2,"em, ").concat(t.y/Tt-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Tt,"em), calc(-50% + ").concat(t.y/Tt,"em)) "):c+="translate(".concat(t.x/Tt,"em, ").concat(t.y/Tt,"em) "),c+="scale(".concat(t.size/Tt*(t.flipX?-1:1),", ").concat(t.size/Tt*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var L0=`:root, :host {
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
}`;function Pd(){var e=wd,t=Id,n=L.cssPrefix,r=L.replacementClass,i=L0;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var gl=!1;function Os(){L.autoAddCss&&!gl&&(O0(Pd()),gl=!0)}var F0={mixout:function(){return{dom:{css:Pd,insertCss:Os}}},hooks:function(){return{beforeDOMElementCreation:function(){Os()},beforeI2svg:function(){Os()}}}},vt=jt||{};vt[gt]||(vt[gt]={});vt[gt].styles||(vt[gt].styles={});vt[gt].hooks||(vt[gt].hooks={});vt[gt].shims||(vt[gt].shims=[]);var ze=vt[gt],Cd=[],U0=function e(){le.removeEventListener("DOMContentLoaded",e),Oi=1,Cd.map(function(t){return t()})},Oi=!1;_t&&(Oi=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),Oi||le.addEventListener("DOMContentLoaded",U0));function $0(e){_t&&(Oi?setTimeout(e,0):Cd.push(e))}function $r(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?kd(e):"<".concat(t," ").concat(N0(r),">").concat(s.map($r).join(""),"</").concat(t,">")}function vl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var j0=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},xs=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?j0(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<a;c++)l=s[c],u=o(u,t[l],l,t);return u};function B0(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function pa(e){var t=B0(e);return t.length===1?t[0].toString(16):null}function H0(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function bl(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function ma(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=bl(t);typeof ze.hooks.addPack=="function"&&!i?ze.hooks.addPack(e,bl(t)):ze.styles[e]=O(O({},ze.styles[e]||{}),s),e==="fas"&&ma("fa",t)}var ti,ni,ri,kn=ze.styles,z0=ze.shims,W0=(ti={},ge(ti,ce,Object.values(kr[ce])),ge(ti,fe,Object.values(kr[fe])),ti),_o=null,Rd={},Od={},xd={},Nd={},Md={},V0=(ni={},ge(ni,ce,Object.keys(Tr[ce])),ge(ni,fe,Object.keys(Tr[fe])),ni);function K0(e){return~S0.indexOf(e)}function q0(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!K0(i)?i:null}var Dd=function(){var t=function(s){return xs(kn,function(a,o,c){return a[c]=xs(o,s,{}),a},{})};Rd=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=a})}return i}),Od=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=a})}return i}),Md=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(c){i[c]=a}),i});var n="far"in kn||L.autoFetchSvg,r=xs(z0,function(i,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});xd=r.names,Nd=r.unicodes,_o=rs(L.styleDefault,{family:L.familyDefault})};R0(function(e){_o=rs(e.styleDefault,{family:L.familyDefault})});Dd();function wo(e,t){return(Rd[e]||{})[t]}function G0(e,t){return(Od[e]||{})[t]}function tn(e,t){return(Md[e]||{})[t]}function Ld(e){return xd[e]||{prefix:null,iconName:null}}function Y0(e){var t=Nd[e],n=wo("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Bt(){return _o}var Io=function(){return{prefix:null,iconName:null,rest:[]}};function rs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ce:n,i=Tr[r][e],s=Sr[r][e]||Sr[r][i],a=e in ze.styles?e:null;return s||a||null}var yl=(ri={},ge(ri,ce,Object.keys(kr[ce])),ge(ri,fe,Object.keys(kr[fe])),ri);function is(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},ge(t,ce,"".concat(L.cssPrefix,"-").concat(ce)),ge(t,fe,"".concat(L.cssPrefix,"-").concat(fe)),t),a=null,o=ce;(e.includes(s[ce])||e.some(function(l){return yl[ce].includes(l)}))&&(o=ce),(e.includes(s[fe])||e.some(function(l){return yl[fe].includes(l)}))&&(o=fe);var c=e.reduce(function(l,u){var f=q0(L.cssPrefix,u);if(kn[u]?(u=W0[o].includes(u)?_0[o][u]:u,a=u,l.prefix=u):V0[o].indexOf(u)>-1?(a=u,l.prefix=rs(u,{family:o})):f?l.iconName=f:u!==L.replacementClass&&u!==s[ce]&&u!==s[fe]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var p=a==="fa"?Ld(l.iconName):{},g=tn(l.prefix,l.iconName);p.prefix&&(a=null),l.iconName=p.iconName||g||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!kn.far&&kn.fas&&!L.autoFetchSvg&&(l.prefix="fas")}return l},Io());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===fe&&(kn.fass||L.autoFetchSvg)&&(c.prefix="fass",c.iconName=tn(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Bt()||"fas"),c}var J0=function(){function e(){c0(this,e),this.definitions={}}return l0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=O(O({},n.definitions[o]||{}),a[o]),ma(o,a[o]);var c=kr[ce][o];c&&ma(c,a[o]),Dd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=l)}),n[o][c]=l}),n}}]),e}(),_l=[],Pn={},Ln={},X0=Object.keys(Ln);function Q0(e,t){var n=t.mixoutsTo;return _l=e,Pn={},Object.keys(Ln).forEach(function(r){X0.indexOf(r)===-1&&delete Ln[r]}),_l.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Ri(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Pn[a]||(Pn[a]=[]),Pn[a].push(s[a])})}r.provides&&r.provides(Ln)}),n}function ga(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Pn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function hn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Pn[e]||[];i.forEach(function(s){s.apply(null,n)})}function bt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ln[e]?Ln[e].apply(null,t):void 0}function va(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Bt();if(t)return t=tn(n,t)||t,vl(Fd.definitions,n,t)||vl(ze.styles,n,t)}var Fd=new J0,Z0=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,hn("noAuto")},eI={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _t?(hn("beforeI2svg",t),bt("pseudoElements2svg",t),bt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,$0(function(){nI({autoReplaceSvgRoot:n}),hn("watch",t)})}},tI={icon:function(t){if(t===null)return null;if(Ri(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:tn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=rs(t[0]);return{prefix:r,iconName:tn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(w0))){var i=is(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Bt(),iconName:tn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Bt();return{prefix:s,iconName:tn(s,t)||t}}}},Le={noAuto:Z0,config:L,dom:eI,parse:tI,library:Fd,findIconDefinition:va,toHtml:$r},nI=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(ze.styles).length>0||L.autoFetchSvg)&&_t&&L.autoReplaceSvg&&Le.dom.i2svg({node:r})};function ss(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return $r(r)})}}),Object.defineProperty(e,"node",{get:function(){if(_t){var r=le.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function rI(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(yo(a)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=ns(O(O({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function iI(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:a}),children:r}]}]}function Eo(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,M=A.height,b=i==="fak",_=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(B){return f.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(f.classes).join(" "),x={children:[],attributes:O(O({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(M)})},C=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(S/M*16*.0625,"em")}:{};g&&(x.attributes[dn]=""),c&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||Cr())},children:[c]}),delete x.attributes.title);var j=O(O({},x),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:O(O({},C),f.styles)}),J=r.found&&n.found?bt("generateAbstractMask",j)||{children:[],attributes:{}}:bt("generateAbstractIcon",j)||{children:[],attributes:{}},X=J.children,K=J.attributes;return j.children=X,j.attributes=K,o?iI(j):rI(j)}function wl(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,c=o===void 0?!1:o,l=O(O(O({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[dn]="");var u=O({},a.styles);yo(i)&&(u.transform=D0({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=ns(u);f.length>0&&(l.style=f);var p=[];return p.push({tag:"span",attributes:l,children:[t]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function sI(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ns(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Ns=ze.styles;function ba(e){var t=e[0],n=e[1],r=e.slice(4),i=ho(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(en.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(en.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(en.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var aI={found:!1,width:512,height:512};function oI(e,t){!Ed&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ya(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=Bt()),new Promise(function(r,i){if(bt("missingIconAbstract"),n==="fa"){var s=Ld(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ns[t]&&Ns[t][e]){var a=Ns[t][e];return r(ba(a))}oI(e,t),r(O(O({},aI),{},{icon:L.showMissingIcons&&e?bt("missingIconAbstract")||{}:{}}))})}var Il=function(){},_a=L.measurePerformance&&Yr&&Yr.mark&&Yr.measure?Yr:{mark:Il,measure:Il},nr='FA "6.4.2"',cI=function(t){return _a.mark("".concat(nr," ").concat(t," begins")),function(){return Ud(t)}},Ud=function(t){_a.mark("".concat(nr," ").concat(t," ends")),_a.measure("".concat(nr," ").concat(t),"".concat(nr," ").concat(t," begins"),"".concat(nr," ").concat(t," ends"))},Ao={begin:cI,end:Ud},hi=function(){};function El(e){var t=e.getAttribute?e.getAttribute(dn):null;return typeof t=="string"}function lI(e){var t=e.getAttribute?e.getAttribute(mo):null,n=e.getAttribute?e.getAttribute(go):null;return t&&n}function uI(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function fI(){if(L.autoReplaceSvg===!0)return pi.replace;var e=pi[L.autoReplaceSvg];return e||pi.replace}function dI(e){return le.createElementNS("http://www.w3.org/2000/svg",e)}function hI(e){return le.createElement(e)}function $d(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?dI:hI:n;if(typeof e=="string")return le.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild($d(a,{ceFn:r}))}),i}function pI(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var pi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore($d(i),n)}),n.getAttribute(dn)===null&&L.keepOriginalSource){var r=le.createComment(pI(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~bo(n).indexOf(L.replacementClass))return pi.replace(t);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,c){return c===L.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return $r(o)}).join(`
`);n.setAttribute(dn,""),n.innerHTML=a}};function Al(e){e()}function jd(e,t){var n=typeof t=="function"?t:hi;if(e.length===0)n();else{var r=Al;L.mutateApproach===b0&&(r=jt.requestAnimationFrame||Al),r(function(){var i=fI(),s=Ao.begin("mutate");e.map(i),s(),n()})}}var To=!1;function Bd(){To=!0}function wa(){To=!1}var xi=null;function Tl(e){if(pl&&L.observeMutations){var t=e.treeCallback,n=t===void 0?hi:t,r=e.nodeCallback,i=r===void 0?hi:r,s=e.pseudoElementsCallback,a=s===void 0?hi:s,o=e.observeMutationsRoot,c=o===void 0?le:o;xi=new pl(function(l){if(!To){var u=Bt();Gn(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!El(f.addedNodes[0])&&(L.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&L.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&El(f.target)&&~T0.indexOf(f.attributeName))if(f.attributeName==="class"&&lI(f.target)){var p=is(bo(f.target)),g=p.prefix,A=p.iconName;f.target.setAttribute(mo,g||u),A&&f.target.setAttribute(go,A)}else uI(f.target)&&i(f.target)})}}),_t&&xi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mI(){xi&&xi.disconnect()}function gI(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function vI(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=is(bo(e));return i.prefix||(i.prefix=Bt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=G0(i.prefix,e.innerText)||wo(i.prefix,pa(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function bI(e){var t=Gn(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Cr()):(t["aria-hidden"]="true",t.focusable="false")),t}function yI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vI(e),r=n.iconName,i=n.prefix,s=n.rest,a=bI(e),o=ga("parseNodeAttributes",{},e),c=t.styleParser?gI(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var _I=ze.styles;function Hd(e){var t=L.autoReplaceSvg==="nest"?Sl(e,{styleParser:!1}):Sl(e);return~t.extra.classes.indexOf(Ad)?bt("generateLayersText",e,t):bt("generateSvgReplacementMutation",e,t)}var Ht=new Set;vo.map(function(e){Ht.add("fa-".concat(e))});Object.keys(Tr[ce]).map(Ht.add.bind(Ht));Object.keys(Tr[fe]).map(Ht.add.bind(Ht));Ht=Fr(Ht);function kl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_t)return Promise.resolve();var n=le.documentElement.classList,r=function(f){return n.add("".concat(ml,"-").concat(f))},i=function(f){return n.remove("".concat(ml,"-").concat(f))},s=L.autoFetchSvg?Ht:vo.map(function(u){return"fa-".concat(u)}).concat(Object.keys(_I));s.includes("fa")||s.push("fa");var a=[".".concat(Ad,":not([").concat(dn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(dn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Gn(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Ao.begin("onTree"),l=o.reduce(function(u,f){try{var p=Hd(f);p&&u.push(p)}catch(g){Ed||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(p){jd(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(p){c(),f(p)})})}function wI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hd(e).then(function(n){n&&jd([n],t)})}function II(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:va(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:va(i||{})),e(r,O(O({},n),{},{mask:i}))}}var EI=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ze:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,u=l===void 0?null:l,f=n.title,p=f===void 0?null:f,g=n.titleId,A=g===void 0?null:g,S=n.classes,M=S===void 0?[]:S,b=n.attributes,_=b===void 0?{}:b,x=n.styles,C=x===void 0?{}:x;if(t){var j=t.prefix,J=t.iconName,X=t.icon;return ss(O({type:"icon"},t),function(){return hn("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(p?_["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(A||Cr()):(_["aria-hidden"]="true",_.focusable="false")),Eo({icons:{main:ba(X),mask:c?ba(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:J,transform:O(O({},Ze),i),symbol:a,title:p,maskId:u,titleId:A,extra:{attributes:_,styles:C,classes:M}})})}},AI={mixout:function(){return{icon:II(EI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=kl,n.nodeCallback=wI,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?le:r,s=n.callback,a=s===void 0?function(){}:s;return kl(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ya(i,o),u.iconName?ya(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var M=ho(S,2),b=M[0],_=M[1];g([n,Eo({icons:{main:b,mask:_},prefix:o,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:a,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,c=ns(o);c.length>0&&(i.style=c);var l;return yo(a)&&(l=bt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},TI={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return ss({type:"layer"},function(){hn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Fr(s)).join(" ")},children:a}]})}}}},SI={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return ss({type:"counter",content:n},function(){return hn("beforeDOMElementCreation",{content:n,params:r}),sI({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Fr(o))}})})}}}},kI={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ze:i,a=r.title,o=a===void 0?null:a,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,p=r.styles,g=p===void 0?{}:p;return ss({type:"text",content:n},function(){return hn("beforeDOMElementCreation",{content:n,params:r}),wl({content:n,transform:O(O({},Ze),s),title:o,extra:{attributes:f,styles:g,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Fr(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,c=null;if(_d){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,c=u.height/l}return L.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,wl({content:n.innerHTML,width:o,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},PI=new RegExp('"',"ug"),Pl=[1105920,1112319];function CI(e){var t=e.replace(PI,""),n=H0(t,0),r=n>=Pl[0]&&n<=Pl[1],i=t.length===2?t[0]===t[1]:!1;return{value:pa(i?t[0]:t),isSecondary:r||i}}function Cl(e,t){var n="".concat(v0).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Gn(e.children),a=s.filter(function(X){return X.getAttribute(ha)===t})[0],o=jt.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(I0),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),p=~["Sharp"].indexOf(c[2])?fe:ce,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Sr[p][c[2].toLowerCase()]:E0[p][l],A=CI(f),S=A.value,M=A.isSecondary,b=c[0].startsWith("FontAwesome"),_=wo(g,S),x=_;if(b){var C=Y0(S);C.iconName&&C.prefix&&(_=C.iconName,g=C.prefix)}if(_&&!M&&(!a||a.getAttribute(mo)!==g||a.getAttribute(go)!==x)){e.setAttribute(n,x),a&&e.removeChild(a);var j=yI(),J=j.extra;J.attributes[ha]=t,ya(_,g).then(function(X){var K=Eo(O(O({},j),{},{icons:{main:X,mask:Io()},prefix:g,iconName:x,extra:J,watchable:!0})),B=le.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(B,e.firstChild):e.appendChild(B),B.outerHTML=K.map(function(ae){return $r(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function RI(e){return Promise.all([Cl(e,"::before"),Cl(e,"::after")])}function OI(e){return e.parentNode!==document.head&&!~y0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ha)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Rl(e){if(_t)return new Promise(function(t,n){var r=Gn(e.querySelectorAll("*")).filter(OI).map(RI),i=Ao.begin("searchPseudoElements");Bd(),Promise.all(r).then(function(){i(),wa(),t()}).catch(function(){i(),wa(),n()})})}var xI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Rl,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?le:r;L.searchPseudoElements&&Rl(i)}}},Ol=!1,NI={mixout:function(){return{dom:{unwatch:function(){Bd(),Ol=!0}}}},hooks:function(){return{bootstrap:function(){Tl(ga("mutationObserverCallbacks",{}))},noAuto:function(){mI()},watch:function(n){var r=n.observeMutationsRoot;Ol?wa():Tl(ga("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xl=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},MI={mixout:function(){return{parse:{transform:function(n){return xl(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=xl(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},p={transform:"translate(".concat(a/2*-1," -256)")},g={outer:o,inner:f,path:p};return{tag:"g",attributes:O({},g.outer),children:[{tag:"g",attributes:O({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),g.path)}]}]}}}},Ms={x:0,y:0,width:"100%",height:"100%"};function Nl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function DI(e){return e.tag==="g"?e.children:[e]}var LI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?is(i.split(" ").map(function(a){return a.trim()})):Io();return s.prefix||(s.prefix=Bt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,u=s.icon,f=a.width,p=a.icon,g=M0({transform:c,containerWidth:f,iconWidth:l}),A={tag:"rect",attributes:O(O({},Ms),{},{fill:"white"})},S=u.children?{children:u.children.map(Nl)}:{},M={tag:"g",attributes:O({},g.inner),children:[Nl(O({tag:u.tag,attributes:O(O({},u.attributes),g.path)},S))]},b={tag:"g",attributes:O({},g.outer),children:[M]},_="mask-".concat(o||Cr()),x="clip-".concat(o||Cr()),C={tag:"mask",attributes:O(O({},Ms),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:DI(p)},C]};return r.push(j,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(_,")")},Ms)}),{children:r,attributes:i}}}},FI={provides:function(t){var n=!1;jt.matchMedia&&(n=jt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=O(O({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},UI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},$I=[F0,AI,TI,SI,kI,xI,NI,MI,LI,FI,UI];Q0($I,{mixoutsTo:Le});Le.noAuto;Le.config;var jI=Le.library;Le.dom;var Ia=Le.parse;Le.findIconDefinition;Le.toHtml;var BI=Le.icon;Le.layer;Le.text;Le.counter;var HI={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};function Ml(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ut(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ml(Object(n),!0).forEach(function(r){Se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ml(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(e)}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function WI(e,t){if(e==null)return{};var n=zI(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var VI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zd={exports:{}};(function(e){(function(t){var n=function(b,_,x){if(!l(_)||f(_)||p(_)||g(_)||c(_))return _;var C,j=0,J=0;if(u(_))for(C=[],J=_.length;j<J;j++)C.push(n(b,_[j],x));else{C={};for(var X in _)Object.prototype.hasOwnProperty.call(_,X)&&(C[b(X,x)]=n(b,_[X],x))}return C},r=function(b,_){_=_||{};var x=_.separator||"_",C=_.split||/(?=[A-Z])/;return b.split(C).join(x)},i=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,x){return x?x.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var _=i(b);return _.substr(0,1).toUpperCase()+_.substr(1)},a=function(b,_){return r(b,_).toLowerCase()},o=Object.prototype.toString,c=function(b){return typeof b=="function"},l=function(b){return b===Object(b)},u=function(b){return o.call(b)=="[object Array]"},f=function(b){return o.call(b)=="[object Date]"},p=function(b){return o.call(b)=="[object RegExp]"},g=function(b){return o.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,_){var x=_&&"process"in _?_.process:_;return typeof x!="function"?b:function(C,j){return x(C,b,j)}},M={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(b,_){return n(S(i,_),b)},decamelizeKeys:function(b,_){return n(S(a,_),b,_)},pascalizeKeys:function(b,_){return n(S(s,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(VI)})(zd);var KI=zd.exports,qI=["class","style"];function GI(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=KI.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function YI(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Wd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Wd(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=YI(u);break;case"style":c.style=GI(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=WI(n,qI);return Wa(e.tag,ut(ut(ut({},t),{},{class:i.class,style:ut(ut({},i.style),a)},i.attrs),o),r)}var Vd=!1;try{Vd=!0}catch{}function JI(){if(!Vd&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ds(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Se({},e,t):{}}function XI(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Se(t,"fa-".concat(e.size),e.size!==null),Se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Se(t,"fa-pull-".concat(e.pull),e.pull!==null),Se(t,"fa-swap-opacity",e.swapOpacity),Se(t,"fa-bounce",e.bounce),Se(t,"fa-shake",e.shake),Se(t,"fa-beat",e.beat),Se(t,"fa-fade",e.fade),Se(t,"fa-beat-fade",e.beatFade),Se(t,"fa-flash",e.flash),Se(t,"fa-spin-pulse",e.spinPulse),Se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Dl(e){if(e&&Ni(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ia.icon)return Ia.icon(e);if(e===null)return null;if(Ni(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var QI=zi({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ve(function(){return Dl(t.icon)}),s=ve(function(){return Ds("classes",XI(t))}),a=ve(function(){return Ds("transform",typeof t.transform=="string"?Ia.transform(t.transform):t.transform)}),o=ve(function(){return Ds("mask",Dl(t.mask))}),c=ve(function(){return BI(i.value,ut(ut(ut(ut({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title}))});Nn(c,function(u){if(!u)return JI("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var l=ve(function(){return c.value?Wd(c.value.abstract[0],{},r):null});return function(){return l.value}}});const ZI={install:e=>{jI.add(HI),e.component("font-awesome-icon",QI)}};const jr=fm(Im);jr.use(Wu);jr.use(o0);jr.use(T_);jr.use(ZI);jr.mount("#app");export{Rt as G,xu as _,nE as a,Tn as b,Pu as c,zi as d,Qh as e,pe as f,p_ as g,aE as h,Me as i,cE as j,Ot as k,ku as o,tE as p,La as r,oE as s,eE as t,sE as u,iE as v,rE as w};
