import React, { Component } from 'react';
import './App.css';
//import HelloWorld from "./state-drills/HelloWorld"
//import TheDate from './state/TheDate';
//import Bomb from './state-drills/Bomb '
import RouletteGun from './state-drills/RouletteGun'


class App extends Component {
  render() {
    return (
      <div className="App">
        <RouletteGun  />
      </div>
    );
  }
}

export default App;