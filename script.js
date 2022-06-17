// var firstName = "ishaq";
// firstName = "izo";
// console.log(firstName);

// var $3years = 3;

// console.log($3years);

// var job, isMarried;
// job = "developer";
// isMarried = false;
// age = "twenty eight";
// alert(firstName + " is a " + job + "," + age + " " + isMarried + " .");

// ----- variable mutation

// ========
/* Basic operators */
/* var year, yearIshaq, yearBob;
year = 2022;
var ageIshaq = 24;
var ageBob = 22;
yearIshaq = year - ageIshaq;
yearBob = year - ageBob;
// math operator
console.log(yearIshaq / 2);

// loogical operators
var ishaqOlder = ageIshaq > ageBob;
console.log(ishaqOlder);

// typeOf operator
console.log(typeof ishaqOlder);
console.log(typeof yearIshaq);
console.log(typeof "Ishaq is older than bob");
var x;
console.log(typeof x);
*/

/* Operator precedence */

/* var now = 2022;
yearIshaq = 1998;
fullAge = 24;

var isFullAge = now - yearIshaq >= fullAge;

console.log(isFullAge);
 */
/* challenge 1 */

/* var markMass, johnMass, markHeight, johnHeight;
var kg, meter;
kg = 80;
meter = 1.6;

markMass = kg * 6;
johnMass = kg * 5;
markHeight = meter;
johnHeight = meter + 10;

var BMI = kg / (meter * meter);

var calcBmiMark = markMass / (markHeight * markHeight);
console.log(calcBmiMark);
var calcBmiJohn = johnMass / (johnHeight * johnHeight);
console.log(calcBmiJohn);
var calc = calcBmiMark > calcBmiJohn;
console.log(` is mark higher than john ? => ${calc} `); */

// let num = 3;
/* if (num > 0) {
  console.log(`${num} is a positive number  `);
} else {
  console.log(`${num} is a negative number `);
}

 */
// ternary operator
/* let num = 3;

calc = num >= 0 ? "positive" : "negative";
console.log(calc);
 */

// switch statement

/* let job = "software_engineer";

switch (job) {
  case "software_engineer":
    console.log(`${job} is a technical person`);
    break;
  default:
    console.log(`${job} is a teacher`);
}
 */

// coding challenges

// let scoreJohn = (89 + 120 + 103) / 3;
// let scoreMike = (116 + 94 + 123) / 3;
// let scoreMary = (97 + 134 + 105) / 3;
/* console.log(scoreJohn, scoreMike, scoreMary);
if (scoreJohn > scoreMike) {
  console.log(`John's team wins with ${scoreJohn} points`);
} else if (scoreMike > scoreJohn) {
  console.log(`Mike's team wins with ${scoreMike} points`);
} else {
  console.log(`There is a draw`);
} */
/* 
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log(`John's team wins with ${scoreJohn} points`);
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log(`Mike's team wins with ${scoreMike} points`);
} else if (scoreMary > scoreMike && scoreMary > scoreJohn) {
  console.log(`Mary's team wins with ${scoreMary} points`);
} else {
  console.log(`There is a draw`);
}
 */

/* ==============  30-Days-Of-Javascript-Code ======== */

//----- day 1 challenge ;

// ----- day 2 challenge ;
// Exercise 1

/* let challenge = "30 Days Of Javascript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(2, 5));
console.log(challenge.substr(2));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon");
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("j"));
console.log(challenge.match("a"));
console.log(challenge.repeat(2));
//Exercise 2
let quote =
  "There is no exercise better for the heart than reaching down and lifting people up.";
console.log(quote);
console.log(typeof 10);
let num = 100;
console.log(Math.ceil(num));
num = Math.random();
console.log(num * 100);
//Exercise 3

let sentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let total = Number(5000 + 15000 + 10000);
total;
console.log(total); */

// Day 2 Challenges
/* let firstName = "Issac";
let lastName = "ZE";
let country = "alg";
let city = " bs";
let age = 42.6;
let isMarried = true;
let year = 1980;
console.log(typeof firstName); */

/* let num = prompt("required text", "optional text");
console.log(num);
 */

// day 3 Challenge

// Exercise 1

/* et userInput = prompt("Enter your age.!");
let age = userInput >= 18;
if (age) {
  console.log("You ara old enough to drive ");
} else console.log("Sarting to wait for being 18 years old boy");
 */
