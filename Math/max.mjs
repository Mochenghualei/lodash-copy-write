import { baseExtremum } from '../utils/baseExtremum.mjs'

/**
 * 该方法用于返回传入函数的第一个参数值
 */
function identity(value) {
  return value
}

/**
 * great than的基本实现
 * @return - true | false
 */
function baseGt(value, other) {
  return value > other
}

export function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined
}
