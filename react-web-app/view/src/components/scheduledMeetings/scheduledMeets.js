import React from 'react'
import {CButton, CCard, CCardBody} from '@coreui/react';

const scheduleMeetings=()=>{
return(
    <>
     <div className="main-holder-projects">
<h3 className="projectsHeader">
    Scheduled Meetings
</h3>

<div className="card-holder1 ">
    <CCard className="project-card1">
        <CCardBody>
            <h6 className="id-no1">meeting id: #12340C</h6>
            <h5 className="card-details1"><span className="p-header-3">Project Name:</span> Virtual Office</h5>
            <h5 className="card-details1"><span className="p-header-3">Date and Time :</span>Today,1:53pm</h5>
        </CCardBody>
    
    </CCard>
    <CCard className="project-card1">
        <CCardBody>
            <h6 className="id-no1">meeting id : #12340C</h6>
            <h5 className="card-details1"><span className="p-header-3">Project Name:</span> Virtual Office</h5>
            <h5 className="card-details1"><span className="p-header-3">Date and Time :</span>10th September,2021,10:15am</h5>
        </CCardBody>
    
    </CCard>
   
    </div>
    <div className="button-holder3"><CButton className="tiny-buttons1">View all</CButton></div>
</div>

    
    </>
)
}
export default scheduleMeetings