(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[34],{1213:function(e,t,a){"use strict";a.r(t);var s=a(13),l=a(33),o=a(495),r=a(1214),n=a.n(r),c=a(0),d=a.n(c),i=(a(615),a(513)),u=a(94),b=a(8),j=a(506),m=a(526),h=a(669),p=(a(697),a(509),a(72)),f=a.n(p),_=a(511),O=a.n(_),v=a(818),g=a(819),y=a(11),x=a(4);t.default=function(){var e,t,a,r,p,_,k,w=Object(u.c)((function(e){return e.profile.data})),S=Object(c.useState)(),C=Object(l.a)(S,2),D=C[0],N=C[1],M=(Object(u.b)(),Object(c.useState)(0)),T=Object(l.a)(M,2),F=T[0],Y=(T[1],Object(c.useState)([])),P=Object(l.a)(Y,2),A=P[0],z=P[1],H=Object(c.useState)([]),E=Object(l.a)(H,2),V=E[0],W=E[1],B=Object(c.useState)(),I=Object(l.a)(B,2),K=(I[0],I[1]),q=Object(y.h)(),L=Object(c.useState)([]),R=Object(l.a)(L,2),J=R[0],U=R[1],G=Object(c.useState)(0),Q=Object(l.a)(G,2),X=Q[0],Z=Q[1],$=Object(c.useState)(""),ee=Object(l.a)($,2),te=ee[0],ae=ee[1],se=Object(c.useState)(""),le=Object(l.a)(se,2),oe=le[0],re=le[1],ne=Object(c.useState)(0),ce=Object(l.a)(ne,2),de=ce[0],ie=ce[1],ue=Object(c.useState)(""),be=Object(l.a)(ue,2),je=(be[0],be[1]),me=Object(c.useState)(),he=Object(l.a)(me,2),pe=he[0],fe=he[1],_e=function(e){console.log("get_tc",e);var t=Me(),a=t.start,s=t.end;K(e.first_name+" "+e.last_name),b.a.get("wbs/user/time-card/list/"+e.id+"/").then((function(e){console.log("assignee tc",e.data);var t=[];Array.from(e.data.data).forEach((function(e,a){t.push({data:e})}));var l;l=t.filter((function(e){return e.data.date_updated>=a&&e.data.date_updated<=s})),console.log("filtered",l),W(l);for(var o=[],r=0,c=0,d=0;d<l.length;d++){var i,u,b,j;0==l[d].data.submitted&&c++;var m=l[d];r+=parseFloat(m.data.hours_today),o.push({WP:m.data.project?m.data.project.work_package_number:"-","Project Name":null!=m.data.project?null===(i=m.data.project)||void 0===i?void 0:i.sub_task:"-","Task Title":null!=m.data.project?null===(u=m.data.project)||void 0===u?void 0:u.task_title:"-",Description:null!==(b=m.data)&&void 0!==b&&b.actual_work_done?null===(j=m.data)||void 0===j?void 0:j.actual_work_done:"-","Hour(s)":m.data.hours_today,Type:m.data.time_type,"Date Created":m.data.date_created,data:m.data,id:m.data.id})}ie(r),z(n()(o,"id","desc")),Z(c),console.log("selected",D)}))};function Oe(e){return void 0!=e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():""}var ve=Object(c.useState)(!1),ge=Object(l.a)(ve,2),ye=ge[0],xe=ge[1],ke=Object(c.useState)(!1),we=Object(l.a)(ke,2),Se=we[0],Ce=we[1];d.a.useEffect((function(){console.log("executing effect"),window.scrollTo(0,0);var e=Me();e.start,e.end;ie(0),Object(j.g)("projects.change_projectassignee")||Object(j.g)("projects.add_projectassignee")?b.a.get("project/assignees/all/"+sessionStorage.getItem(b.k)+"/").then((function(e){var t=[];if(Array.from(e.data.data).forEach((function(e,a){t.push({data:e,value:e.id,label:Oe(e.first_name)+" "+Oe(e.last_name)})})),t.find((function(t){return t.value==e.data.user.id}))||t.unshift({data:e.data.user,value:e.data.user.id,label:Oe(e.data.user.first_name)+" "+Oe(e.data.user.last_name)}),U(n()(t,"label")),null==D||void 0==D){var a;if(null!==(a=q.state)&&void 0!==a&&a.assignee&&t.length>0){var s=q.state.assignee;N(t.find((function(e){return e.value==s}))),_e(t.find((function(e){return e.value==s})).data)}else N({data:e.data.user,value:e.data.user.id,label:Oe(e.data.user.first_name)+" "+Oe(e.data.user.last_name)}),_e(e.data.user);K(Oe(e.data.user.first_name)+" "+Oe(e.data.user.last_name))}})):null!=D&&void 0!=D||(N({data:w,value:w.id,label:Oe(w.first_name)+" "+Oe(w.last_name)}),K(Oe(w.first_name)+" "+Oe(w.last_name)),_e(w))}),[F]),Object(c.useEffect)((function(){var e;if(null!==(e=q.state)&&void 0!==e&&e.assignee&&J.length>0){var t=q.state.assignee;console.log("predefined id",t),console.log("found user",J.find((function(e){return e.value==t}))),N(J.find((function(e){return e.value==t}))),K(J.find((function(e){return e.value==t})).label),_e(J.find((function(e){return e.value==t})).data),console.log(J.find((function(e){return e.value==t})).data,"from useeffect")}}),[J]);var De=Object(m.a)({initialValues:{assigneeSelect:sessionStorage.getItem(b.k),assigneeSelectPM:sessionStorage.getItem(b.k),startDate:"",todate:""},validateOnBlur:!0,validateOnChange:!0,validate:function(e){var t={};return e.startDate||(t.startDate="Start Date selection is required"),e.todate||(t.todate="To date selection is required"),t},onSubmit:function(e){console.log("working"),ae(e.startDate),re(e.todate);var t=0;Object(j.g)("projects.add_projects")&&Object(j.g)("wbs.change_timecard")&&Object(j.g)("wbs.add_timecard")?b.a.get("wbs/user/time-card/list/"+e.assigneeSelectPM+"/").then((function(a){console.log(a.data.data);var s=[];Array.from(a.data.data).forEach((function(e,t){s.push({data:e})}));var l;l=s.filter((function(t){return t.data.date_updated>=e.startDate&&t.data.date_updated<=e.todate})),W(l);for(var o=[],r=0;r<l.length;r++){var n,c,d=l[r];t+=parseFloat(d.data.hours_today),o.push({WP:null!==(n=d.data.project)&&void 0!==n&&n.work_package_number?d.data.project.work_package_number:"-","Project Name":null!==(c=d.data.project)&&void 0!==c&&c.sub_task?d.data.project.sub_task:"-","Task Title":d.data.project.task_title?d.data.project.task_title:"-",Description:d.data.actual_work_done?d.data.actual_work_done:"-","Hour(s)":d.data.hours_today,Type:d.data.time_type,"Date Created":d.data.date_created,data:d.data})}ie(t),z(o)})):b.a.get("wbs/user/time-card/list/"+e.assigneeSelect+"/").then((function(a){var s=[];K(w.first_name+" "+w.last_name),Array.from(a.data.data).forEach((function(e,t){s.push({data:e})}));var l;l=s.filter((function(t){return t.data.date_updated>=e.startDate&&t.data.date_updated<=e.todate})),console.log("timecard for id",l),W(l),je(l);for(var o=[],r=0;r<l.length;r++){var n,c=l[r];t+=parseFloat(c.data.hours_today),o.push({WP:c.data.project?c.data.project.work_package_number:"-","Project Name":null!=c.data.project?null===(n=c.data.project)||void 0===n?void 0:n.sub_task:"-","Task Title":null!=c.data.project?c.data.project.task_title:"-",Description:c.data.actual_work_done?c.data.actual_work_done:"","Hour(s)":c.data.hours_today,Type:c.data.time_type,"Date Created":c.data.date_created,data:c.data})}console.log("table",o),z(o),ie(t)}))}}),Ne={option:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{fontSize:"14px !important"})}},Me=function(){for(var e=new Date,t=new Date,a=0;a<7;a++){if(0===e.getDay()){console.log("start",e);break}e=f()(e).subtract(1,"day").toDate()}return console.log("end date",t),ae(f()(e).format("YYYY-MM-DD")),re(Te()),{start:f()(e).format("YYYY-MM-DD"),end:Te()}},Te=function(){for(var e=new Date,t=0;t<7;t++){if(6===e.getDay()){console.log("sat",e);break}e=f()(e).add(1,"day").toDate()}return e=f()(e).format("YYYY-MM-DD")};return Object(x.jsxs)(x.Fragment,{children:[null!=pe&&void 0!=pe&&Object(x.jsx)(g.a,{data:pe,show:Se,onClose:function(){Ce(!1),_e(D.data)}}),D&&Object(x.jsx)(v.a,{employee:D.value,show:ye,onClose:function(){xe(!1),_e(D.data)},onAdd:De.handleSubmit}),Object(x.jsxs)(o.l,{children:[Object(x.jsx)(o.K,{className:"justify-content-between",children:Object(x.jsx)(o.k,{children:Object(x.jsx)("h3",{className:"timecards-page-header mb-3",children:"Actual Hours of this week"})})}),Object(x.jsx)(o.t,{children:Object(x.jsxs)(o.K,{children:[Object(x.jsx)(o.k,{xl:"3",lg:"3",md:"6",children:Object(j.g)("projects.add_projects")&&Object(x.jsxs)("div",{children:[Object(x.jsx)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelectPM",children:"Select Employee"}),Object(x.jsx)(i.a,{closeMenuOnSelect:!0,"aria-labelledby":"assigneeSelectPM",id:"assigneeSelectPM",minHeight:"35px",placeholder:Oe(w.first_name)+" "+Oe(w.last_name),isClearable:!1,isMulti:!1,onChange:function(e){N(e),K(e.label),_e(e.data)},classNamePrefix:"custom-forminput-6",options:J,styles:Ne,value:D})]})}),Object(x.jsx)(o.K,{className:"mt-4",children:Object(x.jsx)(o.k,{children:Object(x.jsxs)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Company :"," ",null===D||void 0===D||null===(e=D.data)||void 0===e||null===(t=e.slc_details)||void 0===t||null===(a=t.slc)||void 0===a||null===(r=a.department)||void 0===r||null===(p=r.company)||void 0===p?void 0:p.name]})})}),Object(x.jsx)(o.K,{children:Object(x.jsx)(o.k,{md:"4",children:Object(x.jsxs)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Employee Name :"," ",Oe(null===D||void 0===D||null===(_=D.data)||void 0===_?void 0:_.first_name)+" "+Oe(null===D||void 0===D||null===(k=D.data)||void 0===k?void 0:k.last_name)]})})}),Object(x.jsx)(o.K,{children:Object(x.jsx)(o.k,{children:Object(x.jsxs)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Weekending :"," ",f()(Te()).format("dddd, DD MMMM YYYY")]})})}),De.values.assigneeSelectPM==sessionStorage.getItem(b.k)==1&&Object(x.jsx)("div",{className:"format-buttons mt-3 mb-3",children:Object(x.jsxs)(o.f,{className:"file-format-download",type:"button",onClick:function(){xe(!0)},children:[" ","+ Add Item"]})}),Object(x.jsx)(o.k,{md:"12",children:Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)(o.m,{items:A,fields:[{key:"WP",_style:{width:"5%"},_classes:"font-weight-bold"},"Project Name","Task Title","Description","Hour(s)","Type","Date Created","Action"],primary:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,size:"sm",itemsPerPage:20,pagination:!0,scopedSlots:{Action:function(e){return Object(x.jsx)("td",{children:0==e.data.submitted?Object(x.jsx)(o.b,{children:Object(x.jsx)(o.f,{onClick:function(){fe(e.data),Ce(!0)},size:"sm",type:"button",color:"primary",children:"Edit"})}):Object(x.jsx)(o.b,{children:Object(x.jsx)(o.f,{size:"sm",type:"button",color:"secondary",disabled:!0,children:"Edit"})})})}}}),0!=de&&Object(x.jsx)("div",{class:"alert alert-info",role:"alert",children:Object(x.jsxs)(o.K,{children:[Object(x.jsx)(o.k,{md:"5"}),Object(x.jsx)(o.k,{md:"3",children:Object(x.jsxs)("small",{children:["     ","From ",Object(x.jsx)("b",{children:f()(te).format("DD-MMM-YY")})," ","to ",Object(x.jsx)("b",{children:f()(oe).format("DD-MMM-YY")})]})}),Object(x.jsx)(o.k,{md:"4",children:Object(x.jsxs)("small",{children:["   ","Total"," ",Object(x.jsxs)("b",{children:[Number(de).toFixed(2)," ",Number(de).toFixed(2)>1?"hours":"hour","\xa0"]})]})})]})}),Object(x.jsx)(o.K,{className:"justify-content-end mb-5",children:Object(x.jsx)(o.k,{md:"1",className:"justify-content-end",children:Object(x.jsx)(o.f,{className:"file-format-download",type:"button",onClick:function(){O()({title:"Are you sure?",text:"Once submitted, you will not be able to revert!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){if(e){for(var t="",a=0;a<A.length;a++)a==A.length-1?t+=A[a].data.id:t+=A[a].data.id+",";var s=function(){var e=new h.default("portrait","pt","A4");e.setFontSize(15),D.data.first_name,D.data.last_name;var t={startY:145,head:[["WP","Project Name","Task Title","Description","Hour(s)","Type","Date Created"]],body:V.map((function(e,t){return[e.data.project.work_package_number,e.data.project.sub_task,e.data.project.task_title,e.data.actual_work_done,e.data.hours_today,e.data.time_type,e.data.date_created]}))},a=new Date,s=a.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});a=f()(a).format("DD/MM/YY");var l=f()(oe).format("DD/MM/YYYY");return e.setFontSize(17),e.text(170,50,"Datasoft Manufacturing & Assembly"),e.setFontSize(13),e.text(245,75,"Gulshan Branch"),e.setFontSize(11),e.text(42,105,"Employee Time Card"),e.text(410,105,"Week-Ending: "+l),e.text(42,125,"Name: "+D.data.first_name+" "+D.data.last_name),new Date,e.autoTable(t),e.text(42,e.lastAutoTable.finalY+25,"From "+te+" to "+oe),e.text(250,e.lastAutoTable.finalY+25," Total Hours "+Number(de).toFixed(2)),e.text(396,e.lastAutoTable.finalY+25,"Submitted on : "+s+"  "+a),e}(),l=new FormData;l.append("employee",D.value),l.append("time_cards",t),l.append("week_start",te),l.append("week_end",oe),l.append("pdf_file",s.output("datauristring")),b.d.post("wbs/time-card/submit/",l).then((function(e){console.log(e.data);var t=new Date,a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],l=f()(t).format("DD-MM-YYYY");_e(D.data),s.save(D.data.first_name+"_"+D.data.last_name+"_"+a+"_"+l+".pdf"),window.open(s.output("bloburl"),"_blank"),O()("Submitted","Your selected time cards are submitted!","success")}))}}))},style:{backgroundColor:"#e55353"},disabled:0==X,children:"Submit"})})})]})})]})})]})]})}},1214:function(e,t,a){var s=a(180),l=a(27);e.exports=function(e,t,a,o){return null==e?[]:(l(t)||(t=null==t?[]:[t]),l(a=o?void 0:a)||(a=null==a?[]:[a]),s(e,t,a))}},615:function(e,t,a){},818:function(e,t,a){"use strict";var s=a(33),l=a(526),o=a(495),r=a(0),n=(a(615),a(94)),c=a(513),d=a(8),i=a(511),u=a.n(i),b=a(123),j=a(103),m=a(506),h=a(4);t.a=function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),i=a[0],p=a[1],f=Object(n.c)((function(e){var t=[];return Array.from(e.holidays.data).forEach((function(e,a){t.push({label:e.holiday_title,value:e.id,data:e})})),t})),_=Object(r.useState)([]),O=Object(s.a)(_,2),v=O[0],g=O[1],y=Object(r.useState)(""),x=Object(s.a)(y,2),k=x[0],w=x[1],S=Object(n.c)((function(e){var t=[];return Array.from(e.worktypes.data).forEach((function(e,a){t.push({label:e.title,value:e.title,description:e.description,data:e})})),t})),C=Object(n.b)(),D=(Object(m.h)(e.employee.id),Object(l.a)({initialValues:{project:"",task_title:"",actual_work_done:"",hours:"",hours_type:"",wbs:"",hour_description:"",assignee:e.employee},validateOnChange:!0,validateOnBlur:!0,validate:function(e){var t={};return e.hours_type||(t.hours_type="Hour Type is required!"),e.hours||(t.hours="Hour is required!"),e.project||(t.project="Project is required!"),e.wbs||(t.wbs="Wbs is required!"),e.actual_work_done||(t.actual_work_done="Details is required!"),parseInt(e.hours)<1&&(t.hours="Invalid hours value!"),t},onSubmit:function(t){console.log("values",D.values);var a={hours_type:D.values.hours_type,hours:D.values.hours,hour_description:D.values.hour_description?D.values.hour_description:"",assignee:e.employee,actual_work_done:D.values.actual_work_done,project:D.values.project,wbs:D.values.wbs,task_title:D.values.task_title};d.a.post("wbs/time-card/add/",a).then((function(t){console.log(t.data),e.onClose(),p(!i),D.resetForm(),F({label:null,value:null}),z(),W(null),w(null),u()("Added!","Successfuly Added","success")})),p(!1)}}));Object(r.useEffect)((function(){console.log("add tc props",e.employee),C(Object(b.b)()),C(Object(j.d)());var t=[];d.a.get("project/assigned/all/"+e.employee+"/").then((function(e){console.log("assigned projects",e.data);for(var a=0;a<e.data.data.length;a++)t.push({label:e.data.data[a].project.sub_task,value:e.data.data[a].project.id,data:e.data.data[a]});console.log("temp p",t),g(t)}))}),[e]);var N=Object(r.useState)({label:"",value:""}),M=Object(s.a)(N,2),T=M[0],F=M[1],Y=Object(r.useState)(),P=Object(s.a)(Y,2),A=P[0],z=P[1],H=Object(r.useState)(),E=Object(s.a)(H,2),V=E[0],W=E[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(o.B,{closeOnBackdrop:!1,show:e.show,onClose:function(){e.onClose(),D.resetForm()},size:"lg",children:[Object(h.jsxs)(o.t,{children:[Object(h.jsx)(o.E,{closeButton:!0,children:"Enter New Timecard Item Details"}),Object(h.jsx)(o.C,{children:Object(h.jsxs)(o.K,{children:[Object(h.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(h.jsx)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelectPM",loseMenuOnSelect:!0,isClearable:!1,isMulti:!1,children:"Hour Type :"}),Object(h.jsx)(c.a,{id:"hours_type",name:"hours_type",options:S,onChange:function(e){F(e),"RHR"!=e.label&&"WFH"!=e.label&&"OTO"!=e.label&&"OTS"!=e.label?(console.log("if"),D.setValues({hours_type:e.value,actual_work_done:e.description})):(console.log("else"),D.setValues({hours_type:e.value,actual_work_done:""}))},value:T}),D.touched.hours_type&&D.errors.hours_type&&Object(h.jsx)("small",{style:{color:"red"},children:D.errors.hours_type})]}),"HOL"==T.label&&Object(h.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(h.jsx)(o.z,{className:"custom-label-wbs5",children:"Select Holiday : "}),Object(h.jsx)(c.a,{id:"project",name:"project",className:"custom-forminput-5",onChange:function(e,t){console.log(e),D.setFieldValue("hours",e.data.hours)},options:f})]}),Object(h.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(h.jsx)(o.z,{className:"custom-label-wbs5",children:" Hour(s) : "}),Object(h.jsx)(o.y,{type:"number","aria-label":"default input example",id:"hours",name:"hours",className:"custom-forminput-5",placeholder:"0.00",disabled:"HOL"==T.value||"SIC"==T.value||"VAC"==T.value,min:"0.00",onChange:function(e){D.setFieldValue("hours",e.target.value)},value:D.values.hours}),D.touched.hours&&D.errors.hours&&Object(h.jsx)("small",{style:{color:"red"},children:D.errors.hours})]}),Object(h.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(h.jsxs)(o.z,{className:"custom-label-wbs5",htmlFor:"assigneeSelectPM",loseMenuOnSelect:!0,isClearable:!1,isMulti:!1,children:["Project :"," "]}),Object(h.jsx)(c.a,{id:"project",name:"project",className:"custom-forminput-5",onChange:function(t){w(t),console.log("selected Project",t.value),D.setFieldValue("project",t.value);for(var a=[],s=0;s<t.data.project.wbs_list.length;s++)parseInt(t.data.project.wbs_list[s].assignee_id)==parseInt(e.employee)&&a.push({value:t.data.project.wbs_list[s].id,label:t.data.project.wbs_list[s].title,data:t.data.project.wbs_list[s]});z(a)},options:v,value:k}),D.touched.project&&D.errors.project&&Object(h.jsx)("small",{style:{color:"red"},children:D.errors.project})]}),Object(h.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(h.jsx)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelectPM",loseMenuOnSelect:!0,isClearable:!1,isMulti:!1,children:"WBS :"}),Object(h.jsx)(c.a,{id:"wbs",name:"wbs",className:"custom-forminput-5",options:A,onChange:function(e){W(e),console.log("WBS",e),D.setFieldValue("wbs",e.value)},value:V}),D.touched.wbs&&D.errors.wbs&&Object(h.jsx)("small",{style:{color:"red"},children:D.errors.wbs})]}),Object(h.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(h.jsx)(o.z,{children:"Actual Work :"}),Object(h.jsx)(o.V,{type:"text",id:"actual_work_done",name:"actual_work_done",className:"custom-forminput-5",onChange:function(e){D.setFieldValue("actual_work_done",e.target.value)},value:D.values.actual_work_done}),D.touched.actual_work_done&&D.errors.actual_work_done&&Object(h.jsx)("small",{style:{color:"red"},children:D.errors.actual_work_done})]})]})})]}),Object(h.jsxs)(o.D,{children:[Object(h.jsx)(o.f,{color:"primary",type:"button",onClick:D.handleSubmit,children:"Add"})," ",Object(h.jsx)(o.f,{color:"secondary",type:"button",onClick:function(){e.onClose(),D.resetForm(),F({label:null,value:null}),z(),W(null),w(null)},children:"Cancel"})]})]})})}},819:function(e,t,a){"use strict";var s=a(526),l=a(0),o=a(495),r=a(513),n=a(8),c=a(511),d=a.n(c),i=a(94),u=a(4);t.a=function(e){var t,a,c,b=Object(i.c)((function(e){var t=[];return Array.from(e.worktypes.data).forEach((function(e,a){t.push({label:e.title,value:e.title,description:e.description,data:e})})),t})),j=Object(s.a)({initialValues:{actual_work_done:"",time_type:"",hours_today:""},onSubmit:function(t,a){a.setSubmitting;console.log(t),n.a.put("wbs/time-card/update/"+e.data.id+"/",t).then((function(t){console.log(t.data),200==t.status&&"OK"==t.statusText&&(j.resetForm(),e.onClose(),d()("Well Done!","Your timecard is updated","success"))})).catch((function(e){console.log(e)}))}});Object(l.useEffect)((function(){e.data&&j.setValues({actual_work_done:e.data.actual_work_done,time_type:e.data.time_type,hours_today:e.data.hours_today})}),[e.data]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(o.B,{show:e.show,onClose:function(){return e.onClose()},toggle:e.toggle,size:"lg",children:[Object(u.jsxs)(o.E,{closeButton:!0,children:[" ","Project Name (Work Package) :"," ",null!=(null===(t=e.data)||void 0===t?void 0:t.project)?e.data.project.sub_task+"("+(null===(a=e.data)||void 0===a?void 0:a.project.work_package_number)+")":"N/A"]}),Object(u.jsx)(o.C,{children:Object(u.jsxs)(o.K,{children:[Object(u.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(u.jsx)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelectPM",loseMenuOnSelect:!0,isClearable:!1,isMulti:!1,children:"Type :"}),Object(u.jsx)(r.a,{options:b,onChange:function(e,t){console.log(e),j.setFieldValue("time_type",e.value)},defaultValue:[{label:"RHR",value:"RHR"},{label:"SIC",value:"SIC"},{label:"VAC",value:"VAC"},{label:"OTS",value:"OTS"},{label:"OTO",value:"OTO"},{label:"HOL",value:"HOL"},{label:"WFH",value:"WFH"},{label:"COM",value:"COM"},{label:"PB1",value:"PB1"},{label:"PB2",value:"PB2"}].filter((function(t){var a;return t.value===(null===(a=e.data)||void 0===a?void 0:a.time_type)}))})]}),Object(u.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(u.jsx)(o.z,{class:"form-label",children:" Hour(s):"}),Object(u.jsx)(o.y,{className:"custom-forminput-5",type:"number","aria-label":"default input example",id:"hours_today",name:"hours_today",placeholder:"0.00",min:"0.00",value:j.values.hours_today,onChange:j.handleChange})]}),Object(u.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(u.jsx)(o.z,{class:"form-label",children:" Task Title : "}),Object(u.jsx)(o.y,{value:null!=(null===(c=e.data)||void 0===c?void 0:c.project)?e.data.project.task_title:"N/A",disabled:!0})]}),Object(u.jsxs)(o.k,{className:"col-md-12 mb-3",children:[Object(u.jsx)(o.z,{class:"form-label",children:"Actual Work :"}),Object(u.jsx)(o.V,{class:"form-control",id:"actual_work_done",name:"actual_work_done",rows:"3",value:j.values.actual_work_done,onChange:j.handleChange,children:" "})]})]})}),Object(u.jsxs)(o.D,{children:[Object(u.jsx)(o.f,{color:"primary",onClick:j.handleSubmit,children:"save"})," ",Object(u.jsx)(o.f,{color:"secondary",onClick:function(){e.onClose(),j.setValues({actual_work_done:e.data.actual_work_done,time_type:e.data.time_type,hours_today:e.data.hours_today})},children:"Cancel"})]})]})})}}}]);
//# sourceMappingURL=34.40026d4a.chunk.js.map