import { RECEIVE_CEP } from "../actions/cep";

const cep = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CEP:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default cep;
