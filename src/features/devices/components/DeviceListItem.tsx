import { Device } from 'MyModels';
import React from 'react';
import areEqual from 'fast-deep-equal';
import { connect } from 'react-redux';

import './DeviceListItem.css';

const dispatchProps = {
  deleteArticle: (device: Device) => {},
};

type Props = typeof dispatchProps & {
  device: Device;
};

const DeviceListItem = React.memo<Props>(({ device, deleteArticle }) => {
  let deviceClassNames = [ 'device-list-item-container' ];
  if (device.lastSeen === -1) {
    deviceClassNames.push('device-seen-never');
  } else if (device.lastSeen < 86400) {
    deviceClassNames.push('device-seen-recently');
  } else {
    deviceClassNames.push('device-seen-a-while-ago');
  }
  return (
    <div className={deviceClassNames.join(' ')}>
        <b>{device.name}</b>
        {renderLastSeen(device.lastSeen)}
    </div>
  );
}, areEqual);

const renderLastSeen = (lastSeenSeconds:number) => {
    if (lastSeenSeconds === -1) {
        return (
            <p className="device-list-item-last-seen">
                <i>device not connected</i>
            </p>
        );
    }

    if (lastSeenSeconds < 60) {
        return (
            <p className="device-list-item-last-seen">
                <i>device seen {lastSeenSeconds} seconds ago</i>
            </p>
        );
    }

    if (lastSeenSeconds < 3600) {
        return (
            <p className="device-list-item-last-seen">
                <i>device seen {Math.ceil(lastSeenSeconds / 60)} minutes ago</i>
            </p>
        );
    }

    if (lastSeenSeconds < 86400) {
        return (
            <p className="device-list-item-last-seen">
                <i>device seen {Math.ceil(lastSeenSeconds / 3600)} hours ago</i>
            </p>
        );
    }

    return (
        <p className="device-list-item-last-seen">
            <i>device last seen {Math.ceil(lastSeenSeconds / 86400)} days ago</i>
        </p>
    );
}


export default connect(
  null,
  dispatchProps
)(DeviceListItem);
