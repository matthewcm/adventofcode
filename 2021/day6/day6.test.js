import {getAgesObject, howManyFish, nextBigNDays, nextDay,nextNDays, readInput } from './day6';
import fs from "fs"

const agesInput = '3,4,3,1,2'

describe('Lanternfish', () => {
  it('read input',() => {
    const ages = readInput(agesInput)

    expect(ages).toEqual([1,2,3,3,4])
  })

  it('next day',() => {
    const ageList = readInput(agesInput)
    const ages = getAgesObject(ageList)
    const tomorrow = nextDay(ages)

    const expectedTomorrow = {
      0:1,
      1:1,
      2:2,
      3:1,
      4:0,
      5:0,
      6:0,
      7:0,
      8:0
    }
    expect(tomorrow).toEqual(expectedTomorrow)

  })

  it('how many fish after next 2 days', () => {
    const ageList = readInput(agesInput)
    const ages = getAgesObject(ageList)

    const thatDay = nextNDays(ages, 2)

    expect(howManyFish(thatDay)).toEqual(6)
  })
  it('next 3 days', () => {
    const ageList = readInput(agesInput)
    const ages = getAgesObject(ageList)

    const thatDay = nextNDays(ages, 3)

    expect(howManyFish(thatDay)).toEqual(7)
  })
  it('next 80 days', () => {
    const ageList = readInput(agesInput)
    const ages = getAgesObject(ageList)

    const thatDay = nextNDays(ages, 80)

    expect(howManyFish(thatDay)).toEqual(5934)
  })

  it('next 80 days from file', () => {
    const file = fs.readFileSync("day6/day6.txt", 'utf-8')
    const [line] = file.split("\n")
    const agesList = readInput(line)
    const ages = getAgesObject(agesList)

    const thatDay = nextNDays(ages, 80)

    expect(howManyFish(thatDay)).toEqual(393019)

  })

  it('next 256 days', () => {
    const agesList = readInput(agesInput)
    const ages = getAgesObject(agesList)

    const thatDay = nextNDays(ages, 256)

    expect(howManyFish(thatDay)).toEqual(26984457539)
  })


  it('next 256 days from file', () => {
    const file = fs.readFileSync("day6/day6.txt", 'utf-8')
    const [line] = file.split("\n")
    const agesList = readInput(line)
    const ages = getAgesObject(agesList)

    const lanternfishCount = nextBigNDays(ages, 256)

    expect(lanternfishCount).toEqual(1757714216975)
  })

})
