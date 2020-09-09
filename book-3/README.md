# Book-3 this & Object Prototypes

## :pencil: Index

- [this keyword in lexical scope](#this-keyword-in-lexical-scope)
- [Duplicate object using JSON parse-stringify](#Duplicate-object-using-JSON-parse-stringify)
- [Duplicate object using assign method](#Duplicate-object-using-assign-method)
- [hasOwnProperty and in](#hasOwnProperty-and-in)
- [Array iterator](#Array-iterator)
- [Object create method](#Object-create-method)
- [concise method declarations](#concise-method-declarations)

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

## Object create method

```js
var anotherObject = {
  a: 2,
};
var myObject = Object.create(anotherObject, {
  b: {
    enumerable: false,
    writable: true,
    configurable: false,
    value: 3,
  },
  c: {
    enumerable: true,
    writable: false,
    configurable: false,
    value: 4,
  },
});
myObject.hasOwnProperty('a'); // false
myObject.hasOwnProperty('b'); // true
myObject.hasOwnProperty('c'); // true
myObject.a; // 2
myObject.b; // 3
myObject.c; // 4
```

## concise method declarations

```js
var LoginController = {
  errors: [],
  getUser() {
    // Look ma, no `function`!
    // ...
  },
  getPassword() {
    // ...
  },
  // ...
};
```
