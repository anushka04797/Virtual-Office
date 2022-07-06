import React, { useState, useEffect } from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonClient } from "../../Config";
import "./notStarted.css";
import Select from "react-select";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import uniqBy from "lodash/uniqBy";
import sortBy from "lodash/sortBy";
import { useDispatch, useSelector } from "react-redux";
import { fetchWbsThunk } from "../../store/slices/WbsSlice";
import { TOKEN, USER_ID } from "../../Config";

const NoWbs = () => {
  const dispatch = useDispatch();
  const [nowbsforProject, setnoWbsforProject] = useState([]);
  const [allAssignee, setAllAssignee] = useState();
  const [allprojects, setAllProjects] = useState();
  const [allwbs, setallWbs] = useState();

  let noWbs = [];
  let allassignee = [];
  let wbslist = [];
  const pmprojects = createAsyncThunk(
    "projects/fetchProjectsForPMThunk",
    async (user_id) => {
      const response = await JsonClient.get("project/all/" + user_id + "/");
      console.log("pm projects", response.data);

      setAllProjects(response.data);

      for (let i = 0; i < response.data.length; i++) {
        allassignee[i] = response.data[i].assignees;
        wbslist[i] = response.data[i].project.wbs_list;
        // if (response.data[i].project.wbs_list.length == 0) {
        //   console.log("no wbs under this project", response.data[i].project);
        //   noWbs.push(response.data[i].project);
        // }
      }

      setAllAssignee(allassignee);
      setallWbs(wbslist);

      console.log("allAssignee array", allassignee);
      console.log("wbslist", wbslist);
      let allAssigneeswithNoWbs = [];
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
      console.log("project array", noWbs);
      console.log("all assignee", allassignee);
      console.log("all wbs", wbslist);
      setnoWbsforProject(noWbs);
      return response.data;
    }
  );
  React.useEffect(() => {
    //noWbsforProjects();
    window.scrollTo(0, 0);
    dispatch(pmprojects(sessionStorage.getItem(USER_ID)));
  }, []);
  return (
    <>
      <CRow>
        <CCol lg="9"></CCol>
        <CCol lg="3" className="mb-3 pl-4">
          <Select
            className="custom-forminput-6"
            placeholder="Filter by Projects"
            /// options={}
            isMulti
            // onChange={}
            //value={}
          />
        </CCol>
      </CRow>
      <div className="main-holder-projects">
        <h3 className="projectsHeader">Project Wise WBS Details (3) </h3>

        <div className="card-holder1">
          <CRow>
            <CCol lg="4 ">
              <CCard className="project-card1"> {/* on card click project details card will show */}
                <CCardBody>
                  {/* <h6 className="id-no1">Work Package Number: # {item.project.work_package_number}</h6> */}
                  <h5 className="card-details1">
                    <span className="p-header-3">Project Name: </span>{" "}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Planned Hours: </span>{" "}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Remaining Hours: </span>{" "}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Planned Delivery Date : </span>
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">
                      Assignees(4) : Mary, Robert, Patricia, David
                    </span>{" "}
                    {/*hyperlinked to see number of projects every assignees are assigned*/}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Total WBS : 5 </span>{" "}
                    {/*hyperlinked to see wbs for this porject in board*/}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-4">
                      Assignees with No WBS (2): Robert, David{" "}
                    </span>
                  </h5>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol lg="4">
              <CCard className="project-card1">
                <CCardBody>
                  {/* <h6 className="id-no1">Work Package Number: # {item.project.work_package_number}</h6> */}
                  <h5 className="card-details1">
                    <span className="p-header-3">Project Name: </span>{" "}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Planned Hours: </span>{" "}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Remaining Hours: </span>{" "}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Planned Delivery Date : </span>
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">
                      Assignees(4) : Mary, Robert, Patricia, David
                    </span>{" "}
                    {/*hyperlinked to see number of projects every assignees are assigned*/}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Total WBS : 5 </span>{" "}
                    {/*hyperlinked to see wbs for this porject in board*/}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-4">
                      Assignees who with No WBS (2): Robert, David{" "}
                    </span>
                  </h5>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol lg="4">
              <CCard className="project-card1">
                <CCardBody>
                  {/* <h6 className="id-no1">Work Package Number: # {item.project.work_package_number}</h6> */}
                  <h5 className="card-details1">
                    <span className="p-header-3">Project Name: </span>{" "}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Planned Hours: </span>{" "}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Remaining Hours: </span>{" "}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Planned Delivery Date : </span>
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">
                      Assignees(4) : Mary, Robert, Patricia, David
                    </span>{" "}
                    {/*hyperlinked to see number of projects every assignees are assigned*/}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-3">Total WBS : 5 </span>{" "}
                    {/*hyperlinked to see wbs for this porject in board*/}
                  </h5>
                  <h5 className="card-details1">
                    <span className="p-header-4">
                      Assignees with No WBS (2): Robert, David{" "}
                    </span>
                  </h5>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
      </div>
    </>
  );
};
export default NoWbs;
