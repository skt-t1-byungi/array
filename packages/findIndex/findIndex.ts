type Finder<T> = (value: T, index: number, array: T[]) => boolean

export = function findIndex<T> (arr: T[], finder: Finder<T>) {
  if (arr.findIndex) return arr.findIndex(finder)

  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (finder(arr[i], i, arr)) return i
  }

  return -1
}
