import {winBingo, loseBingo} from './day4';
import fs from "fs"

const testReport = [
"7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1",
"",
"22 13 17 11  0                                                          ",
" 8  2 23  4 24                                                          ",
"21  9 14 16  7                                                          ",
" 6 10  3 18  5                                                          ",
" 1 12 20 15 19                                                          ",
"",
" 3 15  0  2 22                                                          ",
" 9 18 13 17  5                                                          ",
"19  8  7 25 23                                                          ",
"20 11 10 24  4                                                          ",
"14 21 16 12  6                                                          ",
"",
"14 21 17 24  4                                                          ",
"10 16 15  9 19                                                          ",
"18  8 23 26 20                                                          ",
"22 11 13  6  5                                                          ",
" 2  0 12  3  7                                                          ",
  ""
]

describe('bingo', () => {
  it('calculates winning board',() => {
    const winningBoard = winBingo(testReport)
    expect(winningBoard).toEqual(4512)
  })
  it('calculates winning board from file', () => {
    const file = fs.readFileSync("day4/day4.txt", 'utf-8')
    const game = file.split("\n")
    console.log('game:', game)
    const winningBoard = winBingo(game)
    expect(winningBoard).toEqual(25410)
  })
  it('calculates losing board ', () => {
    const winningBoard = loseBingo(testReport)
    expect(winningBoard).toEqual(1924)
  })
  it('calculates losing board from file', () => {
    const file = fs.readFileSync("day4/day4.txt", 'utf-8')
    const game = file.split("\n")
    console.log('game:', game)
    const winningBoard = loseBingo(game)
    expect(winningBoard).toEqual(2730)
  })


})
