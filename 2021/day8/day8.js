const UNIQUE_SIZES = {
  2: 1,
  4: 4,
  3: 7,
  7: 8
}

export const readInput = input => {
  return input
  .filter(a => a)
  .map(entry => entry
    .split('|')
    .map(digit => digit
    .split(' ')
      .filter(a => a)
      .map(segment =>
        segment.split('')
        .sort()
        .join('')
      )
    )
  )
}

export const getUniqueOutputCount = entries => {
  return entries.map(([, output]) => {
    const counts = output.reduce((prev , segment) => {
      const size = segment.length.toString()
      if (UNIQUE_SIZES[size]){
        return prev + 1
      }
      return prev
    }, 0)

    return counts
  }).reduce((p,v) => p+v)

}

const mapUniqueDigits = (segments) => {

  const digitCipher = {}

  segments.forEach(segment => {
    const size = segment.length.toString()
    const digit = UNIQUE_SIZES[size]
    if (digit){
      digitCipher[digit] = segment
    }
  })

  return digitCipher
}

const mapDigitsOfSizeSix = (segments, {...cipher}) => {

  segments
    .filter(segment => segment.length === 6)
    .forEach(segment => {
      if (cipher[1].split('').every((segmentId) => {
        return segment.includes(segmentId)
      })) {
        if (cipher[4].split('').every((segmentId) => {
          return segment.includes(segmentId)
        })) {
          return cipher[9] = segment
        }
        return cipher[0] = segment
      }
      return cipher[6]  = segment
  })

  return cipher
}

const missingSignalOfSix = cipher => cipher[1]
  .split('')
  .filter(segmentId => {
    return !cipher[6].includes(segmentId)
  })

const mapDigitsOfSizeFive = (segments, {...cipher}) => {

  segments
    .filter(segment => segment.length === 5)
    .forEach(segment => {
        if (!cipher[1].split('').every((segmentId) => {
          return segment.includes(segmentId)
        })) {
          const missingSignal = missingSignalOfSix(cipher)

          if (segment.includes(missingSignal)){
            return cipher[2] = segment
          }
          return cipher[5] = segment
        }
        return cipher[3] = segment
    })

  return cipher

}

const printOutputSegmentsToDigits = (segments, cipher) => {
  const segmentCipher = Object.assign({}, ...Object.entries(cipher).map(([a,b]) => ({ [b]: a })))

  return parseInt(segments.map(segment => {
    return parseInt(segmentCipher[segment])
  }).join(''))

}

const getCipherFromInput = input => {
  const uniqueDigitCipher = mapUniqueDigits(input)
  const digitCipherWithSizeSix = mapDigitsOfSizeSix(input, uniqueDigitCipher)
  return mapDigitsOfSizeFive( input, digitCipherWithSizeSix)
}

export const getOutputDigitValue = ([input, output]) => {
  const cipher = getCipherFromInput(input)
  return printOutputSegmentsToDigits(output, cipher)
}

export const sumAllOutputValues = entries => (
  entries
  .map(getOutputDigitValue)
  .reduce((p,v) => p+v)
)
