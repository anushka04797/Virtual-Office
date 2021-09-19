import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './TheSidebar.css'

import {
 CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import { changeState } from '../store/slices/SideBarSlice';
import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

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
        <span  className="c-sidebar-brand-full name-brand1">Virtual Office</span>
        
        {/* <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
        <span className="c-sidebar-brand-minimized name-brand1">VO</span>
      </CSidebarBrand>
      <CSidebarNav>

        {/* <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        /> */}
           <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard"></CSidebarNavItem>
           {/**Projects */}
           <CSidebarNavDropdown icon="cib-ghost" name="Projects">
<CSidebarNavItem to="/dashboard/Projects/ongoing-project-details-view" name="Ongoing Projects" icon="cib-circle"></CSidebarNavItem>
<CSidebarNavItem to="/dashboard/Projects/completed-projects" name="Completed Projects" icon="cil-check-circle"></CSidebarNavItem>
<CSidebarNavItem to="/dashboard/Projects/create-new-project" name="Create New Project" icon="cil-note-add"></CSidebarNavItem>


           </CSidebarNavDropdown>
           {/**Meetings */}
           <CSidebarNavItem to="/dashboard/meetings" icon="cil-view-module" name="Meetings"></CSidebarNavItem>
     {/**WBS */}
     <CSidebarNavDropdown icon="cil-spreadsheet" name="WBS">
<CSidebarNavItem to="/dashboard/WBS/create-wbs" icon="cil-library-add" name="Create WBS"></CSidebarNavItem>
<CSidebarNavItem to="/dashboard/WBS/board" icon="cil-columns" name="Board"></CSidebarNavItem>

</CSidebarNavDropdown>
{/**EVMS */}
<CSidebarNavItem to="/dashboard/EVMS"name="EVMS" icon="cil-chart-line"></CSidebarNavItem>
{/**Profile */}
<CSidebarNavItem to="/dashboard/profile"name="Profile" icon="cil-user"></CSidebarNavItem>

{/**Timecards */}
<CSidebarNavItem to="/dashboard/timecards"name="Timecards" icon="cil-library"></CSidebarNavItem>

{/**Shared Docs */}
<CSidebarNavItem to="/dashboard/shared-documents"name="Shared Documents" icon="cil-folder-open"></CSidebarNavItem>

      </CSidebarNav>
      <CSidebarMinimizer />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
