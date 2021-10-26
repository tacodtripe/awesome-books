/* eslint-disable no-use-before-define, no-unused-vars, no-restricted-globals */

class Book {
  constructor(title, author) {
    this.id = idBook;
    this.title = title;
    this.author = author;
  
    idBook += 1;
  }

  ReloadLibrary=() => {
    library = JSON.parse(localStorage.library);
  
    bookshelf.innerHTML = '';
    bookshelf.appendChild(temp);
  
    for (let i = 0; i < library.length; i += 1) {
      BookDisplay.DisplayBook(library[i]);
    }
  }

  AddBook=() => {
    event.preventDefault();
  
    const formAddBook = document.forms.AddBook;
    const bookData = new FormData(formAddBook);
  
    const bookTitle = bookData.get('title');
    const bookAuthor = bookData.get('author');
  
    formAddBook.reset();
  
    SaveBook(bookTitle, bookAuthor);
    ReloadLibrary();
  }

  SaveBook=(title, author) => {
    const book = new Book(title, author);
    if (!Array.isArray(library)) {
      library = [];
    }
    library.push(book);
  
    localStorage.library = JSON.stringify(library);
  
    ReloadLibrary();
  }

  DeleteBook=(id) => {
    library = library.filter((book) => book.id !== id);
  
    localStorage.library = JSON.stringify(library);
  
    ReloadLibrary();
  }
}


class BookDisplay {
  library = [];

  DisplayBook=(book) => {
    const clon = temp.content.cloneNode(true);
    clon.querySelectorAll('p')[0].innerHTML = `BOOK NAME: ${book.title}`;
    clon.querySelectorAll('p')[1].innerHTML = `AUTHOR NAME: ${book.author}`;
  
    clon.querySelector('button').addEventListener('click', () => { Book.DeleteBook(book.id); });
  
    bookshelf.appendChild(clon);
  }
}



// let library = [];
const library = new BookDisplay();

const temp = document.querySelector('.book');
const bookshelf = document.querySelector('#bookshelf');
let idBook = library.length;

// function Book(title, author) {
//   this.id = idBook;
//   this.title = title;
//   this.author = author;

//   idBook += 1;
// }

// function ReloadLibrary() {
//   library = JSON.parse(localStorage.library);

//   bookshelf.innerHTML = '';
//   bookshelf.appendChild(temp);

//   for (let i = 0; i < library.length; i += 1) {
//     DisplayBook(library[i]);
//   }
// }

// function DeleteBook(id) {
//   library = library.filter((book) => book.id !== id);

//   localStorage.library = JSON.stringify(library);

//   ReloadLibrary();
// }

// function DisplayBook(book) {
//   const clon = temp.content.cloneNode(true);
//   clon.querySelectorAll('p')[0].innerHTML = `BOOK NAME: ${book.title}`;
//   clon.querySelectorAll('p')[1].innerHTML = `AUTHOR NAME: ${book.author}`;

//   clon.querySelector('button').addEventListener('click', () => { DeleteBook(book.id); });

//   bookshelf.appendChild(clon);
// }

// function SaveBook(title, author) {
//   const book = new Book(title, author);
//   if (!Array.isArray(library)) {
//     library = [];
//   }
//   library.push(book);

//   localStorage.library = JSON.stringify(library);

//   ReloadLibrary();
// }

// function AddBook() {
//   event.preventDefault();

//   const formAddBook = document.forms.AddBook;
//   const bookData = new FormData(formAddBook);

//   const bookTitle = bookData.get('title');
//   const bookAuthor = bookData.get('author');

//   formAddBook.reset();

//   SaveBook(bookTitle, bookAuthor);
// }


/* eslint-enable no-use-before-define, no-unused-vars, no-restricted-globals */
