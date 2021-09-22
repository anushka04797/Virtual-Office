import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CModal, CModalBody, CModalHeader, CModalFooter } from '@coreui/react';
import React, { useState } from 'react'

const WbsModal = (props) => {
    console.log(props.data)

    return (
        <>
            <CModal
                show={props.show}
                onClose={props.toggle}
            >
                <CModalHeader closeButton>{props.data.title}</CModalHeader>
                <CModalBody>
                    {props.data.description}
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary">Do Something</CButton>{' '}
                    <CButton
                        color="secondary"
                        onClick={props.toggle}
                    >Cancel</CButton>
                </CModalFooter>
            </CModal>
        </>
    )

}
export default WbsModal;