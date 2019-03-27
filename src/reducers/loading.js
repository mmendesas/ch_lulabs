import { RECEIVE_LOCATION } from "../actions/location";

const loading = (state = true, action) => {
  switch (action.type) {
    case RECEIVE_LOCATION:
      return false;
    default:
      return state;
  }
};

export default loading;