export const readInput = input => {
  return input
    .split(',')
    .map(age => parseInt(age))
    .sort((a,b) => a - b)
}
export const nextDay = (ages) => {

  const count = {
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0
  }

  Object.keys(count).forEach(key => {
    const age = parseInt(key)
    if (age === 8) return count[age] = ages[0] || 0
    if (age === 6) return count[age] = (ages[0]|| 0) + (ages[7] || 0)
    return count[age] = ages[age + 1] || 0
  })

  return count
}
export const howManyFish = counts => (
  Object
  .values(counts)
  .reduce((p,v) => p + v)
)

export const nextNDays = (ages, n) => {

  if (n  === 1) return nextDay(ages)

  return nextDay(nextNDays(ages, n-1))
}

export const getAgesObject = ageList => {

  let counts = {}

  ageList.forEach(point => {
    if (!counts[point]) counts[point] = 1
    else counts[point] ++
  })

  return counts
}

export const nextBigNDays = (ages, n) => {
  let counts = ages

  for (let d = 0; d < n; d++){
    counts = nextDay(counts)
  }

  return howManyFish(counts)
}
