# Book-4 Types & Grammar

## :pencil: Index

- [Numbers](#Numbers)
  - [Hexadecimal numbers](#Hexadecimal-numbers)
  - [Expotential numbers](#Expotential-numbers)
  - [Octal numbers](#Octal-numbers)
  - [Binary numbers](#Binary-numbers)
  - [Comparing floating-point numbers using epsilon](#Comparing-floating-point-numbers-using-epsilon)
  - [isInteger](#isInteger)
  - [integer safe range](#integer-safe-range)
  - [isNaN](#isNaN)
  - [INFINITY](#INFINITY)
- [Natives String](#Natives-String)
- [Internal classification of some types](#Internal-classification-of-some-types)
- [Boxing wrapper](#Boxing-wrapper)
- [Unboxing](#Unboxing)
- [truncate number](#truncate-number)
- [double negate](#double-negate)
- [Logical or logical and](#Logical-or-logical-and)
- [Window escape](#Window-escape)

## Numbers

## Hexadecimal numbers

```js
0xf3; // hexadecimal for: 243
```

## Expotential numbers

```js
var a = 5e10;
a; // 50000000000
a.toExponential(); // "5e+10"

var onethousand = 1e3; // means 1 * 10^3
var onemilliononehundredthousand = 1.1e6; // means 1.1 * 10^6
```

## Octal numbers

```js
0o363; // octal for: 243
```

## Binary numbers

```js
0b11110011; // binary for: 243
```

## Comparing floating-point numbers using epsilon

```js
function numbersCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}
var a = 0.1 + 0.2;
var b = 0.3;
```

## isInteger

```js
Number.isInteger(42); // true
Number.isInteger(42.0); // true
Number.isInteger(42.3); // false
```

## integer safe range

```js
Number.isSafeInteger(Number.MAX_SAFE_INTEGER); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
```

## isNaN

```js
var a = 2 / 'foo';
var b = 'foo';
Number.isNaN(a); // true
Number.isNaN(b); // false--phew!
```

## INFINITY

```js
var a = 1 / 0; // Infinity
var b = -1 / 0; // -Infinity
```

## Natives String

```js
var a = new String('abc');
typeof a; // "object" ... not "String"
a instanceof String; // true
Object.prototype.toString.call(a); // "[object String]"
```

## Internal classification of some types

```js
Object.prototype.toString.call([1, 2, 3]); // "[object Array]"

Object.prototype.toString.call(/regex-literal/i); // "[object RegExp]"

Object.prototype.toString.call(null); // "[object Null]"

Object.prototype.toString.call(undefined); // "[object Undefined]"

Object.prototype.toString.call('abc'); // "[object String]"

Object.prototype.toString.call(42); // "[object Number]"

Object.prototype.toString.call(true); // "[object Boolean]"
```

## Boxing wrapper

```js
var a = 'abc';
var b = new String(a);
var c = Object(a);
typeof a; // "string"
typeof b; // "object"
typeof c; // "object"
b instanceof String; // true
c instanceof String; // true
Object.prototype.toString.call(b); // "[object String]"
Object.prototype.toString.call(c); // "[object String]"
```

## Unboxing

```js
var a = new String('abc');
var b = new Number(42);
var c = new Boolean(true);
a.valueOf(); // "abc"
b.valueOf(); // 42
c.valueOf(); // true
```

## Object-Function-RegExp optional constructors

```js
var c = new Object();
c.foo = 'bar';
c; // { foo: "bar" }

var d = { foo: 'bar' };
d; // { foo: "bar" }

var e = new Function('a', 'return a * 2;');

var f = function (a) {
  return a * 2;
};

function g(a) {
  return a * 2;
}

var h = new RegExp('^a*b+', 'g');
var i = /^a*b+/g;
```

## truncate number

```js
~~1e20 / 10; // 166199296
1e20 | (0 / 10); // 1661992960
(1e20 | 0) / 10; // 166199296
```

## double negate

```js
var a = '0';
var b = [];
var c = {};
var d = '';
var e = 0;
var f = null;
var g;
!!a; // true
!!b; // true
!!c; // true
!!d; // false
!!e; // false
!!f; // false
!!g; // false
```

## Logical or logical and

```js
var a = 42;
var b = 'abc';
var c = null;
a || b; // 42
a && b; // "abc"
c || b; // "abc"
c && b; // null
```

## Window escape

```js
window.escape( "?foo=97%&bar=3%" ) produces "%3Ffoo%3D97%25%26bar%3D3%25".
```
