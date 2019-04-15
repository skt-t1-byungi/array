# @skt-t1-byungi/array-filter
`filter()` for old browser, in typescript.

## Example
```js
filter([1, 2, 3], x => x < 2)
// => [1, 2]
```

## filter(array, filterer, [thisArg])
### array
Target array.

### filterer
Function is a predicate, to test each element.

### thisArg
Value to use as this when executing callback.

## License
MIT
