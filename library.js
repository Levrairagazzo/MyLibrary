
let myLibrary = [];
let bookContainer = document.getElementById("bookContainer");


//Book Constructor

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.read = true;
    this.page = 99;
    this.display = function(){
        console.log(title);
    }

    this.card = "Title: " + this.title + "\nAuthor: " + this.author;
    
}

//Test Books
let myBook = new Book("1984", "George Orwell");
let myBook2 = new Book("Animal Farm", "George Orwell");
myLibrary.push(myBook, myBook2);


function addBookToLibrary() {
    let newTitle = document.getElementById('title');
    let newAuthor = document.getElementById('author');

    let newBook = new Book(newTitle.value, newAuthor.value);
    myLibrary.push(newBook);
    newTitle.value = "";
    newAuthor.value = "";
    
  
}

function displayLibrary(){
    let ul = document.createElement('ul');
    bookContainer.appendChild(ul);
    ul.style.listStyle = 'none';

    for (let i = 0; i < myLibrary.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = myLibrary[i].card;
        ul.appendChild(li);
        
    }
       

    

   
}