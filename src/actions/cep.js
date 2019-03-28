import * as API from '../utils/api';

export const REQUEST_CEP = 'REQUEST_CEP';
export const RECEIVE_CEP = 'RECEIVE_CEP';
export const ADD_ERROR = 'ADD_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

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

function addError(error) {
  return {
    type: ADD_ERROR,
    error
  };
}

function removeError() {
  return {
    type: REMOVE_ERROR
  };
}

// async action creators
function fetchCEP(cep) {
  return async dispatch => {
    dispatch(requestCEP(cep));
    dispatch(removeError());

    API.getLocationInfo(cep)
      .then(info => {
        return dispatch(receiveCEP(info));
      })
      .catch(err => {
        return dispatch(addError(err));
      });
  };
}

export default fetchCEP;
