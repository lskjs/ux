

```js
class A {
  name = 111;
  constructor(props) {
    Object.assign(this, props);
  }
}
class B extends A {
  name = 333;
  constructor(props) {
    super(props);
    Object.assign(this, props);
  }
}
class C extends A {
  name = 333;
}
console.log('A.name === 111', new A());
console.log('A.name === 222', new A({ name: 222 }));
console.log('B.name === 333', new B());
console.log('B.name === 444', new B({ name: 444 }));
console.log('C.name === 333', new C());
console.log('C.name === 333', new C({ name: 444 })); 
```