/* let student = prompt("What is your rate boy?");
let gradeF = 0 <= student && student <= 49;
let gradeA = 50 <= student && student <= 100;

switch (true) {
  case gradeF:
    console.log("your grade is F");
    break;
  case gradeA:
    console.log("your grade is A");
    break;
  default:
    console.log("you are not a student in the class");
    break;
} */
/* let qa = prompt("Enter your age?");
let calcAge1 = 2022 - qa;
let calcAge2 = 2022 - qa;
console.log(calcAge1);
switch (true) {
  case calcAge1 > calcAge2:
    console.log(`you're   years old me`);
    break;
  case calcAge2 > calcAge1:
    console.log("you are 6 years yonger than me");
    break;
  default:
    console.log("please enter the right age!!");
    break;
}
 */

// Day 5 challenges Arrays

// Exercise 1

/* let emptyArr = Array();
console.log(emptyArr);
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
console.log(arr[0], arr[2]);
let lastItem = arr.length - 1;
console.log(lastItem);

const itCompanies = ["Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.indexOf("Apple"));
console.log(itCompanies.toString());
console.log(`${itCompanies} are big IT companies`);
if (itCompanies.includes("Apple")) {
  console.log(`Apple`);
} else {
  console.log(`company not found`);
}
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(3, itCompanies.length));
console.log(itCompanies.shift());
console.log(itCompanies.pop());
console.log(itCompanies.splice(0, itCompanies.length));
 */
// Exercice 3

// day 6 loops
// Exercise 1
/* 
for (let i = 0; i <= 10; i++) {
  console.log(i);
} */
/* let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
 */
/* let item = 0;
do {
  console.log(item);
  item++;
} while (item < 7);
 */

/* const pattern = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (const pat of pattern) {
  console.log(pat ** 2);
  sum += pat;
}
console.log(sum);
 */
//Day 7 Functions
/* - Functions declaration
   - Functions Expression
   - anonymous function
   - Arrow Function 
 */

// F D
/* function mySum(nOne, nTwo) {
  let sum = nOne + nTwo;
  return sum;
}
console.log(mySum(4, 2));
 */
/* function multiArrValues(arr) {
  let multi = 1;
  for (let i = 0; i < arr.length; i++) {
    multi *= arr[i];
  }
  return multi;
}
const num = [5, 6, 7, 8, 9];
console.log(multiArrValues(num));
 */
/* function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAllNums(1, 4, 6, 6));
 */
// Anonymous function
/* const anonymousFunction = function () {
  console.log("I am an anonymous function");
};
anonymousFunction();

// Expression function
const square = function (n) {
  return n * n;
};
console.log(square(2));
// self invoking functions
// Arrow function
const squar = (n) => {
  return n + n;
};
console.log(squar(3));
const sq = (n) => n + n;
console.log(sq(5));
 */

/* function fullName(firstName, lastName) {
  return console.log("ishaq", "zinelabidine");
}
fullName();
 */
// ---- Ecercises 1

/* function fullName(fName, lName) {
  return fName + lName;
}
console.log(fullName("issac", "dev")); */

/* function fullNumber(fNumber, lNumber) {
  let sum = 0;
  return (sum += fNumber + lNumber);
}
console.log(fullNumber(22, 3));
 */
/* function calcArea(length, width) {
  let sum = length * width;
  return sum;
}
console.log(calcArea(22, 3)); */
/* const perimeter = (length, width) => 2 * (length + width);
console.log(perimeter(10, 2));
const volume = (length, width, height) => length * width * height;
console.log(volume(10, 2, 3)); */

// ------ Day - 8 objects

// ----- Excersices 1
/* const dog = {};
console.log(dog);
 */
/* const dog = {
  legs: 4,
  color: "red and black",
  age: 11,
  bark: function () {
    return "woof woof";
  },
};
console.log(dog);
console.log(dog.legs, dog.age, dog.color, dog["bark"]);
dog.breed = "All Breeds";
dog.getDogInfo = "it's name is Liza";

console.log(dog); */

// ======== js full Course from === Bro Code ===//

// How to accept user input
// Easy way with a window prompt

/* let username = window.prompt("what's your name?");
console.log(username); */

// Difficult way HTML textbox
/* let username;

document.getElementById("myButton").onclick() = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello " + username;
}; */

