import { expect, it } from 'vitest'

import { max } from './max.mjs'

it('max', () => {
  expect(max([4, 2, 8, 6])).toBe(8)
  expect(max([0, 0, 0])).toBe(0)
  expect(max(undefined)).toBe(undefined)
  expect(max(Number.NaN)).toBe(undefined)
  expect(max(Symbol('hubery'))).toBe(undefined)
  expect(max(Symbol(0))).toBe(undefined)
  expect(max([true, false])).toBe(true)
})
