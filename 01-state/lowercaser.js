/*function lowercaser(input){
	return input.toLowerCase()
}*/

//const lowercaser = (input) => input.toLowerCase()

const lowercaser =(input) => {
	if(typeof input !== 'string') {
		throw ('input is not a valid string')
	}
	return input.toLowerCase()
}

module.exports = lowercaser