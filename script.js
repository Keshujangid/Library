const showForm = document.querySelector('.show-form');
const dialog = document.querySelector('dialog');
const tBody = document.querySelector('tbody')
const closeButton = document.querySelector('#close-button')
const submitBtn = dialog.querySelector('#submit')
const inputs = Array.from(dialog.querySelectorAll('input'))
const form = document.querySelector('form')
let book = 0;


showForm.addEventListener('click', () => {
  dialog.showModal()
})

closeButton.addEventListener('click', (event) => {
  clearInput();

  event.preventDefault();
})


form.addEventListener("submit", (event) => {
  myLibrary.push(new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].checked));
  // console.log('myLibrary .push pass');

  addBookToLibrary()

  clearInput();
  event.preventDefault();

})

function clearInput() {
  for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].value = ''
  }
  inputs[3].checked = false

  dialog.close();
}


const myLibrary = [];

// function Book(bookName, authorName, numberOfPage, readStatus) {
//   // the constructor...
//   this.bookName = bookName
//   this.authorName = authorName
//   this.numberOfPage = numberOfPage
//   this.readStatus = readStatus
// }


class Book {
  constructor(bookName, authorName, numberOfPage, readStatus) {
      this.bookName = bookName;
      this.authorName = authorName;
      this.numberOfPage = numberOfPage;
      this.readStatus = readStatus;
  }
}

function addBookToLibrary() {
  let tr = document.createElement('tr')
  tr.setAttribute("data-bookNumber" , book)
  tBody.appendChild(tr);

  // 
  tr.innerHTML = `
<td>${myLibrary[book].bookName}</td>
<td>${myLibrary[book].authorName}</td>
<td>${myLibrary[book].numberOfPage}</td>
<td>
    <select name="read-status" class="read-status">
        <option value="not-read" ${myLibrary[book].readStatus ? '' : 'selected'}>Not Read</option>
        <option value="read" ${myLibrary[book].readStatus ? 'selected' : ''}>Read</option>
    </select>
</td>
<td>
    <button class="delete-button" data-bookNumber = ${book}>Delete</button>
</td>
`;


  // Add the event listener for the delete button in this function
  const deleteButton = tr.querySelector(".delete-button");
  console.log(deleteButton);
  deleteButton.addEventListener("click", function () {
      book--;
      const bookNumber = this.getAttribute("data-bookNumber");
      console.log(bookNumber);
      // Call a function to remove the book from the library and the table
      removeBookFromLibrary(bookNumber);
  });

  book++;

}


// Function to remove a book from the library and table
function removeBookFromLibrary(bookNumber) {
  // Remove the book from the library array
  myLibrary.splice(bookNumber, 1);

  // Remove the corresponding row from the table
  const rowToRemove = document.querySelector(`[data-bookNumber="${bookNumber}"]`);
  console.log(rowToRemove);
  if (rowToRemove) {
      rowToRemove.remove();
  }
  reassignDataBookNumbers();
}


function reassignDataBookNumbers() {
  
  const rows = tBody.querySelectorAll("tr");
  rows.forEach((row, index) => {
      row.setAttribute("data-bookNumber", index);
      const deleteButton = row.querySelector(".delete-button");
      deleteButton.setAttribute("data-bookNumber", index);
  });
}