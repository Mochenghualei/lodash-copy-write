import { expect, it } from 'vitest'

import _ from 'lodash'
import { inRange } from './inRange.mjs'

it('inRange', () => {
  expect(_.inRange(3, 2, 4)).toBe(true)
  expect(_.inRange(4, 8)).toBe(true)
  expect(_.inRange(4, 2)).toBe(false)
  expect(_.inRange(2, 2)).toBe(false)
  expect(_.inRange(1.2, 2)).toBe(true)
  expect(_.inRange(5.2, 4)).toBe(false)
  expect(_.inRange(-3, -2, -6)).toBe(true)
  expect(inRange(3, 2, 4)).toBe(true)
  expect(inRange(4, 8)).toBe(true)
  expect(inRange(4, 2)).toBe(false)
  expect(inRange(2, 2)).toBe(false)
  expect(inRange(1.2, 2)).toBe(true)
  expect(inRange(5.2, 4)).toBe(false)
  expect(inRange(-3, -2, -6)).toBe(true)
})
