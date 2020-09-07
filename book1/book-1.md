# Book-1

## :pencil: Index

- [Object create](#Object-create)

## Object create

```js
var foo = {
  a: 42,
};
// create `bar` and link it to `foo`
var bar = Object.create(foo);
bar.b = 'hello world';
bar.b; // "hello world"
bar.a; // 42 <-- delegated to `foo`
```
