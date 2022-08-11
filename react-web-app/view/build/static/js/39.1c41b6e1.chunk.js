(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[39],{1105:function(e,a,t){"use strict";t.r(a);var c=t(6),l=t(9),s=t(31),r=t(12),n=t(492),o=t(10),i=t(8),m=t(0),u=t.n(m),d=t(514),j=(t(787),t(96),t(103),t(93)),p=t(528),b=t(512),_=t.n(b),h=t(5);a.default=function(){var e=Object(o.g)(),a={option:function(e,a){return Object(r.a)(Object(r.a)({},e),{},{fontSize:"14px !important"})}},t=Object(j.c)((function(e){var a=[];return Array.from(e.projects.pm_projects).forEach((function(e,t){a.push({data:e})})),console.log("e",a),a}));console.log("pM projects",t);var b=Object(j.c)((function(e){var a=[];return Array.from(e.evmsList.data).forEach((function(e,t){a.push({data:e})})),a}));console.log("existing evms",b);var v=t.filter((function(e){return!b.some((function(a){return e.data.project.id===a.data.project.id}))}));console.log("unique projects",v);var O=[];Array.from(v).forEach((function(e,a){O.push({value:e.data.project.id,label:e.data.project.task_delivery_order.title+"/"+e.data.project.sub_task,data:e})})),console.log("uniqueArray",O);Object(j.b)();u.a.useEffect((function(){window.scrollTo(0,0),console.log("pm project list",t)}),[t]);var g=Object(m.useState)(),x=Object(s.a)(g,2),f=x[0],N=x[1],y=function(){k.resetForm(),N(null)},C=function(){var e=Object(l.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("values",JSON.stringify(k.values)),i.a.post("evms/create/",k.values).then((function(e){console.log(e),200==e.status&&"True"==e.data.success?(y(),_()("Successfully Created!","","success")):(console.log("error",e),_()("Problem occured during creating EVMS!","","warning"))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=Object(p.a)({initialValues:{project:"",work_package_number:"",earned_value:"",actual_cost:"",estimate_at_completion:"",estimate_to_completion:"",planned_value:"",planned_hours:"",variance_at_completion:"",budget_at_completion:""},validateOnChange:!0,validateOnBlur:!0,validate:function(e){console.log("validating values",e);var a={};return e.project||(a.project="Project Selection is required"),e.earned_value||(a.earned_value="Earned Value is required"),e.actual_cost||(a.actual_cost="Actual Cost is required"),e.estimate_at_completion||(a.estimate_at_completion="Estimate at completion is required"),e.estimate_to_completion||(a.estimate_to_completion="Estimate to completion is required"),e.planned_value||(a.planned_value="Planned Value is required"),e.planned_hours||(a.planned_hours="Planned hours is required"),e.variance_at_completion||(a.variance_at_completion="Variance at completion is required"),e.budget_at_completion||(a.budget_at_completion="Budget at completion is required"),a},onSubmit:C});return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(n.l,{children:Object(h.jsxs)(n.K,{children:[0!=O.length||0==b.length?Object(h.jsx)("div",{className:"col-lg-10 offset-lg-1 col-md-12",children:Object(h.jsxs)(n.g,{className:"custom-project-card-1",children:[Object(h.jsxs)(n.j,{className:"project-header-3",children:[" ",Object(h.jsx)("h4",{className:"section-name-projectcreate",children:"Create EVMS"})]}),Object(h.jsx)(n.l,{children:Object(h.jsx)(n.t,{className:"mt-3",children:Object(h.jsxs)(n.K,{children:[Object(h.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-5",htmlFor:"projectName",children:"Project *"}),Object(h.jsx)(d.a,{closeMenuOnSelect:!0,"aria-labelledby":"projectName",id:"projectName",placeholder:"Select a project",isClearable:!1,isMulti:!1,onChange:function(e){N(e),console.log("projectValue",e),k.setValues({project:e.value,planned_hours:e.data.data.project.planned_hours,planned_value:e.data.data.project.planned_value,work_package_number:e.data.data.project.work_package_number})},classNamePrefix:"custom-forminput-6",options:O,styles:a}),void 0!=f?Object(h.jsx)("div",{className:"mt-1",children:Object(h.jsx)(n.a,{color:"primary",children:Object(h.jsxs)("small",{children:[Object(h.jsx)("b",{children:"Work Package Number:"})," ",f.data.data.project.work_package_number,Object(h.jsx)("br",{}),Object(h.jsx)("b",{children:"Estimated Persons: "})," ",f.data.data.project.estimated_person,Object(h.jsx)("br",{}),Object(h.jsx)("b",{children:"Planned Delivery Date: "})," ",f.data.data.project.planned_delivery_date,Object(h.jsx)("br",{})]})})}):null,k.errors.project&&Object(h.jsx)("p",{className:"error",children:k.errors.project})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-5",htmlFor:"earned_value",children:"Earned Value *"}),Object(h.jsx)(n.y,{className:"custom-forminput-6",name:"earned_value",id:"earned_value",type:"number",min:"0.00",step:"0.01",value:k.values.earned_value,onChange:k.handleChange,required:!0}),k.errors.earned_value&&Object(h.jsx)("p",{className:"error",children:k.errors.earned_value})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-5",htmlFor:"actual_cost",children:"Actual Cost  *"}),Object(h.jsx)(n.y,{className:"custom-forminput-6",name:"actual_cost",id:"actual_cost",type:"number",min:"0",step:"0.1",value:k.values.actual_cost,onChange:k.handleChange,required:!0}),k.errors.actual_cost&&Object(h.jsx)("p",{className:"error",children:k.errors.actual_cost})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-5",htmlFor:"estimate_at_completion",children:"Estimate at completion *"}),Object(h.jsx)(n.y,{className:"custom-forminput-6",name:"estimate_at_completion",id:"estimate_at_completion",type:"number",min:"0",step:"0.1",value:k.values.estimate_at_completion,onChange:k.handleChange,required:!0}),k.errors.estimate_at_completion&&Object(h.jsx)("p",{className:"error",children:k.errors.estimate_at_completion})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-5",htmlFor:"estimate_to_completion",children:"Estimate to completion *"}),Object(h.jsx)(n.y,{className:"custom-forminput-6",name:"estimate_to_completion",id:"estimate_to_completion",type:"number",min:"0",step:"0.1",value:k.values.estimate_to_completion,onChange:k.handleChange,required:!0}),k.errors.estimate_to_completion&&Object(h.jsx)("p",{className:"error",children:k.errors.estimate_to_completion})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-5",htmlFor:"planned_value",children:"Planned Value"}),Object(h.jsx)(n.y,{className:"custom-forminput-6",name:"planned_value",id:"planned_value",type:"number",min:"0",value:k.values.planned_value,onChange:k.handleChange,readOnly:!0}),k.errors.planned_value&&Object(h.jsx)("p",{className:"error",children:k.errors.planned_value})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-5",htmlFor:"planned_hours",children:"Planned Hours"}),Object(h.jsx)(n.y,{className:"custom-forminput-6",name:"planned_hours",id:"planned_hours",type:"number",min:"1",value:k.values.planned_hours,onChange:k.handleChange,readOnly:!0}),k.errors.planned_hours&&Object(h.jsx)("p",{className:"error",children:k.errors.planned_hours})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-5",htmlFor:"variance_at_completion",children:"Variance at completion *"}),Object(h.jsx)(n.y,{className:"custom-forminput-6",name:"variance_at_completion",id:"variance_at_completion",type:"number",min:"0",value:Math.abs(k.values.budget_at_completion-k.values.estimate_at_completion),onChange:k.handleChange,readOnly:!0})]}),Object(h.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(h.jsx)(n.z,{className:"custom-label-5",htmlFor:"budget_at_completion",children:"Budget at completion *"}),Object(h.jsx)(n.y,{className:"custom-forminput-6",name:"budget_at_completion",id:"budget_at_completion",type:"number",min:"0",step:"0.1",value:k.values.budget_at_completion,onChange:function(e){k.setFieldValue("budget_at_completion",e.target.value),k.setFieldValue("variance_at_completion",Math.abs(k.values.budget_at_completion-k.values.estimate_at_completion))},required:!0}),k.errors.budget_at_completion&&Object(h.jsx)("p",{className:"error",children:k.errors.budget_at_completion})]}),Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"project-form-button-holders mt-3",children:[Object(h.jsx)(n.f,{className:"create-btn-prjct create-prjct",onClick:k.handleSubmit,children:"Create EVMS"}),Object(h.jsx)(n.f,{className:"create-btn-prjct cancel-prjct",onClick:y,children:"Cancel"})]})})]})})})]})}):null,0==O.length&&0!=b.length?Object(h.jsx)("div",{className:"col-lg-10 offset-lg-1 col-md-12",children:Object(h.jsxs)(n.a,{className:"no-value-show-alert text-center",color:"primary",children:["All existing projects' EVMS has been created.",Object(h.jsxs)("div",{children:[Object(h.jsx)(n.f,{className:"evms-from-create",variant:"ghost",onClick:function(){return e.push({pathname:"/dashboard/EVMS/view"})},children:"View Details"})," of already existing EVMS's"]})]})}):null]})})})}},787:function(e,a,t){}}]);
//# sourceMappingURL=39.1c41b6e1.chunk.js.map