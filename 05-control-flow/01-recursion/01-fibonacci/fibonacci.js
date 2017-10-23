const fibonacci = n => {
	if(n===0){
		return 0
	}
	else if(n===1){
		return 1
	}
	else{
		return (fibonacci2(n-2)+fibonacci2(n-1))
	}
}

module.exports = fibonacci
}

module.exports = fibonacci