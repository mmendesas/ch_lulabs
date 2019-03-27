import { combineReducers } from 'redux';

import cep from './cep';

export default combineReducers({
  info: cep
});
