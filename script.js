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

closeButton.addEventListener('click', () => {
  // for (let i = 0; i < inputs.length - 1; i++) {
  //   inputs[i].value = ''
  // }
  // inputs[3].checked = false
  // dialog.close();
  clearInput();
})


// const bookInfo = {}
form.addEventListener("submit", (event) => {

  myLibrary.push(new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].checked));

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

function Book(bookName, authorName, numberOfPage, readStatus) {
  // the constructor...
  this.bookName = bookName
  this.authorName = authorName
  this.numberOfPage = numberOfPage
  this.readStatus = readStatus
}

// let book1 = new Book('Ice and fire', 'keshu', 8, true);

// myLibrary.push(book1)


function addBookToLibrary() {
  // do stuff here
  let tr = document.createElement('tr')
  tBody.appendChild(tr);


  let td1 = document.createElement('td')
  tr.appendChild(td1);
  td1.textContent = myLibrary[book].bookName
  let td2 = document.createElement('td')
  tr.appendChild(td2);
  td2.textContent = myLibrary[book].authorName
  let td3 = document.createElement('td')
  tr.appendChild(td3);
  td3.textContent = myLibrary[book].numberOfPage
  let td4 = document.createElement('td')
  tr.appendChild(td4);
  // let td5 = document.createElement('td')
  // const deleteBtn = document.createElement('button')
  // td5.appendChild(deleteBtn)
  // tr.appendChild(td5)

  // td4.textContent = myLibrary[book].readStatus ? 'read' : 'not read'
  // Create a select element
  var selectElement = document.createElement("select");
  selectElement.setAttribute("name", "read-status");
  selectElement.setAttribute("id", "readStatus");

  // Create the "not read" option
  var notReadOption = document.createElement("option");
  notReadOption.setAttribute("value", "not-read");
  notReadOption.textContent = "Not Read";

  // Create the "read" option
  var readOption = document.createElement("option");
  readOption.setAttribute("value", "read");
  readOption.textContent = "Read";

  // Append the options to the select element

  if (myLibrary[book].readStatus) {
    selectElement.appendChild(readOption);
    selectElement.appendChild(notReadOption);
  }
  else {
    selectElement.appendChild(notReadOption);
    selectElement.appendChild(readOption);
  }

  td4.appendChild(selectElement);




  book++;

  // td.textContent = myLibrary[0]
  // document.createElement('td')
  // tr.appendChild(td);
  // document.createElement('td')
  // tr.appendChild(td);

}

