let theLibrary = [];

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
    return theLibrary;
}



addToLibrary('Hyperspace', 'Michio Kaku', '359', 'Not read yet');
addToLibrary('The Quantum Story', 'Jim Baggott', '469', 'Not read yet');