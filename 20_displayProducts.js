//Problem 20: In a web application that displays a list of products with their prices in different currencies. Let's say that we have an array of products, where each product has a name and a price property in USD. We want to display a list of these products with their prices converted to a different currencies, besed on the user's preferences.


const products = [
    { name: "iPhone", price: 999 },
    { name: "MacBook", price: 1499 },
    { name: "AirPods", price: 249 },
];
const currencyExchangeRate = 0.85;
const currencySymbol = '€';

const porductInEuros = products.map(product => ({
    name: product.name,
    price: product.price * currencyExchangeRate,
    formatedPrice: `${currencySymbol}${(product.price * currencyExchangeRate).toFixed(2)}`
}));

console.log(porductInEuros);