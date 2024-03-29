import * as React from 'react'
import {useState, useRef, useEffect} from 'react'
import {getDeviceListUri, getMarketingPage} from '../../services/UrlService'
import { createDevice } from './actions'
import styles from './style.scss'
import {setNavigation} from "../../components/Navigation/actions";

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

  useEffect(() => {
    props.dispatch(setNavigation([
      { name: 'uConfy', uri: getMarketingPage() },
      { name: 'Devices', uri: getDeviceListUri() },
      { name: 'Create Device' },
    ]));
  }, [])

  return (
      <div className={styles.createDeviceContainer}>

        <h2>Create new Device</h2>
        <p>
          Once the device is registered, an API key will be generated, so your device can send data safely.
        </p>

        <div className={`input-group ${styles.formItem}`}>
          <span className={`input-group-addon ${styles.fieldName}`} id="name">Name</span>
          <input data-automation-id={'create-device-name'} type="text" ref={nameEl} className={`form-control ${styles.fieldValue}`} placeholder="Name" aria-describedby="name" />
        </div>

        <div className={`input-group ${styles.formItem}`}>
          <span className={`input-group-addon ${styles.fieldName}`} id="platform">Platform</span>
          <input data-automation-id={'create-device-platform'} type="text" ref={platformEl} className={`form-control ${styles.fieldValue}`} placeholder="Platform" aria-describedby="platform" />
        </div>

        <button data-automation-id={'create-device-button'}  disabled={isCreating} type="button" className={`btn btn-primary ${styles.actionButton}`} onClick={handleCreate}>Create</button>
        <button type="button" className={`btn btn-default ${styles.actionButton}`} onClick={handleCancel}>Cancel</button>
      </div>
    );
}

export default AddDevicePage;
