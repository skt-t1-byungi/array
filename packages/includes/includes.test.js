import test from 'ava'
import includes from './includes'

test('includes', t => {
  const stub = [1, 2, 3, NaN]
  stub.includes = undefined

  t.true(includes(stub, 2))
  t.false(includes(stub, 4))
  t.false(includes(stub, 3, 3))
  t.true(includes(stub, 3, -2))
  t.true(includes(stub, NaN))
})
