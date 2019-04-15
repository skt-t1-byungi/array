type Finder<T, THIS> = (this: THIS, value: T, index: number, array: T[]) => boolean

export = function find<T,THIS= undefined> (arr: T[], finder: Finder<T, THIS>, thisArg?: THIS) {
    if (arr.find) return arr.find(finder, thisArg)

    const len = arr.length

    for (let i = 0; i < len; i++) {
        const val = arr[i]
        if (finder.call(thisArg!, val, i, arr)) return val
    }
}
