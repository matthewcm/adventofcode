export const generateBoard = (inputs) => {
  return [1,2,4,4,5,5,5,5,8]
}
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
export const intersectionCounts = (input) => {
  const counts = {}

  const countPoints =(points ) => {
    points.forEach(point => {
      if (!counts[point]) counts[point] = 1
      else counts[point] ++
    })
  }

  input.forEach(line => {
    input.forEach(otherLine => {
      if (line !== otherLine){

        if (isStraightLines(line, otherLine)){
          const points = pointsOfIntersection(line, otherLine)
          countPoints(points)
        }else{
          const points = pointsOfIntersectionDiagonals(line, otherLine)
          countPoints(points)
        }
      }
    })
  })
  console.log('counts:', counts)

  return Object.keys(counts).length
}

const isStraightLines = (
  [
    [ax, ay],
    [bx, by]
  ],
  [
    [cx, cy],
    [dx, dy]
  ]
) => {
  if ((ax === bx ||  ay === by) && (cx === dx ||  cy === dy)){
    return true
  }
  return false
}
export const pointsOfIntersectionDiagonals = (
  [
    [ax, ay],
    [bx, by]
  ],
  [
    [cx, cy],
    [dx, dy]
  ]
) => {
  const intercepts = new Set()

  // One of these could still be a straight line tho
  const l1Gradient = (by - ay) / (bx - ax)
  const l1Intercept = (l1Gradient *- (ax)) + ay

  // console.log(`${l1Gradient}x + ${l1Intercept}`  )

  const calcY = (x, m, c) => (m * x) + c

  const l2Gradient = (dy - cy) / (dx - cx)
  const l2Intercept = (l2Gradient *- (cx)) + cy

  const l1Y = (l1Gradient * l1X) + l1Intercept
  const l2Y = (l2Gradient * l2X) + l2Intercept



  return intercepts

}

export const generatePointsOnLine = (
  [
    [ax, ay],
    [bx, by]
  ],

) => {
  const points = []
  if (ay-by === 0){
    // Horizontal
    y = ay
    for (let x = Math.min(ax,bx); x < Math.max(ax,bx); x++){
      points.push([x,y].toString)
    }
  }else if (ax-bx === 0){
    // Vertical
    x = ax
    for (let y = Math.min(ay,by); y < Math.max(ay,by); y++){
      points.push([x,y].toString)
    }
  }else {
    // Diagonal


  }
  const l1Gradient = (by - ay) / (bx - ax)
  const l1Intercept = (l1Gradient *- (ax)) + ay

  const calcY = (x, m, c) => (m * x) + c
}

export const pointsOfIntersection = (
  [
    [ax, ay],
    [bx, by]
  ],
  [
    [cx, cy],
    [dx, dy]
  ]
) => {
  const intercepts = new Set()

  const  xRanges =  [
    [Math.min(ax,bx), Math.max(ax,bx)],
    [Math.min(cx,dx), Math.max(cx,dx)]
  ].sort(([a,b], [c,d]) =>  (b-a) - (d-c))
  .map(point => [... new Set(point)])

  const  [[xMin, xMax ]] = xRanges

  const yRanges = [
      [Math.min(ay,by), Math.max(ay,by)],
      [Math.min(cy,dy), Math.max(cy,dy)]
  ].sort(([a,b], [c,d]) =>  (b-a) - (d-c))
  .map(point => [... new Set(point)])

  const  [[yMin, yMax ]] = yRanges


  const withinLine = (min, max, ranges) => {

    const whatsOn = []
    for (let i = min; i <= max; i++ ){
      if (ranges[1][0] <= i && i <= ranges[1][1] ) {

         whatsOn.push(i)
      }
    }
    return whatsOn
  }

  if ((xRanges[0][1] && yRanges[0][1]) || (xRanges[1][1] && yRanges[1][1])) {
    // perpendicular lines



    if ( xRanges[1][0] <= xMin && xMin <= xRanges[1][1]){
      if ( yRanges[1][0] <= yMin && yMin <= yRanges[1][1]){
        intercepts.add([xMin, yMin].toString())
      }
    }

    // vertical line and horizontal line
    // intercepts.add([xMin, yMin].toString())
    return intercepts
  }
  else if (xRanges[0][1] && xRanges[1][1]) {
    // horizontal lines
    // y = C
    if (yRanges[0][0] !== yRanges[1][0]) {
       return intercepts
    }

    const y = yMin
    withinLine(xMin, xMax, xRanges).forEach(x => intercepts.add([x,y].toString()))
  }
  else if (yRanges[0][1] && yRanges[1][1]) {
    // vertical lines
    // x = C
    if (xRanges[0][0] !== xRanges[1][0]) {
       return intercepts
    }

    const x = xMin
    withinLine(yMin, yMax, yRanges).forEach(y => intercepts.add([x,y].toString()))
  }
  // console.log('ax,ay,bx,by,cx,cy,dx,dy:', ax,ay,bx,by,cx,cy,dx,dy)
  // console.log('xMin, xMax:', xMin, xMax)
  // console.log('yMin, yMax:', yMin, yMax)

  // const l1Gradient = (by - ay) / (bx - ax)
  // const l1Intercept = (l1Gradient *- (ax)) + ay

  // // console.log(`${l1Gradient}x + ${l1Intercept}`  )

  // const l2Gradient = (dy - cy) / (dx - cx)
  // const l2Intercept = (l2Gradient *- (cx)) + cy

  // // console.log(`${l2Gradient}x + ${l2Intercept}`  )


  // for (let x = xMin; x <= xMax; x++ ){
  //   const l1Y = findY(x, l1Gradient, l1Intercept, ax, bx, ay, by)
  //   const l2Y = findY(x, l2Gradient, l2Intercept, cx, dx, cy , dy)
  //   if(ax === 7 && cx === 9) {
  //     console.log('l1Y:', l1Y)
  //     console.log('l2Y:', l2Y)
  //   }

  //   if (valid(l1Y ,l2Y)){
  //     if (yMin <= l2Y && l2Y <= yMax) intercepts.add([x, l1Y ].toString())
  //   }
  // }
  // for (let y = yMin; y <= yMax; y++ ){
  //   const l1X = findX(y, l1Gradient, l1Intercept, ax, bx, ay, dy)
  //   const l2X = findX(y, l2Gradient, l2Intercept, cx, bx, cy, dy)
  //   if(ax === 7 && cx === 9) {
  //     console.log('l1X:', l1X)
  //     console.log('l2X:', l2X)
  //   }

  //   if (valid(l1X, l2X)){
  //     if (xMin <= l2X && l2X <= xMax) intercepts.add([l1X, y].toString())

  //   }
  // }


  return [...intercepts]
}



const valid = (a, b) => {
  if (a === true || b === true) return true
  return a === b
}

const findY = (x, gradient, intercept, a, b, c, d) => {
  if (a - b === 0) return true
  if (c - d === 0) return c
  return gradient * x + intercept
}
const findX = (y, gradient, intercept, a, b, c, d) => {
  if (a - b === 0) return a
  if (c - d === 0) return true
  return (y - intercept) / gradient
}


const findAllY = (ax,bx,cx,dx) => {
  return [ [xMin, xMax ]] = [
      [Math.min(ax,bx), Math.max(ax,bx)],
      [Math.min(cx,dx), Math.max(cx,dx)]
  ].sort(([a,b], [c,d]) =>  (b-a) - (d-c))

}
