import * as React from 'react'
import { useState } from 'react'
import TextInput from '../../../../components/TextInput'
import UconfyLoginApi from '../../../../services/UconfyLoginApi'
import styles from './style.scss'

interface Props {
  match: any
}

const DeviceDetails = (props: Props) => {
  const deviceId = props.match.params.id
  const userData = UconfyLoginApi.getUserData()

  return <>
    <h3>Access Parameters</h3>
    <table className={styles.formTable}>
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
    </table>
  </>
}

export default DeviceDetails;
