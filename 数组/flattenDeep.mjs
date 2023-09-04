import { baseFlatten } from "../utils/baseFlatten.mjs"
function flattenDeep(array) {
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, Infinity) : []
}

// demo
const arr = [1, 2, [3, [4, [5]]]]
const res = flattenDeep(arr)
console.log(res)