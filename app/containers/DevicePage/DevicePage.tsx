import * as React from 'react'
import { useState, useEffect } from 'react'
import TabSelector from './components/TabSelector'
import CodeTemplates from './components/CodeTemplates'
import DeviceDetails from './components/DeviceDetails'
import { Subpage } from '../../model/DevicePage'
import { deleteDevice, fetchDeviceDetails } from './actions'
import styles from './style.scss'
import TextInput from "../../components/TextInput";
import AccessTab from "./tabs/AccessTab";
import ParametersTab from "./tabs/ParametersTab";

type Props = {
  dispatch: Function,
  match: any,
  devicesData: any,
  deviceConfig: any
};

const DevicePage = (props: Props) => {

  const [ subpage, setSubpage ] = useState(Subpage.Access)
  const deviceId = props.match.params.id
  const currentDevice = props.devicesData ? props.devicesData.devices.find((device: any) => device.deviceID === deviceId) : {}

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

        {subpage == Subpage.Access && (<>
          <AccessTab
            match={props.match}
            dispatch={props.dispatch}
            currentDevice={currentDevice}
          />
        </>)}

        {subpage == Subpage.Parameters && (<>
          <ParametersTab
            match={props.match}
            dispatch={props.dispatch}
            deviceConfig={props.deviceConfig}
            deviceId={deviceId}
          />
        </>)}

      </>
    );

}

export default DevicePage;
