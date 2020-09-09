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
