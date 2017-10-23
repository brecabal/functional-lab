function reduce(arr, fn, initial) {
  return(function innerReduce (indx, value){
      if(indx > arr.length-1){//si mi indx es mayor a arr.lenght es mi caso de parada
          return value// devolver value
      }
      return innerReduce(indx +1, fn(value, arr[indx], indx, arr))//de lo contrario devolver indx mas suma
  })(0, initial)
}

module.exports = reduce;