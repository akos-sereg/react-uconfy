import * as React from 'react'
import { useState } from 'react'
import { Subpage } from '../../../../model/DevicePage'
import styleForWeb from './style.scss'
import styleForMobile from './style.mobile.scss'
import {isMobile} from "../../../../services/Environment"

interface Props {
  initialTab: Subpage
  handleTabChanged: Function
}

const TabSelector = (props: Props) => {

  const [ subpage, setSubpage ] = useState(props.initialTab)
  const styles = isMobile() ? styleForMobile : styleForWeb

  const handleNavigation = (event: any, targetSubpage: Subpage) => {
    event.preventDefault()
    setSubpage(targetSubpage)
    props.handleTabChanged(targetSubpage)
  }

  return <ul className={`nav nav-tabs ${styles.container}`}>
     <li
       role="presentation"
       className={subpage == Subpage.Access ? 'active' : ''}
       onClick={(e) => handleNavigation(e, Subpage.Access)}
     >
       <a href="#">Access</a>
     </li>
     <li
       role="presentation"
       className={subpage == Subpage.Parameters ? 'active' : ''}
       onClick={(e) => handleNavigation(e, Subpage.Parameters)}
     >
       <a href="#">{isMobile() ? 'Params' : 'Parameters'}</a>
     </li>
     <li
       role="presentation"
       className={subpage == Subpage.Console ? 'active' : ''}
       onClick={(e) => handleNavigation(e, Subpage.Console)}
     >
       <a href="#">Console</a>
     </li>
    <li
      role="presentation"
      className={subpage == Subpage.Command ? 'active' : ''}
      onClick={(e) => handleNavigation(e, Subpage.Command)}
    >
      <a href="#">Command</a>
    </li>
     <li
       role="presentation"
       className={subpage == Subpage.Activity ? 'active' : ''}
       onClick={(e) => handleNavigation(e, Subpage.Activity)}
     >
       <a href="#">Activity</a>
     </li>
   </ul>
}

export default TabSelector;
