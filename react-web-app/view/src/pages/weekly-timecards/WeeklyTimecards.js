import React from 'react';
import "../timecards/timeCards.css";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { CCol, CButton, CContainer, CForm, CRow, CLabel ,CDataTable} from '@coreui/react';
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTimecardsPm } from '../../store/slices/TimecardSlice';
import { USER_ID } from '../../Config';

const WeeklyTimecards = () => {
   
    const dispatch = useDispatch();
    
 const timecardList=useSelector(state => state.timecardList.pm_timecards);
  console.log("data",timecardList)
    const colourStyles = {
        // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
        option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
    };
    
    let newData = timecardList.reduce(function(acc, curr) {
        let findIndex = acc.findIndex(function(item) {
          return item.time_card_assignee.id === curr.time_card_assignee.id
        })
      
        if (findIndex ===-1) {
          acc.push(curr)
        } else {
          acc[findIndex] = (Object.assign({}, acc[findIndex], curr))
      
        }
      
      
        return acc;
      }, [])
      
      
      console.log("newData",newData)

    return (
        <>
            <CContainer>
                <h3 className="timecards-page-header mb-3">Weekly Timecard</h3>
                {/**option to select particular emoloyee */}

                <CForm className="mt-2">
                    <CRow>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                                Select Employee
                            </CLabel>
                            <Select
                                closeMenuOnSelect={true}
                                aria-labelledby="assigneeSelectPM"
                                id="assigneeSelectPM"
                                minHeight="35px"
                                classNamePrefix="custom-forminput-6"

                                styles={colourStyles}
                                placeholder="Select from list"
                                isClearable={false}
                                isMulti={false}

                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <CButton className="generate-card-button" >Generate Timecard</CButton>
                        </div>
                    </CRow>
                </CForm>
                {/**Show Table */}
                <CRow>
                    {/**Export buttons */}
                    <CCol md="12">
                        <h5 className="tiny-header--5 mt-4">Export</h5>
                        <div className="format-buttons mt-3">
                            <CButton className="file-format-download" >PDF</CButton>
                            <CButton className="file-format-download" >Excel</CButton>

                            {/* <CButton className="file-format-download">Print</CButton> */}

                        </div>
                    </CCol>
                    {/**view timecard data */}
                    <CCol md="12">
                    <div className="mt-4">
                    <CDataTable  fields={[
                                    {
                                        key: "#",
                                        _style: { width: "5%" },
                                        _classes: "font-weight-bold",
                                    },
                                    'Employee Name',
                                    'Project Name',
                                    'Task Title',
                                    'Actual Work Done',
                                    'Total Hr(s)',
                                    'Date Created',
                                    'Date Updated'

                                ]}
                                    primary
                                    hover
                                    striped
                                    bordered
                                    sorter
                                    columnFilter

                                    size="sm"
                                    itemsPerPage={10}
                                    pagination
                                >

                                </CDataTable>
                    </div>
                    </CCol>
                </CRow>
            </CContainer>
        </>
    )
}
export default WeeklyTimecards;