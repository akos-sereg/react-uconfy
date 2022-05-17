import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import LoginPage from './LoginPage';
import { setNavigation } from '../../components/Navigation/actions';

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  updateNavigation: () => {
    dispatch(setNavigation(
      [
        { name: 'uConfy', uri: '/#/' },
        { name: 'Login' },
      ]));
  },
});

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(withReducer, withSaga, withConnect)(LoginPage);
// export default compose(withConnect)(MainPage);
export { mapDispatchToProps };

