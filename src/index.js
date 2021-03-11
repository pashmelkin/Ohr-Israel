import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppContextProvider} from "./Context/AppContextProvider";
require('dotenv').config();

ReactDOM.render(
      <AppContextProvider>
          <App />
      </AppContextProvider>,
  document.getElementById('root')
);


