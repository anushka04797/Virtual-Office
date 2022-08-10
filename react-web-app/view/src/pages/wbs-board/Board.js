import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
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
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JsonClient } from "../../Config";
import "./Board.css";
import Board, { Lane } from "react-trello";
import WbsModal from "./wbs-modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchWbsThunk } from "../../store/slices/WbsSlice";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CIcon from "@coreui/icons-react";
import { TOKEN, USER_ID } from "../../Config";
import { API } from "../../Config";
import swal from "sweetalert";
import Select from "react-select";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { getStepLabelUtilityClass } from "@material-ui/core";
import sortBy from "lodash/sortBy";
import uniq from "lodash/uniq";
import uniqBy from "lodash/uniqBy";
import { has_permission, unique_elements } from "../../helper.js";
import CommentIcon from "@mui/icons-material/Comment";
import { styled } from "@mui/material/styles";
import makeAnimated from "react-select/animated";
import { fetchProjectsForPMThunk } from "../../store/slices/ProjectsSlice";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useLocation } from "react-router";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import { element } from "prop-types";

const animatedComponents = makeAnimated();
const WbsBoard = () => {
  {
    /**export in excel */
  }
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  var fileName;
  const xlData = [];
  const [wbsList, setWbsList] = useState([]);
  const [projects, setProjects] = useState([]);
  const tempAssigneList = [];
  const [wbsAssigneeList, setWbsAssigneeList] = useState([]);
  let location = useLocation();
  const dispatch = useDispatch();
  const [fetchData, setFetchedData] = useState([]);
  const [data_loaded, setDataLoaded] = useState(false);
  const [update, setUpdate] = useState(0);

  const [boardData, setBoardData] = useState({
    lanes: [
      {
        id: "lane1",
        title: "TO DO",
        label: "",
        cards: [],
      },
      {
        id: "lane2",
        title: "IN PROGRESS",
        label: "",
        cards: [],
      },
      {
        id: "lane3",
        title: "DONE",
        label: "",
        cards: [],
      },
      {
        id: "lane4",
        title: "DELINQUENT",
        label: "",
        cards: [],
      },
    ],
  });

  function capitalize(string) {
    if (string != undefined) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    return "";
  }

  const profile = useSelector((state) => state.profile.data);
  const populate_data = (data) => {
    console.log("populating data", data);
    setFetchedData(data);
    let temp_data = {
      lanes: [
        {
          id: "lane1",
          title: "TO DO",
          label: "",
          cards: [],
        },
        {
          id: "lane2",
          title: "IN PROGRESS",
          label: "",
          cards: [],
        },
        {
          id: "lane3",
          title: "DONE",
          label: "",
          cards: [],
        },
        {
          id: "lane4",
          title: "DELINQUENT",
          label: "",
          cards: [],
        },
      ],
    };

    if (data != undefined) {
      data.forEach((element) => {
        //console.log("element", element);
        if (element.status === 1) {
          // console.log("1st cond", data.lanes[0])
          temp_data.lanes[0].cards.push({
            id: element.id.toString(),
            laneId: "lane1",
            title: element.title,
            description:
              element.description +
              "\n ➤ " +
              capitalize(element.assignee.first_name) +
              " " +
              capitalize(element.assignee.last_name),
            label: "★ " + element.end_date,
          });
          // console.log('1', temp_data)
        } else if (element.status === 2) {
          // console.log("2nd cond", temp_data.lanes[1])
          temp_data.lanes[1].cards.push({
            id: element.id.toString(),
            laneId: "lane2",
            title: element.title,
            description:
              element.description +
              "\n ➤ " +
              capitalize(element.assignee.first_name) +
              " " +
              capitalize(element.assignee.last_name),
            label: "★ " + element.end_date,
          });
          // console.log('2', temp_data)
        } else if (element.status === 3) {
          // console.log("3rd cond", temp_data.lanes[2])
          temp_data.lanes[2].cards.push({
            id: element.id.toString(),
            laneId: "lane3",
            title: element.title,
            description:
              element.description +
              "\n ➤ " +
              capitalize(element.assignee.first_name) +
              " " +
              capitalize(element.assignee.last_name),
            label: "★ " + element.end_date,
          });
          // console.log('3', temp_data)
        } else if (element.status === 4) {
          // console.log("3rd cond", temp_data.lanes[2])
          temp_data.lanes[3].cards.push({
            id: element.id.toString(),
            laneId: "lane4",
            title: element.title,
            description:
              element.description +
              "\n ➤ " +
              capitalize(element.assignee.first_name) +
              " " +
              capitalize(element.assignee.last_name),
            label: "★ " + element.end_date,
          });
          // console.log('3', temp_data)
        }
      });
      // console.log('tempAssigneList', tempAssigneList)
      // setWbsAssigneeList(sortBy(tempAssigneList, 'first_name'))
      // setResetAssigneeSelectValue({value:sessionStorage.getItem(USER_ID), label:profile.first_name+' '+profile.last_name})
    }

    console.log("temp data", temp_data);
    setBoardData(temp_data);
  };

  function getAssigneeList(data) {
    if (data != undefined) {
      data.forEach((element) => {
        if (
          !tempAssigneList.find((item) => item.value === element.assignee.id)
        ) {
          var temp = {
            value: element.assignee.id,
            label:
              element.assignee.first_name + " " + element.assignee.last_name,
          };
          tempAssigneList.push(temp);
        }
      });
    }
    // setWbsAssigneeList(sortBy(tempAssigneList, "label"));
  }
  const populate_assignees = () => {
    API.get("project/assignees/all/" + sessionStorage.getItem(USER_ID) + "/")
      .then((res) => {
        console.log("assignees", res.data.data);
        let temp_array = [];
        Array.from(res.data.data).forEach((element) => {
          if (!temp_array.find((item) => item.value === element.id)) {
            temp_array.push({
              value: element.id,
              label: element.first_name + " " + element.last_name,
            });
          }
        });
        // temp.push({value:'1',label:'A'})
        setWbsAssigneeList(sortBy(temp_array, "label"));
      })
      .catch((err) => {});
  };

  const boardStyle = {
    backgroundColor: "#fff",
    marginRight: "40px",
    marginLeft: "40px",
  };
  const laneStyle = { backgroundColor: "rgb(243 243 243)" };
  let currentLaneId,
    currentCardId = "";

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [timeCardListData, setTimeCardListData] = useState([]);

  const exportToCSV = () => {
    console.log(fetchData);

    for (let i = 0; i < fetchData.length; i++) {
      const item = fetchData[i];
      function getStatus(info) {
        if (info == "1") {
          return "To Do";
        } else if (info == "2") {
          return "In Progress";
        } else if (info == "3") {
          return "Done";
        }
      }
      xlData.push({
        "Sl. No.": i + 1,
        TDO: item.project.task_delivery_order.title,
        Project: item.project.sub_task,
        "Task Title": item.project.task_title,
        Assignee: item.assignee.first_name + " " + item.assignee.last_name,
        "WBS Title": item.title,
        "WBS Description": item.description,
        "Hrs Worked": item.hours_worked,
        "Date Updated": item.date_updated,
        "Progress(%)": item.progress + "%",
        Status: getStatus(item.status),
        Reporter: item.reporter.first_name + " " + item.reporter.last_name,
      });
    }
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    //  console.log("date is", date);
    fileName = "WBS" + date;
    const ws = XLSX.utils.json_to_sheet(xlData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  const editWbs = (cardId, metadata, laneId) => {
    setUpdate(update + 1);
    currentLaneId = laneId;
    currentCardId = cardId;

    console.log(boardData.lanes.find((element) => element.id == currentLaneId));
    // console.log(data.lanes.find(element => element.id == currentLaneId).cards.find(element => element.id == currentCardId).title)
    const wbsId = boardData.lanes
      .find((element) => element.id == currentLaneId)
      .cards.find((element) => element.id == currentCardId).id;

    API.get("wbs/time-card/list/" + wbsId + "/").then((res) => {
      console.log("time-card list result", res);
      // if (res.data.length != 0){
      setTimeCardListData(res.data);
      dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)));
      // }else {
      //     setTimeCardListData([]);
      // }
      console.log("timeCardListData: ", timeCardListData);
    });
    setModalData(wbsList.find((element) => element.id == wbsId));
    setModal(true);
  };

  const toggle = () => {
    setModalData(null);
    setModal(!modal);
  };

  const onWbsUpdate = () => {
    setModal(false);
    dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)));
    setModalData(null);
    setUpdate(update + 1);
  };

  const updateStatus = (
    cardId,
    sourceLaneId,
    targetLaneId,
    position,
    cardDetails
  ) => {
    let values;
    if (cardDetails.laneId == "lane1") {
      values = {
        status: 1,
      };
    } else if (cardDetails.laneId == "lane2") {
      values = {
        status: 2,
      };
    } else if (cardDetails.laneId == "lane3") {
      values = {
        status: 3,
      };
    }
    API.put("wbs/update/status/" + parseInt(cardDetails.id) + "/", values).then(
      (res) => {
        dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)));
        setUpdate(update + 1);
      }
    );
  };

  // filter wbs
  const filterWbs = (newValue, actionMeta) => {
    var temWbsList = wbsList;
    temWbsList = temWbsList.filter(
      (item) => item.assignee.id === newValue.value
    );
    populate_data(temWbsList);
    // getAssigneeList(wbsList);

    setResetAssigneeSelectValue(newValue);
    setShowClearBtn(true);
    // setDataLoaded(false)
  };

  const [showClearBtn, setShowClearBtn] = useState(false);
  const [resetAssigneeSelectValue, setResetAssigneeSelectValue] = useState();
  function clearFilter() {
    setShowClearBtn(false);
    populate_data(wbsList);
    // getAssigneeList(wbsList);
    setResetAssigneeSelectValue(null);
  }

  const filter_wbs_project_wise = (options) => {
    let temp_wbs_list = [];
    console.log("filter", options);
    if (options.find((item) => item.value == "all")) {
      temp_wbs_list = wbsList.filter(
        (item) => item.assignee.id == resetAssigneeSelectValue.value
      );
    } else {
      for (let index = 0; index < options.length; index++) {
        for (let index1 = 0; index1 < wbsList.length; index1++) {
          if (
            wbsList[index1].project.sub_task == options[index].value &&
            wbsList[index1].assignee.id == resetAssigneeSelectValue.value
          ) {
            temp_wbs_list.push(wbsList[index1]);
          }
        }
      }
    }
    // let temWbsList = wbsList.filter(item => item.assignee.id === newValue.value)
    populate_data(temp_wbs_list);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    populate_assignees();
    if (location.state?.from == "login") {
      enqueueSnackbar("Welcome ", { variant: "success" });
    }
    if (location.state?.message) {
      console.log("message", location.state.message);
      enqueueSnackbar(location.state.message, { variant: "warning" });
    }
    //console.log(new Date(JSON.parse(sessionStorage.getItem('TOKEN')).time).toISOString())
  }, []);
  const [selectedProjects, setSelectedProjects] = useState();
  const handleProjectChange = (value, actionMeta) => {
    console.log("select", value);
    if (actionMeta.action == "select-option") {
      if (value.find((item) => item.value == "all")) {
        setSelectedProjects(projects.filter((item) => item.value != "all"));
        filter_wbs_project_wise(projects.filter((item) => item.value != "all"));
      } else {
        setSelectedProjects(value);
        filter_wbs_project_wise(value);
      }
    } else if (actionMeta.action == "clear") {
      setSelectedProjects([]);
      filter_wbs_project_wise(projects.filter((item) => item.value != "all"));
    } else if (actionMeta.action == "remove-value") {
      setSelectedProjects(value);
      if (value.length == 0) {
        filter_wbs_project_wise(projects.filter((item) => item.value != "all"));
      } else {
        filter_wbs_project_wise(value);
      }
    }
  };
  React.useEffect(() => {
    API.get("project/all/" + sessionStorage.getItem(USER_ID) + "/").then(
      (res) => {
        let temp_projects = [];
        Array.from(res.data.data).forEach((item, idx) => {
          temp_projects.push({
            label: item.project.sub_task,
            value: item.project.sub_task,
            data: item.project,
          });
        });
        temp_projects.unshift({
          label: "Select All",
          value: "all",
          data: {},
        });
        setProjects(uniqBy(temp_projects, "value"));
      }
    );
  }, []);
  
  React.useEffect(() => {
    //noWbsforProjects();
    //dispatch(pmprojects(sessionStorage.getItem(USER_ID)));
    // dispatch(fetchWbsThunk(sessionStorage.getItem(USER_ID)))
    window.scrollTo(0, 0);
    if (has_permission("projects.add_projects")) {
      API.get("wbs/pm/all/" + sessionStorage.getItem(USER_ID) + "/")
        .then((res) => {
          console.log("board data", res.data.data);
          setWbsList(res.data.data);
          let pre_selected_items = [];
          let temp_projects = [];

          Array.from(res.data.data).forEach((item, idx) => {
            if (item.assignee.id === profile.id) {
              pre_selected_items.push(item);
            }
            temp_projects.push({
              label: item.project.sub_task,
              value: item.project.sub_task,
              data: item.project,
            });
          });
          temp_projects.unshift({
            label: "Select All",
            value: "all",
            data: {},
          });
          setProjects(uniqBy(temp_projects, "value"));
          console.log("projectsss", uniqBy(temp_projects, "value"));
          pre_selected_items = sortBy(pre_selected_items, [
            function (item) {
              return new Date(item.date_created);
            },
          ]).reverse();

          populate_data(uniq(pre_selected_items));
          // getAssigneeList(res.data.data);
          populate_assignees();
          setResetAssigneeSelectValue({
            value: sessionStorage.getItem(USER_ID),
            label: profile.first_name + " " + profile.last_name,
          });
          setDataLoaded(true);
        })
        .catch((err) => {
          setDataLoaded(true);
        });
    } else {
      API.get("wbs/all/" + sessionStorage.getItem(USER_ID) + "/")
        .then((res) => {
          console.log("true", res.data.data);
          setWbsList(res.data.data);
          let pre_selected_items = [];
          let temp_projects = [];
          let temp_checks = { all: true };

          Array.from(res.data.data).forEach((item, idx) => {
            if (item.assignee.id === profile.id) {
              pre_selected_items.push(item);
            }
            temp_projects.push({
              label: item.project.sub_task,
              value: item.project.sub_task,
              data: item.project,
            });
            temp_checks[item.project.sub_task] = false;
          });
          // Array.from(uniq(temp_projects)).forEach((item, idx) => {
          //     temp_checks[item]=false
          // })
          temp_projects.unshift({
            label: "Select All",
            value: "all",
            data: {},
          });
          setProjects(uniqBy(temp_projects, "value"));
          pre_selected_items = sortBy(pre_selected_items, [
            function (item) {
              return new Date(item.date_created);
            },
          ]).reverse();
          populate_data(uniq(pre_selected_items));
          // getAssigneeList(res.data.data);
          setResetAssigneeSelectValue({
            value: sessionStorage.getItem(USER_ID),
            label: profile.first_name + " " + profile.last_name,
          });
          setDataLoaded(true);
        })
        .catch((err) => {
          setDataLoaded(true);
        });
      console.log("projectssssss", projects);
      // for(let i=0;i<projects.length;i++){
      //   if(projects[i].project.wbsList.length==0)
      //   {
      //     console.log("no wbs under this project", projects[i].project)
      //   }
      // }
    }
  }, [profile, update]);
  const custom_progress_style = {
    height: 5,
    borderRadius: 3,
  };
  const cardStyle = { backgroundColor: "red" };
  
  return (
    <>
      <CContainer>
        {/* <h4 className="pl-2">Filter WBS board</h4> */}
        <CRow>
          {has_permission("projects.add_projects") && (
            <CCol lg="3" className="mb-3 pl-4">
              <Select
                value={resetAssigneeSelectValue}
                components={animatedComponents}
                placeholder="Filter by assignee"
                options={wbsAssigneeList}
                onChange={filterWbs}
              />
            </CCol>
          )}
          {!has_permission("projects.add_projects") && (
            <CCol lg="3" className="mb-3 pl-4">
              <Select
                value={resetAssigneeSelectValue}
                components={animatedComponents}
                placeholder="Filter by assignee"
                options={wbsAssigneeList}
                onChange={filterWbs}
                isDisabled={true}
              />
            </CCol>
          )}
          <CCol lg="3" className="mb-3 pl-4">
            <Select
              className="custom-forminput-6"
              placeholder="Filter by project"
              searchable={true}
              options={projects}
              components={animatedComponents}
              isMulti
              onChange={handleProjectChange}
              value={selectedProjects}
            />
          </CCol>
          <CCol lg="3" md="6" sm="6" className="mb-3">
            <CButton
              type="button"
              className="clear-filter-wbs"
              onClick={() => clearFilter()}
            >
              clear filter
            </CButton>
          </CCol>
          <CCol lg="3" md="6" sm="6" className="mb-3">
            <CButton
              className="export-project-list"
              style={{ float: "right" }}
              onClick={() => exportToCSV()}
            >
              <CIcon name="cil-spreadsheet" className="mr-2" />
              Export to excel
            </CButton>
          </CCol>
        </CRow>
        {/* */}

        {/* <Grid fluid direction="column" justifyContent="flex-start" alignItems="flex-start" sx={{
                    height: '100px',
                    width: '300px',
                    overflowY: "auto",
                    '& .MuiCheckbox-root': {
                        paddingLeft: '9px',
                        paddingTop: '0px',
                        paddingRight: '0px',
                        paddingBottom: '0px'
                    },
                    '& .MuiFormControlLabel-root': {
                        marginLeft: '0px'
                    }
                }}>
                    <Grid item xs={6} sm={2}>
                        <FormControlLabel
                            label={'All'}
                            control={<Checkbox
                                checked={checked['all']}
                                onChange={(e) => { handleAllCheck(e) }}
                                inputProps={{ 'aria-label': 'controlled' }}
                                size="small"
                            />}
                        />
                    </Grid>
                    {Array.from(projects).map((item, idx) => (
                        <Grid item xs={6} sm={2} key={idx}>
                            <FormControlLabel
                                label={item}
                                control={<Checkbox
                                    checked={checked[item]}
                                    onChange={(e) => { handleCheckBoxChange(e, item, idx) }}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    size="small"
                                />}
                            />
                        </Grid>
                    ))}
                </Grid> */}
        <CRow>
          {data_loaded === false ? (
            <CCol
              lg="8"
              md="8"
              sm="8"
              className="mt-4 offset-md-2 offset-lg-2 offset-sm-2"
            >
              <LinearProgress sx={custom_progress_style} />
            </CCol>
          ) : (
            <CRow>
              {/* {Array.from(nowbsforProject).map((project, idx) => (
                <CCol lg="2">
                  <CCard>
                    <CCardBody>
                      Project name : {project.task_delivery_order.title}
                    </CCardBody>
                  </CCard>
                </CCol>
              ))} */}
              <CCol  className={""}>
                <Board
                  data={boardData}
                  hideCardDeleteIcon
                  handleDragEnd={updateStatus}
                  onCardClick={editWbs}
                  style={boardStyle}
                  laneStyle={laneStyle}
                  //cardStyle={cardStyle}
                />
              </CCol>
            </CRow>
          )}
        </CRow>
      </CContainer>
      {modalData != null && (
        <WbsModal
          show={modal}
          onClose={onWbsUpdate}
          toggle={toggle}
          data={modalData}
          timeCardList={timeCardListData}
        />
      )}
    </>
  );
};
export default WbsBoard;
