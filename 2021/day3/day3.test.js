import { consumption, lifeSupport }  from './day3';
import fs from "fs"

const testReport = [
    "00100" ,
    "11110" ,
    "10110" ,
    "10111" ,
    "10101" ,
    "01111" ,
    "00111" ,
    "11100" ,
    "10000" ,
    "11001" ,
    "00010" ,
    "01010"
]



describe('binary diagnostic', () => {
  it('calculates energy consumption', () => {
    const energyRes = consumption(testReport)

    expect(energyRes).toEqual(198)
  })
  it ('calculates energy consumption from file', () => {

    const file = fs.readFileSync("day3/day3.txt", 'utf-8')
    const lines= file.split("\n")

    const energyRes = consumption(lines)

    expect(energyRes).toEqual(2972336)
  })
})
describe('life support', () => {
  it('calculates life support', () => {
    const energyRes = lifeSupport(testReport)
    expect(energyRes).toEqual(230)
  })
  it ('calculates energy consumption from file', () => {

    const file = fs.readFileSync("day3/day3.txt", 'utf-8')
    const lines= file.split("\n")

    const energyRes = lifeSupport(lines)

    expect(energyRes).toEqual(3368358)
  })
})
