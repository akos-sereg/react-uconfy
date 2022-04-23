import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthorList from '../../components/AuthorList';
import { Author } from '../../model/Author';
import './style.scss';

type Props = {
  authors: Author[],
  onFetchAuthors: Function,
  onDeleteAuthor: Function,
};

class DeviceListPage extends Component<Props> {

  render() {
    const { authors, onDeleteAuthor } = this.props;

    return (
      <div>
        <h1>Devices</h1>
      </div>
    );
  }
}

export default DeviceListPage;
