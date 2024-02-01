import { expect, it } from 'vitest'
import { asciiToArray } from './asciiToArray'

const res = asciiToArray('123')

it('asciiToArray', () => {
  expect(res).toEqual(['1', '2', '3'])
})
