import { CContainer, CRow, CCol, CForm,CLabel,CInput, CButton } from '@coreui/react';
import React,{useState} from 'react'
import "./timeCards.css"
import Select from "react-select";
const TimeCards = () => {
    const colourStyles = {
        // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
        option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
    };
    const options = [
        { value: "1", label: "Kibria Papel" },
        { value: "2", label: "Pial Noman" },
        { value: "3", label: "Saif Azad" },
        { value: "4", label: "Fahmida Sharmin Pranto" },
    ];
    const handleChange = (field, value) => {
        switch (field) {
            case "options":
                setProjectValue(value);
                break;
            default:
                break;
        }
    };
    const [projectValue, setProjectValue] = useState("");
    return (
        <>
            <CContainer>
                <h3 className="timecards-page-header mb-3">Upload Documents</h3>
              
                    <CForm>
                    <CRow>
                        {/**assignees */}
                        <CCol lg="3" md="12">
                            <h5 className="info-header-4">Name: </h5>
                            <h5 className="project-details-points child">Fahmida Sharmin Pranto</h5>
                            {/**IF PM */}
                            <div>
                                <CLabel className="custom-label-5" htmlFor="assigneeSelect">
                                    Select Employee
                                </CLabel>
                                <Select
                                    closeMenuOnSelect={true}
                                    aria-labelledby="assigneeSelect"
                                    id="assigneeSelect"
                                    minHeight="35px"
                                    placeholder="Select from list"
                                    isClearable={false}
                                    isMulti={false}
                                    onChange={(value) => handleChange("options", value)}
                                    classNamePrefix="custom-forminput-6"
                                    value={projectValue}
                                    options={options}
                                    styles={colourStyles}
                                />
                            </div>
                        </CCol>
                        {/**start date */}
                        <CCol lg="4" md="5">
                        <CLabel className="custom-label-5" htmlFor="startDate">
                                    From Date
                                </CLabel>
                                <CInput className="custom-forminput-6" type="date" name="startDate"/>
                        </CCol>
                        {/**END DATE */}
                        <CCol lg="4" md="5">
                      
                        <CLabel className="custom-label-5" htmlFor="todate">
                                    To Date
                                </CLabel>
                                <CInput className="custom-forminput-6" type="date" name="todate"/>
                        </CCol>
                        <CCol lg="1" md="2">
                            <div className="button-holder--3">
                            <CButton className="generate-card-button">Go</CButton>
                            </div>
                        </CCol>
                        </CRow>
                    </CForm>
              
            </CContainer>



        </>
    )
}
export default TimeCards;