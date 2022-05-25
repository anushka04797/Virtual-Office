import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CLabel,
  CInput,
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CTextarea,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { form, useFormik } from "formik";
import { API, USER_ID } from "../../Config";
import swal from "sweetalert";
import {
  fetchProjectsAssigneeThunk,
  fetchProjectsForPMThunk,
  fetchProjectsThunk,
} from "../../store/slices/ProjectsSlice";
import { fetchWbsThunk } from "../../store/slices/WbsSlice";
import LinearProgress from "@mui/material/LinearProgress";
import { useSnackbar } from "notistack";
import moment from "moment";
import { has_permission } from "../../helper.js";
import WBSFileUpload from "../../components/wbs-docs-upload/WBSFileUpload";

const WbsModal = (props) => {
  console.log("props wbs modal: ", props);
  const [deliverableView, setDeliverableView] = useState(true);
  const [hrsWorked, setHrsWorked] = useState(true);
  const [plannedHours, setPlannedHours] = useState();
  //const [actualHour, setactualHour] = useState();
  const [remaininghrs, setremaininghrs] = useState();
  const [datecheck, setdatecheck] = useState();

  const dispatch = useDispatch();
  const wbsStatusArray = [
    {
      title: "To Do",
      status: 1,
    },
    {
      title: "Ongoing",
      status: 2,
    },
    {
      title: "Done",
      status: 3,
    },
  ];

  // const reset_form = () => {
  //     formWbsUpdate.resetForm();
  //     selectProjectRef.current.select.clearValue();
  //     selectAssigneRef.current.select.clearValue();
  //     selectTaskTitleRef.current.select.clearValue();
  //     setAssigneeList([]);
  //   };

  React.useEffect(() => {
    console.log("assignee id", props.data.assignee.id);

    console.log("assignee id", props.data.assignee.id);

    API.get(
      "project/assignee/list/" + props.data.project.work_package_index + "/"
    ).then((res) => {
      console.log(res.data)
      let ep = 0;
      for (let i = 0; i < res.data.data.length; i++) {
        console.log("id", res.data.data[i].assignee.id);
        if (props.data.assignee.id == res.data.data[i].assignee.id) {
          console.log("matched");
          ep = res.data.data[i].estimated_person;
        }
      }

      const start = props.data.project.start_date;
      const end = props.data.project.planned_delivery_date;

      const moment = require("moment");
      let total_days = moment(end).diff(moment(start), "days");
      total_days = total_days + 1;
      console.log("total days", total_days);
      let total_hrs = total_days * 8;
      console.log("total hourssss ", total_hrs);

      const tomorrow = new Date(start);

      let count = 0;
      for (let i = 0; i < total_days; i++) {
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (tomorrow.getDay() == 5 || tomorrow.getDay() == 6) {
          count = count + 1;
        }
      }
      console.log("weekdays", count);
      count = count * 8;
      total_hrs = total_hrs - count;
      let total_spent = 0;
      for (const item in props.timeCardList.data) {
        console.log(props.timeCardList.data[item].hours_today);
        total_spent += parseInt(props.timeCardList.data[item].hours_today);
      }
      console.log("remains", total_hrs - total_spent);

      total_hrs = total_hrs * ep;
      setPlannedHours(Number(total_hrs).toFixed(2));
      //setactualHour(Number(total_spent).toFixed(2));
      setremaininghrs(Number(total_hrs - total_spent).toFixed(2));
      console.log("planned hours", total_hrs);
    });

    const lastDate = props.data.end_date;
    console.log("last Date", lastDate);

    const currentDate = new Date();
    const day = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    const cday = day.split("-");
    console.log("current date", cday);

    const endDateArray = lastDate.split("-");
    console.log("edate", endDateArray);

    const difference = moment(props.data.end_date, "YYYY-MM-DD").diff(
      moment(currentDate, "YYYY-MM-DD"),
      "days"
    );
    console.log("difference", difference);

    setdatecheck(difference);
  }, [props]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const updateWbs = (data, { setSubmitting }) => {
    if (datecheck >= 0) {
      API.put("wbs/update/" + props.data.id + "/", formWbsUpdate.values).then(
        (res) => {
          console.log(res.data)
          if (res.status == 200 && res.data.success == "True") {
            // console.log("text", res.data.message);
            dispatch(fetchProjectsForPMThunk(sessionStorage.getItem(USER_ID)));
            dispatch(fetchProjectsThunk(sessionStorage.getItem(USER_ID)));

            dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)));
            swal({
              title: "Good job!",
              text: res.data.message,
              icon: "success",
            });
            props.onClose();
          }
        }
      ).catch(err=>{
        console.log(err)
      });
    } else {
      setSubmitting(false);
      enqueueSnackbar("Planned Delivery date is over! ", {
        variant: "warning",
      });
    }
  };

  const validateWbsCreateForm = (values) => {
    const errors = {};
    if (!values.title) errors.title = "Title is required!";
    if (!values.actual_work_done)
      errors.actual_work_done =
        "Actual work done today is required! (250 charracters)";
    return errors;
  };
  const [files, setFiles] = useState([]);
  const setDocFiles = (files) => {
    setFiles(files);
  };
  const formWbsUpdate = useFormik({
    initialValues: {
      project: props.data.project.id,
      assignee: props.data.assignee.id,
      title: props.data.title,
      details: props.data.project.description,
      status: props.data.status,
      description: props.data.description,
      start_date: props.data.start_date,
      end_date: props.data.end_date,
      hours_worked: props.data.hours_worked,
      progress: props.data.progress,
      comments: props.data.comments,
      deliverable: props.data.deliverable,
      date_updated: "",
      actual_work_done: "",
      remaining_hours: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: validateWbsCreateForm,
    onSubmit: updateWbs,
  });

  const total_hours = () => {
    console.log("ep", props.data);
    const start = props.data.start_date;
    const end = props.data.end_date;

    const moment = require("moment");
    const total_days = moment(end).diff(moment(start), "days");

    console.log("dddddddd", total_days);

    let total_hrs = total_days * 24;

    console.log("11111", total_hrs);
    console.log("1", end);

    const startd = new Date(start).toString();
    console.log("string", startd);
    const tomorrow = new Date(start);

    let count = 0;
    for (let i = 0; i < total_days; i++) {
      tomorrow.setDate(tomorrow.getDate() + 1);
      if (tomorrow.getDay() == 5 || tomorrow.getDay() == 6) {
        count = count + 1;
      }
    }
    count = count * 24;
    total_hrs = total_hrs - count;

    let total_spent = 0;
    for (const item in props.timeCardList.data) {
      console.log("input hours", props.timeCardList.data[item].hours_today);


      total_spent += parseFloat(props.timeCardList.data[item].hours_today);
    }
    console.log("spent", total_spent);
    //setactualHour(Number(total_spent).toFixed(2));
    
    const remaining_hrs = plannedHours - total_spent;
    const hours = {
      allocated_hours: total_hrs,
      spent_hours: total_spent,
      remaining_hours: remaining_hrs,
    };
    return hours;
  };
  function is_form_submitting() {
    console.log(formWbsUpdate.isSubmitting, formWbsUpdate.isValidating);
    total_hours();
    if (formWbsUpdate.isSubmitting && !formWbsUpdate.isValidating) {
      return true;
    }
    return false;
  }

  return (
    <>
      <CModal
        closeOnBackdrop={false}
        show={props.show}
        onClose={props.toggle}
        size="xl"
      >
        <CModalHeader closeButton>
          {props.data.project &&
            props.data.project.task_delivery_order.title + " / "}
          {props.data.project && props.data.project.sub_task + " / "}
          {props.data.project && props.data.project.task_title}
        </CModalHeader>
        <CModalBody>
          <CRow>
            <div className="col-lg-8 mb-3 border-right">
              <CForm>
                <CRow>
                  <div className="col-lg-12 mb-3">
                    <p>
                      <b>Project Details :</b> {props.data.project.description}
                    </p>
                  </div>
                </CRow>
                <CRow>
                  <div className="col-lg-12 mb-3">
                    <CLabel className="custom-label-wbs5">Title</CLabel>
                    <CInput
                      id="title"
                      name="title"
                      className="custom-forminput-5"
                      onChange={formWbsUpdate.handleChange}
                      value={formWbsUpdate.values.title}
                    />
                    {formWbsUpdate.errors.title && (
                      <p
                        className="error"
                        style={{ fontSize: "14px !important" }}
                      >
                        {formWbsUpdate.errors.title}
                      </p>
                    )}
                  </div>
                  
                </CRow>
                <CRow>
                  <div className="col-lg-12 mb-3">
                    <CLabel className="custom-label-wbs5">Descriptions</CLabel>
                    <CTextarea
                      id="description"
                      name="description"
                      className="custom-forminput-5 text-box-height"
                      onChange={formWbsUpdate.handleChange}
                      value={formWbsUpdate.values.description}
                    ></CTextarea>
                  </div>
                </CRow>
                <CRow>
                  {has_permission("projects.add_projects") && (
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-wbs5">Start date</CLabel>
                      <CInput
                        id="start_date"
                        name="start_date"
                        type="date"
                        className="custom-forminput-5"
                        onChange={formWbsUpdate.handleChange}
                        value={formWbsUpdate.values.start_date}
                      ></CInput>
                    </div>
                  )}
                  {has_permission("projects.add_projects") && (
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-wbs5">End date</CLabel>
                      <CInput
                        id="end_date"
                        name="end_date"
                        type="date"
                        className="custom-forminput-5"
                        onChange={formWbsUpdate.handleChange}
                        value={formWbsUpdate.values.end_date}
                        // disabled
                      ></CInput>
                    </div>
                  )}

                  {!has_permission("projects.add_projects") && (
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-wbs5">Start date</CLabel>
                      <CInput
                        id="start_date"
                        name="start_date"
                        type="date"
                        className="custom-forminput-5"
                        onChange={formWbsUpdate.handleChange}
                        value={formWbsUpdate.values.start_date}
                        disabled
                      ></CInput>
                    </div>
                  )}
                  {!has_permission("projects.add_projects") && (
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-wbs5">End date</CLabel>
                      <CInput
                        id="end_date"
                        name="end_date"
                        type="date"
                        className="custom-forminput-5"
                        onChange={formWbsUpdate.handleChange}
                        value={formWbsUpdate.values.end_date}
                        disabled
                      ></CInput>
                    </div>
                  )}
                </CRow>
                {/*Actual work today */}
                <CRow>
                  <div className="col-lg-12 mb-3">
                    <CLabel className="custom-label-wbs5">
                      Actual Work Today
                    </CLabel>
                    <CInput
                      id="actual_work_done"
                      type="text"
                      name="actual_work_done"
                      className="custom-forminpput-5"
                      onChange={(e) => {
                        formWbsUpdate.setFieldValue(
                          "actual_work_done",
                          e.target.value
                        );
                        if (
                          e.target.value == null ||
                          e.target.value.length == 0
                        ) {
                          setHrsWorked(true);
                        } else {
                          setHrsWorked(false);
                        }
                      }}
                      value={formWbsUpdate.values.actual_work_done}
                    ></CInput>
                    {formWbsUpdate.errors.actual_work_done && (
                      <p
                        className="error"
                        style={{ fontSize: "14px !important" }}
                      >
                        {formWbsUpdate.errors.actual_work_done}
                      </p>
                    )}
                  </div>
                </CRow>
                <CRow>
                  <div className="col-lg-12 mb-3">
                    <CLabel className="custom-label-wbs5">Hours worked</CLabel>
                    <CInput
                      id="hours_worked"
                      name="hours_worked"
                      type="number"
                      className="custom-forminput-5"
                      onChange={formWbsUpdate.handleChange}
                      value={formWbsUpdate.values.hours_worked}
                      disabled={hrsWorked}
                      min="0.00"
                    ></CInput>
                  </div>
                </CRow>
                <CRow>
                  <div className="col-lg-12 mb-3">
                    <CLabel className="custom-label-wbs5">Comments</CLabel>
                    <CTextarea
                      id="comments"
                      name="comments"
                      className="custom-forminput-5"
                      onChange={formWbsUpdate.handleChange}
                      value={formWbsUpdate.values.comments}
                    ></CTextarea>
                  </div>
                </CRow>
                <CRow>
                  <div className="col-lg-12">
                    <WBSFileUpload files={files} setFiles={setDocFiles} />
                  </div>
                </CRow>
                {props.data.assignee.id == sessionStorage.getItem(USER_ID) && (
                  <div>
                    {is_form_submitting() == true ? (
                      <LinearProgress />
                    ) : (
                      <div>
                        <CButton
                          type="button"
                          onClick={formWbsUpdate.handleSubmit}
                          color="primary"
                        >
                          Update
                        </CButton>{" "}
                        <CButton color="secondary" onClick={props.toggle}>
                          Cancel
                        </CButton>
                      </div>
                    )}
                  </div>
                )}
              </CForm>
            </div>

            <CRow className="col-lg-4 mb-3">
              <div>
                <CCol md="12">
                  <p>
                    Assignee:
                    <br></br>
                    {/* Pial Noman */}
                    <span className="wbs-reporter-name">
                      {props.data.assignee?.first_name != undefined &&
                        props.data.assignee.first_name +
                          " " +
                          props.data.assignee.last_name}
                    </span>
                  </p>
                </CCol>
                <CCol md="12">
                  <p>
                    Created By:
                    <br></br>
                    {/* Pial Noman */}
                    <span className="wbs-reporter-name">
                      {props.data.reporter?.first_name != undefined &&
                        props.data.reporter.first_name +
                          " " +
                          props.data.reporter.last_name}
                    </span>
                  </p>
                </CCol>
                <CCol md="12">
                  <p className="custom-label-wbs5">
                    Planned Hours :<br></br>
                    {plannedHours} 
                  </p>
                </CCol>
                <CCol md="12">
                  <p>
                    Actual Hours :<br></br>
                    {/*actualHour*/}{total_hours().spent_hours}
                  </p>
                </CCol>
                <CCol md="12">
                  <p>
                    Balance hours:
                    <br></br>
                    {/*remaininghrs*/}{plannedHours-total_hours().spent_hours}
                  </p>
                </CCol>
                {/**actual work list show */}
                <CCol md="12">
                  <div className="task-list">
                    <p>Actual Worked :</p>
                    <ol className="task-list-show">
                      {props.timeCardList?.data != undefined
                        ? Array.from(props.timeCardList.data).map((item) => (
                            <li className="task-list-show-item">
                              {item.actual_work_done +
                                " ➤ " +
                                item.hours_today +
                                " hr(s)"}
                            </li>
                          ))
                        : "No task has been done so far."}
                    </ol>
                  </div>
                </CCol>
              </div>
            </CRow>
          </CRow>
        </CModalBody>
      </CModal>
    </>
  );
};
export default WbsModal;
