import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthorList from '../../components/AuthorList';
import { Author } from '../../model/Author';
import styles from './style.scss';

type Props = {
  authors: Author[],
  onFetchAuthors: Function,
  onDeleteAuthor: Function,
  updateNavigation: Function
};

class DeviceListPage extends Component<Props> {

  componentDidMount() {
    this.props.updateNavigation();
  }

  render() {

    return (
      <div>
        <h1>Devices</h1>
      </div>
    );
  }
}

export default DeviceListPage;
