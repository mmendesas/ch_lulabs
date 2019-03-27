import fetchJsonp from "fetch-jsonp";

const CEP_URL = "https://viacep.com.br/ws";
const API_URL = "https://maps.googleapis.com/maps/api/geocode/json";
export const API_KEY = "AIzaSyBcAqRGOwKrY4l-yrUi1CNu7k6F2fDF8U0";

export function getInfoCEP(cep = "") {
  return fetchJsonp(`${CEP_URL}/${cep}/json/?callback=myfn`)
    .then(res => res.json())
    .then(json => json)
    .catch(ex => {
      throw new Error("Error getting ViaCEP data", ex);
    });
}

export function getGeoLocation(params) {
  return fetch(buildUrl(API_URL, { ...params, key: API_KEY }))
    .then(res => res.json())
    .then(json => json)
    .catch(ex => {
      throw new Error("Error getting GoogleMaps API data", ex);
    });
}

function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}

function buildUrl(url, params) {
  return (url += (url.indexOf("?") === -1 ? "?" : "&") + queryParams(params));
}
