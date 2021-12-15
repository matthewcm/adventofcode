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


  const count = {
    1:0,
    0:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0
  }
  Object.keys(count).forEach(b => {
    const k = parseInt(b)
    if (k === 8) return count[b] = ages[0] || 0
    if (k === 6) return count[b] = (ages[0]|| 0) + (ages[7] || 0)
    return count[k] = ages[k + 1] || 0
  })
  return count


}

export const nextNDays = (ages, n) => {

  if (n  === 1) return nextDay(ages)

  return nextDay(nextNDays(ages, n-1))
}
export const nextBigNDays = (ages, n) => {
  let counts = {}

  const countPoints =(points ) => {
    points.forEach(point => {
      if (!counts[point]) counts[point] = 1
      else counts[point] ++
    })
  }
  countPoints(ages)


  for (let d = 0; d < n; d++){
    counts =( nextDay(counts))
  }
    console.log('counts:', counts)

  console.log('Object.values(counts):',
    Object.values(counts)
  .reduce((p,v) => p +v)
  )
  return Object.values(counts)
  .reduce((p,v) => p +v)
}
