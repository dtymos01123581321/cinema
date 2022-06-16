import * as types from '../actions/actionTypes';

export const history = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MOVIES:
      return [...state, action.payload];
    case types.DELETE_MOVIES:
      return state.filter( f => f.Keyword !== action.payload );
    default:
      return state;
  }
};

