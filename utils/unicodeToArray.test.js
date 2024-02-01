import { expect, it } from 'vitest'
import { unicodeToArray } from './unicodeToArray'

const res = unicodeToArray('ud800')

it('unicodeToArray', () => {
  expect(res).toEqual(['u', 'd', '8', '0', '0'])
})
