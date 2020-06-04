export const pinger = (num, period) => {
    let g = num;
    console.log('Ping');

    const interval = setInterval(() => {
        if (--g > 0) {
            console.log('Ping');
        } else {
            clearInterval(interval);
        }
    }, period);
}

// pinger(5, 1000);