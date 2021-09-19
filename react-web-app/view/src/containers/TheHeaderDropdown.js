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

import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  let history = useHistory();
function logout(){
  localStorage.clear()
  history.push('/')
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
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
 
        <CDropdownItem onClick={()=>{logout()}}>
        <CIcon name="cil-account-logout" className="mfe-2" />
         Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
