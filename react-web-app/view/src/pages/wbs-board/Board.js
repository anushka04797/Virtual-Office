import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CModal, CModalBody, CModalHeader, CModalFooter } from '@coreui/react';
import React, { useState, useEffect } from 'react'
import './Board.css'
import Board from 'react-trello'
import WbsModal from './wbs-modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWbsThunk } from '../../store/slices/WbsSlice';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CIcon from '@coreui/icons-react';
import { USER_ID } from '../../Config';
import { API } from '../../Config';
import swal from 'sweetalert';
import Select from "react-select";

const WbsBoard = () => {
    const [wbsList,setWbsList] = useState([])
    const tempAssigneList = [];
    const [wbsAssigneeList, setWbsAssigneeList] = useState([]);
    const dispatch = useDispatch()
    const [boardData, setBoardData] = useState({
        lanes: [
            {
                id: 'lane1',
                title: 'TO DO',
                label: '',
                cards: []
            },
            {
                id: 'lane2',
                title: 'IN PROGRESS',
                label: '',
                cards: []
            },
            {
                id: 'lane3',
                title: 'DONE',
                label: '',
                cards: []
            }
        ]
    })

    function capitalize(string) {
        if (string != undefined) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
        return ''
    }
    const profile = useSelector(state=>state.profile.data)
    const populate_data = (data) => {
        console.log('populating data')
        let temp_data = {
            lanes: [
                {
                    id: 'lane1',
                    title: 'TO DO',
                    label: '',
                    cards: []
                },
                {
                    id: 'lane2',
                    title: 'IN PROGRESS',
                    label: '',
                    cards: []
                },
                {
                    id: 'lane3',
                    title: 'DONE',
                    label: '',
                    cards: []
                }
            ]
        }
        if (data != undefined) {
            data.forEach(element => {
                // if (!tempAssigneList.find(item => item.value === element.assignee.id)) {
                //     var temp = {
                //         value: element.assignee.id,
                //         label: element.assignee.first_name + " " + element.assignee.last_name
                //     }
                //     tempAssigneList.push(temp)
                // }
                if (element.status === 1) {
                    // console.log("1st cond", data.lanes[0])
                    temp_data.lanes[0].cards.push({
                        "id": element.id.toString(),
                        "laneId": "lane1",
                        "title": element.title,
                        "description": element.description + "\n ➤ " + capitalize(element.assignee.first_name) + " " + capitalize(element.assignee.last_name),
                        "label": "★ " + element.end_date
                    })
                    // console.log('1', temp_data)
                }
                else if (element.status === 2) {
                    // console.log("2nd cond", temp_data.lanes[1])
                    temp_data.lanes[1].cards.push({
                        "id": element.id.toString(),
                        "laneId": "lane2",
                        "title": element.title,
                        "description": element.description + "\n ➤ " + capitalize(element.assignee.first_name) + " " + capitalize(element.assignee.last_name),
                        "label": "★ " + element.end_date
                    })
                    // console.log('2', temp_data)
                }
                else if (element.status === 3) {
                    // console.log("3rd cond", temp_data.lanes[2])
                    temp_data.lanes[2].cards.push({
                        "id": element.id.toString(),
                        "laneId": "lane3",
                        "title": element.title,
                        "description": element.description + "\n ➤ " + capitalize(element.assignee.first_name) + " " + capitalize(element.assignee.last_name),
                        "label": "★ " + element.end_date
                    })
                    // console.log('3', temp_data)
                }
            })
            setWbsAssigneeList(tempAssigneList)
            // setResetAssigneeSelectValue({value:sessionStorage.getItem(USER_ID), label:profile.first_name+' '+profile.last_name})
        }
        // console.log('temp data', temp_data)
        setBoardData(temp_data)
    }

    function getAssigneeList(data) {
        console.log("getAssigneeList wbsList: ", data)
        if (data != undefined) {
            data.forEach(element => {
                if (!tempAssigneList.find(item => item.value === element.assignee.id)) {
                    var temp = {
                        value: element.assignee.id,
                        label: element.assignee.first_name + " " + element.assignee.last_name
                    }
                    tempAssigneList.push(temp)
                }
            })
        }
    }

    React.useEffect(() => {
        dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)))
        API.get('wbs/all/'+sessionStorage.getItem(USER_ID)+'/').then((res)=>{
            setWbsList(res.data.data)
            let pre_selected_items=[]
            Array.from(res.data.data).forEach((item,idx)=>{
                if(item.assignee.id === profile.id){
                    pre_selected_items.push(item)
                }
            })
            populate_data(pre_selected_items)
            getAssigneeList(res.data.data)
            setResetAssigneeSelectValue({value:sessionStorage.getItem(USER_ID), label:profile.first_name+' '+profile.last_name})
            // filterWbs({value:sessionStorage.getItem(USER_ID), label:profile.first_name+' '+profile.last_name},{})
        })
    }, [])

    const boardStyle = { backgroundColor: "#fff" };
    const laneStyle = { backgroundColor: "rgb(243 243 243)" };
    let currentLaneId, currentCardId = '';

    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [timeCardListData, setTimeCardListData] = useState([]);

    const editWbs = (cardId, metadata, laneId) => {
        // console.log("WBS edit: ", cardId, metadata, laneId);
        currentLaneId = laneId;
        currentCardId = cardId;
        // console.log(data.lanes.find(element => element.id == currentLaneId).cards.find(element => element.id == currentCardId).title)
        const wbsId = (boardData.lanes.find(element => element.id == currentLaneId).cards.find(element => element.id == currentCardId)).id;
        API.get('wbs/time-card/list/' + wbsId + '/').then((res) => {
            console.log('time-card list result', res)
            // if (res.data.length != 0){
            setTimeCardListData(res.data);
            dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)))
            // }else {
            //     setTimeCardListData([]);
            // }
            console.log("timeCardListData: ", timeCardListData)
        })
        setModalData(wbsList.find(element => element.id == wbsId));
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

    const updateStatus = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
        console.log("DRAG ENDS!!!: ", cardDetails.id)
        let values;
        if (cardDetails.laneId == "lane1") {
            values = {
                "status": 1
            }
        } else if (cardDetails.laneId == "lane2") {
            values = {
                "status": 2
            }
        } else if (cardDetails.laneId == "lane3") {
            values = {
                "status": 3
            }
        }
        API.put('wbs/update/status/' + parseInt(cardDetails.id) + '/', values).then((res) => {
            console.log('update result', res)
            dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)))
        })
    }

    // filter wbs
    function filterWbs(newValue, actionMeta) {
        console.log("fn ran!!!", newValue, actionMeta);
        var temWbsList = wbsList;
        temWbsList = temWbsList.filter(item => item.assignee.id === newValue.value)
        populate_data(temWbsList)
        getAssigneeList(wbsList)
        setResetAssigneeSelectValue(newValue)
        setShowClearBtn(true);
    }

    const [showClearBtn, setShowClearBtn] = useState(false);

    function clearFilter() {
        setShowClearBtn(false);
        populate_data(wbsList)
        getAssigneeList(wbsList)
        setResetAssigneeSelectValue(null)
    }

    const [resetAssigneeSelectValue, setResetAssigneeSelectValue] = useState(null);

    return (
        <>
            <CRow>
                <div className="col-lg-6 mb-3">
                    <Select
                        value={resetAssigneeSelectValue}
                        placeholder="Filter by assignee"
                        options={wbsAssigneeList}
                        onChange={filterWbs}
                    />
                </div>
                <div className="col-lg-6 mb-3">
                    {showClearBtn == true && <CButton type="button" className="clear-filter-wbs" onClick={() => clearFilter()}>clear filter</CButton>}
                </div>

            </CRow>
            <CRow>
                <Board data={boardData} hideCardDeleteIcon handleDragEnd={updateStatus} onCardClick={editWbs} style={boardStyle} laneStyle={laneStyle} />
            </CRow>
            {modalData != null && <WbsModal show={modal} onClose={onWbsUpdate} toggle={toggle} data={modalData} timeCardList={timeCardListData}></WbsModal>}
        </>
    )

}
export default WbsBoard;