//-======= const = a variable that can't be chenged

/* const pi = 3.14159;
let radius;
let circumference;
radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log("the circunference is:", circumference); */

//==== advenced method to find Hypotenuse
/* document.getElementById("submitButton").onclick = function () {
  a = document.getElementById("aTextBox").value;
  a = Number(a);

  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("cLabel").innerHTML = "Side c: " + c;
};
 */
//======= counter program=====
/* let count = 0;
document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
}; */

//======= usefull string properties & methods=====
/* let userName = "Issac Code";
let phoneNumber = "123-345-5432";
console.log(userName.length);
console.log(userName.charAt(4));
console.log(userName.indexOf("o"));
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

console.log(userName.indexOf(" "));
console.log(userName.slice("0", userName.indexOf(" ")));
console.log(userName.slice(userName.indexOf(" ") + 1));

phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);
 */
// ------ method chaining = calling one method after another
//              in on continuous line of code

/* let userName = "izak";

let letter = userName.charAt(0).toUpperCase();
console.log(letter); */

// ==== switch = statment that examines a value for a match against many case clauses
//            More efficient that many 'else if' statments

// ===== && And(Both conditions must be true to return true)
//        || OR (Either conditions can be true )
//       ! Not logical operator
/* let temp = 15;
let sunny = false;
if (temp > 0 && temp < 30 && sunny !== false) {
  console.log("The weather is good!");
} else {
  console.log("The weather is bad!");
} */

//====== Day 9 ========
// EX1 ===========
/*
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
const eachCountry = countries.map((country) =>
  console.log(country.toUpperCase())
);
names.forEach((name) => console.log(name));
const eachCountr = countries.map((country) => console.log(country.length));
*/

// ===== While loop = repeat some code
//        while some condition is true potentially infinite
/* let userName = "";
while (userName == "" || userName == null) {
  userName = window.prompt("Enter your name");
}
console.log("Hello", userName); */
// ===== Do While loop = do sth then check the
//         condition is repeat if condition is truelet userName = "";
/* let userName;
do {
  userName = window.prompt("Enter your name");
} while (userName == "" || userName == null);

console.log("Hello", userName);
 */

// ====== for loop = repeat some code a certain amount of times

/* for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Happe New Year Ishaq zinelabidine"); */
// ====== Nested loop =  a loop inside another loop
/* let symbol = window.prompt("Enter A symbol to use ");
let rows = window.prompt("Enter # of Rows");
let columns = window.prompt("Enter # of columns");

for (let i = 1; i < rows; i += 1) {
  for (let j = 1; j < columns; j += 1) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
} */

//==== Function = Define once, and use it many times.
//       To perform some code, call the function name.
//====== return =  returns a value back to the place where you invoked a function
// ===== Ternary operator = Shortcut for an if/ else statment takes 3 operands
//     condition ? exprIfTrue : exprIfFalse
/* let adult = checkAge(16);
console.log(adult);
function checkAge(age) {
  return age < 18
    ? `wait ${18 - age} years to be an adult`
    : "you are an adult";
}
 */
// ==== Variable scope = where a variable is accessible
//------- let = variable are limited to block scope {}
//------- var = variable ara limited to a function(){}

// --- global variable = is declared outsite of any function
// ---- Template literals
//======= toLocaleString() = returns a string with a language
//            sensitive representation of this number

// 'locale' = specify that language (undefined = default)
// ' options' = object with formatting options

/* let myNum = 1233456789;
 myNum = myNum.toLocaleString("de-DE");
 myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(myNum);
 */

// ===== Number Gussing Game

/* const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses += 1;
};
if (guess == answer) {
  alert(`${answer} is the #. It took you ${guesses} guess`);
} else if (guess < answer) {
  alert("Too small");
} else {
  alert("Too large!");
}
 */
// array = think of it as a variable
//    that can store mutiple values

/* let fruits = ["apple", "orange", "banana"];
//fruits[2] = "coconut"

fruits.push("lemonad"); //add an element
fruits.pop(); // remove the last element in an arr
fruits.unshift("mongo"); //add element at the beginning
fruits.shift(); // remove first element
console.log(fruits.length); */

