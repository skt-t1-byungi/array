type Reducer<T,U> = (prev: U, value: T, index: number, array: T[]) => U

function reduceRight<T,U> (arr: T[], reducer: Reducer<T,U>, initValue: U) {
  if (arr.reduceRight) return arr.reduceRight(reducer, initValue as U)

  const len = arr.length
  let i = len
  let res = initValue

  while (i--) {
    res = reducer(res, arr[i], i, arr)
  }

  return res
}

export = reduceRight
