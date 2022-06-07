import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector, createSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import AddDevicePage from './AddDevicePage';

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

// ---------------------------------------------------------------
// State handling
// ---------------------------------------------------------------
const selectGlobal = (state) => state.get('addDevicePage');

const devicesDataSelector = () => createSelector(
  selectGlobal,
  (globalState) => globalState.devicesData
);

const mapStateToProps = createStructuredSelector({
  // devicesData: devicesDataSelector()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'addDevicePage', reducer });
const withSaga = injectSaga({ key: 'addDevicePage', saga });

export default compose(withReducer, withSaga, withConnect)(AddDevicePage);
export { mapDispatchToProps };
