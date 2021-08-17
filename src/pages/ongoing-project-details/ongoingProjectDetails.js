import React from 'react';
import { makeStyles } from '@material-ui/styles';
import './ongoingProjectDetails.css'
import { CCard, CCardBody, CButton } from '@coreui/react';
import GradeIcon from '@material-ui/icons/Grade';
import { Link, Redirect, useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const OngoingProjectDetails = () => {



    return (
        <>
            <div className="container">
                <h3 className="dash-header">Ongoing Projects(5)</h3>
                <div className="row">
                    <div className="col-md-12">
                        <CCard className="card-ongoing-project">
                            <CCardBody className="details-project-body">
                                <h4 className="ongoing-card-header"><IconButton aria-label="favourite" size="medium" >
                                    <GradeIcon fontSize="inherit" className="fav-button" />
                                </IconButton>Virtual Guard</h4>
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
                                    <CButton className="package-button lilac" shape="rounded-pill">
                                        Front End Design
                                        <span class="tooltiptext">1000.5</span>
                                    </CButton>
                                   
                                    <CButton className="package-button paleYellow" shape="rounded-pill">
                                        Admin Panel Design
                                        <span class="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button paleBlue" shape="rounded-pill">
                                        Database
                                        <span class="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button lilac" shape="rounded-pill">
                                        API integration
                                        <span class="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button paleYellow" shape="rounded-pill">
                                        NFC card and web token
                                        <span class="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button paleBlue" shape="rounded-pill">
                                       Final delivery
                                       <span class="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button pastelGreen" shape="rounded-pill">
                                        Virtual Office Redesign
                                        <span class="tooltiptext">1000.5</span>
                                    </CButton>
                                </div>

                                {/*Project participants */}
                                <div className="all-da-workers1">
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser1.png"}/> 
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser2.png"}/>
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser3.png"}/>
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser4.png"}/>
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser1.png"}/>
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser2.png"}/>
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser3.png"}/>
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser4.png"}/>
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser1.png"}/>
                                    <img className="img-fluid worker-image" src={"assets/thumbnails/defaultuser2.png"}/>

                                  
                                </div>

                                {/*project info in text */}
                                <div className="information-show">
                                    <h5 className="project-details-points"><span className="info-header-1">Assigned by :</span>Ratan</h5>
                                    <h5 className="project-details-points"><span className="info-header-1">Work Package : </span>1000</h5>
                                    <h5 className="project-details-points"><span className="info-header-1">Project Details :</span>Design and develop the app for the seller and buyer module</h5>
                                    <h5 className="project-details-points"><span className="info-header-1">Start Date : </span>31 January, 2021</h5>
                                   
                                    <h5 className="project-details-points"><span className="info-header-1">Planned Delivery Date : </span>22 Feb, 2021</h5>
                                </div>

                                {/**file uploads and view */}
                                <div className="file-show">
                                    <h5 className="files-view">Files :</h5>
                                    <h5 className="file-attached"><CButton className="remove-file"><img src={"assets/icons/close-btn.svg"}/></CButton>somefile.file</h5>


                                    {/**extra static buttons,delete code after dynamic implementation */}
                                    <h5 className="file-attached"><CButton className="remove-file"><img src={"assets/icons/close-btn.svg"}/></CButton>somefiledjfkdjkfjdkjfkdjkfjkdjfk.file</h5>
                                    {/*upload file nibutton */}
                                    <IconButton aria-label="upload" className="upload-file-button1">
          <AddCircleIcon className="ad-file-icon" />
        </IconButton>
                                </div>

                                {/*add new task option */}

                                <div className="new-task-add">
                                    <CButton className="task-add-btn-1">+ Add New Task</CButton>
                                </div>
                            </CCardBody>

                        </CCard>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OngoingProjectDetails;