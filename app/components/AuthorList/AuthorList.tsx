import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import * as toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { Author } from '../../model/Author';

type Props = {
  authors: Author[],
  onDeleteAuthor: Function,
};

class AuthorList extends Component<Props> {
  deleteAuthor(event: any, id: string) {
    this.props.onDeleteAuthor(event, id);
    toastr.success('Author Deleted.');
  }

  render() {
    const { authors, onDeleteAuthor } = this.props;

    const createAuthorRow = (author: Author) => (
      <tr key={author.id}>
        <td>
          <a href="#" onClick={(e) => this.deleteAuthor(e, author.id)}>Delete</a>
        </td>
        <td>
          <Link to={`/author/${author.id}`}>{author.id}</Link>
        </td>
        <td>
          {author.firstName} {author.lastName}
        </td>
      </tr>
    );

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AuthorList;
