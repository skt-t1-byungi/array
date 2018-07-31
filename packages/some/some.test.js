import test from 'ava'
import some from './some'

test('some', t => {
  const stub = [1, 2, 3, 4, 5]
  stub.some = undefined

  t.true(some(stub, x => x === 3))
  t.false(some(stub, x => x > 5))
})
