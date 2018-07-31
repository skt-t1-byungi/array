export = function flat<T> (arr: Array<T | T[]>, depth= 1): Array<T | T[]> {
  const len = arr.length
  const res = []

  for (let i = 0; i < len; i++) {
    const val = arr[i]

    if (val instanceof Array && depth > 0) {
      res.push(...flat(val, depth - 1))
    } else if (val !== undefined && val !== null) {
      res.push(val)
    }
  }

  return res
}
