import React from 'react';
import {CButton, CCard, CCardBody} from '@coreui/react';
  const assignedProjectsDashboard =()=>{
return (
    <>
    
    <div className="main-holder-projects">
<h3 className="projectsHeader">
    Assigned to me
</h3>

<div className="card-holder1">
    <CCard className="project-card1">
        <CCardBody>
        <h6 className="id-no1">project id: #12340C</h6>
            <h5 className="card-details1"><span className="p-header-3">Task Title:</span> Virtual Office</h5>
            <h5 className="card-details1"><span className="p-header-3">Due Date :</span>15th September,2021</h5>
        </CCardBody>
    
    </CCard>
    <CCard className="project-card1">
        <CCardBody>
        <h6 className="id-no1">project id: #12340C</h6>
            <h5 className="card-details1"><span className="p-header-3">Task Title:</span> Virtual Office</h5>
            <h5 className="card-details1"><span className="p-header-3">Due Date :</span>15th September,2021</h5>
        </CCardBody>
    
    </CCard>
 
    </div>
    <div className="button-holder3"><CButton className="tiny-buttons1">View all</CButton></div>
</div>
    
    </>
)
  }
  export default assignedProjectsDashboard;