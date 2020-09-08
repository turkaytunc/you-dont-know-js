# Book-3

## :pencil: Index

- [this keyword in lexical scope](#this-keyword-in-lexical-scope)
- [Duplicate object using JSON parse-stringify](#Duplicate-object-using-JSON-parse-stringify)
- [Duplicate object using assign method](#Duplicate-object-using-assign-method)

## this keyword in lexical scope

```js
// WITH ARROW FUNCTION
function foo() {
  setTimeout(() => {
    // `this` here is lexically inherited from `foo()`
    console.log(this.a);
  }, 100);
}
var obj = {
  a: 2,
};
foo.call(obj); // 2
```

```js
// WITH SELF=THIS TRICK
function foo() {
  var self = this; // lexical capture of `this`
  setTimeout(function () {
    console.log(self.a);
  }, 100);
}
var obj = {
  a: 2,
};
foo.call(obj); // 2
```

## Duplicate object using JSON parse-stringify

```js
var newObj = JSON.parse(JSON.stringify(someObj));
```

## Duplicate object using assign method

```js
var newObj = Object.assign({}, myObject);
```
