import * as React from 'react'
import { useState } from 'react'
import TextInput from '../../../../components/TextInput'
import UconfyLoginApi from '../../../../services/UconfyLoginApi'
import { DeviceDetails } from '../../../../model/DeviceDetails'
import styles from './style.scss'

interface Props {
  match: any,
  device: DeviceDetails
}

const DeviceDetails = (props: Props) => {
  const deviceId = props.match.params.id
  const userData = UconfyLoginApi.getUserData()

  return <>
    <h3>Access Parameters</h3>
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
          <TextInput name={'name'} value={props.device.name} onChange={() => {}} />
        </td>
        <td>
          <TextInput name={'platform'} value={props.device.platform} onChange={() => {}} />
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <button type="button" className="btn btn-primary" onClick={() => {}}>Save</button>
        </td>
      </tr>
    </tbody>
    </table>
  </>
}

export default DeviceDetails;
