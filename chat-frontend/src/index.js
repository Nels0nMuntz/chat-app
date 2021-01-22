import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

import 'antd/dist/antd.css';
import './styles/index.scss';


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
