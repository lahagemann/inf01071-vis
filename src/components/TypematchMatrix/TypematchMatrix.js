import React, { Component } from 'react'

import Matrix from './Matrix'
import PokemonRoster from './PokemonRoster'
import dataset from '../../data/pkmDataset'
import typematch from '../../data/typeMatchup'
import moveset from '../../data/moves'
import heatColor from '../../data/heatColor'

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
    const tc = {
      Normal: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Fire: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Water: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Electric: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Grass: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Ice: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Fighting: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Poison: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Ground: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Flying: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Psychic: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Bug: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Rock: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Ghost: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Dragon: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Dark: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Steel: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      Fairy: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    }

    this.setState({
      pkmRoster: {
        first: null,
        second: null,
        third: null,
        fourth: null,
        fifth: null,
        sixth: null,
      },
      typeCheck: tc,
      data: this.buildDataFromMatrix(tc)
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

  handlePkmUpdate = (move, pkm, string) => {
    const roster = {
      ...this.state.pkmRoster,
      [string]: pkm
    }

    console.log(move)

    const updatedMatrix = this.makeUpdatedMatrix(move)
    const updatedData = this.buildDataFromMatrix(updatedMatrix)

    this.setState({
      pkmRoster: roster,
      typeCheck: updatedMatrix,
      data: updatedData
    })
  }

  makeUpdatedMatrix = (move) => {
    const updatedType = this.state.typeCheck[move.Type].map((val, index) =>
      val + this.state.typematch[move.Type][index]
    )

    return ({
      ...this.state.typeCheck,
      [move.Type]: updatedType
    })
  }

  buildDataFromMatrix = (matrix) => {
    const data = Object.keys(matrix).map(key => ({
        "move_type": key,
        "Normal": matrix[key][0],
        "NormalColor": heatColor(matrix[key][0]),
        "Fire": matrix[key][1],
        "FireColor": heatColor(matrix[key][1]),
        "Water": matrix[key][2],
        "WaterColor": heatColor(matrix[key][2]),
        "Electric": matrix[key][3],
        "ElectricColor": heatColor(matrix[key][3]),
        "Grass": matrix[key][4],
        "GrassColor": heatColor(matrix[key][4]),
        "Ice": matrix[key][5],
        "IceColor": heatColor(matrix[key][5]),
        "Fighting": matrix[key][6],
        "FightingColor": heatColor(matrix[key][6]),
        "Poison": matrix[key][7],
        "PoisonColor": heatColor(matrix[key][7]),
        "Ground": matrix[key][8],
        "GroundColor": heatColor(matrix[key][8]),
        "Flying": matrix[key][9],
        "FlyingColor": heatColor(matrix[key][9]),
        "Psychic": matrix[key][10],
        "PsychicColor": heatColor(matrix[key][10]),
        "Bug": matrix[key][11],
        "BugColor": heatColor(matrix[key][11]),
        "Rock": matrix[key][12],
        "RockColor": heatColor(matrix[key][12]),
        "Ghost": matrix[key][13],
        "GhostColor": heatColor(matrix[key][13]),
        "Dragon": matrix[key][14],
        "DragonColor": heatColor(matrix[key][14]),
        "Dark": matrix[key][15],
        "DarkColor": heatColor(matrix[key][15]),
        "Steel": matrix[key][16],
        "SteelColor": heatColor(matrix[key][16]),
        "Fairy": matrix[key][17],
        "FairyColor": heatColor(matrix[key][17])
      })
    )

    return data
  }

  render() {
    return (
      <div className="TypematchMatrix">
        <h2> Moveset Type Check Matrix</h2>
        <Matrix
          data={this.state.data}
        />
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
          updateFirstPkm={(move, pkm) => this.handlePkmUpdate(move, pkm, 'first')}
          updateSecondPkm={(move, pkm) => this.handlePkmUpdate(move, pkm, 'second')}
          updateThirdPkm={(move, pkm) => this.handlePkmUpdate(move, pkm, 'third')}
          updateFourthPkm={(move, pkm) => this.handlePkmUpdate(move, pkm, 'fourth')}
          updateFifthPkm={(move, pkm) => this.handlePkmUpdate(move, pkm, 'fifth')}
          updateSixthPkm={(move, pkm) => this.handlePkmUpdate(move, pkm, 'sixth')}
        />
      </div>
    )
  }
}

export default TypematchMatrix
