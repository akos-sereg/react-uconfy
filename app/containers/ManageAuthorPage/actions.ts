import { UPDATE_AUTHOR, UPDATE_AUTHOR_SUCCESS, UPDATE_AUTHOR_ERROR, CREATE_AUTHOR_SUCCESS } from './constants';
import { Author } from '../../model/Author';

export function updateAuthor(author: Author) {
  return {
    type: UPDATE_AUTHOR,
    author
  };
}

export function updateAuthorSuccess(author: Author) {
  return {
    type: UPDATE_AUTHOR_SUCCESS,
    author
  };
}

export function updateAuthorError(author: Author, error: any) {
  return {
    type: UPDATE_AUTHOR_ERROR,
    author,
    error
  };
}

export function createAuthorSuccess(author: Author) {
  return {
    type: CREATE_AUTHOR_SUCCESS,
    author
  };
}
