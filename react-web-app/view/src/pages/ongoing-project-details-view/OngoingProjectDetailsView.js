import { CCardBody, CCard, CForm, CButton, CInput, CBadge, CModal, CModalHeader, CModalTitle, CModalBody, CContainer, CRow, CCol, CLabel } from '@coreui/react'
import React, { useState } from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import './OngoingProjectDetailsView.css'
import CIcon from '@coreui/icons-react';
import Select from "react-select";

const OngoingDetailsView = () => {
    const [status, setStatus] = useState('start');
    const radioHandler = (status) => {
        setStatus(status);
    };

    return (
        <>
            <CContainer>
                {/**card show */}

                {/**header portion */}
                <h3 className="dash-header-1">Project Details</h3>
                <div className="card-header-portion-ongoing">
                    <h4 className="ongoing-card-header-1"><IconButton aria-label="favourite" disabled size="medium" color="primary">
                        <GradeIcon fontSize="inherit" className="fav-button" />
                    </IconButton>Virtual Guard</h4>

                    <CButton className="edit-project-on" variant='ghost' ><CIcon name="cil-pencil" className="mr-1 pen-icon" /></CButton>
                  
                </div>
                {/**Show the form for edit when clicked */}
                <div className="card-header-portion-ongoing">

                    <CForm>
                       
                        <CInput className="custom-forminput-6" type="text">
                          
                        </CInput>
                    </CForm>
                    <div>
                    <CButton variant="ghost" className="confirm-name"><CIcon name="cil-check-circle" className="mr-1" size="xl"/></CButton>
                    <CButton variant="ghost" className="cancel-name"><CIcon name="cil-x-circle" className="mr-1" size="xl"/></CButton>
                    </div>
                   
                </div>
                <hr className="header-underline1" />
                  {/**Details card */}
                  <div className="row">
                  <div className="col-md-10 offset-md-1 col-sm-12 col-xs-12 mt-1">
                  <CCard className="card-ongoing-project">
                  <CCardBody className="details-project-body">
                             
                              
                                {/*task percentage portion */}
                                <div className="ongoing-initial-info row">
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Sub Task Name</h6>
                                        <h6 className="project-point-details">Do lungi dance</h6></div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">PM Name</h6>
                                        <h6 className="project-point-details">The one and only </h6></div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Work Package Number</h6>
                                        <h6 className="project-point-details">IDGAF</h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Task Title</h6>
                                        <h6 className="project-point-details">Send object in mqtt</h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Estimated Person(s)</h6>
                                        <h6 className="project-point-details">1,bceause why hire more!</h6>
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
                                    </div>
                               
                                    {/**assignees */}
                                    <div className="col-md-12 mt-4 mb-2">
                                        <h5 className="projectName mb-3">Shared Files</h5>
                                        <div className="file-show-ongoing-details row">
                                            <div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>KIbria Papel</div>
                                            </div>



                                            {/* *extra static buttons,delete code after dynamic implementation */}
                                            <div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>hassibul Hassan</div>
                                            </div><div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>Pial noman</div>
                                            </div><div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>Fahmida Sharmin</div>
                                            </div><div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>Saif Azad</div>
                                            </div><div className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill"><CButton className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>Hafij Shobuj</div>
                                            </div>

                                        </div>
                                    </div>
                                    {/**ACTION BUTTONS !!!!!!!!!! */}
                                    <div className="col-md-12 mt-2 mb-2">
                                        <div className="project-actions">
                                        <CButton className="edit-project-ongoing-task"><CIcon name="cil-pencil" className="mr-1" /> Edit </CButton>
                                        <CButton className="delete-project-2"><CIcon name="cil-trash" className="mr-1"  /> Delete</CButton>
                                        </div>
                                    </div>
                                    </CCardBody>

                  </CCard>
                      </div>    
                  </div>
            </CContainer>
        </>
    )
}
export default OngoingDetailsView