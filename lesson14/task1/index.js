let message = 'Just learn it';

export function sendMessage(name) {
    let sender = 'GromCode';

    console.log(`${name}, ${message} Your ${sender}`);
}

export function setMessage(newMessage) {
    message = newMessage + '!';
}



// let message = 'Just learn it';

// function sendMessage(name) {
//      sender = 'GromCode';

//     console.log(`${name}, ${message}! Your ${sender}`);
// }

// function setMessage(text) {
//     message = text;
// }
sendMessage('Ann');

// setMessage('Good job');

// sendMessage('Ann');