import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/main.scss"
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate(<App />, document.getElementById('root'));



serviceWorker.unregister();