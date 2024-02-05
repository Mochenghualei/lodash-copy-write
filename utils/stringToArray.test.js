import { expect, it } from 'vitest'
import { stringToArray } from './stringToArray'

const res = stringToArray('\\u')
it('stringToArray', () => {
  expect(res).toStrictEqual(['\\', 'u'])
})
