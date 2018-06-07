import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App';
import registerServiceWorker from './utils/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render( 
<Router>
  <App/> 
</Router>, document.getElementById('root'));
registerServiceWorker();