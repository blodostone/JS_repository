export const pinger = (num, period) => {
    let g = num;

    const interval = setInterval(() => {
        if (--g > 0) {
            console.log('Ping');
        } else {
            clearInterval(interval);
        }
    }, period);
}

pinger(5, 1000);