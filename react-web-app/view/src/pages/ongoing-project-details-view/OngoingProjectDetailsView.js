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
                                    <div className="col-md-12 mt-4">

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
                                    <div className="col-md-12 mt-4 mb-2">
                                        <h5 className="projectName mb-3">Shared Files</h5>
                                        <div className="file-show-ongoing-details row">
                                            <div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>somefile.file</div>
                                            </div>



                                            {/* *extra static buttons,delete code after dynamic implementation */}
                                            <div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>abcdjskjdksjkds.xvts</div>
                                            </div><div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>abcdjskjdksjkds.xvts</div>
                                            </div><div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>abcdjskjdksjkds.xvts</div>
                                            </div><div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>abcdjskjdksjkds.xvts</div>
                                            </div><div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>abcdjskjdksjkds.xvts</div>
                                            </div>

                                        </div>
                                    </div>


                                    {/**_________subtasks_____________________ */}
                                    <div className="col-md-12 mt-2 mb-2">
                                        <hr className="header-underline1" />
                                        <h5 className="projectName mb-3">Sub Tasks</h5>
                                        {/**Task cards */}
                                        <div className="row">

                                            <div className="col-md-12 mb-1">
                                                <div className="task-cards">
                                                <div className="crud-btuttons-1">
                                                    <CButton className="edit-project-on-2"><CIcon name="cil-pencil" /></CButton>
                                                    <CButton className="delete-project-2"><CIcon name="cil-trash" /></CButton>
                                                </div>
                                                <h5 className="project-details-points child"><span className="info-header-1">Subtask : </span>API Development</h5>
                                                <h5 className="info-header-1">Tasks :</h5>
                                                <ol className="task-lists">
                                                    <li className="task-list-item"><span className="info-header-1">Task Title: </span>Correct API for add operation</li>
                                                    <li className="task-list-item"><span className="info-header-1">Task Title: </span>Correct API for sign in operation</li>
                                                </ol>
                                                </div>
                                            </div>
                                            {/**______DUMMY TASK CARDS,DELETE ONCE DYNAMIC */}
                                            <div className="col-md-12">
                                                <div className="task-cards">
                                                <div className="crud-btuttons-1">
                                                    <CButton className="edit-project-on-2"><CIcon name="cil-pencil" /></CButton>
                                                    <CButton className="delete-project-2"><CIcon name="cil-trash" /></CButton>
                                                </div>
                                                <h5 className="project-details-points child"><span className="info-header-1">Subtask : </span>API Development</h5>
                                                <h5 className="info-header-1">Tasks :</h5>
                                                <ol className="task-lists">
                                                    <li className="task-list-item"><span className="info-header-1">Task Title: </span>Correct API for add operation</li>
                                                    <li className="task-list-item"><span className="info-header-1">Task Title: </span>Correct API for sign in operation</li>
                                                </ol>
                                                </div>
                                            </div>
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