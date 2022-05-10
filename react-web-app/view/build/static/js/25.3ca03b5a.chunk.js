(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[25],{1072:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t.n(a),l=t(490),n=(t(676),t(895),t(95)),r=t(112),d=t(8),o=t(11),i=t(3),j=function(){var e=Object(o.g)(),s=Object(n.b)(),t=Object(n.c)((function(e){return e.meetings.data}));return c.a.useEffect((function(){s(Object(r.b)(sessionStorage.getItem(d.j)))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"main-holder-projects",children:[Object(i.jsx)("h3",{className:"projectsHeader",children:"Scheduled Meetings"}),Object(i.jsxs)("div",{className:"card-holder1 ",children:[void 0!=t&&t.slice(0,3).map((function(e,s){return Object(i.jsx)(l.g,{className:"project-card2",children:Object(i.jsxs)(l.h,{children:[""!=e.room_id&&Object(i.jsxs)("h6",{className:"id-no1",children:["room id: #",e.room_id]}),""==e.room_id&&Object(i.jsxs)("h6",{className:"id-no1",children:["meeting id: #",e.id]}),Object(i.jsxs)("h5",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"Agenda:"})," ",e.agenda]}),Object(i.jsxs)("h5",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"Location:"})," ",0==e.medium?"Physical":"Virtual"]}),Object(i.jsxs)("h5",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"Scheduled Date & Time :"})," ",e.start_time]})]})},s)})),void 0==t||""==t?Object(i.jsx)(l.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no upcoming meetings"}):Object(i.jsx)(i.Fragment,{})]}),void 0!=t&&Object(i.jsx)("div",{className:"button-holder3",children:Object(i.jsx)(l.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/meetings"})},children:"View all"})})]})})},b=(t(896),t(103),function(){var e=Object(o.g)(),s=Object(n.c)((function(e){return e.evmsList.data}));function t(e,s){return Math.abs(e/s)}return console.log("evms from dashboard",s),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"main-holder-projects",children:[Object(i.jsx)("h3",{className:"projectsHeader",children:"EVMS Summary"}),Object(i.jsxs)("div",{className:"card-holder1",children:[void 0!=s&&Array.from(s).slice(0,3).map((function(e,s){return Object(i.jsx)(l.g,{className:"project-card1",children:Object(i.jsxs)(l.h,{children:[Object(i.jsxs)("h6",{className:"id-no1",children:[e.project.task_delivery_order.title," / ",e.project.sub_task]}),Object(i.jsxs)("h5",{className:"card-details2",children:[Object(i.jsx)("span",{className:"p-header-4",children:"Cost Performance Index (CPI) :"}),Object(i.jsxs)("span",{children:[" ",t(e.earned_value,e.actual_cost)]}),Object(i.jsxs)("small",{className:"ml-1 star-color",children:["*(CPI",">","1, within budget.CPI ","<","1, over budget)"]})]}),Object(i.jsxs)("h5",{className:"card-details2",children:[Object(i.jsx)("span",{className:"p-header-4",children:"Schedule Performance Index (SPI) :"}),Object(i.jsxs)("span",{children:[" ",t(e.earned_value,e.project.planned_value)]}),Object(i.jsxs)("small",{className:"ml-1 star-color",children:["*(SPI ",">","1, within schedule,SPI ","<","1, behind schedule)"]})]})]})},s)})),void 0==s||0==s?Object(i.jsx)(l.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no projects assigned to you"}):null]}),void 0!=s&&Object(i.jsx)("div",{className:"button-holder3",children:Object(i.jsx)(l.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/EVMS/view"})},children:"View all"})})]})})}),h=(t(897),function(){var e=Object(o.g)(),s=(Object(n.b)(),Object(n.c)((function(e){return e.projects.data})));return Object(a.useEffect)((function(){console.log("ProjectsList",s)}),[s]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"main-holder-projects",children:[Object(i.jsx)("h3",{className:"projectsHeader",children:"Assigned Projects"}),Object(i.jsxs)("div",{className:"card-holder1",children:[void 0!=s&&Array.from(s).slice(0,3).map((function(s,t){return Object(i.jsx)(l.g,{className:"project-card1",onClick:function(){return e.push({pathname:"dashboard/Projects/assigned-projects/details/"+s.project.work_package_number+"/"})},children:Object(i.jsxs)(l.h,{children:[Object(i.jsxs)("h5",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"Project Name: "})," ",s.project.sub_task]}),Object(i.jsxs)("h5",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"Planned Hours: "})," ",s.project.planned_hours]}),Object(i.jsxs)("h5",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"Remaining Hours: "})," ",s.project.remaining_hours]}),Object(i.jsxs)("h5",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"Planned Delivery Date : "}),s.project.planned_delivery_date]})]})},t)})),""==s||void 0==s?Object(i.jsx)(l.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no projects assigned to you"}):null]}),void 0!=s&&Object(i.jsx)("div",{className:"button-holder3",children:Object(i.jsx)(l.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/Projects/assigned-projects"})},children:"View all"})})]})})}),m=t(33),u=t(99),O=t(101),p=t(682),x=function(){var e=Object(o.g)(),s=Object(n.b)(),t=Object(n.c)((function(e){var s=[];return e.wbs.data.forEach((function(e){e.assignee.id==sessionStorage.getItem(d.j)&&s.push(e)})),s}));console.log(t);var r=Object(a.useState)([]),j=Object(m.a)(r,2),b=j[0],h=j[1],u=Object(a.useState)(!1),x=Object(m.a)(u,2),g=x[0],v=x[1],f=Object(a.useState)(null),N=Object(m.a)(f,2),_=N[0],w=N[1];return c.a.useEffect((function(){}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"main-holder-projects",children:[Object(i.jsx)("h3",{className:"projectsHeader",children:"WBS List"}),Object(i.jsxs)("div",{className:"card-holder1",children:[void 0!=t&&t.slice(0,3).map((function(e,s){return Object(i.jsx)(l.g,{className:"project-card1",onClick:function(){return s=e.id,d.a.get("wbs/time-card/list/"+s+"/").then((function(e){console.log("time-card list result",e),h(e.data)})),w(t.find((function(e){return e.id==s}))),void v(!0);var s},children:Object(i.jsxs)(l.h,{children:[Object(i.jsxs)("h5",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"Project: "})," ",e.project.sub_task]}),Object(i.jsxs)("h6",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"WBS Title:"})," ",e.title]}),Object(i.jsxs)("h6",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"WBS Description:"})," ",e.description]}),Object(i.jsxs)("h6",{className:"card-details1",children:[Object(i.jsx)("span",{className:"p-header-3",children:"End Date :"})," ",e.end_date]})]})},s)})),void 0==t||0==t?Object(i.jsx)(l.a,{className:"no-value-show-alert",color:"primary",children:"Currently there are no WBS assigned to you"}):null]}),void 0!=t&&Object(i.jsx)("div",{className:"button-holder3",children:Object(i.jsx)(l.f,{className:"tiny-buttons1",onClick:function(){return e.push({pathname:"/dashboard/WBS/board"})},children:"View all"})})]}),null!=_&&Object(i.jsx)(p.a,{show:g,onClose:function(){v(!1),s(Object(O.b)(sessionStorage.getItem(d.j))),w(null)},toggle:function(){w(null),v(!g)},data:_,timeCardList:b})]})},g=t(496),v=function(){var e=Object(o.h)(),s=(Object(n.b)(),Object(u.b)()),t=s.enqueueSnackbar;s.closeSnackbar;return c.a.useEffect((function(){var s,a;window.scrollTo(0,0),console.log("dashboard mounted",e.state),"login"==(null===(s=e.state)||void 0===s?void 0:s.from)&&t("Welcome ",{variant:"success"}),null!==(a=e.state)&&void 0!==a&&a.message&&(console.log("message",e.state.message),t(e.state.message,{variant:"warning"}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(l.l,{children:Object(i.jsxs)(l.K,{children:[Object(i.jsx)("div",{className:"col-lg-5 offset-lg-1",children:Object(i.jsx)(h,{})}),Object(i.jsx)("div",{className:"col-lg-5",children:Object(i.jsx)(x,{})}),Object(i.jsx)("div",{className:"col-lg-5 offset-lg-1",children:Object(i.jsx)(j,{})}),Object(g.d)("evms.view_evms")&&Object(i.jsx)("div",{className:"col-lg-5 ",children:Object(i.jsx)(b,{})})]})})})};s.default=c.a.memo(v)},543:function(e,s){},624:function(e,s,t){"use strict";var a=t(19),c=t(33),l=(t(13),t(0)),n=t(490),r=(t(625),t(537),t(95)),d=(t(8),t(496)),o=(t(498),t(538),t(3));s.a=function(e){var s=Object(l.useState)(e.files),t=Object(c.a)(s,2),i=t[0],j=t[1],b=Object(l.useState)([]),h=Object(c.a)(b,2),m=h[0],u=h[1];Object(r.c)((function(e){var s=[];return Array.from(e.projects.data).forEach((function(e,t){s.push({value:e.project.id,label:e.project.task_delivery_order.title+" / "+e.project.sub_task,data:e})})),s}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(n.g,{className:"mt-4 upload-docs",children:Object(o.jsx)(n.h,{children:Object(o.jsxs)(n.l,{children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)(n.z,{htmlFor:"attachments",className:"custom-label-5",children:"Upload Documents"}),Object(o.jsxs)(n.z,{className:"custom-file-upload",children:[Object(o.jsx)(n.y,{type:"file",id:"file",className:"form-control form-control-file",onChange:function(s){return t=s.target.files[0],j([].concat(Object(a.a)(i),[t])),u([].concat(Object(a.a)(m),[URL.createObjectURL(t)])),void e.setFiles([].concat(Object(a.a)(i),[t]));var t},accept:".xlsx, .xls, .csv, .pdf, image/*, application/gzip, .zip, .tar, .txt, .doc, .docx, .pptx, .ppt"}),Object(o.jsx)("img",{src:"assets/icons/upload-thin.svg",alt:"",className:"upload-icon"})]})]}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("div",{className:"row",children:m.map((function(e,s){return Object(o.jsx)("div",{className:"col-md-6 col-sm-6 col-lg-4",children:Object(o.jsxs)("div",{className:"file-attached-ongoing rounded-pill",children:[Object(o.jsx)(n.f,{className:"remove-file-ongoing",type:"button",onClick:function(){var e;e=s,console.log(m),u(Object(d.a)(m,m[e])),j(Object(d.a)(i,i[e]))},children:Object(o.jsx)("img",{src:"assets/icons/icons8-close-64-blue.svg",className:"close-icon-size"})}),i[s].name]})},s)}))})})]})})})})}},625:function(e,s,t){},682:function(e,s,t){"use strict";var a=t(33),c=t(490),l=t(0),n=t(95),r=t(514),d=t(8),o=t(498),i=t.n(o),j=t(97),b=t(101),h=t(561),m=t(99),u=t(72),O=t.n(u),p=t(496),x=t(624),g=t(3);s.a=function(e){var s,o,u;console.log("props wbs modal: ",e);var v=Object(l.useState)(!0),f=Object(a.a)(v,2),N=(f[0],f[1],Object(l.useState)(!0)),_=Object(a.a)(N,2),w=_[0],y=_[1],k=Object(n.b)(),C=Object(m.b)(),S=C.enqueueSnackbar,I=(C.closeSnackbar,Object(l.useState)([])),P=Object(a.a)(I,2),z=P[0],D=P[1],F=Object(r.a)({initialValues:{project:e.data.project.id,assignee:e.data.assignee.id,title:e.data.title,status:e.data.status,description:e.data.description,start_date:e.data.start_date,end_date:e.data.end_date,hours_worked:e.data.hours_worked,progress:e.data.progress,comments:e.data.comments,deliverable:e.data.deliverable,date_updated:"",actual_work_done:"",remaining_hours:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var s={};return e.title||(s.title="Title is required!"),e.actual_work_done||(s.actual_work_done="Actual work done today is required! (250 charracters)"),s},onSubmit:function(s,t){var a=t.setSubmitting;console.log("formWbsUpdate:",e.data);var c=e.data.end_date;console.log("last Date",c);var l=new Date,n="".concat(l.getFullYear(),"-").concat(l.getMonth()+1,"-").concat(l.getDate()).split("-");console.log("cdayyyy",n);var r=c.split("-");console.log("edate",r);var o=O()([parseInt(n[0]),parseInt(n[1]),parseInt(n[2])]),h=O()([parseInt(r[0]),parseInt(r[1])-1,parseInt(r[2])]),m=o.diff(h,"days");console.log("date1",o),console.log("date2",h),console.log("difference",m),m>=0?(s.remaining_hours=e.data.project.remaining_hours-F.values.hours_worked,d.a.put("wbs/update/"+e.data.id+"/",F.values).then((function(s){console.log("update result",s),console.log("data",s.data),console.log("status",s.status),console.log("success",s.data.success),console.log("text",s.data.message),200==s.status&&"True"==s.data.success&&(k(Object(j.c)(sessionStorage.getItem(d.j))),k(Object(j.d)(sessionStorage.getItem(d.j))),k(Object(b.b)(sessionStorage.getItem(d.j))),i()({title:"Good job!",text:s.data.message,icon:"success"}),e.onClose())}))):(a(!1),S("Planned Delivery date is over! ",{variant:"warning"}))}}),L=function(){var s=e.data.start_date,a=e.data.end_date,c=t(72),l=c(a).diff(c(s),"days");console.log("dddddddd",l);var n=24*l;console.log("11111",n),console.log("1",a);var r=new Date(s).toString();console.log("string",r);for(var d=new Date(s),o=0,i=0;i<l;i++)d.setDate(d.getDate()+1),5!=d.getDay()&&6!=d.getDay()||(o+=1);console.log("********************"),n-=o*=24;var j=0;for(var b in e.timeCardList.data)console.log(e.timeCardList.data[b].hours_today),j+=parseInt(e.timeCardList.data[b].hours_today);return console.log("spent",j),{allocated_hours:n,spent_hours:j,remaining_hours:n-j}};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(c.B,{closeOnBackdrop:!1,show:e.show,onClose:e.toggle,size:"xl",children:[Object(g.jsxs)(c.E,{closeButton:!0,children:[e.data.project&&e.data.project.task_delivery_order.title+" / ",e.data.project&&e.data.project.sub_task+" / ",e.data.project&&e.data.project.task_title]}),Object(g.jsx)(c.C,{children:Object(g.jsxs)(c.K,{children:[Object(g.jsx)("div",{className:"col-lg-8 mb-3 border-right",children:Object(g.jsxs)(c.t,{children:[Object(g.jsx)(c.K,{children:Object(g.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(g.jsx)(c.z,{className:"custom-label-wbs5",children:"Title"}),Object(g.jsx)(c.y,{id:"title",name:"title",className:"custom-forminput-5",onChange:F.handleChange,value:F.values.title}),F.errors.title&&Object(g.jsx)("p",{className:"error",style:{fontSize:"14px !important"},children:F.errors.title})]})}),Object(g.jsx)(c.K,{children:Object(g.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(g.jsx)(c.z,{className:"custom-label-wbs5",children:"Descriptions"}),Object(g.jsx)(c.V,{id:"description",name:"description",className:"custom-forminput-5 text-box-height",onChange:F.handleChange,value:F.values.description})]})}),Object(g.jsxs)(c.K,{children:[Object(p.d)("projects.add_projects")&&Object(g.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(g.jsx)(c.z,{className:"custom-label-wbs5",children:"Start date"}),Object(g.jsx)(c.y,{id:"start_date",name:"start_date",type:"date",className:"custom-forminput-5",onChange:F.handleChange,value:F.values.start_date})]}),Object(p.d)("projects.add_projects")&&Object(g.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(g.jsx)(c.z,{className:"custom-label-wbs5",children:"End date"}),Object(g.jsx)(c.y,{id:"end_date",name:"end_date",type:"date",className:"custom-forminput-5",onChange:F.handleChange,value:F.values.end_date})]}),!Object(p.d)("projects.add_projects")&&Object(g.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(g.jsx)(c.z,{className:"custom-label-wbs5",children:"Start date"}),Object(g.jsx)(c.y,{id:"start_date",name:"start_date",type:"date",className:"custom-forminput-5",onChange:F.handleChange,value:F.values.start_date,disabled:!0})]}),!Object(p.d)("projects.add_projects")&&Object(g.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(g.jsx)(c.z,{className:"custom-label-wbs5",children:"End date"}),Object(g.jsx)(c.y,{id:"end_date",name:"end_date",type:"date",className:"custom-forminput-5",onChange:F.handleChange,value:F.values.end_date,disabled:!0})]})]}),Object(g.jsx)(c.K,{children:Object(g.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(g.jsx)(c.z,{className:"custom-label-wbs5",children:"Actual Work Today"}),Object(g.jsx)(c.y,{id:"actual_work_done",type:"text",name:"actual_work_done",className:"custom-forminpput-5",onChange:function(e){F.setFieldValue("actual_work_done",e.target.value),null==e.target.value||0==e.target.value.length?y(!0):y(!1)},value:F.values.actual_work_done}),F.errors.actual_work_done&&Object(g.jsx)("p",{className:"error",style:{fontSize:"14px !important"},children:F.errors.actual_work_done})]})}),Object(g.jsx)(c.K,{children:Object(g.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(g.jsx)(c.z,{className:"custom-label-wbs5",children:"Hours worked"}),Object(g.jsx)(c.y,{id:"hours_worked",name:"hours_worked",type:"number",className:"custom-forminput-5",onChange:F.handleChange,value:F.values.hours_worked,disabled:w})]})}),Object(g.jsx)(c.K,{children:Object(g.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(g.jsx)(c.z,{className:"custom-label-wbs5",children:"Comments"}),Object(g.jsx)(c.V,{id:"comments",name:"comments",className:"custom-forminput-5",onChange:F.handleChange,value:F.values.comments})]})}),Object(g.jsx)(c.K,{children:Object(g.jsx)("div",{className:"col-lg-12",children:Object(g.jsx)(x.a,{files:z,setFiles:function(e){D(e)}})})}),e.data.assignee.id==sessionStorage.getItem(d.j)&&Object(g.jsx)("div",{children:1==(console.log(F.isSubmitting,F.isValidating),L(),!(!F.isSubmitting||F.isValidating))?Object(g.jsx)(h.a,{}):Object(g.jsxs)("div",{children:[Object(g.jsx)(c.f,{type:"button",onClick:F.handleSubmit,color:"primary",children:"Update"})," ",Object(g.jsx)(c.f,{color:"secondary",onClick:e.toggle,children:"Cancel"})]})})]})}),Object(g.jsx)(c.K,{className:"col-lg-4 mb-3",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(c.k,{md:"12",children:Object(g.jsxs)("p",{children:["Assignee:",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"wbs-reporter-name",children:void 0!=(null===(s=e.data.assignee)||void 0===s?void 0:s.first_name)&&e.data.assignee.first_name+" "+e.data.assignee.last_name})]})}),Object(g.jsx)(c.k,{md:"12",children:Object(g.jsxs)("p",{children:["Created By:",Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"wbs-reporter-name",children:void 0!=(null===(o=e.data.reporter)||void 0===o?void 0:o.first_name)&&e.data.reporter.first_name+" "+e.data.reporter.last_name})]})}),Object(g.jsx)(c.k,{md:"12",children:Object(g.jsxs)("p",{className:"custom-label-wbs5",children:["Allocated hours:",Object(g.jsx)("br",{}),L().allocated_hours,"   "]})}),Object(g.jsx)(c.k,{md:"12",children:Object(g.jsxs)("p",{children:["Hours Worked:",Object(g.jsx)("br",{}),L().spent_hours]})}),Object(g.jsx)(c.k,{md:"12",children:Object(g.jsxs)("p",{children:["Remaining hours:",Object(g.jsx)("br",{}),L().remaining_hours]})}),Object(g.jsx)(c.k,{md:"12",children:Object(g.jsxs)("div",{className:"task-list",children:[Object(g.jsx)("p",{children:"Task List:"}),Object(g.jsx)("ol",{className:"task-list-show",children:void 0!=(null===(u=e.timeCardList)||void 0===u?void 0:u.data)?Array.from(e.timeCardList.data).map((function(e){return Object(g.jsxs)("li",{className:"task-list-show-item",children:[e.actual_work_done+" \u27a4 "+e.hours_today+" hr(s)",Object(g.jsx)("p",{children:Object(g.jsxs)("small",{children:["@ ",e.date_updated," "]})})]})})):"No task has been done so far."})]})})]})})]})})]})})}},895:function(e,s,t){},896:function(e,s,t){},897:function(e,s,t){}}]);
//# sourceMappingURL=25.3ca03b5a.chunk.js.map