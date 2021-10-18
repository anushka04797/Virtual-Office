import React, { useState } from "react";
import "./signUp.css";
import {
  CForm,
  CLabel,
  CButton,
  CInput,
} from "@coreui/react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PUBLIC_FORM_API } from "../../Config";

const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  last_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Register = () => {
  let history = useHistory()
  const [avatar,setAvatar]= useState()
  const [image,setImage]=useState()
  const validateSignUpForm = (values) => {
    const errors = {};
    if (!values.first_name) errors.first_name = "First Name is required!"
    if (!values.email) errors.email = "Email is required!"
    if (values.password !== values.confirm_pass) errors.confirm_pass = "Confirm your password"
    return errors;
  }
  const sign_up = () => {
    let formData = new FormData();
    for(const [key,value] of Object.entries(formSignUp.values)){
      if(key != 'confirm_pass'){
        formData.append(key,value)
      }
    }
    if(image!=null){
      formData.append('profile_pic',image)
    }
    PUBLIC_FORM_API.post('auth/register/',formData).then((res)=>{
      if(res.data.success == 'True' && res.status == 200){
        history.push({pathname:'/login',state:{registration:true}})
      }
      console.log(res)
    })
  }
  const reset_form = () => {
    formSignUp.resetForm()
  }
  const onImageChange=(file)=>{
    setAvatar(URL.createObjectURL(file))
    setImage(file)
  }
  const formSignUp = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
      confirm_pass: ''
    },
    //validationSchema:{SignupSchema},
    validateOnChange: true,
    validateOnBlur: true,
    validate: validateSignUpForm,
    onSubmit: sign_up
  })
  return (
    <>
      <div className="register-page">
        <div className="container">
          <h3 className="page-header">Register</h3>
          {/**img uplaod div */}

          <div className="seller-pro-pic-holder">
            <div className="seller-profile-pic-div">
              <img src={avatar?avatar:"avatars/user-avatar-default.png"} className="avatar-img" />
            </div>
            <label for="propic" className={image?"pro-img-up-btn mb-0 remove-img":"pro-img-up-btn mb-0"}>
              {/* <!-- propic --> */}
              <input
                id="propic"
                className="form-control form-control-md"
                type="file"
                onChange={(event) => onImageChange(event.target.files[0])}
              />
            </label>
          </div>

          {/**submit form */}
          <div className="custom-form-holder">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-sm-12 offset-sm-0">
                <CForm className="custom-form-sign">
                  <div className="row">
                    {/**first name */}
                    <div className="col-md-6 col-sm-12 col-12 mb-3">
                      <CLabel htmlFor="firstName" className="custom-label-2">
                        First Name
                      </CLabel>
                      <CInput
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formSignUp.values.first_name}
                        onChange={formSignUp.handleChange}
                        aria-describedby="fnHelp"
                        className="custom-formgroup-2"
                      />
                    </div>
                    {/**last name */}
                    <div className="col-md-6 col-sm-12 col-12 mb-3">
                      <CLabel htmlFor="lastName" className="custom-label-2">
                        Last Name
                      </CLabel>
                      <CInput
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formSignUp.values.last_name}
                        onChange={formSignUp.handleChange}
                        aria-describedby="lnHelp"
                        className="custom-formgroup-2"
                      />
                    </div>
                    {/**Email */}
                    <div className="col-md-6 col-sm-12 col-12 mb-3">
                      <CLabel htmlFor="email" className="custom-label-2">
                        Email
                      </CLabel>
                      <CInput
                        type="email"
                        id="email"
                        name="email"
                        value={formSignUp.values.email}
                        onChange={formSignUp.handleChange}
                        aria-describedby="emailHelp"
                        className="custom-formgroup-2"
                      />
                      {formSignUp.touched.email && formSignUp.errors.email && <p style={{color:'red'}}>{formSignUp.errors.email}</p>}
                    </div>
                    {/**Phone */}
                    <div className="col-md-6 col-sm-12 col-12 mb-3">
                      <CLabel htmlFor="phone" className="custom-label-2">
                        Phone
                      </CLabel>
                      <CInput
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formSignUp.values.phone}
                        onChange={formSignUp.handleChange}
                        aria-describedby="phoneHelp"
                        className="custom-formgroup-2"
                      />
                    </div>
                    {/**password */}
                    <div className="col-md-6 col-sm-12 mb-3">
                      <CLabel
                        htmlFor="exampleInputPassword1"
                        className="custom-label-2"
                      >
                        Password
                      </CLabel>
                      <CInput
                        type="password"
                        id="password"
                        name="password"
                        value={formSignUp.values.password}
                        onChange={formSignUp.handleChange}
                        className="custom-formgroup-2"
                      />
                    </div>
                    {/*confirm password */}
                    <div className="col-md-6 col-sm-12 mb-3">
                      <CLabel
                        htmlFor="confirmPass"
                        className="custom-label-2"
                      >
                        Confirm Password
                      </CLabel>
                      <CInput
                        type="password"
                        id="confirm_pass"
                        name="confirm_pass"
                        value={formSignUp.values.confirm_pass}
                        onChange={formSignUp.handleChange}
                        className="custom-formgroup-2"
                      />
                    </div>
                    {/*submit button */}
                    <div className="sign-holder">
                      <CButton type="button" disabled={!formSignUp.isValid} onClick={formSignUp.handleSubmit} className="submit-button-s">
                        Sign up
                      </CButton>
                    </div>
                    {/**Go to sign in */}
                    <div className="mb-4 mt-3">
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
