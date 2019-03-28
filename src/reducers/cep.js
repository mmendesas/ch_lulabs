import { REQUEST_CEP, RECEIVE_CEP, ADD_ERROR } from '../actions/cep';

const cep = (
  state = {
    isFetching: false,
    address: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_CEP:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_CEP:
      return {
        ...state,
        isFetching: false,
        address: action.payload
      };
    case ADD_ERROR:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default cep;
