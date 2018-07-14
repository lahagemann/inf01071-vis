import React, { Component } from 'react'

import dataset from './data/pkmDataset'
import typematch from './data/typeMatchup'

import TypematchMatrix from './components/TypematchMatrix/TypematchMatrix'
import PokemonRoster from './components/TypematchMatrix/PokemonRoster'
import Sidebar from './components/Sidebar'
import './App.css'

var Papa = require("papaparse/papaparse.min.js");

class App extends Component {
  render() {
    const pkmDataset = Papa.parse(dataset, { delimiter: ";", header: true, })
    const typeMatchup = Papa.parse(typematch, { delimiter: ",", header: true, })

    const pkmRoster = {
      first: pkmDataset.data[102],
      second: pkmDataset.data[102],
      third: pkmDataset.data[102],
      fourth: pkmDataset.data[102],
      fifth: pkmDataset.data[102],
      sixth: null,
    }

    return (
      <div className="App">
        <header>
          <h1> Competitive Pokémon Visualization App </h1>
        </header>
        <section>
          <div className="Main">
            <TypematchMatrix />
            <PokemonRoster
              roster={pkmRoster}
            />
          </div>
          <Sidebar />
        </section>
      </div>
    );
  }
}

export default App;
