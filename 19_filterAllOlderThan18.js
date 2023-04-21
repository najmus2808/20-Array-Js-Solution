//Problem 19: Suppose you have an array of object representing people, and you want to filter the array include who are over 18 years old.


const printAgeOver18 = (arr) => {
    return arr.filter(person => person.age > 18);
};

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 21 },
    { name: "David", age: 14 },
];
console.log(printAgeOver18(people));
