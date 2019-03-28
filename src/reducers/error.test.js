import reducers from '../reducers';

describe('[Reducers] - Error', () => {
  const initialState = {
    info: { isFetching: false, address: {} },
    error: { message: '' }
  };

  it('add error', () => {
    let state = reducers(initialState, {
      type: 'ADD_ERROR',
      error: { message: 'error message' }
    });
    expect(state).toEqual({
      info: { isFetching: false, address: {} },
      error: { message: 'error message' }
    });
  });

  test('remove error', () => {
    let state;
    state = reducers(
      {
        info: { isFetching: false, address: {} },
        error: { message: 'error message' }
      },
      { type: 'REMOVE_ERROR' }
    );
    expect(state).toEqual(initialState);
  });
});
