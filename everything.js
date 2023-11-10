console.log('I like pizza');
console.log('burger');

// This adds an allert to a page
window.alert("I really love food!");

//This is how you comment

/* This is 
a multi line
comment
*/


// Next Lesson
// Variables javascript


// Declare a variable
// let age;
// Assignment
// age = 21;
// All in one Variable
let firstName = 'Arnas'; //strings

let age = 21; //numbers

let student = false; //boolean

age = age + 1;

console.log("Hello", firstName);
console.log('You are', age, 'years old');
console.log('Enrolled', student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You're " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled - " + student;

// Next Lesson
/*
    Arithmetic expression is a combination of...
    operands (values, variables, etc.)
    operators (+ - * / %)
    that can be evaluated to a value
    ex. y = x + 5;
*/

let students = 20;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// extraStudents = students % 3;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;


console.log(extraStudents);

// Next Lesson
// User input


// EASY WAY with a window prompt

// let username = window.prompt("What's your name?");

// console.log(username);

// DIFFICULT WAY HTML textbox
let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}

// Next Lesson
// Type Conversation = change the datatype of a value to another (strings, bool, values)

/* let age = window.prompt('How old are you?');

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy bday, you are", age, "years old")
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// Next Lesson
// const = a variable that cannot be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;

console.log('the circumference is:', circumference);

// Next Lesson
// Math

let x;
let y = 5;
let z = 9;
let maximum;
let minimum;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);
x = Math.PI;

console.log(x);

// Next Lesson
