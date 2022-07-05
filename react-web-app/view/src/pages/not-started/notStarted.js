import React, { useState, useEffect } from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonClient } from "../../Config";
import { CCard, CCardBody, CCardHeader, CCol, CContainer, CRow } from "@coreui/react";
import uniqBy from "lodash/uniqBy";
import sortBy from "lodash/sortBy";
import { useDispatch, useSelector } from "react-redux";
import { fetchWbsThunk } from "../../store/slices/WbsSlice";
import { TOKEN, USER_ID } from "../../Config";

const NoWbs = () => {
  const dispatch = useDispatch();
  const [nowbsforProject, setnoWbsforProject] = useState([]);
  const[allAssignee, setAllAssignee]=useState()
  const [allprojects, setAllProjects]=useState()
  let noWbs = [];
  let allassignee = [];
  let wbslist = [];
  const pmprojects = createAsyncThunk(
    "projects/fetchProjectsForPMThunk",
    async (user_id) => {
      const response = await JsonClient.get("project/all/" + user_id + "/");
      console.log("pm projects", response.data);

      setAllProjects(response.data)
      
      for (let i = 0; i < response.data.length; i++) {
        allassignee[i] = response.data[i].assignees;
        wbslist[i] = response.data[i].project.wbs_list;
        // if (response.data[i].project.wbs_list.length == 0) {
        //   console.log("no wbs under this project", response.data[i].project);
        //   noWbs.push(response.data[i].project);
        // }
      }
     
      setAllAssignee(allassignee)
      console.log("allAssignee array", allassignee)

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
      }
      console.log("project array", noWbs);
      console.log("all assignee", allassignee);
      console.log("all wbs", wbslist);
      setnoWbsforProject(noWbs);
      return response.data;
    }
  );
  React.useEffect(() => {
    //noWbsforProjects();
    dispatch(pmprojects(sessionStorage.getItem(USER_ID)));
  }, [])
  return (
    <>
      <CContainer>
        <CRow>
        <h6>Assigneees not associated with any wbs : </h6>
        {//Array.from(allprojects).forEach((item, idx) => ( 
        <CCol lg="6">
          <CCard>
            <CCardBody>
              Project name : 
            </CCardBody>
          </CCard>
        </CCol>
        //))
      };
        </CRow>
        </CContainer>
    </>
  );
};
export default NoWbs;
