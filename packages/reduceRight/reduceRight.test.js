import test from 'ava'
import reduceRight from './reduceRight'

test('reduceRight', t => {
    const stub1 = [1, 2, 3, 4]
    stub1.reduce = undefined
    t.is(reduceRight(stub1, (acc, v) => acc + v, 1), 11)

    // for seq
    t.is(reduceRight(stub1, (acc, v) => v), 1)

    const stub2 = [{ x: 1 }, { x: 2 }, { x: 3 }]
    stub2.reduceRight = undefined
    t.deepEqual(reduceRight(stub2, (acc, o) => ({ x: (acc.x || 0) + o.x }), {}), { x: 6 })
    t.is(reduceRight(stub2, (acc, o) => acc + o.x, 5), 11)
})
