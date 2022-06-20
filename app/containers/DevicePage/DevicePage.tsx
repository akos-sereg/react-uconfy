import * as React from 'react'
import { useState, useEffect } from 'react'
import TabSelector from './components/TabSelector'
import CodeTemplates from './components/CodeTemplates'
import TextInput from '../../components/TextInput'
import { Subpage } from '../../model/DevicePage'
import UconfyLoginApi from '../../services/UconfyLoginApi'
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
  const userData = UconfyLoginApi.getUserData()

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete?')) {
      setDeleting(true)
      props.dispatch(deleteDevice(deviceId))
    }
  }

  const handleTabChanged = (currentTab: Subpage) => {
    setSubpage(currentTab)
  }

  useEffect(() => {
    props.dispatch(fetchDeviceDetails(deviceId))
  }, [deviceId])

  return (
      <>
        <TabSelector
          initialTab={subpage}
          handleTabChanged={handleTabChanged}
        />

        {/* Access --------------------------------------------------------------------------------*/}
        {subpage == Subpage.Access && (<>

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

          <CodeTemplates match={props.match} />

          <h3>Delete Device</h3>
          <p>
            By deleting the device, your device will no longer be able to push/fetch data.
          </p>
          <button disabled={isDeleting} type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </>)}

      </>
    );

}

export default DevicePage;
