import React, { Component } from 'react'

import Pkm from './Pkm'
import './index.css'

class PokemonRoster extends Component {
  render() {
    const { roster, chooseAction } = this.props

    return (
      <div className="PokemonRoster">
        <Pkm
          pokemonInfo={roster.first}
          chooseAction={chooseAction}
        />
        <Pkm
          pokemonInfo={roster.second}
          chooseAction={chooseAction}
        />
        <Pkm
          pokemonInfo={roster.third}
          chooseAction={chooseAction}
        />
        <Pkm
          pokemonInfo={roster.fourth}
          chooseAction={chooseAction}
        />
        <Pkm
          pokemonInfo={roster.fifth}
          chooseAction={chooseAction}
        />
        <Pkm
          pokemonInfo={roster.sixth}
          chooseAction={chooseAction}
        />
      </div>
    )
  }

}

export default PokemonRoster
