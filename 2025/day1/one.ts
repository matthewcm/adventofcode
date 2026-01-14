import { readlinkSync } from "fs";
import { processLineByLine } from "../shared/read-line";


const rotationsAtZero = async () => {

  const lines = await processLineByLine('input.txt')

  const startPosition = 50;

  let position = startPosition;


  let count = 0
  

  for await (const line of lines) {

    const direction = line[0] === 'L' ? -1 : 1;


    const normalisedMove = parseInt(line.slice(1)) % 100;
    position += direction * normalisedMove

    if (position > 99) {
      position = position - 100;
    }

    if (position < 0) {
      position = 100 + position;
    }

    if (position === 0) {
      count++;
    }


    console.log(`Line from file: ${line}`);
    console.log(`Current position: ${position}`);
  }

  console.log(`Total times at zero: ${count}`);
  return count
}


rotationsAtZero();
