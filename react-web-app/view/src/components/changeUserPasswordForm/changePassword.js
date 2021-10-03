import React from 'react'
import { CForm, CLabel, CInput, CCardBody, CCard,CButton } from '@coreui/react'

const changePassword = () => {
    return (
        <>
            <CCard className="mt-3 card-view-profile">
                <CCardBody>
                    <CForm>
                        <div className="mb-2">
                            <CLabel className="custom-label-5" htmlFor="userOldPass">
                                Old Password
                            </CLabel>
                            <CInput type="password" name="userOldPass" className="custom-forminput-6"></CInput>
                        </div>
                        {/**New Password */}
                        <div className="mb-2">
                            <CLabel className="custom-label-5" htmlFor="userNewPass">
                                New Password
                            </CLabel>
                            <CInput type="password" name="userNewPass" className="custom-forminput-6"></CInput>
                        </div>

                        {/**Confirm new password */}
                        <div className="mb-2">
                            <CLabel className="custom-label-5" htmlFor="userConfPass">
                                Confirm Password
                            </CLabel>
                            <CInput type="password" name="userConfPass" className="custom-forminput-6"></CInput>
                        </div>
{/**BUtton groups */}
<div className="project-form-button-holders mt-3">
    <CButton className="profile-form-btn update-profile">Update Password</CButton>
                          <CButton className="profile-form-btn cancel-update">Cancel</CButton>
    </div>
                    </CForm>
                </CCardBody>

            </CCard>


        </>
    )
}

export default changePassword;