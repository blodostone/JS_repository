const elem = document.querySelector('.search__btn');

const inputElem = document.querySelector('.search__input');



elem.addEventListener('click', () => {
    console.log(inputElem.value);
});