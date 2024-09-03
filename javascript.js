const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newBook.index = myLibrary.length - 1;
}   

addBookToLibrary("Hi", "Bye", 3, true);
addBookToLibrary("2", "1", 1000, false);
addBookToLibrary("32", "12", 2323, true);

const table = document.querySelector("table");

function display(){
    myLibrary.forEach((book) => {
        const row = document.createElement("tr");
        const col0 = document.createElement("th");
        col0.textContent = book.index + 1;
        row.appendChild(col0);
        const col1 = document.createElement("td");
        col1.textContent = book.title;
        row.appendChild(col1);
        const col2 = document.createElement("td");
        col2.textContent = book.author;
        row.appendChild(col2);
        const col3 = document.createElement("td");
        col3.textContent = book.pages;
        row.appendChild(col3);
        const col4 = document.createElement("td");
        col4.textContent = book.read;
        row.appendChild(col4)
        table.append(row);
    });
}

display();