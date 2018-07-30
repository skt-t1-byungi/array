import test from 'ava'
import foreach from './foreach'

test('foreach', t => {
  const stub = [3, 2, 1]
  stub.forEach = undefined

  t.plan(3)
  foreach(stub, (x, i) => t.is(x + i, 3))
})
