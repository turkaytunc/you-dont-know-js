# Book-3

## :pencil: Index

- [this keyword in lexical scope](#this-keyword-in-lexical-scope)
- [Duplicate object using JSON parse-stringify](#Duplicate-object-using-JSON-parse-stringify)
- [Duplicate object using assign method](#Duplicate-object-using-assign-method)
- [hasOwnProperty and in](#hasOwnProperty-and-in)
- [Array iterator](#Array-iterator)

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

## hasOwnProperty and in

```js
var myObject = {
  a: 2,
};
'a' in myObject; // true
'b' in myObject; // false
myObject.hasOwnProperty('a'); // true
myObject.hasOwnProperty('b'); // false
```

## Array iterator

```js
var myArray = [1, 2, 3];
var it = myArray[Symbol.iterator]();
it.next(); // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { done:true }
```
