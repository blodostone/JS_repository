const listElem = document.querySelector('.list');

const tasks = [
    { text: 'Buy milk', done: false, finishDate: null, createDate: '2019-10-24T15:51:32.222Z', id: '1' },
    { text: 'Pick up Tom from airport', done: false, finishDate: null, createDate: '2019-10-25T15:51:32.222Z', id: '2' },
    { text: 'Visit party', done: false, finishDate: null, createDate: '2019-10-26T15:51:32.222Z', id: '3' },
    { text: 'Visit doctor', done: true, finishDate: '2019-11-28T15:51:32.222Z', createDate: '2019-10-27T15:51:32.222Z', id: '4' },
    { text: 'Buy meat', done: true, finishDate: '2019-11-28T15:51:32.222Z', createDate: '2019-10-28T15:51:32.222Z', id: '5' },
];

const renderTasks = tasksList => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            };
            if (a.done) {
                return new Date(b.finishDate) - new Date(a.finishDate);
            }
            return new Date(b.createDate) - new Date(a.createDate);
        })
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', id);
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });
    listElem.append(...tasksElems);
};


renderTasks(tasks);


listElem.addEventListener('click', onToggleTask);

// algo
//1. check if checkbox is clicked, if not - exit +++
//2. get checkbox data-id +++
//3. find by task id +++
//4. update task
//5. render tasks
function onToggleTask(event) {
    if (!event.target.classList.contains('list__item-checkbox')) {
        return;
    }
    let task = tasks.find(task => task.id === event.target.dataset.id);
    task.done = event.target.checked;
    task.finishDate = new Date().toString();
    // Object.assign(task, {
    //     done: event.target.checked,
    //     finishDate: new Date().toISOString()
    // });


    renderTasks(tasks);

}

// algo
//1. find btn, input 
//2. (if) for check input empty or not empty.
//3. add new obj for list
//4. render tasks

const createBtnElem = document
    .querySelector('.create-task-btn')
    .addEventListener('click', onCreateTask);

function onCreateTask() {
    //TODO
    const inputElem = document.querySelector('.task-input');
    const inputValue = inputElem.value;
    if (!inputValue) {
        return;
    }

    inputElem.value = '';

    // const addLength = tasks.lenth++;

    tasks.push({
        done: false,
        createData: new Date().toISOString(),
        text: inputValue,
        id: Math.random().toString(),
        finishDate: new Date().toISOString()
    });


    renderTasks(tasks);
}