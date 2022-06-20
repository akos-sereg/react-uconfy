import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector, createSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import DevicePage from './DevicePage';

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

// ---------------------------------------------------------------
// State handling
// ---------------------------------------------------------------
const selectGlobal = (state) => state.get('devicePage');
const deviceListGlobal = (state) => state.get('deviceList');

const devicesDataSelector = () => createSelector(
  deviceListGlobal,
  (globalState) => globalState ? globalState.devicesData : null
);

const mapStateToProps = createStructuredSelector({
  devicesData: devicesDataSelector()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'devicePage', reducer });
const withSaga = injectSaga({ key: 'devicePage', saga });

export default compose(withReducer, withSaga, withConnect)(DevicePage);
export { mapDispatchToProps };
