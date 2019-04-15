type Finder<T,THIS> = (this: THIS, value: T, index: number, array: T[]) => boolean

export = function findIndex<T,THIS= undefined> (arr: T[], finder: Finder<T,THIS>, thisArg?: THIS) {
    if (arr.findIndex) return arr.findIndex(finder, thisArg)

    const len = arr.length
    for (let i = 0; i < len; i++) {
        if (finder.call(thisArg!, arr[i], i, arr)) return i
    }

    return -1
}
