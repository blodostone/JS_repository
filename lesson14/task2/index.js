const createMessenger = () => {
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

export default createMessenger;

const messanger1 = createMessenger();

messanger1.sendMessage('Bob');

let str = 'Good job';
let bold1 = str.bold();

const messanger2 = createMessenger();

messanger2.setMessage(bold1);

let str2 = 'GromCode';
let bold2 = str2.bold();

const messanger3 = createMessenger();

messanger3.setSender(bold2);


// function createMessenger() {
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


// export default createMessenger;