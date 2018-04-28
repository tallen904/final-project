import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import App from './App';
import jquery from 'jquery';
const $ = (typeof window !== 'undefined') ? window.$ = window.jQuery = jquery : {}; // eslint-disable-line
require('foundation-sites');
require('node_modules/foundation-sites/scss/foundation');


//import registerServiceWorker from './registerServiceWorker';
var Foundation = require('foundation-sites/dist/js/foundation');
ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
