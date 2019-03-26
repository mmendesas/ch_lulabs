const URL_CEP = "https://viacep.com.br/ws";
const API_KEY = "AIzaSyBcAqRGOwKrY4l-yrUi1CNu7k6F2fDF8U0";
const API_URL = "https://maps.googleapis.com/maps/api/geocode/json";

export function getInfoCEP(cep) {
  return fetch(`${URL_CEP}/${cep}/json`)
    .then(res => res.json())
    .then(json => json);
}

export function getGeoLocation(params) {
  return fetch(buildUrl(API_URL, { ...params, key: API_KEY }))
    .then(res => res.json())
    .then(json => json);
}

function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}

function buildUrl(url, params) {
  return (url += (url.indexOf("?") === -1 ? "?" : "&") + queryParams(params));
}
