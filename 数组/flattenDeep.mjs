import { baseFlatten } from '../utils/baseFlatten.mjs'

export default function flattenDeep(array) {
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, Number.POSITIVE_INFINITY) : []
}
