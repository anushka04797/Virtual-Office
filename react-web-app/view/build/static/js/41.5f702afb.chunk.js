(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[41],{1142:function(e,a,t){"use strict";t.r(a);var s=t(33),l=t(496),c=t(0),n=t(509),o=t(11),i=t(594),r=t.n(i),d=t(1031),m=(t(1143),t(8)),u=t(1032),j=t(95),h=t(522),b=t(103),p=t(511),_=t.n(p),v=t(4);a.default=function(){var e=Object(c.useState)(!1),a=Object(s.a)(e,2),t=a[0],i=a[1],p=Object(c.useState)(""),O=Object(s.a)(p,2),x=(O[0],O[1]),f=Object(c.useState)(""),g=Object(s.a)(f,2),N=g[0],C=g[1],k=Object(j.b)(),y=Object(o.g)(),w=Object(j.c)((function(e){return e.evmsList.data})),E=function(e){i(!t),C(null===e||void 0===e?void 0:e.project.sub_task),x(null===e||void 0===e?void 0:e.id),V.setValues({id:null===e||void 0===e?void 0:e.id,project:null===e||void 0===e?void 0:e.project.id,planned_hours:null===e||void 0===e?void 0:e.project.planned_hours,planned_value:null===e||void 0===e?void 0:e.project.planned_value,earned_value:null===e||void 0===e?void 0:e.earned_value,actual_cost:null===e||void 0===e?void 0:e.actual_cost,estimate_at_completion:null===e||void 0===e?void 0:e.estimate_at_completion,estimate_to_completion:null===e||void 0===e?void 0:e.estimate_to_completion,variance_at_completion:null===e||void 0===e?void 0:e.variance_at_completion,budget_at_completion:null===e||void 0===e?void 0:e.budget_at_completion})},V=Object(h.a)({initialValues:{id:"",project:"",planned_value:"",planned_hours:"",earned_value:"",actual_cost:"",estimate_at_completion:"",estimate_to_completion:"",variance_at_completion:"",budget_at_completion:""},validateOnBlur:!0,validateOnChange:!0,validate:function(e){var a={};return e.planned_value||(a.planned_value="Planned Value is required"),e.planned_hours||(a.planned_hours="Planned hours is required"),e.earned_value||(a.earned_value="Earned value is required"),e.actual_cost||(a.actual_cost="Actual cost is required"),e.estimate_at_completion||(a.estimate_at_completion="Estimate at completion is required"),e.estimate_to_completion||(a.estimate_to_completion="Estimate to completion is required"),e.variance_at_completion||(a.variance_at_completion="Variance at completion is required"),e.budget_at_completion||(a.budget_at_completion="Budget at completion required"),a},onSubmit:function(e){m.a.put("evms/update/"+e.id+"/",e).then((function(e){console.log(e),200==e.status&&"True"==e.data.success?(k(Object(b.b)(sessionStorage.getItem(m.k))),i(!1),_()("EVMS has been updated!","","success")):_()("Error","There was a problem updating","warning")}))}});return Object(c.useEffect)((function(){console.log("evmsList",w)}),[w]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(l.l,{children:[Object(v.jsxs)(l.B,{closeOnBackdrop:!1,alignment:"center",show:t,onClose:E,children:[Object(v.jsxs)(l.E,{onClose:function(){return i(!t)},closeButton:!0,children:["  ",Object(v.jsx)(l.F,{className:"modal-title",children:Object(v.jsx)("span",{className:"edit-profile-form-header",children:"Edit EVMS Info"})})]}),Object(v.jsx)(l.C,{children:Object(v.jsx)(l.l,{children:Object(v.jsx)(l.t,{children:Object(v.jsxs)(l.K,{children:[Object(v.jsxs)(l.k,{lg:"12",md:"12",sm:"12",className:"mb-2",children:[Object(v.jsx)(l.z,{className:"custom-label-5",htmlFor:"project",children:"Project Name"}),Object(v.jsx)(l.y,{className:"custom-forminput-6",name:"project",id:"project",value:N,readOnly:!0})]}),Object(v.jsxs)(l.k,{className:"mb-2",g:"6",md:"6",sm:"12",children:[Object(v.jsx)(l.z,{className:"custom-label-5",htmlFor:"planned_value",children:"Planned Value"}),Object(v.jsx)(l.y,{className:"custom-forminput-6",name:"planned_value",id:"planned_value",value:V.values.planned_value,onChange:V.handleChange,type:"number",min:"1",required:!0,readOnly:!0}),V.errors.planned_value&&Object(v.jsx)("p",{className:"error",children:V.errors.planned_value})]}),Object(v.jsxs)(l.k,{className:"mb-2",g:"6",md:"6",sm:"12",children:[Object(v.jsx)(l.z,{className:"custom-label-5",htmlFor:"planned_hours",children:"Planned Hours"}),Object(v.jsx)(l.y,{className:"custom-forminput-6",name:"planned_hours",id:"planned_hours",value:V.values.planned_hours,onChange:V.handleChange,type:"number",min:"0",required:!0,readOnly:!0}),V.errors.planned_hours&&Object(v.jsx)("p",{className:"error",children:V.errors.planned_hours})]}),Object(v.jsxs)(l.k,{lg:"6",md:"6",sm:"12",className:"mb-2",children:[Object(v.jsx)(l.z,{className:"custom-label-5",htmlFor:"earned_value",children:"Earned Value"}),Object(v.jsx)(l.y,{className:"custom-forminput-6",name:"earned_value",id:"earned_value",value:V.values.earned_value,onChange:V.handleChange,required:!0,type:"number",min:"0"}),V.errors.earned_value&&Object(v.jsx)("p",{className:"error",children:V.errors.earned_value})]}),Object(v.jsxs)(l.k,{lg:"6",md:"6",sm:"12",className:"mb-2",children:[Object(v.jsx)(l.z,{className:"custom-label-5",htmlFor:"actual_cost",children:"Actual Cost"}),Object(v.jsx)(l.y,{className:"custom-forminput-6",name:"actual_cost",id:"actual_cost",value:V.values.actual_cost,onChange:V.handleChange,type:"number",min:"0",required:!0}),V.errors.actual_cost&&Object(v.jsx)("p",{className:"error",children:V.errors.actual_cost})]}),Object(v.jsxs)(l.k,{lg:"6",md:"6",sm:"12",className:"mb-2",children:[Object(v.jsx)(l.z,{className:"custom-label-5",htmlFor:"estimate_at_completion",children:"Estimate at completion"}),Object(v.jsx)(l.y,{className:"custom-forminput-6",name:"estimate_at_completion",id:"estimate_at_completion",type:"number",min:"1",value:V.values.estimate_at_completion,onChange:V.handleChange,required:!0}),V.errors.estimate_at_completion&&Object(v.jsx)("p",{className:"error",children:V.errors.estimate_at_completion})]}),Object(v.jsxs)(l.k,{lg:"6",md:"6",sm:"12",className:"mb-2",children:[Object(v.jsx)(l.z,{className:"custom-label-5",htmlFor:"estimate_to_completion",children:"Estimate to completion"}),Object(v.jsx)(l.y,{className:"custom-forminput-6",name:"estimate_to_completion",id:"estimate_to_completion",type:"number",min:"1",value:V.values.estimate_to_completion,onChange:V.handleChange,required:!0}),V.errors.estimate_to_completion&&Object(v.jsx)("p",{className:"error",children:V.errors.estimate_to_completion})]}),Object(v.jsxs)(l.k,{lg:"6",md:"6",sm:"12",className:"mb-2",children:[Object(v.jsx)(l.z,{className:"custom-label-5",htmlFor:"variance_at_completion",children:"Variance at completion"}),Object(v.jsx)(l.y,{className:"custom-forminput-6",name:"variance_at_completion",id:"variance_at_completion",type:"number",min:"0",value:Math.abs(V.values.budget_at_completion-V.values.estimate_at_completion),onChange:V.handleChange,readOnly:!0})]}),Object(v.jsxs)(l.k,{lg:"6",md:"6",sm:"12",className:"mb-2",children:[Object(v.jsx)(l.z,{className:"custom-label-5",htmlFor:"budget_at_completion",children:"Budget at completion"}),Object(v.jsx)(l.y,{className:"custom-forminput-6",name:"budget_at_completion",id:"budget_at_completion",type:"number",value:V.values.budget_at_completion,onChange:V.handleChange,required:!0}),V.errors.budget_at_completion&&Object(v.jsx)("p",{className:"error",children:V.errors.budget_at_completion})]}),Object(v.jsx)(l.k,{md:"12",children:Object(v.jsxs)("div",{className:"project-form-button-holders mt-3",children:[Object(v.jsx)(l.f,{className:"profile-form-btn update-profile",onClick:V.handleSubmit,children:"Update Info"}),Object(v.jsx)(l.f,{className:"profile-form-btn cancel-update",onClick:function(){return i(!t)},type:"reset",children:"Cancel"})]})})]})})})})]}),Object(v.jsx)("h4",{className:"dash-header mb-3",children:"EVMS View"}),Object(v.jsx)(l.K,{children:Object(v.jsxs)("div",{className:"col-md-12 col-sm-12 col-xs-12 mt-1",children:[void 0!=w&&Array.from(w).map((function(e,a){return Object(v.jsx)(l.g,{className:"card-ongoing-project",children:Object(v.jsxs)(l.h,{className:"details-project-body",children:[Object(v.jsxs)("div",{className:"card-header-portion-ongoing",children:[Object(v.jsxs)("h4",{className:"ongoing-card-header-1",children:[Object(v.jsx)(d.a,{"aria-label":"favourite",disabled:!0,size:"medium",color:"primary",children:Object(v.jsx)(r.a,{fontSize:"inherit",className:"fav-button"})}),e.project.task_delivery_order.title+" / "+e.project.sub_task]}),Object(v.jsxs)("div",{className:"action-button-holders--2",children:[Object(v.jsxs)(l.f,{className:"edit-project-on",onClick:function(){return E(e)},children:[Object(v.jsx)(n.a,{name:"cil-pencil",className:"mr-1"})," Edit"]}),Object(v.jsxs)(l.f,{className:"view-ongoing-details",onClick:function(){return y.push({pathname:"/dashboard/EVMS/details/"})},children:[Object(v.jsx)(n.a,{name:"cil-list-rich",className:"mr-1"}),"View Details"]})]})]}),Object(v.jsx)("hr",{className:"header-underline1"}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(v.jsx)(u.a,{type:"line",datasets:[{label:"Time",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",tooltipLabelColor:"rgba(179,181,198,1)",data:[65,59,900,81,560,55,1e3]},{label:"Cost",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,10]}],options:{aspectRatio:1.5,tooltips:{enabled:!0}}})}),Object(v.jsxs)("div",{className:"col-lg-5 offset-lg-1 col-md-12 mt-3",children:[Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"work package : "}),e.work_package_number]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"earned value: "}),e.earned_value]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"actual cost : "}),e.actual_cost]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"planned value : "}),e.project.planned_value]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"planned hours : "}),e.project.planned_hours]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"estimate at completion : "}),e.estimate_at_completion]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"estimation to completion : "}),e.estimate_to_completion]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"variance at completion : "}),Math.abs((null===e||void 0===e?void 0:e.budget_at_completion)-(null===e||void 0===e?void 0:e.estimate_at_completion))]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"budget at completion : "}),e.budget_at_completion]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"date created : "}),e.date_created]}),Object(v.jsxs)("h5",{className:"evms-info-view child",children:[Object(v.jsx)("span",{className:"info-header--evms",children:"date updated : "}),e.date_updated]})]})]})]})},a)})),void 0==w||0==w?Object(v.jsxs)(l.a,{className:"no-value-show-alert text-center",color:"primary",children:["Currently there are no EVMS details available.",Object(v.jsx)("div",{children:Object(v.jsx)(l.f,{className:"evms-from-details",onClick:function(){return y.push({pathname:"/dashboard/EVMS/create"})},children:"Create a new EVMS"})})]}):null]})})]})})}},1143:function(e,a,t){}}]);
//# sourceMappingURL=41.5f702afb.chunk.js.map