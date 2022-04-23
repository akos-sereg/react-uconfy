import * as React from 'react';
import { Component } from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

class MainPage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Main Page</title>
          <meta
            name="description"
            content="Main page of React.js Boilerplate application"
          />
        </Helmet>

        Main
      </div>
    );
  }
}

export default MainPage;
