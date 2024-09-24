export function calculateNumbers(number, type) {
  if (type === 0) {
    return createDecimalNumbersArray(number)
  } else if (+type === 1) {
    return createBinaryNumbersArray(number)
  }
}

const createDecimalNumbersArray = (number) => {
  const numbersArray = Array(+number).fill(0)
  numbersArray.forEach((_, index) => {
    numbersArray[index] = Math.floor(Math.random() * 10)
  })
  return numbersArray
}

const createBinaryNumbersArray = (number) => {
  const numbersArray = Array(+number).fill(0)
  numbersArray.forEach((_, index) => {
    numbersArray[index] = Math.floor(Math.random() * 2)
  })
  return numbersArray
}