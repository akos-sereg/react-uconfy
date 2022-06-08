import * as React from 'react'
import { useState } from 'react'
import { deleteDevice } from './actions'

type Props = {
  dispatch: any,
  match: any
};

enum Subpage {
  Access,
  Parameters,
  Console,
  Activity,
}

const DevicePage = (props: Props) => {

  const [ isDeleting, setDeleting ] = useState(false)
  const [ subpage, setSubpage ] = useState(Subpage.Access)

  const handleDelete = () => {
    const deviceId = props.match.params.id
    setDeleting(true)
    props.dispatch(deleteDevice(deviceId))
  }

  const handleNavigation = (event: any, targetSubpage: Subpage) => {
    event.preventDefault()
    setSubpage(targetSubpage)
  }

  return (
      <>
        <ul className="nav nav-tabs">
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
            <a href="#">Parameters</a>
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
            className={subpage == Subpage.Activity ? 'active' : ''}
            onClick={(e) => handleNavigation(e, Subpage.Activity)}
          >
            <a href="#">Activity</a>
          </li>
        </ul>

        <button disabled={isDeleting} type="button" className="btn btn-default" onClick={handleDelete}>Delete</button>
      </>
    );

}

export default DevicePage;
