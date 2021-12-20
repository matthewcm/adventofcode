import {readInput, getUniqueOutputCount, getOutputDigitValue, sumAllOutputValues} from './day8';
import fs from "fs"

const entriesInput = [
    "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe",
    "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc",
    "fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg",
    "fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb",
    "aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea",
    "fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb",
    "dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe",
    "bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef",
    "egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb",
    "gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce",
    ""
]


describe('Seven Segment Search', () => {
  it('reads the entries',() => {
    const segments = readInput(entriesInput)
    expect(segments[0]).toEqual([[
      "be",
      "abcdefg",
      "bcdefg",
      "acdefg",
      "bceg",
      "cdefg",
      "abdefg",
      "bcdef",
      "abcdf",
      "bde",
    ],[
      "abcdefg",
      "bcdef",
      "bcdefg",
      "bceg",
    ]])
  })

  it('calulates unique outputs', () => {
    const entries = readInput(entriesInput)
    const uniqueOutputCount = getUniqueOutputCount(entries)

    expect(uniqueOutputCount).toEqual(26)
  })

  it('calculates unique outputs from file', () => {
    const file = fs.readFileSync("day8/day8.txt", 'utf-8')
    const lines = file.split("\n")
    const entries = readInput(lines)

    const uniqueOutputCount =  getUniqueOutputCount(entries)

    expect(uniqueOutputCount).toEqual(239)
  })

  it('calulates output digit value', () => {
    const [entry] = readInput(["acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf"])
    const outputDigitValue = getOutputDigitValue(entry)

    expect(outputDigitValue).toEqual(5353)
  })

  it('calulates sum digit value', () => {
    const entries = readInput(entriesInput)
    const outputDigitValue = sumAllOutputValues(entries)

    expect(outputDigitValue).toEqual(61229)
  })

  it('calulates sum digit value from file', () => {
    const file = fs.readFileSync("day8/day8.txt", 'utf-8')
    const lines = file.split("\n")
    const entries = readInput(lines)
    const outputDigitValue = sumAllOutputValues(entries)

    expect(outputDigitValue).toEqual(946346)
  })
})
