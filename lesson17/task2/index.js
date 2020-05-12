export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        setTimeout(() => {
            console.log(phoneNumber);
        }, 1000)
    }
}

callbackPrompt.showPrompt();