(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[40],{1476:function(e,t,s){"use strict";s.r(t);var a=s(33),c=s(495),l=s(509),n=s(0),r=s.n(n),i=s(94),d=s(506),o=s(73),m=s.n(o),j=(s(616),s(102)),b=s(669),O=(s(697),s(539),s(4));t.default=function(){var e,t,s,o,u=Object(n.useState)([]),f=Object(a.a)(u,2),h=(f[0],f[1],[]),x=Object(i.c)((function(e){return e.profile.data})),p=Object(i.c)((function(e){var t=[];return Array.from(e.timecardList.user_weekly_submitted_timecards).forEach((function(e,s){t.push({Weekending:m()(e.week_end).format("ddd, MMMM DD, YYYY"),Name:e.employee.first_name+" "+e.employee.last_name,Total:e.total_hours,RHR:null==e.RHR?"-":e.RHR,SIC:null==e.SIC?"-":e.SIC,HOL:null==e.HOL?"-":e.HOL,WFH:null==e.WFH?"-":e.WFH,OTO:null==e.OTO?"-":e.OTO,PB1:null==e.PB1?"-":e.PB1,Submitted:m()(e.submitted_at).format("ddd, MMMM DD, YYYY")+" at "+m()(e.submitted_at).format("h:mm")})})),h=[].concat(t),t})),k=Object(i.b)();r.a.useEffect((function(){k(Object(j.e)())}),[]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(c.l,{children:[Object(O.jsxs)(c.K,{children:[Object(O.jsx)(c.k,{children:Object(O.jsx)("h3",{className:"timecards-page-header mb-3",children:"Submitted Timecards"})}),Object(O.jsxs)(c.k,{md:"8",id:"tableRef",className:"d-flex justify-content-end",children:[Object(O.jsx)("h5",{className:"tiny-header--5 mt-3 mr-2",children:"Export "}),Object(O.jsxs)("div",{className:"format-buttons mt-3 mb-3 ",children:[Object(O.jsxs)(c.f,{className:"file-format-download",onClick:function(){!function(){var e=x.first_name+" "+x.last_name,t=new b.default("portrait","pt","A4");t.setFontSize(15);var s={startY:145,head:[["Weekending","Name","Total","RHR","SIC","HOL","PB1","WFH","OTO","Submitted"]],body:h.map((function(e,t){return[e.Weekending,e.Name,e.Total,e.RHR,e.SIC,e.HOL,e.PB1,e.WFH,e.OTO,e.Submitted,console.log("data",e)]}))};t.text(170,50,"Datasoft Manufacturing & Assembly"),t.setFontSize(13),t.text(245,75,"Gulshan Branch"),t.setFontSize(11),t.text(42,105,"Submitted Time Card"),Object(d.f)("projects.add_projects")||t.text(42,125,"Employee Name: "+e),t.text(440,360,"Total "+h.length+" Submitted"),t.autoTable(s),t.save("Timecard of "+e+".pdf")}()},children:[Object(O.jsx)(l.a,{name:"cil-description",className:"mr-2"})," PDF"]}),Object(O.jsxs)(c.f,{className:"file-format-download",onClick:function(){},children:[Object(O.jsx)(l.a,{name:"cil-spreadsheet",className:"mr-2"}),"Excel"]})]})]})]}),Object(O.jsx)(c.K,{className:"mt-4",children:Object(O.jsx)(c.k,{children:Object(O.jsxs)(c.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Company :"," ",null===(e=x.slc_details)||void 0===e||null===(t=e.slc)||void 0===t||null===(s=t.department)||void 0===s||null===(o=s.company)||void 0===o?void 0:o.name]})})}),Object(O.jsx)(c.K,{children:!Object(d.f)("projects.add_projects")&&Object(O.jsx)(c.k,{children:Object(O.jsxs)(c.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Employee Name :"," ",Object(d.b)(x.first_name)+" "+Object(d.b)(x.last_name)]})})}),Object(O.jsx)(c.K,{className:"mt-5",children:Object(O.jsxs)(c.k,{children:[Object(O.jsx)(c.m,{items:p,fields:[{key:"Weekending",_style:{width:"15%"},_classes:"font-weight-bold"},"Name","Total",{key:"RHR",sorter:!1},{key:"SIC",sorter:!1},{key:"HOL",sorter:!1},{key:"PB1",sorter:!1},{key:"WFH",sorter:!1},{key:"OTO",sorter:!1},{key:"Submitted",sorter:!1}],itemsPerPage:10,pagination:!0,striped:!0,bordered:!0,sorter:!0}),Object(O.jsx)("div",{class:"alert alert-info",role:"alert",children:Object(O.jsxs)(c.K,{children:[Object(O.jsx)(c.k,{md:"5"}),Object(O.jsx)(c.k,{md:"3"}),Object(O.jsx)(c.k,{md:"4",children:Object(O.jsxs)("small",{children:["   ","Total ",Object(O.jsxs)("b",{children:["\xa0",p.length,"\xa0"]})," ","Submitted"]})})]})})]})})]})})}},616:function(e,t,s){}}]);
//# sourceMappingURL=40.84e795e3.chunk.js.map