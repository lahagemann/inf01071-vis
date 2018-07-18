import React, { Component } from 'react'
import { MenuItem, SelectField } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import '../App.css'


class Sidebar extends Component {

  handleChange = (event, index, value) => {
    this.props.handleChangeVis(value)
  }

  render() {
    const { vis } = this.props
    return (
      <div className="Sidebar">
        <h3>Choose a Visualization</h3>
        <MuiThemeProvider>
          <SelectField
            value={vis}
            onChange={this.handleChange}
            style={{width: 200, fontSize: 14}}
            autoWidth={true}
          >
            <MenuItem value="TierPlot" primaryText="Plot Tiers" />
            <MenuItem value="TypematchMatrix" primaryText="Moveset Type Check" />
          </SelectField>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Sidebar
