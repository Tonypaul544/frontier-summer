import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * saveSponsor(form)
 * form: {name, company, email, package, message}
 */
export async function saveSponsor(form){
  const col = collection(db, 'sponsors');
  const docRef = await addDoc(col, {...form, createdAt: serverTimestamp()});
  return docRef.id;
}

/**
 * saveContact(form)
 * form: {name, email, message}
 */
export async function saveContact(form){
  const col = collection(db, 'contacts');
  const docRef = await addDoc(col, {...form, createdAt: serverTimestamp()});
  return docRef.id;
}
