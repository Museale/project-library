let cardValue = 0;
let readBtnValue = 0;
let cardItemValue = 0;  

const container = document.getElementById('container');
const newBookBtn = document.getElementById('new-book-btn')
const newBookModal = document.getElementById('modal');
const addBook = document.getElementById('add-btn')
const closeModal = document.getElementById('close-modal');
const userInputTitle = document.getElementById('title');
const userInputAuthor = document.getElementById('author');
const userInputPages = document.getElementById('pages');
const userInputRead = document.getElementById('read-checkbox');

let library = [];

class Book {
  
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    addToLibrary() {
       library.push([`${this.title}, ${this.author}, ${this.pages},${this.read}`]);
    
    const displayBook = document.createElement('div');
    displayBook.classList.add('card');

    container.appendChild(displayBook);

    const toggleReadBtn = document.createElement('button');
        toggleReadBtn.dataset.number = readBtnValue++;
        toggleReadBtn.id = 'toggle';
        toggleReadBtn.textContent = `${this.read}`; 
        toggleReadBtn.classList.add('card-item');
        toggleReadBtn.addEventListener('click', () => {
            if (userInputRead.value == 'Read') {
                userInputRead.value = 'Not read'; 
                toggleReadBtn.textContent = 'Not read';
                toggleReadBtn.style.background = "transparent";     
                } else {
                    userInputRead.value = 'Read';                            
                    toggleReadBtn.textContent = 'Read';
                    toggleReadBtn.style.background = 'rgba(194, 165, 3, 0.50)';
                    }
            })

    const removeBookBtn = document.createElement('button');   
        removeBookBtn.id = 'remove';
        removeBookBtn.textContent = 'Remove';
        removeBookBtn.classList.add('card-item');
        removeBookBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });

    const title = document.createElement('div');
        title.classList.add('card-item', 'title');
        title.textContent = `${this.title}`;

    const author = document.createElement('div');
        author.classList.add('card-item');
        author.textContent = `${this.author}`;

    const pages = document.createElement('div'); 
        pages.textContent = `${this.pages}`;

            displayBook.appendChild(pages);
            displayBook.appendChild(title);
            displayBook.appendChild(author)
            displayBook.appendChild(toggleReadBtn);
            displayBook.appendChild(removeBookBtn)

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
       
        if (document.querySelector('input[type=checkbox]').checked) {
            userInputRead.value = 'Read';
        }
        if (userInputTitle.value == '' | userInputAuthor.value == '' | userInputPages == '') {
            alert('Please input title, author, pages.');
            return;
        };
        newBook.addToLibrary();
    });
    closeModal.addEventListener('click', () => {
        newBookModal.style.visibility = 'hidden' }
    )


//example books
const book1 = new Book('Hyperspace', 'Michio Kaku', '359', 'Not read').addToLibrary();
const book2 = new Book('The Quantum Story', 'Jim Baggott', '469', 'Not read').addToLibrary();
const book3 = new Book('Fallteknikk', 'Inga Sætre', '198', 'Read').addToLibrary();
const book4 = new Book('Swann\'s way', 'Marcel Proust', '512', 'Not read').addToLibrary();
const book5 = new Book('Crime and Punishment', 'Fyodor Dostoyevsky', '492', 'Read').addToLibrary();



