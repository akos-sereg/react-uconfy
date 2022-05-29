import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector, createSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import DeviceListPage from './DeviceListPage';
import { fetchDevices } from './actions';
import { setNavigation } from '../../components/Navigation/actions';

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  /*fetchDevices: () => {
    dispatch(fetchDevices());
  },*/
});

// ---------------------------------------------------------------
// State handling
// ---------------------------------------------------------------
const selectGlobal = (state) => state.get('deviceList');

const devicesDataSelector = () => createSelector(
  selectGlobal,
  (globalState) => globalState.devicesData
);

const mapStateToProps = createStructuredSelector({
  devicesData: devicesDataSelector()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'deviceList', reducer });
const withSaga = injectSaga({ key: 'deviceList', saga });

export default compose(withReducer, withSaga, withConnect)(DeviceListPage);
export { mapDispatchToProps };
