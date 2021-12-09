import { dive, diveAim }  from './day2';
import report from './day2.json'

const testReport = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2'
]



describe('dive', () => {
  it ('calculates position', () => {
    const position = dive(testReport)
    expect(position).toEqual(150)
  })
  it ('calculates position from json', () => {
    const position = dive(report)
    expect(position).toEqual(1924923)
  })

  it ('calculates position with aim', () => {
    const position = diveAim(testReport)
    expect(position).toEqual(900)
  })

  it ('calculates position with aim json', () => {
    const position = diveAim(report)
    expect(position).toEqual(1982495697)
  })
})
