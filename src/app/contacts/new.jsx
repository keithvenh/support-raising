import newContact from '../../db/contact/new';

let contact = {
    id: "venhlore",
    lastName: "VenHuizen",
    firstName: "Loren",

    phone: '6052610944',
    email: 'lvh@midco.net',
    
    birthday: new Date(1963, 0, 6),
    
    maritalStatus: true,
    spouse: {
        name: "Tammy",
        phone: "6052612638",
        email: "tvenhui@midco.net",
        birthday: new Date(1965, 4, 16)
    },

    children: {
        0: {
            name: "Heather",
            birthday: new Date(1985, 11, 3),
        },
        1: {
            name: "Keith",
            birthday: new Date(1988, 7, 22),
        },
        2: {
            name: "Zack",
            birthday: new Date(1990, 4, 1)
        },
        3: {
            name: "Rachel",
            birthday: new Date(1993, 2, 9)
        }
    },

    warmth: 5,

    giving: {
        active: true,
        frequency: 'monthly',
        amount: 825,
        last: new Date(2021, 10)
    },

    communication: {
        preference: 'text',
        frequency: 'bi-weekly',
        last: new Date(2021, 11, 3),
        lastType: 'video call'
    }
}