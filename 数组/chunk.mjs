/* 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。 */
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
