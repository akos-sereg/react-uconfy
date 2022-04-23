import {
  FETCH_AUTHORS,
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_ERROR,
  DELETE_AUTHOR,
  DELETE_AUTHOR_SUCCESS
} from './constants';
import { Author } from '../../model/Author';

export function fetchAuthors() {
  return {
    type: FETCH_AUTHORS
  };
}

export function authorsFetched(authors: Author[]) {
  return {
    type: FETCH_AUTHORS_SUCCESS,
    authors
  };
}

export function fetchAuthorsError(error: any) {
  return {
    type: FETCH_AUTHORS_ERROR,
    error,
  };
}

export function deleteAuthor(id: string) {
  return {
    type: DELETE_AUTHOR,
    id
  };
}

export function deleteAuthorSuccess(id: string) {
  return {
    type: DELETE_AUTHOR_SUCCESS,
    id
  };
}
