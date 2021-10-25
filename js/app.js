const newBookTitle = document.getElementById('newBookTitle');
const newBookAuthor = document.getElementById('newBookAuthor');
let bookCollection = [];

function addBook() {
  const newBook = { title: newBookTitle.value, author: newBookAuthor.value };
  bookCollection.push(newBook);
}

function removeBook(bookId) {
  const updatedCollection = bookCollection.filter((book, index, arr) => arr[index] !== arr[bookId]);
  bookCollection = updatedCollection;
}

addBook();
removeBook(1);