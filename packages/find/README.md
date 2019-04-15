# @skt-t1-byungi/array-find
`find()` for old browser, in typescript.

## Example
```js
find([1, 2, 3, 4], x => x % 2 === 0)
// => 2
```

## find(array, finder, [thisArg])
### array
Target array.

### finder
Function is a predicate, to test each element.

### thisArg
Value to use as this when executing callback.

## License
MIT
