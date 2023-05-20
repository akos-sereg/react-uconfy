import * as React from 'react'
import Config from '../../services/Config'

const StatusPage = () => {
  return (<>
    <div>
      Server Config: <span data-automation-id={'server-config'}>{Config.name}</span>
    </div>

    </>)
}
export default StatusPage;
