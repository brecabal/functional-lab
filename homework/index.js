exports.factorial = (n) => {
	return (n == 0) ? 1 : n * exports.factorial(n-1);
}

exports.fibonacci = (n) => { 
	return ( n == 1 || n == 2) ? 1 : exports.fibonacci(n-1)+exports.fibonacci(n-2) 
}

exports.divide = (a, b) => { 
	return (b>a) ? 0 : exports.divide(a-b, b) + 1 
}

exports.invert = (n) => {   
	function recursiva ( n, res ){
		if(!n){
			return res
		}

		res = (res * 10) + (n%10)
		return recursiva( Math.floor(n/10), res )
	}
	return recursiva(n, 0)
}

exports.suma = (n) => { 
	return (n == 0) ? n : Math.floor( exports.suma(n/10) + (n%10) ) 
}


exports.multi = (a, b) => {
	if(b == 0){
		return 0
	}
	if( b > 0){
		return a + exports.multi( a, b-1 )
	} 
	if( b < 0){
		return -exports.multi( a, -b )
	}
}

exports.sumArr = (arr) => { 
	return (arr.length === 0) ? 0 : arr[0] + exports.sumArr(arr.slice(1)) 
}