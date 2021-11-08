import React from 'react';
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));

const routes = [
    { path: '/dashboard',exact:true, name: 'Dashboard', component: Dashboard},
    { path: '/dashboard/Projects/assigned-projects',exact:true, name: 'Assigned Projects', component: React.lazy(()=>import('../pages/ongoing-project-details/ongoingProjectDetails'))},
    { path: '/dashboard/Projects/assigned-projects/details/:work_package_number',exact:true, name: 'Assigned Project Details', component: React.lazy(()=>import('../pages/ongoing-project-details-view/OngoingProjectDetailsView'))},
    { path: '/dashboard/Projects/my-projects',exact:true, name: 'My Projects', component: React.lazy(()=>import('../pages/my-projects/myProjects'))},
    { path: '/dashboard/Projects/my-projects/details/:work_package_number',exact:true, name: 'My Project Details', component: React.lazy(()=>import('../pages/my-projects-details/myProjectsDetails'))},
    { path: '/dashboard/Meetings',exact:true, name: 'Meetings', component: React.lazy(()=>import('../pages/meetings/Meetings'))},
    {path:'/dashboard/Projects/completed-projects',exact:true,name:'Completed Projects',component:React.lazy(()=>import('../pages/completed-project/completedProject'))},
    {path:'/dashboard/Projects/completed-projects/details/:work_package_number',exact:true,name:'Completed Projects details',component:React.lazy(()=>import('../pages/completed-project-details-view/CompletedProjectDetails'))},
    {path:'/dashboard/Projects/create-new-project',exact:true,name:'Create New Project',component:React.lazy(()=>import('../pages/createProject/createProject'))},
    {path:'/dashboard/EVMS/create',exact:true,name:'EVMS Create',component:React.lazy(()=>import('../pages/create-evms/createEVMS'))},
    {path:'/dashboard/EVMS/view',exact:true,name:'EVMS View',component:React.lazy(()=>import('../pages/evms-view/evmsView'))},

    {path:'/dashboard/WBS/create-wbs',exact:true,name:'WBS',component:React.lazy(()=>import('../pages/WBS-create/createWBS'))},
    {path:'/dashboard/WBS/board',exact:true,name:'Board',component:React.lazy(()=>import('../pages/wbs-board/Board'))},

    {path:'/dashboard/timecards',exact:true,name:'Timecards',component:React.lazy(()=>import('../pages/timecards/timeCard'))},
    {path:'/dashboard/profile',exact:true,name:'Profile',component:React.lazy(()=>import('../pages/profile/profileView'))},
    {path:'/dashboard/shared-documents',exact:true,name:'Shared Documents',component:React.lazy(()=>import('../pages/shared-docs/SharedDocs'))}

]

export default routes