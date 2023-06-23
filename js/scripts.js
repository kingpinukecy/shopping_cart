const todo_input=document.querySelector(".todo_name");
const todoButton=document.querySelector(".todo_btn");
const todo_list=document.querySelector(".todo_list");
const filterOption=document.querySelector(".todo_filter");

document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("click", addTodo);
todo_list.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(e){
    e.preventDefault();
    let inputValue=todo_input.value;
    if(inputValue==""){
        alert("Please fill in the box");
    }
    else{
        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo=document.createElement("li");
        newTodo.innerText=todo_input.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        //ADDING TO LOCAL STORAGE
        saveLocalTodos(todo_input.value);

        const completeButton=document.createElement("button");
        completeButton.innerHTML='<li class="fas fa-check-circle"></li>';
        completeButton.classList.add("complete-btn");
        todoDiv.appendChild(completeButton);

        const trashButton=document.createElement("button");
        trashButton.innerHTML='<li class="fas fa-trash"></li>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todo_list.appendChild(todoDiv);
        todo_input.value="";
    }
}
function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("slide");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function filterTodo(e){
    const todos=todo_list.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
            break;
            case "incomplete":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
            break;
        }
    })
}
//SAVING TO LOCAL STORAGE
function saveLocalTodos(todo){
    let todos;
        if(localStorage.getItem("todos")=== null){
            todos=[];
        }
        else{
            todos=JSON.parse(localStorage.getItem("todos"));
        }
        todos.push(todo);
        localStorage.setItem("todos",JSON.stringify(todos));
}
//FETCHING FROM LOCAL STORAGE
function getLocalTodos(){
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
     todos.forEach(function(todo){
        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo=document.createElement("li");
        newTodo.innerText=todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const completeButton=document.createElement("button");
        completeButton.innerHTML='<li class="fas fa-check-circle"></li>';
        completeButton.classList.add("complete-btn");
        todoDiv.appendChild(completeButton);

        const trashButton=document.createElement("button");
        trashButton.innerHTML='<li class="fas fa-trash"></;i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        todo_list.appendChild(todoDiv);
     });
}