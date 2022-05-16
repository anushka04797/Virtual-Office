import { CContainer, CRow,CCol, CDataTable,CLabel } from '@coreui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import { capitalize } from '../../helper';
import moment from "moment";
import "./timeCards.css";

const SubmittedTimecards=()=>{
    const profile_details = useSelector((state) => state.profile.data);
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
    return(
        <>
        <CContainer>
            <CRow>
                <CCol>
                    <h3 className="timecards-page-header mb-3">Submitted Timecards</h3>
                </CCol>
            </CRow>
            <CRow className="mt-4">
              <CCol md="4">
                <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                  Employee Name :{" "}
                  {capitalize(profile_details.first_name) +
                    " " +
                    capitalize(profile_details.last_name)}
                </CLabel>
              </CCol>
              <div class="w-100"></div>
              <CCol md="4">
                <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                  Weekending : {moment(nextSatDay()).format('dddd, DD MMMM YYYY')}
                </CLabel>
              </CCol>

            </CRow>
            <CRow className="mt-5">
                <CCol>
                    <CDataTable
                    fields={[
                        {
                          key: "Week",
                        //   _style: { width: "5%" },
                          _classes: "font-weight-bold",
                        },
                        "Total Hours",
                        "Files",
                        "Submitted At"
                      ]}
                    />
                </CCol>
            </CRow>
        </CContainer>
        </>
    )
}

export default SubmittedTimecards