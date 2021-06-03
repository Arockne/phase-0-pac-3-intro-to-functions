// Follow along with the examples here
//console.log("Hello, world!");

function doNothing() {}

function sayHello() {
  console.log('Hello!');
}
//sayHello();

function sayHelloToIsabel() {
  console.log('Hello, Isabel!');
}
//sayHelloToIsabel();

function sayHelloToBrendan() {
  console.log('Hello, brendan');
}
//sayHelloToBrendan();

function doSomething(thing) {
  console.log(thing);
}

//doSomething("Hello!");

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

//sayHelloTo('Daniel');
//console.log(firstName);

function say(greeting, firstName) {
  console.log('I was called');
  return`${greeting}, ${firstName}!`;
}

console.log(say('Goodbye', 'Julio'));

function add(x, y) {
  return x + y;
}
console.log('Add:',add(80, 9000));

//multiply
function multiply(a, b) {
  return a * b;
}
//division
function divide(a, b) {
  return a / b;
}
//subraction
function subract(a, b) {
  return a - b;
}

function calculator(a, b, operator) {
  switch(operator) {
    case '+':
      return add(a, b);
    case '-':
      return subract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'WAT';
  }
}

console.log(`0: ${calculator(1, 1, '-')}`);
console.log(`2: ${calculator(1, 1, '+')}`);
console.log(`24: ${calculator(12, 2, '*')}`);
console.log(`10: ${calculator(100, 10, '/')}`);

let rain = {
  a: 'some',
  b: () => Object.is(rain, {a: this.a, b: this.b})
}

console.log(rain.b());