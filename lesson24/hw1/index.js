// const startDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
//     const endDate = new Date(Date.UTC(2019, 1, 22, 17, 52, 18));



// const getDiff = (startDate, endDate) => 



const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;
export const getDiff = (startDate, endDate) => {
    const absElem = Math.abs(endDate - startDate);
    const dayElem = Math.floor(absElem / day);
    // console.log(dayElem)
    const hourElem = Math.floor((absElem % day) / hour);
    const minElem = Math.floor((absElem % hour) / min);
    const secElem = Math.floor((absElem % min) / sec);
    // console.log(secElem)
    // console.log(hourElem)
    return `day:${dayElem}, hour:${hourElem}, min:${minElem}, sec:${secElem}.`;
};

// const result = getDiff(
//     new Date(2019, 5, 13, 3, 24, 0),
//     new Date(2019, 11, 17, 12, 12, 0)
// );
// console.log(result);