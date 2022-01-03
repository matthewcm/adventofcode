export const readInput = input => {
  return input
    .filter(a => a)
    .map(entry => entry
      .split('')
      .filter(a => a)
      .map( digit => parseInt(digit))
    )
}

export const getNeighbors = ([x,y], grid) =>{
  const neighbors = []

  if (x > 0){
    const left = grid[y][x-1]
    neighbors.push(left)
  }

  if (x < grid[0].length -1 ){
    const right = grid[y][x+1]
    neighbors.push(right)
  }

  if ( y > 0 ){
    const up = grid[y-1][x]
    neighbors.push(up)
  }

  if (y < grid.length -1){
    const down = grid[y+1][x]
    neighbors.push(down)
  }

  return neighbors
}

export const getNeighbors2 = ([x,y], grid) =>{
  const neighbors = {}

  if (x > 0){
    const left = grid[y][x-1]
    neighbors[[x-1,y].toString()] = (left)
  }
  if (x < grid[0].length -1 ){
    const right = grid[y][x+1]
    neighbors[[x+ 1, y].toString()] =right
  }

  if ( y > 0 ){
    const up = grid[y-1][x]
    neighbors[[x, y-1].toString()]= (up)
  }

  if (y < grid.length -1){
    const down = grid[y+1][x]
    neighbors[[x, y+1].toString()]=(down)
  }

  return neighbors
}

const sumOfCell = (cell, neighbors) => (
  isLowestPoint(cell, neighbors) ? cell + 1: 0
)

const isLowestPoint = (cell, neighbors) => {

  const [lowest] = neighbors.sort((a,b) => a - b)

  return (cell < lowest)
}

export const  getSumOfGrid = (grid)=> {

  return grid.map((row,i)=>
    row.map((cell, j)=> {
      const neighbors = getNeighbors([j,i], grid)
      return  sumOfCell(cell, neighbors)
    })
    .reduce((p,v) => p+v)
  )
    .reduce((p,v) => p+v)
}
export const  getBasins= (grid)=> {
  const basinLowPoints = grid.map((row,i)=>
    row.map((cell, j)=> {
      const neighbors = getNeighbors([j,i], grid)
      return isLowestPoint( cell,neighbors) ? [j,i] : ''
    }).filter(a => a)
  ).filter(a => a)
    .flat(1)


  const memoSet = {}

  const [first,second,third]= basinLowPoints.map(basinLowPoint=> {
    const basinSet = getBasinSet(basinLowPoint, grid, memoSet)
    const basinSize = [...basinSet ].length
    return basinSize
  }).sort((a,b) => b-a)

  return first * second * third

}

const getBasinSet = ([x,y], grid, memoSet) => {
  const cell = grid[y][x];

  const memoed = memoSet[[x,y].toString()]

  if (memoed){
    return memoed
  }

  const basinSet = new Set()
  if (cell === 9){
    return basinSet
  }

  basinSet.add([x,y].toString())
  const neighbors = getNeighbors2([x,y], grid)

  Object.keys(neighbors)
    .filter(pos=> neighbors[pos] > cell)
    .map(pos => {
      return getBasinSet(pos.split(',').map(c => parseInt(c)), grid, memoSet )
    })
    .map(set => set.forEach(pos => basinSet.add(pos)))

  if (basinSet.size > 1){
    memoSet[[x,y].toString()]  = basinSet
  }

  return basinSet

}

