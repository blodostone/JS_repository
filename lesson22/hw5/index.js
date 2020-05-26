const elem = document.querySelector('.single-use-btn');

elem.innerHTML = 'clicked';

const handler = () => {
    console.log('clicked');
}

elem.addEventListener('click', handler);
elem.removeEventListener('click', handler);


// elem.addEventListener('click', () => {
//     console.log(elem.innerHTML);
// });