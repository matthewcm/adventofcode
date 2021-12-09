import { consumption }  from './day3';
import report from './day3.json'

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
  it ('calculates energy consumption', () => {
    const energyRes = consumption(testReport)
    expect(energyRes).toEqual(198)
  })
})
