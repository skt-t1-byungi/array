type Reducer<T,U> = (prev: U, value: T, index: number, array: T[]) => U

export = function reduceRight<T,U= T> (arr: T[], reducer: Reducer<T,U>, initValue?: U) {
    const isInit = arguments.length === 3

    if (arr.reduceRight) {
        if (isInit) {
            return arr.reduceRight(reducer, initValue!)
        } else {
            return arr.reduceRight(reducer as any)
        }
    }

    const len = arr.length
    let i = isInit ? len : len + 1
    let res = isInit ? initValue : arr[i]

    while (i--) {
        res = reducer(res as U, arr[i], i, arr)
    }

    return res
}
