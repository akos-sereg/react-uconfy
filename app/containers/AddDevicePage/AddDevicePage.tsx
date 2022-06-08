import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import UconfyDevicesApi from '../../services/UconfyDevicesApi'
import { getDeviceListUri } from '../../services/UrlService'
import { createDevice } from './actions'
import styles from './style.scss'
import * as toastr from 'toastr'

type Props = {
  dispatch: any,
};

const AddDevicePage = (props: Props) => {
  const nameEl = useRef(null);
  const platformEl = useRef(null);

  const [ isCreating, setCreating ] = useState(false)

  const handleCreate = (event: any) => {
    event.preventDefault()
    setCreating(true)
    props.dispatch(createDevice(nameEl.current.value, platformEl.current.value))
  }

  const handleCancel = (event: any) => {
    event.preventDefault()
    document.location.href = getDeviceListUri()
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

        <button disabled={isCreating} type="button" className={`btn btn-primary ${styles.actionButton}`} onClick={handleCreate}>Create</button>
        <button type="button" className={`btn btn-default ${styles.actionButton}`} onClick={handleCancel}>Cancel</button>
      </div>
    );
}

export default AddDevicePage;
