import { combineReducers } from 'redux';
import usersReducer from './users';
import loading from './loading';
const rootReducer = combineReducers({
  users: usersReducer,
  loading: loading
});

export default rootReducer;
