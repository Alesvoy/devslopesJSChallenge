//Part 1
// var paintColor = "Red";
// var make = "Volkswagen";
// var model = "Golf R";
// var year = 2022;
// var isManualTransmission = false;
// var seats = 5;
// var mileage = 0;

// console.log(
//   paintColor,
//   make,
//   model,
//   year,
//   isManualTransmission,
//   seats,
//   mileage
// );

//Part 2
// var passport = {
//   dateOfBirth: "10/22/97",
//   age: 23,
//   isOrganDonor: false,
//   state: "Texas",
//   streetAddress: "Hawk Circle St.",
//   city: "Houston",
//   zip: 52763,
//   idNumber: 123,
// };

// console.log(
//   `Hi, my name is Alejandro and I was born on ${passport.dateOfBirth}, I am ${passport.age} years old. I live at ${passport.streetAddress} in ${passport.city} ${passport.state}, the zip code is ${passport.zip}.`
// );

// Advanced Mission
var str = "Hello World!";

// Using built in string methods
console.log(str.split("").reverse().join(""));

// Not using built in string methods
var newStr = "";
for (var i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
console.log(newStr);
