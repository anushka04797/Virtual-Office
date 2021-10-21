import {
  CCard,
  CContainer,
  CRow,
  CCardHeader,
  CForm,
  CLabel,
  CInput,
  CButton,
  CAlert
} from "@coreui/react";
import { BASE_URL } from '../../Config';
import React, { useState } from "react";
import Select from "react-select";
import "../createProject/createProject.css";
import { fetchProjectsThunk, fetchProjectsAssigneeThunk, fetchWbsThunk } from '../../store/slices/ProjectsSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { API, USER_ID } from '../../Config';
import swal from 'sweetalert'
const ProjectEVMS = () => {
  const colourStyles = {
    // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
    option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
  };
  const projects = useSelector(state=>state.projects.pm_projects)
 
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchProjectsThunk(5))
}, [])
  const assigneeList = useSelector(state=>state.projects.assignee)
const projectDetails = useSelector(state=>state.projects.project)
  const handleChange = (field, value) => {
    switch (field) {
      case "projects":
        setProjectValue(value);
        console.log('projectValue',projectValue);
        break;
      // case "workPackage":
      //   setPackageValue(value);
      //   break;
      default:
        break;
    }
  };
  const [projectValue, setProjectValue] = useState();

  const [selectedProjectEndDate, setSelectedProjectEndDate] = useState()
const getAssigneeList = (option)=> {
  dispatch(fetchProjectsAssigneeThunk(option.work_package_number))
  console.log("assigneeList", assigneeList)
  setProjectValue(option)
  setSelectedProjectEndDate(option.planned_delivery_date)
}
  const create_evms = async()=>{
    console.log('values',JSON.stringify(formCreateEVMS.values))
    API.post('evms/create/',formCreateEVMS.values).then((res)=>{
      console.log(res)
      if(res.status == 200 && res.data.success =='True'){
        reset_form()
        swal('Created!','Successfuly Created','success')
      }
    })
  }
  const reset_form=()=>{
    formCreateEVMS.resetForm()
   
  
  }
const formCreateEVMS= useFormik({
  initialValues:{
    project:"",
    work_package_number:"",
    earned_value:"",
    actual_cost:"",
    estimate_at_completion:"",
    estimate_to_completion:"",
    planned_value:"",
    planned_hours:"",
    variance_at_completion:"",
    budget_at_completion:""

  },
  
  validateOnChange: true,
    validateOnBlur: true,
    onSubmit: create_evms
})

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
                    <div className="col-lg-12 mb-3">
                      <CLabel className="custom-label-5" htmlFor="project">
                        Project
                      </CLabel>
                      <Select
                        closeMenuOnSelect={true}
                        aria-labelledby="project"
                        id="project"
                        getOptionLabel={option => option.task_delivery_order.title + " / " + option.sub_task}
                        getOptionValue={option => option.id}
                        placeholder="Select a project"
                        isClearable={false}
                        isMulti={false}
                        // onChange={(value) => handleChange("projects", value)}
                        onChange={getAssigneeList}
                        classNamePrefix="custom-forminput-6"
                      
                        options={projects}
                        styles={colourStyles}
                      />
                      {/**View related TDO details */}
                      {projectValue != null?
                      (<div className="mt-1">
                        <CAlert color="primary">
                          <small>
                            <b>Work Package Number:</b> {projectValue.work_package_number}
                            <br />
                            <b>Estimated Persons: </b> {projectValue.estimated_person}
                            <br />
                            <b>Planned Delivery Date: </b> {projectValue.planned_delivery_date}
                            <br/>
                            {/* <b>Assignee(s):</b>     {assigneeList.length>0 && Array.from(assigneeList).map((assignee,idx)=>(
                              <span>{assignee}</span>
                            ))} */}
                          
                           
                          </small>
                        </CAlert>
                      </div>
                      ):
                      null}
                    </div>
                    {/**Work package */}
                    {/* <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="wPackage">
                        Work Package
                      </CLabel>
                      <CInput name="wPackage" id="wPackage" type="number" readOnly />
                    </div> */}
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
                      <CInput className="custom-forminput-6" name="actualCost" id="actualCost" />
                    </div>
                    {/**estimate at completion */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="estAtCompltn">
                        Estimate at completion
                      </CLabel>
                      <CInput className="custom-forminput-6" name="estAtCompltn" id="estAtCompltn" />
                    </div>
                    {/**estimate to completion */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="estToCompltn">
                        Estimate to completion
                      </CLabel>
                      <CInput className="custom-forminput-6" name="estToCompltn" id="estToCompltn" />
                    </div>
                    {/**Planned Value */}
                   
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="plannedVal">
                       Planned Value
                      </CLabel>
                      <CInput className="custom-forminput-6" name="plannedVal" id="plannedVal" />
                    </div>
                    {/**Planned hours */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="plannedHrs">
                       Planned Hours
                      </CLabel>
                      <CInput className="custom-forminput-6" name="plannedHrs" id="plannedHrs" />
                    </div>
                     {/**variance at completion */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="varAtCompltn">
                        Variance at completion
                      </CLabel>
                      <CInput className="custom-forminput-6" name="varAtCompltn" id="varAtCompltn" />

                    </div>
                    {/**budget at completion */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="budgetAtCompletion">
                        Budget at completion
                      </CLabel>
                      <CInput className="custom-forminput-6" name="budgetAtCompletion" id="budgetAtCompletion" />
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
