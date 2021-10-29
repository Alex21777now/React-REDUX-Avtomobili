import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';

const store = createStore (allReducers);

const express = require('express')
const app = express()
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

const PORT = process.env.PORT || 80
server.listen(PORT, () => {console.log('Server has been started...')})



ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  document.getElementById('fieldToShow')
);
