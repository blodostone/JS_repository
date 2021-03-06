const elem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');



const logTarget = (text, color) => {
        const eventsListElem = document.querySelector('.events-list');
        eventsListElem.innerHTML += `<span style = "color: ${color}; margin-left: 8px;">${text}</span>`;
    }
    // function myElement() {
    //     const elem = document.querySelector('.rect_div');

//     const logTarget = (text, color) => {
//         const eventsListElem = document.querySelector('.events-list');
//         eventsListElem.innerHTML += `<span style = "color: ${color}"; margin-left: 8px;>${text}</span>`;
//     }
//     elem.addEventListener('click', () => logTarget('DIV', 'grey'));
//}

//build

const logGreenDiv = logTarget.bind(null, "DIV", 'green');
const logGreenP = logTarget.bind(null, "P", 'green');
const logGreenSpan = logTarget.bind(null, "Span", 'green');


const logGreyDiv = logTarget.bind(null, "DIV", 'grey');
const logGreyP = logTarget.bind(null, "P", 'grey');
const logGreySpan = logTarget.bind(null, "SPAN", 'grey');



elem.addEventListener('click', logGreyDiv, true)
elem.addEventListener('click', logGreenDiv)

pElem.addEventListener('click', logGreyP, true)
pElem.addEventListener('click', logGreenP)

spanElem.addEventListener('click', logGreySpan, true)
spanElem.addEventListener('click', logGreenSpan)


//clear


function clearNullEvents() {
    listElem.innerHTML = null;
};

const listElem = document.querySelector('.events-list')
const btnElem = document.querySelector('.clear-btn')

btnElem.addEventListener('click', clearNullEvents)


//turn


function turnOffElement() {
    elem.removeEventListener('click', logGreyDiv, true)
    elem.removeEventListener('click', logGreenDiv)

    pElem.removeEventListener('click', logGreyP, true)
    pElem.removeEventListener('click', logGreenP)

    spanElem.removeEventListener('click', logGreySpan, true)
    spanElem.removeEventListener('click', logGreenSpan)
}
const btnRemoveElem = document.querySelector('.remove-handlers-btn')
btnRemoveElem.addEventListener('click', turnOffElement);



function turnOnElement() {
    elem.addEventListener('click', logGreyDiv, true);
    elem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreyP);

    spanElem.addEventListener('click', logGreySpan, true)
    spanElem.addEventListener('click', logGreySpan)
}
const btnOnElem = document.querySelector('.attach-handlers-btn')
btnOnElem.addEventListener('click', turnOnElement)