// ===== loop throough an array
/* let prices = [5, 10, 15, 20, 25, 30];
for (let i = prices.length - 1; i >= 0; i -= 1) {
  console.log(prices[i]);
}
// --- additional way to iterate through an arrau
for (let price of prices) {
  console.log(price);
} */
//---=== sorting an arr of strings
/* let fruits = ["apple", "orange", "banana"];
console.log(fruits.sort().reverse()); */

//==== Day3//=====  2D array = An Array of arrays

//======= spread operator = allows an iterable such as array or string to be
//  ...       expanded in places where zero or more arguments
//         are expected (unpacksthe elements)
/* let userName = "issac zi";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...userName);
let maximum = Math.max(...numbers);

console.log(maximum); */
/* let fruits = ["apple", "orange", "banana"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
fruits.push(...numbers);
console.log(...fruits); */
//============================ important subject start here ===========
// ===== rest parameters = represents an indefinite number
//    ...                 of parameters(packs arguments into an array)

/* let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
console.log(sum(a, b, c, d, e));
function sum(x, y, ...numbers) {
  let total = 0 + x; 
  for (let number of numbers) {
    total += number;
  }
  return total;
}
 */
//========= Callback = a function passed as an argument
//                   to another function

// ===== array.forEach() = executes a provided callback function
//   once for each array element

/* let students = ["spongebob", "patrick", "supernamn"];
students.forEach(capitalize);
students.forEach(print);
function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element) {
  console.log(element);
}
 */
// ===== array.map() = executes a provided callback function
//   once for each array element And create a new array
/* let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.map(square));
function square(element) {
  return Math.pow(element, 2);
}
function cube(element) {
  return Math.pow(element, 3);
}
console.log(numbers.map(cube));
 */
// .map()
// const newArray = values.map(value => value)
const ages2021 = [20, 22, 24, 28, 61, 62];

const ages2022 = ages2021.map((age) => age + 1);
console.log(ages2022);
// ===== array.filter() = creates a new array with all elements
//     that pass the best provided by a function
/* let ages = [18, 16, 21, 17, 19, 80];
let adults = ages.filter(checkAge);

adults.forEach(print);
console.log(adults);
function checkAge(element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}
 */
// ===== array.reduce() = reduces an array to a single value
/* let prices = [5, 10, 15, 20, 25, 30];

let total = prices.reduce(checkOut);
console.log(`the total is $${total}`);

function checkOut(total, element) {
  return total + element;
}
 */
//-==== Function expression = function without a name (anonymous function)
//     avoid polluting the global scope with names write it, then forget about it
/* const greeting = function () {
  console.log("Hello!");
};
greeting();
greeting(); */
// ==== Arrow function = compact alternative to a traditional function expression
//   =>

/* let grades = [100, 50, 60, 90, 70];
grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element)); */

// ==== Nested Function
//===== Map = object that holds kevalue pairs of any data type
/* const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50],
]);

console.log(store.get("t-shirt"));
console.log(store.set("hat", 55));
console.log(store.has("hat"));
console.log(store.size);

store.forEach((value, key) => console.log(`${key} $ ${value}`));
 */
// ------- forEach with Ania keobow
/* let scores = [100, 50, 60, 90, 70];
scores.forEach((score) => {
  if (score <= 60) {
    return console.log(score + 2);
  } else {
    return console.log(score / 2);
  }
}); */

// .some() = checking if any of the elements arraymeet a certent rule will return true otherwise return false
/* let scores = [100, 50, 60, 90, 70];
console.log(scores.some((score) => score < 40)); */

// DAy 27/05/2022 review js basics 

// ==== .filter() === created a new array
/* const shows = [
  {
    name: "Lamin",
    series: 1,
    episodes: 20,
  },
  {
    name: "Tomas Chellby",
    series: 5,
    episodes: 50,
  },
  {
    name: "Rola .rozaa",
    series: 3,
    episodes: 10,
  },
];
checkSeries = shows.filter((show) => show.series > 2);
console.log(checkSeries); */
// .reduce() =
//arrName.reduce(accumulator, currentValue) => accumulator + currentValue)
/* const scores = [2, 5, 7, 9];

const total = scores.reduce((totalScore, score) => totalScore + score);
console.log(total); */

/* const costs = [44, 5, 6, 2];
const total = costs.reduce((totalCost, cost) => totalCost - cost);
console.log(total); */
// ===== .every() = it's a javascript method tests weather all element
//       in the array passed the test implemented by the function it returns a boolean value
//   if everything in our array matches a rule, return true

