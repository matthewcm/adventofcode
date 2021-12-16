import { cost, lowestCost, readInput } from './day7';
import fs from "fs"

const agesInput = '16,1,2,0,4,2,7,1,2,14'

describe('Whales', () => {
  it.only('cost',() => {
    const ages = readInput(agesInput)
    const costOf = cost(ages, 2)

    expect(costOf).toEqual(37)
  })

  it.only('lowest cost', () => {
    const ages = readInput(agesInput)
    const cost = lowestCost(ages, 2)

    expect(cost).toEqual(37)
  })
  it('next 3 days', () => {
    const ages = readInput(agesInput)
    const tomorrow = nextNDays(ages, 3)

    expect(tomorrow).toEqual([0,1,0,5,6,7,8])
  })

  it.only('next 256 days from file', () => {
    const file = fs.readFileSync("day7/day7.txt", 'utf-8')
    const [line] = file.split("\n")

    const ages = readInput(line)
    const lowCost = lowestCost(ages)

    expect(lowCost).toEqual(347449)
  })

  it('next 80 days from file', () => {
    const file = fs.readFileSync("day6/day6.txt", 'utf-8')
    const [line] = file.split("\n")

    const ages = readInput(line)

    const tomorrow = nextNDays(ages, 80)

    expect(tomorrow).toEqual(347449)

  })

})
