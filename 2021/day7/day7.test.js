import { linearFuelCost, lowestFuelCost, seriesFuelCost, readInput } from './day7';
import fs from "fs"

const positionsInput = '16,1,2,0,4,2,7,1,2,14'

describe('The Treachery of Whales', () => {
  it('horizontal fuel cost for position 2',() => {
    const positions = readInput(positionsInput)
    const costOf = linearFuelCost(positions, 2)

    expect(costOf).toEqual(37)
  })

  it('lowest fuel cost for input positions', () => {
    const positions = readInput(positionsInput)
    const cost = lowestFuelCost(positions)

    expect(cost).toEqual(37)
  })

  it('fuel cost of position 5 for input positions with series formula', () => {
    const positions = readInput(positionsInput)
    const cost = seriesFuelCost(positions, 5)

    expect(cost).toEqual(168)
  })
  it('lowest fuel cost for input positions with series formula ', () => {
    const positions = readInput(positionsInput)
    const cost = lowestFuelCost(positions, seriesFuelCost)

    expect(cost).toEqual(168)
  })

  it('lowest fuel cost from file', () => {
    const file = fs.readFileSync("day7/day7.txt", 'utf-8')
    const [line] = file.split("\n")

    const positions = readInput(line)
    const cost = lowestFuelCost(positions)

    expect(cost).toEqual(347449)
  })

  it('lowest series fuel cost from file', () => {
    const file = fs.readFileSync("day7/day7.txt", 'utf-8')
    const [line] = file.split("\n")

    const positions = readInput(line)
    const cost = lowestFuelCost(positions, seriesFuelCost)

    expect(cost).toEqual(98039527)
  })


})
