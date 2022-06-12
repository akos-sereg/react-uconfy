import * as React from 'react'
import { useState, useEffect } from 'react'
import TabSelector from './components/TabSelector'
import TextInput from '../../components/TextInput'
import { Subpage } from '../../model/DevicePage'
import { deleteDevice, fetchDeviceDetails } from './actions'
import styles from './style.scss'

type Props = {
  dispatch: any,
  match: any
};

const DevicePage = (props: Props) => {

  const [ subpage, setSubpage ] = useState(Subpage.Access)
  const [ isDeleting, setDeleting ] = useState(false)
  const deviceId = props.match.params.id

  const handleDelete = () => {
    setDeleting(true)
    props.dispatch(deleteDevice(deviceId))
  }

  const handleTabChanged = (currentTab: Subpage) => {
    setSubpage(currentTab)
  }

  useEffect(() => {
    props.dispatch(fetchDeviceDetails(deviceId))
  })

  return (
      <>
        <TabSelector
          initialTab={subpage}
          handleTabChanged={handleTabChanged}
        />

        {/* Access --------------------------------------------------------------------------------*/}
        {subpage == Subpage.Access && (<>
          <div className={styles.fieldContainer}>
            <div className={styles.fieldName}>DeviceID</div>
            <div className={styles.fieldValue}>
              <TextInput disabled={true} name={'username'} value={deviceId} onChange={() => {}} />
            </div>
            <div className={styles.clear}>&nbsp;</div>
          </div>
          <button disabled={isDeleting} type="button" className="btn btn-default" onClick={handleDelete}>Delete</button>
        </>)}

      </>
    );

}

export default DevicePage;
