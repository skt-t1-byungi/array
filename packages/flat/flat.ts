type ArrayFlat<T> = Array<T | T[]> & {flat: (num: number) => Array<T | T[]>}

export = function flat<T> (arr: Array<T | T[]>, depth= 1): Array<T | T[]> {
    if ((arr as ArrayFlat<T>).flat) return (arr as ArrayFlat<T>).flat(depth)

    const len = arr.length
    const res = []

    for (let i = 0; i < len; i++) {
        const val = arr[i]
        if (val instanceof Array && depth > 0) {
            res.push(...flat(val, depth - 1))
        } else {
            res.push(val)
        }
    }

    return res
}
