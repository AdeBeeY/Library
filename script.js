let myLibrary = [];

const output = document.querySelector('.js-output');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name) {
  myLibrary.push(name);
  return myLibrary;
}

const book1 = new Book('The Reacher', 'Jason Statam', 329, 'No');
const book2 = new Book('House of Flames ', 'Brad Taylor', 240, 'Yes');

console.table(addBookToLibrary(book1));
console.table(addBookToLibrary(book2));

const bookForm = document.querySelector('#bookForm');

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const title = document.querySelector('#title').value;
  console.log(title);
  const author = document.querySelector('#author').value;
  console.log(author);
  const pages = document.querySelector('#pages').value;
  console.log(pages);
  const read = document.querySelector('#read').value;
  console.log(read);

  myLibrary.push(new Book (
  title, author, Number(pages), read
  ));

  console.table(myLibrary);
  displayBooks();
  bookForm.style = "display: none";
});

function displayBooks() {
  let display = '';
  for(let i = 0; i < myLibrary.length; i++) {
    let title = myLibrary[i].title;
    let author = myLibrary[i].author;
    let pages = myLibrary[i].pages;
    let read = myLibrary[i].read;

    let html = `
      <div class="title">${title}</div>
      <div class="author">${author}</div>
      <div>${pages}</div>
      <div>${read}</div>
      <button class="js-read-status-btn read-status-btn" onclick="
        myLibrary[${i}].read = myLibrary[${i}].read === 'Yes'?'No': 'Yes';
        console.log(myLibrary);
        displayBooks();
      " >Toggle Read</button>
      <button class="js-del-btn del-btn" onclick = "
        myLibrary.splice(${i}, 1);
        displayBooks();
      " 
      >Delete Book</button>
    `;
    display += html;
  }
  console.log(display);
  output.innerHTML = display;
}
displayBooks();

const addNewBook = document.querySelector('.js-add-btn');
addNewBook.addEventListener('click', () => {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#read').value = '';
  bookForm.style = "display: block";
});
