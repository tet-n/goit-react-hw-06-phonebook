import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Global, ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles, theme } from 'styles';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
