function sumAndMult(arr) {
  const sum = arr.reduce((acc, elem) => acc + elem, 0)
  console.log(sum)
  return (factor) => {
    const mul = sum * factor
    return (div) => {
      return mul / div
    }
  }
}

const sumArr = sumAndMult([1,2,3,4,5,6])(2)(2)
console.log(sumArr)

