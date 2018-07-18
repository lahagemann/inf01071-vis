import React, { Component } from 'react'
import { ScatterPlot } from '@nivo/scatterplot'
import { MenuItem, SelectField } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import dataset from '../../data/pkmDataset'
import tierRelation from '../../data/tierRelation'

var Papa = require("papaparse/papaparse.min.js");

class TierPlot extends Component {
  state = {

  }

  componentWillMount() {
    this.initState()
  }

  initState = () => {
    const parsed = Papa.parse(dataset, { delimiter: ";", header: true, })

    this.setState({
      pkmDataset: parsed.data,
      xAxis: "Attack",
      yAxis: "Special Attack",
      tier: "Any",
      data: this.buildData(parsed.data, "Any", "Attack", "Special Attack")
    })
  }

  handleChangeX = (event, index, value) => {
    this.setState({
      xAxis: value,
      data: this.buildData(this.state.pkmDataset, this.state.tier, value, this.state.yAxis)
    })
  }

  handleChangeY = (event, index, value) => {
    this.setState({
      yAxis: value,
      data: this.buildData(this.state.pkmDataset, this.state.tier, this.state.xAxis, value)
    })
  }

  handleChangeTier = (event, index, value) => {
    this.setState({
      tier: value,
      data: this.buildData(this.state.pkmDataset, value, this.state.xAxis, this.state.yAxis)
    })
  }

  handleDotClick = (data) => {
    console.log(this.getPkm(data.id))
  }

  getPkm(name) {
    return this.state.pkmDataset.find(x => x.Name === name)
  }

  buildData = (pkmData, currentTier, currentX, currentY) => {
    const tiersToFilter = tierRelation[currentTier]

    const data = tiersToFilter.map(tier => {
      const datasetFilteredByTier = pkmData.filter(x => x.Tier === tier)

      const dataArray = datasetFilteredByTier.map((pkm, index) => ({
        id: pkm.Name,
        x: parseInt(pkm[currentX], 10),
        y: parseInt(pkm[currentY], 10),
      }))

      return ({
        id: tier,
        data: dataArray
      })
    })

    return data
  }

  render() {
    return (
      <div className="TierPlot">
        <h2> Tier Plot </h2>
        <ScatterPlot
          data={this.state.data}
          margin={{
            "top": 90,
            "right": 100,
            "bottom": 90,
            "left": 60
          }}
          colors="pastel1"
          symbolSize={12}
          axisBottom={{
              "orient": "bottom",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": `${this.state.xAxis}`,
              "legendPosition": "center",
              "legendOffset": 46
          }}
          axisLeft={{
              "orient": "left",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": `${this.state.yAxis}`,
              "legendPosition": "center",
              "legendOffset": -40
          }}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
              {
                  "anchor": "bottom-right",
                  "direction": "column",
                  "translateX": 130,
                  "itemWidth": 100,
                  "itemHeight": 12,
                  "itemsSpacing": 5,
                  "symbolSize": 12,
                  "symbolShape": "circle"
              }
          ]}
          onClick={data => this.handleDotClick(data)}
          width={700}
          height={700}
        />
        <MuiThemeProvider>
          <SelectField
            floatingLabelText="Select X Axis"
            floatingLabelFixed={true}
            value={this.state.xAxis}
            onChange={this.handleChangeX}
            style={{width: 190, fontSize: 13}}
            autoWidth={true}
          >
            <MenuItem value="HP" primaryText="HP" />
            <MenuItem value="Attack" primaryText="Attack" />
            <MenuItem value="Defense" primaryText="Defense" />
            <MenuItem value="Special Attack" primaryText="Special Attack" />
            <MenuItem value="Special Defense" primaryText="Special Defense" />
            <MenuItem value="Speed" primaryText="Speed" />
          </SelectField>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <SelectField
            floatingLabelText="Select Y Axis"
            floatingLabelFixed={true}
            value={this.state.yAxis}
            onChange={this.handleChangeY}
            style={{width: 190, fontSize: 13}}
            autoWidth={true}
          >
            <MenuItem value="HP" primaryText="HP" />
            <MenuItem value="Attack" primaryText="Attack" />
            <MenuItem value="Defense" primaryText="Defense" />
            <MenuItem value="Special Attack" primaryText="Special Attack" />
            <MenuItem value="Special Defense" primaryText="Special Defense" />
            <MenuItem value="Speed" primaryText="Speed" />
          </SelectField>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <SelectField
            floatingLabelText="Select Tier"
            floatingLabelFixed={true}
            value={this.state.tier}
            onChange={this.handleChangeTier}
            style={{width: 190, fontSize: 13}}
            autoWidth={true}
          >
            <MenuItem value="Any" primaryText="Any" />
            <MenuItem value="Uber" primaryText="Uber" />
            <MenuItem value="OU" primaryText="Over Used" />
            <MenuItem value="UU" primaryText="Under Used" />
            <MenuItem value="UUBL" primaryText="Under Used Borderline" />
            <MenuItem value="RU" primaryText="Rarely Used" />
            <MenuItem value="RUBL" primaryText="Rarely Used Borderline" />
            <MenuItem value="NU" primaryText="Never Used" />
            <MenuItem value="NUBL" primaryText="Never Used Borderline" />
            <MenuItem value="PU" primaryText="PU" />
            <MenuItem value="PUBL" primaryText="PU Borderline" />
            <MenuItem value="LC" primaryText="Little Cup" />
          </SelectField>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default TierPlot
