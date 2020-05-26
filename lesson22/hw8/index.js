const elem = document.querySelector('.task-status');
const checkboxElem = document.querySelector('[type = checkbox]');

elem.addEventListener('change', (event) => {
    if (event.target.checked === true) {
        console.log(true);
    } else if (event.target.checked === false) {
        console.log(false);
    }
});

elem.addEventListener('change', (event) => {
    console.log(event.target.checked);
})