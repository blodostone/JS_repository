let message = 'Just learn it';

let string = 'Good job!';
let boldStr = string.bold();

let sender1 = 'GromCode';
let boldSender1 = sender1.bold();

// export default function createMessenger() {

//     function sendMessage(name) {
//         let sender = 'GromCode';

//         console.log(`${name}, ${message}! Your ${sender}`);
//     }

//     function setMessage(text) {
//         message = text.bold();

//     }

//     function setSender(string) {
//         message = string;

//     }

//     return {
//         sendMessage,
//         setMessage,
//         setSender,
//     };
// };


function createMessenger() {

    function sendMessage(name) {
        let sender = 'GromCode';

        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text.bold();
    }

    function setSender(string) {
        message = string;
        sender = boldSender1;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    };
};

const messanger1 = createMessenger();

messanger1.sendMessage('Bob');

const messanger2 = createMessenger();

messanger2.setMessage('Good job');
messanger1.sendMessage('Bob');

const messanger3 = createMessenger();

messanger3.setSender('Just learn it');
messanger3.setSender(boldSender1);
messanger1.sendMessage('Bob');

// export default createMessenger;