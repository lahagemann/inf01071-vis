import React, { Component } from 'react'

import PokemonRoster from './PokemonRoster'
import dataset from '../../data/pkmDataset'
import typematch from '../../data/typeMatchup'
import moveset from '../../data/moves'

var Papa = require("papaparse/papaparse.min.js");

class TypematchMatrix extends Component {
  state = {

  }

  componentWillMount() {
    this.initDatasets()
    this.initState()
  }

  initDatasets() {
    const pkmDataset = Papa.parse(dataset, { delimiter: ";", header: true, })
    const moveDataset = Papa.parse(moveset, { delimiter: ",", header: true, })

    this.setState({
      pkmDataset,
      typematch,
      moveDataset,
    })
  }

  initState() {
    this.setState({
      pkmRoster: {
        first: null,
        second: null,
        third: null,
        fourth: null,
        fifth: null,
        sixth: null,
      },
      dialogOpen: false
    })
  }

  handlePkmClick = (pkm, string) => {
    const pkmMoves = pkm.Moves.replace(/'/g, "").replace("[", "").replace("]", "").split(",")
    const mvs = pkmMoves.map(x => x.trim())

    const roster = {
      ...this.state.pkmRoster,
      [string]: {
        pokemon: pkm,
        moves: mvs,
        move1: null,
        move2: null,
        move3: null,
        move4: null,
      }
    }

    this.setState({
      pkmRoster: roster
    })
  }

  handlePkmUpdate = (pkm, string) => {
    const roster = {
      ...this.state.pkmRoster,
      [string]: pkm
    }

    this.setState({
      pkmRoster: roster
    })
  }

  render() {
    return (
      <div className="TypematchMatrix">
        <h2> Title </h2>
        <div className="TypematchMatrix__matrix" />
        <PokemonRoster
          dataset={this.state.pkmDataset.data}
          moveset={this.state.moveDataset.data}
          roster={this.state.pkmRoster}
          chooseFirstPkm={pkm => this.handlePkmClick(pkm, 'first')}
          chooseSecondPkm={pkm => this.handlePkmClick(pkm, 'second')}
          chooseThirdPkm={pkm => this.handlePkmClick(pkm, 'third')}
          chooseFourthPkm={pkm => this.handlePkmClick(pkm, 'fourth')}
          chooseFifthPkm={pkm => this.handlePkmClick(pkm, 'fifth')}
          chooseSixthPkm={pkm => this.handlePkmClick(pkm, 'sixth')}
          updateFirstPkm={pkm => this.handlePkmUpdate(pkm, 'first')}
          updateSecondPkm={pkm => this.handlePkmUpdate(pkm, 'second')}
          updateThirdPkm={pkm => this.handlePkmUpdate(pkm, 'third')}
          updateFourthPkm={pkm => this.handlePkmUpdate(pkm, 'fourth')}
          updateFifthPkm={pkm => this.handlePkmUpdate(pkm, 'fifth')}
          updateSixthPkm={pkm => this.handlePkmUpdate(pkm, 'sixth')}

        />
      </div>
    )
  }

}

export default TypematchMatrix
