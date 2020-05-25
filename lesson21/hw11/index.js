export function squaredNumbers() {
    const elem = document.querySelectorAll("[data-number]");
    for (let g = 0; g < element.length; g++) {
        let number = elem.dataset.number * elem.dataset.number;
        elem.setAttribute("data-squared-number", number);
    }
}
// squaredNumbers();