import { baseExtremum } from '../utils/baseExtremum.mjs'
import { baseIteratee } from '../utils/baseIteratee.mjs'

function _getIteratee(...rest) {
  return arguments.length ? baseIteratee(rest[0], rest[1]) : baseIteratee
}

function _baseGt(value, other) {
  return value > other
}

/**
 * @author HuberyYang
 * @date 2024-05-24
 * @param {any} array
 * @param {any} iteratee - cb Or current key
 */
export function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, _getIteratee(iteratee, 2), _baseGt)
    : undefined
}
