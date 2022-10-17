let theLibrary = [];
const container = document.getElementById('container');

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
    console.log(theLibrary)
    displayTheLibrary();
    return theLibrary;
}

//displays the books
const displayTheLibrary = () => {
    theLibrary.forEach(item => {
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


addToLibrary('Hyperspace', 'Michio Kaku', '359', 'Not read yet');
addToLibrary('The Quantum Story', 'Jim Baggott', '469', 'Not read yet');
