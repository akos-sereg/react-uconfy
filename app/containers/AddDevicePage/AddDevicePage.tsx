import * as React from 'react'
import { useEffect, useState } from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthorList from '../../components/AuthorList'
import { Author } from '../../model/Author'
import DeviceList from '../../components/DeviceList'
import AddDeviceItem from '../../components/DeviceItem/AddDeviceItem'
import UconfyDevicesApi from '../../services/UconfyDevicesApi'
import styles from './style.scss'
import * as toastr from 'toastr'

type Props = {
  dispatch: any,
  fetchDevices: Function,
  devicesData: any
};

const AddDevicePage = (props: Props) => {

  return (
      <>
        ehlo
      </>
    );
}

export default AddDevicePage;
