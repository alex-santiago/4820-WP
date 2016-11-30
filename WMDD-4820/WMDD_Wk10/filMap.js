let firstArr = [1, 2, 3, 4, 5]

let secondArr = [
  {name: 'one', type: 'num'},
  {name: 'a', type: 'alpha'},
  {name: 'four', type: 'num'},
  {name: 'fifteen', type: 'num'},
  {name: 'b', type: 'alpha'}
]

let mmaped = firstArr.map((x) => x * x)

console.log(mmaped)

let mfiltered = secondArr.filter((x) => x.type === 'num')

console.log(mfiltered)

