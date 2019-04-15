import test from 'ava'
import flat from './flat'

test('flat', t => {
    const m = (arr, depth) => flat(Object.assign(arr, { flat: undefined }), depth)
    t.deepEqual(m([1, 2, [3, 4]]), [1, 2, 3, 4])
    t.deepEqual(m([1, 2, [3, 4, [5, 6]]]), [1, 2, 3, 4, [5, 6]])
    t.deepEqual(m([1, 2, [3, 4, [5, 6]]], 2), [1, 2, 3, 4, 5, 6])
})
