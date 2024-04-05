const reRegExpChar = /[\\^$.*+?()[\]{}|]/g
const reHasRegExpChar = RegExp(reRegExpChar.source)

export function escapeRegExp(string = '') {
  string = String(string)
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reHasRegExpChar, '\\$&')
    : string
}
