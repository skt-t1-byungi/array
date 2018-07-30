import test from 'ava'
import flat from './flat'

test.before(t => {
  // eslint-disable-next-line
  Array.prototype.flat = undefined
})

test('flat', t => {
  t.deepEqual(flat([1, 2, [3, 4]]), [1, 2, 3, 4])
  t.deepEqual(flat([1, 2, [3, 4, [5, 6]]]), [1, 2, 3, 4, [5, 6]])
  t.deepEqual(flat([1, 2, [3, 4, [5, 6]]], 2), [1, 2, 3, 4, 5, 6])
  t.deepEqual(flat([1, 2, undefined, 4, 5]), [1, 2, 4, 5])
})
