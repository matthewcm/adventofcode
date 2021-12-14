
class Board {
  grid = []
  marks = new Set()
  markedCounts = {}

  constructor(grid) {
    this.grid = grid
  }

  rows =  () => {
    const cols = this.grid[0].map((_,i) => this.grid.map(x => x[i]))
    return this.grid.concat(cols)
  }

  isBingo = () => {
    const win = Object.values(this.markedCounts)
      .some(mark => mark === 5)
    if (win){
      return true
    }
    return false
  }

  turn = (roll) => {
    this.rows()
      .forEach ((row, index) => {
        if(row.includes(roll)){
          this.marks.add(parseInt(roll))
          this.addToMarkedCounts(index)
        }
      })
  }

  addToMarkedCounts = (markedRow) => {
    if (!this.markedCounts[markedRow]){
      return this.markedCounts[markedRow] = 1
    }
    this.markedCounts[markedRow] += 1
  }

  score = () => {
    const totalScore = this.grid
      .map( (row) => row.reduce((p, v) =>
        parseInt(p) + parseInt(v))
      ).reduce((p,v) => p + v)

    const markScore = [...this.marks]
      .reduce( (p, v)=> p + v )

    return totalScore - markScore

  }

}

const generateBoards = (lines) => {
  let boardArray = []
  const boards = []
  lines.forEach(line => {
    if (line === ''){
      boards.push( new Board(boardArray))
      return boardArray = []
    }
    boardArray.push(line.trim().split(' ').filter(a=>a))
  })

  return boards

}

const winningBoard = (rolls, boards) => {
  for (let turn in rolls){
    const roll = rolls[turn]

    boards.forEach(
      board => board.turn(roll)
    )

    const winningBoard = boards.filter(
      board => board.isBingo()
    )[0]
    if (winningBoard){
      return roll * winningBoard.score()
    }
  }
}

const losingBoard = (rolls, boards) => {
  let score = 0

  for (let turn in rolls){
    const roll = rolls[turn]

    boards.forEach(
      board => board.turn(roll)
    )
    boards = boards.filter(
      board => {
        const isBingo = board.isBingo()
        if (isBingo){
          score = roll * board.score()
        }
        return !isBingo
      }
    )

  }
  return score

}

const bingo = (game, mode) => {
  const [rollsLine, _, ...rest] = game

  const boards = generateBoards(rest)
  const rolls = rollsLine.trim().split(',')

  switch (mode){
    case 'win': return winningBoard(rolls, boards);break
    case 'lose': return losingBoard(rolls, boards);break
  }

}

export const loseBingo = (game) => {
  return bingo(game, 'lose')
}

export const winBingo = (game) => {
  return bingo(game, 'win')
}
