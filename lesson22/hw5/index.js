const elem = document.querySelector('.single-use-btn');

// const handler = () => {
//     console.log('clicked');
// }

// elem.addEventListener('click', handler);
// elem.removeEventListener('click', handler);

elem.innerHTML += 'clicked';

elem.addEventListener('click', () => {
    console.log(elem.innerHTML);
});
elem.removeEventListener('click', () => {
    console.log(elem.innerHTML);
});