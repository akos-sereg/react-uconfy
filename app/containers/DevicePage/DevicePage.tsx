import * as React from 'react'
import { useState } from 'react'
import TabSelector from './components/TabSelector'
import { Subpage } from '../../model/DevicePage'
import { deleteDevice } from './actions'

type Props = {
  dispatch: any,
  match: any
};

const DevicePage = (props: Props) => {

  const [ subpage, setSubpage ] = useState(Subpage.Access)
  const [ isDeleting, setDeleting ] = useState(false)

  const handleDelete = () => {
    const deviceId = props.match.params.id
    setDeleting(true)
    props.dispatch(deleteDevice(deviceId))
  }

  const handleTabChanged = (currentTab: Subpage) => {
    setSubpage(currentTab)
  }

  return (
      <>
        <TabSelector
          initialTab={subpage}
          handleTabChanged={handleTabChanged}
        />

        {/* Access --------------------------------------------------------------------------------*/}
        {subpage == Subpage.Access && (<>
          <button disabled={isDeleting} type="button" className="btn btn-default" onClick={handleDelete}>Delete</button>
        </>)}

      </>
    );

}

export default DevicePage;
