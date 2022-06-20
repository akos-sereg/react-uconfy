import * as React from 'react'
import { useState } from 'react'
import CodeSnippet from '../CodeSnippet'
import UconfyBackendApi from '../../../../services/UconfyBackendApi'
import UconfyLoginApi from '../../../../services/UconfyLoginApi'
import { getConfig, postLogs, getConfigDescription, postLogsDescription } from './code-templates'
import styles from './style.scss'

interface Props {
  match: any
}

const CodeTemplates = (props: Props) => {

  const [template, setTemplate] = useState('get-configs')

  const userData = UconfyLoginApi.getUserData()
  const deviceId = props.match.params.id

  const getTemplateCode = () => {
    switch (template) {
      case 'get-configs': return { template: getConfig, description: getConfigDescription }
      case 'post-logs': return { template: postLogs, description: postLogsDescription }
    }
  }

  return <>
    <div className={styles.apiTemplateContainer}>
      <div className={styles.apiTemplateItems}>
        <span
          className={template === 'get-configs' ? styles.active : styles.inactive}
          onClick={() => setTemplate('get-configs')}
          >
          GET Configs
        </span>
        <span
          className={template === 'post-logs' ? styles.active : styles.inactive}
          onClick={() => setTemplate('post-logs')}
          >
          POST Logs
        </span>
      </div>
    </div>

    <p>
      {getTemplateCode().description}
    </p>
    <CodeSnippet template={getTemplateCode().template} params={{apiUrl: UconfyBackendApi.endpointUrl, deviceId, apiKey: userData.apiKey }} />
    ... or alternatively, you can use&nbsp;
    <a href="https://github.com/akos-sereg/esp32-uconfy-component/wiki/Usage#hook-up-%C2%B5confy-in-your-project" target="out">
      this ESP32 library
    </a>
  </>
}

export default CodeTemplates;
