import { getFirestore, doc, setDoc } from 'firebase/firestore';

async function createContact(contact) {
    let db = getFirestore();
    await setDoc(doc(db, "contacts", contact.id), contact);
}

export default createContact;