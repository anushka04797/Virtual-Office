import { CCard, CCardBody, CButton, CModal, CModalHeader, CModalBody, CContainer, CForm, CRow} from '@coreui/react';
import GradeIcon from '@material-ui/icons/Grade';
import '../ongoing-project-details/ongoingProjectDetails.css'
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';

const completeProjects = () => {
    return (
        <>
            <div className="container">
                <h3 className="dash-header">Completed Projects(5)</h3>
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <CCard className="card-ongoing-project">
                            <CCardBody className="details-project-body">
                                <h4 className="ongoing-card-header"><IconButton aria-label="favourite" size="medium" >
                                    <GradeIcon fontSize="inherit" className="fav-button" />
                                </IconButton>Virtual Guard</h4>
                                <hr className="header-underline1" />
                                {/*task percentage portion */}
                                <div>
                                    <h5 className="tasks-done"><span className="tiny-header1">Task Done : </span>10/10 </h5>
                                    <h6 className="show-amount">400/400 Hrs</h6>
                                    <div className="progress progress-background">


                                        <div className="progress-bar custom-progress1 progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                                {/*Project category buttons */}
                                <div className="all-da-buttons-1">
                                    {/* <CButton className="package-button lilac" shape="rounded-pill" onClick={() => setVisible(!visible)}>
                                        Front End Design
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton> */}

                                    <CButton className="package-button paleYellow rounded-pill">
                                        Admin Panel Design
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button paleBlue rounded-pill">
                                        Database
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button lilac rounded-pill">
                                        API integration
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button paleYellow rounded-pill">
                                        NFC card and web token
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button paleBlue rounded-pill">
                                        Final delivery
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button pastelGreen rounded-pill">
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
                                <div className="information-show">
                                    <div className="d-flex">
                                        <h5 className="project-details-points child"><span className="info-header-1">Assigned by :</span>Ratan</h5>
                                        {/* <h5 className="project-details-points"><span className="info-header-1">Work Package : </span>1000</h5> */}
                                        <h5 className="project-details-points"><span className="info-header-1">Project Manager : </span>Pial Noman</h5>
                                    </div>
                                    <div className="d-flex">
                                        {/* <h5 className="project-details-points"><span className="info-header-1">Project Details :</span>Design and develop the app for the seller and buyer module</h5> */}
                                        <h5 className="project-details-points child"><span className="info-header-1">Start Date : </span>31 January, 2021</h5>

                                        <h5 className="project-details-points"><span className="info-header-1">Planned Delivery Date : </span>22 Feb, 2021</h5>
                                    </div>
                                </div>
                            </CCardBody>
                        </CCard>
                    </div>
                </div>
            </div>

        </>
    )
}
export default completeProjects;