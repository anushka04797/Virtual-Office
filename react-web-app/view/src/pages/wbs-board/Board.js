import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CModal, CModalBody, CModalHeader, CModalFooter } from '@coreui/react';
import React, { useState, useEffect } from 'react'
import './Board.css'
import Board, { Lane } from 'react-trello'
import WbsModal from './wbs-modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWbsThunk } from '../../store/slices/WbsSlice';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CIcon from '@coreui/icons-react';
import { USER_ID } from '../../Config';
import { API } from '../../Config';
import swal from 'sweetalert';
import Select from "react-select";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { getStepLabelUtilityClass } from '@material-ui/core';
const WbsBoard = () => {
    {/**export in excel */ }
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    var fileName;
    const xlData = [];
    const [wbsList, setWbsList] = useState([])
    const tempAssigneList = [];
    const [wbsAssigneeList, setWbsAssigneeList] = useState([]);
    const dispatch = useDispatch()
    const [fetchData, setFetchedData] = useState([])
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
    const profile = useSelector(state => state.profile.data)
    const populate_data = (data) => {

        console.log('populating data', data)
        setFetchedData(data);
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
            // exportToCSV(data);
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



    const boardStyle = { backgroundColor: "#fff" };
    const laneStyle = { backgroundColor: "rgb(243 243 243)" };
    let currentLaneId, currentCardId = '';

    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [timeCardListData, setTimeCardListData] = useState([]);
    const exportToCSV = () => {
        console.log(fetchData)

        for (let i = 0; i < fetchData.length; i++) {
            const item = fetchData[i];
            function getStatus(info){
                if (info =='1'){
                    return 'To Do'
                }
                else if (info == '2'){
                    return 'In Progress'
                
                }
                else if (info == '3'){
                    return 'Done'
                }
            }
            xlData.push({'Sl. No.': i+1,'TDO':item.project.task_delivery_order.title,'Project':item.project.sub_task,'Task Title':item.project.task_title,'Assignee':item.assignee.first_name + ' '+ item.assignee.last_name,'WBS Title':item.title,'WBS Description':item.description,'Hrs Worked':item.hours_worked,'Date Updated':item.date_updated,'Progress(%)':item.progress+'%','Status':getStatus(item.status) ,'Reporter':item.reporter.first_name+ ' ' + item.reporter.last_name})
          
        }
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        fileName= 'WBS'+date;
        const ws = XLSX.utils.json_to_sheet(xlData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
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
    const filterWbs = (newValue, actionMeta) => {
        console.log("fn ran!!!", newValue, actionMeta);
        var temWbsList = wbsList;
        temWbsList = temWbsList.filter(item => item.assignee.id === newValue.value)
        populate_data(temWbsList)
        getAssigneeList(wbsList)
        setResetAssigneeSelectValue(newValue)
        setShowClearBtn(true);
    }

    const [showClearBtn, setShowClearBtn] = useState(false);
    const [resetAssigneeSelectValue, setResetAssigneeSelectValue] = useState()
    function clearFilter() {
        setShowClearBtn(false);
        populate_data(wbsList)
        getAssigneeList(wbsList)
        setResetAssigneeSelectValue(null)
    }
    console.log('BOard', boardData)
    React.useEffect(() => {
        // dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)))
        API.get('wbs/all/' + sessionStorage.getItem(USER_ID) + '/').then((res) => {
            setWbsList(res.data.data)
            let pre_selected_items = []
            Array.from(res.data.data).forEach((item, idx) => {
                if (item.assignee.id === profile.id) {
                    pre_selected_items.push(item)
                }
            })
            populate_data(pre_selected_items)
            getAssigneeList(res.data.data)
            setResetAssigneeSelectValue({ value: sessionStorage.getItem(USER_ID), label: profile.first_name + ' ' + profile.last_name })
        })
    }, [profile])
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
                <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                    {/* showClearBtn == true && */}
                    {<CButton type="button" className="clear-filter-wbs" onClick={() => clearFilter()}>clear filter</CButton>}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
                    {/* showClearBtn == true && */}
                    {<CButton className="export-project-list" onClick={() => exportToCSV()}><CIcon name="cil-spreadsheet" className="mr-2" />Export to excel</CButton>}
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