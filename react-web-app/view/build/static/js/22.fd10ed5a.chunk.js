(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[22],{635:function(e,t,a){"use strict";var s=a(2),c=a(33),n=a(484),r=a(0),i=a(93),l=a(509),o=a(9),d=a(501),j=a.n(d),b=a(97),h=a(104),u=a(537),m=a(4);t.a=function(e){var t,a,d,p,O;console.log("props wbs modal: ",e);var g=Object(r.useState)(!0),x=Object(c.a)(g,2),v=x[0],f=x[1],N=Object(r.useState)(!0),w=Object(c.a)(N,2),_=w[0],k=w[1],C=Object(i.b)(),S=Object(l.a)({initialValues:{project:e.data.project.id,assignee:e.data.assignee.id,title:e.data.title,status:e.data.status,description:e.data.description,start_date:e.data.start_date,end_date:e.data.end_date,hours_worked:e.data.hours_worked,progress:e.data.progress,comments:e.data.comments,deliverable:e.data.deliverable,date_updated:"",actual_work_done:"",remaining_hours:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var t={};return e.title||(t.title="Title is required!"),e.actual_work_done||(t.actual_work_done="Actual work done today is required! (250 charracters)"),t},onSubmit:function(t){return a=t,console.log("formWbsUpdate:",a.remaining_hours),a.remaining_hours=e.data.project.remaining_hours-S.values.hours_worked,void o.a.put("wbs/update/"+e.data.id+"/",S.values).then((function(t){console.log("update result",t),200==t.status&&"True"==t.data.success&&(C(Object(b.c)(sessionStorage.getItem(o.j))),C(Object(b.d)(sessionStorage.getItem(o.j))),C(Object(h.b)(sessionStorage.getItem(o.j))),j()({title:"Good job!",text:t.data.message,icon:"success"}),e.onClose())}));var a}});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(n.z,(O={closeOnBackdrop:!1},Object(s.a)(O,"closeOnBackdrop",!1),Object(s.a)(O,"show",e.show),Object(s.a)(O,"onClose",e.toggle),Object(s.a)(O,"size","xl"),Object(s.a)(O,"children",[Object(m.jsxs)(n.B,{closeButton:!0,children:[e.data.project&&e.data.project.task_delivery_order.title+" / ",e.data.project&&e.data.project.sub_task+" / ",e.data.project&&e.data.project.task_title]}),Object(m.jsx)(n.A,{children:Object(m.jsxs)(n.H,{children:[Object(m.jsx)("div",{className:"col-lg-8 mb-3 border-right",children:Object(m.jsxs)(n.s,{children:[Object(m.jsx)(n.H,{children:Object(m.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(m.jsx)(n.x,{className:"custom-label-wbs5",children:"Title"}),Object(m.jsx)(n.w,{id:"title",name:"title",className:"custom-forminput-5",onChange:S.handleChange,value:S.values.title}),S.errors.title&&Object(m.jsx)("p",{className:"error",style:{fontSize:"14px !important"},children:S.errors.title})]})}),Object(m.jsx)(n.H,{children:Object(m.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(m.jsx)(n.x,{className:"custom-label-wbs5",children:"Descriptions"}),Object(m.jsx)(n.S,{id:"description",name:"description",className:"custom-forminput-5 text-box-height",onChange:S.handleChange,value:S.values.description})]})}),Object(m.jsxs)(n.H,{children:[Object(m.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(m.jsx)(n.x,{className:"custom-label-wbs5",children:"Start date"}),Object(m.jsx)(n.w,{id:"start_date",name:"start_date",type:"date",className:"custom-forminput-5",onChange:S.handleChange,value:S.values.start_date})]}),Object(m.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(m.jsx)(n.x,{className:"custom-label-wbs5",children:"End date"}),Object(m.jsx)(n.w,{id:"end_date",name:"end_date",type:"date",className:"custom-forminput-5",onChange:S.handleChange,value:S.values.end_date})]})]}),Object(m.jsx)(n.H,{children:Object(m.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(m.jsx)(n.x,{className:"custom-label-wbs5",children:"Actual Work Today"}),Object(m.jsx)(n.w,{id:"actual_work_done",type:"text",name:"actual_work_done",className:"custom-forminpput-5",onChange:function(e){S.setFieldValue("actual_work_done",e.target.value),null==e.target.value||0==e.target.value.length?k(!0):k(!1)},value:S.values.actual_work_done}),S.errors.actual_work_done&&Object(m.jsx)("p",{className:"error",style:{fontSize:"14px !important"},children:S.errors.actual_work_done})]})}),Object(m.jsxs)(n.H,{children:[Object(m.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(m.jsx)(n.x,{className:"custom-label-wbs5",children:"Hours worked"}),Object(m.jsx)(n.w,{id:"hours_worked",name:"hours_worked",type:"number",className:"custom-forminput-5",onChange:S.handleChange,value:S.values.hours_worked,disabled:_})]}),Object(m.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(m.jsx)(n.x,{className:"custom-label-wbs5",children:"Progress(%)"}),Object(m.jsx)(n.w,{id:"progress",name:"progress",type:"number",max:"100",className:"custom-forminput-5",onChange:function(e){S.setFieldValue("progress",e.target.value),"100"==e.target.value?(f(!1),S.setFieldValue("deliverable",S.values.deliverable)):(f(!0),S.setFieldValue("deliverable",""))},value:S.values.progress})]})]}),Object(m.jsx)(n.H,{children:Object(m.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(m.jsx)(n.x,{className:"custom-label-wbs5",children:"Comments"}),Object(m.jsx)(n.S,{id:"comments",name:"comments",className:"custom-forminput-5",onChange:S.handleChange,value:S.values.comments})]})}),Object(m.jsx)(n.H,{children:Object(m.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(m.jsx)(n.x,{className:"custom-label-wbs5",children:"Deliverable"}),Object(m.jsx)(n.w,{id:"deliverable",name:"deliverable",className:"custom-forminput-5",onChange:S.handleChange,value:S.values.deliverable,disabled:v})]})}),e.data.assignee.id==sessionStorage.getItem(o.j)&&Object(m.jsx)("div",{children:1==(console.log(S.isSubmitting,S.isValidating),!(!S.isSubmitting||S.isValidating))?Object(m.jsx)(u.a,{}):Object(m.jsxs)("div",{children:[Object(m.jsx)(n.f,{type:"button",onClick:S.handleSubmit,color:"primary",children:"Update"})," ",Object(m.jsx)(n.f,{color:"secondary",onClick:e.toggle,children:"Cancel"})]})})]})}),Object(m.jsx)("div",{className:"col-lg-4 mb-3",children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Assignee:",Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"wbs-reporter-name",children:void 0!=(null===(t=e.data.assignee)||void 0===t?void 0:t.first_name)&&e.data.assignee.first_name+" "+e.data.assignee.last_name})]}),Object(m.jsxs)("p",{children:["Reporter:",Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"wbs-reporter-name",children:void 0!=(null===(a=e.data.reporter)||void 0===a?void 0:a.first_name)&&e.data.reporter.first_name+" "+e.data.reporter.last_name})]}),Object(m.jsxs)("p",{children:["Remaining hours:",Object(m.jsx)("br",{}),null===(d=e.data.project)||void 0===d?void 0:d.remaining_hours]}),Object(m.jsxs)("div",{className:"task-list",children:[Object(m.jsx)("p",{children:"Task List:"}),Object(m.jsx)("ol",{className:"task-list-show",children:void 0!=(null===(p=e.timeCardList)||void 0===p?void 0:p.data)?Array.from(e.timeCardList.data).map((function(e){return Object(m.jsxs)("li",{className:"task-list-show-item",children:[e.actual_work_done+" \u27a4 "+e.hours_today+" hr(s)",Object(m.jsx)("p",{children:Object(m.jsxs)("small",{children:["@ ",e.date_updated," "]})})]})})):"No task has been done so far."})]})]})})]})})]),O))})}},807:function(e,t,a){},813:function(e,t,a){},814:function(e,t,a){},815:function(e,t,a){},999:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(33),r=a(13),i=a(485),l=a(1076),o=a(93),d=(a(111),a(135),a(11)),j=a(9),b=a(2),h=a(469),u=(a(1075),a(1079),a(1005),a(1068)),m=(a(1071),a(1072),a(1069),a(805),a(692),a(803),a(804),a(806),a(4));Object(i.a)(l.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(r.a)({backgroundColor:"#fff",zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},a&&{marginLeft:j.k,width:"calc(100% - ".concat(j.k,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),Object(i.a)("div")((function(e){var t=e.theme;return Object(b.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(h.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(h.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),Object(i.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),Object(i.a)(u.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(b.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}}));Object(i.a)(l.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(r.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},a&&{marginLeft:j.k,width:"calc(100% - ".concat(j.k,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})}));var p=a(1065),O=(a(547),a(1073)),g=(a(1078),a(1080),a(808),a(809),a(1070),a(1064),a(1074),a.p,a(811),a(810),a(812),a(807),function(e){return{width:j.k,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}}),x=function(e){return Object(b.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)")},e.breakpoints.up("sm"),{width:"calc(".concat(e.spacing(8)," + 1px)")})};Object(i.a)("div")((function(e){var t=e.theme;return Object(r.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)})),Object(i.a)("div")((function(e){var t=e.theme;return Object(r.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",marginBottom:"0px",padding:t.spacing(0,1)},t.mixins.toolbar)})),Object(i.a)(O.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,a=e.open;return Object(r.a)(Object(r.a)({width:j.k,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},a&&Object(r.a)(Object(r.a)({},g(t)),{},{"& .MuiDrawer-paper":g(t)})),!a&&Object(r.a)(Object(r.a)({},x(t)),{},{"& .MuiDrawer-paper":x(t)}))})),Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:"theme.palette.background.paper"},nested:{paddingLeft:" theme.spacing(4)"}}}));var v=a(484),f=(a(632),a(813),a(115)),N=function(){var e=Object(d.g)(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.meetings.data}));return c.a.useEffect((function(){t(Object(f.b)(sessionStorage.getItem(j.j)))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"main-holder-projects",children:[Object(m.jsx)("h3",{className:"projectsHeader",children:"Scheduled Meetings"}),Object(m.jsxs)("div",{className:"card-holder1 ",children:[void 0!=a&&a.slice(0,3).map((function(e,t){return Object(m.jsx)(v.g,{className:"project-card2",children:Object(m.jsxs)(v.h,{children:[""!=e.room_id&&Object(m.jsxs)("h6",{className:"id-no1",children:["room id: #",e.room_id]}),""==e.room_id&&Object(m.jsxs)("h6",{className:"id-no1",children:["meeting id: #",e.id]}),Object(m.jsxs)("h5",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"Agenda:"})," ",e.agenda]}),Object(m.jsxs)("h5",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"Location:"})," ",0==e.medium?"Physical":"Virtual"]}),Object(m.jsxs)("h5",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"Scheduled Date & Time :"})," ",e.start_time]})]})},t)})),void 0==a||""==a?Object(m.jsx)(v.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no upcoming meetings"}):Object(m.jsx)(m.Fragment,{})]}),void 0!=a&&Object(m.jsx)("div",{className:"button-holder3",children:Object(m.jsx)(v.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/meetings"})},children:"View all"})})]})})},w=(a(814),a(108),function(){var e=Object(d.g)(),t=Object(o.c)((function(e){return e.evmsList.data}));function a(e,t){return Math.abs(e/t)}return console.log("evms from dashboard",t),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"main-holder-projects",children:[Object(m.jsx)("h3",{className:"projectsHeader",children:"EVMS Summary"}),Object(m.jsxs)("div",{className:"card-holder1",children:[void 0!=t&&Array.from(t).slice(0,3).map((function(e,t){return Object(m.jsx)(v.g,{className:"project-card1",children:Object(m.jsxs)(v.h,{children:[Object(m.jsxs)("h6",{className:"id-no1",children:[e.project.task_delivery_order.title," / ",e.project.sub_task]}),Object(m.jsxs)("h5",{className:"card-details2",children:[Object(m.jsx)("span",{className:"p-header-4",children:"Cost Performance Index (CPI) :"}),Object(m.jsxs)("span",{children:[" ",a(e.earned_value,e.actual_cost)]}),Object(m.jsxs)("small",{className:"ml-1 star-color",children:["*(CPI",">","1, within budget.CPI ","<","1, over budget)"]})]}),Object(m.jsxs)("h5",{className:"card-details2",children:[Object(m.jsx)("span",{className:"p-header-4",children:"Schedule Performance Index (SPI) :"}),Object(m.jsxs)("span",{children:[" ",a(e.earned_value,e.project.planned_value)]}),Object(m.jsxs)("small",{className:"ml-1 star-color",children:["*(SPI ",">","1, within schedule,SPI ","<","1, behind schedule)"]})]})]})},t)})),void 0==t||0==t?Object(m.jsx)(v.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no projects assigned to you"}):null]}),void 0!=t&&Object(m.jsx)("div",{className:"button-holder3",children:Object(m.jsx)(v.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/EVMS/view"})},children:"View all"})})]})})}),_=(a(815),function(){var e=Object(d.g)(),t=(Object(o.b)(),Object(o.c)((function(e){return e.projects.data})));return Object(s.useEffect)((function(){console.log("ProjectsList",t)}),[t]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"main-holder-projects",children:[Object(m.jsx)("h3",{className:"projectsHeader",children:"Assigned Projects"}),Object(m.jsxs)("div",{className:"card-holder1",children:[void 0!=t&&Array.from(t).slice(0,3).map((function(t,a){return Object(m.jsx)(v.g,{className:"project-card1",onClick:function(){return e.push({pathname:"dashboard/Projects/assigned-projects/details/"+t.project.work_package_number+"/"})},children:Object(m.jsxs)(v.h,{children:[Object(m.jsxs)("h5",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"Project Name: "})," ",t.project.sub_task]}),Object(m.jsxs)("h5",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"Planned Hours: "})," ",t.project.planned_hours]}),Object(m.jsxs)("h5",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"Remaining Hours: "})," ",t.project.remaining_hours]}),Object(m.jsxs)("h5",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"Planned Delivery Date : "}),t.project.planned_delivery_date]})]})},a)})),""==t||void 0==t?Object(m.jsx)(v.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no projects assigned to you"}):null]}),void 0!=t&&Object(m.jsx)("div",{className:"button-holder3",children:Object(m.jsx)(v.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/Projects/assigned-projects"})},children:"View all"})})]})})}),k=a(105),C=a(104),S=a(635),y=function(){var e=Object(d.g)(),t=Object(o.b)(),a=Object(o.c)((function(e){var t=[];return e.wbs.data.forEach((function(e){e.assignee.id==sessionStorage.getItem(j.j)&&(t.push(e),console.log(e))})),t}));console.log(a);var r=Object(s.useState)([]),i=Object(n.a)(r,2),l=i[0],b=i[1],h=Object(s.useState)(!1),u=Object(n.a)(h,2),p=u[0],O=u[1],g=Object(s.useState)(null),x=Object(n.a)(g,2),f=x[0],N=x[1];return c.a.useEffect((function(){}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"main-holder-projects",children:[Object(m.jsx)("h3",{className:"projectsHeader",children:"WBS List"}),Object(m.jsxs)("div",{className:"card-holder1",children:[void 0!=a&&a.slice(0,3).map((function(e,t){return Object(m.jsx)(v.g,{className:"project-card1",onClick:function(){return t=e.id,j.a.get("wbs/time-card/list/"+t+"/").then((function(e){console.log("time-card list result",e),b(e.data)})),N(a.find((function(e){return e.id==t}))),void O(!0);var t},children:Object(m.jsxs)(v.h,{children:[Object(m.jsxs)("h5",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"Project: "})," ",e.project.sub_task]}),Object(m.jsxs)("h6",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"WBS Title:"})," ",e.title]}),Object(m.jsxs)("h6",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"WBS Description:"})," ",e.description]}),Object(m.jsxs)("h6",{className:"card-details1",children:[Object(m.jsx)("span",{className:"p-header-3",children:"End Date :"})," ",e.end_date]})]})},t)})),void 0==a||0==a?Object(m.jsx)(v.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no WBS assigned to you"}):null]}),void 0!=a&&Object(m.jsx)("div",{className:"button-holder3",children:Object(m.jsx)(v.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/WBS/board"})},children:"View all"})})]}),null!=f&&Object(m.jsx)(S.a,{show:p,onClose:function(){O(!1),t(Object(C.b)(sessionStorage.getItem(j.j))),N(null)},toggle:function(){N(null),O(!p)},data:f,timeCardList:l})]})},I=a(505),P=function(){var e=Object(d.h)(),t=(Object(o.b)(),Object(k.b)()),a=t.enqueueSnackbar;t.closeSnackbar;return c.a.useEffect((function(){var t;window.scrollTo(0,0),console.log("dashboard mounted"),"login"==(null===(t=e.state)||void 0===t?void 0:t.from)&&a("Welcome ",{variant:"success"})}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v.k,{children:Object(m.jsxs)(v.H,{children:[Object(m.jsx)("div",{className:"col-lg-5 offset-lg-1",children:Object(m.jsx)(_,{})}),Object(m.jsx)("div",{className:"col-lg-5",children:Object(m.jsx)(y,{})}),Object(m.jsx)("div",{className:"col-lg-5 offset-lg-1",children:Object(m.jsx)(N,{})}),Object(I.d)("evms.view_evms")&&Object(m.jsx)("div",{className:"col-lg-5 ",children:Object(m.jsx)(w,{})})]})})})};t.default=c.a.memo(P)}}]);
//# sourceMappingURL=22.fd10ed5a.chunk.js.map