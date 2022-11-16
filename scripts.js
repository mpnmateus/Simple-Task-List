const inputElement = document.querySelector(".new-task-input"); 
const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container");

const validateInput = () => inputElement.value.trim().lenght > 0;
    /*  
    if (return inputElement.Value.trim().lenght > 0) {
        return true;
    } else {
        return false;
    }
    */
   // A função abaixo é uma forma de escrever a função de cima em apenas 1 linha 


const handleAddTask = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid);

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    //Abaixo, criação da div no body do html em JS:
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener("click", () => handleClick(taskContent));

    const deleteItem = document.createElement("i");
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");

    deleteItem.addEventListener("click", () => handleDeleteCLick(taskItemContainer, taskContent));

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";
};

const handleCLick = (taskContent) => {
    const tasks = tasksContainer.childNodes;
    
    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)){
            task.firstChild.classList.toggle("Completed");
        }
    }
};

const handleDeleteCLick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            taskItemContainer.remove();
        }
    }
};

const handleInputChange = () => {
    const inputIsValid = validateInput ();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());