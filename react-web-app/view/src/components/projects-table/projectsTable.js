import React from 'react';
import './projectsTable.css';
import {CButton, CCard, CCardBody} from '@coreui/react';


const projectsTableDashboard =()=>{
return (
    <>
    <div className="main-holder-projects">
<h3 className="projectsHeader">
    Projects
</h3>

<div className="card-holder1">
    <CCard className="project-card1">
        <CCardBody>
            <h6 className="id-no1">project id: #12340C</h6>
            <h5 className="card-details1"><span className="p-header-3">Project Name (key): </span> Virtual Office</h5>
            <h5 className="card-details1"><span className="p-header-3">Lead Name : </span>Pial Noman</h5>
        </CCardBody>
    
    </CCard>
    <CCard className="project-card1">
        <CCardBody>
            <h6 className="id-no1">project id : #12340C</h6>
            <h5 className="card-details1"><span className="p-header-3">Project Name (key): </span> Virtual Office</h5>
            <h5 className="card-details1"><span className="p-header-3">Lead Name : </span>Pial Noman</h5>
        </CCardBody>
    
    </CCard>
   
    </div>
    <div className="button-holder3"><CButton className="tiny-buttons1">View all</CButton></div>
</div>

    
    </>
)
}
export default projectsTableDashboard;