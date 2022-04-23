let todos = [
    {
        id: 1,
        title: "laundry",
        isDone: false
    },
    {
        id: 2,
        title: "homework",
        isDone: false
    },
    {
        id: 3,
        title: "dinner with grandma",
        isDone: false
    }
]


const ulElm = document.querySelector("ul");


const displayTodo = () => {
    console.log(todos)
    ulElm.innerHTML = ''

    
    todos.forEach( todo =>{
        ulElm.innerHTML = `${ulElm.innerHTML} 
        <li>
            <span style="${todo.isDone? 'text-decoration: line-through': '' }";>${todo.title}</span>
            <div>
                <button onClick='deleteTodo(${todo.id})'>Delete</button>
                ${
                    todo.isDone?
                    `<button onClick='toggleMarkDone(${todo.id})' class="unmark-done">Unmark Done</button>`:
                    `<button onClick='toggleMarkDone(${todo.id})'>Mark Done</button>`
                }
            </div>
        </li>`
    })
}



const addTodoBtn = document.querySelector(".add-todo-btn");
addTodoBtn.addEventListener("click", () => {

    const input = document.querySelector("input")

    if(input.value === ""){
        alert()
        return
    }
    
    if(todos.length){
        todos.push({
            id: todos[todos.length-1].id + 1,
            title: input.value,
            isDone: false
        })
    }else{
        todos.push({
            id: 1,
            title: input.value,
            isDone: false
        })
    }


    displayTodo()
})


const toggleMarkDone = (targetId) => {
    console.log("ID: ", targetId)

    const updatedTodos = todos.map(todo => {
        if(targetId === todo.id){
            todo.isDone = !todo.isDone;
        }
        return todo
    })

    console.log("updated todo", updatedTodos)
    displayTodo()
}


const deleteTodo = (targetId) => {
    const updatedTodos = todos.filter(todo => {
        return targetId !== todo.id
    })

    todos = updatedTodos

    displayTodo()
}

displayTodo()


