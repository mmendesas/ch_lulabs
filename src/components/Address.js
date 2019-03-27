import React from "react";

const Address = ({ logradouro, bairro, localidade, uf, cep }) => (
  <section className="address">
    <h1 className="address__title">{logradouro}</h1>
    <div className="address__item">{bairro}</div>
    <p className="address__item">{`${localidade}-${uf}`}</p>
    <div className="address__item">{cep}</div>
  </section>
);

export default Address;
