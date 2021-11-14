import { CContainer, CRow, CCol, CForm, CLabel, CInput, CButton, CDataTable } from '@coreui/react';
import React, { useState, useEffect } from 'react'
import "./timeCards.css"
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, USER_ID } from '../../Config';
import { API } from '../../Config';
import { has_group } from '../../helper';
import { useFormik } from "formik";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { fetchPersonalDetails } from "../../store/slices/ProfileSlice";


const TimeCards = () => {
    const profile_details = useSelector(state => state.profile.data)
    console.log(profile_details)
    const [usersData, setUsersData] = useState([])
    const [pdfData, setPdfData] = useState([])
    console.log('userdata', usersData)
    const [assignee, setAssigneeValue] = useState();
    const [pdfTitle, setPdfTitle] = useState();
   
    const getTimeCards = (values) => {
        if (has_group('pm')) {
            console.log('values from timecards', values)
            API.get('wbs/user/time-card/list/' + values.assigneeSelectPM + "/").then((res) => {
                let temp = []
                Array.from(res.data.data).forEach((item, idx) => {

                    temp.push({ data: item })
                })

                let filteredData = [];
                filteredData = temp.filter(p => p.data.date_updated >= values.startDate && p.data.date_updated <= values.todate)
                console.log('timecard for id', filteredData)
                setPdfData(filteredData)
                var tableData = [];
                for (let index = 0; index < filteredData.length; index++) {
                    const element = filteredData[index];
                    tableData.push({ '#': index + 1, 'TDO': element.data.project.task_delivery_order.title, "Project Name": element.data.project.sub_task, "Task Title": element.data.project.task_title, "Actual Work Done": element.data.actual_work_done, "Hrs Today": element.data.hours_today, "Date Created": element.data.date_created, "Date Updated": element.data.date_updated })
                }
                setUsersData(tableData)

            })
        }
        else {
            console.log('values from timecards', values)
            API.get('wbs/user/time-card/list/' + values.assigneeSelect + "/").then((res) => {
                let temp = []
                setPdfTitle(profile_details.first_name+ " " +profile_details.last_name);
                Array.from(res.data.data).forEach((item, idx) => {
                    // temp.push({data:item.date_updated >=values.startDate && item.date_updated <= values.todate})
                    temp.push({ data: item })
                })

                let filteredData = [];
                filteredData = temp.filter(p => p.data.date_updated >= values.startDate && p.data.date_updated <= values.todate)
                console.log('timecard for id', filteredData)
                setPdfData(filteredData)
                var tableData = [];
                for (let index = 0; index < filteredData.length; index++) {
                    const element = filteredData[index];
                    tableData.push({ '#': index + 1, 'TDO': element.data.project.task_delivery_order.title, "Project Name": element.data.project.sub_task, "Task Title": element.data.project.task_title, "Actual Work Done": element.data.actual_work_done, "Hrs Today": element.data.hours_today, "Date Created": element.data.date_created, "Date Updated": element.data.date_updated })
                }
                setUsersData(tableData);
                console.log('userdata', usersData);
            })

        }


    }
    //     const projects = useSelector(state => state.projects.pm_projects)

    //  console.log("pM projects", projects);
    //  var singleProject=[];
    //  Array.from(projects).forEach((item,idx)=>{
    //      singleProject.push({data:item.assignees})
    //  })
    // console.log(singleProject)
    // for(let i=0;i < singleProject.length;i++){
    //     const name = singleProject[i].data;
    //     console.log('name',name);
    // }
    function capitalize(string) {
        if (string != undefined) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
        return ''
    }
    {/**fetch all assignees for PM */ }
    const assigneeList = [];
    if (has_group('pm')) {

        API.get('project/assignees/all/' + localStorage.getItem(USER_ID) + "/").then((res) => {

            Array.from(res.data.data).forEach((item, idx) => {
                assigneeList.push({ data: item, value: item.id, label: capitalize(item.first_name) + " " + capitalize(item.last_name) })
            })
            console.log(assigneeList)
        })
    }
    const getAssigneeList = (option) => {
        setAssigneeValue(option)
        editForm.setValues({
            assigneeSelectPM: option.value
        })
        setPdfTitle(option.label)
    }
    const validateEditForm = (values) => {
        const errors = {}

        if (!values.startDate) errors.startDate = "Start Date selection is required"
        if (!values.todate) errors.todate = "To date selection is required"
        return errors
    }
    const editForm = useFormik({
        initialValues: {

            assigneeSelect: localStorage.getItem(USER_ID),
            assigneeSelectPM: "",
            startDate: "",
            todate: ""

        },
        validateOnBlur: true,
        validateOnChange: true,
        validate: validateEditForm,
        onSubmit: getTimeCards
    })
    const colourStyles = {
        // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
        option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
    };
    {/**export fetched tabledata to excel */ }
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
    {/**export data as pdf */ }
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Timecard of"+ " " +pdfTitle;
        const headers = [["#", "TDO",
            "Project Name",
            "Task Title",
            "Actual Work Done",
            "Hrs Today",
            "Date Created",
            "Date Updated"]];
        const uData = pdfData.map((elt, idx) => [idx + 1, elt.data.project.task_delivery_order.title, elt.data.project.sub_task, elt.data?.project.task_title, elt.data.actual_work_done, elt.data.hours_today, elt.data.date_created, elt.data.date_updated]);
        let content = {
            startY: 50,
            head: headers,
            body: uData
        };

        doc.text(title, marginLeft, 30);
        doc.autoTable(content);
        doc.save("Timecard of" +" "+ pdfTitle +".pdf")
    }
    return (

        <>
            <CContainer>
                <h3 className="timecards-page-header mb-3">Timecards</h3>

                <CForm>
                    <CRow>

                        {/**assignees */}
                        <CCol lg="4" md="12">
                            {!has_group('pm') &&
                                <div>
                                    <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                                        Select Employee
                                    </CLabel>
                                    <CInput name="assigneeSelect" type="text" value={capitalize(profile_details.first_name) + ' ' + capitalize(profile_details.last_name)} onChange={editForm.handleChange} readOnly />

                                </div>
                            }
                            {/**IF PM */}
                            {has_group('pm') &&
                                <div>
                                    <CLabel className="custom-label-5" htmlFor="assigneeSelectPM">
                                        Select Employee
                                    </CLabel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        aria-labelledby="assigneeSelectPM"
                                        id="assigneeSelectPM"
                                        minHeight="35px"
                                        placeholder="Select from list"
                                        isClearable={false}
                                        isMulti={false}
                                        onChange={getAssigneeList}
                                        classNamePrefix="custom-forminput-6"
                                        options={assigneeList}
                                        styles={colourStyles}
                                    />
                                    {/* {editForm.errors.assigneeSelectPM && <p className="error mt-1">{editForm.errors.assigneeSelectPM}</p>} */}
                                </div>

                            }
                        </CCol>
                        {/**start date */}
                        <CCol lg="3" md="5">
                            <CLabel className="custom-label-5" htmlFor="startDate">
                                From Date
                            </CLabel>
                            <CInput className="custom-forminput-6" type="date" name="startDate" id="startDate" value={editForm.values.startDate} onChange={editForm.handleChange} />
                            {/**Error show */}
                            {editForm.errors.startDate && <p className="error mt-1">{editForm.errors.startDate}</p>}
                        </CCol>
                        {/**END DATE */}
                        <CCol lg="3" md="5">

                            <CLabel className="custom-label-5" htmlFor="todate">
                                To Date
                            </CLabel>
                            <CInput className="custom-forminput-6" type="date" name="todate" id="todate" value={editForm.values.todate} onChange={editForm.handleChange} />
                            {/**Error show */}
                            {editForm.errors.todate && <p className="error mt-1">{editForm.errors.todate}</p>}
                        </CCol>
                        <CCol lg="2" md="2">
                            <div className="button-holder--3">
                                <CButton className="generate-card-button" onClick={editForm.handleSubmit}>Go</CButton>
                            </div>
                        </CCol>

                        {/**buttons for format of timecard */}

                        {usersData != 0 && <CCol md="12">
                            <h5 className="tiny-header--5 mt-4">Export</h5>
                            <div className="format-buttons mt-2">
                                <CButton className="file-format-download" onClick={() => exportPDF()}>PDF</CButton>
                                <CButton className="file-format-download" onClick={() => exportToCSV(usersData, 'Timecard of'+ " " +pdfTitle)} >Excel</CButton>

                                {/* <CButton className="file-format-download">Print</CButton> */}






                            </div>
                        </CCol>
                        }
                        {/**table for displaying all the entries */}
                        <CCol md="12">
                            <div className="mt-4">
                                <CDataTable items={usersData} fields={[
                                    {
                                        key: "#",
                                        _style: { width: "5%" },
                                        _classes: "font-weight-bold",
                                    },
                                    'TDO',
                                    'Project Name',
                                    'Task Title',
                                    'Actual Work Done',
                                    'Hrs Today',
                                    'Date Created',
                                    'Date Updated'

                                ]}
                                    primary
                                    hover
                                    striped
                                    bordered
                                    sorter
                                    columnFilter

                                    size="sm"
                                    itemsPerPage={10}
                                    pagination
                                >

                                </CDataTable>
                            </div>
                        </CCol>
                    </CRow>
                </CForm>

            </CContainer>



        </>
    )
}
export default TimeCards;