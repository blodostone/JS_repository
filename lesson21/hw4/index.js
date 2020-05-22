export function setTitle(text) {
    const elem = document.querySelector('.title');
    const getElem = elem.textContent = text;
    return getElem
}
// setTitle();