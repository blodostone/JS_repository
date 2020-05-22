export function getTitle() {
    const titleList = document.querySelector('.title');
    const contentList = titleList.textContent;
    return contentList;
}
// getTitle();

export function getDescription() {
    const aboutList = document.querySelector('.about');
    const innerList = aboutList.innerText;
    return innerList;
}
// getDescription();

export function getPlans() {
    const createPlans = document.querySelector('.plans');
    const innerPlans = createPlans.innerHTML;
    return innerPlans;
}
// getPlans();

export function getGoal() {
    const createGoal = document.querySelector('.goal');
    const outerGoal = createGoal.outerHTML;
    return outerGoal;
}
// getGoal();