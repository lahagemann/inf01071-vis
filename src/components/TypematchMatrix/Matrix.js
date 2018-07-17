import React, { Component } from 'react'
import { HeatMap } from '@nivo/heatmap'

import './index.css'

class Matrix extends Component {
  render() {
    return (
      <HeatMap
        data={this.props.data}
        keys={[
          "Normal",
          "Fire",
          "Water",
          "Electric",
          "Grass",
          "Ice",
          "Fighting",
          "Poison",
          "Ground",
          "Flying",
          "Psychic",
          "Bug",
          "Rock",
          "Ghost",
          "Dragon",
          "Dark",
          "Steel",
          "Fairy"
        ]}
        indexBy="move_type"
        margin={{
          "top": 80,
          "right": 50,
          "bottom": 20,
          "left": 80
        }}
        forceSquare={true}
        axisTop={{
          "orient": "top",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": -90,
          "legend": "type check",
          "legendPosition": "center",
          "legendOffset": -60
        }}
        axisLeft={{
          "orient": "left",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "move type",
          "legendPosition": "center",
          "legendOffset": -60
        }}
        cellOpacity={1}
        cellBorderColor="inherit:darker(0.4)"
        labelTextColor="inherit:darker(1.8)"
        defs={[
          {
              "id": "lines",
              "type": "patternLines",
              "background": "inherit",
              "color": "rgba(0, 0, 0, 0.1)",
              "rotation": -45,
              "lineWidth": 4,
              "spacing": 7
          }
        ]}
        fill={[
          {
              "id": "lines"
          }
        ]}
        motionStiffness={80}
        motionDamping={9}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
        width={600}
        height={600}
      />
    )
  }
}

export default Matrix
