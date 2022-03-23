import { Device } from 'MyModels';
import React from 'react';
import areEqual from 'fast-deep-equal';
import { connect } from 'react-redux';

// import { deleteArticleAsync } from '../actions';
import { getPath } from '../../../router-paths';
import FlexRow from '../../../components/FlexRow';
import { Link } from 'react-router-dom';

const dispatchProps = {
  // deleteArticle: deleteArticleAsync.request,
  deleteArticle: (device: Device) => {},
};

type Props = typeof dispatchProps & {
  device: Device;
};

const ArticleListItem = React.memo<Props>(({ device, deleteArticle }) => {
  return (
    <FlexRow>
      <div style={getStyle()}>{device.name}</div>
      <FlexRow itemsSpacing={20}>
        <Link to={getPath('viewArticle', device.deviceID)}>View</Link>
        <div
          className="link"
          onClick={() => deleteArticle(device)}
          style={{ color: 'darkred' }}
        >
          Delete
        </div>
      </FlexRow>
    </FlexRow>
  );
}, areEqual);

const getStyle = (): React.CSSProperties => ({
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
  width: '300px',
});

export default connect(
  null,
  dispatchProps
)(ArticleListItem);
