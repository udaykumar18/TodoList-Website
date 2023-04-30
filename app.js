//SELECTORS

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

const filterOption = document.querySelector(".filter-todo");

//Event Listeners

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  //PREVENT form from submitting
  event.preventDefault();
  //TODO DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI
  const newTodo = document.createElement("li");

  newTodo.innerText = todoInput.value; // input value assign to li
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //checkmark button
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);

  //trash buttton
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  //APPEND DIV TO UL LIST
  todoList.appendChild(todoDiv);

  //Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const targetItem = e.target;

  //DELETE TODO
  if (targetItem.classList[0] === "trash-btn") {
    const todo = targetItem.parentElement;
    //ANIMATION
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //CHECK MARK
  if (targetItem.classList[0] === "complete-btn") {
    const todo = targetItem.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
