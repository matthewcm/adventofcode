import { readlinkSync } from "fs";
import { processLineByLine } from "../shared/read-line";


const invalidIds = async () => {

  const lines = await processLineByLine('input.txt')


  for await (const line of lines) {

    const ids = line.split(/,/)
    const invalidIdList: number[] = []

    for (const id of ids) {
      const [firstId, secondId] = id.split('-')


      const isInvalid = (num: string) => {

        const ss = num + num

        const shifted = ss.slice(1, ss.length - 1)

        return shifted.includes(num)
      }


      for (let i = parseInt(firstId); i <= parseInt(secondId); i++) {
        if (isInvalid(i.toString())) {
          invalidIdList.push(i)
        }
      }


    }
    console.log('Invalid Ids:', invalidIdList)


    console.log('Sum of ids:', invalidIdList.reduce((a, b) => a + b, 0))
    return invalidIdList
  }



}


invalidIds();

