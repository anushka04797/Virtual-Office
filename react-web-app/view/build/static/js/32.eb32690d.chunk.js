(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[32],{1450:function(e,a,t){},1451:function(e,a,t){},1492:function(e,a,t){"use strict";t.r(a);var s=t(30),r=t(506),n=t(490),c=t(509),o=t(0),l=(t(1450),t(1451),t(657)),i=t(658),d=t(5),j=t(91),b=t(527),u=t(8),m=t(112),h=t(508),f=t.n(h),p=t(10),O=t(536),v=t(501);a.default=function(){var e,a,t=Object(p.g)(),h=Object(p.i)().id,x=Object(o.useState)(!1),g=Object(s.a)(x,2),w=g[0],N=g[1],_=Object(o.useState)(!1),y=Object(s.a)(_,2),C=y[0],k=y[1],P=Object(o.useState)(!1),S=Object(s.a)(P,2),B=S[0],I=S[1],F=Object(o.useState)(),q=Object(s.a)(F,2),A=q[0],z=q[1],E=Object(o.useState)(""),L=Object(s.a)(E,2),R=L[0],D=L[1],T=Object(o.useRef)(null),M=Object(o.useState)(),U=Object(s.a)(M,2),V=(U[0],U[1]),H=Object(o.useState)(A?u.c+A.profile_pic:"avatars/user-avatar-default.png"),G=Object(s.a)(H,2),K=G[0],J=G[1],W=Object(o.useState)(!1),X=Object(s.a)(W,2),Y=X[0],Q=X[1],Z=Object(j.b)(),$=function(){console.log("values"),Q(!Y),ce.setValues({first_name:A.first_name,last_name:A.last_name,email:A.email,phone:A.phone,address:A.address,blood_group:A.blood_group})},ee=Object(o.useState)("viewProfile"),ae=Object(s.a)(ee,2),te=ae[0],se=ae[1],re=Object(b.a)({initialValues:{old_password:"",new_password:"",new_password_confirm:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var a={};return e.old_password||(a.old_password="Old Password Required"),(String(e.new_password).length<8||!e.new_password||e.new_password!=e.new_password_confirm)&&(a.new_password="Invalid New Password"),a},onSubmit:function(e){var a=new FormData;console.log("values",e);for(var t=0,r=Object.entries(re.values);t<r.length;t++){var n=Object(s.a)(r[t],2),c=n[0],o=n[1];"new_password_confirm"!=c&&a.append(c,o)}u.a.put("auth/change/password/",a).then((function(e){console.log(e),200==e.status&&(re.resetForm(),se("viewProfile"),console.log("view profile",te),f()("Your Password has been Updated!","","success"))})).catch((function(e){400==e.response.status&&f()("Incorrect","Bad Request","warning")}))}}),ne=function(e){var a=new FormData;a.append("profile_pic",e),console.log("image",e),u.d.post("auth/change/profile/image/"+sessionStorage.getItem(u.k)+"/",a).then((function(e){201==e.status&&f()("Profile Picture Updated!","","success")})).catch((function(e){400==e.status&&f()("Incorrect, Bad Request","","warning")}))};Object(o.useEffect)((function(){}),[]),Object(o.useEffect)((function(){console.log("id from route",h),h&&u.a.get("auth/profile/details/"+h+"/").then((function(e){console.log("res",e.data),z(e.data.data),window.scrollTo(0,0),D({value:e.data.data.blood_group,label:e.data.data.blood_group}),J(e.data.data.profile_pic?u.c+e.data.data.profile_pic:"avatars/user-avatar-default.png")})).catch((function(e){}))}),[h]);var ce=Object(b.a)({initialValues:{first_name:"",last_name:"",email:"",phone:"",address:"",blood_group:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var a={};return e.first_name||(a.first_name="First Name is required"),e.last_name||(a.last_name="Last Name is required"),e.email||(a.email="Email is required"),e.address||(a.address="Address is required"),e.blood_group||(a.blood_group="Blood group is required"),a},onSubmit:function(e){console.log(e),u.a.post("auth/profile/update/"+sessionStorage.getItem(u.k)+"/",ce.values).then((function(e){console.log(e),201==e.status&&"True"==e.data.success&&(Z(Object(m.b)(sessionStorage.getItem(u.k))),Q(!1),f()("Your Profile has been Updated!","","success"))}))}});function oe(e){return void 0!=e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():""}var le=Object(j.c)((function(e){return e.projects.data}));Object(o.useEffect)((function(){console.log("ProjectsList",le)}),[le]);var ie=function(e){var a=0;return e.forEach((function(e){console.log(e.remaining_hours),a+=parseFloat(e.remaining_hours)})),a};function de(e){var a=0;return e.forEach((function(e){console.log(e.planned_hours),a+=parseFloat(e.planned_hours)})),a}function je(e,a){return 100*(parseFloat(e)-parseFloat(a))/parseFloat(e)}var be=Object(j.c)((function(e){var a=[];return Object(v.g)("projects.add_projects")&&e.projects.pm_projects.forEach((function(e,t){0==e.project.status&&a.push(e)})),console.log("pmtemp",a),a})),ue=Object(o.useState)(1),me=Object(s.a)(ue,2);me[0],me[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(n.l,{children:[Object(d.jsxs)(n.B,{closeOnBackdrop:!1,alignment:"center",show:Y,onClose:$,children:[Object(d.jsx)(n.E,{closeButton:!0,children:Object(d.jsx)(n.F,{className:"modal-title-profile",children:Object(d.jsx)("span",{className:"edit-profile-form-header",children:"Edit Profile Info"})})}),Object(d.jsx)(n.C,{children:Object(d.jsx)(n.l,{children:Object(d.jsx)(n.t,{children:Object(d.jsxs)(n.K,{children:[Object(d.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(d.jsx)(n.z,{className:"custom-label-5",htmlFor:"userFName",children:"First Name *"}),Object(d.jsx)(n.y,{type:"text",name:"first_name",id:"first_name",className:"custom-forminput-6",value:ce.values.first_name,onChange:ce.handleChange})]}),Object(d.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(d.jsx)(n.z,{className:"custom-label-5",htmlFor:"userLName",children:"Last Name *"}),Object(d.jsx)(n.y,{type:"text",name:"last_name",id:"last_name",className:"custom-forminput-6",value:ce.values.last_name,onChange:ce.handleChange})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(n.z,{className:"custom-label-5",htmlFor:"uEmail",children:"Email *"}),Object(d.jsx)(n.y,{type:"email",name:"email",id:"email",className:"custom-forminput-6",value:ce.values.email,onChange:ce.handleChange,readOnly:!0})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(n.z,{className:"custom-label-5",htmlFor:"uPhoneNo",children:"Phone *"}),Object(d.jsx)(n.y,{type:"tel",name:"phone",id:"phone",value:ce.values.phone,onChange:ce.handleChange,className:"custom-forminput-6"})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(n.z,{className:"custom-label-5",htmlFor:"Address",children:"Address *"}),Object(d.jsx)(n.y,{type:"text",name:"address",id:"address",value:ce.values.address,onChange:ce.handleChange,className:"custom-forminput-6"}),ce.touched.address&&ce.errors.address&&Object(d.jsx)("small",{style:{color:"red"},children:ce.errors.address})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(n.z,{className:"custom-label-5",htmlFor:"blood_group",children:"Blood Group *"}),Object(d.jsx)(c.a,{id:"blood_group",value:R,onChange:function(e){console.log(e),ce.setValues({first_name:ce.values.first_name,last_name:ce.values.last_name,email:ce.values.email,phone:ce.values.phone,address:ce.values.address,blood_group:e.value}),D({value:e.value,label:e.label})},className:"custom-forminput-6",options:[{value:"A+",label:"A+"},{value:"A-",label:"A-"},{value:"B+",label:"B+"},{value:"B-",label:"B-"},{value:"AB+",label:"AB+"},{value:"AB-",label:"AB-"},{value:"O+",label:"O+"},{value:"O-",label:"O-"}]})]}),Object(d.jsx)("div",{className:"col-md-12 ",children:Object(d.jsxs)("div",{className:"project-form-button-holders mt-3",children:[Object(d.jsx)(n.f,{className:"profile-form-btn update-profile",onClick:ce.handleSubmit,type:"button",disabled:!ce.isValid,children:"Update Info"}),Object(d.jsx)(n.f,{className:"profile-form-btn cancel-update",type:"reset",onClick:function(){return Q(!Y)},children:"Cancel"})]})})]})})})})]}),Object(d.jsxs)(n.U,{activeTab:te,children:[console.log("tab0",te),Object(d.jsxs)(n.G,{variant:"tabs",className:"tab-style",children:[Object(d.jsx)(n.H,{children:Object(d.jsxs)(n.I,{"data-tab":"viewProfile",className:"special",children:[Object(d.jsx)(r.a,{name:"cil-user"})," View Profile"]})}),Object(d.jsx)(n.H,{children:Object(d.jsxs)(n.I,{disabled:(null===A||void 0===A?void 0:A.id)!=sessionStorage.getItem(u.k),"data-tab":"changePassword",className:"special",children:[Object(d.jsx)(r.a,{name:"cil-pen-alt",className:"mr-1"}),"Change Password"]})})]}),Object(d.jsxs)(n.S,{children:[Object(d.jsxs)(n.T,{"data-tab":"viewProfile",activeTab:"viewProfile"===te,children:[console.log("profile tab",te),void 0!=A&&Object(d.jsxs)(n.l,{children:[Object(d.jsx)("h3",{className:"profile-page-header",children:"Profile Details"}),Object(d.jsx)(n.K,{children:Object(d.jsx)("div",{className:"col-lg-8 offset-lg-2",children:Object(d.jsxs)(n.g,{className:"card-view-profile mt-3",children:[Object(d.jsxs)("div",{className:"user-profile-pic-div text-center",children:[Object(d.jsx)(n.x,{alt:"click to upload image",className:"mx-auto rounded-circle update-img",src:K}),Object(d.jsx)("input",{style:{display:"none"},ref:T,type:"file",onChange:function(e){!function(e){V(e),J(URL.createObjectURL(e)),ne(e)}(e.target.files[0])}}),A.id==sessionStorage.getItem(u.k)&&Object(d.jsxs)(n.f,{onClick:function(){T.current.click()},type:"button",className:"d-block mx-auto change-img-btn mt-1",children:[" ",Object(d.jsx)(r.a,{name:"cil-camera"})," Change Picture"]})]}),Object(d.jsxs)(n.h,{children:[Object(d.jsx)("hr",{}),A.id==sessionStorage.getItem(u.k)&&Object(d.jsxs)(n.f,{className:"edit-profile mb-3",onClick:function(){return $()},children:[Object(d.jsx)(r.a,{name:"cil-pen",className:"mr-1"}),"Edit Info"]}),Object(d.jsxs)("div",{className:"row justify-content-center",children:[Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:"Full Name"}),Object(d.jsxs)("h5",{className:"profile-details-points child",children:[oe(A.first_name)+" "+oe(A.last_name)," "]})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Email"}),Object(d.jsx)("h5",{className:"profile-details-points-email",children:A.email})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:"Job title"}),Object(d.jsx)("h5",{className:"profile-details-points-email",children:null===A||void 0===A||null===(e=A.slc_details)||void 0===e||null===(a=e.slc)||void 0===a?void 0:a.name})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Phone"}),Object(d.jsxs)("h5",{className:"profile-details-points child",children:["+",A.phone]})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Address"}),Object(d.jsx)("h5",{className:"profile-details-points child",children:A.address})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Blood Group"}),Object(d.jsx)("h5",{className:"profile-details-points child",children:A.blood_group})]}),Object(d.jsx)(n.K,{className:"mt-5",children:Object(d.jsxs)(n.U,{activeTab:"workingon",children:[Object(d.jsxs)(n.G,{variant:"tabs",children:[Object(d.jsx)(n.H,{children:Object(d.jsx)(n.I,{"data-tab":"workingon",children:"Working On"})}),Object(v.g)("projects.add_projects")&&Object(d.jsx)(n.H,{children:Object(d.jsx)(n.I,{"data-tab":"managing",children:"Managing"})})]}),Object(d.jsxs)(n.S,{children:[Object(d.jsx)(n.T,{"data-tab":"workingon",children:Object(d.jsxs)("div",{className:"mt-4",children:[Object(d.jsxs)("div",{className:"card-holder1",children:[void 0!=le&&Array.from(le).slice(0,3).map((function(e,a){return Object(d.jsx)(n.g,{className:"project-card1",onClick:function(){return t.push({pathname:"/dashboard/Projects/assigned-projects/details/"+e.project.work_package_number+"/"})},children:Object(d.jsxs)(n.h,{children:[Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsxs)("span",{className:"p-header-3",children:["Project Name:"," "]})," ",e.project.sub_task]}),Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsxs)("span",{className:"p-header-3",children:["Planned Delivery Date :"," "]}),e.project.planned_delivery_date]}),Object(d.jsx)("div",{children:Object(d.jsx)("h5",{className:"card-details1",children:Object(d.jsxs)("span",{className:"p-header-3",children:["Progress :",Object(d.jsx)(O.a,{progress:function(){return je(de(e.subtasks),ie(e.subtasks))}})]})})})]})},a)})),""==le||void 0==le?Object(d.jsx)(n.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no projects assigned to you"}):null]}),void 0!=le&&Object(d.jsx)("div",{className:"button-holder3",children:Object(d.jsx)(n.f,{className:"tiny-buttons1",onClick:function(){return t.push({pathname:"/dashboard/Projects/assigned-projects"})},children:"View all"})})]})}),Object(v.g)("projects.add_projects")&&Object(d.jsx)(n.T,{"data-tab":"managing",children:Object(d.jsxs)("div",{className:"mt-4",children:[Object(d.jsxs)("div",{className:"card-holder1",children:[void 0!=be&&Array.from(be).slice(0,3).map((function(e,a){return Object(d.jsx)(n.g,{className:"project-card1",onClick:function(){return t.push({pathname:"/dashboard/Projects/my-projects/details/"+e.project.work_package_number+"/"})},children:Object(d.jsxs)(n.h,{children:[Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsxs)("span",{className:"p-header-3",children:["Project Name:"," "]})," ",e.project.sub_task]}),Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsxs)("span",{className:"p-header-3",children:["Planned Delivery Date :"," "]}),e.project.planned_delivery_date]}),Object(d.jsx)("div",{children:Object(d.jsx)("h5",{className:"card-details1",children:Object(d.jsxs)("span",{className:"p-header-3",children:["Progress :",Object(d.jsx)(O.a,{progress:function(){return je(de(e.subtasks),ie(e.subtasks))}})]})})})]})},a)})),""==be||void 0==be?Object(d.jsx)(n.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no projects you are managing"}):null]}),void 0!=be&&Object(d.jsx)("div",{className:"button-holder3",children:Object(d.jsx)(n.f,{className:"tiny-buttons1",onClick:function(){return t.push({pathname:"/dashboard/Projects/my-projects"})},children:"View all"})})]})})]})]})})]})]})]})})})]})]}),Object(d.jsxs)(n.T,{"data-tab":"changePassword",activeTab:"changePassword"===te,children:[console.log("change tab",te),Object(d.jsxs)(n.l,{children:[Object(d.jsx)("h3",{className:"profile-page-header",children:"Change Password"}),Object(d.jsx)(n.K,{children:Object(d.jsx)("div",{className:"col-lg-8 offset-lg-2 col-md-12",children:Object(d.jsx)(n.g,{className:"mt-4 card-change-password",children:Object(d.jsx)(n.h,{children:Object(d.jsxs)(n.t,{children:[Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(n.z,{className:"custom-label-5",htmlFor:"userOldPass",children:"Old Password"}),Object(d.jsxs)("div",{className:"password-container",children:[Object(d.jsx)(n.y,{type:w?"text":"password",name:"old_password",id:"old_password",className:"custom-forminput-6",value:re.values.old_password,onChange:re.handleChange}),Object(d.jsx)("img",{className:"pwd-container-img",title:w?"Hide Old password":"Show Old password",src:w?l.a:i.a,onClick:function(){return N((function(e){return!e}))}})]})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(n.z,{className:"custom-label-5",htmlFor:"userNewPass",children:"New Password"}),Object(d.jsxs)("div",{className:"password-container",children:[Object(d.jsx)(n.y,{type:C?"text":"password",name:"new_password",id:"new_password",className:"custom-forminput-6",value:re.values.new_password,onChange:re.handleChange}),Object(d.jsx)("img",{className:"pwd-container-img",title:C?"Hide New password":"Show New password",src:C?l.a:i.a,onClick:function(){return k((function(e){return!e}))}})]})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(n.z,{className:"custom-label-5",htmlFor:"userConfPass",children:"Confirm Password"}),Object(d.jsxs)("div",{className:"password-container",children:[Object(d.jsx)(n.y,{type:B?"text":"password",name:"new_password_confirm",id:"new_password_confirm",className:"custom-forminput-6",value:re.values.new_password_confirm,onChange:re.handleChange}),Object(d.jsx)("img",{className:"pwd-container-img",title:B?"Hide Confirm password":"Show Confirm password",src:B?l.a:i.a,onClick:function(){return I((function(e){return!e}))}})]})]}),Object(d.jsxs)("div",{className:"project-form-button-holders mt-3",children:[Object(d.jsx)(n.f,{className:"profile-form-btn update-profile",disabled:!re.isValid,type:"button",onClick:re.handleSubmit,children:"Update Password"}),Object(d.jsx)(n.f,{className:"profile-form-btn cancel-update",type:"button",onClick:re.resetForm,children:"Cancel"})]})]})})})})})]})]})]})]})]})})}},536:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var s=t(30),r=t(11),n=t(0),c=t(579),o=t(1558),l=t(1569),i=t(5);function d(e){return Object(i.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(i.jsx)(l.a,{sx:{width:"100%",mr:1},children:Object(i.jsx)(c.a,Object(r.a)({variant:"determinate"},e))}),Object(i.jsx)(l.a,{sx:{minWidth:35},children:Object(i.jsx)(o.a,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}function j(e){var a=n.useState(e.progress),t=Object(s.a)(a,2),r=t[0];t[1];return n.useEffect((function(){}),[]),Object(i.jsx)(l.a,{sx:{width:"100%"},children:Object(i.jsx)(d,{value:r})})}},579:function(e,a,t){"use strict";var s=t(517),r=t(4),n=t(1),c=t(0),o=t(22),l=t(477),i=t(47),d=t(475),j=t(36),b=t(49),u=t(33),m=t(45),h=t(304),f=t(478);function p(e){return Object(h.a)("MuiLinearProgress",e)}Object(f.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var O,v,x,g,w,N,_,y,C,k,P,S,B=t(5),I=["className","color","value","valueBuffer","variant"],F=Object(i.e)(_||(_=O||(O=Object(s.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),q=Object(i.e)(y||(y=v||(v=Object(s.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),A=Object(i.e)(C||(C=x||(x=Object(s.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),z=function(e,a){return"inherit"===a?"currentColor":"light"===e.palette.mode?Object(d.e)(e.palette[a].main,.62):Object(d.b)(e.palette[a].main,.5)},E=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a["color".concat(Object(j.a)(t.color))],a[t.variant]]}})((function(e){var a=e.ownerState,t=e.theme;return Object(n.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:z(t,a.color)},"inherit"===a.color&&"buffer"!==a.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===a.variant&&{backgroundColor:"transparent"},"query"===a.variant&&{transform:"rotate(180deg)"})})),L=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,a){var t=e.ownerState;return[a.dashed,a["dashedColor".concat(Object(j.a)(t.color))]]}})((function(e){var a=e.ownerState,t=e.theme,s=z(t,a.color);return Object(n.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===a.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(s," 0%, ").concat(s," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(i.c)(k||(k=g||(g=Object(s.a)(["\n    animation: "," 3s infinite linear;\n  "]))),A)),R=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,a){var t=e.ownerState;return[a.bar,a["barColor".concat(Object(j.a)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&a.bar1Indeterminate,"determinate"===t.variant&&a.bar1Determinate,"buffer"===t.variant&&a.bar1Buffer]}})((function(e){var a=e.ownerState,t=e.theme;return Object(n.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===a.color?"currentColor":t.palette[a.color].main},"determinate"===a.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===a.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var a=e.ownerState;return("indeterminate"===a.variant||"query"===a.variant)&&Object(i.c)(P||(P=w||(w=Object(s.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),F)})),D=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,a){var t=e.ownerState;return[a.bar,a["barColor".concat(Object(j.a)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&a.bar2Indeterminate,"buffer"===t.variant&&a.bar2Buffer]}})((function(e){var a=e.ownerState,t=e.theme;return Object(n.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==a.variant&&{backgroundColor:"inherit"===a.color?"currentColor":t.palette[a.color].main},"inherit"===a.color&&{opacity:.3},"buffer"===a.variant&&{backgroundColor:z(t,a.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var a=e.ownerState;return("indeterminate"===a.variant||"query"===a.variant)&&Object(i.c)(S||(S=N||(N=Object(s.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),q)})),T=c.forwardRef((function(e,a){var t=Object(m.a)({props:e,name:"MuiLinearProgress"}),s=t.className,c=t.color,i=void 0===c?"primary":c,d=t.value,u=t.valueBuffer,h=t.variant,f=void 0===h?"indeterminate":h,O=Object(r.a)(t,I),v=Object(n.a)({},t,{color:i,variant:f}),x=function(e){var a=e.classes,t=e.variant,s=e.color,r={root:["root","color".concat(Object(j.a)(s)),t],dashed:["dashed","dashedColor".concat(Object(j.a)(s))],bar1:["bar","barColor".concat(Object(j.a)(s)),("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&"barColor".concat(Object(j.a)(s)),"buffer"===t&&"color".concat(Object(j.a)(s)),("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return Object(l.a)(r,p,a)}(v),g=Object(b.a)(),w={},N={bar1:{},bar2:{}};if("determinate"===f||"buffer"===f)if(void 0!==d){w["aria-valuenow"]=Math.round(d),w["aria-valuemin"]=0,w["aria-valuemax"]=100;var _=d-100;"rtl"===g.direction&&(_=-_),N.bar1.transform="translateX(".concat(_,"%)")}else 0;if("buffer"===f)if(void 0!==u){var y=(u||0)-100;"rtl"===g.direction&&(y=-y),N.bar2.transform="translateX(".concat(y,"%)")}else 0;return Object(B.jsxs)(E,Object(n.a)({className:Object(o.default)(x.root,s),ownerState:v,role:"progressbar"},w,{ref:a},O,{children:["buffer"===f?Object(B.jsx)(L,{className:x.dashed,ownerState:v}):null,Object(B.jsx)(R,{className:x.bar1,ownerState:v,style:N.bar1}),"determinate"===f?null:Object(B.jsx)(D,{className:x.bar2,ownerState:v,style:N.bar2})]}))}));a.a=T},657:function(e,a,t){"use strict";a.a=t.p+"static/media/Showpass-show.ab5421f5.svg"},658:function(e,a,t){"use strict";a.a=t.p+"static/media/Hide.31c620fc.svg"}}]);
//# sourceMappingURL=32.eb32690d.chunk.js.map