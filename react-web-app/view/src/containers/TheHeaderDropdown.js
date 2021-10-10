import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import { useHistory } from 'react-router-dom';
import { API } from '../Config';
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  let history = useHistory();
function logout(){
  API.get('auth/logout/').then((res)=>{
    localStorage.clear()
    history.push('/')
  }).catch(err=>{
    localStorage.clear()
    history.push('/')
  })
  
}
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
         
        </div>
        <span className="ml-2  u-name">User Name</span>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center drop-text"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem className="drop-text" to="/dashboard/profile">
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem> 
    
     
        <CDropdownItem divider />
        <CDropdownItem onClick={()=>{logout()}} className="drop-text">
        <CIcon name="cil-account-logout" className="mfe-2" />
         Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
