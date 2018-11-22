type Finder<T> = (value: T, index: number, array: T[]) => boolean

export = function find<T> (arr: T[], finder: Finder<T>) {
    if (arr.find) return arr.find(finder)

    const len = arr.length

    for (let i = 0; i < len; i++) {
      const val = arr[i]
      if (finder(val, i, arr)) return val
  }
}
