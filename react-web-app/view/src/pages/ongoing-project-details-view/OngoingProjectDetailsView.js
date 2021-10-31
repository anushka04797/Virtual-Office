import { CCardBody, CCard, CForm, CButton, CInput, CBadge, CModal, CModalHeader, CModalTitle, CModalBody, CContainer, CRow, CCol, CLabel } from '@coreui/react'
import React, { useEffect, useState } from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import './OngoingProjectDetailsView.css'
import CIcon from '@coreui/icons-react';
import Select from "react-select";
import Creatable from 'react-select/creatable';
import { useHistory, useLocation } from 'react-router';
import { API, BASE_URL, USER_ID } from '../../Config';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux'
import { fetchProjectsThunk } from '../../store/slices/ProjectsSlice';
import {
    useParams
} from "react-router-dom";
import { has_group } from '../../helper';
import { useFormik } from 'formik';
const OngoingDetailsView = () => {
    const { work_package_number } = useParams();
    const dispatch = useDispatch()
    const [status, setStatus] = useState(0);
    const [project, setProject] = useState()
    const [assignees,setAssignees]=useState([])
    const [assigneeValue,setAssigneeValue]=useState([])
    let location = useLocation()
    let history = useHistory()
    const [titleStatus, setTitleStatus] = useState(1);
    const [tdo, setTdo] = useState('')
    const radioHandler = (status, titleStatus) => {
        setStatus(status);
        setTitleStatus(titleStatus);
    };
    const [editModal, setEditModal] = useState(false);
    const validateEditForm=(values)=>{
        const errors={}
        if(!values.sub_task || String(values.sub_task).length<1) errors.task_delivery_order="Task Delivery Order is required"
        return errors
    }
    const edit_project=(values)=>{
        console.log(values)
    }
    const editForm=useFormik({
        initialValues: {
            sub_task: "",
            work_package_number: project?.project.work_package_number,
            task_title: "",
            estimated_person: "",
            planned_delivery_date: "",
            assignee: [],
            pm: project?.project.pm.id,
            planned_hours: "",
            planned_value: "",
            remaining_hours: "",
            status:"",
            date_updated:"",
            sub_task_updated:""
        },
        validateOnBlur:true,
        validateOnChange:true,
        validate:validateEditForm,
        onSubmit: edit_project
    })
    const editInfoForm = (subtask) => {
        console.log(subtask)
        setEditModal(!editModal)
        if(editForm){
            editForm.setValues({
                sub_task: project?.project.sub_task,
                work_package_number: project?.project.work_package_number,
                task_title: subtask?.task_title,
                estimated_person: subtask?Number(subtask.estimated_person):0,
                planned_delivery_date: "",
                assignee: [],
                pm: project.project.pm.id,
                planned_hours: project?.project.planned_hours,
                planned_value: project?.project.planned_value,
                remaining_hours: project?.project.remaining_hours,
                status:"",
                date_updated:"",
                sub_task_updated:""
            })
        }
        
    }
    const colourStyles = {
        // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
        option: (provided, state) => ({ ...provided, fontSize: '14px !important' }),

    }
    
    const initialize = () => {
        API.get('project/details/' + work_package_number + '/').then((res) => {
            if(res.statusText != 'OK'){
                history.push('/dashboard/Projects/ongoing-projects')
            }
            else{
                console.log('project details', res.data)
                setProject(res.data.data)
                setTdo(res.data.data.project.task_delivery_order.title)
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(() => {
        API.get('auth/assignee/list/').then((res)=>{
            console.log('assignees',res.data.data)
            let temp=[]
            Array.from(res.data.data).forEach((item,idx)=>{
              temp.push({value:item.id,label:item.first_name+' '+item.last_name})
            })
            setAssignees(temp)
          })
        if (location.state != undefined) {
            console.log('project', location.state.project)
            setProject(location.state.project)
            setTdo(location.state.project.project.task_delivery_order.title)
        }
        else {
            //history.goBack()
            initialize()
        }
        console.log('project', project)
    }, [])

    const handle_tdo_title_change = (id) => {
        console.log({ title: tdo })
        API.put('project/change-tdo-title/' + id + '/', { title: tdo }).then((res) => {
            console.log('rs', res.data)
            if (res.data.success == 'True') {
                setStatus(0)
                setTitleStatus(0)
                // let temp = project
                // temp.project.task_delivery_order = res.data.data
                // setProject(temp)
                dispatch(fetchProjectsThunk(localStorage.getItem(USER_ID)))
                initialize()
                swal('Updated', 'Task Delivery Order name has been updated', 'success')
            }
        }).catch(err => {
            console.log(err)
            swal('Failed', 'Proccess Failed', 'error')
        })
    }
    const handleKeyPress=(event)=>{
        if(event.key === 'Enter'){
            handle_tdo_title_change(project.project.task_delivery_order.id)
        }
    }
    const handleAssigneeChange = (value,actionMeta) => {
        if(actionMeta.action=='select-option'){
            console.log('selected assignee',value)
            let temp=[]
            value.forEach((item,idx)=>{
              temp.push(Number(item.value))
            })
            editForm.setFieldValue('assignee',temp)
        }
    }
    const delete_assignee = (project_id,assignee_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    API.delete('/project/remove-assignee/' + assignee_id + "/",{data:{project:project_id,assignee:assignee_id}}).then(response => {
                        if (response.data.success == "True") {
                            dispatch(fetchProjectsThunk(localStorage.getItem(USER_ID)))
                            initialize()
                            swal("Poof! Your selected assignee has been removed!", {
                                icon: "success",
                            });

                        }
                        else if (response.data.success == "False") {
                            swal("Poof!" + response.data.message, {
                                icon: "error",
                            });
                        }

                    }).catch(error => {
                        //swal("Failed!",error,"error");
                    })

                }
            });
    }
    const delete_subtask = (work_package_index) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    API.delete('/project/subtask/delete/' + work_package_index + "/").then(response => {
                        if (response.data.success == "True") {
                            dispatch(fetchProjectsThunk(localStorage.getItem(USER_ID)))
                            initialize()
                            swal("Poof! Your selected sub task has been deleted!", {
                                icon: "success",
                            });

                        }
                        else if (response.data.success == "False") {
                            swal("Poof!" + response.data.message, {
                                icon: "error",
                            });
                        }

                    }).catch(error => {
                        //swal("Failed!",error,"error");
                    })

                }
            });
    }
    
    return (
        <>
            {project != undefined && <CContainer>
                {/**Edit ongoing project details starts */}
                <CModal alignment="center" show={editModal} onClose={editInfoForm}>
                    <CModalHeader onClose={() => setEditModal(!editModal)} closeButton>
                        <CModalTitle className="modal-title-projects">
                            <span className="edit-profile-form-header">Edit Project Info</span>
                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CContainer>
                            <CForm>
                                <CRow>
                                    {/**Subtask Name*/}
                                    <CCol lg="12" className="mb-2">
                                        <CLabel htmlFor="sub_task" className="custom-label-5">Sub Task</CLabel>
                                        <CInput id="sub_task" name="sub_task" type="text" value={editForm.values.sub_task} onChange={editForm.handleChange} className="custom-forminput-6"/>
                                    </CCol>
                                    {/**PM Name */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="pmName" className="custom-label-5">PM Name</CLabel>
                                        <CInput value={project.project.pm.first_name+' '+project.project.pm.last_name} id="pmName" name="pmName" type="text" className="custom-forminput-6" readOnly />
                                    </CCol>
                                    {/**Work Package Number */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="work_package_number" className="custom-label-5">Work Package Number</CLabel>
                                        <CInput id="work_package_number" name="work_package_number" type="number" className="custom-forminput-6" min="0" value={editForm.values.work_package_number} onChange={editForm.handleChange}/>
                                    </CCol>
                                    {/**Task Title */}
                                    <CCol lg="12" className="mb-2">
                                        <CLabel htmlFor="task_title" className="custom-label-5">Task Title</CLabel>
                                        <CInput id="task_title" name="task_title" value={editForm.values.task_title} onChange={editForm.handleChange} type="text" className="custom-forminput-6" />
                                    </CCol>
                                    {/**assignees */}
                                    <CCol lg="12" className="mb-2">
                                        <CLabel htmlFor="assignees" className="custom-label-5">Assignee(s)</CLabel>
                                        <Creatable
                                            closeMenuOnSelect={false}
                                            aria-labelledby="assignees"
                                            id="assignees"
                                            placeholder="Select from list or create new"
                                            isClearable
                                            onChange={handleAssigneeChange}
                                            isMulti
                                            classNamePrefix="custom-forminput-6"
                                            options={assignees}
                                            // getOptionLabel= {option=>option.task_delivery_order}
                                            // getOptionValue = {option=>option.task_delivery_order}
                                            styles={colourStyles}
                                        />
                                    </CCol>
                                    {/**Estimated persons */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="estimated_person" className="custom-label-5">Estimated Person(s)</CLabel>
                                        <CInput id="estimated_person" name="estimated_person" value={editForm.values.estimated_person} onChange={editForm.handleChange} type="number" className="custom-forminput-6" min="0" />
                                    </CCol>

                                    {/**planned Value */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="planned_value" className="custom-label-5">Planned Value</CLabel>
                                        <CInput id="planned_value" name="planned_value" type="number" value={editForm.values.planned_value} onChange={editForm.handleChange} className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Planned hours */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="planned_hours" className="custom-label-5">Planned Hours</CLabel>
                                        <CInput id="planned_hours" name="planned_hours" type="number" value={editForm.values.planned_hours} onChange={editForm.handleChange} className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Remaining hours */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="remaining_hours" className="custom-label-5">Remaining Hours</CLabel>
                                        <CInput id="remaining_hours" name="remaining_hours" type="number" value={editForm.values.remaining_hours} onChange={editForm.handleChange} className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Action buttons */}
                                    <CCol md="12" className="mt-2">
                                        <div className="project-form-button-holders mt-3">
                                            <CButton type="button" className="profile-form-btn update-profile" onClick={editForm.handleSubmit}>
                                                Update Info
                                            </CButton>
                                            <CButton className="profile-form-btn cancel-update" onClick={() => editInfoForm(!editModal)} type="reset">
                                                Cancel
                                            </CButton>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CContainer>
                    </CModalBody>
                </CModal>
                {/**Edit ongoing project details ends */}
                <h3 className="dash-header-1">Project Details</h3>
                {status === 0 ?
                    (
                        <div className="card-header-portion-ongoing">
                            <h4 className="ongoing-card-header-1">
                                <IconButton aria-label="favourite" disabled size="medium" color="primary">
                                    <GradeIcon fontSize="inherit" className="fav-button" />
                                </IconButton>
                                {project != undefined ? project.project.task_delivery_order.title : ''}
                            </h4>
                            <CButton className="edit-ongoing-project-title" variant='ghost' onClick={(e) => radioHandler(1, 0)}><CIcon name="cil-pencil" className="mr-1 pen-icon" /></CButton>
                        </div>) : null}
                {/**header portion */}



                {/**Show the form for edit when clicked */}
                {status === 1 ? (
                    <div className="card-header-portion-ongoing">
                        <CForm>
                            <CInput onKeyPress={handleKeyPress} value={tdo} onChange={(event) => setTdo(event.target.value)} className="custom-forminput-6" type="text" />
                        </CForm>
                        <div>
                            <CButton disabled={tdo.length > 0 ? false : true} type="button" variant="ghost" className="confirm-name" onClick={(e) => handle_tdo_title_change(project.project.task_delivery_order.id)}><CIcon name="cil-check-circle" className="mr-1 tick" size="xl" /></CButton>
                            <CButton type="button" variant="ghost" className="cancel-name" onClick={(e) => radioHandler(0, 1)}><CIcon name="cil-x-circle" className="mr-1 cross" size="xl" /></CButton>
                        </div>

                    </div>) : null}

                {/**card show */}
                <hr className="header-underline1" />
                {/**Details card */}
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-sm-12 col-xs-12 mt-1 mb-2">
                        {Array.from(project.subtasks).map((subtask, idx) => (
                            <CCard key={idx} className="card-ongoing-project">
                                <CCardBody className="details-project-body">
                                    {/*task percentage portion */}
                                    <div className="ongoing-initial-info row">
                                        <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Sub Task Name</h6>
                                            <h6 className="project-point-details">{project.project.sub_task}</h6></div>
                                        <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">PM Name</h6>
                                            <h6 className="project-point-details">{project.project.pm.first_name + ' ' + project.project.pm.last_name}</h6></div>
                                        <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Work Package Number</h6>
                                            <h6 className="project-point-details">{project.project.work_package_number}</h6>
                                        </div>
                                        <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Task Title</h6>
                                            <h6 className="project-point-details">{subtask.task_title}</h6>
                                        </div>
                                        <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Estimated Person(s)</h6>
                                            <h6 className="project-point-details">{subtask.estimated_person}</h6>
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
                                    </div>

                                    {/**assignees */}
                                    <div className="col-md-12 mt-4 mb-2">
                                        <h5 className="projectName mb-3">Asssignee(s)-({Array.from(subtask.assignees).length})</h5>
                                        <div className="file-show-ongoing-details row">
                                            {project != undefined && Array.from(subtask.assignees).map((item, idx) => (
                                                <div key={idx} className="col-md-6 col-sm-6 col-lg-3">
                                                    <div className="file-attached-ongoing rounded-pill">
                                                        {has_group('pm') && <CButton type="button" onClick={() => delete_assignee(subtask.id,item.assignee.id)} className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>}{item.assignee.first_name + ' ' + item.assignee.last_name}
                                                    </div>
                                                </div>
                                            ))}
                                            {/* *extra static buttons,delete code after dynamic implementation */}
                                        </div>
                                    </div>
                                    {/**ACTION BUTTONS !!!!!!!!!! */}
                                    <div className="col-md-12 mt-2 mb-2">
                                        <div className="project-actions">
                                            <CButton className="edit-project-ongoing-task" onClick={() => editInfoForm(subtask)} ><CIcon name="cil-pencil" className="mr-1" /> Edit </CButton>
                                            <CButton type="button" onClick={() => delete_subtask(project.project.work_package_index)} className="delete-project-2"><CIcon name="cil-trash" className="mr-1" /> Delete</CButton>
                                        </div>
                                    </div>
                                </CCardBody>
                            </CCard>))}
                    </div>
                </div>
            </CContainer>}
        </>
    )
}
export default OngoingDetailsView