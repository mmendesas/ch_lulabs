import { RECEIVE_CEP } from "../actions/cep";

const loading = (state = true, action) => {
  switch (action.type) {
    case RECEIVE_CEP:
      return false;
    default:
      return state;
  }
};

export default loading;
