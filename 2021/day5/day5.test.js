import { getStraightLines, getLines, diagonals } from './day5';
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
  it('filter horizontal and vertical',() => {
    const winningBoard = getStraightLines(testReport)

    expect(winningBoard.length).toEqual(6)
  })

  it('generate counts of straight line intersections',() => {
    const straightLines = getStraightLines(testReport)

    const counts = diagonals(straightLines)

    expect(counts).toEqual(5)
  })

  it('calculates counts of straight line intersections from file', () => {
    const file = fs.readFileSync("day5/day5.txt", 'utf-8')
    const lines = file.split("\n")

    const straightLines = getStraightLines(lines)

    const counts = diagonals(straightLines)

    expect(counts).toEqual(5280)

  })

  it('generate counts of intersections',() => {
    const straightLines = getLines(testReport)

    const counts = diagonals(straightLines)

    expect(counts).toEqual(12)

  })
  it('generate counts of intersections from file ',() => {
    const file = fs.readFileSync("day5/day5.txt", 'utf-8')
    const list = file.split("\n")
    const lines = getLines(list)

    const counts = diagonals(lines)

    expect(counts).toEqual(16716)
  })
})
