import * as React from 'react'
import { useEffect, useState } from 'react'
import DeviceList from './components/DeviceList'
import AddDeviceItem from './components/DeviceItem/AddDeviceItem'
import {fetechDevices} from "./actions";

type Props = {
  dispatch: any,
  fetchDevices: Function,
  devicesData: any
};

const DeviceListPage = (props: Props) => {

  useEffect(() => {
    props.dispatch(fetechDevices())
  }, [])

  return (
      <>
        <h2>List of Device</h2>
        <p>
          Registered devices can be found below.
        </p>

        {props.devicesData && <DeviceList
          items={props.devicesData.devices}
          dispatch={props.dispatch}
          />}

        <AddDeviceItem dispatch={props.dispatch} />
      </>
    );
}

export default DeviceListPage;
