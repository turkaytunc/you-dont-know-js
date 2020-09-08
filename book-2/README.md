# Book-2

## :pencil: Index

- [Closure](#Closure)
- [Modules](#Modules)

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

// solving problem above using IIFE

for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

## Modules

```js
var foo = (function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(' ! '));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
})();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```
