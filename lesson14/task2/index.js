let message = 'Just learn it';

const createMessenger = () => {

    export default function sendMessage(name) {
        const sender = 'GromCode';

        console.log(`${name}, ${message}! Your ${sender}`);
    }

    export default function setMessage(text) {
        message = text.bold();
    }

    export default function setSender(string) {
        message = string;
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

// messanger2.setMessage('Good job');
// messanger1.sendMessage('Bob');

// const messanger3 = createMessenger();

// messanger3.setSender('Just learn it');
// messanger1.sendMessage('Bob');

export default createMessenger;