import React, { Component } from 'react'

import TypematchMatrix from './components/TypematchMatrix/TypematchMatrix'
import Sidebar from './components/Sidebar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1> Competitive Pokémon Visualization App </h1>
        </header>
        <section>
          <TypematchMatrix />
          <Sidebar />
        </section>
      </div>
    );
  }
}

export default App;
