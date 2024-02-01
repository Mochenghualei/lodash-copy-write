import { hasUnicode } from './hasUnicode'
import { asciiToArray } from './asciiToArray'
import { unicodeToArray } from './unicodeToArray'

export default function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string)
}
