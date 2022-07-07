import * as React from 'react'
import { getCreateDeviceUri } from '../../../../services/UrlService'
import styles from './style.scss'

type Props = {
  dispatch: Function
}

const AddDeviceItem = (props: Props) => {

  const handleClick = () => {
    document.location.href = getCreateDeviceUri()
  }

  return <div className={styles.addDeviceItemContainer}
    onClick={handleClick}>
     Add new
  </div>
}

export default AddDeviceItem
