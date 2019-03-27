import { REQUEST_CEP, RECEIVE_CEP } from '../actions/cep';

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
    default:
      return state;
  }
};

export default cep;
