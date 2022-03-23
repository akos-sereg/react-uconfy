import { RootState } from 'MyTypes';
import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors';

import ArticleListItem from './ArticleListItem';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.articles.isLoadingArticles,
  articles: selectors.getArticles(state),
  devices: selectors.getDevices(state),
});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const ArticleList: React.FC<Props> = ({
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
    <ul style={getStyle()}>
      {devices.map(device => (
        <li key={device.deviceID}>
          <ArticleListItem device={device} />
        </li>
      ))}
    </ul>
  );
};

const getStyle = (): React.CSSProperties => ({
  textAlign: 'left',
  margin: 'auto',
  maxWidth: 500,
});

export default connect(
  mapStateToProps,
  dispatchProps
)(ArticleList);
