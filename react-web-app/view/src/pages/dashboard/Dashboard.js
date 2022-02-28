import React, { Suspense } from 'react';
import { CCol, CContainer, CFade, CRow } from '@coreui/react';
import innerRoutes from '../../routes/DashboardRoutes'
  
import './dashboard.css';
import ScheduledMeetings from '../../components/scheduledMeetings/scheduledMeets'
import EvmsShow  from '../../components/evms/evmsTable'
import ProjectTables from '../../components/projects-table/projectsTable'
import AssignedToMe from '../../components/assignedProjects/assignedProjects';
import { useLocation } from 'react-router';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { has_permission } from '../../helper';
const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const Dashboard=()=> {
    let location = useLocation()
    const dispatch = useDispatch()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    React.useEffect(()=>{
        window.scrollTo(0, 0);
        console.log('dashboard mounted',location.state)
        if(location.state?.from == 'login'){
            enqueueSnackbar('Welcome ',{variant:'success'})
        }
        if(location.state?.message){
            console.log('message',location.state.message)
            enqueueSnackbar(location.state.message,{variant:'warning'})
        }
        //console.log(new Date(JSON.parse(sessionStorage.getItem('TOKEN')).time).toISOString())
    },[])
    return (
        <>
        <CContainer>
            {/**Row for showing da tables */}
            <CRow>
                <div className="col-lg-5 offset-lg-1"><ProjectTables/></div>
                <div className="col-lg-5"><AssignedToMe/></div> 
                <div className="col-lg-5 offset-lg-1"><ScheduledMeetings/></div>
                {has_permission('evms.view_evms') && <div className="col-lg-5 "><EvmsShow/></div>}
            </CRow>
        </CContainer>
        </>
    );
}

export default React.memo(Dashboard)
