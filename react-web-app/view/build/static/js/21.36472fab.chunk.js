(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[21,34],{516:function(e,t){},542:function(e,t){},543:function(e,t){},558:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(33),a=n(13),o=n(0),i=n(563),c=n(1197),s=n(1207),l=n(3);function d(e){return Object(l.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(l.jsx)(s.a,{sx:{width:"100%",mr:1},children:Object(l.jsx)(i.a,Object(a.a)({variant:"determinate"},e))}),Object(l.jsx)(s.a,{sx:{minWidth:35},children:Object(l.jsx)(c.a,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}function u(e){var t=o.useState(e.progress),n=Object(r.a)(t,2),a=n[0];n[1];return o.useEffect((function(){}),[]),Object(l.jsx)(s.a,{sx:{width:"100%"},children:Object(l.jsx)(d,{value:a})})}},563:function(e,t,n){"use strict";var r=n(510),a=n(18),o=n(7),i=n(0),c=n(24),s=n(483),l=n(52),d=n(481),u=n(39),f=n(53),b=n(36),p=n(49),m=n(308),j=n(484);function h(e){return Object(m.a)("MuiLinearProgress",e)}Object(j.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g,v,O,x,y,w,E,N,A,k,I,_,S=n(3),P=["className","color","value","valueBuffer","variant"],C=Object(l.e)(E||(E=g||(g=Object(r.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),D=Object(l.e)(N||(N=v||(v=Object(r.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),M=Object(l.e)(A||(A=O||(O=Object(r.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),B=function(e,t){return"inherit"===t?"currentColor":"light"===e.palette.mode?Object(d.e)(e.palette[t].main,.62):Object(d.b)(e.palette[t].main,.5)},T=Object(b.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat(Object(u.a)(n.color))],t[n.variant]]}})((function(e){var t=e.ownerState,n=e.theme;return Object(o.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:B(n,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),R=Object(b.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var n=e.ownerState;return[t.dashed,t["dashedColor".concat(Object(u.a)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme,r=B(n,t.color);return Object(o.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(l.c)(k||(k=x||(x=Object(r.a)(["\n    animation: "," 3s infinite linear;\n  "]))),M)),H=Object(b.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(u.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar1Indeterminate,"determinate"===n.variant&&t.bar1Determinate,"buffer"===n.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":n.palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(l.c)(I||(I=y||(y=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),C)})),V=Object(b.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(u.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar2Indeterminate,"buffer"===n.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":n.palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:B(n,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(l.c)(_||(_=w||(w=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),D)})),Z=i.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiLinearProgress"}),r=n.className,i=n.color,l=void 0===i?"primary":i,d=n.value,b=n.valueBuffer,m=n.variant,j=void 0===m?"indeterminate":m,g=Object(a.a)(n,P),v=Object(o.a)({},n,{color:l,variant:j}),O=function(e){var t=e.classes,n=e.variant,r=e.color,a={root:["root","color".concat(Object(u.a)(r)),n],dashed:["dashed","dashedColor".concat(Object(u.a)(r))],bar1:["bar","barColor".concat(Object(u.a)(r)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat(Object(u.a)(r)),"buffer"===n&&"color".concat(Object(u.a)(r)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return Object(s.a)(a,h,t)}(v),x=Object(f.a)(),y={},w={bar1:{},bar2:{}};if("determinate"===j||"buffer"===j)if(void 0!==d){y["aria-valuenow"]=Math.round(d),y["aria-valuemin"]=0,y["aria-valuemax"]=100;var E=d-100;"rtl"===x.direction&&(E=-E),w.bar1.transform="translateX(".concat(E,"%)")}else 0;if("buffer"===j)if(void 0!==b){var N=(b||0)-100;"rtl"===x.direction&&(N=-N),w.bar2.transform="translateX(".concat(N,"%)")}else 0;return Object(S.jsxs)(T,Object(o.a)({className:Object(c.default)(O.root,r),ownerState:v,role:"progressbar"},y,{ref:t},g,{children:["buffer"===j?Object(S.jsx)(R,{className:O.dashed,ownerState:v}):null,Object(S.jsx)(H,{className:O.bar1,ownerState:v,style:w.bar1}),"determinate"===j?null:Object(S.jsx)(V,{className:O.bar2,ownerState:v,style:w.bar2})]}))}));t.a=Z},595:function(e,t,n){},600:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return X})),n.d(t,"d",(function(){return Y})),n.d(t,"e",(function(){return G}));var r=n(0);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?m(e):t}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||O(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||O(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function e(t){var n=this,r=t.expanded,o=void 0===r?[]:r,i=t.allowMultipleExpanded,s=void 0!==i&&i,l=t.allowZeroExpanded,u=void 0!==l&&l;a(this,e),c(this,"expanded",void 0),c(this,"allowMultipleExpanded",void 0),c(this,"allowZeroExpanded",void 0),c(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(v(n.expanded),[e]):[e]})})),c(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),c(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),c(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),c(this,"getHeadingAttributes",(function(){return{role:"heading"}})),c(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),a=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":a,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),c(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),c(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),c(this,"augment",(function(t){return new e(d({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=o,this.allowMultipleExpanded=s,this.allowZeroExpanded=u},w=Object(r.createContext)(null),E=function(e){u(n,e);var t=h(n);function n(){var e;a(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return c(m(e=t.call.apply(t,[this].concat(o))),"state",new y({expanded:e.props.preExpanded,allowMultipleExpanded:e.props.allowMultipleExpanded,allowZeroExpanded:e.props.allowZeroExpanded})),c(m(e),"toggleExpanded",(function(t){e.setState((function(e){return e.toggleExpanded(t)}),(function(){e.props.onChange&&e.props.onChange(e.state.expanded)}))})),c(m(e),"isItemDisabled",(function(t){return e.state.isItemDisabled(t)})),c(m(e),"isItemExpanded",(function(t){return e.state.isItemExpanded(t)})),c(m(e),"getPanelAttributes",(function(t,n){return e.state.getPanelAttributes(t,n)})),c(m(e),"getHeadingAttributes",(function(){return e.state.getHeadingAttributes()})),c(m(e),"getButtonAttributes",(function(t,n){return e.state.getButtonAttributes(t,n)})),e}return i(n,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(r.createElement)(w.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),n}(r.PureComponent);c(E,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var N,A=function(e){u(n,e);var t=h(n);function n(){var e;a(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return c(m(e=t.call.apply(t,[this].concat(o))),"renderChildren",(function(t){return t?e.props.children(t):null})),e}return i(n,[{key:"render",value:function(){return Object(r.createElement)(w.Consumer,null,this.renderChildren)}}]),n}(r.PureComponent),k=function(e){var t=e.className,n=void 0===t?"accordion":t,a=e.allowMultipleExpanded,o=e.allowZeroExpanded,i=e.onChange,c=e.preExpanded,l=p(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(r.createElement)(E,{preExpanded:c,allowMultipleExpanded:a,allowZeroExpanded:o,onChange:i},Object(r.createElement)("div",s({"data-accordion-component":"Accordion",className:n},l)))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(N||(N={}));var I=N,_=0;var S=/[\u0009\u000a\u000c\u000d\u0020]/g;function P(e){return""!==e&&!S.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var C=Object(r.createContext)(null),D=function(e){var t=e.children,n=e.uuid,a=e.accordionContext,o=e.dangerouslySetExpanded,i=function(){a.toggleExpanded(n)},c=function(e){var a=null!==o&&void 0!==o?o:e.isItemExpanded(n),c=e.isItemDisabled(n),s=e.getPanelAttributes(n,o),l=e.getHeadingAttributes(n),d=e.getButtonAttributes(n,o);return Object(r.createElement)(C.Provider,{value:{uuid:n,expanded:a,disabled:c,toggleExpanded:i,panelAttributes:s,headingAttributes:l,buttonAttributes:d}},t)};return Object(r.createElement)(A,null,c)},M=function(e){return Object(r.createElement)(A,null,(function(t){return Object(r.createElement)(D,s({},e,{accordionContext:t}))}))},B=function(e){var t=e.children,n=function(e){return e?t(e):null};return Object(r.createElement)(C.Consumer,null,n)},T=function(e){var t=e.uuid,n=e.dangerouslySetExpanded,a=e.className,o=void 0===a?"accordion__item":a,i=e.activeClassName,c=p(e,["uuid","dangerouslySetExpanded","className","activeClassName"]),l=g(Object(r.useState)(function(){var e=_;return _+=1,"raa-".concat(e)}()),1)[0],d=null!==t&&void 0!==t?t:l,u=function(e){var t=e.expanded&&i?i:o;return Object(r.createElement)("div",s({"data-accordion-component":"AccordionItem",className:t},c))};return P(d.toString()),c.id&&P(c.id),Object(r.createElement)(M,{uuid:d,dangerouslySetExpanded:n},Object(r.createElement)(B,null,u))};function R(e){return e&&(e.matches('[data-accordion-component="Accordion"]')?e:R(e.parentElement))}function H(e){var t=R(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}T.displayName=I.AccordionItem;var V="End",Z="Enter",L="Home",F=" ",W="Spacebar",q="ArrowUp",z="ArrowDown",U="ArrowLeft",J="ArrowRight",$=function(e){var t=e.toggleExpanded,n=e.className,a=void 0===n?"accordion__button":n,o=p(e,["toggleExpanded","className"]);return o.id&&P(o.id),Object(r.createElement)("div",s({className:a},o,{role:"button",tabIndex:0,onClick:t,onKeyDown:function(e){var n=e.key;if(n!==Z&&n!==F&&n!==W||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(n){case L:e.preventDefault(),function(e){var t=(H(e)||[])[0];t&&t.focus()}(e.target);break;case V:e.preventDefault(),function(e){var t=H(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case U:case q:e.preventDefault(),function(e){var t=H(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case J:case z:e.preventDefault(),function(e){var t=H(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},X=function(e){return Object(r.createElement)(B,null,(function(t){var n=t.toggleExpanded,a=t.buttonAttributes;return Object(r.createElement)($,s({toggleExpanded:n},e,a))}))},K=function(e){u(n,e);var t=h(n);function n(){var e;a(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return c(m(e=t.call.apply(t,[this].concat(o))),"ref",void 0),c(m(e),"setRef",(function(t){e.ref=t})),e}return i(n,[{key:"componentDidUpdate",value:function(){n.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){n.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(r.createElement)("div",s({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),n}(r.PureComponent);c(K,"defaultProps",{className:"accordion__heading","aria-level":3});var Y=function(e){return Object(r.createElement)(B,null,(function(t){var n=t.headingAttributes;return e.id&&P(e.id),Object(r.createElement)(K,s({},e,n))}))};Y.displayName=I.AccordionItemHeading;var G=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,a=e.region,o=e.id,i=p(e,["className","region","id"]),c=function(e){var t=e.panelAttributes;o&&P(o);var c=d(d({},t),{},{"aria-labelledby":a?t["aria-labelledby"]:void 0});return Object(r.createElement)("div",s({"data-accordion-component":"AccordionItemPanel",className:n},i,c,{role:a?"region":void 0}))};return Object(r.createElement)(B,null,c)}},601:function(e,t,n){},630:function(e,t,n){"use strict";var r=n(552),a=n(617),o=n(581),i=n(651),c=n(0),s=n.n(c),l=n(4),d=n(555),u=n(556),f=n(557),b=n(311),p=n(1194),m=(n(547),n(580),n(502),n(26),Array.isArray),j=Object.keys,h=Object.prototype.hasOwnProperty;function g(e,t){if(e===t)return!0;if(e&&t&&"object"==Object(i.a)(e)&&"object"==Object(i.a)(t)){var n,r,a,o=m(e),c=m(t);if(o&&c){if((r=e.length)!=t.length)return!1;for(n=r;0!==n--;)if(!g(e[n],t[n]))return!1;return!0}if(o!=c)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var d=e instanceof RegExp,u=t instanceof RegExp;if(d!=u)return!1;if(d&&u)return e.toString()==t.toString();var f=j(e);if((r=f.length)!==j(t).length)return!1;for(n=r;0!==n--;)if(!h.call(t,f[n]))return!1;for(n=r;0!==n--;)if(("_owner"!==(a=f[n])||!e.$$typeof)&&!g(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var v=function(e){return function(t){t.in,t.onExited,t.appear,t.enter,t.exit;var n=Object(a.a)(t,["in","onExited","appear","enter","exit"]);return s.a.createElement(e,n)}},O=function(e){var t=e.component,n=e.duration,o=void 0===n?1:n,i=e.in;e.onExited;var c=Object(a.a)(e,["component","duration","in","onExited"]),d={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(o,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.a.createElement(b.a,{mountOnEnter:!0,unmountOnExit:!0,in:i,timeout:o},(function(e){var n={style:Object(r.j)({},d[e])};return s.a.createElement(t,Object(l.a)({innerProps:n},c))}))},x=function(e){Object(f.a)(n,e);var t=Object(r.i)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).duration=260,e.rafID=void 0,e.state={width:"auto"},e.transition={exiting:{width:0,transition:"width ".concat(e.duration,"ms ease-out")},exited:{width:0}},e.getWidth=function(t){t&&isNaN(e.state.width)&&(e.rafID=window.requestAnimationFrame((function(){var n=t.getBoundingClientRect().width;e.setState({width:n})})))},e.getStyle=function(e){return{overflow:"hidden",whiteSpace:"nowrap",width:e}},e.getTransition=function(t){return e.transition[t]},e}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){this.rafID&&window.cancelAnimationFrame(this.rafID)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.in,o=this.state.width;return s.a.createElement(b.a,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:a,timeout:this.duration},(function(t){var a=Object(r.j)(Object(r.j)({},e.getStyle(o)),e.getTransition(t));return s.a.createElement("div",{ref:e.getWidth,style:a},n)}))}}]),n}(c.Component),y=function(e){return function(t){var n=t.in,r=t.onExited,o=Object(a.a)(t,["in","onExited"]);return s.a.createElement(x,{in:n,onExited:r},s.a.createElement(e,Object(l.a)({cropWithEllipsis:n},o)))}},w=function(e){return function(t){return s.a.createElement(O,Object(l.a)({component:e,duration:t.isMulti?260:1},t))}},E=function(e){return function(t){return s.a.createElement(O,Object(l.a)({component:e},t))}},N=function(e){return function(t){return s.a.createElement(p.a,Object(l.a)({component:e},t))}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.c)({components:e}),n=t.Input,o=t.MultiValue,i=t.Placeholder,c=t.SingleValue,s=t.ValueContainer,l=Object(a.a)(t,["Input","MultiValue","Placeholder","SingleValue","ValueContainer"]);return Object(r.j)({Input:v(n),MultiValue:y(o),Placeholder:w(i),SingleValue:E(c),ValueContainer:N(s)},l)},k=A(),I=(k.Input,k.MultiValue,k.Placeholder,k.SingleValue,k.ValueContainer,Object(o.a)(A,(function(e,t){try{return g(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i))return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}})));t.a=I},696:function(e,t,n){"use strict";n.r(t),n.d(t,"can_create_wbs",(function(){return w}));n(13);var r=n(33),a=n(0),o=(n(595),n(498)),i=n(550),c=n.n(i),s=n(831),l=n(630),d=n(504),u=n(11),f=n(96),b=n(8),p=n(514),m=n.n(p),j=n(99),h=n(515),g=n(537),v=n(538),O=n(600),x=(n(601),n(558)),y=n(3),w=function(e){var t=!1;return e.forEach((function(e,n){e.assignee.id==sessionStorage.getItem(b.j)&&(t=!0)})),t};t.default=function(){var e=Object(u.g)(),t=Object(f.b)(),n=Object(a.useState)(1),i=Object(r.a)(n,2),p=(i[0],i[1],Object(a.useState)(0)),E=Object(r.a)(p,2),N=(E[0],E[1],Object(a.useState)(!1)),A=Object(r.a)(N,2),k=(A[0],A[1],Object(f.c)((function(e){var t=[];return e.projects.data.forEach((function(e,n){0==e.project.status&&t.push(e)})),console.log("temp",t),t}))),I=Object(a.useState)(!1),_=Object(r.a)(I,2);_[0],_[1],Object(l.a)();Object(a.useEffect)((function(){window.scrollTo(0,0),console.log("projects",k),t(Object(j.d)(sessionStorage.getItem(b.j)))}),[]);var S=Object(a.useState)(!1),P=Object(r.a)(S,2),C=P[0],D=P[1],M=Object(a.useState)(),B=Object(r.a)(M,2),T=B[0],R=B[1],H=function(e){var t=0;return e.forEach((function(e){console.log(e.remaining_hours),t+=parseFloat(e.remaining_hours)})),t};function V(e){var t=0;return e.forEach((function(e){console.log(e.planned_hours),t+=parseFloat(e.planned_hours)})),t}var Z=[];return Object(y.jsxs)(y.Fragment,{children:[T&&Object(y.jsxs)(o.B,{closeOnBackdrop:!1,size:"lg",alignment:"center",show:C,onClose:function(){D(!C)},children:[Object(y.jsx)(o.D,{onClose:function(){return D(!C)},closeButton:!0,children:Object(y.jsx)(o.E,{className:"modal-title-projects",children:Object(y.jsx)("span",{className:"edit-profile-form-header",children:"Subtask Details"})})}),Object(y.jsx)(o.C,{children:Object(y.jsx)(o.l,{children:Object(y.jsxs)(o.t,{children:[Object(y.jsxs)(o.J,{children:[Object(y.jsx)("div",{className:"card-header-portion-ongoing",children:Object(y.jsx)("h4",{className:"ongoing-card-header-1",children:void 0!=T?T.sub_task:""})}),Object(y.jsx)("div",{className:"row justify-content-center",children:Object(y.jsx)("div",{className:"",children:Object(y.jsx)(o.g,{className:"card-ongoing-project",children:Object(y.jsxs)(o.h,{className:"details-project-body",children:[Object(y.jsxs)("div",{className:"ongoing-initial-info row",children:[Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"Work Package Index"}),Object(y.jsx)("h6",{className:"project-point-details",children:T.work_package_index})]}),Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"Task Title"}),Object(y.jsx)("h6",{className:"project-point-details",children:T.task_title})]}),Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"PM Name"}),Object(y.jsx)("h6",{className:"project-point-details",children:T.pm.first_name+" "+T.pm.last_name})]}),Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"Estimated Person(s)"}),Object(y.jsx)("h6",{className:"project-point-details",children:T.estimated_person})]}),Object(h.d)("projects.add_projects")&&Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"Planned Value"}),Object(y.jsxs)("h6",{className:"project-point-details",children:[T.planned_value," "]})]}),Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"Planned Hours"}),Object(y.jsxs)("h6",{className:"project-point-details",children:[T.planned_hours," "]})]}),Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"Actual Hours"}),Object(y.jsxs)("h6",{className:"project-point-details",children:[(T.planned_hours-T.remaining_hours).toFixed(1)," "]})]}),Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"Remaining Hours"}),Object(y.jsxs)("h6",{className:"project-point-details",children:[T.remaining_hours," "]})]}),Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"Planned delivery date"}),Object(y.jsxs)("h6",{className:"project-point-details",children:[T.planned_delivery_date," "]})]}),Object(y.jsxs)("div",{className:"tasks-done-2 col-lg-12",children:[Object(y.jsx)("h6",{className:"tiny-header2",children:"Task deatils"}),Object(y.jsx)("h6",{className:"project-point-details",children:""==T.description?"Not available":T.description})]})]}),Object(y.jsxs)("div",{className:"mt-4 mb-2",children:[Object(y.jsxs)("h5",{className:"projectName mb-3",children:["Asssignee(s)-(",Array.from(T.assignees).length,")"]}),Object(y.jsx)("div",{className:"file-show-ongoing-details row",children:void 0!=T&&Array.from(T.assignees).map((function(e,t){return Object(y.jsx)("div",{className:"col-md-4 col-sm-6 col-lg-4",children:Object(y.jsx)("div",{className:"file-attached-ongoing rounded-pill",children:e.assignee.first_name+" "+e.assignee.last_name})},t)}))})]})]})})})})]}),1==w(T.assignees)&&Object(y.jsx)(o.J,{className:"justify-content-center",children:Object(y.jsx)(o.f,{type:"button",className:"create-wbs-from-modal",onClick:function(){return e.push({pathname:"/dashboard/WBS/create-wbs",state:{task:T}})},children:"Create WBS"})})]})})})]}),Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"col-md-10 offset-md-1",children:[Object(y.jsxs)("h4",{className:"dash-header",children:["Assigned Projects(",Array.from(k).length,") ",Object(y.jsxs)(o.f,{className:"export-project-list",onClick:function(){return function(){for(var e=function(e){var t=k[e],a=[];Array.from(t.subtasks).map((function(e){a.push(e.task_title)})),n=a.join(",");var o=[];Array.from(t.assignees).map((function(e){o.push(e.first_name+" "+e.last_name)})),r=o.join(","),Z.push({"Sl. No":e+1,TDO:t.project.task_delivery_order.title,"Work Package Number":t.project.work_package_number,"Work Package Index":t.project.work_package_index,"Project Name":t.project.sub_task,Subtasks:n,"Assignee(s)":r,"Planned Value":t.project.planned_value,"Planned Hours":t.project.planned_hours,"Planned Delivery Date":t.project.planned_delivery_date})},t=0;t<k.length;t++){var n,r;e(t)}var a={Sheets:{data:v.utils.json_to_sheet(Z)},SheetNames:["data"]},o=v.write(a,{bookType:"xlsx",type:"array"}),i=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});g.saveAs(i,"Assigned project List.xlsx")}()},children:[Object(y.jsx)(d.a,{name:"cil-spreadsheet",className:"mr-2"}),"Export to excel"]})]}),void 0!=k&&Object(y.jsx)(O.a,{allowMultipleExpanded:!1,className:"remove-acc-bg",allowZeroExpanded:!0,children:Array.from(k).map((function(n,r){return Object(y.jsxs)(O.b,{className:"card-ongoing-project",children:[Object(y.jsx)(O.d,{className:"ongoing-accordion-header",children:Object(y.jsxs)(O.c,{children:[Object(y.jsx)(s.a,{"aria-label":"favourite",disabled:!0,size:"medium",children:Object(y.jsx)(c.a,{fontSize:"inherit",className:"fav-button"})}),String(n.project.sub_task).toUpperCase(),Object(y.jsxs)("span",{className:"fix-action-btn-alignment",children:[Object(y.jsxs)(o.f,{className:"view-ongoing-details",onClick:function(){return e.push({pathname:"/dashboard/Projects/assigned-projects/details/"+n.project.work_package_number,state:{project:n}})},children:[Object(y.jsx)(d.a,{name:"cil-list-rich",className:"mr-1"}),"View Details"]}),Object(h.d)("projects.change_projects")&&sessionStorage.getItem(b.j)==n.project.pm.id&&Object(y.jsxs)(o.f,{type:"button",onClick:function(){var e;e=n.project.work_package_number,m()({title:"Are you sure?",text:"You can change project status later!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n&&b.a.put("/project/change-status/"+e+"/",{status:1}).then((function(e){"True"==e.data.success?(t(Object(j.d)(sessionStorage.getItem(b.j))),m()("Poof! Project is marked as completed",{icon:"success"})):"False"==e.data.success&&m()("Poof!"+e.data.message,{icon:"error"})})).catch((function(e){}))}))},className:"mark-ongoing-completed",children:[Object(y.jsx)(d.a,{name:"cil-check-alt",className:"mr-1"}),"Mark as Completed"]})]})]})}),Object(y.jsxs)(O.e,{children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)("h6",{className:"show-amount",children:[H(n.subtasks).toFixed(1),"/",V(n.subtasks)," Hrs"]}),Object(y.jsx)(x.a,{progress:function(){return function(e,t){return 100*(parseFloat(e)-parseFloat(t))/parseFloat(e)}(V(n.subtasks),H(n.subtasks))}})]}),Object(y.jsx)("div",{className:"all-da-buttons-1",children:Array.from(n.subtasks).length>0&&Array.from(n.subtasks).map((function(e,t){return Object(y.jsxs)(o.f,{type:"button",className:"package-button rounded-pill",onClick:function(){D(!0),R(e),console.log("task",e)},children:[e.task_title,Object(y.jsx)("span",{className:"tooltiptext",children:e.work_package_index})]},t)}))}),Object(y.jsx)("div",{className:"all-da-workers1",children:n.assignees.length>0&&Array.from(n.assignees).map((function(e,t){return Object(y.jsx)(o.W,{content:Object(h.b)(e.first_name+" "+e.last_name),className:"tooltiptext1",children:Object(y.jsx)("img",{className:"img-fluid worker-image",src:null!=e.profile_pic?b.b+e.profile_pic:"avatars/user-avatar-default.png"},t)})}))}),Object(y.jsx)("div",{className:"information-show row",children:Object(y.jsx)("div",{className:"info-show-now col-lg-6",children:Object(y.jsxs)("h5",{className:"project-details-points",children:[Object(y.jsx)("h5",{className:"info-header-1",children:"Project Manager : "}),n.project.pm.first_name+" "+n.project.pm.last_name,"    "]})})})]})]},r)}))}),Array.from(k).length<1?Object(y.jsx)(o.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no ongoing projects"}):null]})})})]})}}}]);
//# sourceMappingURL=21.36472fab.chunk.js.map