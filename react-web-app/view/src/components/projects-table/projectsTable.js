import React from 'react';
import './projectsTable.css';
import {CButton, CCard, CCardBody} from '@coreui/react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProjectsThunk} from "../../store/slices/ProjectsSlice";
import {USER_ID} from "../../Config";


const ProjectsTableDashboard =()=>{
    const dispatch = useDispatch()
    const  projects = useSelector(state => state.projects.data);
    React.useEffect(()=>{
        dispatch(fetchProjectsThunk(localStorage.getItem(USER_ID)))
    },[])
return (
    <>
    <div className="main-holder-projects">
<h3 className="projectsHeader">
    Projects
</h3>

<div className="card-holder1">
    { projects!=undefined && projects.slice(0, 3).map((item, idx) => (
    <CCard className="project-card1">
        <CCardBody>
            <h6 className="id-no1">project id: #{item.work_package_number}</h6>
            <h5 className="card-details1"><span className="p-header-3">Project Name (key): </span> { item.task_delivery_order }</h5>
            {/*<h5 className="card-details1"><span className="p-header-3">Lead Name : </span>Pial Noman</h5>*/}
        </CCardBody>
    
    </CCard>
    ))}
   
    </div>
    <div className="button-holder3"><CButton className="tiny-buttons1">View all</CButton></div>
</div>

    
    </>
)
}
export default ProjectsTableDashboard;
