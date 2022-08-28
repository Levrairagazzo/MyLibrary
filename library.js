
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

function validateForm() {
    let formTitle = document.forms["myForm"]["bookTitle"].value;
    let formAuthor = document.forms["myForm"]["bookAuthor"].value;
    if (formAuthor === "" || formTitle === "") {
      alert("Make sure everything is filled out.");
      return false;
    }
    else{
    addBookToLibrary();
    return true;
    }
  }


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

function checkForm(){
    let newTitle = document.getElementById('title');
    let newAuthor = document.getElementById('author');
    let newPages = document.getElementById('pages');

    if(newTitle.value === '' || newAuthor.value === ''||newPages.value === '')
        return false;
    else
        return true;
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
    let bookshelf = document.getElementById('books');
    let book = document.createElement('div');
    let titlee = document.createElement('p');
    let author = document.createElement('p');
    let numPages = document.createElement('p');
    let deleteButton = document.createElement('button');
    


    deleteButton.textContent = "Delete Book";
    deleteButton.addEventListener("click", function() {
       book.remove();
      });
    titlee.innerHTML = myBook.title;
    author.innerHTML = myBook.author;
    numPages.innerHTML = myBook.page + " pages";


    
    bookshelf.appendChild(book);
    book.appendChild(titlee);
    book.appendChild(author);
    book.appendChild(numPages);
    book.appendChild(deleteButton);
}


const testBook = new Book("The Adventures of Tom Sawyer", "Mark Twain", 250);

displayBook(testBook);