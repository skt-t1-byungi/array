type Filterer<T> = (value: T, index: number, array: T[]) => boolean

export = function filter<T> (arr: T[], filterer: Filterer<T>): T[] {
  if (arr.filter) return arr.filter(filterer)
  const len = arr.length
  const res = []
  for (let i = 0; i < len; i++) {
    if (filterer(arr[i], i, arr)) res.push(arr[i])
  }
  return res
}
