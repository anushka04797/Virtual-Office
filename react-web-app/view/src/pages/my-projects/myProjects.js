import React, { useState, useEffect } from 'react'
import { fetchProjectsForPMThunk } from '../../store/slices/ProjectsSlice';
import '../ongoing-project-details/ongoingProjectDetails.css';
import { CAlert, CCard, CCardBody, CButton, CModal, CModalHeader, CModalBody, CContainer, CForm, CRow, CLabel, CInput, CModalTitle } from '@coreui/react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';

import makeAnimated from "react-select/animated";
import { CIcon } from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, USER_ID } from '../../Config';
import { API } from '../../Config';
import swal from 'sweetalert'
import Select from "react-select";
import { TenMpOutlined } from '@material-ui/icons';
const MyProjects = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [pmStatus, setPmStatus] = useState(1);
    const [status, setStatus] = useState(0);
    const [managers, setManagers] = useState([])
    const radioHandler = (status, pmStatus) => {
        setStatus(status);
        setPmStatus(pmStatus);
    };

    //const projects=useSelector(state=> state.projects.data.filter((item)=> project.project.status === 0))
    const projects = useSelector(state => {
        let temp = []
        state.projects.pm_projects.forEach((item, idx) => {
            if (item.project.status == 0) {
                temp.push(item)
            }
        })
        console.log('temp', temp)
        return temp
    })

    useEffect(() => {
        console.log('projects', projects)
        dispatch(fetchProjectsForPMThunk(localStorage.getItem(USER_ID)))
        API.get('project/managers/').then((res) => {
            console.log('res', res.data.data)
            let temp = []
            Array.from(res.data.data).forEach((manager, idx) => {
                temp.push({ value: manager.id, label: manager.first_name + ' ' + manager.last_name, data: manager })
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
                            dispatch(fetchProjectsForPMThunk(localStorage.getItem(USER_ID)))
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
    const remaining_hours = (remaining, total) => {
        return String(parseFloat(total) - parseFloat(remaining))
    }
    return (
        <>
            {/*_______CARDS FOR LIST BEGIN */}
            <div className="container">
                <h4 className="dash-header">My Projects ({Array.from(projects).length})</h4>
                <div className="row">
                    <div className="col-md-11  col-sm-12 col-xs-12 mt-1">
                        {projects != undefined && Array.from(projects).map((project, idx) => (<CCard key={idx} className="card-ongoing-project">
                            <CCardBody className="details-project-body">
                                <h4 className="ongoing-card-header">
                                    <IconButton aria-label="favourite" disabled size="medium" >
                                        <GradeIcon fontSize="inherit" className="fav-button" />
                                    </IconButton>{String(project.project.task_delivery_order.title).toUpperCase() + ' / ' + String(project.project.sub_task).toUpperCase()}
                                </h4>
                                <hr className="header-underline1" />

                                {/*task percentage portion */}
                                <div>
                                    <h5 className="tasks-done"><span className="tiny-header1">Task Done : </span>5/10 </h5>
                                    <h6 className="show-amount">{remaining_hours(project.project.remaining_hours, project.project.planned_hours)}/{parseInt(project.project.planned_hours)} Hrs</h6>
                                    <div className="progress progress-background">
                                        <div className="progress-bar custom-progress1 progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                                {/*Project category buttons */}
                                <div className="all-da-buttons-1">
                                    {/* <CButton className="package-button lilac" shape="rounded-pill" onClick={() => setVisible(!visible)}>
                                        Front End Design
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton> */}
                                    {Array.from(project.subtasks).length > 0 && Array.from(project.subtasks).map((task, idx) => (
                                        <CButton key={idx} type="button" className="package-button rounded-pill">
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
                                        {/* <h5 className="project-details-points"><h5 className="info-header-1">Work Package : </h5>1000</h5> */}
                                        <h5 className="project-details-points"><h5 className="info-header-1">Project Manager : {status === 0 ? (<CButton className="edit-pm-name" variant='ghost' onClick={(e) => radioHandler(1, 0)}><CIcon name="cil-pencil" className="mr-1 pen-icon-pm" /></CButton>) : null}</h5>{status === 0 ? (<span>{project.project.pm.first_name + ' ' + project.project.pm.last_name}</span>
                                        ) : <></>}
                                            {/**if clicked edit button */}
                                            {status === 1 ? (
                                                <div className="pm-name-edit-part">
                                                    <CForm>
                                                        {/* <CInput className="custom-forminput-6 pm-edit" type="text" value={project.project.sub_task} /> */}
                                                        <Select
                                                            closeMenuOnSelect={true}
                                                            aria-labelledby="prjctSelect"
                                                            id="prjctSelect"
                                                            minHeight="35px"
                                                            placeholder="Select from list"
                                                            isClearable={true}
                                                            isMulti={false}
                                                            // onChange={handleProjectChange}
                                                            classNamePrefix="custom-forminput-6"
                                                            // value={selectedProject}
                                                            options={managers}
                                                            // styles={colourStyles}
                                                        />
                                                    </CForm>
                                                    <div>
                                                        <CButton type="button" variant="ghost" className="confirm-name-pm" onClick={(e) => radioHandler(0, 1)}><CIcon name="cil-check-circle" className="mr-1 tick" size="xl" /></CButton>
                                                        <CButton type="button" variant="ghost" className="cancel-name-pm" onClick={(e) => radioHandler(0, 1)}><CIcon name="cil-x-circle" className="mr-1 cross" size="xl" /></CButton>
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

                                <div className="ongoing-action-card-buttons">
                                    <CButton className="view-ongoing-details" onClick={() => history.push({ pathname: '/dashboard/Projects/my-projects/details/' + project.project.work_package_number, state: { project: project } })}><CIcon name="cil-list-rich" className="mr-1" />View Details</CButton>
                                    <CButton type="button" onClick={() => { mark_project_completed(project.project.work_package_number) }} className="mark-ongoing-completed"><CIcon name="cil-check-alt" className="mr-1" />Mark as Completed</CButton>
                                </div>
                            </CCardBody>

                        </CCard>))}
                        {/**If no projects are there */}
                        {Array.from(projects).length < 1 ? (
                            <CAlert className="no-value-show-alert" color="primary">Currently there are no ongoing projects</CAlert>
                        ) : null}
                    </div>


                </div>
            </div>

        </>)
}
export default MyProjects;