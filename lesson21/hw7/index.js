export function createButton(buttonText) {
    const elem = document.createElement('body');
    const createElem = elem.append = "<button>" + buttonText + "</button>";
    const contentElem = createElem.textContent;
    return contentElem
}
const buttonText = 'Button Text';
// createButton(buttonText);