export function baseClamp(number, lower, upper) {
  // 排除NaN
  number = Number(number)
  if (!Number.isNaN(number)) {
    if (upper !== undefined)
      number = number <= upper ? number : upper
    if (lower !== undefined)
      number = number >= lower ? number : lower
  }
  return number
}
