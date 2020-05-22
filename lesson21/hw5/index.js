export function setButton(buttonText) {
    const elem = document.querySelector('body');
    const innerElem = elem.innerHTML = "<button>" + buttonText + "</button>";
    // const contentElem = elem.textContent == "<button>" + buttonText +"</button>";
    return innerElem;
    // return contentElem
}
// setButton(buttonText);