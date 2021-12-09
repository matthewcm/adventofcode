export const dive = (report) =>  {
    let depth = 0
    let horiz = 0

    const positionCalc = {
	forward: (dist) => horiz += dist,
	up: (dist) => depth -= dist,
	down: (dist) => depth +=dist
    }

    report.forEach((spec) => {
	const [direction, distance] = spec.split(' ') 
	positionCalc[direction](parseInt(distance))
    })
    
    return horiz * depth
}

export const diveAim = (report) =>  {
    let depth = 0
    let horiz = 0
    let aim = 0

    const positionCalc = {
	forward: (dist) => {
	    horiz += dist
	    depth += dist * aim 
	},
	up: (dist) => aim -= dist,
	down: (dist) => aim +=dist
    }

    report.forEach((spec) => {
	const [direction, distance] = spec.split(' ') 
	positionCalc[direction](parseInt(distance))
    })
    
    return horiz * depth
}
