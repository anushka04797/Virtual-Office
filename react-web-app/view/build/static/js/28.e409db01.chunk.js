(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[28],{512:function(e,s){},536:function(e,s){},537:function(e,s){},622:function(e,s,a){},909:function(e,s,a){"use strict";a.r(s);var t=a(33),c=a(493),n=a(0),r=a(545),l=a.n(r),i=a(816),o=(a(622),a(499)),d=a(11),j=a(96),h=a(9),m=a(531),p=a(532),b=a(4);s.default=function(){var e=Object(d.i)().work_package_number,s=(Object(d.h)(),Object(n.useState)()),a=Object(t.a)(s,2),r=a[0],x=a[1],u=(Object(j.b)(),Object(d.g)());Object(n.useEffect)((function(){h.a.get("project/details/"+e+"/").then((function(e){"OK"!=e.statusText?u.push("/dashboard/Projects/completed-projects"):x(e.data.data)})),console.log("project from completed page",r)}),[r]);var O,N=[];return Object(b.jsx)(b.Fragment,{children:void 0!=r&&Object(b.jsxs)(c.l,{children:[Object(b.jsxs)("h3",{className:"dash-header-1",children:["Project Details ",Object(b.jsxs)(c.f,{className:"export-project-list",onClick:function(){return function(){for(var e=function(e){var s=r.subtasks[e];O="Details of "+s.sub_task;var t=[];Array.from(s.assignees).map((function(e){t.push(e.assignee.first_name+" "+e.assignee.last_name)})),a=t.join(","),N.push({"Sl. No":e+1,TDO:s.task_delivery_order.title,"Project Name":s.sub_task,"Work Package Number":s.work_package_number,"Work Package Index":s.work_package_index,"Project Manager":s.pm.first_name+""+s.pm.last_name,"Task Title":s.task_title,"Estimated Persons":s.estimated_person,"Planned Value":r.project.planned_value,"Planned Hours":r.project.planned_hours,"Planned Delivery Date":r.project.planned_delivery_date,"Assignee(s)":a})},s=0;s<r.subtasks.length;s++){var a;e(s)}var t={Sheets:{data:p.utils.json_to_sheet(N)},SheetNames:["data"]},c=p.write(t,{bookType:"xlsx",type:"array"}),n=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});m.saveAs(n,O+".xlsx")}()},children:[Object(b.jsx)(o.a,{name:"cil-spreadsheet",className:"mr-2"}),"Export to excel"]})]}),Object(b.jsx)("div",{className:"card-header-portion-ongoing",children:Object(b.jsxs)("h4",{className:"ongoing-card-header-1",children:[Object(b.jsx)(i.a,{"aria-label":"favourite",disabled:!0,size:"medium",color:"primary",children:Object(b.jsx)(l.a,{fontSize:"inherit",className:"fav-button"})}),r.project.task_delivery_order.title]})}),Object(b.jsx)("hr",{className:"header-underline1"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-11 col-sm-12 col-xs-12 mt-1 mb-2",children:Array.from(r.subtasks).map((function(e,s){return Object(b.jsx)(c.g,{className:"card-ongoing-project",children:Object(b.jsxs)(c.h,{className:"details-project-body",children:[Object(b.jsxs)("div",{className:"ongoing-initial-info row",children:[Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Sub Task Name"}),Object(b.jsx)("h6",{className:"project-point-details",children:r.project.sub_task})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"PM Name"}),Object(b.jsxs)("h6",{className:"project-point-details",children:[r.project.pm.first_name+" "+r.project.pm.last_name," "]})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Work Package Number"}),Object(b.jsx)("h6",{className:"project-point-details",children:r.project.work_package_number})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Work Package Index"}),Object(b.jsx)("h6",{className:"project-point-details",children:r.project.work_package_index})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Task Title"}),Object(b.jsx)("h6",{className:"project-point-details",children:e.task_title})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Estimated Person(s)"}),Object(b.jsx)("h6",{className:"project-point-details",children:e.estimated_person})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Planned Value"}),Object(b.jsxs)("h6",{className:"project-point-details",children:[r.project.planned_value," "]})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Planned Hours"}),Object(b.jsx)("h6",{className:"project-point-details",children:r.project.planned_hours})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Remaining Hours"}),Object(b.jsx)("h6",{className:"project-point-details",children:r.project.remaining_hours})]})]}),Object(b.jsxs)("div",{className:"col-md-12 mt-4 mb-2",children:[Object(b.jsxs)("h5",{className:"projectName mb-3",children:["Asssignee(s)-(",Array.from(r.assignees).length,")"]}),Object(b.jsx)("div",{className:"file-show-ongoing-details row",children:void 0!=r&&Array.from(r.assignees).map((function(e,s){return Object(b.jsx)("div",{className:"col-md-6 col-sm-6 col-lg-2",children:Object(b.jsx)("div",{className:"file-attached-ongoing rounded-pill",children:e.first_name+" "+e.last_name})},s)}))})]})]})},s)}))})})]})})}}}]);
//# sourceMappingURL=28.e409db01.chunk.js.map