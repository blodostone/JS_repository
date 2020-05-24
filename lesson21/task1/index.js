const tasks = [
    { text: "Buy milk", done: false },
    { text: "Pick up Tom from airport", done: false },
    { text: "Visit party", done: false },
    { text: "Visit doctor", done: true },
    { text: "Buy meat", done: true },
];

const renderListItem = (listItems) => {
    const listElem = document.querySelector(".list");

    const listElemItems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listCreateElem = document.createElement("li");
            listCreateElem.classList.add("list__item");
            if (done) {
                listCreateElem.classList.add("list__item_done");
            }
            const checkboxElem = document.createElement("input");
            checkboxElem.setAttribute("type", "checkbox");
            checkboxElem.checked = done;

            checkboxElem.classList.add("list__item-checkbox");
            listCreateElem.append(checkboxElem, text);

            return listCreateElem;
        });
    listElem.append(...listElemItems);
};
//   renderListItem(tasks);