import { cost, costCurve, lowestCost, lowestCostCurve, readInput } from './day7';
import fs from "fs"

const agesInput = '16,1,2,0,4,2,7,1,2,14'

describe('Whales', () => {
  it('cost',() => {
    const ages = readInput(agesInput)
    const costOf = cost(ages, 2)

    expect(costOf).toEqual(37)
  })

  it('lowest cost', () => {
    const ages = readInput(agesInput)
    const cost = lowestCost(ages, 2)

    expect(cost).toEqual(37)
  })

  it('lowest cost', () => {
    const ages = readInput(agesInput)
    const cost = lowestCost(ages, 2)

    expect(cost).toEqual(37)
  })
  it('lowest cost curve', () => {
    const ages = readInput(agesInput)
    const cost = costCurve(ages, 5)

    expect(cost).toEqual(168)
  })
  it('lowest cost', () => {
    const ages = readInput(agesInput)
    const cost = lowestCostCurve(ages, 2)

    expect(cost).toEqual(168)
  })

  it('next 256 days from file', () => {
    const file = fs.readFileSync("day7/day7.txt", 'utf-8')
    const [line] = file.split("\n")

    const ages = readInput(line)
    const lowCost = lowestCost(ages)

    expect(lowCost).toEqual(347449)
  })

  it('next 256 days from file', () => {
    const file = fs.readFileSync("day7/day7.txt", 'utf-8')
    const [line] = file.split("\n")

    const ages = readInput(line)
    const lowCost = lowestCostCurve(ages)

    expect(lowCost).toEqual(347449)
  })


})
