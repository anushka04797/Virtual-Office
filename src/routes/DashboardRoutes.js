import React from 'react';
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));

const routes = [
    { path: '/dashboard',exact:true, name: 'Dashboard', component: Dashboard},
    { path: '/dashboard/ongoing-project-details-view',exact:true, name: 'Ongoing Project Details View', component: React.lazy(()=>import('../pages/ongoing-project-details/ongoingProjectDetails'))},
    { path: '/dashboard/Meetings',exact:true, name: 'Meetings', component: React.lazy(()=>import('../pages/jitsi/AkashMeet'))},
]

export default routes