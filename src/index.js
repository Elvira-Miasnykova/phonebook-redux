import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App/App';
import { store, persistor } from './redux/store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme} from './theme';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading = {null} persistor = {persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook-upgrade">
            <App />
          </BrowserRouter>  
        </PersistGate>  
      </Provider>
      </ThemeProvider>
  </React.StrictMode>
);