import { createMathOperation } from '../utils/createMathOperation.mjs'

export const divide = createMathOperation((dividend, divisor) => dividend / divisor, 1)
