import {
  CCard,
  CContainer,
  CRow,
  CCardHeader,
  CForm,
  CLabel,
  CInput,
  CButton
} from "@coreui/react";
import React,{useState} from "react";
import Select from "react-select";
import "../createProject/createProject.css"
const ProjectEVMS = () => {
  const colourStyles = {
    // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
    option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
  };
  const projects = [
    { value: "1", label: "Virtual Office" },
    { value: "2", label: "Virtual Doctor" },
    { value: "3", label: "Jahaji App" },
    { value: "4", label: "SmartHome" },
  ];
  const workPackage = [
    { value: "1", label: "100.4" },
    { value: "2", label: "1000.4" },
    { value: "3", label: "1000.5" },
    { value: "4", label: "1000.6" },
  ];
  const handleChange = (field, value) => {
    switch (field) {
      case "projects":
        setProjectValue(value);
        break;
      case "workPackage":
        setPackageValue(value);
        break;
      default:
        break;
    }
  };
  const [projectValue, setProjectValue] = useState("");
  const [packageValue, setPackageValue] = useState("");

  return (
    <>
      <CContainer>
        <CRow>
          <div className="col-lg-10 offset-lg-1 col-md-12">
            <CCard className="custom-project-card-1">
              <CCardHeader className="project-header-3">
                {" "}
                <h4 className="section-name-projectcreate">Create EVMS</h4>
              </CCardHeader>
              <CContainer>
                <CForm className="mt-3">
                  <CRow>
                    {/**Project Name */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="project">
                        Project
                      </CLabel>
                      <Select
                        closeMenuOnSelect={true}
                        aria-labelledby="project"
                        id="project"
                        placeholder="Select a project"
                        isClearable={false}
                        isMulti={false}
                        onChange={(value) => handleChange("projects", value)}
                        classNamePrefix="custom-forminput-6"
                        value={projectValue}
                        options={projects}
                        styles={colourStyles}
                      />
                    </div>
                    {/**Work package */}
                    <div className="col-lg-6 mb-3">
                    <CLabel className="custom-label-5" htmlFor="wPackage">
                        Work Package
                      </CLabel>  
                    <CInput name="wPackage" id="wPackage" type="number" readOnly/>
                    </div>
                    {/**Earned Value */}
                    <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="earnedValue">
                            Earned Value
                        </CLabel>
                        <CInput className="custom-forminput-6" name="earnedValue" id="earnedValue">

                        </CInput>
                        
                        </div> 
                        {/**Actual Cost */}
                        <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="actualCost">
                            Actual Cost
                        </CLabel>
                        <CInput className="custom-forminput-6" name="actualCost" id="actualCost"/>
                        </div>
                        {/**estimate at completion */}
                        <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="estAtCompltn">
                           Estimate at completion
                        </CLabel>
                        <CInput className="custom-forminput-6" name="estAtCompltn" id="estAtCompltn"/>
                        </div>
                        {/**estimate to completion */}
                        <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="estToCompltn">
                           Estimate to completion
                        </CLabel>
                        <CInput className="custom-forminput-6" name="estToCompltn" id="estToCompltn"/>
                        </div>
                        {/**variance at completion */}
                        <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="varAtCompltn">
                          Variance at completion
                        </CLabel>
                        <CInput className="custom-forminput-6" name="varAtCompltn" id="varAtCompltn"/>

                        </div>
                        {/**budget at completion */}
                        <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="budgetAtCompletion">
                         Budget at completion
                        </CLabel>
                        <CInput className="custom-forminput-6" name="budgetAtCompletion" id="budgetAtCompletion"/>
                        </div>
                         {/**submit buttons */}
                      <div className="col-md-12">
                        <div className="project-form-button-holders mt-3">
                          <CButton className="create-btn-prjct create-prjct">Create EVMS</CButton>
                          <CButton className="create-btn-prjct cancel-prjct">Cancel</CButton>
                        </div>
                      </div>

                  </CRow>
                </CForm>
              </CContainer>
            </CCard>
          </div>
        </CRow>
      </CContainer>
    </>
  );
};
export default ProjectEVMS;
