# @skt-t1-byungi/array-some
`some()` for old browser, in typescript.

## Example
```js
some([1, 2, 3], x => x === 3)
// => true

some([1, 2, 3], x => x > 3)
// => false
```

## some(array, tester, [thisArg])
### array
Target array.

### tester
Function to test for each element.

### thisArg
Value to use as this when executing callback.

## License
MIT
