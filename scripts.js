const inputElement = document.querySelector(".new-task-input"); 
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().lenght > 0;
    /*  
    if (return inputElement.ariaValueMax.trim().lenght > 0) {
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

};

addTaskButton.addEventListener("click", () => handleAddTask());