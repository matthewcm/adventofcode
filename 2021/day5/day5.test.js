import {winBingo, loseBingo} from './day5';
import fs from "fs"

const testReport = [
  '0,9 -> 5,9',
  '8,0 -> 0,8',
  '9,4 -> 3,4',
  '2,2 -> 2,1',
  '7,0 -> 7,4',
  '6,4 -> 2,0',
  '0,9 -> 2,9',
  '3,4 -> 1,4',
  '0,0 -> 8,8',
  '5,5 -> 8,2'
]

describe('Hydrothermal venture', () => {
  it.only('generate board',() => {
    const winningBoard = generateBoard(testReport)

    expect(winningBoard.length).toEqual(9)
  })
  it('calculates overlapping lines',() => {
    const winningBoard = (testReport)

    expect(winningBoard).toEqual(4512)
  })

  it('calculates winning board from file', () => {
    const file = fs.readFileSync("day4/day4.txt", 'utf-8')
    const game = file.split("\n")

    const winningBoard = winBingo(game)

    expect(winningBoard).toEqual(25410)
  })

  it('calculates losing board ', () => {
    const winningBoard = loseBingo(testReport)
    expect(winningBoard).toEqual(1924)
  })

  it('calculates losing board from file', () => {
    const file = fs.readFileSync("day4/day4.txt", 'utf-8')
    const game = file.split("\n")

    const winningBoard = loseBingo(game)

    expect(winningBoard).toEqual(2730)
  })
})
