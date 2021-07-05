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
