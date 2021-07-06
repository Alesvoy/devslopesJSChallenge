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
var grades = "AA";
