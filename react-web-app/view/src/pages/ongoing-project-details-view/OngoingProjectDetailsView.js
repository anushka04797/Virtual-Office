import { CCardBody, CCard, CForm, CButton, CInput, CBadge, CModal, CModalHeader, CModalTitle, CModalBody, CContainer, CRow, CCol, CLabel } from '@coreui/react'
import React, { useState } from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import './OngoingProjectDetailsView.css'
import CIcon from '@coreui/icons-react';
import Select from "react-select";

const OngoingDetailsView = () => {
    const colourStyles = {
        // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
        option: (provided, state) => ({ ...provided, fontSize: '14px !important' }),
    
      }
      const options1 = [
        { value: "nypd", label: "La Casa De papel" },
        { value: "lapd", label: "Aninda" },
        { value: "miamipd", label: "Pial Noman" },
        { value: "dmp", label: "Saif Rahi" },
    
      ];
      const handleChange = (field, value) => {
        switch (field) {
        
          case 'options1':
            setAssigneeValue(value)
            break
          default:
            break
        }
      }
      const [assigneeValue, setAssigneeValue] = useState('')
    const [basicInfoEdit, setBasicInfoEdit] = useState(false);
    const [taskInfoEdit, setTaskInfoEdit] = useState(false);
    const editBasicInfoForm = () => {
        setBasicInfoEdit(!basicInfoEdit);
    }
    const editTaskInfoForm = () => {
        setTaskInfoEdit(!taskInfoEdit)
    }

    return (
        <>
            <div className="container">
                {/**edit basic information */}
                <CModal alignment="center" show={basicInfoEdit} onClose={editBasicInfoForm}>
                    <CModalHeader onDismiss={() => setBasicInfoEdit(!basicInfoEdit)} closeButton>
                        <CModalTitle className="modal-title-projects">
                            <span className="edit-profile-form-header">Edit Project Info</span>

                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CContainer>
                            <CForm>
                                <CRow>
                                    {/** Estimated Persons*/}
                                    <CCol md="6" className="mt-2">
                                        <CLabel htmlFor="estPersons" className="custom-label-5">Estimated Person(s)</CLabel>
                                        <CInput id="estPersons" name="estPersons" type="number" className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Planned Delivery Date*/}
                                    <CCol md="6" className="mt-2">
                                        <CLabel htmlFor="plannedDelDate" className="custom-label-5">Planned Delivery Date</CLabel>
                                        <CInput id="plannedDelDate" name="plannedDelDate" type="date" className="custom-forminput-6" />
                                    </CCol>
                                    {/**Planned Value */}
                                    <CCol md="6" className="mt-2">
                                        <CLabel htmlFor="plannedVal" className="custom-label-5">Planned Value</CLabel>
                                        <CInput id="plannedVal" name="plannedVal" type="number" className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Planned Hours */}
                                    <CCol md="6" className="mt-2">
                                        <CLabel htmlFor="plannedHrs" className="custom-label-5">Planned Hrs</CLabel>
                                        <CInput id="plannedHrs" name="plannedHrs" type="number" className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Remaining Hours */}
                                    <CCol md="6" className="mt-2">
                                        <CLabel htmlFor="remHrs" className="custom-label-5">Remaining Hours</CLabel>
                                        <CInput id="remHrs" name="remHrs" type="number" className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**submit buttons */}
                                    <CCol md="12" className="mt-2">
                                        <div className="project-form-button-holders mt-3">
                                            <CButton className="profile-form-btn update-profile">
                                                Update Info
                                            </CButton>
                                            <CButton className="profile-form-btn cancel-update" onClick={() => setBasicInfoEdit(!basicInfoEdit)} type="reset">
                                                Cancel
                                            </CButton>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CContainer>
                    </CModalBody>
                </CModal>
                {/**MODAL FOR updating basic info ends */}

                {/**___MODAL FOR UPDATING TASK BEGINS______ */}
                <CModal alignment="center" show={taskInfoEdit} onClose={editTaskInfoForm} >
                    <CModalHeader onDismiss={() => setTaskInfoEdit(!taskInfoEdit)} closeButton>
                        <CModalTitle className="modal-title-projects">
                            <span className="edit-profile-form-header">Edit Task Details</span>

                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CContainer>
                            <CForm>
                                <CRow>
                                    {/**Task Title */}
                                    <CCol md="12" className="mt-2">
