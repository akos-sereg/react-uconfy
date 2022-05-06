import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectAuthors } from './selectors';
import saga from './saga';
import reducer from './reducer';
import Navigation from './Navigation';
import { fetchAuthors } from './actions';
import { makeNavigationPathSelector } from './selectors';

const mapDispatchToProps = (dispatch) => ({

  onDeleteAuthor: (evt, id) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }

    dispatch(deleteAuthor(id));
  }
});

const mapStateToProps = createStructuredSelector({
  navigationPath: makeNavigationPathSelector()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'navigation', reducer });
const withSaga = injectSaga({ key: 'navigation', saga });

export default compose(withReducer, withSaga, withConnect)(Navigation);
export { mapDispatchToProps };
