import * as React from 'react'
import { setNavigation } from '../Navigation/actions'
import { fetchDeviceDetails } from '../../containers/DevicePage/actions'
import styles from './style.scss'

type Props = {
  dispatch: Function
}

const AddDeviceItem = (props: Props) => {

  return <div className={`${styles.deviceItemContainer} ${styles.addDeviceItemContainer}`}>
     Add new
  </div>
}

export default AddDeviceItem
