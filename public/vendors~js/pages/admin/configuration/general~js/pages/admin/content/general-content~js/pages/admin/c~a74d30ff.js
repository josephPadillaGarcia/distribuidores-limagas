(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return r}))},162:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},163:function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=a.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,u=0,d=[],f=n(199);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function m(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,n);n.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=u++;n=l||(l=y(t)),r=w.bind(null,n,s,!1),o=w.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),r=C.bind(null,n,t),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=k.bind(null,n),o=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&p(h(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var A,S=(A=[],function(e,t){return A[e]=t,A.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=S(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function k(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function C(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},170:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return p}));var a={backgroundColor:"#eeeeee",backgroundImage:"linear-gradient(\n    90deg,\n    ".concat("#eeeeee",",\n    ").concat("#f5f5f5",",\n    ").concat("#eeeeee","\n  )")};function c(e,t,n,r,o,i,s,a,c,l){"boolean"!=typeof s&&(c=a,a=s,s=!1);const u="function"==typeof n?n.options:n;let d;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):t&&(d=s?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(u.functional){const e=u.render;u.render=function(t,n){return d.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,d):[d]}return n}c({},void 0,{name:"PuSkeletonTheme",provide:function(){return{_themeStyle:this.themeStyle,_skeletonTheme:this}},props:{color:{type:String,default:"#eeeeee"},highlight:{type:String,default:"#f5f5f5"},duration:{type:Number,default:1.5},tag:{type:String,default:"div"},loading:{type:Boolean,default:void 0}},data:function(){return{themeStyle:i({},a)}},render:function(e){var t=this.color,n=this.highlight,r=this.duration;return this.themeStyle.backgroundColor=t,this.themeStyle.backgroundImage="linear-gradient(\n      90deg,\n      ".concat(t,",\n      ").concat(n,",\n      ").concat(t,"\n    )"),r?this.themeStyle.animation="SkeletonLoading ".concat(r,"s ease-in-out infinite"):(this.themeStyle.animation="",this.themeStyle.backgroundImage=""),this.tag?e(this.tag,this.$slots.default):this.$slots.default[0]}},void 0,void 0,void 0,!1,void 0,void 0,void 0);var l={name:"PuSkeleton",inject:{themeStyle:{from:"_themeStyle",default:a},theme:{from:"_skeletonTheme",default:{}}},props:{prefix:{type:String,default:"pu"},count:{type:Number,default:1},duration:{type:Number,default:1.5},tag:{type:String,default:"span"},width:[String,Number],height:[String,Number],circle:Boolean,loading:void 0},computed:{isLoading:function(){return void 0!==this.theme.loading?this.theme.loading:this.loading}},render:function(e){var t=this.width,n=this.height,r=this.duration,o=this.prefix,a=this.circle,c=this.count,l=this.tag,u=this.isLoading,d=["".concat(o,"-skeleton")],f=[],p=i({},this.themeStyle);r?p.animation="SkeletonLoading ".concat(r,"s ease-in-out infinite"):p.backgroundImage="",t&&(p.width=t),n&&(p.height=n),a&&(p.borderRadius="50%");for(var h=0;h<c;h+=1)f.push(e("span",{key:h,class:d,style:p},["‌"]));var m=void 0!==u?u:function(e){if(!e)return!0;var t=s(e,1)[0],n=t.text;return n&&(n=n.replace(/(\n|\r\n|\s)/g,"")),void 0===t.tag&&!n}(this.$slots.default);return l?e(l,m?f:this.$slots.default):m?e("span",[f]):this.$slots.default}};const u="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());let d;const f={};const p=c({},(function(e){e&&e("data-v-64c55a9f_0",{source:"\n.pu-skeleton {\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  display: inline-block;\n  line-height: 1;\n  width: 100%;\n  height: inherit;\n}\n@keyframes SkeletonLoading {\n0% {\n    background-position: -200px 0;\n}\n100% {\n    background-position: calc(200px + 100%) 0;\n}\n}\n",map:{version:3,sources:["/Users/kit/Projects/resources/vue-loading-skeleton/src/skeleton.vue"],names:[],mappings:";AA6FA;EACA,2BAAA;EACA,4BAAA;EACA,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;AACA;AAEA;AACA;IACA,6BAAA;AACA;AACA;IACA,yCAAA;AACA;AACA",file:"skeleton.vue",sourcesContent:["<script lang=\"jsx\">\nimport { SkeletonStyle } from './skeleton-theme.vue';\n\nconst isEmptyVNode = (children) => {\n  if (!children) return true;\n\n  const [firstNode] = children;\n  let str = firstNode.text;\n  if (str) {\n    // remove all line-break and space character\n    str = str.replace(/(\\n|\\r\\n|\\s)/g, '');\n  }\n\n  return typeof firstNode.tag === 'undefined' && !str;\n};\n\nexport default {\n  name: 'PuSkeleton',\n  inject: {\n    themeStyle: {\n      from: '_themeStyle',\n      default: SkeletonStyle\n    },\n    theme: {\n      from: '_skeletonTheme',\n      default: ({})\n    }\n  },\n  props: {\n    prefix: {\n      type: String,\n      default: 'pu'\n    },\n    count: {\n      type: Number,\n      default: 1\n    },\n    duration: {\n      type: Number,\n      default: 1.5\n    },\n    tag: {\n      type: String,\n      default: 'span'\n    },\n    width: [String, Number],\n    height: [String, Number],\n    circle: Boolean,\n    loading: undefined\n  },\n  computed: {\n    isLoading() {\n      return typeof this.theme.loading !== 'undefined' ? this.theme.loading : this.loading;\n    }\n  },\n  render(h) {\n    const {\n      width, height, duration, prefix, circle, count, tag, isLoading\n    } = this;\n    const classes = [`${prefix}-skeleton`];\n    const elements = [];\n    const styles = { ...this.themeStyle };\n\n    if (duration) {\n      styles.animation = `SkeletonLoading ${duration}s ease-in-out infinite`;\n    } else {\n      styles.backgroundImage = '';\n    }\n    if (width) styles.width = width;\n    if (height) styles.height = height;\n    if (circle) styles.borderRadius = '50%';\n\n    for (let i = 0; i < count; i += 1) {\n      elements.push(\n        <span\n          key={i}\n          class={classes}\n          style={styles}>\n          &zwnj;\n        </span>\n      );\n    }\n\n    const showLoading = typeof isLoading !== 'undefined' ? isLoading : isEmptyVNode(this.$slots.default);\n    if (tag) {\n      return h(tag, !showLoading ? this.$slots.default : elements);\n    }\n    return (!showLoading ? this.$slots.default : <span>{ elements }</span>);\n  }\n};\n<\/script>\n\n<style>\n.pu-skeleton {\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  display: inline-block;\n  line-height: 1;\n  width: 100%;\n  height: inherit;\n}\n\n@keyframes SkeletonLoading {\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n}\n</style>\n"]},media:void 0})}),l,void 0,void 0,void 0,!1,(function(e){return(e,t)=>function(e,t){const n=u?t.media||"default":e,r=f[n]||(f[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===d&&(d=document.head||document.getElementsByTagName("head")[0]),d.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,t=document.createTextNode(n),o=r.element.childNodes;o[e]&&r.element.removeChild(o[e]),o.length?r.element.insertBefore(t,o[e]):r.element.appendChild(t)}}}(e,t)}),void 0,void 0)},199:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}}]);