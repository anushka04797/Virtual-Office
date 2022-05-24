import { useFormik } from "formik";
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
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { API, USER_ID } from "../../Config";
import swal from 'sweetalert'
import { fetchHolidays } from "../../store/slices/HolidaySlice";
import { fetchUserHoursUsedAndLeft } from "../../store/slices/TimecardSlice";

const AddTimecardItms = (props) => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const holidays=useSelector((state)=>{
    let items=[]
    Array.from(state.holidays.data).forEach((item,idx)=>{
      items.push({label:item.holiday_title,value:item.id,data:item})
    })
    return items
  })
  const worktypes= useSelector(state=>{
    let temp=[]
    Array.from(state.worktypes.data).forEach((item,idx)=>{
      temp.push({label:item.title,value:item.title,description:item.description,data:item})
    })
    return temp
  })
  const dispatch = useDispatch()
  const hours_spent_left=useSelector(state=>state.timecardList.user_hours_used_left)
  const onSave = (values) => {
    console.log("values", formAddTimecard.values);
    const data={
      hours_type:formAddTimecard.values.hours_type,
      hours:formAddTimecard.values.hours,
      hour_description:formAddTimecard.values.hour_description?formAddTimecard.values.hour_description:'',
      assignee:props.employee,
      actual_work_done:formAddTimecard.values.actual_work_done,
      project:formAddTimecard.values.project,
      wbs:formAddTimecard.values.wbs,
      task_title:formAddTimecard.values.task_title
    }
    API.post('wbs/time-card/add/', data).then((res) => {
      console.log(res.data)
      props.onClose()
      // props.onAdd()
      toggleModal()
      formAddTimecard.resetForm()
      swal('Added!', 'Successfuly Added', 'success')
    })
    setModal(false)
  }

  const validateAddItemForm=(values)=>{
    const errors = {};
    if (!values.hours_type) errors.hours_type = "Hour Type is required!"
    if (!values.hours) errors.hours = "Hour is required!"
    if (!values.project) errors.project = "Project is required!"
    if (!values.wbs) errors.wbs = "Wbs is required!"
    if (!values.actual_work_done) errors.actual_work_done = "Details is required!"
    if (parseInt(values.hours) < 1) errors.hours = "Invalid hours value!"
    return errors;
  }
  
  const formAddTimecard = useFormik({
    initialValues: {
      project: "",
      task_title: "",
      actual_work_done: "",
      hours: "",
      hours_type: "",
      wbs: "",
      hour_description:"",
      assignee: props.employee
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: validateAddItemForm,
    onSubmit: onSave,
  });

  useEffect(() => {
    console.log('add tc props',props.employee);
    dispatch(fetchHolidays());
    dispatch(fetchUserHoursUsedAndLeft())
  }, []);

  const [selectedType, setSelectedType] = useState({ label: "RHR", value: 1 });
  const [wbsList, setWbsList] = useState();
  const [selectedWbs, setSelectedWbs] = useState();

  const handleHoursTypeChange = (option) => {
    setSelectedType(option);
    
    if(option.label != 'RHR' && option.label != 'WFH' && option.label != 'OTO' && option.label != 'OTS'){
      console.log('if')
      
      formAddTimecard.setValues({
        hours_type:option.value,
        actual_work_done:option.description,
      });
    }
    else{
      console.log('else')
      formAddTimecard.setValues({
        hours_type:option.value,
        actual_work_done:'',
      });
    }
  };

  const handleHolidayChange=(value,actionMeta)=>{
    console.log(value)
    formAddTimecard.setFieldValue('hours',value.data.hours)
  }

  const handlewbsChange = (option) => {
    setSelectedWbs(option);
    console.log("WBS", option);
    formAddTimecard.setFieldValue(
      "wbs",
      option.value,
    );
  };

  const handleProjectChange = (newValue, actionMeta) => {
    formAddTimecard.setFieldValue("project", newValue.value);
    // console.log(`action: ${actionMeta.action}`);
    // console.log("newValue: ", newValue.data.project.wbs_list);
    // console.log("id", (parseInt(sessionStorage.getItem(USER_ID))));
    // console.log("type", (parseInt(newValue.data.project.wbs_list[0].id)))

    let wbslistArray = [];
    for (let i = 0; i < newValue.data.project.wbs_list.length; i++) {
      if (parseInt(newValue.data.project.wbs_list[i].assignee_id) == parseInt(sessionStorage.getItem(USER_ID))) {
        wbslistArray.push({
          value: newValue.data.project.wbs_list[i].id,
          label: newValue.data.project.wbs_list[i].title,
          data: newValue.data.project.wbs_list[i],
        });
        
      }
    }
    setWbsList(wbslistArray);

    //setSelectedProject(newValue.data.project.wbs_list)
    //console.log(selectedProject);

    //console.log("aaa", formAddTimecard.values.project)
  };
  

  const projects = useSelector((state) => {
    let projectsArray = [];

    Array.from(state.projects.data).forEach((item, idx) => {
      projectsArray.push({
        value: item.project.id,
        label: item.project.sub_task,
        data: item,
      });
    });
    return projectsArray;
  });


  return (
    <>
      <CModal
        closeOnBackdrop={false}
        show={props.show}
        onClose={()=>{props.onClose();formAddTimecard.resetForm()}}
        size="lg"
      >
        <CForm>
          <CModalHeader closeButton>
            Enter New Timecard Item Details
          </CModalHeader>
          <CModalBody>
            <CRow>
              <CCol className="col-md-12 mb-3">
                {/*Type : {row?.time_type}*/}
                <CLabel
                  className="custom-label-5"
                  htmlFor="assigneeSelectPM"
                  loseMenuOnSelect={true}
                  isClearable={false}
                  isMulti={false}
                >
                  Hour Type :
                </CLabel>
                <Select
                  id="hours_type"
                  name="hours_type"
                  options={worktypes}
                  onChange={handleHoursTypeChange}
                  // value={formAddTimecard.values.hours_type}
                />
                {formAddTimecard.touched.hours_type && formAddTimecard.errors.hours_type && <small style={{ color: 'red' }}>{formAddTimecard.errors.hours_type}</small>}
              </CCol>
              {selectedType.label == 'HOL' && <CCol className="col-md-12 mb-3">
                <CLabel className="custom-label-wbs5">Select Holiday : </CLabel>
                <Select
                  id="project"
                  name="project"
                  className="custom-forminput-5"
                  onChange={handleHolidayChange}
                  options={holidays}
                />
              </CCol>}
              <CCol className="col-md-12 mb-3">
                <CLabel className="custom-label-wbs5"> Hours : </CLabel>
                <CInput
                  type="number"
                  aria-label="default input example"
                  id="hours"
                  name="hours"
                  className="custom-forminput-5"
                  placeholder="0.00"
                  //onChange={formAddTimecard.handleChange}
                  disabled={selectedType.value == 'HOL'}
                  min="0.00"
                  onChange={(e) => {
                    formAddTimecard.setFieldValue(
                      "hours",
                      e.target.value
                    );
                  }}
                  value={formAddTimecard.values.hours}
                />
                {formAddTimecard.touched.hours && formAddTimecard.errors.hours && <small style={{ color: 'red' }}>{formAddTimecard.errors.hours}</small>}
              </CCol>

              <CCol className="col-md-12 mb-3">
                  <CLabel
                    className="custom-label-wbs5"
                    htmlFor="assigneeSelectPM"
                    loseMenuOnSelect={true}
                    isClearable={false}
                    isMulti={false}
                  >
                    Project :{" "}
                  </CLabel>

                  <Select
                    id="project"
                    name="project"
                    className="custom-forminput-5"
                    onChange={handleProjectChange}
                    options={projects}
                  />
                  {formAddTimecard.touched.project && formAddTimecard.errors.project && <small style={{ color: 'red' }}>{formAddTimecard.errors.project}</small>}
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
                    WBS :
                  </CLabel>
                  <Select
                    id="wbs"
                    name="wbs"
                    className="custom-forminput-5"
                    options={wbsList}
                    onChange={handlewbsChange}
                    value={selectedWbs}
                  />
                  {formAddTimecard.touched.wbs && formAddTimecard.errors.wbs && <small style={{ color: 'red' }}>{formAddTimecard.errors.wbs}</small>}
                </CCol>
                <CCol className="col-md-12 mb-3">
                  <CLabel>Actual Work :</CLabel>
                  <CTextarea
                    type="text"
                    id="actual_work_done"
                    name="actual_work_done"
                    className="custom-forminput-5"
                    //onChange={formAddTimecard.handleChange}
                    onChange={(e) => {
                      formAddTimecard.setFieldValue(
                        "actual_work_done",
                        e.target.value
                      );
                    }}
                    value={formAddTimecard.values.actual_work_done}
                  />
                  {formAddTimecard.touched.actual_work_done && formAddTimecard.errors.actual_work_done && <small style={{ color: 'red' }}>{formAddTimecard.errors.actual_work_done}</small>}
                </CCol>
            </CRow>
          </CModalBody>
        </CForm>
        <CModalFooter>
          <CButton color="primary" type="button" onClick={formAddTimecard.handleSubmit}>
            save
          </CButton>{" "}
          <CButton color="secondary" type="button" onClick={()=>{props.onClose();formAddTimecard.resetForm()}}>
            Cancel

          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
export default AddTimecardItms;
