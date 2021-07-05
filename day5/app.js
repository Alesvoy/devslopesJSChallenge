//Part 1 - Are you broke?
var balance = 40;
var itemPrice = 20;

if (balance >= itemPrice) {
  console.log(`Purchasing coding course for $${itemPrice}`);
  balance -= itemPrice;
  console.log(`New balance is $${balance}`);
} else {
  console.log(
    `You are broke and cannot afford this item. You need an additional $${Math.abs(
      balance - itemPrice
    )} to buy it!`
  );
}

//Part 2 - Kilopounds
var kilograms = 10;
var pounds = kilograms * 2.205;

console.log(pounds);

// Advanced - Circles (15, 128, 7, 6)
function circleArea(r) {
  return 3.1416 * (r * r);
}

console.log(circleArea(15));
console.log(circleArea(128));
console.log(circleArea(7));
console.log(circleArea(6));
