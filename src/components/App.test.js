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
});
