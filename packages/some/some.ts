type Tester<T,THIS> = (this: THIS, value: T, index: number, array: T[]) => boolean

export = function some<T,THIS= undefined> (arr: T[], tester: Tester<T,THIS>, thisArg?: THIS) {
    if (arr.some) return arr.some(tester, thisArg)

    const len = arr.length
    for (let i = 0; i < len; i++) {
        if (tester.call(thisArg!, arr[i], i, arr)) return true
    }

    return false
}
