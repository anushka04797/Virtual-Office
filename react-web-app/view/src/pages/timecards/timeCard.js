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
import * as XLSX from "xlsx";
import { fetchPersonalDetails } from "../../store/slices/ProfileSlice";
import CIcon from "@coreui/icons-react";
import moment from "moment";
import ReactDOM from "react-dom"; // you used 'react-dom' as 'ReactDOM'
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import AddTimecardItms from "./addTimecardItem";

const TimeCards = () => {
  const profile_details = useSelector((state) => state.profile.data);
  const history = useHistory();
  // console.log(profile_details)
  const [usersData, setUsersData] = useState([]);
  const [pdfData, setPdfData] = useState([]);
  // console.log('userdata', usersData)
  const [assignee, setAssigneeValue] = useState();
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
  const [timecardmodal, settimecardModal] = useState(false);

  const getTimeCards = (values) => {
    setStartDate(values.startDate);
    setEndDate(values.todate);
    var temp_hrs = 0;
    const section = document.querySelector("#tableRef");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    if (
      has_permission("projects.add_projects") &&
      has_permission("wbs.change_timecard") &&
      has_permission("wbs.add_timecard")
    ) {
      // console.log('values from timecards', values)
      API.get("wbs/user/time-card/list/" + values.assigneeSelectPM + "/").then(
        (res) => {
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
            tableData.push({
              "#": index + 1,
              "Project Name (Work Package)":
                element.data.project.sub_task +
                " (" +
                element.data.project.work_package_number +
                ")",
              "Task Title": element.data.project.task_title,
              "Actual Work Done": element.data.actual_work_done,
              "Hour(s)": element.data.hours_today,
              "Date Created": element.data.date_created,
              data: element.data,
            });
          }
          setTotalHrs(temp_hrs);
          setUsersData(tableData);
        }
      );
      // editForm.setValues({
      //     assigneeSelect: '',
      //     assigneeSelectPM: values.assigneeSelectPM,
      //     startDate: '',
      //     todate: ''
      // })
    } else {
      // console.log('values from timecards', values)
      API.get("wbs/user/time-card/list/" + values.assigneeSelect + "/").then(
        (res) => {
          let temp = [];
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
            tableData.push({
              "#": index + 1,
              "Project Name (Work Package)":
                element.data.project.sub_task +
                " (" +
                element.data.project.work_package_number +
                ")",
              "Task Title": element.data.project.task_title,
              "Description": element.data.actual_work_done?element.data.actual_work_done:'',
              "Hour(s)": element.data.hours_today,
              "Date Created": element.data.date_created,
              data: element.data,
            });
            //console.log("table", tableData);
          }
          console.log("table", tableData);
          setUsersData(tableData);
          setTotalHrs(temp_hrs);
        }
      );
      // editForm.setValues({
      //     assigneeSelect: values.assigneeSelect,
      //     assigneeSelectPM: '',
      //     startDate: '',
      //     todate: ''
      // })
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
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
      });
    }
    API.get(
      "wbs/user/time-card/list/" + sessionStorage.getItem(USER_ID) + "/"
    ).then((res) => {
      let temp = [];
      Array.from(res.data.data).forEach((item, idx) => {
        temp.push({ data: item });
      });
      let filteredData = [];
      filteredData = temp;
      setPdfData(filteredData);
      var tableData = [];
      for (let index = 0; index < filteredData.length; index++) {
        const element = filteredData[index];
        tableData.push({
          "#": index + 1,
          "Project Name (Work Package)":
            element.data.project?.sub_task?element.data.project?.sub_task:'N/A' +
            " (" +
            element.data.project?.work_package_number +
            ")",
          "Task Title": element.data.project?.task_title?element.data.project?.task_title:'N/A',
          "Description": element.data?.actual_work_done?element.data?.actual_work_done:'N/A',
          "Hour(s)": element.data.hours_today,
          Type: element.data.time_type,
          "Date Created": element.data.date_created,
          data: element.data,
        });
      }
      setUsersData(tableData);
    });
  }, []);
  const getAssigneeList = (option) => {
    setAssigneeValue(option);
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
  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  {
    /**export data as pdf */
  }
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Timecard of" + " " + pdfTitle;
    const headers = [
      [
        "#",
        "Project Name (Work Package)",
        "Task Title",
        "Actual Work Done",
        "Hour(s)",
        "Date Created",
      ],
    ];
    const uData = pdfData.map((elt, idx) => [
      idx + 1,
      elt.data.project.sub_task +
      " (" +
      elt.data.project.work_package_number +
      ")",
      elt.data?.project.task_title,
      elt.data.actual_work_done,
      elt.data.hours_today,
      elt.data.date_created,
    ]);
    let content = {
      startY: 50,
      head: headers,
      body: uData,
    };

    doc.text(title, marginLeft, 30);
    doc.autoTable(content);
    doc.save("Timecard of" + " " + pdfTitle + ".pdf");
  };

  const profile = useSelector((state) => state.profile.data);
  const [modal, setModal] = useState();
  const [actualWorkDone, setActualWorkDone] = useState();
  const [hour, sethour] = useState();
  const [row, setRow] = useState();
  const [modaladdItem, setmodalAddItem] = useState(false);

  const toggleModal = () => {
    setmodalAddItem(!modaladdItem);
  };

  const showModal = (tableItem) => {
    //setModal(!row);
    setRow(tableItem.data);
    setActualWorkDone(tableItem.data.actual_work_done);
    sethour(tableItem.data.hours_today);

    console.log("table", tableItem.data);
  };
  const hideModal = (tableItem) => {
    setModal(!row);
    setRow(null);
    setActualWorkDone(null);
    sethour(null);
    dateRange();
  };

  const onSave = () => {
    //setActualWorkDone();
    //sethour();
    console.log("work ", actualWorkDone);
    hideModal();
  };

  const [selectedType, setSelectedType] = useState();
  const types = [
    { label: "RHR", value: 1 },
    { label: "SIC", value: 2 },
    { label: "VAC", value: 3 },
    { label: "OTS", value: 4 },
    { label: "OTO", value: 5 },
    { label: "HOL", value: 6 },
    { label: "WFH", value: 7 },
  ];

  const handleSelectChange = (option) => {
    setSelectedType(option);
    console.log(selectedType);
  };

  // const getAssigneeList = (option) => {
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
    //dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)))
  };

  const onSubmit = () => {
    swal({
      title: "Are you sure?",
      text: "Once submitted, you will not be able to revert!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          let temp = [];
          for (let i = 0; i < usersData.length; i++) {
            //console.log("data", usersData[i]);
            temp[i] = usersData[i].data.id;
          }
          console.log("id", temp)

          API.put("wbs/time-card/submit/", { time_cards: temp }).then(res => {
            console.log(res.data)
            const unit = "pt";
            const size = "A4"; // Use A1, A2, A3 or A4
            const orientation = "portrait"; // portrait or landscape

            const marginLeft = 40;
            const doc = new jsPDF(orientation, unit, size);
            doc.setFontSize(15);
            const title = "Timecard of" + " " + pdfTitle + '\n From ' + startDate + ' to ' + endDate;
            const headers = [
              [
                "#",
                "Project Name (Work Package)",
                "Task Title",
                "Actual Work Done",
                "Hour(s)",
                "Date Created",
              ],
            ];
            const uData = usersData.map((elt, idx) => [
              idx + 1,
              elt.data.project.sub_task +
              " (" +
              elt.data.project.work_package_number +
              ")",
              elt.data?.project.task_title,
              elt.data.actual_work_done,
              elt.data.hours_today,
              elt.data.date_created,
            ]);
            let content = {
              startY: 50,
              head: headers,
              body: uData,
            };

            doc.text(title, marginLeft, 30);
            doc.autoTable(content);
            doc.save("Timecard of" + " " + pdfTitle + ".pdf");

            swal('Submitted', 'Your selected time cards are submitted!', 'success')
          })

        }
      });






  }

  const dateRange =() => {
    
    const today = new Date();
    const date = today.getDate();
    console.log("date", date );

  }

  return (
    <>
      <CModal
        //show={showModal}
        show={row == undefined ? false : true}
        onClose={hideModal}
        toggle={toggleModal}
      >
        <CModalHeader closeButton>
          {" "}
          Project Name (Work Package) : {row?.project.sub_task} (
          {row?.project.work_package_number}){" "}
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol className="col-md-12 mb-3">
            <CLabel class="form-label">  Task Title : </CLabel>
            <CInput  value= {row?.project.task_title} disabled >
            
            </CInput>
          </CCol>
            <CCol className="col-md-12 mb-3">
              
                <CLabel class="form-label">Actual Work Done :</CLabel>
                <CTextarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={actualWorkDone}
                  onChange={(e) => setActualWorkDone(e.target.value)}
                >
                  {" "}
                </CTextarea>
              
            </CCol>
            <CCol className="col-md-12 mb-3" >
            <CLabel class="form-label"> Hour(s):</CLabel>
             
              <CInput
                className="custom-forminput-5"
                type="number"
                aria-label="default input example"
                value={hour}
                onChange={(e) => sethour(e.target.value)}
              ></CInput>
              {/*{sethour(row?.sethour)}*/}
            </CCol>
            <CCol className="col-md-12 mb-3">
              {/*Type : {row?.time_type}*/}
              <CLabel
                className="custom-label-5"
                htmlFor="assigneeSelectPM"
                loseMenuOnSelect={true}
                isClearable={false}
                isMulti={false}
              >
                Type :
              </CLabel>
              <Select options={types} onChange={handleSelectChange} />
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={onSave}>
            save
          </CButton>{" "}
          <CButton color="secondary" onClick={hideModal}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>

      <AddTimecardItms
       toggle={toggleModal}
        show={modaladdItem}
        onClose={onAddItem}
      ></AddTimecardItms>
      <CContainer>
        <h3 className="timecards-page-header mb-3">Actual Work Done</h3>
        <CForm>
          <CRow>
            {/**assignees */}
            <CCol xl="3" lg="3" md="6">
              {!has_permission("projects.add_projects") && (
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
              )}
              {/**IF PM */}
              {has_permission("projects.add_projects") && (
                <div>
                  <CLabel className="custom-label-5" htmlFor="assigneeSelectPM">
                    Select Employee
                  </CLabel>
                  <Select
                    closeMenuOnSelect={true}
                    aria-labelledby="assigneeSelectPM"
                    id="assigneeSelectPM"
                    minHeight="35px"
                    // value={}
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
              )}
              {/**If PM but no assignee list **/}
              {/* {has_group('pm')&& (assigneeList.length == 0) &&
                                <div>
                                    <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                                        Select Employee
                                    </CLabel>
                                    <CInput name="assigneeSelect" type="text" value={capitalize(profile_details.first_name) + ' ' + capitalize(profile_details.last_name)} onChange={editForm.handleChange} readOnly />
                                </div>
                            } */}
            </CCol>
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
              {/**Error show */}
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
                onChange={editForm.handleChange}
              />
              {/**Error show */}
              {editForm.errors.todate && (
                <p className="error mt-0 mb-0">
                  <small>{editForm.errors.todate}</small>
                </p>
              )}
            </CCol>
            <CCol xl="3" lg="3" md="6">
              <div className="button-holder--3">
                <CButton
                  className="generate-card-button"
                  onClick={editForm.handleSubmit}
                >
                  Get TimeCards
                </CButton>
              </div>
            </CCol>
            {/**buttons for format of timecard */}
            {usersData != 0 && (
              <CCol md="12" id="tableRef">
                <h5 className="tiny-header--5 mt-3">Export</h5>
                <div className="format-buttons mt-3 mb-3">
                  <CButton
                    className="file-format-download"
                    onClick={() => exportPDF()}
                  >
                    <CIcon name="cil-description" className="mr-2" /> PDF
                  </CButton>
                  <CButton
                    className="file-format-download"
                    onClick={() =>
                      exportToCSV(usersData, "Timecard of" + " " + pdfTitle)
                    }
                  >
                    <CIcon name="cil-spreadsheet" className="mr-2" />
                    Excel
                  </CButton>
                  {/* <CButton className="file-format-download">Print</CButton> */}
                </div>
                {totalHrs != 0 && (
                  <div class="alert alert-info" role="alert">
                    {
                      <small>
                        Total <b>{totalHrs.toFixed(1)}hrs&nbsp;</b>
                      </small>
                    }
                    {
                      <small>
                        {" "}
                        from <b>
                          {moment(startDate).format("DD-MMM-YY")}
                        </b> to <b>{moment(endDate).format("DD-MMM-YY")}</b>
                      </small>
                    }
                  </div>
                )}
              </CCol>
            )}
            {/**table for displaying all the entries */}
            <CCol md="12">
              <div className="">
                <CDataTable
                  items={usersData}
                  fields={[
                    {
                      key: "#",
                      _style: { width: "5%" },
                      _classes: "font-weight-bold",
                    },
                    "Project Name (Work Package)",
                    "Task Title",
                    "Actual Work Done",
                    "Hour(s)",
                    "Type",
                    "Date Created",
                    "Action",
                  ]}
                  primary
                  hover
                  tableFilter
                  striped
                  bordered
                  sorter
                  //columnFilter
                  size="sm"
                  itemsPerPage={10}
                  pagination
                  scopedSlots={{
                    Action: (item) => (
                      <td>
                        <CBadge>
                          <CButton
                            onClick={() => {
                              showModal(item);
                            }}
                            size="sm"
                            type="button"
                            color="primary"
                          >
                            Edit
                          </CButton>
                        </CBadge>
                      </td>
                    ),
                  }}
                ></CDataTable>
                <div className="format-buttons mt-3 mb-3">
                  <CButton
                    className="file-format-download"
                    onClick={() => {
                      setmodalAddItem(true);
                    }}
                  >
                    {" "}
                    + Add Item
                  </CButton>
                  <CButton className="file-format-download" onClick={onSubmit}>Submit </CButton>
                  {/* <CButton className="file-format-download">Print</CButton> */}
                </div>
              </div>
              {totalHrs != 0 && (
                <div class="alert alert-info" role="alert">
                  {
                    <small>
                      Total <b>{totalHrs.toFixed(1)}hrs&nbsp;</b>
                    </small>
                  }
                  {
                    <small>
                      {" "}
                      from <b>
                        {moment(startDate).format("DD-MMM-YY")}
                      </b> to <b>{moment(endDate).format("DD-MMM-YY")}</b>
                    </small>
                  }
                </div>
              )}
            </CCol>
          </CRow>
        </CForm>
      </CContainer>
    </>
  );
};
export default TimeCards;
