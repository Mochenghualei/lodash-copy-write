export function fromPairs(array) {
  // 边界判断
  if (array == null || !Array.isArray(array))
    return {}

  // 初始化变量
  let index = -1
  const length = array.length
  const result = {}

  // 循环取值
  while (++index < length) {
    const pair = array[index]
    result[pair[0]] = pair[1]
  }

  return result
}
