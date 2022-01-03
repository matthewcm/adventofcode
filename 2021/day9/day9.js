const UNIQUE_SIZES = {
  2: 1,
  4: 4,
  3: 7,
  7: 8
}

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

  // for (let i= Math.max(0, y -1); i < Math.min(y +2, grid.length); i++){


  //   for (let j= Math.max(0, x -1); j < Math.min(x +2, grid[0].length); j++){
  //     // console.log(j, 'j', '  i', i)
  //     if (j !== y & j !== x) neighbors.push(grid[i][j])
  //   }
  // }

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

const sumOfCell = (cell, neighbors) => {

  const isLowest = isLowestPoint(cell, neighbors)

  // console.log(neighbors)

  // console.log(lowest)
  //

    if (isLowest){
      console.log(cell)
      console.log(neighbors)
    }

  return isLowest ? cell + 1: 0
}

const isLowestPoint = (cell, neighbors) => {

  const [lowest] = neighbors.sort((a,b) => a - b)

  // console.log(neighbors)

  // console.log(lowest)
  //

    if (cell < lowest){
      return true
    }
  return false
}

export const  getSumOfGrid = (grid)=> {
  console.log(grid)

  const nei = grid.map((row,i)=>
    row.map((cell, j)=> {
      const neighbors = getNeighbors([j,i], grid)
      return  sumOfCell(cell, neighbors)
    })
    .reduce((p,v) => p+v)
  )
  .reduce((p,v) => p+v)
  console.log(nei)
  return nei

}
export const  getBasins= (grid)=> {
  console.log(grid)

  const basinLowPoints = grid.map((row,i)=>
    row.map((cell, j)=> {
      const neighbors = getNeighbors([j,i], grid)
      return isLowestPoint( cell,neighbors) ? [j,i] : ''
    }).filter(a => a)
  ).filter(a => a)
  .flat(1)
  console.log(basinLowPoints)


  // return 1 + [...getBasinSet(basinLowPoints[1], grid)].length
  const [first,second,third]= basinLowPoints.map(basinLowPoint=> {
    const basinSet = getBasinSet(basinLowPoint, grid)
  const basinSize = [...basinSet ].length
    return basinSize
  }).sort((a,b) => b-a)

  return first * second * third

}
const getBasinSet = ([x,y], grid) => {
  // console.log(x,y)
    const cell = grid[y][x];
  // console.log('cell:' ,cell)

  const basinSet = new Set()
  if (cell === 9){
    return basinSet
  }

  basinSet.add([x,y].toString())
    const neighbors = getNeighbors2([x,y], grid)
  // console.log(neighbors)

  const size = Object.keys(neighbors)
    .filter(pos=> neighbors[pos] === (cell + 1))
    .map(pos => {
      // console.log(pos)
      return  getBasinSet(pos.split(',').map(c => parseInt(c)), grid )
    })
  .map(set => set.forEach(pos => basinSet.add(pos)))


  // console.log(basinSet)

  return basinSet
  return size.reduce((p,v) => p+v, 0)


}
      // const neighbors = getNeighbors(basinLowPoint, grid)


