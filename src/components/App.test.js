import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-testing-library';

import reducer from '../reducers';
import App from './App';

// deal with connected components
const renderWithRedux = (
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};

describe('[Container] - App', () => {
  it('can render with redux with defaults', () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText('Consulta de Endereço')).toBeInTheDocument();
  });

  it('should show loading message when isFetching', () => {
    const store = createStore(() => ({ info: { isFetching: true } }));
    const { getByText } = renderWithRedux(<App />, {
      store
    });
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should show dialog when have address data', () => {
    const address = {
      cep: '79065-260'
    };
    const store = createStore(() => ({ info: { address } }));
    const { container } = renderWithRedux(<App />, {
      store
    });
    expect(container.querySelector('.dialog--active')).toBeInTheDocument();
  });
});