/* let testResults = [100, 50, 60, 90, 70, 33, 23];
console.log(testResults.every((result) => result > 20));
const animals = ["cat", "dog", "rat", "mouse"];

const checkAnimals = animals.every((animal) => animal.length == 3);
console.log(checkAnimals);
 */
// ===== .split() =
/* const sentence = "Common baby light my fire";
// get the third word for the sentence using code

const word = sentence.split(" ")[2];
console.log(word); */

//====  Array Work Exercises
//==++++++++++++
//=+++++++++++++++++++++++
//  === EX1
/* const degrees = [23, 140, 212, 41];
function getCelcius() {
  return degrees.map((degree) => ((degree - 32) * 5) / 9);
}
console.log(getCelcius()); */
// === EX2
/* const arr = [11, NaN, [], "Angels"];
function checkForFalsey() {
  return arr.some((value) => value === NaN || [] || null || undefined || 0);
}
console.log(checkForFalsey()); */
// ==== EX3

/* const arr = ["Rabbit", "Football", "Cracking"];
function getTotal() {
  // return arr.toString(" ").length;
  return arr.reduce((ar, value) => ar + value).length;
}
console.log(getTotal()); */
// ==== EX4

/* let numbers = [9, 16, 81];
function checkSquares() {
  return numbers.every((num) => Math.sqrt(num) % 1 === 0);
}
console.log(checkSquares()); */
// === EX5

/* const values = ["23cm", "5.6cm", "1000cm"];
function getValues() {
  let converting = values.map((i) => parseInt(i));
  return converting;
}
console.log(getValues()); */
//== EX6
/* const sentence = "In West philadephia, born and raised";
const vowels = ["a", "e", "i", "I", "o", "u"];

function getVowelCount() {
  return sentence.split("").filter((letter) => vowels.includes(letter)).length;
}
console.log(getVowelCount(""));
 */
/* const phrase = "the queens gambit";

function capitalise() {
  return phrase
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1));
}
console.log(capitalise()); */

//++++++++++++++
//=++++++++++++++++++
//++++++++++++++++++++++++++  DOM +++++++++

// target.addEventListener(event,function)
/* const body = document.querySelector("body");
body.addEventListener("click", () => {
  console.log("clicked");
}); */

// remove eventListener
/* const circle = document.querySelector(".circle");
let height = 0;
function toggleColor() {
  height += 50;
  circle.style.top = height + "px";
  if (height > 300) {
    circle.removeEventListener("click", toggleColor);
  }
}
circle.addEventListener("click", toggleColor); */
/ ======= querySelector && querySelectorAll
//===== Math.randome() && Math.floor(), && Math.ceil(); && Math.round()
/* let ex = Math.random() * 5;
console.log(Math.floor(ex));
console.log(Math.ceil(ex)); */
// ===== ES6 ==== Mosh
/* const person = {
  man: "isshaq",
  walk() {},
};
person.walk();
person.man = "eee";
console.log(person); */

//==== 30 - 05 - 2022
// ==== Date js object

/* const today = new Date();
const date = today.getDay();
const fullYear = today.getFullYear();
const hours = today.getHours();
const iseString = today.toISOString();

console.log(today);
console.log(date);
console.log(fullYear);
console.log(hours);
console.log(iseString);

const elAeid = new Date("2022-07-10T17:36:53.717Z");

console.log(elAeid - today);
const millisecondes = elAeid - today;
const minutes = millisecondes / 6000;
const hour = minutes / 60;
console.log(hour); */

//+======= Times
//====== setTimeout(function, milliseconds)
/* const time = 5000;

function showtext() {
  console.log("Hello Issacdev & issaccode");
}
setTimeout(showtext, time);

const bubble = document.querySelector("#bubble");
const trengle = document.querySelector("#trengle");

function hideBublle() {
  bubble.style.display = "none";
}
setTimeout(hideBublle, 2000); */

//======== setInterval(function, milliseconds)

/* const text = "Mohamed profit of Allah";
const time = 2000;

setInterval(() => {
  console.log(text);
}, time);
 */
// ===  clearInterval() && setInretval
setInterval(() => {
  console.log(text);
}, time);
 */
// ======= clearInterval()

