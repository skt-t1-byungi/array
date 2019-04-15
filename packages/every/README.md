# @skt-t1-byungi/array-every
`every()` for old browser, in typescript.

## Example
```js
every([1, 2, 3], x => x < 4)
// => true

every([1, 2, 3], x => x < 3)
// => false
```

## every(array, tester, [thisArg])
### array
Target array.

### tester
Function to test for each element.

### thisArg
Value to use as this when executing callback.

## License
MIT
