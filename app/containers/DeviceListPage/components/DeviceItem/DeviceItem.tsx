import * as React from 'react'
import { useDispatch } from 'react-redux'
import {getDeviceListUri, getDeviceUri, getMarketingPage, getRootPage} from '../../../../services/UrlService'
import { setNavigation } from '../../../../components/Navigation/actions'
import styles from './style.scss'

type Props = {
  deviceId: string,
  name: string,
  platform: string,
  lastSeen: number,
  dispatch: Function
}

const DeviceItem = (props: Props) => {
  const handleClick = () => {
    document.location.href = getDeviceUri(props.deviceId)

    // todo: upgrade react-redux and use useDispatch
    props.dispatch(setNavigation([
       { name: 'uConfy', uri: getMarketingPage() },
       { name: 'Devices', uri: getDeviceListUri() },
       { name: props.name },
     ]))
  }

  const getLastSeenText = () => {
    if (!props.lastSeen) {
      return ''
    }

    const lastSeenDaysAgo = Math.floor(props.lastSeen / 86400)
    const lastSeenHoursAgo = Math.floor(props.lastSeen / 3600)
    const lastSeenMinutesAgo = Math.floor(props.lastSeen / 60)
    if (lastSeenDaysAgo > 0) {
      return `${lastSeenDaysAgo} days ago`
    } else if (lastSeenHoursAgo > 0) {
      return `${lastSeenHoursAgo} hours ago`
    } else if (lastSeenMinutesAgo > 0) {
      return `${lastSeenMinutesAgo} minutes ago`
    } else if (props.lastSeen > 0) {
      return `${props.lastSeen} seconds ago`
    } else {
      return `device never checked in`
    }
  }

  let lastSeenClass = styles.neverSeen
  if (props.lastSeen < 86400 && props.lastSeen !== -1) {
    lastSeenClass = styles.active
  } else if (props.lastSeen >= 86400) {
    lastSeenClass = styles.semiActive
  } else if (props.lastSeen === -1) {
    lastSeenClass = styles.neverSeen
  }

  return <div className={`${styles.deviceItemContainer} ${lastSeenClass}`} onClick={handleClick}>
    <b>{props.name}</b>
    <br/>
    <i>{props.platform}</i>
    <br/>
    last seen: {getLastSeenText()}
  </div>
}

export default DeviceItem
