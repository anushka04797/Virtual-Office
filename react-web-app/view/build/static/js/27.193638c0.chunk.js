(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[27],{1045:function(e,s,a){},1046:function(e,s,a){},1121:function(e,s,a){"use strict";a.r(s);var t=a(33),l=a(504),c=a(498),n=a(524),i=a(0),o=(a(1045),a(1046),a(613)),r=a(614),d=a(3),m=a(96),j=a(529),u=a(8),b=a(112),h=a(514),p=a.n(h),f=a(11);s.default=function(){var e,s,a=Object(f.i)().id,h=Object(i.useState)(!1),O=Object(t.a)(h,2),x=O[0],g=O[1],v=Object(i.useState)(!1),N=Object(t.a)(v,2),w=N[0],_=N[1],C=Object(i.useState)(!1),y=Object(t.a)(C,2),P=y[0],S=y[1],k=Object(i.useState)(),B=Object(t.a)(k,2),F=B[0],A=B[1],I=Object(i.useState)(""),z=Object(t.a)(I,2),E=z[0],U=z[1],R=Object(i.useRef)(null),V=Object(i.useState)(),q=Object(t.a)(V,2),H=(q[0],q[1]),J=Object(i.useState)(F?u.b+F.profile_pic:"avatars/user-avatar-default.png"),L=Object(t.a)(J,2),D=L[0],G=L[1],T=Object(i.useState)(!1),Y=Object(t.a)(T,2),K=Y[0],M=Y[1],Q=Object(m.b)(),W=function(){console.log("values"),M(!K),$.setValues({first_name:F.first_name,last_name:F.last_name,email:F.email,phone:F.phone,address:F.address,blood_group:F.blood_group})},X=Object(j.a)({initialValues:{old_password:"",new_password:"",new_password_confirm:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var s={};return e.old_password||(s.old_password="Old Password Required"),(String(e.new_password).length<8||!e.new_password||e.new_password!=e.new_password_confirm)&&(s.new_password="Invalid New Password"),s},onSubmit:function(e){var s=new FormData;console.log("values",e);for(var a=0,l=Object.entries(X.values);a<l.length;a++){var c=Object(t.a)(l[a],2),n=c[0],i=c[1];"new_password_confirm"!=n&&s.append(n,i)}u.a.put("auth/change/password/",s).then((function(e){console.log(e),200==e.status&&(X.resetForm(),p()("Updated","Your Password has been changed","success"))})).catch((function(e){400==e.response.status&&p()("Incorrect","Bad Request","warning")}))}}),Z=function(e){var s=new FormData;s.append("profile_pic",e),console.log("image",e),u.c.post("auth/change/profile/image/"+sessionStorage.getItem(u.j)+"/",s).then((function(e){201==e.status&&p()("Updated!","Profile Picture Updated","success")})).catch((function(e){400==e.status&&p()("Incorrect","Bad Request","warning")}))};Object(i.useEffect)((function(){}),[]),Object(i.useEffect)((function(){console.log("id from route",a),a&&u.a.get("auth/profile/details/"+a+"/").then((function(e){console.log("res",e.data),A(e.data.data),window.scrollTo(0,0),U({value:e.data.data.blood_group,label:e.data.data.blood_group}),G(e.data.data.profile_pic?u.b+e.data.data.profile_pic:"avatars/user-avatar-default.png")})).catch((function(e){}))}),[a]);var $=Object(j.a)({initialValues:{first_name:"",last_name:"",email:"",phone:"",address:"",blood_group:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var s={};return e.first_name||(s.first_name="First Name is required"),e.last_name||(s.last_name="Last Name is required"),e.email||(s.email="Email is required"),s},onSubmit:function(e){console.log(e),u.a.post("auth/profile/update/"+sessionStorage.getItem(u.j)+"/",$.values).then((function(e){console.log(e),201==e.status&&"True"==e.data.success&&(Q(Object(b.b)(sessionStorage.getItem(u.j))),M(!1),p()("Updated!","Your Profile has been updated","success"))}))}});function ee(e){return void 0!=e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():""}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.B,{closeOnBackdrop:!1,alignment:"center",show:K,onClose:W,children:[Object(d.jsx)(c.D,{closeButton:!0,children:Object(d.jsx)(c.E,{className:"modal-title-profile",children:Object(d.jsx)("span",{className:"edit-profile-form-header",children:"Edit Profile Info"})})}),Object(d.jsx)(c.C,{children:Object(d.jsx)(c.l,{children:Object(d.jsx)(c.t,{children:Object(d.jsxs)(c.J,{children:[Object(d.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userFName",children:"First Name"}),Object(d.jsx)(c.y,{type:"text",name:"first_name",id:"first_name",className:"custom-forminput-6",value:$.values.first_name,onChange:$.handleChange})]}),Object(d.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userLName",children:"Last Name"}),Object(d.jsx)(c.y,{type:"text",name:"last_name",id:"last_name",className:"custom-forminput-6",value:$.values.last_name,onChange:$.handleChange})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"uEmail",children:"Email"}),Object(d.jsx)(c.y,{type:"email",name:"email",id:"email",className:"custom-forminput-6",value:$.values.email,onChange:$.handleChange,readOnly:!0})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"uPhoneNo",children:"Phone"}),Object(d.jsx)(c.y,{type:"tel",name:"phone",id:"phone",value:$.values.phone,onChange:$.handleChange,className:"custom-forminput-6"})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"Address",children:"Address"}),Object(d.jsx)(c.y,{type:"text",name:"address",id:"address",value:$.values.address,onChange:$.handleChange,className:"custom-forminput-6"})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"blood_group",children:"Blood Group"}),Object(d.jsx)(n.a,{id:"blood_group",value:E,onChange:function(e){console.log(e),$.setValues({first_name:$.values.first_name,last_name:$.values.last_name,email:$.values.email,phone:$.values.phone,address:$.values.address,blood_group:e.value}),U({value:e.value,label:e.label})},className:"custom-forminput-6",options:[{value:"A+",label:"A+"},{value:"A-",label:"A-"},{value:"B+",label:"B+"},{value:"B-",label:"B-"},{value:"AB+",label:"AB+"},{value:"AB-",label:"AB-"},{value:"O+",label:"O+"},{value:"O-",label:"O-"}]})]}),Object(d.jsx)("div",{className:"col-md-12 ",children:Object(d.jsxs)("div",{className:"project-form-button-holders mt-3",children:[Object(d.jsx)(c.f,{className:"profile-form-btn update-profile",onClick:$.handleSubmit,type:"button",disabled:!$.isValid,children:"Update Info"}),Object(d.jsx)(c.f,{className:"profile-form-btn cancel-update",type:"reset",onClick:function(){return M(!K)},children:"Cancel"})]})})]})})})})]}),Object(d.jsxs)(c.T,{activeTab:"viewProfile",children:[Object(d.jsxs)(c.F,{variant:"tabs",className:"tab-style",children:[Object(d.jsx)(c.G,{children:Object(d.jsxs)(c.H,{"data-tab":"viewProfile",className:"special",children:[Object(d.jsx)(l.a,{name:"cil-user"})," View Profile"]})}),Object(d.jsx)(c.G,{children:Object(d.jsxs)(c.H,{disabled:(null===F||void 0===F?void 0:F.id)!=sessionStorage.getItem(u.j),"data-tab":"changePassword",className:"special",children:[Object(d.jsx)(l.a,{name:"cil-pen-alt",className:"mr-1"}),"Change Password"]})})]}),Object(d.jsxs)(c.R,{children:[Object(d.jsx)(c.S,{"data-tab":"viewProfile",children:void 0!=F&&Object(d.jsxs)(c.l,{children:[Object(d.jsx)("h3",{className:"profile-page-header",children:"Profile Details"}),Object(d.jsx)(c.J,{children:Object(d.jsx)("div",{className:"col-lg-8 offset-lg-2",children:Object(d.jsxs)(c.g,{className:"card-view-profile mt-3",children:[Object(d.jsxs)("div",{className:"user-profile-pic-div text-center",children:[Object(d.jsx)(c.x,{alt:"click to upload image",className:"mx-auto rounded-circle update-img",src:D}),Object(d.jsx)("input",{style:{display:"none"},ref:R,type:"file",onChange:function(e){!function(e){H(e),G(URL.createObjectURL(e)),Z(e)}(e.target.files[0])}}),F.id==sessionStorage.getItem(u.j)&&Object(d.jsxs)(c.f,{onClick:function(){R.current.click()},type:"button",className:"d-block mx-auto change-img-btn mt-1",children:[" ",Object(d.jsx)(l.a,{name:"cil-camera"})," Change Picture"]})]}),Object(d.jsxs)(c.h,{children:[Object(d.jsx)("hr",{}),F.id==sessionStorage.getItem(u.j)&&Object(d.jsxs)(c.f,{className:"edit-profile mb-3",onClick:function(){return W()},children:[Object(d.jsx)(l.a,{name:"cil-pen",className:"mr-1"}),"Edit Info"]}),Object(d.jsxs)("div",{className:"row justify-content-center",children:[Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:"Full Name"}),Object(d.jsxs)("h5",{className:"profile-details-points child",children:[ee(F.first_name)+" "+ee(F.last_name)," "]})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Email"}),Object(d.jsx)("h5",{className:"profile-details-points-email",children:F.email})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:"Job title"}),Object(d.jsx)("h5",{className:"profile-details-points-email",children:null===F||void 0===F||null===(e=F.slc_details)||void 0===e||null===(s=e.slc)||void 0===s?void 0:s.name})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Phone"}),Object(d.jsxs)("h5",{className:"profile-details-points child",children:["+",F.phone]})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Address"}),Object(d.jsx)("h5",{className:"profile-details-points child",children:F.address})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Blood Group"}),Object(d.jsx)("h5",{className:"profile-details-points child",children:F.blood_group})]})]}),Object(d.jsxs)("div",{className:"all-da-buttons-1",children:[Object(d.jsx)(c.z,{children:"Assigned Projects"}),Array.from([{title:"ABC",work_package_index:"1001"}]).length>0&&Array.from([{title:"ABC",work_package_index:"1001"}]).map((function(e,s){return Object(d.jsxs)(c.f,{type:"button",className:"package-button rounded-pill",onClick:function(){},children:[e.task_title,Object(d.jsx)("span",{className:"tooltiptext",children:e.work_package_index})]},s)}))]})]})]})})})]})}),Object(d.jsx)(c.S,{"data-tab":"changePassword",children:Object(d.jsxs)(c.l,{children:[Object(d.jsx)("h3",{className:"profile-page-header",children:"Change Password"}),Object(d.jsx)(c.J,{children:Object(d.jsx)("div",{className:"col-lg-8 offset-lg-2 col-md-12",children:Object(d.jsx)(c.g,{className:"mt-4 card-change-password",children:Object(d.jsx)(c.h,{children:Object(d.jsxs)(c.t,{children:[Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userOldPass",children:"Old Password"}),Object(d.jsxs)("div",{className:"password-container",children:[Object(d.jsx)(c.y,{type:x?"text":"password",name:"old_password",id:"old_password",className:"custom-forminput-6",value:X.values.old_password,onChange:X.handleChange}),Object(d.jsx)("img",{className:"pwd-container-img",title:x?"Hide Old password":"Show Old password",src:x?o.a:r.a,onClick:function(){return g((function(e){return!e}))}})]})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userNewPass",children:"New Password"}),Object(d.jsxs)("div",{className:"password-container",children:[Object(d.jsx)(c.y,{type:w?"text":"password",name:"new_password",id:"new_password",className:"custom-forminput-6",value:X.values.new_password,onChange:X.handleChange}),Object(d.jsx)("img",{className:"pwd-container-img",title:w?"Hide New password":"Show New password",src:w?o.a:r.a,onClick:function(){return _((function(e){return!e}))}})]})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userConfPass",children:"Confirm Password"}),Object(d.jsxs)("div",{className:"password-container",children:[Object(d.jsx)(c.y,{type:P?"text":"password",name:"new_password_confirm",id:"new_password_confirm",className:"custom-forminput-6",value:X.values.new_password_confirm,onChange:X.handleChange}),Object(d.jsx)("img",{className:"pwd-container-img",title:P?"Hide Confirm password":"Show Confirm password",src:P?o.a:r.a,onClick:function(){return S((function(e){return!e}))}})]})]}),Object(d.jsxs)("div",{className:"project-form-button-holders mt-3",children:[Object(d.jsx)(c.f,{className:"profile-form-btn update-profile",disabled:!X.isValid,type:"button",onClick:X.handleSubmit,children:"Update Password"}),Object(d.jsx)(c.f,{className:"profile-form-btn cancel-update",type:"button",onClick:X.resetForm,children:"Cancel"})]})]})})})})})]})})]})]})]})})}},613:function(e,s,a){"use strict";s.a=a.p+"static/media/Showpass-show.ab5421f5.svg"},614:function(e,s,a){"use strict";s.a=a.p+"static/media/Hide.31c620fc.svg"}}]);
//# sourceMappingURL=27.193638c0.chunk.js.map