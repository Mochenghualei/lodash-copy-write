/**
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”
 */
export function compact(array) {
  // 初始化变量
  let result = []
  let resIndex = 0
  // 边界处理
  if (array == null)
    return []
  // 通过隐式类型转换过滤假值
  for (const value of array) {
    if (value)
      result[resIndex++] = value
  }
  return result
}