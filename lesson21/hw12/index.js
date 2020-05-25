export function getSection(sum) {
    const elem = document.querySelector(`span[data-number='${sum}']`);
    return elem.closest('.box').dataset.section;
}
// console.log(getSection(5));