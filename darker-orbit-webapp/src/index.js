import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './pages/App'
import registerServiceWorker from './utils/registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/> 
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker()