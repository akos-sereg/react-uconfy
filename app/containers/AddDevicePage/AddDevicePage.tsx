import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthorList from '../../components/AuthorList'
import { Author } from '../../model/Author'
import DeviceList from '../../components/DeviceList'
import AddDeviceItem from '../../components/DeviceItem/AddDeviceItem'
import UconfyDevicesApi from '../../services/UconfyDevicesApi'
import { createDevice } from './actions'
import styles from './style.scss'
import * as toastr from 'toastr'

type Props = {
  dispatch: any,
};

const AddDevicePage = (props: Props) => {
  const nameEl = useRef(null);
  const platformEl = useRef(null);

  const handleCreate = (event: any) => {
    event.preventDefault()
    props.dispatch(createDevice(nameEl.current.value, platformEl.current.value))
  }

  return (
      <div className={styles.createDeviceContainer}>

        <h2>Create new Device</h2>
        <p>
          Once the device is registered, an API key will be generated, so your device can send data safely.
        </p>

        <div className={`input-group ${styles.formItem}`}>
          <span className={`input-group-addon ${styles.fieldName}`} id="name">Name</span>
          <input type="text" ref={nameEl} className={`form-control ${styles.fieldValue}`} placeholder="Name" aria-describedby="name" />
        </div>

        <div className={`input-group ${styles.formItem}`}>
          <span className={`input-group-addon ${styles.fieldName}`} id="platform">Platform</span>
          <input type="text" ref={platformEl} className={`form-control ${styles.fieldValue}`} placeholder="Platform" aria-describedby="platform" />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleCreate}>Create</button>
      </div>
    );
}

export default AddDevicePage;
