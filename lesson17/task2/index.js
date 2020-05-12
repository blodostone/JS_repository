export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    }
}

callbackPrompt.showPrompt();