import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton } from '@coreui/react';
import { React, Component, useState, useEffect } from 'react';
import './createProject.css';
import { ActionMeta, OnChangeValue } from 'react-select';
import Creatable, { CreatableSelect, makeCreatableSelect } from 'react-select/creatable';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useFormik } from 'formik';
import { API, USER_ID } from '../../Config';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjectsForPMThunk } from '../../store/slices/ProjectsSlice';
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
  const dispatch = useDispatch()
  const profile_details = useSelector(state => state.profile.data)
  const tdo_list = useSelector(state=>{
    let temp = state.projects.pm_projects
    // temp.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i)
    let tdo_list = temp.filter((value, index, array) => array.findIndex((t) => t.task_delivery_order === value.task_delivery_order) === index); 
    return tdo_list
  })

  // const handleChange = (field, value) => {
  //   switch (field) {
  //     case 'options':
  //       formCreateProject.setValues({ task_delivery_order: value.label })
  //       break
  //     case 'options1':
  //       setAssigneeValue(value)
  //       break
  //     default:
  //       break
  //   }
  // }
  const handleChange = (newValue, actionMeta) => {
    formCreateProject.setFieldValue('task_delivery_order')
    formCreateProject.setValues({
      task_delivery_order:newValue
    })
    console.log('form values',formCreateProject.values)
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const [assigneeValue, setAssigneeValue] = useState('')
  const validate_create_project_form = (values) => {
    const errors = {}
    if (!values.task_delivery_order) errors.task_delivery_order = "Task Delivery Order is required"
    return errors
  }
  const create_project = async () => {
    console.log('values', formCreateProject.values)
    // API.post('project/create/',formCreateProject.values).then((res)=>{
    //   console.log(res)
    // })
  }
  const formCreateProject = useFormik({
    initialValues: {
      task_delivery_order: "",
      sub_task: "",
      work_package_number: "",
      task_title: "",
      estimated_person: "",
      planned_delivery_date: "",
      assignee: '',
      pm: localStorage.getItem(USER_ID),
      planned_hours: "",
      planned_value: "",
      remaining_hours: ""
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: validate_create_project_form,
    onSubmit: create_project
  })
  useEffect(()=>{
    dispatch(fetchProjectsForPMThunk(localStorage.getItem(USER_ID)))
  },[])
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
                          onChange={handleChange}
                          onInputChange={handleInputChange}
                          classNamePrefix="custom-forminput-6"
                          value={formCreateProject.values.task_delivery_order}
                          options={tdo_list}
                          getOptionLabel= {option=>option.task_delivery_order+' > '+option.sub_task}
                          getOptionValue = {option=>option.task_delivery_order}
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
                          options={[]}
                          styles={colourStyles}



                        />
                      </div>
                      {/**pMs */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          PM(s)
                        </CLabel>
                        <CInput className="custom-forminput-6" value={profile_details.first_name + ' ' + profile_details.last_name} readOnly />
                      </div>
                      {/**Planned delivery date */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5">
                          Planned Delivery Date
                        </CLabel>
                        <CInput className="custom-forminput-6" type="date" />
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
                          <CButton type="button" onClick={formCreateProject.handleSubmit} className="create-btn-prjct create-prjct">Create Project</CButton>
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