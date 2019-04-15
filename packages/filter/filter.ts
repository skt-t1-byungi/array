type Filterer<T,THIS> = (this: THIS, value: T, index: number, array: T[]) => boolean

export = function filter<T,THIS= undefined> (arr: T[], filterer: Filterer<T,THIS>, thisArg?: THIS) {
    if (arr.filter) return arr.filter(filterer, thisArg)

    const len = arr.length
    const res = []

    for (let i = 0; i < len; i++) {
        if (filterer.call(thisArg!, arr[i], i, arr)) res.push(arr[i])
    }

    return res
}
