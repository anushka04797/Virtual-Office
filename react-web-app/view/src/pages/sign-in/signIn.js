import React, { useEffect, useState } from "react";
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
import { PUBLIC_API, TOKEN, USER_ID } from "../../Config";
import { useFormik } from "formik";
import { useLocation } from "react-router";
import { useSnackbar } from "notistack";
const SignIn = () => {
  let history = useHistory();
  let location = useLocation()
  const validate_login_form=(values)=>{
    console.log(values);
    const errors = {};
    if (!values.email) errors.email = "Email is required!"
    if (!values.password) errors.password = "Password is required!"
    //if (!values.country_id) errors.country_id = "Country is required!"
    console.log(errors);
    return errors;
  }
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const login=()=>{
    
    PUBLIC_API.post('auth/login/',formLogin.values).then((res)=>{
      if(res.status == 200 && res.data.success == 'True'){
        localStorage.setItem(TOKEN,res.data.token)
        localStorage.setItem('groups',res.data.group)
        localStorage.setItem(USER_ID,res.data.user_id)
        history.push({pathname:'/dashboard',state:{from:'login'}})
      }
    }).catch(err=>{
      console.log(err.response)
      if(err.response.status == 403){
        enqueueSnackbar('Your account is not active yet',{variant:"warning"})
      }
    })
  }
  const formLogin = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validateOnChange:true,
    validateOnBlur:true,
    validate: validate_login_form,
    onSubmit: login
  })
  
  useEffect(()=>{
    if(location.state?.registration){
      enqueueSnackbar('Registration Succefull, Please verify email to login', { variant: 'info' })
    }
  },[])
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
                          id="email"
                          name="email"
                          value={formLogin.values.email}
                          onChange={formLogin.handleChange}
                          aria-describedby="emailHelp"
                          className="custom-formgroup-signin"
                          required
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
                          id="password"
                          name="password"
                          value={formLogin.values.password}
                          onChange={formLogin.handleChange}
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
                        <CButton type="button" onClick={formLogin.handleSubmit} className="submit-button-signin" disabled={!formLogin.isValid}>
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
