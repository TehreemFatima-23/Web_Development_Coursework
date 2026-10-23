
"use strict";

const books = [
    { id: 1, title: "HTML Essentials", price: 1000, stock: 5 },
    { id: 2, title: "CSS Layouts", price: 1500, stock: 0 },
    { id: 3, title: "JavaScript Lab", price: 2000, stock: 3 }
];

function buildReport(books, searchText, discount = 0.10) {
    if (!Number.isFinite(discount) || discount < 0 || discount > 1) {
        throw new Error("Discount must be between 0 and 1.");
    }

    for (const book of books) {
        if (
            !Number.isFinite(book.price) || book.price < 0 ||
            !Number.isFinite(book.stock) || book.stock < 0
        ) {
            throw new Error("Book prices and stock must be valid non-negative numbers.");
        }
    }

    // Normalize titles and create new book objects
    const normalizedBooks = books.map(book => ({
        ...book,
        title: book.title.trim().replace(/\s+/g, " ")
    }));

    // Search titles without case sensitivity
    const query = String(searchText ?? "").trim().toLowerCase();

    const matches = normalizedBooks.filter(book =>
        book.title.toLowerCase().includes(query)
    );

    // Create discounted copies without changing original prices
    const discountedCopies = normalizedBooks.map(book => ({
        ...book,
        price: Number((book.price * (1 - discount)).toFixed(2))
    }));

    // Calculate the total value of all stock
    const totalStockValue = normalizedBooks.reduce(
        (sum, book) => sum + book.price * book.stock,
        0
    );

    // Find the first matching book
    const firstMatch = normalizedBooks.find(book =>
        book.title.toLowerCase().includes(query)
    ) ?? null;

    // Check stock conditions
    const hasAvailableBooks = normalizedBooks.some(book => book.stock > 0);
    const allBooksHaveValidStock = normalizedBooks.every(
        book => Number.isFinite(book.stock) && book.stock >= 0
    );

    // Sort a copy from lowest to highest price
    const priceRanking = [...normalizedBooks].sort(
        (a, b) => a.price - b.price
    );

    return {
        normalizedBooks,
        matches,
        discountedCopies,
        totalStockValue,
        firstMatch,
        hasAvailableBooks,
        allBooksHaveValidStock,
        priceRanking
    };
}

const report = buildReport(books, "javascript");

console.log("Normalized books:", report.normalizedBooks);
console.log("Search matches:", report.matches);
console.log("Discounted copies:", report.discountedCopies);
console.log("Total stock value: PKR", report.totalStockValue);
console.log("First match:", report.firstMatch);
console.log("Any books available:", report.hasAvailableBooks);
console.log("All stock values valid:", report.allBooksHaveValidStock);
console.log("Price ranking:", report.priceRanking);

console.log("Original books:", books);
