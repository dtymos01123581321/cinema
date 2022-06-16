import { combineReducers } from 'redux';
import { movies } from './reducers/moviesReducers';
import { history } from './reducers/historyReducers';

const rootReducer = combineReducers({
  history,
  movies,
});

export default rootReducer;
