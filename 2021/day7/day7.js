export const readInput = input => {
  return input
    .split(',')
    .map(age => parseInt(age))
  .sort((a,b) => a - b)
}


export const linearFuelCost = (positions, alignment) => (
  positions
  .map(p => Math.abs(p - alignment))
  .reduce((p,v) => p + v)
)

const seriesSum = n => (
  (n * (n + 1) / 2)
)

export const seriesFuelCost = ( positions, alignment) => (
  positions
  .map(p => seriesSum(Math.abs(p - alignment)))
  .reduce((p,v) => p + v)
)


export const lowestFuelCost = (positions, costFunction = linearFuelCost ) => {

  const mean = Math.round(linearFuelCost(positions, 0) / positions.length)

  const leftPosition = positions[0]
  const rightPosition = positions[positions.length - 1]

  const isLower =  rightPosition > 2 * (mean)

  const start = isLower ? leftPosition : mean
  const finish = isLower ? mean : rightPosition

  let smallest = costFunction(positions , start)

  for (let i = start +1; i <= finish; i++){
    const c = costFunction(positions, i)
    if (c < smallest) smallest = c
  }

  return smallest
}
