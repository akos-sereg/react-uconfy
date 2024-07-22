import * as React from 'react'
import styles from './style.scss'
import TextInput from "../../../../components/TextInput";
import UconfyCommandApi from "../../../../services/UconfyCommandApi";
import { useState } from "react";

interface Props {
  match: any,
  dispatch: Function,
  deviceId: string,
}

const CommandTab = (props: Props) => {
  const [command, setCommand] = useState('');
  const [parameter, setParameter] = useState('');

  const sendCommand = () => {
    UconfyCommandApi.instance.sendCommand(props.deviceId, { command, parameter })
  };

  return <div className={styles.container}>
    <h4>Send command to device</h4>
    <p>
      Your device expects to listen for commands and process them. Once the command is received and processed, you
      will get notified.
    </p>
    <div className={styles.formContainer}>
      <div>
        <div className={styles.label}>Command</div>
        <div className={styles.inputField}>
          <TextInput name="command" onChange={(e) => setCommand(e.target.value)} />
        </div>
      </div>
      <div>
        <span className={styles.label}>Parameter</span> (Optional)
        <div className={styles.inputFieldParameter}>
          <TextInput name="parameter" onChange={(e) => setParameter(e.target.value)} />
        </div>
      </div>
      <div>
        <div className={styles.label}>&nbsp;</div>
        <div className={styles.sendButton}>
          <button className="btn btn-primary" onClick={sendCommand}>Send</button>
        </div>
      </div>
    </div>

  </div>
}

export default CommandTab;
