class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get showBook(){
        return this.title + " " + this.author + " " + this.pages + " " + this.read;
    }
}

class Library{
    constructor(){
        this.library = [];
    }

    get showAll(){
        return this.library
    }

    addBookToLibrary(title, author, pages, read){
        const newBook = new Book(title, author, pages, read);
        this.library.push(newBook);
    }
}

const newLibrary = new Library();

newLibrary.addBookToLibrary("Moby-Dick", "Herman Melville", 378, false);
newLibrary.addBookToLibrary("The Wings", "Yi Sang", 34, false);
newLibrary.addBookToLibrary("Demian", "Hermann Hesse", 390, false);


/* Display function */
const table = document.querySelector("tbody");

function display(){
    let child = table.lastElementChild;
    while(child){
        table.removeChild(child);
        child = table.lastElementChild;
    }
    let index = 0;
    newLibrary.showAll.forEach((book) => {
        book.index = index;
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

        const col5 = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.style["display"] = "block";
        deleteBtn.style["margin"] = "auto";
        deleteBtn.addEventListener("click", ()=> {
            newLibrary.showAll.splice(book.index, 1);
            display();
        });
        col5.appendChild(deleteBtn);
        row.appendChild(col5);

        const col6 = document.createElement("td");
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.style["display"] = "block";
        updateBtn.style["margin"] = "auto";
        updateBtn.addEventListener("click", ()=> {
            book.read = !(book.read);
            display();
        });
        col6.appendChild(updateBtn);
        row.appendChild(col6);

        table.append(row);

        
        index++;
    });
}

display();
/*  */

/* For dialog container */
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#showButton");
const closeButton = document.querySelector("#closeButton");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});
/*  */

/* Creating and adding new books */
const form = document.querySelector("form")
const submitButton = document.querySelector("#submitButton");
const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

submitButton.addEventListener("click", (event) =>{
    if(author.checkValidity() && title.checkValidity() && pages.checkValidity()){
        event.preventDefault();
        newLibrary.addBookToLibrary(author.value, title.value, pages.value, read.checked);
        display();
        dialog.close();
        form.reset();
    } else {
        author.reportValidity();
        title.reportValidity();
        pages.reportValidity();
    }
});
/*  */