//Goal of lesson 12 is to use the more practical way of for each


//1. Create array to store todos
//2. When we click "Add", get text from box, add to array
//3. log it into console
//cant have multiple paragraphs within 1 p. need to use div
const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button js-delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  
  const dueDate = dateInputElement.value;
  const name = inputElement.value;

  todoList.push(
    {
      name,
      dueDate
    }
  );
  inputElement.value = ''; //resetting text in text box
  renderTodoList(); //every time we add to do, we display at the bottom
}
