type Mapper<T,U,THIS> = (this: THIS, value: T, index: number, array: T[]) => U

export = function map<T,U,THIS= undefined> (arr: T[], mapper: Mapper<T,U,THIS>, thisArg?: THIS) {
    if (arr.map) return arr.map(mapper, thisArg)

    const len = arr.length
    const res = Array(len)

    for (let i = 0; i < len; i++) {
        res[i] = mapper.call(thisArg!, arr[i], i, arr)
    }

    return res
}
