import { createCaseFirst } from '../utils/createCaseFirst'
import { words } from '../utils/words'

export function camelCase(string) {
  return words(string.replace(/['\u2019]/g, '')).reduce((result, word, index) => {
    word = word.toLowerCase()
    return result + (index ? createCaseFirst('toUpperCase')(word) : word)
  }, '')
}
