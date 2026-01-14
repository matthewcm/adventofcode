import fs from 'fs';
import readline from 'readline';

export async function processLineByLine(filename : string) {
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  return rl

  for await (const line of rl) {
    console.log(`Line from file: ${line}`);
  }
}

