import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CModal, CModalBody, CModalHeader, CModalFooter } from '@coreui/react';
import React, { useState, useEffect } from 'react'
import './Board.scss'
import Board from 'react-trello'
import WbsModal from './wbs-modal';

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'TO DO',
            label: '2/2',
            cards: [
                { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
                { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins' }
            ],
            hideCardDeleteIcon: true
        },
        {
            id: 'lane2',
            title: 'IN PROGRESS',
            label: '3/3',
            cards: [
                { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
                { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins' },
                { id: 'Card3', title: 'react trello intregation', description: 'react trello intregation by pial', label: '5 mins' }
            ]
        },
        {
            id: 'lane3',
            title: 'DONE',
            label: '1/1',
            cards: [
                { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' }
            ]
        }
    ]
}

const WbsBoard = () => {
    const boardStyle = { backgroundColor: "#fff" }
    const laneStyle = { backgroundColor: "rgb(243 243 243)" }
    let currentLaneId, currentCardId = '';

    const editWbs = (cardId, metadata, laneId) => {
        // console.log("WBS edit: ", laneId, cardId, metadata);
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

    // useEffect(() => {
    //     fetch('https://randomuser.me/api/')
    //       .then(results => results.json())
    //       .then(data => {
    //         const {name} = data.results[0];
    //         setFirstName(name.first);
    //         setLastName(name.last);
    //       });
    //   }, []);

    return (
        <>
            <Board data={data} hideCardDeleteIcon onCardClick={editWbs} style={boardStyle} laneStyle={laneStyle} />

            <WbsModal show={modal} toggle={toggle} data={modalData}></WbsModal>
        </>
    )

}
export default WbsBoard;