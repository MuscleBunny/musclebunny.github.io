import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createTheme({
  palette: {
    primary: {
      main: "#252934",
    },
    secondary: {
      main: '#282A37',
    },
    error: {
      main: '#e31b6d',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
