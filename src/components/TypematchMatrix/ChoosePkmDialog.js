import React, { Component } from 'react'

import { Dialog, RaisedButton, FlatButton, RadioButton, RadioButtonGroup } from 'material-ui'
import { List, ListItem } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class ChoosePkmDialog extends Component {
  componentWillMount() {
    const { dataset } = this.props
    const pkms = []

    dataset.map((pkm, index) => pkms.push(
      <RadioButton
        key={index}
        value={pkm.Name}
        label={pkm.Name}
      />
    ))

    this.setState({
      radios: pkms
    })
  }
  render() {
    const { handleClose, dialogOpen, dataset } = this.props

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={handleClose}
      />,
      <FlatButton
        label="Choose"
        primary={true}
        keyboardFocused={true}
        onClick={handleClose}
      />,
    ];

    return (
      <div>
      <MuiThemeProvider>
        <Dialog
          title="Choose a Pokémon"
          actions={actions}
          modal={false}
          open={dialogOpen}
          onRequestClose={handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup
            ref="chosenPkm"
            name="pokemon"
            defaultSelected="Abomasnow"
          >
            {this.state.radios}
          </RadioButtonGroup>
        </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ChoosePkmDialog
