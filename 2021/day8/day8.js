export const readInput = input => {
  return input
    .split(',')
    .map(age => parseInt(age))
  .sort((a,b) => a - b)
}
export const stuff = () => {}
