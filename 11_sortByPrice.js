// Problem-11: A food ordering app needs to sort the menu items by price.

// Without using built-in method
function sortByPrice(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].price > arr[j].price) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const menuItems = [
    { name: "Burger", price: 5.99 },
    { name: "Fries", price: 2.99 },
    { name: "Soda", price: 1.99 },
    { name: "Pizza", price: 10.99 },
];

console.log(sortByPrice(menuItems))

// Using built-in method
console.log(menuItems.sort((a, b) => a.price - b.price));
