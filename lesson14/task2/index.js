export default function createMessenger() {
    let sender = 'GromCode';
    let message = 'Just learn it';

    function sendMessage(name) {


        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text.bold();

    }

    function setSender(string) {
        sender = string;
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