const letTime = time => {
    if (time < 10) {
        return `0${time}`;
    }
    return time;
};
export const timer = {
    minsPassed: 0,
    secondsPassed: 0,
    _interval: null,
    startTimer() {
        this._interval = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },
    resetTimer() {
        this.stopTimer();
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
    stopTimer() {
        clearInterval(this._interval);
        this._interval = null;
    },
    getTime() {
        const formatTime = letTime(this.secondsPassed);
        return `${this.minsPassed}:${formatTime}`;
    },
}