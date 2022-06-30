import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector, createSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import LoginPage from './LoginPage';
import { setNavigation } from '../../components/Navigation/actions';

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

// ---------------------------------------------------------------------
// State handling
// ---------------------------------------------------------------------
const selectGlobal = (state) => state.get('loginPage');

const isProcessingSelector = () => createSelector(
  selectGlobal,
  (globalState) => globalState.isProcessing
);

const loginErrorMessageSelector = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loginErrorMessage
)

const mapStateToProps = createStructuredSelector({
  isProcessing: isProcessingSelector(),
  loginErrorMessage: loginErrorMessageSelector()
});

// ---------------------------------------------------------------------
// Compose component
// ---------------------------------------------------------------------
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(withReducer, withSaga, withConnect)(LoginPage);
export { mapDispatchToProps };

