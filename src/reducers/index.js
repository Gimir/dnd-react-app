import { combineReducers } from 'redux';
import rows from './rows';
import user from './user';

export default () =>
  combineReducers({
    rows,
    user,
  });
