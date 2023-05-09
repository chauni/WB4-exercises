let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO:  fill the array with 10 candies of various
    //        price ranges
 ];

 console.log('The candies that cost less than $4.00 are:')
 
 for (let i = 0; i < products.length; i++) {
    if (products[i].price < 4) {
        console.log(products[i].product);
    }
 }
 console.log('------');
 
 console.log('The candies that have "M&M" in their name are:')

 for (let j = 0; j < products.length; j++) {
    if (products[j].product.indexOf('M&Ms') >= 6) {
        console.log(products[j].product);
    }
 }

 console.log('------');
 
 console.log('Do we carry Swedish Fish?');

 for (let k = 0; k < products.length; k++) {
    if (products[k].product == "Swedish Fish") {
        console.log('Yes, we carry', products[k].product)
    }
 }