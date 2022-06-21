import * as React from 'react'
import styles from './style.scss'
import CodeTemplates from "../../components/CodeTemplates";
import DeviceDetails from "../../components/DeviceDetails";
import {useState} from "react";
import {deleteDevice} from "../../actions";
import TextInput from "../../../../components/TextInput";

interface Props {
  match: any,
  dispatch: Function,
  deviceConfig: any
}

const ParametersTab = (props: Props) => {

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
          <td className={styles.valueCell}>
            <TextInput value={configItem.value} name={configItem.key} onChange={() => {}} />
          </td>
          <td>
            <button type="button" className={`btn-sm btn-primary ${styles.configItemBtn}`} onClick={() => {}}>Delete</button>
          </td>
        </tr>
      ))}
      <tr>
        <td className={styles.keyCell}>
          <TextInput value={''} name={'configItemKey'} onChange={() => {}} />
        </td>
        <td className={styles.valueCell}>
          <TextInput value={''} name={'configItemValue'} onChange={() => {}} />
        </td>
        <td>
          <button type="button" className={`btn-sm btn-primary ${styles.configItemBtn}`} onClick={() => {}}>Add</button>
        </td>
      </tr>
      </tbody>
    </table>
  </>
}

export default ParametersTab;
