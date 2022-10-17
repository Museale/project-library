let theLibrary = [];
let newestBook = [];
const container = document.getElementById('container');
const newBookBtn = document.getElementById('new-book-btn');
const newBookModal = document.getElementById('modal');


//constructor
function book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
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
        container.appendChild(displayBook);
            item.forEach(item => item.map((e) => {
                let bookInfo = document.createElement('div');
                bookInfo.classList.add('card-item');
                let infoItem = e.toString();
                bookInfo.textContent = infoItem;
                displayBook.appendChild(bookInfo);
                return bookInfo; 
            }));
    });
};

const addNewBook = () => {
    newBookBtn.addEventListener('click', () => {
        newBookModal.style.visibility = "visible";
    });
    document.getElementById('add-btn').addEventListener('click', () => {
        newBookModal.style.visibility = "hidden";
    });
}
 addNewBook();

addToLibrary('Hyperspace', 'Michio Kaku', '359', 'Not read yet');
addToLibrary('The Quantum Story', 'Jim Baggott', '469', 'Not read yet');
addToLibrary('Fallteknikk', 'Inga Sætre', '198', 'Read');
addToLibrary('Swann\'s way', 'Marcel Proust', '512', 'Not read yet')
addToLibrary('Crime and Punishment', 'Fyodor Dostoyevsky', '492', 'Read')




