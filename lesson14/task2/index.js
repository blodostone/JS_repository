let message = 'Just learn it';

let sender1 = 'GromCode';

export default function createMessenger() {

    function sendMessage(name) {
        let sender = 'GromCode';

        console.log(`${'Bob'}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text.bold();

    }

    function setSender(string, sender) {
        message = string;
        sender = sender.bold();
    }



    return {
        sendMessage,
        setMessage,
        setSender,
    };
};


// function createMessenger() {

//     function sendMessage(name) {
//         let sender = 'GromCode';
//         let name = 'Bob';

//         console.log(`${name}, ${message}! Your ${sender}`);
//     }

//     function setMessage(text) {
//         message = text.bold();
//     }

//     function setSender(string, sender1) {
//         message = string;
//         sender = sender1.bold();
//     }

//     return {
//         sendMessage,
//         setMessage,
//         setSender,
//     };
// };

// const messanger1 = createMessenger();

// messanger1.sendMessage('Bob');

// const messanger2 = createMessenger();

// messanger2.setMessage('Good job');
// messanger1.sendMessage('Bob');

// const messanger3 = createMessenger();

// messanger3.setSender('Just learn it');
// messanger1.sendMessage('Bob');

// export default createMessenger;