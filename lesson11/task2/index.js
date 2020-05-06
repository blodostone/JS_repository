const contacts = [{
        name: 'Staso',
        phoneNumber: '1111-111-11',
    },
    {
        name: 'Peter',
        phoneNumber: '2222-222-22',
    },
    {
        name: 'Nick',
        phoneNumber: '3333-333-33',
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
    let user = contacts
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    if (ifContacts == false) {
        user = contacts
            .sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
    }
    return user;



}

const result = sortContacts(contacts, true);

console.log(result)