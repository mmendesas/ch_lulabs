import * as API from "../utils/api";

export const REQUEST_CEP = "REQUEST_CEP";
export const RECEIVE_CEP = "RECEIVE_CEP";

// action creators
function requestCEP(cep) {
  return {
    type: REQUEST_CEP,
    cep
  };
}

function receiveCEP(info) {
  return {
    type: RECEIVE_CEP,
    payload: info
  };
}

// async action creators
function fetchCEP(cep) {
  return async dispatch => {
    dispatch(requestCEP(cep));

    API.getLocationInfo(cep).then(info => {
      return dispatch(receiveCEP(info));
    });
  };
}

export default fetchCEP;
