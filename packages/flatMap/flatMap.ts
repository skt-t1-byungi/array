type Mapper<T, U> = (value: T, index: number, array: T[]) => U[]

export = function flatMap<T,U> (arr: T[], mapper: Mapper<T,U>) {
  const len = arr.length
  let res: U[] = []

  for (let i = 0; i < len; i++) {
    res = res.concat(mapper(arr[i], i, arr))
  }

  return res
}
