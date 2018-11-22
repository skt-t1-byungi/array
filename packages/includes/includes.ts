export = function includes <T> (arr: T[], search: T, from: number= 0) {
    if (arr.includes) return arr.includes(search, from)

    const len = arr.length
    if (from < 0) from = len + from
    const tester = isNanNumber(search) ? isNanNumber : (v: T) => v === search

    for (let i = from; i < len; i++) {
        if (tester(arr[i])) return true
    }

    return false
}

function isNanNumber (x: any) { return x !== x }
