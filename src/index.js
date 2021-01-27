import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import Store from "./store";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
