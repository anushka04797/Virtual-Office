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
import Select from 'react-select'
import React, { useEffect, useRef, useState } from "react";
import "./profileView.css";
import PassWordChangeForm from "../../components/changeUserPasswordForm/changePassword";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { API, BASE_URL, FILE_API, USER_ID } from "../../Config";
import { fetchPersonalDetails } from "../../store/slices/ProfileSlice";
import swal from "sweetalert";
import hidePwdImg from '../../assets/icons/Showpass-show.svg';
import showPwdImg from '../../assets/icons/Hide.svg';
import { useParams } from 'react-router-dom';
const UserProfile = () => {
    const onButtonClick = () => {
        // `current` points to the mounted file input element
    };
    const blood_groups = [
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' },
    ]
    const { id } = useParams()
    const [revealOldPwd, setRevealOldPwd] = useState(false);
    const [revealNewPwd, setRevealNewPwd] = useState(false);
    const [revealConfPwd, setRevealConfPwd] = useState(false);
    // const profile_details = useSelector(state => state.profile.data)
    const [profile_details, setProfileDetails] = useState()

    const [initialBloodGroup, setInitialBloodGroup] = useState("")
    const inputFile = useRef(null)
    const [image, setImage] = useState()
    const [avatar, setAvatar] = useState(profile_details ? (BASE_URL + profile_details.profile_pic) : "avatars/user-avatar-default.png")
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()
    const onImageChange = (image) => {
        setImage(image)
        setAvatar(URL.createObjectURL(image))
        update_profile_image(image)
    }
    const changeImageClick = () => {
        inputFile.current.click()
    }
    const profileEditForm = () => {
        console.log("values")
        setVisible(!visible);
        profile_update_form.setValues({
            first_name: profile_details.first_name,
            last_name: profile_details.last_name,
            email: profile_details.email,
            phone: profile_details.phone,
            address: profile_details.address,
            blood_group: profile_details.blood_group
        })
    }
    const handleBloodGroupChange = (values) => {
        console.log(values)
        profile_update_form.setValues({
            first_name: profile_update_form.values.first_name,
            last_name: profile_update_form.values.last_name,
            email: profile_update_form.values.email,
            phone: profile_update_form.values.phone,
            address: profile_update_form.values.address,
            blood_group: values.value
        })
        setInitialBloodGroup({ value: values.value, label: values.label })
    }
    const validateChangePassForm = (values) => {
        const errors = {}
        if (!values.old_password) errors.old_password = "Old Password Required"
        if (String(values.new_password).length < 8 || !values.new_password || values.new_password != values.new_password_confirm) errors.new_password = "Invalid New Password"
        return errors
    }
    const change_password = (values) => {
        let formData = new FormData()
        console.log('values', values)
        for (const [key, value] of Object.entries(change_pass_form.values)) {
            if (key != 'new_password_confirm') {
                formData.append(key, value)
            }
        }
        API.put('auth/change/password/', formData).then((res) => {
            console.log(res)
            if (res.status == 200) {
                change_pass_form.resetForm()
                swal('Updated', 'Your Password has been changed', 'success')
            }
        }).catch(err => {
            if (err.response.status == 400) {
                swal('Incorrect', 'Bad Request', 'warning')
            }
        })
    }
    const change_pass_form = useFormik({
        initialValues: {
            old_password: "",
            new_password: "",
            new_password_confirm: ''
        },
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateChangePassForm,
        onSubmit: change_password
    })
    const validate_profile_update_form = (values) => {
        const errors = {}
        if (!values.first_name) errors.first_name = "First Name is required"
        if (!values.last_name) errors.last_name = "Last Name is required"
        if (!values.email) errors.email = "Email is required"
        if (!values.address) errors.address = "Address is required"
        if (!values.blood_group) errors.blood_group = "Blood group is required"
        return errors
    }
    const update_profile = (values) => {
        console.log(values)
        API.post('auth/profile/update/' + sessionStorage.getItem(USER_ID) + '/', profile_update_form.values).then((res) => {
            console.log(res)
            if (res.status == 201 && res.data.success == 'True') {
                dispatch(fetchPersonalDetails(sessionStorage.getItem(USER_ID)))
                setVisible(false)
                swal('Updated!', 'Your Profile has been updated', 'success')
            }
        })
    }
    const update_profile_image = (image) => {
        let image_form_data = new FormData()
        image_form_data.append('profile_pic', image)
        console.log('image', image)
        FILE_API.post('auth/change/profile/image/' + sessionStorage.getItem(USER_ID) + '/', image_form_data).then((res) => {
            if (res.status == 201) {
                swal('Updated!', 'Profile Picture Updated', 'success')
            }
        }).catch(err => {
            if (err.status == 400) {
                swal('Incorrect', 'Bad Request', 'warning')
            }
        })
    }
    useEffect(() => {
        // window.scrollTo(0, 0);
        // setInitialBloodGroup({ value: profile_details.blood_group, label: profile_details.blood_group })
        // setAvatar(profile_details.profile_pic ? (BASE_URL + profile_details.profile_pic) : "avatars/user-avatar-default.png")
    }, [])

    useEffect(() => {
        console.log('id from route', id)
        if (id) {
            API.get('auth/profile/details/' + id + '/').then(res => {
                console.log('res', res.data)
                // profile_details=res.data.data
                setProfileDetails(res.data.data)
                window.scrollTo(0, 0);
                setInitialBloodGroup({ value: res.data.data.blood_group, label: res.data.data.blood_group })
                setAvatar(res.data.data.profile_pic ? (BASE_URL + res.data.data.profile_pic) : "avatars/user-avatar-default.png")
            }).catch(err => {

            })
        }
    }, [id])
    const profile_update_form = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            blood_group: ''
        },
        validateOnChange: true,
        validateOnBlur: true,
        validate: validate_profile_update_form,
        onSubmit: update_profile
    })
    function capitalize(string) {
        if (string != undefined) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
        return ''
    }
    return (
        <>
            <CContainer>
                <CModal closeOnBackdrop={false} alignment="center" show={visible} onClose={profileEditForm}>
                    <CModalHeader closeButton>
                        <CModalTitle className="modal-title-profile">
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
                                    <div className="col-md-6 mb-3">
                                        <CLabel className="custom-label-5" htmlFor="userFName">
                                            First Name *
                                        </CLabel>
                                        <CInput
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            className="custom-forminput-6"
                                            value={profile_update_form.values.first_name}
                                            onChange={profile_update_form.handleChange}
                                        />
                                    </div>
                                    {/**Last Name */}
                                    <div className="col-md-6 mb-3">
                                        <CLabel className="custom-label-5" htmlFor="userLName">
                                            Last Name *
                                        </CLabel>
                                        <CInput
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            className="custom-forminput-6"
                                            value={profile_update_form.values.last_name}
                                            onChange={profile_update_form.handleChange}
                                        />
                                    </div>
                                    {/**Job title */}
                                    <div className="col-md-12 mb-3">
                                        <CLabel className="custom-label-5" htmlFor="uEmail">
                                            Email *
                                        </CLabel>
                                        <CInput
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="custom-forminput-6"
                                            value={profile_update_form.values.email}
                                            onChange={profile_update_form.handleChange}
                                            readOnly
                                        ></CInput>
                                    </div>
                                    {/**Phone */}
                                    <div className="col-md-12 mb-3">
                                        <CLabel className="custom-label-5" htmlFor="uPhoneNo">
                                            Phone *
                                        </CLabel>
                                        <CInput
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={profile_update_form.values.phone}
                                            onChange={profile_update_form.handleChange}
                                            className="custom-forminput-6"
                                        ></CInput>
                                    </div>
                                    {/**address */}
                                    <div className="col-md-12 mb-3">
                                        <CLabel className="custom-label-5" htmlFor="Address">
                                            Address *
                                        </CLabel>
                                        <CInput
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={profile_update_form.values.address}
                                            onChange={profile_update_form.handleChange}
                                            className="custom-forminput-6"
                                        ></CInput>
                                        {profile_update_form.touched.address && profile_update_form.errors.address && <small style={{ color: 'red' }}>{profile_update_form.errors.address}</small>}
                                    </div>
                                    {/**blood_group */}
                                    <div className="col-md-12 mb-3">
                                        <CLabel className="custom-label-5" htmlFor="blood_group">
                                            Blood Group *
                                        </CLabel>
                                        <Select
                                            id="blood_group"
                                            value={initialBloodGroup}
                                            onChange={handleBloodGroupChange}
                                            className="custom-forminput-6"
                                            options={blood_groups}
                                        ></Select>
                                    </div>

                                    {/**Button groups */}
                                    <div className="col-md-12 ">
                                        <div className="project-form-button-holders mt-3">
                                            <CButton className="profile-form-btn update-profile" onClick={profile_update_form.handleSubmit} type="button" disabled={!profile_update_form.isValid}>
                                                Update Info
                                            </CButton>
                                            <CButton className="profile-form-btn cancel-update" type="reset" onClick={() => setVisible(!visible)}>
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
                            <CNavLink disabled={profile_details?.id != sessionStorage.getItem(USER_ID) ? true : false} data-tab="changePassword" className="special">
                                <CIcon name="cil-pen-alt" className="mr-1" />
                                Change Password
                            </CNavLink>
                        </CNavItem>
                    </CNav>
                    {/**___________nav tab details______ */}
                    <CTabContent>
                        {/**_____VIEW PROFILE____ */}
                        <CTabPane data-tab="viewProfile">
                            {profile_details != undefined && <CContainer>
                                <h3 className="profile-page-header">Profile Details</h3>
                                <CRow>
                                    <div className="col-lg-8 offset-lg-2">
                                        <CCard className="card-view-profile mt-3">
                                            <div className="user-profile-pic-div text-center">
                                                <CImg
                                                    alt="click to upload image"
                                                    className="mx-auto rounded-circle update-img"
                                                    src={avatar}
                                                />

                                                {/**__PRO PIC UP BUTTON__ */}
                                                <input style={{ display: 'none' }} ref={inputFile} type="file" onChange={(event) => { onImageChange(event.target.files[0]) }} />
                                                {profile_details.id == sessionStorage.getItem(USER_ID) && <CButton
                                                    onClick={changeImageClick}
                                                    type="button"
                                                    className="d-block mx-auto change-img-btn mt-1"
                                                >
                                                    {" "}
                                                    <CIcon name="cil-camera"></CIcon> Change Picture
                                                </CButton>}
                                            </div>
                                            <CCardBody>
                                                <hr />
                                                {profile_details.id == sessionStorage.getItem(USER_ID) && <CButton
                                                    className="edit-profile mb-3"
                                                    onClick={() => profileEditForm()}
                                                >
                                                    <CIcon name="cil-pen" className="mr-1" />
                                                    Edit Info
                                                </CButton>}

                                                {/**info show */}
                                                <div className="row justify-content-center">
                                                    <div className="col-md-6 col-lg-4">
                                                        <h5 className="info-header-1">Full Name</h5>
                                                        <h5 className="profile-details-points child">
                                                            {capitalize(profile_details.first_name) + ' ' + capitalize(profile_details.last_name)}{" "}
                                                        </h5>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <h5 className="info-header-1"> Email</h5>
                                                        <h5 className="profile-details-points-email">
                                                            {profile_details.email}
                                                        </h5>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <h5 className="info-header-1">Job title</h5>
                                                        <h5 className="profile-details-points-email">{profile_details?.slc_details?.slc?.name}</h5>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <h5 className="info-header-1"> Phone</h5>
                                                        <h5 className="profile-details-points child">
                                                            +{profile_details.phone}
                                                        </h5>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <h5 className="info-header-1"> Address</h5>
                                                        <h5 className="profile-details-points child">
                                                            {profile_details.address}
                                                        </h5>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <h5 className="info-header-1"> Blood Group</h5>
                                                        <h5 className="profile-details-points child">
                                                            {profile_details.blood_group}
                                                        </h5>
                                                    </div>
                                                </div>

                                                {/* <div className="all-da-buttons-1">
                                                <CLabel>Assigned Projects</CLabel>
                                                    {Array.from([{title:'ABC',work_package_index:'1001'}]).length > 0 && Array.from([{title:'ABC',work_package_index:'1001'}]).map((task, idx) => (
                                                        <CButton key={idx} type="button" className="package-button rounded-pill" onClick={() => {  }}>
                                                            {task.task_title}
                                                            <span className="tooltiptext">{task.work_package_index}</span>
                                                        </CButton>
                                                    ))}
                                                </div> */}
                                            </CCardBody>
                                        </CCard>
                                    </div>
                                </CRow>
                            </CContainer>}
                        </CTabPane>
                        {/**_____Change Password___ */}
                        <CTabPane data-tab="changePassword">
                            <CContainer>
                                <h3 className="profile-page-header">Change Password</h3>
                                <CRow>
                                    <div className="col-lg-8 offset-lg-2 col-md-12">
                                        <CCard className="mt-4 card-change-password">
                                            <CCardBody>
                                                <CForm>
                                                    <div className="mb-2">
                                                        <CLabel className="custom-label-5" htmlFor="userOldPass">
                                                            Old Password
                                                        </CLabel>
                                                        <div className="password-container">
                                                            <CInput type={revealOldPwd ? "text" : "password"} name="old_password" id="old_password" className="custom-forminput-6" value={change_pass_form.values.old_password} onChange={change_pass_form.handleChange} />
                                                            <img className="pwd-container-img"
                                                                title={revealOldPwd ? "Hide Old password" : "Show Old password"}
                                                                src={revealOldPwd ? hidePwdImg : showPwdImg}
                                                                onClick={() => setRevealOldPwd(prevState => !prevState)}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/**New Password */}
                                                    <div className="mb-2">
                                                        <CLabel className="custom-label-5" htmlFor="userNewPass">
                                                            New Password
                                                        </CLabel>
                                                        <div className="password-container">
                                                            <CInput type={revealNewPwd ? "text" : "password"} name="new_password" id="new_password" className="custom-forminput-6" value={change_pass_form.values.new_password} onChange={change_pass_form.handleChange} />
                                                            <img className="pwd-container-img"
                                                                title={revealNewPwd ? "Hide New password" : "Show New password"}
                                                                src={revealNewPwd ? hidePwdImg : showPwdImg}
                                                                onClick={() => setRevealNewPwd(prevState => !prevState)}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/**Confirm new password */}
                                                    <div className="mb-2">
                                                        <CLabel className="custom-label-5" htmlFor="userConfPass">
                                                            Confirm Password
                                                        </CLabel>
                                                        <div className="password-container">
                                                            <CInput type={revealConfPwd ? "text" : "password"} name="new_password_confirm" id="new_password_confirm" className="custom-forminput-6" value={change_pass_form.values.new_password_confirm} onChange={change_pass_form.handleChange} />
                                                            <img className="pwd-container-img"
                                                                title={revealConfPwd ? "Hide Confirm password" : "Show Confirm password"}
                                                                src={revealConfPwd ? hidePwdImg : showPwdImg}
                                                                onClick={() => setRevealConfPwd(prevState => !prevState)} />
                                                        </div>
                                                    </div>
                                                    {/**BUtton groups */}
                                                    <div className="project-form-button-holders mt-3">
                                                        <CButton className="profile-form-btn update-profile" disabled={!change_pass_form.isValid} type="button" onClick={change_pass_form.handleSubmit}>Update Password</CButton>
                                                        <CButton className="profile-form-btn cancel-update" type="button" onClick={change_pass_form.resetForm}>Cancel</CButton>
                                                    </div>
                                                </CForm>
                                            </CCardBody>

                                        </CCard>
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
