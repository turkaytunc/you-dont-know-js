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

```js
function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}
wait('Hello, closure!');
```

```js
//dont use loops with closures
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
```
