export function getItemsList() {
    const elementsList = document.querySelectorAll(".technology");
    console.dir(elementsList);
    return elementsList;
}
getItemsList();

export function getItemsArray() {
    const getArray = document.querySelectorAll(".tool");
    const elementsArray = Array.from(getArray);
    console.dir(elementsArray);
    return elementsArray;
}
getItemsArray();