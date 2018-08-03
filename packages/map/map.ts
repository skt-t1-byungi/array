type Mapper<T,U> = (value: T, index: number, array: T[]) => U

export = function map<T,U> (arr: T[], mapper: Mapper<T,U>) {
  if (arr.map) return arr.map(mapper)

  const len = arr.length
  const res = []

  for (let i = 0; i < len; i++) {
    res.push(mapper(arr[i], i, arr))
  }

  return res
}
