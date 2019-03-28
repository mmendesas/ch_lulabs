import { ADD_ERROR, REMOVE_ERROR } from '../actions/cep';

const error = (state = { message: '' }, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, message: action.error.message };
    case REMOVE_ERROR:
      return { ...state, message: '' };
    default:
      return state;
  }
};

export default error;
