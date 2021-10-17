import { CCard, CCardBody, CButton, CModal, CModalHeader, CModalBody, CContainer, CForm, CRow} from '@coreui/react';
import GradeIcon from '@material-ui/icons/Grade';
import '../ongoing-project-details/ongoingProjectDetails.css'
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from "react-router-dom";  
import React from 'react';
import { CIcon } from "@coreui/icons-react";
import { useSelector } from 'react-redux';

const CompleteProjects = () => {
    let historyTo = useHistory();
    const projects=useSelector(state=> state.projects.data.filter((project)=> project.status === 1))
    return (
        <>
            <div className="container">
                <h3 className="dash-header">Completed Projects({projects.length})</h3>
                <div className="row">
                 
                <div className="col-md-10 offset-md-1 col-sm-12 col-xs-12 mt-1">
                        {projects!=undefined && projects.map((project,idx)=>(<CCard className="card-ongoing-project">
                            <CCardBody className="details-project-body">
                               
                                <h4 className="ongoing-card-header"><IconButton aria-label="favourite" size="medium" >
                                    <GradeIcon fontSize="inherit" className="fav-button" />
                                </IconButton>{project.task_delivery_order}</h4>
                                <hr className="header-underline1" />

                                {/*task percentage portion */}
                                <div>
                                    <h5 className="tasks-done"><span className="tiny-header1">Task Done : </span>5/10 </h5>
                                    <h6 className="show-amount">200/400 Hrs</h6>
                                    <div className="progress progress-background">


                                        <div className="progress-bar custom-progress1 progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                                {/*Project category buttons */}
                                <div className="all-da-buttons-1">
                                    {/* <CButton className="package-button lilac" shape="rounded-pill" onClick={() => setVisible(!visible)}>
                                        Front End Design
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton> */}

                                    <CButton className="package-button rounded-pill" >
                                        Admin Panel Design
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button rounded-pill" >
                                        Database
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button rounded-pill" >
                                        API integration
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button rounded-pill" >
                                        NFC card and web token
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button rounded-pill" >
                                        Final delivery
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button rounded-pill" >
                                        Virtual Office Redesign
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                </div>

                                {/*Project participants */}
                                <div className="all-da-workers1">
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser1.png"} />
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser2.png"} />
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser3.png"} />
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser4.png"} />
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser1.png"} />
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser2.png"} />
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser3.png"} />
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser4.png"} />
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser1.png"} />
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser2.png"} />


                                </div>

                                {/*project info in text */}
                                <div className="information-show row">
                                    <div className="info-show-now col-md-6"> 
                                        <h5 className="project-details-points child"><h5 className="info-header-1">Assigned by :</h5>{project.pm.first_name+' '+project.pm.last_name}</h5>
                                    {/* <h5 className="project-details-points"><h5 className="info-header-1">Work Package : </h5>1000</h5> */}
                                    <h5 className="project-details-points"><h5 className="info-header-1">Project Manager : </h5>{project.pm.first_name+' '+project.pm.last_name}</h5>
                                    </div>
                              <div className="info-show-now col-md-6">
                                    {/* <h5 className="project-details-points"><h5 className="info-header-1">Project Details :</h5>Design and develop the app for the seller and buyer module</h5> */}
                                    <h5 className="project-details-points child"><h5 className="info-header-1">Start Date : </h5>{project.date_created}</h5>

                                    <h5 className="project-details-points"><h5 className="info-header-1">Planned Delivery Date : </h5>{project.planned_delivery_date}</h5>
                                    </div>
                                </div>

                                {/**file uploads and view */}
                               {/*  <div className="file-show">
                                    <h5 className="files-view">Files :</h5>
                                    <h5 className="file-attached"><CButton className="remove-file"><img src={"assets/icons/close-btn.svg"} /></CButton>somefile.file</h5> */}


                                    {/**extra static buttons,delete code after dynamic implementation */}
                                    {/* <h5 className="file-attached"><CButton className="remove-file"><img src={"assets/icons/close-btn.svg"} /></CButton>somefiledjfkdjkfjdkjfkdjkfjkdjfk.file</h5> */}
                                    {/*upload file nibutton */}
                                    {/* <IconButton aria-label="upload" className="upload-file-button1">
                                        <AddCircleIcon className="ad-file-icon" />
                                    </IconButton>
                                </div> */}

                                {/*add new task option */}

                                {/* <div className="new-task-add">
                                    <CButton className="task-add-btn-1" onClick={toggleTaskForm}>+ Add New Task</CButton>
                                </div> */}

                                {/*show add task form on click button */}
                                <div className="ongoing-action-card-buttons">
                                <CButton className="view-ongoing-details" onClick={() => historyTo.push('/dashboard/Projects/completed-projects/details/1')}><CIcon name="cil-list-rich" className="mr-1" />View Details</CButton>
                                </div>
                            </CCardBody>

                        </CCard>))}
                    </div>
                </div>
            </div>

        </>
    )
}
export default CompleteProjects;