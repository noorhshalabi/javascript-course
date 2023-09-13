//1. Create array to store todos
//2. When we click "Add", get text from box, add to array
//3. log it into console
//cant have multiple paragraphs within 1 p. need to use div
const todoList = [
  { 
    name: 'make dinner',
    dueDate: '2022-12-22'
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  //generating the HTML, populating in div
  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html =`
      <div>
        ${name} 
      </div>
      <div>
      ${dueDate}
      </div>
        <button onclick="
          todoList.splice(${i},1);
          renderTodoList();
        " class="delete-button">Delete</button>
      `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
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