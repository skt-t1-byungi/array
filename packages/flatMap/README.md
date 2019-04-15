# @skt-t1-byungi/array-flat-map
`flatMap()` for old browser, in typescript.

## Example
```js
flatMap([1, 2], x => [x, x * 2])
// => [1, 2, 2, 4]
```

## flatMap(array, mapper, [thisArg])
### array
Target array.

### mapper
Function that produces an element of the new Array.

### thisArg
Value to use as this when executing callback.

## License
MIT
