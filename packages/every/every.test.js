import test from 'ava'
import every from './every'

test('every', t => {
  const stub = [1, 2, 3, 4, 5]
  stub.every = undefined

  t.true(every(stub, x => x < 6))
  t.false(every(stub, x => x < 5))
})
