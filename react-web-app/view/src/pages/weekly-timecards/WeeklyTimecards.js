import React, { useState } from 'react';
import "../timecards/timeCards.css";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { CCol, CButton, CContainer, CForm, CRow, CLabel, CDataTable } from '@coreui/react';
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTimecardsPm } from '../../store/slices/TimecardSlice';
import { USER_ID } from '../../Config';
import { current } from 'immer';

const WeeklyTimecards = () => {
    var tableData = [];
    const [usersData, setUsersData] = useState([]);
    const dispatch = useDispatch();

    const timecardList = useSelector(state => state.timecardList.pm_timecards);
    console.log("data", timecardList)
    const colourStyles = {
        // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
        option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
    };

    var newArray = [];
    timecardList.forEach((item, idx) => {
        var newItem = { id: idx, project: [], time_card_assignee: item.time_card_assignee, actual_work_done: [], hours_today: [], date_created: [], date_updated: [] };
        timecardList.forEach(innerItem => {
            if (innerItem.time_card_assignee.id == item.time_card_assignee.id) {
                newItem.project = newItem.project.concat(innerItem.project);
                newItem.time_card_assignee = innerItem.time_card_assignee;
                newItem.actual_work_done = newItem.actual_work_done.concat(innerItem.actual_work_done);
                newItem.hours_today = newItem.hours_today.concat(innerItem.hours_today);
                newItem.date_created = newItem.date_created.concat(innerItem.date_created);
                newItem.date_updated = newItem.date_updated.concat(innerItem.date_updated);

            }
        });
        newArray.push(newItem);
    });
    //   console.log("newArray",newArray);
    /**make the entries unique */
    for (let i = 0; i < newArray.length; i++) {
        let key = newArray[i].time_card_assignee.id;
        for (let j = i + 1; j < newArray.length; j++) {
            if (newArray[j].time_card_assignee.id == key) {

                delete newArray.splice(j, 1);
            }

        }
    }

    console.log("unique effect", newArray);
    {/**let's populate the damn table,shall we?**/ }
    if (newArray.length != 0 || newArray != undefined) {
        for (let index = 0; index < newArray.length; index++) {
            const element = newArray[index];
            {/**concat all projects */}
            let projectList = [];
            var projectName;
            Array.from(element.project).map((item) => {
                projectList.push(item.sub_task)

            })
            projectName = projectList.join(",")
            {/**Conact all task title */}
            let taskTitle = [];
            var taskTitles;
            Array.from(element.project).map((item) => {
                taskTitle.push(item.task_title)
            })
            taskTitles = taskTitle.join(",")
            {/**Concat all actual work */}
            let actualList=[];
            var actualWork;
            Array.from(element.actual_work_done).map((item)=>
            {
                actualList.push(item)

                
            })
            actualWork=actualList.join(",")
            {/**calculate total hours */}
           let intHrs=element.hours_today.map(i =>Number(i))
         var totalHrs= intHrs.reduce((total,currentVal) => total=total+currentVal.prix,0)

            {/**final push to gtable */}

            tableData.push({ '#': index + 1, 'Employee Name': element.time_card_assignee.first_name + ' ' + element.time_card_assignee.last_name, 'Project': projectName, 'Task Title': taskTitles , 'Actual Work Done':actualWork,'Total Hr(s)':totalHrs})

        }
        console.log("tabledata from weekly timecard", tableData)

    }
    return (
        <>
            <CContainer>
                <h3 className="timecards-page-header mb-3">Weekly Timecard</h3>
                {/**option to select particular emoloyee */}

                <CForm className="mt-2">
                    <CRow>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                                Select Employee
                            </CLabel>
                            <Select
                                closeMenuOnSelect={true}
                                aria-labelledby="assigneeSelectPM"
                                id="assigneeSelectPM"
                                minHeight="35px"
                                classNamePrefix="custom-forminput-6"

                                styles={colourStyles}
                                placeholder="Select from list"
                                isClearable={false}
                                isMulti={false}

                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <CButton className="generate-card-button" >Generate Timecard</CButton>
                        </div>
                    </CRow>
                </CForm>
                {/**Show Table */}
                <CRow>
                    {/**Export buttons */}
                    <CCol md="12">
                        <h5 className="tiny-header--5 mt-4">Export</h5>
                        <div className="format-buttons mt-3">
                            <CButton className="file-format-download" >PDF</CButton>
                            <CButton className="file-format-download" >Excel</CButton>

                            {/* <CButton className="file-format-download">Print</CButton> */}

                        </div>
                    </CCol>
                    {/**view timecard data */}
                    <CCol md="12">
                        <div className="mt-4">
                            <CDataTable items={usersData} fields={[
                                {
                                    key: "#",
                                    _style: { width: "5%" },
                                    _classes: "font-weight-bold",
                                },
                                'Employee  Name',
                                'Project',
                                'Task Title',
                                'Actual Work Done',
                                'Total Hr(s)'

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
            </CContainer>
        </>
    )
}
export default WeeklyTimecards;