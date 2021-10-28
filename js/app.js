/* eslint-disable no-use-before-define, no-unused-vars, no-restricted-globals, class-methods-use-this, max-len */

class Bookstore {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  reloadLibrary(library) {
    bookshelf.innerHTML = '';
    bookshelf.appendChild(temp);

    for (let i = 0; i < library.length; i += 1) {
      newBookCollection.displayBook(library[i], i);
    }
  }

  saveBook(title, author, library) {
    const book = new Bookstore(title, author);
    library.push(book);
    localStorage.library = JSON.stringify(library);
    newBookCollection.reloadLibrary(library);
  }

  deleteBook(id) {
    library = library.filter((book, index, arr) => arr[index] !== arr[id]);
    localStorage.library = JSON.stringify(library);
    newBookCollection.reloadLibrary(library);
  }

  displayBook(book, bookId) {
    const clon = temp.content.cloneNode(true);
    clon.querySelectorAll('p')[0].innerHTML = `"${book.title}" by ${book.author}`;
    clon.querySelector('button').addEventListener('click', () => { newBookCollection.deleteBook(bookId); });
    bookshelf.appendChild(clon);
  }

  addBook() {
    const bookTitle = document.getElementById('newBookTitle').value;
    const bookAuthor = document.getElementById('newBookAuthor').value;
    newBookCollection.saveBook(bookTitle, bookAuthor, library);
  }
}

if (!localStorage.getItem('library')) {
  const library = localStorage.setItem('library', JSON.stringify([]));
}
let library = JSON.parse(localStorage.library);
const addButton = document.getElementById('addButton');
const temp = document.querySelector('.book');
const bookshelf = document.querySelector('#bookshelf');
const newBookCollection = new Bookstore();
addButton.addEventListener('click', newBookCollection.addBook);
newBookCollection.reloadLibrary(library);
/* eslint-enable no-use-before-define, no-unused-vars, no-restricted-globals, class-methods-use-this */
