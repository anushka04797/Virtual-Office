import React, { useState } from 'react';
import "../timecards/timeCards.css";
import { useFormik } from "formik";
import { BASE_URL, USER_ID } from '../../Config';
import { API } from '../../Config';
import { CCol, CButton, CContainer, CForm, CRow, CLabel, CDataTable } from '@coreui/react';
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import CIcon from '@coreui/icons-react';
import moment from "moment";

const WeeklyTimecards = () => {
    const profile_details = useSelector(state => state.profile.data)
    const [tableData, setTabledata] = useState([]);
    let newArray = [];
    var defaultName = "all";
    // const [filterData, setFilterData] = useState([])
    const [pdfData, setPdfData] = useState([])
    const [pdfTitle, setPdfTitle] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [projectList, setProjectList] = useState([]);
    // const [assignee, setAssigneeValue] = useState();
    // const [assigneeList, setAssigneeList] = useState([])
    // const [new_array,setNewArray] = useState([])
    const [userData, setUserData] = useState([])
    const [totalHrs, setTotalHrs] = useState(0);
    // const dispatch = useDispatch();
    // const time_card_list_fetched = useSelector(state=>state.timecardList.status)
    // const timecardList = useSelector(state => state.timecardList.pm_timecards);
    // const colourStyles = {
    //     // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
    //     option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
    // };
    var project = []

    React.useEffect(() => {
        window.scrollTo(0, 0);
        // console.log(time_card_list_fetched)
        // API.get('project/assignees/all/'+ sessionStorage.getItem(USER_ID) + "/").then((res) => {
        // let assignees = [];
        // let temp=[]
        // Array.from(res.data.data).forEach((item, idx) => {
        //     temp.push({ data: item, value: item.id, label: capitalize(item.first_name) + " " + capitalize(item.last_name) })
        // })
        // setAssigneeList(temp)
        // setAssigneeList(assignees);
        // });
        API.get('wbs/user-wise/weekly-time-card/' + sessionStorage.getItem(USER_ID) + '/').then((res) => {
            setStartDate(res.data.start_date);
            setEndDate(res.data.end_date);
            if (res.data.data != undefined) {
                res.data.data.forEach((item, idx) => {
                    project.push(item.project.sub_task)
                    // if (project.length == 0){
                    //     project.push(item.project)
                    // }
                    // else if (project.length != 0){
                    //     project.find(ele => {
                    //         if(ele.id != item.project.id) {
                    //             project.push(item.project)
                    //         }
                    //     })
                    // }
                    var newItem = { id: idx, project: item.project, time_card_assignee: item.time_card_assignee, actual_work_done: item.actual_work_done, hours_today: item.hours_today, date_created: item.date_created, date_updated: item.date_updated };
                    // res.data.data.forEach(innerItem => {
                    //     if (innerItem.time_card_assignee.id == item.time_card_assignee.id) {
                    //         newItem.project = newItem.project.concat(innerItem.project);
                    //         newItem.time_card_assignee = innerItem.time_card_assignee;
                    //         newItem.actual_work_done = newItem.actual_work_done.concat(innerItem.actual_work_done);
                    //         newItem.hours_today = newItem.hours_today.concat(parseInt(innerItem.hours_today));
                    //         newItem.date_created = newItem.date_created.concat(innerItem.date_created);
                    //         newItem.date_updated = newItem.date_updated.concat(innerItem.date_updated);
                    //     }
                    // });
                    newArray.push(newItem);
                });
            }
            console.log(project)
            console.log('new array', newArray)
            // for (let i = 0; i < newArray.length; i++) {
            //     let key = newArray[i].time_card_assignee.id;
            //     for (let j = i + 1; j < newArray.length; j++) {
            //         if (newArray[j].time_card_assignee.id == key) {
            //             delete newArray.splice(j, 1);
            //         }
            //     }
            // }
            // console.log("unique effect", newArray);
            // setFilterData(newArray);
            setPdfData(newArray);
            setPdfTitle(defaultName);
            {/**let's populate the damn table,shall we?**/ }
            if (newArray.length != 0 || newArray != undefined) {
                let temp_array = tableData
                var temp_totalHrs = 0;
                for (let index = 0; index < newArray.length; index++) {
                    const element = newArray[index];
                    temp_totalHrs += parseFloat(element.hours_today);
                    {/**concat all projects */ }
                    // let projectList = [];
                    // var projectName;
                    // Array.from(element.project).map((item) => {
                    //     projectList.push(item.sub_task)
                    // })
                    // projectName = projectList.join(",")
                    {/**Conact all task title */ }
                    // let taskTitle = [];
                    // var taskTitles;
                    // Array.from(element.project).map((item) => {
                    //     taskTitle.push(item.task_title)
                    // })
                    // taskTitles = taskTitle.join(",")
                    {/**Concat all actual work */ }
                    // let actualList = [];
                    // var actualWork;
                    // Array.from(element.actual_work_done).map((item) => {
                    //     actualList.push(item)
                    // })
                    // actualWork = actualList.join(",")
                    {/**calculate total hours */ }
                    // var totalHrs = element.hours_today.reduce((total, currentVal) => total = total + currentVal, 0)
                    console.log(element.date_updated)
                    var weekday = moment(element.date_updated).weekday();
                    {/**final push to gtable */ }
                    temp_array.push({
                        'No.': index + 1,
                        'WBS': element.actual_work_done,
                        'Time': 'RHR',
                        'Sunday': weekday == 0 ? element.hours_today : '',
                        'Monday': weekday == 1 ? element.hours_today : '',
                        'Tuesday': weekday == 2 ? element.hours_today : '',
                        'Wednesday': weekday == 3 ? element.hours_today : '',
                        'Thursday': weekday == 4 ? element.hours_today : '',
                        'Friday': weekday == 5 ? element.hours_today : '',
                        'Saturday': weekday == 6 ? element.hours_today : '',
                        'Total': element.hours_today
                    })
                    console.log(moment(element.date_updated).weekday())
                }
                temp_array.push({
                    'No.': '',
                    'WBS': '',
                    'Time': '',
                    'Sunday': '',
                    'Monday': '',
                    'Tuesday': '',
                    'Wednesday': '',
                    'Thursday': '',
                    'Friday': '',
                    'Saturday': '',
                    'Total': 'Total = ' + temp_totalHrs.toFixed(1)
                })
                setTabledata(temp_array)
                setUserData(temp_array)
                setTotalHrs(temp_totalHrs.toFixed(1))
                console.log("tabledata from weekly timecard", totalHrs)
            }
        })
    }, [])

    React.useEffect(() => {
        setProjectList(project);
    }, []);

    {/**set value of form field*/ }
    // const getAssigneeList = (option) => {
    //     setAssigneeValue(option)
    //     editForm.setValues({
    //         assigneeSelect: option.value
    //     })
    // }

    {/**validate form */ }

    {/*function to filter timecards*/ }
    // const getTimeCards = (values) => {
    //     let singleUserData = [];
    //     singleUserData = filterData.filter(p => p.time_card_assignee.id == values.assigneeSelect);
    //     console.log("singleUserData", singleUserData)
    //     setPdfData(singleUserData);
    //     {/*populate the damned table again */ }
    //     if (singleUserData.length != 0 || singleUserData != undefined) {
    //         let temp_array1 = [];
    //         for (let index = 0; index < singleUserData.length; index++) {
    //             const element2 = singleUserData[index];
    //             setPdfTitle(element2.time_card_assignee.first_name + ' ' + element2.time_card_assignee.last_name);
    //             {/**concat all projects */ }
    //             var projectName;
    //             let projectList = [];
    //             Array.from(element2.project).map((item) => {
    //                 projectList.push(item.sub_task)
    //             })
    //             projectName = projectList.join(",");
    //             {/**Conact all task title */ }
    //             let taskTitle = [];
    //             var taskTitles;
    //             Array.from(element2.project).map((item) => {
    //                 taskTitle.push(item.task_title)
    //             })
    //             taskTitles = taskTitle.join(",");
    //             {/**Concat all actual work */ }
    //             let actualList = [];
    //             var actualWork;
    //             Array.from(element2.actual_work_done).map((item) => {
    //                 actualList.push(item)
    //             })
    //             actualWork = actualList.join(",")
    //             {/**calculate total hours */ }
    //             var totalHrs = element2.hours_today.reduce((total, currentVal) => total = total + currentVal, 0)
    //             var weekday = moment(element2.date_updated[0]).weekday();
    //             {/**once again push the filtered result to table */ }
    //             temp_array1.push({ 
    //                 'No.': index + 1, 
    //                 'WBS': actualWork, 
    //                 'Time': 'RHR', 
    //                 'Sunday': weekday == 0 ? totalHrs:'', 
    //                 'Monday': weekday == 1 ? totalHrs:'' , 
    //                 'Tuesday': weekday == 2 ? totalHrs:'' , 
    //                 'Wednesday': weekday == 3 ? totalHrs:'' , 
    //                 'Thursday': weekday == 4 ? totalHrs:'' , 
    //                 'Friday': weekday == 5 ? totalHrs:'' , 
    //                 'Saturday': weekday == 6 ? totalHrs:''
    //             })
    //         }
    //         setTabledata(temp_array1)
    //         setUserData(temp_array1)
    //         console.log("table data for speicifc user", tableData)
    //     }
    // }

    {/*initialize form */ }
    // const editForm = useFormik({
    //     initialValues: {
    //         assigneeSelect: "",
    //     },
    //     validateOnBlur: true,
    //     validateOnChange: true,
    //     onSubmit: getTimeCards
    // })

    {/**function for capitalizing the label */ }
    // function capitalize(string) {
    //     if (string != undefined) {
    //         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    //     }
    //     return ''
    // }

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

    /**export fetched data to pdf */
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);
        const title = "Timecard of" + " " + pdfTitle;
        const headers = [["No.", "Employee Name",
            "Project Name",
            "Task Title",
            "Actual Work Done",
            "Total Hr(s)"]];
        console.log("pdfData", pdfData)
        let actualData = [];
        for (let j = 0; j < pdfData.length; j++) {
            let element3 = pdfData[j];
            var assigneeName = element3.time_card_assignee.first_name + ' ' + element3.time_card_assignee.last_name;
            {/**Again fetch project Name */ }
            let projectList = [];
            var projectName;
            Array.from(element3.project).map((item) => {
                projectList.push(item.sub_task)
            })
            projectName = projectList.join(",")
            {/**Again fetch task title */ }
            let taskTitle = [];
            var taskTitles;
            Array.from(element3.project).map((item) => {
                taskTitle.push(item.task_title)
            })
            taskTitles = taskTitle.join(",")
            {/**Concat all actual work */ }
            let actualList = [];
            var actualWork;
            Array.from(element3.actual_work_done).map((item) => {
                actualList.push(item)
            })
            actualWork = actualList.join(",")
            {/**calculate total hours */ }
            var totalHrs = element3.hours_today.reduce((total, currentVal) => total = total + currentVal, 0)
            {/**remodified data for pdf array pushing */ }
            actualData.push({ "name": assigneeName, "project": projectName, "task_title": taskTitles, "actual_work": actualWork, "total_hrs": totalHrs });
        }
        console.log('actual data for pdf', actualData);
        const uData = actualData.map((elt, idx) =>
            [idx + 1, elt.name, elt.project, elt.task_title, elt.actual_work, elt.total_hrs])
        let content = {
            startY: 50,
            head: headers,
            body: uData
        };
        doc.text(title, marginLeft, 30);
        doc.autoTable(content);
        doc.save("Timecard of" + " " + pdfTitle + ".pdf")
    }

    return (
        <>
            <CContainer>
                <h3 className="timecards-page-header mb-3">Weekly Timecard</h3>
                {/**option to select particular emoloyee */}
                {/* <CForm className="mt-2">
                    <CRow>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                                Select Employee
                            </CLabel>
                            <Select
                                closeMenuOnSelect={true}
                                aria-labelledby="assigneeSelect"
                                id="assigneeSelect"
                                minHeight="35px"
                                classNamePrefix="custom-forminput-6"
                                styles={colourStyles}
                                onChange={getAssigneeList}
                                options={assigneeList}
                                placeholder="Select from list"
                                isClearable={false}
                                isMulti={false}
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <CButton className="generate-card-button" onClick={editForm.handleSubmit}>Generate Timecard</CButton>
                        </div>
                    </CRow>
                </CForm> */}
                {/**Show Table */}
                <CRow>
                    {/**Export buttons */}
                    {tableData.length != 0 && <CCol md="12">
                        <h5 className="tiny-header--5 mt-0">Export</h5>
                        <div className="format-buttons mt-3 mb-3">
                            <CButton className="file-format-download" onClick={() => exportPDF()}><CIcon name="cil-description" className="mr-2" />PDF</CButton>
                            <CButton className="file-format-download" onClick={() => exportToCSV(tableData, 'Timecard of' + " " + pdfTitle)} ><CIcon name="cil-spreadsheet" className="mr-2" />Excel</CButton>
                            {/* <CButton className="file-format-download">Print</CButton> */}
                        </div>
                    </CCol>
                    }
                    {/**view timecard data */}
                    <CCol md="4">
                        Name: {profile_details.first_name + " " + profile_details.last_name}<br/>
                        Phone: {profile_details.phone}
                    </CCol>
                    <CCol md="4">
                        Week: {moment(startDate).format("DD/MM/YYYY")} - {moment(endDate).format("DD/MM/YYYY")} <br />
                        Month: {moment(endDate).format('MMMM')} <br />
                        Year: {moment(endDate).format('YYYY')}
                    </CCol>
                    <CCol md="4">
                        Project: {[...new Set(projectList)].map((item, idx) => (
                            <span>{item}{idx < projectList.length-1 && <span>, </span>}</span>
                        ))}
                    </CCol>
                    {<CCol md="12">
                        <div className="mt-4 mb-2">
                            <CDataTable items={tableData} fields={[
                                {
                                    key: "No.",
                                    _style: { width: "5%" },
                                    _classes: "font-weight-bold",
                                },
                                'WBS',
                                'Time',
                                'Sunday',
                                'Monday',
                                'Tuesday',
                                'Wednesday',
                                'Thursday',
                                'Friday',
                                'Saturday',
                                'Total'
                            ]}
                                primary
                                hover
                                striped
                                bordered
                                size="sm"
                                itemsPerPage={10}
                                pagination
                            >
                            </CDataTable>
                            {/* <p className='text-right'><b>Total</b> = <b>{totalHrs}</b></p> */}
                        </div>
                    </CCol>}
                </CRow>
            </CContainer>
        </>
    )
}
export default WeeklyTimecards;