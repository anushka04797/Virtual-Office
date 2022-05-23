import {
  CContainer,
  CRow,
  CCol,
  CDataTable,
  CLabel,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "../../helper";
import moment from "moment";
import "./timeCards.css";
import { fetchUserSubmittedTimecards } from "../../store/slices/TimecardSlice";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useState } from "react";
import { has_permission } from "../../helper.js";
import * as FileSaver from "file-saver";
const SubmittedTimecards = () => {
  const [pdfData, setPdfData] = useState([]);
  let submitted =[]
  const profile_details = useSelector((state) => state.profile.data);
  const submitted_timecards = useSelector((state) => {
    let temp = [];
    Array.from(state.timecardList.user_weekly_submitted_timecards).forEach(
      (item, idx) => {
        temp.push({
          Weekending: moment(item.week_end).format("ddd, MMMM DD, YYYY"),
          Name: item.employee.first_name + " " + item.employee.last_name,
          Total: item.total_hours,
          RHR: item.RHR == null ? "-" : item.RHR,
          SIC: item.SIC == null ? "-" : item.SIC,
          HOL: item.HOL == null ? "-" : item.HOL,
          WFH: item.WFH == null ? "-" : item.WFH,
          OTO: item.OTO == null ? "-" : item.OTO,
          PB1: item["PB1"] == null ? "-" : item["PB1"],
          Submitted:
            moment(item.submitted_at).format("ddd, MMMM DD, YYYY") +
            " at " +
            moment(item.submitted_at).format("h:mm"),
        });
      }
    );
    
    submitted=[...temp]
    return temp;
  });
  const dispatch = useDispatch();
  const nextSatDay = () => {
    var satday = new Date();
    for (let i = 0; i < 7; i++) {
      if (satday.getDay() === 6) {
        console.log("sat", satday);
        break;
      } else {
        satday = moment(satday).add(1, "day").toDate();
      }
    }
    satday = moment(satday).format("YYYY-MM-DD");
    return satday;
  };
  React.useEffect(() => {
    dispatch(fetchUserSubmittedTimecards());

    
  }, []);
  const exportPDF = () => {
    
    const pdfTitle =
      profile_details.first_name + " " + profile_details.last_name;

    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Timecard of"; //+ " " + pdfTitle;
    const headers = [
      [
        "Weekending",
        "Name",
        "Total",
        "RHR",
        "SIC",
        "HOL",
        "PB1",
        "WFH",
        "OTO",
        "Submitted",
      ],
    ];
    const uData = submitted.map((elt, idx) => [
      elt.Weekending,
      elt.Name,
      elt.Total,
      elt.RHR,
      elt.SIC,
      elt.HOL,
      elt.PB1,
      elt.WFH,
      elt.OTO, 
      elt.Submitted, 
      console.log("data", elt),
    ]);
    let content = {
      startY: 145,
      head: headers,
      body: uData,
    };

    // let day = new Date();
    // let time = day.toLocaleString("en-US", {
    //   hour: "numeric",
    //   minute: "numeric",
    //   hour12: true,
    // });
    // day = moment(day).format("DD/MM/YY");
    // const edate = moment(endDate).format("DD/MM/YYYY");
    // doc.setFontSize(17);
    doc.text(170, 50, "Datasoft Manufacturing & Assembly");
    doc.setFontSize(13);
    doc.text(245, 75, "Gulshan Branch");
    doc.setFontSize(11);
    doc.text(42, 105, "Submitted Time Card");
    // doc.text(410, 105, "Week-Ending: " + edate); //+ edate)
    if(!has_permission("projects.add_projects"))

       {doc.text(42, 125, "Employee Name: " + pdfTitle)} //+ name)

    // let date = new Date();
    // console.log("date", date);
    doc.text(440, 360, "Total " +submitted.length+ " Submitted");

    // doc.text(400, 375, "Submitted : " + time + "  " + day);

    doc.autoTable(content);

    // var blobPDF =  new Blob([ doc.output('blob') ], { type: 'application/vnd.ms-excel' });

    //let blob = new Blob([csv], { type: 'application/vnd.ms-excel' });
    doc.save("Timecard of" + " " + pdfTitle + ".pdf");
    
    // FileSaver.saveAs(blobPDF, "dummy.csv");
    // console.log("data", pdfData);
  };
  const exportXL =()=>{
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    

  }
  return (
    <>
      <CContainer>
        <CRow>
          <CCol>
            <h3 className="timecards-page-header mb-3">Submitted Timecards</h3>
          </CCol>
          <CCol md="8" id="tableRef" className="d-flex justify-content-end">
            <h5 className="tiny-header--5 mt-3 mr-2">Export </h5>
            <div className="format-buttons mt-3 mb-3 ">
              <CButton
                className="file-format-download"
                onClick={() => {
                  exportPDF();
                }}
              >
                <CIcon name="cil-description" className="mr-2" /> PDF
              </CButton>
              <CButton className="file-format-download" onClick={() => {exportXL();}}>
                <CIcon name="cil-spreadsheet" className="mr-2" />
                Excel
              </CButton>
              {/* <CButton className="file-format-download">Print</CButton> */}
            </div>
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol>
            <CLabel className="custom-label-5" htmlFor="assigneeSelect">
              Company :{" "}
              {profile_details.slc_details?.slc?.department?.company?.name}
            </CLabel>
          </CCol>
        </CRow>
        <CRow>
        {!has_permission("projects.add_projects") && 
          <CCol>
            <CLabel className="custom-label-5" htmlFor="assigneeSelect">
              Employee Name :{" "}
              {capitalize(profile_details.first_name) +
                " " +
                capitalize(profile_details.last_name)}
            </CLabel>
          </CCol>}
        </CRow>
        <CRow className="mt-5">
          <CCol>
            <CDataTable
              items={submitted_timecards}
              fields={[
                {
                  key: "Weekending",
                  _style: { width: "15%" },
                  _classes: "font-weight-bold",
                },
                "Name",
                "Total",
                {
                  key: "RHR",
                  sorter: false,
                },
                {
                  key: "SIC",
                  sorter: false,
                },
                {
                  key: "HOL",
                  sorter: false,
                },
                {
                  key: "PB1",
                  sorter: false,
                },
                {
                  key: "WFH",
                  sorter: false,
                },
                {
                  key: "OTO",
                  sorter: false,
                },
                {
                  key: "Submitted",
                  sorter: false,
                },
              ]}
              itemsPerPage={10}
              pagination
              striped
              bordered
              sorter
            />
            <div class="alert alert-info" role="alert">
              <CRow>
                <CCol md="5"></CCol>
                <CCol md="3"></CCol>
                <CCol md="4">
                  {
                    <small>
                      {"   "}
                      Total <b>&nbsp;{submitted_timecards.length}&nbsp;</b>{" "}
                      Submitted
                    </small>
                  }
                </CCol>
              </CRow>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default SubmittedTimecards;
