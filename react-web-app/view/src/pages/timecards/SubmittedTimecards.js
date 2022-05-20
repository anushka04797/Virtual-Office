import { CContainer, CRow, CCol, CDataTable, CLabel, CButton } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { capitalize } from '../../helper';
import moment from "moment";
import "./timeCards.css";
import { fetchUserSubmittedTimecards } from '../../store/slices/TimecardSlice';

const SubmittedTimecards = () => {
  const profile_details = useSelector((state) => state.profile.data);
  const submitted_timecards = useSelector(state => {
    let temp = []
    Array.from(state.timecardList.user_weekly_submitted_timecards).forEach((item, idx) => {
      temp.push({ 'Weekending': moment(item.week_end).format('ddd, MMMM DD, YYYY'), 'Name': item.employee.first_name + ' ' + item.employee.last_name, 'Total': item.total_hours, 'RHR': item.RHR == null ? '-' : item.RHR, 'SIC': item.SIC == null ? '-' : item.SIC, 'HOL': item.HOL == null ? '-' : item.HOL, 'WFH': item.WFH == null ? '-' : item.WFH, 'OTO': item.OTO == null ? '-' : item.OTO, 'PB1': item['PB1'] == null ? '-' : item['PB1'], 'Submitted': moment(item.submitted_at).format('ddd, MMMM DD, YYYY') + ' at ' + moment(item.submitted_at).format('h:mm') })
    })
    return temp
  })
  const dispatch = useDispatch()
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
    satday = moment(satday).format('YYYY-MM-DD')
    return satday;
  };
  React.useEffect(() => {
    dispatch(fetchUserSubmittedTimecards())
  }, [])
  return (
    <>
      <CContainer>
        <CRow>
          <CCol>
            <h3 className="timecards-page-header mb-3">Submitted Timecards</h3>
          </CCol>
          <CCol
            md="8"
            id="tableRef"
            className="d-flex justify-content-end"
          >
            <h5 className="tiny-header--5 mt-3 mr-2">Export </h5>
            <div className="format-buttons mt-3 mb-3 ">
              <CButton
                className="file-format-download"
                onClick={() => { }}
              >
                <CIcon name="cil-description" className="mr-2" /> PDF
              </CButton>
              <CButton
                className="file-format-download"
                onClick={() => { }}
              >
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
              Company : {profile_details.slc_details?.slc?.department?.company?.name}

            </CLabel>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CLabel className="custom-label-5" htmlFor="assigneeSelect">
              Employee Name :{" "}
              {capitalize(profile_details.first_name) +
                " " +
                capitalize(profile_details.last_name)}
            </CLabel>
          </CCol>
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
                  sorter: false
                },
                {
                  key: "SIC",
                  sorter: false
                },
                {
                  key: "HOL",
                  sorter: false
                },
                {
                  key: "PB1",
                  sorter: false
                },
                {
                  key: "WFH",
                  sorter: false
                },
                {
                  key: "OTO",
                  sorter: false
                },
                {
                  key: "Submitted",
                  sorter: false
                }
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
                <CCol md="3">
                </CCol>
                <CCol md="4">
                  {
                    <small>
                      {"   "}
                      Total <b>&nbsp;{submitted_timecards.length}&nbsp;</b> Submitted
                    </small>
                  }
                </CCol>
              </CRow>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default SubmittedTimecards