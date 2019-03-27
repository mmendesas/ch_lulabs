import fetchJsonp from "fetch-jsonp";

const CEP_URL = "https://viacep.com.br/ws";
const API_URL = "https://maps.googleapis.com/maps/api/geocode/json";
export const API_KEY = "AIzaSyBcAqRGOwKrY4l-yrUi1CNu7k6F2fDF8U0";

export function getInfoCEP(cep = "") {
  return fetchJsonp(`${CEP_URL}/${cep}/json/?callback=myfn`)
    .then(res => res.json())
    .then(json => {
      const { cep, logradouro, bairro, localidade, uf } = json;
      return { cep, logradouro, bairro, localidade, uf };
    })
    .catch(ex => {
      throw new Error("Error getting ViaCEP data", ex);
    });
}

export function getGeoLocation(params) {
  const geoUrl = buildUrl(API_URL, { ...params, key: API_KEY });
  return fetch(geoUrl)
    .then(res => res.json())
    .then(json => {
      const location =
        json.status === "OK"
          ? json.results[0].geometry.location
          : { lat: 0, lng: 0 };
      return location;
    })
    .catch(ex => {
      throw new Error("Error getting GoogleMaps API data", ex);
    });
}

export async function getLocationInfo(cep) {
  const viaCep = await getInfoCEP(cep);
  const geoLoc = await getGeoLocation({ address: cep });

  const data = {
    ...viaCep,
    ...geoLoc
  };

  return data;
}

function queryParams(params) {
  return Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");
}

function buildUrl(url, params) {
  return (url += (url.indexOf("?") === -1 ? "?" : "&") + queryParams(params));
}
