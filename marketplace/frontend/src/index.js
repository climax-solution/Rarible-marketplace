import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";
const APP_ID = "5UnkGBLQclHgHZ4DK9L8pw7gmPn8Iu7PdxajyR5E";
const SERVER_URL = "https://ur4epy9v2wqy.usemoralis.com:2053/server";
ReactDOM.render(
  <React.Fragment>
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <App />
      </MoralisProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
