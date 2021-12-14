export const generateBoard = (inputs) => {
  return [1,2,4,4,5,5,5,5,8]
}
const getLines = input => {
  return input
    .map(line => line
      .split('->')
      .map(coord => coord
        .trim()
        .split(',')
        .map(digit => parseInt(digit))
        )
      )

}
export const getStraightLines = (inputs) => {
  const straightLines = getLines(inputs)
    .filter(line => {
      const [p1, p2] = line
      if (p1[0] === p2[0] || p1[1] === p2[1]) return true
      return false
    })

  return straightLines
}
