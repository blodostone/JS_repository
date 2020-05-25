const elem = document.querySelector('.single-use-btn');

const handler = () => {
    console.log(elem.value = 'clicked');
}

elem.addEventListener('click', handler);
elem.removeEventListener('click', handler);