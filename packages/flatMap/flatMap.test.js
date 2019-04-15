import test from 'ava'
import flatMap from './flatMap'

test('flatMap', t => {
    const stub = [1, 2, 3, 4]
    stub.flatMap = undefined

    t.deepEqual(flatMap(stub, x => [x, x * 2]), [1, 2, 2, 4, 3, 6, 4, 8])
    t.deepEqual(flatMap(stub, x => [[x * 2]]), [[2], [4], [6], [8]])
    t.deepEqual(flatMap(stub, function (x) { return [x * this.c] }, { c: 3 }), [3, 6, 9, 12])
})
