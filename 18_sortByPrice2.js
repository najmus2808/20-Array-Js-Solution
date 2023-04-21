// Problem-18: Given an array of object representing products sort the products by price from lowest to height.

const products = [
    { name: "iphone 1", price: 1000 },
    { name: "iphone 2", price: 8000 },
    { name: "iphone 3", price: 60000 },
    { name: "iphone 4", price: 3000 },
];

products.sort((a, b) => a.price - b.price);
console.log(products);