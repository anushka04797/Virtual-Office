import React, { useState, useEffect } from "react";
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
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { API } from "../../Config";

const NoWbs = () => {
  const [notStartedWBS, setNotStartedWBS] = useState([]);
  const [tdooptions, settdooptions] = useState([]);
  const [notstaredDetails, setnotstaredDetails] = useState([]);
  const [initialwbs, setinitialwbs] = useState([]);
  // const [myprojectDeatils, setmyProjectDetails] = useState([]);

  const [wbsinfo, setwbsinfo] = useState([]);
  let history = useHistory();
  const [selectedProject, setSelectedProject] = useState([]);
  const [options, setoptions] = useState();
  const [fetchproject, setfetchproject] = useState([]);
  const [tdos, setTdos] = useState([]);

  const populateOption = (a) => {
    //setmyProjectDetails(a)
    let list = [];
    for (let i = 0; i < a.length; i++) {
      //console.log("aaaaaaaaaaaaaa", a[i]);
      list.push({
        data: a[i],
        label: a[i].project.task_delivery_order.title,
        value: a[i].project.task_delivery_order.id,
      });
    }
    list.unshift({
      label: "Select All",
      value: "all",
      data: {},
    });
    console.log("list", uniqBy(list, "value"));
    setTdos(uniqBy(list, "value"));
    settdooptions(uniqBy(list, "value"));

    let info = [];

    for (let i = 0; i < a.length; i++) {
      let everyone = a[i].allassignees;

      info.push({
        data: a[i],
        name: a[i].project.sub_task,
        tdo: a[i].project.task_delivery_order.title,
        id: a[i].project.task_delivery_order.id,
        startDate: a[i].project.date_created,
        endDate: a[i].project.planned_delivery_date,
        allassignees: a[i].allassignees,
        everyone: [],
        total: Number(a[i].assignees.length),
        assignees: a[i].assignees,
        wbs: a[i].project.wbs_list.length,
        nowbspeople: [],
        taskTitle: a[i].project.task_title,
      });
      for (let j = 0; j < everyone.length; j++) {
        //console.log("every", everyone[j]);
        let a =
          everyone[j].assignee.first_name +
          " " +
          everyone[j].assignee.last_name;

        info[i].everyone.push(a);
      }
      let itm = a[i].assignees;
      for (let item = 0; item < itm.length; item++) {
        let assi =
          itm[item].assignee.first_name +
          " " +
          itm[item].assignee.last_name +
          ",";
        info[i].nowbspeople.push(assi);
      }
    }
    console.log("info array", info);
    setnotstaredDetails(info);
    setfilteredProjects(info);
    let initialWBSInfo = [];
    for (let i = 0; i < a.length; i++) {
      let assignees = a[i].allassignees;
      initialWBSInfo.push({
        assignees: a[i].allassignees,
        date_created: a[i].project.date_created,
        date_updated: a[i].project.date_updated,
        description: a[i].project.description,
        estimated_person: a[i].project.estimated_person,
        id: a[i].project.id,
        planned_delivery_date: a[i].project.planned_delivery_date,
        planned_hours: a[i].project.planned_hours,
        planned_value: a[i].project.planned_value,
        pm: a[i].project.pm,
        remaining_hours: a[i].project.remaining_hours,
        start_date: a[i].project.start_date,
        status: a[i].project.status,
        sub_task: a[i].project.sub_task,
        task_delivery_order: a[i].project.task_delivery_order,
        task_title: a[i].project.task_title,
        work_package_index: a[i].project.work_package_index,
        work_package_number: a[i].project.work_package_number,
      });
    }
    setinitialwbs(initialWBSInfo);
    console.log("wbsinfoarray", initialWBSInfo);
  };

  const data_populate = (a) => {
    console.log("data passed", a.length);
    //setmyProjectDetails(a)
    let info = [];
    for (let i = 0; i < a.length; i++) {
      let everyone = a[i].allassignees;
      info.push({
        data: a[i],
        name: a[i].project.sub_task,
        tdo: a[i].project.task_delivery_order.title,
        id: a[i].project.task_delivery_order.id,
        startDate: a[i].project.date_created,
        endDate: a[i].project.planned_delivery_date,
        allassignees: a[i].allassignees,
        everyone: [],
        total: Number(a[i].assignees.length),
        assignees: a[i].assignees,
        wbs: a[i].project.wbs_list.length,
        nowbspeople: [],
        taskTitle: a[i].project.task_title,
      });
      for (let j = 0; j < everyone.length; j++) {
        let a =
          everyone[j].assignee.first_name +
          " " +
          everyone[j].assignee.last_name;

        info[i].everyone.push(a);
      }
      let itm = a[i].assignees;
      for (let item = 0; item < itm.length; item++) {
        let assi =
          itm[item].assignee.first_name +
          " " +
          itm[item].assignee.last_name +
          ",";
        info[i].nowbspeople.push(assi);
      }
    }
    console.log("info array from populate", info);
    setfilteredProjects(info);
    let initialWBSInfo = [];
    for (let i = 0; i < a.length; i++) {
      let assignees = a[i].allassignees;
      initialWBSInfo.push({
        assignees: a[i].allassignees,
        date_created: a[i].project.date_created,
        date_updated: a[i].project.date_updated,
        description: a[i].project.description,
        estimated_person: a[i].project.estimated_person,
        id: a[i].project.id,
        planned_delivery_date: a[i].project.planned_delivery_date,
        planned_hours: a[i].project.planned_hours,
        planned_value: a[i].project.planned_value,
        pm: a[i].project.pm,
        remaining_hours: a[i].project.remaining_hours,
        start_date: a[i].project.start_date,
        status: a[i].project.status,
        sub_task: a[i].project.sub_task,
        task_delivery_order: a[i].project.task_delivery_order,
        task_title: a[i].project.task_title,
        work_package_index: a[i].project.work_package_index,
        work_package_number: a[i].project.work_package_number,
      });
    }
    setinitialwbs(initialWBSInfo);
    console.log("wbsinfoarray", initialWBSInfo);
  };

  const projects = useSelector((state) => {
    let e = [];
    Array.from(state.projects.pm_projects).forEach((item, idx) => {
      e.push(item);
    });
    //console.log("all Projects", e);
    return e;
  });

  const [projectDetails, setProjectDetails] = useState([projects]);
  const [filteredProjects, setfilteredProjects] = useState(projects);

  const filter_notStarted_by_projects = (options) => {
    let temp = [];
    console.log("filter", options);
    if (options.find((item) => item.value == "all")) {
      temp.push(notstaredDetails);
      console.log("temp all", temp);
    } else {
      for (let index = 0; index < options.length; index++) {
        for (let index1 = 0; index1 < notstaredDetails.length; index1++) {
          if (
            options[index].value ==
            notstaredDetails[index1].data.project.task_delivery_order.id
          ) {
            console.log(
              options[index].value,
              "matched! ",
              notstaredDetails[index1].data.project.task_delivery_order.id
            );

            temp.push(notstaredDetails[index1].data);
          }
        }
      }
      console.log("filtered array", temp);
    }
    // setfilteredProjects(temp);
    // // populate_data(temp);
    data_populate(temp);
  };

  const handleProjectChange = (value, actionMeta) => {
    console.log("select ", value, "action ", actionMeta);
    if (actionMeta.action == "select-option") {
      if (value.find((item) => item.value == "all")) {
        filter_notStarted_by_projects(
          tdooptions.filter((item) => item.value != "all")
        );
        setSelectedProject(tdooptions.filter((item) => item.value != "all"));
        console.log("value", value)
      } else {
        setSelectedProject(value);
        console.log("value", value)
        filter_notStarted_by_projects(value);
      }
    } else if (actionMeta.action == "clear") {
      setSelectedProject([]);
      filter_notStarted_by_projects(
        tdooptions.filter((item) => item.value != "all")
      );
    } else if (actionMeta.action == "remove-value") {
      setSelectedProject(value);
      if (value.length == 0) {
        filter_notStarted_by_projects(
          tdooptions.filter((item) => item.value != "all")
        );
      } else {
        filter_notStarted_by_projects(value);
      }
    }
  };
  React.useEffect(()=>{
    if (projects.length > 0 && fetchproject.length == 0) {
      setfetchproject(projects);
      //optionlist(projects);
    }
  },[projects])
  React.useEffect(() => {
    API.get("project/assignees-with-no-wbs/").then((res) => {
      let temp = [];
      console.log("api response", res.data.data);
      for(let i =0;i<res.data.data.length;i++)
      {
        if(res.data.data[i].assignees.length != 0 )
        {
          console.log("length", res.data.data[i].assignees.length)
          temp.push(res.data.data[i])
        }
      }
      console.log("temp", temp)
      setNotStartedWBS(temp);
      populateOption(temp);
    });

    
  }, []);
  return (
    <>
      <CRow>
        <CCol lg="9"></CCol>
        <CCol lg="3" className="mb-3 pl-4">
          <Select
            className="custom-forminput-6"
            placeholder="Filter by TDOs"
            searchable={true}
            options={tdos}
            isMulti
            onChange={handleProjectChange}
            value={selectedProject}
          />
        </CCol>
      </CRow>

      <div className="main-holder-projects">
        <h3 className="projectsHeader">
          Project Wise WBS Details ({filteredProjects.length}){" "}
        </h3>

        <div className="card-holder1">
          <CRow>
            {Array.from(filteredProjects).map((item, idx) => (
              <CCol lg="4" key={idx}>
                <CCard className="project-card1">
                  {" "}
                  {/* on card click project details card will show */}
                  <CCardBody
                    onClick={() => {
                      //   history.push({
                      //     pathname:"/dashboard/Projects/my-projects/details/"+
                      //     myprojectDetails[idx].project.work_package_number,
                      //     state: { project: myprojectDetails[idx] },
                      // })
                    }}
                  >
                    {/* <h6 className="id-no1">Work Package Number: # {item.project.work_package_number}</h6> */}

                    <h5 className="card-details1">
                      <span className="p-header-3">
                        <b>TDO: {item.tdo}</b>
                      </span>{" "}
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Project Name: {item.name}
                      </span>{" "}
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Task Title: {item.taskTitle}
                      </span>{" "}
                    </h5>

                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Planned Delivery Date: {item.endDate}
                      </span>
                    </h5>
                    <h5 className="card-details1">
                      <span className="p-header-3">
                        Assignees :{" " + item.everyone}
                        {/* {item.totalAssignee <= 1 &&
                          Array.from(item.allAssignees).map(
                            (i, index) =>
                             
                          )} */}
                      </span>{" "}
                    </h5>
                    {/* <h5 className="card-details1">
                      <span className="p-header-3">
                        Total Created WBS : {item.wbs}
                      </span>{" "}
                    </h5> */}
                    <h5 className="card-details1">
                      <span className="p-header-4">
                        Assignees with No WBS : {item.nowbspeople}
                        {/* {Array.from(item.nowbsarray).forEach((i, idx)=> {
                           
                            i.assignee.first_name + " " + i.assignee.last_name
                          })} */}
                      </span>
                    </h5>
                  </CCardBody>
                  <CCardFooter>
                    <Button
                      type="button"
                      className="create-wbs-from-modal float-right"
                      size="sm"
                      onClick={() => {
                        history.push({
                          pathname: "/dashboard/WBS/create-wbs",
                          state: { task: initialwbs[idx] },
                        });
                      }}
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
