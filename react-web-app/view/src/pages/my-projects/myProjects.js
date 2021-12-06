import React, { useState, useEffect } from 'react'
import { fetchProjectsForPMThunk, fetchProjectsThunk } from '../../store/slices/ProjectsSlice';
import '../ongoing-project-details/ongoingProjectDetails.css';
import { CCol, CAlert, CCard, CCardBody, CButton, CModal, CModalHeader, CModalBody, CContainer, CForm, CRow, CLabel, CInput, CModalTitle } from '@coreui/react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import { CIcon } from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, USER_ID } from '../../Config';
import { API } from '../../Config';
import swal from 'sweetalert'
import Select from "react-select";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import LinearWithValueLabel from '../../components/linear-progress-bar/linear-progress-bar';
import './myProjects.css'
const MyProjects = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [pmStatus, setPmStatus] = useState(1);
    const [status, setStatus] = useState({});
    const [managers, setManagers] = useState([])
    const [currentPM, setPM] = useState()

    const handlePMChange = (option, actionMeta) => {
        setPM(option)
    }
    const changePM = (wp) => {
        console.log('wp', wp)
        API.put('project/change-project-manager/', { wp: wp, pm: currentPM.value }).then((res) => {
            console.log(res)
            if (res.status == 200 && res.data.success == 'True') {
                setStatus({ project: null })
                setPM(null)
                dispatch(fetchProjectsForPMThunk(sessionStorage.getItem(USER_ID)))
                swal('Updated!', 'Project manager changed successfully', 'success')
            }
        })
    }
    //const projects=useSelector(state=> state.projects.data.filter((item)=> project.project.status === 0))
    const projects = useSelector(state => {
        let temp = []
        state.projects.pm_projects.forEach((item, idx) => {
            if (item.project.status == 0) {
                temp.push(item)
                // temp_statues.push(false)
            }
        })
        // setStatuses(temp_statues)
        console.log('temp', temp)
        return temp
    })
    const [show_sub_task_details, setShowSubTaskDetails] = useState(false)
    const [selectedSubTask, setSelectedSubTask] = useState()
    useEffect(() => {
        console.log('projects', projects)
        dispatch(fetchProjectsForPMThunk(sessionStorage.getItem(USER_ID)))
        API.get('project/managers/').then((res) => {
            console.log('res', res.data.data)
            let temp = []
            Array.from(res.data.data).forEach((manager, idx) => {
                temp.push({ value: manager.id, label: manager.first_name + ' ' + manager.last_name, data: manager })
                if (manager.id == sessionStorage.getItem(USER_ID)) {
                    setPM({ value: manager.id, label: manager.first_name + ' ' + manager.last_name, data: manager })
                }
            })
            setManagers(temp)
        })
    }, [])
    const mark_project_completed = (id) => {
        swal({
            title: "Are you sure?",
            text: "You can change project status later!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willUpdate) => {
                if (willUpdate) {
                    API.put('/project/change-status/' + id + "/", { status: 1 }).then(response => {
                        if (response.data.success == "True") {
                            dispatch(fetchProjectsForPMThunk(sessionStorage.getItem(USER_ID)))
                            dispatch(fetchProjectsThunk(sessionStorage.getItem(USER_ID)))
                            swal("Poof! Project is marked as completed", {
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
    const changePMChangeInputFieldStatus = (idx, action) => {
        switch (action) {
            case 'open':
                setPM({ value: projects[idx].project.pm.id, label: projects[idx].project.pm.first_name + ' ' + projects[idx].project.pm.last_name })
                setStatus({ project: idx });
                break
            case 'close':
                setStatus({ project: null });
                break
        }
    }
    const remaining_hours = (remaining, total) => {
        return String(parseFloat(total) - parseFloat(remaining))
    }
    const delete_assignee = (project_id, assignee_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    API.delete('/project/remove-assignee/' + assignee_id + "/", { data: { project: project_id, assignee: assignee_id } }).then(response => {
                        if (response.data.success == "True") {
                            dispatch(fetchProjectsForPMThunk(sessionStorage.getItem(USER_ID)))
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
    function calculate_progress_in_percentage(total_hours, remaining_hours) {
        let worked_hours = parseFloat(total_hours) - parseFloat(remaining_hours)
        return (100 * worked_hours) / parseFloat(total_hours)
    }
    return (
        <>
            {selectedSubTask && <CModal alignment="center" show={show_sub_task_details} onClose={() => { setShowSubTaskDetails(!show_sub_task_details) }}>
                <CModalHeader onClose={() => setShowSubTaskDetails(!show_sub_task_details)} closeButton>
                    <CModalTitle className="modal-title-projects">
                        <span className="edit-profile-form-header">Subtask Details</span>
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CContainer>
                        <CForm>
                            <CRow>
                                <div className="card-header-portion-ongoing">
                                    <h4 className="ongoing-card-header-1">
                                        <IconButton aria-label="favourite" disabled size="medium" color="primary">
                                            <GradeIcon fontSize="inherit" className="fav-button" />
                                        </IconButton>
                                        {selectedSubTask != undefined ? selectedSubTask.task_delivery_order.title : ''}
                                    </h4>

                                </div>
                                <div className="justify-content-center">
                                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 mt-1 mb-2">
                                        <CCard className="card-ongoing-project">
                                            <CCardBody className="details-project-body">
                                                <div className="ongoing-initial-info row">
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Sub Task Name</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.task_title}</h6></div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">PM Name</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.pm.first_name + ' ' + selectedSubTask.pm.last_name}</h6></div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Work Package Number</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.work_package_number}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Task Title</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.task_title}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Estimated Person(s)</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.estimated_person}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Planned Value</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.planned_value} </h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Planned Hours</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.planned_hours} </h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Remaining Hours</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.remaining_hours} </h6>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 mt-4 mb-2">
                                                    <h5 className="projectName mb-3">Asssignee(s)-({Array.from(selectedSubTask.assignees).length})</h5>
                                                    <div className="file-show-ongoing-details row">
                                                        {selectedSubTask != undefined && Array.from(selectedSubTask.assignees).map((item, idx) => (
                                                            <div key={idx} className="col-md-4 col-sm-6 col-lg-4">
                                                                <div className="file-attached-ongoing rounded-pill">
                                                                    <CButton type="button" onClick={() => delete_assignee(selectedSubTask.id, item.assignee.id)} className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.svg"} className="close-icon-size" /></CButton>{item.assignee.first_name + ' ' + item.assignee.last_name}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-12 mt-2 mb-2">
                                                    <div className="project-actions">
                                                        <CButton className="edit-project-ongoing-task" onClick={() => editInfoForm(subtask)} ><CIcon name="cil-pencil" className="mr-1" /> Edit </CButton>
                                                        <CButton type="button" onClick={() => delete_subtask(subtask.work_package_index)} className="delete-project-2"><CIcon name="cil-trash" className="mr-1" /> Delete</CButton>
                                                    </div>
                                                </div> */}
                                            </CCardBody>
                                        </CCard>
                                    </div>
                                </div>
                            </CRow>
                        </CForm>
                    </CContainer>
                </CModalBody>
            </CModal>}

            {/*_______CARDS FOR LIST BEGIN */}
            <div className="container">
                <h4 className="dash-header">My Projects ({Array.from(projects).length})</h4>
                <div className="row">
                    <div className="col-md-12 col-lg-11 col-sm-12 col-xs-12 mt-1">
                        {projects != undefined &&
                            <Accordion allowMultipleExpanded={false} className="remove-acc-bg  mb-3" allowZeroExpanded>
                                {Array.from(projects).map((project, idx) => (
                                    <AccordionItem key={idx} className="card-ongoing-project">
                                        <AccordionItemHeading className="ongoing-accordion-header">
                                            <AccordionItemButton>

                                                <IconButton aria-label="favourite" disabled size="medium" >
                                                    <GradeIcon fontSize="inherit" className="fav-button" />
                                                </IconButton>{String(project.project.task_delivery_order.title).toUpperCase() + ' / ' + String(project.project.sub_task).toUpperCase()}
                                                {/**action buttons */}
                                                <span className="fix-action-btn-alignment">
                                                    <CButton className="view-ongoing-details" onClick={() => history.push({ pathname: '/dashboard/Projects/my-projects/details/' + project.project.work_package_number, state: { project: project } })}><CIcon name="cil-list-rich" className="mr-1" />View Details</CButton>
                                                    <CButton type="button" onClick={() => { mark_project_completed(project.project.work_package_number) }} className="mark-ongoing-completed"><CIcon name="cil-check-alt" className="mr-1" />Mark as Completed</CButton>
                                                </span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        {/* <hr className="header-underline1" /> */}
                                         {/*task percentage portion */}
                                <div>
                                <h6 className="show-amount">{remaining_hours(project.project.remaining_hours, project.project.planned_hours)}/{parseInt(project.project.planned_hours)} Hrs</h6>
                                <LinearWithValueLabel progress={()=>calculate_progress_in_percentage(project.project.planned_hours,project.project.remaining_hours)}/>
                                    </div> 
                                      {/*Project category buttons */}
                                      <div className="all-da-buttons-1">
                                      {Array.from(project.subtasks).length > 0 && Array.from(project.subtasks).map((task, idx) => (
                                        <CButton key={idx} type="button" className="package-button rounded-pill" onClick={() => { setShowSubTaskDetails(true); setSelectedSubTask(task); console.log('task',task) }}>
                                            {task.task_title}
                                            <span className="tooltiptext">{task.work_package_index}</span>
                                        </CButton>
                                    ))} 
                                      </div>
                                       {/*Project participants */}
                                <div className="all-da-workers1">
                                    {project.assignees.length > 0 && Array.from(project.assignees).map((assignee, idx) => (
                                        <img key={idx} className="img-fluid worker-image" src={assignee.profile_pic != null ? BASE_URL + assignee.profile_pic : 'avatars/user-avatar-default.png'} />
                                    ))}
                                </div>
                                {/*project info in text */}
                                <div className="information-show row">
                                <div className="info-show-now col-lg-6">
                                <h5 className="project-details-points child"><h5 className="info-header-1">Assigned by :</h5>{project.project.pm.first_name + ' ' + project.project.pm.last_name}</h5>
                                <h5 className="project-details-points"><h5 className="info-header-1">Project Manager : {status.project != idx ? (<CButton className="edit-pm-name" variant='ghost' onClick={(e) => changePMChangeInputFieldStatus(idx, 'open')}><CIcon name="cil-pencil" className="mr-1 pen-icon-pm" /></CButton>) : null}</h5>{status.project != idx ? (<span>{project.project.pm.first_name + ' ' + project.project.pm.last_name}</span>
                                        ) : <></>}
                                            {/**if clicked edit button */}
                                          {/**if clicked edit button */}
                                          {status.project == idx ? (
                                                <div className="pm-name-edit-part">
                                                    <CForm className="desktop-width">
                                                        {/* <CInput className="custom-forminput-6 pm-edit" type="text" value={project.project.sub_task} /> */}
                                                        <Select
                                                            closeMenuOnSelect={true}
                                                            aria-labelledby="prjctSelect"
                                                            id="prjctSelect"
                                                            minHeight="35px"
                                                            placeholder="Select from list"
                                                            isClearable={true}
                                                            isMulti={false}
                                                            onChange={handlePMChange}
                                                            classNamePrefix="pm-edit"
                                                            value={currentPM}
                                                            options={managers}
                                                        // styles={colourStyles}
                                                        />

                                                    </CForm>
                                                    <div className="mt-1">
                                                        <CButton type="button" variant="ghost" className="confirm-name-pm" onClick={(e) => changePM(project.project.work_package_number)}><CIcon name="cil-check-circle" className="mr-1 tick" size="xl" /></CButton>
                                                        <CButton type="button" variant="ghost" className="cancel-name-pm" onClick={(e) => changePMChangeInputFieldStatus(project.project.id, 'close')}><CIcon name="cil-x-circle" className="mr-1 cross" size="xl" /></CButton>
                                                    </div>
                                                </div>
                                            ) : <></>}
                                        </h5>     
                                </div>
                                <div className="info-show-now col-lg-6">
                                        {/* <h5 className="project-details-points"><h5 className="info-header-1">Project Details :</h5>Design and develop the app for the seller and buyer module</h5> */}
                                        <h5 className="project-details-points child"><h5 className="info-header-1">Start Date : </h5>{project.project.date_created}</h5>

                                        <h5 className="project-details-points"><h5 className="info-header-1">Planned Delivery Date : </h5>{project.project.planned_delivery_date}</h5>
                                    </div>
                                </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
}

                        {/**If no projects are there */}
                        {Array.from(projects).length < 1 ? (
                            <CAlert className="no-value-show-alert" color="primary">Currently there are no projects</CAlert>
                        ) : null}
                    </div>
                </div>
            </div>

        </>)
}
export default MyProjects;