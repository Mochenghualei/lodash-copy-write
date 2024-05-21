export function baseExtremum(array, iteratee, comparator) {
  const length = array.length
  let index = -1
  let computed = null
  let result = null

  while (++index < length) {
    const value = array[index]
    const current = iteratee(value)

    if (current != null && (computed === null
      // 排除NaN和symbol
      ? (!Number.isNaN(current) && !(typeof current === 'symbol'))
      : comparator(current, computed)
    )) {
      computed = current
      result = value
    }
  }

  return result
}
