import * as React from 'react'
import styles from './style.scss'
import TextInput from "../../../../components/TextInput";

interface Props {
  match: any,
  dispatch: Function
}

const CommandTab = (props: Props) => {

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
          <TextInput name="command" onChange={() => {}} />
        </div>
      </div>
      <div>
        <div className={styles.label}>Parameter</div>
        <div className={styles.inputFieldParameter}>
          <TextInput name="parameter" onChange={() => {}} />
        </div>
      </div>
      <div>
        <div className={styles.label}>&nbsp;</div>
        <div className={styles.sendButton}>
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>

  </div>
}

export default CommandTab;
