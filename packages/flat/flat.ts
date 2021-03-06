export = function flat<T> (arr: Array<T | T[]>, depth= 1): Array<T | T[]> {
    if (arr.flat) return arr.flat(depth)

    const len = arr.length
    const res = []

    for (let i = 0; i < len; i++) {
        const val = arr[i]
        if (isArray(val) && depth > 0) {
            res.push(...flat(val, depth - 1))
        } else {
            res.push(val)
        }
    }

    return res
}

function isArray (a: any): a is any[] {
    return Object.prototype.toString.call(a) === '[object Array]'
}
