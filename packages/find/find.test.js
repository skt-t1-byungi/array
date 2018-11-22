import test from 'ava'
import find from './find'

test('find', t => {
    const stub = [1, 2, 3, 4, 5]
    stub.find = undefined

    t.is(find(stub, x => x % 2 === 0), 2)
    t.is(find(stub.reverse(), x => x % 2 === 0), 4)
})
