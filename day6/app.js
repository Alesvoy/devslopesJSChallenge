//Part 1 - Traffic
var status = "Red";
var emergencyVehicle = false;
var isInIntersection = true;

if (
  (status === "Green" && emergencyVehicle === false) ||
  isInIntersection === true
) {
  console.log("You can drive");
} else if (status === "Yellow" && emergencyVehicle === false) {
  console.log("Prepare to stop");
} else if (status === "Red" || emergencyVehicle === true) {
  console.log("Do not drive");
}

//Part 2 - Grades
var grades = "99";

if (grades > 90) {
  console.log("AA");
} else if (grades > 80 && grades <= 90) {
  console.log("AB");
} else if (grades > 70 && grades <= 80) {
  console.log("BB");
} else if (grades > 60 && grades <= 70) {
  console.log("BC");
} else if (grades > 50 && grades <= 60) {
  console.log("CC");
} else if (grades > 40 && grades <= 50) {
  console.log("CD");
} else if (grades > 30 && grades <= 40) {
  console.log("DD");
} else {
  console.log("FF");
}
