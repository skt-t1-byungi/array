# @skt-t1-byungi/array-reduce
`reduce()` for old browser, in typescript.

## Example
```js
reduce([1, 2, 3], (acc, v) => acc + v, 0)
// => 6
```

## reduce(array, reducer, initValue)
### array
Target array.

### reducer
Function to execute on each element in the array. accumulates return values.

### initValue
Value to use as the first argument to the first call.

## License
MIT