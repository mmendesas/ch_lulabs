import * as API from "../utils/api";

export const RECEIVE_LOCATION = "RECEIVE_LOCATION";

// action creators
function receiveLocation(info) {
  return {
    type: RECEIVE_LOCATION,
    payload: info
  };
}

// async action creators
function handleReceiveLocation(data) {
  return async dispatch => {
    const { cep, localidade, bairro, logradouro } = data;
    const params = {
      address: `${cep} ${localidade} ${bairro} ${logradouro}`
    };

    const geoLoc = await API.getGeoLocation(params);

    const location =
      geoLoc.status === "OK"
        ? geoLoc.results[0].geometry.location
        : { lat: 0, lng: 0 };

    return dispatch(receiveLocation(location));
  };
}

export default handleReceiveLocation;
