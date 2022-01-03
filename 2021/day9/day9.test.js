import {readInput, getSumOfGrid, getBasins} from './day9';
import fs from "fs"

const entriesInput = [
    '2199943210',
    '3987894921',
    '9856789892',
    '8767896789',
    '9899965678'
]


describe('Seven Segment Search', () => {
  it('reads the entries',() => {
      const entries = readInput(entriesInput)
    expect(entries.length).toEqual(5)
    // expect(entries).toEqual(5)
  })

  it('sum of lows from line', () => {
    const entries = readInput(entriesInput)
    const sumOfLine = getSumOfGrid(entries)


    expect(sumOfLine).toEqual(15)
  })
  it('basin size', () => {
    const entries = readInput(entriesInput)
    const sumOfLine = getBasins(entries)


    expect(sumOfLine).toEqual(1134)
  })

  it('calculates unique outputs from file', () => {
    const file = fs.readFileSync("day9/day9.txt", 'utf-8')
    const lines = file.split("\n")
    const entries = readInput(lines)
    const sumOfLine = getSumOfGrid(entries)


    expect(sumOfLine).toEqual(458)

  })
  it('calculates unique outputs from file', () => {
    const file = fs.readFileSync("day9/day9.txt", 'utf-8')
    const lines = file.split("\n")
    const entries = readInput(lines)
    const basinPoints = getBasins(entries)


    expect(basinPoints).toEqual(1134)

  })

})
