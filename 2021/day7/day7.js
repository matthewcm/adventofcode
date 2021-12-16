export const readInput = input => {
  return input
    .split(',')
    .map(age => parseInt(age))
  .sort((a,b) => a - b)
}


export const cost = (positions, alignment) => {
  return positions.map(p => Math.abs(p - alignment))
  .reduce((p,v) => p + v)
}
export const lowestCost= (positions) => {
  const mean = Math.round(cost(positions, 0) / positions.length)

  const lower = positions[positions.length - 1] > 2 * (mean)

  console.log(mean)
  console.log(lower)
  const start = lower ? 0: mean
  const finish = lower ? mean : positions[positions.length -1]

    let smallest = cost(positions , start)
  for (let i = start +1; i < finish; i++){
    const c = cost(positions, i)

    if (c < smallest) smallest = c
  }

  return smallest

}
