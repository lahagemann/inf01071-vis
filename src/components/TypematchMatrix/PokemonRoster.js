import React, { Component } from 'react'

import Pkm from './Pkm'
import './index.css'

class PokemonRoster extends Component {
  render() {
    const { roster, dataset, moveset } = this.props
    const { chooseFirstPkm, chooseSecondPkm, chooseThirdPkm, chooseFourthPkm, chooseFifthPkm, chooseSixthPkm } = this.props
    const { updateFirstPkm, updateSecondPkm, updateThirdPkm, updateFourthPkm, updateFifthPkm, updateSixthPkm } = this.props

    return (
      <div className="PokemonRoster">
        <Pkm
          dataset={dataset}
          moveset={moveset}
          pokemonInfo={roster.first}
          choosePkmAction={chooseFirstPkm}
          updatePkmAction={updateFirstPkm}
        />
        <Pkm
          dataset={dataset}
          moveset={moveset}
          pokemonInfo={roster.second}
          choosePkmAction={chooseSecondPkm}
          updatePkmAction={updateSecondPkm}
        />
        <Pkm
          dataset={dataset}
          moveset={moveset}
          pokemonInfo={roster.third}
          choosePkmAction={chooseThirdPkm}
          updatePkmAction={updateThirdPkm}
        />
        <Pkm
          dataset={dataset}
          moveset={moveset}
          pokemonInfo={roster.fourth}
          choosePkmAction={chooseFourthPkm}
          updatePkmAction={updateFourthPkm}
        />
        <Pkm
          dataset={dataset}
          moveset={moveset}
          pokemonInfo={roster.fifth}
          choosePkmAction={chooseFifthPkm}
          updatePkmAction={updateFifthPkm}
        />
        <Pkm
          dataset={dataset}
          moveset={moveset}
          pokemonInfo={roster.sixth}
          choosePkmAction={chooseSixthPkm}
          updatePkmAction={updateSixthPkm}
        />
      </div>
    )
  }

}

export default PokemonRoster
