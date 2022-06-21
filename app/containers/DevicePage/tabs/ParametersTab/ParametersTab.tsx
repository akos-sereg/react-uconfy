import * as React from 'react'
import styles from './style.scss'
import CodeTemplates from "../../components/CodeTemplates";
import DeviceDetails from "../../components/DeviceDetails";
import {useState} from "react";
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

  return <>
    <h3>Parameters</h3>
    <p>
      Below parameters can be fetched from your device. See <i>Access</i> tab for details.
    </p>
    <table className={styles.keyValueTable}>
      <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
        <td>&nbsp;</td>
      </tr>
      </thead>
      <tbody>
      {props.deviceConfig.items.map((configItem: any) => (
        <tr key={configItem.key}>
          <td className={styles.keyCell}>{configItem.key}</td>
          <td className={styles.valueCell}>{configItem.value}</td>
          <td>
            <button type="button" className={`btn-sm btn-primary ${styles.configItemBtn}`} onClick={() => handleDelete(configItem.key)}>Delete</button>
          </td>
        </tr>
      ))}
      <tr>
        <td className={styles.editableKeyCell}>
          <TextInput value={newKey} name={'configItemKey'} onChange={(e) => setNewKey(e.target.value)} />
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
  </>
}

export default ParametersTab;
