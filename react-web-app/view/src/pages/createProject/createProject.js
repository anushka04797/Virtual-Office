import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton } from '@coreui/react';
import {React,Component} from 'react';
import './createProject.css';
import { ActionMeta, OnChangeValue } from 'react-select';
import Creatable, { CreatableSelect,makeCreatableSelect } from 'react-select/creatable';
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
    control: styles => ({ ...styles, fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)"}),
}
const options = [
  { value: "nypd", label: "New York Police Department" },
  { value: "lapd", label: "Los Angeles Police Department" },
  { value: "miamipd", label: "Miami Police Department" },
  { value: "dmp", label: "Dhaka Metropoliton Police" },

];

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
                        <CLabel className="custom-label-5" htmlFor="tdo">
                          Task Delivery Order
                        </CLabel>
                        <Select
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        name="tdo"
                                        isClearable
                                        options={options}
                                        styles={colourStyles}
                                     

                        />
                      </div>
                      {/**Sub task */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          Subtask
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
                      </div>
                      {/**work package number */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          Work Package Number
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
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
                        <CLabel className="custom-label-5">
                          Assignee(s)
                        </CLabel>
                        <CInput className="custom-forminput-6"></CInput>
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