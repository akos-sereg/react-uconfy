import { Device } from 'MyModels';
import React from 'react';
import areEqual from 'fast-deep-equal';

import './DeviceListItem.css';

type Props = {
  device: Device;
};

const handleNavigateToDevice = (deviceID: string) => {
    document.location.href = `#/device/${deviceID}`;
};

const DeviceListItem = React.memo<Props>(({ device }) => {
  let deviceClassNames = [ 'device-list-item-container' ];
  if (device.lastSeen === -1) {
    deviceClassNames.push('device-seen-never');
  } else if (device.lastSeen < 86400) {
    deviceClassNames.push('device-seen-recently');
  } else {
    deviceClassNames.push('device-seen-a-while-ago');
  }
  return (
    <div className={deviceClassNames.join(' ')} onClick={() => handleNavigateToDevice(device.deviceID)}>
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

export default DeviceListItem;
