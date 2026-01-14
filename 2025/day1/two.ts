import { processLineByLine } from "../shared/read-line";


const rotationsAtZeroMult = async () => {

  const lines = await processLineByLine('input.txt')

  const startPosition = 50;

  let position = startPosition;


  let count = 0
  

  for await (const line of lines) {
    const direction = line[0] === 'L' ? -1 : 1;

    const move = parseInt(line.slice(1));

    const beforePos = position;

    position += direction * move

    if (position > 99) {
      const normalisedPos = position % 100;
      const multZero = Math.floor(position/ 100);
      position = normalisedPos;
      count += multZero;
    }

    else if (position < 0) {
      const normalisedPos = position % 100;
      const multZero = Math.floor(Math.abs(position) / 100) + 1;
      count += multZero;

      if (beforePos === 0) {
        count --;
      }


      position = normalisedPos === 0 ? 0 : 100 + normalisedPos;
    }

    else if (position === 0) {
      count++;
    }



  }

  console.log(`Total times at zero: ${count}`);
  return count
}


rotationsAtZeroMult();
