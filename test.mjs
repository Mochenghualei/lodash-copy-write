function compact(array) {
  if (array == null)
    return []
  let result = [], resIndex = 0
  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }

  return result
}


console.log(compact([1, null, 2, "", 3, undefined, 4, NaN]))