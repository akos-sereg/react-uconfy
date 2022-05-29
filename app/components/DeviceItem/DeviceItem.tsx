import * as React from 'react'
import styles from './style.scss'

type Props = {
  deviceId: number,
  name: string,
  platform: string
}

const DeviceItem = (props: Props) => {
  return <div className={styles.deviceItemContainer}>
    <b>{props.name}</b>
    <br/>
    <i>{props.platform}</i>
  </div>
}

export default DeviceItem
