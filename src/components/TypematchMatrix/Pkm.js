import React, { Component } from 'react'
import { MenuItem, SelectField } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Moves from './Moves'
import './index.css'

class Pkm extends Component {
  handleChange = (event, index, value) => this.props.choosePkmAction(value)

  render() {
    const { pokemonInfo, dataset, moveset } = this.props

    return (
      pokemonInfo ? (
        <div className="PokemonRoster__pokemon">
          <MuiThemeProvider>
            <SelectField
              value={pokemonInfo.pokemon}
              onChange={this.handleChange}
              style={{width: 135, fontSize: 13}}
              autoWidth={true}
            >
            {dataset.map(pkm => (
              <MenuItem key={pkm.Name} value={pkm} primaryText={pkm.Name} />
            ))}
            </SelectField>
          </MuiThemeProvider>
          <img
            src={require(`../../data/resources/pokemon/${pokemonInfo.pokemon.Name}.png`)}
            alt="Pokémon choosen by user"
          />
          <Moves
            moveset={moveset}
            pokemonInfo={pokemonInfo}
            updatePkmAction={this.props.updatePkmAction}
          />
        </div>) : (
        <div className="PokemonRoster__choose">
          <MuiThemeProvider>
            <SelectField
              value={null}
              onChange={this.handleChange}
              style={{width: 135, fontSize: 13}}
              autoWidth={true}
            >
            {dataset.map(pkm => (
              <MenuItem key={pkm.Name} value={pkm} primaryText={pkm.Name} />
            ))}

            </SelectField>
          </MuiThemeProvider>
          <img
            src={require('../../data/resources/pokemon/0.png')}
            alt="Choose a pokémon"
          />
        </div>
        )
    )
  }
}

export default Pkm
