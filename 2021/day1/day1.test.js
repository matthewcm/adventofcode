import {series, three } from './day1';
import report from './day1.json'

const testReport = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263
]

describe('sonar sweep', () => {
  it ('calculates number of increases',() => {
    const numberOfIncreasedMeasurements = series(testReport)
    expect(numberOfIncreasedMeasurements).toEqual(7)
  })

  it ('calculates number of increases from json', () => {
    const numberOfIncreasedMeasurements = series(report)
    expect(numberOfIncreasedMeasurements).toEqual(1482)
  })

  it ('calculates number of increases in three-measurement sliding', () => {
    const numberOfIncreasedMeasurements = three(testReport)
    expect(numberOfIncreasedMeasurements).toEqual(5)
  })

  it ('calculates number of increases in three-measurement sliding from json', () => {
    const numberOfIncreasedMeasurements = three(report)
    expect(numberOfIncreasedMeasurements).toEqual(1518)
  })
})
