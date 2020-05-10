let str = 'Good job';
let bold1 = str.bold();

let str2 = 'GromCode';
let bold2 = str2.bold();

// export default function createMessenger() {
//     let sender = 'GromCode';
//     let message = 'Just learn it';

//     function sendMessage(name) {


//         console.log(`${name}, ${message}! Your ${sender}`);
//     }

//     function setMessage(text) {
//         message = text;

//     }

//     function setSender(string) {
//         sender = string;
//     }



//     return {
//         sendMessage,
//         setMessage,
//         setSender,
//     };
// };


function createMessenger() {
    let sender = 'GromCode';
    let message = 'Just learn it';

    function sendMessage(name) {


        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text;

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

// const messanger1 = createMessenger();

// messanger1.sendMessage('Bob');

// const messanger2 = createMessenger();

// messanger2.setMessage(bold1);
// messanger1.sendMessage('Bob');

// const messanger3 = createMessenger();

// messanger3.setSender('Just learn it');
// messanger3.setSender(bold2);
// messanger1.sendMessage('Bob');

// export default createMessenger;