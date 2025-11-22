import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export const addData = async (collection, data) => {
  try {
    await firestore.collection(collection).add(data);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

export const getData = async (collection) => {
  try {
    const snapshot = await firestore.collection(collection).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

export const updateData = async (collection, id, data) => {
  try {
    await firestore.collection(collection).doc(id).update(data);
  } catch (error) {
    console.error('Error updating document: ', error);
  }
};