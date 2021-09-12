import React from 'react';
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));

const routes = [
    { path: '/dashboard',exact:true, name: 'Dashboard', component: Dashboard},
    { path: '/dashboard/Projects/ongoing-project-details-view',exact:true, name: 'Ongoing Project Details View', component: React.lazy(()=>import('../pages/ongoing-project-details/ongoingProjectDetails'))},
    { path: '/dashboard/Meetings',exact:true, name: 'Meetings', component: React.lazy(()=>import('../pages/meetings/Meetings'))},
    {path:'/dashboard/Projects/completed-projects',exact:true,name:'Completed Projects',component:React.lazy(()=>import('../pages/completed-project/completedProject'))},
    {path:'/dashboard/Projects/create-new-project',exact:true,name:'Create New Project',component:React.lazy(()=>import('../pages/createProject/createProject'))},
    {path:'/dashboard/EVMS',exact:true,name:'EVMS',component:React.lazy(()=>import('../pages/create-evms/createEVMS'))},
    {path:'/dashboard/WBS',exact:true,name:'WBS',component:React.lazy(()=>import('../pages/WBS-create/createWBS'))},
    {path:'/dashboard/timecards',exact:true,name:'Timecards',component:React.lazy(()=>import('../pages/timecards/timeCard'))},
    {path:'/dashboard/profile',exact:true,name:'Profile',component:React.lazy(()=>import('../pages/profile/profileView'))},
    {path:'/dashboard/shared-documents',exact:true,name:'Shared Documents',component:React.lazy(()=>import('../pages/shared-docs/sharedDocs'))}

]

export default routes