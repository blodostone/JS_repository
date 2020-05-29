//input данные date, days
//output строку


const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

export const dayOfWeek = (date, days) => {
    const days = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(date + days);

    return weekDays[new Date(dateInFuture).getDay()];
};

const result = getDayOfWeek(new Date(2019, 0, 1), 14);

// console.log(result);