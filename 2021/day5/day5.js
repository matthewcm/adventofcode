export const getLines = input => {
  return input
    .filter(a=>a)
    .map(line => line
      .split('->')
      .map(coord => coord
        .trim()
        .split(',')
        .map(digit => parseInt(digit))
      )
    )
}

export const getStraightLines = (inputs) => {
  const straightLines = getLines(inputs)
    .filter(([[ax,ay], [bx, by]]) => {
      if (ax === bx ||  ay === by) return true
      return false
    })

  return straightLines
}

export const diagonals = (
  input
) => {

  const counts = {}

  const countPoints =(points ) => {
    points.forEach(point => {
      if (!counts[point]) counts[point] = 1
      else counts[point] ++
    })
  }

  input.forEach(line => {
    const points = generatePointsOnLine(line)
    countPoints(points)
  })

  return Object.values(counts)
    .filter(a => a > 1)
    .length
}

export const generatePointsOnLine = (
  [
    [ax, ay],
    [bx, by]
  ]
) => {
  const points = []

  if (ay-by === 0){
    // Horizontal
    const y = ay
    for (let x = Math.min(ax,bx); x <= Math.max(ax,bx); x++){
      points.push([x,y].toString())
    }

  }else if (ax-bx === 0){
    // Vertical
    const x = ax
    for (let y = Math.min(ay,by); y <= Math.max(ay,by); y++){
      points.push([x,y].toString())
    }

  }else {
    // Diagonal
    const m = (by - ay) / (bx - ax)
    const c = (m *- (ax)) + ay

    const calcY = (x) => (m * x) + c

    for (let x = Math.min(ax,bx); x <= Math.max(ax,bx); x++){
      points.push([x, calcY(x)].toString())
    }
  }

  return points
}
