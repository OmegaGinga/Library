const gridContainer = document.querySelector('.grid-container');
const newBook = document.querySelector('.new-book');
const formContainer = document.querySelector('.form-container');
const submit = document.querySelector('.submit');

const myLibrary = [
    new Book('J.R.R. Tolkien', 'The Lord of the Rings', 1178, 'yes'),
    new Book('Jane Austen', 'Pride and Prejudice', 279, 'no'),
    new Book('J.R.R. Tolkien', 'The Hobbit', 310, 'yes')
];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title}\n${this.author}\n${this.pages} pages\n${this.read}`;
    };
}

function addBookToLibrary() {
    const author = document.querySelector('.author').value;
    const title = document.querySelector('.title').value;
    const pages = document.querySelector('.pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;

    if (author && title && pages && read) {
        const book = new Book(author, title, pages, read);
        myLibrary.push(book);
        showBooks([book]);
    }
}

function showBooks(books) {
    books.forEach(book => {
        const newCard = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');
        const deleteButton = document.createElement('button');
        const readButton = document.createElement('button');

        bookTitle.textContent = `Title: ${book.title}`;
        bookTitle.classList.add('info');
        newCard.appendChild(bookTitle);
        
        bookAuthor.textContent = `Author: ${book.author}`;
        bookAuthor.classList.add('info');
        newCard.appendChild(bookAuthor);

        bookPages.textContent = `Pages: ${book.pages}`;
        bookPages.classList.add('info');
        newCard.appendChild(bookPages);

        bookRead.textContent = `Read: ${book.read === 'yes' ? 'Yes' : 'No'}`;
        bookRead.classList.add('info');
        newCard.appendChild(bookRead);

        deleteButton.textContent = 'Delete Book';
        newCard.appendChild(deleteButton);

        deleteButton.addEventListener('click',()=>{
            const parent = deleteButton.parentElement;
            parent.remove();
        })

        readButton.textContent = 'Read!';
        newCard.appendChild(readButton);

        readButton.addEventListener('click',()=>{
            if(bookRead.textContent === 'Read: Yes'){
                bookRead.textContent = 'Read: No';    
            }else{
                bookRead.textContent = 'Read: Yes';
            }
            
        })

        readButton.classList.add('read-button');
        deleteButton.classList.add('delete-button');

        newCard.style.cssText =  'display: flex; flex-direction: column; gap: 10px; text-align: center; margin-top: 150px';
        deleteButton.style.cssText = 'border-radius: 10px; padding: 5px 0px; background: red; color: #fff; font-weight: bold;'
        readButton.style.cssText = 'border-radius: 10px; padding: 5px 0px; background: #24a0ed; color: #fff; font-weight: bold;'


        gridContainer.appendChild(newCard);
    });
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

submit.addEventListener('click', (event) => {    
    addBookToLibrary();
    formContainer.style.display = 'none';
    newBook.textContent = 'NEW BOOK';
    event.preventDefault();
});