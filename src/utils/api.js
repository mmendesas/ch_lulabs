const URL_CEP = "https://viacep.com.br/ws";

export function getInfoCEP(cep) {
  return fetch(`${URL_CEP}/${cep}/json`)
    .then(res => res.json())
    .then(json => json);
}
