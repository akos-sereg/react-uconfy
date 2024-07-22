import * as React from 'react'
import styles from './style.scss'
import TextInput from "../../../../components/TextInput";
import UconfyCommandApi from "../../../../services/UconfyCommandApi";
import { useEffect, useState } from "react";

interface Props {
  match: any,
  dispatch: Function,
  deviceId: string,
}

const CommandTab = (props: Props) => {
  const [command, setCommand] = useState('');
  const [parameter, setParameter] = useState('');
  const [commandSent, setCommandSent] = useState(false);
  const [recentCommands, setRecentCommands] = useState([]);

  const fetchMostRecentCommands = async () => {
    const recentCommands = await UconfyCommandApi.instance.getRecentCommands(props.deviceId);
    setRecentCommands(recentCommands.responseData);
  }

  useEffect(() => {
    fetchMostRecentCommands();
  }, []);

  const sendCommand = async () => {
    await UconfyCommandApi.instance.sendCommand(props.deviceId, { command, parameter })
    setCommandSent(true);
    setCommand('');
    setParameter('');
    await fetchMostRecentCommands();
  };

  return <div className={styles.container}>
    <h3>Send command to device</h3>
    <p>
      Your device expects to listen for commands and process them.
    </p>
    <div className={styles.formContainer}>
      <div>
        <div className={styles.label}>Command</div>
        <div className={styles.inputField}>
          <TextInput value={command} name="command" onChange={(e) => {
            setCommand(e.target.value);
            setCommandSent(false);
          }} />
        </div>
      </div>
      <div>
        <span className={styles.label}>Parameter</span> (Optional)
        <div className={styles.inputFieldParameter}>
          <TextInput value={parameter} name="parameter" onChange={(e) => {
            setParameter(e.target.value);
            setCommandSent(false);
          }} />
        </div>
      </div>
      <div>
        <div className={styles.label}>&nbsp;</div>
        <div className={styles.sendButton}>
          <button className="btn btn-primary" onClick={sendCommand}>Send</button>
        </div>
      </div>
    </div>
    {commandSent && (
      <div className={styles.success}>
        Command sent successfully
      </div>
    )}

    <h3>See most recent commands and their statuses</h3>
    <p>
      You can fetch the most recent events to see if they have been processed by your device or not.
    </p>
    <button className="btn btn-default" onClick={fetchMostRecentCommands}>Fetch</button>
    <table width="100%" className={styles.recentCommandsTable}>
      <tr>
        <th>Command</th>
        <th>Parameter</th>
        <th>Created At</th>
        <th>Status</th>
      </tr>
      {recentCommands.map((recentCommand) => (
        <tr key={recentCommand.id} className={recentCommand.processedAt ? styles.processedRow : styles.nonProcessedRow}>
          <td>{recentCommand.command}</td>
          <td>{recentCommand.parameter}</td>
          <td>{recentCommand.createdAt}</td>
          <td>{recentCommand.processedAt ? 'processed' : ''}</td>
        </tr>
      ))}
    </table>
  </div>
}

export default CommandTab;
