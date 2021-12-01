import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './TheSidebar.css'

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import { changeState } from '../store/slices/SideBarSlice';
import CIcon from '@coreui/icons-react'
import { has_permission } from '../helper';
// sidebar nav config
import { useHistory } from 'react-router';
import { API } from '../Config'
const TheSidebar = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const show = useSelector(state => state.sidebar.sidebarShow)
  React.useEffect(() => {
    
  }, [])
  const logout = () => {
    API.get('auth/logout/').then((res) => {
      sessionStorage.clear()
      history.push('/')
    }).catch(err => {
      sessionStorage.clear()
      history.push('/')
    })

  }
  return (
    <CSidebar colorScheme="light"
      show={show}
      onShowChange={(val) => dispatch(changeState(val))}
    >
      <CSidebarBrand className="d-md-down-none custom-color" to="/">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        /> */}
        <span className="c-sidebar-brand-full name-brand1">Virtual Office</span>

        {/* <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
        <span className="c-sidebar-brand-minimized name-brand1">VO</span>
      </CSidebarBrand>
      <CSidebarNav className="vo-sidebar">

        {/* <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        /> */}
        <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard" className="vo-navItem"></CSidebarNavItem>
        {/**Projects */}
        <CSidebarNavDropdown icon="cib-ghost" name="Projects" className="vo-navItem">
          {has_permission('projects.add_projects') && <CSidebarNavItem to="/dashboard/Projects/create-new-project" name="Create New Project" className="vo-navItem" ></CSidebarNavItem>}
          {has_permission('projects.add_projects') && <CSidebarNavItem to="/dashboard/Projects/my-projects" name="My Projects" className="vo-navItem"></CSidebarNavItem>}
          <CSidebarNavItem to="/dashboard/Projects/assigned-projects" name="Assigned Projects" className="vo-navItem"  ></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/Projects/completed-projects" name="Completed Projects" className="vo-navItem" ></CSidebarNavItem>



        </CSidebarNavDropdown>
         {/**WBS */}
         <CSidebarNavDropdown icon="cil-spreadsheet" name="WBS" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/WBS/create-wbs" name="Create WBS" className="vo-navItem"  ></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/WBS/board" name="Board" className="vo-navItem" ></CSidebarNavItem>

        </CSidebarNavDropdown>
         {/**EVMS */}
        {/* <CSidebarNavItem to="/dashboard/EVMS"name="EVMS" icon="cil-chart-line" className="vo-navItem"></CSidebarNavItem> */}
        {has_permission('evms.view_evms') && <CSidebarNavDropdown icon="cil-chart-line" name="EVMS" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/EVMS/create" name="Create EVMS" className="vo-navItem"  ></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/EVMS/view" name="View EVMS" className="vo-navItem" ></CSidebarNavItem>
        </CSidebarNavDropdown>}

        {/**Timecards */}
          {!has_permission('projects.add_projects') &&<CSidebarNavItem to="/dashboard/timecard/generate-timecard" name="Generate Timecard" icon="cil-library" className="vo-navItem"></CSidebarNavItem>}
        {/**timecards if PM */}
        {has_permission('wbs.view_timecard') && <CSidebarNavDropdown icon="cil-library" name="Timecards" className="vo-navItem">
          <CSidebarNavItem to="/dashboard/timecard/generate-timecard" name="Generate Timecard" className="vo-navItem"  ></CSidebarNavItem>
          <CSidebarNavItem to="/dashboard/timecard/weekly-timecards" name="Weekly Timecard" className="vo-navItem" ></CSidebarNavItem>
        </CSidebarNavDropdown>}
        {/**Meetings */}
        <CSidebarNavItem to="/dashboard/meetings" icon="cil-view-module" name="Meetings" className="vo-navItem"></CSidebarNavItem>
        {/**Shared Docs */}
        <CSidebarNavItem to="/dashboard/shared-documents" name="Shared Documents" icon="cil-folder-open" className="vo-navItem"></CSidebarNavItem>
       <hr/>
        {/**Profile */}
        <CSidebarNavItem to="/dashboard/profile" name="Profile" icon="cil-user" className="vo-navItem"></CSidebarNavItem>

       
        {/**log out */}
        <CSidebarNavItem onClick={logout} name="Logout" icon="cil-account-logout" className="vo-navItem"></CSidebarNavItem>

      </CSidebarNav>
      {/* <span className="copyright-text">&copy; DMA V1.0.0</span> */}
      <CSidebarMinimizer />

    </CSidebar>
  )
}

export default React.memo(TheSidebar)
