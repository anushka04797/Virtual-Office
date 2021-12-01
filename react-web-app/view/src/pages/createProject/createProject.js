import { CContainer, CRow, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton } from '@coreui/react';
import { React, useState, useEffect } from 'react';
import './createProject.css';
import CreatableSelect from 'react-select/creatable';
import Select from "react-select";
import { useFormik } from 'formik';
import { API, USER_ID } from '../../Config';
import { useDispatch, useSelector } from 'react-redux'
import { push_item } from '../../store/slices/TdoSlice';
import swal from 'sweetalert'
import { fetchTdosThunk } from '../../store/slices/TdoSlice';
import Datetime from 'react-datetime'
import moment from 'moment'
import { fetchProjectsForPMThunk, fetchProjectsThunk } from '../../store/slices/ProjectsSlice';
import LinearProgress from '@mui/material/LinearProgress';
const CreateNewProject = () => {
  const colourStyles = {
    // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
    option: (provided, state) => ({ ...provided, fontSize: '14px !important' }),

  }
  const dispatch = useDispatch()
  const [selectedTDO, setSelectedTDO] = useState()
  const [selectedSubTask, setSelectedSubTask] = useState()
  const [work_package_number, setWorkPackageNumber] = useState()
  const [assignees, setAssignees] = useState([])
  const [selectedAssignees,setSelectedAssignees]=useState([])
  const profile_details = useSelector(state => state.profile.data)
  const projects = useSelector(state => state.projects.pm_projects)
  const [work_package_numbers,setWorkPackageNumbers]=useState([])
  const [existing_sub_tasks,setExistingSubTasks]=useState([])
  //tdo list states and functions
  const tdo_list = useSelector(state => state.projects.tdo_list)
  const new_tdo_list = useSelector(state => state.tdo.data)
  const handleTDOChange = (newValue, actionMeta) => {
    console.log(`action: ${actionMeta.action}`);
    if (actionMeta.action == 'select-option') {
      formCreateProject.setFieldValue('task_delivery_order', newValue.value)
      setSelectedTDO(newValue)
      setSubTaskList(get_sub_tasks(newValue.value))
      setWorkPackages(get_work_packages(newValue.value))
      console.group('Value Changed', newValue.value);
      console.log('form values', formCreateProject.values)
      console.groupEnd();
    }
    else if (actionMeta.action == 'clear') {
      setSelectedTDO(null)
      setSelectedSubTask(null)
      setWorkPackageNumber(null)
      formCreateProject.setFieldValue('task_delivery_order', '')
      formCreateProject.setFieldValue('sub_task', '')
      formCreateProject.setFieldValue('work_package_number', '')
    }
  };
  const handleTDOInputChange = (inputValue, actionMeta) => {
    console.log(`action: ${actionMeta.action}`);
    // if(inputValue.length>0){
    //   formCreateProject.setFieldValue('task_delivery_order',inputValue)
    //   dispatch(push_item({value:inputValue,label:inputValue}))
    //   setSubTaskList(get_sub_tasks(inputValue))
    //   setWorkPackages(get_work_packages(inputValue))
    //   console.group('setting value',inputValue)
    // }
    console.groupEnd();
  };
  const handleTDOCreate = (inputValue) => {
    formCreateProject.setFieldValue('task_delivery_order', inputValue)
    dispatch(push_item({ value: inputValue, label: inputValue }))
    setSubTaskList(get_sub_tasks(inputValue))
    setWorkPackages(get_work_packages(inputValue))
    setSelectedTDO({ value: inputValue, label: inputValue })
    console.group('setting value', inputValue)
  }

  //sub task list states and functions
  const [sub_task_list, setSubTaskList] = useState([])
  function get_sub_tasks(tdo) {
    let temp = []
    projects.forEach((project, idx) => {
      project.subtasks.forEach((subtask, idx) => {
        if (subtask.task_delivery_order.title == tdo) {
          temp.push({ value: subtask.sub_task, label: subtask.sub_task, work_package_number: subtask.work_package_number })
        }
      })
    })
    temp=temp.filter((value, index, array) => array.findIndex((t) => t.sub_task === value.sub_task) === index)
    console.log('subtasks', temp)
    return temp;
  }
  const valid_date=(current)=>{
    let yesterday= moment().subtract( 1, 'day' )
    return current.isAfter( yesterday );
}
  const handleSubTaskChange = (newValue, actionMeta) => {
    if (actionMeta.action == 'select-option') {
      console.log('sub task', newValue)
      setSelectedSubTask(newValue)
      formCreateProject.setValues({
        task_delivery_order: formCreateProject.values.task_delivery_order,
        sub_task: newValue.value,
        work_package_number: newValue.work_package_number,
        task_title: formCreateProject.values.task_title,
        estimated_person: formCreateProject.values.estimated_person,
        planned_delivery_date: formCreateProject.values.planned_delivery_date,
        assignee: formCreateProject.values.assignees,
        pm: sessionStorage.getItem(USER_ID),
        planned_hours: formCreateProject.values.planned_hours,
        planned_value: formCreateProject.values.planned_value,
        remaining_hours: formCreateProject.values.remaining_hours
      })
      setWorkPackageNumber({ value: newValue.work_package_number, label: newValue.work_package_number })
      console.log('values', formCreateProject.values)
    }
    else if (actionMeta.action == 'clear') {
      setSelectedSubTask(null)
      setWorkPackageNumber(null)
      formCreateProject.setFieldValue('sub_task', '')
      formCreateProject.setFieldValue('work_package_number', '')
    }
  }
  const handleSubTaskInputChange = (inputValue, actionMeta) => {
    if(actionMeta.action=='set-value'){
      // if(existing_sub_tasks.includes(inputValue)){
      //   formCreateProject.setFieldError('sub_task','This sub task name already exists')
      // }
    }
  }
  const handleSubTaskCreate = (inputValue) => {
    formCreateProject.setFieldValue('sub_task', inputValue)
    setSubTaskList([...sub_task_list, { value: inputValue, label: inputValue }])
    setWorkPackages(get_work_packages(inputValue))
    setSelectedSubTask({ value: inputValue, label: inputValue })
    console.group('setting value', inputValue)
  }
  const [work_packages, setWorkPackages] = useState([])
  function get_work_packages(tdo) {
    let temp = []
    projects.forEach((project, idx) => {
      project.subtasks.forEach((subtask, idx) => {
        if (subtask.task_delivery_order.title == tdo) {
          temp.push({ value: subtask.work_package_number, label: subtask.work_package_number })
        }
      })
    })
    return temp.filter((value, index, array) => array.findIndex((t) => t.work_package_number === value.work_package_number) === index)
  }
  function is_form_submitting(){
    if(formCreateProject.isSubmitting && !formCreateProject.isValidating){
      return true
    }
    return false
  }
  const handleWorkPackageCreate = (value) => {
    setWorkPackageNumber({ value: value, label: value })
    setWorkPackages([...work_packages, { value: value, label: value }])
    formCreateProject.setFieldValue('work_package_number', String(value))
  }
  const handleWorkPackageNumberChange = (newValue, actionMeta) => {
    if (actionMeta.action == 'select-option') {
      console.log('selected work package', newValue)
      setWorkPackageNumber(newValue)
      formCreateProject.setFieldValue('work_package_number', String(newValue.value))
    }
    else if (actionMeta.action == 'clear') {
      setSelectedSubTask(null)
      setWorkPackageNumber(null)
      formCreateProject.setFieldValue('work_package_number', '')
    }
  }
  
  const handleAssigneeChange = (value, actionMeta) => {
    setSelectedAssignees(value)
    if (actionMeta.action == 'select-option') {
      console.log('selected assignee', value)
      let temp = []
      value.forEach((item, idx) => {
        temp.push(Number(item.value))
      })
      formCreateProject.setFieldValue('assignee', temp)
    }
    console.log(value, actionMeta.action)
  }
  const handleWorkPackageInputChange = (inputValue, actionMeta) => {
    if (actionMeta.action == 'input-change') {
      formCreateProject.setFieldValue('work_package_number', String(inputValue))
    }
  }
  function isDateBeforeToday(date) {
    return new Date(date) < new Date(new Date().toDateString());
  }
  const is_wp_subtask_valid=(sub_task,wp)=>{
    API.get('project/check-subtask-work-package-number-is-valid/'+sub_task+'/'+wp+'/').then((res)=>{
      console.log(res.data)
      if(existing_sub_tasks.includes(sub_task) && work_package_numbers.includes(wp)){
        return {wp:true,sub_task:true}
      }
      else if( res.data.wp_found == true && res.data.sub_task_found == false){
        return {wp:false,sub_task:true}
      }
      else if(work_package_numbers.includes(wp) && res.data.sub_task_found == true){
        return {wp:true,sub_task:false}
      }
    })
    
  }
  const validate_create_project_form = (values) => {
    console.log('validating values ', values)
    console.log('WP list ', is_wp_subtask_valid(values.sub_task,values.work_package_number))
    const errors = {}
    if (!values.task_delivery_order) errors.task_delivery_order = "Task Delivery Order is required"
    if (!values.sub_task) errors.sub_task = "Sub Task is required"
    if (!values.work_package_number) errors.work_package_number = "Work Package Number is required"
    // if (values.sub_task && values.work_package_number && is_wp_subtask_valid(values.sub_task,values.work_package_number)) errors.work_package_number="This work package number already exists"
    if (!values.task_title) errors.task_title = "Task title is required"
    if (!values.planned_delivery_date) errors.planned_delivery_date = "Invalid planned delivery date"
    // if (work_package_numbers.includes(values.work_package_number)) errors.work_package_number = "This work package number already exists"
    // if (existing_sub_tasks.includes(values.sub_task)) errors.sub_task = "This Sub task name already exists"
    if (!values.estimated_person || parseFloat(values.estimated_person) < 0) errors.estimated_person = "Invalid estimated person number"
    if (isDateBeforeToday(values.planned_delivery_date)) errors.planned_delivery_date = "Invalid planned delivery date"
    // console.log('validating errors ', errors)
    return errors
  }
  const reset_form = () => {
    formCreateProject.resetForm()
    setSelectedSubTask(null)
    setSelectedTDO(null)
    setWorkPackageNumber(null)
    setAssignees([])
  }
  const create_project = (values) => {
    console.log('values', JSON.stringify(formCreateProject.values))
      API.post('project/create/', formCreateProject.values).then((res) => {
        console.log(res)
        if (res.status == 200 && res.data.success == 'True') {
          reset_form()
          dispatch(fetchProjectsForPMThunk(sessionStorage.getItem(USER_ID)))
          dispatch(fetchProjectsThunk(sessionStorage.getItem(USER_ID)))
          setSelectedAssignees([])
          swal('Created!', 'Successfuly Created', 'success')
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
      pm: sessionStorage.getItem(USER_ID),
      planned_hours: "",
      planned_value: "",
      remaining_hours: ""
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: validate_create_project_form,
    onSubmit: create_project
  })
  
  useEffect(() => {
    dispatch(fetchTdosThunk())
    API.get('auth/assignee/list/').then((res) => {
      console.log('assignees', res.data.data)
      let temp = []
      Array.from(res.data.data).forEach((item, idx) => {
        temp.push({ value: item.id, label: item.first_name + ' ' + item.last_name, data: item })
      })
      setAssignees(temp)
    })
    API.get('project/work-package-numbers/').then((res) => {
      console.log('WP list', res.data.wp)
      let temp = []
      Array.from(res.data.wp).forEach((item, idx) => {
        temp.push(item)
      })
      setWorkPackageNumbers(temp)
      temp=[]
      Array.from(res.data.sub_tasks).forEach((item, idx) => {
        temp.push(item)
      })
      setExistingSubTasks(temp)
    })
  }, [])
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
                          Task Delivery Order *
                        </CLabel>
                        <CreatableSelect
                          closeMenuOnSelect={true}
                          aria-labelledby="tdo"
                          id="tdo"
                          placeholder="Select from list or create new"
                          isClearable={true}
                          onChange={handleTDOChange}
                          onInputChange={handleTDOInputChange}
                          onCreateOption={handleTDOCreate}
                          classNamePrefix="custom-forminput-6"
                          value={selectedTDO}
                          options={new_tdo_list}
                          // getOptionLabel= {option=>option.task_delivery_order}
                          // getOptionValue = {option=>option.task_delivery_order}
                          styles={colourStyles}
                        />
                        {formCreateProject.touched.task_delivery_order && formCreateProject.errors.task_delivery_order && <small style={{ color: 'red' }}>{formCreateProject.errors.task_delivery_order}</small>}
                      </div>
                      {/**Sub task */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="sTask">
                          Subtask *
                        </CLabel>
                        <CreatableSelect
                          closeMenuOnSelect={true}
                          aria-labelledby="sub_task"
                          id="sub_task"
                          placeholder="Select from list or create new"
                          isClearable={true}
                          onChange={handleSubTaskChange}
                          onInputChange={handleSubTaskInputChange}
                          onCreateOption={handleSubTaskCreate}
                          classNamePrefix="custom-forminput-6"
                          value={selectedSubTask}
                          options={sub_task_list}
                          getOptionLabel={option => option.label}
                          getOptionValue={option => option.value}
                          styles={colourStyles}
                        />
                        {formCreateProject.touched.sub_task && formCreateProject.errors.sub_task && <small style={{ color: 'red' }}>{formCreateProject.errors.sub_task}</small>}
                        {/* <CInput className="custom-forminput-6" name="sTask"></CInput> */}
                      </div>
                      {/**work package number */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-5" htmlFor="workPackageNo">
                          Work Package Number *
                        </CLabel>
                        <CreatableSelect
                          closeMenuOnSelect={true}
                          aria-labelledby="workPackageNo"
                          id="workPackageNo"
                          placeholder="Select from list or create new"
                          isClearable={true}
                          onChange={handleWorkPackageNumberChange}
                          onInputChange={handleWorkPackageInputChange}
                          onCreateOption={handleWorkPackageCreate}
                          classNamePrefix="custom-forminput-6"
                          value={work_package_number}
                          options={work_packages}
                          getOptionLabel={option => option.label}
                          getOptionValue={option => option.value}
                          styles={colourStyles}
                        />
                        {formCreateProject.touched.work_package_number && formCreateProject.errors.work_package_number && <small style={{ color: 'red' }}>{formCreateProject.errors.work_package_number}</small>}
                        {/* {formCreateProject.touched.work_package_number_exists && formCreateProject.errors.work_package_number_exists && <small style={{ color: 'red' }}>{formCreateProject.errors.work_package_number_exists}</small>} */}
                      </div>
                      {/**Task title */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-5">
                          Task Title
                        </CLabel>
                        <CInput id="task_title" name="task_title" value={formCreateProject.values.task_title} onChange={formCreateProject.handleChange} className="custom-forminput-6" />
                        {formCreateProject.touched.task_title && formCreateProject.errors.task_title && <small style={{ color: 'red' }}>{formCreateProject.errors.task_title}</small>}
                      </div>
                      {/**estimated persons */}
                      <div className="col-lg-5 mb-3">
                        <CLabel className="custom-label-5">
                          Estimated Person(s)
                        </CLabel>
                        <CInput id="estimated_person" type="number" name="estimated_person" value={formCreateProject.values.estimated_person} onChange={formCreateProject.handleChange} className="custom-forminput-6"></CInput>
                        {formCreateProject.touched.estimated_person && formCreateProject.errors.estimated_person && <small style={{ color: 'red' }}>{formCreateProject.errors.estimated_person}</small>}
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
                          value={selectedAssignees}
                          options={assignees ? assignees : []}
                          // getOptionLabel= {option=>option.first_name+' '+option.last_name}
                          // getOptionValue = {option=>option.id}
                          styles={colourStyles}
                        />
                        {formCreateProject.touched.assignee && formCreateProject.errors.assignee && <small style={{ color: 'red' }}>{formCreateProject.errors.assignee}</small>}
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
                        {/* <Datetime
                          // className = "custom-forminput-6"
                          isValidDate={valid_date}
                          value={formCreateProject.values.planned_delivery_date}
                          input={false}
                          updateOnView="time"
                          dateFormat="YYYY-MM-DD"
                          timeFormat={false}
                          // closeOnSelect={true}
                          closeOnTab={true}
                          // onChange={(e)=>{console.log(e.format())}}
                          onChange={(e) => { formCreateProject.setFieldValue('planned_delivery_date', e.format()) }}
                        /> */}
                        <CInput id="planned_delivery_date" name="planned_delivery_date" value={formCreateProject.values.planned_delivery_date} onChange={formCreateProject.handleChange} className="custom-forminput-6" type="date" />
                        {formCreateProject.touched.planned_delivery_date && formCreateProject.errors.planned_delivery_date && <small style={{ color: 'red' }}>{formCreateProject.errors.planned_delivery_date}</small>}
                      </div>
                      {/**Planned Value */}
                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Planned Value
                        </CLabel>
                        <CInput id="planned_value" name="planned_value" value={formCreateProject.values.planned_value} onChange={formCreateProject.handleChange} className="custom-forminput-6"></CInput>
                        {formCreateProject.touched.planned_value && formCreateProject.errors.planned_value && <small style={{ color: 'red' }}>{formCreateProject.errors.planned_value}</small>}
                      </div>
                      {/**planned hours */}

                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Planned hr(s)
                        </CLabel>
                        <CInput id="planned_hours" name="planned_hours" value={formCreateProject.values.planned_hours} onChange={(event) => { formCreateProject.setFieldValue('planned_hours', event.target.value); formCreateProject.setFieldValue('remaining_hours', event.target.value) }} className="custom-forminput-6"></CInput>
                        {formCreateProject.touched.planned_hours && formCreateProject.errors.planned_hours && <small style={{ color: 'red' }}>{formCreateProject.errors.planned_hours}</small>}
                      </div>
                      {/**remaining hours */}
                      <div className="col-lg-4 mb-3">
                        <CLabel className="custom-label-5">
                          Remaining hr(s)
                        </CLabel>
                        <CInput id="remaining_hours" name="remaining_hours" value={formCreateProject.values.planned_hours} className="custom-forminput-6" readOnly />
                      </div>
                      {/**submit buttons */}
                      <div className="col-md-12">{is_form_submitting() == true?<LinearProgress/>:
                        <div className="project-form-button-holders mt-3">
                          <CButton type="button" onClick={formCreateProject.handleSubmit} className="create-btn-prjct create-prjct">Create Project</CButton>
                          <CButton type="button" onClick={reset_form} className="create-btn-prjct cancel-prjct">Cancel</CButton>
                        </div>}
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