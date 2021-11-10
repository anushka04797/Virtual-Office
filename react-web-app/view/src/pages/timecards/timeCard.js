import { CContainer, CRow, CCol, CForm, CLabel, CInput, CButton, CDataTable } from '@coreui/react';
import React, { useState, useEffect } from 'react'
import "./timeCards.css"
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, USER_ID } from '../../Config';
import { API } from '../../Config';
import { has_group } from '../../helper';
import { useFormik } from "formik";
import { fetchPersonalDetails } from "../../store/slices/ProfileSlice";
const TimeCards = () => {
    const profile_details = useSelector(state => state.profile.data)
    const [usersData, setUsersData] = useState([])
 
    const getTimeCards = (values) => {
        console.log('values from timecards', values)
        API.get('wbs/user/time-card/list/' + values.assigneeSelect + "/").then((res) => {
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                // temp.push({data:item.date_updated >=values.startDate && item.date_updated <= values.todate})
                temp.push({ data: item })
            })
            let filteredData = [];
            filteredData = temp.filter(p => p.data.date_updated >= values.startDate && p.data.date_updated <= values.todate)
            console.log('timecard for id', filteredData)
            var tableData = [];
            for (let index = 0; index < filteredData.length; index++) {
                const element = filteredData[index];
                tableData.push({ '#': index + 1, 'TDO': element.data.project.task_delivery_order.title, "Project Name": element.data.project.sub_task, "Task Title": element.data.project.task_title, "Actual Work Done": element.data.actual_work_done, "Hrs Today": element.data.hours_today, "Date Created": element.data.date_created, "Date Updated": element.data.date_updated })
            }
            setUsersData(tableData)
        })

    }
    const projects = useSelector(state => state.projects.pm_projects)

 console.log("pM projects", projects);
 var singleProject=[];
 Array.from(projects).forEach((item,idx)=>{
     singleProject.push({data:item.assignees})
 })
console.log(singleProject)

    const validateEditForm = (values) => {
        const errors = {}
        if (!values.assigneeSelect) errors.assigneeSelect = "Employee name selection is required"
        if (!values.startDate) errors.startDate = "Start Date selection is required"
        if (!values.todate) errors.todate = "To date selection is required"
        return errors
    }
    const editForm = useFormik({
        initialValues: {
            assigneeSelect: localStorage.getItem(USER_ID),
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
    const options = [
        { value: "1", label: "Kibria Papel" },
        { value: "2", label: "Pial Noman" },
        { value: "3", label: "Saif Azad" },
        { value: "4", label: "Fahmida Sharmin Pranto" },
    ];
    function capitalize(string) {
        if (string != undefined) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
        return ''
    }
    const handleChange = (field, value) => {
        switch (field) {
            case "options":
                setProjectValue(value);
                break;
            default:
                break;
        }
    };
    const [projectValue, setProjectValue] = useState("");

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
                                    <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                                        Select Employee
                                    </CLabel>
                                    <Select
                                        closeMenuOnSelect={true}
                                        aria-labelledby="assigneeSelect"
                                        id="assigneeSelect"
                                        minHeight="35px"
                                        placeholder="Select from list"
                                        isClearable={false}
                                        isMulti={false}
                                        onChange={(value) => handleChange("options", value)}
                                        classNamePrefix="custom-forminput-6"
                                        value={projectValue}
                                        options={options}
                                        styles={colourStyles}
                                    />
                                </div>
                            }
                        </CCol>
                        {/**start date */}
                        <CCol lg="3" md="5">
                            <CLabel className="custom-label-5" htmlFor="startDate">
                                From Date
                            </CLabel>
                            <CInput className="custom-forminput-6" type="date" name="startDate" id="startDate" value={editForm.values.startDate} onChange={editForm.handleChange} />
                        </CCol>
                        {/**END DATE */}
                        <CCol lg="3" md="5">

                            <CLabel className="custom-label-5" htmlFor="todate">
                                To Date
                            </CLabel>
                            <CInput className="custom-forminput-6" type="date" name="todate" id="todate" value={editForm.values.todate} onChange={editForm.handleChange} />
                        </CCol>
                        <CCol lg="2" md="2">
                            <div className="button-holder--3">
                                <CButton className="generate-card-button" onClick={editForm.handleSubmit}>Go</CButton>
                            </div>
                        </CCol>

                        {/**buttons for format of timecard */}
                        <CCol md="12">
                            <h5 className="tiny-header--5 mt-4">Export</h5>
                            <div className="format-buttons mt-2">
                                <CButton className="file-format-download">PDF</CButton>
                                <CButton className="file-format-download">Excel</CButton>

                                <CButton className="file-format-download">Print</CButton>






                            </div>
                        </CCol>
                        {/**table for displaying all the entries */}
                        <CCol md="12">
                            <div className="mt-3">
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