let books = [
  {bid: 1, author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2, available: 2},
  {bid: 2,author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 3, available: 3},
  {bid: 3,author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1, available: 1},
  {bid: 4,author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1, available: 1},
  {bid: 5,author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 4, available: 4}
]

// Creates a catalog of books 
let bookcatalog = new Map();
// Create a user table Map with the pair (key/object) using the ID as key 
let users = new Map();

(function() {
  users.set(1, {ID: 1, usrname: 'Alexandre Silva'});
  users.set(2, {ID: 2, usrname: 'Alexandre Santiago'});
  users.set(3, {ID: 3, usrname: 'Alexandre Santiago da Silva'});


  bookcatalog.set(1, {bid: 1, author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2, available: 2});
  bookcatalog.set(2, {bid: 2,author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 3, available: 3});
  bookcatalog.set(3, {bid: 3,author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1, available: 1});
  bookcatalog.set(4, {bid: 4,author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1, available: 1});
  bookcatalog.set(5, {bid: 5,author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 4, available: 4} );
}) (); 


function alterBook () {
  let bookID = document.getElementById('book_id').value;
  if (bookID === '') {
    document.getElementById('err_state_lib').innerHTML = 'Book added to library catalog.';
  }
  else {
    add_modifyBook (Number(bookID));
    // Insert the new book in the catalog table
  }
}

function add_modifyBook (bookID) {
  document.getElementById('err_state_lib').innerHTML = '';
  let autName = document.getElementById('book_author').value;
  let bookTitle = document.getElementById('book_name').value;
  let bookGenre = document.getElementById('book_genre').value;
  let bookCopies = document.getElementById('book_copies').value;
  bookcatalog.set(Number(bookID), {bid: Number(bookID), author: autName, title: bookTitle, genre: bookGenre, copies: bookCopies, available: bookCopies});
  books.push({bid: bookID, author: autName, title: bookTitle, genre: bookGenre, copies: bookCopies, available: bookCopies});
  // Show the book ID generated
  document.getElementById('book_id').value = bookID;
  document.getElementById('err_state_lib').innerHTML = 'Book altered on library catalog.';
}

// Add a book to library
function addBook () {
  let bookID = fnGenID();
  add_modifyBook (bookID);
  // Insert the new book in the catalog table
  document.getElementById('err_state_lib').innerHTML = '';
  document.getElementById('err_state_lib').innerHTML = 'Book added to library catalog.';
}

// List a book from catalog
function listBook () {
  document.getElementById('err_state_lib').innerHTML = '';
  listID = document.getElementById('book_search').value;
  document.getElementById('book_search').value = '';
  let book_listed =  bookcatalog.get(Number(listID));
  clearBookform();
  if (book_listed != undefined) {
    document.getElementById('book_author').value = book_listed.author;
    document.getElementById('book_name').value = book_listed.title;
    document.getElementById('book_genre').value = book_listed.genre;
    document.getElementById('book_copies').value = book_listed.copies;
    document.getElementById('book_available_copies').value = book_listed.available;
    document.getElementById('book_id').value = book_listed.bid;
    document.getElementById('err_state_lib').innerHTML = 'Book listed.';
  }
  else {
    document.getElementById('err_state_lib').innerHTML = 'No book found on library catalog.';
  }
}


