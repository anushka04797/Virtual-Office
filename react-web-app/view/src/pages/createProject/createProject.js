import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton } from '@coreui/react';
import { React, Component, useState, useEffect } from 'react';
import './createProject.css';
import { ActionMeta, OnChangeValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import Creatable from 'react-select/creatable';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useFormik } from 'formik';
import { API, USER_ID } from '../../Config';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjectsForPMThunk } from '../../store/slices/ProjectsSlice';
import swal from 'sweetalert'
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
  const [selectedTDO,setSelectedTDO]=useState()
  const [selectedSubTask,setSelectedSubTask] = useState()
  const [work_package_number,setWorkPackageNumber] = useState()
  const [assignees,setAssignees]=useState([])
  const profile_details = useSelector(state => state.profile.data)
  const projects = useSelector(state=>state.projects.pm_projects)
  const tdo_list = useSelector(state=>{
    let temp = state.projects.pm_projects
    // temp.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i)
    let tdo_list = temp.filter((value, index, array) => array.findIndex((t) => t.task_delivery_order === value.task_delivery_order) === index); 
    return tdo_list
  })
  const [sub_task_list,setSubTaskList] = useState([])
  function get_sub_tasks(tdo){
    let temp = []
    projects.forEach((project,idx)=>{
      if(project.task_delivery_order == tdo){
        temp.push({value:project.sub_task,label:project.sub_task})
      }
    })
    return temp.filter((value, index, array) => array.findIndex((t) => t.sub_task === value.sub_task) === index)
  }
  const [work_packages,setWorkPackages] = useState([])
  function get_work_packages(tdo){
    let temp = []
    projects.forEach((project,idx)=>{
      if(project.task_delivery_order == tdo){
        temp.push({value:project.work_package_number,label:project.work_package_number})
      }
    })
    return temp.filter((value, index, array) => array.findIndex((t) => t.work_package_number === value.work_package_number) === index)
  }
  const handleChange = (newValue, actionMeta) => {
    if(actionMeta.action == 'select-option'){
      formCreateProject.setFieldValue('task_delivery_order',newValue.task_delivery_order)
      setSelectedTDO(newValue)
      setSubTaskList(get_sub_tasks(newValue.task_delivery_order))
      setWorkPackages(get_work_packages(newValue.task_delivery_order))
      console.group('Value Changed',newValue.task_delivery_order);
      console.log('form values',formCreateProject.values)
    }
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const handleTDOCreate=(inputValue)=>{
    console.group('Option created',inputValue);
  }
  const handleSubTaskChange=(newValue,actionMeta)=>{
    if(actionMeta.action == 'select-option'){
      console.log('handle sub task change')
      setSelectedSubTask(newValue)
      formCreateProject.setFieldValue('sub_task',newValue.value)
    }
  }
  const handleWorkPackageNumberChange =(newValue,actionMeta)=>{
    if(actionMeta.action == 'select-option'){
      console.log('selected work package',newValue)
      setWorkPackageNumber(newValue)
      formCreateProject.setFieldValue('work_package_number',String(newValue.value))
    }
  }
  const handleAssigneeChange =(value,actionMeta)=>{
    if(actionMeta.action=='select-option'){
      console.log('selected assignee',value)
      let temp=[]
      value.forEach((item,idx)=>{
        temp.push(Number(item.value))
      })
      formCreateProject.setFieldValue('assignee',temp)
    }
    console.log(value,actionMeta.action)
  }
  const handleInputChange = (inputValue, actionMeta) => {
    if(actionMeta.action == 'input-change'){
      formCreateProject.setFieldValue('task_delivery_order',inputValue)
      setSubTaskList(get_sub_tasks(inputValue))
      setWorkPackages(get_work_packages(inputValue))
      console.group('Input Changed',inputValue);
    }
    
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const handleSubTaskInputChange=(inputValue,actionMeta)=>{
    if(actionMeta.action == 'input-change'){
      formCreateProject.setFieldValue('sub_task',inputValue)
    }
  }
  const handleWorkPackageInputChange=(inputValue,actionMeta)=>{
    if(actionMeta.action == 'input-change'){
      formCreateProject.setFieldValue('work_package_number',String(inputValue))
    }
  }
  const validate_create_project_form = (values) => {
    const errors = {}
    if (!values.task_delivery_order) errors.task_delivery_order = "Task Delivery Order is required"
    if (!values.sub_task) errors.sub_task = "Sub Task is required"
    return errors
  }
  const create_project = async () => {
    console.log('values', JSON.stringify(formCreateProject.values))
    API.post('project/create/',formCreateProject.values).then((res)=>{
      console.log(res)
      if(res.status == 200 && res.data.success=='True'){
        formCreateProject.resetForm()
        setSelectedSubTask(null)
        setSelectedTDO(null)
        setWorkPackageNumber(null)
        swal('Created!','Successfuly Created','success')
      }
    })
  }
  const formCreateProject = useFormik({
    initialValues: {
      task_delivery_order: "",
      sub_task: "",
      work_package_number: "",
      task_title: "",
      estimated_person: "",
      planned_delivery_date: "",
      assignee: [],
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
    API.get('auth/assignee/list/').then((res)=>{
      console.log('assignees',res.data.data)
      let temp=[]
      Array.from(res.data.data).forEach((item,idx)=>{
        temp.push({value:item.id,label:item.first_name+' '+item.last_name})
      })
      setAssignees(temp)
    })
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
                        <CreatableSelect
                          closeMenuOnSelect={true}
                          aria-labelledby="tdo"
                          id="tdo"
                          placeholder="Select from list or create new"
                          isClearable={true}
                          onChange={handleChange}
                          onInputChange={handleInputChange}
                          onCreateOption={handleTDOCreate}
                          classNamePrefix="custom-forminput-6"
                          value={selectedTDO}
                          options={tdo_list}
                          getOptionLabel= {option=>option.task_delivery_order}
                          getOptionValue = {option=>option.task_delivery_order}
                          styles={colourStyles}
                        />
                      </div>
                      {/**Sub task */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="sTask">
                          Subtask
                        </CLabel>
                        <Creatable
                          closeMenuOnSelect={true}
                          aria-labelledby="sub_task"
                          id="sub_task"
                          placeholder="Select from list or create new"
                          isClearable={true}
                          onChange={handleSubTaskChange}
                          onInputChange={handleSubTaskInputChange}
                          classNamePrefix="custom-forminput-6"
                          value={formCreateProject.values.sub_task}
                          options={sub_task_list}
                          getOptionLabel= {option=>option.label}
                          getOptionValue = {option=>option.value}
                          styles={colourStyles}
                        />
                        {/* <CInput className="custom-forminput-6" name="sTask"></CInput> */}
                      </div>
                      {/**work package number */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="workPackageNo">
                          Work Package Number
                        </CLabel>
                        <Creatable
                          closeMenuOnSelect={true}
                          aria-labelledby="workPackageNo"
                          id="workPackageNo"
                          placeholder="Select from list or create new"
                          isClearable={true}
                          onChange={handleWorkPackageNumberChange}
                          onInputChange={handleWorkPackageInputChange}
                          classNamePrefix="custom-forminput-6"
                          value={work_package_number}
                          options={work_packages}
                          getOptionLabel= {option=>option.label}
                          getOptionValue = {option=>option.value}
                          styles={colourStyles}
                        />
                      </div>
                      {/**Task title */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-5">
                          Task Title
                        </CLabel>
                        <CInput id="task_title" name="task_title" value={formCreateProject.values.task_title} onChange={formCreateProject.handleChange} className="custom-forminput-6"/>
                      </div>
                      {/**estimated persons */}
                      <div className="col-lg-5 mb-3">
                        <CLabel className="custom-label-5">
                          Estimated Person(s)
                        </CLabel>
                        <CInput id="estimated_person" name="estimated_person" value={formCreateProject.values.estimated_person} onChange={formCreateProject.handleChange} className="custom-forminput-6"></CInput>
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
                          onChange={handleAssigneeChange}
                          classNamePrefix="custom-forminput-6"
                          //value={assigneeValue}
                          options={assignees?assignees:[]}
                          // getOptionLabel= {option=>option.first_name+' '+option.last_name}
                          // getOptionValue = {option=>option.id}
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
                        <CInput id="planned_delivery_date" name="planned_delivery_date" value={formCreateProject.values.planned_delivery_date} onChange={formCreateProject.handleChange} className="custom-forminput-6" type="date" />
                      </div>
                      {/**Planned Value */}
                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Planned Value
                        </CLabel>
                        <CInput id="planned_value" name="planned_value" value={formCreateProject.values.planned_value} onChange={formCreateProject.handleChange} className="custom-forminput-6"></CInput>
                      </div>
                      {/**planned hours */}

                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Planned hr(s)
                        </CLabel>
                        <CInput id="planned_hours" name="planned_hours" value={formCreateProject.values.planned_hours} onChange={formCreateProject.handleChange} className="custom-forminput-6"></CInput>
                      </div>
                      {/**remaining hours */}
                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Remaining hr(s)
                        </CLabel>
                        <CInput id="remaining_hours" name="remaining_hours" value={formCreateProject.values.remaining_hours} onChange={formCreateProject.handleChange} className="custom-forminput-6"></CInput>
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