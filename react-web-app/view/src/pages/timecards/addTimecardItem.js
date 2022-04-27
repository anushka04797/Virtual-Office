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

const AddTimecardItms = (props) => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const onSave = (values) => {
    console.log("values", formAddTimecard.values);

    API.post('wbs/time-card/add/', formAddTimecard.values).then((res) => {
      console.log(res.data)
      swal('Added!', 'Successfuly Added', 'success')
    })
    setModal(false)
  }


  const formAddTimecard = useFormik({
    initialValues: {
      project: "",
      task_title: "",
      actual_work_done: "",
      hours: "",
      hours_type: "",
      wbs: "",
      assignee: sessionStorage.getItem(USER_ID)
    },
    validateOnChange: true,
    validateOnBlur: true,
    //validate: validateWbsCreateForm,
    onSubmit: onSave,
  });

  useEffect(() => {
    console.log(props.show);
  }, []);

  const [selectedType, setSelectedType] = useState({ label: "RHR", value: 1 });
  const [wbsList, setWbsList] = useState();
  const [selectedWbs, setSelectedWbs] = useState();

  const types = [
    { label: "RHR", value: "RHR" },
    { label: "SIC", value: "SIC" },
    { label: "VAC", value: "VAC" },
    { label: "OTS", value: "OTS" },
    { label: "OTO", value: "OTO" },
    { label: "HOL", value: "HOL" },
    { label: "WFH", value: "WFH" },
    { label: "COM", value: "COM" },
    { label: "PB1", value: "PB1" },
    { label: "PB2", value: "PB2" },
  ];

  const hourtype = (option) => {
    if (
      option.label == "OTO" ||
      option.label == "OTS" ||
      option.label == "RHR" ||
      option.label == "COM"
    )
      return true;
    else if (
      option.label == "SIC" ||
      option.label == "HOL" ||
      option.label == "VAC" ||
      option.label == "PB1" ||
      option.label == "PB2"
    )
      return false;
  };

  const handleHoursTypeChange = (option) => {
    setSelectedType(option);
    formAddTimecard.setFieldValue(
      "hours_type",
      option.label,

    );
    console.log("Type", option.label);
  };

  const handlewbsChange = (option) => {
    setSelectedWbs(option);
    console.log("WBS", option);
    formAddTimecard.setFieldValue(
      "wbs",
      option.label,
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
  // useEffect(() => {
  //   console.log("aa", formAddTimecard.values.project);
  // }, [formAddTimecard]);

  // const wbslist =()=>{
  //   let wbslistArray =[];
  //   for(let i = 0;i<selectedProject.length;i++)
  //   {
  //     wbslistArray.push({
  //       value: selectedProject[i].id,
  //       label: selectedProject[i].title,
  //       data:selectedProject[i],

  //     })
  //   }
  //  return wbslistArray;
  // }

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
        onClose={props.toggle}
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
                  options={types}
                  onChange={handleHoursTypeChange}
                  // value={formAddTimecard.values.hours_type}

                />
              </CCol>
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
                  onChange={(e) => {
                    formAddTimecard.setFieldValue(
                      "hours",
                      e.target.value
                    );
                  }}
                  value={formAddTimecard.values.hours}
                />
              </CCol>

              {hourtype(selectedType) && (
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
                </CCol>
              )}

              {hourtype(selectedType) && (
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

                    value={formAddTimecard.values.wbs}
                  />
                </CCol>
              )}
              {hourtype(selectedType) && (
                <CCol className="col-md-12 mb-3">
                  <CLabel>Actual Work Done :</CLabel>
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
                </CCol>
              )}
            </CRow>
          </CModalBody>
        </CForm>
        <CModalFooter>
          <CButton color="primary" onClick={formAddTimecard.handleSubmit}>
            save
          </CButton>{" "}
          <CButton color="secondary" onClick={props.toggle}>
            Cancel

          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
export default AddTimecardItms;
