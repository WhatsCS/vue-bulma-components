!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("vue-bulma-components",[],n):"object"==typeof exports?exports["vue-bulma-components"]=n():e["vue-bulma-components"]=n()}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=1)}([function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function o(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function a(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/([a-z])([0-9])/g,"$1-$2")}t.d(n,"b",function(){return l});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=new Map([["input","input"],["label","label"],["button","button"],["image","figure"],["form","form"]]),l=function(e){return{name:e,functional:!0,render:function(n,t){var l=t.children,c=t.props,b=t.data,f=c.outerElement,s=o(c,["outerElement"]);return n(f||u.get(e)||"div",i({class:[a(e)].concat(r(Object.keys(s).filter(function(e){return!1!==s[e]}).map(function(e){return a(e)}).filter(function(e){return"is-"===e.substring(0,3)||"has-"===e.substring(0,4)})))},b),l)}}};n.a=["columns","column","notification","button","box","icon","media","media-left","media-right","media-content","image","content","level","level-left","level-item","level-right","field","help","progress","table","tag","title","subtitle","breadcrumb","card","card-image","card-content","card-footer","card-footer-item","control","label","menu","menu-label","menu-list","message","message-header","message-body","modal","modal-background","modal-content","modal-close","navbar","navbar-item","navbar-brand","navbar-burger","navbar-start","navbar-link","navbar-dropdown","navbar-divider","pagination","pagination-previous","pagination-next","pagination-list","pagination-ellipsis","panel","panel-heading","panel-block","panel-icon","panel-tabs","tabs","container","hero","hero-body","input"]},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"bulmaComponentGenerator",function(){return i});var r=t(0),o={},a=new Map([["input","b-input"],["label","b-label"],["image","b-image"],["form","b-form"],["button","b-button"],["content","b-content"],["progress","b-progress"],["table","b-table"],["title","b-title"],["menu","b-menu"]]);o.install=function(e,n){r.a.forEach(function(o){e.component(""+(n&&n.prefix||"")+(a.get(o)||o),t.i(r.b)(o))})},n.default=o;var i=r.b}])});
//# sourceMappingURL=vue-bulma-components.js.map