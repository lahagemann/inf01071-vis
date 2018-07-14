import React, { Component } from 'react'
import Pokemon from 'pokemon-images'
import plus_wikipedia from '../../data/resources/plus_wikipedia.png'
import './index.css'

class Pkm extends Component {
  render() {
    const { pokemonInfo } = this.props

    return (
      pokemonInfo ? (
        <div className="PokemonRoster__pokemon">
          <img
            src={Pokemon.getSprite(pokemonInfo.Name.toLowerCase())}
          />
          <div>
            <div>move 1</div>
            <div>move 2</div>
            <div>move 3</div>
            <div>move 4</div>
          </div>
        </div>) : (
        <div className="PokemonRoster__choose">
          <img
            src={plus_wikipedia}
          />
        </div>
        )
    )
  }
}

export default Pkm
