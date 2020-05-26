const elem = document.querySelector('.single-use-btn');

const handler = () => {
    console.log(elem.innerHTML = 'clicked');
}

elem.addEventListener('click', handler);
elem.removeEventListener('click', handler);

// elem.innerHTML = 'clicked';

// elem.addEventListener('click', () => {
//     console.log(elem.innerHTML);
// });