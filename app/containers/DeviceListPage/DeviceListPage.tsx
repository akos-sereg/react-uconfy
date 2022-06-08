import * as React from 'react'
import { useEffect, useState } from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import DeviceList from './components/DeviceList'
import AddDeviceItem from './components/DeviceItem/AddDeviceItem'
import UconfyDevicesApi from '../../services/UconfyDevicesApi'
import styles from './style.scss'
import * as toastr from 'toastr'

type Props = {
  dispatch: any,
  fetchDevices: Function,
  devicesData: any
};

const DeviceListPage = (props: Props) => {

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
