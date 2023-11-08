(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ru(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ye={},nr=[],jt=()=>{},gw=()=>!1,_w=/^on[^a-z]/,Ma=t=>_w.test(t),ku=t=>t.startsWith("onUpdate:"),ze=Object.assign,Pu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vw=Object.prototype.hasOwnProperty,re=(t,e)=>vw.call(t,e),K=Array.isArray,ir=t=>La(t)==="[object Map]",Wm=t=>La(t)==="[object Set]",Y=t=>typeof t=="function",je=t=>typeof t=="string",Ou=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Vm=t=>(Se(t)||Y(t))&&Y(t.then)&&Y(t.catch),zm=Object.prototype.toString,La=t=>zm.call(t),yw=t=>La(t).slice(8,-1),Km=t=>La(t)==="[object Object]",Nu=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$o=Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ww=/-(\w)/g,on=Fa(t=>t.replace(ww,(e,n)=>n?n.toUpperCase():"")),bw=/\B([A-Z])/g,Ir=Fa(t=>t.replace(bw,"-$1").toLowerCase()),Ua=Fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),kl=Fa(t=>t?`on${Ua(t)}`:""),Ii=(t,e)=>!Object.is(t,e),Bo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Jo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_c=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lh;const vc=()=>Lh||(Lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xu(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=je(i)?Cw(i):xu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(je(t)||Se(t))return t}const Ew=/;(?![^(]*\))/g,Iw=/:([^]+)/,Tw=/\/\*[^]*?\*\//g;function Cw(t){const e={};return t.replace(Tw,"").split(Ew).forEach(n=>{if(n){const i=n.split(Iw);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Du(t){let e="";if(je(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const i=Du(t[n]);i&&(e+=i+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Aw=Ru(Sw);function qm(t){return!!t||t===""}const Rw=t=>je(t)?t:t==null?"":K(t)||Se(t)&&(t.toString===zm||!Y(t.toString))?JSON.stringify(t,Gm,2):String(t),Gm=(t,e)=>e&&e.__v_isRef?Gm(t,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Wm(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!K(e)&&!Km(e)?String(e):e;let gt;class Ym{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Xm(t){return new Ym(t)}function kw(t,e=gt){e&&e.active&&e.effects.push(t)}function Mu(){return gt}function Jm(t){gt&&gt.cleanups.push(t)}const Lu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qm=t=>(t.w&Kn)>0,Zm=t=>(t.n&Kn)>0,Pw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kn},Ow=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Qm(r)&&!Zm(r)?r.delete(t):e[n++]=r,r.w&=~Kn,r.n&=~Kn}e.length=n}},Qo=new WeakMap;let Kr=0,Kn=1;const yc=30;let Dt;const _i=Symbol(""),wc=Symbol("");class Fu{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kw(this,i)}run(){if(!this.active)return this.fn();let e=Dt,n=jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,jn=!0,Kn=1<<++Kr,Kr<=yc?Pw(this):Fh(this),this.fn()}finally{Kr<=yc&&Ow(this),Kn=1<<--Kr,Dt=this.parent,jn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Fh(this),this.onStop&&this.onStop(),this.active=!1)}}function Fh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let jn=!0;const eg=[];function Tr(){eg.push(jn),jn=!1}function Cr(){const t=eg.pop();jn=t===void 0?!0:t}function dt(t,e,n){if(jn&&Dt){let i=Qo.get(t);i||Qo.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Lu()),tg(r)}}function tg(t,e){let n=!1;Kr<=yc?Zm(t)||(t.n|=Kn,n=!Qm(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function gn(t,e,n,i,r,s){const o=Qo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Nu(n)&&a.push(o.get("length")):(a.push(o.get(_i)),ir(t)&&a.push(o.get(wc)));break;case"delete":K(t)||(a.push(o.get(_i)),ir(t)&&a.push(o.get(wc)));break;case"set":ir(t)&&a.push(o.get(_i));break}if(a.length===1)a[0]&&bc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);bc(Lu(l))}}function bc(t,e){const n=K(t)?t:[...t];for(const i of n)i.computed&&Uh(i);for(const i of n)i.computed||Uh(i)}function Uh(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Nw(t,e){var n;return(n=Qo.get(t))==null?void 0:n.get(e)}const xw=Ru("__proto__,__v_isRef,__isVue"),ng=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ou)),jh=Dw();function Dw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=se(this);for(let s=0,o=this.length;s<o;s++)dt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(se)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Tr();const i=se(this)[e].apply(this,n);return Cr(),i}}),t}function Mw(t){const e=se(this);return dt(e,"has",t),e.hasOwnProperty(t)}class ig{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const r=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&i===(r?s?Gw:ag:s?og:sg).get(e))return e;const o=K(e);if(!r){if(o&&re(jh,n))return Reflect.get(jh,n,i);if(n==="hasOwnProperty")return Mw}const a=Reflect.get(e,n,i);return(Ou(n)?ng.has(n):xw(n))||(r||dt(e,"get",n),s)?a:Re(a)?o&&Nu(n)?a:a.value:Se(a)?r?$a(a):Vs(a):a}}class rg extends ig{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(pr(s)&&Re(s)&&!Re(i))return!1;if(!this._shallow&&(!Zo(i)&&!pr(i)&&(s=se(s),i=se(i)),!K(e)&&Re(s)&&!Re(i)))return s.value=i,!0;const o=K(e)&&Nu(n)?Number(n)<e.length:re(e,n),a=Reflect.set(e,n,i,r);return e===se(r)&&(o?Ii(i,s)&&gn(e,"set",n,i):gn(e,"add",n,i)),a}deleteProperty(e,n){const i=re(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&gn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ou(n)||!ng.has(n))&&dt(e,"has",n),i}ownKeys(e){return dt(e,"iterate",K(e)?"length":_i),Reflect.ownKeys(e)}}class Lw extends ig{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fw=new rg,Uw=new Lw,jw=new rg(!0),Uu=t=>t,ja=t=>Reflect.getPrototypeOf(t);function go(t,e,n=!1,i=!1){t=t.__v_raw;const r=se(t),s=se(e);n||(Ii(e,s)&&dt(r,"get",e),dt(r,"get",s));const{has:o}=ja(r),a=i?Uu:n?Bu:ds;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function _o(t,e=!1){const n=this.__v_raw,i=se(n),r=se(t);return e||(Ii(t,r)&&dt(i,"has",t),dt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function vo(t,e=!1){return t=t.__v_raw,!e&&dt(se(t),"iterate",_i),Reflect.get(t,"size",t)}function $h(t){t=se(t);const e=se(this);return ja(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function Bh(t,e){e=se(e);const n=se(this),{has:i,get:r}=ja(n);let s=i.call(n,t);s||(t=se(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Ii(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function Hh(t){const e=se(this),{has:n,get:i}=ja(e);let r=n.call(e,t);r||(t=se(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&gn(e,"delete",t,void 0),s}function Wh(){const t=se(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function yo(t,e){return function(i,r){const s=this,o=s.__v_raw,a=se(o),l=e?Uu:t?Bu:ds;return!t&&dt(a,"iterate",_i),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function wo(t,e,n){return function(...i){const r=this.__v_raw,s=se(r),o=ir(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Uu:e?Bu:ds;return!e&&dt(s,"iterate",l?wc:_i),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function $w(){const t={get(s){return go(this,s)},get size(){return vo(this)},has:_o,add:$h,set:Bh,delete:Hh,clear:Wh,forEach:yo(!1,!1)},e={get(s){return go(this,s,!1,!0)},get size(){return vo(this)},has:_o,add:$h,set:Bh,delete:Hh,clear:Wh,forEach:yo(!1,!0)},n={get(s){return go(this,s,!0)},get size(){return vo(this,!0)},has(s){return _o.call(this,s,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:yo(!0,!1)},i={get(s){return go(this,s,!0,!0)},get size(){return vo(this,!0)},has(s){return _o.call(this,s,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:yo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=wo(s,!1,!1),n[s]=wo(s,!0,!1),e[s]=wo(s,!1,!0),i[s]=wo(s,!0,!0)}),[t,n,e,i]}const[Bw,Hw,Ww,Vw]=$w();function ju(t,e){const n=e?t?Vw:Ww:t?Hw:Bw;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(re(n,r)&&r in i?n:i,r,s)}const zw={get:ju(!1,!1)},Kw={get:ju(!1,!0)},qw={get:ju(!0,!1)},sg=new WeakMap,og=new WeakMap,ag=new WeakMap,Gw=new WeakMap;function Yw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xw(t){return t.__v_skip||!Object.isExtensible(t)?0:Yw(yw(t))}function Vs(t){return pr(t)?t:$u(t,!1,Fw,zw,sg)}function lg(t){return $u(t,!1,jw,Kw,og)}function $a(t){return $u(t,!0,Uw,qw,ag)}function $u(t,e,n,i,r){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Xw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function $n(t){return pr(t)?$n(t.__v_raw):!!(t&&t.__v_isReactive)}function pr(t){return!!(t&&t.__v_isReadonly)}function Zo(t){return!!(t&&t.__v_isShallow)}function cg(t){return $n(t)||pr(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function Ba(t){return Jo(t,"__v_skip",!0),t}const ds=t=>Se(t)?Vs(t):t,Bu=t=>Se(t)?$a(t):t;function Hu(t){jn&&Dt&&(t=se(t),tg(t.dep||(t.dep=Lu())))}function Wu(t,e){t=se(t);const n=t.dep;n&&bc(n)}function Re(t){return!!(t&&t.__v_isRef===!0)}function Et(t){return fg(t,!1)}function ug(t){return fg(t,!0)}function fg(t,e){return Re(t)?t:new Jw(t,e)}class Jw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:ds(e)}get value(){return Hu(this),this._value}set value(e){const n=this.__v_isShallow||Zo(e)||pr(e);e=n?e:se(e),Ii(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ds(e),Wu(this))}}function it(t){return Re(t)?t.value:t}const Qw={get:(t,e,n)=>it(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function hg(t){return $n(t)?t:new Proxy(t,Qw)}class Zw{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:i}=e(()=>Hu(this),()=>Wu(this));this._get=n,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function eb(t){return new Zw(t)}function tb(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=dg(t,n);return e}class nb{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Nw(se(this._object),this._key)}}class ib{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function rb(t,e,n){return Re(t)?t:Y(t)?new ib(t):Se(t)&&arguments.length>1?dg(t,e,n):Et(t)}function dg(t,e,n){const i=t[e];return Re(i)?i:new nb(t,e,n)}class sb{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Fu(e,()=>{this._dirty||(this._dirty=!0,Wu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=se(this);return Hu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ob(t,e,n=!1){let i,r;const s=Y(t);return s?(i=t,r=jt):(i=t.get,r=t.set),new sb(i,r,s||!r,n)}function Bn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Ha(s,e,n)}return r}function $t(t,e,n,i){if(Y(t)){const s=Bn(t,e,n,i);return s&&Vm(s)&&s.catch(o=>{Ha(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push($t(t[s],e,n,i));return r}function Ha(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Bn(l,null,10,[t,o,a]);return}}ab(t,n,r,i)}function ab(t,e,n,i=!0){console.error(t)}let ps=!1,Ec=!1;const Xe=[];let Jt=0;const rr=[];let un=null,ai=0;const pg=Promise.resolve();let Vu=null;function zs(t){const e=Vu||pg;return t?e.then(this?t.bind(this):t):e}function lb(t){let e=Jt+1,n=Xe.length;for(;e<n;){const i=e+n>>>1;ms(Xe[i])<t?e=i+1:n=i}return e}function zu(t){(!Xe.length||!Xe.includes(t,ps&&t.allowRecurse?Jt+1:Jt))&&(t.id==null?Xe.push(t):Xe.splice(lb(t.id),0,t),mg())}function mg(){!ps&&!Ec&&(Ec=!0,Vu=pg.then(_g))}function cb(t){const e=Xe.indexOf(t);e>Jt&&Xe.splice(e,1)}function ub(t){K(t)?rr.push(...t):(!un||!un.includes(t,t.allowRecurse?ai+1:ai))&&rr.push(t),mg()}function Vh(t,e=ps?Jt+1:0){for(;e<Xe.length;e++){const n=Xe[e];n&&n.pre&&(Xe.splice(e,1),e--,n())}}function gg(t){if(rr.length){const e=[...new Set(rr)];if(rr.length=0,un){un.push(...e);return}for(un=e,un.sort((n,i)=>ms(n)-ms(i)),ai=0;ai<un.length;ai++)un[ai]();un=null,ai=0}}const ms=t=>t.id==null?1/0:t.id,fb=(t,e)=>{const n=ms(t)-ms(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function _g(t){Ec=!1,ps=!0,Xe.sort(fb);const e=jt;try{for(Jt=0;Jt<Xe.length;Jt++){const n=Xe[Jt];n&&n.active!==!1&&Bn(n,null,14)}}finally{Jt=0,Xe.length=0,gg(),ps=!1,Vu=null,(Xe.length||rr.length)&&_g()}}function hb(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ye;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||ye;h&&(r=n.map(m=>je(m)?m.trim():m)),f&&(r=n.map(_c))}let a,l=i[a=kl(e)]||i[a=kl(on(e))];!l&&s&&(l=i[a=kl(Ir(e))]),l&&$t(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(c,t,6,r)}}function vg(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=vg(c,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Se(t)&&i.set(t,null),null):(K(s)?s.forEach(l=>o[l]=null):ze(o,s),Se(t)&&i.set(t,o),o)}function Wa(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Ir(e))||re(t,e))}let Fe=null,Va=null;function ea(t){const e=Fe;return Fe=t,Va=t&&t.type.__scopeId||null,e}function db(t){Va=t}function pb(){Va=null}function vi(t,e=Fe,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&td(-1);const s=ea(e);let o;try{o=t(...r)}finally{ea(s),i._d&&td(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Pl(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:_,inheritAttrs:b}=t;let R,v;const w=ea(t);try{if(n.shapeFlag&4){const S=r||i;R=Xt(u.call(S,S,f,s,m,h,_)),v=l}else{const S=e;R=Xt(S.length>1?S(s,{attrs:l,slots:a,emit:c}):S(s,null)),v=e.props?l:mb(l)}}catch(S){ts.length=0,Ha(S,t,1),R=oe(qn)}let O=R;if(v&&b!==!1){const S=Object.keys(v),{shapeFlag:B}=O;S.length&&B&7&&(o&&S.some(ku)&&(v=gb(v,o)),O=mr(O,v))}return n.dirs&&(O=mr(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),R=O,ea(w),R}const mb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},gb=(t,e)=>{const n={};for(const i in t)(!ku(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function _b(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?zh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Wa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zh(i,o,c):!0:!!o;return!1}function zh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Wa(n,s))return!0}return!1}function vb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yb=t=>t.__isSuspense;function wb(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):ub(t)}function bb(t,e){return Ku(t,null,e)}const bo={};function _n(t,e,n){return Ku(t,e,n)}function Ku(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=ye){var a;const l=Mu()===((a=Ne)==null?void 0:a.scope)?Ne:null;let c,u=!1,f=!1;if(Re(t)?(c=()=>t.value,u=Zo(t)):$n(t)?(c=()=>t,i=!0):K(t)?(f=!0,u=t.some(S=>$n(S)||Zo(S)),c=()=>t.map(S=>{if(Re(S))return S.value;if($n(S))return ci(S);if(Y(S))return Bn(S,l,2)})):Y(t)?e?c=()=>Bn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),$t(t,l,3,[m])}:c=jt,e&&i){const S=c;c=()=>ci(S())}let h,m=S=>{h=w.onStop=()=>{Bn(S,l,4)}},_;if(ys)if(m=jt,e?n&&$t(e,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const S=gE();_=S.__watcherHandles||(S.__watcherHandles=[])}else return jt;let b=f?new Array(t.length).fill(bo):bo;const R=()=>{if(w.active)if(e){const S=w.run();(i||u||(f?S.some((B,Q)=>Ii(B,b[Q])):Ii(S,b)))&&(h&&h(),$t(e,l,3,[S,b===bo?void 0:f&&b[0]===bo?[]:b,m]),b=S)}else w.run()};R.allowRecurse=!!e;let v;r==="sync"?v=R:r==="post"?v=()=>at(R,l&&l.suspense):(R.pre=!0,l&&(R.id=l.uid),v=()=>zu(R));const w=new Fu(c,v);e?n?R():b=w.run():r==="post"?at(w.run.bind(w),l&&l.suspense):w.run();const O=()=>{w.stop(),l&&l.scope&&Pu(l.scope.effects,w)};return _&&_.push(O),O}function Eb(t,e,n){const i=this.proxy,r=je(t)?t.includes(".")?yg(i,t):()=>i[t]:t.bind(i,i);let s;Y(e)?s=e:(s=e.handler,n=e);const o=Ne;gr(this);const a=Ku(r,s.bind(i),n);return o?gr(o):yi(),a}function yg(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ci(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))ci(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)ci(t[n],e);else if(Wm(t)||ir(t))t.forEach(n=>{ci(n,e)});else if(Km(t))for(const n in t)ci(t[n],e);return t}function GD(t,e){const n=Fe;if(n===null)return t;const i=Ga(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ye]=e[s];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&ci(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ii(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Tr(),$t(l,n,8,[t.el,a,t,e]),Cr())}}/*! #__NO_SIDE_EFFECTS__ */function It(t,e){return Y(t)?(()=>ze({name:t.name},e,{setup:t}))():t}const Zr=t=>!!t.type.__asyncLoader,wg=t=>t.type.__isKeepAlive;function Ib(t,e){bg(t,"a",e)}function Tb(t,e){bg(t,"da",e)}function bg(t,e,n=Ne){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(za(e,i,n),n){let r=n.parent;for(;r&&r.parent;)wg(r.parent.vnode)&&Cb(i,e,n,r),r=r.parent}}function Cb(t,e,n,i){const r=za(e,t,i,!0);Gu(()=>{Pu(i[e],r)},n)}function za(t,e,n=Ne,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Tr(),gr(n);const a=$t(e,n,t,o);return yi(),Cr(),a});return i?r.unshift(s):r.push(s),s}}const Tn=t=>(e,n=Ne)=>(!ys||t==="sp")&&za(t,(...i)=>e(...i),n),Sb=Tn("bm"),qu=Tn("m"),Ab=Tn("bu"),Rb=Tn("u"),kb=Tn("bum"),Gu=Tn("um"),Pb=Tn("sp"),Ob=Tn("rtg"),Nb=Tn("rtc");function xb(t,e=Ne){za("ec",t,e)}const Eg="components";function gs(t,e){return Mb(Eg,t,!0,e)||t}const Db=Symbol.for("v-ndc");function Mb(t,e,n=!0,i=!1){const r=Fe||Ne;if(r){const s=r.type;if(t===Eg){const a=dE(s,!1);if(a&&(a===e||a===on(e)||a===Ua(on(e))))return s}const o=Kh(r[t]||s[t],e)||Kh(r.appContext[t],e);return!o&&i?s:o}}function Kh(t,e){return t&&(t[e]||t[on(e)]||t[Ua(on(e))])}function Lb(t,e,n={},i,r){if(Fe.isCE||Fe.parent&&Zr(Fe.parent)&&Fe.parent.isCE)return e!=="default"&&(n.name=e),oe("slot",n,i&&i());let s=t[e];s&&s._c&&(s._d=!1),ke();const o=s&&Ig(s(n)),a=sr(ct,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ig(t){return t.some(e=>na(e)?!(e.type===qn||e.type===ct&&!Ig(e.children)):!0)?t:null}const Ic=t=>t?Dg(t)?Ga(t)||t.proxy:Ic(t.parent):null,es=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ic(t.parent),$root:t=>Ic(t.root),$emit:t=>t.emit,$options:t=>Yu(t),$forceUpdate:t=>t.f||(t.f=()=>zu(t.update)),$nextTick:t=>t.n||(t.n=zs.bind(t.proxy)),$watch:t=>Eb.bind(t)}),Ol=(t,e)=>t!==ye&&!t.__isScriptSetup&&re(t,e),Fb={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ol(i,e))return o[e]=1,i[e];if(r!==ye&&re(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&re(c,e))return o[e]=3,s[e];if(n!==ye&&re(n,e))return o[e]=4,n[e];Tc&&(o[e]=0)}}const u=es[e];let f,h;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ye&&re(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,re(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ol(r,e)?(r[e]=n,!0):i!==ye&&re(i,e)?(i[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ye&&re(t,o)||Ol(e,o)||(a=s[0])&&re(a,o)||re(i,o)||re(es,o)||re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qh(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tc=!0;function Ub(t){const e=Yu(t),n=t.proxy,i=t.ctx;Tc=!1,e.beforeCreate&&Gh(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:b,deactivated:R,beforeDestroy:v,beforeUnmount:w,destroyed:O,unmounted:S,render:B,renderTracked:Q,renderTriggered:X,errorCaptured:D,serverPrefetch:U,expose:J,inheritAttrs:Ke,components:pt,directives:Ct,filters:ni}=e;if(c&&jb(c,i,null),o)for(const ge in o){const le=o[ge];Y(le)&&(i[ge]=le.bind(n))}if(r){const ge=r.call(n,n);Se(ge)&&(t.data=Vs(ge))}if(Tc=!0,s)for(const ge in s){const le=s[ge],ln=Y(le)?le.bind(n,n):Y(le.get)?le.get.bind(n,n):jt,An=!Y(le)&&Y(le.set)?le.set.bind(n):jt,qt=Ee({get:ln,set:An});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>qt.value,set:st=>qt.value=st})}if(a)for(const ge in a)Tg(a[ge],i,n,ge);if(l){const ge=Y(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(le=>{Ho(le,ge[le])})}u&&Gh(u,t,"c");function ae(ge,le){K(le)?le.forEach(ln=>ge(ln.bind(n))):le&&ge(le.bind(n))}if(ae(Sb,f),ae(qu,h),ae(Ab,m),ae(Rb,_),ae(Ib,b),ae(Tb,R),ae(xb,D),ae(Nb,Q),ae(Ob,X),ae(kb,w),ae(Gu,S),ae(Pb,U),K(J))if(J.length){const ge=t.exposed||(t.exposed={});J.forEach(le=>{Object.defineProperty(ge,le,{get:()=>n[le],set:ln=>n[le]=ln})})}else t.exposed||(t.exposed={});B&&t.render===jt&&(t.render=B),Ke!=null&&(t.inheritAttrs=Ke),pt&&(t.components=pt),Ct&&(t.directives=Ct)}function jb(t,e,n=jt){K(t)&&(t=Cc(t));for(const i in t){const r=t[i];let s;Se(r)?"default"in r?s=Ue(r.from||i,r.default,!0):s=Ue(r.from||i):s=Ue(r),Re(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Gh(t,e,n){$t(K(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tg(t,e,n,i){const r=i.includes(".")?yg(n,i):()=>n[i];if(je(t)){const s=e[t];Y(s)&&_n(r,s)}else if(Y(t))_n(r,t.bind(n));else if(Se(t))if(K(t))t.forEach(s=>Tg(s,e,n,i));else{const s=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(s)&&_n(r,s,t)}}function Yu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ta(l,c,o,!0)),ta(l,e,o)),Se(e)&&s.set(e,l),l}function ta(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ta(t,s,n,!0),r&&r.forEach(o=>ta(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=$b[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $b={data:Yh,props:Xh,emits:Xh,methods:qr,computed:qr,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:qr,directives:qr,watch:Hb,provide:Yh,inject:Bb};function Yh(t,e){return e?t?function(){return ze(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Bb(t,e){return qr(Cc(t),Cc(e))}function Cc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function qr(t,e){return t?ze(Object.create(null),t,e):e}function Xh(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:ze(Object.create(null),qh(t),qh(e??{})):e}function Hb(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const i in e)n[i]=tt(t[i],e[i]);return n}function Cg(){return{app:null,config:{isNativeTag:gw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wb=0;function Vb(t,e){return function(i,r=null){Y(i)||(i=ze({},i)),r!=null&&!Se(r)&&(r=null);const s=Cg(),o=new WeakSet;let a=!1;const l=s.app={_uid:Wb++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:_E,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=oe(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ga(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){_s=l;try{return c()}finally{_s=null}}};return l}}let _s=null;function Ho(t,e){if(Ne){let n=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===n&&(n=Ne.provides=Object.create(i)),n[t]=e}}function Ue(t,e,n=!1){const i=Ne||Fe;if(i||_s){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:_s._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(i&&i.proxy):e}}function zb(){return!!(Ne||Fe||_s)}function Kb(t,e,n,i=!1){const r={},s={};Jo(s,qa,1),t.propsDefaults=Object.create(null),Sg(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:lg(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function qb(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=se(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Wa(t.emitsOptions,h))continue;const m=e[h];if(l)if(re(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const _=on(h);r[_]=Sc(l,a,_,m,t,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Sg(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!re(e,f)&&((u=Ir(f))===f||!re(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Sc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!re(e,f))&&(delete s[f],c=!0)}c&&gn(t,"set","$attrs")}function Sg(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($o(l))continue;const c=e[l];let u;r&&re(r,u=on(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Wa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=se(n),c=a||ye;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Sc(r,l,f,c[f],t,!re(c,f))}}return o}function Sc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(gr(r),i=c[n]=l.call(null,e),yi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ir(n))&&(i=!0))}return i}function Ag(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=f=>{l=!0;const[h,m]=Ag(f,e,!0);ze(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Se(t)&&i.set(t,nr),nr;if(K(s))for(let u=0;u<s.length;u++){const f=on(s[u]);Jh(f)&&(o[f]=ye)}else if(s)for(const u in s){const f=on(u);if(Jh(f)){const h=s[u],m=o[f]=K(h)||Y(h)?{type:h}:ze({},h);if(m){const _=ed(Boolean,m.type),b=ed(String,m.type);m[0]=_>-1,m[1]=b<0||_<b,(_>-1||re(m,"default"))&&a.push(f)}}}const c=[o,a];return Se(t)&&i.set(t,c),c}function Jh(t){return t[0]!=="$"}function Qh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Zh(t,e){return Qh(t)===Qh(e)}function ed(t,e){return K(e)?e.findIndex(n=>Zh(n,t)):Y(e)&&Zh(e,t)?0:-1}const Rg=t=>t[0]==="_"||t==="$stable",Xu=t=>K(t)?t.map(Xt):[Xt(t)],Gb=(t,e,n)=>{if(e._n)return e;const i=vi((...r)=>Xu(e(...r)),n);return i._c=!1,i},kg=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Rg(r))continue;const s=t[r];if(Y(s))e[r]=Gb(r,s,i);else if(s!=null){const o=Xu(s);e[r]=()=>o}}},Pg=(t,e)=>{const n=Xu(e);t.slots.default=()=>n},Yb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),Jo(e,"_",n)):kg(e,t.slots={})}else t.slots={},e&&Pg(t,e);Jo(t.slots,qa,1)},Xb=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ye;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(ze(r,e),!n&&a===1&&delete r._):(s=!e.$stable,kg(e,r)),o=e}else e&&(Pg(t,e),o={default:1});if(s)for(const a in r)!Rg(a)&&o[a]==null&&delete r[a]};function Ac(t,e,n,i,r=!1){if(K(t)){t.forEach((h,m)=>Ac(h,e&&(K(e)?e[m]:e),n,i,r));return}if(Zr(i)&&!r)return;const s=i.shapeFlag&4?Ga(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(je(c)?(u[c]=null,re(f,c)&&(f[c]=null)):Re(c)&&(c.value=null)),Y(l))Bn(l,a,12,[o,u]);else{const h=je(l),m=Re(l);if(h||m){const _=()=>{if(t.f){const b=h?re(f,l)?f[l]:u[l]:l.value;r?K(b)&&Pu(b,s):K(b)?b.includes(s)||b.push(s):h?(u[l]=[s],re(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,re(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,at(_,n)):_()}}}const at=wb;function Jb(t){return Qb(t)}function Qb(t,e){const n=vc();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=jt,insertStaticContent:_}=t,b=(d,p,g,y=null,I=null,T=null,M=!1,A=null,k=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ur(d,p)&&(y=E(d),st(d,I,T,!0),d=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:C,ref:W,shapeFlag:j}=p;switch(C){case Ka:R(d,p,g,y);break;case qn:v(d,p,g,y);break;case Wo:d==null&&w(p,g,y,M);break;case ct:pt(d,p,g,y,I,T,M,A,k);break;default:j&1?B(d,p,g,y,I,T,M,A,k):j&6?Ct(d,p,g,y,I,T,M,A,k):(j&64||j&128)&&C.process(d,p,g,y,I,T,M,A,k,P)}W!=null&&I&&Ac(W,d&&d.ref,T,p||d,!p)},R=(d,p,g,y)=>{if(d==null)i(p.el=a(p.children),g,y);else{const I=p.el=d.el;p.children!==d.children&&c(I,p.children)}},v=(d,p,g,y)=>{d==null?i(p.el=l(p.children||""),g,y):p.el=d.el},w=(d,p,g,y)=>{[d.el,d.anchor]=_(d.children,p,g,y,d.el,d.anchor)},O=({el:d,anchor:p},g,y)=>{let I;for(;d&&d!==p;)I=h(d),i(d,g,y),d=I;i(p,g,y)},S=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),r(d),d=g;r(p)},B=(d,p,g,y,I,T,M,A,k)=>{M=M||p.type==="svg",d==null?Q(p,g,y,I,T,M,A,k):U(d,p,I,T,M,A,k)},Q=(d,p,g,y,I,T,M,A)=>{let k,C;const{type:W,props:j,shapeFlag:V,transition:G,dirs:Z}=d;if(k=d.el=o(d.type,T,j&&j.is,j),V&8?u(k,d.children):V&16&&D(d.children,k,null,y,I,T&&W!=="foreignObject",M,A),Z&&ii(d,null,y,"created"),X(k,d,d.scopeId,M,y),j){for(const pe in j)pe!=="value"&&!$o(pe)&&s(k,pe,null,j[pe],T,d.children,y,I,qe);"value"in j&&s(k,"value",null,j.value),(C=j.onVnodeBeforeMount)&&Yt(C,y,d)}Z&&ii(d,null,y,"beforeMount");const _e=(!I||I&&!I.pendingBranch)&&G&&!G.persisted;_e&&G.beforeEnter(k),i(k,p,g),((C=j&&j.onVnodeMounted)||_e||Z)&&at(()=>{C&&Yt(C,y,d),_e&&G.enter(k),Z&&ii(d,null,y,"mounted")},I)},X=(d,p,g,y,I)=>{if(g&&m(d,g),y)for(let T=0;T<y.length;T++)m(d,y[T]);if(I){let T=I.subTree;if(p===T){const M=I.vnode;X(d,M,M.scopeId,M.slotScopeIds,I.parent)}}},D=(d,p,g,y,I,T,M,A,k=0)=>{for(let C=k;C<d.length;C++){const W=d[C]=A?xn(d[C]):Xt(d[C]);b(null,W,p,g,y,I,T,M,A)}},U=(d,p,g,y,I,T,M)=>{const A=p.el=d.el;let{patchFlag:k,dynamicChildren:C,dirs:W}=p;k|=d.patchFlag&16;const j=d.props||ye,V=p.props||ye;let G;g&&ri(g,!1),(G=V.onVnodeBeforeUpdate)&&Yt(G,g,p,d),W&&ii(p,d,g,"beforeUpdate"),g&&ri(g,!0);const Z=I&&p.type!=="foreignObject";if(C?J(d.dynamicChildren,C,A,g,y,Z,T):M||le(d,p,A,null,g,y,Z,T,!1),k>0){if(k&16)Ke(A,p,j,V,g,y,I);else if(k&2&&j.class!==V.class&&s(A,"class",null,V.class,I),k&4&&s(A,"style",j.style,V.style,I),k&8){const _e=p.dynamicProps;for(let pe=0;pe<_e.length;pe++){const Oe=_e[pe],xt=j[Oe],Wi=V[Oe];(Wi!==xt||Oe==="value")&&s(A,Oe,xt,Wi,I,d.children,g,y,qe)}}k&1&&d.children!==p.children&&u(A,p.children)}else!M&&C==null&&Ke(A,p,j,V,g,y,I);((G=V.onVnodeUpdated)||W)&&at(()=>{G&&Yt(G,g,p,d),W&&ii(p,d,g,"updated")},y)},J=(d,p,g,y,I,T,M)=>{for(let A=0;A<p.length;A++){const k=d[A],C=p[A],W=k.el&&(k.type===ct||!Ur(k,C)||k.shapeFlag&70)?f(k.el):g;b(k,C,W,null,y,I,T,M,!0)}},Ke=(d,p,g,y,I,T,M)=>{if(g!==y){if(g!==ye)for(const A in g)!$o(A)&&!(A in y)&&s(d,A,g[A],null,M,p.children,I,T,qe);for(const A in y){if($o(A))continue;const k=y[A],C=g[A];k!==C&&A!=="value"&&s(d,A,C,k,M,p.children,I,T,qe)}"value"in y&&s(d,"value",g.value,y.value)}},pt=(d,p,g,y,I,T,M,A,k)=>{const C=p.el=d?d.el:a(""),W=p.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:V,slotScopeIds:G}=p;G&&(A=A?A.concat(G):G),d==null?(i(C,g,y),i(W,g,y),D(p.children,g,W,I,T,M,A,k)):j>0&&j&64&&V&&d.dynamicChildren?(J(d.dynamicChildren,V,g,I,T,M,A),(p.key!=null||I&&p===I.subTree)&&Og(d,p,!0)):le(d,p,g,W,I,T,M,A,k)},Ct=(d,p,g,y,I,T,M,A,k)=>{p.slotScopeIds=A,d==null?p.shapeFlag&512?I.ctx.activate(p,g,y,M,k):ni(p,g,y,I,T,M,k):St(d,p,k)},ni=(d,p,g,y,I,T,M)=>{const A=d.component=lE(d,y,I);if(wg(d)&&(A.ctx.renderer=P),cE(A),A.asyncDep){if(I&&I.registerDep(A,ae),!d.el){const k=A.subTree=oe(qn);v(null,k,p,g)}return}ae(A,d,p,g,I,T,M)},St=(d,p,g)=>{const y=p.component=d.component;if(_b(d,p,g))if(y.asyncDep&&!y.asyncResolved){ge(y,p,g);return}else y.next=p,cb(y.update),y.update();else p.el=d.el,y.vnode=p},ae=(d,p,g,y,I,T,M)=>{const A=()=>{if(d.isMounted){let{next:W,bu:j,u:V,parent:G,vnode:Z}=d,_e=W,pe;ri(d,!1),W?(W.el=Z.el,ge(d,W,M)):W=Z,j&&Bo(j),(pe=W.props&&W.props.onVnodeBeforeUpdate)&&Yt(pe,G,W,Z),ri(d,!0);const Oe=Pl(d),xt=d.subTree;d.subTree=Oe,b(xt,Oe,f(xt.el),E(xt),d,I,T),W.el=Oe.el,_e===null&&vb(d,Oe.el),V&&at(V,I),(pe=W.props&&W.props.onVnodeUpdated)&&at(()=>Yt(pe,G,W,Z),I)}else{let W;const{el:j,props:V}=p,{bm:G,m:Z,parent:_e}=d,pe=Zr(p);if(ri(d,!1),G&&Bo(G),!pe&&(W=V&&V.onVnodeBeforeMount)&&Yt(W,_e,p),ri(d,!0),j&&ce){const Oe=()=>{d.subTree=Pl(d),ce(j,d.subTree,d,I,null)};pe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Oe()):Oe()}else{const Oe=d.subTree=Pl(d);b(null,Oe,g,y,d,I,T),p.el=Oe.el}if(Z&&at(Z,I),!pe&&(W=V&&V.onVnodeMounted)){const Oe=p;at(()=>Yt(W,_e,Oe),I)}(p.shapeFlag&256||_e&&Zr(_e.vnode)&&_e.vnode.shapeFlag&256)&&d.a&&at(d.a,I),d.isMounted=!0,p=g=y=null}},k=d.effect=new Fu(A,()=>zu(C),d.scope),C=d.update=()=>k.run();C.id=d.uid,ri(d,!0),C()},ge=(d,p,g)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,qb(d,p.props,y,g),Xb(d,p.children,g),Tr(),Vh(),Cr()},le=(d,p,g,y,I,T,M,A,k=!1)=>{const C=d&&d.children,W=d?d.shapeFlag:0,j=p.children,{patchFlag:V,shapeFlag:G}=p;if(V>0){if(V&128){An(C,j,g,y,I,T,M,A,k);return}else if(V&256){ln(C,j,g,y,I,T,M,A,k);return}}G&8?(W&16&&qe(C,I,T),j!==C&&u(g,j)):W&16?G&16?An(C,j,g,y,I,T,M,A,k):qe(C,I,T,!0):(W&8&&u(g,""),G&16&&D(j,g,y,I,T,M,A,k))},ln=(d,p,g,y,I,T,M,A,k)=>{d=d||nr,p=p||nr;const C=d.length,W=p.length,j=Math.min(C,W);let V;for(V=0;V<j;V++){const G=p[V]=k?xn(p[V]):Xt(p[V]);b(d[V],G,g,null,I,T,M,A,k)}C>W?qe(d,I,T,!0,!1,j):D(p,g,y,I,T,M,A,k,j)},An=(d,p,g,y,I,T,M,A,k)=>{let C=0;const W=p.length;let j=d.length-1,V=W-1;for(;C<=j&&C<=V;){const G=d[C],Z=p[C]=k?xn(p[C]):Xt(p[C]);if(Ur(G,Z))b(G,Z,g,null,I,T,M,A,k);else break;C++}for(;C<=j&&C<=V;){const G=d[j],Z=p[V]=k?xn(p[V]):Xt(p[V]);if(Ur(G,Z))b(G,Z,g,null,I,T,M,A,k);else break;j--,V--}if(C>j){if(C<=V){const G=V+1,Z=G<W?p[G].el:y;for(;C<=V;)b(null,p[C]=k?xn(p[C]):Xt(p[C]),g,Z,I,T,M,A,k),C++}}else if(C>V)for(;C<=j;)st(d[C],I,T,!0),C++;else{const G=C,Z=C,_e=new Map;for(C=Z;C<=V;C++){const mt=p[C]=k?xn(p[C]):Xt(p[C]);mt.key!=null&&_e.set(mt.key,C)}let pe,Oe=0;const xt=V-Z+1;let Wi=!1,xh=0;const Fr=new Array(xt);for(C=0;C<xt;C++)Fr[C]=0;for(C=G;C<=j;C++){const mt=d[C];if(Oe>=xt){st(mt,I,T,!0);continue}let Gt;if(mt.key!=null)Gt=_e.get(mt.key);else for(pe=Z;pe<=V;pe++)if(Fr[pe-Z]===0&&Ur(mt,p[pe])){Gt=pe;break}Gt===void 0?st(mt,I,T,!0):(Fr[Gt-Z]=C+1,Gt>=xh?xh=Gt:Wi=!0,b(mt,p[Gt],g,null,I,T,M,A,k),Oe++)}const Dh=Wi?Zb(Fr):nr;for(pe=Dh.length-1,C=xt-1;C>=0;C--){const mt=Z+C,Gt=p[mt],Mh=mt+1<W?p[mt+1].el:y;Fr[C]===0?b(null,Gt,g,Mh,I,T,M,A,k):Wi&&(pe<0||C!==Dh[pe]?qt(Gt,g,Mh,2):pe--)}}},qt=(d,p,g,y,I=null)=>{const{el:T,type:M,transition:A,children:k,shapeFlag:C}=d;if(C&6){qt(d.component.subTree,p,g,y);return}if(C&128){d.suspense.move(p,g,y);return}if(C&64){M.move(d,p,g,P);return}if(M===ct){i(T,p,g);for(let j=0;j<k.length;j++)qt(k[j],p,g,y);i(d.anchor,p,g);return}if(M===Wo){O(d,p,g);return}if(y!==2&&C&1&&A)if(y===0)A.beforeEnter(T),i(T,p,g),at(()=>A.enter(T),I);else{const{leave:j,delayLeave:V,afterLeave:G}=A,Z=()=>i(T,p,g),_e=()=>{j(T,()=>{Z(),G&&G()})};V?V(T,Z,_e):_e()}else i(T,p,g)},st=(d,p,g,y=!1,I=!1)=>{const{type:T,props:M,ref:A,children:k,dynamicChildren:C,shapeFlag:W,patchFlag:j,dirs:V}=d;if(A!=null&&Ac(A,null,g,d,!0),W&256){p.ctx.deactivate(d);return}const G=W&1&&V,Z=!Zr(d);let _e;if(Z&&(_e=M&&M.onVnodeBeforeUnmount)&&Yt(_e,p,d),W&6)mo(d.component,g,y);else{if(W&128){d.suspense.unmount(g,y);return}G&&ii(d,null,p,"beforeUnmount"),W&64?d.type.remove(d,p,g,I,P,y):C&&(T!==ct||j>0&&j&64)?qe(C,p,g,!1,!0):(T===ct&&j&384||!I&&W&16)&&qe(k,p,g),y&&Bi(d)}(Z&&(_e=M&&M.onVnodeUnmounted)||G)&&at(()=>{_e&&Yt(_e,p,d),G&&ii(d,null,p,"unmounted")},g)},Bi=d=>{const{type:p,el:g,anchor:y,transition:I}=d;if(p===ct){Hi(g,y);return}if(p===Wo){S(d);return}const T=()=>{r(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:A}=I,k=()=>M(g,T);A?A(d.el,T,k):k()}else T()},Hi=(d,p)=>{let g;for(;d!==p;)g=h(d),r(d),d=g;r(p)},mo=(d,p,g)=>{const{bum:y,scope:I,update:T,subTree:M,um:A}=d;y&&Bo(y),I.stop(),T&&(T.active=!1,st(M,d,p,g)),A&&at(A,p),at(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},qe=(d,p,g,y=!1,I=!1,T=0)=>{for(let M=T;M<d.length;M++)st(d[M],p,g,y,I)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),F=(d,p,g)=>{d==null?p._vnode&&st(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,g),Vh(),gg(),p._vnode=d},P={p:b,um:st,m:qt,r:Bi,mt:ni,mc:D,pc:le,pbc:J,n:E,o:t};let H,ce;return e&&([H,ce]=e(P)),{render:F,hydrate:H,createApp:Vb(F,H)}}function ri({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Og(t,e,n=!1){const i=t.children,r=e.children;if(K(i)&&K(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xn(r[s]),a.el=o.el),n||Og(o,a)),a.type===Ka&&(a.el=o.el)}}function Zb(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const eE=t=>t.__isTeleport,ct=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),Wo=Symbol.for("v-stc"),ts=[];let Lt=null;function ke(t=!1){ts.push(Lt=t?null:[])}function tE(){ts.pop(),Lt=ts[ts.length-1]||null}let vs=1;function td(t){vs+=t}function Ng(t){return t.dynamicChildren=vs>0?Lt||nr:null,tE(),vs>0&&Lt&&Lt.push(t),t}function rt(t,e,n,i,r,s){return Ng(Ht(t,e,n,i,r,s,!0))}function sr(t,e,n,i,r){return Ng(oe(t,e,n,i,r,!0))}function na(t){return t?t.__v_isVNode===!0:!1}function Ur(t,e){return t.type===e.type&&t.key===e.key}const qa="__vInternal",xg=({key:t})=>t??null,Vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||Re(t)||Y(t)?{i:Fe,r:t,k:e,f:!!n}:t:null);function Ht(t,e=null,n=null,i=0,r=null,s=t===ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xg(e),ref:e&&Vo(e),scopeId:Va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Fe};return a?(Qu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),vs>0&&!o&&Lt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Lt.push(l),l}const oe=nE;function nE(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Db)&&(t=qn),na(t)){const a=mr(t,e,!0);return n&&Qu(a,n),vs>0&&!s&&Lt&&(a.shapeFlag&6?Lt[Lt.indexOf(t)]=a:Lt.push(a)),a.patchFlag|=-2,a}if(pE(t)&&(t=t.__vccOpts),e){e=iE(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=Du(a)),Se(l)&&(cg(l)&&!K(l)&&(l=ze({},l)),e.style=xu(l))}const o=je(t)?1:yb(t)?128:eE(t)?64:Se(t)?4:Y(t)?2:0;return Ht(t,e,n,i,r,o,s,!0)}function iE(t){return t?cg(t)||qa in t?ze({},t):t:null}function mr(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?sE(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xg(a),ref:e&&e.ref?n&&r?K(r)?r.concat(Vo(e)):[r,Vo(e)]:Vo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function or(t=" ",e=0){return oe(Ka,null,t,e)}function rE(t,e){const n=oe(Wo,null,t);return n.staticCount=e,n}function Ju(t="",e=!1){return e?(ke(),sr(qn,null,t)):oe(qn,null,t)}function Xt(t){return t==null||typeof t=="boolean"?oe(qn):K(t)?oe(ct,null,t.slice()):typeof t=="object"?xn(t):oe(Ka,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mr(t)}function Qu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Qu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(qa in e)?e._ctx=Fe:r===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),i&64?(n=16,e=[or(e)]):n=8);t.children=e,t.shapeFlag|=n}function sE(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Du([e.class,i.class]));else if(r==="style")e.style=xu([e.style,i.style]);else if(Ma(r)){const s=e[r],o=i[r];o&&s!==o&&!(K(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Yt(t,e,n,i=null){$t(t,e,7,[n,i])}const oE=Cg();let aE=0;function lE(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||oE,s={uid:aE++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ym(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ag(i,r),emitsOptions:vg(i,r),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:i.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=hb.bind(null,s),t.ce&&t.ce(s),s}let Ne=null;const Zu=()=>Ne||Fe;let ef,Vi,nd="__VUE_INSTANCE_SETTERS__";(Vi=vc()[nd])||(Vi=vc()[nd]=[]),Vi.push(t=>Ne=t),ef=t=>{Vi.length>1?Vi.forEach(e=>e(t)):Vi[0](t)};const gr=t=>{ef(t),t.scope.on()},yi=()=>{Ne&&Ne.scope.off(),ef(null)};function Dg(t){return t.vnode.shapeFlag&4}let ys=!1;function cE(t,e=!1){ys=e;const{props:n,children:i}=t.vnode,r=Dg(t);Kb(t,n,r,e),Yb(t,i);const s=r?uE(t,e):void 0;return ys=!1,s}function uE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ba(new Proxy(t.ctx,Fb));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?hE(t):null;gr(t),Tr();const s=Bn(i,t,0,[t.props,r]);if(Cr(),yi(),Vm(s)){if(s.then(yi,yi),e)return s.then(o=>{id(t,o,e)}).catch(o=>{Ha(o,t,0)});t.asyncDep=s}else id(t,s,e)}else Mg(t,e)}function id(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=hg(e)),Mg(t,n)}let rd;function Mg(t,e,n){const i=t.type;if(!t.render){if(!e&&rd&&!i.render){const r=i.template||Yu(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ze(ze({isCustomElement:s,delimiters:a},o),l);i.render=rd(r,c)}}t.render=i.render||jt}{gr(t),Tr();try{Ub(t)}finally{Cr(),yi()}}}function fE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function hE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return fE(t)},slots:t.slots,emit:t.emit,expose:e}}function Ga(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hg(Ba(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in es)return es[n](t)},has(e,n){return n in e||n in es}}))}function dE(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function pE(t){return Y(t)&&"__vccOpts"in t}const Ee=(t,e)=>ob(t,e,ys);function tf(t,e,n){const i=arguments.length;return i===2?Se(e)&&!K(e)?na(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&na(n)&&(n=[n]),oe(t,e,n))}const mE=Symbol.for("v-scx"),gE=()=>Ue(mE),_E="3.3.6",vE="http://www.w3.org/2000/svg",li=typeof document<"u"?document:null,sd=li&&li.createElement("template"),yE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?li.createElementNS(vE,t):li.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>li.createTextNode(t),createComment:t=>li.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>li.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{sd.innerHTML=i?`<svg>${t}</svg>`:t;const a=sd.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wE=Symbol("_vtc");function bE(t,e,n){const i=t[wE];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const EE=Symbol("_vod");function IE(t,e,n){const i=t.style,r=je(n);if(n&&!r){if(e&&!je(e))for(const s in e)n[s]==null&&Rc(i,s,"");for(const s in n)Rc(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),EE in t&&(i.display=s)}}const od=/\s*!important$/;function Rc(t,e,n){if(K(n))n.forEach(i=>Rc(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=TE(t,e);od.test(n)?t.setProperty(Ir(i),n.replace(od,""),"important"):t[i]=n}}const ad=["Webkit","Moz","ms"],Nl={};function TE(t,e){const n=Nl[e];if(n)return n;let i=on(e);if(i!=="filter"&&i in t)return Nl[e]=i;i=Ua(i);for(let r=0;r<ad.length;r++){const s=ad[r]+i;if(s in t)return Nl[e]=s}return e}const ld="http://www.w3.org/1999/xlink";function CE(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ld,e.slice(6,e.length)):t.setAttributeNS(ld,e,n);else{const s=Aw(e);n==null||s&&!qm(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function SE(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qm(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Yi(t,e,n,i){t.addEventListener(e,n,i)}function AE(t,e,n,i){t.removeEventListener(e,n,i)}const cd=Symbol("_vei");function RE(t,e,n,i,r=null){const s=t[cd]||(t[cd]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=kE(e);if(i){const c=s[e]=NE(i,r);Yi(t,a,c,l)}else o&&(AE(t,a,o,l),s[e]=void 0)}}const ud=/(?:Once|Passive|Capture)$/;function kE(t){let e;if(ud.test(t)){e={};let i;for(;i=t.match(ud);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ir(t.slice(2)),e]}let xl=0;const PE=Promise.resolve(),OE=()=>xl||(PE.then(()=>xl=0),xl=Date.now());function NE(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;$t(xE(i,n.value),e,5,[i])};return n.value=t,n.attached=OE(),n}function xE(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const fd=/^on[a-z]/,DE=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?bE(t,i,r):e==="style"?IE(t,n,i):Ma(e)?ku(e)||RE(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ME(t,e,i,r))?SE(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),CE(t,e,i,r))};function ME(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&fd.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fd.test(e)&&je(n)?!1:e in t}const hd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Bo(e,n):e};function LE(t){t.target.composing=!0}function dd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dl=Symbol("_assign"),YD={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Dl]=hd(r);const s=i||r.props&&r.props.type==="number";Yi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=_c(a)),t[Dl](a)}),n&&Yi(t,"change",()=>{t.value=t.value.trim()}),e||(Yi(t,"compositionstart",LE),Yi(t,"compositionend",dd),Yi(t,"change",dd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t[Dl]=hd(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&_c(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},FE=["ctrl","shift","alt","meta"],UE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>FE.some(n=>t[`${n}Key`]&&!e.includes(n))},jE=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=UE[e[r]];if(s&&s(n,e))return}return t(n,...i)},$E=ze({patchProp:DE},yE);let pd;function BE(){return pd||(pd=Jb($E))}const HE=(...t)=>{const e=BE().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=WE(i);if(!r)return;const s=e._component;!Y(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function WE(t){return je(t)?document.querySelector(t):t}function VE(){const t=Et(!1);function e(){t.value=!0,window.addEventListener("resize",r)}function n(){t.value=!1,window.removeEventListener("resize",r)}function i(){t.value?n():e()}function r(){window.outerWidth>=768&&n()}return{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:i}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Xi=typeof window<"u";function zE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Ml(t,e){const n={};for(const i in e){const r=e[i];n[i]=Wt(r)?r.map(t):t(r)}return n}const ns=()=>{},Wt=Array.isArray,KE=/\/$/,qE=t=>t.replace(KE,"");function Ll(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=JE(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function GE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YE(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&_r(e.matched[i],n.matched[r])&&Lg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _r(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!XE(t[n],e[n]))return!1;return!0}function XE(t,e){return Wt(t)?gd(t,e):Wt(e)?gd(e,t):t===e}function gd(t,e){return Wt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function JE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var ws;(function(t){t.pop="pop",t.push="push"})(ws||(ws={}));var is;(function(t){t.back="back",t.forward="forward",t.unknown=""})(is||(is={}));function QE(t){if(!t)if(Xi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qE(t)}const ZE=/^[^#]+#/;function eI(t,e){return t.replace(ZE,"#")+e}function tI(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ya=()=>({left:window.pageXOffset,top:window.pageYOffset});function nI(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=tI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _d(t,e){return(history.state?history.state.position-e:-1)+t}const kc=new Map;function iI(t,e){kc.set(t,e)}function rI(t){const e=kc.get(t);return kc.delete(t),e}let sI=()=>location.protocol+"//"+location.host;function Fg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),md(l,"")}return md(n,t)+i+r}function oI(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const m=Fg(t,location),_=n.value,b=e.value;let R=0;if(h){if(n.value=m,e.value=h,o&&o===_){o=null;return}R=b?h.position-b.position:0}else i(m);r.forEach(v=>{v(n.value,_,{delta:R,type:ws.pop,direction:R?R>0?is.forward:is.back:is.unknown})})};function l(){o=n.value}function c(h){r.push(h);const m=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(he({},h.state,{scroll:Ya()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function vd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ya():null}}function aI(t){const{history:e,location:n}=window,i={value:Fg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:sI()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(l,c){const u=he({},e.state,vd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=he({},r.value,e.state,{forward:l,scroll:Ya()});s(u.current,u,!0);const f=he({},vd(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function lI(t){t=QE(t);const e=aI(t),n=oI(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=he({location:"",base:t,go:i,createHref:eI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function cI(t){return typeof t=="string"||t&&typeof t=="object"}function Ug(t){return typeof t=="string"||typeof t=="symbol"}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jg=Symbol("");var yd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yd||(yd={}));function vr(t,e){return he(new Error,{type:t,[jg]:!0},e)}function cn(t,e){return t instanceof Error&&jg in t&&(e==null||!!(t.type&e))}const wd="[^/]+?",uI={sensitive:!1,strict:!1,start:!0,end:!0},fI=/[.+*?^${}()[\]/\\]/g;function hI(t,e){const n=he({},uI,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(fI,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:b,optional:R,regexp:v}=h;s.push({name:_,repeatable:b,optional:R});const w=v||wd;if(w!==wd){m+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${w}): `+S.message)}}let O=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(O=R&&c.length<2?`(?:/${O})`:"/"+O),R&&(O+="?"),r+=O,m+=20,R&&(m+=-8),b&&(m+=-20),w===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=s[h-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:b,optional:R}=m,v=_ in c?c[_]:"";if(Wt(v)&&!b)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const w=Wt(v)?v.join("/"):v;if(!w)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function dI(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pI(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=dI(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(bd(i))return 1;if(bd(r))return-1}return r.length-i.length}function bd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mI={type:0,value:""},gI=/[a-zA-Z0-9_]/;function _I(t){if(!t)return[[]];if(t==="/")return[[mI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:gI.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function vI(t,e,n){const i=hI(_I(t.path),n),r=he(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function yI(t,e){const n=[],i=new Map;e=Td({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,_=wI(u);_.aliasOf=h&&h.record;const b=Td(e,u),R=[_];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of O)R.push(he({},_,{components:h?h.record.components:_.components,path:S,aliasOf:h?h.record:_}))}let v,w;for(const O of R){const{path:S}=O;if(f&&S[0]!=="/"){const B=f.record.path,Q=B[B.length-1]==="/"?"":"/";O.path=f.record.path+(S&&Q+S)}if(v=vI(O,f,b),h?h.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),m&&u.name&&!Id(v)&&o(u.name)),_.children){const B=_.children;for(let Q=0;Q<B.length;Q++)s(B[Q],v,h&&h.children[Q])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return w?()=>{o(w)}:ns}function o(u){if(Ug(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&pI(u,n[f])>=0&&(u.record.path!==n[f].record.path||!$g(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Id(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},_,b;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw vr(1,{location:u});b=h.record.name,m=he(Ed(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&Ed(u.params,h.keys.map(w=>w.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=n.find(w=>w.re.test(_)),h&&(m=h.parse(_),b=h.record.name);else{if(h=f.name?i.get(f.name):n.find(w=>w.re.test(f.path)),!h)throw vr(1,{location:u,currentLocation:f});b=h.record.name,m=he({},f.params,u.params),_=h.stringify(m)}const R=[];let v=h;for(;v;)R.unshift(v.record),v=v.parent;return{name:b,path:_,params:m,matched:R,meta:EI(R)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ed(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function wI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Id(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function EI(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Td(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function $g(t,e){return e.children.some(n=>n===t||$g(t,n))}const Bg=/#/g,II=/&/g,TI=/\//g,CI=/=/g,SI=/\?/g,Hg=/\+/g,AI=/%5B/g,RI=/%5D/g,Wg=/%5E/g,kI=/%60/g,Vg=/%7B/g,PI=/%7C/g,zg=/%7D/g,OI=/%20/g;function nf(t){return encodeURI(""+t).replace(PI,"|").replace(AI,"[").replace(RI,"]")}function NI(t){return nf(t).replace(Vg,"{").replace(zg,"}").replace(Wg,"^")}function Pc(t){return nf(t).replace(Hg,"%2B").replace(OI,"+").replace(Bg,"%23").replace(II,"%26").replace(kI,"`").replace(Vg,"{").replace(zg,"}").replace(Wg,"^")}function xI(t){return Pc(t).replace(CI,"%3D")}function DI(t){return nf(t).replace(Bg,"%23").replace(SI,"%3F")}function MI(t){return t==null?"":DI(t).replace(TI,"%2F")}function ia(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function LI(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Hg," "),o=s.indexOf("="),a=ia(o<0?s:s.slice(0,o)),l=o<0?null:ia(s.slice(o+1));if(a in e){let c=e[a];Wt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Cd(t){let e="";for(let n in t){const i=t[n];if(n=xI(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(i)?i.map(s=>s&&Pc(s)):[i&&Pc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function FI(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Wt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const UI=Symbol(""),Sd=Symbol(""),Xa=Symbol(""),Kg=Symbol(""),Oc=Symbol("");function jr(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Dn(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(vr(4,{from:n,to:e})):f instanceof Error?a(f):cI(f)?a(vr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Fl(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(jI(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Dn(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=zE(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Dn(h,n,i,s,o)()}))}}return r}function jI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ad(t){const e=Ue(Xa),n=Ue(Kg),i=Ee(()=>e.resolve(it(t.to))),r=Ee(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(_r.bind(null,u));if(h>-1)return h;const m=Rd(l[c-2]);return c>1&&Rd(u)===m&&f[f.length-1].path!==m?f.findIndex(_r.bind(null,l[c-2])):h}),s=Ee(()=>r.value>-1&&WI(n.params,i.value.params)),o=Ee(()=>r.value>-1&&r.value===n.matched.length-1&&Lg(n.params,i.value.params));function a(l={}){return HI(l)?e[it(t.replace)?"replace":"push"](it(t.to)).catch(ns):Promise.resolve()}return{route:i,href:Ee(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const $I=It({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ad,setup(t,{slots:e}){const n=Vs(Ad(t)),{options:i}=Ue(Xa),r=Ee(()=>({[kd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[kd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:tf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),BI=$I;function HI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WI(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Wt(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Rd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kd=(t,e,n)=>t??e??n,VI=It({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Ue(Oc),r=Ee(()=>t.route||i.value),s=Ue(Sd,0),o=Ee(()=>{let c=it(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ee(()=>r.value.matched[o.value]);Ho(Sd,Ee(()=>o.value+1)),Ho(UI,a),Ho(Oc,r);const l=Et();return _n(()=>[l.value,a.value,t.name],([c,u,f],[h,m,_])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!_r(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Pd(n.default,{Component:h,route:c});const m=f.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,R=tf(h,he({},_,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Pd(n.default,{Component:R,route:c})||R}}});function Pd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zI=VI;function KI(t){const e=yI(t.routes,t),n=t.parseQuery||LI,i=t.stringifyQuery||Cd,r=t.history,s=jr(),o=jr(),a=jr(),l=ug(kn);let c=kn;Xi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ml.bind(null,E=>""+E),f=Ml.bind(null,MI),h=Ml.bind(null,ia);function m(E,F){let P,H;return Ug(E)?(P=e.getRecordMatcher(E),H=F):H=E,e.addRoute(H,P)}function _(E){const F=e.getRecordMatcher(E);F&&e.removeRoute(F)}function b(){return e.getRoutes().map(E=>E.record)}function R(E){return!!e.getRecordMatcher(E)}function v(E,F){if(F=he({},F||l.value),typeof E=="string"){const g=Ll(n,E,F.path),y=e.resolve({path:g.path},F),I=r.createHref(g.fullPath);return he(g,y,{params:h(y.params),hash:ia(g.hash),redirectedFrom:void 0,href:I})}let P;if("path"in E)P=he({},E,{path:Ll(n,E.path,F.path).path});else{const g=he({},E.params);for(const y in g)g[y]==null&&delete g[y];P=he({},E,{params:f(g)}),F.params=f(F.params)}const H=e.resolve(P,F),ce=E.hash||"";H.params=u(h(H.params));const d=GE(i,he({},E,{hash:NI(ce),path:H.path})),p=r.createHref(d);return he({fullPath:d,hash:ce,query:i===Cd?FI(E.query):E.query||{}},H,{redirectedFrom:void 0,href:p})}function w(E){return typeof E=="string"?Ll(n,E,l.value.path):he({},E)}function O(E,F){if(c!==E)return vr(8,{from:F,to:E})}function S(E){return X(E)}function B(E){return S(he(w(E),{replace:!0}))}function Q(E){const F=E.matched[E.matched.length-1];if(F&&F.redirect){const{redirect:P}=F;let H=typeof P=="function"?P(E):P;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=w(H):{path:H},H.params={}),he({query:E.query,hash:E.hash,params:"path"in H?{}:E.params},H)}}function X(E,F){const P=c=v(E),H=l.value,ce=E.state,d=E.force,p=E.replace===!0,g=Q(P);if(g)return X(he(w(g),{state:typeof g=="object"?he({},ce,g.state):ce,force:d,replace:p}),F||P);const y=P;y.redirectedFrom=F;let I;return!d&&YE(i,H,P)&&(I=vr(16,{to:y,from:H}),qt(H,H,!0,!1)),(I?Promise.resolve(I):J(y,H)).catch(T=>cn(T)?cn(T,2)?T:An(T):le(T,y,H)).then(T=>{if(T){if(cn(T,2))return X(he({replace:p},w(T.to),{state:typeof T.to=="object"?he({},ce,T.to.state):ce,force:d}),F||y)}else T=pt(y,H,!0,p,ce);return Ke(y,H,T),T})}function D(E,F){const P=O(E,F);return P?Promise.reject(P):Promise.resolve()}function U(E){const F=Hi.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(E):E()}function J(E,F){let P;const[H,ce,d]=qI(E,F);P=Fl(H.reverse(),"beforeRouteLeave",E,F);for(const g of H)g.leaveGuards.forEach(y=>{P.push(Dn(y,E,F))});const p=D.bind(null,E,F);return P.push(p),qe(P).then(()=>{P=[];for(const g of s.list())P.push(Dn(g,E,F));return P.push(p),qe(P)}).then(()=>{P=Fl(ce,"beforeRouteUpdate",E,F);for(const g of ce)g.updateGuards.forEach(y=>{P.push(Dn(y,E,F))});return P.push(p),qe(P)}).then(()=>{P=[];for(const g of d)if(g.beforeEnter)if(Wt(g.beforeEnter))for(const y of g.beforeEnter)P.push(Dn(y,E,F));else P.push(Dn(g.beforeEnter,E,F));return P.push(p),qe(P)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),P=Fl(d,"beforeRouteEnter",E,F),P.push(p),qe(P))).then(()=>{P=[];for(const g of o.list())P.push(Dn(g,E,F));return P.push(p),qe(P)}).catch(g=>cn(g,8)?g:Promise.reject(g))}function Ke(E,F,P){a.list().forEach(H=>U(()=>H(E,F,P)))}function pt(E,F,P,H,ce){const d=O(E,F);if(d)return d;const p=F===kn,g=Xi?history.state:{};P&&(H||p?r.replace(E.fullPath,he({scroll:p&&g&&g.scroll},ce)):r.push(E.fullPath,ce)),l.value=E,qt(E,F,P,p),An()}let Ct;function ni(){Ct||(Ct=r.listen((E,F,P)=>{if(!mo.listening)return;const H=v(E),ce=Q(H);if(ce){X(he(ce,{replace:!0}),H).catch(ns);return}c=H;const d=l.value;Xi&&iI(_d(d.fullPath,P.delta),Ya()),J(H,d).catch(p=>cn(p,12)?p:cn(p,2)?(X(p.to,H).then(g=>{cn(g,20)&&!P.delta&&P.type===ws.pop&&r.go(-1,!1)}).catch(ns),Promise.reject()):(P.delta&&r.go(-P.delta,!1),le(p,H,d))).then(p=>{p=p||pt(H,d,!1),p&&(P.delta&&!cn(p,8)?r.go(-P.delta,!1):P.type===ws.pop&&cn(p,20)&&r.go(-1,!1)),Ke(H,d,p)}).catch(ns)}))}let St=jr(),ae=jr(),ge;function le(E,F,P){An(E);const H=ae.list();return H.length?H.forEach(ce=>ce(E,F,P)):console.error(E),Promise.reject(E)}function ln(){return ge&&l.value!==kn?Promise.resolve():new Promise((E,F)=>{St.add([E,F])})}function An(E){return ge||(ge=!E,ni(),St.list().forEach(([F,P])=>E?P(E):F()),St.reset()),E}function qt(E,F,P,H){const{scrollBehavior:ce}=t;if(!Xi||!ce)return Promise.resolve();const d=!P&&rI(_d(E.fullPath,0))||(H||!P)&&history.state&&history.state.scroll||null;return zs().then(()=>ce(E,F,d)).then(p=>p&&nI(p)).catch(p=>le(p,E,F))}const st=E=>r.go(E);let Bi;const Hi=new Set,mo={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:R,getRoutes:b,resolve:v,options:t,push:S,replace:B,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:ln,install(E){const F=this;E.component("RouterLink",BI),E.component("RouterView",zI),E.config.globalProperties.$router=F,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>it(l)}),Xi&&!Bi&&l.value===kn&&(Bi=!0,S(r.location).catch(ce=>{}));const P={};for(const ce in kn)Object.defineProperty(P,ce,{get:()=>l.value[ce],enumerable:!0});E.provide(Xa,F),E.provide(Kg,lg(P)),E.provide(Oc,l);const H=E.unmount;Hi.add(E),E.unmount=function(){Hi.delete(E),Hi.size<1&&(c=kn,Ct&&Ct(),Ct=null,l.value=kn,Bi=!1,ge=!1),H()}}};function qe(E){return E.reduce((F,P)=>F.then(()=>U(P)),Promise.resolve())}return mo}function qI(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>_r(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>_r(c,l))||r.push(l))}return[n,i,r]}function GI(){return Ue(Xa)}const Qn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},YI={},XI={class:"navbar-title"};function JI(t,e){const n=gs("font-awesome-icon"),i=gs("router-link");return ke(),rt("div",XI,[oe(i,{to:"/",class:"title"},{default:vi(()=>[oe(n,{icon:"location-arrow",class:"icon"}),or(" Lean ")]),_:1})])}const QI=Qn(YI,[["render",JI]]);const ZI={};function e1(t,e){const n=gs("router-link");return ke(),rt(ct,null,[oe(n,{class:"navbar-content",to:"/log"},{default:vi(()=>[or("Log")]),_:1}),oe(n,{class:"navbar-content",to:"/analysis"},{default:vi(()=>[or("Analysis")]),_:1}),oe(n,{class:"navbar-content",to:"/profile"},{default:vi(()=>[or("Profile")]),_:1})],64)}const t1=Qn(ZI,[["render",e1],["__scopeId","data-v-22e5669d"]]);var n1=!1;function qg(t){return Mu()?(Jm(t),!0):!1}function Ja(t){return typeof t=="function"?t():it(t)}const i1=typeof window<"u"&&typeof document<"u",r1=Object.prototype.toString,s1=t=>r1.call(t)==="[object Object]",Gg=()=>{};function o1(t,e){function n(...i){return new Promise((r,s)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return n}const Yg=t=>t();function a1(t=Yg){const e=Et(!0);function n(){e.value=!1}function i(){e.value=!0}const r=(...s)=>{e.value&&t(...s)};return{isActive:$a(e),pause:n,resume:i,eventFilter:r}}function l1(...t){if(t.length!==1)return rb(...t);const e=t[0];return typeof e=="function"?$a(eb(()=>({get:e,set:Gg}))):Et(e)}function c1(t,e,n={}){const{eventFilter:i=Yg,...r}=n;return _n(t,o1(i,e),r)}function u1(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:s,pause:o,resume:a,isActive:l}=a1(i);return{stop:c1(t,e,{...r,eventFilter:s}),pause:o,resume:a,isActive:l}}function f1(t,e=!0){Zu()?qu(t):e?t():zs(t)}function Xg(t){var e;const n=Ja(t);return(e=n==null?void 0:n.$el)!=null?e:n}const bs=i1?window:void 0;function Od(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=bs):[e,n,i,r]=t,!e)return Gg;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,h,m)=>(u.addEventListener(f,h,m),()=>u.removeEventListener(f,h,m)),l=_n(()=>[Xg(e),Ja(r)],([u,f])=>{if(o(),!u)return;const h=s1(f)?{...f}:f;s.push(...n.flatMap(m=>i.map(_=>a(u,m,_,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return qg(c),c}function h1(){const t=Et(!1);return Zu()&&qu(()=>{t.value=!0}),t}function d1(t){const e=h1();return Ee(()=>(e.value,!!t()))}function p1(t,e={}){const{window:n=bs}=e,i=d1(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const s=Et(!1),o=c=>{s.value=c.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o))},l=bb(()=>{i.value&&(a(),r=n.matchMedia(Ja(t)),"addEventListener"in r?r.addEventListener("change",o):r.addListener(o),s.value=r.matches)});return qg(()=>{l(),a(),r=void 0}),s}const Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Io="__vueuse_ssr_handlers__",m1=g1();function g1(){return Io in Eo||(Eo[Io]=Eo[Io]||{}),Eo[Io]}function Jg(t,e){return m1[t]||e}function _1(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const v1={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Nd="vueuse-storage";function y1(t,e,n,i={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:f=bs,eventFilter:h,onError:m=D=>{console.error(D)}}=i,_=(u?ug:Et)(e);if(!n)try{n=Jg("getDefaultStorage",()=>{var D;return(D=bs)==null?void 0:D.localStorage})()}catch(D){m(D)}if(!n)return _;const b=Ja(e),R=_1(b),v=(r=i.serializer)!=null?r:v1[R],{pause:w,resume:O}=u1(_,()=>S(_.value),{flush:s,deep:o,eventFilter:h});return f&&a&&(Od(f,"storage",X),Od(f,Nd,Q)),X(),_;function S(D){try{if(D==null)n.removeItem(t);else{const U=v.write(D),J=n.getItem(t);J!==U&&(n.setItem(t,U),f&&f.dispatchEvent(new CustomEvent(Nd,{detail:{key:t,oldValue:J,newValue:U,storageArea:n}})))}}catch(U){m(U)}}function B(D){const U=D?D.newValue:n.getItem(t);if(U==null)return l&&b!==null&&n.setItem(t,v.write(b)),b;if(!D&&c){const J=v.read(U);return typeof c=="function"?c(J,b):R==="object"&&!Array.isArray(J)?{...b,...J}:J}else return typeof U!="string"?U:v.read(U)}function Q(D){X(D.detail)}function X(D){if(!(D&&D.storageArea!==n)){if(D&&D.key==null){_.value=b;return}if(!(D&&D.key!==t)){w();try{(D==null?void 0:D.newValue)!==v.write(_.value)&&(_.value=B(D))}catch(U){m(U)}finally{D?zs(O):O()}}}}}function w1(t){return p1("(prefers-color-scheme: dark)",t)}function b1(t={}){const{selector:e="html",attribute:n="class",initialValue:i="auto",window:r=bs,storage:s,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:l,emitAuto:c,disableTransition:u=!0}=t,f={auto:"",light:"light",dark:"dark",...t.modes||{}},h=w1({window:r}),m=Ee(()=>h.value?"dark":"light"),_=l||(o==null?l1(i):y1(o,i,s,{window:r,listenToStorageChanges:a})),b=Ee(()=>_.value==="auto"?m.value:_.value),R=Jg("updateHTMLAttrs",(S,B,Q)=>{const X=typeof S=="string"?r==null?void 0:r.document.querySelector(S):Xg(S);if(!X)return;let D;if(u){D=r.document.createElement("style");const U="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";D.appendChild(document.createTextNode(U)),r.document.head.appendChild(D)}if(B==="class"){const U=Q.split(/\s/g);Object.values(f).flatMap(J=>(J||"").split(/\s/g)).filter(Boolean).forEach(J=>{U.includes(J)?X.classList.add(J):X.classList.remove(J)})}else X.setAttribute(B,Q);u&&(r.getComputedStyle(D).opacity,document.head.removeChild(D))});function v(S){var B;R(e,n,(B=f[S])!=null?B:S)}function w(S){t.onChanged?t.onChanged(S,v):v(S)}_n(b,w,{flush:"post",immediate:!0}),f1(()=>w(b.value));const O=Ee({get(){return c?_.value:b.value},set(S){_.value=S}});try{return Object.assign(O,{store:_,system:m,state:b})}catch{return O}}function E1(t={}){const{valueDark:e="dark",valueLight:n=""}=t,i=b1({...t,onChanged:(s,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,s==="dark",o,s):o(s)},modes:{dark:e,light:n}});return Ee({get(){return i.value==="dark"},set(s){const o=s?"dark":"light";i.system.value===o?i.value="auto":i.value=o}})}const I1={},T1={class:"switch",type:"button",role:"switch"},C1={class:"check"},S1={class:"icon"};function A1(t,e){return ke(),rt("button",T1,[Ht("span",C1,[Ht("span",S1,[Lb(t.$slots,"default",{},void 0,!0)])])])}const R1=Qn(I1,[["render",A1],["__scopeId","data-v-fd0bf0d3"]]),k1={},P1={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},O1=rE('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),N1=[O1];function x1(t,e){return ke(),rt("svg",P1,N1)}const D1=Qn(k1,[["render",x1]]),M1={},L1={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},F1=Ht("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),U1=[F1];function j1(t,e){return ke(),rt("svg",L1,U1)}const $1=Qn(M1,[["render",j1]]),B1=It({__name:"SwitchAppearance",setup(t){const e=E1(),n=Ue("toggle-appearance",()=>{e.value=!e.value});return(i,r)=>(ke(),sr(R1,{title:"toggle dark mode",class:"switch-appearance","aria-checked":it(e),onClick:it(n)},{default:vi(()=>[oe(D1,{class:"sun"}),oe($1,{class:"moon"})]),_:1},8,["aria-checked","onClick"]))}});const H1={class:"appearance"},W1=It({__name:"NavBarAppearance",setup(t){return(e,n)=>(ke(),rt("div",H1,[oe(B1)]))}});/**
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
 */const Qg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(t,e){if(!t)throw Sr(e)},Sr=function(t){return new Error("Firebase Database ("+Qg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Zg=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},V1=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),i.push(n[u],n[f],n[h],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):V1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw new z1;const h=s<<2|a>>4;if(i.push(h),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const _=c<<6&192|f;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class z1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const e_=function(t){const e=Zg(t);return rf.encodeByteArray(e,!0)},t_=function(t){return e_(t).replace(/\./g,"")},ra=function(t){try{return rf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function K1(t){return n_(void 0,t)}function n_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!q1(n)||(t[n]=n_(t[n],e[n]));return t}function q1(t){return t!=="__proto__"}/**
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
 */function G1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Y1=()=>G1().__FIREBASE_DEFAULTS__,X1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},J1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ra(t[1]);return e&&JSON.parse(e)},sf=()=>{try{return Y1()||X1()||J1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q1=t=>{var e,n;return(n=(e=sf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},i_=()=>{var t;return(t=sf())===null||t===void 0?void 0:t.config},r_=t=>{var e;return(e=sf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class of{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function s_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function o_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Z1(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function a_(){return Qg.NODE_ADMIN===!0}function l_(){try{return typeof indexedDB=="object"}catch{return!1}}function c_(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function eT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tT="FirebaseError";class zt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=tT,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?nT(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new zt(r,a,i)}}function nT(t,e){return t.replace(iT,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const iT=/\{\$([^}]+)}/g;/**
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
 */function Es(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
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
 */const u_=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Es(ra(s[0])||""),n=Es(ra(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},rT=function(t){const e=u_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sT=function(t){const e=u_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sa(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Is(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(xd(s)&&xd(o)){if(!Is(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function xd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ar(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Gr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Yr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class oT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function aT(t,e){const n=new lT(t,e);return n.subscribe.bind(n)}class lT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");cT(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Ul),r.error===void 0&&(r.error=Ul),r.complete===void 0&&(r.complete=Ul);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ul(){}function uT(t,e){return`${t} failed: ${e} argument `}/**
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
 */const fT=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,N(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Qa=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const hT=1e3,dT=2,pT=4*60*60*1e3,mT=.5;function Dd(t,e=hT,n=dT){const i=e*Math.pow(n,t),r=Math.round(mT*i*(Math.random()-.5)*2);return Math.min(pT,i+r)}/**
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
 */function Kt(t){return t&&t._delegate?t._delegate:t}class kt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const si="[DEFAULT]";/**
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
 */class gT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new of;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vT(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_T(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _T(t){return t===si?void 0:t}function vT(t){return t.instantiationMode==="EAGER"}/**
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
 */class yT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const wT={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},bT=ue.INFO,ET={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},IT=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=ET[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ks{constructor(e){this.name=e,this._logLevel=bT,this._logHandler=IT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const TT=(t,e)=>e.some(n=>t instanceof n);let Md,Ld;function CT(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ST(){return Ld||(Ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f_=new WeakMap,xc=new WeakMap,h_=new WeakMap,jl=new WeakMap,lf=new WeakMap;function AT(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hn(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&f_.set(n,t)}).catch(()=>{}),lf.set(e,t),e}function RT(t){if(xc.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xc.set(t,e)}let Dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||h_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kT(t){Dc=t(Dc)}function PT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call($l(this),e,...n);return h_.set(i,e.sort?e.sort():[e]),Hn(i)}:ST().includes(t)?function(...e){return t.apply($l(this),e),Hn(f_.get(this))}:function(...e){return Hn(t.apply($l(this),e))}}function OT(t){return typeof t=="function"?PT(t):(t instanceof IDBTransaction&&RT(t),TT(t,CT())?new Proxy(t,Dc):t)}function Hn(t){if(t instanceof IDBRequest)return AT(t);if(jl.has(t))return jl.get(t);const e=OT(t);return e!==t&&(jl.set(t,e),lf.set(e,t)),e}const $l=t=>lf.get(t);function NT(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Hn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xT=["get","getKey","getAll","getAllKeys","count"],DT=["put","add","delete","clear"],Bl=new Map;function Fd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bl.get(e))return Bl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=DT.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||xT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Bl.set(e,s),s}kT(t=>({...t,get:(e,n,i)=>Fd(e,n)||t.get(e,n,i),has:(e,n)=>!!Fd(e,n)||t.has(e,n)}));/**
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
 */class MT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LT(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function LT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",Ud="0.9.20";/**
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
 */const Ti=new Ks("@firebase/app"),FT="@firebase/app-compat",UT="@firebase/analytics-compat",jT="@firebase/analytics",$T="@firebase/app-check-compat",BT="@firebase/app-check",HT="@firebase/auth",WT="@firebase/auth-compat",VT="@firebase/database",zT="@firebase/database-compat",KT="@firebase/functions",qT="@firebase/functions-compat",GT="@firebase/installations",YT="@firebase/installations-compat",XT="@firebase/messaging",JT="@firebase/messaging-compat",QT="@firebase/performance",ZT="@firebase/performance-compat",eC="@firebase/remote-config",tC="@firebase/remote-config-compat",nC="@firebase/storage",iC="@firebase/storage-compat",rC="@firebase/firestore",sC="@firebase/firestore-compat",oC="firebase",aC="10.5.0";/**
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
 */const Lc="[DEFAULT]",lC={[Mc]:"fire-core",[FT]:"fire-core-compat",[jT]:"fire-analytics",[UT]:"fire-analytics-compat",[BT]:"fire-app-check",[$T]:"fire-app-check-compat",[HT]:"fire-auth",[WT]:"fire-auth-compat",[VT]:"fire-rtdb",[zT]:"fire-rtdb-compat",[KT]:"fire-fn",[qT]:"fire-fn-compat",[GT]:"fire-iid",[YT]:"fire-iid-compat",[XT]:"fire-fcm",[JT]:"fire-fcm-compat",[QT]:"fire-perf",[ZT]:"fire-perf-compat",[eC]:"fire-rc",[tC]:"fire-rc-compat",[nC]:"fire-gcs",[iC]:"fire-gcs-compat",[rC]:"fire-fst",[sC]:"fire-fst-compat","fire-js":"fire-js",[oC]:"fire-js-all"};/**
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
 */const oa=new Map,Fc=new Map;function cC(t,e){try{t.container.addComponent(e)}catch(n){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vt(t){const e=t.name;if(Fc.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,t);for(const n of oa.values())cC(n,t);return!0}function Rr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const uC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new Mi("app","Firebase",uC);/**
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
 */class fC{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Li=aC;function d_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Lc,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Wn.create("bad-app-name",{appName:String(r)});if(n||(n=i_()),!n)throw Wn.create("no-options");const s=oa.get(r);if(s){if(Is(n,s.options)&&Is(i,s.config))return s;throw Wn.create("duplicate-app",{appName:r})}const o=new yT(r);for(const l of Fc.values())o.addComponent(l);const a=new fC(n,i,o);return oa.set(r,a),a}function p_(t=Lc){const e=oa.get(t);if(!e&&t===Lc&&i_())return d_();if(!e)throw Wn.create("no-app",{appName:t});return e}function ft(t,e,n){var i;let r=(i=lC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(a.join(" "));return}Vt(new kt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hC="firebase-heartbeat-database",dC=1,Ts="firebase-heartbeat-store";let Hl=null;function m_(){return Hl||(Hl=NT(hC,dC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ts)}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Hl}async function pC(t){try{return await(await m_()).transaction(Ts).objectStore(Ts).get(g_(t))}catch(e){if(e instanceof zt)Ti.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ti.warn(n.message)}}}async function jd(t,e){try{const i=(await m_()).transaction(Ts,"readwrite");await i.objectStore(Ts).put(e,g_(t)),await i.done}catch(n){if(n instanceof zt)Ti.warn(n.message);else{const i=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ti.warn(i.message)}}}function g_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mC=1024,gC=30*24*60*60*1e3;class _C{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$d();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=gC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$d(),{heartbeatsToSend:n,unsentEntries:i}=vC(this._heartbeatsCache.heartbeats),r=t_(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function $d(){return new Date().toISOString().substring(0,10)}function vC(t,e=mC){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Bd(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Bd(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class yC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l_()?c_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bd(t){return t_(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wC(t){Vt(new kt("platform-logger",e=>new MT(e),"PRIVATE")),Vt(new kt("heartbeat",e=>new _C(e),"PRIVATE")),ft(Mc,Ud,t),ft(Mc,Ud,"esm2017"),ft("fire-js","")}wC("");var bC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,cf=cf||{},q=bC||self;function Za(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function EC(t){return Object.prototype.hasOwnProperty.call(t,Wl)&&t[Wl]||(t[Wl]=++IC)}var Wl="closure_uid_"+(1e9*Math.random()>>>0),IC=0;function TC(t,e,n){return t.call.apply(t.bind,arguments)}function CC(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=TC:Qe=CC,Qe.apply(null,arguments)}function To(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Zn(){this.s=this.s,this.o=this.o}var SC=0;Zn.prototype.s=!1;Zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SC!=0)&&EC(this)};Zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const __=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function uf(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Hd(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Za(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var AC=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",()=>{},e),q.removeEventListener("test",()=>{},e)}catch{}return t}();function Cs(t){return/^[\s\xa0]*$/.test(t)}function el(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return el().indexOf(t)!=-1}function ff(t){return ff[" "](t),t}ff[" "]=function(){};function RC(t,e){var n=bS;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var kC=Qt("Opera"),Ss=Qt("Trident")||Qt("MSIE"),v_=Qt("Edge"),Uc=v_||Ss,y_=Qt("Gecko")&&!(el().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),PC=el().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function w_(){var t=q.document;return t?t.documentMode:void 0}e:{var Wd="",Vl=function(){var t=el();if(y_)return/rv:([^\);]+)(\)|;)/.exec(t);if(v_)return/Edge\/([\d\.]+)/.exec(t);if(Ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PC)return/WebKit\/(\S+)/.exec(t);if(kC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vl&&(Wd=Vl?Vl[1]:""),Ss){var Vd=w_();if(Vd!=null&&Vd>parseFloat(Wd))break e}}q.document&&Ss&&w_();function As(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y_){e:{try{ff(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:OC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&As.$.h.call(this)}}Be(As,Ze);var OC={2:"touch",3:"pen",4:"mouse"};As.prototype.h=function(){As.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gs="closure_listenable_"+(1e6*Math.random()|0),NC=0;function xC(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++NC,this.fa=this.ia=!1}function tl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function hf(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function DC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function b_(t){const e={};for(const n in t)e[n]=t[n];return e}const zd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E_(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<zd.length;s++)n=zd[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function nl(t){this.src=t,this.g={},this.h=0}nl.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=$c(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xC(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function jc(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=__(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(tl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function $c(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var df="closure_lm_"+(1e6*Math.random()|0),zl={};function I_(t,e,n,i,r){if(i&&i.once)return C_(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)I_(t,e[s],n,i,r);return null}return n=gf(n),t&&t[Gs]?t.O(e,n,qs(i)?!!i.capture:!!i,r):T_(t,e,n,!1,i,r)}function T_(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=qs(r)?!!r.capture:!!r,a=mf(t);if(a||(t[df]=a=new nl(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=MC(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)AC||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(A_(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function MC(){function t(n){return e.call(t.src,t.listener,n)}const e=LC;return t}function C_(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)C_(t,e[s],n,i,r);return null}return n=gf(n),t&&t[Gs]?t.P(e,n,qs(i)?!!i.capture:!!i,r):T_(t,e,n,!0,i,r)}function S_(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)S_(t,e[s],n,i,r);else i=qs(i)?!!i.capture:!!i,n=gf(n),t&&t[Gs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=$c(s,n,i,r),-1<n&&(tl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=mf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$c(e,n,i,r)),(n=-1<t?e[t]:null)&&pf(n))}function pf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Gs])jc(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(A_(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=mf(e))?(jc(n,t),n.h==0&&(n.src=null,e[df]=null)):tl(t)}}}function A_(t){return t in zl?zl[t]:zl[t]="on"+t}function LC(t,e){if(t.fa)t=!0;else{e=new As(e,this);var n=t.listener,i=t.la||t.src;t.ia&&pf(t),t=n.call(i,e)}return t}function mf(t){return t=t[df],t instanceof nl?t:null}var Kl="__closure_events_fn_"+(1e9*Math.random()>>>0);function gf(t){return typeof t=="function"?t:(t[Kl]||(t[Kl]=function(e){return t.handleEvent(e)}),t[Kl])}function $e(){Zn.call(this),this.i=new nl(this),this.S=this,this.J=null}Be($e,Zn);$e.prototype[Gs]=!0;$e.prototype.removeEventListener=function(t,e,n,i){S_(this,t,e,n,i)};function Ve(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var r=e;e=new Ze(i,t),E_(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Co(o,i,!0,e)&&r}if(o=e.g=t,r=Co(o,i,!0,e)&&r,r=Co(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Co(o,i,!1,e)&&r}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)tl(n[i]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};$e.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Co(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&jc(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var _f=q.JSON.stringify;class FC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function UC(){var t=vf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jC{constructor(){this.h=this.g=null}add(e,n){const i=R_.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var R_=new FC(()=>new $C,t=>t.reset());class $C{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function HC(t){q.setTimeout(()=>{throw t},0)}let Rs,ks=!1,vf=new jC,k_=()=>{const t=q.Promise.resolve(void 0);Rs=()=>{t.then(WC)}};var WC=()=>{for(var t;t=UC();){try{t.h.call(t.g)}catch(n){HC(n)}var e=R_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ks=!1};function il(t,e){$e.call(this),this.h=t||1,this.g=e||q,this.j=Qe(this.qb,this),this.l=Date.now()}Be(il,$e);x=il.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ve(this,"tick"),this.ga&&(yf(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){il.$.N.call(this),yf(this),delete this.g};function wf(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function P_(t){t.g=wf(()=>{t.g=null,t.i&&(t.i=!1,P_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VC extends Zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:P_(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ps(t){Zn.call(this),this.h=t,this.g={}}Be(Ps,Zn);var Kd=[];function O_(t,e,n,i){Array.isArray(n)||(n&&(Kd[0]=n.toString()),n=Kd);for(var r=0;r<n.length;r++){var s=I_(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function N_(t){hf(t.g,function(e,n){this.g.hasOwnProperty(n)&&pf(e)},t),t.g={}}Ps.prototype.N=function(){Ps.$.N.call(this),N_(this)};Ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rl(){this.g=!0}rl.prototype.Ea=function(){this.g=!1};function zC(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function KC(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function Ji(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+GC(t,n)+(i?" "+i:"")})}function qC(t,e){t.info(function(){return"TIMEOUT: "+e})}rl.prototype.info=function(){};function GC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return _f(n)}catch{return e}}var kr={},qd=null;function bf(){return qd=qd||new $e}kr.Ta="serverreachability";function x_(t){Ze.call(this,kr.Ta,t)}Be(x_,Ze);function Os(t){const e=bf();Ve(e,new x_(e))}kr.STAT_EVENT="statevent";function D_(t,e){Ze.call(this,kr.STAT_EVENT,t),this.stat=e}Be(D_,Ze);function nt(t){const e=bf();Ve(e,new D_(e,t))}kr.Ua="timingevent";function M_(t,e){Ze.call(this,kr.Ua,t),this.size=e}Be(M_,Ze);function Ys(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Ef={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},YC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function If(){}If.prototype.h=null;function Gd(t){return t.h||(t.h=t.i())}function XC(){}var Xs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Tf(){Ze.call(this,"d")}Be(Tf,Ze);function Cf(){Ze.call(this,"c")}Be(Cf,Ze);var Bc;function sl(){}Be(sl,If);sl.prototype.g=function(){return new XMLHttpRequest};sl.prototype.i=function(){return{}};Bc=new sl;function Js(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Ps(this),this.P=JC,t=Uc?125:void 0,this.V=new il(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new L_}function L_(){this.i=null,this.g="",this.h=!1}var JC=45e3,Hc={},aa={};x=Js.prototype;x.setTimeout=function(t){this.P=t};function Wc(t,e,n){t.L=1,t.v=al(yn(e)),t.s=n,t.S=!0,F_(t,null)}function F_(t,e){t.G=Date.now(),Qs(t),t.A=yn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),z_(n.i,"t",i),t.C=0,n=t.l.J,t.h=new L_,t.g=hv(t.l,n?e:null,!t.s),0<t.O&&(t.M=new VC(Qe(t.Pa,t,t.g),t.O)),O_(t.U,t.g,"readystatechange",t.nb),e=t.I?b_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Os(),zC(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&Zt(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=Zt(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||Uc||this.g&&(this.h.h||this.g.ja()||Qd(this.g)))){this.J||u!=4||e==7||(e==8||0>=f?Os(3):Os(2)),ol(this);var n=this.g.da();this.ca=n;t:if(U_(this)){var i=Qd(this.g);t="";var r=i.length,s=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ui(this),rs(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,KC(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cs(a)){var c=a;break t}}c=null}if(n=c)Ji(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vc(this,n);else{this.i=!1,this.o=3,nt(12),ui(this),rs(this);break e}}this.S?(j_(this,u,o),Uc&&this.i&&u==3&&(O_(this.U,this.V,"tick",this.mb),this.V.start())):(Ji(this.j,this.m,o,null),Vc(this,o)),u==4&&ui(this),this.i&&!this.J&&(u==4?lv(this.l,this):(this.i=!1,Qs(this)))}else vS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),ui(this),rs(this)}}}catch{}finally{}};function U_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function j_(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=QC(t,n),r==aa){e==4&&(t.o=4,nt(14),i=!1),Ji(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Hc){t.o=4,nt(15),Ji(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ji(t.j,t.m,r,null),Vc(t,r);U_(t)&&r!=aa&&r!=Hc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Of(e),e.M=!0,nt(11))):(Ji(t.j,t.m,n,"[Invalid Chunked Response]"),ui(t),rs(t))}x.mb=function(){if(this.g){var t=Zt(this.g),e=this.g.ja();this.C<e.length&&(ol(this),j_(this,t,e),this.i&&t!=4&&Qs(this))}};function QC(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?aa:(n=Number(e.substring(n,i)),isNaN(n)?Hc:(i+=1,i+n>e.length?aa:(e=e.slice(i,i+n),t.C=i+n,e)))}x.cancel=function(){this.J=!0,ui(this)};function Qs(t){t.Y=Date.now()+t.P,$_(t,t.P)}function $_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ys(Qe(t.lb,t),e)}function ol(t){t.B&&(q.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(qC(this.j,this.A),this.L!=2&&(Os(),nt(17)),ui(this),this.o=2,rs(this)):$_(this,this.Y-t)};function rs(t){t.l.H==0||t.J||lv(t.l,t)}function ui(t){ol(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,yf(t.V),N_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Vc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||zc(n.i,t))){if(!t.K&&zc(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ua(n),fl(n);else break e;Pf(n),nt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ys(Qe(n.ib,n),6e3));if(1>=G_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else fi(n,11)}else if((t.K||n.g==t)&&ua(n),!Cs(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=c[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(i=1.5*h,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=i.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sf(s,s.h),s.h=null))}if(i.F){const b=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(i.Da=b,Ie(i.I,i.F,b))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=fv(i,i.J?i.pa:null,i.Y),o.K){Y_(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(ol(a),Qs(a)),i.g=o}else ov(i);0<n.j.length&&hl(n)}else c[0]!="stop"&&c[0]!="close"||fi(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?fi(n,7):kf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Os(4)}catch{}}function ZC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Za(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function eS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Za(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function B_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Za(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=eS(t),i=ZC(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var H_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function wi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wi){this.h=t.h,la(this,t.j),this.s=t.s,this.g=t.g,ca(this,t.m),this.l=t.l;var e=t.i,n=new Ns;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Yd(this,n),this.o=t.o}else t&&(e=String(t).match(H_))?(this.h=!1,la(this,e[1]||"",!0),this.s=Xr(e[2]||""),this.g=Xr(e[3]||"",!0),ca(this,e[4]),this.l=Xr(e[5]||"",!0),Yd(this,e[6]||"",!0),this.o=Xr(e[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jr(e,Xd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Jr(e,Xd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Jr(n,n.charAt(0)=="/"?rS:iS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jr(n,oS)),t.join("")};function yn(t){return new wi(t)}function la(t,e,n){t.j=n?Xr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yd(t,e,n){e instanceof Ns?(t.i=e,aS(t.i,t.h)):(n||(e=Jr(e,sS)),t.i=new Ns(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function al(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,nS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xd=/[#\/\?@]/g,iS=/[#\?:]/g,rS=/[#\?]/g,sS=/[#\?@]/g,oS=/#/g;function Ns(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ei(t){t.g||(t.g=new Map,t.h=0,t.i&&tS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Ns.prototype;x.add=function(t,e){ei(this),this.i=null,t=Pr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function W_(t,e){ei(t),e=Pr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function V_(t,e){return ei(t),e=Pr(t,e),t.g.has(e)}x.forEach=function(t,e){ei(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};x.ta=function(){ei(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};x.Z=function(t){ei(this);let e=[];if(typeof t=="string")V_(this,t)&&(e=e.concat(this.g.get(Pr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return ei(this),this.i=null,t=Pr(this,t),V_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function z_(t,e,n){W_(t,e),0<n.length&&(t.i=null,t.g.set(Pr(t,e),uf(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function Pr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function aS(t,e){e&&!t.j&&(ei(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(W_(this,i),z_(this,r,n))},t)),t.j=e}var lS=class{constructor(t,e){this.g=t,this.map=e}};function K_(t){this.l=t||cS,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cS=10;function q_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function G_(t){return t.h?1:t.g?t.g.size:0}function zc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sf(t,e){t.g?t.g.add(e):t.h=e}function Y_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}K_.prototype.cancel=function(){if(this.i=X_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function X_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return uf(t.i)}var uS=class{stringify(t){return q.JSON.stringify(t,void 0)}parse(t){return q.JSON.parse(t,void 0)}};function fS(){this.g=new uS}function hS(t,e,n){const i=n||"";try{B_(t,function(r,s){let o=r;qs(r)&&(o=_f(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function dS(t,e){const n=new rl;if(q.Image){const i=new Image;i.onload=To(So,n,i,"TestLoadImage: loaded",!0,e),i.onerror=To(So,n,i,"TestLoadImage: error",!1,e),i.onabort=To(So,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=To(So,n,i,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function So(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function ll(t){this.l=t.ec||null,this.j=t.ob||!1}Be(ll,If);ll.prototype.g=function(){return new cl(this.l,this.j)};ll.prototype.i=function(t){return function(){return t}}({});function cl(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Af,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(cl,$e);var Af=0;x=cl.prototype;x.open=function(t,e){if(this.readyState!=Af)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xs(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=Af};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;J_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function J_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zs(this):xs(this),this.readyState==3&&J_(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Zs(this))};x.Ya=function(t){this.g&&(this.response=t,Zs(this))};x.ka=function(){this.g&&Zs(this)};function Zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xs(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pS=q.JSON.parse;function Pe(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Q_,this.L=this.M=!1}Be(Pe,$e);var Q_="",mS=/^https?$/i,gS=["POST","PUT"];x=Pe.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Bc.g(),this.C=this.u?Gd(this.u):Gd(Bc),this.g.onreadystatechange=Qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Jd(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=q.FormData&&t instanceof q.FormData,!(0<=__(gS,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{tv(this),0<this.B&&((this.L=_S(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.ua,this)):this.A=wf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Jd(this,s)}};function _S(t){return Ss&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof cf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function Jd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Z_(t),ul(t)}function Z_(t){t.F||(t.F=!0,Ve(t,"complete"),Ve(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),ul(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ul(this,!0)),Pe.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?ev(this):this.kb())};x.kb=function(){ev(this)};function ev(t){if(t.h&&typeof cf<"u"&&(!t.C[1]||Zt(t)!=4||t.da()!=2)){if(t.v&&Zt(t)==4)wf(t.La,0,t);else if(Ve(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(H_)[1]||null;!r&&q.self&&q.self.location&&(r=q.self.location.protocol.slice(0,-1)),i=!mS.test(r?r.toLowerCase():"")}n=i}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var s=2<Zt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Z_(t)}}finally{ul(t)}}}}function ul(t,e){if(t.g){tv(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=i}catch{}}}function tv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function Zt(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pS(e)}};function Qd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Q_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function vS(t){const e={};t=(t.g&&2<=Zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(Cs(t[i]))continue;var n=BC(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}DC(e,function(i){return i.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nv(t){let e="";return hf(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Rf(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=nv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function $r(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function iv(t){this.Ga=0,this.j=[],this.l=new rl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$r("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$r("baseRetryDelayMs",5e3,t),this.hb=$r("retryDelaySeedMs",1e4,t),this.eb=$r("forwardChannelMaxRetries",2,t),this.xa=$r("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new K_(t&&t.concurrentRequestLimit),this.Ja=new fS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=iv.prototype;x.ra=8;x.H=1;function kf(t){if(rv(t),t.H==3){var e=t.W++,n=yn(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),eo(t,n),e=new Js(t,t.l,e),e.L=2,e.v=al(yn(n)),n=!1,q.navigator&&q.navigator.sendBeacon)try{n=q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=hv(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Qs(e)}uv(t)}function fl(t){t.g&&(Of(t),t.g.cancel(),t.g=null)}function rv(t){fl(t),t.u&&(q.clearTimeout(t.u),t.u=null),ua(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function hl(t){if(!q_(t.i)&&!t.m){t.m=!0;var e=t.Na;Rs||k_(),ks||(Rs(),ks=!0),vf.add(e,t),t.C=0}}function yS(t,e){return G_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ys(Qe(t.Na,t,e),cv(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Js(this,this.l,t);let s=this.s;if(this.U&&(s?(s=b_(s),E_(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sv(this,r,e),n=yn(this.I),Ie(n,"RID",t),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),eo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(nv(s)))+"&"+e:this.o&&Rf(n,this.o,s)),Sf(this.i,r),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),r.aa=!0,Wc(r,n,null)):Wc(r,n,e),this.H=2}}else this.H==3&&(t?Zd(this,t):this.j.length==0||q_(this.i)||Zd(this))};function Zd(t,e){var n;e?n=e.m:n=t.W++;const i=yn(t.I);Ie(i,"SID",t.K),Ie(i,"RID",n),Ie(i,"AID",t.V),eo(t,i),t.o&&t.s&&Rf(i,t.o,t.s),n=new Js(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=sv(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sf(t.i,n),Wc(n,i,e)}function eo(t,e){t.na&&hf(t.na,function(n,i){Ie(e,i,n)}),t.h&&B_({},function(n,i){Ie(e,i,n)})}function sv(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Qe(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=s,0>c)s=Math.max(0,r[l].g-100),a=!1;else try{hS(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function ov(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Rs||k_(),ks||(Rs(),ks=!0),vf.add(e,t),t.A=0}}function Pf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ys(Qe(t.Ma,t),cv(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,av(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ys(Qe(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),fl(this),av(this))};function Of(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function av(t){t.g=new Js(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=yn(t.wa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.V),Ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ie(e,"TO",t.qa),Ie(e,"TYPE","xmlhttp"),eo(t,e),t.o&&t.s&&Rf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=al(yn(e)),n.s=null,n.S=!0,F_(n,t)}x.ib=function(){this.v!=null&&(this.v=null,fl(this),Pf(this),nt(19))};function ua(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function lv(t,e){var n=null;if(t.g==e){ua(t),Of(t),t.g=null;var i=2}else if(zc(t.i,e))n=e.F,Y_(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=bf(),Ve(i,new M_(i,n)),hl(t)}else ov(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&yS(t,e)||i==2&&Pf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:fi(t,5);break;case 4:fi(t,10);break;case 3:fi(t,6);break;default:fi(t,2)}}}function cv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function fi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=Qe(t.pb,t);n||(n=new wi("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||la(n,"https"),al(n)),dS(n.toString(),i)}else nt(2);t.H=0,t.h&&t.h.za(e),uv(t),rv(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function uv(t){if(t.H=0,t.ma=[],t.h){const e=X_(t.i);(e.length!=0||t.j.length!=0)&&(Hd(t.ma,e),Hd(t.ma,t.j),t.i.i.length=0,uf(t.j),t.j.length=0),t.h.ya()}}function fv(t,e,n){var i=n instanceof wi?yn(n):new wi(n);if(i.g!="")e&&(i.g=e+"."+i.g),ca(i,i.m);else{var r=q.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new wi(null);i&&la(s,i),e&&(s.g=e),r&&ca(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&Ie(i,n,e),Ie(i,"VER",t.ra),eo(t,i),i}function hv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Pe(new ll({ob:!0})):new Pe(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function dv(){}x=dv.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Pt(t,e){$e.call(this),this.g=new iv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Cs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Or(this)}Be(Pt,$e);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=fv(t,null,t.Y),hl(t)};Pt.prototype.close=function(){kf(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_f(t),t=n);e.j.push(new lS(e.fb++,t)),e.H==3&&hl(e)};Pt.prototype.N=function(){this.g.h=null,delete this.j,kf(this.g),delete this.g,Pt.$.N.call(this)};function pv(t){Tf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(pv,Tf);function mv(){Cf.call(this),this.status=1}Be(mv,Cf);function Or(t){this.g=t}Be(Or,dv);Or.prototype.Ba=function(){Ve(this.g,"a")};Or.prototype.Aa=function(t){Ve(this.g,new pv(t))};Or.prototype.za=function(t){Ve(this.g,new mv)};Or.prototype.ya=function(){Ve(this.g,"b")};function wS(){this.blockSize=-1}function an(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(an,wS);an.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ql(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}an.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)ql(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){ql(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){ql(this,i),r=0;break}}this.h=r,this.i+=e};an.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function de(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var bS={};function Nf(t){return-128<=t&&128>t?RC(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function en(t){if(isNaN(t)||!isFinite(t))return ar;if(0>t)return He(en(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Kc;return new de(e,0)}function gv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return He(gv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=en(Math.pow(e,8)),i=ar,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=en(Math.pow(e,s)),i=i.R(s).add(en(o))):(i=i.R(n),i=i.add(en(o)))}return i}var Kc=4294967296,ar=Nf(0),qc=Nf(1),ep=Nf(16777216);x=de.prototype;x.ea=function(){if(At(this))return-He(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Kc+i)*e,e*=Kc}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(hn(this))return"0";if(At(this))return"-"+He(this).toString(t);for(var e=en(Math.pow(t,6)),n=this,i="";;){var r=ha(n,e).g;n=fa(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,hn(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function hn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function At(t){return t.h==-1}x.X=function(t){return t=fa(this,t),At(t)?-1:hn(t)?0:1};function He(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new de(n,~t.h).add(qc)}x.abs=function(){return At(this)?He(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new de(n,n[n.length-1]&-2147483648?-1:0)};function fa(t,e){return t.add(He(e))}x.R=function(t){if(hn(this)||hn(t))return ar;if(At(this))return At(t)?He(this).R(He(t)):He(He(this).R(t));if(At(t))return He(this.R(He(t)));if(0>this.X(ep)&&0>t.X(ep))return en(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*i+2*r]+=o*l,Ao(n,2*i+2*r),n[2*i+2*r+1]+=s*l,Ao(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Ao(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Ao(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new de(n,0)};function Ao(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Br(t,e){this.g=t,this.h=e}function ha(t,e){if(hn(e))throw Error("division by zero");if(hn(t))return new Br(ar,ar);if(At(t))return e=ha(He(t),e),new Br(He(e.g),He(e.h));if(At(e))return e=ha(t,He(e)),new Br(He(e.g),e.h);if(30<t.g.length){if(At(t)||At(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qc,i=e;0>=i.X(t);)n=tp(n),i=tp(i);var r=zi(n,1),s=zi(i,1);for(i=zi(i,2),n=zi(n,2);!hn(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=zi(i,1),n=zi(n,1)}return e=fa(t,r.R(e)),new Br(r,e)}for(r=ar;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=en(n),o=s.R(e);At(o)||0<o.X(t);)n-=i,s=en(n),o=s.R(e);hn(s)&&(s=qc),r=r.add(s),t=fa(t,o)}return new Br(r,t)}x.gb=function(t){return ha(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new de(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new de(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new de(n,this.h^t.h)};function tp(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new de(n,t.h)}function zi(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new de(r,t.h)}Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;Ef.NO_ERROR=0;Ef.TIMEOUT=8;Ef.HTTP_ERROR=6;YC.COMPLETE="complete";XC.EventType=Xs;Xs.OPEN="a";Xs.CLOSE="b";Xs.ERROR="c";Xs.MESSAGE="d";$e.prototype.listen=$e.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;an.prototype.digest=an.prototype.l;an.prototype.reset=an.prototype.reset;an.prototype.update=an.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=en;de.fromString=gv;var ES=de;const np="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let dl="10.5.0";/**
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
 */const da=new Ks("@firebase/firestore");function yt(t,...e){if(da.logLevel<=ue.DEBUG){const n=e.map(_v);da.debug(`Firestore (${dl}): ${t}`,...n)}}function xf(t,...e){if(da.logLevel<=ue.ERROR){const n=e.map(_v);da.error(`Firestore (${dl}): ${t}`,...n)}}function _v(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function vv(t="Unexpected state"){const e=`FIRESTORE (${dl}) INTERNAL ASSERTION FAILED: `+t;throw xf(e),new Error(e)}function Gc(t,e){t||vv()}/**
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
 */const _t={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class vt extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class IS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class CS{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lr,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{yt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(yt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(yt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Gc(typeof i.accessToken=="string"),new IS(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Gc(e===null||typeof e=="string"),new lt(e)}}class SS{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AS{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new SS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=s=>{s.error!=null&&yt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,yt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{yt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):yt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Gc(typeof n.token=="string"),this.R=n.token,new RS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function PS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class OS{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=PS(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function yv(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class NS{constructor(e,n,i,r,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class pa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var ip,te;(te=ip||(ip={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ES([4294967295,4294967295],0);function Gl(){return typeof document<"u"?document:null}/**
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
 */class xS{constructor(e,n,i=1e3,r=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=i,this.xo=r,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),i=Math.max(0,Date.now()-this.Lo),r=Math.max(0,n-i);r>0&&yt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Df{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Df(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new vt(_t.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function DS(t,e){if(xf("AsyncQueue",`${e}: ${t}`),yv(t))return new vt(_t.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class MS{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=lt.UNAUTHENTICATED,this.clientId=OS.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{yt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(yt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new vt(_t.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=DS(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
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
 */function wv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rp=new Map;function LS(t,e,n,i){if(e===!0&&i===!0)throw new vt(_t.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
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
 */class sp{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new vt(_t.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new vt(_t.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wv((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new vt(_t.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new vt(_t.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new vt(_t.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class FS{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new vt(_t.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new vt(_t.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sp(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new TS;switch(i.type){case"firstParty":return new AS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new vt(_t.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=rp.get(n);i&&(yt("ComponentProvider","Removing Datastore"),rp.delete(n),i.terminate())}(this),Promise.resolve()}}/**
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
 */class US{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new xS(this,"async_queue_retry"),this.su=()=>{const n=Gl();n&&yt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Gl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=Gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new lr;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!yv(e))throw e;yt("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(i=>{this.tu=i,this.nu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw xf("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.nu=!1,i))));return this.Ya=n,n}enqueueAfterDelay(e,n,i){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const r=Df.createAndSchedule(this,e,n,i,s=>this.uu(s));return this.eu.push(r),r}ou(){this.tu&&vv()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}class jS extends FS{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=function(){return new US}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$S(this),this._firestoreClient.terminate()}}function $S(t){var e,n,i;const r=t._freezeSettings(),s=function(a,l,c,u){return new NS(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,wv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new MS(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}(function(e,n=!0){(function(r){dl=r})(Li),Vt(new kt("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new jS(new CS(i.getProvider("auth-internal")),new kS(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new vt(_t.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(c.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ft(np,"4.3.0",e),ft(np,"4.3.0","esm2017")})();const op="@firebase/database",ap="1.0.1";/**
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
 */let bv="";function BS(t){bv=t}/**
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
 */class HS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class WS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ev=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HS(e)}}catch{}return new WS},hi=Ev("localStorage"),Yc=Ev("sessionStorage");/**
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
 */const cr=new Ks("@firebase/database"),VS=function(){let t=1;return function(){return t++}}(),Iv=function(t){const e=fT(t),n=new oT;n.update(e);const i=n.digest();return rf.encodeByteArray(i)},to=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=to.apply(null,i):typeof i=="object"?e+=We(i):e+=i,e+=" "}return e};let bi=null,lp=!0;const zS=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(cr.logLevel=ue.VERBOSE,bi=cr.log.bind(cr),e&&Yc.set("logging_enabled",!0)):typeof t=="function"?bi=t:(bi=null,Yc.remove("logging_enabled"))},Ge=function(...t){if(lp===!0&&(lp=!1,bi===null&&Yc.get("logging_enabled")===!0&&zS(!0)),bi){const e=to.apply(null,t);bi(e)}},no=function(t){return function(...e){Ge(t,...e)}},Xc=function(...t){const e="FIREBASE INTERNAL ERROR: "+to(...t);cr.error(e)},Ci=function(...t){const e=`FIREBASE FATAL ERROR: ${to(...t)}`;throw cr.error(e),new Error(e)},wt=function(...t){const e="FIREBASE WARNING: "+to(...t);cr.warn(e)},KS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wr="[MIN_NAME]",Si="[MAX_NAME]",Nr=function(t,e){if(t===e)return 0;if(t===wr||e===Si)return-1;if(e===wr||t===Si)return 1;{const n=cp(t),i=cp(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},GS=function(t,e){return t===e?0:t<e?-1:1},Hr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},Mf=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=We(e[i]),n+=":",n+=Mf(t[e[i]]);return n+="}",n},Cv=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sv=function(t){N(!Tv(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},YS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},JS=new RegExp("^-?(0*)\\d{1,10}$"),QS=-2147483648,ZS=2147483647,cp=function(t){if(JS.test(t)){const e=Number(t);if(e>=QS&&e<=ZS)return e}return null},io=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},eA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ss=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class tA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class nA{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class Jc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jc.OWNER="owner";/**
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
 */const Lf="5",Av="v",Rv="s",kv="r",Pv="f",Ov=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nv="ls",xv="p",Qc="ac",Dv="websocket",Mv="long_polling";/**
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
 */class iA{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lv(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let i;if(e===Dv)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Mv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rA(t)&&(n.ns=t.namespace);const r=[];return Ot(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class sA{constructor(){this.counters_={}}incrementCounter(e,n=1){Cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return K1(this.counters_)}}/**
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
 */const Yl={},Xl={};function Ff(t){const e=t.toString();return Yl[e]||(Yl[e]=new sA),Yl[e]}function oA(t,e){const n=t.toString();return Xl[n]||(Xl[n]=e()),Xl[n]}/**
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
 */class aA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&io(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const up="start",lA="close",cA="pLPCommand",uA="pRTLPCB",Fv="id",Uv="pw",jv="ser",fA="cb",hA="seg",dA="ts",pA="d",mA="dframe",$v=1870,Bv=30,gA=$v-Bv,_A=25e3,vA=3e4;class Qi{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=no(e),this.stats_=Ff(n),this.urlFn=l=>(this.appCheckToken&&(l[Qc]=this.appCheckToken),Lv(n,Mv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new aA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vA)),qS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uf((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===up)this.id=a,this.password=l;else if(o===lA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[up]="t",i[jv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[fA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Av]=Lf,this.transportSessionId&&(i[Rv]=this.transportSessionId),this.lastSessionId&&(i[Nv]=this.lastSessionId),this.applicationId&&(i[xv]=this.applicationId),this.appCheckToken&&(i[Qc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(i[kv]=Pv);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qi.forceAllow_=!0}static forceDisallow(){Qi.forceDisallow_=!0}static isAvailable(){return Qi.forceAllow_?!0:!Qi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YS()&&!XS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=e_(n),r=Cv(i,gA);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[mA]="t",i[Fv]=e,i[Uv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Uf{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VS(),window[cA+this.uniqueCallbackIdentifier]=e,window[uA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Uf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fv]=this.myID,e[Uv]=this.myPW,e[jv]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bv+i.length<=$v;){const o=this.pendingSegs.shift();i=i+"&"+hA+r+"="+o.seg+"&"+dA+r+"="+o.ts+"&"+pA+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(_A)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const yA=16384,wA=45e3;let ma=null;typeof MozWebSocket<"u"?ma=MozWebSocket:typeof WebSocket<"u"&&(ma=WebSocket);class Mt{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=no(this.connId),this.stats_=Ff(n),this.connURL=Mt.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[Av]=Lf,typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(o[kv]=Pv),n&&(o[Rv]=n),i&&(o[Nv]=i),r&&(o[Qc]=r),s&&(o[xv]=s),Lv(e,Dv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hi.set("previous_websocket_failure",!0);try{let i;a_(),this.mySock=new ma(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ma!==null&&!Mt.forceDisallow_}static previouslyFailed(){return hi.isInMemoryStorage||hi.get("previous_websocket_failure")===!0}markConnectionHealthy(){hi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Es(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Cv(n,yA);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mt.responsesRequiredToBeHealthy=2;Mt.healthyTimeout=3e4;/**
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
 */class Ds{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qi,Mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Mt&&Mt.isAvailable();let i=n&&!Mt.previouslyFailed();if(e.webSocketOnly&&(n||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Mt];else{const r=this.transports_=[];for(const s of Ds.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ds.globalTransportInitialized_=!1;/**
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
 */const bA=6e4,EA=5e3,IA=10*1024,TA=100*1024,Jl="t",fp="d",CA="s",hp="r",SA="e",dp="o",pp="a",mp="n",gp="p",AA="h";class RA{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=no("c:"+this.id+":"),this.transportManager_=new Ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>TA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jl in e){const n=e[Jl];n===pp?this.upgradeIfSecondaryHealthy_():n===hp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Hr("t",e),i=Hr("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Hr("t",e),i=Hr("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Hr(Jl,e);if(fp in e){const i=e[fp];if(n===AA){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===mp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===CA?this.onConnectionShutdown_(i):n===hp?this.onReset_(i):n===SA?Xc("Server Error: "+i):n===dp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lf!==i&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(EA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Hv{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Wv{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ga extends Wv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!af()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ga}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _p=32,vp=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ce("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gn(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function Vv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Kv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function Le(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Ce)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Ce(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function Rt(t,e){const n=ne(t),i=ne(e);if(n===null)return e;if(n===i)return Rt(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qv(t,e){if(Gn(t)!==Gn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ft(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Gn(t)>Gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class PA{constructor(e,n){this.errorPrefix_=n,this.parts_=zv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Qa(this.parts_[i]);Gv(this)}}function OA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qa(e),Gv(t)}function NA(t){const e=t.parts_.pop();t.byteLength_-=Qa(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gv(t){if(t.byteLength_>vp)throw new Error(t.errorPrefix_+"has a key path longer than "+vp+" bytes ("+t.byteLength_+").");if(t.parts_.length>_p)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_p+") or object contains a cycle "+oi(t))}function oi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class jf extends Wv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new jf}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wr=1e3,xA=60*5*1e3,yp=30*1e3,DA=1.3,MA=3e4,LA="server_kill",wp=3;class vn extends Hv{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=vn.nextPersistentConnectionId_++,this.log_=no("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wr,this.maxReconnectDelay_=xA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!a_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ga.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(We(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new of,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;vn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Cn(e,"w")){const i=yr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rT(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xc("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>MA&&(this.reconnectDelay_=Wr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*DA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+vn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new RA(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,m=>{wt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(LA)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&wt(f),l())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nc(this.interruptReasons_)&&(this.reconnectDelay_=Wr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Mf(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Ce(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wp&&(this.reconnectDelay_=yp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+bv.replace(/\./g,"-")]=1,af()?e["framework.cordova"]=1:o_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ga.getInstance().currentlyOnline();return Nc(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
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
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
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
 */class pl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ie(wr,e),r=new ie(wr,n);return this.compare(i,r)!==0}minPost(){return ie.MIN}}/**
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
 */let Ro;class Yv extends pl{static get __EMPTY_NODE(){return Ro}static set __EMPTY_NODE(e){Ro=e}compare(e,n){return Nr(e.name,n.name)}isDefinedOn(e){throw Sr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Si,Ro)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Ro)}toString(){return".key"}}const ur=new Yv;/**
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
 */class ko{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??Me.RED,this.left=r??ut.EMPTY_NODE,this.right=s??ut.EMPTY_NODE}copy(e,n,i,r,s){return new Me(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class FA{copy(e,n,i,r,s){return this}insert(e,n,i){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ko(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new FA;/**
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
 */function UA(t,e){return Nr(t.name,e.name)}function $f(t,e){return Nr(t,e)}/**
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
 */let Zc;function jA(t){Zc=t}const Xv=function(t){return typeof t=="number"?"number:"+Sv(t):"string:"+t},Jv=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else N(t===Zc||t.isEmpty(),"priority of unexpected type.");N(t===Zc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let bp;class De{constructor(e,n=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jv(this.priorityNode_)}static set __childrenNodeConstructor(e){bp=e}static get __childrenNodeConstructor(){return bp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:ne(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ne(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(N(i!==".priority"||Gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sv(this.value_):e+=this.value_,this.lazyHash_=Iv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=De.VALUE_TYPE_ORDER.indexOf(n),s=De.VALUE_TYPE_ORDER.indexOf(i);return N(r>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Qv,Zv;function $A(t){Qv=t}function BA(t){Zv=t}class HA extends pl{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Nr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Si,new De("[PRIORITY-POST]",Zv))}makePost(e,n){const i=Qv(e);return new ie(n,new De("[PRIORITY-POST]",i))}toString(){return".priority"}}const Je=new HA;/**
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
 */const WA=Math.log(2);class VA{constructor(e){const n=s=>parseInt(Math.log(s)/WA,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _a=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new Me(h,f.node,Me.BLACK,null,null);{const m=parseInt(u/2,10)+l,_=r(l,m),b=r(m+1,c);return f=t[m],h=n?n(f):f,new Me(h,f.node,Me.BLACK,_,b)}},s=function(l){let c=null,u=null,f=t.length;const h=function(_,b){const R=f-_,v=f;f-=_;const w=r(R+1,v),O=t[R],S=n?n(O):O;m(new Me(S,O.node,b,null,w))},m=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const b=l.nextBitIsOne(),R=Math.pow(2,l.count-(_+1));b?h(R,Me.BLACK):(h(R,Me.BLACK),h(R,Me.RED))}return u},o=new VA(t.length),a=s(o);return new ut(i||e,a)};/**
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
 */let Ql;const Ki={};class dn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Ki&&Je,"ChildrenNode.ts has not been loaded"),Ql=Ql||new dn({".priority":Ki},{".priority":Je}),Ql}get(e){const n=yr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,n){N(e!==ur,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(ie.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=_a(i,e.getCompare()):a=Ki;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new dn(u,c)}addToIndexes(e,n){const i=sa(this.indexes_,(r,s)=>{const o=yr(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),r===Ki)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ie.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),_a(a,o.getCompare())}else return Ki;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new ie(e.name,a))),l.insert(e,e.node)}});return new dn(i,this.indexSet_)}removeFromIndexes(e,n){const i=sa(this.indexes_,r=>{if(r===Ki)return r;{const s=n.get(e.name);return s?r.remove(new ie(e.name,s)):r}});return new dn(i,this.indexSet_)}}/**
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
 */let Vr;class fe{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Jv(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Vr||(Vr=new fe(new ut($f),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vr}updatePriority(e){return this.children_.isEmpty()?this:new fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vr:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ie(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Vr:this.priorityNode_;return new fe(r,o,s)}}updateChild(e,n){const i=ne(e);if(i===null)return n;{N(ne(e)!==".priority"||Gn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(we(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Je,(o,a)=>{n[o]=a.val(e),i++,s&&fe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xv(this.getPriority().val())+":"),this.forEachChild(Je,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Iv(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ie.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ro?-1:0}withIndex(e){if(e===ur||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ur||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Je),r=n.getIterator(Je);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ur?null:this.indexMap_.get(e.toString())}}fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zA extends fe{constructor(){super(new ut($f),fe.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fe.EMPTY_NODE}isEmpty(){return!1}}const ro=new zA;Object.defineProperties(ie,{MIN:{value:new ie(wr,fe.EMPTY_NODE)},MAX:{value:new ie(Si,ro)}});Yv.__EMPTY_NODE=fe.EMPTY_NODE;De.__childrenNodeConstructor=fe;jA(ro);BA(ro);/**
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
 */const KA=!0;function Ye(t,e=null){if(t===null)return fe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new De(n,Ye(e))}if(!(t instanceof Array)&&KA){const n=[];let i=!1;if(Ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ye(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new ie(o,l)))}}),n.length===0)return fe.EMPTY_NODE;const s=_a(n,UA,o=>o.name,$f);if(i){const o=_a(n,Je.getCompare());return new fe(s,Ye(e),new dn({".priority":o},{".priority":Je}))}else return new fe(s,Ye(e),dn.Default)}else{let n=fe.EMPTY_NODE;return Ot(t,(i,r)=>{if(Cn(t,i)&&i.substring(0,1)!=="."){const s=Ye(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ye(e))}}$A(Ye);/**
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
 */class qA extends pl{constructor(e){super(),this.indexPath_=e,N(!ee(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Nr(e.name,n.name):s}makePost(e,n){const i=Ye(e),r=fe.EMPTY_NODE.updateChild(this.indexPath_,i);return new ie(n,r)}maxPost(){const e=fe.EMPTY_NODE.updateChild(this.indexPath_,ro);return new ie(Si,e)}toString(){return zv(this.indexPath_,0).join("/")}}/**
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
 */class GA extends pl{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Nr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const i=Ye(e);return new ie(n,i)}toString(){return".value"}}const YA=new GA;/**
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
 */function XA(t){return{type:"value",snapshotNode:t}}function JA(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function QA(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ep(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wr}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Si}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new Bf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ip(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Je?n="$priority":t.index_===YA?n="$value":t.index_===ur?n="$key":(N(t.index_ instanceof qA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=We(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+We(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=We(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Tp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Je&&(e.i=t.index_.toString()),e}/**
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
 */class va extends Hv{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=no("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=va.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ip(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),yr(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=va.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ip(e._queryParams),i=e._path.toString(),r=new of;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ar(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Es(a.responseText)}catch{wt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&wt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class eR{constructor(){this.rootNode_=fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ya(){return{value:null,children:new Map}}function ey(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ne(e);t.children.has(i)||t.children.set(i,ya());const r=t.children.get(i);e=we(e),ey(r,e,n)}}function eu(t,e,n){t.value!==null?n(e,t.value):tR(t,(i,r)=>{const s=new Ce(e.toString()+"/"+i);eu(r,s,n)})}function tR(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class nR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ot(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Cp=10*1e3,iR=30*1e3,rR=5*60*1e3;class sR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nR(e);const i=Cp+(iR-Cp)*Math.random();ss(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ot(e,(r,s)=>{s>0&&Cn(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*rR))}}/**
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
 */var tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function ty(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ny(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function iy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class wa{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=tn.ACK_USER_WRITE,this.source=ty()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new wa(me(),n,this.revert)}}else return N(ne(this.path)===e,"operationForChild called for unrelated child."),new wa(we(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ai{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=tn.OVERWRITE}operationForChild(e){return ee(this.path)?new Ai(this.source,me(),this.snap.getImmediateChild(e)):new Ai(this.source,we(this.path),this.snap)}}/**
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
 */class Ms{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=tn.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new Ai(this.source,me(),n.value):new Ms(this.source,me(),n)}else return N(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ms(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Hf{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function oR(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ZA(o.childName,o.snapshotNode))}),zr(t,r,"child_removed",e,i,n),zr(t,r,"child_added",e,i,n),zr(t,r,"child_moved",s,i,n),zr(t,r,"child_changed",e,i,n),zr(t,r,"value",e,i,n),r}function zr(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>lR(t,a,l)),o.forEach(a=>{const l=aR(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function aR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lR(t,e,n){if(e.childName==null||n.childName==null)throw Sr("Should only compare child_ events.");const i=new ie(e.childName,e.snapshotNode),r=new ie(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function ry(t,e){return{eventCache:t,serverCache:e}}function os(t,e,n,i){return ry(new Hf(e,n,i),t.serverCache)}function sy(t,e,n,i){return ry(t.eventCache,new Hf(e,n,i))}function tu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Zl;const cR=()=>(Zl||(Zl=new ut(GS)),Zl);class ve{constructor(e,n=cR()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return Ot(e,(i,r)=>{n=n.set(new Ce(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ee(e))return null;{const i=ne(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(we(e),n);return s!=null?{path:Le(new Ce(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=ne(e),i=this.children.get(n);return i!==null?i.subtree(we(e)):new ve(null)}}set(e,n){if(ee(e))return new ve(n,this.children);{const i=ne(e),s=(this.children.get(i)||new ve(null)).set(we(e),n),o=this.children.insert(i,s);return new ve(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=ne(e),i=this.children.get(n);if(i){const r=i.remove(we(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ve(null):new ve(this.value,s)}else return this}}get(e){if(ee(e))return this.value;{const n=ne(e),i=this.children.get(n);return i?i.get(we(e)):null}}setTree(e,n){if(ee(e))return n;{const i=ne(e),s=(this.children.get(i)||new ve(null)).setTree(we(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ve(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Le(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(ee(e))return null;{const s=ne(e),o=this.children.get(s);return o?o.findOnPath_(we(e),Le(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,i){if(ee(e))return this;{this.value&&i(n,this.value);const r=ne(e),s=this.children.get(r);return s?s.foreachOnPath_(we(e),Le(n,r),i):new ve(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Le(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new ve(null))}}function as(t,e,n){if(ee(e))return new Bt(new ve(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Rt(r,e);return s=s.updateChild(o,n),new Bt(t.writeTree_.set(r,s))}else{const r=new ve(n),s=t.writeTree_.setTree(e,r);return new Bt(s)}}}function Sp(t,e,n){let i=t;return Ot(n,(r,s)=>{i=as(i,Le(e,r),s)}),i}function Ap(t,e){if(ee(e))return Bt.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new Bt(n)}}function nu(t,e){return Fi(t,e)!=null}function Fi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Rt(n.path,e)):null}function Rp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Je,(i,r)=>{e.push(new ie(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new ie(i,r.value))}),e}function Vn(t,e){if(ee(e))return t;{const n=Fi(t,e);return n!=null?new Bt(new ve(n)):new Bt(t.writeTree_.subtree(e))}}function iu(t){return t.writeTree_.isEmpty()}function br(t,e){return oy(me(),t.writeTree_,e)}function oy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=oy(Le(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Le(t,".priority"),i)),n}}/**
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
 */function ay(t,e){return hy(e,t)}function uR(t,e,n,i,r){N(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=as(t.visibleWrites,e,n)),t.lastWriteId=i}function fR(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function hR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&dR(a,i.path)?r=!1:Ft(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return pR(t),!0;if(i.snap)t.visibleWrites=Ap(t.visibleWrites,i.path);else{const a=i.children;Ot(a,l=>{t.visibleWrites=Ap(t.visibleWrites,Le(i.path,l))})}return!0}else return!1}function dR(t,e){if(t.snap)return Ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ft(Le(t.path,n),e))return!0;return!1}function pR(t){t.visibleWrites=ly(t.allWrites,mR,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mR(t){return t.visible}function ly(t,e,n){let i=Bt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Ft(n,o)?(a=Rt(n,o),i=as(i,a,s.snap)):Ft(o,n)&&(a=Rt(o,n),i=as(i,me(),s.snap.getChild(a)));else if(s.children){if(Ft(n,o))a=Rt(n,o),i=Sp(i,a,s.children);else if(Ft(o,n))if(a=Rt(o,n),ee(a))i=Sp(i,me(),s.children);else{const l=yr(s.children,ne(a));if(l){const c=l.getChild(we(a));i=as(i,me(),c)}}}else throw Sr("WriteRecord should have .snap or .children")}}return i}function cy(t,e,n,i,r){if(!i&&!r){const s=Fi(t.visibleWrites,e);if(s!=null)return s;{const o=Vn(t.visibleWrites,e);if(iu(o))return n;if(n==null&&!nu(o,me()))return null;{const a=n||fe.EMPTY_NODE;return br(o,a)}}}else{const s=Vn(t.visibleWrites,e);if(!r&&iu(s))return n;if(!r&&n==null&&!nu(s,me()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Ft(c.path,e)||Ft(e,c.path))},a=ly(t.allWrites,o,e),l=n||fe.EMPTY_NODE;return br(a,l)}}}function gR(t,e,n){let i=fe.EMPTY_NODE;const r=Fi(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Je,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Vn(t.visibleWrites,e);return n.forEachChild(Je,(o,a)=>{const l=br(Vn(s,new Ce(o)),a);i=i.updateImmediateChild(o,l)}),Rp(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Vn(t.visibleWrites,e);return Rp(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function _R(t,e,n,i,r){N(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Le(e,n);if(nu(t.visibleWrites,s))return null;{const o=Vn(t.visibleWrites,s);return iu(o)?r.getChild(n):br(o,r.getChild(n))}}function vR(t,e,n,i){const r=Le(e,n),s=Fi(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Vn(t.visibleWrites,r);return br(o,i.getNode().getImmediateChild(n))}else return null}function yR(t,e){return Fi(t.visibleWrites,e)}function wR(t,e,n,i,r,s,o){let a;const l=Vn(t.visibleWrites,e),c=Fi(l,me());if(c!=null)a=c;else if(n!=null)a=br(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=h.getNext();for(;m&&u.length<r;)f(m,i)!==0&&u.push(m),m=h.getNext();return u}else return[]}function bR(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function ru(t,e,n,i){return cy(t.writeTree,t.treePath,e,n,i)}function uy(t,e){return gR(t.writeTree,t.treePath,e)}function kp(t,e,n,i){return _R(t.writeTree,t.treePath,e,n,i)}function ba(t,e){return yR(t.writeTree,Le(t.treePath,e))}function ER(t,e,n,i,r,s){return wR(t.writeTree,t.treePath,e,n,i,r,s)}function Wf(t,e,n){return vR(t.writeTree,t.treePath,e,n)}function fy(t,e){return hy(Le(t.treePath,e),t.writeTree)}function hy(t,e){return{treePath:t,writeTree:e}}/**
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
 */class IR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Ep(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,QA(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,JA(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Ep(i,e.snapshotNode,r.oldSnap));else throw Sr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class TR{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const dy=new TR;class Vf{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Hf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ri(this.viewCache_),s=ER(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}function CR(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SR(t,e,n,i,r){const s=new IR;let o,a;if(n.type===tn.OVERWRITE){const c=n;c.source.fromUser?o=su(t,e,c.path,c.snap,i,r,s):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ee(c.path),o=Ea(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===tn.MERGE){const c=n;c.source.fromUser?o=RR(t,e,c.path,c.children,i,r,s):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ou(t,e,c.path,c.children,i,r,a,s))}else if(n.type===tn.ACK_USER_WRITE){const c=n;c.revert?o=OR(t,e,c.path,i,r,s):o=kR(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===tn.LISTEN_COMPLETE)o=PR(t,e,n.path,i,s);else throw Sr("Unknown operation type: "+n.type);const l=s.getChanges();return AR(e,o,l),{viewCache:o,changes:l}}function AR(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=tu(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(XA(tu(e)))}}function py(t,e,n,i,r,s){const o=e.eventCache;if(ba(i,n)!=null)return e;{let a,l;if(ee(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ri(e),u=c instanceof fe?c:fe.EMPTY_NODE,f=uy(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=ru(i,Ri(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ne(n);if(c===".priority"){N(Gn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=kp(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=we(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=kp(i,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=Wf(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return os(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Ea(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),m,null)}else{const m=ne(n);if(!l.isCompleteForPath(n)&&Gn(n)>1)return e;const _=we(n),R=l.getNode().getImmediateChild(m).updateChild(_,i);m===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),m,R,_,dy,null)}const f=sy(e,c,l.isFullyInitialized()||ee(n),u.filtersNodes()),h=new Vf(r,f,s);return py(t,f,n,r,h,a)}function su(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new Vf(r,e,s);if(ee(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=os(e,c,!0,t.filter.filtersNodes());else{const f=ne(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=os(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=we(n),m=a.getNode().getImmediateChild(f);let _;if(ee(h))_=i;else{const b=u.getCompleteChild(f);b!=null?Vv(h)===".priority"&&b.getChild(Kv(h)).isEmpty()?_=b:_=b.updateChild(h,i):_=fe.EMPTY_NODE}if(m.equals(_))l=e;else{const b=t.filter.updateChild(a.getNode(),f,_,h,u,o);l=os(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Pp(t,e){return t.eventCache.isCompleteForChild(e)}function RR(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=Le(n,l);Pp(e,ne(u))&&(a=su(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=Le(n,l);Pp(e,ne(u))||(a=su(t,a,u,c,r,s,o))}),a}function Op(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ou(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ee(n)?c=i:c=new ve(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),_=Op(t,m,h);l=Ea(t,l,new Ce(f),_,r,s,o,a)}}),c.children.inorderTraversal((f,h)=>{const m=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!m){const _=e.serverCache.getNode().getImmediateChild(f),b=Op(t,_,h);l=Ea(t,l,new Ce(f),b,r,s,o,a)}}),l}function kR(t,e,n,i,r,s,o){if(ba(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ea(t,e,n,l.getNode().getChild(n),r,s,a,o);if(ee(n)){let c=new ve(null);return l.getNode().forEachChild(ur,(u,f)=>{c=c.set(new Ce(u),f)}),ou(t,e,n,c,r,s,a,o)}else return e}else{let c=new ve(null);return i.foreach((u,f)=>{const h=Le(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),ou(t,e,n,c,r,s,a,o)}}function PR(t,e,n,i,r){const s=e.serverCache,o=sy(e,s.getNode(),s.isFullyInitialized()||ee(n),s.isFiltered());return py(t,o,n,i,dy,r)}function OR(t,e,n,i,r,s){let o;if(ba(i,n)!=null)return e;{const a=new Vf(i,e,r),l=e.eventCache.getNode();let c;if(ee(n)||ne(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ru(i,Ri(e));else{const f=e.serverCache.getNode();N(f instanceof fe,"serverChildren would be complete if leaf node"),u=uy(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=ne(n);let f=Wf(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,we(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,fe.EMPTY_NODE,we(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ru(i,Ri(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||ba(i,me())!=null,os(e,c,o,t.filter.filtersNodes())}}function NR(t,e){const n=Ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function Np(t,e,n,i){e.type===tn.MERGE&&e.source.queryId!==null&&(N(Ri(t.viewCache_),"We should always have a full cache before handling merges"),N(tu(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=SR(t.processor_,r,e,n,i);return CR(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,xR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function xR(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return oR(t.eventGenerator_,e,n,r)}/**
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
 */let xp;function DR(t){N(!xp,"__referenceConstructor has already been defined"),xp=t}function zf(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return N(s!=null,"SyncTree gave us an op for an invalid query."),Np(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Np(o,e,n,i));return s}}function Kf(t,e){let n=null;for(const i of t.views.values())n=n||NR(i,e);return n}/**
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
 */let Dp;function MR(t){N(!Dp,"__referenceConstructor has already been defined"),Dp=t}class Mp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=bR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function LR(t,e,n,i,r){return uR(t.pendingWriteTree_,e,n,i,r),r?gl(t,new Ai(ty(),e,n)):[]}function Zi(t,e,n=!1){const i=fR(t.pendingWriteTree_,e);if(hR(t.pendingWriteTree_,e)){let s=new ve(null);return i.snap!=null?s=s.set(me(),!0):Ot(i.children,o=>{s=s.set(new Ce(o),!0)}),gl(t,new wa(i.path,s,n))}else return[]}function ml(t,e,n){return gl(t,new Ai(ny(),e,n))}function FR(t,e,n){const i=ve.fromObject(n);return gl(t,new Ms(ny(),e,i))}function UR(t,e,n,i){const r=vy(t,i);if(r!=null){const s=yy(r),o=s.path,a=s.queryId,l=Rt(o,e),c=new Ai(iy(a),l,n);return wy(t,o,c)}else return[]}function jR(t,e,n,i){const r=vy(t,i);if(r){const s=yy(r),o=s.path,a=s.queryId,l=Rt(o,e),c=ve.fromObject(n),u=new Ms(iy(a),l,c);return wy(t,o,u)}else return[]}function my(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Rt(o,e),c=Kf(a,l);if(c)return c});return cy(r,e,s,n,!0)}function gl(t,e){return gy(e,t.syncPointTree_,null,ay(t.pendingWriteTree_,me()))}function gy(t,e,n,i){if(ee(t.path))return _y(t,e,n,i);{const r=e.get(me());n==null&&r!=null&&(n=Kf(r,me()));let s=[];const o=ne(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=fy(i,o);s=s.concat(gy(a,l,c,u))}return r&&(s=s.concat(zf(r,t,i,n))),s}}function _y(t,e,n,i){const r=e.get(me());n==null&&r!=null&&(n=Kf(r,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=fy(i,o),u=t.operationForChild(o);u&&(s=s.concat(_y(u,a,l,c)))}),r&&(s=s.concat(zf(r,t,i,n))),s}function vy(t,e){return t.tagToQueryMap.get(e)}function yy(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function wy(t,e,n){const i=t.syncPointTree_.get(e);N(i,"Missing sync point for query tag that we're tracking");const r=ay(t.pendingWriteTree_,e);return zf(i,n,r,null)}/**
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
 */class qf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qf(n)}node(){return this.node_}}class Gf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new Gf(this.syncTree_,n)}node(){return my(this.syncTree_,this.path_)}}const $R=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Lp=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HR(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},HR=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&N(!1,"Unexpected increment value: "+i);const r=e.node();if(N(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},WR=function(t,e,n,i){return Yf(e,new Gf(n,t),i)},VR=function(t,e,n){return Yf(t,new qf(e),n)};function Yf(t,e,n){const i=t.getPriority().val(),r=Lp(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Lp(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new De(a,Ye(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new De(r))),o.forEachChild(Je,(a,l)=>{const c=Yf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Xf{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Jf(t,e){let n=e instanceof Ce?e:new Ce(e),i=t,r=ne(n);for(;r!==null;){const s=yr(i.node.children,r)||{children:{},childCount:0};i=new Xf(r,i,s),n=we(n),r=ne(n)}return i}function xr(t){return t.node.value}function by(t,e){t.node.value=e,au(t)}function Ey(t){return t.node.childCount>0}function zR(t){return xr(t)===void 0&&!Ey(t)}function _l(t,e){Ot(t.node.children,(n,i)=>{e(new Xf(n,t,i))})}function Iy(t,e,n,i){n&&!i&&e(t),_l(t,r=>{Iy(r,e,!0,i)}),n&&i&&e(t)}function KR(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function so(t){return new Ce(t.parent===null?t.name:so(t.parent)+"/"+t.name)}function au(t){t.parent!==null&&qR(t.parent,t.name,t)}function qR(t,e,n){const i=zR(n),r=Cn(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,au(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,au(t))}/**
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
 */const GR=/[\[\].#$\/\u0000-\u001F\u007F]/,YR=/[\[\].#$\u0000-\u001F\u007F]/,ec=10*1024*1024,Ty=function(t){return typeof t=="string"&&t.length!==0&&!GR.test(t)},XR=function(t){return typeof t=="string"&&t.length!==0&&!YR.test(t)},JR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),XR(t)},Cy=function(t,e,n){const i=n instanceof Ce?new PA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+oi(i));if(typeof e=="function")throw new Error(t+"contains a function "+oi(i)+" with contents = "+e.toString());if(Tv(e))throw new Error(t+"contains "+e.toString()+" "+oi(i));if(typeof e=="string"&&e.length>ec/3&&Qa(e)>ec)throw new Error(t+"contains a string greater than "+ec+" utf8 bytes "+oi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Ot(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ty(o)))throw new Error(t+" contains an invalid key ("+o+") "+oi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OA(i,o),Cy(t,a,i),NA(i)}),r&&s)throw new Error(t+' contains ".value" child '+oi(i)+" in addition to actual children.")}},QR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ty(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JR(n))throw new Error(uT(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ZR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ek(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!qv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Ui(t,e,n){ek(t,n),tk(t,i=>Ft(i,e)||Ft(e,i))}function tk(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(nk(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();bi&&Ge("event: "+n.toString()),io(i)}}}/**
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
 */const ik="repo_interrupt",rk=25;class sk{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ya(),this.transactionQueueTree_=new Xf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ok(t,e,n){if(t.stats_=Ff(t.repoInfo_),t.forceRestClient_||eA())t.server_=new va(t.repoInfo_,(i,r,s,o)=>{Fp(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Up(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new vn(t.repoInfo_,e,(i,r,s,o)=>{Fp(t,i,r,s,o)},i=>{Up(t,i)},i=>{lk(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=oA(t.repoInfo_,()=>new sR(t.stats_,t.server_)),t.infoData_=new eR,t.infoSyncTree_=new Mp({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=ml(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qf(t,"connected",!1),t.serverSyncTree_=new Mp({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Ui(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function ak(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sy(t){return $R({timestamp:ak(t)})}function Fp(t,e,n,i,r){t.dataUpdateCount++;const s=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=sa(n,c=>Ye(c));o=jR(t.serverSyncTree_,s,l,r)}else{const l=Ye(n);o=UR(t.serverSyncTree_,s,l,r)}else if(i){const l=sa(n,c=>Ye(c));o=FR(t.serverSyncTree_,s,l)}else{const l=Ye(n);o=ml(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=eh(t,s)),Ui(t.eventQueue_,a,o)}function Up(t,e){Qf(t,"connected",e),e===!1&&uk(t)}function lk(t,e){Ot(e,(n,i)=>{Qf(t,n,i)})}function Qf(t,e,n){const i=new Ce("/.info/"+e),r=Ye(n);t.infoData_.updateSnapshot(i,r);const s=ml(t.infoSyncTree_,i,r);Ui(t.eventQueue_,i,s)}function ck(t){return t.nextWriteId_++}function uk(t){Ay(t,"onDisconnectEvents");const e=Sy(t),n=ya();eu(t.onDisconnect_,me(),(r,s)=>{const o=WR(r,s,t.serverSyncTree_,e);ey(n,r,o)});let i=[];eu(n,me(),(r,s)=>{i=i.concat(ml(t.serverSyncTree_,r,s));const o=pk(t,r);eh(t,o)}),t.onDisconnect_=ya(),Ui(t.eventQueue_,me(),i)}function fk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ik)}function Ay(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ge(n,...e)}function Ry(t,e,n){return my(t.serverSyncTree_,e,n)||fe.EMPTY_NODE}function Zf(t,e=t.transactionQueueTree_){if(e||vl(t,e),xr(e)){const n=Py(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&hk(t,so(e),n)}else Ey(e)&&_l(e,n=>{Zf(t,n)})}function hk(t,e,n){const i=n.map(c=>c.currentWriteId),r=Ry(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];N(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Rt(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ay(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Zi(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();vl(t,Jf(t.transactionQueueTree_,e)),Zf(t,t.transactionQueueTree_),Ui(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)io(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{wt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}eh(t,e)}},o)}function eh(t,e){const n=ky(t,e),i=so(n),r=Py(t,n);return dk(t,r,i),i}function dk(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Rt(n,l.path);let u=!1,f;if(N(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(Zi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rk)u=!0,f="maxretry",r=r.concat(Zi(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Ry(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Cy("transaction failed: Data returned ",m,l.path);let _=Ye(m);typeof m=="object"&&m!=null&&Cn(m,".priority")||(_=_.updatePriority(h.getPriority()));const R=l.currentWriteId,v=Sy(t),w=VR(_,h,v);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=w,l.currentWriteId=ck(t),o.splice(o.indexOf(R),1),r=r.concat(LR(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),r=r.concat(Zi(t.serverSyncTree_,R,!0))}else u=!0,f="nodata",r=r.concat(Zi(t.serverSyncTree_,l.currentWriteId,!0))}Ui(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}vl(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)io(i[a]);Zf(t,t.transactionQueueTree_)}function ky(t,e){let n,i=t.transactionQueueTree_;for(n=ne(e);n!==null&&xr(i)===void 0;)i=Jf(i,n),e=we(e),n=ne(e);return i}function Py(t,e){const n=[];return Oy(t,e,n),n.sort((i,r)=>i.order-r.order),n}function Oy(t,e,n){const i=xr(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);_l(e,r=>{Oy(t,r,n)})}function vl(t,e){const n=xr(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,by(e,n.length>0?n:void 0)}_l(e,i=>{vl(t,i)})}function pk(t,e){const n=so(ky(t,e)),i=Jf(t.transactionQueueTree_,e);return KR(i,r=>{tc(t,r)}),tc(t,i),Iy(i,r=>{tc(t,r)}),n}function tc(t,e){const n=xr(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Zi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?by(e,void 0):n.length=s+1,Ui(t.eventQueue_,so(e),r);for(let o=0;o<i.length;o++)io(i[o])}}/**
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
 */function mk(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function gk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):wt(`Invalid query segment '${n}' in query '${t}'`)}return e}const jp=function(t,e){const n=_k(t),i=n.namespace;n.domain==="firebase.com"&&Ci(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ci("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||KS();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new iA(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Ce(n.pathString)}},_k=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=mk(t.substring(u,f)));const h=gk(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class th{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return ee(this._path)?null:Vv(this._path)}get ref(){return new Dr(this._repo,this._path)}get _queryIdentifier(){const e=Tp(this._queryParams),n=Mf(e);return n==="{}"?"default":n}get _queryObject(){return Tp(this._queryParams)}isEqual(e){if(e=Kt(e),!(e instanceof th))return!1;const n=this._repo===e._repo,i=qv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+kA(this._path)}}class Dr extends th{constructor(e,n){super(e,n,new Bf,!1)}get parent(){const e=Kv(this._path);return e===null?null:new Dr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}DR(Dr);MR(Dr);/**
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
 */const vk="FIREBASE_DATABASE_EMULATOR_HOST",lu={};let yk=!1;function wk(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Ci("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jp(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[vk]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=jp(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Jc(Jc.OWNER):new nA(t.name,t.options,e);QR("Invalid Firebase Database URL",o),ee(o.path)||Ci("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Ek(a,t,u,new tA(t.name,n));return new Ik(f,t)}function bk(t,e){const n=lu[e];(!n||n[t.key]!==t)&&Ci(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fk(t),delete n[t.key]}function Ek(t,e,n,i){let r=lu[e.name];r||(r={},lu[e.name]=r);let s=r[t.toURLString()];return s&&Ci("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new sk(t,yk,n,i),r[t.toURLString()]=s,s}class Ik{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ok(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dr(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(bk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ci("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Tk(t){BS(Li),Vt(new kt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wk(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),ft(op,ap,t),ft(op,ap,"esm2017")}vn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Tk();function nh(t){const e=Et(t.currentUser),n=Ee(()=>!!e.value);return t.onIdTokenChanged(i=>e.value=i),{isAuthenticated:n,user:e}}const Ck=["src"],Sk=It({__name:"NavBarProfile",setup(t){const e=Ue("auth");if(!e)throw new Error("Firebae Auth is not provided");const{user:n}=nh(e);return(i,r)=>{var s,o;return ke(),rt("button",null,[Ht("img",{src:((o=(s=it(n))==null?void 0:s.providerData[0])==null?void 0:o.photoURL)||"",alt:""},null,8,Ck)])}}});const Ak=Qn(Sk,[["__scopeId","data-v-d09f8a4b"]]),Rk=It({__name:"LogoutButton",setup(t){const e=Ue("auth");if(!e)throw new Error("Firebase Auth is not provided");const n=async()=>{try{await e.signOut()}catch(i){console.error("Logout Failed:",i)}};return(i,r)=>(ke(),rt("button",{onClick:n},"Logout"))}}),kk=t=>(db("data-v-e880679c"),t=t(),pb(),t),Pk={class:"profile-popup"},Ok={class:"user"},Nk=kk(()=>Ht("span",null,"User",-1)),xk=It({__name:"ProfilePopup",emits:["logout"],setup(t){const e=Ue("auth");if(!e)throw new Error("Firebase Auth is not provided");const{user:n}=nh(e);return(i,r)=>{var s;return ke(),rt("div",Pk,[Ht("div",Ok,[Nk,Ht("span",null,Rw((s=it(n))==null?void 0:s.displayName),1)]),oe(Rk,{onClick:r[0]||(r[0]=o=>i.$emit("logout"))})])}}});const Dk=Qn(xk,[["__scopeId","data-v-e880679c"]]),Mk=It({__name:"NavBarLogin",setup(t){const e=Et(null),n=Et(!1),i=Ue("auth");if(!i)throw new Error("Firebase Auth is not provided");const r=l=>{var c;(c=e.value)!=null&&c.$el.contains(l.target)||s()},s=()=>{n.value=!1,document.removeEventListener("click",r)},o=()=>{n.value=!n.value,n.value&&document.addEventListener("click",r)};Gu(()=>document.removeEventListener("click",r));const{isAuthenticated:a}=nh(i);return(l,c)=>{const u=gs("router-link");return ke(),rt(ct,null,[it(a)?(ke(),sr(Ak,{key:1,onClick:jE(o,["stop"])},null,8,["onClick"])):(ke(),sr(u,{key:0,to:"/login"},{default:vi(()=>[or("Login")]),_:1})),n.value?(ke(),sr(Dk,{key:2,ref_key:"popup",ref:e,class:"popup",onLogout:s},null,512)):Ju("",!0)],64)}}});const Lk=Qn(Mk,[["__scopeId","data-v-bcad4d87"]]),Fk={class:"navbar"},Uk={class:"container"},jk={class:"title"},$k={key:0,class:"content"},Bk=It({__name:"NavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const e=GI(),n=Ee(()=>e.currentRoute.value.meta.hideNavBar!==!0);return(i,r)=>(ke(),rt("div",Fk,[Ht("div",Uk,[Ht("div",jk,[oe(QI)]),n.value?(ke(),rt("div",$k,[oe(t1),oe(W1),oe(Lk)])):Ju("",!0)])]))}});const Hk={key:0},Wk=It({__name:"NavScreen",props:{open:{type:Boolean}},setup(t){return(e,n)=>e.open?(ke(),rt("div",Hk)):Ju("",!0)}}),Vk={class:"menu"},zk=It({__name:"NavMenu",setup(t){const{isScreenOpen:e,toggleScreen:n}=VE();return(i,r)=>(ke(),rt("header",Vk,[oe(Bk,{"is-screen-open":it(e),onToggleScreen:it(n)},null,8,["is-screen-open","onToggleScreen"]),oe(Wk,{open:it(e)},null,8,["open"])]))}}),Kk=It({__name:"App",setup(t){return(e,n)=>{const i=gs("router-view");return ke(),rt(ct,null,[oe(zk),oe(i)],64)}}}),qk="modulepreload",Gk=function(t){return"/lean/"+t},$p={},qi=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Gk(s),s in $p)return;$p[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":qk,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Yk="/lean/",Xk={BASE_PATH:Yk},Jk=[{path:"/",name:"Home",component:()=>qi(()=>import("./Home-8ebfdb21.js"),["assets/Home-8ebfdb21.js","assets/Home-94776037.css"])},{path:"/log",name:"Log",component:()=>qi(()=>import("./Log-096b5b2f.js"),["assets/Log-096b5b2f.js","assets/Log-a8abc7b9.css"]),meta:{requiresAuth:!0}},{path:"/analysis",name:"Analysis",component:()=>qi(()=>import("./Analysis-fa5f133f.js"),["assets/Analysis-fa5f133f.js","assets/Analysis-ca995139.css"]),meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:()=>qi(()=>import("./Profile-6b049643.js"),["assets/Profile-6b049643.js","assets/Profile-3aef2c59.css"]),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>qi(()=>import("./Login-aa7f5900.js"),["assets/Login-aa7f5900.js","assets/OAuthButtons-a3d331dd.js","assets/OAuthButtons-82613b14.css","assets/Login-11f496e2.css"]),meta:{requiresUnauth:!0,hideNavBar:!0}},{path:"/register",name:"Register",component:()=>qi(()=>import("./Register-a7d5d384.js"),["assets/Register-a7d5d384.js","assets/OAuthButtons-a3d331dd.js","assets/OAuthButtons-82613b14.css"]),meta:{requiresUnauth:!0}}],Ny=KI({history:lI(Xk.BASE_PATH),routes:Jk});Ny.beforeEach(async(t,e,n)=>{const i=Ue("auth");if(!i)throw new Error("Firebase Auth is not provided");const r=t.matched.some(a=>a.meta.requiresAuth),s=t.matched.some(a=>a.meta.requiresUnauth),o=i.currentUser;r&&!o?n("/login"):s&&o?n("/"):n()});function ih(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Bp(t){return t!==void 0&&t.enterprise!==void 0}class Qk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function xy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zk=xy,Dy=new Mi("auth","Firebase",xy());/**
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
 */const Ia=new Ks("@firebase/auth");function eP(t,...e){Ia.logLevel<=ue.WARN&&Ia.warn(`Auth (${Li}): ${t}`,...e)}function zo(t,...e){Ia.logLevel<=ue.ERROR&&Ia.error(`Auth (${Li}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw rh(t,...e)}function rn(t,...e){return rh(t,...e)}function My(t,e,n){const i=Object.assign(Object.assign({},Zk()),{[e]:n});return new Mi("auth","Firebase",i).create(e,{appName:t.name})}function tP(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Nt(t,"argument-error"),My(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rh(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Dy.create(t,...e)}function z(t,e,...n){if(!t)throw rh(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function wn(t,e){t||pn(e)}/**
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
 */function cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nP(){return Hp()==="http:"||Hp()==="https:"}function Hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nP()||s_()||"connection"in navigator)?navigator.onLine:!0}function rP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=af()||o_()}get(){return iP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sh(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ly{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oP=new oo(3e4,6e4);function ji(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $i(t,e,n,i,r={}){return Fy(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Ar(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ly.fetch()(Uy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Fy(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},sP),e);try{const r=new aP(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Po(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Po(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Po(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw My(t,u,c);Nt(t,u)}}catch(r){if(r instanceof zt)throw r;Nt(t,"network-request-failed",{message:String(r)})}}async function ao(t,e,n,i,r={}){const s=await $i(t,e,n,i,r);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Uy(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?sh(t.config,r):`${t.config.apiScheme}://${r}`}class aP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(rn(this.auth,"network-request-failed")),oP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Po(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=rn(t,e,i);return r.customData._tokenResponse=n,r}async function lP(t,e){return $i(t,"GET","/v2/recaptchaConfig",ji(t,e))}/**
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
 */async function cP(t,e){return $i(t,"POST","/v1/accounts:delete",e)}async function uP(t,e){return $i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fP(t,e=!1){const n=Kt(t),i=await n.getIdToken(e),r=oh(i);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ls(nc(r.auth_time)),issuedAtTime:ls(nc(r.iat)),expirationTime:ls(nc(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nc(t){return Number(t)*1e3}function oh(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const r=ra(n);return r?JSON.parse(r):(zo("Failed to decode base64 JWT payload"),null)}catch(r){return zo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function hP(t){const e=oh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof zt&&dP(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function dP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ta(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ls(t,uP(n,{idToken:i}));z(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_P(s.providerUserInfo):[],a=gP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jy(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function mP(t){const e=Kt(t);await Ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gP(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function _P(t){return t.map(e=>{var{providerId:n}=e,i=ih(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function vP(t,e){const n=await Fy(t,{},async()=>{const i=Ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Uy(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ly.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await vP(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Fs;return i&&(z(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
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
 */function Pn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ei{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=ih(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fP(this,e)}reload(){return mP(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ta(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ls(this,cP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:S,isAnonymous:B,providerData:Q,stsTokenManager:X}=n;z(O&&X,e,"internal-error");const D=Fs.fromJSON(this.name,X);z(typeof O=="string",e,"internal-error"),Pn(f,e.name),Pn(h,e.name),z(typeof S=="boolean",e,"internal-error"),z(typeof B=="boolean",e,"internal-error"),Pn(m,e.name),Pn(_,e.name),Pn(b,e.name),Pn(R,e.name),Pn(v,e.name),Pn(w,e.name);const U=new Ei({uid:O,auth:e,email:h,emailVerified:S,displayName:f,isAnonymous:B,photoURL:_,phoneNumber:m,tenantId:b,stsTokenManager:D,createdAt:v,lastLoginAt:w});return Q&&Array.isArray(Q)&&(U.providerData=Q.map(J=>Object.assign({},J))),R&&(U._redirectEventId=R),U}static async _fromIdTokenResponse(e,n,i=!1){const r=new Fs;r.updateFromServerResponse(n);const s=new Ei({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ta(s),s}}/**
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
 */const Wp=new Map;function mn(t){wn(t instanceof Function,"Expected a class definition");let e=Wp.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wp.set(t,e),e)}/**
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
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$y.type="NONE";const Vp=$y;/**
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
 */function Ko(t,e,n){return`firebase:${t}:${e}:${n}`}class fr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ko(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ko("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new fr(mn(Vp),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||mn(Vp);const o=Ko(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Ei._fromJSON(e,u);c!==s&&(a=f),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fr(s,e,i))}}/**
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
 */function zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(By(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zy(e))return"Blackberry";if(Ky(e))return"Webos";if(ah(e))return"Safari";if((e.includes("chrome/")||Hy(e))&&!e.includes("edge/"))return"Chrome";if(Vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function By(t=et()){return/firefox\//i.test(t)}function ah(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hy(t=et()){return/crios\//i.test(t)}function Wy(t=et()){return/iemobile/i.test(t)}function Vy(t=et()){return/android/i.test(t)}function zy(t=et()){return/blackberry/i.test(t)}function Ky(t=et()){return/webos/i.test(t)}function yl(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yP(t=et()){var e;return yl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wP(){return Z1()&&document.documentMode===10}function qy(t=et()){return yl(t)||Vy(t)||Ky(t)||zy(t)||/windows phone/i.test(t)||Wy(t)}function bP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Gy(t,e=[]){let n;switch(t){case"Browser":n=zp(et());break;case"Worker":n=`${zp(et())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${i}`}/**
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
 */class EP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function IP(t,e={}){return $i(t,"GET","/v2/passwordPolicy",ji(t,e))}/**
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
 */const TP=6;class CP{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class SP{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kp(this),this.idTokenSubscription=new Kp(this),this.beforeStateQueue=new EP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await fr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Kt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IP(this),n=new CP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await fr.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ti(t){return Kt(t)}class Kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=aT(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function AP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Yy(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=rn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",AP().appendChild(i)})}function RP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kP="https://www.google.com/recaptcha/enterprise.js?render=",PP="recaptcha-enterprise",OP="NO_RECAPTCHA";class NP{constructor(e){this.type=PP,this.auth=ti(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{lP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Qk(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;Bp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(OP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Bp(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Yy(kP+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ca(t,e,n,i=!1){const r=new NP(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function xP(t,e){const n=Rr(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Is(s,e??{}))return r;Nt(r,"already-initialized")}return n.initialize({options:e})}function DP(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function MP(t,e,n){const i=ti(t);z(i._canInitEmulator,i,"emulator-config-failed"),z(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Xy(e),{host:o,port:a}=LP(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||FP()}function Xy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LP(t){const e=Xy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:qp(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:qp(o)}}}function qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class lh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function UP(t,e){return $i(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ic(t,e){return ao(t,"POST","/v1/accounts:signInWithPassword",ji(t,e))}/**
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
 */async function jP(t,e){return ao(t,"POST","/v1/accounts:signInWithEmailLink",ji(t,e))}async function $P(t,e){return ao(t,"POST","/v1/accounts:signInWithEmailLink",ji(t,e))}/**
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
 */class Us extends lh{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Us(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Us(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Ca(e,i,"signInWithPassword");return ic(e,r)}else return ic(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ca(e,i,"signInWithPassword");return ic(e,s)}else return Promise.reject(r)});case"emailLink":return jP(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return UP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $P(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hr(t,e){return ao(t,"POST","/v1/accounts:signInWithIdp",ji(t,e))}/**
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
 */const BP="http://localhost";class ki extends lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=ih(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new ki(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,hr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hr(e,n)}buildRequest(){const e={requestUri:BP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ar(n)}return e}}/**
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
 */function HP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WP(t){const e=Gr(Yr(t)).link,n=e?Gr(Yr(e)).deep_link_id:null,i=Gr(Yr(t)).deep_link_id;return(i?Gr(Yr(i)).link:null)||i||n||e||t}class ch{constructor(e){var n,i,r,s,o,a;const l=Gr(Yr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,f=HP((r=l.mode)!==null&&r!==void 0?r:null);z(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=WP(e);try{return new ch(n)}catch{return null}}}/**
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
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(e,n){return Us._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=ch.parseLink(n);return z(i,"argument-error"),Us._fromEmailAndCode(e,i.code,i.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lo extends uh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mn extends lo{constructor(){super("facebook.com")}static credential(e){return ki._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
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
 */class Ln extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ki._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ln.credential(n,i)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
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
 */class Fn extends lo{constructor(){super("github.com")}static credential(e){return ki._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class Un extends lo{constructor(){super("twitter.com")}static credential(e,n){return ki._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Un.credential(n,i)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */async function rc(t,e){return ao(t,"POST","/v1/accounts:signUp",ji(t,e))}/**
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
 */class Pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ei._fromIdTokenResponse(e,i,r),o=Gp(i);return new Pi({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Gp(i);return new Pi({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Gp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sa extends zt{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Sa(e,n,i,r)}}function Jy(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,s,e,i):s})}async function VP(t,e,n=!1){const i=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pi._forOperation(t,"link",i)}/**
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
 */async function zP(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Ls(t,Jy(i,r,e,t),n);z(s.idToken,i,"internal-error");const o=oh(s.idToken);z(o,i,"internal-error");const{sub:a}=o;return z(t.uid===a,i,"user-mismatch"),Pi._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(i,"user-mismatch"),s}}/**
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
 */async function Qy(t,e,n=!1){const i="signIn",r=await Jy(t,i,e),s=await Pi._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function KP(t,e){return Qy(ti(t),e)}/**
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
 */async function Zy(t){const e=ti(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XD(t,e,n){var i;const r=ti(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await Ca(r,s,"signUpPassword");o=rc(r,c)}else o=rc(r,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ca(r,s,"signUpPassword");return rc(r,u)}throw c});const a=await o.catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Zy(t),c}),l=await Pi._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function JD(t,e,n){return KP(Kt(t),Mr.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Zy(t),i})}function qP(t,e,n,i){return Kt(t).onIdTokenChanged(e,n,i)}function GP(t,e,n){return Kt(t).beforeAuthStateChanged(e,n)}function YP(t,e,n,i){return Kt(t).onAuthStateChanged(e,n,i)}const Aa="__sak";/**
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
 */class e0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Aa,"1"),this.storage.removeItem(Aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function XP(){const t=et();return ah(t)||yl(t)}const JP=1e3,QP=10;class t0 extends e0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XP()&&bP(),this.fallbackToPolling=qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);wP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,QP):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},JP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}t0.type="LOCAL";const ZP=t0;/**
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
 */class n0 extends e0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}n0.type="SESSION";const i0=n0;/**
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
 */function e2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new wl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await e2(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
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
 */function fh(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class t2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=fh("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function n2(t){sn().location.href=t}/**
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
 */function r0(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function i2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function s2(){return r0()?self:null}/**
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
 */const s0="firebaseLocalStorageDb",o2=1,Ra="firebaseLocalStorage",o0="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bl(t,e){return t.transaction([Ra],e?"readwrite":"readonly").objectStore(Ra)}function a2(){const t=indexedDB.deleteDatabase(s0);return new co(t).toPromise()}function uu(){const t=indexedDB.open(s0,o2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ra,{keyPath:o0})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ra)?e(i):(i.close(),await a2(),e(await uu()))})})}async function Yp(t,e,n){const i=bl(t,!0).put({[o0]:e,value:n});return new co(i).toPromise()}async function l2(t,e){const n=bl(t,!1).get(e),i=await new co(n).toPromise();return i===void 0?null:i.value}function Xp(t,e){const n=bl(t,!0).delete(e);return new co(n).toPromise()}const c2=800,u2=3;class a0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>u2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(s2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await i2(),!this.activeServiceWorker)return;this.sender=new t2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uu();return await Yp(e,Aa,"1"),await Xp(e,Aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Yp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>l2(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=bl(r,!1).getAll();return new co(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a0.type="LOCAL";const f2=a0;new oo(3e4,6e4);/**
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
 */function l0(t,e){return e?mn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hh extends lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function h2(t){return Qy(t.auth,new hh(t),t.bypassAuthState)}function d2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),zP(n,new hh(t),t.bypassAuthState)}async function p2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),VP(n,new hh(t),t.bypassAuthState)}/**
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
 */class c0{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return h2;case"linkViaPopup":case"linkViaRedirect":return p2;case"reauthViaPopup":case"reauthViaRedirect":return d2;default:Nt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const m2=new oo(2e3,1e4);async function QD(t,e,n){const i=ti(t);tP(t,e,uh);const r=l0(i,n);return new di(i,"signInViaPopup",e,r).executeNotNull()}class di extends c0{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=fh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m2.get())};e()}}di.currentPopupAction=null;/**
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
 */const g2="pendingRedirect",qo=new Map;class _2 extends c0{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=qo.get(this.auth._key());if(!e){try{const i=await v2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}qo.set(this.auth._key(),e)}return this.bypassAuthState||qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v2(t,e){const n=b2(e),i=w2(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function y2(t,e){qo.set(t._key(),e)}function w2(t){return mn(t._redirectPersistence)}function b2(t){return Ko(g2,t.config.apiKey,t.name)}async function E2(t,e,n=!1){const i=ti(t),r=l0(i,e),o=await new _2(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const I2=10*60*1e3;class T2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!u0(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jp(e))}saveEventToCache(e){this.cachedEventUids.add(Jp(e)),this.lastProcessedEventTime=Date.now()}}function Jp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function u0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u0(t);default:return!1}}/**
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
 */async function S2(t,e={}){return $i(t,"GET","/v1/projects",e)}/**
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
 */const A2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,R2=/^https?/;async function k2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await S2(t);for(const n of e)try{if(P2(n))return}catch{}Nt(t,"unauthorized-domain")}function P2(t){const e=cu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!R2.test(n))return!1;if(A2.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const O2=new oo(3e4,6e4);function Qp(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function N2(t){return new Promise((e,n)=>{var i,r,s;function o(){Qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qp(),n(rn(t,"network-request-failed"))},timeout:O2.get()})}if(!((r=(i=sn().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=sn().gapi)===null||s===void 0)&&s.load)o();else{const a=RP("iframefcb");return sn()[a]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},Yy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Go=null,e})}let Go=null;function x2(t){return Go=Go||N2(t),Go}/**
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
 */const D2=new oo(5e3,15e3),M2="__/auth/iframe",L2="emulator/auth/iframe",F2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j2(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sh(e,L2):`https://${t.config.authDomain}/${M2}`,i={apiKey:e.apiKey,appName:t.name,v:Li},r=U2.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Ar(i).slice(1)}`}async function $2(t){const e=await x2(t),n=sn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:j2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F2,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),a=sn().setTimeout(()=>{s(o)},D2.get());function l(){sn().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const B2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H2=500,W2=600,V2="_blank",z2="http://localhost";class Zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K2(t,e,n,i=H2,r=W2){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},B2),{width:i.toString(),height:r.toString(),top:s,left:o}),c=et().toLowerCase();n&&(a=Hy(c)?V2:n),By(c)&&(e=e||z2,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(yP(c)&&a!=="_self")return q2(e||"",a),new Zp(null);const f=window.open(e||"",a,u);z(f,t,"popup-blocked");try{f.focus()}catch{}return new Zp(f)}function q2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const G2="__/auth/handler",Y2="emulator/auth/handler",X2=encodeURIComponent("fac");async function em(t,e,n,i,r,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Li,eventId:r};if(e instanceof uh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))o[u]=f}if(e instanceof lo){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${X2}=${encodeURIComponent(l)}`:"";return`${J2(t)}?${Ar(a).slice(1)}${c}`}function J2({config:t}){return t.emulator?sh(t,Y2):`https://${t.authDomain}/${G2}`}/**
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
 */const sc="webStorageSupport";class Q2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i0,this._completeRedirectFn=E2,this._overrideRedirectResult=y2}async _openPopup(e,n,i,r){var s;wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await em(e,n,i,cu(),r);return K2(e,o,fh())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await em(e,n,i,cu(),r);return n2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(wn(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await $2(e),i=new T2(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sc,{type:sc},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[sc];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=k2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qy()||ah()||yl()}}const Z2=Q2;var tm="@firebase/auth",nm="1.3.0";/**
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
 */class eO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nO(t){Vt(new kt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gy(t)},c=new SP(i,r,s,l);return DP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Vt(new kt("auth-internal",e=>{const n=ti(e.getProvider("auth").getImmediate());return(i=>new eO(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(tm,nm,tO(t)),ft(tm,nm,"esm2017")}/**
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
 */const iO=5*60,rO=r_("authIdTokenMaxAge")||iO;let im=null;const sO=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>rO)return;const r=n==null?void 0:n.token;im!==r&&(im=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function oO(t=p_()){const e=Rr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xP(t,{popupRedirectResolver:Z2,persistence:[f2,ZP,i0]}),i=r_("authTokenSyncURL");if(i){const s=sO(i);GP(n,s,()=>s(n.currentUser)),qP(n,o=>s(o))}const r=Q1("auth");return r&&MP(n,`http://${r}`),n}nO("Browser");/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let f0;const El=t=>f0=t,h0=Symbol();function fu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var cs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(cs||(cs={}));function aO(){const t=Xm(!0),e=t.run(()=>Et({}));let n=[],i=[];const r=Ba({install(s){El(r),r._a=s,s.provide(h0,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!n1?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const d0=()=>{};function rm(t,e,n,i=d0){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Mu()&&Jm(r),r}function Gi(t,...e){t.slice().forEach(n=>{n(...e)})}const lO=t=>t();function hu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];fu(r)&&fu(i)&&t.hasOwnProperty(n)&&!Re(i)&&!$n(i)?t[n]=hu(r,i):t[n]=i}return t}const cO=Symbol();function uO(t){return!fu(t)||!t.hasOwnProperty(cO)}const{assign:Nn}=Object;function fO(t){return!!(Re(t)&&t.effect)}function hO(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=tb(n.state.value[t]);return Nn(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Ba(Ee(()=>{El(n);const m=n._s.get(t);return o[h].call(m,m)})),f),{}))}return l=p0(t,c,e,n,i,!0),l}function p0(t,e,n={},i,r,s){let o;const a=Nn({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],m;const _=i.state.value[t];!s&&!_&&(i.state.value[t]={}),Et({});let b;function R(D){let U;c=u=!1,typeof D=="function"?(D(i.state.value[t]),U={type:cs.patchFunction,storeId:t,events:m}):(hu(i.state.value[t],D),U={type:cs.patchObject,payload:D,storeId:t,events:m});const J=b=Symbol();zs().then(()=>{b===J&&(c=!0)}),u=!0,Gi(f,U,i.state.value[t])}const v=s?function(){const{state:U}=n,J=U?U():{};this.$patch(Ke=>{Nn(Ke,J)})}:d0;function w(){o.stop(),f=[],h=[],i._s.delete(t)}function O(D,U){return function(){El(i);const J=Array.from(arguments),Ke=[],pt=[];function Ct(ae){Ke.push(ae)}function ni(ae){pt.push(ae)}Gi(h,{args:J,name:D,store:B,after:Ct,onError:ni});let St;try{St=U.apply(this&&this.$id===t?this:B,J)}catch(ae){throw Gi(pt,ae),ae}return St instanceof Promise?St.then(ae=>(Gi(Ke,ae),ae)).catch(ae=>(Gi(pt,ae),Promise.reject(ae))):(Gi(Ke,St),St)}}const S={_p:i,$id:t,$onAction:rm.bind(null,h),$patch:R,$reset:v,$subscribe(D,U={}){const J=rm(f,D,U.detached,()=>Ke()),Ke=o.run(()=>_n(()=>i.state.value[t],pt=>{(U.flush==="sync"?u:c)&&D({storeId:t,type:cs.direct,events:m},pt)},Nn({},l,U)));return J},$dispose:w},B=Vs(S);i._s.set(t,B);const X=(i._a&&i._a.runWithContext||lO)(()=>i._e.run(()=>(o=Xm()).run(e)));for(const D in X){const U=X[D];if(Re(U)&&!fO(U)||$n(U))s||(_&&uO(U)&&(Re(U)?U.value=_[D]:hu(U,_[D])),i.state.value[t][D]=U);else if(typeof U=="function"){const J=O(D,U);X[D]=J,a.actions[D]=U}}return Nn(B,X),Nn(se(B),X),Object.defineProperty(B,"$state",{get:()=>i.state.value[t],set:D=>{R(U=>{Nn(U,D)})}}),i._p.forEach(D=>{Nn(B,o.run(()=>D({store:B,app:i._a,pinia:i,options:a})))}),_&&s&&n.hydrate&&n.hydrate(B.$state,_),c=!0,u=!0,B}function dO(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=zb();return a=a||(c?Ue(h0,null):null),a&&El(a),a=f0,a._s.has(i)||(s?p0(i,e,r,a):hO(i,r,a)),a._s.get(i)}return o.$id=i,o}const pO=t=>{const e=aO();t.use(e)},m0=dO({id:"user",state:()=>({user:null}),actions:{setUser(t){this.user=t}}}),mO=()=>{const t=Ue("auth");if(!t)throw new Error("Firebase Auth is not provided");YP(t,e=>{m0().setUser(e)})},gO={useUserStore:m0,install:t=>{pO(t),Zu()&&mO()}};var _O="firebase",vO="10.5.0";/**
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
 */ft(_O,vO,"app");const yO=(t,e)=>e.some(n=>t instanceof n);let sm,om;function wO(){return sm||(sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bO(){return om||(om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g0=new WeakMap,du=new WeakMap,_0=new WeakMap,oc=new WeakMap,dh=new WeakMap;function EO(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zn(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&g0.set(n,t)}).catch(()=>{}),dh.set(e,t),e}function IO(t){if(du.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});du.set(t,e)}let pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return du.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TO(t){pu=t(pu)}function CO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ac(this),e,...n);return _0.set(i,e.sort?e.sort():[e]),zn(i)}:bO().includes(t)?function(...e){return t.apply(ac(this),e),zn(g0.get(this))}:function(...e){return zn(t.apply(ac(this),e))}}function SO(t){return typeof t=="function"?CO(t):(t instanceof IDBTransaction&&IO(t),yO(t,wO())?new Proxy(t,pu):t)}function zn(t){if(t instanceof IDBRequest)return EO(t);if(oc.has(t))return oc.get(t);const e=SO(t);return e!==t&&(oc.set(t,e),dh.set(e,t)),e}const ac=t=>dh.get(t);function AO(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=zn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const RO=["get","getKey","getAll","getAllKeys","count"],kO=["put","add","delete","clear"],lc=new Map;function am(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=kO.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||RO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return lc.set(e,s),s}TO(t=>({...t,get:(e,n,i)=>am(e,n)||t.get(e,n,i),has:(e,n)=>!!am(e,n)||t.has(e,n)}));const v0="@firebase/installations",ph="0.6.4";/**
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
 */const y0=1e4,w0=`w:${ph}`,b0="FIS_v2",PO="https://firebaseinstallations.googleapis.com/v1",OO=60*60*1e3,NO="installations",xO="Installations";/**
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
 */const DO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Oi=new Mi(NO,xO,DO);function E0(t){return t instanceof zt&&t.code.includes("request-failed")}/**
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
 */function I0({projectId:t}){return`${PO}/projects/${t}/installations`}function T0(t){return{token:t.token,requestStatus:2,expiresIn:LO(t.expiresIn),creationTime:Date.now()}}async function C0(t,e){const i=(await e.json()).error;return Oi.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function S0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function MO(t,{refreshToken:e}){const n=S0(t);return n.append("Authorization",FO(e)),n}async function A0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function LO(t){return Number(t.replace("s","000"))}function FO(t){return`${b0} ${t}`}/**
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
 */async function UO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=I0(t),r=S0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:b0,appId:t.appId,sdkVersion:w0},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await A0(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:T0(c.authToken)}}else throw await C0("Create Installation",l)}/**
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
 */function R0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function jO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const $O=/^[cdef][\w-]{21}$/,mu="";function BO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=HO(t);return $O.test(n)?n:mu}catch{return mu}}function HO(t){return jO(t).substr(0,22)}/**
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
 */function Il(t){return`${t.appName}!${t.appId}`}/**
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
 */const k0=new Map;function P0(t,e){const n=Il(t);O0(n,e),WO(n,e)}function O0(t,e){const n=k0.get(t);if(n)for(const i of n)i(e)}function WO(t,e){const n=VO();n&&n.postMessage({key:t,fid:e}),zO()}let pi=null;function VO(){return!pi&&"BroadcastChannel"in self&&(pi=new BroadcastChannel("[Firebase] FID Change"),pi.onmessage=t=>{O0(t.data.key,t.data.fid)}),pi}function zO(){k0.size===0&&pi&&(pi.close(),pi=null)}/**
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
 */const KO="firebase-installations-database",qO=1,Ni="firebase-installations-store";let cc=null;function mh(){return cc||(cc=AO(KO,qO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ni)}}})),cc}async function ka(t,e){const n=Il(t),r=(await mh()).transaction(Ni,"readwrite"),s=r.objectStore(Ni),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&P0(t,e.fid),e}async function N0(t){const e=Il(t),i=(await mh()).transaction(Ni,"readwrite");await i.objectStore(Ni).delete(e),await i.done}async function Tl(t,e){const n=Il(t),r=(await mh()).transaction(Ni,"readwrite"),s=r.objectStore(Ni),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&P0(t,a.fid),a}/**
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
 */async function gh(t){let e;const n=await Tl(t.appConfig,i=>{const r=GO(i),s=YO(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===mu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function GO(t){const e=t||{fid:BO(),registrationStatus:0};return x0(e)}function YO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Oi.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=XO(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:JO(t)}:{installationEntry:e}}async function XO(t,e){try{const n=await UO(t,e);return ka(t.appConfig,n)}catch(n){throw E0(n)&&n.customData.serverCode===409?await N0(t.appConfig):await ka(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function JO(t){let e=await lm(t.appConfig);for(;e.registrationStatus===1;)await R0(100),e=await lm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await gh(t);return i||n}return e}function lm(t){return Tl(t,e=>{if(!e)throw Oi.create("installation-not-found");return x0(e)})}function x0(t){return QO(t)?{fid:t.fid,registrationStatus:0}:t}function QO(t){return t.registrationStatus===1&&t.registrationTime+y0<Date.now()}/**
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
 */async function ZO({appConfig:t,heartbeatServiceProvider:e},n){const i=eN(t,n),r=MO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:w0,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await A0(()=>fetch(i,a));if(l.ok){const c=await l.json();return T0(c)}else throw await C0("Generate Auth Token",l)}function eN(t,{fid:e}){return`${I0(t)}/${e}/authTokens:generate`}/**
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
 */async function _h(t,e=!1){let n;const i=await Tl(t.appConfig,s=>{if(!D0(s))throw Oi.create("not-registered");const o=s.authToken;if(!e&&iN(o))return s;if(o.requestStatus===1)return n=tN(t,e),s;{if(!navigator.onLine)throw Oi.create("app-offline");const a=sN(s);return n=nN(t,a),a}});return n?await n:i.authToken}async function tN(t,e){let n=await cm(t.appConfig);for(;n.authToken.requestStatus===1;)await R0(100),n=await cm(t.appConfig);const i=n.authToken;return i.requestStatus===0?_h(t,e):i}function cm(t){return Tl(t,e=>{if(!D0(e))throw Oi.create("not-registered");const n=e.authToken;return oN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function nN(t,e){try{const n=await ZO(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await ka(t.appConfig,i),n}catch(n){if(E0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await N0(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ka(t.appConfig,i)}throw n}}function D0(t){return t!==void 0&&t.registrationStatus===2}function iN(t){return t.requestStatus===2&&!rN(t)}function rN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+OO}function sN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function oN(t){return t.requestStatus===1&&t.requestTime+y0<Date.now()}/**
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
 */async function aN(t){const e=t,{installationEntry:n,registrationPromise:i}=await gh(e);return i?i.catch(console.error):_h(e).catch(console.error),n.fid}/**
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
 */async function lN(t,e=!1){const n=t;return await cN(n),(await _h(n,e)).token}async function cN(t){const{registrationPromise:e}=await gh(t);e&&await e}/**
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
 */function uN(t){if(!t||!t.options)throw uc("App Configuration");if(!t.name)throw uc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uc(t){return Oi.create("missing-app-config-values",{valueName:t})}/**
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
 */const M0="installations",fN="installations-internal",hN=t=>{const e=t.getProvider("app").getImmediate(),n=uN(e),i=Rr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},dN=t=>{const e=t.getProvider("app").getImmediate(),n=Rr(e,M0).getImmediate();return{getId:()=>aN(n),getToken:r=>lN(n,r)}};function pN(){Vt(new kt(M0,hN,"PUBLIC")),Vt(new kt(fN,dN,"PRIVATE"))}pN();ft(v0,ph);ft(v0,ph,"esm2017");/**
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
 */const Pa="analytics",mN="firebase_id",gN="origin",_N=60*1e3,vN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vh="https://www.googletagmanager.com/gtag/js";/**
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
 */const ht=new Ks("@firebase/analytics");/**
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
 */const yN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bt=new Mi("analytics","Analytics",yN);/**
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
 */function wN(t){if(!t.startsWith(vh)){const e=bt.create("invalid-gtag-resource",{gtagURL:t});return ht.warn(e.message),""}return t}function L0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function bN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function EN(t,e){const n=bN("firebase-js-sdk-policy",{createScriptURL:wN}),i=document.createElement("script"),r=`${vh}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function IN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function TN(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await L0(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){ht.error(a)}t("config",r,s)}async function CN(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await L0(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){ht.error(s)}}function SN(t,e,n,i){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await CN(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await TN(t,e,n,i,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){ht.error(a)}}return r}function AN(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=SN(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function RN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vh)&&n.src.includes(t))return n;return null}/**
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
 */const kN=30,PN=1e3;class ON{constructor(e={},n=PN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const F0=new ON;function NN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function xN(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:NN(i)},s=vN.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function DN(t,e=F0,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw bt.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw bt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new FN;return setTimeout(async()=>{a.abort()},n!==void 0?n:_N),U0({appId:i,apiKey:r,measurementId:s},o,a,e)}async function U0(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=F0){var s;const{appId:o,measurementId:a}=t;try{await MN(i,e)}catch(l){if(a)return ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await xN(t);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!LN(c)){if(r.deleteThrottleMetadata(o),a)return ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Dd(n,r.intervalMillis,kN):Dd(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,f),ht.debug(`Calling attemptFetch again in ${u} millis`),U0(t,f,i,r)}}function MN(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function LN(t){if(!(t instanceof zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class FN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function UN(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
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
 */async function jN(){if(l_())try{await c_()}catch(t){return ht.warn(bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ht.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $N(t,e,n,i,r,s,o){var a;const l=DN(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&ht.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ht.error(m)),e.push(l);const c=jN().then(m=>{if(m)return i.getId()}),[u,f]=await Promise.all([l,c]);RN(s)||EN(s,u.measurementId),r("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[gN]="firebase",h.update=!0,f!=null&&(h[mN]=f),r("config",u.measurementId,h),u.measurementId}/**
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
 */class BN{constructor(e){this.app=e}_delete(){return delete us[this.app.options.appId],Promise.resolve()}}let us={},um=[];const fm={};let fc="dataLayer",HN="gtag",hm,j0,dm=!1;function WN(){const t=[];if(s_()&&t.push("This is a browser extension environment."),eT()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=bt.create("invalid-analytics-context",{errorInfo:e});ht.warn(n.message)}}function VN(t,e,n){WN();const i=t.options.appId;if(!i)throw bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bt.create("no-api-key");if(us[i]!=null)throw bt.create("already-exists",{id:i});if(!dm){IN(fc);const{wrappedGtag:s,gtagCore:o}=AN(us,um,fm,fc,HN);j0=s,hm=o,dm=!0}return us[i]=$N(t,um,fm,e,hm,fc,n),new BN(t)}function zN(t=p_()){t=Kt(t);const e=Rr(t,Pa);return e.isInitialized()?e.getImmediate():KN(t)}function KN(t,e={}){const n=Rr(t,Pa);if(n.isInitialized()){const r=n.getImmediate();if(Is(e,n.getOptions()))return r;throw bt.create("already-initialized")}return n.initialize({options:e})}function qN(t,e,n,i){t=Kt(t),UN(j0,us[t.app.options.appId],e,n,i).catch(r=>ht.error(r))}const pm="@firebase/analytics",mm="0.10.0";function GN(){Vt(new kt(Pa,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return VN(i,r,n)},"PUBLIC")),Vt(new kt("analytics-internal",t,"PRIVATE")),ft(pm,mm),ft(pm,mm,"esm2017");function t(e){try{const n=e.getProvider(Pa).getImmediate();return{logEvent:(i,r,s)=>qN(n,i,r,s)}}catch(n){throw bt.create("interop-component-reg-failed",{reason:n})}}}GN();const YN={apiKey:"AIzaSyCaFEOlw1_MW6jkKwLM7Wi4DALoTmfx01k",authDomain:"tracker-97bfa.firebaseapp.com",projectId:"tracker-97bfa",storageBucket:"tracker-97bfa.appspot.com",messagingSenderId:"658292198263",appId:"1:658292198263:web:245b2a87dcee09087e6f72",measurementId:"G-EN15KQD2LD"},yh=d_(YN),XN=zN(yh),JN=oO(yh),QN={install:t=>{t.provide("firebase",yh),t.provide("analytics",XN),t.provide("auth",JN)}};function gm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gm(Object(n),!0).forEach(function(i){xe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gm(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Oa(t){"@babel/helpers - typeof";return Oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oa(t)}function ZN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ex(t,e,n){return e&&_m(t.prototype,e),n&&_m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function xe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wh(t,e){return nx(t)||rx(t,e)||$0(t,e)||ox()}function uo(t){return tx(t)||ix(t)||$0(t)||sx()}function tx(t){if(Array.isArray(t))return gu(t)}function nx(t){if(Array.isArray(t))return t}function ix(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rx(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,s=!1,o,a;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return i}}function $0(t,e){if(t){if(typeof t=="string")return gu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gu(t,e)}}function gu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function sx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ox(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vm=function(){},bh={},B0={},H0=null,W0={mark:vm,measure:vm};try{typeof window<"u"&&(bh=window),typeof document<"u"&&(B0=document),typeof MutationObserver<"u"&&(H0=MutationObserver),typeof performance<"u"&&(W0=performance)}catch{}var ax=bh.navigator||{},ym=ax.userAgent,wm=ym===void 0?"":ym,Yn=bh,Te=B0,bm=H0,Oo=W0;Yn.document;var Sn=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",V0=~wm.indexOf("MSIE")||~wm.indexOf("Trident/"),No,xo,Do,Mo,Lo,bn="___FONT_AWESOME___",_u=16,z0="fa",K0="svg-inline--fa",xi="data-fa-i2svg",vu="data-fa-pseudo-element",lx="data-fa-pseudo-element-pending",Eh="data-prefix",Ih="data-icon",Em="fontawesome-i2svg",cx="async",ux=["HTML","HEAD","STYLE","SCRIPT"],q0=function(){try{return!0}catch{return!1}}(),be="classic",Ae="sharp",Th=[be,Ae];function fo(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[be]}})}var js=fo((No={},xe(No,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),xe(No,Ae,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),No)),$s=fo((xo={},xe(xo,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),xe(xo,Ae,{solid:"fass",regular:"fasr",light:"fasl"}),xo)),Bs=fo((Do={},xe(Do,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),xe(Do,Ae,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Do)),fx=fo((Mo={},xe(Mo,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),xe(Mo,Ae,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Mo)),hx=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,G0="fa-layers-text",dx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,px=fo((Lo={},xe(Lo,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),xe(Lo,Ae,{900:"fass",400:"fasr",300:"fasl"}),Lo)),Y0=[1,2,3,4,5,6,7,8,9,10],mx=Y0.concat([11,12,13,14,15,16,17,18,19,20]),gx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hs=new Set;Object.keys($s[be]).map(Hs.add.bind(Hs));Object.keys($s[Ae]).map(Hs.add.bind(Hs));var _x=[].concat(Th,uo(Hs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mi.GROUP,mi.SWAP_OPACITY,mi.PRIMARY,mi.SECONDARY]).concat(Y0.map(function(t){return"".concat(t,"x")})).concat(mx.map(function(t){return"w-".concat(t)})),fs=Yn.FontAwesomeConfig||{};function vx(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function yx(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Te&&typeof Te.querySelector=="function"){var wx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wx.forEach(function(t){var e=wh(t,2),n=e[0],i=e[1],r=yx(vx(n));r!=null&&(fs[i]=r)})}var X0={styleDefault:"solid",familyDefault:"classic",cssPrefix:z0,replacementClass:K0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fs.familyPrefix&&(fs.cssPrefix=fs.familyPrefix);var Er=L(L({},X0),fs);Er.autoReplaceSvg||(Er.observeMutations=!1);var $={};Object.keys(X0).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){Er[t]=n,hs.forEach(function(i){return i($)})},get:function(){return Er[t]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){Er.cssPrefix=e,hs.forEach(function(n){return n($)})},get:function(){return Er.cssPrefix}});Yn.FontAwesomeConfig=$;var hs=[];function bx(t){return hs.push(t),function(){hs.splice(hs.indexOf(t),1)}}var On=_u,nn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ex(t){if(!(!t||!Sn)){var e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Te.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return Te.head.insertBefore(e,i),t}}var Ix="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ws(){for(var t=12,e="";t-- >0;)e+=Ix[Math.random()*62|0];return e}function Lr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ch(t){return t.classList?Lr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function J0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tx(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(J0(t[n]),'" ')},"").trim()}function Cl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Sh(t){return t.size!==nn.size||t.x!==nn.x||t.y!==nn.y||t.rotate!==nn.rotate||t.flipX||t.flipY}function Cx(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Sx(t){var e=t.transform,n=t.width,i=n===void 0?_u:n,r=t.height,s=r===void 0?_u:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&V0?l+="translate(".concat(e.x/On-i/2,"em, ").concat(e.y/On-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/On,"em), calc(-50% + ").concat(e.y/On,"em)) "):l+="translate(".concat(e.x/On,"em, ").concat(e.y/On,"em) "),l+="scale(".concat(e.size/On*(e.flipX?-1:1),", ").concat(e.size/On*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Ax=`:root, :host {
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
}`;function Q0(){var t=z0,e=K0,n=$.cssPrefix,i=$.replacementClass,r=Ax;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var Im=!1;function hc(){$.autoAddCss&&!Im&&(Ex(Q0()),Im=!0)}var Rx={mixout:function(){return{dom:{css:Q0,insertCss:hc}}},hooks:function(){return{beforeDOMElementCreation:function(){hc()},beforeI2svg:function(){hc()}}}},En=Yn||{};En[bn]||(En[bn]={});En[bn].styles||(En[bn].styles={});En[bn].hooks||(En[bn].hooks={});En[bn].shims||(En[bn].shims=[]);var Ut=En[bn],Z0=[],kx=function t(){Te.removeEventListener("DOMContentLoaded",t),Na=1,Z0.map(function(e){return e()})},Na=!1;Sn&&(Na=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),Na||Te.addEventListener("DOMContentLoaded",kx));function Px(t){Sn&&(Na?setTimeout(t,0):Z0.push(t))}function ho(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?J0(t):"<".concat(e," ").concat(Tx(i),">").concat(s.map(ho).join(""),"</").concat(e,">")}function Tm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ox=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},dc=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?Ox(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Nx(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function yu(t){var e=Nx(t);return e.length===1?e[0].toString(16):null}function xx(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Cm(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function wu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Cm(e);typeof Ut.hooks.addPack=="function"&&!r?Ut.hooks.addPack(t,Cm(e)):Ut.styles[t]=L(L({},Ut.styles[t]||{}),s),t==="fas"&&wu("fa",e)}var Fo,Uo,jo,er=Ut.styles,Dx=Ut.shims,Mx=(Fo={},xe(Fo,be,Object.values(Bs[be])),xe(Fo,Ae,Object.values(Bs[Ae])),Fo),Ah=null,ew={},tw={},nw={},iw={},rw={},Lx=(Uo={},xe(Uo,be,Object.keys(js[be])),xe(Uo,Ae,Object.keys(js[Ae])),Uo);function Fx(t){return~_x.indexOf(t)}function Ux(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!Fx(r)?r:null}var sw=function(){var e=function(s){return dc(er,function(o,a,l){return o[l]=dc(a,s,{}),o},{})};ew=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){r[l.toString(16)]=o})}return r}),tw=e(function(r,s,o){if(r[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){r[l]=o})}return r}),rw=e(function(r,s,o){var a=s[2];return r[o]=o,a.forEach(function(l){r[l]=o}),r});var n="far"in er||$.autoFetchSvg,i=dc(Dx,function(r,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});nw=i.names,iw=i.unicodes,Ah=Sl($.styleDefault,{family:$.familyDefault})};bx(function(t){Ah=Sl(t.styleDefault,{family:$.familyDefault})});sw();function Rh(t,e){return(ew[t]||{})[e]}function jx(t,e){return(tw[t]||{})[e]}function gi(t,e){return(rw[t]||{})[e]}function ow(t){return nw[t]||{prefix:null,iconName:null}}function $x(t){var e=iw[t],n=Rh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xn(){return Ah}var kh=function(){return{prefix:null,iconName:null,rest:[]}};function Sl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?be:n,r=js[i][t],s=$s[i][t]||$s[i][r],o=t in Ut.styles?t:null;return s||o||null}var Sm=(jo={},xe(jo,be,Object.keys(Bs[be])),xe(jo,Ae,Object.keys(Bs[Ae])),jo);function Al(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,s=(e={},xe(e,be,"".concat($.cssPrefix,"-").concat(be)),xe(e,Ae,"".concat($.cssPrefix,"-").concat(Ae)),e),o=null,a=be;(t.includes(s[be])||t.some(function(c){return Sm[be].includes(c)}))&&(a=be),(t.includes(s[Ae])||t.some(function(c){return Sm[Ae].includes(c)}))&&(a=Ae);var l=t.reduce(function(c,u){var f=Ux($.cssPrefix,u);if(er[u]?(u=Mx[a].includes(u)?fx[a][u]:u,o=u,c.prefix=u):Lx[a].indexOf(u)>-1?(o=u,c.prefix=Sl(u,{family:a})):f?c.iconName=f:u!==$.replacementClass&&u!==s[be]&&u!==s[Ae]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var h=o==="fa"?ow(c.iconName):{},m=gi(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||m||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!er.far&&er.fas&&!$.autoFetchSvg&&(c.prefix="fas")}return c},kh());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ae&&(er.fass||$.autoFetchSvg)&&(l.prefix="fass",l.iconName=gi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Xn()||"fas"),l}var Bx=function(){function t(){ZN(this,t),this.definitions={}}return ex(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),wu(a,o[a]);var l=Bs[be][a];l&&wu(l,o[a]),sw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),Am=[],tr={},dr={},Hx=Object.keys(dr);function Wx(t,e){var n=e.mixoutsTo;return Am=t,tr={},Object.keys(dr).forEach(function(i){Hx.indexOf(i)===-1&&delete dr[i]}),Am.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Oa(r[o])==="object"&&Object.keys(r[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=r[o][a]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){tr[o]||(tr[o]=[]),tr[o].push(s[o])})}i.provides&&i.provides(dr)}),n}function bu(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=tr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function Di(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=tr[t]||[];r.forEach(function(s){s.apply(null,n)})}function In(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return dr[t]?dr[t].apply(null,e):void 0}function Eu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Xn();if(e)return e=gi(n,e)||e,Tm(aw.definitions,n,e)||Tm(Ut.styles,n,e)}var aw=new Bx,Vx=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Di("noAuto")},zx={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Sn?(Di("beforeI2svg",e),In("pseudoElements2svg",e),In("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,Px(function(){qx({autoReplaceSvgRoot:n}),Di("watch",e)})}},Kx={icon:function(e){if(e===null)return null;if(Oa(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:gi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Sl(e[0]);return{prefix:i,iconName:gi(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(hx))){var r=Al(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Xn(),iconName:gi(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Xn();return{prefix:s,iconName:gi(s,e)||e}}}},Tt={noAuto:Vx,config:$,dom:zx,parse:Kx,library:aw,findIconDefinition:Eu,toHtml:ho},qx=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?Te:n;(Object.keys(Ut.styles).length>0||$.autoFetchSvg)&&Sn&&$.autoReplaceSvg&&Tt.dom.i2svg({node:i})};function Rl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return ho(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Sn){var i=Te.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function Gx(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(Sh(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Cl(L(L({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Yx(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},r),{},{id:o}),children:i}]}]}function Ph(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,m=h===void 0?!1:h,_=i.found?i:n,b=_.width,R=_.height,v=r==="fak",w=[$.replacementClass,s?"".concat($.cssPrefix,"-").concat(s):""].filter(function(U){return f.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(f.classes).join(" "),O={children:[],attributes:L(L({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(R)})},S=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(b/R*16*.0625,"em")}:{};m&&(O.attributes[xi]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||Ws())},children:[l]}),delete O.attributes.title);var B=L(L({},O),{},{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:L(L({},S),f.styles)}),Q=i.found&&n.found?In("generateAbstractMask",B)||{children:[],attributes:{}}:In("generateAbstractIcon",B)||{children:[],attributes:{}},X=Q.children,D=Q.attributes;return B.children=X,B.attributes=D,a?Yx(B):Gx(B)}function Rm(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[xi]="");var u=L({},o.styles);Sh(r)&&(u.transform=Sx({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=Cl(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Xx(t){var e=t.content,n=t.title,i=t.extra,r=L(L(L({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=Cl(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var pc=Ut.styles;function Iu(t){var e=t[0],n=t[1],i=t.slice(4),r=wh(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(mi.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(mi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(mi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Jx={found:!1,width:512,height:512};function Qx(t,e){!q0&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tu(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=Xn()),new Promise(function(i,r){if(In("missingIconAbstract"),n==="fa"){var s=ow(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&pc[e]&&pc[e][t]){var o=pc[e][t];return i(Iu(o))}Qx(t,e),i(L(L({},Jx),{},{icon:$.showMissingIcons&&t?In("missingIconAbstract")||{}:{}}))})}var km=function(){},Cu=$.measurePerformance&&Oo&&Oo.mark&&Oo.measure?Oo:{mark:km,measure:km},Qr='FA "6.4.2"',Zx=function(e){return Cu.mark("".concat(Qr," ").concat(e," begins")),function(){return lw(e)}},lw=function(e){Cu.mark("".concat(Qr," ").concat(e," ends")),Cu.measure("".concat(Qr," ").concat(e),"".concat(Qr," ").concat(e," begins"),"".concat(Qr," ").concat(e," ends"))},Oh={begin:Zx,end:lw},Yo=function(){};function Pm(t){var e=t.getAttribute?t.getAttribute(xi):null;return typeof e=="string"}function eD(t){var e=t.getAttribute?t.getAttribute(Eh):null,n=t.getAttribute?t.getAttribute(Ih):null;return e&&n}function tD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function nD(){if($.autoReplaceSvg===!0)return Xo.replace;var t=Xo[$.autoReplaceSvg];return t||Xo.replace}function iD(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function rD(t){return Te.createElement(t)}function cw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?iD:rD:n;if(typeof t=="string")return Te.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){r.appendChild(cw(o,{ceFn:i}))}),r}function sD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Xo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(cw(r),n)}),n.getAttribute(xi)===null&&$.keepOriginalSource){var i=Te.createComment(sD(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Ch(n).indexOf($.replacementClass))return Xo.replace(e);var r=new RegExp("".concat($.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(a,l){return l===$.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(a){return ho(a)}).join(`
`);n.setAttribute(xi,""),n.innerHTML=o}};function Om(t){t()}function uw(t,e){var n=typeof e=="function"?e:Yo;if(t.length===0)n();else{var i=Om;$.mutateApproach===cx&&(i=Yn.requestAnimationFrame||Om),i(function(){var r=nD(),s=Oh.begin("mutate");t.map(r),s(),n()})}}var Nh=!1;function fw(){Nh=!0}function Su(){Nh=!1}var xa=null;function Nm(t){if(bm&&$.observeMutations){var e=t.treeCallback,n=e===void 0?Yo:e,i=t.nodeCallback,r=i===void 0?Yo:i,s=t.pseudoElementsCallback,o=s===void 0?Yo:s,a=t.observeMutationsRoot,l=a===void 0?Te:a;xa=new bm(function(c){if(!Nh){var u=Xn();Lr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Pm(f.addedNodes[0])&&($.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&$.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Pm(f.target)&&~gx.indexOf(f.attributeName))if(f.attributeName==="class"&&eD(f.target)){var h=Al(Ch(f.target)),m=h.prefix,_=h.iconName;f.target.setAttribute(Eh,m||u),_&&f.target.setAttribute(Ih,_)}else tD(f.target)&&r(f.target)})}}),Sn&&xa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function oD(){xa&&xa.disconnect()}function aD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function lD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=Al(Ch(t));return r.prefix||(r.prefix=Xn()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=jx(r.prefix,t.innerText)||Rh(r.prefix,yu(t.innerText))),!r.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function cD(t){var e=Lr(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(i||Ws()):(e["aria-hidden"]="true",e.focusable="false")),e}function uD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=lD(t),i=n.iconName,r=n.prefix,s=n.rest,o=cD(t),a=bu("parseNodeAttributes",{},t),l=e.styleParser?aD(t):[];return L({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:nn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var fD=Ut.styles;function hw(t){var e=$.autoReplaceSvg==="nest"?xm(t,{styleParser:!1}):xm(t);return~e.extra.classes.indexOf(G0)?In("generateLayersText",t,e):In("generateSvgReplacementMutation",t,e)}var Jn=new Set;Th.map(function(t){Jn.add("fa-".concat(t))});Object.keys(js[be]).map(Jn.add.bind(Jn));Object.keys(js[Ae]).map(Jn.add.bind(Jn));Jn=uo(Jn);function Dm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Sn)return Promise.resolve();var n=Te.documentElement.classList,i=function(f){return n.add("".concat(Em,"-").concat(f))},r=function(f){return n.remove("".concat(Em,"-").concat(f))},s=$.autoFetchSvg?Jn:Th.map(function(u){return"fa-".concat(u)}).concat(Object.keys(fD));s.includes("fa")||s.push("fa");var o=[".".concat(G0,":not([").concat(xi,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(xi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Lr(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Oh.begin("onTree"),c=a.reduce(function(u,f){try{var h=hw(f);h&&u.push(h)}catch(m){q0||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){uw(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function hD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hw(t).then(function(n){n&&uw([n],e)})}function dD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Eu(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Eu(r||{})),t(i,L(L({},n),{},{mask:r}))}}var pD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?nn:i,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,h=f===void 0?null:f,m=n.titleId,_=m===void 0?null:m,b=n.classes,R=b===void 0?[]:b,v=n.attributes,w=v===void 0?{}:v,O=n.styles,S=O===void 0?{}:O;if(e){var B=e.prefix,Q=e.iconName,X=e.icon;return Rl(L({type:"icon"},e),function(){return Di("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(h?w["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(_||Ws()):(w["aria-hidden"]="true",w.focusable="false")),Ph({icons:{main:Iu(X),mask:l?Iu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:Q,transform:L(L({},nn),r),symbol:o,title:h,maskId:u,titleId:_,extra:{attributes:w,styles:S,classes:R}})})}},mD={mixout:function(){return{icon:dD(pD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Dm,n.nodeCallback=hD,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?Te:i,s=n.callback,o=s===void 0?function(){}:s;return Dm(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,s=i.title,o=i.titleId,a=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,h=i.extra;return new Promise(function(m,_){Promise.all([Tu(r,a),u.iconName?Tu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var R=wh(b,2),v=R[0],w=R[1];m([n,Ph({icons:{main:v,mask:w},prefix:a,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Cl(a);l.length>0&&(r.style=l);var c;return Sh(o)&&(c=In("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(c||s.icon),{children:i,attributes:r}}}},gD={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return Rl({type:"layer"},function(){Di("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(uo(s)).join(" ")},children:o}]})}}}},_D={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,a=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return Rl({type:"counter",content:n},function(){return Di("beforeDOMElementCreation",{content:n,params:i}),Xx({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat($.cssPrefix,"-layers-counter")].concat(uo(a))}})})}}}},vD={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?nn:r,o=i.title,a=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,h=i.styles,m=h===void 0?{}:h;return Rl({type:"text",content:n},function(){return Di("beforeDOMElementCreation",{content:n,params:i}),Rm({content:n,transform:L(L({},nn),s),title:a,extra:{attributes:f,styles:m,classes:["".concat($.cssPrefix,"-layers-text")].concat(uo(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,s=i.transform,o=i.extra,a=null,l=null;if(V0){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return $.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Rm({content:n.innerHTML,width:a,height:l,transform:s,title:r,extra:o,watchable:!0})])}}},yD=new RegExp('"',"ug"),Mm=[1105920,1112319];function wD(t){var e=t.replace(yD,""),n=xx(e,0),i=n>=Mm[0]&&n<=Mm[1],r=e.length===2?e[0]===e[1]:!1;return{value:yu(r?e[0]:e),isSecondary:i||r}}function Lm(t,e){var n="".concat(lx).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var s=Lr(t.children),o=s.filter(function(X){return X.getAttribute(vu)===e})[0],a=Yn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(dx),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Ae:be,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?$s[h][l[2].toLowerCase()]:px[h][c],_=wD(f),b=_.value,R=_.isSecondary,v=l[0].startsWith("FontAwesome"),w=Rh(m,b),O=w;if(v){var S=$x(b);S.iconName&&S.prefix&&(w=S.iconName,m=S.prefix)}if(w&&!R&&(!o||o.getAttribute(Eh)!==m||o.getAttribute(Ih)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var B=uD(),Q=B.extra;Q.attributes[vu]=e,Tu(w,m).then(function(X){var D=Ph(L(L({},B),{},{icons:{main:X,mask:kh()},prefix:m,iconName:O,extra:Q,watchable:!0})),U=Te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(U,t.firstChild):t.appendChild(U),U.outerHTML=D.map(function(J){return ho(J)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function bD(t){return Promise.all([Lm(t,"::before"),Lm(t,"::after")])}function ED(t){return t.parentNode!==document.head&&!~ux.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(vu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fm(t){if(Sn)return new Promise(function(e,n){var i=Lr(t.querySelectorAll("*")).filter(ED).map(bD),r=Oh.begin("searchPseudoElements");fw(),Promise.all(i).then(function(){r(),Su(),e()}).catch(function(){r(),Su(),n()})})}var ID={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fm,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?Te:i;$.searchPseudoElements&&Fm(r)}}},Um=!1,TD={mixout:function(){return{dom:{unwatch:function(){fw(),Um=!0}}}},hooks:function(){return{bootstrap:function(){Nm(bu("mutationObserverCallbacks",{}))},noAuto:function(){oD()},watch:function(n){var i=n.observeMutationsRoot;Um?Su():Nm(bu("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},jm=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n)},CD={mixout:function(){return{parse:{transform:function(n){return jm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=jm(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:L({},m.outer),children:[{tag:"g",attributes:L({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:L(L({},i.icon.attributes),m.path)}]}]}}}},mc={x:0,y:0,width:"100%",height:"100%"};function $m(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function SD(t){return t.tag==="g"?t.children:[t]}var AD={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),s=r?Al(r.split(" ").map(function(o){return o.trim()})):kh();return s.prefix||(s.prefix=Xn()),n.mask=s,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,h=o.icon,m=Cx({transform:l,containerWidth:f,iconWidth:c}),_={tag:"rect",attributes:L(L({},mc),{},{fill:"white"})},b=u.children?{children:u.children.map($m)}:{},R={tag:"g",attributes:L({},m.inner),children:[$m(L({tag:u.tag,attributes:L(L({},u.attributes),m.path)},b))]},v={tag:"g",attributes:L({},m.outer),children:[R]},w="mask-".concat(a||Ws()),O="clip-".concat(a||Ws()),S={tag:"mask",attributes:L(L({},mc),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,v]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:SD(h)},S]};return i.push(B,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},mc)}),{children:i,attributes:r}}}},RD={provides:function(e){var n=!1;Yn.matchMedia&&(n=Yn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:L(L({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(a),i.push({tag:"path",attributes:L(L({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:L(L({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},kD={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},PD=[Rx,mD,gD,_D,vD,ID,TD,CD,AD,RD,kD];Wx(PD,{mixoutsTo:Tt});Tt.noAuto;Tt.config;var OD=Tt.library;Tt.dom;var Au=Tt.parse;Tt.findIconDefinition;Tt.toHtml;var ND=Tt.icon;Tt.layer;Tt.text;Tt.counter;var xD={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},DD={prefix:"fas",iconName:"location-arrow",icon:[448,512,[],"f124","M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"]},MD={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},LD={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Bm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function fn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bm(Object(n),!0).forEach(function(i){ot(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bm(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Da(t){"@babel/helpers - typeof";return Da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Da(t)}function ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function FD(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function UD(t,e){if(t==null)return{};var n=FD(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var jD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dw={exports:{}};(function(t){(function(e){var n=function(v,w,O){if(!c(w)||f(w)||h(w)||m(w)||l(w))return w;var S,B=0,Q=0;if(u(w))for(S=[],Q=w.length;B<Q;B++)S.push(n(v,w[B],O));else{S={};for(var X in w)Object.prototype.hasOwnProperty.call(w,X)&&(S[v(X,O)]=n(v,w[X],O))}return S},i=function(v,w){w=w||{};var O=w.separator||"_",S=w.split||/(?=[A-Z])/;return v.split(S).join(O)},r=function(v){return _(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,O){return O?O.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var w=r(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return i(v,w).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},f=function(v){return a.call(v)=="[object Date]"},h=function(v){return a.call(v)=="[object RegExp]"},m=function(v){return a.call(v)=="[object Boolean]"},_=function(v){return v=v-0,v===v},b=function(v,w){var O=w&&"process"in w?w.process:w;return typeof O!="function"?v:function(S,B){return O(S,v,B)}},R={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,w){return n(b(r,w),v)},decamelizeKeys:function(v,w){return n(b(o,w),v,w)},pascalizeKeys:function(v,w){return n(b(s,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=R:e.humps=R})(jD)})(dw);var $D=dw.exports,BD=["class","style"];function HD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=$D.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function WD(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function pw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return pw(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=WD(u);break;case"style":l.style=HD(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=UD(n,BD);return tf(t.tag,fn(fn(fn({},e),{},{class:r.class,style:fn(fn({},r.style),o)},r.attrs),a),i)}var mw=!1;try{mw=!0}catch{}function VD(){if(!mw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function gc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ot({},t,e):{}}function zD(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ot(e,"fa-".concat(t.size),t.size!==null),ot(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ot(e,"fa-pull-".concat(t.pull),t.pull!==null),ot(e,"fa-swap-opacity",t.swapOpacity),ot(e,"fa-bounce",t.bounce),ot(e,"fa-shake",t.shake),ot(e,"fa-beat",t.beat),ot(e,"fa-fade",t.fade),ot(e,"fa-beat-fade",t.beatFade),ot(e,"fa-flash",t.flash),ot(e,"fa-spin-pulse",t.spinPulse),ot(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function Hm(t){if(t&&Da(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Au.icon)return Au.icon(t);if(t===null)return null;if(Da(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var KD=It({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Ee(function(){return Hm(e.icon)}),s=Ee(function(){return gc("classes",zD(e))}),o=Ee(function(){return gc("transform",typeof e.transform=="string"?Au.transform(e.transform):e.transform)}),a=Ee(function(){return gc("mask",Hm(e.mask))}),l=Ee(function(){return ND(r.value,fn(fn(fn(fn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});_n(l,function(u){if(!u)return VD("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Ee(function(){return l.value?pw(l.value.abstract[0],{},i):null});return function(){return c.value}}});const qD={install:t=>{OD.add(xD,DD,MD,LD),t.component("font-awesome-icon",KD)}};const po=HE(Kk);po.use(Ny);po.use(QN);po.use(gO);po.use(qD);po.mount("#app");export{ct as F,Ln as G,Qn as _,pb as a,Ht as b,rt as c,It as d,it as e,oe as f,GD as g,oO as h,Ue as i,XD as j,gs as k,or as l,QD as m,Ny as n,ke as o,db as p,Fn as q,Et as r,JD as s,Rw as t,nh as u,YD as v,jE as w};
