type Mapper<T,U,THIS> = (this: THIS, value: T, index: number, array: T[]) => U[]

export = function flatMap<T,U,THIS= undefined> (arr: T[], mapper: Mapper<T,U,THIS>, thisArg?: THIS) {
    if (arr.flatMap) return arr.flatMap(mapper, thisArg)

    const len = arr.length
    let res: U[] = []

    for (let i = 0; i < len; i++) {
        res = res.concat(mapper.call(thisArg!, arr[i], i, arr))
    }

    return res
}
