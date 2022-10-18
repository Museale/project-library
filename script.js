let theLibrary = [];
let newestBook = [];
const container = document.getElementById('container');
const newBookBtn = document.getElementById('new-book-btn');
const newBookModal = document.getElementById('modal');
const userInputTitle = document.getElementById('title');
const userInputAuthor = document.getElementById('author');
const userInputPages = document.getElementById('pages');
const userInputRead = document.getElementById('read-checkbox');


//constructor
function book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
    console.log(userInputAuthor.value);
    return [title , author, pages, read];

}


//add new books to the global library variable using the book constructor
function addToLibrary (...args) {
    theLibrary.push([new book(...args)]);
    if (newestBook.length < 1) {
        newestBook.push([new book(...args)])
    } else {
        newestBook.splice(0, 1);
        newestBook.push([new book(...args)]);
    };
    console.log(theLibrary)
    displayTheLibrary();
    return theLibrary;
}

//displays the books
const displayTheLibrary = () => {
    newestBook.forEach(item => {
       
        let displayBook = document.createElement('div');
        displayBook.classList.add('card');
        displayBook.id = 'display-book';
        container.appendChild(displayBook);
        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.id = 'toggle';
          if (userInputRead.value == 'Read') {
                toggleReadBtn.textContent = 'Not read';
            } else {
                toggleReadBtn.textContent = 'Read';
            };
     
            toggleReadBtn.classList.add('card-item');
            toggleReadBtn.addEventListener('click', (e) => {
                // const readTextContent = document.querySelector("#display-book > div:nth-child(4)");
                if (userInputRead.value == 'Read') {
                    userInputRead.value = 'Not read yet';
                    toggleReadBtn.textContent = 'Not read';
                } else {
                    userInputRead.value = 'Read';
                
                    toggleReadBtn.textContent = 'Read';
                };
            });
            
            item.forEach(item => item.map((e) => {
                const bookInfo = document.createElement('div');
                bookInfo.classList.add('card-item');
                let infoItem = e.toString();
                bookInfo.textContent = infoItem;
                displayBook.appendChild(bookInfo);
                return bookInfo; 
            }));
            displayBook.appendChild(toggleReadBtn);
    });
};

const addNewBook = () => {
    newBookBtn.addEventListener('click', () => {
        newBookModal.style.visibility = "visible";
        userInputTitle.value = '';
        userInputAuthor.value = '';
        userInputPages.value = '';
        userInputRead.value = 'Not read yet';
    });
    document.getElementById('add-btn').addEventListener('click', () => {
        newBookModal.style.visibility = "hidden";
        if (document.querySelector('input[type=checkbox]').checked) {
            userInputRead.value = 'Read';
            userInputRead.dataset.read = 'o';
        }
        if (userInputTitle.value == '' | userInputAuthor.value == '' | userInputPages == '') {
            alert('Please input title, author, pages.');
            return;
        };
        addToLibrary(userInputTitle.value, userInputAuthor.value, userInputPages.value, userInputRead.value);
    });
};


 addNewBook();



addToLibrary('Hyperspace', 'Michio Kaku', '359', 'Not read yet');
addToLibrary('The Quantum Story', 'Jim Baggott', '469', 'Not read yet');
addToLibrary('Fallteknikk', 'Inga Sætre', '198', 'Read');
addToLibrary('Swann\'s way', 'Marcel Proust', '512', 'Not read yet')
addToLibrary('Crime and Punishment', 'Fyodor Dostoyevsky', '492', 'Read')




