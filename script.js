const container = document.getElementById('container');
const newBookBtn = document.getElementById('new-book-btn')
const newBookModal = document.getElementById('modal');
const addBook = document.getElementById('add-btn')
const closeModal = document.getElementById('close-modal');
const userInputTitle = document.getElementById('title');
const userInputAuthor = document.getElementById('author');
const userInputPages = document.getElementById('pages');
const userInputRead = document.querySelector('input[type=checkbox]');

class Book {
    
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.toggleReadBtn = document.createElement('button');
        this.toggleReadBtn.id = 'toggle';
        userInputRead.checked ? this.toggleReadBtn.textContent = 'Read' :
        this.toggleReadBtn.textContent = this.read; 
        this.toggleReadBtn.classList.add('card-item');
        this.toggleReadBtn.addEventListener('click', () => {
          this.toggleRead();
        });
        this.removeBookBtn = document.createElement('button');   
        this.removeBookBtn.id = 'remove';
        this.removeBookBtn.textContent = 'Remove';
        this.removeBookBtn.classList.add('card-item');
        this.removeBookBtn.addEventListener('click', (e) => {
          this.remove(e);
        });
    }

    toggleRead() {
        this.read = !this.read;
        this.toggleReadBtn.textContent = this.read ? 'Read' : 'Not read';
        this.toggleReadBtn.style.background = this.read ? 'rgba(194, 165, 3, 0.50)' : "transparent";
    }

    remove(e) {
        e.target.parentElement.remove();
    }
}

class Library {
    constructor() {
        this.libraryArray = [];       
    }

    addBook(book) {
        this.libraryArray.push(book);
        this.display()
    }

    display() {

       while (container.firstChild) {
        container.removeChild(container.firstChild);
       }

        this.libraryArray.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('card');
            container.appendChild(bookCard);

            const title = document.createElement('div');
            title.textContent = book.title;
            title.classList.add('title', 'card-item');
            
            const author = document.createElement('div');
            author.classList.add('card-item', 'author')
            author.textContent = book.author;

            const pages = document.createElement('div');
            pages.textContent = book.pages;


            bookCard.appendChild(book.toggleReadBtn);
            bookCard.appendChild(book.removeBookBtn);
            bookCard.appendChild(pages);
            bookCard.appendChild(title);
            bookCard.appendChild(author);
        })
    }

    removeBook(book) {
        const index = this.libraryArray.indexOf(book);
        this.libraryArray.splice(index, 1);
        this.display();
    }
}

    newBookBtn.addEventListener('click', () => {
        newBookModal.style.visibility = 'visible';
        userInputTitle.value = '';
        userInputAuthor.value = '';
        userInputPages.value = '';
        userInputRead.value = 'Not read';
    });

    addBook.addEventListener('click', () => {
        event.preventDefault();
        newBookModal.style.visibility = 'hidden';
        const newBook = new Book(userInputTitle.value, userInputAuthor.value, userInputPages.value, userInputRead.value);
        if (!userInputRead.checked) {
            userInputRead.value = 'Not read';
        }
        if (userInputRead.checked) {
            userInputRead.value = 'Read';
        }
        if (userInputTitle.value == '' | userInputAuthor.value == '' | userInputPages == '') {
            alert('Please input title, author, pages.');
            return;
        };
        myLibrary.addBook(newBook);
    });

    closeModal.addEventListener('click', () => {
        newBookModal.style.visibility = 'hidden' 
        }
    );
    

const myLibrary = new Library();
//example books
const book1 = new Book('Hyperspace', 'Michio Kaku', '359', 'Not read');
const book2 = new Book('The Quantum Story', 'Jim Baggott', '469', 'Not read');
const book3 = new Book('Fallteknikk', 'Inga Sætre', '198', 'Read');
const book4 = new Book('Swann\'s way', 'Marcel Proust', '512', 'Not read');
const book5 = new Book('Crime and Punishment', 'Fyodor Dostoyevsky', '492', 'Read');



myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)
myLibrary.addBook(book4)
myLibrary.addBook(book5)

