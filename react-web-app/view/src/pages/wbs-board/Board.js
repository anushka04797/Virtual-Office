import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CModal, CModalBody, CModalHeader, CModalFooter } from '@coreui/react';
import React, { useState, useEffect } from 'react'
import './Board.css'
import Board from 'react-trello'
import WbsModal from './wbs-modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWbsThunk } from '../../store/slices/WbsSlice';

let data = {
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

const WbsBoard = () => {
    // const [boardData, setBoardData] = useState({})
    const wbsList = useSelector(state => {
        data.lanes[0].cards = []
        data.lanes[1].cards = []
        data.lanes[2].cards = []
        let wbsData = state.wbs.data;
        wbsData.forEach(element => {
            if (element.status === 1) {
                // console.log("1st cond", data.lanes[0])
                data.lanes[0].cards.push({ "id": element.id.toString(), "laneId": "lane1", "title": element.title, "description": element.description, "label": 'Due: ' + element.end_date })
                console.log(data)
            }
            else if (element.status === 2) {
                // console.log("2nd cond", data.lanes[1])
                data.lanes[1].cards.push({ "id": element.id.toString(), "laneId": "lane2", "title": element.title, "description": element.description, "label": "Due: " + element.end_date })
                console.log(data)
            }
            else if (element.status === 3) {
                // console.log("3rd cond", data.lanes[2])
                data.lanes[2].cards.push({ "id": element.id.toString(), "laneId": "lane3", "title": element.title, "description": element.description, "label": "Due: " + element.end_date })
                console.log(data)
            }
        });
        // setBoardData(data)
        return data;
    })
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchWbsThunk(5))
    }, [])
    console.log("wbsList", wbsList);

    const boardStyle = { backgroundColor: "#fff" }
    const laneStyle = { backgroundColor: "rgb(243 243 243)" }
    let currentLaneId, currentCardId = '';
    console.log(data)

    const editWbs = (cardId, metadata, laneId) => {
        // console.log("WBS edit: ", cardId, metadata, laneId);
        currentLaneId = laneId;
        currentCardId = cardId;
        // console.log(data.lanes.find(element => element.id == currentLaneId).cards.find(element => element.id == currentCardId).title)
        setModalData(data.lanes.find(element => element.id == currentLaneId).cards.find(element => element.id == currentCardId))
        setModal(true)
    }

    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({})

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <Board data={wbsList} hideCardDeleteIcon onCardClick={editWbs} style={boardStyle} laneStyle={laneStyle} />

            <WbsModal show={modal} toggle={toggle} data={modalData}></WbsModal>
        </>
    )

}
export default WbsBoard;