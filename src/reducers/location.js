import { RECEIVE_LOCATION } from "../actions/location";

const location = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LOCATION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default location;
