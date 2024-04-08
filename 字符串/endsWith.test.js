import { expect, it } from 'vitest'
import { endsWith } from './endsWith.mjs'

it('endsWith', () => {
  // expect().toEqual()
  // expect().toStrictEqual()
  // expect(_.endsWith('hubery', 'e', 4)).toBe(true)
  expect(endsWith('hubery', 'e', 4)).toBe(true)
})
