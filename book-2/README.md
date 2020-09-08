# Book-2

## :pencil: Index

- [Closure](#Closure)

## Closure

```js
function foo() {
  var a = 2;
  function baz() {
    console.log(a); // 2
  }
  bar(baz);
}
function bar(fn) {
  fn(); // closure!
}
```
