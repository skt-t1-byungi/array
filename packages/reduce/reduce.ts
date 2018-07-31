type Reducer<T,U> = (prev: U, value: T, index: number, array: T[]) => U

function reduce<T> (arr: T[], reducer: Reducer<T,T>): T
function reduce<T,U> (arr: T[], reducer: Reducer<T,U>, initValue: U): U
function reduce<T,U> (arr: T[], reducer: Reducer<T,U>, initValue ?: U) {
  if (arr.reduce) {
    if (arguments.length === 2) return arr.reduce(reducer as any)
    return arr.reduce(reducer, initValue as U)
  }

  const len = arr.length
  let i = 0
  let res = arguments.length === 2 ? arr[i++] : initValue

  for (; i < len; i++) {
    res = reducer(res as U, arr[i], i, arr)
  }

  return res
}

export = reduce