// ==== Ania classes  === 1/06/2022

//====== Classes
// class declaration

/* class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
const newRectangle = new Rectangle(300, 100);
console.log(newRectangle.width); */

// packman play  practice class

/* class Ghost {
  constructor(className, speed, color, startingPoint) {
    this.className = className;
    this.speed = speed;
    this.color = color;
    this.startingPoint = startingPoint;
  }
}

const blinky = new Ghost("blinky", 300, "yellow", 4);
const inky = new Ghost("inky", 250, "blue", 10);
const pinky = new Ghost("pinky", 350, "pink", 20);
const clyde = new Ghost("clyde", 450, "orange", 15);

console.log(blinky.speed); */

// keys keyboard events
/* function control(e) {
  if (e.key === "ArrowUp" || 'a') {
    console.log("pressed up");
  } else if (e.key === "ArrowDown") {
    console.log("arro pressed Down");
  }
}
document.addEventListener("keydown", control); */

// ==== Ania classes  === 1/06/2022

//====== Classes
// class declaration

/* class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
const newRectangle = new Rectangle(300, 100);
console.log(newRectangle.width); */

// packman play  practice class

/* class Ghost {
  constructor(className, speed, color, startingPoint) {
    this.className = className;
    this.speed = speed;
    this.color = color;
    this.startingPoint = startingPoint;
  }
}

const blinky = new Ghost("blinky", 300, "yellow", 4);
const inky = new Ghost("inky", 250, "blue", 10);
const pinky = new Ghost("pinky", 350, "pink", 20);
const clyde = new Ghost("clyde", 450, "orange", 15);

console.log(blinky.speed); */

// keys keyboard events
/* function control(e) {
  if (e.key === "ArrowUp" || 'a') {
    console.log("pressed up");
  } else if (e.key === "ArrowDown") {
    console.log("arro pressed Down");
  }
}
document.addEventListener("keydown", control); */

// =====
// ===== Switch case
/* const circle = document.querySelector(".circle");
function control(e) {
  let answer;
  switch (e.key) {
    case "ArrowUp":
      answer = console.log("pressed up");
      break;
    case "ArrowDown":
      answer = console.log("arro pressed Down");
      break;
  }
}
document.addEventListener("keydown", control); */

//+======== .includes()
/* const books = ["alf", "Life of Pi"];
console.log(books.includes("Eve")); */
//========= .contains()

/* const body = document.querySelector("body");
const circle = document.querySelector(".circle");

console.log(body.contains(circle)); */

// ======== .createElement() == fron js file

/* const square = document.createElement("div");
const body = document.querySelector("body");
console.log(square);

body.appendChild(square);

// === setAttribute()

image.setAttribute('src','src/images/headshot.png') */



// ===============
//+=:::::::========== Bro Code Javascript tutorial start 3;17
//====== Object = A group of properties and methods
//      properties = what an object has
//     methods = what an object can do
//  use . or []to access properties || methods
/* 
const car = {
  model: "Mercides",
  color: "black",
  year: 2023,

  drive: function () {
    console.log(`You drive the car ${this.model}`);
  },
  brake() {
    console.log("You sten on the brakes");
  },
};
car.color = "red";
changeColor = "red";
console.log(car.drive());
console.log(car.color);
 */
//==== this = reference to a particular object
//            the object depends on the immediate context
/* let name = "Izak";
console.log(this); // fine in chrome window */

// ==== class = a blueprint for creating objects
//          define what properties and methods they have
//       use a constructor for unique properties

/* class Player {
  score = 3;
  puase() {
    console.log("You paused the game");
  }
  exit() {
    console.log("You exited the game");
  }
}
const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
player1.score += 1;
console.log(player1.score);

player1.puase();
player3.score--;
console.log(player3.score); */

//== Constructor = a special method of a class,
//         accepts arguments and assigns properties

/* class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
let student1 = new Student("Sami", 22, "A");
console.log(student1.age, student1.name);

let student2 = new Student("Laura", 32, "C");
console.log(student2.age, student2.name); */

// ==== .static keyword
//  static = belongs to class, not the objects
//   properties: useful for caches, fixed-configuration
//    methods useful for utility functions

/* class Car {
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
  static startRace() {
    console.log("3...2...1...GO!");
  }
}

const car1 = new Car("Muzda");
const car2 = new Car("honday");
const car3 = new Car("toyota");

console.log(Car.numberOfCars); */

