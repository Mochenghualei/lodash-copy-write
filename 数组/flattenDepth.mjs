import { baseFlatten } from "../utils/baseFlatten.mjs"
function flattenDepth(array, depth) {
  const length = array == null ? 0 : array.length

  if (!length) {
    return []
  }

  depth = depth === undefined ? 1 : +depth
  return baseFlatten(array, depth)
}

// demo
const arr = [1, 2, [3, [4, [5]]]]
const res = flattenDepth(arr, 3)
console.log(res)