import {doc, setDoc } from 'firebase/firestore';

const newContact = (contact) => {
    await setDoc(doc(db, "contacts", contact.id), {
        lastName: contact.lastName,
        firstName: contact.firstName,

        phone: contact.phone,
        email: contact.email,
        
        birthday: contact.birthday,
        
        maritalStatus: contact.maritalStatus,
        spouse: contact.spouse,

        children: contact.children,

        warmth: contact.warmth,

        giving: contact.giving,

        communication: contact.communication
    })
}

export default newContact;