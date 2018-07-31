type Tester<T> = (value: T, index: number, array: T[]) => boolean

export = function every<T> (arr: T[], tester: Tester<T>) {
  if (arr.every) return arr.every(tester)

  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (!tester(arr[i], i, arr)) return false
  }

  return true
}
