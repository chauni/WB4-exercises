let lunch = [
      {item: "Steak Fajitas", price: 9.95},
      {item: "Chips and Guacamole", price: 5.25},
      {item: "Sweet Tea", price: 2.79}
    ];

function getLunchCost(order) {
    let sum = 0;

    for (let i = 0; i < order.length; i++) {
        sum += order[i].price;
    }

    return sum
}

let lunchCost = getLunchCost(lunch);

let totalWithTax = lunchCost * .08

let totalWithTip = lunchCost * .18

let totalDue = lunchCost + totalWithTax + totalWithTip

console.log('the total due is:', totalDue.toFixed(2));