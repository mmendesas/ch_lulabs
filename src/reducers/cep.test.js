import reducers from '../reducers';

describe('[Reducers] - CEP', () => {
  const initialState = {
    info: { isFetching: false, address: {} },
    error: { message: '' }
  };

  const fakeAddress = {
    cep: '12345-100',
    logradouro: 'rua das casas',
    bairro: 'limoeiro',
    localidade: 'Limão',
    uf: 'SP',
    lat: 123,
    lng: -123
  };

  it('request cep', () => {
    let state = reducers(initialState, {
      type: 'REQUEST_CEP',
      cep: '05001100'
    });
    expect(state).toEqual({
      ...initialState,
      info: { isFetching: true, address: {} }
    });
  });

  it('receive cep', () => {
    let state = reducers(initialState, {
      type: 'RECEIVE_CEP',
      payload: fakeAddress
    });
    expect(state).toEqual({
      info: {
        isFetching: false,
        address: fakeAddress
      },
      error: { message: '' }
    });
  });
});
