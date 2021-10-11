import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton } from '@coreui/react';
import { React, Component, useState } from 'react';
import './createProject.css';
import { ActionMeta, OnChangeValue } from 'react-select';
import Creatable, { CreatableSelect, makeCreatableSelect } from 'react-select/creatable';
import Select from "react-select";
import makeAnimated from "react-select/animated";

// class CreatableSingle extends Component {
//   handleChange = (
//     newValue: OnChangeValue[options,false],
//     actionMeta: ActionMeta<options>
//   ) => {
//     console.group('Value Changed');
//     console.log(newValue);
//     console.log(`action: ${actionMeta.action}`);
//     console.groupEnd();
//   };
//   handleInputChange = (inputValue, ActionMeta) => {
//     console.group('Input Changed');
//     console.log(inputValue);
//     console.log(`action: ${actionMeta.action}`);
//     console.groupEnd();
// }
// }

const CreateNewProject = () => {
  const colourStyles = {
    // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
    option: (provided, state) => ({ ...provided, fontSize: '14px !important' }),

  }
  const options = [
    { value: "nypd", label: "New York Police Department" },
    { value: "lapd", label: "Los Angeles Police Department" },
    { value: "miamipd", label: "Miami Police Department" },
    { value: "dmp", label: "Dhaka Metropoliton Police" },

  ];
  const options1 = [
    { value: "nypd", label: "La Casa De papel" },
    { value: "lapd", label: "Aninda" },
    { value: "miamipd", label: "Pial Noman" },
    { value: "dmp", label: "Saif Rahi" },

  ];

  const handleChange = (field, value) => {
    switch (field) {
      case 'options':
        setRoleValue(value)
        break
      case 'options1':
        setAssigneeValue(value)
        break
      default:
        break
    }
  }
  const [roleValue, setRoleValue] = useState('');
  const [assigneeValue, setAssigneeValue] = useState('')

  const animatedComponents = makeAnimated();
  return (
    <>
      <CContainer>
        <CRow>
          <div className="col-lg-10 offset-lg-1 col-sm-12">
            <CCard className="custom-project-card-1">
              <CCardHeader className="project-header-3"> <h4 className="section-name-projectcreate">Create a new project</h4>
              </CCardHeader>
              <CCardBody>
                <CContainer>
                  <CForm>
                    <CRow>
                      {/**task delivery order */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-5" htmlFor="tdo" aria-labelledby="tdo">
                          Task Delivery Order
                        </CLabel>
                        <Creatable
                          closeMenuOnSelect={true}
                          aria-labelledby="tdo"
                          id="tdo"

                          placeholder="Select from list or create new"
                          isClearable={true}
                          onChange={(value) => handleChange('options', value)}
                          classNamePrefix="custom-forminput-6"
                          value={roleValue}
                          options={options}
                          styles={colourStyles}



                        />
                      </div>
                      {/**Sub task */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="sTask">
                          Subtask
                        </CLabel>
                        <CInput className="custom-forminput-6" name="sTask"></CInput>
                      </div>
                      {/**work package number */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="workPackageNo">
                          Work Package Number
                        </CLabel>
                        <CInput className="custom-forminput-6" id="workPackageNo"></CInput>
                      </div>
                      {/**Task title */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-5">
                          Task Title
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
                      </div>
                      {/**estimated persons */}
                      <div className="col-lg-5 mb-3">
                        <CLabel className="custom-label-5">
                          Estimated Person(s)
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
                      </div>
                      {/**Assignees */}
                      <div className="col-lg-7 mb-3">
                        <CLabel className="custom-label-5" htmlFor="workerBees" aria-labelledby="workerBees">
                          Assignee(s)
                        </CLabel>
                        <Select
                          closeMenuOnSelect={false}
                          aria-labelledby="workerBees"
                          id="workerBees"
                          minHeight="35px"
                          placeholder="Select from list"
                          isClearable={true}
                          isMulti={true}
                          onChange={(value) => handleChange('options1', value)}
                          classNamePrefix="custom-forminput-6"
                          value={assigneeValue}
                          options={options1}
                          styles={colourStyles}



                        />
                      </div>
                      {/**pMs */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          PM(s)
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
                      </div>
                      {/**Planned delivery date */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          Planned Delivery Date
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
                      </div>
                      {/**Planned Value */}
                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Planned Value
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
                      </div>
                      {/**planned hours */}

                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Planned hr(s)
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
                      </div>
                      {/**remaining hours */}
                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Remaining hr(s)
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
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