import * as React from 'react'
import { deleteDevice } from './actions'

type Props = {
  dispatch: any,
  match: any
};

const DevicePage = (props: Props) => {

  const handleDelete = () => {
    const deviceId = props.match.params.id
    props.dispatch(deleteDevice(deviceId))
  }

  return (
      <>
        <button type="button" className="btn btn-default" onClick={handleDelete}>Delete</button>
      </>
    );

}

export default DevicePage;
