const minOfList = listOfNumbers => listOfNumbers.sort((a, b) => a-b)[0]

const maxOfList = listOfNumbers => listOfNumbers.sort((a, b) => a-b)[listOfNumbers.length-1]

const areObjectsEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length === keys2.length) {
    for (const key in obj1) {
      if (isObject(obj1[key])) {
        if (!areObjectsEqual(obj1[key], obj2[key])) {
          return false
        }
      }
      else {
        if (obj1.key !== obj2.key) {
          return false
        }
      }
    }
    return true
  }
  return false
}