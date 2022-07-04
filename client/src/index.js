import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; //para conectarme con el store
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
//nunca olvidar envolver la aplicacion en provider sino redux no reconoce nada store 

ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
</Provider>,
document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsreportWebVitals();
