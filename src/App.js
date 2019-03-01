import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Home activeTab='home'/>
      </div>
    );
  }
}

export default App;
