import * as React from 'react'
import styles from './style.scss'
import {useEffect, useRef, useState} from "react";
import loadingGif from '../../../../assets/loading.gif'
import UconfyDevicesApi from "../../../../services/UconfyDevicesApi";

interface Props {
  match: any,
  dispatch: Function,
  deviceId: string
}

const ConsoleTab = (props: Props) => {

  const consoleEl = useRef(null);
  const [pollInterval, setPollInterval] = useState(30)

  useEffect(() => {
    const pollLogsTask = async () => {
      consoleEl.current.innerHTML = 'loading ...'
      const logs = await UconfyDevicesApi.instance.getLogs(props.deviceId)
      if (consoleEl.current == null) {
        return
      }
      consoleEl.current.innerHTML = ''
      logs.responseData.forEach((logEntry: any) => consoleEl.current.innerHTML += logEntry + "<br/>")
      consoleEl.current.scrollTop = consoleEl.current.scrollHeight;
    }

    pollLogsTask()
    const intervalHandler = setInterval(pollLogsTask,pollInterval * 1000)
    return () => clearInterval(intervalHandler)
  })

  return <>
    <h3>Console</h3>
    <p>
      You can browse logs that are sent from your device
    </p>
    Choose poll interval:
    <select onChange={(e) => setPollInterval(parseInt(e.target.value))} className={styles.pollIntervalSelector}>
      <option value={5}>5 seconds</option>
      <option value={10}>10 seconds</option>
      <option value={15}>15 seconds</option>
      <option value={30} selected>30 seconds</option>
      <option value={60}>1 minute</option>
      <option value={360}>5 minute</option>
    </select>
    <div className={`${styles.console}`} ref={consoleEl}>
    </div>
  </>
}

export default ConsoleTab;
