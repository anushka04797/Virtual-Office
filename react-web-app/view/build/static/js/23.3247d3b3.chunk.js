(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[23],{1137:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(96),o=a(9),r=a(113),i=a(99),l=a(103),d=a(13),m=a(33),j=a(11),b=a(493),u=a(500),h=a(501),p=function(){function e(t){var a=t.timeout,n=t.onTimeout,c=t.onExpired;Object(u.a)(this,e),this.timeout=a,this.onTimeout=n;var s=parseInt(localStorage.getItem("_expiredTime"),10);s>0&&s<Date.now()?c():(this.eventHandler=this.updateExpiredTime.bind(this),this.tracker(),this.startInterval())}return Object(h.a)(e,[{key:"startInterval",value:function(){var e=this;this.updateExpiredTime(),this.interval=setInterval((function(){parseInt(localStorage.getItem("_expiredTime"),10)<Date.now()&&e.onTimeout&&(e.onTimeout(),e.cleanUp())}),1e3)}},{key:"updateExpiredTime",value:function(){var e=this;this.timeoutTracker&&clearTimeout(this.timeoutTracker),this.timeoutTracker=setTimeout((function(){localStorage.setItem("_expiredTime",Date.now()+1e3*e.timeout)}),300)}},{key:"tracker",value:function(){window.addEventListener("mousemove",this.eventHandler),window.addEventListener("scroll",this.eventHandler),window.addEventListener("keydown",this.eventHandler)}},{key:"cleanUp",value:function(){localStorage.removeItem("_expiredTime"),clearInterval(this.interval),window.removeEventListener("mousemove",this.eventHandler),window.removeEventListener("scroll",this.eventHandler),window.removeEventListener("keydown",this.eventHandler)}}]),e}(),x=a(681),O=a(4),f=Object(O.jsx)("div",{className:"pt-3 text-center",children:Object(O.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),v=function(){var e=c.a.useState(!1),t=Object(m.a)(e,2),a=(t[0],t[1]),s=Object(j.g)();return c.a.useEffect((function(){var e=new p({timeout:600,onTimeout:function(){a(!0),sessionStorage.clear(),s.push("/login"),console.log("timed out")},onExpired:function(){a(!0),sessionStorage.clear(),s.push("/login"),console.log("expired")}});return function(){e.cleanUp()}}),[]),Object(O.jsx)("main",{className:"c-main",children:Object(O.jsx)(b.l,{children:Object(O.jsx)(n.Suspense,{fallback:f,children:Object(O.jsx)(j.d,{children:x.a.map((function(e,t){return e.component&&Object(O.jsx)(j.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(O.jsx)(b.r,{children:Object(O.jsx)(e.component,Object(d.a)({},t))})}},t)}))})})})})},g=c.a.memo(v),P=function(){return Object(O.jsxs)(b.s,{fixed:!1,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("a",{href:"http://dma.com.bd:8000",target:"_self",rel:"noopener noreferrer",children:"Virtual Office V1.0.0"}),Object(O.jsx)("span",{className:"ml-1",children:"\xa9 2022 DMA"})]}),Object(O.jsxs)("div",{className:"mfs-auto",children:[Object(O.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(O.jsx)("a",{href:"https://dma.com.bd",target:"_blank",rel:"noopener noreferrer",children:"DMA"})]})]})},N=c.a.memo(P),w=a(499),S=a(122),y=(a(881),a(1146)),I=a(733),k=a(1155),C=a(889),E=a.n(C),T=a(1144),z=a(1147),M=a(1152),_=a(1149),V=a(1129),D=a(882),W=a.n(D),A=a(477),B=a(37),L=a(1148),H=a(1150),U=a(1151),G=a(1131),J=n.forwardRef((function(e,t){return Object(O.jsx)(A.a,Object(d.a)({direction:"up",ref:t},e))}));function R(e){return Object(O.jsx)(W.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:Object(O.jsx)(y.a,Object(d.a)({},e))})}Object(B.a)(y.a)((function(e){var t=e.theme;return Object(d.a)(Object(d.a)({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function F(e){var t=n.useState(!1),a=Object(m.a)(t,2);a[0],a[1];return Object(O.jsx)("div",{children:Object(O.jsxs)(z.a,{maxWidth:"sm",fullWidth:!0,open:e.open,onClose:e.handleClose,PaperComponent:R,"aria-labelledby":"Search Result",TransitionComponent:J,children:[Object(O.jsx)(V.a,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Search Result"}),Object(O.jsxs)(_.a,{children:[Object(O.jsxs)(L.a,{sx:{fontSize:14,fontWeight:"bold",marginBottom:3},color:"#000000",children:["You searched for '",e.searchText,"'"]}),Object(O.jsx)(b.J,{children:Object(O.jsx)(H.a,{children:Object(O.jsx)(U.a,{children:Object(O.jsx)(L.a,{sx:{fontSize:14,fontWeight:"bold"},color:"#000000",children:"Employees"})})})}),Object(O.jsx)(G.a,{orientation:"vertical",flexItem:!0}),Object(O.jsx)(b.J,{className:"mt-2",children:Object(O.jsx)(H.a,{children:Object(O.jsx)(U.a,{children:Object(O.jsx)(L.a,{sx:{fontSize:14,fontWeight:"bold"},color:"#000000",children:"Projects"})})})})]}),Object(O.jsx)(M.a,{children:Object(O.jsx)(T.a,{autoFocus:!0,onClick:e.handleClose,children:"Close"})})]})})}a(1133),a(1141),a(1156),a(1153),a(1154),a(887);var q=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),r=o[0],i=o[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(y.a,{component:"form",variant:"elevation",rounded:!0,elevation:3,sx:{p:"2px 4px",margin:1,display:"flex",alignItems:"center",width:400},children:[Object(O.jsx)(I.c,{sx:{ml:1,flex:1},placeholder:"Search",inputProps:{"aria-label":"search"},value:a,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)(k.a,{type:"submit",sx:{p:"10px"},"aria-label":"search",onClick:function(){String(a).length>0&&i(!0)},children:Object(O.jsx)(E.a,{})}),Object(O.jsx)(F,{open:r,handleClose:function(){return i(!1)},searchText:a})]})})},K=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.sidebar.sidebarShow})),a=Object(j.g)();return c.a.useEffect((function(){console.log("sidebar --- ",t)}),[]),Object(O.jsxs)(b.u,{withSubheader:!0,className:"justify-content-between",colorScheme:"light",children:[Object(O.jsx)(b.V,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(t)||"responsive";e(Object(S.a)(a))}}),Object(O.jsx)(b.V,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(t)&&"responsive";e(Object(S.a)(a))}}),Object(O.jsx)(b.v,{className:"d-md-down-none",children:Object(O.jsx)(b.w,{className:"px-3 justify-content-between",children:Object(O.jsx)(q,{})})}),Object(O.jsx)(b.v,{className:"px-3",children:Object(O.jsx)(Q,{})}),Object(O.jsxs)(b.Q,{className:"px-3 justify-content-between",children:[Object(O.jsxs)(b.f,{className:"back-button",onClick:function(){return a.goBack()},children:[Object(O.jsx)(w.a,{name:"cil-arrow-thick-from-right",className:"mr-2"}),"Back"]}),Object(O.jsx)(b.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3 custom-router",routes:x.a})]})]})},Q=function(){var e=Object(j.g)(),t=Object(s.c)((function(e){return e.profile.data}));return Object(O.jsxs)(b.n,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(O.jsxs)(b.q,{className:"c-header-nav-link",caret:!1,children:[Object(O.jsx)("div",{className:"c-avatar",children:Object(O.jsx)(b.x,{src:null!=t.profile_pic?o.b+t.profile_pic:"avatars/user-avatar-default.png",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(O.jsx)("span",{className:"ml-2  u-name",children:t.first_name})]}),Object(O.jsxs)(b.p,{className:"pt-0",placement:"bottom-end",children:[Object(O.jsx)(b.o,{header:!0,tag:"div",color:"light",className:"text-center drop-text",children:Object(O.jsx)("strong",{children:"Account"})}),Object(O.jsxs)(b.o,{className:"drop-text",to:"/dashboard/profile",children:[Object(O.jsx)(w.a,{name:"cil-user",className:"mfe-2"}),"Profile"]}),Object(O.jsx)(b.o,{divider:!0}),Object(O.jsxs)(b.o,{onClick:function(){o.a.get("auth/logout/").then((function(t){window.sessionStorage.clear(),e.push("/")})).catch((function(t){sessionStorage.clear(),e.push("/")}))},className:"drop-text",children:[Object(O.jsx)(w.a,{name:"cil-account-logout",className:"mfe-2"}),"Log out"]})]})]})},Y=(a(890),a(511)),X=function(){var e=Object(s.b)(),t=Object(j.g)(),a=Object(s.c)((function(e){return e.sidebar.sidebarShow}));c.a.useEffect((function(){}),[]);return Object(O.jsxs)(b.K,{colorScheme:"light",show:a,onShowChange:function(t){return e(Object(S.a)(t))},children:[Object(O.jsxs)(b.L,{className:"d-md-down-none custom-color",to:"/",children:[Object(O.jsx)(b.x,{className:"c-sidebar-brand-full",src:"assets/icons/DMA-LOGO-BIG.svg",height:35}),Object(O.jsx)("h6",{className:"c-sidebar-brand-full name-brand1",children:"Virtual Office"}),Object(O.jsx)(b.x,{className:"c-sidebar-brand-minimized",src:"assets/icons/DMA-logo-small.svg",height:35}),Object(O.jsx)("span",{className:"c-sidebar-brand-minimized name-brand1",children:"VO"})]}),Object(O.jsxs)(b.N,{className:"vo-sidebar",children:[Object(O.jsx)(b.P,{to:"/dashboard",icon:"cil-speedometer",name:"Dashboard",className:"vo-navItem"}),Object(O.jsxs)(b.O,{icon:"cib-ghost",name:"Projects",className:"vo-navItem",children:[Object(Y.d)("projects.add_projects")&&Object(O.jsx)(b.P,{to:"/dashboard/Projects/create-new-project",name:"Create New Project",className:"vo-navItem"}),Object(Y.d)("projects.add_projects")&&Object(O.jsx)(b.P,{to:"/dashboard/Projects/my-projects",name:"My Projects",className:"vo-navItem"}),Object(O.jsx)(b.P,{to:"/dashboard/Projects/assigned-projects",name:"Assigned Projects",className:"vo-navItem"}),Object(O.jsx)(b.P,{to:"/dashboard/Projects/completed-projects",name:"Completed Projects",className:"vo-navItem"})]}),Object(O.jsxs)(b.O,{icon:"cil-spreadsheet",name:"WBS",className:"vo-navItem",children:[Object(O.jsx)(b.P,{to:"/dashboard/WBS/create-wbs",name:"Create WBS",className:"vo-navItem"}),Object(O.jsx)(b.P,{to:"/dashboard/WBS/board",name:"Board",className:"vo-navItem"})]}),Object(Y.d)("evms.view_evms")&&Object(O.jsxs)(b.O,{icon:"cil-chart-line",name:"EVMS",className:"vo-navItem",children:[Object(O.jsx)(b.P,{to:"/dashboard/EVMS/create",name:"Create EVMS",className:"vo-navItem"}),Object(O.jsx)(b.P,{to:"/dashboard/EVMS/view",name:"View EVMS",className:"vo-navItem"})]}),Object(O.jsx)(b.P,{to:"/dashboard/employees",name:"Employees",icon:"cil-people",className:"vo-navItem"}),!Object(Y.d)("projects.add_projects")&&Object(O.jsx)(b.P,{to:"/dashboard/timecard/generate-timecard",name:"Generate Timecard",icon:"cil-library",className:"vo-navItem"}),Object(Y.d)("projects.add_projects")&&Object(O.jsxs)(b.O,{icon:"cil-library",name:"Timecards",className:"vo-navItem",children:[Object(O.jsx)(b.P,{to:"/dashboard/timecard/generate-timecard",name:"Actual Work Done",className:"vo-navItem"}),Object(O.jsx)(b.P,{to:"/dashboard/timecard/weekly-timecards",name:"Weekly Timecard",className:"vo-navItem"}),Object(O.jsx)(b.P,{to:"/dashboard/timecard/weekly-timecards",name:"Report",className:"vo-navItem"})]}),Object(O.jsx)(b.P,{to:"/dashboard/meetings",icon:"cil-view-module",name:"Meetings",className:"vo-navItem"}),Object(O.jsx)(b.P,{to:"/dashboard/shared-documents",name:"Shared Documents",icon:"cil-folder-open",className:"vo-navItem"}),Object(O.jsx)("hr",{}),Object(O.jsx)(b.P,{to:"/dashboard/profile",name:"Profile",icon:"cil-user",className:"vo-navItem"}),Object(O.jsx)(b.P,{onClick:function(){o.a.get("auth/logout/").then((function(e){sessionStorage.clear(),t.push("/")})).catch((function(e){sessionStorage.clear(),t.push("/")}))},name:"Logout",icon:"cil-account-logout",className:"vo-navItem"})]}),Object(O.jsx)(b.M,{})]})},Z=c.a.memo(X),$=(a(891),a(106)),ee=a(116),te=a(143);t.default=function(){var e=Object(s.b)();return c.a.useEffect((function(){e(Object(i.d)(sessionStorage.getItem(o.j))),e(Object(l.b)(sessionStorage.getItem(o.j))),e(Object(r.b)(sessionStorage.getItem(o.j))),e(Object(ee.b)(sessionStorage.getItem(o.j))),e(Object(te.c)(sessionStorage.getItem(o.j))),e(Object(te.b)(sessionStorage.getItem(o.j))),Object(Y.d)("projects.add_projects")&&(console.log("is PM"),e(Object(i.c)(sessionStorage.getItem(o.j))),e(Object($.b)(sessionStorage.getItem(o.j))))}),[]),Object(O.jsxs)("div",{className:"c-app c-default-layout",children:[Object(O.jsx)(Z,{}),Object(O.jsxs)("div",{className:"c-wrapper",children:[Object(O.jsx)(K,{}),Object(O.jsx)("div",{className:"c-body pt-10 custom-color-c-app",children:Object(O.jsx)(g,{})}),Object(O.jsx)(N,{})]})]})}},511:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r}));var n=a(9),c=(a(74),function(e){return null!=sessionStorage.getItem(n.f)&&sessionStorage.getItem(n.f).split(",").includes(e)});function s(e,t){return e.filter((function(e){return e!=t}))}function o(e){return void 0!=e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():""}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)}},681:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=[{path:"/dashboard",exact:!0,name:"Dashboard",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(24)]).then(a.bind(null,1076))}))},{path:"/dashboard/Projects/assigned-projects",exact:!0,name:"Assigned Projects",component:c.a.lazy((function(){return Promise.all([a.e(1),a.e(2),a.e(4),a.e(6),a.e(21)]).then(a.bind(null,687))}))},{path:"/dashboard/Projects/assigned-projects/details/:work_package_number",exact:!0,name:"Assigned Project Details",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(16)]).then(a.bind(null,895))}))},{path:"/dashboard/Projects/my-projects",exact:!0,name:"My Projects",component:c.a.lazy((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(17)]).then(a.bind(null,902))}))},{path:"/dashboard/Projects/my-projects/details/:work_package_number",exact:!0,name:"My Project Details",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(18)]).then(a.bind(null,905))}))},{path:"/dashboard/Meetings",exact:!0,name:"Meetings",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(19)]).then(a.bind(null,1078))}))},{path:"/dashboard/Projects/completed-projects",exact:!0,name:"Completed Projects",component:c.a.lazy((function(){return Promise.all([a.e(4),a.e(6),a.e(32),a.e(22)]).then(a.bind(null,1079))}))},{path:"/dashboard/Projects/completed-projects/details/:work_package_number",exact:!0,name:"Completed Projects details",component:c.a.lazy((function(){return Promise.all([a.e(4),a.e(6),a.e(28)]).then(a.bind(null,909))}))},{path:"/dashboard/Projects/create-new-project",exact:!0,name:"Create New Project",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(20)]).then(a.bind(null,910))}))},{path:"/dashboard/employees",exact:!0,name:"Employees",component:c.a.lazy((function(){return Promise.all([a.e(14),a.e(39)]).then(a.bind(null,911))}))},{path:"/dashboard/EVMS/create",exact:!0,name:"EVMS Create",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(35)]).then(a.bind(null,918))}))},{path:"/dashboard/EVMS/view",exact:!0,name:"EVMS View",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(6),a.e(7),a.e(37)]).then(a.bind(null,919))}))},{path:"/dashboard/EVMS/details",exact:!0,name:"EVMS Details",component:c.a.lazy((function(){return Promise.all([a.e(7),a.e(36)]).then(a.bind(null,922))}))},{path:"/dashboard/WBS/create-wbs",exact:!0,name:"WBS",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(34)]).then(a.bind(null,924))}))},{path:"/dashboard/WBS/board",exact:!0,name:"Board",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(12)]).then(a.bind(null,926))}))},{path:"/dashboard/timecard/generate-timecard",exact:!0,name:"Generate Timecard",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(3),a.e(4),a.e(25)]).then(a.bind(null,1002))}))},{path:"/dashboard/timecard/weekly-timecards",exact:!0,name:"Weekly Timecard",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(33),a.e(30)]).then(a.bind(null,1003))}))},{path:"/dashboard/profile",exact:!0,name:"Profile",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(27)]).then(a.bind(null,1080))}))},{path:"/dashboard/shared-documents",exact:!0,name:"Shared Documents",component:c.a.lazy((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(29)]).then(a.bind(null,1077))}))}];t.a=s},881:function(e,t,a){},890:function(e,t,a){},891:function(e,t,a){}}]);
//# sourceMappingURL=23.3247d3b3.chunk.js.map