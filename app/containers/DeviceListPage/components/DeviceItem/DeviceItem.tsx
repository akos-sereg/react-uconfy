import * as React from 'react'
import { useDispatch } from 'react-redux'
import { getDeviceUri } from '../../../../services/UrlService'
import { setNavigation } from '../../../../components/Navigation/actions'
import styles from './style.scss'

type Props = {
  deviceId: string,
  name: string,
  platform: string,
  dispatch: Function
}

const DeviceItem = (props: Props) => {
  const handleClick = () => {
    document.location.href = getDeviceUri(props.deviceId)

    // todo: upgrade react-redux and use useDispatch
    props.dispatch(setNavigation([
       { name: 'uConfy', uri: '/#/' },
       { name: 'Devices', uri: '/#/device' },
       { name: props.name },
     ]))
  }

  return <div className={styles.deviceItemContainer} onClick={handleClick}>
    <b>{props.name}</b>
    <br/>
    <i>{props.platform}</i>
  </div>
}

export default DeviceItem
