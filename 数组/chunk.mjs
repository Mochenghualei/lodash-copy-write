export function chunk(array, size = 1) {
  size = parseInt(size)
  const length = (array == null || !Array.isArray(array)) ? 0 : array.length

  if (!length || size < 1)
    return []

  let index = 0, resIndex = 0
  let result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }

  return result
}
