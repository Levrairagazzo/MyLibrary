
let myLibrary = [];
let bookContainer = document.getElementById("bookContainer");



//Book Constructor

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.read = true;
    this.page = pages;

    this.bookCard = "Title: " + this.title + "\nAuthor: " + this.author + "Pages: " + this.page;
    
}

//Test Books
let myBook = new Book("1984", "George Orwell", 99);
let myBook2 = new Book("Animal Farm", "George Orwell", 99);
myLibrary.push(myBook, myBook2);


function addBookToLibrary() {
    let newTitle = document.getElementById('title');
    let newAuthor = document.getElementById('author');
    let newPages = document.getElementById('pages');
    console.log(newPages.value);

    let newBook = new Book(newTitle.value, newAuthor.value, newPages.value);
    myLibrary.push(newBook);
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";

    displayBook(newBook);
    
  
}

// function displayLibrary(){
//     let ul = document.createElement('ul');
//     bookContainer.appendChild(ul);
//     ul.style.listStyle = 'none';

//     for (let i = 0; i < myLibrary.length; i++) {
//         let li = document.createElement('li');
//         li.innerHTML = myLibrary[i].card;
//         ul.appendChild(li);
        
//     }
          
// }

function displayBook(myBook){
    let ul = document.getElementById('books');
    let li = document.createElement('li');
    li.innerHTML = myBook.bookCard;
    ul.appendChild(li);
}