import { React, useEffect, useState } from 'react';
import './ongoingProjectDetails.css'
import { CAlert, CCard, CCardBody, CButton, CModal, CModalHeader, CModalBody, CContainer, CForm, CRow, CLabel, CInput, CModalTitle } from '@coreui/react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { CIcon } from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, USER_ID } from '../../Config';
import { API } from '../../Config';
import swal from 'sweetalert'
import { fetchProjectsThunk } from '../../store/slices/ProjectsSlice';
import { has_permission } from '../../helper';
import '../my-projects/myProjects.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import LinearWithValueLabel from '../../components/linear-progress-bar/linear-progress-bar';
const OngoingProjectDetails = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [pmStatus, setPmStatus] = useState(1);
    const [status, setStatus] = useState(0);
    const radioHandler = (status, pmStatus) => {
        setStatus(status);
        setPmStatus(pmStatus);
    };
    const [showTaskForm, setShowTaskForm] = useState(false);
    //const projects=useSelector(state=> state.projects.data.filter((item)=> project.project.status === 0))
    const projects = useSelector(state => {
        let temp = []
        state.projects.data.forEach((item, idx) => {
            if (item.project.status == 0) {
                temp.push(item)
            }
        })
        console.log('temp', temp)
        return temp
    })
    const toggleTaskForm = () => {
        setShowTaskForm(!showTaskForm);
    };
    const closeForm = () => {
        setShowTaskForm(false)
    }
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'rgba(238, 232, 250, 0.5)', border: '1px solid #EEE8FA', borderRadius: "8px", minHeight: "60px", boxShadow: "inset 0px 4px 20px rgba(189, 158, 251, 0.1)", fontSize: "16px", lineHeight: "24px" }),
    }
    const [visible, setVisible] = useState(false);

    const animatedComponents = makeAnimated();
    useEffect(() => {
        console.log('projects', projects)
        dispatch(fetchProjectsThunk(sessionStorage.getItem(USER_ID)))
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
    const [show_sub_task_details, setShowSubTaskDetails] = useState(false)
    const [selectedSubTask, setSelectedSubTask] = useState()
    const worked_hours = (remaining, total) => {
        return String(parseFloat(total) - parseFloat(remaining))
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
                                <div className="row justify-content-center">
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
                                                                    {item.assignee.first_name + ' ' + item.assignee.last_name}
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
            <div className="container">
                <h4 className="dash-header">Assigned Projects({Array.from(projects).length})</h4>
                <div className="row">
                    <div className="col-md-12  col-sm-12 col-xs-12 mt-1 mb-3">
                        {projects != undefined &&

                            <Accordion allowMultipleExpanded={false} className="remove-acc-bg" allowZeroExpanded>
                                {Array.from(projects).map((project, idx) =>(
                                 <AccordionItem key={idx} className="card-ongoing-project">
                                <AccordionItemHeading className="ongoing-accordion-header">
                                    <AccordionItemButton>
                                    
                                            <IconButton aria-label="favourite" disabled size="medium" >
                                                <GradeIcon fontSize="inherit" className="fav-button" />
                                            </IconButton>{String(project.project.task_delivery_order.title).toUpperCase() + ' / ' + String(project.project.sub_task).toUpperCase()}
                                      
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                                </AccordionItem>
                                ))}
                            </Accordion>
                        }
                        {/**If no projects are there */}
                        {Array.from(projects).length < 1 ? (
                            <CAlert className="no-value-show-alert" color="primary">Currently there are no ongoing projects</CAlert>
                        ) : null}
                    </div>
                    {/**Dummy cards for viewing design */}

                    {/**Dummy card,REMOVE AFTER DYNAMIC DATA LOAD */}

                </div>
            </div>

        </>
    )
}

export default OngoingProjectDetails;