// Search for a book
function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let name = books.filter((x) => x.author.indexOf(aName) !== -1)
  if (name.length > 0) {
    clearList('result')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.bid} - ${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    clearList('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}


// Search for a book
function genreSearch () {
  let aGenre = document.getElementById('genreSearch').value
  let genre = books.filter((x) => x.genre.indexOf(aGenre) !== -1)
  if (genre.length > 0) {
    clearList('result')
    genre.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.bid} - ${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    clearList('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aGenre} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}

// Search for a book
function titleSearch () {
  let aTitle = document.getElementById('titleSearch').value
  let title = books.filter((x) => x.title.indexOf(aTitle) !== -1)
  if (title.length > 0) {
    clearList('result')
    title.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.bid} - ${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    clearList('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aTitle} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}


function getBook () {
  document.getElementById('err_state_lend').innerHTML = '';
  listID = document.getElementById('book_get').value;
  document.getElementById('book_get').value = '';
  let book_listed =  bookcatalog.get(Number(listID));
  clearBookform();
  if (book_listed != undefined) {
    document.getElementById('lendbook_id').value = book_listed.bid;
    document.getElementById('lendbook_name').value = book_listed.title;
    document.getElementById('lendbook_total_copies').value = book_listed.copies;
    document.getElementById('lendbook_available_copies').value = book_listed.available;
    document.getElementById('err_state_lend').innerHTML = 'Book listed.';
  }
  else {
    document.getElementById('err_state_lend').innerHTML = 'No book found on library catalog.';
  }
}

function getUser () {
  document.getElementById('err_state_lend_user').innerHTML = '';
  userID = document.getElementById('user_get').value;
  document.getElementById('user_get').value = '';
  let user_listed =  users.get(Number(userID));
  document.getElementById('lenduser_id').value = '';
  document.getElementById('lenduser_name').value = '';
  if (user_listed != undefined) {
    document.getElementById('lenduser_id').value = user_listed.ID;
    document.getElementById('lenduser_name').value = user_listed.usrname;
    document.getElementById('err_state_lend_user').innerHTML = 'User listed.';
  }
  else {
    document.getElementById('err_state_lend_user').innerHTML = 'No user found on library.';
  }
}


let ArrloansbyUser = [];
let ArrloansbyBook = [];
let loansbyUser= new Map();
let loansbyBook = new Map();

function lendBook () {
  document.getElementById('err_state_lend_user').innerHTML = '';
  let luserID = document.getElementById('lenduser_id').value;
  let lbookID = document.getElementById('lendbook_id').value;
  let totalcopies = document.getElementById('lendbook_total_copies').value;
  let availableBooks = document.getElementById('lendbook_available_copies').value;
  let bookloan = {ID: '', bookID: '', loanDate: '', dueDate: ''};
  let today = new Date();
  let dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7) ;

  if ((luserID != '') && (lbookID != '')) {
    if (availableBooks > 0) {
      let book_digit = totalcopies - availableBooks;
      bookloan.ID = luserID;
      bookloan.bookID = lbookID;
      bookloan.loanDate = `${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`;
      bookloan.dueDate = `${dueDate.getFullYear()}/${dueDate.getMonth()}/${dueDate.getDate()}`;
      document.getElementById('lblloandate').innerHTML = bookloan.loanDate;    
      document.getElementById('lblduedate').innerHTML = bookloan.dueDate;

      // Calculate available books and update in catalog
      let originalbook = bookcatalog.get(Number(lbookID));
      originalbook.available -= 1;
      bookcatalog.set(Number(lbookID), originalbook);
      // Set the user book loan
      // bookloansbyUser.push(bookloan);

      ArrloansbyUser.push(luserID);
      loansbyBook.set(Number(lbookID), loansbyUser);

      ArrloansbyBook.push(bookloan);
      loansbyUser.set(Number(luserID), ArrloansbyBook);
    }
    else {
      document.getElementById('err_state_lend_user').innerHTML = 'No book available to lend.';    
    }
  }
  else {
    document.getElementById('err_state_lend_user').innerHTML = 'Select a valid book and user to lend.';    
  }
}

function listLoansbyUser () {
  // Select user from loansbyUser
  clearList('Bookloans');
  let userID = document.getElementById('lenduser_id').value;
  ArrloansbyBook = loansbyUser.get(Number(userID));
  if (ArrloansbyBook != undefined) {
    for(let i = 0; i<ArrloansbyBook.length; i++) {
      bookloan = ArrloansbyBook[i];
      let booktitle = bookcatalog.get(Number(bookloan.bookID)).title;
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`BookID: ${bookloan.bookID} - ${booktitle} Loan Date: ${bookloan.loanDate} Due Date: ${bookloan.dueDate}`);
      listItem.appendChild(textnode)
      document.getElementById('Bookloans').appendChild(listItem);
    }
  }
  else {
    // User does not have a loan
    document.getElementById('err_state_lend_user').innerHTML = 'Select user does not have a loan.';    
  }
}

// List all books
function listAllBooks () {
  document.getElementById('authorSearch').value = '';
  authSearch();
}

function clearList (id) {
  document.getElementById(id).innerHTML = ''
}

function clearBookform () {
  document.getElementById('book_author').value = '';
  document.getElementById('book_name').value = '';
  document.getElementById('book_genre').value = '';
  document.getElementById('book_copies').value = '';
  document.getElementById('book_available_copies').value = '';
  document.getElementById('book_id').value = '';
}

// event listeners
document.getElementById('titSearch').addEventListener('click', titleSearch);
document.getElementById('autSearch').addEventListener('click', authSearch);
document.getElementById('genSearch').addEventListener('click', genreSearch);
document.getElementById('btn_lst_books').addEventListener('click', listAllBooks);
document.getElementById('btn_listBook').addEventListener('click', listBook);
document.getElementById('btn_addBook').addEventListener('click', addBook);
document.getElementById('btn_altBook').addEventListener('click', alterBook);
document.getElementById('btn_listBookLend').addEventListener('click', getBook);
document.getElementById('btn_listUser').addEventListener('click', getUser);
document.getElementById('btn_lend').addEventListener('click', lendBook);
document.getElementById('btn_listuserloans').addEventListener('click', listLoansbyUser);





//