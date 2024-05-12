import { createRound } from '../utils/createRound.mjs'

export const ceil = createRound('ceil')

const res = ceil(6.0002, 3)
const res2 = Math.ceil(6.0002)

console.log(res)
console.log(res2)
