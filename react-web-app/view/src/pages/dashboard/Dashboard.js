import React, { Suspense } from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/header/Header';
import MatSideBar from '../../components/sidebar/MatSideBar';
import { CCol, CContainer, CFade, CRow } from '@coreui/react';
import innerRoutes from '../../routes/DashboardRoutes'
import {
    Route,
    Switch,
  } from 'react-router-dom';
  
import './dashboard.css';
import ScheduledMeetings from '../../components/scheduledMeetings/scheduledMeets'
import EvmsShow  from '../../components/evms/evmsTable'
import ProjectTables from '../../components/projects-table/projectsTable'
import AssignedToMe from '../../components/assignedProjects/assignedProjects';
const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const Dashboard=()=> {
    React.useEffect(()=>{
        console.log('dashboard mounted')
    },[])
    return (
        <>
        <CContainer>
            {/**Row for showing da tables */}
            <CRow>
                <CCol lg="6">
<ProjectTables/>
                </CCol>
                <CCol  lg="6">
<AssignedToMe/>
                </CCol>
                <CCol lg="6">
<EvmsShow/>
                </CCol>
                <CCol  lg="6">
<ScheduledMeetings/>
                </CCol>
                

            </CRow>
        </CContainer>
        </>
    );
}

export default React.memo(Dashboard)
