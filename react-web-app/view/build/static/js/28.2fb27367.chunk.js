(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[28],{1121:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(95),r=a(8),o=a(115),i=a(97),l=a(101),d=a(13),j=a(33),b=a(11),m=a(490),u=a(510),h=a(511),p=function(){function e(t){var a=t.timeout,n=t.onTimeout,c=t.onExpired;Object(u.a)(this,e),this.timeout=a,this.onTimeout=n;var s=parseInt(localStorage.getItem("_expiredTime"),10);s>0&&s<Date.now()?c():(this.eventHandler=this.updateExpiredTime.bind(this),this.tracker(),this.startInterval())}return Object(h.a)(e,[{key:"startInterval",value:function(){var e=this;this.updateExpiredTime(),this.interval=setInterval((function(){parseInt(localStorage.getItem("_expiredTime"),10)<Date.now()&&e.onTimeout&&(e.onTimeout(),e.cleanUp())}),1e3)}},{key:"updateExpiredTime",value:function(){var e=this;this.timeoutTracker&&clearTimeout(this.timeoutTracker),this.timeoutTracker=setTimeout((function(){localStorage.setItem("_expiredTime",Date.now()+1e3*e.timeout)}),300)}},{key:"tracker",value:function(){window.addEventListener("mousemove",this.eventHandler),window.addEventListener("scroll",this.eventHandler),window.addEventListener("keydown",this.eventHandler)}},{key:"cleanUp",value:function(){localStorage.removeItem("_expiredTime"),clearInterval(this.interval),window.removeEventListener("mousemove",this.eventHandler),window.removeEventListener("scroll",this.eventHandler),window.removeEventListener("keydown",this.eventHandler)}}]),e}(),x=a(676),O=a(3),f=Object(O.jsx)("div",{className:"pt-3 text-center",children:Object(O.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),v=function(){var e=c.a.useState(!1),t=Object(j.a)(e,2),a=(t[0],t[1]),s=Object(b.g)();return c.a.useEffect((function(){var e=new p({timeout:600,onTimeout:function(){a(!0),sessionStorage.clear(),s.push("/login"),console.log("timed out")},onExpired:function(){a(!0),sessionStorage.clear(),s.push("/login"),console.log("expired")}});return function(){e.cleanUp()}}),[]),Object(O.jsx)("main",{className:"c-main",children:Object(O.jsx)(m.l,{children:Object(O.jsx)(n.Suspense,{fallback:f,children:Object(O.jsx)(b.d,{children:x.a.map((function(e,t){return e.component&&Object(O.jsx)(b.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(O.jsx)(m.r,{children:Object(O.jsx)(e.component,Object(d.a)({},t))})}},t)}))})})})})},g=c.a.memo(v),y=function(){return Object(O.jsxs)(m.s,{fixed:!1,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("a",{href:"http://dma.com.bd:8000",target:"_self",rel:"noopener noreferrer",children:"Virtual Office v1.2.0"}),Object(O.jsx)("span",{className:"ml-1",children:"\xa9 DMA 2022"})]}),Object(O.jsxs)("div",{className:"mfs-auto",children:[Object(O.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(O.jsx)("a",{href:"https://dma.com.bd",target:"_blank",rel:"noopener noreferrer",children:"DMA"})]})]})},w=c.a.memo(y),S=a(495),N=a(120),P=(a(863),a(1131)),k=a(1123),I=a(1144),C=a(623),_=a.n(C),E=a(587),T=a.n(E),M=a(1129),z=a(1132),D=a(1141),V=a(1134),A=a(1118),W=a(677),Q=a.n(W),B=a(476),L=a(36),H=a(1139),U=a(1138),G=a(1128),R=(a(681),a(1133)),F=(a(1135),a(1136),a(1137)),J=a(1125);a(1140);Object(L.a)(P.a)((function(e){var t=e.theme;return Object(d.a)(Object(d.a)({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));a(1142),a(1143),a(867);var q=a(67),K=a(1145),Y=a(1122),X=a(1146),Z=a(868),$=a.n(Z),ee=a(1147),te=a(52),ae=a(888),ne=a.n(ae),ce=a(889),se=a.n(ce),re=a(890),oe=a.n(re),ie=a(892),le=a.n(ie),de=a(891),je=a.n(de),be=["children","value","index"],me=n.forwardRef((function(e,t){return Object(O.jsx)(B.a,Object(d.a)({direction:"up",ref:t},e))}));function ue(e){return Object(O.jsx)(Q.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:Object(O.jsx)(P.a,Object(d.a)({},e))})}Object(L.a)(P.a)((function(e){var t=e.theme;return Object(d.a)(Object(d.a)({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function he(e){var t=e.children,a=e.value,n=e.index,c=Object(q.a)(e,be);return Object(O.jsx)("div",Object(d.a)(Object(d.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),{},{children:a===n&&Object(O.jsx)(K.a,{sx:{p:3},children:Object(O.jsx)(R.a,{children:t})})}))}function pe(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function xe(e){var t,a,c,s,o,i,l,m,u=n.useState(!1),h=Object(j.a)(u,2),p=(h[0],h[1],Object(b.g)()),x=n.useState(0),f=Object(j.a)(x,2),v=f[0],g=f[1],y=Object(te.a)();return Object(O.jsx)("div",{children:Object(O.jsxs)(z.a,{maxWidth:"sm",fullWidth:!0,open:e.open,onClose:e.handleClose,PaperComponent:ue,"aria-labelledby":"draggable-dialog-title",TransitionComponent:me,children:[Object(O.jsx)(A.a,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Search Result"}),Object(O.jsxs)(V.a,{children:[Object(O.jsxs)(R.a,{sx:{fontSize:14,fontWeight:"bold",marginBottom:3},color:"#000000",children:["You searched for '",e.searchText,"'"]}),Object(O.jsxs)(K.a,{sx:{width:"100%",bgcolor:"background.paper"},children:[Object(O.jsxs)(Y.a,{value:v,onChange:function(e,t){g(t)},centered:!0,indicatorColor:"primary",children:[Object(O.jsx)(X.a,Object(d.a)({icon:Object(O.jsx)(ne.a,{fontSize:"small"}),label:"Employees ("+(null===(t=e.result)||void 0===t||null===(a=t.employees)||void 0===a?void 0:a.length)+")"},pe(0))),Object(O.jsx)(X.a,Object(d.a)({icon:Object(O.jsx)(se.a,{fontSize:"small"}),label:"Projects ("+(null===(c=e.result)||void 0===c||null===(s=c.projects)||void 0===s?void 0:s.length)+")"},pe(1))),Object(O.jsx)(X.a,Object(d.a)({icon:Object(O.jsx)(oe.a,{fontSize:"small"}),label:"WBS"},pe(2))),Object(O.jsx)(X.a,Object(d.a)({icon:Object(O.jsx)(je.a,{fontSize:"small"}),label:"Meetings"},pe(3)))]}),Object(O.jsxs)($.a,{axis:"rtl"===y.direction?"x-reverse":"x",index:v,onChangeIndex:function(e){g(e)},children:[Object(O.jsx)(he,{value:v,index:0,dir:y.direction,children:Object(O.jsx)(F.a,{sx:{width:"100%",bgcolor:"background.paper"},children:(null===(o=e.result)||void 0===o||null===(i=o.employees)||void 0===i?void 0:i.length)>0&&Array.from(e.result.employees).map((function(t,a){var n,c;return Object(O.jsxs)(J.a,{secondaryAction:Object(O.jsx)(I.a,{edge:"end","aria-label":"View Profile",title:"View Profile",onClick:function(){e.handleClose(),p.push("/dashboard/profile/"+t.id)},children:Object(O.jsx)(le.a,{})}),children:[Object(O.jsx)(U.a,{children:Object(O.jsx)(G.a,{children:Object(O.jsx)("img",{src:r.b+t.profile_pic})})}),Object(O.jsx)(H.a,{primary:t.first_name+" "+t.last_name,secondary:null===(n=t.slc_details)||void 0===n||null===(c=n.slc)||void 0===c?void 0:c.name})]},a)}))})}),Object(O.jsx)(he,{value:v,index:1,dir:y.direction,children:Object(O.jsx)(F.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:(null===(l=e.result)||void 0===l||null===(m=l.projects)||void 0===m?void 0:m.length)>0&&Array.from(e.result.projects).map((function(t,a){return Object(O.jsxs)(J.a,{onClick:function(){e.handleClose(),function(e){console.log(e),p.push({pathname:"/dashboard/Projects/my-projects/details/"+e.work_package_number,state:{project:e}})}(t)},children:[Object(O.jsx)(ee.a,{children:Object(O.jsx)(se.a,{})}),Object(O.jsx)(H.a,{primary:t.sub_task,secondary:"Planned Delivery Date: "+t.planned_delivery_date})]},a)}))})}),Object(O.jsx)(he,{value:v,index:2,dir:y.direction,children:"This Section is currently under development"}),Object(O.jsx)(he,{value:v,index:3,dir:y.direction,children:"This Section is currently under development"})]})]})]}),Object(O.jsx)(D.a,{children:Object(O.jsx)(M.a,{autoFocus:!0,onClick:e.handleClose,children:"Close"})})]})})}var Oe=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(j.a)(s,2),i=o[0],l=o[1],d=Object(n.useState)([]),b=Object(j.a)(d,2),m=b[0],u=b[1],h=function(){String(a).length>0&&r.a.get("search?key="+a).then((function(e){console.log(e.data.data),u(e.data.data),l(!0)}))};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(P.a,{component:"form",variant:"outlined",rounded:"true",sx:{p:"2px 4px",margin:1,display:"flex",alignItems:"center",width:400},children:[Object(O.jsx)(k.a,{sx:{ml:1,flex:1},placeholder:"Search",inputProps:{"aria-label":"search"},value:a,onChange:function(e){return c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&h()}}),0==String(a).length?Object(O.jsx)(I.a,{type:"button",sx:{p:"10px",color:"rgb(0 82 204)"},"aria-label":"search",onClick:h,children:Object(O.jsx)(T.a,{})}):Object(O.jsx)(I.a,{type:"button",sx:{p:"10px",color:"rgb(0 82 204)"},"aria-label":"search",onClick:function(){return c("")},children:Object(O.jsx)(_.a,{})}),Object(O.jsx)(xe,{open:i,handleClose:function(){return l(!1)},searchText:a,result:m})]})})},fe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.sidebar.sidebarShow})),a=Object(b.g)();return c.a.useEffect((function(){console.log("sidebar --- ",t)}),[]),Object(O.jsxs)(m.u,{withSubheader:!0,className:"justify-content-between",colorScheme:"light",children:[Object(O.jsx)(m.W,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(t)||"responsive";e(Object(N.a)(a))}}),Object(O.jsx)(m.W,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(t)&&"responsive";e(Object(N.a)(a))}}),Object(O.jsx)(m.v,{className:"d-md-down-none",children:Object(O.jsx)(m.w,{className:"px-3 justify-content-between",children:Object(O.jsx)(Oe,{})})}),Object(O.jsx)(m.v,{className:"px-3",children:Object(O.jsx)(ve,{})}),Object(O.jsxs)(m.R,{className:"px-3 justify-content-between",children:[Object(O.jsxs)(m.f,{className:"back-button",onClick:function(){return a.goBack()},children:[Object(O.jsx)(S.a,{name:"cil-arrow-thick-from-right",className:"mr-2"}),"Back"]}),Object(O.jsx)(m.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3 custom-router",routes:x.a})]})]})},ve=function(){var e=Object(b.g)(),t=Object(s.c)((function(e){return e.profile.data}));return Object(O.jsxs)(m.n,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(O.jsxs)(m.q,{className:"c-header-nav-link",caret:!1,children:[Object(O.jsx)("div",{className:"c-avatar",children:Object(O.jsx)(m.x,{src:null!=t.profile_pic?r.b+t.profile_pic:"avatars/user-avatar-default.png",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(O.jsx)("span",{className:"ml-2  u-name",children:t.first_name})]}),Object(O.jsxs)(m.p,{className:"pt-0",placement:"bottom-end",children:[Object(O.jsx)(m.o,{header:!0,tag:"div",color:"light",className:"text-center drop-text",children:Object(O.jsx)("strong",{children:"Account"})}),Object(O.jsxs)(m.o,{className:"drop-text",to:"/dashboard/profile/"+sessionStorage.getItem(r.j),children:[Object(O.jsx)(S.a,{name:"cil-user",className:"mfe-2"}),"Profile"]}),Object(O.jsx)(m.o,{divider:!0}),Object(O.jsxs)(m.o,{onClick:function(){r.a.get("auth/logout/").then((function(t){window.sessionStorage.clear(),e.push("/")})).catch((function(t){sessionStorage.clear(),e.push("/")}))},className:"drop-text",children:[Object(O.jsx)(S.a,{name:"cil-account-logout",className:"mfe-2"}),"Log out"]})]})]})},ge=(a(893),a(496)),ye=function(){var e=Object(s.b)(),t=Object(b.g)(),a=Object(s.c)((function(e){return e.sidebar.sidebarShow})),n=Object(b.h)();c.a.useEffect((function(){var e=n.pathname;console.log(e),e.match("/dashboard/Projects/")&&console.log(e),e.match("/dashboard/WBS/")&&console.log(e),e.match("/dashboard/EVMS/")&&console.log(e)}),[n]);return Object(O.jsxs)(m.L,{colorScheme:"light",show:a,onShowChange:function(t){return e(Object(N.a)(t))},children:[Object(O.jsxs)(m.M,{className:"d-md-down-none custom-color",to:"/",children:[Object(O.jsx)(m.x,{className:"c-sidebar-brand-full",src:"assets/icons/DMA-LOGO-BIG.svg",height:35}),Object(O.jsx)("h6",{className:"c-sidebar-brand-full name-brand1",children:"Virtual Office"}),Object(O.jsx)(m.x,{className:"c-sidebar-brand-minimized",src:"assets/icons/DMA-logo-small.svg",height:35}),Object(O.jsx)("span",{className:"c-sidebar-brand-minimized name-brand1",children:"VO"})]}),Object(O.jsxs)(m.O,{className:"vo-sidebar",children:[Object(O.jsx)(m.Q,{to:"/dashboard",icon:"cil-list",name:"Dashboard",className:"vo-navItem "}),Object(O.jsxs)(m.P,{icon:"cil-lightbulb",name:"Projects",className:"vo-navItem",route:"/dashboard/Projects/",children:[Object(ge.d)("projects.add_projects")&&Object(O.jsx)(m.Q,{to:"/dashboard/Projects/create-new-project",name:"Create New Project",className:"vo-navItem"}),Object(ge.d)("projects.add_projects")&&Object(O.jsx)(m.Q,{to:"/dashboard/Projects/my-projects",name:"My Projects",className:"vo-navItem"}),Object(O.jsx)(m.Q,{to:"/dashboard/Projects/assigned-projects",name:"Assigned Projects",className:"vo-navItem"}),Object(O.jsx)(m.Q,{to:"/dashboard/Projects/completed-projects",name:"Completed Projects",className:"vo-navItem"})]}),Object(O.jsxs)(m.P,{icon:"cil-spreadsheet",name:"WBS",className:"vo-navItem",children:[Object(O.jsx)(m.Q,{to:"/dashboard/WBS/create-wbs",name:"Create WBS",className:"vo-navItem"}),Object(O.jsx)(m.Q,{to:"/dashboard/WBS/board",name:"Board",className:"vo-navItem"})]}),Object(ge.d)("evms.view_evms")&&Object(O.jsxs)(m.P,{icon:"cil-chart-line",name:"EVMS",className:"vo-navItem",children:[Object(O.jsx)(m.Q,{to:"/dashboard/EVMS/create",name:"Create EVMS",className:"vo-navItem"}),Object(O.jsx)(m.Q,{to:"/dashboard/EVMS/view",name:"View EVMS",className:"vo-navItem"})]}),!Object(ge.d)("projects.add_projects")&&Object(O.jsx)(m.Q,{to:"/dashboard/timecard/generate-timecard",name:"Generate Timecard",icon:"cil-library",className:"vo-navItem"}),Object(ge.d)("projects.add_projects")&&Object(O.jsxs)(m.P,{icon:"cil-library",name:"Timecards",className:"vo-navItem",children:[Object(O.jsx)(m.Q,{to:"/dashboard/timecard/generate-timecard",name:"Actual Work Done",className:"vo-navItem"}),Object(O.jsx)(m.Q,{to:"/dashboard/timecard/weekly-timecards",name:"Weekly Timecard",className:"vo-navItem"}),Object(O.jsx)(m.Q,{to:"/dashboard/timecard/weekly-timecards",name:"Report",className:"vo-navItem"})]}),Object(O.jsx)(m.Q,{to:"/dashboard/meetings",icon:"cil-group",name:"Meetings",className:"vo-navItem"}),Object(O.jsx)(m.Q,{to:"/dashboard/shared-documents",name:"Shared Documents",icon:"cil-folder-open",className:"vo-navItem"}),Object(O.jsx)("hr",{}),Object(O.jsx)(m.Q,{to:"/dashboard/profile/"+sessionStorage.getItem(r.j),name:"Profile",icon:"cil-user",className:"vo-navItem"}),Object(O.jsx)(m.Q,{onClick:function(){r.a.get("auth/logout/").then((function(e){sessionStorage.clear(),t.push("/")})).catch((function(e){sessionStorage.clear(),t.push("/")}))},name:"Logout",icon:"cil-account-logout",className:"vo-navItem"})]}),Object(O.jsx)(m.N,{})]})},we=c.a.memo(ye),Se=(a(894),a(103)),Ne=a(112),Pe=a(145);t.default=function(){var e=Object(s.b)();return c.a.useEffect((function(){e(Object(i.d)(sessionStorage.getItem(r.j))),e(Object(l.b)(sessionStorage.getItem(r.j))),e(Object(o.b)(sessionStorage.getItem(r.j))),e(Object(Ne.b)(sessionStorage.getItem(r.j))),e(Object(Pe.c)(sessionStorage.getItem(r.j))),e(Object(Pe.b)(sessionStorage.getItem(r.j))),Object(ge.d)("projects.add_projects")&&(console.log("is PM"),e(Object(i.c)(sessionStorage.getItem(r.j))),e(Object(Se.b)(sessionStorage.getItem(r.j))))}),[]),Object(O.jsxs)("div",{className:"c-app c-default-layout",children:[Object(O.jsx)(we,{}),Object(O.jsxs)("div",{className:"c-wrapper",children:[Object(O.jsx)(fe,{}),Object(O.jsx)("div",{className:"c-body pt-10 custom-color-c-app",children:Object(O.jsx)(g,{})}),Object(O.jsx)(w,{})]})]})}},496:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o}));var n=a(8),c=(a(72),function(e){return null!=sessionStorage.getItem(n.f)&&sessionStorage.getItem(n.f).split(",").includes(e)});function s(e,t){return e.filter((function(e){return e!=t}))}function r(e){return void 0!=e?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():""}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)}},676:function(e,t,a){"use strict";var n=a(0),c=a.n(n),s=[{path:"/dashboard",exact:!0,name:"Dashboard",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(22),a.e(25)]).then(a.bind(null,1072))}))},{path:"/dashboard/Projects/assigned-projects",exact:!0,name:"Assigned Projects",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(5),a.e(18)]).then(a.bind(null,626))}))},{path:"/dashboard/Projects/assigned-projects/details/:work_package_number",exact:!0,name:"Assigned Project Details",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(15)]).then(a.bind(null,898))}))},{path:"/dashboard/Projects/my-projects",exact:!0,name:"My Projects",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(4),a.e(14)]).then(a.bind(null,1071))}))},{path:"/dashboard/Projects/my-projects/details/:work_package_number",exact:!0,name:"My Project Details",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(19)]).then(a.bind(null,1076))}))},{path:"/dashboard/task/details/:work_package_index",exact:!0,name:"My Task Details",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(5),a.e(17)]).then(a.bind(null,909))}))},{path:"/dashboard/Meetings",exact:!0,name:"Meetings",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(20)]).then(a.bind(null,1077))}))},{path:"/dashboard/Projects/completed-projects",exact:!0,name:"Completed Projects",component:c.a.lazy((function(){return Promise.all([a.e(4),a.e(5),a.e(35),a.e(26)]).then(a.bind(null,1078))}))},{path:"/dashboard/Projects/completed-projects/details/:work_package_number",exact:!0,name:"Completed Projects details",component:c.a.lazy((function(){return Promise.all([a.e(4),a.e(5),a.e(30)]).then(a.bind(null,912))}))},{path:"/dashboard/Projects/create-new-project",exact:!0,name:"Create New Project",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(23)]).then(a.bind(null,1079))}))},{path:"/dashboard/EVMS/create",exact:!0,name:"EVMS Create",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(36)]).then(a.bind(null,913))}))},{path:"/dashboard/EVMS/view",exact:!0,name:"EVMS View",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(5),a.e(7),a.e(38)]).then(a.bind(null,914))}))},{path:"/dashboard/EVMS/details",exact:!0,name:"EVMS Details",component:c.a.lazy((function(){return Promise.all([a.e(7),a.e(37)]).then(a.bind(null,917))}))},{path:"/dashboard/WBS/create-wbs",exact:!0,name:"WBS",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(21)]).then(a.bind(null,919))}))},{path:"/dashboard/WBS/board",exact:!0,name:"Board",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(11)]).then(a.bind(null,921))}))},{path:"/dashboard/timecard/generate-timecard",exact:!0,name:"Generate Timecard",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(24)]).then(a.bind(null,1074))}))},{path:"/dashboard/timecard/weekly-timecards",exact:!0,name:"Weekly Timecard",component:c.a.lazy((function(){return Promise.all([a.e(2),a.e(4),a.e(34),a.e(32)]).then(a.bind(null,998))}))},{path:"/dashboard/profile/:id?",exact:!0,name:"Profile",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(3),a.e(27)]).then(a.bind(null,1080))}))},{path:"/dashboard/shared-documents",exact:!0,name:"Shared Documents",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(31)]).then(a.bind(null,1075))}))}];t.a=s},863:function(e,t,a){},893:function(e,t,a){},894:function(e,t,a){}}]);
//# sourceMappingURL=28.2fb27367.chunk.js.map