const heatColor = (value) => {
  if(value < 2) {
    return "hsl(53, 70%, 50%)"
  }
  else if(value <= 5) {
    return "hsl(295, 70%, 50%)"
  }
  else if(value <= 10) {
    return "hsl(150, 70%, 50%)"
  }
  else {
    return "hsl(262, 70%, 50%)"
  }
}

export default heatColor
