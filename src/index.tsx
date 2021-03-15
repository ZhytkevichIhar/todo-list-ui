import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from 'contexts/AppProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root') as HTMLElement,
);
