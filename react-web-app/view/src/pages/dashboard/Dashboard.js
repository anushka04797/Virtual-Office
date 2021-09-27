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
                <div className="col-lg-5 offset-lg-1"><ProjectTables/></div>

                <div className="col-lg-5"><AssignedToMe/></div> 
                
                <div className="col-lg-5 offset-lg-1"><EvmsShow/></div>
                
                <div className="col-lg-5"><ScheduledMeetings/></div>
            

            </CRow>
        </CContainer>
        </>
    );
}

export default React.memo(Dashboard)
