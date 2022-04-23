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

class AuthorsPage extends Component<Props> { // eslint-disable-line react/prefer-stateless-function
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onFetchAuthors();
  }

  render() {
    const { authors, onDeleteAuthor } = this.props;

    return (
      <div>
        <h1>Authors</h1>
        <Link to="/author" className="btn btn-default">Add Author</Link>
        <AuthorList onDeleteAuthor={onDeleteAuthor} authors={authors} />
      </div>
    );
  }
}

export default AuthorsPage;
