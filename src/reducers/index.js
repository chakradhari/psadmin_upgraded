import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorsReducer';
import numberOfAjaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  numberOfAjaxCallsInProgress
})

export default rootReducer;
