type Reducer<T,U> = (prev: U, value: T, index: number, array: T[]) => U

export = function reduce<T,U> (arr: T[], reducer: Reducer<T,U>, initValue: U) {
  if (arr.reduce) return arr.reduce(reducer, initValue)

  const len = arr.length
  let i = 0
  let res = initValue

  for (; i < len; i++) {
    res = reducer(res, arr[i], i, arr)
  }

  return res
}
