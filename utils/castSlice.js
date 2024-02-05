export function castSlice(array, start, end) {
  const { length } = array
  end = end === undefined ? length : end
  return (!start && end >= length) ? array : array.slice(start, end)
}
