(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[29],{1112:function(e,t,a){"use strict";a.r(t);var r=a(33),n=a(0),o=(a(823),a(490)),i=a(605),s=a(606),c=a(11),l=a(50),u=a(8),d=a(514),b=a(99),f=a(561),m=a(498),j=a.n(m),g=a(3);t.default=function(){var e=Object(c.g)(),t=Object(n.useState)("/dashboard/WBS/board"),a=Object(r.a)(t,2),m=a[0],v=a[1],h=Object(c.h)(),O=Object(n.useState)(!1),p=Object(r.a)(O,2),w=p[0],y=p[1],x=Object(b.b)(),S=x.enqueueSnackbar,N=(x.closeSnackbar,Object(d.a)({initialValues:{email:"",password:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){console.log(e);var t={};return e.email||(t.email="Email is required!"),e.password||(t.password="Password is required!"),console.log(t),t},onSubmit:function(t,a){var r=a.setSubmitting;u.g.post("auth/login/",N.values).then((function(t){if(r(!1),console.log("login response",t.data),200==t.status&&"True"==t.data.success){sessionStorage.setItem(u.i,t.data.token);var a=new Date;sessionStorage.setItem("TOKEN",JSON.stringify({time:new Date(a.getFullYear(),a.getMonth(),a.getDate()+2,a.getUTCHours(),a.getMinutes(),a.getSeconds()),data:t.data.token})),sessionStorage.setItem(u.j,t.data.user_id),u.a.get("auth/permissions/all/").then((function(t){console.log("permissions",t.data.data),Array.from(t.data.data).length>0?(sessionStorage.setItem(u.f,t.data.data),e.push({pathname:m,state:{from:"login"}})):(sessionStorage.clear(),j()("No Permissions","Please contact your admin","error"))}))}})).catch((function(e){var t,a;r(!1),console.log(e),null!==e&&void 0!==e&&null!==(t=e.response)&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.message&&S(e.response.data.message,{variant:"warning"})}))}}));return Object(n.useEffect)((function(){var e;if(null!==(e=h.state)&&void 0!==e&&e.registration&&S("Registration Succefull, please wait for admin approval.",{variant:"info"}),String(window.location).split("?").length>1){var t=String(window.location).split("?")[1].split("=");t.length>0&&"task_details"==t[0]&&v("/dashboard/task/details/"+t[1])}}),[]),Object(g.jsx)(g.Fragment,{children:sessionStorage.getItem(u.i)?Object(g.jsx)(c.a,{to:{pathname:"/dashboard",state:h.state}}):Object(g.jsx)("div",{className:"signin-content",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-6 contents",children:Object(g.jsx)("div",{className:"row justify-content-center",children:Object(g.jsxs)("div",{className:"col-md-8",children:[Object(g.jsx)("h3",{className:"form-header",children:"Sign in"}),Object(g.jsxs)("div",{className:"form-holder",children:[Object(g.jsxs)(o.t,{className:"custom-form",children:[Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)(o.z,{htmlFor:"exampleInputEmail1",className:"custom-label-signin",children:"Email"}),Object(g.jsx)(o.y,{type:"email",id:"email",name:"email",value:N.values.email,onChange:N.handleChange,"aria-describedby":"emailHelp",className:"custom-formgroup-signin",required:!0})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)(o.z,{htmlFor:"exampleInputPassword1",className:"custom-label-signin",children:"Password"}),Object(g.jsxs)("div",{className:"password-container",children:[Object(g.jsx)(o.y,{type:w?"text":"password",id:"password",name:"password",value:N.values.password,onChange:N.handleChange,className:"custom-formgroup-signin",onKeyPress:function(e){"Enter"===e.key&&N.handleSubmit()}}),Object(g.jsx)("img",{className:"pwd-container-img",title:w?"Hide password":"Show password",src:w?i.a:s.a,onClick:function(){return y((function(e){return!e}))}})]})]}),Object(g.jsx)("div",{className:"show-flex",children:Object(g.jsx)("div",{className:"forgot",children:Object(g.jsx)(l.b,{className:"forgot-link",to:"/forgot-password",children:"Forgot Password"})})}),Object(g.jsx)("div",{className:"submit-holder",children:N.isSubmitting?Object(g.jsx)(f.a,{}):Object(g.jsx)(o.f,{type:"button",onClick:N.handleSubmit,className:"submit-button-signin",disabled:!N.isValid,children:"Sign in"})})]}),Object(g.jsx)("div",{className:"mb-4 mt-3",children:Object(g.jsxs)("h5",{className:"final-footer-1",children:[Object(g.jsx)("span",{className:"dum-text-1",children:"Don't have an account?"}),Object(g.jsx)(l.b,{className:"registration-link-1",to:"/register",children:"Register"})]})})]})]})})}),Object(g.jsx)("div",{className:"col-lg-6 no-mob-display-sign-img",children:Object(g.jsx)("img",{src:"assets/bgs/sign-in-img.svg",alt:"Image",className:"img-fluid img-bg"})})]})})})})}},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return b}));var r=a(0),n=(a(113),a(157)),o=(a(161),a(56),a(31),a(59)),i=a(42),s=a(108),c=function(e,t){var a=arguments;if(null==t||!n.e.call(t,"css"))return r.createElement.apply(void 0,a);var o=a.length,i=new Array(o);i[0]=n.b,i[1]=Object(n.d)(e,t);for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)},l=r.useInsertionEffect?r.useInsertionEffect:r.useLayoutEffect,u=Object(n.g)((function(e,t){var a=e.styles,c=Object(i.a)([a],void 0,Object(r.useContext)(n.c)),u=Object(r.useRef)();return l((function(){var e=t.key+"-global",a=new s.a({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,n=document.querySelector('style[data-emotion="'+e+" "+c.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),null!==n&&(r=!0,n.setAttribute("data-emotion",e),a.hydrate([n])),u.current=[a,r],function(){a.flush()}}),[t]),l((function(){var e=u.current,a=e[0];if(e[1])e[1]=!1;else{if(void 0!==c.next&&Object(o.b)(t,c.next,!0),a.tags.length){var r=a.tags[a.tags.length-1].nextElementSibling;a.before=r,a.flush()}t.insert("",c,a,!1)}}),[t,c.name]),null}));function d(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return Object(i.a)(t)}var b=function(){var e=d.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},f=function e(t){for(var a=t.length,r=0,n="";r<a;r++){var o=t[r];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o}i&&(n&&(n+=" "),n+=i)}}return n};function m(e,t,a){var r=[],n=Object(o.a)(e,r,a);return r.length<2?a:n+t(r)}var j=function(e){var t=e.cache,a=e.serializedArr;Object(n.f)((function(){for(var e=0;e<a.length;e++)Object(o.b)(t,a[e],!1)}));return null},g=Object(n.g)((function(e,t){var a=[],s=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var s=Object(i.a)(r,t.registered);return a.push(s),Object(o.c)(t,s,!1),t.key+"-"+s.name},c={css:s,cx:function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return m(t.registered,s,f(a))},theme:Object(r.useContext)(n.c)},l=e.children(c);return!0,Object(r.createElement)(r.Fragment,null,Object(r.createElement)(j,{cache:t,serializedArr:a}),l)}))},504:function(e,t,a){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}a.d(t,"a",(function(){return r}))},561:function(e,t,a){"use strict";var r=a(504),n=a(18),o=a(7),i=a(0),s=a(25),c=a(479),l=a(49),u=a(477),d=a(39),b=a(52),f=a(36),m=a(48),j=a(306),g=a(480);function v(e){return Object(j.a)("MuiLinearProgress",e)}Object(g.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var h,O,p,w,y,x,S,N,k,C,I,P,E=a(3),q=["className","color","value","valueBuffer","variant"],B=Object(l.e)(S||(S=h||(h=Object(r.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),M=Object(l.e)(N||(N=O||(O=Object(r.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),z=Object(l.e)(k||(k=p||(p=Object(r.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),A=function(e,t){return"inherit"===t?"currentColor":"light"===e.palette.mode?Object(u.e)(e.palette[t].main,.62):Object(u.b)(e.palette[t].main,.5)},R=Object(f.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["color".concat(Object(d.a)(a.color))],t[a.variant]]}})((function(e){var t=e.ownerState,a=e.theme;return Object(o.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:A(a,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),_=Object(f.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var a=e.ownerState;return[t.dashed,t["dashedColor".concat(Object(d.a)(a.color))]]}})((function(e){var t=e.ownerState,a=e.theme,r=A(a,t.color);return Object(o.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(l.c)(C||(C=w||(w=Object(r.a)(["\n    animation: "," 3s infinite linear;\n  "]))),z)),D=Object(f.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var a=e.ownerState;return[t.bar,t["barColor".concat(Object(d.a)(a.color))],("indeterminate"===a.variant||"query"===a.variant)&&t.bar1Indeterminate,"determinate"===a.variant&&t.bar1Determinate,"buffer"===a.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,a=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":a.palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(l.c)(I||(I=y||(y=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),B)})),L=Object(f.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var a=e.ownerState;return[t.bar,t["barColor".concat(Object(d.a)(a.color))],("indeterminate"===a.variant||"query"===a.variant)&&t.bar2Indeterminate,"buffer"===a.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,a=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":a.palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:A(a,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(l.c)(P||(P=x||(x=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),M)})),F=i.forwardRef((function(e,t){var a=Object(m.a)({props:e,name:"MuiLinearProgress"}),r=a.className,i=a.color,l=void 0===i?"primary":i,u=a.value,f=a.valueBuffer,j=a.variant,g=void 0===j?"indeterminate":j,h=Object(n.a)(a,q),O=Object(o.a)({},a,{color:l,variant:g}),p=function(e){var t=e.classes,a=e.variant,r=e.color,n={root:["root","color".concat(Object(d.a)(r)),a],dashed:["dashed","dashedColor".concat(Object(d.a)(r))],bar1:["bar","barColor".concat(Object(d.a)(r)),("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&"barColor".concat(Object(d.a)(r)),"buffer"===a&&"color".concat(Object(d.a)(r)),("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return Object(c.a)(n,v,t)}(O),w=Object(b.a)(),y={},x={bar1:{},bar2:{}};if("determinate"===g||"buffer"===g)if(void 0!==u){y["aria-valuenow"]=Math.round(u),y["aria-valuemin"]=0,y["aria-valuemax"]=100;var S=u-100;"rtl"===w.direction&&(S=-S),x.bar1.transform="translateX(".concat(S,"%)")}else 0;if("buffer"===g)if(void 0!==f){var N=(f||0)-100;"rtl"===w.direction&&(N=-N),x.bar2.transform="translateX(".concat(N,"%)")}else 0;return Object(E.jsxs)(R,Object(o.a)({className:Object(s.default)(p.root,r),ownerState:O,role:"progressbar"},y,{ref:t},h,{children:["buffer"===g?Object(E.jsx)(_,{className:p.dashed,ownerState:O}):null,Object(E.jsx)(D,{className:p.bar1,ownerState:O,style:x.bar1}),"determinate"===g?null:Object(E.jsx)(L,{className:p.bar2,ownerState:O,style:x.bar2})]}))}));t.a=F},605:function(e,t,a){"use strict";t.a=a.p+"static/media/Showpass-show.ab5421f5.svg"},606:function(e,t,a){"use strict";t.a=a.p+"static/media/Hide.31c620fc.svg"},823:function(e,t,a){}}]);
//# sourceMappingURL=29.2d7b9fd0.chunk.js.map