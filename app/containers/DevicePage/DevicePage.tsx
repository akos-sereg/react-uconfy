import * as React from 'react'
import { useState } from 'react'
import { deleteDevice } from './actions'

type Props = {
  dispatch: any,
  match: any
};

const DevicePage = (props: Props) => {

  const [ isDeleting, setDeleting ] = useState(false)
  const handleDelete = () => {
    const deviceId = props.match.params.id
    setDeleting(true)
    props.dispatch(deleteDevice(deviceId))
  }

  return (
      <>
        <button disabled={isDeleting} type="button" className="btn btn-default" onClick={handleDelete}>Delete</button>
      </>
    );

}

export default DevicePage;
