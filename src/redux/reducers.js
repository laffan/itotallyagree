import {combineReducers} from 'redux';

import {FETCH_MESSAGES, FETCH_USERS, ADD_USER } from './actions';

function messages (state = {}, action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

function users (state = {}, action) {
  switch(action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};

function user (state = {}, action) {
  switch(action.type) {
    case ADD_USER:
      return action.data;
    default:
      return state;
  }
};


export default combineReducers({
  messages,
  users,
  user
})