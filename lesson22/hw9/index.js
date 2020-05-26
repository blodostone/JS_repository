const elem = document.querySelectorAll('.pagination__page');

// const findElem = document.querySelector('div > button-child(2)');
// const findDataElem = findElem.getAttribute('date-page-number');

function handleClick(event) {
    console.log(event.target.dataset.pageNumber);
}

elem[0].addEventListener('click', handleClick);
elem[1].addEventListener('click', handleClick);
elem[2].addEventListener('click', handleClick);