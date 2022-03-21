(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[24],{1108:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(493),c=(t(687),t(928),t(96)),o=t(115),i=t(9),l=t(11),d=t(4),j=function(){var e=Object(l.g)(),a=Object(c.b)(),t=Object(c.c)((function(e){return e.meetings.data}));return s.a.useEffect((function(){a(Object(o.b)(sessionStorage.getItem(i.j)))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"main-holder-projects",children:[Object(d.jsx)("h3",{className:"projectsHeader",children:"Scheduled Meetings"}),Object(d.jsxs)("div",{className:"card-holder1 ",children:[void 0!=t&&t.slice(0,3).map((function(e,a){return Object(d.jsx)(n.g,{className:"project-card2",children:Object(d.jsxs)(n.h,{children:[""!=e.room_id&&Object(d.jsxs)("h6",{className:"id-no1",children:["room id: #",e.room_id]}),""==e.room_id&&Object(d.jsxs)("h6",{className:"id-no1",children:["meeting id: #",e.id]}),Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"Agenda:"})," ",e.agenda]}),Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"Location:"})," ",0==e.medium?"Physical":"Virtual"]}),Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"Scheduled Date & Time :"})," ",e.start_time]})]})},a)})),void 0==t||""==t?Object(d.jsx)(n.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no upcoming meetings"}):Object(d.jsx)(d.Fragment,{})]}),void 0!=t&&Object(d.jsx)("div",{className:"button-holder3",children:Object(d.jsx)(n.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/meetings"})},children:"View all"})})]})})},b=(t(929),t(105),function(){var e=Object(l.g)(),a=Object(c.c)((function(e){return e.evmsList.data}));function t(e,a){return Math.abs(e/a)}return console.log("evms from dashboard",a),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"main-holder-projects",children:[Object(d.jsx)("h3",{className:"projectsHeader",children:"EVMS Summary"}),Object(d.jsxs)("div",{className:"card-holder1",children:[void 0!=a&&Array.from(a).slice(0,3).map((function(e,a){return Object(d.jsx)(n.g,{className:"project-card1",children:Object(d.jsxs)(n.h,{children:[Object(d.jsxs)("h6",{className:"id-no1",children:[e.project.task_delivery_order.title," / ",e.project.sub_task]}),Object(d.jsxs)("h5",{className:"card-details2",children:[Object(d.jsx)("span",{className:"p-header-4",children:"Cost Performance Index (CPI) :"}),Object(d.jsxs)("span",{children:[" ",t(e.earned_value,e.actual_cost)]}),Object(d.jsxs)("small",{className:"ml-1 star-color",children:["*(CPI",">","1, within budget.CPI ","<","1, over budget)"]})]}),Object(d.jsxs)("h5",{className:"card-details2",children:[Object(d.jsx)("span",{className:"p-header-4",children:"Schedule Performance Index (SPI) :"}),Object(d.jsxs)("span",{children:[" ",t(e.earned_value,e.project.planned_value)]}),Object(d.jsxs)("small",{className:"ml-1 star-color",children:["*(SPI ",">","1, within schedule,SPI ","<","1, behind schedule)"]})]})]})},a)})),void 0==a||0==a?Object(d.jsx)(n.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no projects assigned to you"}):null]}),void 0!=a&&Object(d.jsx)("div",{className:"button-holder3",children:Object(d.jsx)(n.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/EVMS/view"})},children:"View all"})})]})})}),u=(t(930),function(){var e=Object(l.g)(),a=(Object(c.b)(),Object(c.c)((function(e){return e.projects.data})));return Object(r.useEffect)((function(){console.log("ProjectsList",a)}),[a]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"main-holder-projects",children:[Object(d.jsx)("h3",{className:"projectsHeader",children:"Assigned Projects"}),Object(d.jsxs)("div",{className:"card-holder1",children:[void 0!=a&&Array.from(a).slice(0,3).map((function(a,t){return Object(d.jsx)(n.g,{className:"project-card1",onClick:function(){return e.push({pathname:"dashboard/Projects/assigned-projects/details/"+a.project.work_package_number+"/"})},children:Object(d.jsxs)(n.h,{children:[Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"Project Name: "})," ",a.project.sub_task]}),Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"Planned Hours: "})," ",a.project.planned_hours]}),Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"Remaining Hours: "})," ",a.project.remaining_hours]}),Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"Planned Delivery Date : "}),a.project.planned_delivery_date]})]})},t)})),""==a||void 0==a?Object(d.jsx)(n.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no projects assigned to you"}):null]}),void 0!=a&&Object(d.jsx)("div",{className:"button-holder3",children:Object(d.jsx)(n.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/Projects/assigned-projects"})},children:"View all"})})]})})}),m=t(33),h=t(104),O=t(103),p=t(693),v=function(){var e=Object(l.g)(),a=Object(c.b)(),t=Object(c.c)((function(e){var a=[];return e.wbs.data.forEach((function(e){e.assignee.id==sessionStorage.getItem(i.j)&&a.push(e)})),a}));console.log(t);var o=Object(r.useState)([]),j=Object(m.a)(o,2),b=j[0],u=j[1],h=Object(r.useState)(!1),v=Object(m.a)(h,2),f=v[0],g=v[1],x=Object(r.useState)(null),N=Object(m.a)(x,2),w=N[0],_=N[1];return s.a.useEffect((function(){}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"main-holder-projects",children:[Object(d.jsx)("h3",{className:"projectsHeader",children:"WBS List"}),Object(d.jsxs)("div",{className:"card-holder1",children:[void 0!=t&&t.slice(0,3).map((function(e,a){return Object(d.jsx)(n.g,{className:"project-card1",onClick:function(){return a=e.id,i.a.get("wbs/time-card/list/"+a+"/").then((function(e){console.log("time-card list result",e),u(e.data)})),_(t.find((function(e){return e.id==a}))),void g(!0);var a},children:Object(d.jsxs)(n.h,{children:[Object(d.jsxs)("h5",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"Project: "})," ",e.project.sub_task]}),Object(d.jsxs)("h6",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"WBS Title:"})," ",e.title]}),Object(d.jsxs)("h6",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"WBS Description:"})," ",e.description]}),Object(d.jsxs)("h6",{className:"card-details1",children:[Object(d.jsx)("span",{className:"p-header-3",children:"End Date :"})," ",e.end_date]})]})},a)})),void 0==t||0==t?Object(d.jsx)(n.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no WBS assigned to you"}):null]}),void 0!=t&&Object(d.jsx)("div",{className:"button-holder3",children:Object(d.jsx)(n.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/WBS/board"})},children:"View all"})})]}),null!=w&&Object(d.jsx)(p.a,{show:f,onClose:function(){g(!1),a(Object(O.b)(sessionStorage.getItem(i.j))),_(null)},toggle:function(){_(null),g(!f)},data:w,timeCardList:b})]})},f=t(511),g=function(){var e=Object(l.h)(),a=(Object(c.b)(),Object(h.b)()),t=a.enqueueSnackbar;a.closeSnackbar;return s.a.useEffect((function(){var a,r;window.scrollTo(0,0),console.log("dashboard mounted",e.state),"login"==(null===(a=e.state)||void 0===a?void 0:a.from)&&t("Welcome ",{variant:"success"}),(null===(r=e.state)||void 0===r?void 0:r.message)&&(console.log("message",e.state.message),t(e.state.message,{variant:"warning"}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(n.l,{children:Object(d.jsxs)(n.J,{children:[Object(d.jsx)("div",{className:"col-lg-5 offset-lg-1",children:Object(d.jsx)(u,{})}),Object(d.jsx)("div",{className:"col-lg-5",children:Object(d.jsx)(v,{})}),Object(d.jsx)("div",{className:"col-lg-5 offset-lg-1",children:Object(d.jsx)(j,{})}),Object(f.d)("evms.view_evms")&&Object(d.jsx)("div",{className:"col-lg-5 ",children:Object(d.jsx)(b,{})})]})})})};a.default=s.a.memo(g)},559:function(e,a,t){"use strict";var r=t(506),s=t(18),n=t(7),c=t(0),o=t(24),i=t(480),l=t(53),d=t(478),j=t(40),b=t(54),u=t(37),m=t(50),h=t(305),O=t(481);function p(e){return Object(h.a)("MuiLinearProgress",e)}Object(O.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var v,f,g,x,N,w,_,y,C,k,S,P,I=t(4),B=["className","color","value","valueBuffer","variant"],z=Object(l.e)(_||(_=v||(v=Object(r.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),L=Object(l.e)(y||(y=f||(f=Object(r.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),V=Object(l.e)(C||(C=g||(g=Object(r.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),D=function(e,a){return"inherit"===a?"currentColor":"light"===e.palette.mode?Object(d.e)(e.palette[a].main,.62):Object(d.b)(e.palette[a].main,.5)},M=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a["color".concat(Object(j.a)(t.color))],a[t.variant]]}})((function(e){var a=e.ownerState,t=e.theme;return Object(n.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:D(t,a.color)},"inherit"===a.color&&"buffer"!==a.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===a.variant&&{backgroundColor:"transparent"},"query"===a.variant&&{transform:"rotate(180deg)"})})),q=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,a){var t=e.ownerState;return[a.dashed,a["dashedColor".concat(Object(j.a)(t.color))]]}})((function(e){var a=e.ownerState,t=e.theme,r=D(t,a.color);return Object(n.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===a.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(l.c)(k||(k=x||(x=Object(r.a)(["\n    animation: "," 3s infinite linear;\n  "]))),V)),F=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,a){var t=e.ownerState;return[a.bar,a["barColor".concat(Object(j.a)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&a.bar1Indeterminate,"determinate"===t.variant&&a.bar1Determinate,"buffer"===t.variant&&a.bar1Buffer]}})((function(e){var a=e.ownerState,t=e.theme;return Object(n.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===a.color?"currentColor":t.palette[a.color].main},"determinate"===a.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===a.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var a=e.ownerState;return("indeterminate"===a.variant||"query"===a.variant)&&Object(l.c)(S||(S=N||(N=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),z)})),J=Object(u.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,a){var t=e.ownerState;return[a.bar,a["barColor".concat(Object(j.a)(t.color))],("indeterminate"===t.variant||"query"===t.variant)&&a.bar2Indeterminate,"buffer"===t.variant&&a.bar2Buffer]}})((function(e){var a=e.ownerState,t=e.theme;return Object(n.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==a.variant&&{backgroundColor:"inherit"===a.color?"currentColor":t.palette[a.color].main},"inherit"===a.color&&{opacity:.3},"buffer"===a.variant&&{backgroundColor:D(t,a.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var a=e.ownerState;return("indeterminate"===a.variant||"query"===a.variant)&&Object(l.c)(P||(P=w||(w=Object(r.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),L)})),A=c.forwardRef((function(e,a){var t=Object(m.a)({props:e,name:"MuiLinearProgress"}),r=t.className,c=t.color,l=void 0===c?"primary":c,d=t.value,u=t.valueBuffer,h=t.variant,O=void 0===h?"indeterminate":h,v=Object(s.a)(t,B),f=Object(n.a)({},t,{color:l,variant:O}),g=function(e){var a=e.classes,t=e.variant,r=e.color,s={root:["root","color".concat(Object(j.a)(r)),t],dashed:["dashed","dashedColor".concat(Object(j.a)(r))],bar1:["bar","barColor".concat(Object(j.a)(r)),("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&"barColor".concat(Object(j.a)(r)),"buffer"===t&&"color".concat(Object(j.a)(r)),("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return Object(i.a)(s,p,a)}(f),x=Object(b.a)(),N={},w={bar1:{},bar2:{}};if("determinate"===O||"buffer"===O)if(void 0!==d){N["aria-valuenow"]=Math.round(d),N["aria-valuemin"]=0,N["aria-valuemax"]=100;var _=d-100;"rtl"===x.direction&&(_=-_),w.bar1.transform="translateX(".concat(_,"%)")}else 0;if("buffer"===O)if(void 0!==u){var y=(u||0)-100;"rtl"===x.direction&&(y=-y),w.bar2.transform="translateX(".concat(y,"%)")}else 0;return Object(I.jsxs)(M,Object(n.a)({className:Object(o.default)(g.root,r),ownerState:f,role:"progressbar"},N,{ref:a},v,{children:["buffer"===O?Object(I.jsx)(q,{className:g.dashed,ownerState:f}):null,Object(I.jsx)(F,{className:g.bar1,ownerState:f,style:w.bar1}),"determinate"===O?null:Object(I.jsx)(J,{className:g.bar2,ownerState:f,style:w.bar2})]}))}));a.a=A},693:function(e,a,t){"use strict";var r=t(2),s=t(33),n=t(493),c=t(0),o=t(96),i=t(525),l=t(9),d=t(510),j=t.n(d),b=t(99),u=t(103),m=t(559),h=t(4);a.a=function(e){var a,t,d,O,p;console.log("props wbs modal: ",e);var v=Object(c.useState)(!0),f=Object(s.a)(v,2),g=f[0],x=f[1],N=Object(c.useState)(!0),w=Object(s.a)(N,2),_=w[0],y=w[1],C=Object(o.b)(),k=Object(i.a)({initialValues:{project:e.data.project.id,assignee:e.data.assignee.id,title:e.data.title,status:e.data.status,description:e.data.description,start_date:e.data.start_date,end_date:e.data.end_date,hours_worked:e.data.hours_worked,progress:e.data.progress,comments:e.data.comments,deliverable:e.data.deliverable,date_updated:"",actual_work_done:"",remaining_hours:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var a={};return e.title||(a.title="Title is required!"),e.actual_work_done||(a.actual_work_done="Actual work done today is required! (250 charracters)"),a},onSubmit:function(a){return t=a,console.log("formWbsUpdate:",t.remaining_hours),t.remaining_hours=e.data.project.remaining_hours-k.values.hours_worked,void l.a.put("wbs/update/"+e.data.id+"/",k.values).then((function(a){console.log("update result",a),200==a.status&&"True"==a.data.success&&(C(Object(b.c)(sessionStorage.getItem(l.j))),C(Object(b.d)(sessionStorage.getItem(l.j))),C(Object(u.b)(sessionStorage.getItem(l.j))),j()({title:"Good job!",text:a.data.message,icon:"success"}),e.onClose())}));var t}});return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(n.B,(p={closeOnBackdrop:!1},Object(r.a)(p,"closeOnBackdrop",!1),Object(r.a)(p,"show",e.show),Object(r.a)(p,"onClose",e.toggle),Object(r.a)(p,"size","xl"),Object(r.a)(p,"children",[Object(h.jsxs)(n.D,{closeButton:!0,children:[e.data.project&&e.data.project.task_delivery_order.title+" / ",e.data.project&&e.data.project.sub_task+" / ",e.data.project&&e.data.project.task_title]}),Object(h.jsx)(n.C,{children:Object(h.jsxs)(n.J,{children:[Object(h.jsx)("div",{className:"col-lg-8 mb-3 border-right",children:Object(h.jsxs)(n.t,{children:[Object(h.jsx)(n.J,{children:Object(h.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-wbs5",children:"Title"}),Object(h.jsx)(n.y,{id:"title",name:"title",className:"custom-forminput-5",onChange:k.handleChange,value:k.values.title}),k.errors.title&&Object(h.jsx)("p",{className:"error",style:{fontSize:"14px !important"},children:k.errors.title})]})}),Object(h.jsx)(n.J,{children:Object(h.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-wbs5",children:"Descriptions"}),Object(h.jsx)(n.U,{id:"description",name:"description",className:"custom-forminput-5 text-box-height",onChange:k.handleChange,value:k.values.description})]})}),Object(h.jsxs)(n.J,{children:[Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-wbs5",children:"Start date"}),Object(h.jsx)(n.y,{id:"start_date",name:"start_date",type:"date",className:"custom-forminput-5",onChange:k.handleChange,value:k.values.start_date})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-wbs5",children:"End date"}),Object(h.jsx)(n.y,{id:"end_date",name:"end_date",type:"date",className:"custom-forminput-5",onChange:k.handleChange,value:k.values.end_date})]})]}),Object(h.jsx)(n.J,{children:Object(h.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-wbs5",children:"Actual Work Today"}),Object(h.jsx)(n.y,{id:"actual_work_done",type:"text",name:"actual_work_done",className:"custom-forminpput-5",onChange:function(e){k.setFieldValue("actual_work_done",e.target.value),null==e.target.value||0==e.target.value.length?y(!0):y(!1)},value:k.values.actual_work_done}),k.errors.actual_work_done&&Object(h.jsx)("p",{className:"error",style:{fontSize:"14px !important"},children:k.errors.actual_work_done})]})}),Object(h.jsxs)(n.J,{children:[Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-wbs5",children:"Hours worked"}),Object(h.jsx)(n.y,{id:"hours_worked",name:"hours_worked",type:"number",className:"custom-forminput-5",onChange:k.handleChange,value:k.values.hours_worked,disabled:_})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-wbs5",children:"Progress(%)"}),Object(h.jsx)(n.y,{id:"progress",name:"progress",type:"number",max:"100",className:"custom-forminput-5",onChange:function(e){k.setFieldValue("progress",e.target.value),"100"==e.target.value?(x(!1),k.setFieldValue("deliverable",k.values.deliverable)):(x(!0),k.setFieldValue("deliverable",""))},value:k.values.progress})]})]}),Object(h.jsx)(n.J,{children:Object(h.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-wbs5",children:"Comments"}),Object(h.jsx)(n.U,{id:"comments",name:"comments",className:"custom-forminput-5",onChange:k.handleChange,value:k.values.comments})]})}),Object(h.jsx)(n.J,{children:Object(h.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-wbs5",children:"Deliverable"}),Object(h.jsx)(n.y,{id:"deliverable",name:"deliverable",className:"custom-forminput-5",onChange:k.handleChange,value:k.values.deliverable,disabled:g})]})}),e.data.assignee.id==sessionStorage.getItem(l.j)&&Object(h.jsx)("div",{children:1==(console.log(k.isSubmitting,k.isValidating),!(!k.isSubmitting||k.isValidating))?Object(h.jsx)(m.a,{}):Object(h.jsxs)("div",{children:[Object(h.jsx)(n.f,{type:"button",onClick:k.handleSubmit,color:"primary",children:"Update"})," ",Object(h.jsx)(n.f,{color:"secondary",onClick:e.toggle,children:"Cancel"})]})})]})}),Object(h.jsx)("div",{className:"col-lg-4 mb-3",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Assignee:",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"wbs-reporter-name",children:void 0!=(null===(a=e.data.assignee)||void 0===a?void 0:a.first_name)&&e.data.assignee.first_name+" "+e.data.assignee.last_name})]}),Object(h.jsxs)("p",{children:["Reporter:",Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"wbs-reporter-name",children:void 0!=(null===(t=e.data.reporter)||void 0===t?void 0:t.first_name)&&e.data.reporter.first_name+" "+e.data.reporter.last_name})]}),Object(h.jsxs)("p",{children:["Remaining hours:",Object(h.jsx)("br",{}),null===(d=e.data.project)||void 0===d?void 0:d.remaining_hours]}),Object(h.jsxs)("div",{className:"task-list",children:[Object(h.jsx)("p",{children:"Task List:"}),Object(h.jsx)("ol",{className:"task-list-show",children:void 0!=(null===(O=e.timeCardList)||void 0===O?void 0:O.data)?Array.from(e.timeCardList.data).map((function(e){return Object(h.jsxs)("li",{className:"task-list-show-item",children:[e.actual_work_done+" \u27a4 "+e.hours_today+" hr(s)",Object(h.jsx)("p",{children:Object(h.jsxs)("small",{children:["@ ",e.date_updated," "]})})]})})):"No task has been done so far."})]})]})})]})})]),p))})}},928:function(e,a,t){},929:function(e,a,t){},930:function(e,a,t){}}]);
//# sourceMappingURL=24.454307b7.chunk.js.map