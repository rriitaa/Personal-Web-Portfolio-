import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import App from './App'; // Importa tu componente principal App
import './index.css'; // Asegúrate de importar tu archivo CSS aquí

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
