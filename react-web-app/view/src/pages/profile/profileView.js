import CIcon from "@coreui/icons-react";
import {
  CLabel,
  CContainer,
  CNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
  CRow,
  CTabs,
  CCard,
  CButton,
  CImg,
  CCardBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CForm,
  CInput,
} from "@coreui/react";
import { React, useState } from "react";
import "./profileView.css";
import PassWordChangeForm from "../../components/changeUserPasswordForm/changePassword";
const UserProfile = () => {
  const onButtonClick = () => {
    // `current` points to the mounted file input element
  };
  const [visible, setVisible] = useState(false);
  const profileEditForm = () => {
    setVisible(!visible);
  };

  return (
    <>
      <CContainer>
        <CModal alignment="center" show={visible} onClose={profileEditForm}>
          <CModalHeader onDismiss={() => setVisible(!visible)} closeButton>
            <CModalTitle className="modal-title">
              <span className="edit-profile-form-header">
                Edit Profile Info
              </span>
            </CModalTitle>
          </CModalHeader>

          <CModalBody>
            <CContainer>
              <CForm>
                <CRow>
                  {/**First Name */}
                  <div className="col-md-6">
                    <CLabel className="custom-label-5" htmlFor="userFName">
                      First Name
                    </CLabel>
                    <CInput
                      type="text"
                      name="userFName"
                      className="custom-forminput-6"
                    ></CInput>
                  </div>
                  {/**Last Name */}
                  <div className="col-md-6">
                    <CLabel className="custom-label-5" htmlFor="userLName">
                      Last Name
                    </CLabel>
                    <CInput
                      type="text"
                      name="userLName"
                      className="custom-forminput-6"
                    ></CInput>
                  </div>
                  {/**Job title */}
                  <div className="col-md-12">
                    <CLabel className="custom-label-5" htmlFor="uEmail">
                      Email
                    </CLabel>
                    <CInput
                      type="email"
                      name="uEmail"
                      className="custom-forminput-6"
                    ></CInput>
                  </div>
                  {/**Email */}
                  <div className="col-md-12">
                    <CLabel className="custom-label-5" htmlFor="uJobTitle">
                      Job Title
                    </CLabel>
                    <CInput
                      type="text"
                      name="uJobTitle"
                      className="custom-forminput-6"
                    ></CInput>
                  </div>
                  {/**Phone */}
                  <div className="col-md-12">
                    <CLabel className="custom-label-5" htmlFor="uPhoneNo">
                      Phone
                    </CLabel>
                    <CInput
                      type="tel"
                      name="uPhoneNo"
                      className="custom-forminput-6"
                    ></CInput>
                  </div>

                  {/**Button groups */}
                  <div className="col-md-12 ">
                    <div className="project-form-button-holders mt-3">
                      <CButton className="profile-form-btn update-profile">
                        Update Info
                      </CButton>
                      <CButton className="profile-form-btn cancel-update">
                        Cancel
                      </CButton>
                    </div>
                  </div>
                </CRow>
              </CForm>
            </CContainer>
          </CModalBody>
        </CModal>

        {/**Main Content */}

        <CTabs activeTab="viewProfile">
          <CNav variant="tabs" className="tab-style">
            {/**View Profile */}
            <CNavItem>
              <CNavLink data-tab="viewProfile" className="special">
                <CIcon name="cil-user" /> View Profile
              </CNavLink>
            </CNavItem>
            {/**change password */}
            <CNavItem>
              <CNavLink data-tab="changePassword" className="special">
                <CIcon name="cil-pen-alt" className="mr-1" />
                Change Password
              </CNavLink>
            </CNavItem>
          </CNav>
          {/**___________nav tab details______ */}
          <CTabContent>
            {/**_____VIEW PROFILE____ */}
            <CTabPane data-tab="viewProfile">
              <CContainer>
                  <h3 className="profile-page-header">Profile Details</h3>
                <CRow>
                  <div className="col-lg-8 offset-lg-2">
                    <CCard className="card-view-profile mt-3">
                      <div className="user-profile-pic-div text-center">
                        <CImg
                          alt="click to upload image"
                          className="mx-auto rounded-circle update-img"
                          src={"assets/bgs/dummy-user.svg"}
                        />

                        {/**__PRO PIC UP BUTTON__ */}

                        <CButton
                          onClick={onButtonClick}
                          className="d-block mx-auto change-img-btn mt-1"
                        >
                          {" "}
                          <CIcon name="cil-camera"></CIcon> Change Picture
                        </CButton>
                      </div>
                      <CCardBody>
                        <hr />
                        <CButton
                          className="edit-profile mb-3"
                          onClick={() => profileEditForm()}
                        >
                          <CIcon name="cil-pen" className="mr-1" />
                          Edit Info
                        </CButton>

                        {/**info show */}
                        <div className="row justify-content-center">
                          <div className="col-md-6">
                            <h5 className="info-header-1">Full Name</h5>
                            <h5 className="project-details-points child">
                              Fahmida Sharmin Pranto{" "}
                            </h5>
                          </div>
                          <div className="col-md-6">
                            <h5 className="info-header-1"> Email</h5>
                            <h5 className="project-details-points child">
                              fahmida.pranto@dma-bd.com
                            </h5>
                          </div>
                          <div className="col-md-6">
                            <h5 className="info-header-1">Job title</h5>
                            <h5 className="project-details-points child">
                              Front End Developer{" "}
                            </h5>
                          </div>
                          <div className="col-md-6">
                            <h5 className="info-header-1"> Phone</h5>
                            <h5 className="project-details-points child">
                              01684911581
                            </h5>
                          </div>
                        </div>
                      </CCardBody>
                    </CCard>
                  </div>
                </CRow>
              </CContainer>
            </CTabPane>
            {/**_____Change Password___ */}
            <CTabPane data-tab="changePassword">
              <CContainer>
              <h3 className="profile-page-header">Change Password</h3>
                <CRow>
                  <div className="col-lg-8 offset-lg-2 col-md-12">
                    <PassWordChangeForm />
                  </div>
                </CRow>
              </CContainer>
            </CTabPane>
          </CTabContent>
        </CTabs>
      </CContainer>
    </>
  );
};
export default UserProfile;
