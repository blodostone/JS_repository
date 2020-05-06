const contacts = [{
        name: 'Staso',
        phoneNumber: '32423-324-423',
    },
    {
        name: 'Peter',
        phoneNumber: '13343-324-426',
    },
    {
        name: 'Nick',
        phoneNumber: '54356-324-428',
    },
];

const sortContacts = (contacts, ifContacts = true) => {
    if (!Array.isArray(contacts)) {
        return null;
    }

    // while (true) {
    //     const user = contacts
    //         .sort((a, b) => {
    //             return a.name.localeCompare(b.name);
    //         });
    //     if (user.length === 0) {
    //         break;
    //     }
    // } 
    const user = contacts
        .sort((a, b) => {
            return b.name.localeCompare(a.name);
        });
    if (ifContacts == false) {
        user = contacts
            .sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
    }
    return user;



}

const result = sortContacts(contacts);

console.log(result)