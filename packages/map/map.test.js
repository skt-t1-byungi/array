import test from 'ava'
import map from './map'

test('map', t => {
    const stub = [1, 2, 3]
    stub.map = undefined

    t.deepEqual(map(stub, x => x * 2), [2, 4, 6])
    t.deepEqual(map(stub, x => [x * 2]), [[2], [4], [6]])
})
