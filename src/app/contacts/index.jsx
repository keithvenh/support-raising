import NewContact from './new';
import {collectoin, doc, setDoc, query, orderBy, getFirestore} from 'firebase/firestore';

function Contacts(props) {

    // const db = getFirestore();
    // const contactsRef = doc(db, "contacts")
    // const q = query(contactsRef, orderBy("lastName"), orderBy("firstName"))
    return (
        <div className='page contacts contacts-page'>
            <h1>Contacts</h1>
            <NewContact />
        </div>
    )
}

export default Contacts;