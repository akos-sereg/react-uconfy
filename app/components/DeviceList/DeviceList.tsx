import * as React from 'react'
import DeviceItem from '../DeviceItem'
import styles from './style.scss'

type Props = {
  items: Array<any>
}

const DeviceList = (props: Props) => {

  return <div className={styles.container}>
    {props.items && props.items.map(item =>
      <DeviceItem
        key={item.deviceID}
        deviceId={item.deviceID}
        platform={item.platform}
        name={item.name} />)
    }
  </div>

}

export default DeviceList
