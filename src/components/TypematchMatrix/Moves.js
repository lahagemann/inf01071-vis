import React, { Component } from 'react'
import { MenuItem, SelectField } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Moves extends Component {
  getMove(move) {
    return this.props.moveset.find(x => x.Name === move)
  }

  handleMove1Change = (event, index, value) => {
    const pkmInfo = {
      ...this.props.pokemonInfo,
      move1: this.getMove(value)
    }
    this.props.updatePkmAction(this.getMove(value), pkmInfo)
  }

  handleMove2Change = (event, index, value) => {
    const pkmInfo = {
      ...this.props.pokemonInfo,
      move2: this.getMove(value)
    }
    this.props.updatePkmAction(this.getMove(value), pkmInfo)
  }

  handleMove3Change = (event, index, value) => {
    const pkmInfo = {
      ...this.props.pokemonInfo,
      move3: this.getMove(value)
    }
    this.props.updatePkmAction(this.getMove(value), pkmInfo)
  }

  handleMove4Change = (event, index, value) => {
    const pkmInfo = {
      ...this.props.pokemonInfo,
      move4: this.getMove(value)
    }
    this.props.updatePkmAction(this.getMove(value), pkmInfo)
  }

  render() {
    const { pokemonInfo } = this.props

    return (
      <div>
        <h4>Moves</h4>
        <div>
          <MuiThemeProvider>
            <SelectField
              value={pokemonInfo.move1 ? pokemonInfo.move1.Name : null}
              onChange={this.handleMove1Change}
              style={{width: 110}}
              autoWidth={true}
            >
            {pokemonInfo.moves.map(move => (
              <MenuItem value={move} label={move} primaryText={move} />
            ))}
            </SelectField>
          </MuiThemeProvider>
        </div>
        <div>
          <MuiThemeProvider>
            <SelectField
              value={pokemonInfo.move2 ? pokemonInfo.move2.Name : null}
              onChange={this.handleMove2Change}
              style={{width: 110}}
              autoWidth={true}
            >
            {pokemonInfo.moves.map(move => (
              <MenuItem value={move} label={move} primaryText={move} />
            ))}
            </SelectField>
          </MuiThemeProvider>
        </div>
        <div>
          <MuiThemeProvider>
            <SelectField
              value={pokemonInfo.move3 ? pokemonInfo.move3.Name : null}
              onChange={this.handleMove3Change}
              style={{width: 110}}
              autoWidth={true}
            >
            {pokemonInfo.moves.map(move => (
              <MenuItem value={move} label={move} primaryText={move} />
            ))}
            </SelectField>
          </MuiThemeProvider>
        </div>
        <div>
          <MuiThemeProvider>
            <SelectField
              value={pokemonInfo.move4 ? pokemonInfo.move4.Name : null}
              onChange={this.handleMove4Change}
              style={{width: 110}}
              autoWidth={true}
            >
            {pokemonInfo.moves.map(move => (
              <MenuItem value={move} label={move} primaryText={move} />
            ))}
            </SelectField>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

export default Moves
