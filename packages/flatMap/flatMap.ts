type Mapper<T,U> = (value: T, index: number, array: T[]) => U[]
type ArrayFlatMap<T,U> = T[] & {flatMap: (mapper: Mapper<T,U>) => U[]}

export = function flatMap<T,U> (arr: T[], mapper: Mapper<T,U>) {
    if ((arr as ArrayFlatMap<T,U>).flatMap) return (arr as ArrayFlatMap<T,U>).flatMap(mapper)

    const len = arr.length
    let res: U[] = []

    for (let i = 0; i < len; i++) {
        res = res.concat(mapper(arr[i], i, arr))
    }

    return res
}
