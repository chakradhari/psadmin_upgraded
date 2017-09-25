import * as types from './actionTypes';

export function beginAjaxCalls() {
  return { type: types.BEGIN_AJAX_CALLS};
}

export function ajaxCallFails() {
  return { type: types.AJAX_CALL_FAILS };
}
