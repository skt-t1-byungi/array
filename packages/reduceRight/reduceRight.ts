type Reducer<T,U> = (prev: U, value: T, index: number, array: T[]) => U

function reduceRight<T> (arr: T[], reducer: Reducer<T,T>): T
function reduceRight<T,U> (arr: T[], reducer: Reducer<T,U>, initValue: U): U
function reduceRight<T,U> (arr: T[], reducer: Reducer<T,U>, initValue ?: U) {
  if (arr.reduceRight) {
    if (arguments.length === 2) return arr.reduceRight(reducer as any)
    return arr.reduceRight(reducer, initValue as U)
  }

  const len = arr.length
  let i = len
  let res = arguments.length === 2 ? arr[--i] : initValue

  while (i--) {
    res = reducer(res as U, arr[i], i, arr)
  }

  return res
}

export = reduceRight
