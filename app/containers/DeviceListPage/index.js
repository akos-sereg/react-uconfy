import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import DeviceListPage from './DeviceListPage';
import { fetchAuthors, deleteAuthor } from './actions';
import { setNavigation } from '../../components/Navigation/actions';

const mapDispatchToProps = (dispatch) => ({
  updateNavigation: () => {
    dispatch(setNavigation(
      [
        { name: 'uConfy', uri: '/#/' },
        { name: 'Devices' },
      ]));
  },
});

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'deviceList', reducer });
const withSaga = injectSaga({ key: 'deviceList', saga });

export default compose(withReducer, withSaga, withConnect)(DeviceListPage);
export { mapDispatchToProps };
