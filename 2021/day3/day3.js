
const mostPop = (col, numbers) => {
    const count = numbers
      .map(x => x[col])
      .reduce((p, v) => p + v)
  return count >= (numbers.length / 2) ? 1:0
}
export const consumption = (report) =>  {
  const numbers = report.map(
    line => line
    .split('')
    .map(a => parseInt(a))
  ).filter(a=> a.length)
  console.log('numbers.length:', numbers.length)


  const gamma = numbers[0].map((_,i) => {


    return mostPop(i, numbers)

  })

  console.log('gamma:', gamma)

  const epsilon = gamma.map(a => a === 0 ? 1 : 0)

  console.log('epsilon:', epsilon)
  const gammaRate = parseInt(gamma.join(''), 2)
  const epsilonRate = parseInt(epsilon.join(''), 2)

  return gammaRate * epsilonRate
}
export const lifeSupport = (report) =>  {
  const numbers = report.map(
    line => line
    .split('')
    .map(a => parseInt(a))
  ).filter(a=> a.length)


  let oxygenFilter = [...numbers]
  let co2Filter = [...numbers]
  numbers[0].forEach((_,i) => {

    const oxygenPop= mostPop(i, oxygenFilter)
    const co2Pop = mostPop(i, co2Filter)

    if (oxygenFilter.length > 1){

    oxygenFilter = oxygenFilter
    .filter(x => x[i] === oxygenPop)
    }
    if (co2Filter.length > 1){
    co2Filter=co2Filter
    .filter(x => x[i] !== co2Pop)

    }

  })

  const oxygenRate = parseInt(oxygenFilter[0].join(''), 2)
  const co2Rate = parseInt(co2Filter[0].join(''), 2)

  return oxygenRate * co2Rate
}
