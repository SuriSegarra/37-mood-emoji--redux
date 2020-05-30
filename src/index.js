import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store';

//privder es global state so le esta dando permiso a app a tener todo 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

