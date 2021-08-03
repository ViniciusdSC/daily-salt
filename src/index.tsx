import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import theme from 'app/config/theme';
import { persistor, store } from 'app/store';
import App from './app';

import 'index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
