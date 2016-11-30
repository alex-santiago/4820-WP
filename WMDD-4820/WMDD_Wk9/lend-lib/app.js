function dw(line){ return document.write(line+"<br />");}

document.getElementById("btn-lib").addEventListener("mouseover", showAllBooks);



let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', available: true},
  {author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', available: true},
  {author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', available: true},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', available: false},
  {author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', available: false}
]

function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let name = books.filter((x) => x.author === aName)
  try {
    document.getElementById('result').innerHTML = 'yes we have at least one book by ' + name[0].author
  }
  catch (err) {
    document.getElementById('result').innerHTML = 'sorry no books by ' + aName
  }
}

function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let name = books.filter((x) => x.author.indexOf(aName) !== -1)
  console.log(name.length)
  if (name.length > 0) {
    hideAllBooks('result')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  }
  else {
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}

function authSearchRegEx () {
  let aName = document.getElementById('authorSearch').value;
  let arrMatch = [];
  let arrBooksNames = [];
  let regex = `/${aName}+/g/i`;

  try {

    // aName = "Thomas";
    regex = `/${aName}|\\s(${aName})|(${aName})\\s/gi`; 
    arrMatch = regex.match(books[0].author);

    for(i=0;i<books.length;i++){
      arrMatch = regex.match(books[i].author);
      if (arrMatch != null) {
        arrBooksNames.push(books[i].title);
      }
    }

    document.getElementById('result').innerHTML = `We found the following books with this author: ${arrBooksNames}`;
    // document.getElementById('result').innerHTML = 'yes we have at least one book by ' + name[0].author
  }
  catch (err) {
    document.getElementById('result').innerHTML = 'sorry no books by ' + aName;
  }
}

function Book(author, title) {
      this.author = author;
      this.title = title;
}

function addBook (book) {
  // function to add books
  // homework, make this work

  try {
    var newAuthor = document.getElementById("author").value;
    var newBook = document.getElementById("book").value;
    book = new Book(newAuthor, newBook);
    books.push(book);
    document.getElementById('add-err').innerHTML = 'Book ' + document.getElementById("book").value + ' was added ';
    document.getElementById("author").value = '';
    document.getElementById("book").value = '';
  }
  catch (err) {
    document.getElementById('add-err').innerHTML = 'sorry no books were added ';
  }
}

function hideAllBooks () {
  document.getElementById('allTheBooks').innerHTML = "";  
}

function showAllBooks () {
  if (books.length > 0) {
    hideAllBooks();
    for (i=0; i<books.length; i++) {
      let listItem = document.createElement('li');
      let textnode = document.createTextNode(books[i].title);
      listItem.appendChild(textnode);
      document.getElementById('allTheBooks').appendChild(listItem);
    }    
  }
}
