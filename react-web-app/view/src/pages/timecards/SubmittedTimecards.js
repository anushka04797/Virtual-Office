import { CContainer, CRow,CCol, CDataTable } from '@coreui/react'
import React from 'react'

const SubmittedTimecards=()=>{
    return(
        <>
        <CContainer>
            <CRow>
                <CCol>
                    <h3 className="timecards-page-header mb-3">Submitted Timecards</h3>
                </CCol>
            </CRow>
            <CRow>
                <CCol>
                    {/* <CDataTable/> */}
                </CCol>
            </CRow>
        </CContainer>
        </>
    )
}

export default SubmittedTimecards