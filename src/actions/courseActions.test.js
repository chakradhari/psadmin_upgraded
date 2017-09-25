import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import ConfigureMockStore from 'redux-mock-store';

const middleWare = [thunk];
const mockStore = ConfigureMockStore(middleWare);
