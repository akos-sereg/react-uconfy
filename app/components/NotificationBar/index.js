import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector, createSelector } from 'reselect';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import NotificationBar from "./NotificationBar";

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

// ---------------------------------------------------------------
// State handling
// ---------------------------------------------------------------
const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'notificationBar', reducer });
const withSaga = injectSaga({ key: 'notificationBar', saga });

export default compose(withReducer, withSaga, withConnect)(NotificationBar);
export { mapDispatchToProps };
