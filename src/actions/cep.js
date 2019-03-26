import * as API from "../utils/api";
import handleReceiveLocation from "./location";

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
    dispatch(receiveCEPInfo(info));
    return dispatch(handleReceiveLocation(info));
  };
}

export default handleReceiveCEPInfo;
