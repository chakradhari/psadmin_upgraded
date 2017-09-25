import * as types from './actionTypes';
import authorsApi from '../api/mockAuthorApi';
import { beginAjaxCalls } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCalls());
    authorsApi.getAllAuthors().then((authors) => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch((error) => {
      throw(error);
    });
  };
}
