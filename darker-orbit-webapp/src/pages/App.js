import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DarkerOrbit</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;
