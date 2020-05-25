export function squaredNumbers() {
    const elem = document.querySelectorAll("[data-number]");
    for (let g = 0; g < element.length; g++) {
        let number = elem[g].dataset.number * elem[g].dataset.number;
        elem[g].setAttribute("data-squared-number", number);
    }
}
// squaredNumbers();