import * as React from 'react'
import { useState } from 'react'
import TextInput from '../../../../components/TextInput'
import UconfyLoginApi from '../../../../services/UconfyLoginApi'
import UconfyDevicesApi from '../../../../services/UconfyDevicesApi'
import { DeviceDetails } from '../../../../model/DeviceDetails'
import { devicesReceived } from '../../../DeviceListPage/actions'
import styles from './style.scss'

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

  const handleSave = async () => {
    try {
      const response = await UconfyDevicesApi.instance.updateDevice(deviceId, name, platform)
      if (response.success) {
        setDirty(false)
        const devicesResult = await UconfyDevicesApi.instance.getDevices()
        if (!devicesResult.success) {
          return
        }

        props.dispatch(devicesReceived(devicesResult.responseData))
      }
    } catch (error) {

    }
  }

  return <>
    <h3>Access</h3>
    <table className={styles.formTable}>
    <tbody>
      <tr>
        <td>
          DeviceID
        </td>
        <td>
           API Key
        </td>
      </tr>
      <tr>
        <td>
          <TextInput disabled={true} name={'deviceId'} value={deviceId} onChange={() => {}} />
        </td>
        <td>
          <TextInput disabled={true} name={'apiKey'} value={userData != null ? userData.apiKey : ''} onChange={() => {}} />
        </td>
      </tr>
      <tr>
        <td>
          Name
        </td>
        <td>
           Platform
        </td>
      </tr>
      <tr>
        <td>
          <TextInput name={'name'} value={name} onChange={(e) => { setName(e.target.value); setDirty(true); }} />
        </td>
        <td>
          <TextInput name={'platform'} value={platform} onChange={(e) => { setPlatform(e.target.value); setDirty(true);}} />
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <button disabled={!isDirty} type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
        </td>
      </tr>
    </tbody>
    </table>
  </>
}

export default DeviceDetails;
