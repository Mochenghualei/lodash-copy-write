export function _property() {

}

function _baseMatchesProperty() {

}

function _baseMatches() {

}

const { isArray } = Array
export function baseIteratee(value) {
  if (!value)
    return null

  if (typeof value === 'function')
    return value

  if (typeof value === 'object') {
    return isArray(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value)
  }

  return _property(value)
}
