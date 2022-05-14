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
  import * as fs from 'fs';
  
  import CIcon from "@coreui/icons-react";
  import moment from "moment";
  import ReactDOM from "react-dom"; // you used 'react-dom' as 'ReactDOM'
  import swal from "sweetalert";
  import { useHistory, useLocation } from "react-router-dom";
  import AddTimecardItms from "./addTimecardItem";
  import EditTimeCard from "./Edit";
  
  const TimeCards = () => {
    const profile_details = useSelector((state) => state.profile.data);
    const history = useHistory();
    const location = useLocation()
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
              tableData.push({
                WP: element.data.project?.work_package_number
                  ? element.data.project.work_package_number
                  : "-",
                "Project Name": element.data.project?.sub_task
                  ? element.data.project.sub_task
                  : "N/A",
                "Task Title": element.data.project.task_title
                  ? element.data.project.task_title
                  : "N/A",
                Description: element.data.actual_work_done
                  ? element.data.actual_work_done
                  : "N/A",
                "Hour(s)": element.data.hours_today,
                Type: element.data.time_type,
                "Date Created": element.data.date_created,
                data: element.data,
              });
            }
            setTotalHrs(temp_hrs);
            setUsersData(tableData);
          }
        );
      } else {
        // console.log('values from timecards', values)
        API.get("wbs/user/time-card/list/" + values.assigneeSelect + "/").then(
          (res) => {
            let temp = [];
            console.log("zzzzzzzz", profile_details);
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
                WP: element.data.project
                  ? element.data.project.work_package_number
                  : "-",
                "Project Name":
                  element.data.project != null
                    ? element.data.project?.sub_task
                    : "N/A",
                "Task Title":
                  element.data.project != null
                    ? element.data.project.task_title
                    : "N/A",
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
        });
      }
      API.get(
        "wbs/user/time-card/list/" + sessionStorage.getItem(USER_ID) + "/"
      ).then((res) => {
        setPdfTitle(
          profile_details.first_name + " " + profile_details.last_name
        );
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
              element.data.project != null
                ? element.data.project?.sub_task
                : "N/A",
            "Task Title":
              element.data.project != null
                ? element.data.project?.task_title
                : "N/A",
            Description: element.data?.actual_work_done
              ? element.data?.actual_work_done
              : "N/A",
            "Hour(s)": element.data.hours_today,
            Type: element.data.time_type,
            "Date Created": element.data.date_created,
            data: element.data,
          });
        }
        setUsersData(tableData);
      });
    }, [modaladdItem, show_edit_modal]);
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
      const wb = { Sheets: { data: ws }, SheetNames: ["" + startDate + ' - ' + endDate] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
    }
  
  
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
          "WP",
          "Project Name",
          "Task Title",
          "Actual Work Done",
          "Hour(s)",
          "Date Created",
        ],
      ];
      const uData = pdfData.map((elt, idx) => [
        elt.data.project.work_package_number,
        elt.data.project.sub_task,
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
    };
  
    const onSubmit = () => {
      swal({
        title: "Are you sure?",
        text: "Once submitted, you will not be able to revert!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          let temp = [];
          for (let i = 0; i < usersData.length; i++) {
            //console.log("data", usersData[i]);
            temp[i] = usersData[i].data.id;
          }
          console.log("id", temp);
  
          API.put("wbs/time-card/submit/", { time_cards: temp }).then((res) => {
            console.log(res.data);
            const unit = "pt";
            const size = "A4"; // Use A1, A2, A3 or A4
            const orientation = "portrait"; // portrait or landscape
  
            const marginLeft = 40;
            const doc = new jsPDF(orientation, unit, size);
            doc.setFontSize(15);
            const title =
              "Timecard of" +
              " " +
              pdfTitle +
              "\n From " +
              startDate +
              " to " +
              endDate;
            const headers = [
              [
                "WP",
                "Project Name ",
                "Task Title",
                "Description",
                "Hour(s)",
                "Date Created",
              ],
            ];
            const uData = usersData.map((elt, idx) => [
              elt.data.project.work_package_number,
              elt.data.project?.sub_task ? elt.data.project.sub_task : "N/A",
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
  
            swal(
              "Submitted",
              "Your selected time cards are submitted!",
              "success"
            );
          });
        }
      });
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
      satday = moment(satday).format('YYYY-MM-DD')
      return satday;
    };
    React.useEffect(() => {
      console.log("values", editForm);
      dateRange()
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
  
    return (
      <>
        {row != null && row != undefined && (
          <EditTimeCard
            data={row}
            show={show_edit_modal}
            onClose={() => {
              setShowEditModal(false);
            }}
          />
        )}
        <AddTimecardItms
          // toggle={toggleModal}
          show={modaladdItem}
          onClose={onAddItem}
          onAdd={editForm.handleSubmit}
        ></AddTimecardItms>
        <CContainer>
  
          <CRow className="justify-content-between">
            <CCol>
              <h3 className="timecards-page-header mb-3">Actual Hours</h3>
            </CCol>
            <CCol
              md="8"
              id="tableRef"
              className="d-flex justify-content-end"
            >
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
                  onClick={() =>
                    exportToCSV(usersData, "Timecard of" + " " + pdfTitle)
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
              {has_permission("projects.add_projects") && (<CCol xl="3" lg="3" md="6">
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
                      placeholder={capitalize(profile_details.first_name) +
                        " " +
                        capitalize(profile_details.last_name)}
                      isClearable={false}
                      isMulti={false}
                      // value={{value:capitalize(profile_details.first_name) +
                      //      " " +
                      //      capitalize(profile_details.last_name), //label: capitalize(profile_details.first_name) +
                      //     //  " " +
                      //     //  capitalize(profile_details.last_name) 
                      //     }}
                      onChange={getAssigneeList}
                      classNamePrefix="custom-forminput-6"
                      options={assigneeList}
                      styles={colourStyles}
  
  
                    />
                    {/* {editForm.errors.assigneeSelectPM && <p className="error mt-1">{editForm.errors.assigneeSelectPM}</p>} */}
                  </div>
                
              </CCol>)}
  
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
                    Show
                  </CButton>
                </div>
              </CCol>
              {/**buttons for format of timecard */}
  
              <CRow className="mt-4">
                <CCol md="4">
                  <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                    Employee Name :{" "}
                    {capitalize(profile_details.first_name) +
                      " " +
                      capitalize(profile_details.last_name)}
                  </CLabel>
                </CCol>
                <div class="w-100"></div>
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
                          {item.data.submitted == false ? (
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
                          ) : (
                            "N/A"
                          )}
                        </td>
                      ),
                    }}
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
                            Total <b>{totalHrs.toFixed(1)}hrs&nbsp;</b>
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
  export default TimeCards;
  