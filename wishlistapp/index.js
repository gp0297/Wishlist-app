let todoInput = document.querySelector(".input");
let addtodoButton = document.querySelector(".button");
let showTodos=document.querySelector(".todos-container");
let todo="";
let todoList = [];


function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


addtodoButton.addEventListener("click",(e)=>{
    /*here "e" is event and the function is to preventDefault is used to avoid the form submission and refreshing every time.*/
    e.preventDefault();
    todo = todoInput.value;
    if(todo.length > 0){
        todoList.push({id: uuid(), todo, isCompleted: false })
    }
    renderTodolist(todoList)
    todoInput.value="";
})

showTodos.addEventListener("click",(e)=>{
    let key=e.target.dataset.key;
    let delTodokey = e.target.dataset.todokey;
    todoList = todoList.map(todo => todo.id ===key ? {...todo, isCompleted: !todo.isCompleted} : todo);
    todoList = todoList.filter(todo => todo.id !== delTodokey)
    renderTodolist(todoList);

})
function renderTodolist(todoList){
    showTodos.innerHTML = todoList.map(({id, todo, isCompleted})=>`<div class=""> 
                                                       <input type="checkbox" ${isCompleted ? "checked":"" }id="item-${id} " data-key=${id}></input>
                                                       <label for="item-${id}" class="todo todod-text t-pointer ${isCompleted ? "checked-todo" : " "}" data-key=${id}>${todo}</label>
                                                       <button class="" data-todokey=${id}>delete</button>
                                                       </div>`)
    
                           

}
renderTodolist(todoList)