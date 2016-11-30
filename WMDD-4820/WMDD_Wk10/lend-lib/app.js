let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', available: true},
  {author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', available: true},
  {author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', available: true},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', available: false},
  {author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', available: false}
]

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

function addBook (book) {
  let autName = document.getElementById('addBookName').value
  let bookTitle = document.getElementById('addBookTitle').value
  let bookGenre = document.getElementById('addBookGenre').value
  books.push({author: autName, title: bookTitle, genre: bookGenre})
}

// event listeners
document.getElementById('autSearch').addEventListener('click', authSearch)
document.getElementById('booksInLib').addEventListener('mouseover', showAllBooks)
document.getElementById('booksInLib').addEventListener('mouseout', function() {hideAllBooks('allTheBooks')})
document.getElementById('addBook').addEventListener('click', addBook)

function hideAllBooks (id) {
  document.getElementById(id).innerHTML = ''
}

// function showAllBooks () {
//   hideAllBooks()
//   for (let i = 0; i < books.length; i++) {
//     let listItem = document.createElement('li')
//     let textnode = document.createTextNode(`${books[i].title} by ${books[i].author} in ${books[i].genre}`)
//     listItem.appendChild(textnode)
//     document.getElementById('allTheBooks').appendChild(listItem)
//   }
// }

function showAllBooks () {
  hideAllBooks('allTheBooks')
  books.forEach((x) => {
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
    listItem.appendChild(textnode)
    document.getElementById('allTheBooks').appendChild(listItem)
  })
}