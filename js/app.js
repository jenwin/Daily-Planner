let itemId1 = 0;
let itemId2 = 9999999999999;
let itemId3 = 9999999;
let itemList;

//main
const mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.classList.add('main-container');

//user input
const userInput = document.createElement('input');
const divInputContainer = document.createElement('div');
const divContentContainer = document.createElement('div');
mainDiv.appendChild(divContentContainer);
divContentContainer.appendChild(divInputContainer);
divInputContainer.appendChild(userInput);
userInput.setAttribute('type', 'text');
userInput.setAttribute('id', 'input');
userInput.setAttribute('placeholder', 'What to do today?');
userInput.setAttribute('maxlength', '25');
divContentContainer.classList.add('content-container');
divInputContainer.classList.add('input-container');

//add button
const addBtn = document.createElement('button');
const spanContainer = document.createElement('span');
divInputContainer.appendChild(addBtn);
addBtn.setAttribute('id', 'add-btn');
addBtn.setAttribute('type', 'button');
addBtn.appendChild(spanContainer);
spanContainer.setAttribute('id', 'add-plus');
document.getElementById('add-plus').innerHTML = "+";

//create div, ul, and append
const div = document.createElement('div');
const ul = document.createElement('ul');
divContentContainer.appendChild(div);
div.appendChild(ul);
div.classList.add('todo-container');
ul.classList.add('todos-list');

//footer
const footerDiv = document.createElement('div');
const footerPara = document.createElement('p');
document.body.appendChild(footerDiv);
footerDiv.appendChild(footerPara);
footerPara.classList.add('author');
document.getElementsByClassName('author')[0].innerHTML = "© JENNIFER NGUYEN";
footerPara.setAttribute('tabindex', '0');

const completedDiv = document.createElement('div');
const completedPara = document.createElement('p');
const completedUl = document.createElement('ul');

//adding todos to the todo list
document.getElementById('add-btn').addEventListener('click', addTodo);
function addTodo() {
  //user input, list, checkbox
  const input = document.getElementById('input').value;
  const list = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  ul.appendChild(list);
  list.appendChild(checkBox);

  //new todos
  const todoDiv = document.createElement('div');
  const newTodo = document.createTextNode(input);
  list.appendChild(todoDiv);
  todoDiv.appendChild(newTodo);
  todoDiv.classList.add('todo-text');
  todoDiv.setAttribute('tabindex', '0');
  list.classList.add('todo-list');

  //deleting a todo
  itemId1+=1;
  list.setAttribute('id', itemId1);
  const deleteBtn = document.createElement('button');
  const btnLabel = document.createTextNode("x");
  deleteBtn.appendChild(btnLabel);
  deleteBtn.classList.add('delete-todo');
  deleteBtn.setAttribute('onclick', 'deleteTodo("'+itemId1+'")');
  deleteBtn.setAttribute('aria-label', 'delete');
  list.appendChild(deleteBtn);

  //strike through a todo
  itemId2+=4;
  todoDiv.setAttribute('id', itemId2);
  todoDiv.setAttribute('onclick', 'strikeTodo("'+itemId2+'")');

  //completed
  itemId3+=1;
  checkBox.setAttribute('id', itemId1);
  checkBox.setAttribute('class', itemId3);
  checkBox.setAttribute('onclick', 'completedTodo("'+itemId1+'", "'+itemId3+'")');

  //completed todos
  divContentContainer.appendChild(completedDiv);
  completedDiv.prepend(completedPara);
  completedDiv.appendChild(completedUl);
  completedPara.classList.add('completed-label');
  document.getElementsByClassName('completed-label')[0].innerHTML = "Completed Tasks";
  completedDiv.classList.add('completed-container');
  completedUl.classList.add('completed-ul');
}

//delete todos
function deleteTodo(itemId1) {
  itemList = document.getElementById(itemId1);
  const completed = itemList.parentElement.classList.contains('todos-list');
  if (completed === true) {
    ul.removeChild(itemList);
  } else {
    completedUl.removeChild(itemList);
  }
}

//strike through a todo
function strikeTodo(itemId2) {
  const itemText = document.getElementById(itemId2);
  itemText.classList.toggle('strike');
}

//completed todos
function completedTodo(itemId1, itemId3) {
  itemList = document.getElementById(itemId1);
  const itemInput = document.getElementsByClassName(itemId3)[0];
  if (true) {
    itemInput.checked ? true : false;
    completedUl.appendChild(itemList);
  }
  if (itemInput.checked === false) {
    ul.appendChild(itemList);
  }
}

//enter todo with key
document.getElementById('input').addEventListener('keyup', enterTodo);
function enterTodo(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addTodo();
  }
}