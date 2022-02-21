import { CBadge, CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CDataTable, CRow } from "@coreui/react";
import React from "react";
import { Link, useHistory } from 'react-router-dom'

const Employees =()=>{
    let history=useHistory()
    return(
        <>
        <CContainer>
            
            <CRow>
                <CCol md="10" className="offset-md-1">
                    <CCard>
                        <CCardHeader>
                        <h3 className="timecards-page-header mb-3">Employee List</h3>
                        </CCardHeader>
                        <CCardBody className="no-border">
                            <CDataTable
                            items={[]} fields={[
                                {
                                    key: "#",
                                    _style: { width: "5%" },
                                    _classes: "font-weight-bold",
                                },
                                'Name',
                                'Employee ID',
                                'Email',
                                'Phone',
                                'Date Created',
                            ]}
                                primary
                                hover
                                striped
                                border={false}
                                outlined={false}
                                sorter
                                columnFilter
                                size="sm"
                                itemsPerPage={10}
                                pagination
                                scopedSlots={{
                                    'Action':
                                        (item) => (
                                            <td>
                                                <CBadge>
                                                    <CButton disabled={true} onClick={() => {}} type="button" size="sm" color="danger">Delete</CButton> <CButton onClick={() => { history.push({ pathname: '/dashboard/storages/details', state: { brand: item } }) }} size="sm" type="button" color="primary">Edit</CButton>
                                                </CBadge>
                                            </td>
                                        )
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
        </>
    )
}

export default Employees