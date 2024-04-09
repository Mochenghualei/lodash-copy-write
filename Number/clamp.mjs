import { baseClamp } from '../utils/baseClamp.mjs'

export function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower
    lower = undefined
  }

  if (upper !== undefined) {
    upper = Number(upper)
    // eslint-disable-next-line no-self-compare
    upper = upper === upper ? upper : 0 // 排除NaN
  }

  if (lower !== undefined) {
    lower = Number(lower)
    // eslint-disable-next-line no-self-compare
    lower = lower === lower ? lower : 0
  }
  return baseClamp(Number(number), lower, upper)
}

const res = clamp(-1, -5, 10)
console.log('res :>>> ', res)
