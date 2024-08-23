const gridContainer = document.querySelector('.grid-container');
const newBook = document.querySelector('.new-book');
const formContainer = document.querySelector('.form-container');

const myLibrary = ['lotr', 'Orgullo y Prejuicio', 'The hobbit'];

function Book(){}

function addBookToLibrary(book){


}

function showBooks(books){
    for(i = 0; i<books.length; i++){
        const newCard = document.createElement('div');
        newCard.textContent = books[i];
        gridContainer.appendChild(newCard);
    }
}

showBooks(myLibrary);

newBook.addEventListener('click', () => {
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
        newBook.textContent = 'HIDE';
    } else {
        formContainer.style.display = 'none';
        newBook.textContent = 'NEW BOOK';
    }
});