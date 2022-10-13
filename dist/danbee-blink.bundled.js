/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new WeakMap;class o{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const a=window,h=a.trustedTypes,l=h?h.emptyScript:"",d=a.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},p=(t,i)=>i!==t&&(i==i||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:p};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=u){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const o=this[t];this[i]=s,this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=u){var s;const o=this.constructor._$Ep(t,e);if(void 0!==o&&!0===e.reflect){const n=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:c).toAttribute(i,e.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:c;this._$El=o,this[o]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:f}),(null!==(r=a.reactiveElementVersions)&&void 0!==r?r:a.reactiveElementVersions=[]).push("1.4.1");const g=window,m=g.trustedTypes,v=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,y="?"+w,k=`<${y}>`,x=document,A=(t="")=>x.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,S=t=>$(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,z=/>/g,I=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),R=/'/g,F=/"/g,D=/^(?:script|style|textarea|title)$/i,T=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),E=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),P=new WeakMap,U=x.createTreeWalker(x,129,null,!1),N=(t,i)=>{const e=t.length-1,s=[];let o,n=2===i?"<svg>":"",r=M;for(let i=0;i<e;i++){const e=t[i];let a,h,l=-1,d=0;for(;d<e.length&&(r.lastIndex=d,h=r.exec(e),null!==h);)d=r.lastIndex,r===M?"!--"===h[1]?r=_:void 0!==h[1]?r=z:void 0!==h[2]?(D.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=I):void 0!==h[3]&&(r=I):r===I?">"===h[0]?(r=null!=o?o:M,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?I:'"'===h[3]?F:R):r===F||r===R?r=I:r===_||r===z?r=M:(r=I,o=void 0);const c=r===I&&t[i+1].startsWith("/>")?" ":"";n+=r===M?e+k:l>=0?(s.push(a),e.slice(0,l)+"$lit$"+e.slice(l)+w+c):e+w+(-2===l?(s.push(void 0),i):c)}const a=n+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(a):a,s]};class B{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[h,l]=N(t,i);if(this.el=B.createElement(h,e),U.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=U.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(w)){const e=l[n++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(w),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?q:"?"===i[1]?L:"@"===i[1]?J:H})}else a.push({type:6,index:o})}for(const i of t)s.removeAttribute(i)}if(D.test(s.tagName)){const t=s.textContent.split(w),i=t.length-1;if(i>0){s.textContent=m?m.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],A()),U.nextNode(),a.push({type:2,index:++o});s.append(t[i],A())}}}else if(8===s.nodeType)if(s.data===y)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)a.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,i){const e=x.createElement("template");return e.innerHTML=t,e}}function O(t,i,e=t,s){var o,n,r,a;if(i===E)return i;let h=void 0!==s?null===(o=e._$Cl)||void 0===o?void 0:o[s]:e._$Cu;const l=C(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==l&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===l?h=void 0:(h=new l(t),h._$AT(t,e,s)),void 0!==s?(null!==(r=(a=e)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=h:e._$Cu=h),void 0!==h&&(i=O(t,h._$AS(t,i.values),h,s)),i}class W{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:e},parts:s}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:x).importNode(e,!0);U.currentNode=o;let n=U.nextNode(),r=0,a=0,h=s[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new V(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new X(n,this,t)),this.v.push(i),h=s[++a]}r!==(null==h?void 0:h.index)&&(n=U.nextNode(),r++)}return o}m(t){let i=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class V{constructor(t,i,e,s){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$C_=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=O(this,t,i),C(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==E&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):S(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==j&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var i;const{values:e,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(e);else{const t=new W(o,this),i=t.p(this.options);t.m(e),this.k(i),this._$AH=t}}_$AC(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new B(t)),i}O(t){$(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const o of t)s===i.length?i.push(e=new V(this.S(A()),this.S(A()),this,this.options)):e=i[s],e._$AI(o),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class H{constructor(t,i,e,s,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const o=this.strings;let n=!1;if(void 0===o)t=O(this,t,i,0),n=!C(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=O(this,s[e+r],i,r),a===E&&(a=this._$AH[r]),n||(n=!C(a)||a!==this._$AH[r]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.P(t)}P(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends H{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===j?void 0:t}}const K=m?m.emptyScript:"";class L extends H{constructor(){super(...arguments),this.type=4}P(t){t&&t!==j?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class J extends H{constructor(t,i,e,s,o){super(t,i,e,s,o),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=O(this,t,i,0))&&void 0!==e?e:j)===E)return;const s=this._$AH,o=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==j&&(s===j||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const Y={A:"$lit$",M:w,C:y,L:1,R:N,D:W,V:S,I:O,H:V,N:H,U:L,B:J,F:q,W:X},Z=g.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Q;null==Z||Z(B,V),(null!==(b=g.litHtmlVersions)&&void 0!==b?b:g.litHtmlVersions=[]).push("2.3.1");class tt extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,o;const n=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==e?void 0:e.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new V(i.insertBefore(A(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return E}}tt.finalized=!0,tt._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:tt});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:tt}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):et(t,i)
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
const{H:rt}=Y,at=()=>document.createComment(""),ht=(t,i,e)=>{var s;const o=t._$AA.parentNode,n=void 0===i?t._$AB:i._$AA;if(void 0===e){const i=o.insertBefore(at(),n),s=o.insertBefore(at(),n);e=new rt(i,s,t,t.options)}else{const i=e._$AB.nextSibling,r=e._$AM,a=r!==t;if(a){let i;null===(s=e._$AQ)||void 0===s||s.call(e,t),e._$AM=t,void 0!==e._$AP&&(i=t._$AU)!==r._$AU&&e._$AP(i)}if(i!==n||a){let t=e._$AA;for(;t!==i;){const i=t.nextSibling;o.insertBefore(t,n),t=i}}}return e},lt=(t,i,e=t)=>(t._$AI(i,e),t),dt={},ct=t=>{var i;null===(i=t._$AP)||void 0===i||i.call(t,!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},pt=(t,i,e)=>{const s=new Map;for(let o=i;o<=e;o++)s.set(t[o],o);return s},ut=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){if(super(t),t.type!==nt)throw Error("repeat() can only be used in text expressions")}ht(t,i,e){let s;void 0===e?e=i:void 0!==i&&(s=i);const o=[],n=[];let r=0;for(const i of t)o[r]=s?s(i,r):r,n[r]=e(i,r),r++;return{values:n,keys:o}}render(t,i,e){return this.ht(t,i,e).values}update(t,[i,e,s]){var o;const n=(t=>t._$AH)(t),{values:r,keys:a}=this.ht(i,e,s);if(!Array.isArray(n))return this.ut=a,r;const h=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],l=[];let d,c,p=0,u=n.length-1,f=0,b=r.length-1;for(;p<=u&&f<=b;)if(null===n[p])p++;else if(null===n[u])u--;else if(h[p]===a[f])l[f]=lt(n[p],r[f]),p++,f++;else if(h[u]===a[b])l[b]=lt(n[u],r[b]),u--,b--;else if(h[p]===a[b])l[b]=lt(n[p],r[b]),ht(t,l[b+1],n[p]),p++,b--;else if(h[u]===a[f])l[f]=lt(n[u],r[f]),ht(t,n[p],n[u]),u--,f++;else if(void 0===d&&(d=pt(a,f,b),c=pt(h,p,u)),d.has(h[p]))if(d.has(h[u])){const i=c.get(a[f]),e=void 0!==i?n[i]:null;if(null===e){const i=ht(t,n[p]);lt(i,r[f]),l[f]=i}else l[f]=lt(e,r[f]),ht(t,n[p],e),n[i]=null;f++}else ct(n[u]),u--;else ct(n[p]),p++;for(;f<=b;){const i=ht(t,l[b+1]);lt(i,r[f]),l[f++]=i}for(;p<=u;){const t=n[p++];null!==t&&ct(t)}return this.ut=a,((t,i=dt)=>{t._$AH=i})(t,l),E}});
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
var ft,bt,gt,mt=function(t,i,e,s){for(var o,n=arguments.length,r=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(i,e,r):o(i,e))||r);return n>3&&r&&Object.defineProperty(i,e,r),r},vt=-1;let wt=class extends tt{constructor(){super(...arguments),this.basicIcon="https://blink.danbee.ai/asset/danbee-blink/images/default_icon.png",this.listenIcon="https://blink.danbee.ai/asset/danbee-blink/images/active_icon.png",this.keyboardIcon="https://blink.danbee.ai/asset/danbee-blink/images/stt_icon.png",this.data=[{id:1,type:"개인",keyword:"주민등록등본",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000015&HighCtgCD=A01010001&Mcode=10200"},{id:2,type:"개인",keyword:"주민등록초본",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000015&HighCtgCD=A01010001&Mcode=10200"},{id:3,type:"개인",keyword:"가족관계증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=02"},{id:4,type:"개인",keyword:"기본증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=03"},{id:5,type:"개인",keyword:"혼인관계증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=04"},{id:6,type:"개인",keyword:"입양관계증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=05"},{id:7,type:"개인",keyword:"친양자입양관계증명서",url:"https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=06"},{id:8,type:"개인",keyword:"제적등본",url:"https://efamily.scourt.go.kr/pt/PtJjkpApplrInfoInqW.do?menuFg=10"},{id:9,type:"개인",keyword:"제적초본",url:"https://efamily.scourt.go.kr/pt/PtJjkpApplrInfoInqW.do?menuFg=11"},{id:10,type:"개인",keyword:"지적(임야)도등본",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000027"},{id:11,type:"개인",keyword:"부동산등기부등본열람",url:"http://www.iros.go.kr/frontservlet?cmd=RISUWelcomeViewC"},{id:12,type:"개인",keyword:"부동산등기부등본발급",url:"http://www.iros.go.kr/frontservlet?cmd=RISUWelcomeIsuC"},{id:13,type:"개인",keyword:"토지(임야)대장열람",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000026&HighCtgCD=A02001001&Mcode=10207"},{id:14,type:"개인",keyword:"토지(임야)대장등본발급",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000026&HighCtgCD=A02001001&Mcode=10207"},{id:15,type:"개인",keyword:"토지이용계획열람",url:"https://www.eum.go.kr/web/ar/lu/luLandDet.jsp"},{id:16,type:"개인",keyword:"부동산종합증명서",url:"https://kras.go.kr:444/tcerikra/callEstateGnrlzCrtf.do"},{id:17,type:"개인",keyword:"건축물대장말소신청",url:"https://cloud.eais.go.kr/moct/awp/ada03/AWPADA03V01"},{id:18,type:"개인",keyword:"건축물도로명주소변경ㆍ정정신청",url:"https://cloud.eais.go.kr/moct/awp/ada03/AWPADA03V01"},{id:19,type:"개인",keyword:"건축물대장등·초본",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000098&HighCtgCD=A02004002&Mcode=10205"},{id:20,type:"개인",keyword:"4대보험",url:"https://www.4insure.or.kr/ins4/ptl/Main.do"},{id:21,type:"개인",keyword:"출생신고",url:"https://efamily.scourt.go.kr/ar/ArChkPrcd.do"},{id:22,type:"개인",keyword:"개명신고",url:"https://efamily.scourt.go.kr/ar/ArChgnmCAAFMgr.do"},{id:23,type:"개인",keyword:"지방세 납세증명",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000056&HighCtgCD=A03019002&FAX_TYPE=y&img=02&tp_seq=01&Mcode=10209/"},{id:24,type:"개인",keyword:"납세증명서",url:"https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=12100000011&tp_seq=01"},{id:25,type:"개인",keyword:"소득금액증명",url:"https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000021&HighCtgCD=A-09002&FAX_TYPE=N&img=02&tp_seq=01&Mcode=10211"},{id:26,type:"개인",keyword:"전입신고",url:"https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01004&CappBizCD=13100000016"},{id:27,type:"개인",keyword:"병적증명서",url:"https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A01002&CappBizCD=13000000016"}],this.searchResults=[],this.isActive=!1,this.blinkMode="",this.iframeUrl="",this.userInput="",this.speechText="",this.currentKeyword="",this.lastWarfState="",this.sttEnabled=!0}connectedCallback(){super.connectedCallback();try{this.data=JSON.parse(this.children[0].innerHTML),this.hasAttribute("basic-icon")&&null!==this.getAttribute("basic-icon")&&""!==this.getAttribute("basic-icon")?this.basicIcon=this.getAttribute("basic-icon"):this.basicIcon="https://blink.danbee.ai/asset/danbee-blink/images/default_icon.png",this.hasAttribute("keyboard-icon")&&null!==this.getAttribute("keyboard-icon")&&""!==this.getAttribute("keyboard-icon")?this.keyboardIcon=this.getAttribute("keyboard-icon"):this.keyboardIcon="https://blink.danbee.ai/asset/danbee-blink/images/active_icon.png",this.hasAttribute("listen-icon")&&null!==this.getAttribute("listen-icon")&&""!==this.getAttribute("listen-icon")?this.listenIcon=this.getAttribute("listen-icon"):this.listenIcon="https://blink.danbee.ai/asset/danbee-blink/images/stt_icon.png",this.hasAttribute("welcome-message")&&null!==this.getAttribute("welcome-message")&&""!==this.getAttribute("welcome-message")?this.welcomeMsg=this.getAttribute("welcome-message"):this.welcomeMsg="저를 클릭하고 원하는 정보를 말씀해보세요!",this.hasAttribute("ok-message")&&null!==this.getAttribute("ok-message")&&""!==this.getAttribute("ok-message")?this.successMsg=this.getAttribute("ok-message"):this.successMsg="워프 완료했어요! 오바",this.hasAttribute("fail-message")&&null!==this.getAttribute("fail-message")&&""!==this.getAttribute("fail-message")?this.failMsg=this.getAttribute("fail-message"):this.failMsg="아이프라임 불가! 새 창으로 열었어요. 오바",this.hasAttribute("search-message")&&null!==this.getAttribute("search-message")&&""!==this.getAttribute("search-message")?this.searchMsg=this.getAttribute("search-message"):this.searchMsg="목적지를 찾는 중이에요. 오바",this.hasAttribute("error-message")&&null!==this.getAttribute("error-message")&&""!==this.getAttribute("error-message")?this.errorMsg=this.getAttribute("error-message"):this.errorMsg="목적지를 찾지 못했어요.. 오바",this.hasAttribute("dontmove-message")&&null!==this.getAttribute("welcome-message")&&""!==this.getAttribute("welcome-message")?this.dontMoveMsg=this.getAttribute("dontmove-message"):this.dontMoveMsg="이미 도착한 목적지예요. 오바",this._changeBlinkMode({mode:"",balloonMsg:this.welcomeMsg})}catch(t){console.error(t)}this._initSpeechRecognition()}render(){const t="keyboard";return T`
      <div style="">
        <div class="wrap">
          <div class="container">
            <div class="chatbot-wrap ${this.isActive?"action":null} ${this.blinkMode}">
              <div class="chatbot-inner">
                ${"txt"===this.blinkMode?T`
                    <div class="action-wrap">
                      <p>${this.balloonMsg}</p>
                    </div>
                  `:null}
                ${"stt"===this.blinkMode?T`
                    <div class="action-wrap">
                      <p>듣는 중...</p>
                      <img src="${"https://blink.danbee.ai/asset/danbee-blink/images/keyboard.png"}" @click="${()=>this._changeBlinkMode({mode:t,balloonMsg:""})}" title="입력모드로 전환"/>
                    </div>
                  `:null}
                ${this.blinkMode===t?T`
                    <div class="action-wrap">
                      <input type="text" placeholder="여기에 입력 하세요!" @input="${this._onChangeInput}"/>
                      <img src="${"https://blink.danbee.ai/asset/danbee-blink/images/send.png"}" @click="${this._sendMessage}" title="보내기"/>
                      ${this.sttEnabled?T`<img src="${"https://blink.danbee.ai/asset/danbee-blink/images/mic.png"}" @click="${()=>this._changeBlinkMode({mode:"stt",balloonMsg:""})}" title="음성모드로 전환"/>`:""}
                    </div>
                  `:null}
                <div class="btn" @click="${this._toggleActive}">
                  <img src="${this.isActive?"stt"===this.blinkMode?this.listenIcon:this.keyboardIcon:this.basicIcon}" />
                </div>
                <!--                            <div class="btn"><img src="assets/images/profile-keyboard.png" /></div>-->
              </div>
              ${this.blinkMode===t&&this.userInput?T`
                  <div class="search-list"">
                  <ul>
                    ${this.searchResults.length>0?ut(this.searchResults,(t=>t.keyword),(t=>T`
                      <li @click="${()=>this._gogo(t.keyword)}" style="cursor:pointer;">${this._getKeywordTemplate(t.keyword)}</li>
                    `)):T`<li>조회된 결과가 없습니다.</li>`}
                  </ul>
                  </div>
                `:""}
            </div>
          </div>
        </div>
        ${this.iframeUrl?T`        <iframe id="background-iframe" src="${this.iframeUrl}" @load="${this._onload}" style="width:100%;height:100%; background:#fff; position:fixed; top:-9999px; left: 0;" />
        `:""}
      </div>

      </div>
    `}_playIntro(){gt=setInterval((()=>{vt<this.data.length-1?vt++:vt=0,this.blinkMode="txt",this.balloonMsg=T`'<span>${this.data[vt].keyword}</span>'<br/>(이)라고 말해봐요.`}),3e3)}_toggleActive(){this.isActive=!this.isActive,this.isActive?(this._clearAllTimer(),this.sttEnabled?this._changeBlinkMode({mode:"stt",balloonMsg:""}):this._changeBlinkMode({mode:"keyboard",balloonMsg:""})):this._changeBlinkMode({mode:"",balloonMsg:this.welcomeMsg})}_changeBlinkMode({mode:t,balloonMsg:i}){this.blinkMode=t,this.userInput="","stt"===this.blinkMode?this._startSpeeechRecognition():"keyboard"===this.blinkMode?this._stopSpeechRecognition():""===this.blinkMode&&(this.isActive=!1,this._stopSpeechRecognition(),ft=setTimeout((()=>{this.blinkMode="txt",this.balloonMsg=i||this.welcomeMsg,ft=setTimeout((()=>{this._playIntro()}),3e3)}),500))}_clearAllTimer(){ft&&clearTimeout(ft),gt&&clearInterval(gt)}_pleaseWait(){this.isActive=!1,this.blinkMode="",ft=setTimeout((()=>{this.blinkMode="txt",this.balloonMsg=this.searchMsg}),100)}_startSpeeechRecognition(){try{bt.start()}catch(t){}}_stopSpeechRecognition(){try{bt.abort()}catch(t){}}_initSpeechRecognition(){console.log("init SpeechRecognition!");try{window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,(bt=new window.SpeechRecognition).interimResults=!1,bt.lang="ko-KR",bt.continuous=!1,bt.maxAlternatives=1e4}catch(t){console.log(t),this.sttEnabled=!1}bt.onstart=function(){},bt.onend=()=>{console.log("onend");const t=this.speechText;this.speechText="",t&&this._gogo(t)},bt.onspeechstart=()=>{},bt.onspeechend=()=>{this._pleaseWait()},bt.onresult=t=>{this.speechText=Array.from(t.results).map((t=>t[0].transcript)).join("")}}_onChangeInput(){this.userInput=this._input.value,this.userInput?this.searchResults=this.data.filter((t=>t.keyword.indexOf(this.userInput)>-1)):this.searchResults=[]}_getKeywordTemplate(t){return T`${t.split(this.userInput)[0]}<span>${this.userInput}</span>${t.split(this.userInput)[1]}`}_sendMessage(){this.searchResults.length>0&&this._gogo(this.searchResults[0].keyword)}_gogo(t){if(t){if("iframe"===this.lastWarfState&&this.currentKeyword===t)return void this._changeBlinkMode({mode:"",balloonMsg:this.dontMoveMsg});this._pleaseWait(),t=t.replace(/(\s*)/g,"").replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,""),this.currentKeyword=t,this.iframeUrl="";const i=this.data.filter((i=>i.keyword.indexOf(t)>-1));i.length>0?this.iframeUrl=i[0].url:t&&this._changeBlinkMode({mode:"",balloonMsg:this.errorMsg})}else this._changeBlinkMode({mode:"",balloonMsg:this.errorMsg})}_onload(){console.log("iframe on load!"),this.shadowRoot.getElementById("background-iframe").style.top="-9999px",setTimeout((()=>{this.getFrameContentWindow()}),500)}getFrameContentWindow(){try{let t=this.shadowRoot.getElementById("background-iframe");t.contentWindow.length>0?(t.style.top="0px",this._changeBlinkMode({mode:"",balloonMsg:this.successMsg}),this.lastWarfState="iframe"):setTimeout((()=>{const t=window.open(this.iframeUrl.toString(),"_blank","fullscreen");null==t||null==t?(alert("브라우저의 팝업차단을 허용하시거나, 지원하지 않는 브라우저입니다."),this._changeBlinkMode({mode:"",balloonMsg:"브라우저의 팝업차단을 허용하시거나, 지원하지 않는 브라우저입니다."})):this._changeBlinkMode({mode:"",balloonMsg:this.failMsg}),this.lastWarfState="newtab"}))}catch(t){console.log(t),setTimeout((()=>{const t=window.open(this.iframeUrl.toString(),"_blank","fullscreen");null==t||null==t?(alert("브라우저의 팝업차단을 허용하시거나, 지원하지 않는 브라우저입니다."),this._changeBlinkMode({mode:"",balloonMsg:"브라우저의 팝업차단을 허용하시거나, 지원하지 않는 브라우저입니다."})):this._changeBlinkMode({mode:"",balloonMsg:this.failMsg}),this.lastWarfState="newtab"}))}}};wt.styles=((t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new o(s,t,e)})`
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
      font-family: 'Maplestory', 'Short Stack', Noto Sans KR, Roboto, sans-serif;
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

    @-webkit-keyframes astronaut {
      0% {
        -webkit-transform: translate3d(0,0,0) rotate(0);
      }

      25% {
        -webkit-transform: translate3d(5%,5%,0) rotate(8deg);
      }

      50% {
        -webkit-transform: translate3d(0,0,0) rotate(0);
      }

      75% {
        -webkit-transform: translate3d(5%,5%,0) rotate(5deg);
      }

      100% {
        -webkit-transform: translate3d(0,0,0) rotate(0);
      }
    }

    @keyframes astronaut {
      0% {
        transform: translate3d(0,0,0) rotate(0);
      }

      25% {
        transform: translate3d(5%,5%,0) rotate(8deg);
      }

      50% {
        transform: translate3d(0,0,0) rotate(0);
      }

      75% {
        transform: translate3d(5%,5%,0) rotate(5deg);
      }

      100% {
        transform: translate3d(0,0,0) rotate(0);
      }
    }

    .wrap {
      /*width: 100%;
      height: 100%;
      color: #fff;*/
    }
    .container {
      /*position: relative;*/
      /*max-width: 1440px;*/
      /*height: 100%;*/
      /*padding: 2.2% 2.2% 0;
      margin: auto;
      height:0;*/
    }
    h1 {
      font-family: 'Short Stack', Noto Sans KR, Roboto, sans-serif;
      font-size: 2.2rem;
    }
    h1 span {
      display: block;
      font-size: 2rem;
    }

    .contents {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      width: 100%;
      max-height: 674px;
      height: calc(100% - 260px);
      font-size: 5em;
      line-height: 5.6rem;
      text-align: center;
    }

    .contents .img {
      max-width: 409px;
      max-height: 474px;
      width: auto;
      height: calc(100% - 200px);
      margin: auto;
      -webkit-animation: astronaut 6s ease-out infinite;
      animation: astronaut 6s ease-out infinite;
    }

    .contents .img img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .chatbot-wrap {
      position: absolute;
      right: 2.2%;
      bottom: 4%;
      z-index: 1;
      color: #fff;
    }
    .chatbot-wrap .chatbot-inner {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 120px;
      font-size: 2rem;
      line-height: 2.2rem;
      border-radius: 60px;
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
      font-family: Noto Sans KR, Roboto, sans-serif;
      margin-right: 16px;
    }

    .chatbot-wrap .action-wrap img {
      cursor: pointer;
      margin: 0 16px 0 14px;
      object-fit: contain;
    }

    .chatbot-wrap.action .chatbot-inner {
      box-shadow: 0px 0px 4px 7px rgba(255, 255, 255, 0.5);
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

    .footer {
      font-family: 'Short Stack', Noto Sans KR, Roboto, sans-serif;
      position: absolute;
      bottom: 5.6%;
      font-size: 16px;
      line-height: 20px;
    }

    @media (max-width: 1024px) {
      h1 {
        font-size: 1.8rem;
      }
      h1 span {
        font-size: 1.4rem;
      }

      .contents {
        font-size: 4.6rem;
        line-height: 5rem;
      }

      .chatbot-wrap .chatbot-inner {
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
      h1 {
        font-size: 1.6rem;
      }
      h1 span {
        font-size: 1.2rem;
      }

      .contents {
        font-size: 3.6rem;
        line-height: 4rem;
      }

      .chatbot-wrap .chatbot-inner {
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

      .footer {
        display: none;
      }
    }

    @media (max-width: 425px) {
      h1 {
        font-size: 1.4rem;
      }
      h1 span {
        font-size: 1rem;
      }

      .contents {
        font-size: 2.6rem;
        line-height: 3rem;
      }

      .chatbot-wrap .chatbot-inner {
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
  `,mt([st()],wt.prototype,"basicIcon",void 0),mt([st()],wt.prototype,"listenIcon",void 0),mt([st()],wt.prototype,"keyboardIcon",void 0),mt([st({type:Array})],wt.prototype,"data",void 0),mt([st({})],wt.prototype,"searchResults",void 0),mt([st()],wt.prototype,"isActive",void 0),mt([st()],wt.prototype,"blinkMode",void 0),mt([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,i){return(({finisher:t,descriptor:i})=>(e,s)=>{var o;if(void 0===s){const s=null!==(o=e.originalKey)&&void 0!==o?o:e.key,n=null!=i?{kind:"method",placement:"prototype",key:s,descriptor:i(e.key)}:{...e,key:s};return null!=t&&(n.finisher=function(i){t(i,s)}),n}{const o=e.constructor;void 0!==i&&Object.defineProperty(e,s,i(s)),null==t||t(o,s)}})({descriptor:e=>{const s={get(){var i,e;return null!==(e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==e?e:null},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;s.get=function(){var e,s;return void 0===this[i]&&(this[i]=null!==(s=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==s?s:null),this[i]}}return s}})}("input",!1)],wt.prototype,"_input",void 0),mt([st()],wt.prototype,"iframeUrl",void 0),mt([st()],wt.prototype,"balloonMsg",void 0),mt([st()],wt.prototype,"welcomeMsg",void 0),mt([st()],wt.prototype,"successMsg",void 0),mt([st()],wt.prototype,"failMsg",void 0),mt([st()],wt.prototype,"searchMsg",void 0),mt([st()],wt.prototype,"errorMsg",void 0),mt([st()],wt.prototype,"dontMoveMsg",void 0),mt([st()],wt.prototype,"userInput",void 0),mt([st()],wt.prototype,"speechText",void 0),mt([st()],wt.prototype,"currentKeyword",void 0),mt([st()],wt.prototype,"lastWarfState",void 0),mt([st()],wt.prototype,"sttEnabled",void 0),wt=mt([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){customElements.define(t,i)}}})(t,i))("danbee-blink")],wt);export{wt as DanbeeBlink};
