(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[29],{1059:function(e,a,t){"use strict";t.r(a);var r=t(33),n=t(0),o=(t(758),t(486)),i=t(569),s=t(570),c=t(11),l=t(48),d=t(8),b=t(510),u=t(103),m=t(539),f=t(503),j=t.n(f),g=t(3);a.default=function(){var e=Object(c.g)(),a=Object(c.h)(),t=Object(n.useState)(!1),f=Object(r.a)(t,2),v=f[0],h=f[1],O=Object(u.b)(),p=O.enqueueSnackbar,w=(O.closeSnackbar,Object(b.a)({initialValues:{email:"",password:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){console.log(e);var a={};return e.email||(a.email="Email is required!"),e.password||(a.password="Password is required!"),console.log(a),a},onSubmit:function(a,t){var r=t.setSubmitting;d.g.post("auth/login/",w.values).then((function(a){if(r(!1),console.log("login response",a.data),200==a.status&&"True"==a.data.success){sessionStorage.setItem(d.i,a.data.token);var t=new Date;sessionStorage.setItem("TOKEN",JSON.stringify({time:new Date(t.getFullYear(),t.getMonth(),t.getDate()+2,t.getUTCHours(),t.getMinutes(),t.getSeconds()),data:a.data.token})),sessionStorage.setItem(d.j,a.data.user_id),d.a.get("auth/permissions/all/").then((function(a){console.log("permissions",a.data.data),Array.from(a.data.data).length>0?(sessionStorage.setItem(d.f,a.data.data),e.push({pathname:"/dashboard",state:{from:"login"}})):(sessionStorage.clear(),j()("No Permissions","Please contact your admin","error"))}))}})).catch((function(e){var a,t;r(!1),console.log(e),null!==e&&void 0!==e&&null!==(a=e.response)&&void 0!==a&&null!==(t=a.data)&&void 0!==t&&t.message&&p(e.response.data.message,{variant:"warning"})}))}}));return Object(n.useEffect)((function(){var e;null!==(e=a.state)&&void 0!==e&&e.registration&&p("Registration Succefull, please wait for admin approval.",{variant:"info"})}),[]),Object(g.jsx)(g.Fragment,{children:sessionStorage.getItem(d.i)?Object(g.jsx)(c.a,{to:"/dashboard"}):Object(g.jsx)("div",{className:"signin-content",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-6 contents",children:Object(g.jsx)("div",{className:"row justify-content-center",children:Object(g.jsxs)("div",{className:"col-md-8",children:[Object(g.jsx)("h3",{className:"form-header",children:"Sign in"}),Object(g.jsxs)("div",{className:"form-holder",children:[Object(g.jsxs)(o.s,{className:"custom-form",children:[Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"exampleInputEmail1",className:"custom-label-signin",children:"Email"}),Object(g.jsx)(o.w,{type:"email",id:"email",name:"email",value:w.values.email,onChange:w.handleChange,"aria-describedby":"emailHelp",className:"custom-formgroup-signin",required:!0})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"exampleInputPassword1",className:"custom-label-signin",children:"Password"}),Object(g.jsxs)("div",{className:"password-container",children:[Object(g.jsx)(o.w,{type:v?"text":"password",id:"password",name:"password",value:w.values.password,onChange:w.handleChange,className:"custom-formgroup-signin",onKeyPress:function(e){"Enter"===e.key&&w.handleSubmit()}}),Object(g.jsx)("img",{className:"pwd-container-img",title:v?"Hide password":"Show password",src:v?i.a:s.a,onClick:function(){return h((function(e){return!e}))}})]})]}),Object(g.jsx)("div",{className:"show-flex",children:Object(g.jsx)("div",{className:"forgot",children:Object(g.jsx)(l.b,{className:"forgot-link",to:"/forgot-password",children:"Forgot Password"})})}),Object(g.jsx)("div",{className:"submit-holder",children:w.isSubmitting?Object(g.jsx)(m.a,{}):Object(g.jsx)(o.f,{type:"button",onClick:w.handleSubmit,className:"submit-button-signin",disabled:!w.isValid,children:"Sign in"})})]}),Object(g.jsx)("div",{className:"mb-4 mt-3",children:Object(g.jsxs)("h5",{className:"final-footer-1",children:[Object(g.jsx)("span",{className:"dum-text-1",children:"Don't have an account?"}),Object(g.jsx)(l.b,{className:"registration-link-1",to:"/register",children:"Register"})]})})]})]})})}),Object(g.jsx)("div",{className:"col-lg-6 no-mob-display-sign-img",children:Object(g.jsx)("img",{src:"assets/bgs/sign-in-img.svg",alt:"Image",className:"img-fluid img-bg"})})]})})})})}},492:function(e,a,t){"use strict";function r(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}t.d(a,"a",(function(){return r}))},539:function(e,a,t){"use strict";var r=t(492),n=t(18),o=t(7),i=t(0),s=t(25),c=t(475),l=t(50),d=t(473),b=t(39),u=t(52),m=t(36),f=t(51),j=t(303),g=t(476);function v(e){return Object(j.a)("MuiLinearProgress",e)}Object(g.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var h,O,p,w,x,S,N,y,C,k,P,I,q=t(3),B=["className","color","value","valueBuffer","variant"],M=Object(l.e)(N||(N=h||(h=Object(r.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),D=Object(l.e)(y||(y=O||(O=Object(r.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),R=Object(l.e)(C||(C=p||(p=Object(r.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),z=function(e,a){return"inherit"===a?"currentColor":"light"===e.palette.mode?Object(d.e)(e.palette[a].main,.62):Object(d.b)(e.palette[a].main,.5)},L=Object(m.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a["color".concat(Object(b.a)(t.color))],a[t.variant]]}})((function(e){var a=e.ownerState,t=e.theme;return Object(o.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:z(t,a.color)},"inherit"===a.color&&"buffer"!==a.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===a.variant&&{backgroundColor:"transparent"},"query"===a.variant&&{transform:"rotate(180deg)"})})),E=Object(m.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,a){var t=e.ownerState;return[a.dashed,a["dashedColor".concat(Object(b.a)(t.color))]]}})((function(e){var a=e.ownerState,t=e.theme,r=z(t,a.color);return Object(o.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===a.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(l.c)(k||(k=w||(w=Object(r.a)(["\n    animation: "," 3s infinite linear;\n  "]))),R)),F=Object(m.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,a){var t=e.ownerState;return[a.bar,a["barColor".concat(Object(b.a)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&a.bar1Indeterminate,"determinate"===t.variant&&a.bar1Determinate,"buffer"===t.variant&&a.bar1Buffer]}})((function(e){var a=e.ownerState,t=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===a.color?"currentColor":t.palette[a.color].main},"determinate"===a.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===a.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var a=e.ownerState;return("indeterminate"===a.variant||"query"===a.variant)&&Object(l.c)(P||(P=x||(x=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),M)})),H=Object(m.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,a){var t=e.ownerState;return[a.bar,a["barColor".concat(Object(b.a)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&a.bar2Indeterminate,"buffer"===t.variant&&a.bar2Buffer]}})((function(e){var a=e.ownerState,t=e.theme;return Object(o.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==a.variant&&{backgroundColor:"inherit"===a.color?"currentColor":t.palette[a.color].main},"inherit"===a.color&&{opacity:.3},"buffer"===a.variant&&{backgroundColor:z(t,a.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var a=e.ownerState;return("indeterminate"===a.variant||"query"===a.variant)&&Object(l.c)(I||(I=S||(S=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),D)})),T=i.forwardRef((function(e,a){var t=Object(f.a)({props:e,name:"MuiLinearProgress"}),r=t.className,i=t.color,l=void 0===i?"primary":i,d=t.value,m=t.valueBuffer,j=t.variant,g=void 0===j?"indeterminate":j,h=Object(n.a)(t,B),O=Object(o.a)({},t,{color:l,variant:g}),p=function(e){var a=e.classes,t=e.variant,r=e.color,n={root:["root","color".concat(Object(b.a)(r)),t],dashed:["dashed","dashedColor".concat(Object(b.a)(r))],bar1:["bar","barColor".concat(Object(b.a)(r)),("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&"barColor".concat(Object(b.a)(r)),"buffer"===t&&"color".concat(Object(b.a)(r)),("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return Object(c.a)(n,v,a)}(O),w=Object(u.a)(),x={},S={bar1:{},bar2:{}};if("determinate"===g||"buffer"===g)if(void 0!==d){x["aria-valuenow"]=Math.round(d),x["aria-valuemin"]=0,x["aria-valuemax"]=100;var N=d-100;"rtl"===w.direction&&(N=-N),S.bar1.transform="translateX(".concat(N,"%)")}else 0;if("buffer"===g)if(void 0!==m){var y=(m||0)-100;"rtl"===w.direction&&(y=-y),S.bar2.transform="translateX(".concat(y,"%)")}else 0;return Object(q.jsxs)(L,Object(o.a)({className:Object(s.a)(p.root,r),ownerState:O,role:"progressbar"},x,{ref:a},h,{children:["buffer"===g?Object(q.jsx)(E,{className:p.dashed,ownerState:O}):null,Object(q.jsx)(F,{className:p.bar1,ownerState:O,style:S.bar1}),"determinate"===g?null:Object(q.jsx)(H,{className:p.bar2,ownerState:O,style:S.bar2})]}))}));a.a=T},569:function(e,a,t){"use strict";a.a=t.p+"static/media/Showpass-show.ab5421f5.svg"},570:function(e,a,t){"use strict";a.a=t.p+"static/media/Hide.31c620fc.svg"},758:function(e,a,t){}}]);
//# sourceMappingURL=29.fed612f8.chunk.js.map