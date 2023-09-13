import React, { Component } from 'react';
import './App.css';

import Game from './containers/Game'
import Navbar from './containers/Navbar';

class App extends Component {

  componentDidMount() {
    

    const el = document.getElementById("ipl-progress-indicator");
    if (el) {
      setTimeout(() => {
        el.classList.add("available");
        setTimeout(() => {
          el.outerHTML = "";
        }, 2000);
      }, 1000);
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Game />
      </div>
    );
  }
}

export default App;
