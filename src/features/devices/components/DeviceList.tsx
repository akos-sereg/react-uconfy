import { RootState } from 'MyTypes';
import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../articles/selectors';
import DeviceListItem from '../../devices/components/DeviceListItem';
import './DeviceList.css'

const mapStateToProps = (state: RootState) => ({
  isLoading: state.articles.isLoadingArticles,
  articles: selectors.getArticles(state),
  devices: selectors.getDevices(state),
});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const DeviceList: React.FC<Props> = ({
  isLoading,
  articles: articles = [],
  devices: devices = [],
}) => {
  if (isLoading) {
    return <p style={{ textAlign: 'center' }}>Loading articles...</p>;
  }

  if (devices.length === 0) {
    return (
      <p style={{ textAlign: 'center' }}>
        No devices yet, please create new...
      </p>
    );
  }

  return (
    <div className="device-list-container">
      {devices.map(device => (<DeviceListItem key={device.deviceID} device={device} />))}
    </div>
  );
};

export default connect(
  mapStateToProps,
  dispatchProps
)(DeviceList);
