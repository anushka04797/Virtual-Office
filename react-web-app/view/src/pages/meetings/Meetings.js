import { CContainer, CRow, CCol, CCard, CCardBody, CButton, CInput, CForm, CLabel, CSelect, CAlert } from '@coreui/react';
import { React, useEffect, useState } from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import './meetings.css';
import JitsiMeet from '../jitsi/JitsiMeet'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux';
import { API } from '../../Config';
import swal from 'sweetalert';
import Select from 'react-select';
const OurMeetings = () => {
    const [meeting, setMeeting] = useState(false)
    // const [roomName,setRoomName]=useState('')
    // const [username,setUserName] = useState('')
    const [password, setPassword] = useState('')
    const meetings = useSelector(state => state.meetings.data)
    const [participants,setParticipants] = useState([])
    const reset_form = () => {
        // setRoomName("")
        formMeeting.handleReset()
    }
    const create_meeting = (val) => {
        switch (val) {
            case true:
                setMeeting(val)
                break
            case false:
                reset_form()
                setMeeting(val)
                break
        }
        setMeeting(val)
    }
    const handleMeetingTypeChange = (option, actionMeta) => {

    }
    const handleParticipantsChange=(value,actionMeta)=>{
        
    }
    const validateMeetForm = (values) => {
        const errors = {};
        if (!values.room_name) errors.room_name = "Room Name is required!";
        //if (!values.userName) errors.post = "User Name is required!";
        return errors;
    }
    const createRoom = (values) => {
        //setMeeting(true)
        API.post('meetings/create', values).then((res) => {
            formMeeting.handleReset()
            swal('Created', 'New Meeting created', 'success')
        })
    }

    const formMeeting = useFormik({
        initialValues: {
            medium:"",
            type: "-1",
            room_id: "",
            room_name: "",
            participant: "",
            project: "",
            agenda: "",
            comments: "",
            start_time: "",
            end_time: "",
            duration: "",
        },
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateMeetForm,
        onSubmit: createRoom,
    })
    const handleTypeChange=(value,actionMeta)=>{
        if(actionMeta.action == 'select-option'){
            formMeeting.setFieldValue('type',value.value)
        }
    }
    useEffect(()=>{
        API.get('auth/assignee/list/').then((res)=>{
            console.log('assignees',res.data.data)
            let temp=[]
            Array.from(res.data.data).forEach((item,idx)=>{
              temp.push({value:item.id,label:item.first_name+' '+item.last_name,data:item})
            })
            setParticipants(temp)
          })
    },[])
    return (
        <>
            <CContainer>
                {!meeting ? (
                    <div className="row">
                        {/**Upcoming meetings */}
                        <div className="col-md-12 col-lg-4">
                            <h4 className="section-name">Meetings</h4>
                            {/*Meeting list */}
                            {meetings.length>0 ? meetings.map((meeting, idx) => (
                                <div key={idx}>
                                    <CCard className="meeting-cards">
                                        <CCardBody>
                                            <div className="d-flex">
                                                <div className="icon-holder">
                                                    <VideoCallIcon className="videoIcon" />
                                                </div>
                                                <div>
                                                    <h6 className="meeting-id">Meeting ID: #677465</h6>
                                                    <h5 className="projectName">Virtual Office</h5>
                                                    <div className="join-btn-holder"><CButton className="meeting-join-btn">Join</CButton></div>
                                                </div>
                                            </div>
                                        </CCardBody>
                                    </CCard>
                                    {/**dummy cards,remove after dynamic */}
                                </div>
                            )) : <CAlert className="no-value-show-alert" color="primary">Currently there are no meetings</CAlert>}
                        </div>
                        {/**create a new meeting */}
                        <div className="col-md-12 col-lg-8" >
                            <h4 className="section-name">Create a new meeting</h4>
                            {/**create that meeting!! */}
                            <CCard className="meeting-creator-form">
                                <CCardBody>
                                    <CForm>
                                        {/**Project Name */}
                                        <div className="mb-3">
                                            <CLabel className="custom-label-5">Meeting Location</CLabel>
                                            <CSelect id="medium" name="medium" value={formMeeting.values.medium} onChange={formMeeting.handleChange} aria-label="Default select example" className="custom-forminput-6">
                                                <option value="-1">-- Select --</option>
                                                <option value="physical">Physical</option>
                                                <option value="virtual">Virtual</option>
                                            </CSelect>
                                        </div>
                                        <div className="mb-3">
                                            <CLabel className="custom-label-5">Meeting Type</CLabel>
                                            <CSelect aria-label="Default select example" id="type" name="type" value={formMeeting.values.type} onChange={formMeeting.handleChange} className="custom-forminput-6">
                                                <option value="-1">-- Select --</option>
                                                <option value="project">Project</option>
                                                <option value="general">General Meeting</option>
                                            </CSelect>
                                        </div>
                                        {formMeeting.values.type == 'project' && <div className="mb-3">
                                            <CLabel className="custom-label-5">Project</CLabel>
                                            <CSelect aria-label="Default select example" className="custom-forminput-6">
                                                <option disabled>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CSelect>
                                        </div>}
                                        {/**host name */}
                                        <div className="mb-3">
                                            <CLabel
                                                htmlFor="hostName"
                                                className="custom-label-5"
                                            >Host</CLabel>
                                            <CInput type="text" id="hostName" className="custom-forminput-6" />

                                        </div>
                                        {/*agenda*/}
                                        <div className="mb-3">
                                            <CLabel
                                                htmlFor="agendaItem"
                                                className="custom-label-5"
                                            >Meeting Agenda</CLabel>
                                            <CInput type="text" id="agendaItem" className="custom-forminput-6" />
                                        </div>
                                        {/*room name*/}
                                        <div className="mb-3">
                                            <CLabel
                                                htmlFor="roomItem"
                                                className="custom-label-5"
                                            >Room Name</CLabel>
                                            <CInput
                                                type="text"
                                                id="room_name"
                                                name="room_name"
                                                className="custom-forminput-6"
                                                value={formMeeting.values.room_name}
                                                onChange={formMeeting.handleChange}
                                            />
                                            {(formMeeting.errors.room_name || formMeeting.touched.room_name) ? (<p className="error">Room Name invalid</p>) : ''}
                                        </div>
                                        <div className="mb-3">
                                            <CLabel className="custom-label-5" htmlFor="participants">Participants</CLabel>
                                            <Select
                                                closeMenuOnSelect={false}
                                                aria-labelledby="participants"
                                                id="participants"
                                                placeholder="Select from list"
                                                isClearable
                                                onChange={handleParticipantsChange}
                                                // value={defaultValue}
                                                isMulti
                                                classNamePrefix="custom-forminput-6"
                                                options={participants}
                                                // styles={colourStyles}
                                            />
                                        </div>
                                        {/**password */}
                                        <div className="mb-3">
                                            <CLabel
                                                htmlFor="exampleInputPassword1"
                                                className="custom-label-5"
                                            >
                                                Password
                                            </CLabel>
                                            <CInput
                                                type="password"
                                                id="exampleInputPassword1"
                                                className="custom-forminput-6"
                                                value={password} onChange={(event) => setPassword(event.target.value)}
                                            />
                                        </div>
                                        {/**submit button */}
                                        <div className="mb-3 create-meet-btn-holder">
                                            <CButton className="create-meeting-btn" type="button" onClick={formMeeting.handleSubmit}>Create Meeting</CButton>
                                        </div>

                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </div>
                    </div>) :
                    (<CRow>
                        <JitsiMeet roomName={formMeeting.values.room_name} username="Shaif" onMeetingClose={() => create_meeting(false)} />
                    </CRow>)}
            </CContainer>
        </>
    )
}
export default OurMeetings;
