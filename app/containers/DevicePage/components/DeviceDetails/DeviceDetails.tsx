import * as React from 'react'
import { useState } from 'react'
import TextInput from '../../../../components/TextInput'
import UconfyLoginApi from '../../../../services/UconfyLoginApi'
import UconfyDevicesApi from '../../../../services/UconfyDevicesApi'
import { DeviceDetails } from '../../../../model/DeviceDetails'
import { devicesReceived } from '../../../DeviceListPage/actions'
import stylesForWeb from './style.scss'
import stylesForMobile from './style.mobile.scss'
import {isMobile} from "../../../../services/Environment";

interface Props {
  match: any,
  dispatch: Function,
  device: DeviceDetails
}

const DeviceDetails = (props: Props) => {
  const [name, setName] = useState(props.device.name)
  const [platform, setPlatform] = useState(props.device.platform)
  const [isDirty, setDirty] = useState(false)
  const deviceId = props.match.params.id
  const userData = UconfyLoginApi.getUserData()

  const styles = isMobile() ? stylesForMobile : stylesForWeb

  const handleSave = async () => {
    try {
      if (name === '') {
        alert('Name must not be empty')
        return
      }
      if (platform === '') {
        alert('Platform must not be empty')
        return
      }
      const response = await UconfyDevicesApi.instance.updateDevice(deviceId, name, platform)
      if (response.success) {
        setDirty(false)
        const devicesResult = await UconfyDevicesApi.instance.getDevices()
        if (!devicesResult.success) {
          return
        }

        alert('Details saved successfully')
        props.dispatch(devicesReceived(devicesResult.responseData))
      } else {
        alert('Could not save details')
      }
    } catch (error) {
      alert('Could not save details')
    }
  }

  return <>
    <h3>Access</h3>

    <div className={styles.container}>
      <div data-name={'box'}>
        <label>Device ID</label>
        <p>
          <TextInput disabled={true} name={'deviceId'} value={deviceId} onChange={() => {}} />
        </p>
      </div>
      <div data-name={'box'}>
        <label>API Key</label>
        <p>
          <TextInput disabled={true} name={'apiKey'} value={userData != null ? userData.apiKey : ''} onChange={() => {}} />
        </p>
      </div>
      <div data-name={'box'}>
        <label>Name</label>
        <p>
          <TextInput name={'name'} value={name} onChange={(e) => { setName(e.target.value); setDirty(true); }} />
        </p>
      </div>
      <div data-name={'box'}>
        <label>Platform</label>
        <p>
          <TextInput name={'platform'} value={platform} onChange={(e) => { setPlatform(e.target.value); setDirty(true);}} />
        </p>
      </div>
    </div>
    <p>
      <button disabled={!isDirty} type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
    </p>


  </>
}

export default DeviceDetails;
