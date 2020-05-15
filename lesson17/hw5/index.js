const letTime = (time) => {
    if (time < 10) {
        return `0${time}`;
    }
    return time;
}
export const timer = {
    minsPassed: 0,
    secondsPassed: 0,
    getInterval: null,
    startTimer() {
        this.getInterval = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 3000);
    },
    resetTimer() {
        this.stopTimer();
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
    stopTimer() {
        clearInterval(this.getInterval);
        this.getInterval = null;
    },
    getTime() {
        const formatTime = letTime(this.secondsPassed);
        return `${this.minsPassed}:${formatTime}`;
    },
}