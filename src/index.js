import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/app.scss';
import{ BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux'; 

store.dispatch({
  type:'SET_SORT_BY',
  payload: 'price'
})
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


