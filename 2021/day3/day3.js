
	const mostPop = (num0, num1) => {
	    return num1 > num0 ? 1:0
	}
export const consumption = (report) =>  {
    let epsilon = []
    let gama = []


    for(let i=0; i < report[0]; i++){
	let num0 = 0
	let num1 = 0

	for (let j=0; j < report ; j++){
	    

	    if (report[i][j] === "0"){
		num0++ 
	    }else {
		num1++
	    }



	}
	console.log(num1)
	console.log(num0)
	const gamNum = mostPop(num0, num1)
	const epNum = mostPop(num1, num0)
	epsilon.push(gamNum)
	gama.push(epNum)

    }

    console.log(gama.join(""))
    console.log(epsilon.join(""))



    return 198
}