<CLabel className="custom-label-5" htmlFor="taskTitle">
    Task Title
</CLabel>
<CInput type="text" className="custom-forminput-6" name="taskTitle" id="taskTitle"/>
{/**Assignee */}
                                    </CCol>
                                    {/**Assignees */}
                                    <CCol md="12" className="mt-2">
                                    <CLabel className="custom-label-5" htmlFor="workerBees" aria-labelledby="workerBees">
                          Assignee(s)
                        </CLabel>
                        <Select
                          closeMenuOnSelect={false}
                          aria-labelledby="workerBees"
                          id="workerBees"
                          minHeight="35px"
                          placeholder="Add or remove assignees"
                          isClearable={true}
                          isMulti={true}
                          onChange={(value) => handleChange('options1', value)}
                          classNamePrefix="custom-forminput-6"
                          value={assigneeValue}
                          options={options1}
                          styles={colourStyles}



                        />
                        </CCol>
                        {/**Submit buttons */}
                        <CCol md="12" className="mt-2">
                                        <div className="project-form-button-holders mt-3">
                                            <CButton className="profile-form-btn update-profile">
                                                Update Info
                                            </CButton>
                                            <CButton className="profile-form-btn cancel-update" onClick={() => setTaskInfoEdit(!taskInfoEdit)} type="reset">
                                                Cancel
                                            </CButton>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CContainer>
                    </CModalBody>

                </CModal>
                {/**____________MODAL FOR UPDATING TASK ENDS__________*/}


                {/**header portion */}
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

                                    <CButton className="edit-project-on" onClick={() => editBasicInfoForm()}><CIcon name="cil-pencil" className="mr-1" /> Edit Details</CButton>
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
                                        <h6 className="project-point-details">12th October,2021 </h6>
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
                                    {/* <div className="col-md-12 mt-4">

                                        <h5 className="projectName mb-2">Assignee(s)-(5)</h5>
                                        
                                       
                                    </div> */}

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
                                                        <CButton className="edit-project-on-2" onClick={() => editTaskInfoForm()}><CIcon name="cil-pencil" /></CButton>
                                                        <CButton className="delete-project-2"><CIcon name="cil-trash" /></CButton>
                                                    </div>
                                                    <h5 className="project-details-points child"><span className="info-header-1">Task Title : </span>API Development</h5>
                                                    {/**assignees */}

                                                    <div>
                                                        <h5 className="info-header-1">Assignee(s)-(5)</h5>
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

                                                    </div>
                                                    <h5 className="project-details-points mt-2"><span className="info-header-1">Subtask:</span>Virtual Office</h5>
                                                    <h5 className="project-details-points"><span className="info-header-1">Last Updated:</span>12th October,2021</h5>
                                                    
                                                    {/* <ol className="task-lists">
                                                    <li className="task-list-item"><span className="info-header-1">Task Title: </span>Correct API for add operation</li>
                                                    <li className="task-list-item"><span className="info-header-1">Task Title: </span>Correct API for sign in operation</li>
                                                </ol> */}
                                                </div>
                                            </div>
                                            {/**______DUMMY TASK CARDS,DELETE ONCE DYNAMIC */}
                                            <div className="col-md-12 mb-1">

                                                <div className="task-cards">
                                                    <div className="crud-btuttons-1">
                                                        <CButton className="edit-project-on-2"><CIcon name="cil-pencil" /></CButton>
                                                        <CButton className="delete-project-2"><CIcon name="cil-trash" /></CButton>
                                                    </div>
                                                    <h5 className="project-details-points"><span className="info-header-1">Task Title : </span>API Development</h5>
                                                    {/**assignees */}

                                                    <div>
                                                        <h5 className="info-header-1">Assignee(s)-(5)</h5>
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

                                                    </div>
                                                    <h5 className="project-details-points mt-2"><span className="info-header-1">Subtask:</span>Virtual Office</h5>
                                                    <h5 className="project-details-points"><span className="info-header-1">Last Updated:</span>12th October,2021</h5>

                                                    {/* <ol className="task-lists">
                                                <li className="task-list-item"><span className="info-header-1">Task Title: </span>Correct API for add operation</li>
                                                <li className="task-list-item"><span className="info-header-1">Task Title: </span>Correct API for sign in operation</li>
                                            </ol> */}
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
export default OngoingDetailsView