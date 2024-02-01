import { baseFlatten } from '../utils/baseFlatten.mjs'

// 减少一级array嵌套深度
export default function flatten(array) {
  // 初始化length
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, 1) : []
}
