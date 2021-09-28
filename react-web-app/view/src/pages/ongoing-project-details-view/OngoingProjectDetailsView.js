import { CCardBody, CCard, CButton, CBadge } from '@coreui/react'
import React from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import './OngoingProjectDetailsView.css'
import CIcon from '@coreui/icons-react';

const ongoingDetailsView = () => {
    return (
        <>
            <div className="container">
                <h3 className="dash-header-1">Project Details</h3>
                {/**Details card */}
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-sm-12 col-xs-12 mt-1">
                        <CCard className="card-ongoing-project">
                            <CCardBody className="details-project-body">
                                <div className="card-header-portion-ongoing">
                                    <h4 className="ongoing-card-header-1"><IconButton aria-label="favourite" disabled size="medium" color="primary">
                                        <GradeIcon fontSize="inherit" className="fav-button" />
                                    </IconButton>Virtual Guard</h4>

                                    <CButton className="edit-project-on"><CIcon name="cil-pencil" className="mr-1" /> Edit Details</CButton>
                                </div>
                                <hr className="header-underline1" />
                                {/*task percentage portion */}
                                <div className="ongoing-initial-info row">
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Work Package Number</h6>
                                        <h6 className="project-point-details">1203.7 </h6></div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Task Done</h6>
                                        <h6 className="project-point-details">5/10 </h6></div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Estimated Person(s)</h6>
                                        <h6 className="project-point-details">120 </h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">PM(s)</h6>
                                        <h6 className="project-point-details">120 </h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Planned Delivery Date</h6>
                                        <h6 className="project-point-details">120 </h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Planned Value</h6>
                                        <h6 className="project-point-details">120 </h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Planned Hours</h6>
                                        <h6 className="project-point-details">120 </h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Remaining Hours</h6>
                                        <h6 className="project-point-details">120 </h6>
                                    </div>
                                    {/**Assignees */}
                                    <div className="col-md-12 mt-2">

                                        <h5 className="projectName mb-2">Assignee(s)-(5)</h5>
                                        <div className="row">
                                            <div className="col-md-6 mb-1"><div className="avatar-credentials1 d-flex">

                                                <img src={"avatars/1.jpg"} className="developer-circle-thumbnail-1 mr-2 rounded-circle" /><h6 className="employee-name-developer">Kibria Papel<CBadge color="info" className="ml-1">Developer</CBadge></h6>
                                            </div>
                                            </div>

                                            {/**Other dummy items,remove it once dynamic data is fetched */}
                                            <div className="col-md-6 mb-1"><div className="avatar-credentials1 d-flex">

                                                <img src={"avatars/1.jpg"} className="developer-circle-thumbnail-1 mr-2 rounded-circle" /><h6 className="employee-name-developer">Kibria Papel <CBadge color="info" className="ml-1">Developer</CBadge></h6>
                                            </div>
                                            </div>
                                            <div className="col-md-6 mb-1"><div className="avatar-credentials1 d-flex">

                                                <img src={"avatars/1.jpg"} className="developer-circle-thumbnail-1 mr-2 rounded-circle" /><h6 className="employee-name-developer">Kibria Papel <CBadge color="info" className="ml-1">Developer</CBadge></h6>
                                            </div>
                                            </div>
                                            <div className="col-md-6 mb-1"><div className="avatar-credentials1 d-flex">

                                                <img src={"avatars/1.jpg"} className="developer-circle-thumbnail-1 mr-2 rounded-circle" /><h6 className="employee-name-developer">Kibria Papel <CBadge color="info" className="ml-1">Developer</CBadge></h6>
                                            </div>
                                            </div>
                                            <div className="col-md-6 mb-1"><div className="avatar-credentials1 d-flex">

                                                <img src={"avatars/1.jpg"} className="developer-circle-thumbnail-1 mr-2 rounded-circle" /><h6 className="employee-name-developer">Kibria Papel <CBadge color="info" className="ml-1">Developer</CBadge></h6>
                                            </div>
                                            </div>
                                        </div>
                                        {/**Other dummy items,remove it once dynamic data is fetched */}
                                    </div>

                                    {/**Shared files */}
                                    <div className="col-md-12 mt-2">
                                    <h5 className="projectName">Shared Files</h5>
                                                   <div className="file-show">
                                   
                                    <h5 className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/close-btn.svg"} /></CButton>somefile.file</h5> 


                                    {/* *extra static buttons,delete code after dynamic implementation */}
                                    <h5 className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/close-btn.svg"} /></CButton>somefiledjfkdjkfjdkjfkdjkfjkdjfk.file</h5>
                                 
                                </div> 
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
export default ongoingDetailsView