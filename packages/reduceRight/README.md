# @skt-t1-byungi/array-reduce-right
`reduceRight()` for old browser, in typescript.

## Example
```js
const reducer = (acc, v) => {
  console.log(v)
  return acc + v
}
reduceRight([1, 2, 3], reducer, 0)
// 3
// 2
// 1
// => 6
```

## reduceRight(array, reducer, initValue)
### array
Target array.

### reducer
Function to execute on each element in the array. accumulates return values.

### initValue
Value to use as the first argument to the first call.

## License
MIT