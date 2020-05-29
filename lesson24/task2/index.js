const formatter = new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
});

export const getGreenwitchTime = date => formatter.format(date);

// console.log(getGreenwitchTime(new Date()));