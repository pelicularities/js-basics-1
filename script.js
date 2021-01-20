const x = 5.25;
console.log('The value of x is', x);

let y = 'Hello!';
console.log('The value of y is', y);

var z = true;
console.log('The value of z is', z);

const sum = x + 15;
console.log('The value of sum is', sum);

const bodyClass = document.body.className;
console.log('The value of bodyClass is', bodyClass);

document.body.className = 'loading';
console.log('The value of bodyClass is', bodyClass);

const randomNumber = Math.random();
console.log('The value of randomNumber is', randomNumber);

const mainElement = document.querySelector('main');
const mainClass = mainElement.className;
console.log('The value of mainClass is ', mainClass);

const hello = () => {
  alert('Hello, world!');
  console.log('I am the hello function');
}

hello();

const hi = name => {
  return `Hi, ${name}!`;
}

console.log(hi('Grace'));
console.log(hi('everyone'));

const add = (num1, num2) => num1 + num2;
const random5 = () => Math.ceil(Math.random() * 5);