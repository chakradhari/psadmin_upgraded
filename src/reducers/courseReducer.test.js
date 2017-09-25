import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';
import * as types from '../actions/actionTypes';

describe('Course Reducer', () => {
  it('Should add course when passed CREATE_COURSE_SUCCESS', () => {
    var array = [];
    var course = {
        name: 'Chakri'
    };

    var action = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    }

    var newArray = array.concat(Object.assign({}, course));
    expect(courseReducer(array, action)).toEqual(newArray);
  })
})
