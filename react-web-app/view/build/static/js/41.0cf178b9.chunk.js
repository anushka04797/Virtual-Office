(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[41],{1448:function(e,t,a){"use strict";a.r(t);var n=a(30),s=a(9),l=a(6),r=a.n(l),o=a(490),c=a(506),i=a(0),d=a.n(i),m=a(91),u=a(501),b=a(68),j=a.n(b),f=(a(608),a(100)),h=a(662),O=(a(690),a(534)),y=a(8),g=a(5);t.default=function(){var e,t,l,b,p=Object(m.b)(),k=[],x=Object(m.c)((function(e){return e.profile.data})),S=Object(m.c)((function(e){var t=[];return Array.from(e.timecardList.user_weekly_submitted_timecards).forEach((function(e,a){t.push({id:e.employee.id,data:e.employee,Weekending:j()(e.week_end).format("ddd, MMMM DD, YYYY"),Name:e.employee.first_name+" "+e.employee.last_name,Total:e.total_hours,RHR:null==e.RHR?"-":e.RHR,SIC:null==e.SIC?"-":e.SIC,HOL:null==e.HOL?"-":e.HOL,WFH:null==e.WFH?"-":e.WFH,OTO:null==e.OTO?"-":e.OTO,PB1:null==e.PB1?"-":e.PB1,Submitted:j()(e.submitted_at).format("ddd, MMMM DD, YYYY")+" at "+j()(e.submitted_at).format("h:mm")})})),k=[].concat(t),t}));d.a.useEffect((function(){p(Object(f.e)())}),[]);function w(){return(w=Object(s.a)(r.a.mark((function e(){var t,n,s,l,o,c,i,d,m,u,b,f,h,y;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=a(890),n=new t.Workbook,(s=n.addWorksheet("sheet1")).mergeCells("B1:F2"),(l=s.getCell("C1")).value="Datasoft Manufacturing & Assembly",l.font={size:15,bold:!0},s.getCell("C1").alignment={horizontal:"center",vertical:"center"},s.mergeCells("C3:D3"),(o=s.getCell("C3")).value="Gulshan Branch",o.font={size:13,bold:!0},o.alignment={horizontal:"center",vertical:"center"},s.mergeCells("A5:B5"),s.getCell("A5").value="Submitted Timecards",s.getRow(8).values=["Weekending","Name","Total","RHR","SIC","HOL","PB1","WFH","OTO","Submitted"],s.getRow(8).font={name:"Arial Black",family:3,size:10},s.getRow(8).height=20,s.columns=[{key:"Weekending",width:20},{key:"Name",width:25},{key:"Total",width:10},{key:"RHR",width:10},{key:"SIC",width:10},{key:"HOL",width:10},{key:"PB1",width:10},{key:"WFH",width:10},{key:"OTO",width:10},{key:"Submitted",width:20}],console.log("submitted",k),c=0;c<k.length;c++)s.addRow({Weekending:k[c].Weekending,Name:k[c].Name,Total:k[c].Total,RHR:k[c].RHR,SIC:k[c].SIC,HOL:k[c].HOL,PB1:k[c].PB1,WFH:k[c].WFH,OTO:k[c].OTO,Submitted:k[c].Submitted});return i=k.length+11,0!=S.length&&(s.getRow(i).values=["Total Submitted =  "+k.length]),e.next=26,n.xlsx.writeBuffer();case 26:d=e.sent,"application/octet-stream",".xlsx",m=new Blob([d],{type:"application/octet-stream"}),u=x.first_name+"_"+x.last_name,b=new Date,f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][b.getDay()],h=j()(b).format("DD-MM-YYYY"),y=u+"_"+f+"_"+h+"_.xlsx",Object(O.saveAs)(m,y);case 37:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=Object(i.useState)(""),v=Object(n.a)(_,2),H=(v[0],v[1]),D=Object(i.useState)(""),T=Object(n.a)(D,2),Y=(T[0],T[1]),C=Object(i.useState)(0),N=Object(n.a)(C,2),R=(N[0],N[1],function(){for(var e=new Date,t=0;t<7;t++){if(6===e.getDay()){console.log("sat",e);break}e=j()(e).add(1,"day").toDate()}return e=j()(e).format("YYYY-MM-DD")}),M=function(e,t){console.log("id : ",e,"Name ",t);var a=function(){for(var e=new Date,t=new Date,a=0;a<7;a++){if(0===e.getDay()){console.log("start",e);break}e=j()(e).subtract(1,"day").toDate()}return console.log("end date",t),H(j()(e).format("YYYY-MM-DD")),Y(R()),{start:j()(e).format("YYYY-MM-DD"),end:R()}}(),n=a.start,s=a.end;y.a.get("wbs/user/time-card/list/"+e+"/").then((function(e){var a=[];Array.from(e.data.data).forEach((function(e,t){a.push({data:e})}));var l;l=a.filter((function(e){return e.data.date_updated>=n&&e.data.date_updated<=s})),console.log("filtered",l);for(var r=0,o=[],c=0;c<l.length;c++)0==l[c].data.submitted&&0,1==l[c].data.submitted&&(o.push(l[c]),r+=parseFloat(l[c].data.hours_today));console.log("submittedtcs",o),console.log("total hours",r),Object(u.e)(o,t,s,r,n)}))};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(o.l,{children:[Object(g.jsxs)(o.K,{children:[Object(g.jsx)(o.k,{children:Object(g.jsx)("h3",{className:"timecards-page-header mb-3",children:"Submitted Timecards"})}),Object(g.jsxs)(o.k,{md:"8",id:"tableRef",className:"d-flex justify-content-end",children:[Object(g.jsx)("h5",{className:"tiny-header--5 mt-3 mr-2",children:"Export "}),Object(g.jsxs)("div",{className:"format-buttons mt-3 mb-3 ",children:[Object(g.jsxs)(o.f,{className:"file-format-download",onClick:function(){!function(){var e=x.first_name+"_"+x.last_name,t=new h.default("portrait","pt","A4");t.setFontSize(15);var a={startY:145,head:[["Weekending","Name","Total","RHR","SIC","HOL","PB1","WFH","OTO","Submitted"]],body:k.map((function(e,t){return[e.Weekending,e.Name,e.Total,e.RHR,e.SIC,e.HOL,e.PB1,e.WFH,e.OTO,e.Submitted,console.log("data",e)]}))},n=new Date,s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()],l=j()(n).format("DD-MM-YYYY");console.log("days ",l),t.text(170,50,"Datasoft Manufacturing & Assembly"),t.setFontSize(13),t.text(245,75,"Gulshan Branch"),t.setFontSize(11),t.text(42,105,"Submitted Time Card"),Object(u.g)("projects.add_projects")||t.text(42,125,"Employee Name: "+e),t.text(440,360,"Total "+k.length+" Submitted"),t.autoTable(a),t.save(e+"_"+s+"_"+l+"_.pdf")}()},children:[Object(g.jsx)(c.a,{name:"cil-description",className:"mr-2"})," PDF"]}),Object(g.jsxs)(o.f,{className:"file-format-download",onClick:function(){!function(){w.apply(this,arguments)}()},children:[Object(g.jsx)(c.a,{name:"cil-spreadsheet",className:"mr-2"}),"Excel"]})]})]})]}),Object(g.jsx)(o.K,{className:"mt-4",children:Object(g.jsx)(o.k,{children:Object(g.jsxs)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Company :"," ",null===(e=x.slc_details)||void 0===e||null===(t=e.slc)||void 0===t||null===(l=t.department)||void 0===l||null===(b=l.company)||void 0===b?void 0:b.name]})})}),Object(g.jsx)(o.K,{children:!Object(u.g)("projects.add_projects")&&Object(g.jsx)(o.k,{children:Object(g.jsxs)(o.z,{className:"custom-label-5",htmlFor:"assigneeSelect",children:["Employee Name :"," ",Object(u.b)(x.first_name)+" "+Object(u.b)(x.last_name)]})})}),Object(g.jsx)(o.K,{className:"mt-5",children:Object(g.jsxs)(o.k,{children:[Object(g.jsx)(o.m,{items:S,fields:[{key:"Weekending",_style:{width:"15%"},_classes:"font-weight-bold"},"Name","Total",{key:"RHR",sorter:!1},{key:"SIC",sorter:!1},{key:"HOL",sorter:!1},{key:"PB1",sorter:!1},{key:"WFH",sorter:!1},{key:"OTO",sorter:!1},{key:"Submitted",sorter:!1}],itemsPerPage:10,pagination:!0,striped:!0,bordered:!0,sorter:!0,scopedSlots:{Name:function(e){return Object(g.jsx)("td",{children:Object(g.jsx)("a",{onClick:function(){M(e.id,e.Name)},size:"sm",type:"button",color:"primary",children:Object(g.jsxs)("u",{children:[" ",e.Name]})})})}}}),Object(g.jsx)("div",{class:"alert alert-info",role:"alert",children:Object(g.jsxs)(o.K,{children:[Object(g.jsx)(o.k,{md:"5"}),Object(g.jsx)(o.k,{md:"3"}),Object(g.jsx)(o.k,{md:"4",children:Object(g.jsxs)("small",{children:["   ","Total ",Object(g.jsxs)("b",{children:["\xa0",S.length,"\xa0"]})," ","Submitted"]})})]})})]})})]})})}},608:function(e,t,a){}}]);
//# sourceMappingURL=41.0cf178b9.chunk.js.map