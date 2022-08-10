import {
  CContainer,
  CRow,
  CCol,
  CForm,
  CLabel,
  CButton,
  CDataTable,
  CBadge,
} from "@coreui/react";
import orderBy from "lodash/orderBy";
import React, { useState, useEffect } from "react";
//import "./timeCards.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { FILE_API, USER_ID } from "../../Config";
import { API } from "../../Config";
import { has_permission } from "../../helper";
import { useFormik } from "formik";
import jsPDF from "jspdf";
import "jspdf-autotable";

import CIcon from "@coreui/icons-react";
import moment from "moment";
import swal from "sweetalert";
//import AddTimecardItms from "./addTimecardItem";
//import EditTimeCard from "./Edit";

import { useLocation } from "react-router-dom";

const Holidaylist = () => {
  const [allholidays, setallHolidays] = useState([]);
  const [holidayData, setholidayData] = useState([])

  const holidayTable = (data) => {
    var tableData=[]
    for (let i = 0 ;i<data.length;i++){
        tableData.push ({
            // "Year",
            //   "Holiday Title",
            //   "Start Date",
            //   "End Date",
            //   "Hour(s)",

            "year" : data[i].Year,
            "title": data[i].holiday_title, 
            "startdate": data[i].start_date, 
            "enddate":data[i].end_date,
            "hours": data[i].hours
        })
        console.log("table data ", tableData)
    }
    setholidayData(tableData)

  }

  useEffect(() => {
    API.get("organizations/holiday/all/").then((res) => {
      console.log("res", res.data.data);
      setallHolidays(res.data.data);
      holidayTable(res.data.data)
    });
    console.log("hello");
  }, []);

  return (
    <CContainer>
      <CRow className="justify-content-between">
        <CCol>
          <h3 className="timecards-page-header mb-3"> Holiday Calender</h3>
        </CCol>
      </CRow>

      <CCol md="12">
        <CCol md="12">
          <CDataTable
            items={holidayData}
            fields={[
              "Year",
              "Holiday Title",
              "Start Date",
              "End Date",
              "Hour(s)",
            ]}
            primary
            hover
            striped
            bordered
            sorter
            //columnFilter
            size="sm"
            itemsPerPage={20}
            pagination
          />
        </CCol>
      </CCol>
    </CContainer>
  );
};

export default Holidaylist;
