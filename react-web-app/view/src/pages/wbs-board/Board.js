import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CModal, CModalBody, CModalHeader, CModalFooter } from '@coreui/react';
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

const WbsBoard = () => {
    const wbsList = useSelector(state => state.wbs.data)
    const dispatch=useDispatch()
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
    const populate_data = () => {
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
        if(wbsList!=undefined){
            wbsList.forEach(element => {
                if (element.status === 1) {
                    // console.log("1st cond", data.lanes[0])
                    temp_data.lanes[0].cards.push({ "id": element.id.toString(), "laneId": "lane1", "title": element.title, "description": element.description, "label": "★ " + element.end_date })
                    console.log('1', temp_data)
                }
                else if (element.status === 2) {
                    // console.log("2nd cond", temp_data.lanes[1])
                    temp_data.lanes[1].cards.push({ "id": element.id.toString(), "laneId": "lane2", "title": element.title, "description": element.description, "label": "★ " + element.end_date })
                    console.log('2', temp_data)
                }
                else if (element.status === 3) {
                    // console.log("3rd cond", temp_data.lanes[2])
                    temp_data.lanes[2].cards.push({ "id": element.id.toString(), "laneId": "lane3", "title": element.title, "description": element.description, "label": "★ " + element.end_date })
                    console.log('3', temp_data)
                }
            })
        }
        // console.log('temp data', temp_data)
        setBoardData(temp_data)
    }

    React.useEffect(() => {
        populate_data()
    }, [wbsList])

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

    const onWbsUpdate=()=>{
        setModal(false)
        dispatch(fetchWbsThunk(localStorage.getItem(USER_ID)))
        setModalData(null);
    }

    const updateStatus=(cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
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
        }else if (cardDetails.laneId == "lane3") {
            values = {
                "status": 3
            }
        }
        API.put('wbs/update/status/' + parseInt(cardDetails.id) + '/', values).then((res) => {
            console.log('update result', res)
        })
    }
    
    return (
        <>
            <Board data={boardData} hideCardDeleteIcon handleDragEnd={updateStatus} onCardClick={editWbs} style={boardStyle} laneStyle={laneStyle} />
            {modalData!=null && <WbsModal show={modal} onClose={onWbsUpdate} toggle={toggle} data={modalData} timeCardList={timeCardListData}></WbsModal>}
        </>
    )

}
export default WbsBoard;