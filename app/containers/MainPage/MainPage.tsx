import * as React from 'react';
import { Component } from 'react';
import { Helmet } from 'react-helmet';
import styles from './style.scss';

type Props = {
  updateNavigation: Function
};

class MainPage extends Component<Props> {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.updateNavigation();
  }

  render() {
    console.log(styles);
    return (
      <div>
        <Helmet>
          <title>Main Page</title>
          <meta
            name="description"
            content="Main page of React.js Boilerplate application"
          />
        </Helmet>

        <table className={styles.loginFormTable}>
          <tbody>
            <tr>
              <td>
              </td>
              <td>
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1">@</span>
                  <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MainPage;
