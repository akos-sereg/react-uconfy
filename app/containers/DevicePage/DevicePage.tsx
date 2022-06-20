import * as React from 'react'
import { useState, useEffect } from 'react'
import TabSelector from './components/TabSelector'
import CodeTemplates from './components/CodeTemplates'
import DeviceDetails from './components/DeviceDetails'
import { Subpage } from '../../model/DevicePage'
import { deleteDevice, fetchDeviceDetails } from './actions'
import styles from './style.scss'

type Props = {
  dispatch: any,
  match: any,
  devicesData: any
};

const DevicePage = (props: Props) => {

  const [ subpage, setSubpage ] = useState(Subpage.Access)
  const [ isDeleting, setDeleting ] = useState(false)
  const deviceId = props.match.params.id
  const currentDevice = props.devicesData ? props.devicesData.devices.find((device: any) => device.deviceID === deviceId) : {}
  console.log('--> current device', currentDevice)

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete?')) {
      setDeleting(true)
      props.dispatch(deleteDevice(deviceId))
    }
  }

  const handleTabChanged = (currentTab: Subpage) => {
    setSubpage(currentTab)
  }

  useEffect(() => {
    props.dispatch(fetchDeviceDetails(deviceId))
  }, [deviceId])

  return (
      <>
        <TabSelector
          initialTab={subpage}
          handleTabChanged={handleTabChanged}
        />

        {/* Access --------------------------------------------------------------------------------*/}
        {subpage == Subpage.Access && (<>

          <DeviceDetails match={props.match} device={currentDevice} />

          <CodeTemplates match={props.match} />

          <h3>Delete Device</h3>
          <p>
            By deleting the device, your device will no longer be able to push/fetch data.
          </p>
          <button disabled={isDeleting} type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </>)}

      </>
    );

}

export default DevicePage;
