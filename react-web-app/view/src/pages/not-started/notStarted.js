import React, { useState, useEffect } from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonClient } from "../../Config";
import "./notStarted.css";
import Select from "react-select";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import uniqBy from "lodash/uniqBy";
import sortBy from "lodash/sortBy";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProjectsThunk,
  fetchProjectsAssigneeThunk,
  createWbsThunk,
  fetchWbsThunk,
  fetchProjectsForPMThunk,
} from "../../store/slices/ProjectsSlice";
import { TOKEN, USER_ID } from "../../Config";
import { Button } from "@mui/material";
import { element } from "prop-types";
import store from "../../store/Store";

const NoWbs = () => {
  const [options, setoptions] = useState();
  const [fetchproject, setfetchproject] = useState([]);
  const [tdos, setTdos] = useState([]);

  const projects = useSelector((state) => {
    let e = [];
    Array.from(state.projects.pm_projects).forEach((item, idx) => {
      e.push(item);
    });
    console.log("all Projects", e);
    return e;
  });

  const [nowbsforProject, setnoWbsforProject] = useState([]);
  const [allAssignee, setAllAssignee] = useState();
  const [allwbs, setallWbs] = useState();
  const [projectDetails, setProjectDetails] = useState([]);
  const [noWBS, setNoWBS] = useState([]);

  let noWbs = [];
  let allassignee = [];
  let wbslist = [];
  let details = [];
  const optionlist = (projects) => {
    let optionarray = [];
    for (let i = 0; i < projects.length; i++) {
      allassignee[i] = projects[i].assignees;
      wbslist[i] = projects[i].project.wbs_list;
      optionarray.push({
        data: projects[i],
        label: projects[i].project.task_delivery_order.title,
        value: projects[i].project.task_delivery_order.id,
      });
    }
    setProjectDetails(details);
    console.log("options", optionarray[0].data);
    console.log("allAssignee array", allassignee);
    console.log("wbslist", wbslist);
    console.log("details array ", details);
    setAllAssignee(allassignee);
    setallWbs(wbslist);
    setTdos(optionarray);
    nonewbs();

    for (let i = 0; i < projects.length; i++) {
      details.push({
        data: projects[i],
        name: projects[i].project.task_delivery_order.title,
        startDate: projects[i].project.date_created,
        endDate: projects[i].project.planned_delivery_date,
        plannedHours: projects[i].project.planned_hours,
        remainingHrs: projects[i].project.remaining_hours,
        assignees: projects[i].assignees,
        totalAssignee: projects[i].assignees.length,
        totalWBS: projects[i].project.wbs_list.length,
        noWbsPeople: allAssigneeswithNoWbs[i],
        totalNoWbsPeople: allAssigneeswithNoWbs[i].length,
      });
    }
  };

  let allAssigneeswithNoWbs = [];
  const nonewbs = () => {
    for (let i = 0; i < allassignee.length; i++) {
      let temp1 = [];
      let temp2 = [];
      let temp3 = [];
      temp1 = [...allassignee[i]];
      temp1 = [...sortBy(temp1, "id")];
      temp2 = [...wbslist[i]];

      temp3 = [...uniqBy(temp2, "assignee_id")];
      temp3 = [...sortBy(temp3, "assignee_id")];

      console.log("temp1", temp1, "temp2", temp3);
      let assignedIds = new Map();
      for (let i = 0; i < temp3.length; i++) {
        assignedIds.set(temp3[i].assignee_id, true);
      }
      let assigneesWithNoWbs = [];
      for (let i = 0; i < temp1.length; i++) {
        if (assignedIds.get(temp1[i].id) == undefined) {
          assigneesWithNoWbs.push(temp1[i]);
          console.log("temp1[i]", temp1[i].id);
        }
      }
      console.log("assignees with no wbs", assigneesWithNoWbs);

      allAssigneeswithNoWbs.push(assigneesWithNoWbs);
    }
    console.log("final array", allAssigneeswithNoWbs);
    setNoWBS(allAssigneeswithNoWbs);

    console.log("project array", noWbs);
    console.log("all assignee", allassignee);
    console.log("all wbs", wbslist);
    setnoWbsforProject(noWbs);
  };

  React.useEffect(() => {
    if (projects.length > 0 && fetchproject.length == 0) {
      setfetchproject(projects);
      optionlist(projects);
    }
  }, [projects]);
  return (
    <>
      <CRow>
        <CCol lg="9"></CCol>
        <CCol lg="3" className="mb-3 pl-4">
          <Select
            className="custom-forminput-6"
            placeholder="Filter by Projects"
            options={tdos}
            isMulti
            // onChange={}
            //value={}
          />
        </CCol>
      </CRow>

      <div className="main-holder-projects">
        <h3 className="projectsHeader">
          Project Wise WBS Details ({projects.length}){" "}
        </h3>

        <div className="card-holder1">
          <CRow>
            {Array.from(projectDetails).map((item, idx) => (
              <CCol lg="4 ">
                <CCard className="project-card1">
                  {" "}
                  {/* on card click project details card will show */}
                  <CCardBody>
                    {/* <h6 className="id-no1">Work Package Number: # {item.project.work_package_number}</h6> */}
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Project Name: {item.name}
                      </span>{" "}
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Start Date:{" "}
                        {item.startDate.substring(
                          0,
                          item.startDate.indexOf(" ")
                        )}
                      </span>{" "}
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Planned Hours: {Number(item.plannedHours).toFixed(2)}{" "}
                      </span>{" "}
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Remaining Hours: {Number(item.remainingHrs).toFixed(2)}{" "}
                      </span>{" "}
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Planned Delivery Date: {item.endDate}
                      </span>
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Assignees({item.totalAssignee}) :
                        {item.totalAssignee > 1 &&
                          Array.from(item.assignees).map(
                            (i, index) =>
                              "  " + i.first_name + " " + i.last_name + ", "
                          )}
                        {item.totalAssignee <= 1 &&
                          Array.from(item.assignees).map(
                            (i, index) =>
                              "  " + i.first_name + " " + i.last_name
                          )}
                      </span>{" "}
                      {/*hyperlinked to see number of projects every assignees are assigned*/}
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Total Created WBS : {item.totalWBS}
                      </span>{" "}
                      {/*hyperlinked to see wbs for this porject in board*/}
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-4">
                        Assignees with No WBS ({item.totalNoWbsPeople}) :
                        {item.totalNoWbsPeople > 1 &&
                          Array.from(item.noWbsPeople).map(
                            (j, index1) =>
                              "  " + j.first_name + " " + j.last_name + ", "
                          )}
                        {item.totalNoWbsPeople <= 1 &&
                          Array.from(item.noWbsPeople).map(
                            (j, index1) =>
                              "  " + j.first_name + " " + j.last_name
                          )}
                      </span>
                    </h5>
                  </CCardBody>
                  <CCardFooter>
                    <Button
                      type="button"
                      className="create-wbs-from-modal float-right"
                      size="sm"
                    >
                      Create WBS
                    </Button>
                  </CCardFooter>
                </CCard>
              </CCol>
            ))}
          </CRow>
        </div>
      </div>
    </>
  );
};
export default NoWbs;
