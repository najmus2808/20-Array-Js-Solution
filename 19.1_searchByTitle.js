//Problem 19.1: Suppose you have list of books and you want to allow users to search for a book by it's title. You could represent the list of books as an array of object, where each object represent a book with a title, author and year of puplication.

const books = [
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill  a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
];

const searchBooks = (books, searchText) => {
    const matchingBooks = books.filter(book => {
        const { title, author, year } = book
        return title.toLowerCase().includes(searchText.toLowerCase()) ||
            author.toLowerCase().includes(searchText.toLowerCase()) ||
            year.toString().toLowerCase().includes(searchText.toLowerCase());
    });
    return matchingBooks
}

const queryText = "Kill";
const matchingText = searchBooks(books, queryText);


if (matchingText.length > 0) {
    matchingText.forEach((book) => {
        console.log(`- ${book.title} by ${book.author}, published in ${book.year}`);
    });
} else {
    console.log(`No books found matching '${searchText}'`);
}
