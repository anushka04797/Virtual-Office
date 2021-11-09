import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CModal, CModalBody, CModalHeader, CModalFooter, CTextarea } from '@coreui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { form, useFormik } from 'formik';
import { API } from '../../Config';
import swal from 'sweetalert';

const WbsModal = (props) => {
    console.log('props time card list data: ', props.timeCardList)
    // const modalData = useSelector(state => state.wbs.data)
    const [deliverableView, setDeliverableView] = useState(true);
    const [hrsWorked, setHrsWorked] = useState(true);
    const wbsStatusArray = [{
        "title": "To Do",
        "status": 1
    }, {
        "title": "Ongoing",
        "status": 2
    }, {
        "title": "Done",
        "status": 3
    }]

    const updateWbs = (data) => {
        console.log("formWbsUpdate:", data.remaining_hours)
        data.remaining_hours = props.data.project.remaining_hours - formWbsUpdate.values.hours_worked;
        API.put('wbs/update/' + props.data.id + '/', formWbsUpdate.values).then((res) => {
            console.log('update result', res)
            if (res.status == 200 && res.data.success == 'True') {
                swal({
                    title: "Good job!",
                    text: res.data.message,
                    icon: "success",
                });
                props.onClose()
            }
        })
    }

    const validateWbsCreateForm = (values) => {
        const errors = {};
        if (!values.title) errors.title = "Title is required!";
        if (!values.actual_work_done) errors.actual_work_done = "Actual work done today is required! (250 charracters)";
        return errors;
    }

    const formWbsUpdate = useFormik({
        initialValues: {
            project: props.data.project.id,
            assignee: props.data.assignee.id,
            title: props.data.title,
            status: props.data.status,
            description: props.data.description,
            start_date: props.data.start_date,
            end_date: props.data.end_date,
            hours_worked: props.data.hours_worked,
            progress: props.data.progress,
            comments: props.data.comments,
            deliverable: props.data.deliverable,
            date_updated: '',
            actual_work_done: '',
            remaining_hours: ''
        },
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateWbsCreateForm,
        onSubmit: (values) => updateWbs(values)
    })

    return (
        <>
            <CModal show={props.show} onClose={props.toggle} size="xl">
                <CModalHeader closeButton>
                    {props.data.project && props.data.project.task_delivery_order.title + " > "}
                    {props.data.project && <a href="https://www.google.com" target="_blank">{props.data.project.sub_task}</a>}
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <div className="col-lg-8 mb-3 border-right">
                            <CForm>
                                <CRow>
                                    <div className="col-lg-9 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Title
                                        </CLabel>
                                        <CInput id="title" name="title" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.title} />
                                        {formWbsUpdate.errors.title && <p className="error" style={{fontSize: '14px !important'}}>{formWbsUpdate.errors.title}</p>}
                                    </div>
                                    <div className="col-lg-3 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Status
                                        </CLabel>
                                        <select id="status" name="status" className="form-select" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.status}>
                                            {wbsStatusArray.map((item, idx) => (
                                                <option key={idx} value={item.status}>{item.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-12 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Descriptions
                                        </CLabel>
                                        <CTextarea id="description" name="description" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.description}></CTextarea>
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-6 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Start date
                                        </CLabel>
                                        <CInput id="start_date" name="start_date" type="date" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.start_date}></CInput>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            End date
                                        </CLabel>
                                        <CInput id="end_date" name="end_date" type="date" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.end_date}></CInput>
                                    </div>
                                </CRow>
                                {/*Actual work today */}
                                <CRow>
                                    <div className="col-lg-12 mb-3">
                                        <CLabel className="custom-label-wbs5">Actual Work Today</CLabel>
                                        <CInput id="actual_work_done" type="text" name="actual_work_done" className="custom-forminpput-5" onChange={(e) => {
                                            formWbsUpdate.setFieldValue('actual_work_done', e.target.value); if (e.target.value == null || e.target.value.length == 0) { setHrsWorked(true) } else { setHrsWorked(false) }
                                        }
                                        } value={formWbsUpdate.values.actual_work_done}></CInput>
                                        {formWbsUpdate.errors.actual_work_done && <p className="error" style={{fontSize: '14px !important'}}>{formWbsUpdate.errors.actual_work_done}</p>}
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-6 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Hours worked
                                        </CLabel>
                                        <CInput id="hours_worked" name="hours_worked" type="number" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.hours_worked} disabled={hrsWorked}></CInput>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Progress(%)
                                        </CLabel>
                                        <CInput id="progress" name="progress" type="number" max="100" className="custom-forminput-5" onChange={(e) => {
                                            formWbsUpdate.setFieldValue('progress', e.target.value); if (e.target.value == '100') {
                                                setDeliverableView(false);
                                                formWbsUpdate.setFieldValue('deliverable', formWbsUpdate.values.deliverable)
                                            } else {
                                                setDeliverableView(true);
                                                formWbsUpdate.setFieldValue('deliverable', "")
                                            }
                                        }} value={formWbsUpdate.values.progress}></CInput>
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-12 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Comments
                                        </CLabel>
                                        <CTextarea id="comments" name="comments" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.comments}></CTextarea>
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-12 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Deliverable
                                        </CLabel>
                                        <CInput id="deliverable" name="deliverable" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.deliverable} disabled={deliverableView} ></CInput>
                                    </div>
                                </CRow>
                                <div>
                                    <CButton type="button" onClick={formWbsUpdate.handleSubmit} color="primary">Update</CButton>{' '}
                                    <CButton
                                        color="secondary"
                                        onClick={props.toggle}
                                    >Cancel</CButton>
                                </div>
                            </CForm>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div>
                                <p>
                                    Reporter:
                                    <br></br>
                                    {/* Pial Noman */}
                                    <span className="wbs-reporter-name">{props.data.reporter?.first_name != undefined && props.data.reporter.first_name + " " + props.data.reporter.last_name}</span>
                                </p>
                                <p>
                                    Remaining hours:
                                    <br></br>
                                    {props.data.project?.remaining_hours}
                                </p>
                                {/**task list show */}
                                <div>
                                    <p>Task List:</p>
                                    <ol className="task-list-show">
                                        {props.timeCardList?.data != undefined ? (Array.from(props.timeCardList.data).map((item) => (
                                            <li className="task-list-show-item">
                                                {item.actual_work_done}
                                                <p><small> By {item.time_card_assignee.first_name +" "+ item.time_card_assignee.last_name} @ {item.date_updated} </small></p>
                                            </li>
                                        ))) : ("No task has been done so far.")}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </CRow>
                </CModalBody>
            </CModal>
        </>
    )
}
export default WbsModal;