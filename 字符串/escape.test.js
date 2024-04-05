import { expect, it } from 'vitest'

import _ from 'lodash'

it('escape', () => {
  // expect().toEqual()
  // expect().toStrictEqual()
  expect(_.escape('fred, barney, & pebbles')).toBe('fred, barney, &amp; pebbles')
})
