// Part 1 - Taxes

var item1 = 13;
var item2 = 13;
var item3 = 13;
var item4 = 13;
var item5 = 13;
var item6 = 13;
var item7 = 0.5;

var total = item1 + item2 + item3 + item4 + item5 + item6 + item7;

var coupon = 0.25;

var priceAfterDiscount = total - total * coupon;

var taxes = priceAfterDiscount * 0.0775;

var finalPrice = priceAfterDiscount + taxes;

console.log(finalPrice);