const elem = document.querySelectorAll('.pagination__page');

function handleClick(event) {
    console.log(event.dataset.pageNumber);
}

elem[0].addEventListener('click', handleClick);
elem[1].addEventListener('click', handleClick);
elem[2].addEventListener('click', handleClick);