function baseInRange(number, start, end) {
  return number >= Math.min(start, end) && number < Math.max(start, end)
}

export function inRange(number, start, end) {
  number = Number(number)
  start = Number(start)
  if (end === undefined) {
    end = start
    start = 0
  }
  else {
    end = Number(end)
  }
  return baseInRange(number, start, end)
}
