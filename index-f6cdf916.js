var ft=Object.defineProperty;var gt=(n,t,e)=>t in n?ft(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var k=(n,t,e)=>(gt(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const at=[{title:"concentración",description:"Pedir permisos y cancelación de la excursión, revisar materiales y hacer un conteo de las personas antes del viaje.",managers:["todos"],supplies:"permisos",endTime:"08:30"},{title:"partida",description:"-",managers:["todos"],supplies:"",endTime:"09:15"},{title:"arribo y armado de carpas",description:"-",managers:["Joel"],supplies:"",endTime:"09:35"},{title:"dinámicas masivas",description:"Canciones: Todo el Movimiento y El Pollito. Juego de la evolución (Alex), Calles y avenidas (Steff), Hospital revuelto (Joel), Sígueme (Pablo), Ataque al fortín con pañoletas (Steff)",managers:["Toño"],supplies:"",endTime:"10:15"},{title:"armado de equipos (8 equipos de 5)",description:"Elaboración de presentaciones",managers:["Alex"],supplies:"",endTime:"10:25"},{title:"Juegos por equipos: 25min cada uno",description:"Claves (Steff), Cabuyería (Toño, Joel), PPAA: Inmovilizaciones o Transporte de heridos (Alex, Julio), Filtros de agua caseros (Pablo). Utilizar el sistema de puntuación",managers:["todos"],supplies:"hojas de papel y lápices; cuerdas, palos y botellas; cartón y bolillos; botellas, carbón, algodón.",endTime:"12:15"},{title:"almuerzo",description:"-",managers:["todos"],supplies:"Ración seca",endTime:"13:15"},{title:"caminata",description:"-",managers:["Steff"],supplies:"",endTime:"15:15"},{title:"fogata y premiación",description:"-",managers:["Julio","Pablo"],supplies:"Leña, gasolina y premios.",endTime:"16:15"},{title:"dinámicas de ronda",description:"-",managers:["Alex","Toño"],supplies:"",endTime:"16:30"},{title:"retorno",description:"-",managers:["todos"],supplies:"",endTime:"17:15"},{title:"desconcentración",description:"-",managers:["todos"],supplies:"",endTime:"17:30"}],K=["#9D6BCE","#BCEF4B","#FFF","#B32580","#FEF752"];/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=window,F=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),Z=new WeakMap;let dt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(e,t))}return t}toString(){return this.cssText}};const _t=n=>new dt(typeof n=="string"?n:n+"",void 0,W),yt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new dt(e,n,W)},At=(n,t)=>{F?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},G=F?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _t(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const O=window,Q=O.trustedTypes,Et=Q?Q.emptyScript:"",X=O.reactiveElementPolyfillSupport,z={toAttribute(n,t){switch(t){case Boolean:n=n?Et:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ct=(n,t)=>t!==n&&(t==t||n==n),L={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:ct},q="finalized";let _=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty(q))return!1;this[q]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(G(s))}else t!==void 0&&e.push(G(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return At(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=L){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:z).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:z;this._$El=o,this[o]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};_[q]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},X==null||X({ReactiveElement:_}),((I=O.reactiveElementVersions)!==null&&I!==void 0?I:O.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const M=window,y=M.trustedTypes,Y=y?y.createPolicy("lit-html",{createHTML:n=>n}):void 0,V="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+$,bt=`<${ht}>`,g=document,w=()=>g.createComment(""),C=n=>n===null||typeof n!="object"&&typeof n!="function",ut=Array.isArray,St=n=>ut(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",D=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,v=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,st=/"/g,pt=/^(?:script|style|textarea|title)$/i,wt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),nt=wt(1),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ot=new WeakMap,f=g.createTreeWalker(g,129,null,!1);function mt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const Ct=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=b;for(let c=0;c<e;c++){const l=n[c];let a,h,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,h=r.exec(l),h!==null);)u=r.lastIndex,r===b?h[1]==="!--"?r=tt:h[1]!==void 0?r=et:h[2]!==void 0?(pt.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=v):h[3]!==void 0&&(r=v):r===v?h[0]===">"?(r=s??b,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,a=h[1],r=h[3]===void 0?v:h[3]==='"'?st:it):r===st||r===it?r=v:r===tt||r===et?r=b:(r=v,s=void 0);const m=r===v&&n[c+1].startsWith("/>")?" ":"";o+=r===b?l+bt:d>=0?(i.push(a),l.slice(0,d)+V+l.slice(d)+$+m):l+$+(d===-2?(i.push(void 0),c):m)}return[mt(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[a,h]=Ct(t,e);if(this.el=T.createElement(a,i),f.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=f.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith(V)||u.startsWith($)){const m=h[r++];if(d.push(u),m!==void 0){const vt=s.getAttribute(m.toLowerCase()+V).split($),P=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:P[2],strings:vt,ctor:P[1]==="."?xt:P[1]==="?"?Ht:P[1]==="@"?Ut:N})}else l.push({type:6,index:o})}for(const u of d)s.removeAttribute(u)}if(pt.test(s.tagName)){const d=s.textContent.split($),u=d.length-1;if(u>0){s.textContent=y?y.emptyScript:"";for(let m=0;m<u;m++)s.append(d[m],w()),f.nextNode(),l.push({type:2,index:++o});s.append(d[u],w())}}}else if(s.nodeType===8)if(s.data===ht)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf($,d+1))!==-1;)l.push({type:7,index:o}),d+=$.length-1}o++}}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function E(n,t,e=n,i){var s,o,r,c;if(t===A)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=E(n,l._$AS(n,t.values),l,i)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(i,!0);f.currentNode=o;let r=f.nextNode(),c=0,l=0,a=s[0];for(;a!==void 0;){if(c===a.index){let h;a.type===2?h=new x(r,r.nextSibling,this,t):a.type===1?h=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(h=new Ot(r,this,t)),this._$AV.push(h),a=s[++l]}c!==(a==null?void 0:a.index)&&(r=f.nextNode(),c++)}return f.currentNode=g,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class x{constructor(t,e,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),C(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):St(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(mt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new Tt(o,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new T(t)),e}T(t){ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new x(this.k(w()),this.k(w()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class N{constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=E(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const c=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=E(this,c[i+l],e,l),a===A&&(a=this._$AH[l]),r||(r=!C(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const Pt=y?y.emptyScript:"";class Ht extends N{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Pt):this.element.removeAttribute(this.name)}}class Ut extends N{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:p)===A)return;const s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const rt=M.litHtmlPolyfillSupport;rt==null||rt(T,x),((R=M.litHtmlVersions)!==null&&R!==void 0?R:M.litHtmlVersions=[]).push("2.7.5");const Mt=(n,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new x(t.insertBefore(w(),c),c,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,j;class S extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}}S.finalized=!0,S._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:S});const lt=globalThis.litElementPolyfillSupport;lt==null||lt({LitElement:S});((j=globalThis.litElementVersions)!==null&&j!==void 0?j:globalThis.litElementVersions=[]).push("3.3.2");const Nt=(n,t,e,i)=>{const s=parseInt(n,10),o=parseInt(t,10),r=parseInt(e,10),c=parseInt(i,10),l=new Date;l.setHours(s,o,0);const a=new Date;a.setHours(r,c,0);const d=(a-l)/(1e3*60);if(d<60)return`${d} min`;{const u=Math.floor(d/60),m=d%60;return`${u} h ${m} min`}};class J extends S{constructor(){super(),this.description="",this.timeDiff="",this.addEventListener("click",()=>{this.description===""?this.description=this.data.description:this.description=""}),this.addEventListener("task-end",()=>{this.classList.add("hidden"),localStorage.setItem(this.data.title,"true")})}init(){const t=this.initial,{endTime:e}=this.data;this.hourInit=t.split(":")[0],this.minInit=t.split(":")[1],this.hourEnd=e.split(":")[0],this.minEnd=e.split(":")[1],localStorage.getItem(this.data.title)==="true"&&this.classList.add("hidden")}getTimeDiff(){return Nt(this.hourInit,this.minInit,this.hourEnd,this.minEnd)}managers(){const{managers:t}=this.data;return t.map(e=>nt`<p class="manager">${e.toUpperCase()}</p>`)}render(){return this.init(),nt`
    <div class="card">
      <div class="time">
        <p class="hour time-init">${this.hourInit}<span>${this.minInit}</span></p>
        <p class="time-separator">|</p>
        <p class="hour time-end">${this.hourEnd}<span>${this.minEnd}</span></p>
      </div>
      <main>
        <p class="difference-time">${this.getTimeDiff()}</p>
        <h1 class="title">${this.data.title.toUpperCase()}</h1>
        <div class="managers">
          ${this.managers()}
        </div>
        <div class="content">
          <p class="description">${this.description}</p>
        </div>
      </main>
      <div class="progress"></div>
    </div>`}}k(J,"properties",{data:{type:Object},initial:{type:String},description:{type:String}}),k(J,"styles",yt`
    :host {
      color: #000;
      user-select: none;
    }

    :host(.hidden) {
      display: none;
    }

    .card {
      background: var(--bg-color, #fff);
      border-radius: 22px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    p, h1 {
      margin: 0;
    }

    .time {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-weight: 400;
      font-size: 1.2rem;
    }

    .hour {
      line-height: 1rem;
    }

    .time span {
      font-size: 0.8rem;
      display: block;
      text-align: center;
    }

    main {
      width: 100%;
    }

    .difference-time {
      text-align: center;
      padding: 0.4rem 0.6rem;
      background: rgba(255, 255, 255, 0.5);
      border: 1.2px solid #000;
      border-radius: 10px;
      width: fit-content;
      margin: 0 auto;
      margin-bottom: 0.3rem;
    }

    .title {
      font-size: 38px;
      word-break: break-word;
      hyphens: auto;
    }

    .managers {
      display: flex;
      justify-content: space-evenly;
    }

    .manager, .description {
      text-align: center;
      font-size: 0.9rem;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 1rem;
    }
  `);customElements.define("task-card",J);const $t=document.querySelector(".task-list"),kt=document.querySelector(".actual-date"),It=document.querySelector(".now-time");let U=new Date;const Lt={weekday:"long",day:"numeric"},Rt={hour:"numeric",minute:"numeric",second:"numeric"};kt.innerHTML=U.toLocaleDateString("es-BO",Lt).toUpperCase();const Dt=at.map(n=>n.endTime);setInterval(()=>{U=new Date;const n=U.toLocaleTimeString("es-BO",Rt);if(It.innerHTML=n,U.getSeconds()===0&&Dt.includes(n.slice(0,-3))){const t=new CustomEvent("task-end",{detail:{from:"main",message:"Task end"},composed:!0});$t.firstChild.dispatchEvent(t)}},1e3);at.forEach((n,t,e)=>{var r;const i=(r=e[t-1])==null?void 0:r.endTime,s=document.createElement("task-card"),o=t%K.length;s.style.setProperty("--bg-color",K[o]),s.setAttribute("data",JSON.stringify(n)),t===0?s.setAttribute("initial","08:00"):s.setAttribute("initial",i),$t.appendChild(s)});
