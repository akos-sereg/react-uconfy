import * as React from 'react'
import CodeTemplates from "../../components/CodeTemplates"
import DeviceDetails from "../../components/DeviceDetails"
import {useState} from "react"
import {deleteDevice} from "../../actions"
import {isMobile} from "../../../../services/Environment"

interface Props {
  match: any,
  dispatch: Function,
  currentDevice: any
}

const AccessTab = (props: Props) => {

  const [ isDeleting, setDeleting ] = useState(false)

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete?')) {
      setDeleting(true)
      props.dispatch(deleteDevice(props.currentDevice.deviceID))
    }
  }

  return <>
    <DeviceDetails match={props.match} dispatch={props.dispatch} device={props.currentDevice} />

    {!isMobile() && <CodeTemplates match={props.match} />}

    <h3>Delete Device</h3>
    <p>
      By deleting the device, your device will no longer be able to push/fetch data.
    </p>
    <button disabled={isDeleting} type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
  </>
}

export default AccessTab;
