import test from 'ava'
import filter from './filter'

test('filter', t => {
    const stub = [1, 2, 3, 4, 5]
    stub.filter = undefined

    t.deepEqual(filter(stub, x => x <= 3), [1, 2, 3])
    t.deepEqual(filter(stub, x => x > 5), [])
    t.deepEqual(filter(stub, function (x) { return x < this.c }, { c: 3 }), [1, 2])
})
