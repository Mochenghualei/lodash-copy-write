import { baseFlatten } from "../utils/baseFlatten.mjs"
// 减少一级array嵌套深度
function flatten(array) {
  // 初始化length
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, 1) : []
}


// demo
const res = flatten([1, 2, [3, [4]]])
console.log(res)