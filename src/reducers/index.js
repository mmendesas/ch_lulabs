import { combineReducers } from 'redux';

import cep from './cep';
import error from './error';

export default combineReducers({
  info: cep,
  error
});
