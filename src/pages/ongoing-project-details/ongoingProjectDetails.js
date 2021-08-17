import React from 'react';
import { makeStyles } from '@material-ui/styles';
import './ongoingProjectDetails.css'
import { CCard, CCardBody } from '@coreui/react';
import GradeIcon from '@material-ui/icons/Grade';
import { Link, Redirect, useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';

const OngoingProjectDetails = () => {



    return (
        <>
            <div className="container">
                <h3 className="dash-header">Ongoing Projects(5)</h3>
                <div className="row">
                    <div className="col-md-10">
                        <CCard className="card-ongoing-project">
                            <CCardBody>
                                <h4 className="ongoing-card-header"><IconButton aria-label="favourite" size="medium" >
                                    <GradeIcon fontSize="inherit" className="fav-button" />
                                </IconButton>Virtual Guard</h4>
                                <hr className="header-underline1" />

                                {/*task percentage portion */}
                                <div>
                                    <h5><span className="tiny-header1">Task Done : </span>5/10 </h5>
                                    <h6 className="show-amount">200/400 Hrs</h6>
                                    <div className="progress progress-background">


                                        <div className="progress-bar custom-progress1 progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                            </CCardBody>

                        </CCard>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OngoingProjectDetails;