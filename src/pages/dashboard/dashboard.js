import React, { Suspense } from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/header/Header';
import MatSideBar from '../../components/sidebar/MatSideBar';
import { CContainer, CFade } from '@coreui/react';
import innerRoutes from '../../routes/DashboardRoutes'
import {
    Route,
    Switch,
  } from 'react-router-dom';
  
import './dashboard.css'
const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const Dashboard=()=> {
    React.useEffect(()=>{
        console.log('dashboard mounted')
    },[])
    return (
        <>
        <CContainer>
            Dashboard
        </CContainer>
        </>
    );
}

export default React.memo(Dashboard)
