import * as React from 'react';
import { Component } from 'react';
import AuthorForm from '../../components/AuthorForm';
import AuthorApi from '../../services/AuthorApi';
import { Author } from '../../model/Author';

type Props = {
  match: any,
  onSaveAuthor: Function
};

type State = {
    author: Author,
    errors: any
}

class ManageAuthorPage extends Component<Props, State> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      author: { id: '', firstName: '', lastName: '' },
      errors: { }
    };

    this.saveAuthor = this.saveAuthor.bind(this);
    this.setAuthorState = this.setAuthorState.bind(this);
  }

  componentWillMount() {
    const authorId = this.props.match.params.id;

    if (authorId) {
      const author = AuthorApi.getAuthorById(authorId);
      this.setState({ author });
    }
  }

  setAuthorState(event: any) {
    const stateAuthor: any = this.state.author;
    stateAuthor[event.target.name] = event.target.value;
    return this.setState({ author: stateAuthor });
  }

  saveAuthor(event: any) {
    this.props.onSaveAuthor(event, this.state.author);
  }

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        errors={this.state.errors}
        onSave={this.saveAuthor}
        onChange={this.setAuthorState}
      />

    );
  }
}

export default ManageAuthorPage;
