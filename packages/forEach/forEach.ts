type Eacher<T,THIS> = (this: THIS, value: T, index: number, array: T[]) => void

export = function forEach<T,THIS= undefined> (arr: T[], eacher: Eacher<T,THIS>, thisArg?: THIS) {
    if (arr.forEach) return arr.forEach(eacher, thisArg)

    const len = arr.length
    for (let i = 0; i < len; i++) eacher.call(thisArg!, arr[i], i, arr)
}
