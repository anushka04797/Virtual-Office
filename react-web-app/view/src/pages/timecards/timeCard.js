import {
  CContainer,
  CRow,
  CCol,
  CForm,
  CLabel,
  CButton,
  CDataTable,
  CBadge,CInput
} from "@coreui/react";
import orderBy from 'lodash/orderBy';
import React, { useState, useEffect } from "react";
import "./timeCards.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, FILE_API, USER_ID } from "../../Config";
import { API } from "../../Config";
import { has_permission } from "../../helper";
import { useFormik } from "formik";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import CIcon from "@coreui/icons-react";
import moment from "moment";
import swal from "sweetalert";
import AddTimecardItms from "./addTimecardItem";
import EditTimeCard from "./Edit";
import { fetchTimecardThunk } from "../../store/slices/TimecardSlice";

const TimeCards = () => {
  const profile_details = useSelector((state) => state.profile.data);
  const [selectedAssignee,setSelectedAssignee]=useState()
  const dispatch = useDispatch()
  const [update,setUpdate]=useState(0)
  // console.log(profile_details)
  const [usersData, setUsersData] = useState([]);
  const [pdfData, setPdfData] = useState([]);
  // console.log('userdata', usersData)
  const [assignee, setAssigneeValue] = useState();
  const [pdfTitle, setPdfTitle] = useState();
  const [assigneeList, setAssigneeList] = useState([]);
  const [non_submitted_total_tc,setNonSubmittedTotalTC]=useState(0)
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
              "WP": element.data.project
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
          setTotalHrs(temp_hrs);
        }
      );
    }
  };
  const get_assignee_tc=(assignee)=>{
    const { start, end } = dateRange();
    setPdfTitle(assignee.data.first_name+' '+assignee.data.last_name)
    API.get(
      "wbs/user/time-card/list/" + assignee.value + "/"
    ).then((res) => {
      setPdfTitle(
        profile_details.first_name + " " + profile_details.last_name
      );
      let temp = [];
      Array.from(res.data.data).forEach((item, idx) => {
        temp.push({ data: item });
      });
      let filteredData = temp;
      filteredData = temp.filter(
        (p) => p.data.date_updated >= start && p.data.date_updated <= end
      );
      setPdfData(filteredData);
      var tableData = [];
      let hours_total = 0
      let total_not_submitted=0
      for (let index = 0; index < filteredData.length; index++) {
        if(filteredData[index].data.submitted==false){
          total_not_submitted++;
        }
        const element = filteredData[index];
        hours_total += parseFloat(element.data.hours_today)
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
              ? element.data.project?.task_title
              : "-",
          Description: element.data?.actual_work_done
            ? element.data?.actual_work_done
            : "-",
          "Hour(s)": element.data.hours_today,
          Type: element.data.time_type,
          "Date Created": element.data.date_created,
          data: element.data,
          "id":element.data.id
        });
      }
      setTotalHrs(hours_total)
      setUsersData(orderBy(tableData,'id','desc'));
      console.log('data size',total_not_submitted)
      setNonSubmittedTotalTC(total_not_submitted)
    });
  }
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
  const getAssigneeList = (option) => {
    setAssigneeValue(option);
    
    setPdfTitle(option.label);
    get_assignee_tc(option)
  };

  React.useEffect(() => {
    console.log('executing effect')
    window.scrollTo(0, 0);
    const { start, end } = dateRange();
    setSelectedAssignee({label:profile_details.first_name+' '+profile_details.last_name,value:profile_details.id,data:profile_details})
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
      filteredData = temp.filter(
        (p) => p.data.date_updated >= start && p.data.date_updated <= end
      );
      setPdfData(filteredData);
      var tableData = [];
      let hours_total = 0
      let total_not_submitted=0
      for (let index = 0; index < filteredData.length; index++) {
        if(filteredData[index].data.submitted==false){
          total_not_submitted++;
        }
        const element = filteredData[index];
        hours_total += parseFloat(element.data.hours_today)
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
              ? element.data.project?.task_title
              : "-",
          Description: element.data?.actual_work_done
            ? element.data?.actual_work_done
            : "-",
          "Hour(s)": element.data.hours_today,
          Type: element.data.time_type,
          "Date Created": element.data.date_created,
          data: element.data,
          "id":element.data.id
        });
      }
      setTotalHrs(hours_total)
      setUsersData(orderBy(tableData,'id','desc'));
      console.log('data size',total_not_submitted)
      setNonSubmittedTotalTC(total_not_submitted)
    });
  }, [modaladdItem, show_edit_modal,update]);
  
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
  const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
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
      console.log("data", elt.data)
    ]);
    let content = {
      startY: 145,
      head: headers,
      body: uData,
    };

     let day = new Date();
     let time = day.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      day=moment(day).format("DD/MM/YY")
      const edate= moment(endDate).format("DD/MM/YYYY")
      doc.setFontSize(17)
      doc.text(170, 50, "Datasoft Manufacturing & Assembly")
      doc.setFontSize(13)
      doc.text(245,75, "Gulshan Branch")
      doc.setFontSize(11)
      doc.text(42,105, "Employee Time Card")
      doc.text(410, 105, "Week-Ending: "+ edate)//+ edate)
      doc.text(42, 125, "Name: "+ profile_details.first_name+' '+profile_details.last_name)//+ name)
     
      let date = new Date();
      console.log("date", date)
      doc.text(315, 360, "From " + startDate + " to " + endDate + "Total Hours " + Number(totalHrs).toFixed(2))
    
      doc.text(400, 375, "Submitted : " + time + "  " + day);
  
      //doc.text(42, 355, "Submitted : " + time +"  "+day )
    
      doc.autoTable(content);
      // doc.save("Timecard of" + " " + pdfTitle + ".pdf");
      return doc
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

  const onAddItem = () => {
    setmodalAddItem(false);
    // dispatch(fetchTimecardThunk());
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
        let temp = '';
        for (let i = 0; i < usersData.length; i++) {
          //console.log("data", usersData[i]);
          // temp.push(usersData[i].data.id)
          if (i == usersData.length - 1) {
            temp += usersData[i].data.id
          }
          else {
            temp += (usersData[i].data.id + ',')
          }
        }

        let doc = exportPDF()
        let formData = new FormData()
        formData.append('employee', sessionStorage.getItem(USER_ID))
        formData.append('time_cards', temp)
        formData.append('week_start', startDate)
        formData.append('week_end', endDate)
        formData.append('pdf_file', doc.output('datauristring'))

        FILE_API.post("wbs/time-card/submit/", formData).then((res) => {
          console.log(res.data);
          dispatch(fetchTimecardThunk(sessionStorage.getItem(USER_ID)))
          setUpdate(update+1)
          doc.save("Timecard of" + " " + profile_details.first_name + ".pdf");
          window.open(doc.output('bloburl'), '_blank');
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
            <h3 className="timecards-page-header mb-3">Actual Hours of this week</h3>
          </CCol>
          {/* <CCol
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
            </div>
          </CCol> */}
        </CRow>
        <CForm>
          <CRow>
            {/**assignees */}
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
                    placeholder={capitalize(profile_details.first_name) +
                      " " +
                      capitalize(profile_details.last_name)}
                    isClearable={false}
                    isMulti={false}
                    onChange={getAssigneeList}
                    classNamePrefix="custom-forminput-6"
                    options={assigneeList}
                    styles={colourStyles}
                  />
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
            <CRow className="mt-4">
              <CCol>
                <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                  Company : {profile_details.slc_details?.slc?.department?.company?.name}
                </CLabel>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="4">
                <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                  Employee Name :{" "}
                  {capitalize(profile_details.first_name) +
                    " " +
                    capitalize(profile_details.last_name)}
                </CLabel>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                  Weekending : {moment(nextSatDay()).format('dddd, DD MMMM YYYY')}
                </CLabel>
              </CCol>
            </CRow>

            {/* {usersData.length > 0 && (
              <div className="alert alert-info" role="alert">
                Showing actual hours from {moment(startDate).format("DD-MM-YYYY")} to{" "}
                {moment(endDate).format("DD-MM-YYYY")}
              </div>
            )} */}
            {show_add_item_btn() == true && (
              <div className="format-buttons mt-3 mb-3">
                <CButton
                  className="file-format-download"
                  type="button"
                  onClick={() => {
                    setmodalAddItem(true);
                  }}
                >
                  {" "}
                  + Add Item
                </CButton>
              </div>
            )}

            {/**table for displaying all the entries */}
            <CCol md="12">
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
                  striped
                  bordered
                  sorter
                  //columnFilter
                  size="sm"
                  itemsPerPage={20}
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
                            Total <b>{Number(totalHrs).toFixed(2)} {Number(totalHrs).toFixed(2) > 1 ? 'hours' : 'hour'}&nbsp;</b>
                          </small>
                        }
                      </CCol>
                    </CRow>
                  </div>
                )}
                <CRow className="justify-content-end mb-5">
                  <CCol md="1" className="justify-content-end">
                    <CButton
                      className="file-format-download"
                      type="button"
                      onClick={onSubmit}
                      style={{ backgroundColor: '#e55353' }}
                      disabled={non_submitted_total_tc==0}
                    >
                      Submit
                    </CButton>
                    {/* <CButton className="file-format-download">Print</CButton> */}
                  </CCol>
                </CRow>
              </div>
            </CCol>
          </CRow>
        </CForm>
      </CContainer>
    </>
  );
};
export default TimeCards;
