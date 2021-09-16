import React, { useState } from "react";
import "./signIn.css";
import {
  CForm,
  CInputGroup,
  CLabel,
  CInput,
  CFormText,
  CInputCheckbox,
  CButton,
} from "@coreui/react";
import { Link,Redirect,useHistory } from "react-router-dom";
import { TOKEN } from "../../Config";

const SignIn = () => {
  let history = useHistory();
  function login(){
    localStorage.setItem(TOKEN,'1234')
    history.push('/dashboard')
  }
  return (
    <>
      {localStorage.getItem(TOKEN)?<Redirect to="/dashboard"/>:<div className="signin-content">
        <div className="container">
          <div className="row">
            {/**Form section */}
            <div className="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <h3 className="form-header">Sign in</h3>
                  <div className="form-holder">
                    <CForm className="custom-form">
                      <div className="mb-3">
                        <CLabel
                          htmlFor="exampleInputEmail1"
                          className="custom-label"
                        >
                          Email
                        </CLabel>
                        <CInput
                          type="email"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          className="custom-formgroup"
                        />
                        {/* <CFormText id="emailHelp">
      We'll never share your email with anyone else.
    </CFormText> */}
                      </div>
                      <div className="mb-3">
                        <CLabel
                          htmlFor="exampleInputPassword1"
                          className="custom-label"
                        >
                          Password
                        </CLabel>
                        <CInput
                          type="password"
                          id="exampleInputPassword1"
                          className="custom-formgroup"
                        />
                      </div>
                      <div className="show-flex">
                        <div className="rem">
                          
                          <CInputCheckbox
                            className="mb-3 custom-check"
                            label="Remember Me"
                            onChange={(e) => {
                              console.log(e.target);
                            }}
                          />
                        </div>

                        <div className="forgot">
                          <Link className="forgot-link" to="/forgot-password">Forgot Password</Link>
                        </div>
                      </div>
                      <div className="submit-holder">
                        <CButton type="button" onClick={()=>{login()}} className="submit-button">
                          Sign in
                        </CButton>
                      </div>
                    </CForm>
                    {/**Go to register */}
                    <div className="mb-4 mt-3">
                      <h5 className="final-footer"><span className="dum-text">Don't have an account?</span><Link className="registration-link" to="/register">Register</Link></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**Background imahge section */}
            <div class="col-md-6">
              <img
                src={"assets/bgs/sign-in.svg"}
                alt="Image"
                className="img-fluid img-bg"
              />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};
export default SignIn;
