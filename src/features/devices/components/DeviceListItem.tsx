import { Device } from 'MyModels';
import React from 'react';
import areEqual from 'fast-deep-equal';
import { connect } from 'react-redux';

const dispatchProps = {
  deleteArticle: (device: Device) => {},
};

type Props = typeof dispatchProps & {
  device: Device;
};

const DeviceListItem = React.memo<Props>(({ device, deleteArticle }) => {
  return (
    <>
        {device.name}
    </>
  );
}, areEqual);


export default connect(
  null,
  dispatchProps
)(DeviceListItem);
