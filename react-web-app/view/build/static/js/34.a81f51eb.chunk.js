(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[34],{1212:function(e,t,a){"use strict";a.r(t);var s=a(13),l=a(33),o=a(495),r=a(1213),c=a.n(r),n=a(0),d=a.n(n),i=(a(615),a(513)),u=a(94),j=a(8),b=a(506),m=a(526),h=a(669),p=(a(697),a(509),a(73)),f=a.n(p),_=a(511),O=a.n(_),v=a(818),g=a(819),x=a(11),k=a(4);t.default=function(){var e,t,a,r,p,_,y,w=Object(u.c)((function(e){return e.profile.data})),S=Object(n.useState)(),C=Object(l.a)(S,2),N=C[0],D=C[1],M=(Object(u.b)(),Object(n.useState)(0)),T=Object(l.a)(M,2),F=(T[0],T[1],Object(n.useState)([])),P=Object(l.a)(F,2),Y=P[0],z=P[1],A=Object(n.useState)([]),H=Object(l.a)(A,2),E=H[0],V=H[1],W=Object(n.useState)(),B=Object(l.a)(W,2),I=(B[0],B[1]),K=Object(x.h)(),q=Object(n.useState)([]),L=Object(l.a)(q,2),R=L[0],J=L[1],U=Object(n.useState)(0),G=Object(l.a)(U,2),Q=G[0],X=G[1],Z=Object(n.useState)(""),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useState)(""),se=Object(l.a)(ae,2),le=se[0],oe=se[1],re=Object(n.useState)(0),ce=Object(l.a)(re,2),ne=ce[0],de=ce[1],ie=Object(n.useState)(""),ue=Object(l.a)(ie,2),je=(ue[0],ue[1]),be=Object(n.useState)(),me=Object(l.a)(be,2),he=me[0],pe=me[1],fe=function(e){console.log("get_tc",e);var t=De(),a=t.start,s=t.end;I(e.first_name+" "+e.last_name),j.a.get("wbs/user/time-card/list/"+e.id+"/").then((function(e){console.log("assignee tc",e.data);var t=[];Array.from(e.data.data).forEach((function(e,a){t.push({data:e})}));var l;l=t.filter((function(e){return e.data.date_updated>=a&&e.data.date_updated<=s})),V(l);for(var o=[],r=0,n=0,d=0;d<l.length;d++){var i,u,j,b;0==l[d].data.submitted&&n++;var m=l[d];r+=parseFloat(m.data.hours_today),o.push({WP:m.data.project?m.data.project.work_package_number:"-","Project Name":null!=m.data.project?null===(i=m.data.project)||void 0===i?void 0:i.sub_task:"-","Task Title":null!=m.data.project?null===(u=m.data.project)||void 0===u?void 0:u.task_title:"-",Description:null!==(j=m.data)&&void 0!==j&&j.actual_work_done?null===(b=m.data)||void 0===b?void 0:b.actual_work_done:"-","Hour(s)":m.data.hours_today,Type:m.data.time_type,"Date Created":m.data.date_created,data:m.data,id:m.data.id})}de(r),z(c()(o,"id","desc")),X(n)}))};function _e(e){return void 0!=e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():""}var Oe=Object(n.useState)(!1),ve=Object(l.a)(Oe,2),ge=ve[0],xe=ve[1],ke=Object(n.useState)(!1),ye=Object(l.a)(ke,2),we=ye[0],Se=ye[1];d.a.useEffect((function(){console.log("executing effect"),window.scrollTo(0,0);var e=De();e.start,e.end;de(0),Object(b.f)("projects.change_projectassignee")||Object(b.f)("projects.add_projectassignee")?j.a.get("project/assignees/all/"+sessionStorage.getItem(j.k)+"/").then((function(e){var t=[];if(Array.from(e.data.data).forEach((function(e,a){t.push({data:e,value:e.id,label:_e(e.first_name)+" "+_e(e.last_name)})})),t.find((function(t){return t.value==e.data.user.id}))||t.unshift({data:e.data.user,value:e.data.user.id,label:_e(e.data.user.first_name)+" "+_e(e.data.user.last_name)}),J(c()(t,"label")),null==N||void 0==N){var a;if(null!==(a=K.state)&&void 0!==a&&a.assignee&&t.length>0){var s=K.state.assignee;D(t.find((function(e){return e.value==s}))),fe(t.find((function(e){return e.value==s})).data)}else D({data:e.data.user,value:e.data.user.id,label:_e(e.data.user.first_name)+" "+_e(e.data.user.last_name)}),fe(e.data.user);I(_e(e.data.user.first_name)+" "+_e(e.data.user.last_name))}})):null!=N&&void 0!=N||(D({data:w,value:w.id,label:_e(w.first_name)+" "+_e(w.last_name)}),I(_e(w.first_name)+" "+_e(w.last_name)),fe(w))}),[]);var Ce=Object(m.a)({initialValues:{assigneeSelect:sessionStorage.getItem(j.k),assigneeSelectPM:sessionStorage.getItem(j.k),startDate:"",todate:""},validateOnBlur:!0,validateOnChange:!0,validate:function(e){var t={};return e.startDate||(t.startDate="Start Date selection is required"),e.todate||(t.todate="To date selection is required"),t},onSubmit:function(e){console.log("working"),te(e.startDate),oe(e.todate);var t=0;Object(b.f)("projects.add_projects")&&Object(b.f)("wbs.change_timecard")&&Object(b.f)("wbs.add_timecard")?j.a.get("wbs/user/time-card/list/"+e.assigneeSelectPM+"/").then((function(a){console.log(a.data.data);var s=[];Array.from(a.data.data).forEach((function(e,t){s.push({data:e})}));var l;l=s.filter((function(t){return t.data.date_updated>=e.startDate&&t.data.date_updated<=e.todate})),V(l);for(var o=[],r=0;r<l.length;r++){var c,n,d=l[r];t+=parseFloat(d.data.hours_today),o.push({WP:null!==(c=d.data.project)&&void 0!==c&&c.work_package_number?d.data.project.work_package_number:"-","Project Name":null!==(n=d.data.project)&&void 0!==n&&n.sub_task?d.data.project.sub_task:"-","Task Title":d.data.project.task_title?d.data.project.task_title:"-",Description:d.data.actual_work_done?d.data.actual_work_done:"-","Hour(s)":d.data.hours_today,Type:d.data.time_type,"Date Created":d.data.date_created,data:d.data})}de(t),z(o)})):j.a.get("wbs/user/time-card/list/"+e.assigneeSelect+"/").then((function(a){var s=[];console.log("zzzzzzzz",w),I(w.first_name+" "+w.last_name),Array.from(a.data.data).forEach((function(e,t){s.push({data:e})}));var l;l=s.filter((function(t){return t.data.date_updated>=e.startDate&&t.data.date_updated<=e.todate})),console.log("timecard for id",l),V(l),je(l);for(var o=[],r=0;r<l.length;r++){var c,n=l[r];t+=parseFloat(n.data.hours_today),o.push({WP:n.data.project?n.data.project.work_package_number:"-","Project Name":null!=n.data.project?null===(c=n.data.project)||void 0===c?void 0:c.sub_task:"-","Task Title":null!=n.data.project?n.data.project.task_title:"-",Description:n.data.actual_work_done?n.data.actual_work_done:"","Hour(s)":n.data.hours_today,Type:n.data.time_type,"Date Created":n.data.date_created,data:n.data})}console.log("table",o),z(o),de(t)}))}}),Ne={option:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{fontSize:"14px !important"})}},De=function(){for(var e=new Date,t=new Date,a=0;a<7;a++){if(0===e.getDay()){console.log("start",e);break}e=f()(e).subtract(1,"day").toDate()}return console.log("end date",t),te(f()(e).format("YYYY-MM-DD")),oe(Me()),{start:f()(e).format("YYYY-MM-DD"),end:Me()}},Me=function(){for(var e=new Date,t=0;t<7;t++){if(6===e.getDay()){console.log("sat",e);break}e=f()(e).add(1,"day").toDate()}return e=f()(e).format("YYYY-MM-DD")};return Object(k.jsxs)(k.Fragment,{children:[null!=he&&void 0!=he&&Object(k.jsx)(g.a,{data:he,show:we,onClose:function(){Se(!1),fe(N.data)}}),N&&Object(k.jsx)(v.a,{employee:N.value,show:ge,onClose:function(){xe(!1),fe(N.data)},onAdd:Ce.handleSubmit}),Object(k.jsxs)(o.l,{children:[Object(k.jsx)(o.K,{className:"justify-content-between",children:Object(k.jsx)(o.k,{children:Object(k.jsx)("h3",{className:"timecards-page-header mb-3",children:"Actual Hours of this week"})})}),Object(k.jsx)(o.t,{children:Object(k.jsxs)(o.K,{children:[Object(k.jsx)(o.k,{xl:"3",lg:"3",md:"6",children:Object(b.f)("projects.add_projects")&&Object(k.jsxs)("div",{children:[Object(k.jsx)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelectPM",children:"Select Employee"}),Object(k.jsx)(i.a,{closeMenuOnSelect:!0,"aria-labelledby":"assigneeSelectPM",id:"assigneeSelectPM",minHeight:"35px",placeholder:_e(w.first_name)+" "+_e(w.last_name),isClearable:!1,isMulti:!1,onChange:function(e){D(e),I(e.label),fe(e.data)},classNamePrefix:"custom-forminput-6",options:R,styles:Ne,value:N})]})}),Object(k.jsx)(o.K,{className:"mt-4",children:Object(k.jsx)(o.k,{children:Object(k.jsxs)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Company : ",null===N||void 0===N||null===(e=N.data)||void 0===e||null===(t=e.slc_details)||void 0===t||null===(a=t.slc)||void 0===a||null===(r=a.department)||void 0===r||null===(p=r.company)||void 0===p?void 0:p.name]})})}),Object(k.jsx)(o.K,{children:Object(k.jsx)(o.k,{md:"4",children:Object(k.jsxs)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Employee Name :"," ",_e(null===N||void 0===N||null===(_=N.data)||void 0===_?void 0:_.first_name)+" "+_e(null===N||void 0===N||null===(y=N.data)||void 0===y?void 0:y.last_name)]})})}),Object(k.jsx)(o.K,{children:Object(k.jsx)(o.k,{children:Object(k.jsxs)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Weekending : ",f()(Me()).format("dddd, DD MMMM YYYY")]})})}),Ce.values.assigneeSelectPM==sessionStorage.getItem(j.k)==1&&Object(k.jsx)("div",{className:"format-buttons mt-3 mb-3",children:Object(k.jsxs)(o.f,{className:"file-format-download",type:"button",onClick:function(){xe(!0)},children:[" ","+ Add Item"]})}),Object(k.jsx)(o.k,{md:"12",children:Object(k.jsxs)("div",{className:"",children:[Object(k.jsx)(o.m,{items:Y,fields:[{key:"WP",_style:{width:"5%"},_classes:"font-weight-bold"},"Project Name","Task Title","Description","Hour(s)","Type","Date Created","Action"],primary:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,size:"sm",itemsPerPage:20,pagination:!0,scopedSlots:{Action:function(e){return Object(k.jsx)("td",{children:0==e.data.submitted?Object(k.jsx)(o.b,{children:Object(k.jsx)(o.f,{onClick:function(){pe(e.data),Se(!0)},size:"sm",type:"button",color:"primary",children:"Edit"})}):"N/A"})}}}),0!=ne&&Object(k.jsx)("div",{class:"alert alert-info",role:"alert",children:Object(k.jsxs)(o.K,{children:[Object(k.jsx)(o.k,{md:"5"}),Object(k.jsx)(o.k,{md:"3",children:Object(k.jsxs)("small",{children:["     ","From ",Object(k.jsx)("b",{children:f()(ee).format("DD-MMM-YY")})," to ",Object(k.jsx)("b",{children:f()(le).format("DD-MMM-YY")})]})}),Object(k.jsx)(o.k,{md:"4",children:Object(k.jsxs)("small",{children:["   ","Total ",Object(k.jsxs)("b",{children:[Number(ne).toFixed(2)," ",Number(ne).toFixed(2)>1?"hours":"hour","\xa0"]})]})})]})}),Object(k.jsx)(o.K,{className:"justify-content-end mb-5",children:Object(k.jsx)(o.k,{md:"1",className:"justify-content-end",children:Object(k.jsx)(o.f,{className:"file-format-download",type:"button",onClick:function(){O()({title:"Are you sure?",text:"Once submitted, you will not be able to revert!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){if(e){for(var t="",a=0;a<Y.length;a++)a==Y.length-1?t+=Y[a].data.id:t+=Y[a].data.id+",";var s=function(){var e=new h.default("portrait","pt","A4");e.setFontSize(15),N.data.first_name,N.data.last_name;var t={startY:145,head:[["WP","Project Name","Task Title","Description","Hour(s)","Type","Date Created"]],body:E.map((function(e,t){return[e.data.project.work_package_number,e.data.project.sub_task,e.data.project.task_title,e.data.actual_work_done,e.data.hours_today,e.data.time_type,e.data.date_created]}))},a=new Date,s=a.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});a=f()(a).format("DD/MM/YY");var l=f()(le).format("DD/MM/YYYY");return e.setFontSize(17),e.text(170,50,"Datasoft Manufacturing & Assembly"),e.setFontSize(13),e.text(245,75,"Gulshan Branch"),e.setFontSize(11),e.text(42,105,"Employee Time Card"),e.text(410,105,"Week-Ending: "+l),e.text(42,125,"Name: "+N.data.first_name+" "+N.data.last_name),new Date,e.autoTable(t),e.text(42,e.lastAutoTable.finalY+25,"From "+ee+" to "+le),e.text(250,e.lastAutoTable.finalY+25," Total Hours "+Number(ne).toFixed(2)),e.text(396,e.lastAutoTable.finalY+25,"Submitted on : "+s+"  "+a),e}(),l=new FormData;l.append("employee",N.value),l.append("time_cards",t),l.append("week_start",ee),l.append("week_end",le),l.append("pdf_file",s.output("datauristring")),j.d.post("wbs/time-card/submit/",l).then((function(e){console.log(e.data),fe(N.data),s.save("Timecard of "+N.data.first_name+".pdf"),window.open(s.output("bloburl"),"_blank"),O()("Submitted","Your selected time cards are submitted!","success")}))}}))},style:{backgroundColor:"#e55353"},disabled:0==Q,children:"Submit"})})})]})})]})})]})]})}},1213:function(e,t,a){var s=a(180),l=a(27);e.exports=function(e,t,a,o){return null==e?[]:(l(t)||(t=null==t?[]:[t]),l(a=o?void 0:a)||(a=null==a?[]:[a]),s(e,t,a))}},615:function(e,t,a){},818:function(e,t,a){"use strict";var s=a(33),l=a(526),o=a(495),r=a(0),c=(a(615),a(94)),n=a(513),d=a(8),i=a(511),u=a.n(i),j=a(123),b=a(103),m=a(4);t.a=function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),i=a[0],h=a[1],p=Object(c.c)((function(e){var t=[];return Array.from(e.holidays.data).forEach((function(e,a){t.push({label:e.holiday_title,value:e.id,data:e})})),t})),f=Object(r.useState)([]),_=Object(s.a)(f,2),O=_[0],v=_[1],g=Object(r.useState)(""),x=Object(s.a)(g,2),k=x[0],y=x[1],w=Object(c.c)((function(e){var t=[];return Array.from(e.worktypes.data).forEach((function(e,a){t.push({label:e.title,value:e.title,description:e.description,data:e})})),t})),S=Object(c.b)(),C=(Object(c.c)((function(e){return e.timecardList.user_hours_used_left})),Object(l.a)({initialValues:{project:"",task_title:"",actual_work_done:"",hours:"",hours_type:"",wbs:"",hour_description:"",assignee:e.employee},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var t={};return e.hours_type||(t.hours_type="Hour Type is required!"),e.hours||(t.hours="Hour is required!"),e.project||(t.project="Project is required!"),e.wbs||(t.wbs="Wbs is required!"),e.actual_work_done||(t.actual_work_done="Details is required!"),parseInt(e.hours)<1&&(t.hours="Invalid hours value!"),t},onSubmit:function(t){console.log("values",C.values);var a={hours_type:C.values.hours_type,hours:C.values.hours,hour_description:C.values.hour_description?C.values.hour_description:"",assignee:e.employee,actual_work_done:C.values.actual_work_done,project:C.values.project,wbs:C.values.wbs,task_title:C.values.task_title};d.a.post("wbs/time-card/add/",a).then((function(t){console.log(t.data),e.onClose(),h(!i),C.resetForm(),T({label:null,value:null}),z(),V(null),y(null),u()("Added!","Successfuly Added","success")})),h(!1)}}));Object(r.useEffect)((function(){console.log("add tc props",e.employee),S(Object(j.b)()),S(Object(b.d)());var t=[];d.a.get("project/assigned/all/"+e.employee+"/").then((function(e){console.log("assigned projects",e.data);for(var a=0;a<e.data.data.length;a++)t.push({label:e.data.data[a].project.sub_task,value:e.data.data[a].project.id,data:e.data.data[a]});console.log("temp p",t),v(t)}))}),[e]);var N=Object(r.useState)({label:"",value:""}),D=Object(s.a)(N,2),M=D[0],T=D[1],F=Object(r.useState)(),P=Object(s.a)(F,2),Y=P[0],z=P[1],A=Object(r.useState)(),H=Object(s.a)(A,2),E=H[0],V=H[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.B,{closeOnBackdrop:!1,show:e.show,onClose:function(){e.onClose(),C.resetForm()},size:"lg",children:[Object(m.jsxs)(o.t,{children:[Object(m.jsx)(o.E,{closeButton:!0,children:"Enter New Timecard Item Details"}),Object(m.jsx)(o.C,{children:Object(m.jsxs)(o.K,{children:[Object(m.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(m.jsx)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelectPM",loseMenuOnSelect:!0,isClearable:!1,isMulti:!1,children:"Hour Type :"}),Object(m.jsx)(n.a,{id:"hours_type",name:"hours_type",options:w,onChange:function(e){T(e),"RHR"!=e.label&&"WFH"!=e.label&&"OTO"!=e.label&&"OTS"!=e.label?(console.log("if"),C.setValues({hours_type:e.value,actual_work_done:e.description})):(console.log("else"),C.setValues({hours_type:e.value,actual_work_done:""}))},value:M}),C.touched.hours_type&&C.errors.hours_type&&Object(m.jsx)("small",{style:{color:"red"},children:C.errors.hours_type})]}),"HOL"==M.label&&Object(m.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(m.jsx)(o.z,{className:"custom-label-wbs5",children:"Select Holiday : "}),Object(m.jsx)(n.a,{id:"project",name:"project",className:"custom-forminput-5",onChange:function(e,t){console.log(e),C.setFieldValue("hours",e.data.hours)},options:p})]}),Object(m.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(m.jsx)(o.z,{className:"custom-label-wbs5",children:" Hours : "}),Object(m.jsx)(o.y,{type:"number","aria-label":"default input example",id:"hours",name:"hours",className:"custom-forminput-5",placeholder:"0.00",disabled:"HOL"==M.value,min:"0.00",onChange:function(e){C.setFieldValue("hours",e.target.value)},value:C.values.hours}),C.touched.hours&&C.errors.hours&&Object(m.jsx)("small",{style:{color:"red"},children:C.errors.hours})]}),Object(m.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(m.jsxs)(o.z,{className:"custom-label-wbs5",htmlFor:"assigneeSelectPM",loseMenuOnSelect:!0,isClearable:!1,isMulti:!1,children:["Project :"," "]}),Object(m.jsx)(n.a,{id:"project",name:"project",className:"custom-forminput-5",onChange:function(t){y(t),console.log("selected Project",t.value),C.setFieldValue("project",t.value);for(var a=[],s=0;s<t.data.project.wbs_list.length;s++)parseInt(t.data.project.wbs_list[s].assignee_id)==parseInt(e.employee)&&a.push({value:t.data.project.wbs_list[s].id,label:t.data.project.wbs_list[s].title,data:t.data.project.wbs_list[s]});z(a)},options:O,value:k}),C.touched.project&&C.errors.project&&Object(m.jsx)("small",{style:{color:"red"},children:C.errors.project})]}),Object(m.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(m.jsx)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelectPM",loseMenuOnSelect:!0,isClearable:!1,isMulti:!1,children:"WBS :"}),Object(m.jsx)(n.a,{id:"wbs",name:"wbs",className:"custom-forminput-5",options:Y,onChange:function(e){V(e),console.log("WBS",e),C.setFieldValue("wbs",e.value)},value:E}),C.touched.wbs&&C.errors.wbs&&Object(m.jsx)("small",{style:{color:"red"},children:C.errors.wbs})]}),Object(m.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(m.jsx)(o.z,{children:"Actual Work :"}),Object(m.jsx)(o.V,{type:"text",id:"actual_work_done",name:"actual_work_done",className:"custom-forminput-5",onChange:function(e){C.setFieldValue("actual_work_done",e.target.value)},value:C.values.actual_work_done}),C.touched.actual_work_done&&C.errors.actual_work_done&&Object(m.jsx)("small",{style:{color:"red"},children:C.errors.actual_work_done})]})]})})]}),Object(m.jsxs)(o.D,{children:[Object(m.jsx)(o.f,{color:"primary",type:"button",onClick:C.handleSubmit,children:"Add"})," ",Object(m.jsx)(o.f,{color:"secondary",type:"button",onClick:function(){e.onClose(),C.resetForm(),T({label:null,value:null}),z(),V(null),y(null)},children:"Cancel"})]})]})})}},819:function(e,t,a){"use strict";var s=a(526),l=a(0),o=a(495),r=a(513),c=a(8),n=a(511),d=a.n(n),i=a(94),u=a(4);t.a=function(e){var t,a,n,j=Object(i.c)((function(e){var t=[];return Array.from(e.worktypes.data).forEach((function(e,a){t.push({label:e.title,value:e.title,description:e.description,data:e})})),t})),b=Object(s.a)({initialValues:{actual_work_done:"",time_type:"",hours_today:""},onSubmit:function(t,a){a.setSubmitting;console.log(t),c.a.put("wbs/time-card/update/"+e.data.id+"/",t).then((function(t){console.log(t.data),200==t.status&&"OK"==t.statusText&&(b.resetForm(),e.onClose(),d()("Well Done!","Your timecard is updated","success"))})).catch((function(e){console.log(e)}))}});Object(l.useEffect)((function(){e.data&&b.setValues({actual_work_done:e.data.actual_work_done,time_type:e.data.time_type,hours_today:e.data.hours_today})}),[e.data]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(o.B,{show:e.show,onClose:function(){return e.onClose()},toggle:e.toggle,children:[Object(u.jsxs)(o.E,{closeButton:!0,children:[" ","Project Name (Work Package) : ",null!=(null===(t=e.data)||void 0===t?void 0:t.project)?e.data.project.sub_task+"("+(null===(a=e.data)||void 0===a?void 0:a.project.work_package_number)+")":"N/A"]}),Object(u.jsx)(o.C,{children:Object(u.jsxs)(o.K,{children:[Object(u.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(u.jsx)(o.z,{class:"form-label",children:"  Task Title : "}),Object(u.jsx)(o.y,{value:null!=(null===(n=e.data)||void 0===n?void 0:n.project)?e.data.project.task_title:"N/A",disabled:!0})]}),Object(u.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(u.jsx)(o.z,{class:"form-label",children:"Actual Work :"}),Object(u.jsx)(o.V,{class:"form-control",id:"actual_work_done",name:"actual_work_done",rows:"3",value:b.values.actual_work_done,onChange:b.handleChange,children:" "})]}),Object(u.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(u.jsx)(o.z,{class:"form-label",children:" Hour(s):"}),Object(u.jsx)(o.y,{className:"custom-forminput-5",type:"number","aria-label":"default input example",id:"hours_today",name:"hours_today",value:b.values.hours_today,onChange:b.handleChange})]}),Object(u.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(u.jsx)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelectPM",loseMenuOnSelect:!0,isClearable:!1,isMulti:!1,children:"Type :"}),Object(u.jsx)(r.a,{options:j,onChange:function(e,t){console.log(e),b.setFieldValue("time_type",e.value)},defaultValue:[{label:"RHR",value:"RHR"},{label:"SIC",value:"SIC"},{label:"VAC",value:"VAC"},{label:"OTS",value:"OTS"},{label:"OTO",value:"OTO"},{label:"HOL",value:"HOL"},{label:"WFH",value:"WFH"},{label:"COM",value:"COM"},{label:"PB1",value:"PB1"},{label:"PB2",value:"PB2"}].filter((function(t){var a;return t.value===(null===(a=e.data)||void 0===a?void 0:a.time_type)}))})]})]})}),Object(u.jsxs)(o.D,{children:[Object(u.jsx)(o.f,{color:"primary",onClick:b.handleSubmit,children:"save"})," ",Object(u.jsx)(o.f,{color:"secondary",onClick:function(){e.onClose(),b.setValues({actual_work_done:e.data.actual_work_done,time_type:e.data.time_type,hours_today:e.data.hours_today})},children:"Cancel"})]})]})})}}}]);
//# sourceMappingURL=34.a81f51eb.chunk.js.map