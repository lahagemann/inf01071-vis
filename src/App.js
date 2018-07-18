import React, { Component } from 'react'

import TypematchMatrix from './components/TypematchMatrix/TypematchMatrix'
import TierPlot from './components/TierPlot/TierPlot'
import Sidebar from './components/Sidebar'
import './App.css'

class App extends Component {
  componentWillMount() {
    this.setState({
      vis: "TierPlot"
    })
  }

  handleChangeVis = (visOpt) => {
    this.setState({
      vis: visOpt
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header>
          <h1> Competitive Pokémon Visualization App </h1>
        </header>
        <section>
          {(this.state.vis === "TierPlot") ? (
            <TierPlot />
          ) : (
            <TypematchMatrix />
          )}
          <Sidebar
            vis={this.state.vis}
            handleChangeVis={vis => this.handleChangeVis(vis)}
          />
        </section>
      </div>
    );
  }
}

export default App;
