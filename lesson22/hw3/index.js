const elem = document.querySelector('.task-status');
const checkboxElem = document.querySelector('[type = checkbox]');

elem.addEventListener('change', () => {
    if (checkboxElem.checked === true) {
        console.log(true);
    } else if (checkboxElem.checked === false) {
        console.log(false);
    }
});