import test from 'ava'
import reduce from './reduce'

test('reduce', t => {
    const stub1 = [1, 2, 3, 4]
    stub1.reduce = undefined
    t.is(reduce(stub1, (acc, v) => acc + v, 1), 11)

    // for seq
    t.is(reduce(stub1, (acc, v) => v), 4)

    const stub2 = [{ x: 1 }, { x: 2 }, { x: 3 }]
    stub2.reduce = undefined
    t.deepEqual(reduce(stub2, (acc, o) => ({ x: (acc.x || 0) + o.x }), {}), { x: 6 })
    t.is(reduce(stub2, (acc, o) => acc + o.x, 5), 11)
})

test('If there is no initial value.', t => {
    const stub = [1, 2, 3, 4]
    stub.reduce = undefined
    t.is(reduce(stub, (acc, v) => acc + v), 10)
})
