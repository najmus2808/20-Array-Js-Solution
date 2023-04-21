// Problem-17: A restaurant wants to keep track of its inventory of ingredients for various dishes . the restaurants chefs need to be able to easily update the inventory levels for each ingredient as then use them in dishes

const ingredients = [
    { name: "dough", inventory: 10 },
    { name: "tomato sauce", inventory: 6 },
    { name: "mozzarella cheese", inventory: 6 },
    { name: "pepperoni", inventory: 4 },
    { name: "mushrooms", inventory: 3 },
];

function updateInventory(name, quantity) {
    const ingredient = ingredients.find((i) => i.name === name);
    if (ingredient) {
        ingredient.inventory -= quantity;
        console.log(`Inventory updated for ${name}: ${ingredient.inventory} remaining`);
    } else {
        console.log(`Ingredient ${name} not found`);
    }
}


updateInventory("dough", 2);
updateInventory("tomato sauce", 3);
updateInventory("olives", 1);
