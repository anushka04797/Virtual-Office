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

const NoWbs = () => {
  const [wbsinfo, setwbsinfo] = useState([])
  let history = useHistory();
  const [selectedProject, setSelectedProject] = useState([]);
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
  const [filteredProjects, setfilteredProjects] = useState(projects);
  const [noWBS, setNoWBS] = useState([]);
  const [assigneeNoWbs, setAssigneeNoWbs] = useState([]);
  let [data1, setdata1] = useState([]);

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
    optionarray.unshift({
      label: "Select All",
      value: "all",
      data: {},
    });

    console.log("options", optionarray[0].data);
    console.log("allAssignee array", allassignee);
    console.log("wbslist", wbslist);
    console.log("details array ", details);
    setAllAssignee(allassignee);
    setallWbs(wbslist);

    setTdos(optionarray);
    nonewbs();

    console.log("projects", projects)
    for (let i = 0; i < projects.length; i++) {
      
      //setwbsinfo(projects[i].project)
      details.push({
        data: projects[i],
        name: projects[i].project.task_delivery_order.title,
        id: projects[i].project.task_delivery_order.id,
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

    // let wbsinfo1 = []
    // for (let i = 0; i < projects.length; i++) {
    //   wbsinfo1.push({
    //     assignees: projects[i].assignees,
    //     date_created: projects[i].project.date_created,
    //     date_updated: projects[i].project.date_updated,
    //     description : projects[i].project.description,
    //     estimated_person : projects[i].project.estimated_person,
    //     id : projects[i].project.id,
    //     planned_delivery_date : projects[i].project.planned_delivery_date,
    //     planned_hours : projects[i].project.planned_hours,
    //     planned_value : projects[i].project.planned_value,
    //     pm : projects[i].project.pm,
    //     remaining_hours : projects[i].project.remaining_hours,
    //     start_date : projects[i].project.start_date,
    //     status: projects[i].project.status,
    //     sub_task : projects[i].project.sub_task,
    //     task_delivery_order: projects[i].project.task_delivery_order,
    //     task_title : projects[i].project.task_title,
    //     work_package_index : projects[i].project.work_package_index,
    //     work_package_number : projects[i].project.work_package_number
    //   })
    // }
    //setwbsinfo(wbsinfo1)
    console.log("details array", details);
    setProjectDetails(details);
  };
  const populate_data = (filteredProjects) => {
    console.log("filtered projects", filteredProjects);
    //setwbsinfo(filteredProjects.project)
    nonewbs();
    let filteredDetails = [];
    for (let i = 0; i < filteredProjects.length; i++) {
      filteredDetails.push({
        data: filteredProjects[i],
        name: filteredProjects[i].project.task_delivery_order.title,
        id: filteredProjects[i].project.task_delivery_order.id,
        startDate: filteredProjects[i].project.date_created,
        endDate: filteredProjects[i].project.planned_delivery_date,
        plannedHours: filteredProjects[i].project.planned_hours,
        remainingHrs: filteredProjects[i].project.remaining_hours,
        assignees: filteredProjects[i].assignees,
        totalAssignee: filteredProjects[i].assignees.length,
        totalWBS: filteredProjects[i].project.wbs_list.length,
        noWbsPeople: assigneeNoWbs[i],
        totalNoWbsPeople: assigneeNoWbs[i].length,
      });
    }
    console.log("filtered details array", filteredDetails);
    setProjectDetails(filteredDetails);
    let wbsInfo = []
    // for (let i = 0; i < filteredProjects.length; i++) {
    //   wbsInfo.push({
    //     assignees: filteredProjects[i].assignees,
    //     date_created: filteredProjects[i].project.date_created,
    //     date_updated: filteredProjects[i].project.date_updated,
    //     description : filteredProjects[i].project.description,
    //     estimated_person : filteredProjects[i].project.estimated_person,
    //     id : filteredProjects[i].project.id,
    //     planned_delivery_date : filteredProjects[i].project.planned_delivery_date,
    //     planned_hours : filteredProjects[i].project.planned_hours,
    //     planned_value : filteredProjects[i].project.planned_value,
    //     pm : filteredProjects[i].project.pm,
    //     remaining_hours : filteredProjects[i].project.remaining_hours,
    //     start_date : filteredProjects[i].project.start_date,
    //     status: filteredProjects[i].project.status,
    //     sub_task : filteredProjects[i].project.sub_task,
    //     task_delivery_order: filteredProjects[i].project.task_delivery_order,
    //     task_title : filteredProjects[i].project.task_title,
    //     work_package_index : filteredProjects[i].project.work_package_index,
    //     work_package_number : filteredProjects[i].project.work_package_number
    //   })
    // }     
    // setwbsinfo (wbsInfo)
    // console.log("wbsinfo", wbsInfo)

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
      setAssigneeNoWbs(allAssigneeswithNoWbs);
    }

    console.log("final array", allAssigneeswithNoWbs);
    setNoWBS(allAssigneeswithNoWbs);

    console.log("project array", noWbs);
    console.log("all assignee", allassignee);
    console.log("all wbs", wbslist);
    setnoWbsforProject(noWbs);
  };

  const filter_notStarted_by_projects = (options) => {
    let temp = [];
    console.log("filter", options);
    if (options.find((item) => item.value == "all")) {
      temp.push(projectDetails);
      console.log("temp all", temp);
    } else {
      for (let index = 0; index < options.length; index++) {
        console.log("options len", options[index].value);
        for (let index1 = 0; index1 < projects.length; index1++) {
          console.log("projects len", projects[index1]);
          if (
            options[index].value ==
            projects[index1].project.task_delivery_order.id
          ) {
            console.log(
              "id1 ",
              options[index].value,
              "id2",
              projects[index1].project.task_delivery_order.id
            );
            temp.push(projects[index1]);
            console.log("temp array", temp);
          }
        }
      }
      console.log("filtered array", temp);
    }
    setfilteredProjects(temp);
    populate_data(temp);
  };

  const handleProjectChange = (value, actionMeta) => {
    console.log("select ", value, "action ", actionMeta);
    if (actionMeta.action == "select-option") {
      if (value.find((item) => item.value == "all")) {
       
        filter_notStarted_by_projects(
          tdos.filter((item) => item.value != "all")
        );
        setSelectedProject(tdos.filter((item) => item.value != "all"));
      } else {
        setSelectedProject(value);
        filter_notStarted_by_projects(value);
      }
    } else if (actionMeta.action == "clear") {
      setSelectedProject([]);
      filter_notStarted_by_projects(tdos.filter((item) => item.value != "all"));
    } else if (actionMeta.action == "remove-value") {
      setSelectedProject(value);
      if (value.length == 0) {
        filter_notStarted_by_projects(
          tdos.filter((item) => item.value != "all")
        );
      } else {
        filter_notStarted_by_projects(value);
      }
    }
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
            searchable={true}
            options={tdos}
            isMulti
            // onChange={}

            onChange={handleProjectChange}
            value={selectedProject}
          />
        </CCol>
      </CRow>

      <div className="main-holder-projects">
        <h3 className="projectsHeader">
          Project Wise WBS Details ({projectDetails.length}){" "}
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
                  {/* <CCardFooter>
                    <Button
                      type="button"
                      className="create-wbs-from-modal float-right"
                      size="sm"
                      onClick={() => {
                        
                        history.push({
                          pathname: "/dashboard/WBS/create-wbs",
                          state: { task : wbsinfo },
                        });
                      }}
                    >
                      Create WBS
                    </Button>
                  </CCardFooter> */}
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
