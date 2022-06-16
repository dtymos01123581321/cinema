import * as types from '../actions/actionTypes';

export const movies = (state = [], action) => {
  switch (action.type) {
    case types.SET_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
