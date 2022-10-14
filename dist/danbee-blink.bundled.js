/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class o{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const a=window,h=a.trustedTypes,l=h?h.emptyScript:"",d=a.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},p=(t,i)=>i!==t&&(i==i||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:p};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=u){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,s.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=u){var e;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:c).toAttribute(i,s.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,o=e._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=e.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:c;this._$El=o,this[o]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:b}),(null!==(r=a.reactiveElementVersions)&&void 0!==r?r:a.reactiveElementVersions=[]).push("1.4.1");const f=window,v=f.trustedTypes,w=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,y="?"+m,k=`<${y}>`,x=document,A=(t="")=>x.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,M=t=>$(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,I=/>/g,z=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),F=/'/g,D=/"/g,T=/^(?:script|style|textarea|title)$/i,R=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),E=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),j=new WeakMap,U=x.createTreeWalker(x,129,null,!1),B=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=S;for(let i=0;i<s;i++){const s=t[i];let a,h,l=-1,d=0;for(;d<s.length&&(r.lastIndex=d,h=r.exec(s),null!==h);)d=r.lastIndex,r===S?"!--"===h[1]?r=_:void 0!==h[1]?r=I:void 0!==h[2]?(T.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=z):void 0!==h[3]&&(r=z):r===z?">"===h[0]?(r=null!=o?o:S,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?z:'"'===h[3]?D:F):r===D||r===F?r=z:r===_||r===I?r=S:(r=z,o=void 0);const c=r===z&&t[i+1].startsWith("/>")?" ":"";n+=r===S?s+k:l>=0?(e.push(a),s.slice(0,l)+"$lit$"+s.slice(l)+m+c):s+m+(-2===l?(e.push(void 0),i):c)}const a=n+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,e]};class O{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[h,l]=B(t,i);if(this.el=O.createElement(h,s),U.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=U.nextNode())&&a.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(m)){const s=l[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(m),i=/([.?@])?(.*)/.exec(s);a.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?q:"?"===i[1]?K:"@"===i[1]?J:N})}else a.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(T.test(e.tagName)){const t=e.textContent.split(m),i=t.length-1;if(i>0){e.textContent=v?v.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],A()),U.nextNode(),a.push({type:2,index:++o});e.append(t[i],A())}}}else if(8===e.nodeType)if(e.data===y)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(m,t+1));)a.push({type:7,index:o}),t+=m.length-1}o++}}static createElement(t,i){const s=x.createElement("template");return s.innerHTML=t,s}}function W(t,i,s=t,e){var o,n,r,a;if(i===E)return i;let h=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const l=C(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==l&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===l?h=void 0:(h=new l(t),h._$AT(t,s,e)),void 0!==e?(null!==(r=(a=s)._$Cl)&&void 0!==r?r:a._$Cl=[])[e]=h:s._$Cu=h),void 0!==h&&(i=W(t,h._$AS(t,i.values),h,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:x).importNode(s,!0);U.currentNode=o;let n=U.nextNode(),r=0,a=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new H(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new X(n,this,t)),this.v.push(i),h=e[++a]}r!==(null==h?void 0:h.index)&&(n=U.nextNode(),r++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class H{constructor(t,i,s,e){var o;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=W(this,t,i),C(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==E&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):M(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==P&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=O.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=j.get(t.strings);return void 0===i&&j.set(t.strings,i=new O(t)),i}O(t){$(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new H(this.S(A()),this.S(A()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class N{constructor(t,i,s,e,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=W(this,t,i,0),n=!C(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const e=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=W(this,e[s+r],i,r),a===E&&(a=this._$AH[r]),n||(n=!C(a)||a!==this._$AH[r]),a===P?t=P:t!==P&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!e&&this.P(t)}P(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends N{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===P?void 0:t}}const L=v?v.emptyScript:"";class K extends N{constructor(){super(...arguments),this.type=4}P(t){t&&t!==P?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class J extends N{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=W(this,t,i,0))&&void 0!==s?s:P)===E)return;const e=this._$AH,o=t===P&&e!==P||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==P&&(e===P||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Y={A:"$lit$",M:m,C:y,L:1,R:B,D:V,V:M,I:W,H,N,U:K,B:J,F:q,W:X},Z=f.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Q;null==Z||Z(O,H),(null!==(g=f.litHtmlVersions)&&void 0!==g?g:f.litHtmlVersions=[]).push("2.3.1");class tt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new H(i.insertBefore(A(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return E}}tt.finalized=!0,tt._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:tt});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:tt}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):st(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=2;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{H:rt}=Y,at=()=>document.createComment(""),ht=(t,i,s)=>{var e;const o=t._$AA.parentNode,n=void 0===i?t._$AB:i._$AA;if(void 0===s){const i=o.insertBefore(at(),n),e=o.insertBefore(at(),n);s=new rt(i,e,t,t.options)}else{const i=s._$AB.nextSibling,r=s._$AM,a=r!==t;if(a){let i;null===(e=s._$AQ)||void 0===e||e.call(s,t),s._$AM=t,void 0!==s._$AP&&(i=t._$AU)!==r._$AU&&s._$AP(i)}if(i!==n||a){let t=s._$AA;for(;t!==i;){const i=t.nextSibling;o.insertBefore(t,n),t=i}}}return s},lt=(t,i,s=t)=>(t._$AI(i,s),t),dt={},ct=t=>{var i;null===(i=t._$AP)||void 0===i||i.call(t,!1,!0);let s=t._$AA;const e=t._$AB.nextSibling;for(;s!==e;){const t=s.nextSibling;s.remove(),s=t}},pt=(t,i,s)=>{const e=new Map;for(let o=i;o<=s;o++)e.set(t[o],o);return e},ut=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){if(super(t),t.type!==nt)throw Error("repeat() can only be used in text expressions")}ht(t,i,s){let e;void 0===s?s=i:void 0!==i&&(e=i);const o=[],n=[];let r=0;for(const i of t)o[r]=e?e(i,r):r,n[r]=s(i,r),r++;return{values:n,keys:o}}render(t,i,s){return this.ht(t,i,s).values}update(t,[i,s,e]){var o;const n=(t=>t._$AH)(t),{values:r,keys:a}=this.ht(i,s,e);if(!Array.isArray(n))return this.ut=a,r;const h=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],l=[];let d,c,p=0,u=n.length-1,b=0,g=r.length-1;for(;p<=u&&b<=g;)if(null===n[p])p++;else if(null===n[u])u--;else if(h[p]===a[b])l[b]=lt(n[p],r[b]),p++,b++;else if(h[u]===a[g])l[g]=lt(n[u],r[g]),u--,g--;else if(h[p]===a[g])l[g]=lt(n[p],r[g]),ht(t,l[g+1],n[p]),p++,g--;else if(h[u]===a[b])l[b]=lt(n[u],r[b]),ht(t,n[p],n[u]),u--,b++;else if(void 0===d&&(d=pt(a,b,g),c=pt(h,p,u)),d.has(h[p]))if(d.has(h[u])){const i=c.get(a[b]),s=void 0!==i?n[i]:null;if(null===s){const i=ht(t,n[p]);lt(i,r[b]),l[b]=i}else l[b]=lt(s,r[b]),ht(t,n[p],s),n[i]=null;b++}else ct(n[u]),u--;else ct(n[p]),p++;for(;b<=g;){const i=ht(t,l[g+1]);lt(i,r[b]),l[b++]=i}for(;p<=u;){const t=n[p++];null!==t&&ct(t)}return this.ut=a,((t,i=dt)=>{t._$AH=i})(t,l),E}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var bt,gt,ft,vt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r},wt=-1;let mt=class extends tt{constructor(){super(...arguments),this.basicIcon="https://blink.danbee.ai/asset/danbee-blink/images/default_icon.png",this.listenIcon="https://blink.danbee.ai/asset/danbee-blink/images/active_icon.png",this.keyboardIcon="https://blink.danbee.ai/asset/danbee-blink/images/stt_icon.png",this.data=[{id:1,type:"개인",keyword:"주민등록등본",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000015&HighCtgCD=A01010001&Mcode=10200"},{id:2,type:"개인",keyword:"주민등록초본",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000015&HighCtgCD=A01010001&Mcode=10200"},{id:3,type:"개인",keyword:"가족관계증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=02"},{id:4,type:"개인",keyword:"기본증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=03"},{id:5,type:"개인",keyword:"혼인관계증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=04"},{id:6,type:"개인",keyword:"입양관계증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=05"},{id:7,type:"개인",keyword:"친양자입양관계증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=06"},{id:8,type:"개인",keyword:"제적등본",url:"https://efamily.scourt.go.kr/pt/PtJjkpApplrInfoInqW.do?menuFg=10"},{id:9,type:"개인",keyword:"제적초본",url:"https://efamily.scourt.go.kr/pt/PtJjkpApplrInfoInqW.do?menuFg=11"},{id:10,type:"개인",keyword:"지적(임야)도등본",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000027"},{id:11,type:"개인",keyword:"부동산등기부등본열람",url:"http://www.iros.go.kr/frontservlet?cmd=RISUWelcomeViewC"},{id:12,type:"개인",keyword:"부동산등기부등본발급",url:"http://www.iros.go.kr/frontservlet?cmd=RISUWelcomeIsuC"},{id:13,type:"개인",keyword:"토지(임야)대장열람",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000026&HighCtgCD=A02001001&Mcode=10207"},{id:14,type:"개인",keyword:"토지(임야)대장등본발급",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000026&HighCtgCD=A02001001&Mcode=10207"},{id:15,type:"개인",keyword:"토지이용계획열람",url:"https://www.eum.go.kr/web/ar/lu/luLandDet.jsp"},{id:16,type:"개인",keyword:"부동산종합증명서",url:"https://kras.go.kr:444/tcerikra/callEstateGnrlzCrtf.do"},{id:17,type:"개인",keyword:"건축물대장말소신청",url:"https://cloud.eais.go.kr/moct/awp/ada03/AWPADA03V01"},{id:18,type:"개인",keyword:"건축물도로명주소변경ㆍ정정신청",url:"https://cloud.eais.go.kr/moct/awp/ada03/AWPADA03V01"},{id:19,type:"개인",keyword:"건축물대장등·초본",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000098&HighCtgCD=A02004002&Mcode=10205"},{id:20,type:"개인",keyword:"4대보험",url:"https://www.4insure.or.kr/ins4/ptl/Main.do"},{id:21,type:"개인",keyword:"출생신고",url:"https://efamily.scourt.go.kr/ar/ArChkPrcd.do"},{id:22,type:"개인",keyword:"개명신고",url:"https://efamily.scourt.go.kr/ar/ArChgnmCAAFMgr.do"},{id:23,type:"개인",keyword:"지방세 납세증명",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000056&HighCtgCD=A03019002&FAX_TYPE=y&img=02&tp_seq=01&Mcode=10209/"},{id:24,type:"개인",keyword:"납세증명서",url:"https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000011&tp_seq=01"},{id:25,type:"개인",keyword:"소득금액증명",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000021&HighCtgCD=A-09002&FAX_TYPE=N&img=02&tp_seq=01&Mcode=10211"},{id:26,type:"개인",keyword:"전입신고",url:"https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01004&CappBizCD=13100000016"},{id:27,type:"개인",keyword:"병적증명서",url:"https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01002&CappBizCD=13000000016"}],this.searchResults=[],this.isActive=!1,this.blinkMode="",this.iframeUrl="",this.userInput="",this.speechText="",this.currentKeyword="",this.lastWarfState="",this.sttEnabled=!0}connectedCallback(){super.connectedCallback();try{this.data=JSON.parse(this.children[0].innerHTML),this.hasAttribute("basic-icon")&&null!==this.getAttribute("basic-icon")&&""!==this.getAttribute("basic-icon")?this.basicIcon=this.getAttribute("basic-icon"):this.basicIcon="https://blink.danbee.ai/asset/danbee-blink/images/default_icon.png",this.hasAttribute("keyboard-icon")&&null!==this.getAttribute("keyboard-icon")&&""!==this.getAttribute("keyboard-icon")?this.keyboardIcon=this.getAttribute("keyboard-icon"):this.keyboardIcon="https://blink.danbee.ai/asset/danbee-blink/images/active_icon.png",this.hasAttribute("listen-icon")&&null!==this.getAttribute("listen-icon")&&""!==this.getAttribute("listen-icon")?this.listenIcon=this.getAttribute("listen-icon"):this.listenIcon="https://blink.danbee.ai/asset/danbee-blink/images/stt_icon.png",this.hasAttribute("welcome-message")&&null!==this.getAttribute("welcome-message")&&""!==this.getAttribute("welcome-message")?this.welcomeMsg=this.getAttribute("welcome-message"):this.welcomeMsg="저를 클릭하고 원하는 정보를 말씀해보세요!",this.hasAttribute("ok-message")&&null!==this.getAttribute("ok-message")&&""!==this.getAttribute("ok-message")?this.successMsg=this.getAttribute("ok-message"):this.successMsg="워프 완료했어요! 오바",this.hasAttribute("fail-message")&&null!==this.getAttribute("fail-message")&&""!==this.getAttribute("fail-message")?this.failMsg=this.getAttribute("fail-message"):this.failMsg="아이프라임 불가! 새 창으로 열었어요. 오바",this.hasAttribute("search-message")&&null!==this.getAttribute("search-message")&&""!==this.getAttribute("search-message")?this.searchMsg=this.getAttribute("search-message"):this.searchMsg="목적지를 찾는 중이에요. 오바",this.hasAttribute("error-message")&&null!==this.getAttribute("error-message")&&""!==this.getAttribute("error-message")?this.errorMsg=this.getAttribute("error-message"):this.errorMsg="목적지를 찾지 못했어요.. 오바",this.hasAttribute("dontmove-message")&&null!==this.getAttribute("welcome-message")&&""!==this.getAttribute("welcome-message")?this.dontMoveMsg=this.getAttribute("dontmove-message"):this.dontMoveMsg="이미 도착한 목적지예요. 오바",this._changeBlinkMode({mode:"",balloonMsg:this.welcomeMsg})}catch(t){console.error(t)}this._initSpeechRecognition()}render(){const t="keyboard",i="stt";return R`
      <div style="">
        <div class="chatbot-wrap ${this.blinkMode} ${"txt"===this.blinkMode||this.blinkMode===i||this.blinkMode===t?"action":""}">
              <div class="chatbot-inner">
                ${"txt"===this.blinkMode?R`
                    <div class="action-wrap">
                      <p>${this.balloonMsg}</p>
                    </div>
                  `:null}
                ${this.blinkMode===i?R`
                    <div class="action-wrap">
                      <p>듣는 중...</p>
                      <img src="${"https://blink.danbee.ai/asset/danbee-blink/images/keyboard.png"}" @click="${()=>this._changeBlinkMode({mode:t,balloonMsg:""})}" title="입력모드로 전환"/>
                    </div>
                  `:null}
                ${this.blinkMode===t?R`
                    <div class="action-wrap">
                      <input type="text" placeholder="여기에 입력 하세요!" @input="${this._onChangeInput}"/>
                      ${this.userInput?R`<img src="${"https://blink.danbee.ai/asset/danbee-blink/images/send.png"}" @click="${this._sendMessage}" title="보내기"/>`:""}
                      ${this.sttEnabled&&!this.userInput?R`<img src="${"https://blink.danbee.ai/asset/danbee-blink/images/mic.png"}" @click="${()=>this._changeBlinkMode({mode:i,balloonMsg:""})}" title="음성모드로 전환"/>`:""}
                    </div>
                  `:null}
                <div class="btn" @click="${this._toggleActive}">
                  <img src="${this.isActive?"stt"===this.blinkMode?this.listenIcon:this.keyboardIcon:this.basicIcon}" />
                </div>
                <!--                            <div class="btn"><img src="assets/images/profile-keyboard.png" /></div>-->
              </div>
              ${this.blinkMode===t&&this.userInput?R`
                  <div class="search-list">
                  <ul>
                    ${this.searchResults.length>0?ut(this.searchResults,(t=>t.keyword),(t=>R`
                      <li @click="${()=>this._gogo(t.keyword)}" style="cursor:pointer;">${this._getKeywordTemplate(t.keyword)}</li>
                    `)):R`<li>조회된 결과가 없습니다.</li>`}
                  </ul>
                  </div>
                `:""}
            </div>
            ${this.iframeUrl?R`        <iframe id="background-iframe" src="${this.iframeUrl}" @load="${this._onload}" style="width:100%;height:100%; background:#fff; position:fixed; top:-9999px; left: 0;" />
        `:""}
      </div>
    `}_playIntro(){ft=setInterval((()=>{wt<this.data.length-1?wt++:wt=0,this.blinkMode="txt",this.balloonMsg=R`'<span>${this.data[wt].keyword}</span>'<br/>(이)라고 말해봐요.`}),3e3)}_toggleActive(){this.isActive=!this.isActive,this.isActive?(this._clearAllTimer(),this.sttEnabled?this._changeBlinkMode({mode:"stt",balloonMsg:""}):this._changeBlinkMode({mode:"keyboard",balloonMsg:""})):this._changeBlinkMode({mode:"",balloonMsg:this.welcomeMsg})}_changeBlinkMode({mode:t,balloonMsg:i}){this.blinkMode=t,this.userInput="","stt"===this.blinkMode?this._startSpeeechRecognition():"keyboard"===this.blinkMode?this._stopSpeechRecognition():""===this.blinkMode&&(this.isActive=!1,this._stopSpeechRecognition(),bt=setTimeout((()=>{this.blinkMode="txt",this.balloonMsg=i||this.welcomeMsg,bt=setTimeout((()=>{this._playIntro()}),3e3)}),500))}_clearAllTimer(){bt&&clearTimeout(bt),ft&&clearInterval(ft)}_pleaseWait(){this.isActive=!1,this.blinkMode="",bt=setTimeout((()=>{this.blinkMode="txt",this.balloonMsg=this.searchMsg}),100)}_startSpeeechRecognition(){try{gt.start()}catch(t){}}_stopSpeechRecognition(){try{gt.abort()}catch(t){}}_initSpeechRecognition(){console.log("init SpeechRecognition!");try{window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,(gt=new window.SpeechRecognition).interimResults=!1,gt.lang="ko-KR",gt.continuous=!1,gt.maxAlternatives=1e4}catch(t){console.log(t),this.sttEnabled=!1}gt.onstart=function(){},gt.onend=()=>{console.log("onend");const t=this.speechText;this.speechText="",t&&this._gogo(t)},gt.onspeechstart=()=>{},gt.onspeechend=()=>{this._pleaseWait()},gt.onresult=t=>{this.speechText=Array.from(t.results).map((t=>t[0].transcript)).join("")}}_onChangeInput(){this.userInput=this._input.value,this.userInput?this.searchResults=this.data.filter((t=>t.keyword.indexOf(this.userInput)>-1)):this.searchResults=[]}_getKeywordTemplate(t){return R`${t.split(this.userInput)[0]}<span>${this.userInput}</span>${t.split(this.userInput)[1]}`}_sendMessage(){this.searchResults.length>0&&this._gogo(this.searchResults[0].keyword)}_gogo(t){if(t){if("iframe"===this.lastWarfState&&this.currentKeyword===t)return void this._changeBlinkMode({mode:"",balloonMsg:this.dontMoveMsg});this._pleaseWait(),t=t.replace(/(\s*)/g,"").replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,""),this.currentKeyword=t,this.iframeUrl="";const i=this.data.filter((i=>i.keyword.indexOf(t)>-1));i.length>0?this.iframeUrl=i[0].url:t&&this._changeBlinkMode({mode:"",balloonMsg:this.errorMsg})}else this._changeBlinkMode({mode:"",balloonMsg:this.errorMsg})}_onload(){console.log("iframe on load!"),this.shadowRoot.getElementById("background-iframe").style.top="-9999px",setTimeout((()=>{this.getFrameContentWindow()}),500)}getFrameContentWindow(){try{let t=this.shadowRoot.getElementById("background-iframe");t.contentWindow.length>0?(t.style.top="0px",this._changeBlinkMode({mode:"",balloonMsg:this.successMsg}),this.lastWarfState="iframe"):setTimeout((()=>{const t=window.open(this.iframeUrl.toString(),"_blank","fullscreen");null==t||null==t?(alert("브라우저의 팝업차단을 허용하시거나, 지원하지 않는 브라우저입니다."),this._changeBlinkMode({mode:"",balloonMsg:"브라우저의 팝업차단을 허용하시거나, 지원하지 않는 브라우저입니다."})):this._changeBlinkMode({mode:"",balloonMsg:this.failMsg}),this.lastWarfState="newtab"}))}catch(t){console.log(t),setTimeout((()=>{const t=window.open(this.iframeUrl.toString(),"_blank","fullscreen");null==t||null==t?(alert("브라우저의 팝업차단을 허용하시거나, 지원하지 않는 브라우저입니다."),this._changeBlinkMode({mode:"",balloonMsg:"브라우저의 팝업차단을 허용하시거나, 지원하지 않는 브라우저입니다."})):this._changeBlinkMode({mode:"",balloonMsg:this.failMsg}),this.lastWarfState="newtab"}))}}};mt.styles=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new o(e,t,s)})`
    /*font*/
    @font-face {
      font-family: 'Short Stack';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url("https://blink.danbee.ai/asset/danbee-blink/fonts/Short_Stack/ShortStack-Regular.ttf");
    }

    @font-face {
      font-family: 'Maplestory';
      font-style: normal;
      font-weight: 400;
      src: url("https://blink.danbee.ai/asset/danbee-blink/fonts/MaplestoryFont/Maplestory-Light.ttf"),
      url("https://blink.danbee.ai/asset/danbee-blink/fonts/MaplestoryFont/Maplestory-OTF-Light.otf") format('opentype');
    }

    @font-face {
      font-family: 'Maplestory';
      font-style: normal;
      font-weight: 600;
      src: url("https://blink.danbee.ai/asset/danbee-blink/fonts/MaplestoryFont/Maplestory-Bold.ttf"),
      url("https://blink.danbee.ai/asset/danbee-blink/fonts/MaplestoryFont/Maplestory-OTF-Bold.otf") format('opentype');
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
      font-family: Noto Sans KR, Roboto, sans-serif;
      box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    * {
      transition: all 0.3s linear;
    }
    html, body {
      height: 100%;
    }
    body {
      line-height: 1;
      min-width: 320px;
    }
    ol, ul {
      list-style: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    a {
      text-decoration: none;
      color: inherit;
      font-size: inherit;
    }
    p {
      word-break: keep-all;
    }

    .chatbot-wrap {
      position: absolute;
      right: 2.2%;
      bottom: 4%;
      z-index: 1;
      color: #fff;
    }
    .chatbot-wrap.action .chatbot-inner {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 2rem;
      line-height: 2.2rem;
      border-radius: 60px;
      box-shadow: 0px 0px 4px 7px rgba(255, 255, 255, 0.5);
      padding: 2px 6px 2px 30px;
    }
    .chatbot-wrap .btn {
      cursor: pointer;
    }
    .chatbot-wrap .btn img {
      display: block;
      width: 114px;
      border-radius: 50%;
      object-fit: cover;
    }
    .chatbot-wrap .action-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .chatbot-wrap .action-wrap p {
      width: fit-content;
      margin-right: 16px;
    }

    .chatbot-wrap .action-wrap img {
      cursor: pointer;
      margin: 0 16px 0 14px;
      object-fit: contain;
    }

    .chatbot-wrap.txt .chatbot-inner {
      background: #242424;
    }
    .chatbot-wrap.stt .chatbot-inner {
      background: #FF7008;
    }
    .chatbot-wrap.stt .chatbot-inner {
      background: #FF7008;
    }
    .chatbot-wrap.keyboard {
      width: calc(100% - 4%);
    }
    .chatbot-wrap.keyboard .chatbot-inner {
      background: #fff;
      padding: 2px 6px 2px 2%;
    }
    .chatbot-wrap.keyboard .action-wrap {
      width: 100%;
    }
    .chatbot-wrap.keyboard .action-wrap input {
      font-size: 36px;
      width: calc(100% - 50px);
      border: 0;
    }
    .chatbot-wrap.keyboard .action-wrap input:active,
    .chatbot-wrap.keyboard .action-wrap input:focus {
      outline: none;
    }
    .chatbot-wrap.keyboard .action-wrap input::placeholder {
      color: #9F9F9F;
    }

    .chatbot-wrap .search-list {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 60px;
      background: #1A1A1A;
      z-index: -1;
      padding: 1.4% 2% 150px;
    }

    .chatbot-wrap .search-list li {
      font-family: Noto Sans KR, Roboto, sans-serif;
      font-size: 36px;
      padding: 0.5% 0;
    }
    .chatbot-wrap .search-list li span {
      font-family: Noto Sans KR, Roboto, sans-serif;
      font-weight: bold;
    }

    @media (max-width: 1024px) {
      .chatbot-wrap.action .chatbot-inner {
        font-size: 1.8rem;
        line-height: 2rem;
        height: 100px;
        border-radius: 50px;
      }
      .chatbot-wrap .btn img {
        width: 94px;
      }
      .chatbot-wrap .search-list {
        border-radius: 50px;
        padding: 20px 20px 120px;
      }
      .chatbot-wrap .search-list li {
        font-size: 1.8rem;
        padding: 5px 0;
      }
      .chatbot-wrap.keyboard .chatbot-inner {
        padding: 2px 6px 2px 20px;
      }
      .chatbot-wrap .action-wrap img {
        width: 50px;
        height: 50px;
      }
      .chatbot-wrap.keyboard .action-wrap input {
        font-size: 1.8rem;
      }
    }

    @media (max-width: 768px) {
      .chatbot-wrap.action .chatbot-inner {
        font-size: 1.6rem;
        line-height: 1.8rem;
        height: 80px;
        border-radius: 40px;
      }
      .chatbot-wrap .btn img {
        width: 74px;
      }
      .chatbot-wrap .search-list {
        border-radius: 40px;
        padding: 20px 20px 100px;
      }
      .chatbot-wrap .search-list li {
        font-size: 1.4rem;
        padding: 5px 0;
      }
      .chatbot-wrap .action-wrap img {
        width: 40px;
        height: 40px;
        margin: 0 12px 0 10px;
      }
      .chatbot-wrap.keyboard .action-wrap input {
        font-size: 1.4rem;
      }
    }

    @media (max-width: 425px) {
      .chatbot-wrap.action .chatbot-inner {
        font-size: 1.2rem;
        line-height: 1.4rem;
        height: 60px;
        border-radius: 30px;
      }
      .chatbot-wrap .btn img {
        width: 54px;
      }
      .chatbot-wrap .search-list {
        border-radius: 20px 20px 30px 30px;
        padding: 10px 10px 80px;
      }
      .chatbot-wrap .search-list li {
        font-size: 1rem;
        padding: 5px 0;
      }
      .chatbot-wrap.keyboard .chatbot-inner {
        padding: 2px 6px 2px 10px;
      }
      .chatbot-wrap .action-wrap img {
        width: 30px;
        height: 30px;
      }
      .chatbot-wrap.keyboard .action-wrap input {
        font-size: 1rem;
      }
    }
  `,vt([et()],mt.prototype,"basicIcon",void 0),vt([et()],mt.prototype,"listenIcon",void 0),vt([et()],mt.prototype,"keyboardIcon",void 0),vt([et({type:Array})],mt.prototype,"data",void 0),vt([et({})],mt.prototype,"searchResults",void 0),vt([et()],mt.prototype,"isActive",void 0),vt([et()],mt.prototype,"blinkMode",void 0),vt([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,i){return(({finisher:t,descriptor:i})=>(s,e)=>{var o;if(void 0===e){const e=null!==(o=s.originalKey)&&void 0!==o?o:s.key,n=null!=i?{kind:"method",placement:"prototype",key:e,descriptor:i(s.key)}:{...s,key:e};return null!=t&&(n.finisher=function(i){t(i,e)}),n}{const o=s.constructor;void 0!==i&&Object.defineProperty(s,e,i(e)),null==t||t(o,e)}})({descriptor:s=>{const e={get(){var i,s;return null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof s?Symbol():"__"+s;e.get=function(){var s,e;return void 0===this[i]&&(this[i]=null!==(e=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(t))&&void 0!==e?e:null),this[i]}}return e}})}("input",!1)],mt.prototype,"_input",void 0),vt([et()],mt.prototype,"iframeUrl",void 0),vt([et()],mt.prototype,"balloonMsg",void 0),vt([et()],mt.prototype,"welcomeMsg",void 0),vt([et()],mt.prototype,"successMsg",void 0),vt([et()],mt.prototype,"failMsg",void 0),vt([et()],mt.prototype,"searchMsg",void 0),vt([et()],mt.prototype,"errorMsg",void 0),vt([et()],mt.prototype,"dontMoveMsg",void 0),vt([et()],mt.prototype,"userInput",void 0),vt([et()],mt.prototype,"speechText",void 0),vt([et()],mt.prototype,"currentKeyword",void 0),vt([et()],mt.prototype,"lastWarfState",void 0),vt([et()],mt.prototype,"sttEnabled",void 0),mt=vt([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i))("danbee-blink")],mt);export{mt as DanbeeBlink};
