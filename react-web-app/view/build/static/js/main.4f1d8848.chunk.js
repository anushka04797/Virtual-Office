(this.webpackJsonpvirtual_office=this.webpackJsonpvirtual_office||[]).push([[8],{101:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var r,n=t(1),c=t(9),i=t(5),s=t.n(i),o=t(6),u=t(8),l=Object(o.b)("wbs/fetchWbsThunk",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get("wbs/all/"+a+"/");case 2:return t=e.sent,console.log("all wbs",t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),d=(Object(o.b)("wbs/fetchUserWiseWbsThunk",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get("wbs/user/all/"+a);case 2:return t=e.sent,console.log("user wise wbs",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),Object(o.b)("wbs/createWbsThunk",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.post("wbs/create/",a);case 2:return t=e.sent,console.log("wbs create response",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),Object(o.c)({name:"wbs",initialState:{data:[],status:"idle",error:""},reducers:{},extraReducers:(r={},Object(n.a)(r,l.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,l.fulfilled,(function(e,a){e.status="succeeded",e.data=a.payload})),Object(n.a)(r,l.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),r)}));a.a=d.reducer},103:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var r,n=t(1),c=t(9),i=t(5),s=t.n(i),o=t(6),u=t(8),l=(Object(o.b)("evms/createEvmsThunk",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.post("evms/create/",a);case 2:return t=e.sent,console.log("evms create response",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),Object(o.b)("evms/fetchEvmsThunk",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get("evms/list/"+a+"/");case 2:return t=e.sent,console.log("EVMS for PM",t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())),d=Object(o.c)({name:"evmsList",initialState:{data:[],pm_evms:[],status:"idle",error:""},reducers:{},extraReducers:(r={},Object(n.a)(r,l.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,l.fulfilled,(function(e,a){e.status="succeeded",e.data=a.payload})),Object(n.a)(r,l.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),r)});a.a=d.reducer},112:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var r,n=t(1),c=t(9),i=t(5),s=t.n(i),o=t(6),u=t(8),l=Object(o.b)("profile/fetchMeetingList",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get("meetings/list/"+a+"/");case 2:return t=e.sent,console.log("meetings list",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),d=Object(o.c)({name:"meeting",initialState:{data:[],status:"idle",error:""},reducers:{},extraReducers:(r={},Object(n.a)(r,l.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,l.fulfilled,(function(e,a){e.status="succeeded",e.data=a.payload})),Object(n.a)(r,l.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),r)});a.a=d.reducer},113:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"b",(function(){return d})),t.d(a,"d",(function(){return p}));var r,n=t(1),c=t(9),i=t(5),s=t.n(i),o=t(6),u=t(8),l=Object(o.b)("timecard/fetchTimeCardThunk",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get("wbs/user/time-card/list/"+a+"/");case 2:return t=e.sent,console.log("time card for user",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),d=Object(o.b)("timecard/fetchAllTimecardsPm",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get("wbs/user-wise/weekly-time-card/"+a+"/");case 2:return t=e.sent,console.log("pm",t.data[0]),e.abrupt("return",t.data[0]);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),p=Object(o.b)("timecard/fetchUserHoursUsedAndLeft",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get("organizations/user/hours/used-left/");case 2:return t=e.sent,console.log("hours used and left",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),f=Object(o.c)({name:"timecardList",initialState:{data:[],pm_timecards:[],user_hours_used_left:{},status:"idle",error:""},reducers:{},extraReducers:(r={},Object(n.a)(r,l.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,l.fulfilled,(function(e,a){e.status="succeeded",e.data=a.payload})),Object(n.a)(r,l.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),Object(n.a)(r,d.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,d.fulfilled,(function(e,a){e.status="succeded",e.pm_timecards=a.payload})),Object(n.a)(r,d.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),Object(n.a)(r,p.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,p.fulfilled,(function(e,a){e.status="succeeded",e.user_hours_used_left=a.payload})),Object(n.a)(r,p.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),r)});a.a=f.reducer},116:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var r,n=t(1),c=t(9),i=t(5),s=t.n(i),o=t(6),u=t(8),l=Object(o.b)("profile/fetchPersonalDetails",function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get("auth/profile/details/"+a+"/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),d=Object(o.c)({name:"profile",initialState:{data:{},status:"idle",error:""},reducers:{},extraReducers:(r={},Object(n.a)(r,l.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,l.fulfilled,(function(e,a){e.status="succeeded",e.data=a.payload})),Object(n.a)(r,l.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),r)});a.a=d.reducer},121:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(6),n=Object(r.c)({name:"sidebar",initialState:{sidebarShow:"responsive"},reducers:{changeState:function(e,a){console.log("dispatching ----- ",a),e.sidebarShow=a.payload}}}),c=n.actions.changeState;a.b=n.reducer},122:function(e,a,t){"use strict";t.d(a,"b",(function(){return d})),t.d(a,"c",(function(){return f}));var r,n=t(1),c=t(19),i=t(9),s=t(5),o=t.n(s),u=t(6),l=t(8),d=Object(u.b)("projects/fetchTdosThunk",function(){var e=Object(i.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.get("project/tdo/list/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),p=Object(u.c)({name:"tdos",initialState:{data:[],status:"idle",error:""},reducers:{push_item:function(e,a){console.log("dispatching ----- ",a),e.data=[].concat(Object(c.a)(e.data),[a.payload])}},extraReducers:(r={},Object(n.a)(r,d.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,d.fulfilled,(function(e,a){e.status="succeeded",e.data=[],Array.from(a.payload).forEach((function(a,t){e.data.push({value:{title:a.title,details:a.description},label:a.title})}))})),Object(n.a)(r,d.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),r)}),f=p.actions.push_item;a.a=p.reducer},123:function(e,a,t){"use strict";t.d(a,"b",(function(){return l}));var r,n=t(1),c=t(9),i=t(5),s=t.n(i),o=t(6),u=t(8),l=Object(o.b)("holiday/fetchAll",Object(c.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.d.get("organizations/holiday/all/");case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))),d=Object(o.c)({name:"holidays",initialState:{data:[],status:"idle",error:""},reducers:{},extraReducers:(r={},Object(n.a)(r,l.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,l.fulfilled,(function(e,a){e.status="succeeded",e.data=a.payload})),Object(n.a)(r,l.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),r)});a.a=d.reducer},124:function(e,a,t){"use strict";var r=t(6),n=Object(r.c)({name:"drawer",initialState:{user_dropdown_header_menu_show:!1},reducers:{changeUserDropdownMenuState:function(e,a){e.user_dropdown_header_menu_show=a.payload}}}),c=(n.actions.changeUserDropdownMenuState,n.reducer),i=Object(r.c)({name:"drawer",initialState:{open:!0},reducers:{changeState:function(e,a){console.log("dispatching ----- ",a),e.open=a.payload}}}),s=(i.actions.changeState,i.reducer),o=t(116),u=t(97),l=t(121),d=t(101),p=t(112),f=t(103),b=t(122),h=t(113),j=(t(8),t(75),Object(r.c)({name:"search",initialState:{data:[],suggestions:[],status:"idle",error:"",isModalOpen:!1},reducers:{manage_modal:function(e,a){console.log("dispatching ----- ",a),e.isModalOpen=a.payload}},extraReducers:{}})),g=(j.actions.manage_modal,j.reducer),m=t(123);a.a=Object(r.a)({reducer:{drawer:s,config:c,sidebar:l.b,projects:u.a,wbs:d.a,profile:o.a,meetings:p.a,evmsList:f.a,tdo:b.a,timecardList:h.a,search:g,holidays:m.a}})},148:function(e){e.exports=JSON.parse('{"name":"virtual_office","version":"0.1.0","private":true,"dependencies":{"@coreui/coreui":"^3.4.0","@coreui/icons":"^2.0.0","@coreui/icons-react":"^1.1.0","@coreui/react":"^3.4.6","@coreui/react-chartjs":"^1.1.0","@coreui/utils":"^1.3.1","@emotion/react":"^11.4.1","@emotion/styled":"^11.3.0","@fontsource/roboto":"^4.5.3","@material-ui/core":"^5.0.0-beta.5","@material-ui/icons":"^5.0.0-beta.4","@material-ui/styles":"^4.11.4","@mui/material":"^5.4.1","@mui/x-data-grid":"^5.6.0","@reduxjs/toolkit":"^1.7.2","@testing-library/jest-dom":"^5.16.2","@testing-library/react":"^11.2.7","@testing-library/user-event":"^12.8.3","@wojtekmaj/enzyme-adapter-react-17":"^0.6.0","axios":"^0.21.4","bootstrap":"^5.1.3","classnames":"^2.2.6","core-js":"^3.21.0","enzyme":"^3.11.0","file-saver":"^2.0.5","jspdf":"^2.5.1","jspdf-autotable":"^3.5.23","material-ui-popup-state":"^2.0.0","moment":"^2.29.2","notistack":"^2.0.2","prop-types":"^15.8.1","react":"^17.0.2","react-accessible-accordion":"^4.0.0","react-datepicker":"^4.6.0","react-datetime":"^3.1.1","react-dom":"^17.0.2","react-draggable":"^4.4.4","react-jitsi":"^1.0.4","react-loader-spinner":"^4.0.0","react-page-loading":"^1.0.2","react-phone-input-2":"^2.15.0","react-redux":"^7.2.5","react-router-dom":"^5.3.0","react-scripts":"4.0.3","react-select":"^4.3.1","react-swipeable-views":"^0.14.0","redux":"^4.0.5","reselect":"^4.0.0","sass":"^1.49.7","styled-components":"^5.3.0","web-vitals":"^1.1.2","xlsx":"^0.17.5","xlsx-js-style":"^1.2.0","yup":"^0.32.9"},"devDependencies":{"@babel/core":"^7.17.2","auto-changelog":"~2.2.1","formik":"^2.2.9","jquery":"^3.6.0","react-scripts":"^4.0.3","react-trello":"^2.2.11","sweetalert":"^2.1.2"},"scripts":{"start":"react-scripts start","build":"node ./update-build.js && react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"buildDate":1652770661344}')},195:function(e,a,t){},197:function(e,a,t){},302:function(e,a,t){"use strict";t.r(a);var r,n=t(0),c=t.n(n),i=t(26),s=t.n(i),o=(t(195),t(1)),u=t(328),l=t(329),d=t(330),p=t(332),f=t(333),b=t(346),h=t(347),j=t(430),g=t(443),m=t(444),v=t(445),O=t(446),w=t(447),x=t(448),y=t(449),V=t(450),k=t(451),A=t(452),S=t(453),M=t(454),L=t(455),C=t(456),Z=t(457),P=t(458),T=t(459),_=t(460),H=t(461),F=t(462),R=t(463),B=t(464),U=t(465),I=t(466),q=t(467),z=t(468),D=t(475),E=t(437),G=t(438),N=t(439),J=t(440),W=t(441),X=t(442),Q=t(331),Y=t(334),K=t(335),$=t(336),ee=t(337),ae=t(338),te=t(339),re=t(340),ne=t(341),ce=t(342),ie=t(343),se=t(344),oe=t(345),ue=t(348),le=t(349),de=t(350),pe=t(351),fe=t(352),be=t(353),he=t(354),je=t(355),ge=t(356),me=t(357),ve=t(358),Oe=t(359),we=t(360),xe=t(361),ye=t(362),Ve=t(363),ke=t(364),Ae=t(365),Se=t(366),Me=t(367),Le=t(368),Ce=t(369),Ze=t(370),Pe=t(371),Te=t(372),_e=t(373),He=t(374),Fe=t(375),Re=t(376),Be=t(377),Ue=t(378),Ie=t(379),qe=t(380),ze=t(381),De=t(382),Ee=t(383),Ge=t(384),Ne=t(385),Je=t(386),We=t(387),Xe=t(388),Qe=t(389),Ye=t(390),Ke=t(391),$e=t(392),ea=t(393),aa=t(394),ta=t(395),ra=t(396),na=t(397),ca=t(398),ia=t(399),sa=t(400),oa=t(401),ua=t(402),la=t(403),da=t(404),pa=t(405),fa=t(406),ba=t(407),ha=t(408),ja=t(409),ga=t(410),ma=t(411),va=t(412),Oa=t(413),wa=t(414),xa=t(415),ya=t(416),Va=t(417),ka=t(418),Aa=t(419),Sa=t(420),Ma=t(421),La=t(422),Ca=t(423),Za=t(424),Pa=t(425),Ta=t(426),_a=t(427),Ha=t(428),Fa=t(429),Ra=t(431),Ba=t(432),Ua=t(433),Ia=t(434),qa=t(435),za=t(436),Da=t(469),Ea=t(470),Ga=t(471),Na=t(472),Ja=t(473),Wa=t(474),Xa=Object.assign({},{sygnet:["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],logo:["608 134",'\n  <title>Virtual Office</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],logoNegative:["608 134",'\n  <title>coreui react pro logo</title>\n  <g>\n    <g style="fill:#80d0ff;">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n\n    <g style="fill:#fff;">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n']},(r={cilArrowThickFromRight:u.a,cilDescription:l.a,cilCamera:d.a,cilClock:Q.a,cilAccountLogout:p.a,cilPlus:f.a,cilAlignCenter:Y.a,cilTag:K.a,cilMoney:$.a,cilAlignLeft:ee.a,cilAlignRight:ae.a,cilApplicationsSettings:te.a,cilArrowRight:re.a,cilArrowTop:ne.a,cilAsterisk:ce.a,cilBan:ie.a,cilBasket:se.a,cilBell:oe.a,cilBadge:b.a,cilControl:h.a,cilBold:ue.a,cilBookmark:le.a,cilCalculator:de.a,cilCalendar:pe.a,cilCloudDownload:fe.a,cilChartPie:be.a,cilCheck:he.a,cilChevronBottom:je.a,cilChevronLeft:ge.a,cilChevronRight:me.a,cilChevronTop:ve.a,cilCircle:Oe.a,cilCheckCircle:we.a,cilCode:xe.a,cilCommentSquare:ye.a,cilCreditCard:Ve.a,cilCursor:ke.a,cilCursorMove:Ae.a,cilDrop:Se.a,cilDollar:Me.a,cilEnvelopeClosed:Le.a,cilEnvelopeLetter:Ce.a,cilEnvelopeOpen:Ze.a,cilEuro:Pe.a,cilGlobeAlt:Te.a,cilGrid:_e.a,cilFile:He.a,cilFullscreen:Fe.a,cilFullscreenExit:Re.a,cilGraph:Be.a,cilHome:Ue.a,cilInbox:Ie.a,cilIndentDecrease:qe.a,cilIndentIncrease:ze.a,cilInputPower:De.a,cilItalic:Ee.a,cilJustifyCenter:Ge.a,cilJustifyLeft:Ne.a,cilLaptop:Je.a,cilLayers:We.a,cilLightbulb:Xe.a,cilList:Qe.a,cilListNumbered:Ye.a,cilListRich:Ke.a,cilLocationPin:$e.a,cilLockLocked:ea.a,cilMagnifyingGlass:aa.a,cilMap:ta.a,cilMoon:ra.a,cilNotes:na.a,cilOptions:ca.a,cilPaperclip:ia.a,cilPaperPlane:sa.a,cilPencil:oa.a,cilPeople:ua.a,cilPhone:la.a,cilPrint:da.a,cilPuzzle:pa.a,cilSave:fa.a,cilScrubber:ba.a,cilSettings:ha.a,cilShare:ja.a,cilShareAll:ga.a,cilShareBoxed:ma.a,cilShieldAlt:va.a,cilSpeech:Oa.a,cilSpeedometer:wa.a,cilSpreadsheet:xa.a,cilStar:ya.a,cilSun:Va.a,cilTags:ka.a,cilTask:Aa.a,cilTrash:Sa.a,cilUnderline:Ma.a,cilUser:La.a,cilUserFemale:Ca.a,cilUserFollow:Za.a,cilUserUnfollow:Pa.a,cilX:Ta.a,cilXCircle:_a.a,cilWarning:Ha.a,cilGroup:Fa.a},Object(o.a)(r,"cilBasket",se.a),Object(o.a)(r,"cibGhost",j.a),Object(o.a)(r,"cilNoteAdd",Ra.a),Object(o.a)(r,"cilViewModule",Ba.a),Object(o.a)(r,"cilLibraryAdd",Ua.a),Object(o.a)(r,"cilLibrary",Ia.a),Object(o.a)(r,"cilFolderOpen",qa.a),Object(o.a)(r,"cilPenAlt",za.a),r),{cifUs:E.a,cifBr:G.a,cifIn:N.a,cifFr:J.a,cifEs:W.a,cifPl:X.a},{cibSkype:g.a,cibPinboard:m.a,cibFacebook:v.a,cibTwitter:O.a,cibLinkedin:w.a,cibFlickr:x.a,cibTumblr:y.a,cibXing:V.a,cibGithub:k.a,cibStackoverflow:A.a,cibYoutube:S.a,cibDribbble:M.a,cibInstagram:L.a,cibPinterest:C.a,cibVk:Z.a,cibYahoo:P.a,cibBehance:T.a,cibReddit:_.a,cibVimeo:H.a,cibCcMastercard:F.a,cibCcVisa:R.a,cibStripe:B.a,cibPaypal:U.a,cibGooglePay:I.a,cibCcAmex:q.a,cibHubspot:z.a,cibCircle:Da.a,cilColumns:Ea.a,cilChartLine:Ga.a,cilCheckAlt:Na.a,cilPen:Ja.a,cilArrowThickToTop:Wa.a,cibCirrusci:D.a}),Qa=(t(196),t(197),t(198),t(13)),Ya=t(106),Ka=t(33),$a=t(148),et=t(72),at=t.n(et),tt=t(49),rt=t(11),nt=t(67),ct=t(8),it=t(3),st=["component"];var ot=function(e){var a=e.component,t=Object(nt.a)(e,st),r=!!sessionStorage.getItem(ct.i);return Object(it.jsx)(rt.b,Object(Qa.a)(Object(Qa.a)({},t),{},{render:function(e){return r?Object(it.jsx)(a,Object(Qa.a)({},e)):Object(it.jsx)(rt.a,{to:"/"})}}))},ut=t(314),lt=t(487),dt=Object(it.jsx)("div",{className:"text-center",children:Object(it.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),pt=Object(ut.a)({palette:{mode:ct.e},typography:{fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif"}}),ft=c.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(6),t.e(30)]).then(t.bind(null,1119))})),bt=c.a.lazy((function(){return Promise.all([t.e(2),t.e(6),t.e(16),t.e(34)]).then(t.bind(null,1120))})),ht=c.a.lazy((function(){return Promise.all([t.e(6),t.e(39)]).then(t.bind(null,1121))})),jt=c.a.lazy((function(){return Promise.all([t.e(6),t.e(13),t.e(29)]).then(t.bind(null,1128))}));var gt=function(e){return function(e){var a=Object(n.useState)(!1),t=Object(Ka.a)(a,2),r=(t[0],t[1]);Object(n.useEffect)((function(){fetch("/meta.json").then((function(e){return e.json()})).then((function(e){(function(e,a){var t=at()(e),r=at()(a);return!!t.isAfter(r)})(e.buildDate,$a.buildDate)?(r(!1),i()):r(!0)}))}),[]);var i=function(){caches&&caches.keys().then((function(e){var a,t=Object(Ya.a)(e);try{for(t.s();!(a=t.n()).done;){var r=a.value;caches.delete(r)}}catch(n){t.e(n)}finally{t.f()}})),window.location.reload(!0)};return Object(it.jsx)(lt.a,{theme:pt,children:Object(it.jsx)(tt.a,{children:Object(it.jsx)(c.a.Suspense,{fallback:dt,children:Object(it.jsxs)(rt.d,{children:[Object(it.jsx)(rt.b,{exact:!0,path:"/",children:Object(it.jsx)(rt.a,{to:"/login"})}),Object(it.jsx)(rt.b,{exact:!0,path:"/login",name:"Sign in",render:function(e){return Object(it.jsx)(ft,Object(Qa.a)({},e))}}),Object(it.jsx)(rt.b,{exact:!0,path:"/register",name:"Sign up",render:function(e){return Object(it.jsx)(bt,Object(Qa.a)({},e))}}),Object(it.jsx)(rt.b,{exact:!0,path:"/forgot-password",name:"Forgot Password",render:function(e){return Object(it.jsx)(ht,Object(Qa.a)({},e))}}),Object(it.jsx)(ot,{path:"/dashboard",name:"Dashboard",component:jt})]})})})})}},mt=(t(223),t(224),t(225),t(226),gt()),vt=function(){return Object(it.jsxs)(it.Fragment,{children:[Object(it.jsx)(mt,{}),";"]})},Ot=t(99),wt=function(e){e&&e instanceof Function&&t.e(43).then(t.bind(null,1127)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),r(e),n(e),c(e),i(e)}))},xt=t(124),yt=t(94);t(301);c.a.icons=Xa,s.a.render(Object(it.jsx)(yt.a,{store:xt.a,children:Object(it.jsx)(Ot.a,{maxSnack:3,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(it.jsx)(vt,{})})}),document.getElementById("root")),wt()},8:function(e,a,t){"use strict";t.d(a,"i",(function(){return p})),t.d(a,"j",(function(){return f})),t.d(a,"f",(function(){return b})),t.d(a,"b",(function(){return h})),t.d(a,"a",(function(){return j})),t.d(a,"c",(function(){return g})),t.d(a,"g",(function(){return m})),t.d(a,"h",(function(){return v})),t.d(a,"d",(function(){return O})),t.d(a,"e",(function(){return x}));var r=t(13),n=t(67),c=t(9),i=t(5),s=t.n(i),o=t(46),u=t.n(o),l=["body"],d="http://localhost:8000/",p="access_token",f="user_id",b="user_permissions",h="http://localhost:8000",j=u.a.create({baseURL:d,timeout:1e5,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem(p)),"Content-Type":"application/json"}}),g=u.a.create({baseURL:d,timeout:1e5,headers:{Authorization:"Bearer ".concat(sessionStorage.getItem(p)),"Content-Type":"multipart/form-data"}});j.interceptors.request.use((function(e){var a=sessionStorage.getItem(p);return a&&(e.headers.Authorization="Bearer "+a),e}),(function(e){return Promise.reject(e)})),g.interceptors.request.use((function(e){var a=sessionStorage.getItem(p);return a&&(e.headers.Authorization="Bearer "+a),e}),(function(e){return Promise.reject(e)}));var m=u.a.create({baseURL:d,timeout:1e5}),v=u.a.create({baseURL:d,timeout:1e5,headers:{"Content-Type":"multipart/form-data"}});function O(e){return w.apply(this,arguments)}function w(){return w=Object(c.a)(s.a.mark((function e(a){var t,c,i,o,u,f,b,h=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.length>1&&void 0!==h[1]?h[1]:{},c=t.body,i=Object(n.a)(t,l),o={"Content-Type":"application/json"},u=Object(r.a)(Object(r.a)({method:c?"POST":"GET"},i),{},{headers:Object(r.a)(Object(r.a)({},o),{},{Authorization:"Bearer ".concat(sessionStorage.getItem(p)),"Content-Type":"application/json"},i.headers)}),c&&(u.body=JSON.stringify(c)),e.prev=4,e.next=7,window.fetch(d+a,u);case 7:return b=e.sent,e.next=10,b.json();case 10:if(f=e.sent,!b.ok){e.next=15;break}return e.abrupt("return",f);case 15:console.log("endpoint",a,"error_code",b.ok),sessionStorage.clear(),window.location.href="/";case 18:throw new Error(b.statusText);case 21:return e.prev=21,e.t0=e.catch(4),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:f));case 24:case"end":return e.stop()}}),e,null,[[4,21]])}))),w.apply(this,arguments)}O.get=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return O(e,Object(r.a)(Object(r.a)({},a),{},{method:"GET"}))},O.post=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return O(e,Object(r.a)(Object(r.a)({},t),{},{body:a}))};var x="light"},97:function(e,a,t){"use strict";t.d(a,"d",(function(){return f})),t.d(a,"c",(function(){return b})),t.d(a,"b",(function(){return h})),t.d(a,"e",(function(){return j}));var r,n=t(1),c=t(19),i=t(9),s=t(5),o=t.n(s),u=t(6),l=t(8),d=t(75),p=t.n(d),f=Object(u.b)("projects/fetchProjectsThunk",function(){var e=Object(i.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.get("project/assigned/all/"+a+"/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),b=Object(u.b)("projects/fetchProjectsForPMThunk",function(){var e=Object(i.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.get("project/all/"+a+"/");case 2:return t=e.sent,console.log("pm projects",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),h=Object(u.b)("projects/fetchProjectsAssigneeThunk",function(){var e=Object(i.a)(o.a.mark((function e(a){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.get("project/assignee/list/"+a+"/");case 2:return t=e.sent,r=[],t.data.map((function(e){r.find((function(a){return a.id==e.assignee.id}))||r.push(e.assignee)})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),j=Object(u.b)("wbs/createWbsThunk",function(){var e=Object(i.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.d.post("wbs/create/",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),g=Object(u.c)({name:"projects",initialState:{data:[],pm_projects:[],tdo_list:[],assignee:[],wbs:[],status:"idle",error:""},reducers:{push_item:function(e,a){console.log("dispatching ----- ",a),e.tdo_list=[].concat(Object(c.a)(e.tdo_list),[a.payload])}},extraReducers:(r={},Object(n.a)(r,f.pending,(function(e,a){e.status="loading"})),Object(n.a)(r,f.fulfilled,(function(e,a){e.status="succeeded",e.data=p()(a.payload,"sub_task")})),Object(n.a)(r,f.rejected,(function(e,a){e.status="failed",e.error=a.error.message})),Object(n.a)(r,h.fulfilled,(function(e,a){e.status="succeeded",e.assignee=a.payload})),Object(n.a)(r,j.fulfilled,(function(e,a){e.status="succeeded",e.wbs=a.payload})),Object(n.a)(r,b.fulfilled,(function(e,a){e.pm_projects=a.payload})),r)});g.actions.push_item;a.a=g.reducer}},[[302,9,10]]]);
//# sourceMappingURL=main.4f1d8848.chunk.js.map