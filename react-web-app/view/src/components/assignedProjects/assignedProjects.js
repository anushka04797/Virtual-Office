import React, { useState } from 'react';
import { CButton, CCard, CCardBody, CAlert } from '@coreui/react';
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { fetchWbsThunk } from '../../store/slices/WbsSlice';
import WbsModal from "../../pages/wbs-board/wbs-modal";
// import { fetchUserWiseWbsThunk } from '../../store/slices/WbsSlice';
import { API, USER_ID } from "../../Config";
const AssignedProjectsDashboard = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const wbs = useSelector(state => state.wbs.data);
    console.log(wbs)
    const [updatedData, setUpdatedData] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const editWbsModal = (value) => {
        API.get('wbs/time-card/list/'+value+'/').then((res)=>{
            console.log('time-card list result', res);
            setUpdatedData(res.data);
        })
        setModalData(wbs.find(element => element.id == value));
        setModal(true);
    }
    const toggle = () => {
        setModalData(null);
        setModal(!modal);
    }

    const onWbsUpdate = () => {
        setModal(false)
        dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)))
        setModalData(null);
    }

    React.useEffect(() => {
        // dispatch(fetchUserWiseWbsThunk(sessionStorage.getItem(USER_ID)))
    }, [])
    return (
        <>

            <div className="main-holder-projects">
                <h3 className="projectsHeader">
                    WBS List
                </h3>

                <div className="card-holder1">
                    {wbs != undefined && wbs.slice(0, 3).map((item, idx) => (
                        <CCard className="project-card1" key={idx} onClick={() => editWbsModal(item.id)}>
                            <CCardBody>
                                <h6 className="id-no1">Project Title : # {item.project.sub_task}</h6>
                                <h5 className="card-details1"><span className="p-header-3">Task Title:</span> {item.project.task_title}</h5>
                                <h5 className="card-details1"><span className="p-header-3">Description :</span> {item.description}</h5>

                            </CCardBody>

                        </CCard>
                    ))}
                    { /**If no wbs */}
                    {wbs == undefined || wbs == 0 ? (



                        <CAlert className="no-value-show-alert" color="primary">Currently there are no projects assigned to you</CAlert>


                    ) : null


                    }
                </div>
                {wbs != undefined && <div className="button-holder3"><CButton className="tiny-buttons1" onClick={() => history.push({ pathname: '/dashboard/WBS/board' })}>View all</CButton></div>}
            </div>
            {modalData != null && <WbsModal show={modal} onClose={onWbsUpdate} toggle={toggle} data={modalData} timeCardList={updatedData} ></WbsModal>}
        </>
    )
}
export default AssignedProjectsDashboard;
