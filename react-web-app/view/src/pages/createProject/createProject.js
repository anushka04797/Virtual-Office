import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton } from '@coreui/react';
import React from 'react'
import './createProject.css'

const CreateNewProject = () => {
  
  
  return (
    <>
      <CContainer>
        <CRow>
          <div className="col-md-8 offset-md-2 col-sm-12">
            <CCard className="custom-project-card-1">
              <CCardHeader className="project-header-3"> <h4 className="section-name-projectcreate">Create a new project</h4>
              </CCardHeader>
              <CCardBody>
                <CContainer>
                  <CForm>
                    <CRow>
                      {/**task delivery order */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-5">
                          Task Delivery Order
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**Sub task */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          Subtask
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**work package number */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          Work Package Number
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**Task title */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-5">
                          Task Title
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**estimated persons */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          Estimated Person(s)
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**Assignees */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          Assignee(s)
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**pMs */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          PM(s)
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**Planned delivery date */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          Planned Delivery Date
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**Planned Value */}
                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Planned Value
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**planned hours */}

                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Planned hr(s)
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**remaining hours */}
                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Remaining hr(s)
                        </CLabel>
                        <CInput className="custom-forminput-5"></CInput>
                      </div>
                      {/**submit buttons */}
                      <div className="col-md-12">
                        <div className="project-form-button-holders mt-3">
                          <CButton className="create-btn-prjct create-prjct">Create Project</CButton>
                          <CButton className="create-btn-prjct cancel-prjct">Cancel</CButton>
                        </div>
                      </div>
                    </CRow>
                  </CForm>
                </CContainer>
              </CCardBody>
            </CCard>

          </div>
        </CRow>
      </CContainer>

    </>
  )

}
export default CreateNewProject;