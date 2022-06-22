import * as React from 'react'
import {useEffect, useState} from 'react'
import TabSelector from './components/TabSelector'
import {Subpage} from '../../model/DevicePage'
import {fetchDeviceDetails} from './actions'
import AccessTab from "./tabs/AccessTab";
import ParametersTab from "./tabs/ParametersTab";
import {getDeviceSubpageUri, getSubpageFromUri} from '../../services/UrlService'
import ConsoleTab from "./tabs/ConsoleTab";
import CommandTab from "./tabs/CommandTab";

type Props = {
  dispatch: Function,
  match: any,
  devicesData: any,
  deviceConfig: any
};

const DevicePage = (props: Props) => {

  const [ subpage, setSubpage ] = useState(getSubpageFromUri())
  const deviceId = props.match.params.id
  const currentDevice = props.devicesData ? props.devicesData.devices.find((device: any) => device.deviceID === deviceId) : {}

  const handleTabChanged = (currentTab: Subpage) => {
    setSubpage(currentTab)
    document.location.href = getDeviceSubpageUri(deviceId, currentTab)
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

        {subpage == Subpage.Console && (<>
          <ConsoleTab
            match={props.match}
            dispatch={props.dispatch}
            deviceId={deviceId}
          />
        </>)}

        {subpage == Subpage.Command && (<>
          <CommandTab
            match={props.match}
            dispatch={props.dispatch}
          />
        </>)}

      </>
    );

}

export default DevicePage;
