import * as React from 'react'
import DeviceItem from '../DeviceItem'
import styles from './style.scss'

type Props = {
  items: Array<any>,
  lastSeen: any
  dispatch: Function
}

const DeviceList = (props: Props) => {

  return <div className={styles.container}>
    {props.items && props.items.map(item => {
      let lastSeen = null
      if (props.lastSeen && props.lastSeen[item.deviceID]) {
        lastSeen = props.lastSeen[item.deviceID]
      }
      return <DeviceItem
          key={item.deviceID}
          deviceId={item.deviceID}
          lastSeen={lastSeen}
          platform={item.platform}
          name={item.name}
          dispatch={props.dispatch}
        />
    })
    }
  </div>

}

export default DeviceList
