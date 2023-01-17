let cardValue = 0;
let readBtnValue = 0;
let cardItemValue = 0;

const container = document.getElementById('container');
const newBookBtn = document.getElementById('new-book-btn')
const newBookModal = document.getElementById('modal');
const userInputTitle = document.getElementById('title');
const userInputAuthor = document.getElementById('author');
const userInputPages = document.getElementById('pages');
const userInputRead = document.getElementById('read-checkbox');


// //constructor
// function book (title, author, pages, read) {
//     this.title = title,
//     this.author = author,
//     this.pages = pages,
//     this.read = read;
   
//     return [title , author, pages, read];

// }


// //add new books to the global library variable using the book constructor
// function addToLibrary (...args) {
//     theLibrary.push([new book(...args)]);
//     if (newestBook.length < 1) {
//         newestBook.push([new book(...args)])
//     } else {
//         newestBook.splice(0, 1);
//         newestBook.push([new book(...args)]);
//     };

//     displayTheLibrary();
//     return theLibrary;
// }

// //displays the books
// const displayTheLibrary = () => {
//     newestBook.forEach(item => {
//         let displayBook = document.createElement('div');
//         displayBook.classList.add('card');
//         displayBook.dataset.number = cardValue++;
//         container.appendChild(displayBook);
//         const toggleReadBtn = document.createElement('button');
//             toggleReadBtn.dataset.number = readBtnValue++;
//             toggleReadBtn.id = 'toggle';
//             toggleReadBtn.textContent = userInputRead.value;
//             toggleReadBtn.classList.add('card-item');
//             toggleReadBtn.addEventListener('click', (e) => {
//                 if (userInputRead.value == 'Read') {
//                     userInputRead.value = 'Not read yet'; 
//                     toggleReadBtn.textContent = 'Not read';
//                     toggleReadBtn.style.background = "transparent";
                  
//                 } else {
//                     userInputRead.value = 'Read';
//                     toggleReadBtn.textContent = 'Read';
//                     toggleReadBtn.style.background = "rgba(194, 165, 3, 0.50)";
//                 };

//             });
//         const removeBookBtn = document.createElement('button');
//             removeBookBtn.dataset.number = cardItemValue;
//             removeBookBtn.id = "remove";
//             removeBookBtn.textContent = 'Remove';
//             removeBookBtn.classList.add('card-item');
//             removeBookBtn.addEventListener('click', (e) => {
//                 e.target.parentElement.remove();
//             });


//             item.forEach(item => item.map((e) => {
//                 const bookInfo = document.createElement('div');
//                 bookInfo.dataset.number = cardItemValue++;
//                 bookInfo.classList.add('card-item');
//                 let infoItem = e.toString();
//                 bookInfo.textContent = infoItem;
//                 displayBook.appendChild(bookInfo);
//                 return bookInfo; 
//             }));

//             displayBook.appendChild(toggleReadBtn);
//             displayBook.appendChild(removeBookBtn);
//     });
// };

// const addNewBook = () => {
//     newBookBtn.addEventListener('click', () => {
//         newBookModal.style.visibility = "visible";
//         userInputTitle.value = '';
//         userInputAuthor.value = '';
//         userInputPages.value = '';
//         userInputRead.value = 'Not read yet';
//     });
//     document.getElementById('add-btn').addEventListener('click', () => {
//         newBookModal.style.visibility = "hidden";
//         if (document.querySelector('input[type=checkbox]').checked) {
//             userInputRead.value = 'Read';
//         }
//         if (userInputTitle.value == '' | userInputAuthor.value == '' | userInputPages == '') {
//             alert('Please input title, author, pages.');
//             return;
//         };
//         addToLibrary(userInputTitle.value, userInputAuthor.value, userInputPages.value, userInputRead.value);
//     });
// };
 

//  addNewBook();



// // addToLibrary('Hyperspace', 'Michio Kaku', '359', 'Not read yet');
// // addToLibrary('The Quantum Story', 'Jim Baggott', '469', 'Not read yet');
// // addToLibrary('Fallteknikk', 'Inga Sætre', '198', 'Read');
// // addToLibrary('Swann\'s way', 'Marcel Proust', '512', 'Not read yet')
// // addToLibrary('Crime and Punishment', 'Fyodor Dostoyevsky', '492', 'Read')




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
       displayBook.dataset.number = cardValue++;
       container.appendChild(displayBook);

       const toggleReadBtn = document.createElement('button');
            toggleReadBtn.dataset.number = readBtnValue++;
            toggleReadBtn.id = 'toggle';
            toggleReadBtn.textContent = userInputRead.value;
            toggleReadBtn.classList.add('card-item');
            toggleReadBtn.addEventListener('click', (e) => {
                 if (userInputRead.value == 'Read') {
                    userInputRead.value = 'Not read yet'; 
                    toggleReadBtn.textContent = 'Not read';
                    toggleReadBtn.style.background = "transparent";     
                    } else {
                        userInputRead.value = 'Read';                            toggleReadBtn.textContent = 'Read';
                        toggleReadBtn.style.background = "rgba(194, 165, 3, 0.50)";
                        }
                })

        const removeBookBtn = document.createElement('button');
            removeBookBtn.dataset.number = cardItemValue;
            removeBookBtn.id = "remove";
            removeBookBtn.textContent = 'Remove';
            removeBookBtn.classList.add('card-item');
            removeBookBtn.addEventListener('click', (e) => {
                e.target.parentElement.remove();
                console.log(library)
            });

            const bookInfo = document.createElement('div');
                bookInfo.dataset.number = cardItemValue++;
                bookInfo.classList.add('card-item');
                let infoItem = this.title.toString();
                bookInfo.textContent = infoItem;
                displayBook.appendChild(bookInfo);

            displayBook.appendChild(toggleReadBtn);
            displayBook.appendChild(removeBookBtn)
            console.log(library)

    }

    newBook() {
        
    }
}


const book1 = new Book('Hyperspace', 'Michio Kaku', '359', 'Not read yet').addToLibrary();
const book2 = new Book('The Quantum Story', 'Jim Baggott', '469', 'Not read yet').addToLibrary();
const book3 = new Book('Fallteknikk', 'Inga Sætre', '198', 'Read').addToLibrary();
const book4 = new Book('Swann\'s way', 'Marcel Proust', '512', 'Not read yet').addToLibrary();
const book5 = new Book('Crime and Punishment', 'Fyodor Dostoyevsky', '492', 'Read').addToLibrary();