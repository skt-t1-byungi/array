type ForEachCallback<T> = (value: T, index: number, array: T[]) => void

export = function forEach<T> (arr: T[], callback: ForEachCallback<T>) {
  if (arr.forEach) return arr.forEach(callback)

  const len = arr.length

  for (let i = 0; i < len; i++) callback(arr[i], i, arr)
}
