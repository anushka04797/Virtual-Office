(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[36],{564:function(e,t,n){"use strict";var r=n(509),a=n(18),o=n(7),i=n(0),c=n(25),l=n(482),u=n(50),d=n(480),s=n(39),f=n(52),b=n(36),p=n(48),m=n(309),v=n(483);function h(e){return Object(m.a)("MuiLinearProgress",e)}Object(v.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g,y,O,x,j,w,E,A,I,P,C,S,k=n(4),D=["className","color","value","valueBuffer","variant"],M=Object(u.e)(E||(E=g||(g=Object(r.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),B=Object(u.e)(A||(A=y||(y=Object(r.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),N=Object(u.e)(I||(I=O||(O=Object(r.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),_=function(e,t){return"inherit"===t?"currentColor":"light"===e.palette.mode?Object(d.e)(e.palette[t].main,.62):Object(d.b)(e.palette[t].main,.5)},R=Object(b.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat(Object(s.a)(n.color))],t[n.variant]]}})((function(e){var t=e.ownerState,n=e.theme;return Object(o.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:_(n,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),Z=Object(b.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var n=e.ownerState;return[t.dashed,t["dashedColor".concat(Object(s.a)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme,r=_(n,t.color);return Object(o.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(u.c)(P||(P=x||(x=Object(r.a)(["\n    animation: "," 3s infinite linear;\n  "]))),N)),H=Object(b.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(s.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar1Indeterminate,"determinate"===n.variant&&t.bar1Determinate,"buffer"===n.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":n.palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(u.c)(C||(C=j||(j=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),M)})),L=Object(b.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(s.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar2Indeterminate,"buffer"===n.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":n.palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:_(n,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(u.c)(S||(S=w||(w=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),B)})),T=i.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiLinearProgress"}),r=n.className,i=n.color,u=void 0===i?"primary":i,d=n.value,b=n.valueBuffer,m=n.variant,v=void 0===m?"indeterminate":m,g=Object(a.a)(n,D),y=Object(o.a)({},n,{color:u,variant:v}),O=function(e){var t=e.classes,n=e.variant,r=e.color,a={root:["root","color".concat(Object(s.a)(r)),n],dashed:["dashed","dashedColor".concat(Object(s.a)(r))],bar1:["bar","barColor".concat(Object(s.a)(r)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat(Object(s.a)(r)),"buffer"===n&&"color".concat(Object(s.a)(r)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return Object(l.a)(a,h,t)}(y),x=Object(f.a)(),j={},w={bar1:{},bar2:{}};if("determinate"===v||"buffer"===v)if(void 0!==d){j["aria-valuenow"]=Math.round(d),j["aria-valuemin"]=0,j["aria-valuemax"]=100;var E=d-100;"rtl"===x.direction&&(E=-E),w.bar1.transform="translateX(".concat(E,"%)")}else 0;if("buffer"===v)if(void 0!==b){var A=(b||0)-100;"rtl"===x.direction&&(A=-A),w.bar2.transform="translateX(".concat(A,"%)")}else 0;return Object(k.jsxs)(R,Object(o.a)({className:Object(c.default)(O.root,r),ownerState:y,role:"progressbar"},j,{ref:t},g,{children:["buffer"===v?Object(k.jsx)(Z,{className:O.dashed,ownerState:y}):null,Object(k.jsx)(H,{className:O.bar1,ownerState:y,style:w.bar1}),"determinate"===v?null:Object(k.jsx)(L,{className:O.bar2,ownerState:y,style:w.bar2})]}))}));t.a=T},585:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return R})),n.d(t,"c",(function(){return W})),n.d(t,"d",(function(){return G})),n.d(t,"e",(function(){return Q}));var r=n(0);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?m(e):t}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v(this,n)}}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||O(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||O(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=function e(t){var n=this,r=t.expanded,o=void 0===r?[]:r,i=t.allowMultipleExpanded,l=void 0!==i&&i,u=t.allowZeroExpanded,s=void 0!==u&&u;a(this,e),c(this,"expanded",void 0),c(this,"allowMultipleExpanded",void 0),c(this,"allowZeroExpanded",void 0),c(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(y(n.expanded),[e]):[e]})})),c(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),c(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),c(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),c(this,"getHeadingAttributes",(function(){return{role:"heading"}})),c(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),a=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":a,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),c(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),c(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),c(this,"augment",(function(t){return new e(d({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=o,this.allowMultipleExpanded=l,this.allowZeroExpanded=s},w=Object(r.createContext)(null),E=function(e){s(n,e);var t=h(n);function n(){var e;a(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return c(m(e=t.call.apply(t,[this].concat(o))),"state",new j({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),c(m(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),c(m(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),c(m(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),c(m(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),c(m(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),c(m(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return i(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(r.createElement)(w.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(r.PureComponent);c(E,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var A,I=function(e){s(n,e);var t=h(n);function n(){var e;a(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return c(m(e=t.call.apply(t,[this].concat(o))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return i(n,[{key:"render",value:function(){return Object(r.createElement)(w.Consumer,null,this.renderChildren)}}]),n}(r.PureComponent),P=function(e){var t=e.className,n=void 0===t?"accordion":t,a=e.allowMultipleExpanded,o=e.allowZeroExpanded,i=e.onChange,c=e.preExpanded,u=p(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(r.createElement)(E,{preExpanded:c,allowMultipleExpanded:a,allowZeroExpanded:o,onChange:i},Object(r.createElement)("div",l({"data-accordion-component":"Accordion",className:n},u)))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(A||(A={}));var C=A,S=0;var k=/[\u0009\u000a\u000c\u000d\u0020]/g;function D(e){return""!==e&&!k.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var M=Object(r.createContext)(null),B=function(e){var t=e.children,n=e.uuid,a=e.accordionContext,o=e.dangerouslySetExpanded,i=function(){a.toggleExpanded(n)},c=function(e){var a=null!==o&&void 0!==o?o:e.isItemExpanded(n),c=e.isItemDisabled(n),l=e.getPanelAttributes(n,o),u=e.getHeadingAttributes(n),d=e.getButtonAttributes(n,o);return Object(r.createElement)(M.Provider,{value:{uuid:n,expanded:a,disabled:c,toggleExpanded:i,panelAttributes:l,headingAttributes:u,buttonAttributes:d}},t)};return Object(r.createElement)(I,null,c)},N=function(e){return Object(r.createElement)(I,null,(function(t){return Object(r.createElement)(B,l({},e,{accordionContext:t}))}))},_=function(e){var t=e.children,n=function(e){return e?t(e):null};return Object(r.createElement)(M.Consumer,null,n)},R=function(e){var t=e.uuid,n=e.dangerouslySetExpanded,a=e.className,o=void 0===a?"accordion__item":a,i=e.activeClassName,c=p(e,["uuid","dangerouslySetExpanded","className","activeClassName"]),u=g(Object(r.useState)(function(){var e=S;return S+=1,"raa-".concat(e)}()),1)[0],d=null!==t&&void 0!==t?t:u,s=function(e){var t=e.expanded&&i?i:o;return Object(r.createElement)("div",l({"data-accordion-component":"AccordionItem",className:t},c))};return D(d.toString()),c.id&&D(c.id),Object(r.createElement)(N,{uuid:d,dangerouslySetExpanded:n},Object(r.createElement)(_,null,s))};function Z(e){return e&&(e.matches('[data-accordion-component="Accordion"]')?e:Z(e.parentElement))}function H(e){var t=Z(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}R.displayName=C.AccordionItem;var L="End",T="Enter",q="Home",z=" ",U="Spacebar",V="ArrowUp",J="ArrowDown",X="ArrowLeft",F="ArrowRight",K=function(e){var t=e.toggleExpanded,n=e.className,a=void 0===n?"accordion__button":n,o=p(e,["toggleExpanded","className"]);return o.id&&D(o.id),Object(r.createElement)("div",l({className:a},o,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n=e.key;if(n!==T&&n!==z&&n!==U||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(n){case q:e.preventDefault(),function(e){var t=(H(e)||[])[0];t&&t.focus()}(e.target);break;case L:e.preventDefault(),function(e){var t=H(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case X:case V:e.preventDefault(),function(e){var t=H(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case F:case J:e.preventDefault(),function(e){var t=H(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},W=function(e){return Object(r.createElement)(_,null,(function(t){var n=t.toggleExpanded,a=t.buttonAttributes;return Object(r.createElement)(K,l({toggleExpanded:n},e,a))}))},$=function(e){s(n,e);var t=h(n);function n(){var e;a(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return c(m(e=t.call.apply(t,[this].concat(o))),"ref",void 0),c(m(e),"setRef",(function(t){e.ref=t})),e}return i(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(r.createElement)("div",l({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),n}(r.PureComponent);c($,"defaultProps",{className:"accordion__heading","aria-level":3});var G=function(e){return Object(r.createElement)(_,null,(function(t){var n=t.headingAttributes;return e.id&&D(e.id),Object(r.createElement)($,l({},e,n))}))};G.displayName=C.AccordionItemHeading;var Q=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,a=e.region,o=e.id,i=p(e,["className","region","id"]),c=function(e){var t=e.panelAttributes;o&&D(o);var c=d(d({},t),{},{"aria-labelledby":a?t["aria-labelledby"]:void 0});return Object(r.createElement)("div",l({"data-accordion-component":"AccordionItemPanel",className:n},i,c,{role:a?"region":void 0}))};return Object(r.createElement)(_,null,c)}},586:function(e,t,n){}}]);
//# sourceMappingURL=36.002c7e38.chunk.js.map