import * as React from 'react'
import styles from './style.scss'
import {useState} from "react";
import loadingGif from '../../../../assets/loading.gif'
import {deleteDevice, fetchDeviceDetails} from "../../actions";
import TextInput from "../../../../components/TextInput";
import UconfyDevicesApi from "../../../../services/UconfyDevicesApi";

interface Props {
  match: any,
  dispatch: Function,
  deviceConfig: any,
  deviceId: string
}

const ParametersTab = (props: Props) => {

  const [newKey, setNewKey] = useState('')
  const [newValue, setNewValue] = useState('')
  const [editingState, setEditingState] = useState({ key: '', value: '', isEditing: false, isUpdatingOnService: false })

  const handleAdd = async () => {
    if (newKey === '' || newValue === '') {
      return
    }

    const newConfigItems = [...props.deviceConfig.items]
    newConfigItems.push({key: newKey, value: newValue})
    await UconfyDevicesApi.instance.updateConfig(props.deviceId, newConfigItems)
    setNewKey('')
    setNewValue('')
    props.dispatch(fetchDeviceDetails(props.deviceId))
  }

  const handleDelete = async (key: string) => {
    const newConfigItems = props.deviceConfig.items.filter((configItem: any) => configItem.key != key)
    await UconfyDevicesApi.instance.updateConfig(props.deviceId, newConfigItems)
    props.dispatch(fetchDeviceDetails(props.deviceId))
  }

  const handleEdit = async (key: string) => {
    const configItems = props.deviceConfig.items.filter((configItem: any) => configItem.key == key)
    if (configItems.length !== 1) {
      return
    }

    setEditingState({ key, value: configItems[0].value, isEditing: true, isUpdatingOnService: false })
  }

  const handleUpdate = async (key: string) => {
    const newConfigItems: any = []
    props.deviceConfig.items.forEach((configItem: any) => {
      if (configItem.key === key) {
        newConfigItems.push({ key, value: editingState.value })
      } else {
        newConfigItems.push(configItem)
      }
    })

    setEditingState({ ...editingState, isUpdatingOnService: true })
    await UconfyDevicesApi.instance.updateConfig(props.deviceId, newConfigItems)
    props.dispatch(fetchDeviceDetails(props.deviceId))
    setEditingState({ key: '', value: '', isEditing: false, isUpdatingOnService: false })
  }

  return <>
    <h3>Parameters</h3>
    <p>
      Below parameters can be fetched from your device. See <i>Access</i> tab for details.
    </p>
    <table className={`${styles.keyValueTable} ${!props.deviceConfig ? styles.loading : ''}`}>
      <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
        <td></td>
      </tr>
      </thead>
      <tbody>
      {props.deviceConfig && !editingState.isUpdatingOnService && props.deviceConfig.items && props.deviceConfig.items.map((configItem: any) => (
        <tr key={configItem.key}>
          <td className={styles.keyCell}>{configItem.key}</td>
          <td className={styles.valueCell}>
            {editingState.isEditing && editingState.key === configItem.key ?
              <TextInput value={editingState.value} name={'editingConfigItemValue'} onChange={(e) => setEditingState({ ...editingState, value: e.target.value })} />
              : configItem.value}
          </td>
          <td>
            {editingState.isEditing && editingState.key === configItem.key ?
             <button type="button" disabled={editingState.isUpdatingOnService} className={`btn-sm btn-primary ${styles.configItemBtn}`} onClick={() => handleUpdate(configItem.key)}>Update</button>
             : <div>
                <button type="button" className={`btn-sm btn-primary ${styles.configItemBtn}`} onClick={() => handleDelete(configItem.key)}>Delete</button>
                <button type="button" className={`btn-sm btn-primary ${styles.configItemBtn}`} onClick={() => handleEdit(configItem.key)}>Edit</button>
              </div>}
          </td>
        </tr>
      ))}
      {!props.deviceConfig || editingState.isUpdatingOnService &&
        <tr>
          <td className={styles.loadingTd}><img src={loadingGif} /> loading ...</td>
          <td></td>
          <td></td>
        </tr>}
      <tr>
        <td className={styles.editableKeyCell}>
          <TextInput value={newKey} name={'configItemKey'} onChange={(e) => setNewKey(e.target.value)} maxLength={15} />
        </td>
        <td className={styles.valueCell}>
          <TextInput value={newValue} name={'configItemValue'} onChange={(e) => setNewValue(e.target.value)} />
        </td>
        <td>
          <button type="button" className={`btn-sm btn-primary ${styles.configItemBtn}`} onClick={handleAdd}>Add</button>
        </td>
      </tr>
      </tbody>
    </table>
    <h3>Pre-defined parameters</h3>
    <p>
      If you are using <a target={'out'} href={'https://github.com/akos-sereg/esp32-uconfy-component/wiki'}>esp32-uconfy-component</a> library
      on your ESP32 device to connect to wifi (eg. <i>uconfy_initialize_wifi</i> call with <i>allow_wifi_override</i> parameter set to 1),
      you can define the following keys to enable Primary / Fallback wifi.
    </p>
    <ul>
      <li><i>primary_wifi</i>: value is the SSID of the Primary wifi network</li>
      <li><i>primary_pwd</i>: value is the password of the Primary wifi network</li>
      <li><i>fback_wifi</i>: value is the SSID of the Secondary wifi network</li>
      <li><i>fback_pwd</i>: value is the password of the Secondary wifi network</li>
    </ul>
    <p>
      This way you can configure wifi zones remotely, and you dont have to re-deploy hardcoded wifi credentials.
    </p>
  </>
}

export default ParametersTab;
