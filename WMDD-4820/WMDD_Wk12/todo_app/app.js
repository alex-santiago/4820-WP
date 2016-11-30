const addTodoItems = document.querySelector('#addTodoItem')
const todoDiv = document.querySelector('#todoDiv')
const addTodo = document.querySelector('#addTodo')

function addTodoButtons (li) {
  let deleteTodo = document.createElement('button')
  deleteTodo.textContent = 'delete'
  li.appendChild(deleteTodo)
}

addTodo.addEventListener('click', () => {
  let todoList = document.querySelector('ol')
  let li = document.createElement('li')
  li.textContent = addTodoItems.value
  addTodoButtons(li)
  todoList.appendChild(li)
  addTodoItems.value = ''
})

todoDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    let li = event.target
    if (li.style.color !== 'indianred') {
      li.style.color = 'indianred'
      li.style.textDecoration = 'line-through'
    } else {
      li.style.color = '#555'
      li.style.textDecoration = 'none'
    }
  }
})

todoDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    let li = event.target.parentNode
    let ol = li.parentNode
    ol.removeChild(li)
  }
})
