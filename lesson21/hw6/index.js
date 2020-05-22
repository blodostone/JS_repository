export function clearList() {
    const elem = document.querySelector('.categories');
    const installElem = elem.innerHTML = "";
    return installElem
}
// clearList();