import { React, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import './ongoingProjectDetails.css'
import { CCard, CCardBody, CButton, CModal, CModalHeader, CModalBody, CContainer, CForm, CRow, CFormLabel, CFormInput, CModalTitle } from '@coreui/react';
import GradeIcon from '@material-ui/icons/Grade';
import { Link, Redirect, useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Select from "react-select";
import makeAnimated from "react-select/animated";
const OngoingProjectDetails = () => {
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'rgba(238, 232, 250, 0.5)',border:'1px solid #EEE8FA',borderRadius:"8px",height:"60px",boxShadow:"inset 0px 4px 20px rgba(189, 158, 251, 0.1)",fontSize:"16px",lineHeight:"24px" }),
    }
    const [visible, setVisible] = useState(false);
    const options = [
        { value: "nypd", label: "New York Police Department" },
        { value: "lapd", label: "Los Angeles Police Department" },
        { value: "miamipd", label: "Miami Police Department" },
        { value: "dmp", label: "Dhaka Metropoliton Police" },

    ];
    const animatedComponents = makeAnimated();

    return (
        <>
            {/**WBS MODAL */}
            <CModal alignment="center" scrollable
                visible={visible}
                onDismiss={() => setVisible(false)} className="wbs-modal">
                <CModalHeader className="wbs-modal-header" onDismiss={() => setVisible(false)}>
                    <CModalTitle className="modal-title"><span className="bold-part1">Wireframe</span> <span className="light-part1">(50/100 Hrs)</span></CModalTitle></CModalHeader>
                <CModalBody className="wbs-modal-body">
                    <CContainer>
                        <h6 className="task-name1">Seller &amp; Buyer module wireframe design with prototype</h6>
                        <CForm>
                            <CRow>
                                {/**Start date */}

                                <div className="col-md-6 mb-3">
                                    <CFormLabel
                                        htmlFor="startDate"
                                        className="custom-label2"
                                    >Task Start Date</CFormLabel>
                                    <CFormInput type="date" id="startDate" className="custom-formgroup2" />
                                </div>
                                {/*task end date */}

                                <div className="col-md-6 mb-3">
                                    <CFormLabel
                                        htmlFor="endDate"
                                        className="custom-label2"
                                    >Task end Date</CFormLabel>
                                    <CFormInput type="date" id="endDate"  className="custom-formgroup2" />
                                </div>

                                {/*estimated person */}
                                <div className="col-md-6 mb-3">
                                    <CFormLabel
                                        htmlFor="estimatedPerons"
                                        className="custom-label2"
                                    >Estimated Persons</CFormLabel>
                                    <CFormInput type="number" id="estimatedPerons" className="custom-formgroup2" />
                                </div>
                                {/*labor hours */}
                                <div className="col-md-6 mb-3">
                                    <CFormLabel
                                        htmlFor="laborHours"
                                        className="custom-label2"
                                    >Labour Hours</CFormLabel>
                                    <CFormInput type="number" id="laborHours" className="custom-formgroup2" />
                                </div>

                                {/*participants */}
                                <div className="col-md-12 mb-3">
                                    <CFormLabel htmlFor="participants" className="custom-label2">
                                        Assignees
                                    </CFormLabel>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        name="participants"
                                        isMulti
                                        options={options}
                                        styles={colourStyles}
                                        
                                    />
                                </div>
                                {/*already assigned*/}
                                <div className="col-md-12 mb-3">
                                    <div className="file-show add-dude">
<h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"}/></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser1.png"} /></h5>
                                    {/**dummy data,remove it when dynamic */}
                                    <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"}/></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser2.png"} /></h5>
                                    <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"}/></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser3.png"} /></h5>
                                    <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"}/></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser4.png"} /></h5>
                                    <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"}/></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser1.png"} /></h5>
                                    
                                    </div>
                                </div>

                                {/**submit button */}
                                <div className="col-md-12 mb-3">
                                    <CButton type="submit" className="create-wbs-button">Create WBS</CButton>
                                </div>
                            </CRow>
                        </CForm>
                    </CContainer>
                </CModalBody>
            </CModal>
            {/*wbs modal ends */}

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
                                    <CButton className="package-button lilac" shape="rounded-pill" onClick={() => setVisible(!visible)}>
                                        Front End Design
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>

                                    <CButton className="package-button paleYellow" shape="rounded-pill">
                                        Admin Panel Design
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button paleBlue" shape="rounded-pill">
                                        Database
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button lilac" shape="rounded-pill">
                                        API integration
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button paleYellow" shape="rounded-pill">
                                        NFC card and web token
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button paleBlue" shape="rounded-pill">
                                        Final delivery
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton>
                                    <CButton className="package-button pastelGreen" shape="rounded-pill">
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
                                    <h5 className="project-details-points"><span className="info-header-1">Assigned by :</span>Ratan</h5>
                                    <h5 className="project-details-points"><span className="info-header-1">Work Package : </span>1000</h5>
                                    <h5 className="project-details-points"><span className="info-header-1">Project Details :</span>Design and develop the app for the seller and buyer module</h5>
                                    <h5 className="project-details-points"><span className="info-header-1">Start Date : </span>31 January, 2021</h5>

                                    <h5 className="project-details-points"><span className="info-header-1">Planned Delivery Date : </span>22 Feb, 2021</h5>
                                </div>

                                {/**file uploads and view */}
                                <div className="file-show">
                                    <h5 className="files-view">Files :</h5>
                                    <h5 className="file-attached"><CButton className="remove-file"><img src={"assets/icons/close-btn.svg"} /></CButton>somefile.file</h5>


                                    {/**extra static buttons,delete code after dynamic implementation */}
                                    <h5 className="file-attached"><CButton className="remove-file"><img src={"assets/icons/close-btn.svg"} /></CButton>somefiledjfkdjkfjdkjfkdjkfjkdjfk.file</h5>
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