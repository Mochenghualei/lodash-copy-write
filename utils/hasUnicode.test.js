import { expect, it } from 'vitest'
import { hasUnicode } from './hasUnicode'

const res = hasUnicode('\u036F')

it('hasUnicode', () => {
  expect(res).toBe(true)
})
