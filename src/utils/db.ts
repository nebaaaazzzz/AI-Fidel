import { db } from '@/config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toastError } from './toast';

export async function addDocToCollection(collectionName: string, data: any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
  } catch (e) {
    toastError(e.message);
  }
}
