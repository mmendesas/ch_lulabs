import React from 'react';
import { render } from 'react-testing-library';
import Address from './Address';

const setup = () => {
  const info = {
    cep: '79065-260',
    logradouro: 'Rua Amapá Doce',
    bairro: 'Vila Moreninha III',
    localidade: 'Campo Grande',
    uf: 'MS'
  };

  return {
    info
  };
};

it('renders address with default title', () => {
  const { getByText } = render(<Address />);
  expect(getByText('address')).toBeInTheDocument();
});

it('renders address with some properties', () => {
  const { info } = setup();
  const { getByText } = render(<Address {...info} />);
  const { localidade, uf } = info;

  Object.values(info).forEach(prop => {
    const text = [localidade, uf].includes(prop) ? `${localidade}-${uf}` : prop;
    expect(getByText(text)).toBeInTheDocument();
  });
});
