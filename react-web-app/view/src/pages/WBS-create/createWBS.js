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
  CSelect,
  CTextarea,
  CAlert,
} from "@coreui/react";
import React, { useState, useRef, useEffect } from "react";
import "./createWBS.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjectsThunk,
  fetchProjectsAssigneeThunk,
  createWbsThunk,
  fetchWbsThunk,
  fetchProjectsForPMThunk,
} from "../../store/slices/ProjectsSlice";
import Select from "react-select";
import { API, USER_ID } from "../../Config";
import { useFormik } from "formik";
import swal from "sweetalert";
import LinearProgress from "@mui/material/LinearProgress";
import sortBy from "lodash/sortBy";
import { has_permission } from "../../helper.js";
import { useLocation } from "react-router-dom";
import store from "../../store/Store";
import { useSnackbar } from "notistack";
import moment from "moment";

const CreateNewWBS = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const remaining_hours = (remaining, total) => {
    return String(parseFloat(total) - parseFloat(remaining));
  };

  // const [projects,setProjects] = useState([])
  const [assigneeList, setAssigneeList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const projects = useSelector((state) => {
    let temp = [];

    Array.from(state.projects.data).forEach((item, idx) => {
      // console.log('remaining hours ', remaining_hours(item.project.remaining_hours, item.project.planned_hours))
      if (parseFloat(item.project.remaining_hours) > 0) {
        temp.push({
          value: item.project.id,
          label: item.project.sub_task,
          data: item,
        });
      }
    });
    if (has_permission("projects.add_projects")) {
      Array.from(state.projects.pm_projects).forEach((item, idx) => {
        if (parseFloat(item.project.remaining_hours) > 0) {
          // console.log(tempitem.label === item.project.sub_task))
          if (!temp.find((ele) => ele.label === item.project.sub_task)) {
            temp.push({
              value: item.project.id,
              label: item.project.sub_task,
              data: item,
            });
          }
        }
      });
    }
    // console.log("get project list: ", temp)
    return temp;
  });
  //fetcing projects from store
  const getProjectList = () => {
    let temp = [];
    console.log("projects", store.getState().projects.data);
    Array.from(store.getState().projects.data).forEach((item, idx) => {
      // console.log('remaining hours ', remaining_hours(item.project.remaining_hours, item.project.planned_hours))
      if (parseFloat(item.project.remaining_hours) > 0) {
        temp.push({
          value: item.project.id,
          label: item.project.sub_task,
          data: item,
        });
      }
    });
    if (has_permission("projects.add_projects")) {
      
      Array.from(store.getState().projects.pm_projects).forEach((item, idx) => {
        if (parseFloat(item.project.remaining_hours) > 0) {
          // console.log(tempitem.label === item.project.sub_task))
          if (!temp.find((ele) => ele.label === item.project.sub_task)) {
            temp.push({
              value: item.project.id,
              label: item.project.sub_task,
              data: item,
            });
          }
        }
      });
    }
    // console.log("get project list: ", temp)
    // return temp
    // setProjects(temp)
  };

  const getTaskList = (option) => {
    console.log("task list###########: ", option);
    if (!has_permission("projects.add_projects")) {
      var temp_task_list = [];
      option.forEach((item) => {
        item.assignees.forEach((element) => {
          console.log(element.assignee.id);
          if (element.assignee.id == sessionStorage.getItem(USER_ID)) {
            temp_task_list.push(item);
          }
        });
      });
      setTaskList(sortBy(temp_task_list, "task_title"));
    } else {
      setTaskList(sortBy(option, "task_title"));
    }
  };

  const selectProjectRef = useRef();
  const selectAssigneRef = useRef();
  const selectTaskTitleRef = useRef();

  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedSubTask, setSelectedSubTask] = useState({});
  const [selectedProjectEndDate, setSelectedProjectEndDate] = useState("");
  const [selectedAssignee, setselectedAssignee] = useState([]);

  const handleProjectChange = (newValue, actionMeta) => {
    console.log(`action: ${actionMeta.action}`);
    console.log("newValue: ", newValue);

    if (actionMeta.action == "select-option") {
      // getAssigneeList(newValue);
      setSelectedSubTask(newValue);
      getTaskList(newValue.data.subtasks);
      formCreateWbs.setValues({
        project: newValue.data.project.id,
        work_package_number: newValue.data.project.work_package_number,
        assignee: formCreateWbs.values.assignee,
        reporter: sessionStorage.getItem(USER_ID),
        title: formCreateWbs.values.title,
        description: formCreateWbs.values.description,
        start_date: formCreateWbs.values.start_date,
        end_date: formCreateWbs.values.end_date,
        hours_worked: formCreateWbs.values.hours_worked,
        status: formCreateWbs.values.status,
        progress: formCreateWbs.values.progress,
        comments: formCreateWbs.values.comments,
        deliverable: formCreateWbs.values.deliverable,
      });
    } else if (actionMeta.action == "clear") {
      setSelectedSubTask(null);
    }
  };

  const getAssigneeList = (option) => {
    dispatch(fetchProjectsAssigneeThunk(option?.work_package_index));

    var temp_array = [];

    option.assignees.forEach((item) => {
      temp_array.push({
        value: item.assignee.id,
        label: item.assignee.first_name + " " + item.assignee.last_name,
        data: item.assignee,
      });
    });

    sortBy(temp_array, "label");
    temp_array.unshift({
      value: "All",
      label: "Select All",
    });
    setAssigneeList(temp_array);

    console.log("array", temp_array);
    console.log("assignees", option);
  };

  const handleAssigneeChange = (value, actionMeta) => {
    let assigneeArray = [];
    let arr = [];
    if(actionMeta.action=='select-option'){
    console.log("action", actionMeta)
    setselectedAssignee(value); //1 less value
    console.log("rats", selectedAssignee);
    value.forEach((item) => {
      if (item.value == "All") {
        arr = [...assigneeList];
        arr.shift();
        setselectedAssignee(arr);
        console.log("arr", arr)
        console.log("len", arr.length)
        for (let i = 0; i < arr.length; i++) 
            assigneeArray[i] = arr[i].value;
       
        console.log("assinearray", assigneeArray);
        
      }
       else {
        assigneeArray.push(item.value);
      } 
    });
   }
   else if(actionMeta.action=='remove-value'){
    console.log("removed", actionMeta.removedValue)
    arr = [...selectedAssignee]
    console.log("arr", arr)
    for(let i=0;i<arr.length;i++)
    {
      if(actionMeta.removedValue == arr[i])
       {
           arr.splice(i, 1);
       }
    }  
    setselectedAssignee(arr);
    for (let i = 0; i < arr.length; i++) 
            assigneeArray[i] = arr[i].value;
  }

  console.log("action ", actionMeta);

  if( actionMeta.action=='clear'){
    setselectedAssignee(null);
  }
  console.log("after removed ", assigneeArray);
  formCreateWbs.setFieldValue("assignee", assigneeArray);
};

  // form validation for WBS create
  const is_before_start_date = (start_date, end_date) => {
    // console.log('start date', new Date(start_date))
    // console.log('end date', new Date(end_date))
    return new Date(end_date) < new Date(start_date);
  };

  const validate_create_wbs_form = (values) => {
    const errors = {};
    if (!values.project) errors.project = "Project is required";
    if (!values.title) errors.title = "Title is required";
    if (!values.start_date) errors.start_date = "Start date is required";
    if (!values.end_date) errors.end_date = "End date is required";
    if (
      values.start_date &&
      is_before_start_date(values.start_date, values.end_date)
    )
      errors.end_date = "End date can not be past from start date";
    if (values.assignee.length < 1) errors.assignee = "Assignee is required";
    return errors;
  };

  //   create wbs method
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const create_wbs = (values, { setSubmitting }) => {
    const currentDate = new Date();

    const day = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    const cday = day.split("-")

   

    const endDate = new Date(selectedProjectEndDate);

    const endDateArray = selectedProjectEndDate.split("-");
    console.log("arrayyyyyy", endDateArray);

    let cdate = moment([parseInt(cday[0]), parseInt(cday[1]), parseInt(cday[2])])
    let edate = moment([parseInt(endDateArray[0]), parseInt(endDateArray[1]), parseInt(endDateArray[2])])

    console.log("day1", cdate);
    console.log("day2", edate);

    const difference = cdate.diff(edate, 'days');

    console.log("difference", difference);

    // console.log("end", endDate);

    //  console.log("difference", endDate - currentDate);

    // console.log("date", selectedProjectEndDate);
    // console.log("curr", currentDate);
    // console.log("type" , typeof selectedProjectEndDate);
    if (difference <= 0) {
      console.log("values", JSON.stringify(formCreateWbs.values));
      API.post("wbs/create/", formCreateWbs.values)
        .then((res) => {
          // setSubmitting(false)
          console.log(res);
          if (res.status === 200 && res.data.success === "True") {
            reset_form();
            setTaskList([]);
            dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)));
            dispatch(fetchProjectsThunk(sessionStorage.getItem(USER_ID)));
            dispatch(fetchProjectsForPMThunk(sessionStorage.getItem(USER_ID)));
            swal("Created!", "Successfuly Created", "success");
          }
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
        });
    } else {
      enqueueSnackbar("Planned Delivery date is over! ", {
        variant: "warning",
      });
      reset_form();
    }
  };

  // form reset method
  const reset_form = () => {
    formCreateWbs.resetForm();
    selectProjectRef.current.select.clearValue();
    selectAssigneRef.current.select.clearValue();
    selectTaskTitleRef.current.select.clearValue();
    setAssigneeList([]);
  };

  // use formic for create WBS
  const formCreateWbs = useFormik({
    initialValues: {
      project: "",
      work_package_number: "",
      assignee: [],
      reporter: sessionStorage.getItem(USER_ID),
      title: "",
      description: "",
      start_date: "",
      end_date: "",
      hours_worked: "0",
      status: "1",
      progress: "0",
      comments: "",
      deliverable: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: validate_create_wbs_form,
    onSubmit: create_wbs,
  });

  const handleTaskTitleChange = (newValue, actionMeta) => {
    if (newValue != null) {
      getAssigneeList(newValue);
      //console.log(assigneeList);
      setSelectedTask(newValue);
      setSelectedProjectEndDate(newValue?.planned_delivery_date);
    }
    if (actionMeta.action == "select-option") {
      formCreateWbs.setValues({
        project: newValue.id,
        work_package_number: formCreateWbs.values.work_package_number,
        assignee: formCreateWbs.values.assignee,
        reporter: sessionStorage.getItem(USER_ID),
        title: formCreateWbs.values.title,
        description: formCreateWbs.values.description,
        start_date: formCreateWbs.values.start_date,
        end_date: formCreateWbs.values.end_date,
        hours_worked: formCreateWbs.values.hours_worked,
        status: formCreateWbs.values.status,
        progress: formCreateWbs.values.progress,
        comments: formCreateWbs.values.comments,
        deliverable: formCreateWbs.values.deliverable,
      });
    }
  };

  function is_form_submitting() {
    // console.log(formCreateWbs.isSubmitting, formCreateWbs.isValidating)
    if (formCreateWbs.isSubmitting && !formCreateWbs.isValidating) {
      return true;
    }
    return false;
  }
  function set_selected_project(sub_task) {
    let all_projects = projects;
    console.log("projects", projects);
    all_projects.forEach((item, idx) => {
      if (item.label == sub_task) {
        setSelectedSubTask(item);
        getTaskList(item.data.subtasks);
      }
    });
  }

  React.useEffect(() => {
    if (location.state?.task) {
      let task = location.state.task;
      console.log("location data if block", task);
      set_selected_project(task.sub_task);
      setSelectedTask(task);
      getAssigneeList(task);
      setselectedAssignee(task);
      setSelectedProjectEndDate(task.planned_delivery_date);

      formCreateWbs.setValues({
        project: task.id,
        work_package_number: task.work_package_number,
        assignee: formCreateWbs.values.assignee,
        reporter: sessionStorage.getItem(USER_ID),
        title: formCreateWbs.values.title,
        description: formCreateWbs.values.description,
        start_date: formCreateWbs.values.start_date,
        end_date: formCreateWbs.values.end_date,
        hours_worked: formCreateWbs.values.hours_worked,
        status: formCreateWbs.values.status,
        progress: formCreateWbs.values.progress,
        comments: formCreateWbs.values.comments,
        deliverable: formCreateWbs.values.deliverable,
      });
    } else {
    }
  }, []);

  // function compareTime(){
  //     const currentDate = new Date();
  //     console.log(currentDate);
  //     if(selectedProjectEndDate < currentDate)
  //       return false;
  // }

  return (
    <>
      <CContainer>
        <CRow>
          <div className="col-md-8 offset-md-2 col-sm-12">
            <CCard className="custom-wbs-card-1">
              <CCardHeader className="project-wbs-1">
                {" "}
                <h4 className="section-name-wbscreate">Create a WBS</h4>
              </CCardHeader>
              <CCardBody>
                <CContainer>
                  <CForm>
                    <CRow>
                      {/**project name */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-wbs5">
                          Select Project
                        </CLabel>
                        <Select
                          id="project"
                          options={projects}
                          // getOptionLabel={option => option.task_delivery_order + " / " + option.sub_task}
                          // getOptionValue={option => option.id}
                          value={selectedSubTask}
                          onChange={handleProjectChange}
                          ref={selectProjectRef}
                        />
                        {formCreateWbs.touched.project &&
                          formCreateWbs.errors.project && (
                            <small style={{ color: "red" }}>
                              {formCreateWbs.errors.project}
                            </small>
                          )}
                      </div>
                      {/*selectedSubTask != null ?
                                                <div className="col-lg-12 mb-3">
                                                    <CAlert color="primary">
                                                        <small>
                                                            <b>Planned Delivery Date: </b> {selectedTask.data.project.planned_delivery_date}
                                                            <br />
                                                            <b>Planned Hours: </b> {selectedTask.data.project.planned_hours}
                                                            <br />
                                                            <b>Remaining Hours: </b> {selectedTask.data.project.remaining_hours}
                                                        </small>
                                                    </CAlert>
                                                </div> :
                                                <></>
                                            } 
                      {/**task title */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-wbs5">
                          Task Title
                        </CLabel>
                        <Select
                          id="task_title"
                          options={taskList}
                          getOptionLabel={(option) => option.task_title}
                          getOptionValue={(option) => option.id}
                          onChange={handleTaskTitleChange}
                          value={selectedTask}
                          ref={selectTaskTitleRef}
                        />
                        {formCreateWbs.touched.task_title &&
                          formCreateWbs.errors.task_title && (
                            <small style={{ color: "red" }}>
                              {formCreateWbs.errors.task_title}
                            </small>
                          )}
                      </div>
                      {selectedTask != null ? (
                        <div className="col-lg-12 mb-3">
                          <CAlert color="primary">
                            <small>
                              <b>Planned Delivery Date: </b>{" "}
                              {selectedTask.planned_delivery_date}
                              <br />
                              <b>Planned Hours: </b>{" "}
                              {selectedTask.planned_hours}
                              <br />
                              <b>Remaining Hours: </b>{" "}
                              {selectedTask.remaining_hours}
                              <br />
                              <b>Task details: </b> {selectedTask.description}
                            </small>
                          </CAlert>
                        </div>
                      ) : (
                        <></>
                      )}
                      {/**wbs title */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-wbs5">WBS Title</CLabel>
                        {/* onChange={setWbsTitle} */}
                        <CInput
                          id="title"
                          name="title"
                          value={formCreateWbs.values.title}
                          onChange={formCreateWbs.handleChange}
                          className="custom-forminput-6"
                        ></CInput>
                        {formCreateWbs.touched.title &&
                          formCreateWbs.errors.title && (
                            <small style={{ color: "red" }}>
                              {formCreateWbs.errors.title}
                            </small>
                          )}
                      </div>
                      {/**WBS description */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-wbs5">
                          Description
                        </CLabel>
                        {/* onChange={setWbsDetails} */}
                        <CTextarea
                          id="description"
                          name="description"
                          value={formCreateWbs.values.description}
                          onChange={formCreateWbs.handleChange}
                          className="custom-forminput-6"
                        ></CTextarea>
                      </div>
                      {/**Start date */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-wbs5">
                          Start date
                        </CLabel>
                        {/* onChange={setWbsStartDate} */}
                        <CInput
                          max={selectedProjectEndDate}
                          type="date"
                          id="start_date"
                          name="start_date"
                          value={formCreateWbs.values.start_date}
                          onChange={formCreateWbs.handleChange}
                          className="custom-forminput-6"
                        ></CInput>
                        {formCreateWbs.touched.start_date &&
                          formCreateWbs.errors.start_date && (
                            <small style={{ color: "red" }}>
                              {formCreateWbs.errors.start_date}
                            </small>
                          )}
                      </div>
                      {/**End date */}
                      <div className="col-lg-6 mb-3">
                        <CLabel className="custom-label-wbs5">End date</CLabel>
                        {/* onChange={setWbsEndDate} */}
                        <CInput
                          max={selectedProjectEndDate}
                          type="date"
                          id="end_date"
                          name="end_date"
                          value={formCreateWbs.values.end_date}
                          onChange={formCreateWbs.handleChange}
                          className="custom-forminput-6"
                        ></CInput>
                        {formCreateWbs.touched.end_date &&
                          formCreateWbs.errors.end_date && (
                            <small style={{ color: "red" }}>
                              {formCreateWbs.errors.end_date}
                            </small>
                          )}
                      </div>
                      {/**Assignees */}
                      <div className="col-lg-12 mb-3">
                        <CLabel className="custom-label-wbs5">
                          Assignee(s)
                        </CLabel>
                        <Select
                          className="custom-forminput-6"
                          ref={selectAssigneRef}
                          options={assigneeList}
                          isMulti
                          onChange={handleAssigneeChange}
                          value={selectedAssignee}
                        />
                        {formCreateWbs.touched.assignee &&
                          formCreateWbs.errors.assignee && (
                            <small style={{ color: "red" }}>
                              {formCreateWbs.errors.assignee}
                            </small>
                          )}
                      </div>
                      {/**submit buttons */}
                      <div className="col-md-12">
                        {is_form_submitting() == true ? (
                          <LinearProgress />
                        ) : (
                          <div className="projectwbs-form-button-holders mt-3">
                            <CButton
                              type="button"
                              onClick={formCreateWbs.handleSubmit}
                              className="create-btn-prjctwbs create-wbs"
                            >
                              Create WBS
                            </CButton>
                            <CButton
                              type="button"
                              onClick={reset_form}
                              className="create-btn-prjctwbs cancel-wbs"
                            >
                              Cancel
                            </CButton>
                          </div>
                        )}
                      </div>
                    </CRow>
                  </CForm>
                </CContainer>
              </CCardBody>
            </CCard>
          </div>
        </CRow>
      </CContainer>
    </>
  );
};
export default CreateNewWBS;
