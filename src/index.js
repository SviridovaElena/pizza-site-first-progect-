import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/app.scss';
import{ BrowserRouter as Router } from 'react-router-dom';
//import { Header } from './Components';


ReactDOM.render(
  <React.StrictMode>
    <Router>
     <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


