// ------------ Exercise 1: Variables and values --------------
console.log('EXERCISE 1:');

// Using const, define a variable called x with the value 5.25
const x = 5.25;

// Log it to the console using console.log('The value of x is', x)
console.log('The value of x is', x);

// Using let, define a variable called y with the value 'Hello!'
let y = 'Hello!';

// Log it to the console
console.log('The value of y is', y);

// Using var, define a variable called z with the value true
var z = true;

// Log it to the console
console.log('The value of z is', z);

// Define a variable called sum with the value of x plus 15
const sum = x + 15;

// Log it to the console
console.log('The value of sum is', sum);

// Define a variable called bodyClass with the value of document.body.className
const bodyClass = document.body.className;

// Log it to the console
console.log('bodyClass is', bodyClass);

// Change document.body.className to "loading"
document.body.className = 'loading';

// Log the value of bodyClass to the console again
console.log('bodyClass is', bodyClass);

// Define a variable called randomNumber with the value of Math.random()
const randomNumber = Math.random();

// Log it to the console
console.log('randomNumber is', randomNumber);

// Define a variable called mainClass to store the className of the main element on the page
const mainClass = document.querySelector('main').className;

// Log it to the console
console.log('mainClass is', mainClass);

// ------------ Exercise 2: Functions ------------------------
console.log('EXERICSE 2:');

// Define a function hello that displays an alert with the message "Hello,
// world!"
// Update the hello function to console.log a message ("I am the hello
// function") after displaying the alert.
let hello = () => {
    alert('Hello, world!');
    console.log('I am the hello function');
}

// Invoke it to verify that it works
hello();

// Define a function hi that takes a single argument name and returns the
// string "Hi, <name>!".
const hi = name => "Hi, " + name + "!";

// Log the output of the hi function to the console
console.log('hi function says:', hi('John'));
console.log('hi function says:', hi('Ben'));

// Define a function add that takes two arguments: num1 and num2 and returns
// the sum of num1 and num2
function add(num1, num2) {
    return num1 + num2;
}

console.log('add:', add(10, 20));
console.log('add:', add(-1, 5));
console.log('add:', add(0.5, 0.6));
console.log('add:', add(9, 5));

// Define a function random5 that does not take any arguments and returns a
// random number between 1 and 5 (no decimals)
// Hint: Multiply Math.random() by 5 and then use Math.round() or Math.ceil()
const random5 = () => {
    const randomNumber = Math.random();
    return Math.ceil(randomNumber * 5);
}

console.log('random5:', random5());
console.log('random5:', random5());
console.log('random5:', random5());
console.log('random5:', random5());
console.log('random5:', random5());
