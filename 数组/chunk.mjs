/* 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。 */
export function chunk(array, size = 1) {
  // 初始化size
  size = parseInt(size)
  // 初始化length
  const length = (array == null || !Array.isArray(array)) ? 0 : array.length

  // 边界处理
  if (!length || size < 1)
    return []

  // 初始化所需变量与结果数组
  let index = 0, resIndex = 0
  let result = new Array(Math.ceil(length / size))

  // 以size为步长截取数组，并保存切片
  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }

  return result
}
