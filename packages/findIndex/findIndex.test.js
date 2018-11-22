import test from 'ava'
import findIndex from './findIndex'

test('findIndex', t => {
    const stub = [1, 2, 3, 4]
    stub.findIndex = undefined

    t.is(findIndex(stub, x => x === 3), 2)
    t.is(findIndex(stub, x => x === 5), -1)
})
