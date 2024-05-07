export function createMathOperation(operator, defaultValue) {
  return function (value, other) {
    let result

    if (value === undefined && other === undefined)
      return defaultValue

    if (value !== undefined)
      result = value

    if (other !== undefined) {
      if (result === undefined)
        return other

      if (typeof value === 'string' || typeof other === 'string') {
        value = String(value)
        other = String(other)
      }
      else {
        value = Number(value)
        other = Number(other)
      }
      result = operator(value, other)
    }
    return result
  }
}
