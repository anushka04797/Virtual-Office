(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[26],{1e3:function(e,s,a){},1080:function(e,s,a){"use strict";a.r(s);var t=a(33),l=a(495),c=a(492),n=a(513),o=a(0),i=(a(999),a(1e3),a(584)),r=a(585),d=a(3),m=a(94),j=a(516),u=a(8),b=a(110),h=a(503),p=a.n(h),f=a(11);s.default=function(){var e,s,a=Object(f.i)().id,h=Object(o.useState)(!1),O=Object(t.a)(h,2),x=O[0],v=O[1],g=Object(o.useState)(!1),N=Object(t.a)(g,2),w=N[0],_=N[1],C=Object(o.useState)(!1),y=Object(t.a)(C,2),P=y[0],S=y[1],F=Object(o.useState)(),B=Object(t.a)(F,2),k=B[0],A=B[1],I=Object(o.useState)(""),z=Object(t.a)(I,2),E=z[0],U=z[1],q=Object(o.useRef)(null),R=Object(o.useState)(),V=Object(t.a)(R,2),H=(V[0],V[1]),J=Object(o.useState)(k?u.b+k.profile_pic:"avatars/user-avatar-default.png"),L=Object(t.a)(J,2),D=L[0],G=L[1],T=Object(o.useState)(!1),Y=Object(t.a)(T,2),K=Y[0],M=Y[1],Q=Object(m.b)(),W=function(){console.log("values"),M(!K),$.setValues({first_name:k.first_name,last_name:k.last_name,email:k.email,phone:k.phone,address:k.address,blood_group:k.blood_group})},X=Object(j.a)({initialValues:{old_password:"",new_password:"",new_password_confirm:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var s={};return e.old_password||(s.old_password="Old Password Required"),(String(e.new_password).length<8||!e.new_password||e.new_password!=e.new_password_confirm)&&(s.new_password="Invalid New Password"),s},onSubmit:function(e){var s=new FormData;console.log("values",e);for(var a=0,l=Object.entries(X.values);a<l.length;a++){var c=Object(t.a)(l[a],2),n=c[0],o=c[1];"new_password_confirm"!=n&&s.append(n,o)}u.a.put("auth/change/password/",s).then((function(e){console.log(e),200==e.status&&(X.resetForm(),p()("Updated","Your Password has been changed","success"))})).catch((function(e){400==e.response.status&&p()("Incorrect","Bad Request","warning")}))}}),Z=function(e){var s=new FormData;s.append("profile_pic",e),console.log("image",e),u.c.post("auth/change/profile/image/"+sessionStorage.getItem(u.j)+"/",s).then((function(e){201==e.status&&p()("Updated!","Profile Picture Updated","success")})).catch((function(e){400==e.status&&p()("Incorrect","Bad Request","warning")}))};Object(o.useEffect)((function(){}),[]),Object(o.useEffect)((function(){console.log("id from route",a),a&&u.a.get("auth/profile/details/"+a+"/").then((function(e){console.log("res",e.data),A(e.data.data),window.scrollTo(0,0),U({value:e.data.data.blood_group,label:e.data.data.blood_group}),G(e.data.data.profile_pic?u.b+e.data.data.profile_pic:"avatars/user-avatar-default.png")})).catch((function(e){}))}),[a]);var $=Object(j.a)({initialValues:{first_name:"",last_name:"",email:"",phone:"",address:"",blood_group:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var s={};return e.first_name||(s.first_name="First Name is required"),e.last_name||(s.last_name="Last Name is required"),e.email||(s.email="Email is required"),e.address||(s.address="Address is required"),e.blood_group||(s.blood_group="Blood group is required"),s},onSubmit:function(e){console.log(e),u.a.post("auth/profile/update/"+sessionStorage.getItem(u.j)+"/",$.values).then((function(e){console.log(e),201==e.status&&"True"==e.data.success&&(Q(Object(b.b)(sessionStorage.getItem(u.j))),M(!1),p()("Updated!","Your Profile has been updated","success"))}))}});function ee(e){return void 0!=e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():""}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(c.l,{children:[Object(d.jsxs)(c.B,{closeOnBackdrop:!1,alignment:"center",show:K,onClose:W,children:[Object(d.jsx)(c.D,{closeButton:!0,children:Object(d.jsx)(c.E,{className:"modal-title-profile",children:Object(d.jsx)("span",{className:"edit-profile-form-header",children:"Edit Profile Info"})})}),Object(d.jsx)(c.C,{children:Object(d.jsx)(c.l,{children:Object(d.jsx)(c.t,{children:Object(d.jsxs)(c.J,{children:[Object(d.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userFName",children:"First Name *"}),Object(d.jsx)(c.y,{type:"text",name:"first_name",id:"first_name",className:"custom-forminput-6",value:$.values.first_name,onChange:$.handleChange})]}),Object(d.jsxs)("div",{className:"col-md-6 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userLName",children:"Last Name *"}),Object(d.jsx)(c.y,{type:"text",name:"last_name",id:"last_name",className:"custom-forminput-6",value:$.values.last_name,onChange:$.handleChange})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"uEmail",children:"Email *"}),Object(d.jsx)(c.y,{type:"email",name:"email",id:"email",className:"custom-forminput-6",value:$.values.email,onChange:$.handleChange,readOnly:!0})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"uPhoneNo",children:"Phone *"}),Object(d.jsx)(c.y,{type:"tel",name:"phone",id:"phone",value:$.values.phone,onChange:$.handleChange,className:"custom-forminput-6"})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"Address",children:"Address *"}),Object(d.jsx)(c.y,{type:"text",name:"address",id:"address",value:$.values.address,onChange:$.handleChange,className:"custom-forminput-6"}),$.touched.address&&$.errors.address&&Object(d.jsx)("small",{style:{color:"red"},children:$.errors.address})]}),Object(d.jsxs)("div",{className:"col-md-12 mb-3",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"blood_group",children:"Blood Group *"}),Object(d.jsx)(n.a,{id:"blood_group",value:E,onChange:function(e){console.log(e),$.setValues({first_name:$.values.first_name,last_name:$.values.last_name,email:$.values.email,phone:$.values.phone,address:$.values.address,blood_group:e.value}),U({value:e.value,label:e.label})},className:"custom-forminput-6",options:[{value:"A+",label:"A+"},{value:"A-",label:"A-"},{value:"B+",label:"B+"},{value:"B-",label:"B-"},{value:"AB+",label:"AB+"},{value:"AB-",label:"AB-"},{value:"O+",label:"O+"},{value:"O-",label:"O-"}]})]}),Object(d.jsx)("div",{className:"col-md-12 ",children:Object(d.jsxs)("div",{className:"project-form-button-holders mt-3",children:[Object(d.jsx)(c.f,{className:"profile-form-btn update-profile",onClick:$.handleSubmit,type:"button",disabled:!$.isValid,children:"Update Info"}),Object(d.jsx)(c.f,{className:"profile-form-btn cancel-update",type:"reset",onClick:function(){return M(!K)},children:"Cancel"})]})})]})})})})]}),Object(d.jsxs)(c.T,{activeTab:"viewProfile",children:[Object(d.jsxs)(c.F,{variant:"tabs",className:"tab-style",children:[Object(d.jsx)(c.G,{children:Object(d.jsxs)(c.H,{"data-tab":"viewProfile",className:"special",children:[Object(d.jsx)(l.a,{name:"cil-user"})," View Profile"]})}),Object(d.jsx)(c.G,{children:Object(d.jsxs)(c.H,{disabled:(null===k||void 0===k?void 0:k.id)!=sessionStorage.getItem(u.j),"data-tab":"changePassword",className:"special",children:[Object(d.jsx)(l.a,{name:"cil-pen-alt",className:"mr-1"}),"Change Password"]})})]}),Object(d.jsxs)(c.R,{children:[Object(d.jsx)(c.S,{"data-tab":"viewProfile",children:void 0!=k&&Object(d.jsxs)(c.l,{children:[Object(d.jsx)("h3",{className:"profile-page-header",children:"Profile Details"}),Object(d.jsx)(c.J,{children:Object(d.jsx)("div",{className:"col-lg-8 offset-lg-2",children:Object(d.jsxs)(c.g,{className:"card-view-profile mt-3",children:[Object(d.jsxs)("div",{className:"user-profile-pic-div text-center",children:[Object(d.jsx)(c.x,{alt:"click to upload image",className:"mx-auto rounded-circle update-img",src:D}),Object(d.jsx)("input",{style:{display:"none"},ref:q,type:"file",onChange:function(e){!function(e){H(e),G(URL.createObjectURL(e)),Z(e)}(e.target.files[0])}}),k.id==sessionStorage.getItem(u.j)&&Object(d.jsxs)(c.f,{onClick:function(){q.current.click()},type:"button",className:"d-block mx-auto change-img-btn mt-1",children:[" ",Object(d.jsx)(l.a,{name:"cil-camera"})," Change Picture"]})]}),Object(d.jsxs)(c.h,{children:[Object(d.jsx)("hr",{}),k.id==sessionStorage.getItem(u.j)&&Object(d.jsxs)(c.f,{className:"edit-profile mb-3",onClick:function(){return W()},children:[Object(d.jsx)(l.a,{name:"cil-pen",className:"mr-1"}),"Edit Info"]}),Object(d.jsxs)("div",{className:"row justify-content-center",children:[Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:"Full Name"}),Object(d.jsxs)("h5",{className:"profile-details-points child",children:[ee(k.first_name)+" "+ee(k.last_name)," "]})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Email"}),Object(d.jsx)("h5",{className:"profile-details-points-email",children:k.email})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:"Job title"}),Object(d.jsx)("h5",{className:"profile-details-points-email",children:null===k||void 0===k||null===(e=k.slc_details)||void 0===e||null===(s=e.slc)||void 0===s?void 0:s.name})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Phone"}),Object(d.jsxs)("h5",{className:"profile-details-points child",children:["+",k.phone]})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Address"}),Object(d.jsx)("h5",{className:"profile-details-points child",children:k.address})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(d.jsx)("h5",{className:"info-header-1",children:" Blood Group"}),Object(d.jsx)("h5",{className:"profile-details-points child",children:k.blood_group})]})]})]})]})})})]})}),Object(d.jsx)(c.S,{"data-tab":"changePassword",children:Object(d.jsxs)(c.l,{children:[Object(d.jsx)("h3",{className:"profile-page-header",children:"Change Password"}),Object(d.jsx)(c.J,{children:Object(d.jsx)("div",{className:"col-lg-8 offset-lg-2 col-md-12",children:Object(d.jsx)(c.g,{className:"mt-4 card-change-password",children:Object(d.jsx)(c.h,{children:Object(d.jsxs)(c.t,{children:[Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userOldPass",children:"Old Password"}),Object(d.jsxs)("div",{className:"password-container",children:[Object(d.jsx)(c.y,{type:x?"text":"password",name:"old_password",id:"old_password",className:"custom-forminput-6",value:X.values.old_password,onChange:X.handleChange}),Object(d.jsx)("img",{className:"pwd-container-img",title:x?"Hide Old password":"Show Old password",src:x?i.a:r.a,onClick:function(){return v((function(e){return!e}))}})]})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userNewPass",children:"New Password"}),Object(d.jsxs)("div",{className:"password-container",children:[Object(d.jsx)(c.y,{type:w?"text":"password",name:"new_password",id:"new_password",className:"custom-forminput-6",value:X.values.new_password,onChange:X.handleChange}),Object(d.jsx)("img",{className:"pwd-container-img",title:w?"Hide New password":"Show New password",src:w?i.a:r.a,onClick:function(){return _((function(e){return!e}))}})]})]}),Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(c.z,{className:"custom-label-5",htmlFor:"userConfPass",children:"Confirm Password"}),Object(d.jsxs)("div",{className:"password-container",children:[Object(d.jsx)(c.y,{type:P?"text":"password",name:"new_password_confirm",id:"new_password_confirm",className:"custom-forminput-6",value:X.values.new_password_confirm,onChange:X.handleChange}),Object(d.jsx)("img",{className:"pwd-container-img",title:P?"Hide Confirm password":"Show Confirm password",src:P?i.a:r.a,onClick:function(){return S((function(e){return!e}))}})]})]}),Object(d.jsxs)("div",{className:"project-form-button-holders mt-3",children:[Object(d.jsx)(c.f,{className:"profile-form-btn update-profile",disabled:!X.isValid,type:"button",onClick:X.handleSubmit,children:"Update Password"}),Object(d.jsx)(c.f,{className:"profile-form-btn cancel-update",type:"button",onClick:X.resetForm,children:"Cancel"})]})]})})})})})]})})]})]})]})})}},584:function(e,s,a){"use strict";s.a=a.p+"static/media/Showpass-show.ab5421f5.svg"},585:function(e,s,a){"use strict";s.a=a.p+"static/media/Hide.31c620fc.svg"},999:function(e,s,a){}}]);
//# sourceMappingURL=26.445cd387.chunk.js.map