import * as _ from 'lodash';
import { Author } from '../model/Author'

class AuthorApi {
  authors: Author[];

  constructor() {
    this.authors = [
      {
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
      },
      {
        id: 'scott-allen',
        firstName: 'Scott',
        lastName: 'Allen'
      },
      {
        id: 'dan-wahlin',
        firstName: 'Dan',
        lastName: 'Wahlin'
      }
    ];
  }

  getAllAuthors() {
    return AuthorApi.clone(this.authors);
  }

  getAuthorById(id: string) {
    const author = _.find(this.authors, { id });
    return AuthorApi.clone(author);
  }

  saveAuthor(author: Author) {
    if (author.id) {
      const existingAuthorIndex = _.indexOf(this.authors, _.find(this.authors, { id: author.id }));
      this.authors.splice(existingAuthorIndex, 1, author);
    } else {
      author.id = AuthorApi.generateId(author);
      this.authors.push(author);
    }

    return AuthorApi.clone(author);
  }

  deleteAuthor(id: string) {
    _.remove(this.authors, { id });
  }

  static clone(item: any) {
    return JSON.parse(JSON.stringify(item));
  }

  static generateId(author: Author) {
    return `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;
  }
}

export default new AuthorApi();
