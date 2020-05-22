export function createButton(buttonText) {
    const elem = document.querySelector('body');
    const createElem = document.createElement('button');
    // const contentElem = createElem.textContent;
    createElem.textContent = buttonText;
    elem.append(createElem);
    // return contentElem
}
const buttonText = 'Button Text';
// createButton(buttonText);