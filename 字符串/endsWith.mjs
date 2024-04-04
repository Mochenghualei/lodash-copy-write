import { baseClamp } from '../utils/baseClamp.mjs'

export function endsWith(string, target, position) {
  string = String(string)
  target = String(target)
  const length = string.length
  position = position === undefined ? length : baseClamp(Number.parseInt(position), 0, length)
  const end = position
  // start
  position -= target.length
  return position >= 0 && string.slice(position, end) === target
}