//===== inheritance = a child class can inherit all the methods and properties from another class
/* class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  name = "hawk";
  fly() {
    console.log(`This ${this.name} is flaying`);
  }
}
let know = new Rabbit();
console.log(know.name);
console.log(know.sleep());
console.log(know.eat());
const hawk = new Hawk();
console.log(hawk.name);
console.log(hawk.sleep());
console.log(hawk.fly());
 */

//=== super = Refers to the parent class.
//     Commonly used to invoke construnctor of a parent class

// ==== Getters && Setters
//== get  = binds an object property to a function when that property is accessed
//       benifits of getter = + is increases data security / + you can performe some additional logic when you access a properties

// === set = binds an object property to a function
//       when that property is assigned a value
/* class Car {
  constructor(power) {
    this._gas = 10;
    this._power = power;
  }
  get power() {
    return `${this._power}hp`;
  }
  get gas() {
    return `${(this._gas / 20) * 100} % L`;
  }
  set gas(value) {
    if (value > 3000) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}
let car = new Car(400);
car.gas = 1000000;
console.log(car.power);
console.log(car.gas); */

// ====== freecodecamp debugging snip
/* 
function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = []; 
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
 */


// ==++====. 6/6/2022

//== anonymous objects = Objects without a name
//             Not directly referenced less syntax. No need for unique names
/* 
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}
//  new Card("A", "Hearts"); ====== old way
// new Card("A", "Spades");
// new Card("2", "Diamonds");
// new Card("2", "Clubs"); 

let cardes = [
  new Card("A", "Hearts"),
  new Card("A", "Spades"),
  new Card("2", "Diamonds"),
  new Card("2", "Clubs"),
];
// console.log(card2.value + card2.suit);
console.log(cardes[0].value + cardes[3].suit);
cardes.forEach((card) => console.log(card.value + card.suit));
 */

// error= object with a description of something went wrong

// Can't open a file / Lose connection / User types incorrect input / TypeError

// throw  = executes a user-defined error
/* 
try {
  let x = window.prompt("Enter a #");
  x = Number(x);
  if (isNaN(x)) throw "That wasn't a number";
  if (x == "") throw "That was a number";
  console.log(`${x} is a number`);
} catch (error) {
  console.log(error);
} finally {
  console.log("This always executes");
}
 */

// ======= The date object is used to work with dates @ times
//let date = new Date(2023, 0, 1, 2);
// let date = new Date();
/* 
console.log(date);
let year = date.getFullYear();
date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = date;
console.log(year);
 */

///==== clock program
/* 
const myLabel = document.getElementById("myLabel");
update();
setInterval(update, 1000);
function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date);
  function formatTime() {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;

    hours = formatZeroes(hours);
    minutes = formatZeroes(minutes);
    seconds = formatZeroes(seconds);
    return `${hours}: ${minutes}: ${seconds} ${amOrPm}`;
  }
  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}
 */

// == synchronous code = In an ordered sequence. Step-by-step linear instructions
//              (start now, finish now)
/* 
console.log("START");
console.log("This is synchronous");
console.log("END");
 */
// asynchronous code = Out of sequence
//           Ex. Access a database / Fetch a file / tascks that take time / (start now, finish sometime later)
/* 
console.log("START");
setTimeout(() => console.log("This is asynchronous"), 3000);
console.log("END");


le promise = new Promise((resolve,reject) =>{
if(true){
resolve('tes it is true')
}else{
reject('false')
}
})
 */


// === promise

// async = makes a function a Promise
/* 
async function loadFile() {
  let fileLoaded = false;
  if (fileLoaded) {
    return "File loaded";
  } else {
    throw "File Not loaded";
  }
} */
/* 
const promise = new Promise((resolve, reject) => {
  let fileLoaded = false;
  if (fileLoaded) {
    resolve("File loaded");
  } else {
    reject("File Not loaded");
  }
});
 */
//promise
/* 
loadFile()
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
 */

//==== await = makes an async function wait for a Promise
// ===== ES6 Modules
// ===== DOM = is an api /  is an interface for changing the content of a page html

