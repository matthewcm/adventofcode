export const readInput = input => {
  return input
    .split(',')
    .map(age => parseInt(age))
}
export const nextDay = (ages) => {
  const newAges = []

  const newBorn = () => {
    newAges.push(8)
    return 6
  }

  return ages.map(age => {
    switch(age) {
      case 0: return newBorn()
      default: return age - 1
    }
  }).concat(newAges)

}

export const nextNDays = (ages, n) => {

  if (n  === 1) return nextDay(ages)

  return nextDay(nextNDays(ages, n-1))
}
