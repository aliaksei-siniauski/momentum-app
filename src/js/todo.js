export { addClickHandlerToTodoButton };

const addClickHandlerToDoListInput = () => {
    addTaskToToDoList();
    deleteTaskFromToDoList();
}


const addTaskToToDoList = () => {
    let toDoListInput = document.querySelector('.to-do-list__input')
    if (toDoListInput.value === "") {
        toDoListInput.placeholder = "Task cannot be blank";
    }
    else {
        toDoListInput.innerHTML = "";
        document.querySelector('.tasks').innerHTML += `
            <div class="task">
                <p id="taskname">
                    ${toDoListInput.value}
                </p>
                <button class="delete">
                <i class='fas fa-trash-alt' style='font-size:2rem;color:red'></i>
                </button>
            </div>
        `;
        toDoListInput.value = "";
        toDoListInput.placeholder = "";
    }
}

const deleteTaskFromToDoList = () => {
    let tasks = document.querySelectorAll(".delete")
    tasks.forEach((task) => {
        task.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        })
    })
}


const addClickHandlerToTodoButton = document.querySelector('.to-do-list__button').addEventListener("click", addClickHandlerToDoListInput)


/* 
for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
        this.parentNode.remove();
    }
} */