// console.dir(document);
// console.log(document.title);
// console.log(document.URL);
// document.location = "https..."
/* 
// document.body.style.backgroundColor = "lightBlue";
//getElementById('id')
const myTitle = document.getElementById("myTitle");
myTitle.style.backgroundColor = "lightgreen";
myTitle.style.color = "black";
//getElementsByName('name')
const fruits = document.getElementsByName("fruits");
fruits.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});
//getElementsByTagName('tagName')

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightyellow";
vegetables[2].style.marginTop = "22px";

//getElementsByClassName('className')
// querySelector(. / # / tagName / name / attr [for])
// querySelectorAll(. / # / tagName / name / attr [for])
 */



//====== ==++++ === 07/ 06/ 2022 =================+++=====
// ====== DOM Traversal
//.firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// Array.from(.children)

//==== add / change HTML elements
// .innerHtml (vulnerable to xss attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("Enter your name");
// document.body.append(nameTag);
/* 
const myList = document.querySelector("#myList");
const listItem = document.createElement("li");
listItem.textContent = "mango";
myList.append(listItem);
myList.prepend(listItem); // make the item  first

myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);
 */

//====== add change CSS properties
/* 
const myTitle = document.getElementById("myTitle");
myTitle.style.color = "red";
myTitle.style.textShadow = "2px 1px 4px white";
myTitle.style.textAlign = "center";
myTitle.style.border = "3px solid red";
 */

// ===== Events

// const element = document.getElementById("btn");
// element = document.body;
//const element = document.getElementById("text");

// element.onclick = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomething;

//element.onload = doSomething;
// element.onchange = doSomething;
// function doSomething() {
//   alert("you did something");
// }
/* 
const circle = document.querySelector(".circle");

function changeColor() {
  circle.style.backgroundColor = "yellow";
}
function removeColor() {
  circle.style.backgroundColor = "orange";
}
addEventListener("mouseover", changeColor);
addEventListener("mouseout", removeColor);
 */
//==== show/hide HTML elements

// const btn = document.querySelector("#btn");
// const myCar = document.querySelector("#myCar");
// btn.style.cursor = "pointer";

// btn.addEventListener("click", () => {
//   if (myCar.style.display /*visibility */ === /* visible || hidden */ "none") {
//     myCar.style.display = "block";
//   } else {
//     myCar.style.display = "none";
//   }
// });

//===== detect key presses
/* 
const circle = document.querySelector(".circle");
let size = 0;
const myFunc = (e) => {
  size += 50;
  if (e.key === "ArrowDown") {
    circle.style.top = size + "px";
  } else if (e.key === "ArrowLeft") {
    circle.style.right = size + "px";
  }
};

document.addEventListener("keydown", myFunc);
 
const circle = document.querySelector(".circle");
let x = 0;
let y = 0;

const myFunc = (e) => {
  switch (e.key) {
    case "ArrowDown":
      y += 20;
      circle.style.top = y + "px";
      break;
    case "ArrowUp":
      y -= 20;
      circle.style.top = y + "px";
      break;
    case "ArrowRight":
      y += 20;
      circle.style.left = x + "px";
      break;
    case "ArrowLeft":
      y -= 20;
      circle.style.left = x + "px";
      break;
    default:
      break;
  }
};
window.document.addEventListener("keydown", myFunc);
*/

// ===== animations
//===== Canvas API = a means for drawing graphics
//            used for animations, games, data visualization
/* 
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.strokeStyle = "orange";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
 */
// Drow circle

// (x,y,r, SAngle, EAngle, counterclockwise)
/* 
context.lineWidth = 10;
context.fillStyle = "green";
context.strokeStyle = "orange";
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
 */

// Drow text
/* 
context.font = "50px MV Boli";
context.fillStyle = "white";
context.fillText("You Good", canvas.width / 2, canvas.height / 2);
 */

//=== window = interface used to talk to web broser the DOM is a property of the window
//=== cookie = a small text file stored on your computer used to remember information about the user saved in name=value pairs
/* document.cookie = "firstName=spongeBob; expires=Sun; path=/";

console.log(document.cookie); */

// ==== 17 - 06 - 2022
// ==== Create a promise
/* 
const myPromise = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 4);
  if (rand === 0) {
    resolve();
  } else {
    reject();
  }
});
myPromise
  .then(() => console.log("Success"))
  .catch(() => console.log("Failed Sth went wrong"));
 */
// ==== fetch with promises

