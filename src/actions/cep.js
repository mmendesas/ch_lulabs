import * as API from "../utils/api";

export const RECEIVE_CEP = "RECEIVE_CEP";

// action creators
function receiveCEPInfo(info) {
  return {
    type: RECEIVE_CEP,
    payload: info
  };
}

// async action creators
function handleReceiveCEPInfo(cep) {
  return async dispatch => {
    const info = await API.getInfoCEP(cep);
    return dispatch(receiveCEPInfo(info));
  };
}

export default handleReceiveCEPInfo;
