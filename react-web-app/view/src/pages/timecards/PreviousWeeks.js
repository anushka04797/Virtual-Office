import {
  CContainer,
  CRow,
  CCol,
  CForm,
  CLabel,
  CInput,
  CButton,
  CDataTable,
  CBadge,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CTextarea,
} from "@coreui/react";

import React, { useState, useEffect } from "react";
import "./timeCards.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, USER_ID } from "../../Config";
import { API } from "../../Config";
import { has_permission } from "../../helper";
import { useFormik } from "formik";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from "file-saver";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import * as fs from "fs";
import ExcelJS from "exceljs/dist/es5/exceljs.browser";

import CIcon from "@coreui/icons-react";
import moment from "moment";
import ReactDOM from "react-dom"; // you used 'react-dom' as 'ReactDOM'
import swal from "sweetalert";
import { useHistory, useLocation } from "react-router-dom";
import AddTimecardItms from "./addTimecardItem";
import EditTimeCard from "./Edit";

const PreviousWeeks = () => {
  const profile_details = useSelector((state) => state.profile.data);
  const history = useHistory();
  const location = useLocation();
  // console.log(profile_details)
  const [usersData, setUsersData] = useState([]);
  const [pdfData, setPdfData] = useState([]);
  // console.log('userdata', usersData)
  const [assignee, setAssigneeValue] = useState();
  const [selectedAssignee, setSelectedAssignee] = useState();
  const [pdfTitle, setPdfTitle] = useState();
  const [assigneeList, setAssigneeList] = useState([]);
  // const [selectedEmployee, setSelectedEmployee] = useState(initialState)
  {
    /**fetch all assignees for PM */
  }
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalHrs, setTotalHrs] = useState(0);
  const [modalData, setModalData] = useState("");

  const [modal, setModal] = useState();
  const [actualWorkDone, setActualWorkDone] = useState();
  const [hour, sethour] = useState();
  const [row, setRow] = useState();

  const getTimeCards = (values) => {
    console.log("working");
    setStartDate(values.startDate);
    setEndDate(values.todate);
    var temp_hrs = 0;
    // const section = document.querySelector("#tableRef");
    // section.scrollIntoView({ behavior: "smooth", block: "start" });
    if (
      has_permission("projects.add_projects") &&
      has_permission("wbs.change_timecard") &&
      has_permission("wbs.add_timecard")
    ) {
      // console.log('values from timecards', values)
      API.get("wbs/user/time-card/list/" + values.assigneeSelectPM + "/").then(
        (res) => {
          console.log(res.data.data);
          let temp = [];
          Array.from(res.data.data).forEach((item, idx) => {
            temp.push({ data: item });
          });

          let filteredData = [];
          filteredData = temp.filter(
            (p) =>
              p.data.date_updated >= values.startDate &&
              p.data.date_updated <= values.todate
          );
          // console.log('timecard for id', filteredData)
          setPdfData(filteredData);
          var tableData = [];
          for (let index = 0; index < filteredData.length; index++) {
            const element = filteredData[index];
            temp_hrs += parseFloat(element.data.hours_today);
            console.log("hours", temp_hrs);
            tableData.push({
              WP: element.data.project?.work_package_number
                ? element.data.project.work_package_number
                : "-",
              "Project Name": element.data.project?.sub_task
                ? element.data.project.sub_task
                : "-",
              "Task Title": element.data.project.task_title
                ? element.data.project.task_title
                : "-",
              Description: element.data.actual_work_done
                ? element.data.actual_work_done
                : "-",
              "Hour(s)": element.data.hours_today,
              Type: element.data.time_type,
              "Date Created": element.data.date_created,
              data: element.data,
            });
          }
          console.log("hours", temp_hrs);
          setTotalHrs(temp_hrs);
          setUsersData(tableData);
        }
      );
    } else {
      // console.log('values from timecards', values)
      API.get("wbs/user/time-card/list/" + values.assigneeSelect + "/").then(
        (res) => {
          let temp = [];
          console.log("zzzzzzzz", res.data.data);
          setPdfTitle(
            profile_details.first_name + " " + profile_details.last_name
          );
          Array.from(res.data.data).forEach((item, idx) => {
            // temp.push({data:item.date_updated >=values.startDate && item.date_updated <= values.todate})
            temp.push({ data: item });
          });

          let filteredData = [];
          filteredData = temp.filter(
            (p) =>
              p.data.date_updated >= values.startDate &&
              p.data.date_updated <= values.todate
          );
          console.log("timecard for id", filteredData);

          setPdfData(filteredData);
          setModalData(filteredData);

          var tableData = [];
          for (let index = 0; index < filteredData.length; index++) {
            const element = filteredData[index];
            temp_hrs += parseFloat(element.data.hours_today);
            console.log("hours", temp_hrs);
            tableData.push({
              WP: element.data.project
                ? element.data.project.work_package_number
                : "-",
              "Project Name":
                element.data.project != null
                  ? element.data.project?.sub_task
                  : "-",
              "Task Title":
                element.data.project != null
                  ? element.data.project.task_title
                  : "-",
              Description: element.data.actual_work_done
                ? element.data.actual_work_done
                : "",
              "Hour(s)": element.data.hours_today,
              Type: element.data.time_type,
              "Date Created": element.data.date_created,
              data: element.data,
            });
            //console.log("table", tableData);
          }
          console.log("table", tableData);
          setUsersData(tableData);
          console.log("hours", temp_hrs);
          setTotalHrs(temp_hrs);
        }
      );
    }
  };

  function capitalize(string) {
    if (string != undefined) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    return "";
  }
  {
    /**fetch all assignees for PM */
  }
  const [modaladdItem, setmodalAddItem] = useState(false);
  const [show_edit_modal, setShowEditModal] = useState(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    const { start, end } = dateRange();
    setTotalHrs(0);
    if (
      has_permission("projects.change_projectassignee") ||
      has_permission("projects.add_projectassignee")
    ) {
      API.get(
        "project/assignees/all/" + sessionStorage.getItem(USER_ID) + "/"
      ).then((res) => {
        let temp = [];
        if (res.data.data.length > 0) {
          Array.from(res.data.data).forEach((item, idx) => {
            temp.push({
              data: item,
              value: item.id,
              label:
                capitalize(item.first_name) + " " + capitalize(item.last_name),
            });
          });
        } else {
          temp.push({
            data: profile_details,
            value: profile_details.id,
            label:
              capitalize(profile_details.first_name) +
              " " +
              capitalize(profile_details.last_name),
          });
        }
        setAssigneeList(temp);
        setSelectedAssignee(temp[0]);
      });
    }
    API.get(
      "wbs/user/time-card/list/" + sessionStorage.getItem(USER_ID) + "/"
    ).then((res) => {
      setPdfTitle(profile_details.first_name + " " + profile_details.last_name);
      let temp = [];
      Array.from(res.data.data).forEach((item, idx) => {
        temp.push({ data: item });
      });
      let filteredData = temp;
      console.log("start", start);
      filteredData = temp.filter(
        (p) => p.data.date_updated >= start && p.data.date_updated <= end
      );
      setPdfData(filteredData);
      var tableData = [];
      for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        tableData.push({
          WP: element.data.project
            ? element.data.project.work_package_number
            : "-",
          "Project Name":
            element.data.project != null ? element.data.project?.sub_task : "-",
          "Task Title":
            element.data.project != null
              ? element.data.project?.task_title
              : "-",
          Description: element.data?.actual_work_done
            ? element.data?.actual_work_done
            : "-",
          "Hour(s)": element.data.hours_today,
          Type: element.data.time_type,
          "Date Created": element.data.date_created,
          data: element.data,
        });
      }
      setUsersData(tableData);
    });
  }, []);
  const handleAssigneeChange = (option) => {
    setSelectedAssignee(option);
    editForm.setValues({
      assigneeSelectPM: option.value,
      startDate: "",
      todate: "",
    });
    setPdfTitle(option.label);
  };
  const validateEditForm = (values) => {
    const errors = {};

    if (!values.startDate)
      errors.startDate = "Start Date selection is required";
    if (!values.todate) errors.todate = "To date selection is required";
    return errors;
  };

  const editForm = useFormik({
    initialValues: {
      assigneeSelect: sessionStorage.getItem(USER_ID),
      assigneeSelectPM: sessionStorage.getItem(USER_ID),
      startDate: "",
      todate: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validate: validateEditForm,
    onSubmit: getTimeCards,
  });

  const colourStyles = {
    // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
    option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
  };
  {
    /**export fetched tabledata to excel */
  }

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const exportToCSV = (pdfData, pdfTitle) => {
    console.log("llllllll", usersData);

    console.log("1111111111111111111111111111111111111111", pdfData);
    const ws = XLSX.utils.json_to_sheet(pdfData);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "");
    var wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    FileSaver.saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      pdfTitle + ".xlsx"
    );

    // const wb = { Sheets: { data: ws }, SheetNames: ["Sheet1"] };
    // const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    // const data = new Blob([excelBuffer], { type: fileType });

    // require('xlsx').readFile(pdfTitle + ".xlsx").Sheets.Merge['!merges']
    // [ { s: { c: 0, r: 0 }, e: { c: 1, r: 1 } },  // <-- The cell A1 represents the range A1:B2
    //   { s: { c: 2, r: 0 }, e: { c: 2, r: 1 } },  // <-- The cell C1 represents the range C1:C2
    //   { s: { c: 0, r: 2 }, e: { c: 1, r: 2 } },  // <-- The cell A3 represents the range A3:B3
    //   { s: { c: 3, r: 0 }, e: { c: 3, r: 1 } },  // <-- The cell D1 represents the range D1:D2
    //   { s: { c: 0, r: 3 }, e: { c: 1, r: 3 } } ] // <-- The cell A4 represents the range A4:B4

    //FileSaver.saveAs(data, fileName + fileExtension);
  };

  async function exportxl(pdfData, pdfTitle) {
    //console.log("pdf", pdfData)
    console.log("pdftitle", pdfTitle);
    const ExcelJS = require("exceljs");
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("sheet1");

    sheet.mergeCells("C1:E2");
    const customcell = sheet.getCell("C1");
    customcell.value = "Datasoft Manufacturing & Assembly";
    customcell.font = {
      size: 15,
      bold: true,
    };
    sheet.getCell("C1").alignment = {
      horizontal: "center",
      vertical: "center",
    };
    sheet.mergeCells("C3:E3");
    const customcell1 = sheet.getCell("C3");
    customcell1.value = "Gulshan Branch";
    customcell1.font = {
      size: 13,
      bold: true,
    };
    customcell1.alignment = {
      horizontal: "center",
      vertical: "center",
    };

    sheet.mergeCells("A5:B5");
    sheet.getCell("A5").value = "Employee Timecard";

    sheet.mergeCells("F6:G6");
    const endate = moment(endDate).format("DD/MM/YYYY");
    sheet.getCell("F6").value = "Week-Ending: " + endDate;

    sheet.mergeCells("A6:D6");
    sheet.getCell("A6").value = "Name: " + pdfTitle;

    var borderStyles = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" }
    };

    sheet.getRow(8).values = [
      "WP",
      "Project Name",
      "Task Title",
      "Description",
      "Hour(s)",
      "Type",
      "Date Created",
    ];
    sheet.getRow(8).font = {
      name: "Arial Black",
      family: 3,
      //color : { argb : '96c030' },
      size: 10,
      //bold: true
    };
    // sheet.getRow(9).alignment = {
    //  horizontal : "center"
    // }
    sheet.getRow(8).height = 20;
    sheet.columns = [
      { key: "wp", width: 10 },
      { key: "name", width: 30 },
      { key: "task_title", width: 32 },
      { key: "description", width: 32 },
      { key: "hours", width: 17 },
      { key: "type", width: 15 },
      { key: "date_created", width: 15 },
    ];

    for (let i = 0; i < pdfData.length; i++) {
      sheet.addRow({
        wp: pdfData[i].data.project.work_package_number,
        name: pdfData[i].data.project.sub_task,
        task_title: pdfData[i].data.project.task_title,
        description: pdfData[i].data.actual_work_done,
        hours: pdfData[i].data.hours_today,
        type: pdfData[i].data.time_type,
        date_created: pdfData[i].data.date_created,
      });
    }
    let row_num = pdfData.length + 11;
    if(totalHrs!=0){
    let cell_num = pdfData.length+8;
    sheet.getRow(cell_num).values = [
      '', '','','',
      "Total=" + Number(totalHrs).toFixed(2),
    ]
  }

    if (totalHrs != 0) {
    sheet.getRow(row_num).values = [
      "From " +
        startDate +
        " to " +
        endDate 
    ];
  }

    let day = new Date();
    let time = day.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    day = moment(day).format("DD/MM/YY");
    sheet.getRow(row_num + 1).values = ["Submitted : " + time + "  " + day];

    // sheet.columns.forEach(column => {
    //   column.border = {
    //     top: { style: "thin" },
    //     left: { style: "thin" },
    //     bottom: { style: "thin" },
    //     right: { style: "thin" }
    //   };
    // });



    const buffer = await workbook.xlsx.writeBuffer(pdfData);
    const fileType = "application/octet-stream";
    const fileExtension = ".xlsx";
    const blob = new Blob([buffer], { type: fileType });

    const fileName = "Time Card of " + pdfTitle + fileExtension;
    saveAs(blob, fileName);
    console.log("dataaaaaaaaaa", pdfData.length);
  }

  {
    /**export data as pdf */
  }
  const exportPDF = () => {
    console.log("total hours ", totalHrs);
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Timecard of" + " " + pdfTitle;

    const headers = [
      [
        "WP",
        "Project Name",
        "Task Title",
        "Description",
        "Hour(s)",
        "Type",
        "Date Created",
      ],
    ];

    const uData = pdfData.map((elt, idx) => [
      elt.data.project.work_package_number,
      elt.data.project.sub_task,
      elt.data.project.task_title,
      elt.data.actual_work_done,
      elt.data.hours_today,
      elt.data.time_type,
      elt.data.date_created,
    ]);

    let content = {
      startY: 145,
      head: headers,
      body: uData,
    };

    let day = new Date();
    let time = day.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    day = moment(day).format("DD/MM/YY");
    const edate = moment(endDate).format("DD/MM/YYYY");

    doc.setFontSize(17);
    doc.text(170, 50, "Datasoft Manufacturing & Assembly");
    doc.setFontSize(13);
    doc.text(245, 75, "Gulshan Branch");
    doc.setFontSize(11);
    doc.text(42, 105, "Employee Time Card");
    doc.text(410, 105, "Week-Ending: " + edate); //+ edate)
    doc.text(42, 125, "Name: " + pdfTitle); //+ name)

    let date = new Date();
    console.log("date", date);
    if (totalHrs != 0) {
      doc.text(
        315,
        420,
        "From " +
          startDate +
          " to " +
          endDate +
          "Total Hours " +
          Number(totalHrs).toFixed(2)
      );
    }

    doc.text(400, 435, "Submitted : " + time + "  " + day);

    doc.autoTable(content);
    doc.save("Timecard of" + " " + pdfTitle + ".pdf");
    console.log("data", pdfData);
  };

  const toggleModal = () => {
    setmodalAddItem(!modaladdItem);
  };

  const showModal = (tableItem) => {
    setRow(tableItem.data);
    setShowEditModal(true);
  };
  const hideModal = (tableItem) => {
    setModal(!row);
    setRow(null);
    setActualWorkDone(null);
    sethour(null);
  };

  const [selectedType, setSelectedType] = useState();

  const handleSelectChange = (option) => {
    setSelectedType(option);
    console.log(selectedType);
  };

  // const handleAssigneeChange = (option) => {
  //     setAssigneeValue(option)
  //     editForm.setValues({
  //         assigneeSelectPM: option.value,
  //         startDate:'',
  //         todate:''
  //     })
  //     setPdfTitle(option.label)
  // }
  const onAddItem = () => {
    setmodalAddItem(false);
  };

  const dateRange = () => {
    var sdate = new Date();
    var edate = new Date();

    for (let i = 0; i < 7; i++) {
      if (sdate.getDay() === 0) {
        console.log("start", sdate);
        break;
      } else {
        sdate = moment(sdate).subtract(1, "day").toDate();
      }
    }
    console.log("end date", edate);

    setStartDate(moment(sdate).format("YYYY-MM-DD"));
    setEndDate(nextSatDay());
    // editForm.setValues({
    //   assigneeSelect: sessionStorage.getItem(USER_ID),
    //   assigneeSelectPM: sessionStorage.getItem(USER_ID),
    //   startDate: moment(sdate).format('YYYY-MM-DD'),
    //   todate:  moment(edate).format('YYYY-MM-DD'),
    // })
    return {
      start: moment(sdate).format("YYYY-MM-DD"),
      // end: moment(edate).format("YYYY-MM-DD"),
      end: nextSatDay(),
    };
  };
  const nextSatDay = () => {
    var satday = new Date();
    for (let i = 0; i < 7; i++) {
      if (satday.getDay() === 6) {
        console.log("sat", satday);
        break;
      } else {
        satday = moment(satday).add(1, "day").toDate();
      }
    }
    satday = moment(satday).format("YYYY-MM-DD");
    return satday;
  };
  React.useEffect(() => {
    dateRange();
    nextSatDay();
  }, []);

  const show_submit = () => {
    if (editForm.values.startDate && editForm.values.todate) {
      return true;
    } else return false;
  };

  const show_add_item_btn = () => {
    if (editForm.values.assigneeSelectPM == sessionStorage.getItem(USER_ID)) {
      return true;
    }
    return false;
  };

  const onToDateChange = (event) => {
    editForm.handleChange(event);
    let values = editForm.values;
    values["todate"] = event.target.value;
    getTimeCards(values);
  };
  return (
    <>
      <CContainer>
        <CRow className="justify-content-between">
          <CCol>
            <h3 className="timecards-page-header mb-3">Actual Hours</h3>
          </CCol>
          <CCol md="8" id="tableRef" className="d-flex justify-content-end">
            <h5 className="tiny-header--5 mt-3 mr-2">Export </h5>
            <div className="format-buttons mt-3 mb-3 ">
              <CButton
                className="file-format-download"
                onClick={() => exportPDF()}
              >
                <CIcon name="cil-description" className="mr-2" /> PDF
              </CButton>
              <CButton
                className="file-format-download"
                onClick={
                  () => exportxl(pdfData, pdfTitle)
                  //exportToCSV(usersData, "Timecard of" + " " + pdfTitle)
                }
              >
                <CIcon name="cil-spreadsheet" className="mr-2" />
                Excel
              </CButton>
              {/* <CButton className="file-format-download">Print</CButton> */}
            </div>
          </CCol>
        </CRow>
        <CForm>
          <CRow>
            {/**assignees */}
            {has_permission("projects.add_projects") && (
              <CCol xl="3" lg="3" md="6">
                {/* {!has_permission("projects.add_projects") && (
                  <div>
                    <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                      Select Employee
                    </CLabel>
                    <CInput
                      name="assigneeSelect"
                      type="text"
                      value={
                        capitalize(profile_details.first_name) +
                        " " +
                        capitalize(profile_details.last_name)
                      }
                      onChange={editForm.handleChange}
                      readOnly
                    />
                  </div>
                )} */}
                {/**IF PM */}

                <div>
                  <CLabel className="custom-label-5" htmlFor="assigneeSelectPM">
                    Select Employee
                  </CLabel>
                  <Select
                    closeMenuOnSelect={true}
                    aria-labelledby="assigneeSelectPM"
                    id="assigneeSelectPM"
                    minHeight="35px"
                    placeholder={
                      capitalize(profile_details.first_name) +
                      " " +
                      capitalize(profile_details.last_name)
                    }
                    isClearable={false}
                    isMulti={false}
                    value={selectedAssignee}
                    onChange={handleAssigneeChange}
                    classNamePrefix="custom-forminput-6"
                    options={assigneeList}
                    styles={colourStyles}
                  />
                  {/* {editForm.errors.assigneeSelectPM && <p className="error mt-1">{editForm.errors.assigneeSelectPM}</p>} */}
                </div>
              </CCol>
            )}

            {/***********for archive***********/}
            {/**start date */}
            <CCol xl="3" lg="3" md="6">
              <CLabel className="custom-label-5" htmlFor="startDate">
                From Date
              </CLabel>
              <CInput
                className="custom-forminput-6  w-100"
                type="date"
                name="startDate"
                id="startDate"
                value={editForm.values.startDate}
                onChange={editForm.handleChange}
              />

              {editForm.errors.startDate && (
                <p className="error mt-0 mb-0">
                  <small>{editForm.errors.startDate}</small>
                </p>
              )}
            </CCol>
            {/**END DATE */}
            <CCol xl="3" lg="3" md="6">
              <CLabel className="custom-label-5" htmlFor="todate">
                To Date
              </CLabel>
              <CInput
                className="custom-forminput-6  w-100"
                type="date"
                name="todate"
                id="todate"
                value={editForm.values.todate}
                onChange={onToDateChange}
              />
              {/**Error show */}
              {editForm.errors.todate && (
                <p className="error mt-0 mb-0">
                  <small>{editForm.errors.todate}</small>
                </p>
              )}
            </CCol>

            {/* <CCol xl="3" lg="3" md="6">
              <div className="button-holder--3">
                <CButton
                  className="generate-card-button"
                  onClick={editForm.handleSubmit}
                >
                  Show
                </CButton>
              </div>
            </CCol> */}
            {/**buttons for format of timecard */}
            <CRow className="mt-4">
              <CCol>
                <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                  Company :{" "}
                  {profile_details.slc_details?.slc?.department?.company?.name}
                </CLabel>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="4">
                <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                  Employee Name :{" "}
                  {capitalize(selectedAssignee?.data?.first_name) +
                    " " +
                    capitalize(selectedAssignee?.data?.last_name)}
                </CLabel>
              </CCol>
            </CRow>

            {/* {usersData.length > 0 && (
                <div className="alert alert-info" role="alert">
                  Showing actual hours from {moment(startDate).format("DD-MM-YYYY")} to{" "}
                  {moment(endDate).format("DD-MM-YYYY")}
                </div>
              )} */}

            {/**table for displaying all the entries */}
            <CRow className="mt-4 mb-4">
              <div className="">
                <CDataTable
                  items={usersData}
                  fields={[
                    {
                      key: "WP",
                      _style: { width: "5%" },
                      _classes: "font-weight-bold",
                    },
                    "Project Name",
                    "Task Title",
                    "Description",
                    "Hour(s)",
                    "Type",
                    "Date Created",
                  ]}
                  primary
                  hover
                  // tableFilter
                  striped
                  bordered
                  sorter
                  //columnFilter
                  size="sm"
                  itemsPerPage={10}
                  pagination
                  scopedSlots={
                    {
                      // Action: (item) => (
                      //   <td>
                      //     {item.data.submitted == false ? (
                      //       <CBadge>
                      //         <CButton
                      //           onClick={() => {
                      //             showModal(item);
                      //           }}
                      //           size="sm"
                      //           type="button"
                      //           color="primary"
                      //         >
                      //           Edit
                      //         </CButton>
                      //       </CBadge>
                      //     ) : (
                      //       "N/A"
                      //     )}
                      //   </td>
                      // ),
                    }
                  }
                />
              </div>

              {totalHrs != 0 && (
                <div class="alert alert-info" role="alert">
                  <CRow>
                    <CCol md="5"></CCol>
                    <CCol md="3">
                      {
                        <small>
                          {"     "}
                          From <b>
                            {moment(startDate).format("DD-MMM-YY")}
                          </b> to <b>{moment(endDate).format("DD-MMM-YY")}</b>
                        </small>
                      }
                    </CCol>
                    <CCol md="4">
                      {
                        <small>
                          {"   "}
                          Total <b>{totalHrs.toFixed(2)} hrs&nbsp;</b>
                        </small>
                      }
                    </CCol>
                  </CRow>
                </div>
              )}
            </CRow>
          </CRow>
        </CForm>
      </CContainer>
    </>
  );
};
export default PreviousWeeks;
