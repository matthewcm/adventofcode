import { getStraightLines, generateBoard, pointsOfIntersection, intersectionCounts, getLines } from './day5';
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
  it('calculates point of intersection',() => {
    const intersections = pointsOfIntersection(
     [[0,9],[5,9]],
     [[0,9],[2,9]]
    )


    console.log('intersections:', intersections)
    expect(intersections).toEqual([
      '0,9', '1,9', '2,9'
    ])
  })
  it('generate counts of intersections',() => {
    const straightLines = getStraightLines(testReport)

    const counts = intersectionCounts(straightLines)
    console.log('counts:', counts)

    expect(counts).toEqual(5)
  })

  it('calculates overlapping lines from file', () => {
    const file = fs.readFileSync("day5/day5.txt", 'utf-8')
    const lines = file.split("\n")

    const straightLines = getStraightLines(lines)

    const counts = intersectionCounts(straightLines)

    expect(counts).toEqual(5280)

  })

  it.only('generate counts of intersections from diagonals ',() => {
    const straightLines = getLines(testReport)

    const counts = intersectionCounts(straightLines)
    console.log('counts:', counts)

    expect(counts).toEqual(5)
  })

  it.skip('calculates losing board ', () => {
    const winningBoard = loseBingo(testReport)
    expect(winningBoard).toEqual(1924)
  })

  it.skip('calculates losing board from file', () => {
    const file = fs.readFileSync("day4/day4.txt", 'utf-8')
    const game = file.split("\n")

    const winningBoard = loseBingo(game)

    expect(winningBoard).toEqual(2730)
  })
})
