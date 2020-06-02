const listElem = document.querySelector(".list");

const tasks = [{
        text: "Buy milk",
        done: false,
        createDate: new Date().toISOString(),
        finishDate: null,
        id: "1",
    },
    {
        text: "Pick up Tom from airport",
        done: false,
        createDate: new Date().toISOString(),
        finishDate: null,
        id: "2",
    },
    {
        text: "Visit party",
        done: false,
        createDate: new Date().toISOString(),
        finishDate: null,
        id: "3",
    },
    {
        text: "Visit doctor",
        done: true,
        createDate: new Date().toISOString(),
        finishDate: new Date().toISOString(),
        id: "4",
    },
    {
        text: "Buy meat",
        done: true,
        createDate: new Date().toISOString(),
        finishDate: new Date().toISOString(),
        id: "5",
    },
];

const compareTasks = (a, b) => {
    if (a.done - b.done !== 0) {
        return a.done - b.done;
    }
    if (a.done) {
        return new Date(b.finishDate) - new Date(a.finishDate);
    }
    return new Date(b.createDate) - new Date(a.createDate);
};

const renderTasks = (tasksList) => {
    listElem.innerHTML = "";
    const tasksElems = tasksList
        .slice()
        .sort(compareTasks)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement("li");
            listItemElem.classList.add("list__item");
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("data-id", id);
            checkbox.checked = done;
            checkbox.classList.add("list__item-checkbox");
            if (done) {
                listItemElem.classList.add("list__item_done");
            }
            listItemElem.append(checkbox, text);
            return listItemElem;
        });
    listElem.append(...tasksElems);
};

renderTasks(tasks);

todoListElem.addEventListener("click", onToggleTask);


const onToggleTask = (event) => {
    const isCheckbox = event.target.classList.contains("list__item-checkbox");

    if (!isCheckbox) return;

    const task = tasks.find((task) => task.id === event.target.dataset.id);

    task.done = event.target.checked;
    task.done ?
        (task.finishDate = new Date().toISOString()) :
        (task.finishDate = null);

    renderTasks(tasks);
};

const todoListElem = document.querySelector(".list");


createBtnElem.addEventListener("click", onCreateTask);

const createBtnElem = document.querySelector(".create-task-btn");
const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector(".task-input");
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    }
    taskTitleInputElem.value = "";
    tasks.push({
        text,
        done: false,
        createDate: new Date().toISOString(),
        finishDate: null,
        id: Math.random().toString(),
    });
    renderTasks(tasks);
};