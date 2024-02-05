import { expect, it } from 'vitest'
import { camelCase } from './camelCase'

const res = camelCase('_Foo_Bar_')
const res1 = camelCase('-Foo_Bar-')
const res2 = camelCase('_——FooBar_+')
const res3 = camelCase('FooBar')

it('camelCase', () => {
  expect(res).toStrictEqual('fooBar')
  expect(res1).toStrictEqual('fooBar')
  expect(res2).toStrictEqual('fooBar')
  expect(res3).toStrictEqual('fooBar')
})
