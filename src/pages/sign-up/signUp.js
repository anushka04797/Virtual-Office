import React, { useState } from "react";
import "./signUp.css";
import {
  CForm,
  CInputGroup,
  CFormLabel,
  CFormControl,
  CFormText,
  CFormCheck,
  CButton,
  CContainer,
} from "@coreui/react";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register-page">
        <div className="container">
          <h3 className="form-header">Register</h3>
          {/**img uplaod div */}

          <div className="seller-pro-pic-holder">
            <div class="seller-profile-pic-div">
              <img src={"assets/bgs/dummy-user.svg"} />
            </div>
            <label for="propic" class="pro-img-up-btn mb-0">
              {/* <!-- propic --> */}
              <input
                id="propic"
                class="form-control form-control-md"
                type="file"
              />
            </label>
          </div>

          {/**submit form */}
          <div className="form-holder">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-sm-12 offset-sm-0">
                <CForm className="custom-form">
                  <div className="row">
                    {/**first name */}
                    <div className="col-md-6 col-sm-12 col-12 mb-3">
                      <CFormLabel htmlFor="firstName" className="custom-label">
                        First Name
                      </CFormLabel>
                      <CFormControl
                        type="text"
                        id="firstName"
                        aria-describedby="fnHelp"
                        className="custom-formgroup"
                      />
                    </div>
                    {/**last name */}
                    <div className="col-md-6 col-sm-12 col-12 mb-3">
                      <CFormLabel htmlFor="lastName" className="custom-label">
                        Last Name
                      </CFormLabel>
                      <CFormControl
                        type="text"
                        id="lastName"
                        aria-describedby="lnHelp"
                        className="custom-formgroup"
                      />
                    </div>
                    {/**Email */}
                    <div className="col-md-6 col-sm-12 col-12 mb-3">
                      <CFormLabel htmlFor="email" className="custom-label">
                        Email
                      </CFormLabel>
                      <CFormControl
                        type="email"
                        id="email"
                        aria-describedby="emailHelp"
                        className="custom-formgroup"
                      />
                    </div>
                    {/**Phone */}
                    <div className="col-md-6 col-sm-12 col-12 mb-3">
                      <CFormLabel htmlFor="phone" className="custom-label">
                        Phone
                      </CFormLabel>
                      <CFormControl
                        type="tel"
                        id="phone"
                        aria-describedby="phoneHelp"
                        className="custom-formgroup"
                      />
                    </div>
                    {/**password */}
                    <div className="col-md-6 col-sm-12 mb-3">
                      <CFormLabel
                        htmlFor="exampleInputPassword1"
                        className="custom-label"
                      >
                        Password
                      </CFormLabel>
                      <CFormControl
                        type="password"
                        id="exampleInputPassword1"
                        className="custom-formgroup"
                      />
                    </div>
                    {/*confirm password */}
                    <div className="col-md-6 col-sm-12 mb-3">
                      <CFormLabel
                        htmlFor="confirmPass"
                        className="custom-label"
                      >
                        Confirm Password
                      </CFormLabel>
                      <CFormControl
                        type="password"
                        id="confirmPass"
                        className="custom-formgroup"
                      />
                    </div>
                    {/*submit button */}
                    <div className="submit-holder">
                      <CButton type="submit" className="submit-button">
                        Submit
                      </CButton>
                    </div>
                    {/**Go to sign in */}
<div class="mb-4 mt-3">
  <h5 className="final-footer"><span className="dum-text">Already have an account?</span><Link className="registration-link" to="/">Sign in</Link></h5>
</div>
                  </div>
                </CForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
