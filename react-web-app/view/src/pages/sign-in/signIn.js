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
import { Link,Redirect,useHistory,useLocation } from "react-router-dom";
import { TOKEN } from "../../Config";
import { useSnackbar } from 'notistack';

const SignIn = () => {
  let history = useHistory();
  let location = useLocation()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  function login(){
    localStorage.setItem(TOKEN,'1234')
    history.push('/dashboard')
  }
  React.useEffect(()=>{
    if(location.registration == true){
      enqueueSnackbar('Registration Success! Please verify your email',{variant:'success'});
    }
  })
  return (
    <>
      {localStorage.getItem(TOKEN)?<Redirect to="/dashboard"/>:<div className="signin-content">
        <div className="container">
          <div className="row">
            {/**Form section */}
            <div className="col-lg-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <h3 className="form-header">Sign in</h3>
                  <div className="form-holder">
                    <CForm className="custom-form">
                      <div className="mb-3">
                        <CLabel
                          htmlFor="exampleInputEmail1"
                          className="custom-label-signin"
                        >
                          Email
                        </CLabel>
                        <CInput
                          type="email"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          className="custom-formgroup-signin"
                        />
                        {/* <CFormText id="emailHelp">
      We'll never share your email with anyone else.
    </CFormText> */}
                      </div>
                      <div className="mb-3">
                        <CLabel
                          htmlFor="exampleInputPassword1"
                          className="custom-label-signin"
                        >
                          Password
                        </CLabel>
                        <CInput
                          type="password"
                          id="exampleInputPassword1"
                          className="custom-formgroup-signin"
                        />
                      </div>
                      <div className="show-flex">
                        <div className="rem">
                          
                          <CInputCheckbox
                            className="mb-3 custom-check"
                            label="Remember Me"
                            id="remember"
                            onChange={(e) => {
                              console.log(e.target);
                            }}
                          />
                          <CLabel htmlFor="remember" className="custom-check-label">Remember me</CLabel>
                        </div>

                        <div className="forgot">
                          <Link className="forgot-link" to="/forgot-password">Forgot Password</Link>
                        </div>
                      </div>
                      <div className="submit-holder">
                        <CButton type="button" onClick={()=>{login()}} className="submit-button-signin">
                          Sign in
                        </CButton>
                      </div>
                    </CForm>
                    {/**Go to register */}
                    <div className="mb-4 mt-3">
                      <h5 className="final-footer-1"><span className="dum-text-1">Don't have an account?</span><Link className="registration-link-1" to="/register">Register</Link></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**Background imahge section */}
            <div className="col-lg-6 no-mob-display-sign-img">
              <img
                src={"assets/bgs/sign-in-img.svg"}
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
