import React, { useEffect } from 'react';
import './projectsTable.css';
import { CButton, CCard, CCardBody, CAlert } from '@coreui/react';
import { useDispatch, useSelector } from "react-redux";
// import { fetchProjectsThunk } from "../../store/slices/ProjectsSlice";
// import { USER_ID } from "../../Config";
import { useHistory } from "react-router-dom";


const ProjectsTableDashboard = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const projects = useSelector(state => state.projects.data);
    useEffect(() => {
        console.log("ProjectsList", projects)
    }, [projects])
    return (
        <>
            <div className="main-holder-projects">
                <h3 className="projectsHeader">
                    Projects
                </h3>

                <div className="card-holder1">
                    {projects != undefined && Array.from(projects).slice(0, 3).map((item, idx) => (
                        <CCard className="project-card1" key={idx} onClick={() => history.push({ pathname: 'dashboard/Projects/assigned-projects/details/' + item.project.work_package_number + '/' })}>
                            <CCardBody>
                                {/* <h6 className="id-no1">Work Package Number: # {item.project.work_package_number}</h6> */}
                                <h5 className="card-details1"><span className="p-header-3">Project Name: </span> {item.project.sub_task}</h5>
                                <h5 className="card-details1"><span className="p-header-3">Planned Hours: </span> {item.project.planned_hours}</h5>
                                <h5 className="card-details1"><span className="p-header-3">Remaining Hours: </span> {item.project.remaining_hours}</h5>
                                <h5 className="card-details1"><span className="p-header-3">Planned Delivery Date : </span>{item.project.planned_delivery_date}</h5>
                            </CCardBody>
                        </CCard>
                    ))}
                    { /**If no projects */}
                    {projects == '' || projects == undefined ? (



                        <CAlert className="no-value-show-alert" color="primary">Currently there are no ongoing projects</CAlert>


                    ) : null


                    }
                </div>
                {projects != undefined && <div className="button-holder3"><CButton className="tiny-buttons1" onClick={() => history.push({ pathname: '/dashboard/Projects/assigned-projects' })}>View all</CButton></div>}


            </div>
        </>
    )
}
export default ProjectsTableDashboard;
