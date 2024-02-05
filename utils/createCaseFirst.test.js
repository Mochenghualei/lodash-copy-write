import { expect, it } from 'vitest'
import { createCaseFirst } from './createCaseFirst'

const res = createCaseFirst('toUpperCase')('\word')

it('createCaseFirst', () => {
  // expect().toEqual()
  expect(res).toStrictEqual('\Word')
})
