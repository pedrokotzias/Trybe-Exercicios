import { legacy_createStore as createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import f

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(
      reducer,
      initialState,
      applyMiddleware(thunk)
    ),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux;