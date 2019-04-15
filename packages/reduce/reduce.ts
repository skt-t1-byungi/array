type Reducer<T,U> = (prev: U, value: T, index: number, array: T[]) => U

export = function reduce<T,U= T> (arr: T[], reducer: Reducer<T,U>, initValue?: U) {
    const isInit = arguments.length === 3

    if (arr.reduce) {
        if (isInit) {
            return arr.reduce(reducer, initValue!)
        } else {
            return arr.reduce(reducer as any)
        }
    }

    const len = arr.length
    let i = isInit ? 0 : 1
    let res = isInit ? initValue : arr[0]

    for (; i < len; i++) {
        res = reducer(res as U, arr[i], i, arr)
    }

    return res
}
