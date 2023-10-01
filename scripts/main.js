
const priorities = ["Normal", "Important", "Urgent"];
const priorities_styles = ["green-marker", "orange-marker", "red-marker"];

let taskName = "";
let priority = 0;

let idCounter = 0;

const createTask = (taskName, priority) => {
    return {
        "name": taskName,
        "priority": priority
    }
}


function updateTaskName(event) {
    taskName = event.target.value;
}

function updatePriority(event) {
    priority = Number(event.target.value);
}

function removeTask(taskId) {
    const taskElement = document.getElementById(taskId);
    taskElement.remove();
}

function registerTask(event) {

    if (!taskName || taskName.length < 4) return;

    const hint = document.getElementById('hint');

    if (hint) hint.remove();

    const task = createTask(taskName, priorities[priority]);

    const taskDiv = document.getElementById('tasks');

    taskDiv.innerHTML += `<span class="task secondary-background" id="${idCounter}">
        <div>
            <p>${task.name}</p>
            <p class="${priorities_styles[priority]} priority">${task.priority}</p>
        </div>
        <button onClick="removeTask(${idCounter});">Resolver</button>
    </span>`

    idCounter += 1;
}
