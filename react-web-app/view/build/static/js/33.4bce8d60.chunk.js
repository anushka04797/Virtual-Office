(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[33],{1140:function(e,s,a){"use strict";a.r(s);var t=a(33),c=a(496),r=a(0),n=a(594),l=a.n(n),i=a(1031),o=(a(649),a(509)),d=a(11),j=a(95),h=a(8),m=a(534),p=a(538),b=a(4);s.default=function(){var e=Object(d.i)().work_package_number,s=(Object(d.h)(),Object(r.useState)()),a=Object(t.a)(s,2),n=a[0],x=a[1],u=(Object(j.b)(),Object(d.g)());Object(r.useEffect)((function(){h.a.get("project/details/"+e+"/").then((function(e){"OK"!=e.statusText?u.push("/dashboard/Projects/completed-projects"):x(e.data.data)})),console.log("project from completed page",n)}),[n]);var O,N=[];return Object(b.jsx)(b.Fragment,{children:void 0!=n&&Object(b.jsxs)(c.l,{children:[Object(b.jsxs)("h3",{className:"dash-header-1",children:["Project Details ",Object(b.jsxs)(c.f,{className:"export-project-list",onClick:function(){return function(){for(var e=function(e){var s=n.subtasks[e];O="Details of "+s.sub_task;var t=[];Array.from(s.assignees).map((function(e){t.push(e.assignee.first_name+" "+e.assignee.last_name)})),a=t.join(","),N.push({"Sl. No":e+1,TDO:s.task_delivery_order.title,"Project Name":s.sub_task,"Work Package Number":s.work_package_number,"Work Package Index":s.work_package_index,"Project Manager":s.pm.first_name+""+s.pm.last_name,"Task Title":s.task_title,"Estimated Persons":s.estimated_person,"Planned Value":n.project.planned_value,"Planned Hours":n.project.planned_hours,"Planned Delivery Date":n.project.planned_delivery_date,"Assignee(s)":a})},s=0;s<n.subtasks.length;s++){var a;e(s)}var t={Sheets:{data:p.utils.json_to_sheet(N)},SheetNames:["data"]},c=p.write(t,{bookType:"xlsx",type:"array"}),r=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});m.saveAs(r,O+".xlsx")}()},children:[Object(b.jsx)(o.a,{name:"cil-spreadsheet",className:"mr-2"}),"Export to excel"]})]}),Object(b.jsx)("div",{className:"card-header-portion-ongoing",children:Object(b.jsxs)("h4",{className:"ongoing-card-header-1",children:[Object(b.jsx)(i.a,{"aria-label":"favourite",disabled:!0,size:"medium",color:"primary",children:Object(b.jsx)(l.a,{fontSize:"inherit",className:"fav-button"})}),n.project.task_delivery_order.title]})}),Object(b.jsx)("hr",{className:"header-underline1"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-11 col-sm-12 col-xs-12 mt-1 mb-2",children:Array.from(n.subtasks).map((function(e,s){return Object(b.jsx)(c.g,{className:"card-ongoing-project",children:Object(b.jsxs)(c.h,{className:"details-project-body",children:[Object(b.jsxs)("div",{className:"ongoing-initial-info row",children:[Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Sub Task Name"}),Object(b.jsx)("h6",{className:"project-point-details",children:n.project.sub_task})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"PM Name"}),Object(b.jsxs)("h6",{className:"project-point-details",children:[n.project.pm.first_name+" "+n.project.pm.last_name," "]})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Work Package Number"}),Object(b.jsx)("h6",{className:"project-point-details",children:n.project.work_package_number})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Work Package Index"}),Object(b.jsx)("h6",{className:"project-point-details",children:n.project.work_package_index})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Task Title"}),Object(b.jsx)("h6",{className:"project-point-details",children:e.task_title})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Estimated Person(s)"}),Object(b.jsx)("h6",{className:"project-point-details",children:e.estimated_person})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Planned Value"}),Object(b.jsxs)("h6",{className:"project-point-details",children:[Number(parseFloat(n.project.planned_value)).toFixed(2)," "]})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Planned Hours"}),Object(b.jsx)("h6",{className:"project-point-details",children:Number(parseFloat(n.project.planned_hours)).toFixed(2)})]}),Object(b.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(b.jsx)("h6",{className:"tiny-header2",children:"Remaining Hours"}),Object(b.jsx)("h6",{className:"project-point-details",children:Number(parseFloat(n.project.remaining_hours)).toFixed(2)})]})]}),Object(b.jsxs)("div",{className:"col-md-12 mt-4 mb-2",children:[Object(b.jsxs)("h5",{className:"projectName mb-3",children:["Asssignee(s)-(",Array.from(n.assignees).length,")"]}),Object(b.jsx)("div",{className:"file-show-ongoing-details row",children:void 0!=n&&Array.from(n.assignees).map((function(e,s){return Object(b.jsx)("div",{className:"col-md-6 col-sm-6 col-lg-2",children:Object(b.jsx)("div",{className:"file-attached-ongoing rounded-pill",children:e.first_name+" "+e.last_name})},s)}))})]})]})},s)}))})})]})})}},524:function(e,s){},544:function(e,s){},545:function(e,s){},649:function(e,s,a){}}]);
//# sourceMappingURL=33.4bce8d60.chunk.js.map