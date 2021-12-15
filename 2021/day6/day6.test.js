import {nextBigNDays, nextDay,nextNDays, readInput } from './day6';
import fs from "fs"

const agesInput = '3,4,3,1,2'

describe('Lanternfish', () => {
  it('read input',() => {
    const ages = readInput(agesInput)

    expect(ages).toEqual([3,4,3,1,2])
  })
  it('next day',() => {
    const ages = readInput(agesInput)
    const tomorrow = nextDay(ages)

    expect(tomorrow).toEqual([2,3,2,0,1])
  })

  it('next 2 days', () => {
    const ages = readInput(agesInput)
    const tomorrow = nextNDays(ages, 2)

    expect(tomorrow).toEqual([1,2,1,6,0,8])
  })
  it('next 3 days', () => {
    const ages = readInput(agesInput)
    const tomorrow = nextNDays(ages, 3)

    expect(tomorrow).toEqual([0,1,0,5,6,7,8])
  })
  it('next 80 days', () => {
    const ages = readInput(agesInput)
    const tomorrow = nextNDays(ages, 80)

    expect(tomorrow.length).toEqual(5934)
  })

  it('next 256 days', () => {
    const ages = readInput(agesInput)
    const tomorrow = nextBigNDays(ages, 256)

    expect(tomorrow).toEqual(5934)
  })
  it('next 256 days from file', () => {
    const file = fs.readFileSync("day6/day6.txt", 'utf-8')
    const [line] = file.split("\n")

    const ages = readInput(line)
    const tomorrow = nextBigNDays(ages, 256)

    expect(tomorrow).toEqual(5934)
  })

  it('next 80 days from file', () => {
    const file = fs.readFileSync("day6/day6.txt", 'utf-8')
    const [line] = file.split("\n")

    const ages = readInput(line)

    const tomorrow = nextNDays(ages, 80)

    expect(tomorrow.length).toEqual(393019)

  })

})
