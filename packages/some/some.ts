type Tester<T> = (value: T, index: number, array: T[]) => boolean

export = function some<T> (arr: T[], tester: Tester<T>) {
    if (arr.some) return arr.some(tester)

    const len = arr.length
    for (let i = 0; i < len; i++) {
        if (tester(arr[i], i, arr)) return true
    }

    return false
}
