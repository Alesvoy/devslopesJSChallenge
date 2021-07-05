// Part 1 - Truncate
var str1 = "Welcome";
var str2 = "Hello, World!";
var str3 = "Disaster";

var newStr1 = str1.slice(0, 4);
var newStr2 = str2.slice(0, 6);
var newStr3 = str3[0];

console.log(newStr1);
console.log(newStr2);
console.log(newStr3);

// Part 2 - Char Builder
var person = "Mark";
var car = "Jeep";
var animal = "Leopard";
var city = "Townsville";
var game = "Cards";
var water = "Flows";
var clean = "Shower";
var mood = "Frown";

var strChallenge =
  person[0] +
  car[1] +
  city[7] +
  city[0].toLowerCase() +
  game[3] +
  water[2] +
  water[3] +
  city[3];

console.log(strChallenge);

// Advanced - String Within String
// With built in method

var first = "Help";
var second = "Hello, World!";
var length;

if (first.length > second.length) {
  length = first.length - 1;
} else {
  length = second.length - 1;
}

for (let i = 0; i < length; i++) {}
