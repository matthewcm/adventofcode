export const series = (report) =>  {
  return report.filter((current, index) => current > report[Math.max(index - 1, 0)]).length
}

const getMeasurementWindow = (report, start) => {
  return report[start]+ report[start+ 1] + report[start+ 2]
}

export const three = (report) =>  {
  return report.filter((_, index) => {
    if (index + 4 > report.length){
      return false
    }
    const first = getMeasurementWindow(report, index)
    const second = getMeasurementWindow(report, index+1)

    return second > first
  }).length

}
