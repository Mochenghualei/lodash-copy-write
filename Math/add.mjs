import { createMathOperation } from '../utils/createMathOperation.mjs'

export const add = createMathOperation((augend, addend) => {
  return augend + addend
}, 0)
